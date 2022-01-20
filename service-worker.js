"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,a=new Array(r);i<r;i++)a[i]=e[i];return a}var e,i,d;self.define||(i={},d=function(a,r){return a=new URL(a+".js",r).href,i[a]||new Promise(function(r){var i;"document"in self?((i=document.createElement("script")).src=a,i.onload=r,document.head.appendChild(i)):(e=a,importScripts(a),r())}).then(function(){var e=i[a];if(!e)throw new Error("Module ".concat(a," didn’t register its module"));return e})},self.define=function(r,a){var n,t,o,c=e||("document"in self?document.currentScript.src:"")||location.href;i[c]||(o={module:{uri:c},exports:n={},require:t=function(e){return d(e,c)}},i[c]=Promise.all(r.map(function(e){return o[e]||t(e)})).then(function(e){return a.apply(void 0,_toConsumableArray(e)),n}))}),define(["./workbox-f683aea5"],function(e){self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"archives/2021/12/index.html",revision:"4ee969dab2a713ca341e7a0662285aa3"},{url:"archives/2021/index.html",revision:"456ccf93678a72a7c56e0a9e369e951f"},{url:"archives/2022/01/index.html",revision:"d0269e9ebd15acc86bc18adcbb6fa553"},{url:"archives/2022/index.html",revision:"77930ea4edfa4130d4c2b1cba1a55583"},{url:"archives/index.html",revision:"1656ae00e124b537f30e5d5127308e88"},{url:"archives/page/2/index.html",revision:"11e56725d158c36f2bdf95445d8dd035"},{url:"artitalk/index.html",revision:"7c833699969664620ee9b19ef4fbcabd"},{url:"categories/index.html",revision:"f41fbe4f9d7ac1824df6d1507b8e1b6e"},{url:"categories/总结/index.html",revision:"942601412917882bb16bb76f0b081653"},{url:"categories/我的世界/index.html",revision:"80f4488dd0ea372674fdc01445d39430"},{url:"categories/推荐/index.html",revision:"a58e63d9151267f2caa9cc0ac7e1a6d8"},{url:"categories/教程/index.html",revision:"b287d459ed17725f99e99da9ab1b8fa4"},{url:"categories/水文/index.html",revision:"2362fa41901bff719ad9efa1a889f782"},{url:"css/index.css",revision:"6d0484c40f6d7428e6d238869241ab19"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"feedback/index.html",revision:"b151346967c8275e76e0095b57671fb6"},{url:"fwq/index.html",revision:"7369b3ce66dd164c3d156e14ef0b6474"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/xuezha.webp",revision:"2ee8e2cafadd750cceb51ef95f3b3868"},{url:"img/yl.webp",revision:"398320a775295b73953a92e988e317bb"},{url:"index.html",revision:"0ed56133886fbfd8f4af250a9d490724"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"ad469cea3cf76b94459112966877bef7"},{url:"McFwq/index.html",revision:"5eeef0dbc3331c99ff423160a8889dff"},{url:"page/2/index.html",revision:"ba4e077a8b5f231fa8dd353e8052a675"},{url:"post/19b4a35b.html",revision:"5b5ee452138d84f69ddcbe725a6ee3cd"},{url:"post/210bf56.html",revision:"afb72967bc950936d8e271f57e0923f6"},{url:"post/2431d2e0.html",revision:"675da9e3516f105587445892a27c89e6"},{url:"post/264c4911.html",revision:"e7683d5640e3adff235582e2dfd9b923"},{url:"post/40b88bbc.html",revision:"5794876930623b689bec8520bc2bbe0f"},{url:"post/a23e5172.html",revision:"dd840b213f22883d093e356e48fa0b42"},{url:"post/aa1b02f7.html",revision:"1b6dd91957927401b38a31f0662c45a8"},{url:"post/ac2ff674.html",revision:"cd9de359f5f447db4fec6360c272ad51"},{url:"post/b06129f1.html",revision:"d31f0634c96beeba02763459b9322f51"},{url:"post/e14dadae.html",revision:"016b1cab951e25d5c6374dea1de72a13"},{url:"post/eca2c36b.html",revision:"3d1244614495a1dc47387d1ed1993df0"},{url:"post/ed8385e4.html",revision:"2557013ae5dd51615e33f6b7177d17c6"},{url:"post/f6880df7.html",revision:"422912e35717c70d0bda55d81d0f829f"},{url:"privacy/index.html",revision:"00de15b7b68f075ad16a2afba6c49b1d"},{url:"record/index.html",revision:"edf5ec1f060aeadd7ecd6f915147cbeb"},{url:"tags/hexo优化/index.html",revision:"6e34246a77e2bfc2c399fcad582af7ed"},{url:"tags/index.html",revision:"ed0ba8a732bed50106a04d33da94b6c7"},{url:"tags/我的世界服务器/index.html",revision:"8cfd43ae3a02536cf9a2325d48bd9250"},{url:"tags/软件/index.html",revision:"ab9920479bab35486d519f3992b4df2e"}],{})});