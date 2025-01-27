(()=>{"use strict";var n={102:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(991),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"td {\n  height:40px;\n  width:40px;\n  border:1px solid #49c1a2;\n  color: #249c7d;\n  text-align:center;\n  border-radius: 5px;\n}\n\ntd:nth-child(3n) {\n  border-right:solid #49c1a2;\n}\n\ntr:first-child {\n  border-top:solid #49c1a2;\n}\n\ntr:nth-child(3n) td {\n  border-bottom:solid #49c1a2;\n}\n\ntr:nth-child(2n) td:nth-child(2n),\ntr:nth-child(2n+1) td:nth-child(2n+1) {\n  background-color: rgba(73, 193, 162, 0.5)\n}\n\ntd.current {\n  color: #9F6000 !important;\n  background-color: #FEEFB3 !important;\n}\n\n\ntd.fault {\n  color: #D8000C !important;\n  background-color: #FFD2D2 !important;\n}\n\ntd.solved {\n  color: #4F8A10 !important;\n  background-color: #DFF2BF !important;\n}\n","",{version:3,sources:["webpack://./src/components/board.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,UAAU;EACV,wBAAwB;EACxB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;EAEE;AACF;;AAEA;EACE,yBAAyB;EACzB,oCAAoC;AACtC;;;AAGA;EACE,yBAAyB;EACzB,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;EACzB,oCAAoC;AACtC",sourcesContent:["td {\n  height:40px;\n  width:40px;\n  border:1px solid #49c1a2;\n  color: #249c7d;\n  text-align:center;\n  border-radius: 5px;\n}\n\ntd:nth-child(3n) {\n  border-right:solid #49c1a2;\n}\n\ntr:first-child {\n  border-top:solid #49c1a2;\n}\n\ntr:nth-child(3n) td {\n  border-bottom:solid #49c1a2;\n}\n\ntr:nth-child(2n) td:nth-child(2n),\ntr:nth-child(2n+1) td:nth-child(2n+1) {\n  background-color: rgba(73, 193, 162, 0.5)\n}\n\ntd.current {\n  color: #9F6000 !important;\n  background-color: #FEEFB3 !important;\n}\n\n\ntd.fault {\n  color: #D8000C !important;\n  background-color: #FFD2D2 !important;\n}\n\ntd.solved {\n  color: #4F8A10 !important;\n  background-color: #DFF2BF !important;\n}\n"],sourceRoot:""}]);const s=i},106:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(991),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"/* BASE STYLES */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n  background-color: var(--background-color);\n  color: var(--text-color);\n  line-height: 1.6;\n  transition: background-color 0.3s ease, color 0.3s ease;\n  overflow-y: auto;\n}\n\nh1, h2 {\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nheader {\n  position: fixed;\n  width: 100%;\n  padding: 0.7rem;\n  color: #737373;\n  box-shadow: 0 5px 6px -6px #d3d3d3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 100;\n  background-color: var(--background-color);\n}\n\n.header-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    padding: 0 1rem;\n}\n\ninput, textarea, button {\n  padding: 0.5rem;\n  flex-grow: 1;\n  max-width: 349px;\n}\n\ntextarea {\n  resize: none;\n}\n\n/* Other styles */\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  padding-top: 5rem;\n}\n\n.card {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 3rem 1rem;\n  margin-bottom: 5rem;\n  background-color: var(--card-background-color);\n  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;\n  transition: background-color 0.3s ease;\n}\n\n.input-wrapper {\n  margin: 0.1rem 0.5rem 1rem;\n}\n\n.input-wrapper label {\n  display: block;\n  margin-bottom: 3px;\n  color: var(--text-color);\n}\n\n.input-wrapper input,\n.input-wrapper textarea {\n  padding: 7px;\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background-color: var(--input-background-color);\n  color: var(--text-color);\n  transition: background-color 0.3s ease, color 0.3s ease;\n}\n\n.input-wrapper button {\n  width: 100%;\n  border-radius: 3px;\n  outline: none;\n  cursor: pointer;\n}\n\n@media(max-width:766px) {\n  .card {\n    box-shadow: none;\n    padding: 1rem;\n  }\n\n  .controls {\n    margin-top: 1rem;\n    flex-direction: column;\n  }\n\n  .input-section {\n    flex-direction: column;\n  }\n\n  .input-wrapper {\n    margin: 0.5rem 0;\n  }\n}\n\n/* Dark mode styles */\nbody.dark {\n  --background-color: #1a202c;\n  --text-color: #edf2f7;\n  --card-background-color: #2d3748;\n  --input-background-color: #4a5568;\n}\n\n:root {\n  --background-color: #fff;\n  --text-color: #333;\n  --card-background-color: #fff;\n  --input-background-color: #fff;\n}\n\n/* Theme toggle styles */\n.theme-toggle {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  border-radius: 3px;\n  transition: background-color 0.3s ease;\n  position: relative;\n  z-index: 10;\n}\n\n.theme-toggle:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.theme-toggle svg {\n  width: 20px;\n  height: 20px;\n  stroke: var(--text-color);\n}\n\n/* Board styles */\ntd {\n    background-color: transparent !important;\n}\n","",{version:3,sources:["webpack://./src/style/style.css"],names:[],mappings:"AAAA,gBAAgB;AAChB;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,oCAAoC;EACpC,yCAAyC;EACzC,wBAAwB;EACxB,gBAAgB;EAChB,uDAAuD;EACvD,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,eAAe;EACf,cAAc;EACd,kCAAkC;EAClC,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,yCAAyC;AAC3C;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;IACX,eAAe;AACnB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,8CAA8C;EAC9C,2CAA2C;EAC3C,sCAAsC;AACxC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;;EAEE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,+CAA+C;EAC/C,wBAAwB;EACxB,uDAAuD;AACzD;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE;IACE,gBAAgB;IAChB,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,sBAAsB;EACxB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,gBAAgB;EAClB;AACF;;AAEA,qBAAqB;AACrB;EACE,2BAA2B;EAC3B,qBAAqB;EACrB,gCAAgC;EAChC,iCAAiC;AACnC;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,6BAA6B;EAC7B,8BAA8B;AAChC;;AAEA,wBAAwB;AACxB;EACE,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,sCAAsC;EACtC,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA,iBAAiB;AACjB;IACI,wCAAwC;AAC5C",sourcesContent:["/* BASE STYLES */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n  background-color: var(--background-color);\n  color: var(--text-color);\n  line-height: 1.6;\n  transition: background-color 0.3s ease, color 0.3s ease;\n  overflow-y: auto;\n}\n\nh1, h2 {\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nheader {\n  position: fixed;\n  width: 100%;\n  padding: 0.7rem;\n  color: #737373;\n  box-shadow: 0 5px 6px -6px #d3d3d3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 100;\n  background-color: var(--background-color);\n}\n\n.header-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    padding: 0 1rem;\n}\n\ninput, textarea, button {\n  padding: 0.5rem;\n  flex-grow: 1;\n  max-width: 349px;\n}\n\ntextarea {\n  resize: none;\n}\n\n/* Other styles */\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  padding-top: 5rem;\n}\n\n.card {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 3rem 1rem;\n  margin-bottom: 5rem;\n  background-color: var(--card-background-color);\n  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;\n  transition: background-color 0.3s ease;\n}\n\n.input-wrapper {\n  margin: 0.1rem 0.5rem 1rem;\n}\n\n.input-wrapper label {\n  display: block;\n  margin-bottom: 3px;\n  color: var(--text-color);\n}\n\n.input-wrapper input,\n.input-wrapper textarea {\n  padding: 7px;\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background-color: var(--input-background-color);\n  color: var(--text-color);\n  transition: background-color 0.3s ease, color 0.3s ease;\n}\n\n.input-wrapper button {\n  width: 100%;\n  border-radius: 3px;\n  outline: none;\n  cursor: pointer;\n}\n\n@media(max-width:766px) {\n  .card {\n    box-shadow: none;\n    padding: 1rem;\n  }\n\n  .controls {\n    margin-top: 1rem;\n    flex-direction: column;\n  }\n\n  .input-section {\n    flex-direction: column;\n  }\n\n  .input-wrapper {\n    margin: 0.5rem 0;\n  }\n}\n\n/* Dark mode styles */\nbody.dark {\n  --background-color: #1a202c;\n  --text-color: #edf2f7;\n  --card-background-color: #2d3748;\n  --input-background-color: #4a5568;\n}\n\n:root {\n  --background-color: #fff;\n  --text-color: #333;\n  --card-background-color: #fff;\n  --input-background-color: #fff;\n}\n\n/* Theme toggle styles */\n.theme-toggle {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  border-radius: 3px;\n  transition: background-color 0.3s ease;\n  position: relative;\n  z-index: 10;\n}\n\n.theme-toggle:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.theme-toggle svg {\n  width: 20px;\n  height: 20px;\n  stroke: var(--text-color);\n}\n\n/* Board styles */\ntd {\n    background-color: transparent !important;\n}\n"],sourceRoot:""}]);const s=i},781:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(991),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"/* Text colors */\n.text-primary {\n  color: #28a745;\n}\n\n.text-secondary {\n  color: #0284d0;\n}\n\n/* Fonts */\n.font-normal {\n  font-weight: 400;\n}\n\n/* Button */\n.btn {\n  cursor: pointer;\n  display: inline-block;\n  padding: 7px;\n  color: #fff;\n  background-color: #49c1a2;\n  border: none;\n  border-radius: 3px;\n}\n\n.btn:hover {\n  opacity: 0.9;\n}\n\n.btn:disabled {\n  background-color: gray;\n}\n","",{version:3,sources:["webpack://./src/style/util.css"],names:[],mappings:"AAAA,gBAAgB;AAChB;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA,UAAU;AACV;EACE,gBAAgB;AAClB;;AAEA,WAAW;AACX;EACE,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB",sourcesContent:["/* Text colors */\n.text-primary {\n  color: #28a745;\n}\n\n.text-secondary {\n  color: #0284d0;\n}\n\n/* Fonts */\n.font-normal {\n  font-weight: 400;\n}\n\n/* Button */\n.btn {\n  cursor: pointer;\n  display: inline-block;\n  padding: 7px;\n  color: #fff;\n  background-color: #49c1a2;\n  border: none;\n  border-radius: 3px;\n}\n\n.btn:hover {\n  opacity: 0.9;\n}\n\n.btn:disabled {\n  background-color: gray;\n}\n"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},991:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var t,r,o=(r=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,e){var t=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=t){var r,o,a=[],i=!0,s=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){s=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(s)throw o}}return a}}(t,r)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),l="/*# ".concat(c," */"),A=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(A).concat([l]).join("\n")}return[a].join("\n")}},72:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function i(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var s=n[o],c=e.base?s[0]+e.base:s[0],l=t[c]||0,A="".concat(c," ").concat(l);t[c]=l+1;var d=i(A),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(a[d].references++,a[d].updater(u)):a.push({identifier:A,updater:f(u,e),references:1}),r.push(A)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,A=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function d(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=A(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function u(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,p=0;function f(n,e){var t,r,o;if(e.singleton){var a=p++;t=h||(h=c(e)),r=d.bind(null,t,a,!1),o=d.bind(null,t,a,!0)}else t=c(e),r=u.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var c=s(n,e),l=0;l<t.length;l++){var A=i(t[l]);0===a[A].references&&(a[A].updater(),a.splice(A,1))}t=c}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),a=t(781);o()(a.A,{insert:"head",singleton:!1}),a.A.locals;var i=t(106);o()(i.A,{insert:"head",singleton:!1}),i.A.locals;var s=t(102);function c(n,e,t){return(e=function(n){var e=function(n){if("object"!=typeof n||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==typeof e?e:e+""}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}o()(s.A,{insert:"head",singleton:!1}),s.A.locals;class l{constructor(){c(this,"store",new Map),c(this,"checkIfIn",((n,e)=>this.store.get(n)&&this.store.get(n).get(e))),c(this,"setVal",((n,e,t)=>this.store.get(n)?!(t&&this.store.get(n).get(e)||(this.store.get(n).set(e,t),0)):(this.store.set(n,new Map([[e,t]])),!0)))}}const A=(n,e)=>{for(let t=0;t<9;t+=3)if(n<=t+2)for(let n=0;n<9;n+=3)if(e<=n+2)return t+1+parseInt(n/3,10);return!1};function d(n,e,t){return(e=function(n){var e=function(n){if("object"!=typeof n||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==typeof e?e:e+""}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}const u=new class{constructor(){var n=this;d(this,"prev",null),d(this,"board",new Array(9)),d(this,"speed",1e3),d(this,"difficulty","easy"),d(this,"row",null),d(this,"column",null),d(this,"sector",null),d(this,"solved",!1),d(this,"timerInterval",null),d(this,"startTime",0),d(this,"elapsedTime",0),d(this,"isPaused",!1),d(this,"difficultyLevels",{easy:[[".",".","3",".","2",".","6",".","."],["9",".",".","3",".","5",".",".","1"],[".",".","1","8",".","6","4",".","."],[".",".","8","1",".","2","9",".","."],["7",".",".",".",".",".",".",".","8"],[".",".","6","7",".","8","2",".","."],[".",".","2","6",".","9","5",".","."],["8",".",".","2",".","3",".",".","9"],[".",".","5",".","1",".","3",".","."]],medium:[[".",".",".","2",".",".",".",".","."],[".","1",".",".",".","4",".",".","."],[".",".","3",".",".",".","2",".","."],[".",".","2",".","1",".",".","6","."],[".",".",".",".",".",".",".",".","."],[".","3",".",".","4",".","1",".","."],[".",".","8",".",".",".","7",".","."],[".",".",".","5",".",".",".","8","."],[".",".",".",".",".","9",".",".","."]],hard:[["8",".",".",".",".",".",".",".","."],[".",".","3","6",".",".",".",".","."],[".","7",".",".","9",".","2",".","."],[".","5",".",".",".","7",".",".","."],[".",".",".",".","4","5","7",".","."],[".",".",".","1",".",".",".","3","."],[".",".","1",".",".",".",".","6","8"],[".",".","8","5",".",".",".","1","."],[".","9",".",".",".",".","4",".","."]]}),d(this,"clearAllCellClasses",(()=>{this.board.forEach((n=>n.forEach((n=>{let{$el:e}=n;e.className=""}))))})),d(this,"setUpMemo",(()=>{this.board.forEach(((n,e)=>n.forEach(((n,t)=>{if(!(""===n.value||this.row.setVal(e,n.value,!0)&&this.column.setVal(t,n.value,!0)&&this.sector.setVal(A(e,t),n.value,!0)))throw new Error("Incorrect board")}))))})),d(this,"createNewMemo",(()=>{this.row=new l,this.column=new l,this.sector=new l;try{return this.setUpMemo(),!0}catch(n){return alert(n.message),!1}})),d(this,"getFirstUnsolved",((n,e)=>{for(let t=n;t<9;t+=1)for(let r=t===n?e:0;r<9;r+=1){const{value:n}=this.board[t][r];if(""===n)return[t,r]}return[!1,!1]})),d(this,"updateClassList",((n,e,t)=>{e&&(e.className=t,"fault"===t&&setTimeout((()=>{e.classList.remove(t)}),this.speed/2)),n.className="current"})),d(this,"setCellValue",(function(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;const a=n.board[e][t];a.value=r,+a.$el.innerText!==r&&(a.$el.innerText=r),o&&(n.updateClassList(a.$el,n.prev,o),n.prev=a.$el),n.saveGame()})),d(this,"tryOne",((n,e,t,r)=>new Promise((o=>{this.row.setVal(n,r,!0),this.column.setVal(e,r,!0),this.sector.setVal(t,r,!0),this.setCellValue(n,e,r,"solved"),setTimeout((()=>{this.solveBoard(n,e).then((a=>{a||(this.row.setVal(n,r,!1),this.column.setVal(e,r,!1),this.sector.setVal(t,r,!1),this.setCellValue(n,e,"","fault")),o(a)}))}),this.speed)})))),d(this,"solveBoard",(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(n.isPaused)return new Promise((r=>{const o=setInterval((()=>{n.isPaused||(clearInterval(o),n.solveBoard(e,t).then(r))}),100)}));const[r,o]=n.getFirstUnsolved(e,t);if(!1===r)return n.solved=!0,n.board.forEach((n=>n.forEach((n=>{n.$el.classList.remove("solved"),n.$el.classList.remove("current")})))),!0;const a=A(r,o);let i=!1;for(let e=1;e<=9&&(n.row.checkIfIn(r,e)||n.column.checkIfIn(o,e)||n.sector.checkIfIn(a,e)||(i=await n.tryOne(r,o,a,e)),!i);e+=1);return i})),d(this,"cleanUp",(()=>{this.solved=!1,this.prev=null,this.clearAllCellClasses()})),d(this,"setUpBeforeSolveAndSolve",(async n=>{let{target:e}=n;this.cleanUp(),this.createNewMemo()&&(e.setAttribute("disabled",!0),await this.solveBoard(),e.removeAttribute("disabled"),this.solved?alert("Solved"):alert("Board not solvable"))})),d(this,"handleDifficultyChange",(n=>{let{target:{value:e}}=n;this.difficulty=e,this.setBoardFromDifficulty()})),d(this,"setBoardFromDifficulty",(()=>{this.difficultyLevels[this.difficulty].forEach(((n,e)=>n.forEach(((n,t)=>this.setCellValue(e,t,"."===n?"":+n)))))})),d(this,"handleInputFromArray",(n=>{try{JSON.parse(n).forEach(((n,e)=>n.forEach(((n,t)=>this.setCellValue(e,t,"."===n?"":+n)))))}catch(n){alert("Incorrect array")}})),d(this,"handleSpeedInput",(n=>{let{target:{value:e}}=n;this.speed=+e})),d(this,"handleInput",(n=>{const{target:e}=n,{innerText:t,id:r}=e,[o,a]=r.split("-");0===t.length||/^[0-9]$/.test(t)?this.setCellValue(o,a,0===t.length?"":+t):this.setCellValue(o,a,"")})),d(this,"saveGame",(()=>{const n=this.board.map((n=>n.map((n=>n.value))));localStorage.setItem("sudokuGameState",JSON.stringify(n)),localStorage.setItem("sudokuDifficulty",this.difficulty)})),d(this,"loadGame",(()=>{const n=localStorage.getItem("sudokuGameState"),e=localStorage.getItem("sudokuDifficulty");n&&JSON.parse(n).forEach(((n,e)=>n.forEach(((n,t)=>this.setCellValue(e,t,""===n?"":+n))))),e&&(this.difficulty=e,document.querySelector("#difficulty").value=e)})),d(this,"handlePauseClick",(()=>{this.isPaused=!this.isPaused;const n=document.querySelector("#pauseButton");this.isPaused?(n.textContent="Resume",this.disableBoard()):(n.textContent="Pause",this.enableBoard())})),d(this,"disableBoard",(()=>{this.board.forEach((n=>n.forEach((n=>{n.$el.contentEditable=!1}))))})),d(this,"enableBoard",(()=>{this.board.forEach((n=>n.forEach((n=>{n.$el.contentEditable=!0}))))})),d(this,"provideHint",(()=>{if(!this.row&&!this.createNewMemo())return;const[n,e]=this.getFirstUnsolved(0,0);if(!1===n)return;const t=A(n,e);for(let r=1;r<=9;r+=1)if(!this.row.checkIfIn(n,r)&&!this.column.checkIfIn(e,r)&&!this.sector.checkIfIn(t,r))return this.setCellValue(n,e,r,"current"),void setTimeout((()=>{this.setCellValue(n,e,"",null)}),1e3)})),d(this,"resetBoard",(()=>{this.board.forEach(((n,e)=>n.forEach(((n,t)=>{this.setCellValue(e,t,"")})))),this.cleanUp(),this.createNewMemo()}))}render(){for(let n=0;n<9;n+=1)this.board[n]=new Array(9);const n=document.createElement("table");for(let e=0;e<9;e+=1){const t=document.createElement("tr");for(let n=0;n<9;n+=1){const r=document.createElement("td");r.addEventListener("input",this.handleInput),r.setAttribute("id",`${e}-${n}`),r.contentEditable=!0,t.appendChild(r),this.board[e][n]={$el:r,value:""}}n.appendChild(t)}return n}};document.querySelector("#main").appendChild(u.render()),document.querySelector("#solve").addEventListener("click",u.setUpBeforeSolveAndSolve),document.querySelector("#speed").addEventListener("input",u.handleSpeedInput),document.querySelector("#addArrayButton").addEventListener("click",(()=>u.handleInputFromArray(document.querySelector("#arrayInput").value))),document.querySelector("#difficulty").addEventListener("change",u.handleDifficultyChange),document.querySelector("#themeToggle").addEventListener("click",(()=>{document.body.classList.toggle("dark")})),document.querySelector("#pauseButton").addEventListener("click",u.handlePauseClick),document.querySelector("#hintButton").addEventListener("click",u.provideHint),document.querySelector("#resetButton").addEventListener("click",u.resetBoard),u.loadGame(),u.setBoardFromDifficulty()})();
//# sourceMappingURL=bundle.js.map