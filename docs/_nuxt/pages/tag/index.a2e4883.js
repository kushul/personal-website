(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{204:function(t,e,r){"use strict";(function(t){r(44),r(23),r(24),r(10),r(33),r(28);var n=r(2),o=r(17),c=r(63);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={name:"Tags",components:{},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({ghost:"getGhost"})),data:function(){return{tags:null}},methods:{fetchTags:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.ghost.tags.browse();case 2:r=e.sent,t.tags=r;case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.fetchTags()},head:function(){return{title:"Tags",meta:[{hid:"description",name:"description",content:"Tags"},{hid:"og:type",property:"og:type",content:"page"},{hid:"og:title",property:"og:title",content:"Tags"},{hid:"og:description",property:"og:description",content:"Tags"},{hid:"og:url",property:"og:url",content:t.env.siteUrl+this.$route.path}]}}}}).call(this,r(82))},205:function(t,e,r){var content=r(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("482c97b6",content,!0,{sourceMap:!1})},230:function(t,e,r){"use strict";var n=r(205);r.n(n).a},231:function(t,e,r){(e=r(15)(!1)).push([t.i,".tags-wrapper[data-v-0ba11648]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:30px}.tags[data-v-0ba11648]{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:2rem;text-align:center}",""]),t.exports=e},249:function(t,e,r){"use strict";r.r(e);var n=r(204).a,o=(r(230),r(7)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto"},[r("h1",{staticClass:"text-2xl font-bold py-2 text-center md:text-left mb-3"},[t._v("All tags")]),t._v(" "),t.tags?r("div",{staticClass:"tags-wrapper"},t._l(t.tags,(function(e,n){return r("nuxt-link",{key:n,staticClass:"tags",attrs:{to:"/tag/"+e.slug}},[t._v(t._s(e.name))])})),1):r("div",[t._v("Loading tags")])])}),[],!1,null,"0ba11648",null);e.default=component.exports}}]);