if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>d(e,s),l={module:{uri:s},exports:a,require:n};i[s]=Promise.all(c.map((e=>l[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"archives/2021/12/index.html",revision:"22b97acb8ab71fdc9bf75151e15dd103"},{url:"archives/2021/index.html",revision:"c501a00dc82855b4cddd8f220863b035"},{url:"archives/index.html",revision:"d273080ec3843893edb8c65a0d994c64"},{url:"artitalk/index.html",revision:"cb5829c7f15b5559ca1297c3975d2a7b"},{url:"categories/hexo/index.html",revision:"3e6b0ee6021ea07c78696ccaf36929f9"},{url:"categories/index.html",revision:"29d36ab373bc2eaafa98bc2784eb920d"},{url:"css/custom.css",revision:"79127ab384d3807a9b82c66d658561f9"},{url:"css/index.css",revision:"7dc832e279d84c8d986ff7d8bb234954"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"feedback/index.html",revision:"202d26d926f55deacc4c6d46662bf699"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"a10f8d4ae7aa8b0ada1234d61dd1b8e9"},{url:"js/custom.js",revision:"9ef150f03182d326b00a06d2528d7bee"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"7522dd33d66e616d9b5a68a418a68e48"},{url:"post/e14dadae.html",revision:"cff758176dc7d7df8451af4a3ba7aa45"},{url:"privacy/index.html",revision:"a87b53c168ba9236076924f49660372f"},{url:"record/index.html",revision:"353b1dd78e233d91c6a80a7d01b82642"},{url:"tags/hexo优化/index.html",revision:"5d648930e281055ab9eec41c0f2e05da"},{url:"tags/index.html",revision:"9d36d4820f48477370f9c1a11c0ad2eb"}],{})}));
//# sourceMappingURL=service-worker.js.map
