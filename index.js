// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isFunctionArray=r()}(this,(function(){"use strict";var e=Math.floor;function r(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&(t=r.length,e(t)===t)&&r.length>=0&&r.length<=4294967295;var t}function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var E=String.fromCharCode,S=isNaN,x=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,o,a,l,s,f,p;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,f=0;f<e.length;f++)if(u(n=e[f]))l+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,S(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=A.exec(e);n;)(r=e.slice(i,A.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),i=A.lastIndex,n=A.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){return"string"==typeof e}function $(e){var r,t,n;if(!O(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var C=/./,I="function"==typeof Object.defineProperty?Object.defineProperty:null;var P,B=Object.defineProperty,R=Object.prototype,L=R.toString,G=R.__defineGetter__,M=R.__defineSetter__,Z=R.__lookupGetter__,W=R.__lookupSetter__;P=function(){try{return I({},"x",{}),!0}catch(e){return!1}}()?B:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===L.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(e,r)||W.call(e,r)?(n=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var N=P;function U(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return z&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=q()?function(e){var r,t,n,i,o;if(null==e)return D.call(e);t=e[K],o=K,r=null!=(i=e)&&H.call(i,o);try{e[K]=void 0}catch(r){return D.call(e)}return n=D.call(e),r?e[K]=t:delete e[K],n}:function(e){return D.call(e)},Y=Boolean,ee=Boolean.prototype.toString;var re=q();function te(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function ne(e){return X(e)||te(e)}function ie(){return new Function("return this;")()}U(ne,"isPrimitive",X),U(ne,"isObject",te);var oe="object"==typeof self?self:null,ae="object"==typeof window?window:null,ce="object"==typeof global?global:null,ue="object"==typeof globalThis?globalThis:null;var le=function(e){if(arguments.length){if(!X(e))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ie()}if(ue)return ue;if(oe)return oe;if(ae)return ae;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),se=le.document&&le.document.childNodes,fe=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var ge=/^\s*function\s*([^(]*)/i;U(pe,"REGEXP",ge);var de=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)};function he(e){return null!==e&&"object"==typeof e}function ye(e){var r,t,n,i;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ge.exec(n.toString()))return r[1]}return he(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}U(he,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!de(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(he));var be="function"==typeof C||"object"==typeof fe||"function"==typeof se?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ye(e).toLowerCase():r};return function(e){if("function"!=typeof e)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",e));return function(t){var n,i;if(!r(t))return!1;if(0===(n=t.length))return!1;for(i=0;i<n;i++)if(!1===e(t[i]))return!1;return!0}}((function(e){return"function"===be(e)}))}));
//# sourceMappingURL=index.js.map
