(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{209:function(t,e,r){"use strict";(function(t){r(48),r(23),r(24),r(29);var o=r(2),n=(r(47),r(21)),l=r(244);e.a={layout:"blog",name:"PostPage",head:function(){var e;return{title:(null===(e=this.post)||void 0===e?void 0:e.title)||"Page Title",meta:[{hid:"description",name:"description",content:this.post.custom_excerpt},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:title",property:"og:title",content:this.post.title},{hid:"og:description",property:"og:description",content:this.post.custom_excerpt},{hid:"og:image",property:"og:image",content:this.post.og_image||this.post.feature_image},{hid:"og:url",property:"og:url",content:t.env.siteUrl+this.$route.path},{hid:"twitter:title",name:"twitter:title",content:this.post.title},{hid:"twitter:description",name:"twitter:description",content:this.post.custom_excerpt},{hid:"twitter:image",name:"twitter:image",content:this.post.twitter_image||this.post.feature_image},{hid:"twitter:url",name:"twitter:url",content:t.env.siteUrl+this.$route.path},{hid:"twitter:creator",name:"twitter:creator",content:this.post.primary_author.twitter},{hid:"twitter:label1",name:"twitter:label1",content:"Written by"},{hid:"twitter:data1",name:"twitter:data1",content:this.post.primary_author.name}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,t.store,t.error,t.payload,e.prev=1,e.next=4,n.a.posts.read({slug:r.slug,include:"tags,authors"});case 4:return o=e.sent,e.next=7,n.a.posts.browse({limit:"all",fields:"slug,title"});case 7:return e.sent,e.abrupt("return",{post:o});case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},mounted:function(){var t=document.getElementsByClassName("kg-embed-card"),e=!0,r=!1,o=void 0;try{for(var n,l=t[Symbol.iterator]();!(e=(n=l.next()).done);e=!0){var iframe=n.value.firstElementChild,c=iframe.getAttribute("height");c&&(iframe.style.height=c+"px")}}catch(t){r=!0,o=t}finally{try{e||null==l.return||l.return()}finally{if(r)throw o}}},components:{ArticleHead:l.a}}}).call(this,r(84))},244:function(t,e,r){"use strict";var o={props:["post"]},n=r(7),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.post?r("header",{staticClass:"post-full-header"},[r("h1",{staticClass:"post-full-title"},[t._v(t._s(t.post.title))]),t._v(" "),r("p",{staticClass:"post-full-custom-excerpt"},[t._v(t._s(t.post.custom_excerpt))])]):t._e()}),[],!1,null,null,null);e.a=component.exports},250:function(t,e,r){"use strict";r.r(e);var o=r(209).a,n=r(7),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.post?r("article",{staticClass:"post-full post"},[r("article-head",{attrs:{post:t.post}}),t._v(" "),r("figure",{staticClass:"post-full-image"},[r("img",{attrs:{src:t.post.feature_image,alt:"Post Image"}})]),t._v(" "),r("section",{staticClass:"post-full-content"},[r("div",{ref:"postContent",staticClass:"post-content",domProps:{innerHTML:t._s(t.post.html)}})]),t._v(" "),r("div",{staticClass:"py-1 md:py-10 mb-16 border border-black"},[r("section",{staticClass:"post-content"},[t.post.tags?r("section",{staticClass:"post-full-tags"},[r("span",{staticClass:"p-2 md:p-3"},[t._v("Tags")]),t._v(" "),t._l(t.post.tags,(function(e){return r("nuxt-link",{key:e.name,staticClass:"p-2 md:p-3",attrs:{to:"/tag/"+e.slug}},[t._v(t._s(e.name))])}))],2):t._e()])])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);