"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,a=new Array(r);i<r;i++)a[i]=e[i];return a}var e,i,d;self.define||(i={},d=function(a,r){return a=new URL(a+".js",r).href,i[a]||new Promise(function(r){var i;"document"in self?((i=document.createElement("script")).src=a,i.onload=r,document.head.appendChild(i)):(e=a,importScripts(a),r())}).then(function(){var e=i[a];if(!e)throw new Error("Module ".concat(a," didn’t register its module"));return e})},self.define=function(r,a){var n,t,c,o=e||("document"in self?document.currentScript.src:"")||location.href;i[o]||(c={module:{uri:o},exports:n={},require:t=function(e){return d(e,o)}},i[o]=Promise.all(r.map(function(e){return c[e]||t(e)})).then(function(e){return a.apply(void 0,_toConsumableArray(e)),n}))}),define(["./workbox-f683aea5"],function(e){self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"about/index.html",revision:"4f3215d24fe4daccedd5ac0a9d0a2f1d"},{url:"archives/2021/12/index.html",revision:"c0d35f488b3af5a3cf8d962e7e3d83f3"},{url:"archives/2021/index.html",revision:"d59eb6b05d14cd13ab7737c7f3e9a368"},{url:"archives/2022/01/index.html",revision:"f18c6ef6cd044626988e0b79ccfcfdc0"},{url:"archives/2022/02/index.html",revision:"a2f17741a30f602a974d129b4f71bd7f"},{url:"archives/2022/index.html",revision:"87a943551b94ff6a24de4973ad306c5e"},{url:"archives/index.html",revision:"302f163da59cf753773745eb3e50b2bd"},{url:"artitalk/index.html",revision:"7dd7eac4dbee2bba24ca2a9dd55b6aa3"},{url:"categories/index.html",revision:"56862e487e61f5f5dc67cd278ba9887c"},{url:"categories/总结/index.html",revision:"b1c81249448f2be452ab431547180ca7"},{url:"categories/教程/index.html",revision:"283a8b4b1741f26913051887dc6eebc0"},{url:"css/index.css",revision:"225ab40e391dde3ac6bb57a36242e07a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"feedback/index.html",revision:"9541c257565440a7a2f9bf85ced728ea"},{url:"fwq/index.html",revision:"8e987d2c3d2536b8f242e258fc4a6388"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"c8d4bd386d260623d0832b48321e2349"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"f031f1f47eafa0cd982552bce00cb955"},{url:"McFwq/index.html",revision:"b886747bf00a4a76973688d8e2220506"},{url:"post/3b8ba7c7.html",revision:"df1f89fe8394b1de59cf6af81ed54ca9"},{url:"post/67d4749d.html",revision:"2bb0d9ae21e98da31c1075b6d603f7c7"},{url:"post/a23e5172.html",revision:"0bd50a0af6b215b6e74d9067cd8e37d8"},{url:"post/a9033469.html",revision:"19ae06e16de332787bc6a1764ce09f44"},{url:"post/e14dadae.html",revision:"1d99ac78d8599e2cdccb798ec370f050"},{url:"privacy/index.html",revision:"3d42f641e77e553b35fe5805e99384b6"},{url:"record/index.html",revision:"ce2e79a0b12f8987755904122b5c154e"},{url:"tags/hexo优化/index.html",revision:"7fa93fa48982f683153aa5f91e0a3d74"},{url:"tags/index.html",revision:"2058e1e1ac7362c73d94a1321d9368de"},{url:"tags/白嫖/index.html",revision:"0a63f5a450660fc5cbfcc5c15794e3a1"}],{})});