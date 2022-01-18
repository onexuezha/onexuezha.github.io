"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,a=new Array(r);i<r;i++)a[i]=e[i];return a}var e,i,d;self.define||(i={},d=function(a,r){return a=new URL(a+".js",r).href,i[a]||new Promise(function(r){var i;"document"in self?((i=document.createElement("script")).src=a,i.onload=r,document.head.appendChild(i)):(e=a,importScripts(a),r())}).then(function(){var e=i[a];if(!e)throw new Error("Module ".concat(a," didn’t register its module"));return e})},self.define=function(r,a){var n,c,t,o=e||("document"in self?document.currentScript.src:"")||location.href;i[o]||(t={module:{uri:o},exports:n={},require:c=function(e){return d(e,o)}},i[o]=Promise.all(r.map(function(e){return t[e]||c(e)})).then(function(e){return a.apply(void 0,_toConsumableArray(e)),n}))}),define(["./workbox-f683aea5"],function(e){self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"archives/2021/12/index.html",revision:"d88a4633a324b9df19b8f5b2dc2ef609"},{url:"archives/2021/index.html",revision:"734ce963d7334330d805450116081327"},{url:"archives/2022/01/index.html",revision:"d27b06572de0de9e714f2d9be1bfc107"},{url:"archives/2022/index.html",revision:"7c614acb1f20e150ff9d2bdbb51130a7"},{url:"archives/index.html",revision:"262d81bd94ff33f298c8f145e9417081"},{url:"archives/page/2/index.html",revision:"3c35a94f61a98bc916a02da8734c1b9a"},{url:"artitalk/index.html",revision:"b7dc1d7b574522c8496cb5c9ab23644f"},{url:"categories/index.html",revision:"f41fbe4f9d7ac1824df6d1507b8e1b6e"},{url:"categories/总结/index.html",revision:"da3880dbf544fcb44ccb8a680e5fea3c"},{url:"categories/我的世界/index.html",revision:"5c494b18daebf199d43f888aca15642c"},{url:"categories/推荐/index.html",revision:"8e07c0d99f6a9524a3d0654c07ea4b5f"},{url:"categories/教程/index.html",revision:"4049327661ab4d30ac6934241a57d562"},{url:"categories/水文/index.html",revision:"429fc147daecab144f6cd972398d0751"},{url:"css/index.css",revision:"6d0484c40f6d7428e6d238869241ab19"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"feedback/index.html",revision:"007cad1b33ce44ee5eed3318d219d485"},{url:"fwq/index.html",revision:"cdb156f0275c56c94823ddb110f031da"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/xuezha.webp",revision:"2ee8e2cafadd750cceb51ef95f3b3868"},{url:"img/yl.webp",revision:"398320a775295b73953a92e988e317bb"},{url:"index.html",revision:"6959a21c2696414444e82ea0870a4ddc"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"b3c9b2dc5558fbc10903001d4ae80065"},{url:"McFwq/index.html",revision:"ed3fc780868b257a283d3d0cab1b140a"},{url:"page/2/index.html",revision:"4171d0f18280a92859add6ca5c774ff4"},{url:"post/19b4a35b.html",revision:"d95d158859c479c89a7779120265e4ac"},{url:"post/210bf56.html",revision:"d63c08a0ed42d755db08fed1ac56cac7"},{url:"post/2431d2e0.html",revision:"59816f8733c3d27c6e800af0c62bb9ca"},{url:"post/264c4911.html",revision:"7b3fda40570070be799bc08df41c8980"},{url:"post/40b88bbc.html",revision:"5536b3d0b503fdee06aa4c639befc995"},{url:"post/a23e5172.html",revision:"754d298d020264499d4d61208a6ed555"},{url:"post/aa1b02f7.html",revision:"0f1f084b80d86a6c6d2f7d771d29b85d"},{url:"post/ac2ff674.html",revision:"bfe9617666a2b3676b6d707f10c13c1b"},{url:"post/b06129f1.html",revision:"463f974a4fd4e6eed57cd76277716eaf"},{url:"post/e14dadae.html",revision:"08174655ccf59883fd84278ee3e483da"},{url:"post/eca2c36b.html",revision:"1fef89e67d402d475beb9862f7208cb1"},{url:"post/ed8385e4.html",revision:"ae7db72f2e4d38e671101019831136b2"},{url:"post/f6880df7.html",revision:"8b8aa724b9701f9597a906c9d6f39a03"},{url:"privacy/index.html",revision:"2a860a82460041bad10ecbfadb9bf6c4"},{url:"record/index.html",revision:"edf5ec1f060aeadd7ecd6f915147cbeb"},{url:"tags/hexo优化/index.html",revision:"69063b1119ae7370aba4155d800bcd2b"},{url:"tags/index.html",revision:"e41998327fbe74a6847116c39b238688"},{url:"tags/我的世界服务器/index.html",revision:"c8eeea1499bc9e4c7872dab613ca2bc3"},{url:"tags/软件/index.html",revision:"a148a6319703e51640594f51f9d8af4c"}],{})});