(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function lx(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var nh={exports:{}},to={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function AM(){if(J_)return to;J_=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:l,type:s,key:d,ref:c!==void 0?c:null,props:f}}return to.Fragment=t,to.jsx=i,to.jsxs=i,to}var $_;function RM(){return $_||($_=1,nh.exports=AM()),nh.exports}var w=RM(),ih={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function CM(){if(ev)return lt;ev=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),E=Symbol.iterator;function R(B){return B===null||typeof B!="object"?null:(B=E&&B[E]||B["@@iterator"],typeof B=="function"?B:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function O(B,me,Ae){this.props=B,this.context=me,this.refs=S,this.updater=Ae||N}O.prototype.isReactComponent={},O.prototype.setState=function(B,me){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,me,"setState")},O.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function V(){}V.prototype=O.prototype;function C(B,me,Ae){this.props=B,this.context=me,this.refs=S,this.updater=Ae||N}var U=C.prototype=new V;U.constructor=C,y(U,O.prototype),U.isPureReactComponent=!0;var L=Array.isArray;function z(){}var b={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function k(B,me,Ae){var Z=Ae.ref;return{$$typeof:l,type:B,key:me,ref:Z!==void 0?Z:null,props:Ae}}function j(B,me){return k(B.type,me,B.props)}function ne(B){return typeof B=="object"&&B!==null&&B.$$typeof===l}function fe(B){var me={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Ae){return me[Ae]})}var J=/\/+/g;function ee(B,me){return typeof B=="object"&&B!==null&&B.key!=null?fe(""+B.key):me.toString(36)}function W(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(z,z):(B.status="pending",B.then(function(me){B.status==="pending"&&(B.status="fulfilled",B.value=me)},function(me){B.status==="pending"&&(B.status="rejected",B.reason=me)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function q(B,me,Ae,Z,he){var Te=typeof B;(Te==="undefined"||Te==="boolean")&&(B=null);var we=!1;if(B===null)we=!0;else switch(Te){case"bigint":case"string":case"number":we=!0;break;case"object":switch(B.$$typeof){case l:case t:we=!0;break;case x:return we=B._init,q(we(B._payload),me,Ae,Z,he)}}if(we)return he=he(B),we=Z===""?"."+ee(B,0):Z,L(he)?(Ae="",we!=null&&(Ae=we.replace(J,"$&/")+"/"),q(he,me,Ae,"",function(Gt){return Gt})):he!=null&&(ne(he)&&(he=j(he,Ae+(he.key==null||B&&B.key===he.key?"":(""+he.key).replace(J,"$&/")+"/")+we)),me.push(he)),1;we=0;var ve=Z===""?".":Z+":";if(L(B))for(var Ce=0;Ce<B.length;Ce++)Z=B[Ce],Te=ve+ee(Z,Ce),we+=q(Z,me,Ae,Te,he);else if(Ce=R(B),typeof Ce=="function")for(B=Ce.call(B),Ce=0;!(Z=B.next()).done;)Z=Z.value,Te=ve+ee(Z,Ce++),we+=q(Z,me,Ae,Te,he);else if(Te==="object"){if(typeof B.then=="function")return q(W(B),me,Ae,Z,he);throw me=String(B),Error("Objects are not valid as a React child (found: "+(me==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":me)+"). If you meant to render a collection of children, use an array instead.")}return we}function de(B,me,Ae){if(B==null)return B;var Z=[],he=0;return q(B,Z,"","",function(Te){return me.call(Ae,Te,he++)}),Z}function se(B){if(B._status===-1){var me=B._result,Ae=me();Ae.then(function(Z){(B._status===0||B._status===-1)&&(B._status=1,B._result=Z,Ae.status===void 0&&(Ae.status="fulfilled",Ae.value=Z))},function(Z){(B._status===0||B._status===-1)&&(B._status=2,B._result=Z,Ae.status===void 0&&(Ae.status="rejected",Ae.reason=Z))}),B._status===-1&&(B._status=0,B._result=Ae)}if(B._status===1)return B._result.default;throw B._result}var ce=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var me=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(me))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function Me(B){var me=b.T,Ae={};Ae.types=me!==null?me.types:null,b.T=Ae;try{var Z=B(),he=b.S;he!==null&&he(Ae,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(z,ce)}catch(Te){ce(Te)}finally{me!==null&&Ae.types!==null&&(me.types=Ae.types),b.T=me}}function je(B){var me=b.T;if(me!==null){var Ae=me.types;Ae===null?me.types=[B]:Ae.indexOf(B)===-1&&Ae.push(B)}else Me(je.bind(null,B))}var ke={map:de,forEach:function(B,me,Ae){de(B,function(){me.apply(this,arguments)},Ae)},count:function(B){var me=0;return de(B,function(){me++}),me},toArray:function(B){return de(B,function(me){return me})||[]},only:function(B){if(!ne(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return lt.Activity=_,lt.Children=ke,lt.Component=O,lt.Fragment=i,lt.Profiler=c,lt.PureComponent=C,lt.StrictMode=s,lt.Suspense=g,lt.ViewTransition=v,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,lt.__COMPILER_RUNTIME={__proto__:null,c:function(B){return b.H.useMemoCache(B)}},lt.addTransitionType=je,lt.cache=function(B){return function(){return B.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(B,me,Ae){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Z=y({},B.props),he=B.key;if(me!=null)for(Te in me.key!==void 0&&(he=""+me.key),me)!P.call(me,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&me.ref===void 0||(Z[Te]=me[Te]);var Te=arguments.length-2;if(Te===1)Z.children=Ae;else if(1<Te){for(var we=Array(Te),ve=0;ve<Te;ve++)we[ve]=arguments[ve+2];Z.children=we}return k(B.type,he,Z)},lt.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:f,_context:B},B},lt.createElement=function(B,me,Ae){var Z,he={},Te=null;if(me!=null)for(Z in me.key!==void 0&&(Te=""+me.key),me)P.call(me,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(he[Z]=me[Z]);var we=arguments.length-2;if(we===1)he.children=Ae;else if(1<we){for(var ve=Array(we),Ce=0;Ce<we;Ce++)ve[Ce]=arguments[Ce+2];he.children=ve}if(B&&B.defaultProps)for(Z in we=B.defaultProps,we)he[Z]===void 0&&(he[Z]=we[Z]);return k(B,Te,he)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(B){return{$$typeof:h,render:B}},lt.isValidElement=ne,lt.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:se}},lt.memo=function(B,me){return{$$typeof:m,type:B,compare:me===void 0?null:me}},lt.startTransition=Me,lt.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},lt.use=function(B){return b.H.use(B)},lt.useActionState=function(B,me,Ae){return b.H.useActionState(B,me,Ae)},lt.useCallback=function(B,me){return b.H.useCallback(B,me)},lt.useContext=function(B){return b.H.useContext(B)},lt.useDebugValue=function(){},lt.useDeferredValue=function(B,me){return b.H.useDeferredValue(B,me)},lt.useEffect=function(B,me){return b.H.useEffect(B,me)},lt.useEffectEvent=function(B){return b.H.useEffectEvent(B)},lt.useId=function(){return b.H.useId()},lt.useImperativeHandle=function(B,me,Ae){return b.H.useImperativeHandle(B,me,Ae)},lt.useInsertionEffect=function(B,me){return b.H.useInsertionEffect(B,me)},lt.useLayoutEffect=function(B,me){return b.H.useLayoutEffect(B,me)},lt.useMemo=function(B,me){return b.H.useMemo(B,me)},lt.useOptimistic=function(B,me){return b.H.useOptimistic(B,me)},lt.useReducer=function(B,me,Ae){return b.H.useReducer(B,me,Ae)},lt.useRef=function(B){return b.H.useRef(B)},lt.useState=function(B){return b.H.useState(B)},lt.useSyncExternalStore=function(B,me,Ae){return b.H.useSyncExternalStore(B,me,Ae)},lt.useTransition=function(){return b.H.useTransition()},lt.version="19.3.1",lt}var tv;function Dp(){return tv||(tv=1,ih.exports=CM()),ih.exports}var en=Dp();const ox=lx(en);var ah={exports:{}},no={},rh={exports:{}},sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function wM(){return nv||(nv=1,(function(l){function t(W,q){var de=W.length;W.push(q);e:for(;0<de;){var se=de-1>>>1,ce=W[se];if(0<c(ce,q))W[se]=q,W[de]=ce,de=se;else break e}}function i(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var q=W[0],de=W.pop();if(de!==q){W[0]=de;e:for(var se=0,ce=W.length,Me=ce>>>1;se<Me;){var je=2*(se+1)-1,ke=W[je],B=je+1,me=W[B];if(0>c(ke,de))B<ce&&0>c(me,ke)?(W[se]=me,W[B]=de,se=B):(W[se]=ke,W[je]=de,se=je);else if(B<ce&&0>c(me,de))W[se]=me,W[B]=de,se=B;else break e}}return q}function c(W,q){var de=W.sortIndex-q.sortIndex;return de!==0?de:W.id-q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();l.unstable_now=function(){return d.now()-h}}var g=[],m=[],x=1,_=null,v=3,E=!1,R=!1,N=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function C(W){for(var q=i(m);q!==null;){if(q.callback===null)s(m);else if(q.startTime<=W)s(m),q.sortIndex=q.expirationTime,t(g,q);else break;q=i(m)}}function U(W){if(N=!1,C(W),!R)if(i(g)!==null)R=!0,L||(L=!0,ne());else{var q=i(m);q!==null&&ee(U,q.startTime-W)}}var L=!1,z=-1,b=5,P=-1;function k(){return y?!0:!(l.unstable_now()-P<b)}function j(){if(y=!1,L){var W=l.unstable_now();P=W;var q=!0;try{e:{R=!1,N&&(N=!1,O(z),z=-1),E=!0;var de=v;try{t:{for(C(W),_=i(g);_!==null&&!(_.expirationTime>W&&k());){var se=_.callback;if(typeof se=="function"){_.callback=null,v=_.priorityLevel;var ce=se(_.expirationTime<=W);if(W=l.unstable_now(),typeof ce=="function"){_.callback=ce,C(W),q=!0;break t}_===i(g)&&s(g),C(W)}else s(g);_=i(g)}if(_!==null)q=!0;else{var Me=i(m);Me!==null&&ee(U,Me.startTime-W),q=!1}}break e}finally{_=null,v=de,E=!1}q=void 0}}finally{q?ne():L=!1}}}var ne;if(typeof V=="function")ne=function(){V(j)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,J=fe.port2;fe.port1.onmessage=j,ne=function(){J.postMessage(null)}}else ne=function(){S(j,0)};function ee(W,q){z=S(function(){W(l.unstable_now())},q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(W){W.callback=null},l.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<W?Math.floor(1e3/W):5},l.unstable_getCurrentPriorityLevel=function(){return v},l.unstable_next=function(W){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var de=v;v=q;try{return W()}finally{v=de}},l.unstable_requestPaint=function(){y=!0},l.unstable_runWithPriority=function(W,q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var de=v;v=W;try{return q()}finally{v=de}},l.unstable_scheduleCallback=function(W,q,de){var se=l.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?se+de:se):de=se,W){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=de+ce,W={id:x++,callback:q,priorityLevel:W,startTime:de,expirationTime:ce,sortIndex:-1},de>se?(W.sortIndex=de,t(m,W),i(g)===null&&W===i(m)&&(N?(O(z),z=-1):N=!0,ee(U,de-se))):(W.sortIndex=ce,t(g,W),R||E||(R=!0,L||(L=!0,ne()))),W},l.unstable_shouldYield=k,l.unstable_wrapCallback=function(W){var q=v;return function(){var de=v;v=q;try{return W.apply(this,arguments)}finally{v=de}}}})(sh)),sh}var iv;function NM(){return iv||(iv=1,rh.exports=wM()),rh.exports}var lh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function DM(){if(av)return Dn;av=1;var l=Dp();function t(x){var _="https://react.dev/errors/"+x;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)_+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+x+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(x,_,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:E==null?null:E===d?d:""+E,children:x,containerInfo:_,implementation:v}}var g=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,_){if(x==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(x){return{$$typeof:f,_reason:x}},Dn.createPortal=function(x,_){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return h(x,_,null,v)},Dn.flushSync=function(x){var _=g.T,v=s.p;try{if(g.T=null,s.p=2,x)return x()}finally{g.T=_,s.p=v,s.d.f()}},Dn.preconnect=function(x,_){typeof x=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(x,_))},Dn.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},Dn.preinit=function(x,_){if(typeof x=="string"&&_&&typeof _.as=="string"){var v=_.as,E=m(v,_.crossOrigin),R=typeof _.integrity=="string"?_.integrity:void 0,N=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;v==="style"?s.d.S(x,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:E,integrity:R,fetchPriority:N}):v==="script"&&s.d.X(x,{crossOrigin:E,integrity:R,fetchPriority:N,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Dn.preinitModule=function(x,_){if(typeof x=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var v=m(_.as,_.crossOrigin);s.d.M(x,{crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&s.d.M(x)},Dn.preload=function(x,_){if(typeof x=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var v=_.as,E=m(v,_.crossOrigin);s.d.L(x,v,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Dn.preloadModule=function(x,_){if(typeof x=="string")if(_){var v=m(_.as,_.crossOrigin);s.d.m(x,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else s.d.m(x)},Dn.requestFormReset=function(x){s.d.r(x)},Dn.unstable_batchedUpdates=function(x,_){return x(_)},Dn.useFormState=function(x,_,v){return g.H.useFormState(x,_,v)},Dn.useFormStatus=function(){return g.H.useHostTransitionStatus()},Dn.version="19.3.1",Dn}var rv;function UM(){if(rv)return lh.exports;rv=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),lh.exports=DM(),lh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function LM(){if(sv)return no;sv=1;var l=NM(),t=Dp(),i=UM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var o=a.return;if(o===null)break;var u=o.alternate;if(u===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===a)return g(o),e;if(u===r)return g(o),n;u=u.sibling}throw Error(s(188))}if(a.return!==r.return)a=o,r=u;else{for(var p=!1,A=o.child;A;){if(A===a){p=!0,a=o,r=u;break}if(A===r){p=!0,r=o,a=u;break}A=A.sibling}if(!p){for(A=u.child;A;){if(A===a){p=!0,a=u,r=o;break}if(A===r){p=!0,r=u,a=o;break}A=A.sibling}if(!p)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}function _(e,n,a,r,o,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,o,u)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&_(e.child,n,a,r,o,u))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function E(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function R(e){var n=[null,null],a=v(e);return a===null||N(n,e,a.child,{foundSelf:!1}),n}function N(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&N(e,n,a.child,r))return!0;a=a.sibling}return!1}function y(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,O=null;function V(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function C(e,n,a){return e===a?(O=e,!1):e===n?(O!==null&&(S=e),!0):!1}function U(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function L(e,n,a){for(var r=0,o=e;o;o=a(o))r++;o=0;for(var u=n;u;u=a(u))o++;for(;0<r-o;)e=a(e),r--;for(;0<o-r;)n=a(n),o--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var z=Object.assign,b=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),fe=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),Me=Symbol.for("react.activity"),je=Symbol.for("react.legacy_hidden"),ke=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),me=Symbol.for("react.recoverable"),Ae=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=Ae&&e[Ae]||e["@@iterator"],typeof e=="function"?e:null)}var he=Symbol.for("react.client.reference");function Te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===he?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case fe:return"Profiler";case ne:return"StrictMode";case q:return"Suspense";case de:return"SuspenseList";case Me:return"Activity";case B:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case ee:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case W:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case se:return n=e.displayName||null,n!==null?n:Te(e.type)||"Memo";case ce:n=e._payload,e=e._init;try{return Te(e(n))}catch{}}return null}var we=Array.isArray,ve=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gt={pending:!1,data:null,method:null,action:null},pt=[],gt=-1;function St(e){return{current:e}}function tt(e){0>gt||(e.current=pt[gt],pt[gt]=null,gt--)}function it(e,n){gt++,pt[gt]=e.current,e.current=n}var Vt=St(null),fn=St(null),Lt=St(null),$t=St(null);function X(e,n){switch(it(Lt,n),it(fn,e),it(Vt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?l_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=l_(n),e=o_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(Vt),it(Vt,e)}function nn(){tt(Vt),tt(fn),tt(Lt)}function Ut(e){var n=e.memoizedState;n!==null&&(Is._currentValue=n.memoizedState,it($t,e)),n=Vt.current;var a=o_(n,e.type);n!==a&&(it(fn,e),it(Vt,a))}function D(e){fn.current===e&&(tt(Vt),tt(fn)),$t.current===e&&(tt($t),Is._currentValue=Gt)}var M,$;function le(e){if(M===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||"",$=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+e+$}var ge=!1;function Re(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(Pe){var Y=Pe}Reflect.construct(e,[],Se)}else{try{Se.call()}catch(Pe){Y=Pe}Se=!1;try{var re=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Se=!0,new e}finally{Se&&(re!==void 0?Object.defineProperty(e.prototype,"props",re):delete e.prototype.props)}}}else{try{throw Error()}catch(Pe){Y=Pe}(Se=e())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(Pe){if(Pe&&Y&&typeof Pe.stack=="string")return[Pe.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),p=u[0],A=u[1];if(p&&A){var I=p.split(`
`),Q=A.split(`
`);for(o=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;o<Q.length&&!Q[o].includes("DetermineComponentFrameRoot");)o++;if(r===I.length||o===Q.length)for(r=I.length-1,o=Q.length-1;1<=r&&0<=o&&I[r]!==Q[o];)o--;for(;1<=r&&0<=o;r--,o--)if(I[r]!==Q[o]){if(r!==1||o!==1)do if(r--,o--,0>o||I[r]!==Q[o]){var oe=`
`+I[r].replace(" at new "," at ");return e.displayName&&oe.includes("<anonymous>")&&(oe=oe.replace("<anonymous>",e.displayName)),oe}while(1<=r&&0<=o);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?le(a):""}function Ue(e,n){switch(e.tag){case 26:case 27:case 5:return le(e.type);case 16:return le("Lazy");case 13:return e.child!==n&&n!==null?le("Suspense Fallback"):le("Suspense");case 19:return le("SuspenseList");case 0:case 15:return Re(e.type,!1);case 11:return Re(e.type.render,!1);case 1:return Re(e.type,!0);case 31:return le("Activity");case 30:return le("ViewTransition");default:return""}}function _e(e){try{var n="",a=null;do n+=Ue(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ee=Object.prototype.hasOwnProperty,De=l.unstable_scheduleCallback,$e=l.unstable_cancelCallback,ze=l.unstable_shouldYield,Ie=l.unstable_requestPaint,Xe=l.unstable_now,nt=l.unstable_getCurrentPriorityLevel,ot=l.unstable_ImmediatePriority,G=l.unstable_UserBlockingPriority,Ne=l.unstable_NormalPriority,ye=l.unstable_LowPriority,Le=l.unstable_IdlePriority,Ve=l.log,be=l.unstable_setDisableYieldValue,Je=null,Ge=null;function Rt(e){if(typeof Ve=="function"&&be(e),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(Je,e)}catch{}}var ct=Math.clz32?Math.clz32:Nu,Qn=Math.log,fi=Math.LN2;function Nu(e){return e>>>=0,e===0?32:31-(Qn(e)/fi|0)|0}var Jr=256,_r=262144,Pa=4194304;function ua(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vr(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var o=0,u=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~u,r!==0?o=ua(r):(p&=A,p!==0?o=ua(p):a||(a=A&~e,a!==0&&(o=ua(a))))):(A=r&~u,A!==0?o=ua(A):p!==0?o=ua(p):a||(a=r&~e,a!==0&&(o=ua(a)))),o===0?0:n!==0&&n!==o&&(n&u)===0&&(u=o&-o,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:o}function Ia(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Gi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-ct(a),o=1<<r;n|=e[r],a&=~o}return n}function ll(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ol(){var e=Pa;return Pa<<=1,(Pa&62914560)===0&&(Pa=4194304),e}function $r(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Vi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Eo(e,n,a,r,o,u){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,Q=e.hiddenUpdates;for(a=p&~a;0<a;){var oe=31-ct(a),Se=1<<oe;A[oe]=0,I[oe]=-1;var Y=Q[oe];if(Y!==null)for(Q[oe]=null,oe=0;oe<Y.length;oe++){var re=Y[oe];re!==null&&(re.lane&=-536870913)}a&=~Se}r!==0&&xr(e,r,0),u!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=u&~(p&~n))}function xr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ct(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function cl(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ct(a),o=1<<r;o&n|e[r]&n&&(e[r]|=n),a&=~o}}function ul(e,n){var a=n&-n;return a=(a&42)!==0?1:fl(a),(a&(e.suspendedLanes|n))!==0?0:a}function fl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bo(){var e=Ce.p;return e!==0?e:(e=window.event,e===void 0?32:W_(e.type))}function To(e,n){var a=Ce.p;try{return Ce.p=e,n()}finally{Ce.p=a}}var di=Math.random().toString(36).slice(2),T="__reactFiber$"+di,F="__reactProps$"+di,ue="__reactContainer$"+di,ie="__reactEvents$"+di,ae="__reactListeners$"+di,Be="__reactHandles$"+di,We="__reactResources$"+di,Oe="__reactMarker$"+di,Ze="__reactLoad$"+di;function Ke(e){delete e[T],delete e[F],delete e[ae],delete e[Be]}function rt(e){var n;if(n=e[T])return n;for(var a=e.parentNode;a;){if(n=a[ue]||a[T]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=T_(e);e!==null;){if(a=e[T])return a;e=T_(e)}return n}e=a,a=e.parentNode}return null}function ut(e){if(e=e[T]||e[ue]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function qe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function yt(e){var n=e[We];return n||(n=e[We]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _t(e){e[Oe]=!0}function Yt(e){e[Ze]=void 0}var Ft=new Set,vn={};function Fe(e,n){rn(e,n),rn(e+"Capture",n)}function rn(e,n){for(vn[e]=n,e=0;e<n.length;e++)Ft.add(n[e])}var Ct=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bn={},Jn={};function Xi(e){return Ee.call(Jn,e)?!0:Ee.call(Bn,e)?!1:Ct.test(e)?Jn[e]=!0:(Bn[e]=!0,!1)}var vt=!1;function Pt(){var e=vt;return vt=!1,e}function Kt(e,n,a){if(Xi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function $n(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function bt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ao(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,u=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(p){a=""+p,u.call(this,p)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Du(e){if(!e._valueTracker){var n=fa(e)?"checked":"value";e._valueTracker=Ao(e,n,""+e[n])}}function Zp(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=fa(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var Yx=/[\n"\\]/g;function hi(e){return e.replace(Yx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Uu(e,n,a,r,o,u,p,A){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+sn(n)):e.value!==""+sn(n)&&(e.value=""+sn(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?p==="number"&&e.value==n?Lu(e,sn(e.value)):Lu(e,sn(n)):a!=null?Lu(e,sn(a)):r!=null&&e.removeAttribute("value"),o==null&&u!=null&&(e.defaultChecked=!!u),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+sn(A):e.removeAttribute("name")}function Kp(e,n,a,r,o,u,p,A){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Du(e);return}a=a!=null?""+sn(a):"",n=n!=null?""+sn(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??o,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Du(e)}function Lu(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function es(e,n,a,r){if(e=e.options,n){n={};for(var o=0;o<a.length;o++)n["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=n.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&r&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),n=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Qp(e,n,a){if(n!=null&&(n=""+sn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+sn(a):""}function Jp(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(we(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=sn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Du(e)}function ts(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var jx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $p(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||jx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function em(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",vt=!0);for(var o in n)r=n[o],n.hasOwnProperty(o)&&a[o]!==r&&($p(e,o,r),vt=!0)}else for(var u in n)n.hasOwnProperty(u)&&$p(e,u,n[u])}function Ou(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ro(e){return Kx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ki(){}var Pu=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ns=null,is=null;function tm(e){var n=ut(e);if(n&&(e=n.stateNode)){var a=e[F]||null;e:switch(e=n.stateNode,n.type){case"input":if(Uu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var o=r[F]||null;if(!o)throw Error(s(90));Uu(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Zp(r)}break e;case"textarea":Qp(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&es(e,!!a.multiple,n,!1)}}}var zu=!1;function nm(e,n,a){if(zu)return e(n,a);zu=!0;try{var r=e(n);return r}finally{if(zu=!1,(ns!==null||is!==null)&&(Rc(),ns&&(n=ns,e=is,is=ns=null,tm(n),e)))for(n=0;n<e.length;n++)tm(e[n])}}function hl(e,n){var a=e.stateNode;if(a===null)return null;var r=a[F]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=!1;if(da)try{var pl={};Object.defineProperty(pl,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",pl,pl),window.removeEventListener("test",pl,pl)}catch{Bu=!1}var za=null,Fu=null,Co=null;function im(){if(Co)return Co;var e,n=Fu,a=n.length,r,o="value"in za?za.value:za.textContent,u=o.length;for(e=0;e<a&&n[e]===o[e];e++);var p=a-e;for(r=1;r<=p&&n[a-r]===o[u-r];r++);return Co=o.slice(e,1<r?1-r:void 0)}function wo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function No(){return!0}function am(){return!1}function Fn(e){function n(a,r,o,u,p){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(u):u[A]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?No:am,this.isPropagationStopped=am,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),n}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Do=Fn(Ba),ml=z({},Ba,{view:0,detail:0}),Qx=Fn(ml),Hu,Gu,gl,Uo=z({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gl&&(gl&&e.type==="mousemove"?(Hu=e.screenX-gl.screenX,Gu=e.screenY-gl.screenY):Gu=Hu=0,gl=e),Hu)},movementY:function(e){return"movementY"in e?e.movementY:Gu}}),rm=Fn(Uo),Jx=z({},Uo,{dataTransfer:0}),$x=Fn(Jx),eS=z({},ml,{relatedTarget:0}),Vu=Fn(eS),tS=z({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),nS=Fn(tS),iS=z({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),aS=Fn(iS),rS=z({},Ba,{data:0}),sm=Fn(rS),sS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=oS[e])?!!n[e]:!1}function Xu(){return cS}var uS=z({},ml,{key:function(e){if(e.key){var n=sS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(e){return e.type==="keypress"?wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fS=Fn(uS),dS=z({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lm=Fn(dS),hS=z({},Ba,{submitter:0}),pS=Fn(hS),mS=z({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),gS=Fn(mS),_S=z({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),vS=Fn(_S),xS=z({},Uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),SS=Fn(xS),yS=z({},Ba,{newState:0,oldState:0,source:0}),MS=Fn(yS),ES=[9,13,27,32],ku=da&&"CompositionEvent"in window,_l=null;da&&"documentMode"in document&&(_l=document.documentMode);var bS=da&&"TextEvent"in window&&!_l,om=da&&(!ku||_l&&8<_l&&11>=_l),cm=" ",um=!1;function fm(e,n){switch(e){case"keyup":return ES.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var as=!1;function TS(e,n){switch(e){case"compositionend":return dm(n);case"keypress":return n.which!==32?null:(um=!0,cm);case"textInput":return e=n.data,e===cm&&um?null:e;default:return null}}function AS(e,n){if(as)return e==="compositionend"||!ku&&fm(e,n)?(e=im(),Co=Fu=za=null,as=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return om&&n.locale!=="ko"?null:n.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!RS[e.type]:n==="textarea"}function pm(e,n,a,r){ns?is?is.push(r):is=[r]:ns=r,n=Lc(n,"onChange"),0<n.length&&(a=new Do("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var vl=null,xl=null;function CS(e){t_(e,0)}function Lo(e){var n=qe(e);if(Zp(n))return e}function mm(e,n){if(e==="change")return n}var gm=!1;if(da){var Wu;if(da){var qu="oninput"in document;if(!qu){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),qu=typeof _m.oninput=="function"}Wu=qu}else Wu=!1;gm=Wu&&(!document.documentMode||9<document.documentMode)}function vm(){vl&&(vl.detachEvent("onpropertychange",xm),xl=vl=null)}function xm(e){if(e.propertyName==="value"&&Lo(xl)){var n=[];pm(n,xl,e,Iu(e)),nm(CS,n)}}function wS(e,n,a){e==="focusin"?(vm(),vl=n,xl=a,vl.attachEvent("onpropertychange",xm)):e==="focusout"&&vm()}function NS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lo(xl)}function DS(e,n){if(e==="click")return Lo(n)}function US(e,n){if(e==="input"||e==="change")return Lo(n)}function LS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:LS;function Sl(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!Ee.call(n,o)||!ei(e[o],n[o]))return!1}return!0}function Yu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ym(e,n){var a=Sm(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sm(a)}}function Mm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Mm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Em(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Yu(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Yu(e.document)}return n}function ju(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var OS=da&&"documentMode"in document&&11>=document.documentMode,rs=null,Zu=null,yl=null,Ku=!1;function bm(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ku||rs==null||rs!==Yu(r)||(r=rs,"selectionStart"in r&&ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yl&&Sl(yl,r)||(yl=r,r=Lc(Zu,"onSelect"),0<r.length&&(n=new Do("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=rs)))}function Sr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ss={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},Qu={},Tm={};da&&(Tm=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function yr(e){if(Qu[e])return Qu[e];if(!ss[e])return e;var n=ss[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Tm)return Qu[e]=n[a];return e}var Am=yr("animationend"),Rm=yr("animationiteration"),Cm=yr("animationstart"),PS=yr("transitionrun"),IS=yr("transitionstart"),zS=yr("transitioncancel"),wm=yr("transitionend"),Nm=new Map,Ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ju.push("scrollEnd");function Ai(e,n){Nm.set(e,n),Fe(n,[e])}var BS=0;function ha(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Ni.identifierPrefix;var a=BS++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Dm(e){if(e==null||typeof e=="string")return e;var n=null,a=As;if(a!==null)for(var r=0;r<a.length;r++){var o=e[a[r]];if(o!=null){if(o==="none")return"none";n=n==null?o:n+(" "+o)}}return n??e.default}function pa(e,n){return e=Dm(e),n=Dm(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Oo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pi=[],ls=0,$u=0;function Po(){for(var e=ls,n=$u=ls=0;n<e;){var a=pi[n];pi[n++]=null;var r=pi[n];pi[n++]=null;var o=pi[n];pi[n++]=null;var u=pi[n];if(pi[n++]=null,r!==null&&o!==null){var p=r.pending;p===null?o.next=o:(o.next=p.next,p.next=o),r.pending=o}u!==0&&Um(a,o,u)}}function Io(e,n,a,r){pi[ls++]=e,pi[ls++]=n,pi[ls++]=a,pi[ls++]=r,$u|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ef(e,n,a,r){return Io(e,n,a,r),zo(e)}function Mr(e,n){return Io(e,null,null,n),zo(e)}function Um(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var o=!1,u=e.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(o=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,o&&n!==null&&(o=31-ct(a),e=u.hiddenUpdates,r=e[o],r===null?e[o]=[n]:r.push(n),n.lane=a|536870912),u):null}function zo(e){if(50<Xl)throw Xl=0,Ac=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var os={};function FS(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,a,r){return new FS(e,n,a,r)}function tf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,n){var a=e.alternate;return a===null?(a=kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lm(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Bo(e,n,a,r,o,u){var p=0;if(r=e,typeof r=="function")tf(r)&&(p=1);else if(typeof r=="string")p=hM(e,a,Vt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case Me:return e=kn(31,a,n,o),e.elementType=Me,e.lanes=u,e;case j:return Er(a.children,o,u,n);case ne:p=8,o|=24;break;case fe:return e=kn(12,a,n,o|2),e.elementType=fe,e.lanes=u,e;case q:return e=kn(13,a,n,o),e.elementType=q,e.lanes=u,e;case de:return e=kn(19,a,n,o),e.elementType=de,e.lanes=u,e;case je:case B:return e=o|32,e=kn(30,a,n,e),e.elementType=B,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ee:p=10;break e;case J:p=9;break e;case W:p=11;break e;case se:p=14;break e;case ce:p=16,r=null;break e}p=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=kn(p,a,n,o),n.elementType=e,n.type=r,n.lanes=u,n}function Er(e,n,a,r){return e=kn(7,e,r,n),e.lanes=a,e}function nf(e,n,a){return e=kn(6,e,null,n),e.lanes=a,e}function Om(e){var n=kn(18,null,null,0);return n.stateNode=e,n}function af(e,n,a){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Pm=new WeakMap;function mi(e,n){if(typeof e=="object"&&e!==null){var a=Pm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:_e(n)},Pm.set(e,n),n)}return{value:e,source:n,stack:_e(n)}}var cs=[],us=0,Fo=null,Ml=0,gi=[],_i=0,Fa=null,Wi=1,qi="";function ga(e,n){cs[us++]=Ml,cs[us++]=Fo,Fo=e,Ml=n}function Im(e,n,a){gi[_i++]=Wi,gi[_i++]=qi,gi[_i++]=Fa,Fa=e;var r=Wi;e=qi;var o=32-ct(r)-1;r&=~(1<<o),a+=1;var u=32-ct(n)+o;if(30<u){var p=o-o%5;u=(r&(1<<p)-1).toString(32),r>>=p,o-=p,Wi=1<<32-ct(n)+o|a<<o|r,qi=u+e}else Wi=1<<u|a<<o|r,qi=e}function Ho(e){e.return!==null&&(ga(e,1),Im(e,1,0))}function rf(e){for(;e===Fo;)Fo=cs[--us],cs[us]=null,Ml=cs[--us],cs[us]=null;for(;e===Fa;)Fa=gi[--_i],gi[_i]=null,qi=gi[--_i],gi[_i]=null,Wi=gi[--_i],gi[_i]=null}function zm(e,n){gi[_i++]=Wi,gi[_i++]=qi,gi[_i++]=Fa,Wi=n.id,qi=n.overflow,Fa=e}var Mn=null,Qt=null,xt=!1,Ha=null,vi=!1,sf=Error(s(519));function Ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw El(mi(n,e)),sf}function Bm(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[T]=e,n[F]=r,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<Wl.length;a++)Et(Wl[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Kp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Jp(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||r_(n.textContent,a)?(r.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),r.onScroll!=null&&Et("scroll",n),r.onScrollEnd!=null&&Et("scrollend",n),r.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ga(e,!0)}function Go(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Mn=Mn.return}}function fs(e){if(e!==Mn)return!1;if(!xt)return Go(e),xt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Id(e.type,e.memoizedProps)),a=!a),a&&Qt&&Ga(e),Go(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qt=b_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qt=b_(e)}else n===27?(n=Qt,ir(e.type)?(e=Wd,Wd=null,Qt=e):Qt=n):Qt=Mn?Si(e.stateNode.nextSibling):null;return!0}function br(){Qt=Mn=null,xt=!1}function lf(){var e=Ha;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Ha=null),e}function El(e){Ha===null?Ha=[e]:Ha.push(e)}var of=St(null),Tr=null,_a=null;function Va(e,n,a){it(of,n._currentValue),n._currentValue=a}function va(e){e._currentValue=of.current,tt(of)}function Vo(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function cf(e,n,a,r){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){var p=o.child;u=u.firstContext;e:for(;u!==null;){var A=u;u=o;for(var I=0;I<n.length;I++)if(A.context===n[I]){u.lanes|=a,A=u.alternate,A!==null&&(A.lanes|=a),Vo(u.return,a,e),r||(p=null);break e}u=A.next}}else if(o.tag===18){if(p=o.return,p===null)throw Error(s(341));p.lanes|=a,u=p.alternate,u!==null&&(u.lanes|=a),Vo(p,a,e),p=null}else o.tag===13&&o.memoizedState!==null&&o.memoizedState.dehydrated===null?(o.lanes|=a,p=o.alternate,p!==null&&(p.lanes|=a),Vo(o.return,a,e),p=o.child,p=p!==null?p.sibling:null):p=o.child;if(p!==null)p.return=o;else for(p=o;p!==null;){if(p===e){p=null;break}if(o=p.sibling,o!==null){o.return=p.return,p=o;break}p=p.return}o=p}}function Ar(e,n,a,r){e=null;for(var o=n,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var p=o.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var A=o.type;ei(o.pendingProps.value,p.value)||(e!==null?e.push(A):e=[A])}}else if(o===$t.current){if(p=o.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Is):e=[Is])}o=o.return}return e!==null&&cf(n,e,a,r),n.flags|=262144,e!==null}function Xo(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rr(e){Tr=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Fm(Tr,e)}function ko(e,n){return Tr===null&&Rr(e),Fm(e,n)}function Fm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},_a===null){if(e===null)throw Error(s(308));_a=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else _a=_a.next=n;return a}var HS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},GS=l.unstable_scheduleCallback,VS=l.unstable_NormalPriority,dn={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uf(){return{controller:new HS,data:new Map,refCount:0}}function bl(e){e.refCount--,e.refCount===0&&GS(VS,function(){e.controller.abort()})}function Hm(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Tl=null;function XS(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Al=null,ff=0,Cr=0,ds=null;function kS(e,n){if(Al===null){var a=Al=[];ff=0,Cr=Rd(),ds={status:"pending",value:void 0,then:function(r){a.push(r)}}}return ff++,n.then(Gm,Gm),n}function Gm(){if(--ff===0&&(Tl=null,Al!==null)){ds!==null&&(ds.status="fulfilled");var e=Al;Al=null,Cr=0,ds=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function WS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var o=0;o<a.length;o++)(0,a[o])(n)},function(o){for(r.status="rejected",r.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),r}var Vm=ve.S;ve.S=function(e,n){if(O0=Xe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&kS(e,n),Tl!==null)for(var a=Ns;a!==null;)Hm(a,Tl),a=a.next;if(a=e.types,a!==null){for(var r=Ns;r!==null;)Hm(r,a),r=r.next;if(Cr!==0){r=Tl,r===null&&(r=Tl=[]);for(var o=0;o<a.length;o++){var u=a[o];r.indexOf(u)===-1&&r.push(u)}}}Vm!==null&&Vm(e,n)};var wr=St(null);function df(){var e=wr.current;return e!==null?e:Zt.pooledCache}function Wo(e,n){n===null?it(wr,wr.current):it(wr,n.pool)}function Xm(){var e=df();return e===null?null:{parent:dn._currentValue,pool:e}}var hs=Error(s(460)),hf=Error(s(474)),qo=Error(s(542)),Yo={then:function(){}};function km(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Wm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ym(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(ki,ki);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var o=n;o.status="fulfilled",o.value=r}},function(r){if(n.status==="pending"){var o=n;o.status="rejected",o.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ym(e),e}throw Dr=n,hs}}function Nr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Dr=a,hs):a}}var Dr=null;function qm(){if(Dr===null)throw Error(s(459));var e=Dr;return Dr=null,e}function Ym(e){if(e===hs||e===qo)throw Error(s(483))}var ps=null,Rl=0;function jo(e){var n=Rl;return Rl+=1,ps===null&&(ps=[]),Wm(ps,e,n)}function Xa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Zo(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function jm(e){function n(K,H){if(e){var te=K.deletions;te===null?(K.deletions=[H],K.flags|=16):te.push(H)}}function a(K,H){if(!e)return null;for(;H!==null;)n(K,H),H=H.sibling;return null}function r(K){for(var H=new Map;K!==null;)K.key===null?H.set(K.index,K):H.set(K.key,K),K=K.sibling;return H}function o(K,H){return K=ma(K,H),K.index=0,K.sibling=null,K}function u(K,H,te){return K.index=te,e?(te=K.alternate,te!==null?(te=te.index,te<H?(K.flags|=2,H):te):(K.flags|=134217730,H)):(K.flags|=1048576,H)}function p(K){return e&&K.alternate===null&&(K.flags|=134217730),K}function A(K,H,te,xe){return H===null||H.tag!==6?(H=nf(te,K.mode,xe),H.return=K,H):(H=o(H,te),H.return=K,H)}function I(K,H,te,xe){var Ye=te.type;return Ye===j?(K=oe(K,H,te.props.children,xe,te.key),Xa(K,te),K):H!==null&&(H.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ce&&Nr(Ye)===H.type)?(H=o(H,te.props),Xa(H,te),H.return=K,H):(H=Bo(te.type,te.key,te.props,null,K.mode,xe),Xa(H,te),H.return=K,H)}function Q(K,H,te,xe){return H===null||H.tag!==4||H.stateNode.containerInfo!==te.containerInfo||H.stateNode.implementation!==te.implementation?(H=af(te,K.mode,xe),H.return=K,H):(H=o(H,te.children||[]),H.return=K,H)}function oe(K,H,te,xe,Ye){return H===null||H.tag!==7?(H=Er(te,K.mode,xe,Ye),H.return=K,H):(H=o(H,te),H.return=K,H)}function Se(K,H,te){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=nf(""+H,K.mode,te),H.return=K,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case P:return te=Bo(H.type,H.key,H.props,null,K.mode,te),Xa(te,H),te.return=K,te;case k:return H=af(H,K.mode,te),H.return=K,H;case ce:return H=Nr(H),Se(K,H,te)}if(we(H)||Z(H))return H=Er(H,K.mode,te,null),H.return=K,H;if(typeof H.then=="function")return Se(K,jo(H),te);if(H.$$typeof===ee)return Se(K,ko(K,H),te);Zo(K,H)}return null}function Y(K,H,te,xe){var Ye=H!==null?H.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Ye!==null?null:A(K,H,""+te,xe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case P:return te.key===Ye?I(K,H,te,xe):null;case k:return te.key===Ye?Q(K,H,te,xe):null;case ce:return te=Nr(te),Y(K,H,te,xe)}if(we(te)||Z(te))return Ye!==null?null:oe(K,H,te,xe,null);if(typeof te.then=="function")return Y(K,H,jo(te),xe);if(te.$$typeof===ee)return Y(K,H,ko(K,te),xe);Zo(K,te)}return null}function re(K,H,te,xe,Ye){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return K=K.get(te)||null,A(H,K,""+xe,Ye);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case P:return K=K.get(xe.key===null?te:xe.key)||null,I(H,K,xe,Ye);case k:return K=K.get(xe.key===null?te:xe.key)||null,Q(H,K,xe,Ye);case ce:return xe=Nr(xe),re(K,H,te,xe,Ye)}if(we(xe)||Z(xe))return K=K.get(te)||null,oe(H,K,xe,Ye,null);if(typeof xe.then=="function")return re(K,H,te,jo(xe),Ye);if(xe.$$typeof===ee)return re(K,H,te,ko(H,xe),Ye);Zo(H,xe)}return null}function Pe(K,H,te,xe){for(var Ye=null,At=null,et=H,at=H=0,mn=null;et!==null&&at<te.length;at++){et.index>at?(mn=et,et=null):mn=et.sibling;var Dt=Y(K,et,te[at],xe);if(Dt===null){et===null&&(et=mn);break}e&&et&&Dt.alternate===null&&n(K,et),H=u(Dt,H,at),At===null?Ye=Dt:At.sibling=Dt,At=Dt,et=mn}if(at===te.length)return a(K,et),xt&&ga(K,at),Ye;if(et===null){for(;at<te.length;at++)et=Se(K,te[at],xe),et!==null&&(H=u(et,H,at),At===null?Ye=et:At.sibling=et,At=et);return xt&&ga(K,at),Ye}for(et=r(et);at<te.length;at++)mn=re(et,K,at,te[at],xe),mn!==null&&(e&&(Dt=mn.alternate,Dt!==null&&et.delete(Dt.key===null?at:Dt.key)),H=u(mn,H,at),At===null?Ye=mn:At.sibling=mn,At=mn);return e&&et.forEach(function(or){return n(K,or)}),xt&&ga(K,at),Ye}function Qe(K,H,te,xe){if(te==null)throw Error(s(151));for(var Ye=null,At=null,et=H,at=H=0,mn=null,Dt=te.next();et!==null&&!Dt.done;at++,Dt=te.next()){et.index>at?(mn=et,et=null):mn=et.sibling;var or=Y(K,et,Dt.value,xe);if(or===null){et===null&&(et=mn);break}e&&et&&or.alternate===null&&n(K,et),H=u(or,H,at),At===null?Ye=or:At.sibling=or,At=or,et=mn}if(Dt.done)return a(K,et),xt&&ga(K,at),Ye;if(et===null){for(;!Dt.done;at++,Dt=te.next())Dt=Se(K,Dt.value,xe),Dt!==null&&(H=u(Dt,H,at),At===null?Ye=Dt:At.sibling=Dt,At=Dt);return xt&&ga(K,at),Ye}for(et=r(et);!Dt.done;at++,Dt=te.next())Dt=re(et,K,at,Dt.value,xe),Dt!==null&&(e&&(mn=Dt.alternate,mn!==null&&et.delete(mn.key===null?at:mn.key)),H=u(Dt,H,at),At===null?Ye=Dt:At.sibling=Dt,At=Dt);return e&&et.forEach(function(TM){return n(K,TM)}),xt&&ga(K,at),Ye}function ht(K,H,te,xe){if(typeof te=="object"&&te!==null&&te.type===j&&te.key===null&&te.props.ref===void 0&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case P:e:{for(var Ye=te.key;H!==null;){if(H.key===Ye){if(Ye=te.type,Ye===j){if(H.tag===7){a(K,H.sibling),xe=o(H,te.props.children),Xa(xe,te),xe.return=K,K=xe;break e}}else if(H.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ce&&Nr(Ye)===H.type){a(K,H.sibling),xe=o(H,te.props),Xa(xe,te),xe.return=K,K=xe;break e}a(K,H);break}else n(K,H);H=H.sibling}te.type===j?(xe=Er(te.props.children,K.mode,xe,te.key),Xa(xe,te),xe.return=K,K=xe):(xe=Bo(te.type,te.key,te.props,null,K.mode,xe),Xa(xe,te),xe.return=K,K=xe)}return p(K);case k:e:{for(Ye=te.key;H!==null;){if(H.key===Ye)if(H.tag===4&&H.stateNode.containerInfo===te.containerInfo&&H.stateNode.implementation===te.implementation){a(K,H.sibling),xe=o(H,te.children||[]),xe.return=K,K=xe;break e}else{a(K,H);break}else n(K,H);H=H.sibling}xe=af(te,K.mode,xe),xe.return=K,K=xe}return p(K);case ce:return te=Nr(te),ht(K,H,te,xe)}if(we(te))return Pe(K,H,te,xe);if(Z(te)){if(Ye=Z(te),typeof Ye!="function")throw Error(s(150));return te=Ye.call(te),Qe(K,H,te,xe)}if(typeof te.then=="function")return ht(K,H,jo(te),xe);if(te.$$typeof===ee)return ht(K,H,ko(K,te),xe);Zo(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,H!==null&&H.tag===6?(a(K,H.sibling),xe=o(H,te),xe.return=K,K=xe):(a(K,H),xe=nf(te,K.mode,xe),xe.return=K,K=xe),p(K)):a(K,H)}return function(K,H,te,xe){try{Rl=0;var Ye=ht(K,H,te,xe);return ps=null,Ye}catch(et){if(et===hs||et===qo)throw et;var At=kn(29,et,null,K.mode);return At.lanes=xe,At.return=K,At}finally{}}}var Ur=jm(!0),Zm=jm(!1),ka=!1;function pf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(It&2)!==0){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,n=zo(e),Um(e,null,a),n}return Io(e,r,n,a),zo(e)}function Cl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,cl(e,a)}}function gf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?o=u=p:u=u.next=p,a=a.next}while(a!==null);u===null?o=u=n:u=u.next=n}else o=u=n;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var _f=!1;function wl(){if(_f){var e=ds;if(e!==null)throw e}}function Nl(e,n,a,r){_f=!1;var o=e.updateQueue;ka=!1;var u=o.firstBaseUpdate,p=o.lastBaseUpdate,A=o.shared.pending;if(A!==null){o.shared.pending=null;var I=A,Q=I.next;I.next=null,p===null?u=Q:p.next=Q,p=I;var oe=e.alternate;oe!==null&&(oe=oe.updateQueue,A=oe.lastBaseUpdate,A!==p&&(A===null?oe.firstBaseUpdate=Q:A.next=Q,oe.lastBaseUpdate=I))}if(u!==null){var Se=o.baseState;p=0,oe=Q=I=null,A=u;do{var Y=A.lane&-536870913,re=Y!==A.lane;if(re?(Tt&Y)===Y:(r&Y)===Y){Y!==0&&Y===Cr&&(_f=!0),oe!==null&&(oe=oe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Pe=e,Qe=A;Y=n;var ht=a;switch(Qe.tag){case 1:if(Pe=Qe.payload,typeof Pe=="function"){Se=Pe.call(ht,Se,Y);break e}Se=Pe;break e;case 3:Pe.flags=Pe.flags&-65537|128;case 0:if(Pe=Qe.payload,Y=typeof Pe=="function"?Pe.call(ht,Se,Y):Pe,Y==null)break e;Se=z({},Se,Y);break e;case 2:ka=!0}}Y=A.callback,Y!==null&&(e.flags|=64,re&&(e.flags|=8192),re=o.callbacks,re===null?o.callbacks=[Y]:re.push(Y))}else re={lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},oe===null?(Q=oe=re,I=Se):oe=oe.next=re,p|=Y;if(A=A.next,A===null){if(A=o.shared.pending,A===null)break;re=A,A=re.next,re.next=null,o.lastBaseUpdate=re,o.shared.pending=null}}while(!0);oe===null&&(I=Se),o.baseState=I,o.firstBaseUpdate=Q,o.lastBaseUpdate=oe,u===null&&(o.shared.lanes=0),$a|=p,e.lanes=p,e.memoizedState=Se}}function Km(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Qm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Km(a[e],n)}var Ya=St(null),Ko=St(0);function Jm(e,n){e=Ea,it(Ko,e),it(Ya,n),Ea=e|n.baseLanes}function vf(){it(Ko,Ea),it(Ya,Ya.current)}function xf(){Ea=Ko.current,tt(Ya),tt(Ko)}var Rn=St(null),Ln=null;function ja(e){var n=e.alternate;it(Cn,Cn.current&1),it(Rn,e),Ln===null&&(n===null||Ya.current!==null||n.memoizedState!==null)&&(Ln=e)}function Sf(e){it(Cn,Cn.current),it(Rn,e),Ln===null&&(Ln=e)}function $m(e){e.tag===22?(it(Cn,Cn.current),it(Rn,e),Ln===null&&(Ln=e)):Za()}function Za(){it(Cn,Cn.current),it(Rn,Rn.current)}function ti(e){tt(Rn),Ln===e&&(Ln=null),tt(Cn)}var Cn=St(0);function Dl(e,n){it(Rn,Rn.current),it(Cn,n)}function yf(e){tt(Cn),tt(Rn),Ln===e&&(Ln=null)}function Qo(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xd(a)||kd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,dt=null,jt=null,hn=null,Jo=!1,ms=!1,Lr=!1,$o=0,Ul=0,gs=null,qS=0;function ln(){throw Error(s(321))}function Mf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function Ef(e,n,a,r,o,u){return xa=u,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ve.H=e===null||e.memoizedState===null?Ig:zg,Lr=!1,u=a(r,o),Lr=!1,ms&&(u=tg(n,a,r,o)),eg(e),u}function eg(e){ve.H=sc;var n=jt!==null&&jt.next!==null;if(xa=0,hn=jt=dt=null,Jo=!1,Ul=0,gs=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&Xo(e)&&(pn=!0))}function tg(e,n,a,r){dt=e;var o=0;do{if(ms&&(gs=null),Ul=0,ms=!1,25<=o)throw Error(s(301));if(o+=1,hn=jt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}ve.H=ey,u=n(a,r)}while(ms);return u}function YS(){var e=ve.H,n=e.useState()[0];return n=typeof n.then=="function"?Ll(n):n,e=e.useState()[0],(jt!==null?jt.memoizedState:null)!==e&&(dt.flags|=1024),n}function bf(){var e=$o!==0;return $o=0,e}function Tf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Af(e){if(Jo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Jo=!1}xa=0,hn=jt=dt=null,ms=!1,Ul=$o=0,gs=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?dt.memoizedState=hn=e:hn=hn.next=e,hn}function un(){if(jt===null){var e=dt.alternate;e=e!==null?e.memoizedState:null}else e=jt.next;var n=hn===null?dt.memoizedState:hn.next;if(n!==null)hn=n,jt=e;else{if(e===null)throw dt.alternate===null?Error(s(467)):Error(s(310));jt=e,e={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},hn===null?dt.memoizedState=hn=e:hn=hn.next=e}return hn}function ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ll(e){var n=Ul;return Ul+=1,gs===null&&(gs=[]),e=Wm(gs,e,n),n=dt,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,ve.H=n===null||n.memoizedState===null?Ig:zg),e}function tc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ll(e);if(e.$$typeof===me)return;if(e.$$typeof===ee)return An(e)}throw Error(s(438,String(e)))}function Rf(e){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=dt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(o){return o.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ec(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=ke;return n.index++,a}function Sa(e,n){return typeof n=="function"?n(e):n}function nc(e){var n=un();return Cf(n,jt,e)}function Cf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var o=e.baseQueue,u=r.pending;if(u!==null){if(o!==null){var p=o.next;o.next=u.next,u.next=p}n.baseQueue=o=u,r.pending=null}if(u=e.baseState,o===null)e.memoizedState=u;else{n=o.next;var A=p=null,I=null,Q=n,oe=!1;do{var Se=Q.lane&-536870913;if(Se!==Q.lane?(Tt&Se)===Se:(xa&Se)===Se){var Y=Q.revertLane;if(Y===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),Se===Cr&&(oe=!0);else if((xa&Y)===Y){Q=Q.next,Y===Cr&&(oe=!0);continue}else Se={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=Se,p=u):I=I.next=Se,dt.lanes|=Y,$a|=Y;Se=Q.action,Lr&&a(u,Se),u=Q.hasEagerState?Q.eagerState:a(u,Se)}else Y={lane:Se,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=Y,p=u):I=I.next=Y,dt.lanes|=Se,$a|=Se;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?p=u:I.next=A,!ei(u,e.memoizedState)&&(pn=!0,oe&&(a=ds,a!==null)))throw a;e.memoizedState=u,e.baseState=p,e.baseQueue=I,r.lastRenderedState=u}return o===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function wf(e){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,o=a.pending,u=n.memoizedState;if(o!==null){a.pending=null;var p=o=o.next;do u=e(u,p.action),p=p.next;while(p!==o);ei(u,n.memoizedState)||(pn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,r]}function ng(e,n,a){var r=dt,o=un(),u=xt;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var p=!ei((jt||o).memoizedState,a);if(p&&(o.memoizedState=a,pn=!0),o=o.queue,Uf(rg.bind(null,r,o,e),[e]),e=o.getSnapshot!==n||p||hn!==null&&(hn.memoizedState.tag&1)!==0,_s(e?9:8,{destroy:void 0},ag.bind(null,r,o,a,n),null),e){if(r.flags|=2048,Zt===null)throw Error(s(349));u||(xa&127)!==0||ig(r,n,a)}return a}function ig(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=ec(),dt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function ag(e,n,a,r){n.value=a,n.getSnapshot=r,sg(n)&&lg(e)}function rg(e,n,a){return a(function(){sg(n)&&lg(e)})}function sg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function lg(e){var n=Mr(e,2);n!==null&&jn(n,e,2)}function Nf(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Lr){Rt(!0);try{a()}finally{Rt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},n}function og(e,n,a,r){return e.baseState=a,Cf(e,jt,typeof r=="function"?r:Sa)}function jS(e,n,a,r,o){if(rc(e))throw Error(s(485));if(e=n.action,e!==null){var u={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};ve.T!==null?a(!0):u.isTransition=!1,r(u),a=n.pending,a===null?(u.next=n.pending=u,cg(n,u)):(u.next=a.next,n.pending=a.next=u)}}function cg(e,n){var a=n.action,r=n.payload,o=e.state;if(n.isTransition){var u=ve.T,p={};p.types=u!==null?u.types:null,ve.T=p;try{var A=a(o,r),I=ve.S;I!==null&&I(p,A),ug(e,n,A)}catch(Q){Df(e,n,Q)}finally{u!==null&&p.types!==null&&(u.types=p.types),ve.T=u}}else try{u=a(o,r),ug(e,n,u)}catch(Q){Df(e,n,Q)}}function ug(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){fg(e,n,r)},function(r){return Df(e,n,r)}):fg(e,n,a)}function fg(e,n,a){n.status="fulfilled",n.value=a,dg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,cg(e,a)))}function Df(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,dg(n),n=n.next;while(n!==r)}e.action=null}function dg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function hg(e,n){return n}function pg(e,n){if(xt){var a=Zt.formState;if(a!==null){e:{var r=dt;if(xt){if(Qt){t:{for(var o=Qt,u=vi;o.nodeType!==8;){if(!u){o=null;break t}if(o=Si(o.nextSibling),o===null){o=null;break t}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){Qt=Si(o.nextSibling),r=o.data==="F!";break e}}Ga(r)}r=!1}r&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hg,lastRenderedState:n},a.queue=r,a=Lg.bind(null,dt,r),r.dispatch=a,r=Nf(!1),u=zf.bind(null,dt,!1,r.queue),r=Hn(),o={state:n,dispatch:null,action:e,pending:null},r.queue=o,a=jS.bind(null,dt,o,u,a),o.dispatch=a,r.memoizedState=e,[n,a,!1]}function mg(e){var n=un();return gg(n,jt,e)}function gg(e,n,a){if(n=Cf(e,n,hg)[0],e=nc(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Ll(n)}catch(p){throw p===hs?qo:p}else r=n;n=un();var o=n.queue,u=o.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,_s(9,{destroy:void 0},ZS.bind(null,o,a),null)),[r,u,e]}function ZS(e,n){e.action=n}function _g(e){var n=un(),a=jt;if(a!==null)return gg(n,a,e);un(),n=n.memoizedState,a=un();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function _s(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=dt.updateQueue,n===null&&(n=ec(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function vg(){return un().memoizedState}function ic(e,n,a,r){var o=Hn();dt.flags|=e,o.memoizedState=_s(1|n,{destroy:void 0},a,r===void 0?null:r)}function ac(e,n,a,r){var o=un();r=r===void 0?null:r;var u=o.memoizedState.inst;jt!==null&&r!==null&&Mf(r,jt.memoizedState.deps)?o.memoizedState=_s(n,u,a,r):(dt.flags|=e,o.memoizedState=_s(1|n,u,a,r))}function xg(e,n){ic(8390656,8,e,n)}function Uf(e,n){ac(2048,8,e,n)}function KS(e){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=ec(),dt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Sg(e){var n=un().memoizedState;return KS({ref:n,nextImpl:e}),function(){if((It&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function yg(e,n){return ac(4,2,e,n)}function Mg(e,n){return ac(4,4,e,n)}function Eg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bg(e,n,a){a=a!=null?a.concat([e]):null,ac(4,4,Eg.bind(null,n,e),a)}function Lf(){}function Tg(e,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Mf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Ag(e,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Mf(n,r[1]))return r[0];if(r=e(),Lr){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[r,n],r}function Of(e,n,a){return a===void 0||(xa&1073741824)!==0&&(Tt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=I0(),dt.lanes|=e,$a|=e,a)}function Rg(e,n,a,r){return ei(a,n)?a:Ya.current!==null?(e=Of(e,a,r),ei(e,n)||(pn=!0),e):(xa&106)===0||(xa&1073741824)!==0&&(Tt&261930)===0?(pn=!0,e.memoizedState=a):(e=I0(),dt.lanes|=e,$a|=e,n)}function Cg(e,n,a,r,o){var u=Ce.p;Ce.p=u!==0&&8>u?u:8;var p=ve.T,A={};A.types=p!==null?p.types:null,ve.T=A,zf(e,!1,n,a);try{var I=o(),Q=ve.S;if(Q!==null&&Q(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var oe=WS(I,r);Ol(e,n,oe,ri(e))}else Ol(e,n,r,ri(e))}catch(Se){Ol(e,n,{then:function(){},status:"rejected",reason:Se},ri())}finally{Ce.p=u,p!==null&&A.types!==null&&(p.types=A.types),ve.T=p}}function QS(){}function Pf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var o=wg(e).queue;Cg(e,o,n,Gt,a===null?QS:function(){return Ng(e),a(r)})}function wg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Gt,baseState:Gt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:Gt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ng(e){var n=wg(e);n.next===null&&(n=e.alternate.memoizedState),Ol(e,n.next.queue,{},ri())}function If(){return An(Is)}function Dg(){return un().memoizedState}function Ug(){return un().memoizedState}function JS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();e=Wa(a);var r=qa(n,e,a);r!==null&&(jn(r,n,a),Cl(r,n,a)),n={cache:uf()},e.payload=n;return}n=n.return}}function $S(e,n,a){var r=ri();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},rc(e)?Og(n,a):(a=ef(e,n,a,r),a!==null&&(jn(a,e,r),Pg(a,n,r)))}function Lg(e,n,a){var r=ri();Ol(e,n,a,r)}function Ol(e,n,a,r){var o={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(rc(e))Og(n,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var p=n.lastRenderedState,A=u(p,a);if(o.hasEagerState=!0,o.eagerState=A,ei(A,p))return Io(e,n,o,0),Zt===null&&Po(),!1}catch{}finally{}if(a=ef(e,n,o,r),a!==null)return jn(a,e,r),Pg(a,n,r),!0}return!1}function zf(e,n,a,r){if(r={lane:2,revertLane:Rd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},rc(e)){if(n)throw Error(s(479))}else n=ef(e,a,r,2),n!==null&&jn(n,e,2)}function rc(e){var n=e.alternate;return e===dt||n!==null&&n===dt}function Og(e,n){ms=Jo=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Pg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,cl(e,a)}}var sc={readContext:An,use:tc,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln,useEffectEvent:ln},Ig={readContext:An,use:tc,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:xg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ic(4194308,4,Eg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ic(4194308,4,e,n)},useInsertionEffect:function(e,n){ic(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var r=e();if(Lr){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Hn();if(a!==void 0){var o=a(n);if(Lr){Rt(!0);try{a(n)}finally{Rt(!1)}}}else o=n;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=$S.bind(null,dt,e),[r.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Nf(e);var n=e.queue,a=Lg.bind(null,dt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Lf,useDeferredValue:function(e,n){var a=Hn();return Of(a,e,n)},useTransition:function(){var e=Nf(!1);return e=Cg.bind(null,dt,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=dt,o=Hn();if(xt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Zt===null)throw Error(s(349));(Tt&127)!==0||ig(r,n,a)}o.memoizedState=a;var u={value:a,getSnapshot:n};return o.queue=u,xg(rg.bind(null,r,u,e),[e]),r.flags|=2048,_s(9,{destroy:void 0},ag.bind(null,r,u,a,n),null),a},useId:function(){var e=Hn(),n=Zt.identifierPrefix;if(xt){var a=qi,r=Wi;a=(r&~(1<<32-ct(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=$o++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=qS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:If,useFormState:pg,useActionState:pg,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=zf.bind(null,dt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Rf,useCacheRefresh:function(){return Hn().memoizedState=JS.bind(null,dt)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((It&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},zg={readContext:An,use:tc,useCallback:Tg,useContext:An,useEffect:Uf,useImperativeHandle:bg,useInsertionEffect:yg,useLayoutEffect:Mg,useMemo:Ag,useReducer:nc,useRef:vg,useState:function(){return nc(Sa)},useDebugValue:Lf,useDeferredValue:function(e,n){var a=un();return Rg(a,jt.memoizedState,e,n)},useTransition:function(){var e=nc(Sa)[0],n=un().memoizedState;return[typeof e=="boolean"?e:Ll(e),n]},useSyncExternalStore:ng,useId:Dg,useHostTransitionStatus:If,useFormState:mg,useActionState:mg,useOptimistic:function(e,n){var a=un();return og(a,jt,e,n)},useMemoCache:Rf,useCacheRefresh:Ug,useEffectEvent:Sg},ey={readContext:An,use:tc,useCallback:Tg,useContext:An,useEffect:Uf,useImperativeHandle:bg,useInsertionEffect:yg,useLayoutEffect:Mg,useMemo:Ag,useReducer:wf,useRef:vg,useState:function(){return wf(Sa)},useDebugValue:Lf,useDeferredValue:function(e,n){var a=un();return jt===null?Of(a,e,n):Rg(a,jt.memoizedState,e,n)},useTransition:function(){var e=wf(Sa)[0],n=un().memoizedState;return[typeof e=="boolean"?e:Ll(e),n]},useSyncExternalStore:ng,useId:Dg,useHostTransitionStatus:If,useFormState:_g,useActionState:_g,useOptimistic:function(e,n){var a=un();return jt!==null?og(a,jt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:Ug,useEffectEvent:Sg};function Bf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:z({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ff={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ri(),o=Wa(r);o.payload=n,a!=null&&(o.callback=a),n=qa(e,o,r),n!==null&&(jn(n,e,r),Cl(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ri(),o=Wa(r);o.tag=1,o.payload=n,a!=null&&(o.callback=a),n=qa(e,o,r),n!==null&&(jn(n,e,r),Cl(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ri(),r=Wa(a);r.tag=2,n!=null&&(r.callback=n),n=qa(e,r,a),n!==null&&(jn(n,e,a),Cl(n,e,a))}};function Bg(e,n,a,r,o,u,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,p):n.prototype&&n.prototype.isPureReactComponent?!Sl(a,r)||!Sl(o,u):!0}function Fg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Ff.enqueueReplaceState(n,n.state,null)}function Or(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=z({},a));for(var o in e)a[o]===void 0&&(a[o]=e[o])}return a}function Hg(e){Oo(e)}function Gg(e){console.error(e)}function Vg(e){Oo(e)}function lc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Xg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Hf(e,n,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){lc(e,n)},a}function kg(e){return e=Wa(e),e.tag=3,e}function Wg(e,n,a,r){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var u=r.value;e.payload=function(){return o(u)},e.callback=function(){Xg(n,a,r)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Xg(n,a,r),typeof o!="function"&&(er===null?er=new Set([this]):er.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function ty(e,n,a,r,o){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ar(n,a,o,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ln===null?Cc():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=o,r===Yo?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),bd(e,r,o)),!1;case 22:return a.flags|=65536,r===Yo?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),bd(e,r,o)),!1}throw Error(s(435,a.tag))}return bd(e,r,o),Cc(),!1}if(xt)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=o,r!==sf&&(e=Error(s(422),{cause:r}),El(mi(e,a)))):(r!==sf&&(n=Error(s(423),{cause:r}),El(mi(n,a))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,r=mi(r,a),o=Hf(e.stateNode,r,o),gf(e,o),on!==4&&(on=2)),!1;var u=Error(s(520),{cause:r});if(u=mi(u,a),Vl===null?Vl=[u]:Vl.push(u),on!==4&&(on=2),n===null)return!0;r=mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=o&-o,a.lanes|=e,e=Hf(a.stateNode,r,e),gf(a,e),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(er===null||!er.has(u))))return a.flags|=65536,o&=-o,a.lanes|=o,o=kg(o),Wg(o,e,a,r),gf(a,o),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Gf=Error(s(461)),pn=!1;function xn(e,n,a,r){n.child=e===null?Zm(n,null,a,r):Ur(n,e.child,a,r)}function qg(e,n,a,r,o){a=a.render;var u=n.ref;if("ref"in r){var p={};for(var A in r)A!=="ref"&&(p[A]=r[A])}else p=r;return Rr(n),r=Ef(e,n,a,p,u,o),A=bf(),e!==null&&!pn?(Tf(e,n,o),ya(e,n,o)):(xt&&A&&Ho(n),n.flags|=1,xn(e,n,r,o),n.child)}function Yg(e,n,a,r,o){if(e===null){var u=a.type;return typeof u=="function"&&!tf(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,jg(e,n,u,r,o)):(e=Bo(a.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!Zf(e,o)){var p=u.memoizedProps;if(a=a.compare,a=a!==null?a:Sl,a(p,r)&&e.ref===n.ref)return ya(e,n,o)}return n.flags|=1,e=ma(u,r),e.ref=n.ref,e.return=n,n.child=e}function jg(e,n,a,r,o){if(e!==null){var u=e.memoizedProps;if(Sl(u,r)&&e.ref===n.ref)if(pn=!1,n.pendingProps=r=u,Zf(e,o))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ya(e,n,o)}return Vf(e,n,a,r,o)}function Zg(e,n,a,r){var o=r.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(r=n.child=e.child,o=0;r!==null;)o=o|r.lanes|r.childLanes,r=r.sibling;r=o&~u}else r=0,n.child=null;return Kg(e,n,u,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wo(n,u!==null?u.cachePool:null),u!==null?Jm(n,u):vf(),$m(n);else return r=n.lanes=536870912,Kg(e,n,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(Wo(n,u.cachePool),Jm(n,u),Za(),n.memoizedState=null):(e!==null&&Wo(n,null),vf(),Za());return xn(e,n,o,a),n.child}function Pl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Kg(e,n,a,r,o){var u=df();return u=u===null?null:{parent:dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Wo(n,null),vf(),$m(n),e!==null&&Ar(e,n,r,!0),n.childLanes=o,null}function oc(e,n){return n=cc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Qg(e,n,a){return Ur(n,e.child,null,a),e=oc(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function ny(e,n,a){var r=n.pendingProps,o=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xt){if(r.mode==="hidden")return e=oc(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Pl(null,e);if(Sf(n),(e=Qt)?(e=E_(e,vi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Om(e),a.return=n,n.child=a,Mn=n,Qt=null)):e=null,e===null)throw Ga(n);return n.lanes=536870912,null}return oc(n,r)}var u=e.memoizedState;if(u!==null){var p=u.dehydrated;if(Sf(n),o)if(n.flags&256)n.flags&=-257,n=Qg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Ar(e,n,a,!1),o=(a&e.childLanes)!==0,pn||o){if(Ya.current===null){if(r=Zt,r!==null&&(p=ul(r,a),p!==0&&p!==u.retryLane))throw u.retryLane=p,Mr(e,p),jn(r,e,p),Gf;Cc()}n=Qg(e,n,a)}else e=u.treeContext,Qt=Si(p.nextSibling),Mn=n,xt=!0,Ha=null,vi=!1,e!==null&&zm(n,e),n=oc(n,r),n.flags|=134221824;return n}return e=ma(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function vs(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Vf(e,n,a,r,o){return Rr(n),a=Ef(e,n,a,r,void 0,o),r=bf(),e!==null&&!pn?(Tf(e,n,o),ya(e,n,o)):(xt&&r&&Ho(n),n.flags|=1,xn(e,n,a,o),n.child)}function Jg(e,n,a,r,o,u){return Rr(n),n.updateQueue=null,a=tg(n,r,a,o),eg(e),r=bf(),e!==null&&!pn?(Tf(e,n,u),ya(e,n,u)):(xt&&r&&Ho(n),n.flags|=1,xn(e,n,a,u),n.child)}function $g(e,n,a,r,o){if(Rr(n),n.stateNode===null){var u=os,p=a.contextType;typeof p=="object"&&p!==null&&(u=An(p)),u=new a(r,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ff,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=r,u.state=n.memoizedState,u.refs={},pf(n),p=a.contextType,u.context=typeof p=="object"&&p!==null?An(p):os,u.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(Bf(n,a,p,r),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&Ff.enqueueReplaceState(u,u.state,null),Nl(n,r,u,o),wl(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){u=n.stateNode;var A=n.memoizedProps,I=Or(a,A);u.props=I;var Q=u.context,oe=a.contextType;p=os,typeof oe=="object"&&oe!==null&&(p=An(oe));var Se=a.getDerivedStateFromProps;oe=typeof Se=="function"||typeof u.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,oe||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(A||Q!==p)&&Fg(n,u,r,p),ka=!1;var Y=n.memoizedState;u.state=Y,Nl(n,r,u,o),wl(),Q=n.memoizedState,A||Y!==Q||ka?(typeof Se=="function"&&(Bf(n,a,Se,r),Q=n.memoizedState),(I=ka||Bg(n,a,I,r,Y,Q,p))?(oe||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),u.props=r,u.state=Q,u.context=p,r=I):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,mf(e,n),p=n.memoizedProps,oe=Or(a,p),u.props=oe,Se=n.pendingProps,Y=u.context,Q=a.contextType,I=os,typeof Q=="object"&&Q!==null&&(I=An(Q)),A=a.getDerivedStateFromProps,(Q=typeof A=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==Se||Y!==I)&&Fg(n,u,r,I),ka=!1,Y=n.memoizedState,u.state=Y,Nl(n,r,u,o),wl();var re=n.memoizedState;p!==Se||Y!==re||ka||e!==null&&e.dependencies!==null&&Xo(e.dependencies)?(typeof A=="function"&&(Bf(n,a,A,r),re=n.memoizedState),(oe=ka||Bg(n,a,oe,r,Y,re,I)||e!==null&&e.dependencies!==null&&Xo(e.dependencies))?(Q||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,re,I),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,re,I)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=re),u.props=r,u.state=re,u.context=I,r=oe):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),r=!1)}return u=r,vs(e,n),r=(n.flags&128)!==0,u||r?(u=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&r?(n.child=Ur(n,e.child,null,o),n.child=Ur(n,null,a,o)):xn(e,n,a,o),n.memoizedState=u.state,e=n.child):e=ya(e,n,o),e}function e0(e,n,a,r){return br(),n.flags|=256,xn(e,n,a,r),n.child}var Xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kf(e){return{baseLanes:e,cachePool:Xm()}}function Wf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function t0(e,n,a){var r=n.pendingProps,o=!1,u=(n.flags&128)!==0,p;if((p=u)||(p=e!==null&&e.memoizedState===null?!1:(Cn.current&2)!==0),p&&(o=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(xt){if(o?ja(n):Za(),(e=Qt)?(e=E_(e,vi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Om(e),a.return=n,n.child=a,Mn=n,Qt=null)):e=null,e===null)throw Ga(n);return kd(e)?n.lanes=32:n.lanes=536870912,null}return u=r.children,r=r.fallback,o?(Za(),o=n.mode,u=cc({mode:"hidden",children:u},o),r=Er(r,o,a,null),u.return=n,r.return=n,u.sibling=r,n.child=u,r=n.child,r.memoizedState=kf(a),r.childLanes=Wf(e,p,a),n.memoizedState=Xf,Pl(null,r)):(ja(n),qf(n,u))}var A=e.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return iy(e,n,u,p,r,I,A,a)}return o?(Za(),o=r.fallback,u=n.mode,A=e.child,I=A.sibling,r=ma(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,I!==null?o=ma(I,o):(o=Er(o,u,a,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,Pl(null,r),r=n.child,o=e.child.memoizedState,o===null?o=kf(a):(u=o.cachePool,u!==null?(A=dn._currentValue,u=u.parent!==A?{parent:A,pool:A}:u):u=Xm(),o={baseLanes:o.baseLanes|a,cachePool:u}),r.memoizedState=o,r.childLanes=Wf(e,p,a),n.memoizedState=Xf,Pl(e.child,r)):(ja(n),a=e.child,e=a.sibling,a=ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function qf(e,n){return n=cc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function cc(e,n){return e=kn(22,e,null,n),e.lanes=0,e}function uc(e,n,a){return Ur(n,e.child,null,a),e=qf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function iy(e,n,a,r,o,u,p,A){if(a)return n.flags&256?(ja(n),n.flags&=-257,uc(e,n,A)):n.memoizedState!==null?(Za(),n.child=e.child,n.flags|=128,null):(Za(),u=o.fallback,p=n.mode,o=cc({mode:"visible",children:o.children},p),u=Er(u,p,A,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Ur(n,e.child,null,A),o=n.child,o.memoizedState=kf(A),o.childLanes=Wf(e,r,A),n.memoizedState=Xf,Pl(null,o));if(ja(n),kd(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(o=Error(s(419)),o.stack="",o.digest=r,El({value:o,source:null,stack:null})),uc(e,n,A)}if(pn||Ar(e,n,A,!1),r=(A&e.childLanes)!==0,pn||r){if(Ya.current!==null)return uc(e,n,A);if(r=Zt,r!==null&&(o=ul(r,A),o!==0&&o!==p.retryLane))throw p.retryLane=o,Mr(e,o),jn(r,e,o),Gf;return Xd(u)||Cc(),uc(e,n,A)}return Xd(u)?(n.flags|=192,n.child=e.child,null):(e=p.treeContext,Qt=Si(u.nextSibling),Mn=n,xt=!0,Ha=null,vi=!1,e!==null&&zm(n,e),n=qf(n,o.children),n.flags|=134221824,n)}function n0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Vo(e.return,n,a)}function i0(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Qo(a)===null&&(n=e),e=e.sibling}return n}function fc(e,n,a,r,o,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o,treeForkCount:u}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=a,p.tailMode=o,p.treeForkCount=u)}function Yf(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function jf(e,n,a){var r=n.pendingProps,o=r.revealOrder,u=r.tail;r=r.children;var p=Cn.current;if(n.flags&128)return Dl(n,p),null;var A=(p&2)!==0;if(A?(p=p&1|2,n.flags|=128):p&=1,Dl(n,p),o==="backwards"&&e!==null?(Yf(e),xn(e,n,r,a),Yf(e)):xn(e,n,r,a),r=xt?Ml:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&n0(e,a,n);else if(e.tag===19)n0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"backwards":a=i0(n.child),a===null?(o=n.child,n.child=null):(o=a.sibling,a.sibling=null,Yf(n)),fc(n,!0,o,null,u,r);break;case"unstable_legacy-backwards":for(a=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Qo(e)===null){n.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}fc(n,!0,a,null,u,r);break;case"together":fc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=i0(n.child),a===null?(o=n.child,n.child=null):(o=a.sibling,a.sibling=null),fc(n,!1,o,a,u,r)}return n.child}function a0(e,n,a){var r=n.pendingProps;return Va(n,n.type,r.value),xn(e,n,r.children,a),n.child}function ya(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$a|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ar(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Zf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Xo(e)))}function ay(e,n,a){switch(n.tag){case 3:X(n,n.stateNode.containerInfo),Va(n,dn,e.memoizedState.cache),br();break;case 27:case 5:Ut(n);break;case 4:X(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Sf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ja(n),n.flags|=128,null;r=Ar(e,n,a,!1);var o=n.child.childLanes;return r||(a&o)!==0?t0(e,n,a):(ja(n),e=ya(e,n,a),e!==null?e.sibling:null)}ja(n);break;case 19:if(n.flags&128)return jf(e,n,a);if(o=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Ar(e,n,a,!1),r=(a&n.childLanes)!==0),o){if(r)return jf(e,n,a);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Dl(n,Cn.current),r)break;return null;case 22:return n.lanes=0,Zg(e,n,a,n.pendingProps);case 24:Va(n,dn,e.memoizedState.cache)}return ya(e,n,a)}function r0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!Zf(e,a)&&(n.flags&128)===0)return pn=!1,ay(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,xt&&(n.flags&1048576)!==0&&Im(n,Ml,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Nr(n.elementType),n.type=e,typeof e=="function")tf(e)?(r=Or(e,r),n.tag=1,n=$g(null,n,e,r,a)):(n.tag=0,n=Vf(null,n,e,r,a));else{if(e!=null){var o=e.$$typeof;if(o===W){n.tag=11,n=qg(null,n,e,r,a);break e}else if(o===se){n.tag=14,n=Yg(null,n,e,r,a);break e}else if(o===ee){n.tag=10,n.type=e,n=a0(null,n,a);break e}}throw n=Te(e)||e,Error(s(306,n,""))}}return n;case 0:return Vf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,o=Or(r,n.pendingProps),$g(e,n,r,o,a);case 3:e:{if(X(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var u=n.memoizedState;o=u.element,mf(e,n),Nl(n,r,null,a);var p=n.memoizedState;if(r=p.cache,Va(n,dn,r),r!==u.cache&&cf(n,[dn],a,!0),wl(),r=p.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=e0(e,n,r,a);break e}else if(r!==o){o=mi(Error(s(424)),n),El(o),n=e0(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qt=Si(e.firstChild),Mn=n,xt=!0,Ha=null,vi=!0,a=Zm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(br(),r===o){n=ya(e,n,a);break e}xn(e,n,r,a)}n=n.child}return n;case 26:return vs(e,n),e===null?(a=N_(n.type,null,n.pendingProps,null))?n.memoizedState=a:xt||(n.stateNode=c_(n.type,n.pendingProps,Lt.current,n)):n.memoizedState=N_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ut(n),e===null&&xt&&(r=n.stateNode=A_(n.type,n.pendingProps,Lt.current),Mn=n,vi=!0,o=Qt,ir(n.type)?(Wd=o,Qt=Si(r.firstChild)):Qt=o),xn(e,n,n.pendingProps.children,a),vs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xt&&((o=r=Qt)&&(r=Jy(r,n.type,n.pendingProps,vi),r!==null?(n.stateNode=r,Mn=n,Qt=Si(r.firstChild),vi=!1,o=!0):o=!1),o||Ga(n)),Ut(n),o=n.type,u=n.pendingProps,p=e!==null?e.memoizedProps:null,r=u.children,Id(o,u)?r=null:p!==null&&Id(o,p)&&(n.flags|=32),n.memoizedState!==null&&(o=Ef(e,n,YS,null,null,a),Is._currentValue=o),vs(e,n),xn(e,n,r,a),n.child;case 6:return e===null&&xt&&((e=a=Qt)&&(a=$y(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Mn=n,Qt=null,e=!0):e=!1),e||Ga(n)),null;case 13:return t0(e,n,a);case 4:return X(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ur(n,null,r,a):xn(e,n,r,a),n.child;case 11:return qg(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,vs(e,n),xn(e,n,r,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return a0(e,n,a);case 9:return o=n.type._context,r=n.pendingProps.children,Rr(n),o=An(o),r=r(o),n.flags|=1,xn(e,n,r,a),n.child;case 14:return Yg(e,n,n.type,n.pendingProps,a);case 15:return jg(e,n,n.type,n.pendingProps,a);case 19:return jf(e,n,a);case 31:return ny(e,n,a);case 22:return Zg(e,n,a,n.pendingProps);case 24:return Rr(n),r=An(dn),e===null?(o=df(),o===null&&(o=Zt,u=uf(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=a),o=u),n.memoizedState={parent:r,cache:o},pf(n),Va(n,dn,o)):((e.lanes&a)!==0&&(mf(e,n),Nl(n,null,null,a),wl()),o=e.memoizedState,u=n.memoizedState,o.parent!==r?(o={parent:r,cache:r},n.memoizedState=o,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=o),Va(n,dn,r)):(r=u.cache,Va(n,dn,r),r!==o.cache&&cf(n,[dn],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:xt&&Ho(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:vs(e,n),xn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ma(e){e.flags|=4}function Kf(e,n,a,r,o){var u;if((u=(e.mode&32)!==0)&&(u=a===null?O_(n,r):O_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(H0())e.flags|=8192;else throw Dr=Yo,hf}else e.flags&=-16777217}function s0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P_(n))if(H0())e.flags|=8192;else throw Dr=Yo,hf}function dc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ol():536870912,e.lanes|=n,Es|=n)}function Il(e,n){if(!xt)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function Jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&1206910976,r|=o.flags&1206910976,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function ry(e,n,a){var r=n.pendingProps;switch(rf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),va(dn),nn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fs(n)?Ma(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lf())),Jt(n),null;case 26:var o=n.type,u=n.memoizedState;return e===null?(Ma(n),u!==null?(Jt(n),s0(n,u)):(Jt(n),Kf(n,o,null,r,a))):u?u!==e.memoizedState?(Ma(n),Jt(n),s0(n,u)):(Jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ma(n),Jt(n),Kf(n,o,e,r,a)),null;case 27:if(D(n),a=Lt.current,o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Jt(n),n.subtreeFlags&=-33554433,null}e=Vt.current,fs(n)?Bm(n):(e=A_(o,r,a),n.stateNode=e,Ma(n))}return Jt(n),n.subtreeFlags&=-33554433,null;case 5:if(D(n),o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Jt(n),n.subtreeFlags&=-33554433,null}if(u=Vt.current,fs(n))Bm(n);else{var p=Yl(Lt.current);switch(u){case 1:u=p.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:u=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":u=p.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":u=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":u=p.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?p.createElement(o,{is:r.is}):p.createElement(o)}}u[T]=n,u[F]=r;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)u.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=u;e:switch(Nn(u,o,r),o){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ma(n)}}return Jt(n),n.subtreeFlags&=-33554433,Kf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Lt.current,fs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,o=Mn,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}e[T]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||r_(e.nodeValue,a)),e||Ga(n,!0)}else e=Yl(e).createTextNode(r),e[T]=n,n.stateNode=e}return Jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=fs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[T]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),e=!1}else a=lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Jt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=fs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[T]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),o=!1}else o=lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),dc(n,n.updateQueue),Jt(n),null);case 4:return nn(),e===null&&Dd(n.stateNode.containerInfo),n.flags|=67108864,Jt(n),null;case 10:return va(n.type),Jt(n),null;case 19:if(yf(n),r=n.memoizedState,r===null)return Jt(n),null;if(o=(n.flags&128)!==0,u=r.rendering,u===null)if(o)Il(r,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=Qo(e),u!==null){for(n.flags|=128,Il(r,!1),e=u.updateQueue,n.updateQueue=e,dc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Lm(a,e),a=a.sibling;return Dl(n,Cn.current&1|2),xt&&ga(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Xe()>bc&&(n.flags|=128,o=!0,Il(r,!1),n.lanes=4194304)}else{if(!o)if(e=Qo(u),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,dc(n,e),Il(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!xt)return Jt(n),null}else 2*Xe()-r.renderingStartTime>bc&&a!==536870912&&(n.flags|=128,o=!0,Il(r,!1),n.lanes=4194304);r.isBackwards?(u.sibling=n.child,n.child=u):(e=r.last,e!==null?e.sibling=u:n.child=u,r.last=u)}if(r.tail!==null){e=r.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Xe(),e.sibling=null,u=Cn.current,u=o?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||xt?Dl(n,u):(a=u,it(Rn,n),it(Cn,a),Ln===null&&(Ln=n)),xt&&ga(n,r.treeForkCount),e}return Jt(n),null;case 22:case 23:return ti(n),xf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&dc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&tt(wr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),va(dn),Jt(n),null;case 25:return null;case 30:return n.flags|=33554432,Jt(n),null}throw Error(s(156,n.tag))}function sy(e,n){switch(rf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return va(dn),nn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return D(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));br()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));br()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return yf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return nn(),null;case 10:return va(n.type),null;case 22:case 23:return ti(n),xf(),e!==null&&tt(wr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return va(dn),null;case 25:return null;default:return null}}function l0(e,n){switch(rf(n),n.tag){case 3:va(dn),nn();break;case 26:case 27:case 5:D(n);break;case 4:nn();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:yf(n);break;case 10:va(n.type);break;case 22:case 23:ti(n),xf(),e!==null&&tt(wr);break;case 24:va(dn)}}function zl(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var o=r.next;a=o;do{if((a.tag&e)===e){r=void 0;var u=a.create,p=a.inst;r=u(),p.destroy=r}a=a.next}while(a!==o)}}catch(A){kt(n,n.return,A)}}function Ka(e,n,a){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){var p=r.inst,A=p.destroy;if(A!==void 0){p.destroy=void 0,o=n;var I=a,Q=A;try{Q()}catch(oe){kt(o,I,oe)}}}r=r.next}while(r!==u)}}catch(oe){kt(n,n.return,oe)}}function o0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Qm(n,a)}catch(r){kt(e,e.return,r)}}}function c0(e,n,a){a.props=Or(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){kt(e,n,r)}}function Yi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var o=e.stateNode,u=ha(e.memoizedProps,o);(o.ref===null||o.ref.name!==u)&&(o.ref=g_(u)),r=o.ref;break;case 7:if(e.stateNode===null){var p=new si(e);_(e.child,!1,Ky,p,void 0,void 0),e.stateNode=p}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(A){kt(e,n,A)}}function wn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(o){kt(e,n,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){kt(e,n,o)}else a.current=null}function hc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)M_(e.stateNode,n[a])}function u0(e){for(var n=e.return;n!==null&&(Jf(n)&&M_(e.stateNode,n.stateNode),!Qf(n));)n=n.return}function Bl(e){for(var n=e.return;n!==null&&(Jf(n)&&Qy(e.stateNode,n.stateNode),!Qf(n));)n=n.return}function Qf(e){return e.tag===5||e.tag===3||e.tag===27}function Jf(e){return e&&e.tag===7&&e.stateNode!==null}function $f(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(o){kt(e,e.return,o)}}function ed(e,n,a){try{var r=e.stateNode;Uy(r,e.type,a,n),r[F]=n}catch(o){kt(e,e.return,o)}}function f0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ir(e.type)||e.tag===4}function td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||f0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ir(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nd(e,n,a,r){var o=e.tag;if(o===5||o===6)o=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(o,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(o),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki)),hc(e,r),vt=!0;else if(o!==4&&(o===27&&(hc(e,r),r=null,ir(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(nd(e,n,a,r),e=e.sibling;e!==null;)nd(e,n,a,r),e=e.sibling}function pc(e,n,a,r){var o=e.tag;if(o===5||o===6)o=e.stateNode,n?a.insertBefore(o,n):a.appendChild(o),hc(e,r),vt=!0;else if(o!==4&&(o===27&&(hc(e,r),r=null,ir(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(pc(e,n,a,r),e=e.sibling;e!==null;)pc(e,n,a,r),e=e.sibling}function d0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,o=n.attributes;o.length;)n.removeAttributeNode(o[0]);Nn(n,r,a),n[T]=e,n[F]=a}catch(u){kt(e,e.return,u)}}var mc=!1,ni=null;function h0(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(mc=!0)}var ji=null;function p0(){var e=ji;return ji=null,e}var Wn=0;function xs(e,n,a,r,o){return Wn=0,m0(e.child,n,a,r,o)}function m0(e,n,a,r,o){for(var u=!1;e!==null;){if(e.tag===5){var p=e.stateNode;if(r!==null){var A=Fd(p);r.push(A),A.view&&(u=!0)}else u||Fd(p).view&&(u=!0);mc=!0,p_(p,Wn===0?n:n+"_"+Wn,a),Wn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&o||m0(e.child,n,a,r,o)&&(u=!0));e=e.sibling}return u}function Zi(e,n){for(;e!==null;)e.tag===5?m_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Zi(e.child,n)),e=e.sibling}function gc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(gc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(xs(e,a,n,null,!1)||Zi(e.child,!1))}e=e.sibling}}function id(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,o=ha(r,a),u=pa(r.default,a.paired?r.share:r.enter);u!=="none"?xs(e,o,u,null,!1)?(gc(e),a.paired||n||Rs(e,r.onEnter)):Zi(e.child,!1):gc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)id(e,n),e=e.sibling;else gc(e)}function ad(e){if(ni!==null&&ni.size!==0){var n=ni;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var o=n.get(r);if(o!==void 0){var u=pa(a.default,a.share);if(u!=="none"&&(xs(e,r,u,null,!1)?(u=e.stateNode,o.paired=u,u.paired=o,Rs(e,a.onShare)):Zi(e.child,!1)),n.delete(r),n.size===0)break}}}ad(e)}e=e.sibling}}}function rd(e){if(e.tag===30){var n=e.memoizedProps,a=ha(n,e.stateNode),r=ni!==null?ni.get(a):void 0,o=pa(n.default,r!==void 0?n.share:n.exit);o!=="none"&&(xs(e,a,o,null,!1)?r!==void 0?(o=e.stateNode,r.paired=o,o.paired=r,ni.delete(a),Rs(e,n.onShare)):Rs(e,n.onExit):Zi(e.child,!1)),ni!==null&&ad(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)rd(e),e=e.sibling;else ni!==null&&ad(e)}function g0(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ha(n,e.stateNode);n=pa(n.default,n.update),e.flags&=-5,n!=="none"&&xs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&g0(e);e=e.sibling}}function sd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Zi(e.child,!1))}sd(e)}e=e.sibling}}function _c(e){if(e.tag===30)e.stateNode.paired=null,Zi(e.child,!1),sd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)_c(e),e=e.sibling;else sd(e)}function _0(e){for(e=e.child;e!==null;)e.tag===30?Zi(e.child,!1):(e.subtreeFlags&33554432)!==0&&_0(e),e=e.sibling}function ld(e,n,a,r,o,u,p){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(u!==null&&Wn<u.length){var Q=u[Wn],oe=Fd(I);(Q.view||oe.view)&&(A=!0);var Se;if(Se=(e.flags&4)===0)if(oe.clip)Se=!0;else{Se=Q.rect;var Y=oe.rect;Se=Se.y!==Y.y||Se.x!==Y.x||Se.height!==Y.height||Se.width!==Y.width}Se&&(e.flags|=4),oe.abs?oe=!Q.abs:(Q=Q.rect,oe=oe.rect,oe=Q.height!==oe.height||Q.width!==oe.width),oe&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&p_(I,Wn===0?a:a+"_"+Wn,o),A&&(e.flags&4)!==0||(ji===null&&(ji=[]),ji.push(I,Wn===0?r:r+"_"+Wn,n.memoizedProps)),Wn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&p?e.flags|=n.flags&32:ld(e,n.child,a,r,o,u,p)&&(A=!0));n=n.sibling}return A}function v0(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,o=ha(a,r),u=pa(a.default,a.update),p;p=e.memoizedState,e.memoizedState=null,r=e;var A=e.child;Wn=0,o=ld(r,A,o,o,u,p,!1),(e.flags&4)!==0&&o&&Rs(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&v0(e);e=e.sibling}}var En=!1,Ht=!1,Ki=!1,od=!1,x0=typeof WeakSet=="function"?WeakSet:Set,bn=null,Qi=!1,Fl=!1,vc=!1,cd=!1;function ly(e,n,a){if(e=e.containerInfo,Od=zs,e=Em(e),ju(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break e}var A=0,I=-1,Q=-1,oe=0,Se=0,Y=e,re=null;t:for(;;){for(var Pe;Y!==r||u!==0&&Y.nodeType!==3||(I=A+u),Y!==p||o!==0&&Y.nodeType!==3||(Q=A+o),Y.nodeType===3&&(A+=Y.nodeValue.length),(Pe=Y.firstChild)!==null;)re=Y,Y=Pe;for(;;){if(Y===e)break t;if(re===r&&++oe===u&&(I=A),re===p&&++Se===o&&(Q=A),(Pe=Y.nextSibling)!==null)break;Y=re,re=Y.parentNode}Y=Pe}r=I===-1||Q===-1?null:{start:I,end:Q}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pd={focusedElem:e,selectionRange:r},zs=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(e=bn,a&&(r=e.deletions,r!==null))for(u=0;u<r.length;u++)a&&rd(r[u]);if(e.alternate===null&&(e.flags&2)!==0)a&&h0(e),xc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&rd(r),xc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&h0(e),xc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,bn=r):(a&&g0(e),xc(a))}}ni=null}function xc(e){for(;bn!==null;){var n=bn,a=e,r=n.alternate,o=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((o&1024)!==0&&r!==null){a=void 0,o=r.memoizedProps,r=r.memoizedState;var u=n.stateNode;try{var p=Or(n.type,o);a=u.getSnapshotBeforeUpdate(p,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(A){kt(n,n.return,A)}}break;case 3:if((o&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Vd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Vd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ha(r.memoizedProps,r.stateNode),o=n.memoizedProps,o=pa(o.default,o.update),o!=="none"&&xs(r,a,o,r.memoizedState=[],!0));break;default:if((o&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function S0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(e,a),r&4&&zl(5,a);break;case 1:if(Ji(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){kt(a,a.return,p)}else{var o=Or(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(o,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){kt(a,a.return,p)}}r&64&&o0(a),r&512&&Yi(a,a.return);break;case 3:if(Ji(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Qm(e,n)}catch(p){kt(a,a.return,p)}}break;case 27:n===null&&r&4&&d0(a);case 26:case 5:Ji(e,a),n===null&&r&4&&$f(a),r&512&&Yi(a,a.return);break;case 12:Ji(e,a);break;case 31:Ji(e,a),r&4&&b0(e,a);break;case 13:Ji(e,a),r&4&&T0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xy.bind(null,a),eM(e,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var u=n!==null&&n.memoizedState!==null||Ht;n=En,o=Ht,En=r,(Ht=u)&&!o?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),wi(e,a,r)):Ji(e,a),En=n,Ht=o}break;case 30:Ji(e,a),r&512&&Yi(a,a.return);break;case 7:r&512&&Yi(a,a.return);default:Ji(e,a)}}function ud(e,n){for(e=e.child;e!==null;)y0(e,n),e=e.sibling}function y0(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var o=e.stateNode,u=e.memoizedProps.style,p=u!=null&&u.hasOwnProperty("display")?u.display:null;o.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(I){kt(e,e.return,I)}fd(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,vt=!0}catch(I){kt(e,e.return,I)}break;case 18:try{var A=e.stateNode;n?h_(A,!0):h_(e.stateNode,!1)}catch(I){kt(e,e.return,I)}break;case 22:case 23:e.memoizedState===null&&ud(e,n);break;default:ud(e,n)}}function fd(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,r=n;switch(a.tag){case 4:y0(a,r);break e;case 22:a.memoizedState===null&&fd(a,r);break e;default:fd(a,r)}}e=e.sibling}}function M0(e){var n=e.alternate;n!==null&&(e.alternate=null,M0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ke(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,qn=!1;function Ri(e,n,a){for(a=a.child;a!==null;)E0(e,n,a),a=a.sibling}function E0(e,n,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 26:Ht||wn(a,n),Ri(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ht&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ht||wn(a,n),Bl(a);var r=tn,o=qn;ir(a.type)&&(tn=a.stateNode,qn=!1),Ri(e,n,a),R_(a.stateNode,a.type,a.memoizedProps),tn=r,qn=o;break;case 5:Ht||wn(a,n),Bl(a);case 6:if(a.tag===6&&Bl(a),r=tn,o=qn,tn=null,Ri(e,n,a),tn=r,qn=o,tn!==null)if(qn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),vt=!0}catch(u){kt(a,n,u)}else try{tn.removeChild(a.stateNode),vt=!0}catch(u){kt(a,n,u)}break;case 18:tn!==null&&(qn?(e=tn,d_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Bs(e)):d_(tn,a.stateNode));break;case 4:r=tn,o=qn,tn=a.stateNode.containerInfo,qn=!0,Ri(e,n,a),tn=r,qn=o;break;case 0:case 11:case 14:case 15:Ka(2,a,n),Ht||Ka(4,a,n),Ri(e,n,a);break;case 1:Ht||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&c0(a,n,r)),Ri(e,n,a);break;case 21:Ri(e,n,a);break;case 22:Ht=(r=Ht)||a.memoizedState!==null,Ri(e,n,a),Ht=r;break;case 30:wn(a,n),Ri(e,n,a);break;case 7:Ht||wn(a,n),Ri(e,n,a);break;default:Ri(e,n,a)}}function b0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bs(e)}catch(a){kt(n,n.return,a)}}}function T0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bs(e)}catch(a){kt(n,n.return,a)}}function oy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new x0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new x0),n;default:throw Error(s(435,e.tag))}}function Sc(e,n){var a=oy(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var o=Sy.bind(null,e,r);r.then(o,o)}})}function Gn(e,n,a){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],p=e,A=n,I=A;e:for(;I!==null;){switch(I.tag){case 27:if(ir(I.type)){tn=I.stateNode,qn=!1;break e}break;case 5:tn=I.stateNode,qn=!1;break e;case 3:case 4:tn=I.stateNode.containerInfo,qn=!0;break e}I=I.return}if(tn===null)throw Error(s(160));E0(p,A,u),tn=null,qn=!1,p=u.alternate,p!==null&&(p.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)A0(n,e,a),n=n.sibling}var Ci=null;function A0(e,n,a){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(o&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var p=r[u];p.ref.impl=p.nextImpl}Gn(n,e,a),Vn(e),o&4&&(Ka(3,e,e.return),zl(3,e),Ka(5,e,e.return));break;case 1:Gn(n,e,a),Vn(e),o&512&&(Ht||r===null||wn(r,r.return)),o&64&&En&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ci,Gn(n,e,a),Vn(e),o&512&&(Ht||r===null||wn(r,r.return)),o&4)if(o=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(En)e.stateNode=c_(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,o=u.ownerDocument||u;t:switch(n){case"title":r=o.getElementsByTagName("title")[0],(!r||r[Oe]||r[T]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=o.createElement(n),o.head.insertBefore(r,o.querySelector("head > title"))),Nn(r,n,a),r[T]=e,_t(r),n=r;break e;case"link":if(u=L_("link","href",o).get(n+(a.href||""))){for(p=0;p<u.length;p++)if(r=u[p],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(p,1);break t}}r=o.createElement(n),Nn(r,n,a),o.head.appendChild(r);break;case"meta":if(u=L_("meta","content",o).get(n+(a.content||""))){for(p=0;p<u.length;p++)if(r=u[p],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(p,1);break t}}r=o.createElement(n),Nn(r,n,a),o.head.appendChild(r);break;default:throw Error(s(468,n))}r[T]=e,_t(r),n=r}e.stateNode=n}else En||Zd(u,e.type,e.stateNode);else e.stateNode=U_(u,a,e.memoizedProps);else o!==a?(o===null?(n=r.stateNode,n===null||Ht||n.parentNode.removeChild(n)):o.count--,a===null?En||Zd(u,e.type,e.stateNode):U_(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ed(e,e.memoizedProps,r.memoizedProps);break;case 27:Gn(n,e,a),Vn(e),o&512&&(Ht||r===null||wn(r,r.return)),r!==null&&o&4&&ed(e,e.memoizedProps,r.memoizedProps);break;case 5:if(u=Ki,Ki=!1,Gn(n,e,a),Ki=u,Vn(e),o&512&&(Ht||r===null||wn(r,r.return)),e.flags&32){n=e.stateNode;try{ts(n,""),vt=!0}catch(oe){kt(e,e.return,oe)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,ed(e,n,r!==null?r.memoizedProps:n)),o&1024&&(od=!0);break;case 6:if(Gn(n,e,a),Vn(e),o&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,vt=!0}catch(oe){kt(e,e.return,oe)}}break;case 3:if(vt=!1,Pc=null,u=Ci,Ci=jl(n.containerInfo),Gn(n,e,a),Ci=u,Vn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Bs(n.containerInfo)}catch(oe){kt(e,e.return,oe)}od&&(od=!1,R0(e)),vt=!1;break;case 4:o=Ki,Ki=En,r=Pt(),u=Ci,Ci=jl(e.stateNode.containerInfo),Gn(n,e,a),Vn(e),Ci=u,vt&&Fl&&(vc=!0),vt=r,Ki=o;break;case 12:Gn(n,e,a),Vn(e);break;case 31:Gn(n,e,a),Vn(e),o&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Sc(e,n)));break;case 13:Gn(n,e,a),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ec=Xe()),o&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Sc(e,n)));break;case 22:u=e.memoizedState!==null,p=r!==null&&r.memoizedState!==null;var A=En,I=Ht,Q=Ki;En=A||u,Ki=Q||u,Ht=I||p,Gn(n,e,a),Ht=I,Ki=Q,En=A,Vn(e),o&8192&&(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||r===null||p||En||Ht||(n=p||Ht,a=En,r=Ht,En=u||En,Ht=n,Qa(e,2),En=a,Ht=r),!u&&Ki||ud(e,u)),o&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Sc(e,a))));break;case 19:Gn(n,e,a),Vn(e),o&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Sc(e,n)));break;case 30:o&512&&(Ht||r===null||wn(r,r.return)),o=Pt(),u=Fl,p=(a&335544064)===a,A=e.memoizedProps,Fl=p&&pa(A.default,A.update)!=="none",Gn(n,e,a),Vn(e),p&&r!==null&&vt&&(e.flags|=4),Fl=u,vt=o;break;case 21:break;case 7:o&512&&(Ht||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Gn(n,e,a),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(f0(r)){a=r;break}r=r.return}r=null;for(var o=e.return;o!==null;){if(Jf(o)){var u=o.stateNode;r===null?r=[u]:r.push(u)}if(Qf(o))break;o=o.return}var p=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,I=td(e);pc(e,I,A,p);break;case 5:var Q=a.stateNode;a.flags&32&&(ts(Q,""),a.flags&=-33);var oe=td(e);pc(e,oe,Q,p);break;case 3:case 4:var Se=a.stateNode.containerInfo,Y=td(e);nd(e,Y,Se,p);break;default:throw Error(s(161))}}catch(re){kt(e,e.return,re)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function R0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;R0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,zs=!0,n.reset(),zs=!1),e=e.sibling}}function Ss(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)C0(n,e),n=n.sibling;else v0(n)}function C0(e,n){var a=e.alternate;if(a===null)id(e,!1);else switch(e.tag){case 3:if(cd=Qi=!1,p0(),Ss(n,e),!Qi&&!vc){if(e=ji,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var o=e[r+1];m_(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+o+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),cd=!0}ji=null;break;case 5:Ss(n,e);break;case 4:r=Qi,Qi=!1,Ss(n,e),Qi&&(vc=!0),Qi=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?id(e,!1):Ss(n,e));break;case 30:r=Qi,o=p0(),Qi=!1,Ss(n,e),Qi&&(e.flags|=4);var u=e.memoizedProps,p=e.stateNode;n=ha(u,p),p=ha(a.memoizedProps,p);var A=pa(u.default,u.update);A==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=e.child,Wn=0,n=ld(e,a,n,p,A,u,!0),Wn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Rs(e,e.memoizedProps.onUpdate),ji=o):o!==null&&(o.push.apply(o,ji),ji=o),Qi=(e.flags&32)!==0?!0:r;break;default:Ss(n,e)}}function Ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)S0(e,n.alternate,n),n=n.sibling}function Qa(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ka(4,a,a.return),Qa(a,r);break;case 1:wn(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&c0(a,a.return,o),Qa(a,r);break;case 27:(r&2)!==0&&R_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Bl(a),Qa(a,r);break;case 6:Bl(a);break;case 26:wn(a,a.return),o=a.stateNode,a.memoizedState!==null||o===null||Ht||o.parentNode.removeChild(o),Qa(a,r);break;case 22:a.memoizedState===null&&Qa(a,r);break;case 30:wn(a,a.return),Qa(a,r);break;case 7:wn(a,a.return);default:Qa(a,r)}e=e.sibling}}function wi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,o=e,u=n,p=u.flags,A=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:wi(o,u,a),zl(4,u);break;case 1:if(wi(o,u,a),r=u,o=r.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(oe){kt(r,r.return,oe)}if(r=u,o=r.updateQueue,o!==null){var I=r.stateNode;try{var Q=o.shared.hiddenCallbacks;if(Q!==null)for(o.shared.hiddenCallbacks=null,o=0;o<Q.length;o++)Km(Q[o],I)}catch(oe){kt(r,r.return,oe)}}A&&p&64&&o0(u),Yi(u,u.return);break;case 27:(a&2)!==0&&d0(u);case 5:u.tag!==5&&u.tag!==27||u0(u),wi(o,u,a),A&&r===null&&p&4&&$f(u),Yi(u,u.return);break;case 6:u0(u);break;case 26:I=u.stateNode,u.memoizedState!==null||I===null||En||Zd(jl(I.ownerDocument),u.type,I),wi(o,u,a),A&&r===null&&p&4&&$f(u),Yi(u,u.return);break;case 12:wi(o,u,a);break;case 31:wi(o,u,a),A&&p&4&&b0(o,u);break;case 13:wi(o,u,a),A&&p&4&&T0(o,u);break;case 22:u.memoizedState===null&&wi(o,u,a),Yi(u,u.return);break;case 30:wi(o,u,a),Yi(u,u.return);break;case 7:Yi(u,u.return);default:wi(o,u,a)}n=n.sibling}}function dd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&bl(a))}function hd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&bl(e))}function xi(e,n,a,r){var o=(a&335544064)===a;if(n.subtreeFlags&(o?10262:10256))for(n=n.child;n!==null;)w0(e,n,a,r),n=n.sibling;else o&&_0(n)}function w0(e,n,a,r){var o=(a&335544064)===a;o&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&_c(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,r),u&2048&&zl(9,n);break;case 1:xi(e,n,a,r);break;case 3:xi(e,n,a,r),o&&cd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&bl(u)));break;case 12:if(u&2048){xi(e,n,a,r),u=n.stateNode;try{var p=n.memoizedProps,A=p.id,I=p.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(Q){kt(n,n.return,Q)}}else xi(e,n,a,r);break;case 31:xi(e,n,a,r);break;case 13:xi(e,n,a,r);break;case 23:break;case 22:p=n.stateNode,A=n.alternate,n.memoizedState!==null?(o&&A!==null&&A.memoizedState===null&&_c(A),p._visibility&2?xi(e,n,a,r):Hl(e,n)):(o&&A!==null&&A.memoizedState!==null&&_c(n),p._visibility&2?xi(e,n,a,r):(p._visibility|=2,ys(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),u&2048&&dd(A,n);break;case 24:xi(e,n,a,r),u&2048&&hd(n.alternate,n);break;case 30:o&&(u=n.alternate,u!==null&&(Zi(u.child,!0),Zi(n.child,!0))),xi(e,n,a,r);break;default:xi(e,n,a,r)}}function ys(e,n,a,r,o){for(o=o&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,p=n,A=a,I=r,Q=p.flags;switch(p.tag){case 0:case 11:case 15:ys(u,p,A,I,o),zl(8,p);break;case 23:break;case 22:var oe=p.stateNode;p.memoizedState!==null?oe._visibility&2?ys(u,p,A,I,o):Hl(u,p):(oe._visibility|=2,ys(u,p,A,I,o)),o&&Q&2048&&dd(p.alternate,p);break;case 24:ys(u,p,A,I,o),o&&Q&2048&&hd(p.alternate,p);break;default:ys(u,p,A,I,o)}n=n.sibling}}function Hl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,o=r.flags;switch(r.tag){case 22:Hl(a,r),o&2048&&dd(r.alternate,r);break;case 24:Hl(a,r),o&2048&&hd(r.alternate,r);break;default:Hl(a,r)}n=n.sibling}}var Pr=8192;function Ir(e,n,a){if(e.subtreeFlags&Pr)for(e=e.child;e!==null;)N0(e,n,a),e=e.sibling}function N0(e,n,a){switch(e.tag){case 26:Ir(e,n,a),e.flags&Pr&&(e.memoizedState!==null?pM(a,Ci,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&z_(a,e)));break;case 5:Ir(e,n,a),e.flags&Pr&&(e=e.stateNode,(n&335544128)===n&&z_(a,e));break;case 3:case 4:var r=Ci;Ci=jl(e.stateNode.containerInfo),Ir(e,n,a),Ci=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Pr,Pr=16777216,Ir(e,n,a),Pr=r):Ir(e,n,a));break;case 30:if((e.flags&Pr)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var o=e.stateNode;o.paired=null,ni===null&&(ni=new Map),ni.set(r,o)}Ir(e,n,a);break;default:Ir(e,n,a)}}function D0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Gl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,L0(r,e)}D0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)U0(e),e=e.sibling}function U0(e){switch(e.tag){case 0:case 11:case 15:Gl(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:Gl(e);break;case 12:Gl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,yc(e)):Gl(e);break;default:Gl(e)}}function yc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,L0(r,e)}D0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ka(8,n,n.return),yc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,yc(n));break;default:yc(n)}e=e.sibling}}function L0(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:bl(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else e:for(a=e;bn!==null;){r=bn;var o=r.sibling,u=r.return;if(M0(r),r===a){bn=null;break e}if(o!==null){o.return=u,bn=o;break e}bn=u}}}var cy={getCacheForType:function(e){var n=An(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(dn).controller.signal}},uy=typeof WeakMap=="function"?WeakMap:Map,It=0,Zt=null,Mt=null,Tt=0,Xt=0,ii=null,Ja=!1,Ms=!1,pd=!1,Ea=0,on=0,$a=0,zr=0,Mc=0,ai=0,Es=0,Vl=null,Yn=null,md=!1,Ec=0,O0=0,bc=1/0,Tc=null,er=null,an=0,Ni=null,Br=null,$i=0,gd=0,_d=null,P0=null,bs=null,Ts=null,As=null,Xl=0,Ac=null;function ri(){return(It&2)!==0&&Tt!==0?Tt&-Tt:ve.T!==null?Rd():bo()}function I0(){if(ai===0)if((Tt&536870912)===0||xt){var e=_r;_r<<=1,(_r&3932160)===0&&(_r=262144),ai=e}else ai=536870912;return e=Rn.current,e!==null&&(e.flags|=32),ai}function Rs(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=g_(ha(e.memoizedProps,a))),Ts===null&&(Ts=[]),Ts.push(n.bind(null,r))}}function jn(e,n,a){(e===Zt&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(Cs(e,0),tr(e,Tt,ai,!1)),Vi(e,a),((It&2)===0||e!==Zt)&&(e===Zt&&((It&2)===0&&(zr|=a),on===4&&tr(e,Tt,ai,!1)),ea(e))}function z0(e,n,a){if((It&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ia(e,n),o=r?hy(e,n):xd(e,n,!0),u=r;do{if(o===0){Ms&&!r&&tr(e,n,0,!1);break}else{if(a=e.current.alternate,u&&!fy(a)){o=xd(e,n,!1),u=!1;continue}if(o===2){if(u=n,e.errorRecoveryDisabledLanes&u)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var A=e;o=Vl;var I=A.current.memoizedState.isDehydrated;if(I&&(Cs(A,p).flags|=256),p=xd(A,p,!1),p!==2&&p!==6){if(pd&&!I){A.errorRecoveryDisabledLanes|=u,zr|=u,o=4;break e}u=Yn,Yn=o,u!==null&&(Yn===null?Yn=u:Yn.push.apply(Yn,u))}o=p}if(u=!1,o!==2)continue}}if(o===1){Cs(e,0),tr(e,n,0,!0);break}e:{switch(r=e,u=o,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:tr(r,n,ai,!Ja);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(o=Ec+300-Xe(),10<o)){if(tr(r,n,ai,!Ja),vr(r,0,!0)!==0)break e;$i=n,r.timeoutHandle=Bd(B0.bind(null,r,a,Yn,Tc,md,n,ai,zr,Es,Ja,u,"Throttled",-0,0),o);break e}B0(r,a,Yn,Tc,md,n,ai,zr,Es,Ja,u,null,-0,0)}}break}while(!0);ea(e)}function B0(e,n,a,r,o,u,p,A,I,Q,oe,Se,Y,re){e.timeoutHandle=-1;var Pe=n.subtreeFlags,Qe=(u&335544064)===u;if(Se=null,(Qe||Pe&8192||(Pe&16785408)===16785408)&&(Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},ni=null,N0(n,u,Se),Qe&&(Pe=Se,Qe=e.containerInfo,Qe=(Qe.nodeType===9?Qe:Qe.ownerDocument).__reactViewTransition,Qe!=null&&(Pe.count++,Pe.waitingForViewTransition=!0,Pe=Ql.bind(Pe),Qe.finished.then(Pe,Pe))),Pe=(u&62914560)===u?Ec-Xe():(u&4194048)===u?O0-Xe():0,Pe=mM(Se,Pe),Pe!==null)){$i=u,e.cancelPendingCommit=Pe(q0.bind(null,e,n,u,a,r,o,p,A,I,Q,oe,Se,null,Y,re)),tr(e,u,p,!Q);return}q0(e,n,u,a,r,o,p,A,I,Q,oe,Se)}function fy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var o=a[r],u=o.getSnapshot;o=o.value;try{if(!ei(u(),o))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tr(e,n,a,r){n=Gi(e,n),n&=~Mc,n&=~zr,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var o=n;0<o;){var u=31-ct(o),p=1<<u;r[u]=-1,o&=~p}a!==0&&xr(e,a,n)}function Rc(){return(It&6)===0?(kl(0),!1):!0}function vd(){if(Mt!==null){if(Xt===0)var e=Mt.return;else e=Mt,_a=Tr=null,Af(e),ps=null,Rl=0,e=Mt;for(;e!==null;)l0(e.alternate,e),e=e.return;Mt=null}}function Cs(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,Py(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$i=0,vd(),Zt=e,Mt=a=ma(e.current,null),Tt=n,Xt=0,ii=null,Ja=!1,Ms=Ia(e,n),pd=!1,Es=ai=Mc=zr=$a=on=0,Yn=Vl=null,md=!1,Ea=Gi(e,n),Po(),a}function F0(e,n){dt=null,ve.H=sc,n===hs||n===qo?(n=qm(),Xt=3):n===hf?(n=qm(),Xt=4):Xt=n===Gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Mt===null&&(on=1,lc(e,mi(n,e.current)))}function H0(){var e=Rn.current;return e===null?!0:(Tt&4194048)===Tt?Ln===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?e===Ln:!1}function G0(){var e=ve.H;return ve.H=sc,e===null?sc:e}function V0(){var e=ve.A;return ve.A=cy,e}function Cc(){on=4,Ja||(Tt&4194048)!==Tt&&Rn.current!==null||(Ms=!0),($a&134217727)===0&&(zr&134217727)===0||Zt===null||tr(Zt,Tt,ai,!1)}function xd(e,n,a){var r=It;It|=2;var o=G0(),u=V0();(Zt!==e||Tt!==n)&&(Tc=null,Cs(e,n)),n=!1;var p=on;e:do try{if(Xt!==0&&Mt!==null){var A=Mt,I=ii;switch(Xt){case 8:vd(),p=6;break e;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var Q=Xt;if(Xt=0,ii=null,ws(e,A,I,Q),a&&Ms){p=0;break e}break;default:Q=Xt,Xt=0,ii=null,ws(e,A,I,Q)}}dy(),p=on;break}catch(oe){F0(e,oe)}while(!0);return n&&e.shellSuspendCounter++,_a=Tr=null,It=r,ve.H=o,ve.A=u,Mt===null&&(Zt=null,Tt=0,Po()),p}function dy(){for(;Mt!==null;)X0(Mt)}function hy(e,n){var a=It;It|=2;var r=G0(),o=V0();Zt!==e||Tt!==n?(Tc=null,bc=Xe()+500,Cs(e,n)):Ms=Ia(e,n);e:do try{if(Xt!==0&&Mt!==null){n=Mt;var u=ii;t:switch(Xt){case 1:Xt=0,ii=null,ws(e,n,u,1);break;case 2:case 9:if(km(u)){Xt=0,ii=null,k0(n);break}n=function(){Xt!==2&&Xt!==9||Zt!==e||(Xt=7),ea(e)},u.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:km(u)?(Xt=0,ii=null,k0(n)):(Xt=0,ii=null,ws(e,n,u,7));break;case 5:var p=null;switch(Mt.tag){case 26:p=Mt.memoizedState;case 5:case 27:var A=Mt;if(p?P_(p):A.stateNode.complete){Xt=0,ii=null;var I=A.sibling;if(I!==null)Mt=I;else{var Q=A.return;Q!==null?(Mt=Q,wc(Q)):Mt=null}break t}}Xt=0,ii=null,ws(e,n,u,5);break;case 6:Xt=0,ii=null,ws(e,n,u,6);break;case 8:vd(),on=6;break e;default:throw Error(s(462))}}py();break}catch(oe){F0(e,oe)}while(!0);return _a=Tr=null,ve.H=r,ve.A=o,It=a,Mt!==null?0:(Zt=null,Tt=0,Po(),on)}function py(){for(;Mt!==null&&!ze();)X0(Mt)}function X0(e){var n=r0(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,n===null?wc(e):Mt=n}function k0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Jg(a,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=Jg(a,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:Af(n);var r=n;r===Mn&&(xt?(Go(r),r.tag===5&&r.stateNode!=null&&(Qt=r.stateNode)):(Go(r),xt=!0));default:l0(a,n),n=Mt=Lm(n,Ea),n=r0(a,n,Ea)}e.memoizedProps=e.pendingProps,n===null?wc(e):Mt=n}function ws(e,n,a,r){_a=Tr=null,Af(n),ps=null,Rl=0;var o=n.return;try{if(ty(e,o,n,a,Tt)){on=1,lc(e,mi(a,e.current)),Mt=null;return}}catch(u){if(o!==null)throw Mt=o,u;on=1,lc(e,mi(a,e.current)),Mt=null;return}n.flags&32768?(xt||r===1?e=!0:Ms||(Tt&536870912)!==0?e=!1:(Ja=e=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),W0(n,e)):wc(n)}function wc(e){var n=e;do{if((n.flags&32768)!==0){W0(n,Ja);return}e=n.return;var a=ry(n.alternate,n,Ea);if(a!==null){Mt=a;return}if(n=n.sibling,n!==null){Mt=n;return}Mt=n=e}while(n!==null);on===0&&(on=5)}function W0(e,n){do{var a=sy(e.alternate,e);if(a!==null){a.flags&=32767,Mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Mt=e;return}Mt=e=a}while(e!==null);on=6,Mt=null}function q0(e,n,a,r,o,u,p,A,I,Q,oe,Se){e.cancelPendingCommit=null;do Nc();while(an!==0);if((It&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Zt&&(Mt=Zt=null,Tt=0),Br=n,Ni=e,$i=a,_d=o,P0=r,my(e,n,a,p,A,I,Se)}}function my(e,n,a,r,o,u,p){var A=n.lanes|n.childLanes;if(gd=A,A|=$u,Eo(e,a,A,r,o,u),Ts=null,(a&335544064)===a?(As=XS(e),r=10262):(As=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yy(Ne,function(){return Ed(),null})):(e.callbackNode=null,e.callbackPriority=0),mc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=ve.T,ve.T=null,o=Ce.p,Ce.p=2,u=It,It|=4;try{ly(e,n,a)}finally{It=u,Ce.p=o,ve.T=r}}an=1,mc?bs=Gy(p,e.containerInfo,As,Sd,yd,_y,Md,Ed,gy):(Sd(),yd(),Md())}function gy(e){if(an!==0){var n=Ni.onRecoverableError;n(e,{componentStack:null})}}function _y(){an===3&&(an=0,C0(Br,Ni),an=4)}function Sd(){if(an===1){an=0;var e=Ni,n=Br,a=$i,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=ve.T,ve.T=null;var o=Ce.p;Ce.p=2;var u=It;It|=4;try{Fl=vc=!1,A0(n,e,a),a=Pd;var p=Em(e.containerInfo),A=a.focusedElem,I=a.selectionRange;if(p!==A&&A&&A.ownerDocument&&Mm(A.ownerDocument.documentElement,A)){if(I!==null&&ju(A)){var Q=I.start,oe=I.end;if(oe===void 0&&(oe=Q),"selectionStart"in A)A.selectionStart=Q,A.selectionEnd=Math.min(oe,A.value.length);else{var Se=A.ownerDocument||document,Y=Se&&Se.defaultView||window;if(Y.getSelection){var re=Y.getSelection(),Pe=A.textContent.length,Qe=Math.min(I.start,Pe),ht=I.end===void 0?Qe:Math.min(I.end,Pe);!re.extend&&Qe>ht&&(p=ht,ht=Qe,Qe=p);var K=ym(A,Qe),H=ym(A,ht);if(K&&H&&(re.rangeCount!==1||re.anchorNode!==K.node||re.anchorOffset!==K.offset||re.focusNode!==H.node||re.focusOffset!==H.offset)){var te=Se.createRange();te.setStart(K.node,K.offset),re.removeAllRanges(),Qe>ht?(re.addRange(te),re.extend(H.node,H.offset)):(te.setEnd(H.node,H.offset),re.addRange(te))}}}}for(Se=[],re=A;re=re.parentNode;)re.nodeType===1&&Se.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Se.length;A++){var xe=Se[A];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}zs=!!Od,Pd=Od=null}finally{It=u,Ce.p=o,ve.T=r}}e.current=n,an=2}}function yd(){if(an===2){an=0;var e=Ni,n=Br,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=ve.T,ve.T=null;var r=Ce.p;Ce.p=2;var o=It;It|=4;try{S0(e,n.alternate,n)}finally{It=o,Ce.p=r,ve.T=a}}an=3}}function Md(){if(an===4||an===3){an=0;var e=bs;bs=null,Ie();var n=Ni,a=Br,r=$i,o=P0,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?an=5:(an=0,Br=Ni=null,Y0(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(er=null),dl(r),a=a.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Je,a,void 0,(a.current.flags&128)===128)}catch{}if(o!==null){a=ve.T,u=Ce.p,Ce.p=2,ve.T=null;try{for(var p=n.onRecoverableError,A=0;A<o.length;A++){var I=o[A];p(I.value,{componentStack:I.stack})}}finally{ve.T=a,Ce.p=u}}if(o=Ts,p=As,As=null,o!==null&&(Ts=null,p===null&&(p=[]),e!==null))for(I=0;I<o.length;I++)a=(0,o[I])(p),a!==void 0&&e.finished.finally(a);($i&3)!==0&&Nc(),ea(n),u=n.pendingLanes,(r&261930)!==0&&(u&42)!==0?n===Ac?Xl++:(Xl=0,Ac=n):(Xl=0,Ac=null),kl(0)}}function Y0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,bl(n)))}function Nc(){return bs!==null&&(bs.skipTransition(),bs=null),Sd(),yd(),Md(),Ed()}function Ed(){if(an!==5)return!1;var e=Ni,n=gd;gd=0;var a=dl($i),r=ve.T,o=Ce.p;try{Ce.p=32>a?32:a,ve.T=null,a=_d,_d=null;var u=Ni,p=$i;if(an=0,Br=Ni=null,$i=0,(It&6)!==0)throw Error(s(331));var A=It;if(It|=4,U0(u.current),w0(u,u.current,p,a),It=A,kl(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Je,u)}catch{}return!0}finally{Ce.p=o,ve.T=r,Y0(e,n)}}function j0(e,n,a){n=mi(a,n),n=Hf(e.stateNode,n,2),e=qa(e,n,2),e!==null&&(Vi(e,2),ea(e))}function kt(e,n,a){if(e.tag===3)j0(e,e,a);else for(;n!==null;){if(n.tag===3){j0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){e=mi(a,e),a=kg(2),r=qa(n,a,2),r!==null&&(Wg(a,r,n,e),Vi(r,2),ea(r));break}}n=n.return}}function bd(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new uy;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(a)||(pd=!0,o.add(a),e=vy.bind(null,e,n,a),n.then(e,e))}function vy(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Zt===e&&(Tt&a)===a&&((on===4||on===3&&(Tt&62914560)===Tt&&300>Xe()-Ec)&&(It&2)===0?Cs(e,0):Mc|=a,Es===Tt&&(Es=0)),ea(e)}function Z0(e,n){n===0&&(n=ol()),e=Mr(e,n),e!==null&&(Vi(e,n),ea(e))}function xy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Z0(e,a)}function Sy(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Z0(e,a)}function yy(e,n){return De(e,n)}var Ns=null,Ds=null,Td=!1,Dc=!1,Ad=!1,nr=0;function ea(e){e!==Ds&&e.next===null&&(Ds===null?Ns=Ds=e:Ds=Ds.next=e),Dc=!0,Td||(Td=!0,Ey())}function kl(e,n){if(!Ad&&Dc){Ad=!0;do for(var a=!1,r=Ns;r!==null;){if(e!==0){var o=r.pendingLanes;if(o===0)var u=0;else{var p=r.suspendedLanes,A=r.pingedLanes;u=(1<<31-ct(42|e)+1)-1,u&=o&~(p&~A),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,$0(r,u))}else u=Tt,u=vr(r,r===Zt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ia(r,u)||(a=!0,$0(r,u));r=r.next}while(a);Ad=!1}}function My(){K0()}function K0(){Dc=Td=!1;var e=0;nr!==0&&Oy()&&(e=nr);for(var n=Xe(),a=null,r=Ns;r!==null;){var o=r.next,u=Q0(r,n);u===0?(r.next=null,a===null?Ns=o:a.next=o,o===null&&(Ds=a)):(a=r,(e!==0||(u&3)!==0)&&(Dc=!0)),r=o}an!==0&&an!==5||kl(e),nr!==0&&(nr=0)}function Q0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var p=31-ct(u),A=1<<p,I=o[p];I===-1?((A&a)===0||(A&r)!==0)&&(o[p]=ll(A,n)):I<=n&&(e.expiredLanes|=A),u&=~A}if(n=Zt,a=Tt,a=vr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&$e(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ia(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&$e(r),dl(a)){case 2:case 8:a=G;break;case 32:a=Ne;break;case 268435456:a=Le;break;default:a=Ne}return r=J0.bind(null,e),a=De(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&$e(r),e.callbackPriority=2,e.callbackNode=null,2}function J0(e,n){if(an!==0&&an!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Nc()&&e.callbackNode!==a)return null;var r=Tt;return r=vr(e,e===Zt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(z0(e,r,n),Q0(e,Xe()),e.callbackNode!=null&&e.callbackNode===a?J0.bind(null,e):null)}function $0(e,n){if(Nc())return null;z0(e,n,!0)}function Ey(){Iy(function(){(It&6)!==0?De(ot,My):K0()})}function Rd(){if(nr===0){var e=Cr;e===0&&(e=Jr,Jr<<=1,(Jr&261888)===0&&(Jr=256)),nr=e}return nr}function e_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ro(e)}function by(e,n,a,r,o){if(n==="submit"&&a&&a.stateNode===o){var u=e_((o[F]||null).action),p=r.submitter;p&&(n=(n=p[F]||null)?e_(n.formAction):p.getAttribute("formAction"),n!==null&&(u=n,p=null));var A=new Do("action","action",null,r,o);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nr!==0){var I=new FormData(o,p);Pf(a,{pending:!0,data:I,method:o.method,action:u},null,I)}}else typeof u=="function"&&(A.preventDefault(),I=new FormData(o,p),Pf(a,{pending:!0,data:I,method:o.method,action:u},u,I))},currentTarget:o}]})}}for(var Cd=0;Cd<Ju.length;Cd++){var wd=Ju[Cd],Ty=wd.toLowerCase(),Ay=wd[0].toUpperCase()+wd.slice(1);Ai(Ty,"on"+Ay)}Ai(Am,"onAnimationEnd"),Ai(Rm,"onAnimationIteration"),Ai(Cm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(PS,"onTransitionRun"),Ai(IS,"onTransitionStart"),Ai(zS,"onTransitionCancel"),Ai(wm,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl));function t_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],o=r.event;r=r.listeners;e:{var u=void 0;if(n)for(var p=r.length-1;0<=p;p--){var A=r[p],I=A.instance,Q=A.currentTarget;if(A=A.listener,I!==u&&o.isPropagationStopped())break e;u=A,o.currentTarget=Q;try{u(o)}catch(oe){Oo(oe)}o.currentTarget=null,u=I}else for(p=0;p<r.length;p++){if(A=r[p],I=A.instance,Q=A.currentTarget,A=A.listener,I!==u&&o.isPropagationStopped())break e;u=A,o.currentTarget=Q;try{u(o)}catch(oe){Oo(oe)}o.currentTarget=null,u=I}}}}function Et(e,n){var a=n[ie];a===void 0&&(a=n[ie]=new Set);var r=e+"__bubble";a.has(r)||(n_(n,e,2,!1),a.add(r))}function Nd(e,n,a){var r=0;n&&(r|=4),n_(a,e,r,n)}var Uc="_reactListening"+Math.random().toString(36).slice(2);function Dd(e){if(!e[Uc]){e[Uc]=!0,Ft.forEach(function(a){a!=="selectionchange"&&(Ry.has(a)||Nd(a,!1,e),Nd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Uc]||(n[Uc]=!0,Nd("selectionchange",!1,n))}}function n_(e,n,a,r){switch(W_(n)){case 2:var o=xM;break;case 8:o=SM;break;default:o=Qd}a=o.bind(null,n,a,e),o=void 0,!Bu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,a,{capture:!0,passive:o}):e.addEventListener(n,a,!0):o!==void 0?e.addEventListener(n,a,{passive:o}):e.addEventListener(n,a,!1)}function Ud(e,n,a,r,o){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var A=r.stateNode.containerInfo;if(A===o)break;if(p===4)for(p=r.return;p!==null;){var I=p.tag;if((I===3||I===4)&&p.stateNode.containerInfo===o)return;p=p.return}for(;A!==null;){if(p=rt(A),p===null)return;if(I=p.tag,I===5||I===6||I===26||I===27){r=u=p;continue e}A=A.parentNode}}r=r.return}nm(function(){var Q=u,oe=Iu(a),Se=[];e:{var Y=Nm.get(e);if(Y!==void 0){var re=Do,Pe=e;switch(e){case"keypress":if(wo(a)===0)break e;case"keydown":case"keyup":re=fS;break;case"focusin":Pe="focus",re=Vu;break;case"focusout":Pe="blur",re=Vu;break;case"beforeblur":case"afterblur":re=Vu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=gS;break;case Am:case Rm:case Cm:re=nS;break;case wm:re=vS;break;case"scroll":case"scrollend":re=Qx;break;case"wheel":re=SS;break;case"copy":case"cut":case"paste":re=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=lm;break;case"submit":re=pS;break;case"toggle":case"beforetoggle":re=MS}var Qe=(n&4)!==0,ht=!Qe&&(e==="scroll"||e==="scrollend"),K=Qe?Y!==null?Y+"Capture":null:Y;Qe=[];for(var H=Q,te;H!==null;){var xe=H;if(te=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||te===null||K===null||(xe=hl(H,K),xe!=null&&Qe.push(ql(H,xe,te))),ht)break;H=H.return}0<Qe.length&&(Y=new re(Y,Pe,null,a,oe),Se.push({event:Y,listeners:Qe}))}}if((n&7)===0){e:{if(re=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",re&&a!==Pu&&(Pe=a.relatedTarget||a.fromElement)&&(rt(Pe)||Pe[ue]))break e;(Y||re)&&(Pe=oe.window===oe?oe:(re=oe.ownerDocument)?re.defaultView||re.parentWindow:window,Y?(re=a.relatedTarget||a.toElement,Y=Q,re=re?rt(re):null,re!==null&&(ht=f(re),Qe=re.tag,re!==ht||Qe!==5&&Qe!==27&&Qe!==6)&&(re=null)):(Y=null,re=Q),Y!==re&&(Qe=rm,xe="onMouseLeave",K="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=lm,xe="onPointerLeave",K="onPointerEnter",H="pointer"),ht=Y==null?Pe:qe(Y),te=re==null?Pe:qe(re),Pe=new Qe(xe,H+"leave",Y,a,oe),Pe.target=ht,Pe.relatedTarget=te,xe=null,rt(oe)===Q&&(Qe=new Qe(K,H+"enter",re,a,oe),Qe.target=te,Qe.relatedTarget=ht,xe=Qe),ht=xe,Qe=Y&&re?L(Y,re,Cy):null,Y!==null&&i_(Se,Pe,Y,Qe,!1),re!==null&&ht!==null&&i_(Se,ht,re,Qe,!0)))}e:{if(Y=Q?qe(Q):window,re=Y.nodeName&&Y.nodeName.toLowerCase(),re==="select"||re==="input"&&Y.type==="file")var Ye=mm;else if(hm(Y))if(gm)Ye=US;else{Ye=NS;var At=wS}else re=Y.nodeName,!re||re.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?Q&&Ou(Q.elementType)&&(Ye=mm):Ye=DS;if(Ye&&(Ye=Ye(e,Q))){pm(Se,Ye,a,oe);break e}At&&At(e,Y,Q)}switch(At=Q?qe(Q):window,e){case"focusin":(hm(At)||At.contentEditable==="true")&&(rs=At,Zu=Q,yl=null);break;case"focusout":yl=Zu=rs=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,bm(Se,a,oe);break;case"selectionchange":if(OS)break;case"keydown":case"keyup":bm(Se,a,oe)}var et;if(ku)e:{switch(e){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else as?fm(e,a)&&(at="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(om&&a.locale!=="ko"&&(as||at!=="onCompositionStart"?at==="onCompositionEnd"&&as&&(et=im()):(za=oe,Fu="value"in za?za.value:za.textContent,as=!0)),At=Lc(Q,at),0<At.length&&(at=new sm(at,e,null,a,oe),Se.push({event:at,listeners:At}),et?at.data=et:(et=dm(a),et!==null&&(at.data=et)))),(et=bS?TS(e,a):AS(e,a))&&(at=Lc(Q,"onBeforeInput"),0<at.length&&(At=new sm("onBeforeInput","beforeinput",null,a,oe),Se.push({event:At,listeners:at}),At.data=et)),by(Se,e,Q,a,oe)}t_(Se,n)})}function ql(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Lc(e,n){for(var a=n+"Capture",r=[];e!==null;){var o=e,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=hl(e,a),o!=null&&r.unshift(ql(e,o,u)),o=hl(e,n),o!=null&&r.push(ql(e,o,u))),e.tag===3)return r;e=e.return}return[]}function Cy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function i_(e,n,a,r,o){for(var u=n._reactName,p=[];a!==null&&a!==r;){var A=a,I=A.alternate,Q=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||Q===null||(I=Q,o?(Q=hl(a,u),Q!=null&&p.unshift(ql(a,Q,I))):o||(Q=hl(a,u),Q!=null&&p.push(ql(a,Q,I)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var wy=/\r\n?/g,Ny=/\u0000|\uFFFD/g;function a_(e){return(typeof e=="string"?e:""+e).replace(wy,`
`).replace(Ny,"")}function r_(e,n){return n=a_(n),a_(e)===n}function Wt(e,n,a,r,o,u){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ts(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ts(e,""+r);else return;break;case"className":$n(e,"class",r);break;case"tabIndex":$n(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,a,r);break;case"style":em(e,r,u);return;case"data":if(n!=="object"){$n(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Ro(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Wt(e,n,"name",o.name,o,null),Wt(e,n,"formEncType",o.formEncType,o,null),Wt(e,n,"formMethod",o.formMethod,o,null),Wt(e,n,"formTarget",o.formTarget,o,null)):(Wt(e,n,"encType",o.encType,o,null),Wt(e,n,"method",o.method,o,null),Wt(e,n,"target",o.target,o,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Ro(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ki);return;case"onScroll":r!=null&&Et("scroll",e);return;case"onScrollEnd":r!=null&&Et("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(o.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Ro(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Et("beforetoggle",e),Et("toggle",e),Kt(e,"popover",r);break;case"xlinkActuate":bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":bt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":bt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":bt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":bt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Kt(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Zx.get(a)||a,Kt(e,a,r);else return}vt=!0}function Ld(e,n,a,r,o,u){switch(a){case"style":em(e,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(o.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")ts(e,r);else if(typeof r=="number"||typeof r=="bigint")ts(e,""+r);else return;break;case"onScroll":r!=null&&Et("scroll",e);return;case"onScrollEnd":r!=null&&Et("scrollend",e);return;case"onClick":r!=null&&(e.onclick=ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!vn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),u=a.slice(2,o?a.length-7:void 0),n=e[F]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(u,n,o),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(u,r,o);break e}vt=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):Kt(e,a,r)}return}vt=!0}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",e),Et("load",e);var r=!1,o=!1,u;for(u in a)if(a.hasOwnProperty(u)){var p=a[u];if(p!=null)switch(u){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(e,n,u,p,a,null)}}o&&Wt(e,n,"srcSet",a.srcSet,a,null),r&&Wt(e,n,"src",a.src,a,null);return;case"input":Et("invalid",e);var A=u=p=o=null,I=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var oe=a[r];if(oe!=null)switch(r){case"name":o=oe;break;case"type":p=oe;break;case"checked":I=oe;break;case"defaultChecked":Q=oe;break;case"value":u=oe;break;case"defaultValue":A=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:Wt(e,n,r,oe,a,null)}}Kp(e,u,A,I,Q,p,o,!1);return;case"select":Et("invalid",e),r=p=u=null;for(o in a)if(a.hasOwnProperty(o)&&(A=a[o],A!=null))switch(o){case"value":u=A;break;case"defaultValue":p=A;break;case"multiple":r=A;default:Wt(e,n,o,A,a,null)}n=u,a=p,e.multiple=!!r,n!=null?es(e,!!r,n,!1):a!=null&&es(e,!!r,a,!0);return;case"textarea":Et("invalid",e),u=o=r=null;for(p in a)if(a.hasOwnProperty(p)&&(A=a[p],A!=null))switch(p){case"value":r=A;break;case"defaultValue":o=A;break;case"children":u=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Wt(e,n,p,A,a,null)}Jp(e,r,o,u);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Wt(e,n,I,r,a,null)}return;case"dialog":Et("beforetoggle",e),Et("toggle",e),Et("cancel",e),Et("close",e);break;case"iframe":case"object":Et("load",e);break;case"video":case"audio":for(r=0;r<Wl.length;r++)Et(Wl[r],e);break;case"image":Et("error",e),Et("load",e);break;case"details":Et("toggle",e);break;case"embed":case"source":case"link":Et("error",e),Et("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(e,n,Q,r,a,null)}return;default:if(Ou(n)){for(oe in a)a.hasOwnProperty(oe)&&(r=a[oe],r!==void 0&&Ld(e,n,oe,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Wt(e,n,A,r,a,null))}var Dy={};function Uy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,p=null,A=null,I=null,Q=null,oe=null;for(re in a){var Se=a[re];if(a.hasOwnProperty(re)&&Se!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":I=Se;default:r.hasOwnProperty(re)||Wt(e,n,re,null,r,Se)}}for(var Y in r){var re=r[Y];if(Se=a[Y],r.hasOwnProperty(Y)&&(re!=null||Se!=null))switch(Y){case"type":re!==Se&&(vt=!0),u=re;break;case"name":re!==Se&&(vt=!0),o=re;break;case"checked":re!==Se&&(vt=!0),Q=re;break;case"defaultChecked":re!==Se&&(vt=!0),oe=re;break;case"value":re!==Se&&(vt=!0),p=re;break;case"defaultValue":re!==Se&&(vt=!0),A=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:re!==Se&&Wt(e,n,Y,re,r,Se)}}Uu(e,p,A,I,Q,oe,u,o);return;case"select":re=p=A=Y=null;for(u in a)if(I=a[u],a.hasOwnProperty(u)&&I!=null)switch(u){case"value":break;case"multiple":re=I;default:r.hasOwnProperty(u)||Wt(e,n,u,null,r,I)}for(o in r)if(u=r[o],I=a[o],r.hasOwnProperty(o)&&(u!=null||I!=null))switch(o){case"value":u!==I&&(vt=!0),Y=u;break;case"defaultValue":u!==I&&(vt=!0),A=u;break;case"multiple":u!==I&&(vt=!0),p=u;default:u!==I&&Wt(e,n,o,u,r,I)}n=A,a=p,r=re,Y!=null?es(e,!!a,Y,!1):!!r!=!!a&&(n!=null?es(e,!!a,n,!0):es(e,!!a,a?[]:"",!1));return;case"textarea":re=Y=null;for(A in a)if(o=a[A],a.hasOwnProperty(A)&&o!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Wt(e,n,A,null,r,o)}for(p in r)if(o=r[p],u=a[p],r.hasOwnProperty(p)&&(o!=null||u!=null))switch(p){case"value":o!==u&&(vt=!0),Y=o;break;case"defaultValue":o!==u&&(vt=!0),re=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==u&&Wt(e,n,p,o,r,u)}Qp(e,Y,re);return;case"option":for(var Pe in a)if(Y=a[Pe],a.hasOwnProperty(Pe)&&Y!=null&&!r.hasOwnProperty(Pe))switch(Pe){case"selected":e.selected=!1;break;default:Wt(e,n,Pe,null,r,Y)}for(I in r)if(Y=r[I],re=a[I],r.hasOwnProperty(I)&&Y!==re&&(Y!=null||re!=null))switch(I){case"selected":Y!==re&&(vt=!0),e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Wt(e,n,I,Y,r,re)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)Y=a[Qe],a.hasOwnProperty(Qe)&&Y!=null&&!r.hasOwnProperty(Qe)&&Wt(e,n,Qe,null,r,Y);for(Q in r)if(Y=r[Q],re=a[Q],r.hasOwnProperty(Q)&&Y!==re&&(Y!=null||re!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:Wt(e,n,Q,Y,r,re)}return;default:if(Ou(n)){for(var ht in a)Y=a[ht],a.hasOwnProperty(ht)&&Y!==void 0&&!r.hasOwnProperty(ht)&&Ld(e,n,ht,void 0,r,Y);for(oe in r)Y=r[oe],re=a[oe],!r.hasOwnProperty(oe)||Y===re||Y===void 0&&re===void 0||Ld(e,n,oe,Y,r,re);return}}for(var K in a)Y=a[K],a.hasOwnProperty(K)&&Y!=null&&!r.hasOwnProperty(K)&&Wt(e,n,K,null,r,Y);for(Se in r)Y=r[Se],re=a[Se],!r.hasOwnProperty(Se)||Y===re||Y==null&&re==null||Wt(e,n,Se,Y,r,re)}function s_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ly(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var o=a[r],u=o.transferSize,p=o.initiatorType,A=o.duration;if(u&&A&&s_(p)){for(p=0,A=o.responseEnd,r+=1;r<a.length;r++){var I=a[r],Q=I.startTime;if(Q>A)break;var oe=I.transferSize,Se=I.initiatorType;oe&&s_(Se)&&(I=I.responseEnd,p+=oe*(I<A?1:(A-Q)/(I-Q)))}if(--r,n+=8*(u+p)/(o.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Od=null,Pd=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function l_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function c_(e,n,a,r){return a=Yl(a).createElement(e),a[T]=r,a[F]=n,Nn(a,e,n),_t(a),a}function Id(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zd=null;function Oy(){var e=window.event;return e&&e.type==="popstate"?e===zd?!1:(zd=e,!0):(zd=null,!1)}var Bd=typeof setTimeout=="function"?setTimeout:void 0,Py=typeof clearTimeout=="function"?clearTimeout:void 0,u_=typeof Promise=="function"?Promise:void 0,f_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Bd,Iy=typeof queueMicrotask=="function"?queueMicrotask:typeof u_<"u"?function(e){return u_.resolve(null).then(e).catch(zy)}:Bd;function zy(e){setTimeout(function(){throw e})}function ir(e){return e==="head"}function d_(e,n){var a=n,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(o),Bs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")qd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,qd(a);for(var u=a.firstChild;u;){var p=u.nextSibling,A=u.nodeName;u[Oe]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=p}}else a==="body"&&qd(e.ownerDocument.body);a=o}while(a);Bs(n)}function h_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function p_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var o=r=0;o<n.length;o++){var u=n[o];0<u.width&&0<u.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function m_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function By(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Fd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return By(n,a,e)}function Fy(e){return e.documentElement.clientHeight}function Hy(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Gy(e,n,a,r,o,u,p,A,I){var Q=n.nodeType===9?n:n.ownerDocument;try{var oe=Q.startViewTransition({update:function(){var Y=Q.defaultView,re=Y.navigation&&Y.navigation.transition,Pe=Q.fonts.status;r();var Qe=[];if(Pe==="loaded"&&(Fy(Q),Q.fonts.status==="loading"&&Qe.push(Q.fonts.ready)),Pe=Qe.length,e!==null)for(var ht=e.suspenseyImages,K=0,H=0;H<ht.length;H++){var te=ht[H];if(!te.complete){var xe=te.getBoundingClientRect();if(0<xe.bottom&&0<xe.right&&xe.top<Y.innerHeight&&xe.left<Y.innerWidth){if(K+=I_(te),K>Ic){Qe.length=Pe;break}te=new Promise(Hy.bind(te)),Qe.push(te)}}}if(0<Qe.length)return Y=Promise.race([Promise.all(Qe),new Promise(function(Ye){return setTimeout(Ye,500)})]).then(o,o),(re?Promise.allSettled([re.finished,Y]):Y).then(u,u);if(o(),re)return re.finished.then(u,u);u()},types:a});Q.__reactViewTransition=oe;var Se=[];return oe.ready.then(function(){for(var Y=Q.documentElement.getAnimations({subtree:!0}),re=0;re<Y.length;re++){var Pe=Y[re],Qe=Pe.effect,ht=Qe.pseudoElement;if(ht!=null&&ht.startsWith("::view-transition")){Se.push(Pe),Pe=Qe.getKeyframes();for(var K=ht=void 0,H=!0,te=0;te<Pe.length;te++){var xe=Pe[te],Ye=xe.width;if(ht===void 0)ht=Ye;else if(ht!==Ye){H=!1;break}if(Ye=xe.height,K===void 0)K=Ye;else if(K!==Ye){H=!1;break}delete xe.width,delete xe.height,xe.transform==="none"&&delete xe.transform}H&&ht!==void 0&&K!==void 0&&(Qe.setKeyframes(Pe),H=getComputedStyle(Qe.target,Qe.pseudoElement),H.width!==ht||H.height!==K)&&(H=Pe[0],H.width=ht,H.height=K,H=Pe[Pe.length-1],H.width=ht,H.height=K,Qe.setKeyframes(Pe))}}p()},function(Y){Q.__reactViewTransition===oe&&(Q.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&I(Y)}finally{r(),o(),p()}}),oe.finished.finally(function(){for(var Y=0;Y<Se.length;Y++)Se[Y].cancel();Q.__reactViewTransition===oe&&(Q.__reactViewTransition=null),A()}),oe}catch{return r(),o(),p(),null}}function Fr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Fr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Fr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],o=0;o<a.length;o++){var u=a[o].effect;u!==null&&u.target===e&&u.pseudoElement===n&&r.push(a[o])}return r},Fr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function g_(e){return{name:e,group:new Fr("group",e),imagePair:new Fr("image-pair",e),old:new Fr("old",e),new:new Fr("new",e)}}function si(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}si.prototype.addEventListener=function(e,n,a){var r=null,o=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(v_(u,e,n,a)===-1){var p=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(I){p.removeEventListener(e,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(o=p.removeEventListener.bind(p,e,n,a),r.addEventListener("abort",o,{once:!0}),o=r.removeEventListener.bind(r,"abort",o)),r=Us(a),u.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:o}),_(this._fragmentFiber.child,!1,Vy,e,A,r)}this._eventListeners=u}};function Vy(e,n,a,r){return y(e).addEventListener(n,a,r),!1}si.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=v_(r,e,n,a),n!==-1)){var o=r[n];a=o.attachedListener;var u=o.cleanup;o=Us(o.optionsOrUseCapture),_(this._fragmentFiber.child,!1,Xy,e,a,o),r.splice(n,1),u!==null&&u()}};function Xy(e,n,a,r){return y(e).removeEventListener(n,a,r),!1}function Us(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function __(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function v_(e,n,a,r){if(e.length===0)return-1;r=__(r);for(var o=0;o<e.length;o++){var u=e[o];if(u.type===n&&u.listener===a&&__(u.optionsOrUseCapture)===r)return o}return-1}si.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var o=0;o<a.length;o++){var u=a[o];r.addEventListener(u.type,u.attachedListener,Us(u.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(o=0;o<a.length;o++)u=a[o],r.removeEventListener(u.type,u.attachedListener,Us(u.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},si.prototype.focus=function(e){_(this._fragmentFiber.child,!0,x_,e,void 0,void 0)};function x_(e,n){return e.tag===6?!1:(e=y(e),tM(e,n))}si.prototype.focusLast=function(e){var n=[];_(this._fragmentFiber.child,!0,Hd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!x_(n[a],e);a--);};function Hd(e,n){return n.push(e),!1}si.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=y(e),e=Yl(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,ky,e,void 0,void 0))};function ky(e,n){return e.tag===6?!1:(e=y(e),e===n||e.contains(n)?(n.blur(),!0):!1)}si.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,Wy,e,void 0,void 0)};function Wy(e,n){return e.tag===6||(e=y(e),n.observe(e)),!1}si.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),_(this._fragmentFiber.child,!1,qy,e,void 0,void 0);for(var a=n=0;a<Di.length;a++){var r=Di[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Di[n++]=r}Di.length=n}};function qy(e,n){return e.tag===6||(e=y(e),n.unobserve(e)),!1}var Di=[],Gd=!1;function Yy(e,n,a){Di.push({fragmentInstance:e,observer:n,instance:a}),Gd||(Gd=!0,nM(function(){Gd=!1;var r=Di;Di=[];for(var o=0;o<r.length;o++){var u=r[o];u.observer.unobserve(u.instance)}}))}si.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,jy,e,void 0,void 0),e};function jy(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=y(e),n.push.apply(n,e.getClientRects());return!1}si.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:y(n).getRootNode(e)},si.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,Hd,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,E(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var o=r=a.compareDocumentPosition(e);return a===e?o=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?o=Node.DOCUMENT_POSITION_PRECEDING:(e=y(a).compareDocumentPosition(e),o=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),o|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),o=y(a[a.length-1]);var u=E(this._fragmentFiber)?n.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY;var p=n.compareDocumentPosition(e),A=o.compareDocumentPosition(e),I=p&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&u&&p&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||u&&o===e||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!u&&o===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:p,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Zy(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Zy(e,n,a,r,o){var u=rt(o);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break e}u=u.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=o.ownerDocument,o===u||o===u.documentElement||o===u.body;e:{for(u=n,n=v(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=L(a,u,U),n===null?n=!1:(_(n,!0,V,u,a),u=S,S=null,n=u!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===r)&&(n=L(r,u,U),n===null?n=!1:(_(n,!0,C,u,r),u=S,O=S=null,n=u!==null)),n):!1}function S_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}si.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];_(this._fragmentFiber.child,!1,Hd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=y(r),S_(e,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var o=n[r];o.tag===6?(o=y(o),S_(o,a)):y(o).scrollIntoView(e),r+=a?-1:1}};function Ky(e,n){return e=y(e),y_(e,n),!1}function y_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function M_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r];e.addEventListener(o.type,o.attachedListener,Us(o.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var p=0,A=0;A<Di.length;A++){var I=Di[A];(I.fragmentInstance!==n||I.observer!==u||I.instance!==e)&&(Di[p++]=I)}Di.length=p,u.observe(e)}),y_(e,n))}function Qy(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r];e.removeEventListener(o.type,o.attachedListener,Us(o.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?Yy(n,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Vd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vd(a),Ke(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Jy(e,n,a,r){for(;e.nodeType===1;){var o=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Oe])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function $y(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Si(e.nextSibling),e===null))return null;return e}function E_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Si(e.nextSibling),e===null))return null;return e}function Xd(e){return e.data==="$?"||e.data==="$~"}function kd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function eM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Wd=null;function b_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Si(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function T_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function tM(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function nM(e){f_(function(){f_(function(n){return e(n)})})}function A_(e,n,a){switch(n=Yl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function R_(e,n,a){for(var r in a){var o=a[r];a.hasOwnProperty(r)&&o!=null&&Wt(e,n,r,null,Dy,o)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ki&&(e.onclick=null),Ke(e)}function qd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ke(e)}var yi=new Map,C_=new Set;function jl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var ba=Ce.d;Ce.d={f:iM,r:aM,D:rM,C:sM,L:lM,m:oM,X:uM,S:cM,M:fM};function iM(){var e=ba.f(),n=Rc();return e||n}function aM(e){var n=ut(e);n!==null&&n.tag===5&&n.type==="form"?Ng(n):ba.r(e)}var Ls=typeof document>"u"?null:document;function w_(e,n,a){var r=Ls;if(r&&typeof n=="string"&&n){var o=hi(n);o='link[rel="'+e+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),C_.has(o)||(C_.add(o),e={rel:e,crossOrigin:a,href:n},r.querySelector(o)===null&&(n=r.createElement("link"),Nn(n,"link",e),_t(n),r.head.appendChild(n)))}}function rM(e){ba.D(e),w_("dns-prefetch",e,null)}function sM(e,n){ba.C(e,n),w_("preconnect",e,n)}function lM(e,n,a){ba.L(e,n,a);var r=Ls;if(r&&e&&n){var o='link[rel="preload"][as="'+hi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+hi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+hi(a.imageSizes)+'"]')):o+='[href="'+hi(e)+'"]';var u=o;switch(n){case"style":u=Os(e);break;case"script":u=Ps(e)}if(!(yi.has(u)||(e=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),yi.set(u,e),r.querySelector(o)!==null||n==="style"&&r.querySelector(Zl(u))||n==="script"&&r.querySelector(Kl(u))))){var p=r.createElement("link");Nn(p,"link",e),n==="style"&&(p[Ze]=!0,p.onload=p.onerror=function(){Yt(p)}),_t(p),r.head.appendChild(p)}}}function oM(e,n){ba.m(e,n);var a=Ls;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",o='link[rel="modulepreload"][as="'+hi(r)+'"][href="'+hi(e)+'"]',u=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ps(e)}if(!yi.has(u)&&(e=z({rel:"modulepreload",href:e},n),yi.set(u,e),a.querySelector(o)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Kl(u)))return}r=a.createElement("link"),Nn(r,"link",e),_t(r),a.head.appendChild(r)}}}function cM(e,n,a){ba.S(e,n,a);var r=Ls;if(r&&e){var o=yt(r).hoistableStyles,u=Os(e);n=n||"default";var p=o.get(u);if(!p){var A={loading:0,preload:null};if(p=r.querySelector(Zl(u)))A.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":n},a),(a=yi.get(u))&&Yd(e,a);var I=p=r.createElement("link");_t(I),Nn(I,"link",e),I._p=new Promise(function(Q,oe){I.onload=Q,I.onerror=oe}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Oc(p,n,r)}p={type:"stylesheet",instance:p,count:1,state:A},o.set(u,p)}}}function uM(e,n){ba.X(e,n);var a=Ls;if(a&&e){var r=yt(a).hoistableScripts,o=Ps(e),u=r.get(o);u||(u=a.querySelector(Kl(o)),u||(e=z({src:e,async:!0},n),(n=yi.get(o))&&jd(e,n),u=a.createElement("script"),_t(u),Nn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(o,u))}}function fM(e,n){ba.M(e,n);var a=Ls;if(a&&e){var r=yt(a).hoistableScripts,o=Ps(e),u=r.get(o);u||(u=a.querySelector(Kl(o)),u||(e=z({src:e,async:!0,type:"module"},n),(n=yi.get(o))&&jd(e,n),u=a.createElement("script"),_t(u),Nn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(o,u))}}function N_(e,n,a,r){var o=(o=Lt.current)?jl(o):null;if(!o)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Os(a.href),n=yt(o).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Os(a.href);var u=yt(o).hoistableStyles,p=u.get(e);if(p||(o=o.ownerDocument||o,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,p),(u=o.querySelector(Zl(e)))?u._p||(p.instance=u,p.state.loading=5):(u=yi.get(e),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(e,u)),dM(o,e,u,p.state))),n&&r===null)throw Error(s(528,""));return p}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ps(a),n=yt(o).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Os(e){return'href="'+hi(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function D_(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function dM(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ze]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Ze]=!0,n.onload=n.onerror=Yt.bind(null,n),Nn(n,"link",a),_t(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Ps(e){return'[src="'+hi(e)+'"]'}function Kl(e){return"script[async]"+e}function U_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+hi(a.href)+'"]');if(r)return n.instance=r,_t(r),r;var o=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),_t(r),Nn(r,"style",o),Oc(r,a.precedence,e),n.instance=r;case"stylesheet":o=Os(a.href);var u=e.querySelector(Zl(o));if(u)return n.state.loading|=4,n.instance=u,_t(u),u;r=D_(a),(o=yi.get(o))&&Yd(r,o),u=(e.ownerDocument||e).createElement("link"),_t(u);var p=u;return p._p=new Promise(function(A,I){p.onload=A,p.onerror=I}),Nn(u,"link",r),n.state.loading|=4,Oc(u,a.precedence,e),n.instance=u;case"script":return u=Ps(a.src),(o=e.querySelector(Kl(u)))?(n.instance=o,_t(o),o):(r=a,(o=yi.get(u))&&(r=z({},a),jd(r,o)),e=e.ownerDocument||e,o=e.createElement("script"),_t(o),Nn(o,"link",r),e.head.appendChild(o),n.instance=o);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Oc(r,a.precedence,e));return n.instance}function Oc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,u=o,p=0;p<r.length;p++){var A=r[p];if(A.dataset.precedence===n)u=A;else if(u!==o)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Yd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function jd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Pc=null;function L_(e,n,a){if(Pc===null){var r=new Map,o=Pc=new Map;o.set(a,r)}else o=Pc,r=o.get(a),r||(r=new Map,o.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),o=0;o<a.length;o++){var u=a[o];if(!(u[Oe]||u[T]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(n)||"";p=e+p;var A=r.get(p);A?A.push(u):r.set(p,[u])}}return r}function Zd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function hM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function O_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function P_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function I_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function z_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=I_(n),e.suspenseyImages.push(n)),e=gM.bind(e),n.decode().then(e,e))}function pM(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=Os(r.href),u=n.querySelector(Zl(o));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ql.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=u,_t(u);return}u=n.ownerDocument||n,r=D_(r),(o=yi.get(o))&&Yd(r,o),u=u.createElement("link"),_t(u);var p=u;p._p=new Promise(function(A,I){p.onload=A,p.onerror=I}),Nn(u,"link",r),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ql.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ic=0;function mM(e,n){return e.stylesheets&&e.count===0&&Bc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Bc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&Ic===0&&(Ic=62500*Ly());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Ic?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(o)}}:null}function B_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Bc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function Ql(){this.count--,B_(this)}function gM(){this.imgCount--,B_(this)}var zc=null;function Bc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zc=new Map,n.forEach(_M,e),zc=null,Ql.call(e))}function _M(e,n){if(!(n.state.loading&4)){var a=zc.get(e);if(a)var r=a.get(null);else{a=new Map,zc.set(e,a);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var p=o[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),r=p)}r&&a.set(null,r)}o=n.instance,p=o.getAttribute("data-precedence"),u=a.get(p)||r,u===r&&a.set(null,o),a.set(p,o),this.count++,r=Ql.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),u?u.parentNode.insertBefore(o,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),n.state.loading|=4}}var Is={$$typeof:ee,Provider:null,Consumer:null,_currentValue:Gt,_currentValue2:Gt,_threadCount:0};function vM(e,n,a,r,o,u,p,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.hiddenUpdates=$r(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function F_(e,n,a,r,o,u,p,A,I,Q,oe,Se){return e=new vM(e,n,a,p,I,Q,oe,Se,A),n=1,u===!0&&(n|=24),u=kn(3,null,null,n),e.current=u,u.stateNode=e,n=uf(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:n},pf(u),e}function H_(e){return e?(e=os,e):os}function G_(e,n,a,r,o,u){o=H_(o),r.context===null?r.context=o:r.pendingContext=o,r=Wa(n),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=qa(e,r,n),a!==null&&(jn(a,e,n),Cl(a,e,n))}function V_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Kd(e,n){V_(e,n),(e=e.alternate)&&V_(e,n)}function X_(e){if(e.tag===13||e.tag===31){var n=Mr(e,67108864);n!==null&&jn(n,e,67108864),Kd(e,67108864)}}function k_(e){if(e.tag===13||e.tag===31){var n=ri();n=fl(n);var a=Mr(e,n);a!==null&&jn(a,e,n),Kd(e,n)}}var zs=!0;function xM(e,n,a,r){var o=ve.T;ve.T=null;var u=Ce.p;try{Ce.p=2,Qd(e,n,a,r)}finally{Ce.p=u,ve.T=o}}function SM(e,n,a,r){var o=ve.T;ve.T=null;var u=Ce.p;try{Ce.p=8,Qd(e,n,a,r)}finally{Ce.p=u,ve.T=o}}function Qd(e,n,a,r){if(zs){var o=Jd(r);if(o===null)Ud(e,n,r,Fc,a),q_(e,r);else if(MM(o,e,n,a,r))r.stopPropagation();else if(q_(e,r),n&4&&-1<yM.indexOf(e)){for(;o!==null;){var u=ut(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=ua(u.pendingLanes);if(p!==0){var A=u;for(A.pendingLanes|=2,A.entangledLanes|=2;p;){var I=1<<31-ct(p);A.entanglements[1]|=I,p&=~I}ea(u),(It&6)===0&&(bc=Xe()+500,kl(0))}}break;case 31:case 13:A=Mr(u,2),A!==null&&jn(A,u,2),Rc(),Kd(u,2)}if(u=Jd(r),u===null&&Ud(e,n,r,Fc,a),u===o)break;o=u}o!==null&&r.stopPropagation()}else Ud(e,n,r,null,a)}}function Jd(e){return e=Iu(e),$d(e)}var Fc=null;function $d(e){if(Fc=null,e=rt(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Fc=e,null}function W_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case ot:return 2;case G:return 8;case Ne:case ye:return 32;case Le:return 268435456;default:return 32}default:return 32}}var eh=!1,ar=null,rr=null,sr=null,Jl=new Map,$l=new Map,lr=[],yM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q_(e,n){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Jl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(n.pointerId)}}function eo(e,n,a,r,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[o]},n!==null&&(n=ut(n),n!==null&&X_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function MM(e,n,a,r,o){switch(n){case"focusin":return ar=eo(ar,e,n,a,r,o),!0;case"dragenter":return rr=eo(rr,e,n,a,r,o),!0;case"mouseover":return sr=eo(sr,e,n,a,r,o),!0;case"pointerover":var u=o.pointerId;return Jl.set(u,eo(Jl.get(u)||null,e,n,a,r,o)),!0;case"gotpointercapture":return u=o.pointerId,$l.set(u,eo($l.get(u)||null,e,n,a,r,o)),!0}return!1}function Y_(e){var n=rt(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,To(e.priority,function(){k_(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,To(e.priority,function(){k_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Jd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Pu=r,a.target.dispatchEvent(r),Pu=null}else return n=ut(a),n!==null&&X_(n),e.blockedOn=a,!1;n.shift()}return!0}function j_(e,n,a){Hc(e)&&a.delete(n)}function EM(){eh=!1,ar!==null&&Hc(ar)&&(ar=null),rr!==null&&Hc(rr)&&(rr=null),sr!==null&&Hc(sr)&&(sr=null),Jl.forEach(j_),$l.forEach(j_)}function Gc(e,n){e.blockedOn===n&&(e.blockedOn=null,eh||(eh=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,EM)))}var Vc=null;function Z_(e){Vc!==e&&(Vc=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Vc===e&&(Vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],o=e[n+2];if(typeof r!="function"){if($d(r||a)===null)continue;break}var u=ut(a);u!==null&&(e.splice(n,3),n-=3,Pf(u,{pending:!0,data:o,method:a.method,action:r},r,o))}}))}function Bs(e){function n(I){return Gc(I,e)}ar!==null&&Gc(ar,e),rr!==null&&Gc(rr,e),sr!==null&&Gc(sr,e),Jl.forEach(n),$l.forEach(n);for(var a=0;a<lr.length;a++){var r=lr[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)Y_(a),a.blockedOn===null&&lr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var o=a[r],u=a[r+1],p=o[F]||null;if(typeof u=="function")p||Z_(a);else if(p){var A=null;if(u&&u.hasAttribute("formAction")){if(o=u,p=u[F]||null)A=p.formAction;else if($d(o)!==null)continue}else A=p.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Z_(a)}}}function K_(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(p){return o=p})},focusReset:"manual",scroll:"manual"})}function n(){o!==null&&(o(),o=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),o!==null&&(o(),o=null)}}}function th(e){this._internalRoot=e}Xc.prototype.render=th.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ri();G_(a,r,e,n,null,null)},Xc.prototype.unmount=th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;G_(e.current,2,null,e,null,null),Rc(),n[ue]=null}};function Xc(e){this._internalRoot=e}Xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=bo();e={blockedOn:null,target:e,priority:n};for(var a=0;a<lr.length&&n!==0&&n<lr[a].priority;a++);lr.splice(a,0,e),a===0&&Y_(e)}};var Q_=t.version;if(Q_!=="19.3.1")throw Error(s(527,Q_,"19.3.1"));Ce.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var bM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:ve,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{Je=kc.inject(bM),Ge=kc}catch{}}return no.createRoot=function(e,n){if(!c(e))throw Error(s(299));var a=!1,r="",o=Hg,u=Gg,p=Vg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=F_(e,1,!1,null,null,a,r,null,o,u,p,K_),e[ue]=n.current,Dd(e),new th(n)},no.hydrateRoot=function(e,n,a){if(!c(e))throw Error(s(299));var r=!1,o="",u=Hg,p=Gg,A=Vg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=F_(e,1,!0,n,a??null,r,o,I,u,p,A,K_),n.context=H_(null),a=n.current,r=ri(),r=fl(r),o=Wa(r),o.callback=null,qa(a,o,r),a=r,n.current.lanes=a,Vi(n,a),ea(n),e[ue]=n.current,Dd(e),new Xc(n)},no.version="19.3.1",no}var lv;function OM(){if(lv)return ah.exports;lv=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),ah.exports=LM(),ah.exports}var PM=OM();const IM=lx(PM);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Up="186",zM=0,ov=1,BM=2,pu=1,FM=2,uo=3,Yr=0,Kn=1,aa=2,Na=0,ho=1,cv=2,uv=3,fv=4,HM=5,$s=100,GM=101,VM=102,XM=103,kM=104,WM=200,qM=201,YM=202,jM=203,cx=204,ux=205,ZM=206,KM=207,QM=208,JM=209,$M=210,eE=211,tE=212,nE=213,iE=214,Xh=0,kh=1,Wh=2,mo=3,qh=4,Yh=5,jh=6,Zh=7,fx=0,aE=1,rE=2,la=0,dx=1,hx=2,px=3,mx=4,gx=5,_x=6,vx=7,xx=300,jr=301,il=302,oh=303,ch=304,Au=306,Kh=1e3,Ii=1001,Qh=1002,Un=1003,sE=1004,Wc=1005,In=1006,uh=1007,Wr=1008,Ti=1009,Sx=1010,yx=1011,go=1012,Lp=1013,oa=1014,ra=1015,ca=1016,Op=1017,Pp=1018,_o=1020,Mx=35902,Ex=35899,bx=1021,Tx=1022,zi=1023,La=1026,qr=1027,Ax=1028,Ip=1029,Zr=1030,zp=1031,Bp=1033,mu=33776,gu=33777,_u=33778,vu=33779,Jh=35840,$h=35841,ep=35842,tp=35843,np=36196,ip=37492,ap=37496,rp=37488,sp=37489,Su=37490,lp=37491,op=37808,cp=37809,up=37810,fp=37811,dp=37812,hp=37813,pp=37814,mp=37815,gp=37816,_p=37817,vp=37818,xp=37819,Sp=37820,yp=37821,Mp=36492,Ep=36494,bp=36495,Tp=36283,Ap=36284,yu=36285,Rp=36286,lE=3200,dv=0,oE=1,mr="",Ei="srgb",Mu="srgb-linear",Eu="linear",qt="srgb",fh=7680,cE=519,uE=512,fE=513,dE=514,Fp=515,hE=516,pE=517,Hp=518,mE=519,gE=35044,hv="300 es",sa=2e3,bu=2001;function _E(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function vo(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function vE(){const l=vo("canvas");return l.style.display="block",l}const pv={};function mv(...l){const t="THREE."+l.shift();console.log(t,...l)}function Rx(l){const t=l[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=l[1];i&&i.isStackTrace?l[0]+=" "+i.getLocation():l[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return l}function st(...l){l=Rx(l);const t="THREE."+l.shift();{const i=l[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...l)}}function Ot(...l){l=Rx(l);const t="THREE."+l.shift();{const i=l[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...l)}}function tl(...l){const t=l.join(" ");t in pv||(pv[t]=!0,st(...l))}function xE(l,t,i){return new Promise(function(s,c){function f(){switch(l.clientWaitSync(t,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:c();break;case l.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const SE={[Xh]:kh,[Wh]:jh,[qh]:Zh,[mo]:Yh,[kh]:Xh,[jh]:Wh,[Zh]:qh,[Yh]:mo};class Qr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const c=s[t];if(c!==void 0){const f=c.indexOf(i);f!==-1&&c.splice(f,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const c=s.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,Cp=180/Math.PI;function So(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[l&255]+On[l>>8&255]+On[l>>16&255]+On[l>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Nt(l,t,i){return Math.max(t,Math.min(i,l))}function yE(l,t){return(l%t+t)%t}function hh(l,t,i){return(1-i)*l+i*t}function io(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:case Uint8ClampedArray:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zn(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const kp=class kp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6],this.y=c[1]*i+c[4]*s+c[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Nt(this.x,t.x,i.x),this.y=Nt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Nt(this.x,t,i),this.y=Nt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Nt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),c=Math.sin(i),f=this.x-t.x,d=this.y-t.y;return this.x=f*s-d*c+t.x,this.y=f*c+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kp.prototype.isVector2=!0;let Bt=kp;class rl{constructor(t=0,i=0,s=0,c=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=c}static slerpFlat(t,i,s,c,f,d,h){let g=s[c+0],m=s[c+1],x=s[c+2],_=s[c+3],v=f[d+0],E=f[d+1],R=f[d+2],N=f[d+3];if(_!==N||g!==v||m!==E||x!==R){let y=g*v+m*E+x*R+_*N;y<0&&(v=-v,E=-E,R=-R,N=-N,y=-y);let S=1-h;if(y<.9995){const O=Math.acos(y),V=Math.sin(O);S=Math.sin(S*O)/V,h=Math.sin(h*O)/V,g=g*S+v*h,m=m*S+E*h,x=x*S+R*h,_=_*S+N*h}else{g=g*S+v*h,m=m*S+E*h,x=x*S+R*h,_=_*S+N*h;const O=1/Math.sqrt(g*g+m*m+x*x+_*_);g*=O,m*=O,x*=O,_*=O}}t[i]=g,t[i+1]=m,t[i+2]=x,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,c,f,d){const h=s[c],g=s[c+1],m=s[c+2],x=s[c+3],_=f[d],v=f[d+1],E=f[d+2],R=f[d+3];return t[i]=h*R+x*_+g*E-m*v,t[i+1]=g*R+x*v+m*_-h*E,t[i+2]=m*R+x*E+h*v-g*_,t[i+3]=x*R-h*_-g*v-m*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,c){return this._x=t,this._y=i,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,c=t._y,f=t._z,d=t._order,h=Math.cos,g=Math.sin,m=h(s/2),x=h(c/2),_=h(f/2),v=g(s/2),E=g(c/2),R=g(f/2);switch(d){case"XYZ":this._x=v*x*_+m*E*R,this._y=m*E*_-v*x*R,this._z=m*x*R+v*E*_,this._w=m*x*_-v*E*R;break;case"YXZ":this._x=v*x*_+m*E*R,this._y=m*E*_-v*x*R,this._z=m*x*R-v*E*_,this._w=m*x*_+v*E*R;break;case"ZXY":this._x=v*x*_-m*E*R,this._y=m*E*_+v*x*R,this._z=m*x*R+v*E*_,this._w=m*x*_-v*E*R;break;case"ZYX":this._x=v*x*_-m*E*R,this._y=m*E*_+v*x*R,this._z=m*x*R-v*E*_,this._w=m*x*_+v*E*R;break;case"YZX":this._x=v*x*_+m*E*R,this._y=m*E*_+v*x*R,this._z=m*x*R-v*E*_,this._w=m*x*_-v*E*R;break;case"XZY":this._x=v*x*_-m*E*R,this._y=m*E*_-v*x*R,this._z=m*x*R+v*E*_,this._w=m*x*_+v*E*R;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,c=Math.sin(s);return this._x=t.x*c,this._y=t.y*c,this._z=t.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],c=i[4],f=i[8],d=i[1],h=i[5],g=i[9],m=i[2],x=i[6],_=i[10],v=s+h+_;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(x-g)*E,this._y=(f-m)*E,this._z=(d-c)*E}else if(s>h&&s>_){const E=2*Math.sqrt(1+s-h-_);this._w=(x-g)/E,this._x=.25*E,this._y=(c+d)/E,this._z=(f+m)/E}else if(h>_){const E=2*Math.sqrt(1+h-s-_);this._w=(f-m)/E,this._x=(c+d)/E,this._y=.25*E,this._z=(g+x)/E}else{const E=2*Math.sqrt(1+_-s-h);this._w=(d-c)/E,this._x=(f+m)/E,this._y=(g+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Nt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const c=Math.min(1,i/s);return this.slerp(t,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,c=t._y,f=t._z,d=t._w,h=i._x,g=i._y,m=i._z,x=i._w;return this._x=s*x+d*h+c*m-f*g,this._y=c*x+d*g+f*h-s*m,this._z=f*x+d*m+s*g-c*h,this._w=d*x-s*h-c*g-f*m,this._onChangeCallback(),this}slerp(t,i){let s=t._x,c=t._y,f=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,c=-c,f=-f,d=-d,h=-h);let g=1-i;if(h<.9995){const m=Math.acos(h),x=Math.sin(m);g=Math.sin(g*m)/x,i=Math.sin(i*m)/x,this._x=this._x*g+s*i,this._y=this._y*g+c*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+c*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(c*Math.sin(t),c*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wp=class Wp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(gv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(gv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[3]*s+f[6]*c,this.y=f[1]*i+f[4]*s+f[7]*c,this.z=f[2]*i+f[5]*s+f[8]*c,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=t.elements,d=1/(f[3]*i+f[7]*s+f[11]*c+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*c+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*c+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*c+f[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,c=this.z,f=t.x,d=t.y,h=t.z,g=t.w,m=2*(d*c-h*s),x=2*(h*i-f*c),_=2*(f*s-d*i);return this.x=i+g*m+d*_-h*x,this.y=s+g*x+h*m-f*_,this.z=c+g*_+f*x-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*c,this.y=f[1]*i+f[5]*s+f[9]*c,this.z=f[2]*i+f[6]*s+f[10]*c,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Nt(this.x,t.x,i.x),this.y=Nt(this.y,t.y,i.y),this.z=Nt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Nt(this.x,t,i),this.y=Nt(this.y,t,i),this.z=Nt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,c=t.y,f=t.z,d=i.x,h=i.y,g=i.z;return this.x=c*g-f*h,this.y=f*d-s*g,this.z=s*h-c*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ph.copy(this).projectOnVector(t),this.sub(ph)}reflect(t){return this.sub(ph.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Nt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,c=this.z-t.z;return i*i+s*s+c*c}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const c=Math.sin(i)*t;return this.x=c*Math.sin(s),this.y=Math.cos(i)*t,this.z=c*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),c=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=c,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wp.prototype.isVector3=!0;let pe=Wp;const ph=new pe,gv=new rl,qp=class qp{constructor(t,i,s,c,f,d,h,g,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,d,h,g,m)}set(t,i,s,c,f,d,h,g,m){const x=this.elements;return x[0]=t,x[1]=c,x[2]=h,x[3]=i,x[4]=f,x[5]=g,x[6]=s,x[7]=d,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,d=s[0],h=s[3],g=s[6],m=s[1],x=s[4],_=s[7],v=s[2],E=s[5],R=s[8],N=c[0],y=c[3],S=c[6],O=c[1],V=c[4],C=c[7],U=c[2],L=c[5],z=c[8];return f[0]=d*N+h*O+g*U,f[3]=d*y+h*V+g*L,f[6]=d*S+h*C+g*z,f[1]=m*N+x*O+_*U,f[4]=m*y+x*V+_*L,f[7]=m*S+x*C+_*z,f[2]=v*N+E*O+R*U,f[5]=v*y+E*V+R*L,f[8]=v*S+E*C+R*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],g=t[6],m=t[7],x=t[8];return i*d*x-i*h*m-s*f*x+s*h*g+c*f*m-c*d*g}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],g=t[6],m=t[7],x=t[8],_=x*d-h*m,v=h*g-x*f,E=m*f-d*g,R=i*_+s*v+c*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/R;return t[0]=_*N,t[1]=(c*m-x*s)*N,t[2]=(h*s-c*d)*N,t[3]=v*N,t[4]=(x*i-c*g)*N,t[5]=(c*f-h*i)*N,t[6]=E*N,t[7]=(s*g-m*i)*N,t[8]=(d*i-s*f)*N,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,c,f,d,h){const g=Math.cos(f),m=Math.sin(f);return this.set(s*g,s*m,-s*(g*d+m*h)+d+t,-c*m,c*g,-c*(-m*d+g*h)+h+i,0,0,1),this}scale(t,i){return tl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mh.makeScale(t,i)),this}rotate(t){return tl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mh.makeRotation(-t)),this}translate(t,i){return tl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<9;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};qp.prototype.isMatrix3=!0;let ft=qp;const mh=new ft,_v=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vv=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ME(){const l={enabled:!0,workingColorSpace:Mu,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===qt&&(c.r=Da(c.r),c.g=Da(c.g),c.b=Da(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qt&&(c.r=nl(c.r),c.g=nl(c.g),c.b=nl(c.b))),c},workingToColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},colorSpaceToWorking:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===mr?Eu:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(c,f){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),l.workingToColorSpace(c,f)},toWorkingColorSpace:function(c,f){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),l.colorSpaceToWorking(c,f)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return l.define({[Mu]:{primaries:t,whitePoint:s,transfer:Eu,toXYZ:_v,fromXYZ:vv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:t,whitePoint:s,transfer:qt,toXYZ:_v,fromXYZ:vv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),l}const wt=ME();function Da(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function nl(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let Fs;class EE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Fs===void 0&&(Fs=vo("canvas")),Fs.width=t.width,Fs.height=t.height;const c=Fs.getContext("2d");t instanceof ImageData?c.putImageData(t,0,0):c.drawImage(t,0,0,t.width,t.height),s=Fs}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=vo("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const c=s.getImageData(0,0,t.width,t.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Da(f[d]/255)*255;return s.putImageData(c,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:t.width,height:t.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bE=0;class Gp{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=So(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(gh(c[d].image)):f.push(gh(c[d]))}else f=gh(c);s.url=f}return i||(t.images[this.uuid]=s),s}}function gh(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?EE.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let TE=0;const _h=new pe;class zn extends Qr{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=Ii,c=Ii,f=In,d=Wr,h=zi,g=Ti,m=zn.DEFAULT_ANISOTROPY,x=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=So(),this.name="",this.source=new Gp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=g,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_h).x}get height(){return this.source.getSize(_h).y}get depth(){return this.source.getSize(_h).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}c&&s&&c.isVector2&&s.isVector2||c&&s&&c.isVector3&&s.isVector3||c&&s&&c.isMatrix3&&s.isMatrix3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kh:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case Qh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kh:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case Qh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=xx;zn.DEFAULT_ANISOTROPY=1;const Yp=class Yp{constructor(t=0,i=0,s=0,c=1){this.x=t,this.y=i,this.z=s,this.w=c}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,c){return this.x=t,this.y=i,this.z=s,this.w=c,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*c+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*c+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*c+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*c+d[15]*f,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,c,f;const g=t.elements,m=g[0],x=g[4],_=g[8],v=g[1],E=g[5],R=g[9],N=g[2],y=g[6],S=g[10];if(Math.abs(x-v)<.01&&Math.abs(_-N)<.01&&Math.abs(R-y)<.01){if(Math.abs(x+v)<.1&&Math.abs(_+N)<.1&&Math.abs(R+y)<.1&&Math.abs(m+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const V=(m+1)/2,C=(E+1)/2,U=(S+1)/2,L=(x+v)/4,z=(_+N)/4,b=(R+y)/4;return V>C&&V>U?V<.01?(s=0,c=.707106781,f=.707106781):(s=Math.sqrt(V),c=L/s,f=z/s):C>U?C<.01?(s=.707106781,c=0,f=.707106781):(c=Math.sqrt(C),s=L/c,f=b/c):U<.01?(s=.707106781,c=.707106781,f=0):(f=Math.sqrt(U),s=z/f,c=b/f),this.set(s,c,f,i),this}let O=Math.sqrt((y-R)*(y-R)+(_-N)*(_-N)+(v-x)*(v-x));return Math.abs(O)<.001&&(O=1),this.x=(y-R)/O,this.y=(_-N)/O,this.z=(v-x)/O,this.w=Math.acos((m+E+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Nt(this.x,t.x,i.x),this.y=Nt(this.y,t.y,i.y),this.z=Nt(this.z,t.z,i.z),this.w=Nt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Nt(this.x,t,i),this.y=Nt(this.y,t,i),this.z=Nt(this.z,t,i),this.w=Nt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yp.prototype.isVector4=!0;let cn=Yp;class AE extends Qr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i),this.textures=[];const c={width:t,height:i,depth:s.depth},f=new zn(c),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=t,this.textures[c].image.height=i,this.textures[c].image.depth=s,this.textures[c].isData3DTexture!==!0&&(this.textures[c].isArrayTexture=this.textures[c].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const c=Object.assign({},t.textures[i].image);this.textures[i].source=new Gp(c)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends AE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Cx extends zn{constructor(t=null,i=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class RE extends zn{constructor(t=null,i=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Tu=class Tu{constructor(t,i,s,c,f,d,h,g,m,x,_,v,E,R,N,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,d,h,g,m,x,_,v,E,R,N,y)}set(t,i,s,c,f,d,h,g,m,x,_,v,E,R,N,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=c,S[1]=f,S[5]=d,S[9]=h,S[13]=g,S[2]=m,S[6]=x,S[10]=_,S[14]=v,S[3]=E,S[7]=R,S[11]=N,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,c=1/Hs.setFromMatrixColumn(t,0).length(),f=1/Hs.setFromMatrixColumn(t,1).length(),d=1/Hs.setFromMatrixColumn(t,2).length();return i[0]=s[0]*c,i[1]=s[1]*c,i[2]=s[2]*c,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,c=t.y,f=t.z,d=Math.cos(s),h=Math.sin(s),g=Math.cos(c),m=Math.sin(c),x=Math.cos(f),_=Math.sin(f);if(t.order==="XYZ"){const v=d*x,E=d*_,R=h*x,N=h*_;i[0]=g*x,i[4]=-g*_,i[8]=m,i[1]=E+R*m,i[5]=v-N*m,i[9]=-h*g,i[2]=N-v*m,i[6]=R+E*m,i[10]=d*g}else if(t.order==="YXZ"){const v=g*x,E=g*_,R=m*x,N=m*_;i[0]=v+N*h,i[4]=R*h-E,i[8]=d*m,i[1]=d*_,i[5]=d*x,i[9]=-h,i[2]=E*h-R,i[6]=N+v*h,i[10]=d*g}else if(t.order==="ZXY"){const v=g*x,E=g*_,R=m*x,N=m*_;i[0]=v-N*h,i[4]=-d*_,i[8]=R+E*h,i[1]=E+R*h,i[5]=d*x,i[9]=N-v*h,i[2]=-d*m,i[6]=h,i[10]=d*g}else if(t.order==="ZYX"){const v=d*x,E=d*_,R=h*x,N=h*_;i[0]=g*x,i[4]=R*m-E,i[8]=v*m+N,i[1]=g*_,i[5]=N*m+v,i[9]=E*m-R,i[2]=-m,i[6]=h*g,i[10]=d*g}else if(t.order==="YZX"){const v=d*g,E=d*m,R=h*g,N=h*m;i[0]=g*x,i[4]=N-v*_,i[8]=R*_+E,i[1]=_,i[5]=d*x,i[9]=-h*x,i[2]=-m*x,i[6]=E*_+R,i[10]=v-N*_}else if(t.order==="XZY"){const v=d*g,E=d*m,R=h*g,N=h*m;i[0]=g*x,i[4]=-_,i[8]=m*x,i[1]=v*_+N,i[5]=d*x,i[9]=E*_-R,i[2]=R*_-E,i[6]=h*x,i[10]=N*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(CE,t,wE)}lookAt(t,i,s){const c=this.elements;return li.subVectors(t,i),li.lengthSq()===0&&(li.z=1),li.normalize(),cr.crossVectors(s,li),cr.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),cr.crossVectors(s,li)),cr.normalize(),qc.crossVectors(li,cr),c[0]=cr.x,c[4]=qc.x,c[8]=li.x,c[1]=cr.y,c[5]=qc.y,c[9]=li.y,c[2]=cr.z,c[6]=qc.z,c[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,d=s[0],h=s[4],g=s[8],m=s[12],x=s[1],_=s[5],v=s[9],E=s[13],R=s[2],N=s[6],y=s[10],S=s[14],O=s[3],V=s[7],C=s[11],U=s[15],L=c[0],z=c[4],b=c[8],P=c[12],k=c[1],j=c[5],ne=c[9],fe=c[13],J=c[2],ee=c[6],W=c[10],q=c[14],de=c[3],se=c[7],ce=c[11],Me=c[15];return f[0]=d*L+h*k+g*J+m*de,f[4]=d*z+h*j+g*ee+m*se,f[8]=d*b+h*ne+g*W+m*ce,f[12]=d*P+h*fe+g*q+m*Me,f[1]=x*L+_*k+v*J+E*de,f[5]=x*z+_*j+v*ee+E*se,f[9]=x*b+_*ne+v*W+E*ce,f[13]=x*P+_*fe+v*q+E*Me,f[2]=R*L+N*k+y*J+S*de,f[6]=R*z+N*j+y*ee+S*se,f[10]=R*b+N*ne+y*W+S*ce,f[14]=R*P+N*fe+y*q+S*Me,f[3]=O*L+V*k+C*J+U*de,f[7]=O*z+V*j+C*ee+U*se,f[11]=O*b+V*ne+C*W+U*ce,f[15]=O*P+V*fe+C*q+U*Me,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],c=t[8],f=t[12],d=t[1],h=t[5],g=t[9],m=t[13],x=t[2],_=t[6],v=t[10],E=t[14],R=t[3],N=t[7],y=t[11],S=t[15],O=g*E-m*v,V=h*E-m*_,C=h*v-g*_,U=d*E-m*x,L=d*v-g*x,z=d*_-h*x;return i*(N*O-y*V+S*C)-s*(R*O-y*U+S*L)+c*(R*V-N*U+S*z)-f*(R*C-N*L+y*z)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],c=t[8],f=t[1],d=t[5],h=t[9],g=t[2],m=t[6],x=t[10];return i*(d*x-h*m)-s*(f*x-h*g)+c*(f*m-d*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const c=this.elements;return t.isVector3?(c[12]=t.x,c[13]=t.y,c[14]=t.z):(c[12]=t,c[13]=i,c[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],g=t[6],m=t[7],x=t[8],_=t[9],v=t[10],E=t[11],R=t[12],N=t[13],y=t[14],S=t[15],O=i*h-s*d,V=i*g-c*d,C=i*m-f*d,U=s*g-c*h,L=s*m-f*h,z=c*m-f*g,b=x*N-_*R,P=x*y-v*R,k=x*S-E*R,j=_*y-v*N,ne=_*S-E*N,fe=v*S-E*y,J=O*fe-V*ne+C*j+U*k-L*P+z*b;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/J;return t[0]=(h*fe-g*ne+m*j)*ee,t[1]=(c*ne-s*fe-f*j)*ee,t[2]=(N*z-y*L+S*U)*ee,t[3]=(v*L-_*z-E*U)*ee,t[4]=(g*k-d*fe-m*P)*ee,t[5]=(i*fe-c*k+f*P)*ee,t[6]=(y*C-R*z-S*V)*ee,t[7]=(x*z-v*C+E*V)*ee,t[8]=(d*ne-h*k+m*b)*ee,t[9]=(s*k-i*ne-f*b)*ee,t[10]=(R*L-N*C+S*O)*ee,t[11]=(_*C-x*L-E*O)*ee,t[12]=(h*P-d*j-g*b)*ee,t[13]=(i*j-s*P+c*b)*ee,t[14]=(N*V-R*U-y*O)*ee,t[15]=(x*U-_*V+v*O)*ee,this}scale(t){const i=this.elements,s=t.x,c=t.y,f=t.z;return i[0]*=s,i[4]*=c,i[8]*=f,i[1]*=s,i[5]*=c,i[9]*=f,i[2]*=s,i[6]*=c,i[10]*=f,i[3]*=s,i[7]*=c,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],c=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,c))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),c=Math.sin(i),f=1-s,d=t.x,h=t.y,g=t.z,m=f*d,x=f*h;return this.set(m*d+s,m*h-c*g,m*g+c*h,0,m*h+c*g,x*h+s,x*g-c*d,0,m*g-c*h,x*g+c*d,f*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,c,f,d){return this.set(1,s,f,0,t,1,d,0,i,c,1,0,0,0,0,1),this}compose(t,i,s){const c=this.elements,f=i._x,d=i._y,h=i._z,g=i._w,m=f+f,x=d+d,_=h+h,v=f*m,E=f*x,R=f*_,N=d*x,y=d*_,S=h*_,O=g*m,V=g*x,C=g*_,U=s.x,L=s.y,z=s.z;return c[0]=(1-(N+S))*U,c[1]=(E+C)*U,c[2]=(R-V)*U,c[3]=0,c[4]=(E-C)*L,c[5]=(1-(v+S))*L,c[6]=(y+O)*L,c[7]=0,c[8]=(R+V)*z,c[9]=(y-O)*z,c[10]=(1-(v+N))*z,c[11]=0,c[12]=t.x,c[13]=t.y,c[14]=t.z,c[15]=1,this}decompose(t,i,s){const c=this.elements;t.x=c[12],t.y=c[13],t.z=c[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Hs.set(c[0],c[1],c[2]).length();const h=Hs.set(c[4],c[5],c[6]).length(),g=Hs.set(c[8],c[9],c[10]).length();f<0&&(d=-d),Ui.copy(this);const m=1/d,x=1/h,_=1/g;return Ui.elements[0]*=m,Ui.elements[1]*=m,Ui.elements[2]*=m,Ui.elements[4]*=x,Ui.elements[5]*=x,Ui.elements[6]*=x,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,i.setFromRotationMatrix(Ui),s.x=d,s.y=h,s.z=g,this}makePerspective(t,i,s,c,f,d,h=sa,g=!1){const m=this.elements,x=2*f/(i-t),_=2*f/(s-c),v=(i+t)/(i-t),E=(s+c)/(s-c);let R,N;if(g)R=f/(d-f),N=d*f/(d-f);else if(h===sa)R=-(d+f)/(d-f),N=-2*d*f/(d-f);else if(h===bu)R=-d/(d-f),N=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=x,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=R,m[14]=N,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,c,f,d,h=sa,g=!1){const m=this.elements,x=2/(i-t),_=2/(s-c),v=-(i+t)/(i-t),E=-(s+c)/(s-c);let R,N;if(g)R=1/(d-f),N=d/(d-f);else if(h===sa)R=-2/(d-f),N=-(d+f)/(d-f);else if(h===bu)R=-1/(d-f),N=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=x,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=_,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=R,m[14]=N,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<16;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Tu.prototype.isMatrix4=!0;let _n=Tu;const Hs=new pe,Ui=new _n,CE=new pe(0,0,0),wE=new pe(1,1,1),cr=new pe,qc=new pe,li=new pe,xv=new _n,Sv=new rl;class Kr{constructor(t=0,i=0,s=0,c=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,c=this._order){return this._x=t,this._y=i,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const c=t.elements,f=c[0],d=c[4],h=c[8],g=c[1],m=c[5],x=c[9],_=c[2],v=c[6],E=c[10];switch(i){case"XYZ":this._y=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-_,f),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Nt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Nt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-_,f)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-x,E),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return xv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Sv.setFromEuler(this),this.setFromQuaternion(Sv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class wx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let NE=0;const yv=new pe,Gs=new rl,Ta=new _n,Yc=new pe,ao=new pe,DE=new pe,UE=new rl,Mv=new pe(1,0,0),Ev=new pe(0,1,0),bv=new pe(0,0,1),Tv={type:"added"},LE={type:"removed"},Vs={type:"childadded",child:null},vh={type:"childremoved",child:null};class ui extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const t=new pe,i=new Kr,s=new rl,c=new pe(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new _n},normalMatrix:{value:new ft}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Gs.setFromAxisAngle(t,i),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(t,i){return Gs.setFromAxisAngle(t,i),this.quaternion.premultiply(Gs),this}rotateX(t){return this.rotateOnAxis(Mv,t)}rotateY(t){return this.rotateOnAxis(Ev,t)}rotateZ(t){return this.rotateOnAxis(bv,t)}translateOnAxis(t,i){return yv.copy(t).applyQuaternion(this.quaternion),this.position.add(yv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Mv,t)}translateY(t){return this.translateOnAxis(Ev,t)}translateZ(t){return this.translateOnAxis(bv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Yc.copy(t):Yc.set(t,i,s);const c=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(ao,Yc,this.up):Ta.lookAt(Yc,ao,this.up),this.quaternion.setFromRotationMatrix(Ta),c&&(Ta.extractRotation(c.matrixWorld),Gs.setFromRotationMatrix(Ta),this.quaternion.premultiply(Gs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tv),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(LE),vh.child=t,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tv),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,c=this.children.length;s<c;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,t,DE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,UE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,c=t.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*c,f[13]+=s-f[1]*i-f[5]*s-f[9]*c,f[14]+=c-f[2]*i-f[6]*s-f[10]*c}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const c=this.parent;if(t===!0&&c!==null&&c.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,c.name=this.name,c.castShadow=this.castShadow,c.receiveShadow=this.receiveShadow,c.visible=this.visible,c.frustumCulled=this.frustumCulled,c.renderOrder=this.renderOrder,c.static=this.static,c.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.pivot!==null&&(c.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(c.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(c.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(h=>({...h})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(t),c.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function f(h,g){return h[g.uuid]===void 0&&(h[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const g=h.shapes;if(Array.isArray(g))for(let m=0,x=g.length;m<x;m++){const _=g[m];f(t.shapes,_)}else f(t.shapes,g)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let g=0,m=this.material.length;g<m;g++)h.push(f(t.materials,this.material[g]));c.material=h}else c.material=f(t.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const g=this.animations[h];c.animations.push(f(t.animations,g))}}if(i){const h=d(t.geometries),g=d(t.materials),m=d(t.textures),x=d(t.images),_=d(t.shapes),v=d(t.skeletons),E=d(t.animations),R=d(t.nodes);h.length>0&&(s.geometries=h),g.length>0&&(s.materials=g),m.length>0&&(s.textures=m),x.length>0&&(s.images=x),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),E.length>0&&(s.animations=E),R.length>0&&(s.nodes=R)}return s.object=c,s;function d(h){const g=[];for(const m in h){const x=h[m];delete x.metadata,g.push(x)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const c=t.children[s];this.add(c.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ui.DEFAULT_UP=new pe(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jc extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OE={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let c=null,f=null,d=null;const h=this._targetRay,g=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const N of t.hand.values()){const y=i.getJointPose(N,s),S=this._getHandJoint(m,N);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=x.position.distanceTo(_.position),E=.02,R=.005;m.inputState.pinching&&v>E+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=E-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,s),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(c=i.getPose(t.targetRaySpace,s),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(OE)))}return h!==null&&(h.visible=c!==null),g!==null&&(g.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new jc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Zc={h:0,s:0,l:0};function Sh(l,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?l+(t-l)*6*i:i<1/2?t:i<2/3?l+(t-l)*6*(2/3-i):l}class zt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const c=t;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,c=wt.workingColorSpace){return this.r=t,this.g=i,this.b=s,wt.colorSpaceToWorking(this,c),this}setHSL(t,i,s,c=wt.workingColorSpace){if(t=yE(t,1),i=Nt(i,0,1),s=Nt(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Sh(d,f,t+1/3),this.g=Sh(d,f,t),this.b=Sh(d,f,t-1/3)}return wt.colorSpaceToWorking(this,c),this}setStyle(t,i=Ei){function s(f){f!==void 0&&parseFloat(f)<1&&st("Color: Alpha component of "+t+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:st("Color: Unknown color model "+t)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);st("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ei){const s=Nx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):st("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=nl(t.r),this.g=nl(t.g),this.b=nl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ei){return wt.workingToColorSpace(Pn.copy(this),t),Math.round(Nt(Pn.r*255,0,255))*65536+Math.round(Nt(Pn.g*255,0,255))*256+Math.round(Nt(Pn.b*255,0,255))}getHexString(t=Ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=wt.workingColorSpace){wt.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,c=Pn.g,f=Pn.b,d=Math.max(s,c,f),h=Math.min(s,c,f);let g,m;const x=(h+d)/2;if(h===d)g=0,m=0;else{const _=d-h;switch(m=x<=.5?_/(d+h):_/(2-d-h),d){case s:g=(c-f)/_+(c<f?6:0);break;case c:g=(f-s)/_+2;break;case f:g=(s-c)/_+4;break}g/=6}return t.h=g,t.s=m,t.l=x,t}getRGB(t,i=wt.workingColorSpace){return wt.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Ei){wt.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,c=Pn.b;return t!==Ei?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(t,i,s){return this.getHSL(ur),this.setHSL(ur.h+t,ur.s+i,ur.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ur),t.getHSL(Zc);const s=hh(ur.h,Zc.h,i),c=hh(ur.s,Zc.s,i),f=hh(ur.l,Zc.l,i);return this.setHSL(s,c,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,c=this.b,f=t.elements;return this.r=f[0]*i+f[3]*s+f[6]*c,this.g=f[1]*i+f[4]*s+f[7]*c,this.b=f[2]*i+f[5]*s+f[8]*c,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new zt;zt.NAMES=Nx;class PE extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kr,this.environmentIntensity=1,this.environmentRotation=new Kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Li=new pe,Aa=new pe,yh=new pe,Ra=new pe,Xs=new pe,ks=new pe,Av=new pe,Mh=new pe,Eh=new pe,bh=new pe,Th=new cn,Ah=new cn,Rh=new cn;class Pi{constructor(t=new pe,i=new pe,s=new pe){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,c){c.subVectors(s,i),Li.subVectors(t,i),c.cross(Li);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(t,i,s,c,f){Li.subVectors(c,i),Aa.subVectors(s,i),yh.subVectors(t,i);const d=Li.dot(Li),h=Li.dot(Aa),g=Li.dot(yh),m=Aa.dot(Aa),x=Aa.dot(yh),_=d*m-h*h;if(_===0)return f.set(0,0,0),null;const v=1/_,E=(m*g-h*x)*v,R=(d*x-h*g)*v;return f.set(1-E-R,R,E)}static containsPoint(t,i,s,c){return this.getBarycoord(t,i,s,c,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(t,i,s,c,f,d,h,g){return this.getBarycoord(t,i,s,c,Ra)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,Ra.x),g.addScaledVector(d,Ra.y),g.addScaledVector(h,Ra.z),g)}static getInterpolatedAttribute(t,i,s,c,f,d){return Th.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),Th.fromBufferAttribute(t,i),Ah.fromBufferAttribute(t,s),Rh.fromBufferAttribute(t,c),d.setScalar(0),d.addScaledVector(Th,f.x),d.addScaledVector(Ah,f.y),d.addScaledVector(Rh,f.z),d}static isFrontFacing(t,i,s,c){return Li.subVectors(s,i),Aa.subVectors(t,i),Li.cross(Aa).dot(c)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,c){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[c]),this}setFromAttributeAndIndices(t,i,s,c){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,c),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Li.cross(Aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,c,f){return Pi.getInterpolation(t,this.a,this.b,this.c,i,s,c,f)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,c=this.b,f=this.c;let d,h;Xs.subVectors(c,s),ks.subVectors(f,s),Mh.subVectors(t,s);const g=Xs.dot(Mh),m=ks.dot(Mh);if(g<=0&&m<=0)return i.copy(s);Eh.subVectors(t,c);const x=Xs.dot(Eh),_=ks.dot(Eh);if(x>=0&&_<=x)return i.copy(c);const v=g*_-x*m;if(v<=0&&g>=0&&x<=0)return d=g/(g-x),i.copy(s).addScaledVector(Xs,d);bh.subVectors(t,f);const E=Xs.dot(bh),R=ks.dot(bh);if(R>=0&&E<=R)return i.copy(f);const N=E*m-g*R;if(N<=0&&m>=0&&R<=0)return h=m/(m-R),i.copy(s).addScaledVector(ks,h);const y=x*R-E*_;if(y<=0&&_-x>=0&&E-R>=0)return Av.subVectors(f,c),h=(_-x)/(_-x+(E-R)),i.copy(c).addScaledVector(Av,h);const S=1/(y+N+v);return d=N*S,h=v*S,i.copy(s).addScaledVector(Xs,d).addScaledVector(ks,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class yo{constructor(t=new pe(1/0,1/0,1/0),i=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Oi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Oi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Oi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Oi):Oi.fromBufferAttribute(f,d),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Kc.copy(s.boundingBox)),Kc.applyMatrix4(t.matrixWorld),this.union(Kc)}const c=t.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ro),Qc.subVectors(this.max,ro),Ws.subVectors(t.a,ro),qs.subVectors(t.b,ro),Ys.subVectors(t.c,ro),fr.subVectors(qs,Ws),dr.subVectors(Ys,qs),Hr.subVectors(Ws,Ys);let i=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-Hr.z,Hr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,Hr.z,0,-Hr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-Hr.y,Hr.x,0];return!Ch(i,Ws,qs,Ys,Qc)||(i=[1,0,0,0,1,0,0,0,1],!Ch(i,Ws,qs,Ys,Qc))?!1:(Jc.crossVectors(fr,dr),i=[Jc.x,Jc.y,Jc.z],Ch(i,Ws,qs,Ys,Qc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ca=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],Oi=new pe,Kc=new yo,Ws=new pe,qs=new pe,Ys=new pe,fr=new pe,dr=new pe,Hr=new pe,ro=new pe,Qc=new pe,Jc=new pe,Gr=new pe;function Ch(l,t,i,s,c){for(let f=0,d=l.length-3;f<=d;f+=3){Gr.fromArray(l,f);const h=c.x*Math.abs(Gr.x)+c.y*Math.abs(Gr.y)+c.z*Math.abs(Gr.z),g=t.dot(Gr),m=i.dot(Gr),x=s.dot(Gr);if(Math.max(-Math.max(g,m,x),Math.min(g,m,x))>h)return!1}return!0}const gn=new pe,$c=new Bt;let IE=0;class Fi extends Qr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=gE,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[t+c]=i.array[s+c];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)$c.fromBufferAttribute(this,i),$c.applyMatrix3(t),this.setXY(i,$c.x,$c.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=io(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=io(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=io(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=io(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=io(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this}setXYZW(t,i,s,c,f){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),c=Zn(c,this.array),f=Zn(f,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Dx extends Fi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Ux extends Fi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ua extends Fi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const zE=new yo,so=new pe,wh=new pe;class Vp{constructor(t=new pe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):zE.setFromPoints(t).getCenter(s);let c=0;for(let f=0,d=t.length;f<d;f++)c=Math.max(c,s.distanceToSquared(t[f]));return this.radius=Math.sqrt(c),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);const i=so.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),c=(s-this.radius)*.5;this.center.addScaledVector(so,c/s),this.radius+=c}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(wh)),this.expandByPoint(so.copy(t.center).sub(wh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let BE=0;const Mi=new _n,Nh=new ui,js=new pe,oi=new yo,lo=new yo,Tn=new pe;class Oa extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_E(t)?Ux:Dx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new ft().getNormalMatrix(t);s.applyNormalMatrix(f),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(t),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,i,s){return Mi.makeTranslation(t,i,s),this.applyMatrix4(Mi),this}scale(t,i,s){return Mi.makeScale(t,i,s),this.applyMatrix4(Mi),this}lookAt(t){return Nh.lookAt(t),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let c=0,f=t.length;c<f;c++){const d=t[c];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ua(s,3))}else{const s=Math.min(t.length,i.count);for(let c=0;c<s;c++){const f=t[c];i.setXYZ(c,f.x,f.y,f.z||0)}t.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,c=i.length;s<c;s++){const f=i[s];oi.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];lo.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(oi.min,lo.min),oi.expandByPoint(Tn),Tn.addVectors(oi.max,lo.max),oi.expandByPoint(Tn)):(oi.expandByPoint(lo.min),oi.expandByPoint(lo.max))}oi.getCenter(s);let c=0;for(let f=0,d=t.count;f<d;f++)Tn.fromBufferAttribute(t,f),c=Math.max(c,s.distanceToSquared(Tn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],g=this.morphTargetsRelative;for(let m=0,x=h.count;m<x;m++)Tn.fromBufferAttribute(h,m),g&&(js.fromBufferAttribute(t,m),Tn.add(js)),c=Math.max(c,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,c=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Fi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],g=[];for(let b=0;b<s.count;b++)h[b]=new pe,g[b]=new pe;const m=new pe,x=new pe,_=new pe,v=new Bt,E=new Bt,R=new Bt,N=new pe,y=new pe;function S(b,P,k){m.fromBufferAttribute(s,b),x.fromBufferAttribute(s,P),_.fromBufferAttribute(s,k),v.fromBufferAttribute(f,b),E.fromBufferAttribute(f,P),R.fromBufferAttribute(f,k),x.sub(m),_.sub(m),E.sub(v),R.sub(v);const j=1/(E.x*R.y-R.x*E.y);isFinite(j)&&(N.copy(x).multiplyScalar(R.y).addScaledVector(_,-E.y).multiplyScalar(j),y.copy(_).multiplyScalar(E.x).addScaledVector(x,-R.x).multiplyScalar(j),h[b].add(N),h[P].add(N),h[k].add(N),g[b].add(y),g[P].add(y),g[k].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let b=0,P=O.length;b<P;++b){const k=O[b],j=k.start,ne=k.count;for(let fe=j,J=j+ne;fe<J;fe+=3)S(t.getX(fe+0),t.getX(fe+1),t.getX(fe+2))}const V=new pe,C=new pe,U=new pe,L=new pe;function z(b){U.fromBufferAttribute(c,b),L.copy(U);const P=h[b];V.copy(P),V.sub(U.multiplyScalar(U.dot(P))).normalize(),C.crossVectors(L,P);const j=C.dot(g[b])<0?-1:1;d.setXYZW(b,V.x,V.y,V.z,j)}for(let b=0,P=O.length;b<P;++b){const k=O[b],j=k.start,ne=k.count;for(let fe=j,J=j+ne;fe<J;fe+=3)z(t.getX(fe+0)),z(t.getX(fe+1)),z(t.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Fi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,E=s.count;v<E;v++)s.setXYZ(v,0,0,0);const c=new pe,f=new pe,d=new pe,h=new pe,g=new pe,m=new pe,x=new pe,_=new pe;if(t)for(let v=0,E=t.count;v<E;v+=3){const R=t.getX(v+0),N=t.getX(v+1),y=t.getX(v+2);c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,N),d.fromBufferAttribute(i,y),x.subVectors(d,f),_.subVectors(c,f),x.cross(_),h.fromBufferAttribute(s,R),g.fromBufferAttribute(s,N),m.fromBufferAttribute(s,y),h.add(x),g.add(x),m.add(x),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(N,g.x,g.y,g.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,E=i.count;v<E;v+=3)c.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),x.subVectors(d,f),_.subVectors(c,f),x.cross(_),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,g){const m=h.array,x=h.itemSize,_=h.normalized,v=new m.constructor(g.length*x);let E=0,R=0;for(let N=0,y=g.length;N<y;N++){h.isInterleavedBufferAttribute?E=g[N]*h.data.stride+h.offset:E=g[N]*x;for(let S=0;S<x;S++)v[R++]=m[E++]}return new Fi(v,x,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oa,s=this.index.array,c=this.attributes;for(const h in c){const g=c[h],m=t(g,s);i.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const g=[],m=f[h];for(let x=0,_=m.length;x<_;x++){const v=m[x],E=t(v,s);g.push(E)}i.morphAttributes[h]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,g=d.length;h<g;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(t[m]=g[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const m=s[g];t.data.attributes[g]=m.toJSON(t.data)}const c={};let f=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],x=[];for(let _=0,v=m.length;_<v;_++){const E=m[_];x.push(E.toJSON(t.data))}x.length>0&&(c[g]=x,f=!0)}f&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const c=t.attributes;for(const m in c){const x=c[m];this.setAttribute(m,x.clone(i))}const f=t.morphAttributes;for(const m in f){const x=[],_=f[m];for(let v=0,E=_.length;v<E;v++)x.push(_[v].clone(i));this.morphAttributes[m]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,x=d.length;m<x;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dh=new pe,FE=new pe,HE=new ft;class pr{constructor(t=new pe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,c){return this.normal.set(t,i,s),this.constant=c,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const c=Dh.subVectors(s,i).cross(FE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const c=t.delta(Dh),f=this.normal.dot(c);if(f===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(c,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||HE.getNormalMatrix(t),c=this.coplanarPoint(Dh).applyMatrix4(t),f=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let GE=0;class Ru extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=So(),this.name="",this.type="Material",this.blending=ho,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cx,this.blendDst=ux,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fh,this.stencilZFail=fh,this.stencilZPass=fh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector2&&s&&s.isVector2||c&&c.isEuler&&s&&s.isEuler||c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}if(i){const f=c(t.textures),d=c(t.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new pr().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Bt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const c=i.length;s=new Array(c);for(let f=0;f!==c;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wa=new pe,Uh=new pe,eu=new pe,tu=new pe;class VE{constructor(t=new pe,i=new pe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=wa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(wa.copy(this.origin).addScaledVector(this.direction,i),wa.distanceToSquared(t))}distanceSqToSegment(t,i,s,c){Uh.copy(t).add(i).multiplyScalar(.5),eu.copy(i).sub(t).normalize(),tu.copy(this.origin).sub(Uh);const f=t.distanceTo(i)*.5,d=-this.direction.dot(eu),h=tu.dot(this.direction),g=-tu.dot(eu),m=tu.lengthSq(),x=Math.abs(1-d*d);let _,v,E,R;if(x>0)if(_=d*g-h,v=d*h-g,R=f*x,_>=0)if(v>=-R)if(v<=R){const N=1/x;_*=N,v*=N,E=_*(_+d*v+2*h)+v*(d*_+v+2*g)+m}else v=f,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*g)+m;else v=-f,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*g)+m;else v<=-R?(_=Math.max(0,-(-d*f+h)),v=_>0?-f:Math.min(Math.max(-f,-g),f),E=-_*_+v*(v+2*g)+m):v<=R?(_=0,v=Math.min(Math.max(-f,-g),f),E=v*(v+2*g)+m):(_=Math.max(0,-(d*f+h)),v=_>0?f:Math.min(Math.max(-f,-g),f),E=-_*_+v*(v+2*g)+m);else v=d>0?-f:f,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*g)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),c&&c.copy(Uh).addScaledVector(eu,v),E}intersectSphere(t,i){if(t.radius<0)return null;wa.subVectors(t.center,this.origin);const s=wa.dot(this.direction),c=wa.dot(wa)-s*s,f=t.radius*t.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=s-d,g=s+d;return g<0?null:h<0?this.at(g,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,c,f,d,h,g;const m=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(s=(t.min.x-v.x)*m,c=(t.max.x-v.x)*m):(s=(t.max.x-v.x)*m,c=(t.min.x-v.x)*m),x>=0?(f=(t.min.y-v.y)*x,d=(t.max.y-v.y)*x):(f=(t.max.y-v.y)*x,d=(t.min.y-v.y)*x),s>d||f>c||((f>s||isNaN(s))&&(s=f),(d<c||isNaN(c))&&(c=d),_>=0?(h=(t.min.z-v.z)*_,g=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,g=(t.min.z-v.z)*_),s>g||h>c)||((h>s||s!==s)&&(s=h),(g<c||c!==c)&&(c=g),c<0)?null:this.at(s>=0?s:c,i)}intersectsBox(t){return this.intersectBox(t,wa)!==null}intersectTriangle(t,i,s,c,f){const d=this.origin,h=this.direction,g=h.x,m=h.y,x=h.z,_=t.x-d.x,v=t.y-d.y,E=t.z-d.z,R=i.x-d.x,N=i.y-d.y,y=i.z-d.z,S=s.x-d.x,O=s.y-d.y,V=s.z-d.z,C=Math.abs(g),U=Math.abs(m),L=Math.abs(x);let z,b,P,k,j,ne,fe,J,ee,W,q,de;if(C>=U&&C>=L?(P=g,ne=_,ee=R,de=S,g>=0?(z=m,b=x,k=v,j=E,fe=N,J=y,W=O,q=V):(z=x,b=m,k=E,j=v,fe=y,J=N,W=V,q=O)):U>=L?(P=m,ne=v,ee=N,de=O,m>=0?(z=x,b=g,k=E,j=_,fe=y,J=R,W=V,q=S):(z=g,b=x,k=_,j=E,fe=R,J=y,W=S,q=V)):(P=x,ne=E,ee=y,de=V,x>=0?(z=g,b=m,k=_,j=v,fe=R,J=N,W=S,q=O):(z=m,b=g,k=v,j=_,fe=N,J=R,W=O,q=S)),P===0)return null;const se=z/P,ce=b/P,Me=1/P,je=k-se*ne,ke=j-ce*ne,B=fe-se*ee,me=J-ce*ee,Ae=W-se*de,Z=q-ce*de,he=Ae*me-Z*B,Te=je*Z-ke*Ae,we=B*ke-me*je;if(c){if(he<0||Te<0||we<0)return null}else if((he<0||Te<0||we<0)&&(he>0||Te>0||we>0))return null;const ve=he+Te+we;if(ve===0)return null;const Ce=Me*(he*ne+Te*ee+we*de);return(ve>0?Ce<0:Ce>0)?null:this.at(Ce/ve,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class po extends Ru{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.combine=fx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Rv=new _n,Vr=new VE,nu=new Vp,Cv=new pe,iu=new pe,au=new pe,ru=new pe,Lh=new pe,su=new pe,wv=new pe,lu=new pe;class ci extends ui{constructor(t=new Oa,i=new po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(t,i){const s=this.geometry,c=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(c,t);const h=this.morphTargetInfluences;if(f&&h){su.set(0,0,0);for(let g=0,m=f.length;g<m;g++){const x=h[g],_=f[g];x!==0&&(Lh.fromBufferAttribute(_,t),d?su.addScaledVector(Lh,x):su.addScaledVector(Lh.sub(i),x))}i.add(su)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),nu.copy(s.boundingSphere),nu.applyMatrix4(f),Vr.copy(t.ray).recast(t.near),!(nu.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(nu,Cv)===null||Vr.origin.distanceToSquared(Cv)>(t.far-t.near)**2))&&(Rv.copy(f).invert(),Vr.copy(t.ray).applyMatrix4(Rv),!(s.boundingBox!==null&&Vr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Vr)))}_computeIntersections(t,i,s){let c;const f=this.geometry,d=this.material,h=f.index,g=f.attributes.position,m=f.attributes.uv,x=f.attributes.uv1,_=f.attributes.normal,v=f.groups,E=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,N=v.length;R<N;R++){const y=v[R],S=d[y.materialIndex],O=Math.max(y.start,E.start),V=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let C=O,U=V;C<U;C+=3){const L=h.getX(C),z=h.getX(C+1),b=h.getX(C+2);c=ou(this,S,t,s,m,x,_,L,z,b),c&&(c.faceIndex=Math.floor(C/3),c.face.materialIndex=y.materialIndex,i.push(c))}}else{const R=Math.max(0,E.start),N=Math.min(h.count,E.start+E.count);for(let y=R,S=N;y<S;y+=3){const O=h.getX(y),V=h.getX(y+1),C=h.getX(y+2);c=ou(this,d,t,s,m,x,_,O,V,C),c&&(c.faceIndex=Math.floor(y/3),i.push(c))}}else if(g!==void 0)if(Array.isArray(d))for(let R=0,N=v.length;R<N;R++){const y=v[R],S=d[y.materialIndex],O=Math.max(y.start,E.start),V=Math.min(g.count,Math.min(y.start+y.count,E.start+E.count));for(let C=O,U=V;C<U;C+=3){const L=C,z=C+1,b=C+2;c=ou(this,S,t,s,m,x,_,L,z,b),c&&(c.faceIndex=Math.floor(C/3),c.face.materialIndex=y.materialIndex,i.push(c))}}else{const R=Math.max(0,E.start),N=Math.min(g.count,E.start+E.count);for(let y=R,S=N;y<S;y+=3){const O=y,V=y+1,C=y+2;c=ou(this,d,t,s,m,x,_,O,V,C),c&&(c.faceIndex=Math.floor(y/3),i.push(c))}}}}function XE(l,t,i,s,c,f,d,h){let g;if(t.side===Kn?g=s.intersectTriangle(d,f,c,!0,h):g=s.intersectTriangle(c,f,d,t.side===Yr,h),g===null)return null;lu.copy(h),lu.applyMatrix4(l.matrixWorld);const m=i.ray.origin.distanceTo(lu);return m<i.near||m>i.far?null:{distance:m,point:lu.clone(),object:l}}function ou(l,t,i,s,c,f,d,h,g,m){l.getVertexPosition(h,iu),l.getVertexPosition(g,au),l.getVertexPosition(m,ru);const x=XE(l,t,i,s,iu,au,ru,wv);if(x){const _=new pe;Pi.getBarycoord(wv,iu,au,ru,_),c&&(x.uv=Pi.getInterpolatedAttribute(c,h,g,m,_,new Bt)),f&&(x.uv1=Pi.getInterpolatedAttribute(f,h,g,m,_,new Bt)),d&&(x.normal=Pi.getInterpolatedAttribute(d,h,g,m,_,new pe),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:h,b:g,c:m,normal:new pe,materialIndex:0};Pi.getNormal(iu,au,ru,v.normal),x.face=v,x.barycoord=_}return x}class kE extends zn{constructor(t=null,i=1,s=1,c,f,d,h,g,m=Un,x=Un,_,v){super(null,d,h,g,m,x,c,f,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xr=new Vp,WE=new Bt(.5,.5),cu=new pe;class Lx{constructor(t=new pr,i=new pr,s=new pr,c=new pr,f=new pr,d=new pr){this.planes=[t,i,s,c,f,d]}set(t,i,s,c,f,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=sa,s=!1){const c=this.planes,f=t.elements,d=f[0],h=f[1],g=f[2],m=f[3],x=f[4],_=f[5],v=f[6],E=f[7],R=f[8],N=f[9],y=f[10],S=f[11],O=f[12],V=f[13],C=f[14],U=f[15];if(c[0].setComponents(m-d,E-x,S-R,U-O).normalize(),c[1].setComponents(m+d,E+x,S+R,U+O).normalize(),c[2].setComponents(m+h,E+_,S+N,U+V).normalize(),c[3].setComponents(m-h,E-_,S-N,U-V).normalize(),s)c[4].setComponents(g,v,y,C).normalize(),c[5].setComponents(m-g,E-v,S-y,U-C).normalize();else if(c[4].setComponents(m-g,E-v,S-y,U-C).normalize(),i===sa)c[5].setComponents(m+g,E+v,S+y,U+C).normalize();else if(i===bu)c[5].setComponents(g,v,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(t){Xr.center.set(0,0,0);const i=WE.distanceTo(t.center);return Xr.radius=.7071067811865476+i,Xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(t){const i=this.planes,s=t.center,c=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<c)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const c=i[s];if(cu.x=c.normal.x>0?t.max.x:t.min.x,cu.y=c.normal.y>0?t.max.y:t.min.y,cu.z=c.normal.z>0?t.max.z:t.min.z,c.distanceToPoint(cu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ox extends zn{constructor(t=[],i=jr,s,c,f,d,h,g,m,x){super(t,i,s,c,f,d,h,g,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xo extends zn{constructor(t,i,s=oa,c,f,d,h=Un,g=Un,m,x=La,_=1){if(x!==La&&x!==qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,c,f,d,h,g,x,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class qE extends xo{constructor(t,i=oa,s=jr,c,f,d=Un,h=Un,g,m=La){const x={width:t,height:t,depth:1},_=[x,x,x,x,x,x];super(t,t,i,s,c,f,d,h,g,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Px extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Mo extends Oa{constructor(t=1,i=1,s=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const g=[],m=[],x=[],_=[];let v=0,E=0;R("z","y","x",-1,-1,s,i,t,d,f,0),R("z","y","x",1,-1,s,i,-t,d,f,1),R("x","z","y",1,1,t,s,i,c,d,2),R("x","z","y",1,-1,t,s,-i,c,d,3),R("x","y","z",1,-1,t,i,s,c,f,4),R("x","y","z",-1,-1,t,i,-s,c,f,5),this.setIndex(g),this.setAttribute("position",new Ua(m,3)),this.setAttribute("normal",new Ua(x,3)),this.setAttribute("uv",new Ua(_,2));function R(N,y,S,O,V,C,U,L,z,b,P){const k=C/z,j=U/b,ne=C/2,fe=U/2,J=L/2,ee=z+1,W=b+1;let q=0,de=0;const se=new pe;for(let ce=0;ce<W;ce++){const Me=ce*j-fe;for(let je=0;je<ee;je++){const ke=je*k-ne;se[N]=ke*O,se[y]=Me*V,se[S]=J,m.push(se.x,se.y,se.z),se[N]=0,se[y]=0,se[S]=L>0?1:-1,x.push(se.x,se.y,se.z),_.push(je/z),_.push(1-ce/b),q+=1}}for(let ce=0;ce<b;ce++)for(let Me=0;Me<z;Me++){const je=v+Me+ee*ce,ke=v+Me+ee*(ce+1),B=v+(Me+1)+ee*(ce+1),me=v+(Me+1)+ee*ce;g.push(je,ke,me),g.push(ke,B,me),de+=6}h.addGroup(E,de,P),E+=de,v+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class gr extends Oa{constructor(t=1,i=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:c};const f=t/2,d=i/2,h=Math.floor(s),g=Math.floor(c),m=h+1,x=g+1,_=t/h,v=i/g,E=[],R=[],N=[],y=[];for(let S=0;S<x;S++){const O=S*v-d;for(let V=0;V<m;V++){const C=V*_-f;R.push(C,-O,0),N.push(0,0,1),y.push(V/h),y.push(1-S/g)}}for(let S=0;S<g;S++)for(let O=0;O<h;O++){const V=O+m*S,C=O+m*(S+1),U=O+1+m*(S+1),L=O+1+m*S;E.push(V,C,L),E.push(C,U,L)}this.setIndex(E),this.setAttribute("position",new Ua(R,3)),this.setAttribute("normal",new Ua(N,3)),this.setAttribute("uv",new Ua(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.width,t.height,t.widthSegments,t.heightSegments)}}function al(l){const t={};for(const i in l){t[i]={};for(const s in l[i]){const c=l[i][s];if(Nv(c))c.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=c.clone();else if(Array.isArray(c))if(Nv(c[0])){const f=[];for(let d=0,h=c.length;d<h;d++)f[d]=c[d].clone();t[i][s]=f}else t[i][s]=c.slice();else t[i][s]=c}}return t}function Xn(l){const t={};for(let i=0;i<l.length;i++){const s=al(l[i]);for(const c in s)t[c]=s[c]}return t}function Nv(l){return l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)}function YE(l){const t=[];for(let i=0;i<l.length;i++)t.push(l[i].clone());return t}function Ix(l){const t=l.getRenderTarget();return t===null?l.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:wt.workingColorSpace}const jE={clone:al,merge:Xn};var ZE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends Ru{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZE,this.fragmentShader=KE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=al(t.uniforms),this.uniformsGroups=YE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?i.uniforms[c]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[c]={type:"m4",value:d.toArray()}:i.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const c=t.uniforms[s];switch(this.uniforms[s]={},c.type){case"t":this.uniforms[s].value=i[c.value]||null;break;case"c":this.uniforms[s].value=new zt().setHex(c.value);break;case"v2":this.uniforms[s].value=new Bt().fromArray(c.value);break;case"v3":this.uniforms[s].value=new pe().fromArray(c.value);break;case"v4":this.uniforms[s].value=new cn().fromArray(c.value);break;case"m3":this.uniforms[s].value=new ft().fromArray(c.value);break;case"m4":this.uniforms[s].value=new _n().fromArray(c.value);break;default:this.uniforms[s].value=c.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class QE extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class JE extends Ru{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $E extends Ru{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Oh={enabled:!1,files:{},add:function(l,t){this.enabled!==!1&&(Dv(l)||(this.files[l]=t))},get:function(l){if(this.enabled!==!1&&!Dv(l))return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};function Dv(l){try{const t=l.slice(l.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class eb{constructor(t,i,s){const c=this;let f=!1,d=0,h=0,g;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(x){h++,f===!1&&c.onStart!==void 0&&c.onStart(x,d,h),f=!0},this.itemEnd=function(x){d++,c.onProgress!==void 0&&c.onProgress(x,d,h),d===h&&(f=!1,c.onLoad!==void 0&&c.onLoad())},this.itemError=function(x){c.onError!==void 0&&c.onError(x)},this.resolveURL=function(x){return x=x.normalize("NFC"),g?g(x):x},this.setURLModifier=function(x){return g=x,this},this.addHandler=function(x,_){return m.push(x,_),this},this.removeHandler=function(x){const _=m.indexOf(x);return _!==-1&&m.splice(_,2),this},this.getHandler=function(x){for(let _=0,v=m.length;_<v;_+=2){const E=m[_],R=m[_+1];if(E.global&&(E.lastIndex=0),E.test(x))return R}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const tb=new eb;class Xp{constructor(t){this.manager=t!==void 0?t:tb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(c,f){s.load(t,c,i,f)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Xp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zs=new WeakMap;class nb extends Xp{constructor(t){super(t)}load(t,i,s,c){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const f=this,d=Oh.get(`image:${t}`);if(d!==void 0){if(d.complete===!0)f.manager.itemStart(t),setTimeout(function(){i&&i(d),f.manager.itemEnd(t)},0);else{let _=Zs.get(d);_===void 0&&(_=[],Zs.set(d,_)),_.push({onLoad:i,onError:c})}return d}const h=vo("img");function g(){x(),i&&i(this);const _=Zs.get(this)||[];for(let v=0;v<_.length;v++){const E=_[v];E.onLoad&&E.onLoad(this)}Zs.delete(this),f.manager.itemEnd(t)}function m(_){x(),c&&c(_),Oh.remove(`image:${t}`);const v=Zs.get(this)||[];for(let E=0;E<v.length;E++){const R=v[E];R.onError&&R.onError(_)}Zs.delete(this),f.manager.itemError(t),f.manager.itemEnd(t)}function x(){h.removeEventListener("load",g,!1),h.removeEventListener("error",m,!1)}return h.addEventListener("load",g,!1),h.addEventListener("error",m,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Oh.add(`image:${t}`,h),f.manager.itemStart(t),h.src=t,h}}class ib extends Xp{constructor(t){super(t)}load(t,i,s,c){const f=new zn,d=new nb(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(t,function(h){f.image=h,f.needsUpdate=!0,i!==void 0&&i(f)},s,c),f}}const uu=new pe,fu=new rl,ta=new pe;class zx extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(uu,fu,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uu,fu,ta.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(uu,fu,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uu,fu,ta.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new pe,Uv=new Bt,Lv=new Bt;class bi extends zx{constructor(t=50,i=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Cp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cp*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-t/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hr.x,hr.y).multiplyScalar(-t/hr.z)}getViewSize(t,i){return this.getViewBounds(t,Uv,Lv),i.subVectors(Lv,Uv)}setViewOffset(t,i,s,c,f,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(dh*.5*this.fov)/this.zoom,s=2*i,c=this.aspect*s,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,m=d.fullHeight;f+=d.offsetX*c/g,i-=d.offsetY*s/m,c*=d.width/g,s*=d.height/m}const h=this.filmOffset;h!==0&&(f+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Bx extends zx{constructor(t=-1,i=1,s=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=s-t,d=s+t,h=c+i,g=c-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=x*this.view.offsetY,g=h-x*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ks=-90,Qs=1;class ab extends ui{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new bi(Ks,Qs,t,i);c.layers=this.layers,this.add(c);const f=new bi(Ks,Qs,t,i);f.layers=this.layers,this.add(f);const d=new bi(Ks,Qs,t,i);d.layers=this.layers,this.add(d);const h=new bi(Ks,Qs,t,i);h.layers=this.layers,this.add(h);const g=new bi(Ks,Qs,t,i);g.layers=this.layers,this.add(g);const m=new bi(Ks,Qs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,c,f,d,h,g]=i;for(const m of i)this.remove(m);if(t===sa)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===bu)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,g,m,x]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,1,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(s,4,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),s.texture.generateMipmaps=N,t.setRenderTarget(s,5,c),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(_,v,E),t.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class rb extends bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class sb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const jp=class jp{constructor(t,i,s,c){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,c)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,c){const f=this.elements;return f[0]=t,f[2]=i,f[1]=s,f[3]=c,this}};jp.prototype.isMatrix2=!0;let Ov=jp;function Pv(l,t,i,s){const c=lb(s);switch(i){case bx:return l*t;case Ax:return l*t/c.components*c.byteLength;case Ip:return l*t/c.components*c.byteLength;case Zr:return l*t*2/c.components*c.byteLength;case zp:return l*t*2/c.components*c.byteLength;case Tx:return l*t*3/c.components*c.byteLength;case zi:return l*t*4/c.components*c.byteLength;case Bp:return l*t*4/c.components*c.byteLength;case mu:case gu:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case _u:case vu:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case $h:case tp:return Math.max(l,16)*Math.max(t,8)/4;case Jh:case ep:return Math.max(l,8)*Math.max(t,8)/2;case np:case ip:case rp:case sp:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case ap:case Su:case lp:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case op:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case cp:return Math.floor((l+4)/5)*Math.floor((t+3)/4)*16;case up:return Math.floor((l+4)/5)*Math.floor((t+4)/5)*16;case fp:return Math.floor((l+5)/6)*Math.floor((t+4)/5)*16;case dp:return Math.floor((l+5)/6)*Math.floor((t+5)/6)*16;case hp:return Math.floor((l+7)/8)*Math.floor((t+4)/5)*16;case pp:return Math.floor((l+7)/8)*Math.floor((t+5)/6)*16;case mp:return Math.floor((l+7)/8)*Math.floor((t+7)/8)*16;case gp:return Math.floor((l+9)/10)*Math.floor((t+4)/5)*16;case _p:return Math.floor((l+9)/10)*Math.floor((t+5)/6)*16;case vp:return Math.floor((l+9)/10)*Math.floor((t+7)/8)*16;case xp:return Math.floor((l+9)/10)*Math.floor((t+9)/10)*16;case Sp:return Math.floor((l+11)/12)*Math.floor((t+9)/10)*16;case yp:return Math.floor((l+11)/12)*Math.floor((t+11)/12)*16;case Mp:case Ep:case bp:return Math.ceil(l/4)*Math.ceil(t/4)*16;case Tp:case Ap:return Math.ceil(l/4)*Math.ceil(t/4)*8;case yu:case Rp:return Math.ceil(l/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lb(l){switch(l){case Ti:case Sx:return{byteLength:1,components:1};case go:case yx:case ca:return{byteLength:2,components:1};case Op:case Pp:return{byteLength:2,components:4};case oa:case Lp:case ra:return{byteLength:4,components:1};case Mx:case Ex:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${l}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fx(){let l=null,t=!1,i=null,s=null;function c(f,d){s=l.requestAnimationFrame(c),i(f,d)}return{start:function(){t!==!0&&i!==null&&l!==null&&(s=l.requestAnimationFrame(c),t=!0)},stop:function(){l!==null&&l.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){l=f}}}function ob(l){const t=new WeakMap;function i(h,g){const m=h.array,x=h.usage,_=m.byteLength,v=l.createBuffer();l.bindBuffer(g,v),l.bufferData(g,m,x),h.onUploadCallback();let E;if(m instanceof Float32Array)E=l.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=l.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=l.HALF_FLOAT:E=l.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=l.SHORT;else if(m instanceof Uint32Array)E=l.UNSIGNED_INT;else if(m instanceof Int32Array)E=l.INT;else if(m instanceof Int8Array)E=l.BYTE;else if(m instanceof Uint8Array)E=l.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,g,m){const x=g.array,_=g.updateRanges;if(l.bindBuffer(m,h),_.length===0)l.bufferSubData(m,0,x);else{_.sort((E,R)=>E.start-R.start);let v=0;for(let E=1;E<_.length;E++){const R=_[v],N=_[E];N.start<=R.start+R.count+1?R.count=Math.max(R.count,N.start+N.count-R.start):(++v,_[v]=N)}_.length=v+1;for(let E=0,R=_.length;E<R;E++){const N=_[E];l.bufferSubData(m,N.start*x.BYTES_PER_ELEMENT,x,N.start,N.count)}g.clearUpdateRanges()}g.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const g=t.get(h);g&&(l.deleteBuffer(g.buffer),t.delete(h))}function d(h,g){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,g));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,g),m.version=h.version}}return{get:c,remove:f,update:d}}var cb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ub=`#ifdef USE_ALPHAHASH
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
#endif`,fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mb=`#ifdef USE_AOMAP
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
#endif`,gb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_b=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mb=`#ifdef USE_IRIDESCENCE
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
#endif`,Eb=`#ifdef USE_BUMPMAP
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
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ub=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Lb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ob=`vec3 transformedNormal = objectNormal;
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
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kb=`#ifdef USE_GRADIENTMAP
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
}`,Qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eT=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,tT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,nT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oT=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xT=`#if defined( USE_POINTS_UV )
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
#endif`,ST=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ET=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TT=`#ifdef USE_MORPHTARGETS
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
#endif`,AT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,UT=`#ifdef USE_NORMALMAP
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
#endif`,LT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,FT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,YT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,jT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,ZT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KT=`#ifdef USE_SKINNING
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
#endif`,QT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JT=`#ifdef USE_SKINNING
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
#endif`,$T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i1=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u1=`uniform sampler2D t2D;
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`#include <common>
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
}`,g1=`#if DEPTH_PACKING == 3200
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
}`,_1=`#define DISTANCE
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
}`,v1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`uniform float scale;
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
}`,M1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,b1=`uniform vec3 diffuse;
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
}`,T1=`#define LAMBERT
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
}`,A1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,R1=`#define MATCAP
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
}`,C1=`#define MATCAP
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
}`,w1=`#define NORMAL
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
}`,N1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,D1=`#define PHONG
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
}`,U1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,L1=`#define STANDARD
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
}`,O1=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,P1=`#define TOON
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
}`,I1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,z1=`uniform float size;
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
}`,B1=`uniform vec3 diffuse;
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
}`,F1=`#include <common>
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
}`,H1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,G1=`uniform float rotation;
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
}`,V1=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:cb,alphahash_pars_fragment:ub,alphamap_fragment:fb,alphamap_pars_fragment:db,alphatest_fragment:hb,alphatest_pars_fragment:pb,aomap_fragment:mb,aomap_pars_fragment:gb,batching_pars_vertex:_b,batching_vertex:vb,begin_vertex:xb,beginnormal_vertex:Sb,bsdfs:yb,iridescence_fragment:Mb,bumpmap_pars_fragment:Eb,clipping_planes_fragment:bb,clipping_planes_pars_fragment:Tb,clipping_planes_pars_vertex:Ab,clipping_planes_vertex:Rb,color_fragment:Cb,color_pars_fragment:wb,color_pars_vertex:Nb,color_vertex:Db,common:Ub,cube_uv_reflection_fragment:Lb,defaultnormal_vertex:Ob,displacementmap_pars_vertex:Pb,displacementmap_vertex:Ib,emissivemap_fragment:zb,emissivemap_pars_fragment:Bb,colorspace_fragment:Fb,colorspace_pars_fragment:Hb,envmap_fragment:Gb,envmap_common_pars_fragment:Vb,envmap_pars_fragment:Xb,envmap_pars_vertex:kb,envmap_physical_pars_fragment:tT,envmap_vertex:Wb,fog_vertex:qb,fog_pars_vertex:Yb,fog_fragment:jb,fog_pars_fragment:Zb,gradientmap_pars_fragment:Kb,lightmap_pars_fragment:Qb,lights_lambert_fragment:Jb,lights_lambert_pars_fragment:$b,lights_pars_begin:eT,lights_toon_fragment:nT,lights_toon_pars_fragment:iT,lights_phong_fragment:aT,lights_phong_pars_fragment:rT,lights_physical_fragment:sT,lights_physical_pars_fragment:lT,lights_fragment_begin:oT,lights_fragment_maps:cT,lights_fragment_end:uT,lightprobes_pars_fragment:fT,logdepthbuf_fragment:dT,logdepthbuf_pars_fragment:hT,logdepthbuf_pars_vertex:pT,logdepthbuf_vertex:mT,map_fragment:gT,map_pars_fragment:_T,map_particle_fragment:vT,map_particle_pars_fragment:xT,metalnessmap_fragment:ST,metalnessmap_pars_fragment:yT,morphinstance_vertex:MT,morphcolor_vertex:ET,morphnormal_vertex:bT,morphtarget_pars_vertex:TT,morphtarget_vertex:AT,normal_fragment_begin:RT,normal_fragment_maps:CT,normal_pars_fragment:wT,normal_pars_vertex:NT,normal_vertex:DT,normalmap_pars_fragment:UT,clearcoat_normal_fragment_begin:LT,clearcoat_normal_fragment_maps:OT,clearcoat_pars_fragment:PT,iridescence_pars_fragment:IT,opaque_fragment:zT,packing:BT,premultiplied_alpha_fragment:FT,project_vertex:HT,dithering_fragment:GT,dithering_pars_fragment:VT,roughnessmap_fragment:XT,roughnessmap_pars_fragment:kT,shadowmap_pars_fragment:WT,shadowmap_pars_vertex:qT,shadowmap_vertex:YT,shadowmask_pars_fragment:jT,skinbase_vertex:ZT,skinning_pars_vertex:KT,skinning_vertex:QT,skinnormal_vertex:JT,specularmap_fragment:$T,specularmap_pars_fragment:e1,tonemapping_fragment:t1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:a1,uv_pars_fragment:r1,uv_pars_vertex:s1,uv_vertex:l1,worldpos_vertex:o1,background_vert:c1,background_frag:u1,backgroundCube_vert:f1,backgroundCube_frag:d1,cube_vert:h1,cube_frag:p1,depth_vert:m1,depth_frag:g1,distance_vert:_1,distance_frag:v1,equirect_vert:x1,equirect_frag:S1,linedashed_vert:y1,linedashed_frag:M1,meshbasic_vert:E1,meshbasic_frag:b1,meshlambert_vert:T1,meshlambert_frag:A1,meshmatcap_vert:R1,meshmatcap_frag:C1,meshnormal_vert:w1,meshnormal_frag:N1,meshphong_vert:D1,meshphong_frag:U1,meshphysical_vert:L1,meshphysical_frag:O1,meshtoon_vert:P1,meshtoon_frag:I1,points_vert:z1,points_frag:B1,shadow_vert:F1,shadow_frag:H1,sprite_vert:G1,sprite_frag:V1},He={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new pe},probesMax:{value:new pe},probesResolution:{value:new pe}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},ia={basic:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Xn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Xn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new zt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Xn([He.points,He.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Xn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Xn([He.common,He.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Xn([He.sprite,He.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Xn([He.common,He.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Xn([He.lights,He.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};ia.physical={uniforms:Xn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const du={r:0,b:0,g:0},X1=new _n,Hx=new ft;Hx.set(-1,0,0,0,1,0,0,0,1);function k1(l,t,i,s,c,f){const d=new zt(0);let h=c===!0?0:1,g,m,x=null,_=0,v=null;function E(O){let V=O.isScene===!0?O.background:null;if(V&&V.isTexture){const C=O.backgroundBlurriness>0;V=t.get(V,C)}return V}function R(O){let V=!1;const C=E(O);C===null?y(d,h):C&&C.isColor&&(y(C,1),V=!0);const U=l.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(l.autoClear||V)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function N(O,V){const C=E(V);C&&(C.isCubeTexture||C.mapping===Au)?(m===void 0&&(m=new ci(new Mo(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:al(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(X1.makeRotationFromEuler(V.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Hx),m.material.toneMapped=wt.getTransfer(C.colorSpace)!==qt,(x!==C||_!==C.version||v!==l.toneMapping)&&(m.material.needsUpdate=!0,x=C,_=C.version,v=l.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(g===void 0&&(g=new ci(new gr(2,2),new Hi({name:"BackgroundMaterial",uniforms:al(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=C,g.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,g.material.toneMapped=wt.getTransfer(C.colorSpace)!==qt,C.matrixAutoUpdate===!0&&C.updateMatrix(),g.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||_!==C.version||v!==l.toneMapping)&&(g.material.needsUpdate=!0,x=C,_=C.version,v=l.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null))}function y(O,V){O.getRGB(du,Ix(l)),i.buffers.color.setClear(du.r,du.g,du.b,V,f)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,V=1){d.set(O),h=V,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,y(d,h)},render:R,addToRenderList:N,dispose:S}}function W1(l,t){const i=l.getParameter(l.MAX_VERTEX_ATTRIBS),s={},c=v(null);let f=c,d=!1;function h(j,ne,fe,J,ee){let W=!1;const q=_(j,J,fe,ne);f!==q&&(f=q,m(f.object)),W=E(j,J,fe,ee),W&&R(j,J,fe,ee),ee!==null&&t.update(ee,l.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,C(j,ne,fe,J),ee!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function g(){return l.createVertexArray()}function m(j){return l.bindVertexArray(j)}function x(j){return l.deleteVertexArray(j)}function _(j,ne,fe,J){const ee=J.wireframe===!0;let W=s[ne.id];W===void 0&&(W={},s[ne.id]=W);const q=j.isInstancedMesh===!0?j.id:0;let de=W[q];de===void 0&&(de={},W[q]=de);let se=de[fe.id];se===void 0&&(se={},de[fe.id]=se);let ce=se[ee];return ce===void 0&&(ce=v(g()),se[ee]=ce),ce}function v(j){const ne=[],fe=[],J=[];for(let ee=0;ee<i;ee++)ne[ee]=0,fe[ee]=0,J[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:fe,attributeDivisors:J,object:j,attributes:{},index:null}}function E(j,ne,fe,J){const ee=f.attributes,W=ne.attributes;let q=0;const de=fe.getAttributes();for(const se in de)if(de[se].location>=0){const Me=ee[se];let je=W[se];if(je===void 0&&(se==="instanceMatrix"&&j.instanceMatrix&&(je=j.instanceMatrix),se==="instanceColor"&&j.instanceColor&&(je=j.instanceColor)),Me===void 0||Me.attribute!==je||je&&Me.data!==je.data)return!0;q++}return f.attributesNum!==q||f.index!==J}function R(j,ne,fe,J){const ee={},W=ne.attributes;let q=0;const de=fe.getAttributes();for(const se in de)if(de[se].location>=0){let Me=W[se];Me===void 0&&(se==="instanceMatrix"&&j.instanceMatrix&&(Me=j.instanceMatrix),se==="instanceColor"&&j.instanceColor&&(Me=j.instanceColor));const je={};je.attribute=Me,Me&&Me.data&&(je.data=Me.data),ee[se]=je,q++}f.attributes=ee,f.attributesNum=q,f.index=J}function N(){const j=f.newAttributes;for(let ne=0,fe=j.length;ne<fe;ne++)j[ne]=0}function y(j){S(j,0)}function S(j,ne){const fe=f.newAttributes,J=f.enabledAttributes,ee=f.attributeDivisors;fe[j]=1,J[j]===0&&(l.enableVertexAttribArray(j),J[j]=1),ee[j]!==ne&&(l.vertexAttribDivisor(j,ne),ee[j]=ne)}function O(){const j=f.newAttributes,ne=f.enabledAttributes;for(let fe=0,J=ne.length;fe<J;fe++)ne[fe]!==j[fe]&&(l.disableVertexAttribArray(fe),ne[fe]=0)}function V(j,ne,fe,J,ee,W,q){q===!0?l.vertexAttribIPointer(j,ne,fe,ee,W):l.vertexAttribPointer(j,ne,fe,J,ee,W)}function C(j,ne,fe,J){N();const ee=J.attributes,W=fe.getAttributes(),q=ne.defaultAttributeValues;for(const de in W){const se=W[de];if(se.location>=0){let ce=ee[de];if(ce===void 0&&(de==="instanceMatrix"&&j.instanceMatrix&&(ce=j.instanceMatrix),de==="instanceColor"&&j.instanceColor&&(ce=j.instanceColor)),ce!==void 0){const Me=ce.normalized,je=ce.itemSize,ke=t.get(ce);if(ke===void 0)continue;const B=ke.buffer,me=ke.type,Ae=ke.bytesPerElement,Z=me===l.INT||me===l.UNSIGNED_INT||ce.gpuType===Lp;if(ce.isInterleavedBufferAttribute){const he=ce.data,Te=he.stride,we=ce.offset;if(he.isInstancedInterleavedBuffer){for(let ve=0;ve<se.locationSize;ve++)S(se.location+ve,he.meshPerAttribute);j.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ve=0;ve<se.locationSize;ve++)y(se.location+ve);l.bindBuffer(l.ARRAY_BUFFER,B);for(let ve=0;ve<se.locationSize;ve++)V(se.location+ve,je/se.locationSize,me,Me,Te*Ae,(we+je/se.locationSize*ve)*Ae,Z)}else{if(ce.isInstancedBufferAttribute){for(let he=0;he<se.locationSize;he++)S(se.location+he,ce.meshPerAttribute);j.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let he=0;he<se.locationSize;he++)y(se.location+he);l.bindBuffer(l.ARRAY_BUFFER,B);for(let he=0;he<se.locationSize;he++)V(se.location+he,je/se.locationSize,me,Me,je*Ae,je/se.locationSize*he*Ae,Z)}}else if(q!==void 0){const Me=q[de];if(Me!==void 0)switch(Me.length){case 2:l.vertexAttrib2fv(se.location,Me);break;case 3:l.vertexAttrib3fv(se.location,Me);break;case 4:l.vertexAttrib4fv(se.location,Me);break;default:l.vertexAttrib1fv(se.location,Me)}}}}O()}function U(){P();for(const j in s){const ne=s[j];for(const fe in ne){const J=ne[fe];for(const ee in J){const W=J[ee];for(const q in W)x(W[q].object),delete W[q];delete J[ee]}}delete s[j]}}function L(j){if(s[j.id]===void 0)return;const ne=s[j.id];for(const fe in ne){const J=ne[fe];for(const ee in J){const W=J[ee];for(const q in W)x(W[q].object),delete W[q];delete J[ee]}}delete s[j.id]}function z(j){for(const ne in s){const fe=s[ne];for(const J in fe){const ee=fe[J];if(ee[j.id]===void 0)continue;const W=ee[j.id];for(const q in W)x(W[q].object),delete W[q];delete ee[j.id]}}}function b(j){for(const ne in s){const fe=s[ne],J=j.isInstancedMesh===!0?j.id:0,ee=fe[J];if(ee!==void 0){for(const W in ee){const q=ee[W];for(const de in q)x(q[de].object),delete q[de];delete ee[W]}delete fe[J],Object.keys(fe).length===0&&delete s[ne]}}}function P(){k(),d=!0,f!==c&&(f=c,m(f.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:P,resetDefaultState:k,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:z,initAttributes:N,enableAttribute:y,disableUnusedAttributes:O}}function q1(l,t,i){let s;function c(g){s=g}function f(g,m){l.drawArrays(s,g,m),i.update(m,s,1)}function d(g,m,x){x!==0&&(l.drawArraysInstanced(s,g,m,x),i.update(m,s,x))}function h(g,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,m,0,x);let v=0;for(let E=0;E<x;E++)v+=m[E];i.update(v,s,1)}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function Y1(l,t,i,s){let c;function f(){if(c!==void 0)return c;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");c=l.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(z){return!(z!==zi&&s.convert(z)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const b=z===ca&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Ti&&z!==ra&&!b&&s.convert(z)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE))}function g(z){if(z==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const x=g(m);x!==m&&(st("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),R=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=l.getParameter(l.MAX_TEXTURE_SIZE),y=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),S=l.getParameter(l.MAX_VERTEX_ATTRIBS),O=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),V=l.getParameter(l.MAX_VARYING_VECTORS),C=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),U=l.getParameter(l.MAX_SAMPLES),L=l.getParameter(l.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:R,maxTextureSize:N,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:O,maxVaryings:V,maxFragmentUniforms:C,maxSamples:U,samples:L}}function j1(l){const t=this;let i=null,s=0,c=!1,f=!1;const d=new pr,h=new ft,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const E=_.length!==0||v||s!==0||c;return c=v,s=_.length,E},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(_,v){i=x(_,v,0)},this.setState=function(_,v,E){const R=_.clippingPlanes,N=_.clipIntersection,y=_.clipShadows,S=l.get(_);if(!c||R===null||R.length===0||f&&!y)f?x(null):m();else{const O=f?0:s,V=O*4;let C=S.clippingState||null;g.value=C,C=x(R,v,V,E);for(let U=0;U!==V;++U)C[U]=i[U];S.clippingState=C,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=O}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(_,v,E,R){const N=_!==null?_.length:0;let y=null;if(N!==0){if(y=g.value,R!==!0||y===null){const S=E+N*4,O=v.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<S)&&(y=new Float32Array(S));for(let V=0,C=E;V!==N;++V,C+=4)d.copy(_[V]).applyMatrix4(O,h),d.normal.toArray(y,C),y[C+3]=d.constant}g.value=y,g.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,y}}const el=4,Z1=6,K1=20,Q1=256,oo=new Bx,Iv=new zt;let Ph=null,Ih=0,zh=0,Bh=!1;const J1=new pe,kr=new pe;class zv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,c=100,f={}){const{size:d=256,position:h=J1}=f;Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,s,c,g,h),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,Ih,zh),this._renderer.xr.enabled=Bh,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===jr||t.mapping===il?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:ca,format:zi,colorSpace:Mu,depthBuffer:!1},c=Bv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bv(t,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$1(f)),this._blurMaterial=tA(f,t,i),this._ggxMaterial=eA(f,t,i)}return c}_compileMaterial(t){const i=new ci(new Oa,t);this._renderer.compile(i,oo)}_sceneToCubeUV(t,i,s,c,f){const g=new bi(90,1,i,s),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,E=_.toneMapping;_.getClearColor(Iv),_.toneMapping=la,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(c),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new Mo,new po({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,y=N.material;let S=!1;const O=t.background;O?O.isColor&&(y.color.copy(O),t.background=null,S=!0):(y.color.copy(Iv),S=!0);for(let V=0;V<6;V++){const C=V%3;C===0?(g.up.set(0,m[V],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+x[V],f.y,f.z)):C===1?(g.up.set(0,0,m[V]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+x[V],f.z)):(g.up.set(0,m[V],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+x[V]));const U=this._cubeSize;Js(c,C*U,V>2?U:0,U,U),_.setRenderTarget(c),S&&_.render(N,g),_.render(t,g)}_.toneMapping=E,_.autoClear=v,t.background=O}_textureToCubeUV(t,i){const s=this._renderer,c=t.mapping===jr||t.mapping===il;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fv());const f=c?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=t;const g=this._cubeSize;Js(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,oo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const c=this._lodMeshes.length;for(let f=1;f<c;f++)this._applyGGXFilter(t,f-1,f);i.autoClear=s}_applyGGXFilter(t,i,s){const c=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const g=d.uniforms,m=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-x*x),v=m*1.25,E=_*v,{_lodMax:R}=this,N=this._sizeLods[s],y=3*N*(s>R-el?s-R+el:0),S=4*(this._cubeSize-N);g.envMap.value=t.texture,g.roughness.value=E,g.mipInt.value=R-i,Js(f,y,S,3*N,2*N),c.setRenderTarget(f),c.render(h,oo),g.envMap.value=f.texture,g.roughness.value=0,g.mipInt.value=R-s,Js(t,y,S,3*N,2*N),c.setRenderTarget(t),c.render(h,oo)}_blur(t,i,s,c){const f=this._pingPongRenderTarget,d=Math.min(c,Math.PI)/Math.SQRT2;this._blurPass(t,f,i,s,d),this._blurPass(f,t,s,s,d)}_blurPass(t,i,s,c,f){const d=this._renderer,h=this._blurMaterial,g=this._lodMeshes[c];g.material=h;const m=h.uniforms;m.envMap.value=t.texture,m.sigma.value=f,m.mipInt.value=this._lodMax-s;const x=this._sizeLods[c],_=3*x*(c>this._lodMax-el?c-this._lodMax+el:0),v=4*(this._cubeSize-x);Js(i,_,v,3*x,2*x),d.setRenderTarget(i),d.render(g,oo)}}function $1(l){const t=[],i=[];let s=l;const c=l-el+1+Z1;for(let f=0;f<c;f++){const d=Math.pow(2,s);t.push(d);const h=1/(d-2),g=-h,m=1+h,x=[g,g,m,g,m,m,g,g,m,m,g,m],_=6,v=6,E=3,R=new Float32Array(E*v*_),N=new Float32Array(E*v*_);for(let S=0;S<_;S++){const O=S%3*2/3-1,V=S>2?0:-1,C=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];R.set(C,E*v*S);for(let U=0;U<v;U++){const L=x[U*2]*2-1,z=x[U*2+1]*2-1;S===0?kr.set(1,z,L):S===1?kr.set(-L,1,-z):S===2?kr.set(-L,z,1):S===3?kr.set(-1,z,-L):S===4?kr.set(-L,-1,z):kr.set(L,z,-1),kr.toArray(N,(S*v+U)*E)}}const y=new Oa;y.setAttribute("position",new Fi(R,E)),y.setAttribute("outputDirection",new Fi(N,E)),i.push(new ci(y,null)),s>el&&s--}return{lodMeshes:i,sizeLods:t}}function Bv(l,t,i){const s=new Bi(l,t,i);return s.texture.mapping=Au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Js(l,t,i,s,c){l.viewport.set(t,i,s,c),l.scissor.set(t,i,s,c)}function eA(l,t,i){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Q1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function tA(l,t,i){return new Hi({name:"SphericalGaussianBlur",defines:{SAMPLES:K1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Fv(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Hv(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Cu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gx extends Bi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},c=[s,s,s,s,s,s];this.texture=new Ox(c),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new Mo(5,5,5),f=new Hi({name:"CubemapFromEquirect",uniforms:al(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Na});f.uniforms.tEquirect.value=i;const d=new ci(c,f),h=i.minFilter;return i.minFilter===Wr&&(i.minFilter=In),new ab(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,c=!0){const f=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,c);t.setRenderTarget(f)}}function nA(l){let t=new WeakMap,i=new WeakMap,s=null;function c(v,E=!1){return v==null?null:E?d(v):f(v)}function f(v){if(v&&v.isTexture){const E=v.mapping;if(E===oh||E===ch)if(t.has(v)){const R=t.get(v).texture;return h(R,v.mapping)}else{const R=v.image;if(R&&R.height>0){const N=new Gx(R.height);return N.fromEquirectangularTexture(l,v),t.set(v,N),v.addEventListener("dispose",m),h(N.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const E=v.mapping,R=E===oh||E===ch,N=E===jr||E===il;if(R||N){let y=i.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return s===null&&(s=new zv(l)),y=R?s.fromEquirectangular(v,y):s.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const O=v.image;return R&&O&&O.height>0||N&&O&&g(O)?(s===null&&(s=new zv(l)),y=R?s.fromEquirectangular(v):s.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",x),y.texture):null}}}return v}function h(v,E){return E===oh?v.mapping=jr:E===ch&&(v.mapping=il),v}function g(v){let E=0;const R=6;for(let N=0;N<R;N++)v[N]!==void 0&&E++;return E===R}function m(v){const E=v.target;E.removeEventListener("dispose",m);const R=t.get(E);R!==void 0&&(t.delete(E),R.dispose())}function x(v){const E=v.target;E.removeEventListener("dispose",x);const R=i.get(E);R!==void 0&&(i.delete(E),R.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:c,dispose:_}}function iA(l){const t={};function i(s){if(t[s]!==void 0)return t[s];const c=l.getExtension(s);return t[s]=c,c}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const c=i(s);return c===null&&tl("WebGLRenderer: "+s+" extension not supported."),c}}}function aA(l,t,i,s){const c={},f=new WeakMap;function d(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const R in v.attributes)t.remove(v.attributes[R]);v.removeEventListener("dispose",d),delete c[v.id];const E=f.get(v);E&&(t.remove(E),f.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return c[v.id]===!0||(v.addEventListener("dispose",d),c[v.id]=!0,i.memory.geometries++),v}function g(_){const v=_.attributes;for(const E in v)t.update(v[E],l.ARRAY_BUFFER)}function m(_){const v=[],E=_.index,R=_.attributes.position;let N=0;if(R===void 0)return;if(E!==null){const O=E.array;N=E.version;for(let V=0,C=O.length;V<C;V+=3){const U=O[V+0],L=O[V+1],z=O[V+2];v.push(U,L,L,z,z,U)}}else{const O=R.array;N=R.version;for(let V=0,C=O.length/3-1;V<C;V+=3){const U=V+0,L=V+1,z=V+2;v.push(U,L,L,z,z,U)}}const y=new(R.count>=65535?Ux:Dx)(v,1);y.version=N;const S=f.get(_);S&&t.remove(S),f.set(_,y)}function x(_){const v=f.get(_);if(v){const E=_.index;E!==null&&v.version<E.version&&m(_)}else m(_);return f.get(_)}return{get:h,update:g,getWireframeAttribute:x}}function rA(l,t,i){let s;function c(_){s=_}let f,d;function h(_){f=_.type,d=_.bytesPerElement}function g(_,v){l.drawElements(s,v,f,_*d),i.update(v,s,1)}function m(_,v,E){E!==0&&(l.drawElementsInstanced(s,v,f,_*d,E),i.update(v,s,E))}function x(_,v,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,f,_,0,E);let N=0;for(let y=0;y<E;y++)N+=v[y];i.update(N,s,1)}this.setMode=c,this.setIndex=h,this.render=g,this.renderInstances=m,this.renderMultiDraw=x}function sA(l){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case l.TRIANGLES:i.triangles+=h*(f/3);break;case l.LINES:i.lines+=h*(f/2);break;case l.LINE_STRIP:i.lines+=h*(f-1);break;case l.LINE_LOOP:i.lines+=h*f;break;case l.POINTS:i.points+=h*f;break;default:Ot("WebGLInfo: Unknown draw mode:",d);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:c,update:s}}function lA(l,t,i){const s=new WeakMap,c=new cn;function f(d,h,g){const m=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let k=function(){b.dispose(),s.delete(h),h.removeEventListener("dispose",k)};var E=k;v!==void 0&&v.texture.dispose();const R=h.morphAttributes.position!==void 0,N=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],V=h.morphAttributes.color||[];let C=0;R===!0&&(C=1),N===!0&&(C=2),y===!0&&(C=3);let U=h.attributes.position.count*C,L=1;U>t.maxTextureSize&&(L=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const z=new Float32Array(U*L*4*_),b=new Cx(z,U,L,_);b.type=ra,b.needsUpdate=!0;const P=C*4;for(let j=0;j<_;j++){const ne=S[j],fe=O[j],J=V[j],ee=U*L*4*j;for(let W=0;W<ne.count;W++){const q=W*P;R===!0&&(c.fromBufferAttribute(ne,W),z[ee+q+0]=c.x,z[ee+q+1]=c.y,z[ee+q+2]=c.z,z[ee+q+3]=0),N===!0&&(c.fromBufferAttribute(fe,W),z[ee+q+4]=c.x,z[ee+q+5]=c.y,z[ee+q+6]=c.z,z[ee+q+7]=0),y===!0&&(c.fromBufferAttribute(J,W),z[ee+q+8]=c.x,z[ee+q+9]=c.y,z[ee+q+10]=c.z,z[ee+q+11]=J.itemSize===4?c.w:1)}}v={count:_,texture:b,size:new Bt(U,L)},s.set(h,v),h.addEventListener("dispose",k)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(l,"morphTexture",d.morphTexture,i);else{let R=0;for(let y=0;y<m.length;y++)R+=m[y];const N=h.morphTargetsRelative?1:1-R;g.getUniforms().setValue(l,"morphTargetBaseInfluence",N),g.getUniforms().setValue(l,"morphTargetInfluences",m)}g.getUniforms().setValue(l,"morphTargetsTexture",v.texture,i),g.getUniforms().setValue(l,"morphTargetsTextureSize",v.size)}return{update:f}}function oA(l,t,i,s,c){let f=new WeakMap;function d(m){const x=c.render.frame,_=m.geometry,v=t.get(m,_);if(f.get(v)!==x&&(t.update(v),f.set(v,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",g)===!1&&m.addEventListener("dispose",g),f.get(m)!==x&&(i.update(m.instanceMatrix,l.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,l.ARRAY_BUFFER),f.set(m,x))),m.isSkinnedMesh){const E=m.skeleton;f.get(E)!==x&&(E.update(),f.set(E,x))}return v}function h(){f=new WeakMap}function g(m){const x=m.target;x.removeEventListener("dispose",g),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:h}}const cA={[dx]:"LINEAR_TONE_MAPPING",[hx]:"REINHARD_TONE_MAPPING",[px]:"CINEON_TONE_MAPPING",[mx]:"ACES_FILMIC_TONE_MAPPING",[_x]:"AGX_TONE_MAPPING",[vx]:"NEUTRAL_TONE_MAPPING",[gx]:"CUSTOM_TONE_MAPPING"};function uA(l,t,i,s,c,f){const d=new Bi(t,i,{type:l,depthBuffer:c,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,g=null;const m=new Oa;m.setAttribute("position",new Ua([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ua([0,2,0,0,2,0],2));const x=new QE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new ci(m,x),v=new Bx(-1,1,1,-1,0,1);let E=null,R=null,N=!1,y,S=null,O=[],V=!1;this.setSize=function(C,U){d.setSize(C,U),h!==null&&h.setSize(C,U),g!==null&&g.setSize(C,U);for(let L=0;L<O.length;L++){const z=O[L];z.setSize&&z.setSize(C,U)}},this.setEffects=function(C){O=C,V=O.length>0&&O[0].isRenderPass===!0;const U=d.width,L=d.height;O.length>0&&h===null&&(h=new Bi(U,L,{type:ca,depthBuffer:!1,stencilBuffer:!1}),g=new Bi(U,L,{type:ca,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<O.length;z++){const b=O[z];b.setSize&&b.setSize(U,L)}},this.begin=function(C,U){if(N||C.toneMapping===la&&O.length===0)return!1;if(S=U,U!==null){const L=U.width,z=U.height;(d.width!==L||d.height!==z)&&this.setSize(L,z)}return V===!1&&C.setRenderTarget(d),y=C.toneMapping,C.toneMapping=la,!0},this.hasRenderPass=function(){return V},this.end=function(C,U){C.toneMapping=y,N=!0;let L=d,z=h;for(let b=0;b<O.length;b++){const P=O[b];P.enabled!==!1&&(P.render(C,z,L,U),P.needsSwap!==!1&&(L=z,z=z===h?g:h))}if(E!==C.outputColorSpace||R!==C.toneMapping){E=C.outputColorSpace,R=C.toneMapping,x.defines={},wt.getTransfer(E)===qt&&(x.defines.SRGB_TRANSFER="");const b=cA[R];b&&(x.defines[b]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(S),C.render(_,v),S=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),g!==null&&g.dispose(),m.dispose(),x.dispose()}}const Vx=new zn,wp=new xo(1,1),Xx=new Cx,kx=new RE,Wx=new Ox,Gv=[],Vv=[],Xv=new Float32Array(16),kv=new Float32Array(9),Wv=new Float32Array(4);function sl(l,t,i){const s=l[0];if(s<=0||s>0)return l;const c=t*i;let f=Gv[c];if(f===void 0&&(f=new Float32Array(c),Gv[c]=f),t!==0){s.toArray(f,0);for(let d=1,h=0;d!==t;++d)h+=i,l[d].toArray(f,h)}return f}function Sn(l,t){if(l.length!==t.length)return!1;for(let i=0,s=l.length;i<s;i++)if(l[i]!==t[i])return!1;return!0}function yn(l,t){for(let i=0,s=t.length;i<s;i++)l[i]=t[i]}function wu(l,t){let i=Vv[t];i===void 0&&(i=new Int32Array(t),Vv[t]=i);for(let s=0;s!==t;++s)i[s]=l.allocateTextureUnit();return i}function fA(l,t){const i=this.cache;i[0]!==t&&(l.uniform1f(this.addr,t),i[0]=t)}function dA(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;l.uniform2fv(this.addr,t),yn(i,t)}}function hA(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;l.uniform3fv(this.addr,t),yn(i,t)}}function pA(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;l.uniform4fv(this.addr,t),yn(i,t)}}function mA(l,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;l.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Wv.set(s),l.uniformMatrix2fv(this.addr,!1,Wv),yn(i,s)}}function gA(l,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;l.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;kv.set(s),l.uniformMatrix3fv(this.addr,!1,kv),yn(i,s)}}function _A(l,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;l.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Xv.set(s),l.uniformMatrix4fv(this.addr,!1,Xv),yn(i,s)}}function vA(l,t){const i=this.cache;i[0]!==t&&(l.uniform1i(this.addr,t),i[0]=t)}function xA(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;l.uniform2iv(this.addr,t),yn(i,t)}}function SA(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;l.uniform3iv(this.addr,t),yn(i,t)}}function yA(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;l.uniform4iv(this.addr,t),yn(i,t)}}function MA(l,t){const i=this.cache;i[0]!==t&&(l.uniform1ui(this.addr,t),i[0]=t)}function EA(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;l.uniform2uiv(this.addr,t),yn(i,t)}}function bA(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;l.uniform3uiv(this.addr,t),yn(i,t)}}function TA(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;l.uniform4uiv(this.addr,t),yn(i,t)}}function AA(l,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(l.uniform1i(this.addr,c),s[0]=c);let f;this.type===l.SAMPLER_2D_SHADOW?(wp.compareFunction=i.isReversedDepthBuffer()?Hp:Fp,f=wp):f=Vx,i.setTexture2D(t||f,c)}function RA(l,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(l.uniform1i(this.addr,c),s[0]=c),i.setTexture3D(t||kx,c)}function CA(l,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(l.uniform1i(this.addr,c),s[0]=c),i.setTextureCube(t||Wx,c)}function wA(l,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(l.uniform1i(this.addr,c),s[0]=c),i.setTexture2DArray(t||Xx,c)}function NA(l){switch(l){case 5126:return fA;case 35664:return dA;case 35665:return hA;case 35666:return pA;case 35674:return mA;case 35675:return gA;case 35676:return _A;case 5124:case 35670:return vA;case 35667:case 35671:return xA;case 35668:case 35672:return SA;case 35669:case 35673:return yA;case 5125:return MA;case 36294:return EA;case 36295:return bA;case 36296:return TA;case 35678:case 36198:case 36298:case 36306:case 35682:return AA;case 35679:case 36299:case 36307:return RA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return wA}}function DA(l,t){l.uniform1fv(this.addr,t)}function UA(l,t){const i=sl(t,this.size,2);l.uniform2fv(this.addr,i)}function LA(l,t){const i=sl(t,this.size,3);l.uniform3fv(this.addr,i)}function OA(l,t){const i=sl(t,this.size,4);l.uniform4fv(this.addr,i)}function PA(l,t){const i=sl(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,i)}function IA(l,t){const i=sl(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,i)}function zA(l,t){const i=sl(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,i)}function BA(l,t){l.uniform1iv(this.addr,t)}function FA(l,t){l.uniform2iv(this.addr,t)}function HA(l,t){l.uniform3iv(this.addr,t)}function GA(l,t){l.uniform4iv(this.addr,t)}function VA(l,t){l.uniform1uiv(this.addr,t)}function XA(l,t){l.uniform2uiv(this.addr,t)}function kA(l,t){l.uniform3uiv(this.addr,t)}function WA(l,t){l.uniform4uiv(this.addr,t)}function qA(l,t,i){const s=this.cache,c=t.length,f=wu(i,c);Sn(s,f)||(l.uniform1iv(this.addr,f),yn(s,f));let d;this.type===l.SAMPLER_2D_SHADOW?d=wp:d=Vx;for(let h=0;h!==c;++h)i.setTexture2D(t[h]||d,f[h])}function YA(l,t,i){const s=this.cache,c=t.length,f=wu(i,c);Sn(s,f)||(l.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTexture3D(t[d]||kx,f[d])}function jA(l,t,i){const s=this.cache,c=t.length,f=wu(i,c);Sn(s,f)||(l.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTextureCube(t[d]||Wx,f[d])}function ZA(l,t,i){const s=this.cache,c=t.length,f=wu(i,c);Sn(s,f)||(l.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==c;++d)i.setTexture2DArray(t[d]||Xx,f[d])}function KA(l){switch(l){case 5126:return DA;case 35664:return UA;case 35665:return LA;case 35666:return OA;case 35674:return PA;case 35675:return IA;case 35676:return zA;case 5124:case 35670:return BA;case 35667:case 35671:return FA;case 35668:case 35672:return HA;case 35669:case 35673:return GA;case 5125:return VA;case 36294:return XA;case 36295:return kA;case 36296:return WA;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return YA;case 35680:case 36300:case 36308:case 36293:return jA;case 36289:case 36303:case 36311:case 36292:return ZA}}class QA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=NA(i.type)}}class JA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=KA(i.type)}}class $A{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(t,i[h.id],s)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function qv(l,t){l.seq.push(t),l.map[t.id]=t}function e3(l,t,i){const s=l.name,c=s.length;for(Fh.lastIndex=0;;){const f=Fh.exec(s),d=Fh.lastIndex;let h=f[1];const g=f[2]==="]",m=f[3];if(g&&(h=h|0),m===void 0||m==="["&&d+2===c){qv(i,m===void 0?new QA(h,l,t):new JA(h,l,t));break}else{let _=i.map[h];_===void 0&&(_=new $A(h),qv(i,_)),i=_}}}class xu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),g=t.getUniformLocation(i,h.name);e3(h,g,this)}const c=[],f=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?c.push(d):f.push(d);c.length>0&&(this.seq=c.concat(f))}setValue(t,i,s,c){const f=this.map[i];f!==void 0&&f.setValue(t,s,c)}setOptional(t,i,s){const c=i[s];c!==void 0&&this.setValue(t,s,c)}static upload(t,i,s,c){for(let f=0,d=i.length;f!==d;++f){const h=i[f],g=s[h.id];g.needsUpdate!==!1&&h.setValue(t,g.value,c)}}static seqWithValue(t,i){const s=[];for(let c=0,f=t.length;c!==f;++c){const d=t[c];d.id in i&&s.push(d)}return s}}function Yv(l,t,i){const s=l.createShader(t);return l.shaderSource(s,i),l.compileShader(s),s}const t3=37297;let n3=0;function i3(l,t){const i=l.split(`
`),s=[],c=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let d=c;d<f;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const jv=new ft;function a3(l){wt._getMatrix(jv,wt.workingColorSpace,l);const t=`mat3( ${jv.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(l)){case Eu:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",l),[t,"LinearTransferOETF"]}}function Zv(l,t,i){const s=l.getShaderParameter(t,l.COMPILE_STATUS),f=(l.getShaderInfoLog(t)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+i3(l.getShaderSource(t),h)}else return f}function r3(l,t){const i=a3(t);return[`vec4 ${l}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const s3={[dx]:"Linear",[hx]:"Reinhard",[px]:"Cineon",[mx]:"ACESFilmic",[_x]:"AgX",[vx]:"Neutral",[gx]:"Custom"};function l3(l,t){const i=s3[t];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+l+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+l+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const hu=new pe;function o3(){wt.getLuminanceCoefficients(hu);const l=hu.x.toFixed(4),t=hu.y.toFixed(4),i=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c3(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function u3(l){const t=[];for(const i in l){const s=l[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function f3(l,t){const i={},s=l.getProgramParameter(t,l.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const f=l.getActiveAttrib(t,c),d=f.name;let h=1;f.type===l.FLOAT_MAT2&&(h=2),f.type===l.FLOAT_MAT3&&(h=3),f.type===l.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:l.getAttribLocation(t,d),locationSize:h}}return i}function fo(l){return l!==""}function Kv(l,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qv(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const d3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Np(l){return l.replace(d3,p3)}const h3=new Map;function p3(l,t){let i=mt[t];if(i===void 0){const s=h3.get(t);if(s!==void 0)i=mt[s],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Np(i)}const m3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jv(l){return l.replace(m3,g3)}function g3(l,t,i,s){let c="";for(let f=parseInt(t);f<parseInt(i);f++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function $v(l){let t=`precision ${l.precision} float;
	precision ${l.precision} int;
	precision ${l.precision} sampler2D;
	precision ${l.precision} samplerCube;
	precision ${l.precision} sampler3D;
	precision ${l.precision} sampler2DArray;
	precision ${l.precision} sampler2DShadow;
	precision ${l.precision} samplerCubeShadow;
	precision ${l.precision} sampler2DArrayShadow;
	precision ${l.precision} isampler2D;
	precision ${l.precision} isampler3D;
	precision ${l.precision} isamplerCube;
	precision ${l.precision} isampler2DArray;
	precision ${l.precision} usampler2D;
	precision ${l.precision} usampler3D;
	precision ${l.precision} usamplerCube;
	precision ${l.precision} usampler2DArray;
	`;return l.precision==="highp"?t+=`
#define HIGH_PRECISION`:l.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const _3={[pu]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function v3(l){return _3[l.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const x3={[jr]:"ENVMAP_TYPE_CUBE",[il]:"ENVMAP_TYPE_CUBE",[Au]:"ENVMAP_TYPE_CUBE_UV"};function S3(l){return l.envMap===!1?"ENVMAP_TYPE_CUBE":x3[l.envMapMode]||"ENVMAP_TYPE_CUBE"}const y3={[il]:"ENVMAP_MODE_REFRACTION"};function M3(l){return l.envMap===!1?"ENVMAP_MODE_REFLECTION":y3[l.envMapMode]||"ENVMAP_MODE_REFLECTION"}const E3={[fx]:"ENVMAP_BLENDING_MULTIPLY",[aE]:"ENVMAP_BLENDING_MIX",[rE]:"ENVMAP_BLENDING_ADD"};function b3(l){return l.envMap===!1?"ENVMAP_BLENDING_NONE":E3[l.combine]||"ENVMAP_BLENDING_NONE"}function T3(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function A3(l,t,i,s){const c=l.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const g=v3(i),m=S3(i),x=M3(i),_=b3(i),v=T3(i),E=c3(i),R=u3(f),N=c.createProgram();let y,S,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(fo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(fo).join(`
`),S.length>0&&(S+=`
`)):(y=[$v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),S=[$v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==la?"#define TONE_MAPPING":"",i.toneMapping!==la?mt.tonemapping_pars_fragment:"",i.toneMapping!==la?l3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,r3("linearToOutputTexel",i.outputColorSpace),o3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(fo).join(`
`)),d=Np(d),d=Kv(d,i),d=Qv(d,i),h=Np(h),h=Kv(h,i),h=Qv(h,i),d=Jv(d),h=Jv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===hv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===hv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const V=O+y+d,C=O+S+h,U=Yv(c,c.VERTEX_SHADER,V),L=Yv(c,c.FRAGMENT_SHADER,C);c.attachShader(N,U),c.attachShader(N,L),i.index0AttributeName!==void 0?c.bindAttribLocation(N,0,i.index0AttributeName):i.hasPositionAttribute===!0&&c.bindAttribLocation(N,0,"position"),c.linkProgram(N);function z(j){if(l.debug.checkShaderErrors){const ne=c.getProgramInfoLog(N)||"",fe=c.getShaderInfoLog(U)||"",J=c.getShaderInfoLog(L)||"",ee=ne.trim(),W=fe.trim(),q=J.trim();let de=!0,se=!0;if(c.getProgramParameter(N,c.LINK_STATUS)===!1)if(de=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(c,N,U,L);else{const ce=Zv(c,U,"vertex"),Me=Zv(c,L,"fragment");Ot("WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(N,c.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ee+`
`+ce+`
`+Me)}else ee!==""?st("WebGLProgram: Program Info Log:",ee):(W===""||q==="")&&(se=!1);se&&(j.diagnostics={runnable:de,programLog:ee,vertexShader:{log:W,prefix:y},fragmentShader:{log:q,prefix:S}})}c.deleteShader(U),c.deleteShader(L),b=new xu(c,N),P=f3(c,N)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let P;this.getAttributes=function(){return P===void 0&&z(this),P};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=c.getProgramParameter(N,t3)),k},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=n3++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=U,this.fragmentShader=L,this}let R3=0;class C3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const c=this._getShaderCacheForMaterial(t);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new w3(t),i.set(t,s)),s}}class w3{constructor(t){this.id=R3++,this.code=t,this.usedTimes=0}}function N3(l){return l===Zr||l===Su||l===yu}function D3(l,t,i,s,c,f){const d=new wx,h=new C3,g=new Set,m=[],x=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(b){return g.add(b),b===0?"uv":`uv${b}`}function N(b,P,k,j,ne,fe){const J=j.fog,ee=ne.geometry,W=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?j.environment:null,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,de=t.get(b.envMap||W,q),se=de&&de.mapping===Au?de.image.height:null,ce=E[b.type];b.precision!==null&&(v=s.getMaxPrecision(b.precision),v!==b.precision&&st("WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const Me=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,je=Me!==void 0?Me.length:0;let ke=0;ee.morphAttributes.position!==void 0&&(ke=1),ee.morphAttributes.normal!==void 0&&(ke=2),ee.morphAttributes.color!==void 0&&(ke=3);let B,me,Ae,Z;if(ce){const Rt=ia[ce];B=Rt.vertexShader,me=Rt.fragmentShader}else{B=b.vertexShader,me=b.fragmentShader;const Rt=h.getVertexShaderStage(b),ct=h.getFragmentShaderStage(b);h.update(b,Rt,ct),Ae=Rt.id,Z=ct.id}const he=l.getRenderTarget(),Te=l.state.buffers.depth.getReversed(),we=ne.isInstancedMesh===!0,ve=ne.isBatchedMesh===!0,Ce=!!b.map,Gt=!!b.matcap,pt=!!de,gt=!!b.aoMap,St=!!b.lightMap,tt=!!b.bumpMap&&b.wireframe===!1,it=!!b.normalMap,Vt=!!b.displacementMap,fn=!!b.emissiveMap,Lt=!!b.metalnessMap,$t=!!b.roughnessMap,X=b.anisotropy>0,nn=b.clearcoat>0,Ut=b.dispersion>0,D=b.retroreflectivity>0,M=b.iridescence>0,$=b.sheen>0,le=b.transmission>0,ge=X&&!!b.anisotropyMap,Re=nn&&!!b.clearcoatMap,Ue=nn&&!!b.clearcoatNormalMap,_e=nn&&!!b.clearcoatRoughnessMap,Ee=M&&!!b.iridescenceMap,De=M&&!!b.iridescenceThicknessMap,$e=$&&!!b.sheenColorMap,ze=$&&!!b.sheenRoughnessMap,Ie=!!b.specularMap,Xe=!!b.specularColorMap,nt=!!b.specularIntensityMap,ot=le&&!!b.transmissionMap,G=le&&!!b.thicknessMap,Ne=!!b.gradientMap,ye=!!b.alphaMap,Le=b.alphaTest>0,Ve=!!b.alphaHash,be=!!b.extensions;let Je=la;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Je=l.toneMapping);const Ge={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:B,fragmentShader:me,defines:b.defines,customVertexShaderID:Ae,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:ve,batchingColor:ve&&ne._colorsTexture!==null,instancing:we,instancingColor:we&&ne.instanceColor!==null,instancingMorph:we&&ne.morphTexture!==null,outputColorSpace:he===null?l.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ce,matcap:Gt,envMap:pt,envMapMode:pt&&de.mapping,envMapCubeUVHeight:se,aoMap:gt,lightMap:St,bumpMap:tt,normalMap:it,displacementMap:Vt,emissiveMap:fn,normalMapObjectSpace:it&&b.normalMapType===oE,normalMapTangentSpace:it&&b.normalMapType===dv,packedNormalMap:it&&b.normalMapType===dv&&N3(b.normalMap.format),metalnessMap:Lt,roughnessMap:$t,anisotropy:X,anisotropyMap:ge,clearcoat:nn,clearcoatMap:Re,clearcoatNormalMap:Ue,clearcoatRoughnessMap:_e,dispersion:Ut,retroreflection:D,iridescence:M,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:$,sheenColorMap:$e,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:Xe,specularIntensityMap:nt,transmission:le,transmissionMap:ot,thicknessMap:G,gradientMap:Ne,opaque:b.transparent===!1&&b.blending===ho&&b.alphaToCoverage===!1,alphaMap:ye,alphaTest:Le,alphaHash:Ve,combine:b.combine,mapUv:Ce&&R(b.map.channel),aoMapUv:gt&&R(b.aoMap.channel),lightMapUv:St&&R(b.lightMap.channel),bumpMapUv:tt&&R(b.bumpMap.channel),normalMapUv:it&&R(b.normalMap.channel),displacementMapUv:Vt&&R(b.displacementMap.channel),emissiveMapUv:fn&&R(b.emissiveMap.channel),metalnessMapUv:Lt&&R(b.metalnessMap.channel),roughnessMapUv:$t&&R(b.roughnessMap.channel),anisotropyMapUv:ge&&R(b.anisotropyMap.channel),clearcoatMapUv:Re&&R(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&R(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&R(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&R(b.iridescenceMap.channel),iridescenceThicknessMapUv:De&&R(b.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&R(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&R(b.sheenRoughnessMap.channel),specularMapUv:Ie&&R(b.specularMap.channel),specularColorMapUv:Xe&&R(b.specularColorMap.channel),specularIntensityMapUv:nt&&R(b.specularIntensityMap.channel),transmissionMapUv:ot&&R(b.transmissionMap.channel),thicknessMapUv:G&&R(b.thicknessMap.channel),alphaMapUv:ye&&R(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(it||X),vertexNormals:!!ee.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!ee.attributes.uv&&(Ce||ye),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||ee.attributes.normal===void 0&&it===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Te,skinning:ne.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:je,morphTextureStride:ke,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:l.shadowMap.enabled&&k.length>0,shadowMapType:l.shadowMap.type,toneMapping:Je,decodeVideoTexture:Ce&&b.map.isVideoTexture===!0&&wt.getTransfer(b.map.colorSpace)===qt,decodeVideoTextureEmissive:fn&&b.emissiveMap.isVideoTexture===!0&&wt.getTransfer(b.emissiveMap.colorSpace)===qt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===aa,flipSided:b.side===Kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:be&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&b.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ge.vertexUv1s=g.has(1),Ge.vertexUv2s=g.has(2),Ge.vertexUv3s=g.has(3),g.clear(),Ge}function y(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)P.push(k),P.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(S(P,b),O(P,b),P.push(l.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function S(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numSunLights),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numSunLightShadows),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function O(b,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.retroreflection&&d.enable(24),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),P.packedNormalMap&&d.enable(22),P.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),P.numLightProbeGrids>0&&d.enable(22),P.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function V(b){const P=E[b.type];let k;if(P){const j=ia[P];k=jE.clone(j.uniforms)}else k=b.uniforms;return k}function C(b,P){let k=x.get(P);return k!==void 0?++k.usedTimes:(k=new A3(l,P,b,c),m.push(k),x.set(P,k)),k}function U(b){if(--b.usedTimes===0){const P=m.indexOf(b);m[P]=m[m.length-1],m.pop(),x.delete(b.cacheKey),b.destroy()}}function L(b){h.remove(b)}function z(){h.dispose()}return{getParameters:N,getProgramCacheKey:y,getUniforms:V,acquireProgram:C,releaseProgram:U,releaseShaderCache:L,programs:m,dispose:z}}function U3(){let l=new WeakMap;function t(d){return l.has(d)}function i(d){let h=l.get(d);return h===void 0&&(h={},l.set(d,h)),h}function s(d){l.delete(d)}function c(d,h,g){l.get(d)[h]=g}function f(){l=new WeakMap}return{has:t,get:i,remove:s,update:c,dispose:f}}function L3(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.materialVariant!==t.materialVariant?l.materialVariant-t.materialVariant:l.z!==t.z?l.z-t.z:l.id-t.id}function ex(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function tx(){const l=[];let t=0;const i=[],s=[],c=[];function f(){t=0,i.length=0,s.length=0,c.length=0}function d(v){let E=0;return v.isInstancedMesh&&(E+=2),v.isSkinnedMesh&&(E+=1),E}function h(v,E,R,N,y,S){let O=l[t];return O===void 0?(O={id:v.id,object:v,geometry:E,material:R,materialVariant:d(v),groupOrder:N,renderOrder:v.renderOrder,z:y,group:S},l[t]=O):(O.id=v.id,O.object=v,O.geometry=E,O.material=R,O.materialVariant=d(v),O.groupOrder=N,O.renderOrder=v.renderOrder,O.z=y,O.group=S),t++,O}function g(v,E,R,N,y,S,O){O.reversedDepth===!0&&(y=-y);const V=h(v,E,R,N,y,S);R.transmission>0?s.push(V):R.transparent===!0?c.push(V):i.push(V)}function m(v,E,R,N,y,S){const O=h(v,E,R,N,y,S);R.transmission>0?s.unshift(O):R.transparent===!0?c.unshift(O):i.unshift(O)}function x(v,E){i.length>1&&i.sort(v||L3),s.length>1&&s.sort(E||ex),c.length>1&&c.sort(E||ex)}function _(){for(let v=t,E=l.length;v<E;v++){const R=l[v];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:c,init:f,push:g,unshift:m,finish:_,sort:x}}function O3(){let l=new WeakMap;function t(s,c){const f=l.get(s);let d;return f===void 0?(d=new tx,l.set(s,[d])):c>=f.length?(d=new tx,f.push(d)):d=f[c],d}function i(){l=new WeakMap}return{get:t,dispose:i}}function P3(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new pe,color:new zt};break;case"SpotLight":i={position:new pe,direction:new pe,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new pe,color:new zt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new pe,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":i={color:new zt,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return l[t.id]=i,i}}}function I3(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=i,i}}}let z3=0;function B3(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function F3(l){const t=new P3,i=I3(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new pe);const c=new pe,f=new _n,d=new _n;function h(m){let x=0,_=0,v=0;for(let ne=0;ne<9;ne++)s.probe[ne].set(0,0,0);let E=0,R=0,N=0,y=0,S=0,O=0,V=0,C=0,U=0,L=0,z=0,b=0,P=0,k=0;m.sort(B3);for(let ne=0,fe=m.length;ne<fe;ne++){const J=m[ne],ee=J.color,W=J.intensity,q=J.distance;let de=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===Zr?de=J.shadow.map.texture:de=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)x+=ee.r*W,_+=ee.g*W,v+=ee.b*W;else if(J.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(J.sh.coefficients[se],W);k++}else if(J.isSunLight){const se=t.get(J);if(se.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const ce=J.shadow,Me=i.get(J);Me.shadowIntensity=ce.intensity,Me.shadowBias=ce.bias,Me.shadowNormalBias=ce.normalBias,Me.shadowRadius=ce.radius,Me.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),s.sunShadow[R]=Me,s.sunShadowMap[R]=de;const je=ce.getViewportCount();for(let ke=0;ke<je;ke++)s.sunShadowMatrix[N+ke]=ce.getMatrix(ke),s.sunShadowCascade[N+ke]=ce._cascadeData[ke];N+=je,R++}s.sun[E]=se,E++}else if(J.isDirectionalLight){const se=t.get(J);if(se.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const ce=J.shadow,Me=i.get(J);Me.shadowIntensity=ce.intensity,Me.shadowBias=ce.bias,Me.shadowNormalBias=ce.normalBias,Me.shadowRadius=ce.radius,Me.shadowMapSize=ce.mapSize,s.directionalShadow[y]=Me,s.directionalShadowMap[y]=de,s.directionalShadowMatrix[y]=J.shadow.matrix,U++}s.directional[y]=se,y++}else if(J.isSpotLight){const se=t.get(J);se.position.setFromMatrixPosition(J.matrixWorld),se.color.copy(ee).multiplyScalar(W),se.distance=q,se.coneCos=Math.cos(J.angle),se.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),se.decay=J.decay,s.spot[O]=se;const ce=J.shadow;if(J.map&&(s.spotLightMap[b]=J.map,b++,ce.updateMatrices(J),J.castShadow&&P++),s.spotLightMatrix[O]=ce.matrix,J.castShadow){const Me=i.get(J);Me.shadowIntensity=ce.intensity,Me.shadowBias=ce.bias,Me.shadowNormalBias=ce.normalBias,Me.shadowRadius=ce.radius,Me.shadowMapSize=ce.mapSize,s.spotShadow[O]=Me,s.spotShadowMap[O]=de,z++}O++}else if(J.isRectAreaLight){const se=t.get(J);se.color.copy(ee).multiplyScalar(W),se.halfWidth.set(J.width*.5,0,0),se.halfHeight.set(0,J.height*.5,0),s.rectArea[V]=se,V++}else if(J.isPointLight){const se=t.get(J);if(se.color.copy(J.color).multiplyScalar(J.intensity),se.distance=J.distance,se.decay=J.decay,J.castShadow){const ce=J.shadow,Me=i.get(J);Me.shadowIntensity=ce.intensity,Me.shadowBias=ce.bias,Me.shadowNormalBias=ce.normalBias,Me.shadowRadius=ce.radius,Me.shadowMapSize=ce.mapSize,Me.shadowCameraNear=ce.camera.near,Me.shadowCameraFar=ce.camera.far,s.pointShadow[S]=Me,s.pointShadowMap[S]=de,s.pointShadowMatrix[S]=J.shadow.matrix,L++}s.point[S]=se,S++}else if(J.isHemisphereLight){const se=t.get(J);se.skyColor.copy(J.color).multiplyScalar(W),se.groundColor.copy(J.groundColor).multiplyScalar(W),s.hemi[C]=se,C++}}V>0&&(l.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=He.LTC_FLOAT_1,s.rectAreaLTC2=He.LTC_FLOAT_2):(s.rectAreaLTC1=He.LTC_HALF_1,s.rectAreaLTC2=He.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=_,s.ambient[2]=v;const j=s.hash;(j.sunLength!==E||j.directionalLength!==y||j.pointLength!==S||j.spotLength!==O||j.rectAreaLength!==V||j.hemiLength!==C||j.numSunShadows!==R||j.numDirectionalShadows!==U||j.numPointShadows!==L||j.numSpotShadows!==z||j.numSpotMaps!==b||j.numLightProbes!==k)&&(s.sun.length=E,s.directional.length=y,s.spot.length=O,s.rectArea.length=V,s.point.length=S,s.hemi.length=C,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=N,s.sunShadowCascade.length=N,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.directionalShadowMatrix.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.pointShadowMatrix.length=L,s.spotShadow.length=z,s.spotShadowMap.length=z,s.spotLightMatrix.length=z+b-P,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=k,j.sunLength=E,j.directionalLength=y,j.pointLength=S,j.spotLength=O,j.rectAreaLength=V,j.hemiLength=C,j.numSunShadows=R,j.numDirectionalShadows=U,j.numPointShadows=L,j.numSpotShadows=z,j.numSpotMaps=b,j.numLightProbes=k,s.version=z3++)}function g(m,x){let _=0,v=0,E=0,R=0,N=0,y=0;const S=x.matrixWorldInverse;for(let O=0,V=m.length;O<V;O++){const C=m[O];if(C.isSunLight){const U=s.sun[_];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(S),_++}else if(C.isDirectionalLight){const U=s.directional[v];U.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(S),v++}else if(C.isSpotLight){const U=s.spot[R];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(S),R++}else if(C.isRectAreaLight){const U=s.rectArea[N];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),d.identity(),f.copy(C.matrixWorld),f.premultiply(S),d.extractRotation(f),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),N++}else if(C.isPointLight){const U=s.point[E];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),E++}else if(C.isHemisphereLight){const U=s.hemi[y];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(S),y++}}}return{setup:h,setupView:g,state:s}}function nx(l){const t=new F3(l),i=[],s=[],c=[];function f(v){_.camera=v,i.length=0,s.length=0,c.length=0}function d(v){i.push(v)}function h(v){s.push(v)}function g(v){c.push(v)}function m(){t.setup(i)}function x(v){t.setupView(i,v)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:c,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:_,setupLights:m,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:g}}function H3(l){let t=new WeakMap;function i(c,f=0){const d=t.get(c);let h;return d===void 0?(h=new nx(l),t.set(c,[h])):f>=d.length?(h=new nx(l),d.push(h)):h=d[f],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const G3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,X3=[new pe(1,0,0),new pe(-1,0,0),new pe(0,1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1)],k3=[new pe(0,-1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1),new pe(0,-1,0),new pe(0,-1,0)],ix=new _n,co=new pe,Hh=new pe;function W3(l,t,i){let s=new Lx;const c=new Bt,f=new Bt,d=new cn,h=new JE,g=new $E,m={},x=i.maxTextureSize,_={[Yr]:Kn,[Kn]:Yr,[aa]:aa},v=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:G3,fragmentShader:V3}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const R=new Oa;R.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new ci(R,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let S=this.type;this.render=function(L,z,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===FM&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pu);const P=l.getRenderTarget(),k=l.getActiveCubeFace(),j=l.getActiveMipmapLevel(),ne=l.state;ne.setBlending(Na),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const fe=S!==this.type;fe&&z.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(ee=>ee.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,ee=L.length;J<ee;J++){const W=L[J],q=W.shadow;if(q===void 0){st("WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;c.copy(q.mapSize);const de=q.getFrameExtents();c.multiply(de),f.copy(q.mapSize),(c.x>x||c.y>x)&&(c.x>x&&(f.x=Math.floor(x/de.x),c.x=f.x*de.x,q.mapSize.x=f.x),c.y>x&&(f.y=Math.floor(x/de.y),c.y=f.y*de.y,q.mapSize.y=f.y));const se=l.state.buffers.depth.getReversed();if(q.camera._reversedDepth=se,q.map===null||fe===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===uo){if(W.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Bi(c.x,c.y,{format:Zr,type:ca,minFilter:In,magFilter:In,generateMipmaps:!1}),q.map.texture.name=W.name+".shadowMap",q.map.depthTexture=new xo(c.x,c.y,ra),q.map.depthTexture.name=W.name+".shadowMapDepth",q.map.depthTexture.format=La,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Un,q.map.depthTexture.magFilter=Un}else W.isPointLight?(q.map=new Gx(c.x),q.map.depthTexture=new qE(c.x,oa)):(q.map=new Bi(c.x,c.y),q.map.depthTexture=new xo(c.x,c.y,oa)),q.map.depthTexture.name=W.name+".shadowMap",q.map.depthTexture.format=La,this.type===pu?(q.map.depthTexture.compareFunction=se?Hp:Fp,q.map.depthTexture.minFilter=In,q.map.depthTexture.magFilter=In):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Un,q.map.depthTexture.magFilter=Un);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==c.x||q.map.height!==c.y)&&q.map.setSize(c.x,c.y);const ce=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();W.isPointLight!==!0&&q.updateMatrices(W,b);for(let Me=0;Me<ce;Me++){const je=q.getCamera(Me);if(W.isPointLight){const ke=q.camera,B=q.matrix,me=W.distance||ke.far;me!==ke.far&&(ke.far=me,ke.updateProjectionMatrix()),co.setFromMatrixPosition(W.matrixWorld),ke.position.copy(co),Hh.copy(ke.position),Hh.add(X3[Me]),ke.up.copy(k3[Me]),ke.lookAt(Hh),ke.updateMatrixWorld(),B.makeTranslation(-co.x,-co.y,-co.z),ix.multiplyMatrices(ke.projectionMatrix,ke.matrixWorldInverse),q._frustum.setFromProjectionMatrix(ix,ke.coordinateSystem,ke.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)l.setRenderTarget(q.map,Me),l.clear();else{Me===0&&(l.setRenderTarget(q.map),l.clear());const ke=q.getViewport(Me);d.set(f.x*ke.x,f.y*ke.y,f.x*ke.z,f.y*ke.w),ne.viewport(d)}s=q.getFrustum(Me),C(z,b,je,W,this.type)}q.isPointLightShadow!==!0&&this.type===uo&&O(q,b),q.needsUpdate=!1}S=this.type,y.needsUpdate=!1,l.setRenderTarget(P,k,j)};function O(L,z){const b=t.update(N);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,E.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),L.mapPass===null?L.mapPass=new Bi(c.x,c.y,{format:Zr,type:ca}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value.set(L.map.width,L.map.height),v.uniforms.radius.value=L.radius,l.setRenderTarget(L.mapPass),l.clear(),l.renderBufferDirect(z,null,b,v,N,null),E.uniforms.shadow_pass.value=L.mapPass.texture,E.uniforms.resolution.value.set(L.map.width,L.map.height),E.uniforms.radius.value=L.radius,l.setRenderTarget(L.map),l.clear(),l.renderBufferDirect(z,null,b,E,N,null)}function V(L,z,b,P){let k=null;const j=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(j!==void 0)k=j;else if(k=b.isPointLight===!0?g:h,l.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ne=k.uuid,fe=z.uuid;let J=m[ne];J===void 0&&(J={},m[ne]=J);let ee=J[fe];ee===void 0&&(ee=k.clone(),J[fe]=ee,z.addEventListener("dispose",U)),k=ee}if(k.visible=z.visible,k.wireframe=z.wireframe,P===uo?k.side=z.shadowSide!==null?z.shadowSide:z.side:k.side=z.shadowSide!==null?z.shadowSide:_[z.side],k.alphaMap=z.alphaMap,k.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,k.map=z.map,k.clipShadows=z.clipShadows,k.clippingPlanes=z.clippingPlanes,k.clipIntersection=z.clipIntersection,k.displacementMap=z.displacementMap,k.displacementScale=z.displacementScale,k.displacementBias=z.displacementBias,k.wireframeLinewidth=z.wireframeLinewidth,k.linewidth=z.linewidth,b.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const ne=l.properties.get(k);ne.light=b}return k}function C(L,z,b,P,k){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===uo)&&(!L.frustumCulled||L.intersectsFrustum(s))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);const fe=t.update(L),J=L.material;if(Array.isArray(J)){const ee=fe.groups;for(let W=0,q=ee.length;W<q;W++){const de=ee[W],se=J[de.materialIndex];if(se&&se.visible){const ce=V(L,se,P,k);L.onBeforeShadow(l,L,z,b,fe,ce,de),l.renderBufferDirect(b,null,fe,ce,L,de),L.onAfterShadow(l,L,z,b,fe,ce,de)}}}else if(J.visible){const ee=V(L,J,P,k);L.onBeforeShadow(l,L,z,b,fe,ee,null),l.renderBufferDirect(b,null,fe,ee,L,null),L.onAfterShadow(l,L,z,b,fe,ee,null)}}const ne=L.children;for(let fe=0,J=ne.length;fe<J;fe++)C(ne[fe],z,b,P,k)}function U(L){L.target.removeEventListener("dispose",U);for(const b in m){const P=m[b],k=L.target.uuid;k in P&&(P[k].dispose(),delete P[k])}}}function q3(l,t){function i(){let G=!1;const Ne=new cn;let ye=null;const Le=new cn(0,0,0,0);return{setMask:function(Ve){ye!==Ve&&!G&&(l.colorMask(Ve,Ve,Ve,Ve),ye=Ve)},setLocked:function(Ve){G=Ve},setClear:function(Ve,be,Je,Ge,Rt){Rt===!0&&(Ve*=Ge,be*=Ge,Je*=Ge),Ne.set(Ve,be,Je,Ge),Le.equals(Ne)===!1&&(l.clearColor(Ve,be,Je,Ge),Le.copy(Ne))},reset:function(){G=!1,ye=null,Le.set(-1,0,0,0)}}}function s(){let G=!1,Ne=!1,ye=null,Le=null,Ve=null;return{setReversed:function(be){if(Ne!==be){const Je=t.get("EXT_clip_control");be?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ne=be;const Ge=Ve;Ve=null,this.setClear(Ge)}},getReversed:function(){return Ne},setTest:function(be){be?he(l.DEPTH_TEST):Te(l.DEPTH_TEST)},setMask:function(be){ye!==be&&!G&&(l.depthMask(be),ye=be)},setFunc:function(be){if(Ne&&(be=SE[be]),Le!==be){switch(be){case Xh:l.depthFunc(l.NEVER);break;case kh:l.depthFunc(l.ALWAYS);break;case Wh:l.depthFunc(l.LESS);break;case mo:l.depthFunc(l.LEQUAL);break;case qh:l.depthFunc(l.EQUAL);break;case Yh:l.depthFunc(l.GEQUAL);break;case jh:l.depthFunc(l.GREATER);break;case Zh:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}Le=be}},setLocked:function(be){G=be},setClear:function(be){Ve!==be&&(Ve=be,Ne&&(be=1-be),l.clearDepth(be))},reset:function(){G=!1,ye=null,Le=null,Ve=null,Ne=!1}}}function c(){let G=!1,Ne=null,ye=null,Le=null,Ve=null,be=null,Je=null,Ge=null,Rt=null;return{setTest:function(ct){G||(ct?he(l.STENCIL_TEST):Te(l.STENCIL_TEST))},setMask:function(ct){Ne!==ct&&!G&&(l.stencilMask(ct),Ne=ct)},setFunc:function(ct,Qn,fi){(ye!==ct||Le!==Qn||Ve!==fi)&&(l.stencilFunc(ct,Qn,fi),ye=ct,Le=Qn,Ve=fi)},setOp:function(ct,Qn,fi){(be!==ct||Je!==Qn||Ge!==fi)&&(l.stencilOp(ct,Qn,fi),be=ct,Je=Qn,Ge=fi)},setLocked:function(ct){G=ct},setClear:function(ct){Rt!==ct&&(l.clearStencil(ct),Rt=ct)},reset:function(){G=!1,Ne=null,ye=null,Le=null,Ve=null,be=null,Je=null,Ge=null,Rt=null}}}const f=new i,d=new s,h=new c,g=new WeakMap,m=new WeakMap;let x={},_={},v={},E=new WeakMap,R=[],N=null,y=!1,S=null,O=null,V=null,C=null,U=null,L=null,z=null,b=new zt(0,0,0),P=0,k=!1,j=null,ne=null,fe=null,J=null,ee=null;const W=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,de=0;const se=l.getParameter(l.VERSION);se.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(se)[1]),q=de>=1):se.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),q=de>=2);let ce=null,Me={};const je=l.getParameter(l.SCISSOR_BOX),ke=l.getParameter(l.VIEWPORT),B=new cn().fromArray(je),me=new cn().fromArray(ke);function Ae(G,Ne,ye,Le){const Ve=new Uint8Array(4),be=l.createTexture();l.bindTexture(G,be),l.texParameteri(G,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(G,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let Je=0;Je<ye;Je++)G===l.TEXTURE_3D||G===l.TEXTURE_2D_ARRAY?l.texImage3D(Ne,0,l.RGBA,1,1,Le,0,l.RGBA,l.UNSIGNED_BYTE,Ve):l.texImage2D(Ne+Je,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,Ve);return be}const Z={};Z[l.TEXTURE_2D]=Ae(l.TEXTURE_2D,l.TEXTURE_2D,1),Z[l.TEXTURE_CUBE_MAP]=Ae(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[l.TEXTURE_2D_ARRAY]=Ae(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),Z[l.TEXTURE_3D]=Ae(l.TEXTURE_3D,l.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),he(l.DEPTH_TEST),d.setFunc(mo),tt(!1),it(ov),he(l.CULL_FACE),gt(Na);function he(G){x[G]!==!0&&(l.enable(G),x[G]=!0)}function Te(G){x[G]!==!1&&(l.disable(G),x[G]=!1)}function we(G,Ne){return v[G]!==Ne?(l.bindFramebuffer(G,Ne),v[G]=Ne,G===l.DRAW_FRAMEBUFFER&&(v[l.FRAMEBUFFER]=Ne),G===l.FRAMEBUFFER&&(v[l.DRAW_FRAMEBUFFER]=Ne),!0):!1}function ve(G,Ne){let ye=R,Le=!1;if(G){ye=E.get(Ne),ye===void 0&&(ye=[],E.set(Ne,ye));const Ve=G.textures;if(ye.length!==Ve.length||ye[0]!==l.COLOR_ATTACHMENT0){for(let be=0,Je=Ve.length;be<Je;be++)ye[be]=l.COLOR_ATTACHMENT0+be;ye.length=Ve.length,Le=!0}}else ye[0]!==l.BACK&&(ye[0]=l.BACK,Le=!0);Le&&l.drawBuffers(ye)}function Ce(G){return N!==G?(l.useProgram(G),N=G,!0):!1}const Gt={[$s]:l.FUNC_ADD,[GM]:l.FUNC_SUBTRACT,[VM]:l.FUNC_REVERSE_SUBTRACT};Gt[XM]=l.MIN,Gt[kM]=l.MAX;const pt={[WM]:l.ZERO,[qM]:l.ONE,[YM]:l.SRC_COLOR,[cx]:l.SRC_ALPHA,[$M]:l.SRC_ALPHA_SATURATE,[QM]:l.DST_COLOR,[ZM]:l.DST_ALPHA,[jM]:l.ONE_MINUS_SRC_COLOR,[ux]:l.ONE_MINUS_SRC_ALPHA,[JM]:l.ONE_MINUS_DST_COLOR,[KM]:l.ONE_MINUS_DST_ALPHA,[eE]:l.CONSTANT_COLOR,[tE]:l.ONE_MINUS_CONSTANT_COLOR,[nE]:l.CONSTANT_ALPHA,[iE]:l.ONE_MINUS_CONSTANT_ALPHA};function gt(G,Ne,ye,Le,Ve,be,Je,Ge,Rt,ct){if(G===Na){y===!0&&(Te(l.BLEND),y=!1);return}if(y===!1&&(he(l.BLEND),y=!0),G!==HM){if(G!==S||ct!==k){if((O!==$s||U!==$s)&&(l.blendEquation(l.FUNC_ADD),O=$s,U=$s),ct)switch(G){case ho:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case cv:l.blendFunc(l.ONE,l.ONE);break;case uv:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case fv:l.blendFuncSeparate(l.DST_COLOR,l.ONE_MINUS_SRC_ALPHA,l.ZERO,l.ONE);break;default:Ot("WebGLState: Invalid blending: ",G);break}else switch(G){case ho:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case cv:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE,l.ONE,l.ONE);break;case uv:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fv:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",G);break}V=null,C=null,L=null,z=null,b.set(0,0,0),P=0,S=G,k=ct}return}Ve=Ve||Ne,be=be||ye,Je=Je||Le,(Ne!==O||Ve!==U)&&(l.blendEquationSeparate(Gt[Ne],Gt[Ve]),O=Ne,U=Ve),(ye!==V||Le!==C||be!==L||Je!==z)&&(l.blendFuncSeparate(pt[ye],pt[Le],pt[be],pt[Je]),V=ye,C=Le,L=be,z=Je),(Ge.equals(b)===!1||Rt!==P)&&(l.blendColor(Ge.r,Ge.g,Ge.b,Rt),b.copy(Ge),P=Rt),S=G,k=!1}function St(G,Ne){G.side===aa?Te(l.CULL_FACE):he(l.CULL_FACE);let ye=G.side===Kn;Ne&&(ye=!ye),tt(ye),G.blending===ho&&G.transparent===!1?gt(Na):gt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),f.setMask(G.colorWrite);const Le=G.stencilWrite;h.setTest(Le),Le&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),fn(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?he(l.SAMPLE_ALPHA_TO_COVERAGE):Te(l.SAMPLE_ALPHA_TO_COVERAGE)}function tt(G){j!==G&&(G?l.frontFace(l.CW):l.frontFace(l.CCW),j=G)}function it(G){G!==zM?(he(l.CULL_FACE),G!==ne&&(G===ov?l.cullFace(l.BACK):G===BM?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):Te(l.CULL_FACE),ne=G}function Vt(G){G!==fe&&(q&&l.lineWidth(G),fe=G)}function fn(G,Ne,ye){G?(he(l.POLYGON_OFFSET_FILL),(J!==Ne||ee!==ye)&&(J=Ne,ee=ye,d.getReversed()&&(Ne=-Ne),l.polygonOffset(Ne,ye))):Te(l.POLYGON_OFFSET_FILL)}function Lt(G){G?he(l.SCISSOR_TEST):Te(l.SCISSOR_TEST)}function $t(G){G===void 0&&(G=l.TEXTURE0+W-1),ce!==G&&(l.activeTexture(G),ce=G)}function X(G,Ne,ye){ye===void 0&&(ce===null?ye=l.TEXTURE0+W-1:ye=ce);let Le=Me[ye];Le===void 0&&(Le={type:void 0,texture:void 0},Me[ye]=Le),(Le.type!==G||Le.texture!==Ne)&&(ce!==ye&&(l.activeTexture(ye),ce=ye),l.bindTexture(G,Ne||Z[G]),Le.type=G,Le.texture=Ne)}function nn(){const G=Me[ce];G!==void 0&&G.type!==void 0&&(l.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ut(){try{l.compressedTexImage2D(...arguments)}catch(G){Ot("WebGLState:",G)}}function D(){try{l.compressedTexImage3D(...arguments)}catch(G){Ot("WebGLState:",G)}}function M(){try{l.texSubImage2D(...arguments)}catch(G){Ot("WebGLState:",G)}}function $(){try{l.texSubImage3D(...arguments)}catch(G){Ot("WebGLState:",G)}}function le(){try{l.compressedTexSubImage2D(...arguments)}catch(G){Ot("WebGLState:",G)}}function ge(){try{l.compressedTexSubImage3D(...arguments)}catch(G){Ot("WebGLState:",G)}}function Re(){try{l.texStorage2D(...arguments)}catch(G){Ot("WebGLState:",G)}}function Ue(){try{l.texStorage3D(...arguments)}catch(G){Ot("WebGLState:",G)}}function _e(){try{l.texImage2D(...arguments)}catch(G){Ot("WebGLState:",G)}}function Ee(){try{l.texImage3D(...arguments)}catch(G){Ot("WebGLState:",G)}}function De(G){return _[G]!==void 0?_[G]:l.getParameter(G)}function $e(G,Ne){_[G]!==Ne&&(l.pixelStorei(G,Ne),_[G]=Ne)}function ze(G){B.equals(G)===!1&&(l.scissor(G.x,G.y,G.z,G.w),B.copy(G))}function Ie(G){me.equals(G)===!1&&(l.viewport(G.x,G.y,G.z,G.w),me.copy(G))}function Xe(G,Ne){let ye=m.get(Ne);ye===void 0&&(ye=new WeakMap,m.set(Ne,ye));let Le=ye.get(G);Le===void 0&&(Le=l.getUniformBlockIndex(Ne,G.name),ye.set(G,Le))}function nt(G,Ne){const Le=m.get(Ne).get(G);g.get(Ne)!==Le&&(l.uniformBlockBinding(Ne,Le,G.__bindingPointIndex),g.set(Ne,Le))}function ot(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),d.setReversed(!1),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),l.pixelStorei(l.PACK_ALIGNMENT,4),l.pixelStorei(l.UNPACK_ALIGNMENT,4),l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,!1),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,l.BROWSER_DEFAULT_WEBGL),l.pixelStorei(l.PACK_ROW_LENGTH,0),l.pixelStorei(l.PACK_SKIP_PIXELS,0),l.pixelStorei(l.PACK_SKIP_ROWS,0),l.pixelStorei(l.UNPACK_ROW_LENGTH,0),l.pixelStorei(l.UNPACK_IMAGE_HEIGHT,0),l.pixelStorei(l.UNPACK_SKIP_PIXELS,0),l.pixelStorei(l.UNPACK_SKIP_ROWS,0),l.pixelStorei(l.UNPACK_SKIP_IMAGES,0),x={},_={},ce=null,Me={},v={},E=new WeakMap,R=[],N=null,y=!1,S=null,O=null,V=null,C=null,U=null,L=null,z=null,b=new zt(0,0,0),P=0,k=!1,j=null,ne=null,fe=null,J=null,ee=null,B.set(0,0,l.canvas.width,l.canvas.height),me.set(0,0,l.canvas.width,l.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:he,disable:Te,bindFramebuffer:we,drawBuffers:ve,useProgram:Ce,setBlending:gt,setMaterial:St,setFlipSided:tt,setCullFace:it,setLineWidth:Vt,setPolygonOffset:fn,setScissorTest:Lt,activeTexture:$t,bindTexture:X,unbindTexture:nn,compressedTexImage2D:Ut,compressedTexImage3D:D,texImage2D:_e,texImage3D:Ee,pixelStorei:$e,getParameter:De,updateUBOMapping:Xe,uniformBlockBinding:nt,texStorage2D:Re,texStorage3D:Ue,texSubImage2D:M,texSubImage3D:$,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:ze,viewport:Ie,reset:ot}}function Y3(l,t,i,s,c,f,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Bt,x=new WeakMap,_=new Set;let v;const E=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(D,M){return R?new OffscreenCanvas(D,M):vo("canvas")}function y(D,M,$){let le=1;const ge=Ut(D);if((ge.width>$||ge.height>$)&&(le=$/Math.max(ge.width,ge.height)),le<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Re=Math.floor(le*ge.width),Ue=Math.floor(le*ge.height);v===void 0&&(v=N(Re,Ue));const _e=M?N(Re,Ue):v;return _e.width=Re,_e.height=Ue,_e.getContext("2d").drawImage(D,0,0,Re,Ue),st("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Re+"x"+Ue+")."),_e}else return"data"in D&&st("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function S(D){return D.generateMipmaps}function O(D){l.generateMipmap(D)}function V(D){return D.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?l.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function C(D,M,$,le,ge,Re=!1){if(D!==null){if(l[D]!==void 0)return l[D];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ue;le&&(Ue=t.get("EXT_texture_norm16"),Ue||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=M;if(M===l.RED&&($===l.FLOAT&&(_e=l.R32F),$===l.HALF_FLOAT&&(_e=l.R16F),$===l.UNSIGNED_BYTE&&(_e=l.R8),$===l.UNSIGNED_SHORT&&Ue&&(_e=Ue.R16_EXT),$===l.SHORT&&Ue&&(_e=Ue.R16_SNORM_EXT)),M===l.RED_INTEGER&&($===l.UNSIGNED_BYTE&&(_e=l.R8UI),$===l.UNSIGNED_SHORT&&(_e=l.R16UI),$===l.UNSIGNED_INT&&(_e=l.R32UI),$===l.BYTE&&(_e=l.R8I),$===l.SHORT&&(_e=l.R16I),$===l.INT&&(_e=l.R32I)),M===l.RG&&($===l.FLOAT&&(_e=l.RG32F),$===l.HALF_FLOAT&&(_e=l.RG16F),$===l.UNSIGNED_BYTE&&(_e=l.RG8),$===l.UNSIGNED_SHORT&&Ue&&(_e=Ue.RG16_EXT),$===l.SHORT&&Ue&&(_e=Ue.RG16_SNORM_EXT)),M===l.RG_INTEGER&&($===l.UNSIGNED_BYTE&&(_e=l.RG8UI),$===l.UNSIGNED_SHORT&&(_e=l.RG16UI),$===l.UNSIGNED_INT&&(_e=l.RG32UI),$===l.BYTE&&(_e=l.RG8I),$===l.SHORT&&(_e=l.RG16I),$===l.INT&&(_e=l.RG32I)),M===l.RGB_INTEGER&&($===l.UNSIGNED_BYTE&&(_e=l.RGB8UI),$===l.UNSIGNED_SHORT&&(_e=l.RGB16UI),$===l.UNSIGNED_INT&&(_e=l.RGB32UI),$===l.BYTE&&(_e=l.RGB8I),$===l.SHORT&&(_e=l.RGB16I),$===l.INT&&(_e=l.RGB32I)),M===l.RGBA_INTEGER&&($===l.UNSIGNED_BYTE&&(_e=l.RGBA8UI),$===l.UNSIGNED_SHORT&&(_e=l.RGBA16UI),$===l.UNSIGNED_INT&&(_e=l.RGBA32UI),$===l.BYTE&&(_e=l.RGBA8I),$===l.SHORT&&(_e=l.RGBA16I),$===l.INT&&(_e=l.RGBA32I)),M===l.RGB&&($===l.UNSIGNED_SHORT&&Ue&&(_e=Ue.RGB16_EXT),$===l.SHORT&&Ue&&(_e=Ue.RGB16_SNORM_EXT),$===l.UNSIGNED_INT_5_9_9_9_REV&&(_e=l.RGB9_E5),$===l.UNSIGNED_INT_10F_11F_11F_REV&&(_e=l.R11F_G11F_B10F)),M===l.RGBA){const Ee=Re?Eu:wt.getTransfer(ge);$===l.FLOAT&&(_e=l.RGBA32F),$===l.HALF_FLOAT&&(_e=l.RGBA16F),$===l.UNSIGNED_BYTE&&(_e=Ee===qt?l.SRGB8_ALPHA8:l.RGBA8),$===l.UNSIGNED_SHORT&&Ue&&(_e=Ue.RGBA16_EXT),$===l.SHORT&&Ue&&(_e=Ue.RGBA16_SNORM_EXT),$===l.UNSIGNED_SHORT_4_4_4_4&&(_e=l.RGBA4),$===l.UNSIGNED_SHORT_5_5_5_1&&(_e=l.RGB5_A1)}return(_e===l.R16F||_e===l.R32F||_e===l.RG16F||_e===l.RG32F||_e===l.RGBA16F||_e===l.RGBA32F)&&t.get("EXT_color_buffer_float"),_e}function U(D,M){let $;return D?M===null||M===oa||M===_o?$=l.DEPTH24_STENCIL8:M===ra?$=l.DEPTH32F_STENCIL8:M===go&&($=l.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===oa||M===_o?$=l.DEPTH_COMPONENT24:M===ra?$=l.DEPTH_COMPONENT32F:M===go&&($=l.DEPTH_COMPONENT16),$}function L(D,M){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Un&&D.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function z(D){const M=D.target;M.removeEventListener("dispose",z),P(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&_.delete(M)}function b(D){const M=D.target;M.removeEventListener("dispose",b),j(M)}function P(D){const M=s.get(D);if(M.__webglInit===void 0)return;const $=D.source,le=E.get($);if(le){const ge=le[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&k(D),Object.keys(le).length===0&&E.delete($)}s.remove(D)}function k(D){const M=s.get(D);l.deleteTexture(M.__webglTexture);const $=D.source,le=E.get($);delete le[M.__cacheKey],d.memory.textures--}function j(D){const M=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let ge=0;ge<M.__webglFramebuffer[le].length;ge++)l.deleteFramebuffer(M.__webglFramebuffer[le][ge]);else l.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&l.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)l.deleteFramebuffer(M.__webglFramebuffer[le]);else l.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&l.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&l.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&l.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&l.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=D.textures;for(let le=0,ge=$.length;le<ge;le++){const Re=s.get($[le]);Re.__webglTexture&&(l.deleteTexture(Re.__webglTexture),d.memory.textures--),s.remove($[le])}s.remove(D)}let ne=0;function fe(){ne=0}function J(){return ne}function ee(D){ne=D}function W(){const D=ne;return D>=c.maxTextures&&st("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+c.maxTextures),ne+=1,D}function q(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function de(D,M){const $=s.get(D);if(D.isVideoTexture&&X(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&$.__version!==D.version){const le=D.image;if(le===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Te($,D,M);return}}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(l.TEXTURE_2D,$.__webglTexture,l.TEXTURE0+M)}function se(D,M){const $=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Te($,D,M);return}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(l.TEXTURE_2D_ARRAY,$.__webglTexture,l.TEXTURE0+M)}function ce(D,M){const $=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Te($,D,M);return}i.bindTexture(l.TEXTURE_3D,$.__webglTexture,l.TEXTURE0+M)}function Me(D,M){const $=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&$.__version!==D.version){we($,D,M);return}i.bindTexture(l.TEXTURE_CUBE_MAP,$.__webglTexture,l.TEXTURE0+M)}const je={[Kh]:l.REPEAT,[Ii]:l.CLAMP_TO_EDGE,[Qh]:l.MIRRORED_REPEAT},ke={[Un]:l.NEAREST,[sE]:l.NEAREST_MIPMAP_NEAREST,[Wc]:l.NEAREST_MIPMAP_LINEAR,[In]:l.LINEAR,[uh]:l.LINEAR_MIPMAP_NEAREST,[Wr]:l.LINEAR_MIPMAP_LINEAR},B={[uE]:l.NEVER,[mE]:l.ALWAYS,[fE]:l.LESS,[Fp]:l.LEQUAL,[dE]:l.EQUAL,[Hp]:l.GEQUAL,[hE]:l.GREATER,[pE]:l.NOTEQUAL};function me(D,M){if(M.type===ra&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===In||M.magFilter===uh||M.magFilter===Wc||M.magFilter===Wr||M.minFilter===In||M.minFilter===uh||M.minFilter===Wc||M.minFilter===Wr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(D,l.TEXTURE_WRAP_S,je[M.wrapS]),l.texParameteri(D,l.TEXTURE_WRAP_T,je[M.wrapT]),(D===l.TEXTURE_3D||D===l.TEXTURE_2D_ARRAY)&&l.texParameteri(D,l.TEXTURE_WRAP_R,je[M.wrapR]),l.texParameteri(D,l.TEXTURE_MAG_FILTER,ke[M.magFilter]),l.texParameteri(D,l.TEXTURE_MIN_FILTER,ke[M.minFilter]),M.compareFunction&&(l.texParameteri(D,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(D,l.TEXTURE_COMPARE_FUNC,B[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==Wc&&M.minFilter!==Wr||M.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");l.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,c.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function Ae(D,M){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",z));const le=M.source;let ge=E.get(le);ge===void 0&&(ge={},E.set(le,ge));const Re=q(M);if(Re!==D.__cacheKey){ge[Re]===void 0&&(ge[Re]={texture:l.createTexture(),usedTimes:0},d.memory.textures++,$=!0),ge[Re].usedTimes++;const Ue=ge[D.__cacheKey];Ue!==void 0&&(ge[D.__cacheKey].usedTimes--,Ue.usedTimes===0&&k(M)),D.__cacheKey=Re,D.__webglTexture=ge[Re].texture}return $}function Z(D,M,$){return Math.floor(Math.floor(D/$)/M)}function he(D,M,$,le){const Re=D.updateRanges;if(Re.length===0)i.texSubImage2D(l.TEXTURE_2D,0,0,0,M.width,M.height,$,le,M.data);else{Re.sort(($e,ze)=>$e.start-ze.start);let Ue=0;for(let $e=1;$e<Re.length;$e++){const ze=Re[Ue],Ie=Re[$e],Xe=ze.start+ze.count,nt=Z(Ie.start,M.width,4),ot=Z(ze.start,M.width,4);Ie.start<=Xe+1&&nt===ot&&Z(Ie.start+Ie.count-1,M.width,4)===nt?ze.count=Math.max(ze.count,Ie.start+Ie.count-ze.start):(++Ue,Re[Ue]=Ie)}Re.length=Ue+1;const _e=i.getParameter(l.UNPACK_ROW_LENGTH),Ee=i.getParameter(l.UNPACK_SKIP_PIXELS),De=i.getParameter(l.UNPACK_SKIP_ROWS);i.pixelStorei(l.UNPACK_ROW_LENGTH,M.width);for(let $e=0,ze=Re.length;$e<ze;$e++){const Ie=Re[$e],Xe=Math.floor(Ie.start/4),nt=Math.ceil(Ie.count/4),ot=Xe%M.width,G=Math.floor(Xe/M.width),Ne=nt,ye=1;i.pixelStorei(l.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(l.UNPACK_SKIP_ROWS,G),i.texSubImage2D(l.TEXTURE_2D,0,ot,G,Ne,ye,$,le,M.data)}D.clearUpdateRanges(),i.pixelStorei(l.UNPACK_ROW_LENGTH,_e),i.pixelStorei(l.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(l.UNPACK_SKIP_ROWS,De)}}function Te(D,M,$){let le=l.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=l.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=l.TEXTURE_3D);const ge=Ae(D,M),Re=M.source;i.bindTexture(le,D.__webglTexture,l.TEXTURE0+$);const Ue=s.get(Re);if(Re.version!==Ue.__version||ge===!0){if(i.activeTexture(l.TEXTURE0+$),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ye=wt.getPrimaries(wt.workingColorSpace),Le=M.colorSpace===mr?null:wt.getPrimaries(M.colorSpace),Ve=M.colorSpace===mr||ye===Le?l.NONE:l.BROWSER_DEFAULT_WEBGL;i.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}i.pixelStorei(l.UNPACK_ALIGNMENT,M.unpackAlignment);let Ee=y(M.image,!1,c.maxTextureSize);Ee=nn(M,Ee);const De=f.convert(M.format,M.colorSpace),$e=f.convert(M.type);let ze=C(M.internalFormat,De,$e,M.normalized,M.colorSpace,M.isVideoTexture);me(le,M);let Ie;const Xe=M.mipmaps,nt=M.isVideoTexture!==!0,ot=Ue.__version===void 0||ge===!0,G=Re.dataReady,Ne=L(M,Ee);if(M.isDepthTexture)ze=U(M.format===qr,M.type),ot&&(nt?i.texStorage2D(l.TEXTURE_2D,1,ze,Ee.width,Ee.height):i.texImage2D(l.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,De,$e,null));else if(M.isDataTexture)if(Xe.length>0){nt&&ot&&i.texStorage2D(l.TEXTURE_2D,Ne,ze,Xe[0].width,Xe[0].height);for(let ye=0,Le=Xe.length;ye<Le;ye++)Ie=Xe[ye],nt?G&&i.texSubImage2D(l.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,De,$e,Ie.data):i.texImage2D(l.TEXTURE_2D,ye,ze,Ie.width,Ie.height,0,De,$e,Ie.data);M.generateMipmaps=!1}else nt?(ot&&i.texStorage2D(l.TEXTURE_2D,Ne,ze,Ee.width,Ee.height),G&&he(M,Ee,De,$e)):i.texImage2D(l.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,De,$e,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&ot&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Ne,ze,Xe[0].width,Xe[0].height,Ee.depth);for(let ye=0,Le=Xe.length;ye<Le;ye++)if(Ie=Xe[ye],M.format!==zi)if(De!==null)if(nt){if(G)if(M.layerUpdates.size>0){const Ve=Pv(Ie.width,Ie.height,M.format,M.type);for(const be of M.layerUpdates){const Je=Ie.data.subarray(be*Ve/Ie.data.BYTES_PER_ELEMENT,(be+1)*Ve/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,ye,0,0,be,Ie.width,Ie.height,1,De,Je)}}else i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,Ee.depth,De,Ie.data)}else i.compressedTexImage3D(l.TEXTURE_2D_ARRAY,ye,ze,Ie.width,Ie.height,Ee.depth,0,Ie.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?G&&i.texSubImage3D(l.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,Ee.depth,De,$e,Ie.data):i.texImage3D(l.TEXTURE_2D_ARRAY,ye,ze,Ie.width,Ie.height,Ee.depth,0,De,$e,Ie.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{nt&&ot&&i.texStorage2D(l.TEXTURE_2D,Ne,ze,Xe[0].width,Xe[0].height);for(let ye=0,Le=Xe.length;ye<Le;ye++)Ie=Xe[ye],M.format!==zi?De!==null?nt?G&&i.compressedTexSubImage2D(l.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,De,Ie.data):i.compressedTexImage2D(l.TEXTURE_2D,ye,ze,Ie.width,Ie.height,0,Ie.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?G&&i.texSubImage2D(l.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,De,$e,Ie.data):i.texImage2D(l.TEXTURE_2D,ye,ze,Ie.width,Ie.height,0,De,$e,Ie.data)}else if(M.isDataArrayTexture)if(nt){if(ot&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Ne,ze,Ee.width,Ee.height,Ee.depth),G)if(M.layerUpdates.size>0){const ye=Pv(Ee.width,Ee.height,M.format,M.type);for(const Le of M.layerUpdates){const Ve=Ee.data.subarray(Le*ye/Ee.data.BYTES_PER_ELEMENT,(Le+1)*ye/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,Le,Ee.width,Ee.height,1,De,$e,Ve)}M.clearLayerUpdates()}else i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,$e,Ee.data)}else i.texImage3D(l.TEXTURE_2D_ARRAY,0,ze,Ee.width,Ee.height,Ee.depth,0,De,$e,Ee.data);else if(M.isData3DTexture)nt?(ot&&i.texStorage3D(l.TEXTURE_3D,Ne,ze,Ee.width,Ee.height,Ee.depth),G&&i.texSubImage3D(l.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,$e,Ee.data)):i.texImage3D(l.TEXTURE_3D,0,ze,Ee.width,Ee.height,Ee.depth,0,De,$e,Ee.data);else if(M.isFramebufferTexture){if(ot)if(nt)i.texStorage2D(l.TEXTURE_2D,Ne,ze,Ee.width,Ee.height);else{let ye=Ee.width,Le=Ee.height;for(let Ve=0;Ve<Ne;Ve++)i.texImage2D(l.TEXTURE_2D,Ve,ze,ye,Le,0,De,$e,null),ye>>=1,Le>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in l){const ye=l.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),Ee.parentNode!==ye){ye.appendChild(Ee),_.add(M),ye.onpaint=Le=>{const Ve=Le.changedElements;for(const be of _)Ve.includes(be.image)&&(be.needsUpdate=!0)},ye.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,Ee);else{const Ve=l.RGBA,be=l.RGBA,Je=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,Ve,be,Je,Ee)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(nt&&ot){const ye=Ut(Xe[0]);i.texStorage2D(l.TEXTURE_2D,Ne,ze,ye.width,ye.height)}for(let ye=0,Le=Xe.length;ye<Le;ye++)Ie=Xe[ye],nt?G&&i.texSubImage2D(l.TEXTURE_2D,ye,0,0,De,$e,Ie):i.texImage2D(l.TEXTURE_2D,ye,ze,De,$e,Ie);M.generateMipmaps=!1}else if(nt){if(ot){const ye=Ut(Ee);i.texStorage2D(l.TEXTURE_2D,Ne,ze,ye.width,ye.height)}G&&i.texSubImage2D(l.TEXTURE_2D,0,0,0,De,$e,Ee)}else i.texImage2D(l.TEXTURE_2D,0,ze,De,$e,Ee);S(M)&&O(le),Ue.__version=Re.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function we(D,M,$){if(M.image.length!==6)return;const le=Ae(D,M),ge=M.source;i.bindTexture(l.TEXTURE_CUBE_MAP,D.__webglTexture,l.TEXTURE0+$);const Re=s.get(ge);if(ge.version!==Re.__version||le===!0){i.activeTexture(l.TEXTURE0+$);const Ue=wt.getPrimaries(wt.workingColorSpace),_e=M.colorSpace===mr?null:wt.getPrimaries(M.colorSpace),Ee=M.colorSpace===mr||Ue===_e?l.NONE:l.BROWSER_DEFAULT_WEBGL;i.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(l.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,$e=M.image[0]&&M.image[0].isDataTexture,ze=[];for(let be=0;be<6;be++)!De&&!$e?ze[be]=y(M.image[be],!0,c.maxCubemapSize):ze[be]=$e?M.image[be].image:M.image[be],ze[be]=nn(M,ze[be]);const Ie=ze[0],Xe=f.convert(M.format,M.colorSpace),nt=f.convert(M.type),ot=C(M.internalFormat,Xe,nt,M.normalized,M.colorSpace),G=M.isVideoTexture!==!0,Ne=Re.__version===void 0||le===!0,ye=ge.dataReady;let Le=L(M,Ie);me(l.TEXTURE_CUBE_MAP,M);let Ve;if(De){G&&Ne&&i.texStorage2D(l.TEXTURE_CUBE_MAP,Le,ot,Ie.width,Ie.height);for(let be=0;be<6;be++){Ve=ze[be].mipmaps;for(let Je=0;Je<Ve.length;Je++){const Ge=Ve[Je];M.format!==zi?Xe!==null?G?ye&&i.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,0,0,Ge.width,Ge.height,Xe,Ge.data):i.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,ot,Ge.width,Ge.height,0,Ge.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ye&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,0,0,Ge.width,Ge.height,Xe,nt,Ge.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je,ot,Ge.width,Ge.height,0,Xe,nt,Ge.data)}}}else{if(Ve=M.mipmaps,G&&Ne){Ve.length>0&&Le++;const be=Ut(ze[0]);i.texStorage2D(l.TEXTURE_CUBE_MAP,Le,ot,be.width,be.height)}for(let be=0;be<6;be++)if($e){G?ye&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ze[be].width,ze[be].height,Xe,nt,ze[be].data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ot,ze[be].width,ze[be].height,0,Xe,nt,ze[be].data);for(let Je=0;Je<Ve.length;Je++){const Rt=Ve[Je].image[be].image;G?ye&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,0,0,Rt.width,Rt.height,Xe,nt,Rt.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,ot,Rt.width,Rt.height,0,Xe,nt,Rt.data)}}else{G?ye&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Xe,nt,ze[be]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ot,Xe,nt,ze[be]);for(let Je=0;Je<Ve.length;Je++){const Ge=Ve[Je];G?ye&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,0,0,Xe,nt,Ge.image[be]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je+1,ot,Xe,nt,Ge.image[be])}}}S(M)&&O(l.TEXTURE_CUBE_MAP),Re.__version=ge.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ve(D,M,$,le,ge,Re){const Ue=f.convert($.format,$.colorSpace),_e=f.convert($.type),Ee=C($.internalFormat,Ue,_e,$.normalized,$.colorSpace),De=s.get(M),$e=s.get($);if($e.__renderTarget=M,!De.__hasExternalTextures){const ze=Math.max(1,M.width>>Re),Ie=Math.max(1,M.height>>Re);ge===l.TEXTURE_3D||ge===l.TEXTURE_2D_ARRAY?i.texImage3D(ge,Re,Ee,ze,Ie,M.depth,0,Ue,_e,null):i.texImage2D(ge,Re,Ee,ze,Ie,0,Ue,_e,null)}i.bindFramebuffer(l.FRAMEBUFFER,D),$t(M)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,le,ge,$e.__webglTexture,0,Lt(M)):(ge===l.TEXTURE_2D||ge>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,le,ge,$e.__webglTexture,Re),i.bindFramebuffer(l.FRAMEBUFFER,null)}function Ce(D,M,$){if(l.bindRenderbuffer(l.RENDERBUFFER,D),M.depthBuffer){const le=M.depthTexture,ge=le&&le.isDepthTexture?le.type:null,Re=U(M.stencilBuffer,ge),Ue=M.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;$t(M)?h.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Lt(M),Re,M.width,M.height):$?l.renderbufferStorageMultisample(l.RENDERBUFFER,Lt(M),Re,M.width,M.height):l.renderbufferStorage(l.RENDERBUFFER,Re,M.width,M.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,Ue,l.RENDERBUFFER,D)}else{const le=M.textures;for(let ge=0;ge<le.length;ge++){const Re=le[ge],Ue=f.convert(Re.format,Re.colorSpace),_e=f.convert(Re.type),Ee=C(Re.internalFormat,Ue,_e,Re.normalized,Re.colorSpace);$t(M)?h.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Lt(M),Ee,M.width,M.height):$?l.renderbufferStorageMultisample(l.RENDERBUFFER,Lt(M),Ee,M.width,M.height):l.renderbufferStorage(l.RENDERBUFFER,Ee,M.width,M.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Gt(D,M,$){const le=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(l.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=s.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",z)),ge.__webglTexture===void 0){ge.__webglTexture=l.createTexture(),i.bindTexture(l.TEXTURE_CUBE_MAP,ge.__webglTexture),me(l.TEXTURE_CUBE_MAP,M.depthTexture);const De=f.convert(M.depthTexture.format),$e=f.convert(M.depthTexture.type);let ze;M.depthTexture.format===La?ze=l.DEPTH_COMPONENT24:M.depthTexture.format===qr&&(ze=l.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,ze,M.width,M.height,0,De,$e,null)}}else de(M.depthTexture,0);const Re=ge.__webglTexture,Ue=Lt(M),_e=le?l.TEXTURE_CUBE_MAP_POSITIVE_X+$:l.TEXTURE_2D,Ee=M.depthTexture.format===qr?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(M.depthTexture.format===La)$t(M)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,Ee,_e,Re,0,Ue):l.framebufferTexture2D(l.FRAMEBUFFER,Ee,_e,Re,0);else if(M.depthTexture.format===qr)$t(M)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,Ee,_e,Re,0,Ue):l.framebufferTexture2D(l.FRAMEBUFFER,Ee,_e,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(D){const M=s.get(D),$=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const le=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",ge)};le.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=le}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if($)for(let le=0;le<6;le++)Gt(M.__webglFramebuffer[le],D,le);else{const le=D.texture.mipmaps;le&&le.length>0?Gt(M.__webglFramebuffer[0],D,0):Gt(M.__webglFramebuffer,D,0)}else if($){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(i.bindFramebuffer(l.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=l.createRenderbuffer(),Ce(M.__webglDepthbuffer[le],D,!1);else{const ge=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Re=M.__webglDepthbuffer[le];l.bindRenderbuffer(l.RENDERBUFFER,Re),l.framebufferRenderbuffer(l.FRAMEBUFFER,ge,l.RENDERBUFFER,Re)}}else{const le=D.texture.mipmaps;if(le&&le.length>0?i.bindFramebuffer(l.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(l.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=l.createRenderbuffer(),Ce(M.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Re=M.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,Re),l.framebufferRenderbuffer(l.FRAMEBUFFER,ge,l.RENDERBUFFER,Re)}}i.bindFramebuffer(l.FRAMEBUFFER,null)}function gt(D,M,$){const le=s.get(D);M!==void 0&&ve(le.__webglFramebuffer,D,D.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),$!==void 0&&pt(D)}function St(D){const M=D.texture,$=s.get(D),le=s.get(M);D.addEventListener("dispose",b);const ge=D.textures,Re=D.isWebGLCubeRenderTarget===!0,Ue=ge.length>1;if(Ue||(le.__webglTexture===void 0&&(le.__webglTexture=l.createTexture()),le.__version=M.version,d.memory.textures++),Re){$.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[_e]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)$.__webglFramebuffer[_e][Ee]=l.createFramebuffer()}else $.__webglFramebuffer[_e]=l.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)$.__webglFramebuffer[_e]=l.createFramebuffer()}else $.__webglFramebuffer=l.createFramebuffer();if(Ue)for(let _e=0,Ee=ge.length;_e<Ee;_e++){const De=s.get(ge[_e]);De.__webglTexture===void 0&&(De.__webglTexture=l.createTexture(),d.memory.textures++)}if(D.samples>0&&$t(D)===!1){$.__webglMultisampledFramebuffer=l.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(l.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _e=0;_e<ge.length;_e++){const Ee=ge[_e];$.__webglColorRenderbuffer[_e]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,$.__webglColorRenderbuffer[_e]);const De=f.convert(Ee.format,Ee.colorSpace),$e=f.convert(Ee.type),ze=C(Ee.internalFormat,De,$e,Ee.normalized,Ee.colorSpace,D.isXRRenderTarget===!0),Ie=Lt(D);l.renderbufferStorageMultisample(l.RENDERBUFFER,Ie,ze,D.width,D.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+_e,l.RENDERBUFFER,$.__webglColorRenderbuffer[_e])}l.bindRenderbuffer(l.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=l.createRenderbuffer(),Ce($.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(l.FRAMEBUFFER,null)}}if(Re){i.bindTexture(l.TEXTURE_CUBE_MAP,le.__webglTexture),me(l.TEXTURE_CUBE_MAP,M);for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)ve($.__webglFramebuffer[_e][Ee],D,M,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ee);else ve($.__webglFramebuffer[_e],D,M,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);S(M)&&O(l.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let _e=0,Ee=ge.length;_e<Ee;_e++){const De=ge[_e],$e=s.get(De);let ze=l.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ze=D.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(ze,$e.__webglTexture),me(ze,De),ve($.__webglFramebuffer,D,De,l.COLOR_ATTACHMENT0+_e,ze,0),S(De)&&O(ze)}i.unbindTexture()}else{let _e=l.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_e=D.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(_e,le.__webglTexture),me(_e,M),M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)ve($.__webglFramebuffer[Ee],D,M,l.COLOR_ATTACHMENT0,_e,Ee);else ve($.__webglFramebuffer,D,M,l.COLOR_ATTACHMENT0,_e,0);S(M)&&O(_e),i.unbindTexture()}D.depthBuffer&&pt(D)}function tt(D){const M=D.textures;for(let $=0,le=M.length;$<le;$++){const ge=M[$];if(S(ge)){const Re=V(D),Ue=s.get(ge).__webglTexture;i.bindTexture(Re,Ue),O(Re),i.unbindTexture()}}}const it=[],Vt=[];function fn(D){if(D.samples>0){if($t(D)===!1){const M=D.textures,$=D.width,le=D.height;let ge=l.COLOR_BUFFER_BIT;const Re=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Ue=s.get(D),_e=M.length>1;if(_e)for(let De=0;De<M.length;De++)i.bindFramebuffer(l.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+De,l.RENDERBUFFER,null),i.bindFramebuffer(l.FRAMEBUFFER,Ue.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+De,l.TEXTURE_2D,null,0);i.bindFramebuffer(l.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Ee=D.texture.mipmaps;Ee&&Ee.length>0?i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let De=0;De<M.length;De++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=l.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=l.STENCIL_BUFFER_BIT)),_e){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const $e=s.get(M[De]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,$e,0)}l.blitFramebuffer(0,0,$,le,0,0,$,le,ge,l.NEAREST),g===!0&&(it.length=0,Vt.length=0,it.push(l.COLOR_ATTACHMENT0+De),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(it.push(Re),Vt.push(Re),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Vt)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,it))}if(i.bindFramebuffer(l.READ_FRAMEBUFFER,null),i.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),_e)for(let De=0;De<M.length;De++){i.bindFramebuffer(l.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+De,l.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const $e=s.get(M[De]).__webglTexture;i.bindFramebuffer(l.FRAMEBUFFER,Ue.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+De,l.TEXTURE_2D,$e,0)}i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&g){const M=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[M])}}}function Lt(D){return Math.min(c.maxSamples,D.samples)}function $t(D){const M=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function X(D){const M=d.render.frame;x.get(D)!==M&&(x.set(D,M),D.update())}function nn(D,M){const $=D.colorSpace,le=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Mu&&$!==mr&&(wt.getTransfer($)===qt?(le!==zi||ge!==Ti)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",$)),M}function Ut(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=W,this.resetTextureUnits=fe,this.getTextureUnits=J,this.setTextureUnits=ee,this.setTexture2D=de,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=Me,this.rebindTextures=gt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function j3(l,t){function i(s,c=mr){let f;const d=wt.getTransfer(c);if(s===Ti)return l.UNSIGNED_BYTE;if(s===Op)return l.UNSIGNED_SHORT_4_4_4_4;if(s===Pp)return l.UNSIGNED_SHORT_5_5_5_1;if(s===Mx)return l.UNSIGNED_INT_5_9_9_9_REV;if(s===Ex)return l.UNSIGNED_INT_10F_11F_11F_REV;if(s===Sx)return l.BYTE;if(s===yx)return l.SHORT;if(s===go)return l.UNSIGNED_SHORT;if(s===Lp)return l.INT;if(s===oa)return l.UNSIGNED_INT;if(s===ra)return l.FLOAT;if(s===ca)return l.HALF_FLOAT;if(s===bx)return l.ALPHA;if(s===Tx)return l.RGB;if(s===zi)return l.RGBA;if(s===La)return l.DEPTH_COMPONENT;if(s===qr)return l.DEPTH_STENCIL;if(s===Ax)return l.RED;if(s===Ip)return l.RED_INTEGER;if(s===Zr)return l.RG;if(s===zp)return l.RG_INTEGER;if(s===Bp)return l.RGBA_INTEGER;if(s===mu||s===gu||s===_u||s===vu)if(d===qt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===mu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_u)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===mu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_u)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jh||s===$h||s===ep||s===tp)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Jh)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$h)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ep)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===np||s===ip||s===ap||s===rp||s===sp||s===Su||s===lp)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(s===np||s===ip)return d===qt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===ap)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===rp)return f.COMPRESSED_R11_EAC;if(s===sp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Su)return f.COMPRESSED_RG11_EAC;if(s===lp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===op||s===cp||s===up||s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===Sp||s===yp)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(s===op)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===up)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_p)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mp||s===Ep||s===bp)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(s===Mp)return d===qt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ep)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Tp||s===Ap||s===yu||s===Rp)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(s===Tp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Ap)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yu)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_o?l.UNSIGNED_INT_24_8:l[s]!==void 0?l[s]:null}return{convert:i}}const Z3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K3=`
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

}`;class Q3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Px(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Hi({vertexShader:Z3,fragmentShader:K3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ci(new gr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J3 extends Qr{constructor(t,i){super();const s=this;let c=null,f=1,d=null,h="local-floor",g=1,m=null,x=null,_=null,v=null,E=null,R=null;const N=typeof XRWebGLBinding<"u",y=new Q3,S={},O=i.getContextAttributes();let V=null,C=null;const U=[],L=[],z=new Bt;let b=null,P=null;const k=new bi;k.viewport=new cn;const j=new bi;j.viewport=new cn;const ne=[k,j],fe=new rb;let J=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=U[Z];return he===void 0&&(he=new xh,U[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=U[Z];return he===void 0&&(he=new xh,U[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=U[Z];return he===void 0&&(he=new xh,U[Z]=he),he.getHandSpace()};function W(Z){const he=L.indexOf(Z.inputSource);if(he===-1)return;const Te=U[he];Te!==void 0&&(Te.update(Z.inputSource,Z.frame,m||d),Te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){c.removeEventListener("select",W),c.removeEventListener("selectstart",W),c.removeEventListener("selectend",W),c.removeEventListener("squeeze",W),c.removeEventListener("squeezestart",W),c.removeEventListener("squeezeend",W),c.removeEventListener("end",q),c.removeEventListener("inputsourceschange",de);for(let Z=0;Z<U.length;Z++){const he=L[Z];he!==null&&(L[Z]=null,U[Z].disconnect(he))}J=null,ee=null,y.reset();for(const Z in S)delete S[Z];if(t.setRenderTarget(V),E=null,v=null,_=null,c=null,C=null,Ae.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(z.width,z.height,!1),P!==null){const Z=P.camera;Z.fov=P.fov,Z.zoom=P.zoom,Z.updateProjectionMatrix(),P=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){f=Z,s.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,s.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return _===null&&N&&(_=new XRWebGLBinding(c,i)),_},this.getFrame=function(){return R},this.getSession=function(){return c},this.setSession=async function(Z){if(c=Z,c!==null){if(V=t.getRenderTarget(),c.addEventListener("select",W),c.addEventListener("selectstart",W),c.addEventListener("selectend",W),c.addEventListener("squeeze",W),c.addEventListener("squeezestart",W),c.addEventListener("squeezeend",W),c.addEventListener("end",q),c.addEventListener("inputsourceschange",de),O.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(z),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,we=null,ve=null;O.depth&&(ve=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=O.stencil?qr:La,we=O.stencil?_o:oa);const Ce={colorFormat:i.RGBA8,depthFormat:ve,scaleFactor:f};_=this.getBinding(),v=_.createProjectionLayer(Ce),c.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new Bi(v.textureWidth,v.textureHeight,{format:zi,type:Ti,depthTexture:new xo(v.textureWidth,v.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Te={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(c,i,Te),c.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),C=new Bi(E.framebufferWidth,E.framebufferHeight,{format:zi,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(g),m=null,d=await c.requestReferenceSpace(h),Ae.setContext(c),Ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function de(Z){for(let he=0;he<Z.removed.length;he++){const Te=Z.removed[he],we=L.indexOf(Te);we>=0&&(L[we]=null,U[we].disconnect(Te))}for(let he=0;he<Z.added.length;he++){const Te=Z.added[he];let we=L.indexOf(Te);if(we===-1){for(let Ce=0;Ce<U.length;Ce++)if(Ce>=L.length){L.push(Te),we=Ce;break}else if(L[Ce]===null){L[Ce]=Te,we=Ce;break}if(we===-1)break}const ve=U[we];ve&&ve.connect(Te)}}const se=new pe,ce=new pe;function Me(Z,he,Te){se.setFromMatrixPosition(he.matrixWorld),ce.setFromMatrixPosition(Te.matrixWorld);const we=se.distanceTo(ce),ve=he.projectionMatrix.elements,Ce=Te.projectionMatrix.elements,Gt=ve[14]/(ve[10]-1),pt=ve[14]/(ve[10]+1),gt=(ve[9]+1)/ve[5],St=(ve[9]-1)/ve[5],tt=(ve[8]-1)/ve[0],it=(Ce[8]+1)/Ce[0],Vt=Gt*tt,fn=Gt*it,Lt=we/(-tt+it),$t=Lt*-tt;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX($t),Z.translateZ(Lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ve[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const X=Gt+Lt,nn=pt+Lt,Ut=Vt-$t,D=fn+(we-$t),M=gt*pt/nn*X,$=St*pt/nn*X;Z.projectionMatrix.makePerspective(Ut,D,M,$,X,nn),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function je(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(c===null)return;let he=Z.near,Te=Z.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),fe.near=j.near=k.near=he,fe.far=j.far=k.far=Te,(J!==fe.near||ee!==fe.far)&&(c.updateRenderState({depthNear:fe.near,depthFar:fe.far}),J=fe.near,ee=fe.far),fe.layers.mask=Z.layers.mask|6,k.layers.mask=fe.layers.mask&-5,j.layers.mask=fe.layers.mask&-3;const we=Z.parent,ve=fe.cameras;je(fe,we);for(let Ce=0;Ce<ve.length;Ce++)je(ve[Ce],we);ve.length===2?Me(fe,k,j):fe.projectionMatrix.copy(k.projectionMatrix),P===null&&Z.isPerspectiveCamera&&(P={camera:Z,fov:Z.fov,zoom:Z.zoom}),ke(Z,fe,we)};function ke(Z,he,Te){Te===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Cp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return fe},this.getFoveation=function(){if(!(v===null&&E===null))return g},this.setFoveation=function(Z){g=Z,v!==null&&(v.fixedFoveation=Z),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(fe)},this.getCameraTexture=function(Z){return S[Z]};let B=null;function me(Z,he){if(x=he.getViewerPose(m||d),R=he,x!==null){const Te=x.views;E!==null&&(t.setRenderTargetFramebuffer(C,E.framebuffer),t.setRenderTarget(C));let we=!1;Te.length!==fe.cameras.length&&(fe.cameras.length=0,we=!0);for(let pt=0;pt<Te.length;pt++){const gt=Te[pt];let St=null;if(E!==null)St=E.getViewport(gt);else{const it=_.getViewSubImage(v,gt);St=it.viewport,pt===0&&(t.setRenderTargetTextures(C,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(C))}let tt=ne[pt];tt===void 0&&(tt=new bi,tt.layers.enable(pt),tt.viewport=new cn,ne[pt]=tt),tt.matrix.fromArray(gt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(gt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(St.x,St.y,St.width,St.height),pt===0&&(fe.matrix.copy(tt.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale)),we===!0&&fe.cameras.push(tt)}const ve=c.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&N){_=s.getBinding();const pt=_.getDepthInformation(Te[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,c.renderState)}if(ve&&ve.includes("camera-access")&&N){t.state.unbindTexture(),_=s.getBinding();for(let pt=0;pt<Te.length;pt++){const gt=Te[pt].camera;if(gt){let St=S[gt];St||(St=new Px,S[gt]=St);const tt=_.getCameraImage(gt);St.sourceTexture=tt}}}}for(let Te=0;Te<U.length;Te++){const we=L[Te],ve=U[Te];we!==null&&ve!==void 0&&ve.update(we,he,m||d)}B&&B(Z,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),R=null}const Ae=new Fx;Ae.setAnimationLoop(me),this.setAnimationLoop=function(Z){B=Z},this.dispose=function(){}}}const $3=new _n,qx=new ft;qx.set(-1,0,0,0,1,0,0,0,1);function eR(l,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Ix(l)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function c(y,S,O,V,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?f(y,S):S.isMeshLambertMaterial?(f(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(f(y,S),_(y,S)):S.isMeshPhongMaterial?(f(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(f(y,S),v(y,S),S.isMeshPhysicalMaterial&&E(y,S,C)):S.isMeshMatcapMaterial?(f(y,S),R(y,S)):S.isMeshDepthMaterial?f(y,S):S.isMeshDistanceMaterial?(f(y,S),N(y,S)):S.isMeshNormalMaterial?f(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?g(y,S,O,V):S.isSpriteMaterial?m(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Kn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Kn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const O=t.get(S),V=O.envMap,C=O.envMapRotation;V&&(y.envMap.value=V,y.envMapRotation.value.setFromMatrix4($3.makeRotationFromEuler(C)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(qx),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function g(y,S,O,V){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*O,y.scale.value=V*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function E(y,S,O){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,S){S.matcap&&(y.matcap.value=S.matcap)}function N(y,S){const O=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function tR(l,t,i,s){let c={},f={},d=[];const h=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function g(C,U){const L=U.program;s.uniformBlockBinding(C,L)}function m(C,U){let L=c[C.id];L===void 0&&(y(C),L=x(C),c[C.id]=L,C.addEventListener("dispose",O));const z=U.program;s.updateUBOMapping(C,z);const b=t.render.frame;f[C.id]!==b&&(v(C),f[C.id]=b)}function x(C){const U=_();C.__bindingPointIndex=U;const L=l.createBuffer(),z=C.__size,b=C.usage;return l.bindBuffer(l.UNIFORM_BUFFER,L),l.bufferData(l.UNIFORM_BUFFER,z,b),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,U,L),L}function _(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const U=c[C.id],L=C.uniforms,z=C.__cache;l.bindBuffer(l.UNIFORM_BUFFER,U);for(let b=0,P=L.length;b<P;b++){const k=L[b];if(Array.isArray(k))for(let j=0,ne=k.length;j<ne;j++)E(k[j],b,j,z);else E(k,b,0,z)}l.bindBuffer(l.UNIFORM_BUFFER,null)}function E(C,U,L,z){if(N(C,U,L,z)===!0){const b=C.__offset,P=C.value;if(Array.isArray(P)){let k=0;for(let j=0;j<P.length;j++){const ne=P[j],fe=S(ne);R(ne,C.__data,k),typeof ne!="number"&&typeof ne!="boolean"&&!ne.isMatrix3&&!ArrayBuffer.isView(ne)&&(k+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(P,C.__data,0);l.bufferSubData(l.UNIFORM_BUFFER,b,C.__data)}}function R(C,U,L){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,L)}function N(C,U,L,z){const b=C.value,P=U+"_"+L;if(z[P]===void 0)return typeof b=="number"||typeof b=="boolean"?z[P]=b:ArrayBuffer.isView(b)?z[P]=b.slice():z[P]=b.clone(),!0;{const k=z[P];if(typeof b=="number"||typeof b=="boolean"){if(k!==b)return z[P]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(k.equals(b)===!1)return k.copy(b),!0}}return!1}function y(C){const U=C.uniforms;let L=0;const z=16;for(let P=0,k=U.length;P<k;P++){const j=Array.isArray(U[P])?U[P]:[U[P]];for(let ne=0,fe=j.length;ne<fe;ne++){const J=j[ne],ee=Array.isArray(J.value)?J.value:[J.value];for(let W=0,q=ee.length;W<q;W++){const de=ee[W],se=S(de),ce=L%z,Me=ce%se.boundary,je=ce+Me;L+=Me,je!==0&&z-je<se.storage&&(L+=z-je),J.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=L,L+=se.storage}}}const b=L%z;return b>0&&(L+=z-b),C.__size=L,C.__cache={},this}function S(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):st("WebGLRenderer: Unsupported uniform value type.",C),U}function O(C){const U=C.target;U.removeEventListener("dispose",O);const L=d.indexOf(U.__bindingPointIndex);d.splice(L,1),l.deleteBuffer(c[U.id]),delete c[U.id],delete f[U.id]}function V(){for(const C in c)l.deleteBuffer(c[C]);d=[],c={},f={}}return{bind:g,update:m,dispose:V}}const nR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let na=null;function iR(){return na===null&&(na=new kE(nR,16,16,Zr,ca),na.name="DFG_LUT",na.minFilter=In,na.magFilter=In,na.wrapS=Ii,na.wrapT=Ii,na.generateMipmaps=!1,na.needsUpdate=!0),na}class aR{constructor(t={}){const{canvas:i=vE(),context:s=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:E=Ti}=t;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const N=E,y=new Set([Bp,zp,Ip]),S=new Set([Ti,oa,go,_o,Op,Pp]),O=new Uint32Array(4),V=new Int32Array(4),C=new pe;let U=null,L=null;const z=[],b=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=la,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let j=!1,ne=null,fe=null,J=null,ee=null;this._outputColorSpace=Ei;let W=0,q=0,de=null,se=-1,ce=null;const Me=new cn,je=new cn;let ke=null;const B=new zt(0);let me=0,Ae=i.width,Z=i.height,he=1,Te=null,we=null;const ve=new cn(0,0,Ae,Z),Ce=new cn(0,0,Ae,Z);let Gt=!1;const pt=new Lx;let gt=!1,St=!1;const tt=new _n,it=new pe,Vt=new cn,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function $t(){return de===null?he:1}let X=s;function nn(T,F){return i.getContext(T,F)}let Ut,D,M,$,le,ge,Re,Ue,_e,Ee,De,$e,ze,Ie,Xe,nt,ot,G,Ne,ye,Le,Ve,be;try{const T={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Up}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",ct,!1),i.addEventListener("webglcontextcreationerror",Qn,!1),X===null){const F="webgl2";if(X=nn(F,T),X===null)throw nn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(T){throw i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",ct,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),Ot("WebGLRenderer: "+T.message),T}function Je(){Ut=new iA(X),Ut.init(),Le=new j3(X,Ut),D=new Y1(X,Ut,t,Le),M=new q3(X,Ut),D.reversedDepthBuffer&&v&&M.buffers.depth.setReversed(!0),fe=X.createFramebuffer(),J=X.createFramebuffer(),ee=X.createFramebuffer(),$=new sA(X),le=new U3,ge=new Y3(X,Ut,M,le,D,Le,$),Re=new nA(k),Ue=new ob(X),Ve=new W1(X,Ue),_e=new aA(X,Ue,$,Ve),Ee=new oA(X,_e,Ue,Ve,$),G=new lA(X,D,ge),Xe=new j1(le),De=new D3(k,Re,Ut,D,Ve,Xe),$e=new eR(k,le),ze=new O3,Ie=new H3(Ut),ot=new k1(k,Re,M,Ee,R,g),nt=new W3(k,Ee,D),be=new tR(X,$,D,M),Ne=new q1(X,Ut,$),ye=new rA(X,Ut,$),$.programs=De.programs,k.capabilities=D,k.extensions=Ut,k.properties=le,k.renderLists=ze,k.shadowMap=nt,k.state=M,k.info=$}N!==Ti&&(P=new uA(N,i.width,i.height,h,c,f));const Ge=new J3(k,X);this.xr=Ge,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=Ut.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ut.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(T){T!==void 0&&(he=T,this.setSize(Ae,Z,!1))},this.getSize=function(T){return T.set(Ae,Z)},this.setSize=function(T,F,ue=!0){if(Ge.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=T,Z=F,i.width=Math.floor(T*he),i.height=Math.floor(F*he),ue===!0&&(i.style.width=T+"px",i.style.height=F+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Ae*he,Z*he).floor()},this.setDrawingBufferSize=function(T,F,ue){Ae=T,Z=F,he=ue,i.width=Math.floor(T*ue),i.height=Math.floor(F*ue),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(N===Ti){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Me)},this.getViewport=function(T){return T.copy(ve)},this.setViewport=function(T,F,ue,ie){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,F,ue,ie),M.viewport(Me.copy(ve).multiplyScalar(he).round())},this.getScissor=function(T){return T.copy(Ce)},this.setScissor=function(T,F,ue,ie){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,F,ue,ie),M.scissor(je.copy(Ce).multiplyScalar(he).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(T){M.setScissorTest(Gt=T)},this.setOpaqueSort=function(T){Te=T},this.setTransparentSort=function(T){we=T},this.getClearColor=function(T){return T.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,ue=!0){let ie=0;if(T){let ae=!1;if(de!==null){const Be=de.texture.format;ae=y.has(Be)}if(ae){const Be=de.texture.type,We=S.has(Be),Oe=ot.getClearColor(),Ze=ot.getClearAlpha(),Ke=Oe.r,rt=Oe.g,ut=Oe.b;We?(O[0]=Ke,O[1]=rt,O[2]=ut,O[3]=Ze,X.clearBufferuiv(X.COLOR,0,O)):(V[0]=Ke,V[1]=rt,V[2]=ut,V[3]=Ze,X.clearBufferiv(X.COLOR,0,V))}else ie|=X.COLOR_BUFFER_BIT}F&&(ie|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ie|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&X.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),ne=T},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",ct,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),ot.dispose(),ze.dispose(),Ie.dispose(),le.dispose(),Re.dispose(),Ee.dispose(),Ve.dispose(),be.dispose(),De.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",vr),Ge.removeEventListener("sessionend",Ia),Gi.stop()};function Rt(T){T.preventDefault(),mv("WebGLRenderer: Context Lost."),j=!0}function ct(){mv("WebGLRenderer: Context Restored."),j=!1;const T=$.autoReset,F=nt.enabled,ue=nt.autoUpdate,ie=nt.needsUpdate,ae=nt.type;Je(),$.autoReset=T,nt.enabled=F,nt.autoUpdate=ue,nt.needsUpdate=ie,nt.type=ae}function Qn(T){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function fi(T){const F=T.target;F.removeEventListener("dispose",fi),Nu(F)}function Nu(T){Jr(T),le.remove(T)}function Jr(T){const F=le.get(T).programs;F!==void 0&&(F.forEach(function(ue){De.releaseProgram(ue)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,ue,ie,ae,Be){F===null&&(F=fn);const We=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Oe=dl(T,F,ue,ie,ae);M.setMaterial(ie,We);let Ze=ue.index,Ke=1;if(ie.wireframe===!0){if(Ze=_e.getWireframeAttribute(ue),Ze===void 0)return;Ke=2}const rt=ue.drawRange,ut=ue.attributes.position;let qe=rt.start*Ke,yt=(rt.start+rt.count)*Ke;Be!==null&&(qe=Math.max(qe,Be.start*Ke),yt=Math.min(yt,(Be.start+Be.count)*Ke)),Ze!==null?(qe=Math.max(qe,0),yt=Math.min(yt,Ze.count)):ut!=null&&(qe=Math.max(qe,0),yt=Math.min(yt,ut.count));const _t=yt-qe;if(_t<0||_t===1/0)return;Ve.setup(ae,ie,Oe,ue,Ze);let Yt,Ft=Ne;if(Ze!==null&&(Yt=Ue.get(Ze),Ft=ye,Ft.setIndex(Yt)),ae.isMesh)ie.wireframe===!0?(M.setLineWidth(ie.wireframeLinewidth*$t()),Ft.setMode(X.LINES)):Ft.setMode(X.TRIANGLES);else if(ae.isLine){let vn=ie.linewidth;vn===void 0&&(vn=1),M.setLineWidth(vn*$t()),ae.isLineSegments?Ft.setMode(X.LINES):ae.isLineLoop?Ft.setMode(X.LINE_LOOP):Ft.setMode(X.LINE_STRIP)}else ae.isPoints?Ft.setMode(X.POINTS):ae.isSprite&&Ft.setMode(X.TRIANGLES);if(ae.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))Ft.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const vn=ae._multiDrawStarts,Fe=ae._multiDrawCounts,rn=ae._multiDrawCount,Ct=Ze?Ue.get(Ze).bytesPerElement:1,Bn=le.get(ie).currentProgram.getUniforms();for(let Jn=0;Jn<rn;Jn++)Bn.setValue(X,"_gl_DrawID",Jn),Ft.render(vn[Jn]/Ct,Fe[Jn])}else if(ae.isInstancedMesh)Ft.renderInstances(qe,_t,ae.count);else if(ue.isInstancedBufferGeometry){const vn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Fe=Math.min(ue.instanceCount,vn);Ft.renderInstances(qe,_t,Fe)}else Ft.render(qe,_t)};function _r(T,F,ue,ie){ne!==null&&T.isNodeMaterial&&ne.setObject(ie,T),gt===!0&&Xe.setState(T,ue,!1),T.transparent===!0&&T.side===aa&&T.forceSinglePass===!1?(T.side=Kn,T.needsUpdate=!0,xr(T,F,ie),T.side=Yr,T.needsUpdate=!0,xr(T,F,ie),T.side=aa):xr(T,F,ie)}this.compile=function(T,F,ue=null){ue===null&&(ue=T),ne!==null&&ne.renderStart(T,F,ue),L=Ie.get(ue),L.init(F),b.push(L),ue.traverseVisible(function(ae){ae.isLight&&ae.layers.test(F.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),T!==ue&&T.traverseVisible(function(ae){ae.isLight&&ae.layers.test(F.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights(),ne!==null&&ne.updateLights(L.state.lightsArray),St=this.localClippingEnabled,gt=Xe.init(this.clippingPlanes,St),gt===!0&&Xe.setGlobalState(this.clippingPlanes,F),ne!==null&&nt.render(L.state.shadowsArray,ue,F);const ie=new Set;return T.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Be=ae.material;if(Be)if(Array.isArray(Be))for(let We=0;We<Be.length;We++){const Oe=Be[We];_r(Oe,ue,F,ae),ie.add(Oe)}else _r(Be,ue,F,ae),ie.add(Be)}),L=b.pop(),ne!==null&&ne.renderEnd(),ie},this.compileAsync=function(T,F,ue=null){const ie=this.compile(T,F,ue);return new Promise(ae=>{function Be(){if(ie.forEach(function(We){const Ze=le.get(We).currentProgram;(Ze===void 0||Ze.isReady())&&ie.delete(We)}),ie.size===0){ae(T);return}setTimeout(Be,10)}Ut.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Pa=null;function ua(T){Pa&&Pa(T)}function vr(){Gi.stop()}function Ia(){Gi.start()}const Gi=new Fx;Gi.setAnimationLoop(ua),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(T){Pa=T,Ge.setAnimationLoop(T),T===null?Gi.stop():Gi.start()},Ge.addEventListener("sessionstart",vr),Ge.addEventListener("sessionend",Ia),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;ne!==null&&ne.renderStart(T,F);const ue=Ge.enabled===!0&&Ge.isPresenting===!0,ie=P!==null&&(de===null||ue)&&P.begin(k,de);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(F),F=Ge.getCamera()),T.isScene===!0&&T.onBeforeRender(k,T,F,de),L=Ie.get(T,b.length),L.init(F),L.state.textureUnits=ge.getTextureUnits(),b.push(L),tt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),pt.setFromProjectionMatrix(tt,sa,F.reversedDepth),St=this.localClippingEnabled,gt=Xe.init(this.clippingPlanes,St),U=ze.get(T,z.length),U.init(),z.push(U),Ge.enabled===!0&&Ge.isPresenting===!0){const We=k.xr.getDepthSensingMesh();We!==null&&ll(We,F,-1/0,k.sortObjects)}ll(T,F,0,k.sortObjects),U.finish(),ne!==null&&ne.updateLights(L.state.lightsArray),k.sortObjects===!0&&U.sort(Te,we),Lt=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,Lt&&ot.addToRenderList(U,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&Xe.beginShadows();const ae=L.state.shadowsArray;if(nt.render(ae,T,F),gt===!0&&Xe.endShadows(),(ie&&P.hasRenderPass())===!1){const We=U.opaque,Oe=U.transmissive;if(L.setupLights(),F.isArrayCamera){const Ze=F.cameras;if(Oe.length>0)for(let Ke=0,rt=Ze.length;Ke<rt;Ke++){const ut=Ze[Ke];$r(We,Oe,T,ut)}Lt&&ot.render(T);for(let Ke=0,rt=Ze.length;Ke<rt;Ke++){const ut=Ze[Ke];ol(U,T,ut,ut.viewport)}}else Oe.length>0&&$r(We,Oe,T,F),Lt&&ot.render(T),ol(U,T,F)}de!==null&&q===0&&(ge.updateMultisampleRenderTarget(de),ge.updateRenderTargetMipmap(de)),ie&&P.end(k),T.isScene===!0&&T.onAfterRender(k,T,F),Ve.resetDefaultState(),se=-1,ce=null,b.pop(),b.length>0?(L=b[b.length-1],ge.setTextureUnits(L.state.textureUnits),gt===!0&&Xe.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?U=z[z.length-1]:U=null,ne!==null&&ne.renderEnd()};function ll(T,F,ue,ie){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)ue=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)L.pushLightProbeGrid(T);else if(T.isLight)L.pushLight(T),T.castShadow&&L.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(pt)){ie&&Vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(tt);const We=Ee.update(T),Oe=T.material;Oe.visible&&U.push(T,We,Oe,ue,Vt.z,null,F)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(pt))){const We=Ee.update(T),Oe=T.material;if(ie&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Vt.copy(T.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Vt.copy(We.boundingSphere.center)),Vt.applyMatrix4(T.matrixWorld).applyMatrix4(tt)),Array.isArray(Oe)){const Ze=We.groups;for(let Ke=0,rt=Ze.length;Ke<rt;Ke++){const ut=Ze[Ke],qe=Oe[ut.materialIndex];qe&&qe.visible&&U.push(T,We,qe,ue,Vt.z,ut,F)}}else Oe.visible&&U.push(T,We,Oe,ue,Vt.z,null,F)}}const Be=T.children;for(let We=0,Oe=Be.length;We<Oe;We++)ll(Be[We],F,ue,ie)}function ol(T,F,ue,ie){const{opaque:ae,transmissive:Be,transparent:We}=T;L.setupLightsView(ue),gt===!0&&Xe.setGlobalState(k.clippingPlanes,ue),ie&&M.viewport(Me.copy(ie)),ae.length>0&&Vi(ae,F,ue),Be.length>0&&Vi(Be,F,ue),We.length>0&&Vi(We,F,ue),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function $r(T,F,ue,ie){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const qe=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new Bi(1,1,{generateMipmaps:!0,type:qe?ca:Ti,minFilter:Wr,samples:Math.max(4,D.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Be=L.state.transmissionRenderTarget[ie.id],We=ie.viewport||Me;Be.setSize(We.z*k.transmissionResolutionScale,We.w*k.transmissionResolutionScale);const Oe=k.getRenderTarget(),Ze=k.getActiveCubeFace(),Ke=k.getActiveMipmapLevel();k.setRenderTarget(Be),k.getClearColor(B),me=k.getClearAlpha(),me<1&&k.setClearColor(16777215,.5),k.clear(),Lt&&ot.render(ue);const rt=k.toneMapping;k.toneMapping=la;const ut=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),gt===!0&&Xe.setGlobalState(k.clippingPlanes,ie),Vi(T,ue,ie),ge.updateMultisampleRenderTarget(Be),ge.updateRenderTargetMipmap(Be),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let yt=0,_t=F.length;yt<_t;yt++){const Yt=F[yt],{object:Ft,geometry:vn,material:Fe,group:rn}=Yt;if(Fe.side===aa&&Ft.layers.test(ie.layers)){const Ct=Fe.side;Fe.side=Kn,Fe.needsUpdate=!0,Eo(Ft,ue,ie,vn,Fe,rn),Fe.side=Ct,Fe.needsUpdate=!0,qe=!0}}qe===!0&&(ge.updateMultisampleRenderTarget(Be),ge.updateRenderTargetMipmap(Be))}k.setRenderTarget(Oe,Ze,Ke),k.setClearColor(B,me),ut!==void 0&&(ie.viewport=ut),k.toneMapping=rt}function Vi(T,F,ue){const ie=F.isScene===!0?F.overrideMaterial:null;for(let ae=0,Be=T.length;ae<Be;ae++){const We=T[ae],{object:Oe,geometry:Ze,group:Ke}=We;let rt=We.material;rt.allowOverride===!0&&ie!==null&&(rt=ie),Oe.layers.test(ue.layers)&&Eo(Oe,F,ue,Ze,rt,Ke)}}function Eo(T,F,ue,ie,ae,Be){ne!==null&&ae.isNodeMaterial&&ne.setObject(T,ae),T.onBeforeRender(k,F,ue,ie,ae,Be),T.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ae.onBeforeRender(k,F,ue,ie,T,Be),ae.transparent===!0&&ae.side===aa&&ae.forceSinglePass===!1?(ae.side=Kn,ae.needsUpdate=!0,k.renderBufferDirect(ue,F,ie,ae,T,Be),ae.side=Yr,ae.needsUpdate=!0,k.renderBufferDirect(ue,F,ie,ae,T,Be),ae.side=aa):k.renderBufferDirect(ue,F,ie,ae,T,Be),T.onAfterRender(k,F,ue,ie,ae,Be)}function xr(T,F,ue){F.isScene!==!0&&(F=fn);const ie=le.get(T),ae=L.state.lights,Be=L.state.shadowsArray,We=ae.state.version,Oe=De.getParameters(T,ae.state,Be,F,ue,L.state.lightProbeGridArray),Ze=De.getProgramCacheKey(Oe);let Ke=ie.programs;ie.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,ie.fog=F.fog;const rt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ie.envMap=Re.get(T.envMap||ie.environment,rt),ie.envMapRotation=ie.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ke===void 0&&(T.addEventListener("dispose",fi),Ke=new Map,ie.programs=Ke);let ut=Ke.get(Ze);if(ut!==void 0){if(ie.currentProgram===ut&&ie.lightsStateVersion===We)return ul(T,Oe),ut}else Oe.uniforms=De.getUniforms(T),ne!==null&&T.isNodeMaterial&&ne.build(T,ue,Oe),T.onBeforeCompile(Oe,k),ut=De.acquireProgram(Oe,Ze),Ke.set(Ze,ut),ie.uniforms=Oe.uniforms;const qe=ie.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qe.clippingPlanes=Xe.uniform),ul(T,Oe),ie.needsLights=To(T),ie.lightsStateVersion=We,ie.needsLights&&(qe.ambientLightColor.value=ae.state.ambient,qe.lightProbe.value=ae.state.probe,qe.sunLights.value=ae.state.sun,qe.sunLightShadows.value=ae.state.sunShadow,qe.directionalLights.value=ae.state.directional,qe.directionalLightShadows.value=ae.state.directionalShadow,qe.spotLights.value=ae.state.spot,qe.spotLightShadows.value=ae.state.spotShadow,qe.rectAreaLights.value=ae.state.rectArea,qe.ltc_1.value=ae.state.rectAreaLTC1,qe.ltc_2.value=ae.state.rectAreaLTC2,qe.pointLights.value=ae.state.point,qe.pointLightShadows.value=ae.state.pointShadow,qe.hemisphereLights.value=ae.state.hemi,qe.sunShadowMatrix.value=ae.state.sunShadowMatrix,qe.sunShadowCascade.value=ae.state.sunShadowCascade,qe.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,qe.spotLightMatrix.value=ae.state.spotLightMatrix,qe.spotLightMap.value=ae.state.spotLightMap,qe.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=ut,ie.uniformsList=null,ut}function cl(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=xu.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function ul(T,F){const ue=le.get(T);ue.outputColorSpace=F.outputColorSpace,ue.batching=F.batching,ue.batchingColor=F.batchingColor,ue.instancing=F.instancing,ue.instancingColor=F.instancingColor,ue.instancingMorph=F.instancingMorph,ue.skinning=F.skinning,ue.morphTargets=F.morphTargets,ue.morphNormals=F.morphNormals,ue.morphColors=F.morphColors,ue.morphTargetsCount=F.morphTargetsCount,ue.numClippingPlanes=F.numClippingPlanes,ue.numIntersection=F.numClipIntersection,ue.vertexAlphas=F.vertexAlphas,ue.vertexTangents=F.vertexTangents,ue.toneMapping=F.toneMapping}function fl(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;C.setFromMatrixPosition(F.matrixWorld);for(let ue=0,ie=T.length;ue<ie;ue++){const ae=T[ue];if(ae.texture!==null&&ae.boundingBox.containsPoint(C))return ae}return null}function dl(T,F,ue,ie,ae){F.isScene!==!0&&(F=fn),ge.resetTextureUnits();const Be=F.fog,We=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?F.environment:null,Oe=de===null?k.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:wt.workingColorSpace,Ze=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ke=Re.get(ie.envMap||We,Ze),rt=ie.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ut=!!ue.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),qe=!!ue.morphAttributes.position,yt=!!ue.morphAttributes.normal,_t=!!ue.morphAttributes.color;let Yt=la;ie.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Yt=k.toneMapping);const Ft=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,vn=Ft!==void 0?Ft.length:0,Fe=le.get(ie),rn=L.state.lights;if(gt===!0&&(St===!0||T!==ce)){const bt=T===ce&&ie.id===se;Xe.setState(ie,T,bt)}let Ct=!1;ie.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==rn.state.version||Fe.outputColorSpace!==Oe||ae.isBatchedMesh&&Fe.batching===!1||!ae.isBatchedMesh&&Fe.batching===!0||ae.isBatchedMesh&&Fe.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&Fe.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&Fe.instancing===!1||!ae.isInstancedMesh&&Fe.instancing===!0||ae.isSkinnedMesh&&Fe.skinning===!1||!ae.isSkinnedMesh&&Fe.skinning===!0||ae.isInstancedMesh&&Fe.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Fe.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Fe.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Fe.instancingMorph===!1&&ae.morphTexture!==null||Fe.envMap!==Ke||ie.fog===!0&&Fe.fog!==Be||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Xe.numPlanes||Fe.numIntersection!==Xe.numIntersection)||Fe.vertexAlphas!==rt||Fe.vertexTangents!==ut||Fe.morphTargets!==qe||Fe.morphNormals!==yt||Fe.morphColors!==_t||Fe.toneMapping!==Yt||Fe.morphTargetsCount!==vn||!!Fe.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,Fe.__version=ie.version);let Bn=Fe.currentProgram;Ct===!0&&(Bn=xr(ie,F,ae),ne&&ie.isNodeMaterial&&ne.onUpdateProgram(ie,Bn,Fe));let Jn=!1,Xi=!1,vt=!1;const Pt=Bn.getUniforms(),Kt=Fe.uniforms;if(M.useProgram(Bn.program)&&(Jn=!0,Xi=!0,vt=!0),ie.id!==se&&(se=ie.id,Xi=!0),Fe.needsLights){const bt=fl(L.state.lightProbeGridArray,ae);Fe.lightProbeGrid!==bt&&(Fe.lightProbeGrid=bt,Xi=!0)}if(Jn||ce!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Pt.setValue(X,"projectionMatrix",T.projectionMatrix),Pt.setValue(X,"viewMatrix",T.matrixWorldInverse);const sn=Pt.map.cameraPosition;sn!==void 0&&sn.setValue(X,it.setFromMatrixPosition(T.matrixWorld)),D.logarithmicDepthBuffer&&Pt.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),ce!==T&&(ce=T,Xi=!0,vt=!0)}if(Fe.needsLights&&(rn.state.sunShadowMap.length>0&&Pt.setValue(X,"sunShadowMap",rn.state.sunShadowMap,ge),rn.state.directionalShadowMap.length>0&&Pt.setValue(X,"directionalShadowMap",rn.state.directionalShadowMap,ge),rn.state.spotShadowMap.length>0&&Pt.setValue(X,"spotShadowMap",rn.state.spotShadowMap,ge),rn.state.pointShadowMap.length>0&&Pt.setValue(X,"pointShadowMap",rn.state.pointShadowMap,ge)),ae.isSkinnedMesh){Pt.setOptional(X,ae,"bindMatrix"),Pt.setOptional(X,ae,"bindMatrixInverse");const bt=ae.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),Pt.setValue(X,"boneTexture",bt.boneTexture,ge))}ae.isBatchedMesh&&(Pt.setOptional(X,ae,"batchingTexture"),Pt.setValue(X,"batchingTexture",ae._matricesTexture,ge),Pt.setOptional(X,ae,"batchingIdTexture"),Pt.setValue(X,"batchingIdTexture",ae._indirectTexture,ge),Pt.setOptional(X,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Pt.setValue(X,"batchingColorTexture",ae._colorsTexture,ge));const $n=ue.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&G.update(ae,ue,Bn),(Xi||Fe.receiveShadow!==ae.receiveShadow)&&(Fe.receiveShadow=ae.receiveShadow,Pt.setValue(X,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&F.environment!==null&&(Kt.envMapIntensity.value=F.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=iR()),Xi){if(Pt.setValue(X,"toneMappingExposure",k.toneMappingExposure),Fe.needsLights&&bo(Kt,vt),Be&&ie.fog===!0&&$e.refreshFogUniforms(Kt,Be),$e.refreshMaterialUniforms(Kt,ie,he,Z,L.state.transmissionRenderTarget[T.id]),Fe.needsLights&&Fe.lightProbeGrid){const bt=Fe.lightProbeGrid;Kt.probesSH.value=bt.texture,Kt.probesMin.value.copy(bt.boundingBox.min),Kt.probesMax.value.copy(bt.boundingBox.max),Kt.probesResolution.value.copy(bt.resolution)}xu.upload(X,cl(Fe),Kt,ge)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(xu.upload(X,cl(Fe),Kt,ge),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(X,"center",ae.center),Pt.setValue(X,"modelViewMatrix",ae.modelViewMatrix),Pt.setValue(X,"normalMatrix",ae.normalMatrix),Pt.setValue(X,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const bt=ie.uniformsGroups;for(let sn=0,fa=bt.length;sn<fa;sn++){const Ao=bt[sn];be.update(Ao,Bn),be.bind(Ao,Bn)}}return Bn}function bo(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function To(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(T,F,ue){const ie=le.get(T);ie.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),le.get(T.texture).__webglTexture=F,le.get(T.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ue,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const ue=le.get(T);ue.__webglFramebuffer=F,ue.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,ue=0){de=T,W=F,q=ue;let ie=null,ae=!1,Be=!1;if(T){const Oe=le.get(T);if(Oe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(X.FRAMEBUFFER,Oe.__webglFramebuffer),Me.copy(T.viewport),je.copy(T.scissor),ke=T.scissorTest,M.viewport(Me),M.scissor(je),M.setScissorTest(ke),se=-1;return}else if(Oe.__webglFramebuffer===void 0)ge.setupRenderTarget(T);else if(Oe.__hasExternalTextures)ge.rebindTextures(T,le.get(T.texture).__webglTexture,le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const rt=T.depthTexture;if(Oe.__boundDepthTexture!==rt){if(rt!==null&&le.has(rt)&&(T.width!==rt.image.width||T.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(T)}}const Ze=T.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Be=!0);const Ke=le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[F])?ie=Ke[F][ue]:ie=Ke[F],ae=!0):T.samples>0&&ge.useMultisampledRTT(T)===!1?ie=le.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?ie=Ke[ue]:ie=Ke,Me.copy(T.viewport),je.copy(T.scissor),ke=T.scissorTest}else Me.copy(ve).multiplyScalar(he).floor(),je.copy(Ce).multiplyScalar(he).floor(),ke=Gt;if(ue!==0&&(ie=fe),M.bindFramebuffer(X.FRAMEBUFFER,ie)&&M.drawBuffers(T,ie),M.viewport(Me),M.scissor(je),M.setScissorTest(ke),ae){const Oe=le.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+F,Oe.__webglTexture,ue)}else if(Be){const Oe=F;for(let Ze=0;Ze<T.textures.length;Ze++){const Ke=le.get(T.textures[Ze]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ze,Ke.__webglTexture,ue,Oe)}}else if(T!==null&&ue!==0){const Oe=le.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Oe.__webglTexture,ue)}se=-1};function di(T){const F=le.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=D.textureFormatReadable(T.format),F.__typeReadable=D.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,ue,ie,ae,Be,We,Oe=0){if(!(T&&T.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze){M.bindFramebuffer(X.FRAMEBUFFER,Ze);try{const Ke=T.textures[Oe],rt=Ke.format,ut=Ke.type;T.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe);const qe=di(Ke);if(qe.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-ie&&ue>=0&&ue<=T.height-ae&&X.readPixels(F,ue,ie,ae,Le.convert(rt),Le.convert(ut),Be)}finally{const Ke=de!==null?le.get(de).__webglFramebuffer:null;M.bindFramebuffer(X.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(T,F,ue,ie,ae,Be,We,Oe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&We!==void 0&&(Ze=Ze[We]),Ze)if(F>=0&&F<=T.width-ie&&ue>=0&&ue<=T.height-ae){M.bindFramebuffer(X.FRAMEBUFFER,Ze);const Ke=T.textures[Oe],rt=Ke.format,ut=Ke.type;T.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe);const qe=di(Ke);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,yt),X.bufferData(X.PIXEL_PACK_BUFFER,Be.byteLength,X.STREAM_READ),X.readPixels(F,ue,ie,ae,Le.convert(rt),Le.convert(ut),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const _t=de!==null?le.get(de).__webglFramebuffer:null;M.bindFramebuffer(X.FRAMEBUFFER,_t);const Yt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await xE(X,Yt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,yt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Be),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(yt),X.deleteSync(Yt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,ue=0){const ie=Math.pow(2,-ue),ae=Math.floor(T.image.width*ie),Be=Math.floor(T.image.height*ie),We=F!==null?F.x:0,Oe=F!==null?F.y:0;ge.setTexture2D(T,0),X.copyTexSubImage2D(X.TEXTURE_2D,ue,0,0,We,Oe,ae,Be),M.unbindTexture()},this.copyTextureToTexture=function(T,F,ue=null,ie=null,ae=0,Be=0){let We,Oe,Ze,Ke,rt,ut,qe,yt,_t;const Yt=T.isCompressedTexture?T.mipmaps[Be]:T.image;if(ue!==null)We=ue.max.x-ue.min.x,Oe=ue.max.y-ue.min.y,Ze=ue.isBox3?ue.max.z-ue.min.z:1,Ke=ue.min.x,rt=ue.min.y,ut=ue.isBox3?ue.min.z:0;else{const Kt=Math.pow(2,-ae);We=Math.floor(Yt.width*Kt),Oe=Math.floor(Yt.height*Kt),T.isDataArrayTexture?Ze=Yt.depth:T.isData3DTexture?Ze=Math.floor(Yt.depth*Kt):Ze=1,Ke=0,rt=0,ut=0}ie!==null?(qe=ie.x,yt=ie.y,_t=ie.z):(qe=0,yt=0,_t=0);const Ft=Le.convert(F.format),vn=Le.convert(F.type);let Fe;F.isData3DTexture?(ge.setTexture3D(F,0),Fe=X.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ge.setTexture2DArray(F,0),Fe=X.TEXTURE_2D_ARRAY):(ge.setTexture2D(F,0),Fe=X.TEXTURE_2D),M.activeTexture(X.TEXTURE0),M.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(X.UNPACK_ALIGNMENT,F.unpackAlignment);const rn=M.getParameter(X.UNPACK_ROW_LENGTH),Ct=M.getParameter(X.UNPACK_IMAGE_HEIGHT),Bn=M.getParameter(X.UNPACK_SKIP_PIXELS),Jn=M.getParameter(X.UNPACK_SKIP_ROWS),Xi=M.getParameter(X.UNPACK_SKIP_IMAGES);M.pixelStorei(X.UNPACK_ROW_LENGTH,Yt.width),M.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Yt.height),M.pixelStorei(X.UNPACK_SKIP_PIXELS,Ke),M.pixelStorei(X.UNPACK_SKIP_ROWS,rt),M.pixelStorei(X.UNPACK_SKIP_IMAGES,ut);const vt=T.isDataArrayTexture||T.isData3DTexture,Pt=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const Kt=le.get(T),$n=le.get(F),bt=le.get(Kt.__renderTarget),sn=le.get($n.__renderTarget);M.bindFramebuffer(X.READ_FRAMEBUFFER,bt.__webglFramebuffer),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let fa=0;fa<Ze;fa++)vt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,le.get(T).__webglTexture,ae,ut+fa),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,le.get(F).__webglTexture,Be,_t+fa)),X.blitFramebuffer(Ke,rt,We,Oe,qe,yt,We,Oe,X.DEPTH_BUFFER_BIT,X.NEAREST);M.bindFramebuffer(X.READ_FRAMEBUFFER,null),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ae!==0||T.isRenderTargetTexture||le.has(T)){const Kt=le.get(T),$n=le.get(F);M.bindFramebuffer(X.READ_FRAMEBUFFER,J),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,ee);for(let bt=0;bt<Ze;bt++)vt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Kt.__webglTexture,ae,ut+bt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Kt.__webglTexture,ae),Pt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$n.__webglTexture,Be,_t+bt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,$n.__webglTexture,Be),ae!==0?X.blitFramebuffer(Ke,rt,We,Oe,qe,yt,We,Oe,X.COLOR_BUFFER_BIT,X.NEAREST):Pt?X.copyTexSubImage3D(Fe,Be,qe,yt,_t+bt,Ke,rt,We,Oe):X.copyTexSubImage2D(Fe,Be,qe,yt,Ke,rt,We,Oe);M.bindFramebuffer(X.READ_FRAMEBUFFER,null),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pt?T.isDataTexture||T.isData3DTexture?X.texSubImage3D(Fe,Be,qe,yt,_t,We,Oe,Ze,Ft,vn,Yt.data):F.isCompressedArrayTexture?X.compressedTexSubImage3D(Fe,Be,qe,yt,_t,We,Oe,Ze,Ft,Yt.data):X.texSubImage3D(Fe,Be,qe,yt,_t,We,Oe,Ze,Ft,vn,Yt):T.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Be,qe,yt,We,Oe,Ft,vn,Yt.data):T.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Be,qe,yt,Yt.width,Yt.height,Ft,Yt.data):X.texSubImage2D(X.TEXTURE_2D,Be,qe,yt,We,Oe,Ft,vn,Yt);M.pixelStorei(X.UNPACK_ROW_LENGTH,rn),M.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ct),M.pixelStorei(X.UNPACK_SKIP_PIXELS,Bn),M.pixelStorei(X.UNPACK_SKIP_ROWS,Jn),M.pixelStorei(X.UNPACK_SKIP_IMAGES,Xi),Be===0&&F.generateMipmaps&&X.generateMipmap(Fe),M.unbindTexture()},this.initRenderTarget=function(T){le.get(T).__webglFramebuffer===void 0&&ge.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ge.setTextureCube(T,0):T.isData3DTexture?ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ge.setTexture2DArray(T,0):ge.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){W=0,q=0,de=null,M.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(t),i.unpackColorSpace=wt._getUnpackColorSpace()}}const rR=`
varying vec2 vUv;
varying vec3 vVariation;
varying float vTreatment;
varying float vWorldY;

attribute vec3 aVariation;
attribute float aTreatment;

void main() {
  vUv = uv;
  vVariation = aVariation;
  vTreatment = aTreatment;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldY = worldPos.y;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,sR=`
precision highp float;

uniform sampler2D uTexture;
uniform vec3 uTint;
uniform float uOpacity;
uniform float uDotStrength;
uniform float uDotSize;
uniform float uTime;
uniform float uGroundY;
uniform float uGroundFade;

varying vec2 vUv;
varying vec3 vVariation;
varying float vTreatment;
varying float vWorldY;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 cell = floor(p);
  vec2 local = fract(p);
  local = local * local * (3.0 - 2.0 * local);
  float a = hash(cell);
  float b = hash(cell + vec2(1.0, 0.0));
  float c = hash(cell + vec2(0.0, 1.0));
  float d = hash(cell + vec2(1.0, 1.0));
  return mix(mix(a, b, local.x), mix(c, d, local.x), local.y);
}

void main() {
  vec4 sampleColor = texture2D(uTexture, vUv);
  if (sampleColor.a < 0.01) discard;

  float edgeNoise = noise(vUv * vec2(42.0, 22.0) + vec2(uTime * 0.04, uTime * -0.015));
  float edgeThreshold = mix(0.03, 0.12, edgeNoise);
  float alpha = smoothstep(edgeThreshold, 0.44, sampleColor.a);

  float luminance = dot(sampleColor.rgb, vec3(0.299, 0.587, 0.114));
  float edgeLight = smoothstep(0.08, 0.45, luminance + sampleColor.a * 0.2);
  alpha *= mix(0.65, 1.0, edgeLight);

  float posterized = floor(clamp(luminance, 0.0, 1.0) * 5.0 + 0.5) / 5.0;
  float vaporLight = smoothstep(0.02, 0.96, posterized);
  vec3 normalized = mix(vec3(0.78, 0.85, 0.90), vec3(1.0), vaporLight);

  // Applied Imagination halftone dot cell algorithm
  float dotSize = uDotSize * mix(0.85, 1.25, vVariation.z);
  vec2 dotCell = mod(gl_FragCoord.xy, dotSize) - dotSize * 0.5;
  float darkness = 1.0 - posterized;
  float dotRadius = dotSize * mix(0.08, 0.42, smoothstep(0.04, 0.85, darkness));
  float dotShape = 1.0 - smoothstep(max(0.0, dotRadius - 0.7), dotRadius + 0.7, length(dotCell));

  vec3 dotInk = mix(normalized * 0.55, vec3(1.0), vTreatment);
  normalized = mix(normalized, dotInk, dotShape * uDotStrength);
  alpha *= mix(0.85, 1.0, dotShape * uDotStrength * 0.5);
  alpha *= uOpacity * mix(0.7, 1.0, vVariation.x);
  alpha *= smoothstep(uGroundY, uGroundY + uGroundFade, vWorldY);

  if (alpha < 0.02) discard;
  gl_FragColor = vec4(normalized, alpha);
}
`;function lR(){const l=en.useRef(null);return en.useEffect(()=>{const t=l.current;if(!t)return;let i,s,c,f,d=[],h,g;try{i=new aR({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),s=new PE,c=new bi(48,window.innerWidth/window.innerHeight,.1,1e3),c.position.set(0,15,35),c.lookAt(0,5,-50);const O=new ib,V=O.load("/brand/gpc/clouds/cloud-bank-a.png"),C=O.load("/brand/gpc/clouds/cloud-bank-b.png"),U=O.load("/brand/gpc/flight/mountain-ground-cutout.png");V.wrapS=V.wrapT=Ii,C.wrapS=C.wrapT=Ii;const L={uTint:{value:new zt("#faf5ee")},uOpacity:{value:.95},uDotStrength:{value:.75},uDotSize:{value:5.5},uTime:{value:0},uGroundY:{value:-120},uGroundFade:{value:45}},z=ce=>new Hi({vertexShader:rR,fragmentShader:sR,uniforms:{...L,uTexture:{value:ce}},transparent:!0,depthWrite:!1,side:aa});h=z(V),g=z(C),[{x:-35,y:18,z:-25,scale:65,mat:h,speed:.008},{x:38,y:14,z:-35,scale:75,mat:g,speed:-.006},{x:-10,y:22,z:-55,scale:85,mat:h,speed:.005},{x:45,y:6,z:-70,scale:95,mat:g,speed:-.007},{x:-40,y:-5,z:-40,scale:70,mat:g,speed:.009},{x:25,y:-12,z:-50,scale:80,mat:h,speed:-.005},{x:-30,y:-22,z:-65,scale:90,mat:h,speed:.006},{x:35,y:-30,z:-60,scale:85,mat:g,speed:-.008},{x:-20,y:-45,z:-45,scale:80,mat:g,speed:.007},{x:30,y:-55,z:-55,scale:90,mat:h,speed:-.006},{x:-35,y:-68,z:-70,scale:95,mat:h,speed:.005},{x:20,y:-80,z:-65,scale:85,mat:g,speed:-.008}].forEach(ce=>{const Me=new gr(ce.scale,ce.scale*.55),je=Me.attributes.position.count,ke=new Float32Array(je*3),B=new Float32Array(je),me=Math.random(),Ae=Math.random(),Z=Math.random(),he=Math.random()>.4?1:0;for(let we=0;we<je;we++)ke[we*3]=me,ke[we*3+1]=Ae,ke[we*3+2]=Z,B[we]=he;Me.setAttribute("aVariation",new Fi(ke,3)),Me.setAttribute("aTreatment",new Fi(B,1));const Te=new ci(Me,ce.mat);Te.position.set(ce.x,ce.y,ce.z),s.add(Te),d.push({mesh:Te,baseX:ce.x,speed:ce.speed,minX:-80,maxX:80})});const P=new gr(160,70),k=new po({map:U,transparent:!0,opacity:.75,depthWrite:!1}),j=new ci(P,k);j.position.set(0,-115,-60),s.add(j);const ne=O.load("/brand/gpc/airliner-gpc-color-block.png"),fe=O.load("/brand/gpc/flight/jet-stream-magnific.png"),J=new gr(24,9.6),ee=new po({map:ne,transparent:!0,opacity:.95,depthWrite:!1}),W=new ci(J,ee);W.position.set(-8,19,-20),W.rotation.z=.02,s.add(W);const q=new gr(42,8.5),de=new po({map:fe,transparent:!0,opacity:.75,depthWrite:!1}),se=new ci(q,de);se.scale.x=-1,se.position.set(-34,18.2,-21),se.rotation.z=.02,s.add(se)}catch(O){console.error("WebGL flight canvas init failed:",O);return}let m=15,x=35;const _=()=>{const O=window.scrollY,V=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),C=Math.min(Math.max(O/V,0),1);m=15-C*120,x=35-C*25};window.addEventListener("scroll",_,{passive:!0}),_();let v=0,E=0;const R=O=>{v=(O.clientX/window.innerWidth-.5)*5,E=(O.clientY/window.innerHeight-.5)*2.5};window.addEventListener("mousemove",R,{passive:!0});const N=()=>{!i||!c||(c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",N);let y=new sb;const S=()=>{f=requestAnimationFrame(S);const O=y.getDelta(),V=y.getElapsedTime();if(h&&(h.uniforms.uTime.value=V),g&&(g.uniforms.uTime.value=V),c.position.x+=(v-c.position.x)*.05,c.position.y+=(m-E-c.position.y)*.08,c.position.z+=(x-c.position.z)*.08,c.lookAt(v*.3,c.position.y-10,-50),d.forEach(C=>{C.mesh.position.x+=C.speed*(O*60),C.mesh.position.x>C.maxX&&(C.mesh.position.x=C.minX),C.mesh.position.x<C.minX&&(C.mesh.position.x=C.maxX)}),s){const C=s.children.find(L=>L.geometry===airlinerGeo),U=s.children.find(L=>L.geometry===jetStreamGeo);C&&U&&(C.position.x+=.012*(O*60),U.position.x=C.position.x-26,C.position.x>80&&(C.position.x=-80,U.position.x=-106))}i.render(s,c)};return S(),()=>{cancelAnimationFrame(f),window.removeEventListener("scroll",_),window.removeEventListener("resize",N),window.removeEventListener("mousemove",R),i&&i.dispose()}},[]),w.jsxs("div",{className:"canvas-container","aria-hidden":"true",children:[w.jsx("div",{className:"flight-canvas flight-canvas--background"}),w.jsx("canvas",{ref:l,className:"flight-canvas flight-canvas--webgl"}),w.jsx("div",{className:"flight-canvas-halftone"}),w.jsx("div",{className:"flight-canvas-vignette"})]})}function oR(){const[l,t]=en.useState(3e4),[i,s]=en.useState("30,000 FT"),[c,f]=en.useState(4.2),[d,h]=en.useState(100);en.useEffect(()=>{const m=[];window.scrollY>10?s(null):[[300,"29,800 FT"],[600,"30,250 FT"],[900,"29,950 FT"],[1200,null]].forEach(([E,R])=>{m.push(window.setTimeout(()=>{window.scrollY<=10&&s(R)},E))});const _=()=>{const v=window.scrollY,E=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),R=Math.min(Math.max(v/E,0),1),N=Math.round(3e4*(1-R));t(N);const y=(4.2-R*1.35).toFixed(2);f(y),h(Math.round((1-R)*100)),document.documentElement.style.setProperty("--altitude-remaining",(N/3e4).toFixed(4))};return window.addEventListener("scroll",_,{passive:!0}),_(),()=>{m.forEach(v=>clearTimeout(v)),window.removeEventListener("scroll",_)}},[]);const g=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});return w.jsxs("aside",{className:"altitude-hud","aria-label":"Current story elevation & cell telemetry",children:[w.jsx("div",{className:"altitude-hud__track","aria-hidden":"true",children:w.jsx("span",{})}),w.jsxs("div",{className:"altitude-hud__readout",children:[w.jsx("span",{className:"altitude-hud__label",children:"Altitude"}),w.jsx("output",{className:"altitude-hud__value",children:i??`${g.format(l)} FT`}),w.jsxs("div",{className:"altitude-hud__battery-gauge",children:[w.jsxs("span",{children:["⚡ ",c,"V"]}),w.jsx("span",{children:"·"}),w.jsxs("span",{children:[d,"% SoC"]})]})]})]})}const ax=["var(--color-red)","var(--color-orange)","var(--color-purple)","var(--color-yellow)"];function cR(){const[l,t]=en.useState(0),i=en.useCallback(()=>{t(s=>(s+1)%ax.length)},[]);return w.jsx("header",{className:"masthead",id:"top",children:w.jsxs("div",{className:"masthead__frame",children:[w.jsxs("div",{className:"masthead__nav",children:[w.jsxs("a",{className:"masthead__brand",href:"#top","aria-label":"Battery Cell 4.0 home",onPointerEnter:i,onFocus:i,style:{"--brand-mark-hue":ax[l]},children:[w.jsx("svg",{viewBox:"0 0 357 197",role:"img","aria-label":"IBC 4.0 Brand Mark",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{d:"M126.258 5.20294C136.393 0.364805 148.294 -3.74013 154.569 5.61701C157.611 10.1362 156.09 16.708 159.866 18.5369C165.354 21.1948 170.193 10.7214 184.572 6.60626C234.209 -7.62125 258.532 55.552 242.717 95.3104C229.773 127.859 194.229 147.871 164.779 128.486C161.918 126.604 159.089 124.254 157.483 122.861L158.079 171.349C158.175 179.441 162.674 186.832 169.821 190.638L171.097 191.319V193.977H123.535V191.149L123.981 190.884C130.65 186.907 134.744 179.729 134.787 171.967L135.435 38.0916C134.936 26.3949 133.447 19.5253 127.108 16.3885C120.982 13.358 109.623 17.5799 104.73 30.7547C102.699 36.2309 106.113 45.2268 100.711 61.5486C92.7448 85.58 66.1558 94.9378 42.8427 90.036C34.0789 88.1857 25.7718 96.5226 27.3671 105.625C32.2493 133.558 112.484 94.5448 117.462 141.544C122.939 193.265 27.7084 213.617 3.45889 178.464C-1.21014 171.69 -1.1786 159.015 3.71377 149.774C8.02124 141.661 19.4442 136.812 19.4442 136.812C10.4465 133.622 3.78867 120.724 9.02139 106.145C13.3927 93.9702 25.8043 86.8884 27.3358 85.3572C27.3358 85.3572 24.4429 83.2518 22.9433 82.0076C15.3494 75.7445 10.1692 67.6418 8.06338 57.8485C0.40595 22.3331 34.8972 -3.1021 67.8993 6.08478C92.5527 12.9433 101.147 17.1655 126.258 5.20294ZM30.6327 138.205C12.967 144.277 18.625 170.648 34.5146 177.517C50.1701 184.291 72.8983 182.802 84.0126 177.23C95.1162 171.648 97.7649 163.438 97.3075 155.569C96.6584 144.574 82.8209 138.397 71.5048 138.354L30.6327 138.205ZM259.01 94.7469C245.375 45.6738 284.578 -11.4168 336.671 8.44611C346.647 12.2422 353.167 18.8662 356.4 23.1834L343.903 42.7283L342.968 42.6639C342.212 40.9412 340.096 37.2512 336.746 31.4881C321.526 5.34065 287.343 13.0292 281.058 42.1541V42.1434C271.826 84.8683 300.723 140.544 346.519 105.412L355.017 98.4363L356.4 99.1277C333.608 150.359 271.283 138.918 259.01 94.7469ZM214.682 36.3475C196.144 12.093 156.271 19.377 157.281 51.3621L157.388 98.1492C157.388 98.1492 162.163 108.782 169.81 114.833C186.966 128.401 210.31 120.575 219.446 100.51C228.423 80.774 227.87 53.5948 214.682 36.3475ZM53.4989 12.8055C46.4476 12.4865 40.4495 14.8901 35.5253 20.0047C30.5904 25.1406 27.9521 31.8074 27.5692 40.0057C27.0906 50.5007 29.718 59.6559 35.4823 67.4608C41.2255 75.2762 48.5002 79.3915 57.2743 79.7957C64.3364 80.1254 70.2718 77.7755 75.0898 72.7459C79.9182 67.6951 82.5134 61.1873 82.8856 53.1805C83.3855 42.3027 80.7478 32.9772 75.0048 25.1404C69.2509 17.3142 62.0606 13.2096 53.4989 12.8055Z",fill:"currentColor"})}),w.jsx("span",{className:"masthead__brand-tag",children:"CELL 4.0 / INDIA HACKATHON 2026"})]}),w.jsxs("nav",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[[{label:"Themes",href:"#themes"},{label:"Architecture",href:"#architecture"},{label:"Dates",href:"#timeline"},{label:"Prizes",href:"#fees"},{label:"FAQ",href:"#faq"}].map(s=>w.jsx("a",{href:s.href,className:"masthead__nav-link",children:s.label},s.label)),w.jsxs("a",{href:"#register",className:"masthead__action-btn",children:[w.jsx("span",{className:"cut-button__box"}),w.jsx("span",{children:"Register EOI"})]})]})]}),w.jsxs("div",{className:"masthead__content",children:[w.jsxs("div",{className:"masthead__badge-row",children:[w.jsx("span",{className:"masthead__badge masthead__badge--live",children:"EOI Floated (Live Now)"}),w.jsx("span",{className:"masthead__badge",children:"National Security Domain"}),w.jsx("span",{className:"masthead__badge",children:"Up to ₹2,00,000 Cash Prizes"}),w.jsx("span",{className:"masthead__badge",children:"Lab Incubation"})]}),w.jsxs("h1",{className:"masthead__title-semantic",children:[w.jsx("span",{children:"Intelligent"}),w.jsx("span",{children:"Battery Cell 4.0"}),w.jsx("em",{children:"Hackathon 2026"})]}),w.jsx("p",{className:"masthead__dek",children:"Bringing together India's sharpest students, deeptech startups, and MSMEs to develop innovative solutions for the future of battery technology using Artificial Intelligence."})]}),w.jsx("div",{className:"masthead__footer",children:w.jsxs("p",{className:"masthead__meta",children:[w.jsx("span",{children:"Registration Opens: 09 Oct 2026"}),w.jsx("span",{"aria-hidden":"true",children:"·"}),w.jsx("span",{children:"Deadline: 30 Oct 2026"}),w.jsx("span",{"aria-hidden":"true",children:"·"}),w.jsx("span",{children:"Grand Finale: 01 Dec 2026"})]})}),w.jsx("p",{className:"scroll-cue","aria-hidden":"true",children:w.jsx("span",{className:"scroll-cue__word",children:"Scroll".split("").map((s,c)=>w.jsx("span",{className:"scroll-cue__letter",style:{"--i":c},children:w.jsx("span",{className:"scroll-cue__glyph",children:s})},c))})})]})})}function Gh({text:l="",as:t="p",className:i="",highlightWord:s=""}){const c=en.useRef(null),f=en.useMemo(()=>l.trim().split(/\s+/),[l]);return en.useEffect(()=>{const d=c.current;if(!d)return;const h=Array.from(d.querySelectorAll(".scroll-reveal-word"));if(!h.length)return;let g=[],m=null;const x=()=>{const R=window.scrollY,N=h.map(O=>O.getBoundingClientRect().top+R);let y=NaN,S=0;g=h.map((O,V)=>{const C=N[V];return Number.isNaN(y)||Math.abs(C-y)>3?(S=0,y=C):S+=1,{element:O,documentTop:C,wordInLine:S,lastProgress:-1}}),_()},_=()=>{const R=window.innerHeight,N=window.scrollY;g.forEach(y=>{const S=y.documentTop-N,O=.98*R-4*y.wordInLine,V=.72*R-y.wordInLine,C=Math.min(Math.max((O-S)/Math.max(O-V,1),0),1);Math.abs(C-y.lastProgress)>=.002&&(y.lastProgress=C,y.element.style.opacity=C.toFixed(4),y.element.style.filter=C>.99?"none":`blur(${((1-C)*6).toFixed(2)}px)`)})},v=()=>{cancelAnimationFrame(m),m=requestAnimationFrame(_)},E=()=>{cancelAnimationFrame(m),m=requestAnimationFrame(x)};return x(),window.addEventListener("scroll",v,{passive:!0}),window.addEventListener("resize",E),()=>{cancelAnimationFrame(m),window.removeEventListener("scroll",v),window.removeEventListener("resize",E)}},[f]),w.jsx(t,{ref:c,className:i,children:f.map((d,h)=>{const g=s&&d.toLowerCase().includes(s.toLowerCase());return w.jsxs(ox.Fragment,{children:[w.jsx("span",{className:"scroll-reveal-word",style:{display:"inline-block",marginRight:h<f.length-1?"0.28em":void 0,opacity:.15,filter:"blur(4px)",color:g?"var(--color-red)":void 0,fontWeight:g?500:void 0},children:d}),h<f.length-1?" ":""]},`${d}-${h}`)})})}function uR(){return w.jsx("section",{className:"statement","aria-label":"The bottleneck of modern battery development",children:w.jsx("div",{className:"statement__sticky",children:w.jsxs("div",{className:"statement__inner",style:{textAlign:"center"},children:[w.jsx("h2",{className:"statement__heading",children:"Most battery innovations never survive past academic journals."}),w.jsx("h2",{className:"statement__heading",style:{color:"var(--color-red)",marginTop:"0.4em"},children:"They stall in prototype cells before reaching gigawatt scale."}),w.jsxs("div",{className:"statement__tags-row",children:[w.jsx("p",{className:"statement__tag statement__tag--cost",children:"Thermal Runaway Risk"}),w.jsx("p",{className:"statement__tag statement__tag--effort",children:"Black-Box Cell Degradation"}),w.jsx("p",{className:"statement__tag statement__tag--tech",children:"Foreign Chemistry Dependency"})]})]})})})}function fR(){const[l,t]=en.useState(!1);return en.useEffect(()=>{const i=()=>{const s=document.getElementById("battery-chart");if(!s)return;s.getBoundingClientRect().top<window.innerHeight*.75&&t(!0)};return window.addEventListener("scroll",i,{passive:!0}),i(),()=>window.removeEventListener("scroll",i)},[]),w.jsxs("figure",{className:"imagination-chart",id:"battery-chart",children:[w.jsxs("div",{className:"imagination-chart__header",children:[w.jsx("h3",{className:"imagination-chart__title",children:"Battery Cycle Life vs. AI Optimization Fidelity"}),w.jsx("p",{className:"imagination-chart__subtitle",children:"Comparing unmonitored degradation, rule-based BMS, and AI-driven Digital Twin 4.0 retention."})]}),w.jsxs("div",{className:"imagination-chart__plot",children:[w.jsx("div",{className:"halftone-overlay","aria-hidden":"true"}),w.jsxs("svg",{className:"imagination-chart__svg",viewBox:"0 0 1000 520","aria-hidden":"true",children:[w.jsxs("g",{className:"imagination-chart__grid",children:[[450,360,270,180,90].map(i=>w.jsx("line",{x1:"80",x2:"960",y1:i,y2:i},i)),[180,320,460,600,740,880].map(i=>w.jsx("line",{x1:i,x2:i,y1:"50",y2:"450"},i))]}),w.jsxs("g",{className:"imagination-chart__axis",children:[w.jsx("line",{x1:"80",x2:"960",y1:"450",y2:"450"}),w.jsx("line",{x1:"80",x2:"80",y1:"50",y2:"450"})]}),w.jsxs("g",{className:"imagination-chart__ticks",children:[w.jsx("text",{x:"65",y:"450",textAnchor:"end",dominantBaseline:"middle",children:"0%"}),w.jsx("text",{x:"65",y:"360",textAnchor:"end",dominantBaseline:"middle",children:"25%"}),w.jsx("text",{x:"65",y:"270",textAnchor:"end",dominantBaseline:"middle",children:"50%"}),w.jsx("text",{x:"65",y:"180",textAnchor:"end",dominantBaseline:"middle",children:"75%"}),w.jsx("text",{x:"65",y:"90",textAnchor:"end",dominantBaseline:"middle",children:"100%"}),w.jsx("text",{x:"80",y:"488",textAnchor:"middle",children:"0"}),w.jsx("text",{x:"240",y:"488",textAnchor:"middle",children:"400"}),w.jsx("text",{x:"440",y:"488",textAnchor:"middle",children:"800"}),w.jsx("text",{x:"640",y:"488",textAnchor:"middle",children:"1,200"}),w.jsx("text",{x:"840",y:"488",textAnchor:"middle",children:"1,600"}),w.jsx("text",{x:"960",y:"488",textAnchor:"middle",children:"2,000"})]}),w.jsxs("g",{className:"imagination-chart__axis-title",children:[w.jsx("text",{x:"520",y:"510",textAnchor:"middle",children:"Charge Cycles"}),w.jsx("text",{x:"30",y:"270",textAnchor:"middle",transform:"rotate(-90, 30, 270)",children:"Capacity Retention"})]}),w.jsxs("g",{children:[w.jsx("path",{className:"imagination-chart__line",d:"M 80 90 L 220 110 L 360 160 L 500 280 L 640 400 L 780 440 L 960 450",pathLength:"1",style:{"--line-accent":"var(--color-red)","--line-draw":l?"1":"0"}}),w.jsx("path",{className:"imagination-chart__line",d:"M 80 90 L 220 105 L 360 140 L 500 185 L 640 240 L 780 310 L 960 380",pathLength:"1",style:{"--line-accent":"var(--color-yellow)","--line-draw":l?"1":"0",transitionDelay:"0.3s"}}),w.jsx("path",{className:"imagination-chart__line",d:"M 80 90 L 220 92 L 360 95 L 500 102 L 640 112 L 780 120 L 960 130",pathLength:"1",style:{"--line-accent":"var(--color-purple)","--line-draw":l?"1":"0",transitionDelay:"0.6s"}})]})]})]}),w.jsx("ul",{className:"imagination-chart__legend",children:[{color:"var(--color-purple)",label:"Cell 4.0 (AI Digital Twin)",offset:"0s"},{color:"var(--color-yellow)",label:"Rule-based Standard BMS",offset:"0.16s"},{color:"var(--color-red)",label:"Unmonitored Li-Ion Pack",offset:"0.33s"}].map(i=>w.jsxs("li",{className:"imagination-chart__legend-item",style:{"--line-accent":i.color,"--legend-offset":i.offset},children:[w.jsx("span",{className:"imagination-chart__legend-box","aria-hidden":"true"}),w.jsx("span",{className:"imagination-chart__legend-label",children:i.label})]},i.label))}),w.jsx("figcaption",{className:"imagination-chart__caption",children:"Figure 1.0 — Predictive digital twins prevent micro-dendrite formation, preserving state-of-health up to 3× longer than traditional cut-off thresholds."})]})}const Vh=[{word:"Thermal Safety",prob:45,color:"var(--color-red)",desc:"Mitigating micro-dendrite thermal runaway before catastrophic failure."},{word:"Digital Twins",prob:31,color:"var(--color-orange)",desc:"Real-time electrochemical physics simulation running on IoT edge nodes."},{word:"Second-Life Reuse",prob:17,color:"var(--color-purple)",desc:"Cascading EV battery packs into grid-scale renewable energy storage."},{word:"Indigenous Tech",prob:7,color:"var(--color-yellow)",desc:"Sovereign sodium-ion and national security storage independent of global supply."}];function dR(){const[l,t]=en.useState(0);return w.jsx("section",{className:"probability","aria-labelledby":"prob-heading",children:w.jsx("div",{className:"probability__sticky",children:w.jsxs("div",{className:"probability__inner",children:[w.jsx("p",{className:"probability__eyebrow",children:"Electrochemical Paradigm Shift"}),w.jsxs("h2",{id:"prob-heading",className:"probability__heading",children:["The future of battery technology is"," ",w.jsxs("em",{style:{color:Vh[l].color,fontStyle:"italic"},children:[Vh[l].word,"."]})]}),w.jsx("ol",{className:"probability__candidates",children:Vh.map((i,s)=>w.jsxs("li",{className:`probability__candidate ${l===s?"is-active":""}`,style:{"--cand-color":i.color,"--cand-fill":l===s?"1":`${i.prob/100}`},onPointerEnter:()=>t(s),onClick:()=>t(s),tabIndex:0,role:"button",children:[w.jsx("div",{className:"probability__candidate-bar"}),w.jsxs("div",{children:[w.jsx("span",{className:"probability__candidate-word",children:i.word}),w.jsx("p",{className:"probability__candidate-desc",children:i.desc})]}),w.jsxs("span",{className:"probability__candidate-value",children:[i.prob,"%"]})]},i.word))}),w.jsx("p",{className:"probability__takeaway",children:'"The conventional engineering choice is rarely the breakthrough that reimagines an industry."'})]})})})}function hR(){const[l,t]=en.useState(!1),[i,s]=en.useState(!1);return w.jsx("section",{className:"prompt-split",id:"architecture","aria-label":"Two approaches to battery innovation",children:w.jsxs("div",{className:"prompt-split__grid",children:[w.jsxs("article",{className:"prompt-split__column",children:[w.jsxs("div",{children:[w.jsx("span",{className:"prompt-split__label prompt-split__label--one",children:"Group 1: Incremental Patch"}),w.jsx("h2",{className:"prompt-split__font-source",children:'"Add an external temperature thermistor to an unmonitored lithium pack."'}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"0.95rem",marginBottom:"1.5rem",lineHeight:1.6},children:"The legacy way: relying on surface-level sensors that detect heat only after catastrophic internal chemical breakdown has already started."})]}),w.jsxs("div",{className:"prompt-split__paper-stage",children:[w.jsx("img",{src:"/brand/gpc/props/conventional-battery-schematic.svg",alt:"Conventional battery schematic with blind thermal core",className:`prompt-split__sketch-img ${l?"is-crumpled":""}`}),w.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>t(!l),children:[w.jsx("img",{src:"/brand/gpc/props/vintage-fountain-pen.png",alt:"",style:{width:"18px",height:"auto"}}),w.jsx("span",{children:l?"Inspect Normal View":"Highlight Thermal Hotspot"})]})]})]}),w.jsxs("article",{className:"prompt-split__column",children:[w.jsxs("div",{children:[w.jsx("span",{className:"prompt-split__label prompt-split__label--two",children:"Group 2: Intelligent Cell 4.0"}),w.jsx("h2",{className:"prompt-split__font-source",children:'"Embed in-situ optical sensors and edge neural physics directly inside the cell."'}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"0.95rem",marginBottom:"1.5rem",lineHeight:1.6},children:"The Hackathon 2026 challenge: predicting micro-dendrite nucleation, impedance shifts, and mechanical strain in real-time before temperature rises."})]}),w.jsxs("div",{className:"prompt-split__paper-stage",children:[w.jsx("img",{src:"/brand/gpc/props/intelligent-cell-schematic.svg",alt:"Intelligent Cell 4.0 schematic with optical fiber and edge BMS",className:`prompt-split__sketch-img ${i?"is-crumpled":""}`}),w.jsxs("button",{type:"button",className:"prompt-split__tool-badge",onClick:()=>s(!i),children:[w.jsx("img",{src:"/brand/gpc/props/vintage-scissors.png",alt:"",style:{width:"18px",height:"auto"}}),w.jsx("span",{children:i?"Default Blueprint":"Activate AI Sensor Spine"})]})]})]})]})})}const pR=[{id:"01",title:"Intelligent Battery Management Systems (BMS)",desc:"Next-generation algorithmic state estimation (SoC, SoH, SoP) with adaptive machine learning models on edge microcontrollers.",tag:"Core AI Track"},{id:"02",title:"Battery Safety & Thermal Runaway Mitigation",desc:"Multi-physics early-warning detection systems, vapor pressure venting triggers, and passive/active propagation barriers.",tag:"Safety Critical"},{id:"03",title:"Smart Charging & Second-Life Cascading",desc:"Dynamic pulse charging protocols, health-conscious fast charging, and algorithmic sorting of retired EV modules for stationary storage.",tag:"Circular Economy"},{id:"04",title:"Renewable Energy Grid Storage",desc:"High-inertia buffer storage algorithms, microgrid coordination, and utility-scale integration with solar and wind variability.",tag:"Grid Infrastructure"},{id:"05",title:"Battery Diagnostics & Physics Digital Twins",desc:"Coupling electrochemical partial differential equations with neural surrogate models for non-invasive degradation mapping.",tag:"Digital Twin"},{id:"06",title:"IoT-Enabled Wireless Monitoring",desc:"Cell-level impedance spectroscopy, ultra-low power wireless sensor mesh networks, and cloud telemetry pipelines.",tag:"Hardware & IoT"},{id:"07",title:"Indigenous Battery Chemistries",desc:"Sodium-ion, iron-redox, and zinc-air architectures built entirely using domestic, non-critical raw material supply chains.",tag:"Atmanirbhar R&D"},{id:"08",title:"National Security & Defense Storage",desc:"Sub-zero military drone propulsion, resilient combat vehicle packs, and tactical EMP-hardened energy repositories.",tag:"Strategic Defense"}];function mR(){return w.jsxs("section",{className:"themes-section",id:"themes",children:[w.jsxs("div",{className:"themes-section__intro",children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"01 / Core Problem Statements"}),w.jsx("h2",{className:"article-block__heading",children:"Eight strategic domains shaping the next energy century."}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Participants are invited to submit groundbreaking software algorithms, hardware prototypes, or full-stack digital twins across these critical pillars."})]}),w.jsx("div",{className:"themes-grid",children:pR.map(l=>w.jsxs("div",{className:"theme-card",children:[w.jsxs("div",{children:[w.jsxs("span",{className:"theme-card__idx",children:[l.id," / THEME"]}),w.jsx("h3",{className:"theme-card__title",children:l.title}),w.jsx("p",{className:"theme-card__desc",children:l.desc})]}),w.jsx("span",{className:"theme-card__tag",children:l.tag})]},l.id))})]})}const rx=[{label:"18650 Legacy Li-ion Cell",note:"Commodity cell with high thermal hotspot risk"},{label:"Lead-Acid Heavy Block",note:"Low energy density, toxic electrolyte"},{label:"Rule-Based Relay BMS",note:"Rigid voltage thresholds, blind to impedance shifts"},{label:"Standard LiFePO4 Prism",note:"Safe but passive; no predictive digital twin"}],sx=[{label:"Intelligent Cell 4.0",note:"In-situ optical fiber sensor with edge AI BMS"},{label:"AI Neural Digital Twin",note:"Predicts micro-dendrites at atomic layer in real time"},{label:"Sovereign Sodium-Ion",note:"Indigenous non-lithium domestic supply chain"},{label:"Solid-State Ceramic",note:"High density but difficult to mass manufacture"}];function gR(){const[l,t]=en.useState(50),[i,s]=en.useState([{...rx[2],key:"init-1",isRadical:!1},{...sx[0],key:"init-2",isRadical:!0}]),c=en.useRef(l),f=en.useCallback(d=>{const h=Number(d.target.value);if(t(h),Math.abs(h-c.current)>=12){c.current=h;const g=h>50,m=g?sx:rx,x=m[Math.floor(Math.random()*m.length)];s(_=>[..._.slice(-4),{...x,key:`${Date.now()}-${Math.random()}`,isRadical:g}])}},[]);return w.jsx("section",{className:"loewy-maya",id:"spectrum",children:w.jsxs("div",{className:"loewy-maya__inner",children:[w.jsxs("div",{className:"loewy-maya__copy",children:[w.jsx("p",{className:"loewy-maya__label",children:"THE MAYA DESIGN PRINCIPLE IN ENERGY R&D"}),w.jsxs("h2",{className:"loewy-maya__heading",children:[w.jsx("span",{children:"Most advanced"}),w.jsxs("span",{children:[w.jsx("em",{children:"yet"})," acceptable."]})]}),w.jsx("p",{className:"loewy-maya__dek",children:"If your hackathon concept is too familiar, it creates no breakthrough. If it is too radical, it cannot be manufactured. Intelligent Battery Cell 4.0 lives precisely at the threshold of practical engineering and radical imagination."})]}),w.jsxs("section",{className:"maya-spectrum","aria-label":"Innovation spectrum slider",children:[w.jsxs("div",{className:"maya-spectrum__inner",children:[w.jsxs("div",{className:"maya-spectrum__labels",children:[w.jsx("span",{className:"maya-spectrum__label maya-spectrum__label--familiar",children:"← Too Conventional"}),w.jsx("span",{className:"maya-spectrum__label maya-spectrum__label--radical",children:"Too Radical →"})]}),w.jsxs("div",{className:"maya-spectrum__control",children:[w.jsx("div",{className:"maya-spectrum__track","aria-hidden":"true"}),w.jsx("input",{type:"range",min:"0",max:"100",value:l,onChange:f,className:"maya-spectrum__range","aria-label":"Spectrum from conventional to radical battery tech"})]}),w.jsx("p",{className:"maya-spectrum__drag-cue","aria-hidden":"true",children:"← Drag to explore →"})]}),w.jsx("div",{className:"maya-spectrum__stage",children:i.map(d=>w.jsxs("div",{className:`maya-spawn-card ${d.isRadical?"maya-spawn-card--radical":""}`,style:{"--spawn-rotation":`${(Math.random()-.5)*16}deg`,"--spawn-drift-x":`${(Math.random()-.5)*30}px`,"--spawn-lift-y":`${-8-Math.random()*12}px`,"--spawn-fall-y":`${20+Math.random()*15}px`},children:[w.jsx("div",{className:"maya-spawn-card__backdrop","aria-hidden":"true"}),w.jsxs("div",{className:"maya-spawn-card__image",children:[w.jsx("div",{style:{width:"100%",height:"90px",background:d.isRadical?"linear-gradient(135deg, #f94e2a22, #f66f0022)":"linear-gradient(135deg, #9b338f22, #8cb8d122)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem"},"aria-hidden":"true",children:d.isRadical?"⚡":"🔋"}),w.jsx("div",{className:"maya-spawn-card__halftone","aria-hidden":"true"})]}),w.jsx("span",{children:d.label})]},d.key))})]})]})})}const _R=[{phase:"PHASE 01",date:"09 OCT 2026",status:"ACTIVE NOW",title:"Registration & EOI Opens",desc:"Expression of Interest (EOI) is officially floated across national universities, research labs, and startups. Portal open for team submissions."},{phase:"PHASE 02",date:"30 OCT 2026",status:"HARD DEADLINE",title:"Registration Deadline",desc:"Final cutoff for initial abstract proposals, team rosters, and theme domain selections. Screening of applications begins immediately."},{phase:"PHASE 03",date:"NOV 2026",status:"INCUBATION & DEV",title:"Mentoring & Rapid Prototyping",desc:"Shortlisted applicants receive technical mentoring from leading battery scientists, digital twin architects, and electrochemical patent holders."},{phase:"PHASE 04",date:"01 DEC 2026",status:"TENTATIVE ANNOUNCEMENT",title:"Grand Finale Showcase",desc:"Final live prototype evaluation, investor jury pitches, award of ₹2 Lakh prize money, and incubation partner onboarding."}];function vR(){return w.jsxs("section",{className:"timeline-section",id:"timeline",children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"02 / Important Milestones"}),w.jsx("h2",{className:"article-block__heading",children:"Critical Timeline & Roadmap"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Mark these mandatory deadlines to ensure your team qualifies for mentorship and finale consideration."})]}),w.jsx("div",{className:"timeline-grid",children:_R.map(l=>w.jsxs("div",{className:"timeline-card",children:[w.jsxs("span",{className:"timeline-card__phase",children:[l.phase," · ",l.status]}),w.jsx("h3",{className:"timeline-card__date",children:l.date}),w.jsx("h4",{style:{fontFamily:"var(--font-sans)",fontSize:"1.1rem",fontWeight:500,marginBottom:"0.6rem",color:"var(--color-neutral-500)"},children:l.title}),w.jsx("p",{className:"timeline-card__desc",children:l.desc})]},l.phase))})]})}const xR=[{icon:"🏆",title:"Up to ₹2,00,000 Cash Prizes",desc:"Direct grant-style cash prize pool distributed across top category winners, alongside official national certificates."},{icon:"🔬",title:"Pre-Finale Scientist Mentorship",desc:"Dedicated 1-on-1 weekly mentoring sessions with premier battery researchers, simulation engineers, and hardware builders."},{icon:"🚀",title:"Incubation & Lab Access Opportunities",desc:"Fast-track incubation support, venture funding introductions, and access to advanced battery cycler & testing infrastructure."}],SR=[{tier:"STUDENTS & SCHOLARS",fee:"₹500",desc:"Enrolled undergraduate, postgraduate, and PhD scholars from accredited academic institutions."},{tier:"STUDENT START-UPS",fee:"₹1,500",desc:"Early-stage venture teams founded and driven by currently enrolled university students.",highlight:!0},{tier:"MSMEs & REGISTERED ENTITIES",fee:"₹2,000",desc:"Registered micro, small, and medium enterprises, spin-offs, and commercial technology companies."}];function yR(){return w.jsxs("section",{className:"fees-section",id:"fees",children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"03 / Value & Investment"}),w.jsx("h2",{className:"article-block__heading",children:"Prizes, Incubation & Registration Tiers"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.05rem",lineHeight:1.5,fontFamily:"var(--font-body)"},children:"Transparent fee structure dedicated to fueling world-class jury evaluation, compute grants, and cash prize distribution."})]}),w.jsx("div",{className:"benefits-row",children:xR.map(l=>w.jsxs("div",{className:"benefit-card",children:[w.jsx("div",{className:"benefit-card__icon",children:l.icon}),w.jsx("h3",{className:"benefit-card__title",children:l.title}),w.jsx("p",{className:"benefit-card__desc",children:l.desc})]},l.title))}),w.jsx("div",{className:"fees-grid",children:SR.map(l=>w.jsxs("div",{className:`fee-card ${l.highlight?"fee-card--highlight":""}`,children:[w.jsxs("div",{children:[w.jsx("span",{className:"fee-card__tier",children:l.tier}),w.jsx("div",{className:"fee-card__amount",children:l.fee}),w.jsx("p",{className:"fee-card__desc",children:l.desc})]}),w.jsxs("a",{href:"#register",className:"cut-button",style:{textDecoration:"none",width:"auto",alignSelf:"flex-start"},children:[w.jsx("span",{className:"cut-button__box",style:{"--cut-fill":l.highlight?"var(--color-red)":"var(--color-yellow)"}}),w.jsx("span",{className:"cut-button__label",style:{color:l.highlight?"var(--color-neutral-100)":"var(--color-ink)"},children:"Select & Register"})]})]},l.tier))})]})}const MR=[{step:"ROUND 01",title:"Abstract & Feasibility Screening",dates:"Submission by 30 Oct 2026",weight:"30% Weightage",criteria:["Originality & depth of understanding of electrochemical bottlenecks","Clear choice and mapping to one of the 8 Hackathon themes","Realistic technical feasibility and domestic supply chain awareness","Competency and interdisciplinary balance of the applicant team"]},{step:"ROUND 02",title:"Pre-Finale Mentoring & Prototyping Sprint",dates:"Completed throughout November 2026",weight:"35% Weightage",criteria:["Active participation in weekly 1-on-1 scientist mentoring sessions","Implementation of AI/ML digital twin models or embedded BMS code","Progress on hardware simulation, battery cycler data, or physical cell assembly","Response to technical jury checkpoints and edge-case stress testing"]},{step:"ROUND 03",title:"Grand Finale & National Jury Pitch",dates:"Grand Finale on 01 Dec 2026",weight:"35% Weightage",criteria:["Live functional demonstration of the software, algorithm, or hardware prototype","Validation of safety enhancements (thermal mitigation, state estimation accuracy)","Potential for commercial incubation, patentability, and defense deployment","Jury defense on unit economics, manufacturing scalability, and second-life viability"]}];function ER(){return w.jsxs("section",{className:"article-block",id:"evaluation",style:{maxWidth:"var(--container-max)",padding:"6rem 2rem"},children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto 4rem"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"04 / Rigorous Evaluation"}),w.jsx("h2",{className:"article-block__heading",children:"Evaluation Criteria & Hackathon Stages"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Every submission is evaluated against rigorous academic, industrial, and national security benchmarks by leading battery electrochemists."})]}),w.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"2rem"},children:MR.map(l=>w.jsx("div",{className:"theme-card",style:{padding:"2.5rem"},children:w.jsxs("div",{children:[w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[w.jsx("span",{className:"theme-card__idx",children:l.step}),w.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.75rem",color:"var(--color-red)"},children:l.weight})]}),w.jsx("h3",{className:"theme-card__title",style:{fontSize:"1.4rem"},children:l.title}),w.jsx("p",{style:{fontFamily:"var(--font-mono)",fontSize:"0.8rem",color:"var(--color-orange)",marginBottom:"1.5rem"},children:l.dates}),w.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.75rem"},children:l.criteria.map((t,i)=>w.jsxs("li",{style:{display:"flex",gap:"0.5rem",fontSize:"0.9rem",color:"var(--color-ink-muted)",lineHeight:1.5},children:[w.jsx("span",{style:{color:"var(--color-red)",fontWeight:"bold"},children:"✓"}),w.jsx("span",{children:t})]},i))})]})},l.step))})]})}const bR=[{q:"Who is eligible to participate in this Hackathon?",a:"Participation is open across three categories: (1) Students & Research Scholars enrolled in undergraduate, postgraduate, or doctoral programs; (2) Student Start-ups led by enrolled students; and (3) Registered MSMEs and deeptech startups. Cross-institutional and multidisciplinary teams (chemists + computer scientists + electrical engineers) are strongly encouraged."},{q:"Is a physical cell hardware prototype strictly mandatory?",a:"No. Submissions can be purely software algorithms (e.g. edge AI BMS firmware, SoC/SoH neural networks), physics-based digital twins, CAD/simulation models, or physical hardware setups. Teams working on hardware will be provided guidance and lab testing protocols during the November mentoring phase."},{q:"What is the exact registration fee structure?",a:"Registration fees are tiered to ensure equitable access: Students & Research Scholars pay ₹500/-; Student Start-ups pay ₹1,500/-; and MSMEs/Registered Start-ups pay ₹2,000/-. Fees are payable upon abstract shortlisting and directly support compute grants, laboratory testing infrastructure, and prize disbursals."},{q:"What are the key dates and milestones?",a:"Registration & Expression of Interest (EOI) opened on 9 October 2026. The final deadline for abstract submissions is 30 October 2026. During November 2026, shortlisted applicants undergo intensive technical mentoring, screening, and product development. The Grand Finale is tentatively announced for 1 December 2026."},{q:"Who owns the Intellectual Property (IP) developed during the event?",a:"All intellectual property, patents, source code, and hardware designs developed by participants remain 100% their own exclusive property. Organizers and incubation partners provide acceleration support without taking premature equity or non-consensual IP rights."},{q:"How will the ₹2,00,000 cash prize and incubation be disbursed?",a:"Cash prizes totaling up to ₹2,00,000 will be awarded directly to the top winning teams across student, startup, and technical domain categories during the Grand Finale on 1 December 2026, accompanied by official certificates of achievement and fast-track incubation offers."}];function TR(){const[l,t]=en.useState(0);return w.jsxs("section",{className:"article-block",id:"faq",style:{maxWidth:"var(--container-max)",padding:"6rem 2rem"},children:[w.jsxs("div",{style:{textAlign:"center",maxWidth:"48rem",margin:"0 auto 4rem"},children:[w.jsx("p",{className:"article-block__chapter-label article-block__chapter-label--yellow",children:"05 / Participant Clarifications"}),w.jsx("h2",{className:"article-block__heading",children:"Frequently Asked Questions"}),w.jsx("p",{style:{color:"var(--color-ink-muted)",fontSize:"1.1rem"},children:"Everything you need to know about team eligibility, submission requirements, mentoring, and prizes."})]}),w.jsx("div",{style:{maxWidth:"56rem",margin:"0 auto",display:"flex",flexDirection:"column",gap:"1.2rem"},children:bR.map((i,s)=>{const c=l===s;return w.jsxs("div",{style:{background:"rgba(250, 245, 238, 0.90)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",border:"1px solid var(--color-border)",borderRadius:"2px",overflow:"hidden",transition:"border-color 0.2s ease, box-shadow 0.2s ease",boxShadow:"0 4px 16px rgba(35, 36, 36, 0.04)"},children:[w.jsxs("button",{type:"button",onClick:()=>t(c?-1:s),style:{width:"100%",padding:"1.6rem 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",background:"none",border:"none",textAlign:"left",cursor:"pointer",fontFamily:"var(--font-serif)",fontSize:"1.25rem",color:"var(--color-neutral-500)"},children:[w.jsx("span",{children:i.q}),w.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"1.2rem",color:"var(--color-red)"},children:c?"—":"+"})]}),c&&w.jsx("div",{style:{padding:"0 2rem 1.8rem",borderTop:"1px dashed var(--color-border)"},children:w.jsx("p",{style:{marginTop:"1.2rem",fontSize:"1rem",lineHeight:1.7,color:"var(--color-ink-muted)",fontFamily:"var(--font-sans)"},children:i.a})})]},s)})})]})}function AR(){const[l,t]=en.useState(!1),[i,s]=en.useState({name:"",email:"",category:"students",theme:"bms",message:""}),c=f=>{f.preventDefault(),!(!i.name||!i.email)&&t(!0)};return w.jsxs("div",{className:"ground",id:"register",children:[w.jsx("div",{className:"ground__contact",children:w.jsxs("form",{className:`ground-form ${l?"ground-form--sent":""}`,onSubmit:c,children:[l&&w.jsxs("div",{className:"ground-form__success",children:[w.jsx("p",{className:"ground-form__success-label",children:"Confirmed"}),w.jsx("h3",{className:"ground-form__success-heading",children:"Expression of Interest Received"}),w.jsxs("p",{className:"ground-form__success-copy",children:["Thank you, ",i.name,". Your preliminary registration for the Intelligent Battery Cell 4.0 Hackathon has been logged. Our technical screening committee will reach out to ",i.email," with next steps before October 30, 2026."]}),w.jsxs("button",{type:"button",className:"cut-button",style:{width:"auto"},onClick:()=>t(!1),children:[w.jsx("span",{className:"cut-button__box",style:{"--cut-fill":"var(--color-yellow)"}}),w.jsx("span",{className:"cut-button__label",style:{color:"var(--color-ink)"},children:"Register Another Team"})]})]}),w.jsxs("div",{className:"ground-form__content",children:[w.jsxs("div",{className:"ground-form__lede",children:[w.jsx("h2",{className:"ground-form__heading",children:"Ready to deploy your battery innovation at national scale?"}),w.jsx("p",{className:"ground-form__intro",children:"Submit your team's Expression of Interest (EOI). Open to students, research scholars, student startups, and registered MSMEs."})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsx("label",{className:"ground-form__label",htmlFor:"lead-name",children:"Lead Applicant Name / Team Leader"}),w.jsx("input",{id:"lead-name",type:"text",required:!0,placeholder:"e.g. Dr. A. Sharma / Alex Mercer",className:"ground-form__input",value:i.name,onChange:f=>s({...i,name:f.target.value})})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsx("label",{className:"ground-form__label",htmlFor:"lead-email",children:"Institutional / Corporate Email"}),w.jsx("input",{id:"lead-email",type:"email",required:!0,placeholder:"you@university.edu or founder@startup.in",className:"ground-form__input",value:i.email,onChange:f=>s({...i,email:f.target.value})})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsx("label",{className:"ground-form__label",htmlFor:"category-select",children:"Registration Category"}),w.jsxs("select",{id:"category-select",className:"ground-form__input ground-form__input--select",value:i.category,onChange:f=>s({...i,category:f.target.value}),children:[w.jsx("option",{value:"students",children:"Students & Research Scholars — ₹500/-"}),w.jsx("option",{value:"student-startups",children:"Student Start-ups (Enrolled) — ₹1,500/-"}),w.jsx("option",{value:"msme",children:"MSMEs & Registered Start-ups — ₹2,000/-"})]})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsx("label",{className:"ground-form__label",htmlFor:"theme-select",children:"Primary Hackathon Theme"}),w.jsxs("select",{id:"theme-select",className:"ground-form__input ground-form__input--select",value:i.theme,onChange:f=>s({...i,theme:f.target.value}),children:[w.jsx("option",{value:"bms",children:"Intelligent Battery Management Systems (BMS)"}),w.jsx("option",{value:"safety",children:"Battery Safety & Thermal Runaway Mitigation"}),w.jsx("option",{value:"second-life",children:"Smart Charging & Second-Life Storage"}),w.jsx("option",{value:"renewable",children:"Renewable Energy Grid Integration"}),w.jsx("option",{value:"digital-twin",children:"Battery Diagnostics & AI Digital Twins"}),w.jsx("option",{value:"iot",children:"IoT-Enabled Wireless Monitoring"}),w.jsx("option",{value:"indigenous",children:"Indigenous Battery Chemistries"}),w.jsx("option",{value:"defense",children:"National Security & Strategic Storage"})]})]}),w.jsxs("div",{className:"ground-form__field",children:[w.jsxs("label",{className:"ground-form__label",htmlFor:"note-message",children:["Abstract / Proposed Technical Approach",w.jsx("span",{className:"ground-form__optional",children:"(Optional)"})]}),w.jsx("textarea",{id:"note-message",rows:3,placeholder:"Summarize your cell chemistry, algorithm, or hardware prototype concept...",className:"ground-form__input ground-form__input--area",value:i.message,onChange:f=>s({...i,message:f.target.value})})]}),w.jsx("div",{className:"ground-form__trap","aria-hidden":"true",children:w.jsx("input",{id:"note-website",type:"text",tabIndex:-1,autoComplete:"off"})}),w.jsxs("button",{type:"submit",className:"cut-button ground-form__submit",style:{"--cut-fill":"var(--color-red)","--cut-fill-hover":"var(--color-orange)"},children:[w.jsx("span",{className:"cut-button__box"}),w.jsx("span",{className:"cut-button__label",children:"Submit Expression of Interest (EOI)"})]})]})]})}),w.jsxs("footer",{className:"ground__footer",children:[w.jsx("a",{className:"ground__maker",href:"#top",children:w.jsx("span",{children:"Built for India's Battery Future — Hackathon 2026"})}),w.jsxs("p",{className:"ground__copyright",children:[w.jsx("span",{children:"© 2026 Intelligent Battery Cell 4.0 Hackathon"}),w.jsx("a",{className:"ground__privacy",href:"#top",children:"Back to Altitude"})]})]})]})}function RR(){return w.jsxs("div",{className:"page-shell",children:[w.jsx(lR,{}),w.jsx(oR,{}),w.jsx(cR,{}),w.jsx("section",{className:"article-intro","aria-label":"Hackathon introduction",children:w.jsxs("div",{className:"article-intro__inner",children:[w.jsx(Gh,{as:"p",className:"article-intro__lead",text:"Intelligent Battery Cell 4.0 Hackathon 2026 brings together India's sharpest students, research scholars, deeptech startups, and MSMEs to develop innovative solutions for the future of battery technology.",highlightWord:"innovative"}),w.jsx(Gh,{as:"p",className:"article-intro__copy",text:"The event is focused on using Artificial Intelligence to advance battery safety, sustainability, and indigenous innovation. From mitigating thermal runaway hazards in electric vehicles to building gigawatt-hour grid storage and extreme-climate defense energy systems, the era of passive chemical batteries is over."}),w.jsx(Gh,{as:"p",className:"article-intro__copy",text:"Whether you are writing AI neural digital twin algorithms, engineering embedded firmware for edge BMS microcontrollers, testing sodium-ion cathode formulations, or designing circular second-life cascading models — this is the premier national platform to showcase your breakthrough."})]})}),w.jsx(uR,{}),w.jsx(mR,{}),w.jsx(fR,{}),w.jsx(dR,{}),w.jsx(hR,{}),w.jsx(gR,{}),w.jsx(vR,{}),w.jsx(yR,{}),w.jsx(ER,{}),w.jsx(TR,{}),w.jsx(AR,{})]})}IM.createRoot(document.getElementById("root")).render(w.jsx(ox.StrictMode,{children:w.jsx(RR,{})}));
