"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,a=new Array(r);i<r;i++)a[i]=e[i];return a}var e,i,r;self.define||(i={},r=function(a,r){return a=new URL(a+".js",r).href,i[a]||new Promise(function(r){var i;"document"in self?((i=document.createElement("script")).src=a,i.onload=r,document.head.appendChild(i)):(e=a,importScripts(a),r())}).then(function(){var e=i[a];if(!e)throw new Error("Module ".concat(a," didn’t register its module"));return e})},self.define=function(a,n){var t,o,c,s=e||("document"in self?document.currentScript.src:"")||location.href;i[s]||(c={module:{uri:s},exports:t={},require:o=function(e){return r(e,s)}},i[s]=Promise.all(a.map(function(e){return c[e]||o(e)})).then(function(e){return n.apply(void 0,_toConsumableArray(e)),t}))}),define(["./workbox-f683aea5"],function(e){self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"archives/2021/12/index.html",revision:"f5483a5334e5c53b1537fae064ca90ff"},{url:"archives/2021/index.html",revision:"940c2c5020a34c8cc113d5e48a5dff78"},{url:"archives/index.html",revision:"a5bf7d6130c7a0e6e9397467f09f4270"},{url:"categories/c/index.html",revision:"83296802cf02ef4b5e98f49babae4217"},{url:"categories/hexo/index.html",revision:"e1a001e36d255754698d7689aaff04f4"},{url:"css/custom.css",revision:"9bc4953f53b0c798a0c1ec526f9aea1b"},{url:"css/index.css",revision:"e2463e3afd244c1fb59890853ce790d3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"7d769f851f13a13432e84308dc16c8e7"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"post/16107.html",revision:"141dae3b0a1eb7524ea2b0ba788eb452"},{url:"post/64126.html",revision:"b8f5716db6bb13791e50dd56257ea8da"},{url:"post/b5f422e3.html",revision:"49958b5753833ff60b2340ad54269732"},{url:"post/e14dadae.html",revision:"625810fe5f2890d9d72ce9e39dbda178"},{url:"tags/hexo优化/index.html",revision:"6709c14d1107a520231e8598aa8029dc"},{url:"tags/笔记/index.html",revision:"b80c0b61f1411ded4467ca1132cd2697"},{url:"关于/index.html",revision:"8a5d1679273c30dcb1178960e2a127b3"},{url:"分类/index.html",revision:"6ff95af07586ac4c65e9bbf0ee4b993b"},{url:"友联/index.html",revision:"d25441e4980fb74a7a5872b588fba143"},{url:"反馈/index.html",revision:"cc79c7d29bbf568d8996b5ba240ea12a"},{url:"标签/index.html",revision:"5e3c7ee25c647bc743016de08e15b640"},{url:"记录/index.html",revision:"325338322f386ac2c61e45a705692b2f"},{url:"隐私/index.html",revision:"9c4111eb38305a8a12afb073c0b14426"}],{})});