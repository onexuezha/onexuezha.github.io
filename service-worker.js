"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,a=new Array(r);i<r;i++)a[i]=e[i];return a}var e,i,c;self.define||(i={},c=function(a,r){return a=new URL(a+".js",r).href,i[a]||new Promise(function(r){var i;"document"in self?((i=document.createElement("script")).src=a,i.onload=r,document.head.appendChild(i)):(e=a,importScripts(a),r())}).then(function(){var e=i[a];if(!e)throw new Error("Module ".concat(a," didn’t register its module"));return e})},self.define=function(r,a){var n,d,t,o=e||("document"in self?document.currentScript.src:"")||location.href;i[o]||(t={module:{uri:o},exports:n={},require:d=function(e){return c(e,o)}},i[o]=Promise.all(r.map(function(e){return t[e]||d(e)})).then(function(e){return a.apply(void 0,_toConsumableArray(e)),n}))}),define(["./workbox-f683aea5"],function(e){self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"archives/2021/12/index.html",revision:"3e014b88a1131c10598b805008a711f8"},{url:"archives/2021/index.html",revision:"058167714c6af43f1083ad5581fddcdd"},{url:"archives/2022/01/index.html",revision:"23863cc21048a1cb6aa508d67dc3a490"},{url:"archives/2022/index.html",revision:"f31572ea56c922e011e48715a7725747"},{url:"archives/index.html",revision:"6e1f60ed19160a3d83d5f66f4c7c30fa"},{url:"archives/page/2/index.html",revision:"45d137e011c23b141681774edfbfebad"},{url:"artitalk/index.html",revision:"fbdfff44eedcd788c11329c62d6cf059"},{url:"categories/index.html",revision:"0bf1583667e2d3468648bc402929b722"},{url:"categories/总结/index.html",revision:"cc9f5496f71395a18bb5e62283ab48cb"},{url:"categories/我的世界/index.html",revision:"ca1dcd8472ccccadf3f02dc390f1e5ee"},{url:"categories/推荐/index.html",revision:"444b70519c7813a8707e83ecb7d185fc"},{url:"categories/教程/index.html",revision:"d6baca4da17ccc62743b3345a6389dba"},{url:"categories/水文/index.html",revision:"ca8d907ef8ac5c5228e7bd31f0f64447"},{url:"css/index.css",revision:"6d0484c40f6d7428e6d238869241ab19"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"feedback/index.html",revision:"7d0f209816704c8d06e4b4bddc90aa40"},{url:"fwq/index.html",revision:"9f1890bf019e5af5771bd590dd56217c"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/xuezha.webp",revision:"2ee8e2cafadd750cceb51ef95f3b3868"},{url:"img/yl.webp",revision:"398320a775295b73953a92e988e317bb"},{url:"index.html",revision:"6ebafacc96b52ec19d635832df80aa37"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"dd12deb9e61ff0768445ffd8bcc9742f"},{url:"McFwq/index.html",revision:"9a6d88f10e07bcb5f6259917accb718a"},{url:"page/2/index.html",revision:"d4cf20ba975cc21137335c2a19cc1e04"},{url:"post/19b4a35b.html",revision:"723b9e0b7e94a3214888fed58d7f38a3"},{url:"post/210bf56.html",revision:"e79ecf0c893e37dff2246f004e5c1622"},{url:"post/2431d2e0.html",revision:"42b727346b3a0b05fbf1f2e199a7cad7"},{url:"post/264c4911.html",revision:"3d717a3e2fda2744bc936e73b89a2292"},{url:"post/40b88bbc.html",revision:"4881ed959ec6225ca6e5c26ac75b708a"},{url:"post/a23e5172.html",revision:"5069db62e74d1a41585402e395f60ea1"},{url:"post/aa1b02f7.html",revision:"7ac904c3573d05ec5d0c956ca12eec3b"},{url:"post/ac2ff674.html",revision:"5c53eb3ac1634d056b8fe344553e1721"},{url:"post/b06129f1.html",revision:"13b1a0b467e9502b7130ef5041cde938"},{url:"post/e14dadae.html",revision:"7a77e959747c1d453c0086b288a84547"},{url:"post/eca2c36b.html",revision:"107f309ffe5fe5196a8459ebbc449264"},{url:"post/ed8385e4.html",revision:"0d3279ab123066b7a0d0d0d971e1a6ea"},{url:"post/f6880df7.html",revision:"668d36e57e08a17bb69fd71a56ef260d"},{url:"privacy/index.html",revision:"7169204581b8a99392b7a53e43e9e01f"},{url:"record/index.html",revision:"433cefab9a60f4494f29ff41199783dd"},{url:"tags/hexo优化/index.html",revision:"108395dbaf11e66c979f8e2bf02d3659"},{url:"tags/index.html",revision:"1348e42279bda822a0607e2dbcfcbb6d"},{url:"tags/我的世界服务器/index.html",revision:"671043216cc94ceb291104e22ffe47dc"},{url:"tags/软件/index.html",revision:"fc97ec22b732dff81d1fedf8445727af"}],{})});