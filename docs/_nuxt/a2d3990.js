(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{328:function(t,e,r){"use strict";(function(t){r(39),r(30),r(38),r(16),r(51),r(31),r(52);var n=r(8),o=r(23),c=(r(50),r(69));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={name:"Tags",components:{},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({ghost:"getGhost"})),data:function(){return{tags:null}},methods:{fetchTags:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.ghost.tags.browse();case 2:r=e.sent,t.tags=r;case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.fetchTags()},head:function(){return{title:"Tags",meta:[{hid:"description",name:"description",content:"Tags"},{hid:"og:type",property:"og:type",content:"page"},{hid:"og:title",property:"og:title",content:"Tags"},{hid:"og:description",property:"og:description",content:"Tags"},{hid:"og:url",property:"og:url",content:t.env.siteUrl+this.$route.path}]}}}}).call(this,r(141))},335:function(t,e,r){var content=r(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("42add51d",content,!0,{sourceMap:!1})},364:function(t,e,r){"use strict";r(335)},365:function(t,e,r){var n=r(35)((function(i){return i[1]}));n.push([t.i,".tags-wrapper[data-v-0ba11648]{grid-gap:30px;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}.tags[data-v-0ba11648]{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:2rem;text-align:center}",""]),n.locals={},t.exports=n},387:function(t,e,r){"use strict";r.r(e);r(37);var n=r(328).a,o=(r(364),r(21)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto"},[e("h1",{staticClass:"text-2xl font-bold py-2 text-center md:text-left mb-3"},[t._v("All tags")]),t._v(" "),t.tags?e("div",{staticClass:"tags-wrapper"},t._l(t.tags,(function(r,n){return e("nuxt-link",{key:n,staticClass:"tags",attrs:{to:"/tag/"+r.slug}},[t._v(t._s(r.name))])})),1):e("div",[t._v("Loading tags")])])}),[],!1,null,"0ba11648",null);e.default=component.exports}}]);