"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,a=new Array(r);i<r;i++)a[i]=e[i];return a}var e,i,c;self.define||(i={},c=function(a,r){return a=new URL(a+".js",r).href,i[a]||new Promise(function(r){var i;"document"in self?((i=document.createElement("script")).src=a,i.onload=r,document.head.appendChild(i)):(e=a,importScripts(a),r())}).then(function(){var e=i[a];if(!e)throw new Error("Module ".concat(a," didn’t register its module"));return e})},self.define=function(r,a){var n,t,o,d=e||("document"in self?document.currentScript.src:"")||location.href;i[d]||(o={module:{uri:d},exports:n={},require:t=function(e){return c(e,d)}},i[d]=Promise.all(r.map(function(e){return o[e]||t(e)})).then(function(e){return a.apply(void 0,_toConsumableArray(e)),n}))}),define(["./workbox-f683aea5"],function(e){self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"archives/2021/12/index.html",revision:"c9f50853135e9cc5fd958aa730785e40"},{url:"archives/2021/index.html",revision:"17f7a235ee8197035c828af761a9d129"},{url:"archives/index.html",revision:"a4939b4e9614a2cc2b8b6b4c7f35e1bc"},{url:"artitalk/index.html",revision:"b1bbceeead0f5be562c1a05f6b6f0200"},{url:"categories/hexo/index.html",revision:"e599633bfafde93f07f8b0b714428d7e"},{url:"categories/index.html",revision:"03fca0f624ecc6d5654600dd0f6e0de9"},{url:"css/custom.css",revision:"d7fe16907578575740d716e9aafc735f"},{url:"css/index.css",revision:"1440a510ea9ad0525cf63cdc2c472e94"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"feedback/index.html",revision:"a7ab364572c0704bcd36b17e455c6b57"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"8c06ede18b2771f20a7e54a72d8e1ccf"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"e5741acc218d536c43501eec9c5beb26"},{url:"post/e14dadae.html",revision:"bb896e90c8f8aaa45629f054f62d5917"},{url:"privacy/index.html",revision:"d18f3df0b6882651f9fa8e5b9b447876"},{url:"record/index.html",revision:"c1d5f930a9a639ad108e392b4272c622"},{url:"tags/hexo优化/index.html",revision:"8c2831fe087fddb2ac5ea9fea5ce2902"},{url:"tags/index.html",revision:"a45db634a6c31c9b17972cd04010a8d0"}],{})});