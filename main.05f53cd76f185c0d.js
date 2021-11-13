"use strict";var rR=Object.defineProperty,oR=Object.defineProperties,iR=Object.getOwnPropertyDescriptors,WD=Object.getOwnPropertySymbols,sR=Object.prototype.hasOwnProperty,aR=Object.prototype.propertyIsEnumerable,qD=(Re,Ae,ue)=>Ae in Re?rR(Re,Ae,{enumerable:!0,configurable:!0,writable:!0,value:ue}):Re[Ae]=ue,Ue=(Re,Ae)=>{for(var ue in Ae||(Ae={}))sR.call(Ae,ue)&&qD(Re,ue,Ae[ue]);if(WD)for(var ue of WD(Ae))aR.call(Ae,ue)&&qD(Re,ue,Ae[ue]);return Re},ro=(Re,Ae)=>oR(Re,iR(Ae));(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[179],{47:()=>{function Re(e){return"function"==typeof e}let Ae=!1;const ue={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){const t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else Ae&&console.log("RxJS: Back to a better error behavior. Thank you. <3");Ae=e},get useDeprecatedSynchronousErrorHandling(){return Ae}};function gn(e){setTimeout(()=>{throw e},0)}const Ei={closed:!0,next(e){},error(e){if(ue.useDeprecatedSynchronousErrorHandling)throw e;gn(e)},complete(){}},Da=Array.isArray||(e=>e&&"number"==typeof e.length);function Ca(e){return null!==e&&"object"==typeof e}const vi=(()=>{function e(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((n,r)=>`${r+1}) ${n.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}return e.prototype=Object.create(Error.prototype),e})();class ge{constructor(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}unsubscribe(){let t;if(this.closed)return;let{_parentOrParents:n,_ctorUnsubscribe:r,_unsubscribe:o,_subscriptions:i}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof ge)n.remove(this);else if(null!==n)for(let s=0;s<n.length;++s)n[s].remove(this);if(Re(o)){r&&(this._unsubscribe=void 0);try{o.call(this)}catch(s){t=s instanceof vi?Dd(s.errors):[s]}}if(Da(i)){let s=-1,a=i.length;for(;++s<a;){const u=i[s];if(Ca(u))try{u.unsubscribe()}catch(l){t=t||[],l instanceof vi?t=t.concat(Dd(l.errors)):t.push(l)}}}if(t)throw new vi(t)}add(t){let n=t;if(!t)return ge.EMPTY;switch(typeof t){case"function":n=new ge(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof ge)){const i=n;n=new ge,n._subscriptions=[i]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof ge){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n}remove(t){const n=this._subscriptions;if(n){const r=n.indexOf(t);-1!==r&&n.splice(r,1)}}}var e;function Dd(e){return e.reduce((t,n)=>t.concat(n instanceof vi?n.errors:n),[])}ge.EMPTY=((e=new ge).closed=!0,e);const bi="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random();class rt extends ge{constructor(t,n,r){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=Ei;break;case 1:if(!t){this.destination=Ei;break}if("object"==typeof t){t instanceof rt?(this.syncErrorThrowable=t.syncErrorThrowable,this.destination=t,t.add(this)):(this.syncErrorThrowable=!0,this.destination=new Cd(this,t));break}default:this.syncErrorThrowable=!0,this.destination=new Cd(this,t,n,r)}}[bi](){return this}static create(t,n,r){const o=new rt(t,n,r);return o.syncErrorThrowable=!1,o}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(t){this.destination.next(t)}_error(t){this.destination.error(t),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:t}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this}}class Cd extends rt{constructor(t,n,r,o){super(),this._parentSubscriber=t;let i,s=this;Re(n)?i=n:n&&(i=n.next,r=n.error,o=n.complete,n!==Ei&&(s=Object.create(n),Re(s.unsubscribe)&&this.add(s.unsubscribe.bind(s)),s.unsubscribe=this.unsubscribe.bind(this))),this._context=s,this._next=i,this._error=r,this._complete=o}next(t){if(!this.isStopped&&this._next){const{_parentSubscriber:n}=this;ue.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable?this.__tryOrSetError(n,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}}error(t){if(!this.isStopped){const{_parentSubscriber:n}=this,{useDeprecatedSynchronousErrorHandling:r}=ue;if(this._error)r&&n.syncErrorThrowable?(this.__tryOrSetError(n,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(n.syncErrorThrowable)r?(n.syncErrorValue=t,n.syncErrorThrown=!0):gn(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;gn(t)}}}complete(){if(!this.isStopped){const{_parentSubscriber:t}=this;if(this._complete){const n=()=>this._complete.call(this._context);ue.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(t,n){try{t.call(this._context,n)}catch(r){if(this.unsubscribe(),ue.useDeprecatedSynchronousErrorHandling)throw r;gn(r)}}__tryOrSetError(t,n,r){if(!ue.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{n.call(this._context,r)}catch(o){return ue.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=o,t.syncErrorThrown=!0,!0):(gn(o),!0)}return!1}_unsubscribe(){const{_parentSubscriber:t}=this;this._context=null,this._parentSubscriber=null,t.unsubscribe()}}const oo="function"==typeof Symbol&&Symbol.observable||"@@observable";function Ed(e){return e}let Ge=(()=>{class e{constructor(n){this._isScalar=!1,n&&(this._subscribe=n)}lift(n){const r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){const{operator:i}=this,s=function(e,t,n){if(e){if(e instanceof rt)return e;if(e[bi])return e[bi]()}return e||t||n?new rt(e,t,n):new rt(Ei)}(n,r,o);if(s.add(i?i.call(s,this.source):this.source||ue.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),ue.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s}_trySubscribe(n){try{return this._subscribe(n)}catch(r){ue.useDeprecatedSynchronousErrorHandling&&(n.syncErrorThrown=!0,n.syncErrorValue=r),function(e){for(;e;){const{closed:t,destination:n,isStopped:r}=e;if(t||r)return!1;e=n&&n instanceof rt?n:null}return!0}(n)?n.error(r):console.warn(r)}}forEach(n,r){return new(r=bd(r))((o,i)=>{let s;s=this.subscribe(a=>{try{n(a)}catch(u){i(u),s&&s.unsubscribe()}},i,o)})}_subscribe(n){const{source:r}=this;return r&&r.subscribe(n)}[oo](){return this}pipe(...n){return 0===n.length?this:function(e){return 0===e.length?Ed:1===e.length?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}(n)(this)}toPromise(n){return new(n=bd(n))((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function bd(e){if(e||(e=ue.Promise||Promise),!e)throw new Error("no Promise impl found");return e}const io=(()=>{function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e})();class KD extends ge{constructor(t,n){super(),this.subject=t,this.subscriber=n,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const t=this.subject,n=t.observers;if(this.subject=null,!n||0===n.length||t.isStopped||t.closed)return;const r=n.indexOf(this.subscriber);-1!==r&&n.splice(r,1)}}class wd extends rt{constructor(t){super(t),this.destination=t}}let Ea=(()=>{class e extends Ge{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[bi](){return new wd(this)}lift(n){const r=new Md(this,this);return r.operator=n,r}next(n){if(this.closed)throw new io;if(!this.isStopped){const{observers:r}=this,o=r.length,i=r.slice();for(let s=0;s<o;s++)i[s].next(n)}}error(n){if(this.closed)throw new io;this.hasError=!0,this.thrownError=n,this.isStopped=!0;const{observers:r}=this,o=r.length,i=r.slice();for(let s=0;s<o;s++)i[s].error(n);this.observers.length=0}complete(){if(this.closed)throw new io;this.isStopped=!0;const{observers:n}=this,r=n.length,o=n.slice();for(let i=0;i<r;i++)o[i].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(n){if(this.closed)throw new io;return super._trySubscribe(n)}_subscribe(n){if(this.closed)throw new io;return this.hasError?(n.error(this.thrownError),ge.EMPTY):this.isStopped?(n.complete(),ge.EMPTY):(this.observers.push(n),new KD(this,n))}asObservable(){const n=new Ge;return n.source=this,n}}return e.create=(t,n)=>new Md(t,n),e})();class Md extends Ea{constructor(t,n){super(),this.destination=t,this.source=n}next(t){const{destination:n}=this;n&&n.next&&n.next(t)}error(t){const{destination:n}=this;n&&n.error&&this.destination.error(t)}complete(){const{destination:t}=this;t&&t.complete&&this.destination.complete()}_subscribe(t){const{source:n}=this;return n?this.source.subscribe(t):ge.EMPTY}}function va(e,t){return function(r){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new ZD(e,t))}}class ZD{constructor(t,n){this.project=t,this.thisArg=n}call(t,n){return n.subscribe(new JD(t,this.project,this.thisArg))}}class JD extends rt{constructor(t,n,r){super(t),this.project=n,this.count=0,this.thisArg=r||this}_next(t){let n;try{n=this.project.call(this.thisArg,t,this.count++)}catch(r){return void this.destination.error(r)}this.destination.next(n)}}const Id=e=>t=>{for(let n=0,r=e.length;n<r&&!t.closed;n++)t.next(e[n]);t.complete()},wi="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator",Ad=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function Td(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}const Sd=e=>{if(e&&"function"==typeof e[oo])return(e=>t=>{const n=e[oo]();if("function"!=typeof n.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return n.subscribe(t)})(e);if(Ad(e))return Id(e);if(Td(e))return(e=>t=>(e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,gn),t))(e);if(e&&"function"==typeof e[wi])return(e=>t=>{const n=e[wi]();for(;;){let r;try{r=n.next()}catch(o){return t.error(o),t}if(r.done){t.complete();break}if(t.next(r.value),t.closed)break}return"function"==typeof n.return&&t.add(()=>{n.return&&n.return()}),t})(e);{const n=`You provided ${Ca(e)?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;throw new TypeError(n)}};function Nd(e,t){return new Ge(n=>{const r=new ge;let o=0;return r.add(t.schedule(function(){o!==e.length?(n.next(e[o++]),n.closed||r.add(this.schedule())):n.complete()})),r})}function ba(e,t){return t?function(e,t){if(null!=e){if(function(e){return e&&"function"==typeof e[oo]}(e))return function(e,t){return new Ge(n=>{const r=new ge;return r.add(t.schedule(()=>{const o=e[oo]();r.add(o.subscribe({next(i){r.add(t.schedule(()=>n.next(i)))},error(i){r.add(t.schedule(()=>n.error(i)))},complete(){r.add(t.schedule(()=>n.complete()))}}))})),r})}(e,t);if(Td(e))return function(e,t){return new Ge(n=>{const r=new ge;return r.add(t.schedule(()=>e.then(o=>{r.add(t.schedule(()=>{n.next(o),r.add(t.schedule(()=>n.complete()))}))},o=>{r.add(t.schedule(()=>n.error(o)))}))),r})}(e,t);if(Ad(e))return Nd(e,t);if(function(e){return e&&"function"==typeof e[wi]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return new Ge(n=>{const r=new ge;let o;return r.add(()=>{o&&"function"==typeof o.return&&o.return()}),r.add(t.schedule(()=>{o=e[wi](),r.add(t.schedule(function(){if(n.closed)return;let i,s;try{const a=o.next();i=a.value,s=a.done}catch(a){return void n.error(a)}s?n.complete():(n.next(i),this.schedule())}))})),r})}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}(e,t):e instanceof Ge?e:new Ge(Sd(e))}class lC extends rt{constructor(t){super(),this.parent=t}_next(t){this.parent.notifyNext(t)}_error(t){this.parent.notifyError(t),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class cC extends rt{notifyNext(t){this.destination.next(t)}notifyError(t){this.destination.error(t)}notifyComplete(){this.destination.complete()}}function xd(e,t,n=Number.POSITIVE_INFINITY){return"function"==typeof t?r=>r.pipe(xd((o,i)=>ba(e(o,i)).pipe(va((s,a)=>t(o,s,i,a))),n)):("number"==typeof t&&(n=t),r=>r.lift(new fC(e,n)))}class fC{constructor(t,n=Number.POSITIVE_INFINITY){this.project=t,this.concurrent=n}call(t,n){return n.subscribe(new hC(t,this.project,this.concurrent))}}class hC extends cC{constructor(t,n,r=Number.POSITIVE_INFINITY){super(t),this.project=n,this.concurrent=r,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)}_tryNext(t){let n;const r=this.index++;try{n=this.project(t,r)}catch(o){return void this.destination.error(o)}this.active++,this._innerSub(n)}_innerSub(t){const n=new lC(this),r=this.destination;r.add(n);const o=function(e,t){if(t.closed)return;if(e instanceof Ge)return e.subscribe(t);let n;try{n=Sd(e)(t)}catch(r){t.error(r)}return n}(t,n);o!==n&&r.add(o)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(t){this.destination.next(t)}notifyComplete(){const t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}function pC(e=Number.POSITIVE_INFINITY){return xd(Ed,e)}function Fd(){return function(t){return t.lift(new _C(t))}}class _C{constructor(t){this.connectable=t}call(t,n){const{connectable:r}=this;r._refCount++;const o=new yC(t,r),i=n.subscribe(o);return o.closed||(o.connection=r.connect()),i}}class yC extends rt{constructor(t,n){super(t),this.connectable=n}_unsubscribe(){const{connectable:t}=this;if(!t)return void(this.connection=null);this.connectable=null;const n=t._refCount;if(n<=0)return void(this.connection=null);if(t._refCount=n-1,n>1)return void(this.connection=null);const{connection:r}=this,o=t._connection;this.connection=null,o&&(!r||o===r)&&o.unsubscribe()}}class DC extends Ge{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._refCount=0,this._isComplete=!1}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}connect(){let t=this._connection;return t||(this._isComplete=!1,t=this._connection=new ge,t.add(this.source.subscribe(new EC(this.getSubject(),this))),t.closed&&(this._connection=null,t=ge.EMPTY)),t}refCount(){return Fd()(this)}}const CC=(()=>{const e=DC.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:e._subscribe},_isComplete:{value:e._isComplete,writable:!0},getSubject:{value:e.getSubject},connect:{value:e.connect},refCount:{value:e.refCount}}})();class EC extends wd{constructor(t,n){super(t),this.connectable=n}_error(t){this._unsubscribe(),super._error(t)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const t=this.connectable;if(t){this.connectable=null;const n=t._connection;t._refCount=0,t._subject=null,t._connection=null,n&&n.unsubscribe()}}}function MC(){return new Ea}
/**
       * @license Angular v13.0.1
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function K(e){for(let t in e)if(e[t]===K)return t;throw Error("Could not find renamed property on target object.")}function wa(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function B(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(B).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function Ma(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const AC=K({__forward_ref__:K});function X(e){return e.__forward_ref__=X,e.toString=function(){return B(this())},e}function I(e){return Rd(e)?e():e}function Rd(e){return"function"==typeof e&&e.hasOwnProperty(AC)&&e.__forward_ref__===X}
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
class Fn extends Error{constructor(t,n){super(function(e,t){return`${e?`NG0${e}: `:""}${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,n)),this.code=t}}function P(e){return"string"==typeof e?e:null==e?"":String(e)}function We(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():P(e)}function Mi(e,t){const n=t?` in ${t}`:"";throw new Fn("201",`No provider for ${We(e)} found${n}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function it(e,t){null==e&&function(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function q(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function At(e){return{providers:e.providers||[],imports:e.imports||[]}}function rn(e){return Pd(e,Ii)||Pd(e,Vd)}function Pd(e,t){return e.hasOwnProperty(t)?e[t]:null}function Od(e){return e&&(e.hasOwnProperty(Aa)||e.hasOwnProperty(PC))?e[Aa]:null}const Ii=K({\u0275prov:K}),Aa=K({\u0275inj:K}),Vd=K({ngInjectableDef:K}),PC=K({ngInjectorDef:K});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var S=(()=>((S=S||{})[S.Default=0]="Default",S[S.Host=1]="Host",S[S.Self=2]="Self",S[S.SkipSelf=4]="SkipSelf",S[S.Optional=8]="Optional",S))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ta;function mn(e){const t=Ta;return Ta=e,t}function kd(e,t,n){const r=rn(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&S.Optional?null:void 0!==t?t:void Mi(B(e),"Injector")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function _n(e){return{toString:e}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var gt=(()=>((gt=gt||{})[gt.OnPush=0]="OnPush",gt[gt.Default=1]="Default",gt))(),st=(()=>(function(e){e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom"}(st||(st={})),st))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const VC="undefined"!=typeof globalThis&&globalThis,kC="undefined"!=typeof window&&window,LC="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Q=VC||"undefined"!=typeof global&&global||kC||LC,tr={},Z=[],Ai=K({\u0275cmp:K}),Sa=K({\u0275dir:K}),Na=K({\u0275pipe:K}),Ld=K({\u0275mod:K}),on=K({\u0275fac:K}),so=K({__NG_ELEMENT_ID__:K});
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
let BC=0;function Ti(e){return _n(()=>{const n={},r={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===gt.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||Z,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||st.Emulated,id:"c",styles:e.styles||Z,_:null,setInput:null,schemas:e.schemas||null,tView:null},o=e.directives,i=e.features,s=e.pipes;return r.id+=BC++,r.inputs=$d(e.inputs,n),r.outputs=$d(e.outputs),i&&i.forEach(a=>a(r)),r.directiveDefs=o?()=>("function"==typeof o?o():o).map(Bd):null,r.pipeDefs=s?()=>("function"==typeof s?s():s).map(jd):null,r})}function Bd(e){return Pe(e)||function(e){return e[Sa]||null}(e)}function jd(e){return function(e){return e[Na]||null}(e)}const Hd={};function sn(e){return _n(()=>{const t={type:e.type,bootstrap:e.bootstrap||Z,declarations:e.declarations||Z,imports:e.imports||Z,exports:e.exports||Z,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&(Hd[e.id]=e.type),t})}function $d(e,t){if(null==e)return tr;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const O=Ti;function Pe(e){return e[Ai]||null}function mt(e,t){const n=e[Ld]||null;if(!n&&!0===t)throw new Error(`Type ${B(e)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const k=11;
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
function Ut(e){return Array.isArray(e)&&"object"==typeof e[1]}function St(e){return Array.isArray(e)&&!0===e[1]}function Ra(e){return 0!=(8&e.flags)}function Fi(e){return 2==(2&e.flags)}function Ri(e){return 1==(1&e.flags)}function Nt(e){return null!==e.template}function WC(e){return 0!=(512&e[2])}
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
function kn(e,t){return e.hasOwnProperty(on)?e[on]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Gd{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function tt(){return Wd}function Wd(e){return e.type.prototype.ngOnChanges&&(e.setInput=KC),zC}function zC(){const e=Qd(this),t=null==e?void 0:e.current;if(t){const n=e.previous;if(n===tr)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function KC(e,t,n,r){const o=Qd(e)||function(e,t){return e[qd]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:tr,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],u=s[a];i[a]=new Gd(u&&u.currentValue,t,s===tr),e[r]=t}tt.ngInherit=!0;const qd="__ngSimpleChanges__";function Qd(e){return e[qd]||null}const zd="http://www.w3.org/2000/svg";
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
let Va;function de(e){return!!e.listen}const Yd={createRenderer:(e,t)=>void 0!==Va?Va:"undefined"!=typeof document?document:void 0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ye(e){for(;Array.isArray(e);)e=e[0];return e}function Pi(e,t){return ye(t[e])}function Dt(e,t){return ye(t[e.index])}function La(e,t){return e.data[t]}function ut(e,t){const n=t[e];return Ut(n)?n:n[0]}function Zd(e){return 4==(4&e[2])}function Ba(e){return 128==(128&e[2])}function Dn(e,t){return null==t?null:e[t]}function Jd(e){e[18]=0}function ja(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const x={lFrame:af(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function Xd(){return x.bindingsEnabled}function y(){return x.lFrame.lView}function W(){return x.lFrame.tView}function ve(){let e=ef();for(;null!==e&&64===e.type;)e=e.parent;return e}function ef(){return x.lFrame.currentTNode}function Gt(e,t){const n=x.lFrame;n.currentTNode=e,n.isParent=t}function Ha(){return x.lFrame.isParent}function Oi(){return x.isInCheckNoChangesMode}function Vi(e){x.isInCheckNoChangesMode=e}function ar(){return x.lFrame.bindingIndex++}function un(e){const t=x.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function dE(e,t){const n=x.lFrame;n.bindingIndex=n.bindingRootIndex=e,Ua(t)}function Ua(e){x.lFrame.currentDirectiveIndex=e}function rf(){return x.lFrame.currentQueryIndex}function Wa(e){x.lFrame.currentQueryIndex=e}function hE(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function of(e,t,n){if(n&S.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&S.Host||(o=hE(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=x.lFrame=sf();return r.currentTNode=t,r.lView=e,!0}function ki(e){const t=sf(),n=e[1];x.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function sf(){const e=x.lFrame,t=null===e?null:e.child;return null===t?af(e):t}function af(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function uf(){const e=x.lFrame;return x.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const lf=uf;function Li(){const e=uf();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Qe(){return x.lFrame.selectedIndex}function Cn(e){x.lFrame.selectedIndex=e}function fe(){const e=x.lFrame;return La(e.tView,e.selectedIndex)}function qa(){x.lFrame.currentNamespace=zd}function Bi(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:u,ngAfterViewChecked:l,ngOnDestroy:c}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),a&&((e.contentHooks||(e.contentHooks=[])).push(n,a),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,a)),u&&(e.viewHooks||(e.viewHooks=[])).push(-n,u),l&&((e.viewHooks||(e.viewHooks=[])).push(n,l),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,l)),null!=c&&(e.destroyHooks||(e.destroyHooks=[])).push(n,c)}}function ji(e,t,n){cf(e,t,3,n)}function Hi(e,t,n,r){(3&e[2])===n&&cf(e,t,n,r)}function Qa(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function cf(e,t,n,r){const i=null!=r?r:-1,s=t.length-1;let a=0;for(let u=void 0!==r?65535&e[18]:0;u<s;u++)if("number"==typeof t[u+1]){if(a=t[u],null!=r&&a>=r)break}else t[u]<0&&(e[18]+=65536),(a<i||-1==i)&&(EE(e,n,t,u),e[18]=(4294901760&e[18])+u+2),u++}function EE(e,t,n,r){const o=n[r]<0,i=n[r+1],a=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(a)}finally{}}}else try{i.call(a)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class fo{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function $i(e,t,n){const r=de(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],a=n[o++],u=n[o++];r?e.setAttribute(t,a,u,s):t.setAttributeNS(s,a,u)}else{const s=i,a=n[++o];Ka(s)?r&&e.setProperty(t,s,a):r?e.setAttribute(t,s,a):t.setAttribute(s,a),o++}}return o}function df(e){return 3===e||4===e||6===e}function Ka(e){return 64===e.charCodeAt(0)}function Ui(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||ff(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function ff(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const a=e[i++];if("number"==typeof a){if(a===t){s=-1;break}if(a>t){s=i-1;break}}}for(;i<e.length;){const a=e[i];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function hf(e){return-1!==e}function ur(e){return 32767&e}function lr(e,t){let n=function(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ya=!0;function Gi(e){const t=Ya;return Ya=e,t}let AE=0;function po(e,t){const n=Ja(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Za(r.data,e),Za(t,null),Za(r.blueprint,null));const o=Wi(e,t),i=e.injectorIndex;if(hf(o)){const s=ur(o),a=lr(o,t),u=a[1].data;for(let l=0;l<8;l++)t[i+l]=a[s+l]|u[s+l]}return t[i+8]=o,i}function Za(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Ja(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function Wi(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){const i=o[1],s=i.type;if(r=2===s?i.declTNode:1===s?o[6]:null,null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function qi(e,t,n){!function(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(so)&&(r=n[so]),null==r&&(r=n[so]=AE++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function mf(e,t,n){if(n&S.Optional)return e;Mi(t,"NodeInjector")}function _f(e,t,n,r){if(n&S.Optional&&void 0===r&&(r=null),0==(n&(S.Self|S.Host))){const o=e[9],i=mn(void 0);try{return o?o.get(t,r,n&S.Optional):kd(t,r,n&S.Optional)}finally{mn(i)}}return mf(r,t,n)}function yf(e,t,n,r=S.Default,o){if(null!==e){const i=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(so)?e[so]:void 0;return"number"==typeof t?t>=0?255&t:NE:t}(n);if("function"==typeof i){if(!of(t,e,r))return r&S.Host?mf(o,n,r):_f(t,n,r,o);try{const s=i(r);if(null!=s||r&S.Optional)return s;Mi(n)}finally{lf()}}else if("number"==typeof i){let s=null,a=Ja(e,t),u=-1,l=r&S.Host?t[16][6]:null;for((-1===a||r&S.SkipSelf)&&(u=-1===a?Wi(e,t):t[a+8],-1!==u&&Ef(r,!1)?(s=t[1],a=ur(u),t=lr(u,t)):a=-1);-1!==a;){const c=t[1];if(Cf(i,a,c.data)){const d=xE(a,t,n,s,r,l);if(d!==Df)return d}u=t[a+8],-1!==u&&Ef(r,t[1].data[a+8]===l)&&Cf(i,a,t)?(s=c,a=ur(u),t=lr(u,t)):a=-1}}}return _f(t,n,r,o)}const Df={};function NE(){return new cr(ve(),y())}function xE(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],c=Qi(a,s,n,null==r?Fi(a)&&Ya:r!=s&&0!=(3&a.type),o&S.Host&&i===a);return null!==c?go(t,s,c,a):Df}function Qi(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=1048575&i,u=e.directiveStart,c=i>>20,f=o?a+c:e.directiveEnd;for(let h=r?a:a+c;h<f;h++){const p=s[h];if(h<u&&n===p||h>=u&&p.type===n)return h}if(o){const h=s[u];if(h&&Nt(h)&&h.type===n)return u}return null}function go(e,t,n,r){let o=e[n];const i=t.data;if(function(e){return e instanceof fo}(o)){const s=o;s.resolving&&function(e,t){throw new Fn("200",`Circular dependency in DI detected for ${e}`)}(We(i[n]));const a=Gi(s.canSeeViewProviders);s.resolving=!0;const u=s.injectImpl?mn(s.injectImpl):null;of(e,r,S.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=Wd(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==u&&mn(u),Gi(a),s.resolving=!1,lf()}}return o}function Cf(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function Ef(e,t){return!(e&S.Self||e&S.Host&&t)}class cr{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return yf(this._tNode,this._lView,t,r,n)}}function lt(e){return _n(()=>{const t=e.prototype.constructor,n=t[on]||Xa(t),r=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){const i=o[on]||Xa(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function Xa(e){return Rd(e)?()=>{const t=Xa(I(e));return t&&t()}:kn(e)}
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
const fr="__parameters__";function Ln(e,t,n){return _n(()=>{const r=function(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return a.annotation=s,a;function a(u,l,c){const d=u.hasOwnProperty(fr)?u[fr]:Object.defineProperty(u,fr,{value:[]})[fr];for(;d.length<=c;)d.push(null);return(d[c]=d[c]||[]).push(s),u}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class U{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=q({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ct(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),Ct(r,t)):t!==e&&t.push(r)}return t}function Wt(e,t){e.forEach(n=>Array.isArray(n)?Wt(n,t):t(n))}function zi(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Bn(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function ct(e,t,n){let r=pr(e,t);return r>=0?e[1|r]=n:(r=~r,function(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function ru(e,t){const n=pr(e,t);if(n>=0)return e[1|n]}function pr(e,t){return function(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,t,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Co={},iu="__NG_DI_FLAG__",gr="ngTempTokenPath",GE=/\n/gm,su="__source",au=K({provide:String,useValue:K});let Eo;function mr(e){const t=Eo;return Eo=e,t}function qE(e,t=S.Default){if(void 0===Eo)throw new Error("inject() must be called from an injection context");return null===Eo?kd(e,void 0,t):Eo.get(e,t&S.Optional?null:void 0,t)}function G(e,t=S.Default){return(Ta||qE)(I(e),t)}function jn(e){const t=[];for(let n=0;n<e.length;n++){const r=I(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let o,i=S.Default;for(let s=0;s<r.length;s++){const a=r[s],u=QE(a);"number"==typeof u?-1===u?o=a.token:i|=u:o=a}t.push(G(o,i))}else t.push(G(r))}return t}function vo(e,t){return e[iu]=t,e.prototype[iu]=t,e}function QE(e){return e[iu]}function If(e,t,n,r){const o=e[gr];throw t[su]&&o.unshift(t[su]),e.message=function(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let o=B(t);if(Array.isArray(t))o=t.map(B).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+("string"==typeof a?JSON.stringify(a):B(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(GE,"\n  ")}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */("\n"+e.message,o,n,r),e.ngTokenPath=o,e[gr]=null,e}const bo=vo(Ln("Inject",e=>({token:e})),-1),qt=vo(Ln("Optional"),8),Hn=vo(Ln("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const qf="__ngContext__";function Ve(e,t){e[qf]=t}function mu(e){const t=function(e){return e[qf]||null}(e);return t?Array.isArray(t)?t:t.lView:null}function ts(e){return e.ngOriginalError}function jv(e,...t){e.error(...t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Un{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t),r=this._findContext(t),o=function(e){return e&&e.ngErrorLogger||jv}(t);o(this._console,"ERROR",t),n&&o(this._console,"ORIGINAL ERROR",n),r&&o(this._console,"ERROR CONTEXT",r)}_findContext(t){return t?function(e){return e.ngDebugContext}(t)||this._findContext(ts(t)):null}_findOriginalError(t){let n=t&&ts(t);for(;n&&ts(n);)n=ts(n);return n||null}}
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
const th=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(Q))();function Kt(e){return e instanceof Function?e():e}
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
var ft=(()=>((ft=ft||{})[ft.Important=1]="Important",ft[ft.DashCase=2]="DashCase",ft))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Du(e,t){return undefined(e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function So(e){const t=e[3];return St(t)?t[3]:t}function Cu(e){return sh(e[13])}function Eu(e){return sh(e[4])}function sh(e){for(;null!==e&&!St(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Cr(e,t,n,r,o){if(null!=r){let i,s=!1;St(r)?i=r:Ut(r)&&(s=!0,r=r[0]);const a=ye(r);0===e&&null!==n?null==o?fh(t,n,a):Gn(t,n,a,o||null,!0):1===e&&null!==n?Gn(t,n,a,o||null,!0):2===e?function(e,t,n){const r=rs(e,t);r&&function(e,t,n,r){de(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=i&&function(e,t,n,r,o){const i=n[7];i!==ye(n)&&Cr(t,e,r,i,o);for(let a=10;a<n.length;a++){const u=n[a];No(u[1],u,e,t,r,i)}}(t,e,i,n,o)}}function bu(e,t,n){return de(e)?e.createElement(t,n):null===n?e.createElement(t):e.createElementNS(n,t)}function uh(e,t){const n=e[9],r=n.indexOf(t),o=t[3];1024&t[2]&&(t[2]&=-1025,ja(o,-1)),n.splice(r,1)}function wu(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&uh(o,r),t>0&&(e[n-1][4]=r[4]);const i=Bn(e,10+t);!function(e,t){No(e,t,t[k],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}return r}function lh(e,t){if(!(256&t[2])){const n=t[k];de(n)&&n.destroyNode&&No(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return Mu(e[1],e);for(;t;){let n=null;if(Ut(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)Ut(t)&&Mu(t[1],t),t=t[3];null===t&&(t=e),Ut(t)&&Mu(t[1],t),n=t&&t[4]}t=n}}(t)}}function Mu(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof fo)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const a=o[i[s]],u=i[s+1];try{u.call(a)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],a="function"==typeof s?s(t):ye(t[s]),u=r[o=n[i+2]],l=n[i+3];"boolean"==typeof l?a.removeEventListener(n[i],u,l):l>=0?r[o=l]():r[o=-l].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)r[i]();t[7]=null}}(e,t),1===t[1].type&&de(t[k])&&t[k].destroy();const n=t[17];if(null!==n&&St(t[3])){n!==t[3]&&uh(n,t);const r=t[19];null!==r&&r.detachView(e)}}}function ch(e,t,n){return function(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===st.None||o===st.Emulated)return null}return Dt(r,n)}(e,t.parent,n)}function Gn(e,t,n,r,o){de(e)?e.insertBefore(t,n,r,o):t.insertBefore(n,r,o)}function fh(e,t,n){de(e)?e.appendChild(t,n):t.appendChild(n)}function hh(e,t,n,r,o){null!==r?Gn(e,t,n,r,o):fh(e,t,n)}function rs(e,t){return de(e)?e.parentNode(t):t.parentNode}let mh=function(e,t,n){return 40&e.type?Dt(e,n):null};function os(e,t,n,r){const o=ch(e,r,t),i=t[k],a=function(e,t,n){return mh(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let u=0;u<n.length;u++)hh(i,o,n[u],a,!1);else hh(i,o,n,a,!1)}function is(e,t){if(null!==t){const n=t.type;if(3&n)return Dt(t,e);if(4&n)return Au(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return is(e,r);{const o=e[t.index];return St(o)?Au(-1,o):ye(o)}}if(32&n)return Du(t,e)()||ye(e[t.index]);{const r=yh(e,t);return null!==r?Array.isArray(r)?r[0]:is(So(e[16]),r):is(e,t.next)}}return null}function yh(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Au(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return is(r,o)}return t[7]}function Tu(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],u=n.type;if(s&&0===t&&(a&&Ve(ye(a),r),n.flags|=4),64!=(64&n.flags))if(8&u)Tu(e,t,n.child,r,o,i,!1),Cr(t,e,o,a,i);else if(32&u){const l=Du(n,r);let c;for(;c=l();)Cr(t,e,o,c,i);Cr(t,e,o,a,i)}else 16&u?Ch(e,t,r,n,o,i):Cr(t,e,o,a,i);n=s?n.projectionNext:n.next}}function No(e,t,n,r,o,i){Tu(n,r,e.firstChild,t,o,i,!1)}function Ch(e,t,n,r,o,i){const s=n[16],u=s[6].projection[r.projection];if(Array.isArray(u))for(let l=0;l<u.length;l++)Cr(t,e,o,u[l],i);else Tu(e,t,u,s[3],o,i,!0)}function Eh(e,t,n){de(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function Su(e,t,n){de(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function vh(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const bh="ng-template";function fb(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==vh(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function wh(e){return 4===e.type&&e.value!==bh}function hb(e,t,n){return t===(4!==e.type||n?e.value:bh)}function pb(e,t,n){let r=4;const o=e.attrs||[],i=function(e){for(let t=0;t<e.length;t++)if(df(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const u=t[a];if("number"!=typeof u){if(!s)if(4&r){if(r=2|1&r,""!==u&&!hb(e,u,n)||""===u&&1===t.length){if(xt(r))return!1;s=!0}}else{const l=8&r?u:t[++a];if(8&r&&null!==e.attrs){if(!fb(e.attrs,l,n)){if(xt(r))return!1;s=!0}continue}const d=gb(8&r?"class":u,o,wh(e),n);if(-1===d){if(xt(r))return!1;s=!0;continue}if(""!==l){let f;f=d>i?"":o[d+1].toLowerCase();const h=8&r?f:null;if(h&&-1!==vh(h,l,0)||2&r&&l!==f){if(xt(r))return!1;s=!0}}}}else{if(!s&&!xt(r)&&!xt(u))return!1;if(s&&xt(u))continue;s=!1,r=u|1&r}}return xt(r)||s}function xt(e){return 0==(1&e)}function gb(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let a=t[++o];for(;"string"==typeof a;)a=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function Mh(e,t,n=!1){for(let r=0;r<t.length;r++)if(pb(e,t[r],n))return!0;return!1}function Ih(e,t){return e?":not("+t.trim()+")":t}function Cb(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!xt(s)&&(t+=Ih(i,o),o=""),r=s,i=i||!xt(r);n++}return""!==o&&(t+=Ih(i,o)),t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const V={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function he(e){Ah(W(),y(),Qe()+e,Oi())}function Ah(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&ji(t,i,n)}else{const i=e.preOrderHooks;null!==i&&Hi(t,i,0,n)}Cn(n)}
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
function ss(e,t){return e<<17|t<<2}function Ft(e){return e>>17&32767}function Nu(e){return 2|e}function ln(e){return(131068&e)>>2}function xu(e,t){return-131069&e|t<<2}function Fu(e){return 1|e}function Lh(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Wa(o),s.contentQueries(2,t[i],i)}}}function xo(e,t,n,r,o,i,s,a,u,l){const c=t.blueprint.slice();return c[0]=o,c[2]=140|r,Jd(c),c[3]=c[15]=e,c[8]=n,c[10]=s||e&&e[10],c[k]=a||e&&e[k],c[12]=u||e&&e[12]||null,c[9]=l||e&&e[9]||null,c[6]=i,c[16]=2==t.type?e[16]:c,c}function Er(e,t,n,r,o){let i=e.data[t];if(null===i)i=function(e,t,n,r,o){const i=ef(),s=Ha(),u=e.data[t]=function(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=u),null!==i&&(s?null==i.child&&null!==u.parent&&(i.child=u):null===i.next&&(i.next=u)),u}(e,t,n,r,o),x.lFrame.inI18n&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function(){const e=x.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return Gt(i,!0),i}function vr(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Fo(e,t,n){ki(t);try{const r=e.viewQuery;null!==r&&Yu(1,r,n);const o=e.template;null!==o&&Bh(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Lh(e,t),e.staticViewQueries&&Yu(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)nw(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,Li()}}function br(e,t,n,r){const o=t[2];if(256==(256&o))return;ki(t);const i=Oi();try{Jd(t),function(e){x.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Bh(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const l=e.preOrderCheckHooks;null!==l&&ji(t,l,null)}else{const l=e.preOrderHooks;null!==l&&Hi(t,l,0,null),Qa(t,0)}if(function(e){for(let t=Cu(e);null!==t;t=Eu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(1024&o[2])&&ja(i,1),o[2]|=1024}}}(t),function(e){for(let t=Cu(e);null!==t;t=Eu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];Ba(r)&&br(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Lh(e,t),!i)if(s){const l=e.contentCheckHooks;null!==l&&ji(t,l)}else{const l=e.contentHooks;null!==l&&Hi(t,l,1),Qa(t,1)}!function(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)Cn(~o);else{const i=o,s=n[++r],a=n[++r];dE(s,i),a(2,t[i])}}}finally{Cn(-1)}}(e,t);const a=e.components;null!==a&&function(e,t){for(let n=0;n<t.length;n++)tw(e,t[n])}(t,a);const u=e.viewQuery;if(null!==u&&Yu(2,u,r),!i)if(s){const l=e.viewCheckHooks;null!==l&&ji(t,l)}else{const l=e.viewHooks;null!==l&&Hi(t,l,2),Qa(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,ja(t[3],-1))}finally{Li()}}function Vb(e,t,n,r){const o=t[10],i=!Oi(),s=Zd(t);try{i&&!s&&o.begin&&o.begin(),s&&Fo(e,t,r),br(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function Bh(e,t,n,r,o){const i=Qe(),s=2&r;try{Cn(-1),s&&t.length>20&&Ah(e,t,20,Oi()),n(r,o)}finally{Cn(i)}}function $u(e,t,n){!Xd()||(function(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||po(n,t),Ve(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const u=e.data[a],l=Nt(u);l&&Yb(t,n,u);const c=go(t,e,a,n);Ve(c,t),null!==s&&Zb(0,a-o,c,u,0,s),l&&(ut(n.index,t)[8]=c)}}(e,t,n,Dt(n,t)),128==(128&n.flags)&&function(e,t,n){const r=n.directiveStart,o=n.directiveEnd,s=n.index,a=x.lFrame.currentDirectiveIndex;try{Cn(s);for(let u=r;u<o;u++){const l=e.data[u],c=t[u];Ua(u),(null!==l.hostBindings||0!==l.hostVars||null!==l.hostAttrs)&&zh(l,c)}}finally{Cn(-1),Ua(a)}}(e,t,n))}function Uu(e,t,n=Dt){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}function Hh(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=ls(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function ls(e,t,n,r,o,i,s,a,u,l){const c=20+r,d=c+o,f=function(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:V);return n}(c,d),h="function"==typeof l?l():l;return f[1]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:u,consts:h,incompleteFirstPass:!1}}function Gh(e,t,n,r){const o=ep(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&tp(e).push(r,o.length-1))}function Wh(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Gu(e,t,n,r){let o=!1;if(Xd()){const i=function(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];Mh(n,s.selectors,!1)&&(o||(o=[]),qi(po(n,t),e,s.type),Nt(s)?(Kh(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Yh(n,e.data.length,i.length);for(let c=0;c<i.length;c++){const d=i[c];d.providersResolver&&d.providersResolver(d)}let a=!1,u=!1,l=vr(e,t,i.length,null);for(let c=0;c<i.length;c++){const d=i[c];n.mergedAttrs=Ui(n.mergedAttrs,d.hostAttrs),Zh(e,n,t,l,d),Kb(l,d,s),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),a=!0),!u&&(f.ngOnChanges||f.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),u=!0),l++}!function(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let a=null,u=null;for(let l=t.directiveStart;l<r;l++){const c=o[l],d=c.inputs,f=null===i||wh(t)?null:Jb(d,i);s.push(f),a=Wh(d,l,a),u=Wh(c.outputs,l,u)}null!==a&&(a.hasOwnProperty("class")&&(t.flags|=16),a.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=a,t.outputs=u}(e,n)}s&&function(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new Fn("301",`Export of name '${t[o+1]}' not found!`);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=Ui(n.mergedAttrs,n.attrs),o}function Qh(e,t,n,r,o,i){const s=i.hostBindings;if(s){let a=e.hostBindingOpCodes;null===a&&(a=e.hostBindingOpCodes=[]);const u=~t.index;(function(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(a)!=u&&a.push(u),a.push(r,o,s)}}function zh(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Kh(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function Kb(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Nt(t)&&(n[""]=e)}}function Yh(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Zh(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=kn(o.type)),s=new fo(i,Nt(o),null);e.blueprint[r]=s,n[r]=s,Qh(e,t,0,r,vr(e,n,o.hostVars,V),o)}function Yb(e,t,n){const r=Dt(t,e),o=Hh(n),i=e[10],s=cs(e,xo(e,o,null,n.onPush?64:16,r,t,i,i.createRenderer(r,n),null,null));e[t.index]=s}function Yt(e,t,n,r,o,i){const s=Dt(e,t);!function(e,t,n,r,o,i,s){if(null==i)de(e)?e.removeAttribute(t,o,n):t.removeAttribute(o);else{const a=null==s?P(i):s(i,r||"",o);de(e)?e.setAttribute(t,o,a,n):n?t.setAttributeNS(n,o,a):t.setAttribute(o,a)}}(t[k],s,i,e.value,n,r,o)}function Zb(e,t,n,r,o,i){const s=i[t];if(null!==s){const a=r.setInput;for(let u=0;u<s.length;){const l=s[u++],c=s[u++],d=s[u++];null!==a?r.setInput(n,d,l,c):n[c]=d}}}function Jb(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Jh(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function tw(e,t){const n=ut(t,e);if(Ba(n)){const r=n[1];80&n[2]?br(r,n,r.template,n[8]):n[5]>0&&qu(n)}}function qu(e){for(let r=Cu(e);null!==r;r=Eu(r))for(let o=10;o<r.length;o++){const i=r[o];if(1024&i[2]){const s=i[1];br(s,i,s.template,i[8])}else i[5]>0&&qu(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=ut(n[r],e);Ba(o)&&o[5]>0&&qu(o)}}function nw(e,t){const n=ut(t,e),r=n[1];(function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),Fo(r,n,n[8])}function cs(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Qu(e){for(;e;){e[2]|=64;const t=So(e);if(WC(e)&&!t)return e;e=t}return null}function Ku(e,t,n){const r=t[10];r.begin&&r.begin();try{br(e,t,e.template,n)}catch(o){throw rp(t,o),o}finally{r.end&&r.end()}}function Xh(e){!function(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=mu(n),o=r[1];Vb(o,r,o.template,n)}}(e[8])}function Yu(e,t,n){Wa(0),t(e,n)}const aw=(()=>Promise.resolve(null))();function ep(e){return e[7]||(e[7]=[])}function tp(e){return e.cleanup||(e.cleanup=[])}function rp(e,t){const n=e[9],r=n?n.get(Un,null):null;r&&r.handleError(t)}function op(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],u=t[s],l=e.data[s];null!==l.setInput?l.setInput(u,o,r,a):u[a]=o}}function cn(e,t,n){const r=Pi(t,e);!function(e,t,n){de(e)?e.setValue(t,n):t.textContent=n}(e[k],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ds(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const a=t[s];"number"==typeof a?i=a:1==i?o=Ma(o,a):2==i&&(r=Ma(r,a+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
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
const Ro=new U("INJECTOR",-1);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ip{get(t,n=Co){if(n===Co){const r=new Error(`NullInjectorError: No provider for ${B(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Po=new U("Set Injector scope."),Oo={},cw={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Zu;function sp(){return void 0===Zu&&(Zu=new ip),Zu}function ap(e,t=null,n=null,r){return new fw(e,n,t||sp(),r)}class fw{constructor(t,n,r,o=null){this.parent=r,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const i=[];n&&Wt(n,a=>this.processProvider(a,t,n)),Wt([t],a=>this.processInjectorType(a,[],i)),this.records.set(Ro,wr(void 0,this));const s=this.records.get(Po);this.scope=null!=s?s.value:null,this.source=o||("object"==typeof t?null:B(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,n=Co,r=S.Default){this.assertNotDestroyed();const o=mr(this),i=mn(void 0);try{if(!(r&S.SkipSelf)){let a=this.records.get(t);if(void 0===a){const u=function(e){return"function"==typeof e||"object"==typeof e&&e instanceof U}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&rn(t);a=u&&this.injectableDefInScope(u)?wr(Ju(t),Oo):null,this.records.set(t,a)}if(null!=a)return this.hydrate(t,a)}return(r&S.Self?sp():this.parent).get(t,n=r&S.Optional&&n===Co?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[gr]=s[gr]||[]).unshift(B(t)),o)throw s;return If(s,t,"R3InjectorError",this.source)}throw s}finally{mn(i),mr(o)}}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((r,o)=>t.push(B(o))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,n,r){if(!(t=I(t)))return!1;let o=Od(t);const i=null==o&&t.ngModule||void 0,s=void 0===i?t:i,a=-1!==r.indexOf(s);if(void 0!==i&&(o=Od(i)),null==o)return!1;if(null!=o.imports&&!a){let c;r.push(s);try{Wt(o.imports,d=>{this.processInjectorType(d,n,r)&&(void 0===c&&(c=[]),c.push(d))})}finally{}if(void 0!==c)for(let d=0;d<c.length;d++){const{ngModule:f,providers:h}=c[d];Wt(h,p=>this.processProvider(p,f,h||Z))}}this.injectorDefTypes.add(s);const u=kn(s)||(()=>new s);this.records.set(s,wr(u,Oo));const l=o.providers;if(null!=l&&!a){const c=t;Wt(l,d=>this.processProvider(d,c,l))}return void 0!==i&&void 0!==t.providers}processProvider(t,n,r){let o=Mr(t=I(t))?t:I(t&&t.provide);const i=function(e,t,n){return lp(e)?wr(void 0,e.useValue):wr(up(e),Oo)}(t);if(Mr(t)||!0!==t.multi)this.records.get(o);else{let s=this.records.get(o);s||(s=wr(void 0,Oo,!0),s.factory=()=>jn(s.multi),this.records.set(o,s)),o=t,s.multi.push(t)}this.records.set(o,i)}hydrate(t,n){return n.value===Oo&&(n.value=cw,n.value=n.factory()),"object"==typeof n.value&&n.value&&function(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this.onDestroy.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=I(t.providedIn);return"string"==typeof n?"any"===n||n===this.scope:this.injectorDefTypes.has(n)}}function Ju(e){const t=rn(e),n=null!==t?t.factory:kn(e);if(null!==n)return n;if(e instanceof U)throw new Error(`Token ${B(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const r=function(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?");throw new Error(`Can't resolve all parameters for ${B(e)}: (${r.join(", ")}).`)}const n=function(e){const t=e&&(e[Ii]||e[Vd]);if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function up(e,t,n){let r;if(Mr(e)){const o=I(e);return kn(o)||Ju(o)}if(lp(e))r=()=>I(e.useValue);else if(function(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...jn(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))r=()=>G(I(e.useExisting));else{const o=I(e&&(e.useClass||e.provide));if(!function(e){return!!e.deps}(e))return kn(o)||Ju(o);r=()=>new o(...jn(e.deps))}return r}function wr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function lp(e){return null!==e&&"object"==typeof e&&au in e}function Mr(e){return"function"==typeof e}const cp=function(e,t,n){return function(e,t=null,n=null,r){const o=ap(e,t,n,r);return o._resolveInjectorDefTypes(),o}({name:n},t,e,n)};let te=(()=>{class e{static create(n,r){return Array.isArray(n)?cp(n,r,""):cp(n.providers,n.parent,n.name||"")}}return e.THROW_IF_NOT_FOUND=Co,e.NULL=new ip,e.\u0275prov=q({token:e,providedIn:"any",factory:()=>G(Ro)}),e.__NG_ELEMENT_ID__=-1,e})();function Rw(e,t){Bi(mu(e)[1],ve())}function ne(e){let t=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const r=[e];for(;t;){let o;if(Nt(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new Error("Directives cannot inherit Components");o=t.\u0275dir}if(o){if(n){r.push(o);const s=e;s.inputs=ol(e.inputs),s.declaredInputs=ol(e.declaredInputs),s.outputs=ol(e.outputs);const a=o.hostBindings;a&&kw(e,a);const u=o.viewQuery,l=o.contentQueries;if(u&&Ow(e,u),l&&Vw(e,l),wa(e.inputs,o.inputs),wa(e.declaredInputs,o.declaredInputs),wa(e.outputs,o.outputs),Nt(o)&&o.data.animation){const c=e.data;c.animation=(c.animation||[]).concat(o.data.animation)}}const i=o.features;if(i)for(let s=0;s<i.length;s++){const a=i[s];a&&a.ngInherit&&a(e),a===ne&&(n=!1)}}t=Object.getPrototypeOf(t)}!function(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=Ui(o.hostAttrs,n=Ui(n,o.hostAttrs))}}(r)}function ol(e){return e===tr?{}:e===Z?[]:e}function Ow(e,t){const n=e.viewQuery;e.viewQuery=n?(r,o)=>{t(r,o),n(r,o)}:t}function Vw(e,t){const n=e.contentQueries;e.contentQueries=n?(r,o,i)=>{t(r,o,i),n(r,o,i)}:t}function kw(e,t){const n=e.hostBindings;e.hostBindings=n?(r,o)=>{t(r,o),n(r,o)}:t}
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
let fs=null;function Ir(){if(!fs){const e=Q.Symbol;if(e&&e.iterator)fs=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(fs=r)}}}return fs}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ko(e){return!!il(e)&&(Array.isArray(e)||!(e instanceof Map)&&Ir()in e)}function il(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ke(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function pt(e,t,n,r){const o=y();return ke(o,ar(),t)&&(W(),Yt(fe(),o,e,t,n,r)),pt}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Sr(e,t,n,r,o,i){const a=function(e,t,n,r){const o=ke(e,t,n);return ke(e,t+1,r)||o}(e,x.lFrame.bindingIndex,n,o);return un(2),a?t+P(n)+r+P(o)+i:V}
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
function C(e,t=S.Default){const n=y();return null===n?G(e,t):yf(ve(),n,I(e),t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function De(e,t,n){const r=y();return ke(r,ar(),t)&&function(e,t,n,r,o,i,s,a){const u=Dt(t,n);let c,l=t.inputs;!a&&null!=l&&(c=l[r])?(op(e,n,c,r,o),Fi(t)&&function(e,t){const n=ut(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):3&t.type&&(r=function(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,de(i)?i.setProperty(u,r,o):Ka(r)||(u.setProperty?u.setProperty(r,o):u[r]=o))}(W(),fe(),r,e,t,r[k],n,!1),De}function cl(e,t,n,r,o){const s=o?"class":"style";op(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function w(e,t,n,r){const o=y(),i=W(),s=20+e,a=o[k],u=o[s]=bu(a,t,x.lFrame.currentNamespace),l=i.firstCreatePass?function(e,t,n,r,o,i,s){const a=t.consts,l=Er(t,e,2,o,Dn(a,i));return Gu(t,n,l,Dn(a,s)),null!==l.attrs&&ds(l,l.attrs,!1),null!==l.mergedAttrs&&ds(l,l.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,l),l}(s,i,o,0,t,n,r):i.data[s];Gt(l,!0);const c=l.mergedAttrs;null!==c&&$i(a,u,c);const d=l.classes;null!==d&&Su(a,u,d);const f=l.styles;null!==f&&Eh(a,u,f),64!=(64&l.flags)&&os(i,o,u,l),0===x.lFrame.elementDepthCount&&Ve(u,o),x.lFrame.elementDepthCount++,Ri(l)&&($u(i,o,l),function(e,t,n){if(Ra(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}(i,l,o)),null!==r&&Uu(o,l)}function M(){let e=ve();Ha()?x.lFrame.isParent=!1:(e=e.parent,Gt(e,!1));const t=e;x.lFrame.elementDepthCount--;const n=W();n.firstCreatePass&&(Bi(n,e),Ra(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function(e){return 0!=(16&e.flags)}(t)&&cl(n,t,y(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&cl(n,t,y(),t.stylesWithoutHost,!1)}function kr(e,t,n,r){w(e,t,n,r),M()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function gs(e){return!!e&&"function"==typeof e.then}const dl=function(e){return!!e&&"function"==typeof e.subscribe};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Y(e,t,n,r){const o=y(),i=W(),s=ve();return function(e,t,n,r,o,i,s,a){const u=Ri(r),c=e.firstCreatePass&&tp(e),d=t[8],f=ep(t);let h=!0;if(3&r.type||a){const g=Dt(r,t),D=a?a(g):g,_=f.length,b=a?A=>a(ye(A[r.index])):r.index;if(de(n)){let A=null;if(!a&&u&&(A=function(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const a=t[7],u=o[i+2];return a.length>u?a[u]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==A)(A.__ngLastListenerFn__||A).__ngNextListenerFn__=i,A.__ngLastListenerFn__=i,h=!1;else{i=fl(r,t,d,i,!1);const j=n.listen(D,o,i);f.push(i,j),c&&c.push(o,b,_,_+1)}}else i=fl(r,t,d,i,!0),D.addEventListener(o,i,s),f.push(i),c&&c.push(o,b,_,s)}else i=fl(r,t,d,i,!1);const p=r.outputs;let m;if(h&&null!==p&&(m=p[o])){const g=m.length;if(g)for(let D=0;D<g;D+=2){const Ie=t[m[D]][m[D+1]].subscribe(i),It=f.length;f.push(i,Ie),c&&c.push(o,r.index,It,-(It+1))}}}(i,o,o[k],s,e,t,!!n,r),Y}function eg(e,t,n,r){try{return!1!==n(r)}catch(o){return rp(e,o),!1}}function fl(e,t,n,r,o){return function i(s){if(s===Function)return r;const a=2&e.flags?ut(e.index,t):t;0==(32&t[2])&&Qu(a);let u=eg(t,0,r,s),l=i.__ngNextListenerFn__;for(;l;)u=eg(t,0,l,s)&&u,l=l.__ngNextListenerFn__;return o&&!1===u&&(s.preventDefault(),s.returnValue=!1),u}}
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
       */function cg(e,t,n,r,o){const i=e[n+1],s=null===t;let a=r?Ft(i):ln(i),u=!1;for(;0!==a&&(!1===u||s);){const c=e[a+1];IM(e[a],t)&&(u=!0,e[a+1]=r?Fu(c):Nu(c)),a=r?Ft(c):ln(c)}u&&(e[n+1]=r?Nu(i):Fu(i))}function IM(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&pr(e,t)>=0}
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
function Bo(e,t,n){return Pt(e,t,n,!1),Bo}function jo(e,t){return Pt(e,t,null,!0),jo}function Pt(e,t,n,r){const o=y(),i=W(),s=un(2);i.firstUpdatePass&&function(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[Qe()],s=function(e,t){return t>=e.expandoStartIndex}(e,n);(function(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(i,r)&&null===t&&!s&&(t=!1),t=function(e,t,n,r){const o=function(e){const t=x.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=Ho(n=pl(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=pl(o,e,t,n,r),null===i){let u=function(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==ln(r))return e[Ft(r)]}(e,t,r);void 0!==u&&Array.isArray(u)&&(u=pl(null,e,t,u[1],r),u=Ho(u,t.attrs,r),function(e,t,n,r){e[Ft(n?t.classBindings:t.styleBindings)]=r}(e,t,r,u))}else i=function(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=Ho(r,e[i].hostAttrs,n);return Ho(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=Ft(s),u=ln(s);e[r]=n;let c,l=!1;if(Array.isArray(n)){const d=n;c=d[1],(null===c||pr(d,c)>0)&&(l=!0)}else c=n;if(o)if(0!==u){const f=Ft(e[a+1]);e[r+1]=ss(f,a),0!==f&&(e[f+1]=xu(e[f+1],r)),e[a+1]=function(e,t){return 131071&e|t<<17}(e[a+1],r)}else e[r+1]=ss(a,0),0!==a&&(e[a+1]=xu(e[a+1],r)),a=r;else e[r+1]=ss(u,0),0===a?a=r:e[u+1]=xu(e[u+1],r),u=r;l&&(e[r+1]=Nu(e[r+1])),cg(e,c,r,!0),cg(e,c,r,!1),function(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&pr(i,t)>=0&&(n[r+1]=Fu(n[r+1]))}(t,c,e,r,i),s=ss(a,u),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(i,e,s,r),t!==V&&ke(o,s,t)&&function(e,t,n,r,o,i,s,a){if(!(3&t.type))return;const u=e.data,l=u[a+1];ms(function(e){return 1==(1&e)}(l)?Eg(u,t,n,o,ln(l),s):void 0)||(ms(i)||function(e){return 2==(2&e)}(l)&&(i=Eg(u,null,n,o,a,s)),function(e,t,n,r,o){const i=de(e);if(t)o?i?e.addClass(n,r):n.classList.add(r):i?e.removeClass(n,r):n.classList.remove(r);else{let s=-1===r.indexOf("-")?void 0:ft.DashCase;if(null==o)i?e.removeStyle(n,r,s):n.style.removeProperty(r);else{const a="string"==typeof o&&o.endsWith("!important");a&&(o=o.slice(0,-10),s|=ft.Important),i?e.setStyle(n,r,o,s):n.style.setProperty(r,o,a?"important":"")}}}(r,s,Pi(Qe(),n),o,i))}(i,i.data[Qe()],o,o[k],e,o[s+1]=function(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=B(function(e){return e instanceof
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}?e.changingThisBreaksApplicationSecurity:e}(e)))),e}(t,n),r,s)}function pl(e,t,n,r,o){let i=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(i=t[a],r=Ho(r,i.hostAttrs,o),i!==e);)a++;return null!==e&&(n.directiveStylingLast=a),r}function Ho(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),ct(e,s,!!n||t[++i]))}return void 0===e?null:e}function Eg(e,t,n,r,o,i){const s=null===t;let a;for(;o>0;){const u=e[o],l=Array.isArray(u),c=l?u[1]:u,d=null===c;let f=n[o+1];f===V&&(f=d?Z:void 0);let h=d?ru(f,r):c===r?f:void 0;if(l&&!ms(h)&&(h=ru(u,r)),ms(h)&&(a=h,s))return a;const p=e[o+1];o=s?Ft(p):ln(p)}if(null!==t){let u=i?t.residualClasses:t.residualStyles;null!=u&&(a=ru(u,r))}return a}function ms(e){return void 0!==e}function se(e,t=""){const n=y(),r=W(),o=e+20,i=r.firstCreatePass?Er(r,o,1,t,null):r.data[o],s=n[o]=function(e,t){return de(e)?e.createText(t):e.createTextNode(t)}(n[k],t);os(r,n,s,i),Gt(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gl(e){return ml("",e,""),gl}function ml(e,t,n){const r=y(),o=function(e,t,n,r){return ke(e,ar(),n)?t+P(n)+r:V}(r,e,t,n);return o!==V&&cn(r,Qe(),o),ml}function _l(e,t,n,r,o){const i=y(),s=Sr(i,e,t,n,r,o);return s!==V&&cn(i,Qe(),s),_l}
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
const qn=void 0;var u0=["en",[["a","p"],["AM","PM"],qn],[["AM","PM"],qn,qn],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],qn,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],qn,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",qn,"{1} 'at' {0}",qn],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){const n=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Br={};function $g(e){return e in Br||(Br[e]=Q.ng&&Q.ng.common&&Q.ng.common.locales&&Q.ng.common.locales[e]),Br[e]}var v=(()=>((v=v||{})[v.LocaleId=0]="LocaleId",v[v.DayPeriodsFormat=1]="DayPeriodsFormat",v[v.DayPeriodsStandalone=2]="DayPeriodsStandalone",v[v.DaysFormat=3]="DaysFormat",v[v.DaysStandalone=4]="DaysStandalone",v[v.MonthsFormat=5]="MonthsFormat",v[v.MonthsStandalone=6]="MonthsStandalone",v[v.Eras=7]="Eras",v[v.FirstDayOfWeek=8]="FirstDayOfWeek",v[v.WeekendRange=9]="WeekendRange",v[v.DateFormat=10]="DateFormat",v[v.TimeFormat=11]="TimeFormat",v[v.DateTimeFormat=12]="DateTimeFormat",v[v.NumberSymbols=13]="NumberSymbols",v[v.NumberFormats=14]="NumberFormats",v[v.CurrencyCode=15]="CurrencyCode",v[v.CurrencySymbol=16]="CurrencySymbol",v[v.CurrencyName=17]="CurrencyName",v[v.Currencies=18]="Currencies",v[v.Directionality=19]="Directionality",v[v.PluralCase=20]="PluralCase",v[v.ExtraData=21]="ExtraData",v))();const _s="en-US";
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
let Ug=_s;function Cl(e,t,n,r,o){if(e=I(e),Array.isArray(e))for(let i=0;i<e.length;i++)Cl(e[i],t,n,r,o);else{const i=W(),s=y();let a=Mr(e)?e:I(e.provide),u=up(e);const l=ve(),c=1048575&l.providerIndexes,d=l.directiveStart,f=l.providerIndexes>>20;if(Mr(e)||!e.multi){const h=new fo(u,o,C),p=vl(a,t,o?c:c+f,d);-1===p?(qi(po(l,s),i,a),El(i,e,t.length),t.push(a),l.directiveStart++,l.directiveEnd++,o&&(l.providerIndexes+=1048576),n.push(h),s.push(h)):(n[p]=h,s[p]=h)}else{const h=vl(a,t,c+f,d),p=vl(a,t,c,c+f),m=h>=0&&n[h],g=p>=0&&n[p];if(o&&!g||!o&&!m){qi(po(l,s),i,a);const D=function(e,t,n,r,o){const i=new fo(e,n,C);return i.multi=[],i.index=t,i.componentProviders=0,hm(i,o,r&&!n),i}(o?sI:iI,n.length,o,r,u);!o&&g&&(n[p].providerFactory=D),El(i,e,t.length,0),t.push(a),l.directiveStart++,l.directiveEnd++,o&&(l.providerIndexes+=1048576),n.push(D),s.push(D)}else El(i,e,h>-1?h:p,hm(n[o?p:h],u,!o&&r));!o&&r&&g&&n[p].componentProviders++}}}function El(e,t,n,r){const o=Mr(t);if(o||function(e){return!!e.useClass}(t)){const s=(t.useClass||t).prototype.ngOnDestroy;if(s){const a=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const u=a.indexOf(n);-1===u?a.push(n,[r,s]):a[u+1].push(r,s)}else a.push(n,s)}}}function hm(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function vl(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function iI(e,t,n,r){return bl(this.multi,[])}function sI(e,t,n,r){const o=this.multi;let i;if(this.providerFactory){const s=this.providerFactory.componentProviders,a=go(n,n[1],this.providerFactory.index,r);i=a.slice(0,s),bl(o,i);for(let u=s;u<a.length;u++)i.push(a[u])}else i=[],bl(o,i);return i}function bl(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function ae(e,t=[]){return n=>{n.providersResolver=(r,o)=>
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
function(e,t,n){const r=W();if(r.firstCreatePass){const o=Nt(e);Cl(n,r.data,r.blueprint,o,!0),Cl(t,r.data,r.blueprint,o,!1)}}(r,o?o(e):e,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class pm{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const mm="ngComponent";class lI{resolveComponentFactory(t){throw function(e){const t=Error(`No component factory found for ${B(e)}. Did you add it to @NgModule.entryComponents?`);return t[mm]=e,t}(t)}}let Hr=(()=>{class e{}return e.NULL=new lI,e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function vs(...e){}function $r(e,t){return new Le(Dt(e,t))}const fI=function(){return $r(ve(),y())};let Le=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=fI,e})();function _m(e){return e instanceof Le?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class bs{}let Qn=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>pI(),e})();const pI=function(){const e=y(),n=ut(ve().index,e);return function(e){return e[k]}(Ut(n)?n:e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */;let Ml=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=q({token:e,providedIn:"root",factory:()=>null}),e})();class ws{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const ym=new ws("13.0.1"),Ur={};
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
function Ms(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(ye(i)),St(i))for(let a=10;a<i.length;a++){const u=i[a],l=u[1].firstChild;null!==l&&Ms(u[1],u,l,r)}const s=n.type;if(8&s)Ms(e,t,n.child,r);else if(32&s){const a=Du(n,t);let u;for(;u=a();)r.push(u)}else if(16&s){const a=yh(t,n);if(Array.isArray(a))r.push(...a);else{const u=So(t[16]);Ms(u[1],u,a,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class qo{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return Ms(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(St(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(wu(t,r),Bn(n,r))}this._attachedToViewContainer=!1}lh(this._lView[1],this._lView)}onDestroy(t){Gh(this._lView[1],this._lView,null,t)}markForCheck(){Qu(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Ku(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){Vi(!0);try{Ku(e,t,n)}finally{Vi(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function(e,t){No(e,t,t[k],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class _I extends qo{constructor(t){super(t),this._view=t}detectChanges(){Xh(this._view)}checkNoChanges(){!function(e){Vi(!0);try{Xh(e)}finally{Vi(!1)}}(this._view)}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Dm extends Hr{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=Pe(t);return new Il(n,this.ngModule)}}function Cm(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const DI=new U("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>th});class Il extends pm{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function(e){return e.map(Cb).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return Cm(this.componentDef.inputs)}get outputs(){return Cm(this.componentDef.outputs)}create(t,n,r,o){const i=(o=o||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,Ur,o);return i!==Ur||r===Ur?i:t.get(n,r,o)}}}(t,o.injector):t,s=i.get(bs,Yd),a=i.get(Ml,null),u=s.createRenderer(null,this.componentDef),l=this.componentDef.selectors[0][0]||"div",c=r?function(e,t,n){if(de(e))return e.selectRootElement(t,n===st.ShadowDom);let r="string"==typeof t?e.querySelector(t):t;return r.textContent="",r}(u,r,this.componentDef.encapsulation):bu(s.createRenderer(null,this.componentDef),l,function(e){const t=e.toLowerCase();return"svg"===t?zd:"math"===t?"http://www.w3.org/1998/MathML/":null}(l)),d=this.componentDef.onPush?576:528,f=function(e,t){return{components:[],scheduler:e||th,clean:aw,playerHandler:t||null,flags:0}}(),h=ls(0,null,null,1,0,null,null,null,null,null),p=xo(null,h,f,d,null,null,s,u,a,i);let m,g;ki(p);try{const D=function(e,t,n,r,o,i){const s=n[1];n[20]=e;const u=Er(s,20,2,"#host",null),l=u.mergedAttrs=t.hostAttrs;null!==l&&(ds(u,l,!0),null!==e&&($i(o,e,l),null!==u.classes&&Su(o,e,u.classes),null!==u.styles&&Eh(o,e,u.styles)));const c=r.createRenderer(e,t),d=xo(n,Hh(t),null,t.onPush?64:16,n[20],u,r,c,i||null,null);return s.firstCreatePass&&(qi(po(u,n),s,t.type),Kh(s,u),Yh(u,n.length,1)),cs(n,d),n[20]=d}(c,this.componentDef,p,s,u);if(c)if(r)$i(u,c,["ng-version",ym.full]);else{const{attrs:_,classes:b}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!xt(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);_&&$i(u,c,_),b&&b.length>0&&Su(u,c,b.join(" "))}if(g=La(h,20),void 0!==n){const _=g.projection=[];for(let b=0;b<this.ngContentSelectors.length;b++){const A=n[b];_.push(null!=A?Array.from(A):null)}}m=function(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=ve();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Zh(e,r,t,vr(e,t,1,null),n));const o=go(t,e,r.directiveStart,r);Ve(o,t);const i=Dt(r,t);return i&&Ve(i,t),o}(i,n,t);if(r.components.push(s),e[8]=s,o&&o.forEach(u=>u(s,t)),t.contentQueries){const u=ve();t.contentQueries(1,s,u.directiveStart)}const a=ve();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(Cn(a.index),Qh(n[1],a,0,a.directiveStart,a.directiveEnd,t),zh(t,s)),s}(D,this.componentDef,p,f,[Rw]),Fo(h,p,null)}finally{Li()}return new vI(this.componentType,m,$r(g,p),p,g)}}class vI extends class{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new _I(o),this.componentType=t}get injector(){return new cr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
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
class zn{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Gr=new Map;class vm extends zn{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new Dm(this);const r=mt(t);this._bootstrapComponents=Kt(r.bootstrap),this._r3Injector=ap(t,n,[{provide:zn,useValue:this},{provide:Hr,useValue:this.componentFactoryResolver}],B(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,n=te.THROW_IF_NOT_FOUND,r=S.Default){return t===te||t===zn||t===Ro?this:this._r3Injector.get(t,n,r)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class Tl extends class{}{constructor(t){super(),this.moduleType=t,null!==mt(t)&&function(e){const t=new Set;!function n(r){const o=mt(r,!0),i=o.id;null!==i&&(function(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${B(t)} vs ${B(t.name)}`)}(i,Gr.get(i),r),Gr.set(i,r));const s=Kt(o.imports);for(const a of s)t.has(a)||(t.add(a),n(a))}(e)}(t)}create(t){return new vm(this.moduleType,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Sl(e){return t=>{setTimeout(e,void 0,t)}}const Fe=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class extends Ea{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){var u,l,c;let o=t,i=n||(()=>null),s=r;if(t&&"object"==typeof t){const d=t;o=null==(u=d.next)?void 0:u.bind(d),i=null==(l=d.error)?void 0:l.bind(d),s=null==(c=d.complete)?void 0:c.bind(d)}this.__isAsync&&(i=Sl(i),o&&(o=Sl(o)),s&&(s=Sl(s)));const a=super.subscribe({next:o,error:i,complete:s});return t instanceof ge&&t.add(a),a}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function GI(){return this._results[Ir()]()}class Is{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=Ir(),r=Is.prototype;r[n]||(r[n]=GI)}get changes(){return this._changes||(this._changes=new Fe)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=Ct(t);(this._changesDetected=!function(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}Symbol;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qI=function(){return As(ve(),y())};let fn=(()=>{class e{}return e.__NG_ELEMENT_ID__=qI,e})();const QI=fn,zI=class extends QI{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t){const n=this._declarationTContainer.tViews,r=xo(this._declarationLView,n,t,16,null,n.declTNode,null,null,null,null);r[17]=this._declarationLView[this._declarationTContainer.index];const i=this._declarationLView[19];return null!==i&&(r[19]=i.createEmbeddedView(n)),Fo(n,r,t),new qo(r)}};function As(e,t){return 4&e.type?new zI(t,e,$r(e,t)):null}const ZI=function(){return Nm(ve(),y())};let en=(()=>{class e{}return e.__NG_ELEMENT_ID__=ZI,e})();const XI=en,Tm=class extends XI{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return $r(this._hostTNode,this._hostLView)}get injector(){return new cr(this._hostTNode,this._hostLView)}get parentInjector(){const t=Wi(this._hostTNode,this._hostLView);if(hf(t)){const n=lr(t,this._hostLView),r=ur(t);return new cr(n[1].data[r+8],n)}return new cr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=Sm(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){const o=t.createEmbeddedView(n||{});return this.insert(o,r),o}createComponent(t,n,r,o,i){const s=t&&!function(e){return"function"==typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);let a;if(s)a=n;else{const d=n||{};a=d.index,r=d.injector,o=d.projectableNodes,i=d.ngModuleRef}const u=s?t:new Il(Pe(t)),l=r||this.parentInjector;if(!i&&null==u.ngModule&&l){const d=l.get(zn,null);d&&(i=d)}const c=u.create(l,o,void 0,i);return this.insert(c.hostView,a),c}insert(t,n){const r=t._lView,o=r[1];if(function(e){return St(e[3])}(r)){const c=this.indexOf(t);if(-1!==c)this.detach(c);else{const d=r[3],f=new Tm(d,d[6],d[3]);f.detach(f.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],zi(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const a=t[19];null!==a&&a.insertView(e),t[2]|=128}(o,r,s,i);const a=Au(i,s),u=r[k],l=rs(u,s[7]);return null!==l&&function(e,t,n,r,o,i){r[0]=o,r[6]=t,No(e,r,n,1,o,i)}(o,s[6],u,r,l,a),t.attachToViewContainerRef(),zi(Nl(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=Sm(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=wu(this._lContainer,n);r&&(Bn(Nl(this._lContainer),n),lh(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=wu(this._lContainer,n);return r&&null!=Bn(Nl(this._lContainer),n)?new qo(r):null}_adjustIndex(t,n=0){return null==t?this.length+n:t}};function Sm(e){return e[8]}function Nl(e){return e[8]||(e[8]=[])}function Nm(e,t){let n;const r=t[e.index];if(St(r))n=r;else{let o;if(8&e.type)o=ye(r);else{const i=t[k];o=i.createComment("");const s=Dt(e,t);Gn(i,rs(i,s),o,function(e,t){return de(e)?e.nextSibling(t):t.nextSibling}(i,s),!1)}t[e.index]=n=Jh(r,t,o,e),cs(t,n)}return new Tm(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xl{constructor(t){this.queryList=t,this.matches=null}clone(){return new xl(this.queryList)}setDirty(){this.queryList.setDirty()}}class Fl{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new Fl(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==Lm(t,n).matches&&this.queries[n].setDirty()}}class xm{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class Rl{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Rl(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Pl{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Pl(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,nA(n,i)),this.matchTNodeWithReadOption(t,n,Qi(n,t,i,!1,!1))}else r===fn?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,Qi(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===Le||o===en||o===fn&&4&n.type)this.addMatch(n.index,-2);else{const i=Qi(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function nA(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function oA(e,t,n,r){return-1===n?function(e,t){return 11&e.type?$r(e,t):4&e.type?As(e,t):null}(t,e):-2===n?function(e,t,n){return n===Le?$r(t,e):n===fn?As(t,e):n===en?Nm(t,e):void 0}(e,t,r):go(e,e[1],n,t)}function Fm(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,a=[];for(let u=0;u<s.length;u+=2){const l=s[u];a.push(l<0?null:oA(t,i[l],s[u+1],n.metadata.read))}o.matches=a}return o.matches}function Ol(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=Fm(e,t,o,n);for(let a=0;a<i.length;a+=2){const u=i[a];if(u>0)r.push(s[a/2]);else{const l=i[a+1],c=t[-u];for(let d=10;d<c.length;d++){const f=c[d];f[17]===f[3]&&Ol(f[1],f,l,r)}if(null!==c[9]){const d=c[9];for(let f=0;f<d.length;f++){const h=d[f];Ol(h[1],h,l,r)}}}}}return r}function Rm(e){const t=y(),n=W(),r=rf();Wa(r+1);const o=Lm(n,r);if(e.dirty&&Zd(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Ol(n,t,r,[]):Fm(n,t,o,r);e.reset(i,_m),e.notifyOnChanges()}return!0}return!1}function Pm(e,t,n){const r=W();r.firstCreatePass&&(function(e,t,n){null===e.queries&&(e.queries=new Rl),e.queries.track(new Pl(t,n))}(r,new xm(e,t,n),-1),2==(2&t)&&(r.staticViewQueries=!0)),function(e,t,n){const r=new Is(4==(4&n));Gh(e,t,r,r.destroy),null===t[19]&&(t[19]=new Fl),t[19].queries.push(new xl(r))}(r,y(),t)}function Lm(e,t){return e.queries.getByIndex(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ns=new U("Application Initializer");
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
       */let qr=(()=>{class e{constructor(n){this.appInits=n,this.resolve=vs,this.reject=vs,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(gs(i))n.push(i);else if(dl(i)){const s=new Promise((a,u)=>{i.subscribe({complete:a,error:u})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(G(Ns,8))},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Yo=new U("AppId"),VA={provide:Yo,useFactory:function(){return`${Hl()}${Hl()}${Hl()}`},deps:[]};function Hl(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const n_=new U("Platform Initializer"),$l=new U("Platform ID"),kA=new U("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ul=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Mn=new U("LocaleId"),r_=new U("DefaultCurrencyCode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class BA{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}const Gl=function(e){return new Tl(e)},jA=Gl,HA=function(e){return Promise.resolve(Gl(e))},i_=function(e){const t=Gl(e),r=Kt(mt(e).declarations).reduce((o,i)=>{const s=Pe(i);return s&&o.push(new Il(s)),o},[]);return new BA(t,r)},$A=i_,UA=function(e){return Promise.resolve(i_(e))};let s_=(()=>{class e{constructor(){this.compileModuleSync=jA,this.compileModuleAsync=HA,this.compileModuleAndAllComponentsSync=$A,this.compileModuleAndAllComponentsAsync=UA}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qA=(()=>Promise.resolve(0))();function Wl(e){"undefined"==typeof Zone?qA.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
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
class Se{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Fe(!1),this.onMicrotaskEmpty=new Fe(!1),this.onStable=new Fe(!1),this.onError=new Fe(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function(){let e=Q.requestAnimationFrame,t=Q.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=()=>{!function(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(Q,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Ql(e),e.isCheckStableRunning=!0,ql(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Ql(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{try{return a_(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),u_(e)}},onInvoke:(n,r,o,i,s,a,u)=>{try{return a_(e),n.invoke(o,i,s,a,u)}finally{e.shouldCoalesceRunChangeDetection&&t(),u_(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,Ql(e),ql(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Se.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(Se.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,zA,vs,vs);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const zA={};function ql(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Ql(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function a_(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function u_(e){e._nesting--,ql(e)}class ZA{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Fe,this.onMicrotaskEmpty=new Fe,this.onStable=new Fe,this.onError=new Fe}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let zl=(()=>{class e{constructor(n){this._ngZone=n,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Se.assertNotInAngularZone(),Wl(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Wl(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(G(Se))},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})(),l_=(()=>{class e{constructor(){this._applications=new Map,Kl.addToWindow(this)}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return Kl.findTestabilityInTree(this,n,r)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})();class JA{addToWindow(t){}findTestabilityInTree(t,n,r){return null}}let Kl=new JA,c_=!0,d_=!1;
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
let Vt;const h_=new U("AllowMultipleToken");function p_(e,t,n=[]){const r=`Platform: ${t}`,o=new U(r);return(i=[])=>{let s=g_();if(!s||s.injector.get(h_,!1))if(e)e(n.concat(i).concat({provide:o,useValue:!0}));else{const a=n.concat(i).concat({provide:o,useValue:!0},{provide:Po,useValue:"platform"});!function(e){if(Vt&&!Vt.destroyed&&!Vt.injector.get(h_,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");Vt=e.get(m_);const t=e.get(n_,null);t&&t.forEach(n=>n())}(te.create({providers:a,name:r}))}return function(e){const t=g_();if(!t)throw new Error("No platform exists!");if(!t.injector.get(e,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return t}(o)}}function g_(){return Vt&&!Vt.destroyed?Vt:null}let m_=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const a=function(e,t){let n;return n="noop"===e?new ZA:("zone.js"===e?void 0:e)||new Se({enableLongStackTrace:(d_=!0,c_),shouldCoalesceEventChangeDetection:!!(null==t?void 0:t.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==t?void 0:t.ngZoneRunCoalescing)}),n}(r?r.ngZone:void 0,{ngZoneEventCoalescing:r&&r.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:r&&r.ngZoneRunCoalescing||!1}),u=[{provide:Se,useValue:a}];return a.run(()=>{const l=te.create({providers:u,parent:this.injector,name:n.moduleType.name}),c=n.create(l),d=c.injector.get(Un,null);if(!d)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return a.runOutsideAngular(()=>{const f=a.onError.subscribe({next:h=>{d.handleError(h)}});c.onDestroy(()=>{Yl(this._modules,c),f.unsubscribe()})}),function(e,t,n){try{const r=n();return gs(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(d,a,()=>{const f=c.injector.get(qr);return f.runInitializers(),f.donePromise.then(()=>(function(e){it(e,"Expected localeId to be defined"),"string"==typeof e&&(Ug=e.toLowerCase().replace(/_/g,"-"))}(c.injector.get(Mn,_s)||_s),this._moduleDoBootstrap(c),c))})})}bootstrapModule(n,r=[]){const o=__({},r);return function(e,t,n){const r=new Tl(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(Zo);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new Error(`The module ${B(n.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(G(te))},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})();function __(e,t){return Array.isArray(t)?t.reduce(__,e):Ue(Ue({},e),t)}let Zo=(()=>{class e{constructor(n,r,o,i,s){this._zone=n,this._injector=r,this._exceptionHandler=o,this._componentFactoryResolver=i,this._initStatus=s,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const a=new Ge(l=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{l.next(this._stable),l.complete()})}),u=new Ge(l=>{let c;this._zone.runOutsideAngular(()=>{c=this._zone.onStable.subscribe(()=>{Se.assertNotInAngularZone(),Wl(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,l.next(!0))})})});const d=this._zone.onUnstable.subscribe(()=>{Se.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{l.next(!1)}))});return()=>{c.unsubscribe(),d.unsubscribe()}});this.isStable=function(...e){let t=Number.POSITIVE_INFINITY,n=null,r=e[e.length-1];return function(e){return e&&"function"==typeof e.schedule}(r)?(n=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(t=e.pop())):"number"==typeof r&&(t=e.pop()),null===n&&1===e.length&&e[0]instanceof Ge?e[0]:pC(t)(function(e,t){return t?Nd(e,t):new Ge(Id(e))}(e,n))}(a,u.pipe(e=>Fd()(function(e,t){return function(r){let o;o="function"==typeof e?e:function(){return e};const i=Object.create(r,CC);return i.source=r,i.subjectFactory=o,i}}(MC)(e))))}bootstrap(n,r){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let o;o=n instanceof pm?n:this._componentFactoryResolver.resolveComponentFactory(n),this.componentTypes.push(o.componentType);const i=function(e){return e.isBoundToModule}(o)?void 0:this._injector.get(zn),a=o.create(te.NULL,[],r||o.selector,i),u=a.location.nativeElement,l=a.injector.get(zl,null),c=l&&a.injector.get(l_);return l&&c&&c.registerApplication(u,l),a.onDestroy(()=>{this.detachView(a.hostView),Yl(this.components,a),c&&c.unregisterApplication(u)}),this._loadComponent(a),a}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;Yl(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(kA,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return e.\u0275fac=function(n){return new(n||e)(G(Se),G(te),G(Un),G(Hr),G(qr))},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})();function Yl(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class w_{constructor(){}supports(t){return ko(t)}create(t){return new TT(t)}}const AT=(e,t)=>t;class TT{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||AT}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<I_(r,o,i)?n:r,a=I_(s,o,i),u=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const l=a-o,c=u-o;if(l!=c){for(let f=0;f<l;f++){const h=f<i.length?i[f]:i[f]=0,p=h+f;c<=p&&p<l&&(i[f]=h+1)}i[s.previousIndex]=c-l}}a!==u&&t(s,a,u)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!ko(t))throw new Error(`Error trying to diff '${B(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let a=0;a<this.length;a++)i=t[a],s=this._trackByFn(a,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,a)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,a),r=!0),n=n._next}else o=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[Ir()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,a=>{s=this._trackByFn(o,a),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,a,s,o)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new ST(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new M_),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new M_),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class ST{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class NT{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class M_{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new NT,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function I_(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class A_{constructor(){}supports(t){return t instanceof Map||il(t)}create(){return new xT}}class xT{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||il(t)))throw new Error(`Error trying to diff '${B(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new FT(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class FT{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function T_(){return new Jo([new w_])}let Jo=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||T_()),deps:[[e,new Hn,new qt]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(e){return e.name||typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}'`)}}return e.\u0275prov=q({token:e,providedIn:"root",factory:T_}),e})();function S_(){return new Qr([new A_])}let Qr=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||S_()),deps:[[e,new Hn,new qt]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new Error(`Cannot find a differ supporting object '${n}'`)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=q({token:e,providedIn:"root",factory:S_}),e})();const PT=[new A_],VT=new Jo([new w_]),kT=new Qr(PT),LT=p_(null,"core",[{provide:$l,useValue:"unknown"},{provide:m_,deps:[te]},{provide:l_,deps:[]},{provide:Ul,deps:[]}]),UT=[{provide:Zo,useClass:Zo,deps:[Se,te,Un,Hr,qr]},{provide:DI,deps:[Se],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(n){t.push(n)}}},{provide:qr,useClass:qr,deps:[[new qt,Ns]]},{provide:s_,useClass:s_,deps:[]},VA,{provide:Jo,useFactory:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(){return VT},deps:[]},{provide:Qr,useFactory:function(){return kT},deps:[]},{provide:Mn,useFactory:function(e){return e||"undefined"!=typeof $localize&&$localize.locale||_s},deps:[[new bo(Mn),new qt,new Hn]]},{provide:r_,useValue:"USD"}];
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
       */let WT=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(G(Zo))},e.\u0275mod=sn({type:e}),e.\u0275inj=At({providers:UT}),e})(),Gs=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xn(){return Gs}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const He=new U("DocumentToken");
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
var Ce=(()=>((Ce=Ce||{})[Ce.Zero=0]="Zero",Ce[Ce.One=1]="One",Ce[Ce.Two=2]="Two",Ce[Ce.Few=3]="Few",Ce[Ce.Many=4]="Many",Ce[Ce.Other=5]="Other",Ce))();const Q1=function(e){return function(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e);let n=$g(t);if(n)return n;const r=t.split("-")[0];if(n=$g(r),n)return n;if("en"===r)return u0;throw new Error(`Missing locale data for the locale "${e}".`)}(e)[v.PluralCase]};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ea{}let vN=(()=>{class e extends ea{constructor(n){super(),this.locale=n}getPluralCategory(n,r){switch(Q1(r||this.locale)(n)){case Ce.Zero:return"zero";case Ce.One:return"one";case Ce.Two:return"two";case Ce.Few:return"few";case Ce.Many:return"many";default:return"other"}}}return e.\u0275fac=function(n){return new(n||e)(G(Mn))},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})();
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
class IN{constructor(t,n,r,o){this.$implicit=t,this.ngForOf=n,this.index=r,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let by=(()=>{class e{constructor(n,r,o){this._viewContainer=n,this._template=r,this._differs=o,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;if(!this._differ&&n)try{this._differ=this._differs.find(n).create(this.ngForTrackBy)}catch(r){throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(e){return e.name||typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}'. NgFor only supports binding to Iterables such as Arrays.`)}}if(this._differ){const n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){const r=[];n.forEachOperation((o,i,s)=>{if(null==o.previousIndex){const a=this._viewContainer.createEmbeddedView(this._template,new IN(null,this._ngForOf,-1,-1),null===s?void 0:s),u=new wy(o,a);r.push(u)}else if(null==s)this._viewContainer.remove(null===i?void 0:i);else if(null!==i){const a=this._viewContainer.get(i);this._viewContainer.move(a,s);const u=new wy(o,a);r.push(u)}});for(let o=0;o<r.length;o++)this._perViewChange(r[o].view,r[o].record);for(let o=0,i=this._viewContainer.length;o<i;o++){const s=this._viewContainer.get(o);s.context.index=o,s.context.count=i,s.context.ngForOf=this._ngForOf}n.forEachIdentityChange(o=>{this._viewContainer.get(o.currentIndex).context.$implicit=o.item})}_perViewChange(n,r){n.context.$implicit=r.item}static ngTemplateContextGuard(n,r){return!0}}return e.\u0275fac=function(n){return new(n||e)(C(en),C(fn),C(Jo))},e.\u0275dir=O({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),e})();class wy{constructor(t,n){this.record=t,this.view=n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ay=(()=>{class e{constructor(n,r,o){this._ngEl=n,this._differs=r,this._renderer=o,this._ngStyle=null,this._differ=null}set ngStyle(n){this._ngStyle=n,!this._differ&&n&&(this._differ=this._differs.find(n).create())}ngDoCheck(){if(this._differ){const n=this._differ.diff(this._ngStyle);n&&this._applyChanges(n)}}_setStyle(n,r){const[o,i]=n.split(".");null!=(r=null!=r&&i?`${r}${i}`:r)?this._renderer.setStyle(this._ngEl.nativeElement,o,r):this._renderer.removeStyle(this._ngEl.nativeElement,o)}_applyChanges(n){n.forEachRemovedItem(r=>this._setStyle(r.key,null)),n.forEachAddedItem(r=>this._setStyle(r.key,r.currentValue)),n.forEachChangedItem(r=>this._setStyle(r.key,r.currentValue))}}return e.\u0275fac=function(n){return new(n||e)(C(Le),C(Qr),C(Qn))},e.\u0275dir=O({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}}),e})(),tx=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=sn({type:e}),e.\u0275inj=At({providers:[{provide:ea,useClass:vN}]}),e})();
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
class Vc extends
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
       * @license Angular v13.0.1
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class extends class{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function(e){Gs||(Gs=e)}(new Vc)}onAndCancel(t,n,r){return t.addEventListener(n,r,!1),()=>{t.removeEventListener(n,r,!1)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return(n=n||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return"window"===n?window:"document"===n?t:"body"===n?t.body:null}getBaseHref(t){const n=(fi=fi||document.querySelector("base"),fi?fi.getAttribute("href"):null);return null==n?null:function(e){ta=ta||document.createElement("a"),ta.setAttribute("href",e);const t=ta.pathname;return"/"===t.charAt(0)?t:`/${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}resetBaseElement(){fi=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return function(e,t){t=encodeURIComponent(t);for(const n of e.split(";")){const r=n.indexOf("="),[o,i]=-1==r?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(document.cookie,t)}}let ta,fi=null;const xy=new U("TRANSITION_ID"),dx=[{provide:Ns,useFactory:function(e,t,n){return()=>{n.get(qr).donePromise.then(()=>{const r=Xn(),o=t.querySelectorAll(`style[ng-transition="${e}"]`);for(let i=0;i<o.length;i++)r.remove(o[i])})}},deps:[xy,He,te],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class kc{static init(){!function(e){Kl=e}(new kc)}addToWindow(t){Q.getAngularTestability=(r,o=!0)=>{const i=t.findTestabilityInTree(r,o);if(null==i)throw new Error("Could not find testability for element.");return i},Q.getAllAngularTestabilities=()=>t.getAllTestabilities(),Q.getAllAngularRootElements=()=>t.getAllRootElements(),Q.frameworkStabilizers||(Q.frameworkStabilizers=[]),Q.frameworkStabilizers.push(r=>{const o=Q.getAllAngularTestabilities();let i=o.length,s=!1;const a=function(u){s=s||u,i--,0==i&&r(s)};o.forEach(function(u){u.whenStable(a)})})}findTestabilityInTree(t,n,r){if(null==n)return null;const o=t.getTestability(n);return null!=o?o:r?Xn().isShadowRoot(n)?this.findTestabilityInTree(t,n.host,!0):this.findTestabilityInTree(t,n.parentElement,!0):null}}let fx=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const hi=new U("EventManagerPlugins");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ra=(()=>{class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>o.manager=this),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}addGlobalEventListener(n,r,o){return this._findPluginFor(r).addGlobalEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){const r=this._eventNameToPlugin.get(n);if(r)return r;const o=this._plugins;for(let i=0;i<o.length;i++){const s=o[i];if(s.supports(n))return this._eventNameToPlugin.set(n,s),s}throw new Error(`No event manager plugin found for event ${n}`)}}return e.\u0275fac=function(n){return new(n||e)(G(hi),G(Se))},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})();class Lc{constructor(t){this._doc=t}addGlobalEventListener(t,n,r){const o=Xn().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${n}`);return this.addEventListener(o,n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ry=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(n){const r=new Set;n.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(n){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})(),pi=(()=>{class e extends Ry{constructor(n){super(),this._doc=n,this._hostNodes=new Map,this._hostNodes.set(n.head,[])}_addStylesToHost(n,r,o){n.forEach(i=>{const s=this._doc.createElement("style");s.textContent=i,o.push(r.appendChild(s))})}addHost(n){const r=[];this._addStylesToHost(this._stylesSet,n,r),this._hostNodes.set(n,r)}removeHost(n){const r=this._hostNodes.get(n);r&&r.forEach(Py),this._hostNodes.delete(n)}onStylesAdded(n){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(n,o,r)})}ngOnDestroy(){this._hostNodes.forEach(n=>n.forEach(Py))}}return e.\u0275fac=function(n){return new(n||e)(G(He))},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})();function Py(e){Xn().remove(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Bc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},jc=/%COMP%/g;function oa(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?oa(e,o,n):(o=o.replace(jc,e),n.push(o))}return n}function ky(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let Hc=(()=>{class e{constructor(n,r,o){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new $c(n)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;switch(r.encapsulation){case st.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new Ax(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(n),o}case 1:case st.ShadowDom:return new Tx(this.eventManager,this.sharedStylesHost,n,r);default:if(!this.rendererByCompId.has(r.id)){const o=oa(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(n){return new(n||e)(G(ra),G(pi),G(Yo))},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})();class $c{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,n){return n?document.createElementNS(Bc[n]||n,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,n){t.appendChild(n)}insertBefore(t,n,r){t&&t.insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;const i=Bc[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){const o=Bc[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(ft.DashCase|ft.Important)?t.style.setProperty(n,r,o&ft.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&ft.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t[n]=r}setValue(t,n){t.nodeValue=n}listen(t,n,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,n,ky(r)):this.eventManager.addEventListener(t,n,ky(r))}}class Ax extends $c{constructor(t,n,r,o){super(t),this.component=r;const i=oa(o+"-"+r.id,r.styles,[]);n.addStyles(i),this.contentAttr=function(e){return"_ngcontent-%COMP%".replace(jc,e)}(o+"-"+r.id),this.hostAttr=function(e){return"_nghost-%COMP%".replace(jc,e)}(o+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,n){const r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}}class Tx extends $c{constructor(t,n,r,o){super(t),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const i=oa(o.id,o.styles,[]);for(let s=0;s<i.length;s++){const a=document.createElement("style");a.textContent=i[s],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Sx=(()=>{class e extends Lc{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}}return e.\u0275fac=function(n){return new(n||e)(G(He))},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const jy=["alt","control","meta","shift"],Vx={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Hy={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},kx={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let Lx=(()=>{class e extends Lc{constructor(n){super(n)}supports(n){return null!=e.parseEventName(n)}addEventListener(n,r,o){const i=e.parseEventName(r),s=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Xn().onAndCancel(n,i.domEventName,s))}static parseEventName(n){const r=n.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const i=e._normalizeKey(r.pop());let s="";if(jy.forEach(u=>{const l=r.indexOf(u);l>-1&&(r.splice(l,1),s+=u+".")}),s+=i,0!=r.length||0===i.length)return null;const a={};return a.domEventName=o,a.fullKey=s,a}static getEventFullKey(n){let r="",o=function(e){let t=e.key;if(null==t){if(t=e.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&Hy.hasOwnProperty(t)&&(t=Hy[t]))}return Vx[t]||t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n);return o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),jy.forEach(i=>{i!=o&&kx[i](n)&&(r+=i+".")}),r+=o,r}static eventCallback(n,r,o){return i=>{e.getEventFullKey(i)===n&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return"esc"===n?"escape":n}}return e.\u0275fac=function(n){return new(n||e)(G(He))},e.\u0275prov=q({token:e,factory:e.\u0275fac}),e})();const Gx=[{provide:$l,useValue:"browser"},{provide:n_,useValue:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(){Vc.makeCurrent(),kc.init()},multi:!0},{provide:He,useFactory:function(){return function(e){Va=e}(document),document},deps:[]}],qx=p_(LT,"browser",Gx),Qx=[[],{provide:Po,useValue:"root"},{provide:Un,useFactory:function(){return new Un},deps:[]},{provide:hi,useClass:Sx,multi:!0,deps:[He,Se,$l]},{provide:hi,useClass:Lx,multi:!0,deps:[He]},[],{provide:Hc,useClass:Hc,deps:[ra,pi,Yo]},{provide:bs,useExisting:Hc},{provide:Ry,useExisting:pi},{provide:pi,useClass:pi,deps:[He]},{provide:zl,useClass:zl,deps:[Se]},{provide:ra,useClass:ra,deps:[hi,Se]},{provide:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class{},useClass:fx,deps:[]},[]];let zx=(()=>{class e{constructor(n){if(n)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(n){return{ngModule:e,providers:[{provide:Yo,useValue:n.appId},{provide:xy,useExisting:Yo},dx]}}}return e.\u0275fac=function(n){return new(n||e)(G(e,12))},e.\u0275mod=sn({type:e}),e.\u0275inj=At({providers:Qx,imports:[tx,WT]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ia(e,t){return new Ge(n=>{const r=e.length;if(0===r)return void n.complete();const o=new Array(r);let i=0,s=0;for(let a=0;a<r;a++){const u=ba(e[a]);let l=!1;n.add(u.subscribe({next:c=>{l||(l=!0,s++),o[a]=c},error:c=>n.error(c),complete:()=>{i++,(i===r||!l)&&(s===r&&n.next(t?t.reduce((c,d,f)=>(c[d]=o[f],c),{}):o),n.complete())}}))}})}
/**
       * @license Angular v13.0.1
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */"undefined"!=typeof window&&window;let Uy=(()=>{class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return e.\u0275fac=function(n){return new(n||e)(C(Qn),C(Le))},e.\u0275dir=O({type:e}),e})(),er=(()=>{class e extends Uy{}return e.\u0275fac=function(){let t;return function(r){return(t||(t=lt(e)))(r||e)}}(),e.\u0275dir=O({type:e,features:[ne]}),e})();const tn=new U("NgValueAccessor"),rF={provide:tn,useExisting:X(()=>Qc),multi:!0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Qc=(()=>{class e extends er{writeValue(n){this.setProperty("checked",n)}}return e.\u0275fac=function(){let t;return function(r){return(t||(t=lt(e)))(r||e)}}(),e.\u0275dir=O({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,r){1&n&&Y("change",function(i){return r.onChange(i.target.checked)})("blur",function(){return r.onTouched()})},features:[ae([rF]),ne]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const oF={provide:tn,useExisting:X(()=>sa),multi:!0},sF=new U("CompositionEventMode");let sa=(()=>{class e extends Uy{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const e=Xn()?Xn().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",null==n?"":n)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return e.\u0275fac=function(n){return new(n||e)(C(Qn),C(Le),C(sF,8))},e.\u0275dir=O({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){1&n&&Y("input",function(i){return r._handleInput(i.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(i){return r._compositionEnd(i.target.value)})},features:[ae([oF]),ne]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const $e=new U("NgValidators"),Nn=new U("NgAsyncValidators");function Xy(e){return null!=e}function eD(e){const t=gs(e)?ba(e):e;return dl(t),t}function tD(e){let t={};return e.forEach(n=>{t=null!=n?Ue(Ue({},t),n):t}),0===Object.keys(t).length?null:t}function nD(e,t){return t.map(n=>n(e))}function rD(e){return e.map(t=>function(e){return!e.validate}(t)?t:n=>t.validate(n))}function zc(e){return null!=e?function(e){if(!e)return null;const t=e.filter(Xy);return 0==t.length?null:function(n){return tD(nD(n,t))}}(rD(e)):null}function Kc(e){return null!=e?function(e){if(!e)return null;const t=e.filter(Xy);return 0==t.length?null:function(n){
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
return function(...e){if(1===e.length){const t=e[0];if(Da(t))return ia(t,null);if(Ca(t)&&Object.getPrototypeOf(t)===Object.prototype){const n=Object.keys(t);return ia(n.map(r=>t[r]),n)}}if("function"==typeof e[e.length-1]){const t=e.pop();return ia(e=1===e.length&&Da(e[0])?e[0]:e,null).pipe(va(n=>t(...n)))}return ia(e,null)}(nD(n,t).map(eD)).pipe(va(tD))}}(rD(e)):null}function sD(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function Yc(e){return e?Array.isArray(e)?e:[e]:[]}function aa(e,t){return Array.isArray(e)?e.includes(t):e===t}function lD(e,t){const n=Yc(t);return Yc(e).forEach(o=>{aa(n,o)||n.push(o)}),n}function cD(e,t){return Yc(t).filter(n=>!aa(e,n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class dD{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=zc(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Kc(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,n){return!!this.control&&this.control.hasError(t,n)}getError(t,n){return this.control?this.control.getError(t,n):null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Je extends dD{get formDirective(){return null}get path(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xn extends dD{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class fD{constructor(t){this._cd=t}is(t){var n,r,o;return"submitted"===t?!!(null==(n=this._cd)?void 0:n.submitted):!!(null==(o=null==(r=this._cd)?void 0:r.control)?void 0:o[t])}}let hD=(()=>{class e extends fD{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(C(xn,2))},e.\u0275dir=O({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){2&n&&jo("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[ne]}),e})(),pD=(()=>{class e extends fD{constructor(n){super(n)}}return e.\u0275fac=function(n){return new(n||e)(C(Je,10))},e.\u0275dir=O({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){2&n&&jo("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[ne]}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function mi(e,t){Xc(e,t),t.valueAccessor.writeValue(e.value),function(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&gD(e,t)})}(e,t),function(e,t){const n=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}(e,t),function(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&gD(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function(e,t){if(t.valueAccessor.setDisabledState){const n=r=>{t.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}(e,t)}function da(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function Xc(e,t){const n=function(e){return e._rawValidators}(e);null!==t.validator?e.setValidators(sD(n,t.validator)):"function"==typeof n&&e.setValidators([n]);const r=function(e){return e._rawAsyncValidators}(e);null!==t.asyncValidator?e.setAsyncValidators(sD(r,t.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();da(t._rawValidators,o),da(t._rawAsyncValidators,o)}function gD(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function ha(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const _i="VALID",pa="INVALID",Xr="PENDING",yi="DISABLED";function nd(e){return(od(e)?e.validators:e)||null}function yD(e){return Array.isArray(e)?zc(e):e||null}function rd(e,t){return(od(t)?t.asyncValidators:e)||null}function DD(e){return Array.isArray(e)?Kc(e):e||null}function od(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class id{constructor(t,n){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=n,this._composedValidatorFn=yD(this._rawValidators),this._composedAsyncValidatorFn=DD(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===_i}get invalid(){return this.status===pa}get pending(){return this.status==Xr}get disabled(){return this.status===yi}get enabled(){return this.status!==yi}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=yD(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=DD(t)}addValidators(t){this.setValidators(lD(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(lD(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(cD(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(cD(t,this._rawAsyncValidators))}hasValidator(t){return aa(this._rawValidators,t)}hasAsyncValidator(t){return aa(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=Xr,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=yi,this.errors=null,this._forEachChild(r=>{r.disable(ro(Ue({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ro(Ue({},t),{skipPristineCheck:n})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const n=this._parentMarkedDirty(t.onlySelf);this.status=_i,this._forEachChild(r=>{r.enable(ro(Ue({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(ro(Ue({},t),{skipPristineCheck:n})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===_i||this.status===Xr)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?yi:_i}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=Xr,this._hasOwnPendingAsyncValidator=!0;const n=eD(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(!1!==n.emitEvent)}get(t){return function(e,t,n){if(null==t||(Array.isArray(t)||(t=t.split(".")),Array.isArray(t)&&0===t.length))return null;let r=e;return t.forEach(o=>{r=r instanceof sd?r.controls.hasOwnProperty(o)?r.controls[o]:null:r instanceof CF&&r.at(o)||null}),r}(this,t)}getError(t,n){const r=n?this.get(n):this;return r&&r.errors?r.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new Fe,this.statusChanges=new Fe}_calculateStatus(){return this._allControlsDisabled()?yi:this.errors?pa:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Xr)?Xr:this._anyControlsHaveStatus(pa)?pa:_i}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){od(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class ga extends id{constructor(t=null,n,r){super(nd(n),rd(r,n)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==n.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==n.emitViewToModelChange)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=null,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){ha(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){ha(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class sd extends id{constructor(t,n,r){super(nd(n),rd(r,n)),this.controls=t,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,n){return this.controls[t]?this.controls[t]:(this.controls[t]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(t,n,r={}){this.registerControl(t,n),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(t,n,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],n&&this.registerControl(t,n),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,n={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(r=>{this._throwIfControlMissing(r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(t,n={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(t={},n={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(t,n,r)=>(t[r]=n instanceof ga?n.value:n.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(n,r)=>!!r._syncPendingControls()||n);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(n=>{const r=this.controls[n];r&&t(r,n)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const n of Object.keys(this.controls)){const r=this.controls[n];if(this.contains(n)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(t,n){let r=t;return this._forEachChild((o,i)=>{r=n(r,o,i)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((n,r)=>{if(void 0===t[r])throw new Error(`Must supply a value for form control with name: '${r}'.`)})}}class CF extends id{constructor(t,n,r){super(nd(n),rd(r,n)),this.controls=t,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,n={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(t,n,r={}){this.controls.splice(t,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(t,n,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),n&&(this.controls.splice(t,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,n={}){this._checkAllValuesPresent(t),t.forEach((r,o)=>{this._throwIfControlMissing(o),this.at(o).setValue(r,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(t,n={}){null!=t&&(t.forEach((r,o)=>{this.at(o)&&this.at(o).patchValue(r,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(t=[],n={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(t=>t instanceof ga?t.value:t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((n,r)=>!!r._syncPendingControls()||n,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((n,r)=>{t(n,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(n=>n.enabled&&t(n))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((n,r)=>{if(void 0===t[r])throw new Error(`Must supply a value for form control at index: ${r}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const EF={provide:Je,useExisting:X(()=>ma)},Di=(()=>Promise.resolve(null))();let ma=(()=>{class e extends Je{constructor(n,r){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new Fe,this.form=new sd({},zc(n),Kc(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(n){Di.then(()=>{const r=this._findContainer(n.path);n.control=r.registerControl(n.name,n.control),mi(n.control,n),n.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(n)})}getControl(n){return this.form.get(n.path)}removeControl(n){Di.then(()=>{const r=this._findContainer(n.path);r&&r.removeControl(n.name),ha(this._directives,n)})}addFormGroup(n){Di.then(()=>{const r=this._findContainer(n.path),o=new sd({});(function(e,t){Xc(e,t)})(o,n),r.registerControl(n.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(n){Di.then(()=>{const r=this._findContainer(n.path);r&&r.removeControl(n.name)})}getFormGroup(n){return this.form.get(n.path)}updateModel(n,r){Di.then(()=>{this.form.get(n.path).setValue(r)})}setValue(n){this.control.setValue(n)}onSubmit(n){return this.submitted=!0,function(e,t){e._syncPendingControls(),t.forEach(n=>{const r=n.control;"submit"===r.updateOn&&r._pendingChange&&(n.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this._directives),this.ngSubmit.emit(n),!1}onReset(){this.resetForm()}resetForm(n){this.form.reset(n),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(n){return n.pop(),n.length?this.form.get(n):this.form}}return e.\u0275fac=function(n){return new(n||e)(C($e,10),C(Nn,10))},e.\u0275dir=O({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){1&n&&Y("submit",function(i){return r.onSubmit(i)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[ae([EF]),ne]}),e})();
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
const bF={provide:xn,useExisting:X(()=>ad)},vD=(()=>Promise.resolve(null))();let ad=(()=>{class e extends xn{constructor(n,r,o,i){super(),this.control=new ga,this._registered=!1,this.update=new Fe,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=function(e,t){if(!t)return null;let n,r,o;return Array.isArray(t),t.forEach(i=>{i.constructor===sa?n=i:function(e){return Object.getPrototypeOf(e.constructor)===er}(i)?r=i:o=i}),o||r||n||null}(0,i)}ngOnChanges(n){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in n&&this._updateDisabled(n),function(e,t){if(!e.hasOwnProperty("model"))return!1;const n=e.model;return!!n.isFirstChange()||!Object.is(t,n.currentValue)}(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t){return[...t.path,e]}(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){mi(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(n){vD.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1})})}_updateDisabled(n){const r=n.isDisabled.currentValue,o=""===r||r&&"false"!==r;vD.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable()})}}return e.\u0275fac=function(n){return new(n||e)(C(Je,9),C($e,10),C(Nn,10),C(tn,10))},e.\u0275dir=O({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[ae([bF]),ne,tt]}),e})(),bD=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=O({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),e})();
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
const wF={provide:tn,useExisting:X(()=>ud),multi:!0};let ud=(()=>{class e extends er{writeValue(n){this.setProperty("value",null==n?"":n)}registerOnChange(n){this.onChange=r=>{n(""==r?null:parseFloat(r))}}}return e.\u0275fac=function(){let t;return function(r){return(t||(t=lt(e)))(r||e)}}(),e.\u0275dir=O({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,r){1&n&&Y("input",function(i){return r.onChange(i.target.value)})("blur",function(){return r.onTouched()})},features:[ae([wF]),ne]}),e})(),wD=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=sn({type:e}),e.\u0275inj=At({}),e})();
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
const RF={provide:tn,useExisting:X(()=>_a),multi:!0};function xD(e,t){return null==e?`${t}`:(t&&"object"==typeof t&&(t="Object"),`${e}: ${t}`.slice(0,50))}let _a=(()=>{class e extends er{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(n){this._compareWith=n}writeValue(n){this.value=n;const r=this._getOptionId(n);null==r&&this.setProperty("selectedIndex",-1);const o=xD(r,n);this.setProperty("value",o)}registerOnChange(n){this.onChange=r=>{this.value=this._getOptionValue(r),n(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(n){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r),n))return r;return null}_getOptionValue(n){const r=function(e){return e.split(":")[0]}(n);return this._optionMap.has(r)?this._optionMap.get(r):n}}return e.\u0275fac=function(){let t;return function(r){return(t||(t=lt(e)))(r||e)}}(),e.\u0275dir=O({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,r){1&n&&Y("change",function(i){return r.onChange(i.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[ae([RF]),ne]}),e})(),FD=(()=>{class e{constructor(n,r,o){this._element=n,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(n){null!=this._select&&(this._select._optionMap.set(this.id,n),this._setElementValue(xD(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._setElementValue(n),this._select&&this._select.writeValue(this._select.value)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return e.\u0275fac=function(n){return new(n||e)(C(Le),C(Qn),C(_a,9))},e.\u0275dir=O({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const OF={provide:tn,useExisting:X(()=>fd),multi:!0};function RD(e,t){return null==e?`${t}`:("string"==typeof t&&(t=`'${t}'`),t&&"object"==typeof t&&(t="Object"),`${e}: ${t}`.slice(0,50))}let fd=(()=>{class e extends er{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(n){this._compareWith=n}writeValue(n){let r;if(this.value=n,Array.isArray(n)){const o=n.map(i=>this._getOptionId(i));r=(i,s)=>{i._setSelected(o.indexOf(s.toString())>-1)}}else r=(o,i)=>{o._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(n){this.onChange=r=>{const o=[];if(void 0!==r.selectedOptions){const i=r.selectedOptions;for(let s=0;s<i.length;s++){const a=i.item(s),u=this._getOptionValue(a.value);o.push(u)}}else{const i=r.options;for(let s=0;s<i.length;s++){const a=i.item(s);if(a.selected){const u=this._getOptionValue(a.value);o.push(u)}}}this.value=o,n(o)}}_registerOption(n){const r=(this._idCounter++).toString();return this._optionMap.set(r,n),r}_getOptionId(n){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r)._value,n))return r;return null}_getOptionValue(n){const r=function(e){return e.split(":")[0]}(n);return this._optionMap.has(r)?this._optionMap.get(r)._value:n}}return e.\u0275fac=function(){let t;return function(r){return(t||(t=lt(e)))(r||e)}}(),e.\u0275dir=O({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,r){1&n&&Y("change",function(i){return r.onChange(i.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[ae([OF]),ne]}),e})(),PD=(()=>{class e{constructor(n,r,o){this._element=n,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(n){null!=this._select&&(this._value=n,this._setElementValue(RD(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._select?(this._value=n,this._setElementValue(RD(this.id,n)),this._select.writeValue(this._select.value)):this._setElementValue(n)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}_setSelected(n){this._renderer.setProperty(this._element.nativeElement,"selected",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return e.\u0275fac=function(n){return new(n||e)(C(Le),C(Qn),C(fd,9))},e.\u0275dir=O({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),e})(),WF=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=sn({type:e}),e.\u0275inj=At({imports:[[wD]]}),e})(),qF=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=sn({type:e}),e.\u0275inj=At({imports:[WF]}),e})();
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
const QF=Math.PI/180;
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
       */let zF=(()=>{class e{constructor(n){this.supportsSvg=!!(n&&n.createElementNS&&n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),this.base=n&&n.head.querySelector("base"),this.hasPerf="undefined"!=typeof window&&window.performance&&window.performance.now&&"number"==typeof window.performance.now()}resolveColor(n){if(this.base&&this.base.href){const r=n.indexOf("#");if(r>-1&&n.indexOf("url")>-1)return n.slice(0,r)+location.href+n.slice(r)}return n}getTimestamp(){return this.hasPerf?window.performance.now():Date.now()}getArc(n,r,o,i,s=!1){const a=Math.max(0,Math.min(n||0,r)),u=s?180:359.9999,l=0===r?u:a/r*u;return`M ${this._polarToCartesian(i,o,l)} A ${o} ${o} 0 ${l<=180?0:1} 0 ${this._polarToCartesian(i,o,0)}`}_polarToCartesian(n,r,o){const i=(o-90)*QF;return n+r*Math.cos(i)+" "+(n+r*Math.sin(i))}}return e.\u0275fac=function(n){return new(n||e)(G(He,8))},e.\u0275prov=q({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const GD=new U("ROUND_PROGRESS_DEFAULTS"),KF={provide:GD,useValue:{radius:125,animation:"easeOutCubic",animationDelay:null,duration:500,stroke:15,color:"#45CCCE",background:"#EAEAEA",responsive:!1,clockwise:!0,semicircle:!1,rounded:!1}};let YF=(()=>{class e{linearEase(n,r,o,i){return o*n/i+r}easeInQuad(n,r,o,i){return o*(n/=i)*n+r}easeOutQuad(n,r,o,i){return-o*(n/=i)*(n-2)+r}easeInOutQuad(n,r,o,i){return(n/=i/2)<1?o/2*n*n+r:-o/2*(--n*(n-2)-1)+r}easeInCubic(n,r,o,i){return o*(n/=i)*n*n+r}easeOutCubic(n,r,o,i){return o*((n=n/i-1)*n*n+1)+r}easeInOutCubic(n,r,o,i){return(n/=i/2)<1?o/2*n*n*n+r:o/2*((n-=2)*n*n+2)+r}easeInQuart(n,r,o,i){return o*(n/=i)*n*n*n+r}easeOutQuart(n,r,o,i){return-o*((n=n/i-1)*n*n*n-1)+r}easeInOutQuart(n,r,o,i){return(n/=i/2)<1?o/2*n*n*n*n+r:-o/2*((n-=2)*n*n*n-2)+r}easeInQuint(n,r,o,i){return o*(n/=i)*n*n*n*n+r}easeOutQuint(n,r,o,i){return o*((n=n/i-1)*n*n*n*n+1)+r}easeInOutQuint(n,r,o,i){return(n/=i/2)<1?o/2*n*n*n*n*n+r:o/2*((n-=2)*n*n*n*n+2)+r}easeInSine(n,r,o,i){return-o*Math.cos(n/i*(Math.PI/2))+o+r}easeOutSine(n,r,o,i){return o*Math.sin(n/i*(Math.PI/2))+r}easeInOutSine(n,r,o,i){return-o/2*(Math.cos(Math.PI*n/i)-1)+r}easeInExpo(n,r,o,i){return 0===n?r:o*Math.pow(2,10*(n/i-1))+r}easeOutExpo(n,r,o,i){return n===i?r+o:o*(1-Math.pow(2,-10*n/i))+r}easeInOutExpo(n,r,o,i){return 0===n?r:n===i?r+o:(n/=i/2)<1?o/2*Math.pow(2,10*(n-1))+r:o/2*(2-Math.pow(2,-10*--n))+r}easeInCirc(n,r,o,i){return-o*(Math.sqrt(1-(n/=i)*n)-1)+r}easeOutCirc(n,r,o,i){return o*Math.sqrt(1-(n=n/i-1)*n)+r}easeInOutCirc(n,r,o,i){return(n/=i/2)<1?-o/2*(Math.sqrt(1-n*n)-1)+r:o/2*(Math.sqrt(1-(n-=2)*n)+1)+r}easeInElastic(n,r,o,i){const s=.3*i;let a=1.70158,u=o;return 0===n?r:1==(n/=i)?r+o:(u<Math.abs(o)?(u=o,a=s/4):a=s/(2*Math.PI)*Math.asin(o/u),-u*Math.pow(2,10*n--)*Math.sin((n*i-a)*(2*Math.PI)/s)+r)}easeOutElastic(n,r,o,i){const s=.3*i;let a=1.70158,u=o;return 0===n?r:1==(n/=i)?r+o:(u<Math.abs(o)?(u=o,a=s/4):a=s/(2*Math.PI)*Math.asin(o/u),u*Math.pow(2,-10*n)*Math.sin((n*i-a)*(2*Math.PI)/s)+o+r)}easeInOutElastic(n,r,o,i){const s=i*(.3*1.5);let a=1.70158,u=o;return 0===n?r:2==(n/=i/2)?r+o:(u<Math.abs(o)?(u=o,a=s/4):a=s/(2*Math.PI)*Math.asin(o/u),n<1?u*Math.pow(2,10*(n-=1))*Math.sin((n*i-a)*(2*Math.PI)/s)*-.5+r:u*Math.pow(2,-10*(n-=1))*Math.sin((n*i-a)*(2*Math.PI)/s)*.5+o+r)}easeInBack(n,r,o,i,s=1.70158){return o*(n/=i)*n*((s+1)*n-s)+r}easeOutBack(n,r,o,i,s=1.70158){return o*((n=n/i-1)*n*((s+1)*n+s)+1)+r}easeInOutBack(n,r,o,i,s=1.70158){return(n/=i/2)<1?o/2*(n*n*((1+(s*=1.525))*n-s))+r:o/2*((n-=2)*n*((1+(s*=1.525))*n+s)+2)+r}easeInBounce(n,r,o,i){return o-this.easeOutBounce(i-n,0,o,i)+r}easeOutBounce(n,r,o,i){return(n/=i)<1/2.75?o*(7.5625*n*n)+r:n<2/2.75?o*(7.5625*(n-=1.5/2.75)*n+.75)+r:n<2.5/2.75?o*(7.5625*(n-=2.25/2.75)*n+.9375)+r:o*(7.5625*(n-=2.625/2.75)*n+.984375)+r}easeInOutBounce(n,r,o,i){return n<i/2?.5*this.easeInBounce(2*n,0,o,i)+r:.5*this.easeOutBounce(2*n-i,0,o,i)+.5*o+r}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=q({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ZF=["path"];let JF=(()=>{class e{constructor(n,r,o,i){this.service=n,this.easing=r,this.defaults=o,this.ngZone=i,this.currentLinecap="",this.radius=this.defaults.radius,this.animation=this.defaults.animation,this.animationDelay=this.defaults.animationDelay,this.duration=this.defaults.duration,this.stroke=this.defaults.stroke,this.color=this.defaults.color,this.background=this.defaults.background,this.responsive=this.defaults.responsive,this.clockwise=this.defaults.clockwise,this.semicircle=this.defaults.semicircle,this.rounded=this.defaults.rounded,this.onRender=new Fe,this.lastAnimationId=0}_animateChange(n,r){"number"!=typeof n&&(n=0),r=this._clamp(r),n=this._clamp(n);const o=this,i=r-n,s=o.duration;o.ngZone.runOutsideAngular(()=>{const a=()=>{const u=o.service.getTimestamp(),l=++o.lastAnimationId;requestAnimationFrame(function c(){const d=Math.min(o.service.getTimestamp()-u,s),f=o.easing[o.animation](d,n,i,s);o._updatePath(f),o.onRender.observers.length>0&&o.onRender.emit(f),l===o.lastAnimationId&&d<s&&requestAnimationFrame(c)})};this.animationDelay>0?setTimeout(a,this.animationDelay):a()})}_updatePath(n){if(this.path){const r=this.service.getArc(n,this.max,this.radius-this.stroke/2,this.radius,this.semicircle),o=this.path.nativeElement,i=this.rounded&&n>0?"round":"";i!==this.currentLinecap&&(this.currentLinecap=i,o.style.strokeLinecap=i),o.setAttribute("d",r)}}_clamp(n){return Math.max(0,Math.min(n||0,this.max))}getPathTransform(){const n=this._getDiameter();return this.semicircle?this.clockwise?`translate(0, ${n}) rotate(-90)`:`translate(${n+","+n}) rotate(90) scale(-1, 1)`:this.clockwise?void 0:`scale(-1, 1) translate(-${n} 0)`}resolveColor(n){return this.service.resolveColor(n)}ngOnChanges(n){n.current?this._animateChange(n.current.previousValue,n.current.currentValue):this._updatePath(this.current)}_getDiameter(){return 2*this.radius}_getElementHeight(){if(!this.responsive)return(this.semicircle?this.radius:this._getDiameter())+"px"}_getViewBox(){const n=this._getDiameter();return`0 0 ${n} ${this.semicircle?this.radius:n}`}_getPaddingBottom(){if(this.responsive)return this.semicircle?"50%":"100%"}}return e.\u0275fac=function(n){return new(n||e)(C(zF),C(YF),C(GD),C(Se))},e.\u0275cmp=Ti({type:e,selectors:[["round-progress"]],viewQuery:function(n,r){if(1&n&&Pm(ZF,5),2&n){let o;Rm(o=function(e,t){return e[19].queries[t].queryList}(y(),rf()))&&(r.path=o.first)}},hostAttrs:["role","progressbar"],hostVars:11,hostBindings:function(n,r){2&n&&(pt("aria-valuemin",0)("aria-valuemax",r.max)("aria-valuenow",r.current),Bo("width",r.responsive?"":r._getDiameter()+"px")("height",r._getElementHeight())("padding-bottom",r._getPaddingBottom()),jo("responsive",r.responsive))},inputs:{current:"current",max:"max",radius:"radius",animation:"animation",animationDelay:"animationDelay",duration:"duration",stroke:"stroke",color:"color",background:"background",responsive:"responsive",clockwise:"clockwise",semicircle:"semicircle",rounded:"rounded"},outputs:{onRender:"onRender"},features:[tt],decls:4,vars:13,consts:[["xmlns","http://www.w3.org/2000/svg"],["fill","none"],["path",""]],template:function(n,r){1&n&&(qa(),w(0,"svg",0),kr(1,"circle",1),kr(2,"path",1,2),M()),2&n&&(pt("viewBox",r._getViewBox()),he(1),Bo("stroke",r.resolveColor(r.background))("stroke-width",r.stroke),pt("cx",r.radius)("cy",r.radius)("r",r.radius-r.stroke/2),he(1),Bo("stroke-width",r.stroke)("stroke",r.resolveColor(r.color)),pt("transform",r.getPathTransform()))},styles:["[_nghost-%COMP%]{display:block;position:relative;overflow:hidden}.responsive[_nghost-%COMP%]{width:100%;padding-bottom:100%}.responsive[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0}"],changeDetection:0}),e})(),XF=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=sn({type:e}),e.\u0275inj=At({providers:[KF]}),e})();function eR(e,t){if(1&e&&(w(0,"option",39),se(1),M()),2&e){const n=t.$implicit;De("ngValue",n),he(1),gl(n)}}let tR=(()=>{class e{constructor(){this.current=27,this.max=50,this.stroke=15,this.radius=125,this.semicircle=!1,this.rounded=!1,this.responsive=!1,this.clockwise=!0,this.color="#45ccce",this.background="#eaeaea",this.duration=800,this.animation="easeOutCubic",this.animationDelay=0,this.animations=["linearEase","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"],this.gradient=!1,this.realCurrent=0}increment(n=1){this.current+=n}getOverlayStyle(){const n=this.semicircle;return{top:n?"auto":"50%",bottom:n?"5%":"auto",left:"50%",transform:(n?"":"translateY(-50%) ")+"translateX(-50%)","font-size":this.radius/3.5+"px"}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=Ti({type:e,selectors:[["demo"]],decls:81,vars:31,consts:[[1,"container"],["href","https://github.com/crisbeto/angular-svg-round-progressbar",1,"back"],[1,"progress-wrapper"],[1,"current",3,"ngStyle"],[3,"current","max","color","background","radius","stroke","semicircle","rounded","clockwise","responsive","duration","animation","animationDelay"],[3,"click"],[1,"cf"],["for","semicircle"],["id","semicircle","name","semicircle","type","checkbox",3,"ngModel","ngModelChange"],["for","responsive"],["id","responsive","name","responsive","type","checkbox",3,"ngModel","ngModelChange"],["for","rounded"],["id","rounded","name","rounded","type","checkbox",3,"ngModel","ngModelChange"],["for","clockwise"],["id","clockwise","name","clockwise","type","checkbox",3,"ngModel","ngModelChange"],["for","gradientInput"],["id","gradientInput","type","checkbox","name","gradient",3,"ngModel","ngModelChange"],["for","current"],["id","current","name","current","type","number",3,"ngModel","ngModelChange"],["for","max"],["id","max","name","max","type","number",3,"ngModel","ngModelChange"],["for","stroke"],["id","stroke","name","stroke","type","number",3,"ngModel","ngModelChange"],["for","radius"],["id","radius","name","radius","type","number",3,"ngModel","ngModelChange"],["for","duration"],["id","duration","name","duration","type","number",3,"ngModel","ngModelChange"],["for","animation"],["id","animation","name","animation",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["for","animationDelay"],["id","animationDelay","name","animationDelay","type","number",3,"ngModel","ngModelChange"],["for","color"],["id","color","name","color","type","color",3,"ngModel","ngModelChange"],["for","background"],["id","background","name","background","type","color",3,"ngModel","ngModelChange"],["id","gradient","x1","0","x2","0","y1","0","y2","1"],["offset","5%","stop-color","green"],["offset","95%","stop-color","gold"],[3,"ngValue"]],template:function(n,r){1&n&&(w(0,"div",0),w(1,"a",1),se(2,"Back to project repo"),M(),w(3,"h2"),se(4,"Sample progressbar"),M(),w(5,"div",2),w(6,"div",3),se(7),M(),kr(8,"round-progress",4),M(),w(9,"button",5),Y("click",function(){return r.increment()}),se(10,"Increment"),M(),w(11,"button",5),Y("click",function(){return r.increment(-1)}),se(12,"Decrement"),M(),w(13,"button",5),Y("click",function(){return r.increment(10)}),se(14,"Increment 10"),M(),w(15,"button",5),Y("click",function(){return r.increment(-10)}),se(16,"Decrement 10"),M(),w(17,"form"),w(18,"h3"),se(19,"Customize!"),M(),w(20,"div",6),w(21,"label",7),se(22,"Semicircle:"),M(),w(23,"input",8),Y("ngModelChange",function(i){return r.semicircle=i}),M(),M(),w(24,"div",6),w(25,"label",9),se(26,"Responsive:"),M(),w(27,"input",10),Y("ngModelChange",function(i){return r.responsive=i}),M(),M(),w(28,"div",6),w(29,"label",11),se(30,"Rounded:"),M(),w(31,"input",12),Y("ngModelChange",function(i){return r.rounded=i}),M(),M(),w(32,"div",6),w(33,"label",13),se(34,"Clockwise:"),M(),w(35,"input",14),Y("ngModelChange",function(i){return r.clockwise=i}),M(),M(),w(36,"div",6),w(37,"label",15),se(38,"Gradient:"),M(),w(39,"input",16),Y("ngModelChange",function(i){return r.gradient=i}),M(),M(),w(40,"div",6),w(41,"label",17),se(42,"Current:"),M(),w(43,"input",18),Y("ngModelChange",function(i){return r.current=i}),M(),M(),w(44,"div",6),w(45,"label",19),se(46,"Max:"),M(),w(47,"input",20),Y("ngModelChange",function(i){return r.max=i}),M(),M(),w(48,"div",6),w(49,"label",21),se(50,"Stroke:"),M(),w(51,"input",22),Y("ngModelChange",function(i){return r.stroke=i}),M(),M(),w(52,"div",6),w(53,"label",23),se(54,"Radius:"),M(),w(55,"input",24),Y("ngModelChange",function(i){return r.radius=i}),M(),M(),w(56,"div",6),w(57,"label",25),se(58,"Duration:"),M(),w(59,"input",26),Y("ngModelChange",function(i){return r.duration=i}),M(),M(),w(60,"div",6),w(61,"label",27),se(62,"Animation:"),M(),w(63,"select",28),Y("ngModelChange",function(i){return r.animation=i}),function(e,t,n,r,o,i,s,a){const u=y(),l=W(),c=e+20,d=l.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n,r,o,i,s,a,u){const l=t.consts,c=Er(t,e,4,s||null,Dn(l,a));Gu(t,n,c,Dn(l,u)),Bi(t,c);const d=c.tViews=ls(2,c,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,l);return null!==t.queries&&(t.queries.template(t,c),d.queries=t.queries.embeddedTView(c)),c}(c,l,u,t,n,r,o,i,s):l.data[c];Gt(d,!1);const f=u[k].createComment("");os(l,u,f,d),Ve(f,u),cs(u,u[c]=Jh(f,u,f,d)),Ri(d)&&$u(l,u,d),null!=s&&Uu(u,d,a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(64,eR,2,2,"option",29),M(),M(),w(65,"div",6),w(66,"label",30),se(67,"Animation delay:"),M(),w(68,"input",31),Y("ngModelChange",function(i){return r.animationDelay=i}),M(),M(),w(69,"div",6),w(70,"label",32),se(71,"Color:"),M(),w(72,"input",33),Y("ngModelChange",function(i){return r.color=i}),M(),M(),w(73,"div",6),w(74,"label",34),se(75,"Background color:"),M(),w(76,"input",35),Y("ngModelChange",function(i){return r.background=i}),M(),M(),M(),M(),qa(),w(77,"svg"),w(78,"linearGradient",36),kr(79,"stop",37),kr(80,"stop",38),M(),M()),2&n&&(he(6),De("ngStyle",r.getOverlayStyle()),he(1),_l("",r.current,"/",r.max,""),he(1),De("current",r.current)("max",r.max)("color",r.gradient?"url(#gradient)":r.color)("background",r.background)("radius",r.radius)("stroke",r.stroke)("semicircle",r.semicircle)("rounded",r.rounded)("clockwise",r.clockwise)("responsive",r.responsive)("duration",r.duration)("animation",r.animation)("animationDelay",r.animationDelay),he(15),De("ngModel",r.semicircle),he(4),De("ngModel",r.responsive),he(4),De("ngModel",r.rounded),he(4),De("ngModel",r.clockwise),he(4),De("ngModel",r.gradient),he(4),De("ngModel",r.current),he(4),De("ngModel",r.max),he(4),De("ngModel",r.stroke),he(4),De("ngModel",r.radius),he(4),De("ngModel",r.duration),he(4),De("ngModel",r.animation),he(1),De("ngForOf",r.animations),he(4),De("ngModel",r.animationDelay),he(4),De("ngModel",r.color),he(4),De("ngModel",r.background))},directives:[Ay,JF,bD,pD,ma,Qc,hD,ad,ud,sa,_a,by,FD,PD],styles:['h2[_ngcontent-%COMP%]{margin:0 0 40px}.cf[_ngcontent-%COMP%]:before, .cf[_ngcontent-%COMP%]:after{content:" ";display:table}.cf[_ngcontent-%COMP%]:after{clear:both}.progress-wrapper[_ngcontent-%COMP%]{position:relative;margin:20px auto;font-size:40px}.current[_ngcontent-%COMP%]{position:absolute;color:#bbb;font-weight:100;line-height:1}round-progress[_ngcontent-%COMP%]{margin:auto}.container[_ngcontent-%COMP%]{width:100%;max-width:650px;margin:40px auto 80px;text-align:center;padding:40px;background:#fff;border:solid 1px #ccc;border-radius:4px}button[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;background:#45ccce;color:#fff;font-size:16px;border:none;cursor:pointer;border-radius:4px;text-align:center;margin:0 5px 5px 0}form[_ngcontent-%COMP%]{text-align:left;max-width:350px;margin:30px auto}form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:15px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{float:right;padding:5px;width:150px}input[type=checkbox][_ngcontent-%COMP%]{width:auto}input[type=color][_ngcontent-%COMP%]{height:30px}.back[_ngcontent-%COMP%]{position:fixed;top:5px;right:5px}@media (max-width: 650px){.back[_ngcontent-%COMP%]{position:static;display:block;text-align:center}h2[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{margin-bottom:20px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;margin-top:5px;float:none}.container[_ngcontent-%COMP%]{margin:0 auto 50px;padding:25px}}']}),e})(),nR=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=sn({type:e,bootstrap:[tR]}),e.\u0275inj=At({imports:[[zx,XF,qF]]}),e})();(function(){if(d_)throw new Error("Cannot enable prod mode after platform setup.");c_=!1})(),qx().bootstrapModule(nR).catch(e=>console.error(e))}},Re=>{Re(Re.s=47)}]);