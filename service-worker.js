"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,a=new Array(r);i<r;i++)a[i]=e[i];return a}var e,i,c;self.define||(i={},c=function(a,r){return a=new URL(a+".js",r).href,i[a]||new Promise(function(r){var i;"document"in self?((i=document.createElement("script")).src=a,i.onload=r,document.head.appendChild(i)):(e=a,importScripts(a),r())}).then(function(){var e=i[a];if(!e)throw new Error("Module ".concat(a," didn’t register its module"));return e})},self.define=function(r,a){var n,t,o,d=e||("document"in self?document.currentScript.src:"")||location.href;i[d]||(o={module:{uri:d},exports:n={},require:t=function(e){return c(e,d)}},i[d]=Promise.all(r.map(function(e){return o[e]||t(e)})).then(function(e){return a.apply(void 0,_toConsumableArray(e)),n}))}),define(["./workbox-f683aea5"],function(e){self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"archives/2021/12/index.html",revision:"6a5f57e937c49cfcf98dc83a4a46913b"},{url:"archives/2021/index.html",revision:"ac9230e24186fb396c1298fd523ef600"},{url:"archives/index.html",revision:"79cdadc48449b741c2d26d8ee06da968"},{url:"artitalk/index.html",revision:"45f4b47e7e7e5487635eb18936ad6f11"},{url:"categories/hexo/index.html",revision:"16f3d8a230f3f346a42109f10f045951"},{url:"categories/index.html",revision:"f81f83f90b1f5d7cf56cfa40273095fa"},{url:"css/index.css",revision:"9fbce7c9ae1bd2c0a0716e8570a855c5"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"feedback/index.html",revision:"a66dbf98645714ffa070c7a73653a82d"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"5814ce0501356d75749220be4e2d2e1b"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"eb30eb9302aa0e6dfc12afa0e733f24b"},{url:"post/e14dadae.html",revision:"53dcb0b8c5a1955662c6262d2cddb678"},{url:"privacy/index.html",revision:"6b846c423c41393e90752dcaf867d251"},{url:"record/index.html",revision:"ea3354702ae455dd631c839728b965a0"},{url:"tags/hexo优化/index.html",revision:"9aba8dfbbb2f22c9ed684692564a23ec"},{url:"tags/index.html",revision:"5342b633fa4ecdbb48f5bc64cfa825d1"}],{})});