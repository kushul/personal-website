(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{179:function(t,e,n){var content=n(182);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("1fb1a7fd",content,!0,{sourceMap:!1})},180:function(t,e,n){var content=n(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("1f68ba6a",content,!0,{sourceMap:!1})},181:function(t,e,n){"use strict";var o=n(179);n.n(o).a},182:function(t,e,n){(e=n(15)(!1)).push([t.i,".blog-card[data-v-4364e772]{background:#0d2234}",""]),t.exports=e},183:function(t,e,n){"use strict";var o=n(180);n.n(o).a},184:function(t,e,n){(e=n(15)(!1)).push([t.i,"@media (screen and min-width:640px){.blog-posts .blog-box[data-v-247629df]:first-child{background:red}}.blog-posts[data-v-247629df]{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));grid-gap:30px;margin:0 auto}.blog-posts .blog-box[data-v-247629df]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px);-webkit-animation:reveal-data-v-247629df .5s ease-out 1 forwards;animation:reveal-data-v-247629df .5s ease-out 1 forwards;--multiplier:0.05;-webkit-animation-delay:calc(var(--delay)*var(--multiplier));animation-delay:calc(var(--delay)*var(--multiplier))}@-webkit-keyframes reveal-data-v-247629df{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes reveal-data-v-247629df{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.button[data-v-247629df]{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:.5rem 1rem}",""]),t.exports=e},186:function(t,e,n){"use strict";var o={props:["post"]},r=(n(181),n(7)),l={components:{BlogCard:Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"blog-card rounded overflow-hidden blog-shadow",attrs:{to:"/blog/"+t.post.slug}},[n("img",{staticClass:"w-full object-cover h-48",attrs:{src:t.formatThumbnailImages(t.post.feature_image),alt:t.post.title}}),t._v(" "),n("div",{staticClass:"px-6 py-4"},[n("div",{staticClass:"font-bold text-xl"},[t._v(t._s(t.post.title))]),t._v(" "),n("div",{staticClass:"text-xs uppercase pt-2 pb-4"},[t._v(t._s(t._f("dateFormat")(new Date(t.post.published_at),"DD MMMM YYYY")))]),t._v(" "),n("p",{staticClass:"text-gray-500"},[t._v(t._s(t.post.custom_excerpt))])])])}),[],!1,null,"4364e772",null).exports},props:{posts:{type:Array,required:!0},pagination:{type:Object,required:!0},indexBase:{type:String,required:!1,default:"/blog/"}},computed:{prevLink:function(){return 1===this.pagination.prev?this.indexBase:this.indexBase+"page/"+this.pagination.prev},nextLink:function(){return this.indexBase+"page/"+this.pagination.next}}},c=(n(183),Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"blog-posts"},t._l(t.posts,(function(t,e){return n("blog-card",{key:t.id,staticClass:"blog-box",style:"--delay:"+e+"s",attrs:{post:t}})})),1),t._v(" "),n("div",{staticClass:"flex justify-center py-10",attrs:{role:"navigation"}},[t.pagination.prev?n("div",[n("nuxt-link",{staticClass:"button",attrs:{to:t.prevLink}},[t._v("Prev")])],1):t._e(),t._v(" "),n("div",{staticClass:"px-5 py-2"},[t._v("Page "+t._s(t.pagination.page)+" of "+t._s(t.pagination.pages))]),t._v(" "),t.pagination.next?n("div",[n("nuxt-link",{staticClass:"button",attrs:{to:t.nextLink}},[t._v("Next")])],1):t._e()])])}),[],!1,null,"247629df",null));e.a=c.exports},189:function(t,e,n){"use strict";(function(t){n(29);var o=n(2),r=n(186),l=n(21);e.a={name:"PostIndex",components:{PostList:r.a},computed:{},created:function(){},data:function(){return{}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,o=t.params,r=1,o.pageNumber&&(r=o.pageNumber),"",e.next=6,l.a.posts.browse({limit:n.state.ghostPostsPerPage,page:r,include:"tags,authors",fields:n.state.ghostPostIndexFields});case 6:return c=e.sent,d=c.meta.pagination,e.abrupt("return",{indexPosts:c,indexPagination:d});case 9:case"end":return e.stop()}}),e)})))()},methods:{},head:function(){return{title:"Articles | Kushul Soomaree",meta:[{hid:"description",name:"description",content:"Blog articles by Kushul Soomaree"},{hid:"og:type",property:"og:type",content:"page"},{hid:"og:title",property:"og:title",content:"Articles | Kushul Soomaree"},{hid:"og:description",property:"og:description",content:"Articles written by Kushul Soomaree"},{hid:"og:url",property:"og:url",content:t.env.siteUrl+this.$route.path}]}},watch:{ghost:function(t,e){this.fetchData()}}}}).call(this,n(84))},254:function(t,e,n){"use strict";n.r(e);var o=n(189).a,r=n(7),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto"},[n("h1",{staticClass:"page-title"},[t._v("Blogs")]),t._v(" "),n("h3",{staticClass:"page-subtitle"},[t._v("“You can work quite hard, in particular online, and do quite well independently, but if you really want to grow you need points of leverage and most of them come from knowing people.”")]),t._v(" "),t.indexPosts&&t.indexPagination?n("PostList",{attrs:{posts:t.indexPosts,pagination:t.indexPagination}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);