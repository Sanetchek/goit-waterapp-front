"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[975],{9877:(e,t,r)=>{r.d(t,{m6W:()=>d,OQo:()=>m});var n=r(5043),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=n.createContext&&n.createContext(o),i=["attr","size","title"];function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return e&&e.map(((e,t)=>n.createElement(e.tag,a({key:t},e.attr),f(e.child))))}function y(e){return t=>n.createElement(v,s({attr:a({},e.attr)},t),f(e.child))}function v(e){var t=t=>{var r,{attr:o,size:c,title:u}=e,p=l(e,i),f=c||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,p,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==c?n.createElement(c.Consumer,null,(e=>t(e))):t(o)}function d(e){return y({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(e)}function m(e){return y({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}},2099:(e,t,r)=>{r.d(t,{Mz:()=>u});function n(e){if("function"!==typeof e)throw new TypeError(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected a function, instead received "+typeof e)}var o=e=>Array.isArray(e)?e:[e];function c(e){const t=Array.isArray(e[0])?e[0]:e;return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected all items to be functions, instead received the following types: ";if(!e.every((e=>"function"===typeof e))){const r=e.map((e=>"function"===typeof e?`function ${e.name||"unnamed"}()`:typeof e)).join(", ");throw new TypeError(`${t}[${r}]`)}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}Symbol(),Object.getPrototypeOf({});var i="undefined"!==typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}};function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={s:0,v:void 0,o:null,p:null};const{resultEqualityCheck:n}=t;let o,c=0;function l(){let t=r;const{length:l}=arguments;for(let e=0,r=l;e<r;e++){const r=arguments[e];if("function"===typeof r||"object"===typeof r&&null!==r){let e=t.o;null===e&&(t.o=e=new WeakMap);const n=e.get(r);void 0===n?(t={s:0,v:void 0,o:null,p:null},e.set(r,t)):t=n}else{let e=t.p;null===e&&(t.p=e=new Map);const n=e.get(r);void 0===n?(t={s:0,v:void 0,o:null,p:null},e.set(r,t)):t=n}}const s=t;let u;if(1===t.s)u=t.v;else if(u=e.apply(null,arguments),c++,n){const e=o?.deref?.()??o;null!=e&&n(e,u)&&(u=e,0!==c&&c--);o="object"===typeof u&&null!==u||"function"===typeof u?new i(u):u}return s.s=1,s.v=u,u}return l.clearCache=()=>{r={s:0,v:void 0,o:null,p:null},l.resetResultsCount()},l.resultsCount=()=>c,l.resetResultsCount=()=>{c=0},l}function s(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];const s="function"===typeof e?{memoize:e,memoizeOptions:r}:e,u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];let i,u=0,a=0,p={},f=t.pop();"object"===typeof f&&(p=f,f=t.pop()),n(f,`createSelector expects an output function after the inputs, but received: [${typeof f}]`);const y={...s,...p},{memoize:v,memoizeOptions:d=[],argsMemoize:m=l,argsMemoizeOptions:h=[],devModeChecks:b={}}=y,g=o(d),w=o(h),O=c(t),j=v((function(){return u++,f.apply(null,arguments)}),...g);const k=m((function(){a++;const e=function(e,t){const r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}(O,arguments);return i=j.apply(null,e),i}),...w);return Object.assign(k,{resultFunc:f,memoizedResultFunc:j,dependencies:O,dependencyRecomputations:()=>a,resetDependencyRecomputations:()=>{a=0},lastResult:()=>i,recomputations:()=>u,resetRecomputations:()=>{u=0},memoize:v,argsMemoize:m})};return Object.assign(u,{withTypes:()=>u}),u}var u=s(l),a=Object.assign((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;!function(e){if("object"!==typeof e)throw new TypeError(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected an object, instead received "+typeof e)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);const r=Object.keys(e),n=t(r.map((t=>e[t])),(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t,n)=>(e[r[n]]=t,e)),{})}));return n}),{withTypes:()=>a})}}]);
//# sourceMappingURL=975.d9203aef.chunk.js.map