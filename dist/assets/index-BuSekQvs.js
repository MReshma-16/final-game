var Xv=Object.defineProperty;var Yv=(t,e,n)=>e in t?Xv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var N=(t,e,n)=>Yv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ur="180",qv=0,Vd=1,Qv=2,Rm=1,Dm=2,qi=3,rs=0,Kt=1,mn=2,gn=0,Xr=1,Wd=2,Xd=3,Yd=4,jv=5,Ks=100,Kv=101,Zv=102,Jv=103,$v=104,e1=200,t1=201,n1=202,i1=203,Zl=204,Jl=205,s1=206,r1=207,a1=208,o1=209,c1=210,l1=211,u1=212,h1=213,d1=214,$l=0,oc=1,eu=2,Zr=3,tu=4,nu=5,iu=6,su=7,Pm=0,f1=1,p1=2,es=0,m1=1,g1=2,v1=3,x1=4,A1=5,_1=6,E1=7,Im=300,Jr=301,$r=302,ru=303,au=304,bc=306,rr=1e3,Qn=1001,as=1002,vn=1003,M1=1004,Ao=1005,Zt=1006,sl=1007,Ss=1008,rn=1009,Lm=1010,Bm=1011,Xa=1012,mh=1013,ar=1014,_i=1015,hr=1016,gh=1017,vh=1018,ea=1020,Um=35902,Fm=35899,Om=1021,Nm=1022,li=1023,Ya=1026,ta=1027,Cc=1028,xh=1029,km=1030,Ah=1031,_h=1033,Ko=33776,Zo=33777,Jo=33778,$o=33779,ou=35840,cu=35841,lu=35842,uu=35843,hu=36196,du=37492,fu=37496,pu=37808,mu=37809,gu=37810,vu=37811,xu=37812,Au=37813,_u=37814,Eu=37815,Mu=37816,Su=37817,yu=37818,wu=37819,Tu=37820,bu=37821,Cu=36492,Ru=36494,Du=36495,Pu=36283,Iu=36284,Lu=36285,Bu=36286,dr=3200,S1=3201,zm=0,y1=1,Ri="",pt="srgb",Rs="srgb-linear",cc="linear",Et="srgb",Mr=7680,qd=519,w1=512,T1=513,b1=514,Hm=515,C1=516,R1=517,D1=518,P1=519,Qd=35044,jd="300 es",Di=2e3,lc=2001;class us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kd=1234567;const Ga=Math.PI/180,qa=180/Math.PI;function fa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[t&255]+Mn[t>>8&255]+Mn[t>>16&255]+Mn[t>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[n&63|128]+Mn[n>>8&255]+"-"+Mn[n>>16&255]+Mn[n>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function Eh(t,e){return(t%e+e)%e}function I1(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function L1(t,e,n){return t!==e?(n-t)/(e-t):0}function Va(t,e,n){return(1-n)*t+n*e}function B1(t,e,n,i){return Va(t,e,1-Math.exp(-n*i))}function U1(t,e=1){return e-Math.abs(Eh(t,e*2)-e)}function F1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function O1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function N1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function k1(t,e){return t+Math.random()*(e-t)}function z1(t){return t*(.5-Math.random())}function H1(t){t!==void 0&&(Kd=t);let e=Kd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function G1(t){return t*Ga}function V1(t){return t*qa}function W1(t){return(t&t-1)===0&&t!==0}function X1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Y1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function q1(t,e,n,i,s){const r=Math.cos,a=Math.sin,o=r(n/2),c=a(n/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":t.set(o*h,c*u,c*d,o*l);break;case"YZY":t.set(c*d,o*h,c*u,o*l);break;case"ZXZ":t.set(c*u,c*d,o*h,o*l);break;case"XZX":t.set(o*h,c*g,c*f,o*l);break;case"YXY":t.set(c*f,o*h,c*g,o*l);break;case"ZYZ":t.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Nt={DEG2RAD:Ga,RAD2DEG:qa,generateUUID:fa,clamp:$e,euclideanModulo:Eh,mapLinear:I1,inverseLerp:L1,lerp:Va,damp:B1,pingpong:U1,smoothstep:F1,smootherstep:O1,randInt:N1,randFloat:k1,randFloatSpread:z1,seededRandom:H1,degToRad:G1,radToDeg:V1,isPowerOfTwo:W1,ceilPowerOfTwo:X1,floorPowerOfTwo:Y1,setQuaternionFromProperEuler:q1,normalize:Tn,denormalize:Hr};class te{constructor(e=0,n=0){te.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[n+0]=c,e[n+1]=l,e[n+2]=h,e[n+3]=u;return}if(o===1){e[n+0]=d,e[n+1]=f,e[n+2]=g,e[n+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*v,x=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const w=Math.sqrt(S),T=Math.atan2(w,p*x);m=Math.sin(m*T)/w,o=Math.sin(o*T)/w}const E=o*x;if(c=c*m+d*E,l=l*m+f*E,h=h*m+g*E,u=u*m+v*E,m===1-o){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[n]=c,e[n+1]=l,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[n]=o*g+h*u+c*f-l*d,e[n+1]=c*g+h*d+l*u-o*f,e[n+2]=l*g+h*f+o*d-c*u,e[n+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],c=n[9],l=n[2],h=n[6],u=n[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-n;return this._w=f*a+n*this._w,this._x=f*i+n*this._x,this._y=f*s+n*this._y,this._z=f*r+n*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-n)*h)/l,d=Math.sin(n*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,n=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*n-r*s),u=2*(r*i-a*n);return this.x=n+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,c=n.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rl=new P,Zd=new Jt;class qe{constructor(e,n,i,s,r,a,o,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,c,l)}set(e,n,i,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],x=s[1],S=s[4],E=s[7],w=s[2],T=s[5],C=s[8];return r[0]=a*v+o*x+c*w,r[3]=a*m+o*S+c*T,r[6]=a*p+o*E+c*C,r[1]=l*v+h*x+u*w,r[4]=l*m+h*S+u*T,r[7]=l*p+h*E+u*C,r[2]=d*v+f*x+g*w,r[5]=d*m+f*S+g*T,r[8]=d*p+f*E+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return n*a*h-n*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=n*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*l-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*n-s*c)*v,e[5]=(s*r-o*n)*v,e[6]=f*v,e[7]=(i*c-l*n)*v,e[8]=(a*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(al.makeScale(e,n)),this}rotate(e){return this.premultiply(al.makeRotation(-e)),this}translate(e,n){return this.premultiply(al.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const al=new qe;function Gm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Qa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Q1(){const t=Qa("canvas");return t.style.display="block",t}const Jd={};function ja(t){t in Jd||(Jd[t]=!0,console.warn(t))}function j1(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const $d=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K1(){const t={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(s.r=Yr(s.r),s.g=Yr(s.g),s.b=Yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?cc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ja("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ja("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Rs]:{primaries:e,whitePoint:i,transfer:cc,toXYZ:$d,fromXYZ:ef,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:$d,fromXYZ:ef,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),t}const ut=K1();function ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Yr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Sr;class Z1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Sr===void 0&&(Sr=Qa("canvas")),Sr.width=e.width,Sr.height=e.height;const s=Sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Sr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Qa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ts(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ts(n[i]/255)*255):n[i]=ts(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J1=0;class Mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=fa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ol(s[a].image)):r.push(ol(s[a]))}else r=ol(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function ol(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Z1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $1=0;const cl=new P;class Wt extends us{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,i=Qn,s=Qn,r=Zt,a=Ss,o=li,c=rn,l=Wt.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=fa(),this.name="",this.source=new Mh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rr:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case as:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rr:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case as:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Im;Wt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,n=0,i=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(l+1)/2,E=(f+1)/2,w=(p+1)/2,T=(h+d)/4,C=(u+v)/4,R=(g+m)/4;return S>E&&S>w?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=T/i,r=C/i):E>w?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=T/s,r=R/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=R/r),this.set(i,s,r,n),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e2 extends us{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new Wt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Mh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class an extends e2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Vm extends Wt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class t2 extends Wt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fr{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(gi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(gi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=gi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),Eo.subVectors(this.max,Ta),yr.subVectors(e.a,Ta),wr.subVectors(e.b,Ta),Tr.subVectors(e.c,Ta),fs.subVectors(wr,yr),ps.subVectors(Tr,wr),Ns.subVectors(yr,Tr);let n=[0,-fs.z,fs.y,0,-ps.z,ps.y,0,-Ns.z,Ns.y,fs.z,0,-fs.x,ps.z,0,-ps.x,Ns.z,0,-Ns.x,-fs.y,fs.x,0,-ps.y,ps.x,0,-Ns.y,Ns.x,0];return!ll(n,yr,wr,Tr,Eo)||(n=[1,0,0,0,1,0,0,0,1],!ll(n,yr,wr,Tr,Eo))?!1:(Mo.crossVectors(fs,ps),n=[Mo.x,Mo.y,Mo.z],ll(n,yr,wr,Tr,Eo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gi=[new P,new P,new P,new P,new P,new P,new P,new P],gi=new P,_o=new fr,yr=new P,wr=new P,Tr=new P,fs=new P,ps=new P,Ns=new P,Ta=new P,Eo=new P,Mo=new P,ks=new P;function ll(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){ks.fromArray(t,r);const o=s.x*Math.abs(ks.x)+s.y*Math.abs(ks.y)+s.z*Math.abs(ks.z),c=e.dot(ks),l=n.dot(ks),h=i.dot(ks);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const n2=new fr,ba=new P,ul=new P;class pa{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):n2.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);const n=ba.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ba,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(ul)),this.expandByPoint(ba.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vi=new P,hl=new P,So=new P,ms=new P,dl=new P,yo=new P,fl=new P;class Wm{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,n),Vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){hl.copy(e).add(n).multiplyScalar(.5),So.copy(n).sub(e).normalize(),ms.copy(this.origin).sub(hl);const r=e.distanceTo(n)*.5,a=-this.direction.dot(So),o=ms.dot(this.direction),c=-ms.dot(So),l=ms.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(hl).addScaledVector(So,d),f}intersectSphere(e,n){Vi.subVectors(e.center,this.origin);const i=Vi.dot(this.direction),s=Vi.dot(Vi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,n,i,s,r){dl.subVectors(n,e),yo.subVectors(i,e),fl.crossVectors(dl,yo);let a=this.direction.dot(fl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ms.subVectors(this.origin,e);const c=o*this.direction.dot(yo.crossVectors(ms,yo));if(c<0)return null;const l=o*this.direction.dot(dl.cross(ms));if(l<0||c+l>a)return null;const h=-o*ms.dot(fl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,s,r,a,o,c,l,h,u,d,f,g,v,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,c,l,h,u,d,f,g,v,m)}set(e,n,i,s,r,a,o,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/br.setFromMatrixColumn(e,0).length(),r=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;n[0]=c*h,n[4]=-c*u,n[8]=l,n[1]=f+g*l,n[5]=d-v*l,n[9]=-o*c,n[2]=v-d*l,n[6]=g+f*l,n[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;n[0]=d+v*o,n[4]=g*o-f,n[8]=a*l,n[1]=a*u,n[5]=a*h,n[9]=-o,n[2]=f*o-g,n[6]=v+d*o,n[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;n[0]=d-v*o,n[4]=-a*u,n[8]=g+f*o,n[1]=f+g*o,n[5]=a*h,n[9]=v-d*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;n[0]=c*h,n[4]=g*l-f,n[8]=d*l+v,n[1]=c*u,n[5]=v*l+d,n[9]=f*l-g,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,v=o*l;n[0]=c*h,n[4]=v-d*u,n[8]=g*u+f,n[1]=u,n[5]=a*h,n[9]=-o*h,n[2]=-l*h,n[6]=f*u+g,n[10]=d-v*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,v=o*l;n[0]=c*h,n[4]=-u,n[8]=l*h,n[1]=d*u+v,n[5]=a*h,n[9]=f*u-g,n[2]=g*u-f,n[6]=o*h,n[10]=v*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i2,e,s2)}lookAt(e,n,i){const s=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),gs.crossVectors(i,Vn),gs.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),gs.crossVectors(i,Vn)),gs.normalize(),wo.crossVectors(Vn,gs),s[0]=gs.x,s[4]=wo.x,s[8]=Vn.x,s[1]=gs.y,s[5]=wo.y,s[9]=Vn.y,s[2]=gs.z,s[6]=wo.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],x=i[3],S=i[7],E=i[11],w=i[15],T=s[0],C=s[4],R=s[8],M=s[12],_=s[1],D=s[5],B=s[9],k=s[13],V=s[2],X=s[6],Y=s[10],K=s[14],G=s[3],ce=s[7],fe=s[11],Ie=s[15];return r[0]=a*T+o*_+c*V+l*G,r[4]=a*C+o*D+c*X+l*ce,r[8]=a*R+o*B+c*Y+l*fe,r[12]=a*M+o*k+c*K+l*Ie,r[1]=h*T+u*_+d*V+f*G,r[5]=h*C+u*D+d*X+f*ce,r[9]=h*R+u*B+d*Y+f*fe,r[13]=h*M+u*k+d*K+f*Ie,r[2]=g*T+v*_+m*V+p*G,r[6]=g*C+v*D+m*X+p*ce,r[10]=g*R+v*B+m*Y+p*fe,r[14]=g*M+v*k+m*K+p*Ie,r[3]=x*T+S*_+E*V+w*G,r[7]=x*C+S*D+E*X+w*ce,r[11]=x*R+S*B+E*Y+w*fe,r[15]=x*M+S*k+E*K+w*Ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*f-i*c*f)+v*(+n*c*f-n*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+n*l*u-n*o*f-r*a*u+i*a*f+r*o*h-i*l*h)+p*(-s*o*h-n*c*u+n*o*d+s*a*u-i*a*d+i*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=u*m*l-v*d*l+v*c*f-o*m*f-u*c*p+o*d*p,S=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,E=h*v*l-g*u*l+g*o*f-a*v*f-h*o*p+a*u*p,w=g*u*c-h*v*c-g*o*d+a*v*d+h*o*m-a*u*m,T=n*x+i*S+s*E+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(v*d*r-u*m*r-v*s*f+i*m*f+u*s*p-i*d*p)*C,e[2]=(o*m*r-v*c*r+v*s*l-i*m*l-o*s*p+i*c*p)*C,e[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*f-i*c*f)*C,e[4]=S*C,e[5]=(h*m*r-g*d*r+g*s*f-n*m*f-h*s*p+n*d*p)*C,e[6]=(g*c*r-a*m*r-g*s*l+n*m*l+a*s*p-n*c*p)*C,e[7]=(a*d*r-h*c*r+h*s*l-n*d*l-a*s*f+n*c*f)*C,e[8]=E*C,e[9]=(g*u*r-h*v*r-g*i*f+n*v*f+h*i*p-n*u*p)*C,e[10]=(a*v*r-g*o*r+g*i*l-n*v*l-a*i*p+n*o*p)*C,e[11]=(h*o*r-a*u*r-h*i*l+n*u*l+a*i*f-n*o*f)*C,e[12]=w*C,e[13]=(h*v*s-g*u*s+g*i*d-n*v*d-h*i*m+n*u*m)*C,e[14]=(g*o*s-a*v*s-g*i*c+n*v*c+a*i*m-n*o*m)*C,e[15]=(a*u*s-h*o*s+h*i*c-n*u*c-a*i*d+n*o*d)*C,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,c=n._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,x=c*l,S=c*h,E=c*u,w=i.x,T=i.y,C=i.z;return s[0]=(1-(v+p))*w,s[1]=(f+E)*w,s[2]=(g-S)*w,s[3]=0,s[4]=(f-E)*T,s[5]=(1-(d+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+S)*C,s[9]=(m-x)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=br.set(s[0],s[1],s[2]).length();const a=br.set(s[4],s[5],s[6]).length(),o=br.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vi.copy(this);const l=1/r,h=1/a,u=1/o;return vi.elements[0]*=l,vi.elements[1]*=l,vi.elements[2]*=l,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=u,vi.elements[9]*=u,vi.elements[10]*=u,n.setFromRotationMatrix(vi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,n,i,s,r,a,o=Di,c=!1){const l=this.elements,h=2*r/(n-e),u=2*r/(i-s),d=(n+e)/(n-e),f=(i+s)/(i-s);let g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===Di)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===lc)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=Di,c=!1){const l=this.elements,h=2/(n-e),u=2/(i-s),d=-(n+e)/(n-e),f=-(i+s)/(i-s);let g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===Di)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===lc)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const br=new P,vi=new xt,i2=new P(0,0,0),s2=new P(1,1,1),gs=new P,wo=new P,Vn=new P,tf=new xt,nf=new Jt;class di{constructor(e=0,n=0,i=0,s=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nf.setFromEuler(this),this.setFromQuaternion(nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Xm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r2=0;const sf=new P,Cr=new Jt,Wi=new xt,To=new P,Ca=new P,a2=new P,o2=new Jt,rf=new P(1,0,0),af=new P(0,1,0),of=new P(0,0,1),cf={type:"added"},c2={type:"removed"},Rr={type:"childadded",child:null},pl={type:"childremoved",child:null};class xn extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r2++}),this.uuid=fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new P,n=new di,i=new Jt,s=new P(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new qe}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cr.setFromAxisAngle(e,n),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,n){return Cr.setFromAxisAngle(e,n),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(rf,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(of,e)}translateOnAxis(e,n){return sf.copy(e).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rf,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?To.copy(e):To.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Ca,To,this.up):Wi.lookAt(To,Ca,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),Cr.setFromRotationMatrix(Wi),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cf),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(c2),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cf),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,a2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,o2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}xn.DEFAULT_UP=new P(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new P,Xi=new P,ml=new P,Yi=new P,Dr=new P,Pr=new P,lf=new P,gl=new P,vl=new P,xl=new P,Al=new vt,_l=new vt,El=new vt;class Ai{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),xi.subVectors(e,n),s.cross(xi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){xi.subVectors(s,n),Xi.subVectors(i,n),ml.subVectors(e,n);const a=xi.dot(xi),o=xi.dot(Xi),c=xi.dot(ml),l=Xi.dot(Xi),h=Xi.dot(ml),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,n,i,s,r,a,o,c){return this.getBarycoord(e,n,i,s,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yi.x),c.addScaledVector(a,Yi.y),c.addScaledVector(o,Yi.z),c)}static getInterpolatedAttribute(e,n,i,s,r,a){return Al.setScalar(0),_l.setScalar(0),El.setScalar(0),Al.fromBufferAttribute(e,n),_l.fromBufferAttribute(e,i),El.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Al,r.x),a.addScaledVector(_l,r.y),a.addScaledVector(El,r.z),a}static isFrontFacing(e,n,i,s){return xi.subVectors(i,n),Xi.subVectors(e,n),xi.cross(Xi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),xi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Ai.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let a,o;Dr.subVectors(s,i),Pr.subVectors(r,i),gl.subVectors(e,i);const c=Dr.dot(gl),l=Pr.dot(gl);if(c<=0&&l<=0)return n.copy(i);vl.subVectors(e,s);const h=Dr.dot(vl),u=Pr.dot(vl);if(h>=0&&u<=h)return n.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(Dr,a);xl.subVectors(e,r);const f=Dr.dot(xl),g=Pr.dot(xl);if(g>=0&&f<=g)return n.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),n.copy(i).addScaledVector(Pr,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return lf.subVectors(r,s),o=(u-h)/(u-h+(f-g)),n.copy(s).addScaledVector(lf,o);const p=1/(m+v+d);return a=v*p,o=d*p,n.copy(i).addScaledVector(Dr,a).addScaledVector(Pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ym={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},bo={h:0,s:0,l:0};function Ml(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ut.workingColorSpace){if(e=Eh(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Ml(a,r,e+1/3),this.g=Ml(a,r,e),this.b=Ml(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,n=pt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pt){const i=Ym[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return ut.workingToColorSpace(Sn.copy(this),e),Math.round($e(Sn.r*255,0,255))*65536+Math.round($e(Sn.g*255,0,255))*256+Math.round($e(Sn.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.workingToColorSpace(Sn.copy(this),n);const i=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,n=ut.workingColorSpace){return ut.workingToColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=pt){ut.workingToColorSpace(Sn.copy(this),e);const n=Sn.r,i=Sn.g,s=Sn.b;return e!==pt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+n,vs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(vs),e.getHSL(bo);const i=Va(vs.h,bo.h,n),s=Va(vs.s,bo.s,n),r=Va(vs.l,bo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new He;He.NAMES=Ym;let l2=0;class Ps extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l2++}),this.uuid=fa(),this.name="",this.type="Material",this.blending=Xr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(i.blending=this.blending),this.side!==rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zl&&(i.blendSrc=this.blendSrc),this.blendDst!==Jl&&(i.blendDst=this.blendDst),this.blendEquation!==Ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(n){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ka extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ji=u2();function u2(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(i[c]=0,i[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,s[c]=24,s[c|256]=24):(i[c]=31744,i[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function h2(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=$e(t,-65504,65504),ji.floatView[0]=t;const e=ji.uint32View[0],n=e>>23&511;return ji.baseTable[n]+((e&8388607)>>ji.shiftTable[n])}function d2(t){const e=t>>10;return ji.uint32View[0]=ji.mantissaTable[ji.offsetTable[e]+(t&1023)]+ji.exponentTable[e],ji.floatView[0]}class Sl{static toHalfFloat(e){return h2(e)}static fromHalfFloat(e){return d2(e)}}const Qt=new P,Co=new te;let f2=0;class dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qd,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Co.fromBufferAttribute(this,n),Co.applyMatrix3(e),this.setXY(n,Co.x,Co.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Hr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Hr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Hr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Hr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Hr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),s=Tn(s,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qd&&(e.usage=this.usage),e}}class qm extends dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Qm extends dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dt extends dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let p2=0;const ri=new xt,yl=new xn,Ir=new P,Wn=new fr,Ra=new fr,hn=new P;class _n extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p2++}),this.uuid=fa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gm(e)?Qm:qm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,n,i){return ri.makeTranslation(e,n,i),this.applyMatrix4(ri),this}scale(e,n,i){return ri.makeScale(e,n,i),this.applyMatrix4(ri),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];Ra.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Wn.min,Ra.min),Wn.expandByPoint(hn),hn.addVectors(Wn.max,Ra.max),Wn.expandByPoint(hn)):(Wn.expandByPoint(Ra.min),Wn.expandByPoint(Ra.max))}Wn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(hn));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)hn.fromBufferAttribute(o,l),c&&(Ir.fromBufferAttribute(e,l),hn.add(Ir)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<i.count;R++)o[R]=new P,c[R]=new P;const l=new P,h=new P,u=new P,d=new te,f=new te,g=new te,v=new P,m=new P;function p(R,M,_){l.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,_),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[R].add(v),o[M].add(v),o[_].add(v),c[R].add(m),c[M].add(m),c[_].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,M=x.length;R<M;++R){const _=x[R],D=_.start,B=_.count;for(let k=D,V=D+B;k<V;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new P,E=new P,w=new P,T=new P;function C(R){w.fromBufferAttribute(s,R),T.copy(w);const M=o[R];S.copy(M),S.sub(w.multiplyScalar(w.dot(M))).normalize(),E.crossVectors(T,M);const D=E.dot(c[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,D)}for(let R=0,M=x.length;R<M;++R){const _=x[R],D=_.start,B=_.count;for(let k=D,V=D+B;k<V;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=n.count;d<f;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)hn.fromBufferAttribute(e,n),hn.normalize(),e.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);n.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,i);c.push(f)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(n))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uf=new xt,zs=new Wm,Ro=new pa,hf=new P,Do=new P,Po=new P,Io=new P,wl=new P,Lo=new P,df=new P,Bo=new P;class Le extends xn{constructor(e=new _n,n=new Ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Lo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(wl.fromBufferAttribute(u,e),a?Lo.addScaledVector(wl,h):Lo.addScaledVector(wl.sub(n),h))}n.add(Lo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),zs.copy(e.ray).recast(e.near),!(Ro.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Ro,hf)===null||zs.origin.distanceToSquared(hf)>(e.far-e.near)**2))&&(uf.copy(r).invert(),zs.copy(e.ray).applyMatrix4(uf),!(i.boundingBox!==null&&zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,zs)))}_computeIntersections(e,n,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=x,w=S;E<w;E+=3){const T=o.getX(E),C=o.getX(E+1),R=o.getX(E+2);s=Uo(this,p,e,i,l,h,u,T,C,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=o.getX(m),S=o.getX(m+1),E=o.getX(m+2);s=Uo(this,a,e,i,l,h,u,x,S,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=x,w=S;E<w;E+=3){const T=E,C=E+1,R=E+2;s=Uo(this,p,e,i,l,h,u,T,C,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,S=m+1,E=m+2;s=Uo(this,a,e,i,l,h,u,x,S,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function m2(t,e,n,i,s,r,a,o){let c;if(e.side===Kt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===rs,o),c===null)return null;Bo.copy(o),Bo.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Bo);return l<n.near||l>n.far?null:{distance:l,point:Bo.clone(),object:t}}function Uo(t,e,n,i,s,r,a,o,c,l){t.getVertexPosition(o,Do),t.getVertexPosition(c,Po),t.getVertexPosition(l,Io);const h=m2(t,e,n,i,Do,Po,Io,df);if(h){const u=new P;Ai.getBarycoord(df,Do,Po,Io,u),s&&(h.uv=Ai.getInterpolatedAttribute(s,o,c,l,u,new te)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,o,c,l,u,new te)),a&&(h.normal=Ai.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new P,materialIndex:0};Ai.getNormal(Do,Po,Io,d.normal),h.face=d,h.barycoord=u}return h}class nn extends _n{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,n,e,a,r,0),g("z","y","x",1,-1,i,n,-e,a,r,1),g("x","z","y",1,1,e,i,n,s,a,2),g("x","z","y",1,-1,e,i,-n,s,a,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(u,2));function g(v,m,p,x,S,E,w,T,C,R,M){const _=E/C,D=w/R,B=E/2,k=w/2,V=T/2,X=C+1,Y=R+1;let K=0,G=0;const ce=new P;for(let fe=0;fe<Y;fe++){const Ie=fe*D-k;for(let Je=0;Je<X;Je++){const St=Je*_-B;ce[v]=St*x,ce[m]=Ie*S,ce[p]=V,l.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[p]=T>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(Je/C),u.push(1-fe/R),K+=1}}for(let fe=0;fe<R;fe++)for(let Ie=0;Ie<C;Ie++){const Je=d+Ie+X*fe,St=d+Ie+X*(fe+1),Pt=d+(Ie+1)+X*(fe+1),mt=d+(Ie+1)+X*fe;c.push(Je,St,mt),c.push(St,Pt,mt),G+=6}o.addGroup(f,G,M),f+=G,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function na(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Cn(t){const e={};for(let n=0;n<t.length;n++){const i=na(t[n]);for(const s in i)e[s]=i[s]}return e}function g2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function jm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Km={clone:na,merge:Cn};var v2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v2,this.fragmentShader=x2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=g2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Zm extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xs=new P,ff=new te,pf=new te;class Nn extends Zm{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,n){return this.getViewBounds(e,ff,pf),n.subVectors(pf,ff)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ga*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,n-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Lr=-90,Br=1;class A2 extends xn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nn(Lr,Br,e,n);s.layers=this.layers,this.add(s);const r=new Nn(Lr,Br,e,n);r.layers=this.layers,this.add(r);const a=new Nn(Lr,Br,e,n);a.layers=this.layers,this.add(a);const o=new Nn(Lr,Br,e,n);o.layers=this.layers,this.add(o);const c=new Nn(Lr,Br,e,n);c.layers=this.layers,this.add(c);const l=new Nn(Lr,Br,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,c]=n;for(const l of n)this.remove(l);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,a),e.setRenderTarget(i,2,s),e.render(n,o),e.setRenderTarget(i,3,s),e.render(n,c),e.setRenderTarget(i,4,s),e.render(n,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(n,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Jm extends Wt{constructor(e=[],n=Jr,i,s,r,a,o,c,l,h){super(e,n,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _2 extends an{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Jm(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new nn(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:gn});r.uniforms.tEquirect.value=n;const a=new Le(s,r),o=n.minFilter;return n.minFilter===Ss&&(n.minFilter=Zt),new A2(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}}class qn extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E2={type:"move"};class Tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E2)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Sh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=n}clone(){return new Sh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uc extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class yh extends Wt{constructor(e=null,n=1,i=1,s,r,a,o,c,l=vn,h=vn,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mf extends dn{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ur=new xt,gf=new xt,Fo=[],vf=new fr,M2=new xt,Da=new Le,Pa=new pa;class Za extends Le{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new mf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,M2)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new fr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ur),vf.copy(e.boundingBox).applyMatrix4(Ur),this.boundingBox.union(vf)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new pa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ur),Pa.copy(e.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(Pa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,n){const i=this.matrixWorld,s=this.count;if(Da.geometry=this.geometry,Da.material=this.material,Da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(i),e.ray.intersectsSphere(Pa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ur),gf.multiplyMatrices(i,Ur),Da.matrixWorld=gf,Da.raycast(e,Fo);for(let a=0,o=Fo.length;a<o;a++){const c=Fo[a];c.instanceId=r,c.object=this,n.push(c)}Fo.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new mf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new yh(new Float32Array(s*this.count),s,this.count,Cc,_i));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const bl=new P,S2=new P,y2=new qe;class Qs{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=bl.subVectors(i,n).cross(S2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(bl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||y2.getNormalMatrix(e),s=this.coplanarPoint(bl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new pa,w2=new te(.5,.5),Oo=new P;class wh{constructor(e=new Qs,n=new Qs,i=new Qs,s=new Qs,r=new Qs,a=new Qs){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Di,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],x=r[12],S=r[13],E=r[14],w=r[15];if(s[0].setComponents(l-a,f-h,p-g,w-x).normalize(),s[1].setComponents(l+a,f+h,p+g,w+x).normalize(),s[2].setComponents(l+o,f+u,p+v,w+S).normalize(),s[3].setComponents(l-o,f-u,p-v,w-S).normalize(),i)s[4].setComponents(c,d,m,E).normalize(),s[5].setComponents(l-c,f-d,p-m,w-E).normalize();else if(s[4].setComponents(l-c,f-d,p-m,w-E).normalize(),n===Di)s[5].setComponents(l+c,f+d,p+m,w+E).normalize();else if(n===lc)s[5].setComponents(c,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){Hs.center.set(0,0,0);const n=w2.distanceTo(e.center);return Hs.radius=.7071067811865476+n,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Oo.x=s.normal.x>0?e.max.x:e.min.x,Oo.y=s.normal.y>0?e.max.y:e.min.y,Oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $m extends Ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xf=new xt,Uu=new Wm,No=new pa,ko=new P;class T2 extends xn{constructor(e=new _n,n=new $m){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;xf.copy(s).invert(),Uu.copy(e.ray).applyMatrix4(xf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);ko.fromBufferAttribute(u,m),Af(ko,m,c,s,e,n,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)ko.fromBufferAttribute(u,g),Af(ko,g,c,s,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Af(t,e,n,i,s,r,a){const o=Uu.distanceSqToPoint(t);if(o<n){const c=new P;Uu.closestPointToPoint(t,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class e0 extends Wt{constructor(e,n,i,s,r,a,o,c,l){super(e,n,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Th extends Wt{constructor(e,n,i=ar,s,r,a,o=vn,c=vn,l,h=Ya,u=1){if(h!==Ya&&h!==ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:u};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class t0 extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pn extends _n{constructor(e=1,n=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=i/2;let p=0;x(),a===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(f,2));function x(){const E=new P,w=new P;let T=0;const C=(n-e)/i;for(let R=0;R<=r;R++){const M=[],_=R/r,D=_*(n-e)+e;for(let B=0;B<=s;B++){const k=B/s,V=k*c+o,X=Math.sin(V),Y=Math.cos(V);w.x=D*X,w.y=-_*i+m,w.z=D*Y,u.push(w.x,w.y,w.z),E.set(X,C,Y).normalize(),d.push(E.x,E.y,E.z),f.push(k,1-_),M.push(g++)}v.push(M)}for(let R=0;R<s;R++)for(let M=0;M<r;M++){const _=v[M][R],D=v[M+1][R],B=v[M+1][R+1],k=v[M][R+1];(e>0||M!==0)&&(h.push(_,D,k),T+=3),(n>0||M!==r-1)&&(h.push(D,B,k),T+=3)}l.addGroup(p,T,0),p+=T}function S(E){const w=g,T=new te,C=new P;let R=0;const M=E===!0?e:n,_=E===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;const D=g;for(let B=0;B<=s;B++){const V=B/s*c+o,X=Math.cos(V),Y=Math.sin(V);C.x=M*Y,C.y=m*_,C.z=M*X,u.push(C.x,C.y,C.z),d.push(0,_,0),T.x=X*.5+.5,T.y=Y*.5*_+.5,f.push(T.x,T.y),g++}for(let B=0;B<s;B++){const k=w+B,V=D+B;E===!0?h.push(V,V+1,k):h.push(V+1,V,k),R+=3}l.addGroup(p,R,E===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rc extends pn{constructor(e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,n,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Rc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dc extends _n{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};const r=[],a=[];o(s),l(i),h(),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(r.slice(),3)),this.setAttribute("uv",new Dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const S=new P,E=new P,w=new P;for(let T=0;T<n.length;T+=3)f(n[T+0],S),f(n[T+1],E),f(n[T+2],w),c(S,E,w,x)}function c(x,S,E,w){const T=w+1,C=[];for(let R=0;R<=T;R++){C[R]=[];const M=x.clone().lerp(E,R/T),_=S.clone().lerp(E,R/T),D=T-R;for(let B=0;B<=D;B++)B===0&&R===T?C[R][B]=M:C[R][B]=M.clone().lerp(_,B/D)}for(let R=0;R<T;R++)for(let M=0;M<2*(T-R)-1;M++){const _=Math.floor(M/2);M%2===0?(d(C[R][_+1]),d(C[R+1][_]),d(C[R][_])):(d(C[R][_+1]),d(C[R+1][_+1]),d(C[R+1][_]))}}function l(x){const S=new P;for(let E=0;E<r.length;E+=3)S.x=r[E+0],S.y=r[E+1],S.z=r[E+2],S.normalize().multiplyScalar(x),r[E+0]=S.x,r[E+1]=S.y,r[E+2]=S.z}function h(){const x=new P;for(let S=0;S<r.length;S+=3){x.x=r[S+0],x.y=r[S+1],x.z=r[S+2];const E=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(E,1-w)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const S=a[x+0],E=a[x+2],w=a[x+4],T=Math.max(S,E,w),C=Math.min(S,E,w);T>.9&&C<.1&&(S<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,S){const E=x*3;S.x=e[E+0],S.y=e[E+1],S.z=e[E+2]}function g(){const x=new P,S=new P,E=new P,w=new P,T=new te,C=new te,R=new te;for(let M=0,_=0;M<r.length;M+=9,_+=6){x.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),E.set(r[M+6],r[M+7],r[M+8]),T.set(a[_+0],a[_+1]),C.set(a[_+2],a[_+3]),R.set(a[_+4],a[_+5]),w.copy(x).add(S).add(E).divideScalar(3);const D=m(w);v(T,_+0,x,D),v(C,_+2,S,D),v(R,_+4,E,D)}}function v(x,S,E,w){w<0&&x.x===1&&(a[S]=x.x-1),E.x===0&&E.z===0&&(a[S]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.vertices,e.indices,e.radius,e.details)}}class bh extends Dc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new bh(e.radius,e.detail)}}class Ch extends Dc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ch(e.radius,e.detail)}}class pr extends _n{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,a=n/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=n/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let S=0;S<l;S++){const E=S*u-r;g.push(E,-x,0),v.push(0,0,1),m.push(S/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const S=x+l*p,E=x+l*(p+1),w=x+1+l*(p+1),T=x+1+l*p;f.push(S,E,T),f.push(E,w,T)}this.setIndex(f),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Js extends _n{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new P,d=new P,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const x=[],S=p/i;let E=0;p===0&&a===0?E=.5/n:p===i&&c===Math.PI&&(E=-.5/n);for(let w=0;w<=n;w++){const T=w/n;u.x=-e*Math.cos(s+T*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+E,1-S),x.push(l++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<n;x++){const S=h[p][x+1],E=h[p][x],w=h[p+1][x],T=h[p+1][x+1];(p!==0||a>0)&&f.push(S,E,T),(p!==i-1||c<Math.PI)&&f.push(E,w,T)}this.setIndex(f),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rh extends _n{constructor(e=1,n=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new P,u=new P,d=new P;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/i*Math.PI*2;u.x=(e+n*Math.cos(m))*Math.cos(v),u.y=(e+n*Math.cos(m))*Math.sin(v),u.z=n*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;a.push(v,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wt extends Ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zm,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class b2 extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C2 extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cl={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class n0{constructor(e,n,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const R2=new n0;class Dh{constructor(e){this.manager=e!==void 0?e:R2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Dh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fr=new WeakMap;class D2 extends Dh{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Cl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(a),r.manager.itemEnd(e)},0);else{let u=Fr.get(a);u===void 0&&(u=[],Fr.set(a,u)),u.push({onLoad:n,onError:s})}return a}const o=Qa("img");function c(){h(),n&&n(this);const u=Fr.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Fr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Cl.remove(`image:${e}`);const d=Fr.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Fr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Cl.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class i0 extends Dh{constructor(e){super(e)}load(e,n,i,s){const r=new Wt,a=new D2(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class s0 extends xn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Rl=new xt,_f=new P,Ef=new P;class r0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wh,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;_f.setFromMatrixPosition(e.matrixWorld),n.position.copy(_f),Ef.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ef),n.updateMatrixWorld(),Rl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mf=new xt,Ia=new P,Dl=new P;class P2 extends r0{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ia.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ia),Dl.copy(i.position),Dl.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Dl),i.updateMatrixWorld(),s.makeTranslation(-Ia.x,-Ia.y,-Ia.z),Mf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf,i.coordinateSystem,i.reversedDepth)}}class La extends s0{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new P2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ph extends Zm{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class I2 extends r0{constructor(){super(new Ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class L2 extends s0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new I2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class B2 extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class U2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class Ue{constructor(e){this.value=e}clone(){return new Ue(this.value.clone===void 0?this.value:this.value.clone())}}function Sf(t,e,n,i){const s=F2(i);switch(n){case Om:return t*e;case Cc:return t*e/s.components*s.byteLength;case xh:return t*e/s.components*s.byteLength;case km:return t*e*2/s.components*s.byteLength;case Ah:return t*e*2/s.components*s.byteLength;case Nm:return t*e*3/s.components*s.byteLength;case li:return t*e*4/s.components*s.byteLength;case _h:return t*e*4/s.components*s.byteLength;case Ko:case Zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jo:case $o:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cu:case uu:return Math.max(t,16)*Math.max(e,8)/4;case ou:case lu:return Math.max(t,8)*Math.max(e,8)/2;case hu:case du:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case gu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case vu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case xu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Au:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case _u:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Su:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case yu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case wu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Tu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Cu:case Ru:case Du:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Pu:case Iu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Lu:case Bu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function F2(t){switch(t){case rn:case Lm:return{byteLength:1,components:1};case Xa:case Bm:case hr:return{byteLength:2,components:1};case gh:case vh:return{byteLength:2,components:4};case ar:case mh:case _i:return{byteLength:4,components:1};case Um:case Fm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ur}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ur);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function a0(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function O2(t){const e=new WeakMap;function n(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=t.SHORT;else if(l instanceof Uint32Array)f=t.UNSIGNED_INT;else if(l instanceof Int32Array)f=t.INT;else if(l instanceof Int8Array)f=t.BYTE;else if(l instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c.updateRanges;if(t.bindBuffer(l,o),u.length===0)t.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];t.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var N2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,z2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,X2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,q2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Z2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,J2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ox=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,px="gl_FragColor = linearToOutputTexel( gl_FragColor );",mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ix=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ux=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ox=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_A=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$A=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,m_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:N2,alphahash_pars_fragment:k2,alphamap_fragment:z2,alphamap_pars_fragment:H2,alphatest_fragment:G2,alphatest_pars_fragment:V2,aomap_fragment:W2,aomap_pars_fragment:X2,batching_pars_vertex:Y2,batching_vertex:q2,begin_vertex:Q2,beginnormal_vertex:j2,bsdfs:K2,iridescence_fragment:Z2,bumpmap_pars_fragment:J2,clipping_planes_fragment:$2,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:tx,clipping_planes_vertex:nx,color_fragment:ix,color_pars_fragment:sx,color_pars_vertex:rx,color_vertex:ax,common:ox,cube_uv_reflection_fragment:cx,defaultnormal_vertex:lx,displacementmap_pars_vertex:ux,displacementmap_vertex:hx,emissivemap_fragment:dx,emissivemap_pars_fragment:fx,colorspace_fragment:px,colorspace_pars_fragment:mx,envmap_fragment:gx,envmap_common_pars_fragment:vx,envmap_pars_fragment:xx,envmap_pars_vertex:Ax,envmap_physical_pars_fragment:Dx,envmap_vertex:_x,fog_vertex:Ex,fog_pars_vertex:Mx,fog_fragment:Sx,fog_pars_fragment:yx,gradientmap_pars_fragment:wx,lightmap_pars_fragment:Tx,lights_lambert_fragment:bx,lights_lambert_pars_fragment:Cx,lights_pars_begin:Rx,lights_toon_fragment:Px,lights_toon_pars_fragment:Ix,lights_phong_fragment:Lx,lights_phong_pars_fragment:Bx,lights_physical_fragment:Ux,lights_physical_pars_fragment:Fx,lights_fragment_begin:Ox,lights_fragment_maps:Nx,lights_fragment_end:kx,logdepthbuf_fragment:zx,logdepthbuf_pars_fragment:Hx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Vx,map_fragment:Wx,map_pars_fragment:Xx,map_particle_fragment:Yx,map_particle_pars_fragment:qx,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:jx,morphinstance_vertex:Kx,morphcolor_vertex:Zx,morphnormal_vertex:Jx,morphtarget_pars_vertex:$x,morphtarget_vertex:eA,normal_fragment_begin:tA,normal_fragment_maps:nA,normal_pars_fragment:iA,normal_pars_vertex:sA,normal_vertex:rA,normalmap_pars_fragment:aA,clearcoat_normal_fragment_begin:oA,clearcoat_normal_fragment_maps:cA,clearcoat_pars_fragment:lA,iridescence_pars_fragment:uA,opaque_fragment:hA,packing:dA,premultiplied_alpha_fragment:fA,project_vertex:pA,dithering_fragment:mA,dithering_pars_fragment:gA,roughnessmap_fragment:vA,roughnessmap_pars_fragment:xA,shadowmap_pars_fragment:AA,shadowmap_pars_vertex:_A,shadowmap_vertex:EA,shadowmask_pars_fragment:MA,skinbase_vertex:SA,skinning_pars_vertex:yA,skinning_vertex:wA,skinnormal_vertex:TA,specularmap_fragment:bA,specularmap_pars_fragment:CA,tonemapping_fragment:RA,tonemapping_pars_fragment:DA,transmission_fragment:PA,transmission_pars_fragment:IA,uv_pars_fragment:LA,uv_pars_vertex:BA,uv_vertex:UA,worldpos_vertex:FA,background_vert:OA,background_frag:NA,backgroundCube_vert:kA,backgroundCube_frag:zA,cube_vert:HA,cube_frag:GA,depth_vert:VA,depth_frag:WA,distanceRGBA_vert:XA,distanceRGBA_frag:YA,equirect_vert:qA,equirect_frag:QA,linedashed_vert:jA,linedashed_frag:KA,meshbasic_vert:ZA,meshbasic_frag:JA,meshlambert_vert:$A,meshlambert_frag:e_,meshmatcap_vert:t_,meshmatcap_frag:n_,meshnormal_vert:i_,meshnormal_frag:s_,meshphong_vert:r_,meshphong_frag:a_,meshphysical_vert:o_,meshphysical_frag:c_,meshtoon_vert:l_,meshtoon_frag:u_,points_vert:h_,points_frag:d_,shadow_vert:f_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},oe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Ci={basic:{uniforms:Cn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Cn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Cn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Cn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Cn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Cn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Cn([oe.points,oe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Cn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Cn([oe.common,oe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Cn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Cn([oe.sprite,oe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Cn([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Cn([oe.lights,oe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Ci.physical={uniforms:Cn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const zo={r:0,b:0,g:0},Gs=new di,v_=new xt;function x_(t,e,n,i,s,r,a){const o=new He(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?n:e).get(E)),E}function v(S){let E=!1;const w=g(S);w===null?p(o,c):w&&w.isColor&&(p(w,1),E=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(S,E){const w=g(E);w&&(w.isCubeTexture||w.mapping===bc)?(h===void 0&&(h=new Le(new nn(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:na(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gs.copy(E.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(v_.makeRotationFromEuler(Gs)),h.material.toneMapped=ut.getTransfer(w.colorSpace)!==Et,(u!==w||d!==w.version||f!==t.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=t.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Le(new pr(2,2),new $t({name:"BackgroundMaterial",uniforms:na(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ut.getTransfer(w.colorSpace)!==Et,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,E){S.getRGB(zo,jm(t)),i.buffers.color.setClear(zo.r,zo.g,zo.b,E,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),c=E,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(o,c)},render:v,addToRenderList:m,dispose:x}}function A_(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(_,D,B,k,V){let X=!1;const Y=u(k,B,D);r!==Y&&(r=Y,l(r.object)),X=f(_,k,B,V),X&&g(_,k,B,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,E(_,D,B,k),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return t.createVertexArray()}function l(_){return t.bindVertexArray(_)}function h(_){return t.deleteVertexArray(_)}function u(_,D,B){const k=B.wireframe===!0;let V=i[_.id];V===void 0&&(V={},i[_.id]=V);let X=V[D.id];X===void 0&&(X={},V[D.id]=X);let Y=X[k];return Y===void 0&&(Y=d(c()),X[k]=Y),Y}function d(_){const D=[],B=[],k=[];for(let V=0;V<n;V++)D[V]=0,B[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:k,object:_,attributes:{},index:null}}function f(_,D,B,k){const V=r.attributes,X=D.attributes;let Y=0;const K=B.getAttributes();for(const G in K)if(K[G].location>=0){const fe=V[G];let Ie=X[G];if(Ie===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(Ie=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(Ie=_.instanceColor)),fe===void 0||fe.attribute!==Ie||Ie&&fe.data!==Ie.data)return!0;Y++}return r.attributesNum!==Y||r.index!==k}function g(_,D,B,k){const V={},X=D.attributes;let Y=0;const K=B.getAttributes();for(const G in K)if(K[G].location>=0){let fe=X[G];fe===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(fe=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(fe=_.instanceColor));const Ie={};Ie.attribute=fe,fe&&fe.data&&(Ie.data=fe.data),V[G]=Ie,Y++}r.attributes=V,r.attributesNum=Y,r.index=k}function v(){const _=r.newAttributes;for(let D=0,B=_.length;D<B;D++)_[D]=0}function m(_){p(_,0)}function p(_,D){const B=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;B[_]=1,k[_]===0&&(t.enableVertexAttribArray(_),k[_]=1),V[_]!==D&&(t.vertexAttribDivisor(_,D),V[_]=D)}function x(){const _=r.newAttributes,D=r.enabledAttributes;for(let B=0,k=D.length;B<k;B++)D[B]!==_[B]&&(t.disableVertexAttribArray(B),D[B]=0)}function S(_,D,B,k,V,X,Y){Y===!0?t.vertexAttribIPointer(_,D,B,V,X):t.vertexAttribPointer(_,D,B,k,V,X)}function E(_,D,B,k){v();const V=k.attributes,X=B.getAttributes(),Y=D.defaultAttributeValues;for(const K in X){const G=X[K];if(G.location>=0){let ce=V[K];if(ce===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),ce!==void 0){const fe=ce.normalized,Ie=ce.itemSize,Je=e.get(ce);if(Je===void 0)continue;const St=Je.buffer,Pt=Je.type,mt=Je.bytesPerElement,Q=Pt===t.INT||Pt===t.UNSIGNED_INT||ce.gpuType===mh;if(ce.isInterleavedBufferAttribute){const J=ce.data,xe=J.stride,Ge=ce.offset;if(J.isInstancedInterleavedBuffer){for(let De=0;De<G.locationSize;De++)p(G.location+De,J.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let De=0;De<G.locationSize;De++)m(G.location+De);t.bindBuffer(t.ARRAY_BUFFER,St);for(let De=0;De<G.locationSize;De++)S(G.location+De,Ie/G.locationSize,Pt,fe,xe*mt,(Ge+Ie/G.locationSize*De)*mt,Q)}else{if(ce.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)p(G.location+J,ce.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let J=0;J<G.locationSize;J++)m(G.location+J);t.bindBuffer(t.ARRAY_BUFFER,St);for(let J=0;J<G.locationSize;J++)S(G.location+J,Ie/G.locationSize,Pt,fe,Ie*mt,Ie/G.locationSize*J*mt,Q)}}else if(Y!==void 0){const fe=Y[K];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(G.location,fe);break;case 3:t.vertexAttrib3fv(G.location,fe);break;case 4:t.vertexAttrib4fv(G.location,fe);break;default:t.vertexAttrib1fv(G.location,fe)}}}}x()}function w(){R();for(const _ in i){const D=i[_];for(const B in D){const k=D[B];for(const V in k)h(k[V].object),delete k[V];delete D[B]}delete i[_]}}function T(_){if(i[_.id]===void 0)return;const D=i[_.id];for(const B in D){const k=D[B];for(const V in k)h(k[V].object),delete k[V];delete D[B]}delete i[_.id]}function C(_){for(const D in i){const B=i[D];if(B[_.id]===void 0)continue;const k=B[_.id];for(const V in k)h(k[V].object),delete k[V];delete B[_.id]}}function R(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function __(t,e,n){let i;function s(l){i=l}function r(l,h){t.drawArrays(i,l,h),n.update(h,i,1)}function a(l,h,u){u!==0&&(t.drawArraysInstanced(i,l,h,u),n.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];n.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function E_(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==li&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const R=C===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==rn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_i&&!R)}function c(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:w,maxSamples:T}}function M_(t){const e=this;let n=null,i=0,s=!1,r=!1;const a=new Qs,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=t.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:i,S=x*4;let E=p.clippingState||null;c.value=E,E=h(g,d,S,f);for(let w=0;w!==S;++w)E[w]=n[w];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,E=f;S!==v;++S,E+=4)a.copy(u[S]).applyMatrix4(x,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function S_(t){let e=new WeakMap;function n(a,o){return o===ru?a.mapping=Jr:o===au&&(a.mapping=$r),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ru||o===au)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new _2(c.height);return l.fromEquirectangularTexture(t,a),e.set(a,l),a.addEventListener("dispose",s),n(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Vr=4,yf=[.125,.215,.35,.446,.526,.582],Zs=20,Pl=new Ph,wf=new He;let Il=null,Ll=0,Bl=0,Ul=!1;const js=(1+Math.sqrt(5))/2,Or=1/js,Tf=[new P(-js,Or,0),new P(js,Or,0),new P(-Or,0,js),new P(Or,0,js),new P(0,js,-Or),new P(0,js,Or),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],y_=new P;class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:a=256,position:o=y_}=r;Il=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Ll,Bl),this._renderer.xr.enabled=Ul,e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Jr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:hr,format:li,colorSpace:Rs,depthBuffer:!1},s=bf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bf(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w_(r)),this._blurMaterial=T_(r,e,n)}return s}_compileMaterial(e){const n=new Le(this._lodPlanes[0],e);this._renderer.compile(n,Pl)}_sceneToCubeUV(e,n,i,s,r){const c=new Nn(90,1,n,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(wf),u.toneMapping=es,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new Ka({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),m=new Le(new nn,v);let p=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,p=!0):(v.color.copy(wf),p=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):E===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));const w=this._cubeSize;Ho(s,E*w,S>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Jr||e.mapping===$r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ho(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Pl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tf[(s-r-1)%Tf.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Le(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zs-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Zs;m>Zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zs}`);const p=[];let x=0;for(let C=0;C<Zs;++C){const R=C/v,M=Math.exp(-R*R/2);p.push(M),C===0?x+=M:C<m&&(x+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const E=this._sizeLods[s],w=3*E*(s>S-Vr?s-S+Vr:0),T=4*(this._cubeSize-E);Ho(n,w,T,3*E,2*E),c.setRenderTarget(n),c.render(u,Pl)}}function w_(t){const e=[],n=[],i=[];let s=t;const r=t-Vr+1+yf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);n.push(o);let c=1/o;a>t-Vr?c=yf[a-t+Vr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),S=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,R=T>2?0:-1,M=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];x.set(M,v*g*T),S.set(d,m*g*T);const _=[T,T,T,T,T,T];E.set(_,p*g*T)}const w=new _n;w.setAttribute("position",new dn(x,v)),w.setAttribute("uv",new dn(S,m)),w.setAttribute("faceIndex",new dn(E,p)),e.push(w),s>Vr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bf(t,e,n){const i=new an(t,e,n);return i.texture.mapping=bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ho(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function T_(t,e,n){const i=new Float32Array(Zs),s=new P(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Cf(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Rf(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function b_(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===ru||c===au,h=c===Jr||c===$r;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Fu(t)),u=l?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(n===null&&(n=new Fu(t)),u=l?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function C_(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&ja("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function R_(t,e,n,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,n.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],t.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let S=0,E=x.length;S<E;S+=3){const w=x[S+0],T=x[S+1],C=x[S+2];d.push(w,T,T,C,C,w)}}else if(g!==void 0){const x=g.array;v=g.version;for(let S=0,E=x.length/3-1;S<E;S+=3){const w=S+0,T=S+1,C=S+2;d.push(w,T,T,C,C,w)}}else return;const m=new(Gm(d)?Qm:qm)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function D_(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){t.drawElements(i,f,r,d*a),n.update(f,i,1)}function l(d,f,g){g!==0&&(t.drawElementsInstanced(i,f,r,d*a,g),n.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];n.update(m,i,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*v[x];n.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function P_(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function I_(t,e,n){const i=new WeakMap,s=new vt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let _=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",_)};var f=_;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let w=o.attributes.position.count*E,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*u),R=new Vm(C,w,T,u);R.type=_i,R.needsUpdate=!0;const M=E*4;for(let D=0;D<u;D++){const B=p[D],k=x[D],V=S[D],X=w*T*4*D;for(let Y=0;Y<B.count;Y++){const K=Y*M;g===!0&&(s.fromBufferAttribute(B,Y),C[X+K+0]=s.x,C[X+K+1]=s.y,C[X+K+2]=s.z,C[X+K+3]=0),v===!0&&(s.fromBufferAttribute(k,Y),C[X+K+4]=s.x,C[X+K+5]=s.y,C[X+K+6]=s.z,C[X+K+7]=0),m===!0&&(s.fromBufferAttribute(V,Y),C[X+K+8]=s.x,C[X+K+9]=s.y,C[X+K+10]=s.z,C[X+K+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new te(w,T)},i.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function L_(t,e,n,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:r,dispose:a}}const o0=new Wt,Df=new Th(1,1),c0=new Vm,l0=new t2,u0=new Jm,Pf=[],If=[],Lf=new Float32Array(16),Bf=new Float32Array(9),Uf=new Float32Array(4);function ma(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Pf[s];if(r===void 0&&(r=new Float32Array(s),Pf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function on(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function cn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pc(t,e){let n=If[e];n===void 0&&(n=new Int32Array(e),If[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function B_(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function U_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;t.uniform2fv(this.addr,e),cn(n,e)}}function F_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(on(n,e))return;t.uniform3fv(this.addr,e),cn(n,e)}}function O_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;t.uniform4fv(this.addr,e),cn(n,e)}}function N_(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(on(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),cn(n,e)}else{if(on(n,i))return;Uf.set(i),t.uniformMatrix2fv(this.addr,!1,Uf),cn(n,i)}}function k_(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(on(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),cn(n,e)}else{if(on(n,i))return;Bf.set(i),t.uniformMatrix3fv(this.addr,!1,Bf),cn(n,i)}}function z_(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(on(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),cn(n,e)}else{if(on(n,i))return;Lf.set(i),t.uniformMatrix4fv(this.addr,!1,Lf),cn(n,i)}}function H_(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function G_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;t.uniform2iv(this.addr,e),cn(n,e)}}function V_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;t.uniform3iv(this.addr,e),cn(n,e)}}function W_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;t.uniform4iv(this.addr,e),cn(n,e)}}function X_(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Y_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;t.uniform2uiv(this.addr,e),cn(n,e)}}function q_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;t.uniform3uiv(this.addr,e),cn(n,e)}}function Q_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;t.uniform4uiv(this.addr,e),cn(n,e)}}function j_(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Df.compareFunction=Hm,r=Df):r=o0,n.setTexture2D(e||r,s)}function K_(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||l0,s)}function Z_(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||u0,s)}function J_(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||c0,s)}function $_(t){switch(t){case 5126:return B_;case 35664:return U_;case 35665:return F_;case 35666:return O_;case 35674:return N_;case 35675:return k_;case 35676:return z_;case 5124:case 35670:return H_;case 35667:case 35671:return G_;case 35668:case 35672:return V_;case 35669:case 35673:return W_;case 5125:return X_;case 36294:return Y_;case 36295:return q_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return J_}}function eE(t,e){t.uniform1fv(this.addr,e)}function tE(t,e){const n=ma(e,this.size,2);t.uniform2fv(this.addr,n)}function nE(t,e){const n=ma(e,this.size,3);t.uniform3fv(this.addr,n)}function iE(t,e){const n=ma(e,this.size,4);t.uniform4fv(this.addr,n)}function sE(t,e){const n=ma(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rE(t,e){const n=ma(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aE(t,e){const n=ma(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function oE(t,e){t.uniform1iv(this.addr,e)}function cE(t,e){t.uniform2iv(this.addr,e)}function lE(t,e){t.uniform3iv(this.addr,e)}function uE(t,e){t.uniform4iv(this.addr,e)}function hE(t,e){t.uniform1uiv(this.addr,e)}function dE(t,e){t.uniform2uiv(this.addr,e)}function fE(t,e){t.uniform3uiv(this.addr,e)}function pE(t,e){t.uniform4uiv(this.addr,e)}function mE(t,e,n){const i=this.cache,s=e.length,r=Pc(n,s);on(i,r)||(t.uniform1iv(this.addr,r),cn(i,r));for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o0,r[a])}function gE(t,e,n){const i=this.cache,s=e.length,r=Pc(n,s);on(i,r)||(t.uniform1iv(this.addr,r),cn(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||l0,r[a])}function vE(t,e,n){const i=this.cache,s=e.length,r=Pc(n,s);on(i,r)||(t.uniform1iv(this.addr,r),cn(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||u0,r[a])}function xE(t,e,n){const i=this.cache,s=e.length,r=Pc(n,s);on(i,r)||(t.uniform1iv(this.addr,r),cn(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||c0,r[a])}function AE(t){switch(t){case 5126:return eE;case 35664:return tE;case 35665:return nE;case 35666:return iE;case 35674:return sE;case 35675:return rE;case 35676:return aE;case 5124:case 35670:return oE;case 35667:case 35671:return cE;case 35668:case 35672:return lE;case 35669:case 35673:return uE;case 5125:return hE;case 36294:return dE;case 36295:return fE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return vE;case 36289:case 36303:case 36311:case 36292:return xE}}class _E{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$_(n.type)}}class EE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AE(n.type)}}class ME{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,n[o.id],i)}}}const Fl=/(\w+)(\])?(\[|\.)?/g;function Ff(t,e){t.seq.push(e),t.map[e.id]=e}function SE(t,e,n){const i=t.name,s=i.length;for(Fl.lastIndex=0;;){const r=Fl.exec(i),a=Fl.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ff(n,l===void 0?new _E(o,t,e):new EE(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new ME(o),Ff(n,u)),n=u}}}class ec{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),a=e.getUniformLocation(n,r.name);SE(r,a,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in n&&i.push(a)}return i}}function Of(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yE=37297;let wE=0;function TE(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Nf=new qe;function bE(t){ut._getMatrix(Nf,ut.workingColorSpace,t);const e=`mat3( ${Nf.elements.map(n=>n.toFixed(4))} )`;switch(ut.getTransfer(t)){case cc:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function kf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+TE(t.getShaderSource(e),o)}else return r}function CE(t,e){const n=bE(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function RE(t,e){let n;switch(e){case m1:n="Linear";break;case g1:n="Reinhard";break;case v1:n="Cineon";break;case x1:n="ACESFilmic";break;case _1:n="AgX";break;case E1:n="Neutral";break;case A1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Go=new P;function DE(){ut.getLuminanceCoefficients(Go);const t=Go.x.toFixed(4),e=Go.y.toFixed(4),n=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function IE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function LE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),a=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function za(t){return t!==""}function zf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(t){return t.replace(BE,FE)}const UE=new Map;function FE(t,e){let n=Ke[e];if(n===void 0){const i=UE.get(e);if(i!==void 0)n=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ou(n)}const OE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gf(t){return t.replace(OE,NE)}function NE(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Rm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Dm?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function zE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Jr:case $r:e="ENVMAP_TYPE_CUBE";break;case bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function GE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Pm:e="ENVMAP_BLENDING_MULTIPLY";break;case f1:e="ENVMAP_BLENDING_MIX";break;case p1:e="ENVMAP_BLENDING_ADD";break}return e}function VE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function WE(t,e,n,i){const s=t.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=kE(n),l=zE(n),h=HE(n),u=GE(n),d=VE(n),f=PE(n),g=IE(r),v=s.createProgram();let m,p,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(za).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(za).join(`
`),p.length>0&&(p+=`
`)):(m=[Vf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),p=[Vf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==es?"#define TONE_MAPPING":"",n.toneMapping!==es?Ke.tonemapping_pars_fragment:"",n.toneMapping!==es?RE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,CE("linearToOutputTexel",n.outputColorSpace),DE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(za).join(`
`)),a=Ou(a),a=zf(a,n),a=Hf(a,n),o=Ou(o),o=zf(o,n),o=Hf(o,n),a=Gf(a),o=Gf(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=x+m+a,E=x+p+o,w=Of(s,s.VERTEX_SHADER,S),T=Of(s,s.FRAGMENT_SHADER,E);s.attachShader(v,w),s.attachShader(v,T),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(D){if(t.debug.checkShaderErrors){const B=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(w)||"",V=s.getShaderInfoLog(T)||"",X=B.trim(),Y=k.trim(),K=V.trim();let G=!0,ce=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,w,T);else{const fe=kf(s,w,"vertex"),Ie=kf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+fe+`
`+Ie)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||K==="")&&(ce=!1);ce&&(D.diagnostics={runnable:G,programLog:X,vertexShader:{log:Y,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(w),s.deleteShader(T),R=new ec(s,v),M=LE(s,v)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,yE)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let XE=0;class YE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new qE(e),n.set(e,i)),i}}class qE{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}}function QE(t,e,n,i,s,r,a){const o=new Xm,c=new YE,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,_,D,B,k){const V=B.fog,X=k.geometry,Y=M.isMeshStandardMaterial?B.environment:null,K=(M.isMeshStandardMaterial?n:e).get(M.envMap||Y),G=K&&K.mapping===bc?K.image.height:null,ce=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const fe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ie=fe!==void 0?fe.length:0;let Je=0;X.morphAttributes.position!==void 0&&(Je=1),X.morphAttributes.normal!==void 0&&(Je=2),X.morphAttributes.color!==void 0&&(Je=3);let St,Pt,mt,Q;if(ce){const gt=Ci[ce];St=gt.vertexShader,Pt=gt.fragmentShader}else St=M.vertexShader,Pt=M.fragmentShader,c.update(M),mt=c.getVertexShaderID(M),Q=c.getFragmentShaderID(M);const J=t.getRenderTarget(),xe=t.state.buffers.depth.getReversed(),Ge=k.isInstancedMesh===!0,De=k.isBatchedMesh===!0,it=!!M.map,En=!!M.matcap,I=!!K,It=!!M.aoMap,Xe=!!M.lightMap,ke=!!M.bumpMap,Me=!!M.normalMap,Lt=!!M.displacementMap,Se=!!M.emissiveMap,je=!!M.metalnessMap,un=!!M.roughnessMap,Vt=M.anisotropy>0,b=M.clearcoat>0,A=M.dispersion>0,O=M.iridescence>0,q=M.sheen>0,Z=M.transmission>0,W=Vt&&!!M.anisotropyMap,Re=b&&!!M.clearcoatMap,re=b&&!!M.clearcoatNormalMap,ye=b&&!!M.clearcoatRoughnessMap,we=O&&!!M.iridescenceMap,ne=O&&!!M.iridescenceThicknessMap,de=q&&!!M.sheenColorMap,Ne=q&&!!M.sheenRoughnessMap,Te=!!M.specularMap,ue=!!M.specularColorMap,Ye=!!M.specularIntensityMap,L=Z&&!!M.transmissionMap,ie=Z&&!!M.thicknessMap,ae=!!M.gradientMap,ge=!!M.alphaMap,$=M.alphaTest>0,j=!!M.alphaHash,Ee=!!M.extensions;let Ve=es;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ve=t.toneMapping);const yt={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:St,fragmentShader:Pt,defines:M.defines,customVertexShaderID:mt,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:De,batchingColor:De&&k._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&k.instanceColor!==null,instancingMorph:Ge&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Rs,alphaToCoverage:!!M.alphaToCoverage,map:it,matcap:En,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:G,aoMap:It,lightMap:Xe,bumpMap:ke,normalMap:Me,displacementMap:d&&Lt,emissiveMap:Se,normalMapObjectSpace:Me&&M.normalMapType===y1,normalMapTangentSpace:Me&&M.normalMapType===zm,metalnessMap:je,roughnessMap:un,anisotropy:Vt,anisotropyMap:W,clearcoat:b,clearcoatMap:Re,clearcoatNormalMap:re,clearcoatRoughnessMap:ye,dispersion:A,iridescence:O,iridescenceMap:we,iridescenceThicknessMap:ne,sheen:q,sheenColorMap:de,sheenRoughnessMap:Ne,specularMap:Te,specularColorMap:ue,specularIntensityMap:Ye,transmission:Z,transmissionMap:L,thicknessMap:ie,gradientMap:ae,opaque:M.transparent===!1&&M.blending===Xr&&M.alphaToCoverage===!1,alphaMap:ge,alphaTest:$,alphaHash:j,combine:M.combine,mapUv:it&&v(M.map.channel),aoMapUv:It&&v(M.aoMap.channel),lightMapUv:Xe&&v(M.lightMap.channel),bumpMapUv:ke&&v(M.bumpMap.channel),normalMapUv:Me&&v(M.normalMap.channel),displacementMapUv:Lt&&v(M.displacementMap.channel),emissiveMapUv:Se&&v(M.emissiveMap.channel),metalnessMapUv:je&&v(M.metalnessMap.channel),roughnessMapUv:un&&v(M.roughnessMap.channel),anisotropyMapUv:W&&v(M.anisotropyMap.channel),clearcoatMapUv:Re&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(M.sheenRoughnessMap.channel),specularMapUv:Te&&v(M.specularMap.channel),specularColorMapUv:ue&&v(M.specularColorMap.channel),specularIntensityMapUv:Ye&&v(M.specularIntensityMap.channel),transmissionMapUv:L&&v(M.transmissionMap.channel),thicknessMapUv:ie&&v(M.thicknessMap.channel),alphaMapUv:ge&&v(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Me||Vt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(it||ge),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Je,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ve,decodeVideoTexture:it&&M.map.isVideoTexture===!0&&ut.getTransfer(M.map.colorSpace)===Et,decodeVideoTextureEmissive:Se&&M.emissiveMap.isVideoTexture===!0&&ut.getTransfer(M.emissiveMap.colorSpace)===Et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===Kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ee&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&M.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function p(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)_.push(D),_.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(x(_,M),S(_,M),_.push(t.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function x(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){const _=g[M.type];let D;if(_){const B=Ci[_];D=Km.clone(B.uniforms)}else D=M.uniforms;return D}function w(M,_){let D;for(let B=0,k=h.length;B<k;B++){const V=h[B];if(V.cacheKey===_){D=V,++D.usedTimes;break}}return D===void 0&&(D=new WE(t,_,M,r),h.push(D)),D}function T(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function C(M){c.remove(M)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:w,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:R}}function jE(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,c){t.get(a)[o]=c}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function KE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xf(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u,d,f,g,v,m){let p=t[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},t[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):n.push(p)}function c(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):n.unshift(p)}function l(u,d){n.length>1&&n.sort(u||KE),i.length>1&&i.sort(d||Wf),s.length>1&&s.sort(d||Wf)}function h(){for(let u=e,d=t.length;u<d;u++){const f=t[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function ZE(){let t=new WeakMap;function e(i,s){const r=t.get(i);let a;return r===void 0?(a=new Xf,t.set(i,[a])):s>=r.length?(a=new Xf,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function JE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new He};break;case"SpotLight":n={position:new P,direction:new P,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function $E(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let eM=0;function tM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nM(t){const e=new JE,n=$E(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const s=new P,r=new xt,a=new xt;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,S=0,E=0,w=0,T=0,C=0;l.sort(tM);for(let M=0,_=l.length;M<_;M++){const D=l[M],B=D.color,k=D.intensity,V=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*k,u+=B.g*k,d+=B.b*k;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],k);C++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,G=n.get(D);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=D.shadow.matrix,x++}i.directional[f]=Y,f++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(B).multiplyScalar(k),Y.distance=V,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[v]=Y;const K=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,K.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[v]=K.matrix,D.castShadow){const G=n.get(D);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=X,E++}v++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(B).multiplyScalar(k),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Y,m++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const K=D.shadow,G=n.get(D);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=D.shadow.matrix,S++}i.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(k),Y.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[p]=Y,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==S||R.numSpotShadows!==E||R.numSpotMaps!==w||R.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,R.directionalLength=f,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=S,R.numSpotShadows=E,R.numSpotMaps=w,R.numLightProbes=C,i.version=eM++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const S=l[p];if(S.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(S.isSpotLight){const E=i.spot[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function Yf(t){const e=new nM(t),n=[],i=[];function s(h){l.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function c(h){e.setupView(n,h)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function iM(t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Yf(t),e.set(s,[o])):r>=a.length?(o=new Yf(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const sM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aM(t,e,n){let i=new wh;const s=new te,r=new te,a=new vt,o=new b2({depthPacking:S1}),c=new C2,l={},h=n.maxTextureSize,u={[rs]:Kt,[Kt]:rs,[mn]:mn},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:sM,fragmentShader:rM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Le(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rm;let p=this.type;this.render=function(T,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=t.getRenderTarget(),_=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),B=t.state;B.setBlending(gn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=p!==qi&&this.type===qi,V=p===qi&&this.type!==qi;for(let X=0,Y=T.length;X<Y;X++){const K=T[X],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ce=G.getFrameExtents();if(s.multiply(ce),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,G.mapSize.y=r.y)),G.map===null||k===!0||V===!0){const Ie=this.type!==qi?{minFilter:vn,magFilter:vn}:{};G.map!==null&&G.map.dispose(),G.map=new an(s.x,s.y,Ie),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const fe=G.getViewportCount();for(let Ie=0;Ie<fe;Ie++){const Je=G.getViewport(Ie);a.set(r.x*Je.x,r.y*Je.y,r.x*Je.z,r.y*Je.w),B.viewport(a),G.updateMatrices(K,Ie),i=G.getFrustum(),E(C,R,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===qi&&x(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(M,_,D)};function x(T,C){const R=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new an(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,R,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,R,f,v,null)}function S(T,C,R,M){let _=null;const D=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)_=D;else if(_=R.isPointLight===!0?c:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=_.uuid,k=C.uuid;let V=l[B];V===void 0&&(V={},l[B]=V);let X=V[k];X===void 0&&(X=_.clone(),V[k]=X,C.addEventListener("dispose",w)),_=X}if(_.visible=C.visible,_.wireframe=C.wireframe,M===qi?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:u[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const B=t.properties.get(_);B.light=R}return _}function E(T,C,R,M,_){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===qi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const k=e.update(T),V=T.material;if(Array.isArray(V)){const X=k.groups;for(let Y=0,K=X.length;Y<K;Y++){const G=X[Y],ce=V[G.materialIndex];if(ce&&ce.visible){const fe=S(T,ce,M,_);T.onBeforeShadow(t,T,C,R,k,fe,G),t.renderBufferDirect(R,null,k,fe,T,G),T.onAfterShadow(t,T,C,R,k,fe,G)}}}else if(V.visible){const X=S(T,V,M,_);T.onBeforeShadow(t,T,C,R,k,X,null),t.renderBufferDirect(R,null,k,X,T,null),T.onAfterShadow(t,T,C,R,k,X,null)}}const B=T.children;for(let k=0,V=B.length;k<V;k++)E(B[k],C,R,M,_)}function w(T){T.target.removeEventListener("dispose",w);for(const R in l){const M=l[R],_=T.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const oM={[$l]:oc,[eu]:iu,[tu]:su,[Zr]:nu,[oc]:$l,[iu]:eu,[su]:tu,[nu]:Zr};function cM(t,e){function n(){let L=!1;const ie=new vt;let ae=null;const ge=new vt(0,0,0,0);return{setMask:function($){ae!==$&&!L&&(t.colorMask($,$,$,$),ae=$)},setLocked:function($){L=$},setClear:function($,j,Ee,Ve,yt){yt===!0&&($*=Ve,j*=Ve,Ee*=Ve),ie.set($,j,Ee,Ve),ge.equals(ie)===!1&&(t.clearColor($,j,Ee,Ve),ge.copy(ie))},reset:function(){L=!1,ae=null,ge.set(-1,0,0,0)}}}function i(){let L=!1,ie=!1,ae=null,ge=null,$=null;return{setReversed:function(j){if(ie!==j){const Ee=e.get("EXT_clip_control");j?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ie=j;const Ve=$;$=null,this.setClear(Ve)}},getReversed:function(){return ie},setTest:function(j){j?J(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(j){ae!==j&&!L&&(t.depthMask(j),ae=j)},setFunc:function(j){if(ie&&(j=oM[j]),ge!==j){switch(j){case $l:t.depthFunc(t.NEVER);break;case oc:t.depthFunc(t.ALWAYS);break;case eu:t.depthFunc(t.LESS);break;case Zr:t.depthFunc(t.LEQUAL);break;case tu:t.depthFunc(t.EQUAL);break;case nu:t.depthFunc(t.GEQUAL);break;case iu:t.depthFunc(t.GREATER);break;case su:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=j}},setLocked:function(j){L=j},setClear:function(j){$!==j&&(ie&&(j=1-j),t.clearDepth(j),$=j)},reset:function(){L=!1,ae=null,ge=null,$=null,ie=!1}}}function s(){let L=!1,ie=null,ae=null,ge=null,$=null,j=null,Ee=null,Ve=null,yt=null;return{setTest:function(gt){L||(gt?J(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(gt){ie!==gt&&!L&&(t.stencilMask(gt),ie=gt)},setFunc:function(gt,Hi,wi){(ae!==gt||ge!==Hi||$!==wi)&&(t.stencilFunc(gt,Hi,wi),ae=gt,ge=Hi,$=wi)},setOp:function(gt,Hi,wi){(j!==gt||Ee!==Hi||Ve!==wi)&&(t.stencilOp(gt,Hi,wi),j=gt,Ee=Hi,Ve=wi)},setLocked:function(gt){L=gt},setClear:function(gt){yt!==gt&&(t.clearStencil(gt),yt=gt)},reset:function(){L=!1,ie=null,ae=null,ge=null,$=null,j=null,Ee=null,Ve=null,yt=null}}}const r=new n,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,S=null,E=null,w=null,T=null,C=new He(0,0,0),R=0,M=!1,_=null,D=null,B=null,k=null,V=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,K=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=K>=2);let ce=null,fe={};const Ie=t.getParameter(t.SCISSOR_BOX),Je=t.getParameter(t.VIEWPORT),St=new vt().fromArray(Ie),Pt=new vt().fromArray(Je);function mt(L,ie,ae,ge){const $=new Uint8Array(4),j=t.createTexture();t.bindTexture(L,j),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<ae;Ee++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,$):t.texImage2D(ie+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,$);return j}const Q={};Q[t.TEXTURE_2D]=mt(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=mt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=mt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=mt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(t.DEPTH_TEST),a.setFunc(Zr),ke(!1),Me(Vd),J(t.CULL_FACE),It(gn);function J(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function xe(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ge(L,ie){return u[L]!==ie?(t.bindFramebuffer(L,ie),u[L]=ie,L===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ie),L===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function De(L,ie){let ae=f,ge=!1;if(L){ae=d.get(ie),ae===void 0&&(ae=[],d.set(ie,ae));const $=L.textures;if(ae.length!==$.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let j=0,Ee=$.length;j<Ee;j++)ae[j]=t.COLOR_ATTACHMENT0+j;ae.length=$.length,ge=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ge=!0);ge&&t.drawBuffers(ae)}function it(L){return g!==L?(t.useProgram(L),g=L,!0):!1}const En={[Ks]:t.FUNC_ADD,[Kv]:t.FUNC_SUBTRACT,[Zv]:t.FUNC_REVERSE_SUBTRACT};En[Jv]=t.MIN,En[$v]=t.MAX;const I={[e1]:t.ZERO,[t1]:t.ONE,[n1]:t.SRC_COLOR,[Zl]:t.SRC_ALPHA,[c1]:t.SRC_ALPHA_SATURATE,[a1]:t.DST_COLOR,[s1]:t.DST_ALPHA,[i1]:t.ONE_MINUS_SRC_COLOR,[Jl]:t.ONE_MINUS_SRC_ALPHA,[o1]:t.ONE_MINUS_DST_COLOR,[r1]:t.ONE_MINUS_DST_ALPHA,[l1]:t.CONSTANT_COLOR,[u1]:t.ONE_MINUS_CONSTANT_COLOR,[h1]:t.CONSTANT_ALPHA,[d1]:t.ONE_MINUS_CONSTANT_ALPHA};function It(L,ie,ae,ge,$,j,Ee,Ve,yt,gt){if(L===gn){v===!0&&(xe(t.BLEND),v=!1);return}if(v===!1&&(J(t.BLEND),v=!0),L!==jv){if(L!==m||gt!==M){if((p!==Ks||E!==Ks)&&(t.blendEquation(t.FUNC_ADD),p=Ks,E=Ks),gt)switch(L){case Xr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wd:t.blendFunc(t.ONE,t.ONE);break;case Xd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Xr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Xd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,S=null,w=null,T=null,C.set(0,0,0),R=0,m=L,M=gt}return}$=$||ie,j=j||ae,Ee=Ee||ge,(ie!==p||$!==E)&&(t.blendEquationSeparate(En[ie],En[$]),p=ie,E=$),(ae!==x||ge!==S||j!==w||Ee!==T)&&(t.blendFuncSeparate(I[ae],I[ge],I[j],I[Ee]),x=ae,S=ge,w=j,T=Ee),(Ve.equals(C)===!1||yt!==R)&&(t.blendColor(Ve.r,Ve.g,Ve.b,yt),C.copy(Ve),R=yt),m=L,M=!1}function Xe(L,ie){L.side===mn?xe(t.CULL_FACE):J(t.CULL_FACE);let ae=L.side===Kt;ie&&(ae=!ae),ke(ae),L.blending===Xr&&L.transparent===!1?It(gn):It(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ge=L.stencilWrite;o.setTest(ge),ge&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){_!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),_=L)}function Me(L){L!==qv?(J(t.CULL_FACE),L!==D&&(L===Vd?t.cullFace(t.BACK):L===Qv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),D=L}function Lt(L){L!==B&&(Y&&t.lineWidth(L),B=L)}function Se(L,ie,ae){L?(J(t.POLYGON_OFFSET_FILL),(k!==ie||V!==ae)&&(t.polygonOffset(ie,ae),k=ie,V=ae)):xe(t.POLYGON_OFFSET_FILL)}function je(L){L?J(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function un(L){L===void 0&&(L=t.TEXTURE0+X-1),ce!==L&&(t.activeTexture(L),ce=L)}function Vt(L,ie,ae){ae===void 0&&(ce===null?ae=t.TEXTURE0+X-1:ae=ce);let ge=fe[ae];ge===void 0&&(ge={type:void 0,texture:void 0},fe[ae]=ge),(ge.type!==L||ge.texture!==ie)&&(ce!==ae&&(t.activeTexture(ae),ce=ae),t.bindTexture(L,ie||Q[L]),ge.type=L,ge.texture=ie)}function b(){const L=fe[ce];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function A(){try{t.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{t.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{t.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{t.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{t.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{t.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(L){St.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),St.copy(L))}function Ne(L){Pt.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Pt.copy(L))}function Te(L,ie){let ae=l.get(ie);ae===void 0&&(ae=new WeakMap,l.set(ie,ae));let ge=ae.get(L);ge===void 0&&(ge=t.getUniformBlockIndex(ie,L.name),ae.set(L,ge))}function ue(L,ie){const ge=l.get(ie).get(L);c.get(ie)!==ge&&(t.uniformBlockBinding(ie,ge,L.__bindingPointIndex),c.set(ie,ge))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ce=null,fe={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,S=null,E=null,w=null,T=null,C=new He(0,0,0),R=0,M=!1,_=null,D=null,B=null,k=null,V=null,St.set(0,0,t.canvas.width,t.canvas.height),Pt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:xe,bindFramebuffer:Ge,drawBuffers:De,useProgram:it,setBlending:It,setMaterial:Xe,setFlipSided:ke,setCullFace:Me,setLineWidth:Lt,setPolygonOffset:Se,setScissorTest:je,activeTexture:un,bindTexture:Vt,unbindTexture:b,compressedTexImage2D:A,compressedTexImage3D:O,texImage2D:we,texImage3D:ne,updateUBOMapping:Te,uniformBlockBinding:ue,texStorage2D:re,texStorage3D:ye,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:W,compressedTexSubImage3D:Re,scissor:de,viewport:Ne,reset:Ye}}function lM(t,e,n,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new te,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,A){return f?new OffscreenCanvas(b,A):Qa("canvas")}function v(b,A,O){let q=1;const Z=Vt(b);if((Z.width>O||Z.height>O)&&(q=O/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const W=Math.floor(q*Z.width),Re=Math.floor(q*Z.height);u===void 0&&(u=g(W,Re));const re=A?g(W,Re):u;return re.width=W,re.height=Re,re.getContext("2d").drawImage(b,0,0,W,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+Re+")."),re}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){t.generateMipmap(b)}function x(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(b,A,O,q,Z=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=A;if(A===t.RED&&(O===t.FLOAT&&(W=t.R32F),O===t.HALF_FLOAT&&(W=t.R16F),O===t.UNSIGNED_BYTE&&(W=t.R8)),A===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.R8UI),O===t.UNSIGNED_SHORT&&(W=t.R16UI),O===t.UNSIGNED_INT&&(W=t.R32UI),O===t.BYTE&&(W=t.R8I),O===t.SHORT&&(W=t.R16I),O===t.INT&&(W=t.R32I)),A===t.RG&&(O===t.FLOAT&&(W=t.RG32F),O===t.HALF_FLOAT&&(W=t.RG16F),O===t.UNSIGNED_BYTE&&(W=t.RG8)),A===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.RG8UI),O===t.UNSIGNED_SHORT&&(W=t.RG16UI),O===t.UNSIGNED_INT&&(W=t.RG32UI),O===t.BYTE&&(W=t.RG8I),O===t.SHORT&&(W=t.RG16I),O===t.INT&&(W=t.RG32I)),A===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.RGB8UI),O===t.UNSIGNED_SHORT&&(W=t.RGB16UI),O===t.UNSIGNED_INT&&(W=t.RGB32UI),O===t.BYTE&&(W=t.RGB8I),O===t.SHORT&&(W=t.RGB16I),O===t.INT&&(W=t.RGB32I)),A===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),O===t.UNSIGNED_INT&&(W=t.RGBA32UI),O===t.BYTE&&(W=t.RGBA8I),O===t.SHORT&&(W=t.RGBA16I),O===t.INT&&(W=t.RGBA32I)),A===t.RGB&&(O===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(W=t.R11F_G11F_B10F)),A===t.RGBA){const Re=Z?cc:ut.getTransfer(q);O===t.FLOAT&&(W=t.RGBA32F),O===t.HALF_FLOAT&&(W=t.RGBA16F),O===t.UNSIGNED_BYTE&&(W=Re===Et?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function E(b,A){let O;return b?A===null||A===ar||A===ea?O=t.DEPTH24_STENCIL8:A===_i?O=t.DEPTH32F_STENCIL8:A===Xa&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ar||A===ea?O=t.DEPTH_COMPONENT24:A===_i?O=t.DEPTH_COMPONENT32F:A===Xa&&(O=t.DEPTH_COMPONENT16),O}function w(b,A){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==vn&&b.minFilter!==Zt?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function T(b){const A=b.target;A.removeEventListener("dispose",T),R(A),A.isVideoTexture&&h.delete(A)}function C(b){const A=b.target;A.removeEventListener("dispose",C),_(A)}function R(b){const A=i.get(b);if(A.__webglInit===void 0)return;const O=b.source,q=d.get(O);if(q){const Z=q[A.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(b),Object.keys(q).length===0&&d.delete(O)}i.remove(b)}function M(b){const A=i.get(b);t.deleteTexture(A.__webglTexture);const O=b.source,q=d.get(O);delete q[A.__cacheKey],a.memory.textures--}function _(b){const A=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(A.__webglFramebuffer[q]))for(let Z=0;Z<A.__webglFramebuffer[q].length;Z++)t.deleteFramebuffer(A.__webglFramebuffer[q][Z]);else t.deleteFramebuffer(A.__webglFramebuffer[q]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[q])}else{if(Array.isArray(A.__webglFramebuffer))for(let q=0;q<A.__webglFramebuffer.length;q++)t.deleteFramebuffer(A.__webglFramebuffer[q]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let q=0;q<A.__webglColorRenderbuffer.length;q++)A.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[q]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const O=b.textures;for(let q=0,Z=O.length;q<Z;q++){const W=i.get(O[q]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(O[q])}i.remove(b)}let D=0;function B(){D=0}function k(){const b=D;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),D+=1,b}function V(b){const A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function X(b,A){const O=i.get(b);if(b.isVideoTexture&&je(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(O,b,A);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+A)}function Y(b,A){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Q(O,b,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+A)}function K(b,A){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Q(O,b,A);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+A)}function G(b,A){const O=i.get(b);if(b.version>0&&O.__version!==b.version){J(O,b,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+A)}const ce={[rr]:t.REPEAT,[Qn]:t.CLAMP_TO_EDGE,[as]:t.MIRRORED_REPEAT},fe={[vn]:t.NEAREST,[M1]:t.NEAREST_MIPMAP_NEAREST,[Ao]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[sl]:t.LINEAR_MIPMAP_NEAREST,[Ss]:t.LINEAR_MIPMAP_LINEAR},Ie={[w1]:t.NEVER,[P1]:t.ALWAYS,[T1]:t.LESS,[Hm]:t.LEQUAL,[b1]:t.EQUAL,[D1]:t.GEQUAL,[C1]:t.GREATER,[R1]:t.NOTEQUAL};function Je(b,A){if(A.type===_i&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Zt||A.magFilter===sl||A.magFilter===Ao||A.magFilter===Ss||A.minFilter===Zt||A.minFilter===sl||A.minFilter===Ao||A.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,ce[A.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ce[A.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ce[A.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,fe[A.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,fe[A.minFilter]),A.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Ie[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===vn||A.minFilter!==Ao&&A.minFilter!==Ss||A.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function St(b,A){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",T));const q=A.source;let Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));const W=V(A);if(W!==b.__cacheKey){Z[W]===void 0&&(Z[W]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[W].usedTimes++;const Re=Z[b.__cacheKey];Re!==void 0&&(Z[b.__cacheKey].usedTimes--,Re.usedTimes===0&&M(A)),b.__cacheKey=W,b.__webglTexture=Z[W].texture}return O}function Pt(b,A,O){return Math.floor(Math.floor(b/O)/A)}function mt(b,A,O,q){const W=b.updateRanges;if(W.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,A.width,A.height,O,q,A.data);else{W.sort((ne,de)=>ne.start-de.start);let Re=0;for(let ne=1;ne<W.length;ne++){const de=W[Re],Ne=W[ne],Te=de.start+de.count,ue=Pt(Ne.start,A.width,4),Ye=Pt(de.start,A.width,4);Ne.start<=Te+1&&ue===Ye&&Pt(Ne.start+Ne.count-1,A.width,4)===ue?de.count=Math.max(de.count,Ne.start+Ne.count-de.start):(++Re,W[Re]=Ne)}W.length=Re+1;const re=t.getParameter(t.UNPACK_ROW_LENGTH),ye=t.getParameter(t.UNPACK_SKIP_PIXELS),we=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,A.width);for(let ne=0,de=W.length;ne<de;ne++){const Ne=W[ne],Te=Math.floor(Ne.start/4),ue=Math.ceil(Ne.count/4),Ye=Te%A.width,L=Math.floor(Te/A.width),ie=ue,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Ye,L,ie,ae,O,q,A.data)}b.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,re),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(t.UNPACK_SKIP_ROWS,we)}}function Q(b,A,O){let q=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(q=t.TEXTURE_3D);const Z=St(b,A),W=A.source;n.bindTexture(q,b.__webglTexture,t.TEXTURE0+O);const Re=i.get(W);if(W.version!==Re.__version||Z===!0){n.activeTexture(t.TEXTURE0+O);const re=ut.getPrimaries(ut.workingColorSpace),ye=A.colorSpace===Ri?null:ut.getPrimaries(A.colorSpace),we=A.colorSpace===Ri||re===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ne=v(A.image,!1,s.maxTextureSize);ne=un(A,ne);const de=r.convert(A.format,A.colorSpace),Ne=r.convert(A.type);let Te=S(A.internalFormat,de,Ne,A.colorSpace,A.isVideoTexture);Je(q,A);let ue;const Ye=A.mipmaps,L=A.isVideoTexture!==!0,ie=Re.__version===void 0||Z===!0,ae=W.dataReady,ge=w(A,ne);if(A.isDepthTexture)Te=E(A.format===ta,A.type),ie&&(L?n.texStorage2D(t.TEXTURE_2D,1,Te,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Te,ne.width,ne.height,0,de,Ne,null));else if(A.isDataTexture)if(Ye.length>0){L&&ie&&n.texStorage2D(t.TEXTURE_2D,ge,Te,Ye[0].width,Ye[0].height);for(let $=0,j=Ye.length;$<j;$++)ue=Ye[$],L?ae&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ue.width,ue.height,de,Ne,ue.data):n.texImage2D(t.TEXTURE_2D,$,Te,ue.width,ue.height,0,de,Ne,ue.data);A.generateMipmaps=!1}else L?(ie&&n.texStorage2D(t.TEXTURE_2D,ge,Te,ne.width,ne.height),ae&&mt(A,ne,de,Ne)):n.texImage2D(t.TEXTURE_2D,0,Te,ne.width,ne.height,0,de,Ne,ne.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){L&&ie&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Te,Ye[0].width,Ye[0].height,ne.depth);for(let $=0,j=Ye.length;$<j;$++)if(ue=Ye[$],A.format!==li)if(de!==null)if(L){if(ae)if(A.layerUpdates.size>0){const Ee=Sf(ue.width,ue.height,A.format,A.type);for(const Ve of A.layerUpdates){const yt=ue.data.subarray(Ve*Ee/ue.data.BYTES_PER_ELEMENT,(Ve+1)*Ee/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,Ve,ue.width,ue.height,1,de,yt)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ue.width,ue.height,ne.depth,de,ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Te,ue.width,ue.height,ne.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ue.width,ue.height,ne.depth,de,Ne,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Te,ue.width,ue.height,ne.depth,0,de,Ne,ue.data)}else{L&&ie&&n.texStorage2D(t.TEXTURE_2D,ge,Te,Ye[0].width,Ye[0].height);for(let $=0,j=Ye.length;$<j;$++)ue=Ye[$],A.format!==li?de!==null?L?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,ue.width,ue.height,de,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Te,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ae&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ue.width,ue.height,de,Ne,ue.data):n.texImage2D(t.TEXTURE_2D,$,Te,ue.width,ue.height,0,de,Ne,ue.data)}else if(A.isDataArrayTexture)if(L){if(ie&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Te,ne.width,ne.height,ne.depth),ae)if(A.layerUpdates.size>0){const $=Sf(ne.width,ne.height,A.format,A.type);for(const j of A.layerUpdates){const Ee=ne.data.subarray(j*$/ne.data.BYTES_PER_ELEMENT,(j+1)*$/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,ne.width,ne.height,1,de,Ne,Ee)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,Ne,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ne.width,ne.height,ne.depth,0,de,Ne,ne.data);else if(A.isData3DTexture)L?(ie&&n.texStorage3D(t.TEXTURE_3D,ge,Te,ne.width,ne.height,ne.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,Ne,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ne.width,ne.height,ne.depth,0,de,Ne,ne.data);else if(A.isFramebufferTexture){if(ie)if(L)n.texStorage2D(t.TEXTURE_2D,ge,Te,ne.width,ne.height);else{let $=ne.width,j=ne.height;for(let Ee=0;Ee<ge;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Te,$,j,0,de,Ne,null),$>>=1,j>>=1}}else if(Ye.length>0){if(L&&ie){const $=Vt(Ye[0]);n.texStorage2D(t.TEXTURE_2D,ge,Te,$.width,$.height)}for(let $=0,j=Ye.length;$<j;$++)ue=Ye[$],L?ae&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,de,Ne,ue):n.texImage2D(t.TEXTURE_2D,$,Te,de,Ne,ue);A.generateMipmaps=!1}else if(L){if(ie){const $=Vt(ne);n.texStorage2D(t.TEXTURE_2D,ge,Te,$.width,$.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Ne,ne)}else n.texImage2D(t.TEXTURE_2D,0,Te,de,Ne,ne);m(A)&&p(q),Re.__version=W.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function J(b,A,O){if(A.image.length!==6)return;const q=St(b,A),Z=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+O);const W=i.get(Z);if(Z.version!==W.__version||q===!0){n.activeTexture(t.TEXTURE0+O);const Re=ut.getPrimaries(ut.workingColorSpace),re=A.colorSpace===Ri?null:ut.getPrimaries(A.colorSpace),ye=A.colorSpace===Ri||Re===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const we=A.isCompressedTexture||A.image[0].isCompressedTexture,ne=A.image[0]&&A.image[0].isDataTexture,de=[];for(let j=0;j<6;j++)!we&&!ne?de[j]=v(A.image[j],!0,s.maxCubemapSize):de[j]=ne?A.image[j].image:A.image[j],de[j]=un(A,de[j]);const Ne=de[0],Te=r.convert(A.format,A.colorSpace),ue=r.convert(A.type),Ye=S(A.internalFormat,Te,ue,A.colorSpace),L=A.isVideoTexture!==!0,ie=W.__version===void 0||q===!0,ae=Z.dataReady;let ge=w(A,Ne);Je(t.TEXTURE_CUBE_MAP,A);let $;if(we){L&&ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ye,Ne.width,Ne.height);for(let j=0;j<6;j++){$=de[j].mipmaps;for(let Ee=0;Ee<$.length;Ee++){const Ve=$[Ee];A.format!==li?Te!==null?L?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee,0,0,Ve.width,Ve.height,Te,Ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee,Ye,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee,0,0,Ve.width,Ve.height,Te,ue,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee,Ye,Ve.width,Ve.height,0,Te,ue,Ve.data)}}}else{if($=A.mipmaps,L&&ie){$.length>0&&ge++;const j=Vt(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ye,j.width,j.height)}for(let j=0;j<6;j++)if(ne){L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,de[j].width,de[j].height,Te,ue,de[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ye,de[j].width,de[j].height,0,Te,ue,de[j].data);for(let Ee=0;Ee<$.length;Ee++){const yt=$[Ee].image[j].image;L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee+1,0,0,yt.width,yt.height,Te,ue,yt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee+1,Ye,yt.width,yt.height,0,Te,ue,yt.data)}}else{L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,ue,de[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ye,Te,ue,de[j]);for(let Ee=0;Ee<$.length;Ee++){const Ve=$[Ee];L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee+1,0,0,Te,ue,Ve.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ee+1,Ye,Te,ue,Ve.image[j])}}}m(A)&&p(t.TEXTURE_CUBE_MAP),W.__version=Z.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function xe(b,A,O,q,Z,W){const Re=r.convert(O.format,O.colorSpace),re=r.convert(O.type),ye=S(O.internalFormat,Re,re,O.colorSpace),we=i.get(A),ne=i.get(O);if(ne.__renderTarget=A,!we.__hasExternalTextures){const de=Math.max(1,A.width>>W),Ne=Math.max(1,A.height>>W);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,W,ye,de,Ne,A.depth,0,Re,re,null):n.texImage2D(Z,W,ye,de,Ne,0,Re,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Se(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Z,ne.__webglTexture,0,Lt(A)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Z,ne.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(b,A,O){if(t.bindRenderbuffer(t.RENDERBUFFER,b),A.depthBuffer){const q=A.depthTexture,Z=q&&q.isDepthTexture?q.type:null,W=E(A.stencilBuffer,Z),Re=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=Lt(A);Se(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,W,A.width,A.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,W,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,W,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,b)}else{const q=A.textures;for(let Z=0;Z<q.length;Z++){const W=q[Z],Re=r.convert(W.format,W.colorSpace),re=r.convert(W.type),ye=S(W.internalFormat,Re,re,W.colorSpace),we=Lt(A);O&&Se(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,ye,A.width,A.height):Se(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,ye,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,ye,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(b,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(A.depthTexture);q.__renderTarget=A,(!q.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),X(A.depthTexture,0);const Z=q.__webglTexture,W=Lt(A);if(A.depthTexture.format===Ya)Se(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(A.depthTexture.format===ta)Se(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function it(b){const A=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),q){const Z=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),A.__depthDisposeCallback=Z}A.__boundDepthTexture=q}if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=b.texture.mipmaps;q&&q.length>0?De(A.__webglFramebuffer[0],b):De(A.__webglFramebuffer,b)}else if(O){A.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[q]),A.__webglDepthbuffer[q]===void 0)A.__webglDepthbuffer[q]=t.createRenderbuffer(),Ge(A.__webglDepthbuffer[q],b,!1);else{const Z=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=A.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,W)}}else{const q=b.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),Ge(A.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function En(b,A,O){const q=i.get(b);A!==void 0&&xe(q.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&it(b)}function I(b){const A=b.texture,O=i.get(b),q=i.get(A);b.addEventListener("dispose",C);const Z=b.textures,W=b.isWebGLCubeRenderTarget===!0,Re=Z.length>1;if(Re||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=A.version,a.memory.textures++),W){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(A.mipmaps&&A.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let ye=0;ye<A.mipmaps.length;ye++)O.__webglFramebuffer[re][ye]=t.createFramebuffer()}else O.__webglFramebuffer[re]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<A.mipmaps.length;re++)O.__webglFramebuffer[re]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Re)for(let re=0,ye=Z.length;re<ye;re++){const we=i.get(Z[re]);we.__webglTexture===void 0&&(we.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&Se(b)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const ye=Z[re];O.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const we=r.convert(ye.format,ye.colorSpace),ne=r.convert(ye.type),de=S(ye.internalFormat,we,ne,ye.colorSpace,b.isXRRenderTarget===!0),Ne=Lt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,de,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,O.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Ge(O.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Je(t.TEXTURE_CUBE_MAP,A);for(let re=0;re<6;re++)if(A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)xe(O.__webglFramebuffer[re][ye],b,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye);else xe(O.__webglFramebuffer[re],b,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(A)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let re=0,ye=Z.length;re<ye;re++){const we=Z[re],ne=i.get(we);let de=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(de=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,ne.__webglTexture),Je(de,we),xe(O.__webglFramebuffer,b,we,t.COLOR_ATTACHMENT0+re,de,0),m(we)&&p(de)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(re=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,q.__webglTexture),Je(re,A),A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)xe(O.__webglFramebuffer[ye],b,A,t.COLOR_ATTACHMENT0,re,ye);else xe(O.__webglFramebuffer,b,A,t.COLOR_ATTACHMENT0,re,0);m(A)&&p(re),n.unbindTexture()}b.depthBuffer&&it(b)}function It(b){const A=b.textures;for(let O=0,q=A.length;O<q;O++){const Z=A[O];if(m(Z)){const W=x(b),Re=i.get(Z).__webglTexture;n.bindTexture(W,Re),p(W),n.unbindTexture()}}}const Xe=[],ke=[];function Me(b){if(b.samples>0){if(Se(b)===!1){const A=b.textures,O=b.width,q=b.height;let Z=t.COLOR_BUFFER_BIT;const W=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(b),re=A.length>1;if(re)for(let we=0;we<A.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ye=b.texture.mipmaps;ye&&ye.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let we=0;we<A.length;we++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const ne=i.get(A[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,O,q,0,0,O,q,Z,t.NEAREST),c===!0&&(Xe.length=0,ke.length=0,Xe.push(t.COLOR_ATTACHMENT0+we),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Xe.push(W),ke.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ke)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Xe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let we=0;we<A.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const ne=i.get(A[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const A=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function Lt(b){return Math.min(s.maxSamples,b.samples)}function Se(b){const A=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function je(b){const A=a.render.frame;h.get(b)!==A&&(h.set(b,A),b.update())}function un(b,A){const O=b.colorSpace,q=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Rs&&O!==Ri&&(ut.getTransfer(O)===Et?(q!==li||Z!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),A}function Vt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=En,this.setupRenderTarget=I,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Se}function uM(t,e){function n(i,s=Ri){let r;const a=ut.getTransfer(s);if(i===rn)return t.UNSIGNED_BYTE;if(i===gh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Um)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Fm)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lm)return t.BYTE;if(i===Bm)return t.SHORT;if(i===Xa)return t.UNSIGNED_SHORT;if(i===mh)return t.INT;if(i===ar)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===hr)return t.HALF_FLOAT;if(i===Om)return t.ALPHA;if(i===Nm)return t.RGB;if(i===li)return t.RGBA;if(i===Ya)return t.DEPTH_COMPONENT;if(i===ta)return t.DEPTH_STENCIL;if(i===Cc)return t.RED;if(i===xh)return t.RED_INTEGER;if(i===km)return t.RG;if(i===Ah)return t.RG_INTEGER;if(i===_h)return t.RGBA_INTEGER;if(i===Ko||i===Zo||i===Jo||i===$o)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ou||i===cu||i===lu||i===uu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ou)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hu||i===du||i===fu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hu||i===du)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fu)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pu||i===mu||i===gu||i===vu||i===xu||i===Au||i===_u||i===Eu||i===Mu||i===Su||i===yu||i===wu||i===Tu||i===bu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pu)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mu)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gu)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vu)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xu)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Au)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_u)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Eu)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mu)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Su)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yu)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wu)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tu)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bu)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cu||i===Ru||i===Du)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Cu)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ru)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Du)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pu||i===Iu||i===Lu||i===Bu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Iu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ea?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const hM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new t0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $t({vertexShader:hM,fragmentShader:dM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Le(new pr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pM extends us{constructor(e,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new fM,p={},x=n.getContextAttributes();let S=null,E=null;const w=[],T=[],C=new te;let R=null;const M=new Nn;M.viewport=new vt;const _=new Nn;_.viewport=new vt;const D=[M,_],B=new B2;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let J=w[Q];return J===void 0&&(J=new Tl,w[Q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Q){let J=w[Q];return J===void 0&&(J=new Tl,w[Q]=J),J.getGripSpace()},this.getHand=function(Q){let J=w[Q];return J===void 0&&(J=new Tl,w[Q]=J),J.getHandSpace()};function X(Q){const J=T.indexOf(Q.inputSource);if(J===-1)return;const xe=w[J];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,l||a),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",K);for(let Q=0;Q<w.length;Q++){const J=T[Q];J!==null&&(T[Q]=null,w[Q].disconnect(J))}k=null,V=null,m.reset();for(const Q in p)delete p[Q];e.setRenderTarget(S),f=null,d=null,u=null,s=null,E=null,mt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,n)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ge=null,De=null;x.depth&&(De=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=x.stencil?ta:Ya,Ge=x.stencil?ea:ar);const it={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(it),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new an(d.textureWidth,d.textureHeight,{format:li,type:rn,depthTexture:new Th(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new an(f.framebufferWidth,f.framebufferHeight,{format:li,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),mt.setContext(s),mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Q){for(let J=0;J<Q.removed.length;J++){const xe=Q.removed[J],Ge=T.indexOf(xe);Ge>=0&&(T[Ge]=null,w[Ge].disconnect(xe))}for(let J=0;J<Q.added.length;J++){const xe=Q.added[J];let Ge=T.indexOf(xe);if(Ge===-1){for(let it=0;it<w.length;it++)if(it>=T.length){T.push(xe),Ge=it;break}else if(T[it]===null){T[it]=xe,Ge=it;break}if(Ge===-1)break}const De=w[Ge];De&&De.connect(xe)}}const G=new P,ce=new P;function fe(Q,J,xe){G.setFromMatrixPosition(J.matrixWorld),ce.setFromMatrixPosition(xe.matrixWorld);const Ge=G.distanceTo(ce),De=J.projectionMatrix.elements,it=xe.projectionMatrix.elements,En=De[14]/(De[10]-1),I=De[14]/(De[10]+1),It=(De[9]+1)/De[5],Xe=(De[9]-1)/De[5],ke=(De[8]-1)/De[0],Me=(it[8]+1)/it[0],Lt=En*ke,Se=En*Me,je=Ge/(-ke+Me),un=je*-ke;if(J.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(un),Q.translateZ(je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),De[10]===-1)Q.projectionMatrix.copy(J.projectionMatrix),Q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Vt=En+je,b=I+je,A=Lt-un,O=Se+(Ge-un),q=It*I/b*Vt,Z=Xe*I/b*Vt;Q.projectionMatrix.makePerspective(A,O,q,Z,Vt,b),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ie(Q,J){J===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(J.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let J=Q.near,xe=Q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),B.near=_.near=M.near=J,B.far=_.far=M.far=xe,(k!==B.near||V!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,V=B.far),B.layers.mask=Q.layers.mask|6,M.layers.mask=B.layers.mask&3,_.layers.mask=B.layers.mask&5;const Ge=Q.parent,De=B.cameras;Ie(B,Ge);for(let it=0;it<De.length;it++)Ie(De[it],Ge);De.length===2?fe(B,M,_):B.projectionMatrix.copy(M.projectionMatrix),Je(Q,B,Ge)};function Je(Q,J,xe){xe===null?Q.matrix.copy(J.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(J.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(J.projectionMatrix),Q.projectionMatrixInverse.copy(J.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=qa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Q){return p[Q]};let St=null;function Pt(Q,J){if(h=J.getViewerPose(l||a),g=J,h!==null){const xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Ge=!1;xe.length!==B.cameras.length&&(B.cameras.length=0,Ge=!0);for(let I=0;I<xe.length;I++){const It=xe[I];let Xe=null;if(f!==null)Xe=f.getViewport(It);else{const Me=u.getViewSubImage(d,It);Xe=Me.viewport,I===0&&(e.setRenderTargetTextures(E,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(E))}let ke=D[I];ke===void 0&&(ke=new Nn,ke.layers.enable(I),ke.viewport=new vt,D[I]=ke),ke.matrix.fromArray(It.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(It.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),I===0&&(B.matrix.copy(ke.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ge===!0&&B.cameras.push(ke)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const I=u.getDepthInformation(xe[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(De&&De.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let I=0;I<xe.length;I++){const It=xe[I].camera;if(It){let Xe=p[It];Xe||(Xe=new t0,p[It]=Xe);const ke=u.getCameraImage(It);Xe.sourceTexture=ke}}}}for(let xe=0;xe<w.length;xe++){const Ge=T[xe],De=w[xe];Ge!==null&&De!==void 0&&De.update(Ge,J,l||a)}St&&St(Q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const mt=new a0;mt.setAnimationLoop(Pt),this.setAnimationLoop=function(Q){St=Q},this.dispose=function(){}}}const Vs=new di,mM=new xt;function gM(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,jm(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,S,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),S=x.envMap,E=x.envMapRotation;S&&(m.envMap.value=S,Vs.copy(E),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),m.envMapRotation.value.setFromMatrix4(mM.makeRotationFromEuler(Vs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=S*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vM(t,e,n,i){let s={},r={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const E=S.program;i.uniformBlockBinding(x,E)}function l(x,S){let E=s[x.id];E===void 0&&(g(x),E=h(x),s[x.id]=E,x.addEventListener("dispose",m));const w=S.program;i.updateUBOMapping(x,w);const T=e.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){const S=u();x.__bindingPointIndex=S;const E=t.createBuffer(),w=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,w,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,E),E}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const S=s[x.id],E=x.uniforms,w=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let T=0,C=E.length;T<C;T++){const R=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,_=R.length;M<_;M++){const D=R[M];if(f(D,T,M,w)===!0){const B=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let X=0;X<k.length;X++){const Y=k[X],K=v(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,B+V,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(x,S,E,w){const T=x.value,C=S+"_"+E;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:w[C]=T.clone(),!0;{const R=w[C];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return w[C]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(x){const S=x.uniforms;let E=0;const w=16;for(let C=0,R=S.length;C<R;C++){const M=Array.isArray(S[C])?S[C]:[S[C]];for(let _=0,D=M.length;_<D;_++){const B=M[_],k=Array.isArray(B.value)?B.value:[B.value];for(let V=0,X=k.length;V<X;V++){const Y=k[V],K=v(Y),G=E%w,ce=G%K.boundary,fe=G+ce;E+=ce,fe!==0&&w-fe<K.storage&&(E+=w-fe),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=K.storage}}}const T=E%w;return T>0&&(E+=w-T),x.__size=E,x.__cache={},this}function v(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const x in s)t.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class xM{constructor(e={}){const{canvas:n=Q1(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let w=!1;this._outputColorSpace=pt;let T=0,C=0,R=null,M=-1,_=null;const D=new vt,B=new vt;let k=null;const V=new He(0);let X=0,Y=n.width,K=n.height,G=1,ce=null,fe=null;const Ie=new vt(0,0,Y,K),Je=new vt(0,0,Y,K);let St=!1;const Pt=new wh;let mt=!1,Q=!1;const J=new xt,xe=new P,Ge=new vt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function En(){return R===null?G:1}let I=i;function It(y,U){return n.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ur}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",$,!1),I===null){const U="webgl2";if(I=It(U,y),I===null)throw It(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Xe,ke,Me,Lt,Se,je,un,Vt,b,A,O,q,Z,W,Re,re,ye,we,ne,de,Ne,Te,ue,Ye;function L(){Xe=new C_(I),Xe.init(),Te=new uM(I,Xe),ke=new E_(I,Xe,e,Te),Me=new cM(I,Xe),ke.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),Lt=new P_(I),Se=new jE,je=new lM(I,Xe,Me,Se,ke,Te,Lt),un=new S_(E),Vt=new b_(E),b=new O2(I),ue=new A_(I,b),A=new R_(I,b,Lt,ue),O=new L_(I,A,b,Lt),ne=new I_(I,ke,je),re=new M_(Se),q=new QE(E,un,Vt,Xe,ke,ue,re),Z=new gM(E,Se),W=new ZE,Re=new iM(Xe),we=new x_(E,un,Vt,Me,O,f,c),ye=new aM(E,O,ke),Ye=new vM(I,Lt,ke,Me),de=new __(I,Xe,Lt),Ne=new D_(I,Xe,Lt),Lt.programs=q.programs,E.capabilities=ke,E.extensions=Xe,E.properties=Se,E.renderLists=W,E.shadowMap=ye,E.state=Me,E.info=Lt}L();const ie=new pM(E,I);this.xr=ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Xe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Xe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(Y,K,!1))},this.getSize=function(y){return y.set(Y,K)},this.setSize=function(y,U,z=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,K=U,n.width=Math.floor(y*G),n.height=Math.floor(U*G),z===!0&&(n.style.width=y+"px",n.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Y*G,K*G).floor()},this.setDrawingBufferSize=function(y,U,z){Y=y,K=U,G=z,n.width=Math.floor(y*z),n.height=Math.floor(U*z),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(Ie)},this.setViewport=function(y,U,z,H){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,U,z,H),Me.viewport(D.copy(Ie).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Je)},this.setScissor=function(y,U,z,H){y.isVector4?Je.set(y.x,y.y,y.z,y.w):Je.set(y,U,z,H),Me.scissor(B.copy(Je).multiplyScalar(G).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(y){Me.setScissorTest(St=y)},this.setOpaqueSort=function(y){ce=y},this.setTransparentSort=function(y){fe=y},this.getClearColor=function(y){return y.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,z=!0){let H=0;if(y){let F=!1;if(R!==null){const ee=R.texture.format;F=ee===_h||ee===Ah||ee===xh}if(F){const ee=R.texture.type,he=ee===rn||ee===ar||ee===Xa||ee===ea||ee===gh||ee===vh,Ae=we.getClearColor(),pe=we.getClearAlpha(),Oe=Ae.r,ze=Ae.g,Be=Ae.b;he?(g[0]=Oe,g[1]=ze,g[2]=Be,g[3]=pe,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Oe,v[1]=ze,v[2]=Be,v[3]=pe,I.clearBufferiv(I.COLOR,0,v))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT),z&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",$,!1),we.dispose(),W.dispose(),Re.dispose(),Se.dispose(),un.dispose(),Vt.dispose(),O.dispose(),ue.dispose(),Ye.dispose(),q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",wi),ie.removeEventListener("sessionend",Od),Fs.stop()};function ae(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const y=Lt.autoReset,U=ye.enabled,z=ye.autoUpdate,H=ye.needsUpdate,F=ye.type;L(),Lt.autoReset=y,ye.enabled=U,ye.autoUpdate=z,ye.needsUpdate=H,ye.type=F}function $(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function j(y){const U=y.target;U.removeEventListener("dispose",j),Ee(U)}function Ee(y){Ve(y),Se.remove(y)}function Ve(y){const U=Se.get(y).programs;U!==void 0&&(U.forEach(function(z){q.releaseProgram(z)}),y.isShaderMaterial&&q.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,z,H,F,ee){U===null&&(U=De);const he=F.isMesh&&F.matrixWorld.determinant()<0,Ae=kv(y,U,z,H,F);Me.setMaterial(H,he);let pe=z.index,Oe=1;if(H.wireframe===!0){if(pe=A.getWireframeAttribute(z),pe===void 0)return;Oe=2}const ze=z.drawRange,Be=z.attributes.position;let et=ze.start*Oe,_t=(ze.start+ze.count)*Oe;ee!==null&&(et=Math.max(et,ee.start*Oe),_t=Math.min(_t,(ee.start+ee.count)*Oe)),pe!==null?(et=Math.max(et,0),_t=Math.min(_t,pe.count)):Be!=null&&(et=Math.max(et,0),_t=Math.min(_t,Be.count));const Ht=_t-et;if(Ht<0||Ht===1/0)return;ue.setup(F,H,Ae,z,pe);let bt,Mt=de;if(pe!==null&&(bt=b.get(pe),Mt=Ne,Mt.setIndex(bt)),F.isMesh)H.wireframe===!0?(Me.setLineWidth(H.wireframeLinewidth*En()),Mt.setMode(I.LINES)):Mt.setMode(I.TRIANGLES);else if(F.isLine){let Fe=H.linewidth;Fe===void 0&&(Fe=1),Me.setLineWidth(Fe*En()),F.isLineSegments?Mt.setMode(I.LINES):F.isLineLoop?Mt.setMode(I.LINE_LOOP):Mt.setMode(I.LINE_STRIP)}else F.isPoints?Mt.setMode(I.POINTS):F.isSprite&&Mt.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ja("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))Mt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Fe=F._multiDrawStarts,Ft=F._multiDrawCounts,ct=F._multiDrawCount,Hn=pe?b.get(pe).bytesPerElement:1,Er=Se.get(H).currentProgram.getUniforms();for(let Gn=0;Gn<ct;Gn++)Er.setValue(I,"_gl_DrawID",Gn),Mt.render(Fe[Gn]/Hn,Ft[Gn])}else if(F.isInstancedMesh)Mt.renderInstances(et,Ht,F.count);else if(z.isInstancedBufferGeometry){const Fe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ft=Math.min(z.instanceCount,Fe);Mt.renderInstances(et,Ht,Ft)}else Mt.render(et,Ht)};function yt(y,U,z){y.transparent===!0&&y.side===mn&&y.forceSinglePass===!1?(y.side=Kt,y.needsUpdate=!0,xo(y,U,z),y.side=rs,y.needsUpdate=!0,xo(y,U,z),y.side=mn):xo(y,U,z)}this.compile=function(y,U,z=null){z===null&&(z=y),p=Re.get(z),p.init(U),S.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),y!==z&&y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ee=F.material;if(ee)if(Array.isArray(ee))for(let he=0;he<ee.length;he++){const Ae=ee[he];yt(Ae,z,F),H.add(Ae)}else yt(ee,z,F),H.add(ee)}),p=S.pop(),H},this.compileAsync=function(y,U,z=null){const H=this.compile(y,U,z);return new Promise(F=>{function ee(){if(H.forEach(function(he){Se.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){F(y);return}setTimeout(ee,10)}Xe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let gt=null;function Hi(y){gt&&gt(y)}function wi(){Fs.stop()}function Od(){Fs.start()}const Fs=new a0;Fs.setAnimationLoop(Hi),typeof self<"u"&&Fs.setContext(self),this.setAnimationLoop=function(y){gt=y,ie.setAnimationLoop(y),y===null?Fs.stop():Fs.start()},ie.addEventListener("sessionstart",wi),ie.addEventListener("sessionend",Od),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,U,R),p=Re.get(y,S.length),p.init(U),S.push(p),J.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Pt.setFromProjectionMatrix(J,Di,U.reversedDepth),Q=this.localClippingEnabled,mt=re.init(this.clippingPlanes,Q),m=W.get(y,x.length),m.init(),x.push(m),ie.enabled===!0&&ie.isPresenting===!0){const ee=E.xr.getDepthSensingMesh();ee!==null&&nl(ee,U,-1/0,E.sortObjects)}nl(y,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ce,fe),it=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,it&&we.addToRenderList(m,y),this.info.render.frame++,mt===!0&&re.beginShadows();const z=p.state.shadowsArray;ye.render(z,y,U),mt===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ee=U.cameras;if(F.length>0)for(let he=0,Ae=ee.length;he<Ae;he++){const pe=ee[he];kd(H,F,y,pe)}it&&we.render(y);for(let he=0,Ae=ee.length;he<Ae;he++){const pe=ee[he];Nd(m,y,pe,pe.viewport)}}else F.length>0&&kd(H,F,y,U),it&&we.render(y),Nd(m,y,U);R!==null&&C===0&&(je.updateMultisampleRenderTarget(R),je.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(E,y,U),ue.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(p=S[S.length-1],mt===!0&&re.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function nl(y,U,z,H){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Pt.intersectsSprite(y)){H&&Ge.setFromMatrixPosition(y.matrixWorld).applyMatrix4(J);const he=O.update(y),Ae=y.material;Ae.visible&&m.push(y,he,Ae,z,Ge.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Pt.intersectsObject(y))){const he=O.update(y),Ae=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ge.copy(y.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ge.copy(he.boundingSphere.center)),Ge.applyMatrix4(y.matrixWorld).applyMatrix4(J)),Array.isArray(Ae)){const pe=he.groups;for(let Oe=0,ze=pe.length;Oe<ze;Oe++){const Be=pe[Oe],et=Ae[Be.materialIndex];et&&et.visible&&m.push(y,he,et,z,Ge.z,Be)}}else Ae.visible&&m.push(y,he,Ae,z,Ge.z,null)}}const ee=y.children;for(let he=0,Ae=ee.length;he<Ae;he++)nl(ee[he],U,z,H)}function Nd(y,U,z,H){const F=y.opaque,ee=y.transmissive,he=y.transparent;p.setupLightsView(z),mt===!0&&re.setGlobalState(E.clippingPlanes,z),H&&Me.viewport(D.copy(H)),F.length>0&&vo(F,U,z),ee.length>0&&vo(ee,U,z),he.length>0&&vo(he,U,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function kd(y,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new an(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?hr:rn,minFilter:Ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const ee=p.state.transmissionRenderTarget[H.id],he=H.viewport||D;ee.setSize(he.z*E.transmissionResolutionScale,he.w*E.transmissionResolutionScale);const Ae=E.getRenderTarget(),pe=E.getActiveCubeFace(),Oe=E.getActiveMipmapLevel();E.setRenderTarget(ee),E.getClearColor(V),X=E.getClearAlpha(),X<1&&E.setClearColor(16777215,.5),E.clear(),it&&we.render(z);const ze=E.toneMapping;E.toneMapping=es;const Be=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),mt===!0&&re.setGlobalState(E.clippingPlanes,H),vo(y,z,H),je.updateMultisampleRenderTarget(ee),je.updateRenderTargetMipmap(ee),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let _t=0,Ht=U.length;_t<Ht;_t++){const bt=U[_t],Mt=bt.object,Fe=bt.geometry,Ft=bt.material,ct=bt.group;if(Ft.side===mn&&Mt.layers.test(H.layers)){const Hn=Ft.side;Ft.side=Kt,Ft.needsUpdate=!0,zd(Mt,z,H,Fe,Ft,ct),Ft.side=Hn,Ft.needsUpdate=!0,et=!0}}et===!0&&(je.updateMultisampleRenderTarget(ee),je.updateRenderTargetMipmap(ee))}E.setRenderTarget(Ae,pe,Oe),E.setClearColor(V,X),Be!==void 0&&(H.viewport=Be),E.toneMapping=ze}function vo(y,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ee=y.length;F<ee;F++){const he=y[F],Ae=he.object,pe=he.geometry,Oe=he.group;let ze=he.material;ze.allowOverride===!0&&H!==null&&(ze=H),Ae.layers.test(z.layers)&&zd(Ae,U,z,pe,ze,Oe)}}function zd(y,U,z,H,F,ee){y.onBeforeRender(E,U,z,H,F,ee),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(E,U,z,H,y,ee),F.transparent===!0&&F.side===mn&&F.forceSinglePass===!1?(F.side=Kt,F.needsUpdate=!0,E.renderBufferDirect(z,U,H,F,y,ee),F.side=rs,F.needsUpdate=!0,E.renderBufferDirect(z,U,H,F,y,ee),F.side=mn):E.renderBufferDirect(z,U,H,F,y,ee),y.onAfterRender(E,U,z,H,F,ee)}function xo(y,U,z){U.isScene!==!0&&(U=De);const H=Se.get(y),F=p.state.lights,ee=p.state.shadowsArray,he=F.state.version,Ae=q.getParameters(y,F.state,ee,U,z),pe=q.getProgramCacheKey(Ae);let Oe=H.programs;H.environment=y.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(y.isMeshStandardMaterial?Vt:un).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Oe===void 0&&(y.addEventListener("dispose",j),Oe=new Map,H.programs=Oe);let ze=Oe.get(pe);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===he)return Gd(y,Ae),ze}else Ae.uniforms=q.getUniforms(y),y.onBeforeCompile(Ae,E),ze=q.acquireProgram(Ae,pe),Oe.set(pe,ze),H.uniforms=Ae.uniforms;const Be=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Be.clippingPlanes=re.uniform),Gd(y,Ae),H.needsLights=Hv(y),H.lightsStateVersion=he,H.needsLights&&(Be.ambientLightColor.value=F.state.ambient,Be.lightProbe.value=F.state.probe,Be.directionalLights.value=F.state.directional,Be.directionalLightShadows.value=F.state.directionalShadow,Be.spotLights.value=F.state.spot,Be.spotLightShadows.value=F.state.spotShadow,Be.rectAreaLights.value=F.state.rectArea,Be.ltc_1.value=F.state.rectAreaLTC1,Be.ltc_2.value=F.state.rectAreaLTC2,Be.pointLights.value=F.state.point,Be.pointLightShadows.value=F.state.pointShadow,Be.hemisphereLights.value=F.state.hemi,Be.directionalShadowMap.value=F.state.directionalShadowMap,Be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Be.spotShadowMap.value=F.state.spotShadowMap,Be.spotLightMatrix.value=F.state.spotLightMatrix,Be.spotLightMap.value=F.state.spotLightMap,Be.pointShadowMap.value=F.state.pointShadowMap,Be.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=ze,H.uniformsList=null,ze}function Hd(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=ec.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Gd(y,U){const z=Se.get(y);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function kv(y,U,z,H,F){U.isScene!==!0&&(U=De),je.resetTextureUnits();const ee=U.fog,he=H.isMeshStandardMaterial?U.environment:null,Ae=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Rs,pe=(H.isMeshStandardMaterial?Vt:un).get(H.envMap||he),Oe=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ze=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Be=!!z.morphAttributes.position,et=!!z.morphAttributes.normal,_t=!!z.morphAttributes.color;let Ht=es;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ht=E.toneMapping);const bt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Mt=bt!==void 0?bt.length:0,Fe=Se.get(H),Ft=p.state.lights;if(mt===!0&&(Q===!0||y!==_)){const wn=y===_&&H.id===M;re.setState(H,y,wn)}let ct=!1;H.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ft.state.version||Fe.outputColorSpace!==Ae||F.isBatchedMesh&&Fe.batching===!1||!F.isBatchedMesh&&Fe.batching===!0||F.isBatchedMesh&&Fe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Fe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Fe.instancing===!1||!F.isInstancedMesh&&Fe.instancing===!0||F.isSkinnedMesh&&Fe.skinning===!1||!F.isSkinnedMesh&&Fe.skinning===!0||F.isInstancedMesh&&Fe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Fe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Fe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Fe.instancingMorph===!1&&F.morphTexture!==null||Fe.envMap!==pe||H.fog===!0&&Fe.fog!==ee||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==re.numPlanes||Fe.numIntersection!==re.numIntersection)||Fe.vertexAlphas!==Oe||Fe.vertexTangents!==ze||Fe.morphTargets!==Be||Fe.morphNormals!==et||Fe.morphColors!==_t||Fe.toneMapping!==Ht||Fe.morphTargetsCount!==Mt)&&(ct=!0):(ct=!0,Fe.__version=H.version);let Hn=Fe.currentProgram;ct===!0&&(Hn=xo(H,U,F));let Er=!1,Gn=!1,wa=!1;const Ot=Hn.getUniforms(),ii=Fe.uniforms;if(Me.useProgram(Hn.program)&&(Er=!0,Gn=!0,wa=!0),H.id!==M&&(M=H.id,Gn=!0),Er||_!==y){Me.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ot.setValue(I,"projectionMatrix",y.projectionMatrix),Ot.setValue(I,"viewMatrix",y.matrixWorldInverse);const In=Ot.map.cameraPosition;In!==void 0&&In.setValue(I,xe.setFromMatrixPosition(y.matrixWorld)),ke.logarithmicDepthBuffer&&Ot.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ot.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),_!==y&&(_=y,Gn=!0,wa=!0)}if(F.isSkinnedMesh){Ot.setOptional(I,F,"bindMatrix"),Ot.setOptional(I,F,"bindMatrixInverse");const wn=F.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Ot.setValue(I,"boneTexture",wn.boneTexture,je))}F.isBatchedMesh&&(Ot.setOptional(I,F,"batchingTexture"),Ot.setValue(I,"batchingTexture",F._matricesTexture,je),Ot.setOptional(I,F,"batchingIdTexture"),Ot.setValue(I,"batchingIdTexture",F._indirectTexture,je),Ot.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Ot.setValue(I,"batchingColorTexture",F._colorsTexture,je));const si=z.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&ne.update(F,z,Hn),(Gn||Fe.receiveShadow!==F.receiveShadow)&&(Fe.receiveShadow=F.receiveShadow,Ot.setValue(I,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ii.envMap.value=pe,ii.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(ii.envMapIntensity.value=U.environmentIntensity),Gn&&(Ot.setValue(I,"toneMappingExposure",E.toneMappingExposure),Fe.needsLights&&zv(ii,wa),ee&&H.fog===!0&&Z.refreshFogUniforms(ii,ee),Z.refreshMaterialUniforms(ii,H,G,K,p.state.transmissionRenderTarget[y.id]),ec.upload(I,Hd(Fe),ii,je)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ec.upload(I,Hd(Fe),ii,je),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ot.setValue(I,"center",F.center),Ot.setValue(I,"modelViewMatrix",F.modelViewMatrix),Ot.setValue(I,"normalMatrix",F.normalMatrix),Ot.setValue(I,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const wn=H.uniformsGroups;for(let In=0,il=wn.length;In<il;In++){const Os=wn[In];Ye.update(Os,Hn),Ye.bind(Os,Hn)}}return Hn}function zv(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Hv(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,U,z){const H=Se.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Se.get(y.texture).__webglTexture=U,Se.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const z=Se.get(y);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Gv=I.createFramebuffer();this.setRenderTarget=function(y,U=0,z=0){R=y,T=U,C=z;let H=!0,F=null,ee=!1,he=!1;if(y){const pe=Se.get(y);if(pe.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(pe.__webglFramebuffer===void 0)je.setupRenderTarget(y);else if(pe.__hasExternalTextures)je.rebindTextures(y,Se.get(y.texture).__webglTexture,Se.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Be=y.depthTexture;if(pe.__boundDepthTexture!==Be){if(Be!==null&&Se.has(Be)&&(y.width!==Be.image.width||y.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(y)}}const Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(he=!0);const ze=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ze[U])?F=ze[U][z]:F=ze[U],ee=!0):y.samples>0&&je.useMultisampledRTT(y)===!1?F=Se.get(y).__webglMultisampledFramebuffer:Array.isArray(ze)?F=ze[z]:F=ze,D.copy(y.viewport),B.copy(y.scissor),k=y.scissorTest}else D.copy(Ie).multiplyScalar(G).floor(),B.copy(Je).multiplyScalar(G).floor(),k=St;if(z!==0&&(F=Gv),Me.bindFramebuffer(I.FRAMEBUFFER,F)&&H&&Me.drawBuffers(y,F),Me.viewport(D),Me.scissor(B),Me.setScissorTest(k),ee){const pe=Se.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,z)}else if(he){const pe=U;for(let Oe=0;Oe<y.textures.length;Oe++){const ze=Se.get(y.textures[Oe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,z,pe)}}else if(y!==null&&z!==0){const pe=Se.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pe.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(y,U,z,H,F,ee,he,Ae=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){Me.bindFramebuffer(I.FRAMEBUFFER,pe);try{const Oe=y.textures[Ae],ze=Oe.format,Be=Oe.type;if(!ke.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-H&&z>=0&&z<=y.height-F&&(y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae),I.readPixels(U,z,H,F,Te.convert(ze),Te.convert(Be),ee))}finally{const Oe=R!==null?Se.get(R).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(y,U,z,H,F,ee,he,Ae=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe)if(U>=0&&U<=y.width-H&&z>=0&&z<=y.height-F){Me.bindFramebuffer(I.FRAMEBUFFER,pe);const Oe=y.textures[Ae],ze=Oe.format,Be=Oe.type;if(!ke.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,et),I.bufferData(I.PIXEL_PACK_BUFFER,ee.byteLength,I.STREAM_READ),y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae),I.readPixels(U,z,H,F,Te.convert(ze),Te.convert(Be),0);const _t=R!==null?Se.get(R).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,_t);const Ht=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await j1(I,Ht,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ee),I.deleteBuffer(et),I.deleteSync(Ht),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,z=0){const H=Math.pow(2,-z),F=Math.floor(y.image.width*H),ee=Math.floor(y.image.height*H),he=U!==null?U.x:0,Ae=U!==null?U.y:0;je.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,he,Ae,F,ee),Me.unbindTexture()};const Vv=I.createFramebuffer(),Wv=I.createFramebuffer();this.copyTextureToTexture=function(y,U,z=null,H=null,F=0,ee=null){ee===null&&(F!==0?(ja("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=F,F=0):ee=0);let he,Ae,pe,Oe,ze,Be,et,_t,Ht;const bt=y.isCompressedTexture?y.mipmaps[ee]:y.image;if(z!==null)he=z.max.x-z.min.x,Ae=z.max.y-z.min.y,pe=z.isBox3?z.max.z-z.min.z:1,Oe=z.min.x,ze=z.min.y,Be=z.isBox3?z.min.z:0;else{const si=Math.pow(2,-F);he=Math.floor(bt.width*si),Ae=Math.floor(bt.height*si),y.isDataArrayTexture?pe=bt.depth:y.isData3DTexture?pe=Math.floor(bt.depth*si):pe=1,Oe=0,ze=0,Be=0}H!==null?(et=H.x,_t=H.y,Ht=H.z):(et=0,_t=0,Ht=0);const Mt=Te.convert(U.format),Fe=Te.convert(U.type);let Ft;U.isData3DTexture?(je.setTexture3D(U,0),Ft=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(je.setTexture2DArray(U,0),Ft=I.TEXTURE_2D_ARRAY):(je.setTexture2D(U,0),Ft=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const ct=I.getParameter(I.UNPACK_ROW_LENGTH),Hn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Er=I.getParameter(I.UNPACK_SKIP_PIXELS),Gn=I.getParameter(I.UNPACK_SKIP_ROWS),wa=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,bt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Oe),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Be);const Ot=y.isDataArrayTexture||y.isData3DTexture,ii=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const si=Se.get(y),wn=Se.get(U),In=Se.get(si.__renderTarget),il=Se.get(wn.__renderTarget);Me.bindFramebuffer(I.READ_FRAMEBUFFER,In.__webglFramebuffer),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,il.__webglFramebuffer);for(let Os=0;Os<pe;Os++)Ot&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(y).__webglTexture,F,Be+Os),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(U).__webglTexture,ee,Ht+Os)),I.blitFramebuffer(Oe,ze,he,Ae,et,_t,he,Ae,I.DEPTH_BUFFER_BIT,I.NEAREST);Me.bindFramebuffer(I.READ_FRAMEBUFFER,null),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||Se.has(y)){const si=Se.get(y),wn=Se.get(U);Me.bindFramebuffer(I.READ_FRAMEBUFFER,Vv),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,Wv);for(let In=0;In<pe;In++)Ot?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,si.__webglTexture,F,Be+In):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,si.__webglTexture,F),ii?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wn.__webglTexture,ee,Ht+In):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wn.__webglTexture,ee),F!==0?I.blitFramebuffer(Oe,ze,he,Ae,et,_t,he,Ae,I.COLOR_BUFFER_BIT,I.NEAREST):ii?I.copyTexSubImage3D(Ft,ee,et,_t,Ht+In,Oe,ze,he,Ae):I.copyTexSubImage2D(Ft,ee,et,_t,Oe,ze,he,Ae);Me.bindFramebuffer(I.READ_FRAMEBUFFER,null),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ii?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(Ft,ee,et,_t,Ht,he,Ae,pe,Mt,Fe,bt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Ft,ee,et,_t,Ht,he,Ae,pe,Mt,bt.data):I.texSubImage3D(Ft,ee,et,_t,Ht,he,Ae,pe,Mt,Fe,bt):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ee,et,_t,he,Ae,Mt,Fe,bt.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ee,et,_t,bt.width,bt.height,Mt,bt.data):I.texSubImage2D(I.TEXTURE_2D,ee,et,_t,he,Ae,Mt,Fe,bt);I.pixelStorei(I.UNPACK_ROW_LENGTH,ct),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Hn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Er),I.pixelStorei(I.UNPACK_SKIP_ROWS,Gn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wa),ee===0&&U.generateMipmaps&&I.generateMipmap(Ft),Me.unbindTexture()},this.initRenderTarget=function(y){Se.get(y).__webglFramebuffer===void 0&&je.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?je.setTextureCube(y,0):y.isData3DTexture?je.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?je.setTexture2DArray(y,0):je.setTexture2D(y,0),Me.unbindTexture()},this.resetState=function(){T=0,C=0,R=null,Me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=ut._getUnpackColorSpace()}}function fi(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Vo(t,e,n){let i=t*374761393+e*668265263+n*144665|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function qf(t){return t*t*(3-2*t)}function h0(t,e,n=0){const i=Math.floor(t),s=Math.floor(e),r=qf(t-i),a=qf(e-s),o=Vo(i,s,n),c=Vo(i+1,s,n),l=Vo(i,s+1,n),h=Vo(i+1,s+1,n);return o+(c-o)*r+(l-o)*a+(o-c-l+h)*r*a}function Ii(t,e,n=4,i=0){let s=0,r=.5,a=t,o=e;for(let c=0;c<n;c++)s+=r*h0(a,o,i+c*101),a*=2.03,o*=2.03,r*=.5;return s}const Rn=600,Qf=512;new P(-60,.2,90);new P(60,.2,90);const AM=[[-60,90,-20,90],[-20,90,-20,35],[-20,35,-12,35],[-12,35,-12,10],[-12,10,-12,-25],[-12,-25,0,-25],[60,90,20,90],[20,90,20,35],[20,35,12,35],[12,35,12,10],[12,10,12,-25],[12,-25,0,-25],[0,-25,0,-85],[0,-85,10,-130],[10,-130,-6,-175],[-6,-175,0,-220]],yn={x:0,z:-220},Nr=Rn/2;function _M(t,e){const n=Nu(t,e);let i=8*(Ii(t*.007+12,e*.007+44,4,11)-.5)*2;i+=3.5*(Ii(t*.02,e*.02,3,23)-.5)*2;const s=Math.hypot(t,e-25);if(s<50){const l=1-s/50;i+=8.5*l*l*(3-2*l)}const r=Math.hypot(t,e+60);if(r<60){const l=1-r/60;i+=6.5*l*l*(3-2*l)}const a=Gr(2,5.5,n);let o=Math.max(0,i)*a;const c=Math.sqrt(t*t+e*e);if(c>215){const l=Math.min(1,(c-215)/80);o+=24*l*l*(3-2*l)}return o}function Nu(t,e){let n=1/0;for(const[s,r,a,o]of AM){const c=a-s,l=o-r,h=c*c+l*l;let u=h>0?((t-s)*c+(e-r)*l)/h:0;u=Math.max(0,Math.min(1,u));const d=s+c*u,f=r+l*u,g=t-d,v=e-f,m=g*g+v*v;m<n&&(n=m)}return Math.hypot(t-0,e- -220)<6?0:Math.sqrt(n)}class EM{constructor(){N(this,"heights");N(this,"mask");N(this,"texture");const e=Qf;this.heights=new Float32Array(e*e),this.mask=new Float32Array(e*e);const n=Rn/(e-1);for(let r=0;r<e;r++){const a=-Nr+r*n;for(let o=0;o<e;o++){const c=-Nr+o*n;this.heights[r*e+o]=_M(c,a)}}for(let r=0;r<e;r++){const a=-Nr+r*n;for(let o=0;o<e;o++){const c=-Nr+o*n,l=r*e+o,h=this.heights[r*e+Math.max(0,o-1)],u=this.heights[r*e+Math.min(e-1,o+1)],d=this.heights[Math.max(0,r-1)*e+o],f=this.heights[Math.min(e-1,r+1)*e+o],g=(u-h)/(2*n),v=(f-d)/(2*n),m=Math.sqrt(g*g+v*v),p=this.heights[l];let x=1-Gr(.56,.88,m);x*=1-.3*Gr(38,70,p);const S=Gr(.64,.85,Ii(c*.045+13,a*.045+71,3,313))*Gr(16,32,p);x*=1-.75*S;const E=Nu(c,a);x*=Gr(1.3,2.2,E),this.mask[l]=x}}const i=new Uint16Array(e*e*4);for(let r=0;r<e*e;r++)i[r*4+0]=Sl.toHalfFloat(this.heights[r]),i[r*4+1]=Sl.toHalfFloat(this.mask[r]),i[r*4+2]=0,i[r*4+3]=Sl.toHalfFloat(1);const s=new yh(i,e,e,li,hr);s.magFilter=Zt,s.minFilter=Zt,s.wrapS=Qn,s.wrapT=Qn,s.needsUpdate=!0,this.texture=s}sampleHeight(e,n){return this.bilinear(this.heights,e,n)}sampleMask(e,n){return this.bilinear(this.mask,e,n)}sampleSlope(e,n){const s=(this.sampleHeight(e+1.2,n)-this.sampleHeight(e-1.2,n))/2.4,r=(this.sampleHeight(e,n+1.2)-this.sampleHeight(e,n-1.2))/(2*1.2);return Math.sqrt(s*s+r*r)}distToPath(e,n){return Nu(e,n)}bilinear(e,n,i){const s=Qf,r=Nt.clamp((n+Nr)/Rn,0,1)*(s-1),a=Nt.clamp((i+Nr)/Rn,0,1)*(s-1),o=Math.min(Math.floor(r),s-2),c=Math.min(Math.floor(a),s-2),l=r-o,h=a-c,u=e[c*s+o],d=e[c*s+o+1],f=e[(c+1)*s+o],g=e[(c+1)*s+o+1];return u+(d-u)*l+(f-u)*h+(u-d-f+g)*l*h}}function Gr(t,e,n){const i=Nt.clamp((n-t)/(e-t),0,1);return i*i*(3-2*i)}function ga(t,e){const n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d");return[n,i]}function io(t,e=!0){const n=new e0(t);return e&&(n.colorSpace=pt),n.anisotropy=4,n.needsUpdate=!0,n}function MM(){const[t,e]=ga(512,512),n=fi(4021),i=512,s=512,r=34;for(let o=0;o<r;o++){const c=i*(.5+(n()-.5)*.55),l=s*(.995-n()*.03),h=(n()-.5)*1.5,u=s*(.55+n()*.42),d=8+n()*10,f=c+h*u*.55,g=l-u,v=c+h*u*.18,m=l-u*.55,p=e.createLinearGradient(c,l,f,g),x=n(),S=`rgb(${28+x*10|0}, ${46+x*10|0}, ${12+x*5|0})`,E=`rgb(${60+x*32|0}, ${96+x*26|0}, ${22+x*10|0})`,w=`rgb(${118+x*62|0}, ${140+x*36|0}, ${44+x*26|0})`;p.addColorStop(0,S),p.addColorStop(.55,E),p.addColorStop(1,w),e.fillStyle=p,e.beginPath(),e.moveTo(c-d/2,l),e.quadraticCurveTo(v-d/2,m,f,g),e.quadraticCurveTo(v+d/2,m,c+d/2,l),e.closePath(),e.fill()}const a=io(t);return a.wrapS=Qn,a.wrapT=Qn,a}function SM(){const[t,e]=ga(512,512),n=fi(7717),i=256,s=256,r=170;for(let o=0;o<r;o++){const c=n()*Math.PI*2,l=Math.pow(n(),.6)*215,h=i+Math.cos(c)*l,u=s+Math.sin(c)*l*.92,d=82+n()*26,f=34+n()*22,g=l/215,v=13+n()*11+g*12;e.fillStyle=`hsla(${d}, ${f}%, ${v}%, ${.85+n()*.15})`,e.save(),e.translate(h,u),e.rotate(n()*Math.PI*2);const m=12+n()*15,p=7+n()*9;e.beginPath(),e.ellipse(0,0,m,p,0,0,Math.PI*2),e.fill(),e.restore()}const a=io(t);return a.wrapS=Qn,a.wrapT=Qn,a}function ku(){const[t,e]=ga(256,512),n=fi(1379);e.fillStyle="#4d4238",e.fillRect(0,0,256,512);for(let s=0;s<320;s++){const r=n()*256,a=n()*512,o=30+n()*140,c=1.5+n()*4.5,l=n(),h=45+l*52,u=38+l*46,d=30+l*38;e.strokeStyle=`rgba(${h|0}, ${u|0}, ${d|0}, ${.35+n()*.45})`,e.lineWidth=c,e.beginPath(),e.moveTo(r,a-o/2),e.bezierCurveTo(r+(n()-.5)*10,a-o/4,r+(n()-.5)*10,a+o/4,r+(n()-.5)*6,a+o/2),e.stroke()}for(let s=0;s<90;s++){const r=n()*256,a=n()*512,o=20+n()*90;e.strokeStyle=`rgba(18, 14, 10, ${.3+n()*.4})`,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(r,a-o/2),e.lineTo(r+(n()-.5)*8,a+o/2),e.stroke()}const i=io(t);return i.wrapS=rr,i.wrapT=rr,i}function yM(){const[e,n]=ga(512,512),i=fi(6067),s=n.createImageData(512,512),r=s.data;for(let o=0;o<512;o++)for(let c=0;c<512;c++){let l=.55*Ii(c*.028,o*.028,4,611)+.3*Ii(c*.09,o*.09,3,733)+.15*Ii(c*.24,o*.24,2,857);const h=i();h<.015?l+=.25:h<.03&&(l-=.25);const u=Math.max(0,Math.min(255,Math.round((.28+l*.62)*255))),d=(o*512+c)*4;r[d]=u,r[d+1]=u,r[d+2]=u,r[d+3]=255}n.putImageData(s,0,0);const a=new e0(e);return a.wrapS=as,a.wrapT=as,a.anisotropy=8,a.needsUpdate=!0,a}function wM(){const[t,e]=ga(256,512),n=fi(66613);e.fillStyle="#000000",e.fillRect(0,0,256,512);for(let r=0;r<7;r++){const a=n()*256;e.strokeStyle=`rgba(180, 30, 15, ${.18+n()*.15})`,e.lineWidth=1+n()*1.5,e.beginPath(),e.moveTo(a,0);let o=a;for(let c=0;c<=512;c+=32)o+=(n()-.5)*26,e.lineTo(o,c);e.stroke()}const i=[36,92,158,220];for(const r of i){let a=14+n()*30;for(;a<492;){const o=n()<.25,c=o?.95:.55+n()*.3;e.strokeStyle=o?`rgba(255, 120, 60, ${c})`:`rgba(235, 55, 25, ${c})`,e.lineWidth=o?2.5:1.8;const l=7+n()*9,h=2+Math.floor(n()*3);e.beginPath();let u=r+(n()-.5)*14,d=a;e.moveTo(u,d);for(let f=0;f<h;f++){const g=Math.floor(n()*4);u+=g===0?l:g===1?-l:(n()-.5)*l,d+=g>=2?l:l*.4,e.lineTo(u,d)}e.stroke(),n()<.3&&(e.fillStyle="rgba(255, 160, 90, 0.9)",e.fillRect(r+(n()-.5)*20,a+l/2,2.5,2.5)),a+=l+10+n()*22}}const s=io(t);return s.wrapS=rr,s.wrapT=rr,s}function TM(){const[t,e]=ga(64,64),n=e.createRadialGradient(32,32,0,32,32,30);return n.addColorStop(0,"rgba(255, 250, 225, 1)"),n.addColorStop(.4,"rgba(255, 248, 215, 0.55)"),n.addColorStop(1,"rgba(255, 245, 200, 0)"),e.fillStyle=n,e.fillRect(0,0,64,64),io(t)}const d0=600,f0=520,Lh=`
#define CS_CLOUD_H ${d0.toFixed(1)}
#define CS_CLOUD_SCALE ${f0.toFixed(1)}

float cshash(vec2 p){ p = fract(p * vec2(123.34, 345.45)); p += dot(p, p + 34.345); return fract(p.x * p.y); }
float csnoise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = cshash(i); float b = cshash(i + vec2(1.0, 0.0));
  float c = cshash(i + vec2(0.0, 1.0)); float d = cshash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float csfbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for (int k = 0; k < 4; k++){ v += a * csnoise(p); p = p * 2.03 + 17.0; a *= 0.5; }
  return v;
}

/** Deriva del viento en unidades del campo (misma dirección que el pasto). */
vec2 csWind(float t){
  return normalize(vec2(0.82, 0.44)) * t * 0.0115;
}

/**
 * Cobertura de nubes en el punto q del plano (coordenadas ya escaladas).
 * "soft" controla la suavidad del borde (0.14 nube nítida, ~0.3 penumbra).
 */
float cloudField(vec2 q, float t, float soft){
  vec2 p = q + csWind(t);
  float mask = csfbm(p * 0.18 + 11.7);
  float maskSm = smoothstep(0.34, 0.66, mask);
  // Evolución: fundido continuo entre dos campos desfasados.
  float ev = smoothstep(0.0, 1.0, abs(fract(t * 0.004) * 2.0 - 1.0));
  float n = mix(csfbm(p), csfbm(p + 61.7), ev);
  float thr = mix(0.72, 0.42, maskSm);
  return smoothstep(thr, thr + soft, n);
}

/** Sombra de nube (0 = despejado, 1 = sombra plena) sobre un punto del mundo. */
float cloudShadowAt(vec2 worldXZ, float worldY, vec3 sunDir, float t){
  vec2 q = (worldXZ + sunDir.xz / max(sunDir.y, 0.2) * (CS_CLOUD_H - worldY)) / CS_CLOUD_SCALE;
  return cloudField(q, t, 0.3);
}
`,Kn={uTime:{value:0},uPlayer:{value:new te(0,0)},uSunDir:{value:new P(.45,.55,.55).normalize()}},jf=384,Kf=5.5;async function bM(){const e=await(await fetch("./models/relief.bin")).arrayBuffer(),n=new DataView(e),i=n.getUint16(0,!0),s=n.getUint16(2,!0),r=new yh(new Uint8Array(e,4,i*s),i,s,Cc,rn);return r.wrapS=as,r.wrapT=as,r.magFilter=Zt,r.minFilter=Zt,r.needsUpdate=!0,r}async function CM(t){const e=new i0,n="./",[i,s,r]=await Promise.all([bM(),e.loadAsync(`${n}textures/rock_albedo.jpg`),e.loadAsync(`${n}textures/rock_normal.jpg`)]);s.colorSpace=pt;for(const h of[s,r])h.wrapS=as,h.wrapT=as,h.anisotropy=8;r.repeat.set(Rn/Kf,Rn/Kf);const a=new pr(Rn,Rn,jf,jf);a.rotateX(-Math.PI/2);const o=a.attributes.position;for(let h=0;h<o.count;h++){const u=o.getX(h),d=o.getZ(h);o.setY(h,t.sampleHeight(u,d))}a.computeVertexNormals();const c=new wt({color:16777215,roughness:.96,metalness:0,normalMap:r});c.onBeforeCompile=h=>{h.uniforms.uField={value:t.texture},h.uniforms.uWorld={value:Rn},h.uniforms.uDetail={value:yM()},h.uniforms.uRockAlbedo={value:s},h.uniforms.uTime=Kn.uTime,h.uniforms.uSunDir=Kn.uSunDir,h.uniforms.uRelief={value:i},h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
        varying vec3 vTWPos;
        varying vec3 vTWNorm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vTWPos = position;
        vTWNorm = normal;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vTWPos;
        varying vec3 vTWNorm;
        uniform sampler2D uField;
        uniform sampler2D uDetail;
        uniform sampler2D uRockAlbedo;
        uniform float uWorld;
        uniform float uTime;
        uniform vec3 uSunDir;
        uniform sampler2D uRelief;
        ${Lh}
        float thash(vec2 p){ p = fract(p * vec2(123.34, 345.45)); p += dot(p, p + 34.345); return fract(p.x * p.y); }
        float tnoise(vec2 p){
          vec2 i = floor(p); vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float a = thash(i); float b = thash(i + vec2(1.0, 0.0));
          float c = thash(i + vec2(0.0, 1.0)); float d = thash(i + vec2(1.0, 1.0));
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }
        float tfbm(vec2 p){
          float v = 0.0; float a = 0.5;
          for (int k = 0; k < 4; k++){ v += a * tnoise(p); p *= 2.03; a *= 0.5; }
          return v;
        }`).replace("#include <map_fragment>",`#include <map_fragment>
        vec2 wxz = vTWPos.xz;
        float n1 = tfbm(wxz * 0.016);
        float n2 = tfbm(wxz * 0.11 + 7.3);
        float n3 = tnoise(wxz * 1.7);

        // Pasto: parches verdes y amarillentos secos.
        vec3 grassA = vec3(0.062, 0.130, 0.020);
        vec3 grassB = vec3(0.225, 0.245, 0.052);
        float dry = clamp(n1 * 2.2 - 0.6 + (n2 - 0.5) * 0.9, 0.0, 1.0);
        vec3 gcol = mix(grassA, grassB, dry);
        gcol *= 0.72 + 0.42 * n3;
        gcol *= 0.9 + 0.2 * tnoise(wxz * 0.6);

        vec4 fld = texture2D(uField, wxz / uWorld + 0.5);
        float gmask = fld.g;
        vec3 nrm = normalize(vTWNorm);
        float slope = 1.0 - nrm.y;

        // El pasto del cerro se seca y amarillea ligeramente con la altura.
        gcol = mix(gcol, gcol * vec3(1.3, 1.05, 0.5), smoothstep(20.0, 55.0, vTWPos.y) * 0.35);

        // Suelo desnudo: material rocoso fotogramétrico (Rockwall), con
        // albedo, normal map y relieve horneado compartiendo las MISMAS UVs
        // para que color y relieve correspondan.
        vec3 stone = texture2D(uRockAlbedo, vNormalMapUv).rgb;
        float flatW = smoothstep(0.62, 0.25, slope);
        // Transición firme pasto->tierra con suelo orgánico realista
        float gDirtW = smoothstep(0.18, 0.65, 1.0 - gmask);
        float gBumpMask = clamp(gDirtW * flatW * 1.5, 0.08, 1.0);
        // Relieve horneado (Rockwall.obj): hondonadas más oscuras.
        float gRelief = texture2D(uRelief, vNormalMapUv).r;
        vec3 bare = stone * (0.7 + 0.5 * n2);
        bare *= 0.72 + 0.46 * gRelief;
        // Tono cálido y natural de tierra/suelo con guijarros
        vec3 soilTint = vec3(0.52, 0.38, 0.25);
        bare = mix(bare, bare * soilTint * 2.0, 0.5);
        bare *= mix(vec3(0.85, 0.76, 0.64), vec3(1.12, 1.04, 0.88), smoothstep(14.0, 36.0, vTWPos.y));
        vec3 col = mix(gcol, bare, gDirtW * flatW);

        // Roca gris sólo en cortes casi verticales (cárcavas y taludes).
        vec3 rock = vec3(0.168, 0.161, 0.152) * (0.7 + 0.55 * tfbm(wxz * 0.05 + vTWPos.y * 0.09));
        float rockW = smoothstep(0.62, 0.86, slope + (n2 - 0.5) * 0.08);
        col = mix(col, rock, rockW);

        col *= 0.9 + 0.2 * tnoise(wxz * 0.43);

        // Grano de detalle en dos escalas (fino ~2 m y macro ~17 m).
        float det1 = texture2D(uDetail, wxz * 0.48).r;
        float det2 = texture2D(uDetail, wxz * 0.058 + 0.37).r;
        col *= 0.70 + 0.55 * det1;
        col *= 0.80 + 0.36 * det2;

        // Oclusión falsa: el suelo bajo el pasto denso queda en penumbra.
        col *= 1.0 - gmask * 0.28;

        // Sombras de las nubes deslizándose sobre el mundo.
        col *= 1.0 - cloudShadowAt(vTWPos.xz, vTWPos.y, uSunDir, uTime) * 0.42;

        diffuseColor.rgb = col;`).replace("#include <normal_fragment_maps>",`#ifdef USE_NORMALMAP
        // Normal map fotogramétrico sólo donde hay tierra desnuda: la
        // intensidad se enmascara para que el pasto conserve su normal.
        mat3 gTbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
        vec3 gMapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
        gMapN.xy *= normalScale * gBumpMask;
        normal = normalize( gTbn * gMapN );
        #endif`)};const l=new Le(a,c);return l.receiveShadow=!0,l.castShadow=!1,l}class Ic extends Le{constructor(){const e=Ic.SkyShader,n=new $t({name:e.name,uniforms:Km.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Kt,depthWrite:!1});super(new nn(1,1,1),n),this.isSky=!0}}Ic.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class RM{constructor(e,n,i){N(this,"sunDir");N(this,"sun");N(this,"shadowExtent",95);N(this,"clouds");const s=Nt.degToRad(34),r=Nt.degToRad(38);this.sunDir=new P().setFromSphericalCoords(1,Math.PI/2-s,r),Kn.uSunDir.value.copy(this.sunDir);const a=new Ic;a.scale.setScalar(45e3);const o=a.material.uniforms;o.turbidity.value=2.6,o.rayleigh.value=1.3,o.mieCoefficient.value=.0035,o.mieDirectionalG.value=.8,o.sunPosition.value.copy(this.sunDir);const c=new Fu(e),l=new uc;l.add(a);const h=c.fromScene(l);n.environment=h.texture,n.environmentIntensity=.45,c.dispose(),n.add(a),n.fog=new Sh(13032946,.0012),this.createClouds(n);const u=new L2(16773594,3.6);u.castShadow=!0,u.shadow.mapSize.set(i,i);const d=this.shadowExtent;u.shadow.camera.left=-d,u.shadow.camera.right=d,u.shadow.camera.top=d,u.shadow.camera.bottom=-d,u.shadow.camera.near=1,u.shadow.camera.far=450,u.shadow.camera.updateProjectionMatrix(),u.shadow.bias=-25e-5,u.shadow.normalBias=.15,n.add(u),n.add(u.target),this.sun=u}createClouds(e){const n=new Js(1750,48,20,0,Math.PI*2,0,Math.PI*.56),i=new $t({transparent:!0,depthWrite:!1,side:Kt,uniforms:{uTime:Kn.uTime,uSunDir:Kn.uSunDir},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform float uTime;
        uniform vec3 uSunDir;
        varying vec3 vDir;

        ${Lh}

        void main() {
          vec3 dir = normalize(vDir);
          float hor = smoothstep(0.03, 0.18, dir.y);
          if (hor <= 0.002) discard;

          // Intersección de la vista con el plano de nubes: el campo queda
          // anclado al MUNDO (hay paralaje al caminar y las sombras que
          // proyecta sobre el suelo corresponden a lo que se ve arriba).
          float tPlane = (${d0.toFixed(1)} - cameraPosition.y) / max(dir.y, 0.035);
          vec2 q = (cameraPosition.xz + dir.xz * tPlane) / ${f0.toFixed(1)};

          float alpha = cloudField(q, uTime, 0.14);
          // Erosión fina en los bordes para que no queden "de algodón".
          alpha *= 0.8 + 0.35 * csnoise((q + csWind(uTime)) * 3.3 + 5.0);
          if (alpha <= 0.004) discard;

          // Bases sombreadas: densidad muestreada desplazada hacia el sol.
          vec2 sunOffs = normalize(uSunDir.xz + vec2(1e-4)) * 0.14;
          float dens = cloudField(q, uTime, 0.35);
          float densSun = cloudField(q + sunOffs, uTime, 0.35);
          float lit = clamp(0.95 + (dens - densSun) * 1.5, 0.7, 1.3);
          vec3 col = mix(vec3(0.62, 0.66, 0.74), vec3(1.12, 1.1, 1.05), clamp(lit, 0.0, 1.0));
          col += vec3(1.0, 0.95, 0.85) * max(lit - 1.0, 0.0);

          // Borde plateado alrededor del sol.
          col += vec3(0.35, 0.3, 0.22) * pow(max(dot(dir, uSunDir), 0.0), 12.0) * alpha;

          // Hacia el horizonte se funden con la bruma.
          col = mix(vec3(0.85, 0.9, 0.97), col, hor);

          gl_FragColor = vec4(col, alpha * hor * 0.94);
        }`});i.fog=!1,this.clouds=new Le(n,i),this.clouds.frustumCulled=!1,this.clouds.renderOrder=1,e.add(this.clouds)}followPlayer(e){this.clouds.position.set(e.x,0,e.z);const n=this.shadowExtent*2/this.sun.shadow.mapSize.x,i=this.sunDir,s=Math.abs(i.y)>.95?new P(1,0,0):new P(0,1,0),r=new P().crossVectors(i,s).normalize(),a=new P().crossVectors(r,i).normalize(),o=Math.round(e.dot(r)/n)*n,c=Math.round(e.dot(a)/n)*n,l=e.dot(i),h=new P().addScaledVector(r,o).addScaledVector(a,c).addScaledVector(i,l);this.sun.target.position.copy(h),this.sun.position.copy(h).addScaledVector(i,220)}}function DM(t,e){const r=[];for(let g=0;g<3;g++){const v=new pr(1.15,1.3,1,2);v.translate(0,.65,0),v.rotateY(g*Math.PI/3),r.push(v)}const a=PM(r),o=new wt({map:MM(),alphaTest:.32,side:mn,roughness:.95,metalness:0});o.onBeforeCompile=g=>{g.uniforms.uTime=Kn.uTime,g.uniforms.uPlayer=Kn.uPlayer,g.uniforms.uSunDir=Kn.uSunDir,g.uniforms.uField={value:t.texture},g.uniforms.uWorld={value:Rn},g.uniforms.uHalf={value:110},g.uniforms.uFadeStart={value:76},g.uniforms.uFadeEnd={value:104},g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
        uniform float uTime;
        uniform vec2 uPlayer;
        uniform sampler2D uField;
        uniform float uWorld;
        uniform float uHalf;
        uniform float uFadeStart;
        uniform float uFadeEnd;
        varying vec3 vGWPos;
        float ghash(vec2 p){ p = fract(p * vec2(123.34, 345.45)); p += dot(p, p + 34.345); return fract(p.x * p.y); }`).replace("#include <project_vertex>",`
        mat3 gRS = mat3(instanceMatrix);
        vec2 gCell = instanceMatrix[3].xz;

        // Wrap toroidal alrededor del jugador.
        vec2 gRel = mod(gCell - uPlayer + uHalf, 2.0 * uHalf) - uHalf;
        vec2 gXZ = uPlayer + gRel;

        vec4 gFld = texture2D(uField, gXZ / uWorld + 0.5);
        float gH = gFld.r;
        float gMask = gFld.g;
        float gRnd = ghash(gCell);

        // Sin pasto en sendero/roca; transición suave con umbral aleatorio.
        float gScale = smoothstep(0.2, 0.7, gMask + (gRnd - 0.5) * 0.25);

        // Lejos de la cámara la mata se encoge hasta hundirse en el suelo:
        // el pasto aparece "creciendo" en vez de hacer pop.
        float gDistCam = distance(cameraPosition.xz, gXZ);
        gScale *= 1.0 - smoothstep(uFadeStart, uFadeEnd, gDistCam + (gRnd - 0.5) * 12.0);

        vec3 gP = gRS * (transformed * gScale);

        // Viento: brisa amplia + agitación fina, curvado desde la base.
        float hf = clamp(position.y / 1.2, 0.0, 1.0);
        hf *= hf;
        float t = uTime;
        float w1 = sin(t * 1.35 + gXZ.x * 0.13 + gXZ.y * 0.09);
        float w2 = sin(t * 2.8 + gXZ.x * 0.8 + gXZ.y * 0.6 + gRnd * 6.283) * 0.5;
        float gust = 0.6 + 0.4 * sin(t * 0.37 + gXZ.x * 0.021 + gXZ.y * 0.017);
        vec2 sway = normalize(vec2(0.82, 0.44)) * (w1 + w2) * 0.22 * gust * hf * (0.6 + 0.75 * gRnd);

        vec3 gWP = vec3(gXZ.x + gP.x + sway.x, gH + gP.y - 0.05, gXZ.y + gP.z + sway.y);
        vGWPos = gWP;

        vec4 mvPosition = viewMatrix * vec4(gWP, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        `).replace("#include <worldpos_vertex>","vec4 worldPosition = vec4( vGWPos, 1.0 );"),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vGWPos;
        uniform vec3 uSunDir;
        uniform float uFadeStart;
        uniform float uFadeEnd;
        uniform float uTime;
        ${Lh}`).replace("#include <map_fragment>",`#include <map_fragment>
        float gDist = distance(cameraPosition, vGWPos);
        diffuseColor.a *= 1.0 - smoothstep(uFadeStart, uFadeEnd * 1.04, gDist);
        // Sombras de las nubes (mismo campo que el domo del cielo).
        diffuseColor.rgb *= 1.0 - cloudShadowAt(vGWPos.xz, vGWPos.y, uSunDir, uTime) * 0.42;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        // Translucidez falsa: el pasto brilla a contraluz del sol.
        vec3 gToFrag = normalize(vGWPos - cameraPosition);
        float gBack = pow(clamp(dot(gToFrag, uSunDir), 0.0, 1.0), 3.0);
        totalEmissiveRadiance += diffuseColor.rgb * gBack * 0.7;`)};const c=new Za(a,o,e);c.frustumCulled=!1,c.castShadow=!1,c.receiveShadow=!0;const l=fi(90210),h=new xt,u=new Jt,d=new P(0,1,0),f=new He;for(let g=0;g<e;g++){const v=(l()*2-1)*110,m=(l()*2-1)*110,p=.85+l()*.8;u.setFromAxisAngle(d,l()*Math.PI*2),h.compose(new P(v,0,m),u,new P(p,p*(.85+l()*.4),p)),c.setMatrixAt(g,h);const x=Nt.clamp(Ii(v*.03+3.7,m*.03+9.1,3,77)*1.8-.4,0,1);f.setRGB((.8+.3*x)*(.9+l()*.16),(.92+.1*x)*(.9+l()*.16),(.82-.3*x)*(.88+l()*.2)),c.setColorAt(g,f)}return c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),c}function PM(t){const e=[],n=[],i=[],s=[];let r=0;for(const o of t){const c=o.attributes.position,l=o.attributes.normal,h=o.attributes.uv;for(let d=0;d<c.count;d++)e.push(c.getX(d),c.getY(d),c.getZ(d)),n.push(l.getX(d),l.getY(d),l.getZ(d)),i.push(h.getX(d),h.getY(d));const u=o.index;for(let d=0;d<u.count;d++)s.push(u.getX(d)+r);r+=c.count,o.dispose()}const a=new _n;return a.setAttribute("position",new Dt(e,3)),a.setAttribute("normal",new Dt(n,3)),a.setAttribute("uv",new Dt(i,2)),a.setIndex(s),a}const qr=new P(0,1,0);function Zf(t){const e=fi(t.seed),n=[],i=[],s=[{origin:new P,quat:new Jt,length:t.length[0],radius:t.trunkRadius,level:0}];for(;s.length>0;)IM(s.shift(),t,e,s,n,i);return{branches:n,leaves:i,hasLeaves:t.leaves!==null}}function Jf(t,e={}){const n=UM(t.branches,Math.max(1,Math.floor(e.sectionStride??1)),e.segmentFactor??1),i=t.hasLeaves?FM(t.leaves,Math.max(1,Math.floor(e.leafStride??1)),e.leafScale??1,e.singleBillboard??!1):null;return{trunk:n,leaves:i}}function IM(t,e,n,i,s,r){const a=e.sections[t.level],o=t.length/a,c=e.taper[t.level],l=t.quat.clone(),h=t.origin.clone(),u=[];for(let f=0;f<=a;f++){let g=t.radius;f===a&&t.level===e.levels?g=.02:g*=1-c*(f/a),u.push({origin:h.clone(),quat:l.clone(),radius:g}),h.add(new P(0,o,0).applyQuaternion(l));const v=Math.max(1,1/Math.sqrt(Math.max(g,.01)))*e.gnarliness[t.level];l.multiply(new Jt().setFromEuler(new di((n()*2-1)*v,0,(n()*2-1)*v)));const m=qr.clone().applyQuaternion(l),p=new P().crossVectors(m,qr),x=p.length();if(x>1e-6){p.divideScalar(x);const S=Math.atan2(x,m.dot(qr)),E=e.forceUp/Math.max(g,.02),w=Math.max(-S,Math.min(S,E));l.premultiply(new Jt().setFromAxisAngle(p,w))}}s.push({sections:u,segments:e.segments[t.level]});const d=u[u.length-1];t.level<e.levels?(i.push({origin:d.origin.clone(),quat:d.quat.clone(),length:e.length[t.level+1],radius:d.radius,level:t.level+1}),LM(t.level+1,u,e,n,i)):e.leaves&&(g0(d.origin,d.quat,e,n,r),BM(u,e,n,r))}function p0(t,e){const n=Math.min(Math.floor(e*(t.length-1)),t.length-2),i=e*(t.length-1)-n,s=t[n],r=t[n+1];return{origin:new P().lerpVectors(s.origin,r.origin,i),quat:s.quat.clone().slerp(r.quat,i),radius:s.radius*(1-i)+r.radius*i}}function m0(t,e){const n=Array.from({length:t},(i,s)=>s);for(let i=t-1;i>0;i--){const s=Math.floor(e()*(i+1));[n[i],n[s]]=[n[s],n[i]]}return n}function LM(t,e,n,i,s){const r=n.children[t-1],a=n.start[t],o=(1-a)/r,c=i(),l=m0(r,i),h=Nt.degToRad(n.angle[t]);for(let u=0;u<r;u++){const d=a+(u+i())*o,f=p0(e,Math.min(d,1)),g=2*Math.PI*(c+(l[u]+i()-.5)/r),v=f.quat.clone().multiply(new Jt().setFromAxisAngle(qr,g)).multiply(new Jt().setFromAxisAngle(new P(1,0,0),h));s.push({origin:f.origin,quat:v,length:n.length[t]*(.7+i()*.6),radius:f.radius*n.radiusFactor[t],level:t})}}function BM(t,e,n,i){const s=e.leaves.countPerTip,r=1/s,a=n(),o=m0(s,n),c=Nt.degToRad(e.leaves.angleDeg);for(let l=0;l<s;l++){const h=Math.min((l+n())*r,1),u=p0(t,h),d=2*Math.PI*(a+(o[l]+n()-.5)/s),f=u.quat.clone().multiply(new Jt().setFromAxisAngle(qr,d)).multiply(new Jt().setFromAxisAngle(new P(1,0,0),c));g0(u.origin,f,e,n,i)}}function g0(t,e,n,i,s){const r=n.leaves.sizeVariance;s.push({origin:t.clone(),quat:e.clone(),size:n.leaves.size*(1+(i()*2-1)*r)})}function UM(t,e,n){const i=[],s=[],r=[],a=[];for(const o of t){const c=[];for(let d=0;d<o.sections.length;d+=e)c.push(o.sections[d]);(o.sections.length-1)%e!==0&&c.push(o.sections[o.sections.length-1]);const l=Math.max(3,Math.round(o.segments*n)),h=i.length/3,u=l+1;for(let d=0;d<c.length;d++){const f=c[d];for(let g=0;g<=l;g++){const v=2*Math.PI*(g%l)/l,m=new P(Math.cos(v),0,Math.sin(v)).applyQuaternion(f.quat);i.push(f.origin.x+m.x*f.radius,f.origin.y+m.y*f.radius,f.origin.z+m.z*f.radius),s.push(m.x,m.y,m.z),r.push(g/l,d%2)}}for(let d=0;d<c.length-1;d++)for(let f=0;f<l;f++){const g=h+d*u+f,v=h+d*u+f+1,m=g+u,p=v+u;a.push(g,m,v,v,m,p)}}return v0(i,s,r,a)}function FM(t,e,n,i){const s=[],r=[],a=[],o=[],c=i?[0]:[0,Math.PI/2],l=new P;for(let h=0;h<t.length;h+=e){const u=t[h],d=u.size*n,f=u.size*n;for(const g of c){const v=s.length/3,m=new Jt().copy(u.quat).multiply(new Jt().setFromAxisAngle(qr,g)),p=new P(0,0,1).applyQuaternion(m),x=[[-d/2,f],[-d/2,0],[d/2,0],[d/2,f]];for(const[S,E]of x){l.set(S,E,0).applyQuaternion(m).add(u.origin),s.push(l.x,l.y,l.z);const w=new P().copy(p).add(l.clone().sub(u.origin).normalize()).normalize();r.push(w.x,w.y,w.z)}a.push(0,1,0,0,1,0,1,1),o.push(v,v+1,v+2,v,v+2,v+3)}}return v0(s,r,a,o)}function v0(t,e,n,i){const s=new _n;return s.setAttribute("position",new Dt(t,3)),s.setAttribute("normal",new Dt(e,3)),s.setAttribute("uv",new Dt(n,2)),s.setIndex(i),s.computeBoundingSphere(),s}const As=[{dist:70,detail:{},castShadow:!0},{dist:160,detail:{sectionStride:2,segmentFactor:.65,leafStride:2,leafScale:1.25},castShadow:!0},{dist:1/0,detail:{sectionStride:3,segmentFactor:.4,leafStride:3,leafScale:1.4,singleBillboard:!0},castShadow:!1}];function OM(t,e){return{seed:t,levels:3,length:[8.5+e()*3,3.2+e()*1.2,2.6+e()*.8,1.6+e()*.5],trunkRadius:.3+e()*.12,radiusFactor:[1,.8,.68,.6],angle:[0,48+e()*14,54+e()*12,32+e()*10],children:[4,3,3],start:[0,.38+e()*.12,.08,.12],taper:[.7,.52,.62,.72],gnarliness:[.045,.11,.18,.11],sections:[7,5,3,2],segments:[6,5,4,3],forceUp:.011+e()*.005,leaves:{countPerTip:6,size:1.15+e()*.35,sizeVariance:.45,angleDeg:38+e()*10}}}function NM(t){return{seed:t,levels:3,length:[8.5,2.6,1.9,1.2],trunkRadius:.23,radiusFactor:[1,.7,.62,.55],angle:[0,52,56,46],children:[3,3,2],start:[0,.45,.18,.2],taper:[.78,.68,.7,.8],gnarliness:[.11,.28,.34,.3],sections:[6,4,3,2],segments:[6,4,3,3],forceUp:.005,leaves:null}}function kM(t,e){const n=new qn,i=[],s=fi(5150),r=new wt({map:ku(),roughness:.92,metalness:0}),a=new wt({map:ku(),color:10129798,roughness:.95,metalness:0}),o=new wt({map:SM(),alphaTest:.4,side:mn,roughness:.85,metalness:0});o.onBeforeCompile=w=>{w.uniforms.uTime=Kn.uTime,w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
        uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        {
          #ifdef USE_INSTANCING
            vec3 fIp = instanceMatrix[3].xyz;
          #else
            vec3 fIp = vec3(0.0);
          #endif
          float fPh = fIp.x * 0.31 + fIp.z * 0.27;
          float fSw = sin(uTime * 1.05 + fPh) + 0.5 * sin(uTime * 2.3 + fPh * 1.7);
          float fAmp = 0.06 * smoothstep(1.5, 7.0, transformed.y);
          transformed.x += fSw * fAmp * 0.9;
          transformed.z += fSw * fAmp * 0.45;
          transformed.x += sin(uTime * 3.1 + fPh + position.y * 2.1) * 0.02 * (0.4 + 0.6 * uv.y);
        }`),w.fragmentShader=w.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      totalEmissiveRadiance += diffuseColor.rgb * 0.12;`)};const c=[];for(let w=0;w<3;w++){const T=fi(2e3+w*517),C=OM(3e3+w*131,T),R=Zf(C);c.push({trunkRadius:C.trunkRadius,lods:As.map(M=>Jf(R,M.detail))})}{const w=NM(4242),T=Zf(w);c.push({trunkRadius:w.trunkRadius,lods:As.map(C=>Jf(T,C.detail))})}const l=[],h=[[],[],[],[]],u=new Jt,d=new P(0,1,0),f=(w,T,C)=>{const R=Rn/2-15;if(Math.abs(w)>R||Math.abs(T)>R||t.sampleHeight(w,T)>72||t.sampleSlope(w,T)>.5||t.distToPath(w,T)<5||t.sampleMask(w,T)<.2)return!1;const _=w-0,D=T-140;if(_*_+D*D<225)return!1;for(const[B,k,V]of l){const X=w-B,Y=T-k,K=Math.max(C,V);if(X*X+Y*Y<K*K)return!1}return!0},g=(w,T,C,R,M)=>{const _=t.sampleHeight(T,C)-.15;u.setFromAxisAngle(d,s()*Math.PI*2);const D=new xt().compose(new P(T,_,C),u,new P(R,R,R)),B=s(),k=new He(.85+B*.3,.9+s()*.18,.8+s()*.25);h[w].push({matrix:D,color:k,x:T,z:C,lodBias:(s()-.5)*14}),l.push([T,C,M]);const V=c[w].trunkRadius;i.push({x:T,z:C,r:Math.max(.4,V*R*1.4)})};g(0,-22,102,1.65,6),g(1,26,52,1.45,6),g(3,-4,62,1.15,6),g(2,17,118,1.35,6);let v=0,m=0;const p=150;for(;m<p&&v<6e3;){v++;const w=(s()*2-1)*(Rn/2-20),T=(s()*2-1)*(Rn/2-20),C=Ii(w*.008+50,T*.008+20,3,91),R=Nt.clamp((170-T)/300,.25,1),M=t.sampleHeight(w,T),_=1-Nt.clamp((M-28)/40,0,1)*.75;if(s()>C*1.4*R*_||!f(w,T,7))continue;const B=s()<.14?3:Math.floor(s()*3);let k=.8+s()*.75;M>35&&(k*=.65),g(B,w,T,k,7),m++}const x=[];for(let w=0;w<4;w++){const T=h[w],C=c[w],R=w<3?r:a,M=[],_=[];for(let D=0;D<As.length;D++){const B=new Za(C.lods[D].trunk,R,T.length);if(B.castShadow=As[D].castShadow,B.receiveShadow=!0,B.frustumCulled=!1,B.count=0,n.add(B),M.push(B),C.lods[D].leaves){const k=new Za(C.lods[D].leaves,o,T.length);k.castShadow=As[D].castShadow,k.receiveShadow=!1,k.frustumCulled=!1;for(let V=0;V<T.length;V++)k.setColorAt(V,T[V].color);k.count=0,n.add(k),_.push(k)}else _.push(null)}x.push({placements:T,trunkLods:M,foliageLods:_})}const S=new P(1/0,0,1/0),E=w=>{if(!(w.distanceToSquared(S)<36)){S.copy(w);for(const T of x){const C=[0,0,0];for(const R of T.placements){const M=Math.hypot(R.x-w.x,R.z-w.z)+R.lodBias,_=M<As[0].dist?0:M<As[1].dist?1:2,D=C[_]++;T.trunkLods[_].setMatrixAt(D,R.matrix);const B=T.foliageLods[_];B&&(B.setMatrixAt(D,R.matrix),B.setColorAt(D,R.color))}for(let R=0;R<As.length;R++){const M=T.trunkLods[R];M.count=C[R],M.instanceMatrix.needsUpdate=!0;const _=T.foliageLods[R];_&&(_.count=C[R],_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0))}}}};return e.add(n),{group:n,colliders:i,update:E}}function zM(t,e,n){const i=fi(31337),s=[];for(let d=0;d<2;d++){const f=new Ch(1,3),g=f.attributes.position,v=400+d*77;for(let x=0;x<g.count;x++){const S=new P(g.getX(x),g.getY(x),g.getZ(x)),E=Ii(S.x*1.4+S.y*.9+v,S.z*1.4-S.y*.7,4,v);S.multiplyScalar(.75+E*.55),S.y*=.72,g.setXYZ(x,S.x,S.y,S.z)}f.computeVertexNormals();const m=f.attributes.normal,p=new Float32Array(g.count*3);for(let x=0;x<g.count;x++){const S=g.getX(x),E=g.getY(x),w=g.getZ(x),T=Ii(S*3.1+v,w*3.1+E*2,3,v+5);let C=.15+T*.13,R=.147+T*.125,M=.14+T*.12;const _=Math.max(0,m.getY(x)),D=Math.pow(_,1.2)*(.45+.55*h0(S*2.2+v,w*2.2,v+9));C=C*(1-D)+.13*D,R=R*(1-D)+.21*D,M=M*(1-D)+.05*D,p[x*3]=C,p[x*3+1]=R,p[x*3+2]=M}f.setAttribute("color",new dn(p,3)),s.push(f)}const r=new wt({vertexColors:!0,roughness:.95,metalness:0}),a=[[],[]];a[0].push({x:-15,z:118,s:1.7,rot:.6}),a[1].push({x:-12.4,z:116.2,s:1,rot:2.4});let o=0,c=0;for(;o<26&&c<900;){c++;const d=(i()*2-1)*(Rn/2-25),f=(i()*2-1)*(Rn/2-25);if(t.sampleHeight(d,f)>60||t.distToPath(d,f)<2.5)continue;const g=t.sampleSlope(d,f)>.3?1.6:.6;i()>.5*g||(a[Math.floor(i()*2)].push({x:d,z:f,s:.35+i()*1.3,rot:i()*Math.PI*2}),o++)}const l=new xt,h=new Jt,u=new P(0,1,0);for(let d=0;d<2;d++){const f=a[d];if(!f.length)continue;const g=new Za(s[d],r,f.length);g.castShadow=!0,g.receiveShadow=!0;for(let v=0;v<f.length;v++){const m=f[v],p=t.sampleHeight(m.x,m.z)+m.s*.12;h.setFromAxisAngle(u,m.rot),l.compose(new P(m.x,p,m.z),h,new P(m.s,m.s,m.s)),g.setMatrixAt(v,l),m.s>.7&&n.push({x:m.x,z:m.z,r:m.s*.85})}g.instanceMatrix.needsUpdate=!0,e.add(g)}}function HM(t,e,n){const i=new wt({map:ku(),color:11576470,roughness:.95}),s=[],r=new pn(.28,.36,5.2,8,3);s.push({geo:r,x:-13,z:112,ry:.5,rz:Math.PI/2-.06});const a=new pn(.2,.26,3.6,7,2);s.push({geo:a,x:18,z:78,ry:2.1,rz:Math.PI/2+.1});const o=new pn(.34,.48,1.5,8,2);s.push({geo:o,x:-2.5,z:96,ry:0,rz:.12});for(const c of s){const l=new Le(c.geo,i),h=t.sampleHeight(c.x,c.z);l.position.set(c.x,h+(c.rz>1?.32:.6),c.z),l.rotation.set(0,c.ry,c.rz),l.castShadow=!0,l.receiveShadow=!0,e.add(l),n.push({x:c.x,z:c.z,r:.6})}}class GM{constructor(e){N(this,"points");N(this,"base");N(this,"phase");N(this,"count",350);N(this,"radius",22);const n=fi(2718),i=new Float32Array(this.count*3);this.base=new Float32Array(this.count*3),this.phase=new Float32Array(this.count);for(let a=0;a<this.count;a++)this.base[a*3]=(n()*2-1)*this.radius,this.base[a*3+1]=.3+n()*4.5,this.base[a*3+2]=(n()*2-1)*this.radius,this.phase[a]=n()*Math.PI*2;const s=new _n;s.setAttribute("position",new dn(i,3));const r=new $m({map:TM(),size:.045,transparent:!0,opacity:.5,depthWrite:!1,sizeAttenuation:!0,color:16773836});this.points=new T2(s,r),this.points.frustumCulled=!1,e.add(this.points)}update(e,n,i){const s=this.points.geometry.attributes.position,r=this.radius*2;for(let a=0;a<this.count;a++){const o=this.phase[a];let c=this.base[a*3]+Math.sin(e*.11+o)*3+e*.25,l=this.base[a*3+2]+Math.cos(e*.09+o*1.3)*3;c=((c-n.x+this.radius)%r+r)%r-this.radius+n.x,l=((l-n.z+this.radius)%r+r)%r-this.radius+n.z;const h=i.sampleHeight(c,l)+this.base[a*3+1]+Math.sin(e*.5+o*2.7)*.4;s.setXYZ(a,c,h,l)}s.needsUpdate=!0}}async function VM(t,e,n){await Promise.all([XM(t,e,n),YM(t,e,n)]),qM(t,e,n)}async function zu(t,e){const i=await(await fetch(`./models/${t}.bin`)).arrayBuffer(),s=new DataView(i),r=s.getUint32(0,!0),a=s.getUint32(4,!0),o=new _n;return o.setAttribute("position",new dn(new Float32Array(i,8,r*3),3)),o.setIndex(new dn(new Uint32Array(i,8+r*12,a*3),1)),e&&o.computeVertexNormals(),o}const $f=98.4,WM=16;async function XM(t,e,n){const i=await zu("efigie",!0),s=i.attributes.position.array,r=i.attributes.position.count,a=new Float32Array(r*2);for(let u=0;u<r;u++){const d=s[u*3],f=s[u*3+1],g=s[u*3+2];a[u*2]=Math.atan2(g,d)/(Math.PI*2)+.5,a[u*2+1]=f/$f}i.setAttribute("uv",new dn(a,2));const o=wM();o.repeat.set(2,3);const c=new wt({color:new He(.014,.013,.016),roughness:.86,metalness:.05,emissive:new He(1,.08,.04),emissiveMap:o,emissiveIntensity:1.1});c.envMapIntensity=.4,c.onBeforeCompile=u=>{u.uniforms.uTime=Kn.uTime,u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        // Latido lento y siniestro de los glifos.
        totalEmissiveRadiance *= 0.55 + 0.45 * (0.5 + 0.5 * sin(uTime * 1.05));`)};const l=t.sampleHeight(yn.x,yn.z),h=new Le(i,c);h.scale.setScalar(WM/$f),h.position.set(yn.x,l-.45,yn.z),h.castShadow=!0,h.receiveShadow=!0,e.add(h),n.push({x:yn.x,z:yn.z,r:2.9})}const ep={crystal_a:43.4,crystal_b:33.3};async function YM(t,e,n){const[i,s]=await Promise.all([zu("crystal_a",!1),zu("crystal_b",!1)]),r=new wt({color:new He(.05,.045,.062),metalness:.75,roughness:.24,flatShading:!0});r.envMapIntensity=1.1;const a=fi(31666),o=[],c=[],l=14,h=Math.atan2(-160-yn.z,-58-yn.x),u=new Jt,d=new Jt,f=new Jt,g=new P(0,1,0);for(let v=0;v<l;v++){const m=(v+a()*.8)/l*Math.PI*2;let p=Math.abs(m-h);if(p=Math.min(p,Math.PI*2-p),p<.38)continue;const x=a()<.22,S=x?ep.crystal_b:ep.crystal_a,E=x?5.8+a()*1.8:3.5+a()*3,w=yn.x+Math.cos(m)*E,T=yn.z+Math.sin(m)*E,C=x?2.1+a()*1.1:3.2+a()*2.4,R=C/S,_=(x?101.6:52)*R*.35;let D=1/0;for(const[K,G]of[[_,_],[_,-_],[-_,_],[-_,-_]])D=Math.min(D,t.sampleHeight(w+K,T+G));const B=(.32+a()*.12)*C,k=D-B;d.setFromAxisAngle(g,a()*Math.PI*2);const V=new P(-Math.sin(m),0,Math.cos(m));f.setFromAxisAngle(V,(.05+a()*.15)*(a()<.5?1:-1)),u.multiplyQuaternions(f,d);const X=new xt().compose(new P(w,k,T),u,new P(R,R,R)),Y=C-B;(x?c:o).push({m:X,big:Y>.9}),n.push({x:w,z:T,r:.5+Y*.45})}for(const[v,m]of[[i,o],[s,c]]){if(!m.length)continue;const p=new Za(v,r,m.length);for(let x=0;x<m.length;x++)p.setMatrixAt(x,m[x].m);p.instanceMatrix.needsUpdate=!0,p.castShadow=!0,p.receiveShadow=!0,e.add(p)}}function qM(t,e,n){const r=t.sampleHeight(-46,-127),a=new qn;a.position.set(-46,r,-127);const o=new wt({color:new He(.42,.42,.4),roughness:.95}),c=new wt({color:new He(.66,.66,.62),roughness:.85}),l=new Le(new nn(3.4,.5,3.4),o);l.position.y=.05;const h=new Le(new nn(1.15,.9,1.15),c);h.position.y=.7;const u=new Le(new pn(.24,.44,3.4,4,1),c);u.rotation.y=Math.PI/4,u.position.y=2.8;const d=new Le(new Rc(.34,.5,4),c);d.rotation.y=Math.PI/4,d.position.y=4.72;for(const f of[l,h,u,d])f.castShadow=!0,f.receiveShadow=!0,a.add(f);e.add(a),n.push({x:-46,z:-127,r:1.6})}class QM{constructor(e,n){N(this,"group",new qn);N(this,"rotors",[]);N(this,"led");N(this,"baseY");N(this,"state","orbit");N(this,"stateTime",0);N(this,"cooldownUntil",0);N(this,"arcAngle",0);N(this,"yaw",0);N(this,"pitch",0);N(this,"bank",0);N(this,"alert",!1);this.baseY=n.sampleHeight(yn.x,yn.z);const i=new wt({color:new He(.03,.03,.035),roughness:.55,metalness:.25}),s=new wt({color:new He(.02,.02,.022),roughness:.4,metalness:.6}),r=new Le(new nn(.36,.12,.36),i),a=new Le(new Js(.13,12,8),i);a.scale.set(1.1,.55,1.1),a.position.y=.07,this.group.add(r,a);const o=new Le(new Js(.06,10,8),s);o.position.y=-.09;const c=new Le(new pn(.025,.03,.04,8),new wt({color:1118515,roughness:.2,metalness:.8}));c.rotation.x=Math.PI/2,c.position.set(0,-.09,.06),this.group.add(o,c);const l=new Ka({color:657932,transparent:!0,opacity:.32,side:mn,depthWrite:!1});for(let d=0;d<4;d++){const f=d/4*Math.PI*2+Math.PI/4,g=Math.cos(f),v=Math.sin(f),m=new Le(new nn(.4,.035,.055),i);m.position.set(g*.24,.01,v*.24),m.rotation.y=-f,this.group.add(m);const p=new Le(new pn(.045,.05,.06,10),s);p.position.set(g*.42,.04,v*.42),this.group.add(p);const x=new Le(new pn(.16,.16,.006,18),l);x.position.set(g*.42,.085,v*.42),this.group.add(x),this.rotors.push(x);const S=new Le(new nn(.3,.004,.03),i);S.position.y=.002,x.add(S)}this.led=new wt({color:2229509,emissive:new He(1,.05,.02),emissiveIntensity:0});const h=new Le(new Js(.022,8,6),this.led);h.position.set(0,.02,.19);const u=new Le(new Js(.016,8,6),new wt({color:336389,emissive:new He(.05,.9,.1),emissiveIntensity:.9}));u.position.set(0,.02,-.19),this.group.add(h,u),this.group.traverse(d=>{d instanceof Le&&(d.castShadow=!0)}),e.add(this.group)}update(e,n,i){this.stateTime+=e;const s=this.group.position,r=9+Math.sin(n*.11)*2.5,a=n*.22,o=new P(yn.x+Math.cos(a)*r,this.baseY+19+Math.sin(n*.35)*1.3,yn.z+Math.sin(a)*r),c=Math.hypot(i.x-yn.x,i.z-yn.z);switch(this.alert=!1,this.state){case"orbit":{s.copy(o),this.faceTo(-a-Math.PI/2,.05,.16+Math.sin(n*.11)*.03,1,e),c<22&&n>this.cooldownUntil&&(this.state="approach",this.stateTime=0);break}case"approach":{const u=new P(s.x-i.x,0,s.z-i.z);u.lengthSq()<.01&&u.set(1,0,0),u.normalize();const d=new P(i.x+u.x*2.6,i.y+1.15,i.z+u.z*2.6),f=this.flyToward(d,10,e,.9);this.lookWhileFlying(d,e),f&&(this.state="inspect",this.stateTime=0,this.arcAngle=Math.atan2(s.z-i.z,s.x-i.x));break}case"inspect":{this.alert=!0,this.arcAngle+=e*.45;const u=new P(i.x+Math.cos(this.arcAngle)*2.6,i.y+1.15+Math.sin(n*2.6)*.12,i.z+Math.sin(this.arcAngle)*2.6);this.flyToward(u,6,e);const d=i.x-s.x,f=i.z-s.z,g=i.y-.2-s.y;this.faceTo(Math.atan2(d,f),-Math.atan2(g,Math.hypot(d,f))*.6,0,4,e),this.stateTime>5.5&&(this.state="return",this.stateTime=0);break}case"return":{const u=this.flyToward(o,9,e,1.8);this.lookWhileFlying(o,e),u&&(this.state="orbit",this.cooldownUntil=n+40);break}}this.group.rotation.set(this.pitch,this.yaw,this.bank,"YXZ");const l=this.state==="orbit"?85:110;for(let u=0;u<this.rotors.length;u++)this.rotors[u].rotation.y+=e*l*(u%2===0?1:-1);let h;if(this.alert)h=n%.4<.18?3.6:0;else{const u=n%1.6;h=u<.08||u>.22&&u<.3?3.2:0}this.led.emissiveIntensity=h}flyToward(e,n,i,s=.5){const r=this.group.position,a=new P().subVectors(e,r),o=a.length();if(o<.001)return!0;const c=Math.min(Math.max(o*2.2,2.5),n);return r.addScaledVector(a.normalize(),Math.min(o,c*i)),o<s}lookWhileFlying(e,n){const i=this.group.position,s=e.x-i.x,r=e.z-i.z;if(s*s+r*r<.04)return;const a=this.yaw;this.faceTo(Math.atan2(s,r),.12,0,3,n);const o=Nt.clamp((this.yaw-a)/Math.max(n,.001),-2,2);this.bank=Nt.damp(this.bank,-o*.25,4,n)}faceTo(e,n,i,s,r){let a=e-this.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),this.yaw+=a*(1-Math.exp(-s*r)),this.pitch=Nt.damp(this.pitch,n,s,r),this.bank=Nt.damp(this.bank,i,s,r)}}const Ol=1.68,tp=4,jM=1.85,KM=22,np=5.2,ZM=2;class JM{constructor(e,n,i,s){N(this,"position");N(this,"enabled",!1);N(this,"arenaMap",null);N(this,"landingSpeed",0);N(this,"speedBoostActive",!1);N(this,"yaw",Math.PI);N(this,"pitch",0);N(this,"velocity",new P);N(this,"grounded",!0);N(this,"keys",new Set);N(this,"bobTime",0);N(this,"bobAmount",0);N(this,"gestureForward",!1);N(this,"gestureTurnLeft",!1);N(this,"gestureTurnRight",!1);N(this,"gestureJumpRequested",!1);this.camera=e,this.field=n,this.colliders=i,this.position=s.clone(),this.position.y=n.sampleHeight(s.x,s.z)+Ol,this.yaw=0,this.pitch=.02,window.addEventListener("keydown",r=>{if(r.code==="Space"&&r.preventDefault(),r.code==="Enter"||r.code==="NumpadEnter"){r.preventDefault();return}this.keys.add(r.code)}),window.addEventListener("keyup",r=>{if(r.code==="Enter"||r.code==="NumpadEnter"){r.preventDefault();return}this.keys.delete(r.code)}),window.addEventListener("mousemove",r=>{if(!this.enabled)return;this.yaw-=r.movementX*.0021,this.pitch-=r.movementY*.0021;const a=Math.PI/2-.06;this.pitch=Nt.clamp(this.pitch,-a,a)}),this.syncCamera(0)}get isGrounded(){return this.grounded}get rotationYaw(){return this.yaw}teleport(e,n=0){this.position.copy(e);const i=this.field.sampleHeight(e.x,e.z),s=this.arenaMap?this.arenaMap.getWalkSurfaceHeight(e.x,e.z,i):i;this.position.y=s+Ol,this.velocity.set(0,0,0),this.yaw=n,this.pitch=.02,this.syncCamera(0)}triggerJump(){this.enabled&&this.grounded&&(this.velocity.y=np,this.grounded=!1)}stopAllMovement(){this.velocity.x=0,this.velocity.z=0,this.gestureForward=!1,this.gestureTurnLeft=!1,this.gestureTurnRight=!1}update(e){this.landingSpeed=0,this.enabled&&(this.gestureTurnLeft&&(this.yaw+=1.8*e),this.gestureTurnRight&&(this.yaw-=1.8*e));const n=new P(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),i=new P(-n.z,0,n.x),s=new P;this.enabled&&((this.keys.has("KeyW")||this.keys.has("ArrowUp")||this.gestureForward)&&s.add(n),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&s.sub(n),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&s.add(i),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&s.sub(i));const r=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),a=this.speedBoostActive?ZM:1,o=s.lengthSq()>0?tp*(r?jM:1)*a:0;s.lengthSq()>0&&s.normalize();const c=this.grounded?30:8;this.velocity.x=Nt.damp(this.velocity.x,s.x*o,c*.35,e),this.velocity.z=Nt.damp(this.velocity.z,s.z*o,c*.35,e),this.enabled&&this.grounded&&(this.keys.has("Space")||this.gestureJumpRequested)&&(this.velocity.y=np,this.grounded=!1,this.gestureJumpRequested=!1),this.grounded||(this.velocity.y-=KM*e),this.position.x+=this.velocity.x*e,this.position.z+=this.velocity.z*e,this.position.y+=this.velocity.y*e,this.arenaMap&&this.arenaMap.clampPlayerToPath(this.position,.35);for(const g of this.colliders){const v=this.position.x-g.x,m=this.position.z-g.z,p=g.r+.42,x=v*v+m*m;if(x<p*p&&x>1e-6){const S=Math.sqrt(x);this.position.x=g.x+v/S*p,this.position.z=g.z+m/S*p}}const l=this.field.sampleHeight(this.position.x,this.position.z),u=(this.arenaMap?this.arenaMap.getWalkSurfaceHeight(this.position.x,this.position.z,l):l)+Ol;this.position.y<=u?(!this.grounded&&this.velocity.y<-3&&(this.landingSpeed=-this.velocity.y),this.position.y=u,this.velocity.y=0,this.grounded=!0):this.position.y>u+.05&&(this.grounded=!1);const d=Math.hypot(this.velocity.x,this.velocity.z),f=this.grounded?Nt.clamp(d/tp,0,1.8):0;this.bobAmount=Nt.damp(this.bobAmount,f,6,e),this.bobTime+=e*(4.6+d*.9),this.syncCamera(e)}syncCamera(e){const n=Math.sin(this.bobTime*2)*.032*this.bobAmount,i=Math.cos(this.bobTime)*.02*this.bobAmount;this.camera.position.set(this.position.x+i*Math.cos(this.yaw),this.position.y+n,this.position.z-i*Math.sin(this.yaw)),this.camera.quaternion.setFromEuler(new di(this.pitch,this.yaw,0,"YXZ"))}}/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var $M=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new _n;return n.setAttribute("position",new dn(t,3)),n.setAttribute("uv",new dn(e,2)),n})(),ei=class Hu{static get fullscreenGeometry(){return $M}constructor(e="Pass",n=new uc,i=new Ph){this.name=e,this.renderer=null,this.scene=n,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new Le(Hu.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new uc),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=dr){}render(e,n,i,s,r){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,i){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof an||n instanceof Ps||n instanceof Wt||n instanceof Hu)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},eS=class extends ei{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,n,i,s){const r=t.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},tS=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,Bh="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",x0=class extends $t{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Ue(null),depthBuffer:new Ue(null),channelWeights:new Ue(null),opacity:new Ue(1)},blending:gn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:tS,vertexShader:Bh}),this.depthFunc=oc}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){const e=t!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){const e=t!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(t){this.colorSpaceConversion!==t&&(t?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(t){t!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=t):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},A0=class extends ei{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new x0,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new an(1,1,{minFilter:Zt,magFilter:Zt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,n,i,s){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==rn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===pt&&(this.renderTarget.texture.colorSpace=pt))}},ip=new He,Uh=class extends ei{constructor(t=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,n){this.color=t,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,n,i,s){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=t.getClearAlpha(),c=r!==null,l=a>=0;c?(t.getClearColor(ip),t.setClearColor(r,l?a:o)):l&&t.setClearAlpha(a),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),c?t.setClearColor(ip,o):l&&t.setClearAlpha(o)}},nS=class extends ei{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new Uh(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,n,i,s){const r=t.getContext(),a=t.state.buffers,o=this.scene,c=this.camera,l=this.clearPass,h=this.inverted?0:1,u=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,h,4294967295),a.stencil.setClear(u),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?l.render(t,null):(l.render(t,e),l.render(t,n))),this.renderToScreen?(t.setRenderTarget(null),t.render(o,c)):(t.setRenderTarget(e),t.render(o,c),t.setRenderTarget(n),t.render(o,c)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},Nl=1/1e3,iS=1e3,sS=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*Nl}get fixedDelta(){return this._fixedDelta*Nl}set fixedDelta(t){this._fixedDelta=t*iS}get elapsed(){return this._elapsed*Nl}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},rS=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new A0,this.depthRenderTarget=null,this.passes=[],this.timer=new sS,this.autoRenderToScreen=!0,this.setRenderer(t)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(t){this.multisampling!==t&&(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){const e=t.getSize(new te),n=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===rn&&t.outputColorSpace===pt&&(this.inputBuffer.texture.colorSpace=pt,this.outputBuffer.texture.colorSpace=pt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),t.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(t,n,i)}}replaceRenderer(t,e=!0){const n=this.renderer,i=n.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(n.domElement),i.appendChild(t.domElement)),n}createDepthTexture(){const t=new Th;t.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(t.format=ta,t.type=ea):t.type=_i;const e=t.clone();e.name="EffectComposer.OutputDepth";const n=t.clone();n.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=t,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();const{width:i,height:s}=this.inputBuffer;this.depthRenderTarget=new an(i,s,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:n})}blitDepthBuffer(t){const e=this.renderer,n=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(n);const r=i.get(t).__webglFramebuffer,a=i.get(n).__webglFramebuffer,o=t.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,t.width,t.height,0,0,n.width,n.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){const t=this.stableDepthTexture;for(const e of this.passes)e.getDepthTexture()===t&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(t,e,n,i){const s=this.renderer,r=s===null?new te:s.getDrawingBufferSize(new te),a=new an(r.width,r.height,{minFilter:Zt,magFilter:Zt,samples:i,stencilBuffer:e,depthBuffer:t,type:n});return n===rn&&s!==null&&s.outputColorSpace===pt&&(a.texture.colorSpace=pt),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(t){for(const e of this.passes)e.mainScene=t}setMainCamera(t){for(const e of this.passes)e.mainCamera=t}addPass(t,e){const n=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new te),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(t.renderer=i,t.setSize(s.width,s.height),t.initialize(i,r,a),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,t):n.push(t),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(const o of n)o.setDepthTexture(this.stableDepthTexture)}else t.setDepthTexture(this.stableDepthTexture)}removePass(t){const e=this.passes,n=e.indexOf(t);if(n!==-1&&e.splice(n,1).length>0){const r=this.stableDepthTexture;if(r!==null){const a=(c,l)=>c||l.needsDepthTexture;e.reduce(a,!1)||(t.getDepthTexture()===r&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){const e=this.renderer,n=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,r,a=!1;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(o.render(e,i,s,t,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){n.renderToScreen=o.renderToScreen;const c=e.getContext(),l=e.state.buffers.stencil;l.setFunc(c.NOTEQUAL,1,4294967295),n.render(e,i,s,t,a),l.setFunc(c.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof nS?a=!0:o instanceof eS&&(a=!1)}}setSize(t,e,n){const i=this.renderer,s=i.getSize(new te);(t===void 0||e===void 0)&&(t=s.width,e=s.height),(s.width!==t||s.height!==e)&&i.setSize(t,e,n);const r=i.getDrawingBufferSize(new te);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const t of this.passes)t.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],ei.fullscreenGeometry.dispose()}},ns={NONE:0,DEPTH:1,CONVOLUTION:2},ht={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},aS=class{constructor(){this.shaderParts=new Map([[ht.FRAGMENT_HEAD,null],[ht.FRAGMENT_MAIN_UV,null],[ht.FRAGMENT_MAIN_IMAGE,null],[ht.VERTEX_HEAD,null],[ht.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ns.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Rs}},kl=!1,sp=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case mn:n=this.materialsFlatShadedDoubleSide;break;case Kt:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case mn:n=this.materialsDoubleSide;break;case Kt:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof $t))return t.clone();const e=t.uniforms,n=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,n.set(s,r))}const i=t.clone();for(const s of n)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){const e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(const n of e)n.uniforms=Object.assign({},t.uniforms),n.side=rs;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Kt,i}),this.materialsDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=mn,i}),this.materialsFlatShaded=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Kt,i}),this.materialsFlatShadedDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=mn,i})}}render(t,e,n){const i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,kl){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,n);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,n),e.overrideMaterial=s}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return kl}static set workaroundEnabled(t){kl=t}},_s=-1,Pi=class extends us{constructor(t=null,e=_s,n=_s,i=1){super(),t!==null&&this.addEventListener("change",()=>t.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new te(1,1),this.preferredSize=new te(e,n),this.target=this.preferredSize,this.s=i,this.effectiveSize=new te,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const t=this.baseSize,e=this.preferredSize,n=this.effectiveSize,i=this.scale;e.width!==_s?n.width=e.width:e.height!==_s?n.width=Math.round(e.height*(t.width/Math.max(t.height,1))):n.width=Math.round(t.width*i),e.height!==_s?n.height=e.height:e.width!==_s?n.height=Math.round(e.width/Math.max(t.width/Math.max(t.height,1),1)):n.height=Math.round(t.height*i)}get width(){return this.effectiveSize.width}set width(t){this.preferredWidth=t}get height(){return this.effectiveSize.height}set height(t){this.preferredHeight=t}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(t){this.s!==t&&(this.s=t,this.preferredSize.setScalar(_s),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(t){this.scale=t}get baseWidth(){return this.baseSize.width}set baseWidth(t){this.baseSize.width!==t&&(this.baseSize.width=t,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(t){this.baseWidth=t}get baseHeight(){return this.baseSize.height}set baseHeight(t){this.baseSize.height!==t&&(this.baseSize.height=t,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(t){this.baseHeight=t}setBaseSize(t,e){(this.baseSize.width!==t||this.baseSize.height!==e)&&(this.baseSize.set(t,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(t){this.preferredSize.width!==t&&(this.preferredSize.width=t,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(t){this.preferredWidth=t}get preferredHeight(){return this.preferredSize.height}set preferredHeight(t){this.preferredSize.height!==t&&(this.preferredSize.height=t,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(t){this.preferredHeight=t}setPreferredSize(t,e){(this.preferredSize.width!==t||this.preferredSize.height!==e)&&(this.preferredSize.set(t,e),this.dispatchEvent({type:"change"}))}copy(t){this.s=t.scale,this.baseSize.set(t.baseWidth,t.baseHeight),this.preferredSize.set(t.preferredWidth,t.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return _s}},Ze={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},oS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",lS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_S="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ES="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",MS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",SS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",DS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",US="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",OS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NS="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kS=new Map([[Ze.ADD,oS],[Ze.ALPHA,cS],[Ze.AVERAGE,lS],[Ze.COLOR,uS],[Ze.COLOR_BURN,hS],[Ze.COLOR_DODGE,dS],[Ze.DARKEN,fS],[Ze.DIFFERENCE,pS],[Ze.DIVIDE,mS],[Ze.DST,null],[Ze.EXCLUSION,gS],[Ze.HARD_LIGHT,vS],[Ze.HARD_MIX,xS],[Ze.HUE,AS],[Ze.INVERT,_S],[Ze.INVERT_RGB,ES],[Ze.LIGHTEN,MS],[Ze.LINEAR_BURN,SS],[Ze.LINEAR_DODGE,yS],[Ze.LINEAR_LIGHT,wS],[Ze.LUMINOSITY,TS],[Ze.MULTIPLY,bS],[Ze.NEGATION,CS],[Ze.NORMAL,RS],[Ze.OVERLAY,DS],[Ze.PIN_LIGHT,PS],[Ze.REFLECT,IS],[Ze.SATURATION,LS],[Ze.SCREEN,BS],[Ze.SOFT_LIGHT,US],[Ze.SRC,FS],[Ze.SUBTRACT,OS],[Ze.VIVID_LIGHT,NS]]),zS=class extends us{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new Ue(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return kS.get(this.blendFunction)}},Lc=class extends us{constructor(t,e,{attributes:n=ns.NONE,blendFunction:i=Ze.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new zS(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=Rs,this._outputColorSpace=Ri}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=dr){}update(t,e,n){}setSize(t,e){}initialize(t,e,n){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof an||e instanceof Ps||e instanceof Wt||e instanceof ei)&&this[t].dispose()}}},Fh={MEDIUM:2,LARGE:3},HS=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,GS="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",VS=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],WS=class extends $t{constructor(t=new vt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Ue(null),texelSize:new Ue(new vt),scale:new Ue(1),kernel:new Ue(0)},blending:gn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:HS,vertexShader:GS}),this.setTexelSize(t.x,t.y),this.kernelSize=Fh.MEDIUM}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.inputBuffer=t}get kernelSequence(){return VS[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(t){this.uniforms.scale.value=t}getScale(){return this.uniforms.scale.value}setScale(t){this.uniforms.scale.value=t}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(t){this.uniforms.kernel.value=t}setKernel(t){this.kernel=t}setTexelSize(t,e){this.uniforms.texelSize.value.set(t,e,t*.5,e*.5)}setSize(t,e){const n=1/t,i=1/e;this.uniforms.texelSize.value.set(n,i,n*.5,i*.5)}},XS=class extends ei{constructor({kernelSize:t=Fh.MEDIUM,resolutionScale:e=.5,width:n=Pi.AUTO_SIZE,height:i=Pi.AUTO_SIZE,resolutionX:s=n,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new an(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new Pi(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new WS,this._blurMaterial.kernelSize=t,this.copyMaterial=new x0}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(t){this._blurMaterial=t}get dithering(){return this.copyMaterial.dithering}set dithering(t){this.copyMaterial.dithering=t}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(t){this.blurMaterial.kernelSize=t}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get scale(){return this.blurMaterial.scale}set scale(t){this.blurMaterial.scale=t}getScale(){return this.blurMaterial.scale}setScale(t){this.blurMaterial.scale=t}getKernelSize(){return this.kernelSize}setKernelSize(t){this.kernelSize=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}render(t,e,n,i,s){const r=this.scene,a=this.camera,o=this.renderTargetA,c=this.renderTargetB,l=this.blurMaterial,h=l.kernelSequence;let u=e;this.fullscreenMaterial=l;for(let d=0,f=h.length;d<f;++d){const g=(d&1)===0?o:c;l.kernel=h[d],l.inputBuffer=u.texture,t.setRenderTarget(g),t.render(r,a),u=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=u.texture,t.setRenderTarget(this.renderToScreen?null:n),t.render(r,a)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e);const i=n.width,s=n.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n!==rn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):t!==null&&t.outputColorSpace===pt&&(this.renderTargetA.texture.colorSpace=pt,this.renderTargetB.texture.colorSpace=pt))}static get AUTO_SIZE(){return Pi.AUTO_SIZE}},YS=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,qS=class extends $t{constructor(t=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:ur.replace(/\D+/g,"")},uniforms:{inputBuffer:new Ue(null),threshold:new Ue(0),smoothing:new Ue(1),range:new Ue(null)},blending:gn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:YS,vertexShader:Bh}),this.colorOutput=t,this.luminanceRange=e}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get threshold(){return this.uniforms.threshold.value}set threshold(t){this.smoothing>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=t}getThreshold(){return this.threshold}setThreshold(t){this.threshold=t}get smoothing(){return this.uniforms.smoothing.value}set smoothing(t){this.threshold>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=t}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(t){this.smoothing=t}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(t){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(t){t?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(t){return this.colorOutput}setColorOutputEnabled(t){this.colorOutput=t}get useRange(){return this.luminanceRange!==null}set useRange(t){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(t){t!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=t,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(t){this.luminanceRange=t}},_0=class extends ei{constructor({renderTarget:t,luminanceRange:e,colorOutput:n,resolutionScale:i=1,width:s=Pi.AUTO_SIZE,height:r=Pi.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new qS(n,e),this.needsSwap=!1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new an(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const c=this.resolution=new Pi(this,a,o,i);c.addEventListener("change",l=>this.setSize(c.baseWidth,c.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(t,e,n,i,s){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height)}initialize(t,e,n){n!==void 0&&n!==rn&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},QS=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,jS="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",KS=class extends $t{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Ue(null),texelSize:new Ue(new te)},blending:gn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:QS,vertexShader:jS})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},ZS=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,JS="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",$S=class extends $t{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Ue(null),supportBuffer:new Ue(null),texelSize:new Ue(new te),radius:new Ue(.85)},blending:gn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ZS,vertexShader:JS})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}set supportBuffer(t){this.uniforms.supportBuffer.value=t}get radius(){return this.uniforms.radius.value}set radius(t){this.uniforms.radius.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},e3=class extends ei{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new an(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new KS,this.upsamplingMaterial=new $S,this.resolution=new te}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(t){if(this.levels!==t){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<t;++n){const i=e.clone();i.texture.name="Downsampling.Mipmap"+n,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let n=1,i=t-1;n<i;++n){const s=e.clone();s.texture.name="Upsampling.Mipmap"+n,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(t){this.upsamplingMaterial.radius=t}render(t,e,n,i,s){const{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:c}=this,{downsamplingMipmaps:l,upsamplingMipmaps:h}=this;let u=e;this.fullscreenMaterial=o;for(let d=0,f=l.length;d<f;++d){const g=l[d];o.setSize(u.width,u.height),o.inputBuffer=u.texture,t.setRenderTarget(g),t.render(r,a),u=g}this.fullscreenMaterial=c;for(let d=h.length-1;d>=0;--d){const f=h[d];c.setSize(u.width,u.height),c.inputBuffer=u.texture,c.supportBuffer=l[d].texture,t.setRenderTarget(f),t.render(r,a),u=f}}setSize(t,e){const n=this.resolution;n.set(t,e);let i=n.width,s=n.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(t,e,n){if(n!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of i)s.texture.type=n;if(n!==rn)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(t!==null&&t.outputColorSpace===pt)for(const s of i)s.texture.colorSpace=pt}}dispose(){super.dispose();for(const t of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))t.dispose()}},t3=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,n3=class extends Lc{constructor({blendFunction:t=Ze.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:n=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=Fh.LARGE,resolutionScale:c=.5,width:l=Pi.AUTO_SIZE,height:h=Pi.AUTO_SIZE,resolutionX:u=l,resolutionY:d=h}={}){super("BloomEffect",t3,{blendFunction:t,uniforms:new Map([["map",new Ue(null)],["intensity",new Ue(s)]])}),this.renderTarget=new an(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new XS({kernelSize:o}),this.luminancePass=new _0({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new e3,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const f=this.resolution=new Pi(this,u,d,c);f.addEventListener("change",g=>this.setSize(f.baseWidth,f.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get dithering(){return this.blurPass.dithering}set dithering(t){this.blurPass.dithering=t}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(t){this.blurPass.kernelSize=t}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(t){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(t){this.uniforms.get("intensity").value=t}getIntensity(){return this.intensity}setIntensity(t){this.intensity=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}update(t,e,n){const i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(t,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,s.renderTarget):this.blurPass.render(t,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,e):this.blurPass.render(t,e,i)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(t,e),this.mipmapBlurPass.setSize(t,e)}initialize(t,e,n){this.blurPass.initialize(t,e,n),this.luminancePass.initialize(t,e,n),this.mipmapBlurPass.initialize(t,e,n),n!==void 0&&(this.renderTarget.texture.type=n,t!==null&&t.outputColorSpace===pt&&(this.renderTarget.texture.colorSpace=pt))}},rp=class extends ei{constructor(t,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=t,this.input=e}setInput(t){this.input=t}render(t,e,n,i,s){const r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}initialize(t,e,n){n!==void 0&&n!==rn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},i3=class extends ei{constructor(t,e,n=null){super("RenderPass",t,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Uh,this.overrideMaterialManager=n===null?null:new sp(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){const t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){const e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new sp(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,n,i,s){const r=this.scene,a=this.camera,o=this.selection,c=a.layers.mask,l=r.background,h=t.shadowMap.autoUpdate,u=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(u),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,r,a):t.render(r,a),a.layers.mask=c,r.background=l,t.shadowMap.autoUpdate=h}},E0={COLOR:2},s3={DISABLED:0},Ba={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},On={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},Ua={DEFAULT:0,ESKIL:1},r3=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,a3=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,o3=class extends $t{constructor(t=new te,e=E0.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:ur.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new Ue(null),depthBuffer:new Ue(null),predicationBuffer:new Ue(null),texelSize:new Ue(t)},blending:gn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:r3,vertexShader:a3}),this.edgeDetectionMode=e}set depthBuffer(t){this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=dr){this.depthBuffer=t,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(t){this.defines.EDGE_DETECTION_MODE=t.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(t){this.edgeDetectionMode=t}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(t){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=t.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(t){this.localContrastAdaptationFactor=t}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(t){this.defines.EDGE_THRESHOLD=t.toFixed("6"),this.defines.DEPTH_THRESHOLD=(t*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(t){this.edgeDetectionThreshold=t}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(t){this.defines.PREDICATION_MODE=t.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(t){this.predicationMode=t}set predicationBuffer(t){this.uniforms.predicationBuffer.value=t}setPredicationBuffer(t){this.uniforms.predicationBuffer.value=t}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(t){this.defines.PREDICATION_THRESHOLD=t.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(t){this.predicationThreshold=t}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(t){this.defines.PREDICATION_SCALE=t.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(t){this.predicationScale=t}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(t){this.defines.PREDICATION_STRENGTH=t.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(t){this.predicationStrength=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},c3=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,l3="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",u3=class extends $t{constructor(t=new te,e=new te){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new Ue(null),searchTexture:new Ue(null),areaTexture:new Ue(null),resolution:new Ue(e),texelSize:new Ue(t)},blending:gn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:c3,vertexShader:l3})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(t){this.uniforms.searchTexture.value=t}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(t){this.uniforms.areaTexture.value=t}setLookupTextures(t,e){this.searchTexture=t,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(t){const e=Math.min(Math.max(t,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(t){this.orthogonalSearchSteps=t}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(t){const e=Math.min(Math.max(t,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(t){this.diagonalSearchSteps=t}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(t){t?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(t){this.diagonalDetection=t}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(t){const e=Math.min(Math.max(t,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(t){this.cornerRounding=t}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(t){t?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(t){this.cornerDetection=t}setSize(t,e){const n=this.uniforms;n.texelSize.value.set(1/t,1/e),n.resolution.value.set(t,e)}},ap="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",op="data:image/png;base64,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",h3="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",d3="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",f3=class extends Lc{constructor({blendFunction:t=Ze.SRC,preset:e=Ba.MEDIUM,edgeDetectionMode:n=E0.COLOR,predicationMode:i=s3.DISABLED}={}){super("SMAAEffect",h3,{vertexShader:d3,blendFunction:t,attributes:ns.CONVOLUTION|ns.DEPTH,uniforms:new Map([["weightMap",new Ue(null)]])});let s,r;arguments.length>1&&(s=arguments[0],r=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(n=arguments[3])),this.renderTargetEdges=new an(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new Uh(!0,!1,!1),this.clearPass.overrideClearColor=new He(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new rp(new o3),this.edgeDetectionMaterial.edgeDetectionMode=n,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new rp(new u3);const a=new n0;a.onLoad=()=>{const o=new Wt(s);o.name="SMAA.Search",o.magFilter=vn,o.minFilter=vn,o.generateMipmaps=!1,o.needsUpdate=!0,o.flipY=!0,this.weightsMaterial.searchTexture=o;const c=new Wt(r);c.name="SMAA.Area",c.magFilter=Zt,c.minFilter=Zt,c.generateMipmaps=!1,c.needsUpdate=!0,c.flipY=!1,this.weightsMaterial.areaTexture=c,this.dispatchEvent({type:"load"})},a.itemStart("search"),a.itemStart("area"),s!==void 0&&r!==void 0?(a.itemEnd("search"),a.itemEnd("area")):typeof Image<"u"&&(s=new Image,r=new Image,s.addEventListener("load",()=>a.itemEnd("search")),r.addEventListener("load",()=>a.itemEnd("area")),s.src=ap,r.src=op),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(t){this.edgeDetectionMaterial.edgeDetectionThreshold=t}setOrthogonalSearchSteps(t){this.weightsMaterial.orthogonalSearchSteps=t}applyPreset(t){const e=this.edgeDetectionMaterial,n=this.weightsMaterial;switch(t){case Ba.LOW:e.edgeDetectionThreshold=.15,n.orthogonalSearchSteps=4,n.diagonalDetection=!1,n.cornerDetection=!1;break;case Ba.MEDIUM:e.edgeDetectionThreshold=.1,n.orthogonalSearchSteps=8,n.diagonalDetection=!1,n.cornerDetection=!1;break;case Ba.HIGH:e.edgeDetectionThreshold=.1,n.orthogonalSearchSteps=16,n.diagonalSearchSteps=8,n.cornerRounding=25,n.diagonalDetection=!0,n.cornerDetection=!0;break;case Ba.ULTRA:e.edgeDetectionThreshold=.05,n.orthogonalSearchSteps=32,n.diagonalSearchSteps=16,n.cornerRounding=25,n.diagonalDetection=!0,n.cornerDetection=!0;break}}setDepthTexture(t,e=dr){this.edgeDetectionMaterial.depthBuffer=t,this.edgeDetectionMaterial.depthPacking=e}update(t,e,n){this.clearPass.render(t,this.renderTargetEdges),this.edgeDetectionPass.render(t,e,this.renderTargetEdges),this.weightsPass.render(t,this.renderTargetEdges,this.renderTargetWeights)}setSize(t,e){this.edgeDetectionMaterial.setSize(t,e),this.weightsMaterial.setSize(t,e),this.renderTargetEdges.setSize(t,e),this.renderTargetWeights.setSize(t,e)}dispose(){const{searchTexture:t,areaTexture:e}=this.weightsMaterial;t!==null&&e!==null&&(t.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return ap}static get areaImageDataURL(){return op}},p3=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,m3=class extends $t{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new Ue(null),luminanceBuffer1:new Ue(null),minLuminance:new Ue(.01),deltaTime:new Ue(0),tau:new Ue(1)},extensions:{shaderTextureLOD:!0},blending:gn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:p3,vertexShader:Bh})}set luminanceBuffer0(t){this.uniforms.luminanceBuffer0.value=t}setLuminanceBuffer0(t){this.uniforms.luminanceBuffer0.value=t}set luminanceBuffer1(t){this.uniforms.luminanceBuffer1.value=t}setLuminanceBuffer1(t){this.uniforms.luminanceBuffer1.value=t}set mipLevel1x1(t){this.defines.MIP_LEVEL_1X1=t.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(t){this.mipLevel1x1=t}set deltaTime(t){this.uniforms.deltaTime.value=t}setDeltaTime(t){this.uniforms.deltaTime.value=t}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(t){this.uniforms.minLuminance.value=t}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(t){this.uniforms.minLuminance.value=t}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(t){this.uniforms.tau.value=t}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(t){this.uniforms.tau.value=t}},g3=class extends ei{constructor(t,{minLuminance:e=.01,adaptationRate:n=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new m3,this.needsSwap=!1,this.renderTargetPrevious=new an(1,1,{minFilter:vn,magFilter:vn,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=t,i.minLuminance=e,i.adaptationRate=n,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new A0(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(t){this.fullscreenMaterial.mipLevel1x1=t}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(t){this.fullscreenMaterial.adaptationRate=t}render(t,e,n,i,s){this.fullscreenMaterial.deltaTime=i,t.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),t.render(this.scene,this.camera),this.copyPass.render(t,this.renderTargetAdapted)}},v3=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,x3=class extends Lc{constructor({blendFunction:t=Ze.SRC,adaptive:e=!1,mode:n=e?On.REINHARD2_ADAPTIVE:On.AGX,resolution:i=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:c=1,adaptationRate:l=1}={}){super("ToneMappingEffect",v3,{blendFunction:t,uniforms:new Map([["luminanceBuffer",new Ue(null)],["maxLuminance",new Ue(s)],["whitePoint",new Ue(r)],["middleGrey",new Ue(a)],["averageLuminance",new Ue(c)]])}),this.renderTargetLuminance=new an(1,1,{minFilter:Ss,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new _0({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new g3(this.luminancePass.texture,{minLuminance:o,adaptationRate:l}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=n}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(t){if(this.mode===t)return;const n=ur.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",t.toFixed(0)),t){case On.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case On.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case On.CINEON:case On.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",n);break;case On.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case On.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case On.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=t===On.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(t){this.mode=t}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(t){this.uniforms.get("whitePoint").value=t}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(t){this.uniforms.get("middleGrey").value=t}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(t){this.uniforms.get("averageLuminance").value=t}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(t){const e=Math.max(0,Math.ceil(Math.log2(t))),n=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(n,n),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(t){this.resolution=t}get adaptive(){return this.mode===On.REINHARD2_ADAPTIVE}set adaptive(t){this.mode=t?On.REINHARD2_ADAPTIVE:On.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(t){this.adaptiveLuminanceMaterial.adaptationRate=t}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(t){console.warn(this.name,"distinction was removed.")}update(t,e,n){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(t,e),this.adaptiveLuminancePass.render(t,null,null,n))}initialize(t,e,n){this.adaptiveLuminancePass.initialize(t,e,n)}},A3=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,_3=class extends Lc{constructor({blendFunction:t,eskil:e=!1,technique:n=e?Ua.ESKIL:Ua.DEFAULT,offset:i=.5,darkness:s=.5}={}){super("VignetteEffect",A3,{blendFunction:t,defines:new Map([["VIGNETTE_TECHNIQUE",n.toFixed(0)]]),uniforms:new Map([["offset",new Ue(i)],["darkness",new Ue(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(t){this.technique!==t&&(this.defines.set("VIGNETTE_TECHNIQUE",t.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Ua.ESKIL}set eskil(t){this.technique=t?Ua.ESKIL:Ua.DEFAULT}getTechnique(){return this.technique}setTechnique(t){this.technique=t}get offset(){return this.uniforms.get("offset").value}set offset(t){this.uniforms.get("offset").value=t}getOffset(){return this.offset}setOffset(t){this.offset=t}get darkness(){return this.uniforms.get("darkness").value}set darkness(t){this.uniforms.get("darkness").value=t}getDarkness(){return this.darkness}setDarkness(t){this.darkness=t}},E3=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,M3="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",S3=class extends $t{constructor(t,e,n,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:ur.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Ue(null),depthBuffer:new Ue(null),resolution:new Ue(new te),texelSize:new Ue(new te),cameraNear:new Ue(.3),cameraFar:new Ue(1e3),aspect:new Ue(1),time:new Ue(0)},blending:gn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),t&&this.setShaderParts(t),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=dr){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=E3.replace(ht.FRAGMENT_HEAD,t.get(ht.FRAGMENT_HEAD)||"").replace(ht.FRAGMENT_MAIN_UV,t.get(ht.FRAGMENT_MAIN_UV)||"").replace(ht.FRAGMENT_MAIN_IMAGE,t.get(ht.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=M3.replace(ht.VERTEX_HEAD,t.get(ht.VERTEX_HEAD)||"").replace(ht.VERTEX_MAIN_SUPPORT,t.get(ht.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(const e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(const e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(const e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof Nn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){const n=this.uniforms;n.resolution.value.set(t,e),n.texelSize.value.set(1/t,1/e),n.aspect.value=t/e}static get Section(){return ht}};function cp(t,e,n){for(const i of e){const s="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of n.entries())a[1]!==null&&n.set(a[0],a[1].replace(r,s))}}function y3(t,e,n){let i=e.getFragmentShader(),s=e.getVertexShader();const r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(n.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(n.attributes&ns.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,c=n.shaderParts;let l=c.get(ht.FRAGMENT_HEAD)||"",h=c.get(ht.FRAGMENT_MAIN_UV)||"",u=c.get(ht.FRAGMENT_MAIN_IMAGE)||"",d=c.get(ht.VERTEX_HEAD)||"",f=c.get(ht.VERTEX_MAIN_SUPPORT)||"";const g=new Set,v=new Set;if(a&&(h+=`	${t}MainUv(UV);
`,n.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const x=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);f+=`	${t}MainSupport(`,f+=x?`vUv);
`:`);
`;for(const S of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const E of S[1].split(/\s*,\s*/))n.varyings.add(E),g.add(E),v.add(E);for(const S of s.matchAll(o))v.add(S[1])}for(const x of i.matchAll(o))v.add(x[1]);for(const x of e.defines.keys())v.add(x.replace(/\([\w\s,]*\)/g,""));for(const x of e.uniforms.keys())v.add(x);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((x,S)=>n.uniforms.set(t+S.charAt(0).toUpperCase()+S.slice(1),x)),e.defines.forEach((x,S)=>n.defines.set(t+S.charAt(0).toUpperCase()+S.slice(1),x));const m=new Map([["fragment",i],["vertex",s]]);cp(t,v,n.defines),cp(t,v,m),i=m.get("fragment"),s=m.get("vertex");const p=e.blendMode;if(n.blendModes.set(p.blendFunction,p),r){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(u+=e.inputColorSpace===pt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ri?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const x=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;u+=`${t}MainImage(color0, UV, `,(n.attributes&ns.DEPTH)!==0&&x.test(i)&&(u+="depth, ",n.readDepth=!0),u+=`color1);
	`;const S=t+"BlendOpacity";n.uniforms.set(S,p.opacity),u+=`color0 = blend${p.blendFunction}(color0, color1, ${S});

	`,l+=`uniform float ${S};

`}if(l+=i+`
`,s!==null&&(d+=s+`
`),c.set(ht.FRAGMENT_HEAD,l),c.set(ht.FRAGMENT_MAIN_UV,h),c.set(ht.FRAGMENT_MAIN_IMAGE,u),c.set(ht.VERTEX_HEAD,d),c.set(ht.VERTEX_MAIN_SUPPORT,f),e.extensions!==null)for(const x of e.extensions)n.extensions.add(x)}}var lp=class extends ei{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new S3(null,null,null,t),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(const e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(const e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){const e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const t=new aS;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===Ze.DST)t.attributes|=a.getAttributes()&ns.DEPTH;else{if((t.attributes&a.getAttributes()&ns.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);y3("e"+e++,a,t)}let n=t.shaderParts.get(ht.FRAGMENT_HEAD),i=t.shaderParts.get(ht.FRAGMENT_MAIN_IMAGE),s=t.shaderParts.get(ht.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of t.blendModes.values())n+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(t.attributes&ns.DEPTH)!==0?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===pt&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(ht.FRAGMENT_HEAD,n),t.shaderParts.set(ht.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(ht.FRAGMENT_MAIN_UV,s);for(const[a,o]of t.shaderParts)o!==null&&t.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=dr){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(t,e)}render(t,e,n,i,s){for(const r of this.effects)r.update(t,e,i);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(const n of this.effects)n.setSize(t,e)}initialize(t,e,n){this.renderer=t;for(const i of this.effects)i.initialize(t,e,n);this.updateMaterial(),n!==void 0&&n!==rn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){switch(t.type){case"change":this.recompile();break}}};function w3(t,e,n){t.toneMapping=es;const i=new rS(t,{frameBufferType:hr});i.addPass(new i3(e,n));const s=new n3({intensity:.5,luminanceThreshold:.8,luminanceSmoothing:.25,mipmapBlur:!0}),r=new x3({mode:On.ACES_FILMIC}),a=new f3,o=new _3({offset:.28,darkness:.42});return i.addPass(new lp(n,s,r)),i.addPass(new lp(n,a,o)),i}class T3{constructor(e,n){N(this,"ctx",null);N(this,"master");N(this,"windGain");N(this,"windFilter");N(this,"rustleGain");N(this,"noiseBuf");N(this,"birdCountdown",3);N(this,"stepAccum",0);N(this,"lastPos",new P);N(this,"firstFrame",!0);N(this,"bgm",null);N(this,"isVictory",!1);this.field=e,this.controller=n,typeof window<"u"&&(this.bgm=new Audio("/bgm.mp3"),this.bgm.loop=!0,this.bgm.volume=.55)}start(){if(this.bgm&&!this.isVictory&&this.bgm.play().catch(a=>{console.warn("BGM autoplay waiting for interaction:",a)}),this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=new AudioContext;this.ctx=e,this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination),this.noiseBuf=this.makeNoise(2,!1);const n=this.makeNoise(6,!0),i=e.createBufferSource();i.buffer=n,i.loop=!0,this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=480,this.windFilter.Q.value=.4,this.windGain=e.createGain(),this.windGain.gain.value=.1,i.connect(this.windFilter).connect(this.windGain).connect(this.master),i.start();const s=e.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0;const r=e.createBiquadFilter();r.type="highpass",r.frequency.value=2400,this.rustleGain=e.createGain(),this.rustleGain.gain.value=0,s.connect(r).connect(this.rustleGain).connect(this.master),s.start(),e.state==="suspended"&&e.resume()}setMenu(e){if(this.bgm&&!this.isVictory&&(e?this.bgm.volume=.2:(this.bgm.volume=.55,this.bgm.paused&&this.bgm.play().catch(()=>{}))),!this.ctx)return;const n=this.ctx.currentTime;this.master.gain.cancelScheduledValues(n),this.master.gain.setTargetAtTime(e?.06:.55,n,.4)}stopBgm(e=2.5){if(this.isVictory=!0,!this.bgm)return;const n=this.bgm.volume,i=performance.now(),s=()=>{if(!this.bgm)return;const r=(performance.now()-i)/1e3;r<e?(this.bgm.volume=Math.max(0,n*(1-r/e)),requestAnimationFrame(s)):(this.bgm.volume=0,this.bgm.pause())};s()}update(e,n){if(!this.ctx||this.ctx.state!=="running")return;const i=this.ctx,s=this.controller.position;this.firstFrame&&(this.lastPos.copy(s),this.firstFrame=!1);const r=.6+.4*Math.sin(n*.37+s.x*.021+s.z*.017)*(.7+.3*Math.sin(n*.13));this.windGain.gain.setTargetAtTime(.07+r*.13,i.currentTime,.35),this.windFilter.frequency.setTargetAtTime(380+r*480,i.currentTime,.35);const a=s.x-this.lastPos.x,o=s.z-this.lastPos.z,c=Math.hypot(a,o),l=e>0?c/e:0;this.lastPos.copy(s);const h=this.field.sampleMask(s.x,s.z),u=h>.4&&this.controller.isGrounded?Nt.clamp(l/7.5,0,1)*.16:0;if(this.rustleGain.gain.setTargetAtTime(u,i.currentTime,.12),this.controller.isGrounded&&l>.6){this.stepAccum+=c;const d=1.55+l*.12;this.stepAccum>=d&&(this.stepAccum=0,this.playStep(l,h))}else this.stepAccum=Math.min(this.stepAccum,1.2);this.controller.landingSpeed>3.5&&this.playStep(this.controller.landingSpeed*1.6,h,!0),this.birdCountdown-=e,this.birdCountdown<=0&&(this.birdCountdown=2.5+Math.random()*8,this.playBird())}playStep(e,n,i=!1){const s=this.ctx,r=s.currentTime,a=n>.4,o=s.createGain(),c=(i?.34:.14+Math.min(e/8,1)*.1)*(.85+Math.random()*.3);o.gain.setValueAtTime(c,r),o.gain.exponentialRampToValueAtTime(.001,r+(i?.22:.13)),o.connect(this.master);const l=s.createOscillator();l.type="triangle";const h=(i?58:72)+Math.random()*24;l.frequency.setValueAtTime(h*1.5,r),l.frequency.exponentialRampToValueAtTime(h,r+.07);const u=s.createGain();u.gain.value=a?.5:1,l.connect(u).connect(o),l.start(r),l.stop(r+.16);const d=s.createBufferSource();d.buffer=this.noiseBuf,d.playbackRate.value=.8+Math.random()*.5;const f=s.createBiquadFilter();f.type="bandpass",f.frequency.value=a?2100+Math.random()*900:620+Math.random()*260,f.Q.value=.7;const g=s.createGain();g.gain.setValueAtTime(a?1:.8,r),g.gain.exponentialRampToValueAtTime(.001,r+.1),d.connect(f).connect(g).connect(o),d.start(r,Math.random()*1.2),d.stop(r+.14)}playBird(){const e=this.ctx;let n=e.currentTime+.05;const i=.25+Math.random()*.75,s=e.createStereoPanner();s.pan.value=(Math.random()*2-1)*.85;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=6500-i*3800;const a=e.createGain();a.gain.value=.16*(1-i*.72),r.connect(s).connect(a).connect(this.master);const o=e.createOscillator();o.type="sine";const c=e.createGain();c.gain.setValueAtTime(0,n),o.connect(c).connect(r);const l=2+Math.floor(Math.random()*5),h=2100+Math.random()*1700;for(let u=0;u<l;u++){const d=.05+Math.random()*.09,f=h*(.9+Math.random()*.25),g=Math.max(500,f+(Math.random()*2-1)*900);o.frequency.setValueAtTime(f,n),o.frequency.exponentialRampToValueAtTime(g,n+d*.85),c.gain.linearRampToValueAtTime(1,n+.012),c.gain.linearRampToValueAtTime(1e-4,n+d),n+=d+.03+Math.random()*.09}o.start(e.currentTime+.05),o.stop(n+.05)}makeNoise(e,n){const i=this.ctx,s=Math.floor(i.sampleRate*e),r=i.createBuffer(1,s,i.sampleRate),a=r.getChannelData(0);let o=0;for(let c=0;c<s;c++){const l=Math.random()*2-1;n?(o=(o+.02*l)/1.02,a[c]=o*3.5):a[c]=l}return r}}const zl=1.65,up=new P(-60,.2,90),b3=new P(60,.2,90),ys=new P(-12,0,10),Wo=new P(12,0,10),Yn=new P(0,1.8,-220),hp=[{a:new te(-60,90),b:new te(-20,90)},{a:new te(-20,90),b:new te(-20,35)},{a:new te(-20,35),b:new te(-12,35)},{a:new te(-12,35),b:new te(-12,10)},{a:new te(-12,10),b:new te(-12,-25),doorRequired:1},{a:new te(-12,-25),b:new te(0,-25),doorRequired:1},{a:new te(60,90),b:new te(20,90)},{a:new te(20,90),b:new te(20,35)},{a:new te(20,35),b:new te(12,35)},{a:new te(12,35),b:new te(12,10)},{a:new te(12,10),b:new te(12,-25),doorRequired:2},{a:new te(12,-25),b:new te(0,-25),doorRequired:2},{a:new te(0,-25),b:new te(0,-85)},{a:new te(0,-85),b:new te(10,-130)},{a:new te(10,-130),b:new te(-6,-175)},{a:new te(-6,-175),b:new te(0,-220)}];class C3{constructor(e,n){N(this,"group",new qn);N(this,"door1LeftWing");N(this,"door1RightWing");N(this,"door2LeftWing");N(this,"door2RightWing");N(this,"trophyMesh");N(this,"trophyLight");N(this,"door1Unlocked",!1);N(this,"door2Unlocked",!1);N(this,"door1OpenRatio",0);N(this,"door2OpenRatio",0);N(this,"cupClaimed",!1);this.buildPaths(),this.buildGates(n),this.buildPodiumAndCup(n),e.add(this.group)}isDoorUnlocked(e){return e===1?this.door1Unlocked:this.door2Unlocked}unlockDoor(e){e===1&&(this.door1Unlocked=!0),e===2&&(this.door2Unlocked=!0)}get isVictory(){return this.cupClaimed}claimCup(){this.cupClaimed=!0}getWalkSurfaceHeight(e,n,i){if(Math.hypot(e-Yn.x,n-Yn.z)<=4.5)return 1.4;if(Math.abs(e-Yn.x)<=2.2&&n>=-44&&n<=-37){const r=(-37-n)/7;return Nt.clamp(r*1.4,0,1.4)}return i}clampPlayerToPath(e,n=.35){const i=e.x-Yn.x,s=e.z-Yn.z,r=Math.sqrt(i*i+s*s);if(r<=4.8){if(r>4.5){const u=Math.atan2(s,i);e.x=Yn.x+Math.cos(u)*4.5,e.z=Yn.z+Math.sin(u)*4.5}return}const a=hp.filter(u=>!(u.doorRequired===1&&!this.door1Unlocked||u.doorRequired===2&&!this.door2Unlocked)),o=new te(e.x,e.z);let c=1/0,l=new te;for(const u of a){const d=u.b.clone().sub(u.a),f=d.lengthSq();let g=0;f>1e-4&&(g=d.dot(o.clone().sub(u.a))/f,g=Math.max(0,Math.min(1,g)));const v=u.a.clone().add(d.multiplyScalar(g)),m=o.distanceTo(v);m<c&&(c=m,l=v)}const h=zl-n;if(c>h&&c>1e-4){const u=o.clone().sub(l).normalize().multiplyScalar(h);e.x=l.x+u.x,e.z=l.y+u.y}!this.door1Unlocked&&Math.abs(e.x-ys.x)<2&&e.z<ys.z+n&&(e.z=ys.z+n),!this.door2Unlocked&&Math.abs(e.x-Wo.x)<2&&e.z<Wo.z+n&&(e.z=Wo.z+n)}update(e,n){if(this.door1Unlocked&&this.door1OpenRatio<1){this.door1OpenRatio=Math.min(1,this.door1OpenRatio+e*1.2);const i=this.door1OpenRatio*(Math.PI*.48);this.door1LeftWing.rotation.y=-i,this.door1RightWing.rotation.y=i}if(this.door2Unlocked&&this.door2OpenRatio<1){this.door2OpenRatio=Math.min(1,this.door2OpenRatio+e*1.2);const i=this.door2OpenRatio*(Math.PI*.48);this.door2LeftWing.rotation.y=-i,this.door2RightWing.rotation.y=i}this.trophyMesh&&(this.trophyMesh.rotation.y+=e*1.1,this.trophyMesh.position.y=Yn.y+Math.sin(n*2.2)*.12,this.trophyLight.intensity=2.5+Math.sin(n*3.5)*.8)}buildPaths(){this.createTrailBorderStones()}createTrailBorderStones(){const e=new bh(.2,1),n=new wt({color:5920074,roughness:.95,metalness:.05});for(const i of hp){const s=i.b.clone().sub(i.a),r=s.length();if(r<.1)continue;const a=s.clone().normalize(),o=new te(-a.y,a.x),c=3.5,l=Math.floor(r/c);for(let h=0;h<=l;h++){const u=h*c/r,d=i.a.clone().add(s.clone().multiplyScalar(u)),f=(Math.sin(d.x*3.7+d.y*2.3)+1)*.15,g=d.clone().add(o.clone().multiplyScalar(zl+.1+f)),v=new Le(e,n),m=.7+Math.abs(Math.sin(d.x*5.1))*.6;v.scale.set(m,m*.6,m),v.position.set(g.x,.04,g.y),v.rotation.set(Math.sin(g.x),Math.cos(g.y),0),v.receiveShadow=!0,this.group.add(v);const p=d.clone().sub(o.clone().multiplyScalar(zl+.1+f)),x=new Le(e,n),S=.7+Math.abs(Math.cos(d.y*4.3))*.6;x.scale.set(S,S*.6,S),x.position.set(p.x,.04,p.y),x.rotation.set(Math.cos(p.x),Math.sin(p.y),0),x.receiveShadow=!0,this.group.add(x)}}}buildGates(e){const n=new wt({color:4007959,roughness:.88,metalness:.05}),i=new wt({color:4861462,roughness:.78,metalness:.05}),s=this.createGateStructure(ys,2061822,n,i,e);this.door1LeftWing=s.left,this.door1RightWing=s.right;const r=this.createGateStructure(Wo,14235678,n,i,e);this.door2LeftWing=r.left,this.door2RightWing=r.right}createGateStructure(e,n,i,s,r){const a=new qn;a.position.copy(e);const o=new i0().load("/gate_arch.png");o.colorSpace=pt;const c=new wt({map:o,transparent:!0,alphaTest:.12,roughness:.88,metalness:.05,side:mn}),l=new pr(5.2,5.2);l.translate(0,2.55,0);const h=new Le(l,c);h.position.set(0,0,.18),h.castShadow=!0,a.add(h);const u=new Le(l,c);u.position.set(0,0,-.18),u.castShadow=!0,a.add(u),r.push({x:e.x-1.5,z:e.z,r:.65}),r.push({x:e.x+1.5,z:e.z,r:.65});const d=new wt({color:5919818,roughness:.95,metalness:.05}),f=new Le(new nn(2.8,.22,1.2),d);f.position.set(0,.11,0),f.receiveShadow=!0,a.add(f);const g=new wt({color:3021838,roughness:.85,metalness:.08}),v=new wt({color:1710618,roughness:.5,metalness:.85}),m=new qn;m.position.set(-1.15,1.8,0);const p=new nn(1.15,3.2,.1);p.translate(.575,0,0);const x=new Le(p,g);x.castShadow=!0,m.add(x);for(const M of[-1,0,1]){const _=new Le(new nn(1.1,.09,.12),v);_.position.set(.575,M,0),m.add(_)}a.add(m);const S=new qn;S.position.set(1.15,1.8,0);const E=new nn(1.15,3.2,.1);E.translate(-.575,0,0);const w=new Le(E,g);w.castShadow=!0,S.add(w);for(const M of[-1,0,1]){const _=new Le(new nn(1.1,.09,.12),v);_.position.set(-.575,M,0),S.add(_)}a.add(S);const T=new Le(new pn(.12,.12,.08,16),v);T.position.set(0,1.8,.08),a.add(T);const C=new La(16768896,2.4,14,1.2);C.position.set(0,2.6,.5),a.add(C);const R=new La(16773299,1.8,12,1.4);return R.position.set(0,2.6,-.6),a.add(R),this.group.add(a),{left:m,right:S}}addLantern(e,n){const i=new nn(.35,.5,.35),s=new Ka({color:16755251}),r=new Le(i,s);r.position.copy(n),e.add(r);const a=new La(16750882,1.6,12,1.2);a.position.copy(n),e.add(a)}buildPodiumAndCup(e){const n=new wt({color:6841438,roughness:.8,metalness:.1}),i=new qn;i.position.copy(Yn);const s=new nn(9,1.4,9),r=new Le(s,n);r.position.set(0,-.7,0),r.receiveShadow=!0,r.castShadow=!0,i.add(r);for(let S=0;S<5;S++){const E=new nn(4.2,.28,.8),w=new Le(E,n);w.position.set(0,-1.26+S*.28,4.5+(4-S)*.8),w.receiveShadow=!0,i.add(w)}[[-3.8,-3.8],[3.8,-3.8],[-3.8,3.8],[3.8,3.8]].forEach(([S,E])=>{const w=new pn(.5,.55,2.4,16),T=new Le(w,n);T.position.set(S,.4,E),T.castShadow=!0,i.add(T),e.push({x:Yn.x+S,z:Yn.z+E,r:.6});const C=new pn(.7,.35,.5,16),R=new wt({color:3354412,metalness:.4,roughness:.7}),M=new Le(C,R);M.position.set(S,1.7,E),i.add(M);const _=new Rc(.35,.8,12),D=new Ka({color:16737792}),B=new Le(_,D);B.position.set(S,2.2,E),i.add(B);const k=new La(16742161,2,16,1.2);k.position.set(S,2.3,E),i.add(k)});const o=new pn(.9,1.1,.9,24),c=new Le(o,n);c.position.set(0,.35,0),c.receiveShadow=!0,i.add(c),this.trophyMesh=new qn;const l=new wt({color:16766720,metalness:.95,roughness:.15,emissive:3812864}),h=new pn(.45,.6,.18,24),u=new Le(h,l);u.position.set(0,.1,0),this.trophyMesh.add(u);const d=new pn(.12,.18,.45,16),f=new Le(d,l);f.position.set(0,.35,0),this.trophyMesh.add(f);const g=new pn(.55,.22,.7,24,1,!0),v=new Le(g,l);v.position.set(0,.8,0),this.trophyMesh.add(v);const m=new Rh(.24,.05,12,24,Math.PI*1.2),p=new Le(m,l);p.position.set(-.52,.85,0),p.rotation.z=Math.PI*.4,this.trophyMesh.add(p);const x=new Le(m,l);x.position.set(.52,.85,0),x.rotation.z=-Math.PI*.4,this.trophyMesh.add(x),this.trophyLight=new La(16766720,2.2,12,1.2),this.trophyLight.position.set(0,1.2,0),this.trophyMesh.add(this.trophyLight),this.trophyMesh.position.set(0,.8,0),i.add(this.trophyMesh),this.group.add(i)}}const R3=[{question:"What has keys, but no locks; space, but no room; and you can enter, but cannot go in?",options:["A keyboard","A treasure chest","A musical piano","A dungeon"],correct:0},{question:"The more of this you take, the more you leave behind. What are they?",options:["Seconds","Footsteps","Memories","Breaths"],correct:1},{question:"What gets wetter the more it dries?",options:["A sponge","A cloud","A towel","A leaf"],correct:2},{question:"What belongs to you, but other people use it far more than you do?",options:["Your shoes","Your name","Your phone","Your shadow"],correct:1},{question:"What has hands, but cannot clap?",options:["A clock","A statue","A compass","A tree"],correct:0}];class D3{constructor(){N(this,"container");N(this,"scrollEl");N(this,"badgeEl");N(this,"titleEl");N(this,"questionEl");N(this,"optionsEl");N(this,"feedbackEl");N(this,"cursorEl");N(this,"cursorRingFill");N(this,"cursorX",0);N(this,"cursorY",0);N(this,"dwellTimer",0);N(this,"currentHoverBtn",null);N(this,"isAnswerLocked",!1);N(this,"lastPointerTime",0);N(this,"currentQuestions",[]);N(this,"currentIndex",0);N(this,"activeDoorId",null);N(this,"onCompleteCallback",null);N(this,"isOpen",!1);this.createDom()}get isQuizActive(){return this.isOpen}createDom(){const e=document.createElement("style");e.textContent=`
      #scroll-overlay {
        position: fixed;
        inset: 0;
        z-index: 100;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        transition: background 0.4s ease;
      }
      #scroll-overlay.active {
        pointer-events: auto;
        background: rgba(8, 12, 8, 0.45);
        backdrop-filter: blur(3px);
      }
      #parchment-scroll {
        position: relative;
        width: min(530px, 92vw);
        margin-top: 2rem;
        transform: translateY(-130%);
        transition: transform 0.65s cubic-bezier(0.18, 1.15, 0.32, 1);
        filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.65));
        font-family: 'Georgia', 'Times New Roman', serif;
        user-select: none;
      }
      #scroll-overlay.active #parchment-scroll {
        transform: translateY(0);
      }
      .scroll-roller {
        height: 26px;
        background: linear-gradient(180deg, #533618 0%, #875727 45%, #b1793b 55%, #422912 100%);
        border-radius: 13px;
        box-shadow: inset 0 2px 3px rgba(255,255,255,0.3), 0 4px 10px rgba(0,0,0,0.5);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
      }
      .scroll-knob {
        width: 18px;
        height: 18px;
        background: radial-gradient(circle, #ecd089 20%, #996f2a 80%);
        border-radius: 50%;
        box-shadow: 0 1px 4px rgba(0,0,0,0.6);
      }
      .scroll-body {
        position: relative;
        background: #f1dfba;
        background-image: 
          radial-gradient(ellipse at 50% 20%, rgba(255,255,255,0.4) 0%, transparent 70%),
          radial-gradient(circle at 10% 50%, rgba(139, 90, 43, 0.12) 0%, transparent 40%),
          radial-gradient(circle at 90% 70%, rgba(139, 90, 43, 0.15) 0%, transparent 45%);
        border-left: 6px solid #cfb484;
        border-right: 6px solid #cfb484;
        box-shadow: inset 0 0 40px rgba(110, 68, 26, 0.3);
        padding: 1.8rem 2.2rem 1.6rem;
        color: #38240f;
        text-align: center;
      }
      .scroll-badge {
        display: inline-block;
        padding: 0.25rem 0.9rem;
        background: #422912;
        color: #f7e8c8;
        font-size: 0.75rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        border-radius: 20px;
        margin-bottom: 0.6rem;
        font-weight: bold;
      }
      .scroll-title {
        font-size: 1.55rem;
        font-weight: bold;
        letter-spacing: 0.08em;
        color: #0e3a6c;
        text-shadow: 0 1px 1px rgba(255,255,255,0.4);
        margin-bottom: 0.8rem;
        border-bottom: 1px dashed rgba(80, 50, 20, 0.35);
        padding-bottom: 0.5rem;
      }
      .scroll-question {
        font-size: 1.15rem;
        line-height: 1.45;
        font-style: italic;
        color: #2b1808;
        margin-bottom: 1.4rem;
        min-height: 3.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .scroll-options {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
        margin-bottom: 0.8rem;
      }
      .scroll-btn {
        padding: 0.85rem 1rem;
        background: linear-gradient(180deg, #fbf2dc 0%, #e6cb9b 100%);
        border: 1.5px solid #a4763e;
        border-radius: 6px;
        color: #2d1806;
        font-family: inherit;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 3px 5px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6);
        transition: transform 0.15s, background 0.2s, border-color 0.2s, box-shadow 0.15s;
        position: relative;
      }
      .scroll-btn:hover, .scroll-btn.gesture-hover {
        background: linear-gradient(180deg, #fff3cf 0%, #ffdf79 100%) !important;
        border-color: #d4a017 !important;
        transform: scale(1.04) translateY(-3px) !important;
        box-shadow: 0 8px 18px rgba(212, 160, 23, 0.45), 0 0 16px rgba(255, 215, 0, 0.6) !important;
        color: #1a0f00 !important;
      }
      .scroll-btn:active {
        transform: translateY(1px);
      }
      .scroll-btn.correct {
        background: linear-gradient(180deg, #d4f7c5 0%, #8ee070 100%) !important;
        border-color: #2e7a16 !important;
        color: #0d3803 !important;
      }
      .scroll-btn.wrong {
        background: linear-gradient(180deg, #ffd4d4 0%, #e87b7b 100%) !important;
        border-color: #a81d1d !important;
        color: #4a0808 !important;
      }
      .scroll-feedback {
        min-height: 1.5rem;
        font-size: 0.88rem;
        font-weight: bold;
        color: #8c2612;
        letter-spacing: 0.05em;
      }
      .scroll-feedback.success {
        color: #1a6d14;
      }
      #quiz-gesture-hint {
        margin-top: 0.5rem;
        font-size: 0.82rem;
        color: #6e4c1f;
        font-style: italic;
        letter-spacing: 0.04em;
        background: rgba(160, 110, 45, 0.12);
        padding: 4px 10px;
        border-radius: 4px;
        display: inline-block;
      }
      @keyframes scrollShake {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-8px); }
        40%, 80% { transform: translateX(8px); }
      }
      .shake {
        animation: scrollShake 0.4s ease;
      }

      /* Glowing Gesture Finger Reticle Cursor */
      #quiz-gesture-cursor {
        position: fixed;
        top: 0;
        left: 0;
        width: 48px;
        height: 48px;
        margin-top: -24px;
        margin-left: -24px;
        pointer-events: none;
        z-index: 300;
        display: none;
        will-change: transform;
      }
      #quiz-gesture-cursor.visible {
        display: block;
      }
      .cursor-dot {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 14px;
        height: 14px;
        margin-top: -7px;
        margin-left: -7px;
        border-radius: 50%;
        background: radial-gradient(circle, #ffffff 10%, #ffd700 60%, #ff8800 100%);
        box-shadow: 0 0 16px #ffd700, 0 0 26px rgba(255, 215, 0, 0.9);
      }
      .cursor-ring {
        position: absolute;
        inset: 0;
        transform: rotate(-90deg);
      }
      .ring-bg {
        fill: none;
        stroke: rgba(255, 255, 255, 0.25);
        stroke-width: 3.5;
      }
      .ring-fill {
        fill: none;
        stroke: #22c55e;
        stroke-width: 4;
        stroke-dasharray: 113.1;
        stroke-dashoffset: 113.1;
        stroke-linecap: round;
        transition: stroke-dashoffset 0.04s linear;
      }

      /* Victory Banner */
      #victory-banner {
        position: fixed;
        inset: 0;
        z-index: 120;
        background: rgba(10, 18, 8, 0.78);
        backdrop-filter: blur(8px);
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #f7e8c8;
        font-family: 'Georgia', serif;
        text-align: center;
      }
      #victory-banner.visible {
        display: flex;
        animation: victoryFade 0.6s ease-out;
      }
      @keyframes victoryFade {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      #victory-banner h2 {
        font-size: clamp(2.2rem, 5vw, 3.8rem);
        color: #ffd700;
        text-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
        letter-spacing: 0.15em;
        margin-bottom: 0.5rem;
      }
      #victory-banner p {
        font-size: 1.2rem;
        color: #e8f0d8;
        margin-bottom: 2rem;
        letter-spacing: 0.1em;
      }
      #victory-restart {
        padding: 0.9rem 2.8rem;
        background: linear-gradient(180deg, #d4a017 0%, #8c6200 100%);
        border: 2px solid #ffec8b;
        color: #1a1000;
        font-family: inherit;
        font-size: 1.1rem;
        font-weight: bold;
        letter-spacing: 0.15em;
        border-radius: 6px;
        cursor: pointer;
        box-shadow: 0 0 25px rgba(255, 215, 0, 0.4);
        transition: transform 0.2s, box-shadow 0.2s;
      }
      #victory-restart:hover {
        transform: scale(1.05);
        box-shadow: 0 0 35px rgba(255, 215, 0, 0.7);
      }
    `,document.head.appendChild(e);const n=document.createElement("div");n.id="scroll-overlay",n.innerHTML=`
      <div id="parchment-scroll">
        <div class="scroll-roller top">
          <div class="scroll-knob"></div>
          <div class="scroll-knob"></div>
        </div>
        <div class="scroll-body">
          <div class="scroll-badge" id="scroll-badge">Question 1 / 5</div>
          <div class="scroll-title" id="scroll-title">DOOR 1: 5 RAPID FIRE QUESTIONS</div>
          <div class="scroll-question" id="scroll-question">Loading riddle...</div>
          <div class="scroll-options" id="scroll-options"></div>
          <div class="scroll-feedback" id="scroll-feedback"></div>
          <div id="quiz-gesture-hint">👉 Point your index finger at an answer to select it (or click)</div>
        </div>
        <div class="scroll-roller bottom">
          <div class="scroll-knob"></div>
          <div class="scroll-knob"></div>
        </div>
      </div>
      <div id="quiz-gesture-cursor">
        <div class="cursor-dot"></div>
        <svg class="cursor-ring" viewBox="0 0 44 44">
          <circle class="ring-bg" cx="22" cy="22" r="18" />
          <circle class="ring-fill" id="quiz-ring-fill" cx="22" cy="22" r="18" />
        </svg>
      </div>
    `,document.body.appendChild(n);const i=document.createElement("div");i.id="victory-banner",i.innerHTML=`
      <h2>🏆 VICTORY! 🏆</h2>
      <p>You have conquered the trials and claimed the Champion's Cup!</p>
      <button id="victory-restart">PLAY AGAIN</button>
    `,document.body.appendChild(i),this.container=n,this.scrollEl=n.querySelector("#parchment-scroll"),this.badgeEl=n.querySelector("#scroll-badge"),this.titleEl=n.querySelector("#scroll-title"),this.questionEl=n.querySelector("#scroll-question"),this.optionsEl=n.querySelector("#scroll-options"),this.feedbackEl=n.querySelector("#scroll-feedback"),this.cursorEl=n.querySelector("#quiz-gesture-cursor"),this.cursorRingFill=n.querySelector("#quiz-ring-fill"),i.querySelector("#victory-restart").addEventListener("click",()=>{window.location.reload()})}updateGesturePointer(e,n){if(!this.isOpen)return;const i=performance.now(),s=this.lastPointerTime>0?(i-this.lastPointerTime)/1e3:.016;if(this.lastPointerTime=i,this.cursorX===0&&this.cursorY===0?(this.cursorX=e,this.cursorY=n):(this.cursorX+=(e-this.cursorX)*.45,this.cursorY+=(n-this.cursorY)*.45),this.cursorEl&&(this.cursorEl.style.transform=`translate3d(${this.cursorX}px, ${this.cursorY}px, 0)`,this.cursorEl.classList.add("visible")),this.isAnswerLocked){this.clearHover();return}const r=Array.from(this.optionsEl.querySelectorAll(".scroll-btn:not([disabled])"));let a=null;for(const o of r){const c=o.getBoundingClientRect(),l=12;if(this.cursorX>=c.left-l&&this.cursorX<=c.right+l&&this.cursorY>=c.top-l&&this.cursorY<=c.bottom+l){a=o;break}}if(a)if(this.currentHoverBtn!==a)this.clearHover(),this.currentHoverBtn=a,a.classList.add("gesture-hover"),this.dwellTimer=0;else{this.dwellTimer+=s;const o=Math.min(1,this.dwellTimer/.85);this.cursorRingFill&&(this.cursorRingFill.style.strokeDashoffset=`${113.1*(1-o)}`),o>=1&&(this.isAnswerLocked=!0,this.dwellTimer=0,this.cursorRingFill&&(this.cursorRingFill.style.strokeDashoffset="113.1"),a.classList.remove("gesture-hover"),a.click(),setTimeout(()=>{this.isAnswerLocked=!1},1100))}else this.clearHover()}hideGesturePointer(){this.cursorEl&&this.cursorEl.classList.remove("visible"),this.clearHover()}clearHover(){this.currentHoverBtn&&(this.currentHoverBtn.classList.remove("gesture-hover"),this.currentHoverBtn=null),this.dwellTimer=0,this.cursorRingFill&&(this.cursorRingFill.style.strokeDashoffset="113.1")}showQuiz(e,n){this.isOpen||(this.activeDoorId=1,this.onCompleteCallback=n,this.currentQuestions=R3,this.currentIndex=0,this.isOpen=!0,this.isAnswerLocked=!1,this.dwellTimer=0,this.cursorX=window.innerWidth/2,this.cursorY=window.innerHeight*.45,this.titleEl.textContent="DOOR 1: 5 RAPID FIRE QUESTIONS",this.titleEl.style.color="#0e3a6c",this.container.classList.add("active"),this.renderCurrentQuestion())}renderCurrentQuestion(){const e=this.currentQuestions[this.currentIndex];this.badgeEl.textContent=`Question ${this.currentIndex+1} / ${this.currentQuestions.length}`,this.questionEl.textContent=`"${e.question}"`,this.feedbackEl.textContent="",this.feedbackEl.className="scroll-feedback",this.optionsEl.innerHTML="",this.clearHover(),e.options.forEach((n,i)=>{const s=document.createElement("button");s.className="scroll-btn",s.textContent=n,s.addEventListener("click",()=>this.handleAnswer(i,s)),this.optionsEl.appendChild(s)})}handleAnswer(e,n){const i=this.currentQuestions[this.currentIndex],s=e===i.correct,r=Array.from(this.optionsEl.querySelectorAll(".scroll-btn"));r.forEach(a=>a.disabled=!0),s?(n.classList.add("correct"),this.feedbackEl.textContent="✓ Correct!",this.feedbackEl.classList.add("success"),this.playChime(!0),setTimeout(()=>{this.currentIndex++,this.currentIndex<this.currentQuestions.length?this.renderCurrentQuestion():(this.badgeEl.textContent="5 / 5 COMPLETED!",this.questionEl.textContent="All 5 questions answered! Door 1 is opening...",this.optionsEl.innerHTML="",this.feedbackEl.textContent="★ DOOR 1 UNLOCKED ★",this.playFanfare(),setTimeout(()=>{this.closeQuiz(),this.onCompleteCallback&&this.activeDoorId!==null&&this.onCompleteCallback(this.activeDoorId)},1400))},700)):(n.classList.add("wrong"),this.scrollEl.classList.add("shake"),this.feedbackEl.textContent="✗ Incorrect. Try again!",this.playChime(!1),setTimeout(()=>{this.scrollEl.classList.remove("shake"),n.classList.remove("wrong"),r.forEach(a=>a.disabled=!1)},900))}closeQuiz(){this.isOpen=!1,this.container.classList.remove("active"),this.hideGesturePointer()}showVictory(){const e=document.getElementById("victory-banner");e&&e.classList.add("visible"),this.playVictoryTune()}playChime(e){try{const n=new(window.AudioContext||window.webkitAudioContext),i=n.createOscillator(),s=n.createGain();i.type=e?"sine":"sawtooth";const r=n.currentTime;e?(i.frequency.setValueAtTime(587.33,r),i.frequency.exponentialRampToValueAtTime(880,r+.15),s.gain.setValueAtTime(.2,r),s.gain.exponentialRampToValueAtTime(.001,r+.35)):(i.frequency.setValueAtTime(220,r),i.frequency.exponentialRampToValueAtTime(146.83,r+.25),s.gain.setValueAtTime(.25,r),s.gain.exponentialRampToValueAtTime(.001,r+.35)),i.connect(s),s.connect(n.destination),i.start(r),i.stop(r+.38)}catch{}}playFanfare(){try{const e=new(window.AudioContext||window.webkitAudioContext);[523.25,659.25,783.99,1046.5].forEach((i,s)=>{const r=e.createOscillator(),a=e.createGain();r.type="triangle";const o=e.currentTime+s*.14;r.frequency.setValueAtTime(i,o),a.gain.setValueAtTime(.25,o),a.gain.exponentialRampToValueAtTime(.001,o+.4),r.connect(a),a.connect(e.destination),r.start(o),r.stop(o+.45)})}catch{}}playVictoryTune(){try{const e=new(window.AudioContext||window.webkitAudioContext);[440,554.37,659.25,880,880,880,1108.73].forEach((i,s)=>{const r=e.createOscillator(),a=e.createGain();r.type="triangle";const o=e.currentTime+s*.22;r.frequency.setValueAtTime(i,o),a.gain.setValueAtTime(.3,o),a.gain.exponentialRampToValueAtTime(.001,o+.6),r.connect(a),a.connect(e.destination),r.start(o),r.stop(o+.65)})}catch{}}}class P3{constructor(){N(this,"container");N(this,"canvas");N(this,"ctx");N(this,"distLabel");N(this,"gateStatusLabel");N(this,"isExpanded",!1);N(this,"mapImg");N(this,"mapImgLoaded",!1);this.mapImg=new Image,this.mapImg.src="/map.jpg",this.mapImg.onload=()=>{this.mapImgLoaded=!0},this.createDom()}createDom(){const e=document.createElement("style");e.textContent=`
      #minimap-wrapper {
        position: fixed;
        top: 16px;
        right: 18px;
        z-index: 50;
        user-select: none;
        pointer-events: auto;
        font-family: Georgia, 'Times New Roman', serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.3s cubic-bezier(0.2, 0.9, 0.3, 1);
      }
      #minimap-frame {
        position: relative;
        width: 250px;
        height: 250px;
        border-radius: 12px;
        background: #08120a;
        border: 2.5px solid #d4af37;
        box-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 0 16px rgba(212, 175, 55, 0.35);
        overflow: hidden;
        cursor: pointer;
        transition: width 0.3s ease, height 0.3s ease;
      }
      #minimap-wrapper.expanded #minimap-frame {
        width: 440px;
        height: 440px;
        border-radius: 16px;
        box-shadow: 0 14px 40px rgba(0,0,0,0.9), 0 0 24px rgba(212, 175, 55, 0.45);
      }
      #minimap-canvas {
        width: 100%;
        height: 100%;
        display: block;
      }
      #minimap-title-bar {
        position: absolute;
        top: 6px;
        left: 8px;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 3px 8px;
        background: rgba(6, 14, 8, 0.75);
        border: 1px solid rgba(212, 175, 55, 0.45);
        border-radius: 6px;
        font-size: 10px;
        font-weight: bold;
        letter-spacing: 0.1em;
        color: #fce79f;
        text-shadow: 0 1px 3px rgba(0,0,0,0.9);
        pointer-events: none;
      }
      #minimap-compass {
        position: absolute;
        top: 6px;
        right: 8px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(6, 14, 8, 0.75);
        border: 1px solid rgba(212, 175, 55, 0.5);
        font-size: 10px;
        font-weight: bold;
        color: #ffd700;
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 0 1px 3px rgba(0,0,0,0.9);
        pointer-events: none;
      }
      #minimap-info {
        margin-top: 6px;
        padding: 4px 12px;
        border-radius: 12px;
        background: rgba(8, 16, 10, 0.85);
        border: 1px solid rgba(182, 146, 78, 0.5);
        color: #e2eccd;
        font-size: 11px;
        letter-spacing: 0.08em;
        display: flex;
        gap: 10px;
        align-items: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.6);
      }
      #minimap-cup-dist {
        color: #ffd700;
        font-weight: bold;
      }
      #minimap-gate-status {
        color: #a7f3d0;
      }
      #minimap-toggle-hint {
        color: #8c9e78;
        font-size: 10px;
        cursor: pointer;
      }
      #minimap-toggle-hint:hover {
        color: #d4af37;
      }
    `,document.head.appendChild(e);const n=document.createElement("div");n.id="minimap-wrapper",n.innerHTML=`
      <div id="minimap-frame" title="Click or press M to toggle map size">
        <canvas id="minimap-canvas" width="600" height="600"></canvas>
        <div id="minimap-title-bar">🗺️ FOREST MAP</div>
        <div id="minimap-compass">N</div>
      </div>
      <div id="minimap-info">
        <span>🏆 <span id="minimap-cup-dist">---m</span></span>
        <span id="minimap-gate-status">🔒 Doors Locked</span>
        <span id="minimap-toggle-hint">[M] Zoom</span>
      </div>
    `,document.body.appendChild(n),this.container=n,this.canvas=n.querySelector("#minimap-canvas"),this.ctx=this.canvas.getContext("2d"),this.distLabel=n.querySelector("#minimap-cup-dist"),this.gateStatusLabel=n.querySelector("#minimap-gate-status"),n.querySelector("#minimap-frame").addEventListener("click",()=>{this.toggleExpand()}),window.addEventListener("keydown",i=>{i.code==="KeyM"&&this.toggleExpand()})}toggleExpand(){this.isExpanded=!this.isExpanded,this.container.classList.toggle("expanded",this.isExpanded);const e=this.container.querySelector("#minimap-toggle-hint");e.textContent=this.isExpanded?"[M] Normal":"[M] Zoom"}worldToMapUV(e,n){if(n<=-25){const d=.54+Math.max(0,Math.min(1,(-25-n)/195))*(.16-.54);return{u:.5+e/20*.035,v:d}}if(e<0){if(n<=10)return{u:.332+Math.max(0,Math.min(1,(e- -12)/12))*(.5-.332),v:.54};if(e<-20&&n>55)return{u:.093+Math.max(0,Math.min(1,(e- -60)/40))*(.332-.093),v:.762};{const u=Math.max(0,Math.min(1,(85-n)/75)),d=.332+(e- -16)/20*.03,f=.762+u*(.54-.762);return{u:d,v:f}}}if(n<=10)return{u:.668-Math.max(0,Math.min(1,(12-e)/12))*(.668-.5),v:.54};if(e>20&&n>55)return{u:.907-Math.max(0,Math.min(1,(60-e)/40))*(.907-.668),v:.762};{const u=Math.max(0,Math.min(1,(85-n)/75)),d=.668+(e-16)/20*.03,f=.762+u*(.54-.762);return{u:d,v:f}}}update(e,n,i,s){const r=this.canvas.width,a=this.canvas.height,o=this.ctx;o.clearRect(0,0,r,a),this.mapImgLoaded?o.drawImage(this.mapImg,0,0,r,a):(o.fillStyle="#0f1d13",o.fillRect(0,0,r,a));const c=Math.round(e.distanceTo(Yn));this.distLabel.textContent=`${c}m`,i?(this.gateStatusLabel.textContent="Door 1 🔓 Open",this.gateStatusLabel.style.color="#34d399"):(this.gateStatusLabel.textContent="🔒 Door 1 Locked",this.gateStatusLabel.style.color="#fca5a5");const l=.332*r,h=.54*a;this.drawGateIndicator(o,l,h,i);const u=this.worldToMapUV(e.x,e.z),d=Nt.clamp(u.u*r,20,r-20),f=Nt.clamp(u.v*a,20,a-20),g=-n-Math.PI/2,v=performance.now()*.004,m=12+v%1*16,p=Math.max(0,1-v%1);o.save(),o.strokeStyle=`rgba(0, 255, 200, ${p*.8})`,o.lineWidth=2.5,o.beginPath(),o.arc(d,f,m,0,Math.PI*2),o.stroke();const x=38,S=.55,E=o.createRadialGradient(d,f,4,d,f,x);E.addColorStop(0,"rgba(0, 255, 200, 0.45)"),E.addColorStop(1,"rgba(0, 255, 200, 0.0)"),o.fillStyle=E,o.beginPath(),o.moveTo(d,f),o.arc(d,f,x,g-S,g+S),o.closePath(),o.fill(),o.translate(d,f),o.rotate(g),o.fillStyle="#ffffff",o.shadowColor="#00ffff",o.shadowBlur=10,o.beginPath(),o.moveTo(14,0),o.lineTo(-6,-7),o.lineTo(-2,0),o.lineTo(-6,7),o.closePath(),o.fill(),o.fillStyle=e.x<0?"#00b4d8":"#e63946",o.strokeStyle="#ffffff",o.lineWidth=2.5,o.shadowColor="#000000",o.shadowBlur=6,o.beginPath(),o.arc(0,0,7,0,Math.PI*2),o.fill(),o.stroke(),o.fillStyle="#ffffff",o.shadowBlur=0,o.beginPath(),o.arc(0,0,2.5,0,Math.PI*2),o.fill(),o.restore(),o.save();const w="YOU";o.font="bold 11px Arial, sans-serif";const T=o.measureText(w).width,C=f-18;o.fillStyle="rgba(6, 16, 10, 0.88)",o.strokeStyle="#ffd700",o.lineWidth=1.2,o.shadowColor="rgba(0,0,0,0.8)",o.shadowBlur=4;const R=4;o.beginPath(),o.roundRect(d-T/2-R,C-10,T+R*2,14,4),o.fill(),o.stroke(),o.fillStyle="#ffd700",o.textAlign="center",o.textBaseline="middle",o.fillText(w,d,C-3),o.restore()}drawGateIndicator(e,n,i,s){s&&(e.save(),e.shadowColor="#22c55e",e.shadowBlur=10,e.fillStyle="rgba(34, 197, 94, 0.35)",e.beginPath(),e.arc(n,i,14,0,Math.PI*2),e.fill(),e.fillStyle="#86efac",e.font="bold 13px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("🔓",n,i),e.restore())}}var or=typeof self<"u"?self:{};function M0(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=or,s=0;s<n.length;s++)if((i=i[n[s]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function Rt(t,e){t=t.split(".");for(var n,i=or;t.length&&(n=t.shift());)t.length||e===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=e}function Ws(){throw Error("Invalid UTF8")}function dp(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}var Hl,I3,Xo=void 0,L3=typeof TextDecoder<"u",B3=typeof TextEncoder<"u";function S0(t){if(B3)t=(I3||(I3=new TextEncoder)).encode(t);else{let n=0,i=new Uint8Array(3*t.length);for(let s=0;s<t.length;s++){var e=t.charCodeAt(s);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<t.length){let r=t.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}s--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function y0(t){or.setTimeout(()=>{throw t},0)}var U3=M0(610401301,!1),fp=M0(748402147,!0);function pp(){var t=or.navigator;return t&&(t=t.userAgent)?t:""}var Gu,mp=or.navigator;function Bc(t){return Bc[" "](t),t}Gu=mp&&mp.userAgentData||null,Bc[" "]=function(){};var w0={},Ha=null;function F3(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);var i=new Uint8Array(n),s=0;return(function(r,a){function o(l){for(;c<r.length;){let h=r.charAt(c++),u=Ha[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}T0();for(var c=0;;){let l=o(-1),h=o(0),u=o(64),d=o(64);if(d===64&&l===-1)break;a(l<<2|h>>4),u!=64&&(a(h<<4&240|u>>2),d!=64&&a(u<<6&192|d))}})(t,function(r){i[s++]=r}),s!==n?i.subarray(0,s):i}function T0(){if(!Ha){Ha={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=t.concat(e[n].split(""));w0[n]=i;for(let s=0;s<i.length;s++){let r=i[s];Ha[r]===void 0&&(Ha[r]=s)}}}}var O3=typeof Uint8Array<"u",b0=!(!(U3&&Gu&&Gu.brands.length>0)&&(pp().indexOf("Trident")!=-1||pp().indexOf("MSIE")!=-1))&&typeof btoa=="function",gp=/[-_.]/g,N3={"-":"+",_:"/",".":"="};function k3(t){return N3[t]||""}function C0(t){if(!b0)return F3(t);t=gp.test(t)?t.replace(gp,k3):t,t=atob(t);var e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Oh(t){return O3&&t!=null&&t instanceof Uint8Array}var ia={};function cr(){return z3||(z3=new Li(null,ia))}function Nh(t){R0(ia);var e=t.h;return(e=e==null||Oh(e)?e:typeof e=="string"?C0(e):null)==null?e:t.h=e}var z3,Li=class{i(){return new Uint8Array(Nh(this)||0)}constructor(t,e){if(R0(e),this.h=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};function R0(t){if(t!==ia)throw Error("illegal external caller")}function D0(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}var H3=void 0;function Ja(t){return D0(t=Error(t),"warning"),t}function sa(t,e){if(t!=null){var n=H3??(H3={}),i=n[t]||0;i>=e||(n[t]=i+1,D0(t=Error(),"incident"),y0(t))}}function mr(){return typeof BigInt=="function"}var va=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Oi(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var Is,G3=Oi("jas",void 0,!0),vp=Oi(void 0,"0di"),Fa=Oi(void 0,"1oa"),Zn=Oi(void 0,Symbol()),V3=Oi(void 0,"0ub"),W3=Oi(void 0,"0ubs"),Vu=Oi(void 0,"0ubsb"),X3=Oi(void 0,"0actk"),ra=Oi("m_m","lb",!0),xp=Oi(),P0={Wa:{value:0,configurable:!0,writable:!0,enumerable:!1}},I0=Object.defineProperties,ve=va?G3:"Wa",Ap=[];function so(t,e){va||ve in t||I0(t,P0),t[ve]|=e}function en(t,e){va||ve in t||I0(t,P0),t[ve]=e}function ro(t){return so(t,34),t}function $a(t){return so(t,8192),t}en(Ap,7),Is=Object.freeze(Ap);var aa={};function kn(t,e){return e===void 0?t.i!==lr&&!!(2&t.B[ve]):!!(2&e)&&t.i!==lr}var lr={};function Uc(t,e){if(t!=null){if(typeof t=="string")t=t?new Li(t,ia):cr();else if(t.constructor!==Li)if(Oh(t))t=t.length?new Li(new Uint8Array(t),ia):cr();else{if(!e)throw Error();t=void 0}}return t}class _p{constructor(e,n,i){this.h=e,this.i=n,this.l=i}next(){var e=this.h.next();return e.done||(e.value=this.i.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var Y3=Object.freeze({});function L0(t,e,n){var i,s=128&e?0:-1,r=t.length;(i=!!r)&&(i=(i=t[r-1])!=null&&typeof i=="object"&&i.constructor===Object);var a=r+(i?-1:0);for(e=128&e?1:0;e<a;e++)n(e-s,t[e]);if(i){t=t[r-1];for(let o in t)!isNaN(o)&&n(+o,t[o])}}var B0={};function xa(t){return 128&t?B0:void 0}function Fc(t){return t.jb=!0,t}var q3=Fc(t=>typeof t=="number"),Ep=Fc(t=>typeof t=="string"),Q3=Fc(t=>typeof t=="boolean"),Oc=typeof or.BigInt=="function"&&typeof or.BigInt(0)=="bigint";function jt(t){var e=t;if(Ep(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(q3(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Oc?BigInt(t):t=Q3(t)?t?"1":"0":Ep(t)?t.trim()||"0":String(t)}var Wu=Fc(t=>Oc?t>=K3&&t<=J3:t[0]==="-"?Mp(t,j3):Mp(t,Z3)),j3=Number.MIN_SAFE_INTEGER.toString(),K3=Oc?BigInt(Number.MIN_SAFE_INTEGER):void 0,Z3=Number.MAX_SAFE_INTEGER.toString(),J3=Oc?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Mp(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){let i=t[n],s=e[n];if(i>s)return!1;if(i<s)return!0}}var U0,$3=typeof Uint8Array.prototype.slice=="function",at=0,At=0;function Xu(t){var e=t>>>0;at=e,At=(t-e)/4294967296>>>0}function gr(t){if(t<0){Xu(-t);let[e,n]=Hh(at,At);at=e>>>0,At=n>>>0}else Xu(t)}function kh(t){var e=U0||(U0=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),At=0,at=e.getUint32(0,!0)}function F0(t,e){var n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:oa(t,e)}function ey(t,e){return jt(mr()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):oa(t,e))}function O0(t,e){return mr()?jt(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):jt(zh(t,e))}function oa(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else mr()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Sp(n)+Sp(t));return n}function Sp(t){return t=String(t),"0000000".slice(t.length)+t}function zh(t,e){if(2147483648&e)if(mr())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{let[n,i]=Hh(t,e);t="-"+oa(n,i)}else t=oa(t,e);return t}function ao(t){if(t.length<16)gr(Number(t));else if(mr())t=BigInt(t),at=Number(t&BigInt(4294967295))>>>0,At=Number(t>>BigInt(32)&BigInt(4294967295));else{let e=+(t[0]==="-");At=at=0;let n=t.length;for(let i=e,s=(n-e)%6+e;s<=n;i=s,s+=6){let r=Number(t.slice(i,s));At*=1e6,(at=1e6*at+r)>=4294967296&&(At+=Math.trunc(at/4294967296),At>>>=0,at>>>=0)}if(e){let[i,s]=Hh(at,At);at=i,At=s}}}function Hh(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function hi(t){return Array.prototype.slice.call(t)}var nr=typeof BigInt=="function"?BigInt.asIntN:void 0,Yu=typeof BigInt=="function"?BigInt.asUintN:void 0,Bi=Number.isSafeInteger,oo=Number.isFinite,Ds=Math.trunc,ty=jt(0);function N0(t){if(typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function jn(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function hc(t){if(typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}var ny=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Aa(t){switch(typeof t){case"bigint":return!0;case"number":return oo(t);case"string":return ny.test(t);default:return!1}}function is(t){if(t!=null){if(!oo(t))throw Ja("enum");t|=0}return t}function vr(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return oo(t)?0|t:void 0}function k0(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return oo(t)?t>>>0:void 0}function z0(t,e){if(e??(e=1024),!Aa(t))throw Ja("int64");var n=typeof t;switch(e){case 512:switch(n){case"string":return dc(t);case"bigint":return String(nr(64,t));default:return W0(t)}case 1024:switch(n){case"string":return X0(t);case"bigint":return jt(nr(64,t));default:return Y0(t)}case 0:switch(n){case"string":return dc(t);case"bigint":return jt(nr(64,t));default:return Nc(t)}default:return(function(i,s=`unexpected value ${i}!`){throw Error(s)})(e,"Unknown format requested type for int64")}}function H0(t){var e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(ao(t),zh(at,At))}function G0(t){if(t[0]==="-")var e=!1;else e=(e=t.length)<20||e===20&&t<="18446744073709551615";return e?t:(ao(t),oa(at,At))}function Nc(t){if(t=Ds(t),!Bi(t)){gr(t);var e=at,n=At;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=F0(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function V0(t){return(t=Ds(t))>=0&&Bi(t)||(gr(t),t=F0(at,At)),t}function W0(t){return t=Ds(t),Bi(t)?t=String(t):(gr(t),t=zh(at,At)),t}function dc(t){var e=Ds(Number(t));return Bi(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),H0(t))}function X0(t){var e=Ds(Number(t));return Bi(e)?jt(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),mr()?jt(nr(64,BigInt(t))):jt(H0(t)))}function Y0(t){return Bi(t)?jt(Nc(t)):jt(W0(t))}function fc(t){var e=typeof t;return t==null?t:e==="bigint"?jt(nr(64,t)):Aa(t)?e==="string"?X0(t):Y0(t):void 0}function Gh(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(nr(64,t));if(Aa(t)){if(e==="string")return dc(t);if(e==="number")return Nc(t)}}function q0(t){if(t==null||typeof t=="string"||t instanceof Li)return t}function Q0(t){if(typeof t!="string")throw Error();return t}function Ji(t){if(t!=null&&typeof t!="string")throw Error();return t}function An(t){return t==null||typeof t=="string"?t:void 0}function Vh(t,e,n,i){return t!=null&&t[ra]===aa?t:Array.isArray(t)?((i=(n=0|t[ve])|32&i|2&i)!==n&&en(t,i),new e(t)):(n?2&i?((t=e[vp])||(ro((t=new e).B),t=e[vp]=t),e=t):e=new e:e=void 0,e)}function iy(t,e,n){return(t=e?z0(t,1024):fc(t))==null?n?ty:void 0:t}function sy(t){return t}var ry={},ay=(function(){try{return Bc(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Gl{constructor(){this.h=new Map}get(e){return this.h.get(e)}set(e,n){return this.h.set(e,n),this.size=this.h.size,this}delete(e){return e=this.h.delete(e),this.size=this.h.size,e}clear(){this.h.clear(),this.size=this.h.size}has(e){return this.h.has(e)}entries(){return this.h.entries()}keys(){return this.h.keys()}values(){return this.h.values()}forEach(e,n){return this.h.forEach(e,n)}[Symbol.iterator](){return this.entries()}}var oy=ay?(Object.setPrototypeOf(Gl.prototype,Map.prototype),Object.defineProperties(Gl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Gl):class extends Map{constructor(){super()}};function yp(t){return t}function Vl(t){if(2&t.N)throw Error("Cannot mutate an immutable Map")}var cy,os=class extends oy{constructor(t,e,n=yp,i=yp){super(),this.N=0|t[ve],this.O=e,this.ca=n,this.oa=this.O?ly:i;for(let s=0;s<t.length;s++){let r=t[s],a=n(r[0],!1,!0),o=r[1];e?o===void 0&&(o=null):o=i(r[1],!1,!0,void 0,void 0,this.N),super.set(a,o)}}fa(t){return $a(Array.from(super.entries(),t))}clear(){Vl(this),super.clear()}delete(t){return Vl(this),super.delete(this.ca(t,!0,!1))}entries(){if(this.O){var t=super.keys();t=new _p(t,uy,this)}else t=super.entries();return t}values(){if(this.O){var t=super.keys();t=new _p(t,os.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.O?super.forEach((n,i,s)=>{t.call(e,s.get(i),i,s)}):super.forEach(t,e)}set(t,e){return Vl(this),(t=this.ca(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.oa(e,!0,!0,this.O,!1,this.N))}hb(t){var e=this.ca(t[0],!1,!0);t=t[1],t=this.O?t===void 0?null:t:this.oa(t,!1,!0,void 0,!1,this.N),super.set(e,t)}has(t){return super.has(this.ca(t,!1,!1))}get(t){t=this.ca(t,!1,!1);var e=super.get(t);if(e!==void 0){var n=this.O;return n?((n=this.oa(e,!1,!0,n,this.Ga,this.N))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function ly(t,e,n,i,s,r){return t=Vh(t,i,n,r),s&&(t=Xh(t)),t}function uy(t){return[t,this.get(t)]}function wp(){return cy||(cy=new os(ro([]),void 0,void 0,void 0,ry))}function kc(t){return Zn?t[Zn]:void 0}function pc(t,e){for(let n in t)!isNaN(n)&&e(t,+n,t[n])}os.prototype.toJSON=void 0;var hy,dy,qu=class{},fy={eb:!0};function py(t,e){e<100||sa(W3,1)}function zc(t,e,n,i){var s=i!==void 0;i=!!i;var r,a=Zn;!s&&va&&a&&(r=t[a])&&pc(r,py),a=[];var o=t.length;r=4294967295;var c=!1,l=!!(64&e),h=l?128&e?0:-1:void 0;if(!(1&e)){var u=o&&t[o-1];u!=null&&typeof u=="object"&&u.constructor===Object?r=--o:u=void 0,!l||128&e||s||(c=!0,r=sy(r-h,h,t,u,void 0)+h)}e=void 0;for(var d=0;d<o;d++){let f=t[d];if(f!=null&&(f=n(f,i))!=null)if(l&&d>=r){let g=d-h;(e??(e={}))[g]=f}else a[d]=f}if(u)for(let f in u){if((o=u[f])==null||(o=n(o,i))==null)continue;let g;d=+f,l&&!Number.isNaN(d)&&(g=d+h)<r?a[g]=o:(e??(e={}))[f]=o}return e&&(c?a.push(e):a[r]=e),s&&Zn&&(t=kc(t))&&t instanceof qu&&(a[Zn]=(function(f){var g=new qu;return pc(f,(v,m,p)=>{g[m]=hi(p)}),g.la=f.la,g})(t)),a}function my(t){return t[0]=eo(t[0]),t[1]=eo(t[1]),t}function eo(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Wu(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[ve];return t.length===0&&1&e?void 0:zc(t,e,eo)}if(t!=null&&t[ra]===aa)return j0(t);if(t instanceof Li){if((e=t.h)==null)t="";else if(typeof e=="string")t=e;else{if(b0){for(var n="",i=0,s=e.length-10240;i<s;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),T0(),n=w0[n],i=Array(Math.floor(e.length/3)),s=n[64]||"";let l=0,h=0;for(;l<e.length-2;l+=3){var r=e[l],a=e[l+1],o=e[l+2],c=n[r>>2];r=n[(3&r)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[h++]=c+r+a+o}switch(c=0,o=s,e.length-l){case 2:o=n[(15&(c=e[l+1]))<<2]||s;case 1:e=e[l],i[h]=n[e>>2]+n[(3&e)<<4|c>>4]+o+s}e=i.join("")}t=t.h=e}return t}return t instanceof os?t=t.size!==0?t.fa(my):void 0:void 0}return t}function j0(t){return zc(t=t.B,0|t[ve],eo)}function ir(t,e){return K0(t,e[0],e[1])}function K0(t,e,n,i=0){if(t==null){var s=32;n?(t=[n],s|=128):t=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(s=0|t[ve],fp&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(fp)throw Error("carr");sa(X3,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&en(t,s|i),t;if(n&&(s|=128,n!==t[0]))throw Error("mid");e:{s|=64;var r=(n=t).length;if(r){var a=r-1;let c=n[a];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((a-=e=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in c)(r=+o)<a&&(n[r+e]=c[o],delete c[o]);s=-16760833&s|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return en(t,64|s|i),t}function gy(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[ve];return t.length===0&&1&n?void 0:Tp(t,n,e)}if(t!=null&&t[ra]===aa)return bp(t);if(t instanceof os){if(2&(e=t.N))return t;if(!t.size)return;if(n=ro(t.fa()),t.O)for(t=0;t<n.length;t++){let i=n[t],s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[ra]===aa?bp(s):Array.isArray(s)?Tp(s,0|s[ve],!!(32&e)):void 0,i[1]=s}return n}return t instanceof Li?t:void 0}function Tp(t,e,n){return 2&e||(!n||4096&e||16&e?t=_a(t,e,!1,n&&!(16&e)):(so(t,34),4&e&&Object.freeze(t))),t}function Wh(t,e,n){return t=new t.constructor(e),n&&(t.i=lr),t.o=lr,t}function bp(t){var e=t.B,n=0|e[ve];return kn(t,n)?t:Yh(t,e,n)?Wh(t,e):_a(e,n)}function _a(t,e,n,i){return i??(i=!!(34&e)),t=zc(t,e,gy,i),i=32,n&&(i|=2),en(t,e=16769217&e|i),t}function Xh(t){var e=t.B,n=0|e[ve];return kn(t,n)?Yh(t,e,n)?Wh(t,e,!0):new t.constructor(_a(e,n,!1)):t}function Ea(t){if(t.i!==lr)return!1;var e=t.B;return so(e=_a(e,0|e[ve]),2048),t.B=e,t.i=void 0,t.o=void 0,!0}function xr(t){if(!Ea(t)&&kn(t,0|t.B[ve]))throw Error()}function Ls(t,e){e===void 0&&(e=0|t[ve]),32&e&&!(4096&e)&&en(t,4096|e)}function Yh(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(en(e,2|n),t.i=lr,!0)}var Z0=jt(0),Es={};function Bt(t,e,n,i){if((e=cs(t.B,e,void 0,i))!==null||n&&t.o!==lr)return e}function cs(t,e,n,i){if(e===-1)return null;var s=e+(n?0:-1),r=t.length-1;if(!(r<1+(n?0:-1))){if(s>=r){var a=t[r];if(a!=null&&typeof a=="object"&&a.constructor===Object){n=a[e];var o=!0}else{if(s!==r)return;n=a}}else n=t[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[s]=i,i}return n}}function We(t,e,n,i){xr(t);var s=t.B;return Xt(s,0|s[ve],e,n,i),t}function Xt(t,e,n,i,s){var r=n+(s?0:-1),a=t.length-1;if(a>=1+(s?0:-1)&&r>=a){let o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return r<=a?(t[r]=i,e):(i!==void 0&&(n>=(a=(e??(e=0|t[ve]))>>14&1023||536870912)?i!=null&&(t[a+(s?0:-1)]={[n]:i}):t[r]=i),e)}function J0(t,e,n,i){var s=t.B;return Jh(s,0|s[ve],e,t=ng(t,i)===n?n:-1)!==void 0}function $s(){return Y3===void 0?2:4}function er(t,e,n,i,s){var r=t.B,a=0|r[ve];i=kn(t,a)?1:i,s=!!s||i===3,i===2&&Ea(t)&&(a=0|(r=t.B)[ve]);var o=(t=qh(r,e))===Is?7:0|t[ve],c=Qh(o,a),l=!(4&c);if(l){4&c&&(t=hi(t),o=0,c=Ts(c,a),a=Xt(r,a,e,t));let h=0,u=0;for(;h<t.length;h++){let d=n(t[h]);d!=null&&(t[u++]=d)}u<h&&(t.length=u),n=-513&c|4,c=n&=-1025,c&=-4097}return c!==o&&(en(t,c),2&c&&Object.freeze(t)),$0(t,c,r,a,e,i,l,s)}function $0(t,e,n,i,s,r,a,o){var c=e;return r===1||r===4&&(2&e||!(16&e)&&32&i)?ws(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==c&&en(t,e),Object.freeze(t)):(r===2&&ws(e)&&(t=hi(t),c=0,e=Ts(e,i),i=Xt(n,i,s,t)),ws(e)||(o||(e|=16),e!==c&&en(t,e))),2&e||!(4096&e||16&e)||Ls(n,i),t}function qh(t,e,n){return t=cs(t,e,n),Array.isArray(t)?t:Is}function Qh(t,e){return 2&e&&(t|=2),1|t}function ws(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function eg(t){return Uc(t,!0)}function tg(t){t=hi(t);for(let e=0;e<t.length;e++){let n=t[e]=hi(t[e]);Array.isArray(n[1])&&(n[1]=ro(n[1]))}return $a(t)}function co(t,e,n,i){xr(t),Xt(t=t.B,0|t[ve],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Bs(t,e,n){if(2&e)throw Error();var i=xa(e),s=qh(t,n,i),r=s===Is?7:0|s[ve],a=Qh(r,e);return(2&a||ws(a)||16&a)&&(a===r||ws(a)||en(s,a),s=hi(s),r=0,a=Ts(a,e),Xt(t,e,n,s,i)),(a&=-13)!==r&&en(s,a),s}function ng(t,e){return Kh(jh(t=t.B),t,void 0,e)}function jh(t){if(va)return t[Fa]??(t[Fa]=new Map);if(Fa in t)return t[Fa];var e=new Map;return Object.defineProperty(t,Fa,{value:e}),e}function ig(t,e,n,i,s){var r=jh(t),a=Kh(r,t,e,n,s);return a!==i&&(a&&(e=Xt(t,e,a,void 0,s)),r.set(n,i)),e}function Kh(t,e,n,i,s){var r=t.get(i);if(r!=null)return r;r=0;for(let a=0;a<i.length;a++){let o=i[a];cs(e,o,s)!=null&&(r!==0&&(n=Xt(e,n,r,void 0,s)),r=o)}return t.set(i,r),r}function Zh(t,e,n){var i=0|t[ve],s=xa(i),r=cs(t,n,s);if(r!=null&&r[ra]===aa){if(!kn(r))return Ea(r),r.B;var a=r.B}else Array.isArray(r)&&(a=r);if(a){let o=0|a[ve];2&o&&(a=_a(a,o))}return(a=ir(a,e))!==r&&Xt(t,i,n,a,s),a}function Jh(t,e,n,i,s){var r=!1;if((i=cs(t,i,s,a=>{var o=Vh(a,n,!1,e);return r=o!==a&&o!=null,o}))!=null)return r&&!kn(i)&&Ls(t,e),i}function dt(t,e,n,i){var s=t.B,r=0|s[ve];if((e=Jh(s,r,e,n,i))==null)return e;if(!kn(t,r=0|s[ve])){let a=Xh(e);a!==e&&(Ea(t)&&(r=0|(s=t.B)[ve]),Ls(s,r=Xt(s,r,n,e=a,i)))}return e}function sg(t,e,n,i,s,r,a,o){var c=kn(t,n);r=c?1:r,a=!!a||r===3,c=o&&!c,(r===2||c)&&Ea(t)&&(n=0|(e=t.B)[ve]);var l=(t=qh(e,s))===Is?7:0|t[ve],h=Qh(l,n);if(o=!(4&h)){var u=t,d=n;let f=!!(2&h);f&&(d|=2);let g=!f,v=!0,m=0,p=0;for(;m<u.length;m++){let x=Vh(u[m],i,!1,d);if(x instanceof i){if(!f){let S=kn(x);g&&(g=!S),v&&(v=S)}u[p++]=x}}p<m&&(u.length=p),h|=4,h=v?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==l&&(en(t,h),2&h&&Object.freeze(t)),c&&!(8&h||!t.length&&(r===1||r===4&&(2&h||!(16&h)&&32&n)))){for(ws(h)&&(t=hi(t),h=Ts(h,n),n=Xt(e,n,s,t)),i=t,c=h,l=0;l<i.length;l++)(u=i[l])!==(h=Xh(u))&&(i[l]=h);c|=8,en(t,h=c=i.length?4096|c:-4097&c)}return $0(t,h,e,n,s,r,o,a)}function Ar(t,e,n){var i=t.B;return sg(t,i,0|i[ve],e,n,$s(),!1,!0)}function rg(t){return t==null&&(t=void 0),t}function Ce(t,e,n,i,s){return We(t,n,i=rg(i),s),i&&!kn(i)&&Ls(t.B),t}function Ei(t,e,n,i){e:{var s=i=rg(i);xr(t);let r=t.B,a=0|r[ve];if(s==null){let o=jh(r);if(Kh(o,r,a,n)!==e)break e;o.set(n,0)}else a=ig(r,a,n,e);Xt(r,a,e,s)}return i&&!kn(i)&&Ls(t.B),t}function Qu(t,e,n){xr(t);var i=t.B,s=0|i[ve];if(n==null)return Xt(i,s,e),t;var r=n===Is?7:0|n[ve],a=r,o=ws(r),c=o||Object.isFrozen(n),l=!0,h=!0;for(let d=0;d<n.length;d++){var u=n[d];o||(u=kn(u),l&&(l=!u),h&&(h=u))}return o||(r=l?13:5,r=h?-4097&r:4096|r),c&&r===a||(n=hi(n),a=0,r=Ts(r,s)),r!==a&&en(n,r),s=Xt(i,s,e,n),2&r||!(4096&r||16&r)||Ls(i,s),t}function Ts(t,e){return-273&(2&e?2|t:-3&t)}function to(t,e,n,i){var s=i;xr(t),t=sg(t,i=t.B,0|i[ve],n,e,2,!0),s=s??new n,t.push(s),e=n=t===Is?7:0|t[ve],(s=kn(s))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&en(t,n),s||Ls(i)}function ui(t,e,n){return vr(Bt(t,e,n))}function Dn(t,e){return Bt(t,e,void 0,jn)??0}function ju(t,e,n,i){return dt(t,e,n=ng(t,i)===n?n:-1,void 0)}function Ku(t,e){co(t,3,e==null?e:hc(e),!1)}function Ui(t,e,n){if(n!=null){if(typeof n!="number"||!oo(n))throw Ja("int32");n|=0}We(t,e,n)}function Wl(t,e,n){return We(t,e,n==null?n:z0(n))}function tc(t,e,n){return We(t,e,n==null?n:(function(i){if(!Aa(i))throw Ja("uint64");switch(typeof i){case"string":var s=Ds(Number(i));return Bi(s)&&s>=0?i=jt(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=mr()?jt(Yu(64,BigInt(i))):jt(G0(i))),i;case"bigint":return jt(Yu(64,i));default:return Bi(i)?i=jt(V0(i)):((i=Ds(i))>=0&&Bi(i)?i=String(i):(gr(i),i=oa(at,At)),i=jt(i)),i}})(n))}function Pe(t,e,n){We(t,e,n==null?n:N0(n))}function Wr(t,e,n){co(t,e,n==null?n:N0(n),0)}function Jn(t,e,n){co(t,e,Ji(n),"")}function mc(t,e,n){{xr(t);let a=t.B,o=0|a[ve];if(n==null)Xt(a,o,e);else{var i=t=n===Is?7:0|n[ve],s=ws(t),r=s||Object.isFrozen(n);for(s||(t=0),r||(n=hi(n),i=0,t=Ts(t,o),r=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,s=0;s<n.length;s++){let c=n[s],l=Q0(c);Object.is(c,l)||(r&&(n=hi(n),i=0,t=Ts(t,o),r=!1),n[s]=l)}t!==i&&(r&&(n=hi(n),t=Ts(t,o)),en(n,t)),Xt(a,o,e,n)}}}function Hc(t,e,n){xr(t),er(t,e,An,2,!0).push(Q0(n))}var kr=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.h=e}};function Gc(t,e){if(typeof t=="string")return new kr(C0(t),e);if(Array.isArray(t))return new kr(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new kr(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new kr(t,!1);if(t.constructor===Li)return e=Nh(t)||new Uint8Array(0),new kr(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new kr(t,!1);throw Error()}function $h(t,e){var n=0,i=0,s=0,r=t.i,a=t.h;do{var o=r[a++];n|=(127&o)<<s,s+=7}while(s<32&&128&o);if(s>32)for(i|=(127&o)>>4,s=3;s<32&&128&o;s+=7)i|=(127&(o=r[a++]))<<s;if(sr(t,a),!(128&o))return e(n>>>0,i>>>0);throw Error()}function ed(t){for(var e=0,n=t.h,i=n+10,s=t.i;n<i;){let r=s[n++];if(e|=r,!(128&r))return sr(t,n),!!(127&e)}throw Error()}function ls(t){var e=t.i,n=t.h,i=e[n++],s=127&i;if(128&i&&(s|=(127&(i=e[n++]))<<7,128&i&&(s|=(127&(i=e[n++]))<<14,128&i&&(s|=(127&(i=e[n++]))<<21,128&i&&(s|=(i=e[n++])<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return sr(t,n),s}function Fi(t){return ls(t)>>>0}function gc(t){return $h(t,O0)}function Zu(t){var e=t.i,n=t.h,i=e[n],s=e[n+1],r=e[n+2];return e=e[n+3],sr(t,t.h+4),(i|s<<8|r<<16|e<<24)>>>0}function vc(t){var e=Zu(t);t=2*(e>>31)+1;var n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function vy(t){return ls(t)}function sr(t,e){if(t.h=e,e>t.l)throw Error()}function ag(t,e){if(e<0)throw Error();var n=t.h;if((e=n+e)>t.l)throw Error();return t.h=e,n}function og(t,e){if(e==0)return cr();var n=ag(t,e);return t.ga&&t.u?n=t.i.subarray(n,n+e):(t=t.i,n=n===(e=n+e)?new Uint8Array(0):$3?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?cr():new Li(n,ia)}var xy=class{constructor(t,e,n,i){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.init(t,e,n,i)}init(t,e,n,{ga:i=!1,na:s=!1}={}){this.ga=i,this.na=s,t&&(t=Gc(t,this.na),this.i=t.buffer,this.u=t.h,this.o=e||0,this.l=n!==void 0?this.o+n:this.i.length,this.h=this.o)}clear(){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.ga=!1}},Cp=[],ca=0;function cg(t,e,n,i){if(xc.length){let s=xc.pop();return s.A(i),s.h.init(t,e,n,i),s}return new Ay(t,e,n,i)}function lg(t){t.h.clear(),t.l=-1,t.i=-1,xc.length<100&&xc.push(t)}function ug(t){var e=t.h;if(e.h==e.l)return!1;t.o=t.h.h;var n=Fi(t.h);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.i=n,!0}function nc(t){try{switch(t.i){case 0:t.i!=0?nc(t):ed(t.h);break;case 1:var e=t.h;sr(e,e.h+8);break;case 2:if(t.i!=2)nc(t);else{var n=Fi(t.h),i=t.h;sr(i,i.h+n)}break;case 5:var s=t.h;sr(s,s.h+4);break;case 3:hg();let r=t.l;try{for(;;){if(!ug(t))throw Error();if(t.i==4){if(t.l!=r)throw Error();break}nc(t)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{ca>0&&ca--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function hg(){if(ca>=100)throw new SyntaxError;ca++}function lo(t,e,n){var i=t.h.l,s=Fi(t.h),r=(s=t.h.h+s)-i;if(r<=0&&(t.h.l=s,n(e,t,void 0,void 0,void 0),r=s-t.h.h),r)throw Error();return t.h.h=s,t.h.l=i,e}function td(t){var e=Fi(t.h),n=ag(t=t.h,e);if(t=t.i,L3){var i,s=t;(i=Hl)||(i=Hl=new TextDecoder("utf-8",{fatal:!0})),e=n+e,s=n===0&&e===s.length?s:s.subarray(n,e);try{var r=i.decode(s)}catch(o){if(Xo===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Xo=!0}catch{Xo=!1}}throw!Xo&&(Hl=void 0),o}}else{e=(r=n)+e,n=[];let o,c=null;for(;r<e;){var a=t[r++];a<128?n.push(a):a<224?r>=e?Ws():(o=t[r++],a<194||(192&o)!=128?(r--,Ws()):n.push((31&a)<<6|63&o)):a<240?r>=e-1?Ws():(o=t[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[r++]))!=128?(r--,Ws()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?r>=e-2?Ws():(o=t[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=t[r++]))!=128||(192&(s=t[r++]))!=128?(r--,Ws()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&s,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):Ws(),n.length>=8192&&(c=dp(c,n),n.length=0)}r=dp(c,n)}return r}function nd(t){var e=Fi(t.h);return og(t.h,e)}function uo(t,e,n){var i=Fi(t.h);for(i=t.h.h+i;t.h.h<i;)n.push(e(t.h))}var Ay=class{constructor(t,e,n,i){if(Cp.length){let s=Cp.pop();s.init(t,e,n,i),t=s}else t=new xy(t,e,n,i);this.h=t,this.o=this.h.h,this.i=this.l=-1,this.A(i)}A({sa:t=!1}={}){this.sa=t}},xc=[];function _y(t){return new Ac(4294967295&t,Math.floor(t/4294967296))}function Rp(t){return t?/^\d+$/.test(t)?(ao(t),new Ac(at,At)):null:Ey||(Ey=new Ac(0,0))}var Ey,Ac=class{constructor(t,e){this.i=t>>>0,this.h=e>>>0}};function My(t){return new _c(4294967295&t,Math.floor(t/4294967296))}function dg(t){return t?/^-?\d+$/.test(t)?(ao(t),new _c(at,At)):null:Sy||(Sy=new _c(0,0))}var Sy,Dp,Pp,Ip,Xl,Lp,Oa,Yo,_c=class{constructor(t,e){this.i=t>>>0,this.h=e>>>0}};function fg(t,e,n){return typeof BigInt64Array<"u"?(Oa||(Oa=new BigInt64Array(1),Yo=new Uint32Array(Oa.buffer),Oa[0]=BigInt(1),Lp=Yo[0]===1),Oa[0]=t,new e(Yo[t=Lp?0:1],Yo[1-t])):(Xl||(Dp=BigInt(Number.MIN_SAFE_INTEGER),Pp=BigInt(Number.MAX_SAFE_INTEGER),Ip=BigInt(4294967295),Xl=BigInt(32)),t>=Dp&&t<=Pp?n(Number(t)):(t=BigInt.asUintN(64,t),new e(Number(t&Ip),Number(t>>Xl))))}function ss(t,e,n){for(;n>0||e>127;)t.h.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.h.push(e)}function Ma(t,e){for(;e>127;)t.h.push(127&e|128),e>>>=7;t.h.push(e)}function ho(t,e){if(e>=0)Ma(t,e);else{for(let n=0;n<9;n++)t.h.push(127&e|128),e>>=7;t.h.push(1)}}function yy(t,e){ao(e),(function(n){var i=At>>31;n(at<<1^i,(At<<1|at>>>31)^i)})((n,i)=>{ss(t,n>>>0,i>>>0)})}function no(t,e){t.h.push(e>>>0&255),t.h.push(e>>>8&255),t.h.push(e>>>16&255),t.h.push(e>>>24&255)}var wy=class{constructor(){this.h=[]}length(){return this.h.length}end(){var t=this.h;return this.h=[],t}};function la(t,e){e.length!==0&&(t.l.push(e),t.i+=e.length)}function Pn(t,e,n){Ma(t.h,8*e+n)}function id(t,e){return Pn(t,e,2),e=t.h.end(),la(t,e),e.push(t.i),e}function sd(t,e){var n=e.pop();for(n=t.i+t.h.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.i++;e.push(n),t.i++}function pg(t,e,n){if(n!=null)switch(Pn(t,e,0),typeof n){case"number":t=t.h,gr(n),ss(t,at,At);break;case"bigint":n=fg(n,_c,My),ss(t.h,n.i,n.h);break;default:n=dg(n),ss(t.h,n.i,n.h)}}function fo(t,e,n){Pn(t,e,2),Ma(t.h,n.length),la(t,t.h.end()),la(t,n)}function Ec(t,e,n,i){n!=null&&(e=id(t,e),i(n,t),sd(t,e))}var Ty=class{constructor(){this.l=[],this.i=0,this.h=new wy}};function mg(t){typeof t=="string"&&dg(t)}function pi(){var t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var rd=pi(),gg=pi(),ad=pi(),Vc=pi(),od=pi(),Wc=pi(),by=pi(),Cy=pi(),Xc=pi(),Ry=pi(),Yc=pi(),cd=pi();function Ni(t,e,n){var i=t.B;Zn&&Zn in i&&(i=i[Zn])&&delete i[e.h],e.i?e.u(t,e.i,e.h,n,e.l):e.u(t,e.h,n,e.l)}var le=class{constructor(t,e){this.B=K0(t,e,void 0,2048)}toJSON(){return j0(this)}u(){var t=xw,e=this.B,n=t.h,i=Zn;if(va&&i&&e[i]?.[n]!=null&&sa(V3,3),e=t.h,xp&&Zn&&xp===void 0&&(i=(n=this.B)[Zn])&&(i=i.la))try{i(n,e,fy)}catch(s){y0(s)}return t.i?t.o(this,t.i,t.h,t.l):t.o(this,t.h,t.defaultValue,t.l)}clone(){var t=this.B,e=0|t[ve];return Yh(this,t,e)?Wh(this,t,!0):new this.constructor(_a(t,e,!1))}};le.prototype[ra]=aa,le.prototype.toString=function(){return this.B.toString()};var Sa=class{constructor(t,e,n){this.h=t,this.i=e,t=rd,this.l=!!t&&n===t||!1}};function qc(t,e){return new Sa(t,e,rd)}function vg(t,e,n,i,s){Ec(t,n,Eg(e,i),s)}var xg,Ag,Dy=qc(function(t,e,n,i,s){return t.i===2&&(lo(t,Zh(e,i,n),s),!0)},vg),Py=qc(function(t,e,n,i,s){return t.i===2&&(lo(t,Zh(e,i,n),s),!0)},vg),Qc=Symbol(),jc=Symbol(),Ju=Symbol(),Bp=Symbol(),Up=Symbol();function _r(t,e,n,i){var s=i[t];if(s)return s;(s={}).Fa=i,s.da=(function(u){switch(typeof u){case"boolean":return hy||(hy=[0,void 0,!0]);case"number":return u>0?void 0:u===0?dy||(dy=[0,void 0]):[-u,void 0];case"string":return[0,u];case"object":return u}})(i[0]);var r=i[1],a=1;r&&r.constructor===Object&&(s.ja=r,typeof(r=i[++a])=="function"&&(s.xa=!0,xg??(xg=r),Ag??(Ag=i[a+1]),r=i[a+=2]));for(var o={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)o[r[c]]=r;r=i[++a]}for(c=1;r!==void 0;){let u;typeof r=="number"&&(c+=r,r=i[++a]);var l=void 0;if(r instanceof Sa?u=r:(u=Dy,a--),u?.l){r=i[++a],l=i;var h=a;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++a])=="number"&&r<0&&(h-=r,r=i[++a]);c<h;c++){let d=o[c];l?n(s,c,u,l,d):e(s,c,u,d)}}return i[t]=s}function _g(t){return Array.isArray(t)?t[0]instanceof Sa?t:[Py,t]:[t,void 0]}function Eg(t,e){return t instanceof le?t.B:Array.isArray(t)?ir(t,e):void 0}function ld(t,e,n,i){var s=n.h;t[e]=i?(r,a,o)=>s(r,a,o,i):s}function ud(t,e,n,i,s){var r,a,o=n.h;t[e]=(c,l,h)=>o(c,l,h,a||(a=_r(jc,ld,ud,i).da),r||(r=hd(i)),s)}function hd(t){var e=t[Ju];if(e!=null)return e;var n=_r(jc,ld,ud,t);return e=n.xa?(i,s)=>xg(i,s,n):(i,s)=>{e:{hg();try{for(;ug(s)&&s.i!=4;){let d=s.l,f=n[d];if(f==null){let g=n.ja;if(g){let v=g[d];if(v){let m=Ly(v);m!=null&&(f=n[d]=m)}}}if(f==null||!f(s,i,d)){var r=s;let g=r.o;if(nc(r),r.sa)var a=void 0;else{let v=r.h.h-g;r.h.h=g,a=og(r.h,v)}r=void 0;var o=i,c=d,l=a;l&&((r=o[Zn]??(o[Zn]=new qu))[c]??(r[c]=[])).push(l)}}let u=kc(i);u&&(u.la=n.Fa[Up]);var h=!0;break e}catch(u){throw u instanceof RangeError?new SyntaxError:u}finally{ca>0&&ca--}h=void 0}return h},t[Ju]=e,t[Up]=Iy.bind(t),e}function Iy(t,e,n,i){var s=this[jc],r=this[Ju],a=ir(void 0,s.da),o=kc(t);if(o){var c=!1,l=s.ja;if(l){if(s=(h,u,d)=>{if(d.length!==0)if(l[u])for(let f of d){h=cg(f);try{c=!0,r(a,h)}finally{lg(h)}}else i?.(t,u,d)},e==null)pc(o,s);else if(o!=null){let h=o[e];h&&s(o,e,h)}if(c){let h=0|t[ve];if(2&h&&2048&h&&!n?.eb)throw Error();let u=xa(h),d=(f,g)=>{if(cs(t,f,u)!=null){if(n?.mb===1)return;throw Error()}g!=null&&(h=Xt(t,h,f,g,u)),delete o[f]};e==null?L0(a,0|a[ve],(f,g)=>{d(f,g)}):d(e,cs(a,e,u))}}}}function Ly(t){var e=(t=_g(t))[0].h;if(t=t[1]){let n=hd(t),i=_r(jc,ld,ud,t).da;return(s,r,a)=>e(s,r,a,i,n)}return e}function Kc(t,e,n){t[e]=n.i}function Zc(t,e,n,i){var s,r,a=n.i;t[e]=(o,c,l)=>a(o,c,l,r||(r=_r(Qc,Kc,Zc,i).da),s||(s=Mg(i)))}function Mg(t){var e=t[Bp];if(!e){let n=_r(Qc,Kc,Zc,t);e=(i,s)=>Sg(i,s,n),t[Bp]=e}return e}function Sg(t,e,n){L0(t,0|t[ve],(i,s)=>{if(s!=null){var r=(function(a,o){var c=a[o];if(c)return c;if((c=a.ja)&&(c=c[o])){var l=(c=_g(c))[0].i;if(c=c[1]){let h=Mg(c),u=_r(Qc,Kc,Zc,c).da;c=a.xa?Ag(u,h):(d,f,g)=>l(d,f,g,u,h)}else c=l;return a[o]=c}})(n,i);r?r(e,s,i):i<500||sa(Vu,3)}}),(t=kc(t))&&pc(t,(i,s,r)=>{for(la(e,e.h.end()),i=0;i<r.length;i++)la(e,Nh(r[i])||new Uint8Array(0))})}var By=jt(0);function hs(t,e,n){if(Array.isArray(e)){var i=0|e[ve];if(4&i)return e;for(var s=0,r=0;s<e.length;s++){let a=t(e[s]);a!=null&&(e[r++]=a)}return r<s&&(e.length=r),t=1|i,n&&(t=-1537&t|4),t!==i&&en(e,t),n&&2&t&&Object.freeze(e),e}}var yg=(t,e)=>{var n=new Ty;Sg(t.B,n,_r(Qc,Kc,Zc,e)),la(n,n.h.end()),t=new Uint8Array(n.i);var i=(e=n.l).length,s=0;for(let r=0;r<i;r++){let a=e[r];t.set(a,s),s+=a.length}return n.l=[t],t};function qt(t,e,n){return new Sa(t,e,n)}function ds(t,e,n){return new Sa(t,e,n)}function ln(t,e,n){Xt(t,0|t[ve],e,n,xa(0|t[ve]))}var Uy=qc(function(t,e,n,i,s){if(t.i!==2)return!1;if(t=hi(t=lo(t,ir([void 0,void 0],i),s)),s=xa(i=0|e[ve]),2&i)throw Error();var r=cs(e,n,s);if(r instanceof os)2&r.N?((r=r.fa()).push(t),Xt(e,i,n,r,s)):r.hb(t);else if(Array.isArray(r)){var a=0|r[ve];8192&a||en(r,a|=8192),2&a&&Xt(e,i,n,r=tg(r),s),r.push(t)}else Xt(e,i,n,$a([t]),s);return!0},function(t,e,n,i,s){if(e instanceof os)e.forEach((r,a)=>{Ec(t,n,ir([a,r],i),s)});else if(Array.isArray(e)){for(let r=0;r<e.length;r++){let a=e[r];Array.isArray(a)&&Ec(t,n,ir(a,i),s)}$a(e)}});function wg(t,e,n){(e=jn(e))!=null&&(Pn(t,n,5),t=t.h,kh(e),no(t,at))}function dd(t,e,n){(e=Gh(e))!=null&&(mg(e),pg(t,n,e))}function Tg(t,e,n){(e=vr(e))!=null&&e!=null&&(Pn(t,n,0),ho(t.h,e))}function bg(t,e,n){(e=e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0)!=null&&(Pn(t,n,0),t.h.h.push(e?1:0))}function Cg(t,e,n){(e=An(e))!=null&&fo(t,n,S0(e))}function Rg(t,e,n,i,s){Ec(t,n,Eg(e,i),s)}function fd(t,e,n){(e=q0(e))!=null&&fo(t,n,Gc(e,!0).buffer)}function Dg(t,e,n){(e=k0(e))!=null&&e!=null&&(Pn(t,n,0),Ma(t.h,e))}function Pg(t,e,n){(e=vr(e))!=null&&(e=parseInt(e,10),Pn(t,n,0),ho(t.h,e))}function Ig(t,e,n){return(t.i===5||t.i===2)&&(e=Bs(e,0|e[ve],n),t.i==2?uo(t,vc,e):e.push(vc(t.h)),!0)}function Lg(t,e,n){return t.i===0&&(ln(e,n,gc(t.h)),!0)}function Bg(t,e,n){return(t.i===0||t.i===2)&&(e=Bs(e,0|e[ve],n),t.i==2?uo(t,ls,e):e.push(ls(t.h)),!0)}function Ug(t,e,n){return t.i===2&&(ln(e,n,(t=nd(t))===cr()?void 0:t),!0)}var Fp=qt(function(t,e,n){if(t.i!==1)return!1;var i=t.h;t=Zu(i);var s=Zu(i);i=2*(s>>31)+1;var r=s>>>20&2047;return t=4294967296*(1048575&s)+t,ln(e,n,r==2047?t?NaN:i*(1/0):r==0?5e-324*i*t:i*Math.pow(2,r-1075)*(t+4503599627370496)),!0},function(t,e,n){(e=jn(e))!=null&&(Pn(t,n,1),t=t.h,(n=U0||(U0=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),at=n.getUint32(0,!0),At=n.getUint32(4,!0),no(t,at),no(t,At))},Ry),Gt=qt(function(t,e,n){return t.i===5&&(ln(e,n,vc(t.h)),!0)},wg,Xc),Fy=ds(Ig,function(t,e,n){if((e=hs(jn,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(Pn(i,s,5),i=i.h,kh(r),no(i,at))}},Xc),pd=ds(Ig,function(t,e,n){if((e=hs(jn,e,!0))!=null&&e.length){Pn(t,n,2),Ma(t.h,4*e.length);for(let i=0;i<e.length;i++)n=t.h,kh(e[i]),no(n,at)}},Xc),Fg=qt(function(t,e,n){return t.i===5&&(ln(e,n,(t=vc(t.h))===0?void 0:t),!0)},wg,Xc),Na=qt(function(t,e,n){return Lg(t,e,n)},dd,Wc),Ct=qt(function(t,e,n){return Lg(t,e,n)},dd,Wc),Oy=ds(function(t,e,n){return t.i!==0&&t.i!==2?t=!1:(e=Bs(e,0|e[ve],n),t.i==2?uo(t,gc,e):e.push(gc(t.h)),t=!0),t},function(t,e,n){if((e=hs(Gh,e,!1))!=null)for(let i=0;i<e.length;i++)pg(t,n,e[i])},Wc),ic=qt(function(t,e,n){return t.i!==0?e=!1:(ln(e,n,(t=gc(t.h))===By?void 0:t),e=!0),e},dd,Wc),Mc=qt(function(t,e,n){return t.i!==0?t=!1:(ln(e,n,$h(t.h,ey)),t=!0),t},function(t,e,n){if(e=(function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(Yu(64,i));if(Aa(i)){if(s==="string")return s=Ds(Number(i)),Bi(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=G0(i)),i;if(s==="number")return V0(i)}})(e),e!=null&&(typeof e=="string"&&Rp(e),e!=null))switch(Pn(t,n,0),typeof e){case"number":t=t.h,gr(e),ss(t,at,At);break;case"bigint":n=fg(e,Ac,_y),ss(t.h,n.i,n.h);break;default:n=Rp(e),ss(t.h,n.i,n.h)}},by),st=qt(function(t,e,n){return t.i===0&&(ln(e,n,ls(t.h)),!0)},Tg,Vc),Op=ds(Bg,function(t,e,n){if((e=hs(vr,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(Pn(i,s,0),ho(i.h,r))}},Vc),ya=ds(Bg,function(t,e,n){if((e=hs(vr,e,!0))!=null&&e.length){n=id(t,n);for(let i=0;i<e.length;i++)ho(t.h,e[i]);sd(t,n)}},Vc),tr=qt(function(t,e,n){return t.i===0&&(ln(e,n,(t=ls(t.h))===0?void 0:t),!0)},Tg,Vc),Qe=qt(function(t,e,n){return t.i===0&&(ln(e,n,ed(t.h)),!0)},bg,gg),bs=qt(function(t,e,n){return t.i===0&&(ln(e,n,(t=ed(t.h))===!1?void 0:t),!0)},bg,gg),fn=ds(function(t,e,n){return t.i===2&&(t=td(t),Bs(e,0|e[ve],n).push(t),!0)},function(t,e,n){if((e=hs(An,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&fo(i,s,S0(r))}},ad),Ki=qt(function(t,e,n){return t.i===2&&(ln(e,n,(t=td(t))===""?void 0:t),!0)},Cg,ad),se=qt(function(t,e,n){return t.i===2&&(ln(e,n,td(t)),!0)},Cg,ad),Tt=(function(t,e,n=rd){return new Sa(t,e,n)})(function(t,e,n,i,s){return t.i===2&&(i=ir(void 0,i),Bs(e,0|e[ve],n).push(i),lo(t,i,s),!0)},function(t,e,n,i,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)Rg(t,e[r],n,i,s);1&(t=0|e[ve])||en(e,1|t)}}),nt=qc(function(t,e,n,i,s,r){if(t.i!==2)return!1;var a=0|e[ve];return ig(e,a,r,n,xa(a)),lo(t,e=Zh(e,i,n),s),!0},Rg),Qr=qt(function(t,e,n){return t.i===2&&(ln(e,n,nd(t)),!0)},fd,Yc),Og=ds(function(t,e,n){return t.i===2&&(t=nd(t),Bs(e,0|e[ve],n).push(t),!0)},function(t,e,n){if((e=hs(q0,e,!1))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&fo(i,s,Gc(r,!0).buffer)}},Yc),Ng=qt(function(t,e,n){return t.i===0&&(ln(e,n,Fi(t.h)),!0)},Dg,od),Ny=ds(function(t,e,n){return(t.i===0||t.i===2)&&(e=Bs(e,0|e[ve],n),t.i==2?uo(t,Fi,e):e.push(Fi(t.h)),!0)},function(t,e,n){if((e=hs(k0,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(Pn(i,s,0),Ma(i.h,r))}},od),ky=qt(function(t,e,n){return t.i===0&&(ln(e,n,(t=Fi(t.h))===0?void 0:t),!0)},Dg,od),_e=qt(function(t,e,n){return t.i===0&&(ln(e,n,ls(t.h)),!0)},Pg,cd),sc=qt(function(t,e,n){return t.i===0&&(ln(e,n,(t=ls(t.h))===0?void 0:t),!0)},Pg,cd),zy=qt(function(t,e,n){return t.i!==0?t=!1:(ln(e,n,(function(i){return $h(i,(s,r)=>{var a=-(1&s);return O0(s=(s>>>1|r<<31)^a,r>>>1^a)})})(t.h)),t=!0),t},function(t,e,n){if((e=Gh(e))!=null&&(mg(e),e!=null))switch(Pn(t,n,0),typeof e){case"number":t=t.h,e=(n=e)<0,Xu(n=2*Math.abs(n)),n=at;let i=At;e&&(n==0?i==0?i=n=4294967295:(i--,n=4294967295):n--),ss(t,at=n,At=i);break;case"bigint":t=t.h,e=e<<BigInt(1)^e>>BigInt(63),at=Number(BigInt.asUintN(32,e)),At=Number(BigInt.asUintN(32,e>>BigInt(32))),ss(t,at,At);break;default:yy(t.h,e)}},Cy);class Hy{constructor(e,n){var i=ti;this.h=e,this.i=n,this.o=dt,this.u=Ce,this.defaultValue=void 0,this.l=i.kb!=null?B0:void 0}register(){Bc(this)}}function ki(t,e){return new Hy(t,e)}function Us(t,e){return(n,i)=>{e:{let r={na:!0};i&&Object.assign(r,i),n=cg(n,void 0,void 0,r);try{let a=new t,o=a.B;hd(e)(o,n);var s=a;break e}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{lg(n)}s=void 0}return s}}function md(t){return e=>yg(e,t)}function po(t){return function(){return yg(this,t)}}var Gy=[0,Qr,Og,Qe,se],Vy=[0,Ki,[0,sc,[0,ic,tr],sc,-1,[0,_e],sc,-1],qt(Ug,fd,Yc)],Yl,Np=class extends le{constructor(t){super(t)}},kp=[0,Ki,qt(Ug,function(t,e,n){if(e!=null){if(e instanceof le){let i=e.nb;return void(i?(e=i(e),e!=null&&fo(t,n,Gc(e,!0).buffer)):sa(Vu,3))}if(Array.isArray(e))return void sa(Vu,3)}fd(t,e,n)},Yc)],Wy=[0,1,[0,12,st,10,Qe],[0,7,[0,st,-1]]],zp=globalThis.trustedTypes,Xy=class{constructor(t){this.h=t}toString(){return this.h+""}};function Hp(t){var e;return Yl===void 0&&(Yl=(function(){var n=null;if(!zp)return n;try{let i=s=>s;n=zp.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=Yl)?e.createScriptURL(t):t,new Xy(t)}function Xs(t,...e){if(e.length===0)return Hp(t[0]);var n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return Hp(n)}var kg=[0,st,_e,Qe,-1,ya,_e,-1,Qe,-1],zg=[0,_e,-1,Qe],gd=class extends le{constructor(t){super(t)}},Hg=[0,Qe,se,Qe,_e,-1,ds(function(t,e,n){return(t.i===0||t.i===2)&&(e=Bs(e,0|e[ve],n),t.i==2?uo(t,vy,e):e.push(ls(t.h)),!0)},function(t,e,n){if((e=hs(vr,e,!0))!=null&&e.length){n=id(t,n);for(let i=0;i<e.length;i++)ho(t.h,e[i]);sd(t,n)}},cd),se,-1,[0,Qe,-1],_e,Qe,-1,zg],Yy=class extends le{constructor(t){super(t)}},Gg=class extends le{constructor(t){super(t)}},Vg=class extends le{constructor(t){super(t)}h(){var t=this.B;return Jh(t,0|t[ve],Gg,9)!==void 0}},Wg=[0,3,Qe,-1,2,[0,[2],st,nt,[0,Ng]],[0,_e,Qe,_e,Qe,_e,4,[0,Qe,se,-1,Qe]],[0,[3,4],se,-1,nt,[0,st],nt,[0,_e,-1]],[0],se],Xg=[0,se,-2],Gp=class extends le{constructor(t){super(t)}},Yg=[0],qy=class extends le{constructor(t){super(t)}},qg=[0,st,Qe,1,Qe,-4],ti=class extends le{constructor(t){super(t,2)}},sn={};sn[336783863]=[0,se,Qe,-1,st,[0,[1,2,3,4,5,6,7,8,9],nt,Yg,nt,Hg,nt,Xg,nt,qg,nt,kg,nt,[0,se,-2],nt,[0,se,_e],nt,Wg,nt,zg],[0,se],Qe,[0,[1,3],[2,4],nt,[0,ya],-1,nt,[0,fn],-1,Tt,[0,se,-1]],se];var Vp=[0,ic,-1,bs,-3,ic,ya,Ki,tr,ic,-1,bs,tr,bs,-2,Ki];function Ut(t,e){Hc(t,3,e)}function rt(t,e){Hc(t,4,e)}var zn=class extends le{constructor(t){super(t,500)}A(t){return Ce(this,0,7,t)}},Wa=[-1,{}],Wp=[0,se,1,Wa],Xp=[0,se,fn,Wa];function mi(t,e){to(t,1,zn,e)}function kt(t,e){Hc(t,10,e)}function ft(t,e){Hc(t,15,e)}var ni=class extends le{constructor(t){super(t,500)}A(t){return Ce(this,0,1001,t)}},Qg=[-500,Tt,[-500,Ki,-1,fn,-3,[-2,sn,Qe],Tt,kp,tr,-1,Wp,Xp,Tt,[0,Ki,bs],Ki,Vp,tr,fn,987,fn],4,Tt,[-500,se,-1,[-1,{}],998,se],Tt,[-500,se,fn,-1,[-2,{},Qe],997,fn,-1],tr,Tt,[-500,se,fn,Wa,998,fn],fn,tr,Wp,Xp,Tt,[0,Ki,-1,Wa],fn,-2,Vp,Ki,-1,bs,[0,bs,ky],978,Wa,Tt,kp];ni.prototype.h=po(Qg);var Qy=Us(ni,Qg),jy=class extends le{constructor(t){super(t)}},jg=class extends le{constructor(t){super(t)}h(){return Ar(this,jy,1)}},Kg=[0,Tt,[0,st,Gt,se,-1]],Jc=Us(jg,Kg),Ky=class extends le{constructor(t){super(t)}},Zy=class extends le{constructor(t){super(t)}},ql=class extends le{constructor(t){super(t)}l(){return dt(this,Ky,2)}h(){return Ar(this,Zy,5)}},Zg=Us(class extends le{constructor(t){super(t)}},[0,fn,ya,pd,[0,_e,[0,st,-3],[0,Gt,-3],[0,st,-1,[0,Tt,[0,st,-2]]],Tt,[0,Gt,-1,se,Gt]],se,-1,Ct,Tt,[0,st,Gt],fn,Ct]),Jy=class extends le{constructor(t){super(t)}},jr=Us(class extends le{constructor(t){super(t)}},[0,Tt,[0,Gt,-4]]),$y=class extends le{constructor(t){super(t)}},mo=Us(class extends le{constructor(t){super(t)}},[0,Tt,[0,Gt,-4]]),ew=class extends le{constructor(t){super(t)}},tw=[0,st,-1,pd,_e],Jg=class extends le{constructor(t){super(t)}};Jg.prototype.h=po([0,Gt,-4,Ct]);var nw=class extends le{constructor(t){super(t)}},iw=Us(class extends le{constructor(t){super(t)}},[0,Tt,[0,1,st,se,Kg],Ct]),Yp=class extends le{constructor(t){super(t)}},sw=class extends le{constructor(t){super(t)}h(){var t=Bt(this,1,void 0,eg);return t??cr()}},rw=class extends le{constructor(t){super(t)}},rc=[1,2],aw=Us(class extends le{constructor(t){super(t)}},[0,Tt,[0,rc,nt,[0,pd],nt,[0,Qr],st,se],Ct]),vd=class extends le{constructor(t){super(t)}},$g=[0,se,st,Gt,fn,-1],qp=class extends le{constructor(t){super(t)}},ow=[0,Qe,-1],Sc=class extends le{constructor(t){super(t)}h(){return J0(this,gd,2,$i)}l(){return ju(this,Vg,6,$i)}},$i=[1,2,3,4,5,6],yc=class extends le{constructor(t){super(t)}h(){return Bt(this,1,void 0,eg)!=null}l(){return An(Bt(this,2))!=null}},zt=class extends le{constructor(t){super(t)}},ev=[0,Qr,se,[0,st,Ct,-1],[0,Mc,Ct]],Yt=[0,ev,Qe,[0,$i,nt,qg,nt,Hg,nt,kg,nt,Yg,nt,Xg,nt,Wg],_e],cw=md(Yt),$c=class extends le{constructor(t){super(t)}},xd=[0,Yt,Gt,-1,st],lw=ki(502141897,$c);sn[502141897]=xd;var uw=Us(class extends le{constructor(t){super(t)}},[0,[0,_e,-1,Fy,Ny],tw]),tv=class extends le{constructor(t){super(t)}},nv=class extends le{constructor(t){super(t)}},$u=[0,Yt,Gt,[0,Yt],Qe],hw=ki(508968150,nv);sn[508968150]=[0,Yt,xd,$u,Gt,[0,[0,ev]]],sn[508968149]=$u;var zr=class extends le{constructor(t){super(t)}l(){return dt(this,vd,2)}h(){We(this,2)}},iv=[0,Yt,$g];sn[478825465]=iv;var dw=class extends le{constructor(t){super(t)}},sv=class extends le{constructor(t){super(t)}},Ad=class extends le{constructor(t){super(t)}},_d=class extends le{constructor(t){super(t)}},rv=class extends le{constructor(t){super(t)}},Qp=[0,Yt,[0,Yt],iv,-1],av=[0,Yt,Gt,st],Ed=[0,Yt,Gt],ov=[0,Yt,av,Ed,Gt],fw=ki(479097054,rv);sn[479097054]=[0,Yt,ov,Qp],sn[463370452]=Qp,sn[464864288]=av;var pw=ki(462713202,_d);sn[462713202]=ov,sn[474472470]=Ed;var mw=class extends le{constructor(t){super(t)}},cv=class extends le{constructor(t){super(t)}},lv=class extends le{constructor(t){super(t)}},uv=class extends le{constructor(t){super(t)}},Md=[0,Yt,Gt,-1,st],eh=[0,Yt,Gt,Qe];uv.prototype.h=po([0,Yt,Ed,[0,Yt],xd,$u,Md,eh]);var hv=class extends le{constructor(t){super(t)}},gw=ki(456383383,hv);sn[456383383]=[0,Yt,$g];var dv=class extends le{constructor(t){super(t)}},vw=ki(476348187,dv);sn[476348187]=[0,Yt,ow];var fv=class extends le{constructor(t){super(t)}},jp=class extends le{constructor(t){super(t)}},pv=[0,_e,-1],xw=ki(458105876,class extends le{constructor(t){super(t)}h(){var t=this.B,e=0|t[ve],n=kn(this,e);return t=(function(i,s,r,a){var o=jp;!a&&Ea(i)&&(r=0|(s=i.B)[ve]);var c=cs(s,2);if(i=!1,c==null){if(a)return wp();c=[]}else if(c.constructor===os){if(!(2&c.N)||a)return c;c=c.fa()}else Array.isArray(c)?i=!!(2&c[ve]):c=[];if(a){if(!c.length)return wp();i||(i=!0,ro(c))}else i&&(i=!1,$a(c),c=tg(c));return!i&&32&r&&so(c,32),r=Xt(s,r,2,a=new os(c,o,iy,void 0)),i||Ls(s,r),a})(this,t,e,n),!n&&jp&&(t.Ga=!0),t}});sn[458105876]=[0,pv,Uy,[!0,Ct,[0,se,-1,fn]],[0,ya,Qe,_e],Qe];var Sd=class extends le{constructor(t){super(t)}},mv=ki(458105758,Sd);sn[458105758]=[0,Yt,se,pv];var Aw=class extends le{constructor(t){super(t)}},_w=class extends le{constructor(t){super(t)}},Ew=class extends le{constructor(t){super(t)}},Mw=md([0,Tt,[0,sc,Tt,[0,Fg,-1],bs]]),Ql=class extends le{constructor(t){super(t)}},Kp=[0,Fg,-1,bs],Sw=class extends le{constructor(t){super(t)}},gv=class extends le{constructor(t){super(t)}},th=[1,2];gv.prototype.h=po([0,th,nt,Kp,nt,[0,Tt,Kp]]);var vv=class extends le{constructor(t){super(t)}},yw=ki(443442058,vv);sn[443442058]=[0,Yt,se,st,Gt,fn,-1,Qe,Gt],sn[514774813]=Md;var xv=class extends le{constructor(t){super(t)}},ww=ki(516587230,xv);function nh(t,e){return e=e?e.clone():new vd,t.displayNamesLocale!==void 0?We(e,1,Ji(t.displayNamesLocale)):t.displayNamesLocale===void 0&&We(e,1),t.maxResults!==void 0?Ui(e,2,t.maxResults):"maxResults"in t&&We(e,2),t.scoreThreshold!==void 0?Pe(e,3,t.scoreThreshold):"scoreThreshold"in t&&We(e,3),t.categoryAllowlist!==void 0?mc(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&We(e,4),t.categoryDenylist!==void 0?mc(e,5,t.categoryDenylist):"categoryDenylist"in t&&We(e,5),e}function Av(t){var e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function yd(t,e=-1,n=""){return{categories:t.map(i=>({index:ui(i,1)??0??-1,score:Dn(i,2)??0,categoryName:An(Bt(i,3))??""??"",displayName:An(Bt(i,4))??""??""})),headIndex:e,headName:n}}function Tw(t){var e={classifications:Ar(t,nw,1).map(n=>yd(dt(n,jg,4)?.h()??[],ui(n,2)??0,An(Bt(n,3))??""))};return(function(n){return n==null?n:typeof n=="bigint"?(Wu(n)?n=Number(n):(n=nr(64,n),n=Wu(n)?Number(n):String(n)),n):Aa(n)?typeof n=="number"?Nc(n):dc(n):void 0})(Bt(t,2,void 0,fc))!=null&&(e.timestampMs=Av(Bt(t,2,void 0,fc)??Z0)),e}function _v(t){var e=er(t,3,jn,$s()),n=er(t,2,vr,$s()),i=er(t,1,An,$s()),s=er(t,9,An,$s()),r={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)r.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:s[a]??""});if((e=dt(t,ql,4)?.l())&&(r.boundingBox={originX:ui(e,1,Es)??0,originY:ui(e,2,Es)??0,width:ui(e,3,Es)??0,height:ui(e,4,Es)??0,angle:0}),dt(t,ql,4)?.h().length)for(let a of dt(t,ql,4).h())r.keypoints.push({x:Bt(a,1,Es,jn)??0,y:Bt(a,2,Es,jn)??0,score:Bt(a,4,Es,jn)??0,label:An(Bt(a,3,Es))??""});return r}function go(t){var e=[];for(let n of Ar(t,$y,1))t={x:Dn(n,1)??0,y:Dn(n,2)??0,z:Dn(n,3)??0,visibility:Dn(n,4)??0},Bt(n,5,void 0,jn)!=null&&(t.presence=Dn(n,5)??0),e.push(t);return e}function Kr(t){var e=[];for(let n of Ar(t,Jy,1))t={x:Dn(n,1)??0,y:Dn(n,2)??0,z:Dn(n,3)??0,visibility:Dn(n,4)??0},Bt(n,5,void 0,jn)!=null&&(t.presence=Dn(n,5)??0),e.push(t);return e}function Zp(t){return Array.from(t,e=>e>127?e-256:e)}function Jp(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);var n=0,i=0,s=0;for(let r=0;r<t.length;r++)n+=t[r]*e[r],i+=t[r]*t[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}sn[516587230]=[0,Yt,Md,eh,Gt],sn[518928384]=eh;var qo,bw=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Ev(t){if(t)return!0;if(qo===void 0)try{await WebAssembly.instantiate(bw),qo=!0}catch{qo=!1}return qo}async function Ys(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await Ev(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Qi=class{};function $p(t){return We(new ih,1,is(t))}Qi.forVisionTasks=function(t,e=!1){return Ys("vision",t??Xs``,e)},Qi.forLiteRtLmTextTasks=function(t,e=!1){return Ys("litertlm_text",t??Xs``,e)},Qi.forTextTasks=function(t,e=!1){return Ys("text",t??Xs``,e)},Qi.forRetrievalTasks=function(t,e=!1){return Ys("retrieval",t??Xs``,e)},Qi.forGenAiTasks=function(t,e=!1){return Ys("genai",t??Xs``,e)},Qi.forDecisionTasks=function(t,e=!1){return Ys("decision",t??Xs``,e)},Qi.forAudioTasks=function(t,e=!1){return Ys("audio",t??Xs``,e)},Qi.isSimdSupported=function(t=!1){return Ev(t)};var ih=class extends le{constructor(t){super(t)}},Cw=class extends le{constructor(t){super(t)}},em=[0,_e,2,Mc,-2,Ct,Tt,[0,_e,Ct]],Rw=class extends le{constructor(t){super(t)}},Dw=class extends le{constructor(t){super(t)}};function sh(t,e){return We(t,1,is(e))}function rh(t,e){return We(t,2,is(e))}var ah=class extends le{constructor(t){super(t)}},wc=[3,4,5,6,7],Pw=class extends le{constructor(t){super(t)}},Mv=class extends le{constructor(t){super(t)}};Mv.prototype.h=po([0,[0,_e,se,-3,_e],[0,wc,_e,-1,nt,[0,_e,se,Mc],nt,em,nt,[0,1,em],nt,[0,_e],nt,[0,_e,se,Mc]]]);var Iw=class{constructor(){this.h=typeof AbortController<"u"}async send(t,e,n){var i=this.h?new AbortController:void 0,s=i&&t.ma>0?setTimeout(()=>{i.abort()},t.ma):void 0;try{let r=await fetch(t.url,{method:t.cb,headers:{...t.bb},...t.body&&{body:t.body},...t.withCredentials&&{credentials:"include"},signal:t.ma&&i?i.signal:null});r.status===200?e?.(await r.text()):n?.(r.status)}catch(r){r?.name==="AbortError"?n?.(408):n?.(400)}finally{clearTimeout(s)}}},Lw=class extends le{constructor(t){super(t,37)}},tm=[-4,{},Wy,_e,Vy],nm=[0,se,_e,1,se,-1,_e,1,_e,1,Ct],im=[0,_e,se,-2],sm=[0,se,_e],rm=[0,se,_e],am=[0,Qe,-3],om=[0,_e,se,-1,Ct,st,-1,se,-5,Tt,[0,se,-4],-1,Qe,[0,Qe,-3],_e],Bw=class extends le{constructor(t){super(t,19)}},Uw=md([-19,{},[0,_e,1,[0,se,-6,Ct,st,se,-1,Ct],1,[0,se,1,se,-5],se,-1,[0,_e,se,-8],[0,se,-3],[0,se,_e,se,-2],[0,se,-1,_e,se,-1,_e,se,-1,[0,Tt,[0,se,-1],Qe,se,-5],[0,_e,Qe,st,-2]],Ct,[0,se,-3,Ct,st,se,-1],[0,_e,se,-1],[0,se,-9],[0,se,-6,_e,se,1,se,Qe,_e,-1,Qe,se,-2,_e,se,_e,se,st,-1],1,[0,_e],1,[0,se,-4],1,nm,[0,[1,2,3,4,5,6],nt,nm,nt,sm,nt,rm,nt,[0,_e],nt,om,nt,im],sm,rm,om,[0,[0,_e,se,-1,Ct,st,-1,se,-4,Tt,[0,se,-4],-1,1,am],[0,_e,se,-1,Ct,st,-1,se,-4,am]],im,[0,se,[0,st,-3,_e],_e,-2,[0,st,-1],Qe],4,[0,se,_e,se,-1,Ct,_e,se,-1,_e,st,-1]],_e,Tt,[-37,{},Na,se,Tt,[0,se,-1],Qr,1,Qr,[0,fn,-1,Op,Oy,-1],se,[0,st,se,-1],Qe,st,Ct,se,-1,zy,Gy,Na,Qr,_e,Op,Ct,-1,[0,_e,-1],se,Qe,se,ya,se,-1,Fp,1,Fp,tm,Qe,[0,_e,[0,Gt,st,-2],[0,Gt]],[0,_e,Ct]],Na,Og,se,-1,Na,_e,-1,[0,Qe,-1,_e,Qe],[0,Ct,-1,se],[0,Na,Qe,Ct],Ct,1,Ng,1,tm]),Fw=class{constructor(t){this.i=[],this.o=new Iw,this.l=t??"",this.h=setInterval(()=>{this.flush()},6e4)}close(){this.h!==void 0&&(clearInterval(this.h),this.h=void 0),this.flush()}flush(t,e){if(this.error)e?.("net-send-failed");else if(this.i.length===0)t?.();else{var n=this.i;this.i=[],n=(function(i){var s=new Bw;return Qu(s=We(s,2,is(1786)),3,i)})(n),n=Uw(n),this.o.send({url:"https://odml.pa.googleapis.com/v1/log",cb:"POST",ma:1e4,body:n,ib:2,bb:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.l},withCredentials:!1},()=>{t?.()},i=>{this.error=Error(`Logging failed with HTTP error: ${i}`),this.i=[],this.h!==void 0&&(clearInterval(this.h),this.h=void 0),e?.("net-send-failed",i)})}}};class cm{constructor(){this.ba=this.V=this.Y=this.S=this.W=this.U=this.R=0}}function oh(t,e){var n=new Mv;n=Ce(n,0,1,t.C),n=Ce(n,0,2,e),e=We(e=new Lw,6,Uc(n=n.h(),!1)),(t=t.m).error||t.i.push(e)}function lm(t,e){var n={R:e.R-t.l.R,U:e.U-t.l.U,W:e.W-t.l.W,S:e.S-t.l.S,Y:e.Y-t.l.Y,V:e.V,ba:e.ba},i=rh(sh(new ah,t.D),1);n=Sv(t,n),oh(t,i=Ei(i,4,wc,n)),t.l=e}function Sv(t,e){var n=new Cw;return t=tc(t=Wl(t=We(n,1,is(t.F)),7,e.S),5,e.V),t=tc(t,6,e.ba),e.W>0&&tc(t,4,e.Y/e.W),e.R!==0&&(n=Wl(n=$p(3),2,e.R),to(t,8,ih,n)),e.U!==0&&(e=Wl(n=$p(4),2,e.U),to(t,8,ih,e)),t}var Ow=class{constructor(t,e,n){this.v=performance.now(),this.o=performance.now(),this.i=new Map,this.u=0,this.h=new cm,this.l=new cm,this.m=new Fw(n),this.D=(function(i){switch(i){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;case"UniversalEmbedder":return 28;case"SemanticRetriever":return 29;case"DecisionMaker":return 30;default:return 0}})(t),this.F=(function(i){switch(i){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(e),t=new Pw,typeof window>"u"?e=0:(e=navigator.userAgent,e=/Android/i.test(e)?1:/iPhone|iPad|iPod/i.test(e)?2:/Windows/i.test(e)?5:/Macintosh/i.test(e)?4:/Linux/i.test(e)?3:0),t=We(t,1,is(e)),t=We(t,2,Ji("")),t=We(t,3,Ji("")),t=We(t,4,Ji("1.1.0")),t=We(t,5,Ji("")),this.C=We(t,6,is(4))}za(){var t=new Dw;t=tc(t=We(t,1,is(this.F)),3,performance.now()-this.v),oh(this,t=Ei(rh(sh(new ah,this.D),0),3,wc,t)),this.o=performance.now()}Aa(t){var e=this.i.get(t);if(e!==void 0&&(this.i.delete(t),t=performance.now()-e,++this.h.W,this.h.Y+=t,this.h.V=Math.max(this.h.V,t),this.u=Math.max(this.u,t),performance.now()>this.o+3e4)){for(let[n,i]of this.i.entries())t=n,i<e&&(this.h.S++,this.i.delete(t));e={...this.h,ba:performance.now()-this.o},this.h.V=0,this.o=performance.now(),lm(this,e)}}ya(){var t={...this.h,S:this.h.S+this.i.size,V:this.u,ba:performance.now()-this.v};lm(this,t);var e=new Rw;e=Ce(e,0,2,t=Sv(this,t)),oh(this,e=Ei(t=rh(sh(new ah,this.D),2),5,wc,e))}close(){var t=this.m;typeof t.close=="function"?t.close():t.flush()}};function wd(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function um(t){if(typeof importScripts!="function"){let e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(e)})}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{let n=self.import;n?await n(t.toString()):await import(t.toString())}}}function Td(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function be(t,e,n){t.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.j.stringToNewUTF8(e)),t.j._free(e)}function yv(t,e,n){if(!t.j.canvas)throw Error("No OpenGL canvas configured.");if(n?t.j._bindTextureToStream(n):t.j._bindTextureToCanvas(),!(n=t.j.canvas.getContext("webgl2")||t.j.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.j.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.j.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);var[i,s]=Td(e);return!t.l||i===t.j.canvas.width&&s===t.j.canvas.height||(t.j.canvas.width=i,t.j.canvas.height=s),[i,s]}function hm(t,e,n){t.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=t.j.stringToNewUTF8(e[s]);e=t.j._malloc(4*i.length),t.j.HEAPU32.set(i,e>>2),n(e);for(let s of i)t.j._free(s);t.j._free(e)}function bi(t,e,n){t.j.simpleListeners=t.j.simpleListeners||{},t.j.simpleListeners[e]=n}function Ms(t,e,n){var i=[];t.j.simpleListeners=t.j.simpleListeners||{},t.j.simpleListeners[e]=(s,r,a)=>{r?(n(i,a),i=[]):i.push(s)}}var wv=class{constructor(t,e){this.l=!0,this.j=t,this.h=null,this.i=0,this.o=typeof this.j._addIntToInputStream=="function",e!==void 0?this.j.canvas=e:wd()?this.j.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.j.canvas=document.createElement("canvas"))}async initializeGraph(t){var e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){var n=t.length,i=this.j._malloc(n);this.j.HEAPU8.set(t,i),e?this.j._changeBinaryGraph(n,i):this.j._changeTextGraph(n,i),this.j._free(i)}configureAudio(t,e,n,i,s){this.j._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),be(this,i||"input_audio",r=>{be(this,s=s||"audio_header",a=>{this.j._configureAudio(r,a,t,e??0,n)})})}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.j._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.j.gpuOriginForWebTexturesIsBottomLeft=t}ka(t){bi(this,"__graph_config__",e=>{t(e)}),be(this,"__graph_config__",e=>{this.j._getGraphConfig(e,void 0)}),delete this.j.simpleListeners.__graph_config__}attachErrorListener(t){this.j.errorListener=t}attachEmptyPacketListener(t,e){this.j.emptyPacketListeners=this.j.emptyPacketListeners||{},this.j.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,s){var r=4*t.length;this.i!==r&&(this.h&&this.j._free(this.h),this.h=this.j._malloc(r),this.i=r),this.j.HEAPF32.set(t,this.h/4),be(this,i,a=>{this.j._addAudioToInputStream(this.h,e,n,a,s)})}addGpuBufferToStream(t,e,n){be(this,e,i=>{var[s,r]=yv(this,t,i);this.j._addBoundTextureToStream(i,s,r,n)})}addBoolToStream(t,e,n){be(this,e,i=>{this.j._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){be(this,e,i=>{this.j._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){be(this,e,i=>{this.j._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){be(this,e,i=>{this.j._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){be(this,e,i=>{this.j._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){be(this,e,i=>{be(this,t,s=>{this.j._addStringToInputStream(s,i,n)})})}addStringRecordToStream(t,e,n){be(this,e,i=>{hm(this,Object.keys(t),s=>{hm(this,Object.values(t),r=>{this.j._addFlatHashMapToInputStream(s,r,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){be(this,n,s=>{be(this,e,r=>{var a=this.j._malloc(t.length);this.j.HEAPU8.set(t,a),this.j._addProtoToInputStream(a,t.length,r,s,i),this.j._free(a)})})}addEmptyPacketToStream(t,e){be(this,t,n=>{this.j._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){be(this,e,i=>{var s=this.j._allocateBoolVector(t.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of t)this.j._addBoolVectorEntry(s,r);this.j._addBoolVectorToInputStream(s,i,n)})}addDoubleVectorToStream(t,e,n){be(this,e,i=>{var s=this.j._allocateDoubleVector(t.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of t)this.j._addDoubleVectorEntry(s,r);this.j._addDoubleVectorToInputStream(s,i,n)})}addFloatVectorToStream(t,e,n){be(this,e,i=>{var s=this.j._allocateFloatVector(t.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of t)this.j._addFloatVectorEntry(s,r);this.j._addFloatVectorToInputStream(s,i,n)})}addIntVectorToStream(t,e,n){be(this,e,i=>{var s=this.j._allocateIntVector(t.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of t)this.j._addIntVectorEntry(s,r);this.j._addIntVectorToInputStream(s,i,n)})}addUintVectorToStream(t,e,n){be(this,e,i=>{var s=this.j._allocateUintVector(t.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of t)this.j._addUintVectorEntry(s,r);this.j._addUintVectorToInputStream(s,i,n)})}addStringVectorToStream(t,e,n){be(this,e,i=>{var s=this.j._allocateStringVector(t.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of t)be(this,r,a=>{this.j._addStringVectorEntry(s,a)});this.j._addStringVectorToInputStream(s,i,n)})}addBoolToInputSidePacket(t,e){be(this,e,n=>{this.j._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){be(this,e,n=>{this.j._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){be(this,e,n=>{this.j._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){be(this,e,n=>{this.j._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){be(this,e,n=>{this.j._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){be(this,e,n=>{be(this,t,i=>{this.j._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){be(this,n,i=>{be(this,e,s=>{var r=this.j._malloc(t.length);this.j.HEAPU8.set(t,r),this.j._addProtoToInputSidePacket(r,t.length,s,i),this.j._free(r)})})}addBoolVectorToInputSidePacket(t,e){be(this,e,n=>{var i=this.j._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of t)this.j._addBoolVectorEntry(i,s);this.j._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){be(this,e,n=>{var i=this.j._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of t)this.j._addDoubleVectorEntry(i,s);this.j._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){be(this,e,n=>{var i=this.j._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of t)this.j._addFloatVectorEntry(i,s);this.j._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){be(this,e,n=>{var i=this.j._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of t)this.j._addIntVectorEntry(i,s);this.j._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){be(this,e,n=>{var i=this.j._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of t)this.j._addUintVectorEntry(i,s);this.j._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){be(this,e,n=>{var i=this.j._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of t)be(this,s,r=>{this.j._addStringVectorEntry(i,r)});this.j._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){bi(this,t,e),be(this,t,n=>{this.j._attachBoolListener(n)})}attachBoolVectorListener(t,e){Ms(this,t,e),be(this,t,n=>{this.j._attachBoolVectorListener(n)})}attachIntListener(t,e){bi(this,t,e),be(this,t,n=>{this.j._attachIntListener(n)})}attachIntVectorListener(t,e){Ms(this,t,e),be(this,t,n=>{this.j._attachIntVectorListener(n)})}attachUintListener(t,e){bi(this,t,e),be(this,t,n=>{this.j._attachUintListener(n)})}attachUintVectorListener(t,e){Ms(this,t,e),be(this,t,n=>{this.j._attachUintVectorListener(n)})}attachDoubleListener(t,e){bi(this,t,e),be(this,t,n=>{this.j._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){Ms(this,t,e),be(this,t,n=>{this.j._attachDoubleVectorListener(n)})}attachFloatListener(t,e){bi(this,t,e),be(this,t,n=>{this.j._attachFloatListener(n)})}attachFloatVectorListener(t,e){Ms(this,t,e),be(this,t,n=>{this.j._attachFloatVectorListener(n)})}attachStringListener(t,e){bi(this,t,e),be(this,t,n=>{this.j._attachStringListener(n)})}attachStringVectorListener(t,e){Ms(this,t,e),be(this,t,n=>{this.j._attachStringVectorListener(n)})}attachProtoListener(t,e,n){bi(this,t,e),be(this,t,i=>{this.j._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){Ms(this,t,e),be(this,t,i=>{this.j._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.j._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),bi(this,t,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)}),be(this,t,i=>{this.j._attachAudioListener(i,n||!1)})}finishProcessing(){this.j._waitUntilIdle()}closeGraph(){this.j._closeGraph(),this.j.simpleListeners=void 0,this.j.emptyPacketListeners=void 0}};function Tv(t){return class extends t{get qa(){return this.j}Ta(){if(typeof this.qa._mediapipeLoggerGetEncodedApiKey=="function"){let e=this.qa._mediapipeLoggerGetEncodedApiKey();return this.qa._decodeBase64(e)}}}}function bv(t){return class extends t{ab(){this.j._registerModelResourcesGraphService()}}}var Nw=Tv(bv(wv)),kw=class extends Nw{};async function zw(t,e,n,i){return t=await(async(s,r,a,o,c)=>{if(r&&await um(r),!self.ModuleFactory||a&&(await um(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),(function(s,r){r=r.runningMode??"";var a=s.h.Ta();s.o=new Ow(s.D(),r,a)})(t,i),await t.A(i),t}async function ac(t,e,n,i){return zw(t,e,n,i)}function jl(t,e,n){try{t.h.j.FS_unlink(`/${n}`)}catch{}t.h.j.FS_createDataFile("/",n,e,!0,!1,!1),ch(t,`/${n}`)}function ch(t,e){var n=dt(t.baseOptions,yc,1)||new yc;typeof e=="string"?(We(n,2,Ji(e)),We(n,1)):e instanceof Uint8Array&&(We(n,1,Uc(e,!1)),We(n,2)),Ce(t.baseOptions,0,1,n)}function dm(t){try{let e=t.L.length;if(e===1)throw Error(t.L[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.L.map(n=>n.message).join(", "))}finally{t.L=[]}}function me(t,e){t.J=Math.max(t.J,e)}function el(t,e){t.F=new zn,Jn(t.F,2,"PassThroughCalculator"),Ut(t.F,"free_memory"),rt(t.F,"free_memory_unused_out"),kt(e,"free_memory"),mi(e,t.F)}function ua(t,e){Ut(t.F,e),rt(t.F,e+"_unused_out")}function tl(t){t.h.addBoolToStream(!0,"free_memory",t.J)}var Tc=class{constructor(t){this.h=t,this.L=[],this.J=0,this.h.setAutoRenderToScreen(!1)}l(t,e=!0,n=!1,i=!1){if(e){let s=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(dt(this.baseOptions,yc,1)?.h()||dt(this.baseOptions,yc,1)?.l()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");(function(a,o,c=!1){var l=dt(a.baseOptions,Sc,3);if(!l){var h=l=new Sc,u=new Gp;Ei(h,4,$i,u)}"delegate"in o&&(o.delegate==="GPU"?(o=l,h=new gd,Ei(o,2,$i,h)):(o=l,h=new Gp,Ei(o,4,$i,h))),c&&(c=l.l(),o=l.h()||c?.h()===!0,c=new Vg,o?Ce(c,0,9,o=new Gg):Ce(c,0,8,o=new Yy),Ei(l,6,$i,c)),Ce(a.baseOptions,0,3,l)})(this,s,i);let r=n?"model.litertlm":"model.dat";if(s.modelAssetPath)return fetch(s.modelAssetPath.toString()).then(a=>{if(a.ok)return a.arrayBuffer();throw Error(`Failed to fetch model: ${s.modelAssetPath} (${a.status})`)}).then(a=>{jl(this,new Uint8Array(a),r),this.u(),this.M()});if(s.modelAssetBuffer instanceof Uint8Array)n?jl(this,s.modelAssetBuffer,r):ch(this,s.modelAssetBuffer);else if(s.modelAssetBuffer)return(async function(a){for(var o=[],c=0;;){let{done:l,value:h}=await a.read();if(l)break;o.push(h),c+=h.length}if(o.length===0)return new Uint8Array(0);if(o.length===1)return o[0];a=new Uint8Array(c),c=0;for(let l of o)a.set(l,c),c+=l.length;return a})(s.modelAssetBuffer).then(a=>{n?jl(this,a,r):ch(this,a),this.u(),this.M()})}return this.u(),this.M(),Promise.resolve()}M(){}ka(){var t;if(this.h.ka(e=>{t=Qy(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.h.attachErrorListener((n,i)=>{this.L.push(Error(i))}),this.h.ab(),this.h.setGraph(t,e),this.o?.za(),this.F=void 0,dm(this)}finishProcessing(t){this.h.finishProcessing(),dm(this),this.o&&t!==void 0&&this.o.Aa(t)}close(){this.F=void 0,this.o?.ya(),this.o?.close(),this.h.closeGraph()}};function Cs(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Tc.prototype.close=Tc.prototype.close;class Hw{constructor(e,n,i,s){this.h=e,this.i=n,this.o=i,this.l=s}bind(){this.h.bindVertexArray(this.i)}close(){this.h.deleteVertexArray(this.i),this.h.deleteBuffer(this.o),this.h.deleteBuffer(this.l)}}function fm(t,e,n){var i=t.h;if(n=Cs(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.i,n),n}function pm(t,e){var n=t.h,i=Cs(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);var s=Cs(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.G),n.vertexAttribPointer(t.G,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);var r=Cs(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new Hw(n,i,s,r)}function bd(t,e){if(t.h){if(e!==t.h)throw Error("Cannot change GL context once initialized")}else t.h=e}function Gw(t,e,n,i){return bd(t,e),t.i||(t.o(),t.J()),n?(t.m||(t.m=pm(t,!0)),n=t.m):(t.F||(t.F=pm(t,!1)),n=t.F),e.useProgram(t.i),n.bind(),t.l(),t=i(),n.h.bindVertexArray(null),t}function Cv(t,e,n){return bd(t,e),t=Cs(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function Rv(t,e,n){bd(t,e),t.D||(t.D=Cs(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.D),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function Vw(t){t.h?.bindFramebuffer(t.h.FRAMEBUFFER,null)}var Cd=class{C(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}o(){var t=this.h;if(this.i=Cs(t.createProgram(),"Failed to create WebGL program"),this.ea=fm(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.aa=fm(this,this.C(),t.FRAGMENT_SHADER),t.linkProgram(this.i),!t.getProgramParameter(this.i,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.i)}`);this.G=t.getAttribLocation(this.i,"aVertex"),this.L=t.getAttribLocation(this.i,"aTex")}J(){}l(){}close(){if(this.i){let t=this.h;t.deleteProgram(this.i),t.deleteShader(this.ea),t.deleteShader(this.aa)}this.D&&this.h.deleteFramebuffer(this.D),this.F&&this.F.close(),this.m&&this.m.close()}};function Zi(t,e){switch(e){case 0:return t.h.find(n=>n instanceof Uint8Array);case 1:return t.h.find(n=>n instanceof Float32Array);case 2:return t.h.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function lh(t){var e=Zi(t,1);if(!e){if(e=Zi(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);let i=ha(t);var n=Rd(t);if(Rv(n,i,Dv(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=n[r]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.h.push(e)}return e}function Dv(t){var e=Zi(t,2);if(!e){let n=ha(t);e=Iv(t);let i=lh(t),s=Pv(t);n.texImage2D(n.TEXTURE_2D,0,s,t.width,t.height,0,n.RED,n.FLOAT,i),uh(t)}return e}function ha(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.i||(t.i=Cs(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.i}function Pv(t){if(t=ha(t),!Qo)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Qo=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Qo=t.R16F}return Qo}function Rd(t){return t.l||(t.l=new Cd),t.l}function Iv(t){var e=ha(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);var n=Zi(t,2);return n||(n=Cv(Rd(t),e,t.o?e.LINEAR:e.NEAREST),t.h.push(n),t.u=!0),e.bindTexture(e.TEXTURE_2D,n),n}function uh(t){t.i.bindTexture(t.i.TEXTURE_2D,null)}var Qo,tn=class{constructor(t,e,n,i,s,r,a){this.h=t,this.o=e,this.u=n,this.canvas=i,this.l=s,this.width=r,this.height=a,this.u&&--mm===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Va(){return!!Zi(this,0)}va(){return!!Zi(this,1)}X(){return!!Zi(this,2)}ua(){return(e=Zi(t=this,0))||(e=lh(t),e=new Uint8Array(e.map(n=>Math.round(255*n))),t.h.push(e)),e;var t,e}ta(){return lh(this)}T(){return Dv(this)}clone(){var t=[];for(let e of this.h){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{let i=ha(this),s=Rd(this);i.activeTexture(i.TEXTURE1),n=Cv(s,i,this.o?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=Pv(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Rv(s,i,n),Gw(s,i,!1,()=>{Iv(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),uh(this)}),Vw(s),uh(this)}}t.push(n)}return new tn(t,this.o,this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&ha(this).deleteTexture(Zi(this,2)),mm=-1}};tn.prototype.close=tn.prototype.close,tn.prototype.clone=tn.prototype.clone,tn.prototype.getAsWebGLTexture=tn.prototype.T,tn.prototype.getAsFloat32Array=tn.prototype.ta,tn.prototype.getAsUint8Array=tn.prototype.ua,tn.prototype.hasWebGLTexture=tn.prototype.X,tn.prototype.hasFloat32Array=tn.prototype.va,tn.prototype.hasUint8Array=tn.prototype.Va;var mm=250;function Mi(...t){return t.map(([e,n])=>({start:e,end:n}))}var gm,Ww=bv((gm=Tv(wv),class extends gm{get pa(){return this.j}Ea(t,e,n){be(this,e,i=>{var[s,r]=yv(this,t,i);this.pa._addBoundTextureAsImageToStream(i,s,r,n)})}ha(t,e){bi(this,t,e),be(this,t,n=>{this.pa._attachImageListener(n)})}ia(t,e){Ms(this,t,e),be(this,t,n=>{this.pa._attachImageVectorListener(n)})}})),Si=class extends Ww{};async function ot(t,e,n){return ac(t,n.canvas??(wd()?void 0:document.createElement("canvas")),e,n)}function Lv(t,e,n,i){if(t.o&&i!==void 0){var s=dt(t.baseOptions,Sc,3);s?.h()||s?.l()?.h()?(++(s=t.o).h.U,s.i.set(i,performance.now())):(++(s=t.o).h.R,s.i.set(i,performance.now()))}if(t.ra){if(s=new Jg,n?.regionOfInterest){if(!t.Da)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Pe(s,1,(r.left+r.right)/2),Pe(s,2,(r.top+r.bottom)/2),Pe(s,4,r.right-r.left),Pe(s,3,r.bottom-r.top)}else Pe(s,1,.5),Pe(s,2,.5),Pe(s,4,1),Pe(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Pe(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[a,o]=Td(e);n=Dn(s,3)*o/a,r=Dn(s,4)*a/o,Pe(s,4,n),Pe(s,3,r)}}t.h.addProtoToStream(s.h(),"mediapipe.NormalizedRect",t.ra,i)}t.h.Ea(e,t.Ca,i??performance.now()),t.finishProcessing(i)}function yi(t,e,n){if(t.K)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Lv(t,e,n,t.J+1)}function zi(t,e,n,i){if(!t.K)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Lv(t,e,n,i)}function da(t,e,n,i){var s=e.data,r=e.width,a=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return t=new tn([s],n,!1,t.h.j.canvas,t.ea,r,e),i?t.clone():t}var $n=class extends Tc{constructor(t,e,n,i){super(t),this.h=t,this.Ca=e,this.ra=n,this.Da=i,this.ea=new Cd,this.K=!1}l(t,e=!0,n=!1,i=!1){if("runningMode"in t){var s=this.K=!!t.runningMode&&t.runningMode!=="IMAGE";We(this.baseOptions,2,s==null?s:hc(s))}if(t.canvas!==void 0&&this.h.j.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e,n,i)}close(){this.ea.close(),super.close()}};$n.prototype.close=$n.prototype.close;var ai=class extends $n{constructor(t,e){super(new Si(t,e),"image_in","norm_rect_in",!1),this.m={detections:[]},Ce(t=this.i=new $c,0,1,e=new zt),Pe(this.i,2,.5),Pe(this.i,3,.3)}D(){return"FaceDetector"}get baseOptions(){return dt(this.i,zt,1)}set baseOptions(t){Ce(this.i,0,1,t)}A(t){return"minDetectionConfidence"in t&&Pe(this.i,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Pe(this.i,3,t.minSuppressionThreshold??.3),this.l(t)}H(t,e){return this.m={detections:[]},yi(this,t,e),this.m}I(t,e,n){return this.m={detections:[]},zi(this,t,n,e),this.m}u(){var t=new ni;kt(t,"image_in"),kt(t,"norm_rect_in"),ft(t,"detections");var e=new ti;Ni(e,lw,this.i);var n=new zn;Jn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect_in"),rt(n,"DETECTIONS:detections"),n.A(e),mi(t,n),this.h.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=Zg(r),this.m.detections.push(_v(i));me(this,s)}),this.h.attachEmptyPacketListener("detections",i=>{me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};ai.prototype.detectForVideo=ai.prototype.I,ai.prototype.detect=ai.prototype.H,ai.prototype.setOptions=ai.prototype.A,ai.createFromModelPath=async function(t,e){return ot(ai,t,{baseOptions:{modelAssetPath:e}})},ai.createFromModelBuffer=function(t,e){return ot(ai,t,{baseOptions:{modelAssetBuffer:e}})},ai.createFromOptions=function(t,e){return ot(ai,t,e)};var Dd=Mi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Pd=Mi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Id=Mi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Bv=Mi([474,475],[475,476],[476,477],[477,474]),Ld=Mi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Bd=Mi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Uv=Mi([469,470],[470,471],[471,472],[472,469]),Ud=Mi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Fv=[...Dd,...Pd,...Id,...Ld,...Bd,...Ud],Ov=Mi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function vm(t){t.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var lt=class extends $n{constructor(t,e){super(new Si(t,e),"image_in","norm_rect",!1),this.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ce(t=this.i=new nv,0,1,e=new zt),this.C=new tv,Ce(this.i,0,3,this.C),this.v=new $c,Ce(this.i,0,2,this.v),Ui(this.v,4,1),Pe(this.v,2,.5),Pe(this.C,2,.5),Pe(this.i,4,.5)}D(){return"FaceLandmarker"}get baseOptions(){return dt(this.i,zt,1)}set baseOptions(t){Ce(this.i,0,1,t)}A(t){return"numFaces"in t&&Ui(this.v,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Pe(this.v,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.i,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Pe(this.C,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}H(t,e){return vm(this),yi(this,t,e),this.m}I(t,e,n){return vm(this),zi(this,t,n,e),this.m}u(){var t=new ni;kt(t,"image_in"),kt(t,"norm_rect"),ft(t,"face_landmarks");var e=new ti;Ni(e,hw,this.i);var n=new zn;Jn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect"),rt(n,"NORM_LANDMARKS:face_landmarks"),n.A(e),mi(t,n),this.h.attachProtoVectorListener("face_landmarks",(i,s)=>{for(let r of i)i=mo(r),this.m.faceLandmarks.push(go(i));me(this,s)}),this.h.attachEmptyPacketListener("face_landmarks",i=>{me(this,i)}),this.outputFaceBlendshapes&&(ft(t,"blendshapes"),rt(n,"BLENDSHAPES:blendshapes"),this.h.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=Jc(r),this.m.faceBlendshapes.push(yd(i.h()??[]));me(this,s)}),this.h.attachEmptyPacketListener("blendshapes",i=>{me(this,i)})),this.outputFacialTransformationMatrixes&&(ft(t,"face_geometry"),rt(n,"FACE_GEOMETRY:face_geometry"),this.h.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=dt(i=uw(r),ew,2))&&this.m.facialTransformationMatrixes.push({rows:ui(i,1)??0??0,columns:ui(i,2)??0??0,data:er(i,3,jn,$s()).slice()??[]});me(this,s)}),this.h.attachEmptyPacketListener("face_geometry",i=>{me(this,i)})),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};lt.prototype.detectForVideo=lt.prototype.I,lt.prototype.detect=lt.prototype.H,lt.prototype.setOptions=lt.prototype.A,lt.createFromModelPath=function(t,e){return ot(lt,t,{baseOptions:{modelAssetPath:e}})},lt.createFromModelBuffer=function(t,e){return ot(lt,t,{baseOptions:{modelAssetBuffer:e}})},lt.createFromOptions=function(t,e){return ot(lt,t,e)},lt.FACE_LANDMARKS_LIPS=Dd,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",lt.FACE_LANDMARKS_LIPS),lt.FACE_LANDMARKS_LEFT_EYE=Pd,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",lt.FACE_LANDMARKS_LEFT_EYE),lt.FACE_LANDMARKS_LEFT_EYEBROW=Id,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",lt.FACE_LANDMARKS_LEFT_EYEBROW),lt.FACE_LANDMARKS_LEFT_IRIS=Bv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",lt.FACE_LANDMARKS_LEFT_IRIS),lt.FACE_LANDMARKS_RIGHT_EYE=Ld,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",lt.FACE_LANDMARKS_RIGHT_EYE),lt.FACE_LANDMARKS_RIGHT_EYEBROW=Bd,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",lt.FACE_LANDMARKS_RIGHT_EYEBROW),lt.FACE_LANDMARKS_RIGHT_IRIS=Uv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",lt.FACE_LANDMARKS_RIGHT_IRIS),lt.FACE_LANDMARKS_FACE_OVAL=Ud,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",lt.FACE_LANDMARKS_FACE_OVAL),lt.FACE_LANDMARKS_CONTOURS=Fv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",lt.FACE_LANDMARKS_CONTOURS),lt.FACE_LANDMARKS_TESSELATION=Ov,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",lt.FACE_LANDMARKS_TESSELATION);var Fd=Mi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function xm(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Am(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function _m(t,e=!0){var n=[];for(let s of t){var i=Jc(s);t=[];for(let r of i.h())i=e&&ui(r,1)!=null?ui(r,1)??0:-1,t.push({score:Dn(r,2)??0,index:i,categoryName:An(Bt(r,3))??""??"",displayName:An(Bt(r,4))??""??""});n.push(t)}return n}var Ln=class extends $n{constructor(t,e){super(new Si(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ce(t=this.m=new rv,0,1,e=new zt),this.v=new _d,Ce(this.m,0,2,this.v),this.G=new Ad,Ce(this.v,0,3,this.G),this.C=new sv,Ce(this.v,0,2,this.C),this.i=new dw,Ce(this.m,0,3,this.i),Pe(this.C,2,.5),Pe(this.v,4,.5),Pe(this.G,2,.5)}D(){return"GestureRecognizer"}get baseOptions(){return dt(this.m,zt,1)}set baseOptions(t){Ce(this.m,0,1,t)}A(t){if(Ui(this.C,3,t.numHands??1),"minHandDetectionConfidence"in t&&Pe(this.C,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.v,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Pe(this.G,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new zr,n=e,i=nh(t.cannedGesturesClassifierOptions,dt(this.i,zr,3)?.l());Ce(n,0,2,i),Ce(this.i,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&dt(this.i,zr,3)?.h();return t.customGesturesClassifierOptions?(Ce(n=e=new zr,0,2,i=nh(t.customGesturesClassifierOptions,dt(this.i,zr,4)?.l())),Ce(this.i,0,4,e)):t.customGesturesClassifierOptions===void 0&&dt(this.i,zr,4)?.h(),this.l(t)}Ya(t,e){return xm(this),yi(this,t,e),Am(this)}Za(t,e,n){return xm(this),zi(this,t,n,e),Am(this)}u(){var t=new ni;kt(t,"image_in"),kt(t,"norm_rect"),ft(t,"hand_gestures"),ft(t,"hand_landmarks"),ft(t,"world_hand_landmarks"),ft(t,"handedness");var e=new ti;Ni(e,fw,this.m);var n=new zn;Jn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect"),rt(n,"HAND_GESTURES:hand_gestures"),rt(n,"LANDMARKS:hand_landmarks"),rt(n,"WORLD_LANDMARKS:world_hand_landmarks"),rt(n,"HANDEDNESS:handedness"),n.A(e),mi(t,n),this.h.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=mo(r),this.landmarks.push(go(i));me(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",i=>{me(this,i)}),this.h.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=jr(r),this.worldLandmarks.push(Kr(i));me(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",i=>{me(this,i)}),this.h.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(..._m(i,!1)),me(this,s)}),this.h.attachEmptyPacketListener("hand_gestures",i=>{me(this,i)}),this.h.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(..._m(i)),me(this,s)}),this.h.attachEmptyPacketListener("handedness",i=>{me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};function Em(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}Ln.prototype.recognizeForVideo=Ln.prototype.Za,Ln.prototype.recognize=Ln.prototype.Ya,Ln.prototype.setOptions=Ln.prototype.A,Ln.createFromModelPath=function(t,e){return ot(Ln,t,{baseOptions:{modelAssetPath:e}})},Ln.createFromModelBuffer=function(t,e){return ot(Ln,t,{baseOptions:{modelAssetBuffer:e}})},Ln.createFromOptions=function(t,e){return ot(Ln,t,e)},Ln.HAND_CONNECTIONS=Fd,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",Ln.HAND_CONNECTIONS);var bn=class extends $n{constructor(t,e){super(new Si(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ce(t=this.i=new _d,0,1,e=new zt),this.v=new Ad,Ce(this.i,0,3,this.v),this.m=new sv,Ce(this.i,0,2,this.m),Ui(this.m,3,1),Pe(this.m,2,.5),Pe(this.v,2,.5),Pe(this.i,4,.5)}D(){return"HandLandmarker"}get baseOptions(){return dt(this.i,zt,1)}set baseOptions(t){Ce(this.i,0,1,t)}A(t){return"numHands"in t&&Ui(this.m,3,t.numHands??1),"minHandDetectionConfidence"in t&&Pe(this.m,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.i,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Pe(this.v,2,t.minHandPresenceConfidence??.5),this.l(t)}H(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],yi(this,t,e),Em(this)}I(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],zi(this,t,n,e),Em(this)}u(){var t=new ni;kt(t,"image_in"),kt(t,"norm_rect"),ft(t,"hand_landmarks"),ft(t,"world_hand_landmarks"),ft(t,"handedness");var e=new ti;Ni(e,pw,this.i);var n=new zn;Jn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect"),rt(n,"LANDMARKS:hand_landmarks"),rt(n,"WORLD_LANDMARKS:world_hand_landmarks"),rt(n,"HANDEDNESS:handedness"),n.A(e),mi(t,n),this.h.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=mo(r),this.landmarks.push(go(i));me(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",i=>{me(this,i)}),this.h.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=jr(r),this.worldLandmarks.push(Kr(i));me(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",i=>{me(this,i)}),this.h.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,a=r.push,o=[];for(let c of i){i=Jc(c);let l=[];for(let h of i.h())l.push({score:Dn(h,2)??0,index:ui(h,1)??0??-1,categoryName:An(Bt(h,3))??""??"",displayName:An(Bt(h,4))??""??""});o.push(l)}a.call(r,...o),me(this,s)}),this.h.attachEmptyPacketListener("handedness",i=>{me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};bn.prototype.detectForVideo=bn.prototype.I,bn.prototype.detect=bn.prototype.H,bn.prototype.setOptions=bn.prototype.A,bn.createFromModelPath=function(t,e){return ot(bn,t,{baseOptions:{modelAssetPath:e}})},bn.createFromModelBuffer=function(t,e){return ot(bn,t,{baseOptions:{modelAssetBuffer:e}})},bn.createFromOptions=function(t,e){return ot(bn,t,e)},bn.HAND_CONNECTIONS=Fd,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",bn.HAND_CONNECTIONS);var Nv=Mi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Mm(t){t.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Sm(t){try{if(!t.G)return t.i;t.G(t.i)}finally{tl(t)}}function jo(t,e){t=mo(t),e.push(go(t))}var tt=class extends $n{constructor(t,e){super(new Si(t,e),"input_frames_image",null,!1),this.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ce(t=this.m=new uv,0,1,e=new zt),this.Z=new Ad,Ce(this.m,0,2,this.Z),this.Ba=new mw,Ce(this.m,0,3,this.Ba),this.v=new $c,Ce(this.m,0,4,this.v),this.P=new tv,Ce(this.m,0,5,this.P),this.C=new cv,Ce(this.m,0,6,this.C),this.aa=new lv,Ce(this.m,0,7,this.aa),Pe(this.v,2,.5),Pe(this.v,3,.3),Pe(this.P,2,.5),Pe(this.C,2,.5),Pe(this.C,3,.3),Pe(this.aa,2,.5),Pe(this.Z,2,.5)}D(){return"HolisticLandmarker"}get baseOptions(){return dt(this.m,zt,1)}set baseOptions(t){Ce(this.m,0,1,t)}A(t){return"minFaceDetectionConfidence"in t&&Pe(this.v,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Pe(this.v,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Pe(this.P,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Pe(this.C,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Pe(this.C,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Pe(this.aa,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Pe(this.Z,2,t.minHandLandmarksConfidence??.5),this.l(t)}H(t,e,n){var i=typeof e!="function"?e:{};return this.G=typeof e=="function"?e:n,Mm(this),yi(this,t,i),Sm(this)}I(t,e,n,i){var s=typeof n!="function"?n:{};return this.G=typeof n=="function"?n:i,Mm(this),zi(this,t,s,e),Sm(this)}u(){var t=new ni;kt(t,"input_frames_image"),ft(t,"pose_landmarks"),ft(t,"pose_world_landmarks"),ft(t,"face_landmarks"),ft(t,"left_hand_landmarks"),ft(t,"left_hand_world_landmarks"),ft(t,"right_hand_landmarks"),ft(t,"right_hand_world_landmarks");var e=new ti,n=new Np;Jn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))We(s,2,zc(r,0,eo));else{if(!(typeof r=="string"||r instanceof Li||Oh(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");co(s,2,Uc(r,!1),cr())}})(n,this.m.h());var i=new zn;Jn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),to(i,8,Np,n),Ut(i,"IMAGE:input_frames_image"),rt(i,"POSE_LANDMARKS:pose_landmarks"),rt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),rt(i,"FACE_LANDMARKS:face_landmarks"),rt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),rt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),rt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),rt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.A(e),mi(t,i),el(this,t),this.h.attachProtoListener("pose_landmarks",(s,r)=>{jo(s,this.i.poseLandmarks),me(this,r)}),this.h.attachEmptyPacketListener("pose_landmarks",s=>{me(this,s)}),this.h.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.i.poseWorldLandmarks;s=jr(s),a.push(Kr(s)),me(this,r)}),this.h.attachEmptyPacketListener("pose_world_landmarks",s=>{me(this,s)}),this.outputPoseSegmentationMasks&&(rt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),ua(this,"pose_segmentation_mask"),this.h.ha("pose_segmentation_mask",(s,r)=>{this.i.poseSegmentationMasks=[da(this,s,!0,!this.G)],me(this,r)}),this.h.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.i.poseSegmentationMasks=[],me(this,s)})),this.h.attachProtoListener("face_landmarks",(s,r)=>{jo(s,this.i.faceLandmarks),me(this,r)}),this.h.attachEmptyPacketListener("face_landmarks",s=>{me(this,s)}),this.outputFaceBlendshapes&&(ft(t,"extra_blendshapes"),rt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.h.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.i.faceBlendshapes;this.outputFaceBlendshapes&&(s=Jc(s),a.push(yd(s.h()??[]))),me(this,r)}),this.h.attachEmptyPacketListener("extra_blendshapes",s=>{me(this,s)})),this.h.attachProtoListener("left_hand_landmarks",(s,r)=>{jo(s,this.i.leftHandLandmarks),me(this,r)}),this.h.attachEmptyPacketListener("left_hand_landmarks",s=>{me(this,s)}),this.h.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.i.leftHandWorldLandmarks;s=jr(s),a.push(Kr(s)),me(this,r)}),this.h.attachEmptyPacketListener("left_hand_world_landmarks",s=>{me(this,s)}),this.h.attachProtoListener("right_hand_landmarks",(s,r)=>{jo(s,this.i.rightHandLandmarks),me(this,r)}),this.h.attachEmptyPacketListener("right_hand_landmarks",s=>{me(this,s)}),this.h.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.i.rightHandWorldLandmarks;s=jr(s),a.push(Kr(s)),me(this,r)}),this.h.attachEmptyPacketListener("right_hand_world_landmarks",s=>{me(this,s)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};tt.prototype.detectForVideo=tt.prototype.I,tt.prototype.detect=tt.prototype.H,tt.prototype.setOptions=tt.prototype.A,tt.createFromModelPath=function(t,e){return ot(tt,t,{baseOptions:{modelAssetPath:e}})},tt.createFromModelBuffer=function(t,e){return ot(tt,t,{baseOptions:{modelAssetBuffer:e}})},tt.createFromOptions=function(t,e){return ot(tt,t,e)},tt.HAND_CONNECTIONS=Fd,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",tt.HAND_CONNECTIONS),tt.POSE_CONNECTIONS=Nv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",tt.POSE_CONNECTIONS),tt.FACE_LANDMARKS_LIPS=Dd,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",tt.FACE_LANDMARKS_LIPS),tt.FACE_LANDMARKS_LEFT_EYE=Pd,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",tt.FACE_LANDMARKS_LEFT_EYE),tt.FACE_LANDMARKS_LEFT_EYEBROW=Id,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",tt.FACE_LANDMARKS_LEFT_EYEBROW),tt.FACE_LANDMARKS_LEFT_IRIS=Bv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",tt.FACE_LANDMARKS_LEFT_IRIS),tt.FACE_LANDMARKS_RIGHT_EYE=Ld,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",tt.FACE_LANDMARKS_RIGHT_EYE),tt.FACE_LANDMARKS_RIGHT_EYEBROW=Bd,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",tt.FACE_LANDMARKS_RIGHT_EYEBROW),tt.FACE_LANDMARKS_RIGHT_IRIS=Uv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",tt.FACE_LANDMARKS_RIGHT_IRIS),tt.FACE_LANDMARKS_FACE_OVAL=Ud,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",tt.FACE_LANDMARKS_FACE_OVAL),tt.FACE_LANDMARKS_CONTOURS=Fv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",tt.FACE_LANDMARKS_CONTOURS),tt.FACE_LANDMARKS_TESSELATION=Ov,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",tt.FACE_LANDMARKS_TESSELATION);var oi=class extends $n{constructor(t,e){super(new Si(t,e),"input_image","norm_rect",!0),this.m={classifications:[]},Ce(t=this.i=new hv,0,1,e=new zt)}D(){return"ImageClassifier"}get baseOptions(){return dt(this.i,zt,1)}set baseOptions(t){Ce(this.i,0,1,t)}A(t){return Ce(this.i,0,2,nh(t,dt(this.i,vd,2))),this.l(t)}Ha(t,e){return this.m={classifications:[]},yi(this,t,e),this.m}Ia(t,e,n){return this.m={classifications:[]},zi(this,t,n,e),this.m}u(){var t=new ni;kt(t,"input_image"),kt(t,"norm_rect"),ft(t,"classifications");var e=new ti;Ni(e,gw,this.i);var n=new zn;Jn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ut(n,"IMAGE:input_image"),Ut(n,"NORM_RECT:norm_rect"),rt(n,"CLASSIFICATIONS:classifications"),n.A(e),mi(t,n),this.h.attachProtoListener("classifications",(i,s)=>{this.m=Tw(iw(i)),me(this,s)}),this.h.attachEmptyPacketListener("classifications",i=>{me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};oi.prototype.classifyForVideo=oi.prototype.Ia,oi.prototype.classify=oi.prototype.Ha,oi.prototype.setOptions=oi.prototype.A,oi.createFromModelPath=function(t,e){return ot(oi,t,{baseOptions:{modelAssetPath:e}})},oi.createFromModelBuffer=function(t,e){return ot(oi,t,{baseOptions:{modelAssetBuffer:e}})},oi.createFromOptions=function(t,e){return ot(oi,t,e)};var Xn=class extends $n{constructor(t,e){super(new Si(t,e),"image_in","norm_rect",!0),this.i=new dv,this.embeddings={embeddings:[]},Ce(t=this.i,0,1,e=new zt)}D(){return"ImageEmbedder"}get baseOptions(){return dt(this.i,zt,1)}set baseOptions(t){Ce(this.i,0,1,t)}A(t){var e=this.i,n=dt(this.i,qp,2);if(n=n?n.clone():new qp,t.l2Normalize!==void 0){var i=t.l2Normalize;We(n,1,i==null?i:hc(i))}else"l2Normalize"in t&&We(n,1);return t.quantize!==void 0?We(n,2,(i=t.quantize)==null?i:hc(i)):"quantize"in t&&We(n,2),Ce(e,0,2,n),this.l(t)}Oa(t,e){return yi(this,t,e),this.embeddings}Pa(t,e,n){return zi(this,t,n,e),this.embeddings}u(){var t=new ni;kt(t,"image_in"),kt(t,"norm_rect"),ft(t,"embeddings_out");var e=new ti;Ni(e,vw,this.i);var n=new zn;Jn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect"),rt(n,"EMBEDDINGS:embeddings_out"),n.A(e),mi(t,n),this.h.attachProtoListener("embeddings_out",(i,s)=>{i=aw(i),this.embeddings=(function(r){return{embeddings:Ar(r,rw,1).map(a=>{var o={headIndex:ui(a,3)??0??-1,headName:An(Bt(a,4))??""??""};if(J0(a,Yp,1,rc))a=er(a=ju(a,Yp,1,rc),1,jn,$s()),o.floatEmbedding=a.slice();else{let c=new Uint8Array(0);o.quantizedEmbedding=ju(a,sw,2,rc)?.h()?.i()??c}return o}),timestampMs:Av(Bt(r,2,void 0,fc)??Z0)}})(i),me(this,s)}),this.h.attachEmptyPacketListener("embeddings_out",i=>{me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};Xn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Jp(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Jp(Zp(t.quantizedEmbedding),Zp(e.quantizedEmbedding))}return t},Xn.prototype.embedForVideo=Xn.prototype.Pa,Xn.prototype.embed=Xn.prototype.Oa,Xn.prototype.setOptions=Xn.prototype.A,Xn.createFromModelPath=function(t,e){return ot(Xn,t,{baseOptions:{modelAssetPath:e}})},Xn.createFromModelBuffer=function(t,e){return ot(Xn,t,{baseOptions:{modelAssetBuffer:e}})},Xn.createFromOptions=function(t,e){return ot(Xn,t,e)};var hh=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach(t=>{t.close()}),this.categoryMask?.close()}};function Xw(t){var e=(function(n){return Ar(n,zn,1)})(t.ka()).filter(n=>(An(Bt(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.v=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(dt(e[0],ti,7)?.u()?.h()??new Map).forEach((n,i)=>{t.v[Number(i)]=An(Bt(n,1))??""})}function ym(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function wm(t){try{let e=new hh(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.m)return e;t.m(e)}finally{tl(t)}}hh.prototype.close=hh.prototype.close;var Bn=class extends $n{constructor(t,e){super(new Si(t,e),"image_in","norm_rect",!1),this.v=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new Sd,this.C=new fv,Ce(this.i,0,3,this.C),Ce(t=this.i,0,1,e=new zt)}D(){return"ImageSegmenter"}get baseOptions(){return dt(this.i,zt,1)}set baseOptions(t){Ce(this.i,0,1,t)}A(t){return t.displayNamesLocale!==void 0?We(this.i,2,Ji(t.displayNamesLocale)):"displayNamesLocale"in t&&We(this.i,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}M(){Xw(this)}segment(t,e,n){var i=typeof e!="function"?e:{};return this.m=typeof e=="function"?e:n,ym(this),yi(this,t,i),wm(this)}fb(t,e,n,i){var s=typeof n!="function"?n:{};return this.m=typeof n=="function"?n:i,ym(this),zi(this,t,s,e),wm(this)}Sa(){return this.v}u(){var t=new ni;kt(t,"image_in"),kt(t,"norm_rect");var e=new ti;Ni(e,mv,this.i);var n=new zn;Jn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect"),n.A(e),mi(t,n),el(this,t),this.outputConfidenceMasks&&(ft(t,"confidence_masks"),rt(n,"CONFIDENCE_MASKS:confidence_masks"),ua(this,"confidence_masks"),this.h.ia("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>da(this,r,!0,!this.m)),me(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],me(this,i)})),this.outputCategoryMask&&(ft(t,"category_mask"),rt(n,"CATEGORY_MASK:category_mask"),ua(this,"category_mask"),this.h.ha("category_mask",(i,s)=>{this.categoryMask=da(this,i,!1,!this.m),me(this,s)}),this.h.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,me(this,i)})),ft(t,"quality_scores"),rt(n,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,me(this,s)}),this.h.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};Bn.prototype.getLabels=Bn.prototype.Sa,Bn.prototype.segmentForVideo=Bn.prototype.fb,Bn.prototype.segment=Bn.prototype.segment,Bn.prototype.setOptions=Bn.prototype.A,Bn.createFromModelPath=function(t,e){return ot(Bn,t,{baseOptions:{modelAssetPath:e}})},Bn.createFromModelBuffer=function(t,e){return ot(Bn,t,{baseOptions:{modelAssetBuffer:e}})},Bn.createFromOptions=function(t,e){return ot(Bn,t,e)};var Yw={0:0,1:1,2:2,3:3};function Kl(){return wd()?void 0:document.createElement("canvas")}var Un=class extends Tc{constructor(t,e){super(new kw(t,e)),this.v=new Cd,this.delegate="CPU",this.i=0,this.baseOptions=new zt,this.C=this.m=0}D(){return"InteractiveSegmenter"}get j(){return this.h.j}A(t){return this.delegate=t.baseOptions?.delegate??"CPU",super.l(t)}gb(t){if(this.i===0)throw Error("Segmenter is not initialized.");var e;if(this.m!==0&&(this.j._free(this.m),this.m=0),!(e=typeof ImageData<"u"&&t instanceof ImageData))if(typeof t!="object"||t===null)e=!1;else{e=t.data;var n=t.width,i=t.height;e=Number.isInteger(n)&&n>0&&Number.isInteger(i)&&i>0&&(e instanceof Uint8ClampedArray||e instanceof Uint8Array)}if(e)e=t.width,n=t.height,t=t.data;else{if([e,n]=Td(t),typeof OffscreenCanvas<"u")i=new OffscreenCanvas(e,n);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");i=document.createElement("canvas")}if(i.width=e,i.height=n,!(i=i.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");i.drawImage(t,0,0),t=i.getImageData(0,0,e,n).data}if(!t)throw Error("Unsupported image source or failed to extract image pixels.");i=(function({Xa:r,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(r%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${a*o}).`);if((r/=a*o)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Xa:t.length,width:e,height:n});var s=this.j._malloc(t.length);if(this.j.HEAPU8.set(t,s),this.m=s,!this.j._interactive_segmenter_set_image(this.i,s,e,n,i))throw Error("Failed to set image on native engine.")}segment(t){if(this.i===0)throw Error("Segmenter is not initialized.");var e=(function(h){h=h.map(({isCompleted:d,brushMode:f,point:g})=>{f=Yw[f]??0,g=g.map(({x:m,y:p})=>{var x=new Aw;return Wr(x,1,m),Wr(x,2,p),x});var v=new _w;return Ku(v,d),co(v,1,is(f),0),Qu(v,2,g),v});var u=new Ew;return Qu(u,1,h),Mw(u)})(t);t=this.j._malloc(e.length),this.j.HEAPU8.set(e,t);var n=this.j._malloc(12),i=n+4,s=n+8,r=0,a=this.C++;try{if(this.o)if(this.delegate==="GPU"){var o=this.o;++o.h.U,o.i.set(a,performance.now())}else{var c=this.o;++c.h.R,c.i.set(a,performance.now())}if((r=this.j._interactive_segmenter_segment(this.i,t,e.length,n,i,s))===0)throw Error("Segmentation failed.");this.o?.Aa(a);let h=this.j.HEAPU32[n/4],u=this.j.HEAPU32[i/4],d=new Float32Array(this.j.HEAPU8.buffer,r,this.j.HEAPU32[s/4]/4);var l=new Float32Array(d);if(o=h*u,(l instanceof Uint8Array||l instanceof Float32Array)&&l.length!==o)throw Error("Unsupported channel count: "+l.length/o);return new tn([l],!0,!1,this.h.j.canvas??void 0,this.v,h,u)}finally{t!==0&&this.j._free(t),n!==0&&this.j._free(n),r!==0&&this.j._free(r)}}u(){this.i!==0&&(this.o?.ya(),this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0);var t=new Sc;if(this.delegate==="GPU"){var e=new gd;Ei(t,2,$i,e)}else Ui(e=new qy,1,4),Ei(t,1,$i,e);if(Ce(this.baseOptions,0,3,t),t=cw(this.baseOptions),e=this.j._malloc(t.length),this.j.HEAPU8.set(t,e),this.i=this.j._interactive_segmenter_create(e,t.length),this.j._free(e),this.i===0)throw Error("Failed to create native InteractiveSegmenter engine.");this.o?.za()}close(){this.i!==0&&(this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0),this.v.close(),super.close()}};Un.prototype.close=Un.prototype.close,Un.prototype.segment=Un.prototype.segment,Un.prototype.setImage=Un.prototype.gb,Un.prototype.setOptions=Un.prototype.A,Un.createFromModelPath=function(t,e){return ac(Un,Kl(),t,{baseOptions:{modelAssetPath:e}})},Un.createFromModelBuffer=function(t,e){return ac(Un,Kl(),t,{baseOptions:{modelAssetBuffer:e}})},Un.createFromOptions=function(t,e){var n=e.canvas??Kl();return ac(Un,n,t,e)};var dh=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach(t=>{t.close()}),this.categoryMask?.close()}};dh.prototype.close=dh.prototype.close;var Ti=class extends $n{constructor(t,e){super(new Si(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new Sd,this.v=new fv,Ce(this.i,0,3,this.v),Ce(t=this.i,0,1,e=new zt)}D(){return"InteractiveSegmenterLegacy"}get baseOptions(){return dt(this.i,zt,1)}set baseOptions(t){Ce(this.i,0,1,t)}A(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){var s=typeof n!="function"?n:{};if(this.m=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.J+1,i=new gv,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var r=new Ql;Ku(r,!0),Wr(r,1,e.keypoint.x),Wr(r,2,e.keypoint.y),Ei(i,1,th,r)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new Sw;for(r of e.scribble)Ku(e=new Ql,!0),Wr(e,1,r.x),Wr(e,2,r.y),to(o,1,Ql,e);Ei(i,2,th,o)}}this.h.addProtoToStream(i.h(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",n),yi(this,t,s);e:{try{let o=new dh(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.m){var a=o;break e}this.m(o)}finally{tl(this)}a=void 0}return a}u(){var t=new ni;kt(t,"image_in"),kt(t,"roi_in"),kt(t,"norm_rect_in");var e=new ti;Ni(e,mv,this.i);var n=new zn;Jn(n,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterLegacyGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"ROI:roi_in"),Ut(n,"NORM_RECT:norm_rect_in"),n.A(e),mi(t,n),el(this,t),this.outputConfidenceMasks&&(ft(t,"confidence_masks"),rt(n,"CONFIDENCE_MASKS:confidence_masks"),ua(this,"confidence_masks"),this.h.ia("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>da(this,r,!0,!this.m)),me(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],me(this,i)})),this.outputCategoryMask&&(ft(t,"category_mask"),rt(n,"CATEGORY_MASK:category_mask"),ua(this,"category_mask"),this.h.ha("category_mask",(i,s)=>{this.categoryMask=da(this,i,!1,!this.m),me(this,s)}),this.h.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,me(this,i)})),ft(t,"quality_scores"),rt(n,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,me(this,s)}),this.h.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};Ti.prototype.segment=Ti.prototype.segment,Ti.prototype.setOptions=Ti.prototype.A,Ti.createFromModelPath=function(t,e){return ot(Ti,t,{baseOptions:{modelAssetPath:e}})},Ti.createFromModelBuffer=function(t,e){return ot(Ti,t,{baseOptions:{modelAssetBuffer:e}})},Ti.createFromOptions=function(t,e){return ot(Ti,t,e)};var ci=class extends $n{constructor(t,e){super(new Si(t,e),"input_frame_gpu","norm_rect",!1),this.m={detections:[]},Ce(t=this.i=new vv,0,1,e=new zt)}D(){return"ObjectDetector"}get baseOptions(){return dt(this.i,zt,1)}set baseOptions(t){Ce(this.i,0,1,t)}A(t){return t.displayNamesLocale!==void 0?We(this.i,2,Ji(t.displayNamesLocale)):"displayNamesLocale"in t&&We(this.i,2),t.maxResults!==void 0?Ui(this.i,3,t.maxResults):"maxResults"in t&&We(this.i,3),t.scoreThreshold!==void 0?Pe(this.i,4,t.scoreThreshold):"scoreThreshold"in t&&We(this.i,4),t.categoryAllowlist!==void 0?mc(this.i,5,t.categoryAllowlist):"categoryAllowlist"in t&&We(this.i,5),t.categoryDenylist!==void 0?mc(this.i,6,t.categoryDenylist):"categoryDenylist"in t&&We(this.i,6),this.l(t)}H(t,e){return this.m={detections:[]},yi(this,t,e),this.m}I(t,e,n){return this.m={detections:[]},zi(this,t,n,e),this.m}u(){var t=new ni;kt(t,"input_frame_gpu"),kt(t,"norm_rect"),ft(t,"detections");var e=new ti;Ni(e,yw,this.i);var n=new zn;Jn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ut(n,"IMAGE:input_frame_gpu"),Ut(n,"NORM_RECT:norm_rect"),rt(n,"DETECTIONS:detections"),n.A(e),mi(t,n),this.h.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=Zg(r),this.m.detections.push(_v(i));me(this,s)}),this.h.attachEmptyPacketListener("detections",i=>{me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};ci.prototype.detectForVideo=ci.prototype.I,ci.prototype.detect=ci.prototype.H,ci.prototype.setOptions=ci.prototype.A,ci.createFromModelPath=async function(t,e){return ot(ci,t,{baseOptions:{modelAssetPath:e}})},ci.createFromModelBuffer=function(t,e){return ot(ci,t,{baseOptions:{modelAssetBuffer:e}})},ci.createFromOptions=function(t,e){return ot(ci,t,e)};var fh=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach(t=>{t.close()})}};function Tm(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function bm(t){try{let e=new fh(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.v)return e;t.v(e)}finally{tl(t)}}fh.prototype.close=fh.prototype.close;var Fn=class extends $n{constructor(t,e){super(new Si(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ce(t=this.i=new xv,0,1,e=new zt),this.C=new lv,Ce(this.i,0,3,this.C),this.m=new cv,Ce(this.i,0,2,this.m),Ui(this.m,4,1),Pe(this.m,2,.5),Pe(this.C,2,.5),Pe(this.i,4,.5)}D(){return"PoseLandmarker"}get baseOptions(){return dt(this.i,zt,1)}set baseOptions(t){Ce(this.i,0,1,t)}A(t){return"numPoses"in t&&Ui(this.m,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Pe(this.m,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.i,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Pe(this.C,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}H(t,e,n){var i=typeof e!="function"?e:{};return this.v=typeof e=="function"?e:n,Tm(this),yi(this,t,i),bm(this)}I(t,e,n,i){var s=typeof n!="function"?n:{};return this.v=typeof n=="function"?n:i,Tm(this),zi(this,t,s,e),bm(this)}u(){var t=new ni;kt(t,"image_in"),kt(t,"norm_rect"),ft(t,"normalized_landmarks"),ft(t,"world_landmarks"),ft(t,"segmentation_masks");var e=new ti;Ni(e,ww,this.i);var n=new zn;Jn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect"),rt(n,"NORM_LANDMARKS:normalized_landmarks"),rt(n,"WORLD_LANDMARKS:world_landmarks"),n.A(e),mi(t,n),el(this,t),this.h.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(let r of i)i=mo(r),this.landmarks.push(go(i));me(this,s)}),this.h.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],me(this,i)}),this.h.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(let r of i)i=jr(r),this.worldLandmarks.push(Kr(i));me(this,s)}),this.h.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],me(this,i)}),this.outputSegmentationMasks&&(rt(n,"SEGMENTATION_MASK:segmentation_masks"),ua(this,"segmentation_masks"),this.h.ia("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>da(this,r,!0,!this.v)),me(this,s)}),this.h.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],me(this,i)})),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};Fn.prototype.detectForVideo=Fn.prototype.I,Fn.prototype.detect=Fn.prototype.H,Fn.prototype.setOptions=Fn.prototype.A,Fn.createFromModelPath=function(t,e){return ot(Fn,t,{baseOptions:{modelAssetPath:e}})},Fn.createFromModelBuffer=function(t,e){return ot(Fn,t,{baseOptions:{modelAssetBuffer:e}})},Fn.createFromOptions=function(t,e){return ot(Fn,t,e)},Fn.POSE_CONNECTIONS=Nv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",Fn.POSE_CONNECTIONS);class qw{constructor(e,n,i,s){N(this,"video");N(this,"canvas");N(this,"ctx");N(this,"container");N(this,"statusBadge");N(this,"gestureBadge");N(this,"toggleBtn");N(this,"landmarker",null);N(this,"stream",null);N(this,"isRunning",!1);N(this,"isProcessing",!1);N(this,"lastVideoTime",-1);N(this,"lastFrameTime",-1);N(this,"neutralCenterX",.5);N(this,"activeGesture","NONE");N(this,"gestureCooldowns",{});N(this,"processLoop",()=>{if(this.isRunning){if(this.video.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA&&this.landmarker){const e=performance.now();if(this.video.currentTime!==this.lastVideoTime){this.lastVideoTime=this.video.currentTime;const n=this.landmarker.detectForVideo(this.video,e);this.handleResults(n)}}requestAnimationFrame(this.processLoop)}});this.controller=e,this.onInteract=n,this.quiz=i,this.speedBoost=s,this.createDom()}setQuiz(e){this.quiz=e}setSpeedBoost(e){this.speedBoost=e}createDom(){const e=document.createElement("style");e.textContent=`
      #webcam-panel {
        position: fixed;
        bottom: 24px;
        left: 24px;
        z-index: 60;
        background: rgba(12, 22, 14, 0.88);
        backdrop-filter: blur(8px);
        border: 2px solid rgba(182, 146, 78, 0.65);
        border-radius: 12px;
        padding: 10px 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.7), 0 0 16px rgba(182, 146, 78, 0.2);
        color: #e2eccd;
        font-family: Georgia, 'Times New Roman', serif;
        user-select: none;
        width: 220px;
        transition: transform 0.25s ease, opacity 0.25s ease;
      }
      #webcam-panel.minimized {
        transform: translateY(calc(100% - 38px));
      }
      #webcam-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 0.1em;
        margin-bottom: 8px;
        cursor: pointer;
      }
      #webcam-header .title {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      #webcam-status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ef4444;
        display: inline-block;
        box-shadow: 0 0 6px #ef4444;
      }
      #webcam-status-dot.active {
        background: #22c55e;
        box-shadow: 0 0 8px #22c55e;
      }
      #webcam-status-dot.init {
        background: #eab308;
        box-shadow: 0 0 8px #eab308;
      }
      #webcam-view-wrap {
        position: relative;
        width: 100%;
        height: 140px;
        border-radius: 8px;
        overflow: hidden;
        background: #060e08;
        border: 1px solid rgba(255,255,255,0.1);
      }
      #webcam-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scaleX(-1); /* Mirror camera */
        display: block;
      }
      #webcam-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleX(-1); /* Mirror canvas to match */
        pointer-events: none;
      }
      #webcam-badge {
        margin-top: 8px;
        padding: 5px 8px;
        border-radius: 6px;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(182, 146, 78, 0.4);
        font-size: 11px;
        font-weight: bold;
        text-align: center;
        color: #ffd700;
        min-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.05em;
      }
      #webcam-controls {
        display: flex;
        gap: 6px;
        margin-top: 8px;
      }
      .webcam-btn {
        flex: 1;
        padding: 5px 8px;
        font-size: 10px;
        font-family: inherit;
        letter-spacing: 0.08em;
        font-weight: bold;
        background: rgba(45, 65, 35, 0.6);
        border: 1px solid rgba(182, 146, 78, 0.5);
        border-radius: 4px;
        color: #e2eccd;
        cursor: pointer;
        transition: background 0.2s;
      }
      .webcam-btn:hover {
        background: rgba(70, 105, 55, 0.8);
      }
      .webcam-btn.active {
        background: rgba(34, 197, 94, 0.3);
        border-color: #22c55e;
        color: #86efac;
      }
      #webcam-guide {
        font-size: 9px;
        color: #8ca37d;
        margin-top: 6px;
        line-height: 1.35;
      }
    `,document.head.appendChild(e);const n=document.createElement("div");n.id="webcam-panel",n.innerHTML=`
      <div id="webcam-header" title="Click to minimize/expand">
        <div class="title">
          <span id="webcam-status-dot"></span>
          <span>HAND GESTURES</span>
        </div>
        <span id="webcam-min-btn">▼</span>
      </div>
      <div id="webcam-view-wrap">
        <video id="webcam-video" autoplay playsinline muted></video>
        <canvas id="webcam-canvas" width="220" height="140"></canvas>
      </div>
      <div id="webcam-badge">✋ Ready to Start</div>
      <div id="webcam-controls">
        <button id="webcam-toggle-btn" class="webcam-btn">START CAM</button>
        <button id="webcam-calib-btn" class="webcam-btn">CALIBRATE</button>
      </div>
      <div id="webcam-guide">
        ✋ Open Palm: Forward &middot; ✊ Fist: Stop<br>
        👉 Point Right: Turn Right &middot; 👈 Point Left: Turn Left<br>
        👍 Thumb: Jump &middot; ✌️ 2 Fingers: Door Interact
      </div>
    `,document.body.appendChild(n),this.container=n,this.video=n.querySelector("#webcam-video"),this.canvas=n.querySelector("#webcam-canvas"),this.ctx=this.canvas.getContext("2d"),this.statusBadge=n.querySelector("#webcam-status-dot"),this.gestureBadge=n.querySelector("#webcam-badge"),this.toggleBtn=n.querySelector("#webcam-toggle-btn"),n.querySelector("#webcam-header").addEventListener("click",()=>{n.classList.toggle("minimized");const i=n.querySelector("#webcam-min-btn");i.textContent=n.classList.contains("minimized")?"▲":"▼"}),this.toggleBtn.addEventListener("click",()=>{this.isRunning?this.stop():this.start()}),n.querySelector("#webcam-calib-btn").addEventListener("click",()=>{this.gestureBadge.textContent="🎯 Calibrated Center"})}async start(){if(!this.isRunning){this.statusBadge.className="init",this.gestureBadge.textContent="⏳ Loading AI Model...",this.toggleBtn.disabled=!0;try{if(!this.landmarker){const n=await Qi.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");this.landmarker=await bn.createFromOptions(n,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:1})}this.gestureBadge.textContent="📷 Requesting Camera...";const e=await navigator.mediaDevices.getUserMedia({video:{width:320,height:240,frameRate:{ideal:30}}});this.stream=e,this.video.srcObject=e,await this.video.play(),this.isRunning=!0,this.statusBadge.className="active",this.gestureBadge.textContent="🟢 Camera Active",this.toggleBtn.textContent="STOP CAM",this.toggleBtn.classList.add("active"),this.toggleBtn.disabled=!1,this.processLoop()}catch(e){console.error("Camera gesture error:",e),this.statusBadge.className="",this.gestureBadge.textContent="❌ Camera Blocked / Error",this.toggleBtn.textContent="START CAM",this.toggleBtn.disabled=!1,this.toggleBtn.classList.remove("active"),this.isRunning=!1}}}stop(){this.isRunning=!1,this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null),this.video.srcObject=null,this.statusBadge.className="",this.gestureBadge.textContent="⚪ Cam Off (Keys active)",this.toggleBtn.textContent="START CAM",this.toggleBtn.classList.remove("active"),this.toggleBtn.disabled=!1,this.quiz&&this.quiz.hideGesturePointer(),this.speedBoost&&this.speedBoost.hidePointer(),this.controller.gestureForward=!1,this.controller.gestureTurnLeft=!1,this.controller.gestureTurnRight=!1,this.activeGesture="NONE",this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}handleResults(e){const n=this.canvas.width,i=this.canvas.height;if(this.ctx.clearRect(0,0,n,i),!e.landmarks||e.landmarks.length===0){this.quiz&&this.quiz.isQuizActive&&this.quiz.hideGesturePointer(),this.speedBoost&&this.speedBoost.hidePointer(),this.controller.gestureForward=!1,this.controller.gestureTurnLeft=!1,this.controller.gestureTurnRight=!1,this.activeGesture!=="NONE"&&(this.activeGesture="NONE",this.gestureBadge.textContent="✋ Show hand in camera");return}const s=e.landmarks[0],r=performance.now(),a=this.lastFrameTime>0?Math.min(.1,(r-this.lastFrameTime)/1e3):.033;this.lastFrameTime=r,this.drawSkeleton(s,n,i);const o=s[0],c=(x,S)=>Math.hypot(x.x-S.x,x.y-S.y),l=c(s[8],o)>c(s[6],o)*1.18&&c(s[8],s[5])>.09,h=c(s[12],o)>c(s[10],o)*1.18&&c(s[12],s[9])>.09,u=c(s[16],o)>c(s[14],o)*1.18&&c(s[16],s[13])>.09,d=c(s[20],o)>c(s[18],o)*1.18&&c(s[20],s[17])>.09,f=l&&!h&&!u&&!d,g=(1-s[8].x)*window.innerWidth,v=s[8].y*window.innerHeight;if(this.quiz&&this.quiz.isQuizActive){this.speedBoost&&this.speedBoost.hidePointer(),this.controller.gestureForward=!1,this.controller.gestureTurnLeft=!1,this.controller.gestureTurnRight=!1,this.quiz.updateGesturePointer(g,v),this.gestureBadge.textContent="🎯 Point at answer to select";return}else this.quiz&&this.quiz.hideGesturePointer();let m=!1;if(this.speedBoost&&(m=this.speedBoost.updatePointer(g,v,f,a)),m){this.controller.gestureTurnLeft=!1,this.controller.gestureTurnRight=!1,this.gestureBadge.textContent="⚡ Pointing at SPEED BOOST";return}const p=this.classifyGesture(s);this.applyGesture(p)}drawSkeleton(e,n,i){const s=this.ctx,r=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]];s.strokeStyle="#22c55e",s.lineWidth=2;for(const[a,o]of r)s.beginPath(),s.moveTo(e[a].x*n,e[a].y*i),s.lineTo(e[o].x*n,e[o].y*i),s.stroke();s.fillStyle="#f59e0b";for(const a of e)s.beginPath(),s.arc(a.x*n,a.y*i,3,0,Math.PI*2),s.fill();(this.activeGesture==="POINT_RIGHT"||this.activeGesture==="POINT_LEFT")&&(s.strokeStyle="#38bdf8",s.lineWidth=4,s.beginPath(),s.moveTo(e[5].x*n,e[5].y*i),s.lineTo(e[6].x*n,e[6].y*i),s.lineTo(e[7].x*n,e[7].y*i),s.lineTo(e[8].x*n,e[8].y*i),s.stroke(),s.fillStyle="#38bdf8",s.beginPath(),s.arc(e[8].x*n,e[8].y*i,6,0,Math.PI*2),s.fill())}classifyGesture(e){const n=e[0],i=(d,f)=>Math.hypot(d.x-f.x,d.y-f.y),s=i(e[4],n)>i(e[2],n)*1.15,r=i(e[8],n)>i(e[6],n)*1.18&&i(e[8],e[5])>.09,a=i(e[12],n)>i(e[10],n)*1.18&&i(e[12],e[9])>.09,o=i(e[16],n)>i(e[14],n)*1.18&&i(e[16],e[13])>.09,c=i(e[20],n)>i(e[18],n)*1.18&&i(e[20],e[17])>.09,l=e[5].x-e[8].x,h=e[8].y-e[5].y,u=e[0].x-e[8].x;if(r&&a&&o&&c)return"OPEN_PALM";if(r&&a&&!o&&!c)return"TWO_FINGERS";if(r&&!a&&!o&&!c&&(Math.abs(l)>Math.abs(h)*.4||Math.abs(u)>.08)){if(l>.035||u>.06)return"POINT_RIGHT";if(l<-.035||u<-.06)return"POINT_LEFT"}return!r&&!a&&!o&&!c?s&&e[4].y<e[3].y&&e[4].y<e[5].y-.02?"THUMBS_UP":"CLOSED_FIST":"NONE"}applyGesture(e){const n=performance.now();switch(this.controller.gestureForward=!1,this.controller.gestureTurnLeft=!1,this.controller.gestureTurnRight=!1,e){case"OPEN_PALM":this.controller.gestureForward=!0,this.gestureBadge.textContent="✋ OPEN PALM: Moving Forward";break;case"CLOSED_FIST":this.controller.stopAllMovement(),this.gestureBadge.textContent="✊ CLOSED FIST: Stopped";break;case"POINT_RIGHT":this.controller.gestureTurnRight=!0,this.gestureBadge.textContent="👉 POINT RIGHT: Turning Right";break;case"POINT_LEFT":this.controller.gestureTurnLeft=!0,this.gestureBadge.textContent="👈 POINT LEFT: Turning Left";break;case"THUMBS_UP":this.gestureBadge.textContent="👍 THUMBS UP: Jump!",(!this.gestureCooldowns.jump||n-this.gestureCooldowns.jump>850)&&(this.gestureCooldowns.jump=n,this.controller.triggerJump());break;case"TWO_FINGERS":this.gestureBadge.textContent="✌️ 2 FINGERS: Door Interact!",(!this.gestureCooldowns.interact||n-this.gestureCooldowns.interact>1200)&&(this.gestureCooldowns.interact=n,this.onInteract&&this.onInteract());break}this.activeGesture=e}}class Qw{constructor(e){N(this,"container");N(this,"btnEl");N(this,"statusEl");N(this,"iconEl");N(this,"fillEl");N(this,"cursorEl");N(this,"cursorRingFill");N(this,"toastEl");N(this,"toastTimer",null);N(this,"state","AVAILABLE");N(this,"ACTIVE_DURATION",5);N(this,"COOLDOWN_DURATION",10);N(this,"DWELL_TIME_REQUIRED",.42);N(this,"timer",0);N(this,"dwellTimer",0);N(this,"hasTriggeredThisHover",!1);N(this,"isHovered",!1);N(this,"cursorX",0);N(this,"cursorY",0);N(this,"isPointerVisible",!1);N(this,"audioCtx",null);N(this,"handleKeyDown",e=>{(e.code==="Enter"||e.code==="NumpadEnter")&&(e.preventDefault(),e.stopPropagation(),this.state==="AVAILABLE"&&this.activateBoost())});this.controller=e,this.createDom(),this.setState("AVAILABLE")}createDom(){const e=document.createElement("style");e.textContent=`
      #speed-boost-panel {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 55;
        user-select: none;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 8px;
        pointer-events: auto;
      }

      #speed-boost-btn {
        position: relative;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 18px 10px 14px;
        border-radius: 40px;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.1em;
        cursor: pointer;
        outline: none;
        transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease, filter 0.3s ease;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
        border: 2px solid rgba(245, 158, 11, 0.7);
        background: linear-gradient(135deg, rgba(16, 26, 18, 0.94) 0%, rgba(28, 44, 25, 0.96) 100%);
        color: #fef3c7;
      }

      /* State: AVAILABLE */
      #speed-boost-btn.available {
        border-color: #f59e0b;
        background: linear-gradient(135deg, rgba(20, 32, 20, 0.94) 0%, rgba(36, 56, 28, 0.96) 100%);
        box-shadow: 0 0 18px rgba(245, 158, 11, 0.55), 0 8px 25px rgba(0,0,0,0.7);
        animation: sbGlowPulse 2.4s infinite ease-in-out;
      }
      #speed-boost-btn.available:hover,
      #speed-boost-btn.available.hover-gesture {
        transform: scale(1.05);
        border-color: #fef08a;
        box-shadow: 0 0 28px rgba(254, 240, 138, 0.85), 0 10px 30px rgba(0,0,0,0.8);
      }

      /* State: ACTIVE */
      #speed-boost-btn.active {
        border-color: #38bdf8;
        background: linear-gradient(135deg, rgba(14, 40, 65, 0.96) 0%, rgba(18, 62, 98, 0.98) 100%);
        box-shadow: 0 0 28px rgba(56, 189, 248, 0.85), 0 0 50px rgba(56, 189, 248, 0.35);
        color: #e0f2fe;
        animation: sbLightningBlaze 0.8s infinite alternate ease-in-out;
      }

      /* State: COOLDOWN */
      #speed-boost-btn.cooldown {
        border-color: rgba(148, 163, 184, 0.4);
        background: linear-gradient(135deg, rgba(18, 22, 20, 0.9) 0%, rgba(26, 32, 28, 0.92) 100%);
        color: #94a3b8;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
        filter: grayscale(0.55) opacity(0.75);
        cursor: not-allowed;
      }

      /* Flash upon activation */
      #speed-boost-btn.flash-activate {
        animation: sbFlashBurst 0.5s ease-out;
      }

      .boost-icon-wrap {
        position: relative;
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.35);
        border: 1.5px solid rgba(255, 255, 255, 0.15);
      }

      .boost-bolt {
        font-size: 20px;
        line-height: 1;
        filter: drop-shadow(0 0 6px currentColor);
      }

      #speed-boost-btn.available .boost-bolt {
        color: #fbbf24;
      }

      #speed-boost-btn.active .boost-bolt {
        color: #38bdf8;
      }

      #speed-boost-btn.cooldown .boost-bolt {
        color: #64748b;
      }

      .boost-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .boost-title {
        font-size: 11px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        font-weight: 800;
        line-height: 1.2;
      }

      .boost-status {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.05em;
        line-height: 1.2;
        margin-top: 2px;
      }

      /* Progress circle inside icon wrap */
      .boost-svg-ring {
        position: absolute;
        inset: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        pointer-events: none;
        transform: rotate(-90deg);
      }
      .boost-svg-ring circle {
        fill: none;
        stroke-width: 3.2;
      }
      .boost-ring-bg {
        stroke: rgba(255, 255, 255, 0.08);
      }
      .boost-ring-fill {
        stroke: #38bdf8;
        stroke-dasharray: 113.1;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        transition: stroke-dashoffset 0.1s linear;
      }

      /* Hand pointer cursor */
      #sb-gesture-cursor {
        position: fixed;
        top: 0;
        left: 0;
        width: 38px;
        height: 38px;
        margin: -19px 0 0 -19px;
        pointer-events: none;
        z-index: 999;
        opacity: 0;
        transform: translate3d(-100px, -100px, 0);
        transition: opacity 0.15s ease;
      }
      #sb-gesture-cursor.visible {
        opacity: 1;
      }
      .sb-cursor-dot {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        margin: -5px 0 0 -5px;
        border-radius: 50%;
        background: #38bdf8;
        box-shadow: 0 0 10px #38bdf8, 0 0 18px #38bdf8;
      }
      .sb-cursor-ring {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
      }
      .sb-cursor-ring .ring-bg {
        fill: none;
        stroke: rgba(56, 189, 248, 0.25);
        stroke-width: 3;
      }
      .sb-cursor-ring .ring-fill {
        fill: none;
        stroke: #fef08a;
        stroke-width: 3.5;
        stroke-dasharray: 113.1;
        stroke-dashoffset: 113.1;
        stroke-linecap: round;
        transition: stroke-dashoffset 0.04s linear;
      }

      /* Toast Notification */
      #speed-boost-toast {
        position: fixed;
        top: 24px;
        right: 24px;
        z-index: 95;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 9px 18px;
        border-radius: 20px;
        background: rgba(12, 22, 16, 0.94);
        backdrop-filter: blur(6px);
        border: 1.5px solid #38bdf8;
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.7), 0 0 20px rgba(56, 189, 248, 0.4);
        color: #e0f2fe;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.12em;
        opacity: 0;
        transform: translateY(-20px);
        pointer-events: none;
        transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      #speed-boost-toast.show {
        opacity: 1;
        transform: translateY(0);
      }
      #speed-boost-toast.toast-active {
        border-color: #38bdf8;
        color: #e0f2fe;
        box-shadow: 0 0 25px rgba(56, 189, 248, 0.6);
      }
      #speed-boost-toast.toast-ready {
        border-color: #f59e0b;
        color: #fef3c7;
        box-shadow: 0 0 25px rgba(245, 158, 11, 0.6);
      }
      #speed-boost-toast.toast-end {
        border-color: #94a3b8;
        color: #cbd5e1;
        box-shadow: 0 0 15px rgba(148, 163, 184, 0.4);
      }

      @keyframes sbGlowPulse {
        0%, 100% { box-shadow: 0 0 16px rgba(245, 158, 11, 0.5), 0 6px 20px rgba(0,0,0,0.6); }
        50% { box-shadow: 0 0 28px rgba(245, 158, 11, 0.85), 0 8px 26px rgba(0,0,0,0.7); }
      }
      @keyframes sbLightningBlaze {
        0% { box-shadow: 0 0 20px rgba(56, 189, 248, 0.7); border-color: #38bdf8; }
        100% { box-shadow: 0 0 35px rgba(56, 189, 248, 1), 0 0 65px rgba(56, 189, 248, 0.4); border-color: #e0f2fe; }
      }
      @keyframes sbFlashBurst {
        0% { transform: scale(1.18); filter: brightness(2.2); }
        100% { transform: scale(1.0); filter: brightness(1.0); }
      }
    `,document.head.appendChild(e);const n=document.createElement("div");n.id="speed-boost-panel",n.innerHTML=`
      <button id="speed-boost-btn" class="available" type="button" tabindex="-1" aria-label="Speed Boost">
        <div class="boost-icon-wrap">
          <span class="boost-bolt">⚡</span>
          <svg class="boost-svg-ring" viewBox="0 0 44 44">
            <circle class="boost-ring-bg" cx="22" cy="22" r="18" />
            <circle class="boost-ring-fill" id="sb-fill-ring" cx="22" cy="22" r="18" />
          </svg>
        </div>
        <div class="boost-info">
          <div class="boost-title">SPEED BOOST</div>
          <div class="boost-status" id="sb-status">READY [ENTER / POINT]</div>
        </div>
      </button>
    `,document.body.appendChild(n);const i=document.createElement("div");i.id="sb-gesture-cursor",i.innerHTML=`
      <div class="sb-cursor-dot"></div>
      <svg class="sb-cursor-ring" viewBox="0 0 44 44">
        <circle class="ring-bg" cx="22" cy="22" r="18" />
        <circle class="ring-fill" id="sb-cursor-fill" cx="22" cy="22" r="18" />
      </svg>
    `,document.body.appendChild(i);const s=document.createElement("div");s.id="speed-boost-toast",s.innerHTML=`
      <span class="toast-bolt">⚡</span>
      <span class="toast-text" id="sb-toast-text">SPEED BOOST ACTIVATED!</span>
    `,document.body.appendChild(s),this.container=n,this.btnEl=n.querySelector("#speed-boost-btn"),this.statusEl=n.querySelector("#sb-status"),this.iconEl=n.querySelector(".boost-bolt"),this.fillEl=n.querySelector("#sb-fill-ring"),this.cursorEl=i,this.cursorRingFill=i.querySelector("#sb-cursor-fill"),this.toastEl=s,this.btnEl.addEventListener("click",()=>{this.btnEl.blur(),this.state==="AVAILABLE"&&this.activateBoost()}),window.addEventListener("keydown",this.handleKeyDown)}update(e){if(this.state==="ACTIVE"){this.timer-=e;const n=Math.max(1,Math.ceil(this.timer));this.statusEl.textContent=`BOOST ACTIVE: ${n}`;const i=Math.max(0,this.timer/this.ACTIVE_DURATION);this.fillEl.style.strokeDashoffset=`${113.1*(1-i)}`,this.timer<=0&&this.endBoost()}else if(this.state==="COOLDOWN"){this.timer-=e;const n=Math.max(1,Math.ceil(this.timer));this.statusEl.textContent=`READY IN: ${n}`;const i=1-Math.max(0,this.timer/this.COOLDOWN_DURATION);this.fillEl.style.strokeDashoffset=`${113.1*(1-i)}`,this.timer<=0&&this.setAvailable()}}updatePointer(e,n,i,s){if(!i)return this.hidePointer(),this.isHovered=!1,this.hasTriggeredThisHover=!1,this.dwellTimer=0,this.btnEl.classList.remove("hover-gesture"),!1;this.isPointerVisible?(this.cursorX+=(e-this.cursorX)*.45,this.cursorY+=(n-this.cursorY)*.45):(this.cursorX=e,this.cursorY=n,this.isPointerVisible=!0,this.cursorEl.classList.add("visible")),this.cursorEl.style.transform=`translate3d(${this.cursorX}px, ${this.cursorY}px, 0)`;const r=this.btnEl.getBoundingClientRect(),a=16;if(this.cursorX>=r.left-a&&this.cursorX<=r.right+a&&this.cursorY>=r.top-a&&this.cursorY<=r.bottom+a){if(this.isHovered=!0,this.btnEl.classList.add("hover-gesture"),this.state==="AVAILABLE"){if(!this.hasTriggeredThisHover){this.dwellTimer+=s;const c=Math.min(1,this.dwellTimer/this.DWELL_TIME_REQUIRED);this.cursorRingFill.style.strokeDashoffset=`${113.1*(1-c)}`,c>=1&&(this.activateBoost(),this.hasTriggeredThisHover=!0,this.dwellTimer=0,this.cursorRingFill.style.strokeDashoffset="113.1")}}else this.cursorRingFill.style.strokeDashoffset="113.1";return!0}else return this.isHovered=!1,this.hasTriggeredThisHover=!1,this.dwellTimer=0,this.btnEl.classList.remove("hover-gesture"),this.cursorRingFill.style.strokeDashoffset="113.1",!1}isTargetingButton(){return this.isHovered}hidePointer(){this.isPointerVisible&&(this.isPointerVisible=!1,this.cursorEl.classList.remove("visible"))}activateBoost(){this.state==="AVAILABLE"&&(this.state="ACTIVE",this.timer=this.ACTIVE_DURATION,this.controller.speedBoostActive=!0,this.btnEl.className="active flash-activate",setTimeout(()=>this.btnEl.classList.remove("flash-activate"),500),this.statusEl.textContent="BOOST ACTIVE: 5",this.fillEl.style.stroke="#38bdf8",this.fillEl.style.strokeDashoffset="0",this.showToast("SPEED BOOST ACTIVATED!","toast-active"),this.playActivateSound())}endBoost(){this.state="COOLDOWN",this.timer=this.COOLDOWN_DURATION,this.controller.speedBoostActive=!1,this.btnEl.className="cooldown",this.statusEl.textContent="READY IN: 10",this.fillEl.style.stroke="#64748b",this.fillEl.style.strokeDashoffset="113.1",this.showToast("BOOST ENDED","toast-end"),this.playEndSound()}setAvailable(){this.setState("AVAILABLE"),this.showToast("SPEED BOOST READY!","toast-ready"),this.playReadySound()}setState(e){this.state=e,e==="AVAILABLE"&&(this.timer=0,this.btnEl.className="available",this.statusEl.textContent="READY [ENTER / POINT]",this.fillEl.style.stroke="#fbbf24",this.fillEl.style.strokeDashoffset="0")}showToast(e,n){const i=this.toastEl.querySelector("#sb-toast-text");i&&(i.textContent=e),this.toastEl.className=`${n} show`,this.toastTimer!==null&&window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>{this.toastEl.classList.remove("show"),this.toastTimer=null},2200)}getAudioContext(){if(!this.audioCtx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.audioCtx=new e)}return this.audioCtx&&this.audioCtx.state==="suspended"&&this.audioCtx.resume(),this.audioCtx}playActivateSound(){try{const e=this.getAudioContext();if(!e)return;const n=e.currentTime,i=e.createOscillator(),s=e.createOscillator(),r=e.createGain();i.type="sawtooth",s.type="sine",i.frequency.setValueAtTime(220,n),i.frequency.exponentialRampToValueAtTime(880,n+.28),s.frequency.setValueAtTime(440,n),s.frequency.exponentialRampToValueAtTime(1320,n+.28),r.gain.setValueAtTime(.25,n),r.gain.exponentialRampToValueAtTime(.001,n+.35),i.connect(r),s.connect(r),r.connect(e.destination),i.start(n),s.start(n),i.stop(n+.35),s.stop(n+.35)}catch{}}playEndSound(){try{const e=this.getAudioContext();if(!e)return;const n=e.currentTime,i=e.createOscillator(),s=e.createGain();i.type="sine",i.frequency.setValueAtTime(440,n),i.frequency.exponentialRampToValueAtTime(180,n+.28),s.gain.setValueAtTime(.18,n),s.gain.exponentialRampToValueAtTime(.001,n+.32),i.connect(s),s.connect(e.destination),i.start(n),i.stop(n+.32)}catch{}}playReadySound(){try{const e=this.getAudioContext();if(!e)return;const n=e.currentTime,i=e.createOscillator(),s=e.createGain();i.type="triangle",i.frequency.setValueAtTime(587.33,n),i.frequency.setValueAtTime(880,n+.1),s.gain.setValueAtTime(.15,n),s.gain.exponentialRampToValueAtTime(.001,n+.3),i.connect(s),s.connect(e.destination),i.start(n),i.stop(n+.32)}catch{}}destroy(){window.removeEventListener("keydown",this.handleKeyDown),this.toastTimer!==null&&clearTimeout(this.toastTimer),this.controller.speedBoostActive=!1,this.container.remove(),this.cursorEl.remove(),this.toastEl.remove()}}const Cm={low:{grassCount:45e3,shadowMapSize:2048,pixelRatioCap:1.25},med:{grassCount:13e4,shadowMapSize:3072,pixelRatioCap:1.6},high:{grassCount:22e4,shadowMapSize:4096,pixelRatioCap:2}},qs=()=>new Promise(t=>setTimeout(t,0));class jw{constructor(e){N(this,"renderer");N(this,"scene");N(this,"camera");N(this,"clock",new U2);N(this,"field");N(this,"sky");N(this,"controller");N(this,"composer");N(this,"motes");N(this,"audio");N(this,"drone");N(this,"forestUpdate");N(this,"arenaMap");N(this,"scrollQuiz");N(this,"minimap");N(this,"handGesture");N(this,"speedBoost");N(this,"selectedPlayer",1);N(this,"quality");const n=new URLSearchParams(location.search).get("q")??"med";this.quality=Cm[n]??Cm.med,this.renderer=new xM({antialias:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.quality.pixelRatioCap)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Dm,e.appendChild(this.renderer.domElement),this.scene=new uc,this.camera=new Nn(70,window.innerWidth/window.innerHeight,.1,2e3),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer?.setSize(window.innerWidth,window.innerHeight)})}async build(e){e(.05,"Modelando el terreno…"),await qs(),this.field=new EM,e(.25,"Iluminando el cielo…"),await qs(),this.sky=new RM(this.renderer,this.scene,this.quality.shadowMapSize),e(.4,"Extendiendo la ladera…"),await qs(),this.scene.add(await CM(this.field)),e(.55,"Sembrando el pasto…"),await qs(),this.scene.add(DM(this.field,this.quality.grassCount)),e(.72,"Plantando el bosque…"),await qs();const n=kM(this.field,this.scene),i=n.colliders;this.forestUpdate=n.update,e(.85,"Construyendo senderos de piedra y puertas…"),await qs(),zM(this.field,this.scene,i),HM(this.field,this.scene,i),await VM(this.field,this.scene,i),this.arenaMap=new C3(this.scene,i),this.scrollQuiz=new D3,this.minimap=new P3,this.drone=new QM(this.scene,this.field),this.motes=new GM(this.scene),e(.93,"Afinando la luz…"),await qs();const s=up;this.controller=new JM(this.camera,this.field,i,s),this.controller.teleport(s,-Math.PI/2),this.controller.arenaMap=this.arenaMap,this.speedBoost=new Qw(this.controller),this.handGesture=new qw(this.controller,()=>this.tryInteractDoor(),this.scrollQuiz,this.speedBoost),this.audio=new T3(this.field,this.controller),this.composer=w3(this.renderer,this.scene,this.camera),this.forestUpdate(this.controller.position),this.sky.followPlayer(this.controller.position),await this.renderer.compileAsync(this.scene,this.camera),this.composer.render(0),e(1,"Listo")}setPlayer(e){if(this.selectedPlayer=e,this.controller){const n=e===1?up:b3;this.controller.teleport(n,e===1?-Math.PI/2:Math.PI/2)}}setPlaying(e){this.controller.enabled=e,this.audio.setMenu(!e)}startAudio(){this.audio.start()}start(){this.clock.getDelta(),this.renderer.setAnimationLoop(()=>this.update())}update(){const e=Math.min(this.clock.getDelta(),.05),n=Kn.uTime.value+e;Kn.uTime.value=n,this.scrollQuiz.isQuizActive||this.controller.update(e);const i=this.controller.position;Kn.uPlayer.value.set(i.x,i.z),this.sky.followPlayer(i),this.forestUpdate(i),this.arenaMap.update(e,n),this.minimap.update(i,this.controller.rotationYaw,this.arenaMap.isDoorUnlocked(1),this.arenaMap.isDoorUnlocked(2)),this.drone.update(e,n,i),this.motes.update(n,i,this.field),this.audio.update(e,n),this.speedBoost.update(e),!this.arenaMap.isDoorUnlocked(1)&&!this.scrollQuiz.isQuizActive&&i.distanceTo(ys)<3.4&&Math.abs(i.x-ys.x)<2&&i.z>ys.z&&(document.exitPointerLock?.(),this.scrollQuiz.showQuiz(1,r=>{this.arenaMap.unlockDoor(r),this.renderer.domElement.requestPointerLock?.()})),this.arenaMap.isVictory||i.distanceTo(Yn)<2.8&&(this.arenaMap.claimCup(),document.exitPointerLock?.(),this.scrollQuiz.showVictory(),this.audio.stopBgm()),this.composer.render(e)}tryInteractDoor(){if(this.scrollQuiz.isQuizActive)return;const e=this.controller.position;if(!this.arenaMap.isDoorUnlocked(1)&&e.distanceTo(ys)<5){document.exitPointerLock?.(),this.scrollQuiz.showQuiz(1,i=>{this.arenaMap.unlockDoor(i),this.renderer.domElement.requestPointerLock?.()});return}}}const Kw=document.getElementById("overlay"),ka=document.getElementById("play"),Zw=document.getElementById("loadfill"),ph=document.getElementById("loadtext");async function Jw(){const t=new jw(document.getElementById("app"));await t.build((i,s)=>{Zw.style.width=`${Math.round(i*100)}%`,ph.textContent=s}),ka.disabled=!1,ka.textContent="ENTRAR A LA ARENA",ph.textContent="Listo para jugar";const e=document.getElementById("btn-p1");e?.addEventListener("click",()=>{e.classList.add("active"),t.setPlayer(1)}),t.setPlayer(1);const n=t.renderer.domElement;ka.addEventListener("click",()=>{ka.blur(),t.startAudio(),n.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{const i=document.pointerLockElement===n;t.setPlaying(i),Kw.classList.toggle("hidden",i),document.body.classList.toggle("playing",i),i||(ka.textContent="CONTINUAR EN LA ARENA")}),t.start(),window.__engine=t}Jw().catch(t=>{ph.textContent="Error al iniciar. Revisa la consola del navegador.",console.error(t)});
