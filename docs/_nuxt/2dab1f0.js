(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{330:function(t,e,r){"use strict";(function(t){r(53),r(16),r(45),r(70),r(54),r(28),r(30),r(68),r(71),r(55);var n=r(8),o=(r(50),r(37),r(44)),l=r(380);function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}e.a={layout:"blog",name:"PostPage",head:function(){var e;return{title:(null===(e=this.post)||void 0===e?void 0:e.title)||"Page Title",meta:[{hid:"description",name:"description",content:this.post.custom_excerpt},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:title",property:"og:title",content:this.post.title},{hid:"og:description",property:"og:description",content:this.post.custom_excerpt},{hid:"og:image",property:"og:image",content:this.post.og_image||this.post.feature_image},{hid:"og:url",property:"og:url",content:t.env.siteUrl+this.$route.path},{hid:"twitter:title",name:"twitter:title",content:this.post.title},{hid:"twitter:description",name:"twitter:description",content:this.post.custom_excerpt},{hid:"twitter:image",name:"twitter:image",content:this.post.twitter_image||this.post.feature_image},{hid:"twitter:url",name:"twitter:url",content:t.env.siteUrl+this.$route.path},{hid:"twitter:creator",name:"twitter:creator",content:this.post.primary_author.twitter},{hid:"twitter:label1",name:"twitter:label1",content:"Written by"},{hid:"twitter:data1",name:"twitter:data1",content:this.post.primary_author.name}]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,t.store,t.error,t.payload,e.prev=1,e.next=4,o.a.posts.read({slug:r.slug,include:"tags,authors"});case 4:return n=e.sent,e.next=7,o.a.posts.browse({limit:"all",fields:"slug,title"});case 7:return e.sent,e.abrupt("return",{post:n});case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},mounted:function(){var t,e=c(document.getElementsByClassName("kg-embed-card"));try{for(e.s();!(t=e.n()).done;){var iframe=t.value.firstElementChild,r=iframe.getAttribute("height");r&&(iframe.style.height=r+"px")}}catch(t){e.e(t)}finally{e.f()}},components:{ArticleHead:l.a}}}).call(this,r(141))},380:function(t,e,r){"use strict";r(37);var n={props:["post"]},o=r(21),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.post?e("header",{staticClass:"post-full-header"},[e("h1",{staticClass:"post-full-title"},[t._v(t._s(t.post.title))]),t._v(" "),e("p",{staticClass:"post-full-custom-excerpt"},[t._v(t._s(t.post.custom_excerpt))]),t._v(" "),t._l(t.post.authors,(function(r){return e("p",{key:r.name,staticClass:"text-base leading-snug mt-4"},[t._v("By "+t._s(r.name))])}))],2):t._e()}),[],!1,null,null,null);e.a=component.exports},389:function(t,e,r){"use strict";r.r(e);r(37);var n=r(330).a,o=r(21),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.post?e("article",{staticClass:"post-full post"},[e("article-head",{attrs:{post:t.post}}),t._v(" "),e("figure",{staticClass:"post-full-image"},[e("img",{attrs:{src:t.formatThumbnailImages(t.post.feature_image),alt:"Post Image"}})]),t._v(" "),e("section",{staticClass:"post-full-content"},[e("div",{ref:"postContent",staticClass:"post-content",domProps:{innerHTML:t._s(t.formatBodyImages(t.post.html))}})]),t._v(" "),e("div",{staticClass:"py-1 md:py-10 mb-16 border border-black"},[e("section",{staticClass:"post-content"},[t.post.tags?e("section",{staticClass:"post-full-tags"},[e("span",{staticClass:"p-2 md:p-3"},[t._v("Tags")]),t._v(" "),t._l(t.post.tags,(function(r){return e("nuxt-link",{key:r.name,staticClass:"p-2 md:p-3",attrs:{to:"/tag/"+r.slug}},[t._v(t._s(r.name))])}))],2):t._e()])])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);