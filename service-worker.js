"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,a=new Array(r);i<r;i++)a[i]=e[i];return a}var e,i,d;self.define||(i={},d=function(a,r){return a=new URL(a+".js",r).href,i[a]||new Promise(function(r){var i;"document"in self?((i=document.createElement("script")).src=a,i.onload=r,document.head.appendChild(i)):(e=a,importScripts(a),r())}).then(function(){var e=i[a];if(!e)throw new Error("Module ".concat(a," didn’t register its module"));return e})},self.define=function(r,a){var n,c,t,o=e||("document"in self?document.currentScript.src:"")||location.href;i[o]||(t={module:{uri:o},exports:n={},require:c=function(e){return d(e,o)}},i[o]=Promise.all(r.map(function(e){return t[e]||c(e)})).then(function(e){return a.apply(void 0,_toConsumableArray(e)),n}))}),define(["./workbox-f683aea5"],function(e){self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"archives/2021/12/index.html",revision:"117d700bbc53ad2679d00fac56ba8806"},{url:"archives/2021/index.html",revision:"c17c3e5c2ad39831171fe9d9ea89feb4"},{url:"archives/2022/01/index.html",revision:"a5ee5f41a8e58a411e90d9b2835ea6f2"},{url:"archives/2022/index.html",revision:"0e57c175f9df74c8fc7558a2ce5e4a18"},{url:"archives/index.html",revision:"49e063d159c6844ea5febdd30be47b12"},{url:"archives/page/2/index.html",revision:"93c1142620cc0920737e1b37d07d98a0"},{url:"artitalk/index.html",revision:"26fcdf6722d7c86433c0646f9496a1db"},{url:"categories/index.html",revision:"0bf1583667e2d3468648bc402929b722"},{url:"categories/总结/index.html",revision:"0035b22e8080e3f599ec73f23403a3b2"},{url:"categories/我的世界/index.html",revision:"58dc02adcc00e81f0bb35c354d0dff50"},{url:"categories/推荐/index.html",revision:"e166de5f2f5ecf5f5163ea8eefcb2416"},{url:"categories/教程/index.html",revision:"c4cbc0ec134b614f93bf4f4867deb419"},{url:"categories/水文/index.html",revision:"39021d536f51f6cbe9db0d7a579e4318"},{url:"css/index.css",revision:"6d0484c40f6d7428e6d238869241ab19"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"feedback/index.html",revision:"7d0f209816704c8d06e4b4bddc90aa40"},{url:"fwq/index.html",revision:"723126b8110201c1f77693e85b4036d4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/xuezha.webp",revision:"2ee8e2cafadd750cceb51ef95f3b3868"},{url:"img/yl.webp",revision:"398320a775295b73953a92e988e317bb"},{url:"index.html",revision:"05e47d0c387b464c1035ec564bde0410"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"dd12deb9e61ff0768445ffd8bcc9742f"},{url:"McFwq/index.html",revision:"6f206e8a5eb3575dc70f0a4dbdaf520f"},{url:"page/2/index.html",revision:"2034900bc68f39c59d251776aa3d9eea"},{url:"post/19b4a35b.html",revision:"9f581be2e61044c69c0447358c6e60b4"},{url:"post/210bf56.html",revision:"6211747446a9fa8af234074ee1fd1ff4"},{url:"post/2431d2e0.html",revision:"9e27a4f9a9541331c3964e1767617510"},{url:"post/264c4911.html",revision:"9ac380563bdda224ded8594e4450b698"},{url:"post/40b88bbc.html",revision:"4881ed959ec6225ca6e5c26ac75b708a"},{url:"post/a23e5172.html",revision:"5069db62e74d1a41585402e395f60ea1"},{url:"post/aa1b02f7.html",revision:"7ac904c3573d05ec5d0c956ca12eec3b"},{url:"post/ac2ff674.html",revision:"5c53eb3ac1634d056b8fe344553e1721"},{url:"post/b06129f1.html",revision:"1a299c251af60c890682960df87e3902"},{url:"post/e14dadae.html",revision:"7a77e959747c1d453c0086b288a84547"},{url:"post/eca2c36b.html",revision:"119082d8a9778cf7e3be03a9f30f637d"},{url:"post/ed8385e4.html",revision:"0d3279ab123066b7a0d0d0d971e1a6ea"},{url:"post/f6880df7.html",revision:"668d36e57e08a17bb69fd71a56ef260d"},{url:"privacy/index.html",revision:"30b00a9a87ebdcbdaa82cc46dc6f48f0"},{url:"record/index.html",revision:"433cefab9a60f4494f29ff41199783dd"},{url:"tags/hexo优化/index.html",revision:"9dd830e44a34461bd5f12608ed3e8063"},{url:"tags/index.html",revision:"353eff000bb23ac0f664f010cec55c9c"},{url:"tags/我的世界服务器/index.html",revision:"4dbf2cdeb2c78909fb79e7f125e6b748"},{url:"tags/软件/index.html",revision:"98bda88a631769194c00a11755ba9db5"}],{})});