const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DFJ9b3Ae.js","./D4hxiUFr.js","./BsNQwHGb.js","./CJhCL6X_.js","./D5CpdUL_.js","./DlAUqK2U.js","./BMAKNVlx.js","./B9zO-6ZY.js","./Co1HvmNy.js","./D4vor7Wr.js","./FmhGW3I9.js","./BrMlTqNf.js","./C7Ru_Zu-.js","./D8LRVUUi.js","./RvQrvRZ0.js","./DYqUNwZH.js","./kSnjX3Ki.js","./CdU4wrrv.js","./BLpzfGXx.js","./BRklk1su.js","./Ck7trVgS.js","./D3R9WigE.js","./DcNnLrPs.js","./BAZ6AOQu.js","./hngkZn67.js","./DGJlCZOo.js","./7IKwWeCI.js","./default.C40rhXyz.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Se={},Hs=[],Tn=()=>{},Qm=()=>!1,Fo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Eh=t=>t.startsWith("onUpdate:"),st=Object.assign,wh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},MT=Object.prototype.hasOwnProperty,Pe=(t,e)=>MT.call(t,e),oe=Array.isArray,qs=t=>mi(t)==="[object Map]",gi=t=>mi(t)==="[object Set]",Dd=t=>mi(t)==="[object Date]",xT=t=>mi(t)==="[object RegExp]",he=t=>typeof t=="function",je=t=>typeof t=="string",cn=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",Th=t=>(Oe(t)||he(t))&&he(t.then)&&he(t.catch),Jm=Object.prototype.toString,mi=t=>Jm.call(t),LT=t=>mi(t).slice(8,-1),Ym=t=>mi(t)==="[object Object]",Ih=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ws=vh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rc=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},FT=/-\w/g,Kt=Rc(t=>t.replace(FT,e=>e.slice(1).toUpperCase())),UT=/\B([A-Z])/g,jr=Rc(t=>t.replace(UT,"-$1").toLowerCase()),Cc=Rc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pl=Rc(t=>t?`on${Cc(t)}`:""),Mt=(t,e)=>!Object.is(t,e),zs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Xm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ha=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Zm=t=>{const e=je(t)?Number(t):NaN;return isNaN(e)?t:e};let Vd;const Pc=()=>Vd||(Vd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bh(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?HT(r):bh(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(je(t)||Oe(t))return t}const $T=/;(?![^(]*\))/g,jT=/:([^]+)/,BT=/\/\*[^]*?\*\//g;function HT(t){const e={};return t.replace(BT,"").split($T).forEach(n=>{if(n){const r=n.split(jT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function kc(t){let e="";if(je(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=kc(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const qT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",WT=vh(qT);function e_(t){return!!t||t===""}function zT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Uo(t[r],e[r]);return n}function Uo(t,e){if(t===e)return!0;let n=Dd(t),r=Dd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=cn(t),r=cn(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?zT(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Uo(t[o],e[o]))return!1}}return String(t)===String(e)}function Ah(t,e){return t.findIndex(n=>Uo(n,e))}const t_=t=>!!(t&&t.__v_isRef===!0),n_=t=>je(t)?t:t==null?"":oe(t)||Oe(t)&&(t.toString===Jm||!he(t.toString))?t_(t)?n_(t.value):JSON.stringify(t,r_,2):String(t),r_=(t,e)=>t_(e)?r_(t,e.value):qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[kl(r,i)+" =>"]=s,n),{})}:gi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>kl(n))}:cn(e)?kl(e):Oe(e)&&!oe(e)&&!Ym(e)?String(e):e,kl=(t,e="")=>{var n;return cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class s_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){this._on>0&&--this._on===0&&(wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sh(t){return new s_(t)}function $o(){return wt}function qa(t,e=!1){wt&&wt.cleanups.push(t)}let Me;const Ol=new WeakSet;class i_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&wt.active&&wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ol.has(this)&&(Ol.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||a_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Md(this),c_(this);const e=Me,n=on;Me=this,on=!0;try{return this.fn()}finally{l_(this),Me=e,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ph(e);this.deps=this.depsTail=void 0,Md(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ol.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pu(this)&&this.run()}get dirty(){return pu(this)}}let o_=0,eo,to;function a_(t,e=!1){if(t.flags|=8,e){t.next=to,to=t;return}t.next=eo,eo=t}function Rh(){o_++}function Ch(){if(--o_>0)return;if(to){let e=to;for(to=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;eo;){let e=eo;for(eo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function c_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function l_(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ph(r),KT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function pu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(u_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function u_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===yo)||(t.globalVersion=yo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!pu(t))))return;t.flags|=2;const e=t.dep,n=Me,r=on;Me=t,on=!0;try{c_(t);const s=t.fn(t._value);(e.version===0||Mt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,on=r,l_(t),t.flags&=-3}}function Ph(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ph(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function KT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let on=!0;const h_=[];function Jn(){h_.push(on),on=!1}function Yn(){const t=h_.pop();on=t===void 0?!0:t}function Md(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let yo=0;class GT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Oc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Me||!on||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new GT(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,f_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,yo++,this.notify(e)}notify(e){Rh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ch()}}}function f_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)f_(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Wa=new WeakMap,os=Symbol(""),gu=Symbol(""),vo=Symbol("");function It(t,e,n){if(on&&Me){let r=Wa.get(t);r||Wa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Oc),s.map=r,s.key=n),s.track()}}function Hn(t,e,n,r,s,i){const o=Wa.get(t);if(!o){yo++;return}const a=l=>{l&&l.trigger()};if(Rh(),e==="clear")o.forEach(a);else{const l=oe(t),u=l&&Ih(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,p)=>{(p==="length"||p===vo||!cn(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(vo)),e){case"add":l?u&&a(o.get("length")):(a(o.get(os)),qs(t)&&a(o.get(gu)));break;case"delete":l||(a(o.get(os)),qs(t)&&a(o.get(gu)));break;case"set":qs(t)&&a(o.get(os));break}}Ch()}function QT(t,e){const n=Wa.get(t);return n&&n.get(e)}function Ns(t){const e=Ie(t);return e===t?e:(It(e,"iterate",vo),Xt(t)?e:e.map(dt))}function Nc(t){return It(t=Ie(t),"iterate",vo),t}const JT={__proto__:null,[Symbol.iterator](){return Nl(this,Symbol.iterator,dt)},concat(...t){return Ns(this).concat(...t.map(e=>oe(e)?Ns(e):e))},entries(){return Nl(this,"entries",t=>(t[1]=dt(t[1]),t))},every(t,e){return Ln(this,"every",t,e,void 0,arguments)},filter(t,e){return Ln(this,"filter",t,e,n=>n.map(dt),arguments)},find(t,e){return Ln(this,"find",t,e,dt,arguments)},findIndex(t,e){return Ln(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ln(this,"findLast",t,e,dt,arguments)},findLastIndex(t,e){return Ln(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ln(this,"forEach",t,e,void 0,arguments)},includes(...t){return Dl(this,"includes",t)},indexOf(...t){return Dl(this,"indexOf",t)},join(t){return Ns(this).join(t)},lastIndexOf(...t){return Dl(this,"lastIndexOf",t)},map(t,e){return Ln(this,"map",t,e,void 0,arguments)},pop(){return Bi(this,"pop")},push(...t){return Bi(this,"push",t)},reduce(t,...e){return xd(this,"reduce",t,e)},reduceRight(t,...e){return xd(this,"reduceRight",t,e)},shift(){return Bi(this,"shift")},some(t,e){return Ln(this,"some",t,e,void 0,arguments)},splice(...t){return Bi(this,"splice",t)},toReversed(){return Ns(this).toReversed()},toSorted(t){return Ns(this).toSorted(t)},toSpliced(...t){return Ns(this).toSpliced(...t)},unshift(...t){return Bi(this,"unshift",t)},values(){return Nl(this,"values",dt)}};function Nl(t,e,n){const r=Nc(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const YT=Array.prototype;function Ln(t,e,n,r,s,i){const o=Nc(t),a=o!==t&&!Xt(t),l=o[e];if(l!==YT[e]){const d=l.apply(t,i);return a?dt(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,dt(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function xd(t,e,n,r){const s=Nc(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,dt(a),l,t)}),s[e](i,...r)}function Dl(t,e,n){const r=Ie(t);It(r,"iterate",vo);const s=r[e](...n);return(s===-1||s===!1)&&Nh(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function Bi(t,e,n=[]){Jn(),Rh();const r=Ie(t)[e].apply(t,n);return Ch(),Yn(),r}const XT=vh("__proto__,__v_isRef,__isVue"),d_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cn));function ZT(t){cn(t)||(t=String(t));const e=Ie(this);return It(e,"has",t),e.hasOwnProperty(t)}class p_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?lI:y_:i?__:m_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let l;if(o&&(l=JT[n]))return l;if(n==="hasOwnProperty")return ZT}const a=Reflect.get(e,n,Ue(e)?e:r);return(cn(n)?d_.has(n):XT(n))||(s||It(e,"get",n),i)?a:Ue(a)?o&&Ih(n)?a:a.value:Oe(a)?s?v_(a):Vn(a):a}}class g_ extends p_{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Xn(i);if(!Xt(r)&&!Xn(r)&&(i=Ie(i),r=Ie(r)),!oe(e)&&Ue(i)&&!Ue(r))return l||(i.value=r),!0}const o=oe(e)&&Ih(n)?Number(n)<e.length:Pe(e,n),a=Reflect.set(e,n,r,Ue(e)?e:s);return e===Ie(s)&&(o?Mt(r,i)&&Hn(e,"set",n,r):Hn(e,"add",n,r)),a}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Hn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!cn(n)||!d_.has(n))&&It(e,"has",n),r}ownKeys(e){return It(e,"iterate",oe(e)?"length":os),Reflect.ownKeys(e)}}class eI extends p_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const tI=new g_,nI=new eI,rI=new g_(!0);const mu=t=>t,ha=t=>Reflect.getPrototypeOf(t);function sI(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=qs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?mu:e?za:dt;return!e&&It(i,"iterate",l?gu:os),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function fa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function iI(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),a=Ie(s);t||(Mt(s,a)&&It(o,"get",s),It(o,"get",a));const{has:l}=ha(o),u=e?mu:t?za:dt;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&It(Ie(s),"iterate",os),s.size},has(s){const i=this.__v_raw,o=Ie(i),a=Ie(s);return t||(Mt(s,a)&&It(o,"has",s),It(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Ie(a),u=e?mu:t?za:dt;return!t&&It(l,"iterate",os),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return st(n,t?{add:fa("add"),set:fa("set"),delete:fa("delete"),clear:fa("clear")}:{add(s){!e&&!Xt(s)&&!Xn(s)&&(s=Ie(s));const i=Ie(this);return ha(i).has.call(i,s)||(i.add(s),Hn(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!Xn(i)&&(i=Ie(i));const o=Ie(this),{has:a,get:l}=ha(o);let u=a.call(o,s);u||(s=Ie(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?Mt(i,h)&&Hn(o,"set",s,i):Hn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:a}=ha(i);let l=o.call(i,s);l||(s=Ie(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&Hn(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&Hn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=sI(s,t,e)}),n}function kh(t,e){const n=iI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const oI={get:kh(!1,!1)},aI={get:kh(!1,!0)},cI={get:kh(!0,!1)};const m_=new WeakMap,__=new WeakMap,y_=new WeakMap,lI=new WeakMap;function uI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hI(t){return t.__v_skip||!Object.isExtensible(t)?0:uI(LT(t))}function Vn(t){return Xn(t)?t:Oh(t,!1,tI,oI,m_)}function wn(t){return Oh(t,!1,rI,aI,__)}function v_(t){return Oh(t,!0,nI,cI,y_)}function Oh(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=hI(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Kn(t){return Xn(t)?Kn(t.__v_raw):!!(t&&t.__v_isReactive)}function Xn(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function Nh(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function Dh(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&Xm(t,"__v_skip",!0),t}const dt=t=>Oe(t)?Vn(t):t,za=t=>Oe(t)?v_(t):t;function Ue(t){return t?t.__v_isRef===!0:!1}function Ft(t){return E_(t,!1)}function hs(t){return E_(t,!0)}function E_(t,e){return Ue(t)?t:new fI(t,e)}class fI{constructor(e,n){this.dep=new Oc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:dt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||Xn(e);e=r?e:Ie(e),Mt(e,n)&&(this._rawValue=e,this._value=r?e:dt(e),this.dep.trigger())}}function We(t){return Ue(t)?t.value:t}function Ox(t){return he(t)?t():We(t)}const dI={get:(t,e,n)=>e==="__v_raw"?t:We(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ue(s)&&!Ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function w_(t){return Kn(t)?t:new Proxy(t,dI)}class pI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Oc,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function T_(t){return new pI(t)}function gI(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=b_(t,n);return e}class mI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return QT(Ie(this._object),this._key)}}class _I{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function I_(t,e,n){return Ue(t)?t:he(t)?new _I(t):Oe(t)&&arguments.length>1?b_(t,e,n):Ft(t)}function b_(t,e,n){const r=t[e];return Ue(r)?r:new mI(t,e,n)}class yI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Oc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return a_(this,!0),!0}get value(){const e=this.dep.track();return u_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function vI(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new yI(r,s,n)}const da={},Ka=new WeakMap;let ts;function EI(t,e=!1,n=ts){if(n){let r=Ka.get(n);r||Ka.set(n,r=[]),r.push(t)}}function wI(t,e,n=Se){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=k=>s?k:Xt(k)||s===!1||s===0?qn(k,1):qn(k);let h,d,p,m,E=!1,A=!1;if(Ue(t)?(d=()=>t.value,E=Xt(t)):Kn(t)?(d=()=>u(t),E=!0):oe(t)?(A=!0,E=t.some(k=>Kn(k)||Xt(k)),d=()=>t.map(k=>{if(Ue(k))return k.value;if(Kn(k))return u(k);if(he(k))return l?l(k,2):k()})):he(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){Jn();try{p()}finally{Yn()}}const k=ts;ts=h;try{return l?l(t,3,[m]):t(m)}finally{ts=k}}:d=Tn,e&&s){const k=d,D=s===!0?1/0:s;d=()=>qn(k(),D)}const O=$o(),V=()=>{h.stop(),O&&O.active&&wh(O.effects,h)};if(i&&e){const k=e;e=(...D)=>{k(...D),V()}}let N=A?new Array(t.length).fill(da):da;const w=k=>{if(!(!(h.flags&1)||!h.dirty&&!k))if(e){const D=h.run();if(s||E||(A?D.some((F,b)=>Mt(F,N[b])):Mt(D,N))){p&&p();const F=ts;ts=h;try{const b=[D,N===da?void 0:A&&N[0]===da?[]:N,m];N=D,l?l(e,3,b):e(...b)}finally{ts=F}}}else h.run()};return a&&a(w),h=new i_(d),h.scheduler=o?()=>o(w,!1):w,m=k=>EI(k,!1,h),p=h.onStop=()=>{const k=Ka.get(h);if(k){if(l)l(k,4);else for(const D of k)D();Ka.delete(h)}},e?r?w(!0):N=h.run():o?o(w.bind(null,!0),!0):h.run(),V.pause=h.pause.bind(h),V.resume=h.resume.bind(h),V.stop=V,V}function qn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ue(t))qn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)qn(t[r],e,n);else if(gi(t)||qs(t))t.forEach(r=>{qn(r,e,n)});else if(Ym(t)){for(const r in t)qn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&qn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jo(t,e,n,r){try{return r?t(...r):t()}catch(s){_i(s,e,n)}}function ln(t,e,n,r){if(he(t)){const s=jo(t,e,n,r);return s&&Th(s)&&s.catch(i=>{_i(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ln(t[i],e,n,r));return s}}function _i(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Se;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}a=a.parent}if(i){Jn(),jo(i,null,10,[t,l,u]),Yn();return}}TI(t,n,s,r,o)}function TI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ot=[];let yn=-1;const Ks=[];let yr=null,Ms=0;const A_=Promise.resolve();let Ga=null;function kn(t){const e=Ga||A_;return t?e.then(this?t.bind(this):t):e}function II(t){let e=yn+1,n=Ot.length;for(;e<n;){const r=e+n>>>1,s=Ot[r],i=Eo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Vh(t){if(!(t.flags&1)){const e=Eo(t),n=Ot[Ot.length-1];!n||!(t.flags&2)&&e>=Eo(n)?Ot.push(t):Ot.splice(II(e),0,t),t.flags|=1,S_()}}function S_(){Ga||(Ga=A_.then(R_))}function _u(t){oe(t)?Ks.push(...t):yr&&t.id===-1?yr.splice(Ms+1,0,t):t.flags&1||(Ks.push(t),t.flags|=1),S_()}function Ld(t,e,n=yn+1){for(;n<Ot.length;n++){const r=Ot[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ot.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Qa(t){if(Ks.length){const e=[...new Set(Ks)].sort((n,r)=>Eo(n)-Eo(r));if(Ks.length=0,yr){yr.push(...e);return}for(yr=e,Ms=0;Ms<yr.length;Ms++){const n=yr[Ms];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yr=null,Ms=0}}const Eo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function R_(t){try{for(yn=0;yn<Ot.length;yn++){const e=Ot[yn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;yn<Ot.length;yn++){const e=Ot[yn];e&&(e.flags&=-2)}yn=-1,Ot.length=0,Qa(),Ga=null,(Ot.length||Ks.length)&&R_()}}let mt=null,C_=null;function Ja(t){const e=mt;return mt=t,C_=t&&t.type.__scopeId||null,e}function Dc(t,e=mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&nc(-1);const i=Ja(e);let o;try{o=t(...s)}finally{Ja(i),r._d&&nc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Nx(t,e){if(mt===null)return t;const n=Uc(mt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Se]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&qn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function vn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Jn(),ln(l,n,8,[t.el,a,t,e]),Yn())}}const bI=Symbol("_vte"),P_=t=>t.__isTeleport,Bn=Symbol("_leaveCb"),pa=Symbol("_enterCb");function AI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yi(()=>{t.isMounted=!0}),vi(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],k_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},O_=t=>{const e=t.subTree;return e.component?O_(e.component):e},SI={name:"BaseTransition",props:k_,setup(t,{slots:e}){const n=Is(),r=AI();return()=>{const s=e.default&&V_(e.default(),!0);if(!s||!s.length)return;const i=N_(s),o=Ie(t),{mode:a}=o;if(r.isLeaving)return Vl(i);const l=Fd(i);if(!l)return Vl(i);let u=yu(l,o,r,n,d=>u=d);l.type!==Je&&ti(l,u);let h=n.subTree&&Fd(n.subTree);if(h&&h.type!==Je&&!rn(h,l)&&O_(n).type!==Je){let d=yu(h,o,r,n);if(ti(h,d),a==="out-in"&&l.type!==Je)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},Vl(i);a==="in-out"&&l.type!==Je?d.delayLeave=(p,m,E)=>{const A=D_(r,h);A[String(h.key)]=h,p[Bn]=()=>{m(),p[Bn]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{E(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function N_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Je){e=n;break}}return e}const RI=SI;function D_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function yu(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:E,onLeaveCancelled:A,onBeforeAppear:O,onAppear:V,onAfterAppear:N,onAppearCancelled:w}=e,k=String(t.key),D=D_(n,t),F=(_,I)=>{_&&ln(_,r,9,I)},b=(_,I)=>{const C=I[1];F(_,I),oe(_)?_.every(R=>R.length<=1)&&C():_.length<=1&&C()},v={mode:o,persisted:a,beforeEnter(_){let I=l;if(!n.isMounted)if(i)I=O||l;else return;_[Bn]&&_[Bn](!0);const C=D[k];C&&rn(t,C)&&C.el[Bn]&&C.el[Bn](),F(I,[_])},enter(_){let I=u,C=h,R=d;if(!n.isMounted)if(i)I=V||u,C=N||h,R=w||d;else return;let T=!1;const le=_[pa]=me=>{T||(T=!0,me?F(R,[_]):F(C,[_]),v.delayedLeave&&v.delayedLeave(),_[pa]=void 0)};I?b(I,[_,le]):le()},leave(_,I){const C=String(t.key);if(_[pa]&&_[pa](!0),n.isUnmounting)return I();F(p,[_]);let R=!1;const T=_[Bn]=le=>{R||(R=!0,I(),le?F(A,[_]):F(E,[_]),_[Bn]=void 0,D[C]===t&&delete D[C])};D[C]=t,m?b(m,[_,T]):T()},clone(_){const I=yu(_,e,n,r,s);return s&&s(I),I}};return v}function Vl(t){if(Bo(t))return t=Zn(t),t.children=null,t}function Fd(t){if(!Bo(t))return P_(t.type)&&t.children?N_(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function ti(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ti(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function V_(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===bt?(o.patchFlag&128&&s++,r=r.concat(V_(o.children,e,a))):(e||o.type!==Je)&&r.push(a!=null?Zn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function dn(t,e){return he(t)?st({name:t.name},e,{setup:t}):t}function Mh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Ya=new WeakMap;function Gs(t,e,n,r,s=!1){if(oe(t)){t.forEach((E,A)=>Gs(E,e&&(oe(e)?e[A]:e),n,r,s));return}if(Pr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Gs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Uc(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Se?a.refs={}:a.refs,d=a.setupState,p=Ie(d),m=d===Se?Qm:E=>Pe(p,E);if(u!=null&&u!==l){if(Ud(e),je(u))h[u]=null,m(u)&&(d[u]=null);else if(Ue(u)){u.value=null;const E=e;E.k&&(h[E.k]=null)}}if(he(l))jo(l,a,12,[o,h]);else{const E=je(l),A=Ue(l);if(E||A){const O=()=>{if(t.f){const V=E?m(l)?d[l]:h[l]:l.value;if(s)oe(V)&&wh(V,i);else if(oe(V))V.includes(i)||V.push(i);else if(E)h[l]=[i],m(l)&&(d[l]=h[l]);else{const N=[i];l.value=N,t.k&&(h[t.k]=N)}}else E?(h[l]=o,m(l)&&(d[l]=o)):A&&(l.value=o,t.k&&(h[t.k]=o))};if(o){const V=()=>{O(),Ya.delete(t)};V.id=-1,Ya.set(t,V),ht(V,n)}else Ud(t),O()}}}function Ud(t){const e=Ya.get(t);e&&(e.flags|=8,Ya.delete(t))}let $d=!1;const Ds=()=>{$d||(console.error("Hydration completed but contains mismatches."),$d=!0)},CI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",PI=t=>t.namespaceURI.includes("MathML"),ga=t=>{if(t.nodeType===1){if(CI(t))return"svg";if(PI(t))return"mathml"}},js=t=>t.nodeType===8;function kI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(w,k)=>{if(!k.hasChildNodes()){n(null,w,k),Qa(),k._vnode=w;return}d(k.firstChild,w,null,null,null),Qa(),k._vnode=w},d=(w,k,D,F,b,v=!1)=>{v=v||!!k.dynamicChildren;const _=js(w)&&w.data==="[",I=()=>A(w,k,D,F,b,_),{type:C,ref:R,shapeFlag:T,patchFlag:le}=k;let me=w.nodeType;k.el=w,le===-2&&(v=!1,k.dynamicChildren=null);let Z=null;switch(C){case cs:me!==3?k.children===""?(l(k.el=s(""),o(w),w),Z=w):Z=I():(w.data!==k.children&&(Ds(),w.data=k.children),Z=i(w));break;case Je:N(w)?(Z=i(w),V(k.el=w.content.firstChild,w,D)):me!==8||_?Z=I():Z=i(w);break;case ro:if(_&&(w=i(w),me=w.nodeType),me===1||me===3){Z=w;const se=!k.children.length;for(let te=0;te<k.staticCount;te++)se&&(k.children+=Z.nodeType===1?Z.outerHTML:Z.data),te===k.staticCount-1&&(k.anchor=Z),Z=i(Z);return _?i(Z):Z}else I();break;case bt:_?Z=E(w,k,D,F,b,v):Z=I();break;default:if(T&1)(me!==1||k.type.toLowerCase()!==w.tagName.toLowerCase())&&!N(w)?Z=I():Z=p(w,k,D,F,b,v);else if(T&6){k.slotScopeIds=b;const se=o(w);if(_?Z=O(w):js(w)&&w.data==="teleport start"?Z=O(w,w.data,"teleport end"):Z=i(w),e(k,se,null,D,F,ga(se),v),Pr(k)&&!k.type.__asyncResolved){let te;_?(te=$e(bt),te.anchor=Z?Z.previousSibling:se.lastChild):te=w.nodeType===3?fy(""):$e("div"),te.el=w,k.component.subTree=te}}else T&64?me!==8?Z=I():Z=k.type.hydrate(w,k,D,F,b,v,t,m):T&128&&(Z=k.type.hydrate(w,k,D,F,ga(o(w)),b,v,t,d))}return R!=null&&Gs(R,null,F,k),Z},p=(w,k,D,F,b,v)=>{v=v||!!k.dynamicChildren;const{type:_,props:I,patchFlag:C,shapeFlag:R,dirs:T,transition:le}=k,me=_==="input"||_==="option";if(me||C!==-1){T&&vn(k,null,D,"created");let Z=!1;if(N(w)){Z=ty(null,le)&&D&&D.vnode.props&&D.vnode.props.appear;const te=w.content.firstChild;if(Z){const Ne=te.getAttribute("class");Ne&&(te.$cls=Ne),le.beforeEnter(te)}V(te,w,D),k.el=w=te}if(R&16&&!(I&&(I.innerHTML||I.textContent))){let te=m(w.firstChild,k,w,D,F,b,v);for(;te;){ma(w,1)||Ds();const Ne=te;te=te.nextSibling,a(Ne)}}else if(R&8){let te=k.children;te[0]===`
`&&(w.tagName==="PRE"||w.tagName==="TEXTAREA")&&(te=te.slice(1)),w.textContent!==te&&(ma(w,0)||Ds(),w.textContent=k.children)}if(I){if(me||!v||C&48){const te=w.tagName.includes("-");for(const Ne in I)(me&&(Ne.endsWith("value")||Ne==="indeterminate")||Fo(Ne)&&!Ws(Ne)||Ne[0]==="."||te)&&r(w,Ne,null,I[Ne],void 0,D)}else if(I.onClick)r(w,"onClick",null,I.onClick,void 0,D);else if(C&4&&Kn(I.style))for(const te in I.style)I.style[te]}let se;(se=I&&I.onVnodeBeforeMount)&&Dt(se,D,k),T&&vn(k,null,D,"beforeMount"),((se=I&&I.onVnodeMounted)||T||Z)&&cy(()=>{se&&Dt(se,D,k),Z&&le.enter(w),T&&vn(k,null,D,"mounted")},F)}return w.nextSibling},m=(w,k,D,F,b,v,_)=>{_=_||!!k.dynamicChildren;const I=k.children,C=I.length;for(let R=0;R<C;R++){const T=_?I[R]:I[R]=Wt(I[R]),le=T.type===cs;w?(le&&!_&&R+1<C&&Wt(I[R+1]).type===cs&&(l(s(w.data.slice(T.children.length)),D,i(w)),w.data=T.children),w=d(w,T,F,b,v,_)):le&&!T.children?l(T.el=s(""),D):(ma(D,1)||Ds(),n(null,T,D,null,F,b,ga(D),v))}return w},E=(w,k,D,F,b,v)=>{const{slotScopeIds:_}=k;_&&(b=b?b.concat(_):_);const I=o(w),C=m(i(w),k,I,D,F,b,v);return C&&js(C)&&C.data==="]"?i(k.anchor=C):(Ds(),l(k.anchor=u("]"),I,C),C)},A=(w,k,D,F,b,v)=>{if(ma(w.parentElement,1)||Ds(),k.el=null,v){const C=O(w);for(;;){const R=i(w);if(R&&R!==C)a(R);else break}}const _=i(w),I=o(w);return a(w),n(null,k,I,_,D,F,ga(I),b),D&&(D.vnode.el=k.el,Lc(D,k.el)),_},O=(w,k="[",D="]")=>{let F=0;for(;w;)if(w=i(w),w&&js(w)&&(w.data===k&&F++,w.data===D)){if(F===0)return i(w);F--}return w},V=(w,k,D)=>{const F=k.parentNode;F&&F.replaceChild(w,k);let b=D;for(;b;)b.vnode.el===k&&(b.vnode.el=b.subTree.el=w),b=b.parent},N=w=>w.nodeType===1&&w.tagName==="TEMPLATE";return[h,d]}const jd="data-allow-mismatch",OI={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ma(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(jd);)t=t.parentElement;const n=t&&t.getAttribute(jd);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:r.includes(OI[e])}}Pc().requestIdleCallback;Pc().cancelIdleCallback;function NI(t,e){if(js(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(js(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Pr=t=>!!t.type.__asyncLoader;function Bd(t){he(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,h,d=0;const p=()=>(d++,u=null,m()),m=()=>{let E;return u||(E=u=e().catch(A=>{if(A=A instanceof Error?A:new Error(String(A)),l)return new Promise((O,V)=>{l(A,()=>O(p()),()=>V(A),d+1)});throw A}).then(A=>E!==u&&u?u:(A&&(A.__esModule||A[Symbol.toStringTag]==="Module")&&(A=A.default),h=A,A)))};return dn({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(E,A,O){let V=!1;(A.bu||(A.bu=[])).push(()=>V=!0);const N=()=>{V||O()},w=i?()=>{const k=i(N,D=>NI(E,D));k&&(A.bum||(A.bum=[])).push(k)}:N;h?w():m().then(()=>!A.isUnmounted&&w())},get __asyncResolved(){return h},setup(){const E=pt;if(Mh(E),h)return()=>Ml(h,E);const A=w=>{u=null,_i(w,E,13,!r)};if(a&&E.suspense||ri)return m().then(w=>()=>Ml(w,E)).catch(w=>(A(w),()=>r?$e(r,{error:w}):null));const O=Ft(!1),V=Ft(),N=Ft(!!s);return s&&setTimeout(()=>{N.value=!1},s),o!=null&&setTimeout(()=>{if(!O.value&&!V.value){const w=new Error(`Async component timed out after ${o}ms.`);A(w),V.value=w}},o),m().then(()=>{O.value=!0,E.parent&&Bo(E.parent.vnode)&&E.parent.update()}).catch(w=>{A(w),V.value=w}),()=>{if(O.value&&h)return Ml(h,E);if(V.value&&r)return $e(r,{error:V.value});if(n&&!N.value)return $e(n)}}})}function Ml(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=$e(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Bo=t=>t.type.__isKeepAlive,DI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Is(),r=n.ctx;if(!r.renderer)return()=>{const N=e.default&&e.default();return N&&N.length===1?N[0]:N};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,p=d("div");r.activate=(N,w,k,D,F)=>{const b=N.component;u(N,w,k,0,a),l(b.vnode,N,w,k,b,a,D,N.slotScopeIds,F),ht(()=>{b.isDeactivated=!1,b.a&&zs(b.a);const v=N.props&&N.props.onVnodeMounted;v&&Dt(v,b.parent,N)},a)},r.deactivate=N=>{const w=N.component;ec(w.m),ec(w.a),u(N,p,null,1,a),ht(()=>{w.da&&zs(w.da);const k=N.props&&N.props.onVnodeUnmounted;k&&Dt(k,w.parent,N),w.isDeactivated=!0},a)};function m(N){xl(N),h(N,n,a,!0)}function E(N){s.forEach((w,k)=>{const D=Ru(w.type);D&&!N(D)&&A(k)})}function A(N){const w=s.get(N);w&&(!o||!rn(w,o))?m(w):o&&xl(o),s.delete(N),i.delete(N)}an(()=>[t.include,t.exclude],([N,w])=>{N&&E(k=>zi(N,k)),w&&E(k=>!zi(w,k))},{flush:"post",deep:!0});let O=null;const V=()=>{O!=null&&(tc(n.subTree.type)?ht(()=>{s.set(O,_a(n.subTree))},n.subTree.suspense):s.set(O,_a(n.subTree)))};return yi(V),x_(V),vi(()=>{s.forEach(N=>{const{subTree:w,suspense:k}=n,D=_a(w);if(N.type===D.type&&N.key===D.key){xl(D);const F=D.component.da;F&&ht(F,k);return}m(N)})}),()=>{if(O=null,!e.default)return o=null;const N=e.default(),w=N[0];if(N.length>1)return o=null,N;if(!fs(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let k=_a(w);if(k.type===Je)return o=null,k;const D=k.type,F=Ru(Pr(k)?k.type.__asyncResolved||{}:D),{include:b,exclude:v,max:_}=t;if(b&&(!F||!zi(b,F))||v&&F&&zi(v,F))return k.shapeFlag&=-257,o=k,w;const I=k.key==null?D:k.key,C=s.get(I);return k.el&&(k=Zn(k),w.shapeFlag&128&&(w.ssContent=k)),O=I,C?(k.el=C.el,k.component=C.component,k.transition&&ti(k,k.transition),k.shapeFlag|=512,i.delete(I),i.add(I)):(i.add(I),_&&i.size>parseInt(_,10)&&A(i.values().next().value)),k.shapeFlag|=256,o=k,tc(w.type)?w:k}}},VI=DI;function zi(t,e){return oe(t)?t.some(n=>zi(n,e)):je(t)?t.split(",").includes(e):xT(t)?(t.lastIndex=0,t.test(e)):!1}function MI(t,e){M_(t,"a",e)}function xI(t,e){M_(t,"da",e)}function M_(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Bo(s.parent.vnode)&&LI(r,e,n,s),s=s.parent}}function LI(t,e,n,r){const s=Vc(e,t,r,!0);L_(()=>{wh(r[e],s)},n)}function xl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function _a(t){return t.shapeFlag&128?t.ssContent:t}function Vc(t,e,n=pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Jn();const a=ds(n),l=ln(e,n,t,o);return a(),Yn(),l});return r?s.unshift(i):s.push(i),i}}const ir=t=>(e,n=pt)=>{(!ri||t==="sp")&&Vc(t,(...r)=>e(...r),n)},FI=ir("bm"),yi=ir("m"),UI=ir("bu"),x_=ir("u"),vi=ir("bum"),L_=ir("um"),$I=ir("sp"),jI=ir("rtg"),BI=ir("rtc");function F_(t,e=pt){Vc("ec",t,e)}const U_="components";function Hd(t,e){return j_(U_,t,!0,e)||t}const $_=Symbol.for("v-ndc");function HI(t){return je(t)?j_(U_,t,!1)||t:t||$_}function j_(t,e,n=!0,r=!1){const s=mt||pt;if(s){const i=s.type;{const a=Ru(i,!1);if(a&&(a===e||a===Kt(e)||a===Cc(Kt(e))))return i}const o=qd(s[t]||i[t],e)||qd(s.appContext[t],e);return!o&&r?i:o}}function qd(t,e){return t&&(t[e]||t[Kt(e)]||t[Cc(Kt(e))])}function Dx(t,e,n,r){let s;const i=n,o=oe(t);if(o||je(t)){const a=o&&Kn(t);let l=!1,u=!1;a&&(l=!Xt(t),u=Xn(t),t=Nc(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(l?u?za(dt(t[h])):dt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function Vx(t,e,n={},r,s){if(mt.ce||mt.parent&&Pr(mt.parent)&&mt.parent.ce)return qt(),wr(bt,null,[$e("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),qt();const o=i&&B_(i(n)),a=n.key||o&&o.key,l=wr(bt,{key:(a&&!cn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function B_(t){return t.some(e=>fs(e)?!(e.type===Je||e.type===bt&&!B_(e.children)):!0)?t:null}const vu=t=>t?py(t)?Uc(t):vu(t.parent):null,no=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vu(t.parent),$root:t=>vu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>q_(t),$forceUpdate:t=>t.f||(t.f=()=>{Vh(t.update)}),$nextTick:t=>t.n||(t.n=kn.bind(t.proxy)),$watch:t=>ub.bind(t)}),Ll=(t,e)=>t!==Se&&!t.__isScriptSetup&&Pe(t,e),qI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ll(r,e))return o[e]=1,r[e];if(s!==Se&&Pe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Pe(u,e))return o[e]=3,i[e];if(n!==Se&&Pe(n,e))return o[e]=4,n[e];Eu&&(o[e]=0)}}const h=no[e];let d,p;if(h)return e==="$attrs"&&It(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Se&&Pe(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Pe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ll(s,e)?(s[e]=n,!0):r!==Se&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},a){let l,u;return!!(n[a]||t!==Se&&a[0]!=="$"&&Pe(t,a)||Ll(e,a)||(l=i[0])&&Pe(l,a)||Pe(r,a)||Pe(no,a)||Pe(s.config.globalProperties,a)||(u=o.__cssModules)&&u[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xa(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Mx(t,e){return!t||!e?t||e:oe(t)&&oe(e)?t.concat(e):st({},Xa(t),Xa(e))}function xx(t){const e=Is();let n=t();return Au(),Th(n)&&(n=n.catch(r=>{throw ds(e),r})),[n,()=>ds(e)]}let Eu=!0;function WI(t){const e=q_(t),n=t.proxy,r=t.ctx;Eu=!1,e.beforeCreate&&Wd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:m,updated:E,activated:A,deactivated:O,beforeDestroy:V,beforeUnmount:N,destroyed:w,unmounted:k,render:D,renderTracked:F,renderTriggered:b,errorCaptured:v,serverPrefetch:_,expose:I,inheritAttrs:C,components:R,directives:T,filters:le}=e;if(u&&zI(u,r,null),o)for(const se in o){const te=o[se];he(te)&&(r[se]=te.bind(n))}if(s){const se=s.call(n,n);Oe(se)&&(t.data=Vn(se))}if(Eu=!0,i)for(const se in i){const te=i[se],Ne=he(te)?te.bind(n,n):he(te.get)?te.get.bind(n,n):Tn,gn=!he(te)&&he(te.set)?te.set.bind(n):Tn,jt=ze({get:Ne,set:gn});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>jt.value,set:lt=>jt.value=lt})}if(a)for(const se in a)H_(a[se],r,n,se);if(l){const se=he(l)?l.call(n):l;Reflect.ownKeys(se).forEach(te=>{kr(te,se[te])})}h&&Wd(h,t,"c");function Z(se,te){oe(te)?te.forEach(Ne=>se(Ne.bind(n))):te&&se(te.bind(n))}if(Z(FI,d),Z(yi,p),Z(UI,m),Z(x_,E),Z(MI,A),Z(xI,O),Z(F_,v),Z(BI,F),Z(jI,b),Z(vi,N),Z(L_,k),Z($I,_),oe(I))if(I.length){const se=t.exposed||(t.exposed={});I.forEach(te=>{Object.defineProperty(se,te,{get:()=>n[te],set:Ne=>n[te]=Ne,enumerable:!0})})}else t.exposed||(t.exposed={});D&&t.render===Tn&&(t.render=D),C!=null&&(t.inheritAttrs=C),R&&(t.components=R),T&&(t.directives=T),_&&Mh(t)}function zI(t,e,n=Tn){oe(t)&&(t=wu(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=St(s.from||r,s.default,!0):i=St(s.from||r):i=St(s),Ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Wd(t,e,n){ln(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function H_(t,e,n,r){let s=r.includes(".")?sy(n,r):()=>n[r];if(je(t)){const i=e[t];he(i)&&an(s,i)}else if(he(t))an(s,t.bind(n));else if(Oe(t))if(oe(t))t.forEach(i=>H_(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&an(s,i,t)}}function q_(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Za(l,u,o,!0)),Za(l,e,o)),Oe(e)&&i.set(e,l),l}function Za(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Za(t,i,n,!0),s&&s.forEach(o=>Za(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=KI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const KI={data:zd,props:Kd,emits:Kd,methods:Ki,computed:Ki,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Ki,directives:Ki,watch:QI,provide:zd,inject:GI};function zd(t,e){return e?t?function(){return st(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function GI(t,e){return Ki(wu(t),wu(e))}function wu(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ki(t,e){return t?st(Object.create(null),t,e):e}function Kd(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:st(Object.create(null),Xa(t),Xa(e??{})):e}function QI(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function W_(){return{app:null,config:{isNativeTag:Qm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let JI=0;function YI(t,e){return function(r,s=null){he(r)||(r=st({},r)),s!=null&&!Oe(s)&&(s=null);const i=W_(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:JI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Db,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&he(h.install)?(o.add(h),h.install(u,...d)):he(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!l){const m=u._ceVNode||$e(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(m,h):t(m,h,p),l=!0,u._container=h,h.__vue_app__=u,Uc(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(ln(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=as;as=u;try{return h()}finally{as=d}}};return u}}let as=null;function kr(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function St(t,e,n=!1){const r=Is();if(r||as){let s=as?as._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}function xh(){return!!(Is()||as)}const z_={},K_=()=>Object.create(z_),G_=t=>Object.getPrototypeOf(t)===z_;function XI(t,e,n,r=!1){const s={},i=K_();t.propsDefaults=Object.create(null),Q_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:wn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ZI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(xc(t.emitsOptions,p))continue;const m=e[p];if(l)if(Pe(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const E=Kt(p);s[E]=Tu(l,a,E,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{Q_(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!Pe(e,d)&&((h=jr(d))===d||!Pe(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=Tu(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Pe(e,d))&&(delete i[d],u=!0)}u&&Hn(t.attrs,"set","")}function Q_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ws(l))continue;const u=e[l];let h;s&&Pe(s,h=Kt(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:xc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=a||Se;for(let h=0;h<i.length;h++){const d=i[h];n[d]=Tu(s,l,d,u[d],t,!Pe(u,d))}}return o}function Tu(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Pe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=ds(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===jr(n))&&(r=!0))}return r}const eb=new WeakMap;function J_(t,e,n=!1){const r=n?eb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!he(t)){const h=d=>{l=!0;const[p,m]=J_(d,e,!0);st(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Oe(t)&&r.set(t,Hs),Hs;if(oe(i))for(let h=0;h<i.length;h++){const d=Kt(i[h]);Gd(d)&&(o[d]=Se)}else if(i)for(const h in i){const d=Kt(h);if(Gd(d)){const p=i[h],m=o[d]=oe(p)||he(p)?{type:p}:st({},p),E=m.type;let A=!1,O=!0;if(oe(E))for(let V=0;V<E.length;++V){const N=E[V],w=he(N)&&N.name;if(w==="Boolean"){A=!0;break}else w==="String"&&(O=!1)}else A=he(E)&&E.name==="Boolean";m[0]=A,m[1]=O,(A||Pe(m,"default"))&&a.push(d)}}const u=[o,a];return Oe(t)&&r.set(t,u),u}function Gd(t){return t[0]!=="$"&&!Ws(t)}const Lh=t=>t==="_"||t==="_ctx"||t==="$stable",Fh=t=>oe(t)?t.map(Wt):[Wt(t)],tb=(t,e,n)=>{if(e._n)return e;const r=Dc((...s)=>Fh(e(...s)),n);return r._c=!1,r},Y_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Lh(s))continue;const i=t[s];if(he(i))e[s]=tb(s,i,r);else if(i!=null){const o=Fh(i);e[s]=()=>o}}},X_=(t,e)=>{const n=Fh(e);t.slots.default=()=>n},Z_=(t,e,n)=>{for(const r in e)(n||!Lh(r))&&(t[r]=e[r])},nb=(t,e,n)=>{const r=t.slots=K_();if(t.vnode.shapeFlag&32){const s=e._;s?(Z_(r,e,n),n&&Xm(r,"_",s,!0)):Y_(e,r)}else e&&X_(t,e)},rb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Z_(s,e,n):(i=!e.$stable,Y_(e,s)),o=e}else e&&(X_(t,e),o={default:1});if(i)for(const a in s)!Lh(a)&&o[a]==null&&delete s[a]},ht=cy;function sb(t){return ey(t)}function ib(t){return ey(t,kI)}function ey(t,e){const n=Pc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:m=Tn,insertStaticContent:E}=t,A=(S,P,x,B=null,U=null,q=null,K=void 0,W=null,G=!!P.dynamicChildren)=>{if(S===P)return;S&&!rn(S,P)&&(B=$(S),lt(S,U,q,!0),S=null),P.patchFlag===-2&&(G=!1,P.dynamicChildren=null);const{type:z,ref:ae,shapeFlag:Y}=P;switch(z){case cs:O(S,P,x,B);break;case Je:V(S,P,x,B);break;case ro:S==null&&N(P,x,B,K);break;case bt:R(S,P,x,B,U,q,K,W,G);break;default:Y&1?D(S,P,x,B,U,q,K,W,G):Y&6?T(S,P,x,B,U,q,K,W,G):(Y&64||Y&128)&&z.process(S,P,x,B,U,q,K,W,G,re)}ae!=null&&U?Gs(ae,S&&S.ref,q,P||S,!P):ae==null&&S&&S.ref!=null&&Gs(S.ref,null,q,S,!0)},O=(S,P,x,B)=>{if(S==null)r(P.el=a(P.children),x,B);else{const U=P.el=S.el;P.children!==S.children&&u(U,P.children)}},V=(S,P,x,B)=>{S==null?r(P.el=l(P.children||""),x,B):P.el=S.el},N=(S,P,x,B)=>{[S.el,S.anchor]=E(S.children,P,x,B,S.el,S.anchor)},w=({el:S,anchor:P},x,B)=>{let U;for(;S&&S!==P;)U=p(S),r(S,x,B),S=U;r(P,x,B)},k=({el:S,anchor:P})=>{let x;for(;S&&S!==P;)x=p(S),s(S),S=x;s(P)},D=(S,P,x,B,U,q,K,W,G)=>{P.type==="svg"?K="svg":P.type==="math"&&(K="mathml"),S==null?F(P,x,B,U,q,K,W,G):_(S,P,U,q,K,W,G)},F=(S,P,x,B,U,q,K,W)=>{let G,z;const{props:ae,shapeFlag:Y,transition:ne,dirs:de}=S;if(G=S.el=o(S.type,q,ae&&ae.is,ae),Y&8?h(G,S.children):Y&16&&v(S.children,G,null,B,U,Fl(S,q),K,W),de&&vn(S,null,B,"created"),b(G,S,S.scopeId,K,B),ae){for(const Re in ae)Re!=="value"&&!Ws(Re)&&i(G,Re,null,ae[Re],q,B);"value"in ae&&i(G,"value",null,ae.value,q),(z=ae.onVnodeBeforeMount)&&Dt(z,B,S)}de&&vn(S,null,B,"beforeMount");const ye=ty(U,ne);ye&&ne.beforeEnter(G),r(G,P,x),((z=ae&&ae.onVnodeMounted)||ye||de)&&ht(()=>{z&&Dt(z,B,S),ye&&ne.enter(G),de&&vn(S,null,B,"mounted")},U)},b=(S,P,x,B,U)=>{if(x&&m(S,x),B)for(let q=0;q<B.length;q++)m(S,B[q]);if(U){let q=U.subTree;if(P===q||tc(q.type)&&(q.ssContent===P||q.ssFallback===P)){const K=U.vnode;b(S,K,K.scopeId,K.slotScopeIds,U.parent)}}},v=(S,P,x,B,U,q,K,W,G=0)=>{for(let z=G;z<S.length;z++){const ae=S[z]=W?vr(S[z]):Wt(S[z]);A(null,ae,P,x,B,U,q,K,W)}},_=(S,P,x,B,U,q,K)=>{const W=P.el=S.el;let{patchFlag:G,dynamicChildren:z,dirs:ae}=P;G|=S.patchFlag&16;const Y=S.props||Se,ne=P.props||Se;let de;if(x&&Yr(x,!1),(de=ne.onVnodeBeforeUpdate)&&Dt(de,x,P,S),ae&&vn(P,S,x,"beforeUpdate"),x&&Yr(x,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&h(W,""),z?I(S.dynamicChildren,z,W,x,B,Fl(P,U),q):K||te(S,P,W,null,x,B,Fl(P,U),q,!1),G>0){if(G&16)C(W,Y,ne,x,U);else if(G&2&&Y.class!==ne.class&&i(W,"class",null,ne.class,U),G&4&&i(W,"style",Y.style,ne.style,U),G&8){const ye=P.dynamicProps;for(let Re=0;Re<ye.length;Re++){const Ae=ye[Re],vt=Y[Ae],Xe=ne[Ae];(Xe!==vt||Ae==="value")&&i(W,Ae,vt,Xe,U,x)}}G&1&&S.children!==P.children&&h(W,P.children)}else!K&&z==null&&C(W,Y,ne,x,U);((de=ne.onVnodeUpdated)||ae)&&ht(()=>{de&&Dt(de,x,P,S),ae&&vn(P,S,x,"updated")},B)},I=(S,P,x,B,U,q,K)=>{for(let W=0;W<P.length;W++){const G=S[W],z=P[W],ae=G.el&&(G.type===bt||!rn(G,z)||G.shapeFlag&198)?d(G.el):x;A(G,z,ae,null,B,U,q,K,!0)}},C=(S,P,x,B,U)=>{if(P!==x){if(P!==Se)for(const q in P)!Ws(q)&&!(q in x)&&i(S,q,P[q],null,U,B);for(const q in x){if(Ws(q))continue;const K=x[q],W=P[q];K!==W&&q!=="value"&&i(S,q,W,K,U,B)}"value"in x&&i(S,"value",P.value,x.value,U)}},R=(S,P,x,B,U,q,K,W,G)=>{const z=P.el=S?S.el:a(""),ae=P.anchor=S?S.anchor:a("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:de}=P;de&&(W=W?W.concat(de):de),S==null?(r(z,x,B),r(ae,x,B),v(P.children||[],x,ae,U,q,K,W,G)):Y>0&&Y&64&&ne&&S.dynamicChildren?(I(S.dynamicChildren,ne,x,U,q,K,W),(P.key!=null||U&&P===U.subTree)&&ny(S,P,!0)):te(S,P,x,ae,U,q,K,W,G)},T=(S,P,x,B,U,q,K,W,G)=>{P.slotScopeIds=W,S==null?P.shapeFlag&512?U.ctx.activate(P,x,B,K,G):le(P,x,B,U,q,K,G):me(S,P,G)},le=(S,P,x,B,U,q,K)=>{const W=S.component=Rb(S,B,U);if(Bo(S)&&(W.ctx.renderer=re),Cb(W,!1,K),W.asyncDep){if(U&&U.registerDep(W,Z,K),!S.el){const G=W.subTree=$e(Je);V(null,G,P,x),S.placeholder=G.el}}else Z(W,S,P,x,U,q,K)},me=(S,P,x)=>{const B=P.component=S.component;if(mb(S,P,x))if(B.asyncDep&&!B.asyncResolved){se(B,P,x);return}else B.next=P,B.update();else P.el=S.el,B.vnode=P},Z=(S,P,x,B,U,q,K)=>{const W=()=>{if(S.isMounted){let{next:Y,bu:ne,u:de,parent:ye,vnode:Re}=S;{const Ze=ry(S);if(Ze){Y&&(Y.el=Re.el,se(S,Y,K)),Ze.asyncDep.then(()=>{S.isUnmounted||W()});return}}let Ae=Y,vt;Yr(S,!1),Y?(Y.el=Re.el,se(S,Y,K)):Y=Re,ne&&zs(ne),(vt=Y.props&&Y.props.onVnodeBeforeUpdate)&&Dt(vt,ye,Y,Re),Yr(S,!0);const Xe=Ul(S),Nt=S.subTree;S.subTree=Xe,A(Nt,Xe,d(Nt.el),$(Nt),S,U,q),Y.el=Xe.el,Ae===null&&Lc(S,Xe.el),de&&ht(de,U),(vt=Y.props&&Y.props.onVnodeUpdated)&&ht(()=>Dt(vt,ye,Y,Re),U)}else{let Y;const{el:ne,props:de}=P,{bm:ye,m:Re,parent:Ae,root:vt,type:Xe}=S,Nt=Pr(P);if(Yr(S,!1),ye&&zs(ye),!Nt&&(Y=de&&de.onVnodeBeforeMount)&&Dt(Y,Ae,P),Yr(S,!0),ne&&De){const Ze=()=>{S.subTree=Ul(S),De(ne,S.subTree,S,U,null)};Nt&&Xe.__asyncHydrate?Xe.__asyncHydrate(ne,S,Ze):Ze()}else{vt.ce&&vt.ce._def.shadowRoot!==!1&&vt.ce._injectChildStyle(Xe);const Ze=S.subTree=Ul(S);A(null,Ze,x,B,S,U,q),P.el=Ze.el}if(Re&&ht(Re,U),!Nt&&(Y=de&&de.onVnodeMounted)){const Ze=P;ht(()=>Dt(Y,Ae,Ze),U)}(P.shapeFlag&256||Ae&&Pr(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&S.a&&ht(S.a,U),S.isMounted=!0,P=x=B=null}};S.scope.on();const G=S.effect=new i_(W);S.scope.off();const z=S.update=G.run.bind(G),ae=S.job=G.runIfDirty.bind(G);ae.i=S,ae.id=S.uid,G.scheduler=()=>Vh(ae),Yr(S,!0),z()},se=(S,P,x)=>{P.component=S;const B=S.vnode.props;S.vnode=P,S.next=null,ZI(S,P.props,B,x),rb(S,P.children,x),Jn(),Ld(S),Yn()},te=(S,P,x,B,U,q,K,W,G=!1)=>{const z=S&&S.children,ae=S?S.shapeFlag:0,Y=P.children,{patchFlag:ne,shapeFlag:de}=P;if(ne>0){if(ne&128){gn(z,Y,x,B,U,q,K,W,G);return}else if(ne&256){Ne(z,Y,x,B,U,q,K,W,G);return}}de&8?(ae&16&&yt(z,U,q),Y!==z&&h(x,Y)):ae&16?de&16?gn(z,Y,x,B,U,q,K,W,G):yt(z,U,q,!0):(ae&8&&h(x,""),de&16&&v(Y,x,B,U,q,K,W,G))},Ne=(S,P,x,B,U,q,K,W,G)=>{S=S||Hs,P=P||Hs;const z=S.length,ae=P.length,Y=Math.min(z,ae);let ne;for(ne=0;ne<Y;ne++){const de=P[ne]=G?vr(P[ne]):Wt(P[ne]);A(S[ne],de,x,null,U,q,K,W,G)}z>ae?yt(S,U,q,!0,!1,Y):v(P,x,B,U,q,K,W,G,Y)},gn=(S,P,x,B,U,q,K,W,G)=>{let z=0;const ae=P.length;let Y=S.length-1,ne=ae-1;for(;z<=Y&&z<=ne;){const de=S[z],ye=P[z]=G?vr(P[z]):Wt(P[z]);if(rn(de,ye))A(de,ye,x,null,U,q,K,W,G);else break;z++}for(;z<=Y&&z<=ne;){const de=S[Y],ye=P[ne]=G?vr(P[ne]):Wt(P[ne]);if(rn(de,ye))A(de,ye,x,null,U,q,K,W,G);else break;Y--,ne--}if(z>Y){if(z<=ne){const de=ne+1,ye=de<ae?P[de].el:B;for(;z<=ne;)A(null,P[z]=G?vr(P[z]):Wt(P[z]),x,ye,U,q,K,W,G),z++}}else if(z>ne)for(;z<=Y;)lt(S[z],U,q,!0),z++;else{const de=z,ye=z,Re=new Map;for(z=ye;z<=ne;z++){const Ke=P[z]=G?vr(P[z]):Wt(P[z]);Ke.key!=null&&Re.set(Ke.key,z)}let Ae,vt=0;const Xe=ne-ye+1;let Nt=!1,Ze=0;const xn=new Array(Xe);for(z=0;z<Xe;z++)xn[z]=0;for(z=de;z<=Y;z++){const Ke=S[z];if(vt>=Xe){lt(Ke,U,q,!0);continue}let Bt;if(Ke.key!=null)Bt=Re.get(Ke.key);else for(Ae=ye;Ae<=ne;Ae++)if(xn[Ae-ye]===0&&rn(Ke,P[Ae])){Bt=Ae;break}Bt===void 0?lt(Ke,U,q,!0):(xn[Bt-ye]=z+1,Bt>=Ze?Ze=Bt:Nt=!0,A(Ke,P[Bt],x,null,U,q,K,W,G),vt++)}const Cs=Nt?ob(xn):Hs;for(Ae=Cs.length-1,z=Xe-1;z>=0;z--){const Ke=ye+z,Bt=P[Ke],zr=P[Ke+1],Ri=Ke+1<ae?zr.el||zr.placeholder:B;xn[z]===0?A(null,Bt,x,Ri,U,q,K,W,G):Nt&&(Ae<0||z!==Cs[Ae]?jt(Bt,x,Ri,2):Ae--)}}},jt=(S,P,x,B,U=null)=>{const{el:q,type:K,transition:W,children:G,shapeFlag:z}=S;if(z&6){jt(S.component.subTree,P,x,B);return}if(z&128){S.suspense.move(P,x,B);return}if(z&64){K.move(S,P,x,re);return}if(K===bt){r(q,P,x);for(let Y=0;Y<G.length;Y++)jt(G[Y],P,x,B);r(S.anchor,P,x);return}if(K===ro){w(S,P,x);return}if(B!==2&&z&1&&W)if(B===0)W.beforeEnter(q),r(q,P,x),ht(()=>W.enter(q),U);else{const{leave:Y,delayLeave:ne,afterLeave:de}=W,ye=()=>{S.ctx.isUnmounted?s(q):r(q,P,x)},Re=()=>{q._isLeaving&&q[Bn](!0),Y(q,()=>{ye(),de&&de()})};ne?ne(q,ye,Re):Re()}else r(q,P,x)},lt=(S,P,x,B=!1,U=!1)=>{const{type:q,props:K,ref:W,children:G,dynamicChildren:z,shapeFlag:ae,patchFlag:Y,dirs:ne,cacheIndex:de}=S;if(Y===-2&&(U=!1),W!=null&&(Jn(),Gs(W,null,x,S,!0),Yn()),de!=null&&(P.renderCache[de]=void 0),ae&256){P.ctx.deactivate(S);return}const ye=ae&1&&ne,Re=!Pr(S);let Ae;if(Re&&(Ae=K&&K.onVnodeBeforeUnmount)&&Dt(Ae,P,S),ae&6)ar(S.component,x,B);else{if(ae&128){S.suspense.unmount(x,B);return}ye&&vn(S,null,P,"beforeUnmount"),ae&64?S.type.remove(S,P,x,re,B):z&&!z.hasOnce&&(q!==bt||Y>0&&Y&64)?yt(z,P,x,!1,!0):(q===bt&&Y&384||!U&&ae&16)&&yt(G,P,x),B&&Mn(S)}(Re&&(Ae=K&&K.onVnodeUnmounted)||ye)&&ht(()=>{Ae&&Dt(Ae,P,S),ye&&vn(S,null,P,"unmounted")},x)},Mn=S=>{const{type:P,el:x,anchor:B,transition:U}=S;if(P===bt){tn(x,B);return}if(P===ro){k(S);return}const q=()=>{s(x),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(S.shapeFlag&1&&U&&!U.persisted){const{leave:K,delayLeave:W}=U,G=()=>K(x,q);W?W(S.el,q,G):G()}else q()},tn=(S,P)=>{let x;for(;S!==P;)x=p(S),s(S),S=x;s(P)},ar=(S,P,x)=>{const{bum:B,scope:U,job:q,subTree:K,um:W,m:G,a:z}=S;ec(G),ec(z),B&&zs(B),U.stop(),q&&(q.flags|=8,lt(K,S,P,x)),W&&ht(W,P),ht(()=>{S.isUnmounted=!0},P)},yt=(S,P,x,B=!1,U=!1,q=0)=>{for(let K=q;K<S.length;K++)lt(S[K],P,x,B,U)},$=S=>{if(S.shapeFlag&6)return $(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const P=p(S.anchor||S.el),x=P&&P[bI];return x?p(x):P};let X=!1;const J=(S,P,x)=>{S==null?P._vnode&&lt(P._vnode,null,null,!0):A(P._vnode||null,S,P,null,null,null,x),P._vnode=S,X||(X=!0,Ld(),Qa(),X=!1)},re={p:A,um:lt,m:jt,r:Mn,mt:le,mc:v,pc:te,pbc:I,n:$,o:t};let be,De;return e&&([be,De]=e(re)),{render:J,hydrate:be,createApp:YI(J,be)}}function Fl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Yr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ty(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ny(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=vr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ny(o,a)),a.type===cs&&a.patchFlag!==-1&&(a.el=o.el),a.type===Je&&!a.el&&(a.el=o.el)}}function ob(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ry(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ry(e)}function ec(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ab=Symbol.for("v-scx"),cb=()=>St(ab);function Lx(t,e){return Mc(t,null,e)}function lb(t,e){return Mc(t,null,{flush:"sync"})}function an(t,e,n){return Mc(t,e,n)}function Mc(t,e,n=Se){const{immediate:r,deep:s,flush:i,once:o}=n,a=st({},n),l=e&&r||!e&&i!=="post";let u;if(ri){if(i==="sync"){const m=cb();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Tn,m.resume=Tn,m.pause=Tn,m}}const h=pt;a.call=(m,E,A)=>ln(m,h,E,A);let d=!1;i==="post"?a.scheduler=m=>{ht(m,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,E)=>{E?m():Vh(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=wI(t,e,a);return ri&&(u?u.push(p):l&&p()),p}function ub(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?sy(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=ds(this),a=Mc(s,i.bind(r),n);return o(),a}function sy(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Fx(t,e,n=Se){const r=Is(),s=Kt(e),i=jr(e),o=iy(t,s),a=T_((l,u)=>{let h,d=Se,p;return lb(()=>{const m=t[s];Mt(h,m)&&(h=m,u())}),{get(){return l(),n.get?n.get(h):h},set(m){const E=n.set?n.set(m):m;if(!Mt(E,h)&&!(d!==Se&&Mt(m,d)))return;const A=r.vnode.props;A&&(e in A||s in A||i in A)&&(`onUpdate:${e}`in A||`onUpdate:${s}`in A||`onUpdate:${i}`in A)||(h=m,u()),r.emit(`update:${e}`,E),Mt(m,E)&&Mt(m,d)&&!Mt(E,p)&&u(),d=m,p=E}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||Se:a,done:!1}:{done:!0}}}},a}const iy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Kt(e)}Modifiers`]||t[`${jr(e)}Modifiers`];function hb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Se;let s=n;const i=e.startsWith("update:"),o=i&&iy(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>je(h)?h.trim():h)),o.number&&(s=n.map(Ha)));let a,l=r[a=Pl(e)]||r[a=Pl(Kt(e))];!l&&i&&(l=r[a=Pl(jr(e))]),l&&ln(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ln(u,t,6,s)}}const fb=new WeakMap;function oy(t,e,n=!1){const r=n?fb:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!he(t)){const l=u=>{const h=oy(u,e,!0);h&&(a=!0,st(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Oe(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>o[l]=null):st(o,i),Oe(t)&&r.set(t,o),o)}function xc(t,e){return!t||!Fo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,jr(e))||Pe(t,e))}function Ul(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:m,ctx:E,inheritAttrs:A}=t,O=Ja(t);let V,N;try{if(n.shapeFlag&4){const k=s||r,D=k;V=Wt(u.call(D,k,h,d,m,p,E)),N=a}else{const k=e;V=Wt(k.length>1?k(d,{attrs:a,slots:o,emit:l}):k(d,null)),N=e.props?a:pb(a)}}catch(k){so.length=0,_i(k,t,1),V=$e(Je)}let w=V;if(N&&A!==!1){const k=Object.keys(N),{shapeFlag:D}=w;k.length&&D&7&&(i&&k.some(Eh)&&(N=gb(N,i)),w=Zn(w,N,!1,!0))}return n.dirs&&(w=Zn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&ti(w,n.transition),V=w,Ja(O),V}function db(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(fs(s)){if(s.type!==Je||s.children==="v-if"){if(n)return;n=s}}else return}return n}const pb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fo(n))&&((e||(e={}))[n]=t[n]);return e},gb=(t,e)=>{const n={};for(const r in t)(!Eh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function mb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Qd(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!xc(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Qd(r,o,u):!0:!!o;return!1}function Qd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!xc(n,i))return!0}return!1}function Lc({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const tc=t=>t.__isSuspense;let Iu=0;const _b={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)yb(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}vb(t,e,n,r,s,o,a,l,u)}},hydrate:Eb,normalize:wb},Uh=_b;function wo(t,e){const n=t.props&&t.props[e];he(n)&&n()}function yb(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),p=t.suspense=ay(t,s,r,e,d,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(wo(t,"onPending"),wo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Qs(p,t.ssFallback)):p.resolve(!1,!0)}function vb(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,m=e.ssFallback,{activeBranch:E,pendingBranch:A,isInFallback:O,isHydrating:V}=d;if(A)d.pendingBranch=p,rn(A,p)?(l(A,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():O&&(V||(l(E,m,n,r,s,null,i,o,a),Qs(d,m)))):(d.pendingId=Iu++,V?(d.isHydrating=!1,d.activeBranch=A):u(A,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),O?(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(E,m,n,r,s,null,i,o,a),Qs(d,m))):E&&rn(E,p)?(l(E,p,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(E&&rn(E,p))l(E,p,n,r,s,d,i,o,a),Qs(d,p);else if(wo(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=Iu++,l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:N,pendingId:w}=d;N>0?setTimeout(()=>{d.pendingId===w&&d.fallback(m)},N):N===0&&d.fallback(m)}}function ay(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m:p,um:m,n:E,o:{parentNode:A,remove:O}}=u;let V;const N=Tb(t);N&&e&&e.pendingBranch&&(V=e.pendingId,e.deps++);const w=t.props?Zm(t.props.timeout):void 0,k=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Iu++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(F=!1,b=!1){const{vnode:v,activeBranch:_,pendingBranch:I,pendingId:C,effects:R,parentComponent:T,container:le}=D;let me=!1;D.isHydrating?D.isHydrating=!1:F||(me=_&&I.transition&&I.transition.mode==="out-in",me&&(_.transition.afterLeave=()=>{C===D.pendingId&&(p(I,le,i===k?E(_):i,0),_u(R))}),_&&(A(_.el)===le&&(i=E(_)),m(_,T,D,!0)),me||p(I,le,i,0)),Qs(D,I),D.pendingBranch=null,D.isInFallback=!1;let Z=D.parent,se=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...R),se=!0;break}Z=Z.parent}!se&&!me&&_u(R),D.effects=[],N&&e&&e.pendingBranch&&V===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),wo(v,"onResolve")},fallback(F){if(!D.pendingBranch)return;const{vnode:b,activeBranch:v,parentComponent:_,container:I,namespace:C}=D;wo(b,"onFallback");const R=E(v),T=()=>{D.isInFallback&&(d(null,F,I,R,_,null,C,a,l),Qs(D,F))},le=F.transition&&F.transition.mode==="out-in";le&&(v.transition.afterLeave=T),D.isInFallback=!0,m(v,_,null,!0),le||T()},move(F,b,v){D.activeBranch&&p(D.activeBranch,F,b,v),D.container=F},next(){return D.activeBranch&&E(D.activeBranch)},registerDep(F,b,v){const _=!!D.pendingBranch;_&&D.deps++;const I=F.vnode.el;F.asyncDep.catch(C=>{_i(C,F,0)}).then(C=>{if(F.isUnmounted||D.isUnmounted||D.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:R}=F;Su(F,C),I&&(R.el=I);const T=!I&&F.subTree.el;b(F,R,A(I||F.subTree.el),I?null:E(F.subTree),D,o,v),T&&O(T),Lc(F,R.el),_&&--D.deps===0&&D.resolve()})},unmount(F,b){D.isUnmounted=!0,D.activeBranch&&m(D.activeBranch,n,F,b),D.pendingBranch&&m(D.pendingBranch,n,F,b)}};return D}function Eb(t,e,n,r,s,i,o,a,l){const u=e.suspense=ay(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function wb(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Jd(r?n.default:n),t.ssFallback=r?Jd(n.fallback):$e(Je)}function Jd(t){let e;if(he(t)){const n=ni&&t._c;n&&(t._d=!1,qt()),t=t(),n&&(t._d=!0,e=Lt,ly())}return oe(t)&&(t=db(t)),t=Wt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function cy(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):_u(t)}function Qs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Lc(r,s))}function Tb(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const bt=Symbol.for("v-fgt"),cs=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),ro=Symbol.for("v-stc"),so=[];let Lt=null;function qt(t=!1){so.push(Lt=t?null:[])}function ly(){so.pop(),Lt=so[so.length-1]||null}let ni=1;function nc(t,e=!1){ni+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function uy(t){return t.dynamicChildren=ni>0?Lt||Hs:null,ly(),ni>0&&Lt&&Lt.push(t),t}function Fc(t,e,n,r,s,i){return uy(To(t,e,n,r,s,i,!0))}function wr(t,e,n,r,s){return uy($e(t,e,n,r,s,!0))}function fs(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const hy=({key:t})=>t??null,Pa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||Ue(t)||he(t)?{i:mt,r:t,k:e,f:!!n}:t:null);function To(t,e=null,n=null,r=0,s=null,i=t===bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hy(e),ref:e&&Pa(e),scopeId:C_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mt};return a?($h(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),ni>0&&!o&&Lt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Lt.push(l),l}const $e=Ib;function Ib(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===$_)&&(t=Je),fs(t)){const a=Zn(t,e,!0);return n&&$h(a,n),ni>0&&!i&&Lt&&(a.shapeFlag&6?Lt[Lt.indexOf(t)]=a:Lt.push(a)),a.patchFlag=-2,a}if(Nb(t)&&(t=t.__vccOpts),e){e=bb(e);let{class:a,style:l}=e;a&&!je(a)&&(e.class=kc(a)),Oe(l)&&(Nh(l)&&!oe(l)&&(l=st({},l)),e.style=bh(l))}const o=je(t)?1:tc(t)?128:P_(t)?64:Oe(t)?4:he(t)?2:0;return To(t,e,n,r,s,o,i,!0)}function bb(t){return t?Nh(t)||G_(t)?st({},t):t:null}function Zn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?dy(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&hy(u),ref:e&&e.ref?n&&i?oe(i)?i.concat(Pa(e)):[i,Pa(e)]:Pa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zn(t.ssContent),ssFallback:t.ssFallback&&Zn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ti(h,l.clone(h)),h}function fy(t=" ",e=0){return $e(cs,null,t,e)}function Ux(t,e){const n=$e(ro,null,t);return n.staticCount=e,n}function $x(t="",e=!1){return e?(qt(),wr(Je,null,t)):$e(Je,null,t)}function Wt(t){return t==null||typeof t=="boolean"?$e(Je):oe(t)?$e(bt,null,t.slice()):fs(t)?vr(t):$e(cs,null,String(t))}function vr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zn(t)}function $h(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),$h(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!G_(e)?e._ctx=mt:s===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),r&64?(n=16,e=[fy(e)]):n=8);t.children=e,t.shapeFlag|=n}function dy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=kc([e.class,r.class]));else if(s==="style")e.style=bh([e.style,r.style]);else if(Fo(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Dt(t,e,n,r=null){ln(t,e,7,[n,r])}const Ab=W_();let Sb=0;function Rb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ab,i={uid:Sb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new s_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:J_(r,s),emitsOptions:oy(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hb.bind(null,i),t.ce&&t.ce(i),i}let pt=null;const Is=()=>pt||mt;let rc,bu;{const t=Pc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};rc=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),bu=e("__VUE_SSR_SETTERS__",n=>ri=n)}const ds=t=>{const e=pt;return rc(t),t.scope.on(),()=>{t.scope.off(),rc(e)}},Au=()=>{pt&&pt.scope.off(),rc(null)};function py(t){return t.vnode.shapeFlag&4}let ri=!1;function Cb(t,e=!1,n=!1){e&&bu(e);const{props:r,children:s}=t.vnode,i=py(t);XI(t,r,i,e),nb(t,s,n||e);const o=i?Pb(t,e):void 0;return e&&bu(!1),o}function Pb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qI);const{setup:r}=n;if(r){Jn();const s=t.setupContext=r.length>1?Ob(t):null,i=ds(t),o=jo(r,t,0,[t.props,s]),a=Th(o);if(Yn(),i(),(a||t.sp)&&!Pr(t)&&Mh(t),a){if(o.then(Au,Au),e)return o.then(l=>{Su(t,l)}).catch(l=>{_i(l,t,0)});t.asyncDep=o}else Su(t,o)}else gy(t)}function Su(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=w_(e)),gy(t)}function gy(t,e,n){const r=t.type;t.render||(t.render=r.render||Tn);{const s=ds(t);Jn();try{WI(t)}finally{Yn(),s()}}}const kb={get(t,e){return It(t,"get",""),t[e]}};function Ob(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,kb),slots:t.slots,emit:t.emit,expose:e}}function Uc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(w_(Dh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in no)return no[n](t)},has(e,n){return n in e||n in no}})):t.proxy}function Ru(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function Nb(t){return he(t)&&"__vccOpts"in t}const ze=(t,e)=>vI(t,e,ri);function at(t,e,n){const r=(i,o,a)=>{nc(-1);try{return $e(i,o,a)}finally{nc(1)}},s=arguments.length;return s===2?Oe(e)&&!oe(e)?fs(e)?r(t,null,[e]):r(t,e):r(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&fs(n)&&(n=[n]),r(t,e,n))}const Db="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cu;const Yd=typeof window<"u"&&window.trustedTypes;if(Yd)try{Cu=Yd.createPolicy("vue",{createHTML:t=>t})}catch{}const my=Cu?t=>Cu.createHTML(t):t=>t,Vb="http://www.w3.org/2000/svg",Mb="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,Xd=jn&&jn.createElement("template"),xb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?jn.createElementNS(Vb,t):e==="mathml"?jn.createElementNS(Mb,t):n?jn.createElement(t,{is:n}):jn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Xd.innerHTML=my(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Xd.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pr="transition",Hi="animation",Io=Symbol("_vtc"),_y={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lb=st({},k_,_y),Fb=t=>(t.displayName="Transition",t.props=Lb,t),Ub=Fb((t,{slots:e})=>at(RI,$b(t),e)),Xr=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Zd=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function $b(t){const e={};for(const R in t)R in _y||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,E=jb(s),A=E&&E[0],O=E&&E[1],{onBeforeEnter:V,onEnter:N,onEnterCancelled:w,onLeave:k,onLeaveCancelled:D,onBeforeAppear:F=V,onAppear:b=N,onAppearCancelled:v=w}=e,_=(R,T,le,me)=>{R._enterCancelled=me,Zr(R,T?h:a),Zr(R,T?u:o),le&&le()},I=(R,T)=>{R._isLeaving=!1,Zr(R,d),Zr(R,m),Zr(R,p),T&&T()},C=R=>(T,le)=>{const me=R?b:N,Z=()=>_(T,R,le);Xr(me,[T,Z]),ep(()=>{Zr(T,R?l:i),Fn(T,R?h:a),Zd(me)||tp(T,r,A,Z)})};return st(e,{onBeforeEnter(R){Xr(V,[R]),Fn(R,i),Fn(R,o)},onBeforeAppear(R){Xr(F,[R]),Fn(R,l),Fn(R,u)},onEnter:C(!1),onAppear:C(!0),onLeave(R,T){R._isLeaving=!0;const le=()=>I(R,T);Fn(R,d),R._enterCancelled?(Fn(R,p),sp()):(sp(),Fn(R,p)),ep(()=>{R._isLeaving&&(Zr(R,d),Fn(R,m),Zd(k)||tp(R,r,O,le))}),Xr(k,[R,le])},onEnterCancelled(R){_(R,!1,void 0,!0),Xr(w,[R])},onAppearCancelled(R){_(R,!0,void 0,!0),Xr(v,[R])},onLeaveCancelled(R){I(R),Xr(D,[R])}})}function jb(t){if(t==null)return null;if(Oe(t))return[$l(t.enter),$l(t.leave)];{const e=$l(t);return[e,e]}}function $l(t){return Zm(t)}function Fn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Io]||(t[Io]=new Set)).add(e)}function Zr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Io];n&&(n.delete(e),n.size||(t[Io]=void 0))}function ep(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Bb=0;function tp(t,e,n,r){const s=t._endId=++Bb,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Hb(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),i()},p=m=>{m.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,p)}function Hb(t,e){const n=window.getComputedStyle(t),r=E=>(n[E]||"").split(", "),s=r(`${pr}Delay`),i=r(`${pr}Duration`),o=np(s,i),a=r(`${Hi}Delay`),l=r(`${Hi}Duration`),u=np(a,l);let h=null,d=0,p=0;e===pr?o>0&&(h=pr,d=o,p=i.length):e===Hi?u>0&&(h=Hi,d=u,p=l.length):(d=Math.max(o,u),h=d>0?o>u?pr:Hi:null,p=h?h===pr?i.length:l.length:0);const m=h===pr&&/\b(?:transform|all)(?:,|$)/.test(r(`${pr}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:m}}function np(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>rp(n)+rp(t[r])))}function rp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function sp(){return document.body.offsetHeight}function qb(t,e,n){const r=t[Io];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ip=Symbol("_vod"),Wb=Symbol("_vsh"),zb=Symbol(""),Kb=/(?:^|;)\s*display\s*:/;function Gb(t,e,n){const r=t.style,s=je(n);let i=!1;if(n&&!s){if(e)if(je(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ka(r,a,"")}else for(const o in e)n[o]==null&&ka(r,o,"");for(const o in n)o==="display"&&(i=!0),ka(r,o,n[o])}else if(s){if(e!==n){const o=r[zb];o&&(n+=";"+o),r.cssText=n,i=Kb.test(n)}}else e&&t.removeAttribute("style");ip in t&&(t[ip]=i?r.display:"",t[Wb]&&(r.display="none"))}const op=/\s*!important$/;function ka(t,e,n){if(oe(n))n.forEach(r=>ka(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Qb(t,e);op.test(n)?t.setProperty(jr(r),n.replace(op,""),"important"):t[r]=n}}const ap=["Webkit","Moz","ms"],jl={};function Qb(t,e){const n=jl[e];if(n)return n;let r=Kt(e);if(r!=="filter"&&r in t)return jl[e]=r;r=Cc(r);for(let s=0;s<ap.length;s++){const i=ap[s]+r;if(i in t)return jl[e]=i}return e}const cp="http://www.w3.org/1999/xlink";function lp(t,e,n,r,s,i=WT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(cp,e.slice(6,e.length)):t.setAttributeNS(cp,e,n):n==null||i&&!e_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":cn(n)?String(n):n)}function up(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?my(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=e_(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Tr(t,e,n,r){t.addEventListener(e,n,r)}function Jb(t,e,n,r){t.removeEventListener(e,n,r)}const hp=Symbol("_vei");function Yb(t,e,n,r,s=null){const i=t[hp]||(t[hp]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Xb(e);if(r){const u=i[e]=tA(r,s);Tr(t,a,u,l)}else o&&(Jb(t,a,o,l),i[e]=void 0)}}const fp=/(?:Once|Passive|Capture)$/;function Xb(t){let e;if(fp.test(t)){e={};let r;for(;r=t.match(fp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):jr(t.slice(2)),e]}let Bl=0;const Zb=Promise.resolve(),eA=()=>Bl||(Zb.then(()=>Bl=0),Bl=Date.now());function tA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ln(nA(r,n.value),e,5,[r])};return n.value=t,n.attached=eA(),n}function nA(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const dp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rA=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?qb(t,r,o):e==="style"?Gb(t,n,r):Fo(e)?Eh(e)||Yb(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sA(t,e,r,o))?(up(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&lp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!je(r))?up(t,Kt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),lp(t,e,r,o))};function sA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&dp(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return dp(e)&&je(n)?!1:e in t}const si=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>zs(e,n):e};function iA(t){t.target.composing=!0}function pp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gn=Symbol("_assign"),jx={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Gn]=si(s);const i=r||s.props&&s.props.type==="number";Tr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ha(a)),t[Gn](a)}),n&&Tr(t,"change",()=>{t.value=t.value.trim()}),e||(Tr(t,"compositionstart",iA),Tr(t,"compositionend",pp),Tr(t,"change",pp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Gn]=si(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ha(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Bx={deep:!0,created(t,e,n){t[Gn]=si(n),Tr(t,"change",()=>{const r=t._modelValue,s=bo(t),i=t.checked,o=t[Gn];if(oe(r)){const a=Ah(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(gi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(yy(t,i))})},mounted:gp,beforeUpdate(t,e,n){t[Gn]=si(n),gp(t,e,n)}};function gp(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(oe(e))s=Ah(e,r.props.value)>-1;else if(gi(e))s=e.has(r.props.value);else{if(e===n)return;s=Uo(e,yy(t,!0))}t.checked!==s&&(t.checked=s)}const Hx={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=gi(e);Tr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ha(bo(o)):bo(o));t[Gn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,kn(()=>{t._assigning=!1})}),t[Gn]=si(r)},mounted(t,{value:e}){mp(t,e)},beforeUpdate(t,e,n){t[Gn]=si(n)},updated(t,{value:e}){t._assigning||mp(t,e)}};function mp(t,e){const n=t.multiple,r=oe(e);if(!(n&&!r&&!gi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=bo(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Ah(e,a)>-1}else o.selected=e.has(a);else if(Uo(bo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function bo(t){return"_value"in t?t._value:t.value}function yy(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const oA=["ctrl","shift","alt","meta"],aA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>oA.some(n=>t[`${n}Key`]&&!e.includes(n))},qx=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const a=aA[e[o]];if(a&&a(s,e))return}return t(s,...i)}))},vy=st({patchProp:rA},xb);let io,_p=!1;function cA(){return io||(io=sb(vy))}function lA(){return io=_p?io:ib(vy),_p=!0,io}const uA=((...t)=>{const e=cA().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=wy(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Ey(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e}),hA=((...t)=>{const e=lA().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=wy(r);if(s)return n(s,!0,Ey(s))},e});function Ey(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function wy(t){return je(t)?document.querySelector(t):t}const fA=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,dA=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,pA=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function gA(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){mA(t);return}return e}function mA(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ii(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!pA.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(fA.test(t)||dA.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,gA)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const _A=/#/g,yA=/&/g,vA=/\//g,EA=/=/g,jh=/\+/g,wA=/%5e/gi,TA=/%60/gi,IA=/%7c/gi,bA=/%20/gi;function AA(t){return encodeURI(""+t).replace(IA,"|")}function Pu(t){return AA(typeof t=="string"?t:JSON.stringify(t)).replace(jh,"%2B").replace(bA,"+").replace(_A,"%23").replace(yA,"%26").replace(TA,"`").replace(wA,"^").replace(vA,"%2F")}function Hl(t){return Pu(t).replace(EA,"%3D")}function sc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function SA(t){return sc(t.replace(jh," "))}function RA(t){return sc(t.replace(jh," "))}function Bh(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=SA(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=RA(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function CA(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Hl(t)}=${Pu(n)}`).join("&"):`${Hl(t)}=${Pu(e)}`:Hl(t)}function PA(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>CA(e,t[e])).filter(Boolean).join("&")}const kA=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,OA=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,NA=/^([/\\]\s*){2,}[^/\\]/,DA=/^[\s\0]*(blob|data|javascript|vbscript):$/i,VA=/\/$|\/\?|\/#/,MA=/^\.?\//;function or(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?kA.test(t):OA.test(t)||(e.acceptRelative?NA.test(t):!1)}function xA(t){return!!t&&DA.test(t)}function ku(t="",e){return e?VA.test(t):t.endsWith("/")}function oi(t="",e){if(!e)return(ku(t)?t.slice(0,-1):t)||"/";if(!ku(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Ty(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(ku(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function LA(t,e){if(by(e)||or(t))return t;const n=oi(e);return t.startsWith(n)?t:$c(n,t)}function yp(t,e){if(by(e))return t;const n=oi(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function Iy(t,e){const n=Ry(t),r={...Bh(n.search),...e};return n.search=PA(r),$A(n)}function by(t){return!t||t==="/"}function FA(t){return t&&t!=="/"}function $c(t,...e){let n=t||"";for(const r of e.filter(s=>FA(s)))if(n){const s=r.replace(MA,"");n=Ty(n)+s}else n=r;return n}function Ay(...t){const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const o of n)if(!(!o||o==="/")){for(const[a,l]of o.split(e).entries())if(!(!l||l===".")){if(l===".."){if(r.length===1&&or(r[0]))continue;r.pop(),s--;continue}if(a===1&&r[r.length-1]?.endsWith(":/")){r[r.length-1]+="/"+l;continue}r.push(l),s++}}let i=r.join("/");return s>=0?n[0]?.startsWith("/")&&!i.startsWith("/")?i="/"+i:n[0]?.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,n[n.length-1]?.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function UA(t,e){return sc(oi(t))===sc(oi(e))}const Sy=Symbol.for("ufo:protocolRelative");function Ry(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!or(t,{acceptRelative:!0}))return vp(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=vp(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[Sy]:!r}}function vp(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function $A(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[Sy]?(t.protocol||"")+"//":"")+s+i+e+n+r}class jA extends Error{constructor(e,n){super(e,n),this.name="FetchError",n?.cause&&!this.cause&&(this.cause=n.cause)}}function BA(t){const e=t.error?.message||t.error?.toString()||"",n=t.request?.method||t.options?.method||"GET",r=t.request?.url||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new jA(o,t.error?{cause:t.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(a,l,{get(){return t[l]}});for(const[l,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,l,{get(){return t.response&&t.response[u]}});return a}const HA=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Ep(t="GET"){return HA.has(t.toUpperCase())}function qA(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const WA=new Set(["image/svg","application/xml","application/xhtml","application/html"]),zA=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function KA(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return zA.test(e)?"json":WA.has(e)||e.startsWith("text/")?"text":"blob"}function GA(t,e,n,r){const s=QA(e?.headers??t?.headers,n?.headers,r);let i;return(n?.query||n?.params||e?.params||e?.query)&&(i={...n?.params,...n?.query,...e?.params,...e?.query}),{...n,...e,query:i,params:i,headers:s}}function QA(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function ya(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const JA=new Set([408,409,425,429,500,502,503,504]),YA=new Set([101,204,205,304]);function Cy(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=Ep(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):JA.has(d))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(m=>setTimeout(m,p)),i(a.request,{...a.options,retry:h-1})}}const u=BA(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const h={request:l,options:GA(l,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await ya(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=LA(h.request,h.options.baseURL)),h.options.query&&(h.request=Iy(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&Ep(h.options.method)&&(qA(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const m=new r;d=setTimeout(()=>{const E=new Error("[TimeoutError]: The operation was aborted due to timeout");E.name="TimeoutError",E.code=23,m.abort(E)},h.options.timeout),h.options.signal=m.signal}try{h.response=await e(h.request,h.options)}catch(m){return h.error=m,h.options.onRequestError&&await ya(h,h.options.onRequestError),await s(h)}finally{d&&clearTimeout(d)}if((h.response.body||h.response._bodyInit)&&!YA.has(h.response.status)&&h.options.method!=="HEAD"){const m=(h.options.parseResponse?"json":h.options.responseType)||KA(h.response.headers.get("content-type")||"");switch(m){case"json":{const E=await h.response.text(),A=h.options.parseResponse||ii;h.response._data=A(E);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[m]()}}return h.options.onResponse&&await ya(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await ya(h,h.options.onResponseError),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>Cy({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const ic=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),XA=ic.fetch?(...t)=>ic.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),ZA=ic.Headers,eS=ic.AbortController,tS=Cy({fetch:XA,Headers:ZA,AbortController:eS}),nS=tS,rS=()=>window?.__NUXT__?.config||window?.useNuxtApp?.().payload?.config,Hh=()=>rS().app,sS=()=>Hh().baseURL,iS=()=>Hh().buildAssetsDir,qh=(...t)=>Ay(Py(),iS(),...t),Py=(...t)=>{const e=Hh(),n=e.cdnURL||e.baseURL;return t.length?Ay(n,...t):n};globalThis.__buildAssetsURL=qh,globalThis.__publicAssetsURL=Py;globalThis.$fetch||(globalThis.$fetch=nS.create({baseURL:sS()}));"global"in globalThis||(globalThis.global=globalThis);function Ou(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Ou(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const oS={run:t=>t()},aS=()=>oS,ky=typeof console.createTask<"u"?console.createTask:aS;function cS(t,e){const n=e.shift(),r=ky(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function lS(t,e){const n=e.shift(),r=ky(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function ql(t,e){for(const n of[...t])n(e)}class uS{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Ou(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Ou(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(cS,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(lS,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&ql(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&ql(this._after,s)}):(this._after&&s&&ql(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Oy(){return new uS}function hS(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Nu.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{Nu.delete(u)}}}}function fS(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=hS({...t,...r})),e[n]}}}const oc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},wp="__unctx__",dS=oc[wp]||(oc[wp]=fS()),pS=(t,e={})=>dS.get(t,e),Tp="__unctx_async_handlers__",Nu=oc[Tp]||(oc[Tp]=new Set);function Js(t){const e=[];for(const s of Nu){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const gS=!1,Ip=!1,mS=!1,bp={id:"__nuxt-loader"},_S={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},yS="#__nuxt",Ny="nuxt-app",Ap=36e5,vS="vite:preloadError";function Dy(t=Ny){return pS(t,{asyncContext:!1})}const ES="__nuxt_plugin";function wS(t){let e=0;const n={_id:t.id||Ny||"nuxt-app",_scope:Sh(),provide:void 0,versions:{get nuxt(){return"4.1.1"},get vue(){return n.vueApp.version}},payload:wn({...t.ssrContext?.payload||{},data:wn({}),state:Vn({}),once:new Set,_errors:wn({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!$o()?n._scope.run(()=>Sp(n,s)):Sp(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:wn({}),_payloadRevivers:{},...t};{const s=window.__NUXT__;if(s)for(const i in s)switch(i){case"data":case"state":case"_errors":Object.assign(n.payload[i],s[i]);break;default:n.payload[i]=s[i]}}n.hooks=Oy(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;va(n,o,i),va(n.vueApp.config.globalProperties,o,i)},va(n.vueApp,"$nuxt",n),va(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(vS,i=>{n.callHook("app:chunkError",{error:i.payload}),i.payload.message.includes("Unable to preload CSS")&&i.preventDefault()}),window.useNuxtApp||=Be;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}function TS(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function IS(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function bS(t,e){const n=new Set,r=[],s=[];let i,o=0;async function a(l){const u=l.dependsOn?.filter(h=>e.some(d=>d._name===h)&&!n.has(h))??[];if(u.length>0)r.push([new Set(u),l]);else{const h=IS(t,l).then(async()=>{l._name&&(n.add(l._name),await Promise.all(r.map(async([d,p])=>{d.has(l._name)&&(d.delete(l._name),d.size===0&&(o++,await a(p)))})))}).catch(d=>{if(!l.parallel&&!t.payload.error)throw d;i||=d});l.parallel?s.push(h):await h}}for(const l of e)TS(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i)throw t.payload.error||i}function $t(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[ES]:!0,_name:e})}const AS=$t;function Sp(t,e,n){const r=()=>e();return Dy(t._id).set(t),t.vueApp.runWithContext(r)}function SS(t){let e;return xh()&&(e=Is()?.appContext.app.$nuxt),e||=Dy(t).tryUse(),e||null}function Be(t){const e=SS(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function er(t){return Be().$config}function va(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function RS(t,e){return{ctx:{table:t},matchAll:n=>My(n,t)}}function Vy(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,Vy(s)])):new Map(Object.entries(t[n]));return e}function CS(t){return RS(Vy(t))}function My(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of Rp(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Rp(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...My(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function Rp(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Wl(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Du(t,e,n=".",r){if(!Wl(e))return Du(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Wl(o)&&Wl(s[i])?s[i]=Du(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function PS(t){return(...e)=>e.reduce((n,r)=>Du(n,r,"",t),{})}const xy=PS();function kS(t,e){try{return e in t}catch{return!1}}class Cp extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,n={}){super(e,n),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Vu(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Ly(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function OS(t){if(typeof t=="string")return new Cp(t);if(NS(t))return t;const e=new Cp(t.message??t.statusMessage??"",{cause:t.cause||t});if(kS(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Vu(t.statusCode,e.statusCode):t.status&&(e.statusCode=Vu(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Ly(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function NS(t){return t?.constructor?.__h3_error__===!0}const DS=/[^\u0009\u0020-\u007E]/g;function Ly(t=""){return t.replace(DS,"")}function Vu(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Fy=Symbol("layout-meta"),ps=Symbol("route");import.meta.url.replace(/\/app\/.*$/,"/");const Rt=()=>Be()?.$router,jc=()=>xh()?St(ps,Be()._route):Be()._route;function Wx(t){return t}const VS=()=>{try{if(Be()._processingMiddleware)return!0}catch{return!1}return!1},MS=(t,e)=>{t||="/";const n=typeof t=="string"?t:"path"in t?Mu(t):Rt().resolve(t).href;if(e?.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=or(n,{acceptRelative:!0}),s=e?.external||r;if(s){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&xA(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=VS();if(!s&&i){if(e?.replace){if(typeof t=="string"){const{pathname:l,search:u,hash:h}=Ry(t);return{path:l,...u&&{query:Bh(u)},...h&&{hash:h},replace:!0}}return{...t,replace:!0}}return t}const o=Rt(),a=Be();return s?(a._scope.stop(),e?.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e?.replace?o.replace(t):o.push(t)};function Mu(t){return Iy(t.path||"",t.query||{})+(t.hash||"")}const Uy="__nuxt_error",Bc=()=>I_(Be().payload,"error"),ns=t=>{const e=ls(t);try{const n=Be(),r=Bc();n.hooks.callHook("app:error",e),r.value||=e}catch{throw e}return e},$y=async(t={})=>{const e=Be(),n=Bc();e.callHook("app:error:cleared",t),t.redirect&&await Rt().replace(t.redirect),n.value=void 0},jy=t=>!!t&&typeof t=="object"&&Uy in t,ls=t=>{const e=OS(t);return Object.defineProperty(e,Uy,{value:!0,configurable:!1,writable:!1}),e};/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let By;const Ho=t=>By=t,Hy=Symbol();function xu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var oo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(oo||(oo={}));function xS(){const t=Sh(!0),e=t.run(()=>Ft({}));let n=[],r=[];const s=Dh({install(i){Ho(s),s._a=i,i.provide(Hy,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const qy=()=>{};function Pp(t,e,n,r=qy){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&$o()&&qa(s),s}function Vs(t,...e){t.slice().forEach(n=>{n(...e)})}const LS=t=>t(),kp=Symbol(),zl=Symbol();function Lu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];xu(s)&&xu(r)&&t.hasOwnProperty(n)&&!Ue(r)&&!Kn(r)?t[n]=Lu(s,r):t[n]=r}return t}const FS=Symbol();function US(t){return!xu(t)||!Object.prototype.hasOwnProperty.call(t,FS)}const{assign:_r}=Object;function $S(t){return!!(Ue(t)&&t.effect)}function jS(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=gI(n.state.value[t]);return _r(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Dh(ze(()=>{Ho(n);const m=n._s.get(t);return o[p].call(m,m)})),d),{}))}return l=Wy(t,u,e,n,r,!0),l}function Wy(t,e,n={},r,s,i){let o;const a=_r({actions:{}},n),l={deep:!0};let u,h,d=[],p=[],m;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),Ft({});let A;function O(v){let _;u=h=!1,typeof v=="function"?(v(r.state.value[t]),_={type:oo.patchFunction,storeId:t,events:m}):(Lu(r.state.value[t],v),_={type:oo.patchObject,payload:v,storeId:t,events:m});const I=A=Symbol();kn().then(()=>{A===I&&(u=!0)}),h=!0,Vs(d,_,r.state.value[t])}const V=i?function(){const{state:_}=n,I=_?_():{};this.$patch(C=>{_r(C,I)})}:qy;function N(){o.stop(),d=[],p=[],r._s.delete(t)}const w=(v,_="")=>{if(kp in v)return v[zl]=_,v;const I=function(){Ho(r);const C=Array.from(arguments),R=[],T=[];function le(se){R.push(se)}function me(se){T.push(se)}Vs(p,{args:C,name:I[zl],store:D,after:le,onError:me});let Z;try{Z=v.apply(this&&this.$id===t?this:D,C)}catch(se){throw Vs(T,se),se}return Z instanceof Promise?Z.then(se=>(Vs(R,se),se)).catch(se=>(Vs(T,se),Promise.reject(se))):(Vs(R,Z),Z)};return I[kp]=!0,I[zl]=_,I},k={_p:r,$id:t,$onAction:Pp.bind(null,p),$patch:O,$reset:V,$subscribe(v,_={}){const I=Pp(d,v,_.detached,()=>C()),C=o.run(()=>an(()=>r.state.value[t],R=>{(_.flush==="sync"?h:u)&&v({storeId:t,type:oo.direct,events:m},R)},_r({},l,_)));return I},$dispose:N},D=Vn(k);r._s.set(t,D);const b=(r._a&&r._a.runWithContext||LS)(()=>r._e.run(()=>(o=Sh()).run(()=>e({action:w}))));for(const v in b){const _=b[v];if(Ue(_)&&!$S(_)||Kn(_))i||(E&&US(_)&&(Ue(_)?_.value=E[v]:Lu(_,E[v])),r.state.value[t][v]=_);else if(typeof _=="function"){const I=w(_,v);b[v]=I,a.actions[v]=_}}return _r(D,b),_r(Ie(D),b),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:v=>{O(_=>{_r(_,v)})}}),r._p.forEach(v=>{_r(D,o.run(()=>v({store:D,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(D.$state,E),u=!0,h=!0,D}/*! #__NO_SIDE_EFFECTS__ */function zx(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,a){const l=xh();return o=o||(l?St(Hy,null):null),o&&Ho(o),o=By,o._s.has(t)||(s?Wy(t,e,r,o):jS(t,r,o)),o._s.get(t)}return i.$id=t,i}function BS(t){const e=qS(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const HS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function qS(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=HS.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const WS=-1,zS=-2,KS=-3,GS=-4,QS=-5,JS=-6;function YS(t,e){return XS(JSON.parse(t),e)}function XS(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===WS)return;if(i===KS)return NaN;if(i===GS)return 1/0;if(i===QS)return-1/0;if(i===JS)return-0;if(o||typeof i!="number")throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e?.[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let m=1;m<a.length;m+=1)h.add(s(a[m]));break;case"Map":const d=new Map;r[i]=d;for(let m=1;m<a.length;m+=2)d.set(s(a[m]),s(a[m+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let m=1;m<a.length;m+=2)p[a[m]]=s(a[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[l],E=new m(s(a[1]));r[i]=a[2]!==void 0?E.subarray(a[2],a[3]):E;break}case"ArrayBuffer":{const m=a[1],E=BS(m);r[i]=E;break}case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{const m=l.slice(9);r[i]=Temporal[m].from(a[1]);break}case"URL":{const m=new URL(a[1]);r[i]=m;break}case"URLSearchParams":{const m=new URLSearchParams(a[1]);r[i]=m;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==zS&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){if(u==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const ZS=new Set(["link","style","script","noscript"]),eR=new Set(["title","titleTemplate","script","style","noscript"]),Op=new Set(["base","meta","link","style","script","noscript"]),tR=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),nR=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),rR=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),sR=new Set(["templateParams","htmlAttrs","bodyAttrs"]),iR=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),oR=["name","property","http-equiv"],aR=new Set(["viewport","description","keywords","robots"]);function zy(t){const e=t.split(":");return e.length?iR.has(e[1]):!1}function Fu(t){const{props:e,tag:n}=t;if(nR.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of oR)if(e[r]!==void 0){const s=e[r],i=s.includes(":"),o=aR.has(s),l=!(i||o)&&t.key?`:key:${t.key}`:"";return`${n}:${s}${l}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(eR.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function Np(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function Uu(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>Uu(i,e));if(s?.constructor===Object){const i={};for(const o of Object.keys(s))i[o]=Uu(s[o],e,o);return i}return s}function cR(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(l=>l.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function Ky(t,e){return t.props=t.props||{},e?t.tag==="templateParams"?(t.props=e,t):(Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=cR(n,r);return}if(rR.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!o?.endsWith("json")&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t):t}function lR(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=Ky({tag:t,props:{}},n);return r.key&&ZS.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function uR(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=Uu(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(lR(s,o))}),r.flat()}const Dp=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Vp={base:-10,title:10},hR={critical:-8,high:-1,low:2},Mp={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},fR=/@import/,qi=t=>t===""||t===!0;function dR(t,e){if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=hR[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Mp;if(e.tag in Vp)n=Vp[e.tag];else if(e.tag==="meta"){const i=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;i&&(n=Mp.meta[i])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?qi(e.props.async)?n=s.script.async:e.props.src&&!qi(e.props.defer)&&!qi(e.props.async)&&e.props.type!=="module"&&!e.props.type?.endsWith("json")?n=s.script.sync:qi(e.props.defer)&&e.props.src&&!qi(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&fR.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function xp(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function pR(t={}){const e=Oy();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=new Set,o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:a=>xp(o,a),push(a,l){const u={...l||{}};delete u.head;const h=u._index??o._entryCount++,d={_i:h,input:a,options:u},p={_poll(m=!1){o.dirty=!0,!m&&i.add(h),e.callHook("entries:updated",o)},dispose(){r.delete(h)&&o.invalidate()},patch(m){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(d.input=m,r.set(h,d),p._poll())}};return p.patch(a),p},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);i.size;){const p=i.values().next().value;i.delete(p);const m=r.get(p);if(m){const E={tags:uR(m.input,t.propResolvers||[]).map(A=>Object.assign(A,m.options)),entry:m};await e.callHook("entries:normalize",E),m._tags=E.tags.map((A,O)=>(A._w=dR(o,A),A._p=(m._i<<10)+O,A._d=Fu(A),A))}}let l=!1;a.entries.flatMap(p=>(p._tags||[]).map(m=>({...m,props:{...m.props}}))).sort(Dp).reduce((p,m)=>{const E=String(m._d||m._p);if(!p.has(E))return p.set(E,m);const A=p.get(E);if((m?.tagDuplicateStrategy||(sR.has(m.tag)?"merge":null)||(m.key&&m.key===A.key?"merge":null))==="merge"){const V={...A.props};Object.entries(m.props).forEach(([N,w])=>V[N]=N==="style"?new Map([...A.props.style||new Map,...w]):N==="class"?new Set([...A.props.class||new Set,...w]):w),p.set(E,{...m,props:V})}else m._p>>10===A._p>>10&&m.tag==="meta"&&zy(E)?(p.set(E,Object.assign([...Array.isArray(A)?A:[A],m],m)),l=!0):(m._w===A._w?m._p>A._p:m?._w<A?._w)&&p.set(E,m);return p},a.tagMap);const u=a.tagMap.get("title"),h=a.tagMap.get("titleTemplate");if(o._title=u?.textContent,h){const p=h?.textContent;if(o._titleTemplate=p,p){let m=typeof p=="function"?p(u?.textContent):p;typeof m=="string"&&!o.plugins.has("template-params")&&(m=m.replace("%s",u?.textContent||"")),u?m===null?a.tagMap.delete("title"):a.tagMap.set("title",{...u,textContent:m}):(h.tag="title",h.textContent=m)}}a.tags=Array.from(a.tagMap.values()),l&&(a.tags=a.tags.flat().sort(Dp)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const d=[];for(const p of a.tags){const{innerHTML:m,tag:E,props:A}=p;if(tR.has(E)&&!(Object.keys(A).length===0&&!p.innerHTML&&!p.textContent)&&!(E==="meta"&&!A.content&&!A["http-equiv"]&&!A.charset)){if(E==="script"&&m){if(A.type?.endsWith("json")){const O=typeof m=="string"?m:JSON.stringify(m);p.innerHTML=O.replace(/</g,"\\u003C")}else typeof m=="string"&&(p.innerHTML=m.replace(new RegExp(`</${E}`,"g"),`<\\/${E}`));p._d=Fu(p)}d.push(p)}}return d},invalidate(){for(const a of r.values())i.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(t?.plugins||[]).forEach(a=>xp(o,a)),o.hooks.callHook("init",o),t.init?.forEach(a=>a&&o.push(a)),o}const gR="usehead";function mR(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(gR,t)}}.install}const _R="modulepreload",yR=function(t,e){return new URL(t,e).href},Lp={},ut=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let u=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=u(n.map(h=>{if(h=yR(h,r),h in Lp)return;Lp[h]=!0;const d=h.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!r)for(let A=o.length-1;A>=0;A--){const O=o[A];if(O.href===h&&(!d||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${p}`))return;const E=document.createElement("link");if(E.rel=d?"stylesheet":_R,d||(E.as="script"),E.crossOrigin="",E.href=h,l&&E.setAttribute("nonce",l),document.head.appendChild(E),d)return new Promise((A,O)=>{E.addEventListener("load",A),E.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let Oa,Na;function vR(){return Oa=$fetch(qh(`builds/meta/${er().app.buildId}.json`),{responseType:"json"}),Oa.then(t=>{Na=CS(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Oa}function Hc(){return Oa||vR()}async function Wh(t){const e=typeof t=="string"?t:t.path;if(await Hc(),!Na)return console.error("[nuxt] Error creating app manifest matcher.",Na),{};try{return xy({},...Na.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function Fp(t,e={}){if(!await Qy(t))return null;const r=await wR(t,e);return await Gy(r)||null}const ER="_payload.json";async function wR(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||or(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=er(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await Qy(t)?i:r.app.baseURL;return $c(o,n.pathname,ER+(s?`?${s}`:""))}async function Gy(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(Jy));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Qy(t=jc().path){const e=Be();return t=oi(t),(await Hc()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await Wh({path:t});return!!r.prerender&&!r.redirect})}let es=null;async function TR(){if(es)return es;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Jy(t.textContent||""),n=t.dataset.src?await Gy(t.dataset.src):void 0;return es={...e,...n,...window.__NUXT__},es.config?.public&&(es.config.public=Vn(es.config.public)),es}async function Jy(t){return await YS(t,Be()._payloadRevivers)}function Yy(t,e){Be()._payloadRevivers[t]=e}const IR=AS(()=>{Yy("skipHydrate",t=>{})}),bR=[["NuxtError",t=>ls(t)],["EmptyShallowRef",t=>hs(t==="_"?void 0:t==="0n"?BigInt(0):ii(t))],["EmptyRef",t=>Ft(t==="_"?void 0:t==="0n"?BigInt(0):ii(t))],["ShallowRef",t=>hs(t)],["ShallowReactive",t=>wn(t)],["Ref",t=>Ft(t)],["Reactive",t=>Vn(t)]],AR=$t({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of bR)Yy(r,s);Object.assign(t.payload,([e,n]=Js(()=>t.runWithContext(TR)),e=await e,n(),e)),delete window.__NUXT__}});async function zh(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{const i=new Map,o=new Promise(m=>{t.resolveTags().then(E=>{m(E.map(A=>{const O=i.get(A._d)||0,V={tag:A,id:(O?`${A._d}:${O}`:A._d)||Np(A),shouldRender:!0};return A._d&&zy(A._d)&&i.set(A._d,O+1),V}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const m of["body","head"]){const E=n[m]?.children;for(const A of E){const O=A.tagName.toLowerCase();if(!Op.has(O))continue;const V=Ky({tag:O,props:{}},{innerHTML:A.innerHTML,...A.getAttributeNames().reduce((N,w)=>(N[w]=A.getAttribute(w),N),{})||{}});if(V.key=A.getAttribute("data-hid")||void 0,V._d=Fu(V)||Np(V),a.elMap.has(V._d)){let N=1,w=V._d;for(;a.elMap.has(w);)w=`${V._d}:${N++}`;a.elMap.set(w,A)}else a.elMap.set(V._d,A)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(m,E,A){const O=`${m}:${E}`;a.sideEffects[O]=A,delete a.pendingSideEffects[O]}function u({id:m,$el:E,tag:A}){const O=A.tag.endsWith("Attrs");a.elMap.set(m,E),O||(A.textContent&&A.textContent!==E.textContent&&(E.textContent=A.textContent),A.innerHTML&&A.innerHTML!==E.innerHTML&&(E.innerHTML=A.innerHTML),l(m,"el",()=>{E?.remove(),a.elMap.delete(m)}));for(const V in A.props){if(!Object.prototype.hasOwnProperty.call(A.props,V))continue;const N=A.props[V];if(V.startsWith("on")&&typeof N=="function"){const k=E?.dataset;if(k&&k[`${V}fired`]){const D=V.slice(0,-5);N.call(E,new Event(D.substring(2)))}E.getAttribute(`data-${V}`)!==""&&((A.tag==="bodyAttrs"?n.defaultView:E).addEventListener(V.substring(2),N.bind(E)),E.setAttribute(`data-${V}`,""));continue}const w=`attr:${V}`;if(V==="class"){if(!N)continue;for(const k of N)O&&l(m,`${w}:${k}`,()=>E.classList.remove(k)),!E.classList.contains(k)&&E.classList.add(k)}else if(V==="style"){if(!N)continue;for(const[k,D]of N)l(m,`${w}:${k}`,()=>{E.style.removeProperty(k)}),E.style.setProperty(k,D)}else N!==!1&&N!==null&&(E.getAttribute(V)!==N&&E.setAttribute(V,N===!0?"":String(N)),O&&l(m,w,()=>E.removeAttribute(V)))}}const h=[],d={bodyClose:void 0,bodyOpen:void 0,head:void 0},p=await o;for(const m of p){const{tag:E,shouldRender:A,id:O}=m;if(A){if(E.tag==="title"){n.title=E.textContent,l("title","",()=>n.title=a.title);continue}m.$el=m.$el||a.elMap.get(O),m.$el?u(m):Op.has(E.tag)&&h.push(m)}}for(const m of h){const E=m.tag.tagPosition||"head";m.$el=n.createElement(m.tag.tag),u(m),d[E]=d[E]||n.createDocumentFragment(),d[E].appendChild(m.$el)}for(const m of p)await t.hooks.callHook("dom:renderTag",m,n,l);d.head&&n.head.appendChild(d.head),d.bodyOpen&&n.body.insertBefore(d.bodyOpen,n.body.firstChild),d.bodyClose&&n.body.appendChild(d.bodyClose);for(const m in a.pendingSideEffects)a.pendingSideEffects[m]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:p}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function SR(t={}){const e=t.domOptions?.render||zh;t.document=t.document||(typeof window<"u"?document:void 0);const n=t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1;return pR({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function RR(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function CR(t={}){const e=SR({domOptions:{render:RR(()=>zh(e),n=>setTimeout(n,0))},...t});return e.install=mR(e),e}const PR={disableDefaults:!0},kR=$t({name:"nuxt:head",enforce:"pre",setup(t){const e=CR(PR);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await zh(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const xs=typeof document<"u";function Xy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function OR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Xy(t.default)}const Ce=Object.assign;function Kl(t,e){const n={};for(const r in e){const s=e[r];n[r]=un(s)?s.map(t):t(s)}return n}const ao=()=>{},un=Array.isArray,Zy=/#/g,NR=/&/g,DR=/\//g,VR=/=/g,MR=/\?/g,ev=/\+/g,xR=/%5B/g,LR=/%5D/g,tv=/%5E/g,FR=/%60/g,nv=/%7B/g,UR=/%7C/g,rv=/%7D/g,$R=/%20/g;function Kh(t){return encodeURI(""+t).replace(UR,"|").replace(xR,"[").replace(LR,"]")}function jR(t){return Kh(t).replace(nv,"{").replace(rv,"}").replace(tv,"^")}function $u(t){return Kh(t).replace(ev,"%2B").replace($R,"+").replace(Zy,"%23").replace(NR,"%26").replace(FR,"`").replace(nv,"{").replace(rv,"}").replace(tv,"^")}function BR(t){return $u(t).replace(VR,"%3D")}function HR(t){return Kh(t).replace(Zy,"%23").replace(MR,"%3F")}function qR(t){return t==null?"":HR(t).replace(DR,"%2F")}function Ao(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const WR=/\/$/,zR=t=>t.replace(WR,"");function Gl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=JR(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ao(o)}}function KR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Up(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function GR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ai(e.matched[r],n.matched[s])&&sv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ai(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!QR(t[n],e[n]))return!1;return!0}function QR(t,e){return un(t)?$p(t,e):un(e)?$p(e,t):t===e}function $p(t,e){return un(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function JR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var So;(function(t){t.pop="pop",t.push="push"})(So||(So={}));var co;(function(t){t.back="back",t.forward="forward",t.unknown=""})(co||(co={}));function YR(t){if(!t)if(xs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zR(t)}const XR=/^[^#]+#/;function ZR(t,e){return t.replace(XR,"#")+e}function e0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const qc=()=>({left:window.scrollX,top:window.scrollY});function t0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=e0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function jp(t,e){return(history.state?history.state.position-e:-1)+t}const ju=new Map;function n0(t,e){ju.set(t,e)}function r0(t){const e=ju.get(t);return ju.delete(t),e}let s0=()=>location.protocol+"//"+location.host;function iv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Up(l,"")}return Up(n,t)+r+s}function i0(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=iv(t,location),E=n.value,A=e.value;let O=0;if(p){if(n.value=m,e.value=p,o&&o===E){o=null;return}O=A?p.position-A.position:0}else r(m);s.forEach(V=>{V(n.value,E,{delta:O,type:So.pop,direction:O?O>0?co.forward:co.back:co.unknown})})};function l(){o=n.value}function u(p){s.push(p);const m=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(m),m}function h(){const{history:p}=window;p.state&&p.replaceState(Ce({},p.state,{scroll:qc()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function Bp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?qc():null}}function o0(t){const{history:e,location:n}=window,r={value:iv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:s0()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[h?"replace":"assign"](p)}}function o(l,u){const h=Ce({},e.state,Bp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=Ce({},s.value,e.state,{forward:l,scroll:qc()});i(h.current,h,!0);const d=Ce({},Bp(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function a0(t){t=YR(t);const e=o0(t),n=i0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ce({location:"",base:t,go:r,createHref:ZR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function c0(t){return typeof t=="string"||t&&typeof t=="object"}function ov(t){return typeof t=="string"||typeof t=="symbol"}const av=Symbol("");var Hp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hp||(Hp={}));function ci(t,e){return Ce(new Error,{type:t,[av]:!0},e)}function Un(t,e){return t instanceof Error&&av in t&&(e==null||!!(t.type&e))}const qp="[^/]+?",l0={sensitive:!1,strict:!1,start:!0,end:!0},u0=/[.+*?^${}()[\]/\\]/g;function h0(t,e){const n=Ce({},l0,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(u0,"\\$&"),m+=40;else if(p.type===1){const{value:E,repeatable:A,optional:O,regexp:V}=p;i.push({name:E,repeatable:A,optional:O});const N=V||qp;if(N!==qp){m+=10;try{new RegExp(`(${N})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${E}" (${N}): `+k.message)}}let w=A?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(w=O&&u.length<2?`(?:/${w})`:"/"+w),O&&(w+="?"),s+=w,m+=20,O&&(m+=-8),A&&(m+=-20),N===".*"&&(m+=-50)}h.push(m)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const m=h[p]||"",E=i[p-1];d[E.name]=m&&E.repeatable?m.split("/"):m}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const m of p)if(m.type===0)h+=m.value;else if(m.type===1){const{value:E,repeatable:A,optional:O}=m,V=E in u?u[E]:"";if(un(V)&&!A)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const N=un(V)?V.join("/"):V;if(!N)if(O)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);h+=N}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function f0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function cv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=f0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wp(r))return 1;if(Wp(s))return-1}return s.length-r.length}function Wp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const d0={type:0,value:""},p0=/[a-zA-Z0-9_]/;function g0(t){if(!t)return[[]];if(t==="/")return[[d0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:p0.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function m0(t,e,n){const r=h0(g0(t.path),n),s=Ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function _0(t,e){const n=[],r=new Map;e=Qp({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,m){const E=!m,A=Kp(d);A.aliasOf=m&&m.record;const O=Qp(e,d),V=[A];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of k)V.push(Kp(Ce({},A,{components:m?m.record.components:A.components,path:D,aliasOf:m?m.record:A})))}let N,w;for(const k of V){const{path:D}=k;if(p&&D[0]!=="/"){const F=p.record.path,b=F[F.length-1]==="/"?"":"/";k.path=p.record.path+(D&&b+D)}if(N=m0(k,p,O),m?m.alias.push(N):(w=w||N,w!==N&&w.alias.push(N),E&&d.name&&!Gp(N)&&o(d.name)),lv(N)&&l(N),A.children){const F=A.children;for(let b=0;b<F.length;b++)i(F[b],N,m&&m.children[b])}m=m||N}return w?()=>{o(w)}:ao}function o(d){if(ov(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=E0(d,n);n.splice(p,0,d),d.record.name&&!Gp(d)&&r.set(d.record.name,d)}function u(d,p){let m,E={},A,O;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw ci(1,{location:d});O=m.record.name,E=Ce(zp(p.params,m.keys.filter(w=>!w.optional).concat(m.parent?m.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&zp(d.params,m.keys.map(w=>w.name))),A=m.stringify(E)}else if(d.path!=null)A=d.path,m=n.find(w=>w.re.test(A)),m&&(E=m.parse(A),O=m.record.name);else{if(m=p.name?r.get(p.name):n.find(w=>w.re.test(p.path)),!m)throw ci(1,{location:d,currentLocation:p});O=m.record.name,E=Ce({},p.params,d.params),A=m.stringify(E)}const V=[];let N=m;for(;N;)V.unshift(N.record),N=N.parent;return{name:O,path:A,params:E,matched:V,meta:v0(V)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function zp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Kp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:y0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function y0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Gp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function v0(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function Qp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function E0(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;cv(t,e[i])<0?r=i:n=i+1}const s=w0(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function w0(t){let e=t;for(;e=e.parent;)if(lv(e)&&cv(t,e)===0)return e}function lv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function T0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ev," "),o=i.indexOf("="),a=Ao(o<0?i:i.slice(0,o)),l=o<0?null:Ao(i.slice(o+1));if(a in e){let u=e[a];un(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Jp(t){let e="";for(let n in t){const r=t[n];if(n=BR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(r)?r.map(i=>i&&$u(i)):[r&&$u(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function I0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=un(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const b0=Symbol(""),Yp=Symbol(""),Gh=Symbol(""),Qh=Symbol(""),Bu=Symbol("");function Wi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Er(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(ci(4,{from:n,to:e})):p instanceof Error?l(p):c0(p)?l(ci(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Ql(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Xy(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Er(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=OR(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&Er(m,n,r,o,a,s)()}))}}return i}function Xp(t){const e=St(Gh),n=St(Qh),r=ze(()=>{const l=We(t.to);return e.resolve(l)}),s=ze(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(ai.bind(null,h));if(p>-1)return p;const m=Zp(l[u-2]);return u>1&&Zp(h)===m&&d[d.length-1].path!==m?d.findIndex(ai.bind(null,l[u-2])):p}),i=ze(()=>s.value>-1&&P0(n.params,r.value.params)),o=ze(()=>s.value>-1&&s.value===n.matched.length-1&&sv(n.params,r.value.params));function a(l={}){if(C0(l)){const u=e[We(t.replace)?"replace":"push"](We(t.to)).catch(ao);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ze(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function A0(t){return t.length===1?t[0]:t}const S0=dn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Xp,setup(t,{slots:e}){const n=Vn(Xp(t)),{options:r}=St(Gh),s=ze(()=>({[eg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[eg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&A0(e.default(n));return t.custom?i:at("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),R0=S0;function C0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function P0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!un(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Zp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const eg=(t,e,n)=>t??e??n,k0=dn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=St(Bu),s=ze(()=>t.route||r.value),i=St(Yp,0),o=ze(()=>{let u=We(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=ze(()=>s.value.matched[o.value]);kr(Yp,ze(()=>o.value+1)),kr(b0,a),kr(Bu,s);const l=Ft();return an(()=>[l.value,a.value,t.name],([u,h,d],[p,m,E])=>{h&&(h.instances[d]=u,m&&m!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!ai(h,m)||!p)&&(h.enterCallbacks[d]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return tg(n.default,{Component:p,route:u});const m=d.props[h],E=m?m===!0?u.params:typeof m=="function"?m(u):m:null,O=at(p,Ce({},E,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return tg(n.default,{Component:O,route:u})||O}}});function tg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uv=k0;function O0(t){const e=_0(t.routes,t),n=t.parseQuery||T0,r=t.stringifyQuery||Jp,s=t.history,i=Wi(),o=Wi(),a=Wi(),l=hs(Qt);let u=Qt;xs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Kl.bind(null,$=>""+$),d=Kl.bind(null,qR),p=Kl.bind(null,Ao);function m($,X){let J,re;return ov($)?(J=e.getRecordMatcher($),re=X):re=$,e.addRoute(re,J)}function E($){const X=e.getRecordMatcher($);X&&e.removeRoute(X)}function A(){return e.getRoutes().map($=>$.record)}function O($){return!!e.getRecordMatcher($)}function V($,X){if(X=Ce({},X||l.value),typeof $=="string"){const P=Gl(n,$,X.path),x=e.resolve({path:P.path},X),B=s.createHref(P.fullPath);return Ce(P,x,{params:p(x.params),hash:Ao(P.hash),redirectedFrom:void 0,href:B})}let J;if($.path!=null)J=Ce({},$,{path:Gl(n,$.path,X.path).path});else{const P=Ce({},$.params);for(const x in P)P[x]==null&&delete P[x];J=Ce({},$,{params:d(P)}),X.params=d(X.params)}const re=e.resolve(J,X),be=$.hash||"";re.params=h(p(re.params));const De=KR(r,Ce({},$,{hash:jR(be),path:re.path})),S=s.createHref(De);return Ce({fullPath:De,hash:be,query:r===Jp?I0($.query):$.query||{}},re,{redirectedFrom:void 0,href:S})}function N($){return typeof $=="string"?Gl(n,$,l.value.path):Ce({},$)}function w($,X){if(u!==$)return ci(8,{from:X,to:$})}function k($){return b($)}function D($){return k(Ce(N($),{replace:!0}))}function F($){const X=$.matched[$.matched.length-1];if(X&&X.redirect){const{redirect:J}=X;let re=typeof J=="function"?J($):J;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=N(re):{path:re},re.params={}),Ce({query:$.query,hash:$.hash,params:re.path!=null?{}:$.params},re)}}function b($,X){const J=u=V($),re=l.value,be=$.state,De=$.force,S=$.replace===!0,P=F(J);if(P)return b(Ce(N(P),{state:typeof P=="object"?Ce({},be,P.state):be,force:De,replace:S}),X||J);const x=J;x.redirectedFrom=X;let B;return!De&&GR(r,re,J)&&(B=ci(16,{to:x,from:re}),jt(re,re,!0,!1)),(B?Promise.resolve(B):I(x,re)).catch(U=>Un(U)?Un(U,2)?U:gn(U):te(U,x,re)).then(U=>{if(U){if(Un(U,2))return b(Ce({replace:S},N(U.to),{state:typeof U.to=="object"?Ce({},be,U.to.state):be,force:De}),X||x)}else U=R(x,re,!0,S,be);return C(x,re,U),U})}function v($,X){const J=w($,X);return J?Promise.reject(J):Promise.resolve()}function _($){const X=tn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext($):$()}function I($,X){let J;const[re,be,De]=N0($,X);J=Ql(re.reverse(),"beforeRouteLeave",$,X);for(const P of re)P.leaveGuards.forEach(x=>{J.push(Er(x,$,X))});const S=v.bind(null,$,X);return J.push(S),yt(J).then(()=>{J=[];for(const P of i.list())J.push(Er(P,$,X));return J.push(S),yt(J)}).then(()=>{J=Ql(be,"beforeRouteUpdate",$,X);for(const P of be)P.updateGuards.forEach(x=>{J.push(Er(x,$,X))});return J.push(S),yt(J)}).then(()=>{J=[];for(const P of De)if(P.beforeEnter)if(un(P.beforeEnter))for(const x of P.beforeEnter)J.push(Er(x,$,X));else J.push(Er(P.beforeEnter,$,X));return J.push(S),yt(J)}).then(()=>($.matched.forEach(P=>P.enterCallbacks={}),J=Ql(De,"beforeRouteEnter",$,X,_),J.push(S),yt(J))).then(()=>{J=[];for(const P of o.list())J.push(Er(P,$,X));return J.push(S),yt(J)}).catch(P=>Un(P,8)?P:Promise.reject(P))}function C($,X,J){a.list().forEach(re=>_(()=>re($,X,J)))}function R($,X,J,re,be){const De=w($,X);if(De)return De;const S=X===Qt,P=xs?history.state:{};J&&(re||S?s.replace($.fullPath,Ce({scroll:S&&P&&P.scroll},be)):s.push($.fullPath,be)),l.value=$,jt($,X,J,S),gn()}let T;function le(){T||(T=s.listen(($,X,J)=>{if(!ar.listening)return;const re=V($),be=F(re);if(be){b(Ce(be,{replace:!0,force:!0}),re).catch(ao);return}u=re;const De=l.value;xs&&n0(jp(De.fullPath,J.delta),qc()),I(re,De).catch(S=>Un(S,12)?S:Un(S,2)?(b(Ce(N(S.to),{force:!0}),re).then(P=>{Un(P,20)&&!J.delta&&J.type===So.pop&&s.go(-1,!1)}).catch(ao),Promise.reject()):(J.delta&&s.go(-J.delta,!1),te(S,re,De))).then(S=>{S=S||R(re,De,!1),S&&(J.delta&&!Un(S,8)?s.go(-J.delta,!1):J.type===So.pop&&Un(S,20)&&s.go(-1,!1)),C(re,De,S)}).catch(ao)}))}let me=Wi(),Z=Wi(),se;function te($,X,J){gn($);const re=Z.list();return re.length?re.forEach(be=>be($,X,J)):console.error($),Promise.reject($)}function Ne(){return se&&l.value!==Qt?Promise.resolve():new Promise(($,X)=>{me.add([$,X])})}function gn($){return se||(se=!$,le(),me.list().forEach(([X,J])=>$?J($):X()),me.reset()),$}function jt($,X,J,re){const{scrollBehavior:be}=t;if(!xs||!be)return Promise.resolve();const De=!J&&r0(jp($.fullPath,0))||(re||!J)&&history.state&&history.state.scroll||null;return kn().then(()=>be($,X,De)).then(S=>S&&t0(S)).catch(S=>te(S,$,X))}const lt=$=>s.go($);let Mn;const tn=new Set,ar={currentRoute:l,listening:!0,addRoute:m,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:A,resolve:V,options:t,push:k,replace:D,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:Ne,install($){const X=this;$.component("RouterLink",R0),$.component("RouterView",uv),$.config.globalProperties.$router=X,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>We(l)}),xs&&!Mn&&l.value===Qt&&(Mn=!0,k(s.location).catch(be=>{}));const J={};for(const be in Qt)Object.defineProperty(J,be,{get:()=>l.value[be],enumerable:!0});$.provide(Gh,X),$.provide(Qh,wn(J)),$.provide(Bu,l);const re=$.unmount;tn.add($),$.unmount=function(){tn.delete($),tn.size<1&&(u=Qt,T&&T(),T=null,l.value=Qt,Mn=!1,se=!1),re()}}};function yt($){return $.reduce((X,J)=>X.then(()=>_(J)),Promise.resolve())}return ar}function N0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>ai(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>ai(u,l))||s.push(l))}return[n,r,s]}function hv(t){return St(Qh)}const D0=/(:\w+)\([^)]+\)/g,V0=/(:\w+)[?+*]/g,M0=/:\w+/g,x0=(t,e)=>e.path.replace(D0,"$1").replace(V0,"$1").replace(M0,n=>t.params[n.slice(1)]?.toString()||""),Hu=(t,e)=>{const n=t.route.matched.find(s=>s.components?.default===t.Component.type),r=e??n?.meta.key??(n&&x0(t.route,n));return typeof r=="function"?r(t.route):r},L0=(t,e)=>({default:()=>t?at(VI,t===!0?{}:t,e):e});function Jh(t){return Array.isArray(t)?t:[t]}const F0={layout:"admin",ssr:!1},Jl=[{name:"cart",path:"/cart",component:()=>ut(()=>import("./DFJ9b3Ae.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{name:"shop",path:"/shop",component:()=>ut(()=>import("./CJhCL6X_.js"),__vite__mapDeps([3,4,5,6]),import.meta.url)},{name:"about",path:"/about",component:()=>ut(()=>import("./B9zO-6ZY.js"),__vite__mapDeps([7,5]),import.meta.url)},{name:"index",path:"/",component:()=>ut(()=>import("./Co1HvmNy.js"),__vite__mapDeps([8,5,9]),import.meta.url)},{name:"events",path:"/events",component:()=>ut(()=>import("./XaFMIPro.js"),[],import.meta.url)},{name:"search",path:"/search",component:()=>ut(()=>import("./FmhGW3I9.js"),__vite__mapDeps([10,4,11]),import.meta.url)},{name:"classes",path:"/classes",component:()=>ut(()=>import("./C7Ru_Zu-.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"profile",path:"/profile",component:()=>ut(()=>import("./RvQrvRZ0.js"),__vite__mapDeps([14,15,16,2]),import.meta.url)},{name:"success",path:"/success",component:()=>ut(()=>import("./CdU4wrrv.js"),__vite__mapDeps([17,5]),import.meta.url)},{name:"inquiries",path:"/inquiries",component:()=>ut(()=>import("./BLpzfGXx.js"),__vite__mapDeps([18,9,5]),import.meta.url)},{name:"class-slug",path:"/class/:slug()",component:()=>ut(()=>import("./BRklk1su.js"),__vite__mapDeps([19,15,20,1,5,13]),import.meta.url)},{name:"order-cancel",path:"/order-cancel",component:()=>ut(()=>import("./D3R9WigE.js"),__vite__mapDeps([21,5]),import.meta.url)},{name:"product-slug",path:"/product/:slug()",component:()=>ut(()=>import("./DcNnLrPs.js"),__vite__mapDeps([22,15,20,1,5,6]),import.meta.url)},{name:"admin-dashboard",path:"/admin-dashboard",meta:{...F0||{},middleware:["admin"]},component:()=>ut(()=>import("./BAZ6AOQu.js"),__vite__mapDeps([23,2,16]),import.meta.url)}],fv=(t,e)=>({default:()=>t?at(Ub,t===!0?{}:t,e):e.default?.()}),U0=/(:\w+)\([^)]+\)/g,$0=/(:\w+)[?+*]/g,j0=/:\w+/g;function ng(t){const e=t?.meta.key??t.path.replace(U0,"$1").replace($0,"$1").replace(j0,n=>t.params[n.slice(1)]?.toString()||"");return typeof e=="function"?e(t):e}function B0(t,e){return t===e||e===Qt?!1:ng(t)!==ng(e)?!0:!t.matched.every((r,s)=>r.components&&r.components.default===e.matched[s]?.components?.default)}const H0={scrollBehavior(t,e,n){const r=Be(),s=Rt().options?.scrollBehaviorType??"auto";if(t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:dv(t.hash),behavior:s}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const o=r._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(a=>{if(e===Qt){a(rg(t,e,n,s));return}r.hooks.hookOnce(o,()=>{requestAnimationFrame(()=>a(rg(t,e,n,s)))})})}};function dv(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function rg(t,e,n,r){if(n)return n;const s=B0(t,e);return t.hash?{el:t.hash,top:dv(t.hash),behavior:s?r:"instant"}:{left:0,top:0}}const q0={hashMode:!1,scrollBehaviorType:"auto"},gr={...q0,...H0},W0=async(t,e)=>{let n,r;if(!t.meta?.validate)return;const s=([n,r]=Js(()=>Promise.resolve(t.meta.validate(t))),n=await n,r(),n);if(s===!0)return;const i=ls({fatal:!0,statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i},z0=async t=>{let e,n;const r=([e,n]=Js(()=>Wh({path:t.path})),e=await e,n(),e);if(r.redirect)return or(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},K0=[W0,z0],qu={admin:()=>ut(()=>import("./hngkZn67.js"),__vite__mapDeps([24,2,16]),import.meta.url)};function G0(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),yp(h,"")}const a=yp(r,t),l=!n||UA(a,n)?a:n;return l+(l.includes("?")?"":s)+i}const Q0=$t({name:"nuxt:router",enforce:"pre",async setup(t){let e,n,r=er().app.baseURL;const s=gr.history?.(r)??a0(r),i=gr.routes?([e,n]=Js(()=>gr.routes(Jl)),e=await e,n(),e??Jl):Jl;let o;const a=O0({...gr,scrollBehavior:(O,V,N)=>{if(V===Qt){o=N;return}if(gr.scrollBehavior){if(a.options.scrollBehavior=gr.scrollBehavior,"scrollRestoration"in window.history){const w=a.beforeEach(()=>{w(),window.history.scrollRestoration="manual"})}return gr.scrollBehavior(O,Qt,o||N)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=hs(a.currentRoute.value);a.afterEach((O,V)=>{l.value=V}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=G0(r,window.location,t.payload.path),h=hs(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((O,V)=>{O.matched[O.matched.length-1]?.components?.default===V.matched[V.matched.length-1]?.components?.default&&d()});const p={};for(const O in h.value)Object.defineProperty(p,O,{get:()=>h.value[O],enumerable:!0});t._route=wn(p),t._middleware||={global:[],named:{}};const m=Bc();a.afterEach(async(O,V,N)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext($y),N&&await t.callHook("page:loading:end")});try{[e,n]=Js(()=>a.isReady()),await e,n()}catch(O){[e,n]=Js(()=>t.runWithContext(()=>ns(O))),await e,n()}const E=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const A=t.payload.state._layout;return a.beforeEach(async(O,V)=>{await t.callHook("page:loading:start"),O.meta=Vn(O.meta),t.isHydrating&&A&&!Xn(O.meta.layout)&&(O.meta.layout=A),t._processingMiddleware=!0;{const N=new Set([...K0,...t._middleware.global]);for(const w of O.matched){const k=w.meta.middleware;if(k)for(const D of Jh(k))N.add(D)}{const w=await t.runWithContext(()=>Wh({path:O.path}));if(w.appMiddleware)for(const k in w.appMiddleware)w.appMiddleware[k]?N.add(k):N.delete(k)}for(const w of N){const k=typeof w=="string"?t._middleware.named[w]||await qu[w]?.().then(D=>D.default||D):w;if(!k)throw new Error(`Unknown route middleware: '${w}'.`);try{const D=await t.runWithContext(()=>k(O,V));if(!t.payload.serverRendered&&t.isHydrating&&(D===!1||D instanceof Error)){const F=D||ls({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>ns(F)),!1}if(D===!0)continue;if(D===!1)return D;if(D)return jy(D)&&D.fatal&&await t.runWithContext(()=>ns(D)),D}catch(D){const F=ls(D);return F.fatal&&await t.runWithContext(()=>ns(F)),F}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(O=>{if(O.matched.length===0)return t.runWithContext(()=>ns(ls({statusCode:404,fatal:!1,statusMessage:`Page not found: ${O.fullPath}`,data:{path:O.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in E&&(E.name=void 0),await a.replace({...E,force:!0}),a.options.scrollBehavior=gr.scrollBehavior}catch(O){await t.runWithContext(()=>ns(O))}}),{provide:{router:a}}}}),Wu=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),J0=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Wc=t=>{const e=Be();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Wu(()=>t())}):Wu(()=>t())},Y0=$t({name:"nuxt:payload",setup(t){const e=new Set;Rt().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await Fp(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),Wc(()=>{t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await Fp(n).catch(()=>{console.warn("[nuxt] Error preloading payload for",n)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Hc,1e3)})}}),X0=$t(()=>{const t=Rt();Wc(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),Z0=$t(t=>{let e;async function n(){let r;try{r=await Hc()}catch(s){const i=s;if(!("status"in i&&(i.status===404||i.status===403)))throw i}e&&clearTimeout(e),e=setTimeout(n,Ap);try{const s=await $fetch(qh("builds/latest.json")+`?${Date.now()}`);s.id!==r?.id&&(t.hooks.callHook("app:manifest:update",s),e&&clearTimeout(e))}catch{}}Wc(()=>{e=setTimeout(n,Ap)})});function eC(t={}){const e=t.path||window.location.pathname;let n={};try{n=ii(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||n?.path!==e||n?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Be().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const tC=$t({name:"nuxt:chunk-reload",setup(t){const e=Rt(),n=er(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const o=$c(n.app.baseURL,i.fullPath);eC({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}});function sg(t){return typeof t=="string"?`'${t}'`:new nC().serialize(t)}const nC=(function(){class t{#e=new Map;compare(n,r){const s=typeof n,i=typeof r;return s==="string"&&i==="string"?n.localeCompare(r):s==="number"&&i==="number"?n-r:String.prototype.localeCompare.call(this.serialize(n,!0),this.serialize(r,!0))}serialize(n,r){if(n===null)return"null";switch(typeof n){case"string":return r?n:`'${n}'`;case"bigint":return`${n}n`;case"object":return this.$object(n);case"function":return this.$function(n)}return String(n)}serializeObject(n){const r=Object.prototype.toString.call(n);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),n);const s=n.constructor,i=s===Object||s===void 0?"":s.name;if(i!==""&&globalThis[i]===s)return this.serializeBuiltInType(i,n);if(typeof n.toJSON=="function"){const o=n.toJSON();return i+(o!==null&&typeof o=="object"?this.$object(o):`(${this.serialize(o)})`)}return this.serializeObjectEntries(i,Object.entries(n))}serializeBuiltInType(n,r){const s=this["$"+n];if(s)return s.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(n,r.entries());throw new Error(`Cannot serialize ${n}`)}serializeObjectEntries(n,r){const s=Array.from(r).sort((o,a)=>this.compare(o[0],a[0]));let i=`${n}{`;for(let o=0;o<s.length;o++){const[a,l]=s[o];i+=`${this.serialize(a,!0)}:${this.serialize(l)}`,o<s.length-1&&(i+=",")}return i+"}"}$object(n){let r=this.#e.get(n);return r===void 0&&(this.#e.set(n,`#${this.#e.size}`),r=this.serializeObject(n),this.#e.set(n,r)),r}$function(n){const r=Function.prototype.toString.call(n);return r.slice(-15)==="[native code] }"?`${n.name||""}()[native]`:`${n.name}(${n.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(n){let r="[";for(let s=0;s<n.length;s++)r+=this.serialize(n[s]),s<n.length-1&&(r+=",");return r+"]"}$Date(n){try{return`Date(${n.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(n){return`ArrayBuffer[${new Uint8Array(n).join(",")}]`}$Set(n){return`Set${this.$Array(Array.from(n).sort((r,s)=>this.compare(r,s)))}`}$Map(n){return this.serializeObjectEntries("Map",n.entries())}}for(const e of["Error","RegExp","URL"])t.prototype["$"+e]=function(n){return`${e}(${n})`};for(const e of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])t.prototype["$"+e]=function(n){return`${e}[${n.join(",")}]`};for(const e of["BigInt64Array","BigUint64Array"])t.prototype["$"+e]=function(n){return`${e}[${n.join("n,")}${n.length>0?"n":""}]`};return t})();function rC(t,e){return t===e||sg(t)===sg(e)}const sC="$s";function pv(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=sC+n,i=Be(),o=I_(i.payload.state,s);if(o.value===void 0&&r){const a=r();if(Ue(a))return i.payload.state[s]=a,a;o.value=a}return o}function iC(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||oC;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r?.filter&&!r?.filter(l)){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=aC(u,s)}i=a+1}return n}function oC(t){return t.includes("%")?decodeURIComponent(t):t}function aC(t,e){try{return e(t)}catch{return t}}const Ea=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function ig(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!Ea.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!Ea.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Ea.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Ea.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!cC(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function cC(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}function nn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=nn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:nn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=nn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=nn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(nn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(nn(i),nn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(nn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const lC={path:"/",watch:!0,decode:t=>ii(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},wa=globalThis.cookieStore;function og(t,e){const n={...lC,...e};n.filter??=u=>u===t;const r=ag(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=i||r[t]===void 0||r[t]===null,a=nn(i?void 0:r[t]??n.default?.()),l=s&&!i?fC(a,s,n.watch&&n.watch!=="shallow"):Ft(a);{let u=null;try{!wa&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=(E=!1)=>{!E&&(n.readonly||rC(l.value,r[t]))||(hC(t,l.value,n),r[t]=nn(l.value),u?.postMessage({value:n.encode(l.value)}))},d=E=>{const A=E.refresh?ag(n)?.[t]:n.decode(E.value);p=!0,l.value=A,r[t]=nn(A),kn(()=>{p=!1})};let p=!1;const m=!!$o();if(m&&qa(()=>{p=!0,h(),u?.close()}),wa){const E=A=>{const O=A.changed.find(N=>N.name===t),V=A.deleted.find(N=>N.name===t);O&&d({value:O.value}),V&&d({value:null})};wa.addEventListener("change",E),m&&qa(()=>wa.removeEventListener("change",E))}else u&&(u.onmessage=({data:E})=>d(E));n.watch&&an(l,()=>{p||h()},{deep:n.watch!=="shallow"}),o&&h(o)}return l}function ag(t={}){return iC(document.cookie,t)}function uC(t,e,n={}){return e==null?ig(t,e,{...n,maxAge:-1}):ig(t,e,n)}function hC(t,e,n={}){document.cookie=uC(t,e,n)}const cg=2147483647;function fC(t,e,n){let r,s,i=0;const o=n?Ft(t):{value:t};return $o()&&qa(()=>{s?.(),clearTimeout(r)}),T_((a,l)=>{n&&(s=an(o,l));function u(){i=0,clearTimeout(r);const h=e-i,d=h<cg?h:cg;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,l()},d)}return{get(){return a(),o.value},set(h){u(),o.value=h,l()}}})}function dC(t){if(t?.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function gv(t,e=Rt()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||=new Set,e._routePreloaded.has(n)))return;const s=e._preloadPromises||=[];if(s.length>4)return Promise.all(s).then(()=>gv(t,e));e._routePreloaded.add(n);const i=r.map(o=>o.components?.default).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const pC=(...t)=>t.find(e=>e!==void 0);function gC(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function r(i,o,a){const l=a??t.trailingSlash;if(!i||l!=="append"&&l!=="remove")return i;if(typeof i=="string")return Ta(i,l);const u="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:Ta(u,l)}}function s(i){const o=Rt(),a=er(),l=ze(()=>!!i.target&&i.target!=="_self"),u=ze(()=>{const O=i.to||i.href||"";return typeof O=="string"&&or(O,{acceptRelative:!0})}),h=Hd("RouterLink"),d=typeof h!="string"?h.useLink:void 0,p=ze(()=>{if(i.external)return!0;const O=i.to||i.href||"";return typeof O=="object"?!1:O===""||u.value}),m=ze(()=>{const O=i.to||i.href||"";return p.value?O:r(O,o.resolve,i.trailingSlash)}),E=p.value?void 0:d?.({...i,to:m}),A=ze(()=>{const O=i.trailingSlash??t.trailingSlash;if(!m.value||u.value||n(m.value))return m.value;if(p.value){const V=typeof m.value=="object"&&"path"in m.value?Mu(m.value):m.value,N=typeof V=="object"?o.resolve(V).href:V;return Ta(N,O)}return typeof m.value=="object"?o.resolve(m.value)?.href??null:Ta($c(a.app.baseURL,m.value),O)});return{to:m,hasTarget:l,isAbsoluteUrl:u,isExternal:p,href:A,isActive:E?.isActive??ze(()=>m.value===o.currentRoute.value.path),isExactActive:E?.isExactActive??ze(()=>m.value===o.currentRoute.value.path),route:E?.route??ze(()=>o.resolve(m.value)),async navigate(O){await MS(A.value,{replace:i.replace,external:p.value||l.value})}}}return dn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1},trailingSlash:{type:String,default:void 0,required:!1}},useLink:s,setup(i,{slots:o}){const a=Rt(),{to:l,href:u,navigate:h,isExternal:d,hasTarget:p,isAbsoluteUrl:m}=s(i),E=hs(!1),A=Ft(null),O=w=>{A.value=i.custom?w?.$el?.nextElementSibling:w?.$el};function V(w){return!E.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===w:i.prefetchOn?.[w]??t.prefetchOn?.[w])&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!vC()}async function N(w=Be()){if(E.value)return;E.value=!0;const k=typeof l.value=="string"?l.value:d.value?Mu(l.value):a.resolve(l.value).fullPath,D=d.value?new URL(k,window.location.href).href:k;await Promise.all([w.hooks.callHook("link:prefetch",D).catch(()=>{}),!d.value&&!p.value&&gv(l.value,a).catch(()=>{})])}if(V("visibility")){const w=Be();let k,D=null;yi(()=>{const F=_C();Wc(()=>{k=Wu(()=>{A?.value?.tagName&&(D=F.observe(A.value,async()=>{D?.(),D=null,await N(w)}))})})}),vi(()=>{k&&J0(k),D?.(),D=null})}return()=>{if(!d.value&&!p.value&&!n(l.value)){const D={ref:O,to:l.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(V("interaction")&&(D.onPointerenter=N.bind(null,void 0),D.onFocus=N.bind(null,void 0)),E.value&&(D.class=i.prefetchedClass||t.prefetchedClass),D.rel=i.rel||void 0),at(Hd("RouterLink"),D,o.default)}const w=i.target||null,k=pC(i.noRel?"":i.rel,t.externalRelAttribute,m.value||p.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:h,prefetch:N,get route(){if(!u.value)return;const D=new URL(u.value,window.location.href);return{path:D.pathname,fullPath:D.pathname,get query(){return Bh(D.search)},hash:D.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:k,target:w,isExternal:d.value||p.value,isActive:!1,isExactActive:!1}):null:at("a",{ref:A,href:u.value||null,rel:k,target:w,onClick:D=>{if(!(d.value||p.value))return D.preventDefault(),i.replace?a.replace(u.value):a.push(u.value)}},o.default?.())}}})}const mC=gC(_S);function Ta(t,e){const n=e==="append"?Ty:oi;return or(t)&&!t.startsWith("http")?t:n(t,!0)}function _C(){const t=Be();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}}),n.set(i,o),e.observe(i),()=>{n.delete(i),e?.unobserve(i),n.size===0&&(e?.disconnect(),e=null)});return t._observer={observe:r}}const yC=/2g/;function vC(){const t=navigator.connection;return!!(t&&(t.saveData||yC.test(t.effectiveType)))}const EC=$t({name:"pinia",setup(t){const e=xS();return t.vueApp.use(e),Ho(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}}),wC=$t({name:"nuxt:global-components"}),Rr={admin:Bd(()=>ut(()=>import("./DGJlCZOo.js"),__vite__mapDeps([25,5]),import.meta.url).then(t=>t.default||t)),default:Bd(()=>ut(()=>import("./7IKwWeCI.js"),__vite__mapDeps([26,1,11,5,27]),import.meta.url).then(t=>t.default||t))},TC=$t({name:"nuxt:prefetch",setup(t){const e=Rt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{const r=n?.meta?.layout;r&&typeof Rr[r]=="function"&&await Rr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(or(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Jh(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof qu[o]=="function"&&qu[o]();typeof s=="string"&&s in Rr&&dC(Rr[s])})}});function IC(t,e){if(t==null)return;let n=t;for(let r=0;r<e.length;r++){if(n==null||n[e[r]]==null)return;n=n[e[r]]}return n}function Yh(t,e,n){if(n.length===0)return e;const r=n[0];return n.length>1&&(e=Yh(typeof t!="object"||t===null||!Object.prototype.hasOwnProperty.call(t,r)?Number.isInteger(Number(n[1]))?[]:{}:t[r],e,Array.prototype.slice.call(n,1))),Number.isInteger(Number(r))&&Array.isArray(t)?t.slice()[r]:Object.assign({},t,{[r]:e})}function mv(t,e){if(t==null||e.length===0)return t;if(e.length===1){if(t==null)return t;if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.slice.call(t,0).splice(e[0],1);const n={};for(const r in t)n[r]=t[r];return delete n[e[0]],n}if(t[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.concat.call([],t);const n={};for(const r in t)n[r]=t[r];return n}return Yh(t,mv(t[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function _v(t,e){return e.map(n=>n.split(".")).map(n=>[n,IC(t,n)]).filter(n=>n[1]!==void 0).reduce((n,r)=>Yh(n,r[1],r[0]),{})}function yv(t,e){return e.map(n=>n.split(".")).reduce((n,r)=>mv(n,r),t)}function lg(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:o,beforeHydrate:a,afterHydrate:l},u,h=!0){try{h&&a?.(u);const d=e.getItem(r);if(d){const p=n.deserialize(d),m=i?_v(p,i):p,E=o?yv(m,o):m;t.$patch(E)}h&&l?.(u)}catch(d){s&&console.error("[pinia-plugin-persistedstate]",d)}}function ug(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:o}){try{const a=i?_v(t,i):t,l=o?yv(a,o):a,u=n.serialize(l);e.setItem(r,u)}catch(a){s&&console.error("[pinia-plugin-persistedstate]",a)}}function bC(t,e,n){const{pinia:r,store:s,options:{persist:i=n}}=t;if(!i)return;if(!(s.$id in r.state.value)){const l=r._s.get(s.$id.replace("__hot:",""));l&&Promise.resolve().then(()=>l.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:l=!0}={})=>{a.forEach(u=>{lg(s,u,t,l)})},s.$persist=()=>{a.forEach(l=>{ug(s.$state,l)})},a.forEach(l=>{lg(s,l,t),s.$subscribe((u,h)=>ug(h,l),{detached:!0})})}function AC(t){return{getItem:e=>og(e,{...t??er().public.piniaPluginPersistedstate.cookieOptions??{},decode:t?.decode??decodeURIComponent,readonly:!0}).value,setItem:(e,n)=>og(e,{...t??er().public.piniaPluginPersistedstate.cookieOptions??{},encode:t?.encode??encodeURIComponent}).value=n}}function SC(){return{getItem:t=>window.localStorage.getItem(t),setItem:(t,e)=>window.localStorage.setItem(t,e)}}function RC(){return{getItem:t=>window.sessionStorage.getItem(t),setItem:(t,e)=>window.sessionStorage.setItem(t,e)}}const Yl={cookies:AC,localStorage:SC,sessionStorage:RC};function CC(t){const n=er().public.piniaPluginPersistedstate;bC(t,r=>({key:n.key?n.key.replace(/%id/g,r.key??t.store.$id):r.key??t.store.$id,debug:r.debug??n.debug??!1,serializer:r.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>ii(s)},storage:r.storage??(n.storage?n.storage==="cookies"?Yl.cookies(n.cookieOptions):Yl[n.storage]():Yl.cookies()),beforeHydrate:r.beforeHydrate,afterHydrate:r.afterHydrate,pick:r.pick,omit:r.omit}),n.auto??!1)}const PC=$t({name:"pinia-plugin-persistedstate",setup({$pinia:t}){t.use(CC)}}),kC="__NUXT_COLOR_MODE__",Xl="nuxt-color-mode",OC="localStorage",$n=window[kC]||{},NC=$t(t=>{const e=pv("color-mode",()=>Vn({preference:$n.preference,value:$n.value,unknown:!1,forced:!1})).value;Rt().afterEach(i=>{const o=i.meta.colorMode;o&&o!=="system"?(e.value=o,e.forced=!0):(o==="system"&&console.warn("You cannot force the colorMode to system at the page level."),e.forced=!1,e.value=e.preference==="system"?$n.getColorScheme():e.preference)});let n;function r(){n||!window.matchMedia||(n=window.matchMedia("(prefers-color-scheme: dark)"),n.addEventListener("change",()=>{!e.forced&&e.preference==="system"&&(e.value=$n.getColorScheme())}))}function s(i,o){switch(i){case"cookie":window.document.cookie=Xl+"="+o;break;case"sessionStorage":window.sessionStorage?.setItem(Xl,o);break;case"localStorage":default:window.localStorage?.setItem(Xl,o)}}an(()=>e.preference,i=>{e.forced||(i==="system"?(e.value=$n.getColorScheme(),r()):e.value=i,s(OC,i))},{immediate:!0}),an(()=>e.value,(i,o)=>{$n.removeColorScheme(o),$n.addColorScheme(i)}),e.preference==="system"&&r(),t.hook("app:mounted",()=>{e.unknown&&(e.preference=$n.preference,e.value=$n.value,e.unknown=!1)}),t.provide("colorMode",e)}),DC=()=>{};var hg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},VC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ev={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(p=64)),r.push(n[h],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):VC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new MC;const p=i<<2|a>>4;if(r.push(p),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const E=u<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xC=function(t){const e=vv(t);return Ev.encodeByteArray(e,!0)},ac=function(t){return xC(t).replace(/\./g,"")},wv=function(t){try{return Ev.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=()=>LC().__FIREBASE_DEFAULTS__,UC=()=>{if(typeof process>"u"||typeof hg>"u")return;const t=hg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$C=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wv(t[1]);return e&&JSON.parse(e)},zc=()=>{try{return DC()||FC()||UC()||$C()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tv=t=>zc()?.emulatorHosts?.[t],jC=t=>{const e=Tv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Iv=()=>zc()?.config,bv=t=>zc()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Av(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ac(JSON.stringify(n)),ac(JSON.stringify(o)),""].join(".")}const lo={};function qC(){const t={prod:[],emulator:[]};for(const e of Object.keys(lo))lo[e]?t.emulator.push(e):t.prod.push(e);return t}function WC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let fg=!1;function Sv(t,e){if(typeof window>"u"||typeof document>"u"||!Ei(window.location.host)||lo[t]===e||lo[t]||fg)return;lo[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=qC().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,m){p.setAttribute("width","24"),p.setAttribute("id",m),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{fg=!0,o()},p}function h(p,m){p.setAttribute("id",m),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=WC(r),m=n("text"),E=document.getElementById(m)||document.createElement("span"),A=n("learnmore"),O=document.getElementById(A)||document.createElement("a"),V=n("preprendIcon"),N=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const w=p.element;a(w),h(O,A);const k=u();l(N,V),w.append(N,E,O,k),document.body.appendChild(w)}i?(E.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function KC(){const t=zc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JC(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YC(){return!KC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cv(){try{return typeof indexedDB=="object"}catch{return!1}}function Pv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function XC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZC,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bs.prototype.create)}}class bs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?eP(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new pn(s,a,r)}}function eP(t,e){return t.replace(tP,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tP=/\{\$([^}]+)}/g;function nP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(dg(i)&&dg(o)){if(!gs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function dg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rP(t,e){const n=new sP(t,e);return n.subscribe.bind(n)}class sP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zl),s.error===void 0&&(s.error=Zl),s.complete===void 0&&(s.complete=Zl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=1e3,aP=2,cP=14400*1e3,lP=.5;function pg(t,e=oP,n=aP){const r=e*Math.pow(n,t),s=Math.round(lP*r*(Math.random()-.5)*2);return Math.min(cP,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new BC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fP(e))try{this.getOrInitializeService({instanceIdentifier:rs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rs){return this.instances.has(e)}getOptions(e=rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rs){return this.component?this.component.multipleInstances?e:rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hP(t){return t===rs?void 0:t}function fP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const pP={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},gP=ve.INFO,mP={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},_P=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kc{constructor(e){this.name=e,this._logLevel=gP,this._logHandler=_P,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const yP=(t,e)=>e.some(n=>t instanceof n);let gg,mg;function vP(){return gg||(gg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EP(){return mg||(mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kv=new WeakMap,zu=new WeakMap,Ov=new WeakMap,eu=new WeakMap,Xh=new WeakMap;function wP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Or(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kv.set(n,t)}).catch(()=>{}),Xh.set(e,t),e}function TP(t){if(zu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zu.set(t,e)}let Ku={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ov.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IP(t){Ku=t(Ku)}function bP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tu(this),e,...n);return Ov.set(r,e.sort?e.sort():[e]),Or(r)}:EP().includes(t)?function(...e){return t.apply(tu(this),e),Or(kv.get(this))}:function(...e){return Or(t.apply(tu(this),e))}}function AP(t){return typeof t=="function"?bP(t):(t instanceof IDBTransaction&&TP(t),yP(t,vP())?new Proxy(t,Ku):t)}function Or(t){if(t instanceof IDBRequest)return wP(t);if(eu.has(t))return eu.get(t);const e=AP(t);return e!==t&&(eu.set(t,e),Xh.set(e,t)),e}const tu=t=>Xh.get(t);function Nv(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Or(o.result),l.oldVersion,l.newVersion,Or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const SP=["get","getKey","getAll","getAllKeys","count"],RP=["put","add","delete","clear"],nu=new Map;function _g(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nu.get(e))return nu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=RP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||SP.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return nu.set(e,i),i}IP(t=>({...t,get:(e,n,r)=>_g(e,n)||t.get(e,n,r),has:(e,n)=>!!_g(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PP(t){return t.getComponent()?.type==="VERSION"}const Gu="@firebase/app",yg="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Kc("@firebase/app"),kP="@firebase/app-compat",OP="@firebase/analytics-compat",NP="@firebase/analytics",DP="@firebase/app-check-compat",VP="@firebase/app-check",MP="@firebase/auth",xP="@firebase/auth-compat",LP="@firebase/database",FP="@firebase/data-connect",UP="@firebase/database-compat",$P="@firebase/functions",jP="@firebase/functions-compat",BP="@firebase/installations",HP="@firebase/installations-compat",qP="@firebase/messaging",WP="@firebase/messaging-compat",zP="@firebase/performance",KP="@firebase/performance-compat",GP="@firebase/remote-config",QP="@firebase/remote-config-compat",JP="@firebase/storage",YP="@firebase/storage-compat",XP="@firebase/firestore",ZP="@firebase/ai",ek="@firebase/firestore-compat",tk="firebase",nk="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="[DEFAULT]",rk={[Gu]:"fire-core",[kP]:"fire-core-compat",[NP]:"fire-analytics",[OP]:"fire-analytics-compat",[VP]:"fire-app-check",[DP]:"fire-app-check-compat",[MP]:"fire-auth",[xP]:"fire-auth-compat",[LP]:"fire-rtdb",[FP]:"fire-data-connect",[UP]:"fire-rtdb-compat",[$P]:"fire-fn",[jP]:"fire-fn-compat",[BP]:"fire-iid",[HP]:"fire-iid-compat",[qP]:"fire-fcm",[WP]:"fire-fcm-compat",[zP]:"fire-perf",[KP]:"fire-perf-compat",[GP]:"fire-rc",[QP]:"fire-rc-compat",[JP]:"fire-gcs",[YP]:"fire-gcs-compat",[XP]:"fire-fst",[ek]:"fire-fst-compat",[ZP]:"fire-vertex","fire-js":"fire-js",[tk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Map,sk=new Map,Ju=new Map;function vg(t,e){try{t.container.addComponent(e)}catch(n){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function On(t){const e=t.name;if(Ju.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;Ju.set(e,t);for(const n of Ro.values())vg(n,t);for(const n of sk.values())vg(n,t);return!0}function Wo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new bs("app","Firebase",ik);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=nk;function Dv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Qu,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Nr.create("bad-app-name",{appName:String(s)});if(n||(n=Iv()),!n)throw Nr.create("no-options");const i=Ro.get(s);if(i){if(gs(n,i.options)&&gs(r,i.config))return i;throw Nr.create("duplicate-app",{appName:s})}const o=new dP(s);for(const l of Ju.values())o.addComponent(l);const a=new ok(n,r,o);return Ro.set(s,a),a}function Zh(t=Qu){const e=Ro.get(t);if(!e&&t===Qu&&Iv())return Dv();if(!e)throw Nr.create("no-app",{appName:t});return e}function ak(){return Array.from(Ro.values())}function Zt(t,e,n){let r=rk[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(o.join(" "));return}On(new hn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck="firebase-heartbeat-database",lk=1,Co="firebase-heartbeat-store";let ru=null;function Vv(){return ru||(ru=Nv(ck,lk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Co)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),ru}async function uk(t){try{const n=(await Vv()).transaction(Co),r=await n.objectStore(Co).get(Mv(t));return await n.done,r}catch(e){if(e instanceof pn)tr.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e?.message});tr.warn(n.message)}}}async function Eg(t,e){try{const r=(await Vv()).transaction(Co,"readwrite");await r.objectStore(Co).put(e,Mv(t)),await r.done}catch(n){if(n instanceof pn)tr.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n?.message});tr.warn(r.message)}}}function Mv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=1024,fk=30;class dk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>fk){const s=mk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){tr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wg(),{heartbeatsToSend:n,unsentEntries:r}=pk(this._heartbeatsCache.heartbeats),s=ac(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return tr.warn(e),""}}}function wg(){return new Date().toISOString().substring(0,10)}function pk(t,e=hk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Tg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Tg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cv()?Pv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uk(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Eg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Eg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Tg(t){return ac(JSON.stringify({version:2,heartbeats:t})).length}function mk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t){On(new hn("platform-logger",e=>new CP(e),"PRIVATE")),On(new hn("heartbeat",e=>new dk(e),"PRIVATE")),Zt(Gu,yg,t),Zt(Gu,yg,"esm2020"),Zt("fire-js","")}_k("");var yk="firebase",vk="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(yk,vk,"app");function xv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ek=xv,Lv=new bs("auth","Firebase",xv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Kc("@firebase/auth");function wk(t,...e){cc.logLevel<=ve.WARN&&cc.warn(`Auth (${wi}): ${t}`,...e)}function Da(t,...e){cc.logLevel<=ve.ERROR&&cc.error(`Auth (${wi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw ef(t,...e)}function In(t,...e){return ef(t,...e)}function Fv(t,e,n){const r={...Ek(),[e]:n};return new bs("auth","Firebase",r).create(e,{appName:t.name})}function Qn(t){return Fv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ef(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Lv.create(t,...e)}function ue(t,e,...n){if(!t)throw ef(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Da(e),new Error(e)}function nr(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(){return typeof self<"u"&&self.location?.href||""}function Tk(){return Ig()==="http:"||Ig()==="https:"}function Ig(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tk()||Rv()||"connection"in navigator)?navigator.onLine:!0}function bk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=zC()||QC()}get(){return Ik()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t,e){nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Rk=new zo(3e4,6e4);function Br(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Hr(t,e,n,r,s={}){return $v(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=qo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return GC()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(u.credentials="include"),Uv.fetch()(await jv(t,t.config.apiHost,n,a),u)})}async function $v(t,e,n){t._canInitEmulator=!1;const r={...Ak,...e};try{const s=new Pk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ia(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Fv(t,h,u);fn(t,h)}}catch(s){if(s instanceof pn)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function Ko(t,e,n,r,s={}){const i=await Hr(t,e,n,r,s);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function jv(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?tf(t.config,s):`${t.config.apiScheme}://${s}`;return Sk.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Ck(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),Rk.get())})}}function Ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=In(t,e,r);return s.customData._tokenResponse=n,s}function bg(t){return t!==void 0&&t.enterprise!==void 0}class kk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ck(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ok(t,e){return Hr(t,"GET","/v2/recaptchaConfig",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nk(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function lc(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dk(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=nf(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:uo(su(s.auth_time)),issuedAtTime:uo(su(s.iat)),expirationTime:uo(su(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function su(t){return Number(t)*1e3}function nf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const s=wv(n);return s?JSON.parse(s):(Da("Failed to decode base64 JWT payload"),null)}catch(s){return Da("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ag(t){const e=nf(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&Vk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Vk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=uo(this.lastLoginAt),this.creationTime=uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(t){const e=t.auth,n=await t.getIdToken(),r=await Po(t,lc(e,{idToken:n}));ue(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Bv(s.providerUserInfo):[],o=Lk(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Xu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function xk(t){const e=ct(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Bv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(t,e){const n=await $v(t,{},async()=>{const r=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await jv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(l.credentials="include"),Uv.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Uk(t,e){return Hr(t,"POST","/v2/accounts:revokeToken",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ag(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=Ag(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Fk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ys;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Mk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Po(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Dk(this,e)}reload(){return xk(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(Qn(this.auth));const e=await this.getIdToken();return await Po(this,Nk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:m,providerData:E,stsTokenManager:A}=n;ue(d&&A,e,"internal-error");const O=Ys.fromJSON(this.name,A);ue(typeof d=="string",e,"internal-error"),mr(r,e.name),mr(s,e.name),ue(typeof p=="boolean",e,"internal-error"),ue(typeof m=="boolean",e,"internal-error"),mr(i,e.name),mr(o,e.name),mr(a,e.name),mr(l,e.name),mr(u,e.name),mr(h,e.name);const V=new sn({uid:d,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:O,createdAt:u,lastLoginAt:h});return E&&Array.isArray(E)&&(V.providerData=E.map(N=>({...N}))),l&&(V._redirectEventId=l),V}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ys;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await uc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Bv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Ys;a.updateFromIdToken(r);const l=new sn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=new Map;function zn(t){nr(t instanceof Function,"Expected a class definition");let e=Sg.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hv.type="NONE";const Rg=Hv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t,e,n){return`firebase:${t}:${e}:${n}`}class Xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Va(this.userKey,s.apiKey,i),this.fullPersistenceKey=Va("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await lc(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xs(zn(Rg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||zn(Rg);const o=Va(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const p=await lc(e,{idToken:h}).catch(()=>{});if(!p)break;d=await sn._fromGetAccountInfoResponse(e,p,h)}else d=sn._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Xs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qv(e))return"Blackberry";if(Jv(e))return"Webos";if(Wv(e))return"Safari";if((e.includes("chrome/")||zv(e))&&!e.includes("edge/"))return"Chrome";if(Gv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function qv(t=Ct()){return/firefox\//i.test(t)}function Wv(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zv(t=Ct()){return/crios\//i.test(t)}function Kv(t=Ct()){return/iemobile/i.test(t)}function Gv(t=Ct()){return/android/i.test(t)}function Qv(t=Ct()){return/blackberry/i.test(t)}function Jv(t=Ct()){return/webos/i.test(t)}function rf(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $k(t=Ct()){return rf(t)&&!!window.navigator?.standalone}function jk(){return JC()&&document.documentMode===10}function Yv(t=Ct()){return rf(t)||Gv(t)||Jv(t)||Qv(t)||/windows phone/i.test(t)||Kv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t,e=[]){let n;switch(t){case"Browser":n=Cg(Ct());break;case"Worker":n=`${Cg(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,e={}){return Hr(t,"GET","/v2/passwordPolicy",Br(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=6;class Wk{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??qk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pg(this),this.idTokenSubscription=new Pg(this),this.beforeStateQueue=new Bk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lc(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Jt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(Qn(this));const n=e?ct(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hk(this),n=new Wk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Uk(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&wk(`Error while retrieving App Check token: ${e.error}`),e?.token}}function As(t){return ct(t)}class Pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=rP(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Kk(t){Gc=t}function Zv(t){return Gc.loadJS(t)}function Gk(){return Gc.recaptchaEnterpriseScript}function Qk(){return Gc.gapiScript}function Jk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Yk{constructor(){this.enterprise=new Xk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Xk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Zk="recaptcha-enterprise",eE="NO_RECAPTCHA";class e1{constructor(e){this.type=Zk,this.auth=As(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Ok(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new kk(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;bg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(eE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Yk().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&bg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Gk();l.length!==0&&(l+=a),Zv(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function kg(t,e,n,r=!1,s=!1){const i=new e1(t);let o;if(s)o=eE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Zu(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await kg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await kg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t,e){const n=Wo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(gs(i,e??{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function n1(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(zn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function r1(t,e,n){const r=As(t);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=tE(e),{host:o,port:a}=s1(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue(gs(u,r.config.emulator)&&gs(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Ei(o)?(Av(`${i}//${o}${l}`),Sv("Auth",!0)):i1()}function tE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function s1(t){const e=tE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Og(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Og(o)}}}function Og(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function i1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function o1(t,e){return Hr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e){return Ko(t,"POST","/v1/accounts:signInWithPassword",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c1(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}async function l1(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends sf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zu(e,n,"signInWithPassword",a1);case"emailLink":return c1(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zu(e,r,"signUpPassword",o1);case"emailLink":return l1(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e){return Ko(t,"POST","/v1/accounts:signInWithIdp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="http://localhost";class ms extends sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ms(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zs(e,n)}buildRequest(){const e={requestUri:u1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f1(t){const e=Gi(Qi(t)).link,n=e?Gi(Qi(e)).deep_link_id:null,r=Gi(Qi(t)).deep_link_id;return(r?Gi(Qi(r)).link:null)||r||n||e||t}class of{constructor(e){const n=Gi(Qi(e)),r=n.apiKey??null,s=n.oobCode??null,i=h1(n.mode??null);ue(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=f1(e);try{return new of(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,n){return ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=of.parseLink(n);return ue(r,"argument-error"),ko._fromEmailAndCode(e,r.code,r.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends nE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Go{constructor(){super("facebook.com")}static credential(e){return ms._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ms._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Go{constructor(){super("github.com")}static credential(e){return ms._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Go{constructor(){super("twitter.com")}static credential(e,n){return ms._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(t,e){return Ko(t,"POST","/v1/accounts:signUp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=Ng(r);return new _s({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ng(r);return new _s({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ng(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends pn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new hc(e,n,r,s)}}function rE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(t,i,e,r):i})}async function p1(t,e,n=!1){const r=await Po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _s._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(Qn(r));const s="reauthenticate";try{const i=await Po(t,rE(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=nf(i.idToken);ue(o,r,"internal-error");const{sub:a}=o;return ue(t.uid===a,r,"user-mismatch"),_s._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&fn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(t,e,n=!1){if(Jt(t.app))return Promise.reject(Qn(t));const r="signIn",s=await rE(t,r,e),i=await _s._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function m1(t,e){return sE(As(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(t){const e=As(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Kx(t,e,n){if(Jt(t.app))return Promise.reject(Qn(t));const r=As(t),o=await Zu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",d1).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&iE(t),l}),a=await _s._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Gx(t,e,n){return Jt(t.app)?Promise.reject(Qn(t)):m1(ct(t),Ti.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(t,e){return ct(t).setPersistence(e)}function y1(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function v1(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function Qx(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function Jx(t){return ct(t).signOut()}const fc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fc,"1"),this.storage.removeItem(fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=1e3,w1=10;class aE extends oE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,w1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},E1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aE.type="LOCAL";const cE=aE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE extends oE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lE.type="SESSION";const uE=lE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Qc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await T1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=af("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return window}function b1(t){bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function A1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function S1(){return navigator?.serviceWorker?.controller||null}function R1(){return hE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="firebaseLocalStorageDb",C1=1,dc="firebaseLocalStorage",dE="fbase_key";class Qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jc(t,e){return t.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function P1(){const t=indexedDB.deleteDatabase(fE);return new Qo(t).toPromise()}function eh(){const t=indexedDB.open(fE,C1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dc,{keyPath:dE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dc)?e(r):(r.close(),await P1(),e(await eh()))})})}async function Dg(t,e,n){const r=Jc(t,!0).put({[dE]:e,value:n});return new Qo(r).toPromise()}async function k1(t,e){const n=Jc(t,!1).get(e),r=await new Qo(n).toPromise();return r===void 0?null:r.value}function Vg(t,e){const n=Jc(t,!0).delete(e);return new Qo(n).toPromise()}const O1=800,N1=3;class pE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>N1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qc._getInstance(R1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await A1(),!this.activeServiceWorker)return;this.sender=new I1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||S1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await eh();return await Dg(e,fc,"1"),await Vg(e,fc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>k1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jc(s,!1).getAll();return new Qo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),O1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pE.type="LOCAL";const D1=pE;new zo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t,e){return e?zn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf extends sf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function M1(t){return sE(t.auth,new cf(t),t.bypassAuthState)}function x1(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),g1(n,new cf(t),t.bypassAuthState)}async function L1(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),p1(n,new cf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M1;case"linkViaPopup":case"linkViaRedirect":return L1;case"reauthViaPopup":case"reauthViaRedirect":return x1;default:fn(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=new zo(2e3,1e4);class Bs extends gE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Bs.currentPopupAction&&Bs.currentPopupAction.cancel(),Bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,F1.get())};e()}}Bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="pendingRedirect",Ma=new Map;class $1 extends gE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ma.get(this.auth._key());if(!e){try{const r=await j1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ma.set(this.auth._key(),e)}return this.bypassAuthState||Ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function j1(t,e){const n=q1(e),r=H1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function B1(t,e){Ma.set(t._key(),e)}function H1(t){return zn(t._redirectPersistence)}function q1(t){return Va(U1,t.config.apiKey,t.name)}async function W1(t,e,n=!1){if(Jt(t.app))return Promise.reject(Qn(t));const r=As(t),s=V1(r,e),o=await new $1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=600*1e3;class K1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!G1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!mE(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(In(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=z1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mg(e))}saveEventToCache(e){this.cachedEventUids.add(Mg(e)),this.lastProcessedEventTime=Date.now()}}function Mg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mE({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function G1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q1(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y1=/^https?/;async function X1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Q1(t);for(const n of e)try{if(Z1(n))return}catch{}fn(t,"unauthorized-domain")}function Z1(t){const e=Yu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Y1.test(n))return!1;if(J1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=new zo(3e4,6e4);function xg(){const t=bn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tO(t){return new Promise((e,n)=>{function r(){xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xg(),n(In(t,"network-request-failed"))},timeout:eO.get()})}if(bn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(bn().gapi?.load)r();else{const s=Jk("iframefcb");return bn()[s]=()=>{gapi.load?r():n(In(t,"network-request-failed"))},Zv(`${Qk()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw xa=null,e})}let xa=null;function nO(t){return xa=xa||tO(t),xa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=new zo(5e3,15e3),sO="__/auth/iframe",iO="emulator/auth/iframe",oO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cO(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tf(e,iO):`https://${t.config.authDomain}/${sO}`,r={apiKey:e.apiKey,appName:t.name,v:wi},s=aO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qo(r).slice(1)}`}async function lO(t){const e=await nO(t),n=bn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:cO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=In(t,"network-request-failed"),a=bn().setTimeout(()=>{i(o)},rO.get());function l(){bn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hO=500,fO=600,dO="_blank",pO="http://localhost";class Lg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gO(t,e,n,r=hO,s=fO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...uO,width:r.toString(),height:s.toString(),top:i,left:o},u=Ct().toLowerCase();n&&(a=zv(u)?dO:n),qv(u)&&(e=e||pO,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[m,E])=>`${p}${m}=${E},`,"");if($k(u)&&a!=="_self")return mO(e||"",a),new Lg(null);const d=window.open(e||"",a,h);ue(d,t,"popup-blocked");try{d.focus()}catch{}return new Lg(d)}function mO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O="__/auth/handler",yO="emulator/auth/handler",vO=encodeURIComponent("fac");async function Fg(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wi,eventId:s};if(e instanceof nE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Go){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${vO}=${encodeURIComponent(l)}`:"";return`${EO(t)}?${qo(a).slice(1)}${u}`}function EO({config:t}){return t.emulator?tf(t,yO):`https://${t.authDomain}/${_O}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="webStorageSupport";class wO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uE,this._completeRedirectFn=W1,this._overrideRedirectResult=B1}async _openPopup(e,n,r,s){nr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Fg(e,n,r,Yu(),s);return gO(e,i,af())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Fg(e,n,r,Yu(),s);return b1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lO(e),r=new K1(e);return n.register("authEvent",s=>(ue(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(iu,{type:iu},s=>{const i=s?.[0]?.[iu];i!==void 0&&n(!!i),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=X1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yv()||Wv()||rf()}}const TO=wO;var Ug="@firebase/auth",$g="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AO(t){On(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xv(t)},u=new zk(r,s,i,l);return n1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),On(new hn("auth-internal",e=>{const n=As(e.getProvider("auth").getImmediate());return(r=>new IO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Ug,$g,bO(t)),Zt(Ug,$g,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO=300,RO=bv("authIdTokenMaxAge")||SO;let jg=null;const CO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RO)return;const s=n?.token;jg!==s&&(jg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function PO(t=Zh()){const e=Wo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=t1(t,{popupRedirectResolver:TO,persistence:[D1,cE,uE]}),r=bv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=CO(i.toString());v1(n,o,()=>o(n.currentUser)),y1(n,a=>o(a))}}const s=Tv("auth");return s&&r1(n,`http://${s}`),n}function kO(){return document.getElementsByTagName("head")?.[0]??document}Kk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=In("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",kO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AO("Browser");var Bg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,_E;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function _(){}_.prototype=v.prototype,b.F=v.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(I,C,R){for(var T=Array(arguments.length-2),le=2;le<arguments.length;le++)T[le-2]=arguments[le];return v.prototype[C].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,_){_||(_=0);const I=Array(16);if(typeof v=="string")for(var C=0;C<16;++C)I[C]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(C=0;C<16;++C)I[C]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=b.g[0],_=b.g[1],C=b.g[2];let R=b.g[3],T;T=v+(R^_&(C^R))+I[0]+3614090360&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(C^v&(_^C))+I[1]+3905402710&4294967295,R=v+(T<<12&4294967295|T>>>20),T=C+(_^R&(v^_))+I[2]+606105819&4294967295,C=R+(T<<17&4294967295|T>>>15),T=_+(v^C&(R^v))+I[3]+3250441966&4294967295,_=C+(T<<22&4294967295|T>>>10),T=v+(R^_&(C^R))+I[4]+4118548399&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(C^v&(_^C))+I[5]+1200080426&4294967295,R=v+(T<<12&4294967295|T>>>20),T=C+(_^R&(v^_))+I[6]+2821735955&4294967295,C=R+(T<<17&4294967295|T>>>15),T=_+(v^C&(R^v))+I[7]+4249261313&4294967295,_=C+(T<<22&4294967295|T>>>10),T=v+(R^_&(C^R))+I[8]+1770035416&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(C^v&(_^C))+I[9]+2336552879&4294967295,R=v+(T<<12&4294967295|T>>>20),T=C+(_^R&(v^_))+I[10]+4294925233&4294967295,C=R+(T<<17&4294967295|T>>>15),T=_+(v^C&(R^v))+I[11]+2304563134&4294967295,_=C+(T<<22&4294967295|T>>>10),T=v+(R^_&(C^R))+I[12]+1804603682&4294967295,v=_+(T<<7&4294967295|T>>>25),T=R+(C^v&(_^C))+I[13]+4254626195&4294967295,R=v+(T<<12&4294967295|T>>>20),T=C+(_^R&(v^_))+I[14]+2792965006&4294967295,C=R+(T<<17&4294967295|T>>>15),T=_+(v^C&(R^v))+I[15]+1236535329&4294967295,_=C+(T<<22&4294967295|T>>>10),T=v+(C^R&(_^C))+I[1]+4129170786&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^C&(v^_))+I[6]+3225465664&4294967295,R=v+(T<<9&4294967295|T>>>23),T=C+(v^_&(R^v))+I[11]+643717713&4294967295,C=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(C^R))+I[0]+3921069994&4294967295,_=C+(T<<20&4294967295|T>>>12),T=v+(C^R&(_^C))+I[5]+3593408605&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^C&(v^_))+I[10]+38016083&4294967295,R=v+(T<<9&4294967295|T>>>23),T=C+(v^_&(R^v))+I[15]+3634488961&4294967295,C=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(C^R))+I[4]+3889429448&4294967295,_=C+(T<<20&4294967295|T>>>12),T=v+(C^R&(_^C))+I[9]+568446438&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^C&(v^_))+I[14]+3275163606&4294967295,R=v+(T<<9&4294967295|T>>>23),T=C+(v^_&(R^v))+I[3]+4107603335&4294967295,C=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(C^R))+I[8]+1163531501&4294967295,_=C+(T<<20&4294967295|T>>>12),T=v+(C^R&(_^C))+I[13]+2850285829&4294967295,v=_+(T<<5&4294967295|T>>>27),T=R+(_^C&(v^_))+I[2]+4243563512&4294967295,R=v+(T<<9&4294967295|T>>>23),T=C+(v^_&(R^v))+I[7]+1735328473&4294967295,C=R+(T<<14&4294967295|T>>>18),T=_+(R^v&(C^R))+I[12]+2368359562&4294967295,_=C+(T<<20&4294967295|T>>>12),T=v+(_^C^R)+I[5]+4294588738&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^C)+I[8]+2272392833&4294967295,R=v+(T<<11&4294967295|T>>>21),T=C+(R^v^_)+I[11]+1839030562&4294967295,C=R+(T<<16&4294967295|T>>>16),T=_+(C^R^v)+I[14]+4259657740&4294967295,_=C+(T<<23&4294967295|T>>>9),T=v+(_^C^R)+I[1]+2763975236&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^C)+I[4]+1272893353&4294967295,R=v+(T<<11&4294967295|T>>>21),T=C+(R^v^_)+I[7]+4139469664&4294967295,C=R+(T<<16&4294967295|T>>>16),T=_+(C^R^v)+I[10]+3200236656&4294967295,_=C+(T<<23&4294967295|T>>>9),T=v+(_^C^R)+I[13]+681279174&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^C)+I[0]+3936430074&4294967295,R=v+(T<<11&4294967295|T>>>21),T=C+(R^v^_)+I[3]+3572445317&4294967295,C=R+(T<<16&4294967295|T>>>16),T=_+(C^R^v)+I[6]+76029189&4294967295,_=C+(T<<23&4294967295|T>>>9),T=v+(_^C^R)+I[9]+3654602809&4294967295,v=_+(T<<4&4294967295|T>>>28),T=R+(v^_^C)+I[12]+3873151461&4294967295,R=v+(T<<11&4294967295|T>>>21),T=C+(R^v^_)+I[15]+530742520&4294967295,C=R+(T<<16&4294967295|T>>>16),T=_+(C^R^v)+I[2]+3299628645&4294967295,_=C+(T<<23&4294967295|T>>>9),T=v+(C^(_|~R))+I[0]+4096336452&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~C))+I[7]+1126891415&4294967295,R=v+(T<<10&4294967295|T>>>22),T=C+(v^(R|~_))+I[14]+2878612391&4294967295,C=R+(T<<15&4294967295|T>>>17),T=_+(R^(C|~v))+I[5]+4237533241&4294967295,_=C+(T<<21&4294967295|T>>>11),T=v+(C^(_|~R))+I[12]+1700485571&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~C))+I[3]+2399980690&4294967295,R=v+(T<<10&4294967295|T>>>22),T=C+(v^(R|~_))+I[10]+4293915773&4294967295,C=R+(T<<15&4294967295|T>>>17),T=_+(R^(C|~v))+I[1]+2240044497&4294967295,_=C+(T<<21&4294967295|T>>>11),T=v+(C^(_|~R))+I[8]+1873313359&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~C))+I[15]+4264355552&4294967295,R=v+(T<<10&4294967295|T>>>22),T=C+(v^(R|~_))+I[6]+2734768916&4294967295,C=R+(T<<15&4294967295|T>>>17),T=_+(R^(C|~v))+I[13]+1309151649&4294967295,_=C+(T<<21&4294967295|T>>>11),T=v+(C^(_|~R))+I[4]+4149444226&4294967295,v=_+(T<<6&4294967295|T>>>26),T=R+(_^(v|~C))+I[11]+3174756917&4294967295,R=v+(T<<10&4294967295|T>>>22),T=C+(v^(R|~_))+I[2]+718787259&4294967295,C=R+(T<<15&4294967295|T>>>17),T=_+(R^(C|~v))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+R&4294967295}r.prototype.v=function(b,v){v===void 0&&(v=b.length);const _=v-this.blockSize,I=this.C;let C=this.h,R=0;for(;R<v;){if(C==0)for(;R<=_;)s(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<v;)if(I[C++]=b.charCodeAt(R++),C==this.blockSize){s(this,I),C=0;break}}else for(;R<v;)if(I[C++]=b[R++],C==this.blockSize){s(this,I),C=0;break}}this.h=C,this.o+=v},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;v=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=v&255,v/=256;for(this.v(b),b=Array(16),v=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)b[v++]=this.g[_]>>>I&255;return b};function i(b,v){var _=a;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=v(b)}function o(b,v){this.h=v;const _=[];let I=!0;for(let C=b.length-1;C>=0;C--){const R=b[C]|0;I&&R==v||(_[C]=R,I=!1)}this.g=_}var a={};function l(b){return-128<=b&&b<128?i(b,function(v){return new o([v|0],v<0?-1:0)}):new o([b|0],b<0?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(b<0)return O(u(-b));const v=[];let _=1;for(let I=0;b>=_;I++)v[I]=b/_|0,_*=4294967296;return new o(v,0)}function h(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return O(h(b.substring(1),v));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(v,8));let I=d;for(let R=0;R<b.length;R+=8){var C=Math.min(8,b.length-R);const T=parseInt(b.substring(R,R+C),v);C<8?(C=u(Math.pow(v,C)),I=I.j(C).add(u(T))):(I=I.j(_),I=I.add(u(T)))}return I}var d=l(0),p=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-O(this).m();let b=0,v=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);b+=(I>=0?I:4294967296+I)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(E(this))return"0";if(A(this))return"-"+O(this).toString(b);const v=u(Math.pow(b,6));var _=this;let I="";for(;;){const C=k(_,v).g;_=V(_,C.j(v));let R=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=C,E(_))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function E(b){if(b.h!=0)return!1;for(let v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function A(b){return b.h==-1}t.l=function(b){return b=V(this,b),A(b)?-1:E(b)?0:1};function O(b){const v=b.g.length,_=[];for(let I=0;I<v;I++)_[I]=~b.g[I];return new o(_,~b.h).add(p)}t.abs=function(){return A(this)?O(this):this},t.add=function(b){const v=Math.max(this.g.length,b.g.length),_=[];let I=0;for(let C=0;C<=v;C++){let R=I+(this.i(C)&65535)+(b.i(C)&65535),T=(R>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);I=T>>>16,R&=65535,T&=65535,_[C]=T<<16|R}return new o(_,_[_.length-1]&-2147483648?-1:0)};function V(b,v){return b.add(O(v))}t.j=function(b){if(E(this)||E(b))return d;if(A(this))return A(b)?O(this).j(O(b)):O(O(this).j(b));if(A(b))return O(this.j(O(b)));if(this.l(m)<0&&b.l(m)<0)return u(this.m()*b.m());const v=this.g.length+b.g.length,_=[];for(var I=0;I<2*v;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let C=0;C<b.g.length;C++){const R=this.i(I)>>>16,T=this.i(I)&65535,le=b.i(C)>>>16,me=b.i(C)&65535;_[2*I+2*C]+=T*me,N(_,2*I+2*C),_[2*I+2*C+1]+=R*me,N(_,2*I+2*C+1),_[2*I+2*C+1]+=T*le,N(_,2*I+2*C+1),_[2*I+2*C+2]+=R*le,N(_,2*I+2*C+2)}for(b=0;b<v;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=v;b<2*v;b++)_[b]=0;return new o(_,0)};function N(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function w(b,v){this.g=b,this.h=v}function k(b,v){if(E(v))throw Error("division by zero");if(E(b))return new w(d,d);if(A(b))return v=k(O(b),v),new w(O(v.g),O(v.h));if(A(v))return v=k(b,O(v)),new w(O(v.g),v.h);if(b.g.length>30){if(A(b)||A(v))throw Error("slowDivide_ only works with positive integers.");for(var _=p,I=v;I.l(b)<=0;)_=D(_),I=D(I);var C=F(_,1),R=F(I,1);for(I=F(I,2),_=F(_,2);!E(I);){var T=R.add(I);T.l(b)<=0&&(C=C.add(_),R=T),I=F(I,1),_=F(_,1)}return v=V(b,C.j(v)),new w(C,v)}for(C=d;b.l(v)>=0;){for(_=Math.max(1,Math.floor(b.m()/v.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=u(_),T=R.j(v);A(T)||T.l(b)>0;)_-=I,R=u(_),T=R.j(v);E(R)&&(R=p),C=C.add(R),b=V(b,T)}return new w(C,b)}t.B=function(b){return k(this,b).h},t.and=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<v;I++)_[I]=this.i(I)&b.i(I);return new o(_,this.h&b.h)},t.or=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<v;I++)_[I]=this.i(I)|b.i(I);return new o(_,this.h|b.h)},t.xor=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<v;I++)_[I]=this.i(I)^b.i(I);return new o(_,this.h^b.h)};function D(b){const v=b.g.length+1,_=[];for(let I=0;I<v;I++)_[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(_,b.h)}function F(b,v){const _=v>>5;v%=32;const I=b.g.length-_,C=[];for(let R=0;R<I;R++)C[R]=v>0?b.i(R+_)>>>v|b.i(R+_+1)<<32-v:b.i(R+_);return new o(C,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,_E=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Dr=o}).apply(typeof Bg<"u"?Bg:typeof self<"u"?self:typeof window<"u"?window:{});var ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yE,Ji,vE,La,th,EE,wE,TE;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof ba=="object"&&ba];for(var f=0;f<c.length;++f){var g=c[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var g=r;c=c.split(".");for(var y=0;y<c.length-1;y++){var M=c[y];if(!(M in g))break e;g=g[M]}c=c[c.length-1],y=g[c],f=f(y),f!=y&&f!=null&&e(g,c,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(f){var g=[],y;for(y in f)Object.prototype.hasOwnProperty.call(f,y)&&g.push([y,f[y]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function l(c,f,g){return c.call.apply(c.bind,arguments)}function u(c,f,g){return u=l,u.apply(null,arguments)}function h(c,f){var g=Array.prototype.slice.call(arguments,1);return function(){var y=g.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function d(c,f){function g(){}g.prototype=f.prototype,c.Z=f.prototype,c.prototype=new g,c.prototype.constructor=c,c.Ob=function(y,M,L){for(var Q=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)Q[_e-2]=arguments[_e];return f.prototype[M].apply(y,Q)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function m(c){const f=c.length;if(f>0){const g=Array(f);for(let y=0;y<f;y++)g[y]=c[y];return g}return[]}function E(c,f){for(let y=1;y<arguments.length;y++){const M=arguments[y];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=c.length||0;const L=M.length||0;c.length=g+L;for(let Q=0;Q<L;Q++)c[g+Q]=M[Q]}else c.push(M)}}class A{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function O(c){o.setTimeout(()=>{throw c},0)}function V(){var c=b;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class N{constructor(){this.h=this.g=null}add(f,g){const y=w.get();y.set(f,g),this.h?this.h.next=y:this.g=y,this.h=y}}var w=new A(()=>new k,c=>c.reset());class k{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let D,F=!1,b=new N,v=()=>{const c=Promise.resolve(void 0);D=()=>{c.then(_)}};function _(){for(var c;c=V();){try{c.h.call(c.g)}catch(g){O(g)}var f=w;f.j(c),f.h<100&&(f.h++,c.next=f.g,f.g=c)}F=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};o.addEventListener("test",g,f),o.removeEventListener("test",g,f)}catch{}return c})();function T(c){return/^[\s\xa0]*$/.test(c)}function le(c,f){C.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,f)}d(le,C),le.prototype.init=function(c,f){const g=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget,f||(g=="mouseover"?f=c.fromElement:g=="mouseout"&&(f=c.toElement)),this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&le.Z.h.call(this)},le.prototype.h=function(){le.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var me="closure_listenable_"+(Math.random()*1e6|0),Z=0;function se(c,f,g,y,M){this.listener=c,this.proxy=null,this.src=f,this.type=g,this.capture=!!y,this.ha=M,this.key=++Z,this.da=this.fa=!1}function te(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ne(c,f,g){for(const y in c)f.call(g,c[y],y,c)}function gn(c,f){for(const g in c)f.call(void 0,c[g],g,c)}function jt(c){const f={};for(const g in c)f[g]=c[g];return f}const lt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mn(c,f){let g,y;for(let M=1;M<arguments.length;M++){y=arguments[M];for(g in y)c[g]=y[g];for(let L=0;L<lt.length;L++)g=lt[L],Object.prototype.hasOwnProperty.call(y,g)&&(c[g]=y[g])}}function tn(c){this.src=c,this.g={},this.h=0}tn.prototype.add=function(c,f,g,y,M){const L=c.toString();c=this.g[L],c||(c=this.g[L]=[],this.h++);const Q=yt(c,f,y,M);return Q>-1?(f=c[Q],g||(f.fa=!1)):(f=new se(f,this.src,L,!!y,M),f.fa=g,c.push(f)),f};function ar(c,f){const g=f.type;if(g in c.g){var y=c.g[g],M=Array.prototype.indexOf.call(y,f,void 0),L;(L=M>=0)&&Array.prototype.splice.call(y,M,1),L&&(te(f),c.g[g].length==0&&(delete c.g[g],c.h--))}}function yt(c,f,g,y){for(let M=0;M<c.length;++M){const L=c[M];if(!L.da&&L.listener==f&&L.capture==!!g&&L.ha==y)return M}return-1}var $="closure_lm_"+(Math.random()*1e6|0),X={};function J(c,f,g,y,M){if(Array.isArray(f)){for(let L=0;L<f.length;L++)J(c,f[L],g,y,M);return null}return g=q(g),c&&c[me]?c.J(f,g,a(y)?!!y.capture:!1,M):re(c,f,g,!1,y,M)}function re(c,f,g,y,M,L){if(!f)throw Error("Invalid event type");const Q=a(M)?!!M.capture:!!M;let _e=B(c);if(_e||(c[$]=_e=new tn(c)),g=_e.add(f,g,y,Q,L),g.proxy)return g;if(y=be(),g.proxy=y,y.src=c,y.listener=g,c.addEventListener)R||(M=Q),M===void 0&&(M=!1),c.addEventListener(f.toString(),y,M);else if(c.attachEvent)c.attachEvent(P(f.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return g}function be(){function c(g){return f.call(c.src,c.listener,g)}const f=x;return c}function De(c,f,g,y,M){if(Array.isArray(f))for(var L=0;L<f.length;L++)De(c,f[L],g,y,M);else y=a(y)?!!y.capture:!!y,g=q(g),c&&c[me]?(c=c.i,L=String(f).toString(),L in c.g&&(f=c.g[L],g=yt(f,g,y,M),g>-1&&(te(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete c.g[L],c.h--)))):c&&(c=B(c))&&(f=c.g[f.toString()],c=-1,f&&(c=yt(f,g,y,M)),(g=c>-1?f[c]:null)&&S(g))}function S(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[me])ar(f.i,c);else{var g=c.type,y=c.proxy;f.removeEventListener?f.removeEventListener(g,y,c.capture):f.detachEvent?f.detachEvent(P(g),y):f.addListener&&f.removeListener&&f.removeListener(y),(g=B(f))?(ar(g,c),g.h==0&&(g.src=null,f[$]=null)):te(c)}}}function P(c){return c in X?X[c]:X[c]="on"+c}function x(c,f){if(c.da)c=!0;else{f=new le(f,this);const g=c.listener,y=c.ha||c.src;c.fa&&S(c),c=g.call(y,f)}return c}function B(c){return c=c[$],c instanceof tn?c:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function q(c){return typeof c=="function"?c:(c[U]||(c[U]=function(f){return c.handleEvent(f)}),c[U])}function K(){I.call(this),this.i=new tn(this),this.M=this,this.G=null}d(K,I),K.prototype[me]=!0,K.prototype.removeEventListener=function(c,f,g,y){De(this,c,f,g,y)};function W(c,f){var g,y=c.G;if(y)for(g=[];y;y=y.G)g.push(y);if(c=c.M,y=f.type||f,typeof f=="string")f=new C(f,c);else if(f instanceof C)f.target=f.target||c;else{var M=f;f=new C(y,c),Mn(f,M)}M=!0;let L,Q;if(g)for(Q=g.length-1;Q>=0;Q--)L=f.g=g[Q],M=G(L,y,!0,f)&&M;if(L=f.g=c,M=G(L,y,!0,f)&&M,M=G(L,y,!1,f)&&M,g)for(Q=0;Q<g.length;Q++)L=f.g=g[Q],M=G(L,y,!1,f)&&M}K.prototype.N=function(){if(K.Z.N.call(this),this.i){var c=this.i;for(const f in c.g){const g=c.g[f];for(let y=0;y<g.length;y++)te(g[y]);delete c.g[f],c.h--}}this.G=null},K.prototype.J=function(c,f,g,y){return this.i.add(String(c),f,!1,g,y)},K.prototype.K=function(c,f,g,y){return this.i.add(String(c),f,!0,g,y)};function G(c,f,g,y){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();let M=!0;for(let L=0;L<f.length;++L){const Q=f[L];if(Q&&!Q.da&&Q.capture==g){const _e=Q.listener,et=Q.ha||Q.src;Q.fa&&ar(c.i,Q),M=_e.call(et,y)!==!1&&M}}return M&&!y.defaultPrevented}function z(c,f){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(c,f||0)}function ae(c){c.g=z(()=>{c.g=null,c.i&&(c.i=!1,ae(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class Y extends I{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:ae(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ne(c){I.call(this),this.h=c,this.g={}}d(ne,I);var de=[];function ye(c){Ne(c.g,function(f,g){this.g.hasOwnProperty(g)&&S(f)},c),c.g={}}ne.prototype.N=function(){ne.Z.N.call(this),ye(this)},ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Re=o.JSON.stringify,Ae=o.JSON.parse,vt=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function Xe(){}function Nt(){}var Ze={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function xn(){C.call(this,"d")}d(xn,C);function Cs(){C.call(this,"c")}d(Cs,C);var Ke={},Bt=null;function zr(){return Bt=Bt||new K}Ke.Ia="serverreachability";function Ri(c){C.call(this,Ke.Ia,c)}d(Ri,C);function Ci(c){const f=zr();W(f,new Ri(f))}Ke.STAT_EVENT="statevent";function zf(c,f){C.call(this,Ke.STAT_EVENT,c),this.stat=f}d(zf,C);function Pt(c){const f=zr();W(f,new zf(f,c))}Ke.Ja="timingevent";function Kf(c,f){C.call(this,Ke.Ja,c),this.size=f}d(Kf,C);function Pi(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},f)}function ki(){this.g=!0}ki.prototype.ua=function(){this.g=!1};function dT(c,f,g,y,M,L){c.info(function(){if(c.g)if(L){var Q="",_e=L.split("&");for(let Ve=0;Ve<_e.length;Ve++){var et=_e[Ve].split("=");if(et.length>1){const it=et[0];et=et[1];const _n=it.split("_");Q=_n.length>=2&&_n[1]=="type"?Q+(it+"="+et+"&"):Q+(it+"=redacted&")}}}else Q=null;else Q=L;return"XMLHTTP REQ ("+y+") [attempt "+M+"]: "+f+`
`+g+`
`+Q})}function pT(c,f,g,y,M,L,Q){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+M+"]: "+f+`
`+g+`
`+L+" "+Q})}function Ps(c,f,g,y){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+mT(c,g)+(y?" "+y:"")})}function gT(c,f){c.info(function(){return"TIMEOUT: "+f})}ki.prototype.info=function(){};function mT(c,f){if(!c.g)return f;if(!f)return null;try{const L=JSON.parse(f);if(L){for(c=0;c<L.length;c++)if(Array.isArray(L[c])){var g=L[c];if(!(g.length<2)){var y=g[1];if(Array.isArray(y)&&!(y.length<1)){var M=y[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Q=1;Q<y.length;Q++)y[Q]=""}}}}return Re(L)}catch{return f}}var ta={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Qf;function gl(){}d(gl,Xe),gl.prototype.g=function(){return new XMLHttpRequest},Qf=new gl;function Oi(c){return encodeURIComponent(String(c))}function _T(c){var f=1;c=c.split(":");const g=[];for(;f>0&&c.length;)g.push(c.shift()),f--;return c.length&&g.push(c.join(":")),g}function cr(c,f,g,y){this.j=c,this.i=f,this.l=g,this.S=y||1,this.V=new ne(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Jf}function Jf(){this.i=null,this.g="",this.h=!1}var Yf={},ml={};function _l(c,f,g){c.M=1,c.A=ra(mn(f)),c.u=g,c.R=!0,Xf(c,null)}function Xf(c,f){c.F=Date.now(),na(c),c.B=mn(c.A);var g=c.B,y=c.S;Array.isArray(y)||(y=[String(y)]),hd(g.i,"t",y),c.C=0,g=c.j.L,c.h=new Jf,c.g=Pd(c.j,g?f:null,!c.u),c.P>0&&(c.O=new Y(u(c.Y,c,c.g),c.P)),f=c.V,g=c.g,y=c.ba;var M="readystatechange";Array.isArray(M)||(M&&(de[0]=M.toString()),M=de);for(let L=0;L<M.length;L++){const Q=J(g,M[L],y||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=c.J?jt(c.J):{},c.u?(c.v||(c.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,f)):(c.v="GET",c.g.ea(c.B,c.v,null,f)),Ci(),dT(c.i,c.v,c.B,c.l,c.S,c.u)}cr.prototype.ba=function(c){c=c.target;const f=this.O;f&&hr(c)==3?f.j():this.Y(c)},cr.prototype.Y=function(c){try{if(c==this.g)e:{const _e=hr(this.g),et=this.g.ya(),Ve=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||yd(this.g)))){this.K||_e!=4||et==7||(et==8||Ve<=0?Ci(3):Ci(2)),yl(this);var f=this.g.ca();this.X=f;var g=yT(this);if(this.o=f==200,pT(this.i,this.v,this.B,this.l,this.S,_e,f),this.o){if(this.U&&!this.L){t:{if(this.g){var y,M=this.g;if((y=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(y)){var L=y;break t}}L=null}if(c=L)Ps(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,vl(this,c);else{this.o=!1,this.m=3,Pt(12),Kr(this),Ni(this);break e}}if(this.R){c=!0;let it;for(;!this.K&&this.C<g.length;)if(it=vT(this,g),it==ml){_e==4&&(this.m=4,Pt(14),c=!1),Ps(this.i,this.l,null,"[Incomplete Response]");break}else if(it==Yf){this.m=4,Pt(15),Ps(this.i,this.l,g,"[Invalid Chunk]"),c=!1;break}else Ps(this.i,this.l,it,null),vl(this,it);if(Zf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||g.length!=0||this.h.h||(this.m=1,Pt(16),c=!1),this.o=this.o&&c,!c)Ps(this.i,this.l,g,"[Invalid Chunked Response]"),Kr(this),Ni(this);else if(g.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Rl(Q),Q.P=!0,Pt(11))}}else Ps(this.i,this.l,g,null),vl(this,g);_e==4&&Kr(this),this.o&&!this.K&&(_e==4?Ad(this.j,this):(this.o=!1,na(this)))}else DT(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,Pt(12)):(this.m=0,Pt(13)),Kr(this),Ni(this)}}}catch{}finally{}};function yT(c){if(!Zf(c))return c.g.la();const f=yd(c.g);if(f==="")return"";let g="";const y=f.length,M=hr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Kr(c),Ni(c),"";c.h.i=new o.TextDecoder}for(let L=0;L<y;L++)c.h.h=!0,g+=c.h.i.decode(f[L],{stream:!(M&&L==y-1)});return f.length=0,c.h.g+=g,c.C=0,c.h.g}function Zf(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function vT(c,f){var g=c.C,y=f.indexOf(`
`,g);return y==-1?ml:(g=Number(f.substring(g,y)),isNaN(g)?Yf:(y+=1,y+g>f.length?ml:(f=f.slice(y,y+g),c.C=y+g,f)))}cr.prototype.cancel=function(){this.K=!0,Kr(this)};function na(c){c.T=Date.now()+c.H,ed(c,c.H)}function ed(c,f){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Pi(u(c.aa,c),f)}function yl(c){c.D&&(o.clearTimeout(c.D),c.D=null)}cr.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(gT(this.i,this.B),this.M!=2&&(Ci(),Pt(17)),Kr(this),this.m=2,Ni(this)):ed(this,this.T-c)};function Ni(c){c.j.I==0||c.K||Ad(c.j,c)}function Kr(c){yl(c);var f=c.O;f&&typeof f.dispose=="function"&&f.dispose(),c.O=null,ye(c.V),c.g&&(f=c.g,c.g=null,f.abort(),f.dispose())}function vl(c,f){try{var g=c.j;if(g.I!=0&&(g.g==c||El(g.h,c))){if(!c.L&&El(g.h,c)&&g.I==3){try{var y=g.Ba.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var M=y;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<c.F)ca(g),oa(g);else break e;Sl(g),Pt(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Pi(u(g.Va,g),6e3));rd(g.h)<=1&&g.ta&&(g.ta=void 0)}else Qr(g,11)}else if((c.L||g.g==c)&&ca(g),!T(f))for(M=g.Ba.g.parse(f),f=0;f<M.length;f++){let Ve=M[f];const it=Ve[0];if(!(it<=g.K))if(g.K=it,Ve=Ve[1],g.I==2)if(Ve[0]=="c"){g.M=Ve[1],g.ba=Ve[2];const _n=Ve[3];_n!=null&&(g.ka=_n,g.j.info("VER="+g.ka));const Jr=Ve[4];Jr!=null&&(g.za=Jr,g.j.info("SVER="+g.za));const fr=Ve[5];fr!=null&&typeof fr=="number"&&fr>0&&(y=1.5*fr,g.O=y,g.j.info("backChannelRequestTimeoutMs_="+y)),y=g;const dr=c.g;if(dr){const ua=dr.g?dr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ua){var L=y.h;L.g||ua.indexOf("spdy")==-1&&ua.indexOf("quic")==-1&&ua.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(wl(L,L.h),L.h=null))}if(y.G){const Cl=dr.g?dr.g.getResponseHeader("X-HTTP-Session-Id"):null;Cl&&(y.wa=Cl,xe(y.J,y.G,Cl))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-c.F,g.j.info("Handshake RTT: "+g.T+"ms")),y=g;var Q=c;if(y.na=Cd(y,y.L?y.ba:null,y.W),Q.L){sd(y.h,Q);var _e=Q,et=y.O;et&&(_e.H=et),_e.D&&(yl(_e),na(_e)),y.g=Q}else Id(y);g.i.length>0&&aa(g)}else Ve[0]!="stop"&&Ve[0]!="close"||Qr(g,7);else g.I==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Qr(g,7):Al(g):Ve[0]!="noop"&&g.l&&g.l.qa(Ve),g.A=0)}}Ci(4)}catch{}}var ET=class{constructor(c,f){this.g=c,this.map=f}};function td(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function nd(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function rd(c){return c.h?1:c.g?c.g.size:0}function El(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function wl(c,f){c.g?c.g.add(f):c.h=f}function sd(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}td.prototype.cancel=function(){if(this.i=id(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function id(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const g of c.g.values())f=f.concat(g.G);return f}return m(c.i)}var od=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wT(c,f){if(c){c=c.split("&");for(let g=0;g<c.length;g++){const y=c[g].indexOf("=");let M,L=null;y>=0?(M=c[g].substring(0,y),L=c[g].substring(y+1)):M=c[g],f(M,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function lr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;c instanceof lr?(this.l=c.l,Di(this,c.j),this.o=c.o,this.g=c.g,Vi(this,c.u),this.h=c.h,Tl(this,fd(c.i)),this.m=c.m):c&&(f=String(c).match(od))?(this.l=!1,Di(this,f[1]||"",!0),this.o=Mi(f[2]||""),this.g=Mi(f[3]||"",!0),Vi(this,f[4]),this.h=Mi(f[5]||"",!0),Tl(this,f[6]||"",!0),this.m=Mi(f[7]||"")):(this.l=!1,this.i=new Li(null,this.l))}lr.prototype.toString=function(){const c=[];var f=this.j;f&&c.push(xi(f,ad,!0),":");var g=this.g;return(g||f=="file")&&(c.push("//"),(f=this.o)&&c.push(xi(f,ad,!0),"@"),c.push(Oi(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&c.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(xi(g,g.charAt(0)=="/"?bT:IT,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",xi(g,ST)),c.join("")},lr.prototype.resolve=function(c){const f=mn(this);let g=!!c.j;g?Di(f,c.j):g=!!c.o,g?f.o=c.o:g=!!c.g,g?f.g=c.g:g=c.u!=null;var y=c.h;if(g)Vi(f,c.u);else if(g=!!c.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var M=f.h.lastIndexOf("/");M!=-1&&(y=f.h.slice(0,M+1)+y)}if(M=y,M==".."||M==".")y="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){y=M.lastIndexOf("/",0)==0,M=M.split("/");const L=[];for(let Q=0;Q<M.length;){const _e=M[Q++];_e=="."?y&&Q==M.length&&L.push(""):_e==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),y&&Q==M.length&&L.push("")):(L.push(_e),y=!0)}y=L.join("/")}else y=M}return g?f.h=y:g=c.i.toString()!=="",g?Tl(f,fd(c.i)):g=!!c.m,g&&(f.m=c.m),f};function mn(c){return new lr(c)}function Di(c,f,g){c.j=g?Mi(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Vi(c,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);c.u=f}else c.u=null}function Tl(c,f,g){f instanceof Li?(c.i=f,RT(c.i,c.l)):(g||(f=xi(f,AT)),c.i=new Li(f,c.l))}function xe(c,f,g){c.i.set(f,g)}function ra(c){return xe(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Mi(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function xi(c,f,g){return typeof c=="string"?(c=encodeURI(c).replace(f,TT),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function TT(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ad=/[#\/\?@]/g,IT=/[#\?:]/g,bT=/[#\?]/g,AT=/[#\?@]/g,ST=/#/g;function Li(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function Gr(c){c.g||(c.g=new Map,c.h=0,c.i&&wT(c.i,function(f,g){c.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=Li.prototype,t.add=function(c,f){Gr(this),this.i=null,c=ks(this,c);let g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(f),this.h+=1,this};function cd(c,f){Gr(c),f=ks(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function ld(c,f){return Gr(c),f=ks(c,f),c.g.has(f)}t.forEach=function(c,f){Gr(this),this.g.forEach(function(g,y){g.forEach(function(M){c.call(f,M,y,this)},this)},this)};function ud(c,f){Gr(c);let g=[];if(typeof f=="string")ld(c,f)&&(g=g.concat(c.g.get(ks(c,f))));else for(c=Array.from(c.g.values()),f=0;f<c.length;f++)g=g.concat(c[f]);return g}t.set=function(c,f){return Gr(this),this.i=null,c=ks(this,c),ld(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=ud(this,c),c.length>0?String(c[0]):f):f};function hd(c,f,g){cd(c,f),g.length>0&&(c.i=null,c.g.set(ks(c,f),m(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(let y=0;y<f.length;y++){var g=f[y];const M=Oi(g);g=ud(this,g);for(let L=0;L<g.length;L++){let Q=M;g[L]!==""&&(Q+="="+Oi(g[L])),c.push(Q)}}return this.i=c.join("&")};function fd(c){const f=new Li;return f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),f}function ks(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function RT(c,f){f&&!c.j&&(Gr(c),c.i=null,c.g.forEach(function(g,y){const M=y.toLowerCase();y!=M&&(cd(this,y),hd(this,M,g))},c)),c.j=f}function CT(c,f){const g=new ki;if(o.Image){const y=new Image;y.onload=h(ur,g,"TestLoadImage: loaded",!0,f,y),y.onerror=h(ur,g,"TestLoadImage: error",!1,f,y),y.onabort=h(ur,g,"TestLoadImage: abort",!1,f,y),y.ontimeout=h(ur,g,"TestLoadImage: timeout",!1,f,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else f(!1)}function PT(c,f){const g=new ki,y=new AbortController,M=setTimeout(()=>{y.abort(),ur(g,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:y.signal}).then(L=>{clearTimeout(M),L.ok?ur(g,"TestPingServer: ok",!0,f):ur(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),ur(g,"TestPingServer: error",!1,f)})}function ur(c,f,g,y,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),y(g)}catch{}}function kT(){this.g=new vt}function Il(c){this.i=c.Sb||null,this.h=c.ab||!1}d(Il,Xe),Il.prototype.g=function(){return new sa(this.i,this.h)};function sa(c,f){K.call(this),this.H=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(sa,K),t=sa.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=f,this.readyState=1,Ui(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(f.body=c),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fi(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;dd(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function dd(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Fi(this):Ui(this),this.readyState==3&&dd(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,Fi(this))},t.Na=function(c){this.g&&(this.response=c,Fi(this))},t.ga=function(){this.g&&Fi(this)};function Fi(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Ui(c)}t.setRequestHeader=function(c,f){this.A.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=f.next();return c.join(`\r
`)};function Ui(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function pd(c){let f="";return Ne(c,function(g,y){f+=y,f+=":",f+=g,f+=`\r
`}),f}function bl(c,f,g){e:{for(y in g){var y=!1;break e}y=!0}y||(g=pd(g),typeof c=="string"?g!=null&&Oi(g):xe(c,f,g))}function qe(c){K.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(qe,K);var OT=/^https?$/i,NT=["POST","PUT"];t=qe.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,f,g,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Qf.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(L){gd(this,L);return}if(c=g||"",g=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var M in y)g.set(M,y[M]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())g.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),M=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(NT,f,void 0)>=0)||y||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,Q]of g)this.g.setRequestHeader(L,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(L){gd(this,L)}};function gd(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.o=5,md(c),ia(c)}function md(c){c.A||(c.A=!0,W(c,"complete"),W(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,W(this,"complete"),W(this,"abort"),ia(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ia(this,!0)),qe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?_d(this):this.Xa())},t.Xa=function(){_d(this)};function _d(c){if(c.h&&typeof i<"u"){if(c.v&&hr(c)==4)setTimeout(c.Ca.bind(c),0);else if(W(c,"readystatechange"),hr(c)==4){c.h=!1;try{const L=c.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var y;if(y=L===0){let Q=String(c.D).match(od)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),y=!OT.test(Q?Q.toLowerCase():"")}g=y}if(g)W(c,"complete"),W(c,"success");else{c.o=6;try{var M=hr(c)>2?c.g.statusText:""}catch{M=""}c.l=M+" ["+c.ca()+"]",md(c)}}finally{ia(c)}}}}function ia(c,f){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const g=c.g;c.g=null,f||W(c,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function hr(c){return c.g?c.g.readyState:0}t.ca=function(){try{return hr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Ae(f)}};function yd(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function DT(c){const f={};c=(c.g&&hr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(T(c[y]))continue;var g=_T(c[y]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=f[M]||[];f[M]=L,L.push(g)}gn(f,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $i(c,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||f}function vd(c){this.za=0,this.i=[],this.j=new ki,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$i("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$i("baseRetryDelayMs",5e3,c),this.Za=$i("retryDelaySeedMs",1e4,c),this.Ta=$i("forwardChannelMaxRetries",2,c),this.va=$i("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new td(c&&c.concurrentRequestLimit),this.Ba=new kT,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=vd.prototype,t.ka=8,t.I=1,t.connect=function(c,f,g,y){Pt(0),this.W=c,this.H=f||{},g&&y!==void 0&&(this.H.OSID=g,this.H.OAID=y),this.F=this.X,this.J=Cd(this,null,this.W),aa(this)};function Al(c){if(Ed(c),c.I==3){var f=c.V++,g=mn(c.J);if(xe(g,"SID",c.M),xe(g,"RID",f),xe(g,"TYPE","terminate"),ji(c,g),f=new cr(c,c.j,f),f.M=2,f.A=ra(mn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=f.A,g=!0),g||(f.g=Pd(f.j,null),f.g.ea(f.A)),f.F=Date.now(),na(f)}Rd(c)}function oa(c){c.g&&(Rl(c),c.g.cancel(),c.g=null)}function Ed(c){oa(c),c.v&&(o.clearTimeout(c.v),c.v=null),ca(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function aa(c){if(!nd(c.h)&&!c.m){c.m=!0;var f=c.Ea;D||v(),F||(D(),F=!0),b.add(f,c),c.D=0}}function VT(c,f){return rd(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=f.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Pi(u(c.Ea,c,f),Sd(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const M=new cr(this,this.j,c);let L=this.o;if(this.U&&(L?(L=jt(L),Mn(L,this.U)):L=this.U),this.u!==null||this.R||(M.J=L,L=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var y=this.i[g];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Td(this,M,f),g=mn(this.J),xe(g,"RID",c),xe(g,"CVER",22),this.G&&xe(g,"X-HTTP-Session-Id",this.G),ji(this,g),L&&(this.R?f="headers="+Oi(pd(L))+"&"+f:this.u&&bl(g,this.u,L)),wl(this.h,M),this.Ra&&xe(g,"TYPE","init"),this.S?(xe(g,"$req",f),xe(g,"SID","null"),M.U=!0,_l(M,g,null)):_l(M,g,f),this.I=2}}else this.I==3&&(c?wd(this,c):this.i.length==0||nd(this.h)||wd(this))};function wd(c,f){var g;f?g=f.l:g=c.V++;const y=mn(c.J);xe(y,"SID",c.M),xe(y,"RID",g),xe(y,"AID",c.K),ji(c,y),c.u&&c.o&&bl(y,c.u,c.o),g=new cr(c,c.j,g,c.D+1),c.u===null&&(g.J=c.o),f&&(c.i=f.G.concat(c.i)),f=Td(c,g,1e3),g.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),wl(c.h,g),_l(g,y,f)}function ji(c,f){c.H&&Ne(c.H,function(g,y){xe(f,y,g)}),c.l&&Ne({},function(g,y){xe(f,y,g)})}function Td(c,f,g){g=Math.min(c.i.length,g);const y=c.l?u(c.l.Ka,c.l,c):null;e:{var M=c.i;let _e=-1;for(;;){const et=["count="+g];_e==-1?g>0?(_e=M[0].g,et.push("ofs="+_e)):_e=0:et.push("ofs="+_e);let Ve=!0;for(let it=0;it<g;it++){var L=M[it].g;const _n=M[it].map;if(L-=_e,L<0)_e=Math.max(0,M[it].g-100),Ve=!1;else try{L="req"+L+"_"||"";try{var Q=_n instanceof Map?_n:Object.entries(_n);for(const[Jr,fr]of Q){let dr=fr;a(fr)&&(dr=Re(fr)),et.push(L+Jr+"="+encodeURIComponent(dr))}}catch(Jr){throw et.push(L+"type="+encodeURIComponent("_badmap")),Jr}}catch{y&&y(_n)}}if(Ve){Q=et.join("&");break e}}Q=void 0}return c=c.i.splice(0,g),f.G=c,Q}function Id(c){if(!c.g&&!c.v){c.Y=1;var f=c.Da;D||v(),F||(D(),F=!0),b.add(f,c),c.A=0}}function Sl(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Pi(u(c.Da,c),Sd(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,bd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Pi(u(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Pt(10),oa(this),bd(this))};function Rl(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function bd(c){c.g=new cr(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var f=mn(c.na);xe(f,"RID","rpc"),xe(f,"SID",c.M),xe(f,"AID",c.K),xe(f,"CI",c.F?"0":"1"),!c.F&&c.ia&&xe(f,"TO",c.ia),xe(f,"TYPE","xmlhttp"),ji(c,f),c.u&&c.o&&bl(f,c.u,c.o),c.O&&(c.g.H=c.O);var g=c.g;c=c.ba,g.M=1,g.A=ra(mn(f)),g.u=null,g.R=!0,Xf(g,c)}t.Va=function(){this.C!=null&&(this.C=null,oa(this),Sl(this),Pt(19))};function ca(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Ad(c,f){var g=null;if(c.g==f){ca(c),Rl(c),c.g=null;var y=2}else if(El(c.h,f))g=f.G,sd(c.h,f),y=1;else return;if(c.I!=0){if(f.o)if(y==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var M=c.D;y=zr(),W(y,new Kf(y,g)),aa(c)}else Id(c);else if(M=f.m,M==3||M==0&&f.X>0||!(y==1&&VT(c,f)||y==2&&Sl(c)))switch(g&&g.length>0&&(f=c.h,f.i=f.i.concat(g)),M){case 1:Qr(c,5);break;case 4:Qr(c,10);break;case 3:Qr(c,6);break;default:Qr(c,2)}}}function Sd(c,f){let g=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(g*=2),g*f}function Qr(c,f){if(c.j.info("Error code "+f),f==2){var g=u(c.bb,c),y=c.Ua;const M=!y;y=new lr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Di(y,"https"),ra(y),M?CT(y.toString(),g):PT(y.toString(),g)}else Pt(2);c.I=0,c.l&&c.l.pa(f),Rd(c),Ed(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Rd(c){if(c.I=0,c.ja=[],c.l){const f=id(c.h);(f.length!=0||c.i.length!=0)&&(E(c.ja,f),E(c.ja,c.i),c.h.i.length=0,m(c.i),c.i.length=0),c.l.oa()}}function Cd(c,f,g){var y=g instanceof lr?mn(g):new lr(g);if(y.g!="")f&&(y.g=f+"."+y.g),Vi(y,y.u);else{var M=o.location;y=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;const L=new lr(null);y&&Di(L,y),f&&(L.g=f),M&&Vi(L,M),g&&(L.h=g),y=L}return g=c.G,f=c.wa,g&&f&&xe(y,g,f),xe(y,"VER",c.ka),ji(c,y),y}function Pd(c,f,g){if(f&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Aa&&!c.ma?new qe(new Il({ab:g})):new qe(c.ma),f.Fa(c.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kd(){}t=kd.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function la(){}la.prototype.g=function(c,f){return new Ht(c,f)};function Ht(c,f){K.call(this),this.g=new vd(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(c?c["X-WebChannel-Client-Profile"]=f.sa:c={"X-WebChannel-Client-Profile":f.sa}),this.g.U=c,(c=f&&f.Qb)&&!T(c)&&(this.g.u=c),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!T(f)&&(this.g.G=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Os(this)}d(Ht,K),Ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Al(this.g)},Ht.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.v&&(g={},g.__data__=Re(c),c=g);f.i.push(new ET(f.Ya++,c)),f.I==3&&aa(f)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Al(this.g),delete this.g,Ht.Z.N.call(this)};function Od(c){xn.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const g in f){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}d(Od,xn);function Nd(){Cs.call(this),this.status=1}d(Nd,Cs);function Os(c){this.g=c}d(Os,kd),Os.prototype.ra=function(){W(this.g,"a")},Os.prototype.qa=function(c){W(this.g,new Od(c))},Os.prototype.pa=function(c){W(this.g,new Nd)},Os.prototype.oa=function(){W(this.g,"b")},la.prototype.createWebChannel=la.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,TE=function(){return new la},wE=function(){return zr()},EE=Ke,th={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ta.NO_ERROR=0,ta.TIMEOUT=8,ta.HTTP_ERROR=6,La=ta,Gf.COMPLETE="complete",vE=Gf,Nt.EventType=Ze,Ze.OPEN="a",Ze.CLOSE="b",Ze.ERROR="c",Ze.MESSAGE="d",K.prototype.listen=K.prototype.J,Ji=Nt,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,yE=qe}).apply(typeof ba<"u"?ba:typeof self<"u"?self:typeof window<"u"?window:{});const Hg="@firebase/firestore",qg="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Kc("@firebase/firestore");function Ls(){return ys.logLevel}function ee(t,...e){if(ys.logLevel<=ve.DEBUG){const n=e.map(lf);ys.debug(`Firestore (${Ii}): ${t}`,...n)}}function rr(t,...e){if(ys.logLevel<=ve.ERROR){const n=e.map(lf);ys.error(`Firestore (${Ii}): ${t}`,...n)}}function li(t,...e){if(ys.logLevel<=ve.WARN){const n=e.map(lf);ys.warn(`Firestore (${Ii}): ${t}`,...n)}}function lf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,IE(t,r,n)}function IE(t,e,n){let r=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw rr(r),new Error(r)}function ke(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||IE(e,s,r)}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Tt.UNAUTHENTICATED)))}shutdown(){}}class NO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class DO{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},a=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string",31837,{l:r}),new bE(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string",2055,{h:e}),new Tt(e)}}class VO{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class MO{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new VO(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Tt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xO{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ke(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ke(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wg(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=LO(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function nh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return ou(s)===ou(i)?Ee(s,i):ou(s)?1:-1}return Ee(t.length,e.length)}const FO=55296,UO=57343;function ou(t){const e=t.charCodeAt(0);return e>=FO&&e<=UO}function ui(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="__name__";class En{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&fe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return En.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof En?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=En.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ee(e.length,n.length)}static compareSegments(e,n){const r=En.isNumericId(e),s=En.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?En.extractNumericId(e).compare(En.extractNumericId(n)):nh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class Fe extends En{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Fe(n)}static emptyPath(){return new Fe([])}}const $O=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends En{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return $O.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zg}static keyField(){return new gt([zg])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Fe.fromString(e))}static fromName(e){return new ce(Fe.fromString(e).popFirst(5))}static empty(){return new ce(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Fe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(t,e,n){if(!n)throw new ie(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BO(t,e,n,r){if(e===!0&&r===!0)throw new ie(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kg(t){if(!ce.isDocumentKey(t))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function AE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function hf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe(12329,{type:typeof t})}function vs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hf(t);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function Jo(t,e){if(!AE(t))throw new ie(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ie(H.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=-62135596800,Qg=1e6;class Le{static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Qg);return new Le(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Gg)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qg}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Jo(e,Le._jsonSchema))return new Le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Gg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Le._jsonSchemaVersion="firestore/timestamp/1.0",Le._jsonSchema={type:Ye("string",Le._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Le(0,0))}static max(){return new pe(new Le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=-1;function HO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Mr(s,ce.empty(),e)}function qO(t){return new Mr(t.readTime,t.key,Oo)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(pe.min(),ce.empty(),Oo)}static max(){return new Mr(pe.max(),ce.empty(),Oo)}}function WO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==zO)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):j.reject(n)}static resolve(e){return new j(((n,r)=>{n(e)}))}static reject(e){return new j(((n,r)=>{r(e)}))}static waitFor(e){return new j(((n,r)=>{let s=0,i=0,o=!1;e.forEach((a=>{++s,a.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next((s=>s?j.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new j(((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((h=>{o[u]=h,++a,a===i&&r(o)}),(h=>s(h)))}}))}static doWhile(e,n){return new j(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function GO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Yc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=-1;function Xc(t){return t==null}function pc(t){return t===0&&1/t==-1/0}function QO(t){return typeof t=="number"&&Number.isInteger(t)&&!pc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="";function JO(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Jg(e)),e=YO(t.get(n),e);return Jg(e)}function YO(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case SE:n+="";break;default:n+=i}}return n}function Jg(t){return t+SE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function RE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Aa(this.root,e,this.comparator,!0)}}class Aa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=i??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ft(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xg(this.data.getIterator())}getIteratorFrom(e){return new Xg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class Xg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new zt([])}unionWith(e){let n=new rt(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ui(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new CE("Invalid base64 string: "+i):i}})(e);return new _t(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const XO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if(ke(!!t,39018),typeof t=="string"){let e=0;const n=XO.exec(t);if(ke(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="server_timestamp",kE="__type__",OE="__previous_value__",NE="__local_write_time__";function df(t){return(t?.mapValue?.fields||{})[kE]?.stringValue===PE}function Zc(t){const e=t.mapValue.fields[OE];return df(e)?Zc(e):e}function No(t){const e=xr(t.mapValue.fields[NE].timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,n,r,s,i,o,a,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h}}const gc="(default)";class Do{constructor(e,n){this.projectId=e,this.database=n||gc}static empty(){return new Do("","")}get isDefaultDatabase(){return this.database===gc}isEqual(e){return e instanceof Do&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="__type__",eN="__max__",Sa={mapValue:{}},VE="__vector__",mc="value";function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?df(t)?4:nN(t)?9007199254740991:tN(t)?10:11:fe(28295,{value:t})}function Nn(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return No(t).isEqual(No(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=xr(s.timestampValue),a=xr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Lr(s.bytesValue).isEqual(Lr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),a=Ge(i.doubleValue);return o===a?pc(o)===pc(a):isNaN(o)&&isNaN(a)}return!1})(t,e);case 9:return ui(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Yg(o)!==Yg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Nn(o[l],a[l])))return!1;return!0})(t,e);default:return fe(52216,{left:t})}}function Vo(t,e){return(t.values||[]).find((n=>Nn(n,e)))!==void 0}function hi(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=Ge(i.integerValue||i.doubleValue),l=Ge(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(t,e);case 3:return Zg(t.timestampValue,e.timestampValue);case 4:return Zg(No(t),No(e));case 5:return nh(t.stringValue,e.stringValue);case 6:return(function(i,o){const a=Lr(i),l=Lr(o);return a.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Ee(a[u],l[u]);if(h!==0)return h}return Ee(a.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=Ee(Ge(i.latitude),Ge(o.latitude));return a!==0?a:Ee(Ge(i.longitude),Ge(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return em(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const a=i.fields||{},l=o.fields||{},u=a[mc]?.arrayValue,h=l[mc]?.arrayValue,d=Ee(u?.values?.length||0,h?.values?.length||0);return d!==0?d:em(u,h)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Sa.mapValue&&o===Sa.mapValue)return 0;if(i===Sa.mapValue)return 1;if(o===Sa.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=nh(l[d],h[d]);if(p!==0)return p;const m=hi(a[l[d]],u[h[d]]);if(m!==0)return m}return Ee(l.length,h.length)})(t.mapValue,e.mapValue);default:throw fe(23264,{he:n})}}function Zg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=xr(t),r=xr(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function em(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=hi(n[s],r[s]);if(i)return i}return Ee(n.length,r.length)}function fi(t){return rh(t)}function rh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=xr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Lr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ce.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=rh(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${rh(n.fields[o])}`;return s+"}"})(t.mapValue):fe(61005,{value:t})}function Fa(t){switch(Fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zc(t);return e?16+Fa(e):16;case 5:return 2*t.stringValue.length;case 6:return Lr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Fa(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return qr(r.fields,((i,o)=>{s+=i.length+Fa(o)})),s})(t.mapValue);default:throw fe(13486,{value:t})}}function sh(t){return!!t&&"integerValue"in t}function pf(t){return!!t&&"arrayValue"in t}function tm(t){return!!t&&"nullValue"in t}function nm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ua(t){return!!t&&"mapValue"in t}function tN(t){return(t?.mapValue?.fields||{})[DE]?.stringValue===VE}function ho(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return qr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=ho(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ho(t.arrayValue.values[n]);return e}return{...t}}function nN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===eN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ua(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ho(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach(((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ho(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ua(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ua(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){qr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new xt(ho(this.value))}}function ME(t){const e=[];return qr(t.fields,((n,r)=>{const s=new gt([n]);if(Ua(r)){const i=ME(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new At(e,0,pe.min(),pe.min(),pe.min(),xt.empty(),0)}static newFoundDocument(e,n,r,s){return new At(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new At(e,2,n,pe.min(),pe.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,pe.min(),pe.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n){this.position=e,this.inclusive=n}}function rm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=hi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function sm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n="asc"){this.field=e,this.dir=n}}function rN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{}class tt extends xE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new iN(e,n,r):n==="array-contains"?new cN(e,r):n==="in"?new lN(e,r):n==="not-in"?new uN(e,r):n==="array-contains-any"?new hN(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oN(e,r):new aN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(hi(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(hi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends xE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Dn(e,n)}matches(e){return LE(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function LE(t){return t.op==="and"}function FE(t){return sN(t)&&LE(t)}function sN(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function ih(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+fi(t.value);if(FE(t))return t.filters.map((e=>ih(e))).join(",");{const e=t.filters.map((n=>ih(n))).join(",");return`${t.op}(${e})`}}function UE(t,e){return t instanceof tt?(function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&Nn(r.value,s.value)})(t,e):t instanceof Dn?(function(r,s){return s instanceof Dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,a)=>i&&UE(o,s.filters[a])),!0):!1})(t,e):void fe(19439)}function $E(t){return t instanceof tt?(function(n){return`${n.field.canonicalString()} ${n.op} ${fi(n.value)}`})(t):t instanceof Dn?(function(n){return n.op.toString()+" {"+n.getFilters().map($E).join(" ,")+"}"})(t):"Filter"}class iN extends tt{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class oN extends tt{constructor(e,n){super(e,"in",n),this.keys=jE("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class aN extends tt{constructor(e,n){super(e,"not-in",n),this.keys=jE("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function jE(t,e){return(e.arrayValue?.values||[]).map((n=>ce.fromName(n.referenceValue)))}class cN extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pf(n)&&Vo(n.arrayValue,this.value)}}class lN extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vo(this.value.arrayValue,n)}}class uN extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Vo(this.value.arrayValue,n)}}class hN extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pf(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Vo(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function im(t,e=null,n=[],r=[],s=null,i=null,o=null){return new fN(t,e,n,r,s,i,o)}function gf(t){const e=ge(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>ih(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>fi(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>fi(r))).join(",")),e.Te=n}return e.Te}function mf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!UE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sm(t.startAt,e.startAt)&&sm(t.endAt,e.endAt)}function oh(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function dN(t,e,n,r,s,i,o,a){return new el(t,e,n,r,s,i,o,a)}function _f(t){return new el(t)}function om(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pN(t){return t.collectionGroup!==null}function fo(t){const e=ge(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new rt(gt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new yc(i,r))})),n.has(gt.keyField().canonicalString())||e.Ie.push(new yc(gt.keyField(),r))}return e.Ie}function An(t){const e=ge(t);return e.Ee||(e.Ee=gN(e,fo(t))),e.Ee}function gN(t,e){if(t.limitType==="F")return im(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new yc(s.field,i)}));const n=t.endAt?new _c(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _c(t.startAt.position,t.startAt.inclusive):null;return im(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ah(t,e,n){return new el(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tl(t,e){return mf(An(t),An(e))&&t.limitType===e.limitType}function BE(t){return`${gf(An(t))}|lt:${t.limitType}`}function Fs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>$E(s))).join(", ")}]`),Xc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>fi(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>fi(s))).join(",")),`Target(${r})`})(An(t))}; limitType=${t.limitType})`}function nl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of fo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,a,l){const u=rm(o,a,l);return o.inclusive?u<=0:u<0})(r.startAt,fo(r),s)||r.endAt&&!(function(o,a,l){const u=rm(o,a,l);return o.inclusive?u>=0:u>0})(r.endAt,fo(r),s))})(t,e)}function mN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function HE(t){return(e,n)=>{let r=!1;for(const s of fo(t)){const i=_N(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _N(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):(function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?hi(l,u):fe(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return RE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=new He(ce.comparator);function sr(){return yN}const qE=new He(ce.comparator);function Yi(...t){let e=qE;for(const n of t)e=e.insert(n.key,n);return e}function WE(t){let e=qE;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function ss(){return po()}function zE(){return po()}function po(){return new Ss((t=>t.toString()),((t,e)=>t.isEqual(e)))}const vN=new He(ce.comparator),EN=new rt(ce.comparator);function we(...t){let e=EN;for(const n of t)e=e.add(n);return e}const wN=new rt(Ee);function TN(){return wN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pc(e)?"-0":e}}function KE(t){return{integerValue:""+t}}function IN(t,e){return QO(e)?KE(e):yf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this._=void 0}}function bN(t,e,n){return t instanceof vc?(function(s,i){const o={fields:{[kE]:{stringValue:PE},[NE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&df(i)&&(i=Zc(i)),i&&(o.fields[OE]=i),{mapValue:o}})(n,e):t instanceof Mo?QE(t,e):t instanceof xo?JE(t,e):(function(s,i){const o=GE(s,i),a=am(o)+am(s.Ae);return sh(o)&&sh(s.Ae)?KE(a):yf(s.serializer,a)})(t,e)}function AN(t,e,n){return t instanceof Mo?QE(t,e):t instanceof xo?JE(t,e):n}function GE(t,e){return t instanceof Ec?(function(r){return sh(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class vc extends rl{}class Mo extends rl{constructor(e){super(),this.elements=e}}function QE(t,e){const n=YE(e);for(const r of t.elements)n.some((s=>Nn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class xo extends rl{constructor(e){super(),this.elements=e}}function JE(t,e){let n=YE(e);for(const r of t.elements)n=n.filter((s=>!Nn(s,r)));return{arrayValue:{values:n}}}class Ec extends rl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function am(t){return Ge(t.integerValue||t.doubleValue)}function YE(t){return pf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function SN(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Mo&&s instanceof Mo||r instanceof xo&&s instanceof xo?ui(r.elements,s.elements,Nn):r instanceof Ec&&s instanceof Ec?Nn(r.Ae,s.Ae):r instanceof vc&&s instanceof vc})(t.transform,e.transform)}class RN{constructor(e,n){this.version=e,this.transformResults=n}}class Sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Sn}static exists(e){return new Sn(void 0,e)}static updateTime(e){return new Sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $a(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sl{}function XE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ew(t.key,Sn.none()):new Yo(t.key,t.data,Sn.none());{const n=t.data,r=xt.empty();let s=new rt(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Wr(t.key,r,new zt(s.toArray()),Sn.none())}}function CN(t,e,n){t instanceof Yo?(function(s,i,o){const a=s.value.clone(),l=lm(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(t,e,n):t instanceof Wr?(function(s,i,o){if(!$a(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=lm(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(ZE(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function go(t,e,n,r){return t instanceof Yo?(function(i,o,a,l){if(!$a(i.precondition,o))return a;const u=i.value.clone(),h=um(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Wr?(function(i,o,a,l){if(!$a(i.precondition,o))return a;const u=um(i.fieldTransforms,l,o),h=o.data;return h.setAll(ZE(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((d=>d.field)))})(t,e,n,r):(function(i,o,a){return $a(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(t,e,n)}function PN(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=GE(r.transform,s||null);i!=null&&(n===null&&(n=xt.empty()),n.set(r.field,i))}return n||null}function cm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ui(r,s,((i,o)=>SN(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yo extends sl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wr extends sl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ZE(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function lm(t,e,n){const r=new Map;ke(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,AN(o,a,n[s]))}return r}function um(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,bN(i,o,e))}return r}class ew extends sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kN extends sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&CN(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zE();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=XE(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),we())}isEqual(e){return this.batchId===e.batchId&&ui(this.mutations,e.mutations,((n,r)=>cm(n,r)))&&ui(this.baseMutations,e.baseMutations,((n,r)=>cm(n,r)))}}class vf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return vN})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Te;function VN(t){switch(t){case H.OK:return fe(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return fe(15467,{code:t})}}function tw(t){if(t===void 0)return rr("GRPC error has no .code"),H.UNKNOWN;switch(t){case Qe.OK:return H.OK;case Qe.CANCELLED:return H.CANCELLED;case Qe.UNKNOWN:return H.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return H.INTERNAL;case Qe.UNAVAILABLE:return H.UNAVAILABLE;case Qe.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Qe.NOT_FOUND:return H.NOT_FOUND;case Qe.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Qe.ABORTED:return H.ABORTED;case Qe.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Qe.DATA_LOSS:return H.DATA_LOSS;default:return fe(39323,{code:t})}}(Te=Qe||(Qe={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=new Dr([4294967295,4294967295],0);function hm(t){const e=MN().encode(t),n=new _E;return n.update(e),new Uint8Array(n.digest())}function fm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([s,i],0)]}class Ef{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xi(`Invalid padding: ${n}`);if(r<0)throw new Xi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Dr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Dr.fromNumber(r)));return s.compare(xN)===1&&(s=new Dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=hm(e),[r,s]=fm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ef(i,s,n);return r.forEach((a=>o.insert(a))),o}insert(e){if(this.ge===0)return;const n=hm(e),[r,s]=fm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new il(pe.min(),s,new He(Ee),sr(),we())}}class Xo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xo(r,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class nw{constructor(e,n){this.targetId=e,this.Ce=n}}class rw{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class dm{constructor(){this.ve=0,this.Fe=pm(),this.Me=_t.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=we(),n=we(),r=we();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe(38017,{changeType:i})}})),new Xo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=pm()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ke(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class LN{constructor(e){this.Ge=e,this.ze=new Map,this.je=sr(),this.Je=Ra(),this.He=Ra(),this.Ye=new He(Ee)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(oh(i))if(r===0){const o=new ce(i.path);this.et(n,o,At.newNoDocument(o,pe.min()))}else ke(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Lr(r).toUint8Array()}catch(l){if(l instanceof CE)return li("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ef(o,s,i)}catch(l){return li(l instanceof Xi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const a=this.ot(o);if(a){if(i.current&&oh(a.target)){const l=new ce(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,At.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=we();this.He.forEach(((i,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new il(e,n,this.Ye,this.je,r);return this.je=sr(),this.Je=Ra(),this.He=Ra(),this.Ye=new He(Ee),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new dm,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new rt(Ee),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new rt(Ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new dm),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ra(){return new He(ce.comparator)}function pm(){return new He(ce.comparator)}const FN={asc:"ASCENDING",desc:"DESCENDING"},UN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$N={and:"AND",or:"OR"};class jN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ch(t,e){return t.useProto3Json||Xc(e)?e:{value:e}}function wc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function BN(t,e){return wc(t,e.toTimestamp())}function Rn(t){return ke(!!t,49232),pe.fromTimestamp((function(n){const r=xr(n);return new Le(r.seconds,r.nanos)})(t))}function wf(t,e){return lh(t,e).canonicalString()}function lh(t,e){const n=(function(s){return new Fe(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function iw(t){const e=Fe.fromString(t);return ke(uw(e),10190,{key:e.toString()}),e}function uh(t,e){return wf(t.databaseId,e.path)}function au(t,e){const n=iw(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(aw(n))}function ow(t,e){return wf(t.databaseId,e)}function HN(t){const e=iw(t);return e.length===4?Fe.emptyPath():aw(e)}function hh(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aw(t){return ke(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function gm(t,e,n){return{name:uh(t,e),fields:n.value.mapValue.fields}}function qN(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(ke(h===void 0||typeof h=="string",58123),_t.fromBase64String(h||"")):(ke(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),_t.fromUint8Array(h||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?H.UNKNOWN:tw(u.code);return new ie(h,u.message||"")})(o);n=new rw(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=au(t,r.document.name),i=Rn(r.document.updateTime),o=r.document.createTime?Rn(r.document.createTime):pe.min(),a=new xt({mapValue:{fields:r.document.fields}}),l=At.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new ja(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=au(t,r.document),i=r.readTime?Rn(r.readTime):pe.min(),o=At.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ja([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=au(t,r.document),i=r.removedTargetIds||[];n=new ja([],i,s,null)}else{if(!("filter"in e))return fe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new DN(s,i),a=r.targetId;n=new nw(a,o)}}return n}function WN(t,e){let n;if(e instanceof Yo)n={update:gm(t,e.key,e.value)};else if(e instanceof ew)n={delete:uh(t,e.key)};else if(e instanceof Wr)n={update:gm(t,e.key,e.data),updateMask:eD(e.fieldMask)};else{if(!(e instanceof kN))return fe(16599,{Vt:e.type});n={verify:uh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const a=o.transform;if(a instanceof vc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Mo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ec)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw fe(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:BN(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe(27497)})(t,e.precondition)),n}function zN(t,e){return t&&t.length>0?(ke(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Rn(s.updateTime):Rn(i);return o.isEqual(pe.min())&&(o=Rn(i)),new RN(o,s.transformResults||[])})(n,e)))):[]}function KN(t,e){return{documents:[ow(t,e.path)]}}function GN(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ow(t,s);const i=(function(u){if(u.length!==0)return lw(Dn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(p){return{field:Us(p.field),direction:YN(p.dir)}})(h)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ch(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function QN(t){let e=HN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=(function(d){const p=cw(d);return p instanceof Dn&&FE(p)?p.getFilters():[p]})(n.where));let o=[];n.orderBy&&(o=(function(d){return d.map((p=>(function(E){return new yc($s(E.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(E.direction))})(p)))})(n.orderBy));let a=null;n.limit&&(a=(function(d){let p;return p=typeof d=="object"?d.value:d,Xc(p)?null:p})(n.limit));let l=null;n.startAt&&(l=(function(d){const p=!!d.before,m=d.values||[];return new _c(m,p)})(n.startAt));let u=null;return n.endAt&&(u=(function(d){const p=!d.before,m=d.values||[];return new _c(m,p)})(n.endAt)),dN(e,s,o,i,a,"F",l,u)}function JN(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function cw(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$s(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$s(n.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$s(n.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$s(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return tt.create($s(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Dn.create(n.compositeFilter.filters.map((r=>cw(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(n.compositeFilter.op))})(t):fe(30097,{filter:t})}function YN(t){return FN[t]}function XN(t){return UN[t]}function ZN(t){return $N[t]}function Us(t){return{fieldPath:t.canonicalString()}}function $s(t){return gt.fromServerFormat(t.fieldPath)}function lw(t){return t instanceof tt?(function(n){if(n.op==="=="){if(nm(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NAN"}};if(tm(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(nm(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NAN"}};if(tm(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(n.field),op:XN(n.op),value:n.value}}})(t):t instanceof Dn?(function(n){const r=n.getFilters().map((s=>lw(s)));return r.length===1?r[0]:{compositeFilter:{op:ZN(n.op),filters:r}}})(t):fe(54877,{filter:t})}function eD(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function uw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),a=_t.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e){this.yt=e}}function nD(t){const e=QN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ah(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this.Cn=new sD}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Mr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class sD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hw=41943040;class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(hw,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new di(0)}static cr(){return new di(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="LruGarbageCollector",iD=1048576;function ym([t,e],[n,r]){const s=Ee(t,n);return s===0?Ee(e,r):s}class oD{constructor(e){this.Ir=e,this.buffer=new rt(ym),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ym(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class aD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(_m,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ai(n)?ee(_m,"Ignoring IndexedDB error during garbage collection: ",n):await bi(n)}await this.Vr(3e5)}))}}class cD{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Yc.ce);const r=new oD(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(mm)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mm):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s)))).next((d=>(r=d,a=Date.now(),this.removeTargets(e,r,n)))).next((d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((d=>(u=Date.now(),Ls()<=ve.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d}))))}}function lD(t,e){return new cD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(){this.changes=new Ss((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&go(r.mutation,s,zt.empty(),Le.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,we()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=we()){const s=ss();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Yi();return i.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=ss();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,we())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,a)=>{n.set(o,a)}))}))}computeViews(e,n,r,s){let i=sr();const o=po(),a=(function(){return po()})();return n.forEach(((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Wr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),go(h.mutation,u,h.mutation.getFieldMask(),Le.now())):o.set(u.key,zt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,h)=>o.set(u,h))),n.forEach(((u,h)=>a.set(u,new hD(h,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,n){const r=po();let s=new He(((o,a)=>o-a)),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||zt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||we()).add(l);s=s.insert(a.batchId,d)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=zE();h.forEach((p=>{if(!i.has(p)){const m=XE(n.get(p),r.get(p));m!==null&&d.set(p,m),i=i.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return j.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(ss());let a=Oo,l=i;return o.next((u=>j.forEach(u,((h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next((p=>{l=l.insert(h,p)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,we()))).next((h=>({batchId:a,changes:WE(h)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next((r=>{let s=Yi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Yi();return this.indexManager.getCollectionParents(e,i).next((a=>j.forEach(a,(l=>{const u=(function(d,p){return new el(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((h=>{h.forEach(((d,p)=>{o=o.insert(d,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,At.newInvalidDocument(h)))}));let a=Yi();return o.forEach(((l,u)=>{const h=i.get(l);h!==void 0&&go(h.mutation,u,zt.empty(),Le.now()),nl(n,u)&&(a=a.insert(l,u))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Rn(s.createTime)}})(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:nD(s.bundledQuery),readTime:Rn(s.readTime)}})(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(){this.overlays=new He(ce.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ss();return j.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=ss(),i=n.length+1,o=new ce(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=ss(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ss(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=s)););return j.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NN(n,r));let i=this.qr.get(n);i===void 0&&(i=we(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.Qr=new rt(ot.$r),this.Ur=new rt(ot.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new ot(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ce(new Fe([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ce(new Fe([])),r=new ot(n,e),s=new ot(n,e+1);let i=we();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new ot(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ce.comparator(e.key,n.key)||Ee(e.Yr,n.Yr)}static Kr(e,n){return Ee(e.Yr,n.Yr)||ce.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new rt(ot.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ON(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new ot(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?ff:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const a=this.Xr(o.Yr);i.push(a)})),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(Ee);return n.forEach((s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(a=>{r=r.add(a.Yr)}))})),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new ot(new ce(i),0);let a=new rt(Ee);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Yr)),!0)}),o),j.resolve(this.ti(a))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){ke(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,(s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new ot(n,0),s=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e){this.ri=e,this.docs=(function(){return new He(ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=sr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))})),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=sr();const o=n.path,a=new ce(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||WO(qO(h),r)<=0||(s.has(h.key)||nl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe(9500)}ii(e,n){return j.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new yD(this)}getSize(e){return j.resolve(this.size)}}class yD extends uD{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.persistence=e,this.si=new Ss((n=>gf(n)),mf),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Tf,this.targetCount=0,this.ai=di.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new di(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),j.waitFor(i).next((()=>s))}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n){this.ui={},this.overlays={},this.ci=new Yc(0),this.li=!1,this.li=!0,this.hi=new gD,this.referenceDelegate=e(this),this.Pi=new vD(this),this.indexManager=new rD,this.remoteDocumentCache=(function(s){return new _D(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new tD(n),this.Ii=new dD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new mD(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new ED(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return j.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class ED extends KO{constructor(e){super(),this.currentSequenceNumber=e}}class If{constructor(e){this.persistence=e,this.Ri=new Tf,this.Vi=null}static mi(e){return new If(e)}get fi(){if(this.Vi)return this.Vi;throw fe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,(r=>{const s=ce.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,pe.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Tc{constructor(e,n){this.persistence=e,this.pi=new Ss((r=>JO(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=lD(this,n)}static mi(e,n){return new Tc(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return j.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?j.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((a=>{a||(r++,i.removeEntry(o,pe.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Fa(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return YC()?8:GO(Ct())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new wD;return this.Ss(e,n,o).next((a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Ls()<=ve.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(Ls()<=ve.DEBUG&&ee("QueryEngine","Query:",Fs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ls()<=ve.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):j.resolve())}ys(e,n){if(om(n))return j.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=ah(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=we(...i);return this.ps.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,a);return this.Cs(n,u,o,l.readTime)?this.ys(e,ah(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return om(n)||s.isEqual(pe.min())?j.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(Ls()<=ve.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fs(n)),this.vs(e,o,n,HO(s,Oo)).next((a=>a)))}))}Ds(e,n){let r=new rt(HE(e));return n.forEach(((s,i)=>{nl(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Ls()<=ve.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Fs(n)),this.ps.getDocumentsMatchingQuery(e,n,Mr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="LocalStore",ID=3e8;class bD{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new He(Ee),this.xs=new Ss((i=>gf(i)),mf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fD(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function AD(t,e,n,r){return new bD(t,e,n,r)}async function dw(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],a=[];let l=we();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function SD(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,h){const d=u.batch,p=d.keys();let m=j.resolve();return p.forEach((E=>{m=m.next((()=>h.getEntry(l,E))).next((A=>{const O=u.docVersions.get(E);ke(O!==null,48541),A.version.compareTo(O)<0&&(d.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),h.addEntry(A)))}))})),m.next((()=>a.mutationQueue.removeMutationBatch(l,d)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(a){let l=we();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function pw(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function RD(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach(((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Pi.removeMatchingKeys(i,h.removedDocuments,d).next((()=>n.Pi.addMatchingKeys(i,h.addedDocuments,d))));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(_t.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),s=s.insert(d,m),(function(A,O,V){return A.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=ID?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(p,m,h)&&a.push(n.Pi.updateTargetData(i,m))}));let l=sr(),u=we();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(CD(i,o,e.documentUpdates).next((h=>{l=h.ks,u=h.qs}))),!r.isEqual(pe.min())){const h=n.Pi.getLastRemoteSnapshotVersion(i).next((d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));a.push(h)}return j.waitFor(a).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function CD(t,e,n){let r=we(),s=we();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=sr();return n.forEach(((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(pe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ee(Af,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function PD(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=ff),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function kD(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,j.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new Cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function fh(t,e,n){const r=ge(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ai(o))throw o;ee(Af,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function vm(t,e,n){const r=ge(t);let s=pe.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const d=ge(l),p=d.xs.get(h);return p!==void 0?j.resolve(d.Ms.get(p)):d.Pi.getTargetData(u,h)})(r,o,An(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:we()))).next((a=>(OD(r,mN(e),a),{documents:a,Qs:i})))))}function OD(t,e,n){let r=t.Os.get(e)||pe.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Em{constructor(){this.activeTargetIds=TN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ND{constructor(){this.Mo=new Em,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Em,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="ConnectivityMonitor";class Tm{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(wm,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(wm,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca=null;function dh(){return Ca===null?Ca=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ca++,"0x"+Ca.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="RestConnection",VD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class MD{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===gc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=dh(),a=this.zo(e,n.toUriEncodedString());ee(cu,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(a),h=Ei(u);return this.Jo(e,a,l,r,h).then((d=>(ee(cu,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw li(cu,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",r),d}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ii})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=VD[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class LD extends MD{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=dh();return new Promise(((a,l)=>{const u=new yE;u.setWithCredentials(!0),u.listenOnce(vE.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case La.NO_ERROR:const d=u.getResponseJson();ee(Et,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case La.TIMEOUT:ee(Et,`RPC '${e}' ${o} timed out`),l(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const p=u.getStatus();if(ee(Et,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m?.error;if(E&&E.status&&E.message){const A=(function(V){const N=V.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(N)>=0?N:H.UNKNOWN})(E.status);l(new ie(A,E.message))}else l(new ie(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new ie(H.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ee(Et,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(s);ee(Et,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)}))}T_(e,n,r){const s=dh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=TE(),a=wE(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ee(Et,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);this.I_(d);let p=!1,m=!1;const E=new xD({Yo:O=>{m?ee(Et,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(p||(ee(Et,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),ee(Et,`RPC '${e}' stream ${s} sending:`,O),d.send(O))},Zo:()=>d.close()}),A=(O,V,N)=>{O.listen(V,(w=>{try{N(w)}catch(k){setTimeout((()=>{throw k}),0)}}))};return A(d,Ji.EventType.OPEN,(()=>{m||(ee(Et,`RPC '${e}' stream ${s} transport opened.`),E.o_())})),A(d,Ji.EventType.CLOSE,(()=>{m||(m=!0,ee(Et,`RPC '${e}' stream ${s} transport closed`),E.a_(),this.E_(d))})),A(d,Ji.EventType.ERROR,(O=>{m||(m=!0,li(Et,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),E.a_(new ie(H.UNAVAILABLE,"The operation could not be completed")))})),A(d,Ji.EventType.MESSAGE,(O=>{if(!m){const V=O.data[0];ke(!!V,16349);const N=V,w=N?.error||N[0]?.error;if(w){ee(Et,`RPC '${e}' stream ${s} received error:`,w);const k=w.status;let D=(function(v){const _=Qe[v];if(_!==void 0)return tw(_)})(k),F=w.message;D===void 0&&(D=H.INTERNAL,F="Unknown error status: "+k+" with message "+w.message),m=!0,E.a_(new ie(D,F)),d.close()}else ee(Et,`RPC '${e}' stream ${s} received:`,V),E.u_(V)}})),A(a,EE.STAT_EVENT,(O=>{O.stat===th.PROXY?ee(Et,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===th.NOPROXY&&ee(Et,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{E.__()}),0),E}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function lu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t){return new jN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="PersistentStream";class mw{constructor(e,n,r,s,i,o,a,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new gw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(rr(n.toString()),rr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new ie(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ee(Im,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ee(Im,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class FD extends mw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=qN(this.serializer,e),r=(function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?Rn(o.readTime):pe.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=hh(this.serializer),n.addTarget=(function(i,o){let a;const l=o.target;if(a=oh(l)?{documents:KN(i,l)}:{query:GN(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=sw(i,o.resumeToken);const u=ch(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){a.readTime=wc(i,o.snapshotVersion.toTimestamp());const u=ch(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const r=JN(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=hh(this.serializer),n.removeTarget=e,this.q_(n)}}class UD extends mw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=zN(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=hh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>WN(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{}class jD extends $D{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,lh(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(H.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Ho(e,lh(n,r),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(H.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class BD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(rr(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="RemoteStore";class HD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{Rs(this)&&(ee(Es,"Restarting streams for network reachability change."),await(async function(l){const u=ge(l);u.Ea.add(4),await Zo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await al(u)})(this))}))})),this.Ra=new BD(r,s)}}async function al(t){if(Rs(t))for(const e of t.da)await e(!0)}async function Zo(t){for(const e of t.da)await e(!1)}function _w(t,e){const n=ge(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Pf(n)?Cf(n):Si(n).O_()&&Rf(n,e))}function Sf(t,e){const n=ge(t),r=Si(n);n.Ia.delete(e),r.O_()&&yw(n,e),n.Ia.size===0&&(r.O_()?r.L_():Rs(n)&&n.Ra.set("Unknown"))}function Rf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Si(t).Y_(e)}function yw(t,e){t.Va.Ue(e),Si(t).Z_(e)}function Cf(t){t.Va=new LN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Si(t).start(),t.Ra.ua()}function Pf(t){return Rs(t)&&!Si(t).x_()&&t.Ia.size>0}function Rs(t){return ge(t).Ea.size===0}function vw(t){t.Va=void 0}async function qD(t){t.Ra.set("Online")}async function WD(t){t.Ia.forEach(((e,n)=>{Rf(t,e)}))}async function zD(t,e){vw(t),Pf(t)?(t.Ra.ha(e),Cf(t)):t.Ra.set("Unknown")}async function KD(t,e,n){if(t.Ra.set("Online"),e instanceof rw&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))})(t,e)}catch(r){ee(Es,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ic(t,r)}else if(e instanceof ja?t.Va.Ze(e):e instanceof nw?t.Va.st(e):t.Va.tt(e),!n.isEqual(pe.min()))try{const r=await pw(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,u)=>{const h=i.Ia.get(l);if(!h)return;i.Ia.set(l,h.withResumeToken(_t.EMPTY_BYTE_STRING,h.snapshotVersion)),yw(i,l);const d=new Cr(h.target,l,u,h.sequenceNumber);Rf(i,d)})),i.remoteSyncer.applyRemoteEvent(a)})(t,n)}catch(r){ee(Es,"Failed to raise snapshot:",r),await Ic(t,r)}}async function Ic(t,e,n){if(!Ai(e))throw e;t.Ea.add(1),await Zo(t),t.Ra.set("Offline"),n||(n=()=>pw(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ee(Es,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await al(t)}))}function Ew(t,e){return e().catch((n=>Ic(t,n,e)))}async function cl(t){const e=ge(t),n=Ur(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ff;for(;GD(e);)try{const s=await PD(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,QD(e,s)}catch(s){await Ic(e,s)}ww(e)&&Tw(e)}function GD(t){return Rs(t)&&t.Ta.length<10}function QD(t,e){t.Ta.push(e);const n=Ur(t);n.O_()&&n.X_&&n.ea(e.mutations)}function ww(t){return Rs(t)&&!Ur(t).x_()&&t.Ta.length>0}function Tw(t){Ur(t).start()}async function JD(t){Ur(t).ra()}async function YD(t){const e=Ur(t);for(const n of t.Ta)e.ea(n.mutations)}async function XD(t,e,n){const r=t.Ta.shift(),s=vf.from(r,e,n);await Ew(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await cl(t)}async function ZD(t,e){e&&Ur(t).X_&&await(async function(r,s){if((function(o){return VN(o)&&o!==H.ABORTED})(s.code)){const i=r.Ta.shift();Ur(r).B_(),await Ew(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await cl(r)}})(t,e),ww(t)&&Tw(t)}async function bm(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),ee(Es,"RemoteStore received new credentials");const r=Rs(n);n.Ea.add(3),await Zo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await al(n)}async function eV(t,e){const n=ge(t);e?(n.Ea.delete(2),await al(n)):e||(n.Ea.add(2),await Zo(n),n.Ra.set("Unknown"))}function Si(t){return t.ma||(t.ma=(function(n,r,s){const i=ge(n);return i.sa(),new FD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:qD.bind(null,t),t_:WD.bind(null,t),r_:zD.bind(null,t),H_:KD.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Pf(t)?Cf(t):t.Ra.set("Unknown")):(await t.ma.stop(),vw(t))}))),t.ma}function Ur(t){return t.fa||(t.fa=(function(n,r,s){const i=ge(n);return i.sa(),new UD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:JD.bind(null,t),r_:ZD.bind(null,t),ta:YD.bind(null,t),na:XD.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await cl(t)):(await t.fa.stop(),t.Ta.length>0&&(ee(Es,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new kf(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Of(t,e){if(rr("AsyncQueue",`${e}: ${t}`),Ai(t))return new ie(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{static emptySet(e){return new ei(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=Yi(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.ga=new He(ce.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):fe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class pi{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((a=>{o.push({type:0,doc:a})})),new pi(e,n,ei.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class nV{constructor(){this.queries=Sm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=Sm(),i.forEach(((o,a)=>{for(const l of a.Sa)l.onError(r)}))})(this,new ie(H.ABORTED,"Firestore shutting down"))}}function Sm(){return new Ss((t=>BE(t)),tl)}async function rV(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new tV,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Of(o,`Initialization of query '${Fs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Nf(n)}async function sV(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function iV(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&Nf(n)}function oV(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Nf(t){t.Ca.forEach((e=>{e.next()}))}var ph,Rm;(Rm=ph||(ph={})).Ma="default",Rm.Cache="cache";class aV{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new pi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=pi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ph.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e){this.key=e}}class bw{constructor(e){this.key=e}}class cV{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=we(),this.mutatedKeys=we(),this.eu=HE(e),this.tu=new ei(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Am,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((h,d)=>{const p=s.get(h),m=nl(this.query,d)?d:null,E=!!p&&this.mutatedKeys.has(p.key),A=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let O=!1;p&&m?p.data.isEqual(m.data)?E!==A&&(r.track({type:3,doc:m}),O=!0):this.su(p,m)||(r.track({type:2,doc:m}),O=!0,(l&&this.eu(m,l)>0||u&&this.eu(m,u)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),O=!0):p&&!m&&(r.track({type:1,doc:p}),O=!0,(l||u)&&(a=!0)),O&&(m?(o=o.add(m),i=A?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,d)=>(function(m,E){const A=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Rt:O})}};return A(m)-A(E)})(h.type,d.type)||this.eu(h.doc,d.doc))),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new pi(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Am,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=we(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new bw(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new Iw(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=we();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return pi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Df="SyncEngine";class lV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uV{constructor(e){this.key=e,this.hu=!1}}class hV{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ss((a=>BE(a)),tl),this.Iu=new Map,this.Eu=new Set,this.du=new He(ce.comparator),this.Au=new Map,this.Ru=new Tf,this.Vu={},this.mu=new Map,this.fu=di.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function fV(t,e,n=!0){const r=kw(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Aw(r,e,n,!0),s}async function dV(t,e){const n=kw(t);await Aw(n,e,!0,!1)}async function Aw(t,e,n,r){const s=await kD(t.localStore,An(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await pV(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&_w(t.remoteStore,s),a}async function pV(t,e,n,r,s){t.pu=(d,p,m)=>(async function(A,O,V,N){let w=O.view.ru(V);w.Cs&&(w=await vm(A.localStore,O.query,!1).then((({documents:b})=>O.view.ru(b,w))));const k=N&&N.targetChanges.get(O.targetId),D=N&&N.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(w,A.isPrimaryClient,k,D);return Pm(A,O.targetId,F.au),F.snapshot})(t,d,p,m);const i=await vm(t.localStore,e,!0),o=new cV(e,i.Qs),a=o.ru(i.documents),l=Xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);Pm(t,n,u.au);const h=new lV(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function gV(t,e,n){const r=ge(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!tl(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fh(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Sf(r.remoteStore,s.targetId),gh(r,s.targetId)})).catch(bi)):(gh(r,s.targetId),await fh(r.localStore,s.targetId,!0))}async function mV(t,e){const n=ge(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sf(n.remoteStore,r.targetId))}async function _V(t,e,n){const r=bV(t);try{const s=await(function(o,a){const l=ge(o),u=Le.now(),h=a.reduce(((m,E)=>m.add(E.key)),we());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",(m=>{let E=sr(),A=we();return l.Ns.getEntries(m,h).next((O=>{E=O,E.forEach(((V,N)=>{N.isValidDocument()||(A=A.add(V))}))})).next((()=>l.localDocuments.getOverlayedDocuments(m,E))).next((O=>{d=O;const V=[];for(const N of a){const w=PN(N,d.get(N.key).overlayedDocument);w!=null&&V.push(new Wr(N.key,w,ME(w.value.mapValue),Sn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,V,a)})).next((O=>{p=O;const V=O.applyToLocalDocumentSet(d,A);return l.documentOverlayCache.saveOverlays(m,O.batchId,V)}))})).then((()=>({batchId:p.batchId,changes:WE(d)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,a,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new He(Ee)),u=u.insert(a,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await ea(r,s.changes),await cl(r.remoteStore)}catch(s){const i=Of(s,"Failed to persist write");n.reject(i)}}async function Sw(t,e){const n=ge(t);try{const r=await RD(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ke(o.hu,14607):s.removedDocuments.size>0&&(ke(o.hu,42227),o.hu=!1))})),await ea(n,r,e)}catch(r){await bi(r)}}function Cm(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const l=ge(o);l.onlineState=a;let u=!1;l.queries.forEach(((h,d)=>{for(const p of d.Sa)p.va(a)&&(u=!0)})),u&&Nf(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yV(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new He(ce.comparator);o=o.insert(i,At.newNoDocument(i,pe.min()));const a=we().add(i),l=new il(pe.min(),new Map,new He(Ee),o,a);await Sw(r,l),r.du=r.du.remove(i),r.Au.delete(e),Vf(r)}else await fh(r.localStore,e,!1).then((()=>gh(r,e,n))).catch(bi)}async function vV(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await SD(n.localStore,e);Cw(n,r,null),Rw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ea(n,s)}catch(s){await bi(s)}}async function EV(t,e,n){const r=ge(t);try{const s=await(function(o,a){const l=ge(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next((d=>(ke(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>l.localDocuments.getDocuments(u,h)))}))})(r.localStore,e);Cw(r,e,n),Rw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ea(r,s)}catch(s){await bi(s)}}function Rw(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Cw(t,e,n){const r=ge(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function gh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||Pw(t,r)}))}function Pw(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Sf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Vf(t))}function Pm(t,e,n){for(const r of n)r instanceof Iw?(t.Ru.addReference(r.key,e),wV(t,r)):r instanceof bw?(ee(Df,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Pw(t,r.key)):fe(19791,{wu:r})}function wV(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ee(Df,"New document in limbo: "+n),t.Eu.add(r),Vf(t))}function Vf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ce(Fe.fromString(e)),r=t.fu.next();t.Au.set(r,new uV(n)),t.du=t.du.insert(n,r),_w(t.remoteStore,new Cr(An(_f(n.path)),r,"TargetPurposeLimboResolution",Yc.ce))}}async function ea(t,e,n){const r=ge(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((a,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const h=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(u){s.push(u);const h=bf.As(l.targetId,u);i.push(h)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const h=ge(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>j.forEach(u,(p=>j.forEach(p.Es,(m=>h.persistence.referenceDelegate.addReference(d,p.targetId,m))).next((()=>j.forEach(p.ds,(m=>h.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))))))}catch(d){if(!Ai(d))throw d;ee(Af,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const m=h.Ms.get(p),E=m.snapshotVersion,A=m.withLastLimboFreeSnapshotVersion(E);h.Ms=h.Ms.insert(p,A)}}})(r.localStore,i))}async function TV(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){ee(Df,"User change. New user:",e.toKey());const r=await dw(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((a=>{a.forEach((l=>{l.reject(new ie(H.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ea(n,r.Ls)}}function IV(t,e){const n=ge(t),r=n.Au.get(e);if(r&&r.hu)return we().add(r.key);{let s=we();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function kw(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yV.bind(null,e),e.Pu.H_=iV.bind(null,e.eventManager),e.Pu.yu=oV.bind(null,e.eventManager),e}function bV(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EV.bind(null,e),e}class bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ol(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return AD(this.persistence,new TD,e.initialUser,this.serializer)}Cu(e){return new fw(If.mi,this.serializer)}Du(e){return new ND}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bc.provider={build:()=>new bc};class AV extends bc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ke(this.persistence.referenceDelegate instanceof Tc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new aD(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new fw((r=>Tc.mi(r,n)),this.serializer)}}class mh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TV.bind(null,this.syncEngine),await eV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new nV})()}createDatastore(e){const n=ol(e.databaseInfo.databaseId),r=(function(i){return new LD(i)})(e.databaseInfo);return(function(i,o,a,l){return new jD(i,o,a,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,a){return new HD(r,s,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(n=>Cm(this.syncEngine,n,0)),(function(){return Tm.v()?new Tm:new DD})())}createSyncEngine(e,n){return(function(s,i,o,a,l,u,h){const d=new hV(s,i,o,a,l,u);return h&&(d.gu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=ge(n);ee(Es,"RemoteStore shutting down."),r.Ea.add(5),await Zo(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}mh.provider={build:()=>new mh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):rr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="FirestoreClient";class RV{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=uf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ee($r,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ee($r,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Of(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function uu(t,e){t.asyncQueue.verifyOperationInProgress(),ee($r,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await dw(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function km(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CV(t);ee($r,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>bm(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>bm(e.remoteStore,s))),t._onlineComponents=e}async function CV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee($r,"Using user provided OfflineComponentProvider");try{await uu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;li("Error using user provided cache. Falling back to memory cache: "+n),await uu(t,new bc)}}else ee($r,"Using default OfflineComponentProvider"),await uu(t,new AV(void 0));return t._offlineComponents}async function Ow(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee($r,"Using user provided OnlineComponentProvider"),await km(t,t._uninitializedComponentsProvider._online)):(ee($r,"Using default OnlineComponentProvider"),await km(t,new mh))),t._onlineComponents}function PV(t){return Ow(t).then((e=>e.syncEngine))}async function kV(t){const e=await Ow(t),n=e.eventManager;return n.onListen=fV.bind(null,e.syncEngine),n.onUnlisten=gV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mV.bind(null,e.syncEngine),n}function OV(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const h=new SV({next:p=>{h.Nu(),o.enqueueAndForget((()=>sV(i,d)));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new ie(H.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&l&&l.source==="server"?u.reject(new ie(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new aV(_f(a.path),h,{includeMetadataChanges:!0,qa:!0});return rV(i,d)})(await kV(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="firestore.googleapis.com",Nm=!0;class Dm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Dw,this.ssl=Nm}else this.host=e.host,this.ssl=e.ssl??Nm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iD)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nw(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mf{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new OO;switch(r.type){case"firstParty":return new MO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Om.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Om.delete(n),r.terminate())})(this),Promise.resolve()}}function NV(t,e,n,r={}){t=vs(t,Mf);const s=Ei(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(Av(`https://${a}`),Sv("Firestore",!0)),i.host!==Dw&&i.host!==a&&li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:r};if(!gs(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Tt.MOCK_USER;else{u=HC(r.mockUserToken,t._app?.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new ie(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Tt(d)}t._authCredentials=new NO(new bE(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xf(this.firestore,e,this._query)}}class nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}toJSON(){return{type:nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Jo(n,nt._jsonSchema))return new nt(e,r||null,new ce(Fe.fromString(n.referencePath)))}}nt._jsonSchemaVersion="firestore/documentReference/1.0",nt._jsonSchema={type:Ye("string",nt._jsonSchemaVersion),referencePath:Ye("string")};class Lo extends xf{constructor(e,n,r){super(e,n,_f(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new ce(e))}withConverter(e){return new Lo(this.firestore,e,this._path)}}function Xx(t,e,...n){if(t=ct(t),arguments.length===1&&(e=uf.newId()),jO("doc","path",e),t instanceof Mf){const r=Fe.fromString(e,...n);return Kg(r),new nt(t,null,new ce(r))}{if(!(t instanceof nt||t instanceof Lo))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Kg(r),new nt(t.firestore,t instanceof Lo?t.converter:null,new ce(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="AsyncQueue";class Mm{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new gw(this,"async_queue_retry"),this._c=()=>{const r=lu();r&&ee(Vm,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=lu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=lu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Vr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ai(e))throw e;ee(Vm,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,rr("INTERNAL UNHANDLED ERROR: ",xm(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=kf.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&fe(47125,{Pc:xm(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function xm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ll extends Mf{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Mm,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mm(e),this._firestoreClient=void 0,await e}}}function DV(t,e){const n=typeof t=="object"?t:Zh(),r=typeof t=="string"?t:gc,s=Wo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jC("firestore");i&&NV(s,...i)}return s}function Vw(t){if(t._terminated)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||VV(t),t._firestoreClient}function VV(t){const e=t._freezeSettings(),n=(function(s,i,o,a){return new ZO(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,Nw(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new RV(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(_t.fromBase64String(e))}catch(n){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yt(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Jo(e,Yt._jsonSchema))return Yt.fromBase64String(e.bytes)}}Yt._jsonSchemaVersion="firestore/bytes/1.0",Yt._jsonSchema={type:Ye("string",Yt._jsonSchemaVersion),bytes:Ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Cn._jsonSchemaVersion}}static fromJSON(e){if(Jo(e,Cn._jsonSchema))return new Cn(e.latitude,e.longitude)}}Cn._jsonSchemaVersion="firestore/geoPoint/1.0",Cn._jsonSchema={type:Ye("string",Cn._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Jo(e,Pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Pn(e.vectorValues);throw new ie(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pn._jsonSchemaVersion="firestore/vectorValue/1.0",Pn._jsonSchema={type:Ye("string",Pn._jsonSchemaVersion),vectorValues:Ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MV=/^__.*__$/;class xV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}class Mw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ac:t})}}class Ff{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ff({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ac(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(xw(this.Ac)&&MV.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class LV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ol(e)}Cc(e,n,r,s=!1){return new Ff({Ac:e,methodName:n,Dc:r,path:gt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lw(t){const e=t._freezeSettings(),n=ol(t._databaseId);return new LV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FV(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Uf("Data must be an object, but it was:",o,r);const a=Fw(r,o);let l,u;if(i.merge)l=new zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=_h(e,d,n);if(!o.contains(p))throw new ie(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);$w(h,p)||h.push(p)}l=new zt(h),u=o.fieldTransforms.filter((d=>l.covers(d.field)))}else l=null,u=o.fieldTransforms;return new xV(new xt(a),l,u)}class hl extends Lf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hl}}function UV(t,e,n,r){const s=t.Cc(1,e,n);Uf("Data must be an object, but it was:",s,r);const i=[],o=xt.empty();qr(r,((l,u)=>{const h=$f(e,l,n);u=ct(u);const d=s.yc(h);if(u instanceof hl)i.push(h);else{const p=fl(u,d);p!=null&&(i.push(h),o.set(h,p))}}));const a=new zt(i);return new Mw(o,a,s.fieldTransforms)}function $V(t,e,n,r,s,i){const o=t.Cc(1,e,n),a=[_h(e,r,n)],l=[s];if(i.length%2!=0)throw new ie(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(_h(e,i[p])),l.push(i[p+1]);const u=[],h=xt.empty();for(let p=a.length-1;p>=0;--p)if(!$w(u,a[p])){const m=a[p];let E=l[p];E=ct(E);const A=o.yc(m);if(E instanceof hl)u.push(m);else{const O=fl(E,A);O!=null&&(u.push(m),h.set(m,O))}}const d=new zt(u);return new Mw(h,d,o.fieldTransforms)}function fl(t,e){if(Uw(t=ct(t)))return Uf("Unsupported field value:",e,t),Fw(t,e);if(t instanceof Lf)return(function(r,s){if(!xw(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const a of r){let l=fl(a,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:wc(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wc(s.serializer,i)}}if(r instanceof Cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yt)return{bytesValue:sw(s.serializer,r._byteString)};if(r instanceof nt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Pn)return(function(o,a){return{mapValue:{fields:{[DE]:{stringValue:VE},[mc]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return yf(a.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${hf(r)}`)})(t,e)}function Fw(t,e){const n={};return RE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qr(t,((r,s)=>{const i=fl(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Uw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Cn||t instanceof Yt||t instanceof nt||t instanceof Lf||t instanceof Pn)}function Uf(t,e,n){if(!Uw(n)||!AE(n)){const r=hf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function _h(t,e,n){if((e=ct(e))instanceof ul)return e._internalPath;if(typeof e=="string")return $f(t,e);throw Ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const jV=new RegExp("[~\\*/\\[\\]]");function $f(t,e,n){if(e.search(jV)>=0)throw Ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ul(...e.split("."))._internalPath}catch{throw Ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ac(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ie(H.INVALID_ARGUMENT,a+t+l)}function $w(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BV extends jw{data(){return super.data()}}function Bw(t,e){return typeof e=="string"?$f(t,e):e instanceof ul?e._internalPath:e._delegate._internalPath}class HV{convertValue(e,n="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[mc].arrayValue?.values?.map((r=>Ge(r.doubleValue)));return new Pn(n)}convertGeoPoint(e){return new Cn(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(No(e));default:return null}}convertTimestamp(e){const n=xr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);ke(uw(r),9688,{name:e});const s=new Do(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||rr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qV(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class us extends jw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=us._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}us._jsonSchemaVersion="firestore/documentSnapshot/1.0",us._jsonSchema={type:Ye("string",us._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Ba extends us{data(e={}){return super.data(e)}}class mo{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Ba(this._firestore,this._userDataWriter,r.key,r,new Zi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const l=new Ba(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Zi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const l=new Ba(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Zi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:WV(a.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=uf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function WV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t){t=vs(t,nt);const e=vs(t.firestore,ll);return OV(Vw(e),t._key).then((n=>KV(e,t,n)))}mo._jsonSchemaVersion="firestore/querySnapshot/1.0",mo._jsonSchema={type:Ye("string",mo._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class zV extends HV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,n)}}function eL(t,e,n){t=vs(t,nt);const r=vs(t.firestore,ll),s=qV(t.converter,e);return Hw(r,[FV(Lw(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Sn.none())])}function tL(t,e,n,...r){t=vs(t,nt);const s=vs(t.firestore,ll),i=Lw(s);let o;return o=typeof(e=ct(e))=="string"||e instanceof ul?$V(i,"updateDoc",t._key,e,n,r):UV(i,"updateDoc",t._key,e),Hw(s,[o.toMutation(t._key,Sn.exists(!0))])}function Hw(t,e){return(function(r,s){const i=new Vr;return r.asyncQueue.enqueueAndForget((async()=>_V(await PV(r),s,i))),i.promise})(Vw(t),e)}function KV(t,e,n){const r=n.docs.get(e._key),s=new zV(t);return new us(t,s,e._key,r,new Zi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ii=s})(wi),On(new hn("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ll(new DO(r.getProvider("auth-internal")),new xO(o,r.getProvider("app-check-internal")),(function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Do(u.options.projectId,h)})(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),Zt(Hg,qg,e),Zt(Hg,qg,"esm2020")})();const qw="@firebase/installations",jf="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=1e4,zw=`w:${jf}`,Kw="FIS_v2",GV="https://firebaseinstallations.googleapis.com/v1",QV=3600*1e3,JV="installations",YV="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XV={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ws=new bs(JV,YV,XV);function Gw(t){return t instanceof pn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw({projectId:t}){return`${GV}/projects/${t}/installations`}function Jw(t){return{token:t.token,requestStatus:2,expiresIn:eM(t.expiresIn),creationTime:Date.now()}}async function Yw(t,e){const r=(await e.json()).error;return ws.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Xw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ZV(t,{refreshToken:e}){const n=Xw(t);return n.append("Authorization",tM(e)),n}async function Zw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function eM(t){return Number(t.replace("s","000"))}function tM(t){return`${Kw} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Qw(t),s=Xw(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:Kw,appId:t.appId,sdkVersion:zw},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Zw(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Jw(u.authToken)}}else throw await Yw("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM=/^[cdef][\w-]{21}$/,yh="";function iM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=oM(t);return sM.test(n)?n:yh}catch{return yh}}function oM(t){return rM(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=new Map;function nT(t,e){const n=dl(t);rT(n,e),aM(n,e)}function rT(t,e){const n=tT.get(t);if(n)for(const r of n)r(e)}function aM(t,e){const n=cM();n&&n.postMessage({key:t,fid:e}),lM()}let is=null;function cM(){return!is&&"BroadcastChannel"in self&&(is=new BroadcastChannel("[Firebase] FID Change"),is.onmessage=t=>{rT(t.data.key,t.data.fid)}),is}function lM(){tT.size===0&&is&&(is.close(),is=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM="firebase-installations-database",hM=1,Ts="firebase-installations-store";let hu=null;function Bf(){return hu||(hu=Nv(uM,hM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ts)}}})),hu}async function Sc(t,e){const n=dl(t),s=(await Bf()).transaction(Ts,"readwrite"),i=s.objectStore(Ts),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&nT(t,e.fid),e}async function sT(t){const e=dl(t),r=(await Bf()).transaction(Ts,"readwrite");await r.objectStore(Ts).delete(e),await r.done}async function pl(t,e){const n=dl(t),s=(await Bf()).transaction(Ts,"readwrite"),i=s.objectStore(Ts),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&nT(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(t){let e;const n=await pl(t.appConfig,r=>{const s=fM(r),i=dM(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===yh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fM(t){const e=t||{fid:iM(),registrationStatus:0};return iT(e)}function dM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ws.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=pM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gM(t)}:{installationEntry:e}}async function pM(t,e){try{const n=await nM(t,e);return Sc(t.appConfig,n)}catch(n){throw Gw(n)&&n.customData.serverCode===409?await sT(t.appConfig):await Sc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function gM(t){let e=await Lm(t.appConfig);for(;e.registrationStatus===1;)await eT(100),e=await Lm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Hf(t);return r||n}return e}function Lm(t){return pl(t,e=>{if(!e)throw ws.create("installation-not-found");return iT(e)})}function iT(t){return mM(t)?{fid:t.fid,registrationStatus:0}:t}function mM(t){return t.registrationStatus===1&&t.registrationTime+Ww<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _M({appConfig:t,heartbeatServiceProvider:e},n){const r=yM(t,n),s=ZV(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:zw,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Zw(()=>fetch(r,a));if(l.ok){const u=await l.json();return Jw(u)}else throw await Yw("Generate Auth Token",l)}function yM(t,{fid:e}){return`${Qw(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(t,e=!1){let n;const r=await pl(t.appConfig,i=>{if(!oT(i))throw ws.create("not-registered");const o=i.authToken;if(!e&&wM(o))return i;if(o.requestStatus===1)return n=vM(t,e),i;{if(!navigator.onLine)throw ws.create("app-offline");const a=IM(i);return n=EM(t,a),a}});return n?await n:r.authToken}async function vM(t,e){let n=await Fm(t.appConfig);for(;n.authToken.requestStatus===1;)await eT(100),n=await Fm(t.appConfig);const r=n.authToken;return r.requestStatus===0?qf(t,e):r}function Fm(t){return pl(t,e=>{if(!oT(e))throw ws.create("not-registered");const n=e.authToken;return bM(n)?{...e,authToken:{requestStatus:0}}:e})}async function EM(t,e){try{const n=await _M(t,e),r={...e,authToken:n};return await Sc(t.appConfig,r),n}catch(n){if(Gw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await sT(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Sc(t.appConfig,r)}throw n}}function oT(t){return t!==void 0&&t.registrationStatus===2}function wM(t){return t.requestStatus===2&&!TM(t)}function TM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+QV}function IM(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function bM(t){return t.requestStatus===1&&t.requestTime+Ww<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AM(t){const e=t,{installationEntry:n,registrationPromise:r}=await Hf(e);return r?r.catch(console.error):qf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SM(t,e=!1){const n=t;return await RM(n),(await qf(n,e)).token}async function RM(t){const{registrationPromise:e}=await Hf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t){if(!t||!t.options)throw fu("App Configuration");if(!t.name)throw fu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw fu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function fu(t){return ws.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="installations",PM="installations-internal",kM=t=>{const e=t.getProvider("app").getImmediate(),n=CM(e),r=Wo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},OM=t=>{const e=t.getProvider("app").getImmediate(),n=Wo(e,aT).getImmediate();return{getId:()=>AM(n),getToken:s=>SM(n,s)}};function NM(){On(new hn(aT,kM,"PUBLIC")),On(new hn(PM,OM,"PRIVATE"))}NM();Zt(qw,jf);Zt(qw,jf,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="analytics",DM="firebase_id",VM="origin",MM=60*1e3,xM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new Kc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},en=new bs("analytics","Analytics",LM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(t){if(!t.startsWith(Wf)){const e=en.create("invalid-gtag-resource",{gtagURL:t});return Ut.warn(e.message),""}return t}function cT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function UM(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function $M(t,e){const n=UM("firebase-js-sdk-policy",{createScriptURL:FM}),r=document.createElement("script"),s=`${Wf}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function jM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function BM(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await cT(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(a){Ut.error(a)}t("config",s,i)}async function HM(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await cT(n);for(const l of o){const u=a.find(d=>d.measurementId===l),h=u&&e[u.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ut.error(i)}}function qM(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await HM(t,e,n,a,l)}else if(i==="config"){const[a,l]=o;await BM(t,e,n,r,a,l)}else if(i==="consent"){const[a,l]=o;t("consent",a,l)}else if(i==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Ut.error(a)}}return s}function WM(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=qM(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function zM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Wf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM=30,GM=1e3;class QM{constructor(e={},n=GM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const lT=new QM;function JM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function YM(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:JM(n)},s=xM.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const a=await i.json();a.error?.message&&(o=a.error.message)}catch{}throw en.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function XM(t,e=lT,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw en.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw en.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new tx;return setTimeout(async()=>{a.abort()},MM),uT({appId:r,apiKey:s,measurementId:i},o,a,e)}async function uT(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=lT){const{appId:i,measurementId:o}=t;try{await ZM(r,e)}catch(a){if(o)return Ut.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:i,measurementId:o};throw a}try{const a=await YM(t);return s.deleteThrottleMetadata(i),a}catch(a){const l=a;if(!ex(l)){if(s.deleteThrottleMetadata(i),o)return Ut.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw a}const u=Number(l?.customData?.httpStatus)===503?pg(n,s.intervalMillis,KM):pg(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(i,h),Ut.debug(`Calling attemptFetch again in ${u} millis`),uT(t,h,r,s)}}function ZM(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(en.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ex(t){if(!(t instanceof pn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class tx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function nx(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(){if(Cv())try{await Pv()}catch(t){return Ut.warn(en.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Ut.warn(en.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sx(t,e,n,r,s,i,o){const a=XM(t);a.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ut.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ut.error(p)),e.push(a);const l=rx().then(p=>{if(p)return r.getId()}),[u,h]=await Promise.all([a,l]);zM(i)||$M(i,u.measurementId),s("js",new Date);const d=o?.config??{};return d[VM]="firebase",d.update=!0,h!=null&&(d[DM]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.app=e}_delete(){return delete _o[this.app.options.appId],Promise.resolve()}}let _o={},$m=[];const jm={};let du="dataLayer",ox="gtag",Bm,hT,Hm=!1;function ax(){const t=[];if(Rv()&&t.push("This is a browser extension environment."),XC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=en.create("invalid-analytics-context",{errorInfo:e});Ut.warn(n.message)}}function cx(t,e,n){ax();const r=t.options.appId;if(!r)throw en.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ut.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw en.create("no-api-key");if(_o[r]!=null)throw en.create("already-exists",{id:r});if(!Hm){jM(du);const{wrappedGtag:i,gtagCore:o}=WM(_o,$m,jm,du,ox);hT=i,Bm=o,Hm=!0}return _o[r]=sx(t,$m,jm,e,Bm,du,n),new ix(t)}function lx(t,e,n,r){t=ct(t),nx(hT,_o[t.app.options.appId],e,n,r).catch(s=>Ut.error(s))}const qm="@firebase/analytics",Wm="0.10.18";function ux(){On(new hn(Um,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return cx(r,s,n)},"PUBLIC")),On(new hn("analytics-internal",t,"PRIVATE")),Zt(qm,Wm),Zt(qm,Wm,"esm2020");function t(e){try{const n=e.getProvider(Um).getImmediate();return{logEvent:(r,s,i)=>lx(n,r,s,i)}}catch(n){throw en.create("interop-component-reg-failed",{reason:n})}}}ux();const hx=$t(t=>{const e=er().public,n={apiKey:e.FB_API_KEY,authDomain:e.FB_AUTH_DOMAIN,projectId:e.FB_PROJECT_ID,storageBucket:e.FB_STORAGE_BUCKET,messagingSenderId:e.FB_MESSAGING_SENDER_ID,appId:e.FB_APP_ID,measurementId:e.FB_MEASUREMENT_ID},r=ak().length?Zh():Dv(n),s=DV(r),i=PO(r);return _1(i,cE).then(()=>{console.log("Persistence mode set to local.")}).catch(o=>{console.error("Error setting persistence mode:",o)}),{provide:{auth:i,db:s}}}),fx=[IR,AR,kR,Q0,Y0,X0,Z0,tC,EC,wC,TC,PC,NC,hx],fT=(t="RouteProvider")=>dn({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,r=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>n===e.renderKey?e.route[i]:r[i],enumerable:!0});return kr(ps,wn(s)),()=>e.vnode?at(e.vnode,{ref:e.vnodeRef}):e.vnode}}),dx=fT(),zm=new WeakMap,px=dn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Be(),i=Ft(),o=St(ps,null);let a;r({pageRef:i});const l=St(Fy,null);let u;const h=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",h);Rt().beforeEach(p)}t.pageKey&&an(()=>t.pageKey,(p,m)=>{p!==m&&s.callHook("page:loading:start")});let d=!1;{const p=Rt().beforeResolve(()=>{d=!1});vi(()=>{p()})}return()=>at(uv,{name:t.name,route:t.route,...e},{default:p=>{const m=mx(o,p.route,p.Component),E=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!E)return u;h();return}if(u&&l&&!l.isCurrent(p.route))return u;if(m&&o&&(!l||l?.isCurrent(o)))return E?u:null;const A=Hu(p,t.pageKey),O=_x(o,p.route,p.Component);!s.isHydrating&&a===A&&!O&&kn(()=>{d=!0,s.callHook("page:loading:end")}),a=A;const V=!!(t.transition??p.route.meta.pageTransition??Ip),N=V&&gx([t.transition,p.route.meta.pageTransition,Ip,{onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",p.Component)}}]),w=t.keepalive??p.route.meta.keepalive??mS;return u=fv(V&&N,L0(w,at(Uh,{suspensible:!0,onPending:()=>{V&&(s._runningTransition=!0),s.callHook("page:start",p.Component)},onResolve:()=>{kn(()=>s.callHook("page:finish",p.Component).then(()=>{if(delete s._runningTransition,!d&&!O)return d=!0,s.callHook("page:loading:end")}).finally(h))}},{default:()=>{const k={key:A||void 0,vnode:n.default?yx(n.default,p):p.Component,route:p.route,renderKey:A||void 0,trackRootNodes:V,vnodeRef:i};if(!w)return at(dx,k);const D=p.Component.type,F=D;let b=zm.get(F);return b||(b=fT(D.name||D.__name),zm.set(F,b)),at(b,k)}}))).default(),u}})}});function gx(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?Jh(n.onAfterLeave):void 0}));return xy(...e)}function mx(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>s.components?.default===n?.type);return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>s.components?.default!==t.matched[i]?.components?.default)||n&&Hu({route:e,Component:n})!==Hu({route:t,Component:n})}function _x(t,e,n){return t?e.matched.findIndex(s=>s.components?.default===n?.type)<e.matched.length-1:!1}function yx(t,e){const n=t(e);return n.length===1?at(n[0]):at(bt,void 0,n)}const vx=dn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>at(Rr[t.name],t.layoutProps,e.slots)}}),Ex={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},wx=dn({name:"NuxtLayout",inheritAttrs:!1,props:Ex,setup(t,e){const n=Be(),r=St(ps),i=!r||r===jc()?hv():r,o=ze(()=>{let h=We(t.name)??i?.meta.layout??"default";return h&&!(h in Rr)&&t.fallback&&(h=We(t.fallback)),h}),a=hs();e.expose({layoutRef:a});const l=n.deferHydration();if(n.isHydrating){const h=n.hooks.hookOnce("app:error",l);Rt().beforeEach(h)}let u;return()=>{const h=o.value&&o.value in Rr,d=i?.meta.layoutTransition??gS,p=u;return u=o.value,fv(h&&d,{default:()=>at(Uh,{suspensible:!0,onResolve:()=>{kn(l)}},{default:()=>at(Tx,{layoutProps:dy(e.attrs,{ref:a}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:m=>m!==p&&m===o.value,hasTransition:!!d},e.slots)})}).default()}}}),Tx=dn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&kr(Fy,{isCurrent:i=>n===(i.meta.layout??"default")});const r=St(ps);if(r&&r===jc()){const i=hv(),o={};for(const a in i){const l=a;Object.defineProperty(o,l,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?i[l]:r[l]})}kr(ps,wn(o))}return()=>!n||typeof n=="string"&&!(n in Rr)?e.slots.default?.():at(vx,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}),Ix={__name:"app",setup(t){{yi(async()=>{await kn();const n=console.warn;console.warn=(...r)=>{r[0]?.includes?.('Slot "default" invoked outside')?(console.groupCollapsed("🕳️ Slot Warning Trace"),n(...r),console.trace("Origin of slot misuse:"),console.groupEnd()):n(...r)}});const e=Element.prototype.setAttribute;Element.prototype.setAttribute=function(n,r){try{return e.call(this,n,r)}catch(s){throw console.error("❌ Failed setAttribute:",n,"value:",r,"on element",this),s}}}return(e,n)=>{const r=px,s=wx;return qt(),Fc("div",null,[$e(s,null,{default:Dc(()=>[$e(r)]),_:1})])}}},bx=()=>pv("color-mode").value,Ax=["src"],Sx=dn({__name:"Logo",setup(t){const e=bx(),n=Ft(!0);function r(){window.innerWidth<768?n.value=window.scrollY===0:n.value=!0}yi(()=>{window.addEventListener("scroll",r)}),vi(()=>{window.removeEventListener("scroll",r)});const s=ze(()=>e.value==="dark"?"/images/mchepa_night_v1.png":"/images/mchepa_light_v1.png");return(i,o)=>{const a=mC;return qt(),Fc("div",{class:kc(["justify-center py-2 flex transition-all duration-300 overflow-hidden md:max-h-full md:opacity-100",We(n)?"opacity-100":"max-h-0 opacity-0"])},[$e(a,{to:"/",class:"inline-flex items-center gap-2"},{default:Dc(()=>[To("img",{src:We(s),alt:"Logo",class:"object-contain h-20 md:h-26"},null,8,Ax)]),_:1})],2)}}}),Rx=Object.assign(Sx,{__name:"AppLogo"}),Cx={class:"flex flex-col justfy-center items-center"},Px=dn({__name:"error",props:{error:Object},setup(t){const e=()=>$y({redirect:"/"});return(n,r)=>{const s=Rx;return qt(),Fc("div",Cx,[$e(s),To("h2",null,n_(t.error?.statusCode),1),To("button",{onClick:e},"Clear errors")])}}}),kx={key:0},Km={__name:"nuxt-root",setup(t){const e=()=>null,n=Be(),r=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",r);Rt().beforeEach(u)}const s=!1;kr(ps,jc()),n.hooks.callHookWith(u=>u.map(h=>h()),"vue:setup");const i=Bc(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;F_((u,h,d)=>{if(n.hooks.callHook("vue:error",u,h,d).catch(p=>console.error("[nuxt] Error in `vue:error` hook",p)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(jy(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>ns(u)),!1});const l=!1;return(u,h)=>(qt(),wr(Uh,{onResolve:We(r)},{default:Dc(()=>[We(o)?(qt(),Fc("div",kx)):We(i)?(qt(),wr(We(Px),{key:1,error:We(i)},null,8,["error"])):We(l)?(qt(),wr(We(e),{key:2,context:We(l)},null,8,["context"])):We(s)?(qt(),wr(HI(We(s)),{key:3})):(qt(),wr(We(Ix),{key:4}))]),_:1},8,["onResolve"]))}};let Gm;{let t;Gm=async function(){if(t)return t;const n=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true"),r=n?hA(Km):uA(Km),s=wS({vueApp:r});async function i(o){await s.callHook("app:error",o),s.payload.error||=ls(o)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)}),!n&&bp.id&&s.hook("app:suspense:resolve",()=>{document.getElementById(bp.id)?.remove()});try{await bS(s,fx)}catch(o){i(o)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(yS),await s.hooks.callHook("app:mounted",r),await kn()}catch(o){i(o)}return r},t=Gm().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{kn as $,jx as A,pv as B,Lx as C,xx as D,Bx as E,bt as F,er as G,jc as H,Wx as I,Js as J,Be as K,Xx as L,tL as M,Zx as N,eL as O,L_ as P,v_ as Q,Qx as R,Jx as S,Gx as T,Kx as U,Is as V,Vx as W,Rx as X,bx as Y,yi as Z,mC as _,Fc as a,$o as a0,qa as a1,I_ as a2,T_ as a3,hs as a4,Ox as a5,zx as a6,To as b,ze as c,dn as d,$x as e,wr as f,Fx as g,Ft as h,an as i,kc as j,$e as k,Dc as l,Mx as m,MS as n,qt as o,fy as p,Nx as q,Dx as r,Ue as s,n_ as t,We as u,Hx as v,qx as w,Py as x,Ux as y,bh as z};
