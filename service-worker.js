"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var a=0,i=new Array(r);a<r;a++)i[a]=e[a];return i}var e,i,d;self.define||(i={},d=function(n,r){return n=new URL(n+".js",r).href,i[n]||new Promise(function(r){var a;"document"in self?((a=document.createElement("script")).src=n,a.onload=r,document.head.appendChild(a)):(e=n,importScripts(n),r())}).then(function(){var e=i[n];if(!e)throw new Error("Module ".concat(n," didn’t register its module"));return e})},self.define=function(r,a){var n,t,c,o=e||("document"in self?document.currentScript.src:"")||location.href;i[o]||(c={module:{uri:o},exports:n={},require:t=function(e){return d(e,o)}},i[o]=Promise.all(r.map(function(e){return c[e]||t(e)})).then(function(e){return a.apply(void 0,_toConsumableArray(e)),n}))}),define(["./workbox-f683aea5"],function(e){self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"archives/2021/12/index.html",revision:"b3e9d9258fffc50340ea66c71014180e"},{url:"archives/2021/index.html",revision:"d20130fd1fa1138bcdc3cfce7e4e6f7b"},{url:"archives/2022/01/index.html",revision:"48c33243e9253a62a6f2380ef70dee80"},{url:"archives/2022/index.html",revision:"52a0db9bf2ae0a2a0984ae2de6bf0f55"},{url:"archives/index.html",revision:"f833ec7ddaed788287804481da44f00f"},{url:"artitalk/index.html",revision:"3f2ac0ed5dfa231cab7a4a7940cdd476"},{url:"categories/hexo/index.html",revision:"dcab0c62d6a0701ca98312469eaeefe0"},{url:"categories/index.html",revision:"721d179320150dd5f61a644ace79cad7"},{url:"categories/优质推荐/index.html",revision:"2fc8c9f36da9bd427f9075abf6efaa99"},{url:"categories/年终总结/index.html",revision:"d7095ff64214e9ef4ee87862d516263a"},{url:"categories/闲聊杂谈/index.html",revision:"035d7f0b7acce59a49e994a92f0df6ef"},{url:"css/index.css",revision:"6d0484c40f6d7428e6d238869241ab19"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"feedback/index.html",revision:"8823d4c82ef55ebf8c92eded27445814"},{url:"fwq/index.html",revision:"c8ed2f73ac4d118c23b3a8cf34015443"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/xuezha.webp",revision:"2ee8e2cafadd750cceb51ef95f3b3868"},{url:"img/yl.webp",revision:"398320a775295b73953a92e988e317bb"},{url:"index.html",revision:"b690b76565daa54337b67b0f0a09fa78"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"145de8381f31dec9af82452c5c5c27a9"},{url:"post/40b88bbc.html",revision:"53d15998d85303fb8cfb38603526dc25"},{url:"post/a23e5172.html",revision:"7c42e7d33eb627f60597ee7a9729343e"},{url:"post/aa1b02f7.html",revision:"755799468a2c73949fb0942724a2990a"},{url:"post/ac2ff674.html",revision:"07d7b362f7fbaa398edf8f59d60a0740"},{url:"post/e14dadae.html",revision:"304a54a67d2d04877c416cd81c11efda"},{url:"post/ed8385e4.html",revision:"6a4465d8abab071f9776f4d9ee092a56"},{url:"post/f6880df7.html",revision:"60df2fe051dddc6cb8e5645a39d68fcf"},{url:"privacy/index.html",revision:"fc0bb58918581fc0dc315fedfc1912ef"},{url:"record/index.html",revision:"24ed95ebc971d591ff2c23abadcb1527"},{url:"tags/hexo优化/index.html",revision:"00920a638d4549c579efa50048e4b453"},{url:"tags/index.html",revision:"13ad84d59e7d136f769e2b0de7bd22d8"},{url:"tags/软件/index.html",revision:"203bbeadcf50bc832f431c2298a9afd7"}],{})});