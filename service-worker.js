"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,a=new Array(r);i<r;i++)a[i]=e[i];return a}var e,i,d;self.define||(i={},d=function(a,r){return a=new URL(a+".js",r).href,i[a]||new Promise(function(r){var i;"document"in self?((i=document.createElement("script")).src=a,i.onload=r,document.head.appendChild(i)):(e=a,importScripts(a),r())}).then(function(){var e=i[a];if(!e)throw new Error("Module ".concat(a," didn’t register its module"));return e})},self.define=function(r,a){var n,t,o,c=e||("document"in self?document.currentScript.src:"")||location.href;i[c]||(o={module:{uri:c},exports:n={},require:t=function(e){return d(e,c)}},i[c]=Promise.all(r.map(function(e){return o[e]||t(e)})).then(function(e){return a.apply(void 0,_toConsumableArray(e)),n}))}),define(["./workbox-f683aea5"],function(e){self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"about/index.html",revision:"c0e2bcf200c468b9f506b5677e4d94ea"},{url:"archives/2021/12/index.html",revision:"a59c4f5b1482af913441a5e3e84cd816"},{url:"archives/2021/index.html",revision:"e12f019621689848e2f292438a6ff5d0"},{url:"archives/index.html",revision:"ca3d7c13e32ad6752c9b033dc2624cbe"},{url:"categories/hexo/index.html",revision:"88e3748e0c59f41d96779b9b8de0b562"},{url:"categories/index.html",revision:"91768f1341855d0295499863bdb67c95"},{url:"css/custom.css",revision:"4c31dd22602c0f48df90711e7500355b"},{url:"css/index.css",revision:"7dc832e279d84c8d986ff7d8bb234954"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"feedback/index.html",revision:"f979ae4ce06dcd3fe6d89aa8db8cd9f7"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"cf3862ef5237aaca8ce3303381ff6f59"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"9ba1ae4760b7a2a894a9df7a27294c4a"},{url:"post/16107.html",revision:"3585a0396432e115fafffd3301170b8c"},{url:"post/e14dadae.html",revision:"204f82a629ad72e7fd3471d69c7c81e3"},{url:"privacy/index.html",revision:"5efb3a417fed92903b5ad647e0d480f6"},{url:"record/index.html",revision:"23bf740e3402af3054416e2a10c1d8cb"},{url:"tags/hexo优化/index.html",revision:"13d83179f42be080489ea6db386c058d"},{url:"tags/index.html",revision:"e5e3c120499a6369909daf8878353338"}],{})});