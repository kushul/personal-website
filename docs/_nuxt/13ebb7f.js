(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{208:function(t,e,r){var content=r(211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("911fd3bc",content,!0,{sourceMap:!1})},209:function(t,e,r){var content=r(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("4e4e4026",content,!0,{sourceMap:!1})},210:function(t,e,r){"use strict";r(208)},211:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,".blog-card[data-v-4364e772]{background:#0d2234}",""]),n.locals={},t.exports=n},212:function(t,e,r){"use strict";r(209)},213:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,"@media (screen and min-width:640px){.blog-posts .blog-box[data-v-247629df]:first-child{background:red}}.blog-posts[data-v-247629df]{grid-gap:30px;display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));margin:0 auto}.blog-posts .blog-box[data-v-247629df]{--multiplier:0.05;animation:reveal-247629df .5s ease-out 1 forwards;animation-delay:calc(var(--delay)*.05);animation-delay:calc(var(--delay)*var(--multiplier));opacity:0;transform:translateY(10px)}@keyframes reveal-247629df{to{opacity:1;transform:translateY(0)}}.button[data-v-247629df]{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:.5rem 1rem}",""]),n.locals={},t.exports=n},214:function(t,e,r){"use strict";var n={props:["post"]},o=(r(210),r(11)),c={components:{BlogCard:Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("nuxt-link",{staticClass:"blog-card rounded overflow-hidden blog-shadow",attrs:{to:"/blog/"+t.post.slug}},[e("img",{staticClass:"w-full object-cover h-48",attrs:{src:t.formatThumbnailImages(t.post.feature_image),alt:t.post.title}}),t._v(" "),e("div",{staticClass:"px-6 py-4"},[e("div",{staticClass:"font-bold text-xl"},[t._v(t._s(t.post.title))]),t._v(" "),e("div",{staticClass:"text-xs uppercase pt-2 pb-4"},[t._v(t._s(t._f("dateFormat")(new Date(t.post.published_at),"DD MMMM YYYY")))]),t._v(" "),e("p",{staticClass:"text-gray-500"},[t._v(t._s(t.post.custom_excerpt))])])])}),[],!1,null,"4364e772",null).exports},props:{posts:{type:Array,required:!0},pagination:{type:Object,required:!0},indexBase:{type:String,required:!1,default:"/blog/"}},computed:{prevLink:function(){return 1===this.pagination.prev?this.indexBase:this.indexBase+"page/"+this.pagination.prev},nextLink:function(){return this.indexBase+"page/"+this.pagination.next}}},l=(r(212),Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"blog-posts"},t._l(t.posts,(function(t,r){return e("blog-card",{key:t.id,staticClass:"blog-box",style:"--delay:"+r+"s",attrs:{post:t}})})),1),t._v(" "),e("div",{staticClass:"flex justify-center py-10",attrs:{role:"navigation"}},[t.pagination.prev?e("div",[e("nuxt-link",{staticClass:"button",attrs:{to:t.prevLink}},[t._v("Prev")])],1):t._e(),t._v(" "),e("div",{staticClass:"px-5 py-2"},[t._v("Page "+t._s(t.pagination.page)+" of "+t._s(t.pagination.pages))]),t._v(" "),t.pagination.next?e("div",[e("nuxt-link",{staticClass:"button",attrs:{to:t.nextLink}},[t._v("Next")])],1):t._e()])])}),[],!1,null,"247629df",null));e.a=l.exports},236:function(t,e,r){"use strict";(function(t){r(32),r(20),r(26),r(40),r(41);var n=r(2),o=r(13),c=(r(39),r(25),r(31)),l=r(214),d=r(45);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={name:"TagIndex",components:{PostList:l.a},computed:h(h({},Object(d.c)({ghost:"getGhost"})),{},{siteSettings:function(){return this.$store.state.siteSettings}}),head:function(){return{title:"Articles tagged as ".concat(this.currentAuthor.name),meta:[{hid:"description",name:"description",content:this.currentAuthor.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:title",property:"og:title",content:"Articles tagged as ".concat(this.currentAuthor.name)},{hid:"og:description",property:"og:description",content:this.currentAuthor.description},{hid:"og:image",property:"og:image"},{hid:"og:url",property:"og:url",content:t.env.siteUrl+this.$route.path},{hid:"twitter:title",name:"twitter:title",content:"Articles tagged as ".concat(this.currentAuthor.name)},{hid:"twitter:description",name:"twitter:description",content:this.currentAuthor.description},{hid:"twitter:image",name:"twitter:image"},{hid:"twitter:url",name:"twitter:url",content:t.env.siteUrl+this.$route.path}]}},created:function(){this.fetchData()},data:function(){return{currentAuthor:{name:"loading",description:"loading"},indexPosts:[],indexPagination:0}},methods:{fetchData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=1,t.$route.params.pageNumber&&(r=t.$route.params.pageNumber),"",e.next=5,t.ghost.authors.read({slug:t.$route.params.slug});case 5:return t.currentAuthor=e.sent,e.next=8,t.ghost.posts.browse({limit:c.c,page:r,include:"tags,authors",fields:c.b,filter:"author:"+t.$route.params.slug,pageNumber:r});case 8:t.indexPosts=e.sent,t.indexPagination=t.indexPosts.meta.pagination;case 10:case"end":return e.stop()}}),e)})))()}}}}).call(this,r(144))},295:function(t,e,r){"use strict";r.r(e);r(25);var n=r(236).a,o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"section"},[t.currentAuthor?e("div",{staticClass:"container mx-auto"},[e("h1",{staticClass:"text-2xl font-bold py-2 text-center md:text-left"},[t._v("Articles written by #"+t._s(t.currentAuthor.name))]),t._v(" "),t.currentAuthor.description?e("p",{staticClass:"page-subtitle"},[t._v(t._s(t.currentAuthor.description))]):t._e(),t._v(" "),t.indexPosts&&t.indexPagination?e("PostList",{attrs:{posts:t.indexPosts,pagination:t.indexPagination,"index-base":"/author/"+t.$route.params.slug+"/"}}):t._e()],1):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);