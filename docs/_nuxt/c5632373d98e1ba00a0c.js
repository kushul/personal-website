(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{170:function(t,e,o){var content=o(172);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("4e4f877a",content,!0,{sourceMap:!1})},171:function(t,e,o){"use strict";var r=o(170);o.n(r).a},172:function(t,e,o){(e=o(14)(!1)).push([t.i,"@media (screen and min-width:640px){.blog-posts .blog-box[data-v-67509227]:first-child{background:red}}.blog-posts[data-v-67509227]{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));grid-gap:30px;margin:0 auto}.blog-posts .blog-box[data-v-67509227]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px);-webkit-animation:reveal-data-v-67509227 .5s ease-out 1 forwards;animation:reveal-data-v-67509227 .5s ease-out 1 forwards;--multiplier:0.05;-webkit-animation-delay:calc(var(--delay)*var(--multiplier));animation-delay:calc(var(--delay)*var(--multiplier))}@media (min-width:640px){.blog-box[data-v-67509227]:first-child{grid-column:1/3;grid-row:1/2}}@-webkit-keyframes reveal-data-v-67509227{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes reveal-data-v-67509227{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.button[data-v-67509227]{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:.5rem 1rem}",""]),t.exports=e},173:function(t,e,o){"use strict";var r={props:["post"]},n=o(6),d={components:{BlogCard:Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"rounded overflow-hidden shadow",attrs:{to:"/blog/"+t.post.slug}},[o("img",{staticClass:"w-full object-cover",attrs:{src:t.post.feature_image,alt:t.post.title}}),t._v(" "),o("div",{staticClass:"px-6 py-4"},[o("div",{staticClass:"font-bold text-xl"},[t._v(t._s(t.post.title))]),t._v(" "),o("div",{staticClass:"text-xs uppercase pt-2 pb-4"},[t._v(t._s(t._f("dateFormat")(new Date(t.post.published_at),"DD MMMM YYYY")))]),t._v(" "),o("p",{staticClass:"text-gray-500"},[t._v(t._s(t.post.custom_excerpt))])])])}),[],!1,null,null,null).exports},props:{posts:{type:Array,required:!0},pagination:{type:Object,required:!0},indexBase:{type:String,required:!1,default:"/blog/"}},computed:{prevLink:function(){return 1===this.pagination.prev?this.indexBase:this.indexBase+"page/"+this.pagination.prev},nextLink:function(){return this.indexBase+"page/"+this.pagination.next}}},l=(o(171),Object(n.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"blog-posts"},t._l(t.posts,(function(t,e){return o("blog-card",{key:t.id,staticClass:"blog-box",style:"--delay:"+e+"s",attrs:{post:t}})})),1),t._v(" "),o("div",{staticClass:"flex justify-center py-10",attrs:{role:"navigation"}},[t.pagination.prev?o("div",[o("nuxt-link",{staticClass:"button",attrs:{to:t.prevLink}},[t._v("Prev")])],1):t._e(),t._v(" "),o("div",{staticClass:"px-5 py-2"},[t._v("Page "+t._s(t.pagination.page)+" of "+t._s(t.pagination.pages))]),t._v(" "),t.pagination.next?o("div",[o("nuxt-link",{staticClass:"button",attrs:{to:t.nextLink}},[t._v("Next")])],1):t._e()])])}),[],!1,null,"67509227",null));e.a=l.exports},182:function(t,e,o){var content=o(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("020cb294",content,!0,{sourceMap:!1})},183:function(t,e,o){var content=o(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("71fabe65",content,!0,{sourceMap:!1})},184:function(t,e,o){t.exports=o.p+"img/d722e6e.jpg"},189:function(t,e,o){"use strict";var r=o(182);o.n(r).a},190:function(t,e,o){(e=o(14)(!1)).push([t.i,".main-image-wrapper[data-v-3646b26d]{-webkit-animation:bounce 2s infinite;animation:bounce 2s infinite;grid-area:e;position:relative}.image-fade[data-v-3646b26d]{width:30%}.works__pulse-bg[data-v-3646b26d]{-webkit-animation:pulse 2s infinite;animation:pulse 2s infinite;width:150px;height:150px;position:absolute;border-radius:100%;opacity:.8;z-index:-1;border:2px solid #38a169}.works__pulse-bg+.works__pulse-bg[data-v-3646b26d]{width:140px;height:140px;-webkit-animation-delay:.3s;animation-delay:.3s}.dots[data-v-3646b26d]{position:absolute;display:-webkit-box;display:flex;z-index:-1}.dots-bottom[data-v-3646b26d],.dots-top[data-v-3646b26d]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.dots-top[data-v-3646b26d]{top:-30%}.dots-left-top[data-v-3646b26d]{left:-25%;top:-10%;-webkit-transform:rotate(-320deg);transform:rotate(-320deg)}.dots-right-top[data-v-3646b26d]{right:-25%;top:-10%;-webkit-transform:rotate(-40deg);transform:rotate(-40deg)}.dots-right-bottom[data-v-3646b26d]{right:-25%;bottom:-10%;-webkit-transform:rotate(40deg);transform:rotate(40deg)}.dots-left-bottom[data-v-3646b26d]{left:-25%;bottom:-10%;-webkit-transform:rotate(320deg);transform:rotate(320deg)}.dots-bottom[data-v-3646b26d]{bottom:-30%}.dots-right[data-v-3646b26d]{right:-15%}.dots-left[data-v-3646b26d]{left:-15%}.dots__dot[data-v-3646b26d]{width:5px;height:5px;margin:5px;display:inline-block;border-radius:99px;background-color:#38a169}.dots__dot.vertical[data-v-3646b26d]{-webkit-animation:moveInOutY .35s linear infinite;animation:moveInOutY .35s linear infinite}.dots__dot.horizontal[data-v-3646b26d]{-webkit-animation:moveInOutX .35s linear infinite;animation:moveInOutX .35s linear infinite}",""]),t.exports=e},191:function(t,e,o){var map={"./boo.svg":192,"./brick-wall.png":193,"./coffee_mode.svg":109,"./creative.svg":194,"./dark_mode.svg":110,"./diagonal-waves.png":195,"./kush.svg":196,"./kushul_cartoon.jpg":184,"./light_mode.svg":108,"./navy.png":197,"./p1.png":107,"./subtle-dark-vertical.png":198};function r(t){var e=n(t);return o(e)}function n(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=191},192:function(t,e,o){t.exports=o.p+"img/597a474.svg"},193:function(t,e,o){t.exports=o.p+"img/effad15.png"},194:function(t,e,o){t.exports=o.p+"img/000e5d5.svg"},195:function(t,e,o){t.exports=o.p+"img/ca2083f.png"},196:function(t,e,o){t.exports=o.p+"img/025decd.svg"},197:function(t,e,o){t.exports=o.p+"img/7000583.png"},198:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAAMklEQVR4Ae3MoREAMAwCwMR2ruw/TnTZoZXPHeC+K5mT2fTD99QLAAQCgUAgEAgEAoEXXjB0aAsO0UUAAAAASUVORK5CYII="},199:function(t,e,o){"use strict";var r=o(183);o.n(r).a},200:function(t,e,o){(e=o(14)(!1)).push([t.i,'.main-home-container[data-v-77ac66b8]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:.5fr 1fr .5fr;grid-gap:60px;grid-template-areas:"a b c" "d e f" "h i j";margin-top:2rem}.tagline-wrapper[data-v-77ac66b8]{position:relative;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;z-index:10}.text-fade[data-v-77ac66b8]{height:100%;position:absolute}.title[data-v-77ac66b8]{display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.links[data-v-77ac66b8]{padding-top:15px}.button[data-v-77ac66b8]{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:.5rem 1.25rem;display:inline-block}',""]),t.exports=e},203:function(t,e,o){"use strict";o.r(e);o(32);var r,n=o(4),d=o(19),l=(o(189),o(6)),c=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-image-wrapper relative flex items-center justify-center"},[r("img",{staticClass:"h-56 md:w-56 mx-auto rounded-full object-cover",attrs:{src:o(184),alt:""}}),t._v(" "),r("div",{staticClass:"works__pulse-bg"}),t._v(" "),r("div",{staticClass:"works__pulse-bg"}),t._v(" "),r("div",{staticClass:"dots dots-top"},t._l(6,(function(t){return r("div",{key:t,staticClass:"dots__dot vertical"})})),0),t._v(" "),r("div",{staticClass:"dots dots-bottom"},t._l(6,(function(t){return r("div",{key:t,staticClass:"dots__dot vertical"})})),0),t._v(" "),r("div",{staticClass:"dots dots-left-top"},t._l(16,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-right-top"},t._l(16,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-right"},t._l(10,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-left"},t._l(12,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-right-bottom"},t._l(16,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-left-bottom"},t._l(16,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0)])}),[],!1,null,"3646b26d",null).exports,v=o(173),f={asyncData:(r=Object(n.a)(regeneratorRuntime.mark((function t(e){var o,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.params,e.store,e.error,e.payload,r=1,o.pageNumber&&(r=o.pageNumber),t.next=6,d.a.posts.browse({limit:d.c,page:r,include:"tags,authors",fields:d.b,filter:"featured: true"});case 6:return n=t.sent,t.abrupt("return",{indexPosts:n,indexPagination:n.meta.pagination});case 8:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),data:function(){return{taglines:[{text:"Creative",image:"creative.svg",gridarea:"a",justify:"flex-end",align:"flex-end"},{text:"Creative",image:"creative.svg",gridarea:"b",justify:"center",align:"flex-end"},{text:"Creative",image:"creative.svg",gridarea:"c",justify:"flex-start",align:"flex-end"},{text:"Creative",image:"creative.svg",gridarea:"d",justify:"flex-end",align:"center"},{text:"Creative",image:"creative.svg",gridarea:"f",justify:"flex-start",align:"center"},{text:"Creative",image:"creative.svg",gridarea:"h",justify:"flex-end",align:"flex-start"},{text:"Creative",image:"creative.svg",gridarea:"i",justify:"center",align:"flex-start"},{text:"Creative",image:"creative.svg",gridarea:"j",justify:"flex-start",align:"flex-start"}]}},components:{PostList:v.a,MainImage:c},methods:{findImage:function(t){if(t)return o(191)("./".concat(t))}}},m=(o(199),Object(l.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container mx-auto main-home-container"},[t._l(t.taglines,(function(e,r){return o("div",{key:r,staticClass:"tagline-wrapper",style:{"grid-area":e.gridarea,"justify-content":e.justify,"align-items":e.align}},[o("h2",{staticClass:"tracking-tight font-serif text-copy-primary text-3xl md:text-5xl text-fade"},[t._v(t._s(e.text))]),t._v(" "),o("img",{staticClass:"image-fade",attrs:{src:t.findImage(e.image),alt:"creative"}})])})),t._v(" "),o("Main-image")],2)}),[],!1,null,"77ac66b8",null));e.default=m.exports}}]);