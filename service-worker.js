"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,a=new Array(r);i<r;i++)a[i]=e[i];return a}var e,i,d;self.define||(i={},d=function(a,r){return a=new URL(a+".js",r).href,i[a]||new Promise(function(r){var i;"document"in self?((i=document.createElement("script")).src=a,i.onload=r,document.head.appendChild(i)):(e=a,importScripts(a),r())}).then(function(){var e=i[a];if(!e)throw new Error("Module ".concat(a," didn’t register its module"));return e})},self.define=function(r,a){var n,t,o,c=e||("document"in self?document.currentScript.src:"")||location.href;i[c]||(o={module:{uri:c},exports:n={},require:t=function(e){return d(e,c)}},i[c]=Promise.all(r.map(function(e){return o[e]||t(e)})).then(function(e){return a.apply(void 0,_toConsumableArray(e)),n}))}),define(["./workbox-f683aea5"],function(e){self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"archives/2021/12/index.html",revision:"0cb6fd98d22c309fc58fdaeeeb6db03f"},{url:"archives/2021/index.html",revision:"259408b2c6eb8a87971794442650b4dc"},{url:"archives/index.html",revision:"e65bf6e536a4fe7a60ca8aada4e8a0d4"},{url:"artitalk/index.html",revision:"d31510a043a1da73752d24b5bfa00919"},{url:"categories/hexo/index.html",revision:"444949273d31c371e44c9e5406197ba8"},{url:"categories/index.html",revision:"d6ef3692cd341f893ccdc6c4d58b36ce"},{url:"css/custom.css",revision:"79127ab384d3807a9b82c66d658561f9"},{url:"css/index.css",revision:"7dc832e279d84c8d986ff7d8bb234954"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"feedback/index.html",revision:"b9c1586886bf6103494f8a1aaf2ef93d"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"150cc98ae39f53a979885d9cc81f7fb5"},{url:"js/custom.js",revision:"9ef150f03182d326b00a06d2528d7bee"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"451d2b3c66d29ee7e73a526b1843b2e5"},{url:"post/e14dadae.html",revision:"040c6f86ebbd0353d60bd046ddcf96bc"},{url:"privacy/index.html",revision:"ae13b4b8a35530ac6c31a7d1845aec12"},{url:"record/index.html",revision:"eed1362ea203144b122384f1db92842b"},{url:"tags/hexo优化/index.html",revision:"23fb0257f4b69bdd125fa1259df7b9a9"},{url:"tags/index.html",revision:"e3f3f5039e85b483dc98845642afa04e"}],{})});