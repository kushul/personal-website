(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{173:function(t,e,n){var content=n(175);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("4e4f877a",content,!0,{sourceMap:!1})},174:function(t,e,n){"use strict";var r=n(173);n.n(r).a},175:function(t,e,n){(e=n(14)(!1)).push([t.i,"@media (screen and min-width:640px){.blog-posts .blog-box[data-v-67509227]:first-child{background:red}}.blog-posts[data-v-67509227]{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));grid-gap:30px;margin:0 auto}.blog-posts .blog-box[data-v-67509227]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px);-webkit-animation:reveal-data-v-67509227 .5s ease-out 1 forwards;animation:reveal-data-v-67509227 .5s ease-out 1 forwards;--multiplier:0.05;-webkit-animation-delay:calc(var(--delay)*var(--multiplier));animation-delay:calc(var(--delay)*var(--multiplier))}@media (min-width:640px){.blog-box[data-v-67509227]:first-child{grid-column:1/3;grid-row:1/2}}@-webkit-keyframes reveal-data-v-67509227{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes reveal-data-v-67509227{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.button[data-v-67509227]{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:.5rem 1rem}",""]),t.exports=e},176:function(t,e,n){"use strict";var r={props:["post"]},o=n(6),l={components:{BlogCard:Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"rounded overflow-hidden shadow",attrs:{to:"/blog/"+t.post.slug}},[n("img",{staticClass:"w-full object-cover",attrs:{src:t.post.feature_image,alt:t.post.title}}),t._v(" "),n("div",{staticClass:"px-6 py-4"},[n("div",{staticClass:"font-bold text-xl"},[t._v(t._s(t.post.title))]),t._v(" "),n("div",{staticClass:"text-xs uppercase pt-2 pb-4"},[t._v(t._s(t._f("dateFormat")(new Date(t.post.published_at),"DD MMMM YYYY")))]),t._v(" "),n("p",{staticClass:"text-gray-500"},[t._v(t._s(t.post.custom_excerpt))])])])}),[],!1,null,null,null).exports},props:{posts:{type:Array,required:!0},pagination:{type:Object,required:!0},indexBase:{type:String,required:!1,default:"/blog/"}},computed:{prevLink:function(){return 1===this.pagination.prev?this.indexBase:this.indexBase+"page/"+this.pagination.prev},nextLink:function(){return this.indexBase+"page/"+this.pagination.next}}},c=(n(174),Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"blog-posts"},t._l(t.posts,(function(t,e){return n("blog-card",{key:t.id,staticClass:"blog-box",style:"--delay:"+e+"s",attrs:{post:t}})})),1),t._v(" "),n("div",{staticClass:"flex justify-center py-10",attrs:{role:"navigation"}},[t.pagination.prev?n("div",[n("nuxt-link",{staticClass:"button",attrs:{to:t.prevLink}},[t._v("Prev")])],1):t._e(),t._v(" "),n("div",{staticClass:"px-5 py-2"},[t._v("Page "+t._s(t.pagination.page)+" of "+t._s(t.pagination.pages))]),t._v(" "),t.pagination.next?n("div",[n("nuxt-link",{staticClass:"button",attrs:{to:t.nextLink}},[t._v("Next")])],1):t._e()])])}),[],!1,null,"67509227",null));e.a=c.exports},186:function(t,e,n){var content=n(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("020cb294",content,!0,{sourceMap:!1})},187:function(t,e,n){var content=n(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("f3d7d0e6",content,!0,{sourceMap:!1})},188:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0839ddb0",content,!0,{sourceMap:!1})},189:function(t,e,n){var content=n(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("356662d5",content,!0,{sourceMap:!1})},190:function(t,e,n){t.exports=n.p+"img/d722e6e.jpg"},191:function(t,e,n){t.exports=n.p+"img/b07a125.png"},198:function(t,e,n){"use strict";var r=n(186);n.n(r).a},199:function(t,e,n){(e=n(14)(!1)).push([t.i,".main-image-wrapper[data-v-3646b26d]{-webkit-animation:bounce 2s infinite;animation:bounce 2s infinite;grid-area:e;position:relative}.image-fade[data-v-3646b26d]{width:30%}.works__pulse-bg[data-v-3646b26d]{-webkit-animation:pulse 2s infinite;animation:pulse 2s infinite;width:150px;height:150px;position:absolute;border-radius:100%;opacity:.8;z-index:-1;border:2px solid #38a169}.works__pulse-bg+.works__pulse-bg[data-v-3646b26d]{width:140px;height:140px;-webkit-animation-delay:.3s;animation-delay:.3s}.dots[data-v-3646b26d]{position:absolute;display:-webkit-box;display:flex;z-index:-1}.dots-bottom[data-v-3646b26d],.dots-top[data-v-3646b26d]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.dots-top[data-v-3646b26d]{top:-30%}.dots-left-top[data-v-3646b26d]{left:-25%;top:-10%;-webkit-transform:rotate(-320deg);transform:rotate(-320deg)}.dots-right-top[data-v-3646b26d]{right:-25%;top:-10%;-webkit-transform:rotate(-40deg);transform:rotate(-40deg)}.dots-right-bottom[data-v-3646b26d]{right:-25%;bottom:-10%;-webkit-transform:rotate(40deg);transform:rotate(40deg)}.dots-left-bottom[data-v-3646b26d]{left:-25%;bottom:-10%;-webkit-transform:rotate(320deg);transform:rotate(320deg)}.dots-bottom[data-v-3646b26d]{bottom:-30%}.dots-right[data-v-3646b26d]{right:-15%}.dots-left[data-v-3646b26d]{left:-15%}.dots__dot[data-v-3646b26d]{width:5px;height:5px;margin:5px;display:inline-block;border-radius:99px;background-color:#38a169}.dots__dot.vertical[data-v-3646b26d]{-webkit-animation:moveInOutY .35s linear infinite;animation:moveInOutY .35s linear infinite}.dots__dot.horizontal[data-v-3646b26d]{-webkit-animation:moveInOutX .35s linear infinite;animation:moveInOutX .35s linear infinite}",""]),t.exports=e},200:function(t,e,n){"use strict";var r=n(187);n.n(r).a},201:function(t,e,n){(e=n(14)(!1)).push([t.i,".social-items[data-v-888893f8]{padding:0;list-style:none;display:-webkit-box;display:flex}.social-items li a[data-v-888893f8]{width:60px;height:60px;margin:0 20px;text-align:center;cursor:pointer;border-radius:50%;border:4px solid #d8e2dc;-webkit-transition:all .5s ease;transition:all .5s ease;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.social-items li a[data-v-888893f8]:first-child{margin-left:0}.social-items li a:hover.facebook[data-v-888893f8]{border:5px solid #3b5998;box-shadow:0 0 15px #3b5998;-webkit-transition:all .5s ease;transition:all .5s ease}.social-items li a:hover.facebook svg[data-v-888893f8]{-webkit-transition:all .5s ease;transition:all .5s ease;fill:#3b5998}.social-items li a:hover.instagram[data-v-888893f8]{border:5px solid #bc2a8d;box-shadow:0 0 15px #bc2a8d;-webkit-transition:all .5s ease;transition:all .5s ease}.social-items li a:hover.instagram svg[data-v-888893f8]{-webkit-transition:all .5s ease;transition:all .5s ease;fill:#bc2a8d}.social-items li a:hover.twitter[data-v-888893f8]{border:5px solid #00aced;box-shadow:0 0 15px #00aced;-webkit-transition:all .5s ease;transition:all .5s ease}.social-items li a:hover.twitter svg[data-v-888893f8]{-webkit-transition:all .5s ease;transition:all .5s ease;fill:#00aced}.social-items li a:hover.email[data-v-888893f8]{border:5px solid #dd4b39;box-shadow:0 0 15px #dd4b39;-webkit-transition:all .5s ease;transition:all .5s ease}.social-items li a:hover.email svg[data-v-888893f8]{-webkit-transition:all .5s ease;transition:all .5s ease;fill:#dd4b39}.social-items li a:hover.linkedIn[data-v-888893f8]{border:5px solid #0073b1;box-shadow:0 0 15px #0073b1;-webkit-transition:all .5s ease;transition:all .5s ease}.social-items li a:hover.linkedIn svg[data-v-888893f8]{-webkit-transition:all .5s ease;transition:all .5s ease;fill:#0073b1}",""]),t.exports=e},202:function(t,e,n){"use strict";var r=n(188);n.n(r).a},203:function(t,e,n){(e=n(14)(!1)).push([t.i,".home-main-intro[data-v-57284c42]{height:70vh;overflow:hidden;display:grid;grid-template-columns:2fr 1fr;grid-gap:40px}.name-wrapper[data-v-57284c42]{position:absolute;z-index:-1}.name-wrapper h1[data-v-57284c42]{font-size:100px;letter-spacing:10px;font-weight:900;line-height:100px;font-family:var(--font-oswald)}.name-wrapper h1[data-v-57284c42]:last-child{margin-left:50px}.profile-image-wrapper[data-v-57284c42]{position:relative;z-index:10}.profile-image-wrapper .image-wrapper[data-v-57284c42]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;-webkit-box-align:center;align-items:center}.profile-image-wrapper .image-wrapper img[data-v-57284c42]{width:50%}.social-media-container[data-v-57284c42]{margin:40px 0}",""]),t.exports=e},204:function(t,e,n){var map={"./boo.svg":205,"./brick-wall.png":206,"./coffee_mode.svg":207,"./creative.svg":208,"./dark_mode.svg":209,"./diagonal-waves.png":210,"./icon/fb.svg":211,"./kush.png":191,"./kush.svg":212,"./kushul_cartoon.jpg":190,"./light_mode.svg":213,"./navy.png":214,"./p1.png":112,"./subtle-dark-vertical.png":215};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=204},205:function(t,e,n){t.exports=n.p+"img/597a474.svg"},206:function(t,e,n){t.exports=n.p+"img/effad15.png"},207:function(t,e,n){t.exports=n.p+"img/bb8d21b.svg"},208:function(t,e,n){t.exports=n.p+"img/000e5d5.svg"},209:function(t,e,n){t.exports=n.p+"img/ba85bec.svg"},210:function(t,e,n){t.exports=n.p+"img/ca2083f.png"},211:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTU1LjEzOSAxNTUuMTM5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNTUuMTM5IDE1NS4xMzk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGlkPSJmXzFfIiBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTg5LjU4NCwxNTUuMTM5Vjg0LjM3OGgyMy43NDJsMy41NjItMjcuNTg1SDg5LjU4NFYzOS4xODQNCgkJYzAtNy45ODQsMi4yMDgtMTMuNDI1LDEzLjY3LTEzLjQyNWwxNC41OTUtMC4wMDZWMS4wOEMxMTUuMzI1LDAuNzUyLDEwNi42NjEsMCw5Ni41NzcsMEM3NS41MiwwLDYxLjEwNCwxMi44NTMsNjEuMTA0LDM2LjQ1Mg0KCQl2MjAuMzQxSDM3LjI5djI3LjU4NWgyMy44MTR2NzAuNzYxSDg5LjU4NHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"},212:function(t,e,n){t.exports=n.p+"img/025decd.svg"},213:function(t,e,n){t.exports=n.p+"img/e1f88ac.svg"},214:function(t,e,n){t.exports=n.p+"img/7000583.png"},215:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAAMklEQVR4Ae3MoREAMAwCwMR2ruw/TnTZoZXPHeC+K5mT2fTD99QLAAQCgUAgEAgEAoEXXjB0aAsO0UUAAAAASUVORK5CYII="},216:function(t,e,n){"use strict";var r=n(189);n.n(r).a},217:function(t,e,n){(e=n(14)(!1)).push([t.i,'.main-tagline-container[data-v-22d739e4]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:.5fr 1fr .5fr;grid-gap:60px;grid-template-areas:"a b c" "d e f" "h i j";margin-top:2rem}.tagline-wrapper[data-v-22d739e4]{position:relative;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;z-index:10}.text-fade[data-v-22d739e4]{height:100%;position:absolute}.title[data-v-22d739e4]{display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.links[data-v-22d739e4]{padding-top:15px}.button[data-v-22d739e4]{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:.5rem 1.25rem;display:inline-block}',""]),t.exports=e},219:function(t,e,n){"use strict";n.r(e);n(32);var r,o=n(4),l=n(20),c=(n(198),n(6)),d=Object(c.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-image-wrapper relative flex items-center justify-center"},[r("img",{staticClass:"h-56 md:w-56 mx-auto rounded-full object-cover",attrs:{src:n(190),alt:""}}),t._v(" "),r("div",{staticClass:"works__pulse-bg"}),t._v(" "),r("div",{staticClass:"works__pulse-bg"}),t._v(" "),r("div",{staticClass:"dots dots-top"},t._l(6,(function(t){return r("div",{key:t,staticClass:"dots__dot vertical"})})),0),t._v(" "),r("div",{staticClass:"dots dots-bottom"},t._l(6,(function(t){return r("div",{key:t,staticClass:"dots__dot vertical"})})),0),t._v(" "),r("div",{staticClass:"dots dots-left-top"},t._l(16,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-right-top"},t._l(16,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-right"},t._l(10,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-left"},t._l(12,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-right-bottom"},t._l(16,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-left-bottom"},t._l(16,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0)])}),[],!1,null,"3646b26d",null).exports,v=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"left-part-wrapper"},[e("div",{staticClass:"profile-image-wrapper"},[e("div",{staticClass:"name-wrapper"},[e("h1",[this._v("Kushul")]),this._v(" "),e("h1",[this._v("Soomaree")])]),this._v(" "),e("div",{staticClass:"image-wrapper"},[e("img",{attrs:{src:n(191),alt:"Kushul Soomaree"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"author-job"},[e("h3",[this._v("Software Engineer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"author-title"},[e("h4",[this._v("Based in Mauritius, I'm a Developer and graphic designer")])])}],m=(n(200),{components:{SocialMedia:Object(c.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-media-wrapper"},[n("ul",{staticClass:"social-items"},[n("li",[n("a",{staticClass:"facebook",attrs:{href:"https://www.facebook.com/kushul.soomaree",target:"_blank"}},[n("svg",{staticClass:"h-6 w-6 fill-current",staticStyle:{"enable-background":"new 0 0 155.139 155.139"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 155.139 155.139","xml:space":"preserve"}},[n("g",[n("path",{attrs:{id:"f_1_",d:"M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184\n\t\tc0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452\n\t\tv20.341H37.29v27.585h23.814v70.761H89.584z"}})])])])]),t._v(" "),n("li",[n("a",{staticClass:"instagram",attrs:{href:"https://www.instagram.com/kushul_/",target:"_blank"}},[n("svg",{staticClass:"h-6 w-6 fill-current",attrs:{height:"511pt",viewBox:"0 0 511 511.9",width:"511pt",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"}}),t._v(" "),n("path",{attrs:{d:"m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"}}),t._v(" "),n("path",{attrs:{d:"m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"}})])])]),t._v(" "),n("li",[n("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/kushul_soomaree",target:"_blank"}},[n("svg",{staticClass:"h-6 w-6 fill-current",staticStyle:{"enable-background":"new 0 0 543.684 543.684"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"543.684px",height:"543.684px",viewBox:"0 0 543.684 543.684","xml:space":"preserve"}},[n("g",[n("g",[n("path",{attrs:{d:"M527.657,106.697c-2.681,0.783-5.361,1.512-8.041,2.191c-16.384,4.137-17.89-1.322-6.028-13.366\n\t\t\tc5.312-5.397,10.006-11.267,14.082-17.607c9.137-14.217,1.212-20.417-14.333-13.776c-5.545,2.369-11.182,4.517-16.897,6.432\n\t\t\tc-16.017,5.379-38.746-2.735-53.018-11.787c-18.018-11.426-38.495-17.136-61.438-17.136c-32.137,0-59.529,11.334-82.192,33.984\n\t\t\tc-22.656,22.662-33.99,50.062-33.99,82.191c0,4.394,0.251,8.855,0.747,13.378c0.814,7.362-11.585,12.699-28.317,10.336\n\t\t\tc-36.194-5.11-70.582-16.077-103.171-32.889c-32.32-16.671-60.845-37.65-85.57-62.938C37.672,73.624,21.687,74.665,17.274,90.98\n\t\t\tc-2.644,9.78-3.959,19.951-3.959,30.515c0,19.908,4.675,38.372,14.027,55.392c4.651,8.47,10.098,16.138,16.353,22.999\n\t\t\tc10.521,11.549,8.911,18.25-5.734,14.144c-14.639-4.106-25.367-10.202-25.367-9.804s0,0.722,0,0.722\n\t\t\tc0,28.048,8.807,52.693,26.432,73.911c10.857,13.072,23.47,23.17,37.834,30.282c15.147,7.503,22.203,11.688,13.733,12.784\n\t\t\tc-5.11,0.661-10.251,0.991-15.422,0.991c-3.5,0-7.172-0.159-11.003-0.483c-6.059-0.514-7.148,12.111,2.038,26.298\n\t\t\tc7.301,11.273,16.646,21.193,28.03,29.762c11.579,8.721,24.058,14.981,37.417,18.794c16.255,4.633,19.517,13.073,5.024,21.763\n\t\t\tc-35.863,21.519-75.551,32.277-119.058,32.277c-4.902,0-9.578-0.11-14.045-0.324c-7.754-0.373-2.552,6.456,12.417,14.296\n\t\t\tc46.775,24.499,97.43,36.738,151.972,36.738c41.237,0,79.964-6.529,116.176-19.596c36.199-13.066,67.136-30.576,92.791-52.516\n\t\t\tc25.655-21.94,47.779-47.173,66.365-75.711c18.581-28.537,32.424-58.33,41.543-89.376c9.106-31.053,13.666-62.167,13.666-93.342\n\t\t\tc0-2.809-0.024-5.331-0.067-7.552c-0.086-4.174,10.955-15.472,23.28-27.032c5.563-5.22,10.869-10.698,15.937-16.444\n\t\t\tC548.833,107.78,543.882,101.966,527.657,106.697z"}})])])])])]),t._v(" "),n("li",[n("a",{staticClass:"email",attrs:{href:"mailto: kushul.soomaree@gmail.com",target:"_blank"}},[n("svg",{staticClass:"h-6 w-6 fill-current",staticStyle:{"enable-background":"new 0 0 382.117 382.117"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 382.117 382.117","xml:space":"preserve"}},[n("path",{attrs:{d:"M336.764,45.945H45.354C20.346,45.945,0,65.484,0,89.5v203.117c0,24.016,20.346,43.555,45.354,43.555h291.41\n\tc25.008,0,45.353-19.539,45.353-43.555V89.5C382.117,65.484,361.772,45.945,336.764,45.945z M336.764,297.72H45.354\n\tc-3.676,0-6.9-2.384-6.9-5.103V116.359l131.797,111.27c2.702,2.282,6.138,3.538,9.676,3.538l22.259,0.001\n\tc3.536,0,6.974-1.257,9.677-3.539l131.803-111.274v176.264C343.664,295.336,340.439,297.72,336.764,297.72z M191.059,192.987\n\tL62.87,84.397h256.378L191.059,192.987z"}})])])]),t._v(" "),n("li",[n("a",{staticClass:"linkedIn",attrs:{href:"https://www.linkedin.com/in/kushul-soomaree-515502147/",target:"_blank"}},[n("svg",{staticClass:"h-6 w-6 fill-current",attrs:{id:"Bold","enable-background":"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"}}),t._v(" "),n("path",{attrs:{d:"m.396 7.977h4.976v16.023h-4.976z"}}),t._v(" "),n("path",{attrs:{d:"m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"}})])])])])])}),[],!1,null,"888893f8",null).exports}}),f=(n(202),Object(c.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-main-intro section-gap"},[this._m(0),this._v(" "),e("div",{staticClass:"right-part-wrapper"},[this._m(1),this._v(" "),this._m(2),this._v(" "),e("div",{staticClass:"social-media-container"},[e("SocialMedia")],1)])])}),v,!1,null,"57284c42",null).exports),x=n(176),w={asyncData:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,e.store,e.error,e.payload,r=1,n.pageNumber&&(r=n.pageNumber),t.next=6,l.a.posts.browse({limit:l.c,page:r,include:"tags,authors",fields:l.b,filter:"featured: true"});case 6:return o=t.sent,t.abrupt("return",{indexPosts:o,indexPagination:o.meta.pagination});case 8:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),data:function(){return{taglines:[{text:"Creative",image:"creative.svg",gridarea:"a",justify:"flex-end",align:"flex-end"},{text:"Creative",image:"creative.svg",gridarea:"b",justify:"center",align:"flex-end"},{text:"Creative",image:"creative.svg",gridarea:"c",justify:"flex-start",align:"flex-end"},{text:"Creative",image:"creative.svg",gridarea:"d",justify:"flex-end",align:"center"},{text:"Creative",image:"creative.svg",gridarea:"f",justify:"flex-start",align:"center"},{text:"Creative",image:"creative.svg",gridarea:"h",justify:"flex-end",align:"flex-start"},{text:"Creative",image:"creative.svg",gridarea:"i",justify:"center",align:"flex-start"},{text:"Creative",image:"creative.svg",gridarea:"j",justify:"flex-start",align:"flex-start"}]}},components:{PostList:x.a,MainImage:d,MainIntro:f},methods:{findImage:function(t){if(t)return n(204)("./".concat(t))}}},h=(n(216),Object(c.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto home-main-container"},[n("MainIntro"),t._v(" "),n("div",{staticClass:"main-tagline-container section-gap"},[t._l(t.taglines,(function(e,r){return n("div",{key:r,staticClass:"tagline-wrapper",style:{"grid-area":e.gridarea,"justify-content":e.justify,"align-items":e.align}},[n("h2",{staticClass:"tracking-tight font-serif text-copy-primary text-3xl md:text-5xl text-fade"},[t._v(t._s(e.text))]),t._v(" "),n("img",{staticClass:"image-fade",attrs:{src:t.findImage(e.image),alt:"creative"}})])})),t._v(" "),n("Main-image")],2)],1)}),[],!1,null,"22d739e4",null));e.default=h.exports}}]);