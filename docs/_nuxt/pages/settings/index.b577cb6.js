(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{245:function(t,e,r){"use strict";r.r(e);r(45),r(23),r(24),r(9),r(33);var o=r(17),n=r(64);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{version:this.$store.state.ghostVersion}},computed:l({url:{get:function(){return this.$store.state.ghostUrl},set:function(t){this.$store.commit("setGhostUrl",t)}},key:{get:function(){return this.$store.state.ghostKey},set:function(t){this.$store.commit("setGhostKey",t)}}},Object(n.c)({ghost:"getGhost",ghostOptions:"getGhostOptions"})),methods:l({},Object(n.b)(["initGhost","resetGhost"]))},h=r(7),d={components:{DataSource:Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.ghostOptions?r("div",{staticClass:"flex my-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"border p-2 pl-4 mr-4",attrs:{type:"text",placeholder:"url"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"border p-2 pl-4 mr-4",attrs:{type:"text",placeholder:"key"},domProps:{value:t.key},on:{input:function(e){e.target.composing||(t.key=e.target.value)}}}),t._v(" "),r("button",{staticClass:"bg-gray-300 rounded px-3 uppercase text-sm text-gray-600 mr-4",on:{click:t.initGhost}},[t._v("Update")]),t._v(" "),r("button",{staticClass:"bg-gray-300 rounded px-3 uppercase text-sm text-gray-600",on:{click:t.resetGhost}},[t._v("Reset")])]):t._e()}),[],!1,null,null,null).exports}},f=Object(h.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mx-auto"},[e("data-source")],1)}),[],!1,null,null,null);e.default=f.exports}}]);