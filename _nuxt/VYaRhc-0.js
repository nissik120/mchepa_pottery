const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CLTcv_P0.js","./Bpf_WSIJ.js","./BgnocPFC.js","./BnQP0ro4.js","./BXChXciJ.js","./DlAUqK2U.js","./BGjGlQq_.js","./CSCUcpnd.js","./DjmOKQPj.js","./1ZScsye2.js","./CKIPp9Xb.js","./DPK000vF.js","./DQxs0pmT.js","./D5nv6ybq.js","./B0IzoYsr.js","./D37XDLWQ.js","./BxC7GiXD.js","./BomBngYq.js","./DQ_cr9yB.js","./CynM5z16.js","./DfySleYO.js","./BtN4u5Hf.js","./BQJGGpTa.js","./5lCyA4PW.js","./CMytt_4C.js","./CVVCkvE2.js","./z7w1gJiH.js","./default.C40rhXyz.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Re={},Gs=[],Rn=()=>{},__=()=>!1,$o=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Dh=t=>t.startsWith("onUpdate:"),ot=Object.assign,Vh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},aI=Object.prototype.hasOwnProperty,Pe=(t,e)=>aI.call(t,e),oe=Array.isArray,Qs=t=>wi(t)==="[object Map]",Ei=t=>wi(t)==="[object Set]",Yd=t=>wi(t)==="[object Date]",cI=t=>wi(t)==="[object RegExp]",he=t=>typeof t=="function",Be=t=>typeof t=="string",hn=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",Dc=t=>(Oe(t)||he(t))&&he(t.then)&&he(t.catch),y_=Object.prototype.toString,wi=t=>y_.call(t),lI=t=>wi(t).slice(8,-1),v_=t=>wi(t)==="[object Object]",Mh=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ys=Nh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vc=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},uI=/-\w/g,Gt=Vc(t=>t.replace(uI,e=>e.slice(1).toUpperCase())),hI=/\B([A-Z])/g,zr=Vc(t=>t.replace(hI,"-$1").toLowerCase()),Mc=Vc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ul=Vc(t=>t?`on${Mc(t)}`:""),Mt=(t,e)=>!Object.is(t,e),Js=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},E_=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ga=t=>{const e=parseFloat(t);return isNaN(e)?t:e},w_=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let Jd;const xc=()=>Jd||(Jd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xh(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?gI(r):xh(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||Oe(t))return t}const fI=/;(?![^(]*\))/g,dI=/:([^]+)/,pI=/\/\*[^]*?\*\//g;function gI(t){const e={};return t.replace(pI,"").split(fI).forEach(n=>{if(n){const r=n.split(dI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Lc(t){let e="";if(Be(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Lc(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_I=Nh(mI);function T_(t){return!!t||t===""}function yI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=jo(t[r],e[r]);return n}function jo(t,e){if(t===e)return!0;let n=Yd(t),r=Yd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=hn(t),r=hn(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?yI(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!jo(t[o],e[o]))return!1}}return String(t)===String(e)}function Lh(t,e){return t.findIndex(n=>jo(n,e))}const I_=t=>!!(t&&t.__v_isRef===!0),A_=t=>Be(t)?t:t==null?"":oe(t)||Oe(t)&&(t.toString===y_||!he(t.toString))?I_(t)?A_(t.value):JSON.stringify(t,b_,2):String(t),b_=(t,e)=>I_(e)?b_(t,e.value):Qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[$l(r,i)+" =>"]=s,n),{})}:Ei(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$l(n))}:hn(e)?$l(e):Oe(e)&&!oe(e)&&!v_(e)?String(e):e,$l=(t,e="")=>{var n;return hn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class R_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){this._on>0&&--this._on===0&&(wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Fh(t){return new R_(t)}function Bo(){return wt}function Qa(t,e=!1){wt&&wt.cleanups.push(t)}let Me;const jl=new WeakSet;class S_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&wt.active&&wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jl.has(this)&&(jl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||P_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xd(this),k_(this);const e=Me,n=cn;Me=this,cn=!0;try{return this.fn()}finally{O_(this),Me=e,cn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jh(e);this.deps=this.depsTail=void 0,Xd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ru(this)&&this.run()}get dirty(){return Ru(this)}}let C_=0,so,io;function P_(t,e=!1){if(t.flags|=8,e){t.next=io,io=t;return}t.next=so,so=t}function Uh(){C_++}function $h(){if(--C_>0)return;if(io){let e=io;for(io=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;so;){let e=so;for(so=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function k_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function O_(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),jh(r),vI(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ru(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(N_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function N_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===wo)||(t.globalVersion=wo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ru(t))))return;t.flags|=2;const e=t.dep,n=Me,r=cn;Me=t,cn=!0;try{k_(t);const s=t.fn(t._value);(e.version===0||Mt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,cn=r,O_(t),t.flags&=-3}}function jh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)jh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function vI(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let cn=!0;const D_=[];function Zn(){D_.push(cn),cn=!1}function er(){const t=D_.pop();cn=t===void 0?!0:t}function Xd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let wo=0;class EI{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Me||!cn||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new EI(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,V_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,wo++,this.notify(e)}notify(e){Uh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$h()}}}function V_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)V_(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ya=new WeakMap,fs=Symbol(""),Su=Symbol(""),To=Symbol("");function It(t,e,n){if(cn&&Me){let r=Ya.get(t);r||Ya.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Fc),s.map=r,s.key=n),s.track()}}function Wn(t,e,n,r,s,i){const o=Ya.get(t);if(!o){wo++;return}const a=l=>{l&&l.trigger()};if(Uh(),e==="clear")o.forEach(a);else{const l=oe(t),u=l&&Mh(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,p)=>{(p==="length"||p===To||!hn(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(To)),e){case"add":l?u&&a(o.get("length")):(a(o.get(fs)),Qs(t)&&a(o.get(Su)));break;case"delete":l||(a(o.get(fs)),Qs(t)&&a(o.get(Su)));break;case"set":Qs(t)&&a(o.get(fs));break}}$h()}function wI(t,e){const n=Ya.get(t);return n&&n.get(e)}function Ls(t){const e=Ie(t);return e===t?e:(It(e,"iterate",To),Zt(t)?e:e.map(dt))}function Uc(t){return It(t=Ie(t),"iterate",To),t}const TI={__proto__:null,[Symbol.iterator](){return Bl(this,Symbol.iterator,dt)},concat(...t){return Ls(this).concat(...t.map(e=>oe(e)?Ls(e):e))},entries(){return Bl(this,"entries",t=>(t[1]=dt(t[1]),t))},every(t,e){return Un(this,"every",t,e,void 0,arguments)},filter(t,e){return Un(this,"filter",t,e,n=>n.map(dt),arguments)},find(t,e){return Un(this,"find",t,e,dt,arguments)},findIndex(t,e){return Un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Un(this,"findLast",t,e,dt,arguments)},findLastIndex(t,e){return Un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Un(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hl(this,"includes",t)},indexOf(...t){return Hl(this,"indexOf",t)},join(t){return Ls(this).join(t)},lastIndexOf(...t){return Hl(this,"lastIndexOf",t)},map(t,e){return Un(this,"map",t,e,void 0,arguments)},pop(){return zi(this,"pop")},push(...t){return zi(this,"push",t)},reduce(t,...e){return Zd(this,"reduce",t,e)},reduceRight(t,...e){return Zd(this,"reduceRight",t,e)},shift(){return zi(this,"shift")},some(t,e){return Un(this,"some",t,e,void 0,arguments)},splice(...t){return zi(this,"splice",t)},toReversed(){return Ls(this).toReversed()},toSorted(t){return Ls(this).toSorted(t)},toSpliced(...t){return Ls(this).toSpliced(...t)},unshift(...t){return zi(this,"unshift",t)},values(){return Bl(this,"values",dt)}};function Bl(t,e,n){const r=Uc(t),s=r[e]();return r!==t&&!Zt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const II=Array.prototype;function Un(t,e,n,r,s,i){const o=Uc(t),a=o!==t&&!Zt(t),l=o[e];if(l!==II[e]){const d=l.apply(t,i);return a?dt(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,dt(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function Zd(t,e,n,r){const s=Uc(t);let i=n;return s!==t&&(Zt(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,dt(a),l,t)}),s[e](i,...r)}function Hl(t,e,n){const r=Ie(t);It(r,"iterate",To);const s=r[e](...n);return(s===-1||s===!1)&&qh(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function zi(t,e,n=[]){Zn(),Uh();const r=Ie(t)[e].apply(t,n);return $h(),er(),r}const AI=Nh("__proto__,__v_isRef,__isVue"),M_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hn));function bI(t){hn(t)||(t=String(t));const e=Ie(this);return It(e,"has",t),e.hasOwnProperty(t)}class x_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?MI:$_:i?U_:F_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let l;if(o&&(l=TI[n]))return l;if(n==="hasOwnProperty")return bI}const a=Reflect.get(e,n,$e(e)?e:r);return(hn(n)?M_.has(n):AI(n))||(s||It(e,"get",n),i)?a:$e(a)?o&&Mh(n)?a:a.value:Oe(a)?s?j_(a):xn(a):a}}class L_ extends x_{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=tr(i);if(!Zt(r)&&!tr(r)&&(i=Ie(i),r=Ie(r)),!oe(e)&&$e(i)&&!$e(r))return l||(i.value=r),!0}const o=oe(e)&&Mh(n)?Number(n)<e.length:Pe(e,n),a=Reflect.set(e,n,r,$e(e)?e:s);return e===Ie(s)&&(o?Mt(r,i)&&Wn(e,"set",n,r):Wn(e,"add",n,r)),a}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Wn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!hn(n)||!M_.has(n))&&It(e,"has",n),r}ownKeys(e){return It(e,"iterate",oe(e)?"length":fs),Reflect.ownKeys(e)}}class RI extends x_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const SI=new L_,CI=new RI,PI=new L_(!0);const Cu=t=>t,ga=t=>Reflect.getPrototypeOf(t);function kI(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=Qs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Cu:e?Ja:dt;return!e&&It(i,"iterate",l?Su:fs),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function ma(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function OI(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),a=Ie(s);t||(Mt(s,a)&&It(o,"get",s),It(o,"get",a));const{has:l}=ga(o),u=e?Cu:t?Ja:dt;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&It(Ie(s),"iterate",fs),s.size},has(s){const i=this.__v_raw,o=Ie(i),a=Ie(s);return t||(Mt(s,a)&&It(o,"has",s),It(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Ie(a),u=e?Cu:t?Ja:dt;return!t&&It(l,"iterate",fs),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return ot(n,t?{add:ma("add"),set:ma("set"),delete:ma("delete"),clear:ma("clear")}:{add(s){!e&&!Zt(s)&&!tr(s)&&(s=Ie(s));const i=Ie(this);return ga(i).has.call(i,s)||(i.add(s),Wn(i,"add",s,s)),this},set(s,i){!e&&!Zt(i)&&!tr(i)&&(i=Ie(i));const o=Ie(this),{has:a,get:l}=ga(o);let u=a.call(o,s);u||(s=Ie(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?Mt(i,h)&&Wn(o,"set",s,i):Wn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:a}=ga(i);let l=o.call(i,s);l||(s=Ie(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&Wn(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&Wn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=kI(s,t,e)}),n}function Bh(t,e){const n=OI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const NI={get:Bh(!1,!1)},DI={get:Bh(!1,!0)},VI={get:Bh(!0,!1)};const F_=new WeakMap,U_=new WeakMap,$_=new WeakMap,MI=new WeakMap;function xI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function LI(t){return t.__v_skip||!Object.isExtensible(t)?0:xI(lI(t))}function xn(t){return tr(t)?t:Hh(t,!1,SI,NI,F_)}function bn(t){return Hh(t,!1,PI,DI,U_)}function j_(t){return Hh(t,!0,CI,VI,$_)}function Hh(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=LI(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Qn(t){return tr(t)?Qn(t.__v_raw):!!(t&&t.__v_isReactive)}function tr(t){return!!(t&&t.__v_isReadonly)}function Zt(t){return!!(t&&t.__v_isShallow)}function qh(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function Wh(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&E_(t,"__v_skip",!0),t}const dt=t=>Oe(t)?xn(t):t,Ja=t=>Oe(t)?j_(t):t;function $e(t){return t?t.__v_isRef===!0:!1}function Ft(t){return B_(t,!1)}function Lr(t){return B_(t,!0)}function B_(t,e){return $e(t)?t:new FI(t,e)}class FI{constructor(e,n){this.dep=new Fc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:dt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Zt(e)||tr(e);e=r?e:Ie(e),Mt(e,n)&&(this._rawValue=e,this._value=r?e:dt(e),this.dep.trigger())}}function We(t){return $e(t)?t.value:t}function rL(t){return he(t)?t():We(t)}const UI={get:(t,e,n)=>e==="__v_raw"?t:We(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function H_(t){return Qn(t)?t:new Proxy(t,UI)}class $I{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Fc,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function q_(t){return new $I(t)}function jI(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=z_(t,n);return e}class BI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return wI(Ie(this._object),this._key)}}class HI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function W_(t,e,n){return $e(t)?t:he(t)?new HI(t):Oe(t)&&arguments.length>1?z_(t,e,n):Ft(t)}function z_(t,e,n){const r=t[e];return $e(r)?r:new BI(t,e,n)}class qI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return P_(this,!0),!0}get value(){const e=this.dep.track();return N_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function WI(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new qI(r,s,n)}const _a={},Xa=new WeakMap;let as;function zI(t,e=!1,n=as){if(n){let r=Xa.get(n);r||Xa.set(n,r=[]),r.push(t)}}function KI(t,e,n=Re){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=k=>s?k:Zt(k)||s===!1||s===0?zn(k,1):zn(k);let h,d,p,m,E=!1,A=!1;if($e(t)?(d=()=>t.value,E=Zt(t)):Qn(t)?(d=()=>u(t),E=!0):oe(t)?(A=!0,E=t.some(k=>Qn(k)||Zt(k)),d=()=>t.map(k=>{if($e(k))return k.value;if(Qn(k))return u(k);if(he(k))return l?l(k,2):k()})):he(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){Zn();try{p()}finally{er()}}const k=as;as=h;try{return l?l(t,3,[m]):t(m)}finally{as=k}}:d=Rn,e&&s){const k=d,D=s===!0?1/0:s;d=()=>zn(k(),D)}const O=Bo(),V=()=>{h.stop(),O&&O.active&&Vh(O.effects,h)};if(i&&e){const k=e;e=(...D)=>{k(...D),V()}}let N=A?new Array(t.length).fill(_a):_a;const w=k=>{if(!(!(h.flags&1)||!h.dirty&&!k))if(e){const D=h.run();if(s||E||(A?D.some((F,b)=>Mt(F,N[b])):Mt(D,N))){p&&p();const F=as;as=h;try{const b=[D,N===_a?void 0:A&&N[0]===_a?[]:N,m];N=D,l?l(e,3,b):e(...b)}finally{as=F}}}else h.run()};return a&&a(w),h=new S_(d),h.scheduler=o?()=>o(w,!1):w,m=k=>zI(k,!1,h),p=h.onStop=()=>{const k=Xa.get(h);if(k){if(l)l(k,4);else for(const D of k)D();Xa.delete(h)}},e?r?w(!0):N=h.run():o?o(w.bind(null,!0),!0):h.run(),V.pause=h.pause.bind(h),V.resume=h.resume.bind(h),V.stop=V,V}function zn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,$e(t))zn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)zn(t[r],e,n);else if(Ei(t)||Qs(t))t.forEach(r=>{zn(r,e,n)});else if(v_(t)){for(const r in t)zn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&zn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ho(t,e,n,r){try{return r?t(...r):t()}catch(s){Ti(s,e,n)}}function fn(t,e,n,r){if(he(t)){const s=Ho(t,e,n,r);return s&&Dc(s)&&s.catch(i=>{Ti(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(fn(t[i],e,n,r));return s}}function Ti(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Re;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}a=a.parent}if(i){Zn(),Ho(i,null,10,[t,l,u]),er();return}}GI(t,n,s,r,o)}function GI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ot=[];let Tn=-1;const Xs=[];let Er=null,$s=0;const K_=Promise.resolve();let Za=null;function Dn(t){const e=Za||K_;return t?e.then(this?t.bind(this):t):e}function QI(t){let e=Tn+1,n=Ot.length;for(;e<n;){const r=e+n>>>1,s=Ot[r],i=Io(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function zh(t){if(!(t.flags&1)){const e=Io(t),n=Ot[Ot.length-1];!n||!(t.flags&2)&&e>=Io(n)?Ot.push(t):Ot.splice(QI(e),0,t),t.flags|=1,G_()}}function G_(){Za||(Za=K_.then(Q_))}function Pu(t){oe(t)?Xs.push(...t):Er&&t.id===-1?Er.splice($s+1,0,t):t.flags&1||(Xs.push(t),t.flags|=1),G_()}function ep(t,e,n=Tn+1){for(;n<Ot.length;n++){const r=Ot[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ot.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ec(t){if(Xs.length){const e=[...new Set(Xs)].sort((n,r)=>Io(n)-Io(r));if(Xs.length=0,Er){Er.push(...e);return}for(Er=e,$s=0;$s<Er.length;$s++){const n=Er[$s];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Er=null,$s=0}}const Io=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Q_(t){try{for(Tn=0;Tn<Ot.length;Tn++){const e=Ot[Tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ho(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Tn<Ot.length;Tn++){const e=Ot[Tn];e&&(e.flags&=-2)}Tn=-1,Ot.length=0,ec(),Za=null,(Ot.length||Xs.length)&&Q_()}}let mt=null,Y_=null;function tc(t){const e=mt;return mt=t,Y_=t&&t.type.__scopeId||null,e}function $c(t,e=mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ac(-1);const i=tc(e);let o;try{o=t(...s)}finally{tc(i),r._d&&ac(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function sL(t,e){if(mt===null)return t;const n=zc(mt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Re]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&zn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function In(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Zn(),fn(l,n,8,[t.el,a,t,e]),er())}}const YI=Symbol("_vte"),J_=t=>t.__isTeleport,qn=Symbol("_leaveCb"),ya=Symbol("_enterCb");function JI(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fr(()=>{t.isMounted=!0}),Ii(()=>{t.isUnmounting=!0}),t}const Qt=[Function,Array],X_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},Z_=t=>{const e=t.subTree;return e.component?Z_(e.component):e},XI={name:"BaseTransition",props:X_,setup(t,{slots:e}){const n=Kr(),r=JI();return()=>{const s=e.default&&ny(e.default(),!0);if(!s||!s.length)return;const i=ey(s),o=Ie(t),{mode:a}=o;if(r.isLeaving)return ql(i);const l=tp(i);if(!l)return ql(i);let u=ku(l,o,r,n,d=>u=d);l.type!==Ze&&oi(l,u);let h=n.subTree&&tp(n.subTree);if(h&&h.type!==Ze&&!on(h,l)&&Z_(n).type!==Ze){let d=ku(h,o,r,n);if(oi(h,d),a==="out-in"&&l.type!==Ze)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},ql(i);a==="in-out"&&l.type!==Ze?d.delayLeave=(p,m,E)=>{const A=ty(r,h);A[String(h.key)]=h,p[qn]=()=>{m(),p[qn]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{E(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function ey(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ze){e=n;break}}return e}const ZI=XI;function ty(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ku(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:E,onLeaveCancelled:A,onBeforeAppear:O,onAppear:V,onAfterAppear:N,onAppearCancelled:w}=e,k=String(t.key),D=ty(n,t),F=(_,I)=>{_&&fn(_,r,9,I)},b=(_,I)=>{const C=I[1];F(_,I),oe(_)?_.every(S=>S.length<=1)&&C():_.length<=1&&C()},v={mode:o,persisted:a,beforeEnter(_){let I=l;if(!n.isMounted)if(i)I=O||l;else return;_[qn]&&_[qn](!0);const C=D[k];C&&on(t,C)&&C.el[qn]&&C.el[qn](),F(I,[_])},enter(_){let I=u,C=h,S=d;if(!n.isMounted)if(i)I=V||u,C=N||h,S=w||d;else return;let T=!1;const le=_[ya]=me=>{T||(T=!0,me?F(S,[_]):F(C,[_]),v.delayedLeave&&v.delayedLeave(),_[ya]=void 0)};I?b(I,[_,le]):le()},leave(_,I){const C=String(t.key);if(_[ya]&&_[ya](!0),n.isUnmounting)return I();F(p,[_]);let S=!1;const T=_[qn]=le=>{S||(S=!0,I(),le?F(A,[_]):F(E,[_]),_[qn]=void 0,D[C]===t&&delete D[C])};D[C]=t,m?b(m,[_,T]):T()},clone(_){const I=ku(_,e,n,r,s);return s&&s(I),I}};return v}function ql(t){if(qo(t))return t=en(t),t.children=null,t}function tp(t){if(!qo(t))return J_(t.type)&&t.children?ey(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function oi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,oi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ny(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===At?(o.patchFlag&128&&s++,r=r.concat(ny(o.children,e,a))):(e||o.type!==Ze)&&r.push(a!=null?en(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function _n(t,e){return he(t)?ot({name:t.name},e,{setup:t}):t}function Kh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const nc=new WeakMap;function Zs(t,e,n,r,s=!1){if(oe(t)){t.forEach((E,A)=>Zs(E,e&&(oe(e)?e[A]:e),n,r,s));return}if(Or(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Zs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?zc(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Re?a.refs={}:a.refs,d=a.setupState,p=Ie(d),m=d===Re?__:E=>Pe(p,E);if(u!=null&&u!==l){if(np(e),Be(u))h[u]=null,m(u)&&(d[u]=null);else if($e(u)){u.value=null;const E=e;E.k&&(h[E.k]=null)}}if(he(l))Ho(l,a,12,[o,h]);else{const E=Be(l),A=$e(l);if(E||A){const O=()=>{if(t.f){const V=E?m(l)?d[l]:h[l]:l.value;if(s)oe(V)&&Vh(V,i);else if(oe(V))V.includes(i)||V.push(i);else if(E)h[l]=[i],m(l)&&(d[l]=h[l]);else{const N=[i];l.value=N,t.k&&(h[t.k]=N)}}else E?(h[l]=o,m(l)&&(d[l]=o)):A&&(l.value=o,t.k&&(h[t.k]=o))};if(o){const V=()=>{O(),nc.delete(t)};V.id=-1,nc.set(t,V),ht(V,n)}else np(t),O()}}}function np(t){const e=nc.get(t);e&&(e.flags|=8,nc.delete(t))}let rp=!1;const Fs=()=>{rp||(console.error("Hydration completed but contains mismatches."),rp=!0)},eA=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",tA=t=>t.namespaceURI.includes("MathML"),va=t=>{if(t.nodeType===1){if(eA(t))return"svg";if(tA(t))return"mathml"}},zs=t=>t.nodeType===8;function nA(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(w,k)=>{if(!k.hasChildNodes()){n(null,w,k),ec(),k._vnode=w;return}d(k.firstChild,w,null,null,null),ec(),k._vnode=w},d=(w,k,D,F,b,v=!1)=>{v=v||!!k.dynamicChildren;const _=zs(w)&&w.data==="[",I=()=>A(w,k,D,F,b,_),{type:C,ref:S,shapeFlag:T,patchFlag:le}=k;let me=w.nodeType;k.el=w,le===-2&&(v=!1,k.dynamicChildren=null);let ee=null;switch(C){case ps:me!==3?k.children===""?(l(k.el=s(""),o(w),w),ee=w):ee=I():(w.data!==k.children&&(Fs(),w.data=k.children),ee=i(w));break;case Ze:N(w)?(ee=i(w),V(k.el=w.content.firstChild,w,D)):me!==8||_?ee=I():ee=i(w);break;case ao:if(_&&(w=i(w),me=w.nodeType),me===1||me===3){ee=w;const ie=!k.children.length;for(let ne=0;ne<k.staticCount;ne++)ie&&(k.children+=ee.nodeType===1?ee.outerHTML:ee.data),ne===k.staticCount-1&&(k.anchor=ee),ee=i(ee);return _?i(ee):ee}else I();break;case At:_?ee=E(w,k,D,F,b,v):ee=I();break;default:if(T&1)(me!==1||k.type.toLowerCase()!==w.tagName.toLowerCase())&&!N(w)?ee=I():ee=p(w,k,D,F,b,v);else if(T&6){k.slotScopeIds=b;const ie=o(w);if(_?ee=O(w):zs(w)&&w.data==="teleport start"?ee=O(w,w.data,"teleport end"):ee=i(w),e(k,ie,null,D,F,va(ie),v),Or(k)&&!k.type.__asyncResolved){let ne;_?(ne=je(At),ne.anchor=ee?ee.previousSibling:ie.lastChild):ne=w.nodeType===3?Vy(""):je("div"),ne.el=w,k.component.subTree=ne}}else T&64?me!==8?ee=I():ee=k.type.hydrate(w,k,D,F,b,v,t,m):T&128&&(ee=k.type.hydrate(w,k,D,F,va(o(w)),b,v,t,d))}return S!=null&&Zs(S,null,F,k),ee},p=(w,k,D,F,b,v)=>{v=v||!!k.dynamicChildren;const{type:_,props:I,patchFlag:C,shapeFlag:S,dirs:T,transition:le}=k,me=_==="input"||_==="option";if(me||C!==-1){T&&In(k,null,D,"created");let ee=!1;if(N(w)){ee=Iy(null,le)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=w.content.firstChild;if(ee){const Ne=ne.getAttribute("class");Ne&&(ne.$cls=Ne),le.beforeEnter(ne)}V(ne,w,D),k.el=w=ne}if(S&16&&!(I&&(I.innerHTML||I.textContent))){let ne=m(w.firstChild,k,w,D,F,b,v);for(;ne;){Ea(w,1)||Fs();const Ne=ne;ne=ne.nextSibling,a(Ne)}}else if(S&8){let ne=k.children;ne[0]===`
`&&(w.tagName==="PRE"||w.tagName==="TEXTAREA")&&(ne=ne.slice(1)),w.textContent!==ne&&(Ea(w,0)||Fs(),w.textContent=k.children)}if(I){if(me||!v||C&48){const ne=w.tagName.includes("-");for(const Ne in I)(me&&(Ne.endsWith("value")||Ne==="indeterminate")||$o(Ne)&&!Ys(Ne)||Ne[0]==="."||ne)&&r(w,Ne,null,I[Ne],void 0,D)}else if(I.onClick)r(w,"onClick",null,I.onClick,void 0,D);else if(C&4&&Qn(I.style))for(const ne in I.style)I.style[ne]}let ie;(ie=I&&I.onVnodeBeforeMount)&&Dt(ie,D,k),T&&In(k,null,D,"beforeMount"),((ie=I&&I.onVnodeMounted)||T||ee)&&ky(()=>{ie&&Dt(ie,D,k),ee&&le.enter(w),T&&In(k,null,D,"mounted")},F)}return w.nextSibling},m=(w,k,D,F,b,v,_)=>{_=_||!!k.dynamicChildren;const I=k.children,C=I.length;for(let S=0;S<C;S++){const T=_?I[S]:I[S]=Wt(I[S]),le=T.type===ps;w?(le&&!_&&S+1<C&&Wt(I[S+1]).type===ps&&(l(s(w.data.slice(T.children.length)),D,i(w)),w.data=T.children),w=d(w,T,F,b,v,_)):le&&!T.children?l(T.el=s(""),D):(Ea(D,1)||Fs(),n(null,T,D,null,F,b,va(D),v))}return w},E=(w,k,D,F,b,v)=>{const{slotScopeIds:_}=k;_&&(b=b?b.concat(_):_);const I=o(w),C=m(i(w),k,I,D,F,b,v);return C&&zs(C)&&C.data==="]"?i(k.anchor=C):(Fs(),l(k.anchor=u("]"),I,C),C)},A=(w,k,D,F,b,v)=>{if(Ea(w.parentElement,1)||Fs(),k.el=null,v){const C=O(w);for(;;){const S=i(w);if(S&&S!==C)a(S);else break}}const _=i(w),I=o(w);return a(w),n(null,k,I,_,D,F,va(I),b),D&&(D.vnode.el=k.el,qc(D,k.el)),_},O=(w,k="[",D="]")=>{let F=0;for(;w;)if(w=i(w),w&&zs(w)&&(w.data===k&&F++,w.data===D)){if(F===0)return i(w);F--}return w},V=(w,k,D)=>{const F=k.parentNode;F&&F.replaceChild(w,k);let b=D;for(;b;)b.vnode.el===k&&(b.vnode.el=b.subTree.el=w),b=b.parent},N=w=>w.nodeType===1&&w.tagName==="TEMPLATE";return[h,d]}const sp="data-allow-mismatch",rA={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ea(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(sp);)t=t.parentElement;const n=t&&t.getAttribute(sp);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:r.includes(rA[e])}}xc().requestIdleCallback;xc().cancelIdleCallback;function sA(t,e){if(zs(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(zs(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Or=t=>!!t.type.__asyncLoader;function ip(t){he(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,h,d=0;const p=()=>(d++,u=null,m()),m=()=>{let E;return u||(E=u=e().catch(A=>{if(A=A instanceof Error?A:new Error(String(A)),l)return new Promise((O,V)=>{l(A,()=>O(p()),()=>V(A),d+1)});throw A}).then(A=>E!==u&&u?u:(A&&(A.__esModule||A[Symbol.toStringTag]==="Module")&&(A=A.default),h=A,A)))};return _n({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(E,A,O){let V=!1;(A.bu||(A.bu=[])).push(()=>V=!0);const N=()=>{V||O()},w=i?()=>{const k=i(N,D=>sA(E,D));k&&(A.bum||(A.bum=[])).push(k)}:N;h?w():m().then(()=>!A.isUnmounted&&w())},get __asyncResolved(){return h},setup(){const E=pt;if(Kh(E),h)return()=>Wl(h,E);const A=w=>{u=null,Ti(w,E,13,!r)};if(a&&E.suspense||ci)return m().then(w=>()=>Wl(w,E)).catch(w=>(A(w),()=>r?je(r,{error:w}):null));const O=Ft(!1),V=Ft(),N=Ft(!!s);return s&&setTimeout(()=>{N.value=!1},s),o!=null&&setTimeout(()=>{if(!O.value&&!V.value){const w=new Error(`Async component timed out after ${o}ms.`);A(w),V.value=w}},o),m().then(()=>{O.value=!0,E.parent&&qo(E.parent.vnode)&&E.parent.update()}).catch(w=>{A(w),V.value=w}),()=>{if(O.value&&h)return Wl(h,E);if(V.value&&r)return je(r,{error:V.value});if(n&&!N.value)return je(n)}}})}function Wl(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=je(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const qo=t=>t.type.__isKeepAlive,iA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Kr(),r=n.ctx;if(!r.renderer)return()=>{const N=e.default&&e.default();return N&&N.length===1?N[0]:N};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,p=d("div");r.activate=(N,w,k,D,F)=>{const b=N.component;u(N,w,k,0,a),l(b.vnode,N,w,k,b,a,D,N.slotScopeIds,F),ht(()=>{b.isDeactivated=!1,b.a&&Js(b.a);const v=N.props&&N.props.onVnodeMounted;v&&Dt(v,b.parent,N)},a)},r.deactivate=N=>{const w=N.component;ic(w.m),ic(w.a),u(N,p,null,1,a),ht(()=>{w.da&&Js(w.da);const k=N.props&&N.props.onVnodeUnmounted;k&&Dt(k,w.parent,N),w.isDeactivated=!0},a)};function m(N){zl(N),h(N,n,a,!0)}function E(N){s.forEach((w,k)=>{const D=Uu(w.type);D&&!N(D)&&A(k)})}function A(N){const w=s.get(N);w&&(!o||!on(w,o))?m(w):o&&zl(o),s.delete(N),i.delete(N)}ln(()=>[t.include,t.exclude],([N,w])=>{N&&E(k=>Yi(N,k)),w&&E(k=>!Yi(w,k))},{flush:"post",deep:!0});let O=null;const V=()=>{O!=null&&(oc(n.subTree.type)?ht(()=>{s.set(O,wa(n.subTree))},n.subTree.suspense):s.set(O,wa(n.subTree)))};return Fr(V),sy(V),Ii(()=>{s.forEach(N=>{const{subTree:w,suspense:k}=n,D=wa(w);if(N.type===D.type&&N.key===D.key){zl(D);const F=D.component.da;F&&ht(F,k);return}m(N)})}),()=>{if(O=null,!e.default)return o=null;const N=e.default(),w=N[0];if(N.length>1)return o=null,N;if(!ys(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let k=wa(w);if(k.type===Ze)return o=null,k;const D=k.type,F=Uu(Or(k)?k.type.__asyncResolved||{}:D),{include:b,exclude:v,max:_}=t;if(b&&(!F||!Yi(b,F))||v&&F&&Yi(v,F))return k.shapeFlag&=-257,o=k,w;const I=k.key==null?D:k.key,C=s.get(I);return k.el&&(k=en(k),w.shapeFlag&128&&(w.ssContent=k)),O=I,C?(k.el=C.el,k.component=C.component,k.transition&&oi(k,k.transition),k.shapeFlag|=512,i.delete(I),i.add(I)):(i.add(I),_&&i.size>parseInt(_,10)&&A(i.values().next().value)),k.shapeFlag|=256,o=k,oc(w.type)?w:k}}},oA=iA;function Yi(t,e){return oe(t)?t.some(n=>Yi(n,e)):Be(t)?t.split(",").includes(e):cI(t)?(t.lastIndex=0,t.test(e)):!1}function aA(t,e){ry(t,"a",e)}function cA(t,e){ry(t,"da",e)}function ry(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(jc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qo(s.parent.vnode)&&lA(r,e,n,s),s=s.parent}}function lA(t,e,n,r){const s=jc(e,t,r,!0);iy(()=>{Vh(r[e],s)},n)}function zl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function wa(t){return t.shapeFlag&128?t.ssContent:t}function jc(t,e,n=pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Zn();const a=vs(n),l=fn(e,n,t,o);return a(),er(),l});return r?s.unshift(i):s.push(i),i}}const ar=t=>(e,n=pt)=>{(!ci||t==="sp")&&jc(t,(...r)=>e(...r),n)},uA=ar("bm"),Fr=ar("m"),hA=ar("bu"),sy=ar("u"),Ii=ar("bum"),iy=ar("um"),fA=ar("sp"),dA=ar("rtg"),pA=ar("rtc");function oy(t,e=pt){jc("ec",t,e)}const ay="components";function op(t,e){return ly(ay,t,!0,e)||t}const cy=Symbol.for("v-ndc");function gA(t){return Be(t)?ly(ay,t,!1)||t:t||cy}function ly(t,e,n=!0,r=!1){const s=mt||pt;if(s){const i=s.type;{const a=Uu(i,!1);if(a&&(a===e||a===Gt(e)||a===Mc(Gt(e))))return i}const o=ap(s[t]||i[t],e)||ap(s.appContext[t],e);return!o&&r?i:o}}function ap(t,e){return t&&(t[e]||t[Gt(e)]||t[Mc(Gt(e))])}function iL(t,e,n,r){let s;const i=n,o=oe(t);if(o||Be(t)){const a=o&&Qn(t);let l=!1,u=!1;a&&(l=!Zt(t),u=tr(t),t=Uc(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(l?u?Ja(dt(t[h])):dt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function oL(t,e,n={},r,s){if(mt.ce||mt.parent&&Or(mt.parent)&&mt.parent.ce)return qt(),Ir(At,null,[je("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),qt();const o=i&&uy(i(n)),a=n.key||o&&o.key,l=Ir(At,{key:(a&&!hn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function uy(t){return t.some(e=>ys(e)?!(e.type===Ze||e.type===At&&!uy(e.children)):!0)?t:null}const Ou=t=>t?xy(t)?zc(t):Ou(t.parent):null,oo=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ou(t.parent),$root:t=>Ou(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>fy(t),$forceUpdate:t=>t.f||(t.f=()=>{zh(t.update)}),$nextTick:t=>t.n||(t.n=Dn.bind(t.proxy)),$watch:t=>xA.bind(t)}),Kl=(t,e)=>t!==Re&&!t.__isScriptSetup&&Pe(t,e),mA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Kl(r,e))return o[e]=1,r[e];if(s!==Re&&Pe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Pe(u,e))return o[e]=3,i[e];if(n!==Re&&Pe(n,e))return o[e]=4,n[e];Nu&&(o[e]=0)}}const h=oo[e];let d,p;if(h)return e==="$attrs"&&It(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Re&&Pe(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Pe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Kl(s,e)?(s[e]=n,!0):r!==Re&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},a){let l,u;return!!(n[a]||t!==Re&&a[0]!=="$"&&Pe(t,a)||Kl(e,a)||(l=i[0])&&Pe(l,a)||Pe(r,a)||Pe(oo,a)||Pe(s.config.globalProperties,a)||(u=o.__cssModules)&&u[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rc(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function aL(t,e){return!t||!e?t||e:oe(t)&&oe(e)?t.concat(e):ot({},rc(t),rc(e))}function cL(t){const e=Kr();let n=t();return Lu(),Dc(n)&&(n=n.catch(r=>{throw vs(e),r})),[n,()=>vs(e)]}let Nu=!0;function _A(t){const e=fy(t),n=t.proxy,r=t.ctx;Nu=!1,e.beforeCreate&&cp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:m,updated:E,activated:A,deactivated:O,beforeDestroy:V,beforeUnmount:N,destroyed:w,unmounted:k,render:D,renderTracked:F,renderTriggered:b,errorCaptured:v,serverPrefetch:_,expose:I,inheritAttrs:C,components:S,directives:T,filters:le}=e;if(u&&yA(u,r,null),o)for(const ie in o){const ne=o[ie];he(ne)&&(r[ie]=ne.bind(n))}if(s){const ie=s.call(n,n);Oe(ie)&&(t.data=xn(ie))}if(Nu=!0,i)for(const ie in i){const ne=i[ie],Ne=he(ne)?ne.bind(n,n):he(ne.get)?ne.get.bind(n,n):Rn,vn=!he(ne)&&he(ne.set)?ne.set.bind(n):Rn,jt=ze({get:Ne,set:vn});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>jt.value,set:lt=>jt.value=lt})}if(a)for(const ie in a)hy(a[ie],r,n,ie);if(l){const ie=he(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(ne=>{Nr(ne,ie[ne])})}h&&cp(h,t,"c");function ee(ie,ne){oe(ne)?ne.forEach(Ne=>ie(Ne.bind(n))):ne&&ie(ne.bind(n))}if(ee(uA,d),ee(Fr,p),ee(hA,m),ee(sy,E),ee(aA,A),ee(cA,O),ee(oy,v),ee(pA,F),ee(dA,b),ee(Ii,N),ee(iy,k),ee(fA,_),oe(I))if(I.length){const ie=t.exposed||(t.exposed={});I.forEach(ne=>{Object.defineProperty(ie,ne,{get:()=>n[ne],set:Ne=>n[ne]=Ne,enumerable:!0})})}else t.exposed||(t.exposed={});D&&t.render===Rn&&(t.render=D),C!=null&&(t.inheritAttrs=C),S&&(t.components=S),T&&(t.directives=T),_&&Kh(t)}function yA(t,e,n=Rn){oe(t)&&(t=Du(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Rt(s.from||r,s.default,!0):i=Rt(s.from||r):i=Rt(s),$e(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function cp(t,e,n){fn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function hy(t,e,n,r){let s=r.includes(".")?Ry(n,r):()=>n[r];if(Be(t)){const i=e[t];he(i)&&ln(s,i)}else if(he(t))ln(s,t.bind(n));else if(Oe(t))if(oe(t))t.forEach(i=>hy(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&ln(s,i,t)}}function fy(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>sc(l,u,o,!0)),sc(l,e,o)),Oe(e)&&i.set(e,l),l}function sc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&sc(t,i,n,!0),s&&s.forEach(o=>sc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=vA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const vA={data:lp,props:up,emits:up,methods:Ji,computed:Ji,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Ji,directives:Ji,watch:wA,provide:lp,inject:EA};function lp(t,e){return e?t?function(){return ot(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function EA(t,e){return Ji(Du(t),Du(e))}function Du(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ji(t,e){return t?ot(Object.create(null),t,e):e}function up(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:ot(Object.create(null),rc(t),rc(e??{})):e}function wA(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function dy(){return{app:null,config:{isNativeTag:__,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let TA=0;function IA(t,e){return function(r,s=null){he(r)||(r=ot({},r)),s!=null&&!Oe(s)&&(s=null);const i=dy(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:TA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ob,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&he(h.install)?(o.add(h),h.install(u,...d)):he(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!l){const m=u._ceVNode||je(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(m,h):t(m,h,p),l=!0,u._container=h,h.__vue_app__=u,zc(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(fn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=ds;ds=u;try{return h()}finally{ds=d}}};return u}}let ds=null;function Nr(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function Rt(t,e,n=!1){const r=Kr();if(r||ds){let s=ds?ds._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}function Gh(){return!!(Kr()||ds)}const py={},gy=()=>Object.create(py),my=t=>Object.getPrototypeOf(t)===py;function AA(t,e,n,r=!1){const s={},i=gy();t.propsDefaults=Object.create(null),_y(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:bn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function bA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(Hc(t.emitsOptions,p))continue;const m=e[p];if(l)if(Pe(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const E=Gt(p);s[E]=Vu(l,a,E,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{_y(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!Pe(e,d)&&((h=zr(d))===d||!Pe(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=Vu(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Pe(e,d))&&(delete i[d],u=!0)}u&&Wn(t.attrs,"set","")}function _y(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ys(l))continue;const u=e[l];let h;s&&Pe(s,h=Gt(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Hc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=a||Re;for(let h=0;h<i.length;h++){const d=i[h];n[d]=Vu(s,l,d,u[d],t,!Pe(u,d))}}return o}function Vu(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Pe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=vs(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===zr(n))&&(r=!0))}return r}const RA=new WeakMap;function yy(t,e,n=!1){const r=n?RA:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!he(t)){const h=d=>{l=!0;const[p,m]=yy(d,e,!0);ot(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Oe(t)&&r.set(t,Gs),Gs;if(oe(i))for(let h=0;h<i.length;h++){const d=Gt(i[h]);hp(d)&&(o[d]=Re)}else if(i)for(const h in i){const d=Gt(h);if(hp(d)){const p=i[h],m=o[d]=oe(p)||he(p)?{type:p}:ot({},p),E=m.type;let A=!1,O=!0;if(oe(E))for(let V=0;V<E.length;++V){const N=E[V],w=he(N)&&N.name;if(w==="Boolean"){A=!0;break}else w==="String"&&(O=!1)}else A=he(E)&&E.name==="Boolean";m[0]=A,m[1]=O,(A||Pe(m,"default"))&&a.push(d)}}const u=[o,a];return Oe(t)&&r.set(t,u),u}function hp(t){return t[0]!=="$"&&!Ys(t)}const Qh=t=>t==="_"||t==="_ctx"||t==="$stable",Yh=t=>oe(t)?t.map(Wt):[Wt(t)],SA=(t,e,n)=>{if(e._n)return e;const r=$c((...s)=>Yh(e(...s)),n);return r._c=!1,r},vy=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Qh(s))continue;const i=t[s];if(he(i))e[s]=SA(s,i,r);else if(i!=null){const o=Yh(i);e[s]=()=>o}}},Ey=(t,e)=>{const n=Yh(e);t.slots.default=()=>n},wy=(t,e,n)=>{for(const r in e)(n||!Qh(r))&&(t[r]=e[r])},CA=(t,e,n)=>{const r=t.slots=gy();if(t.vnode.shapeFlag&32){const s=e._;s?(wy(r,e,n),n&&E_(r,"_",s,!0)):vy(e,r)}else e&&Ey(t,e)},PA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:wy(s,e,n):(i=!e.$stable,vy(e,s)),o=e}else e&&(Ey(t,e),o={default:1});if(i)for(const a in s)!Qh(a)&&o[a]==null&&delete s[a]},ht=ky;function kA(t){return Ty(t)}function OA(t){return Ty(t,nA)}function Ty(t,e){const n=xc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:m=Rn,insertStaticContent:E}=t,A=(R,P,x,H=null,U=null,q=null,K=void 0,W=null,G=!!P.dynamicChildren)=>{if(R===P)return;R&&!on(R,P)&&(H=$(R),lt(R,U,q,!0),R=null),P.patchFlag===-2&&(G=!1,P.dynamicChildren=null);const{type:z,ref:ce,shapeFlag:J}=P;switch(z){case ps:O(R,P,x,H);break;case Ze:V(R,P,x,H);break;case ao:R==null&&N(P,x,H,K);break;case At:S(R,P,x,H,U,q,K,W,G);break;default:J&1?D(R,P,x,H,U,q,K,W,G):J&6?T(R,P,x,H,U,q,K,W,G):(J&64||J&128)&&z.process(R,P,x,H,U,q,K,W,G,se)}ce!=null&&U?Zs(ce,R&&R.ref,q,P||R,!P):ce==null&&R&&R.ref!=null&&Zs(R.ref,null,q,R,!0)},O=(R,P,x,H)=>{if(R==null)r(P.el=a(P.children),x,H);else{const U=P.el=R.el;P.children!==R.children&&u(U,P.children)}},V=(R,P,x,H)=>{R==null?r(P.el=l(P.children||""),x,H):P.el=R.el},N=(R,P,x,H)=>{[R.el,R.anchor]=E(R.children,P,x,H,R.el,R.anchor)},w=({el:R,anchor:P},x,H)=>{let U;for(;R&&R!==P;)U=p(R),r(R,x,H),R=U;r(P,x,H)},k=({el:R,anchor:P})=>{let x;for(;R&&R!==P;)x=p(R),s(R),R=x;s(P)},D=(R,P,x,H,U,q,K,W,G)=>{P.type==="svg"?K="svg":P.type==="math"&&(K="mathml"),R==null?F(P,x,H,U,q,K,W,G):_(R,P,U,q,K,W,G)},F=(R,P,x,H,U,q,K,W)=>{let G,z;const{props:ce,shapeFlag:J,transition:re,dirs:de}=R;if(G=R.el=o(R.type,q,ce&&ce.is,ce),J&8?h(G,R.children):J&16&&v(R.children,G,null,H,U,Gl(R,q),K,W),de&&In(R,null,H,"created"),b(G,R,R.scopeId,K,H),ce){for(const Se in ce)Se!=="value"&&!Ys(Se)&&i(G,Se,null,ce[Se],q,H);"value"in ce&&i(G,"value",null,ce.value,q),(z=ce.onVnodeBeforeMount)&&Dt(z,H,R)}de&&In(R,null,H,"beforeMount");const ye=Iy(U,re);ye&&re.beforeEnter(G),r(G,P,x),((z=ce&&ce.onVnodeMounted)||ye||de)&&ht(()=>{z&&Dt(z,H,R),ye&&re.enter(G),de&&In(R,null,H,"mounted")},U)},b=(R,P,x,H,U)=>{if(x&&m(R,x),H)for(let q=0;q<H.length;q++)m(R,H[q]);if(U){let q=U.subTree;if(P===q||oc(q.type)&&(q.ssContent===P||q.ssFallback===P)){const K=U.vnode;b(R,K,K.scopeId,K.slotScopeIds,U.parent)}}},v=(R,P,x,H,U,q,K,W,G=0)=>{for(let z=G;z<R.length;z++){const ce=R[z]=W?wr(R[z]):Wt(R[z]);A(null,ce,P,x,H,U,q,K,W)}},_=(R,P,x,H,U,q,K)=>{const W=P.el=R.el;let{patchFlag:G,dynamicChildren:z,dirs:ce}=P;G|=R.patchFlag&16;const J=R.props||Re,re=P.props||Re;let de;if(x&&rs(x,!1),(de=re.onVnodeBeforeUpdate)&&Dt(de,x,P,R),ce&&In(P,R,x,"beforeUpdate"),x&&rs(x,!0),(J.innerHTML&&re.innerHTML==null||J.textContent&&re.textContent==null)&&h(W,""),z?I(R.dynamicChildren,z,W,x,H,Gl(P,U),q):K||ne(R,P,W,null,x,H,Gl(P,U),q,!1),G>0){if(G&16)C(W,J,re,x,U);else if(G&2&&J.class!==re.class&&i(W,"class",null,re.class,U),G&4&&i(W,"style",J.style,re.style,U),G&8){const ye=P.dynamicProps;for(let Se=0;Se<ye.length;Se++){const be=ye[Se],vt=J[be],nt=re[be];(nt!==vt||be==="value")&&i(W,be,vt,nt,U,x)}}G&1&&R.children!==P.children&&h(W,P.children)}else!K&&z==null&&C(W,J,re,x,U);((de=re.onVnodeUpdated)||ce)&&ht(()=>{de&&Dt(de,x,P,R),ce&&In(P,R,x,"updated")},H)},I=(R,P,x,H,U,q,K)=>{for(let W=0;W<P.length;W++){const G=R[W],z=P[W],ce=G.el&&(G.type===At||!on(G,z)||G.shapeFlag&198)?d(G.el):x;A(G,z,ce,null,H,U,q,K,!0)}},C=(R,P,x,H,U)=>{if(P!==x){if(P!==Re)for(const q in P)!Ys(q)&&!(q in x)&&i(R,q,P[q],null,U,H);for(const q in x){if(Ys(q))continue;const K=x[q],W=P[q];K!==W&&q!=="value"&&i(R,q,W,K,U,H)}"value"in x&&i(R,"value",P.value,x.value,U)}},S=(R,P,x,H,U,q,K,W,G)=>{const z=P.el=R?R.el:a(""),ce=P.anchor=R?R.anchor:a("");let{patchFlag:J,dynamicChildren:re,slotScopeIds:de}=P;de&&(W=W?W.concat(de):de),R==null?(r(z,x,H),r(ce,x,H),v(P.children||[],x,ce,U,q,K,W,G)):J>0&&J&64&&re&&R.dynamicChildren?(I(R.dynamicChildren,re,x,U,q,K,W),(P.key!=null||U&&P===U.subTree)&&Ay(R,P,!0)):ne(R,P,x,ce,U,q,K,W,G)},T=(R,P,x,H,U,q,K,W,G)=>{P.slotScopeIds=W,R==null?P.shapeFlag&512?U.ctx.activate(P,x,H,K,G):le(P,x,H,U,q,K,G):me(R,P,G)},le=(R,P,x,H,U,q,K)=>{const W=R.component=eb(R,H,U);if(qo(R)&&(W.ctx.renderer=se),tb(W,!1,K),W.asyncDep){if(U&&U.registerDep(W,ee,K),!R.el){const G=W.subTree=je(Ze);V(null,G,P,x),R.placeholder=G.el}}else ee(W,R,P,x,U,q,K)},me=(R,P,x)=>{const H=P.component=R.component;if(BA(R,P,x))if(H.asyncDep&&!H.asyncResolved){ie(H,P,x);return}else H.next=P,H.update();else P.el=R.el,H.vnode=P},ee=(R,P,x,H,U,q,K)=>{const W=()=>{if(R.isMounted){let{next:J,bu:re,u:de,parent:ye,vnode:Se}=R;{const rt=by(R);if(rt){J&&(J.el=Se.el,ie(R,J,K)),rt.asyncDep.then(()=>{R.isUnmounted||W()});return}}let be=J,vt;rs(R,!1),J?(J.el=Se.el,ie(R,J,K)):J=Se,re&&Js(re),(vt=J.props&&J.props.onVnodeBeforeUpdate)&&Dt(vt,ye,J,Se),rs(R,!0);const nt=Ql(R),Nt=R.subTree;R.subTree=nt,A(Nt,nt,d(Nt.el),$(Nt),R,U,q),J.el=nt.el,be===null&&qc(R,nt.el),de&&ht(de,U),(vt=J.props&&J.props.onVnodeUpdated)&&ht(()=>Dt(vt,ye,J,Se),U)}else{let J;const{el:re,props:de}=P,{bm:ye,m:Se,parent:be,root:vt,type:nt}=R,Nt=Or(P);if(rs(R,!1),ye&&Js(ye),!Nt&&(J=de&&de.onVnodeBeforeMount)&&Dt(J,be,P),rs(R,!0),re&&De){const rt=()=>{R.subTree=Ql(R),De(re,R.subTree,R,U,null)};Nt&&nt.__asyncHydrate?nt.__asyncHydrate(re,R,rt):rt()}else{vt.ce&&vt.ce._def.shadowRoot!==!1&&vt.ce._injectChildStyle(nt);const rt=R.subTree=Ql(R);A(null,rt,x,H,R,U,q),P.el=rt.el}if(Se&&ht(Se,U),!Nt&&(J=de&&de.onVnodeMounted)){const rt=P;ht(()=>Dt(J,be,rt),U)}(P.shapeFlag&256||be&&Or(be.vnode)&&be.vnode.shapeFlag&256)&&R.a&&ht(R.a,U),R.isMounted=!0,P=x=H=null}};R.scope.on();const G=R.effect=new S_(W);R.scope.off();const z=R.update=G.run.bind(G),ce=R.job=G.runIfDirty.bind(G);ce.i=R,ce.id=R.uid,G.scheduler=()=>zh(ce),rs(R,!0),z()},ie=(R,P,x)=>{P.component=R;const H=R.vnode.props;R.vnode=P,R.next=null,bA(R,P.props,H,x),PA(R,P.children,x),Zn(),ep(R),er()},ne=(R,P,x,H,U,q,K,W,G=!1)=>{const z=R&&R.children,ce=R?R.shapeFlag:0,J=P.children,{patchFlag:re,shapeFlag:de}=P;if(re>0){if(re&128){vn(z,J,x,H,U,q,K,W,G);return}else if(re&256){Ne(z,J,x,H,U,q,K,W,G);return}}de&8?(ce&16&&yt(z,U,q),J!==z&&h(x,J)):ce&16?de&16?vn(z,J,x,H,U,q,K,W,G):yt(z,U,q,!0):(ce&8&&h(x,""),de&16&&v(J,x,H,U,q,K,W,G))},Ne=(R,P,x,H,U,q,K,W,G)=>{R=R||Gs,P=P||Gs;const z=R.length,ce=P.length,J=Math.min(z,ce);let re;for(re=0;re<J;re++){const de=P[re]=G?wr(P[re]):Wt(P[re]);A(R[re],de,x,null,U,q,K,W,G)}z>ce?yt(R,U,q,!0,!1,J):v(P,x,H,U,q,K,W,G,J)},vn=(R,P,x,H,U,q,K,W,G)=>{let z=0;const ce=P.length;let J=R.length-1,re=ce-1;for(;z<=J&&z<=re;){const de=R[z],ye=P[z]=G?wr(P[z]):Wt(P[z]);if(on(de,ye))A(de,ye,x,null,U,q,K,W,G);else break;z++}for(;z<=J&&z<=re;){const de=R[J],ye=P[re]=G?wr(P[re]):Wt(P[re]);if(on(de,ye))A(de,ye,x,null,U,q,K,W,G);else break;J--,re--}if(z>J){if(z<=re){const de=re+1,ye=de<ce?P[de].el:H;for(;z<=re;)A(null,P[z]=G?wr(P[z]):Wt(P[z]),x,ye,U,q,K,W,G),z++}}else if(z>re)for(;z<=J;)lt(R[z],U,q,!0),z++;else{const de=z,ye=z,Se=new Map;for(z=ye;z<=re;z++){const Qe=P[z]=G?wr(P[z]):Wt(P[z]);Qe.key!=null&&Se.set(Qe.key,z)}let be,vt=0;const nt=re-ye+1;let Nt=!1,rt=0;const Fn=new Array(nt);for(z=0;z<nt;z++)Fn[z]=0;for(z=de;z<=J;z++){const Qe=R[z];if(vt>=nt){lt(Qe,U,q,!0);continue}let Bt;if(Qe.key!=null)Bt=Se.get(Qe.key);else for(be=ye;be<=re;be++)if(Fn[be-ye]===0&&on(Qe,P[be])){Bt=be;break}Bt===void 0?lt(Qe,U,q,!0):(Fn[Bt-ye]=z+1,Bt>=rt?rt=Bt:Nt=!0,A(Qe,P[Bt],x,null,U,q,K,W,G),vt++)}const Ds=Nt?NA(Fn):Gs;for(be=Ds.length-1,z=nt-1;z>=0;z--){const Qe=ye+z,Bt=P[Qe],Xr=P[Qe+1],Oi=Qe+1<ce?Xr.el||Xr.placeholder:H;Fn[z]===0?A(null,Bt,x,Oi,U,q,K,W,G):Nt&&(be<0||z!==Ds[be]?jt(Bt,x,Oi,2):be--)}}},jt=(R,P,x,H,U=null)=>{const{el:q,type:K,transition:W,children:G,shapeFlag:z}=R;if(z&6){jt(R.component.subTree,P,x,H);return}if(z&128){R.suspense.move(P,x,H);return}if(z&64){K.move(R,P,x,se);return}if(K===At){r(q,P,x);for(let J=0;J<G.length;J++)jt(G[J],P,x,H);r(R.anchor,P,x);return}if(K===ao){w(R,P,x);return}if(H!==2&&z&1&&W)if(H===0)W.beforeEnter(q),r(q,P,x),ht(()=>W.enter(q),U);else{const{leave:J,delayLeave:re,afterLeave:de}=W,ye=()=>{R.ctx.isUnmounted?s(q):r(q,P,x)},Se=()=>{q._isLeaving&&q[qn](!0),J(q,()=>{ye(),de&&de()})};re?re(q,ye,Se):Se()}else r(q,P,x)},lt=(R,P,x,H=!1,U=!1)=>{const{type:q,props:K,ref:W,children:G,dynamicChildren:z,shapeFlag:ce,patchFlag:J,dirs:re,cacheIndex:de}=R;if(J===-2&&(U=!1),W!=null&&(Zn(),Zs(W,null,x,R,!0),er()),de!=null&&(P.renderCache[de]=void 0),ce&256){P.ctx.deactivate(R);return}const ye=ce&1&&re,Se=!Or(R);let be;if(Se&&(be=K&&K.onVnodeBeforeUnmount)&&Dt(be,P,R),ce&6)lr(R.component,x,H);else{if(ce&128){R.suspense.unmount(x,H);return}ye&&In(R,null,P,"beforeUnmount"),ce&64?R.type.remove(R,P,x,se,H):z&&!z.hasOnce&&(q!==At||J>0&&J&64)?yt(z,P,x,!1,!0):(q===At&&J&384||!U&&ce&16)&&yt(G,P,x),H&&Ln(R)}(Se&&(be=K&&K.onVnodeUnmounted)||ye)&&ht(()=>{be&&Dt(be,P,R),ye&&In(R,null,P,"unmounted")},x)},Ln=R=>{const{type:P,el:x,anchor:H,transition:U}=R;if(P===At){rn(x,H);return}if(P===ao){k(R);return}const q=()=>{s(x),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(R.shapeFlag&1&&U&&!U.persisted){const{leave:K,delayLeave:W}=U,G=()=>K(x,q);W?W(R.el,q,G):G()}else q()},rn=(R,P)=>{let x;for(;R!==P;)x=p(R),s(R),R=x;s(P)},lr=(R,P,x)=>{const{bum:H,scope:U,job:q,subTree:K,um:W,m:G,a:z}=R;ic(G),ic(z),H&&Js(H),U.stop(),q&&(q.flags|=8,lt(K,R,P,x)),W&&ht(W,P),ht(()=>{R.isUnmounted=!0},P)},yt=(R,P,x,H=!1,U=!1,q=0)=>{for(let K=q;K<R.length;K++)lt(R[K],P,x,H,U)},$=R=>{if(R.shapeFlag&6)return $(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const P=p(R.anchor||R.el),x=P&&P[YI];return x?p(x):P};let Z=!1;const Y=(R,P,x)=>{R==null?P._vnode&&lt(P._vnode,null,null,!0):A(P._vnode||null,R,P,null,null,null,x),P._vnode=R,Z||(Z=!0,ep(),ec(),Z=!1)},se={p:A,um:lt,m:jt,r:Ln,mt:le,mc:v,pc:ne,pbc:I,n:$,o:t};let Ae,De;return e&&([Ae,De]=e(se)),{render:Y,hydrate:Ae,createApp:IA(Y,Ae)}}function Gl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Iy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ay(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=wr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ay(o,a)),a.type===ps&&a.patchFlag!==-1&&(a.el=o.el),a.type===Ze&&!a.el&&(a.el=o.el)}}function NA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function by(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:by(e)}function ic(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const DA=Symbol.for("v-scx"),VA=()=>Rt(DA);function lL(t,e){return Bc(t,null,e)}function MA(t,e){return Bc(t,null,{flush:"sync"})}function ln(t,e,n){return Bc(t,e,n)}function Bc(t,e,n=Re){const{immediate:r,deep:s,flush:i,once:o}=n,a=ot({},n),l=e&&r||!e&&i!=="post";let u;if(ci){if(i==="sync"){const m=VA();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Rn,m.resume=Rn,m.pause=Rn,m}}const h=pt;a.call=(m,E,A)=>fn(m,h,E,A);let d=!1;i==="post"?a.scheduler=m=>{ht(m,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,E)=>{E?m():zh(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=KI(t,e,a);return ci&&(u?u.push(p):l&&p()),p}function xA(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?Ry(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=vs(this),a=Bc(s,i.bind(r),n);return o(),a}function Ry(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function uL(t,e,n=Re){const r=Kr(),s=Gt(e),i=zr(e),o=Sy(t,s),a=q_((l,u)=>{let h,d=Re,p;return MA(()=>{const m=t[s];Mt(h,m)&&(h=m,u())}),{get(){return l(),n.get?n.get(h):h},set(m){const E=n.set?n.set(m):m;if(!Mt(E,h)&&!(d!==Re&&Mt(m,d)))return;const A=r.vnode.props;A&&(e in A||s in A||i in A)&&(`onUpdate:${e}`in A||`onUpdate:${s}`in A||`onUpdate:${i}`in A)||(h=m,u()),r.emit(`update:${e}`,E),Mt(m,E)&&Mt(m,d)&&!Mt(E,p)&&u(),d=m,p=E}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||Re:a,done:!1}:{done:!0}}}},a}const Sy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gt(e)}Modifiers`]||t[`${zr(e)}Modifiers`];function LA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let s=n;const i=e.startsWith("update:"),o=i&&Sy(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Be(h)?h.trim():h)),o.number&&(s=n.map(Ga)));let a,l=r[a=Ul(e)]||r[a=Ul(Gt(e))];!l&&i&&(l=r[a=Ul(zr(e))]),l&&fn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,fn(u,t,6,s)}}const FA=new WeakMap;function Cy(t,e,n=!1){const r=n?FA:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!he(t)){const l=u=>{const h=Cy(u,e,!0);h&&(a=!0,ot(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Oe(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>o[l]=null):ot(o,i),Oe(t)&&r.set(t,o),o)}function Hc(t,e){return!t||!$o(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,zr(e))||Pe(t,e))}function Ql(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:m,ctx:E,inheritAttrs:A}=t,O=tc(t);let V,N;try{if(n.shapeFlag&4){const k=s||r,D=k;V=Wt(u.call(D,k,h,d,m,p,E)),N=a}else{const k=e;V=Wt(k.length>1?k(d,{attrs:a,slots:o,emit:l}):k(d,null)),N=e.props?a:$A(a)}}catch(k){co.length=0,Ti(k,t,1),V=je(Ze)}let w=V;if(N&&A!==!1){const k=Object.keys(N),{shapeFlag:D}=w;k.length&&D&7&&(i&&k.some(Dh)&&(N=jA(N,i)),w=en(w,N,!1,!0))}return n.dirs&&(w=en(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&oi(w,n.transition),V=w,tc(O),V}function UA(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(ys(s)){if(s.type!==Ze||s.children==="v-if"){if(n)return;n=s}}else return}return n}const $A=t=>{let e;for(const n in t)(n==="class"||n==="style"||$o(n))&&((e||(e={}))[n]=t[n]);return e},jA=(t,e)=>{const n={};for(const r in t)(!Dh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function BA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?fp(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!Hc(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?fp(r,o,u):!0:!!o;return!1}function fp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Hc(n,i))return!0}return!1}function qc({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const oc=t=>t.__isSuspense;let Mu=0;const HA={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)qA(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}WA(t,e,n,r,s,o,a,l,u)}},hydrate:zA,normalize:KA},Jh=HA;function Ao(t,e){const n=t.props&&t.props[e];he(n)&&n()}function qA(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),p=t.suspense=Py(t,s,r,e,d,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,d,null,r,p,i,o),p.deps>0?(Ao(t,"onPending"),Ao(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),ei(p,t.ssFallback)):p.resolve(!1,!0)}function WA(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const p=e.ssContent,m=e.ssFallback,{activeBranch:E,pendingBranch:A,isInFallback:O,isHydrating:V}=d;if(A)d.pendingBranch=p,on(A,p)?(l(A,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():O&&(V||(l(E,m,n,r,s,null,i,o,a),ei(d,m)))):(d.pendingId=Mu++,V?(d.isHydrating=!1,d.activeBranch=A):u(A,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),O?(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(E,m,n,r,s,null,i,o,a),ei(d,m))):E&&on(E,p)?(l(E,p,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(E&&on(E,p))l(E,p,n,r,s,d,i,o,a),ei(d,p);else if(Ao(e,"onPending"),d.pendingBranch=p,p.shapeFlag&512?d.pendingId=p.component.suspenseId:d.pendingId=Mu++,l(null,p,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:N,pendingId:w}=d;N>0?setTimeout(()=>{d.pendingId===w&&d.fallback(m)},N):N===0&&d.fallback(m)}}function Py(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m:p,um:m,n:E,o:{parentNode:A,remove:O}}=u;let V;const N=GA(t);N&&e&&e.pendingBranch&&(V=e.pendingId,e.deps++);const w=t.props?w_(t.props.timeout):void 0,k=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Mu++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(F=!1,b=!1){const{vnode:v,activeBranch:_,pendingBranch:I,pendingId:C,effects:S,parentComponent:T,container:le}=D;let me=!1;D.isHydrating?D.isHydrating=!1:F||(me=_&&I.transition&&I.transition.mode==="out-in",me&&(_.transition.afterLeave=()=>{C===D.pendingId&&(p(I,le,i===k?E(_):i,0),Pu(S))}),_&&(A(_.el)===le&&(i=E(_)),m(_,T,D,!0)),me||p(I,le,i,0)),ei(D,I),D.pendingBranch=null,D.isInFallback=!1;let ee=D.parent,ie=!1;for(;ee;){if(ee.pendingBranch){ee.effects.push(...S),ie=!0;break}ee=ee.parent}!ie&&!me&&Pu(S),D.effects=[],N&&e&&e.pendingBranch&&V===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),Ao(v,"onResolve")},fallback(F){if(!D.pendingBranch)return;const{vnode:b,activeBranch:v,parentComponent:_,container:I,namespace:C}=D;Ao(b,"onFallback");const S=E(v),T=()=>{D.isInFallback&&(d(null,F,I,S,_,null,C,a,l),ei(D,F))},le=F.transition&&F.transition.mode==="out-in";le&&(v.transition.afterLeave=T),D.isInFallback=!0,m(v,_,null,!0),le||T()},move(F,b,v){D.activeBranch&&p(D.activeBranch,F,b,v),D.container=F},next(){return D.activeBranch&&E(D.activeBranch)},registerDep(F,b,v){const _=!!D.pendingBranch;_&&D.deps++;const I=F.vnode.el;F.asyncDep.catch(C=>{Ti(C,F,0)}).then(C=>{if(F.isUnmounted||D.isUnmounted||D.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:S}=F;Fu(F,C),I&&(S.el=I);const T=!I&&F.subTree.el;b(F,S,A(I||F.subTree.el),I?null:E(F.subTree),D,o,v),T&&O(T),qc(F,S.el),_&&--D.deps===0&&D.resolve()})},unmount(F,b){D.isUnmounted=!0,D.activeBranch&&m(D.activeBranch,n,F,b),D.pendingBranch&&m(D.pendingBranch,n,F,b)}};return D}function zA(t,e,n,r,s,i,o,a,l){const u=e.suspense=Py(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function KA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=dp(r?n.default:n),t.ssFallback=r?dp(n.fallback):je(Ze)}function dp(t){let e;if(he(t)){const n=ai&&t._c;n&&(t._d=!1,qt()),t=t(),n&&(t._d=!0,e=Lt,Oy())}return oe(t)&&(t=UA(t)),t=Wt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function ky(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Pu(t)}function ei(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,qc(r,s))}function GA(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const At=Symbol.for("v-fgt"),ps=Symbol.for("v-txt"),Ze=Symbol.for("v-cmt"),ao=Symbol.for("v-stc"),co=[];let Lt=null;function qt(t=!1){co.push(Lt=t?null:[])}function Oy(){co.pop(),Lt=co[co.length-1]||null}let ai=1;function ac(t,e=!1){ai+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function Ny(t){return t.dynamicChildren=ai>0?Lt||Gs:null,Oy(),ai>0&&Lt&&Lt.push(t),t}function Wc(t,e,n,r,s,i){return Ny(bo(t,e,n,r,s,i,!0))}function Ir(t,e,n,r,s){return Ny(je(t,e,n,r,s,!0))}function ys(t){return t?t.__v_isVNode===!0:!1}function on(t,e){return t.type===e.type&&t.key===e.key}const Dy=({key:t})=>t??null,Va=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||$e(t)||he(t)?{i:mt,r:t,k:e,f:!!n}:t:null);function bo(t,e=null,n=null,r=0,s=null,i=t===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dy(e),ref:e&&Va(e),scopeId:Y_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mt};return a?(Xh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),ai>0&&!o&&Lt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Lt.push(l),l}const je=QA;function QA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===cy)&&(t=Ze),ys(t)){const a=en(t,e,!0);return n&&Xh(a,n),ai>0&&!i&&Lt&&(a.shapeFlag&6?Lt[Lt.indexOf(t)]=a:Lt.push(a)),a.patchFlag=-2,a}if(ib(t)&&(t=t.__vccOpts),e){e=YA(e);let{class:a,style:l}=e;a&&!Be(a)&&(e.class=Lc(a)),Oe(l)&&(qh(l)&&!oe(l)&&(l=ot({},l)),e.style=xh(l))}const o=Be(t)?1:oc(t)?128:J_(t)?64:Oe(t)?4:he(t)?2:0;return bo(t,e,n,r,s,o,i,!0)}function YA(t){return t?qh(t)||my(t)?ot({},t):t:null}function en(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?My(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Dy(u),ref:e&&e.ref?n&&i?oe(i)?i.concat(Va(e)):[i,Va(e)]:Va(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&en(t.ssContent),ssFallback:t.ssFallback&&en(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&oi(h,l.clone(h)),h}function Vy(t=" ",e=0){return je(ps,null,t,e)}function JA(t,e){const n=je(ao,null,t);return n.staticCount=e,n}function hL(t="",e=!1){return e?(qt(),Ir(Ze,null,t)):je(Ze,null,t)}function Wt(t){return t==null||typeof t=="boolean"?je(Ze):oe(t)?je(At,null,t.slice()):ys(t)?wr(t):je(ps,null,String(t))}function wr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:en(t)}function Xh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!my(e)?e._ctx=mt:s===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),r&64?(n=16,e=[Vy(e)]):n=8);t.children=e,t.shapeFlag|=n}function My(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Lc([e.class,r.class]));else if(s==="style")e.style=xh([e.style,r.style]);else if($o(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Dt(t,e,n,r=null){fn(t,e,7,[n,r])}const XA=dy();let ZA=0;function eb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||XA,i={uid:ZA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new R_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yy(r,s),emitsOptions:Cy(r,s),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=LA.bind(null,i),t.ce&&t.ce(i),i}let pt=null;const Kr=()=>pt||mt;let cc,xu;{const t=xc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};cc=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),xu=e("__VUE_SSR_SETTERS__",n=>ci=n)}const vs=t=>{const e=pt;return cc(t),t.scope.on(),()=>{t.scope.off(),cc(e)}},Lu=()=>{pt&&pt.scope.off(),cc(null)};function xy(t){return t.vnode.shapeFlag&4}let ci=!1;function tb(t,e=!1,n=!1){e&&xu(e);const{props:r,children:s}=t.vnode,i=xy(t);AA(t,r,i,e),CA(t,s,n||e);const o=i?nb(t,e):void 0;return e&&xu(!1),o}function nb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,mA);const{setup:r}=n;if(r){Zn();const s=t.setupContext=r.length>1?sb(t):null,i=vs(t),o=Ho(r,t,0,[t.props,s]),a=Dc(o);if(er(),i(),(a||t.sp)&&!Or(t)&&Kh(t),a){if(o.then(Lu,Lu),e)return o.then(l=>{Fu(t,l)}).catch(l=>{Ti(l,t,0)});t.asyncDep=o}else Fu(t,o)}else Ly(t)}function Fu(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=H_(e)),Ly(t)}function Ly(t,e,n){const r=t.type;t.render||(t.render=r.render||Rn);{const s=vs(t);Zn();try{_A(t)}finally{er(),s()}}}const rb={get(t,e){return It(t,"get",""),t[e]}};function sb(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,rb),slots:t.slots,emit:t.emit,expose:e}}function zc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(H_(Wh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oo)return oo[n](t)},has(e,n){return n in e||n in oo}})):t.proxy}function Uu(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function ib(t){return he(t)&&"__vccOpts"in t}const ze=(t,e)=>WI(t,e,ci);function Ke(t,e,n){const r=(i,o,a)=>{ac(-1);try{return je(i,o,a)}finally{ac(1)}},s=arguments.length;return s===2?Oe(e)&&!oe(e)?ys(e)?r(t,null,[e]):r(t,e):r(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ys(n)&&(n=[n]),r(t,e,n))}const ob="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $u;const pp=typeof window<"u"&&window.trustedTypes;if(pp)try{$u=pp.createPolicy("vue",{createHTML:t=>t})}catch{}const Fy=$u?t=>$u.createHTML(t):t=>t,ab="http://www.w3.org/2000/svg",cb="http://www.w3.org/1998/Math/MathML",Hn=typeof document<"u"?document:null,gp=Hn&&Hn.createElement("template"),lb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Hn.createElementNS(ab,t):e==="mathml"?Hn.createElementNS(cb,t):n?Hn.createElement(t,{is:n}):Hn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Hn.createTextNode(t),createComment:t=>Hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gp.innerHTML=Fy(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=gp.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mr="transition",Ki="animation",Ro=Symbol("_vtc"),Uy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ub=ot({},X_,Uy),hb=t=>(t.displayName="Transition",t.props=ub,t),fb=hb((t,{slots:e})=>Ke(ZI,db(t),e)),ss=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},mp=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function db(t){const e={};for(const S in t)S in Uy||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,E=pb(s),A=E&&E[0],O=E&&E[1],{onBeforeEnter:V,onEnter:N,onEnterCancelled:w,onLeave:k,onLeaveCancelled:D,onBeforeAppear:F=V,onAppear:b=N,onAppearCancelled:v=w}=e,_=(S,T,le,me)=>{S._enterCancelled=me,is(S,T?h:a),is(S,T?u:o),le&&le()},I=(S,T)=>{S._isLeaving=!1,is(S,d),is(S,m),is(S,p),T&&T()},C=S=>(T,le)=>{const me=S?b:N,ee=()=>_(T,S,le);ss(me,[T,ee]),_p(()=>{is(T,S?l:i),$n(T,S?h:a),mp(me)||yp(T,r,A,ee)})};return ot(e,{onBeforeEnter(S){ss(V,[S]),$n(S,i),$n(S,o)},onBeforeAppear(S){ss(F,[S]),$n(S,l),$n(S,u)},onEnter:C(!1),onAppear:C(!0),onLeave(S,T){S._isLeaving=!0;const le=()=>I(S,T);$n(S,d),S._enterCancelled?($n(S,p),wp()):(wp(),$n(S,p)),_p(()=>{S._isLeaving&&(is(S,d),$n(S,m),mp(k)||yp(S,r,O,le))}),ss(k,[S,le])},onEnterCancelled(S){_(S,!1,void 0,!0),ss(w,[S])},onAppearCancelled(S){_(S,!0,void 0,!0),ss(v,[S])},onLeaveCancelled(S){I(S),ss(D,[S])}})}function pb(t){if(t==null)return null;if(Oe(t))return[Yl(t.enter),Yl(t.leave)];{const e=Yl(t);return[e,e]}}function Yl(t){return w_(t)}function $n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ro]||(t[Ro]=new Set)).add(e)}function is(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ro];n&&(n.delete(e),n.size||(t[Ro]=void 0))}function _p(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let gb=0;function yp(t,e,n,r){const s=t._endId=++gb,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=mb(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),i()},p=m=>{m.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,p)}function mb(t,e){const n=window.getComputedStyle(t),r=E=>(n[E]||"").split(", "),s=r(`${mr}Delay`),i=r(`${mr}Duration`),o=vp(s,i),a=r(`${Ki}Delay`),l=r(`${Ki}Duration`),u=vp(a,l);let h=null,d=0,p=0;e===mr?o>0&&(h=mr,d=o,p=i.length):e===Ki?u>0&&(h=Ki,d=u,p=l.length):(d=Math.max(o,u),h=d>0?o>u?mr:Ki:null,p=h?h===mr?i.length:l.length:0);const m=h===mr&&/\b(?:transform|all)(?:,|$)/.test(r(`${mr}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:m}}function vp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ep(n)+Ep(t[r])))}function Ep(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function wp(){return document.body.offsetHeight}function _b(t,e,n){const r=t[Ro];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Tp=Symbol("_vod"),yb=Symbol("_vsh"),vb=Symbol(""),Eb=/(?:^|;)\s*display\s*:/;function wb(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ma(r,a,"")}else for(const o in e)n[o]==null&&Ma(r,o,"");for(const o in n)o==="display"&&(i=!0),Ma(r,o,n[o])}else if(s){if(e!==n){const o=r[vb];o&&(n+=";"+o),r.cssText=n,i=Eb.test(n)}}else e&&t.removeAttribute("style");Tp in t&&(t[Tp]=i?r.display:"",t[yb]&&(r.display="none"))}const Ip=/\s*!important$/;function Ma(t,e,n){if(oe(n))n.forEach(r=>Ma(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Tb(t,e);Ip.test(n)?t.setProperty(zr(r),n.replace(Ip,""),"important"):t[r]=n}}const Ap=["Webkit","Moz","ms"],Jl={};function Tb(t,e){const n=Jl[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return Jl[e]=r;r=Mc(r);for(let s=0;s<Ap.length;s++){const i=Ap[s]+r;if(i in t)return Jl[e]=i}return e}const bp="http://www.w3.org/1999/xlink";function Rp(t,e,n,r,s,i=_I(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(bp,e.slice(6,e.length)):t.setAttributeNS(bp,e,n):n==null||i&&!T_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":hn(n)?String(n):n)}function Sp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Fy(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=T_(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ar(t,e,n,r){t.addEventListener(e,n,r)}function Ib(t,e,n,r){t.removeEventListener(e,n,r)}const Cp=Symbol("_vei");function Ab(t,e,n,r,s=null){const i=t[Cp]||(t[Cp]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=bb(e);if(r){const u=i[e]=Cb(r,s);Ar(t,a,u,l)}else o&&(Ib(t,a,o,l),i[e]=void 0)}}const Pp=/(?:Once|Passive|Capture)$/;function bb(t){let e;if(Pp.test(t)){e={};let r;for(;r=t.match(Pp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zr(t.slice(2)),e]}let Xl=0;const Rb=Promise.resolve(),Sb=()=>Xl||(Rb.then(()=>Xl=0),Xl=Date.now());function Cb(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;fn(Pb(r,n.value),e,5,[r])};return n.value=t,n.attached=Sb(),n}function Pb(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const kp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,kb=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?_b(t,r,o):e==="style"?wb(t,n,r):$o(e)?Dh(e)||Ab(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ob(t,e,r,o))?(Sp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?Sp(t,Gt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rp(t,e,r,o))};function Ob(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&kp(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return kp(e)&&Be(n)?!1:e in t}const li=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>Js(e,n):e};function Nb(t){t.target.composing=!0}function Op(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yn=Symbol("_assign"),fL={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Yn]=li(s);const i=r||s.props&&s.props.type==="number";Ar(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ga(a)),t[Yn](a)}),n&&Ar(t,"change",()=>{t.value=t.value.trim()}),e||(Ar(t,"compositionstart",Nb),Ar(t,"compositionend",Op),Ar(t,"change",Op))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Yn]=li(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ga(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},dL={deep:!0,created(t,e,n){t[Yn]=li(n),Ar(t,"change",()=>{const r=t._modelValue,s=So(t),i=t.checked,o=t[Yn];if(oe(r)){const a=Lh(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(Ei(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o($y(t,i))})},mounted:Np,beforeUpdate(t,e,n){t[Yn]=li(n),Np(t,e,n)}};function Np(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(oe(e))s=Lh(e,r.props.value)>-1;else if(Ei(e))s=e.has(r.props.value);else{if(e===n)return;s=jo(e,$y(t,!0))}t.checked!==s&&(t.checked=s)}const pL={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ei(e);Ar(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ga(So(o)):So(o));t[Yn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Dn(()=>{t._assigning=!1})}),t[Yn]=li(r)},mounted(t,{value:e}){Dp(t,e)},beforeUpdate(t,e,n){t[Yn]=li(n)},updated(t,{value:e}){t._assigning||Dp(t,e)}};function Dp(t,e){const n=t.multiple,r=oe(e);if(!(n&&!r&&!Ei(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=So(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Lh(e,a)>-1}else o.selected=e.has(a);else if(jo(So(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function So(t){return"_value"in t?t._value:t.value}function $y(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Db=["ctrl","shift","alt","meta"],Vb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Db.some(n=>t[`${n}Key`]&&!e.includes(n))},gL=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const a=Vb[e[o]];if(a&&a(s,e))return}return t(s,...i)}))},jy=ot({patchProp:kb},lb);let lo,Vp=!1;function Mb(){return lo||(lo=kA(jy))}function xb(){return lo=Vp?lo:OA(jy),Vp=!0,lo}const Lb=((...t)=>{const e=Mb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Hy(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,By(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e}),Fb=((...t)=>{const e=xb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Hy(r);if(s)return n(s,!0,By(s))},e});function By(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Hy(t){return Be(t)?document.querySelector(t):t}const Ub=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,$b=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,jb=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Bb(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){Hb(t);return}return e}function Hb(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ui(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!jb.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(Ub.test(t)||$b.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,Bb)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const qb=/#/g,Wb=/&/g,zb=/\//g,Kb=/=/g,Zh=/\+/g,Gb=/%5e/gi,Qb=/%60/gi,Yb=/%7c/gi,Jb=/%20/gi;function Xb(t){return encodeURI(""+t).replace(Yb,"|")}function ju(t){return Xb(typeof t=="string"?t:JSON.stringify(t)).replace(Zh,"%2B").replace(Jb,"+").replace(qb,"%23").replace(Wb,"%26").replace(Qb,"`").replace(Gb,"^").replace(zb,"%2F")}function Zl(t){return ju(t).replace(Kb,"%3D")}function lc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function Zb(t){return lc(t.replace(Zh," "))}function eR(t){return lc(t.replace(Zh," "))}function ef(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=Zb(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=eR(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function tR(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Zl(t)}=${ju(n)}`).join("&"):`${Zl(t)}=${ju(e)}`:Zl(t)}function nR(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>tR(e,t[e])).filter(Boolean).join("&")}const rR=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,sR=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,iR=/^([/\\]\s*){2,}[^/\\]/,oR=/^[\s\0]*(blob|data|javascript|vbscript):$/i,aR=/\/$|\/\?|\/#/,cR=/^\.?\//;function cr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?rR.test(t):sR.test(t)||(e.acceptRelative?iR.test(t):!1)}function lR(t){return!!t&&oR.test(t)}function Bu(t="",e){return e?aR.test(t):t.endsWith("/")}function hi(t="",e){if(!e)return(Bu(t)?t.slice(0,-1):t)||"/";if(!Bu(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function qy(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Bu(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function uR(t,e){if(zy(e)||cr(t))return t;const n=hi(e);return t.startsWith(n)?t:Kc(n,t)}function Mp(t,e){if(zy(e))return t;const n=hi(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function Wy(t,e){const n=Qy(t),r={...ef(n.search),...e};return n.search=nR(r),dR(n)}function zy(t){return!t||t==="/"}function hR(t){return t&&t!=="/"}function Kc(t,...e){let n=t||"";for(const r of e.filter(s=>hR(s)))if(n){const s=r.replace(cR,"");n=qy(n)+s}else n=r;return n}function Ky(...t){const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const o of n)if(!(!o||o==="/")){for(const[a,l]of o.split(e).entries())if(!(!l||l===".")){if(l===".."){if(r.length===1&&cr(r[0]))continue;r.pop(),s--;continue}if(a===1&&r[r.length-1]?.endsWith(":/")){r[r.length-1]+="/"+l;continue}r.push(l),s++}}let i=r.join("/");return s>=0?n[0]?.startsWith("/")&&!i.startsWith("/")?i="/"+i:n[0]?.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,n[n.length-1]?.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function fR(t,e){return lc(hi(t))===lc(hi(e))}const Gy=Symbol.for("ufo:protocolRelative");function Qy(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,p=""]=n;return{protocol:d.toLowerCase(),pathname:p,href:d+p,auth:"",host:"",search:"",hash:""}}if(!cr(t,{acceptRelative:!0}))return xp(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=xp(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[Gy]:!r}}function xp(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function dR(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[Gy]?(t.protocol||"")+"//":"")+s+i+e+n+r}class pR extends Error{constructor(e,n){super(e,n),this.name="FetchError",n?.cause&&!this.cause&&(this.cause=n.cause)}}function gR(t){const e=t.error?.message||t.error?.toString()||"",n=t.request?.method||t.options?.method||"GET",r=t.request?.url||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new pR(o,t.error?{cause:t.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(a,l,{get(){return t[l]}});for(const[l,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,l,{get(){return t.response&&t.response[u]}});return a}const mR=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Lp(t="GET"){return mR.has(t.toUpperCase())}function _R(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const yR=new Set(["image/svg","application/xml","application/xhtml","application/html"]),vR=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function ER(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return vR.test(e)?"json":yR.has(e)||e.startsWith("text/")?"text":"blob"}function wR(t,e,n,r){const s=TR(e?.headers??t?.headers,n?.headers,r);let i;return(n?.query||n?.params||e?.params||e?.query)&&(i={...n?.params,...n?.query,...e?.params,...e?.query}),{...n,...e,query:i,params:i,headers:s}}function TR(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function Ta(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const IR=new Set([408,409,425,429,500,502,503,504]),AR=new Set([101,204,205,304]);function Yy(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=Lp(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):IR.has(d))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(m=>setTimeout(m,p)),i(a.request,{...a.options,retry:h-1})}}const u=gR(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const h={request:l,options:wR(l,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await Ta(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=uR(h.request,h.options.baseURL)),h.options.query&&(h.request=Wy(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&Lp(h.options.method)&&(_R(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const m=new r;d=setTimeout(()=>{const E=new Error("[TimeoutError]: The operation was aborted due to timeout");E.name="TimeoutError",E.code=23,m.abort(E)},h.options.timeout),h.options.signal=m.signal}try{h.response=await e(h.request,h.options)}catch(m){return h.error=m,h.options.onRequestError&&await Ta(h,h.options.onRequestError),await s(h)}finally{d&&clearTimeout(d)}if((h.response.body||h.response._bodyInit)&&!AR.has(h.response.status)&&h.options.method!=="HEAD"){const m=(h.options.parseResponse?"json":h.options.responseType)||ER(h.response.headers.get("content-type")||"");switch(m){case"json":{const E=await h.response.text(),A=h.options.parseResponse||ui;h.response._data=A(E);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[m]()}}return h.options.onResponse&&await Ta(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await Ta(h,h.options.onResponseError),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>Yy({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const uc=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),bR=uc.fetch?(...t)=>uc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),RR=uc.Headers,SR=uc.AbortController,CR=Yy({fetch:bR,Headers:RR,AbortController:SR}),PR=CR,kR=()=>window?.__NUXT__?.config||window?.useNuxtApp?.().payload?.config,tf=()=>kR().app,OR=()=>tf().baseURL,NR=()=>tf().buildAssetsDir,nf=(...t)=>Ky(Jy(),NR(),...t),Jy=(...t)=>{const e=tf(),n=e.cdnURL||e.baseURL;return t.length?Ky(n,...t):n};globalThis.__buildAssetsURL=nf,globalThis.__publicAssetsURL=Jy;globalThis.$fetch||(globalThis.$fetch=PR.create({baseURL:OR()}));"global"in globalThis||(globalThis.global=globalThis);function Hu(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Hu(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const DR={run:t=>t()},VR=()=>DR,Xy=typeof console.createTask<"u"?console.createTask:VR;function MR(t,e){const n=e.shift(),r=Xy(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function xR(t,e){const n=e.shift(),r=Xy(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function eu(t,e){for(const n of[...t])n(e)}class LR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Hu(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Hu(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(MR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(xR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&eu(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&eu(this._after,s)}):(this._after&&s&&eu(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Zy(){return new LR}function FR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;qu.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{qu.delete(u)}}}}function UR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=FR({...t,...r})),e[n]}}}const hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Fp="__unctx__",$R=hc[Fp]||(hc[Fp]=UR()),jR=(t,e={})=>$R.get(t,e),Up="__unctx_async_handlers__",qu=hc[Up]||(hc[Up]=new Set);function ti(t){const e=[];for(const s of qu){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const BR=!1,$p=!1,HR=!1,jp={id:"__nuxt-loader"},qR={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},WR="#__nuxt",ev="nuxt-app",Bp=36e5,zR="vite:preloadError";function tv(t=ev){return jR(t,{asyncContext:!1})}const KR="__nuxt_plugin";function GR(t){let e=0;const n={_id:t.id||ev||"nuxt-app",_scope:Fh(),provide:void 0,versions:{get nuxt(){return"4.1.1"},get vue(){return n.vueApp.version}},payload:bn({...t.ssrContext?.payload||{},data:bn({}),state:xn({}),once:new Set,_errors:bn({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!Bo()?n._scope.run(()=>Hp(n,s)):Hp(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:bn({}),_payloadRevivers:{},...t};{const s=window.__NUXT__;if(s)for(const i in s)switch(i){case"data":case"state":case"_errors":Object.assign(n.payload[i],s[i]);break;default:n.payload[i]=s[i]}}n.hooks=Zy(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;Ia(n,o,i),Ia(n.vueApp.config.globalProperties,o,i)},Ia(n.vueApp,"$nuxt",n),Ia(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(zR,i=>{n.callHook("app:chunkError",{error:i.payload}),i.payload.message.includes("Unable to preload CSS")&&i.preventDefault()}),window.useNuxtApp||=Ue;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}function QR(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function YR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function JR(t,e){const n=new Set,r=[],s=[];let i,o=0;async function a(l){const u=l.dependsOn?.filter(h=>e.some(d=>d._name===h)&&!n.has(h))??[];if(u.length>0)r.push([new Set(u),l]);else{const h=YR(t,l).then(async()=>{l._name&&(n.add(l._name),await Promise.all(r.map(async([d,p])=>{d.has(l._name)&&(d.delete(l._name),d.size===0&&(o++,await a(p)))})))}).catch(d=>{if(!l.parallel&&!t.payload.error)throw d;i||=d});l.parallel?s.push(h):await h}}for(const l of e)QR(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i)throw t.payload.error||i}function $t(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[KR]:!0,_name:e})}const XR=$t;function Hp(t,e,n){const r=()=>e();return tv(t._id).set(t),t.vueApp.runWithContext(r)}function ZR(t){let e;return Gh()&&(e=Kr()?.appContext.app.$nuxt),e||=tv(t).tryUse(),e||null}function Ue(t){const e=ZR(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function nr(t){return Ue().$config}function Ia(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function eS(t,e){return{ctx:{table:t},matchAll:n=>rv(n,t)}}function nv(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,nv(s)])):new Map(Object.entries(t[n]));return e}function tS(t){return eS(nv(t))}function rv(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of qp(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of qp(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...rv(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function qp(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function tu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Wu(t,e,n=".",r){if(!tu(e))return Wu(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:tu(o)&&tu(s[i])?s[i]=Wu(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function nS(t){return(...e)=>e.reduce((n,r)=>Wu(n,r,"",t),{})}const sv=nS();function rS(t,e){try{return e in t}catch{return!1}}class Wp extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,n={}){super(e,n),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:zu(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=iv(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function sS(t){if(typeof t=="string")return new Wp(t);if(iS(t))return t;const e=new Wp(t.message??t.statusMessage??"",{cause:t.cause||t});if(rS(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=zu(t.statusCode,e.statusCode):t.status&&(e.statusCode=zu(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;iv(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function iS(t){return t?.constructor?.__h3_error__===!0}const oS=/[^\u0009\u0020-\u007E]/g;function iv(t=""){return t.replace(oS,"")}function zu(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const ov=Symbol("layout-meta"),Es=Symbol("route");import.meta.url.replace(/\/app\/.*$/,"/");const St=()=>Ue()?.$router,Gc=()=>Gh()?Rt(Es,Ue()._route):Ue()._route;function mL(t){return t}const aS=()=>{try{if(Ue()._processingMiddleware)return!0}catch{return!1}return!1},cS=(t,e)=>{t||="/";const n=typeof t=="string"?t:"path"in t?Ku(t):St().resolve(t).href;if(e?.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,p])=>p!==void 0).map(([d,p])=>`${d.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=cr(n,{acceptRelative:!0}),s=e?.external||r;if(s){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&lR(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=aS();if(!s&&i){if(e?.replace){if(typeof t=="string"){const{pathname:l,search:u,hash:h}=Qy(t);return{path:l,...u&&{query:ef(u)},...h&&{hash:h},replace:!0}}return{...t,replace:!0}}return t}const o=St(),a=Ue();return s?(a._scope.stop(),e?.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e?.replace?o.replace(t):o.push(t)};function Ku(t){return Wy(t.path||"",t.query||{})+(t.hash||"")}const av="__nuxt_error",Qc=()=>W_(Ue().payload,"error"),cs=t=>{const e=gs(t);try{const n=Ue(),r=Qc();n.hooks.callHook("app:error",e),r.value||=e}catch{throw e}return e},cv=async(t={})=>{const e=Ue(),n=Qc();e.callHook("app:error:cleared",t),t.redirect&&await St().replace(t.redirect),n.value=void 0},lv=t=>!!t&&typeof t=="object"&&av in t,gs=t=>{const e=sS(t);return Object.defineProperty(e,av,{value:!0,configurable:!1,writable:!1}),e};/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let uv;const Wo=t=>uv=t,hv=Symbol();function Gu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var uo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(uo||(uo={}));function lS(){const t=Fh(!0),e=t.run(()=>Ft({}));let n=[],r=[];const s=Wh({install(i){Wo(s),s._a=i,i.provide(hv,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const fv=()=>{};function zp(t,e,n,r=fv){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Bo()&&Qa(s),s}function Us(t,...e){t.slice().forEach(n=>{n(...e)})}const uS=t=>t(),Kp=Symbol(),nu=Symbol();function Qu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Gu(s)&&Gu(r)&&t.hasOwnProperty(n)&&!$e(r)&&!Qn(r)?t[n]=Qu(s,r):t[n]=r}return t}const hS=Symbol();function fS(t){return!Gu(t)||!Object.prototype.hasOwnProperty.call(t,hS)}const{assign:vr}=Object;function dS(t){return!!($e(t)&&t.effect)}function pS(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const h=jI(n.state.value[t]);return vr(h,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Wh(ze(()=>{Wo(n);const m=n._s.get(t);return o[p].call(m,m)})),d),{}))}return l=dv(t,u,e,n,r,!0),l}function dv(t,e,n={},r,s,i){let o;const a=vr({actions:{}},n),l={deep:!0};let u,h,d=[],p=[],m;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),Ft({});let A;function O(v){let _;u=h=!1,typeof v=="function"?(v(r.state.value[t]),_={type:uo.patchFunction,storeId:t,events:m}):(Qu(r.state.value[t],v),_={type:uo.patchObject,payload:v,storeId:t,events:m});const I=A=Symbol();Dn().then(()=>{A===I&&(u=!0)}),h=!0,Us(d,_,r.state.value[t])}const V=i?function(){const{state:_}=n,I=_?_():{};this.$patch(C=>{vr(C,I)})}:fv;function N(){o.stop(),d=[],p=[],r._s.delete(t)}const w=(v,_="")=>{if(Kp in v)return v[nu]=_,v;const I=function(){Wo(r);const C=Array.from(arguments),S=[],T=[];function le(ie){S.push(ie)}function me(ie){T.push(ie)}Us(p,{args:C,name:I[nu],store:D,after:le,onError:me});let ee;try{ee=v.apply(this&&this.$id===t?this:D,C)}catch(ie){throw Us(T,ie),ie}return ee instanceof Promise?ee.then(ie=>(Us(S,ie),ie)).catch(ie=>(Us(T,ie),Promise.reject(ie))):(Us(S,ee),ee)};return I[Kp]=!0,I[nu]=_,I},k={_p:r,$id:t,$onAction:zp.bind(null,p),$patch:O,$reset:V,$subscribe(v,_={}){const I=zp(d,v,_.detached,()=>C()),C=o.run(()=>ln(()=>r.state.value[t],S=>{(_.flush==="sync"?h:u)&&v({storeId:t,type:uo.direct,events:m},S)},vr({},l,_)));return I},$dispose:N},D=xn(k);r._s.set(t,D);const b=(r._a&&r._a.runWithContext||uS)(()=>r._e.run(()=>(o=Fh()).run(()=>e({action:w}))));for(const v in b){const _=b[v];if($e(_)&&!dS(_)||Qn(_))i||(E&&fS(_)&&($e(_)?_.value=E[v]:Qu(_,E[v])),r.state.value[t][v]=_);else if(typeof _=="function"){const I=w(_,v);b[v]=I,a.actions[v]=_}}return vr(D,b),vr(Ie(D),b),Object.defineProperty(D,"$state",{get:()=>r.state.value[t],set:v=>{O(_=>{vr(_,v)})}}),r._p.forEach(v=>{vr(D,o.run(()=>v({store:D,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(D.$state,E),u=!0,h=!0,D}/*! #__NO_SIDE_EFFECTS__ */function _L(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,a){const l=Gh();return o=o||(l?Rt(hv,null):null),o&&Wo(o),o=uv,o._s.has(t)||(s?dv(t,e,r,o):pS(t,r,o)),o._s.get(t)}return i.$id=t,i}function gS(t){const e=_S(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const mS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function _S(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=mS.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const yS=-1,vS=-2,ES=-3,wS=-4,TS=-5,IS=-6;function AS(t,e){return bS(JSON.parse(t),e)}function bS(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===yS)return;if(i===ES)return NaN;if(i===wS)return 1/0;if(i===TS)return-1/0;if(i===IS)return-0;if(o||typeof i!="number")throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e?.[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let m=1;m<a.length;m+=1)h.add(s(a[m]));break;case"Map":const d=new Map;r[i]=d;for(let m=1;m<a.length;m+=2)d.set(s(a[m]),s(a[m+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let m=1;m<a.length;m+=2)p[a[m]]=s(a[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[l],E=new m(s(a[1]));r[i]=a[2]!==void 0?E.subarray(a[2],a[3]):E;break}case"ArrayBuffer":{const m=a[1],E=gS(m);r[i]=E;break}case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{const m=l.slice(9);r[i]=Temporal[m].from(a[1]);break}case"URL":{const m=new URL(a[1]);r[i]=m;break}case"URLSearchParams":{const m=new URLSearchParams(a[1]);r[i]=m;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==vS&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){if(u==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const RS=new Set(["link","style","script","noscript"]),SS=new Set(["title","titleTemplate","script","style","noscript"]),Gp=new Set(["base","meta","link","style","script","noscript"]),CS=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),PS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),kS=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),OS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),NS=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),DS=["name","property","http-equiv"],VS=new Set(["viewport","description","keywords","robots"]);function pv(t){const e=t.split(":");return e.length?NS.has(e[1]):!1}function Yu(t){const{props:e,tag:n}=t;if(PS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of DS)if(e[r]!==void 0){const s=e[r],i=s.includes(":"),o=VS.has(s),l=!(i||o)&&t.key?`:key:${t.key}`:"";return`${n}:${s}${l}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(SS.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function Qp(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function Ju(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>Ju(i,e));if(s?.constructor===Object){const i={};for(const o of Object.keys(s))i[o]=Ju(s[o],e,o);return i}return s}function MS(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(l=>l.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function gv(t,e){return t.props=t.props||{},e?t.tag==="templateParams"?(t.props=e,t):(Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=MS(n,r);return}if(kS.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!o?.endsWith("json")&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t):t}function xS(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=gv({tag:t,props:{}},n);return r.key&&RS.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function LS(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=Ju(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(xS(s,o))}),r.flat()}const Yp=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Jp={base:-10,title:10},FS={critical:-8,high:-1,low:2},Xp={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},US=/@import/,Gi=t=>t===""||t===!0;function $S(t,e){if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=FS[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Xp;if(e.tag in Jp)n=Jp[e.tag];else if(e.tag==="meta"){const i=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;i&&(n=Xp.meta[i])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?Gi(e.props.async)?n=s.script.async:e.props.src&&!Gi(e.props.defer)&&!Gi(e.props.async)&&e.props.type!=="module"&&!e.props.type?.endsWith("json")?n=s.script.sync:Gi(e.props.defer)&&e.props.src&&!Gi(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&US.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function Zp(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function jS(t={}){const e=Zy();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=new Set,o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:a=>Zp(o,a),push(a,l){const u={...l||{}};delete u.head;const h=u._index??o._entryCount++,d={_i:h,input:a,options:u},p={_poll(m=!1){o.dirty=!0,!m&&i.add(h),e.callHook("entries:updated",o)},dispose(){r.delete(h)&&o.invalidate()},patch(m){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(d.input=m,r.set(h,d),p._poll())}};return p.patch(a),p},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);i.size;){const p=i.values().next().value;i.delete(p);const m=r.get(p);if(m){const E={tags:LS(m.input,t.propResolvers||[]).map(A=>Object.assign(A,m.options)),entry:m};await e.callHook("entries:normalize",E),m._tags=E.tags.map((A,O)=>(A._w=$S(o,A),A._p=(m._i<<10)+O,A._d=Yu(A),A))}}let l=!1;a.entries.flatMap(p=>(p._tags||[]).map(m=>({...m,props:{...m.props}}))).sort(Yp).reduce((p,m)=>{const E=String(m._d||m._p);if(!p.has(E))return p.set(E,m);const A=p.get(E);if((m?.tagDuplicateStrategy||(OS.has(m.tag)?"merge":null)||(m.key&&m.key===A.key?"merge":null))==="merge"){const V={...A.props};Object.entries(m.props).forEach(([N,w])=>V[N]=N==="style"?new Map([...A.props.style||new Map,...w]):N==="class"?new Set([...A.props.class||new Set,...w]):w),p.set(E,{...m,props:V})}else m._p>>10===A._p>>10&&m.tag==="meta"&&pv(E)?(p.set(E,Object.assign([...Array.isArray(A)?A:[A],m],m)),l=!0):(m._w===A._w?m._p>A._p:m?._w<A?._w)&&p.set(E,m);return p},a.tagMap);const u=a.tagMap.get("title"),h=a.tagMap.get("titleTemplate");if(o._title=u?.textContent,h){const p=h?.textContent;if(o._titleTemplate=p,p){let m=typeof p=="function"?p(u?.textContent):p;typeof m=="string"&&!o.plugins.has("template-params")&&(m=m.replace("%s",u?.textContent||"")),u?m===null?a.tagMap.delete("title"):a.tagMap.set("title",{...u,textContent:m}):(h.tag="title",h.textContent=m)}}a.tags=Array.from(a.tagMap.values()),l&&(a.tags=a.tags.flat().sort(Yp)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const d=[];for(const p of a.tags){const{innerHTML:m,tag:E,props:A}=p;if(CS.has(E)&&!(Object.keys(A).length===0&&!p.innerHTML&&!p.textContent)&&!(E==="meta"&&!A.content&&!A["http-equiv"]&&!A.charset)){if(E==="script"&&m){if(A.type?.endsWith("json")){const O=typeof m=="string"?m:JSON.stringify(m);p.innerHTML=O.replace(/</g,"\\u003C")}else typeof m=="string"&&(p.innerHTML=m.replace(new RegExp(`</${E}`,"g"),`<\\/${E}`));p._d=Yu(p)}d.push(p)}}return d},invalidate(){for(const a of r.values())i.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(t?.plugins||[]).forEach(a=>Zp(o,a)),o.hooks.callHook("init",o),t.init?.forEach(a=>a&&o.push(a)),o}const BS="usehead";function HS(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(BS,t)}}.install}const qS="modulepreload",WS=function(t,e){return new URL(t,e).href},eg={},ut=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let u=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=u(n.map(h=>{if(h=WS(h,r),h in eg)return;eg[h]=!0;const d=h.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!r)for(let A=o.length-1;A>=0;A--){const O=o[A];if(O.href===h&&(!d||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${p}`))return;const E=document.createElement("link");if(E.rel=d?"stylesheet":qS,d||(E.as="script"),E.crossOrigin="",E.href=h,l&&E.setAttribute("nonce",l),document.head.appendChild(E),d)return new Promise((A,O)=>{E.addEventListener("load",A),E.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let xa,La;function zS(){return xa=$fetch(nf(`builds/meta/${nr().app.buildId}.json`),{responseType:"json"}),xa.then(t=>{La=tS(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),xa}function Yc(){return xa||zS()}async function rf(t){const e=typeof t=="string"?t:t.path;if(await Yc(),!La)return console.error("[nuxt] Error creating app manifest matcher.",La),{};try{return sv({},...La.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function tg(t,e={}){if(!await _v(t))return null;const r=await GS(t,e);return await mv(r)||null}const KS="_payload.json";async function GS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||cr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=nr(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await _v(t)?i:r.app.baseURL;return Kc(o,n.pathname,KS+(s?`?${s}`:""))}async function mv(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(yv));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function _v(t=Gc().path){const e=Ue();return t=hi(t),(await Yc()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await rf({path:t});return!!r.prerender&&!r.redirect})}let os=null;async function QS(){if(os)return os;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await yv(t.textContent||""),n=t.dataset.src?await mv(t.dataset.src):void 0;return os={...e,...n,...window.__NUXT__},os.config?.public&&(os.config.public=xn(os.config.public)),os}async function yv(t){return await AS(t,Ue()._payloadRevivers)}function vv(t,e){Ue()._payloadRevivers[t]=e}const YS=XR(()=>{vv("skipHydrate",t=>{})}),JS=[["NuxtError",t=>gs(t)],["EmptyShallowRef",t=>Lr(t==="_"?void 0:t==="0n"?BigInt(0):ui(t))],["EmptyRef",t=>Ft(t==="_"?void 0:t==="0n"?BigInt(0):ui(t))],["ShallowRef",t=>Lr(t)],["ShallowReactive",t=>bn(t)],["Ref",t=>Ft(t)],["Reactive",t=>xn(t)]],XS=$t({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of JS)vv(r,s);Object.assign(t.payload,([e,n]=ti(()=>t.runWithContext(QS)),e=await e,n(),e)),delete window.__NUXT__}});async function sf(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{const i=new Map,o=new Promise(m=>{t.resolveTags().then(E=>{m(E.map(A=>{const O=i.get(A._d)||0,V={tag:A,id:(O?`${A._d}:${O}`:A._d)||Qp(A),shouldRender:!0};return A._d&&pv(A._d)&&i.set(A._d,O+1),V}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const m of["body","head"]){const E=n[m]?.children;for(const A of E){const O=A.tagName.toLowerCase();if(!Gp.has(O))continue;const V=gv({tag:O,props:{}},{innerHTML:A.innerHTML,...A.getAttributeNames().reduce((N,w)=>(N[w]=A.getAttribute(w),N),{})||{}});if(V.key=A.getAttribute("data-hid")||void 0,V._d=Yu(V)||Qp(V),a.elMap.has(V._d)){let N=1,w=V._d;for(;a.elMap.has(w);)w=`${V._d}:${N++}`;a.elMap.set(w,A)}else a.elMap.set(V._d,A)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(m,E,A){const O=`${m}:${E}`;a.sideEffects[O]=A,delete a.pendingSideEffects[O]}function u({id:m,$el:E,tag:A}){const O=A.tag.endsWith("Attrs");a.elMap.set(m,E),O||(A.textContent&&A.textContent!==E.textContent&&(E.textContent=A.textContent),A.innerHTML&&A.innerHTML!==E.innerHTML&&(E.innerHTML=A.innerHTML),l(m,"el",()=>{E?.remove(),a.elMap.delete(m)}));for(const V in A.props){if(!Object.prototype.hasOwnProperty.call(A.props,V))continue;const N=A.props[V];if(V.startsWith("on")&&typeof N=="function"){const k=E?.dataset;if(k&&k[`${V}fired`]){const D=V.slice(0,-5);N.call(E,new Event(D.substring(2)))}E.getAttribute(`data-${V}`)!==""&&((A.tag==="bodyAttrs"?n.defaultView:E).addEventListener(V.substring(2),N.bind(E)),E.setAttribute(`data-${V}`,""));continue}const w=`attr:${V}`;if(V==="class"){if(!N)continue;for(const k of N)O&&l(m,`${w}:${k}`,()=>E.classList.remove(k)),!E.classList.contains(k)&&E.classList.add(k)}else if(V==="style"){if(!N)continue;for(const[k,D]of N)l(m,`${w}:${k}`,()=>{E.style.removeProperty(k)}),E.style.setProperty(k,D)}else N!==!1&&N!==null&&(E.getAttribute(V)!==N&&E.setAttribute(V,N===!0?"":String(N)),O&&l(m,w,()=>E.removeAttribute(V)))}}const h=[],d={bodyClose:void 0,bodyOpen:void 0,head:void 0},p=await o;for(const m of p){const{tag:E,shouldRender:A,id:O}=m;if(A){if(E.tag==="title"){n.title=E.textContent,l("title","",()=>n.title=a.title);continue}m.$el=m.$el||a.elMap.get(O),m.$el?u(m):Gp.has(E.tag)&&h.push(m)}}for(const m of h){const E=m.tag.tagPosition||"head";m.$el=n.createElement(m.tag.tag),u(m),d[E]=d[E]||n.createDocumentFragment(),d[E].appendChild(m.$el)}for(const m of p)await t.hooks.callHook("dom:renderTag",m,n,l);d.head&&n.head.appendChild(d.head),d.bodyOpen&&n.body.insertBefore(d.bodyOpen,n.body.firstChild),d.bodyClose&&n.body.appendChild(d.bodyClose);for(const m in a.pendingSideEffects)a.pendingSideEffects[m]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:p}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function ZS(t={}){const e=t.domOptions?.render||sf;t.document=t.document||(typeof window<"u"?document:void 0);const n=t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1;return jS({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function e0(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function t0(t={}){const e=ZS({domOptions:{render:e0(()=>sf(e),n=>setTimeout(n,0))},...t});return e.install=HS(e),e}const n0={disableDefaults:!0},r0=$t({name:"nuxt:head",enforce:"pre",setup(t){const e=t0(n0);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await sf(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const js=typeof document<"u";function Ev(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function s0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ev(t.default)}const Ce=Object.assign;function ru(t,e){const n={};for(const r in e){const s=e[r];n[r]=dn(s)?s.map(t):t(s)}return n}const ho=()=>{},dn=Array.isArray,wv=/#/g,i0=/&/g,o0=/\//g,a0=/=/g,c0=/\?/g,Tv=/\+/g,l0=/%5B/g,u0=/%5D/g,Iv=/%5E/g,h0=/%60/g,Av=/%7B/g,f0=/%7C/g,bv=/%7D/g,d0=/%20/g;function of(t){return encodeURI(""+t).replace(f0,"|").replace(l0,"[").replace(u0,"]")}function p0(t){return of(t).replace(Av,"{").replace(bv,"}").replace(Iv,"^")}function Xu(t){return of(t).replace(Tv,"%2B").replace(d0,"+").replace(wv,"%23").replace(i0,"%26").replace(h0,"`").replace(Av,"{").replace(bv,"}").replace(Iv,"^")}function g0(t){return Xu(t).replace(a0,"%3D")}function m0(t){return of(t).replace(wv,"%23").replace(c0,"%3F")}function _0(t){return t==null?"":m0(t).replace(o0,"%2F")}function Co(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const y0=/\/$/,v0=t=>t.replace(y0,"");function su(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=I0(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Co(o)}}function E0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ng(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function w0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fi(e.matched[r],n.matched[s])&&Rv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Rv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!T0(t[n],e[n]))return!1;return!0}function T0(t,e){return dn(t)?rg(t,e):dn(e)?rg(e,t):t===e}function rg(t,e){return dn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function I0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Po;(function(t){t.pop="pop",t.push="push"})(Po||(Po={}));var fo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fo||(fo={}));function A0(t){if(!t)if(js){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),v0(t)}const b0=/^[^#]+#/;function R0(t,e){return t.replace(b0,"#")+e}function S0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Jc=()=>({left:window.scrollX,top:window.scrollY});function C0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=S0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function sg(t,e){return(history.state?history.state.position-e:-1)+t}const Zu=new Map;function P0(t,e){Zu.set(t,e)}function k0(t){const e=Zu.get(t);return Zu.delete(t),e}let O0=()=>location.protocol+"//"+location.host;function Sv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ng(l,"")}return ng(n,t)+r+s}function N0(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Sv(t,location),E=n.value,A=e.value;let O=0;if(p){if(n.value=m,e.value=p,o&&o===E){o=null;return}O=A?p.position-A.position:0}else r(m);s.forEach(V=>{V(n.value,E,{delta:O,type:Po.pop,direction:O?O>0?fo.forward:fo.back:fo.unknown})})};function l(){o=n.value}function u(p){s.push(p);const m=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(m),m}function h(){const{history:p}=window;p.state&&p.replaceState(Ce({},p.state,{scroll:Jc()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function ig(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Jc():null}}function D0(t){const{history:e,location:n}=window,r={value:Sv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:O0()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[h?"replace":"assign"](p)}}function o(l,u){const h=Ce({},e.state,ig(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=Ce({},s.value,e.state,{forward:l,scroll:Jc()});i(h.current,h,!0);const d=Ce({},ig(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function V0(t){t=A0(t);const e=D0(t),n=N0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ce({location:"",base:t,go:r,createHref:R0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function M0(t){return typeof t=="string"||t&&typeof t=="object"}function Cv(t){return typeof t=="string"||typeof t=="symbol"}const Pv=Symbol("");var og;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(og||(og={}));function di(t,e){return Ce(new Error,{type:t,[Pv]:!0},e)}function jn(t,e){return t instanceof Error&&Pv in t&&(e==null||!!(t.type&e))}const ag="[^/]+?",x0={sensitive:!1,strict:!1,start:!0,end:!0},L0=/[.+*?^${}()[\]/\\]/g;function F0(t,e){const n=Ce({},x0,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(L0,"\\$&"),m+=40;else if(p.type===1){const{value:E,repeatable:A,optional:O,regexp:V}=p;i.push({name:E,repeatable:A,optional:O});const N=V||ag;if(N!==ag){m+=10;try{new RegExp(`(${N})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${E}" (${N}): `+k.message)}}let w=A?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(w=O&&u.length<2?`(?:/${w})`:"/"+w),O&&(w+="?"),s+=w,m+=20,O&&(m+=-8),A&&(m+=-20),N===".*"&&(m+=-50)}h.push(m)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const m=h[p]||"",E=i[p-1];d[E.name]=m&&E.repeatable?m.split("/"):m}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const m of p)if(m.type===0)h+=m.value;else if(m.type===1){const{value:E,repeatable:A,optional:O}=m,V=E in u?u[E]:"";if(dn(V)&&!A)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const N=dn(V)?V.join("/"):V;if(!N)if(O)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);h+=N}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function U0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function kv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=U0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(cg(r))return 1;if(cg(s))return-1}return s.length-r.length}function cg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $0={type:0,value:""},j0=/[a-zA-Z0-9_]/;function B0(t){if(!t)return[[]];if(t==="/")return[[$0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:j0.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function H0(t,e,n){const r=F0(B0(t.path),n),s=Ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function q0(t,e){const n=[],r=new Map;e=fg({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,m){const E=!m,A=ug(d);A.aliasOf=m&&m.record;const O=fg(e,d),V=[A];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of k)V.push(ug(Ce({},A,{components:m?m.record.components:A.components,path:D,aliasOf:m?m.record:A})))}let N,w;for(const k of V){const{path:D}=k;if(p&&D[0]!=="/"){const F=p.record.path,b=F[F.length-1]==="/"?"":"/";k.path=p.record.path+(D&&b+D)}if(N=H0(k,p,O),m?m.alias.push(N):(w=w||N,w!==N&&w.alias.push(N),E&&d.name&&!hg(N)&&o(d.name)),Ov(N)&&l(N),A.children){const F=A.children;for(let b=0;b<F.length;b++)i(F[b],N,m&&m.children[b])}m=m||N}return w?()=>{o(w)}:ho}function o(d){if(Cv(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=K0(d,n);n.splice(p,0,d),d.record.name&&!hg(d)&&r.set(d.record.name,d)}function u(d,p){let m,E={},A,O;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw di(1,{location:d});O=m.record.name,E=Ce(lg(p.params,m.keys.filter(w=>!w.optional).concat(m.parent?m.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&lg(d.params,m.keys.map(w=>w.name))),A=m.stringify(E)}else if(d.path!=null)A=d.path,m=n.find(w=>w.re.test(A)),m&&(E=m.parse(A),O=m.record.name);else{if(m=p.name?r.get(p.name):n.find(w=>w.re.test(p.path)),!m)throw di(1,{location:d,currentLocation:p});O=m.record.name,E=Ce({},p.params,d.params),A=m.stringify(E)}const V=[];let N=m;for(;N;)V.unshift(N.record),N=N.parent;return{name:O,path:A,params:E,matched:V,meta:z0(V)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function lg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ug(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:W0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function W0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function hg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function z0(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function fg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function K0(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;kv(t,e[i])<0?r=i:n=i+1}const s=G0(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function G0(t){let e=t;for(;e=e.parent;)if(Ov(e)&&kv(t,e)===0)return e}function Ov({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Q0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Tv," "),o=i.indexOf("="),a=Co(o<0?i:i.slice(0,o)),l=o<0?null:Co(i.slice(o+1));if(a in e){let u=e[a];dn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function dg(t){let e="";for(let n in t){const r=t[n];if(n=g0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(dn(r)?r.map(i=>i&&Xu(i)):[r&&Xu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Y0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=dn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const J0=Symbol(""),pg=Symbol(""),af=Symbol(""),cf=Symbol(""),eh=Symbol("");function Qi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Tr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(di(4,{from:n,to:e})):p instanceof Error?l(p):M0(p)?l(di(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function iu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Ev(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Tr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=s0(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&Tr(m,n,r,o,a,s)()}))}}return i}function gg(t){const e=Rt(af),n=Rt(cf),r=ze(()=>{const l=We(t.to);return e.resolve(l)}),s=ze(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(fi.bind(null,h));if(p>-1)return p;const m=mg(l[u-2]);return u>1&&mg(h)===m&&d[d.length-1].path!==m?d.findIndex(fi.bind(null,l[u-2])):p}),i=ze(()=>s.value>-1&&nC(n.params,r.value.params)),o=ze(()=>s.value>-1&&s.value===n.matched.length-1&&Rv(n.params,r.value.params));function a(l={}){if(tC(l)){const u=e[We(t.replace)?"replace":"push"](We(t.to)).catch(ho);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ze(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function X0(t){return t.length===1?t[0]:t}const Z0=_n({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:gg,setup(t,{slots:e}){const n=xn(gg(t)),{options:r}=Rt(af),s=ze(()=>({[_g(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_g(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&X0(e.default(n));return t.custom?i:Ke("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),eC=Z0;function tC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!dn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function mg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _g=(t,e,n)=>t??e??n,rC=_n({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Rt(eh),s=ze(()=>t.route||r.value),i=Rt(pg,0),o=ze(()=>{let u=We(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=ze(()=>s.value.matched[o.value]);Nr(pg,ze(()=>o.value+1)),Nr(J0,a),Nr(eh,s);const l=Ft();return ln(()=>[l.value,a.value,t.name],([u,h,d],[p,m,E])=>{h&&(h.instances[d]=u,m&&m!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!fi(h,m)||!p)&&(h.enterCallbacks[d]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return yg(n.default,{Component:p,route:u});const m=d.props[h],E=m?m===!0?u.params:typeof m=="function"?m(u):m:null,O=Ke(p,Ce({},E,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return yg(n.default,{Component:O,route:u})||O}}});function yg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Nv=rC;function sC(t){const e=q0(t.routes,t),n=t.parseQuery||Q0,r=t.stringifyQuery||dg,s=t.history,i=Qi(),o=Qi(),a=Qi(),l=Lr(Yt);let u=Yt;js&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ru.bind(null,$=>""+$),d=ru.bind(null,_0),p=ru.bind(null,Co);function m($,Z){let Y,se;return Cv($)?(Y=e.getRecordMatcher($),se=Z):se=$,e.addRoute(se,Y)}function E($){const Z=e.getRecordMatcher($);Z&&e.removeRoute(Z)}function A(){return e.getRoutes().map($=>$.record)}function O($){return!!e.getRecordMatcher($)}function V($,Z){if(Z=Ce({},Z||l.value),typeof $=="string"){const P=su(n,$,Z.path),x=e.resolve({path:P.path},Z),H=s.createHref(P.fullPath);return Ce(P,x,{params:p(x.params),hash:Co(P.hash),redirectedFrom:void 0,href:H})}let Y;if($.path!=null)Y=Ce({},$,{path:su(n,$.path,Z.path).path});else{const P=Ce({},$.params);for(const x in P)P[x]==null&&delete P[x];Y=Ce({},$,{params:d(P)}),Z.params=d(Z.params)}const se=e.resolve(Y,Z),Ae=$.hash||"";se.params=h(p(se.params));const De=E0(r,Ce({},$,{hash:p0(Ae),path:se.path})),R=s.createHref(De);return Ce({fullPath:De,hash:Ae,query:r===dg?Y0($.query):$.query||{}},se,{redirectedFrom:void 0,href:R})}function N($){return typeof $=="string"?su(n,$,l.value.path):Ce({},$)}function w($,Z){if(u!==$)return di(8,{from:Z,to:$})}function k($){return b($)}function D($){return k(Ce(N($),{replace:!0}))}function F($){const Z=$.matched[$.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let se=typeof Y=="function"?Y($):Y;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=N(se):{path:se},se.params={}),Ce({query:$.query,hash:$.hash,params:se.path!=null?{}:$.params},se)}}function b($,Z){const Y=u=V($),se=l.value,Ae=$.state,De=$.force,R=$.replace===!0,P=F(Y);if(P)return b(Ce(N(P),{state:typeof P=="object"?Ce({},Ae,P.state):Ae,force:De,replace:R}),Z||Y);const x=Y;x.redirectedFrom=Z;let H;return!De&&w0(r,se,Y)&&(H=di(16,{to:x,from:se}),jt(se,se,!0,!1)),(H?Promise.resolve(H):I(x,se)).catch(U=>jn(U)?jn(U,2)?U:vn(U):ne(U,x,se)).then(U=>{if(U){if(jn(U,2))return b(Ce({replace:R},N(U.to),{state:typeof U.to=="object"?Ce({},Ae,U.to.state):Ae,force:De}),Z||x)}else U=S(x,se,!0,R,Ae);return C(x,se,U),U})}function v($,Z){const Y=w($,Z);return Y?Promise.reject(Y):Promise.resolve()}function _($){const Z=rn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext($):$()}function I($,Z){let Y;const[se,Ae,De]=iC($,Z);Y=iu(se.reverse(),"beforeRouteLeave",$,Z);for(const P of se)P.leaveGuards.forEach(x=>{Y.push(Tr(x,$,Z))});const R=v.bind(null,$,Z);return Y.push(R),yt(Y).then(()=>{Y=[];for(const P of i.list())Y.push(Tr(P,$,Z));return Y.push(R),yt(Y)}).then(()=>{Y=iu(Ae,"beforeRouteUpdate",$,Z);for(const P of Ae)P.updateGuards.forEach(x=>{Y.push(Tr(x,$,Z))});return Y.push(R),yt(Y)}).then(()=>{Y=[];for(const P of De)if(P.beforeEnter)if(dn(P.beforeEnter))for(const x of P.beforeEnter)Y.push(Tr(x,$,Z));else Y.push(Tr(P.beforeEnter,$,Z));return Y.push(R),yt(Y)}).then(()=>($.matched.forEach(P=>P.enterCallbacks={}),Y=iu(De,"beforeRouteEnter",$,Z,_),Y.push(R),yt(Y))).then(()=>{Y=[];for(const P of o.list())Y.push(Tr(P,$,Z));return Y.push(R),yt(Y)}).catch(P=>jn(P,8)?P:Promise.reject(P))}function C($,Z,Y){a.list().forEach(se=>_(()=>se($,Z,Y)))}function S($,Z,Y,se,Ae){const De=w($,Z);if(De)return De;const R=Z===Yt,P=js?history.state:{};Y&&(se||R?s.replace($.fullPath,Ce({scroll:R&&P&&P.scroll},Ae)):s.push($.fullPath,Ae)),l.value=$,jt($,Z,Y,R),vn()}let T;function le(){T||(T=s.listen(($,Z,Y)=>{if(!lr.listening)return;const se=V($),Ae=F(se);if(Ae){b(Ce(Ae,{replace:!0,force:!0}),se).catch(ho);return}u=se;const De=l.value;js&&P0(sg(De.fullPath,Y.delta),Jc()),I(se,De).catch(R=>jn(R,12)?R:jn(R,2)?(b(Ce(N(R.to),{force:!0}),se).then(P=>{jn(P,20)&&!Y.delta&&Y.type===Po.pop&&s.go(-1,!1)}).catch(ho),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),ne(R,se,De))).then(R=>{R=R||S(se,De,!1),R&&(Y.delta&&!jn(R,8)?s.go(-Y.delta,!1):Y.type===Po.pop&&jn(R,20)&&s.go(-1,!1)),C(se,De,R)}).catch(ho)}))}let me=Qi(),ee=Qi(),ie;function ne($,Z,Y){vn($);const se=ee.list();return se.length?se.forEach(Ae=>Ae($,Z,Y)):console.error($),Promise.reject($)}function Ne(){return ie&&l.value!==Yt?Promise.resolve():new Promise(($,Z)=>{me.add([$,Z])})}function vn($){return ie||(ie=!$,le(),me.list().forEach(([Z,Y])=>$?Y($):Z()),me.reset()),$}function jt($,Z,Y,se){const{scrollBehavior:Ae}=t;if(!js||!Ae)return Promise.resolve();const De=!Y&&k0(sg($.fullPath,0))||(se||!Y)&&history.state&&history.state.scroll||null;return Dn().then(()=>Ae($,Z,De)).then(R=>R&&C0(R)).catch(R=>ne(R,$,Z))}const lt=$=>s.go($);let Ln;const rn=new Set,lr={currentRoute:l,listening:!0,addRoute:m,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:A,resolve:V,options:t,push:k,replace:D,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:Ne,install($){const Z=this;$.component("RouterLink",eC),$.component("RouterView",Nv),$.config.globalProperties.$router=Z,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>We(l)}),js&&!Ln&&l.value===Yt&&(Ln=!0,k(s.location).catch(Ae=>{}));const Y={};for(const Ae in Yt)Object.defineProperty(Y,Ae,{get:()=>l.value[Ae],enumerable:!0});$.provide(af,Z),$.provide(cf,bn(Y)),$.provide(eh,l);const se=$.unmount;rn.add($),$.unmount=function(){rn.delete($),rn.size<1&&(u=Yt,T&&T(),T=null,l.value=Yt,Ln=!1,ie=!1),se()}}};function yt($){return $.reduce((Z,Y)=>Z.then(()=>_(Y)),Promise.resolve())}return lr}function iC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>fi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>fi(u,l))||s.push(l))}return[n,r,s]}function Dv(t){return Rt(cf)}const oC=/(:\w+)\([^)]+\)/g,aC=/(:\w+)[?+*]/g,cC=/:\w+/g,lC=(t,e)=>e.path.replace(oC,"$1").replace(aC,"$1").replace(cC,n=>t.params[n.slice(1)]?.toString()||""),th=(t,e)=>{const n=t.route.matched.find(s=>s.components?.default===t.Component.type),r=e??n?.meta.key??(n&&lC(t.route,n));return typeof r=="function"?r(t.route):r},uC=(t,e)=>({default:()=>t?Ke(oA,t===!0?{}:t,e):e});function lf(t){return Array.isArray(t)?t:[t]}const hC={layout:"admin",ssr:!1},ou=[{name:"cart",path:"/cart",component:()=>ut(()=>import("./CLTcv_P0.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{name:"shop",path:"/shop",component:()=>ut(()=>import("./BnQP0ro4.js"),__vite__mapDeps([3,4,5,6]),import.meta.url)},{name:"about",path:"/about",component:()=>ut(()=>import("./CSCUcpnd.js"),__vite__mapDeps([7,5]),import.meta.url)},{name:"index",path:"/",component:()=>ut(()=>import("./DjmOKQPj.js"),__vite__mapDeps([8,5,9]),import.meta.url)},{name:"events",path:"/events",component:()=>ut(()=>import("./BXtRLQgb.js"),[],import.meta.url)},{name:"search",path:"/search",component:()=>ut(()=>import("./CKIPp9Xb.js"),__vite__mapDeps([10,4,11]),import.meta.url)},{name:"classes",path:"/classes",component:()=>ut(()=>import("./DQxs0pmT.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"profile",path:"/profile",component:()=>ut(()=>import("./B0IzoYsr.js"),__vite__mapDeps([14,15,16,1]),import.meta.url)},{name:"success",path:"/success",component:()=>ut(()=>import("./BomBngYq.js"),__vite__mapDeps([17,5]),import.meta.url)},{name:"inquiries",path:"/inquiries",component:()=>ut(()=>import("./DQ_cr9yB.js"),__vite__mapDeps([18,9,5]),import.meta.url)},{name:"class-slug",path:"/class/:slug()",component:()=>ut(()=>import("./CynM5z16.js"),__vite__mapDeps([19,15,20,2,5,13]),import.meta.url)},{name:"order-cancel",path:"/order-cancel",component:()=>ut(()=>import("./BtN4u5Hf.js"),__vite__mapDeps([21,5]),import.meta.url)},{name:"product-slug",path:"/product/:slug()",component:()=>ut(()=>import("./BQJGGpTa.js"),__vite__mapDeps([22,15,20,2,5,6]),import.meta.url)},{name:"admin-dashboard",path:"/admin-dashboard",meta:{...hC||{},middleware:["admin"]},component:()=>ut(()=>import("./5lCyA4PW.js"),__vite__mapDeps([23,1,16]),import.meta.url)}],Vv=(t,e)=>({default:()=>t?Ke(fb,t===!0?{}:t,e):e.default?.()}),fC=/(:\w+)\([^)]+\)/g,dC=/(:\w+)[?+*]/g,pC=/:\w+/g;function vg(t){const e=t?.meta.key??t.path.replace(fC,"$1").replace(dC,"$1").replace(pC,n=>t.params[n.slice(1)]?.toString()||"");return typeof e=="function"?e(t):e}function gC(t,e){return t===e||e===Yt?!1:vg(t)!==vg(e)?!0:!t.matched.every((r,s)=>r.components&&r.components.default===e.matched[s]?.components?.default)}function mC(t,e=!1){if(t){if(t.nodeName==="#comment"&&t.nodeValue==="[")return Mv(t,[],e);if(e){const n=t.cloneNode(!0);return n.querySelectorAll("[data-island-slot]").forEach(r=>{r.innerHTML=""}),[n.outerHTML]}return[t.outerHTML]}}function Mv(t,e=[],n=!1){if(t&&t.nodeName){if(yC(t))return e;if(!_C(t)){const r=t.cloneNode(!0);n&&r.querySelectorAll?.("[data-island-slot]").forEach(s=>{s.innerHTML=""}),e.push(r.outerHTML)}Mv(t.nextSibling,e,n)}return e}function au(t,e){const n=t?mC(t):[e];return n?JA(n.join(""),n.length):Ke("div")}function _C(t){return t.nodeName==="#comment"&&t.nodeValue==="["}function yC(t){return t.nodeName==="#comment"&&t.nodeValue==="]"}const vC={scrollBehavior(t,e,n){const r=Ue(),s=St().options?.scrollBehaviorType??"auto";if(t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:xv(t.hash),behavior:s}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const o=r._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(a=>{if(e===Yt){a(Eg(t,e,n,s));return}r.hooks.hookOnce(o,()=>{requestAnimationFrame(()=>a(Eg(t,e,n,s)))})})}};function xv(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function Eg(t,e,n,r){if(n)return n;const s=gC(t,e);return t.hash?{el:t.hash,top:xv(t.hash),behavior:s?r:"instant"}:{left:0,top:0}}const EC={hashMode:!1,scrollBehaviorType:"auto"},_r={...EC,...vC},wC=async(t,e)=>{let n,r;if(!t.meta?.validate)return;const s=([n,r]=ti(()=>Promise.resolve(t.meta.validate(t))),n=await n,r(),n);if(s===!0)return;const i=gs({fatal:!0,statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i},TC=async t=>{let e,n;const r=([e,n]=ti(()=>rf({path:t.path})),e=await e,n(),e);if(r.redirect)return cr(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},IC=[wC,TC],nh={admin:()=>ut(()=>import("./CMytt_4C.js"),__vite__mapDeps([24,1,16]),import.meta.url)};function AC(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),Mp(h,"")}const a=Mp(r,t),l=!n||fR(a,n)?a:n;return l+(l.includes("?")?"":s)+i}const bC=$t({name:"nuxt:router",enforce:"pre",async setup(t){let e,n,r=nr().app.baseURL;const s=_r.history?.(r)??V0(r),i=_r.routes?([e,n]=ti(()=>_r.routes(ou)),e=await e,n(),e??ou):ou;let o;const a=sC({..._r,scrollBehavior:(O,V,N)=>{if(V===Yt){o=N;return}if(_r.scrollBehavior){if(a.options.scrollBehavior=_r.scrollBehavior,"scrollRestoration"in window.history){const w=a.beforeEach(()=>{w(),window.history.scrollRestoration="manual"})}return _r.scrollBehavior(O,Yt,o||N)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Lr(a.currentRoute.value);a.afterEach((O,V)=>{l.value=V}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=AC(r,window.location,t.payload.path),h=Lr(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((O,V)=>{O.matched[O.matched.length-1]?.components?.default===V.matched[V.matched.length-1]?.components?.default&&d()});const p={};for(const O in h.value)Object.defineProperty(p,O,{get:()=>h.value[O],enumerable:!0});t._route=bn(p),t._middleware||={global:[],named:{}};const m=Qc();a.afterEach(async(O,V,N)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(cv),N&&await t.callHook("page:loading:end")});try{[e,n]=ti(()=>a.isReady()),await e,n()}catch(O){[e,n]=ti(()=>t.runWithContext(()=>cs(O))),await e,n()}const E=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const A=t.payload.state._layout;return a.beforeEach(async(O,V)=>{await t.callHook("page:loading:start"),O.meta=xn(O.meta),t.isHydrating&&A&&!tr(O.meta.layout)&&(O.meta.layout=A),t._processingMiddleware=!0;{const N=new Set([...IC,...t._middleware.global]);for(const w of O.matched){const k=w.meta.middleware;if(k)for(const D of lf(k))N.add(D)}{const w=await t.runWithContext(()=>rf({path:O.path}));if(w.appMiddleware)for(const k in w.appMiddleware)w.appMiddleware[k]?N.add(k):N.delete(k)}for(const w of N){const k=typeof w=="string"?t._middleware.named[w]||await nh[w]?.().then(D=>D.default||D):w;if(!k)throw new Error(`Unknown route middleware: '${w}'.`);try{const D=await t.runWithContext(()=>k(O,V));if(!t.payload.serverRendered&&t.isHydrating&&(D===!1||D instanceof Error)){const F=D||gs({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>cs(F)),!1}if(D===!0)continue;if(D===!1)return D;if(D)return lv(D)&&D.fatal&&await t.runWithContext(()=>cs(D)),D}catch(D){const F=gs(D);return F.fatal&&await t.runWithContext(()=>cs(F)),F}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(O=>{if(O.matched.length===0)return t.runWithContext(()=>cs(gs({statusCode:404,fatal:!1,statusMessage:`Page not found: ${O.fullPath}`,data:{path:O.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in E&&(E.name=void 0),await a.replace({...E,force:!0}),a.options.scrollBehavior=_r.scrollBehavior}catch(O){await t.runWithContext(()=>cs(O))}}),{provide:{router:a}}}}),rh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),RC=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Xc=t=>{const e=Ue();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{rh(()=>t())}):rh(()=>t())},SC=$t({name:"nuxt:payload",setup(t){const e=new Set;St().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await tg(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),Xc(()=>{t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await tg(n).catch(()=>{console.warn("[nuxt] Error preloading payload for",n)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Yc,1e3)})}}),CC=$t(()=>{const t=St();Xc(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),PC=$t(t=>{let e;async function n(){let r;try{r=await Yc()}catch(s){const i=s;if(!("status"in i&&(i.status===404||i.status===403)))throw i}e&&clearTimeout(e),e=setTimeout(n,Bp);try{const s=await $fetch(nf("builds/latest.json")+`?${Date.now()}`);s.id!==r?.id&&(t.hooks.callHook("app:manifest:update",s),e&&clearTimeout(e))}catch{}}Xc(()=>{e=setTimeout(n,Bp)})});function kC(t={}){const e=t.path||window.location.pathname;let n={};try{n=ui(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||n?.path!==e||n?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Ue().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const OC=$t({name:"nuxt:chunk-reload",setup(t){const e=St(),n=nr(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const o=Kc(n.app.baseURL,i.fullPath);kC({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}});function wg(t){return typeof t=="string"?`'${t}'`:new NC().serialize(t)}const NC=(function(){class t{#e=new Map;compare(n,r){const s=typeof n,i=typeof r;return s==="string"&&i==="string"?n.localeCompare(r):s==="number"&&i==="number"?n-r:String.prototype.localeCompare.call(this.serialize(n,!0),this.serialize(r,!0))}serialize(n,r){if(n===null)return"null";switch(typeof n){case"string":return r?n:`'${n}'`;case"bigint":return`${n}n`;case"object":return this.$object(n);case"function":return this.$function(n)}return String(n)}serializeObject(n){const r=Object.prototype.toString.call(n);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),n);const s=n.constructor,i=s===Object||s===void 0?"":s.name;if(i!==""&&globalThis[i]===s)return this.serializeBuiltInType(i,n);if(typeof n.toJSON=="function"){const o=n.toJSON();return i+(o!==null&&typeof o=="object"?this.$object(o):`(${this.serialize(o)})`)}return this.serializeObjectEntries(i,Object.entries(n))}serializeBuiltInType(n,r){const s=this["$"+n];if(s)return s.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(n,r.entries());throw new Error(`Cannot serialize ${n}`)}serializeObjectEntries(n,r){const s=Array.from(r).sort((o,a)=>this.compare(o[0],a[0]));let i=`${n}{`;for(let o=0;o<s.length;o++){const[a,l]=s[o];i+=`${this.serialize(a,!0)}:${this.serialize(l)}`,o<s.length-1&&(i+=",")}return i+"}"}$object(n){let r=this.#e.get(n);return r===void 0&&(this.#e.set(n,`#${this.#e.size}`),r=this.serializeObject(n),this.#e.set(n,r)),r}$function(n){const r=Function.prototype.toString.call(n);return r.slice(-15)==="[native code] }"?`${n.name||""}()[native]`:`${n.name}(${n.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(n){let r="[";for(let s=0;s<n.length;s++)r+=this.serialize(n[s]),s<n.length-1&&(r+=",");return r+"]"}$Date(n){try{return`Date(${n.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(n){return`ArrayBuffer[${new Uint8Array(n).join(",")}]`}$Set(n){return`Set${this.$Array(Array.from(n).sort((r,s)=>this.compare(r,s)))}`}$Map(n){return this.serializeObjectEntries("Map",n.entries())}}for(const e of["Error","RegExp","URL"])t.prototype["$"+e]=function(n){return`${e}(${n})`};for(const e of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])t.prototype["$"+e]=function(n){return`${e}[${n.join(",")}]`};for(const e of["BigInt64Array","BigUint64Array"])t.prototype["$"+e]=function(n){return`${e}[${n.join("n,")}${n.length>0?"n":""}]`};return t})();function DC(t,e){return t===e||wg(t)===wg(e)}const Aa="<div></div>",cu=new WeakMap;function VC(t){if(cu.has(t))return cu.get(t);const e={...t};return e.render?e.render=(n,r,s,i,o,a)=>{if(i.mounted$??n.mounted$){const l=t.render?.bind(n)(n,r,s,i,o,a);return l.children===null||typeof l.children=="string"?en(l):Ke(l)}return au(n._.vnode.el,Aa)}:e.template&&=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else>${Aa}</template>
    `,e.setup=(n,r)=>{const s=Ue(),i=Lr(s.isHydrating===!1),o=Kr();if(s.isHydrating){const l={...o.attrs},u=MC(o);for(const h in l)delete o.attrs[h];Fr(()=>{Object.assign(o.attrs,l),o.vnode.dirs=u})}Fr(()=>{i.value=!0});const a=t.setup?.(n,r)||{};return Dc(a)?Promise.resolve(a).then(l=>typeof l!="function"?(l||={},l.mounted$=i,l):(...u)=>{if(i.value||!s.isHydrating){const h=l(...u);return h.children===null||typeof h.children=="string"?en(h):Ke(h)}return au(o?.vnode.el,Aa)}):typeof a=="function"?(...l)=>{if(i.value){const u=a(...l),h=e.inheritAttrs!==!1?r.attrs:void 0;return u.children===null||typeof u.children=="string"?en(u,h):Ke(u,h)}return au(o?.vnode.el,Aa)}:Object.assign(a,{mounted$:i})},cu.set(t,e),e}function MC(t){if(!t||!t.vnode.dirs)return null;const e=t.vnode.dirs;return t.vnode.dirs=null,e}const xC="$s";function Lv(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=xC+n,i=Ue(),o=W_(i.payload.state,s);if(o.value===void 0&&r){const a=r();if($e(a))return i.payload.state[s]=a,a;o.value=a}return o}function LC(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},r=e||{},s=r.decode||FC;let i=0;for(;i<t.length;){const o=t.indexOf("=",i);if(o===-1)break;let a=t.indexOf(";",i);if(a===-1)a=t.length;else if(a<o){i=t.lastIndexOf(";",o-1)+1;continue}const l=t.slice(i,o).trim();if(r?.filter&&!r?.filter(l)){i=a+1;continue}if(n[l]===void 0){let u=t.slice(o+1,a).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[l]=UC(u,s)}i=a+1}return n}function FC(t){return t.includes("%")?decodeURIComponent(t):t}function UC(t,e){try{return e(t)}catch{return t}}const ba=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function Tg(t,e,n){const r=n||{},s=r.encode||encodeURIComponent;if(typeof s!="function")throw new TypeError("option encode is invalid");if(!ba.test(t))throw new TypeError("argument name is invalid");const i=s(e);if(i&&!ba.test(i))throw new TypeError("argument val is invalid");let o=t+"="+i;if(r.maxAge!==void 0&&r.maxAge!==null){const a=r.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!ba.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!ba.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(!$C(r.expires)||Number.isNaN(r.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():r.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(o+="; Partitioned"),o}function $C(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}function sn(t){if(typeof t!="object")return t;var e,n,r=Object.prototype.toString.call(t);if(r==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(e in t)t.hasOwnProperty(e)&&n[e]!==t[e]&&(n[e]=sn(t[e]))}else{n={};for(e in t)e==="__proto__"?Object.defineProperty(n,e,{value:sn(t[e]),configurable:!0,enumerable:!0,writable:!0}):n[e]=sn(t[e])}return n}if(r==="[object Array]"){for(e=t.length,n=Array(e);e--;)n[e]=sn(t[e]);return n}return r==="[object Set]"?(n=new Set,t.forEach(function(s){n.add(sn(s))}),n):r==="[object Map]"?(n=new Map,t.forEach(function(s,i){n.set(sn(i),sn(s))}),n):r==="[object Date]"?new Date(+t):r==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):r==="[object DataView]"?new t.constructor(sn(t.buffer)):r==="[object ArrayBuffer]"?t.slice(0):r.slice(-6)==="Array]"?new t.constructor(t):t}const jC={path:"/",watch:!0,decode:t=>ui(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},Ra=globalThis.cookieStore;function Ig(t,e){const n={...jC,...e};n.filter??=u=>u===t;const r=Ag(n)||{};let s;n.maxAge!==void 0?s=n.maxAge*1e3:n.expires&&(s=n.expires.getTime()-Date.now());const i=s!==void 0&&s<=0,o=i||r[t]===void 0||r[t]===null,a=sn(i?void 0:r[t]??n.default?.()),l=s&&!i?qC(a,s,n.watch&&n.watch!=="shallow"):Ft(a);{let u=null;try{!Ra&&typeof BroadcastChannel<"u"&&(u=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const h=(E=!1)=>{!E&&(n.readonly||DC(l.value,r[t]))||(HC(t,l.value,n),r[t]=sn(l.value),u?.postMessage({value:n.encode(l.value)}))},d=E=>{const A=E.refresh?Ag(n)?.[t]:n.decode(E.value);p=!0,l.value=A,r[t]=sn(A),Dn(()=>{p=!1})};let p=!1;const m=!!Bo();if(m&&Qa(()=>{p=!0,h(),u?.close()}),Ra){const E=A=>{const O=A.changed.find(N=>N.name===t),V=A.deleted.find(N=>N.name===t);O&&d({value:O.value}),V&&d({value:null})};Ra.addEventListener("change",E),m&&Qa(()=>Ra.removeEventListener("change",E))}else u&&(u.onmessage=({data:E})=>d(E));n.watch&&ln(l,()=>{p||h()},{deep:n.watch!=="shallow"}),o&&h(o)}return l}function Ag(t={}){return LC(document.cookie,t)}function BC(t,e,n={}){return e==null?Tg(t,e,{...n,maxAge:-1}):Tg(t,e,n)}function HC(t,e,n={}){document.cookie=BC(t,e,n)}const bg=2147483647;function qC(t,e,n){let r,s,i=0;const o=n?Ft(t):{value:t};return Bo()&&Qa(()=>{s?.(),clearTimeout(r)}),q_((a,l)=>{n&&(s=ln(o,l));function u(){i=0,clearTimeout(r);const h=e-i,d=h<bg?h:bg;r=setTimeout(()=>{if(i+=d,i<e)return u();o.value=void 0,l()},d)}return{get(){return a(),o.value},set(h){u(),o.value=h,l()}}})}function WC(t){if(t?.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function Fv(t,e=St()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||=new Set,e._routePreloaded.has(n)))return;const s=e._preloadPromises||=[];if(s.length>4)return Promise.all(s).then(()=>Fv(t,e));e._routePreloaded.add(n);const i=r.map(o=>o.components?.default).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const zC=(...t)=>t.find(e=>e!==void 0);function KC(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function r(i,o,a){const l=a??t.trailingSlash;if(!i||l!=="append"&&l!=="remove")return i;if(typeof i=="string")return Sa(i,l);const u="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:Sa(u,l)}}function s(i){const o=St(),a=nr(),l=ze(()=>!!i.target&&i.target!=="_self"),u=ze(()=>{const O=i.to||i.href||"";return typeof O=="string"&&cr(O,{acceptRelative:!0})}),h=op("RouterLink"),d=typeof h!="string"?h.useLink:void 0,p=ze(()=>{if(i.external)return!0;const O=i.to||i.href||"";return typeof O=="object"?!1:O===""||u.value}),m=ze(()=>{const O=i.to||i.href||"";return p.value?O:r(O,o.resolve,i.trailingSlash)}),E=p.value?void 0:d?.({...i,to:m}),A=ze(()=>{const O=i.trailingSlash??t.trailingSlash;if(!m.value||u.value||n(m.value))return m.value;if(p.value){const V=typeof m.value=="object"&&"path"in m.value?Ku(m.value):m.value,N=typeof V=="object"?o.resolve(V).href:V;return Sa(N,O)}return typeof m.value=="object"?o.resolve(m.value)?.href??null:Sa(Kc(a.app.baseURL,m.value),O)});return{to:m,hasTarget:l,isAbsoluteUrl:u,isExternal:p,href:A,isActive:E?.isActive??ze(()=>m.value===o.currentRoute.value.path),isExactActive:E?.isExactActive??ze(()=>m.value===o.currentRoute.value.path),route:E?.route??ze(()=>o.resolve(m.value)),async navigate(O){await cS(A.value,{replace:i.replace,external:p.value||l.value})}}}return _n({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1},trailingSlash:{type:String,default:void 0,required:!1}},useLink:s,setup(i,{slots:o}){const a=St(),{to:l,href:u,navigate:h,isExternal:d,hasTarget:p,isAbsoluteUrl:m}=s(i),E=Lr(!1),A=Ft(null),O=w=>{A.value=i.custom?w?.$el?.nextElementSibling:w?.$el};function V(w){return!E.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===w:i.prefetchOn?.[w]??t.prefetchOn?.[w])&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!JC()}async function N(w=Ue()){if(E.value)return;E.value=!0;const k=typeof l.value=="string"?l.value:d.value?Ku(l.value):a.resolve(l.value).fullPath,D=d.value?new URL(k,window.location.href).href:k;await Promise.all([w.hooks.callHook("link:prefetch",D).catch(()=>{}),!d.value&&!p.value&&Fv(l.value,a).catch(()=>{})])}if(V("visibility")){const w=Ue();let k,D=null;Fr(()=>{const F=QC();Xc(()=>{k=rh(()=>{A?.value?.tagName&&(D=F.observe(A.value,async()=>{D?.(),D=null,await N(w)}))})})}),Ii(()=>{k&&RC(k),D?.(),D=null})}return()=>{if(!d.value&&!p.value&&!n(l.value)){const D={ref:O,to:l.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(V("interaction")&&(D.onPointerenter=N.bind(null,void 0),D.onFocus=N.bind(null,void 0)),E.value&&(D.class=i.prefetchedClass||t.prefetchedClass),D.rel=i.rel||void 0),Ke(op("RouterLink"),D,o.default)}const w=i.target||null,k=zC(i.noRel?"":i.rel,t.externalRelAttribute,m.value||p.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:h,prefetch:N,get route(){if(!u.value)return;const D=new URL(u.value,window.location.href);return{path:D.pathname,fullPath:D.pathname,get query(){return ef(D.search)},hash:D.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:k,target:w,isExternal:d.value||p.value,isActive:!1,isExactActive:!1}):null:Ke("a",{ref:A,href:u.value||null,rel:k,target:w,onClick:D=>{if(!(d.value||p.value))return D.preventDefault(),i.replace?a.replace(u.value):a.push(u.value)}},o.default?.())}}})}const GC=KC(qR);function Sa(t,e){const n=e==="append"?qy:hi;return cr(t)&&!t.startsWith("http")?t:n(t,!0)}function QC(){const t=Ue();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}}),n.set(i,o),e.observe(i),()=>{n.delete(i),e?.unobserve(i),n.size===0&&(e?.disconnect(),e=null)});return t._observer={observe:r}}const YC=/2g/;function JC(){const t=navigator.connection;return!!(t&&(t.saveData||YC.test(t.effectiveType)))}const XC=$t({name:"pinia",setup(t){const e=lS();return t.vueApp.use(e),Wo(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}}),ZC=$t({name:"nuxt:global-components"}),Pr={admin:ip(()=>ut(()=>import("./CVVCkvE2.js"),__vite__mapDeps([25,5]),import.meta.url).then(t=>t.default||t)),default:ip(()=>ut(()=>import("./z7w1gJiH.js"),__vite__mapDeps([26,2,11,5,27]),import.meta.url).then(t=>t.default||t))},eP=$t({name:"nuxt:prefetch",setup(t){const e=St();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{const r=n?.meta?.layout;r&&typeof Pr[r]=="function"&&await Pr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(cr(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=lf(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof nh[o]=="function"&&nh[o]();typeof s=="string"&&s in Pr&&WC(Pr[s])})}});function tP(t,e){if(t==null)return;let n=t;for(let r=0;r<e.length;r++){if(n==null||n[e[r]]==null)return;n=n[e[r]]}return n}function uf(t,e,n){if(n.length===0)return e;const r=n[0];return n.length>1&&(e=uf(typeof t!="object"||t===null||!Object.prototype.hasOwnProperty.call(t,r)?Number.isInteger(Number(n[1]))?[]:{}:t[r],e,Array.prototype.slice.call(n,1))),Number.isInteger(Number(r))&&Array.isArray(t)?t.slice()[r]:Object.assign({},t,{[r]:e})}function Uv(t,e){if(t==null||e.length===0)return t;if(e.length===1){if(t==null)return t;if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.slice.call(t,0).splice(e[0],1);const n={};for(const r in t)n[r]=t[r];return delete n[e[0]],n}if(t[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.concat.call([],t);const n={};for(const r in t)n[r]=t[r];return n}return uf(t,Uv(t[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function $v(t,e){return e.map(n=>n.split(".")).map(n=>[n,tP(t,n)]).filter(n=>n[1]!==void 0).reduce((n,r)=>uf(n,r[1],r[0]),{})}function jv(t,e){return e.map(n=>n.split(".")).reduce((n,r)=>Uv(n,r),t)}function Rg(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:o,beforeHydrate:a,afterHydrate:l},u,h=!0){try{h&&a?.(u);const d=e.getItem(r);if(d){const p=n.deserialize(d),m=i?$v(p,i):p,E=o?jv(m,o):m;t.$patch(E)}h&&l?.(u)}catch(d){s&&console.error("[pinia-plugin-persistedstate]",d)}}function Sg(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:o}){try{const a=i?$v(t,i):t,l=o?jv(a,o):a,u=n.serialize(l);e.setItem(r,u)}catch(a){s&&console.error("[pinia-plugin-persistedstate]",a)}}function nP(t,e,n){const{pinia:r,store:s,options:{persist:i=n}}=t;if(!i)return;if(!(s.$id in r.state.value)){const l=r._s.get(s.$id.replace("__hot:",""));l&&Promise.resolve().then(()=>l.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:l=!0}={})=>{a.forEach(u=>{Rg(s,u,t,l)})},s.$persist=()=>{a.forEach(l=>{Sg(s.$state,l)})},a.forEach(l=>{Rg(s,l,t),s.$subscribe((u,h)=>Sg(h,l),{detached:!0})})}function rP(t){return{getItem:e=>Ig(e,{...t??nr().public.piniaPluginPersistedstate.cookieOptions??{},decode:t?.decode??decodeURIComponent,readonly:!0}).value,setItem:(e,n)=>Ig(e,{...t??nr().public.piniaPluginPersistedstate.cookieOptions??{},encode:t?.encode??encodeURIComponent}).value=n}}function sP(){return{getItem:t=>window.localStorage.getItem(t),setItem:(t,e)=>window.localStorage.setItem(t,e)}}function iP(){return{getItem:t=>window.sessionStorage.getItem(t),setItem:(t,e)=>window.sessionStorage.setItem(t,e)}}const lu={cookies:rP,localStorage:sP,sessionStorage:iP};function oP(t){const n=nr().public.piniaPluginPersistedstate;nP(t,r=>({key:n.key?n.key.replace(/%id/g,r.key??t.store.$id):r.key??t.store.$id,debug:r.debug??n.debug??!1,serializer:r.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>ui(s)},storage:r.storage??(n.storage?n.storage==="cookies"?lu.cookies(n.cookieOptions):lu[n.storage]():lu.cookies()),beforeHydrate:r.beforeHydrate,afterHydrate:r.afterHydrate,pick:r.pick,omit:r.omit}),n.auto??!1)}const aP=$t({name:"pinia-plugin-persistedstate",setup({$pinia:t}){t.use(oP)}}),cP="__NUXT_COLOR_MODE__",uu="nuxt-color-mode",lP="localStorage",Bn=window[cP]||{},uP=$t(t=>{const e=Lv("color-mode",()=>xn({preference:Bn.preference,value:Bn.value,unknown:!1,forced:!1})).value;St().afterEach(i=>{const o=i.meta.colorMode;o&&o!=="system"?(e.value=o,e.forced=!0):(o==="system"&&console.warn("You cannot force the colorMode to system at the page level."),e.forced=!1,e.value=e.preference==="system"?Bn.getColorScheme():e.preference)});let n;function r(){n||!window.matchMedia||(n=window.matchMedia("(prefers-color-scheme: dark)"),n.addEventListener("change",()=>{!e.forced&&e.preference==="system"&&(e.value=Bn.getColorScheme())}))}function s(i,o){switch(i){case"cookie":window.document.cookie=uu+"="+o;break;case"sessionStorage":window.sessionStorage?.setItem(uu,o);break;case"localStorage":default:window.localStorage?.setItem(uu,o)}}ln(()=>e.preference,i=>{e.forced||(i==="system"?(e.value=Bn.getColorScheme(),r()):e.value=i,s(lP,i))},{immediate:!0}),ln(()=>e.value,(i,o)=>{Bn.removeColorScheme(o),Bn.addColorScheme(i)}),e.preference==="system"&&r(),t.hook("app:mounted",()=>{e.unknown&&(e.preference=Bn.preference,e.value=Bn.value,e.unknown=!1)}),t.provide("colorMode",e)}),hP=()=>{};var Cg={};/**
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
 */const Bv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(p=64)),r.push(n[h],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new dP;const p=i<<2|a>>4;if(r.push(p),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const E=u<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pP=function(t){const e=Bv(t);return Hv.encodeByteArray(e,!0)},fc=function(t){return pP(t).replace(/\./g,"")},qv=function(t){try{return Hv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mP=()=>gP().__FIREBASE_DEFAULTS__,_P=()=>{if(typeof process>"u"||typeof Cg>"u")return;const t=Cg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qv(t[1]);return e&&JSON.parse(e)},Zc=()=>{try{return hP()||mP()||_P()||yP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wv=t=>Zc()?.emulatorHosts?.[t],vP=t=>{const e=Wv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zv=()=>Zc()?.config,Kv=t=>Zc()?.[`_${t}`];/**
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
 */class EP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ai(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gv(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function wP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[fc(JSON.stringify(n)),fc(JSON.stringify(o)),""].join(".")}const po={};function TP(){const t={prod:[],emulator:[]};for(const e of Object.keys(po))po[e]?t.emulator.push(e):t.prod.push(e);return t}function IP(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Pg=!1;function Qv(t,e){if(typeof window>"u"||typeof document>"u"||!Ai(window.location.host)||po[t]===e||po[t]||Pg)return;po[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=TP().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,m){p.setAttribute("width","24"),p.setAttribute("id",m),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Pg=!0,o()},p}function h(p,m){p.setAttribute("id",m),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=IP(r),m=n("text"),E=document.getElementById(m)||document.createElement("span"),A=n("learnmore"),O=document.getElementById(A)||document.createElement("a"),V=n("preprendIcon"),N=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const w=p.element;a(w),h(O,A);const k=u();l(N,V),w.append(N,E,O,k),document.body.appendChild(w)}i?(E.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function bP(){const t=Zc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CP(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PP(){return!bP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jv(){try{return typeof indexedDB=="object"}catch{return!1}}function Xv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function kP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const OP="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OP,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?NP(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yn(s,a,r)}}function NP(t,e){return t.replace(DP,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const DP=/\{\$([^}]+)}/g;function VP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ws(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(kg(i)&&kg(o)){if(!ws(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function kg(t){return t!==null&&typeof t=="object"}/**
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
 */function zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function MP(t,e){const n=new xP(t,e);return n.subscribe.bind(n)}class xP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=hu),s.error===void 0&&(s.error=hu),s.complete===void 0&&(s.complete=hu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hu(){}/**
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
 */const FP=1e3,UP=2,$P=14400*1e3,jP=.5;function Og(t,e=FP,n=UP){const r=e*Math.pow(n,t),s=Math.round(jP*r*(Math.random()-.5)*2);return Math.min($P,r+s)}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ls="[DEFAULT]";/**
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
 */class BP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new EP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qP(e))try{this.getOrInitializeService({instanceIdentifier:ls})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ls){return this.instances.has(e)}getOptions(e=ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ls){return this.component?this.component.multipleInstances?e:ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HP(t){return t===ls?void 0:t}function qP(t){return t.instantiationMode==="EAGER"}/**
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
 */class WP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const zP={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},KP=ve.INFO,GP={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},QP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=GP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class el{constructor(e){this.name=e,this._logLevel=KP,this._logHandler=QP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const YP=(t,e)=>e.some(n=>t instanceof n);let Ng,Dg;function JP(){return Ng||(Ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XP(){return Dg||(Dg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zv=new WeakMap,sh=new WeakMap,eE=new WeakMap,fu=new WeakMap,hf=new WeakMap;function ZP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zv.set(n,t)}).catch(()=>{}),hf.set(e,t),e}function ek(t){if(sh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});sh.set(t,e)}let ih={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||eE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tk(t){ih=t(ih)}function nk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(du(this),e,...n);return eE.set(r,e.sort?e.sort():[e]),Dr(r)}:XP().includes(t)?function(...e){return t.apply(du(this),e),Dr(Zv.get(this))}:function(...e){return Dr(t.apply(du(this),e))}}function rk(t){return typeof t=="function"?nk(t):(t instanceof IDBTransaction&&ek(t),YP(t,JP())?new Proxy(t,ih):t)}function Dr(t){if(t instanceof IDBRequest)return ZP(t);if(fu.has(t))return fu.get(t);const e=rk(t);return e!==t&&(fu.set(t,e),hf.set(e,t)),e}const du=t=>hf.get(t);function tE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Dr(o.result),l.oldVersion,l.newVersion,Dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sk=["get","getKey","getAll","getAllKeys","count"],ik=["put","add","delete","clear"],pu=new Map;function Vg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pu.get(e))return pu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ik.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sk.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return pu.set(e,i),i}tk(t=>({...t,get:(e,n,r)=>Vg(e,n)||t.get(e,n,r),has:(e,n)=>!!Vg(e,n)||t.has(e,n)}));/**
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
 */class ok{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ak(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ak(t){return t.getComponent()?.type==="VERSION"}const oh="@firebase/app",Mg="0.14.3";/**
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
 */const rr=new el("@firebase/app"),ck="@firebase/app-compat",lk="@firebase/analytics-compat",uk="@firebase/analytics",hk="@firebase/app-check-compat",fk="@firebase/app-check",dk="@firebase/auth",pk="@firebase/auth-compat",gk="@firebase/database",mk="@firebase/data-connect",_k="@firebase/database-compat",yk="@firebase/functions",vk="@firebase/functions-compat",Ek="@firebase/installations",wk="@firebase/installations-compat",Tk="@firebase/messaging",Ik="@firebase/messaging-compat",Ak="@firebase/performance",bk="@firebase/performance-compat",Rk="@firebase/remote-config",Sk="@firebase/remote-config-compat",Ck="@firebase/storage",Pk="@firebase/storage-compat",kk="@firebase/firestore",Ok="@firebase/ai",Nk="@firebase/firestore-compat",Dk="firebase",Vk="12.3.0";/**
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
 */const ah="[DEFAULT]",Mk={[oh]:"fire-core",[ck]:"fire-core-compat",[uk]:"fire-analytics",[lk]:"fire-analytics-compat",[fk]:"fire-app-check",[hk]:"fire-app-check-compat",[dk]:"fire-auth",[pk]:"fire-auth-compat",[gk]:"fire-rtdb",[mk]:"fire-data-connect",[_k]:"fire-rtdb-compat",[yk]:"fire-fn",[vk]:"fire-fn-compat",[Ek]:"fire-iid",[wk]:"fire-iid-compat",[Tk]:"fire-fcm",[Ik]:"fire-fcm-compat",[Ak]:"fire-perf",[bk]:"fire-perf-compat",[Rk]:"fire-rc",[Sk]:"fire-rc-compat",[Ck]:"fire-gcs",[Pk]:"fire-gcs-compat",[kk]:"fire-fst",[Nk]:"fire-fst-compat",[Ok]:"fire-vertex","fire-js":"fire-js",[Dk]:"fire-js-all"};/**
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
 */const ko=new Map,xk=new Map,ch=new Map;function xg(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(ch.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;ch.set(e,t);for(const n of ko.values())xg(n,t);for(const n of xk.values())xg(n,t);return!0}function Ko(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Lk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vr=new Cs("app","Firebase",Lk);/**
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
 */class Fk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
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
 */const bi=Vk;function nE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ah,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Vr.create("bad-app-name",{appName:String(s)});if(n||(n=zv()),!n)throw Vr.create("no-options");const i=ko.get(s);if(i){if(ws(n,i.options)&&ws(r,i.config))return i;throw Vr.create("duplicate-app",{appName:s})}const o=new WP(s);for(const l of ch.values())o.addComponent(l);const a=new Fk(n,r,o);return ko.set(s,a),a}function ff(t=ah){const e=ko.get(t);if(!e&&t===ah&&zv())return nE();if(!e)throw Vr.create("no-app",{appName:t});return e}function Uk(){return Array.from(ko.values())}function tn(t,e,n){let r=Mk[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(o.join(" "));return}Vn(new pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const $k="firebase-heartbeat-database",jk=1,Oo="firebase-heartbeat-store";let gu=null;function rE(){return gu||(gu=tE($k,jk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vr.create("idb-open",{originalErrorMessage:t.message})})),gu}async function Bk(t){try{const n=(await rE()).transaction(Oo),r=await n.objectStore(Oo).get(sE(t));return await n.done,r}catch(e){if(e instanceof yn)rr.warn(e.message);else{const n=Vr.create("idb-get",{originalErrorMessage:e?.message});rr.warn(n.message)}}}async function Lg(t,e){try{const r=(await rE()).transaction(Oo,"readwrite");await r.objectStore(Oo).put(e,sE(t)),await r.done}catch(n){if(n instanceof yn)rr.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n?.message});rr.warn(r.message)}}}function sE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Hk=1024,qk=30;class Wk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>qk){const s=Gk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){rr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fg(),{heartbeatsToSend:n,unsentEntries:r}=zk(this._heartbeatsCache.heartbeats),s=fc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return rr.warn(e),""}}}function Fg(){return new Date().toISOString().substring(0,10)}function zk(t,e=Hk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ug(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ug(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jv()?Xv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bk(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ug(t){return fc(JSON.stringify({version:2,heartbeats:t})).length}function Gk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Qk(t){Vn(new pn("platform-logger",e=>new ok(e),"PRIVATE")),Vn(new pn("heartbeat",e=>new Wk(e),"PRIVATE")),tn(oh,Mg,t),tn(oh,Mg,"esm2020"),tn("fire-js","")}Qk("");var Yk="firebase",Jk="12.3.0";/**
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
 */tn(Yk,Jk,"app");function iE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xk=iE,oE=new Cs("auth","Firebase",iE());/**
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
 */const dc=new el("@firebase/auth");function Zk(t,...e){dc.logLevel<=ve.WARN&&dc.warn(`Auth (${bi}): ${t}`,...e)}function Fa(t,...e){dc.logLevel<=ve.ERROR&&dc.error(`Auth (${bi}): ${t}`,...e)}/**
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
 */function gn(t,...e){throw df(t,...e)}function Sn(t,...e){return df(t,...e)}function aE(t,e,n){const r={...Xk(),[e]:n};return new Cs("auth","Firebase",r).create(e,{appName:t.name})}function Jn(t){return aE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function df(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return oE.create(t,...e)}function ue(t,e,...n){if(!t)throw df(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fa(e),new Error(e)}function sr(t,e){t||Kn(e)}/**
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
 */function lh(){return typeof self<"u"&&self.location?.href||""}function e1(){return $g()==="http:"||$g()==="https:"}function $g(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function t1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e1()||Yv()||"connection"in navigator)?navigator.onLine:!0}function n1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Go{constructor(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=AP()||SP()}get(){return t1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pf(t,e){sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const r1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const s1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],i1=new Go(3e4,6e4);function Gr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Qr(t,e,n,r,s={}){return lE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=zo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return RP()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ai(t.emulatorConfig.host)&&(u.credentials="include"),cE.fetch()(await uE(t,t.config.apiHost,n,a),u)})}async function lE(t,e,n){t._canInitEmulator=!1;const r={...r1,...e};try{const s=new a1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ca(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ca(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ca(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ca(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw aE(t,h,u);gn(t,h)}}catch(s){if(s instanceof yn)throw s;gn(t,"network-request-failed",{message:String(s)})}}async function Qo(t,e,n,r,s={}){const i=await Qr(t,e,n,r,s);return"mfaPendingCredential"in i&&gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function uE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?pf(t.config,s):`${t.config.apiScheme}://${s}`;return s1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function o1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class a1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),i1.get())})}}function Ca(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Sn(t,e,r);return s.customData._tokenResponse=n,s}function jg(t){return t!==void 0&&t.enterprise!==void 0}class c1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return o1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function l1(t,e){return Qr(t,"GET","/v2/recaptchaConfig",Gr(t,e))}/**
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
 */async function u1(t,e){return Qr(t,"POST","/v1/accounts:delete",e)}async function pc(t,e){return Qr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function h1(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=gf(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:go(mu(s.auth_time)),issuedAtTime:go(mu(s.iat)),expirationTime:go(mu(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function mu(t){return Number(t)*1e3}function gf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fa("JWT malformed, contained fewer than 3 sections"),null;try{const s=qv(n);return s?JSON.parse(s):(Fa("Failed to decode base64 JWT payload"),null)}catch(s){return Fa("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Bg(t){const e=gf(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function No(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&f1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function f1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class d1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class uh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=go(this.lastLoginAt),this.creationTime=go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gc(t){const e=t.auth,n=await t.getIdToken(),r=await No(t,pc(e,{idToken:n}));ue(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?hE(s.providerUserInfo):[],o=g1(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new uh(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function p1(t){const e=Je(t);await gc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function g1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function m1(t,e){const n=await lE(t,{},async()=>{const r=zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await uE(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Ai(t.emulatorConfig.host)&&(l.credentials="include"),cE.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _1(t,e){return Qr(t,"POST","/v2/accounts:revokeToken",Gr(t,e))}/**
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
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=Bg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await m1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ni;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
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
 */function yr(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new d1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new uh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await No(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return h1(this,e)}reload(){return p1(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(Jn(this.auth));const e=await this.getIdToken();return await No(this,u1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:m,providerData:E,stsTokenManager:A}=n;ue(d&&A,e,"internal-error");const O=ni.fromJSON(this.name,A);ue(typeof d=="string",e,"internal-error"),yr(r,e.name),yr(s,e.name),ue(typeof p=="boolean",e,"internal-error"),ue(typeof m=="boolean",e,"internal-error"),yr(i,e.name),yr(o,e.name),yr(a,e.name),yr(l,e.name),yr(u,e.name),yr(h,e.name);const V=new an({uid:d,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:O,createdAt:u,lastLoginAt:h});return E&&Array.isArray(E)&&(V.providerData=E.map(N=>({...N}))),l&&(V._redirectEventId=l),V}static async _fromIdTokenResponse(e,n,r=!1){const s=new ni;s.updateFromServerResponse(n);const i=new an({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?hE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new ni;a.updateFromIdToken(r);const l=new an({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new uh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
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
 */const Hg=new Map;function Gn(t){sr(t instanceof Function,"Expected a class definition");let e=Hg.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hg.set(t,e),e)}/**
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
 */class fE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fE.type="NONE";const qg=fE;/**
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
 */function Ua(t,e,n){return`firebase:${t}:${e}:${n}`}class ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ua(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ua("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pc(this.auth,{idToken:e}).catch(()=>{});return n?an._fromGetAccountInfoResponse(this.auth,n,e):null}return an._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ri(Gn(qg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Gn(qg);const o=Ua(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const p=await pc(e,{idToken:h}).catch(()=>{});if(!p)break;d=await an._fromGetAccountInfoResponse(e,p,h)}else d=an._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ri(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ri(i,e,r))}}/**
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
 */function Wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yE(e))return"Blackberry";if(vE(e))return"Webos";if(pE(e))return"Safari";if((e.includes("chrome/")||gE(e))&&!e.includes("edge/"))return"Chrome";if(_E(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function dE(t=Ct()){return/firefox\//i.test(t)}function pE(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gE(t=Ct()){return/crios\//i.test(t)}function mE(t=Ct()){return/iemobile/i.test(t)}function _E(t=Ct()){return/android/i.test(t)}function yE(t=Ct()){return/blackberry/i.test(t)}function vE(t=Ct()){return/webos/i.test(t)}function mf(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function y1(t=Ct()){return mf(t)&&!!window.navigator?.standalone}function v1(){return CP()&&document.documentMode===10}function EE(t=Ct()){return mf(t)||_E(t)||vE(t)||yE(t)||/windows phone/i.test(t)||mE(t)}/**
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
 */function wE(t,e=[]){let n;switch(t){case"Browser":n=Wg(Ct());break;case"Worker":n=`${Wg(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${r}`}/**
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
 */class E1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function w1(t,e={}){return Qr(t,"GET","/v2/passwordPolicy",Gr(t,e))}/**
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
 */const T1=6;class I1{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??T1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class A1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zg(this),this.idTokenSubscription=new zg(this),this.beforeStateQueue=new E1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pc(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Jt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gc(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(Jn(this));const n=e?Je(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(Jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(Jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await w1(this),n=new I1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _1(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Zk(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ps(t){return Je(t)}class zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=MP(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function b1(t){tl=t}function TE(t){return tl.loadJS(t)}function R1(){return tl.recaptchaEnterpriseScript}function S1(){return tl.gapiScript}function C1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class P1{constructor(){this.enterprise=new k1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class k1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const O1="recaptcha-enterprise",IE="NO_RECAPTCHA";class N1{constructor(e){this.type=O1,this.auth=Ps(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{l1(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new c1(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;jg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(IE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new P1().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&jg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=R1();l.length!==0&&(l+=a),TE(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Kg(t,e,n,r=!1,s=!1){const i=new N1(t);let o;if(s)o=IE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function hh(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Kg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function D1(t,e){const n=Ko(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ws(i,e??{}))return s;gn(s,"already-initialized")}return n.initialize({options:e})}function V1(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Gn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function M1(t,e,n){const r=Ps(t);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=AE(e),{host:o,port:a}=x1(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue(ws(u,r.config.emulator)&&ws(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Ai(o)?(Gv(`${i}//${o}${l}`),Qv("Auth",!0)):L1()}function AE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function x1(t){const e=AE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gg(o)}}}function Gg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function L1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _f{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}async function F1(t,e){return Qr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function U1(t,e){return Qo(t,"POST","/v1/accounts:signInWithPassword",Gr(t,e))}/**
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
 */async function $1(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}async function j1(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}/**
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
 */class Do extends _f{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Do(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Do(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hh(e,n,"signInWithPassword",U1);case"emailLink":return $1(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hh(e,r,"signUpPassword",F1);case"emailLink":return j1(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function si(t,e){return Qo(t,"POST","/v1/accounts:signInWithIdp",Gr(t,e))}/**
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
 */const B1="http://localhost";class Ts extends _f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return si(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,si(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,si(e,n)}buildRequest(){const e={requestUri:B1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zo(n)}return e}}/**
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
 */function H1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function q1(t){const e=Xi(Zi(t)).link,n=e?Xi(Zi(e)).deep_link_id:null,r=Xi(Zi(t)).deep_link_id;return(r?Xi(Zi(r)).link:null)||r||n||e||t}class yf{constructor(e){const n=Xi(Zi(e)),r=n.apiKey??null,s=n.oobCode??null,i=H1(n.mode??null);ue(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=q1(e);try{return new yf(n)}catch{return null}}}/**
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
 */class Ri{constructor(){this.providerId=Ri.PROVIDER_ID}static credential(e,n){return Do._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=yf.parseLink(n);return ue(r,"argument-error"),Do._fromEmailAndCode(e,r.code,r.tenantId)}}Ri.PROVIDER_ID="password";Ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yo extends bE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class br extends Yo{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.FACEBOOK_SIGN_IN_METHOD="facebook.com";br.PROVIDER_ID="facebook.com";/**
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
 */class Rr extends Yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ts._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.GOOGLE_SIGN_IN_METHOD="google.com";Rr.PROVIDER_ID="google.com";/**
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
 */class Sr extends Yo{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.GITHUB_SIGN_IN_METHOD="github.com";Sr.PROVIDER_ID="github.com";/**
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
 */class Cr extends Yo{constructor(){super("twitter.com")}static credential(e,n){return Ts._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
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
 */async function W1(t,e){return Qo(t,"POST","/v1/accounts:signUp",Gr(t,e))}/**
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
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await an._fromIdTokenResponse(e,r,s),o=Qg(r);return new Is({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qg(r);return new Is({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mc extends yn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,mc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new mc(e,n,r,s)}}function RE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mc._fromErrorAndOperation(t,i,e,r):i})}async function z1(t,e,n=!1){const r=await No(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Is._forOperation(t,"link",r)}/**
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
 */async function K1(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(Jn(r));const s="reauthenticate";try{const i=await No(t,RE(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=gf(i.idToken);ue(o,r,"internal-error");const{sub:a}=o;return ue(t.uid===a,r,"user-mismatch"),Is._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&gn(r,"user-mismatch"),i}}/**
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
 */async function SE(t,e,n=!1){if(Jt(t.app))return Promise.reject(Jn(t));const r="signIn",s=await RE(t,r,e),i=await Is._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function G1(t,e){return SE(Ps(t),e)}/**
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
 */async function CE(t){const e=Ps(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yL(t,e,n){if(Jt(t.app))return Promise.reject(Jn(t));const r=Ps(t),o=await hh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",W1).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&CE(t),l}),a=await Is._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function vL(t,e,n){return Jt(t.app)?Promise.reject(Jn(t)):G1(Je(t),Ri.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&CE(t),r})}/**
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
 */function Q1(t,e){return Je(t).setPersistence(e)}function Y1(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function J1(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function EL(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function wL(t){return Je(t).signOut()}const _c="__sak";/**
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
 */class PE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_c,"1"),this.storage.removeItem(_c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const X1=1e3,Z1=10;class kE extends PE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=EE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);v1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Z1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},X1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kE.type="LOCAL";const OE=kE;/**
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
 */class NE extends PE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}NE.type="SESSION";const DE=NE;/**
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
 */function eO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await eO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nl.receivers=[];/**
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
 */function vf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=vf("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function nO(t){Cn().location.href=t}/**
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
 */function VE(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function rO(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sO(){return navigator?.serviceWorker?.controller||null}function iO(){return VE()?self:null}/**
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
 */const ME="firebaseLocalStorageDb",oO=1,yc="firebaseLocalStorage",xE="fbase_key";class Jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rl(t,e){return t.transaction([yc],e?"readwrite":"readonly").objectStore(yc)}function aO(){const t=indexedDB.deleteDatabase(ME);return new Jo(t).toPromise()}function fh(){const t=indexedDB.open(ME,oO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yc,{keyPath:xE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yc)?e(r):(r.close(),await aO(),e(await fh()))})})}async function Yg(t,e,n){const r=rl(t,!0).put({[xE]:e,value:n});return new Jo(r).toPromise()}async function cO(t,e){const n=rl(t,!1).get(e),r=await new Jo(n).toPromise();return r===void 0?null:r.value}function Jg(t,e){const n=rl(t,!0).delete(e);return new Jo(n).toPromise()}const lO=800,uO=3;class LE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return VE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nl._getInstance(iO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await rO(),!this.activeServiceWorker)return;this.sender=new tO(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fh();return await Yg(e,_c,"1"),await Jg(e,_c),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rl(s,!1).getAll();return new Jo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}LE.type="LOCAL";const hO=LE;new Go(3e4,6e4);/**
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
 */function fO(t,e){return e?Gn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ef extends _f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dO(t){return SE(t.auth,new Ef(t),t.bypassAuthState)}function pO(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),K1(n,new Ef(t),t.bypassAuthState)}async function gO(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),z1(n,new Ef(t),t.bypassAuthState)}/**
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
 */class FE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dO;case"linkViaPopup":case"linkViaRedirect":return gO;case"reauthViaPopup":case"reauthViaRedirect":return pO;default:gn(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mO=new Go(2e3,1e4);class Ks extends FE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ks.currentPopupAction&&Ks.currentPopupAction.cancel(),Ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=vf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mO.get())};e()}}Ks.currentPopupAction=null;/**
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
 */const _O="pendingRedirect",$a=new Map;class yO extends FE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$a.get(this.auth._key());if(!e){try{const r=await vO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$a.set(this.auth._key(),e)}return this.bypassAuthState||$a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vO(t,e){const n=TO(e),r=wO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function EO(t,e){$a.set(t._key(),e)}function wO(t){return Gn(t._redirectPersistence)}function TO(t){return Ua(_O,t.config.apiKey,t.name)}async function IO(t,e,n=!1){if(Jt(t.app))return Promise.reject(Jn(t));const r=Ps(t),s=fO(r,e),o=await new yO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const AO=600*1e3;class bO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!UE(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Sn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xg(e))}saveEventToCache(e){this.cachedEventUids.add(Xg(e)),this.lastProcessedEventTime=Date.now()}}function Xg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function UE({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function RO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return UE(t);default:return!1}}/**
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
 */async function SO(t,e={}){return Qr(t,"GET","/v1/projects",e)}/**
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
 */const CO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PO=/^https?/;async function kO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SO(t);for(const n of e)try{if(OO(n))return}catch{}gn(t,"unauthorized-domain")}function OO(t){const e=lh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PO.test(n))return!1;if(CO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const NO=new Go(3e4,6e4);function Zg(){const t=Cn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DO(t){return new Promise((e,n)=>{function r(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),n(Sn(t,"network-request-failed"))},timeout:NO.get()})}if(Cn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Cn().gapi?.load)r();else{const s=C1("iframefcb");return Cn()[s]=()=>{gapi.load?r():n(Sn(t,"network-request-failed"))},TE(`${S1()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw ja=null,e})}let ja=null;function VO(t){return ja=ja||DO(t),ja}/**
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
 */const MO=new Go(5e3,15e3),xO="__/auth/iframe",LO="emulator/auth/iframe",FO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $O(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pf(e,LO):`https://${t.config.authDomain}/${xO}`,r={apiKey:e.apiKey,appName:t.name,v:bi},s=UO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zo(r).slice(1)}`}async function jO(t){const e=await VO(t),n=Cn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:$O(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),a=Cn().setTimeout(()=>{i(o)},MO.get());function l(){Cn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const BO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HO=500,qO=600,WO="_blank",zO="http://localhost";class em{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KO(t,e,n,r=HO,s=qO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...BO,width:r.toString(),height:s.toString(),top:i,left:o},u=Ct().toLowerCase();n&&(a=gE(u)?WO:n),dE(u)&&(e=e||zO,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[m,E])=>`${p}${m}=${E},`,"");if(y1(u)&&a!=="_self")return GO(e||"",a),new em(null);const d=window.open(e||"",a,h);ue(d,t,"popup-blocked");try{d.focus()}catch{}return new em(d)}function GO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QO="__/auth/handler",YO="emulator/auth/handler",JO=encodeURIComponent("fac");async function tm(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bi,eventId:s};if(e instanceof bE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Yo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${JO}=${encodeURIComponent(l)}`:"";return`${XO(t)}?${zo(a).slice(1)}${u}`}function XO({config:t}){return t.emulator?pf(t,YO):`https://${t.authDomain}/${QO}`}/**
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
 */const _u="webStorageSupport";class ZO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=DE,this._completeRedirectFn=IO,this._overrideRedirectResult=EO}async _openPopup(e,n,r,s){sr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await tm(e,n,r,lh(),s);return KO(e,i,vf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await tm(e,n,r,lh(),s);return nO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(sr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jO(e),r=new bO(e);return n.register("authEvent",s=>(ue(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_u,{type:_u},s=>{const i=s?.[0]?.[_u];i!==void 0&&n(!!i),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return EE()||pE()||mf()}}const eN=ZO;var nm="@firebase/auth",rm="1.11.0";/**
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
 */class tN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rN(t){Vn(new pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wE(t)},u=new A1(r,s,i,l);return V1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new pn("auth-internal",e=>{const n=Ps(e.getProvider("auth").getImmediate());return(r=>new tN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(nm,rm,nN(t)),tn(nm,rm,"esm2020")}/**
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
 */const sN=300,iN=Kv("authIdTokenMaxAge")||sN;let sm=null;const oN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iN)return;const s=n?.token;sm!==s&&(sm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function aN(t=ff()){const e=Ko(t,"auth");if(e.isInitialized())return e.getImmediate();const n=D1(t,{popupRedirectResolver:eN,persistence:[hO,OE,DE]}),r=Kv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=oN(i.toString());J1(n,o,()=>o(n.currentUser)),Y1(n,a=>o(a))}}const s=Wv("auth");return s&&M1(n,`http://${s}`),n}function cN(){return document.getElementsByTagName("head")?.[0]??document}b1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rN("Browser");var im=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mr,$E;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function _(){}_.prototype=v.prototype,b.F=v.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(I,C,S){for(var T=Array(arguments.length-2),le=2;le<arguments.length;le++)T[le-2]=arguments[le];return v.prototype[C].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,_){_||(_=0);const I=Array(16);if(typeof v=="string")for(var C=0;C<16;++C)I[C]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(C=0;C<16;++C)I[C]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=b.g[0],_=b.g[1],C=b.g[2];let S=b.g[3],T;T=v+(S^_&(C^S))+I[0]+3614090360&4294967295,v=_+(T<<7&4294967295|T>>>25),T=S+(C^v&(_^C))+I[1]+3905402710&4294967295,S=v+(T<<12&4294967295|T>>>20),T=C+(_^S&(v^_))+I[2]+606105819&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(v^C&(S^v))+I[3]+3250441966&4294967295,_=C+(T<<22&4294967295|T>>>10),T=v+(S^_&(C^S))+I[4]+4118548399&4294967295,v=_+(T<<7&4294967295|T>>>25),T=S+(C^v&(_^C))+I[5]+1200080426&4294967295,S=v+(T<<12&4294967295|T>>>20),T=C+(_^S&(v^_))+I[6]+2821735955&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(v^C&(S^v))+I[7]+4249261313&4294967295,_=C+(T<<22&4294967295|T>>>10),T=v+(S^_&(C^S))+I[8]+1770035416&4294967295,v=_+(T<<7&4294967295|T>>>25),T=S+(C^v&(_^C))+I[9]+2336552879&4294967295,S=v+(T<<12&4294967295|T>>>20),T=C+(_^S&(v^_))+I[10]+4294925233&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(v^C&(S^v))+I[11]+2304563134&4294967295,_=C+(T<<22&4294967295|T>>>10),T=v+(S^_&(C^S))+I[12]+1804603682&4294967295,v=_+(T<<7&4294967295|T>>>25),T=S+(C^v&(_^C))+I[13]+4254626195&4294967295,S=v+(T<<12&4294967295|T>>>20),T=C+(_^S&(v^_))+I[14]+2792965006&4294967295,C=S+(T<<17&4294967295|T>>>15),T=_+(v^C&(S^v))+I[15]+1236535329&4294967295,_=C+(T<<22&4294967295|T>>>10),T=v+(C^S&(_^C))+I[1]+4129170786&4294967295,v=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(v^_))+I[6]+3225465664&4294967295,S=v+(T<<9&4294967295|T>>>23),T=C+(v^_&(S^v))+I[11]+643717713&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^v&(C^S))+I[0]+3921069994&4294967295,_=C+(T<<20&4294967295|T>>>12),T=v+(C^S&(_^C))+I[5]+3593408605&4294967295,v=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(v^_))+I[10]+38016083&4294967295,S=v+(T<<9&4294967295|T>>>23),T=C+(v^_&(S^v))+I[15]+3634488961&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^v&(C^S))+I[4]+3889429448&4294967295,_=C+(T<<20&4294967295|T>>>12),T=v+(C^S&(_^C))+I[9]+568446438&4294967295,v=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(v^_))+I[14]+3275163606&4294967295,S=v+(T<<9&4294967295|T>>>23),T=C+(v^_&(S^v))+I[3]+4107603335&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^v&(C^S))+I[8]+1163531501&4294967295,_=C+(T<<20&4294967295|T>>>12),T=v+(C^S&(_^C))+I[13]+2850285829&4294967295,v=_+(T<<5&4294967295|T>>>27),T=S+(_^C&(v^_))+I[2]+4243563512&4294967295,S=v+(T<<9&4294967295|T>>>23),T=C+(v^_&(S^v))+I[7]+1735328473&4294967295,C=S+(T<<14&4294967295|T>>>18),T=_+(S^v&(C^S))+I[12]+2368359562&4294967295,_=C+(T<<20&4294967295|T>>>12),T=v+(_^C^S)+I[5]+4294588738&4294967295,v=_+(T<<4&4294967295|T>>>28),T=S+(v^_^C)+I[8]+2272392833&4294967295,S=v+(T<<11&4294967295|T>>>21),T=C+(S^v^_)+I[11]+1839030562&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^v)+I[14]+4259657740&4294967295,_=C+(T<<23&4294967295|T>>>9),T=v+(_^C^S)+I[1]+2763975236&4294967295,v=_+(T<<4&4294967295|T>>>28),T=S+(v^_^C)+I[4]+1272893353&4294967295,S=v+(T<<11&4294967295|T>>>21),T=C+(S^v^_)+I[7]+4139469664&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^v)+I[10]+3200236656&4294967295,_=C+(T<<23&4294967295|T>>>9),T=v+(_^C^S)+I[13]+681279174&4294967295,v=_+(T<<4&4294967295|T>>>28),T=S+(v^_^C)+I[0]+3936430074&4294967295,S=v+(T<<11&4294967295|T>>>21),T=C+(S^v^_)+I[3]+3572445317&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^v)+I[6]+76029189&4294967295,_=C+(T<<23&4294967295|T>>>9),T=v+(_^C^S)+I[9]+3654602809&4294967295,v=_+(T<<4&4294967295|T>>>28),T=S+(v^_^C)+I[12]+3873151461&4294967295,S=v+(T<<11&4294967295|T>>>21),T=C+(S^v^_)+I[15]+530742520&4294967295,C=S+(T<<16&4294967295|T>>>16),T=_+(C^S^v)+I[2]+3299628645&4294967295,_=C+(T<<23&4294967295|T>>>9),T=v+(C^(_|~S))+I[0]+4096336452&4294967295,v=_+(T<<6&4294967295|T>>>26),T=S+(_^(v|~C))+I[7]+1126891415&4294967295,S=v+(T<<10&4294967295|T>>>22),T=C+(v^(S|~_))+I[14]+2878612391&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~v))+I[5]+4237533241&4294967295,_=C+(T<<21&4294967295|T>>>11),T=v+(C^(_|~S))+I[12]+1700485571&4294967295,v=_+(T<<6&4294967295|T>>>26),T=S+(_^(v|~C))+I[3]+2399980690&4294967295,S=v+(T<<10&4294967295|T>>>22),T=C+(v^(S|~_))+I[10]+4293915773&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~v))+I[1]+2240044497&4294967295,_=C+(T<<21&4294967295|T>>>11),T=v+(C^(_|~S))+I[8]+1873313359&4294967295,v=_+(T<<6&4294967295|T>>>26),T=S+(_^(v|~C))+I[15]+4264355552&4294967295,S=v+(T<<10&4294967295|T>>>22),T=C+(v^(S|~_))+I[6]+2734768916&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~v))+I[13]+1309151649&4294967295,_=C+(T<<21&4294967295|T>>>11),T=v+(C^(_|~S))+I[4]+4149444226&4294967295,v=_+(T<<6&4294967295|T>>>26),T=S+(_^(v|~C))+I[11]+3174756917&4294967295,S=v+(T<<10&4294967295|T>>>22),T=C+(v^(S|~_))+I[2]+718787259&4294967295,C=S+(T<<15&4294967295|T>>>17),T=_+(S^(C|~v))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+S&4294967295}r.prototype.v=function(b,v){v===void 0&&(v=b.length);const _=v-this.blockSize,I=this.C;let C=this.h,S=0;for(;S<v;){if(C==0)for(;S<=_;)s(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<v;)if(I[C++]=b.charCodeAt(S++),C==this.blockSize){s(this,I),C=0;break}}else for(;S<v;)if(I[C++]=b[S++],C==this.blockSize){s(this,I),C=0;break}}this.h=C,this.o+=v},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;v=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=v&255,v/=256;for(this.v(b),b=Array(16),v=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)b[v++]=this.g[_]>>>I&255;return b};function i(b,v){var _=a;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=v(b)}function o(b,v){this.h=v;const _=[];let I=!0;for(let C=b.length-1;C>=0;C--){const S=b[C]|0;I&&S==v||(_[C]=S,I=!1)}this.g=_}var a={};function l(b){return-128<=b&&b<128?i(b,function(v){return new o([v|0],v<0?-1:0)}):new o([b|0],b<0?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(b<0)return O(u(-b));const v=[];let _=1;for(let I=0;b>=_;I++)v[I]=b/_|0,_*=4294967296;return new o(v,0)}function h(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return O(h(b.substring(1),v));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(v,8));let I=d;for(let S=0;S<b.length;S+=8){var C=Math.min(8,b.length-S);const T=parseInt(b.substring(S,S+C),v);C<8?(C=u(Math.pow(v,C)),I=I.j(C).add(u(T))):(I=I.j(_),I=I.add(u(T)))}return I}var d=l(0),p=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-O(this).m();let b=0,v=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);b+=(I>=0?I:4294967296+I)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(E(this))return"0";if(A(this))return"-"+O(this).toString(b);const v=u(Math.pow(b,6));var _=this;let I="";for(;;){const C=k(_,v).g;_=V(_,C.j(v));let S=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=C,E(_))return S+I;for(;S.length<6;)S="0"+S;I=S+I}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function E(b){if(b.h!=0)return!1;for(let v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function A(b){return b.h==-1}t.l=function(b){return b=V(this,b),A(b)?-1:E(b)?0:1};function O(b){const v=b.g.length,_=[];for(let I=0;I<v;I++)_[I]=~b.g[I];return new o(_,~b.h).add(p)}t.abs=function(){return A(this)?O(this):this},t.add=function(b){const v=Math.max(this.g.length,b.g.length),_=[];let I=0;for(let C=0;C<=v;C++){let S=I+(this.i(C)&65535)+(b.i(C)&65535),T=(S>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);I=T>>>16,S&=65535,T&=65535,_[C]=T<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function V(b,v){return b.add(O(v))}t.j=function(b){if(E(this)||E(b))return d;if(A(this))return A(b)?O(this).j(O(b)):O(O(this).j(b));if(A(b))return O(this.j(O(b)));if(this.l(m)<0&&b.l(m)<0)return u(this.m()*b.m());const v=this.g.length+b.g.length,_=[];for(var I=0;I<2*v;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let C=0;C<b.g.length;C++){const S=this.i(I)>>>16,T=this.i(I)&65535,le=b.i(C)>>>16,me=b.i(C)&65535;_[2*I+2*C]+=T*me,N(_,2*I+2*C),_[2*I+2*C+1]+=S*me,N(_,2*I+2*C+1),_[2*I+2*C+1]+=T*le,N(_,2*I+2*C+1),_[2*I+2*C+2]+=S*le,N(_,2*I+2*C+2)}for(b=0;b<v;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=v;b<2*v;b++)_[b]=0;return new o(_,0)};function N(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function w(b,v){this.g=b,this.h=v}function k(b,v){if(E(v))throw Error("division by zero");if(E(b))return new w(d,d);if(A(b))return v=k(O(b),v),new w(O(v.g),O(v.h));if(A(v))return v=k(b,O(v)),new w(O(v.g),v.h);if(b.g.length>30){if(A(b)||A(v))throw Error("slowDivide_ only works with positive integers.");for(var _=p,I=v;I.l(b)<=0;)_=D(_),I=D(I);var C=F(_,1),S=F(I,1);for(I=F(I,2),_=F(_,2);!E(I);){var T=S.add(I);T.l(b)<=0&&(C=C.add(_),S=T),I=F(I,1),_=F(_,1)}return v=V(b,C.j(v)),new w(C,v)}for(C=d;b.l(v)>=0;){for(_=Math.max(1,Math.floor(b.m()/v.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),S=u(_),T=S.j(v);A(T)||T.l(b)>0;)_-=I,S=u(_),T=S.j(v);E(S)&&(S=p),C=C.add(S),b=V(b,T)}return new w(C,b)}t.B=function(b){return k(this,b).h},t.and=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<v;I++)_[I]=this.i(I)&b.i(I);return new o(_,this.h&b.h)},t.or=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<v;I++)_[I]=this.i(I)|b.i(I);return new o(_,this.h|b.h)},t.xor=function(b){const v=Math.max(this.g.length,b.g.length),_=[];for(let I=0;I<v;I++)_[I]=this.i(I)^b.i(I);return new o(_,this.h^b.h)};function D(b){const v=b.g.length+1,_=[];for(let I=0;I<v;I++)_[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(_,b.h)}function F(b,v){const _=v>>5;v%=32;const I=b.g.length-_,C=[];for(let S=0;S<I;S++)C[S]=v>0?b.i(S+_)>>>v|b.i(S+_+1)<<32-v:b.i(S+_);return new o(C,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,$E=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Mr=o}).apply(typeof im<"u"?im:typeof self<"u"?self:typeof window<"u"?window:{});var Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jE,eo,BE,Ba,dh,HE,qE,WE;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pa=="object"&&Pa];for(var f=0;f<c.length;++f){var g=c[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var g=r;c=c.split(".");for(var y=0;y<c.length-1;y++){var M=c[y];if(!(M in g))break e;g=g[M]}c=c[c.length-1],y=g[c],f=f(y),f!=y&&f!=null&&e(g,c,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(f){var g=[],y;for(y in f)Object.prototype.hasOwnProperty.call(f,y)&&g.push([y,f[y]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function l(c,f,g){return c.call.apply(c.bind,arguments)}function u(c,f,g){return u=l,u.apply(null,arguments)}function h(c,f){var g=Array.prototype.slice.call(arguments,1);return function(){var y=g.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function d(c,f){function g(){}g.prototype=f.prototype,c.Z=f.prototype,c.prototype=new g,c.prototype.constructor=c,c.Ob=function(y,M,L){for(var Q=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)Q[_e-2]=arguments[_e];return f.prototype[M].apply(y,Q)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function m(c){const f=c.length;if(f>0){const g=Array(f);for(let y=0;y<f;y++)g[y]=c[y];return g}return[]}function E(c,f){for(let y=1;y<arguments.length;y++){const M=arguments[y];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=c.length||0;const L=M.length||0;c.length=g+L;for(let Q=0;Q<L;Q++)c[g+Q]=M[Q]}else c.push(M)}}class A{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function O(c){o.setTimeout(()=>{throw c},0)}function V(){var c=b;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class N{constructor(){this.h=this.g=null}add(f,g){const y=w.get();y.set(f,g),this.h?this.h.next=y:this.g=y,this.h=y}}var w=new A(()=>new k,c=>c.reset());class k{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let D,F=!1,b=new N,v=()=>{const c=Promise.resolve(void 0);D=()=>{c.then(_)}};function _(){for(var c;c=V();){try{c.h.call(c.g)}catch(g){O(g)}var f=w;f.j(c),f.h<100&&(f.h++,c.next=f.g,f.g=c)}F=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};o.addEventListener("test",g,f),o.removeEventListener("test",g,f)}catch{}return c})();function T(c){return/^[\s\xa0]*$/.test(c)}function le(c,f){C.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,f)}d(le,C),le.prototype.init=function(c,f){const g=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget,f||(g=="mouseover"?f=c.fromElement:g=="mouseout"&&(f=c.toElement)),this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&le.Z.h.call(this)},le.prototype.h=function(){le.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var me="closure_listenable_"+(Math.random()*1e6|0),ee=0;function ie(c,f,g,y,M){this.listener=c,this.proxy=null,this.src=f,this.type=g,this.capture=!!y,this.ha=M,this.key=++ee,this.da=this.fa=!1}function ne(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ne(c,f,g){for(const y in c)f.call(g,c[y],y,c)}function vn(c,f){for(const g in c)f.call(void 0,c[g],g,c)}function jt(c){const f={};for(const g in c)f[g]=c[g];return f}const lt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ln(c,f){let g,y;for(let M=1;M<arguments.length;M++){y=arguments[M];for(g in y)c[g]=y[g];for(let L=0;L<lt.length;L++)g=lt[L],Object.prototype.hasOwnProperty.call(y,g)&&(c[g]=y[g])}}function rn(c){this.src=c,this.g={},this.h=0}rn.prototype.add=function(c,f,g,y,M){const L=c.toString();c=this.g[L],c||(c=this.g[L]=[],this.h++);const Q=yt(c,f,y,M);return Q>-1?(f=c[Q],g||(f.fa=!1)):(f=new ie(f,this.src,L,!!y,M),f.fa=g,c.push(f)),f};function lr(c,f){const g=f.type;if(g in c.g){var y=c.g[g],M=Array.prototype.indexOf.call(y,f,void 0),L;(L=M>=0)&&Array.prototype.splice.call(y,M,1),L&&(ne(f),c.g[g].length==0&&(delete c.g[g],c.h--))}}function yt(c,f,g,y){for(let M=0;M<c.length;++M){const L=c[M];if(!L.da&&L.listener==f&&L.capture==!!g&&L.ha==y)return M}return-1}var $="closure_lm_"+(Math.random()*1e6|0),Z={};function Y(c,f,g,y,M){if(Array.isArray(f)){for(let L=0;L<f.length;L++)Y(c,f[L],g,y,M);return null}return g=q(g),c&&c[me]?c.J(f,g,a(y)?!!y.capture:!1,M):se(c,f,g,!1,y,M)}function se(c,f,g,y,M,L){if(!f)throw Error("Invalid event type");const Q=a(M)?!!M.capture:!!M;let _e=H(c);if(_e||(c[$]=_e=new rn(c)),g=_e.add(f,g,y,Q,L),g.proxy)return g;if(y=Ae(),g.proxy=y,y.src=c,y.listener=g,c.addEventListener)S||(M=Q),M===void 0&&(M=!1),c.addEventListener(f.toString(),y,M);else if(c.attachEvent)c.attachEvent(P(f.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Ae(){function c(g){return f.call(c.src,c.listener,g)}const f=x;return c}function De(c,f,g,y,M){if(Array.isArray(f))for(var L=0;L<f.length;L++)De(c,f[L],g,y,M);else y=a(y)?!!y.capture:!!y,g=q(g),c&&c[me]?(c=c.i,L=String(f).toString(),L in c.g&&(f=c.g[L],g=yt(f,g,y,M),g>-1&&(ne(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete c.g[L],c.h--)))):c&&(c=H(c))&&(f=c.g[f.toString()],c=-1,f&&(c=yt(f,g,y,M)),(g=c>-1?f[c]:null)&&R(g))}function R(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[me])lr(f.i,c);else{var g=c.type,y=c.proxy;f.removeEventListener?f.removeEventListener(g,y,c.capture):f.detachEvent?f.detachEvent(P(g),y):f.addListener&&f.removeListener&&f.removeListener(y),(g=H(f))?(lr(g,c),g.h==0&&(g.src=null,f[$]=null)):ne(c)}}}function P(c){return c in Z?Z[c]:Z[c]="on"+c}function x(c,f){if(c.da)c=!0;else{f=new le(f,this);const g=c.listener,y=c.ha||c.src;c.fa&&R(c),c=g.call(y,f)}return c}function H(c){return c=c[$],c instanceof rn?c:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function q(c){return typeof c=="function"?c:(c[U]||(c[U]=function(f){return c.handleEvent(f)}),c[U])}function K(){I.call(this),this.i=new rn(this),this.M=this,this.G=null}d(K,I),K.prototype[me]=!0,K.prototype.removeEventListener=function(c,f,g,y){De(this,c,f,g,y)};function W(c,f){var g,y=c.G;if(y)for(g=[];y;y=y.G)g.push(y);if(c=c.M,y=f.type||f,typeof f=="string")f=new C(f,c);else if(f instanceof C)f.target=f.target||c;else{var M=f;f=new C(y,c),Ln(f,M)}M=!0;let L,Q;if(g)for(Q=g.length-1;Q>=0;Q--)L=f.g=g[Q],M=G(L,y,!0,f)&&M;if(L=f.g=c,M=G(L,y,!0,f)&&M,M=G(L,y,!1,f)&&M,g)for(Q=0;Q<g.length;Q++)L=f.g=g[Q],M=G(L,y,!1,f)&&M}K.prototype.N=function(){if(K.Z.N.call(this),this.i){var c=this.i;for(const f in c.g){const g=c.g[f];for(let y=0;y<g.length;y++)ne(g[y]);delete c.g[f],c.h--}}this.G=null},K.prototype.J=function(c,f,g,y){return this.i.add(String(c),f,!1,g,y)},K.prototype.K=function(c,f,g,y){return this.i.add(String(c),f,!0,g,y)};function G(c,f,g,y){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();let M=!0;for(let L=0;L<f.length;++L){const Q=f[L];if(Q&&!Q.da&&Q.capture==g){const _e=Q.listener,st=Q.ha||Q.src;Q.fa&&lr(c.i,Q),M=_e.call(st,y)!==!1&&M}}return M&&!y.defaultPrevented}function z(c,f){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(c,f||0)}function ce(c){c.g=z(()=>{c.g=null,c.i&&(c.i=!1,ce(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class J extends I{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:ce(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function re(c){I.call(this),this.h=c,this.g={}}d(re,I);var de=[];function ye(c){Ne(c.g,function(f,g){this.g.hasOwnProperty(g)&&R(f)},c),c.g={}}re.prototype.N=function(){re.Z.N.call(this),ye(this)},re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Se=o.JSON.stringify,be=o.JSON.parse,vt=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function nt(){}function Nt(){}var rt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Fn(){C.call(this,"d")}d(Fn,C);function Ds(){C.call(this,"c")}d(Ds,C);var Qe={},Bt=null;function Xr(){return Bt=Bt||new K}Qe.Ia="serverreachability";function Oi(c){C.call(this,Qe.Ia,c)}d(Oi,C);function Ni(c){const f=Xr();W(f,new Oi(f))}Qe.STAT_EVENT="statevent";function ld(c,f){C.call(this,Qe.STAT_EVENT,c),this.stat=f}d(ld,C);function Pt(c){const f=Xr();W(f,new ld(f,c))}Qe.Ja="timingevent";function ud(c,f){C.call(this,Qe.Ja,c),this.size=f}d(ud,C);function Di(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},f)}function Vi(){this.g=!0}Vi.prototype.ua=function(){this.g=!1};function UT(c,f,g,y,M,L){c.info(function(){if(c.g)if(L){var Q="",_e=L.split("&");for(let Ve=0;Ve<_e.length;Ve++){var st=_e[Ve].split("=");if(st.length>1){const at=st[0];st=st[1];const wn=at.split("_");Q=wn.length>=2&&wn[1]=="type"?Q+(at+"="+st+"&"):Q+(at+"=redacted&")}}}else Q=null;else Q=L;return"XMLHTTP REQ ("+y+") [attempt "+M+"]: "+f+`
`+g+`
`+Q})}function $T(c,f,g,y,M,L,Q){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+M+"]: "+f+`
`+g+`
`+L+" "+Q})}function Vs(c,f,g,y){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+BT(c,g)+(y?" "+y:"")})}function jT(c,f){c.info(function(){return"TIMEOUT: "+f})}Vi.prototype.info=function(){};function BT(c,f){if(!c.g)return f;if(!f)return null;try{const L=JSON.parse(f);if(L){for(c=0;c<L.length;c++)if(Array.isArray(L[c])){var g=L[c];if(!(g.length<2)){var y=g[1];if(Array.isArray(y)&&!(y.length<1)){var M=y[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Q=1;Q<y.length;Q++)y[Q]=""}}}}return Se(L)}catch{return f}}var ia={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},hd={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fd;function bl(){}d(bl,nt),bl.prototype.g=function(){return new XMLHttpRequest},fd=new bl;function Mi(c){return encodeURIComponent(String(c))}function HT(c){var f=1;c=c.split(":");const g=[];for(;f>0&&c.length;)g.push(c.shift()),f--;return c.length&&g.push(c.join(":")),g}function ur(c,f,g,y){this.j=c,this.i=f,this.l=g,this.S=y||1,this.V=new re(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dd}function dd(){this.i=null,this.g="",this.h=!1}var pd={},Rl={};function Sl(c,f,g){c.M=1,c.A=aa(En(f)),c.u=g,c.R=!0,gd(c,null)}function gd(c,f){c.F=Date.now(),oa(c),c.B=En(c.A);var g=c.B,y=c.S;Array.isArray(y)||(y=[String(y)]),Cd(g.i,"t",y),c.C=0,g=c.j.L,c.h=new dd,c.g=zd(c.j,g?f:null,!c.u),c.P>0&&(c.O=new J(u(c.Y,c,c.g),c.P)),f=c.V,g=c.g,y=c.ba;var M="readystatechange";Array.isArray(M)||(M&&(de[0]=M.toString()),M=de);for(let L=0;L<M.length;L++){const Q=Y(g,M[L],y||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=c.J?jt(c.J):{},c.u?(c.v||(c.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,f)):(c.v="GET",c.g.ea(c.B,c.v,null,f)),Ni(),UT(c.i,c.v,c.B,c.l,c.S,c.u)}ur.prototype.ba=function(c){c=c.target;const f=this.O;f&&dr(c)==3?f.j():this.Y(c)},ur.prototype.Y=function(c){try{if(c==this.g)e:{const _e=dr(this.g),st=this.g.ya(),Ve=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||Md(this.g)))){this.K||_e!=4||st==7||(st==8||Ve<=0?Ni(3):Ni(2)),Cl(this);var f=this.g.ca();this.X=f;var g=qT(this);if(this.o=f==200,$T(this.i,this.v,this.B,this.l,this.S,_e,f),this.o){if(this.U&&!this.L){t:{if(this.g){var y,M=this.g;if((y=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(y)){var L=y;break t}}L=null}if(c=L)Vs(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Pl(this,c);else{this.o=!1,this.m=3,Pt(12),Zr(this),xi(this);break e}}if(this.R){c=!0;let at;for(;!this.K&&this.C<g.length;)if(at=WT(this,g),at==Rl){_e==4&&(this.m=4,Pt(14),c=!1),Vs(this.i,this.l,null,"[Incomplete Response]");break}else if(at==pd){this.m=4,Pt(15),Vs(this.i,this.l,g,"[Invalid Chunk]"),c=!1;break}else Vs(this.i,this.l,at,null),Pl(this,at);if(md(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||g.length!=0||this.h.h||(this.m=1,Pt(16),c=!1),this.o=this.o&&c,!c)Vs(this.i,this.l,g,"[Invalid Chunked Response]"),Zr(this),xi(this);else if(g.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Ll(Q),Q.P=!0,Pt(11))}}else Vs(this.i,this.l,g,null),Pl(this,g);_e==4&&Zr(this),this.o&&!this.K&&(_e==4?Bd(this.j,this):(this.o=!1,oa(this)))}else iI(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,Pt(12)):(this.m=0,Pt(13)),Zr(this),xi(this)}}}catch{}finally{}};function qT(c){if(!md(c))return c.g.la();const f=Md(c.g);if(f==="")return"";let g="";const y=f.length,M=dr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Zr(c),xi(c),"";c.h.i=new o.TextDecoder}for(let L=0;L<y;L++)c.h.h=!0,g+=c.h.i.decode(f[L],{stream:!(M&&L==y-1)});return f.length=0,c.h.g+=g,c.C=0,c.h.g}function md(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function WT(c,f){var g=c.C,y=f.indexOf(`
`,g);return y==-1?Rl:(g=Number(f.substring(g,y)),isNaN(g)?pd:(y+=1,y+g>f.length?Rl:(f=f.slice(y,y+g),c.C=y+g,f)))}ur.prototype.cancel=function(){this.K=!0,Zr(this)};function oa(c){c.T=Date.now()+c.H,_d(c,c.H)}function _d(c,f){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Di(u(c.aa,c),f)}function Cl(c){c.D&&(o.clearTimeout(c.D),c.D=null)}ur.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(jT(this.i,this.B),this.M!=2&&(Ni(),Pt(17)),Zr(this),this.m=2,xi(this)):_d(this,this.T-c)};function xi(c){c.j.I==0||c.K||Bd(c.j,c)}function Zr(c){Cl(c);var f=c.O;f&&typeof f.dispose=="function"&&f.dispose(),c.O=null,ye(c.V),c.g&&(f=c.g,c.g=null,f.abort(),f.dispose())}function Pl(c,f){try{var g=c.j;if(g.I!=0&&(g.g==c||kl(g.h,c))){if(!c.L&&kl(g.h,c)&&g.I==3){try{var y=g.Ba.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var M=y;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<c.F)fa(g),ua(g);else break e;xl(g),Pt(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Di(u(g.Va,g),6e3));Ed(g.h)<=1&&g.ta&&(g.ta=void 0)}else ts(g,11)}else if((c.L||g.g==c)&&fa(g),!T(f))for(M=g.Ba.g.parse(f),f=0;f<M.length;f++){let Ve=M[f];const at=Ve[0];if(!(at<=g.K))if(g.K=at,Ve=Ve[1],g.I==2)if(Ve[0]=="c"){g.M=Ve[1],g.ba=Ve[2];const wn=Ve[3];wn!=null&&(g.ka=wn,g.j.info("VER="+g.ka));const ns=Ve[4];ns!=null&&(g.za=ns,g.j.info("SVER="+g.za));const pr=Ve[5];pr!=null&&typeof pr=="number"&&pr>0&&(y=1.5*pr,g.O=y,g.j.info("backChannelRequestTimeoutMs_="+y)),y=g;const gr=c.g;if(gr){const pa=gr.g?gr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pa){var L=y.h;L.g||pa.indexOf("spdy")==-1&&pa.indexOf("quic")==-1&&pa.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Ol(L,L.h),L.h=null))}if(y.G){const Fl=gr.g?gr.g.getResponseHeader("X-HTTP-Session-Id"):null;Fl&&(y.wa=Fl,Le(y.J,y.G,Fl))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-c.F,g.j.info("Handshake RTT: "+g.T+"ms")),y=g;var Q=c;if(y.na=Wd(y,y.L?y.ba:null,y.W),Q.L){wd(y.h,Q);var _e=Q,st=y.O;st&&(_e.H=st),_e.D&&(Cl(_e),oa(_e)),y.g=Q}else $d(y);g.i.length>0&&ha(g)}else Ve[0]!="stop"&&Ve[0]!="close"||ts(g,7);else g.I==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?ts(g,7):Ml(g):Ve[0]!="noop"&&g.l&&g.l.qa(Ve),g.A=0)}}Ni(4)}catch{}}var zT=class{constructor(c,f){this.g=c,this.map=f}};function yd(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function vd(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ed(c){return c.h?1:c.g?c.g.size:0}function kl(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function Ol(c,f){c.g?c.g.add(f):c.h=f}function wd(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}yd.prototype.cancel=function(){if(this.i=Td(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Td(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const g of c.g.values())f=f.concat(g.G);return f}return m(c.i)}var Id=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KT(c,f){if(c){c=c.split("&");for(let g=0;g<c.length;g++){const y=c[g].indexOf("=");let M,L=null;y>=0?(M=c[g].substring(0,y),L=c[g].substring(y+1)):M=c[g],f(M,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function hr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;c instanceof hr?(this.l=c.l,Li(this,c.j),this.o=c.o,this.g=c.g,Fi(this,c.u),this.h=c.h,Nl(this,Pd(c.i)),this.m=c.m):c&&(f=String(c).match(Id))?(this.l=!1,Li(this,f[1]||"",!0),this.o=Ui(f[2]||""),this.g=Ui(f[3]||"",!0),Fi(this,f[4]),this.h=Ui(f[5]||"",!0),Nl(this,f[6]||"",!0),this.m=Ui(f[7]||"")):(this.l=!1,this.i=new ji(null,this.l))}hr.prototype.toString=function(){const c=[];var f=this.j;f&&c.push($i(f,Ad,!0),":");var g=this.g;return(g||f=="file")&&(c.push("//"),(f=this.o)&&c.push($i(f,Ad,!0),"@"),c.push(Mi(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&c.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push($i(g,g.charAt(0)=="/"?YT:QT,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",$i(g,XT)),c.join("")},hr.prototype.resolve=function(c){const f=En(this);let g=!!c.j;g?Li(f,c.j):g=!!c.o,g?f.o=c.o:g=!!c.g,g?f.g=c.g:g=c.u!=null;var y=c.h;if(g)Fi(f,c.u);else if(g=!!c.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var M=f.h.lastIndexOf("/");M!=-1&&(y=f.h.slice(0,M+1)+y)}if(M=y,M==".."||M==".")y="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){y=M.lastIndexOf("/",0)==0,M=M.split("/");const L=[];for(let Q=0;Q<M.length;){const _e=M[Q++];_e=="."?y&&Q==M.length&&L.push(""):_e==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),y&&Q==M.length&&L.push("")):(L.push(_e),y=!0)}y=L.join("/")}else y=M}return g?f.h=y:g=c.i.toString()!=="",g?Nl(f,Pd(c.i)):g=!!c.m,g&&(f.m=c.m),f};function En(c){return new hr(c)}function Li(c,f,g){c.j=g?Ui(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Fi(c,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);c.u=f}else c.u=null}function Nl(c,f,g){f instanceof ji?(c.i=f,ZT(c.i,c.l)):(g||(f=$i(f,JT)),c.i=new ji(f,c.l))}function Le(c,f,g){c.i.set(f,g)}function aa(c){return Le(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Ui(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function $i(c,f,g){return typeof c=="string"?(c=encodeURI(c).replace(f,GT),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function GT(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ad=/[#\/\?@]/g,QT=/[#\?:]/g,YT=/[#\?]/g,JT=/[#\?@]/g,XT=/#/g;function ji(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function es(c){c.g||(c.g=new Map,c.h=0,c.i&&KT(c.i,function(f,g){c.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=ji.prototype,t.add=function(c,f){es(this),this.i=null,c=Ms(this,c);let g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(f),this.h+=1,this};function bd(c,f){es(c),f=Ms(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Rd(c,f){return es(c),f=Ms(c,f),c.g.has(f)}t.forEach=function(c,f){es(this),this.g.forEach(function(g,y){g.forEach(function(M){c.call(f,M,y,this)},this)},this)};function Sd(c,f){es(c);let g=[];if(typeof f=="string")Rd(c,f)&&(g=g.concat(c.g.get(Ms(c,f))));else for(c=Array.from(c.g.values()),f=0;f<c.length;f++)g=g.concat(c[f]);return g}t.set=function(c,f){return es(this),this.i=null,c=Ms(this,c),Rd(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=Sd(this,c),c.length>0?String(c[0]):f):f};function Cd(c,f,g){bd(c,f),g.length>0&&(c.i=null,c.g.set(Ms(c,f),m(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(let y=0;y<f.length;y++){var g=f[y];const M=Mi(g);g=Sd(this,g);for(let L=0;L<g.length;L++){let Q=M;g[L]!==""&&(Q+="="+Mi(g[L])),c.push(Q)}}return this.i=c.join("&")};function Pd(c){const f=new ji;return f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),f}function Ms(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function ZT(c,f){f&&!c.j&&(es(c),c.i=null,c.g.forEach(function(g,y){const M=y.toLowerCase();y!=M&&(bd(this,y),Cd(this,M,g))},c)),c.j=f}function eI(c,f){const g=new Vi;if(o.Image){const y=new Image;y.onload=h(fr,g,"TestLoadImage: loaded",!0,f,y),y.onerror=h(fr,g,"TestLoadImage: error",!1,f,y),y.onabort=h(fr,g,"TestLoadImage: abort",!1,f,y),y.ontimeout=h(fr,g,"TestLoadImage: timeout",!1,f,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else f(!1)}function tI(c,f){const g=new Vi,y=new AbortController,M=setTimeout(()=>{y.abort(),fr(g,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:y.signal}).then(L=>{clearTimeout(M),L.ok?fr(g,"TestPingServer: ok",!0,f):fr(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),fr(g,"TestPingServer: error",!1,f)})}function fr(c,f,g,y,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),y(g)}catch{}}function nI(){this.g=new vt}function Dl(c){this.i=c.Sb||null,this.h=c.ab||!1}d(Dl,nt),Dl.prototype.g=function(){return new ca(this.i,this.h)};function ca(c,f){K.call(this),this.H=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(ca,K),t=ca.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=f,this.readyState=1,Hi(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(f.body=c),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Hi(this)),this.g&&(this.readyState=3,Hi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;kd(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function kd(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Bi(this):Hi(this),this.readyState==3&&kd(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,Bi(this))},t.Na=function(c){this.g&&(this.response=c,Bi(this))},t.ga=function(){this.g&&Bi(this)};function Bi(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Hi(c)}t.setRequestHeader=function(c,f){this.A.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=f.next();return c.join(`\r
`)};function Hi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Od(c){let f="";return Ne(c,function(g,y){f+=y,f+=":",f+=g,f+=`\r
`}),f}function Vl(c,f,g){e:{for(y in g){var y=!1;break e}y=!0}y||(g=Od(g),typeof c=="string"?g!=null&&Mi(g):Le(c,f,g))}function qe(c){K.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(qe,K);var rI=/^https?$/i,sI=["POST","PUT"];t=qe.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,f,g,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fd.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(L){Nd(this,L);return}if(c=g||"",g=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var M in y)g.set(M,y[M]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())g.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),M=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(sI,f,void 0)>=0)||y||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,Q]of g)this.g.setRequestHeader(L,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(L){Nd(this,L)}};function Nd(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.o=5,Dd(c),la(c)}function Dd(c){c.A||(c.A=!0,W(c,"complete"),W(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,W(this,"complete"),W(this,"abort"),la(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),la(this,!0)),qe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Vd(this):this.Xa())},t.Xa=function(){Vd(this)};function Vd(c){if(c.h&&typeof i<"u"){if(c.v&&dr(c)==4)setTimeout(c.Ca.bind(c),0);else if(W(c,"readystatechange"),dr(c)==4){c.h=!1;try{const L=c.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var y;if(y=L===0){let Q=String(c.D).match(Id)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),y=!rI.test(Q?Q.toLowerCase():"")}g=y}if(g)W(c,"complete"),W(c,"success");else{c.o=6;try{var M=dr(c)>2?c.g.statusText:""}catch{M=""}c.l=M+" ["+c.ca()+"]",Dd(c)}}finally{la(c)}}}}function la(c,f){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const g=c.g;c.g=null,f||W(c,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function dr(c){return c.g?c.g.readyState:0}t.ca=function(){try{return dr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),be(f)}};function Md(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function iI(c){const f={};c=(c.g&&dr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(T(c[y]))continue;var g=HT(c[y]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=f[M]||[];f[M]=L,L.push(g)}vn(f,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qi(c,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||f}function xd(c){this.za=0,this.i=[],this.j=new Vi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qi("baseRetryDelayMs",5e3,c),this.Za=qi("retryDelaySeedMs",1e4,c),this.Ta=qi("forwardChannelMaxRetries",2,c),this.va=qi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new yd(c&&c.concurrentRequestLimit),this.Ba=new nI,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=xd.prototype,t.ka=8,t.I=1,t.connect=function(c,f,g,y){Pt(0),this.W=c,this.H=f||{},g&&y!==void 0&&(this.H.OSID=g,this.H.OAID=y),this.F=this.X,this.J=Wd(this,null,this.W),ha(this)};function Ml(c){if(Ld(c),c.I==3){var f=c.V++,g=En(c.J);if(Le(g,"SID",c.M),Le(g,"RID",f),Le(g,"TYPE","terminate"),Wi(c,g),f=new ur(c,c.j,f),f.M=2,f.A=aa(En(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=f.A,g=!0),g||(f.g=zd(f.j,null),f.g.ea(f.A)),f.F=Date.now(),oa(f)}qd(c)}function ua(c){c.g&&(Ll(c),c.g.cancel(),c.g=null)}function Ld(c){ua(c),c.v&&(o.clearTimeout(c.v),c.v=null),fa(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function ha(c){if(!vd(c.h)&&!c.m){c.m=!0;var f=c.Ea;D||v(),F||(D(),F=!0),b.add(f,c),c.D=0}}function oI(c,f){return Ed(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=f.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Di(u(c.Ea,c,f),Hd(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const M=new ur(this,this.j,c);let L=this.o;if(this.U&&(L?(L=jt(L),Ln(L,this.U)):L=this.U),this.u!==null||this.R||(M.J=L,L=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var y=this.i[g];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Ud(this,M,f),g=En(this.J),Le(g,"RID",c),Le(g,"CVER",22),this.G&&Le(g,"X-HTTP-Session-Id",this.G),Wi(this,g),L&&(this.R?f="headers="+Mi(Od(L))+"&"+f:this.u&&Vl(g,this.u,L)),Ol(this.h,M),this.Ra&&Le(g,"TYPE","init"),this.S?(Le(g,"$req",f),Le(g,"SID","null"),M.U=!0,Sl(M,g,null)):Sl(M,g,f),this.I=2}}else this.I==3&&(c?Fd(this,c):this.i.length==0||vd(this.h)||Fd(this))};function Fd(c,f){var g;f?g=f.l:g=c.V++;const y=En(c.J);Le(y,"SID",c.M),Le(y,"RID",g),Le(y,"AID",c.K),Wi(c,y),c.u&&c.o&&Vl(y,c.u,c.o),g=new ur(c,c.j,g,c.D+1),c.u===null&&(g.J=c.o),f&&(c.i=f.G.concat(c.i)),f=Ud(c,g,1e3),g.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Ol(c.h,g),Sl(g,y,f)}function Wi(c,f){c.H&&Ne(c.H,function(g,y){Le(f,y,g)}),c.l&&Ne({},function(g,y){Le(f,y,g)})}function Ud(c,f,g){g=Math.min(c.i.length,g);const y=c.l?u(c.l.Ka,c.l,c):null;e:{var M=c.i;let _e=-1;for(;;){const st=["count="+g];_e==-1?g>0?(_e=M[0].g,st.push("ofs="+_e)):_e=0:st.push("ofs="+_e);let Ve=!0;for(let at=0;at<g;at++){var L=M[at].g;const wn=M[at].map;if(L-=_e,L<0)_e=Math.max(0,M[at].g-100),Ve=!1;else try{L="req"+L+"_"||"";try{var Q=wn instanceof Map?wn:Object.entries(wn);for(const[ns,pr]of Q){let gr=pr;a(pr)&&(gr=Se(pr)),st.push(L+ns+"="+encodeURIComponent(gr))}}catch(ns){throw st.push(L+"type="+encodeURIComponent("_badmap")),ns}}catch{y&&y(wn)}}if(Ve){Q=st.join("&");break e}}Q=void 0}return c=c.i.splice(0,g),f.G=c,Q}function $d(c){if(!c.g&&!c.v){c.Y=1;var f=c.Da;D||v(),F||(D(),F=!0),b.add(f,c),c.A=0}}function xl(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Di(u(c.Da,c),Hd(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,jd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Di(u(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Pt(10),ua(this),jd(this))};function Ll(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function jd(c){c.g=new ur(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var f=En(c.na);Le(f,"RID","rpc"),Le(f,"SID",c.M),Le(f,"AID",c.K),Le(f,"CI",c.F?"0":"1"),!c.F&&c.ia&&Le(f,"TO",c.ia),Le(f,"TYPE","xmlhttp"),Wi(c,f),c.u&&c.o&&Vl(f,c.u,c.o),c.O&&(c.g.H=c.O);var g=c.g;c=c.ba,g.M=1,g.A=aa(En(f)),g.u=null,g.R=!0,gd(g,c)}t.Va=function(){this.C!=null&&(this.C=null,ua(this),xl(this),Pt(19))};function fa(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Bd(c,f){var g=null;if(c.g==f){fa(c),Ll(c),c.g=null;var y=2}else if(kl(c.h,f))g=f.G,wd(c.h,f),y=1;else return;if(c.I!=0){if(f.o)if(y==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var M=c.D;y=Xr(),W(y,new ud(y,g)),ha(c)}else $d(c);else if(M=f.m,M==3||M==0&&f.X>0||!(y==1&&oI(c,f)||y==2&&xl(c)))switch(g&&g.length>0&&(f=c.h,f.i=f.i.concat(g)),M){case 1:ts(c,5);break;case 4:ts(c,10);break;case 3:ts(c,6);break;default:ts(c,2)}}}function Hd(c,f){let g=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(g*=2),g*f}function ts(c,f){if(c.j.info("Error code "+f),f==2){var g=u(c.bb,c),y=c.Ua;const M=!y;y=new hr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Li(y,"https"),aa(y),M?eI(y.toString(),g):tI(y.toString(),g)}else Pt(2);c.I=0,c.l&&c.l.pa(f),qd(c),Ld(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function qd(c){if(c.I=0,c.ja=[],c.l){const f=Td(c.h);(f.length!=0||c.i.length!=0)&&(E(c.ja,f),E(c.ja,c.i),c.h.i.length=0,m(c.i),c.i.length=0),c.l.oa()}}function Wd(c,f,g){var y=g instanceof hr?En(g):new hr(g);if(y.g!="")f&&(y.g=f+"."+y.g),Fi(y,y.u);else{var M=o.location;y=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;const L=new hr(null);y&&Li(L,y),f&&(L.g=f),M&&Fi(L,M),g&&(L.h=g),y=L}return g=c.G,f=c.wa,g&&f&&Le(y,g,f),Le(y,"VER",c.ka),Wi(c,y),y}function zd(c,f,g){if(f&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Aa&&!c.ma?new qe(new Dl({ab:g})):new qe(c.ma),f.Fa(c.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kd(){}t=Kd.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function da(){}da.prototype.g=function(c,f){return new Ht(c,f)};function Ht(c,f){K.call(this),this.g=new xd(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(c?c["X-WebChannel-Client-Profile"]=f.sa:c={"X-WebChannel-Client-Profile":f.sa}),this.g.U=c,(c=f&&f.Qb)&&!T(c)&&(this.g.u=c),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!T(f)&&(this.g.G=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new xs(this)}d(Ht,K),Ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Ml(this.g)},Ht.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.v&&(g={},g.__data__=Se(c),c=g);f.i.push(new zT(f.Ya++,c)),f.I==3&&ha(f)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Ml(this.g),delete this.g,Ht.Z.N.call(this)};function Gd(c){Fn.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const g in f){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}d(Gd,Fn);function Qd(){Ds.call(this),this.status=1}d(Qd,Ds);function xs(c){this.g=c}d(xs,Kd),xs.prototype.ra=function(){W(this.g,"a")},xs.prototype.qa=function(c){W(this.g,new Gd(c))},xs.prototype.pa=function(c){W(this.g,new Qd)},xs.prototype.oa=function(){W(this.g,"b")},da.prototype.createWebChannel=da.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,WE=function(){return new da},qE=function(){return Xr()},HE=Qe,dh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ia.NO_ERROR=0,ia.TIMEOUT=8,ia.HTTP_ERROR=6,Ba=ia,hd.COMPLETE="complete",BE=hd,Nt.EventType=rt,rt.OPEN="a",rt.CLOSE="b",rt.ERROR="c",rt.MESSAGE="d",K.prototype.listen=K.prototype.J,eo=Nt,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,jE=qe}).apply(typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{});const om="@firebase/firestore",am="4.9.2";/**
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
 */let Si="12.3.0";/**
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
 */const As=new el("@firebase/firestore");function Bs(){return As.logLevel}function te(t,...e){if(As.logLevel<=ve.DEBUG){const n=e.map(wf);As.debug(`Firestore (${Si}): ${t}`,...n)}}function ir(t,...e){if(As.logLevel<=ve.ERROR){const n=e.map(wf);As.error(`Firestore (${Si}): ${t}`,...n)}}function pi(t,...e){if(As.logLevel<=ve.WARN){const n=e.map(wf);As.warn(`Firestore (${Si}): ${t}`,...n)}}function wf(t){if(typeof t=="string")return t;try{/**
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
 */function fe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,zE(t,r,n)}function zE(t,e,n){let r=`FIRESTORE (${Si}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ir(r),new Error(r)}function ke(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||zE(e,s,r)}function ge(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class KE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Tt.UNAUTHENTICATED)))}shutdown(){}}class uN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class hN{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string",31837,{l:r}),new KE(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string",2055,{h:e}),new Tt(e)}}class fN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class dN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new fN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Tt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ke(this.o===void 0,3512);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new cm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ke(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cm(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function gN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Tf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=gN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function ph(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return yu(s)===yu(i)?Ee(s,i):yu(s)?1:-1}return Ee(t.length,e.length)}const mN=55296,_N=57343;function yu(t){const e=t.charCodeAt(0);return e>=mN&&e<=_N}function gi(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const lm="__name__";class An{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&fe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return An.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof An?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=An.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ee(e.length,n.length)}static compareSegments(e,n){const r=An.isNumericId(e),s=An.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?An.extractNumericId(e).compare(An.extractNumericId(n)):ph(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mr.fromString(e.substring(4,e.length-2))}}class xe extends An{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new xe(n)}static emptyPath(){return new xe([])}}const yN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends An{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return yN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lm}static keyField(){return new gt([lm])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new X(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new X(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(xe.fromString(e))}static fromName(e){return new ae(xe.fromString(e).popFirst(5))}static empty(){return new ae(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new xe(e.slice()))}}/**
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
 */function GE(t,e,n){if(!n)throw new X(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vN(t,e,n,r){if(e===!0&&r===!0)throw new X(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function um(t){if(!ae.isDocumentKey(t))throw new X(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hm(t){if(ae.isDocumentKey(t))throw new X(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function QE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function sl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe(12329,{type:typeof t})}function Kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sl(t);throw new X(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function tt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Xo(t,e){if(!QE(t))throw new X(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const fm=-62135596800,dm=1e6;class Fe{static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*dm);return new Fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<fm)throw new X(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dm}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xo(e,Fe._jsonSchema))return new Fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Fe._jsonSchemaVersion="firestore/timestamp/1.0",Fe._jsonSchema={type:tt("string",Fe._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
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
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Fe(0,0))}static max(){return new pe(new Fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Vo=-1;function EN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Ur(s,ae.empty(),e)}function wN(t){return new Ur(t.readTime,t.key,Vo)}class Ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ur(pe.min(),ae.empty(),Vo)}static max(){return new Ur(pe.max(),ae.empty(),Vo)}}function TN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const IN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ci(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==IN)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):B.reject(n)}static resolve(e){return new B(((n,r)=>{n(e)}))}static reject(e){return new B(((n,r)=>{r(e)}))}static waitFor(e){return new B(((n,r)=>{let s=0,i=0,o=!1;e.forEach((a=>{++s,a.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next((s=>s?B.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new B(((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((h=>{o[u]=h,++a,a===i&&r(o)}),(h=>s(h)))}}))}static doWhile(e,n){return new B(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function bN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Pi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class il{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}il.ce=-1;/**
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
 */const If=-1;function ol(t){return t==null}function vc(t){return t===0&&1/t==-1/0}function RN(t){return typeof t=="number"&&Number.isInteger(t)&&!vc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const YE="";function SN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=pm(e)),e=CN(t.get(n),e);return pm(e)}function CN(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case YE:n+="";break;default:n+=i}}return n}function pm(t){return t+YE+""}/**
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
 */function gm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function JE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ka(this.root,e,this.comparator,!0)}}class ka{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=i??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ft(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mm(this.data.getIterator())}getIteratorFrom(e){return new mm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class mm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new zt([])}unionWith(e){let n=new it(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class XE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new XE("Invalid base64 string: "+i):i}})(e);return new _t(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const PN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $r(t){if(ke(!!t,39018),typeof t=="string"){let e=0;const n=PN.exec(t);if(ke(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
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
 */const ZE="server_timestamp",ew="__type__",tw="__previous_value__",nw="__local_write_time__";function Af(t){return(t?.mapValue?.fields||{})[ew]?.stringValue===ZE}function al(t){const e=t.mapValue.fields[tw];return Af(e)?al(e):e}function Mo(t){const e=$r(t.mapValue.fields[nw].timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class kN{constructor(e,n,r,s,i,o,a,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h}}const Ec="(default)";class xo{constructor(e,n){this.projectId=e,this.database=n||Ec}static empty(){return new xo("","")}get isDefaultDatabase(){return this.database===Ec}isEqual(e){return e instanceof xo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const rw="__type__",ON="__max__",Oa={mapValue:{}},sw="__vector__",wc="value";function Br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Af(t)?4:DN(t)?9007199254740991:NN(t)?10:11:fe(28295,{value:t})}function Mn(t,e){if(t===e)return!0;const n=Br(t);if(n!==Br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mo(t).isEqual(Mo(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=$r(s.timestampValue),a=$r(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return jr(s.bytesValue).isEqual(jr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),a=Ye(i.doubleValue);return o===a?vc(o)===vc(a):isNaN(o)&&isNaN(a)}return!1})(t,e);case 9:return gi(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(gm(o)!==gm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Mn(o[l],a[l])))return!1;return!0})(t,e);default:return fe(52216,{left:t})}}function Lo(t,e){return(t.values||[]).find((n=>Mn(n,e)))!==void 0}function mi(t,e){if(t===e)return 0;const n=Br(t),r=Br(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=Ye(i.integerValue||i.doubleValue),l=Ye(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(t,e);case 3:return _m(t.timestampValue,e.timestampValue);case 4:return _m(Mo(t),Mo(e));case 5:return ph(t.stringValue,e.stringValue);case 6:return(function(i,o){const a=jr(i),l=jr(o);return a.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Ee(a[u],l[u]);if(h!==0)return h}return Ee(a.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=Ee(Ye(i.latitude),Ye(o.latitude));return a!==0?a:Ee(Ye(i.longitude),Ye(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return ym(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const a=i.fields||{},l=o.fields||{},u=a[wc]?.arrayValue,h=l[wc]?.arrayValue,d=Ee(u?.values?.length||0,h?.values?.length||0);return d!==0?d:ym(u,h)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Oa.mapValue&&o===Oa.mapValue)return 0;if(i===Oa.mapValue)return 1;if(o===Oa.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=ph(l[d],h[d]);if(p!==0)return p;const m=mi(a[l[d]],u[h[d]]);if(m!==0)return m}return Ee(l.length,h.length)})(t.mapValue,e.mapValue);default:throw fe(23264,{he:n})}}function _m(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=$r(t),r=$r(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function ym(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=mi(n[s],r[s]);if(i)return i}return Ee(n.length,r.length)}function _i(t){return gh(t)}function gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=$r(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return jr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ae.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=gh(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${gh(n.fields[o])}`;return s+"}"})(t.mapValue):fe(61005,{value:t})}function Ha(t){switch(Br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=al(t);return e?16+Ha(e):16;case 5:return 2*t.stringValue.length;case 6:return jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ha(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Yr(r.fields,((i,o)=>{s+=i.length+Ha(o)})),s})(t.mapValue);default:throw fe(13486,{value:t})}}function vm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mh(t){return!!t&&"integerValue"in t}function bf(t){return!!t&&"arrayValue"in t}function Em(t){return!!t&&"nullValue"in t}function wm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function NN(t){return(t?.mapValue?.fields||{})[rw]?.stringValue===sw}function mo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Yr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=mo(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mo(t.arrayValue.values[n]);return e}return{...t}}function DN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ON}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mo(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach(((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=mo(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Yr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new xt(mo(this.value))}}function iw(t){const e=[];return Yr(t.fields,((n,r)=>{const s=new gt([n]);if(qa(r)){const i=iw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new zt(e)}/**
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
 */class bt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new bt(e,0,pe.min(),pe.min(),pe.min(),xt.empty(),0)}static newFoundDocument(e,n,r,s){return new bt(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new bt(e,2,n,pe.min(),pe.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,pe.min(),pe.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tc{constructor(e,n){this.position=e,this.inclusive=n}}function Tm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=mi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Im(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ic{constructor(e,n="asc"){this.field=e,this.dir=n}}function VN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ow{}class et extends ow{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xN(e,n,r):n==="array-contains"?new UN(e,r):n==="in"?new $N(e,r):n==="not-in"?new jN(e,r):n==="array-contains-any"?new BN(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LN(e,r):new FN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(mi(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(mi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends ow{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new mn(e,n)}matches(e){return aw(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function aw(t){return t.op==="and"}function cw(t){return MN(t)&&aw(t)}function MN(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function _h(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+_i(t.value);if(cw(t))return t.filters.map((e=>_h(e))).join(",");{const e=t.filters.map((n=>_h(n))).join(",");return`${t.op}(${e})`}}function lw(t,e){return t instanceof et?(function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Mn(r.value,s.value)})(t,e):t instanceof mn?(function(r,s){return s instanceof mn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,a)=>i&&lw(o,s.filters[a])),!0):!1})(t,e):void fe(19439)}function uw(t){return t instanceof et?(function(n){return`${n.field.canonicalString()} ${n.op} ${_i(n.value)}`})(t):t instanceof mn?(function(n){return n.op.toString()+" {"+n.getFilters().map(uw).join(" ,")+"}"})(t):"Filter"}class xN extends et{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class LN extends et{constructor(e,n){super(e,"in",n),this.keys=hw("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class FN extends et{constructor(e,n){super(e,"not-in",n),this.keys=hw("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function hw(t,e){return(e.arrayValue?.values||[]).map((n=>ae.fromName(n.referenceValue)))}class UN extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bf(n)&&Lo(n.arrayValue,this.value)}}class $N extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class jN extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Lo(this.value.arrayValue,n)}}class BN extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bf(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Lo(this.value.arrayValue,r)))}}/**
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
 */class HN{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function Am(t,e=null,n=[],r=[],s=null,i=null,o=null){return new HN(t,e,n,r,s,i,o)}function Rf(t){const e=ge(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>_h(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),ol(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>_i(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>_i(r))).join(",")),e.Te=n}return e.Te}function Sf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Im(t.startAt,e.startAt)&&Im(t.endAt,e.endAt)}function yh(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Zo{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function qN(t,e,n,r,s,i,o,a){return new Zo(t,e,n,r,s,i,o,a)}function cl(t){return new Zo(t)}function bm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fw(t){return t.collectionGroup!==null}function _o(t){const e=ge(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new it(gt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ic(i,r))})),n.has(gt.keyField().canonicalString())||e.Ie.push(new Ic(gt.keyField(),r))}return e.Ie}function Pn(t){const e=ge(t);return e.Ee||(e.Ee=WN(e,_o(t))),e.Ee}function WN(t,e){if(t.limitType==="F")return Am(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ic(s.field,i)}));const n=t.endAt?new Tc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tc(t.startAt.position,t.startAt.inclusive):null;return Am(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vh(t,e){const n=t.filters.concat([e]);return new Zo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Eh(t,e,n){return new Zo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ll(t,e){return Sf(Pn(t),Pn(e))&&t.limitType===e.limitType}function dw(t){return`${Rf(Pn(t))}|lt:${t.limitType}`}function Hs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>uw(s))).join(", ")}]`),ol(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>_i(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>_i(s))).join(",")),`Target(${r})`})(Pn(t))}; limitType=${t.limitType})`}function ul(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of _o(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,a,l){const u=Tm(o,a,l);return o.inclusive?u<=0:u<0})(r.startAt,_o(r),s)||r.endAt&&!(function(o,a,l){const u=Tm(o,a,l);return o.inclusive?u>=0:u>0})(r.endAt,_o(r),s))})(t,e)}function zN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pw(t){return(e,n)=>{let r=!1;for(const s of _o(t)){const i=KN(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function KN(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):(function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?mi(l,u):fe(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe(19790,{direction:t.dir})}}/**
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
 */class ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Yr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return JE(this.inner)}size(){return this.innerSize}}/**
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
 */const GN=new He(ae.comparator);function or(){return GN}const gw=new He(ae.comparator);function to(...t){let e=gw;for(const n of t)e=e.insert(n.key,n);return e}function mw(t){let e=gw;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function us(){return yo()}function _w(){return yo()}function yo(){return new ks((t=>t.toString()),((t,e)=>t.isEqual(e)))}const QN=new He(ae.comparator),YN=new it(ae.comparator);function we(...t){let e=YN;for(const n of t)e=e.add(n);return e}const JN=new it(Ee);function XN(){return JN}/**
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
 */function Cf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vc(e)?"-0":e}}function yw(t){return{integerValue:""+t}}function ZN(t,e){return RN(e)?yw(e):Cf(t,e)}/**
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
 */class hl{constructor(){this._=void 0}}function eD(t,e,n){return t instanceof Ac?(function(s,i){const o={fields:{[ew]:{stringValue:ZE},[nw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Af(i)&&(i=al(i)),i&&(o.fields[tw]=i),{mapValue:o}})(n,e):t instanceof Fo?Ew(t,e):t instanceof Uo?ww(t,e):(function(s,i){const o=vw(s,i),a=Rm(o)+Rm(s.Ae);return mh(o)&&mh(s.Ae)?yw(a):Cf(s.serializer,a)})(t,e)}function tD(t,e,n){return t instanceof Fo?Ew(t,e):t instanceof Uo?ww(t,e):n}function vw(t,e){return t instanceof bc?(function(r){return mh(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ac extends hl{}class Fo extends hl{constructor(e){super(),this.elements=e}}function Ew(t,e){const n=Tw(e);for(const r of t.elements)n.some((s=>Mn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Uo extends hl{constructor(e){super(),this.elements=e}}function ww(t,e){let n=Tw(e);for(const r of t.elements)n=n.filter((s=>!Mn(s,r)));return{arrayValue:{values:n}}}class bc extends hl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Rm(t){return Ye(t.integerValue||t.doubleValue)}function Tw(t){return bf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function nD(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Fo&&s instanceof Fo||r instanceof Uo&&s instanceof Uo?gi(r.elements,s.elements,Mn):r instanceof bc&&s instanceof bc?Mn(r.Ae,s.Ae):r instanceof Ac&&s instanceof Ac})(t.transform,e.transform)}class rD{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fl{}function Iw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bw(t.key,un.none()):new ea(t.key,t.data,un.none());{const n=t.data,r=xt.empty();let s=new it(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Jr(t.key,r,new zt(s.toArray()),un.none())}}function sD(t,e,n){t instanceof ea?(function(s,i,o){const a=s.value.clone(),l=Cm(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(t,e,n):t instanceof Jr?(function(s,i,o){if(!Wa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Cm(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Aw(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function vo(t,e,n,r){return t instanceof ea?(function(i,o,a,l){if(!Wa(i.precondition,o))return a;const u=i.value.clone(),h=Pm(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Jr?(function(i,o,a,l){if(!Wa(i.precondition,o))return a;const u=Pm(i.fieldTransforms,l,o),h=o.data;return h.setAll(Aw(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((d=>d.field)))})(t,e,n,r):(function(i,o,a){return Wa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(t,e,n)}function iD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=vw(r.transform,s||null);i!=null&&(n===null&&(n=xt.empty()),n.set(r.field,i))}return n||null}function Sm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gi(r,s,((i,o)=>nD(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends fl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jr extends fl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Aw(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Cm(t,e,n){const r=new Map;ke(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,tD(o,a,n[s]))}return r}function Pm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,eD(i,o,e))}return r}class bw extends fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oD extends fl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class aD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_w();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Iw(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),we())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,((n,r)=>Sm(n,r)))&&gi(this.baseMutations,e.baseMutations,((n,r)=>Sm(n,r)))}}class Pf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return QN})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Pf(e,n,r,s)}}/**
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
 */class cD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Xe,Te;function uD(t){switch(t){case j.OK:return fe(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return fe(15467,{code:t})}}function Rw(t){if(t===void 0)return ir("GRPC error has no .code"),j.UNKNOWN;switch(t){case Xe.OK:return j.OK;case Xe.CANCELLED:return j.CANCELLED;case Xe.UNKNOWN:return j.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return j.INTERNAL;case Xe.UNAVAILABLE:return j.UNAVAILABLE;case Xe.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Xe.NOT_FOUND:return j.NOT_FOUND;case Xe.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Xe.ABORTED:return j.ABORTED;case Xe.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Xe.DATA_LOSS:return j.DATA_LOSS;default:return fe(39323,{code:t})}}(Te=Xe||(Xe={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hD(){return new TextEncoder}/**
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
 */const fD=new Mr([4294967295,4294967295],0);function km(t){const e=hD().encode(t),n=new $E;return n.update(e),new Uint8Array(n.digest())}function Om(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Mr([n,r],0),new Mr([s,i],0)]}class kf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new no(`Invalid padding: ${n}`);if(r<0)throw new no(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new no(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new no(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Mr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Mr.fromNumber(r)));return s.compare(fD)===1&&(s=new Mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=km(e),[r,s]=Om(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new kf(i,s,n);return r.forEach((a=>o.insert(a))),o}insert(e){if(this.ge===0)return;const n=km(e),[r,s]=Om(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class no extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class dl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dl(pe.min(),s,new He(Ee),or(),we())}}class ta{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ta(r,n,we(),we(),we())}}/**
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
 */class za{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Sw{constructor(e,n){this.targetId=e,this.Ce=n}}class Cw{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Nm{constructor(){this.ve=0,this.Fe=Dm(),this.Me=_t.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=we(),n=we(),r=we();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe(38017,{changeType:i})}})),new ta(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Dm()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ke(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class dD{constructor(e){this.Ge=e,this.ze=new Map,this.je=or(),this.Je=Na(),this.He=Na(),this.Ye=new He(Ee)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(yh(i))if(r===0){const o=new ae(i.path);this.et(n,o,bt.newNoDocument(o,pe.min()))}else ke(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=jr(r).toUint8Array()}catch(l){if(l instanceof XE)return pi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new kf(o,s,i)}catch(l){return pi(l instanceof no?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const a=this.ot(o);if(a){if(i.current&&yh(a.target)){const l=new ae(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,bt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=we();this.He.forEach(((i,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new dl(e,n,this.Ye,this.je,r);return this.je=or(),this.Je=Na(),this.He=Na(),this.Ye=new He(Ee),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Nm,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new it(Ee),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new it(Ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Nm),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Na(){return new He(ae.comparator)}function Dm(){return new He(ae.comparator)}const pD={asc:"ASCENDING",desc:"DESCENDING"},gD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mD={and:"AND",or:"OR"};class _D{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wh(t,e){return t.useProto3Json||ol(e)?e:{value:e}}function Rc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yD(t,e){return Rc(t,e.toTimestamp())}function kn(t){return ke(!!t,49232),pe.fromTimestamp((function(n){const r=$r(n);return new Fe(r.seconds,r.nanos)})(t))}function Of(t,e){return Th(t,e).canonicalString()}function Th(t,e){const n=(function(s){return new xe(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function kw(t){const e=xe.fromString(t);return ke(Mw(e),10190,{key:e.toString()}),e}function Ih(t,e){return Of(t.databaseId,e.path)}function vu(t,e){const n=kw(e);if(n.get(1)!==t.databaseId.projectId)throw new X(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(Nw(n))}function Ow(t,e){return Of(t.databaseId,e)}function vD(t){const e=kw(t);return e.length===4?xe.emptyPath():Nw(e)}function Ah(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nw(t){return ke(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Vm(t,e,n){return{name:Ih(t,e),fields:n.value.mapValue.fields}}function ED(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(ke(h===void 0||typeof h=="string",58123),_t.fromBase64String(h||"")):(ke(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),_t.fromUint8Array(h||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?j.UNKNOWN:Rw(u.code);return new X(h,u.message||"")})(o);n=new Cw(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=vu(t,r.document.name),i=kn(r.document.updateTime),o=r.document.createTime?kn(r.document.createTime):pe.min(),a=new xt({mapValue:{fields:r.document.fields}}),l=bt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new za(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=vu(t,r.document),i=r.readTime?kn(r.readTime):pe.min(),o=bt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new za([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=vu(t,r.document),i=r.removedTargetIds||[];n=new za([],i,s,null)}else{if(!("filter"in e))return fe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new lD(s,i),a=r.targetId;n=new Sw(a,o)}}return n}function wD(t,e){let n;if(e instanceof ea)n={update:Vm(t,e.key,e.value)};else if(e instanceof bw)n={delete:Ih(t,e.key)};else if(e instanceof Jr)n={update:Vm(t,e.key,e.data),updateMask:kD(e.fieldMask)};else{if(!(e instanceof oD))return fe(16599,{Vt:e.type});n={verify:Ih(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const a=o.transform;if(a instanceof Ac)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof bc)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw fe(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:yD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe(27497)})(t,e.precondition)),n}function TD(t,e){return t&&t.length>0?(ke(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?kn(s.updateTime):kn(i);return o.isEqual(pe.min())&&(o=kn(i)),new rD(o,s.transformResults||[])})(n,e)))):[]}function ID(t,e){return{documents:[Ow(t,e.path)]}}function AD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ow(t,s);const i=(function(u){if(u.length!==0)return Vw(mn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(p){return{field:qs(p.field),direction:SD(p.dir)}})(h)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=wh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function bD(t){let e=vD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=(function(d){const p=Dw(d);return p instanceof mn&&cw(p)?p.getFilters():[p]})(n.where));let o=[];n.orderBy&&(o=(function(d){return d.map((p=>(function(E){return new Ic(Ws(E.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(E.direction))})(p)))})(n.orderBy));let a=null;n.limit&&(a=(function(d){let p;return p=typeof d=="object"?d.value:d,ol(p)?null:p})(n.limit));let l=null;n.startAt&&(l=(function(d){const p=!!d.before,m=d.values||[];return new Tc(m,p)})(n.startAt));let u=null;return n.endAt&&(u=(function(d){const p=!d.before,m=d.values||[];return new Tc(m,p)})(n.endAt)),qN(e,s,o,i,a,"F",l,u)}function RD(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dw(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ws(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ws(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ws(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ws(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return et.create(Ws(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return mn.create(n.compositeFilter.filters.map((r=>Dw(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(n.compositeFilter.op))})(t):fe(30097,{filter:t})}function SD(t){return pD[t]}function CD(t){return gD[t]}function PD(t){return mD[t]}function qs(t){return{fieldPath:t.canonicalString()}}function Ws(t){return gt.fromServerFormat(t.fieldPath)}function Vw(t){return t instanceof et?(function(n){if(n.op==="=="){if(wm(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NAN"}};if(Em(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wm(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NOT_NAN"}};if(Em(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qs(n.field),op:CD(n.op),value:n.value}}})(t):t instanceof mn?(function(n){const r=n.getFilters().map((s=>Vw(s)));return r.length===1?r[0]:{compositeFilter:{op:PD(n.op),filters:r}}})(t):fe(54877,{filter:t})}function kD(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Mw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class kr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),a=_t.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class OD{constructor(e){this.yt=e}}function ND(t){const e=bD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Eh(e,e.limit,"L"):e}/**
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
 */class DD{constructor(){this.Cn=new VD}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ur.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ur.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class VD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new it(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(xe.comparator)).toArray()}}/**
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
 */const Mm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xw=41943040;class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(xw,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
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
 */class yi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new yi(0)}static cr(){return new yi(-1)}}/**
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
 */const xm="LruGarbageCollector",MD=1048576;function Lm([t,e],[n,r]){const s=Ee(t,n);return s===0?Ee(e,r):s}class xD{constructor(e){this.Ir=e,this.buffer=new it(Lm),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Lm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class LD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(xm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Pi(n)?te(xm,"Ignoring IndexedDB error during garbage collection: ",n):await Ci(n)}await this.Vr(3e5)}))}}class FD{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return B.resolve(il.ce);const r=new xD(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Mm)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mm):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s)))).next((d=>(r=d,a=Date.now(),this.removeTargets(e,r,n)))).next((d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((d=>(u=Date.now(),Bs()<=ve.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d}))))}}function UD(t,e){return new FD(t,e)}/**
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
 */class $D{constructor(){this.changes=new ks((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class BD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&vo(r.mutation,s,zt.empty(),Fe.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,we()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=we()){const s=us();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=to();return i.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=us();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,we())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,a)=>{n.set(o,a)}))}))}computeViews(e,n,r,s){let i=or();const o=yo(),a=(function(){return yo()})();return n.forEach(((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Jr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),vo(h.mutation,u,h.mutation.getFieldMask(),Fe.now())):o.set(u.key,zt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,h)=>o.set(u,h))),n.forEach(((u,h)=>a.set(u,new jD(h,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,n){const r=yo();let s=new He(((o,a)=>o-a)),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||zt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||we()).add(l);s=s.insert(a.batchId,d)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=_w();h.forEach((p=>{if(!i.has(p)){const m=Iw(n.get(p),r.get(p));m!==null&&d.set(p,m),i=i.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return B.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(us());let a=Vo,l=i;return o.next((u=>B.forEach(u,((h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next((p=>{l=l.insert(h,p)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,we()))).next((h=>({batchId:a,changes:mw(h)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next((r=>{let s=to();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=to();return this.indexManager.getCollectionParents(e,i).next((a=>B.forEach(a,(l=>{const u=(function(d,p){return new Zo(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((h=>{h.forEach(((d,p)=>{o=o.insert(d,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,bt.newInvalidDocument(h)))}));let a=to();return o.forEach(((l,u)=>{const h=i.get(l);h!==void 0&&vo(h.mutation,u,zt.empty(),Fe.now()),ul(n,u)&&(a=a.insert(l,u))})),a}))}}/**
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
 */class HD{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:kn(s.createTime)}})(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:ND(s.bundledQuery),readTime:kn(s.readTime)}})(n)),B.resolve()}}/**
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
 */class qD{constructor(){this.overlays=new He(ae.comparator),this.qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=us();return B.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=us(),i=n.length+1,o=new ae(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=us(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=us(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=s)););return B.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cD(n,r));let i=this.qr.get(n);i===void 0&&(i=we(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class WD{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class Nf{constructor(){this.Qr=new it(ct.$r),this.Ur=new it(ct.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new ct(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ae(new xe([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ae(new xe([])),r=new ct(n,e),s=new ct(n,e+1);let i=we();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new ct(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ae.comparator(e.key,n.key)||Ee(e.Yr,n.Yr)}static Kr(e,n){return Ee(e.Yr,n.Yr)||ae.comparator(e.key,n.key)}}/**
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
 */class zD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new it(ct.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aD(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new ct(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?If:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const a=this.Xr(o.Yr);i.push(a)})),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(Ee);return n.forEach((s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(a=>{r=r.add(a.Yr)}))})),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const o=new ct(new ae(i),0);let a=new it(Ee);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Yr)),!0)}),o),B.resolve(this.ti(a))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){ke(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,(s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new ct(n,0),s=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class KD{constructor(e){this.ri=e,this.docs=(function(){return new He(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=or();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():bt.newInvalidDocument(s))})),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=or();const o=n.path,a=new ae(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||TN(wN(h),r)<=0||(s.has(h.key)||ul(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe(9500)}ii(e,n){return B.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new GD(this)}getSize(e){return B.resolve(this.size)}}class GD extends $D{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),B.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class QD{constructor(e){this.persistence=e,this.si=new ks((n=>Rf(n)),Sf),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Nf,this.targetCount=0,this.ai=yi.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new yi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Pr(n),B.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),B.waitFor(i).next((()=>s))}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this._i.containsKey(n))}}/**
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
 */class Lw{constructor(e,n){this.ui={},this.overlays={},this.ci=new il(0),this.li=!1,this.li=!0,this.hi=new WD,this.referenceDelegate=e(this),this.Pi=new QD(this),this.indexManager=new DD,this.remoteDocumentCache=(function(s){return new KD(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new OD(n),this.Ii=new HD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new zD(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new YD(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return B.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class YD extends AN{constructor(e){super(),this.currentSequenceNumber=e}}class Df{constructor(e){this.persistence=e,this.Ri=new Nf,this.Vi=null}static mi(e){return new Df(e)}get fi(){if(this.Vi)return this.Vi;throw fe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,(r=>{const s=ae.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,pe.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Sc{constructor(e,n){this.persistence=e,this.pi=new ks((r=>SN(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=UD(this,n)}static mi(e,n){return new Sc(e,n)}Ei(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return B.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?B.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((a=>{a||(r++,i.removeEntry(o,pe.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ha(e.data.value)),n}br(e,n,r){return B.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Vf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vf(e,n.fromCache,r,s)}}/**
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
 */class JD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class XD{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return PP()?8:bN(Ct())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new JD;return this.Ss(e,n,o).next((a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Bs()<=ve.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(Bs()<=ve.DEBUG&&te("QueryEngine","Query:",Hs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Bs()<=ve.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):B.resolve())}ys(e,n){if(bm(n))return B.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Eh(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=we(...i);return this.ps.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,a);return this.Cs(n,u,o,l.readTime)?this.ys(e,Eh(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return bm(n)||s.isEqual(pe.min())?B.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?B.resolve(null):(Bs()<=ve.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hs(n)),this.vs(e,o,n,EN(s,Vo)).next((a=>a)))}))}Ds(e,n){let r=new it(pw(e));return n.forEach(((s,i)=>{ul(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Bs()<=ve.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Hs(n)),this.ps.getDocumentsMatchingQuery(e,n,Ur.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const Mf="LocalStore",ZD=3e8;class eV{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new He(Ee),this.xs=new ks((i=>Rf(i)),Sf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BD(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function tV(t,e,n,r){return new eV(t,e,n,r)}async function Fw(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],a=[];let l=we();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function nV(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,h){const d=u.batch,p=d.keys();let m=B.resolve();return p.forEach((E=>{m=m.next((()=>h.getEntry(l,E))).next((A=>{const O=u.docVersions.get(E);ke(O!==null,48541),A.version.compareTo(O)<0&&(d.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),h.addEntry(A)))}))})),m.next((()=>a.mutationQueue.removeMutationBatch(l,d)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(a){let l=we();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Uw(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function rV(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach(((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Pi.removeMatchingKeys(i,h.removedDocuments,d).next((()=>n.Pi.addMatchingKeys(i,h.addedDocuments,d))));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(_t.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),s=s.insert(d,m),(function(A,O,V){return A.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=ZD?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(p,m,h)&&a.push(n.Pi.updateTargetData(i,m))}));let l=or(),u=we();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(sV(i,o,e.documentUpdates).next((h=>{l=h.ks,u=h.qs}))),!r.isEqual(pe.min())){const h=n.Pi.getLastRemoteSnapshotVersion(i).next((d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));a.push(h)}return B.waitFor(a).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function sV(t,e,n){let r=we(),s=we();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=or();return n.forEach(((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(pe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):te(Mf,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function iV(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=If),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function oV(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,B.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function bh(t,e,n){const r=ge(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Pi(o))throw o;te(Mf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Fm(t,e,n){const r=ge(t);let s=pe.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const d=ge(l),p=d.xs.get(h);return p!==void 0?B.resolve(d.Ms.get(p)):d.Pi.getTargetData(u,h)})(r,o,Pn(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:we()))).next((a=>(aV(r,zN(e),a),{documents:a,Qs:i})))))}function aV(t,e,n){let r=t.Os.get(e)||pe.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Um{constructor(){this.activeTargetIds=XN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cV{constructor(){this.Mo=new Um,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Um,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lV{Oo(e){}shutdown(){}}/**
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
 */const $m="ConnectivityMonitor";class jm{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te($m,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te($m,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Da=null;function Rh(){return Da===null?Da=(function(){return 268435456+Math.round(2147483648*Math.random())})():Da++,"0x"+Da.toString(16)}/**
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
 */const Eu="RestConnection",uV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hV{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ec?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Rh(),a=this.zo(e,n.toUriEncodedString());te(Eu,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(a),h=Ai(u);return this.Jo(e,a,l,r,h).then((d=>(te(Eu,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw pi(Eu,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",r),d}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Si})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=uV[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class fV{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Et="WebChannelConnection";class dV extends hV{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Rh();return new Promise(((a,l)=>{const u=new jE;u.setWithCredentials(!0),u.listenOnce(BE.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Ba.NO_ERROR:const d=u.getResponseJson();te(Et,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case Ba.TIMEOUT:te(Et,`RPC '${e}' ${o} timed out`),l(new X(j.DEADLINE_EXCEEDED,"Request time out"));break;case Ba.HTTP_ERROR:const p=u.getStatus();if(te(Et,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m?.error;if(E&&E.status&&E.message){const A=(function(V){const N=V.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(N)>=0?N:j.UNKNOWN})(E.status);l(new X(A,E.message))}else l(new X(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new X(j.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{te(Et,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(s);te(Et,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)}))}T_(e,n,r){const s=Rh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=WE(),a=qE(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");te(Et,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);this.I_(d);let p=!1,m=!1;const E=new fV({Yo:O=>{m?te(Et,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(p||(te(Et,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),te(Et,`RPC '${e}' stream ${s} sending:`,O),d.send(O))},Zo:()=>d.close()}),A=(O,V,N)=>{O.listen(V,(w=>{try{N(w)}catch(k){setTimeout((()=>{throw k}),0)}}))};return A(d,eo.EventType.OPEN,(()=>{m||(te(Et,`RPC '${e}' stream ${s} transport opened.`),E.o_())})),A(d,eo.EventType.CLOSE,(()=>{m||(m=!0,te(Et,`RPC '${e}' stream ${s} transport closed`),E.a_(),this.E_(d))})),A(d,eo.EventType.ERROR,(O=>{m||(m=!0,pi(Et,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),E.a_(new X(j.UNAVAILABLE,"The operation could not be completed")))})),A(d,eo.EventType.MESSAGE,(O=>{if(!m){const V=O.data[0];ke(!!V,16349);const N=V,w=N?.error||N[0]?.error;if(w){te(Et,`RPC '${e}' stream ${s} received error:`,w);const k=w.status;let D=(function(v){const _=Xe[v];if(_!==void 0)return Rw(_)})(k),F=w.message;D===void 0&&(D=j.INTERNAL,F="Unknown error status: "+k+" with message "+w.message),m=!0,E.a_(new X(D,F)),d.close()}else te(Et,`RPC '${e}' stream ${s} received:`,V),E.u_(V)}})),A(a,HE.STAT_EVENT,(O=>{O.stat===dh.PROXY?te(Et,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===dh.NOPROXY&&te(Et,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{E.__()}),0),E}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function wu(){return typeof document<"u"?document:null}/**
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
 */function pl(t){return new _D(t,!0)}/**
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
 */class $w{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Bm="PersistentStream";class jw{constructor(e,n,r,s,i,o,a,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new $w(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(ir(n.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new X(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(Bm,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(te(Bm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class pV extends jw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=ED(this.serializer,e),r=(function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?kn(o.readTime):pe.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Ah(this.serializer),n.addTarget=(function(i,o){let a;const l=o.target;if(a=yh(l)?{documents:ID(i,l)}:{query:AD(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Pw(i,o.resumeToken);const u=wh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){a.readTime=Rc(i,o.snapshotVersion.toTimestamp());const u=wh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const r=RD(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Ah(this.serializer),n.removeTarget=e,this.q_(n)}}class gV extends jw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=TD(e.writeResults,e.commitTime),r=kn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ah(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>wD(this.serializer,r)))};this.q_(n)}}/**
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
 */class mV{}class _V extends mV{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(j.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Th(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(j.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Ho(e,Th(n,r),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(j.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class yV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ir(n),this.aa=!1):te("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const bs="RemoteStore";class vV{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{Os(this)&&(te(bs,"Restarting streams for network reachability change."),await(async function(l){const u=ge(l);u.Ea.add(4),await na(u),u.Ra.set("Unknown"),u.Ea.delete(4),await gl(u)})(this))}))})),this.Ra=new yV(r,s)}}async function gl(t){if(Os(t))for(const e of t.da)await e(!0)}async function na(t){for(const e of t.da)await e(!1)}function Bw(t,e){const n=ge(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Uf(n)?Ff(n):ki(n).O_()&&Lf(n,e))}function xf(t,e){const n=ge(t),r=ki(n);n.Ia.delete(e),r.O_()&&Hw(n,e),n.Ia.size===0&&(r.O_()?r.L_():Os(n)&&n.Ra.set("Unknown"))}function Lf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ki(t).Y_(e)}function Hw(t,e){t.Va.Ue(e),ki(t).Z_(e)}function Ff(t){t.Va=new dD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ki(t).start(),t.Ra.ua()}function Uf(t){return Os(t)&&!ki(t).x_()&&t.Ia.size>0}function Os(t){return ge(t).Ea.size===0}function qw(t){t.Va=void 0}async function EV(t){t.Ra.set("Online")}async function wV(t){t.Ia.forEach(((e,n)=>{Lf(t,e)}))}async function TV(t,e){qw(t),Uf(t)?(t.Ra.ha(e),Ff(t)):t.Ra.set("Unknown")}async function IV(t,e,n){if(t.Ra.set("Online"),e instanceof Cw&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))})(t,e)}catch(r){te(bs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cc(t,r)}else if(e instanceof za?t.Va.Ze(e):e instanceof Sw?t.Va.st(e):t.Va.tt(e),!n.isEqual(pe.min()))try{const r=await Uw(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,u)=>{const h=i.Ia.get(l);if(!h)return;i.Ia.set(l,h.withResumeToken(_t.EMPTY_BYTE_STRING,h.snapshotVersion)),Hw(i,l);const d=new kr(h.target,l,u,h.sequenceNumber);Lf(i,d)})),i.remoteSyncer.applyRemoteEvent(a)})(t,n)}catch(r){te(bs,"Failed to raise snapshot:",r),await Cc(t,r)}}async function Cc(t,e,n){if(!Pi(e))throw e;t.Ea.add(1),await na(t),t.Ra.set("Offline"),n||(n=()=>Uw(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{te(bs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await gl(t)}))}function Ww(t,e){return e().catch((n=>Cc(t,n,e)))}async function ml(t){const e=ge(t),n=Hr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:If;for(;AV(e);)try{const s=await iV(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,bV(e,s)}catch(s){await Cc(e,s)}zw(e)&&Kw(e)}function AV(t){return Os(t)&&t.Ta.length<10}function bV(t,e){t.Ta.push(e);const n=Hr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function zw(t){return Os(t)&&!Hr(t).x_()&&t.Ta.length>0}function Kw(t){Hr(t).start()}async function RV(t){Hr(t).ra()}async function SV(t){const e=Hr(t);for(const n of t.Ta)e.ea(n.mutations)}async function CV(t,e,n){const r=t.Ta.shift(),s=Pf.from(r,e,n);await Ww(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await ml(t)}async function PV(t,e){e&&Hr(t).X_&&await(async function(r,s){if((function(o){return uD(o)&&o!==j.ABORTED})(s.code)){const i=r.Ta.shift();Hr(r).B_(),await Ww(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ml(r)}})(t,e),zw(t)&&Kw(t)}async function Hm(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),te(bs,"RemoteStore received new credentials");const r=Os(n);n.Ea.add(3),await na(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await gl(n)}async function kV(t,e){const n=ge(t);e?(n.Ea.delete(2),await gl(n)):e||(n.Ea.add(2),await na(n),n.Ra.set("Unknown"))}function ki(t){return t.ma||(t.ma=(function(n,r,s){const i=ge(n);return i.sa(),new pV(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:EV.bind(null,t),t_:wV.bind(null,t),r_:TV.bind(null,t),H_:IV.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Uf(t)?Ff(t):t.Ra.set("Unknown")):(await t.ma.stop(),qw(t))}))),t.ma}function Hr(t){return t.fa||(t.fa=(function(n,r,s){const i=ge(n);return i.sa(),new gV(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:RV.bind(null,t),r_:PV.bind(null,t),ta:SV.bind(null,t),na:CV.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await ml(t)):(await t.fa.stop(),t.Ta.length>0&&(te(bs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class $f{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new $f(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jf(t,e){if(ir("AsyncQueue",`${e}: ${t}`),Pi(t))return new X(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ii{static emptySet(e){return new ii(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=to(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class qm{constructor(){this.ga=new He(ae.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):fe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class vi{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((a=>{o.push({type:0,doc:a})})),new vi(e,n,ii.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ll(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class OV{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class NV{constructor(){this.queries=Wm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=Wm(),i.forEach(((o,a)=>{for(const l of a.Sa)l.onError(r)}))})(this,new X(j.ABORTED,"Firestore shutting down"))}}function Wm(){return new ks((t=>dw(t)),ll)}async function Bf(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new OV,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=jf(o,`Initialization of query '${Hs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&qf(n)}async function Hf(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DV(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&qf(n)}function VV(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function qf(t){t.Ca.forEach((e=>{e.next()}))}var Sh,zm;(zm=Sh||(Sh={})).Ma="default",zm.Cache="cache";class Wf{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Sh.Cache}}/**
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
 */class Gw{constructor(e){this.key=e}}class Qw{constructor(e){this.key=e}}class MV{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=we(),this.mutatedKeys=we(),this.eu=pw(e),this.tu=new ii(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new qm,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((h,d)=>{const p=s.get(h),m=ul(this.query,d)?d:null,E=!!p&&this.mutatedKeys.has(p.key),A=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let O=!1;p&&m?p.data.isEqual(m.data)?E!==A&&(r.track({type:3,doc:m}),O=!0):this.su(p,m)||(r.track({type:2,doc:m}),O=!0,(l&&this.eu(m,l)>0||u&&this.eu(m,u)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),O=!0):p&&!m&&(r.track({type:1,doc:p}),O=!0,(l||u)&&(a=!0)),O&&(m?(o=o.add(m),i=A?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,d)=>(function(m,E){const A=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Rt:O})}};return A(m)-A(E)})(h.type,d.type)||this.eu(h.doc,d.doc))),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new vi(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new qm,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=we(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new Qw(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new Gw(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=we();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return vi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const zf="SyncEngine";class xV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LV{constructor(e){this.key=e,this.hu=!1}}class FV{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ks((a=>dw(a)),ll),this.Iu=new Map,this.Eu=new Set,this.du=new He(ae.comparator),this.Au=new Map,this.Ru=new Nf,this.Vu={},this.mu=new Map,this.fu=yi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function UV(t,e,n=!0){const r=tT(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Yw(r,e,n,!0),s}async function $V(t,e){const n=tT(t);await Yw(n,e,!0,!1)}async function Yw(t,e,n,r){const s=await oV(t.localStore,Pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await jV(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Bw(t.remoteStore,s),a}async function jV(t,e,n,r,s){t.pu=(d,p,m)=>(async function(A,O,V,N){let w=O.view.ru(V);w.Cs&&(w=await Fm(A.localStore,O.query,!1).then((({documents:b})=>O.view.ru(b,w))));const k=N&&N.targetChanges.get(O.targetId),D=N&&N.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(w,A.isPrimaryClient,k,D);return Gm(A,O.targetId,F.au),F.snapshot})(t,d,p,m);const i=await Fm(t.localStore,e,!0),o=new MV(e,i.Qs),a=o.ru(i.documents),l=ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);Gm(t,n,u.au);const h=new xV(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function BV(t,e,n){const r=ge(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!ll(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bh(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xf(r.remoteStore,s.targetId),Ch(r,s.targetId)})).catch(Ci)):(Ch(r,s.targetId),await bh(r.localStore,s.targetId,!0))}async function HV(t,e){const n=ge(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xf(n.remoteStore,r.targetId))}async function qV(t,e,n){const r=JV(t);try{const s=await(function(o,a){const l=ge(o),u=Fe.now(),h=a.reduce(((m,E)=>m.add(E.key)),we());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",(m=>{let E=or(),A=we();return l.Ns.getEntries(m,h).next((O=>{E=O,E.forEach(((V,N)=>{N.isValidDocument()||(A=A.add(V))}))})).next((()=>l.localDocuments.getOverlayedDocuments(m,E))).next((O=>{d=O;const V=[];for(const N of a){const w=iD(N,d.get(N.key).overlayedDocument);w!=null&&V.push(new Jr(N.key,w,iw(w.value.mapValue),un.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,V,a)})).next((O=>{p=O;const V=O.applyToLocalDocumentSet(d,A);return l.documentOverlayCache.saveOverlays(m,O.batchId,V)}))})).then((()=>({batchId:p.batchId,changes:mw(d)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,a,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new He(Ee)),u=u.insert(a,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await ra(r,s.changes),await ml(r.remoteStore)}catch(s){const i=jf(s,"Failed to persist write");n.reject(i)}}async function Jw(t,e){const n=ge(t);try{const r=await rV(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ke(o.hu,14607):s.removedDocuments.size>0&&(ke(o.hu,42227),o.hu=!1))})),await ra(n,r,e)}catch(r){await Ci(r)}}function Km(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const l=ge(o);l.onlineState=a;let u=!1;l.queries.forEach(((h,d)=>{for(const p of d.Sa)p.va(a)&&(u=!0)})),u&&qf(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WV(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new He(ae.comparator);o=o.insert(i,bt.newNoDocument(i,pe.min()));const a=we().add(i),l=new dl(pe.min(),new Map,new He(Ee),o,a);await Jw(r,l),r.du=r.du.remove(i),r.Au.delete(e),Kf(r)}else await bh(r.localStore,e,!1).then((()=>Ch(r,e,n))).catch(Ci)}async function zV(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await nV(n.localStore,e);Zw(n,r,null),Xw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ra(n,s)}catch(s){await Ci(s)}}async function KV(t,e,n){const r=ge(t);try{const s=await(function(o,a){const l=ge(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next((d=>(ke(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>l.localDocuments.getDocuments(u,h)))}))})(r.localStore,e);Zw(r,e,n),Xw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ra(r,s)}catch(s){await Ci(s)}}function Xw(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Zw(t,e,n){const r=ge(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ch(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||eT(t,r)}))}function eT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(xf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Kf(t))}function Gm(t,e,n){for(const r of n)r instanceof Gw?(t.Ru.addReference(r.key,e),GV(t,r)):r instanceof Qw?(te(zf,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||eT(t,r.key)):fe(19791,{wu:r})}function GV(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(te(zf,"New document in limbo: "+n),t.Eu.add(r),Kf(t))}function Kf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ae(xe.fromString(e)),r=t.fu.next();t.Au.set(r,new LV(n)),t.du=t.du.insert(n,r),Bw(t.remoteStore,new kr(Pn(cl(n.path)),r,"TargetPurposeLimboResolution",il.ce))}}async function ra(t,e,n){const r=ge(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((a,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const h=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(u){s.push(u);const h=Vf.As(l.targetId,u);i.push(h)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const h=ge(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>B.forEach(u,(p=>B.forEach(p.Es,(m=>h.persistence.referenceDelegate.addReference(d,p.targetId,m))).next((()=>B.forEach(p.ds,(m=>h.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))))))}catch(d){if(!Pi(d))throw d;te(Mf,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const m=h.Ms.get(p),E=m.snapshotVersion,A=m.withLastLimboFreeSnapshotVersion(E);h.Ms=h.Ms.insert(p,A)}}})(r.localStore,i))}async function QV(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){te(zf,"User change. New user:",e.toKey());const r=await Fw(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((a=>{a.forEach((l=>{l.reject(new X(j.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ra(n,r.Ls)}}function YV(t,e){const n=ge(t),r=n.Au.get(e);if(r&&r.hu)return we().add(r.key);{let s=we();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function tT(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WV.bind(null,e),e.Pu.H_=DV.bind(null,e.eventManager),e.Pu.yu=VV.bind(null,e.eventManager),e}function JV(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KV.bind(null,e),e}class Pc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return tV(this.persistence,new XD,e.initialUser,this.serializer)}Cu(e){return new Lw(Df.mi,this.serializer)}Du(e){return new cV}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pc.provider={build:()=>new Pc};class XV extends Pc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ke(this.persistence.referenceDelegate instanceof Sc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new LD(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new Lw((r=>Sc.mi(r,n)),this.serializer)}}class Ph{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Km(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QV.bind(null,this.syncEngine),await kV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new NV})()}createDatastore(e){const n=pl(e.databaseInfo.databaseId),r=(function(i){return new dV(i)})(e.databaseInfo);return(function(i,o,a,l){return new _V(i,o,a,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,a){return new vV(r,s,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(n=>Km(this.syncEngine,n,0)),(function(){return jm.v()?new jm:new lV})())}createSyncEngine(e,n){return(function(s,i,o,a,l,u,h){const d=new FV(s,i,o,a,l,u);return h&&(d.gu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=ge(n);te(bs,"RemoteStore shutting down."),r.Ea.add(5),await na(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ph.provider={build:()=>new Ph};/**
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
 */class Gf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ir("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const qr="FirestoreClient";class ZV{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=Tf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{te(qr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(te(qr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jf(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Tu(t,e){t.asyncQueue.verifyOperationInProgress(),te(qr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Fw(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Qm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eM(t);te(qr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Hm(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Hm(e.remoteStore,s))),t._onlineComponents=e}async function eM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(qr,"Using user provided OfflineComponentProvider");try{await Tu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;pi("Error using user provided cache. Falling back to memory cache: "+n),await Tu(t,new Pc)}}else te(qr,"Using default OfflineComponentProvider"),await Tu(t,new XV(void 0));return t._offlineComponents}async function nT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(qr,"Using user provided OnlineComponentProvider"),await Qm(t,t._uninitializedComponentsProvider._online)):(te(qr,"Using default OnlineComponentProvider"),await Qm(t,new Ph))),t._onlineComponents}function tM(t){return nT(t).then((e=>e.syncEngine))}async function kc(t){const e=await nT(t),n=e.eventManager;return n.onListen=UV.bind(null,e.syncEngine),n.onUnlisten=BV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$V.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HV.bind(null,e.syncEngine),n}function nM(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const h=new Gf({next:p=>{h.Nu(),o.enqueueAndForget((()=>Hf(i,d)));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new X(j.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&l&&l.source==="server"?u.reject(new X(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new Wf(cl(a.path),h,{includeMetadataChanges:!0,qa:!0});return Bf(i,d)})(await kc(t),t.asyncQueue,e,n,r))),r.promise}function rM(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const h=new Gf({next:p=>{h.Nu(),o.enqueueAndForget((()=>Hf(i,d))),p.fromCache&&l.source==="server"?u.reject(new X(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new Wf(a,h,{includeMetadataChanges:!0,qa:!0});return Bf(i,d)})(await kc(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function rT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ym=new Map;/**
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
 */const sT="firestore.googleapis.com",Jm=!0;class Xm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sT,this.ssl=Jm}else this.host=e.host,this.ssl=e.ssl??Jm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<MD)throw new X(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rT(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _l{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new lN;switch(r.type){case"firstParty":return new dN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Ym.get(n);r&&(te("ComponentProvider","Removing Datastore"),Ym.delete(n),r.terminate())})(this),Promise.resolve()}}function sM(t,e,n,r={}){t=Kt(t,_l);const s=Ai(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(Gv(`https://${a}`),Qv("Firestore",!0)),i.host!==sT&&i.host!==a&&pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:r};if(!ws(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Tt.MOCK_USER;else{u=wP(r.mockUserToken,t._app?.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new X(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Tt(d)}t._authCredentials=new uN(new KE(u,h))}}/**
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
 */class Ns{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ns(this.firestore,e,this._query)}}class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Xo(n,Ge._jsonSchema))return new Ge(e,r||null,new ae(xe.fromString(n.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:tt("string",Ge._jsonSchemaVersion),referencePath:tt("string")};class xr extends Ns{constructor(e,n,r){super(e,n,cl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new ae(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function IL(t,e,...n){if(t=Je(t),GE("collection","path",e),t instanceof _l){const r=xe.fromString(e,...n);return hm(r),new xr(t,null,r)}{if(!(t instanceof Ge||t instanceof xr))throw new X(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return hm(r),new xr(t.firestore,null,r)}}function iM(t,e,...n){if(t=Je(t),arguments.length===1&&(e=Tf.newId()),GE("doc","path",e),t instanceof _l){const r=xe.fromString(e,...n);return um(r),new Ge(t,null,new ae(r))}{if(!(t instanceof Ge||t instanceof xr))throw new X(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return um(r),new Ge(t.firestore,t instanceof xr?t.converter:null,new ae(r))}}/**
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
 */const Zm="AsyncQueue";class e_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new $w(this,"async_queue_retry"),this._c=()=>{const r=wu();r&&te(Zm,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=wu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=wu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Xn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Pi(e))throw e;te(Zm,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,ir("INTERNAL UNHANDLED ERROR: ",t_(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=$f.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&fe(47125,{Pc:t_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function t_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function n_(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Wr extends _l{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new e_,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new e_(e),this._firestoreClient=void 0,await e}}}function oM(t,e){const n=typeof t=="object"?t:ff(),r=typeof t=="string"?t:Ec,s=Ko(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vP("firestore");i&&sM(s,...i)}return s}function yl(t){if(t._terminated)throw new X(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||aM(t),t._firestoreClient}function aM(t){const e=t._freezeSettings(),n=(function(s,i,o,a){return new kN(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,rT(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new ZV(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
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
 */class Xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xt(_t.fromBase64String(e))}catch(n){throw new X(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xt(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xo(e,Xt._jsonSchema))return Xt.fromBase64String(e.bytes)}}Xt._jsonSchemaVersion="firestore/bytes/1.0",Xt._jsonSchema={type:tt("string",Xt._jsonSchemaVersion),bytes:tt("string")};/**
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
 */class vl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qf{constructor(e){this._methodName=e}}/**
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
 */class On{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:On._jsonSchemaVersion}}static fromJSON(e){if(Xo(e,On._jsonSchema))return new On(e.latitude,e.longitude)}}On._jsonSchemaVersion="firestore/geoPoint/1.0",On._jsonSchema={type:tt("string",On._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
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
 */class Nn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Nn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xo(e,Nn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Nn(e.vectorValues);throw new X(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nn._jsonSchemaVersion="firestore/vectorValue/1.0",Nn._jsonSchema={type:tt("string",Nn._jsonSchemaVersion),vectorValues:tt("object")};/**
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
 */const cM=/^__.*__$/;class lM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}class iT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function oT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ac:t})}}class Yf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Yf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Oc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(oT(this.Ac)&&cM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class uM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pl(e)}Cc(e,n,r,s=!1){return new Yf({Ac:e,methodName:n,Dc:r,path:gt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function El(t){const e=t._freezeSettings(),n=pl(t._databaseId);return new uM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aT(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Jf("Data must be an object, but it was:",o,r);const a=cT(r,o);let l,u;if(i.merge)l=new zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=kh(e,d,n);if(!o.contains(p))throw new X(j.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);uT(h,p)||h.push(p)}l=new zt(h),u=o.fieldTransforms.filter((d=>l.covers(d.field)))}else l=null,u=o.fieldTransforms;return new lM(new xt(a),l,u)}class wl extends Qf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wl}}function hM(t,e,n,r){const s=t.Cc(1,e,n);Jf("Data must be an object, but it was:",s,r);const i=[],o=xt.empty();Yr(r,((l,u)=>{const h=Xf(e,l,n);u=Je(u);const d=s.yc(h);if(u instanceof wl)i.push(h);else{const p=sa(u,d);p!=null&&(i.push(h),o.set(h,p))}}));const a=new zt(i);return new iT(o,a,s.fieldTransforms)}function fM(t,e,n,r,s,i){const o=t.Cc(1,e,n),a=[kh(e,r,n)],l=[s];if(i.length%2!=0)throw new X(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(kh(e,i[p])),l.push(i[p+1]);const u=[],h=xt.empty();for(let p=a.length-1;p>=0;--p)if(!uT(u,a[p])){const m=a[p];let E=l[p];E=Je(E);const A=o.yc(m);if(E instanceof wl)u.push(m);else{const O=sa(E,A);O!=null&&(u.push(m),h.set(m,O))}}const d=new zt(u);return new iT(h,d,o.fieldTransforms)}function dM(t,e,n,r=!1){return sa(n,t.Cc(r?4:3,e))}function sa(t,e){if(lT(t=Je(t)))return Jf("Unsupported field value:",e,t),cT(t,e);if(t instanceof Qf)return(function(r,s){if(!oT(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const a of r){let l=sa(a,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ZN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:Rc(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rc(s.serializer,i)}}if(r instanceof On)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xt)return{bytesValue:Pw(s.serializer,r._byteString)};if(r instanceof Ge){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Of(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Nn)return(function(o,a){return{mapValue:{fields:{[rw]:{stringValue:sw},[wc]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return Cf(a.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${sl(r)}`)})(t,e)}function cT(t,e){const n={};return JE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yr(t,((r,s)=>{const i=sa(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function lT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof On||t instanceof Xt||t instanceof Ge||t instanceof Qf||t instanceof Nn)}function Jf(t,e,n){if(!lT(n)||!QE(n)){const r=sl(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function kh(t,e,n){if((e=Je(e))instanceof vl)return e._internalPath;if(typeof e=="string")return Xf(t,e);throw Oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const pM=new RegExp("[~\\*/\\[\\]]");function Xf(t,e,n){if(e.search(pM)>=0)throw Oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vl(...e.split("."))._internalPath}catch{throw Oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(j.INVALID_ARGUMENT,a+t+l)}function uT(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class hT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gM extends hT{data(){return super.data()}}function Zf(t,e){return typeof e=="string"?Xf(t,e):e instanceof vl?e._internalPath:e._delegate._internalPath}/**
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
 */function fT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ed{}class mM extends ed{}function AL(t,e,...n){let r=[];e instanceof ed&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof td)).length,a=i.filter((l=>l instanceof Tl)).length;if(o>1||o>0&&a>0)throw new X(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Tl extends mM{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Tl(e,n,r)}_apply(e){const n=this._parse(e);return dT(e._query,n),new Ns(e.firestore,e.converter,vh(e._query,n))}_parse(e){const n=El(e.firestore);return(function(i,o,a,l,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new X(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){s_(d,h);const E=[];for(const A of d)E.push(r_(l,i,A));p={arrayValue:{values:E}}}else p=r_(l,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||s_(d,h),p=dM(a,o,d,h==="in"||h==="not-in");return et.create(u,h,p)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function bL(t,e,n){const r=e,s=Zf("where",t);return Tl._create(s,r,n)}class td extends ed{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new td(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:mn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)dT(o,l),o=vh(o,l)})(e._query,n),new Ns(e.firestore,e.converter,vh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function r_(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new X(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fw(e)&&n.indexOf("/")!==-1)throw new X(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!ae.isDocumentKey(r))throw new X(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vm(t,new ae(r))}if(n instanceof Ge)return vm(t,n._key);throw new X(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sl(n)}.`)}function s_(t,e){if(!Array.isArray(t)||t.length===0)throw new X(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dT(t,e){const n=(function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new X(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class _M{convertValue(e,n="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Yr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[wc].arrayValue?.values?.map((r=>Ye(r.doubleValue)));return new Nn(n)}convertGeoPoint(e){return new On(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=al(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Mo(e));default:return null}}convertTimestamp(e){const n=$r(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);ke(Mw(r),9688,{name:e});const s=new xo(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||ir(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function pT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ms extends hT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Zf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ms._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ms._jsonSchemaVersion="firestore/documentSnapshot/1.0",ms._jsonSchema={type:tt("string",ms._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class Ka extends ms{data(e={}){return super.data(e)}}class _s{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ro(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Ka(this._firestore,this._userDataWriter,r.key,r,new ro(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const l=new Ka(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ro(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const l=new Ka(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ro(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:yM(a.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_s._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Tf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function yM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:t})}}/**
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
 */function RL(t){t=Kt(t,Ge);const e=Kt(t.firestore,Wr);return nM(yl(e),t._key).then((n=>gT(e,t,n)))}_s._jsonSchemaVersion="firestore/querySnapshot/1.0",_s._jsonSchema={type:tt("string",_s._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};class nd extends _M{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function SL(t){t=Kt(t,Ns);const e=Kt(t.firestore,Wr),n=yl(e),r=new nd(e);return fT(t._query),rM(n,t._query).then((s=>new _s(e,r,t,s)))}function CL(t,e,n){t=Kt(t,Ge);const r=Kt(t.firestore,Wr),s=pT(t.converter,e);return rd(r,[aT(El(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,un.none())])}function PL(t,e,n,...r){t=Kt(t,Ge);const s=Kt(t.firestore,Wr),i=El(s);let o;return o=typeof(e=Je(e))=="string"||e instanceof vl?fM(i,"updateDoc",t._key,e,n,r):hM(i,"updateDoc",t._key,e),rd(s,[o.toMutation(t._key,un.exists(!0))])}function kL(t,e){const n=Kt(t.firestore,Wr),r=iM(t),s=pT(t.converter,e);return rd(n,[aT(El(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,un.exists(!1))]).then((()=>r))}function OL(t,...e){t=Je(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||n_(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(n_(e[r])){const l=e[r];e[r]=l.next?.bind(l),e[r+1]=l.error?.bind(l),e[r+2]=l.complete?.bind(l)}let i,o,a;if(t instanceof Ge)o=Kt(t.firestore,Wr),a=cl(t._key.path),i={next:l=>{e[r]&&e[r](gT(o,t,l))},error:e[r+1],complete:e[r+2]};else{const l=Kt(t,Ns);o=Kt(l.firestore,Wr),a=l._query;const u=new nd(o);i={next:h=>{e[r]&&e[r](new _s(o,u,l,h))},error:e[r+1],complete:e[r+2]},fT(t._query)}return(function(u,h,d,p){const m=new Gf(p),E=new Wf(h,m,d);return u.asyncQueue.enqueueAndForget((async()=>Bf(await kc(u),E))),()=>{m.Nu(),u.asyncQueue.enqueueAndForget((async()=>Hf(await kc(u),E)))}})(yl(o),a,s,i)}function rd(t,e){return(function(r,s){const i=new Xn;return r.asyncQueue.enqueueAndForget((async()=>qV(await tM(r),s,i))),i.promise})(yl(t),e)}function gT(t,e,n){const r=n.docs.get(e._key),s=new nd(t);return new ms(t,s,e._key,r,new ro(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Si=s})(bi),Vn(new pn("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Wr(new hN(r.getProvider("auth-internal")),new pN(o,r.getProvider("app-check-internal")),(function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xo(u.options.projectId,h)})(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),tn(om,am,e),tn(om,am,"esm2020")})();const mT="@firebase/installations",sd="0.6.19";/**
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
 */const _T=1e4,yT=`w:${sd}`,vT="FIS_v2",vM="https://firebaseinstallations.googleapis.com/v1",EM=3600*1e3,wM="installations",TM="Installations";/**
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
 */const IM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Rs=new Cs(wM,TM,IM);function ET(t){return t instanceof yn&&t.code.includes("request-failed")}/**
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
 */function wT({projectId:t}){return`${vM}/projects/${t}/installations`}function TT(t){return{token:t.token,requestStatus:2,expiresIn:bM(t.expiresIn),creationTime:Date.now()}}async function IT(t,e){const r=(await e.json()).error;return Rs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function AT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function AM(t,{refreshToken:e}){const n=AT(t);return n.append("Authorization",RM(e)),n}async function bT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function bM(t){return Number(t.replace("s","000"))}function RM(t){return`${vT} ${t}`}/**
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
 */async function SM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=wT(t),s=AT(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:vT,appId:t.appId,sdkVersion:yT},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await bT(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:TT(u.authToken)}}else throw await IT("Create Installation",l)}/**
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
 */function RT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function CM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const PM=/^[cdef][\w-]{21}$/,Oh="";function kM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=OM(t);return PM.test(n)?n:Oh}catch{return Oh}}function OM(t){return CM(t).substr(0,22)}/**
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
 */function Il(t){return`${t.appName}!${t.appId}`}/**
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
 */const ST=new Map;function CT(t,e){const n=Il(t);PT(n,e),NM(n,e)}function PT(t,e){const n=ST.get(t);if(n)for(const r of n)r(e)}function NM(t,e){const n=DM();n&&n.postMessage({key:t,fid:e}),VM()}let hs=null;function DM(){return!hs&&"BroadcastChannel"in self&&(hs=new BroadcastChannel("[Firebase] FID Change"),hs.onmessage=t=>{PT(t.data.key,t.data.fid)}),hs}function VM(){ST.size===0&&hs&&(hs.close(),hs=null)}/**
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
 */const MM="firebase-installations-database",xM=1,Ss="firebase-installations-store";let Iu=null;function id(){return Iu||(Iu=tE(MM,xM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ss)}}})),Iu}async function Nc(t,e){const n=Il(t),s=(await id()).transaction(Ss,"readwrite"),i=s.objectStore(Ss),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&CT(t,e.fid),e}async function kT(t){const e=Il(t),r=(await id()).transaction(Ss,"readwrite");await r.objectStore(Ss).delete(e),await r.done}async function Al(t,e){const n=Il(t),s=(await id()).transaction(Ss,"readwrite"),i=s.objectStore(Ss),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&CT(t,a.fid),a}/**
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
 */async function od(t){let e;const n=await Al(t.appConfig,r=>{const s=LM(r),i=FM(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Oh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function LM(t){const e=t||{fid:kM(),registrationStatus:0};return OT(e)}function FM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Rs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=UM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$M(t)}:{installationEntry:e}}async function UM(t,e){try{const n=await SM(t,e);return Nc(t.appConfig,n)}catch(n){throw ET(n)&&n.customData.serverCode===409?await kT(t.appConfig):await Nc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function $M(t){let e=await i_(t.appConfig);for(;e.registrationStatus===1;)await RT(100),e=await i_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await od(t);return r||n}return e}function i_(t){return Al(t,e=>{if(!e)throw Rs.create("installation-not-found");return OT(e)})}function OT(t){return jM(t)?{fid:t.fid,registrationStatus:0}:t}function jM(t){return t.registrationStatus===1&&t.registrationTime+_T<Date.now()}/**
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
 */async function BM({appConfig:t,heartbeatServiceProvider:e},n){const r=HM(t,n),s=AM(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:yT,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await bT(()=>fetch(r,a));if(l.ok){const u=await l.json();return TT(u)}else throw await IT("Generate Auth Token",l)}function HM(t,{fid:e}){return`${wT(t)}/${e}/authTokens:generate`}/**
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
 */async function ad(t,e=!1){let n;const r=await Al(t.appConfig,i=>{if(!NT(i))throw Rs.create("not-registered");const o=i.authToken;if(!e&&zM(o))return i;if(o.requestStatus===1)return n=qM(t,e),i;{if(!navigator.onLine)throw Rs.create("app-offline");const a=GM(i);return n=WM(t,a),a}});return n?await n:r.authToken}async function qM(t,e){let n=await o_(t.appConfig);for(;n.authToken.requestStatus===1;)await RT(100),n=await o_(t.appConfig);const r=n.authToken;return r.requestStatus===0?ad(t,e):r}function o_(t){return Al(t,e=>{if(!NT(e))throw Rs.create("not-registered");const n=e.authToken;return QM(n)?{...e,authToken:{requestStatus:0}}:e})}async function WM(t,e){try{const n=await BM(t,e),r={...e,authToken:n};return await Nc(t.appConfig,r),n}catch(n){if(ET(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kT(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Nc(t.appConfig,r)}throw n}}function NT(t){return t!==void 0&&t.registrationStatus===2}function zM(t){return t.requestStatus===2&&!KM(t)}function KM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+EM}function GM(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function QM(t){return t.requestStatus===1&&t.requestTime+_T<Date.now()}/**
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
 */async function YM(t){const e=t,{installationEntry:n,registrationPromise:r}=await od(e);return r?r.catch(console.error):ad(e).catch(console.error),n.fid}/**
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
 */async function JM(t,e=!1){const n=t;return await XM(n),(await ad(n,e)).token}async function XM(t){const{registrationPromise:e}=await od(t);e&&await e}/**
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
 */function ZM(t){if(!t||!t.options)throw Au("App Configuration");if(!t.name)throw Au("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Au(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Au(t){return Rs.create("missing-app-config-values",{valueName:t})}/**
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
 */const DT="installations",ex="installations-internal",tx=t=>{const e=t.getProvider("app").getImmediate(),n=ZM(e),r=Ko(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},nx=t=>{const e=t.getProvider("app").getImmediate(),n=Ko(e,DT).getImmediate();return{getId:()=>YM(n),getToken:s=>JM(n,s)}};function rx(){Vn(new pn(DT,tx,"PUBLIC")),Vn(new pn(ex,nx,"PRIVATE"))}rx();tn(mT,sd);tn(mT,sd,"esm2020");/**
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
 */const a_="analytics",sx="firebase_id",ix="origin",ox=60*1e3,ax="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cd="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ut=new el("@firebase/analytics");/**
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
 */const cx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nn=new Cs("analytics","Analytics",cx);/**
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
 */function lx(t){if(!t.startsWith(cd)){const e=nn.create("invalid-gtag-resource",{gtagURL:t});return Ut.warn(e.message),""}return t}function VT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ux(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function hx(t,e){const n=ux("firebase-js-sdk-policy",{createScriptURL:lx}),r=document.createElement("script"),s=`${cd}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function fx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function dx(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await VT(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(a){Ut.error(a)}t("config",s,i)}async function px(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await VT(n);for(const l of o){const u=a.find(d=>d.measurementId===l),h=u&&e[u.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ut.error(i)}}function gx(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await px(t,e,n,a,l)}else if(i==="config"){const[a,l]=o;await dx(t,e,n,r,a,l)}else if(i==="consent"){const[a,l]=o;t("consent",a,l)}else if(i==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Ut.error(a)}}return s}function mx(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=gx(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function _x(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(cd)&&n.src.includes(t))return n;return null}/**
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
 */const yx=30,vx=1e3;class Ex{constructor(e={},n=vx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const MT=new Ex;function wx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Tx(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:wx(n)},s=ax.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const a=await i.json();a.error?.message&&(o=a.error.message)}catch{}throw nn.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function Ix(t,e=MT,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw nn.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw nn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Rx;return setTimeout(async()=>{a.abort()},ox),xT({appId:r,apiKey:s,measurementId:i},o,a,e)}async function xT(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=MT){const{appId:i,measurementId:o}=t;try{await Ax(r,e)}catch(a){if(o)return Ut.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:i,measurementId:o};throw a}try{const a=await Tx(t);return s.deleteThrottleMetadata(i),a}catch(a){const l=a;if(!bx(l)){if(s.deleteThrottleMetadata(i),o)return Ut.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw a}const u=Number(l?.customData?.httpStatus)===503?Og(n,s.intervalMillis,yx):Og(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(i,h),Ut.debug(`Calling attemptFetch again in ${u} millis`),xT(t,h,r,s)}}function Ax(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(nn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bx(t){if(!(t instanceof yn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Rx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Sx(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
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
 */async function Cx(){if(Jv())try{await Xv()}catch(t){return Ut.warn(nn.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Ut.warn(nn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Px(t,e,n,r,s,i,o){const a=Ix(t);a.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ut.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ut.error(p)),e.push(a);const l=Cx().then(p=>{if(p)return r.getId()}),[u,h]=await Promise.all([a,l]);_x(i)||hx(i,u.measurementId),s("js",new Date);const d=o?.config??{};return d[ix]="firebase",d.update=!0,h!=null&&(d[sx]=h),s("config",u.measurementId,d),u.measurementId}/**
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
 */class kx{constructor(e){this.app=e}_delete(){return delete Eo[this.app.options.appId],Promise.resolve()}}let Eo={},c_=[];const l_={};let bu="dataLayer",Ox="gtag",u_,LT,h_=!1;function Nx(){const t=[];if(Yv()&&t.push("This is a browser extension environment."),kP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=nn.create("invalid-analytics-context",{errorInfo:e});Ut.warn(n.message)}}function Dx(t,e,n){Nx();const r=t.options.appId;if(!r)throw nn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ut.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw nn.create("no-api-key");if(Eo[r]!=null)throw nn.create("already-exists",{id:r});if(!h_){fx(bu);const{wrappedGtag:i,gtagCore:o}=mx(Eo,c_,l_,bu,Ox);LT=i,u_=o,h_=!0}return Eo[r]=Px(t,c_,l_,e,u_,bu,n),new kx(t)}function Vx(t,e,n,r){t=Je(t),Sx(LT,Eo[t.app.options.appId],e,n,r).catch(s=>Ut.error(s))}const f_="@firebase/analytics",d_="0.10.18";function Mx(){Vn(new pn(a_,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Dx(r,s,n)},"PUBLIC")),Vn(new pn("analytics-internal",t,"PRIVATE")),tn(f_,d_),tn(f_,d_,"esm2020");function t(e){try{const n=e.getProvider(a_).getImmediate();return{logEvent:(r,s,i)=>Vx(n,r,s,i)}}catch(n){throw nn.create("interop-component-reg-failed",{reason:n})}}}Mx();const xx=$t(t=>{const e=nr().public,n={apiKey:e.FB_API_KEY,authDomain:e.FB_AUTH_DOMAIN,projectId:e.FB_PROJECT_ID,storageBucket:e.FB_STORAGE_BUCKET,messagingSenderId:e.FB_MESSAGING_SENDER_ID,appId:e.FB_APP_ID,measurementId:e.FB_MEASUREMENT_ID},r=Uk().length?ff():nE(n),s=oM(r),i=aN(r);return Q1(i,OE).then(()=>{console.log("Persistence mode set to local.")}).catch(o=>{console.error("Error setting persistence mode:",o)}),{provide:{auth:i,db:s}}}),Lx=[YS,XS,r0,bC,SC,CC,PC,OC,XC,ZC,eP,aP,uP,xx],FT=(t="RouteProvider")=>_n({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,r=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>n===e.renderKey?e.route[i]:r[i],enumerable:!0});return Nr(Es,bn(s)),()=>e.vnode?Ke(e.vnode,{ref:e.vnodeRef}):e.vnode}}),Fx=FT(),p_=new WeakMap,Ux=_n({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Ue(),i=Ft(),o=Rt(Es,null);let a;r({pageRef:i});const l=Rt(ov,null);let u;const h=s.deferHydration();if(s.isHydrating){const p=s.hooks.hookOnce("app:error",h);St().beforeEach(p)}t.pageKey&&ln(()=>t.pageKey,(p,m)=>{p!==m&&s.callHook("page:loading:start")});let d=!1;{const p=St().beforeResolve(()=>{d=!1});Ii(()=>{p()})}return()=>Ke(Nv,{name:t.name,route:t.route,...e},{default:p=>{const m=jx(o,p.route,p.Component),E=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!E)return u;h();return}if(u&&l&&!l.isCurrent(p.route))return u;if(m&&o&&(!l||l?.isCurrent(o)))return E?u:null;const A=th(p,t.pageKey),O=Bx(o,p.route,p.Component);!s.isHydrating&&a===A&&!O&&Dn(()=>{d=!0,s.callHook("page:loading:end")}),a=A;const V=!!(t.transition??p.route.meta.pageTransition??$p),N=V&&$x([t.transition,p.route.meta.pageTransition,$p,{onAfterLeave(){delete s._runningTransition,s.callHook("page:transition:finish",p.Component)}}]),w=t.keepalive??p.route.meta.keepalive??HR;return u=Vv(V&&N,uC(w,Ke(Jh,{suspensible:!0,onPending:()=>{V&&(s._runningTransition=!0),s.callHook("page:start",p.Component)},onResolve:()=>{Dn(()=>s.callHook("page:finish",p.Component).then(()=>{if(delete s._runningTransition,!d&&!O)return d=!0,s.callHook("page:loading:end")}).finally(h))}},{default:()=>{const k={key:A||void 0,vnode:n.default?Hx(n.default,p):p.Component,route:p.route,renderKey:A||void 0,trackRootNodes:V,vnodeRef:i};if(!w)return Ke(Fx,k);const D=p.Component.type,F=D;let b=p_.get(F);return b||(b=FT(D.name||D.__name),p_.set(F,b)),Ke(b,k)}}))).default(),u}})}});function $x(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?lf(n.onAfterLeave):void 0}));return sv(...e)}function jx(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>s.components?.default===n?.type);return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>s.components?.default!==t.matched[i]?.components?.default)||n&&th({route:e,Component:n})!==th({route:t,Component:n})}function Bx(t,e,n){return t?e.matched.findIndex(s=>s.components?.default===n?.type)<e.matched.length-1:!1}function Hx(t,e){const n=t(e);return n.length===1?Ke(n[0]):Ke(At,void 0,n)}const qx=_n({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>Ke(Pr[t.name],t.layoutProps,e.slots)}}),Wx={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},zx=_n({name:"NuxtLayout",inheritAttrs:!1,props:Wx,setup(t,e){const n=Ue(),r=Rt(Es),i=!r||r===Gc()?Dv():r,o=ze(()=>{let h=We(t.name)??i?.meta.layout??"default";return h&&!(h in Pr)&&t.fallback&&(h=We(t.fallback)),h}),a=Lr();e.expose({layoutRef:a});const l=n.deferHydration();if(n.isHydrating){const h=n.hooks.hookOnce("app:error",l);St().beforeEach(h)}let u;return()=>{const h=o.value&&o.value in Pr,d=i?.meta.layoutTransition??BR,p=u;return u=o.value,Vv(h&&d,{default:()=>Ke(Jh,{suspensible:!0,onResolve:()=>{Dn(l)}},{default:()=>Ke(Kx,{layoutProps:My(e.attrs,{ref:a}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:m=>m!==p&&m===o.value,hasTransition:!!d},e.slots)})}).default()}}}),Kx=_n({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&Nr(ov,{isCurrent:i=>n===(i.meta.layout??"default")});const r=Rt(Es);if(r&&r===Gc()){const i=Dv(),o={};for(const a in i){const l=a;Object.defineProperty(o,l,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?i[l]:r[l]})}Nr(Es,bn(o))}return()=>!n||typeof n=="string"&&!(n in Pr)?e.slots.default?.():Ke(qx,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}),Gx={__name:"app",setup(t){{Fr(async()=>{await Dn();const n=console.warn;console.warn=(...r)=>{r[0]?.includes?.('Slot "default" invoked outside')?(console.groupCollapsed("🕳️ Slot Warning Trace"),n(...r),console.trace("Origin of slot misuse:"),console.groupEnd()):n(...r)}});const e=Element.prototype.setAttribute;Element.prototype.setAttribute=function(n,r){try{return e.call(this,n,r)}catch(s){throw console.error("❌ Failed setAttribute:",n,"value:",r,"on element",this),s}}}return(e,n)=>{const r=Ux,s=zx;return qt(),Wc("div",null,[je(s,null,{default:$c(()=>[je(r)]),_:1})])}}},Qx=()=>Lv("color-mode").value,Yx=["src"],Jx=_n({__name:"Logo.client",setup(t){const e=Qx(),n=Ft(!0);function r(){window.innerWidth<768?n.value=window.scrollY===0:n.value=!0}Fr(()=>{window.addEventListener("scroll",r)}),Ii(()=>{window.removeEventListener("scroll",r)});const s=ze(()=>e.value==="dark"?"/images/mchepa_night_v1.png":"/images/mchepa_light_v1.png");return(i,o)=>{const a=GC;return qt(),Wc("div",{class:Lc(["justify-center py-2 flex transition-all duration-300 overflow-hidden md:max-h-full md:opacity-100",We(n)?"opacity-100":"max-h-0 opacity-0"])},[je(a,{to:"/",class:"inline-flex items-center gap-2"},{default:$c(()=>[bo("img",{src:We(s),alt:"Logo",class:"object-contain h-20 md:h-26"},null,8,Yx)]),_:1})],2)}}}),Xx=Object.assign(Jx,{__name:"AppLogo"}),Zx=VC(Xx),eL={class:"flex flex-col justfy-center items-center"},tL=_n({__name:"error",props:{error:Object},setup(t){const e=()=>cv({redirect:"/"});return(n,r)=>{const s=Zx;return qt(),Wc("div",eL,[je(s),bo("h2",null,A_(t.error?.statusCode),1),bo("button",{onClick:e},"Clear errors")])}}}),nL={key:0},g_={__name:"nuxt-root",setup(t){const e=()=>null,n=Ue(),r=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",r);St().beforeEach(u)}const s=!1;Nr(Es,Gc()),n.hooks.callHookWith(u=>u.map(h=>h()),"vue:setup");const i=Qc(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;oy((u,h,d)=>{if(n.hooks.callHook("vue:error",u,h,d).catch(p=>console.error("[nuxt] Error in `vue:error` hook",p)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(lv(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>cs(u)),!1});const l=!1;return(u,h)=>(qt(),Ir(Jh,{onResolve:We(r)},{default:$c(()=>[We(o)?(qt(),Wc("div",nL)):We(i)?(qt(),Ir(We(tL),{key:1,error:We(i)},null,8,["error"])):We(l)?(qt(),Ir(We(e),{key:2,context:We(l)},null,8,["context"])):We(s)?(qt(),Ir(gA(We(s)),{key:3})):(qt(),Ir(We(Gx),{key:4}))]),_:1},8,["onResolve"]))}};let m_;{let t;m_=async function(){if(t)return t;const n=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true"),r=n?Fb(g_):Lb(g_),s=GR({vueApp:r});async function i(o){await s.callHook("app:error",o),s.payload.error||=gs(o)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)}),!n&&jp.id&&s.hook("app:suspense:resolve",()=>{document.getElementById(jp.id)?.remove()});try{await JR(s,Lx)}catch(o){i(o)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(WR),await s.hooks.callHook("app:mounted",r),await Dn()}catch(o){i(o)}return r},t=m_().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{wL as $,Lc as A,je as B,$c as C,Vy as D,sL as E,At as F,pL as G,$e as H,Jy as I,JA as J,xh as K,fL as L,lL as M,cL as N,dL as O,Gc as P,mL as Q,ti as R,iM as S,PL as T,RL as U,CL as V,iy as W,j_ as X,EL as Y,Kr as Z,GC as _,Wc as a,vL as a0,yL as a1,oL as a2,VC as a3,Xx as a4,Qx as a5,Dn as a6,Bo as a7,Qa as a8,W_ as a9,q_ as aa,Lr as ab,rL as ac,_L as ad,qt as b,ze as c,bo as d,Ue as e,Lv as f,kL as g,IL as h,OL as i,SL as j,_n as k,gL as l,hL as m,cS as n,Fr as o,We as p,AL as q,iL as r,Ir as s,A_ as t,nr as u,aL as v,bL as w,uL as x,Ft as y,ln as z};
