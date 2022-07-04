// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isFunctionArray=e()}(this,(function(){"use strict";var t=Math.floor;function e(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&(r=e.length,t(r)===r)&&e.length>=0&&e.length<=4294967295;var r}var r=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,u=Object.defineProperty,i=Object.prototype,f=i.toString,l=i.__defineGetter__,c=i.__defineSetter__,a=i.__lookupGetter__,y=i.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?u:function(t,e,r){var n,o,u,p;if("object"!=typeof t||null===t||"[object Array]"===f.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(a.call(t,e)||y.call(t,e)?(n=t.__proto__,t.__proto__=i,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,p="set"in r,o&&(u||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&l&&l.call(t,e,r.get),p&&c&&c.call(t,e,r.set),t};var p=o;function s(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function b(t){return"boolean"==typeof t}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return d&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var w=v()?function(t){var e,r,n,o,u;if(null==t)return g.call(t);r=t[m],u=m,e=null!=(o=t)&&_.call(o,u);try{t[m]=void 0}catch(e){return g.call(t)}return n=g.call(t),e?t[m]=r:delete t[m],n}:function(t){return g.call(t)},j=Boolean.prototype.toString;var h=v();function S(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function A(t){return b(t)||S(t)}function E(){return new Function("return this;")()}s(A,"isPrimitive",b),s(A,"isObject",S);var O="object"==typeof self?self:null,T="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof B?B:null;var x=function(t){if(arguments.length){if(!b(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(O)return O;if(T)return T;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),V=x.document&&x.document.childNodes,M=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;s(k,"REGEXP",C);var F=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function G(t){return null!==t&&"object"==typeof t}function L(t){var e,r,n,o;if(("Object"===(r=w(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=C.exec(n.toString()))return e[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}s(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!F(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(G));var I="function"==typeof r||"object"==typeof M||"function"==typeof V?function(t){return L(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?L(t).toLowerCase():e};return function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,o;if(!e(r))return!1;if(0===(n=r.length))return!1;for(o=0;o<n;o++)if(!1===t(r[o]))return!1;return!0}}((function(t){return"function"===I(t)}))}));
//# sourceMappingURL=index.js.map
