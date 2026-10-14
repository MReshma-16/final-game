import * as THREE from 'three';

export interface PathSegment {
  a: THREE.Vector2;
  b: THREE.Vector2;
  doorRequired?: number; // 1 or 2
  branch?: 'left' | 'right' | 'main' | 'p1' | 'p2';
}

export const PATH_HALF_WIDTH = 1.75;
export const P1_SPAWN = new THREE.Vector3(-60, 0.2, 90);
export const P2_SPAWN = new THREE.Vector3(60, 0.2, 90);
export const DOOR1_POS = new THREE.Vector3(-12, 0, 10);
export const DOOR2_POS = new THREE.Vector3(12, 0, 10);
export const CUP_POS = new THREE.Vector3(0, 1.8, -220);
export const JUNCTION_POS = new THREE.Vector3(0, 0, -35);

/**
 * High-precision waypoints outlining the natural curved forest trails,
 * doors, and the branching junction that splits into Left and Right scenic trails.
 */
function generateCurvedWaypoints(points: [number, number][], samplesPerSeg = 3): THREE.Vector2[] {
  const curve = new THREE.CatmullRomCurve3(
    points.map(([x, z]) => new THREE.Vector3(x, 0, z)),
    false,
    'centripetal',
    0.35
  );
  const totalCount = (points.length - 1) * samplesPerSeg;
  const sampled = curve.getPoints(totalCount);
  return sampled.map((p) => new THREE.Vector2(p.x, p.z));
}

// 1. Player 1 curved trail (South-West Spawn -> Door 1)
const P1_WAYPOINTS: [number, number][] = [
  [-60, 90],
  [-48, 88],
  [-36, 82],
  [-26, 70],
  [-20, 54],
  [-16, 38],
  [-12, 22],
  [-12, 10] // Door 1
];

// Past Door 1 to Junction
const P1_TO_JUNCTION: [number, number][] = [
  [-12, 10],
  [-12, -2],
  [-10, -16],
  [-6, -26],
  [0, -35] // Main Forest Junction
];

// 2. Player 2 curved trail (South-East Spawn -> Door 2)
const P2_WAYPOINTS: [number, number][] = [
  [60, 90],
  [48, 88],
  [36, 82],
  [26, 70],
  [20, 54],
  [16, 38],
  [12, 22],
  [12, 10] // Door 2
];

// Past Door 2 to Junction
const P2_TO_JUNCTION: [number, number][] = [
  [12, 10],
  [12, -2],
  [10, -16],
  [6, -26],
  [0, -35] // Main Forest Junction
];

// 3. Branch A: Left Scenic Trail (Pine Grove & Mossy Boulders)
const LEFT_BRANCH_WAYPOINTS: [number, number][] = [
  [0, -35],   // Fork start
  [-9, -52],
  [-16, -72],
  [-20, -96],
  [-21, -122],
  [-17, -148],
  [-10, -172],
  [0, -192]   // Merge point
];

// 4. Branch B: Right Ridge Trail (Sunlit Forest Ridge)
const RIGHT_BRANCH_WAYPOINTS: [number, number][] = [
  [0, -35],   // Fork start
  [9, -52],
  [16, -72],
  [20, -96],
  [21, -122],
  [17, -148],
  [10, -172],
  [0, -192]   // Merge point
];

// 5. Final Summit Walk to the Champion's Cup
const SUMMIT_WAYPOINTS: [number, number][] = [
  [0, -192],
  [0, -204],
  [0, -220]
];

function ptsToSegments(
  pts: THREE.Vector2[],
  doorRequired?: number,
  branch: 'left' | 'right' | 'main' | 'p1' | 'p2' = 'main'
): PathSegment[] {
  const segments: PathSegment[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    segments.push({
      a: pts[i].clone(),
      b: pts[i + 1].clone(),
      doorRequired,
      branch
    });
  }
  return segments;
}

/** Generates all continuous curved segments forming the complete Forest arena */
export function buildArenaSegments(): PathSegment[] {
  const p1Pts = generateCurvedWaypoints(P1_WAYPOINTS, 3);
  const p1DoorPts = generateCurvedWaypoints(P1_TO_JUNCTION, 3);

  const p2Pts = generateCurvedWaypoints(P2_WAYPOINTS, 3);
  const p2DoorPts = generateCurvedWaypoints(P2_TO_JUNCTION, 3);

  const leftPts = generateCurvedWaypoints(LEFT_BRANCH_WAYPOINTS, 3);
  const rightPts = generateCurvedWaypoints(RIGHT_BRANCH_WAYPOINTS, 3);
  const summitPts = generateCurvedWaypoints(SUMMIT_WAYPOINTS, 3);

  return [
    ...ptsToSegments(p1Pts, undefined, 'p1'),
    ...ptsToSegments(p1DoorPts, 1, 'p1'),
    ...ptsToSegments(p2Pts, undefined, 'p2'),
    ...ptsToSegments(p2DoorPts, 2, 'p2'),
    ...ptsToSegments(leftPts, undefined, 'left'),
    ...ptsToSegments(rightPts, undefined, 'right'),
    ...ptsToSegments(summitPts, undefined, 'main')
  ];
}

/** Pre-computed array of segments for fast querying */
export const ALL_ARENA_SEGMENTS: PathSegment[] = buildArenaSegments();

/** Flat array format: [ax, az, bx, bz] for Heightfield */
export const ARENA_PATHS_ARRAY: [number, number, number, number][] = ALL_ARENA_SEGMENTS.map((s) => [
  s.a.x,
  s.a.y,
  s.b.x,
  s.b.y
]);

/**
 * Finds the closest point and distance on the active segments to a 2D world position.
 */
export function findClosestPathPoint(
  x: number,
  z: number,
  segments: PathSegment[]
): { point: THREE.Vector2; distance: number; tangent: THREE.Vector2; segment: PathSegment } {
  const p = new THREE.Vector2(x, z);
  let bestDist = Infinity;
  let bestProj = new THREE.Vector2();
  let bestTangent = new THREE.Vector2(0, -1);
  let bestSeg = segments[0];

  for (const seg of segments) {
    const ab = seg.b.clone().sub(seg.a);
    const lenSq = ab.lengthSq();
    let t = 0;
    if (lenSq > 0.00001) {
      t = ab.dot(p.clone().sub(seg.a)) / lenSq;
      t = Math.max(0, Math.min(1, t));
    }
    const proj = seg.a.clone().add(ab.multiplyScalar(t));
    const d = p.distanceTo(proj);
    if (d < bestDist) {
      bestDist = d;
      bestProj = proj;
      bestSeg = seg;
      const tan = ab.normalize();
      if (tan.lengthSq() > 0.1) {
        bestTangent = tan;
      }
    }
  }

  return { point: bestProj, distance: bestDist, tangent: bestTangent, segment: bestSeg };
}
