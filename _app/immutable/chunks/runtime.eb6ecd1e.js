const le=()=>{};function W(e){for(var n=0;n<e.length;n++)e[n]()}function Ne(e,n,t){if(e==null)return n(void 0),t&&t(void 0),le;const u=e.subscribe(n,t);return u.unsubscribe?()=>u.unsubscribe():u}var ne=Array.isArray,rn=Array.from,fn=Object.keys,cn=Object.assign,Ce=Object.defineProperty,se=Object.getOwnPropertyDescriptor,ln=Object.getOwnPropertyDescriptors;function _n(e){return typeof e=="function"}const Ie=1,je=2,Le=4,dn=["beforeinput","click","dblclick","contextmenu","focusin","focusout","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],an=["touchstart","touchmove","touchend"],pn={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},y=Symbol("$state"),Me=Object.prototype,Ue=Array.prototype,Ye=Object.getPrototypeOf,Ve=Object.isFrozen;function g(e,n=!0){if(typeof e=="object"&&e!=null&&!Ve(e)){if(y in e)return e[y].p;const t=Ye(e);if(t===Me||t===Ue){const u=new Proxy(e,Ke);return Ce(e,y,{value:He(e,u,n),writable:!1}),u}}return e}function He(e,n,t){return{s:new Map,v:B(0),a:ne(e),i:t,p:n}}const Ke={defineProperty(e,n,t){if(t.value){const u=e[y],s=u.s.get(n);s!==void 0&&P(s,g(t.value,u.i))}return Reflect.defineProperty(e,n,t)},deleteProperty(e,n){const t=e[y],u=t.s.get(n);return u!==void 0&&P(u,k),n in e&&ve(t.v),delete e[n]},get(e,n,t){var c;const u=e[y];let s=u.s.get(n);s===void 0&&(he()||J)&&(!(n in e)||(c=se(e,n))!=null&&c.writable)&&(s=(u.i?B:ee)(g(e[n],u.i)),u.s.set(n,s));const o=s!==void 0?T(s):Reflect.get(e,n,t);return o===k?void 0:o},getOwnPropertyDescriptor(e,n){const t=Reflect.getOwnPropertyDescriptor(e,n);if(t&&"value"in t){const s=e[y].s.get(n);s&&(t.value=T(s))}return t},has(e,n){var o;if(n===y)return!0;const t=e[y],u=Reflect.has(e,n);let s=t.s.get(n);return(s!==void 0||he()&&(!u||(o=se(e,n))!=null&&o.writable))&&(s===void 0&&(s=(t.i?B:ee)(u?g(e[n],t.i):k),t.s.set(n,s)),T(s)===k)?!1:u},set(e,n,t){const u=e[y],s=u.s.get(n);s!==void 0&&P(s,g(t,u.i));const o=u.a,c=!(n in e);if(o&&n==="length")for(let f=t;f<e.length;f+=1){const i=u.s.get(f+"");i!==void 0&&P(i,k)}if(c&&ve(u.v),e[n]=t,o&&c){const f=u.s.get("length"),i=e.length;f!==void 0&&f.v!==i&&P(f,i)}return!0},ownKeys(e){const n=e[y];return T(n.v),Reflect.ownKeys(e)}};function Be(e){const n=e[y];n&&T(n.v)}const me=1,Y=2,z=4,$=8,I=16,ie=32,j=64,L=128,v=256,m=512,V=1024,oe=2048,te=4096,ue=z|$|I|ie,be=0,ze=1,k=Symbol();let G=be,Z=!1,Q=!1,d=[],N=[],re=[],H=0,x=null,r=null,_=null,h=0,O=null,S=!1,fe=!1,U=!1,b=null,l=null,J=!1;function X(e){const n=e||l;return n!==null&&n.r}function Ee(e,n){return e===n}function $e(e,n){return{c:null,e:Ee,f:e,v:n,x:null}}function we(e,n,t){return{b:t,c:null,d:null,e:null,f:e,i:null,r:null,v:n,x:null,y:null}}function ke(e,n){const t=e.r;t===null?e.r=[n]:t.push(n)}function _e(e){const n=e.f;if(n&m||e.v===k)return!0;if(n&V){const t=e.d;if(t!==null){const u=t.length;let s;for(s=0;s<u;s++){const o=t[s];if(o.f&V&&!_e(o)){R(o,v);continue}if(o.f&m)if(o.f&Y){if(Pe(o,!0),e.f&m)return!0}else return!0}}}return!1}function xe(e){const n=e.i,t=_,u=h,s=O,o=x,c=b,f=l,i=U,E=(e.f&I)!==0,w=S;_=null,h=0,O=null,x=e,b=e.b,l=e.x,U=r===null&&(e.f&L)!==0,S=!1,E&&(l==null?void 0:l.u)!=null&&l.u.e();try{let A;E?A=n(e.b):A=n();let a=e.d;if(_!==null){let p;if(K(e,h,!1),a!==null&&h>0)for(a.length=h+_.length,p=0;p<_.length;p++)a[h+p]=_[p];else e.d=a=_;if(!U)for(p=h;p<a.length;p++){const D=a[p];D.c===null?D.c=[e]:D.c.push(e)}}else a!==null&&h<a.length&&(K(e,h,!1),a.length=h);return A}finally{_=t,h=u,O=s,x=o,b=c,l=f,U=i,S=w}}function K(e,n,t){const u=e.d;if(u!==null){let s;for(s=n;s<u.length;s++){const o=u[s],c=o.c;let f=0;if(c!==null)if(f=c.length-1,f===0)o.c=null;else{const i=c.indexOf(e);c[i]=c[f],c.pop()}t&&f===0&&o.f&L&&K(o,0,!0)}}}function Re(e){const n=e.r;if(e.r=null,n!==null){let t;for(t=0;t<n.length;t++){const u=n[t];u.f&ue?Fe(u):(K(u,0,!0),u.d=null)}}}function ge(e,n){if(e!==null)throw n}function Te(e){if(e.f&te)return;const n=e.v,t=r;r=e;try{Re(e),n!==null&&n();const s=xe(e);typeof s=="function"&&(e.v=s)}catch(s){const o=e.b;if(o!==null)ge(o,s);else throw s}finally{r=t}const u=e.x;X(u)&&e.f&$&&d.length>0&&We(u)}function Oe(){if(H>100)throw new Error("ERR_SVELTE_TOO_MANY_UPDATES");H++}function C(e){const n=e.length;if(n>0){Oe();let t;for(t=0;t<n;t++){const u=e[t],s=u.f;s&(te|oe)||(_e(u)?(R(u,v),Te(u)):s&V&&R(u,v))}e.length=0}}function Ge(){if(Z=!1,H>101)return;const e=d,n=N;d=[],N=[],C(e),C(n),Z||(H=0)}function M(e,n){const t=e.f;n||t&ie?(Te(e),R(e,v)):(G===be&&(Z||(Z=!0,queueMicrotask(Ge))),t&z?N.push(e):d.push(e))}function Se(){Q=!1;const e=re.slice();re=[],W(e)}function hn(e){Q||(Q=!0,setTimeout(Se,0)),re.push(e)}function Je(){const e=[];for(let n=0;n<d.length;n++){const t=d[n];t.f&I&&t.x===l&&(e.push(t),d.splice(n,1),n--)}C(e)}function We(e){const n=[];for(let t=0;t<d.length;t++){const u=d[t];u.f&$&&u.x===e&&(n.push(u),d.splice(t,1),t--)}C(n)}function Ae(e){const n=G,t=d,u=N;try{Oe();const s=[],o=[];G=ze,d=s,N=o,C(t),C(u),e!==void 0&&e(),(d.length>0||o.length>0)&&Ae(),Q&&Se(),H=0}finally{G=n,d=t,N=u}}async function yn(){await Promise.resolve(),Ae()}function Pe(e,n){const t=J;J=!0;const u=xe(e);J=t;const s=U||r===null&&e.f&L?m:v;R(e,s);const o=e.e;o(u,e.v)||(e.v=u,de(e,m,n))}function vn(e,n,t){let u=t[n];const s=u===void 0;s&&(u={store:null,last_value:null,value:ee(k),unsubscribe:le},t[n]=u),(s||u.store!==e)&&(u.unsubscribe(),u.store=e??null,u.unsubscribe=Ze(e,u.value));const o=T(u.value);return o===k?u.last_value:o}function Ze(e,n){return e==null?(P(n,void 0),le):Ne(e,u=>{fe=!0,P(n,u),fe=!1})}function mn(e){on(()=>{let n;for(n in e)e[n].unsubscribe()})}function T(e){const n=e.f;if(n&te)return e.v;if(x!==null&&!(x.f&j)&&!S){const t=(x.f&L)!==0,u=x.d;_===null&&u!==null&&u[h]===e&&!(t&&r!==null)?h++:_===null?_=[e]:e!==_[_.length-1]&&_.push(e),O!==null&&r!==null&&r.f&v&&O.includes(e)&&(R(r,m),M(r,!1))}return n&Y&&_e(e)&&Pe(e,!1),e.v}function P(e,n){return ae(e,n),n}function Qe(e,n){const t=e.f;(t&oe)!==0!==n&&(e.f^=oe,!n&&t&ue&&!(t&v)&&M(e,!1));const s=e.r;if(s!==null){let o;for(o=0;o<s.length;o++)Qe(s[o],n)}}function de(e,n,t){const u=X(e.x),s=e.c;if(s!==null){const o=s.length;let c;for(c=0;c<o;c++){const f=s[c],i=f.f,E=(i&L)!==0,w=(i&m)!==0;w&&!E||(!t||!u)&&f===r||(R(f,n),(i&v||w&&E)&&(f.f&ue?M(f,!1):de(f,V,t)))}}}function ae(e,n){if(!S&&!fe&&x!==null&&X(e.x)&&x.f&Y)throw new Error("ERR_SVELTE_UNSAFE_MUTATION");if(e.f&me&&!e.e(n,e.v)){const t=e.x;if(e.v=n,X(t)&&r!==null&&r.c===null&&r.f&v&&(_!==null&&_.includes(e)?(R(r,m),M(r,!1)):O===null?O=[e]:O.push(e)),de(e,m,!0),r===null&&d.length===0){const u=t==null?void 0:t.u;if(u!=null){W(u.b);const s=en(()=>{Fe(s),W(u.a)})}}}}function Fe(e){const n=e.v,t=e.y,u=e.f;Re(e),K(e,0,!0),e.i=e.r=e.y=e.x=e.b=e.v=e.d=e.c=null,R(e,te),t!==null&&(ne(t)?W(t):t()),n!==null&&u&ue&&n()}function bn(e){const n=r===null,t=n?Y|L:Y,u=we(t|v,k,b);return u.i=e,u.x=l,u.e=Ee,n||ke(r,u),u}function B(e){const n=$e(me|v,e);return n.x=l,n}function ee(e){const n=B(e);return n.e=sn,n}function ce(e){const n=S;try{return S=!0,e()}finally{S=n}}function F(e,n,t,u,s){const o=we(e|m,null,u);return o.i=n,o.x=l,s&&M(o,t),r!==null&&!(e&j)&&ke(r,o),o}function he(){return r?(r.f&j)===0:!1}function Xe(e){if(r===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=r.f&I&&l!==null&&!l.m,t=F(z,e,!1,b,!n);if(n){let u=l.e;u===null&&(u=l.e=[]),u.push(t)}return t}function En(e){return F(z,e,!1,b,!0)}function en(e){return F(z|j,e,!1,b,!0)}function wn(e,n){return F($|j,e,n,b,!0)}function kn(e){if(r===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=r!==null&&(r.f&I)!==0;return F($,()=>{const t=e();return Je(),t},n,b,!0)}function ye(e){return F(ie,e,!0,b,!0)}function xn(e,n=b,t=!1,u=!0){let s=I;return t&&(s|=j),F(s,e,u,n,!0)}function Rn(e,n){let t=e.y;t===null?e.y=n:ne(t)?t.push(n):e.y=[t,n]}const nn=~(m|V|v);function R(e,n){e.f=e.f&nn|n}function Tn(e){return typeof e=="object"&&e!==null&&typeof e.f=="number"}function On(e,n,t,u){var pe;const s=(t&Le)!==0,o=(t&Ie)!==0,c=(t&je)!==0,f=(pe=se(e,n))==null?void 0:pe.set;let i=e[n];const E=i===void 0&&u!==void 0;if(f&&c&&u!==void 0)throw new Error("Cannot use fallback values with bind:");E&&(i=s?u():u);const w=o?B(i):ee(i);let A=!1,a=!1,p=!E,D=!0;if(ye(()=>{Be(e);const q=e[n];if(D){D=!1;return}if(A){A=!1;return}(p||q!==void 0)&&tn(o,q,w.v)&&(a=!0,p=!0,ce(()=>ae(w,q)))}),f!==void 0){let q=!E;ye(()=>{const qe=T(w);if(q){q=!1;return}if(a){a=!1;return}A=!0,p=!0,ce(()=>f(qe))})}return w}function tn(e,n,t){return e?un(n,t):De(n,t)}function un(e,n){return e!=e?n==n:e!==n}function De(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function sn(e,n){return!De(e,n)}function Sn(e,n){var o;var t=(o=e.$$events)==null?void 0:o[n.type],u=ne(t)?t.slice():t==null?[]:[t];for(var s of u)s.call(this,n)}function ve(e){const n=T(e);return ae(e,n+1),n}function on(e){Xe(()=>()=>ce(e))}function An(e,n=!1){l={a:null,c:null,e:null,m:!1,p:l,s:e,r:n,u:null}}function Pn(e){const n=l;if(n!==null){e!==void 0&&(n.a=e);const t=n.e;if(t!==null){n.e=null;for(let u=0;u<t.length;u++)M(t[u],!1)}l=n.p,n.m=!0}}export{W as A,Rn as B,Te as C,_n as D,fn as E,l as F,rn as G,En as H,cn as I,pn as J,Tn as K,ln as L,dn as M,an as P,kn as a,Pn as b,An as c,Ce as d,P as e,g as f,T as g,ce as h,mn as i,vn as j,Sn as k,bn as l,Ne as m,b as n,hn as o,On as p,se as q,xn as r,B as s,yn as t,Xe as u,ne as v,Qe as w,wn as x,Fe as y,en as z};
