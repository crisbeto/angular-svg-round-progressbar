(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,n){t.exports=n("ohnL")},ohnL:function(t,e,n){"use strict";function r(t){return"function"==typeof t}n.r(e);let s=!1;const i={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){const t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else s&&console.log("RxJS: Back to a better error behavior. Thank you. <3");s=t},get useDeprecatedSynchronousErrorHandling(){return s}};function o(t){setTimeout(()=>{throw t},0)}const l={closed:!0,next(t){},error(t){if(i.useDeprecatedSynchronousErrorHandling)throw t;o(t)},complete(){}},a=(()=>Array.isArray||(t=>t&&"number"==typeof t.length))();function u(t){return null!==t&&"object"==typeof t}const c=(()=>{function t(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t})();let h=(()=>{class t{constructor(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}unsubscribe(){let e;if(this.closed)return;let{_parentOrParents:n,_ctorUnsubscribe:s,_unsubscribe:i,_subscriptions:o}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(let t=0;t<n.length;++t)n[t].remove(this);if(r(i)){s&&(this._unsubscribe=void 0);try{i.call(this)}catch(l){e=l instanceof c?d(l.errors):[l]}}if(a(o)){let t=-1,n=o.length;for(;++t<n;){const n=o[t];if(u(n))try{n.unsubscribe()}catch(l){e=e||[],l instanceof c?e=e.concat(d(l.errors)):e.push(l)}}}if(e)throw new c(e)}add(e){let n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){const e=n;n=new t,n._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof t){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const s=this._subscriptions;return null===s?this._subscriptions=[n]:s.push(n),n}remove(t){const e=this._subscriptions;if(e){const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}}return t.EMPTY=function(t){return t.closed=!0,t}(new t),t})();function d(t){return t.reduce((t,e)=>t.concat(e instanceof c?e.errors:e),[])}const f=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())();class p extends h{constructor(t,e,n){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=l;break;case 1:if(!t){this.destination=l;break}if("object"==typeof t){t instanceof p?(this.syncErrorThrowable=t.syncErrorThrowable,this.destination=t,t.add(this)):(this.syncErrorThrowable=!0,this.destination=new g(this,t));break}default:this.syncErrorThrowable=!0,this.destination=new g(this,t,e,n)}}[f](){return this}static create(t,e,n){const r=new p(t,e,n);return r.syncErrorThrowable=!1,r}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(t){this.destination.next(t)}_error(t){this.destination.error(t),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:t}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this}}class g extends p{constructor(t,e,n,s){let i;super(),this._parentSubscriber=t;let o=this;r(e)?i=e:e&&(i=e.next,n=e.error,s=e.complete,e!==l&&(o=Object.create(e),r(o.unsubscribe)&&this.add(o.unsubscribe.bind(o)),o.unsubscribe=this.unsubscribe.bind(this))),this._context=o,this._next=i,this._error=n,this._complete=s}next(t){if(!this.isStopped&&this._next){const{_parentSubscriber:e}=this;i.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}}error(t){if(!this.isStopped){const{_parentSubscriber:e}=this,{useDeprecatedSynchronousErrorHandling:n}=i;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):o(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;o(t)}}}complete(){if(!this.isStopped){const{_parentSubscriber:t}=this;if(this._complete){const e=()=>this._complete.call(this._context);i.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(t,e){try{t.call(this._context,e)}catch(n){if(this.unsubscribe(),i.useDeprecatedSynchronousErrorHandling)throw n;o(n)}}__tryOrSetError(t,e,n){if(!i.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(r){return i.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(o(r),!0)}return!1}_unsubscribe(){const{_parentSubscriber:t}=this;this._context=null,this._parentSubscriber=null,t.unsubscribe()}}const _=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")();function m(t){return t}let y=(()=>{class t{constructor(t){this._isScalar=!1,t&&(this._subscribe=t)}lift(e){const n=new t;return n.source=this,n.operator=e,n}subscribe(t,e,n){const{operator:r}=this,s=function(t,e,n){if(t){if(t instanceof p)return t;if(t[f])return t[f]()}return t||e||n?new p(t,e,n):new p(l)}(t,e,n);if(s.add(r?r.call(s,this.source):this.source||i.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),i.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s}_trySubscribe(t){try{return this._subscribe(t)}catch(e){i.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),function(t){for(;t;){const{closed:e,destination:n,isStopped:r}=t;if(e||r)return!1;t=n&&n instanceof p?n:null}return!0}(t)?t.error(e):console.warn(e)}}forEach(t,e){return new(e=v(e))((e,n)=>{let r;r=this.subscribe(e=>{try{t(e)}catch(s){n(s),r&&r.unsubscribe()}},n,e)})}_subscribe(t){const{source:e}=this;return e&&e.subscribe(t)}[_](){return this}pipe(...t){return 0===t.length?this:(0===(e=t).length?m:1===e.length?e[0]:function(t){return e.reduce((t,e)=>e(t),t)})(this);var e}toPromise(t){return new(t=v(t))((t,e)=>{let n;this.subscribe(t=>n=t,t=>e(t),()=>t(n))})}}return t.create=e=>new t(e),t})();function v(t){if(t||(t=i.Promise||Promise),!t)throw new Error("no Promise impl found");return t}const b=(()=>{function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t})();class w extends h{constructor(t,e){super(),this.subject=t,this.subscriber=e,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const t=this.subject,e=t.observers;if(this.subject=null,!e||0===e.length||t.isStopped||t.closed)return;const n=e.indexOf(this.subscriber);-1!==n&&e.splice(n,1)}}class C extends p{constructor(t){super(t),this.destination=t}}let x=(()=>{class t extends y{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[f](){return new C(this)}lift(t){const e=new E(this,this);return e.operator=t,e}next(t){if(this.closed)throw new b;if(!this.isStopped){const{observers:e}=this,n=e.length,r=e.slice();for(let s=0;s<n;s++)r[s].next(t)}}error(t){if(this.closed)throw new b;this.hasError=!0,this.thrownError=t,this.isStopped=!0;const{observers:e}=this,n=e.length,r=e.slice();for(let s=0;s<n;s++)r[s].error(t);this.observers.length=0}complete(){if(this.closed)throw new b;this.isStopped=!0;const{observers:t}=this,e=t.length,n=t.slice();for(let r=0;r<e;r++)n[r].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(t){if(this.closed)throw new b;return super._trySubscribe(t)}_subscribe(t){if(this.closed)throw new b;return this.hasError?(t.error(this.thrownError),h.EMPTY):this.isStopped?(t.complete(),h.EMPTY):(this.observers.push(t),new w(this,t))}asObservable(){const t=new y;return t.source=this,t}}return t.create=(t,e)=>new E(t,e),t})();class E extends x{constructor(t,e){super(),this.destination=t,this.source=e}next(t){const{destination:e}=this;e&&e.next&&e.next(t)}error(t){const{destination:e}=this;e&&e.error&&this.destination.error(t)}complete(){const{destination:t}=this;t&&t.complete&&this.destination.complete()}_subscribe(t){const{source:e}=this;return e?this.source.subscribe(t):h.EMPTY}}function k(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new A(t,e))}}class A{constructor(t,e){this.project=t,this.thisArg=e}call(t,e){return e.subscribe(new O(t,this.project,this.thisArg))}}class O extends p{constructor(t,e,n){super(t),this.project=e,this.count=0,this.thisArg=n||this}_next(t){let e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}const T=t=>e=>{for(let n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()};function S(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}const I=S(),V=t=>t&&"number"==typeof t.length&&"function"!=typeof t;function M(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}const D=t=>{if(t&&"function"==typeof t[_])return r=t,t=>{const e=r[_]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(V(t))return T(t);if(M(t))return n=t,t=>(n.then(e=>{t.closed||(t.next(e),t.complete())},e=>t.error(e)).then(null,o),t);if(t&&"function"==typeof t[I])return e=t,t=>{const n=e[I]();for(;;){let e;try{e=n.next()}catch(r){return t.error(r),t}if(e.done){t.complete();break}if(t.next(e.value),t.closed)break}return"function"==typeof n.return&&t.add(()=>{n.return&&n.return()}),t};{const e=u(t)?"an invalid object":`'${t}'`;throw new TypeError(`You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)}var e,n,r};function P(t,e){return new y(n=>{const r=new h;let s=0;return r.add(e.schedule(function(){s!==t.length?(n.next(t[s++]),n.closed||r.add(this.schedule())):n.complete()})),r})}function N(t,e){return e?function(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[_]}(t))return function(t,e){return new y(n=>{const r=new h;return r.add(e.schedule(()=>{const s=t[_]();r.add(s.subscribe({next(t){r.add(e.schedule(()=>n.next(t)))},error(t){r.add(e.schedule(()=>n.error(t)))},complete(){r.add(e.schedule(()=>n.complete()))}}))})),r})}(t,e);if(M(t))return function(t,e){return new y(n=>{const r=new h;return r.add(e.schedule(()=>t.then(t=>{r.add(e.schedule(()=>{n.next(t),r.add(e.schedule(()=>n.complete()))}))},t=>{r.add(e.schedule(()=>n.error(t)))}))),r})}(t,e);if(V(t))return P(t,e);if(function(t){return t&&"function"==typeof t[I]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new y(n=>{const r=new h;let s;return r.add(()=>{s&&"function"==typeof s.return&&s.return()}),r.add(e.schedule(()=>{s=t[I](),r.add(e.schedule(function(){if(n.closed)return;let t,e;try{const n=s.next();t=n.value,e=n.done}catch(r){return void n.error(r)}e?n.complete():(n.next(t),this.schedule())}))})),r})}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}(t,e):t instanceof y?t:new y(D(t))}class j extends p{constructor(t){super(),this.parent=t}_next(t){this.parent.notifyNext(t)}_error(t){this.parent.notifyError(t),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class F extends p{notifyNext(t){this.destination.next(t)}notifyError(t){this.destination.error(t)}notifyComplete(){this.destination.complete()}}function R(t,e,n=Number.POSITIVE_INFINITY){return"function"==typeof e?r=>r.pipe(R((n,r)=>N(t(n,r)).pipe(k((t,s)=>e(n,t,r,s))),n)):("number"==typeof e&&(n=e),e=>e.lift(new H(t,n)))}class H{constructor(t,e=Number.POSITIVE_INFINITY){this.project=t,this.concurrent=e}call(t,e){return e.subscribe(new L(t,this.project,this.concurrent))}}class L extends F{constructor(t,e,n=Number.POSITIVE_INFINITY){super(t),this.project=e,this.concurrent=n,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)}_tryNext(t){let e;const n=this.index++;try{e=this.project(t,n)}catch(r){return void this.destination.error(r)}this.active++,this._innerSub(e)}_innerSub(t){const e=new j(this),n=this.destination;n.add(e);const r=function(t,e){if(!e.closed)return t instanceof y?t.subscribe(e):D(t)(e)}(t,e);r!==e&&n.add(r)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(t){this.destination.next(t)}notifyComplete(){const t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}function B(...t){let e=Number.POSITIVE_INFINITY,n=null,r=t[t.length-1];var s;return(s=r)&&"function"==typeof s.schedule?(n=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(e=t.pop())):"number"==typeof r&&(e=t.pop()),null===n&&1===t.length&&t[0]instanceof y?t[0]:function(t=Number.POSITIVE_INFINITY){return R(m,t)}(e)(function(t,e){return e?P(t,e):new y(T(t))}(t,n))}function $(){return function(t){return t.lift(new Z(t))}}class Z{constructor(t){this.connectable=t}call(t,e){const{connectable:n}=this;n._refCount++;const r=new q(t,n),s=e.subscribe(r);return r.closed||(r.connection=n.connect()),s}}class q extends p{constructor(t,e){super(t),this.connectable=e}_unsubscribe(){const{connectable:t}=this;if(!t)return void(this.connection=null);this.connectable=null;const e=t._refCount;if(e<=0)return void(this.connection=null);if(t._refCount=e-1,e>1)return void(this.connection=null);const{connection:n}=this,r=t._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}class U extends y{constructor(t,e){super(),this.source=t,this.subjectFactory=e,this._refCount=0,this._isComplete=!1}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let t=this._connection;return t||(this._isComplete=!1,t=this._connection=new h,t.add(this.source.subscribe(new Q(this.getSubject(),this))),t.closed&&(this._connection=null,t=h.EMPTY)),t}refCount(){return $()(this)}}const z=(()=>{const t=U.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:t._subscribe},_isComplete:{value:t._isComplete,writable:!0},getSubject:{value:t.getSubject},connect:{value:t.connect},refCount:{value:t.refCount}}})();class Q extends C{constructor(t,e){super(t),this.connectable=e}_error(t){this._unsubscribe(),super._error(t)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const t=this.connectable;if(t){this.connectable=null;const e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}}}function W(){return new x}
/**
 * @license Angular v11.1.2
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function G(t){for(let e in t)if(t[e]===G)return e;throw Error("Could not find renamed property on target object.")}function J(t,e){for(const n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(t[n]=e[n])}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function K(t){if("string"==typeof t)return t;if(Array.isArray(t))return"["+t.map(K).join(", ")+"]";if(null==t)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;const e=t.toString();if(null==e)return""+e;const n=e.indexOf("\n");return-1===n?e:e.substring(0,n)}function Y(t,e){return null==t||""===t?null===e?"":e:null==e||""===e?t:t+" "+e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const X=G({__forward_ref__:G});function tt(t){return t.__forward_ref__=tt,t.toString=function(){return K(this())},t}function et(t){return nt(t)?t():t}function nt(t){return"function"==typeof t&&t.hasOwnProperty(X)&&t.__forward_ref__===tt}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function rt(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function st(t){return{factory:t.factory,providers:t.providers||[],imports:t.imports||[]}}function it(t){return ot(t,at)||ot(t,ct)}function ot(t,e){return t.hasOwnProperty(e)?t[e]:null}function lt(t){return t&&(t.hasOwnProperty(ut)||t.hasOwnProperty(ht))?t[ut]:null}const at=G({"\u0275prov":G}),ut=G({"\u0275inj":G}),ct=G({ngInjectableDef:G}),ht=G({ngInjectorDef:G});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var dt=function(t){return t[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ft;function pt(t){const e=ft;return ft=t,e}function gt(t,e,n){const r=it(t);if(r&&"root"==r.providedIn)return void 0===r.value?r.value=r.factory():r.value;if(n&dt.Optional)return null;if(void 0!==e)return e;throw new Error(`Injector: NOT_FOUND [${K(t)}]`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function _t(t){return{toString:t}.toString()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var mt=function(t){return t[t.OnPush=0]="OnPush",t[t.Default=1]="Default",t}({}),yt=function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const vt="undefined"!=typeof globalThis&&globalThis,bt="undefined"!=typeof window&&window,wt="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Ct="undefined"!=typeof global&&global,xt=vt||Ct||bt||wt,Et={},kt=[],At=G({"\u0275cmp":G}),Ot=G({"\u0275dir":G}),Tt=G({"\u0275pipe":G}),St=G({"\u0275mod":G}),It=G({"\u0275loc":G}),Vt=G({"\u0275fac":G}),Mt=G({__NG_ELEMENT_ID__:G});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Dt=0;function Pt(t){return _t(()=>{const e={},n={type:t.type,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===mt.OnPush,directiveDefs:null,pipeDefs:null,selectors:t.selectors||kt,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||yt.Emulated,id:"c",styles:t.styles||kt,_:null,setInput:null,schemas:t.schemas||null,tView:null},r=t.directives,s=t.features,i=t.pipes;return n.id+=Dt++,n.inputs=Ht(t.inputs,e),n.outputs=Ht(t.outputs),s&&s.forEach(t=>t(n)),n.directiveDefs=r?()=>("function"==typeof r?r():r).map(Nt):null,n.pipeDefs=i?()=>("function"==typeof i?i():i).map(jt):null,n})}function Nt(t){return Bt(t)||function(t){return t[Ot]||null}(t)}function jt(t){return function(t){return t[Tt]||null}(t)}const Ft={};function Rt(t){const e={type:t.type,bootstrap:t.bootstrap||kt,declarations:t.declarations||kt,imports:t.imports||kt,exports:t.exports||kt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null};return null!=t.id&&_t(()=>{Ft[t.id]=t.type}),e}function Ht(t,e){if(null==t)return Et;const n={};for(const r in t)if(t.hasOwnProperty(r)){let s=t[r],i=s;Array.isArray(s)&&(i=s[1],s=s[0]),n[s]=r,e&&(e[s]=i)}return n}const Lt=Pt;function Bt(t){return t[At]||null}function $t(t,e){const n=t[St]||null;if(!n&&!0===e)throw new Error(`Type ${K(t)} does not have '\u0275mod' property.`);return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Zt(t){return Array.isArray(t)&&"object"==typeof t[1]}function qt(t){return Array.isArray(t)&&!0===t[1]}function Ut(t){return 0!=(8&t.flags)}function zt(t){return 2==(2&t.flags)}function Qt(t){return 1==(1&t.flags)}function Wt(t){return null!==t.template}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Gt(t,e){return t.hasOwnProperty(Vt)?t[Vt]:null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Jt extends Error{constructor(t,e){super(function(t,e){return`${t?`NG0${t}: `:""}${e}`
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}(t,e)),this.code=t}}function Kt(t){return"string"==typeof t?t:null==t?"":String(t)}function Yt(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():Kt(t)}function Xt(t,e){const n=e?` in ${e}`:"";throw new Jt("201",`No provider for ${Yt(t)} found${n}`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class te{constructor(t,e,n){this.previousValue=t,this.currentValue=e,this.firstChange=n}isFirstChange(){return this.firstChange}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ee(){return ne}function ne(t){return t.type.prototype.ngOnChanges&&(t.setInput=se),re}function re(){const t=ie(this),e=null==t?void 0:t.current;if(e){const n=t.previous;if(n===Et)t.previous=e;else for(let t in e)n[t]=e[t];t.current=null,this.ngOnChanges(e)}}function se(t,e,n,r){const s=ie(t)||function(t,e){return t.__ngSimpleChanges__=e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,{previous:Et,current:null}),i=s.current||(s.current={}),o=s.previous,l=this.declaredInputs[n],a=o[l];i[l]=new te(a&&a.currentValue,e,o===Et),t[r]=e}function ie(t){return t.__ngSimpleChanges__||null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let oe;function le(t){return!!t.listen}ee.ngInherit=!0;const ae={createRenderer:(t,e)=>void 0!==oe?oe:"undefined"!=typeof document?document:void 0};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ue(t){for(;Array.isArray(t);)t=t[0];return t}function ce(t,e){return ue(e[t])}function he(t,e){return ue(e[t.index])}function de(t,e){return t.data[e]}function fe(t,e){const n=e[t];return Zt(n)?n:n[0]}function pe(t){const e=function(t){return t.__ngContext__||null}(t);return e?Array.isArray(e)?e:e.lView:null}function ge(t){return 4==(4&t[2])}function _e(t){return 128==(128&t[2])}function me(t,e){return null==e?null:t[e]}function ye(t){t[18]=0}function ve(t,e){t[5]+=e;let n=t,r=t[3];for(;null!==r&&(1===e&&1===n[5]||-1===e&&0===n[5]);)r[5]+=e,n=r,r=r[3]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const be={lFrame:Le(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function we(){return be.bindingsEnabled}function Ce(){return be.lFrame.lView}function xe(){return be.lFrame.tView}function Ee(){let t=ke();for(;null!==t&&64===t.type;)t=t.parent;return t}function ke(){return be.lFrame.currentTNode}function Ae(t,e){const n=be.lFrame;n.currentTNode=t,n.isParent=e}function Oe(){return be.lFrame.isParent}function Te(){return be.isInCheckNoChangesMode}function Se(t){be.isInCheckNoChangesMode=t}function Ie(){return be.lFrame.bindingIndex++}function Ve(t){const e=be.lFrame,n=e.bindingIndex;return e.bindingIndex=e.bindingIndex+t,n}function Me(t,e){const n=be.lFrame;n.bindingIndex=n.bindingRootIndex=t,De(e)}function De(t){be.lFrame.currentDirectiveIndex=t}function Pe(){return be.lFrame.currentQueryIndex}function Ne(t){be.lFrame.currentQueryIndex=t}function je(t){const e=t[1];return 2===e.type?e.declTNode:1===e.type?t[6]:null}function Fe(t,e,n){if(n&dt.SkipSelf){let r=e,s=t;for(;r=r.parent,!(null!==r||n&dt.Host||(r=je(s),null===r)||(s=s[15],10&r.type)););if(null===r)return!1;e=r,t=s}const r=be.lFrame=He();return r.currentTNode=e,r.lView=t,!0}function Re(t){const e=He(),n=t[1];be.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function He(){const t=be.lFrame,e=null===t?null:t.child;return null===e?Le(t):e}function Le(t){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return null!==t&&(t.child=e),e}function Be(){const t=be.lFrame;return be.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}const $e=Be;function Ze(){const t=Be();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function qe(){return be.lFrame.selectedIndex}function Ue(t){be.lFrame.selectedIndex=t}function ze(){const t=be.lFrame;return de(t.tView,t.selectedIndex)}function Qe(){be.lFrame.currentNamespace="http://www.w3.org/2000/svg"}function We(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){const e=t.data[n].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:s,ngAfterViewInit:i,ngAfterViewChecked:o,ngOnDestroy:l}=e;r&&(t.contentHooks||(t.contentHooks=[])).push(-n,r),s&&((t.contentHooks||(t.contentHooks=[])).push(n,s),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(n,s)),i&&(t.viewHooks||(t.viewHooks=[])).push(-n,i),o&&((t.viewHooks||(t.viewHooks=[])).push(n,o),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(n,o)),null!=l&&(t.destroyHooks||(t.destroyHooks=[])).push(n,l)}}function Ge(t,e,n){Ye(t,e,3,n)}function Je(t,e,n,r){(3&t[2])===n&&Ye(t,e,n,r)}function Ke(t,e){let n=t[2];(3&n)===e&&(n&=2047,n+=1,t[2]=n)}function Ye(t,e,n,r){const s=null!=r?r:-1,i=e.length-1;let o=0;for(let l=void 0!==r?65535&t[18]:0;l<i;l++)if("number"==typeof e[l+1]){if(o=e[l],null!=r&&o>=r)break}else e[l]<0&&(t[18]+=65536),(o<s||-1==s)&&(Xe(t,n,e,l),t[18]=(4294901760&t[18])+l+2),l++}function Xe(t,e,n,r){const s=n[r]<0,i=n[r+1],o=t[s?-n[r]:n[r]];s?t[2]>>11<t[18]>>16&&(3&t[2])===e&&(t[2]+=2048,i.call(o)):i.call(o)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class tn{constructor(t,e,n){this.factory=t,this.resolving=!1,this.canSeeViewProviders=e,this.injectImpl=n}}function en(t,e,n){const r=le(t);let s=0;for(;s<n.length;){const i=n[s];if("number"==typeof i){if(0!==i)break;s++;const o=n[s++],l=n[s++],a=n[s++];r?t.setAttribute(e,l,a,o):e.setAttributeNS(o,l,a)}else{const o=i,l=n[++s];nn(o)?r&&t.setProperty(e,o,l):r?t.setAttribute(e,o,l):e.setAttribute(o,l),s++}}return s}function nn(t){return 64===t.charCodeAt(0)}function rn(t,e){if(null===e||0===e.length);else if(null===t||0===t.length)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){const s=e[r];"number"==typeof s?n=s:0===n||sn(t,n,s,null,-1===n||2===n?e[++r]:null)}}return t}function sn(t,e,n,r,s){let i=0,o=t.length;if(-1===e)o=-1;else for(;i<t.length;){const n=t[i++];if("number"==typeof n){if(n===e){o=-1;break}if(n>e){o=i-1;break}}}for(;i<t.length;){const e=t[i];if("number"==typeof e)break;if(e===n){if(null===r)return void(null!==s&&(t[i+1]=s));if(r===t[i+1])return void(t[i+2]=s)}i++,null!==r&&i++,null!==s&&i++}-1!==o&&(t.splice(o,0,e),i=o+1),t.splice(i++,0,n),null!==r&&t.splice(i++,0,r),null!==s&&t.splice(i++,0,s)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function on(t){return-1!==t}function ln(t){return 32767&t}function an(t,e){let n=t>>16,r=e;for(;n>0;)r=r[15],n--;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let un=!0;function cn(t){const e=un;return un=t,e}let hn=0;function dn(t,e){const n=pn(t,e);if(-1!==n)return n;const r=e[1];r.firstCreatePass&&(t.injectorIndex=e.length,fn(r.data,t),fn(e,null),fn(r.blueprint,null));const s=gn(t,e),i=t.injectorIndex;if(on(s)){const t=ln(s),n=an(s,e),r=n[1].data;for(let s=0;s<8;s++)e[i+s]=n[t+s]|r[t+s]}return e[i+8]=s,i}function fn(t,e){t.push(0,0,0,0,0,0,0,0,e)}function pn(t,e){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null===e[t.injectorIndex+8]?-1:t.injectorIndex}function gn(t,e){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let n=0,r=null,s=e;for(;null!==s;){const t=s[1],e=t.type;if(r=2===e?t.declTNode:1===e?s[6]:null,null===r)return-1;if(n++,s=s[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function _n(t,e,n){!function(t,e,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Mt)&&(r=n[Mt]),null==r&&(r=n[Mt]=hn++);const s=255&r;e.data[t+(s>>5)]|=1<<s}(t,e,n)}function mn(t,e,n){if(n&dt.Optional)return t;Xt(e,"NodeInjector")}function yn(t,e,n,r){if(n&dt.Optional&&void 0===r&&(r=null),0==(n&(dt.Self|dt.Host))){const s=t[9],i=pt(void 0);try{return s?s.get(e,r,n&dt.Optional):gt(e,r,n&dt.Optional)}finally{pt(i)}}return mn(r,e,n)}function vn(t,e,n,r=dt.Default,s){if(null!==t){const i=function(t){if("string"==typeof t)return t.charCodeAt(0)||0;const e=t.hasOwnProperty(Mt)?t[Mt]:void 0;return"number"==typeof e?e>=0?255&e:wn:e}(n);if("function"==typeof i){if(!Fe(e,t,r))return r&dt.Host?mn(s,n,r):yn(e,n,r,s);try{const t=i();if(null!=t||r&dt.Optional)return t;Xt(n)}finally{$e()}}else if("number"==typeof i){let s=null,o=pn(t,e),l=-1,a=r&dt.Host?e[16][6]:null;for((-1===o||r&dt.SkipSelf)&&(l=-1===o?gn(t,e):e[o+8],-1!==l&&An(r,!1)?(s=e[1],o=ln(l),e=an(l,e)):o=-1);-1!==o;){const t=e[1];if(kn(i,o,t.data)){const t=Cn(o,e,n,s,r,a);if(t!==bn)return t}l=e[o+8],-1!==l&&An(r,e[1].data[o+8]===a)&&kn(i,o,e)?(s=t,o=ln(l),e=an(l,e)):o=-1}}}return yn(e,n,r,s)}const bn={};function wn(){return new On(Ee(),Ce())}function Cn(t,e,n,r,s,i){const o=e[1],l=o.data[t+8],a=xn(l,o,n,null==r?zt(l)&&un:r!=o&&0!=(3&l.type),s&dt.Host&&i===l);return null!==a?En(e,o,a,l):bn}function xn(t,e,n,r,s){const i=t.providerIndexes,o=e.data,l=1048575&i,a=t.directiveStart,u=i>>20,c=s?l+u:t.directiveEnd;for(let h=r?l:l+u;h<c;h++){const t=o[h];if(h<a&&n===t||h>=a&&t.type===n)return h}if(s){const t=o[a];if(t&&Wt(t)&&t.type===n)return a}return null}function En(t,e,n,r){let s=t[n];const i=e.data;if(s instanceof tn){const o=s;o.resolving&&function(t,e){throw new Jt("200",`Circular dependency in DI detected for ${t}`)}(Yt(i[n]));const l=cn(o.canSeeViewProviders);o.resolving=!0;const a=o.injectImpl?pt(o.injectImpl):null;Fe(t,r,dt.Default);try{s=t[n]=o.factory(void 0,i,t,r),e.firstCreatePass&&n>=r.directiveStart&&
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n){const{ngOnChanges:r,ngOnInit:s,ngDoCheck:i}=e.type.prototype;if(r){const r=ne(e);(n.preOrderHooks||(n.preOrderHooks=[])).push(t,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,r)}s&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-t,s),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,i))}(n,i[n],e)}finally{null!==a&&pt(a),cn(l),o.resolving=!1,$e()}}return s}function kn(t,e,n){return!!(n[e+(t>>5)]&1<<t)}function An(t,e){return!(t&dt.Self||t&dt.Host&&e)}class On{constructor(t,e){this._tNode=t,this._lView=e}get(t,e){return vn(this._tNode,this._lView,t,void 0,e)}}function Tn(t){const e=t;if(nt(t))return()=>{const t=Tn(et(e));return t?t():null};let n=Gt(e);if(null===n){const t=lt(e);n=t&&t.factory}return n||null}function Sn(t){return _t(()=>{const e=t.prototype.constructor,n=e[Vt]||Tn(e),r=Object.prototype;let s=Object.getPrototypeOf(t.prototype).constructor;for(;s&&s!==r;){const t=s[Vt]||Tn(s);if(t&&t!==n)return t;s=Object.getPrototypeOf(s)}return t=>new t})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function In(t,e,n){return _t(()=>{const r=function(t){return function(...e){if(t){const n=t(...e);for(const t in n)this[t]=n[t]}}}(e);function s(...t){if(this instanceof s)return r.apply(this,t),this;const e=new s(...t);return n.annotation=e,n;function n(t,n,r){const s=t.hasOwnProperty("__parameters__")?t.__parameters__:Object.defineProperty(t,"__parameters__",{value:[]}).__parameters__;for(;s.length<=r;)s.push(null);return(s[r]=s[r]||[]).push(e),t}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=t,s.annotationCls=s,s})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Vn{constructor(t,e){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof e?this.__NG_ELEMENT_ID__=e:void 0!==e&&(this.\u0275prov=rt({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Mn(t,e){void 0===e&&(e=t);for(let n=0;n<t.length;n++){let r=t[n];Array.isArray(r)?(e===t&&(e=t.slice(0,n)),Mn(r,e)):e!==t&&e.push(r)}return e}function Dn(t,e){t.forEach(t=>Array.isArray(t)?Dn(t,e):e(t))}function Pn(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function Nn(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function jn(t,e,n){let r=Rn(t,e);return r>=0?t[1|r]=n:(r=~r,function(t,e,n,r){let s=t.length;if(s==e)t.push(n,r);else if(1===s)t.push(r,t[0]),t[0]=n;else{for(s--,t.push(t[s-1],t[s]);s>e;)t[s]=t[s-2],s--;t[e]=n,t[e+1]=r}}(t,r,e,n)),r}function Fn(t,e){const n=Rn(t,e);if(n>=0)return t[1|n]}function Rn(t,e){return function(t,e,n){let r=0,s=t.length>>1;for(;s!==r;){const n=r+(s-r>>1),i=t[n<<1];if(e===i)return n<<1;i>e?s=n:r=n+1}return~(s<<1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Hn={},Ln=/\n/gm,Bn=G({provide:String,useValue:G});let $n;function Zn(t){const e=$n;return $n=t,e}function qn(t,e=dt.Default){if(void 0===$n)throw new Error("inject() must be called from an injection context");return null===$n?gt(t,void 0,e):$n.get(t,e&dt.Optional?null:void 0,e)}function Un(t,e=dt.Default){return(ft||qn)(et(t),e)}function zn(t){const e=[];for(let n=0;n<t.length;n++){const r=et(t[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let t,n=dt.Default;for(let e=0;e<r.length;e++){const s=r[e],i=s.__NG_DI_FLAG__;"number"==typeof i?-1===i?t=s.token:n|=i:t=s}e.push(Un(t,n))}else e.push(Un(r))}return e}function Qn(t,e){return t.__NG_DI_FLAG__=e,t.prototype.__NG_DI_FLAG__=e,t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Wn=Qn(In("Inject",t=>({token:t})),-1),Gn=Qn(In("Optional"),8),Jn=Qn(In("SkipSelf"),4);function Kn(t){return t.ngDebugContext}function Yn(t){return t.ngOriginalError}function Xn(t,...e){t.error(...e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class tr{constructor(){this._console=console}handleError(t){const e=this._findOriginalError(t),n=this._findContext(t),r=function(t){return t.ngErrorLogger||Xn}(t);r(this._console,"ERROR",t),e&&r(this._console,"ORIGINAL ERROR",e),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(t){return t?Kn(t)?Kn(t):this._findContext(Yn(t)):null}_findOriginalError(t){let e=Yn(t);for(;e&&Yn(e);)e=Yn(e);return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function er(t,e){t.__ngContext__=e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const nr=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(xt))();function rr(t){return t instanceof Function?t():t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var sr=function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ir(t,e){return(void 0)(t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function or(t){const e=t[3];return qt(e)?e[3]:e}function lr(t){return ur(t[13])}function ar(t){return ur(t[4])}function ur(t){for(;null!==t&&!qt(t);)t=t[4];return t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function cr(t,e,n,r,s){if(null!=r){let i,o=!1;qt(r)?i=r:Zt(r)&&(o=!0,r=r[0]);const l=ue(r);0===t&&null!==n?null==s?mr(e,n,l):_r(e,n,l,s||null,!0):1===t&&null!==n?_r(e,n,l,s||null,!0):2===t?function(t,e,n){const r=vr(t,e);r&&function(t,e,n,r){le(t)?t.removeChild(e,n,r):e.removeChild(n)}(t,r,e,n)}(e,l,o):3===t&&e.destroyNode(l),null!=i&&function(t,e,n,r,s){const i=n[7];i!==ue(n)&&cr(e,t,r,i,s);for(let o=10;o<n.length;o++){const s=n[o];Er(s[1],s,t,e,r,i)}}(e,t,i,n,s)}}function hr(t,e,n){return le(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function dr(t,e){const n=t[9],r=n.indexOf(e),s=e[3];1024&e[2]&&(e[2]&=-1025,ve(s,-1)),n.splice(r,1)}function fr(t,e){if(t.length<=10)return;const n=10+e,r=t[n];if(r){const i=r[17];null!==i&&i!==t&&dr(i,r),e>0&&(t[n-1][4]=r[4]);const o=Nn(t,10+e);Er(r[1],s=r,s[11],2,null,null),s[0]=null,s[6]=null;const l=o[19];null!==l&&l.detachView(o[1]),r[3]=null,r[4]=null,r[2]&=-129}var s;return r}function pr(t,e){if(!(256&e[2])){const n=e[11];le(n)&&n.destroyNode&&Er(t,e,n,3,null,null),function(t){let e=t[13];if(!e)return gr(t[1],t);for(;e;){let n=null;if(Zt(e))n=e[13];else{const t=e[10];t&&(n=t)}if(!n){for(;e&&!e[4]&&e!==t;)Zt(e)&&gr(e[1],e),e=e[3];null===e&&(e=t),Zt(e)&&gr(e[1],e),n=e&&e[4]}e=n}}(e)}}function gr(t,e){if(!(256&e[2])){e[2]&=-129,e[2]|=256,function(t,e){let n;if(null!=t&&null!=(n=t.destroyHooks))for(let r=0;r<n.length;r+=2){const t=e[n[r]];if(!(t instanceof tn)){const e=n[r+1];if(Array.isArray(e))for(let n=0;n<e.length;n+=2)e[n+1].call(t[e[n]]);else e.call(t)}}}(t,e),function(t,e){const n=t.cleanup,r=e[7];let s=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const t=n[i+1],o="function"==typeof t?t(e):ue(e[t]),l=r[s=n[i+2]],a=n[i+3];"boolean"==typeof a?o.removeEventListener(n[i],l,a):a>=0?r[s=a]():r[s=-a].unsubscribe(),i+=2}else{const t=r[s=n[i+1]];n[i].call(t)}if(null!==r){for(let t=s+1;t<r.length;t++)(0,r[t])();e[7]=null}}(t,e),1===e[1].type&&le(e[11])&&e[11].destroy();const n=e[17];if(null!==n&&qt(e[3])){n!==e[3]&&dr(n,e);const r=e[19];null!==r&&r.detachView(t)}}}function _r(t,e,n,r,s){le(t)?t.insertBefore(e,n,r,s):e.insertBefore(n,r,s)}function mr(t,e,n){le(t)?t.appendChild(e,n):e.appendChild(n)}function yr(t,e,n,r,s){null!==r?_r(t,e,n,r,s):mr(t,e,n)}function vr(t,e){return le(t)?t.parentNode(e):e.parentNode}function br(t,e,n,r){const s=function(t,e,n){return function(t,e,n){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return n[0];if(2&r.flags){const e=t.data[r.directiveStart].encapsulation;if(e===yt.None||e===yt.Emulated)return null}return he(r,n)}(t,e.parent,n)}(t,r,e),i=e[11],o=function(t,e,n){return function(t,e,n){return 40&t.type?he(t,n):null}(t,0,n)}(r.parent||e[6],0,e);if(null!=s)if(Array.isArray(n))for(let l=0;l<n.length;l++)yr(i,s,n[l],o,!1);else yr(i,s,n,o,!1)}function wr(t,e){if(null!==e){const n=e.type;if(3&n)return he(e,t);if(4&n)return Cr(-1,t[e.index]);if(8&n){const n=e.child;if(null!==n)return wr(t,n);{const n=t[e.index];return qt(n)?Cr(-1,n):ue(n)}}if(32&n)return ir(e,t)()||ue(t[e.index]);{const n=t[16],r=n[6],s=or(n),i=r.projection[e.projection];return null!=i?wr(s,i):wr(t,e.next)}}return null}function Cr(t,e){const n=10+t+1;if(n<e.length){const t=e[n],r=t[1].firstChild;if(null!==r)return wr(t,r)}return e[7]}function xr(t,e,n,r,s,i,o){for(;null!=n;){const l=r[n.index],a=n.type;if(o&&0===e&&(l&&er(ue(l),r),n.flags|=4),64!=(64&n.flags))if(8&a)xr(t,e,n.child,r,s,i,!1),cr(e,t,s,l,i);else if(32&a){const o=ir(n,r);let a;for(;a=o();)cr(e,t,s,a,i);cr(e,t,s,l,i)}else 16&a?kr(t,e,r,n,s,i):cr(e,t,s,l,i);n=o?n.projectionNext:n.next}}function Er(t,e,n,r,s,i){xr(n,r,t.firstChild,e,s,i,!1)}function kr(t,e,n,r,s,i){const o=n[16],l=o[6].projection[r.projection];if(Array.isArray(l))for(let a=0;a<l.length;a++)cr(e,t,s,l[a],i);else xr(t,e,l,o[3],s,i,!0)}function Ar(t,e,n){le(t)?t.setAttribute(e,"style",n):e.style.cssText=n}function Or(t,e,n){le(t)?""===n?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n):e.className=n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Tr(t,e,n){let r=t.length;for(;;){const s=t.indexOf(e,n);if(-1===s)return s;if(0===s||t.charCodeAt(s-1)<=32){const n=e.length;if(s+n===r||t.charCodeAt(s+n)<=32)return s}n=s+1}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Sr(t,e,n){let r=0;for(;r<t.length;){let s=t[r++];if(n&&"class"===s){if(s=t[r],-1!==Tr(s.toLowerCase(),e,0))return!0}else if(1===s){for(;r<t.length&&"string"==typeof(s=t[r++]);)if(s.toLowerCase()===e)return!0;return!1}}return!1}function Ir(t){return 4===t.type&&"ng-template"!==t.value}function Vr(t,e,n){return e===(4!==t.type||n?t.value:"ng-template")}function Mr(t,e,n){let r=4;const s=t.attrs||[],i=function(t){for(let n=0;n<t.length;n++)if(3===(e=t[n])||4===e||6===e)return n;var e;return t.length}(s);let o=!1;for(let l=0;l<e.length;l++){const a=e[l];if("number"!=typeof a){if(!o)if(4&r){if(r=2|1&r,""!==a&&!Vr(t,a,n)||""===a&&1===e.length){if(Dr(r))return!1;o=!0}}else{const u=8&r?a:e[++l];if(8&r&&null!==t.attrs){if(!Sr(t.attrs,u,n)){if(Dr(r))return!1;o=!0}continue}const c=Pr(8&r?"class":a,s,Ir(t),n);if(-1===c){if(Dr(r))return!1;o=!0;continue}if(""!==u){let t;t=c>i?"":s[c+1].toLowerCase();const e=8&r?t:null;if(e&&-1!==Tr(e,u,0)||2&r&&u!==t){if(Dr(r))return!1;o=!0}}}}else{if(!o&&!Dr(r)&&!Dr(a))return!1;if(o&&Dr(a))continue;o=!1,r=a|1&r}}return Dr(r)||o}function Dr(t){return 0==(1&t)}function Pr(t,e,n,r){if(null===e)return-1;let s=0;if(r||!n){let n=!1;for(;s<e.length;){const r=e[s];if(r===t)return s;if(3===r||6===r)n=!0;else{if(1===r||2===r){let t=e[++s];for(;"string"==typeof t;)t=e[++s];continue}if(4===r)break;if(0===r){s+=4;continue}}s+=n?1:2}return-1}return function(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){const r=t[n];if("number"==typeof r)return-1;if(r===e)return n;n++}return-1}(e,t)}function Nr(t,e,n=!1){for(let r=0;r<e.length;r++)if(Mr(t,e[r],n))return!0;return!1}function jr(t,e){return t?":not("+e.trim()+")":e}function Fr(t){let e=t[0],n=1,r=2,s="",i=!1;for(;n<t.length;){let o=t[n];if("string"==typeof o)if(2&r){const e=t[++n];s+="["+o+(e.length>0?'="'+e+'"':"")+"]"}else 8&r?s+="."+o:4&r&&(s+=" "+o);else""===s||Dr(o)||(e+=jr(i,s),s=""),r=o,i=i||!Dr(r);n++}return""!==s&&(e+=jr(i,s)),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Rr={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Hr(t){Lr(xe(),Ce(),qe()+t,Te())}function Lr(t,e,n,r){if(!r)if(3==(3&e[2])){const r=t.preOrderCheckHooks;null!==r&&Ge(e,r,n)}else{const r=t.preOrderHooks;null!==r&&Je(e,r,0,n)}Ue(n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Br(t,e){return t<<17|e<<2}function $r(t){return t>>17&32767}function Zr(t){return 2|t}function qr(t){return(131068&t)>>2}function Ur(t,e){return-131069&t|e<<2}function zr(t){return 1|t}function Qr(t,e){const n=t.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const s=n[r],i=n[r+1];if(-1!==i){const n=t.data[i];Ne(s),n.contentQueries(2,e[i],i)}}}function Wr(t,e,n,r,s,i,o,l,a,u){const c=e.blueprint.slice();return c[0]=s,c[2]=140|r,ye(c),c[3]=c[15]=t,c[8]=n,c[10]=o||t&&t[10],c[11]=l||t&&t[11],c[12]=a||t&&t[12]||null,c[9]=u||t&&t[9]||null,c[6]=i,c[16]=2==e.type?t[16]:c,c}function Gr(t,e,n,r,s){let i=t.data[e];if(null===i)i=function(t,e,n,r,s){const i=ke(),o=Oe(),l=t.data[e]=function(t,e,n,r,s,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:e?e.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:s,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,o?i:i&&i.parent,n,e,r,s);return null===t.firstChild&&(t.firstChild=l),null!==i&&(o?null==i.child&&null!==l.parent&&(i.child=l):null===i.next&&(i.next=l)),l}(t,e,n,r,s),be.lFrame.inI18n&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=s;const t=function(){const t=be.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}();i.injectorIndex=null===t?-1:t.injectorIndex}return Ae(i,!0),i}function Jr(t,e,n,r){if(0===n)return-1;const s=e.length;for(let i=0;i<n;i++)e.push(r),t.blueprint.push(r),t.data.push(null);return s}function Kr(t,e,n){Re(e);try{const r=t.viewQuery;null!==r&&ks(1,r,n);const s=t.template;null!==s&&ts(t,e,s,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&Qr(t,e),t.staticViewQueries&&ks(2,t.viewQuery,n);const i=t.components;null!==i&&function(t,e){for(let n=0;n<e.length;n++)bs(t,e[n])}(e,i)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0),r}finally{e[2]&=-5,Ze()}}function Yr(t,e,n,r){const s=e[2];if(256==(256&s))return;Re(e);const i=Te();try{ye(e),be.lFrame.bindingIndex=t.bindingStartIndex,null!==n&&ts(t,e,n,2,r);const o=3==(3&s);if(!i)if(o){const n=t.preOrderCheckHooks;null!==n&&Ge(e,n,null)}else{const n=t.preOrderHooks;null!==n&&Je(e,n,0,null),Ke(e,0)}if(function(t){for(let e=lr(t);null!==e;e=ar(e)){if(!e[2])continue;const t=e[9];for(let e=0;e<t.length;e++){const n=t[e],r=n[3];0==(1024&n[2])&&ve(r,1),n[2]|=1024}}}(e),function(t){for(let e=lr(t);null!==e;e=ar(e))for(let t=10;t<e.length;t++){const n=e[t],r=n[1];_e(n)&&Yr(r,n,r.template,n[8])}}(e),null!==t.contentQueries&&Qr(t,e),!i)if(o){const n=t.contentCheckHooks;null!==n&&Ge(e,n)}else{const n=t.contentHooks;null!==n&&Je(e,n,1),Ke(e,1)}!function(t,e){const n=t.hostBindingOpCodes;if(null!==n)try{for(let t=0;t<n.length;t++){const r=n[t];if(r<0)Ue(~r);else{const s=r,i=n[++t],o=n[++t];Me(i,s),o(2,e[s])}}}finally{Ue(-1)}}(t,e);const l=t.components;null!==l&&function(t,e){for(let n=0;n<e.length;n++)ys(t,e[n])}(e,l);const a=t.viewQuery;if(null!==a&&ks(2,a,r),!i)if(o){const n=t.viewCheckHooks;null!==n&&Ge(e,n)}else{const n=t.viewHooks;null!==n&&Je(e,n,2),Ke(e,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),i||(e[2]&=-73),1024&e[2]&&(e[2]&=-1025,ve(e[3],-1))}finally{Ze()}}function Xr(t,e,n,r){const s=e[10],i=!Te(),o=ge(e);try{i&&!o&&s.begin&&s.begin(),o&&Kr(t,e,r),Yr(t,e,n,r)}finally{i&&!o&&s.end&&s.end()}}function ts(t,e,n,r,s){const i=qe();try{Ue(-1),2&r&&e.length>20&&Lr(t,e,20,Te()),n(r,s)}finally{Ue(i)}}function es(t,e,n){we()&&(function(t,e,n,r){const s=n.directiveStart,i=n.directiveEnd;t.firstCreatePass||dn(n,e),er(r,e);const o=n.initialInputs;for(let l=s;l<i;l++){const r=t.data[l],i=Wt(r);i&&ps(e,n,r);const a=En(e,t,l,n);er(a,e),null!==o&&gs(0,l-s,a,r,0,o),i&&(fe(n.index,e)[8]=a)}}(t,e,n,he(n,e)),128==(128&n.flags)&&function(t,e,n){const r=n.directiveStart,s=n.directiveEnd,i=n.index,o=be.lFrame.currentDirectiveIndex;try{Ue(i);for(let n=r;n<s;n++){const r=t.data[n],s=e[n];De(n),null===r.hostBindings&&0===r.hostVars&&null===r.hostAttrs||us(r,s)}}finally{Ue(-1),De(o)}}(t,e,n))}function ns(t,e,n=he){const r=e.localNames;if(null!==r){let s=e.index+1;for(let i=0;i<r.length;i+=2){const o=r[i+1],l=-1===o?n(e,t):t[o];t[s++]=l}}}function rs(t){const e=t.tView;return null===e||e.incompleteFirstPass?t.tView=ss(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts):e}function ss(t,e,n,r,s,i,o,l,a,u){const c=20+r,h=c+s,d=function(t,e){const n=[];for(let r=0;r<e;r++)n.push(r<t?null:Rr);return n}(c,h),f="function"==typeof u?u():u;return d[1]={type:t,blueprint:d,template:n,queries:null,viewQuery:l,declTNode:e,data:d.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof o?o():o,firstChild:null,schemas:a,consts:f,incompleteFirstPass:!1}}function is(t,e,n,r){const s=Os(e);null===n?s.push(r):(s.push(n),t.firstCreatePass&&Ts(t).push(r,s.length-1))}function os(t,e,n){for(let r in t)if(t.hasOwnProperty(r)){const s=t[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(e,s):n[r]=[e,s]}return n}function ls(t,e,n,r){let s=!1;if(we()){const i=function(t,e,n){const r=t.directiveRegistry;let s=null;if(r)for(let i=0;i<r.length;i++){const o=r[i];Nr(n,o.selectors,!1)&&(s||(s=[]),_n(dn(n,e),t,o.type),Wt(o)?(cs(t,n),s.unshift(o)):s.push(o))}return s}(t,e,n),o=null===r?null:{"":-1};if(null!==i){s=!0,ds(n,t.data.length,i.length);for(let t=0;t<i.length;t++){const e=i[t];e.providersResolver&&e.providersResolver(e)}let r=!1,l=!1,a=Jr(t,e,i.length,null);for(let s=0;s<i.length;s++){const u=i[s];n.mergedAttrs=rn(n.mergedAttrs,u.hostAttrs),fs(t,n,e,a,u),hs(a,u,o),null!==u.contentQueries&&(n.flags|=8),null===u.hostBindings&&null===u.hostAttrs&&0===u.hostVars||(n.flags|=128);const c=u.type.prototype;!r&&(c.ngOnChanges||c.ngOnInit||c.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n.index),r=!0),l||!c.ngOnChanges&&!c.ngDoCheck||((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n.index),l=!0),a++}!function(t,e){const n=e.directiveEnd,r=t.data,s=e.attrs,i=[];let o=null,l=null;for(let a=e.directiveStart;a<n;a++){const t=r[a],n=t.inputs,u=null===s||Ir(e)?null:_s(n,s);i.push(u),o=os(n,a,o),l=os(t.outputs,a,l)}null!==o&&(o.hasOwnProperty("class")&&(e.flags|=16),o.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=i,e.inputs=o,e.outputs=l}(t,n)}o&&function(t,e,n){if(e){const r=t.localNames=[];for(let t=0;t<e.length;t+=2){const s=n[e[t+1]];if(null==s)throw new Jt("301",`Export of name '${e[t+1]}' not found!`);r.push(e[t],s)}}}(n,r,o)}return n.mergedAttrs=rn(n.mergedAttrs,n.attrs),s}function as(t,e,n,r,s,i){const o=i.hostBindings;if(o){let n=t.hostBindingOpCodes;null===n&&(n=t.hostBindingOpCodes=[]);const i=~e.index;(function(t){let e=t.length;for(;e>0;){const n=t[--e];if("number"==typeof n&&n<0)return n}return 0})(n)!=i&&n.push(i),n.push(r,s,o)}}function us(t,e){null!==t.hostBindings&&t.hostBindings(1,e)}function cs(t,e){e.flags|=2,(t.components||(t.components=[])).push(e.index)}function hs(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;Wt(e)&&(n[""]=t)}}function ds(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function fs(t,e,n,r,s){t.data[r]=s;const i=s.factory||(s.factory=Gt(s.type)),o=new tn(i,Wt(s),null);t.blueprint[r]=o,n[r]=o,as(t,e,0,r,Jr(t,n,s.hostVars,Rr),s)}function ps(t,e,n){const r=he(e,t),s=rs(n),i=t[10],o=ws(t,Wr(t,s,null,n.onPush?64:16,r,e,i,i.createRenderer(r,n),null,null));t[e.index]=o}function gs(t,e,n,r,s,i){const o=i[e];if(null!==o){const t=r.setInput;for(let e=0;e<o.length;){const s=o[e++],i=o[e++],l=o[e++];null!==t?r.setInput(n,l,s,i):n[i]=l}}}function _s(t,e){let n=null,r=0;for(;r<e.length;){const s=e[r];if(0!==s)if(5!==s){if("number"==typeof s)break;t.hasOwnProperty(s)&&(null===n&&(n=[]),n.push(s,t[s],e[r+1])),r+=2}else r+=2;else r+=4}return n}function ms(t,e,n,r){return new Array(t,!0,!1,e,null,0,r,n,null,null)}function ys(t,e){const n=fe(e,t);if(_e(n)){const t=n[1];80&n[2]?Yr(t,n,t.template,n[8]):n[5]>0&&vs(n)}}function vs(t){for(let n=lr(t);null!==n;n=ar(n))for(let t=10;t<n.length;t++){const e=n[t];if(1024&e[2]){const t=e[1];Yr(t,e,t.template,e[8])}else e[5]>0&&vs(e)}const e=t[1].components;if(null!==e)for(let n=0;n<e.length;n++){const r=fe(e[n],t);_e(r)&&r[5]>0&&vs(r)}}function bs(t,e){const n=fe(e,t),r=n[1];!function(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}(r,n),Kr(r,n,n[8])}function ws(t,e){return t[13]?t[14][4]=e:t[13]=e,t[14]=e,e}function Cs(t){for(;t;){t[2]|=64;const e=or(t);if(0!=(512&t[2])&&!e)return t;t=e}return null}function xs(t,e,n){const r=e[10];r.begin&&r.begin();try{Yr(t,e,t.template,n)}catch(s){throw Ss(e,s),s}finally{r.end&&r.end()}}function Es(t){!function(t){for(let e=0;e<t.components.length;e++){const n=t.components[e],r=pe(n),s=r[1];Xr(s,r,s.template,n)}}(t[8])}function ks(t,e,n){Ne(0),e(t,n)}const As=(()=>Promise.resolve(null))();function Os(t){return t[7]||(t[7]=[])}function Ts(t){return t.cleanup||(t.cleanup=[])}function Ss(t,e){const n=t[9],r=n?n.get(tr,null):null;r&&r.handleError(e)}function Is(t,e,n,r,s){for(let i=0;i<n.length;){const o=n[i++],l=n[i++],a=e[o],u=t.data[o];null!==u.setInput?u.setInput(a,s,r,l):a[l]=s}}function Vs(t,e,n){const r=ce(e,t);!function(t,e,n){le(t)?t.setValue(e,n):e.textContent=n}(t[11],r,n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ms(t,e,n){let r=n?t.styles:null,s=n?t.classes:null,i=0;if(null!==e)for(let o=0;o<e.length;o++){const t=e[o];"number"==typeof t?i=t:1==i?s=Y(s,t):2==i&&(r=Y(r,t+": "+e[++o]+";"))}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=s:t.classesWithoutHost=s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ds=new Vn("INJECTOR",-1);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ps{get(t,e=Hn){if(e===Hn){const e=new Error(`NullInjectorError: No provider for ${K(t)}!`);throw e.name="NullInjectorError",e}return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ns=new Vn("Set Injector scope."),js={},Fs={},Rs=[];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Hs;function Ls(){return void 0===Hs&&(Hs=new Ps),Hs}function Bs(t,e=null,n=null,r){return new $s(t,n,e||Ls(),r)}class $s{constructor(t,e,n,r=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const s=[];e&&Dn(e,n=>this.processProvider(n,t,e)),Dn([t],t=>this.processInjectorType(t,[],s)),this.records.set(Ds,Us(void 0,this));const i=this.records.get(Ns);this.scope=null!=i?i.value:null,this.source=r||("object"==typeof t?null:K(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,e=Hn,n=dt.Default){this.assertNotDestroyed();const r=Zn(this);try{if(!(n&dt.SkipSelf)){let e=this.records.get(t);if(void 0===e){const n=("function"==typeof(s=t)||"object"==typeof s&&s instanceof Vn)&&it(t);e=n&&this.injectableDefInScope(n)?Us(Zs(t),js):null,this.records.set(t,e)}if(null!=e)return this.hydrate(t,e)}return(n&dt.Self?Ls():this.parent).get(t,e=n&dt.Optional&&e===Hn?null:e)}catch(i){if("NullInjectorError"===i.name){if((i.ngTempTokenPath=i.ngTempTokenPath||[]).unshift(K(t)),r)throw i;return function(t,e,n,r){const s=t.ngTempTokenPath;throw e.__source&&s.unshift(e.__source),t.message=function(t,e,n,r=null){t=t&&"\n"===t.charAt(0)&&"\u0275"==t.charAt(1)?t.substr(2):t;let s=K(e);if(Array.isArray(e))s=e.map(K).join(" -> ");else if("object"==typeof e){let t=[];for(let n in e)if(e.hasOwnProperty(n)){let r=e[n];t.push(n+":"+("string"==typeof r?JSON.stringify(r):K(r)))}s=`{${t.join(", ")}}`}return`${n}${r?"("+r+")":""}[${s}]: ${t.replace(Ln,"\n  ")}`}("\n"+t.message,s,n,r),t.ngTokenPath=s,t.ngTempTokenPath=null,t}(i,t,"R3InjectorError",this.source)}throw i}finally{Zn(r)}var s;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((e,n)=>t.push(K(n))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,e,n){if(!(t=et(t)))return!1;let r=lt(t);const s=null==r&&t.ngModule||void 0,i=void 0===s?t:s,o=-1!==n.indexOf(i);if(void 0!==s&&(r=lt(s)),null==r)return!1;if(null!=r.imports&&!o){let t;n.push(i);try{Dn(r.imports,r=>{this.processInjectorType(r,e,n)&&(void 0===t&&(t=[]),t.push(r))})}finally{}if(void 0!==t)for(let e=0;e<t.length;e++){const{ngModule:n,providers:r}=t[e];Dn(r,t=>this.processProvider(t,n,r||Rs))}}this.injectorDefTypes.add(i),this.records.set(i,Us(r.factory,js));const l=r.providers;if(null!=l&&!o){const e=t;Dn(l,t=>this.processProvider(t,e,l))}return void 0!==s&&void 0!==t.providers}processProvider(t,e,n){let r=Qs(t=et(t))?t:et(t&&t.provide);const s=function(t,e,n){return zs(t)?Us(void 0,t.useValue):Us(qs(t),js)}(t);if(Qs(t)||!0!==t.multi)this.records.get(r);else{let e=this.records.get(r);e||(e=Us(void 0,js,!0),e.factory=()=>zn(e.multi),this.records.set(r,e)),r=t,e.multi.push(t)}this.records.set(r,s)}hydrate(t,e){var n;return e.value===js&&(e.value=Fs,e.value=e.factory()),"object"==typeof e.value&&e.value&&null!==(n=e.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy&&this.onDestroy.add(e.value),e.value}injectableDefInScope(t){return!!t.providedIn&&("string"==typeof t.providedIn?"any"===t.providedIn||t.providedIn===this.scope:this.injectorDefTypes.has(t.providedIn))}}function Zs(t){const e=it(t),n=null!==e?e.factory:Gt(t);if(null!==n)return n;const r=lt(t);if(null!==r)return r.factory;if(t instanceof Vn)throw new Error(`Token ${K(t)} is missing a \u0275prov definition.`);if(t instanceof Function)return function(t){const e=t.length;if(e>0){const n=function(t,e){const n=[];for(let r=0;r<t;r++)n.push("?");return n}(e);throw new Error(`Can't resolve all parameters for ${K(t)}: (${n.join(", ")}).`)}const n=function(t){const e=t&&(t[at]||t[ct]);if(e){const n=function(t){if(t.hasOwnProperty("name"))return t.name;const e=(""+t).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),e}return null}(t);return null!==n?()=>n.factory(t):()=>new t}(t);throw new Error("unreachable")}function qs(t,e,n){let r;if(Qs(t)){const e=et(t);return Gt(e)||Zs(e)}if(zs(t))r=()=>et(t.useValue);else if((s=t)&&s.useFactory)r=()=>t.useFactory(...zn(t.deps||[]));else if(function(t){return!(!t||!t.useExisting)}(t))r=()=>Un(et(t.useExisting));else{const e=et(t&&(t.useClass||t.provide));if(!function(t){return!!t.deps}(t))return Gt(e)||Zs(e);r=()=>new e(...zn(t.deps))}var s;return r}function Us(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function zs(t){return null!==t&&"object"==typeof t&&Bn in t}function Qs(t){return"function"==typeof t}const Ws=function(t,e,n){return function(t,e=null,n=null,r){const s=Bs(t,e,n,r);return s._resolveInjectorDefTypes(),s}({name:n},e,t,n)};let Gs=(()=>{class t{static create(t,e){return Array.isArray(t)?Ws(t,e,""):Ws(t.providers,t.parent,t.name||"")}}return t.THROW_IF_NOT_FOUND=Hn,t.NULL=new Ps,t.\u0275prov=rt({token:t,providedIn:"any",factory:()=>Un(Ds)}),t.__NG_ELEMENT_ID__=-1,t})();function Js(t,e){We(pe(t)[1],Ee())}function Ks(t){let e=Object.getPrototypeOf(t.type.prototype).constructor,n=!0;const r=[t];for(;e;){let s;if(Wt(t))s=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new Error("Directives cannot inherit Components");s=e.\u0275dir}if(s){if(n){r.push(s);const e=t;e.inputs=Ys(t.inputs),e.declaredInputs=Ys(t.declaredInputs),e.outputs=Ys(t.outputs);const n=s.hostBindings;n&&ei(t,n);const i=s.viewQuery,o=s.contentQueries;if(i&&Xs(t,i),o&&ti(t,o),J(t.inputs,s.inputs),J(t.declaredInputs,s.declaredInputs),J(t.outputs,s.outputs),Wt(s)&&s.data.animation){const e=t.data;e.animation=(e.animation||[]).concat(s.data.animation)}}const e=s.features;if(e)for(let r=0;r<e.length;r++){const s=e[r];s&&s.ngInherit&&s(t),s===Ks&&(n=!1)}}e=Object.getPrototypeOf(e)}!function(t){let e=0,n=null;for(let r=t.length-1;r>=0;r--){const s=t[r];s.hostVars=e+=s.hostVars,s.hostAttrs=rn(s.hostAttrs,n=rn(n,s.hostAttrs))}}(r)}function Ys(t){return t===Et?{}:t===kt?[]:t}function Xs(t,e){const n=t.viewQuery;t.viewQuery=n?(t,r)=>{e(t,r),n(t,r)}:e}function ti(t,e){const n=t.contentQueries;t.contentQueries=n?(t,r,s)=>{e(t,r,s),n(t,r,s)}:e}function ei(t,e){const n=t.hostBindings;t.hostBindings=n?(t,r)=>{e(t,r),n(t,r)}:e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ni=null;function ri(){if(!ni){const t=xt.Symbol;if(t&&t.iterator)ni=t.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let e=0;e<t.length;++e){const n=t[e];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(ni=n)}}}return ni}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function si(t){return!!ii(t)&&(Array.isArray(t)||!(t instanceof Map)&&ri()in t)}function ii(t){return null!==t&&("function"==typeof t||"object"==typeof t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function oi(t,e,n){return!Object.is(t[e],n)&&(t[e]=n,!0)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function li(t,e,n,r){const s=Ce();return oi(s,Ie(),e)&&(xe(),function(t,e,n,r,s,i){const o=he(t,e);!function(t,e,n,r,s,i,o){if(null==i)le(t)?t.removeAttribute(e,s,n):e.removeAttribute(s);else{const l=null==o?Kt(i):o(i,r||"",s);le(t)?t.setAttribute(e,s,l,n):n?e.setAttributeNS(n,s,l):e.setAttribute(s,l)}}(e[11],o,i,t.value,n,r,s)}(ze(),s,t,e,n,r)),li}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ai(t,e=dt.Default){const n=Ce();return null===n?Un(t,e):vn(Ee(),n,et(t),e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ui(t,e,n){const r=Ce();return oi(r,Ie(),e)&&function(t,e,n,r,s,i,o,l){const a=he(e,n);let u,c=e.inputs;var h;null!=c&&(u=c[r])?(Is(t,n,u,r,s),zt(e)&&function(t,e){const n=fe(e,t);16&n[2]||(n[2]|=64)}(n,e.index)):3&e.type&&(r="class"===(h=r)?"className":"for"===h?"htmlFor":"formaction"===h?"formAction":"innerHtml"===h?"innerHTML":"readonly"===h?"readOnly":"tabindex"===h?"tabIndex":h,s=null!=o?o(s,e.value||"",r):s,le(i)?i.setProperty(a,r,s):nn(r)||(a.setProperty?a.setProperty(r,s):a[r]=s))}(xe(),ze(),r,t,e,r[11],n),ui}function ci(t,e,n,r,s){const i=s?"class":"style";Is(t,n,e.inputs[i],i,r)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function hi(t,e,n,r){const s=Ce(),i=xe(),o=20+t,l=s[11],a=s[o]=hr(l,e,be.lFrame.currentNamespace),u=i.firstCreatePass?function(t,e,n,r,s,i,o){const l=e.consts,a=Gr(e,t,2,s,me(l,i));return ls(e,n,a,me(l,o)),null!==a.attrs&&Ms(a,a.attrs,!1),null!==a.mergedAttrs&&Ms(a,a.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,a),a}(o,i,s,0,e,n,r):i.data[o];Ae(u,!0);const c=u.mergedAttrs;null!==c&&en(l,a,c);const h=u.classes;null!==h&&Or(l,a,h);const d=u.styles;null!==d&&Ar(l,a,d),64!=(64&u.flags)&&br(i,s,a,u),0===be.lFrame.elementDepthCount&&er(a,s),be.lFrame.elementDepthCount++,Qt(u)&&(es(i,s,u),function(t,e,n){if(Ut(e)){const r=e.directiveEnd;for(let s=e.directiveStart;s<r;s++){const e=t.data[s];e.contentQueries&&e.contentQueries(1,n[s],s)}}}(i,u,s)),null!==r&&ns(s,u)}function di(){let t=Ee();Oe()?be.lFrame.isParent=!1:(t=t.parent,Ae(t,!1));const e=t;be.lFrame.elementDepthCount--;const n=xe();n.firstCreatePass&&(We(n,t),Ut(t)&&n.queries.elementEnd(t)),null!=e.classesWithoutHost&&function(t){return 0!=(16&t.flags)}(e)&&ci(n,e,Ce(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function(t){return 0!=(32&t.flags)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e)&&ci(n,e,Ce(),e.stylesWithoutHost,!1)}function fi(t,e,n,r){hi(t,e,n,r),di()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function pi(t){return!!t&&"function"==typeof t.then}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function gi(t,e,n=!1,r){const s=Ce(),i=xe(),o=Ee();return function(t,e,n,r,s,i,o=!1,l){const a=Qt(r),u=t.firstCreatePass&&Ts(t),c=Os(e);let h=!0;if(3&r.type){const d=he(r,e),f=l?l(d):Et,p=f.target||d,g=c.length,_=l?t=>l(ue(t[r.index])).target:r.index;if(le(n)){let o=null;if(!l&&a&&(o=function(t,e,n,r){const s=t.cleanup;if(null!=s)for(let i=0;i<s.length-1;i+=2){const t=s[i];if(t===n&&s[i+1]===r){const t=e[7],n=s[i+2];return t.length>n?t[n]:null}"string"==typeof t&&(i+=2)}return null}(t,e,s,r.index)),null!==o)(o.__ngLastListenerFn__||o).__ngNextListenerFn__=i,o.__ngLastListenerFn__=i,h=!1;else{i=mi(r,e,i,!1);const t=n.listen(f.name||p,s,i);c.push(i,t),u&&u.push(s,_,g,g+1)}}else i=mi(r,e,i,!0),p.addEventListener(s,i,o),c.push(i),u&&u.push(s,_,g,o)}else i=mi(r,e,i,!1);const d=r.outputs;let f;if(h&&null!==d&&(f=d[s])){const t=f.length;if(t)for(let n=0;n<t;n+=2){const t=e[f[n]][f[n+1]].subscribe(i),o=c.length;c.push(i,t),u&&u.push(s,r.index,o,-(o+1))}}}(i,s,s[11],o,t,e,n,r),gi}function _i(t,e,n){try{return!1!==e(n)}catch(r){return Ss(t,r),!1}}function mi(t,e,n,r){return function s(i){if(i===Function)return n;const o=2&t.flags?fe(t.index,e):e;0==(32&e[2])&&Cs(o);let l=_i(e,n,i),a=s.__ngNextListenerFn__;for(;a;)l=_i(e,a,i)&&l,a=a.__ngNextListenerFn__;return r&&!1===l&&(i.preventDefault(),i.returnValue=!1),l
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}const yi=[];function vi(t,e,n,r,s){const i=t[n+1],o=null===e;let l=r?$r(i):qr(i),a=!1;for(;0!==l&&(!1===a||o);){const n=t[l+1];bi(t[l],e)&&(a=!0,t[l+1]=r?zr(n):Zr(n)),l=r?$r(n):qr(n)}a&&(t[n+1]=r?Zr(i):zr(i))}function bi(t,e){return null===t||null==e||(Array.isArray(t)?t[1]:t)===e||!(!Array.isArray(t)||"string"!=typeof e)&&Rn(t,e)>=0}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function wi(t,e,n){return xi(t,e,n,!1),wi}function Ci(t,e){return xi(t,e,null,!0),Ci}function xi(t,e,n,r){const s=Ce(),i=xe(),o=Ve(2);i.firstUpdatePass&&function(t,e,n,r){const s=t.data;if(null===s[n+1]){const i=s[qe()],o=function(t,e){return e>=t.expandoStartIndex}(t,n);(function(t,e){return 0!=(t.flags&(e?16:32))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */)(i,r)&&null===e&&!o&&(e=!1),e=function(t,e,n,r){const s=function(t){const e=be.lFrame.currentDirectiveIndex;return-1===e?null:t[e]}(t);let i=r?e.residualClasses:e.residualStyles;if(null===s)0===(r?e.classBindings:e.styleBindings)&&(n=ki(n=Ei(null,t,e,n,r),e.attrs,r),i=null);else{const o=e.directiveStylingLast;if(-1===o||t[o]!==s)if(n=Ei(s,t,e,n,r),null===i){let n=function(t,e,n){const r=n?e.classBindings:e.styleBindings;if(0!==qr(r))return t[$r(r)]}(t,e,r);void 0!==n&&Array.isArray(n)&&(n=Ei(null,t,e,n[1],r),n=ki(n,e.attrs,r),function(t,e,n,r){t[$r(n?e.classBindings:e.styleBindings)]=r}(t,e,r,n))}else i=function(t,e,n){let r;const s=e.directiveEnd;for(let i=1+e.directiveStylingLast;i<s;i++)r=ki(r,t[i].hostAttrs,n);return ki(r,e.attrs,n)}(t,e,r)}return void 0!==i&&(r?e.residualClasses=i:e.residualStyles=i),n}(s,i,e,r),function(t,e,n,r,s,i){let o=i?e.classBindings:e.styleBindings,l=$r(o),a=qr(o);t[r]=n;let u,c=!1;if(Array.isArray(n)){const t=n;u=t[1],(null===u||Rn(t,u)>0)&&(c=!0)}else u=n;if(s)if(0!==a){const e=$r(t[l+1]);t[r+1]=Br(e,l),0!==e&&(t[e+1]=Ur(t[e+1],r)),t[l+1]=131071&t[l+1]|r<<17}else t[r+1]=Br(l,0),0!==l&&(t[l+1]=Ur(t[l+1],r)),l=r;else t[r+1]=Br(a,0),0===l?l=r:t[a+1]=Ur(t[a+1],r),a=r;c&&(t[r+1]=Zr(t[r+1])),vi(t,u,r,!0),vi(t,u,r,!1),function(t,e,n,r,s){const i=s?t.residualClasses:t.residualStyles;null!=i&&"string"==typeof e&&Rn(i,e)>=0&&(n[r+1]=zr(n[r+1]))}(e,u,t,r,i),o=Br(l,a),i?e.classBindings=o:e.styleBindings=o}(s,i,e,n,o,r)}}(i,t,o,r),e!==Rr&&oi(s,o,e)&&function(t,e,n,r,s,i,o,l){if(!(3&e.type))return;const a=t.data,u=a[l+1];Oi(1==(1&u)?Ai(a,e,n,s,qr(u),o):void 0)||(Oi(i)||function(t){return 2==(2&t)}(u)&&(i=Ai(a,null,n,s,l,o)),function(t,e,n,r,s){const i=le(t);if(e)s?i?t.addClass(n,r):n.classList.add(r):i?t.removeClass(n,r):n.classList.remove(r);else{let e=-1===r.indexOf("-")?void 0:sr.DashCase;if(null==s)i?t.removeStyle(n,r,e):n.style.removeProperty(r);else{const o="string"==typeof s&&s.endsWith("!important");o&&(s=s.slice(0,-10),e|=sr.Important),i?t.setStyle(n,r,s,e):n.style.setProperty(r,s,o?"important":"")}}}(r,o,ce(qe(),n),s,i))}(i,i.data[qe()],s,s[11],t,s[o+1]=function(t,e){return null==t||("string"==typeof e?t+=e:"object"==typeof t&&(t=K(function(t){return t instanceof
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}?t.changingThisBreaksApplicationSecurity:t}(t)))),t}(e,n),r,o)}function Ei(t,e,n,r,s){let i=null;const o=n.directiveEnd;let l=n.directiveStylingLast;for(-1===l?l=n.directiveStart:l++;l<o&&(i=e[l],r=ki(r,i.hostAttrs,s),i!==t);)l++;return null!==t&&(n.directiveStylingLast=l),r}function ki(t,e,n){const r=n?1:2;let s=-1;if(null!==e)for(let i=0;i<e.length;i++){const o=e[i];"number"==typeof o?s=o:s===r&&(Array.isArray(t)||(t=void 0===t?[]:["",t]),jn(t,o,!!n||e[++i]))}return void 0===t?null:t}function Ai(t,e,n,r,s,i){const o=null===e;let l;for(;s>0;){const e=t[s],i=Array.isArray(e),a=i?e[1]:e,u=null===a;let c=n[s+1];c===Rr&&(c=u?yi:void 0);let h=u?Fn(c,r):a===r?c:void 0;if(i&&!Oi(h)&&(h=Fn(e,r)),Oi(h)&&(l=h,o))return l;const d=t[s+1];s=o?$r(d):qr(d)}if(null!==e){let t=i?e.residualClasses:e.residualStyles;null!=t&&(l=Fn(t,r))}return l}function Oi(t){return void 0!==t}function Ti(t,e=""){const n=Ce(),r=xe(),s=t+20,i=r.firstCreatePass?Gr(r,s,1,e,null):r.data[s],o=n[s]=function(t,e){return le(t)?t.createText(e):t.createTextNode(e)}(n[11],e);br(r,n,o,i),Ae(i,!1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Si(t){return Ii("",t,""),Si}function Ii(t,e,n){const r=Ce(),s=function(t,e,n,r){return oi(t,Ie(),n)?e+Kt(n)+r:Rr}(r,t,e,n);return s!==Rr&&Vs(r,qe(),s),Ii}function Vi(t,e,n,r,s){const i=Ce(),o=function(t,e,n,r,s,i){const o=function(t,e,n,r){const s=oi(t,e,n);return oi(t,e+1,r)||s}(t,be.lFrame.bindingIndex,n,s);return Ve(2),o?e+Kt(n)+r+Kt(s)+i:Rr}(i,t,e,n,r,s);return o!==Rr&&Vs(i,qe(),o),Vi}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Mi=void 0;var Di=["en",[["a","p"],["AM","PM"],Mi],[["AM","PM"],Mi,Mi],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Mi,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Mi,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Mi,"{1} 'at' {0}",Mi],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(t){let e=Math.floor(Math.abs(t)),n=t.toString().replace(/^[^.]*\.?/,"").length;return 1===e&&0===n?1:5}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Pi={};function Ni(t){return t in Pi||(Pi[t]=xt.ng&&xt.ng.common&&xt.ng.common.locales&&xt.ng.common.locales[t]),Pi[t]}var ji=function(t){return t[t.LocaleId=0]="LocaleId",t[t.DayPeriodsFormat=1]="DayPeriodsFormat",t[t.DayPeriodsStandalone=2]="DayPeriodsStandalone",t[t.DaysFormat=3]="DaysFormat",t[t.DaysStandalone=4]="DaysStandalone",t[t.MonthsFormat=5]="MonthsFormat",t[t.MonthsStandalone=6]="MonthsStandalone",t[t.Eras=7]="Eras",t[t.FirstDayOfWeek=8]="FirstDayOfWeek",t[t.WeekendRange=9]="WeekendRange",t[t.DateFormat=10]="DateFormat",t[t.TimeFormat=11]="TimeFormat",t[t.DateTimeFormat=12]="DateTimeFormat",t[t.NumberSymbols=13]="NumberSymbols",t[t.NumberFormats=14]="NumberFormats",t[t.CurrencyCode=15]="CurrencyCode",t[t.CurrencySymbol=16]="CurrencySymbol",t[t.CurrencyName=17]="CurrencyName",t[t.Currencies=18]="Currencies",t[t.Directionality=19]="Directionality",t[t.PluralCase=20]="PluralCase",t[t.ExtraData=21]="ExtraData",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Fi="en-US";function Ri(t){var e,n;n="Expected localeId to be defined",null==(e=t)&&function(t,e,n,r){throw new Error(`ASSERTION ERROR: ${t} [Expected=> null != ${e} <=Actual]`)}(n,e),"string"==typeof t&&(Fi=t.toLowerCase().replace(/_/g,"-"))}function Hi(t,e,n,r,s){if(t=et(t),Array.isArray(t))for(let i=0;i<t.length;i++)Hi(t[i],e,n,r,s);else{const i=xe(),o=Ce();let l=Qs(t)?t:et(t.provide),a=qs(t);const u=Ee(),c=1048575&u.providerIndexes,h=u.directiveStart,d=u.providerIndexes>>20;if(Qs(t)||!t.multi){const r=new tn(a,s,ai),f=$i(l,e,s?c:c+d,h);-1===f?(_n(dn(u,o),i,l),Li(i,t,e.length),e.push(l),u.directiveStart++,u.directiveEnd++,s&&(u.providerIndexes+=1048576),n.push(r),o.push(r)):(n[f]=r,o[f]=r)}else{const f=$i(l,e,c+d,h),p=$i(l,e,c,c+d),g=f>=0&&n[f],_=p>=0&&n[p];if(s&&!_||!s&&!g){_n(dn(u,o),i,l);const c=function(t,e,n,r,s){const i=new tn(t,n,ai);return i.multi=[],i.index=e,i.componentProviders=0,Bi(i,s,r&&!n),i}(s?qi:Zi,n.length,s,r,a);!s&&_&&(n[p].providerFactory=c),Li(i,t,e.length,0),e.push(l),u.directiveStart++,u.directiveEnd++,s&&(u.providerIndexes+=1048576),n.push(c),o.push(c)}else Li(i,t,f>-1?f:p,Bi(n[s?p:f],a,!s&&r));!s&&r&&_&&n[p].componentProviders++}}}function Li(t,e,n,r){const s=Qs(e);if(s||e.useClass){const i=(e.useClass||e).prototype.ngOnDestroy;if(i){const o=t.destroyHooks||(t.destroyHooks=[]);if(!s&&e.multi){const t=o.indexOf(n);-1===t?o.push(n,[r,i]):o[t+1].push(r,i)}else o.push(n,i)}}}function Bi(t,e,n){return n&&t.componentProviders++,t.multi.push(e)-1}function $i(t,e,n,r){for(let s=n;s<r;s++)if(e[s]===t)return s;return-1}function Zi(t,e,n,r){return Ui(this.multi,[])}function qi(t,e,n,r){const s=this.multi;let i;if(this.providerFactory){const t=this.providerFactory.componentProviders,e=En(n,n[1],this.providerFactory.index,r);i=e.slice(0,t),Ui(s,i);for(let n=t;n<e.length;n++)i.push(e[n])}else i=[],Ui(s,i);return i}function Ui(t,e){for(let n=0;n<t.length;n++)e.push((0,t[n])());return e}function zi(t,e=[]){return n=>{n.providersResolver=(n,r)=>
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n){const r=xe();if(r.firstCreatePass){const s=Wt(t);Hi(n,r.data,r.blueprint,s,!0),Hi(e,r.data,r.blueprint,s,!1)}}(n,r?r(t):t,e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Qi{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Wi{resolveComponentFactory(t){throw function(t){const e=Error(`No component factory found for ${K(t)}. Did you add it to @NgModule.entryComponents?`);return e.ngComponent=t,e}(t)}}let Gi=(()=>{class t{}return t.NULL=new Wi,t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ji(...t){}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ki(t,e){return new Xi(he(t,e))}const Yi=function(){return Ki(Ee(),Ce())};let Xi=(()=>{class t{constructor(t){this.nativeElement=t}}return t.__NG_ELEMENT_ID__=Yi,t})();function to(t){return t instanceof Xi?t.nativeElement:t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class eo{}let no=(()=>{class t{}return t.__NG_ELEMENT_ID__=()=>ro(),t})();const ro=function(){const t=Ce(),e=fe(Ee().index,t);return function(t){return t[11]}(Zt(e)?e:t)};let so=(()=>{class t{}return t.\u0275prov=rt({token:t,providedIn:"root",factory:()=>null}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class io{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const oo=new io("11.1.2");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class lo{constructor(){}supports(t){return si(t)}create(t){return new uo(t)}}const ao=(t,e)=>e;class uo{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||ao}forEachItem(t){let e;for(e=this._itHead;null!==e;e=e._next)t(e)}forEachOperation(t){let e=this._itHead,n=this._removalsHead,r=0,s=null;for(;e||n;){const i=!n||e&&e.currentIndex<po(n,r,s)?e:n,o=po(i,r,s),l=i.currentIndex;if(i===n)r--,n=n._nextRemoved;else if(e=e._next,null==i.previousIndex)r++;else{s||(s=[]);const t=o-r,e=l-r;if(t!=e){for(let n=0;n<t;n++){const r=n<s.length?s[n]:s[n]=0,i=r+n;e<=i&&i<t&&(s[n]=r+1)}s[i.previousIndex]=e-t}}o!==l&&t(i,o,l)}}forEachPreviousItem(t){let e;for(e=this._previousItHead;null!==e;e=e._nextPrevious)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachMovedItem(t){let e;for(e=this._movesHead;null!==e;e=e._nextMoved)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}forEachIdentityChange(t){let e;for(e=this._identityChangesHead;null!==e;e=e._nextIdentityChange)t(e)}diff(t){if(null==t&&(t=[]),!si(t))throw new Error(`Error trying to diff '${K(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e,n,r,s=this._itHead,i=!1;if(Array.isArray(t)){this.length=t.length;for(let e=0;e<this.length;e++)n=t[e],r=this._trackByFn(e,n),null!==s&&Object.is(s.trackById,r)?(i&&(s=this._verifyReinsertion(s,n,r,e)),Object.is(s.item,n)||this._addIdentityChange(s,n)):(s=this._mismatch(s,n,r,e),i=!0),s=s._next}else e=0,function(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const n=t[ri()]();let r;for(;!(r=n.next()).done;)e(r.value)}}(t,t=>{r=this._trackByFn(e,t),null!==s&&Object.is(s.trackById,r)?(i&&(s=this._verifyReinsertion(s,t,r,e)),Object.is(s.item,t)||this._addIdentityChange(s,t)):(s=this._mismatch(s,t,r,e),i=!0),s=s._next,e++}),this.length=e;return this._truncate(s),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,e,n,r){let s;return null===t?s=this._itTail:(s=t._prev,this._remove(t)),null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._moveAfter(t,s,r)):null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._reinsertAfter(t,s,r)):t=this._addAfter(new co(e,n),s,r),t}_verifyReinsertion(t,e,n,r){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==s?t=this._reinsertAfter(s,t._prev,r):t.currentIndex!=r&&(t.currentIndex=r,this._addToMoves(t,r)),t}_truncate(t){for(;null!==t;){const e=t._next;this._addToRemovals(this._unlink(t)),t=e}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,e,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const r=t._prevRemoved,s=t._nextRemoved;return null===r?this._removalsHead=s:r._nextRemoved=s,null===s?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(t,e,n),this._addToMoves(t,n),t}_moveAfter(t,e,n){return this._unlink(t),this._insertAfter(t,e,n),this._addToMoves(t,n),t}_addAfter(t,e,n){return this._insertAfter(t,e,n),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,e,n){const r=null===e?this._itHead:e._next;return t._next=r,t._prev=e,null===r?this._itTail=t:r._prev=t,null===e?this._itHead=t:e._next=t,null===this._linkedRecords&&(this._linkedRecords=new fo),this._linkedRecords.put(t),t.currentIndex=n,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const e=t._prev,n=t._next;return null===e?this._itHead=n:e._next=n,null===n?this._itTail=e:n._prev=e,t}_addToMoves(t,e){return t.previousIndex===e||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new fo),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,e){return t.item=e,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class co{constructor(t,e){this.item=t,this.trackById=e,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class ho{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,e){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===e||e<=n.currentIndex)&&Object.is(n.trackById,t))return n;return null}remove(t){const e=t._prevDup,n=t._nextDup;return null===e?this._head=n:e._nextDup=n,null===n?this._tail=e:n._prevDup=e,null===this._head}}class fo{constructor(){this.map=new Map}put(t){const e=t.trackById;let n=this.map.get(e);n||(n=new ho,this.map.set(e,n)),n.add(t)}get(t,e){const n=this.map.get(t);return n?n.get(t,e):null}remove(t){const e=t.trackById;return this.map.get(e).remove(t)&&this.map.delete(e),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function po(t,e,n){const r=t.previousIndex;if(null===r)return r;let s=0;return n&&r<n.length&&(s=n[r]),r+e+s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class go{constructor(){}supports(t){return t instanceof Map||ii(t)}create(){return new _o}}class _o{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let e;for(e=this._mapHead;null!==e;e=e._next)t(e)}forEachPreviousItem(t){let e;for(e=this._previousMapHead;null!==e;e=e._nextPrevious)t(e)}forEachChangedItem(t){let e;for(e=this._changesHead;null!==e;e=e._nextChanged)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}diff(t){if(t){if(!(t instanceof Map||ii(t)))throw new Error(`Error trying to diff '${K(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(t,(t,n)=>{if(e&&e.key===n)this._maybeAddToChanges(e,t),this._appendAfter=e,e=e._next;else{const r=this._getOrCreateRecordForKey(n,t);e=this._insertBeforeOrAppend(e,r)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let t=e;null!==t;t=t._nextRemoved)t===this._mapHead&&(this._mapHead=null),this._records.delete(t.key),t._nextRemoved=t._next,t.previousValue=t.currentValue,t.currentValue=null,t._prev=null,t._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,e){if(t){const n=t._prev;return e._next=t,e._prev=n,t._prev=e,n&&(n._next=e),t===this._mapHead&&(this._mapHead=e),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(t,e){if(this._records.has(t)){const n=this._records.get(t);this._maybeAddToChanges(n,e);const r=n._prev,s=n._next;return r&&(r._next=s),s&&(s._prev=r),n._next=null,n._prev=null,n}const n=new mo(t);return this._records.set(t,n),n.currentValue=e,this._addToAdditions(n),n}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,e){Object.is(e,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=e,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,e){t instanceof Map?t.forEach(e):Object.keys(t).forEach(n=>e(t[n],n))}}class mo{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}function yo(){return new vo([new lo])}let vo=(()=>{class t{constructor(t){this.factories=t}static create(e,n){if(null!=n){const t=n.factories.slice();e=e.concat(t)}return new t(e)}static extend(e){return{provide:t,useFactory:n=>t.create(e,n||yo()),deps:[[t,new Jn,new Gn]]}}find(t){const e=this.factories.find(e=>e.supports(t));if(null!=e)return e;throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}return t.\u0275prov=rt({token:t,providedIn:"root",factory:yo}),t})();function bo(){return new wo([new go])}let wo=(()=>{class t{constructor(t){this.factories=t}static create(e,n){if(n){const t=n.factories.slice();e=e.concat(t)}return new t(e)}static extend(e){return{provide:t,useFactory:n=>t.create(e,n||bo()),deps:[[t,new Jn,new Gn]]}}find(t){const e=this.factories.find(e=>e.supports(t));if(e)return e;throw new Error(`Cannot find a differ supporting object '${t}'`)}}return t.\u0275prov=rt({token:t,providedIn:"root",factory:bo}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Co(t,e,n,r,s=!1){for(;null!==n;){const i=e[n.index];if(null!==i&&r.push(ue(i)),qt(i))for(let t=10;t<i.length;t++){const e=i[t],n=e[1].firstChild;null!==n&&Co(e[1],e,n,r)}const o=n.type;if(8&o)Co(t,e,n.child,r);else if(32&o){const t=ir(n,e);let s;for(;s=t();)r.push(s)}else if(16&o){const t=e[16],s=t[6].projection[n.projection];if(Array.isArray(s))r.push(...s);else{const e=or(t);Co(e[1],e,s,r,!0)}}n=s?n.projectionNext:n.next}return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class xo{constructor(t,e){this._lView=t,this._cdRefInjectingView=e,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,e=t[1];return Co(e,t,e.firstChild,[])}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(qt(t)){const e=t[8],n=e?e.indexOf(this):-1;n>-1&&(fr(t,n),Nn(e,n))}this._attachedToViewContainer=!1}pr(this._lView[1],this._lView)}onDestroy(t){is(this._lView[1],this._lView,null,t)}markForCheck(){Cs(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){xs(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(t,e,n){Se(!0);try{xs(t,e,n)}finally{Se(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var t;this._appRef=null,Er(this._lView[1],t=this._lView,t[11],2,null,null)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class Eo extends xo{constructor(t){super(t),this._view=t}detectChanges(){Es(this._view)}checkNoChanges(){!function(t){Se(!0);try{Es(t)}finally{Se(!1)}}(this._view)}get context(){return null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ko=[new go],Ao=new vo([new lo]),Oo=new wo(ko),To=function(){return Mo(Ee(),Ce())};let So=(()=>{class t{}return t.__NG_ELEMENT_ID__=To,t})();const Io=So,Vo=class extends Io{constructor(t,e,n){super(),this._declarationLView=t,this._declarationTContainer=e,this.elementRef=n}createEmbeddedView(t){const e=this._declarationTContainer.tViews,n=Wr(this._declarationLView,e,t,16,null,e.declTNode,null,null,null,null);n[17]=this._declarationLView[this._declarationTContainer.index];const r=this._declarationLView[19];return null!==r&&(n[19]=r.createEmbeddedView(e)),Kr(e,n,t),new xo(n)}};function Mo(t,e){return 4&t.type?new Vo(e,t,Ki(t,e)):null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Do{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Po=function(){return Lo(Ee(),Ce())};let No=(()=>{class t{}return t.__NG_ELEMENT_ID__=Po,t})();const jo=No,Fo=class extends jo{constructor(t,e,n){super(),this._lContainer=t,this._hostTNode=e,this._hostLView=n}get element(){return Ki(this._hostTNode,this._hostLView)}get injector(){return new On(this._hostTNode,this._hostLView)}get parentInjector(){const t=gn(this._hostTNode,this._hostLView);if(on(t)){const e=an(t,this._hostLView),n=ln(t);return new On(e[1].data[n+8],e)}return new On(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const e=Ro(this._lContainer);return null!==e&&e[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,e,n){const r=t.createEmbeddedView(e||{});return this.insert(r,n),r}createComponent(t,e,n,r,s){const i=n||this.parentInjector;if(!s&&null==t.ngModule&&i){const t=i.get(Do,null);t&&(s=t)}const o=t.create(i,r,void 0,s);return this.insert(o.hostView,e),o}insert(t,e){const n=t._lView,r=n[1];if(qt(n[3])){const e=this.indexOf(t);if(-1!==e)this.detach(e);else{const e=n[3],r=new Fo(e,e[6],e[3]);r.detach(r.indexOf(t))}}const s=this._adjustIndex(e),i=this._lContainer;!function(t,e,n,r){const s=10+r,i=n.length;r>0&&(n[s-1][4]=e),r<i-10?(e[4]=n[s],Pn(n,10+r,e)):(n.push(e),e[4]=null),e[3]=n;const o=e[17];null!==o&&n!==o&&function(t,e){const n=t[9];e[16]!==e[3][3][16]&&(t[2]=!0),null===n?t[9]=[e]:n.push(e)}(o,e);const l=e[19];null!==l&&l.insertView(t),e[2]|=128}(r,n,i,s);const o=Cr(s,i),l=n[11],a=vr(l,i[7]);return null!==a&&function(t,e,n,r,s,i){r[0]=s,r[6]=e,Er(t,r,n,1,s,i)}(r,i[6],l,n,a,o),t.attachToViewContainerRef(),Pn(Ho(i),s,t),t}move(t,e){return this.insert(t,e)}indexOf(t){const e=Ro(this._lContainer);return null!==e?e.indexOf(t):-1}remove(t){const e=this._adjustIndex(t,-1),n=fr(this._lContainer,e);n&&(Nn(Ho(this._lContainer),e),pr(n[1],n))}detach(t){const e=this._adjustIndex(t,-1),n=fr(this._lContainer,e);return n&&null!=Nn(Ho(this._lContainer),e)?new xo(n):null}_adjustIndex(t,e=0){return null==t?this.length+e:t}};function Ro(t){return t[8]}function Ho(t){return t[8]||(t[8]=[])}function Lo(t,e){let n;const r=e[t.index];if(qt(r))n=r;else{let s;if(8&t.type)s=ue(r);else{const n=e[11];s=n.createComment("");const r=he(t,e);_r(n,vr(n,r),s,function(t,e){return le(t)?t.nextSibling(e):e.nextSibling}(n,r),!1)}e[t.index]=n=ms(r,e,s,t),ws(e,n)}return new Fo(n,t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Bo={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class $o extends Gi{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const e=Bt(t);return new Uo(e,this.ngModule)}}function Zo(t){const e=[];for(let n in t)t.hasOwnProperty(n)&&e.push({propName:t[n],templateName:n});return e}const qo=new Vn("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>nr});class Uo extends Qi{constructor(t,e){super(),this.componentDef=t,this.ngModule=e,this.componentType=t.type,this.selector=t.selectors.map(Fr).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!e}get inputs(){return Zo(this.componentDef.inputs)}get outputs(){return Zo(this.componentDef.outputs)}create(t,e,n,r){const s=(r=r||this.ngModule)?function(t,e){return{get:(n,r,s)=>{const i=t.get(n,Bo,s);return i!==Bo||r===Bo?i:e.get(n,r,s)}}}(t,r.injector):t,i=s.get(eo,ae),o=s.get(so,null),l=i.createRenderer(null,this.componentDef),a=this.componentDef.selectors[0][0]||"div",u=n?function(t,e,n){if(le(t))return t.selectRootElement(e,n===yt.ShadowDom);let r="string"==typeof e?t.querySelector(e):e;return r.textContent="",r}(l,n,this.componentDef.encapsulation):hr(i.createRenderer(null,this.componentDef),a,function(t){const e=t.toLowerCase();return"svg"===e?"http://www.w3.org/2000/svg":"math"===e?"http://www.w3.org/1998/MathML/":null}(a)),c=this.componentDef.onPush?576:528,h={components:[],scheduler:nr,clean:As,playerHandler:null,flags:0},d=ss(0,null,null,1,0,null,null,null,null,null),f=Wr(null,d,h,c,null,null,i,l,o,s);let p,g;Re(f);try{const t=function(t,e,n,r,s,i){const o=n[1];n[20]=t;const l=Gr(o,20,2,"#host",null),a=l.mergedAttrs=e.hostAttrs;null!==a&&(Ms(l,a,!0),null!==t&&(en(s,t,a),null!==l.classes&&Or(s,t,l.classes),null!==l.styles&&Ar(s,t,l.styles)));const u=r.createRenderer(t,e),c=Wr(n,rs(e),null,e.onPush?64:16,n[20],l,r,u,null,null);return o.firstCreatePass&&(_n(dn(l,n),o,e.type),cs(o,l),ds(l,n.length,1)),ws(n,c),n[20]=c}(u,this.componentDef,f,i,l);if(u)if(n)en(l,u,["ng-version",oo.full]);else{const{attrs:t,classes:e}=function(t){const e=[],n=[];let r=1,s=2;for(;r<t.length;){let i=t[r];if("string"==typeof i)2===s?""!==i&&e.push(i,t[++r]):8===s&&n.push(i);else{if(!Dr(s))break;s=i}r++}return{attrs:e,classes:n}}(this.componentDef.selectors[0]);t&&en(l,u,t),e&&e.length>0&&Or(l,u,e.join(" "))}if(g=de(d,20),void 0!==e){const t=g.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const r=e[n];t.push(null!=r?Array.from(r):null)}}p=function(t,e,n,r,s){const i=n[1],o=function(t,e,n){const r=Ee();t.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),fs(t,r,e,Jr(t,e,1,null),n));const s=En(e,t,r.directiveStart,r);er(s,e);const i=he(r,e);return i&&er(i,e),s}(i,n,e);if(r.components.push(o),t[8]=o,s&&s.forEach(t=>t(o,e)),e.contentQueries){const t=Ee();e.contentQueries(1,o,t.directiveStart)}const l=Ee();return!i.firstCreatePass||null===e.hostBindings&&null===e.hostAttrs||(Ue(l.index),as(n[1],l,0,l.directiveStart,l.directiveEnd,e),us(e,o)),o}(t,this.componentDef,f,h,[Js]),Kr(d,f,null)}finally{Ze()}return new zo(this.componentType,p,Ki(g,f),f,g)}}class zo extends class{}{constructor(t,e,n,r,s){super(),this.location=n,this._rootLView=r,this._tNode=s,this.instance=e,this.hostView=this.changeDetectorRef=new Eo(r),this.componentType=t}get injector(){return new On(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Qo=new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Wo extends Do{constructor(t,e){super(),this._parent=e,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new $o(this);const n=$t(t),r=t[It]||null;r&&Ri(r),this._bootstrapComponents=rr(n.bootstrap),this._r3Injector=Bs(t,e,[{provide:Do,useValue:this},{provide:Gi,useValue:this.componentFactoryResolver}],K(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,e=Gs.THROW_IF_NOT_FOUND,n=dt.Default){return t===Gs||t===Do||t===Ds?this:this._r3Injector.get(t,e,n)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class Go extends class{}{constructor(t){super(),this.moduleType=t,null!==$t(t)&&function(t){const e=new Set;!function t(n){const r=$t(n,!0),s=r.id;null!==s&&(function(t,e,n){if(e&&e!==n)throw new Error(`Duplicate module registered for ${t} - ${K(e)} vs ${K(e.name)}`)}(s,Qo.get(s),n),Qo.set(s,n));const i=rr(r.imports);for(const o of i)e.has(o)||(e.add(o),t(o))}(t)}(t)}create(t){return new Wo(this.moduleType,t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Jo=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class extends x{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,e,n){let r,s=t=>null,i=()=>null;t&&"object"==typeof t?(r=this.__isAsync?e=>{setTimeout(()=>t.next(e))}:e=>{t.next(e)},t.error&&(s=this.__isAsync?e=>{setTimeout(()=>t.error(e))}:e=>{t.error(e)}),t.complete&&(i=this.__isAsync?()=>{setTimeout(()=>t.complete())}:()=>{t.complete()})):(r=this.__isAsync?e=>{setTimeout(()=>t(e))}:e=>{t(e)},e&&(s=this.__isAsync?t=>{setTimeout(()=>e(t))}:t=>{e(t)}),n&&(i=this.__isAsync?()=>{setTimeout(()=>n())}:()=>{n()}));const o=super.subscribe(r,s,i);return t instanceof h&&t.add(o),o}};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ko(){return this._results[ri()]()}class Yo{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const e=ri(),n=Yo.prototype;n[e]||(n[e]=Ko)}get changes(){return this._changes||(this._changes=new Jo)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,e){return this._results.reduce(t,e)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,e){this.dirty=!1;const n=Mn(t);(this._changesDetected=!function(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++){let s=t[r],i=e[r];if(n&&(s=n(s),i=n(i)),i!==s)return!1}return!0}(this._results,n,e))&&(this._results=n,this.length=n.length,this.last=n[this.length-1],this.first=n[0])}notifyOnChanges(){!this._changes||!this._changesDetected&&this._emitDistinctChangesOnly||this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}class Xo{constructor(t){this.queryList=t,this.matches=null}clone(){return new Xo(this.queryList)}setDirty(){this.queryList.setDirty()}}class tl{constructor(t=[]){this.queries=t}createEmbeddedView(t){const e=t.queries;if(null!==e){const n=null!==t.contentQueries?t.contentQueries[0]:e.length,r=[];for(let t=0;t<n;t++){const n=e.getByIndex(t);r.push(this.queries[n.indexInDeclarationView].clone())}return new tl(r)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let e=0;e<this.queries.length;e++)null!==ul(t,e).matches&&this.queries[e].setDirty()}}class el{constructor(t,e,n=null){this.predicate=t,this.flags=e,this.read=n}}class nl{constructor(t=[]){this.queries=t}elementStart(t,e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(t,e)}elementEnd(t){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(t)}embeddedTView(t){let e=null;for(let n=0;n<this.length;n++){const r=null!==e?e.length:0,s=this.getByIndex(n).embeddedTView(t,r);s&&(s.indexInDeclarationView=n,null!==e?e.push(s):e=[s])}return null!==e?new nl(e):null}template(t,e){for(let n=0;n<this.queries.length;n++)this.queries[n].template(t,e)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class rl{constructor(t,e=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=e}elementStart(t,e){this.isApplyingToNode(e)&&this.matchTNode(t,e)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,e){this.elementStart(t,e)}embeddedTView(t,e){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,e),new rl(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const e=this._declarationNodeIndex;let n=t.parent;for(;null!==n&&8&n.type&&n.index!==e;)n=n.parent;return e===(null!==n?n.index:-1)}return this._appliesToNextNode}matchTNode(t,e){const n=this.metadata.predicate;if(Array.isArray(n))for(let r=0;r<n.length;r++){const s=n[r];this.matchTNodeWithReadOption(t,e,sl(e,s)),this.matchTNodeWithReadOption(t,e,xn(e,t,s,!1,!1))}else n===So?4&e.type&&this.matchTNodeWithReadOption(t,e,-1):this.matchTNodeWithReadOption(t,e,xn(e,t,n,!1,!1))}matchTNodeWithReadOption(t,e,n){if(null!==n){const r=this.metadata.read;if(null!==r)if(r===Xi||r===No||r===So&&4&e.type)this.addMatch(e.index,-2);else{const n=xn(e,t,r,!1,!1);null!==n&&this.addMatch(e.index,n)}else this.addMatch(e.index,n)}}addMatch(t,e){null===this.matches?this.matches=[t,e]:this.matches.push(t,e)}}function sl(t,e){const n=t.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===e)return n[r+1];return null}function il(t,e,n,r){return-1===n?function(t,e){return 11&t.type?Ki(t,e):4&t.type?Mo(t,e):null}(e,t):-2===n?function(t,e,n){return n===Xi?Ki(e,t):n===So?Mo(e,t):n===No?Lo(e,t):void 0}(t,e,r):En(t,t[1],n,e)}function ol(t,e,n,r){const s=e[19].queries[r];if(null===s.matches){const r=t.data,i=n.matches,o=[];for(let t=0;t<i.length;t+=2){const s=i[t];o.push(s<0?null:il(e,r[s],i[t+1],n.metadata.read))}s.matches=o}return s.matches}function ll(t,e,n,r){const s=t.queries.getByIndex(n),i=s.matches;if(null!==i){const o=ol(t,e,s,n);for(let t=0;t<i.length;t+=2){const n=i[t];if(n>0)r.push(o[t/2]);else{const s=i[t+1],o=e[-n];for(let t=10;t<o.length;t++){const e=o[t];e[17]===e[3]&&ll(e[1],e,s,r)}if(null!==o[9]){const t=o[9];for(let e=0;e<t.length;e++){const n=t[e];ll(n[1],n,s,r)}}}}}return r}function al(t){const e=Ce(),n=xe(),r=Pe();Ne(r+1);const s=ul(n,r);if(t.dirty&&ge(e)===(2==(2&s.metadata.flags))){if(null===s.matches)t.reset([]);else{const i=s.crossesNgTemplate?ll(n,e,r,[]):ol(n,e,s,r);t.reset(i,to),t.notifyOnChanges()}return!0}return!1}function ul(t,e){return t.queries.getByIndex(e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const cl=new Vn("Application Initializer");let hl=(()=>{class t{constructor(t){this.appInits=t,this.resolve=Ji,this.reject=Ji,this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}runInitializers(){if(this.initialized)return;const t=[],e=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let n=0;n<this.appInits.length;n++){const e=this.appInits[n]();pi(e)&&t.push(e)}Promise.all(t).then(()=>{e()}).catch(t=>{this.reject(t)}),0===t.length&&e(),this.initialized=!0}}return t.\u0275fac=function(e){return new(e||t)(Un(cl,8))},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const dl=new Vn("AppId"),fl={provide:dl,useFactory:function(){return`${pl()}${pl()}${pl()}`},deps:[]};function pl(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const gl=new Vn("Platform Initializer"),_l=new Vn("Platform ID"),ml=new Vn("appBootstrapListener");let yl=(()=>{class t{log(t){console.log(t)}warn(t){console.warn(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const vl=new Vn("LocaleId"),bl=new Vn("DefaultCurrencyCode");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class wl{constructor(t,e){this.ngModuleFactory=t,this.componentFactories=e}}const Cl=function(t){return new Go(t)},xl=Cl,El=function(t){return Promise.resolve(Cl(t))},kl=function(t){const e=Cl(t),n=rr($t(t).declarations).reduce((t,e)=>{const n=Bt(e);return n&&t.push(new Uo(n)),t},[]);return new wl(e,n)},Al=kl,Ol=function(t){return Promise.resolve(kl(t))};let Tl=(()=>{class t{constructor(){this.compileModuleSync=xl,this.compileModuleAsync=El,this.compileModuleAndAllComponentsSync=Al,this.compileModuleAndAllComponentsAsync=Ol}clearCache(){}clearCacheFor(t){}getModuleId(t){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})();const Sl=(()=>Promise.resolve(0))();function Il(t){"undefined"==typeof Zone?Sl.then(()=>{t&&t.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Vl{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:e=!1,shouldCoalesceRunChangeDetection:n=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Jo(!1),this.onMicrotaskEmpty=new Jo(!1),this.onStable=new Jo(!1),this.onError=new Jo(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched(),this._nesting=0,this._outer=this._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(this._inner=this._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(this._inner=this._inner.fork(Zone.longStackTraceZoneSpec)),this.shouldCoalesceEventChangeDetection=!n&&e,this.shouldCoalesceRunChangeDetection=n,this.lastRequestAnimationFrameId=-1,this.nativeRequestAnimationFrame=function(){let t=xt.requestAnimationFrame,e=xt.cancelAnimationFrame;if("undefined"!=typeof Zone&&t&&e){const n=t[Zone.__symbol__("OriginalDelegate")];n&&(t=n);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function(t){const e=()=>{!function(t){-1===t.lastRequestAnimationFrameId&&(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(xt,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,Pl(t),Dl(t)},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),Pl(t))}(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,s,i,o,l)=>{try{return Nl(t),n.invokeTask(s,i,o,l)}finally{(t.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||t.shouldCoalesceRunChangeDetection)&&e(),jl(t)}},onInvoke:(n,r,s,i,o,l,a)=>{try{return Nl(t),n.invoke(s,i,o,l,a)}finally{t.shouldCoalesceRunChangeDetection&&e(),jl(t)}},onHasTask:(e,n,r,s)=>{e.hasTask(r,s),n===r&&("microTask"==s.change?(t._hasPendingMicrotasks=s.microTask,Pl(t),Dl(t)):"macroTask"==s.change&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(e,n,r,s)=>(e.handleError(r,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}(this)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Vl.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(Vl.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,e,n){return this._inner.run(t,e,n)}runTask(t,e,n,r){const s=this._inner,i=s.scheduleEventTask("NgZoneEvent: "+r,t,Ml,Ji,Ji);try{return s.runTask(i,e,n)}finally{s.cancelTask(i)}}runGuarded(t,e,n){return this._inner.runGuarded(t,e,n)}runOutsideAngular(t){return this._outer.run(t)}}const Ml={};function Dl(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function Pl(t){t.hasPendingMicrotasks=!!(t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&-1!==t.lastRequestAnimationFrameId)}function Nl(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function jl(t){t._nesting--,Dl(t)}class Fl{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Jo,this.onMicrotaskEmpty=new Jo,this.onStable=new Jo,this.onError=new Jo}run(t,e,n){return t.apply(e,n)}runGuarded(t,e,n){return t.apply(e,n)}runOutsideAngular(t){return t()}runTask(t,e,n,r){return t.apply(e,n)}}let Rl=(()=>{class t{constructor(t){this._ngZone=t,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),t.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Vl.assertNotInAngularZone(),Il(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Il(()=>{for(;0!==this._callbacks.length;){let t=this._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb(this._didWork)}this._didWork=!1});else{let t=this.getPendingTasks();this._callbacks=this._callbacks.filter(e=>!e.updateCb||!e.updateCb(t)||(clearTimeout(e.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(t=>({source:t.source,creationLocation:t.creationLocation,data:t.data})):[]}addCallback(t,e,n){let r=-1;e&&e>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(t=>t.timeoutId!==r),t(this._didWork,this.getPendingTasks())},e)),this._callbacks.push({doneCb:t,timeoutId:r,updateCb:n})}whenStable(t,e,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(t,e,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(t,e,n){return[]}}return t.\u0275fac=function(e){return new(e||t)(Un(Vl))},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})(),Hl=(()=>{class t{constructor(){this._applications=new Map,$l.addToWindow(this)}registerApplication(t,e){this._applications.set(t,e)}unregisterApplication(t){this._applications.delete(t)}unregisterAllApplications(){this._applications.clear()}getTestability(t){return this._applications.get(t)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(t,e=!0){return $l.findTestabilityInTree(this,t,e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})();class Ll{addToWindow(t){}findTestabilityInTree(t,e,n){return null}}let Bl,$l=new Ll,Zl=!0,ql=!1;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ul(){return ql=!0,Zl}const zl=new Vn("AllowMultipleToken");function Ql(t,e,n=[]){const r=`Platform: ${e}`,s=new Vn(r);return(e=[])=>{let i=Wl();if(!i||i.injector.get(zl,!1))if(t)t(n.concat(e).concat({provide:s,useValue:!0}));else{const t=n.concat(e).concat({provide:s,useValue:!0},{provide:Ns,useValue:"platform"});!function(t){if(Bl&&!Bl.destroyed&&!Bl.injector.get(zl,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");Bl=t.get(Gl);const e=t.get(gl,null);e&&e.forEach(t=>t())}(Gs.create({providers:t,name:r}))}return function(t){const e=Wl();if(!e)throw new Error("No platform exists!");if(!e.injector.get(t,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return e}(s)}}function Wl(){return Bl&&!Bl.destroyed?Bl:null}let Gl=(()=>{class t{constructor(t){this._injector=t,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(t,e){const n=function(t,e){let n;return n="noop"===t?new Fl:("zone.js"===t?void 0:t)||new Vl({enableLongStackTrace:Ul(),shouldCoalesceEventChangeDetection:!!(null==e?void 0:e.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==e?void 0:e.ngZoneRunCoalescing)}),n}(e?e.ngZone:void 0,{ngZoneEventCoalescing:e&&e.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:e&&e.ngZoneRunCoalescing||!1}),r=[{provide:Vl,useValue:n}];return n.run(()=>{const e=Gs.create({providers:r,parent:this.injector,name:t.moduleType.name}),s=t.create(e),i=s.injector.get(tr,null);if(!i)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return n.runOutsideAngular(()=>{const t=n.onError.subscribe({next:t=>{i.handleError(t)}});s.onDestroy(()=>{Yl(this._modules,s),t.unsubscribe()})}),function(t,e,n){try{const r=n();return pi(r)?r.catch(n=>{throw e.runOutsideAngular(()=>t.handleError(n)),n}):r}catch(r){throw e.runOutsideAngular(()=>t.handleError(r)),r}}(i,n,()=>{const t=s.injector.get(hl);return t.runInitializers(),t.donePromise.then(()=>(Ri(s.injector.get(vl,"en-US")||"en-US"),this._moduleDoBootstrap(s),s))})})}bootstrapModule(t,e=[]){const n=Jl({},e);return function(t,e,n){const r=new Go(n);return Promise.resolve(r)}(0,0,t).then(t=>this.bootstrapModuleFactory(t,n))}_moduleDoBootstrap(t){const e=t.injector.get(Kl);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(t=>e.bootstrap(t));else{if(!t.instance.ngDoBootstrap)throw new Error(`The module ${K(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);t.instance.ngDoBootstrap(e)}this._modules.push(t)}onDestroy(t){this._destroyListeners.push(t)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(t=>t.destroy()),this._destroyListeners.forEach(t=>t()),this._destroyed=!0}get destroyed(){return this._destroyed}}return t.\u0275fac=function(e){return new(e||t)(Un(Gs))},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})();function Jl(t,e){return Array.isArray(e)?e.reduce(Jl,t):Object.assign(Object.assign({},t),e)}let Kl=(()=>{class t{constructor(t,e,n,r,s,i){this._zone=t,this._console=e,this._injector=n,this._exceptionHandler=r,this._componentFactoryResolver=s,this._initStatus=i,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const o=new y(t=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{t.next(this._stable),t.complete()})}),l=new y(t=>{let e;this._zone.runOutsideAngular(()=>{e=this._zone.onStable.subscribe(()=>{Vl.assertNotInAngularZone(),Il(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,t.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{Vl.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{t.next(!1)}))});return()=>{e.unsubscribe(),n.unsubscribe()}});this.isStable=B(o,l.pipe(t=>{return $()((e=W,function(t){let n;n="function"==typeof e?e:function(){return e};const r=Object.create(t,z);return r.source=t,r.subjectFactory=n,r})(t));var e}))}bootstrap(t,e){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=t instanceof Qi?t:this._componentFactoryResolver.resolveComponentFactory(t),this.componentTypes.push(n.componentType);const r=n.isBoundToModule?void 0:this._injector.get(Do),s=n.create(Gs.NULL,[],e||n.selector,r),i=s.location.nativeElement,o=s.injector.get(Rl,null),l=o&&s.injector.get(Hl);return o&&l&&l.registerApplication(i,o),s.onDestroy(()=>{this.detachView(s.hostView),Yl(this.components,s),l&&l.unregisterApplication(i)}),this._loadComponent(s),Ul()&&this._console.log("Angular is running in development mode. Call enableProdMode() to enable production mode."),s}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let t of this._views)t.detectChanges()}catch(t){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(t))}finally{this._runningTick=!1}}attachView(t){const e=t;this._views.push(e),e.attachToAppRef(this)}detachView(t){const e=t;Yl(this._views,e),e.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(ml,[]).concat(this._bootstrapListeners).forEach(e=>e(t))}ngOnDestroy(){this._views.slice().forEach(t=>t.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return t.\u0275fac=function(e){return new(e||t)(Un(Vl),Un(yl),Un(Gs),Un(tr),Un(Gi),Un(hl))},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})();function Yl(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Xl=Ql(null,"core",[{provide:_l,useValue:"unknown"},{provide:Gl,deps:[Gs]},{provide:Hl,deps:[]},{provide:yl,deps:[]}]),ta=[{provide:Kl,useClass:Kl,deps:[Vl,yl,Gs,tr,Gi,hl]},{provide:qo,deps:[Vl],useFactory:function(t){let e=[];return t.onStable.subscribe(()=>{for(;e.length;)e.pop()()}),function(t){e.push(t)}}},{provide:hl,useClass:hl,deps:[[new Gn,cl]]},{provide:Tl,useClass:Tl,deps:[]},fl,{provide:vo,useFactory:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return Ao},deps:[]},{provide:wo,useFactory:function(){return Oo},deps:[]},{provide:vl,useFactory:function(t){return Ri(t=t||"undefined"!=typeof $localize&&$localize.locale||"en-US"),t},deps:[[new Wn(vl),new Gn,new Jn]]},{provide:bl,useValue:"USD"}];let ea=(()=>{class t{constructor(t){}}return t.\u0275mod=Rt({type:t}),t.\u0275inj=st({factory:function(e){return new(e||t)(Un(Kl))},providers:ta}),t})(),na=null;function ra(){return na}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const sa=new Vn("DocumentToken");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var ia=function(t){return t[t.Zero=0]="Zero",t[t.One=1]="One",t[t.Two=2]="Two",t[t.Few=3]="Few",t[t.Many=4]="Many",t[t.Other=5]="Other",t}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class oa{}let la=(()=>{class t extends oa{constructor(t){super(),this.locale=t}getPluralCategory(t,e){switch(function(t){return function(t){const e=function(t){return t.toLowerCase().replace(/_/g,"-")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t);let n=Ni(e);if(n)return n;const r=e.split("-")[0];if(n=Ni(r),n)return n;if("en"===r)return Di;throw new Error(`Missing locale data for the locale "${t}".`)}(t)[ji.PluralCase]}(e||this.locale)(t)){case ia.Zero:return"zero";case ia.One:return"one";case ia.Two:return"two";case ia.Few:return"few";case ia.Many:return"many";default:return"other"}}}return t.\u0275fac=function(e){return new(e||t)(Un(vl))},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class aa{constructor(t,e,n,r){this.$implicit=t,this.ngForOf=e,this.index=n,this.count=r}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let ua=(()=>{class t{constructor(t,e,n){this._viewContainer=t,this._template=e,this._differs=n,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;if(!this._differ&&n)try{this._differ=this._differs.find(n).create(this.ngForTrackBy)}catch(e){throw new Error(`Cannot find a differ supporting object '${n}' of type '${t=n,t.name||typeof t}'. NgFor only supports binding to Iterables such as Arrays.`)}}var t;if(this._differ){const t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){const e=[];t.forEachOperation((t,n,r)=>{if(null==t.previousIndex){const n=this._viewContainer.createEmbeddedView(this._template,new aa(null,this._ngForOf,-1,-1),null===r?void 0:r),s=new ca(t,n);e.push(s)}else if(null==r)this._viewContainer.remove(null===n?void 0:n);else if(null!==n){const s=this._viewContainer.get(n);this._viewContainer.move(s,r);const i=new ca(t,s);e.push(i)}});for(let n=0;n<e.length;n++)this._perViewChange(e[n].view,e[n].record);for(let n=0,r=this._viewContainer.length;n<r;n++){const t=this._viewContainer.get(n);t.context.index=n,t.context.count=r,t.context.ngForOf=this._ngForOf}t.forEachIdentityChange(t=>{this._viewContainer.get(t.currentIndex).context.$implicit=t.item})}_perViewChange(t,e){t.context.$implicit=e.item}static ngTemplateContextGuard(t,e){return!0}}return t.\u0275fac=function(e){return new(e||t)(ai(No),ai(So),ai(vo))},t.\u0275dir=Lt({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),t})();class ca{constructor(t,e){this.record=t,this.view=e}}let ha=(()=>{class t{constructor(t,e,n){this._ngEl=t,this._differs=e,this._renderer=n,this._ngStyle=null,this._differ=null}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){const t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,e){const[n,r]=t.split(".");null!=(e=null!=e&&r?`${e}${r}`:e)?this._renderer.setStyle(this._ngEl.nativeElement,n,e):this._renderer.removeStyle(this._ngEl.nativeElement,n)}_applyChanges(t){t.forEachRemovedItem(t=>this._setStyle(t.key,null)),t.forEachAddedItem(t=>this._setStyle(t.key,t.currentValue)),t.forEachChangedItem(t=>this._setStyle(t.key,t.currentValue))}}return t.\u0275fac=function(e){return new(e||t)(ai(Xi),ai(wo),ai(no))},t.\u0275dir=Lt({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}}),t})(),da=(()=>{class t{}return t.\u0275mod=Rt({type:t}),t.\u0275inj=st({factory:function(e){return new(e||t)},providers:[{provide:oa,useClass:la}]}),t})();class fa extends
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license Angular v11.1.2
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class extends class{}{constructor(){super()}supportsDOMEvents(){return!0}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */{static makeCurrent(){var t;t=new fa,na||(na=t)}getProperty(t,e){return t[e]}log(t){window.console&&window.console.log&&window.console.log(t)}logGroup(t){window.console&&window.console.group&&window.console.group(t)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(t,e,n){return t.addEventListener(e,n,!1),()=>{t.removeEventListener(e,n,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){return t.parentNode&&t.parentNode.removeChild(t),t}getValue(t){return t.value}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(t){const e=ga||(ga=document.querySelector("base"),ga)?ga.getAttribute("href"):null;return null==e?null:(n=e,pa||(pa=document.createElement("a")),pa.setAttribute("href",n),"/"===pa.pathname.charAt(0)?pa.pathname:"/"+pa.pathname);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}resetBaseElement(){ga=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(t){
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return function(t,e){e=encodeURIComponent(e);for(const n of t.split(";")){const t=n.indexOf("="),[r,s]=-1==t?[n,""]:[n.slice(0,t),n.slice(t+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}(document.cookie,t)}}let pa,ga=null;const _a=new Vn("TRANSITION_ID"),ma=[{provide:cl,useFactory:function(t,e,n){return()=>{n.get(hl).donePromise.then(()=>{const n=ra();Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e=>e.getAttribute("ng-transition")===t).forEach(t=>n.remove(t))})}},deps:[_a,sa,Gs],multi:!0}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ya{static init(){var t;t=new ya,$l=t}addToWindow(t){xt.getAngularTestability=(e,n=!0)=>{const r=t.findTestabilityInTree(e,n);if(null==r)throw new Error("Could not find testability for element.");return r},xt.getAllAngularTestabilities=()=>t.getAllTestabilities(),xt.getAllAngularRootElements=()=>t.getAllRootElements(),xt.frameworkStabilizers||(xt.frameworkStabilizers=[]),xt.frameworkStabilizers.push(t=>{const e=xt.getAllAngularTestabilities();let n=e.length,r=!1;const s=function(e){r=r||e,n--,0==n&&t(r)};e.forEach(function(t){t.whenStable(s)})})}findTestabilityInTree(t,e,n){if(null==e)return null;const r=t.getTestability(e);return null!=r?r:n?ra().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const va=new Vn("EventManagerPlugins");let ba=(()=>{class t{constructor(t,e){this._zone=e,this._eventNameToPlugin=new Map,t.forEach(t=>t.manager=this),this._plugins=t.slice().reverse()}addEventListener(t,e,n){return this._findPluginFor(e).addEventListener(t,e,n)}addGlobalEventListener(t,e,n){return this._findPluginFor(e).addGlobalEventListener(t,e,n)}getZone(){return this._zone}_findPluginFor(t){const e=this._eventNameToPlugin.get(t);if(e)return e;const n=this._plugins;for(let r=0;r<n.length;r++){const e=n[r];if(e.supports(t))return this._eventNameToPlugin.set(t,e),e}throw new Error(`No event manager plugin found for event ${t}`)}}return t.\u0275fac=function(e){return new(e||t)(Un(va),Un(Vl))},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})();class wa{constructor(t){this._doc=t}addGlobalEventListener(t,e,n){const r=ra().getGlobalEventTarget(this._doc,t);if(!r)throw new Error(`Unsupported event target ${r} for event ${e}`);return this.addEventListener(r,e,n)}}let Ca=(()=>{class t{constructor(){this._stylesSet=new Set}addStyles(t){const e=new Set;t.forEach(t=>{this._stylesSet.has(t)||(this._stylesSet.add(t),e.add(t))}),this.onStylesAdded(e)}onStylesAdded(t){}getAllStyles(){return Array.from(this._stylesSet)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})(),xa=(()=>{class t extends Ca{constructor(t){super(),this._doc=t,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(t.head)}_addStylesToHost(t,e){t.forEach(t=>{const n=this._doc.createElement("style");n.textContent=t,this._styleNodes.add(e.appendChild(n))})}addHost(t){this._addStylesToHost(this._stylesSet,t),this._hostNodes.add(t)}removeHost(t){this._hostNodes.delete(t)}onStylesAdded(t){this._hostNodes.forEach(e=>this._addStylesToHost(t,e))}ngOnDestroy(){this._styleNodes.forEach(t=>ra().remove(t))}}return t.\u0275fac=function(e){return new(e||t)(Un(sa))},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ea={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},ka=/%COMP%/g;function Aa(t,e,n){for(let r=0;r<e.length;r++){let s=e[r];Array.isArray(s)?Aa(t,s,n):(s=s.replace(ka,t),n.push(s))}return n}function Oa(t){return e=>{if("__ngUnwrap__"===e)return t;!1===t(e)&&(e.preventDefault(),e.returnValue=!1)}}let Ta=(()=>{class t{constructor(t,e,n){this.eventManager=t,this.sharedStylesHost=e,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new Sa(t)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;switch(e.encapsulation){case yt.Emulated:{let n=this.rendererByCompId.get(e.id);return n||(n=new Ia(this.eventManager,this.sharedStylesHost,e,this.appId),this.rendererByCompId.set(e.id,n)),n.applyToHost(t),n}case 1:case yt.ShadowDom:return new Va(this.eventManager,this.sharedStylesHost,t,e);default:if(!this.rendererByCompId.has(e.id)){const t=Aa(e.id,e.styles,[]);this.sharedStylesHost.addStyles(t),this.rendererByCompId.set(e.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return t.\u0275fac=function(e){return new(e||t)(Un(ba),Un(xa),Un(dl))},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})();class Sa{constructor(t){this.eventManager=t,this.data=Object.create(null)}destroy(){}createElement(t,e){return e?document.createElementNS(Ea[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){t.appendChild(e)}insertBefore(t,e,n){t&&t.insertBefore(e,n)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let n="string"==typeof t?document.querySelector(t):t;if(!n)throw new Error(`The selector "${t}" did not match any elements`);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,r){if(r){e=r+":"+e;const s=Ea[r];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){const r=Ea[n];r?t.removeAttributeNS(r,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,r){r&(sr.DashCase|sr.Important)?t.style.setProperty(e,n,r&sr.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&sr.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t[e]=n}setValue(t,e){t.nodeValue=e}listen(t,e,n){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,Oa(n)):this.eventManager.addEventListener(t,e,Oa(n))}}class Ia extends Sa{constructor(t,e,n,r){super(t),this.component=n;const s=Aa(r+"-"+n.id,n.styles,[]);e.addStyles(s),this.contentAttr="_ngcontent-%COMP%".replace(ka,r+"-"+n.id),this.hostAttr="_nghost-%COMP%".replace(ka,r+"-"+n.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}}class Va extends Sa{constructor(t,e,n,r){super(t),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=Aa(r.id,r.styles,[]);for(let i=0;i<s.length;i++){const t=document.createElement("style");t.textContent=s[i],this.shadowRoot.appendChild(t)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}let Ma=(()=>{class t extends wa{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,n){return t.addEventListener(e,n,!1),()=>this.removeEventListener(t,e,n)}removeEventListener(t,e,n){return t.removeEventListener(e,n)}}return t.\u0275fac=function(e){return new(e||t)(Un(sa))},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Da=["alt","control","meta","shift"],Pa={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Na={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},ja={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};let Fa=(()=>{class t extends wa{constructor(t){super(t)}supports(e){return null!=t.parseEventName(e)}addEventListener(e,n,r){const s=t.parseEventName(n),i=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ra().onAndCancel(e,s.domEventName,i))}static parseEventName(e){const n=e.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const s=t._normalizeKey(n.pop());let i="";if(Da.forEach(t=>{const e=n.indexOf(t);e>-1&&(n.splice(e,1),i+=t+".")}),i+=s,0!=n.length||0===s.length)return null;const o={};return o.domEventName=r,o.fullKey=i,o}static getEventFullKey(t){let e="",n=function(t){let e=t.key;if(null==e){if(e=t.keyIdentifier,null==e)return"Unidentified";e.startsWith("U+")&&(e=String.fromCharCode(parseInt(e.substring(2),16)),3===t.location&&Na.hasOwnProperty(e)&&(e=Na[e]))}return Pa[e]||e}(t);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),Da.forEach(r=>{r!=n&&(0,ja[r])(t)&&(e+=r+".")}),e+=n,e}static eventCallback(e,n,r){return s=>{t.getEventFullKey(s)===e&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){switch(t){case"esc":return"escape";default:return t}}}return t.\u0275fac=function(e){return new(e||t)(Un(sa))},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})();const Ra=Ql(Xl,"browser",[{provide:_l,useValue:"browser"},{provide:gl,useValue:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){fa.makeCurrent(),ya.init()},multi:!0},{provide:sa,useFactory:function(){return function(t){oe=t}(document),document},deps:[]}]),Ha=[[],{provide:Ns,useValue:"root"},{provide:tr,useFactory:function(){return new tr},deps:[]},{provide:va,useClass:Ma,multi:!0,deps:[sa,Vl,_l]},{provide:va,useClass:Fa,multi:!0,deps:[sa]},[],{provide:Ta,useClass:Ta,deps:[ba,xa,dl]},{provide:eo,useExisting:Ta},{provide:Ca,useExisting:xa},{provide:xa,useClass:xa,deps:[sa]},{provide:Rl,useClass:Rl,deps:[Vl]},{provide:ba,useClass:ba,deps:[va,Vl]},[]];let La=(()=>{class t{constructor(t){if(t)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(e){return{ngModule:t,providers:[{provide:dl,useValue:e.appId},{provide:_a,useExisting:dl},ma]}}}return t.\u0275mod=Rt({type:t}),t.\u0275inj=st({factory:function(e){return new(e||t)(Un(t,12))},providers:Ha,imports:[da,ea]}),t})();function Ba(t,e){return new y(n=>{const r=t.length;if(0===r)return void n.complete();const s=new Array(r);let i=0,o=0;for(let l=0;l<r;l++){const a=N(t[l]);let u=!1;n.add(a.subscribe({next:t=>{u||(u=!0,o++),s[l]=t},error:t=>n.error(t),complete:()=>{i++,i!==r&&u||(o===r&&n.next(e?e.reduce((t,e,n)=>(t[e]=s[n],t),{}):s),n.complete())}}))}})}
/**
 * @license Angular v11.1.2
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */"undefined"!=typeof window&&window;const $a=new Vn("NgValueAccessor"),Za={provide:$a,useExisting:tt(()=>qa),multi:!0};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let qa=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"checked",t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(ai(no),ai(Xi))},t.\u0275dir=Lt({type:t,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(t,e){1&t&&gi("change",function(t){return e.onChange(t.target.checked)})("blur",function(){return e.onTouched()})},features:[zi([Za])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ua={provide:$a,useExisting:tt(()=>Qa),multi:!0},za=new Vn("CompositionEventMode");let Qa=(()=>{class t{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=ra()?ra().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(ai(no),ai(Xi),ai(za,8))},t.\u0275dir=Lt({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&gi("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[zi([Ua])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Wa(t){return null==t||0===t.length}function Ga(t){return null!=t&&"number"==typeof t.length}const Ja=new Vn("NgValidators"),Ka=new Vn("NgAsyncValidators"),Ya=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Xa{static min(t){return e=>{if(Wa(e.value)||Wa(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}static max(t){return e=>{if(Wa(e.value)||Wa(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}static required(t){return Wa(t.value)?{required:!0}:null}static requiredTrue(t){return!0===t.value?null:{required:!0}}static email(t){return Wa(t.value)||Ya.test(t.value)?null:{email:!0}}static minLength(t){return e=>Wa(e.value)||!Ga(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}static maxLength(t){return e=>Ga(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}static pattern(t){if(!t)return Xa.nullValidator;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(Wa(t.value))return null;const r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}static nullValidator(t){return null}static compose(t){if(!t)return null;const e=t.filter(tu);return 0==e.length?null:function(t){return nu(ru(t,e))}}static composeAsync(t){if(!t)return null;const e=t.filter(tu);return 0==e.length?null:function(t){
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return function(...t){if(1===t.length){const e=t[0];if(a(e))return Ba(e,null);if(u(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return Ba(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return Ba(t=1===t.length&&a(t[0])?t[0]:t,null).pipe(k(t=>e(...t)))}return Ba(t,null)}(ru(t,e).map(eu)).pipe(k(nu))}}}function tu(t){return null!=t}function eu(t){const e=pi(t)?N(t):t;return e,e}function nu(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function ru(t,e){return e.map(e=>e(t))}function su(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function iu(t){return null!=t?Xa.compose(su(t)):null}function ou(t){return null!=t?Xa.composeAsync(su(t)):null}function lu(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}let au=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=iu(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=ou(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=Lt({type:t}),t})(),uu=(()=>{class t extends au{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(e){return cu(e||t)},t.\u0275dir=Lt({type:t,features:[Ks]}),t})();const cu=Sn(uu);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class hu extends au{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}class du{constructor(t){this._cd=t}is(t){var e,n;return!!(null===(n=null===(e=this._cd)||void 0===e?void 0:e.control)||void 0===n?void 0:n[t])}}let fu=(()=>{class t extends du{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(ai(hu,2))},t.\u0275dir=Lt({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&Ci("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[Ks]}),t})(),pu=(()=>{class t extends du{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(ai(uu,10))},t.\u0275dir=Lt({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:14,hostBindings:function(t,e){2&t&&Ci("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[Ks]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const gu={provide:$a,useExisting:tt(()=>_u),multi:!0};let _u=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(ai(no),ai(Xi))},t.\u0275dir=Lt({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,e){1&t&&gi("input",function(t){return e.onChange(t.target.value)})("blur",function(){return e.onTouched()})},features:[zi([gu])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const mu={provide:$a,useExisting:tt(()=>vu),multi:!0};let yu=(()=>{class t{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=rt({token:t,factory:t.\u0275fac}),t})(),vu=(()=>{class t{constructor(t,e,n,r){this._renderer=t,this._elementRef=e,this._registry=n,this._injector=r,this.onChange=()=>{},this.onTouched=()=>{}}ngOnInit(){this._control=this._injector.get(hu),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}fireUncheck(t){this.writeValue(t)}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_checkName(){!this.name&&this.formControlName&&(this.name=this.formControlName)}}return t.\u0275fac=function(e){return new(e||t)(ai(no),ai(Xi),ai(yu),ai(Gs))},t.\u0275dir=Lt({type:t,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(t,e){1&t&&gi("change",function(){return e.onChange()})("blur",function(){return e.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[zi([mu])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const bu={provide:$a,useExisting:tt(()=>wu),multi:!0};let wu=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(t))}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(ai(no),ai(Xi))},t.\u0275dir=Lt({type:t,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(t,e){1&t&&gi("change",function(t){return e.onChange(t.target.value)})("input",function(t){return e.onChange(t.target.value)})("blur",function(){return e.onTouched()})},features:[zi([bu])]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Cu={provide:$a,useExisting:tt(()=>Eu),multi:!0};function xu(t,e){return null==t?`${e}`:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}let Eu=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;const e=this._getOptionId(t);null==e&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const n=xu(e,t);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}registerOnChange(t){this.onChange=e=>{this.value=this._getOptionValue(e),t(this.value)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e),t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e):t}}return t.\u0275fac=function(e){return new(e||t)(ai(no),ai(Xi))},t.\u0275dir=Lt({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(t,e){1&t&&gi("change",function(t){return e.onChange(t.target.value)})("blur",function(){return e.onTouched()})},inputs:{compareWith:"compareWith"},features:[zi([Cu])]}),t})(),ku=(()=>{class t{constructor(t,e,n){this._element=t,this._renderer=e,this._select=n,this._select&&(this.id=this._select._registerOption())}set ngValue(t){null!=this._select&&(this._select._optionMap.set(this.id,t),this._setElementValue(xu(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return t.\u0275fac=function(e){return new(e||t)(ai(Xi),ai(no),ai(Eu,9))},t.\u0275dir=Lt({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Au={provide:$a,useExisting:tt(()=>Tu),multi:!0};function Ou(t,e){return null==t?`${e}`:("string"==typeof e&&(e=`'${e}'`),e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}let Tu=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){let e;if(this.value=t,Array.isArray(t)){const n=t.map(t=>this._getOptionId(t));e=(t,e)=>{t._setSelected(n.indexOf(e.toString())>-1)}}else e=(t,e)=>{t._setSelected(!1)};this._optionMap.forEach(e)}registerOnChange(t){this.onChange=e=>{const n=[];if(void 0!==e.selectedOptions){const t=e.selectedOptions;for(let e=0;e<t.length;e++){const r=t.item(e),s=this._getOptionValue(r.value);n.push(s)}}else{const t=e.options;for(let e=0;e<t.length;e++){const r=t.item(e);if(r.selected){const t=this._getOptionValue(r.value);n.push(t)}}}this.value=n,t(n)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(t){const e=(this._idCounter++).toString();return this._optionMap.set(e,t),e}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e)._value,t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e)._value:t}}return t.\u0275fac=function(e){return new(e||t)(ai(no),ai(Xi))},t.\u0275dir=Lt({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(t,e){1&t&&gi("change",function(t){return e.onChange(t.target)})("blur",function(){return e.onTouched()})},inputs:{compareWith:"compareWith"},features:[zi([Au])]}),t})(),Su=(()=>{class t{constructor(t,e,n){this._element=t,this._renderer=e,this._select=n,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){null!=this._select&&(this._value=t,this._setElementValue(Ou(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(Ou(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return t.\u0275fac=function(e){return new(e||t)(ai(Xi),ai(no),ai(Tu,9))},t.\u0275dir=Lt({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})();function Iu(t,e){Mu(t,e,!0),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&Du(t,e)})}(t,e),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&Du(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e)}function Vu(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Mu(t,e,n){const r=function(t){return t._rawValidators}(t);null!==e.validator?t.setValidators(lu(r,e.validator)):"function"==typeof r&&t.setValidators([r]);const s=function(t){return t._rawAsyncValidators}(t);if(null!==e.asyncValidator?t.setAsyncValidators(lu(s,e.asyncValidator)):"function"==typeof s&&t.setAsyncValidators([s]),n){const n=()=>t.updateValueAndValidity();Vu(e._rawValidators,n),Vu(e._rawAsyncValidators,n)}}function Du(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}const Pu=[qa,wu,_u,Eu,Tu,vu];function Nu(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}function ju(t){return(Lu(t)?t.validators:t)||null}function Fu(t){return Array.isArray(t)?iu(t):t||null}function Ru(t,e){return(Lu(e)?e.asyncValidators:t)||null}function Hu(t){return Array.isArray(t)?ou(t):t||null}function Lu(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class Bu{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Fu(this._rawValidators),this._composedAsyncValidatorFn=Hu(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return"VALID"===this.status}get invalid(){return"INVALID"===this.status}get pending(){return"PENDING"==this.status}get disabled(){return"DISABLED"===this.status}get enabled(){return"DISABLED"!==this.status}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Fu(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=Hu(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status="PENDING",!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="DISABLED",this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="VALID",this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),"VALID"!==this.status&&"PENDING"!==this.status||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?"DISABLED":"VALID"}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status="PENDING",this._hasOwnPendingAsyncValidator=!0;const e=eu(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let r=t;return e.forEach(t=>{r=r instanceof Zu?r.controls.hasOwnProperty(t)?r.controls[t]:null:r instanceof qu&&r.at(t)||null}),r}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new Jo,this.statusChanges=new Jo}_calculateStatus(){return this._allControlsDisabled()?"DISABLED":this.errors?"INVALID":this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus("PENDING")?"PENDING":this._anyControlsHaveStatus("INVALID")?"INVALID":"VALID"}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Lu(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class $u extends Bu{constructor(t=null,e,n){super(ju(e),Ru(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Nu(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Nu(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class Zu extends Bu{constructor(t,e,n){super(ju(e),Ru(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof $u?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,r)=>{n=e(n,t,r)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class qu extends Bu{constructor(t,e,n){super(ju(e),Ru(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof $u?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}const Uu={provide:uu,useExisting:tt(()=>Qu)},zu=(()=>Promise.resolve(null))();let Qu=(()=>{class t extends uu{constructor(t,e){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new Jo,this.form=new Zu({},iu(t),ou(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){zu.then(()=>{const e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),Iu(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){zu.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name),Nu(this._directives,t)})}addFormGroup(t){zu.then(()=>{const e=this._findContainer(t.path),n=new Zu({});(function(t,e){Mu(t,e,!1)})(n,t),e.registerControl(t.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){zu.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){zu.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,e=this._directives,this.form._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)}),this.ngSubmit.emit(t),!1;var e}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return t.\u0275fac=function(e){return new(e||t)(ai(Ja,10),ai(Ka,10))},t.\u0275dir=Lt({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,e){1&t&&gi("submit",function(t){return e.onSubmit(t)})("reset",function(){return e.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[zi([Uu]),Ks]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Wu={provide:hu,useExisting:tt(()=>Ju)},Gu=(()=>Promise.resolve(null))();let Ju=(()=>{class t extends hu{constructor(t,e,n,r){super(),this.control=new $u,this._registered=!1,this.update=new Jo,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=function(t,e){if(!e)return null;let n,r,s;return Array.isArray(e),e.forEach(t=>{var e;t.constructor===Qa?n=t:(e=t,Pu.some(t=>e.constructor===t)?r=t:s=t)}),s||r||n||null}(0,r)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?[...this._parent.path,this.name]:[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){Iu(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){Gu.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const e=t.isDisabled.currentValue,n=""===e||e&&"false"!==e;Gu.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable()})}}return t.\u0275fac=function(e){return new(e||t)(ai(uu,9),ai(Ja,10),ai(Ka,10),ai($a,10))},t.\u0275dir=Lt({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[zi([Wu]),Ks,ee]}),t})(),Ku=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=Lt({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})(),Yu=(()=>{class t{}return t.\u0275mod=Rt({type:t}),t.\u0275inj=st({factory:function(e){return new(e||t)}}),t})(),Xu=(()=>{class t{}return t.\u0275mod=Rt({type:t}),t.\u0275inj=st({factory:function(e){return new(e||t)},providers:[yu],imports:[Yu]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const tc=Math.PI/180;let ec=(()=>{class t{constructor(t){this.supportsSvg=!!(t&&t.createElementNS&&t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),this.base=t&&t.head.querySelector("base"),this.hasPerf="undefined"!=typeof window&&window.performance&&window.performance.now&&"number"==typeof window.performance.now()}resolveColor(t){if(this.base&&this.base.href){const e=t.indexOf("#");if(e>-1&&t.indexOf("url")>-1)return t.slice(0,e)+location.href+t.slice(e)}return t}getTimestamp(){return this.hasPerf?window.performance.now():Date.now()}getArc(t,e,n,r,s=!1){const i=Math.max(0,Math.min(t||0,e)),o=s?180:359.9999,l=0===e?o:i/e*o;return`M ${this._polarToCartesian(r,n,l)} A ${n} ${n} 0 ${l<=180?0:1} 0 ${this._polarToCartesian(r,n,0)}`}_polarToCartesian(t,e,n){const r=(n-90)*tc;return t+e*Math.cos(r)+" "+(t+e*Math.sin(r))}}return t.\u0275fac=function(e){return new(e||t)(Un(sa,8))},t.\u0275prov=rt({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const nc=new Vn("ROUND_PROGRESS_DEFAULTS"),rc={provide:nc,useValue:{radius:125,animation:"easeOutCubic",animationDelay:null,duration:500,stroke:15,color:"#45CCCE",background:"#EAEAEA",responsive:!1,clockwise:!0,semicircle:!1,rounded:!1}};let sc=(()=>{class t{linearEase(t,e,n,r){return n*t/r+e}easeInQuad(t,e,n,r){return n*(t/=r)*t+e}easeOutQuad(t,e,n,r){return-n*(t/=r)*(t-2)+e}easeInOutQuad(t,e,n,r){return(t/=r/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}easeInCubic(t,e,n,r){return n*(t/=r)*t*t+e}easeOutCubic(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e}easeInOutCubic(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}easeInQuart(t,e,n,r){return n*(t/=r)*t*t*t+e}easeOutQuart(t,e,n,r){return-n*((t=t/r-1)*t*t*t-1)+e}easeInOutQuart(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}easeInQuint(t,e,n,r){return n*(t/=r)*t*t*t*t+e}easeOutQuint(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e}easeInOutQuint(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}easeInSine(t,e,n,r){return-n*Math.cos(t/r*(Math.PI/2))+n+e}easeOutSine(t,e,n,r){return n*Math.sin(t/r*(Math.PI/2))+e}easeInOutSine(t,e,n,r){return-n/2*(Math.cos(Math.PI*t/r)-1)+e}easeInExpo(t,e,n,r){return 0===t?e:n*Math.pow(2,10*(t/r-1))+e}easeOutExpo(t,e,n,r){return t===r?e+n:n*(1-Math.pow(2,-10*t/r))+e}easeInOutExpo(t,e,n,r){return 0===t?e:t===r?e+n:(t/=r/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*--t))+e}easeInCirc(t,e,n,r){return-n*(Math.sqrt(1-(t/=r)*t)-1)+e}easeOutCirc(t,e,n,r){return n*Math.sqrt(1-(t=t/r-1)*t)+e}easeInOutCirc(t,e,n,r){return(t/=r/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}easeInElastic(t,e,n,r){const s=.3*r;let i=1.70158,o=n;return 0===t?e:1==(t/=r)?e+n:(o<Math.abs(n)?(o=n,i=s/4):i=s/(2*Math.PI)*Math.asin(n/o),-o*Math.pow(2,10*t--)*Math.sin((t*r-i)*(2*Math.PI)/s)+e)}easeOutElastic(t,e,n,r){const s=.3*r;let i=1.70158,o=n;return 0===t?e:1==(t/=r)?e+n:(o<Math.abs(n)?(o=n,i=s/4):i=s/(2*Math.PI)*Math.asin(n/o),o*Math.pow(2,-10*t)*Math.sin((t*r-i)*(2*Math.PI)/s)+n+e)}easeInOutElastic(t,e,n,r){const s=r*(.3*1.5);let i=1.70158,o=n;return 0===t?e:2==(t/=r/2)?e+n:(o<Math.abs(n)?(o=n,i=s/4):i=s/(2*Math.PI)*Math.asin(n/o),t<1?o*Math.pow(2,10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/s)*-.5+e:o*Math.pow(2,-10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/s)*.5+n+e)}easeInBack(t,e,n,r,s=1.70158){return n*(t/=r)*t*((s+1)*t-s)+e}easeOutBack(t,e,n,r,s=1.70158){return n*((t=t/r-1)*t*((s+1)*t+s)+1)+e}easeInOutBack(t,e,n,r,s=1.70158){return(t/=r/2)<1?n/2*(t*t*((1+(s*=1.525))*t-s))+e:n/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+e}easeInBounce(t,e,n,r){return n-this.easeOutBounce(r-t,0,n,r)+e}easeOutBounce(t,e,n,r){return(t/=r)<1/2.75?n*(7.5625*t*t)+e:t<2/2.75?n*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?n*(7.5625*(t-=2.25/2.75)*t+.9375)+e:n*(7.5625*(t-=2.625/2.75)*t+.984375)+e}easeInOutBounce(t,e,n,r){return t<r/2?.5*this.easeInBounce(2*t,0,n,r)+e:.5*this.easeOutBounce(2*t-r,0,n,r)+.5*n+e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=rt({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const ic=["path"];let oc=(()=>{class t{constructor(t,e,n,r){this.service=t,this.easing=e,this.defaults=n,this.ngZone=r,this.radius=this.defaults.radius,this.animation=this.defaults.animation,this.animationDelay=this.defaults.animationDelay,this.duration=this.defaults.duration,this.stroke=this.defaults.stroke,this.color=this.defaults.color,this.background=this.defaults.background,this.responsive=this.defaults.responsive,this.clockwise=this.defaults.clockwise,this.semicircle=this.defaults.semicircle,this.rounded=this.defaults.rounded,this.onRender=new Jo,this.lastAnimationId=0}_animateChange(t,e){"number"!=typeof t&&(t=0),e=this._clamp(e),t=this._clamp(t);const n=this,r=e-t,s=n.duration;n.ngZone.runOutsideAngular(()=>{const e=()=>{const e=n.service.getTimestamp(),i=++n.lastAnimationId;requestAnimationFrame(function o(){const l=Math.min(n.service.getTimestamp()-e,s),a=n.easing[n.animation](l,t,r,s);n._setPath(a),n.onRender.emit(a),i===n.lastAnimationId&&l<s&&requestAnimationFrame(o)})};this.animationDelay>0?setTimeout(e,this.animationDelay):e()})}_setPath(t){if(this.path){const e=this.service.getArc(t,this.max,this.radius-this.stroke/2,this.radius,this.semicircle);this.path.nativeElement.setAttribute("d",e)}}_clamp(t){return Math.max(0,Math.min(t||0,this.max))}getPathTransform(){const t=this._getDiameter();return this.semicircle?this.clockwise?`translate(0, ${t}) rotate(-90)`:`translate(${t+","+t}) rotate(90) scale(-1, 1)`:this.clockwise?void 0:`scale(-1, 1) translate(-${t} 0)`}resolveColor(t){return this.service.resolveColor(t)}ngOnChanges(t){t.current?this._animateChange(t.current.previousValue,t.current.currentValue):this._setPath(this.current)}_getDiameter(){return 2*this.radius}_getElementHeight(){if(!this.responsive)return(this.semicircle?this.radius:this._getDiameter())+"px"}_getViewBox(){const t=this._getDiameter();return`0 0 ${t} ${this.semicircle?this.radius:t}`}_getPaddingBottom(){if(this.responsive)return this.semicircle?"50%":"100%"}}return t.\u0275fac=function(e){return new(e||t)(ai(ec),ai(sc),ai(nc),ai(Vl))},t.\u0275cmp=Pt({type:t,selectors:[["round-progress"]],viewQuery:function(t,e){if(1&t&&function(t,e,n){const r=xe();r.firstCreatePass&&(function(t,e,n){null===t.queries&&(t.queries=new nl),t.queries.track(new rl(e,-1))}(r,new el(t,e,n)),2==(2&e)&&(r.staticViewQueries=!0)),function(t,e,n){const r=new Yo(4==(4&n));is(t,e,r,r.destroy),null===e[19]&&(e[19]=new tl),e[19].queries.push(new Xo(r))}(r,Ce(),e)}(ic,1),2&t){let t;al((n=Ce(),r=Pe(),t=n[19].queries[r].queryList))&&(e.path=t.first)}var n,r},hostAttrs:["role","progressbar"],hostVars:11,hostBindings:function(t,e){2&t&&(li("aria-valuemin",0)("aria-valuemax",e.max)("aria-valuenow",e.current),wi("width",e.responsive?"":e._getDiameter()+"px")("height",e._getElementHeight())("padding-bottom",e._getPaddingBottom()),Ci("responsive",e.responsive))},inputs:{current:"current",max:"max",radius:"radius",animation:"animation",animationDelay:"animationDelay",duration:"duration",stroke:"stroke",color:"color",background:"background",responsive:"responsive",clockwise:"clockwise",semicircle:"semicircle",rounded:"rounded"},outputs:{onRender:"onRender"},features:[ee],decls:4,vars:15,consts:[["xmlns","http://www.w3.org/2000/svg"],["fill","none"],["path",""]],template:function(t,e){1&t&&(Qe(),hi(0,"svg",0),fi(1,"circle",1),fi(2,"path",1,2),di()),2&t&&(li("viewBox",e._getViewBox()),Hr(1),wi("stroke",e.resolveColor(e.background))("stroke-width",e.stroke),li("cx",e.radius)("cy",e.radius)("r",e.radius-e.stroke/2),Hr(1),wi("stroke-width",e.stroke)("stroke",e.resolveColor(e.color))("stroke-linecap",e.rounded?"round":""),li("transform",e.getPathTransform()))},styles:["[_nghost-%COMP%]{display:block;position:relative;overflow:hidden}.responsive[_nghost-%COMP%]{width:100%;padding-bottom:100%}.responsive[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0}"],changeDetection:0}),t})(),lc=(()=>{class t{}return t.\u0275mod=Rt({type:t}),t.\u0275inj=st({factory:function(e){return new(e||t)},providers:[rc]}),t})();function ac(t,e){if(1&t&&(hi(0,"option",39),Ti(1),di()),2&t){const t=e.$implicit;ui("ngValue",t),Hr(1),Si(t)}}let uc=(()=>{class t{constructor(){this.current=27,this.max=50,this.stroke=15,this.radius=125,this.semicircle=!1,this.rounded=!1,this.responsive=!1,this.clockwise=!0,this.color="#45ccce",this.background="#eaeaea",this.duration=800,this.animation="easeOutCubic",this.animationDelay=0,this.animations=["linearEase","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"],this.gradient=!1,this.realCurrent=0}increment(t=1){this.current+=t}getOverlayStyle(){const t=this.semicircle;return{top:t?"auto":"50%",bottom:t?"5%":"auto",left:"50%",transform:(t?"":"translateY(-50%) ")+"translateX(-50%)","font-size":this.radius/3.5+"px"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Pt({type:t,selectors:[["demo"]],decls:81,vars:31,consts:[[1,"container"],["href","https://github.com/crisbeto/angular-svg-round-progressbar",1,"back"],[1,"progress-wrapper"],[1,"current",3,"ngStyle"],[3,"current","max","color","background","radius","stroke","semicircle","rounded","clockwise","responsive","duration","animation","animationDelay"],[3,"click"],[1,"cf"],["for","semicircle"],["id","semicircle","name","semicircle","type","checkbox",3,"ngModel","ngModelChange"],["for","responsive"],["id","responsive","name","responsive","type","checkbox",3,"ngModel","ngModelChange"],["for","rounded"],["id","rounded","name","rounded","type","checkbox",3,"ngModel","ngModelChange"],["for","clockwise"],["id","clockwise","name","clockwise","type","checkbox",3,"ngModel","ngModelChange"],["for","gradientInput"],["id","gradientInput","type","checkbox","name","gradient",3,"ngModel","ngModelChange"],["for","current"],["id","current","name","current","type","number",3,"ngModel","ngModelChange"],["for","max"],["id","max","name","max","type","number",3,"ngModel","ngModelChange"],["for","stroke"],["id","stroke","name","stroke","type","number",3,"ngModel","ngModelChange"],["for","radius"],["id","radius","name","radius","type","number",3,"ngModel","ngModelChange"],["for","duration"],["id","duration","name","duration","type","number",3,"ngModel","ngModelChange"],["for","animation"],["id","animation","name","animation",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["for","animationDelay"],["id","animationDelay","name","animationDelay","type","number",3,"ngModel","ngModelChange"],["for","color"],["id","color","name","color","type","color",3,"ngModel","ngModelChange"],["for","background"],["id","background","name","background","type","color",3,"ngModel","ngModelChange"],["id","gradient","x1","0","x2","0","y1","0","y2","1"],["offset","5%","stop-color","green"],["offset","95%","stop-color","gold"],[3,"ngValue"]],template:function(t,e){1&t&&(hi(0,"div",0),hi(1,"a",1),Ti(2,"Back to project repo"),di(),hi(3,"h2"),Ti(4,"Sample progressbar"),di(),hi(5,"div",2),hi(6,"div",3),Ti(7),di(),fi(8,"round-progress",4),di(),hi(9,"button",5),gi("click",function(){return e.increment()}),Ti(10,"Increment"),di(),hi(11,"button",5),gi("click",function(){return e.increment(-1)}),Ti(12,"Decrement"),di(),hi(13,"button",5),gi("click",function(){return e.increment(10)}),Ti(14,"Increment 10"),di(),hi(15,"button",5),gi("click",function(){return e.increment(-10)}),Ti(16,"Decrement 10"),di(),hi(17,"form"),hi(18,"h3"),Ti(19,"Customize!"),di(),hi(20,"div",6),hi(21,"label",7),Ti(22,"Semicircle:"),di(),hi(23,"input",8),gi("ngModelChange",function(t){return e.semicircle=t}),di(),di(),hi(24,"div",6),hi(25,"label",9),Ti(26,"Responsive:"),di(),hi(27,"input",10),gi("ngModelChange",function(t){return e.responsive=t}),di(),di(),hi(28,"div",6),hi(29,"label",11),Ti(30,"Rounded:"),di(),hi(31,"input",12),gi("ngModelChange",function(t){return e.rounded=t}),di(),di(),hi(32,"div",6),hi(33,"label",13),Ti(34,"Clockwise:"),di(),hi(35,"input",14),gi("ngModelChange",function(t){return e.clockwise=t}),di(),di(),hi(36,"div",6),hi(37,"label",15),Ti(38,"Gradient:"),di(),hi(39,"input",16),gi("ngModelChange",function(t){return e.gradient=t}),di(),di(),hi(40,"div",6),hi(41,"label",17),Ti(42,"Current:"),di(),hi(43,"input",18),gi("ngModelChange",function(t){return e.current=t}),di(),di(),hi(44,"div",6),hi(45,"label",19),Ti(46,"Max:"),di(),hi(47,"input",20),gi("ngModelChange",function(t){return e.max=t}),di(),di(),hi(48,"div",6),hi(49,"label",21),Ti(50,"Stroke:"),di(),hi(51,"input",22),gi("ngModelChange",function(t){return e.stroke=t}),di(),di(),hi(52,"div",6),hi(53,"label",23),Ti(54,"Radius:"),di(),hi(55,"input",24),gi("ngModelChange",function(t){return e.radius=t}),di(),di(),hi(56,"div",6),hi(57,"label",25),Ti(58,"Duration:"),di(),hi(59,"input",26),gi("ngModelChange",function(t){return e.duration=t}),di(),di(),hi(60,"div",6),hi(61,"label",27),Ti(62,"Animation:"),di(),hi(63,"select",28),gi("ngModelChange",function(t){return e.animation=t}),function(t,e,n,r,s,i,o,l){const a=Ce(),u=xe(),c=u.firstCreatePass?
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n,r,s,i,o,l,a){const u=e.consts,c=Gr(e,84,4,"option",me(u,29));ls(e,n,c,me(u,undefined)),We(e,c);const h=c.tViews=ss(2,c,r,2,2,e.directiveRegistry,e.pipeRegistry,null,e.schemas,u);return null!==e.queries&&(e.queries.template(e,c),h.queries=e.queries.embeddedTView(c)),c}(0,u,a,e):u.data[84];Ae(c,!1);const h=a[11].createComment("");br(u,a,h,c),er(h,a),ws(a,a[84]=ms(h,a,h,c)),Qt(c)&&es(u,a,c)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(0,ac),di(),di(),hi(65,"div",6),hi(66,"label",30),Ti(67,"Animation delay:"),di(),hi(68,"input",31),gi("ngModelChange",function(t){return e.animationDelay=t}),di(),di(),hi(69,"div",6),hi(70,"label",32),Ti(71,"Color:"),di(),hi(72,"input",33),gi("ngModelChange",function(t){return e.color=t}),di(),di(),hi(73,"div",6),hi(74,"label",34),Ti(75,"Background color:"),di(),hi(76,"input",35),gi("ngModelChange",function(t){return e.background=t}),di(),di(),di(),di(),Qe(),hi(77,"svg"),hi(78,"linearGradient",36),fi(79,"stop",37),fi(80,"stop",38),di(),di()),2&t&&(Hr(6),ui("ngStyle",e.getOverlayStyle()),Hr(1),Vi("",e.current,"/",e.max,""),Hr(1),ui("current",e.current)("max",e.max)("color",e.gradient?"url(#gradient)":e.color)("background",e.background)("radius",e.radius)("stroke",e.stroke)("semicircle",e.semicircle)("rounded",e.rounded)("clockwise",e.clockwise)("responsive",e.responsive)("duration",e.duration)("animation",e.animation)("animationDelay",e.animationDelay),Hr(15),ui("ngModel",e.semicircle),Hr(4),ui("ngModel",e.responsive),Hr(4),ui("ngModel",e.rounded),Hr(4),ui("ngModel",e.clockwise),Hr(4),ui("ngModel",e.gradient),Hr(4),ui("ngModel",e.current),Hr(4),ui("ngModel",e.max),Hr(4),ui("ngModel",e.stroke),Hr(4),ui("ngModel",e.radius),Hr(4),ui("ngModel",e.duration),Hr(4),ui("ngModel",e.animation),Hr(1),ui("ngForOf",e.animations),Hr(4),ui("ngModel",e.animationDelay),Hr(4),ui("ngModel",e.color),Hr(4),ui("ngModel",e.background))},directives:[ha,oc,Ku,pu,Qu,qa,fu,Ju,_u,Qa,Eu,ua,ku,Su],styles:['h2[_ngcontent-%COMP%]{margin:0 0 40px}.cf[_ngcontent-%COMP%]:after, .cf[_ngcontent-%COMP%]:before{content:" ";display:table}.cf[_ngcontent-%COMP%]:after{clear:both}.progress-wrapper[_ngcontent-%COMP%]{position:relative;margin:20px auto;font-size:40px}.current[_ngcontent-%COMP%]{position:absolute;color:#bbb;font-weight:100;line-height:1}round-progress[_ngcontent-%COMP%]{margin:auto}.container[_ngcontent-%COMP%]{width:100%;max-width:650px;margin:40px auto 80px;text-align:center;padding:40px;background:#fff;border:1px solid #ccc;border-radius:4px}button[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;background:#45ccce;color:#fff;font-size:16px;border:none;cursor:pointer;border-radius:4px;text-align:center;margin:0 5px 5px 0}form[_ngcontent-%COMP%]{text-align:left;max-width:350px;margin:30px auto}form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:15px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{float:right;padding:5px;width:150px}input[type=checkbox][_ngcontent-%COMP%]{width:auto}input[type=color][_ngcontent-%COMP%]{height:30px}.back[_ngcontent-%COMP%]{position:fixed;top:5px;right:5px}@media (max-width:650px){.back[_ngcontent-%COMP%]{position:static;display:block;text-align:center}.back[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{margin-bottom:20px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;margin-top:5px;float:none}.container[_ngcontent-%COMP%]{margin:0 auto 50px;padding:25px}}']}),t})(),cc=(()=>{class t{}return t.\u0275mod=Rt({type:t,bootstrap:[uc]}),t.\u0275inj=st({factory:function(e){return new(e||t)},imports:[[La,lc,Xu]]}),t})();(function(){if(ql)throw new Error("Cannot enable prod mode after platform setup.");Zl=!1}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */)(),Ra().bootstrapModule(cc).catch(t=>console.error(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,0]]]);