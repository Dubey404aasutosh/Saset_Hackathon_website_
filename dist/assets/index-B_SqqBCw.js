(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=a(c);fetch(c.href,f)}})();function j0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Wd={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function iM(){if(Ov)return il;Ov=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:s,key:d,ref:c!==void 0?c:null,props:f}}return il.Fragment=n,il.jsx=a,il.jsxs=a,il}var Pv;function aM(){return Pv||(Pv=1,Wd.exports=iM()),Wd.exports}var U=aM(),Zd={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function rM(){if(zv)return se;zv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),M=Symbol.iterator;function A(b){return b===null||typeof b!="object"?null:(b=M&&b[M]||b["@@iterator"],typeof b=="function"?b:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,x={};function H(b,G,st){this.props=b,this.context=G,this.refs=x,this.updater=st||w}H.prototype.isReactComponent={},H.prototype.setState=function(b,G){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,G,"setState")},H.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function B(){}B.prototype=H.prototype;function D(b,G,st){this.props=b,this.context=G,this.refs=x,this.updater=st||w}var W=D.prototype=new B;W.constructor=D,S(W,H.prototype),W.isPureReactComponent=!0;var X=Array.isArray;function z(){}var q={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function C(b,G,st){var $=st.ref;return{$$typeof:o,type:b,key:G,ref:$!==void 0?$:null,props:st}}function k(b,G){return C(b.type,G,b.props)}function ht(b){return typeof b=="object"&&b!==null&&b.$$typeof===o}function ut(b){var G={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(st){return G[st]})}var yt=/\/+/g;function gt(b,G){return typeof b=="object"&&b!==null&&b.key!=null?ut(""+b.key):G.toString(36)}function Z(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(z,z):(b.status="pending",b.then(function(G){b.status==="pending"&&(b.status="fulfilled",b.value=G)},function(G){b.status==="pending"&&(b.status="rejected",b.reason=G)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function lt(b,G,st,$,vt){var Dt=typeof b;(Dt==="undefined"||Dt==="boolean")&&(b=null);var bt=!1;if(b===null)bt=!0;else switch(Dt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(b.$$typeof){case o:case n:bt=!0;break;case v:return bt=b._init,lt(bt(b._payload),G,st,$,vt)}}if(bt)return vt=vt(b),bt=$===""?"."+gt(b,0):$,X(vt)?(st="",bt!=null&&(st=bt.replace(yt,"$&/")+"/"),lt(vt,G,st,"",function(Zt){return Zt})):vt!=null&&(ht(vt)&&(vt=k(vt,st+(vt.key==null||b&&b.key===vt.key?"":(""+vt.key).replace(yt,"$&/")+"/")+bt)),G.push(vt)),1;bt=0;var Mt=$===""?".":$+":";if(X(b))for(var wt=0;wt<b.length;wt++)$=b[wt],Dt=Mt+gt($,wt),bt+=lt($,G,st,Dt,vt);else if(wt=A(b),typeof wt=="function")for(b=wt.call(b),wt=0;!($=b.next()).done;)$=$.value,Dt=Mt+gt($,wt++),bt+=lt($,G,st,Dt,vt);else if(Dt==="object"){if(typeof b.then=="function")return lt(Z(b),G,st,$,vt);throw G=String(b),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return bt}function et(b,G,st){if(b==null)return b;var $=[],vt=0;return lt(b,$,"","",function(Dt){return G.call(st,Dt,vt++)}),$}function Tt(b){if(b._status===-1){var G=b._result,st=G();st.then(function($){(b._status===0||b._status===-1)&&(b._status=1,b._result=$,st.status===void 0&&(st.status="fulfilled",st.value=$))},function($){(b._status===0||b._status===-1)&&(b._status=2,b._result=$,st.status===void 0&&(st.status="rejected",st.reason=$))}),b._status===-1&&(b._status=0,b._result=st)}if(b._status===1)return b._result.default;throw b._result}var F=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function P(b){var G=q.T,st={};st.types=G!==null?G.types:null,q.T=st;try{var $=b(),vt=q.S;vt!==null&&vt(st,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(z,F)}catch(Dt){F(Dt)}finally{G!==null&&st.types!==null&&(G.types=st.types),q.T=G}}function At(b){var G=q.T;if(G!==null){var st=G.types;st===null?G.types=[b]:st.indexOf(b)===-1&&st.push(b)}else P(At.bind(null,b))}var Ot={map:et,forEach:function(b,G,st){et(b,function(){G.apply(this,arguments)},st)},count:function(b){var G=0;return et(b,function(){G++}),G},toArray:function(b){return et(b,function(G){return G})||[]},only:function(b){if(!ht(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return se.Activity=m,se.Children=Ot,se.Component=H,se.Fragment=a,se.Profiler=c,se.PureComponent=D,se.StrictMode=s,se.Suspense=p,se.ViewTransition=y,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,se.__COMPILER_RUNTIME={__proto__:null,c:function(b){return q.H.useMemoCache(b)}},se.addTransitionType=At,se.cache=function(b){return function(){return b.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(b,G,st){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var $=S({},b.props),vt=b.key;if(G!=null)for(Dt in G.key!==void 0&&(vt=""+G.key),G)!N.call(G,Dt)||Dt==="key"||Dt==="__self"||Dt==="__source"||Dt==="ref"&&G.ref===void 0||($[Dt]=G[Dt]);var Dt=arguments.length-2;if(Dt===1)$.children=st;else if(1<Dt){for(var bt=Array(Dt),Mt=0;Mt<Dt;Mt++)bt[Mt]=arguments[Mt+2];$.children=bt}return C(b.type,vt,$)},se.createContext=function(b){return b={$$typeof:d,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:f,_context:b},b},se.createElement=function(b,G,st){var $,vt={},Dt=null;if(G!=null)for($ in G.key!==void 0&&(Dt=""+G.key),G)N.call(G,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(vt[$]=G[$]);var bt=arguments.length-2;if(bt===1)vt.children=st;else if(1<bt){for(var Mt=Array(bt),wt=0;wt<bt;wt++)Mt[wt]=arguments[wt+2];vt.children=Mt}if(b&&b.defaultProps)for($ in bt=b.defaultProps,bt)vt[$]===void 0&&(vt[$]=bt[$]);return C(b,Dt,vt)},se.createRef=function(){return{current:null}},se.forwardRef=function(b){return{$$typeof:h,render:b}},se.isValidElement=ht,se.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:Tt}},se.memo=function(b,G){return{$$typeof:_,type:b,compare:G===void 0?null:G}},se.startTransition=P,se.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},se.use=function(b){return q.H.use(b)},se.useActionState=function(b,G,st){return q.H.useActionState(b,G,st)},se.useCallback=function(b,G){return q.H.useCallback(b,G)},se.useContext=function(b){return q.H.useContext(b)},se.useDebugValue=function(){},se.useDeferredValue=function(b,G){return q.H.useDeferredValue(b,G)},se.useEffect=function(b,G){return q.H.useEffect(b,G)},se.useEffectEvent=function(b){return q.H.useEffectEvent(b)},se.useId=function(){return q.H.useId()},se.useImperativeHandle=function(b,G,st){return q.H.useImperativeHandle(b,G,st)},se.useInsertionEffect=function(b,G){return q.H.useInsertionEffect(b,G)},se.useLayoutEffect=function(b,G){return q.H.useLayoutEffect(b,G)},se.useMemo=function(b,G){return q.H.useMemo(b,G)},se.useOptimistic=function(b,G){return q.H.useOptimistic(b,G)},se.useReducer=function(b,G,st){return q.H.useReducer(b,G,st)},se.useRef=function(b){return q.H.useRef(b)},se.useState=function(b){return q.H.useState(b)},se.useSyncExternalStore=function(b,G,st){return q.H.useSyncExternalStore(b,G,st)},se.useTransition=function(){return q.H.useTransition()},se.version="19.3.1",se}var Iv;function mp(){return Iv||(Iv=1,Zd.exports=rM()),Zd.exports}var $e=mp();const q0=j0($e);var Kd={exports:{}},al={},Qd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function sM(){return Bv||(Bv=1,(function(o){function n(Z,lt){var et=Z.length;Z.push(lt);t:for(;0<et;){var Tt=et-1>>>1,F=Z[Tt];if(0<c(F,lt))Z[Tt]=lt,Z[et]=F,et=Tt;else break t}}function a(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var lt=Z[0],et=Z.pop();if(et!==lt){Z[0]=et;t:for(var Tt=0,F=Z.length,P=F>>>1;Tt<P;){var At=2*(Tt+1)-1,Ot=Z[At],b=At+1,G=Z[b];if(0>c(Ot,et))b<F&&0>c(G,Ot)?(Z[Tt]=G,Z[b]=et,Tt=b):(Z[Tt]=Ot,Z[At]=et,Tt=At);else if(b<F&&0>c(G,et))Z[Tt]=G,Z[b]=et,Tt=b;else break t}}return lt}function c(Z,lt){var et=Z.sortIndex-lt.sortIndex;return et!==0?et:Z.id-lt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],_=[],v=1,m=null,y=3,M=!1,A=!1,w=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function D(Z){for(var lt=a(_);lt!==null;){if(lt.callback===null)s(_);else if(lt.startTime<=Z)s(_),lt.sortIndex=lt.expirationTime,n(p,lt);else break;lt=a(_)}}function W(Z){if(w=!1,D(Z),!A)if(a(p)!==null)A=!0,X||(X=!0,ht());else{var lt=a(_);lt!==null&&gt(W,lt.startTime-Z)}}var X=!1,z=-1,q=5,N=-1;function C(){return S?!0:!(o.unstable_now()-N<q)}function k(){if(S=!1,X){var Z=o.unstable_now();N=Z;var lt=!0;try{t:{A=!1,w&&(w=!1,H(z),z=-1),M=!0;var et=y;try{e:{for(D(Z),m=a(p);m!==null&&!(m.expirationTime>Z&&C());){var Tt=m.callback;if(typeof Tt=="function"){m.callback=null,y=m.priorityLevel;var F=Tt(m.expirationTime<=Z);if(Z=o.unstable_now(),typeof F=="function"){m.callback=F,D(Z),lt=!0;break e}m===a(p)&&s(p),D(Z)}else s(p);m=a(p)}if(m!==null)lt=!0;else{var P=a(_);P!==null&&gt(W,P.startTime-Z),lt=!1}}break t}finally{m=null,y=et,M=!1}lt=void 0}}finally{lt?ht():X=!1}}}var ht;if(typeof B=="function")ht=function(){B(k)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,yt=ut.port2;ut.port1.onmessage=k,ht=function(){yt.postMessage(null)}}else ht=function(){x(k,0)};function gt(Z,lt){z=x(function(){Z(o.unstable_now())},lt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Z){Z.callback=null},o.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<Z?Math.floor(1e3/Z):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(Z){switch(y){case 1:case 2:case 3:var lt=3;break;default:lt=y}var et=y;y=lt;try{return Z()}finally{y=et}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(Z,lt){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var et=y;y=Z;try{return lt()}finally{y=et}},o.unstable_scheduleCallback=function(Z,lt,et){var Tt=o.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?Tt+et:Tt):et=Tt,Z){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=et+F,Z={id:v++,callback:lt,priorityLevel:Z,startTime:et,expirationTime:F,sortIndex:-1},et>Tt?(Z.sortIndex=et,n(_,Z),a(p)===null&&Z===a(_)&&(w?(H(z),z=-1):w=!0,gt(W,et-Tt))):(Z.sortIndex=F,n(p,Z),A||M||(A=!0,X||(X=!0,ht()))),Z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(Z){var lt=y;return function(){var et=y;y=lt;try{return Z.apply(this,arguments)}finally{y=et}}}})(Jd)),Jd}var Fv;function oM(){return Fv||(Fv=1,Qd.exports=sM()),Qd.exports}var $d={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function lM(){if(Hv)return Dn;Hv=1;var o=mp();function n(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(v,m,y){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:M==null?null:M===d?d:""+M,children:v,containerInfo:m,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(v){return{$$typeof:f,_reason:v}},Dn.createPortal=function(v,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(n(299));return h(v,m,null,y)},Dn.flushSync=function(v){var m=p.T,y=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=m,s.p=y,s.d.f()}},Dn.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},Dn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Dn.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var y=m.as,M=_(y,m.crossOrigin),A=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:A,fetchPriority:w}):y==="script"&&s.d.X(v,{crossOrigin:M,integrity:A,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Dn.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=_(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(v)},Dn.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,M=_(y,m.crossOrigin);s.d.L(v,y,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Dn.preloadModule=function(v,m){if(typeof v=="string")if(m){var y=_(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(v)},Dn.requestFormReset=function(v){s.d.r(v)},Dn.unstable_batchedUpdates=function(v,m){return v(m)},Dn.useFormState=function(v,m,y){return p.H.useFormState(v,m,y)},Dn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Dn.version="19.3.1",Dn}var Gv;function cM(){if(Gv)return $d.exports;Gv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),$d.exports=lM(),$d.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function uM(){if(Vv)return al;Vv=1;var o=oM(),n=mp(),a=cM();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var e=t,i=e;i&&!i.alternate;)e=i,(e.flags&4098)!==0&&(t=e.return),i=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function h(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function _(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var i=t,r=e;;){var l=i.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===i)return p(l),t;if(u===r)return p(l),e;u=u.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=u;else{for(var g=!1,E=l.child;E;){if(E===i){g=!0,i=l,r=u;break}if(E===r){g=!0,r=l,i=u;break}E=E.sibling}if(!g){for(E=u.child;E;){if(E===i){g=!0,i=u,r=l;break}if(E===r){g=!0,r=u,i=l;break}E=E.sibling}if(!g)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:e}function v(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=v(t),e!==null)return e;t=t.sibling}return null}function m(t,e,i,r,l,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,u)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&m(t.child,e,i,r,l,u))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function A(t){var e=[null,null],i=y(t);return i===null||w(e,t,i.child,{foundSelf:!1}),e}function w(t,e,i,r){for(;i!==null;){if(i===e)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&w(t,e,i.child,r))return!0;i=i.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,H=null;function B(t,e,i){return t===i?!0:t===e?(x=t,!0):!1}function D(t,e,i){return t===i?(H=t,!1):t===e?(H!==null&&(x=t),!0):!1}function W(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function X(t,e,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var u=e;u;u=i(u))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)e=i(e),l--;for(;r--;){if(t===e||e!==null&&t===e.alternate)return t;t=i(t),e=i(e)}return null}var z=Object.assign,q=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),ht=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),yt=Symbol.for("react.consumer"),gt=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),lt=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Tt=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),At=Symbol.for("react.legacy_hidden"),Ot=Symbol.for("react.memo_cache_sentinel"),b=Symbol.for("react.view_transition"),G=Symbol.for("react.recoverable"),st=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=st&&t[st]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Symbol.for("react.client.reference");function Dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===vt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case ut:return"Profiler";case ht:return"StrictMode";case lt:return"Suspense";case et:return"SuspenseList";case P:return"Activity";case b:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case gt:return t.displayName||"Context";case yt:return(t._context.displayName||"Context")+".Consumer";case Z:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tt:return e=t.displayName||null,e!==null?e:Dt(t.type)||"Memo";case F:e=t._payload,t=t._init;try{return Dt(t(e))}catch{}}return null}var bt=Array.isArray,Mt=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Zt={pending:!1,data:null,method:null,action:null},I=[],Ae=-1;function Jt(t){return{current:t}}function Yt(t){0>Ae||(t.current=I[Ae],I[Ae]=null,Ae--)}function Nt(t,e){Ae++,I[Ae]=t.current,t.current=e}var oe=Jt(null),Xt=Jt(null),L=Jt(null),T=Jt(null);function at(t,e){switch(Nt(L,e),Nt(Xt,t),Nt(oe,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?X_(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=X_(e),t=k_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Yt(oe),Nt(oe,t)}function xt(){Yt(oe),Yt(Xt),Yt(L)}function Et(t){var e=t.memoizedState;e!==null&&(Ns._currentValue=e.memoizedState,Nt(T,t)),e=oe.current;var i=k_(e,t.type);e!==i&&(Nt(Xt,t),Nt(oe,i))}function _t(t){Xt.current===t&&(Yt(oe),Yt(Xt)),T.current===t&&(Yt(T),Ns._currentValue=Zt)}var Kt,It;function Bt(t){if(Kt===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Kt=e&&e[1]||"",It=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kt+t+It}var he=!1;function Rt(t,e){if(!t||he)return"";he=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(Pt){var Y=Pt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(Pt){Y=Pt}mt=!1;try{var it=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new t}finally{mt&&(it!==void 0?Object.defineProperty(t.prototype,"props",it):delete t.prototype.props)}}}else{try{throw Error()}catch(Pt){Y=Pt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(Pt){if(Pt&&Y&&typeof Pt.stack=="string")return[Pt.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),g=u[0],E=u[1];if(g&&E){var O=g.split(`
`),Q=E.split(`
`);for(l=r=0;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;for(;l<Q.length&&!Q[l].includes("DetermineComponentFrameRoot");)l++;if(r===O.length||l===Q.length)for(r=O.length-1,l=Q.length-1;1<=r&&0<=l&&O[r]!==Q[l];)l--;for(;1<=r&&0<=l;r--,l--)if(O[r]!==Q[l]){if(r!==1||l!==1)do if(r--,l--,0>l||O[r]!==Q[l]){var rt=`
`+O[r].replace(" at new "," at ");return t.displayName&&rt.includes("<anonymous>")&&(rt=rt.replace("<anonymous>",t.displayName)),rt}while(1<=r&&0<=l);break}}}finally{he=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Bt(i):""}function jt(t,e){switch(t.tag){case 26:case 27:case 5:return Bt(t.type);case 16:return Bt("Lazy");case 13:return t.child!==e&&e!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return Rt(t.type,!1);case 11:return Rt(t.type.render,!1);case 1:return Rt(t.type,!0);case 31:return Bt("Activity");case 30:return Bt("ViewTransition");default:return""}}function ee(t){try{var e="",i=null;do e+=jt(t,i),i=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ae=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,ge=o.unstable_cancelCallback,ce=o.unstable_shouldYield,Ie=o.unstable_requestPaint,j=o.unstable_now,Ht=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,Gt=o.unstable_NormalPriority,Vt=o.unstable_LowPriority,le=o.unstable_IdlePriority,Ze=o.log,gn=o.unstable_setDisableYieldValue,Te=null,Ye=null;function _n(t){if(typeof Ze=="function"&&gn(t),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(Te,t)}catch{}}var Nn=Math.clz32?Math.clz32:fo,yl=Math.log,qi=Math.LN2;function fo(t){return t>>>=0,t===0?32:31-(yl(t)/qi|0)|0}var lr=256,cr=262144,Yi=4194304;function Ui(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Wi(t,e,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,u=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~u,r!==0?l=Ui(r):(g&=E,g!==0?l=Ui(g):i||(i=E&~t,i!==0&&(l=Ui(i))))):(E=r&~u,E!==0?l=Ui(E):g!==0?l=Ui(g):i||(i=r&~t,i!==0&&(l=Ui(i)))),l===0?0:e!==0&&e!==l&&(e&u)===0&&(u=l&-l,i=e&-e,u>=i||u===32&&(i&4194048)!==0)?e:l}function Ta(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ho(t,e){(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-Nn(i),l=1<<r;e|=t[r],i&=~l}return e}function Su(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sl(){var t=Yi;return Yi<<=1,(Yi&62914560)===0&&(Yi=4194304),t}function po(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function ur(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Mu(t,e,i,r,l,u){var g=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,O=t.expirationTimes,Q=t.hiddenUpdates;for(i=g&~i;0<i;){var rt=31-Nn(i),mt=1<<rt;E[rt]=0,O[rt]=-1;var Y=Q[rt];if(Y!==null)for(Q[rt]=null,rt=0;rt<Y.length;rt++){var it=Y[rt];it!==null&&(it.lane&=-536870913)}i&=~mt}r!==0&&Ml(t,r,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(g&~e))}function Ml(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Nn(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function R(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-Nn(i),l=1<<r;l&e|t[r]&e&&(t[r]|=e),i&=~l}}function J(t,e){var i=e&-e;return i=(i&42)!==0?1:ot(i),(i&(t.suspendedLanes|e))!==0?0:i}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ct(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function tt(){var t=wt.p;return t!==0?t:(t=window.event,t===void 0?32:Rv(t.type))}function Ct(t,e){var i=wt.p;try{return wt.p=t,e()}finally{wt.p=i}}var Lt=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Lt,zt="__reactProps$"+Lt,ne="__reactContainer$"+Lt,re="__reactEvents$"+Lt,te="__reactListeners$"+Lt,be="__reactHandles$"+Lt,Ce="__reactResources$"+Lt,ke="__reactMarker$"+Lt,He="__reactLoad$"+Lt;function _e(t){delete t[Ut],delete t[zt],delete t[te],delete t[be]}function Qt(t){var e;if(e=t[Ut])return e;for(var i=t.parentNode;i;){if(e=i[ne]||i[Ut]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=ov(t);t!==null;){if(i=t[Ut])return i;t=ov(t)}return e}t=i,i=t.parentNode}return null}function Ke(t){if(t=t[Ut]||t[ne]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function ye(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function vn(t){var e=t[Ce];return e||(e=t[Ce]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function We(t){t[ke]=!0}function Un(t){t[He]=void 0}var ba=new Set,Ge={};function rn(t,e){dn(t,e),dn(t+"Capture",e)}function dn(t,e){for(Ge[t]=e,t=0;t<e.length;t++)ba.add(e[t])}var En=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tn={},Wr={};function Zi(t){return ae.call(Wr,t)?!0:ae.call(Tn,t)?!1:En.test(t)?Wr[t]=!0:(Tn[t]=!0,!1)}var we=!1;function wp(){var t=we;return we=!1,t}function El(t,e,i){if(Zi(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,i)}}function Tl(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,i)}}function Ki(t,e,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,r)}}function Kn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ex(t,e,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(g){i=""+g,u.call(this,g)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(g){i=""+g},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Eu(t){if(!t._valueTracker){var e=Dp(t)?"checked":"value";t._valueTracker=Ex(t,e,""+t[e])}}function Np(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=Dp(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}var Tx=/[\n"\\]/g;function oi(t){return t.replace(Tx,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Tu(t,e,i,r,l,u,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),e!=null?g==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Kn(e)):t.value!==""+Kn(e)&&(t.value=""+Kn(e)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),e!=null?g==="number"&&t.value==e?bu(t,Kn(t.value)):bu(t,Kn(e)):i!=null?bu(t,Kn(i)):r!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Kn(E):t.removeAttribute("name")}function Up(t,e,i,r,l,u,g,E){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Eu(t);return}i=i!=null?""+Kn(i):"",e=e!=null?""+Kn(e):i,E||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Eu(t)}function bu(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Zr(t,e,i,r){if(t=t.options,e){e={};for(var l=0;l<i.length;l++)e["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=e.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Kn(i),e=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Lp(t,e,i){if(e!=null&&(e=""+Kn(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Kn(i):""}function Op(t,e,i,r){if(e==null){if(r!=null){if(i!=null)throw Error(s(92));if(bt(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),e=i}i=Kn(e),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),Eu(t)}function Kr(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var bx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pp(t,e,i){var r=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,i):typeof i!="number"||i===0||bx.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function zp(t,e,i){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",we=!0);for(var l in e)r=e[l],e.hasOwnProperty(l)&&i[l]!==r&&(Pp(t,l,r),we=!0)}else for(var u in e)e.hasOwnProperty(u)&&Pp(t,u,e[u])}function Au(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ax=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(t){return Rx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Li(){}var Ru=null;function Cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qr=null,Jr=null;function Ip(t){var e=Ke(t);if(e&&(t=e.stateNode)){var i=t[zt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Tu(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+oi(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var l=r[zt]||null;if(!l)throw Error(s(90));Tu(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<i.length;e++)r=i[e],r.form===t.form&&Np(r)}break t;case"textarea":Lp(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&Zr(t,!!i.multiple,e,!1)}}}var wu=!1;function Bp(t,e,i){if(wu)return t(e,i);wu=!0;try{var r=t(e);return r}finally{if(wu=!1,(Qr!==null||Jr!==null)&&(bc(),Qr&&(e=Qr,t=Jr,Jr=Qr=null,Ip(e),t)))for(e=0;e<t.length;e++)Ip(t[e])}}function mo(t,e){var i=t.stateNode;if(i===null)return null;var r=i[zt]||null;if(r===null)return null;i=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,e,typeof i));return i}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=!1;if(Qi)try{var go={};Object.defineProperty(go,"passive",{get:function(){Du=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{Du=!1}var Aa=null,Nu=null,Al=null;function Fp(){if(Al)return Al;var t,e=Nu,i=e.length,r,l="value"in Aa?Aa.value:Aa.textContent,u=l.length;for(t=0;t<i&&e[t]===l[t];t++);var g=i-t;for(r=1;r<=g&&e[i-r]===l[u-r];r++);return Al=l.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cl(){return!0}function Hp(){return!1}function zn(t){function e(i,r,l,u,g){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(u):u[E]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Cl:Hp,this.isPropagationStopped=Hp,this}return z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),e}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=zn(Ra),_o=z({},Ra,{view:0,detail:0}),Cx=zn(_o),Uu,Lu,vo,Dl=z({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(Uu=t.screenX-vo.screenX,Lu=t.screenY-vo.screenY):Lu=Uu=0,vo=t),Uu)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),Gp=zn(Dl),wx=z({},Dl,{dataTransfer:0}),Dx=zn(wx),Nx=z({},_o,{relatedTarget:0}),Ou=zn(Nx),Ux=z({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=zn(Ux),Ox=z({},Ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Px=zn(Ox),zx=z({},Ra,{data:0}),Vp=zn(zx),Ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fx[t])?!!e[t]:!1}function Pu(){return Hx}var Gx=z({},_o,{key:function(t){if(t.key){var e=Ix[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vx=zn(Gx),Xx=z({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=zn(Xx),kx=z({},Ra,{submitter:0}),jx=zn(kx),qx=z({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),Yx=zn(qx),Wx=z({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zx=zn(Wx),Kx=z({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=zn(Kx),Jx=z({},Ra,{newState:0,oldState:0,source:0}),$x=zn(Jx),ty=[9,13,27,32],zu=Qi&&"CompositionEvent"in window,xo=null;Qi&&"documentMode"in document&&(xo=document.documentMode);var ey=Qi&&"TextEvent"in window&&!xo,kp=Qi&&(!zu||xo&&8<xo&&11>=xo),jp=" ",qp=!1;function Yp(t,e){switch(t){case"keyup":return ty.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function ny(t,e){switch(t){case"compositionend":return Wp(e);case"keypress":return e.which!==32?null:(qp=!0,jp);case"textInput":return t=e.data,t===jp&&qp?null:t;default:return null}}function iy(t,e){if($r)return t==="compositionend"||!zu&&Yp(t,e)?(t=Fp(),Al=Nu=Aa=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kp&&e.locale!=="ko"?null:e.data;default:return null}}var ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ay[t.type]:e==="textarea"}function Kp(t,e,i,r){Qr?Jr?Jr.push(r):Jr=[r]:Qr=r,e=Nc(e,"onChange"),0<e.length&&(i=new wl("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var yo=null,So=null;function ry(t){I_(t,0)}function Nl(t){var e=ye(t);if(Np(e))return t}function Qp(t,e){if(t==="change")return e}var Jp=!1;if(Qi){var Iu;if(Qi){var Bu="oninput"in document;if(!Bu){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),Bu=typeof $p.oninput=="function"}Iu=Bu}else Iu=!1;Jp=Iu&&(!document.documentMode||9<document.documentMode)}function tm(){yo&&(yo.detachEvent("onpropertychange",em),So=yo=null)}function em(t){if(t.propertyName==="value"&&Nl(So)){var e=[];Kp(e,So,t,Cu(t)),Bp(ry,e)}}function sy(t,e,i){t==="focusin"?(tm(),yo=e,So=i,yo.attachEvent("onpropertychange",em)):t==="focusout"&&tm()}function oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(So)}function ly(t,e){if(t==="click")return Nl(e)}function cy(t,e){if(t==="input"||t==="change")return Nl(e)}function uy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:uy;function Mo(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!ae.call(e,l)||!Qn(t[l],e[l]))return!1}return!0}function Fu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function im(t,e){var i=nm(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=nm(i)}}function am(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?am(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Fu(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Fu(t.document)}return e}function Hu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var fy=Qi&&"documentMode"in document&&11>=document.documentMode,ts=null,Gu=null,Eo=null,Vu=!1;function sm(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Vu||ts==null||ts!==Fu(r)||(r=ts,"selectionStart"in r&&Hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Mo(Eo,r)||(Eo=r,r=Nc(Gu,"onSelect"),0<r.length&&(e=new wl("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=ts)))}function fr(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var es={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},Xu={},om={};Qi&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function dr(t){if(Xu[t])return Xu[t];if(!es[t])return t;var e=es[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in om)return Xu[t]=e[i];return t}var lm=dr("animationend"),cm=dr("animationiteration"),um=dr("animationstart"),dy=dr("transitionrun"),hy=dr("transitionstart"),py=dr("transitioncancel"),fm=dr("transitionend"),dm=new Map,ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ku.push("scrollEnd");function xi(t,e){dm.set(t,e),rn(e,[t])}var my=0;function Ji(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Ei.identifierPrefix;var i=my++;return t="_"+t+"t_"+i.toString(32)+"_",e.autoName=t}function hm(t){if(t==null||typeof t=="string")return t;var e=null,i=Ss;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??t.default}function $i(t,e){return t=hm(t),e=hm(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},li=[],ns=0,ju=0;function Ll(){for(var t=ns,e=ju=ns=0;e<t;){var i=li[e];li[e++]=null;var r=li[e];li[e++]=null;var l=li[e];li[e++]=null;var u=li[e];if(li[e++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}u!==0&&pm(i,l,u)}}function Ol(t,e,i,r){li[ns++]=t,li[ns++]=e,li[ns++]=i,li[ns++]=r,ju|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function qu(t,e,i,r){return Ol(t,e,i,r),Pl(t)}function hr(t,e){return Ol(t,null,null,e),Pl(t)}function pm(t,e,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,u=t.return;u!==null;)u.childLanes|=i,r=u.alternate,r!==null&&(r.childLanes|=i),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&e!==null&&(l=31-Nn(i),t=u.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=i|536870912),u):null}function Pl(t){if(50<jo)throw jo=0,Tc=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var is={};function gy(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,i,r){return new gy(t,e,i,r)}function Yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,e){var i=t.alternate;return i===null?(i=Xn(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function mm(t,e){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function zl(t,e,i,r,l,u){var g=0;if(r=t,typeof r=="function")Yu(r)&&(g=1);else if(typeof r=="string")g=kS(t,i,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case P:return t=Xn(31,i,e,l),t.elementType=P,t.lanes=u,t;case k:return pr(i.children,l,u,e);case ht:g=8,l|=24;break;case ut:return t=Xn(12,i,e,l|2),t.elementType=ut,t.lanes=u,t;case lt:return t=Xn(13,i,e,l),t.elementType=lt,t.lanes=u,t;case et:return t=Xn(19,i,e,l),t.elementType=et,t.lanes=u,t;case At:case b:return t=l|32,t=Xn(30,i,e,t),t.elementType=b,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case gt:g=10;break t;case yt:g=9;break t;case Z:g=11;break t;case Tt:g=14;break t;case F:g=16,r=null;break t}g=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=Xn(g,i,e,l),e.elementType=t,e.type=r,e.lanes=u,e}function pr(t,e,i,r){return t=Xn(7,t,r,e),t.lanes=i,t}function Wu(t,e,i){return t=Xn(6,t,null,e),t.lanes=i,t}function gm(t){var e=Xn(18,null,null,0);return e.stateNode=t,e}function Zu(t,e,i){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var _m=new WeakMap;function ci(t,e){if(typeof t=="object"&&t!==null){var i=_m.get(t);return i!==void 0?i:(e={value:t,source:e,stack:ee(e)},_m.set(t,e),e)}return{value:t,source:e,stack:ee(e)}}var as=[],rs=0,Il=null,To=0,ui=[],fi=0,Ca=null,Oi=1,Pi="";function ea(t,e){as[rs++]=To,as[rs++]=Il,Il=t,To=e}function vm(t,e,i){ui[fi++]=Oi,ui[fi++]=Pi,ui[fi++]=Ca,Ca=t;var r=Oi;t=Pi;var l=32-Nn(r)-1;r&=~(1<<l),i+=1;var u=32-Nn(e)+l;if(30<u){var g=l-l%5;u=(r&(1<<g)-1).toString(32),r>>=g,l-=g,Oi=1<<32-Nn(e)+l|i<<l|r,Pi=u+t}else Oi=1<<u|i<<l|r,Pi=t}function Bl(t){t.return!==null&&(ea(t,1),vm(t,1,0))}function Ku(t){for(;t===Il;)Il=as[--rs],as[rs]=null,To=as[--rs],as[rs]=null;for(;t===Ca;)Ca=ui[--fi],ui[fi]=null,Pi=ui[--fi],ui[fi]=null,Oi=ui[--fi],ui[fi]=null}function xm(t,e){ui[fi++]=Oi,ui[fi++]=Pi,ui[fi++]=Ca,Oi=e.id,Pi=e.overflow,Ca=t}var xn=null,je=null,me=!1,wa=null,di=!1,Qu=Error(s(519));function Da(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bo(ci(e,t)),Qu}function ym(t){var e=t.stateNode,i=t.type,r=t.memoizedProps;switch(e[Ut]=t,e[zt]=r,i){case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":case"embed":xe("load",e);break;case"video":case"audio":for(i=0;i<Yo.length;i++)xe(Yo[i],e);break;case"source":xe("error",e);break;case"img":case"image":case"link":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"input":xe("invalid",e),Up(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":xe("invalid",e);break;case"textarea":xe("invalid",e),Op(e,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||r.suppressHydrationWarning===!0||G_(e.textContent,i)?(r.popover!=null&&(xe("beforetoggle",e),xe("toggle",e)),r.onScroll!=null&&xe("scroll",e),r.onScrollEnd!=null&&xe("scrollend",e),r.onClick!=null&&(e.onclick=Li),e=!0):e=!1,e||Da(t,!0)}function Fl(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:xn=xn.return}}function ss(t){if(t!==xn)return!1;if(!me)return Fl(t),me=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Cd(t.type,t.memoizedProps)),i=!i),i&&je&&Da(t),Fl(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=sv(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=sv(t)}else e===27?(e=je,qa(t.type)?(t=Id,Id=null,je=t):je=e):je=xn?pi(t.stateNode.nextSibling):null;return!0}function mr(){je=xn=null,me=!1}function Ju(){var t=wa;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),wa=null),t}function bo(t){wa===null?wa=[t]:wa.push(t)}var $u=Jt(null),gr=null,na=null;function Na(t,e,i){Nt($u,e._currentValue),e._currentValue=i}function ia(t){t._currentValue=$u.current,Yt($u)}function Hl(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function tf(t,e,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var g=l.child;u=u.firstContext;t:for(;u!==null;){var E=u;u=l;for(var O=0;O<e.length;O++)if(E.context===e[O]){u.lanes|=i,E=u.alternate,E!==null&&(E.lanes|=i),Hl(u.return,i,t),r||(g=null);break t}u=E.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=i,u=g.alternate,u!==null&&(u.lanes|=i),Hl(g,i,t),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,g=l.alternate,g!==null&&(g.lanes|=i),Hl(l.return,i,t),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function _r(t,e,i,r){t=null;for(var l=e,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=l.type;Qn(l.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(l===T.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ns):t=[Ns])}l=l.return}return t!==null&&tf(e,t,i,r),e.flags|=262144,t!==null}function Gl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vr(t){gr=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return Sm(gr,t)}function Vl(t,e){return gr===null&&vr(t),Sm(t,e)}function Sm(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},na===null){if(t===null)throw Error(s(308));na=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else na=na.next=e;return i}var _y=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},vy=o.unstable_scheduleCallback,xy=o.unstable_NormalPriority,sn={$$typeof:gt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new _y,data:new Map,refCount:0}}function Ao(t){t.refCount--,t.refCount===0&&vy(xy,function(){t.controller.abort()})}function Mm(t,e){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<e.length;t++){var r=e[t];i.indexOf(r)===-1&&i.push(r)}}}var Ro=null;function yy(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Co=null,nf=0,xr=0,os=null;function Sy(t,e){if(Co===null){var i=Co=[];nf=0,xr=xd(),os={status:"pending",value:void 0,then:function(r){i.push(r)}}}return nf++,e.then(Em,Em),e}function Em(){if(--nf===0&&(Ro=null,Co!==null)){os!==null&&(os.status="fulfilled");var t=Co;Co=null,xr=0,os=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function My(t,e){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<i.length;l++)(0,i[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Tm=Mt.S;Mt.S=function(t,e){if(g_=j(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Sy(t,e),Ro!==null)for(var i=bs;i!==null;)Mm(i,Ro),i=i.next;if(i=t.types,i!==null){for(var r=bs;r!==null;)Mm(r,i),r=r.next;if(xr!==0){r=Ro,r===null&&(r=Ro=[]);for(var l=0;l<i.length;l++){var u=i[l];r.indexOf(u)===-1&&r.push(u)}}}Tm!==null&&Tm(t,e)};var yr=Jt(null);function af(){var t=yr.current;return t!==null?t:Ve.pooledCache}function Xl(t,e){e===null?Nt(yr,yr.current):Nt(yr,e.pool)}function bm(){var t=af();return t===null?null:{parent:sn._currentValue,pool:t}}var ls=Error(s(460)),rf=Error(s(474)),kl=Error(s(542)),jl={then:function(){}};function Am(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rm(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(Li,Li),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,wm(t),t===void 0&&!("reason"in e)?Error(s(600)):t;default:if(typeof e.status=="string")e.then(Li,Li);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,wm(t),t}throw Mr=e,ls}}function Sr(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Mr=i,ls):i}}var Mr=null;function Cm(){if(Mr===null)throw Error(s(459));var t=Mr;return Mr=null,t}function wm(t){if(t===ls||t===kl)throw Error(s(483))}var cs=null,wo=0;function ql(t){var e=wo;return wo+=1,cs===null&&(cs=[]),Rm(cs,t,e)}function Ua(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Yl(t,e){throw e.$$typeof===q?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Dm(t){function e(K,V){if(t){var nt=K.deletions;nt===null?(K.deletions=[V],K.flags|=16):nt.push(V)}}function i(K,V){if(!t)return null;for(;V!==null;)e(K,V),V=V.sibling;return null}function r(K){for(var V=new Map;K!==null;)K.key===null?V.set(K.index,K):V.set(K.key,K),K=K.sibling;return V}function l(K,V){return K=ta(K,V),K.index=0,K.sibling=null,K}function u(K,V,nt){return K.index=nt,t?(nt=K.alternate,nt!==null?(nt=nt.index,nt<V?(K.flags|=2,V):nt):(K.flags|=134217730,V)):(K.flags|=1048576,V)}function g(K){return t&&K.alternate===null&&(K.flags|=134217730),K}function E(K,V,nt,pt){return V===null||V.tag!==6?(V=Wu(nt,K.mode,pt),V.return=K,V):(V=l(V,nt),V.return=K,V)}function O(K,V,nt,pt){var kt=nt.type;return kt===k?(K=rt(K,V,nt.props.children,pt,nt.key),Ua(K,nt),K):V!==null&&(V.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===F&&Sr(kt)===V.type)?(V=l(V,nt.props),Ua(V,nt),V.return=K,V):(V=zl(nt.type,nt.key,nt.props,null,K.mode,pt),Ua(V,nt),V.return=K,V)}function Q(K,V,nt,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==nt.containerInfo||V.stateNode.implementation!==nt.implementation?(V=Zu(nt,K.mode,pt),V.return=K,V):(V=l(V,nt.children||[]),V.return=K,V)}function rt(K,V,nt,pt,kt){return V===null||V.tag!==7?(V=pr(nt,K.mode,pt,kt),V.return=K,V):(V=l(V,nt),V.return=K,V)}function mt(K,V,nt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Wu(""+V,K.mode,nt),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case N:return nt=zl(V.type,V.key,V.props,null,K.mode,nt),Ua(nt,V),nt.return=K,nt;case C:return V=Zu(V,K.mode,nt),V.return=K,V;case F:return V=Sr(V),mt(K,V,nt)}if(bt(V)||$(V))return V=pr(V,K.mode,nt,null),V.return=K,V;if(typeof V.then=="function")return mt(K,ql(V),nt);if(V.$$typeof===gt)return mt(K,Vl(K,V),nt);Yl(K,V)}return null}function Y(K,V,nt,pt){var kt=V!==null?V.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return kt!==null?null:E(K,V,""+nt,pt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case N:return nt.key===kt?O(K,V,nt,pt):null;case C:return nt.key===kt?Q(K,V,nt,pt):null;case F:return nt=Sr(nt),Y(K,V,nt,pt)}if(bt(nt)||$(nt))return kt!==null?null:rt(K,V,nt,pt,null);if(typeof nt.then=="function")return Y(K,V,ql(nt),pt);if(nt.$$typeof===gt)return Y(K,V,Vl(K,nt),pt);Yl(K,nt)}return null}function it(K,V,nt,pt,kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get(nt)||null,E(V,K,""+pt,kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case N:return K=K.get(pt.key===null?nt:pt.key)||null,O(V,K,pt,kt);case C:return K=K.get(pt.key===null?nt:pt.key)||null,Q(V,K,pt,kt);case F:return pt=Sr(pt),it(K,V,nt,pt,kt)}if(bt(pt)||$(pt))return K=K.get(nt)||null,rt(V,K,pt,kt,null);if(typeof pt.then=="function")return it(K,V,nt,ql(pt),kt);if(pt.$$typeof===gt)return it(K,V,nt,Vl(V,pt),kt);Yl(V,pt)}return null}function Pt(K,V,nt,pt){for(var kt=null,Me=null,$t=V,ie=V=0,cn=null;$t!==null&&ie<nt.length;ie++){$t.index>ie?(cn=$t,$t=null):cn=$t.sibling;var Re=Y(K,$t,nt[ie],pt);if(Re===null){$t===null&&($t=cn);break}t&&$t&&Re.alternate===null&&e(K,$t),V=u(Re,V,ie),Me===null?kt=Re:Me.sibling=Re,Me=Re,$t=cn}if(ie===nt.length)return i(K,$t),me&&ea(K,ie),kt;if($t===null){for(;ie<nt.length;ie++)$t=mt(K,nt[ie],pt),$t!==null&&(V=u($t,V,ie),Me===null?kt=$t:Me.sibling=$t,Me=$t);return me&&ea(K,ie),kt}for($t=r($t);ie<nt.length;ie++)cn=it($t,K,ie,nt[ie],pt),cn!==null&&(t&&(Re=cn.alternate,Re!==null&&$t.delete(Re.key===null?ie:Re.key)),V=u(cn,V,ie),Me===null?kt=cn:Me.sibling=cn,Me=cn);return t&&$t.forEach(function(Qa){return e(K,Qa)}),me&&ea(K,ie),kt}function Wt(K,V,nt,pt){if(nt==null)throw Error(s(151));for(var kt=null,Me=null,$t=V,ie=V=0,cn=null,Re=nt.next();$t!==null&&!Re.done;ie++,Re=nt.next()){$t.index>ie?(cn=$t,$t=null):cn=$t.sibling;var Qa=Y(K,$t,Re.value,pt);if(Qa===null){$t===null&&($t=cn);break}t&&$t&&Qa.alternate===null&&e(K,$t),V=u(Qa,V,ie),Me===null?kt=Qa:Me.sibling=Qa,Me=Qa,$t=cn}if(Re.done)return i(K,$t),me&&ea(K,ie),kt;if($t===null){for(;!Re.done;ie++,Re=nt.next())Re=mt(K,Re.value,pt),Re!==null&&(V=u(Re,V,ie),Me===null?kt=Re:Me.sibling=Re,Me=Re);return me&&ea(K,ie),kt}for($t=r($t);!Re.done;ie++,Re=nt.next())Re=it($t,K,ie,Re.value,pt),Re!==null&&(t&&(cn=Re.alternate,cn!==null&&$t.delete(cn.key===null?ie:cn.key)),V=u(Re,V,ie),Me===null?kt=Re:Me.sibling=Re,Me=Re);return t&&$t.forEach(function(nM){return e(K,nM)}),me&&ea(K,ie),kt}function fe(K,V,nt,pt){if(typeof nt=="object"&&nt!==null&&nt.type===k&&nt.key===null&&nt.props.ref===void 0&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case N:t:{for(var kt=nt.key;V!==null;){if(V.key===kt){if(kt=nt.type,kt===k){if(V.tag===7){i(K,V.sibling),pt=l(V,nt.props.children),Ua(pt,nt),pt.return=K,K=pt;break t}}else if(V.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===F&&Sr(kt)===V.type){i(K,V.sibling),pt=l(V,nt.props),Ua(pt,nt),pt.return=K,K=pt;break t}i(K,V);break}else e(K,V);V=V.sibling}nt.type===k?(pt=pr(nt.props.children,K.mode,pt,nt.key),Ua(pt,nt),pt.return=K,K=pt):(pt=zl(nt.type,nt.key,nt.props,null,K.mode,pt),Ua(pt,nt),pt.return=K,K=pt)}return g(K);case C:t:{for(kt=nt.key;V!==null;){if(V.key===kt)if(V.tag===4&&V.stateNode.containerInfo===nt.containerInfo&&V.stateNode.implementation===nt.implementation){i(K,V.sibling),pt=l(V,nt.children||[]),pt.return=K,K=pt;break t}else{i(K,V);break}else e(K,V);V=V.sibling}pt=Zu(nt,K.mode,pt),pt.return=K,K=pt}return g(K);case F:return nt=Sr(nt),fe(K,V,nt,pt)}if(bt(nt))return Pt(K,V,nt,pt);if($(nt)){if(kt=$(nt),typeof kt!="function")throw Error(s(150));return nt=kt.call(nt),Wt(K,V,nt,pt)}if(typeof nt.then=="function")return fe(K,V,ql(nt),pt);if(nt.$$typeof===gt)return fe(K,V,Vl(K,nt),pt);Yl(K,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,V!==null&&V.tag===6?(i(K,V.sibling),pt=l(V,nt),pt.return=K,K=pt):(i(K,V),pt=Wu(nt,K.mode,pt),pt.return=K,K=pt),g(K)):i(K,V)}return function(K,V,nt,pt){try{wo=0;var kt=fe(K,V,nt,pt);return cs=null,kt}catch($t){if($t===ls||$t===kl)throw $t;var Me=Xn(29,$t,null,K.mode);return Me.lanes=pt,Me.return=K,Me}finally{}}}var Er=Dm(!0),Nm=Dm(!1),La=!1;function sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=Pl(t),pm(t,null,i),e}return Ol(t,r,e,i),Pl(t)}function Do(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,R(t,i)}}function lf(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var g={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?l=u=g:u=u.next=g,i=i.next}while(i!==null);u===null?l=u=e:u=u.next=e}else l=u=e;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var cf=!1;function No(){if(cf){var t=os;if(t!==null)throw t}}function Uo(t,e,i,r){cf=!1;var l=t.updateQueue;La=!1;var u=l.firstBaseUpdate,g=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var O=E,Q=O.next;O.next=null,g===null?u=Q:g.next=Q,g=O;var rt=t.alternate;rt!==null&&(rt=rt.updateQueue,E=rt.lastBaseUpdate,E!==g&&(E===null?rt.firstBaseUpdate=Q:E.next=Q,rt.lastBaseUpdate=O))}if(u!==null){var mt=l.baseState;g=0,rt=Q=O=null,E=u;do{var Y=E.lane&-536870913,it=Y!==E.lane;if(it?(Se&Y)===Y:(r&Y)===Y){Y!==0&&Y===xr&&(cf=!0),rt!==null&&(rt=rt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Pt=t,Wt=E;Y=e;var fe=i;switch(Wt.tag){case 1:if(Pt=Wt.payload,typeof Pt=="function"){mt=Pt.call(fe,mt,Y);break t}mt=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Wt.payload,Y=typeof Pt=="function"?Pt.call(fe,mt,Y):Pt,Y==null)break t;mt=z({},mt,Y);break t;case 2:La=!0}}Y=E.callback,Y!==null&&(t.flags|=64,it&&(t.flags|=8192),it=l.callbacks,it===null?l.callbacks=[Y]:it.push(Y))}else it={lane:Y,tag:E.tag,payload:E.payload,callback:E.callback,next:null},rt===null?(Q=rt=it,O=mt):rt=rt.next=it,g|=Y;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;it=E,E=it.next,it.next=null,l.lastBaseUpdate=it,l.shared.pending=null}}while(!0);rt===null&&(O=mt),l.baseState=O,l.firstBaseUpdate=Q,l.lastBaseUpdate=rt,u===null&&(l.shared.lanes=0),Va|=g,t.lanes=g,t.memoizedState=mt}}function Um(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Lm(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Um(i[t],e)}var za=Jt(null),Wl=Jt(0);function Om(t,e){t=la,Nt(Wl,t),Nt(za,e),la=t|e.baseLanes}function uf(){Nt(Wl,la),Nt(za,za.current)}function ff(){la=Wl.current,Yt(za),Yt(Wl)}var An=Jt(null),Ln=null;function Ia(t){var e=t.alternate;Nt(Rn,Rn.current&1),Nt(An,t),Ln===null&&(e===null||za.current!==null||e.memoizedState!==null)&&(Ln=t)}function df(t){Nt(Rn,Rn.current),Nt(An,t),Ln===null&&(Ln=t)}function Pm(t){t.tag===22?(Nt(Rn,Rn.current),Nt(An,t),Ln===null&&(Ln=t)):Ba()}function Ba(){Nt(Rn,Rn.current),Nt(An,An.current)}function Jn(t){Yt(An),Ln===t&&(Ln=null),Yt(Rn)}var Rn=Jt(0);function Lo(t,e){Nt(An,An.current),Nt(Rn,e)}function hf(t){Yt(Rn),Yt(An),Ln===t&&(Ln=null)}function Zl(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Pd(i)||zd(i)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var aa=0,ue=null,Be=null,on=null,Kl=!1,us=!1,Tr=!1,Ql=0,Oo=0,fs=null,Ey=0;function tn(){throw Error(s(321))}function pf(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Qn(t[i],e[i]))return!1;return!0}function mf(t,e,i,r,l,u){return aa=u,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mt.H=t===null||t.memoizedState===null?vg:xg,Tr=!1,u=i(r,l),Tr=!1,us&&(u=Im(e,i,r,l)),zm(t),u}function zm(t){Mt.H=ac;var e=Be!==null&&Be.next!==null;if(aa=0,on=Be=ue=null,Kl=!1,Oo=0,fs=null,e)throw Error(s(300));t===null||ln||(t=t.dependencies,t!==null&&Gl(t)&&(ln=!0))}function Im(t,e,i,r){ue=t;var l=0;do{if(us&&(fs=null),Oo=0,us=!1,25<=l)throw Error(s(301));if(l+=1,on=Be=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Mt.H=Ny,u=e(i,r)}while(us);return u}function Ty(){var t=Mt.H,e=t.useState()[0];return e=typeof e.then=="function"?Po(e):e,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(ue.flags|=1024),e}function gf(){var t=Ql!==0;return Ql=0,t}function _f(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function vf(t){if(Kl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Kl=!1}aa=0,on=Be=ue=null,us=!1,Oo=Ql=0,fs=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ue.memoizedState=on=t:on=on.next=t,on}function nn(){if(Be===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=on===null?ue.memoizedState:on.next;if(e!==null)on=e,Be=t;else{if(t===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},on===null?ue.memoizedState=on=t:on=on.next=t}return on}function Jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(t){var e=Oo;return Oo+=1,fs===null&&(fs=[]),t=Rm(fs,t,e),e=ue,(on===null?e.memoizedState:on.next)===null&&(e=e.alternate,Mt.H=e===null||e.memoizedState===null?vg:xg),t}function $l(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Po(t);if(t.$$typeof===G)return;if(t.$$typeof===gt)return bn(t)}throw Error(s(438,String(t)))}function xf(t){var e=null,i=ue.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var r=ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=Jl(),ue.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),r=0;r<t;r++)i[r]=Ot;return e.index++,i}function ra(t,e){return typeof e=="function"?e(t):e}function tc(t){var e=nn();return yf(e,Be,t)}function yf(t,e,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,u=r.pending;if(u!==null){if(l!==null){var g=l.next;l.next=u.next,u.next=g}e.baseQueue=l=u,r.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{e=l.next;var E=g=null,O=null,Q=e,rt=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(Se&mt)===mt:(aa&mt)===mt){var Y=Q.revertLane;if(Y===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===xr&&(rt=!0);else if((aa&Y)===Y){Q=Q.next,Y===xr&&(rt=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(E=O=mt,g=u):O=O.next=mt,ue.lanes|=Y,Va|=Y;mt=Q.action,Tr&&i(u,mt),u=Q.hasEagerState?Q.eagerState:i(u,mt)}else Y={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(E=O=Y,g=u):O=O.next=Y,ue.lanes|=mt,Va|=mt;Q=Q.next}while(Q!==null&&Q!==e);if(O===null?g=u:O.next=E,!Qn(u,t.memoizedState)&&(ln=!0,rt&&(i=os,i!==null)))throw i;t.memoizedState=u,t.baseState=g,t.baseQueue=O,r.lastRenderedState=u}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Sf(t){var e=nn(),i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,u=e.memoizedState;if(l!==null){i.pending=null;var g=l=l.next;do u=t(u,g.action),g=g.next;while(g!==l);Qn(u,e.memoizedState)||(ln=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),i.lastRenderedState=u}return[u,r]}function Bm(t,e,i){var r=ue,l=nn(),u=me;if(u){if(i===void 0)throw Error(s(407));i=i()}else i=e();var g=!Qn((Be||l).memoizedState,i);if(g&&(l.memoizedState=i,ln=!0),l=l.queue,Tf(Gm.bind(null,r,l,t),[t]),t=l.getSnapshot!==e||g||on!==null&&(on.memoizedState.tag&1)!==0,ds(t?9:8,{destroy:void 0},Hm.bind(null,r,l,i,e),null),t){if(r.flags|=2048,Ve===null)throw Error(s(349));u||(aa&127)!==0||Fm(r,e,i)}return i}function Fm(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=ue.updateQueue,e===null?(e=Jl(),ue.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function Hm(t,e,i,r){e.value=i,e.getSnapshot=r,Vm(e)&&Xm(t)}function Gm(t,e,i){return i(function(){Vm(e)&&Xm(t)})}function Vm(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Qn(t,i)}catch{return!0}}function Xm(t){var e=hr(t,2);e!==null&&Yn(e,t,2)}function Mf(t){var e=In();if(typeof t=="function"){var i=t;if(t=i(),Tr){_n(!0);try{i()}finally{_n(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e}function km(t,e,i,r){return t.baseState=i,yf(t,Be,typeof r=="function"?r:ra)}function by(t,e,i,r,l){if(ic(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){u.listeners.push(g)}};Mt.T!==null?i(!0):u.isTransition=!1,r(u),i=e.pending,i===null?(u.next=e.pending=u,jm(e,u)):(u.next=i.next,e.pending=i.next=u)}}function jm(t,e){var i=e.action,r=e.payload,l=t.state;if(e.isTransition){var u=Mt.T,g={};g.types=u!==null?u.types:null,Mt.T=g;try{var E=i(l,r),O=Mt.S;O!==null&&O(g,E),qm(t,e,E)}catch(Q){Ef(t,e,Q)}finally{u!==null&&g.types!==null&&(u.types=g.types),Mt.T=u}}else try{u=i(l,r),qm(t,e,u)}catch(Q){Ef(t,e,Q)}}function qm(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){Ym(t,e,r)},function(r){return Ef(t,e,r)}):Ym(t,e,i)}function Ym(t,e,i){e.status="fulfilled",e.value=i,Wm(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,jm(t,i)))}function Ef(t,e,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=i,Wm(e),e=e.next;while(e!==r)}t.action=null}function Wm(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Zm(t,e){return e}function Km(t,e){if(me){var i=Ve.formState;if(i!==null){t:{var r=ue;if(me){if(je){e:{for(var l=je,u=di;l.nodeType!==8;){if(!u){l=null;break e}if(l=pi(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){je=pi(l.nextSibling),r=l.data==="F!";break t}}Da(r)}r=!1}r&&(e=i[0])}}return i=In(),i.memoizedState=i.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zm,lastRenderedState:e},i.queue=r,i=mg.bind(null,ue,r),r.dispatch=i,r=Mf(!1),u=wf.bind(null,ue,!1,r.queue),r=In(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,i=by.bind(null,ue,l,u,i),l.dispatch=i,r.memoizedState=t,[e,i,!1]}function Qm(t){var e=nn();return Jm(e,Be,t)}function Jm(t,e,i){if(e=yf(t,e,Zm)[0],t=tc(ra)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Po(e)}catch(g){throw g===ls?kl:g}else r=e;e=nn();var l=e.queue,u=l.dispatch;return i!==e.memoizedState&&(ue.flags|=2048,ds(9,{destroy:void 0},Ay.bind(null,l,i),null)),[r,u,t]}function Ay(t,e){t.action=e}function $m(t){var e=nn(),i=Be;if(i!==null)return Jm(e,i,t);nn(),e=e.memoizedState,i=nn();var r=i.queue.dispatch;return i.memoizedState=t,[e,r,!1]}function ds(t,e,i,r){return t={tag:t,create:i,deps:r,inst:e,next:null},e=ue.updateQueue,e===null&&(e=Jl(),ue.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t),t}function tg(){return nn().memoizedState}function ec(t,e,i,r){var l=In();ue.flags|=t,l.memoizedState=ds(1|e,{destroy:void 0},i,r===void 0?null:r)}function nc(t,e,i,r){var l=nn();r=r===void 0?null:r;var u=l.memoizedState.inst;Be!==null&&r!==null&&pf(r,Be.memoizedState.deps)?l.memoizedState=ds(e,u,i,r):(ue.flags|=t,l.memoizedState=ds(1|e,u,i,r))}function eg(t,e){ec(8390656,8,t,e)}function Tf(t,e){nc(2048,8,t,e)}function Ry(t){ue.flags|=4;var e=ue.updateQueue;if(e===null)e=Jl(),ue.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function ng(t){var e=nn().memoizedState;return Ry({ref:e,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function ig(t,e){return nc(4,2,t,e)}function ag(t,e){return nc(4,4,t,e)}function rg(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sg(t,e,i){i=i!=null?i.concat([t]):null,nc(4,4,rg.bind(null,e,t),i)}function bf(){}function og(t,e){var i=nn();e=e===void 0?null:e;var r=i.memoizedState;return e!==null&&pf(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function lg(t,e){var i=nn();e=e===void 0?null:e;var r=i.memoizedState;if(e!==null&&pf(e,r[1]))return r[0];if(r=t(),Tr){_n(!0);try{t()}finally{_n(!1)}}return i.memoizedState=[r,e],r}function Af(t,e,i){return i===void 0||(aa&1073741824)!==0&&(Se&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=v_(),ue.lanes|=t,Va|=t,i)}function cg(t,e,i,r){return Qn(i,e)?i:za.current!==null?(t=Af(t,i,r),Qn(t,e)||(ln=!0),t):(aa&106)===0||(aa&1073741824)!==0&&(Se&261930)===0?(ln=!0,t.memoizedState=i):(t=v_(),ue.lanes|=t,Va|=t,e)}function ug(t,e,i,r,l){var u=wt.p;wt.p=u!==0&&8>u?u:8;var g=Mt.T,E={};E.types=g!==null?g.types:null,Mt.T=E,wf(t,!1,e,i);try{var O=l(),Q=Mt.S;if(Q!==null&&Q(E,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var rt=My(O,r);zo(t,e,rt,ni(t))}else zo(t,e,r,ni(t))}catch(mt){zo(t,e,{then:function(){},status:"rejected",reason:mt},ni())}finally{wt.p=u,g!==null&&E.types!==null&&(g.types=E.types),Mt.T=g}}function Cy(){}function Rf(t,e,i,r){if(t.tag!==5)throw Error(s(476));var l=fg(t).queue;ug(t,l,e,Zt,i===null?Cy:function(){return dg(t),i(r)})}function fg(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Zt,baseState:Zt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:Zt},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function dg(t){var e=fg(t);e.next===null&&(e=t.alternate.memoizedState),zo(t,e.next.queue,{},ni())}function Cf(){return bn(Ns)}function hg(){return nn().memoizedState}function pg(){return nn().memoizedState}function wy(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=ni();t=Oa(i);var r=Pa(e,t,i);r!==null&&(Yn(r,e,i),Do(r,e,i)),e={cache:ef()},t.payload=e;return}e=e.return}}function Dy(t,e,i){var r=ni();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ic(t)?gg(e,i):(i=qu(t,e,i,r),i!==null&&(Yn(i,t,r),_g(i,e,r)))}function mg(t,e,i){var r=ni();zo(t,e,i,r)}function zo(t,e,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(ic(t))gg(e,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var g=e.lastRenderedState,E=u(g,i);if(l.hasEagerState=!0,l.eagerState=E,Qn(E,g))return Ol(t,e,l,0),Ve===null&&Ll(),!1}catch{}finally{}if(i=qu(t,e,l,r),i!==null)return Yn(i,t,r),_g(i,e,r),!0}return!1}function wf(t,e,i,r){if(r={lane:2,revertLane:xd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ic(t)){if(e)throw Error(s(479))}else e=qu(t,i,r,2),e!==null&&Yn(e,t,2)}function ic(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function gg(t,e){us=Kl=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function _g(t,e,i){if((i&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,R(t,i)}}var ac={readContext:bn,use:$l,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn,useEffectEvent:tn},vg={readContext:bn,use:$l,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:eg,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,ec(4194308,4,rg.bind(null,e,t),i)},useLayoutEffect:function(t,e){return ec(4194308,4,t,e)},useInsertionEffect:function(t,e){ec(4,2,t,e)},useMemo:function(t,e){var i=In();e=e===void 0?null:e;var r=t();if(Tr){_n(!0);try{t()}finally{_n(!1)}}return i.memoizedState=[r,e],r},useReducer:function(t,e,i){var r=In();if(i!==void 0){var l=i(e);if(Tr){_n(!0);try{i(e)}finally{_n(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=Dy.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:function(t){t=Mf(t);var e=t.queue,i=mg.bind(null,ue,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:bf,useDeferredValue:function(t,e){var i=In();return Af(i,t,e)},useTransition:function(){var t=Mf(!1);return t=ug.bind(null,ue,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var r=ue,l=In();if(me){if(i===void 0)throw Error(s(407));i=i()}else{if(i=e(),Ve===null)throw Error(s(349));(Se&127)!==0||Fm(r,e,i)}l.memoizedState=i;var u={value:i,getSnapshot:e};return l.queue=u,eg(Gm.bind(null,r,u,t),[t]),r.flags|=2048,ds(9,{destroy:void 0},Hm.bind(null,r,u,i,e),null),i},useId:function(){var t=In(),e=Ve.identifierPrefix;if(me){var i=Pi,r=Oi;i=(r&~(1<<32-Nn(r)-1)).toString(32)+i,e="_"+e+"R_"+i,i=Ql++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=Ey++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Cf,useFormState:Km,useActionState:Km,useOptimistic:function(t){var e=In();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=wf.bind(null,ue,!0,i),i.dispatch=e,[t,e]},useMemoCache:xf,useCacheRefresh:function(){return In().memoizedState=wy.bind(null,ue)},useEffectEvent:function(t){var e=In(),i={impl:t};return e.memoizedState=i,function(){if((Ne&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},xg={readContext:bn,use:$l,useCallback:og,useContext:bn,useEffect:Tf,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:tc,useRef:tg,useState:function(){return tc(ra)},useDebugValue:bf,useDeferredValue:function(t,e){var i=nn();return cg(i,Be.memoizedState,t,e)},useTransition:function(){var t=tc(ra)[0],e=nn().memoizedState;return[typeof t=="boolean"?t:Po(t),e]},useSyncExternalStore:Bm,useId:hg,useHostTransitionStatus:Cf,useFormState:Qm,useActionState:Qm,useOptimistic:function(t,e){var i=nn();return km(i,Be,t,e)},useMemoCache:xf,useCacheRefresh:pg,useEffectEvent:ng},Ny={readContext:bn,use:$l,useCallback:og,useContext:bn,useEffect:Tf,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:Sf,useRef:tg,useState:function(){return Sf(ra)},useDebugValue:bf,useDeferredValue:function(t,e){var i=nn();return Be===null?Af(i,t,e):cg(i,Be.memoizedState,t,e)},useTransition:function(){var t=Sf(ra)[0],e=nn().memoizedState;return[typeof t=="boolean"?t:Po(t),e]},useSyncExternalStore:Bm,useId:hg,useHostTransitionStatus:Cf,useFormState:$m,useActionState:$m,useOptimistic:function(t,e){var i=nn();return Be!==null?km(i,Be,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:xf,useCacheRefresh:pg,useEffectEvent:ng};function Df(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:z({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Nf={enqueueSetState:function(t,e,i){t=t._reactInternals;var r=ni(),l=Oa(r);l.payload=e,i!=null&&(l.callback=i),e=Pa(t,l,r),e!==null&&(Yn(e,t,r),Do(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=ni(),l=Oa(r);l.tag=1,l.payload=e,i!=null&&(l.callback=i),e=Pa(t,l,r),e!==null&&(Yn(e,t,r),Do(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=ni(),r=Oa(i);r.tag=2,e!=null&&(r.callback=e),e=Pa(t,r,i),e!==null&&(Yn(e,t,i),Do(e,t,i))}};function yg(t,e,i,r,l,u,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,g):e.prototype&&e.prototype.isPureReactComponent?!Mo(i,r)||!Mo(l,u):!0}function Sg(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&Nf.enqueueReplaceState(e,e.state,null)}function br(t,e){var i=e;if("ref"in e){i={};for(var r in e)r!=="ref"&&(i[r]=e[r])}if(t=t.defaultProps){i===e&&(i=z({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Mg(t){Ul(t)}function Eg(t){console.error(t)}function Tg(t){Ul(t)}function rc(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function bg(t,e,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Uf(t,e,i){return i=Oa(i),i.tag=3,i.payload={element:null},i.callback=function(){rc(t,e)},i}function Ag(t){return t=Oa(t),t.tag=3,t}function Rg(t,e,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;t.payload=function(){return l(u)},t.callback=function(){bg(e,i,r)}}var g=i.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){bg(e,i,r),typeof l!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function Uy(t,e,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=i.alternate,e!==null&&_r(e,i,l,!0),i=An.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Ln===null?Ac():i.alternate===null&&en===0&&(en=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===jl?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([r]):e.add(r),gd(t,r,l)),!1;case 22:return i.flags|=65536,r===jl?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([r]):i.add(r)),gd(t,r,l)),!1}throw Error(s(435,i.tag))}return gd(t,r,l),Ac(),!1}if(me)return e=An.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==Qu&&(t=Error(s(422),{cause:r}),bo(ci(t,i)))):(r!==Qu&&(e=Error(s(423),{cause:r}),bo(ci(e,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=ci(r,i),l=Uf(t.stateNode,r,l),lf(t,l),en!==4&&(en=2)),!1;var u=Error(s(520),{cause:r});if(u=ci(u,i),ko===null?ko=[u]:ko.push(u),en!==4&&(en=2),e===null)return!0;r=ci(r,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Uf(i.stateNode,r,t),lf(i,t),!1;case 1:if(e=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Xa===null||!Xa.has(u))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Ag(l),Rg(l,t,i,r),lf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Lf=Error(s(461)),ln=!1;function hn(t,e,i,r){e.child=t===null?Nm(e,null,i,r):Er(e,t.child,i,r)}function Cg(t,e,i,r,l){i=i.render;var u=e.ref;if("ref"in r){var g={};for(var E in r)E!=="ref"&&(g[E]=r[E])}else g=r;return vr(e),r=mf(t,e,i,g,u,l),E=gf(),t!==null&&!ln?(_f(t,e,l),sa(t,e,l)):(me&&E&&Bl(e),e.flags|=1,hn(t,e,r,l),e.child)}function wg(t,e,i,r,l){if(t===null){var u=i.type;return typeof u=="function"&&!Yu(u)&&u.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=u,Dg(t,e,u,r,l)):(t=zl(i.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Gf(t,l)){var g=u.memoizedProps;if(i=i.compare,i=i!==null?i:Mo,i(g,r)&&t.ref===e.ref)return sa(t,e,l)}return e.flags|=1,t=ta(u,r),t.ref=e.ref,t.return=e,e.child=t}function Dg(t,e,i,r,l){if(t!==null){var u=t.memoizedProps;if(Mo(u,r)&&t.ref===e.ref)if(ln=!1,e.pendingProps=r=u,Gf(t,l))(t.flags&131072)!==0&&(ln=!0);else return e.lanes=t.lanes,sa(t,e,l)}return Of(t,e,i,r,l)}function Ng(t,e,i,r){var l=r.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,t!==null){for(r=e.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,e.child=null;return Ug(t,e,u,i,r)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Xl(e,u!==null?u.cachePool:null),u!==null?Om(e,u):uf(),Pm(e);else return r=e.lanes=536870912,Ug(t,e,u!==null?u.baseLanes|i:i,i,r)}else u!==null?(Xl(e,u.cachePool),Om(e,u),Ba(),e.memoizedState=null):(t!==null&&Xl(e,null),uf(),Ba());return hn(t,e,l,i),e.child}function Io(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ug(t,e,i,r,l){var u=af();return u=u===null?null:{parent:sn._currentValue,pool:u},e.memoizedState={baseLanes:i,cachePool:u},t!==null&&Xl(e,null),uf(),Pm(e),t!==null&&_r(t,e,r,!0),e.childLanes=l,null}function sc(t,e){return e=oc({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Lg(t,e,i){return Er(e,t.child,null,i),t=sc(e,e.pendingProps),t.flags|=2,Jn(e),e.memoizedState=null,t}function Ly(t,e,i){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(me){if(r.mode==="hidden")return t=sc(e,r),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Io(null,t);if(df(e),(t=je)?(t=rv(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=gm(t),i.return=e,e.child=i,xn=e,je=null)):t=null,t===null)throw Da(e);return e.lanes=536870912,null}return sc(e,r)}var u=t.memoizedState;if(u!==null){var g=u.dehydrated;if(df(e),l)if(e.flags&256)e.flags&=-257,e=Lg(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(ln||_r(t,e,i,!1),l=(i&t.childLanes)!==0,ln||l){if(za.current===null){if(r=Ve,r!==null&&(g=J(r,i),g!==0&&g!==u.retryLane))throw u.retryLane=g,hr(t,g),Yn(r,t,g),Lf;Ac()}e=Lg(t,e,i)}else t=u.treeContext,je=pi(g.nextSibling),xn=e,me=!0,wa=null,di=!1,t!==null&&xm(e,t),e=sc(e,r),e.flags|=134221824;return e}return t=ta(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function hs(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Of(t,e,i,r,l){return vr(e),i=mf(t,e,i,r,void 0,l),r=gf(),t!==null&&!ln?(_f(t,e,l),sa(t,e,l)):(me&&r&&Bl(e),e.flags|=1,hn(t,e,i,l),e.child)}function Og(t,e,i,r,l,u){return vr(e),e.updateQueue=null,i=Im(e,r,i,l),zm(t),r=gf(),t!==null&&!ln?(_f(t,e,u),sa(t,e,u)):(me&&r&&Bl(e),e.flags|=1,hn(t,e,i,u),e.child)}function Pg(t,e,i,r,l){if(vr(e),e.stateNode===null){var u=is,g=i.contextType;typeof g=="object"&&g!==null&&(u=bn(g)),u=new i(r,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Nf,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=r,u.state=e.memoizedState,u.refs={},sf(e),g=i.contextType,u.context=typeof g=="object"&&g!==null?bn(g):is,u.state=e.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Df(e,i,g,r),u.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(g=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),g!==u.state&&Nf.enqueueReplaceState(u,u.state,null),Uo(e,r,u,l),No(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){u=e.stateNode;var E=e.memoizedProps,O=br(i,E);u.props=O;var Q=u.context,rt=i.contextType;g=is,typeof rt=="object"&&rt!==null&&(g=bn(rt));var mt=i.getDerivedStateFromProps;rt=typeof mt=="function"||typeof u.getSnapshotBeforeUpdate=="function",E=e.pendingProps!==E,rt||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(E||Q!==g)&&Sg(e,u,r,g),La=!1;var Y=e.memoizedState;u.state=Y,Uo(e,r,u,l),No(),Q=e.memoizedState,E||Y!==Q||La?(typeof mt=="function"&&(Df(e,i,mt,r),Q=e.memoizedState),(O=La||yg(e,i,O,r,Y,Q,g))?(rt||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=Q),u.props=r,u.state=Q,u.context=g,r=O):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,of(t,e),g=e.memoizedProps,rt=br(i,g),u.props=rt,mt=e.pendingProps,Y=u.context,Q=i.contextType,O=is,typeof Q=="object"&&Q!==null&&(O=bn(Q)),E=i.getDerivedStateFromProps,(Q=typeof E=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==mt||Y!==O)&&Sg(e,u,r,O),La=!1,Y=e.memoizedState,u.state=Y,Uo(e,r,u,l),No();var it=e.memoizedState;g!==mt||Y!==it||La||t!==null&&t.dependencies!==null&&Gl(t.dependencies)?(typeof E=="function"&&(Df(e,i,E,r),it=e.memoizedState),(rt=La||yg(e,i,rt,r,Y,it,O)||t!==null&&t.dependencies!==null&&Gl(t.dependencies))?(Q||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,it,O),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,it,O)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=it),u.props=r,u.state=it,u.context=O,r=rt):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(e.flags|=1024),r=!1)}return u=r,hs(t,e),r=(e.flags&128)!==0,u||r?(u=e.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&r?(e.child=Er(e,t.child,null,l),e.child=Er(e,null,i,l)):hn(t,e,i,l),e.memoizedState=u.state,t=e.child):t=sa(t,e,l),t}function zg(t,e,i,r){return mr(),e.flags|=256,hn(t,e,i,r),e.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zf(t){return{baseLanes:t,cachePool:bm()}}function If(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=ei),t}function Ig(t,e,i){var r=e.pendingProps,l=!1,u=(e.flags&128)!==0,g;if((g=u)||(g=t!==null&&t.memoizedState===null?!1:(Rn.current&2)!==0),g&&(l=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,t===null){if(me){if(l?Ia(e):Ba(),(t=je)?(t=rv(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=gm(t),i.return=e,e.child=i,xn=e,je=null)):t=null,t===null)throw Da(e);return zd(t)?e.lanes=32:e.lanes=536870912,null}return u=r.children,r=r.fallback,l?(Ba(),l=e.mode,u=oc({mode:"hidden",children:u},l),r=pr(r,l,i,null),u.return=e,r.return=e,u.sibling=r,e.child=u,r=e.child,r.memoizedState=zf(i),r.childLanes=If(t,g,i),e.memoizedState=Pf,Io(null,r)):(Ia(e),Bf(e,u))}var E=t.memoizedState;if(E!==null){var O=E.dehydrated;if(O!==null)return Oy(t,e,u,g,r,O,E,i)}return l?(Ba(),l=r.fallback,u=e.mode,E=t.child,O=E.sibling,r=ta(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,O!==null?l=ta(O,l):(l=pr(l,u,i,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,Io(null,r),r=e.child,l=t.child.memoizedState,l===null?l=zf(i):(u=l.cachePool,u!==null?(E=sn._currentValue,u=u.parent!==E?{parent:E,pool:E}:u):u=bm(),l={baseLanes:l.baseLanes|i,cachePool:u}),r.memoizedState=l,r.childLanes=If(t,g,i),e.memoizedState=Pf,Io(t.child,r)):(Ia(e),i=t.child,t=i.sibling,i=ta(i,{mode:"visible",children:r.children}),i.return=e,i.sibling=null,t!==null&&(g=e.deletions,g===null?(e.deletions=[t],e.flags|=16):g.push(t)),e.child=i,e.memoizedState=null,i)}function Bf(t,e){return e=oc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function oc(t,e){return t=Xn(22,t,null,e),t.lanes=0,t}function lc(t,e,i){return Er(e,t.child,null,i),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Oy(t,e,i,r,l,u,g,E){if(i)return e.flags&256?(Ia(e),e.flags&=-257,lc(t,e,E)):e.memoizedState!==null?(Ba(),e.child=t.child,e.flags|=128,null):(Ba(),u=l.fallback,g=e.mode,l=oc({mode:"visible",children:l.children},g),u=pr(u,g,E,null),u.flags|=2,l.return=e,u.return=e,l.sibling=u,e.child=l,Er(e,t.child,null,E),l=e.child,l.memoizedState=zf(E),l.childLanes=If(t,r,E),e.memoizedState=Pf,Io(null,l));if(Ia(e),zd(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var O=r.dgst;return r=O,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,bo({value:l,source:null,stack:null})),lc(t,e,E)}if(ln||_r(t,e,E,!1),r=(E&t.childLanes)!==0,ln||r){if(za.current!==null)return lc(t,e,E);if(r=Ve,r!==null&&(l=J(r,E),l!==0&&l!==g.retryLane))throw g.retryLane=l,hr(t,l),Yn(r,t,l),Lf;return Pd(u)||Ac(),lc(t,e,E)}return Pd(u)?(e.flags|=192,e.child=t.child,null):(t=g.treeContext,je=pi(u.nextSibling),xn=e,me=!0,wa=null,di=!1,t!==null&&xm(e,t),e=Bf(e,l.children),e.flags|=134221824,e)}function Bg(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hl(t.return,e,i)}function Fg(t){for(var e=null;t!==null;){var i=t.alternate;i!==null&&Zl(i)===null&&(e=t),t=t.sibling}return e}function cc(t,e,i,r,l,u){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:u}:(g.isBackwards=e,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=i,g.tailMode=l,g.treeForkCount=u)}function Ff(t){var e=t.child;for(t.child=null;e!==null;){var i=e.sibling;e.sibling=t.child,t.child=e,e=i}}function Hf(t,e,i){var r=e.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var g=Rn.current;if(e.flags&128)return Lo(e,g),null;var E=(g&2)!==0;if(E?(g=g&1|2,e.flags|=128):g&=1,Lo(e,g),l==="backwards"&&t!==null?(Ff(t),hn(t,e,r,i),Ff(t)):hn(t,e,r,i),r=me?To:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bg(t,i,e);else if(t.tag===19)Bg(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=Fg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null,Ff(e)),cc(e,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(i=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Zl(t)===null){e.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}cc(e,!0,i,null,u,r);break;case"together":cc(e,!1,null,null,void 0,r);break;case"independent":e.memoizedState=null;break;default:i=Fg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null),cc(e,!1,l,i,u,r)}return e.child}function Hg(t,e,i){var r=e.pendingProps;return Na(e,e.type,r.value),hn(t,e,r.children,i),e.child}function sa(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Va|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(_r(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,i=ta(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=ta(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function Gf(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Gl(t)))}function Py(t,e,i){switch(e.tag){case 3:at(e,e.stateNode.containerInfo),Na(e,sn,t.memoizedState.cache),mr();break;case 27:case 5:Et(e);break;case 4:at(e,e.stateNode.containerInfo);break;case 10:Na(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,df(e),null;break;case 13:var r=e.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ia(e),e.flags|=128,null;r=_r(t,e,i,!1);var l=e.child.childLanes;return r||(i&l)!==0?Ig(t,e,i):(Ia(e),t=sa(t,e,i),t!==null?t.sibling:null)}Ia(e);break;case 19:if(e.flags&128)return Hf(t,e,i);if(l=(t.flags&128)!==0,r=(i&e.childLanes)!==0,r||(_r(t,e,i,!1),r=(i&e.childLanes)!==0),l){if(r)return Hf(t,e,i);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Lo(e,Rn.current),r)break;return null;case 22:return e.lanes=0,Ng(t,e,i,e.pendingProps);case 24:Na(e,sn,t.memoizedState.cache)}return sa(t,e,i)}function Gg(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)ln=!0;else{if(!Gf(t,i)&&(e.flags&128)===0)return ln=!1,Py(t,e,i);ln=(t.flags&131072)!==0}else ln=!1,me&&(e.flags&1048576)!==0&&vm(e,To,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=Sr(e.elementType),e.type=t,typeof t=="function")Yu(t)?(r=br(t,r),e.tag=1,e=Pg(null,e,t,r,i)):(e.tag=0,e=Of(null,e,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===Z){e.tag=11,e=Cg(null,e,t,r,i);break t}else if(l===Tt){e.tag=14,e=wg(null,e,t,r,i);break t}else if(l===gt){e.tag=10,e.type=t,e=Hg(null,e,i);break t}}throw e=Dt(t)||t,Error(s(306,e,""))}}return e;case 0:return Of(t,e,e.type,e.pendingProps,i);case 1:return r=e.type,l=br(r,e.pendingProps),Pg(t,e,r,l,i);case 3:t:{if(at(e,e.stateNode.containerInfo),t===null)throw Error(s(387));r=e.pendingProps;var u=e.memoizedState;l=u.element,of(t,e),Uo(e,r,null,i);var g=e.memoizedState;if(r=g.cache,Na(e,sn,r),r!==u.cache&&tf(e,[sn],i,!0),No(),r=g.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=zg(t,e,r,i);break t}else if(r!==l){l=ci(Error(s(424)),e),bo(l),e=zg(t,e,r,i);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=pi(t.firstChild),xn=e,me=!0,wa=null,di=!0,i=Nm(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(mr(),r===l){e=sa(t,e,i);break t}hn(t,e,r,i)}e=e.child}return e;case 26:return hs(t,e),t===null?(i=dv(e.type,null,e.pendingProps,null))?e.memoizedState=i:me||(e.stateNode=j_(e.type,e.pendingProps,L.current,e)):e.memoizedState=dv(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Et(e),t===null&&me&&(r=e.stateNode=lv(e.type,e.pendingProps,L.current),xn=e,di=!0,l=je,qa(e.type)?(Id=l,je=pi(r.firstChild)):je=l),hn(t,e,e.pendingProps.children,i),hs(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&me&&((l=r=je)&&(r=wS(r,e.type,e.pendingProps,di),r!==null?(e.stateNode=r,xn=e,je=pi(r.firstChild),di=!1,l=!0):l=!1),l||Da(e)),Et(e),l=e.type,u=e.pendingProps,g=t!==null?t.memoizedProps:null,r=u.children,Cd(l,u)?r=null:g!==null&&Cd(l,g)&&(e.flags|=32),e.memoizedState!==null&&(l=mf(t,e,Ty,null,null,i),Ns._currentValue=l),hs(t,e),hn(t,e,r,i),e.child;case 6:return t===null&&me&&((t=i=je)&&(i=DS(i,e.pendingProps,di),i!==null?(e.stateNode=i,xn=e,je=null,t=!0):t=!1),t||Da(e)),null;case 13:return Ig(t,e,i);case 4:return at(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Er(e,null,r,i):hn(t,e,r,i),e.child;case 11:return Cg(t,e,e.type,e.pendingProps,i);case 7:return r=e.pendingProps,hs(t,e),hn(t,e,r,i),e.child;case 8:return hn(t,e,e.pendingProps.children,i),e.child;case 12:return hn(t,e,e.pendingProps.children,i),e.child;case 10:return Hg(t,e,i);case 9:return l=e.type._context,r=e.pendingProps.children,vr(e),l=bn(l),r=r(l),e.flags|=1,hn(t,e,r,i),e.child;case 14:return wg(t,e,e.type,e.pendingProps,i);case 15:return Dg(t,e,e.type,e.pendingProps,i);case 19:return Hf(t,e,i);case 31:return Ly(t,e,i);case 22:return Ng(t,e,i,e.pendingProps);case 24:return vr(e),r=bn(sn),t===null?(l=af(),l===null&&(l=Ve,u=ef(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=i),l=u),e.memoizedState={parent:r,cache:l},sf(e),Na(e,sn,l)):((t.lanes&i)!==0&&(of(t,e),Uo(e,null,null,i),No()),l=t.memoizedState,u=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Na(e,sn,r)):(r=u.cache,Na(e,sn,r),r!==l.cache&&tf(e,[sn],i,!0))),hn(t,e,e.pendingProps.children,i),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=e.pendingProps,r.name!=null&&r.name!=="auto"?e.flags|=t===null?18882560:18874368:me&&Bl(e),t!==null&&t.memoizedProps.name!==r.name?e.flags|=4194816:hs(t,e),hn(t,e,r.children,i),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function oa(t){t.flags|=4}function Vf(t,e,i,r,l){var u;if((u=(t.mode&32)!==0)&&(u=i===null?gv(e,r):gv(e,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),u){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(M_())t.flags|=8192;else throw Mr=jl,rf}else t.flags&=-16777217}function Vg(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_v(e))if(M_())t.flags|=8192;else throw Mr=jl,rf}function uc(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Sl():536870912,t.lanes|=e,vs|=e)}function Bo(t,e){if(!me)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(e=t.tail,i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null}}function qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function zy(t,e,i){var r=e.pendingProps;switch(Ku(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(e),null;case 1:return qe(e),null;case 3:return i=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),ia(sn),xt(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ss(e)?oa(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ju())),qe(e),null;case 26:var l=e.type,u=e.memoizedState;return t===null?(oa(e),u!==null?(qe(e),Vg(e,u)):(qe(e),Vf(e,l,null,r,i))):u?u!==t.memoizedState?(oa(e),qe(e),Vg(e,u)):(qe(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&oa(e),qe(e),Vf(e,l,t,r,i)),null;case 27:if(_t(e),i=L.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&oa(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return qe(e),e.subtreeFlags&=-33554433,null}t=oe.current,ss(e)?ym(e):(t=lv(l,r,i),e.stateNode=t,oa(e))}return qe(e),e.subtreeFlags&=-33554433,null;case 5:if(_t(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&oa(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return qe(e),e.subtreeFlags&=-33554433,null}if(u=oe.current,ss(e))ym(e);else{var g=Zo(L.current);switch(u){case 1:u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=g.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}u[Ut]=e,u[zt]=r;t:for(g=e.child;g!==null;){if(g.tag===5||g.tag===6)u.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break t;for(;g.sibling===null;){if(g.return===null||g.return===e)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}e.stateNode=u;t:switch(wn(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&oa(e)}}return qe(e),e.subtreeFlags&=-33554433,Vf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&oa(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=L.current,ss(e)){if(t=e.stateNode,i=e.memoizedProps,r=null,l=xn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[Ut]=e,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||G_(t.nodeValue,i)),t||Da(e,!0)}else t=Zo(t).createTextNode(r),t[Ut]=e,e.stateNode=t}return qe(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(r=ss(e),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ut]=e}else mr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;qe(e),t=!1}else i=Ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(Jn(e),e):(Jn(e),null);if((e.flags&128)!==0)throw Error(s(558))}return qe(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ss(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Ut]=e}else mr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;qe(e),l=!1}else l=Ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Jn(e),e):(Jn(e),null)}return Jn(e),(e.flags&128)!==0?(e.lanes=i,e):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),uc(e,e.updateQueue),qe(e),null);case 4:return xt(),t===null&&Ed(e.stateNode.containerInfo),e.flags|=67108864,qe(e),null;case 10:return ia(e.type),qe(e),null;case 19:if(hf(e),r=e.memoizedState,r===null)return qe(e),null;if(l=(e.flags&128)!==0,u=r.rendering,u===null)if(l)Bo(r,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Zl(t),u!==null){for(e.flags|=128,Bo(r,!1),t=u.updateQueue,e.updateQueue=t,uc(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)mm(i,t),i=i.sibling;return Lo(e,Rn.current&1|2),me&&ea(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&j()>Mc&&(e.flags|=128,l=!0,Bo(r,!1),e.lanes=4194304)}else{if(!l)if(t=Zl(u),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,uc(e,t),Bo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!me)return qe(e),null}else 2*j()-r.renderingStartTime>Mc&&i!==536870912&&(e.flags|=128,l=!0,Bo(r,!1),e.lanes=4194304);r.isBackwards?(u.sibling=e.child,e.child=u):(t=r.last,t!==null?t.sibling=u:e.child=u,r.last=u)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=j(),t.sibling=null,u=Rn.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||me?Lo(e,u):(i=u,Nt(An,e),Nt(Rn,i),Ln===null&&(Ln=e)),me&&ea(e,r.treeForkCount),t}return qe(e),null;case 22:case 23:return Jn(e),ff(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(i&536870912)!==0&&(e.flags&128)===0&&(qe(e),e.subtreeFlags&6&&(e.flags|=8192)):qe(e),i=e.updateQueue,i!==null&&uc(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==i&&(e.flags|=2048),t!==null&&Yt(yr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ia(sn),qe(e),null;case 25:return null;case 30:return e.flags|=33554432,qe(e),null}throw Error(s(156,e.tag))}function Iy(t,e){switch(Ku(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ia(sn),xt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return _t(e),null;case 31:if(e.memoizedState!==null){if(Jn(e),e.alternate===null)throw Error(s(340));mr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Jn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));mr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return hf(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return xt(),null;case 10:return ia(e.type),null;case 22:case 23:return Jn(e),ff(),t!==null&&Yt(yr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ia(sn),null;case 25:return null;default:return null}}function Xg(t,e){switch(Ku(e),e.tag){case 3:ia(sn),xt();break;case 26:case 27:case 5:_t(e);break;case 4:xt();break;case 31:e.memoizedState!==null&&Jn(e);break;case 13:Jn(e);break;case 19:hf(e);break;case 10:ia(e.type);break;case 22:case 23:Jn(e),ff(),t!==null&&Yt(yr);break;case 24:ia(sn)}}function Fo(t,e){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var u=i.create,g=i.inst;r=u(),g.destroy=r}i=i.next}while(i!==l)}}catch(E){Oe(e,e.return,E)}}function Fa(t,e,i){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&t)===t){var g=r.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,l=e;var O=i,Q=E;try{Q()}catch(rt){Oe(l,O,rt)}}}r=r.next}while(r!==u)}}catch(rt){Oe(e,e.return,rt)}}function kg(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{Lm(e,i)}catch(r){Oe(t,t.return,r)}}}function jg(t,e,i){i.props=br(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){Oe(t,e,r)}}function zi(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,u=Ji(t.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=J_(u)),r=l.ref;break;case 7:if(t.stateNode===null){var g=new ii(t);m(t.child,!1,RS,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){Oe(t,e,E)}}function Cn(t,e){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){Oe(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Oe(t,e,l)}else i.current=null}function fc(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var i=0;i<e.length;i++)av(t.stateNode,e[i])}function qg(t){for(var e=t.return;e!==null&&(kf(e)&&av(t.stateNode,e.stateNode),!Xf(e));)e=e.return}function Ho(t){for(var e=t.return;e!==null&&(kf(e)&&CS(t.stateNode,e.stateNode),!Xf(e));)e=e.return}function Xf(t){return t.tag===5||t.tag===3||t.tag===27}function kf(t){return t&&t.tag===7&&t.stateNode!==null}function jf(t){var e=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){Oe(t,t.return,l)}}function qf(t,e,i){try{var r=t.stateNode;cS(r,t.type,i,e),r[zt]=e}catch(l){Oe(t,t.return,l)}}function Yg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function Yf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wf(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(l),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Li)),fc(t,r),we=!0;else if(l!==4&&(l===27&&(fc(t,r),r=null,qa(t.type)&&(i=t.stateNode,e=null)),t=t.child,t!==null))for(Wf(t,e,i,r),t=t.sibling;t!==null;)Wf(t,e,i,r),t=t.sibling}function dc(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?i.insertBefore(l,e):i.appendChild(l),fc(t,r),we=!0;else if(l!==4&&(l===27&&(fc(t,r),r=null,qa(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(dc(t,e,i,r),t=t.sibling;t!==null;)dc(t,e,i,r),t=t.sibling}function Wg(t){var e=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);wn(e,r,i),e[Ut]=t,e[zt]=i}catch(u){Oe(t,t.return,u)}}var hc=!1,$n=null;function Zg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(hc=!0)}var Ii=null;function Kg(){var t=Ii;return Ii=null,t}var kn=0;function ps(t,e,i,r,l){return kn=0,Qg(t.child,e,i,r,l)}function Qg(t,e,i,r,l){for(var u=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var E=Nd(g);r.push(E),E.view&&(u=!0)}else u||Nd(g).view&&(u=!0);hc=!0,K_(g,kn===0?e:e+"_"+kn,i),kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||Qg(t.child,e,i,r,l)&&(u=!0));t=t.sibling}return u}function Bi(t,e){for(;t!==null;)t.tag===5?Q_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Bi(t.child,e)),t=t.sibling}function pc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(pc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(s(544));var i=e.name;e=$i(e.default,e.share),e!=="none"&&(ps(t,i,e,null,!1)||Bi(t.child,!1))}t=t.sibling}}function Zf(t,e){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=Ji(r,i),u=$i(r.default,i.paired?r.share:r.enter);u!=="none"?ps(t,l,u,null,!1)?(pc(t),i.paired||e||Ms(t,r.onEnter)):Bi(t.child,!1):pc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Zf(t,e),t=t.sibling;else pc(t)}function Kf(t){if($n!==null&&$n.size!==0){var e=$n;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=e.get(r);if(l!==void 0){var u=$i(i.default,i.share);if(u!=="none"&&(ps(t,r,u,null,!1)?(u=t.stateNode,l.paired=u,u.paired=l,Ms(t,i.onShare)):Bi(t.child,!1)),e.delete(r),e.size===0)break}}}Kf(t)}t=t.sibling}}}function Qf(t){if(t.tag===30){var e=t.memoizedProps,i=Ji(e,t.stateNode),r=$n!==null?$n.get(i):void 0,l=$i(e.default,r!==void 0?e.share:e.exit);l!=="none"&&(ps(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,$n.delete(i),Ms(t,e.onShare)):Ms(t,e.onExit):Bi(t.child,!1)),$n!==null&&Kf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Qf(t),t=t.sibling;else $n!==null&&Kf(t)}function Jg(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,i=Ji(e,t.stateNode);e=$i(e.default,e.update),t.flags&=-5,e!=="none"&&ps(t,i,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Jg(t);t=t.sibling}}function Jf(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Bi(t.child,!1))}Jf(t)}t=t.sibling}}function mc(t){if(t.tag===30)t.stateNode.paired=null,Bi(t.child,!1),Jf(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)mc(t),t=t.sibling;else Jf(t)}function $g(t){for(t=t.child;t!==null;)t.tag===30?Bi(t.child,!1):(t.subtreeFlags&33554432)!==0&&$g(t),t=t.sibling}function $f(t,e,i,r,l,u,g){for(var E=!1;e!==null;){if(e.tag===5){var O=e.stateNode;if(u!==null&&kn<u.length){var Q=u[kn],rt=Nd(O);(Q.view||rt.view)&&(E=!0);var mt;if(mt=(t.flags&4)===0)if(rt.clip)mt=!0;else{mt=Q.rect;var Y=rt.rect;mt=mt.y!==Y.y||mt.x!==Y.x||mt.height!==Y.height||mt.width!==Y.width}mt&&(t.flags|=4),rt.abs?rt=!Q.abs:(Q=Q.rect,rt=rt.rect,rt=Q.height!==rt.height||Q.width!==rt.width),rt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&K_(O,kn===0?i:i+"_"+kn,l),E&&(t.flags&4)!==0||(Ii===null&&(Ii=[]),Ii.push(O,kn===0?r:r+"_"+kn,e.memoizedProps)),kn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&g?t.flags|=e.flags&32:$f(t,e.child,i,r,l,u,g)&&(E=!0));e=e.sibling}return E}function t_(t,e){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=Ji(i,r),u=$i(i.default,i.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;kn=0,l=$f(r,E,l,l,u,g,!1),(t.flags&4)!==0&&l&&Ms(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&t_(t);t=t.sibling}}var yn=!1,Ue=!1,Fi=!1,td=!1,e_=typeof WeakSet=="function"?WeakSet:Set,Sn=null,Hi=!1,Go=!1,gc=!1,ed=!1;function By(t,e,i){if(t=t.containerInfo,Ad=Us,t=rm(t),Hu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var E=0,O=-1,Q=-1,rt=0,mt=0,Y=t,it=null;e:for(;;){for(var Pt;Y!==r||u!==0&&Y.nodeType!==3||(O=E+u),Y!==g||l!==0&&Y.nodeType!==3||(Q=E+l),Y.nodeType===3&&(E+=Y.nodeValue.length),(Pt=Y.firstChild)!==null;)it=Y,Y=Pt;for(;;){if(Y===t)break e;if(it===r&&++rt===u&&(O=E),it===g&&++mt===l&&(Q=E),(Pt=Y.nextSibling)!==null)break;Y=it,it=Y.parentNode}Y=Pt}r=O===-1||Q===-1?null:{start:O,end:Q}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rd={focusedElem:t,selectionRange:r},Us=!1,i=(i&335544064)===i,Sn=e,e=i?9270:1024;Sn!==null;){if(t=Sn,i&&(r=t.deletions,r!==null))for(u=0;u<r.length;u++)i&&Qf(r[u]);if(t.alternate===null&&(t.flags&2)!==0)i&&Zg(t),_c(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&Qf(r),_c(i);continue}else if(r!==null&&r.memoizedState!==null){i&&Zg(t),_c(i);continue}}r=t.child,(t.subtreeFlags&e)!==0&&r!==null?(r.return=t,Sn=r):(i&&Jg(t),_c(i))}}$n=null}function _c(t){for(;Sn!==null;){var e=Sn,i=t,r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var u=e.stateNode;try{var g=br(e.type,l);i=u.getSnapshotBeforeUpdate(g,r),u.__reactInternalSnapshotBeforeUpdate=i}catch(E){Oe(e,e.return,E)}}break;case 3:if((l&1024)!==0){if(r=e.stateNode.containerInfo,i=r.nodeType,i===9)Od(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Od(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=Ji(r.memoizedProps,r.stateNode),l=e.memoizedProps,l=$i(l.default,l.update),l!=="none"&&ps(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=e.sibling,r!==null){r.return=e.return,Sn=r;break}Sn=e.return}}function n_(t,e,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Gi(t,i),r&4&&Fo(5,i);break;case 1:if(Gi(t,i),r&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(g){Oe(i,i.return,g)}else{var l=br(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Oe(i,i.return,g)}}r&64&&kg(i),r&512&&zi(i,i.return);break;case 3:if(Gi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Lm(t,e)}catch(g){Oe(i,i.return,g)}}break;case 27:e===null&&r&4&&Wg(i);case 26:case 5:Gi(t,i),e===null&&r&4&&jf(i),r&512&&zi(i,i.return);break;case 12:Gi(t,i);break;case 31:Gi(t,i),r&4&&s_(t,i);break;case 13:Gi(t,i),r&4&&o_(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=Ky.bind(null,i),NS(t,i))));break;case 22:if(r=i.memoizedState!==null||yn,!r){var u=e!==null&&e.memoizedState!==null||Ue;e=yn,l=Ue,yn=r,(Ue=u)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Mi(t,i,r)):Gi(t,i),yn=e,Ue=l}break;case 30:Gi(t,i),r&512&&zi(i,i.return);break;case 7:r&512&&zi(i,i.return);default:Gi(t,i)}}function nd(t,e){for(t=t.child;t!==null;)i_(t,e),t=t.sibling}function i_(t,e){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(e){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,u=t.memoizedProps.style,g=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(O){Oe(t,t.return,O)}id(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,we=!0}catch(O){Oe(t,t.return,O)}break;case 18:try{var E=t.stateNode;e?Z_(E,!0):Z_(t.stateNode,!1)}catch(O){Oe(t,t.return,O)}break;case 22:case 23:t.memoizedState===null&&nd(t,e);break;default:nd(t,e)}}function id(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=e;switch(i.tag){case 4:i_(i,r);break t;case 22:i.memoizedState===null&&id(i,r);break t;default:id(i,r)}}t=t.sibling}}function a_(t){var e=t.alternate;e!==null&&(t.alternate=null,a_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&_e(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,jn=!1;function yi(t,e,i){for(i=i.child;i!==null;)r_(t,e,i),i=i.sibling}function r_(t,e,i){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Te,i)}catch{}switch(i.tag){case 26:Ue||Cn(i,e),yi(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Ue&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ue||Cn(i,e),Ho(i);var r=Qe,l=jn;qa(i.type)&&(Qe=i.stateNode,jn=!1),yi(t,e,i),cv(i.stateNode,i.type,i.memoizedProps),Qe=r,jn=l;break;case 5:Ue||Cn(i,e),Ho(i);case 6:if(i.tag===6&&Ho(i),r=Qe,l=jn,Qe=null,yi(t,e,i),Qe=r,jn=l,Qe!==null)if(jn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(i.stateNode),we=!0}catch(u){Oe(i,e,u)}else try{Qe.removeChild(i.stateNode),we=!0}catch(u){Oe(i,e,u)}break;case 18:Qe!==null&&(jn?(t=Qe,W_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Ls(t)):W_(Qe,i.stateNode));break;case 4:r=Qe,l=jn,Qe=i.stateNode.containerInfo,jn=!0,yi(t,e,i),Qe=r,jn=l;break;case 0:case 11:case 14:case 15:Fa(2,i,e),Ue||Fa(4,i,e),yi(t,e,i);break;case 1:Ue||(Cn(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"&&jg(i,e,r)),yi(t,e,i);break;case 21:yi(t,e,i);break;case 22:Ue=(r=Ue)||i.memoizedState!==null,yi(t,e,i),Ue=r;break;case 30:Cn(i,e),yi(t,e,i);break;case 7:Ue||Cn(i,e),yi(t,e,i);break;default:yi(t,e,i)}}function s_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ls(t)}catch(i){Oe(e,e.return,i)}}}function o_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ls(t)}catch(i){Oe(e,e.return,i)}}function Fy(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new e_),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new e_),e;default:throw Error(s(435,t.tag))}}function vc(t,e){var i=Fy(t);e.forEach(function(r){if(!i.has(r)){i.add(r);var l=Qy.bind(null,t,r);r.then(l,l)}})}function Bn(t,e,i){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],g=t,E=e,O=E;t:for(;O!==null;){switch(O.tag){case 27:if(qa(O.type)){Qe=O.stateNode,jn=!1;break t}break;case 5:Qe=O.stateNode,jn=!1;break t;case 3:case 4:Qe=O.stateNode.containerInfo,jn=!0;break t}O=O.return}if(Qe===null)throw Error(s(160));r_(g,E,u),Qe=null,jn=!1,g=u.alternate,g!==null&&(g.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)l_(e,t,i),e=e.sibling}var Si=null;function l_(t,e,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var g=r[u];g.ref.impl=g.nextImpl}Bn(e,t,i),Fn(t),l&4&&(Fa(3,t,t.return),Fo(3,t),Fa(5,t,t.return));break;case 1:Bn(e,t,i),Fn(t),l&512&&(Ue||r===null||Cn(r,r.return)),l&64&&yn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?e:i.concat(e))));break;case 26:if(u=Si,Bn(e,t,i),Fn(t),l&512&&(Ue||r===null||Cn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(yn)t.stateNode=j_(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,i=t.memoizedProps,l=u.ownerDocument||u;e:switch(e){case"title":r=l.getElementsByTagName("title")[0],(!r||r[ke]||r[Ut]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(e),l.head.insertBefore(r,l.querySelector("head > title"))),wn(r,e,i),r[Ut]=t,We(r),e=r;break t;case"link":if(u=mv("link","href",l).get(e+(i.href||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){u.splice(g,1);break e}}r=l.createElement(e),wn(r,e,i),l.head.appendChild(r);break;case"meta":if(u=mv("meta","content",l).get(e+(i.content||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){u.splice(g,1);break e}}r=l.createElement(e),wn(r,e,i),l.head.appendChild(r);break;default:throw Error(s(468,e))}r[Ut]=t,We(r),e=r}t.stateNode=e}else yn||Gd(u,t.type,t.stateNode);else t.stateNode=pv(u,i,t.memoizedProps);else l!==i?(l===null?(e=r.stateNode,e===null||Ue||e.parentNode.removeChild(e)):l.count--,i===null?yn||Gd(u,t.type,t.stateNode):pv(u,i,t.memoizedProps)):i===null&&t.stateNode!==null&&qf(t,t.memoizedProps,r.memoizedProps);break;case 27:Bn(e,t,i),Fn(t),l&512&&(Ue||r===null||Cn(r,r.return)),r!==null&&l&4&&qf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(u=Fi,Fi=!1,Bn(e,t,i),Fi=u,Fn(t),l&512&&(Ue||r===null||Cn(r,r.return)),t.flags&32){e=t.stateNode;try{Kr(e,""),we=!0}catch(rt){Oe(t,t.return,rt)}}l&4&&t.stateNode!=null&&(e=t.memoizedProps,qf(t,e,r!==null?r.memoizedProps:e)),l&1024&&(td=!0);break;case 6:if(Bn(e,t,i),Fn(t),l&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,i=t.stateNode;try{i.nodeValue=e,we=!0}catch(rt){Oe(t,t.return,rt)}}break;case 3:if(we=!1,Lc=null,u=Si,Si=Ko(e.containerInfo),Bn(e,t,i),Si=u,Fn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ls(e.containerInfo)}catch(rt){Oe(t,t.return,rt)}td&&(td=!1,c_(t)),we=!1;break;case 4:l=Fi,Fi=yn,r=wp(),u=Si,Si=Ko(t.stateNode.containerInfo),Bn(e,t,i),Fn(t),Si=u,we&&Go&&(gc=!0),we=r,Fi=l;break;case 12:Bn(e,t,i),Fn(t);break;case 31:Bn(e,t,i),Fn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,vc(t,e)));break;case 13:Bn(e,t,i),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Sc=j()),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,vc(t,e)));break;case 22:u=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var E=yn,O=Ue,Q=Fi;yn=E||u,Fi=Q||u,Ue=O||g,Bn(e,t,i),Ue=O,Fi=Q,yn=E,Fn(t),l&8192&&(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,!u||r===null||g||yn||Ue||(e=g||Ue,i=yn,r=Ue,yn=u||yn,Ue=e,Ha(t,2),yn=i,Ue=r),!u&&Fi||nd(t,u)),l&4&&(e=t.updateQueue,e!==null&&(i=e.retryQueue,i!==null&&(e.retryQueue=null,vc(t,i))));break;case 19:Bn(e,t,i),Fn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,vc(t,e)));break;case 30:l&512&&(Ue||r===null||Cn(r,r.return)),l=wp(),u=Go,g=(i&335544064)===i,E=t.memoizedProps,Go=g&&$i(E.default,E.update)!=="none",Bn(e,t,i),Fn(t),g&&r!==null&&we&&(t.flags|=4),Go=u,we=l;break;case 21:break;case 7:l&512&&(Ue||r===null||Cn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Bn(e,t,i),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{for(var i,r=t.return;r!==null;){if(Yg(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(kf(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if(Xf(l))break;l=l.return}var g=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,O=Yf(t);dc(t,O,E,g);break;case 5:var Q=i.stateNode;i.flags&32&&(Kr(Q,""),i.flags&=-33);var rt=Yf(t);dc(t,rt,Q,g);break;case 3:case 4:var mt=i.stateNode.containerInfo,Y=Yf(t);Wf(t,Y,mt,g);break;default:throw Error(s(161))}}catch(it){Oe(t,t.return,it)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function c_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;c_(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Us=!0,e.reset(),Us=!1),t=t.sibling}}function ms(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)u_(e,t),e=e.sibling;else t_(e)}function u_(t,e){var i=t.alternate;if(i===null)Zf(t,!1);else switch(t.tag){case 3:if(ed=Hi=!1,Kg(),ms(e,t),!Hi&&!gc){if(t=Ii,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];Q_(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ed=!0}Ii=null;break;case 5:ms(e,t);break;case 4:r=Hi,Hi=!1,ms(e,t),Hi&&(gc=!0),Hi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?Zf(t,!1):ms(e,t));break;case 30:r=Hi,l=Kg(),Hi=!1,ms(e,t),Hi&&(t.flags|=4);var u=t.memoizedProps,g=t.stateNode;e=Ji(u,g),g=Ji(i.memoizedProps,g);var E=$i(u.default,u.update);E==="none"?e=!1:(u=i.memoizedState,i.memoizedState=null,i=t.child,kn=0,e=$f(t,i,e,g,E,u,!0),kn!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(Ms(t,t.memoizedProps.onUpdate),Ii=l):l!==null&&(l.push.apply(l,Ii),Ii=l),Hi=(t.flags&32)!==0?!0:r;break;default:ms(e,t)}}function Gi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)n_(t,e.alternate,e),e=e.sibling}function Ha(t,e){for(t=t.child;t!==null;){var i=t,r=e;switch(i.tag){case 0:case 11:case 14:case 15:Fa(4,i,i.return),Ha(i,r);break;case 1:Cn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&jg(i,i.return,l),Ha(i,r);break;case 27:(r&2)!==0&&cv(i.stateNode,i.type,i.memoizedProps);case 5:Cn(i,i.return),i.tag!==5&&i.tag!==27||Ho(i),Ha(i,r);break;case 6:Ho(i);break;case 26:Cn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Ue||l.parentNode.removeChild(l),Ha(i,r);break;case 22:i.memoizedState===null&&Ha(i,r);break;case 30:Cn(i,i.return),Ha(i,r);break;case 7:Cn(i,i.return);default:Ha(i,r)}t=t.sibling}}function Mi(t,e,i){for(i=(e.subtreeFlags&8772)!==0?i:i&-2,e=e.child;e!==null;){var r=e.alternate,l=t,u=e,g=u.flags,E=(i&1)!==0;switch(u.tag){case 0:case 11:case 15:Mi(l,u,i),Fo(4,u);break;case 1:if(Mi(l,u,i),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(rt){Oe(r,r.return,rt)}if(r=u,l=r.updateQueue,l!==null){var O=r.stateNode;try{var Q=l.shared.hiddenCallbacks;if(Q!==null)for(l.shared.hiddenCallbacks=null,l=0;l<Q.length;l++)Um(Q[l],O)}catch(rt){Oe(r,r.return,rt)}}E&&g&64&&kg(u),zi(u,u.return);break;case 27:(i&2)!==0&&Wg(u);case 5:u.tag!==5&&u.tag!==27||qg(u),Mi(l,u,i),E&&r===null&&g&4&&jf(u),zi(u,u.return);break;case 6:qg(u);break;case 26:O=u.stateNode,u.memoizedState!==null||O===null||yn||Gd(Ko(O.ownerDocument),u.type,O),Mi(l,u,i),E&&r===null&&g&4&&jf(u),zi(u,u.return);break;case 12:Mi(l,u,i);break;case 31:Mi(l,u,i),E&&g&4&&s_(l,u);break;case 13:Mi(l,u,i),E&&g&4&&o_(l,u);break;case 22:u.memoizedState===null&&Mi(l,u,i),zi(u,u.return);break;case 30:Mi(l,u,i),zi(u,u.return);break;case 7:zi(u,u.return);default:Mi(l,u,i)}e=e.sibling}}function ad(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Ao(i))}function rd(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ao(t))}function hi(t,e,i,r){var l=(i&335544064)===i;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)f_(t,e,i,r),e=e.sibling;else l&&$g(e)}function f_(t,e,i,r){var l=(i&335544064)===i;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&mc(e);var u=e.flags;switch(e.tag){case 0:case 11:case 15:hi(t,e,i,r),u&2048&&Fo(9,e);break;case 1:hi(t,e,i,r);break;case 3:hi(t,e,i,r),l&&ed&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,e.alternate!==null&&(u=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==u&&(e.refCount++,u!=null&&Ao(u)));break;case 12:if(u&2048){hi(t,e,i,r),u=e.stateNode;try{var g=e.memoizedProps,E=g.id,O=g.onPostCommit;typeof O=="function"&&O(E,e.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(Q){Oe(e,e.return,Q)}}else hi(t,e,i,r);break;case 31:hi(t,e,i,r);break;case 13:hi(t,e,i,r);break;case 23:break;case 22:g=e.stateNode,E=e.alternate,e.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&mc(E),g._visibility&2?hi(t,e,i,r):Vo(t,e)):(l&&E!==null&&E.memoizedState!==null&&mc(e),g._visibility&2?hi(t,e,i,r):(g._visibility|=2,gs(t,e,i,r,(e.subtreeFlags&10256)!==0||!1))),u&2048&&ad(E,e);break;case 24:hi(t,e,i,r),u&2048&&rd(e.alternate,e);break;case 30:l&&(u=e.alternate,u!==null&&(Bi(u.child,!0),Bi(e.child,!0))),hi(t,e,i,r);break;default:hi(t,e,i,r)}}function gs(t,e,i,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,g=e,E=i,O=r,Q=g.flags;switch(g.tag){case 0:case 11:case 15:gs(u,g,E,O,l),Fo(8,g);break;case 23:break;case 22:var rt=g.stateNode;g.memoizedState!==null?rt._visibility&2?gs(u,g,E,O,l):Vo(u,g):(rt._visibility|=2,gs(u,g,E,O,l)),l&&Q&2048&&ad(g.alternate,g);break;case 24:gs(u,g,E,O,l),l&&Q&2048&&rd(g.alternate,g);break;default:gs(u,g,E,O,l)}e=e.sibling}}function Vo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,r=e,l=r.flags;switch(r.tag){case 22:Vo(i,r),l&2048&&ad(r.alternate,r);break;case 24:Vo(i,r),l&2048&&rd(r.alternate,r);break;default:Vo(i,r)}e=e.sibling}}var Ar=8192;function Rr(t,e,i){if(t.subtreeFlags&Ar)for(t=t.child;t!==null;)d_(t,e,i),t=t.sibling}function d_(t,e,i){switch(t.tag){case 26:Rr(t,e,i),t.flags&Ar&&(t.memoizedState!==null?jS(i,Si,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&xv(i,t)));break;case 5:Rr(t,e,i),t.flags&Ar&&(t=t.stateNode,(e&335544128)===e&&xv(i,t));break;case 3:case 4:var r=Si;Si=Ko(t.stateNode.containerInfo),Rr(t,e,i),Si=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ar,Ar=16777216,Rr(t,e,i),Ar=r):Rr(t,e,i));break;case 30:if((t.flags&Ar)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,$n===null&&($n=new Map),$n.set(r,l)}Rr(t,e,i);break;default:Rr(t,e,i)}}function h_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Xo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];Sn=r,m_(r,t)}h_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)p_(t),t=t.sibling}function p_(t){switch(t.tag){case 0:case 11:case 15:Xo(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:Xo(t);break;case 12:Xo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,xc(t)):Xo(t);break;default:Xo(t)}}function xc(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];Sn=r,m_(r,t)}h_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Fa(8,e,e.return),xc(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,xc(e));break;default:xc(e)}t=t.sibling}}function m_(t,e){for(;Sn!==null;){var i=Sn;switch(i.tag){case 0:case 11:case 15:Fa(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ao(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,Sn=r;else t:for(i=t;Sn!==null;){r=Sn;var l=r.sibling,u=r.return;if(a_(r),r===i){Sn=null;break t}if(l!==null){l.return=u,Sn=l;break t}Sn=u}}}var Hy={getCacheForType:function(t){var e=bn(sn),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return bn(sn).controller.signal}},Gy=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ve=null,ve=null,Se=0,Le=0,ti=null,Ga=!1,_s=!1,sd=!1,la=0,en=0,Va=0,Cr=0,yc=0,ei=0,vs=0,ko=null,qn=null,od=!1,Sc=0,g_=0,Mc=1/0,Ec=null,Xa=null,Je=0,Ei=null,wr=null,Vi=0,ld=0,cd=null,__=null,xs=null,ys=null,Ss=null,jo=0,Tc=null;function ni(){return(Ne&2)!==0&&Se!==0?Se&-Se:Mt.T!==null?xd():tt()}function v_(){if(ei===0)if((Se&536870912)===0||me){var t=cr;cr<<=1,(cr&3932160)===0&&(cr=262144),ei=t}else ei=536870912;return t=An.current,t!==null&&(t.flags|=32),ei}function Ms(t,e){if(e!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=J_(Ji(t.memoizedProps,i))),ys===null&&(ys=[]),ys.push(e.bind(null,r))}}function Yn(t,e,i){(t===Ve&&(Le===2||Le===9)||t.cancelPendingCommit!==null)&&(Es(t,0),ka(t,Se,ei,!1)),ur(t,i),((Ne&2)===0||t!==Ve)&&(t===Ve&&((Ne&2)===0&&(Cr|=i),en===4&&ka(t,Se,ei,!1)),Xi(t))}function x_(t,e,i){if((Ne&6)!==0)throw Error(s(327));var r=!i&&(e&127)===0&&(e&t.expiredLanes)===0||Ta(t,e),l=r?ky(t,e):fd(t,e,!0),u=r;do{if(l===0){_s&&!r&&ka(t,e,0,!1);break}else{if(i=t.current.alternate,u&&!Vy(i)){l=fd(t,e,!1),u=!1;continue}if(l===2){if(u=e,t.errorRecoveryDisabledLanes&u)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;t:{var E=t;l=ko;var O=E.current.memoizedState.isDehydrated;if(O&&(Es(E,g).flags|=256),g=fd(E,g,!1),g!==2&&g!==6){if(sd&&!O){E.errorRecoveryDisabledLanes|=u,Cr|=u,l=4;break t}u=qn,qn=l,u!==null&&(qn===null?qn=u:qn.push.apply(qn,u))}l=g}if(u=!1,l!==2)continue}}if(l===1){Es(t,0),ka(t,e,0,!0);break}t:{switch(r=t,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:ka(r,e,ei,!Ga);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(l=Sc+300-j(),10<l)){if(ka(r,e,ei,!Ga),Wi(r,0,!0)!==0)break t;Vi=e,r.timeoutHandle=Dd(y_.bind(null,r,i,qn,Ec,od,e,ei,Cr,vs,Ga,u,"Throttled",-0,0),l);break t}y_(r,i,qn,Ec,od,e,ei,Cr,vs,Ga,u,null,-0,0)}}break}while(!0);Xi(t)}function y_(t,e,i,r,l,u,g,E,O,Q,rt,mt,Y,it){t.timeoutHandle=-1;var Pt=e.subtreeFlags,Wt=(u&335544064)===u;if(mt=null,(Wt||Pt&8192||(Pt&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},$n=null,d_(e,u,mt),Wt&&(Pt=mt,Wt=t.containerInfo,Wt=(Wt.nodeType===9?Wt:Wt.ownerDocument).__reactViewTransition,Wt!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=$o.bind(Pt),Wt.finished.then(Pt,Pt))),Pt=(u&62914560)===u?Sc-j():(u&4194048)===u?g_-j():0,Pt=qS(mt,Pt),Pt!==null)){Vi=u,t.cancelPendingCommit=Pt(C_.bind(null,t,e,u,i,r,l,g,E,O,Q,rt,mt,null,Y,it)),ka(t,u,g,!Q);return}C_(t,e,u,i,r,l,g,E,O,Q,rt,mt)}function Vy(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],u=l.getSnapshot;l=l.value;try{if(!Qn(u(),l))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ka(t,e,i,r){e=ho(t,e),e&=~yc,e&=~Cr,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var u=31-Nn(l),g=1<<u;r[u]=-1,l&=~g}i!==0&&Ml(t,i,e)}function bc(){return(Ne&6)===0?(qo(0),!1):!0}function ud(){if(ve!==null){if(Le===0)var t=ve.return;else t=ve,na=gr=null,vf(t),cs=null,wo=0,t=ve;for(;t!==null;)Xg(t.alternate,t),t=t.return;ve=null}}function Es(t,e){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,dS(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Vi=0,ud(),Ve=t,ve=i=ta(t.current,null),Se=e,Le=0,ti=null,Ga=!1,_s=Ta(t,e),sd=!1,vs=ei=yc=Cr=Va=en=0,qn=ko=null,od=!1,la=ho(t,e),Ll(),i}function S_(t,e){ue=null,Mt.H=ac,e===ls||e===kl?(e=Cm(),Le=3):e===rf?(e=Cm(),Le=4):Le=e===Lf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ti=e,ve===null&&(en=1,rc(t,ci(e,t.current)))}function M_(){var t=An.current;return t===null?!0:(Se&4194048)===Se?Ln===null:(Se&62914560)===Se||(Se&536870912)!==0?t===Ln:!1}function E_(){var t=Mt.H;return Mt.H=ac,t===null?ac:t}function T_(){var t=Mt.A;return Mt.A=Hy,t}function Ac(){en=4,Ga||(Se&4194048)!==Se&&An.current!==null||(_s=!0),(Va&134217727)===0&&(Cr&134217727)===0||Ve===null||ka(Ve,Se,ei,!1)}function fd(t,e,i){var r=Ne;Ne|=2;var l=E_(),u=T_();(Ve!==t||Se!==e)&&(Ec=null,Es(t,e)),e=!1;var g=en;t:do try{if(Le!==0&&ve!==null){var E=ve,O=ti;switch(Le){case 8:ud(),g=6;break t;case 3:case 2:case 9:case 6:An.current===null&&(e=!0);var Q=Le;if(Le=0,ti=null,Ts(t,E,O,Q),i&&_s){g=0;break t}break;default:Q=Le,Le=0,ti=null,Ts(t,E,O,Q)}}Xy(),g=en;break}catch(rt){S_(t,rt)}while(!0);return e&&t.shellSuspendCounter++,na=gr=null,Ne=r,Mt.H=l,Mt.A=u,ve===null&&(Ve=null,Se=0,Ll()),g}function Xy(){for(;ve!==null;)b_(ve)}function ky(t,e){var i=Ne;Ne|=2;var r=E_(),l=T_();Ve!==t||Se!==e?(Ec=null,Mc=j()+500,Es(t,e)):_s=Ta(t,e);t:do try{if(Le!==0&&ve!==null){e=ve;var u=ti;e:switch(Le){case 1:Le=0,ti=null,Ts(t,e,u,1);break;case 2:case 9:if(Am(u)){Le=0,ti=null,A_(e);break}e=function(){Le!==2&&Le!==9||Ve!==t||(Le=7),Xi(t)},u.then(e,e);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:Am(u)?(Le=0,ti=null,A_(e)):(Le=0,ti=null,Ts(t,e,u,7));break;case 5:var g=null;switch(ve.tag){case 26:g=ve.memoizedState;case 5:case 27:var E=ve;if(g?_v(g):E.stateNode.complete){Le=0,ti=null;var O=E.sibling;if(O!==null)ve=O;else{var Q=E.return;Q!==null?(ve=Q,Rc(Q)):ve=null}break e}}Le=0,ti=null,Ts(t,e,u,5);break;case 6:Le=0,ti=null,Ts(t,e,u,6);break;case 8:ud(),en=6;break t;default:throw Error(s(462))}}jy();break}catch(rt){S_(t,rt)}while(!0);return na=gr=null,Mt.H=r,Mt.A=l,Ne=i,ve!==null?0:(Ve=null,Se=0,Ll(),en)}function jy(){for(;ve!==null&&!ce();)b_(ve)}function b_(t){var e=Gg(t.alternate,t,la);t.memoizedProps=t.pendingProps,e===null?Rc(t):ve=e}function A_(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=Og(i,e,e.pendingProps,e.type,void 0,Se);break;case 11:e=Og(i,e,e.pendingProps,e.type.render,e.ref,Se);break;case 5:vf(e);var r=e;r===xn&&(me?(Fl(r),r.tag===5&&r.stateNode!=null&&(je=r.stateNode)):(Fl(r),me=!0));default:Xg(i,e),e=ve=mm(e,la),e=Gg(i,e,la)}t.memoizedProps=t.pendingProps,e===null?Rc(t):ve=e}function Ts(t,e,i,r){na=gr=null,vf(e),cs=null,wo=0;var l=e.return;try{if(Uy(t,l,e,i,Se)){en=1,rc(t,ci(i,t.current)),ve=null;return}}catch(u){if(l!==null)throw ve=l,u;en=1,rc(t,ci(i,t.current)),ve=null;return}e.flags&32768?(me||r===1?t=!0:_s||(Se&536870912)!==0?t=!1:(Ga=t=!0,(r===2||r===9||r===3||r===6)&&(r=An.current,r!==null&&r.tag===13&&(r.flags|=16384))),R_(e,t)):Rc(e)}function Rc(t){var e=t;do{if((e.flags&32768)!==0){R_(e,Ga);return}t=e.return;var i=zy(e.alternate,e,la);if(i!==null){ve=i;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);en===0&&(en=5)}function R_(t,e){do{var i=Iy(t.alternate,t);if(i!==null){i.flags&=32767,ve=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){ve=t;return}ve=t=i}while(t!==null);en=6,ve=null}function C_(t,e,i,r,l,u,g,E,O,Q,rt,mt){t.cancelPendingCommit=null;do Cc();while(Je!==0);if((Ne&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));t===Ve&&(ve=Ve=null,Se=0),wr=e,Ei=t,Vi=i,cd=l,__=r,qy(t,e,i,g,E,O,mt)}}function qy(t,e,i,r,l,u,g){var E=e.lanes|e.childLanes;if(ld=E,E|=ju,Mu(t,i,E,r,l,u),ys=null,(i&335544064)===i?(Ss=yy(t),r=10262):(Ss=null,r=10256),(e.subtreeFlags&r)!==0||(e.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Jy(Gt,function(){return md(),null})):(t.callbackNode=null,t.callbackPriority=0),hc=!1,r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null,l=wt.p,wt.p=2,u=Ne,Ne|=4;try{By(t,e,i)}finally{Ne=u,wt.p=l,Mt.T=r}}Je=1,hc?xs=vS(g,t.containerInfo,Ss,dd,hd,Wy,pd,md,Yy):(dd(),hd(),pd())}function Yy(t){if(Je!==0){var e=Ei.onRecoverableError;e(t,{componentStack:null})}}function Wy(){Je===3&&(Je=0,u_(wr,Ei),Je=4)}function dd(){if(Je===1){Je=0;var t=Ei,e=wr,i=Vi,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null;var l=wt.p;wt.p=2;var u=Ne;Ne|=4;try{Go=gc=!1,l_(e,t,i),i=Rd;var g=rm(t.containerInfo),E=i.focusedElem,O=i.selectionRange;if(g!==E&&E&&E.ownerDocument&&am(E.ownerDocument.documentElement,E)){if(O!==null&&Hu(E)){var Q=O.start,rt=O.end;if(rt===void 0&&(rt=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(rt,E.value.length);else{var mt=E.ownerDocument||document,Y=mt&&mt.defaultView||window;if(Y.getSelection){var it=Y.getSelection(),Pt=E.textContent.length,Wt=Math.min(O.start,Pt),fe=O.end===void 0?Wt:Math.min(O.end,Pt);!it.extend&&Wt>fe&&(g=fe,fe=Wt,Wt=g);var K=im(E,Wt),V=im(E,fe);if(K&&V&&(it.rangeCount!==1||it.anchorNode!==K.node||it.anchorOffset!==K.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var nt=mt.createRange();nt.setStart(K.node,K.offset),it.removeAllRanges(),Wt>fe?(it.addRange(nt),it.extend(V.node,V.offset)):(nt.setEnd(V.node,V.offset),it.addRange(nt))}}}}for(mt=[],it=E;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var pt=mt[E];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Us=!!Ad,Rd=Ad=null}finally{Ne=u,wt.p=l,Mt.T=r}}t.current=e,Je=2}}function hd(){if(Je===2){Je=0;var t=Ei,e=wr,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=Mt.T,Mt.T=null;var r=wt.p;wt.p=2;var l=Ne;Ne|=4;try{n_(t,e.alternate,e)}finally{Ne=l,wt.p=r,Mt.T=i}}Je=3}}function pd(){if(Je===4||Je===3){Je=0;var t=xs;xs=null,Ie();var e=Ei,i=wr,r=Vi,l=__,u=(r&335544064)===r?10262:10256;if((i.subtreeFlags&u)!==0||(i.flags&u)!==0?Je=5:(Je=0,wr=Ei=null,w_(e,e.pendingLanes)),u=e.pendingLanes,u===0&&(Xa=null),ct(r),i=i.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Te,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Mt.T,u=wt.p,wt.p=2,Mt.T=null;try{for(var g=e.onRecoverableError,E=0;E<l.length;E++){var O=l[E];g(O.value,{componentStack:O.stack})}}finally{Mt.T=i,wt.p=u}}if(l=ys,g=Ss,Ss=null,l!==null&&(ys=null,g===null&&(g=[]),t!==null))for(O=0;O<l.length;O++)i=(0,l[O])(g),i!==void 0&&t.finished.finally(i);(Vi&3)!==0&&Cc(),Xi(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===Tc?jo++:(jo=0,Tc=e):(jo=0,Tc=null),qo(0)}}function w_(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ao(e)))}function Cc(){return xs!==null&&(xs.skipTransition(),xs=null),dd(),hd(),pd(),md()}function md(){if(Je!==5)return!1;var t=Ei,e=ld;ld=0;var i=ct(Vi),r=Mt.T,l=wt.p;try{wt.p=32>i?32:i,Mt.T=null,i=cd,cd=null;var u=Ei,g=Vi;if(Je=0,wr=Ei=null,Vi=0,(Ne&6)!==0)throw Error(s(331));var E=Ne;if(Ne|=4,p_(u.current),f_(u,u.current,g,i),Ne=E,qo(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Te,u)}catch{}return!0}finally{wt.p=l,Mt.T=r,w_(t,e)}}function D_(t,e,i){e=ci(i,e),e=Uf(t.stateNode,e,2),t=Pa(t,e,2),t!==null&&(ur(t,2),Xi(t))}function Oe(t,e,i){if(t.tag===3)D_(t,t,i);else for(;e!==null;){if(e.tag===3){D_(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xa===null||!Xa.has(r))){t=ci(i,t),i=Ag(2),r=Pa(e,i,2),r!==null&&(Rg(i,r,e,t),ur(r,2),Xi(r));break}}e=e.return}}function gd(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new Gy;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(i)||(sd=!0,l.add(i),t=Zy.bind(null,t,e,i),e.then(t,t))}function Zy(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Ve===t&&(Se&i)===i&&((en===4||en===3&&(Se&62914560)===Se&&300>j()-Sc)&&(Ne&2)===0?Es(t,0):yc|=i,vs===Se&&(vs=0)),Xi(t)}function N_(t,e){e===0&&(e=Sl()),t=hr(t,e),t!==null&&(ur(t,e),Xi(t))}function Ky(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),N_(t,i)}function Qy(t,e){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),N_(t,i)}function Jy(t,e){return qt(t,e)}var bs=null,As=null,_d=!1,wc=!1,vd=!1,ja=0;function Xi(t){t!==As&&t.next===null&&(As===null?bs=As=t:As=As.next=t),wc=!0,_d||(_d=!0,tS())}function qo(t,e){if(!vd&&wc){vd=!0;do for(var i=!1,r=bs;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var g=r.suspendedLanes,E=r.pingedLanes;u=(1<<31-Nn(42|t)+1)-1,u&=l&~(g&~E),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,P_(r,u))}else u=Se,u=Wi(r,r===Ve?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ta(r,u)||(i=!0,P_(r,u));r=r.next}while(i);vd=!1}}function $y(){U_()}function U_(){wc=_d=!1;var t=0;ja!==0&&fS()&&(t=ja);for(var e=j(),i=null,r=bs;r!==null;){var l=r.next,u=L_(r,e);u===0?(r.next=null,i===null?bs=l:i.next=l,l===null&&(As=i)):(i=r,(t!==0||(u&3)!==0)&&(wc=!0)),r=l}Je!==0&&Je!==5||qo(t),ja!==0&&(ja=0)}function L_(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var g=31-Nn(u),E=1<<g,O=l[g];O===-1?((E&i)===0||(E&r)!==0)&&(l[g]=Su(E,e)):O<=e&&(t.expiredLanes|=E),u&=~E}if(e=Ve,i=Se,i=Wi(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===e&&(Le===2||Le===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&ge(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ta(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(r!==null&&ge(r),ct(i)){case 2:case 8:i=St;break;case 32:i=Gt;break;case 268435456:i=le;break;default:i=Gt}return r=O_.bind(null,t),i=qt(i,r),t.callbackPriority=e,t.callbackNode=i,e}return r!==null&&r!==null&&ge(r),t.callbackPriority=2,t.callbackNode=null,2}function O_(t,e){if(Je!==0&&Je!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Cc()&&t.callbackNode!==i)return null;var r=Se;return r=Wi(t,t===Ve?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(x_(t,r,e),L_(t,j()),t.callbackNode!=null&&t.callbackNode===i?O_.bind(null,t):null)}function P_(t,e){if(Cc())return null;x_(t,e,!0)}function tS(){hS(function(){(Ne&6)!==0?qt(dt,$y):U_()})}function xd(){if(ja===0){var t=xr;t===0&&(t=lr,lr<<=1,(lr&261888)===0&&(lr=256)),ja=t}return ja}function z_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bl(t)}function eS(t,e,i,r,l){if(e==="submit"&&i&&i.stateNode===l){var u=z_((l[zt]||null).action),g=r.submitter;g&&(e=(e=g[zt]||null)?z_(e.formAction):g.getAttribute("formAction"),e!==null&&(u=e,g=null));var E=new wl("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ja!==0){var O=new FormData(l,g);Rf(i,{pending:!0,data:O,method:l.method,action:u},null,O)}}else typeof u=="function"&&(E.preventDefault(),O=new FormData(l,g),Rf(i,{pending:!0,data:O,method:l.method,action:u},u,O))},currentTarget:l}]})}}for(var yd=0;yd<ku.length;yd++){var Sd=ku[yd],nS=Sd.toLowerCase(),iS=Sd[0].toUpperCase()+Sd.slice(1);xi(nS,"on"+iS)}xi(lm,"onAnimationEnd"),xi(cm,"onAnimationIteration"),xi(um,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(dy,"onTransitionRun"),xi(hy,"onTransitionStart"),xi(py,"onTransitionCancel"),xi(fm,"onTransitionEnd"),dn("onMouseEnter",["mouseout","mouseover"]),dn("onMouseLeave",["mouseout","mouseover"]),dn("onPointerEnter",["pointerout","pointerover"]),dn("onPointerLeave",["pointerout","pointerover"]),rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rn("onBeforeInput",["compositionend","keypress","textInput","paste"]),rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yo));function I_(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var u=void 0;if(e)for(var g=r.length-1;0<=g;g--){var E=r[g],O=E.instance,Q=E.currentTarget;if(E=E.listener,O!==u&&l.isPropagationStopped())break t;u=E,l.currentTarget=Q;try{u(l)}catch(rt){Ul(rt)}l.currentTarget=null,u=O}else for(g=0;g<r.length;g++){if(E=r[g],O=E.instance,Q=E.currentTarget,E=E.listener,O!==u&&l.isPropagationStopped())break t;u=E,l.currentTarget=Q;try{u(l)}catch(rt){Ul(rt)}l.currentTarget=null,u=O}}}}function xe(t,e){var i=e[re];i===void 0&&(i=e[re]=new Set);var r=t+"__bubble";i.has(r)||(B_(e,t,2,!1),i.add(r))}function Md(t,e,i){var r=0;e&&(r|=4),B_(i,t,r,e)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function Ed(t){if(!t[Dc]){t[Dc]=!0,ba.forEach(function(i){i!=="selectionchange"&&(aS.has(i)||Md(i,!1,t),Md(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Dc]||(e[Dc]=!0,Md("selectionchange",!1,e))}}function B_(t,e,i,r){switch(Rv(e)){case 2:var l=KS;break;case 8:l=QS;break;default:l=Xd}i=l.bind(null,e,i,t),l=void 0,!Du||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,i,{capture:!0,passive:l}):t.addEventListener(e,i,!0):l!==void 0?t.addEventListener(e,i,{passive:l}):t.addEventListener(e,i,!1)}function Td(t,e,i,r,l){var u=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===l)break;if(g===4)for(g=r.return;g!==null;){var O=g.tag;if((O===3||O===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;E!==null;){if(g=Qt(E),g===null)return;if(O=g.tag,O===5||O===6||O===26||O===27){r=u=g;continue t}E=E.parentNode}}r=r.return}Bp(function(){var Q=u,rt=Cu(i),mt=[];t:{var Y=dm.get(t);if(Y!==void 0){var it=wl,Pt=t;switch(t){case"keypress":if(Rl(i)===0)break t;case"keydown":case"keyup":it=Vx;break;case"focusin":Pt="focus",it=Ou;break;case"focusout":Pt="blur",it=Ou;break;case"beforeblur":case"afterblur":it=Ou;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Yx;break;case lm:case cm:case um:it=Lx;break;case fm:it=Zx;break;case"scroll":case"scrollend":it=Cx;break;case"wheel":it=Qx;break;case"copy":case"cut":case"paste":it=Px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Xp;break;case"submit":it=jx;break;case"toggle":case"beforetoggle":it=$x}var Wt=(e&4)!==0,fe=!Wt&&(t==="scroll"||t==="scrollend"),K=Wt?Y!==null?Y+"Capture":null:Y;Wt=[];for(var V=Q,nt;V!==null;){var pt=V;if(nt=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||nt===null||K===null||(pt=mo(V,K),pt!=null&&Wt.push(Wo(V,pt,nt))),fe)break;V=V.return}0<Wt.length&&(Y=new it(Y,Pt,null,i,rt),mt.push({event:Y,listeners:Wt}))}}if((e&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",it&&i!==Ru&&(Pt=i.relatedTarget||i.fromElement)&&(Qt(Pt)||Pt[ne]))break t;(Y||it)&&(Pt=rt.window===rt?rt:(it=rt.ownerDocument)?it.defaultView||it.parentWindow:window,Y?(it=i.relatedTarget||i.toElement,Y=Q,it=it?Qt(it):null,it!==null&&(fe=f(it),Wt=it.tag,it!==fe||Wt!==5&&Wt!==27&&Wt!==6)&&(it=null)):(Y=null,it=Q),Y!==it&&(Wt=Gp,pt="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Wt=Xp,pt="onPointerLeave",K="onPointerEnter",V="pointer"),fe=Y==null?Pt:ye(Y),nt=it==null?Pt:ye(it),Pt=new Wt(pt,V+"leave",Y,i,rt),Pt.target=fe,Pt.relatedTarget=nt,pt=null,Qt(rt)===Q&&(Wt=new Wt(K,V+"enter",it,i,rt),Wt.target=nt,Wt.relatedTarget=fe,pt=Wt),fe=pt,Wt=Y&&it?X(Y,it,rS):null,Y!==null&&F_(mt,Pt,Y,Wt,!1),it!==null&&fe!==null&&F_(mt,fe,it,Wt,!0)))}t:{if(Y=Q?ye(Q):window,it=Y.nodeName&&Y.nodeName.toLowerCase(),it==="select"||it==="input"&&Y.type==="file")var kt=Qp;else if(Zp(Y))if(Jp)kt=cy;else{kt=oy;var Me=sy}else it=Y.nodeName,!it||it.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?Q&&Au(Q.elementType)&&(kt=Qp):kt=ly;if(kt&&(kt=kt(t,Q))){Kp(mt,kt,i,rt);break t}Me&&Me(t,Y,Q)}switch(Me=Q?ye(Q):window,t){case"focusin":(Zp(Me)||Me.contentEditable==="true")&&(ts=Me,Gu=Q,Eo=null);break;case"focusout":Eo=Gu=ts=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,sm(mt,i,rt);break;case"selectionchange":if(fy)break;case"keydown":case"keyup":sm(mt,i,rt)}var $t;if(zu)t:{switch(t){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else $r?Yp(t,i)&&(ie="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(ie="onCompositionStart");ie&&(kp&&i.locale!=="ko"&&($r||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&$r&&($t=Fp()):(Aa=rt,Nu="value"in Aa?Aa.value:Aa.textContent,$r=!0)),Me=Nc(Q,ie),0<Me.length&&(ie=new Vp(ie,t,null,i,rt),mt.push({event:ie,listeners:Me}),$t?ie.data=$t:($t=Wp(i),$t!==null&&(ie.data=$t)))),($t=ey?ny(t,i):iy(t,i))&&(ie=Nc(Q,"onBeforeInput"),0<ie.length&&(Me=new Vp("onBeforeInput","beforeinput",null,i,rt),mt.push({event:Me,listeners:ie}),Me.data=$t)),eS(mt,t,Q,i,rt)}I_(mt,e)})}function Wo(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Nc(t,e){for(var i=e+"Capture",r=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=mo(t,i),l!=null&&r.unshift(Wo(t,l,u)),l=mo(t,e),l!=null&&r.push(Wo(t,l,u))),t.tag===3)return r;t=t.return}return[]}function rS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function F_(t,e,i,r,l){for(var u=e._reactName,g=[];i!==null&&i!==r;){var E=i,O=E.alternate,Q=E.stateNode;if(E=E.tag,O!==null&&O===r)break;E!==5&&E!==26&&E!==27||Q===null||(O=Q,l?(Q=mo(i,u),Q!=null&&g.unshift(Wo(i,Q,O))):l||(Q=mo(i,u),Q!=null&&g.push(Wo(i,Q,O)))),i=i.return}g.length!==0&&t.push({event:e,listeners:g})}var sS=/\r\n?/g,oS=/\u0000|\uFFFD/g;function H_(t){return(typeof t=="string"?t:""+t).replace(sS,`
`).replace(oS,"")}function G_(t,e){return e=H_(e),H_(t)===e}function Pe(t,e,i,r,l,u){switch(i){case"children":if(typeof r=="string")e==="body"||e==="textarea"&&r===""||Kr(t,r);else if(typeof r=="number"||typeof r=="bigint")e!=="body"&&Kr(t,""+r);else return;break;case"className":Tl(t,"class",r);break;case"tabIndex":Tl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Tl(t,i,r);break;case"style":zp(t,r,u);return;case"data":if(e!=="object"){Tl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=bl(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(e!=="input"&&Pe(t,e,"name",l.name,l,null),Pe(t,e,"formEncType",l.formEncType,l,null),Pe(t,e,"formMethod",l.formMethod,l,null),Pe(t,e,"formTarget",l.formTarget,l,null)):(Pe(t,e,"encType",l.encType,l,null),Pe(t,e,"method",l.method,l,null),Pe(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=bl(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=Li);return;case"onScroll":r!=null&&xe("scroll",t);return;case"onScrollEnd":r!=null&&xe("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=bl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":xe("beforetoggle",t),xe("toggle",t),El(t,"popover",r);break;case"xlinkActuate":Ki(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ki(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ki(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ki(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ki(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ki(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ki(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ki(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ki(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":El(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=Ax.get(i)||i,El(t,i,r);else return}we=!0}function bd(t,e,i,r,l,u){switch(i){case"style":zp(t,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")Kr(t,r);else if(typeof r=="number"||typeof r=="bigint")Kr(t,""+r);else return;break;case"onScroll":r!=null&&xe("scroll",t);return;case"onScrollEnd":r!=null&&xe("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Li);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ge.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),u=i.slice(2,l?i.length-7:void 0),e=t[zt]||null,e=e!=null?e[i]:null,typeof e=="function"&&t.removeEventListener(u,e,l),typeof r=="function")){typeof e!="function"&&e!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(u,r,l);break t}we=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):El(t,i,r)}return}we=!0}function wn(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var r=!1,l=!1,u;for(u in i)if(i.hasOwnProperty(u)){var g=i[u];if(g!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Pe(t,e,u,g,i,null)}}l&&Pe(t,e,"srcSet",i.srcSet,i,null),r&&Pe(t,e,"src",i.src,i,null);return;case"input":xe("invalid",t);var E=u=g=l=null,O=null,Q=null;for(r in i)if(i.hasOwnProperty(r)){var rt=i[r];if(rt!=null)switch(r){case"name":l=rt;break;case"type":g=rt;break;case"checked":O=rt;break;case"defaultChecked":Q=rt;break;case"value":u=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,e));break;default:Pe(t,e,r,rt,i,null)}}Up(t,u,E,O,Q,g,l,!1);return;case"select":xe("invalid",t),r=g=u=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":u=E;break;case"defaultValue":g=E;break;case"multiple":r=E;default:Pe(t,e,l,E,i,null)}e=u,i=g,t.multiple=!!r,e!=null?Zr(t,!!r,e,!1):i!=null&&Zr(t,!!r,i,!0);return;case"textarea":xe("invalid",t),u=l=r=null;for(g in i)if(i.hasOwnProperty(g)&&(E=i[g],E!=null))switch(g){case"value":r=E;break;case"defaultValue":l=E;break;case"children":u=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Pe(t,e,g,E,i,null)}Op(t,r,l,u);return;case"option":for(O in i)if(i.hasOwnProperty(O)&&(r=i[O],r!=null))switch(O){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pe(t,e,O,r,i,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(r=0;r<Yo.length;r++)xe(Yo[r],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in i)if(i.hasOwnProperty(Q)&&(r=i[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Pe(t,e,Q,r,i,null)}return;default:if(Au(e)){for(rt in i)i.hasOwnProperty(rt)&&(r=i[rt],r!==void 0&&bd(t,e,rt,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&Pe(t,e,E,r,i,null))}var lS={};function cS(t,e,i,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,g=null,E=null,O=null,Q=null,rt=null;for(it in i){var mt=i[it];if(i.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":O=mt;default:r.hasOwnProperty(it)||Pe(t,e,it,null,r,mt)}}for(var Y in r){var it=r[Y];if(mt=i[Y],r.hasOwnProperty(Y)&&(it!=null||mt!=null))switch(Y){case"type":it!==mt&&(we=!0),u=it;break;case"name":it!==mt&&(we=!0),l=it;break;case"checked":it!==mt&&(we=!0),Q=it;break;case"defaultChecked":it!==mt&&(we=!0),rt=it;break;case"value":it!==mt&&(we=!0),g=it;break;case"defaultValue":it!==mt&&(we=!0),E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,e));break;default:it!==mt&&Pe(t,e,Y,it,r,mt)}}Tu(t,g,E,O,Q,rt,u,l);return;case"select":it=g=E=Y=null;for(u in i)if(O=i[u],i.hasOwnProperty(u)&&O!=null)switch(u){case"value":break;case"multiple":it=O;default:r.hasOwnProperty(u)||Pe(t,e,u,null,r,O)}for(l in r)if(u=r[l],O=i[l],r.hasOwnProperty(l)&&(u!=null||O!=null))switch(l){case"value":u!==O&&(we=!0),Y=u;break;case"defaultValue":u!==O&&(we=!0),E=u;break;case"multiple":u!==O&&(we=!0),g=u;default:u!==O&&Pe(t,e,l,u,r,O)}e=E,i=g,r=it,Y!=null?Zr(t,!!i,Y,!1):!!r!=!!i&&(e!=null?Zr(t,!!i,e,!0):Zr(t,!!i,i?[]:"",!1));return;case"textarea":it=Y=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Pe(t,e,E,null,r,l)}for(g in r)if(l=r[g],u=i[g],r.hasOwnProperty(g)&&(l!=null||u!=null))switch(g){case"value":l!==u&&(we=!0),Y=l;break;case"defaultValue":l!==u&&(we=!0),it=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Pe(t,e,g,l,r,u)}Lp(t,Y,it);return;case"option":for(var Pt in i)if(Y=i[Pt],i.hasOwnProperty(Pt)&&Y!=null&&!r.hasOwnProperty(Pt))switch(Pt){case"selected":t.selected=!1;break;default:Pe(t,e,Pt,null,r,Y)}for(O in r)if(Y=r[O],it=i[O],r.hasOwnProperty(O)&&Y!==it&&(Y!=null||it!=null))switch(O){case"selected":Y!==it&&(we=!0),t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Pe(t,e,O,Y,r,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in i)Y=i[Wt],i.hasOwnProperty(Wt)&&Y!=null&&!r.hasOwnProperty(Wt)&&Pe(t,e,Wt,null,r,Y);for(Q in r)if(Y=r[Q],it=i[Q],r.hasOwnProperty(Q)&&Y!==it&&(Y!=null||it!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,e));break;default:Pe(t,e,Q,Y,r,it)}return;default:if(Au(e)){for(var fe in i)Y=i[fe],i.hasOwnProperty(fe)&&Y!==void 0&&!r.hasOwnProperty(fe)&&bd(t,e,fe,void 0,r,Y);for(rt in r)Y=r[rt],it=i[rt],!r.hasOwnProperty(rt)||Y===it||Y===void 0&&it===void 0||bd(t,e,rt,Y,r,it);return}}for(var K in i)Y=i[K],i.hasOwnProperty(K)&&Y!=null&&!r.hasOwnProperty(K)&&Pe(t,e,K,null,r,Y);for(mt in r)Y=r[mt],it=i[mt],!r.hasOwnProperty(mt)||Y===it||Y==null&&it==null||Pe(t,e,mt,Y,r,it)}function V_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],u=l.transferSize,g=l.initiatorType,E=l.duration;if(u&&E&&V_(g)){for(g=0,E=l.responseEnd,r+=1;r<i.length;r++){var O=i[r],Q=O.startTime;if(Q>E)break;var rt=O.transferSize,mt=O.initiatorType;rt&&V_(mt)&&(O=O.responseEnd,g+=rt*(O<E?1:(E-Q)/(O-Q)))}if(--r,e+=8*(u+g)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ad=null,Rd=null;function Zo(t){return t.nodeType===9?t:t.ownerDocument}function X_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function j_(t,e,i,r){return i=Zo(i).createElement(t),i[Ut]=r,i[zt]=e,wn(i,t,e),We(i),i}function Cd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wd=null;function fS(){var t=window.event;return t&&t.type==="popstate"?t===wd?!1:(wd=t,!0):(wd=null,!1)}var Dd=typeof setTimeout=="function"?setTimeout:void 0,dS=typeof clearTimeout=="function"?clearTimeout:void 0,q_=typeof Promise=="function"?Promise:void 0,Y_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Dd,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof q_<"u"?function(t){return q_.resolve(null).then(t).catch(pS)}:Dd;function pS(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function W_(t,e){var i=e,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Ls(e);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Bd(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Bd(i);for(var u=i.firstChild;u;){var g=u.nextSibling,E=u.nodeName;u[ke]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=g}}else i==="body"&&Bd(t.ownerDocument.body);i=l}while(i);Ls(e)}function Z_(t,e){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function K_(t,e,i){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(e=t.getClientRects(),e.length===1)var r=1;else for(var l=r=0;l<e.length;l++){var u=e[l];0<u.width&&0<u.height&&r++}r===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function Q_(t,e){t=t.style,e=e.style;var i=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(i=e.display,t.display=i==null||typeof i=="boolean"?"":i,i=e.margin,i!=null?t.margin=i:(i=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function mS(t,e,i){return i=i.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Nd(t){var e=t.getBoundingClientRect(),i=getComputedStyle(t);return mS(e,i,t)}function gS(t){return t.documentElement.clientHeight}function _S(t){this.addEventListener("load",t),this.addEventListener("error",t)}function vS(t,e,i,r,l,u,g,E,O){var Q=e.nodeType===9?e:e.ownerDocument;try{var rt=Q.startViewTransition({update:function(){var Y=Q.defaultView,it=Y.navigation&&Y.navigation.transition,Pt=Q.fonts.status;r();var Wt=[];if(Pt==="loaded"&&(gS(Q),Q.fonts.status==="loading"&&Wt.push(Q.fonts.ready)),Pt=Wt.length,t!==null)for(var fe=t.suspenseyImages,K=0,V=0;V<fe.length;V++){var nt=fe[V];if(!nt.complete){var pt=nt.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<Y.innerHeight&&pt.left<Y.innerWidth){if(K+=vv(nt),K>Oc){Wt.length=Pt;break}nt=new Promise(_S.bind(nt)),Wt.push(nt)}}}if(0<Wt.length)return Y=Promise.race([Promise.all(Wt),new Promise(function(kt){return setTimeout(kt,500)})]).then(l,l),(it?Promise.allSettled([it.finished,Y]):Y).then(u,u);if(l(),it)return it.finished.then(u,u);u()},types:i});Q.__reactViewTransition=rt;var mt=[];return rt.ready.then(function(){for(var Y=Q.documentElement.getAnimations({subtree:!0}),it=0;it<Y.length;it++){var Pt=Y[it],Wt=Pt.effect,fe=Wt.pseudoElement;if(fe!=null&&fe.startsWith("::view-transition")){mt.push(Pt),Pt=Wt.getKeyframes();for(var K=fe=void 0,V=!0,nt=0;nt<Pt.length;nt++){var pt=Pt[nt],kt=pt.width;if(fe===void 0)fe=kt;else if(fe!==kt){V=!1;break}if(kt=pt.height,K===void 0)K=kt;else if(K!==kt){V=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}V&&fe!==void 0&&K!==void 0&&(Wt.setKeyframes(Pt),V=getComputedStyle(Wt.target,Wt.pseudoElement),V.width!==fe||V.height!==K)&&(V=Pt[0],V.width=fe,V.height=K,V=Pt[Pt.length-1],V.width=fe,V.height=K,Wt.setKeyframes(Pt))}}g()},function(Y){Q.__reactViewTransition===rt&&(Q.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&O(Y)}finally{r(),l(),g()}}),rt.finished.finally(function(){for(var Y=0;Y<mt.length;Y++)mt[Y].cancel();Q.__reactViewTransition===rt&&(Q.__reactViewTransition=null),E()}),rt}catch{return r(),l(),g(),null}}function Dr(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Dr.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:z({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},Dr.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var u=i[l].effect;u!==null&&u.target===t&&u.pseudoElement===e&&r.push(i[l])}return r},Dr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function J_(t){return{name:t,group:new Dr("group",t),imagePair:new Dr("image-pair",t),old:new Dr("old",t),new:new Dr("new",t)}}function ii(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ii.prototype.addEventListener=function(t,e,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(tv(u,t,e,i)===-1){var g=this,E=e;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(O){g.removeEventListener(t,e,i),typeof e=="function"?e.call(this,O):e.handleEvent(O)}),r!==null&&(l=g.removeEventListener.bind(g,t,e,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Rs(i),u.push({type:t,listener:e,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),m(this._fragmentFiber.child,!1,xS,t,E,r)}this._eventListeners=u}};function xS(t,e,i,r){return S(t).addEventListener(e,i,r),!1}ii.prototype.removeEventListener=function(t,e,i){var r=this._eventListeners;if(r!==null&&(e=tv(r,t,e,i),e!==-1)){var l=r[e];i=l.attachedListener;var u=l.cleanup;l=Rs(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,yS,t,i,l),r.splice(e,1),u!==null&&u()}};function yS(t,e,i,r){return S(t).removeEventListener(e,i,r),!1}function Rs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function $_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function tv(t,e,i,r){if(t.length===0)return-1;r=$_(r);for(var l=0;l<t.length;l++){var u=t[l];if(u.type===e&&u.listener===i&&$_(u.optionsOrUseCapture)===r)return l}return-1}ii.prototype.dispatchEvent=function(t){var e=y(this._fragmentFiber);if(e===null)return!0;e=S(e);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=e.nodeType===9?e.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var u=i[l];r.addEventListener(u.type,u.attachedListener,Rs(u.optionsOrUseCapture))}if(e.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)u=i[l],r.removeEventListener(u.type,u.attachedListener,Rs(u.optionsOrUseCapture));return e.removeChild(r),t}return e.dispatchEvent(t)},ii.prototype.focus=function(t){m(this._fragmentFiber.child,!0,ev,t,void 0,void 0)};function ev(t,e){return t.tag===6?!1:(t=S(t),US(t,e))}ii.prototype.focusLast=function(t){var e=[];m(this._fragmentFiber.child,!0,Ud,e,void 0,void 0);for(var i=e.length-1;0<=i&&!ev(e[i],t);i--);};function Ud(t,e){return e.push(t),!1}ii.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=S(t),t=Zo(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,SS,t,void 0,void 0))};function SS(t,e){return t.tag===6?!1:(t=S(t),t===e||t.contains(e)?(e.blur(),!0):!1)}ii.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,MS,t,void 0,void 0)};function MS(t,e){return t.tag===6||(t=S(t),e.observe(t)),!1}ii.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),m(this._fragmentFiber.child,!1,ES,t,void 0,void 0);for(var i=e=0;i<Ti.length;i++){var r=Ti[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ti[e++]=r}Ti.length=e}};function ES(t,e){return t.tag===6||(t=S(t),e.unobserve(t)),!1}var Ti=[],Ld=!1;function TS(t,e,i){Ti.push({fragmentInstance:t,observer:e,instance:i}),Ld||(Ld=!0,LS(function(){Ld=!1;var r=Ti;Ti=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}ii.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,bS,t,void 0,void 0),t};function bS(t,e){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),e.push.apply(e,i.getClientRects())}else t=S(t),e.push.apply(e,t.getClientRects());return!1}ii.prototype.getRootNode=function(t){var e=y(this._fragmentFiber);return e===null?this:S(e).getRootNode(t)},ii.prototype.compareDocumentPosition=function(t){var e=y(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];m(this._fragmentFiber.child,!1,Ud,i,void 0,void 0);var r=S(e);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(i=e)}e=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=A(e)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=S(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=S(i[0]),l=S(i[i.length-1]);var u=M(this._fragmentFiber)?e.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=e.compareDocumentPosition(t),E=l.compareDocumentPosition(t),O=g&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&u&&g&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,e=r&&e===t||u&&l===t||O||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&e===t||!u&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||AS(e,this._fragmentFiber,i[0],i[i.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function AS(t,e,i,r,l){var u=Qt(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===e||u.alternate===e)){i=!0;break t}u=u.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;t:{for(u=e,e=y(e);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==e&&u.alternate!==e)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!u)&&!(e=u===i)&&(e=X(i,u,W),e===null?e=!1:(m(e,!0,B,u,i),u=x,x=null,e=u!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!u)&&!(e=u===r)&&(e=X(r,u,W),e===null?e=!1:(m(e,!0,D,u,r),u=x,H=x=null,e=u!==null)),e):!1}function nv(t,e){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ii.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var e=[];m(this._fragmentFiber.child,!1,Ud,e,void 0,void 0);var i=t!==!1;if(e.length===0){var r=A(this._fragmentFiber);if(r=i?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=S(r),nv(t,i);return}if(r=S(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?e.length-1:0;r!==(i?-1:e.length);){var l=e[r];l.tag===6?(l=S(l),nv(l,i)):S(l).scrollIntoView(t),r+=i?-1:1}};function RS(t,e){return t=S(t),iv(t,e),!1}function iv(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function av(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,Rs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(u){for(var g=0,E=0;E<Ti.length;E++){var O=Ti[E];(O.fragmentInstance!==e||O.observer!==u||O.instance!==t)&&(Ti[g++]=O)}Ti.length=g,u.observe(t)}),iv(t,e))}function CS(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,Rs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(u){typeof u.rootMargin=="string"?TS(e,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Od(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Od(i),_e(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function wS(t,e,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ke])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function DS(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=pi(t.nextSibling),t===null))return null;return t}function rv(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=pi(t.nextSibling),t===null))return null;return t}function Pd(t){return t.data==="$?"||t.data==="$~"}function zd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function NS(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var r=function(){e(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function pi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Id=null;function sv(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return pi(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function ov(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function US(t,e){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function LS(t){Y_(function(){Y_(function(e){return t(e)})})}function lv(t,e,i){switch(e=Zo(i),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function cv(t,e,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Pe(t,e,r,null,lS,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Li&&(t.onclick=null),_e(t)}function Bd(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);_e(t)}var mi=new Map,uv=new Set;function Ko(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var ca=wt.d;wt.d={f:OS,r:PS,D:zS,C:IS,L:BS,m:FS,X:GS,S:HS,M:VS};function OS(){var t=ca.f(),e=bc();return t||e}function PS(t){var e=Ke(t);e!==null&&e.tag===5&&e.type==="form"?dg(e):ca.r(t)}var Cs=typeof document>"u"?null:document;function fv(t,e,i){var r=Cs;if(r&&typeof e=="string"&&e){var l=oi(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),uv.has(l)||(uv.add(l),t={rel:t,crossOrigin:i,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),wn(e,"link",t),We(e),r.head.appendChild(e)))}}function zS(t){ca.D(t),fv("dns-prefetch",t,null)}function IS(t,e){ca.C(t,e),fv("preconnect",t,e)}function BS(t,e,i){ca.L(t,e,i);var r=Cs;if(r&&t&&e){var l='link[rel="preload"][as="'+oi(e)+'"]';e==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+oi(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+oi(i.imageSizes)+'"]')):l+='[href="'+oi(t)+'"]';var u=l;switch(e){case"style":u=ws(t);break;case"script":u=Ds(t)}if(!(mi.has(u)||(t=z({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),mi.set(u,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(Qo(u))||e==="script"&&r.querySelector(Jo(u))))){var g=r.createElement("link");wn(g,"link",t),e==="style"&&(g[He]=!0,g.onload=g.onerror=function(){Un(g)}),We(g),r.head.appendChild(g)}}}function FS(t,e){ca.m(t,e);var i=Cs;if(i&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+oi(r)+'"][href="'+oi(t)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ds(t)}if(!mi.has(u)&&(t=z({rel:"modulepreload",href:t},e),mi.set(u,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Jo(u)))return}r=i.createElement("link"),wn(r,"link",t),We(r),i.head.appendChild(r)}}}function HS(t,e,i){ca.S(t,e,i);var r=Cs;if(r&&t){var l=vn(r).hoistableStyles,u=ws(t);e=e||"default";var g=l.get(u);if(!g){var E={loading:0,preload:null};if(g=r.querySelector(Qo(u)))E.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":e},i),(i=mi.get(u))&&Fd(t,i);var O=g=r.createElement("link");We(O),wn(O,"link",t),O._p=new Promise(function(Q,rt){O.onload=Q,O.onerror=rt}),O.addEventListener("load",function(){E.loading|=1}),O.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Uc(g,e,r)}g={type:"stylesheet",instance:g,count:1,state:E},l.set(u,g)}}}function GS(t,e){ca.X(t,e);var i=Cs;if(i&&t){var r=vn(i).hoistableScripts,l=Ds(t),u=r.get(l);u||(u=i.querySelector(Jo(l)),u||(t=z({src:t,async:!0},e),(e=mi.get(l))&&Hd(t,e),u=i.createElement("script"),We(u),wn(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function VS(t,e){ca.M(t,e);var i=Cs;if(i&&t){var r=vn(i).hoistableScripts,l=Ds(t),u=r.get(l);u||(u=i.querySelector(Jo(l)),u||(t=z({src:t,async:!0,type:"module"},e),(e=mi.get(l))&&Hd(t,e),u=i.createElement("script"),We(u),wn(u,"link",t),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function dv(t,e,i,r){var l=(l=L.current)?Ko(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=ws(i.href),e=vn(l).hoistableStyles,r=e.get(i),r||(r={type:"style",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=ws(i.href);var u=vn(l).hoistableStyles,g=u.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,g),(u=l.querySelector(Qo(t)))?u._p||(g.instance=u,g.state.loading=5):(u=mi.get(t),u||(u={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},mi.set(t,u)),XS(l,t,u,g.state))),e&&r===null)throw Error(s(528,""));return g}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(i=Ds(i),e=vn(l).hoistableScripts,r=e.get(i),r||(r={type:"script",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ws(t){return'href="'+oi(t)+'"'}function Qo(t){return'link[rel="stylesheet"]['+t+"]"}function hv(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function XS(t,e,i,r){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[He]!==!0){r.loading=1;return}}else e=t.createElement("link"),e[He]=!0,e.onload=e.onerror=Un.bind(null,e),wn(e,"link",i),We(e),t.head.appendChild(e);r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2})}function Ds(t){return'[src="'+oi(t)+'"]'}function Jo(t){return"script[async]"+t}function pv(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+oi(i.href)+'"]');if(r)return e.instance=r,We(r),r;var l=z({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),We(r),wn(r,"style",l),Uc(r,i.precedence,t),e.instance=r;case"stylesheet":l=ws(i.href);var u=t.querySelector(Qo(l));if(u)return e.state.loading|=4,e.instance=u,We(u),u;r=hv(i),(l=mi.get(l))&&Fd(r,l),u=(t.ownerDocument||t).createElement("link"),We(u);var g=u;return g._p=new Promise(function(E,O){g.onload=E,g.onerror=O}),wn(u,"link",r),e.state.loading|=4,Uc(u,i.precedence,t),e.instance=u;case"script":return u=Ds(i.src),(l=t.querySelector(Jo(u)))?(e.instance=l,We(l),l):(r=i,(l=mi.get(u))&&(r=z({},i),Hd(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),We(l),wn(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Uc(r,i.precedence,t));return e.instance}function Uc(t,e,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,g=0;g<r.length;g++){var E=r[g];if(E.dataset.precedence===e)u=E;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function Fd(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Hd(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Lc=null;function mv(t,e,i){if(Lc===null){var r=new Map,l=Lc=new Map;l.set(i,r)}else l=Lc,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var u=i[l];if(!(u[ke]||u[Ut]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var g=u.getAttribute(e)||"";g=t+g;var E=r.get(g);E?E.push(u):r.set(g,[u])}}return r}function Gd(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function kS(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function gv(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function _v(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function vv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function xv(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=vv(e),t.suspenseyImages.push(e)),t=YS.bind(t),e.decode().then(t,t))}function jS(t,e,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=ws(r.href),u=e.querySelector(Qo(l));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=$o.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=u,We(u);return}u=e.ownerDocument||e,r=hv(r),(l=mi.get(l))&&Fd(r,l),u=u.createElement("link"),We(u);var g=u;g._p=new Promise(function(E,O){g.onload=E,g.onerror=O}),wn(u,"link",r),i.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=$o.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var Oc=0;function qS(t,e){return t.stylesheets&&t.count===0&&zc(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&zc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Oc===0&&(Oc=62500*uS());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&zc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Oc?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function yv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)zc(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function $o(){this.count--,yv(this)}function YS(){this.imgCount--,yv(this)}var Pc=null;function zc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pc=new Map,e.forEach(WS,t),Pc=null,$o.call(t))}function WS(t,e){if(!(e.state.loading&4)){var i=Pc.get(t);if(i)var r=i.get(null);else{i=new Map,Pc.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var g=l[u];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(i.set(g.dataset.precedence,g),r=g)}r&&i.set(null,r)}l=e.instance,g=l.getAttribute("data-precedence"),u=i.get(g)||r,u===r&&i.set(null,l),i.set(g,l),this.count++,r=$o.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Ns={$$typeof:gt,Provider:null,Consumer:null,_currentValue:Zt,_currentValue2:Zt,_threadCount:0};function ZS(t,e,i,r,l,u,g,E,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=po(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=po(0),this.hiddenUpdates=po(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.transitionTypes=null,this.incompleteTransitions=new Map}function Sv(t,e,i,r,l,u,g,E,O,Q,rt,mt){return t=new ZS(t,e,i,g,O,Q,rt,mt,E),e=1,u===!0&&(e|=24),u=Xn(3,null,null,e),t.current=u,u.stateNode=t,e=ef(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:r,isDehydrated:i,cache:e},sf(u),t}function Mv(t){return t?(t=is,t):is}function Ev(t,e,i,r,l,u){l=Mv(l),r.context===null?r.context=l:r.pendingContext=l,r=Oa(e),r.payload={element:i},u=u===void 0?null:u,u!==null&&(r.callback=u),i=Pa(t,r,e),i!==null&&(Yn(i,t,e),Do(i,t,e))}function Tv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Vd(t,e){Tv(t,e),(t=t.alternate)&&Tv(t,e)}function bv(t){if(t.tag===13||t.tag===31){var e=hr(t,67108864);e!==null&&Yn(e,t,67108864),Vd(t,67108864)}}function Av(t){if(t.tag===13||t.tag===31){var e=ni();e=ot(e);var i=hr(t,e);i!==null&&Yn(i,t,e),Vd(t,e)}}var Us=!0;function KS(t,e,i,r){var l=Mt.T;Mt.T=null;var u=wt.p;try{wt.p=2,Xd(t,e,i,r)}finally{wt.p=u,Mt.T=l}}function QS(t,e,i,r){var l=Mt.T;Mt.T=null;var u=wt.p;try{wt.p=8,Xd(t,e,i,r)}finally{wt.p=u,Mt.T=l}}function Xd(t,e,i,r){if(Us){var l=kd(r);if(l===null)Td(t,e,r,Ic,i),Cv(t,r);else if($S(l,t,e,i,r))r.stopPropagation();else if(Cv(t,r),e&4&&-1<JS.indexOf(t)){for(;l!==null;){var u=Ke(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var g=Ui(u.pendingLanes);if(g!==0){var E=u;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var O=1<<31-Nn(g);E.entanglements[1]|=O,g&=~O}Xi(u),(Ne&6)===0&&(Mc=j()+500,qo(0))}}break;case 31:case 13:E=hr(u,2),E!==null&&Yn(E,u,2),bc(),Vd(u,2)}if(u=kd(r),u===null&&Td(t,e,r,Ic,i),u===l)break;l=u}l!==null&&r.stopPropagation()}else Td(t,e,r,null,i)}}function kd(t){return t=Cu(t),jd(t)}var Ic=null;function jd(t){if(Ic=null,t=Qt(t),t!==null){var e=f(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=d(e),t!==null)return t;t=null}else if(i===31){if(t=h(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ic=t,null}function Rv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ht()){case dt:return 2;case St:return 8;case Gt:case Vt:return 32;case le:return 268435456;default:return 32}default:return 32}}var qd=!1,Ya=null,Wa=null,Za=null,tl=new Map,el=new Map,Ka=[],JS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cv(t,e){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":tl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(e.pointerId)}}function nl(t,e,i,r,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},e!==null&&(e=Ke(e),e!==null&&bv(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function $S(t,e,i,r,l){switch(e){case"focusin":return Ya=nl(Ya,t,e,i,r,l),!0;case"dragenter":return Wa=nl(Wa,t,e,i,r,l),!0;case"mouseover":return Za=nl(Za,t,e,i,r,l),!0;case"pointerover":var u=l.pointerId;return tl.set(u,nl(tl.get(u)||null,t,e,i,r,l)),!0;case"gotpointercapture":return u=l.pointerId,el.set(u,nl(el.get(u)||null,t,e,i,r,l)),!0}return!1}function wv(t){var e=Qt(t.target);if(e!==null){var i=f(e);if(i!==null){if(e=i.tag,e===13){if(e=d(i),e!==null){t.blockedOn=e,Ct(t.priority,function(){Av(i)});return}}else if(e===31){if(e=h(i),e!==null){t.blockedOn=e,Ct(t.priority,function(){Av(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=kd(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Ru=r,i.target.dispatchEvent(r),Ru=null}else return e=Ke(i),e!==null&&bv(e),t.blockedOn=i,!1;e.shift()}return!0}function Dv(t,e,i){Bc(t)&&i.delete(e)}function tM(){qd=!1,Ya!==null&&Bc(Ya)&&(Ya=null),Wa!==null&&Bc(Wa)&&(Wa=null),Za!==null&&Bc(Za)&&(Za=null),tl.forEach(Dv),el.forEach(Dv)}function Fc(t,e){t.blockedOn===e&&(t.blockedOn=null,qd||(qd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,tM)))}var Hc=null;function Nv(t){Hc!==t&&(Hc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Hc===t&&(Hc=null);for(var e=0;e<t.length;e+=3){var i=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(jd(r||i)===null)continue;break}var u=Ke(i);u!==null&&(t.splice(e,3),e-=3,Rf(u,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Ls(t){function e(O){return Fc(O,t)}Ya!==null&&Fc(Ya,t),Wa!==null&&Fc(Wa,t),Za!==null&&Fc(Za,t),tl.forEach(e),el.forEach(e);for(var i=0;i<Ka.length;i++){var r=Ka[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ka.length&&(i=Ka[0],i.blockedOn===null);)wv(i),i.blockedOn===null&&Ka.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],u=i[r+1],g=l[zt]||null;if(typeof u=="function")g||Nv(i);else if(g){var E=null;if(u&&u.hasAttribute("formAction")){if(l=u,g=u[zt]||null)E=g.formAction;else if(jd(l)!==null)continue}else E=g.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),Nv(i)}}}function Uv(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function Yd(t){this._internalRoot=t}Gc.prototype.render=Yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var i=e.current,r=ni();Ev(i,r,t,e,null,null)},Gc.prototype.unmount=Yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ev(t.current,2,null,t,null,null),bc(),e[ne]=null}};function Gc(t){this._internalRoot=t}Gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=tt();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Ka.length&&e!==0&&e<Ka[i].priority;i++);Ka.splice(i,0,t),i===0&&wv(t)}};var Lv=n.version;if(Lv!=="19.3.1")throw Error(s(527,Lv,"19.3.1"));wt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=_(e),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var eM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vc.isDisabled&&Vc.supportsFiber)try{Te=Vc.inject(eM),Ye=Vc}catch{}}return al.createRoot=function(t,e){if(!c(t))throw Error(s(299));var i=!1,r="",l=Mg,u=Eg,g=Tg;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError)),e=Sv(t,1,!1,null,null,i,r,null,l,u,g,Uv),t[ne]=e.current,Ed(t),new Yd(e)},al.hydrateRoot=function(t,e,i){if(!c(t))throw Error(s(299));var r=!1,l="",u=Mg,g=Eg,E=Tg,O=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(O=i.formState)),e=Sv(t,1,!0,e,i??null,r,l,O,u,g,E,Uv),e.context=Mv(null),i=e.current,r=ni(),r=ot(r),l=Oa(r),l.callback=null,Pa(i,l,r),i=r,e.current.lanes=i,ur(e,i),Xi(e),t[ne]=e.current,Ed(t),new Gc(e)},al.version="19.3.1",al}var Xv;function fM(){if(Xv)return Kd.exports;Xv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Kd.exports=uM(),Kd.exports}var dM=fM();const hM=j0(dM);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gp="174",pM=0,kv=1,mM=2,Y0=1,gM=2,ma=3,or=0,Zn=1,ga=2,rr=0,Js=1,jv=2,qv=3,Yv=4,_M=5,Hr=100,vM=101,xM=102,yM=103,SM=104,MM=200,EM=201,TM=202,bM=203,wh=204,Dh=205,AM=206,RM=207,CM=208,wM=209,DM=210,NM=211,UM=212,LM=213,OM=214,Nh=0,Uh=1,Lh=2,eo=3,Oh=4,Ph=5,zh=6,Ih=7,W0=0,PM=1,zM=2,sr=0,IM=1,BM=2,FM=3,HM=4,GM=5,VM=6,XM=7,Z0=300,no=301,io=302,Bh=303,Fh=304,vu=306,Hh=1e3,Vr=1001,Gh=1002,Di=1003,kM=1004,Xc=1005,ji=1006,th=1007,Xr=1008,Sa=1009,K0=1010,Q0=1011,hl=1012,_p=1013,jr=1014,va=1015,gl=1016,vp=1017,xp=1018,ao=1020,J0=35902,$0=1021,tx=1022,wi=1023,ex=1024,nx=1025,$s=1026,ro=1027,ix=1028,yp=1029,ax=1030,Sp=1031,Mp=1033,uu=33776,fu=33777,du=33778,hu=33779,Vh=35840,Xh=35841,kh=35842,jh=35843,qh=36196,Yh=37492,Wh=37496,Zh=37808,Kh=37809,Qh=37810,Jh=37811,$h=37812,tp=37813,ep=37814,np=37815,ip=37816,ap=37817,rp=37818,sp=37819,op=37820,lp=37821,pu=36492,cp=36494,up=36495,rx=36283,fp=36284,dp=36285,hp=36286,jM=3200,qM=3201,YM=0,WM=1,ar="",_i="srgb",so="srgb-linear",gu="linear",Fe="srgb",Os=7680,Wv=519,ZM=512,KM=513,QM=514,sx=515,JM=516,$M=517,tE=518,eE=519,Zv=35044,Kv="300 es",xa=2e3,_u=2001;class lo{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[n]===void 0&&(s[n]=[]),s[n].indexOf(a)===-1&&s[n].push(a)}hasEventListener(n,a){const s=this._listeners;return s===void 0?!1:s[n]!==void 0&&s[n].indexOf(a)!==-1}removeEventListener(n,a){const s=this._listeners;if(s===void 0)return;const c=s[n];if(c!==void 0){const f=c.indexOf(a);f!==-1&&c.splice(f,1)}}dispatchEvent(n){const a=this._listeners;if(a===void 0)return;const s=a[n.type];if(s!==void 0){n.target=this;const c=s.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,n);n.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qv=1234567;const fl=Math.PI/180,pl=180/Math.PI;function co(){const o=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[n&255]+On[n>>8&255]+"-"+On[n>>16&15|64]+On[n>>24&255]+"-"+On[a&63|128]+On[a>>8&255]+"-"+On[a>>16&255]+On[a>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Ee(o,n,a){return Math.max(n,Math.min(a,o))}function Ep(o,n){return(o%n+n)%n}function nE(o,n,a,s,c){return s+(o-n)*(c-s)/(a-n)}function iE(o,n,a){return o!==n?(a-o)/(n-o):0}function dl(o,n,a){return(1-a)*o+a*n}function aE(o,n,a,s){return dl(o,n,1-Math.exp(-a*s))}function rE(o,n=1){return n-Math.abs(Ep(o,n*2)-n)}function sE(o,n,a){return o<=n?0:o>=a?1:(o=(o-n)/(a-n),o*o*(3-2*o))}function oE(o,n,a){return o<=n?0:o>=a?1:(o=(o-n)/(a-n),o*o*o*(o*(o*6-15)+10))}function lE(o,n){return o+Math.floor(Math.random()*(n-o+1))}function cE(o,n){return o+Math.random()*(n-o)}function uE(o){return o*(.5-Math.random())}function fE(o){o!==void 0&&(Qv=o);let n=Qv+=1831565813;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}function dE(o){return o*fl}function hE(o){return o*pl}function pE(o){return(o&o-1)===0&&o!==0}function mE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function gE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function _E(o,n,a,s,c){const f=Math.cos,d=Math.sin,h=f(a/2),p=d(a/2),_=f((n+s)/2),v=d((n+s)/2),m=f((n-s)/2),y=d((n-s)/2),M=f((s-n)/2),A=d((s-n)/2);switch(c){case"XYX":o.set(h*v,p*m,p*y,h*_);break;case"YZY":o.set(p*y,h*v,p*m,h*_);break;case"ZXZ":o.set(p*m,p*y,h*v,h*_);break;case"XZX":o.set(h*v,p*A,p*M,h*_);break;case"YXY":o.set(p*M,h*v,p*A,h*_);break;case"ZYZ":o.set(p*A,p*M,h*v,h*_);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+c)}}function Ws(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const vE={DEG2RAD:fl,RAD2DEG:pl,generateUUID:co,clamp:Ee,euclideanModulo:Ep,mapLinear:nE,inverseLerp:iE,lerp:dl,damp:aE,pingpong:rE,smoothstep:sE,smootherstep:oE,randInt:lE,randFloat:cE,randFloatSpread:uE,seededRandom:fE,degToRad:dE,radToDeg:hE,isPowerOfTwo:pE,ceilPowerOfTwo:mE,floorPowerOfTwo:gE,setQuaternionFromProperEuler:_E,normalize:Hn,denormalize:Ws};class Xe{constructor(n=0,a=0){Xe.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,s=this.y,c=n.elements;return this.x=c[0]*a+c[3]*s+c[6],this.y=c[1]*a+c[4]*s+c[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=Ee(this.x,n.x,a.x),this.y=Ee(this.y,n.y,a.y),this}clampScalar(n,a){return this.x=Ee(this.x,n,a),this.y=Ee(this.y,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(Ee(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y;return a*a+s*s}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const s=Math.cos(a),c=Math.sin(a),f=this.x-n.x,d=this.y-n.y;return this.x=f*s-d*c+n.x,this.y=f*c+d*s+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(n,a,s,c,f,d,h,p,_){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,a,s,c,f,d,h,p,_)}set(n,a,s,c,f,d,h,p,_){const v=this.elements;return v[0]=n,v[1]=c,v[2]=h,v[3]=a,v[4]=f,v[5]=p,v[6]=s,v[7]=d,v[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(n,a,s){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,c=a.elements,f=this.elements,d=s[0],h=s[3],p=s[6],_=s[1],v=s[4],m=s[7],y=s[2],M=s[5],A=s[8],w=c[0],S=c[3],x=c[6],H=c[1],B=c[4],D=c[7],W=c[2],X=c[5],z=c[8];return f[0]=d*w+h*H+p*W,f[3]=d*S+h*B+p*X,f[6]=d*x+h*D+p*z,f[1]=_*w+v*H+m*W,f[4]=_*S+v*B+m*X,f[7]=_*x+v*D+m*z,f[2]=y*w+M*H+A*W,f[5]=y*S+M*B+A*X,f[8]=y*x+M*D+A*z,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],_=n[7],v=n[8];return a*d*v-a*h*_-s*f*v+s*h*p+c*f*_-c*d*p}invert(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],_=n[7],v=n[8],m=v*d-h*_,y=h*p-v*f,M=_*f-d*p,A=a*m+s*y+c*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return n[0]=m*w,n[1]=(c*_-v*s)*w,n[2]=(h*s-c*d)*w,n[3]=y*w,n[4]=(v*a-c*p)*w,n[5]=(c*f-h*a)*w,n[6]=M*w,n[7]=(s*p-_*a)*w,n[8]=(d*a-s*f)*w,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,s,c,f,d,h){const p=Math.cos(f),_=Math.sin(f);return this.set(s*p,s*_,-s*(p*d+_*h)+d+n,-c*_,c*p,-c*(-_*d+p*h)+h+a,0,0,1),this}scale(n,a){return this.premultiply(eh.makeScale(n,a)),this}rotate(n){return this.premultiply(eh.makeRotation(-n)),this}translate(n,a){return this.premultiply(eh.makeTranslation(n,a)),this}makeTranslation(n,a){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,s=n.elements;for(let c=0;c<9;c++)if(a[c]!==s[c])return!1;return!0}fromArray(n,a=0){for(let s=0;s<9;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const eh=new de;function ox(o){for(let n=o.length-1;n>=0;--n)if(o[n]>=65535)return!0;return!1}function ml(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function xE(){const o=ml("canvas");return o.style.display="block",o}const Jv={};function Ir(o){o in Jv||(Jv[o]=!0,console.warn(o))}function yE(o,n,a){return new Promise(function(s,c){function f(){switch(o.clientWaitSync(n,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}function SE(o){const n=o.elements;n[2]=.5*n[2]+.5*n[3],n[6]=.5*n[6]+.5*n[7],n[10]=.5*n[10]+.5*n[11],n[14]=.5*n[14]+.5*n[15]}function ME(o){const n=o.elements;n[11]===-1?(n[10]=-n[10]-1,n[14]=-n[14]):(n[10]=-n[10],n[14]=-n[14]+1)}const $v=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),t0=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EE(){const o={enabled:!0,workingColorSpace:so,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Fe&&(c.r=ya(c.r),c.g=ya(c.g),c.b=ya(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Fe&&(c.r=to(c.r),c.g=to(c.g),c.b=to(c.b))),c},fromWorkingColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},toWorkingColorSpace:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===ar?gu:this.spaces[c].transfer},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace}},n=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[so]:{primaries:n,whitePoint:s,transfer:gu,toXYZ:$v,fromXYZ:t0,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:n,whitePoint:s,transfer:Fe,toXYZ:$v,fromXYZ:t0,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),o}const De=EE();function ya(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function to(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ps;class TE{static getDataURL(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let a;if(n instanceof HTMLCanvasElement)a=n;else{Ps===void 0&&(Ps=ml("canvas")),Ps.width=n.width,Ps.height=n.height;const s=Ps.getContext("2d");n instanceof ImageData?s.putImageData(n,0,0):s.drawImage(n,0,0,n.width,n.height),a=Ps}return a.toDataURL("image/png")}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=ml("canvas");a.width=n.width,a.height=n.height;const s=a.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const c=s.getImageData(0,0,n.width,n.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=ya(f[d]/255)*255;return s.putImageData(c,0,0),a}else if(n.data){const a=n.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(ya(a[s]/255)*255):a[s]=ya(a[s]);return{data:a,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let bE=0;class Tp{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=co(),this.data=n,this.dataReady=!0,this.version=0}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(nh(c[d].image)):f.push(nh(c[d]))}else f=nh(c);s.url=f}return a||(n.images[this.uuid]=s),s}}function nh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?TE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AE=0;class Vn extends lo{constructor(n=Vn.DEFAULT_IMAGE,a=Vn.DEFAULT_MAPPING,s=Vr,c=Vr,f=ji,d=Xr,h=wi,p=Sa,_=Vn.DEFAULT_ANISOTROPY,v=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=co(),this.name="",this.source=new Tp(n),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=_,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.renderTarget=n.renderTarget,this.isRenderTargetTexture=n.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==Z0)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case Hh:n.x=n.x-Math.floor(n.x);break;case Vr:n.x=n.x<0?0:1;break;case Gh:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case Hh:n.y=n.y-Math.floor(n.y);break;case Vr:n.y=n.y<0?0:1;break;case Gh:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Z0;Vn.DEFAULT_ANISOTROPY=1;class an{constructor(n=0,a=0,s=0,c=1){an.prototype.isVector4=!0,this.x=n,this.y=a,this.z=s,this.w=c}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,s,c){return this.x=n,this.y=a,this.z=s,this.w=c,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,s=this.y,c=this.z,f=this.w,d=n.elements;return this.x=d[0]*a+d[4]*s+d[8]*c+d[12]*f,this.y=d[1]*a+d[5]*s+d[9]*c+d[13]*f,this.z=d[2]*a+d[6]*s+d[10]*c+d[14]*f,this.w=d[3]*a+d[7]*s+d[11]*c+d[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,s,c,f;const p=n.elements,_=p[0],v=p[4],m=p[8],y=p[1],M=p[5],A=p[9],w=p[2],S=p[6],x=p[10];if(Math.abs(v-y)<.01&&Math.abs(m-w)<.01&&Math.abs(A-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(m+w)<.1&&Math.abs(A+S)<.1&&Math.abs(_+M+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const B=(_+1)/2,D=(M+1)/2,W=(x+1)/2,X=(v+y)/4,z=(m+w)/4,q=(A+S)/4;return B>D&&B>W?B<.01?(s=0,c=.707106781,f=.707106781):(s=Math.sqrt(B),c=X/s,f=z/s):D>W?D<.01?(s=.707106781,c=0,f=.707106781):(c=Math.sqrt(D),s=X/c,f=q/c):W<.01?(s=.707106781,c=.707106781,f=0):(f=Math.sqrt(W),s=z/f,c=q/f),this.set(s,c,f,a),this}let H=Math.sqrt((S-A)*(S-A)+(m-w)*(m-w)+(y-v)*(y-v));return Math.abs(H)<.001&&(H=1),this.x=(S-A)/H,this.y=(m-w)/H,this.z=(y-v)/H,this.w=Math.acos((_+M+x-1)/2),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=Ee(this.x,n.x,a.x),this.y=Ee(this.y,n.y,a.y),this.z=Ee(this.z,n.z,a.z),this.w=Ee(this.w,n.w,a.w),this}clampScalar(n,a){return this.x=Ee(this.x,n,a),this.y=Ee(this.y,n,a),this.z=Ee(this.z,n,a),this.w=Ee(this.w,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this.w=n.w+(a.w-n.w)*s,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RE extends lo{constructor(n=1,a=1,s={}){super(),this.isRenderTarget=!0,this.width=n,this.height=a,this.depth=1,this.scissor=new an(0,0,n,a),this.scissorTest=!1,this.viewport=new an(0,0,n,a);const c={width:n,height:a,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const f=new Vn(c,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);f.flipY=!1,f.generateMipmaps=s.generateMipmaps,f.internalFormat=s.internalFormat,this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}set depthTexture(n){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),n!==null&&(n.renderTarget=this),this._depthTexture=n}get depthTexture(){return this._depthTexture}setSize(n,a,s=1){if(this.width!==n||this.height!==a||this.depth!==s){this.width=n,this.height=a,this.depth=s;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=n,this.textures[c].image.height=a,this.textures[c].image.depth=s;this.dispose()}this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let a=0,s=n.textures.length;a<s;a++){this.textures[a]=n.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const c=Object.assign({},n.textures[a].image);this.textures[a].source=new Tp(c)}return this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends RE{constructor(n=1,a=1,s={}){super(n,a,s),this.isWebGLRenderTarget=!0}}class lx extends Vn{constructor(n=null,a=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:s,depth:c},this.magFilter=Di,this.minFilter=Di,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class CE extends Vn{constructor(n=null,a=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:s,depth:c},this.magFilter=Di,this.minFilter=Di,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l{constructor(n=0,a=0,s=0,c=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=s,this._w=c}static slerpFlat(n,a,s,c,f,d,h){let p=s[c+0],_=s[c+1],v=s[c+2],m=s[c+3];const y=f[d+0],M=f[d+1],A=f[d+2],w=f[d+3];if(h===0){n[a+0]=p,n[a+1]=_,n[a+2]=v,n[a+3]=m;return}if(h===1){n[a+0]=y,n[a+1]=M,n[a+2]=A,n[a+3]=w;return}if(m!==w||p!==y||_!==M||v!==A){let S=1-h;const x=p*y+_*M+v*A+m*w,H=x>=0?1:-1,B=1-x*x;if(B>Number.EPSILON){const W=Math.sqrt(B),X=Math.atan2(W,x*H);S=Math.sin(S*X)/W,h=Math.sin(h*X)/W}const D=h*H;if(p=p*S+y*D,_=_*S+M*D,v=v*S+A*D,m=m*S+w*D,S===1-h){const W=1/Math.sqrt(p*p+_*_+v*v+m*m);p*=W,_*=W,v*=W,m*=W}}n[a]=p,n[a+1]=_,n[a+2]=v,n[a+3]=m}static multiplyQuaternionsFlat(n,a,s,c,f,d){const h=s[c],p=s[c+1],_=s[c+2],v=s[c+3],m=f[d],y=f[d+1],M=f[d+2],A=f[d+3];return n[a]=h*A+v*m+p*M-_*y,n[a+1]=p*A+v*y+_*m-h*M,n[a+2]=_*A+v*M+h*y-p*m,n[a+3]=v*A-h*m-p*y-_*M,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,s,c){return this._x=n,this._y=a,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a=!0){const s=n._x,c=n._y,f=n._z,d=n._order,h=Math.cos,p=Math.sin,_=h(s/2),v=h(c/2),m=h(f/2),y=p(s/2),M=p(c/2),A=p(f/2);switch(d){case"XYZ":this._x=y*v*m+_*M*A,this._y=_*M*m-y*v*A,this._z=_*v*A+y*M*m,this._w=_*v*m-y*M*A;break;case"YXZ":this._x=y*v*m+_*M*A,this._y=_*M*m-y*v*A,this._z=_*v*A-y*M*m,this._w=_*v*m+y*M*A;break;case"ZXY":this._x=y*v*m-_*M*A,this._y=_*M*m+y*v*A,this._z=_*v*A+y*M*m,this._w=_*v*m-y*M*A;break;case"ZYX":this._x=y*v*m-_*M*A,this._y=_*M*m+y*v*A,this._z=_*v*A-y*M*m,this._w=_*v*m+y*M*A;break;case"YZX":this._x=y*v*m+_*M*A,this._y=_*M*m+y*v*A,this._z=_*v*A-y*M*m,this._w=_*v*m-y*M*A;break;case"XZY":this._x=y*v*m-_*M*A,this._y=_*M*m-y*v*A,this._z=_*v*A+y*M*m,this._w=_*v*m+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const s=a/2,c=Math.sin(s);return this._x=n.x*c,this._y=n.y*c,this._z=n.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,s=a[0],c=a[4],f=a[8],d=a[1],h=a[5],p=a[9],_=a[2],v=a[6],m=a[10],y=s+h+m;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-p)*M,this._y=(f-_)*M,this._z=(d-c)*M}else if(s>h&&s>m){const M=2*Math.sqrt(1+s-h-m);this._w=(v-p)/M,this._x=.25*M,this._y=(c+d)/M,this._z=(f+_)/M}else if(h>m){const M=2*Math.sqrt(1+h-s-m);this._w=(f-_)/M,this._x=(c+d)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+m-s-h);this._w=(d-c)/M,this._x=(f+_)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let s=n.dot(a)+1;return s<Number.EPSILON?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=s),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(Ee(this.dot(n),-1,1)))}rotateTowards(n,a){const s=this.angleTo(n);if(s===0)return this;const c=Math.min(1,a/s);return this.slerp(n,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const s=n._x,c=n._y,f=n._z,d=n._w,h=a._x,p=a._y,_=a._z,v=a._w;return this._x=s*v+d*h+c*_-f*p,this._y=c*v+d*p+f*h-s*_,this._z=f*v+d*_+s*p-c*h,this._w=d*v-s*h-c*p-f*_,this._onChangeCallback(),this}slerp(n,a){if(a===0)return this;if(a===1)return this.copy(n);const s=this._x,c=this._y,f=this._z,d=this._w;let h=d*n._w+s*n._x+c*n._y+f*n._z;if(h<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,h=-h):this.copy(n),h>=1)return this._w=d,this._x=s,this._y=c,this._z=f,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-a;return this._w=M*d+a*this._w,this._x=M*s+a*this._x,this._y=M*c+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const _=Math.sqrt(p),v=Math.atan2(_,h),m=Math.sin((1-a)*v)/_,y=Math.sin(a*v)/_;return this._w=d*m+this._w*y,this._x=s*m+this._x*y,this._y=c*m+this._y*y,this._z=f*m+this._z*y,this._onChangeCallback(),this}slerpQuaternions(n,a,s){return this.copy(n).slerp(a,s)}random(){const n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(c*Math.sin(n),c*Math.cos(n),f*Math.sin(a),f*Math.cos(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ft{constructor(n=0,a=0,s=0){ft.prototype.isVector3=!0,this.x=n,this.y=a,this.z=s}set(n,a,s){return s===void 0&&(s=this.z),this.x=n,this.y=a,this.z=s,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(e0.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(e0.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,s=this.y,c=this.z,f=n.elements;return this.x=f[0]*a+f[3]*s+f[6]*c,this.y=f[1]*a+f[4]*s+f[7]*c,this.z=f[2]*a+f[5]*s+f[8]*c,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,s=this.y,c=this.z,f=n.elements,d=1/(f[3]*a+f[7]*s+f[11]*c+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*c+f[12])*d,this.y=(f[1]*a+f[5]*s+f[9]*c+f[13])*d,this.z=(f[2]*a+f[6]*s+f[10]*c+f[14])*d,this}applyQuaternion(n){const a=this.x,s=this.y,c=this.z,f=n.x,d=n.y,h=n.z,p=n.w,_=2*(d*c-h*s),v=2*(h*a-f*c),m=2*(f*s-d*a);return this.x=a+p*_+d*m-h*v,this.y=s+p*v+h*_-f*m,this.z=c+p*m+f*v-d*_,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,s=this.y,c=this.z,f=n.elements;return this.x=f[0]*a+f[4]*s+f[8]*c,this.y=f[1]*a+f[5]*s+f[9]*c,this.z=f[2]*a+f[6]*s+f[10]*c,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=Ee(this.x,n.x,a.x),this.y=Ee(this.y,n.y,a.y),this.z=Ee(this.z,n.z,a.z),this}clampScalar(n,a){return this.x=Ee(this.x,n,a),this.y=Ee(this.y,n,a),this.z=Ee(this.z,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const s=n.x,c=n.y,f=n.z,d=a.x,h=a.y,p=a.z;return this.x=c*p-f*h,this.y=f*d-s*p,this.z=s*h-c*d,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const s=n.dot(this)/a;return this.copy(n).multiplyScalar(s)}projectOnPlane(n){return ih.copy(this).projectOnVector(n),this.sub(ih)}reflect(n){return this.sub(ih.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(Ee(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y,c=this.z-n.z;return a*a+s*s+c*c}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,s){const c=Math.sin(a)*n;return this.x=c*Math.sin(s),this.y=Math.cos(a)*n,this.z=c*Math.cos(s),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,s){return this.x=n*Math.sin(a),this.y=s,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),c=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=s,this.z=c,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(n),this.y=a,this.z=s*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new ft,e0=new _l;class vl{constructor(n=new ft(1/0,1/0,1/0),a=new ft(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a+=3)this.expandByPoint(bi.fromArray(n,a));return this}setFromBufferAttribute(n){this.makeEmpty();for(let a=0,s=n.count;a<s;a++)this.expandByPoint(bi.fromBufferAttribute(n,a));return this}setFromPoints(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const s=bi.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(s),this.max.copy(n).add(s),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const s=n.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)n.isMesh===!0?n.getVertexPosition(d,bi):bi.fromBufferAttribute(f,d),bi.applyMatrix4(n.matrixWorld),this.expandByPoint(bi);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),kc.copy(n.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),kc.copy(s.boundingBox)),kc.applyMatrix4(n.matrixWorld),this.union(kc)}const c=n.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],a);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,bi),bi.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,s;return n.normal.x>0?(a=n.normal.x*this.min.x,s=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,s=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,s+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,s+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,s+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,s+=n.normal.z*this.min.z),a<=-n.constant&&s>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(rl),jc.subVectors(this.max,rl),zs.subVectors(n.a,rl),Is.subVectors(n.b,rl),Bs.subVectors(n.c,rl),Ja.subVectors(Is,zs),$a.subVectors(Bs,Is),Nr.subVectors(zs,Bs);let a=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Nr.z,Nr.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Nr.z,0,-Nr.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Nr.y,Nr.x,0];return!ah(a,zs,Is,Bs,jc)||(a=[1,0,0,0,1,0,0,0,1],!ah(a,zs,Is,Bs,jc))?!1:(qc.crossVectors(Ja,$a),a=[qc.x,qc.y,qc.z],ah(a,zs,Is,Bs,jc))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,bi).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(bi).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(ua),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}}const ua=[new ft,new ft,new ft,new ft,new ft,new ft,new ft,new ft],bi=new ft,kc=new vl,zs=new ft,Is=new ft,Bs=new ft,Ja=new ft,$a=new ft,Nr=new ft,rl=new ft,jc=new ft,qc=new ft,Ur=new ft;function ah(o,n,a,s,c){for(let f=0,d=o.length-3;f<=d;f+=3){Ur.fromArray(o,f);const h=c.x*Math.abs(Ur.x)+c.y*Math.abs(Ur.y)+c.z*Math.abs(Ur.z),p=n.dot(Ur),_=a.dot(Ur),v=s.dot(Ur);if(Math.max(-Math.max(p,_,v),Math.min(p,_,v))>h)return!1}return!0}const wE=new vl,sl=new ft,rh=new ft;class bp{constructor(n=new ft,a=-1){this.isSphere=!0,this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const s=this.center;a!==void 0?s.copy(a):wE.setFromPoints(n).getCenter(s);let c=0;for(let f=0,d=n.length;f<d;f++)c=Math.max(c,s.distanceToSquared(n[f]));return this.radius=Math.sqrt(c),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const s=this.center.distanceToSquared(n);return a.copy(n),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;sl.subVectors(n,this.center);const a=sl.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),c=(s-this.radius)*.5;this.center.addScaledVector(sl,c/s),this.radius+=c}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(rh.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(sl.copy(n.center).add(rh)),this.expandByPoint(sl.copy(n.center).sub(rh))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fa=new ft,sh=new ft,Yc=new ft,tr=new ft,oh=new ft,Wc=new ft,lh=new ft;class DE{constructor(n=new ft,a=new ft(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,fa)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=fa.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(fa.copy(this.origin).addScaledVector(this.direction,a),fa.distanceToSquared(n))}distanceSqToSegment(n,a,s,c){sh.copy(n).add(a).multiplyScalar(.5),Yc.copy(a).sub(n).normalize(),tr.copy(this.origin).sub(sh);const f=n.distanceTo(a)*.5,d=-this.direction.dot(Yc),h=tr.dot(this.direction),p=-tr.dot(Yc),_=tr.lengthSq(),v=Math.abs(1-d*d);let m,y,M,A;if(v>0)if(m=d*p-h,y=d*h-p,A=f*v,m>=0)if(y>=-A)if(y<=A){const w=1/v;m*=w,y*=w,M=m*(m+d*y+2*h)+y*(d*m+y+2*p)+_}else y=f,m=Math.max(0,-(d*y+h)),M=-m*m+y*(y+2*p)+_;else y=-f,m=Math.max(0,-(d*y+h)),M=-m*m+y*(y+2*p)+_;else y<=-A?(m=Math.max(0,-(-d*f+h)),y=m>0?-f:Math.min(Math.max(-f,-p),f),M=-m*m+y*(y+2*p)+_):y<=A?(m=0,y=Math.min(Math.max(-f,-p),f),M=y*(y+2*p)+_):(m=Math.max(0,-(d*f+h)),y=m>0?f:Math.min(Math.max(-f,-p),f),M=-m*m+y*(y+2*p)+_);else y=d>0?-f:f,m=Math.max(0,-(d*y+h)),M=-m*m+y*(y+2*p)+_;return s&&s.copy(this.origin).addScaledVector(this.direction,m),c&&c.copy(sh).addScaledVector(Yc,y),M}intersectSphere(n,a){fa.subVectors(n.center,this.origin);const s=fa.dot(this.direction),c=fa.dot(fa)-s*s,f=n.radius*n.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,a):this.at(h,a)}intersectsSphere(n){return this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(n.normal)+n.constant)/a;return s>=0?s:null}intersectPlane(n,a){const s=this.distanceToPlane(n);return s===null?null:this.at(s,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let s,c,f,d,h,p;const _=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,y=this.origin;return _>=0?(s=(n.min.x-y.x)*_,c=(n.max.x-y.x)*_):(s=(n.max.x-y.x)*_,c=(n.min.x-y.x)*_),v>=0?(f=(n.min.y-y.y)*v,d=(n.max.y-y.y)*v):(f=(n.max.y-y.y)*v,d=(n.min.y-y.y)*v),s>d||f>c||((f>s||isNaN(s))&&(s=f),(d<c||isNaN(c))&&(c=d),m>=0?(h=(n.min.z-y.z)*m,p=(n.max.z-y.z)*m):(h=(n.max.z-y.z)*m,p=(n.min.z-y.z)*m),s>p||h>c)||((h>s||s!==s)&&(s=h),(p<c||c!==c)&&(c=p),c<0)?null:this.at(s>=0?s:c,a)}intersectsBox(n){return this.intersectBox(n,fa)!==null}intersectTriangle(n,a,s,c,f){oh.subVectors(a,n),Wc.subVectors(s,n),lh.crossVectors(oh,Wc);let d=this.direction.dot(lh),h;if(d>0){if(c)return null;h=1}else if(d<0)h=-1,d=-d;else return null;tr.subVectors(this.origin,n);const p=h*this.direction.dot(Wc.crossVectors(tr,Wc));if(p<0)return null;const _=h*this.direction.dot(oh.cross(tr));if(_<0||p+_>d)return null;const v=-h*tr.dot(lh);return v<0?null:this.at(v/d,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(n,a,s,c,f,d,h,p,_,v,m,y,M,A,w,S){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,a,s,c,f,d,h,p,_,v,m,y,M,A,w,S)}set(n,a,s,c,f,d,h,p,_,v,m,y,M,A,w,S){const x=this.elements;return x[0]=n,x[4]=a,x[8]=s,x[12]=c,x[1]=f,x[5]=d,x[9]=h,x[13]=p,x[2]=_,x[6]=v,x[10]=m,x[14]=y,x[3]=M,x[7]=A,x[11]=w,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(n){const a=this.elements,s=n.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,s){return n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(n,a,s){return this.set(n.x,a.x,s.x,0,n.y,a.y,s.y,0,n.z,a.z,s.z,0,0,0,0,1),this}extractRotation(n){const a=this.elements,s=n.elements,c=1/Fs.setFromMatrixColumn(n,0).length(),f=1/Fs.setFromMatrixColumn(n,1).length(),d=1/Fs.setFromMatrixColumn(n,2).length();return a[0]=s[0]*c,a[1]=s[1]*c,a[2]=s[2]*c,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*d,a[9]=s[9]*d,a[10]=s[10]*d,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,s=n.x,c=n.y,f=n.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(c),_=Math.sin(c),v=Math.cos(f),m=Math.sin(f);if(n.order==="XYZ"){const y=d*v,M=d*m,A=h*v,w=h*m;a[0]=p*v,a[4]=-p*m,a[8]=_,a[1]=M+A*_,a[5]=y-w*_,a[9]=-h*p,a[2]=w-y*_,a[6]=A+M*_,a[10]=d*p}else if(n.order==="YXZ"){const y=p*v,M=p*m,A=_*v,w=_*m;a[0]=y+w*h,a[4]=A*h-M,a[8]=d*_,a[1]=d*m,a[5]=d*v,a[9]=-h,a[2]=M*h-A,a[6]=w+y*h,a[10]=d*p}else if(n.order==="ZXY"){const y=p*v,M=p*m,A=_*v,w=_*m;a[0]=y-w*h,a[4]=-d*m,a[8]=A+M*h,a[1]=M+A*h,a[5]=d*v,a[9]=w-y*h,a[2]=-d*_,a[6]=h,a[10]=d*p}else if(n.order==="ZYX"){const y=d*v,M=d*m,A=h*v,w=h*m;a[0]=p*v,a[4]=A*_-M,a[8]=y*_+w,a[1]=p*m,a[5]=w*_+y,a[9]=M*_-A,a[2]=-_,a[6]=h*p,a[10]=d*p}else if(n.order==="YZX"){const y=d*p,M=d*_,A=h*p,w=h*_;a[0]=p*v,a[4]=w-y*m,a[8]=A*m+M,a[1]=m,a[5]=d*v,a[9]=-h*v,a[2]=-_*v,a[6]=M*m+A,a[10]=y-w*m}else if(n.order==="XZY"){const y=d*p,M=d*_,A=h*p,w=h*_;a[0]=p*v,a[4]=-m,a[8]=_*v,a[1]=y*m+w,a[5]=d*v,a[9]=M*m-A,a[2]=A*m-M,a[6]=h*v,a[10]=w*m+y}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(NE,n,UE)}lookAt(n,a,s){const c=this.elements;return ai.subVectors(n,a),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),er.crossVectors(s,ai),er.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),er.crossVectors(s,ai)),er.normalize(),Zc.crossVectors(ai,er),c[0]=er.x,c[4]=Zc.x,c[8]=ai.x,c[1]=er.y,c[5]=Zc.y,c[9]=ai.y,c[2]=er.z,c[6]=Zc.z,c[10]=ai.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,c=a.elements,f=this.elements,d=s[0],h=s[4],p=s[8],_=s[12],v=s[1],m=s[5],y=s[9],M=s[13],A=s[2],w=s[6],S=s[10],x=s[14],H=s[3],B=s[7],D=s[11],W=s[15],X=c[0],z=c[4],q=c[8],N=c[12],C=c[1],k=c[5],ht=c[9],ut=c[13],yt=c[2],gt=c[6],Z=c[10],lt=c[14],et=c[3],Tt=c[7],F=c[11],P=c[15];return f[0]=d*X+h*C+p*yt+_*et,f[4]=d*z+h*k+p*gt+_*Tt,f[8]=d*q+h*ht+p*Z+_*F,f[12]=d*N+h*ut+p*lt+_*P,f[1]=v*X+m*C+y*yt+M*et,f[5]=v*z+m*k+y*gt+M*Tt,f[9]=v*q+m*ht+y*Z+M*F,f[13]=v*N+m*ut+y*lt+M*P,f[2]=A*X+w*C+S*yt+x*et,f[6]=A*z+w*k+S*gt+x*Tt,f[10]=A*q+w*ht+S*Z+x*F,f[14]=A*N+w*ut+S*lt+x*P,f[3]=H*X+B*C+D*yt+W*et,f[7]=H*z+B*k+D*gt+W*Tt,f[11]=H*q+B*ht+D*Z+W*F,f[15]=H*N+B*ut+D*lt+W*P,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[4],c=n[8],f=n[12],d=n[1],h=n[5],p=n[9],_=n[13],v=n[2],m=n[6],y=n[10],M=n[14],A=n[3],w=n[7],S=n[11],x=n[15];return A*(+f*p*m-c*_*m-f*h*y+s*_*y+c*h*M-s*p*M)+w*(+a*p*M-a*_*y+f*d*y-c*d*M+c*_*v-f*p*v)+S*(+a*_*m-a*h*M-f*d*m+s*d*M+f*h*v-s*_*v)+x*(-c*h*v-a*p*m+a*h*y+c*d*m-s*d*y+s*p*v)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,s){const c=this.elements;return n.isVector3?(c[12]=n.x,c[13]=n.y,c[14]=n.z):(c[12]=n,c[13]=a,c[14]=s),this}invert(){const n=this.elements,a=n[0],s=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],_=n[7],v=n[8],m=n[9],y=n[10],M=n[11],A=n[12],w=n[13],S=n[14],x=n[15],H=m*S*_-w*y*_+w*p*M-h*S*M-m*p*x+h*y*x,B=A*y*_-v*S*_-A*p*M+d*S*M+v*p*x-d*y*x,D=v*w*_-A*m*_+A*h*M-d*w*M-v*h*x+d*m*x,W=A*m*p-v*w*p-A*h*y+d*w*y+v*h*S-d*m*S,X=a*H+s*B+c*D+f*W;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/X;return n[0]=H*z,n[1]=(w*y*f-m*S*f-w*c*M+s*S*M+m*c*x-s*y*x)*z,n[2]=(h*S*f-w*p*f+w*c*_-s*S*_-h*c*x+s*p*x)*z,n[3]=(m*p*f-h*y*f-m*c*_+s*y*_+h*c*M-s*p*M)*z,n[4]=B*z,n[5]=(v*S*f-A*y*f+A*c*M-a*S*M-v*c*x+a*y*x)*z,n[6]=(A*p*f-d*S*f-A*c*_+a*S*_+d*c*x-a*p*x)*z,n[7]=(d*y*f-v*p*f+v*c*_-a*y*_-d*c*M+a*p*M)*z,n[8]=D*z,n[9]=(A*m*f-v*w*f-A*s*M+a*w*M+v*s*x-a*m*x)*z,n[10]=(d*w*f-A*h*f+A*s*_-a*w*_-d*s*x+a*h*x)*z,n[11]=(v*h*f-d*m*f-v*s*_+a*m*_+d*s*M-a*h*M)*z,n[12]=W*z,n[13]=(v*w*c-A*m*c+A*s*y-a*w*y-v*s*S+a*m*S)*z,n[14]=(A*h*c-d*w*c-A*s*p+a*w*p+d*s*S-a*h*S)*z,n[15]=(d*m*c-v*h*c+v*s*p-a*m*p-d*s*y+a*h*y)*z,this}scale(n){const a=this.elements,s=n.x,c=n.y,f=n.z;return a[0]*=s,a[4]*=c,a[8]*=f,a[1]*=s,a[5]*=c,a[9]*=f,a[2]*=s,a[6]*=c,a[10]*=f,a[3]*=s,a[7]*=c,a[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],c=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,s,c))}makeTranslation(n,a,s){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),s=Math.sin(n);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const s=Math.cos(a),c=Math.sin(a),f=1-s,d=n.x,h=n.y,p=n.z,_=f*d,v=f*h;return this.set(_*d+s,_*h-c*p,_*p+c*h,0,_*h+c*p,v*h+s,v*p-c*d,0,_*p-c*h,v*p+c*d,f*p*p+s,0,0,0,0,1),this}makeScale(n,a,s){return this.set(n,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(n,a,s,c,f,d){return this.set(1,s,f,0,n,1,d,0,a,c,1,0,0,0,0,1),this}compose(n,a,s){const c=this.elements,f=a._x,d=a._y,h=a._z,p=a._w,_=f+f,v=d+d,m=h+h,y=f*_,M=f*v,A=f*m,w=d*v,S=d*m,x=h*m,H=p*_,B=p*v,D=p*m,W=s.x,X=s.y,z=s.z;return c[0]=(1-(w+x))*W,c[1]=(M+D)*W,c[2]=(A-B)*W,c[3]=0,c[4]=(M-D)*X,c[5]=(1-(y+x))*X,c[6]=(S+H)*X,c[7]=0,c[8]=(A+B)*z,c[9]=(S-H)*z,c[10]=(1-(y+w))*z,c[11]=0,c[12]=n.x,c[13]=n.y,c[14]=n.z,c[15]=1,this}decompose(n,a,s){const c=this.elements;let f=Fs.set(c[0],c[1],c[2]).length();const d=Fs.set(c[4],c[5],c[6]).length(),h=Fs.set(c[8],c[9],c[10]).length();this.determinant()<0&&(f=-f),n.x=c[12],n.y=c[13],n.z=c[14],Ai.copy(this);const _=1/f,v=1/d,m=1/h;return Ai.elements[0]*=_,Ai.elements[1]*=_,Ai.elements[2]*=_,Ai.elements[4]*=v,Ai.elements[5]*=v,Ai.elements[6]*=v,Ai.elements[8]*=m,Ai.elements[9]*=m,Ai.elements[10]*=m,a.setFromRotationMatrix(Ai),s.x=f,s.y=d,s.z=h,this}makePerspective(n,a,s,c,f,d,h=xa){const p=this.elements,_=2*f/(a-n),v=2*f/(s-c),m=(a+n)/(a-n),y=(s+c)/(s-c);let M,A;if(h===xa)M=-(d+f)/(d-f),A=-2*d*f/(d-f);else if(h===_u)M=-d/(d-f),A=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(n,a,s,c,f,d,h=xa){const p=this.elements,_=1/(a-n),v=1/(s-c),m=1/(d-f),y=(a+n)*_,M=(s+c)*v;let A,w;if(h===xa)A=(d+f)*m,w=-2*m;else if(h===_u)A=f*m,w=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*_,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(n){const a=this.elements,s=n.elements;for(let c=0;c<16;c++)if(a[c]!==s[c])return!1;return!0}fromArray(n,a=0){for(let s=0;s<16;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n[a+9]=s[9],n[a+10]=s[10],n[a+11]=s[11],n[a+12]=s[12],n[a+13]=s[13],n[a+14]=s[14],n[a+15]=s[15],n}}const Fs=new ft,Ai=new fn,NE=new ft(0,0,0),UE=new ft(1,1,1),er=new ft,Zc=new ft,ai=new ft,n0=new fn,i0=new _l;class Ma{constructor(n=0,a=0,s=0,c=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=s,this._order=c}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,s,c=this._order){return this._x=n,this._y=a,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,s=!0){const c=n.elements,f=c[0],d=c[4],h=c[8],p=c[1],_=c[5],v=c[9],m=c[2],y=c[6],M=c[10];switch(a){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(y,_),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,_)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-d,_)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,_));break;case"YZX":this._z=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,_),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,_),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,s){return n0.makeRotationFromQuaternion(n),this.setFromRotationMatrix(n0,a,s)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return i0.setFromEuler(this),this.setFromQuaternion(i0,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class cx{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let LE=0;const a0=new ft,Hs=new _l,da=new fn,Kc=new ft,ol=new ft,OE=new ft,PE=new _l,r0=new ft(1,0,0),s0=new ft(0,1,0),o0=new ft(0,0,1),l0={type:"added"},zE={type:"removed"},Gs={type:"childadded",child:null},ch={type:"childremoved",child:null};class si extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const n=new ft,a=new Ma,s=new _l,c=new ft(1,1,1);function f(){s.setFromEuler(a,!1)}function d(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new fn},normalMatrix:{value:new de}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Hs.setFromAxisAngle(n,a),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(n,a){return Hs.setFromAxisAngle(n,a),this.quaternion.premultiply(Hs),this}rotateX(n){return this.rotateOnAxis(r0,n)}rotateY(n){return this.rotateOnAxis(s0,n)}rotateZ(n){return this.rotateOnAxis(o0,n)}translateOnAxis(n,a){return a0.copy(n).applyQuaternion(this.quaternion),this.position.add(a0.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(r0,n)}translateY(n){return this.translateOnAxis(s0,n)}translateZ(n){return this.translateOnAxis(o0,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(n,a,s){n.isVector3?Kc.copy(n):Kc.set(n,a,s);const c=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(ol,Kc,this.up):da.lookAt(Kc,ol,this.up),this.quaternion.setFromRotationMatrix(da),c&&(da.extractRotation(c.matrixWorld),Hs.setFromRotationMatrix(da),this.quaternion.premultiply(Hs.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(l0),Gs.child=n,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(zE),ch.child=n,this.dispatchEvent(ch),ch.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),da.multiply(n.parent.matrixWorld)),n.applyMatrix4(da),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(l0),Gs.child=n,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let s=0,c=this.children.length;s<c;s++){const d=this.children[s].getObjectByProperty(n,a);if(d!==void 0)return d}}getObjectsByProperty(n,a,s=[]){this[n]===a&&s.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(n,a,s);return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,n,OE),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,PE,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let s=0,c=a.length;s<c;s++)a[s].updateMatrixWorld(n)}updateWorldMatrix(n,a){const s=this.parent;if(n===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0)}}toJSON(n){const a=n===void 0||typeof n=="string",s={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.visibility=this._visibility,c.active=this._active,c.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.geometryCount=this._geometryCount,c.matricesTexture=this._matricesTexture.toJSON(n),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(c.boundingSphere={center:c.boundingSphere.center.toArray(),radius:c.boundingSphere.radius}),this.boundingBox!==null&&(c.boundingBox={min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(n)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(n.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let _=0,v=p.length;_<v;_++){const m=p[_];f(n.shapes,m)}else f(n.shapes,p)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,_=this.material.length;p<_;p++)h.push(f(n.materials,this.material[p]));c.material=h}else c.material=f(n.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(n).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];c.animations.push(f(n.animations,p))}}if(a){const h=d(n.geometries),p=d(n.materials),_=d(n.textures),v=d(n.images),m=d(n.shapes),y=d(n.skeletons),M=d(n.animations),A=d(n.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),_.length>0&&(s.textures=_),v.length>0&&(s.images=v),m.length>0&&(s.shapes=m),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=c,s;function d(h){const p=[];for(const _ in h){const v=h[_];delete v.metadata,p.push(v)}return p}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let s=0;s<n.children.length;s++){const c=n.children[s];this.add(c.clone())}return this}}si.DEFAULT_UP=new ft(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new ft,ha=new ft,uh=new ft,pa=new ft,Vs=new ft,Xs=new ft,c0=new ft,fh=new ft,dh=new ft,hh=new ft,ph=new an,mh=new an,gh=new an;class Ci{constructor(n=new ft,a=new ft,s=new ft){this.a=n,this.b=a,this.c=s}static getNormal(n,a,s,c){c.subVectors(s,a),Ri.subVectors(n,a),c.cross(Ri);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(n,a,s,c,f){Ri.subVectors(c,a),ha.subVectors(s,a),uh.subVectors(n,a);const d=Ri.dot(Ri),h=Ri.dot(ha),p=Ri.dot(uh),_=ha.dot(ha),v=ha.dot(uh),m=d*_-h*h;if(m===0)return f.set(0,0,0),null;const y=1/m,M=(_*p-h*v)*y,A=(d*v-h*p)*y;return f.set(1-M-A,A,M)}static containsPoint(n,a,s,c){return this.getBarycoord(n,a,s,c,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(n,a,s,c,f,d,h,p){return this.getBarycoord(n,a,s,c,pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,pa.x),p.addScaledVector(d,pa.y),p.addScaledVector(h,pa.z),p)}static getInterpolatedAttribute(n,a,s,c,f,d){return ph.setScalar(0),mh.setScalar(0),gh.setScalar(0),ph.fromBufferAttribute(n,a),mh.fromBufferAttribute(n,s),gh.fromBufferAttribute(n,c),d.setScalar(0),d.addScaledVector(ph,f.x),d.addScaledVector(mh,f.y),d.addScaledVector(gh,f.z),d}static isFrontFacing(n,a,s,c){return Ri.subVectors(s,a),ha.subVectors(n,a),Ri.cross(ha).dot(c)<0}set(n,a,s){return this.a.copy(n),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(n,a,s,c){return this.a.copy(n[a]),this.b.copy(n[s]),this.c.copy(n[c]),this}setFromAttributeAndIndices(n,a,s,c){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,s),this.c.fromBufferAttribute(n,c),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Ri.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ri.cross(ha).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Ci.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Ci.getBarycoord(n,this.a,this.b,this.c,a)}getInterpolation(n,a,s,c,f){return Ci.getInterpolation(n,this.a,this.b,this.c,a,s,c,f)}containsPoint(n){return Ci.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Ci.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const s=this.a,c=this.b,f=this.c;let d,h;Vs.subVectors(c,s),Xs.subVectors(f,s),fh.subVectors(n,s);const p=Vs.dot(fh),_=Xs.dot(fh);if(p<=0&&_<=0)return a.copy(s);dh.subVectors(n,c);const v=Vs.dot(dh),m=Xs.dot(dh);if(v>=0&&m<=v)return a.copy(c);const y=p*m-v*_;if(y<=0&&p>=0&&v<=0)return d=p/(p-v),a.copy(s).addScaledVector(Vs,d);hh.subVectors(n,f);const M=Vs.dot(hh),A=Xs.dot(hh);if(A>=0&&M<=A)return a.copy(f);const w=M*_-p*A;if(w<=0&&_>=0&&A<=0)return h=_/(_-A),a.copy(s).addScaledVector(Xs,h);const S=v*A-M*m;if(S<=0&&m-v>=0&&M-A>=0)return c0.subVectors(f,c),h=(m-v)/(m-v+(M-A)),a.copy(c).addScaledVector(c0,h);const x=1/(S+w+y);return d=w*x,h=y*x,a.copy(s).addScaledVector(Vs,d).addScaledVector(Xs,h)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Qc={h:0,s:0,l:0};function _h(o,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(n-o)*6*a:a<1/2?n:a<2/3?o+(n-o)*6*(2/3-a):o}class ze{constructor(n,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,a,s)}set(n,a,s){if(a===void 0&&s===void 0){const c=n;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(n,a,s);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=_i){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,De.toWorkingColorSpace(this,a),this}setRGB(n,a,s,c=De.workingColorSpace){return this.r=n,this.g=a,this.b=s,De.toWorkingColorSpace(this,c),this}setHSL(n,a,s,c=De.workingColorSpace){if(n=Ep(n,1),a=Ee(a,0,1),s=Ee(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,d=2*s-f;this.r=_h(d,f,n+1/3),this.g=_h(d,f,n),this.b=_h(d,f,n-1/3)}return De.toWorkingColorSpace(this,c),this}setStyle(n,a=_i){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(d===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,a);return this}setColorName(n,a=_i){const s=ux[n.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=ya(n.r),this.g=ya(n.g),this.b=ya(n.b),this}copyLinearToSRGB(n){return this.r=to(n.r),this.g=to(n.g),this.b=to(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=_i){return De.fromWorkingColorSpace(Pn.copy(this),n),Math.round(Ee(Pn.r*255,0,255))*65536+Math.round(Ee(Pn.g*255,0,255))*256+Math.round(Ee(Pn.b*255,0,255))}getHexString(n=_i){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=De.workingColorSpace){De.fromWorkingColorSpace(Pn.copy(this),a);const s=Pn.r,c=Pn.g,f=Pn.b,d=Math.max(s,c,f),h=Math.min(s,c,f);let p,_;const v=(h+d)/2;if(h===d)p=0,_=0;else{const m=d-h;switch(_=v<=.5?m/(d+h):m/(2-d-h),d){case s:p=(c-f)/m+(c<f?6:0);break;case c:p=(f-s)/m+2;break;case f:p=(s-c)/m+4;break}p/=6}return n.h=p,n.s=_,n.l=v,n}getRGB(n,a=De.workingColorSpace){return De.fromWorkingColorSpace(Pn.copy(this),a),n.r=Pn.r,n.g=Pn.g,n.b=Pn.b,n}getStyle(n=_i){De.fromWorkingColorSpace(Pn.copy(this),n);const a=Pn.r,s=Pn.g,c=Pn.b;return n!==_i?`color(${n} ${a.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(n,a,s){return this.getHSL(nr),this.setHSL(nr.h+n,nr.s+a,nr.l+s)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,s){return this.r=n.r+(a.r-n.r)*s,this.g=n.g+(a.g-n.g)*s,this.b=n.b+(a.b-n.b)*s,this}lerpHSL(n,a){this.getHSL(nr),n.getHSL(Qc);const s=dl(nr.h,Qc.h,a),c=dl(nr.s,Qc.s,a),f=dl(nr.l,Qc.l,a);return this.setHSL(s,c,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const a=this.r,s=this.g,c=this.b,f=n.elements;return this.r=f[0]*a+f[3]*s+f[6]*c,this.g=f[1]*a+f[4]*s+f[7]*c,this.b=f[2]*a+f[5]*s+f[8]*c,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new ze;ze.NAMES=ux;let IE=0;class xu extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=co(),this.name="",this.type="Material",this.blending=Js,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Dh,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const c=this[a];if(c===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(n).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(n).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(n).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(n).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(n).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(s.blending=this.blending),this.side!==or&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==wh&&(s.blendSrc=this.blendSrc),this.blendDst!==Dh&&(s.blendDst=this.blendDst),this.blendEquation!==Hr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(a){const f=c(n.textures),d=c(n.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let s=null;if(a!==null){const c=a.length;s=new Array(c);for(let f=0;f!==c;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zs extends xu{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=W0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const un=new ft,Jc=new Xe;let BE=0;class Ni{constructor(n,a,s=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BE++}),this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=s,this.usage=Zv,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,a,s){n*=this.itemSize,s*=a.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[n+c]=a.array[s+c];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)Jc.fromBufferAttribute(this,a),Jc.applyMatrix3(n),this.setXY(a,Jc.x,Jc.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)un.fromBufferAttribute(this,a),un.applyMatrix3(n),this.setXYZ(a,un.x,un.y,un.z);return this}applyMatrix4(n){for(let a=0,s=this.count;a<s;a++)un.fromBufferAttribute(this,a),un.applyMatrix4(n),this.setXYZ(a,un.x,un.y,un.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)un.fromBufferAttribute(this,a),un.applyNormalMatrix(n),this.setXYZ(a,un.x,un.y,un.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)un.fromBufferAttribute(this,a),un.transformDirection(n),this.setXYZ(a,un.x,un.y,un.z);return this}set(n,a=0){return this.array.set(n,a),this}getComponent(n,a){let s=this.array[n*this.itemSize+a];return this.normalized&&(s=Ws(s,this.array)),s}setComponent(n,a,s){return this.normalized&&(s=Hn(s,this.array)),this.array[n*this.itemSize+a]=s,this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=Ws(a,this.array)),a}setX(n,a){return this.normalized&&(a=Hn(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=Ws(a,this.array)),a}setY(n,a){return this.normalized&&(a=Hn(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=Ws(a,this.array)),a}setZ(n,a){return this.normalized&&(a=Hn(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=Ws(a,this.array)),a}setW(n,a){return this.normalized&&(a=Hn(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,s){return n*=this.itemSize,this.normalized&&(a=Hn(a,this.array),s=Hn(s,this.array)),this.array[n+0]=a,this.array[n+1]=s,this}setXYZ(n,a,s,c){return n*=this.itemSize,this.normalized&&(a=Hn(a,this.array),s=Hn(s,this.array),c=Hn(c,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=c,this}setXYZW(n,a,s,c,f){return n*=this.itemSize,this.normalized&&(a=Hn(a,this.array),s=Hn(s,this.array),c=Hn(c,this.array),f=Hn(f,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=c,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==Zv&&(n.usage=this.usage),n}}class fx extends Ni{constructor(n,a,s){super(new Uint16Array(n),a,s)}}class dx extends Ni{constructor(n,a,s){super(new Uint32Array(n),a,s)}}class kr extends Ni{constructor(n,a,s){super(new Float32Array(n),a,s)}}let FE=0;const gi=new fn,vh=new si,ks=new ft,ri=new vl,ll=new vl,Mn=new ft;class Yr extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(ox(n)?dx:fx)(n,1):this.index=n,this}setIndirect(n){return this.indirect=n,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,s=0){this.groups.push({start:n,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new de().getNormalMatrix(n);s.applyNormalMatrix(f),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(n),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return gi.makeRotationFromQuaternion(n),this.applyMatrix4(gi),this}rotateX(n){return gi.makeRotationX(n),this.applyMatrix4(gi),this}rotateY(n){return gi.makeRotationY(n),this.applyMatrix4(gi),this}rotateZ(n){return gi.makeRotationZ(n),this.applyMatrix4(gi),this}translate(n,a,s){return gi.makeTranslation(n,a,s),this.applyMatrix4(gi),this}scale(n,a,s){return gi.makeScale(n,a,s),this.applyMatrix4(gi),this}lookAt(n){return vh.lookAt(n),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(n){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let c=0,f=n.length;c<f;c++){const d=n[c];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new kr(s,3))}else{const s=Math.min(n.length,a.count);for(let c=0;c<s;c++){const f=n[c];a.setXYZ(c,f.x,f.y,f.z||0)}n.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vl);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ft(-1/0,-1/0,-1/0),new ft(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let s=0,c=a.length;s<c;s++){const f=a[s];ri.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bp);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ft,1/0);return}if(n){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(n),a)for(let f=0,d=a.length;f<d;f++){const h=a[f];ll.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ri.min,ll.min),ri.expandByPoint(Mn),Mn.addVectors(ri.max,ll.max),ri.expandByPoint(Mn)):(ri.expandByPoint(ll.min),ri.expandByPoint(ll.max))}ri.getCenter(s);let c=0;for(let f=0,d=n.count;f<d;f++)Mn.fromBufferAttribute(n,f),c=Math.max(c,s.distanceToSquared(Mn));if(a)for(let f=0,d=a.length;f<d;f++){const h=a[f],p=this.morphTargetsRelative;for(let _=0,v=h.count;_<v;_++)Mn.fromBufferAttribute(h,_),p&&(ks.fromBufferAttribute(n,_),Mn.add(ks)),c=Math.max(c,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,c=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let q=0;q<s.count;q++)h[q]=new ft,p[q]=new ft;const _=new ft,v=new ft,m=new ft,y=new Xe,M=new Xe,A=new Xe,w=new ft,S=new ft;function x(q,N,C){_.fromBufferAttribute(s,q),v.fromBufferAttribute(s,N),m.fromBufferAttribute(s,C),y.fromBufferAttribute(f,q),M.fromBufferAttribute(f,N),A.fromBufferAttribute(f,C),v.sub(_),m.sub(_),M.sub(y),A.sub(y);const k=1/(M.x*A.y-A.x*M.y);isFinite(k)&&(w.copy(v).multiplyScalar(A.y).addScaledVector(m,-M.y).multiplyScalar(k),S.copy(m).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(k),h[q].add(w),h[N].add(w),h[C].add(w),p[q].add(S),p[N].add(S),p[C].add(S))}let H=this.groups;H.length===0&&(H=[{start:0,count:n.count}]);for(let q=0,N=H.length;q<N;++q){const C=H[q],k=C.start,ht=C.count;for(let ut=k,yt=k+ht;ut<yt;ut+=3)x(n.getX(ut+0),n.getX(ut+1),n.getX(ut+2))}const B=new ft,D=new ft,W=new ft,X=new ft;function z(q){W.fromBufferAttribute(c,q),X.copy(W);const N=h[q];B.copy(N),B.sub(W.multiplyScalar(W.dot(N))).normalize(),D.crossVectors(X,N);const k=D.dot(p[q])<0?-1:1;d.setXYZW(q,B.x,B.y,B.z,k)}for(let q=0,N=H.length;q<N;++q){const C=H[q],k=C.start,ht=C.count;for(let ut=k,yt=k+ht;ut<yt;ut+=3)z(n.getX(ut+0)),z(n.getX(ut+1)),z(n.getX(ut+2))}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const c=new ft,f=new ft,d=new ft,h=new ft,p=new ft,_=new ft,v=new ft,m=new ft;if(n)for(let y=0,M=n.count;y<M;y+=3){const A=n.getX(y+0),w=n.getX(y+1),S=n.getX(y+2);c.fromBufferAttribute(a,A),f.fromBufferAttribute(a,w),d.fromBufferAttribute(a,S),v.subVectors(d,f),m.subVectors(c,f),v.cross(m),h.fromBufferAttribute(s,A),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,S),h.add(v),p.add(v),_.add(v),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(S,_.x,_.y,_.z)}else for(let y=0,M=a.count;y<M;y+=3)c.fromBufferAttribute(a,y+0),f.fromBufferAttribute(a,y+1),d.fromBufferAttribute(a,y+2),v.subVectors(d,f),m.subVectors(c,f),v.cross(m),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let a=0,s=n.count;a<s;a++)Mn.fromBufferAttribute(n,a),Mn.normalize(),n.setXYZ(a,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function n(h,p){const _=h.array,v=h.itemSize,m=h.normalized,y=new _.constructor(p.length*v);let M=0,A=0;for(let w=0,S=p.length;w<S;w++){h.isInterleavedBufferAttribute?M=p[w]*h.data.stride+h.offset:M=p[w]*v;for(let x=0;x<v;x++)y[A++]=_[M++]}return new Ni(y,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new Yr,s=this.index.array,c=this.attributes;for(const h in c){const p=c[h],_=n(p,s);a.setAttribute(h,_)}const f=this.morphAttributes;for(const h in f){const p=[],_=f[h];for(let v=0,m=_.length;v<m;v++){const y=_[v],M=n(y,s);p.push(M)}a.morphAttributes[h]=p}a.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const _=d[h];a.addGroup(_.start,_.count,_.materialIndex)}return a}toJSON(){const n={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const _ in p)p[_]!==void 0&&(n[_]=p[_]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const p in s){const _=s[p];n.data.attributes[p]=_.toJSON(n.data)}const c={};let f=!1;for(const p in this.morphAttributes){const _=this.morphAttributes[p],v=[];for(let m=0,y=_.length;m<y;m++){const M=_[m];v.push(M.toJSON(n.data))}v.length>0&&(c[p]=v,f=!0)}f&&(n.data.morphAttributes=c,n.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(n.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(n.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const s=n.index;s!==null&&this.setIndex(s.clone(a));const c=n.attributes;for(const _ in c){const v=c[_];this.setAttribute(_,v.clone(a))}const f=n.morphAttributes;for(const _ in f){const v=[],m=f[_];for(let y=0,M=m.length;y<M;y++)v.push(m[y].clone(a));this.morphAttributes[_]=v}this.morphTargetsRelative=n.morphTargetsRelative;const d=n.groups;for(let _=0,v=d.length;_<v;_++){const m=d[_];this.addGroup(m.start,m.count,m.materialIndex)}const h=n.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=n.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u0=new fn,Lr=new DE,$c=new bp,f0=new ft,tu=new ft,eu=new ft,nu=new ft,xh=new ft,iu=new ft,d0=new ft,au=new ft;class Wn extends si{constructor(n=new Yr,a=new Zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const c=a[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(n,a){const s=this.geometry,c=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;a.fromBufferAttribute(c,n);const h=this.morphTargetInfluences;if(f&&h){iu.set(0,0,0);for(let p=0,_=f.length;p<_;p++){const v=h[p],m=f[p];v!==0&&(xh.fromBufferAttribute(m,n),d?iu.addScaledVector(xh,v):iu.addScaledVector(xh.sub(a),v))}a.add(iu)}return a}raycast(n,a){const s=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),$c.copy(s.boundingSphere),$c.applyMatrix4(f),Lr.copy(n.ray).recast(n.near),!($c.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere($c,f0)===null||Lr.origin.distanceToSquared(f0)>(n.far-n.near)**2))&&(u0.copy(f).invert(),Lr.copy(n.ray).applyMatrix4(u0),!(s.boundingBox!==null&&Lr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(n,a,Lr)))}_computeIntersections(n,a,s){let c;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,_=f.attributes.uv,v=f.attributes.uv1,m=f.attributes.normal,y=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,w=y.length;A<w;A++){const S=y[A],x=d[S.materialIndex],H=Math.max(S.start,M.start),B=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let D=H,W=B;D<W;D+=3){const X=h.getX(D),z=h.getX(D+1),q=h.getX(D+2);c=ru(this,x,n,s,_,v,m,X,z,q),c&&(c.faceIndex=Math.floor(D/3),c.face.materialIndex=S.materialIndex,a.push(c))}}else{const A=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let S=A,x=w;S<x;S+=3){const H=h.getX(S),B=h.getX(S+1),D=h.getX(S+2);c=ru(this,d,n,s,_,v,m,H,B,D),c&&(c.faceIndex=Math.floor(S/3),a.push(c))}}else if(p!==void 0)if(Array.isArray(d))for(let A=0,w=y.length;A<w;A++){const S=y[A],x=d[S.materialIndex],H=Math.max(S.start,M.start),B=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let D=H,W=B;D<W;D+=3){const X=D,z=D+1,q=D+2;c=ru(this,x,n,s,_,v,m,X,z,q),c&&(c.faceIndex=Math.floor(D/3),c.face.materialIndex=S.materialIndex,a.push(c))}}else{const A=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let S=A,x=w;S<x;S+=3){const H=S,B=S+1,D=S+2;c=ru(this,d,n,s,_,v,m,H,B,D),c&&(c.faceIndex=Math.floor(S/3),a.push(c))}}}}function HE(o,n,a,s,c,f,d,h){let p;if(n.side===Zn?p=s.intersectTriangle(d,f,c,!0,h):p=s.intersectTriangle(c,f,d,n.side===or,h),p===null)return null;au.copy(h),au.applyMatrix4(o.matrixWorld);const _=a.ray.origin.distanceTo(au);return _<a.near||_>a.far?null:{distance:_,point:au.clone(),object:o}}function ru(o,n,a,s,c,f,d,h,p,_){o.getVertexPosition(h,tu),o.getVertexPosition(p,eu),o.getVertexPosition(_,nu);const v=HE(o,n,a,s,tu,eu,nu,d0);if(v){const m=new ft;Ci.getBarycoord(d0,tu,eu,nu,m),c&&(v.uv=Ci.getInterpolatedAttribute(c,h,p,_,m,new Xe)),f&&(v.uv1=Ci.getInterpolatedAttribute(f,h,p,_,m,new Xe)),d&&(v.normal=Ci.getInterpolatedAttribute(d,h,p,_,m,new ft),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:p,c:_,normal:new ft,materialIndex:0};Ci.getNormal(tu,eu,nu,y.normal),v.face=y,v.barycoord=m}return v}class xl extends Yr{constructor(n=1,a=1,s=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:s,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const p=[],_=[],v=[],m=[];let y=0,M=0;A("z","y","x",-1,-1,s,a,n,d,f,0),A("z","y","x",1,-1,s,a,-n,d,f,1),A("x","z","y",1,1,n,s,a,c,d,2),A("x","z","y",1,-1,n,s,-a,c,d,3),A("x","y","z",1,-1,n,a,s,c,f,4),A("x","y","z",-1,-1,n,a,-s,c,f,5),this.setIndex(p),this.setAttribute("position",new kr(_,3)),this.setAttribute("normal",new kr(v,3)),this.setAttribute("uv",new kr(m,2));function A(w,S,x,H,B,D,W,X,z,q,N){const C=D/z,k=W/q,ht=D/2,ut=W/2,yt=X/2,gt=z+1,Z=q+1;let lt=0,et=0;const Tt=new ft;for(let F=0;F<Z;F++){const P=F*k-ut;for(let At=0;At<gt;At++){const Ot=At*C-ht;Tt[w]=Ot*H,Tt[S]=P*B,Tt[x]=yt,_.push(Tt.x,Tt.y,Tt.z),Tt[w]=0,Tt[S]=0,Tt[x]=X>0?1:-1,v.push(Tt.x,Tt.y,Tt.z),m.push(At/z),m.push(1-F/q),lt+=1}}for(let F=0;F<q;F++)for(let P=0;P<z;P++){const At=y+P+gt*F,Ot=y+P+gt*(F+1),b=y+(P+1)+gt*(F+1),G=y+(P+1)+gt*F;p.push(At,Ot,G),p.push(Ot,b,G),et+=6}h.addGroup(M,et,N),M+=et,y+=lt}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new xl(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function oo(o){const n={};for(const a in o){n[a]={};for(const s in o[a]){const c=o[a][s];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[a][s]=null):n[a][s]=c.clone():Array.isArray(c)?n[a][s]=c.slice():n[a][s]=c}}return n}function Gn(o){const n={};for(let a=0;a<o.length;a++){const s=oo(o[a]);for(const c in s)n[c]=s[c]}return n}function GE(o){const n=[];for(let a=0;a<o.length;a++)n.push(o[a].clone());return n}function hx(o){const n=o.getRenderTarget();return n===null?o.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:De.workingColorSpace}const VE={clone:oo,merge:Gn};var XE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ea extends xu{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XE,this.fragmentShader=kE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=oo(n.uniforms),this.uniformsGroups=GE(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?a.uniforms[c]={type:"t",value:d.toJSON(n).uuid}:d&&d.isColor?a.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?a.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?a.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?a.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?a.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?a.uniforms[c]={type:"m4",value:d.toArray()}:a.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class px extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=xa}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new ft,h0=new Xe,p0=new Xe;class vi extends px{constructor(n=50,a=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=pl*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return pl*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,a,s){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ir.x,ir.y).multiplyScalar(-n/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ir.x,ir.y).multiplyScalar(-n/ir.z)}getViewSize(n,a){return this.getViewBounds(n,h0,p0),a.subVectors(p0,h0)}setViewOffset(n,a,s,c,f,d){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan(fl*.5*this.fov)/this.zoom,s=2*a,c=this.aspect*s,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,_=d.fullHeight;f+=d.offsetX*c/p,a-=d.offsetY*s/_,c*=d.width/p,s*=d.height/_}const h=this.filmOffset;h!==0&&(f+=n*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,a,a-s,n,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const js=-90,qs=1;class jE extends si{constructor(n,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new vi(js,qs,n,a);c.layers=this.layers,this.add(c);const f=new vi(js,qs,n,a);f.layers=this.layers,this.add(f);const d=new vi(js,qs,n,a);d.layers=this.layers,this.add(d);const h=new vi(js,qs,n,a);h.layers=this.layers,this.add(h);const p=new vi(js,qs,n,a);p.layers=this.layers,this.add(p);const _=new vi(js,qs,n,a);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const n=this.coordinateSystem,a=this.children.concat(),[s,c,f,d,h,p]=a;for(const _ of a)this.remove(_);if(n===xa)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(n===_u)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const _ of a)this.add(_),_.updateMatrixWorld()}update(n,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,_,v]=this.children,m=n.getRenderTarget(),y=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),A=n.xr.enabled;n.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,n.setRenderTarget(s,0,c),n.render(a,f),n.setRenderTarget(s,1,c),n.render(a,d),n.setRenderTarget(s,2,c),n.render(a,h),n.setRenderTarget(s,3,c),n.render(a,p),n.setRenderTarget(s,4,c),n.render(a,_),s.texture.generateMipmaps=w,n.setRenderTarget(s,5,c),n.render(a,v),n.setRenderTarget(m,y,M),n.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class mx extends Vn{constructor(n,a,s,c,f,d,h,p,_,v){n=n!==void 0?n:[],a=a!==void 0?a:no,super(n,a,s,c,f,d,h,p,_,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class qE extends qr{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const s={width:n,height:n,depth:1},c=[s,s,s,s,s,s];this.texture=new mx(c,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:ji}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new xl(5,5,5),f=new Ea({name:"CubemapFromEquirect",uniforms:oo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:rr});f.uniforms.tEquirect.value=a;const d=new Wn(c,f),h=a.minFilter;return a.minFilter===Xr&&(a.minFilter=ji),new jE(1,10,this).update(n,d),a.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(n,a,s,c){const f=n.getRenderTarget();for(let d=0;d<6;d++)n.setRenderTarget(this,d),n.clear(a,s,c);n.setRenderTarget(f)}}class Ks extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YE={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ft,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ft),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ft,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ft),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const s of n.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,s){let c=null,f=null,d=null;const h=this._targetRay,p=this._grip,_=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(_&&n.hand){d=!0;for(const w of n.hand.values()){const S=a.getJointPose(w,s),x=this._getHandJoint(_,w);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=_.joints["index-finger-tip"],m=_.joints["thumb-tip"],y=v.position.distanceTo(m.position),M=.02,A=.005;_.inputState.pinching&&y>M+A?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!_.inputState.pinching&&y<=M-A&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else p!==null&&n.gripSpace&&(f=a.getPose(n.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(c=a.getPose(n.targetRaySpace,s),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(YE)))}return h!==null&&(h.visible=c!==null),p!==null&&(p.visible=f!==null),_!==null&&(_.visible=d!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const s=new Ks;s.matrixAutoUpdate=!1,s.visible=!1,n.joints[a.jointName]=s,n.add(s)}return n.joints[a.jointName]}}class WE extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class ZE extends Ni{constructor(n,a,s,c=1){super(n,a,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=c}copy(n){return super.copy(n),this.meshPerAttribute=n.meshPerAttribute,this}toJSON(){const n=super.toJSON();return n.meshPerAttribute=this.meshPerAttribute,n.isInstancedBufferAttribute=!0,n}}const Sh=new ft,KE=new ft,QE=new de;class Br{constructor(n=new ft(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,s,c){return this.normal.set(n,a,s),this.constant=c,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,s){const c=Sh.subVectors(s,a).cross(KE.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(c,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,a){const s=n.delta(Sh),c=this.normal.dot(s);if(c===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/c;return f<0||f>1?null:a.copy(n.start).addScaledVector(s,f)}intersectsLine(n){const a=this.distanceToPoint(n.start),s=this.distanceToPoint(n.end);return a<0&&s>0||s<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const s=a||QE.getNormalMatrix(n),c=this.coplanarPoint(Sh).applyMatrix4(n),f=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new bp,su=new ft;class gx{constructor(n=new Br,a=new Br,s=new Br,c=new Br,f=new Br,d=new Br){this.planes=[n,a,s,c,f,d]}set(n,a,s,c,f,d){const h=this.planes;return h[0].copy(n),h[1].copy(a),h[2].copy(s),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(n){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(n.planes[s]);return this}setFromProjectionMatrix(n,a=xa){const s=this.planes,c=n.elements,f=c[0],d=c[1],h=c[2],p=c[3],_=c[4],v=c[5],m=c[6],y=c[7],M=c[8],A=c[9],w=c[10],S=c[11],x=c[12],H=c[13],B=c[14],D=c[15];if(s[0].setComponents(p-f,y-_,S-M,D-x).normalize(),s[1].setComponents(p+f,y+_,S+M,D+x).normalize(),s[2].setComponents(p+d,y+v,S+A,D+H).normalize(),s[3].setComponents(p-d,y-v,S-A,D-H).normalize(),s[4].setComponents(p-h,y-m,S-w,D-B).normalize(),a===xa)s[5].setComponents(p+h,y+m,S+w,D+B).normalize();else if(a===_u)s[5].setComponents(h,m,w,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const a=n.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Or.copy(a.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(n){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(n.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(n){const a=this.planes,s=n.center,c=-n.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<c)return!1;return!0}intersectsBox(n){const a=this.planes;for(let s=0;s<6;s++){const c=a[s];if(su.x=c.normal.x>0?n.max.x:n.min.x,su.y=c.normal.y>0?n.max.y:n.min.y,su.z=c.normal.z>0?n.max.z:n.min.z,c.distanceToPoint(su)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _x extends Vn{constructor(n,a,s,c,f,d,h,p,_,v=$s){if(v!==$s&&v!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===$s&&(s=jr),s===void 0&&v===ro&&(s=ao),super(null,c,f,d,h,p,v,s,_),this.isDepthTexture=!0,this.image={width:n,height:a},this.magFilter=h!==void 0?h:Di,this.minFilter=p!==void 0?p:Di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.source=new Tp(Object.assign({},n.image)),this.compareFunction=n.compareFunction,this}toJSON(n){const a=super.toJSON(n);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class _a extends Yr{constructor(n=1,a=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:s,heightSegments:c};const f=n/2,d=a/2,h=Math.floor(s),p=Math.floor(c),_=h+1,v=p+1,m=n/h,y=a/p,M=[],A=[],w=[],S=[];for(let x=0;x<v;x++){const H=x*y-d;for(let B=0;B<_;B++){const D=B*m-f;A.push(D,-H,0),w.push(0,0,1),S.push(B/h),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let H=0;H<h;H++){const B=H+_*x,D=H+_*(x+1),W=H+1+_*(x+1),X=H+1+_*x;M.push(B,D,X),M.push(D,W,X)}this.setIndex(M),this.setAttribute("position",new kr(A,3)),this.setAttribute("normal",new kr(w,3)),this.setAttribute("uv",new kr(S,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new _a(n.width,n.height,n.widthSegments,n.heightSegments)}}class JE extends xu{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class $E extends xu{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}const m0={enabled:!1,files:{},add:function(o,n){this.enabled!==!1&&(this.files[o]=n)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class tT{constructor(n,a,s){const c=this;let f=!1,d=0,h=0,p;const _=[];this.onStart=void 0,this.onLoad=n,this.onProgress=a,this.onError=s,this.itemStart=function(v){h++,f===!1&&c.onStart!==void 0&&c.onStart(v,d,h),f=!0},this.itemEnd=function(v){d++,c.onProgress!==void 0&&c.onProgress(v,d,h),d===h&&(f=!1,c.onLoad!==void 0&&c.onLoad())},this.itemError=function(v){c.onError!==void 0&&c.onError(v)},this.resolveURL=function(v){return p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,m){return _.push(v,m),this},this.removeHandler=function(v){const m=_.indexOf(v);return m!==-1&&_.splice(m,2),this},this.getHandler=function(v){for(let m=0,y=_.length;m<y;m+=2){const M=_[m],A=_[m+1];if(M.global&&(M.lastIndex=0),M.test(v))return A}return null}}}const eT=new tT;class Ap{constructor(n){this.manager=n!==void 0?n:eT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(n,a){const s=this;return new Promise(function(c,f){s.load(n,c,a,f)})}parse(){}setCrossOrigin(n){return this.crossOrigin=n,this}setWithCredentials(n){return this.withCredentials=n,this}setPath(n){return this.path=n,this}setResourcePath(n){return this.resourcePath=n,this}setRequestHeader(n){return this.requestHeader=n,this}}Ap.DEFAULT_MATERIAL_NAME="__DEFAULT";class nT extends Ap{constructor(n){super(n)}load(n,a,s,c){this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const f=this,d=m0.get(n);if(d!==void 0)return f.manager.itemStart(n),setTimeout(function(){a&&a(d),f.manager.itemEnd(n)},0),d;const h=ml("img");function p(){v(),m0.add(n,this),a&&a(this),f.manager.itemEnd(n)}function _(m){v(),c&&c(m),f.manager.itemError(n),f.manager.itemEnd(n)}function v(){h.removeEventListener("load",p,!1),h.removeEventListener("error",_,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",_,!1),n.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),f.manager.itemStart(n),h.src=n,h}}class iT extends Ap{constructor(n){super(n)}load(n,a,s,c){const f=new Vn,d=new nT(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(n,function(h){f.image=h,f.needsUpdate=!0,a!==void 0&&a(f)},s,c),f}}class aT extends px{constructor(n=-1,a=1,s=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=s,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,s,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=s-n,d=s+n,h=c+a,p=c-a;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=_*this.view.offsetX,d=f+_*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class rT extends vi{constructor(n=[]){super(),this.isArrayCamera=!0,this.cameras=n,this.index=0}}class sT{constructor(n=!0){this.autoStart=n,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=g0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let n=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const a=g0();n=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=n}return n}}function g0(){return performance.now()}function _0(o,n,a,s){const c=oT(s);switch(a){case $0:return o*n;case ex:return o*n;case nx:return o*n*2;case ix:return o*n/c.components*c.byteLength;case yp:return o*n/c.components*c.byteLength;case ax:return o*n*2/c.components*c.byteLength;case Sp:return o*n*2/c.components*c.byteLength;case tx:return o*n*3/c.components*c.byteLength;case wi:return o*n*4/c.components*c.byteLength;case Mp:return o*n*4/c.components*c.byteLength;case uu:case fu:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case du:case hu:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Xh:case jh:return Math.max(o,16)*Math.max(n,8)/4;case Vh:case kh:return Math.max(o,8)*Math.max(n,8)/2;case qh:case Yh:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case Wh:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Zh:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Kh:return Math.floor((o+4)/5)*Math.floor((n+3)/4)*16;case Qh:return Math.floor((o+4)/5)*Math.floor((n+4)/5)*16;case Jh:return Math.floor((o+5)/6)*Math.floor((n+4)/5)*16;case $h:return Math.floor((o+5)/6)*Math.floor((n+5)/6)*16;case tp:return Math.floor((o+7)/8)*Math.floor((n+4)/5)*16;case ep:return Math.floor((o+7)/8)*Math.floor((n+5)/6)*16;case np:return Math.floor((o+7)/8)*Math.floor((n+7)/8)*16;case ip:return Math.floor((o+9)/10)*Math.floor((n+4)/5)*16;case ap:return Math.floor((o+9)/10)*Math.floor((n+5)/6)*16;case rp:return Math.floor((o+9)/10)*Math.floor((n+7)/8)*16;case sp:return Math.floor((o+9)/10)*Math.floor((n+9)/10)*16;case op:return Math.floor((o+11)/12)*Math.floor((n+9)/10)*16;case lp:return Math.floor((o+11)/12)*Math.floor((n+11)/12)*16;case pu:case cp:case up:return Math.ceil(o/4)*Math.ceil(n/4)*16;case rx:case fp:return Math.ceil(o/4)*Math.ceil(n/4)*8;case dp:case hp:return Math.ceil(o/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function oT(o){switch(o){case Sa:case K0:return{byteLength:1,components:1};case hl:case Q0:case gl:return{byteLength:2,components:1};case vp:case xp:return{byteLength:2,components:4};case jr:case _p:case va:return{byteLength:4,components:1};case J0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vx(){let o=null,n=!1,a=null,s=null;function c(f,d){a(f,d),s=o.requestAnimationFrame(c)}return{start:function(){n!==!0&&a!==null&&(s=o.requestAnimationFrame(c),n=!0)},stop:function(){o.cancelAnimationFrame(s),n=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function lT(o){const n=new WeakMap;function a(h,p){const _=h.array,v=h.usage,m=_.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,_,v),h.onUploadCallback();let M;if(_ instanceof Float32Array)M=o.FLOAT;else if(_ instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)M=o.SHORT;else if(_ instanceof Uint32Array)M=o.UNSIGNED_INT;else if(_ instanceof Int32Array)M=o.INT;else if(_ instanceof Int8Array)M=o.BYTE;else if(_ instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:y,type:M,bytesPerElement:_.BYTES_PER_ELEMENT,version:h.version,size:m}}function s(h,p,_){const v=p.array,m=p.updateRanges;if(o.bindBuffer(_,h),m.length===0)o.bufferSubData(_,0,v);else{m.sort((M,A)=>M.start-A.start);let y=0;for(let M=1;M<m.length;M++){const A=m[y],w=m[M];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++y,m[y]=w)}m.length=y+1;for(let M=0,A=m.length;M<A;M++){const w=m[M];o.bufferSubData(_,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);p&&(o.deleteBuffer(p.buffer),n.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=n.get(h);(!v||v.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const _=n.get(h);if(_===void 0)n.set(h,a(h,p));else if(_.version<h.version){if(_.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(_.buffer,h,p),_.version=h.version}}return{get:c,remove:f,update:d}}var cT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uT=`#ifdef USE_ALPHAHASH
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
#endif`,fT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mT=`#ifdef USE_AOMAP
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
#endif`,gT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_T=`#ifdef USE_BATCHING
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
#endif`,vT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ST=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MT=`#ifdef USE_IRIDESCENCE
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
#endif`,ET=`#ifdef USE_BUMPMAP
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
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,UT=`#define PI 3.141592653589793
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
} // validated`,LT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OT=`vec3 transformedNormal = objectNormal;
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
#endif`,PT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FT="gl_FragColor = linearToOutputTexel( gl_FragColor );",HT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GT=`#ifdef USE_ENVMAP
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
#endif`,VT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
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
#endif`,qT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KT=`#ifdef USE_GRADIENTMAP
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
}`,QT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t1=`uniform bool receiveShadow;
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
#endif`,e1=`#ifdef USE_ENVMAP
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
#endif`,n1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s1=`PhysicalMaterial material;
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
#endif`,o1=`struct PhysicalMaterial {
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
}`,l1=`
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
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
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v1=`#if defined( USE_POINTS_UV )
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
#endif`,x1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
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
#endif`,b1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N1=`#ifdef USE_NORMALMAP
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
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y1=`float getShadowMask() {
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
}`,W1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z1=`#ifdef USE_SKINNING
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
#endif`,K1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q1=`#ifdef USE_SKINNING
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
#endif`,J1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nb=`#ifdef USE_TRANSMISSION
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
#endif`,ib=`#ifdef USE_TRANSMISSION
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cb=`uniform sampler2D t2D;
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`#include <common>
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
}`,mb=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gb=`#define DISTANCE
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
}`,_b=`#define DISTANCE
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
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`uniform float scale;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,Mb=`#include <common>
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
}`,Eb=`uniform vec3 diffuse;
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
}`,Tb=`#define LAMBERT
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
}`,bb=`#define LAMBERT
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
}`,Ab=`#define MATCAP
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
}`,Rb=`#define MATCAP
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
}`,Cb=`#define NORMAL
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
}`,wb=`#define NORMAL
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
}`,Db=`#define PHONG
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
}`,Nb=`#define PHONG
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
}`,Ub=`#define STANDARD
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
}`,Lb=`#define STANDARD
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
}`,Ob=`#define TOON
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
}`,Pb=`#define TOON
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
}`,zb=`uniform float size;
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
}`,Ib=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,Fb=`uniform vec3 color;
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
}`,Hb=`uniform float rotation;
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
}`,Gb=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:cT,alphahash_pars_fragment:uT,alphamap_fragment:fT,alphamap_pars_fragment:dT,alphatest_fragment:hT,alphatest_pars_fragment:pT,aomap_fragment:mT,aomap_pars_fragment:gT,batching_pars_vertex:_T,batching_vertex:vT,begin_vertex:xT,beginnormal_vertex:yT,bsdfs:ST,iridescence_fragment:MT,bumpmap_pars_fragment:ET,clipping_planes_fragment:TT,clipping_planes_pars_fragment:bT,clipping_planes_pars_vertex:AT,clipping_planes_vertex:RT,color_fragment:CT,color_pars_fragment:wT,color_pars_vertex:DT,color_vertex:NT,common:UT,cube_uv_reflection_fragment:LT,defaultnormal_vertex:OT,displacementmap_pars_vertex:PT,displacementmap_vertex:zT,emissivemap_fragment:IT,emissivemap_pars_fragment:BT,colorspace_fragment:FT,colorspace_pars_fragment:HT,envmap_fragment:GT,envmap_common_pars_fragment:VT,envmap_pars_fragment:XT,envmap_pars_vertex:kT,envmap_physical_pars_fragment:e1,envmap_vertex:jT,fog_vertex:qT,fog_pars_vertex:YT,fog_fragment:WT,fog_pars_fragment:ZT,gradientmap_pars_fragment:KT,lightmap_pars_fragment:QT,lights_lambert_fragment:JT,lights_lambert_pars_fragment:$T,lights_pars_begin:t1,lights_toon_fragment:n1,lights_toon_pars_fragment:i1,lights_phong_fragment:a1,lights_phong_pars_fragment:r1,lights_physical_fragment:s1,lights_physical_pars_fragment:o1,lights_fragment_begin:l1,lights_fragment_maps:c1,lights_fragment_end:u1,logdepthbuf_fragment:f1,logdepthbuf_pars_fragment:d1,logdepthbuf_pars_vertex:h1,logdepthbuf_vertex:p1,map_fragment:m1,map_pars_fragment:g1,map_particle_fragment:_1,map_particle_pars_fragment:v1,metalnessmap_fragment:x1,metalnessmap_pars_fragment:y1,morphinstance_vertex:S1,morphcolor_vertex:M1,morphnormal_vertex:E1,morphtarget_pars_vertex:T1,morphtarget_vertex:b1,normal_fragment_begin:A1,normal_fragment_maps:R1,normal_pars_fragment:C1,normal_pars_vertex:w1,normal_vertex:D1,normalmap_pars_fragment:N1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:L1,clearcoat_pars_fragment:O1,iridescence_pars_fragment:P1,opaque_fragment:z1,packing:I1,premultiplied_alpha_fragment:B1,project_vertex:F1,dithering_fragment:H1,dithering_pars_fragment:G1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:X1,shadowmap_pars_fragment:k1,shadowmap_pars_vertex:j1,shadowmap_vertex:q1,shadowmask_pars_fragment:Y1,skinbase_vertex:W1,skinning_pars_vertex:Z1,skinning_vertex:K1,skinnormal_vertex:Q1,specularmap_fragment:J1,specularmap_pars_fragment:$1,tonemapping_fragment:tb,tonemapping_pars_fragment:eb,transmission_fragment:nb,transmission_pars_fragment:ib,uv_pars_fragment:ab,uv_pars_vertex:rb,uv_vertex:sb,worldpos_vertex:ob,background_vert:lb,background_frag:cb,backgroundCube_vert:ub,backgroundCube_frag:fb,cube_vert:db,cube_frag:hb,depth_vert:pb,depth_frag:mb,distanceRGBA_vert:gb,distanceRGBA_frag:_b,equirect_vert:vb,equirect_frag:xb,linedashed_vert:yb,linedashed_frag:Sb,meshbasic_vert:Mb,meshbasic_frag:Eb,meshlambert_vert:Tb,meshlambert_frag:bb,meshmatcap_vert:Ab,meshmatcap_frag:Rb,meshnormal_vert:Cb,meshnormal_frag:wb,meshphong_vert:Db,meshphong_frag:Nb,meshphysical_vert:Ub,meshphysical_frag:Lb,meshtoon_vert:Ob,meshtoon_frag:Pb,points_vert:zb,points_frag:Ib,shadow_vert:Bb,shadow_frag:Fb,sprite_vert:Hb,sprite_frag:Gb},Ft={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},ki={basic:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ze(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Gn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Gn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new ze(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Gn([Ft.points,Ft.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Gn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Gn([Ft.common,Ft.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Gn([Ft.sprite,Ft.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Gn([Ft.common,Ft.displacementmap,{referencePosition:{value:new ft},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Gn([Ft.lights,Ft.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};ki.physical={uniforms:Gn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const ou={r:0,b:0,g:0},Pr=new Ma,Vb=new fn;function Xb(o,n,a,s,c,f,d){const h=new ze(0);let p=f===!0?0:1,_,v,m=null,y=0,M=null;function A(B){let D=B.isScene===!0?B.background:null;return D&&D.isTexture&&(D=(B.backgroundBlurriness>0?a:n).get(D)),D}function w(B){let D=!1;const W=A(B);W===null?x(h,p):W&&W.isColor&&(x(W,1),D=!0);const X=o.xr.getEnvironmentBlendMode();X==="additive"?s.buffers.color.setClear(0,0,0,1,d):X==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(B,D){const W=A(D);W&&(W.isCubeTexture||W.mapping===vu)?(v===void 0&&(v=new Wn(new xl(1,1,1),new Ea({name:"BackgroundCubeMaterial",uniforms:oo(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(X,z,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(v)),Pr.copy(D.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),v.material.uniforms.envMap.value=W,v.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Vb.makeRotationFromEuler(Pr)),v.material.toneMapped=De.getTransfer(W.colorSpace)!==Fe,(m!==W||y!==W.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,m=W,y=W.version,M=o.toneMapping),v.layers.enableAll(),B.unshift(v,v.geometry,v.material,0,0,null)):W&&W.isTexture&&(_===void 0&&(_=new Wn(new _a(2,2),new Ea({name:"BackgroundMaterial",uniforms:oo(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(_)),_.material.uniforms.t2D.value=W,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.toneMapped=De.getTransfer(W.colorSpace)!==Fe,W.matrixAutoUpdate===!0&&W.updateMatrix(),_.material.uniforms.uvTransform.value.copy(W.matrix),(m!==W||y!==W.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,m=W,y=W.version,M=o.toneMapping),_.layers.enableAll(),B.unshift(_,_.geometry,_.material,0,0,null))}function x(B,D){B.getRGB(ou,hx(o)),s.buffers.color.setClear(ou.r,ou.g,ou.b,D,d)}function H(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return h},setClearColor:function(B,D=1){h.set(B),p=D,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(B){p=B,x(h,p)},render:w,addToRenderList:S,dispose:H}}function kb(o,n){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},c=y(null);let f=c,d=!1;function h(C,k,ht,ut,yt){let gt=!1;const Z=m(ut,ht,k);f!==Z&&(f=Z,_(f.object)),gt=M(C,ut,ht,yt),gt&&A(C,ut,ht,yt),yt!==null&&n.update(yt,o.ELEMENT_ARRAY_BUFFER),(gt||d)&&(d=!1,D(C,k,ht,ut),yt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(yt).buffer))}function p(){return o.createVertexArray()}function _(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function m(C,k,ht){const ut=ht.wireframe===!0;let yt=s[C.id];yt===void 0&&(yt={},s[C.id]=yt);let gt=yt[k.id];gt===void 0&&(gt={},yt[k.id]=gt);let Z=gt[ut];return Z===void 0&&(Z=y(p()),gt[ut]=Z),Z}function y(C){const k=[],ht=[],ut=[];for(let yt=0;yt<a;yt++)k[yt]=0,ht[yt]=0,ut[yt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ht,attributeDivisors:ut,object:C,attributes:{},index:null}}function M(C,k,ht,ut){const yt=f.attributes,gt=k.attributes;let Z=0;const lt=ht.getAttributes();for(const et in lt)if(lt[et].location>=0){const F=yt[et];let P=gt[et];if(P===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),F===void 0||F.attribute!==P||P&&F.data!==P.data)return!0;Z++}return f.attributesNum!==Z||f.index!==ut}function A(C,k,ht,ut){const yt={},gt=k.attributes;let Z=0;const lt=ht.getAttributes();for(const et in lt)if(lt[et].location>=0){let F=gt[et];F===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(F=C.instanceColor));const P={};P.attribute=F,F&&F.data&&(P.data=F.data),yt[et]=P,Z++}f.attributes=yt,f.attributesNum=Z,f.index=ut}function w(){const C=f.newAttributes;for(let k=0,ht=C.length;k<ht;k++)C[k]=0}function S(C){x(C,0)}function x(C,k){const ht=f.newAttributes,ut=f.enabledAttributes,yt=f.attributeDivisors;ht[C]=1,ut[C]===0&&(o.enableVertexAttribArray(C),ut[C]=1),yt[C]!==k&&(o.vertexAttribDivisor(C,k),yt[C]=k)}function H(){const C=f.newAttributes,k=f.enabledAttributes;for(let ht=0,ut=k.length;ht<ut;ht++)k[ht]!==C[ht]&&(o.disableVertexAttribArray(ht),k[ht]=0)}function B(C,k,ht,ut,yt,gt,Z){Z===!0?o.vertexAttribIPointer(C,k,ht,yt,gt):o.vertexAttribPointer(C,k,ht,ut,yt,gt)}function D(C,k,ht,ut){w();const yt=ut.attributes,gt=ht.getAttributes(),Z=k.defaultAttributeValues;for(const lt in gt){const et=gt[lt];if(et.location>=0){let Tt=yt[lt];if(Tt===void 0&&(lt==="instanceMatrix"&&C.instanceMatrix&&(Tt=C.instanceMatrix),lt==="instanceColor"&&C.instanceColor&&(Tt=C.instanceColor)),Tt!==void 0){const F=Tt.normalized,P=Tt.itemSize,At=n.get(Tt);if(At===void 0)continue;const Ot=At.buffer,b=At.type,G=At.bytesPerElement,st=b===o.INT||b===o.UNSIGNED_INT||Tt.gpuType===_p;if(Tt.isInterleavedBufferAttribute){const $=Tt.data,vt=$.stride,Dt=Tt.offset;if($.isInstancedInterleavedBuffer){for(let bt=0;bt<et.locationSize;bt++)x(et.location+bt,$.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let bt=0;bt<et.locationSize;bt++)S(et.location+bt);o.bindBuffer(o.ARRAY_BUFFER,Ot);for(let bt=0;bt<et.locationSize;bt++)B(et.location+bt,P/et.locationSize,b,F,vt*G,(Dt+P/et.locationSize*bt)*G,st)}else{if(Tt.isInstancedBufferAttribute){for(let $=0;$<et.locationSize;$++)x(et.location+$,Tt.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let $=0;$<et.locationSize;$++)S(et.location+$);o.bindBuffer(o.ARRAY_BUFFER,Ot);for(let $=0;$<et.locationSize;$++)B(et.location+$,P/et.locationSize,b,F,P*G,P/et.locationSize*$*G,st)}}else if(Z!==void 0){const F=Z[lt];if(F!==void 0)switch(F.length){case 2:o.vertexAttrib2fv(et.location,F);break;case 3:o.vertexAttrib3fv(et.location,F);break;case 4:o.vertexAttrib4fv(et.location,F);break;default:o.vertexAttrib1fv(et.location,F)}}}}H()}function W(){q();for(const C in s){const k=s[C];for(const ht in k){const ut=k[ht];for(const yt in ut)v(ut[yt].object),delete ut[yt];delete k[ht]}delete s[C]}}function X(C){if(s[C.id]===void 0)return;const k=s[C.id];for(const ht in k){const ut=k[ht];for(const yt in ut)v(ut[yt].object),delete ut[yt];delete k[ht]}delete s[C.id]}function z(C){for(const k in s){const ht=s[k];if(ht[C.id]===void 0)continue;const ut=ht[C.id];for(const yt in ut)v(ut[yt].object),delete ut[yt];delete ht[C.id]}}function q(){N(),d=!0,f!==c&&(f=c,_(f.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:q,resetDefaultState:N,dispose:W,releaseStatesOfGeometry:X,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:S,disableUnusedAttributes:H}}function jb(o,n,a){let s;function c(_){s=_}function f(_,v){o.drawArrays(s,_,v),a.update(v,s,1)}function d(_,v,m){m!==0&&(o.drawArraysInstanced(s,_,v,m),a.update(v,s,m))}function h(_,v,m){if(m===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,_,0,v,0,m);let M=0;for(let A=0;A<m;A++)M+=v[A];a.update(M,s,1)}function p(_,v,m,y){if(m===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<_.length;A++)d(_[A],v[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(s,_,0,v,0,y,0,m);let A=0;for(let w=0;w<m;w++)A+=v[w]*y[w];a.update(A,s,1)}}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function qb(o,n,a,s){let c;function f(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const z=n.get("EXT_texture_filter_anisotropic");c=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(z){return!(z!==wi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const q=z===gl&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(z!==Sa&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==va&&!q)}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=a.precision!==void 0?a.precision:"highp";const v=p(_);v!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",v,"instead."),_=v);const m=a.logarithmicDepthBuffer===!0,y=a.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),H=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),W=A>0,X=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:_,logarithmicDepthBuffer:m,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:H,maxVaryings:B,maxFragmentUniforms:D,vertexTextures:W,maxSamples:X}}function Yb(o){const n=this;let a=null,s=0,c=!1,f=!1;const d=new Br,h=new de,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,y){const M=m.length!==0||y||s!==0||c;return c=y,s=m.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,y){a=v(m,y,0)},this.setState=function(m,y,M){const A=m.clippingPlanes,w=m.clipIntersection,S=m.clipShadows,x=o.get(m);if(!c||A===null||A.length===0||f&&!S)f?v(null):_();else{const H=f?0:s,B=H*4;let D=x.clippingState||null;p.value=D,D=v(A,y,B,M);for(let W=0;W!==B;++W)D[W]=a[W];x.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=H}};function _(){p.value!==a&&(p.value=a,p.needsUpdate=s>0),n.numPlanes=s,n.numIntersection=0}function v(m,y,M,A){const w=m!==null?m.length:0;let S=null;if(w!==0){if(S=p.value,A!==!0||S===null){const x=M+w*4,H=y.matrixWorldInverse;h.getNormalMatrix(H),(S===null||S.length<x)&&(S=new Float32Array(x));for(let B=0,D=M;B!==w;++B,D+=4)d.copy(m[B]).applyMatrix4(H,h),d.normal.toArray(S,D),S[D+3]=d.constant}p.value=S,p.needsUpdate=!0}return n.numPlanes=w,n.numIntersection=0,S}}function Wb(o){let n=new WeakMap;function a(d,h){return h===Bh?d.mapping=no:h===Fh&&(d.mapping=io),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Bh||h===Fh)if(n.has(d)){const p=n.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new qE(p.height);return _.fromEquirectangularTexture(o,d),n.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function c(d){const h=d.target;h.removeEventListener("dispose",c);const p=n.get(h);p!==void 0&&(n.delete(h),p.dispose())}function f(){n=new WeakMap}return{get:s,dispose:f}}const Qs=4,v0=[.125,.215,.35,.446,.526,.582],Gr=20,Mh=new aT,x0=new ze;let Eh=null,Th=0,bh=0,Ah=!1;const Fr=(1+Math.sqrt(5))/2,Ys=1/Fr,y0=[new ft(-Fr,Ys,0),new ft(Fr,Ys,0),new ft(-Ys,0,Fr),new ft(Ys,0,Fr),new ft(0,Fr,-Ys),new ft(0,Fr,Ys),new ft(-1,1,-1),new ft(1,1,-1),new ft(-1,1,1),new ft(1,1,1)],Zb=new ft;class S0{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,a=0,s=.1,c=100,f={}){const{size:d=256,position:h=Zb}=f;Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(n,s,c,p,h),a>0&&this._blur(p,0,0,a),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Eh,Th,bh),this._renderer.xr.enabled=Ah,n.scissorTest=!1,lu(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===no||n.mapping===io?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(n,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:ji,minFilter:ji,generateMipmaps:!1,type:gl,format:wi,colorSpace:so,depthBuffer:!1},c=M0(n,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M0(n,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kb(f)),this._blurMaterial=Qb(f,n,a)}return c}_compileMaterial(n){const a=new Wn(this._lodPlanes[0],n);this._renderer.compile(a,Mh)}_sceneToCubeUV(n,a,s,c,f){const p=new vi(90,1,a,s),_=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,y=m.autoClear,M=m.toneMapping;m.getClearColor(x0),m.toneMapping=sr,m.autoClear=!1;const A=new Zs({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),w=new Wn(new xl,A);let S=!1;const x=n.background;x?x.isColor&&(A.color.copy(x),n.background=null,S=!0):(A.color.copy(x0),S=!0);for(let H=0;H<6;H++){const B=H%3;B===0?(p.up.set(0,_[H],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+v[H],f.y,f.z)):B===1?(p.up.set(0,0,_[H]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+v[H],f.z)):(p.up.set(0,_[H],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+v[H]));const D=this._cubeSize;lu(c,B*D,H>2?D:0,D,D),m.setRenderTarget(c),S&&m.render(w,p),m.render(n,p)}w.geometry.dispose(),w.material.dispose(),m.toneMapping=M,m.autoClear=y,n.background=x}_textureToCubeUV(n,a){const s=this._renderer,c=n.mapping===no||n.mapping===io;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E0());const f=c?this._cubemapMaterial:this._equirectMaterial,d=new Wn(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=n;const p=this._cubeSize;lu(a,0,0,3*p,2*p),s.setRenderTarget(a),s.render(d,Mh)}_applyPMREM(n){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const c=this._lodPlanes.length;for(let f=1;f<c;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),h=y0[(c-f-1)%y0.length];this._blur(n,f-1,f,d,h)}a.autoClear=s}_blur(n,a,s,c,f){const d=this._pingPongRenderTarget;this._halfBlur(n,d,a,s,c,"latitudinal",f),this._halfBlur(d,n,s,s,c,"longitudinal",f)}_halfBlur(n,a,s,c,f,d,h){const p=this._renderer,_=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new Wn(this._lodPlanes[c],_),y=_.uniforms,M=this._sizeLods[s]-1,A=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Gr-1),w=f/A,S=isFinite(f)?1+Math.floor(v*w):Gr;S>Gr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Gr}`);const x=[];let H=0;for(let z=0;z<Gr;++z){const q=z/w,N=Math.exp(-q*q/2);x.push(N),z===0?H+=N:z<S&&(H+=2*N)}for(let z=0;z<x.length;z++)x[z]=x[z]/H;y.envMap.value=n.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:B}=this;y.dTheta.value=A,y.mipInt.value=B-s;const D=this._sizeLods[c],W=3*D*(c>B-Qs?c-B+Qs:0),X=4*(this._cubeSize-D);lu(a,W,X,3*D,2*D),p.setRenderTarget(a),p.render(m,Mh)}}function Kb(o){const n=[],a=[],s=[];let c=o;const f=o-Qs+1+v0.length;for(let d=0;d<f;d++){const h=Math.pow(2,c);a.push(h);let p=1/h;d>o-Qs?p=v0[d-o+Qs-1]:d===0&&(p=0),s.push(p);const _=1/(h-2),v=-_,m=1+_,y=[v,v,m,v,m,m,v,v,m,m,v,m],M=6,A=6,w=3,S=2,x=1,H=new Float32Array(w*A*M),B=new Float32Array(S*A*M),D=new Float32Array(x*A*M);for(let X=0;X<M;X++){const z=X%3*2/3-1,q=X>2?0:-1,N=[z,q,0,z+2/3,q,0,z+2/3,q+1,0,z,q,0,z+2/3,q+1,0,z,q+1,0];H.set(N,w*A*X),B.set(y,S*A*X);const C=[X,X,X,X,X,X];D.set(C,x*A*X)}const W=new Yr;W.setAttribute("position",new Ni(H,w)),W.setAttribute("uv",new Ni(B,S)),W.setAttribute("faceIndex",new Ni(D,x)),n.push(W),c>Qs&&c--}return{lodPlanes:n,sizeLods:a,sigmas:s}}function M0(o,n,a){const s=new qr(o,n,a);return s.texture.mapping=vu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function lu(o,n,a,s,c){o.viewport.set(n,a,s,c),o.scissor.set(n,a,s,c)}function Qb(o,n,a){const s=new Float32Array(Gr),c=new ft(0,1,0);return new Ea({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Rp(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function E0(){return new Ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rp(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function T0(){return new Ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Rp(){return`

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
	`}function Jb(o){let n=new WeakMap,a=null;function s(h){if(h&&h.isTexture){const p=h.mapping,_=p===Bh||p===Fh,v=p===no||p===io;if(_||v){let m=n.get(h);const y=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return a===null&&(a=new S0(o)),m=_?a.fromEquirectangular(h,m):a.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return _&&M&&M.height>0||v&&M&&c(M)?(a===null&&(a=new S0(o)),m=_?a.fromEquirectangular(h):a.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function c(h){let p=0;const _=6;for(let v=0;v<_;v++)h[v]!==void 0&&p++;return p===_}function f(h){const p=h.target;p.removeEventListener("dispose",f);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function d(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:d}}function $b(o){const n={};function a(s){if(n[s]!==void 0)return n[s];let c;switch(s){case"WEBGL_depth_texture":c=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=o.getExtension(s)}return n[s]=c,c}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const c=a(s);return c===null&&Ir("THREE.WebGLRenderer: "+s+" extension not supported."),c}}}function tA(o,n,a,s){const c={},f=new WeakMap;function d(m){const y=m.target;y.index!==null&&n.remove(y.index);for(const A in y.attributes)n.remove(y.attributes[A]);y.removeEventListener("dispose",d),delete c[y.id];const M=f.get(y);M&&(n.remove(M),f.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,a.memory.geometries--}function h(m,y){return c[y.id]===!0||(y.addEventListener("dispose",d),c[y.id]=!0,a.memory.geometries++),y}function p(m){const y=m.attributes;for(const M in y)n.update(y[M],o.ARRAY_BUFFER)}function _(m){const y=[],M=m.index,A=m.attributes.position;let w=0;if(M!==null){const H=M.array;w=M.version;for(let B=0,D=H.length;B<D;B+=3){const W=H[B+0],X=H[B+1],z=H[B+2];y.push(W,X,X,z,z,W)}}else if(A!==void 0){const H=A.array;w=A.version;for(let B=0,D=H.length/3-1;B<D;B+=3){const W=B+0,X=B+1,z=B+2;y.push(W,X,X,z,z,W)}}else return;const S=new(ox(y)?dx:fx)(y,1);S.version=w;const x=f.get(m);x&&n.remove(x),f.set(m,S)}function v(m){const y=f.get(m);if(y){const M=m.index;M!==null&&y.version<M.version&&_(m)}else _(m);return f.get(m)}return{get:h,update:p,getWireframeAttribute:v}}function eA(o,n,a){let s;function c(y){s=y}let f,d;function h(y){f=y.type,d=y.bytesPerElement}function p(y,M){o.drawElements(s,M,f,y*d),a.update(M,s,1)}function _(y,M,A){A!==0&&(o.drawElementsInstanced(s,M,f,y*d,A),a.update(M,s,A))}function v(y,M,A){if(A===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,y,0,A);let S=0;for(let x=0;x<A;x++)S+=M[x];a.update(S,s,1)}function m(y,M,A,w){if(A===0)return;const S=n.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)_(y[x]/d,M[x],w[x]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,f,y,0,w,0,A);let x=0;for(let H=0;H<A;H++)x+=M[H]*w[H];a.update(x,s,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=_,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function nA(o){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(a.calls++,d){case o.TRIANGLES:a.triangles+=h*(f/3);break;case o.LINES:a.lines+=h*(f/2);break;case o.LINE_STRIP:a.lines+=h*(f-1);break;case o.LINE_LOOP:a.lines+=h*f;break;case o.POINTS:a.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function c(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:c,update:s}}function iA(o,n,a){const s=new WeakMap,c=new an;function f(d,h,p){const _=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=v!==void 0?v.length:0;let y=s.get(h);if(y===void 0||y.count!==m){let C=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const A=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],H=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let D=0;A===!0&&(D=1),w===!0&&(D=2),S===!0&&(D=3);let W=h.attributes.position.count*D,X=1;W>n.maxTextureSize&&(X=Math.ceil(W/n.maxTextureSize),W=n.maxTextureSize);const z=new Float32Array(W*X*4*m),q=new lx(z,W,X,m);q.type=va,q.needsUpdate=!0;const N=D*4;for(let k=0;k<m;k++){const ht=x[k],ut=H[k],yt=B[k],gt=W*X*4*k;for(let Z=0;Z<ht.count;Z++){const lt=Z*N;A===!0&&(c.fromBufferAttribute(ht,Z),z[gt+lt+0]=c.x,z[gt+lt+1]=c.y,z[gt+lt+2]=c.z,z[gt+lt+3]=0),w===!0&&(c.fromBufferAttribute(ut,Z),z[gt+lt+4]=c.x,z[gt+lt+5]=c.y,z[gt+lt+6]=c.z,z[gt+lt+7]=0),S===!0&&(c.fromBufferAttribute(yt,Z),z[gt+lt+8]=c.x,z[gt+lt+9]=c.y,z[gt+lt+10]=c.z,z[gt+lt+11]=yt.itemSize===4?c.w:1)}}y={count:m,texture:q,size:new Xe(W,X)},s.set(h,y),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,a);else{let A=0;for(let S=0;S<_.length;S++)A+=_[S];const w=h.morphTargetsRelative?1:1-A;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",_)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,a),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function aA(o,n,a,s){let c=new WeakMap;function f(p){const _=s.render.frame,v=p.geometry,m=n.get(p,v);if(c.get(m)!==_&&(n.update(m),c.set(m,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),c.get(p)!==_&&(a.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&a.update(p.instanceColor,o.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return m}function d(){c=new WeakMap}function h(p){const _=p.target;_.removeEventListener("dispose",h),a.remove(_.instanceMatrix),_.instanceColor!==null&&a.remove(_.instanceColor)}return{update:f,dispose:d}}const xx=new Vn,b0=new _x(1,1),yx=new lx,Sx=new CE,Mx=new mx,A0=[],R0=[],C0=new Float32Array(16),w0=new Float32Array(9),D0=new Float32Array(4);function uo(o,n,a){const s=o[0];if(s<=0||s>0)return o;const c=n*a;let f=A0[c];if(f===void 0&&(f=new Float32Array(c),A0[c]=f),n!==0){s.toArray(f,0);for(let d=1,h=0;d!==n;++d)h+=a,o[d].toArray(f,h)}return f}function pn(o,n){if(o.length!==n.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==n[a])return!1;return!0}function mn(o,n){for(let a=0,s=n.length;a<s;a++)o[a]=n[a]}function yu(o,n){let a=R0[n];a===void 0&&(a=new Int32Array(n),R0[n]=a);for(let s=0;s!==n;++s)a[s]=o.allocateTextureUnit();return a}function rA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1f(this.addr,n),a[0]=n)}function sA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(pn(a,n))return;o.uniform2fv(this.addr,n),mn(a,n)}}function oA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(o.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(pn(a,n))return;o.uniform3fv(this.addr,n),mn(a,n)}}function lA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(pn(a,n))return;o.uniform4fv(this.addr,n),mn(a,n)}}function cA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(pn(a,n))return;o.uniformMatrix2fv(this.addr,!1,n),mn(a,n)}else{if(pn(a,s))return;D0.set(s),o.uniformMatrix2fv(this.addr,!1,D0),mn(a,s)}}function uA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(pn(a,n))return;o.uniformMatrix3fv(this.addr,!1,n),mn(a,n)}else{if(pn(a,s))return;w0.set(s),o.uniformMatrix3fv(this.addr,!1,w0),mn(a,s)}}function fA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(pn(a,n))return;o.uniformMatrix4fv(this.addr,!1,n),mn(a,n)}else{if(pn(a,s))return;C0.set(s),o.uniformMatrix4fv(this.addr,!1,C0),mn(a,s)}}function dA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1i(this.addr,n),a[0]=n)}function hA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(pn(a,n))return;o.uniform2iv(this.addr,n),mn(a,n)}}function pA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(pn(a,n))return;o.uniform3iv(this.addr,n),mn(a,n)}}function mA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(pn(a,n))return;o.uniform4iv(this.addr,n),mn(a,n)}}function gA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1ui(this.addr,n),a[0]=n)}function _A(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(pn(a,n))return;o.uniform2uiv(this.addr,n),mn(a,n)}}function vA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(pn(a,n))return;o.uniform3uiv(this.addr,n),mn(a,n)}}function xA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(pn(a,n))return;o.uniform4uiv(this.addr,n),mn(a,n)}}function yA(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(b0.compareFunction=sx,f=b0):f=xx,a.setTexture2D(n||f,c)}function SA(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTexture3D(n||Sx,c)}function MA(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTextureCube(n||Mx,c)}function EA(o,n,a){const s=this.cache,c=a.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),a.setTexture2DArray(n||yx,c)}function TA(o){switch(o){case 5126:return rA;case 35664:return sA;case 35665:return oA;case 35666:return lA;case 35674:return cA;case 35675:return uA;case 35676:return fA;case 5124:case 35670:return dA;case 35667:case 35671:return hA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return gA;case 36294:return _A;case 36295:return vA;case 36296:return xA;case 35678:case 36198:case 36298:case 36306:case 35682:return yA;case 35679:case 36299:case 36307:return SA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return EA}}function bA(o,n){o.uniform1fv(this.addr,n)}function AA(o,n){const a=uo(n,this.size,2);o.uniform2fv(this.addr,a)}function RA(o,n){const a=uo(n,this.size,3);o.uniform3fv(this.addr,a)}function CA(o,n){const a=uo(n,this.size,4);o.uniform4fv(this.addr,a)}function wA(o,n){const a=uo(n,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function DA(o,n){const a=uo(n,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function NA(o,n){const a=uo(n,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function UA(o,n){o.uniform1iv(this.addr,n)}function LA(o,n){o.uniform2iv(this.addr,n)}function OA(o,n){o.uniform3iv(this.addr,n)}function PA(o,n){o.uniform4iv(this.addr,n)}function zA(o,n){o.uniform1uiv(this.addr,n)}function IA(o,n){o.uniform2uiv(this.addr,n)}function BA(o,n){o.uniform3uiv(this.addr,n)}function FA(o,n){o.uniform4uiv(this.addr,n)}function HA(o,n,a){const s=this.cache,c=n.length,f=yu(a,c);pn(s,f)||(o.uniform1iv(this.addr,f),mn(s,f));for(let d=0;d!==c;++d)a.setTexture2D(n[d]||xx,f[d])}function GA(o,n,a){const s=this.cache,c=n.length,f=yu(a,c);pn(s,f)||(o.uniform1iv(this.addr,f),mn(s,f));for(let d=0;d!==c;++d)a.setTexture3D(n[d]||Sx,f[d])}function VA(o,n,a){const s=this.cache,c=n.length,f=yu(a,c);pn(s,f)||(o.uniform1iv(this.addr,f),mn(s,f));for(let d=0;d!==c;++d)a.setTextureCube(n[d]||Mx,f[d])}function XA(o,n,a){const s=this.cache,c=n.length,f=yu(a,c);pn(s,f)||(o.uniform1iv(this.addr,f),mn(s,f));for(let d=0;d!==c;++d)a.setTexture2DArray(n[d]||yx,f[d])}function kA(o){switch(o){case 5126:return bA;case 35664:return AA;case 35665:return RA;case 35666:return CA;case 35674:return wA;case 35675:return DA;case 35676:return NA;case 5124:case 35670:return UA;case 35667:case 35671:return LA;case 35668:case 35672:return OA;case 35669:case 35673:return PA;case 5125:return zA;case 36294:return IA;case 36295:return BA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return HA;case 35679:case 36299:case 36307:return GA;case 35680:case 36300:case 36308:case 36293:return VA;case 36289:case 36303:case 36311:case 36292:return XA}}class jA{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.setValue=TA(a.type)}}class qA{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=kA(a.type)}}class YA{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,s){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(n,a[h.id],s)}}}const Rh=/(\w+)(\])?(\[|\.)?/g;function N0(o,n){o.seq.push(n),o.map[n.id]=n}function WA(o,n,a){const s=o.name,c=s.length;for(Rh.lastIndex=0;;){const f=Rh.exec(s),d=Rh.lastIndex;let h=f[1];const p=f[2]==="]",_=f[3];if(p&&(h=h|0),_===void 0||_==="["&&d+2===c){N0(a,_===void 0?new jA(h,o,n):new qA(h,o,n));break}else{let m=a.map[h];m===void 0&&(m=new YA(h),N0(a,m)),a=m}}}class mu{constructor(n,a){this.seq=[],this.map={};const s=n.getProgramParameter(a,n.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const f=n.getActiveUniform(a,c),d=n.getUniformLocation(a,f.name);WA(f,d,this)}}setValue(n,a,s,c){const f=this.map[a];f!==void 0&&f.setValue(n,s,c)}setOptional(n,a,s){const c=a[s];c!==void 0&&this.setValue(n,s,c)}static upload(n,a,s,c){for(let f=0,d=a.length;f!==d;++f){const h=a[f],p=s[h.id];p.needsUpdate!==!1&&h.setValue(n,p.value,c)}}static seqWithValue(n,a){const s=[];for(let c=0,f=n.length;c!==f;++c){const d=n[c];d.id in a&&s.push(d)}return s}}function U0(o,n,a){const s=o.createShader(n);return o.shaderSource(s,a),o.compileShader(s),s}const ZA=37297;let KA=0;function QA(o,n){const a=o.split(`
`),s=[],c=Math.max(n-6,0),f=Math.min(n+6,a.length);for(let d=c;d<f;d++){const h=d+1;s.push(`${h===n?">":" "} ${h}: ${a[d]}`)}return s.join(`
`)}const L0=new de;function JA(o){De._getMatrix(L0,De.workingColorSpace,o);const n=`mat3( ${L0.elements.map(a=>a.toFixed(4))} )`;switch(De.getTransfer(o)){case gu:return[n,"LinearTransferOETF"];case Fe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[n,"LinearTransferOETF"]}}function O0(o,n,a){const s=o.getShaderParameter(n,o.COMPILE_STATUS),c=o.getShaderInfoLog(n).trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return a.toUpperCase()+`

`+c+`

`+QA(o.getShaderSource(n),d)}else return c}function $A(o,n){const a=JA(n);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function tR(o,n){let a;switch(n){case IM:a="Linear";break;case BM:a="Reinhard";break;case FM:a="Cineon";break;case HM:a="ACESFilmic";break;case VM:a="AgX";break;case XM:a="Neutral";break;case GM:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const cu=new ft;function eR(){De.getLuminanceCoefficients(cu);const o=cu.x.toFixed(4),n=cu.y.toFixed(4),a=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${n}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function iR(o){const n=[];for(const a in o){const s=o[a];s!==!1&&n.push("#define "+a+" "+s)}return n.join(`
`)}function aR(o,n){const a={},s=o.getProgramParameter(n,o.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const f=o.getActiveAttrib(n,c),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),a[d]={type:f.type,location:o.getAttribLocation(n,d),locationSize:h}}return a}function ul(o){return o!==""}function P0(o,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function z0(o,n){return o.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const rR=/^[ \t]*#include +<([\w\d./]+)>/gm;function pp(o){return o.replace(rR,oR)}const sR=new Map;function oR(o,n){let a=pe[n];if(a===void 0){const s=sR.get(n);if(s!==void 0)a=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,s);else throw new Error("Can not resolve #include <"+n+">")}return pp(a)}const lR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I0(o){return o.replace(lR,cR)}function cR(o,n,a,s){let c="";for(let f=parseInt(n);f<parseInt(a);f++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function B0(o){let n=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?n+=`
#define HIGH_PRECISION`:o.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function uR(o){let n="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Y0?n="SHADOWMAP_TYPE_PCF":o.shadowMapType===gM?n="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ma&&(n="SHADOWMAP_TYPE_VSM"),n}function fR(o){let n="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case no:case io:n="ENVMAP_TYPE_CUBE";break;case vu:n="ENVMAP_TYPE_CUBE_UV";break}return n}function dR(o){let n="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case io:n="ENVMAP_MODE_REFRACTION";break}return n}function hR(o){let n="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case W0:n="ENVMAP_BLENDING_MULTIPLY";break;case PM:n="ENVMAP_BLENDING_MIX";break;case zM:n="ENVMAP_BLENDING_ADD";break}return n}function pR(o){const n=o.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,s=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function mR(o,n,a,s){const c=o.getContext(),f=a.defines;let d=a.vertexShader,h=a.fragmentShader;const p=uR(a),_=fR(a),v=dR(a),m=hR(a),y=pR(a),M=nR(a),A=iR(f),w=c.createProgram();let S,x,H=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(S=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A].filter(ul).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A].filter(ul).join(`
`),x.length>0&&(x+=`
`)):(S=[B0(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),x=[B0(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+_:"",a.envMap?"#define "+v:"",a.envMap?"#define "+m:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==sr?"#define TONE_MAPPING":"",a.toneMapping!==sr?pe.tonemapping_pars_fragment:"",a.toneMapping!==sr?tR("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,$A("linearToOutputTexel",a.outputColorSpace),eR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(ul).join(`
`)),d=pp(d),d=P0(d,a),d=z0(d,a),h=pp(h),h=P0(h,a),h=z0(h,a),d=I0(d),h=I0(h),a.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",a.glslVersion===Kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===Kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const B=H+S+d,D=H+x+h,W=U0(c,c.VERTEX_SHADER,B),X=U0(c,c.FRAGMENT_SHADER,D);c.attachShader(w,W),c.attachShader(w,X),a.index0AttributeName!==void 0?c.bindAttribLocation(w,0,a.index0AttributeName):a.morphTargets===!0&&c.bindAttribLocation(w,0,"position"),c.linkProgram(w);function z(k){if(o.debug.checkShaderErrors){const ht=c.getProgramInfoLog(w).trim(),ut=c.getShaderInfoLog(W).trim(),yt=c.getShaderInfoLog(X).trim();let gt=!0,Z=!0;if(c.getProgramParameter(w,c.LINK_STATUS)===!1)if(gt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,w,W,X);else{const lt=O0(c,W,"vertex"),et=O0(c,X,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(w,c.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ht+`
`+lt+`
`+et)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(ut===""||yt==="")&&(Z=!1);Z&&(k.diagnostics={runnable:gt,programLog:ht,vertexShader:{log:ut,prefix:S},fragmentShader:{log:yt,prefix:x}})}c.deleteShader(W),c.deleteShader(X),q=new mu(c,w),N=aR(c,w)}let q;this.getUniforms=function(){return q===void 0&&z(this),q};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let C=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=c.getProgramParameter(w,ZA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(w),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=KA++,this.cacheKey=n,this.usedTimes=1,this.program=w,this.vertexShader=W,this.fragmentShader=X,this}let gR=0;class _R{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,s=n.fragmentShader,c=this._getShaderStage(a),f=this._getShaderStage(s),d=this._getShaderCacheForMaterial(n);return d.has(c)===!1&&(d.add(c),c.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let s=a.get(n);return s===void 0&&(s=new Set,a.set(n,s)),s}_getShaderStage(n){const a=this.shaderCache;let s=a.get(n);return s===void 0&&(s=new vR(n),a.set(n,s)),s}}class vR{constructor(n){this.id=gR++,this.code=n,this.usedTimes=0}}function xR(o,n,a,s,c,f,d){const h=new cx,p=new _R,_=new Set,v=[],m=c.logarithmicDepthBuffer,y=c.vertexTextures;let M=c.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(N){return _.add(N),N===0?"uv":`uv${N}`}function S(N,C,k,ht,ut){const yt=ht.fog,gt=ut.geometry,Z=N.isMeshStandardMaterial?ht.environment:null,lt=(N.isMeshStandardMaterial?a:n).get(N.envMap||Z),et=lt&&lt.mapping===vu?lt.image.height:null,Tt=A[N.type];N.precision!==null&&(M=c.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const F=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,P=F!==void 0?F.length:0;let At=0;gt.morphAttributes.position!==void 0&&(At=1),gt.morphAttributes.normal!==void 0&&(At=2),gt.morphAttributes.color!==void 0&&(At=3);let Ot,b,G,st;if(Tt){const Te=ki[Tt];Ot=Te.vertexShader,b=Te.fragmentShader}else Ot=N.vertexShader,b=N.fragmentShader,p.update(N),G=p.getVertexShaderID(N),st=p.getFragmentShaderID(N);const $=o.getRenderTarget(),vt=o.state.buffers.depth.getReversed(),Dt=ut.isInstancedMesh===!0,bt=ut.isBatchedMesh===!0,Mt=!!N.map,wt=!!N.matcap,Zt=!!lt,I=!!N.aoMap,Ae=!!N.lightMap,Jt=!!N.bumpMap,Yt=!!N.normalMap,Nt=!!N.displacementMap,oe=!!N.emissiveMap,Xt=!!N.metalnessMap,L=!!N.roughnessMap,T=N.anisotropy>0,at=N.clearcoat>0,xt=N.dispersion>0,Et=N.iridescence>0,_t=N.sheen>0,Kt=N.transmission>0,It=T&&!!N.anisotropyMap,Bt=at&&!!N.clearcoatMap,he=at&&!!N.clearcoatNormalMap,Rt=at&&!!N.clearcoatRoughnessMap,jt=Et&&!!N.iridescenceMap,ee=Et&&!!N.iridescenceThicknessMap,ae=_t&&!!N.sheenColorMap,qt=_t&&!!N.sheenRoughnessMap,ge=!!N.specularMap,ce=!!N.specularColorMap,Ie=!!N.specularIntensityMap,j=Kt&&!!N.transmissionMap,Ht=Kt&&!!N.thicknessMap,dt=!!N.gradientMap,St=!!N.alphaMap,Gt=N.alphaTest>0,Vt=!!N.alphaHash,le=!!N.extensions;let Ze=sr;N.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ze=o.toneMapping);const gn={shaderID:Tt,shaderType:N.type,shaderName:N.name,vertexShader:Ot,fragmentShader:b,defines:N.defines,customVertexShaderID:G,customFragmentShaderID:st,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:bt,batchingColor:bt&&ut._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&ut.instanceColor!==null,instancingMorph:Dt&&ut.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:$===null?o.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:so,alphaToCoverage:!!N.alphaToCoverage,map:Mt,matcap:wt,envMap:Zt,envMapMode:Zt&&lt.mapping,envMapCubeUVHeight:et,aoMap:I,lightMap:Ae,bumpMap:Jt,normalMap:Yt,displacementMap:y&&Nt,emissiveMap:oe,normalMapObjectSpace:Yt&&N.normalMapType===WM,normalMapTangentSpace:Yt&&N.normalMapType===YM,metalnessMap:Xt,roughnessMap:L,anisotropy:T,anisotropyMap:It,clearcoat:at,clearcoatMap:Bt,clearcoatNormalMap:he,clearcoatRoughnessMap:Rt,dispersion:xt,iridescence:Et,iridescenceMap:jt,iridescenceThicknessMap:ee,sheen:_t,sheenColorMap:ae,sheenRoughnessMap:qt,specularMap:ge,specularColorMap:ce,specularIntensityMap:Ie,transmission:Kt,transmissionMap:j,thicknessMap:Ht,gradientMap:dt,opaque:N.transparent===!1&&N.blending===Js&&N.alphaToCoverage===!1,alphaMap:St,alphaTest:Gt,alphaHash:Vt,combine:N.combine,mapUv:Mt&&w(N.map.channel),aoMapUv:I&&w(N.aoMap.channel),lightMapUv:Ae&&w(N.lightMap.channel),bumpMapUv:Jt&&w(N.bumpMap.channel),normalMapUv:Yt&&w(N.normalMap.channel),displacementMapUv:Nt&&w(N.displacementMap.channel),emissiveMapUv:oe&&w(N.emissiveMap.channel),metalnessMapUv:Xt&&w(N.metalnessMap.channel),roughnessMapUv:L&&w(N.roughnessMap.channel),anisotropyMapUv:It&&w(N.anisotropyMap.channel),clearcoatMapUv:Bt&&w(N.clearcoatMap.channel),clearcoatNormalMapUv:he&&w(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&w(N.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&w(N.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&w(N.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&w(N.sheenColorMap.channel),sheenRoughnessMapUv:qt&&w(N.sheenRoughnessMap.channel),specularMapUv:ge&&w(N.specularMap.channel),specularColorMapUv:ce&&w(N.specularColorMap.channel),specularIntensityMapUv:Ie&&w(N.specularIntensityMap.channel),transmissionMapUv:j&&w(N.transmissionMap.channel),thicknessMapUv:Ht&&w(N.thicknessMap.channel),alphaMapUv:St&&w(N.alphaMap.channel),vertexTangents:!!gt.attributes.tangent&&(Yt||T),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!gt.attributes.uv&&(Mt||St),fog:!!yt,useFog:N.fog===!0,fogExp2:!!yt&&yt.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:vt,skinning:ut.isSkinnedMesh===!0,morphTargets:gt.morphAttributes.position!==void 0,morphNormals:gt.morphAttributes.normal!==void 0,morphColors:gt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:At,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Mt&&N.map.isVideoTexture===!0&&De.getTransfer(N.map.colorSpace)===Fe,decodeVideoTextureEmissive:oe&&N.emissiveMap.isVideoTexture===!0&&De.getTransfer(N.emissiveMap.colorSpace)===Fe,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ga,flipSided:N.side===Zn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:le&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&N.extensions.multiDraw===!0||bt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return gn.vertexUv1s=_.has(1),gn.vertexUv2s=_.has(2),gn.vertexUv3s=_.has(3),_.clear(),gn}function x(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const k in N.defines)C.push(k),C.push(N.defines[k]);return N.isRawShaderMaterial===!1&&(H(C,N),B(C,N),C.push(o.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function H(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function B(N,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),N.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),N.push(h.mask)}function D(N){const C=A[N.type];let k;if(C){const ht=ki[C];k=VE.clone(ht.uniforms)}else k=N.uniforms;return k}function W(N,C){let k;for(let ht=0,ut=v.length;ht<ut;ht++){const yt=v[ht];if(yt.cacheKey===C){k=yt,++k.usedTimes;break}}return k===void 0&&(k=new mR(o,C,N,f),v.push(k)),k}function X(N){if(--N.usedTimes===0){const C=v.indexOf(N);v[C]=v[v.length-1],v.pop(),N.destroy()}}function z(N){p.remove(N)}function q(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:D,acquireProgram:W,releaseProgram:X,releaseShaderCache:z,programs:v,dispose:q}}function yR(){let o=new WeakMap;function n(d){return o.has(d)}function a(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function c(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:n,get:a,remove:s,update:c,dispose:f}}function SR(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.material.id!==n.material.id?o.material.id-n.material.id:o.z!==n.z?o.z-n.z:o.id-n.id}function F0(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.z!==n.z?n.z-o.z:o.id-n.id}function H0(){const o=[];let n=0;const a=[],s=[],c=[];function f(){n=0,a.length=0,s.length=0,c.length=0}function d(m,y,M,A,w,S){let x=o[n];return x===void 0?(x={id:m.id,object:m,geometry:y,material:M,groupOrder:A,renderOrder:m.renderOrder,z:w,group:S},o[n]=x):(x.id=m.id,x.object=m,x.geometry=y,x.material=M,x.groupOrder=A,x.renderOrder=m.renderOrder,x.z=w,x.group=S),n++,x}function h(m,y,M,A,w,S){const x=d(m,y,M,A,w,S);M.transmission>0?s.push(x):M.transparent===!0?c.push(x):a.push(x)}function p(m,y,M,A,w,S){const x=d(m,y,M,A,w,S);M.transmission>0?s.unshift(x):M.transparent===!0?c.unshift(x):a.unshift(x)}function _(m,y){a.length>1&&a.sort(m||SR),s.length>1&&s.sort(y||F0),c.length>1&&c.sort(y||F0)}function v(){for(let m=n,y=o.length;m<y;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:c,init:f,push:h,unshift:p,finish:v,sort:_}}function MR(){let o=new WeakMap;function n(s,c){const f=o.get(s);let d;return f===void 0?(d=new H0,o.set(s,[d])):c>=f.length?(d=new H0,f.push(d)):d=f[c],d}function a(){o=new WeakMap}return{get:n,dispose:a}}function ER(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new ft,color:new ze};break;case"SpotLight":a={position:new ft,direction:new ft,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new ft,color:new ze,distance:0,decay:0};break;case"HemisphereLight":a={direction:new ft,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":a={color:new ze,position:new ft,halfWidth:new ft,halfHeight:new ft};break}return o[n.id]=a,a}}}function TR(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[n.id]=a,a}}}let bR=0;function AR(o,n){return(n.castShadow?2:0)-(o.castShadow?2:0)+(n.map?1:0)-(o.map?1:0)}function RR(o){const n=new ER,a=TR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)s.probe.push(new ft);const c=new ft,f=new fn,d=new fn;function h(_){let v=0,m=0,y=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let M=0,A=0,w=0,S=0,x=0,H=0,B=0,D=0,W=0,X=0,z=0;_.sort(AR);for(let N=0,C=_.length;N<C;N++){const k=_[N],ht=k.color,ut=k.intensity,yt=k.distance,gt=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)v+=ht.r*ut,m+=ht.g*ut,y+=ht.b*ut;else if(k.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(k.sh.coefficients[Z],ut);z++}else if(k.isDirectionalLight){const Z=n.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const lt=k.shadow,et=a.get(k);et.shadowIntensity=lt.intensity,et.shadowBias=lt.bias,et.shadowNormalBias=lt.normalBias,et.shadowRadius=lt.radius,et.shadowMapSize=lt.mapSize,s.directionalShadow[M]=et,s.directionalShadowMap[M]=gt,s.directionalShadowMatrix[M]=k.shadow.matrix,H++}s.directional[M]=Z,M++}else if(k.isSpotLight){const Z=n.get(k);Z.position.setFromMatrixPosition(k.matrixWorld),Z.color.copy(ht).multiplyScalar(ut),Z.distance=yt,Z.coneCos=Math.cos(k.angle),Z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Z.decay=k.decay,s.spot[w]=Z;const lt=k.shadow;if(k.map&&(s.spotLightMap[W]=k.map,W++,lt.updateMatrices(k),k.castShadow&&X++),s.spotLightMatrix[w]=lt.matrix,k.castShadow){const et=a.get(k);et.shadowIntensity=lt.intensity,et.shadowBias=lt.bias,et.shadowNormalBias=lt.normalBias,et.shadowRadius=lt.radius,et.shadowMapSize=lt.mapSize,s.spotShadow[w]=et,s.spotShadowMap[w]=gt,D++}w++}else if(k.isRectAreaLight){const Z=n.get(k);Z.color.copy(ht).multiplyScalar(ut),Z.halfWidth.set(k.width*.5,0,0),Z.halfHeight.set(0,k.height*.5,0),s.rectArea[S]=Z,S++}else if(k.isPointLight){const Z=n.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),Z.distance=k.distance,Z.decay=k.decay,k.castShadow){const lt=k.shadow,et=a.get(k);et.shadowIntensity=lt.intensity,et.shadowBias=lt.bias,et.shadowNormalBias=lt.normalBias,et.shadowRadius=lt.radius,et.shadowMapSize=lt.mapSize,et.shadowCameraNear=lt.camera.near,et.shadowCameraFar=lt.camera.far,s.pointShadow[A]=et,s.pointShadowMap[A]=gt,s.pointShadowMatrix[A]=k.shadow.matrix,B++}s.point[A]=Z,A++}else if(k.isHemisphereLight){const Z=n.get(k);Z.skyColor.copy(k.color).multiplyScalar(ut),Z.groundColor.copy(k.groundColor).multiplyScalar(ut),s.hemi[x]=Z,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=m,s.ambient[2]=y;const q=s.hash;(q.directionalLength!==M||q.pointLength!==A||q.spotLength!==w||q.rectAreaLength!==S||q.hemiLength!==x||q.numDirectionalShadows!==H||q.numPointShadows!==B||q.numSpotShadows!==D||q.numSpotMaps!==W||q.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=S,s.point.length=A,s.hemi.length=x,s.directionalShadow.length=H,s.directionalShadowMap.length=H,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=H,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=D+W-X,s.spotLightMap.length=W,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=z,q.directionalLength=M,q.pointLength=A,q.spotLength=w,q.rectAreaLength=S,q.hemiLength=x,q.numDirectionalShadows=H,q.numPointShadows=B,q.numSpotShadows=D,q.numSpotMaps=W,q.numLightProbes=z,s.version=bR++)}function p(_,v){let m=0,y=0,M=0,A=0,w=0;const S=v.matrixWorldInverse;for(let x=0,H=_.length;x<H;x++){const B=_[x];if(B.isDirectionalLight){const D=s.directional[m];D.direction.setFromMatrixPosition(B.matrixWorld),c.setFromMatrixPosition(B.target.matrixWorld),D.direction.sub(c),D.direction.transformDirection(S),m++}else if(B.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(B.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(B.matrixWorld),c.setFromMatrixPosition(B.target.matrixWorld),D.direction.sub(c),D.direction.transformDirection(S),M++}else if(B.isRectAreaLight){const D=s.rectArea[A];D.position.setFromMatrixPosition(B.matrixWorld),D.position.applyMatrix4(S),d.identity(),f.copy(B.matrixWorld),f.premultiply(S),d.extractRotation(f),D.halfWidth.set(B.width*.5,0,0),D.halfHeight.set(0,B.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),A++}else if(B.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(B.matrixWorld),D.position.applyMatrix4(S),y++}else if(B.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(B.matrixWorld),D.direction.transformDirection(S),w++}}}return{setup:h,setupView:p,state:s}}function G0(o){const n=new RR(o),a=[],s=[];function c(v){_.camera=v,a.length=0,s.length=0}function f(v){a.push(v)}function d(v){s.push(v)}function h(){n.setup(a)}function p(v){n.setupView(a,v)}const _={lightsArray:a,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:c,state:_,setupLights:h,setupLightsView:p,pushLight:f,pushShadow:d}}function CR(o){let n=new WeakMap;function a(c,f=0){const d=n.get(c);let h;return d===void 0?(h=new G0(o),n.set(c,[h])):f>=d.length?(h=new G0(o),d.push(h)):h=d[f],h}function s(){n=new WeakMap}return{get:a,dispose:s}}const wR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DR=`uniform sampler2D shadow_pass;
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
}`;function NR(o,n,a){let s=new gx;const c=new Xe,f=new Xe,d=new an,h=new JE({depthPacking:qM}),p=new $E,_={},v=a.maxTextureSize,m={[or]:Zn,[Zn]:or,[ga]:ga},y=new Ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:wR,fragmentShader:DR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new Yr;A.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Wn(A,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0;let x=this.type;this.render=function(X,z,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||X.length===0)return;const N=o.getRenderTarget(),C=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),ht=o.state;ht.setBlending(rr),ht.buffers.color.setClear(1,1,1,1),ht.buffers.depth.setTest(!0),ht.setScissorTest(!1);const ut=x!==ma&&this.type===ma,yt=x===ma&&this.type!==ma;for(let gt=0,Z=X.length;gt<Z;gt++){const lt=X[gt],et=lt.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;c.copy(et.mapSize);const Tt=et.getFrameExtents();if(c.multiply(Tt),f.copy(et.mapSize),(c.x>v||c.y>v)&&(c.x>v&&(f.x=Math.floor(v/Tt.x),c.x=f.x*Tt.x,et.mapSize.x=f.x),c.y>v&&(f.y=Math.floor(v/Tt.y),c.y=f.y*Tt.y,et.mapSize.y=f.y)),et.map===null||ut===!0||yt===!0){const P=this.type!==ma?{minFilter:Di,magFilter:Di}:{};et.map!==null&&et.map.dispose(),et.map=new qr(c.x,c.y,P),et.map.texture.name=lt.name+".shadowMap",et.camera.updateProjectionMatrix()}o.setRenderTarget(et.map),o.clear();const F=et.getViewportCount();for(let P=0;P<F;P++){const At=et.getViewport(P);d.set(f.x*At.x,f.y*At.y,f.x*At.z,f.y*At.w),ht.viewport(d),et.updateMatrices(lt,P),s=et.getFrustum(),D(z,q,et.camera,lt,this.type)}et.isPointLightShadow!==!0&&this.type===ma&&H(et,q),et.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(N,C,k)};function H(X,z){const q=n.update(w);y.defines.VSM_SAMPLES!==X.blurSamples&&(y.defines.VSM_SAMPLES=X.blurSamples,M.defines.VSM_SAMPLES=X.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),X.mapPass===null&&(X.mapPass=new qr(c.x,c.y)),y.uniforms.shadow_pass.value=X.map.texture,y.uniforms.resolution.value=X.mapSize,y.uniforms.radius.value=X.radius,o.setRenderTarget(X.mapPass),o.clear(),o.renderBufferDirect(z,null,q,y,w,null),M.uniforms.shadow_pass.value=X.mapPass.texture,M.uniforms.resolution.value=X.mapSize,M.uniforms.radius.value=X.radius,o.setRenderTarget(X.map),o.clear(),o.renderBufferDirect(z,null,q,M,w,null)}function B(X,z,q,N){let C=null;const k=q.isPointLight===!0?X.customDistanceMaterial:X.customDepthMaterial;if(k!==void 0)C=k;else if(C=q.isPointLight===!0?p:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ht=C.uuid,ut=z.uuid;let yt=_[ht];yt===void 0&&(yt={},_[ht]=yt);let gt=yt[ut];gt===void 0&&(gt=C.clone(),yt[ut]=gt,z.addEventListener("dispose",W)),C=gt}if(C.visible=z.visible,C.wireframe=z.wireframe,N===ma?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:m[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ht=o.properties.get(C);ht.light=q}return C}function D(X,z,q,N,C){if(X.visible===!1)return;if(X.layers.test(z.layers)&&(X.isMesh||X.isLine||X.isPoints)&&(X.castShadow||X.receiveShadow&&C===ma)&&(!X.frustumCulled||s.intersectsObject(X))){X.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,X.matrixWorld);const ut=n.update(X),yt=X.material;if(Array.isArray(yt)){const gt=ut.groups;for(let Z=0,lt=gt.length;Z<lt;Z++){const et=gt[Z],Tt=yt[et.materialIndex];if(Tt&&Tt.visible){const F=B(X,Tt,N,C);X.onBeforeShadow(o,X,z,q,ut,F,et),o.renderBufferDirect(q,null,ut,F,X,et),X.onAfterShadow(o,X,z,q,ut,F,et)}}}else if(yt.visible){const gt=B(X,yt,N,C);X.onBeforeShadow(o,X,z,q,ut,gt,null),o.renderBufferDirect(q,null,ut,gt,X,null),X.onAfterShadow(o,X,z,q,ut,gt,null)}}const ht=X.children;for(let ut=0,yt=ht.length;ut<yt;ut++)D(ht[ut],z,q,N,C)}function W(X){X.target.removeEventListener("dispose",W);for(const q in _){const N=_[q],C=X.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const UR={[Nh]:Uh,[Lh]:zh,[Oh]:Ih,[eo]:Ph,[Uh]:Nh,[zh]:Lh,[Ih]:Oh,[Ph]:eo};function LR(o,n){function a(){let j=!1;const Ht=new an;let dt=null;const St=new an(0,0,0,0);return{setMask:function(Gt){dt!==Gt&&!j&&(o.colorMask(Gt,Gt,Gt,Gt),dt=Gt)},setLocked:function(Gt){j=Gt},setClear:function(Gt,Vt,le,Ze,gn){gn===!0&&(Gt*=Ze,Vt*=Ze,le*=Ze),Ht.set(Gt,Vt,le,Ze),St.equals(Ht)===!1&&(o.clearColor(Gt,Vt,le,Ze),St.copy(Ht))},reset:function(){j=!1,dt=null,St.set(-1,0,0,0)}}}function s(){let j=!1,Ht=!1,dt=null,St=null,Gt=null;return{setReversed:function(Vt){if(Ht!==Vt){const le=n.get("EXT_clip_control");Ht?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT);const Ze=Gt;Gt=null,this.setClear(Ze)}Ht=Vt},getReversed:function(){return Ht},setTest:function(Vt){Vt?$(o.DEPTH_TEST):vt(o.DEPTH_TEST)},setMask:function(Vt){dt!==Vt&&!j&&(o.depthMask(Vt),dt=Vt)},setFunc:function(Vt){if(Ht&&(Vt=UR[Vt]),St!==Vt){switch(Vt){case Nh:o.depthFunc(o.NEVER);break;case Uh:o.depthFunc(o.ALWAYS);break;case Lh:o.depthFunc(o.LESS);break;case eo:o.depthFunc(o.LEQUAL);break;case Oh:o.depthFunc(o.EQUAL);break;case Ph:o.depthFunc(o.GEQUAL);break;case zh:o.depthFunc(o.GREATER);break;case Ih:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}St=Vt}},setLocked:function(Vt){j=Vt},setClear:function(Vt){Gt!==Vt&&(Ht&&(Vt=1-Vt),o.clearDepth(Vt),Gt=Vt)},reset:function(){j=!1,dt=null,St=null,Gt=null,Ht=!1}}}function c(){let j=!1,Ht=null,dt=null,St=null,Gt=null,Vt=null,le=null,Ze=null,gn=null;return{setTest:function(Te){j||(Te?$(o.STENCIL_TEST):vt(o.STENCIL_TEST))},setMask:function(Te){Ht!==Te&&!j&&(o.stencilMask(Te),Ht=Te)},setFunc:function(Te,Ye,_n){(dt!==Te||St!==Ye||Gt!==_n)&&(o.stencilFunc(Te,Ye,_n),dt=Te,St=Ye,Gt=_n)},setOp:function(Te,Ye,_n){(Vt!==Te||le!==Ye||Ze!==_n)&&(o.stencilOp(Te,Ye,_n),Vt=Te,le=Ye,Ze=_n)},setLocked:function(Te){j=Te},setClear:function(Te){gn!==Te&&(o.clearStencil(Te),gn=Te)},reset:function(){j=!1,Ht=null,dt=null,St=null,Gt=null,Vt=null,le=null,Ze=null,gn=null}}}const f=new a,d=new s,h=new c,p=new WeakMap,_=new WeakMap;let v={},m={},y=new WeakMap,M=[],A=null,w=!1,S=null,x=null,H=null,B=null,D=null,W=null,X=null,z=new ze(0,0,0),q=0,N=!1,C=null,k=null,ht=null,ut=null,yt=null;const gt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,lt=0;const et=o.getParameter(o.VERSION);et.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(et)[1]),Z=lt>=1):et.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),Z=lt>=2);let Tt=null,F={};const P=o.getParameter(o.SCISSOR_BOX),At=o.getParameter(o.VIEWPORT),Ot=new an().fromArray(P),b=new an().fromArray(At);function G(j,Ht,dt,St){const Gt=new Uint8Array(4),Vt=o.createTexture();o.bindTexture(j,Vt),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let le=0;le<dt;le++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Ht,0,o.RGBA,1,1,St,0,o.RGBA,o.UNSIGNED_BYTE,Gt):o.texImage2D(Ht+le,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Gt);return Vt}const st={};st[o.TEXTURE_2D]=G(o.TEXTURE_2D,o.TEXTURE_2D,1),st[o.TEXTURE_CUBE_MAP]=G(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[o.TEXTURE_2D_ARRAY]=G(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),st[o.TEXTURE_3D]=G(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),$(o.DEPTH_TEST),d.setFunc(eo),Jt(!1),Yt(kv),$(o.CULL_FACE),I(rr);function $(j){v[j]!==!0&&(o.enable(j),v[j]=!0)}function vt(j){v[j]!==!1&&(o.disable(j),v[j]=!1)}function Dt(j,Ht){return m[j]!==Ht?(o.bindFramebuffer(j,Ht),m[j]=Ht,j===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Ht),j===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Ht),!0):!1}function bt(j,Ht){let dt=M,St=!1;if(j){dt=y.get(Ht),dt===void 0&&(dt=[],y.set(Ht,dt));const Gt=j.textures;if(dt.length!==Gt.length||dt[0]!==o.COLOR_ATTACHMENT0){for(let Vt=0,le=Gt.length;Vt<le;Vt++)dt[Vt]=o.COLOR_ATTACHMENT0+Vt;dt.length=Gt.length,St=!0}}else dt[0]!==o.BACK&&(dt[0]=o.BACK,St=!0);St&&o.drawBuffers(dt)}function Mt(j){return A!==j?(o.useProgram(j),A=j,!0):!1}const wt={[Hr]:o.FUNC_ADD,[vM]:o.FUNC_SUBTRACT,[xM]:o.FUNC_REVERSE_SUBTRACT};wt[yM]=o.MIN,wt[SM]=o.MAX;const Zt={[MM]:o.ZERO,[EM]:o.ONE,[TM]:o.SRC_COLOR,[wh]:o.SRC_ALPHA,[DM]:o.SRC_ALPHA_SATURATE,[CM]:o.DST_COLOR,[AM]:o.DST_ALPHA,[bM]:o.ONE_MINUS_SRC_COLOR,[Dh]:o.ONE_MINUS_SRC_ALPHA,[wM]:o.ONE_MINUS_DST_COLOR,[RM]:o.ONE_MINUS_DST_ALPHA,[NM]:o.CONSTANT_COLOR,[UM]:o.ONE_MINUS_CONSTANT_COLOR,[LM]:o.CONSTANT_ALPHA,[OM]:o.ONE_MINUS_CONSTANT_ALPHA};function I(j,Ht,dt,St,Gt,Vt,le,Ze,gn,Te){if(j===rr){w===!0&&(vt(o.BLEND),w=!1);return}if(w===!1&&($(o.BLEND),w=!0),j!==_M){if(j!==S||Te!==N){if((x!==Hr||D!==Hr)&&(o.blendEquation(o.FUNC_ADD),x=Hr,D=Hr),Te)switch(j){case Js:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jv:o.blendFunc(o.ONE,o.ONE);break;case qv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Yv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Js:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case qv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Yv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}H=null,B=null,W=null,X=null,z.set(0,0,0),q=0,S=j,N=Te}return}Gt=Gt||Ht,Vt=Vt||dt,le=le||St,(Ht!==x||Gt!==D)&&(o.blendEquationSeparate(wt[Ht],wt[Gt]),x=Ht,D=Gt),(dt!==H||St!==B||Vt!==W||le!==X)&&(o.blendFuncSeparate(Zt[dt],Zt[St],Zt[Vt],Zt[le]),H=dt,B=St,W=Vt,X=le),(Ze.equals(z)===!1||gn!==q)&&(o.blendColor(Ze.r,Ze.g,Ze.b,gn),z.copy(Ze),q=gn),S=j,N=!1}function Ae(j,Ht){j.side===ga?vt(o.CULL_FACE):$(o.CULL_FACE);let dt=j.side===Zn;Ht&&(dt=!dt),Jt(dt),j.blending===Js&&j.transparent===!1?I(rr):I(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),f.setMask(j.colorWrite);const St=j.stencilWrite;h.setTest(St),St&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),oe(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?$(o.SAMPLE_ALPHA_TO_COVERAGE):vt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(j){C!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),C=j)}function Yt(j){j!==pM?($(o.CULL_FACE),j!==k&&(j===kv?o.cullFace(o.BACK):j===mM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):vt(o.CULL_FACE),k=j}function Nt(j){j!==ht&&(Z&&o.lineWidth(j),ht=j)}function oe(j,Ht,dt){j?($(o.POLYGON_OFFSET_FILL),(ut!==Ht||yt!==dt)&&(o.polygonOffset(Ht,dt),ut=Ht,yt=dt)):vt(o.POLYGON_OFFSET_FILL)}function Xt(j){j?$(o.SCISSOR_TEST):vt(o.SCISSOR_TEST)}function L(j){j===void 0&&(j=o.TEXTURE0+gt-1),Tt!==j&&(o.activeTexture(j),Tt=j)}function T(j,Ht,dt){dt===void 0&&(Tt===null?dt=o.TEXTURE0+gt-1:dt=Tt);let St=F[dt];St===void 0&&(St={type:void 0,texture:void 0},F[dt]=St),(St.type!==j||St.texture!==Ht)&&(Tt!==dt&&(o.activeTexture(dt),Tt=dt),o.bindTexture(j,Ht||st[j]),St.type=j,St.texture=Ht)}function at(){const j=F[Tt];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function xt(){try{o.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Et(){try{o.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _t(){try{o.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Kt(){try{o.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function It(){try{o.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Bt(){try{o.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function he(){try{o.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Rt(){try{o.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function jt(){try{o.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ee(){try{o.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ae(j){Ot.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),Ot.copy(j))}function qt(j){b.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),b.copy(j))}function ge(j,Ht){let dt=_.get(Ht);dt===void 0&&(dt=new WeakMap,_.set(Ht,dt));let St=dt.get(j);St===void 0&&(St=o.getUniformBlockIndex(Ht,j.name),dt.set(j,St))}function ce(j,Ht){const St=_.get(Ht).get(j);p.get(Ht)!==St&&(o.uniformBlockBinding(Ht,St,j.__bindingPointIndex),p.set(Ht,St))}function Ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Tt=null,F={},m={},y=new WeakMap,M=[],A=null,w=!1,S=null,x=null,H=null,B=null,D=null,W=null,X=null,z=new ze(0,0,0),q=0,N=!1,C=null,k=null,ht=null,ut=null,yt=null,Ot.set(0,0,o.canvas.width,o.canvas.height),b.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:$,disable:vt,bindFramebuffer:Dt,drawBuffers:bt,useProgram:Mt,setBlending:I,setMaterial:Ae,setFlipSided:Jt,setCullFace:Yt,setLineWidth:Nt,setPolygonOffset:oe,setScissorTest:Xt,activeTexture:L,bindTexture:T,unbindTexture:at,compressedTexImage2D:xt,compressedTexImage3D:Et,texImage2D:jt,texImage3D:ee,updateUBOMapping:ge,uniformBlockBinding:ce,texStorage2D:he,texStorage3D:Rt,texSubImage2D:_t,texSubImage3D:Kt,compressedTexSubImage2D:It,compressedTexSubImage3D:Bt,scissor:ae,viewport:qt,reset:Ie}}function OR(o,n,a,s,c,f,d){const h=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new Xe,v=new WeakMap;let m;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,T){return M?new OffscreenCanvas(L,T):ml("canvas")}function w(L,T,at){let xt=1;const Et=Xt(L);if((Et.width>at||Et.height>at)&&(xt=at/Math.max(Et.width,Et.height)),xt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const _t=Math.floor(xt*Et.width),Kt=Math.floor(xt*Et.height);m===void 0&&(m=A(_t,Kt));const It=T?A(_t,Kt):m;return It.width=_t,It.height=Kt,It.getContext("2d").drawImage(L,0,0,_t,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+_t+"x"+Kt+")."),It}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),L;return L}function S(L){return L.generateMipmaps}function x(L){o.generateMipmap(L)}function H(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function B(L,T,at,xt,Et=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _t=T;if(T===o.RED&&(at===o.FLOAT&&(_t=o.R32F),at===o.HALF_FLOAT&&(_t=o.R16F),at===o.UNSIGNED_BYTE&&(_t=o.R8)),T===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.R8UI),at===o.UNSIGNED_SHORT&&(_t=o.R16UI),at===o.UNSIGNED_INT&&(_t=o.R32UI),at===o.BYTE&&(_t=o.R8I),at===o.SHORT&&(_t=o.R16I),at===o.INT&&(_t=o.R32I)),T===o.RG&&(at===o.FLOAT&&(_t=o.RG32F),at===o.HALF_FLOAT&&(_t=o.RG16F),at===o.UNSIGNED_BYTE&&(_t=o.RG8)),T===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.RG8UI),at===o.UNSIGNED_SHORT&&(_t=o.RG16UI),at===o.UNSIGNED_INT&&(_t=o.RG32UI),at===o.BYTE&&(_t=o.RG8I),at===o.SHORT&&(_t=o.RG16I),at===o.INT&&(_t=o.RG32I)),T===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),at===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),at===o.UNSIGNED_INT&&(_t=o.RGB32UI),at===o.BYTE&&(_t=o.RGB8I),at===o.SHORT&&(_t=o.RGB16I),at===o.INT&&(_t=o.RGB32I)),T===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),at===o.UNSIGNED_INT&&(_t=o.RGBA32UI),at===o.BYTE&&(_t=o.RGBA8I),at===o.SHORT&&(_t=o.RGBA16I),at===o.INT&&(_t=o.RGBA32I)),T===o.RGB&&at===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),T===o.RGBA){const Kt=Et?gu:De.getTransfer(xt);at===o.FLOAT&&(_t=o.RGBA32F),at===o.HALF_FLOAT&&(_t=o.RGBA16F),at===o.UNSIGNED_BYTE&&(_t=Kt===Fe?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&n.get("EXT_color_buffer_float"),_t}function D(L,T){let at;return L?T===null||T===jr||T===ao?at=o.DEPTH24_STENCIL8:T===va?at=o.DEPTH32F_STENCIL8:T===hl&&(at=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===jr||T===ao?at=o.DEPTH_COMPONENT24:T===va?at=o.DEPTH_COMPONENT32F:T===hl&&(at=o.DEPTH_COMPONENT16),at}function W(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Di&&L.minFilter!==ji?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function X(L){const T=L.target;T.removeEventListener("dispose",X),q(T),T.isVideoTexture&&v.delete(T)}function z(L){const T=L.target;T.removeEventListener("dispose",z),C(T)}function q(L){const T=s.get(L);if(T.__webglInit===void 0)return;const at=L.source,xt=y.get(at);if(xt){const Et=xt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&N(L),Object.keys(xt).length===0&&y.delete(at)}s.remove(L)}function N(L){const T=s.get(L);o.deleteTexture(T.__webglTexture);const at=L.source,xt=y.get(at);delete xt[T.__cacheKey],d.memory.textures--}function C(L){const T=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(T.__webglFramebuffer[xt]))for(let Et=0;Et<T.__webglFramebuffer[xt].length;Et++)o.deleteFramebuffer(T.__webglFramebuffer[xt][Et]);else o.deleteFramebuffer(T.__webglFramebuffer[xt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[xt])}else{if(Array.isArray(T.__webglFramebuffer))for(let xt=0;xt<T.__webglFramebuffer.length;xt++)o.deleteFramebuffer(T.__webglFramebuffer[xt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xt=0;xt<T.__webglColorRenderbuffer.length;xt++)T.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[xt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const at=L.textures;for(let xt=0,Et=at.length;xt<Et;xt++){const _t=s.get(at[xt]);_t.__webglTexture&&(o.deleteTexture(_t.__webglTexture),d.memory.textures--),s.remove(at[xt])}s.remove(L)}let k=0;function ht(){k=0}function ut(){const L=k;return L>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c.maxTextures),k+=1,L}function yt(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function gt(L,T){const at=s.get(L);if(L.isVideoTexture&&Nt(L),L.isRenderTargetTexture===!1&&L.version>0&&at.__version!==L.version){const xt=L.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{b(at,L,T);return}}a.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+T)}function Z(L,T){const at=s.get(L);if(L.version>0&&at.__version!==L.version){b(at,L,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+T)}function lt(L,T){const at=s.get(L);if(L.version>0&&at.__version!==L.version){b(at,L,T);return}a.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+T)}function et(L,T){const at=s.get(L);if(L.version>0&&at.__version!==L.version){G(at,L,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+T)}const Tt={[Hh]:o.REPEAT,[Vr]:o.CLAMP_TO_EDGE,[Gh]:o.MIRRORED_REPEAT},F={[Di]:o.NEAREST,[kM]:o.NEAREST_MIPMAP_NEAREST,[Xc]:o.NEAREST_MIPMAP_LINEAR,[ji]:o.LINEAR,[th]:o.LINEAR_MIPMAP_NEAREST,[Xr]:o.LINEAR_MIPMAP_LINEAR},P={[ZM]:o.NEVER,[eE]:o.ALWAYS,[KM]:o.LESS,[sx]:o.LEQUAL,[QM]:o.EQUAL,[tE]:o.GEQUAL,[JM]:o.GREATER,[$M]:o.NOTEQUAL};function At(L,T){if(T.type===va&&n.has("OES_texture_float_linear")===!1&&(T.magFilter===ji||T.magFilter===th||T.magFilter===Xc||T.magFilter===Xr||T.minFilter===ji||T.minFilter===th||T.minFilter===Xc||T.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,Tt[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,Tt[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,Tt[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,F[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,F[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,P[T.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Di||T.minFilter!==Xc&&T.minFilter!==Xr||T.type===va&&n.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const at=n.get("EXT_texture_filter_anisotropic");o.texParameterf(L,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,c.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ot(L,T){let at=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",X));const xt=T.source;let Et=y.get(xt);Et===void 0&&(Et={},y.set(xt,Et));const _t=yt(T);if(_t!==L.__cacheKey){Et[_t]===void 0&&(Et[_t]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,at=!0),Et[_t].usedTimes++;const Kt=Et[L.__cacheKey];Kt!==void 0&&(Et[L.__cacheKey].usedTimes--,Kt.usedTimes===0&&N(T)),L.__cacheKey=_t,L.__webglTexture=Et[_t].texture}return at}function b(L,T,at){let xt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xt=o.TEXTURE_3D);const Et=Ot(L,T),_t=T.source;a.bindTexture(xt,L.__webglTexture,o.TEXTURE0+at);const Kt=s.get(_t);if(_t.version!==Kt.__version||Et===!0){a.activeTexture(o.TEXTURE0+at);const It=De.getPrimaries(De.workingColorSpace),Bt=T.colorSpace===ar?null:De.getPrimaries(T.colorSpace),he=T.colorSpace===ar||It===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Rt=w(T.image,!1,c.maxTextureSize);Rt=oe(T,Rt);const jt=f.convert(T.format,T.colorSpace),ee=f.convert(T.type);let ae=B(T.internalFormat,jt,ee,T.colorSpace,T.isVideoTexture);At(xt,T);let qt;const ge=T.mipmaps,ce=T.isVideoTexture!==!0,Ie=Kt.__version===void 0||Et===!0,j=_t.dataReady,Ht=W(T,Rt);if(T.isDepthTexture)ae=D(T.format===ro,T.type),Ie&&(ce?a.texStorage2D(o.TEXTURE_2D,1,ae,Rt.width,Rt.height):a.texImage2D(o.TEXTURE_2D,0,ae,Rt.width,Rt.height,0,jt,ee,null));else if(T.isDataTexture)if(ge.length>0){ce&&Ie&&a.texStorage2D(o.TEXTURE_2D,Ht,ae,ge[0].width,ge[0].height);for(let dt=0,St=ge.length;dt<St;dt++)qt=ge[dt],ce?j&&a.texSubImage2D(o.TEXTURE_2D,dt,0,0,qt.width,qt.height,jt,ee,qt.data):a.texImage2D(o.TEXTURE_2D,dt,ae,qt.width,qt.height,0,jt,ee,qt.data);T.generateMipmaps=!1}else ce?(Ie&&a.texStorage2D(o.TEXTURE_2D,Ht,ae,Rt.width,Rt.height),j&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Rt.width,Rt.height,jt,ee,Rt.data)):a.texImage2D(o.TEXTURE_2D,0,ae,Rt.width,Rt.height,0,jt,ee,Rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ce&&Ie&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,ae,ge[0].width,ge[0].height,Rt.depth);for(let dt=0,St=ge.length;dt<St;dt++)if(qt=ge[dt],T.format!==wi)if(jt!==null)if(ce){if(j)if(T.layerUpdates.size>0){const Gt=_0(qt.width,qt.height,T.format,T.type);for(const Vt of T.layerUpdates){const le=qt.data.subarray(Vt*Gt/qt.data.BYTES_PER_ELEMENT,(Vt+1)*Gt/qt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,Vt,qt.width,qt.height,1,jt,le)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,qt.width,qt.height,Rt.depth,jt,qt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,dt,ae,qt.width,qt.height,Rt.depth,0,qt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?j&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,qt.width,qt.height,Rt.depth,jt,ee,qt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,dt,ae,qt.width,qt.height,Rt.depth,0,jt,ee,qt.data)}else{ce&&Ie&&a.texStorage2D(o.TEXTURE_2D,Ht,ae,ge[0].width,ge[0].height);for(let dt=0,St=ge.length;dt<St;dt++)qt=ge[dt],T.format!==wi?jt!==null?ce?j&&a.compressedTexSubImage2D(o.TEXTURE_2D,dt,0,0,qt.width,qt.height,jt,qt.data):a.compressedTexImage2D(o.TEXTURE_2D,dt,ae,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?j&&a.texSubImage2D(o.TEXTURE_2D,dt,0,0,qt.width,qt.height,jt,ee,qt.data):a.texImage2D(o.TEXTURE_2D,dt,ae,qt.width,qt.height,0,jt,ee,qt.data)}else if(T.isDataArrayTexture)if(ce){if(Ie&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,ae,Rt.width,Rt.height,Rt.depth),j)if(T.layerUpdates.size>0){const dt=_0(Rt.width,Rt.height,T.format,T.type);for(const St of T.layerUpdates){const Gt=Rt.data.subarray(St*dt/Rt.data.BYTES_PER_ELEMENT,(St+1)*dt/Rt.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,Rt.width,Rt.height,1,jt,ee,Gt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,jt,ee,Rt.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,ae,Rt.width,Rt.height,Rt.depth,0,jt,ee,Rt.data);else if(T.isData3DTexture)ce?(Ie&&a.texStorage3D(o.TEXTURE_3D,Ht,ae,Rt.width,Rt.height,Rt.depth),j&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,jt,ee,Rt.data)):a.texImage3D(o.TEXTURE_3D,0,ae,Rt.width,Rt.height,Rt.depth,0,jt,ee,Rt.data);else if(T.isFramebufferTexture){if(Ie)if(ce)a.texStorage2D(o.TEXTURE_2D,Ht,ae,Rt.width,Rt.height);else{let dt=Rt.width,St=Rt.height;for(let Gt=0;Gt<Ht;Gt++)a.texImage2D(o.TEXTURE_2D,Gt,ae,dt,St,0,jt,ee,null),dt>>=1,St>>=1}}else if(ge.length>0){if(ce&&Ie){const dt=Xt(ge[0]);a.texStorage2D(o.TEXTURE_2D,Ht,ae,dt.width,dt.height)}for(let dt=0,St=ge.length;dt<St;dt++)qt=ge[dt],ce?j&&a.texSubImage2D(o.TEXTURE_2D,dt,0,0,jt,ee,qt):a.texImage2D(o.TEXTURE_2D,dt,ae,jt,ee,qt);T.generateMipmaps=!1}else if(ce){if(Ie){const dt=Xt(Rt);a.texStorage2D(o.TEXTURE_2D,Ht,ae,dt.width,dt.height)}j&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,jt,ee,Rt)}else a.texImage2D(o.TEXTURE_2D,0,ae,jt,ee,Rt);S(T)&&x(xt),Kt.__version=_t.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function G(L,T,at){if(T.image.length!==6)return;const xt=Ot(L,T),Et=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+at);const _t=s.get(Et);if(Et.version!==_t.__version||xt===!0){a.activeTexture(o.TEXTURE0+at);const Kt=De.getPrimaries(De.workingColorSpace),It=T.colorSpace===ar?null:De.getPrimaries(T.colorSpace),Bt=T.colorSpace===ar||Kt===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const he=T.isCompressedTexture||T.image[0].isCompressedTexture,Rt=T.image[0]&&T.image[0].isDataTexture,jt=[];for(let St=0;St<6;St++)!he&&!Rt?jt[St]=w(T.image[St],!0,c.maxCubemapSize):jt[St]=Rt?T.image[St].image:T.image[St],jt[St]=oe(T,jt[St]);const ee=jt[0],ae=f.convert(T.format,T.colorSpace),qt=f.convert(T.type),ge=B(T.internalFormat,ae,qt,T.colorSpace),ce=T.isVideoTexture!==!0,Ie=_t.__version===void 0||xt===!0,j=Et.dataReady;let Ht=W(T,ee);At(o.TEXTURE_CUBE_MAP,T);let dt;if(he){ce&&Ie&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,ge,ee.width,ee.height);for(let St=0;St<6;St++){dt=jt[St].mipmaps;for(let Gt=0;Gt<dt.length;Gt++){const Vt=dt[Gt];T.format!==wi?ae!==null?ce?j&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,0,0,Vt.width,Vt.height,ae,Vt.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,ge,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?j&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,0,0,Vt.width,Vt.height,ae,qt,Vt.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,ge,Vt.width,Vt.height,0,ae,qt,Vt.data)}}}else{if(dt=T.mipmaps,ce&&Ie){dt.length>0&&Ht++;const St=Xt(jt[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,ge,St.width,St.height)}for(let St=0;St<6;St++)if(Rt){ce?j&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,jt[St].width,jt[St].height,ae,qt,jt[St].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ge,jt[St].width,jt[St].height,0,ae,qt,jt[St].data);for(let Gt=0;Gt<dt.length;Gt++){const le=dt[Gt].image[St].image;ce?j&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,0,0,le.width,le.height,ae,qt,le.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,ge,le.width,le.height,0,ae,qt,le.data)}}else{ce?j&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,ae,qt,jt[St]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ge,ae,qt,jt[St]);for(let Gt=0;Gt<dt.length;Gt++){const Vt=dt[Gt];ce?j&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,0,0,ae,qt,Vt.image[St]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,ge,ae,qt,Vt.image[St])}}}S(T)&&x(o.TEXTURE_CUBE_MAP),_t.__version=Et.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function st(L,T,at,xt,Et,_t){const Kt=f.convert(at.format,at.colorSpace),It=f.convert(at.type),Bt=B(at.internalFormat,Kt,It,at.colorSpace),he=s.get(T),Rt=s.get(at);if(Rt.__renderTarget=T,!he.__hasExternalTextures){const jt=Math.max(1,T.width>>_t),ee=Math.max(1,T.height>>_t);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?a.texImage3D(Et,_t,Bt,jt,ee,T.depth,0,Kt,It,null):a.texImage2D(Et,_t,Bt,jt,ee,0,Kt,It,null)}a.bindFramebuffer(o.FRAMEBUFFER,L),Yt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,Et,Rt.__webglTexture,0,Jt(T)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,Et,Rt.__webglTexture,_t),a.bindFramebuffer(o.FRAMEBUFFER,null)}function $(L,T,at){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const xt=T.depthTexture,Et=xt&&xt.isDepthTexture?xt.type:null,_t=D(T.stencilBuffer,Et),Kt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=Jt(T);Yt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,It,_t,T.width,T.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,It,_t,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,_t,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Kt,o.RENDERBUFFER,L)}else{const xt=T.textures;for(let Et=0;Et<xt.length;Et++){const _t=xt[Et],Kt=f.convert(_t.format,_t.colorSpace),It=f.convert(_t.type),Bt=B(_t.internalFormat,Kt,It,_t.colorSpace),he=Jt(T);at&&Yt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,he,Bt,T.width,T.height):Yt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,he,Bt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function vt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(T.depthTexture);xt.__renderTarget=T,(!xt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),gt(T.depthTexture,0);const Et=xt.__webglTexture,_t=Jt(T);if(T.depthTexture.format===$s)Yt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(T.depthTexture.format===ro)Yt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Dt(L){const T=s.get(L),at=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const xt=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xt.removeEventListener("dispose",Et)};xt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=xt}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");vt(T.__webglFramebuffer,L)}else if(at){T.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[xt]),T.__webglDepthbuffer[xt]===void 0)T.__webglDepthbuffer[xt]=o.createRenderbuffer(),$(T.__webglDepthbuffer[xt],L,!1);else{const Et=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer[xt];o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,_t)}}else if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),$(T.__webglDepthbuffer,L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Et=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Et),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,Et)}a.bindFramebuffer(o.FRAMEBUFFER,null)}function bt(L,T,at){const xt=s.get(L);T!==void 0&&st(xt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&Dt(L)}function Mt(L){const T=L.texture,at=s.get(L),xt=s.get(T);L.addEventListener("dispose",z);const Et=L.textures,_t=L.isWebGLCubeRenderTarget===!0,Kt=Et.length>1;if(Kt||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=T.version,d.memory.textures++),_t){at.__webglFramebuffer=[];for(let It=0;It<6;It++)if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer[It]=[];for(let Bt=0;Bt<T.mipmaps.length;Bt++)at.__webglFramebuffer[It][Bt]=o.createFramebuffer()}else at.__webglFramebuffer[It]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer=[];for(let It=0;It<T.mipmaps.length;It++)at.__webglFramebuffer[It]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(Kt)for(let It=0,Bt=Et.length;It<Bt;It++){const he=s.get(Et[It]);he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&Yt(L)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let It=0;It<Et.length;It++){const Bt=Et[It];at.__webglColorRenderbuffer[It]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[It]);const he=f.convert(Bt.format,Bt.colorSpace),Rt=f.convert(Bt.type),jt=B(Bt.internalFormat,he,Rt,Bt.colorSpace,L.isXRRenderTarget===!0),ee=Jt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,jt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,at.__webglColorRenderbuffer[It])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),$(at.__webglDepthRenderbuffer,L,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_t){a.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),At(o.TEXTURE_CUBE_MAP,T);for(let It=0;It<6;It++)if(T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)st(at.__webglFramebuffer[It][Bt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+It,Bt);else st(at.__webglFramebuffer[It],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);S(T)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(Kt){for(let It=0,Bt=Et.length;It<Bt;It++){const he=Et[It],Rt=s.get(he);a.bindTexture(o.TEXTURE_2D,Rt.__webglTexture),At(o.TEXTURE_2D,he),st(at.__webglFramebuffer,L,he,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,0),S(he)&&x(o.TEXTURE_2D)}a.unbindTexture()}else{let It=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(It=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(It,xt.__webglTexture),At(It,T),T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)st(at.__webglFramebuffer[Bt],L,T,o.COLOR_ATTACHMENT0,It,Bt);else st(at.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,It,0);S(T)&&x(It),a.unbindTexture()}L.depthBuffer&&Dt(L)}function wt(L){const T=L.textures;for(let at=0,xt=T.length;at<xt;at++){const Et=T[at];if(S(Et)){const _t=H(L),Kt=s.get(Et).__webglTexture;a.bindTexture(_t,Kt),x(_t),a.unbindTexture()}}}const Zt=[],I=[];function Ae(L){if(L.samples>0){if(Yt(L)===!1){const T=L.textures,at=L.width,xt=L.height;let Et=o.COLOR_BUFFER_BIT;const _t=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Kt=s.get(L),It=T.length>1;if(It)for(let Bt=0;Bt<T.length;Bt++)a.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Bt=0;Bt<T.length;Bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),It){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[Bt]);const he=s.get(T[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,he,0)}o.blitFramebuffer(0,0,at,xt,0,0,at,xt,Et,o.NEAREST),p===!0&&(Zt.length=0,I.length=0,Zt.push(o.COLOR_ATTACHMENT0+Bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Zt.push(_t),I.push(_t),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,I)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Zt))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),It)for(let Bt=0;Bt<T.length;Bt++){a.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[Bt]);const he=s.get(T[Bt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,he,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Jt(L){return Math.min(c.maxSamples,L.samples)}function Yt(L){const T=s.get(L);return L.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Nt(L){const T=d.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function oe(L,T){const at=L.colorSpace,xt=L.format,Et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||at!==so&&at!==ar&&(De.getTransfer(at)===Fe?(xt!==wi||Et!==Sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),T}function Xt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(_.width=L.naturalWidth||L.width,_.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(_.width=L.displayWidth,_.height=L.displayHeight):(_.width=L.width,_.height=L.height),_}this.allocateTextureUnit=ut,this.resetTextureUnits=ht,this.setTexture2D=gt,this.setTexture2DArray=Z,this.setTexture3D=lt,this.setTextureCube=et,this.rebindTextures=bt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Yt}function PR(o,n){function a(s,c=ar){let f;const d=De.getTransfer(c);if(s===Sa)return o.UNSIGNED_BYTE;if(s===vp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===xp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===J0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===K0)return o.BYTE;if(s===Q0)return o.SHORT;if(s===hl)return o.UNSIGNED_SHORT;if(s===_p)return o.INT;if(s===jr)return o.UNSIGNED_INT;if(s===va)return o.FLOAT;if(s===gl)return o.HALF_FLOAT;if(s===$0)return o.ALPHA;if(s===tx)return o.RGB;if(s===wi)return o.RGBA;if(s===ex)return o.LUMINANCE;if(s===nx)return o.LUMINANCE_ALPHA;if(s===$s)return o.DEPTH_COMPONENT;if(s===ro)return o.DEPTH_STENCIL;if(s===ix)return o.RED;if(s===yp)return o.RED_INTEGER;if(s===ax)return o.RG;if(s===Sp)return o.RG_INTEGER;if(s===Mp)return o.RGBA_INTEGER;if(s===uu||s===fu||s===du||s===hu)if(d===Fe)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===uu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===du)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===uu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===du)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vh||s===Xh||s===kh||s===jh)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Vh)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xh)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kh)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jh)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qh||s===Yh||s===Wh)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(s===qh||s===Yh)return d===Fe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Wh)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===tp||s===ep||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Zh)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Kh)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qh)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jh)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$h)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ep)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===np)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ip)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ap)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===op)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===lp)return d===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pu||s===cp||s===up)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(s===pu)return d===Fe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===up)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===rx||s===fp||s===dp||s===hp)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(s===pu)return f.COMPRESSED_RED_RGTC1_EXT;if(s===fp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ao?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const zR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IR=`
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

}`;class BR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,a,s){if(this.texture===null){const c=new Vn,f=n.properties.get(c);f.__webglTexture=a.texture,(a.depthNear!==s.depthNear||a.depthFar!==s.depthFar)&&(this.depthNear=a.depthNear,this.depthFar=a.depthFar),this.texture=c}}getMesh(n){if(this.texture!==null&&this.mesh===null){const a=n.cameras[0].viewport,s=new Ea({vertexShader:zR,fragmentShader:IR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Wn(new _a(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FR extends lo{constructor(n,a){super();const s=this;let c=null,f=1,d=null,h="local-floor",p=1,_=null,v=null,m=null,y=null,M=null,A=null;const w=new BR,S=a.getContextAttributes();let x=null,H=null;const B=[],D=[],W=new Xe;let X=null;const z=new vi;z.viewport=new an;const q=new vi;q.viewport=new an;const N=[z,q],C=new rT;let k=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let G=B[b];return G===void 0&&(G=new yh,B[b]=G),G.getTargetRaySpace()},this.getControllerGrip=function(b){let G=B[b];return G===void 0&&(G=new yh,B[b]=G),G.getGripSpace()},this.getHand=function(b){let G=B[b];return G===void 0&&(G=new yh,B[b]=G),G.getHandSpace()};function ut(b){const G=D.indexOf(b.inputSource);if(G===-1)return;const st=B[G];st!==void 0&&(st.update(b.inputSource,b.frame,_||d),st.dispatchEvent({type:b.type,data:b.inputSource}))}function yt(){c.removeEventListener("select",ut),c.removeEventListener("selectstart",ut),c.removeEventListener("selectend",ut),c.removeEventListener("squeeze",ut),c.removeEventListener("squeezestart",ut),c.removeEventListener("squeezeend",ut),c.removeEventListener("end",yt),c.removeEventListener("inputsourceschange",gt);for(let b=0;b<B.length;b++){const G=D[b];G!==null&&(D[b]=null,B[b].disconnect(G))}k=null,ht=null,w.reset(),n.setRenderTarget(x),M=null,y=null,m=null,c=null,H=null,Ot.stop(),s.isPresenting=!1,n.setPixelRatio(X),n.setSize(W.width,W.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){f=b,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){h=b,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||d},this.setReferenceSpace=function(b){_=b},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return m},this.getFrame=function(){return A},this.getSession=function(){return c},this.setSession=async function(b){if(c=b,c!==null){if(x=n.getRenderTarget(),c.addEventListener("select",ut),c.addEventListener("selectstart",ut),c.addEventListener("selectend",ut),c.addEventListener("squeeze",ut),c.addEventListener("squeezestart",ut),c.addEventListener("squeezeend",ut),c.addEventListener("end",yt),c.addEventListener("inputsourceschange",gt),S.xrCompatible!==!0&&await a.makeXRCompatible(),X=n.getPixelRatio(),n.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,$=null,vt=null;S.depth&&(vt=S.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,st=S.stencil?ro:$s,$=S.stencil?ao:jr);const Dt={colorFormat:a.RGBA8,depthFormat:vt,scaleFactor:f};m=new XRWebGLBinding(c,a),y=m.createProjectionLayer(Dt),c.updateRenderState({layers:[y]}),n.setPixelRatio(1),n.setSize(y.textureWidth,y.textureHeight,!1),H=new qr(y.textureWidth,y.textureHeight,{format:wi,type:Sa,depthTexture:new _x(y.textureWidth,y.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:S.stencil,colorSpace:n.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const st={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(c,a,st),c.updateRenderState({baseLayer:M}),n.setPixelRatio(1),n.setSize(M.framebufferWidth,M.framebufferHeight,!1),H=new qr(M.framebufferWidth,M.framebufferHeight,{format:wi,type:Sa,colorSpace:n.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}H.isXRRenderTarget=!0,this.setFoveation(p),_=null,d=await c.requestReferenceSpace(h),Ot.setContext(c),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function gt(b){for(let G=0;G<b.removed.length;G++){const st=b.removed[G],$=D.indexOf(st);$>=0&&(D[$]=null,B[$].disconnect(st))}for(let G=0;G<b.added.length;G++){const st=b.added[G];let $=D.indexOf(st);if($===-1){for(let Dt=0;Dt<B.length;Dt++)if(Dt>=D.length){D.push(st),$=Dt;break}else if(D[Dt]===null){D[Dt]=st,$=Dt;break}if($===-1)break}const vt=B[$];vt&&vt.connect(st)}}const Z=new ft,lt=new ft;function et(b,G,st){Z.setFromMatrixPosition(G.matrixWorld),lt.setFromMatrixPosition(st.matrixWorld);const $=Z.distanceTo(lt),vt=G.projectionMatrix.elements,Dt=st.projectionMatrix.elements,bt=vt[14]/(vt[10]-1),Mt=vt[14]/(vt[10]+1),wt=(vt[9]+1)/vt[5],Zt=(vt[9]-1)/vt[5],I=(vt[8]-1)/vt[0],Ae=(Dt[8]+1)/Dt[0],Jt=bt*I,Yt=bt*Ae,Nt=$/(-I+Ae),oe=Nt*-I;if(G.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(oe),b.translateZ(Nt),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert(),vt[10]===-1)b.projectionMatrix.copy(G.projectionMatrix),b.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const Xt=bt+Nt,L=Mt+Nt,T=Jt-oe,at=Yt+($-oe),xt=wt*Mt/L*Xt,Et=Zt*Mt/L*Xt;b.projectionMatrix.makePerspective(T,at,xt,Et,Xt,L),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}}function Tt(b,G){G===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(G.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(c===null)return;let G=b.near,st=b.far;w.texture!==null&&(w.depthNear>0&&(G=w.depthNear),w.depthFar>0&&(st=w.depthFar)),C.near=q.near=z.near=G,C.far=q.far=z.far=st,(k!==C.near||ht!==C.far)&&(c.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,ht=C.far),z.layers.mask=b.layers.mask|2,q.layers.mask=b.layers.mask|4,C.layers.mask=z.layers.mask|q.layers.mask;const $=b.parent,vt=C.cameras;Tt(C,$);for(let Dt=0;Dt<vt.length;Dt++)Tt(vt[Dt],$);vt.length===2?et(C,z,q):C.projectionMatrix.copy(z.projectionMatrix),F(b,C,$)};function F(b,G,st){st===null?b.matrix.copy(G.matrixWorld):(b.matrix.copy(st.matrixWorld),b.matrix.invert(),b.matrix.multiply(G.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(G.projectionMatrix),b.projectionMatrixInverse.copy(G.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=pl*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(b){p=b,y!==null&&(y.fixedFoveation=b),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=b)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let P=null;function At(b,G){if(v=G.getViewerPose(_||d),A=G,v!==null){const st=v.views;M!==null&&(n.setRenderTargetFramebuffer(H,M.framebuffer),n.setRenderTarget(H));let $=!1;st.length!==C.cameras.length&&(C.cameras.length=0,$=!0);for(let bt=0;bt<st.length;bt++){const Mt=st[bt];let wt=null;if(M!==null)wt=M.getViewport(Mt);else{const I=m.getViewSubImage(y,Mt);wt=I.viewport,bt===0&&(n.setRenderTargetTextures(H,I.colorTexture,y.ignoreDepthValues?void 0:I.depthStencilTexture),n.setRenderTarget(H))}let Zt=N[bt];Zt===void 0&&(Zt=new vi,Zt.layers.enable(bt),Zt.viewport=new an,N[bt]=Zt),Zt.matrix.fromArray(Mt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Mt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(wt.x,wt.y,wt.width,wt.height),bt===0&&(C.matrix.copy(Zt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),$===!0&&C.cameras.push(Zt)}const vt=c.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&m){const bt=m.getDepthInformation(st[0]);bt&&bt.isValid&&bt.texture&&w.init(n,bt,c.renderState)}}for(let st=0;st<B.length;st++){const $=D[st],vt=B[st];$!==null&&vt!==void 0&&vt.update($,G,_||d)}P&&P(b,G),G.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:G}),A=null}const Ot=new vx;Ot.setAnimationLoop(At),this.setAnimationLoop=function(b){P=b},this.dispose=function(){}}}const zr=new Ma,HR=new fn;function GR(o,n){function a(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,hx(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function c(S,x,H,B,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(S,x):x.isMeshToonMaterial?(f(S,x),m(S,x)):x.isMeshPhongMaterial?(f(S,x),v(S,x)):x.isMeshStandardMaterial?(f(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,D)):x.isMeshMatcapMaterial?(f(S,x),A(S,x)):x.isMeshDepthMaterial?f(S,x):x.isMeshDistanceMaterial?(f(S,x),w(S,x)):x.isMeshNormalMaterial?f(S,x):x.isLineBasicMaterial?(d(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?p(S,x,H,B):x.isSpriteMaterial?_(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,a(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Zn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,a(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Zn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,a(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,a(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const H=n.get(x),B=H.envMap,D=H.envMapRotation;B&&(S.envMap.value=B,zr.copy(D),zr.x*=-1,zr.y*=-1,zr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),S.envMapRotation.value.setFromMatrix4(HR.makeRotationFromEuler(zr)),S.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,S.aoMapTransform))}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,H,B){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*H,S.scale.value=B*.5,x.map&&(S.map.value=x.map,a(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function m(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,H){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=H.texture,S.transmissionSamplerSize.value.set(H.width,H.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,x){x.matcap&&(S.matcap.value=x.matcap)}function w(S,x){const H=n.get(x).light;S.referencePosition.value.setFromMatrixPosition(H.matrixWorld),S.nearDistance.value=H.shadow.camera.near,S.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function VR(o,n,a,s){let c={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(H,B){const D=B.program;s.uniformBlockBinding(H,D)}function _(H,B){let D=c[H.id];D===void 0&&(A(H),D=v(H),c[H.id]=D,H.addEventListener("dispose",S));const W=B.program;s.updateUBOMapping(H,W);const X=n.render.frame;f[H.id]!==X&&(y(H),f[H.id]=X)}function v(H){const B=m();H.__bindingPointIndex=B;const D=o.createBuffer(),W=H.__size,X=H.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,W,X),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,B,D),D}function m(){for(let H=0;H<h;H++)if(d.indexOf(H)===-1)return d.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(H){const B=c[H.id],D=H.uniforms,W=H.__cache;o.bindBuffer(o.UNIFORM_BUFFER,B);for(let X=0,z=D.length;X<z;X++){const q=Array.isArray(D[X])?D[X]:[D[X]];for(let N=0,C=q.length;N<C;N++){const k=q[N];if(M(k,X,N,W)===!0){const ht=k.__offset,ut=Array.isArray(k.value)?k.value:[k.value];let yt=0;for(let gt=0;gt<ut.length;gt++){const Z=ut[gt],lt=w(Z);typeof Z=="number"||typeof Z=="boolean"?(k.__data[0]=Z,o.bufferSubData(o.UNIFORM_BUFFER,ht+yt,k.__data)):Z.isMatrix3?(k.__data[0]=Z.elements[0],k.__data[1]=Z.elements[1],k.__data[2]=Z.elements[2],k.__data[3]=0,k.__data[4]=Z.elements[3],k.__data[5]=Z.elements[4],k.__data[6]=Z.elements[5],k.__data[7]=0,k.__data[8]=Z.elements[6],k.__data[9]=Z.elements[7],k.__data[10]=Z.elements[8],k.__data[11]=0):(Z.toArray(k.__data,yt),yt+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ht,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(H,B,D,W){const X=H.value,z=B+"_"+D;if(W[z]===void 0)return typeof X=="number"||typeof X=="boolean"?W[z]=X:W[z]=X.clone(),!0;{const q=W[z];if(typeof X=="number"||typeof X=="boolean"){if(q!==X)return W[z]=X,!0}else if(q.equals(X)===!1)return q.copy(X),!0}return!1}function A(H){const B=H.uniforms;let D=0;const W=16;for(let z=0,q=B.length;z<q;z++){const N=Array.isArray(B[z])?B[z]:[B[z]];for(let C=0,k=N.length;C<k;C++){const ht=N[C],ut=Array.isArray(ht.value)?ht.value:[ht.value];for(let yt=0,gt=ut.length;yt<gt;yt++){const Z=ut[yt],lt=w(Z),et=D%W,Tt=et%lt.boundary,F=et+Tt;D+=Tt,F!==0&&W-F<lt.storage&&(D+=W-F),ht.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),ht.__offset=D,D+=lt.storage}}}const X=D%W;return X>0&&(D+=W-X),H.__size=D,H.__cache={},this}function w(H){const B={boundary:0,storage:0};return typeof H=="number"||typeof H=="boolean"?(B.boundary=4,B.storage=4):H.isVector2?(B.boundary=8,B.storage=8):H.isVector3||H.isColor?(B.boundary=16,B.storage=12):H.isVector4?(B.boundary=16,B.storage=16):H.isMatrix3?(B.boundary=48,B.storage=48):H.isMatrix4?(B.boundary=64,B.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),B}function S(H){const B=H.target;B.removeEventListener("dispose",S);const D=d.indexOf(B.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(c[B.id]),delete c[B.id],delete f[B.id]}function x(){for(const H in c)o.deleteBuffer(c[H]);d=[],c={},f={}}return{bind:p,update:_,dispose:x}}class XR{constructor(n={}){const{canvas:a=xE(),context:s=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:_=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:y=!1}=n;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const A=new Uint32Array(4),w=new Int32Array(4);let S=null,x=null;const H=[],B=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_i,this.toneMapping=sr,this.toneMappingExposure=1;const D=this;let W=!1,X=0,z=0,q=null,N=-1,C=null;const k=new an,ht=new an;let ut=null;const yt=new ze(0);let gt=0,Z=a.width,lt=a.height,et=1,Tt=null,F=null;const P=new an(0,0,Z,lt),At=new an(0,0,Z,lt);let Ot=!1;const b=new gx;let G=!1,st=!1;this.transmissionResolutionScale=1;const $=new fn,vt=new fn,Dt=new ft,bt=new an,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Zt(){return q===null?et:1}let I=s;function Ae(R,J){return a.getContext(R,J)}try{const R={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:_,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${gp}`),a.addEventListener("webglcontextlost",St,!1),a.addEventListener("webglcontextrestored",Gt,!1),a.addEventListener("webglcontextcreationerror",Vt,!1),I===null){const J="webgl2";if(I=Ae(J,R),I===null)throw Ae(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Jt,Yt,Nt,oe,Xt,L,T,at,xt,Et,_t,Kt,It,Bt,he,Rt,jt,ee,ae,qt,ge,ce,Ie,j;function Ht(){Jt=new $b(I),Jt.init(),ce=new PR(I,Jt),Yt=new qb(I,Jt,n,ce),Nt=new LR(I,Jt),Yt.reverseDepthBuffer&&y&&Nt.buffers.depth.setReversed(!0),oe=new nA(I),Xt=new yR,L=new OR(I,Jt,Nt,Xt,Yt,ce,oe),T=new Wb(D),at=new Jb(D),xt=new lT(I),Ie=new kb(I,xt),Et=new tA(I,xt,oe,Ie),_t=new aA(I,Et,xt,oe),ae=new iA(I,Yt,L),Rt=new Yb(Xt),Kt=new xR(D,T,at,Jt,Yt,Ie,Rt),It=new GR(D,Xt),Bt=new MR,he=new CR(Jt),ee=new Xb(D,T,at,Nt,_t,M,p),jt=new NR(D,_t,Yt),j=new VR(I,oe,Yt,Nt),qt=new jb(I,Jt,oe),ge=new eA(I,Jt,oe),oe.programs=Kt.programs,D.capabilities=Yt,D.extensions=Jt,D.properties=Xt,D.renderLists=Bt,D.shadowMap=jt,D.state=Nt,D.info=oe}Ht();const dt=new FR(D,I);this.xr=dt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Jt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Jt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(R){R!==void 0&&(et=R,this.setSize(Z,lt,!1))},this.getSize=function(R){return R.set(Z,lt)},this.setSize=function(R,J,ot=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,lt=J,a.width=Math.floor(R*et),a.height=Math.floor(J*et),ot===!0&&(a.style.width=R+"px",a.style.height=J+"px"),this.setViewport(0,0,R,J)},this.getDrawingBufferSize=function(R){return R.set(Z*et,lt*et).floor()},this.setDrawingBufferSize=function(R,J,ot){Z=R,lt=J,et=ot,a.width=Math.floor(R*ot),a.height=Math.floor(J*ot),this.setViewport(0,0,R,J)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(P)},this.setViewport=function(R,J,ot,ct){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,J,ot,ct),Nt.viewport(k.copy(P).multiplyScalar(et).round())},this.getScissor=function(R){return R.copy(At)},this.setScissor=function(R,J,ot,ct){R.isVector4?At.set(R.x,R.y,R.z,R.w):At.set(R,J,ot,ct),Nt.scissor(ht.copy(At).multiplyScalar(et).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(R){Nt.setScissorTest(Ot=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){F=R},this.getClearColor=function(R){return R.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(R=!0,J=!0,ot=!0){let ct=0;if(R){let tt=!1;if(q!==null){const Ct=q.texture.format;tt=Ct===Mp||Ct===Sp||Ct===yp}if(tt){const Ct=q.texture.type,Lt=Ct===Sa||Ct===jr||Ct===hl||Ct===ao||Ct===vp||Ct===xp,Ut=ee.getClearColor(),zt=ee.getClearAlpha(),ne=Ut.r,re=Ut.g,te=Ut.b;Lt?(A[0]=ne,A[1]=re,A[2]=te,A[3]=zt,I.clearBufferuiv(I.COLOR,0,A)):(w[0]=ne,w[1]=re,w[2]=te,w[3]=zt,I.clearBufferiv(I.COLOR,0,w))}else ct|=I.COLOR_BUFFER_BIT}J&&(ct|=I.DEPTH_BUFFER_BIT),ot&&(ct|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",St,!1),a.removeEventListener("webglcontextrestored",Gt,!1),a.removeEventListener("webglcontextcreationerror",Vt,!1),ee.dispose(),Bt.dispose(),he.dispose(),Xt.dispose(),T.dispose(),at.dispose(),_t.dispose(),Ie.dispose(),j.dispose(),Kt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Nn),dt.removeEventListener("sessionend",yl),qi.stop()};function St(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const R=oe.autoReset,J=jt.enabled,ot=jt.autoUpdate,ct=jt.needsUpdate,tt=jt.type;Ht(),oe.autoReset=R,jt.enabled=J,jt.autoUpdate=ot,jt.needsUpdate=ct,jt.type=tt}function Vt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function le(R){const J=R.target;J.removeEventListener("dispose",le),Ze(J)}function Ze(R){gn(R),Xt.remove(R)}function gn(R){const J=Xt.get(R).programs;J!==void 0&&(J.forEach(function(ot){Kt.releaseProgram(ot)}),R.isShaderMaterial&&Kt.releaseShaderCache(R))}this.renderBufferDirect=function(R,J,ot,ct,tt,Ct){J===null&&(J=Mt);const Lt=tt.isMesh&&tt.matrixWorld.determinant()<0,Ut=Su(R,J,ot,ct,tt);Nt.setMaterial(ct,Lt);let zt=ot.index,ne=1;if(ct.wireframe===!0){if(zt=Et.getWireframeAttribute(ot),zt===void 0)return;ne=2}const re=ot.drawRange,te=ot.attributes.position;let be=re.start*ne,Ce=(re.start+re.count)*ne;Ct!==null&&(be=Math.max(be,Ct.start*ne),Ce=Math.min(Ce,(Ct.start+Ct.count)*ne)),zt!==null?(be=Math.max(be,0),Ce=Math.min(Ce,zt.count)):te!=null&&(be=Math.max(be,0),Ce=Math.min(Ce,te.count));const ke=Ce-be;if(ke<0||ke===1/0)return;Ie.setup(tt,ct,Ut,ot,zt);let He,_e=qt;if(zt!==null&&(He=xt.get(zt),_e=ge,_e.setIndex(He)),tt.isMesh)ct.wireframe===!0?(Nt.setLineWidth(ct.wireframeLinewidth*Zt()),_e.setMode(I.LINES)):_e.setMode(I.TRIANGLES);else if(tt.isLine){let Qt=ct.linewidth;Qt===void 0&&(Qt=1),Nt.setLineWidth(Qt*Zt()),tt.isLineSegments?_e.setMode(I.LINES):tt.isLineLoop?_e.setMode(I.LINE_LOOP):_e.setMode(I.LINE_STRIP)}else tt.isPoints?_e.setMode(I.POINTS):tt.isSprite&&_e.setMode(I.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)Ir("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))_e.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Qt=tt._multiDrawStarts,Ke=tt._multiDrawCounts,ye=tt._multiDrawCount,vn=zt?xt.get(zt).bytesPerElement:1,We=Xt.get(ct).currentProgram.getUniforms();for(let Un=0;Un<ye;Un++)We.setValue(I,"_gl_DrawID",Un),_e.render(Qt[Un]/vn,Ke[Un])}else if(tt.isInstancedMesh)_e.renderInstances(be,ke,tt.count);else if(ot.isInstancedBufferGeometry){const Qt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ke=Math.min(ot.instanceCount,Qt);_e.renderInstances(be,ke,Ke)}else _e.render(be,ke)};function Te(R,J,ot){R.transparent===!0&&R.side===ga&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,Wi(R,J,ot),R.side=or,R.needsUpdate=!0,Wi(R,J,ot),R.side=ga):Wi(R,J,ot)}this.compile=function(R,J,ot=null){ot===null&&(ot=R),x=he.get(ot),x.init(J),B.push(x),ot.traverseVisible(function(tt){tt.isLight&&tt.layers.test(J.layers)&&(x.pushLight(tt),tt.castShadow&&x.pushShadow(tt))}),R!==ot&&R.traverseVisible(function(tt){tt.isLight&&tt.layers.test(J.layers)&&(x.pushLight(tt),tt.castShadow&&x.pushShadow(tt))}),x.setupLights();const ct=new Set;return R.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Ct=tt.material;if(Ct)if(Array.isArray(Ct))for(let Lt=0;Lt<Ct.length;Lt++){const Ut=Ct[Lt];Te(Ut,ot,tt),ct.add(Ut)}else Te(Ct,ot,tt),ct.add(Ct)}),x=B.pop(),ct},this.compileAsync=function(R,J,ot=null){const ct=this.compile(R,J,ot);return new Promise(tt=>{function Ct(){if(ct.forEach(function(Lt){Xt.get(Lt).currentProgram.isReady()&&ct.delete(Lt)}),ct.size===0){tt(R);return}setTimeout(Ct,10)}Jt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Ye=null;function _n(R){Ye&&Ye(R)}function Nn(){qi.stop()}function yl(){qi.start()}const qi=new vx;qi.setAnimationLoop(_n),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(R){Ye=R,dt.setAnimationLoop(R),R===null?qi.stop():qi.start()},dt.addEventListener("sessionstart",Nn),dt.addEventListener("sessionend",yl),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(J),J=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,J,q),x=he.get(R,B.length),x.init(J),B.push(x),vt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),b.setFromProjectionMatrix(vt),st=this.localClippingEnabled,G=Rt.init(this.clippingPlanes,st),S=Bt.get(R,H.length),S.init(),H.push(S),dt.enabled===!0&&dt.isPresenting===!0){const Ct=D.xr.getDepthSensingMesh();Ct!==null&&fo(Ct,J,-1/0,D.sortObjects)}fo(R,J,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Tt,F),wt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,wt&&ee.addToRenderList(S,R),this.info.render.frame++,G===!0&&Rt.beginShadows();const ot=x.state.shadowsArray;jt.render(ot,R,J),G===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=S.opaque,tt=S.transmissive;if(x.setupLights(),J.isArrayCamera){const Ct=J.cameras;if(tt.length>0)for(let Lt=0,Ut=Ct.length;Lt<Ut;Lt++){const zt=Ct[Lt];cr(ct,tt,R,zt)}wt&&ee.render(R);for(let Lt=0,Ut=Ct.length;Lt<Ut;Lt++){const zt=Ct[Lt];lr(S,R,zt,zt.viewport)}}else tt.length>0&&cr(ct,tt,R,J),wt&&ee.render(R),lr(S,R,J);q!==null&&z===0&&(L.updateMultisampleRenderTarget(q),L.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(D,R,J),Ie.resetDefaultState(),N=-1,C=null,B.pop(),B.length>0?(x=B[B.length-1],G===!0&&Rt.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,H.pop(),H.length>0?S=H[H.length-1]:S=null};function fo(R,J,ot,ct){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||b.intersectsSprite(R)){ct&&bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(vt);const Lt=_t.update(R),Ut=R.material;Ut.visible&&S.push(R,Lt,Ut,ot,bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||b.intersectsObject(R))){const Lt=_t.update(R),Ut=R.material;if(ct&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),bt.copy(R.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),bt.copy(Lt.boundingSphere.center)),bt.applyMatrix4(R.matrixWorld).applyMatrix4(vt)),Array.isArray(Ut)){const zt=Lt.groups;for(let ne=0,re=zt.length;ne<re;ne++){const te=zt[ne],be=Ut[te.materialIndex];be&&be.visible&&S.push(R,Lt,be,ot,bt.z,te)}}else Ut.visible&&S.push(R,Lt,Ut,ot,bt.z,null)}}const Ct=R.children;for(let Lt=0,Ut=Ct.length;Lt<Ut;Lt++)fo(Ct[Lt],J,ot,ct)}function lr(R,J,ot,ct){const tt=R.opaque,Ct=R.transmissive,Lt=R.transparent;x.setupLightsView(ot),G===!0&&Rt.setGlobalState(D.clippingPlanes,ot),ct&&Nt.viewport(k.copy(ct)),tt.length>0&&Yi(tt,J,ot),Ct.length>0&&Yi(Ct,J,ot),Lt.length>0&&Yi(Lt,J,ot),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function cr(R,J,ot,ct){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ct.id]===void 0&&(x.state.transmissionRenderTarget[ct.id]=new qr(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?gl:Sa,minFilter:Xr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Ct=x.state.transmissionRenderTarget[ct.id],Lt=ct.viewport||k;Ct.setSize(Lt.z*D.transmissionResolutionScale,Lt.w*D.transmissionResolutionScale);const Ut=D.getRenderTarget();D.setRenderTarget(Ct),D.getClearColor(yt),gt=D.getClearAlpha(),gt<1&&D.setClearColor(16777215,.5),D.clear(),wt&&ee.render(ot);const zt=D.toneMapping;D.toneMapping=sr;const ne=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),x.setupLightsView(ct),G===!0&&Rt.setGlobalState(D.clippingPlanes,ct),Yi(R,ot,ct),L.updateMultisampleRenderTarget(Ct),L.updateRenderTargetMipmap(Ct),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let te=0,be=J.length;te<be;te++){const Ce=J[te],ke=Ce.object,He=Ce.geometry,_e=Ce.material,Qt=Ce.group;if(_e.side===ga&&ke.layers.test(ct.layers)){const Ke=_e.side;_e.side=Zn,_e.needsUpdate=!0,Ui(ke,ot,ct,He,_e,Qt),_e.side=Ke,_e.needsUpdate=!0,re=!0}}re===!0&&(L.updateMultisampleRenderTarget(Ct),L.updateRenderTargetMipmap(Ct))}D.setRenderTarget(Ut),D.setClearColor(yt,gt),ne!==void 0&&(ct.viewport=ne),D.toneMapping=zt}function Yi(R,J,ot){const ct=J.isScene===!0?J.overrideMaterial:null;for(let tt=0,Ct=R.length;tt<Ct;tt++){const Lt=R[tt],Ut=Lt.object,zt=Lt.geometry,ne=ct===null?Lt.material:ct,re=Lt.group;Ut.layers.test(ot.layers)&&Ui(Ut,J,ot,zt,ne,re)}}function Ui(R,J,ot,ct,tt,Ct){R.onBeforeRender(D,J,ot,ct,tt,Ct),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),tt.onBeforeRender(D,J,ot,ct,R,Ct),tt.transparent===!0&&tt.side===ga&&tt.forceSinglePass===!1?(tt.side=Zn,tt.needsUpdate=!0,D.renderBufferDirect(ot,J,ct,tt,R,Ct),tt.side=or,tt.needsUpdate=!0,D.renderBufferDirect(ot,J,ct,tt,R,Ct),tt.side=ga):D.renderBufferDirect(ot,J,ct,tt,R,Ct),R.onAfterRender(D,J,ot,ct,tt,Ct)}function Wi(R,J,ot){J.isScene!==!0&&(J=Mt);const ct=Xt.get(R),tt=x.state.lights,Ct=x.state.shadowsArray,Lt=tt.state.version,Ut=Kt.getParameters(R,tt.state,Ct,J,ot),zt=Kt.getProgramCacheKey(Ut);let ne=ct.programs;ct.environment=R.isMeshStandardMaterial?J.environment:null,ct.fog=J.fog,ct.envMap=(R.isMeshStandardMaterial?at:T).get(R.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&R.envMap===null?J.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",le),ne=new Map,ct.programs=ne);let re=ne.get(zt);if(re!==void 0){if(ct.currentProgram===re&&ct.lightsStateVersion===Lt)return ho(R,Ut),re}else Ut.uniforms=Kt.getUniforms(R),R.onBeforeCompile(Ut,D),re=Kt.acquireProgram(Ut,zt),ne.set(zt,re),ct.uniforms=Ut.uniforms;const te=ct.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(te.clippingPlanes=Rt.uniform),ho(R,Ut),ct.needsLights=po(R),ct.lightsStateVersion=Lt,ct.needsLights&&(te.ambientLightColor.value=tt.state.ambient,te.lightProbe.value=tt.state.probe,te.directionalLights.value=tt.state.directional,te.directionalLightShadows.value=tt.state.directionalShadow,te.spotLights.value=tt.state.spot,te.spotLightShadows.value=tt.state.spotShadow,te.rectAreaLights.value=tt.state.rectArea,te.ltc_1.value=tt.state.rectAreaLTC1,te.ltc_2.value=tt.state.rectAreaLTC2,te.pointLights.value=tt.state.point,te.pointLightShadows.value=tt.state.pointShadow,te.hemisphereLights.value=tt.state.hemi,te.directionalShadowMap.value=tt.state.directionalShadowMap,te.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,te.spotShadowMap.value=tt.state.spotShadowMap,te.spotLightMatrix.value=tt.state.spotLightMatrix,te.spotLightMap.value=tt.state.spotLightMap,te.pointShadowMap.value=tt.state.pointShadowMap,te.pointShadowMatrix.value=tt.state.pointShadowMatrix),ct.currentProgram=re,ct.uniformsList=null,re}function Ta(R){if(R.uniformsList===null){const J=R.currentProgram.getUniforms();R.uniformsList=mu.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function ho(R,J){const ot=Xt.get(R);ot.outputColorSpace=J.outputColorSpace,ot.batching=J.batching,ot.batchingColor=J.batchingColor,ot.instancing=J.instancing,ot.instancingColor=J.instancingColor,ot.instancingMorph=J.instancingMorph,ot.skinning=J.skinning,ot.morphTargets=J.morphTargets,ot.morphNormals=J.morphNormals,ot.morphColors=J.morphColors,ot.morphTargetsCount=J.morphTargetsCount,ot.numClippingPlanes=J.numClippingPlanes,ot.numIntersection=J.numClipIntersection,ot.vertexAlphas=J.vertexAlphas,ot.vertexTangents=J.vertexTangents,ot.toneMapping=J.toneMapping}function Su(R,J,ot,ct,tt){J.isScene!==!0&&(J=Mt),L.resetTextureUnits();const Ct=J.fog,Lt=ct.isMeshStandardMaterial?J.environment:null,Ut=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:so,zt=(ct.isMeshStandardMaterial?at:T).get(ct.envMap||Lt),ne=ct.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,re=!!ot.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),te=!!ot.morphAttributes.position,be=!!ot.morphAttributes.normal,Ce=!!ot.morphAttributes.color;let ke=sr;ct.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ke=D.toneMapping);const He=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,_e=He!==void 0?He.length:0,Qt=Xt.get(ct),Ke=x.state.lights;if(G===!0&&(st===!0||R!==C)){const En=R===C&&ct.id===N;Rt.setState(ct,R,En)}let ye=!1;ct.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Ke.state.version||Qt.outputColorSpace!==Ut||tt.isBatchedMesh&&Qt.batching===!1||!tt.isBatchedMesh&&Qt.batching===!0||tt.isBatchedMesh&&Qt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Qt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Qt.instancing===!1||!tt.isInstancedMesh&&Qt.instancing===!0||tt.isSkinnedMesh&&Qt.skinning===!1||!tt.isSkinnedMesh&&Qt.skinning===!0||tt.isInstancedMesh&&Qt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Qt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Qt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Qt.instancingMorph===!1&&tt.morphTexture!==null||Qt.envMap!==zt||ct.fog===!0&&Qt.fog!==Ct||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Rt.numPlanes||Qt.numIntersection!==Rt.numIntersection)||Qt.vertexAlphas!==ne||Qt.vertexTangents!==re||Qt.morphTargets!==te||Qt.morphNormals!==be||Qt.morphColors!==Ce||Qt.toneMapping!==ke||Qt.morphTargetsCount!==_e)&&(ye=!0):(ye=!0,Qt.__version=ct.version);let vn=Qt.currentProgram;ye===!0&&(vn=Wi(ct,J,tt));let We=!1,Un=!1,ba=!1;const Ge=vn.getUniforms(),rn=Qt.uniforms;if(Nt.useProgram(vn.program)&&(We=!0,Un=!0,ba=!0),ct.id!==N&&(N=ct.id,Un=!0),We||C!==R){Nt.buffers.depth.getReversed()?($.copy(R.projectionMatrix),SE($),ME($),Ge.setValue(I,"projectionMatrix",$)):Ge.setValue(I,"projectionMatrix",R.projectionMatrix),Ge.setValue(I,"viewMatrix",R.matrixWorldInverse);const Tn=Ge.map.cameraPosition;Tn!==void 0&&Tn.setValue(I,Dt.setFromMatrixPosition(R.matrixWorld)),Yt.logarithmicDepthBuffer&&Ge.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ge.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Un=!0,ba=!0)}if(tt.isSkinnedMesh){Ge.setOptional(I,tt,"bindMatrix"),Ge.setOptional(I,tt,"bindMatrixInverse");const En=tt.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ge.setValue(I,"boneTexture",En.boneTexture,L))}tt.isBatchedMesh&&(Ge.setOptional(I,tt,"batchingTexture"),Ge.setValue(I,"batchingTexture",tt._matricesTexture,L),Ge.setOptional(I,tt,"batchingIdTexture"),Ge.setValue(I,"batchingIdTexture",tt._indirectTexture,L),Ge.setOptional(I,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ge.setValue(I,"batchingColorTexture",tt._colorsTexture,L));const dn=ot.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ae.update(tt,ot,vn),(Un||Qt.receiveShadow!==tt.receiveShadow)&&(Qt.receiveShadow=tt.receiveShadow,Ge.setValue(I,"receiveShadow",tt.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(rn.envMap.value=zt,rn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&J.environment!==null&&(rn.envMapIntensity.value=J.environmentIntensity),Un&&(Ge.setValue(I,"toneMappingExposure",D.toneMappingExposure),Qt.needsLights&&Sl(rn,ba),Ct&&ct.fog===!0&&It.refreshFogUniforms(rn,Ct),It.refreshMaterialUniforms(rn,ct,et,lt,x.state.transmissionRenderTarget[R.id]),mu.upload(I,Ta(Qt),rn,L)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(mu.upload(I,Ta(Qt),rn,L),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ge.setValue(I,"center",tt.center),Ge.setValue(I,"modelViewMatrix",tt.modelViewMatrix),Ge.setValue(I,"normalMatrix",tt.normalMatrix),Ge.setValue(I,"modelMatrix",tt.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const En=ct.uniformsGroups;for(let Tn=0,Wr=En.length;Tn<Wr;Tn++){const Zi=En[Tn];j.update(Zi,vn),j.bind(Zi,vn)}}return vn}function Sl(R,J){R.ambientLightColor.needsUpdate=J,R.lightProbe.needsUpdate=J,R.directionalLights.needsUpdate=J,R.directionalLightShadows.needsUpdate=J,R.pointLights.needsUpdate=J,R.pointLightShadows.needsUpdate=J,R.spotLights.needsUpdate=J,R.spotLightShadows.needsUpdate=J,R.rectAreaLights.needsUpdate=J,R.hemisphereLights.needsUpdate=J}function po(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,J,ot){Xt.get(R.texture).__webglTexture=J,Xt.get(R.depthTexture).__webglTexture=ot;const ct=Xt.get(R);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=ot===void 0,ct.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,J){const ot=Xt.get(R);ot.__webglFramebuffer=J,ot.__useDefaultFramebuffer=J===void 0};const ur=I.createFramebuffer();this.setRenderTarget=function(R,J=0,ot=0){q=R,X=J,z=ot;let ct=!0,tt=null,Ct=!1,Lt=!1;if(R){const zt=Xt.get(R);if(zt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(I.FRAMEBUFFER,null),ct=!1;else if(zt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(zt.__hasExternalTextures)L.rebindTextures(R,Xt.get(R.texture).__webglTexture,Xt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(zt.__boundDepthTexture!==te){if(te!==null&&Xt.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const ne=R.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Lt=!0);const re=Xt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(re[J])?tt=re[J][ot]:tt=re[J],Ct=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?tt=Xt.get(R).__webglMultisampledFramebuffer:Array.isArray(re)?tt=re[ot]:tt=re,k.copy(R.viewport),ht.copy(R.scissor),ut=R.scissorTest}else k.copy(P).multiplyScalar(et).floor(),ht.copy(At).multiplyScalar(et).floor(),ut=Ot;if(ot!==0&&(tt=ur),Nt.bindFramebuffer(I.FRAMEBUFFER,tt)&&ct&&Nt.drawBuffers(R,tt),Nt.viewport(k),Nt.scissor(ht),Nt.setScissorTest(ut),Ct){const zt=Xt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+J,zt.__webglTexture,ot)}else if(Lt){const zt=Xt.get(R.texture),ne=J;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,ot,ne)}else if(R!==null&&ot!==0){const zt=Xt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,ot)}N=-1},this.readRenderTargetPixels=function(R,J,ot,ct,tt,Ct,Lt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){Nt.bindFramebuffer(I.FRAMEBUFFER,Ut);try{const zt=R.texture,ne=zt.format,re=zt.type;if(!Yt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=R.width-ct&&ot>=0&&ot<=R.height-tt&&I.readPixels(J,ot,ct,tt,ce.convert(ne),ce.convert(re),Ct)}finally{const zt=q!==null?Xt.get(q).__webglFramebuffer:null;Nt.bindFramebuffer(I.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(R,J,ot,ct,tt,Ct,Lt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){const zt=R.texture,ne=zt.format,re=zt.type;if(!Yt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=R.width-ct&&ot>=0&&ot<=R.height-tt){Nt.bindFramebuffer(I.FRAMEBUFFER,Ut);const te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,te),I.bufferData(I.PIXEL_PACK_BUFFER,Ct.byteLength,I.STREAM_READ),I.readPixels(J,ot,ct,tt,ce.convert(ne),ce.convert(re),0);const be=q!==null?Xt.get(q).__webglFramebuffer:null;Nt.bindFramebuffer(I.FRAMEBUFFER,be);const Ce=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await yE(I,Ce,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ct),I.deleteBuffer(te),I.deleteSync(Ce),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,J=null,ot=0){R.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,R=arguments[1]);const ct=Math.pow(2,-ot),tt=Math.floor(R.image.width*ct),Ct=Math.floor(R.image.height*ct),Lt=J!==null?J.x:0,Ut=J!==null?J.y:0;L.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,ot,0,0,Lt,Ut,tt,Ct),Nt.unbindTexture()};const Mu=I.createFramebuffer(),Ml=I.createFramebuffer();this.copyTextureToTexture=function(R,J,ot=null,ct=null,tt=0,Ct=null){R.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,R=arguments[1],J=arguments[2],Ct=arguments[3]||0,ot=null),Ct===null&&(tt!==0?(Ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=tt,tt=0):Ct=0);let Lt,Ut,zt,ne,re,te,be,Ce,ke;const He=R.isCompressedTexture?R.mipmaps[Ct]:R.image;if(ot!==null)Lt=ot.max.x-ot.min.x,Ut=ot.max.y-ot.min.y,zt=ot.isBox3?ot.max.z-ot.min.z:1,ne=ot.min.x,re=ot.min.y,te=ot.isBox3?ot.min.z:0;else{const dn=Math.pow(2,-tt);Lt=Math.floor(He.width*dn),Ut=Math.floor(He.height*dn),R.isDataArrayTexture?zt=He.depth:R.isData3DTexture?zt=Math.floor(He.depth*dn):zt=1,ne=0,re=0,te=0}ct!==null?(be=ct.x,Ce=ct.y,ke=ct.z):(be=0,Ce=0,ke=0);const _e=ce.convert(J.format),Qt=ce.convert(J.type);let Ke;J.isData3DTexture?(L.setTexture3D(J,0),Ke=I.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(L.setTexture2DArray(J,0),Ke=I.TEXTURE_2D_ARRAY):(L.setTexture2D(J,0),Ke=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,J.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,J.unpackAlignment);const ye=I.getParameter(I.UNPACK_ROW_LENGTH),vn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),We=I.getParameter(I.UNPACK_SKIP_PIXELS),Un=I.getParameter(I.UNPACK_SKIP_ROWS),ba=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,He.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,He.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,re),I.pixelStorei(I.UNPACK_SKIP_IMAGES,te);const Ge=R.isDataArrayTexture||R.isData3DTexture,rn=J.isDataArrayTexture||J.isData3DTexture;if(R.isDepthTexture){const dn=Xt.get(R),En=Xt.get(J),Tn=Xt.get(dn.__renderTarget),Wr=Xt.get(En.__renderTarget);Nt.bindFramebuffer(I.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Nt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Wr.__webglFramebuffer);for(let Zi=0;Zi<zt;Zi++)Ge&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(R).__webglTexture,tt,te+Zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(J).__webglTexture,Ct,ke+Zi)),I.blitFramebuffer(ne,re,Lt,Ut,be,Ce,Lt,Ut,I.DEPTH_BUFFER_BIT,I.NEAREST);Nt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(tt!==0||R.isRenderTargetTexture||Xt.has(R)){const dn=Xt.get(R),En=Xt.get(J);Nt.bindFramebuffer(I.READ_FRAMEBUFFER,Mu),Nt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ml);for(let Tn=0;Tn<zt;Tn++)Ge?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dn.__webglTexture,tt,te+Tn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dn.__webglTexture,tt),rn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,En.__webglTexture,Ct,ke+Tn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,En.__webglTexture,Ct),tt!==0?I.blitFramebuffer(ne,re,Lt,Ut,be,Ce,Lt,Ut,I.COLOR_BUFFER_BIT,I.NEAREST):rn?I.copyTexSubImage3D(Ke,Ct,be,Ce,ke+Tn,ne,re,Lt,Ut):I.copyTexSubImage2D(Ke,Ct,be,Ce,ne,re,Lt,Ut);Nt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else rn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Ke,Ct,be,Ce,ke,Lt,Ut,zt,_e,Qt,He.data):J.isCompressedArrayTexture?I.compressedTexSubImage3D(Ke,Ct,be,Ce,ke,Lt,Ut,zt,_e,He.data):I.texSubImage3D(Ke,Ct,be,Ce,ke,Lt,Ut,zt,_e,Qt,He):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ct,be,Ce,Lt,Ut,_e,Qt,He.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ct,be,Ce,He.width,He.height,_e,He.data):I.texSubImage2D(I.TEXTURE_2D,Ct,be,Ce,Lt,Ut,_e,Qt,He);I.pixelStorei(I.UNPACK_ROW_LENGTH,ye),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,We),I.pixelStorei(I.UNPACK_SKIP_ROWS,Un),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ba),Ct===0&&J.generateMipmaps&&I.generateMipmap(Ke),Nt.unbindTexture()},this.copyTextureToTexture3D=function(R,J,ot=null,ct=null,tt=0){return R.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,ct=arguments[1]||null,R=arguments[2],J=arguments[3],tt=arguments[4]||0),Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,J,ot,ct,tt)},this.initRenderTarget=function(R){Xt.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Nt.unbindTexture()},this.resetState=function(){X=0,z=0,q=null,Nt.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const a=this.getContext();a.drawingBufferColorspace=De._getDrawingBufferColorSpace(n),a.unpackColorSpace=De._getUnpackColorSpace()}}function kR({scrollProgress:o=0}){const n=$e.useRef(null);return $e.useEffect(()=>{const a=n.current;if(!a)return;const s=new WE;s.background=new ze(9222353);const c=new vi(45,window.innerWidth/window.innerHeight,.1,100);c.position.set(0,18,18),c.lookAt(0,18,0);const f=new XR({antialias:!0,powerPreference:"high-performance"});f.setSize(window.innerWidth,window.innerHeight),f.setPixelRatio(Math.min(window.devicePixelRatio,1.6)),a.appendChild(f.domElement);const d=new iT,h=`
      varying vec2 vUv;
      varying vec3 vVariation;
      varying float vWorldY;

      attribute vec3 aVariation;

      void main() {
        vUv = uv;
        vVariation = aVariation;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldY = worldPos.y;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,p=`
      uniform sampler2D uTexture;
      uniform float uTime;
      uniform float uOpacity;
      uniform float uDotSize;
      uniform float uDotStrength;

      varying vec2 vUv;
      varying vec3 vVariation;
      varying float vWorldY;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      void main() {
        vec4 tex = texture2D(uTexture, vUv);
        if (tex.a < 0.02) discard;

        // Animated subtle wisp edge erosion
        float edgeNoise = noise(vUv * vec2(32.0, 18.0) + vec2(uTime * 0.03, uTime * -0.01));
        float alpha = smoothstep(0.05 + edgeNoise * 0.08, 0.48, tex.a);

        // Posterize into paper tones
        float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
        float posterized = floor(clamp(lum, 0.0, 1.0) * 5.0 + 0.5) / 5.0;

        vec3 cloudColor = mix(vec3(0.85, 0.90, 0.94), vec3(1.0), posterized);

        // Procedural screen halftone dots
        float dotSize = uDotSize * mix(0.9, 1.2, vVariation.z);
        vec2 dotCell = mod(gl_FragCoord.xy, dotSize) - dotSize * 0.5;
        float dotRadius = dotSize * mix(0.08, 0.35, 1.0 - posterized);
        float dotShape = 1.0 - smoothstep(max(0.0, dotRadius - 0.7), dotRadius + 0.7, length(dotCell));

        cloudColor = mix(cloudColor, cloudColor * 0.65, dotShape * uDotStrength);

        gl_FragColor = vec4(cloudColor, alpha * uOpacity);
      }
    `,_={uTexture:{value:null},uTime:{value:0},uOpacity:{value:.88},uDotSize:{value:5.5},uDotStrength:{value:.38}};d.load("/brand/gpc/clouds/cloud-bank-a.png",D=>{_.uTexture.value=D});const v=new Ea({vertexShader:h,fragmentShader:p,uniforms:_,transparent:!0,depthWrite:!1}),m=new Ks,y=new _a(16,9),M=18;for(let D=0;D<M;D++){const W=new Wn(y,v),X=D/M*Math.PI*2,z=6+Math.random()*8,q=22-D/M*35;W.position.set(Math.sin(X)*z,q,-Math.cos(X)*3-2),W.rotation.z=(Math.random()-.5)*.2,W.scale.setScalar(.8+Math.random()*.8);const N=new Float32Array([Math.random(),Math.random(),Math.random()]);W.geometry=W.geometry.clone(),W.geometry.setAttribute("aVariation",new ZE(N,3)),m.add(W)}s.add(m);let A=null;d.load("/brand/gpc/airliner-gpc-color-block.png",D=>{const W=new _a(10,5.5),X=new Zs({map:D,transparent:!0,depthWrite:!1});A=new Wn(W,X),A.position.set(2.5,17.5,2),A.rotation.z=-.05,s.add(A)});const w=new Ks;d.load("/brand/gpc/flight/gold-token-briefcase-parachute-cutout.png",D=>{const W=new _a(3.5,4.5),X=new Zs({map:D,transparent:!0}),z=new Wn(W,X);z.position.set(-5,8,0),w.add(z)}),d.load("/brand/gpc/flight/skydiver-phone-cutout.png",D=>{const W=new _a(2.5,4),X=new Zs({map:D,transparent:!0}),z=new Wn(W,X);z.position.set(5.5,3,-1),w.add(z)}),s.add(w),d.load("/brand/gpc/flight/mountain-ground-cutout.png",D=>{const W=new _a(32,12),X=new Zs({map:D,transparent:!0,depthWrite:!1}),z=new Wn(W,X);z.position.set(0,-12,-4),s.add(z)});const S=()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",S);let x=new sT,H;const B=()=>{H=requestAnimationFrame(B);const D=x.getElapsedTime();_.uTime.value=D,A&&(A.position.y=17.5+Math.sin(D*1.2)*.15,A.position.x=2.5+Math.cos(D*.8)*.1),w.children.forEach((N,C)=>{N.rotation.z=Math.sin(D*1.5+C)*.08});const W=window.scrollY,X=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),z=Math.min(Math.max(W/X,0),1),q=vE.lerp(18,-10,z);c.position.y+=(q-c.position.y)*.08,c.lookAt(0,c.position.y,0),f.render(s,c)};return B(),()=>{cancelAnimationFrame(H),window.removeEventListener("resize",S),a&&f.domElement&&a.removeChild(f.domElement),f.dispose()}},[]),U.jsx("div",{className:"canvas-container","aria-hidden":"true",children:U.jsx("div",{ref:n,className:"flight-canvas flight-canvas--background"})})}function jR(){const[o,n]=$e.useState(3e4),[a,s]=$e.useState("30,000 FT"),[c,f]=$e.useState(4.2),[d,h]=$e.useState(100);$e.useEffect(()=>{const _=[];window.scrollY>10?s(null):[[300,"29,800 FT"],[600,"30,250 FT"],[900,"29,950 FT"],[1200,null]].forEach(([M,A])=>{_.push(window.setTimeout(()=>{window.scrollY<=10&&s(A)},M))});const m=()=>{const y=window.scrollY,M=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),A=Math.min(Math.max(y/M,0),1),w=Math.round(3e4*(1-A));n(w);const S=(4.2-A*1.35).toFixed(2);f(S),h(Math.round((1-A)*100)),document.documentElement.style.setProperty("--altitude-remaining",(w/3e4).toFixed(4))};return window.addEventListener("scroll",m,{passive:!0}),m(),()=>{_.forEach(y=>clearTimeout(y)),window.removeEventListener("scroll",m)}},[]);const p=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});return U.jsxs("aside",{className:"altitude-hud","aria-label":"Current story elevation & cell telemetry",children:[U.jsx("div",{className:"altitude-hud__track","aria-hidden":"true",children:U.jsx("span",{})}),U.jsxs("div",{className:"altitude-hud__readout",children:[U.jsx("span",{className:"altitude-hud__label",children:"Altitude"}),U.jsx("output",{className:"altitude-hud__value",children:a??`${p.format(o)} FT`}),U.jsxs("div",{className:"altitude-hud__battery-gauge",children:[U.jsxs("span",{children:["⚡ ",c,"V"]}),U.jsx("span",{children:"·"}),U.jsxs("span",{children:[d,"% SoC"]})]})]})]})}const V0=["var(--color-red)","var(--color-orange)","var(--color-purple)","var(--color-yellow)"];function qR(){const[o,n]=$e.useState(0),a=$e.useCallback(()=>{n(s=>(s+1)%V0.length)},[]);return U.jsx("header",{className:"masthead",id:"top",children:U.jsxs("div",{className:"masthead__frame",children:[U.jsxs("div",{className:"masthead__nav",children:[U.jsxs("a",{className:"masthead__brand",href:"#top","aria-label":"Battery 4.0 home",onPointerEnter:a,onFocus:a,style:{"--brand-mark-hue":V0[o]},children:[U.jsx("svg",{viewBox:"0 0 357 197",role:"img","aria-label":"GPC Brand Mark",xmlns:"http://www.w3.org/2000/svg",children:U.jsx("path",{d:"M126.258 5.20294C136.393 0.364805 148.294 -3.74013 154.569 5.61701C157.611 10.1362 156.09 16.708 159.866 18.5369C165.354 21.1948 170.193 10.7214 184.572 6.60626C234.209 -7.62125 258.532 55.552 242.717 95.3104C229.773 127.859 194.229 147.871 164.779 128.486C161.918 126.604 159.089 124.254 157.483 122.861L158.079 171.349C158.175 179.441 162.674 186.832 169.821 190.638L171.097 191.319V193.977H123.535V191.149L123.981 190.884C130.65 186.907 134.744 179.729 134.787 171.967L135.435 38.0916C134.936 26.3949 133.447 19.5253 127.108 16.3885C120.982 13.358 109.623 17.5799 104.73 30.7547C102.699 36.2309 106.113 45.2268 100.711 61.5486C92.7448 85.58 66.1558 94.9378 42.8427 90.036C34.0789 88.1857 25.7718 96.5226 27.3671 105.625C32.2493 133.558 112.484 94.5448 117.462 141.544C122.939 193.265 27.7084 213.617 3.45889 178.464C-1.21014 171.69 -1.1786 159.015 3.71377 149.774C8.02124 141.661 19.4442 136.812 19.4442 136.812C10.4465 133.622 3.78867 120.724 9.02139 106.145C13.3927 93.9702 25.8043 86.8884 27.3358 85.3572C27.3358 85.3572 24.4429 83.2518 22.9433 82.0076C15.3494 75.7445 10.1692 67.6418 8.06338 57.8485C0.40595 22.3331 34.8972 -3.1021 67.8993 6.08478C92.5527 12.9433 101.147 17.1655 126.258 5.20294ZM30.6327 138.205C12.967 144.277 18.625 170.648 34.5146 177.517C50.1701 184.291 72.8983 182.802 84.0126 177.23C95.1162 171.648 97.7649 163.438 97.3075 155.569C96.6584 144.574 82.8209 138.397 71.5048 138.354L30.6327 138.205ZM259.01 94.7469C245.375 45.6738 284.578 -11.4168 336.671 8.44611C346.647 12.2422 353.167 18.8662 356.4 23.1834L343.903 42.7283L342.968 42.6639C342.212 40.9412 340.096 37.2512 336.746 31.4881C321.526 5.34065 287.343 13.0292 281.058 42.1541V42.1434C271.826 84.8683 300.723 140.544 346.519 105.412L355.017 98.4363L356.4 99.1277C333.608 150.359 271.283 138.918 259.01 94.7469ZM214.682 36.3475C196.144 12.093 156.271 19.377 157.281 51.3621L157.388 98.1492C157.388 98.1492 162.163 108.782 169.81 114.833C186.966 128.401 210.31 120.575 219.446 100.51C228.423 80.774 227.87 53.5948 214.682 36.3475ZM53.4989 12.8055C46.4476 12.4865 40.4495 14.8901 35.5253 20.0047C30.5904 25.1406 27.9521 31.8074 27.5692 40.0057C27.0906 50.5007 29.718 59.6559 35.4823 67.4608C41.2255 75.2762 48.5002 79.3915 57.2743 79.7957C64.3364 80.1254 70.2718 77.7755 75.0898 72.7459C79.9182 67.6951 82.5134 61.1873 82.8856 53.1805C83.3855 42.3027 80.7478 32.9772 75.0048 25.1404C69.2509 17.3142 62.0606 13.2096 53.4989 12.8055Z",fill:"currentColor"})}),U.jsx("span",{className:"masthead__brand-tag",children:"CELL 4.0 / INDIA R&D"})]}),U.jsx("a",{href:"#register",className:"masthead__action-btn",children:"Register EOI"})]}),U.jsxs("div",{className:"masthead__content",children:[U.jsxs("div",{className:"masthead__badge-row",children:[U.jsx("span",{className:"masthead__badge masthead__badge--live",children:"EOI Floated"}),U.jsx("span",{className:"masthead__badge",children:"National Security & Indigenous R&D"}),U.jsx("span",{className:"masthead__badge",children:"Up to ₹2 Lakh Prize Pool"})]}),U.jsxs("h1",{className:"masthead__title-semantic",children:[U.jsx("span",{children:"Intelligent"}),U.jsx("span",{children:"Battery Cell 4.0"}),U.jsx("em",{children:"Hackathon 2026"})]}),U.jsx("p",{className:"masthead__dek",children:"The future of energy begins when we stop treating batteries as passive chemical cans and start reimagining them with AI: intelligent BMS, digital twin diagnostics, second-life cycles, and indigenous national security storage."})]}),U.jsxs("div",{className:"masthead__footer",children:[U.jsxs("p",{className:"masthead__meta",children:[U.jsx("span",{children:"National Innovation Program"}),U.jsx("span",{"aria-hidden":"true",children:"·"}),U.jsx("span",{children:"Oct 9 – Dec 1, 2026"}),U.jsx("span",{"aria-hidden":"true",children:"·"}),U.jsx("span",{children:"Grand Finale"})]}),U.jsx("p",{className:"scroll-cue","aria-hidden":"true",children:U.jsxs("span",{className:"scroll-cue__word",children:[U.jsx("span",{className:"scroll-cue__letter",style:{"--i":0},children:U.jsx("span",{className:"scroll-cue__glyph",children:"S"})}),U.jsx("span",{className:"scroll-cue__letter",style:{"--i":1},children:U.jsx("span",{className:"scroll-cue__glyph",children:"c"})}),U.jsx("span",{className:"scroll-cue__letter",style:{"--i":2},children:U.jsx("span",{className:"scroll-cue__glyph",children:"r"})}),U.jsx("span",{className:"scroll-cue__letter",style:{"--i":3},children:U.jsx("span",{className:"scroll-cue__glyph",children:"o"})}),U.jsx("span",{className:"scroll-cue__letter",style:{"--i":4},children:U.jsx("span",{className:"scroll-cue__glyph",children:"l"})}),U.jsx("span",{className:"scroll-cue__letter",style:{"--i":5},children:U.jsx("span",{className:"scroll-cue__glyph",children:"l"})})]})})]})]})})}function cl({text:o="",as:n="p",className:a="",highlightWord:s=""}){const c=$e.useRef(null),f=$e.useMemo(()=>o.trim().split(/\s+/),[o]);return $e.useEffect(()=>{const d=c.current;if(!d)return;const h=Array.from(d.querySelectorAll(".scroll-reveal-word"));if(!h.length)return;let p=[],_=null;const v=()=>{const A=window.scrollY,w=h.map(H=>H.getBoundingClientRect().top+A);let S=NaN,x=0;p=h.map((H,B)=>{const D=w[B];return Number.isNaN(S)||Math.abs(D-S)>3?(x=0,S=D):x+=1,{element:H,documentTop:D,wordInLine:x,lastProgress:-1}}),m()},m=()=>{const A=window.innerHeight,w=window.scrollY;p.forEach(S=>{const x=S.documentTop-w,H=.98*A-4*S.wordInLine,B=.72*A-S.wordInLine,D=Math.min(Math.max((H-x)/Math.max(H-B,1),0),1);Math.abs(D-S.lastProgress)>=.002&&(S.lastProgress=D,S.element.style.opacity=D.toFixed(4),S.element.style.filter=D>.99?"none":`blur(${((1-D)*6).toFixed(2)}px)`)})},y=()=>{cancelAnimationFrame(_),_=requestAnimationFrame(m)},M=()=>{cancelAnimationFrame(_),_=requestAnimationFrame(v)};return v(),window.addEventListener("scroll",y,{passive:!0}),window.addEventListener("resize",M),()=>{cancelAnimationFrame(_),window.removeEventListener("scroll",y),window.removeEventListener("resize",M)}},[f]),U.jsx(n,{ref:c,className:a,children:f.map((d,h)=>{const p=s&&d.toLowerCase().includes(s.toLowerCase());return U.jsxs(q0.Fragment,{children:[U.jsx("span",{className:"scroll-reveal-word",style:{opacity:.15,filter:"blur(4px)",color:p?"var(--color-red)":void 0,fontWeight:p?500:void 0},children:d}),h<f.length-1?" ":""]},`${d}-${h}`)})})}function YR(){return U.jsx("section",{className:"statement","aria-label":"The bottleneck of modern battery development",children:U.jsxs("div",{className:"statement__sticky",children:[U.jsx("h2",{className:"statement__heading",children:"Most battery innovations never survive past academic journals."}),U.jsx("h2",{className:"statement__heading",style:{color:"var(--color-red)"},children:"They stall in prototype cells before reaching gigawatt scale."}),U.jsxs("div",{className:"statement__tags-row",children:[U.jsx("p",{className:"statement__tag statement__tag--cost",children:"Thermal Runaway Risk"}),U.jsx("p",{className:"statement__tag statement__tag--effort",children:"Black-Box Cell Degradation"}),U.jsx("p",{className:"statement__tag statement__tag--tech",children:"Foreign Chemistry Dependency"})]})]})})}function WR(){const[o,n]=$e.useState(!1);return $e.useEffect(()=>{const a=()=>{const s=document.getElementById("battery-chart");if(!s)return;s.getBoundingClientRect().top<window.innerHeight*.8&&n(!0)};return window.addEventListener("scroll",a,{passive:!0}),a(),()=>window.removeEventListener("scroll",a)},[]),U.jsxs("figure",{className:"imagination-chart",id:"battery-chart",children:[U.jsxs("div",{className:"imagination-chart__header",children:[U.jsx("h3",{className:"imagination-chart__title",children:"Battery Cycle Life vs. AI Optimization Fidelity"}),U.jsx("p",{className:"imagination-chart__subtitle",children:"Comparing unmonitored degradation, rule-based BMS, and AI-driven Digital Twin 4.0 retention."})]}),U.jsx("div",{className:"imagination-chart__plot",children:U.jsxs("svg",{className:"imagination-chart__svg",viewBox:"0 0 1000 520","aria-hidden":"true",children:[U.jsxs("g",{className:"imagination-chart__grid",children:[[450,360,270,180,90].map(a=>U.jsx("line",{x1:"80",x2:"960",y1:a,y2:a},a)),[180,320,460,600,740,880].map(a=>U.jsx("line",{x1:a,x2:a,y1:"50",y2:"450"},a))]}),U.jsxs("g",{className:"imagination-chart__axis",children:[U.jsx("line",{x1:"80",x2:"960",y1:"450",y2:"450"}),U.jsx("line",{x1:"80",x2:"80",y1:"50",y2:"450"})]}),U.jsxs("g",{className:"imagination-chart__ticks",children:[U.jsx("text",{x:"65",y:"450",textAnchor:"end",dominantBaseline:"middle",children:"0%"}),U.jsx("text",{x:"65",y:"360",textAnchor:"end",dominantBaseline:"middle",children:"25%"}),U.jsx("text",{x:"65",y:"270",textAnchor:"end",dominantBaseline:"middle",children:"50%"}),U.jsx("text",{x:"65",y:"180",textAnchor:"end",dominantBaseline:"middle",children:"75%"}),U.jsx("text",{x:"65",y:"90",textAnchor:"end",dominantBaseline:"middle",children:"100%"}),U.jsx("text",{x:"80",y:"480",textAnchor:"middle",children:"0"}),U.jsx("text",{x:"240",y:"480",textAnchor:"middle",children:"400 Cycles"}),U.jsx("text",{x:"440",y:"480",textAnchor:"middle",children:"800 Cycles"}),U.jsx("text",{x:"640",y:"480",textAnchor:"middle",children:"1,200 Cycles"}),U.jsx("text",{x:"840",y:"480",textAnchor:"middle",children:"1,600 Cycles"}),U.jsx("text",{x:"960",y:"480",textAnchor:"middle",children:"2,000 Cycles"})]}),U.jsxs("g",{className:"imagination-chart__lines",children:[U.jsx("path",{className:"imagination-chart__line",d:"M 80 90 L 220 110 L 360 160 L 500 280 L 640 400 L 780 440 L 960 450",pathLength:"1",style:{"--line-accent":"var(--color-red)","--line-draw":o?"1":"0"}}),U.jsx("path",{className:"imagination-chart__line",d:"M 80 90 L 220 105 L 360 140 L 500 185 L 640 240 L 780 310 L 960 380",pathLength:"1",style:{"--line-accent":"var(--color-yellow)","--line-draw":o?"1":"0"}}),U.jsx("path",{className:"imagination-chart__line",d:"M 80 90 L 220 92 L 360 95 L 500 102 L 640 112 L 780 120 L 960 130",pathLength:"1",style:{"--line-accent":"var(--color-purple)","--line-draw":o?"1":"0"}})]})]})}),U.jsxs("ul",{className:"imagination-chart__legend",children:[U.jsxs("li",{className:"imagination-chart__legend-item",style:{"--line-accent":"var(--color-purple)"},children:[U.jsx("span",{className:"imagination-chart__legend-box","aria-hidden":"true"}),U.jsx("span",{children:"Intelligent Cell 4.0 (AI Digital Twin & Smart Chemistry)"})]}),U.jsxs("li",{className:"imagination-chart__legend-item",style:{"--line-accent":"var(--color-yellow)"},children:[U.jsx("span",{className:"imagination-chart__legend-box","aria-hidden":"true"}),U.jsx("span",{children:"Rule-based Standard BMS"})]}),U.jsxs("li",{className:"imagination-chart__legend-item",style:{"--line-accent":"var(--color-red)"},children:[U.jsx("span",{className:"imagination-chart__legend-box","aria-hidden":"true"}),U.jsx("span",{children:"Unmonitored / Conventional Lithium-Ion Pack"})]})]}),U.jsx("figcaption",{className:"imagination-chart__caption",children:"Figure 1.0 — Predictive digital twins prevent micro-dendrite formation, preserving state-of-health up to 3x longer than traditional cut-off thresholds."})]})}const Ch=[{word:"Thermal Safety",prob:45,color:"var(--color-red)",desc:"Mitigating micro-dendrite thermal runaway before catastrophic failure."},{word:"Digital Twins",prob:31,color:"var(--color-orange)",desc:"Real-time electrochemical physics simulation running on IoT edge nodes."},{word:"Second-Life Reuse",prob:17,color:"var(--color-purple)",desc:"Cascading EV battery packs into grid-scale renewable energy storage."},{word:"Indigenous Tech",prob:7,color:"var(--color-yellow)",desc:"Sovereign sodium-ion and national security storage independent of global supply."}];function ZR(){const[o,n]=$e.useState(0);return U.jsx("section",{className:"probability","aria-labelledby":"prob-heading",children:U.jsxs("div",{className:"probability__inner",children:[U.jsx("p",{className:"probability__eyebrow",children:"Electrochemical Paradigm Shift"}),U.jsxs("h2",{id:"prob-heading",className:"probability__heading",children:["The future of battery technology is"," ",U.jsxs("em",{style:{color:Ch[o].color,fontStyle:"italic"},children:[Ch[o].word,"."]})]}),U.jsx("ol",{className:"probability__candidates",children:Ch.map((a,s)=>U.jsxs("li",{className:`probability__candidate ${o===s?"is-active":""}`,style:{"--cand-color":a.color,"--cand-fill":o===s?"1":`${a.prob/100}`},onPointerEnter:()=>n(s),onClick:()=>n(s),tabIndex:0,role:"button",children:[U.jsx("div",{className:"probability__candidate-bar"}),U.jsxs("div",{children:[U.jsx("span",{className:"probability__candidate-word",children:a.word}),U.jsx("p",{className:"probability__candidate-desc",children:a.desc})]}),U.jsxs("span",{className:"probability__candidate-value",children:[a.prob,"% Probability"]})]},a.word))}),U.jsx("p",{className:"probability__takeaway",children:'"The conventional engineering choice is rarely the breakthrough that reimagines an industry."'})]})})}function KR(){const[o,n]=$e.useState(!1),[a,s]=$e.useState(!1);return U.jsx("section",{className:"prompt-split","aria-label":"Two approaches to battery innovation",children:U.jsxs("div",{className:"prompt-split__grid",children:[U.jsxs("article",{className:"prompt-split__column",children:[U.jsxs("div",{children:[U.jsx("span",{className:"prompt-split__label prompt-split__label--one",children:"Group 1: Incremental Patch"}),U.jsx("h2",{className:"prompt-split__font-source",children:'"Add an external temperature probe to an off-the-shelf lithium pack."'})]}),U.jsxs("div",{className:"prompt-split__paper-stage",children:[U.jsx("img",{src:"/brand/gpc/props/refrigerator-clean-line-sketch.png",alt:"Conventional battery pack sketch",className:`prompt-split__sketch-img ${o?"is-crumpled":""}`,onClick:()=>n(!o)}),U.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>n(!o),children:[U.jsx("img",{src:"/brand/gpc/props/vintage-fountain-pen.png",alt:"",style:{width:"18px",height:"auto"}}),U.jsx("span",{children:o?"Unfold Sheet":"Crumple & Discard"})]})]})]}),U.jsxs("article",{className:"prompt-split__column",children:[U.jsxs("div",{children:[U.jsx("span",{className:"prompt-split__label prompt-split__label--two",children:"Group 2: Applied Imagination"}),U.jsx("h2",{className:"prompt-split__font-source",children:'"Design an indigenous AI digital twin that predicts dendrite formation at the atomic layer."'})]}),U.jsxs("div",{className:"prompt-split__paper-stage",children:[U.jsx("img",{src:"/brand/gpc/props/preserved-food-clean-line-sketch.png",alt:"Electrochemical architecture sketch",className:`prompt-split__sketch-img ${a?"is-crumpled":""}`,onClick:()=>s(!a)}),U.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>s(!a),children:[U.jsx("img",{src:"/brand/gpc/props/vintage-scissors.png",alt:"",style:{width:"18px",height:"auto"}}),U.jsx("span",{children:a?"Reset Blueprint":"Cut Paper & Reimagine"})]})]})]})]})})}const QR=[{id:"01",title:"Intelligent Battery Management Systems (BMS)",desc:"Next-generation algorithmic state estimation (SoC, SoH, SoP) with adaptive machine learning models on edge microcontrollers.",tag:"Core AI Track"},{id:"02",title:"Battery Safety & Thermal Runaway Mitigation",desc:"Multi-physics early-warning detection systems, vapor pressure venting triggers, and passive/active propagation barriers.",tag:"Safety Critical"},{id:"03",title:"Smart Charging & Second-Life Cascading",desc:"Dynamic pulse charging protocols, health-conscious fast charging, and algorithmic sorting of retired EV modules for stationary storage.",tag:"Circular Economy"},{id:"04",title:"Renewable Energy Grid Storage",desc:"High-inertia buffer storage algorithms, microgrid coordination, and utility-scale integration with solar and wind variability.",tag:"Grid Infrastructure"},{id:"05",title:"Battery Diagnostics & Physics Digital Twins",desc:"Coupling electrochemical partial differential equations with neural surrogate models for non-invasive degradation mapping.",tag:"Digital Twin"},{id:"06",title:"IoT-Enabled Wireless Monitoring",desc:"Cell-level impedance spectroscopy, ultra-low power wireless sensor mesh networks, and cloud telemetry pipelines.",tag:"Hardware & IoT"},{id:"07",title:"Indigenous Battery Chemistries",desc:"Sodium-ion, iron-redox, and zinc-air architectures built entirely using domestic, non-critical raw material supply chains.",tag:"Atmanirbhar R&D"},{id:"08",title:"National Security & Defense Storage",desc:"Sub-zero military drone propulsion, resilient combat vehicle packs, and tactical EMP-hardened energy repositories.",tag:"Strategic Defense"}];function JR(){return U.jsxs("section",{className:"themes-section",id:"themes",children:[U.jsxs("div",{className:"themes-section__intro",children:[U.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"01 / Core Problem Statements"}),U.jsx("h2",{className:"article-block__heading",children:"Eight strategic domains shaping the next energy century."}),U.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Participants are invited to submit groundbreaking software algorithms, hardware prototypes, or full-stack digital twins across these critical pillars."})]}),U.jsx("div",{className:"themes-grid",children:QR.map(o=>U.jsxs("div",{className:"theme-card",children:[U.jsxs("div",{children:[U.jsxs("span",{className:"theme-card__idx",children:[o.id," / THEME"]}),U.jsx("h3",{className:"theme-card__title",children:o.title}),U.jsx("p",{className:"theme-card__desc",children:o.desc})]}),U.jsx("span",{className:"theme-card__tag",children:o.tag})]},o.id))})]})}const X0=[{src:"/brand/gpc/maya-spectrum/smart-fridge.png",label:"18650 Pack with External Relay"},{src:"/brand/gpc/maya-spectrum/skeuomorphic-notes.png",label:"Lead-Acid Legacy UPS"},{src:"/brand/gpc/maya-spectrum/analog-smartwatch.png",label:"Rule-based Fixed Voltage Cutoff"},{src:"/brand/gpc/maya-spectrum/radio-smart-speaker.png",label:"Standard LiFePO4 Golf Cart Battery"}],k0=[{src:"/brand/gpc/maya-spectrum/apple-newton.jpg",label:"Untested Quantum Bio-Cell"},{src:"/brand/gpc/maya-spectrum/google-glass.png",label:"Direct Graphene Supercapacitor"},{src:"/brand/gpc/maya-spectrum/sinclair-c5.webp",label:"Pure Lithium Anode without Coating"},{src:"/brand/gpc/maya-spectrum/segway.png",label:"Solid-State Electrolyte Lab Strip"}];function $R(){const[o,n]=$e.useState(50),[a,s]=$e.useState([X0[0],k0[0]]),c=$e.useRef(o),f=d=>{const h=Number(d.target.value);if(n(h),Math.abs(h-c.current)>=12){c.current=h;const _=h>50?k0:X0,v=_[Math.floor(Math.random()*_.length)];s(m=>[...m.slice(-4),{...v,key:Date.now()+Math.random()}])}};return U.jsx("section",{className:"loewy-maya",children:U.jsxs("div",{className:"loewy-maya__inner",children:[U.jsxs("div",{className:"loewy-maya__copy",children:[U.jsx("p",{className:"loewy-maya__label",children:"THE ENGINEERING FRONTIER"}),U.jsxs("h2",{className:"loewy-maya__heading",children:[U.jsx("span",{children:"Most advanced"}),U.jsxs("span",{children:[U.jsx("em",{children:"yet"})," acceptable."]})]}),U.jsx("p",{className:"loewy-maya__dek",children:"Push energy storage forward into the future without making it impossible to manufacture."})]}),U.jsxs("div",{className:"maya-spectrum",children:[U.jsx("h3",{className:"maya-spectrum__heading",children:"Balance the Innovation Spectrum: Familiarity vs. Radical Leap"}),U.jsxs("div",{className:"maya-spectrum__labels",children:[U.jsx("span",{className:"maya-spectrum__label--familiar",style:{opacity:.5+(100-o)/200},children:"← Too Conventional (Commodity Cell)"}),U.jsx("span",{className:"maya-spectrum__label--radical",style:{opacity:.5+o/200},children:"Too Radical (Unmanufacturable) →"})]}),U.jsx("div",{className:"maya-spectrum__control",children:U.jsx("input",{type:"range",min:"0",max:"100",value:o,onChange:f,className:"maya-spectrum__range","aria-label":"Spectrum from too familiar to too radical"})}),U.jsx("div",{className:"maya-spectrum__stage",children:a.map((d,h)=>U.jsxs("div",{className:"maya-spawn-card",children:[U.jsx("img",{src:d.src,alt:d.label}),U.jsx("span",{children:d.label})]},d.key||h))})]})]})})}const t2=[{phase:"PHASE 01",date:"09 OCT 2026",status:"ACTIVE NOW",title:"Registration & EOI Opens",desc:"Expression of Interest (EOI) is officially floated across national universities, research labs, and startups. Portal open for team submissions."},{phase:"PHASE 02",date:"30 OCT 2026",status:"HARD DEADLINE",title:"Registration Deadline",desc:"Final cutoff for initial abstract proposals, team rosters, and theme domain selections. Screening of applications begins immediately."},{phase:"PHASE 03",date:"NOV 2026",status:"INCUBATION & DEV",title:"Mentoring & Rapid Prototyping",desc:"Shortlisted applicants receive technical mentoring from leading battery scientists, digital twin architects, and electrochemical patent holders."},{phase:"PHASE 04",date:"01 DEC 2026",status:"TENTATIVE ANNOUNCEMENT",title:"Grand Finale Showcase",desc:"Final live prototype evaluation, investor jury pitches, award of ₹2 Lakh prize money, and incubation partner onboarding."}];function e2(){return U.jsxs("section",{className:"timeline-section",id:"timeline",children:[U.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[U.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"02 / Important Milestones"}),U.jsx("h2",{className:"article-block__heading",children:"Critical Timeline & Roadmap"}),U.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Mark these mandatory deadlines to ensure your team qualifies for mentorship and finale consideration."})]}),U.jsx("div",{className:"timeline-grid",children:t2.map(o=>U.jsxs("div",{className:"timeline-card",children:[U.jsxs("span",{className:"timeline-card__phase",children:[o.phase," · ",o.status]}),U.jsx("h3",{className:"timeline-card__date",children:o.date}),U.jsx("h4",{style:{fontFamily:"var(--font-sans)",fontSize:"1.1rem",fontWeight:500,marginBottom:"0.6rem",color:"var(--color-neutral-500)"},children:o.title}),U.jsx("p",{className:"timeline-card__desc",children:o.desc})]},o.phase))})]})}const n2=[{icon:"🏆",title:"Up to ₹2,00,000 Cash Prizes",desc:"Direct grant-style cash prize pool distributed across top category winners, alongside official national certificates."},{icon:"🔬",title:"Pre-Finale Scientist Mentorship",desc:"Dedicated 1-on-1 weekly mentoring sessions with premier battery researchers, simulation engineers, and hardware builders."},{icon:"🚀",title:"Incubation & Lab Access Opportunities",desc:"Fast-track incubation support, venture funding introductions, and access to advanced battery cycler & testing infrastructure."}],i2=[{tier:"STUDENTS & SCHOLARS",fee:"₹500",desc:"Enrolled undergraduate, postgraduate, and PhD scholars from accredited academic institutions.",badge:"Subsidized Academic Rate"},{tier:"STUDENT START-UPS",fee:"₹1,500",desc:"Early-stage venture teams founded and driven by currently enrolled university students.",badge:"Popular Tier",highlight:!0},{tier:"MSMEs & REGISTERED ENTITIES",fee:"₹2,000",desc:"Registered micro, small, and medium enterprises, spin-offs, and commercial technology companies.",badge:"Enterprise Tier"}];function a2(){return U.jsxs("section",{className:"fees-section",id:"fees",children:[U.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[U.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"03 / Value & Investment"}),U.jsx("h2",{className:"article-block__heading",children:"Prizes, Incubation & Registration Tiers"}),U.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Transparent fee structure dedicated to fueling world-class jury evaluation, compute grants, and cash prize distribution."})]}),U.jsx("div",{className:"benefits-row",children:n2.map(o=>U.jsxs("div",{className:"benefit-card",children:[U.jsx("div",{className:"benefit-card__icon",children:o.icon}),U.jsx("h3",{className:"benefit-card__title",children:o.title}),U.jsx("p",{className:"benefit-card__desc",children:o.desc})]},o.title))}),U.jsx("div",{className:"fees-grid",children:i2.map(o=>U.jsxs("div",{className:`fee-card ${o.highlight?"fee-card--highlight":""}`,children:[U.jsxs("div",{children:[U.jsx("span",{className:"fee-card__tier",children:o.tier}),U.jsx("div",{className:"fee-card__amount",children:o.fee}),U.jsx("p",{className:"fee-card__desc",children:o.desc})]}),U.jsx("a",{href:"#register",className:"cut-button",style:{textDecoration:"none"},children:"Select & Register"})]},o.tier))})]})}var Cp={};(function o(n,a,s,c){var f=!!(n.Worker&&n.Blob&&n.Promise&&n.OffscreenCanvas&&n.OffscreenCanvasRenderingContext2D&&n.HTMLCanvasElement&&n.HTMLCanvasElement.prototype.transferControlToOffscreen&&n.URL&&n.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",h=(function(){if(!n.OffscreenCanvas)return!1;try{var F=new OffscreenCanvas(1,1),P=F.getContext("2d");P.fillRect(0,0,1,1);var At=F.transferToImageBitmap();P.createPattern(At,"no-repeat")}catch{return!1}return!0})();function p(){}function _(F){var P=a.exports.Promise,At=P!==void 0?P:n.Promise;return typeof At=="function"?new At(F):(F(p,p),null)}var v=(function(F,P){return{transform:function(At){if(F)return At;if(P.has(At))return P.get(At);var Ot=new OffscreenCanvas(At.width,At.height),b=Ot.getContext("2d");return b.drawImage(At,0,0),P.set(At,Ot),Ot},clear:function(){P.clear()}}})(h,new Map),m=(function(){var F=Math.floor(16.666666666666668),P,At,Ot={},b=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(P=function(G){var st=Math.random();return Ot[st]=requestAnimationFrame(function $(vt){b===vt||b+F-1<vt?(b=vt,delete Ot[st],G()):Ot[st]=requestAnimationFrame($)}),st},At=function(G){Ot[G]&&cancelAnimationFrame(Ot[G])}):(P=function(G){return setTimeout(G,F)},At=function(G){return clearTimeout(G)}),{frame:P,cancel:At}})(),y=(function(){var F,P,At={};function Ot(b){function G(st,$){b.postMessage({options:st||{},callback:$})}b.init=function($){var vt=$.transferControlToOffscreen();b.postMessage({canvas:vt},[vt])},b.fire=function($,vt,Dt){if(P)return G($,null),P;var bt=Math.random().toString(36).slice(2);return P=_(function(Mt){function wt(Zt){Zt.data.callback===bt&&(delete At[bt],b.removeEventListener("message",wt),P=null,v.clear(),Dt(),Mt())}b.addEventListener("message",wt),G($,bt),At[bt]=wt.bind(null,{data:{callback:bt}})}),P},b.reset=function(){b.postMessage({reset:!0});for(var $ in At)At[$](),delete At[$]}}return function(){if(F)return F;if(!s&&f){var b=["var CONFETTI, SIZE = {}, module = {};","("+o.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{F=new Worker(URL.createObjectURL(new Blob([b])))}catch(G){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",G),null}Ot(F)}return F}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function A(F,P){return P?P(F):F}function w(F){return F!=null}function S(F,P,At){return A(F&&w(F[P])?F[P]:M[P],At)}function x(F){return F<0?0:Math.floor(F)}function H(F,P){return Math.floor(Math.random()*(P-F))+F}function B(F){return parseInt(F,16)}function D(F){return F.map(W)}function W(F){var P=String(F).replace(/[^0-9a-f]/gi,"");return P.length<6&&(P=P[0]+P[0]+P[1]+P[1]+P[2]+P[2]),{r:B(P.substring(0,2)),g:B(P.substring(2,4)),b:B(P.substring(4,6))}}function X(F){var P=S(F,"origin",Object);return P.x=S(P,"x",Number),P.y=S(P,"y",Number),P}function z(F){F.width=document.documentElement.clientWidth,F.height=document.documentElement.clientHeight}function q(F){var P=F.getBoundingClientRect();F.width=P.width,F.height=P.height}function N(F){var P=document.createElement("canvas");return P.style.position="fixed",P.style.top="0px",P.style.left="0px",P.style.pointerEvents="none",P.style.zIndex=F,P}function C(F,P,At,Ot,b,G,st,$,vt){F.save(),F.translate(P,At),F.rotate(G),F.scale(Ot,b),F.arc(0,0,1,st,$,vt),F.restore()}function k(F){var P=F.angle*(Math.PI/180),At=F.spread*(Math.PI/180);return{x:F.x,y:F.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:F.startVelocity*.5+Math.random()*F.startVelocity,angle2D:-P+(.5*At-Math.random()*At),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:F.color,shape:F.shape,tick:0,totalTicks:F.ticks,decay:F.decay,drift:F.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:F.gravity*3,ovalScalar:.6,scalar:F.scalar,flat:F.flat}}function ht(F,P){P.x+=Math.cos(P.angle2D)*P.velocity+P.drift,P.y+=Math.sin(P.angle2D)*P.velocity+P.gravity,P.velocity*=P.decay,P.flat?(P.wobble=0,P.wobbleX=P.x+10*P.scalar,P.wobbleY=P.y+10*P.scalar,P.tiltSin=0,P.tiltCos=0,P.random=1):(P.wobble+=P.wobbleSpeed,P.wobbleX=P.x+10*P.scalar*Math.cos(P.wobble),P.wobbleY=P.y+10*P.scalar*Math.sin(P.wobble),P.tiltAngle+=.1,P.tiltSin=Math.sin(P.tiltAngle),P.tiltCos=Math.cos(P.tiltAngle),P.random=Math.random()+2);var At=P.tick++/P.totalTicks,Ot=P.x+P.random*P.tiltCos,b=P.y+P.random*P.tiltSin,G=P.wobbleX+P.random*P.tiltCos,st=P.wobbleY+P.random*P.tiltSin;if(F.fillStyle="rgba("+P.color.r+", "+P.color.g+", "+P.color.b+", "+(1-At)+")",F.beginPath(),d&&P.shape.type==="path"&&typeof P.shape.path=="string"&&Array.isArray(P.shape.matrix))F.fill(lt(P.shape.path,P.shape.matrix,P.x,P.y,Math.abs(G-Ot)*.1,Math.abs(st-b)*.1,Math.PI/10*P.wobble));else if(P.shape.type==="bitmap"){var $=Math.PI/10*P.wobble,vt=Math.abs(G-Ot)*.1,Dt=Math.abs(st-b)*.1,bt=P.shape.bitmap.width*P.scalar,Mt=P.shape.bitmap.height*P.scalar,wt=new DOMMatrix([Math.cos($)*vt,Math.sin($)*vt,-Math.sin($)*Dt,Math.cos($)*Dt,P.x,P.y]);wt.multiplySelf(new DOMMatrix(P.shape.matrix));var Zt=F.createPattern(v.transform(P.shape.bitmap),"no-repeat");Zt.setTransform(wt),F.globalAlpha=1-At,F.fillStyle=Zt,F.fillRect(P.x-bt/2,P.y-Mt/2,bt,Mt),F.globalAlpha=1}else if(P.shape==="circle")F.ellipse?F.ellipse(P.x,P.y,Math.abs(G-Ot)*P.ovalScalar,Math.abs(st-b)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI):C(F,P.x,P.y,Math.abs(G-Ot)*P.ovalScalar,Math.abs(st-b)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI);else if(P.shape==="star")for(var I=Math.PI/2*3,Ae=4*P.scalar,Jt=8*P.scalar,Yt=P.x,Nt=P.y,oe=5,Xt=Math.PI/oe;oe--;)Yt=P.x+Math.cos(I)*Jt,Nt=P.y+Math.sin(I)*Jt,F.lineTo(Yt,Nt),I+=Xt,Yt=P.x+Math.cos(I)*Ae,Nt=P.y+Math.sin(I)*Ae,F.lineTo(Yt,Nt),I+=Xt;else F.moveTo(Math.floor(P.x),Math.floor(P.y)),F.lineTo(Math.floor(P.wobbleX),Math.floor(b)),F.lineTo(Math.floor(G),Math.floor(st)),F.lineTo(Math.floor(Ot),Math.floor(P.wobbleY));return F.closePath(),F.fill(),P.tick<P.totalTicks}function ut(F,P,At,Ot,b){var G=P.slice(),st=F.getContext("2d"),$,vt,Dt=_(function(bt){function Mt(){$=vt=null,st.clearRect(0,0,Ot.width,Ot.height),v.clear(),b(),bt()}function wt(){s&&!(Ot.width===c.width&&Ot.height===c.height)&&(Ot.width=F.width=c.width,Ot.height=F.height=c.height),!Ot.width&&!Ot.height&&(At(F),Ot.width=F.width,Ot.height=F.height),st.clearRect(0,0,Ot.width,Ot.height),G=G.filter(function(Zt){return ht(st,Zt)}),G.length?$=m.frame(wt):Mt()}$=m.frame(wt),vt=Mt});return{addFettis:function(bt){return G=G.concat(bt),Dt},canvas:F,promise:Dt,reset:function(){$&&m.cancel($),vt&&vt()}}}function yt(F,P){var At=!F,Ot=!!S(P||{},"resize"),b=!1,G=S(P,"disableForReducedMotion",Boolean),st=f&&!!S(P||{},"useWorker"),$=st?y():null,vt=At?z:q,Dt=F&&$?!!F.__confetti_initialized:!1,bt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Mt;function wt(I,Ae,Jt){for(var Yt=S(I,"particleCount",x),Nt=S(I,"angle",Number),oe=S(I,"spread",Number),Xt=S(I,"startVelocity",Number),L=S(I,"decay",Number),T=S(I,"gravity",Number),at=S(I,"drift",Number),xt=S(I,"colors",D),Et=S(I,"ticks",Number),_t=S(I,"shapes"),Kt=S(I,"scalar"),It=!!S(I,"flat"),Bt=X(I),he=Yt,Rt=[],jt=F.width*Bt.x,ee=F.height*Bt.y;he--;)Rt.push(k({x:jt,y:ee,angle:Nt,spread:oe,startVelocity:Xt,color:xt[he%xt.length],shape:_t[H(0,_t.length)],ticks:Et,decay:L,gravity:T,drift:at,scalar:Kt,flat:It}));return Mt?Mt.addFettis(Rt):(Mt=ut(F,Rt,vt,Ae,Jt),Mt.promise)}function Zt(I){var Ae=G||S(I,"disableForReducedMotion",Boolean),Jt=S(I,"zIndex",Number);if(Ae&&bt)return _(function(Xt){Xt()});At&&Mt?F=Mt.canvas:At&&!F&&(F=N(Jt),document.body.appendChild(F)),Ot&&!Dt&&vt(F);var Yt={width:F.width,height:F.height};$&&!Dt&&$.init(F),Dt=!0,$&&(F.__confetti_initialized=!0);function Nt(){if($){var Xt={getBoundingClientRect:function(){if(!At)return F.getBoundingClientRect()}};vt(Xt),$.postMessage({resize:{width:Xt.width,height:Xt.height}});return}Yt.width=Yt.height=null}function oe(){Mt=null,Ot&&(b=!1,n.removeEventListener("resize",Nt)),At&&F&&(document.body.contains(F)&&document.body.removeChild(F),F=null,Dt=!1)}return Ot&&!b&&(b=!0,n.addEventListener("resize",Nt,!1)),$?$.fire(I,Yt,oe):wt(I,Yt,oe)}return Zt.reset=function(){$&&$.reset(),Mt&&Mt.reset()},Zt}var gt;function Z(){return gt||(gt=yt(null,{useWorker:!0,resize:!0})),gt}function lt(F,P,At,Ot,b,G,st){var $=new Path2D(F),vt=new Path2D;vt.addPath($,new DOMMatrix(P));var Dt=new Path2D;return Dt.addPath(vt,new DOMMatrix([Math.cos(st)*b,Math.sin(st)*b,-Math.sin(st)*G,Math.cos(st)*G,At,Ot])),Dt}function et(F){if(!d)throw new Error("path confetti are not supported in this browser");var P,At;typeof F=="string"?P=F:(P=F.path,At=F.matrix);var Ot=new Path2D(P),b=document.createElement("canvas"),G=b.getContext("2d");if(!At){for(var st=1e3,$=st,vt=st,Dt=0,bt=0,Mt,wt,Zt=0;Zt<st;Zt+=2)for(var I=0;I<st;I+=2)G.isPointInPath(Ot,Zt,I,"nonzero")&&($=Math.min($,Zt),vt=Math.min(vt,I),Dt=Math.max(Dt,Zt),bt=Math.max(bt,I));Mt=Dt-$,wt=bt-vt;var Ae=10,Jt=Math.min(Ae/Mt,Ae/wt);At=[Jt,0,0,Jt,-Math.round(Mt/2+$)*Jt,-Math.round(wt/2+vt)*Jt]}return{type:"path",path:P,matrix:At}}function Tt(F){var P,At=1,Ot="#000000",b='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof F=="string"?P=F:(P=F.text,At="scalar"in F?F.scalar:At,b="fontFamily"in F?F.fontFamily:b,Ot="color"in F?F.color:Ot);var G=10*At,st=""+G+"px "+b,$=new OffscreenCanvas(G,G),vt=$.getContext("2d");vt.font=st;var Dt=vt.measureText(P),bt=Math.ceil(Dt.actualBoundingBoxRight+Dt.actualBoundingBoxLeft),Mt=Math.ceil(Dt.actualBoundingBoxAscent+Dt.actualBoundingBoxDescent),wt=2,Zt=Dt.actualBoundingBoxLeft+wt,I=Dt.actualBoundingBoxAscent+wt;bt+=wt+wt,Mt+=wt+wt,$=new OffscreenCanvas(bt,Mt),vt=$.getContext("2d"),vt.font=st,vt.fillStyle=Ot,vt.fillText(P,Zt,I);var Ae=1/At;return{type:"bitmap",bitmap:$.transferToImageBitmap(),matrix:[Ae,0,0,Ae,-bt*Ae/2,-Mt*Ae/2]}}a.exports=function(){return Z().apply(this,arguments)},a.exports.reset=function(){Z().reset()},a.exports.create=yt,a.exports.shapeFromPath=et,a.exports.shapeFromText=Tt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Cp,!1);const r2=Cp.exports;Cp.exports.create;function s2(){const[o,n]=$e.useState(!1),[a,s]=$e.useState({name:"",email:"",category:"students",theme:"bms",message:""}),c=f=>{f.preventDefault(),!(!a.name||!a.email)&&(r2({particleCount:120,spread:70,origin:{y:.7},colors:["#f94e2a","#ffc013","#9b338f","#232424"]}),n(!0))};return U.jsxs("div",{className:"ground",id:"register",children:[U.jsxs("div",{className:"ground__contact",children:[U.jsx("form",{className:"ground-form",onSubmit:c,children:o?U.jsxs("div",{className:"ground-form__success",children:[U.jsx("h3",{children:"Expression of Interest Received"}),U.jsxs("p",{children:["Thank you, ",U.jsx("strong",{children:a.name}),". Your preliminary registration for the Intelligent Battery Cell 4.0 Hackathon has been logged. Our technical screening committee will reach out to ",U.jsx("strong",{children:a.email})," with next steps, discord access, and mentoring schedules before October 30, 2026."]}),U.jsx("button",{type:"button",className:"cut-button",style:{marginTop:"1.8rem",maxWidth:"240px"},onClick:()=>n(!1),children:"Register Another Team"})]}):U.jsxs("div",{className:"ground-form__content",children:[U.jsxs("div",{className:"ground-form__lede",children:[U.jsx("h2",{className:"ground-form__heading",children:"Ready to deploy your battery innovation at national scale?"}),U.jsx("p",{className:"ground-form__intro",children:"Submit your team's Expression of Interest (EOI). Open to students, research scholars, student startups, and registered MSMEs."})]}),U.jsxs("div",{className:"ground-form__field",children:[U.jsx("label",{className:"ground-form__label",htmlFor:"lead-name",children:"Lead Applicant Name / Team Leader"}),U.jsx("input",{id:"lead-name",type:"text",required:!0,placeholder:"e.g. Dr. A. Sharma / Alex Mercer",className:"ground-form__input",value:a.name,onChange:f=>s({...a,name:f.target.value})})]}),U.jsxs("div",{className:"ground-form__field",children:[U.jsx("label",{className:"ground-form__label",htmlFor:"lead-email",children:"Institutional / Corporate Email"}),U.jsx("input",{id:"lead-email",type:"email",required:!0,placeholder:"you@university.edu or founder@startup.in",className:"ground-form__input",value:a.email,onChange:f=>s({...a,email:f.target.value})})]}),U.jsxs("div",{className:"ground-form__field",children:[U.jsx("label",{className:"ground-form__label",htmlFor:"category-select",children:"Registration Category"}),U.jsxs("select",{id:"category-select",className:"ground-form__input ground-form__input--select",value:a.category,onChange:f=>s({...a,category:f.target.value}),children:[U.jsx("option",{value:"students",children:"Students & Research Scholars — ₹500/-"}),U.jsx("option",{value:"student-startups",children:"Student Start-ups (Enrolled Students) — ₹1,500/-"}),U.jsx("option",{value:"msme",children:"MSMEs & Registered Start-ups — ₹2,000/-"})]})]}),U.jsxs("div",{className:"ground-form__field",children:[U.jsx("label",{className:"ground-form__label",htmlFor:"theme-select",children:"Primary Hackathon Theme"}),U.jsxs("select",{id:"theme-select",className:"ground-form__input ground-form__input--select",value:a.theme,onChange:f=>s({...a,theme:f.target.value}),children:[U.jsx("option",{value:"bms",children:"Intelligent Battery Management Systems (BMS)"}),U.jsx("option",{value:"safety",children:"Battery Safety & Thermal Runaway Mitigation"}),U.jsx("option",{value:"second-life",children:"Smart Charging & Second-Life Storage"}),U.jsx("option",{value:"renewable",children:"Renewable Energy Grid Integration"}),U.jsx("option",{value:"digital-twin",children:"Battery Diagnostics & AI Digital Twins"}),U.jsx("option",{value:"iot",children:"IoT-Enabled Wireless Monitoring"}),U.jsx("option",{value:"indigenous",children:"Indigenous Battery Chemistries"}),U.jsx("option",{value:"defense",children:"National Security & Strategic Storage"})]})]}),U.jsxs("div",{className:"ground-form__field",children:[U.jsxs("label",{className:"ground-form__label",htmlFor:"note-message",children:["Abstract / Proposed Technical Approach ",U.jsx("span",{style:{opacity:.6},children:"(Optional)"})]}),U.jsx("textarea",{id:"note-message",rows:3,placeholder:"Summarize your cell chemistry, algorithm, or hardware prototype concept...",className:"ground-form__input",value:a.message,onChange:f=>s({...a,message:f.target.value})})]}),U.jsx("div",{style:{display:"none"},"aria-hidden":"true",children:U.jsx("input",{id:"note-website",type:"text",tabIndex:-1,autoComplete:"off"})}),U.jsx("button",{type:"submit",className:"cut-button",children:"Submit Expression of Interest (EOI)"})]})}),U.jsxs("aside",{className:"substack",children:[U.jsx("div",{className:"substack__portrait",children:U.jsx("img",{src:"/brand/gpc/pete-sena.jpg",alt:"Pete Sena / Jury Lead"})}),U.jsxs("div",{className:"substack__copy-wrap",children:[U.jsx("p",{className:"substack__name",children:"ORGANIZING ADVISORY COUNCIL"}),U.jsx("h3",{className:"substack__heading",children:"Guided by World-Class Energy Leaders"}),U.jsx("p",{className:"substack__copy",children:"Organized by the National Battery R&D Taskforce, partnering with academic incubators and frontier technologists to build sovereign battery independence."})]})]})]}),U.jsxs("footer",{className:"ground__footer",children:[U.jsxs("a",{className:"ground__maker",href:"https://theresonance.studio",target:"_blank",rel:"noreferrer",children:[U.jsx("img",{src:"/brand/resonance/glyph-dark.svg",alt:"The Resonance Mark"}),U.jsx("span",{children:"Aesthetic Architecture after The Resonance"})]}),U.jsxs("p",{className:"ground__copyright",children:[U.jsx("span",{children:"© 2026 Intelligent Battery Cell 4.0 Hackathon"}),U.jsx("a",{className:"ground__privacy",href:"#top",children:"Back to Altitude"})]})]})]})}function o2(){return U.jsxs("div",{className:"page-shell",children:[U.jsx(kR,{}),U.jsx(jR,{}),U.jsx(qR,{}),U.jsx("section",{className:"article-intro","aria-label":"Opening narrative",children:U.jsxs("div",{className:"article-intro__inner",children:[U.jsx(cl,{as:"p",className:"article-intro__lead",text:"I'm sitting on a flight, 30,000 feet in the sky, looking at battery specifications from the world's largest gigafactories, when I realize: everything we're doing with conventional battery R&D is fundamentally constrained.",highlightWord:"fundamentally"}),U.jsx(cl,{as:"p",className:"article-block",text:"We keep treating electrochemical cells like passive, sealed cans. We wrap millions of lithium-ion cylinders in metal casings, attach rudimentary voltage relays, and wonder why energy density plateaus, thermal runaway surprises us, and recycling remains an unsolved crisis."}),U.jsx(cl,{as:"p",className:"article-block",text:"The issue isn't raw chemistry alone. Chemistry has given us incredible breakthroughs over decades. The problem is a lack of applied intelligence: we don't have cells that can sense, think, adapt, and self-heal in real time."})]})}),U.jsx(YR,{}),U.jsx("section",{className:"article-block","aria-labelledby":"r-and-d-gap",children:U.jsxs("div",{className:"article-block__inner",children:[U.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"01 / The Stalled Revolution"}),U.jsx("h2",{className:"article-block__heading",id:"r-and-d-gap",children:"Thousands of research papers are published each month. Almost none reach domestic production."}),U.jsx(cl,{as:"p",text:"Every engineering institution has prototypes that demonstrated remarkable coin-cell performance under sterile laboratory conditions. But the moment those chemistries are scaled into high-vibration automotive packs or multi-megawatt grid containers, unpredictable thermal gradients destroy the lifespan."}),U.jsx(cl,{as:"p",text:"Intelligent Battery Cell 4.0 changes this trajectory by infusing artificial intelligence directly into the electrochemical loop: real-time digital twins, predictive impedance spectroscopy, IoT edge telemetry, and sovereign materials."})]})}),U.jsx(WR,{}),U.jsx(ZR,{}),U.jsx(KR,{}),U.jsx(JR,{}),U.jsx($R,{}),U.jsx(e2,{}),U.jsx(a2,{}),U.jsx(s2,{})]})}hM.createRoot(document.getElementById("root")).render(U.jsx(q0.StrictMode,{children:U.jsx(o2,{})}));
