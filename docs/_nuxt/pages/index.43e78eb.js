(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{178:function(t,e,o){var content=o(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("8f7859d6",content,!0,{sourceMap:!1})},179:function(t,e,o){var content=o(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("1f68ba6a",content,!0,{sourceMap:!1})},180:function(t,e,o){"use strict";var r=o(178);o.n(r).a},181:function(t,e,o){(e=o(15)(!1)).push([t.i,".blog-card[data-v-c5a57d2a]{background:#0d2234}",""]),t.exports=e},182:function(t,e,o){"use strict";var r=o(179);o.n(r).a},183:function(t,e,o){(e=o(15)(!1)).push([t.i,"@media (screen and min-width:640px){.blog-posts .blog-box[data-v-247629df]:first-child{background:red}}.blog-posts[data-v-247629df]{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));grid-gap:30px;margin:0 auto}.blog-posts .blog-box[data-v-247629df]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px);-webkit-animation:reveal-data-v-247629df .5s ease-out 1 forwards;animation:reveal-data-v-247629df .5s ease-out 1 forwards;--multiplier:0.05;-webkit-animation-delay:calc(var(--delay)*var(--multiplier));animation-delay:calc(var(--delay)*var(--multiplier))}@-webkit-keyframes reveal-data-v-247629df{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes reveal-data-v-247629df{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.button[data-v-247629df]{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:.5rem 1rem}",""]),t.exports=e},184:function(t,e,o){var content=o(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("02f84084",content,!0,{sourceMap:!1})},185:function(t,e,o){"use strict";var r={props:["post"]},n=(o(180),o(7)),l={components:{BlogCard:Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"blog-card rounded overflow-hidden blog-shadow",attrs:{to:"/blog/"+t.post.slug}},[o("img",{staticClass:"w-full object-cover h-48",attrs:{src:t.post.feature_image,alt:t.post.title}}),t._v(" "),o("div",{staticClass:"px-6 py-4"},[o("div",{staticClass:"font-bold text-xl"},[t._v(t._s(t.post.title))]),t._v(" "),o("div",{staticClass:"text-xs uppercase pt-2 pb-4"},[t._v(t._s(t._f("dateFormat")(new Date(t.post.published_at),"DD MMMM YYYY")))]),t._v(" "),o("p",{staticClass:"text-gray-500"},[t._v(t._s(t.post.custom_excerpt))])])])}),[],!1,null,"c5a57d2a",null).exports},props:{posts:{type:Array,required:!0},pagination:{type:Object,required:!0},indexBase:{type:String,required:!1,default:"/blog/"}},computed:{prevLink:function(){return 1===this.pagination.prev?this.indexBase:this.indexBase+"page/"+this.pagination.prev},nextLink:function(){return this.indexBase+"page/"+this.pagination.next}}},d=(o(182),Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"blog-posts"},t._l(t.posts,(function(t,e){return o("blog-card",{key:t.id,staticClass:"blog-box",style:"--delay:"+e+"s",attrs:{post:t}})})),1),t._v(" "),o("div",{staticClass:"flex justify-center py-10",attrs:{role:"navigation"}},[t.pagination.prev?o("div",[o("nuxt-link",{staticClass:"button",attrs:{to:t.prevLink}},[t._v("Prev")])],1):t._e(),t._v(" "),o("div",{staticClass:"px-5 py-2"},[t._v("Page "+t._s(t.pagination.page)+" of "+t._s(t.pagination.pages))]),t._v(" "),t.pagination.next?o("div",[o("nuxt-link",{staticClass:"button",attrs:{to:t.nextLink}},[t._v("Next")])],1):t._e()])])}),[],!1,null,"247629df",null));e.a=d.exports},189:function(t,e,o){var map={"./attendee.svg":190,"./competition.svg":191,"./creative.svg":192,"./css.svg":193,"./design.svg":194,"./git.svg":195,"./javascript.svg":196,"./jury.svg":197,"./problem_solving.svg":198,"./responsive.svg":199,"./speaker.svg":200,"./vuejs.svg":201};function r(t){var e=n(t);return o(e)}function n(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=189},190:function(t,e,o){t.exports=o.p+"img/attendee.1b6ffae.svg"},191:function(t,e,o){t.exports=o.p+"img/competition.eda8b04.svg"},192:function(t,e,o){t.exports=o.p+"img/creative.3baf4a6.svg"},193:function(t,e,o){t.exports=o.p+"img/css.5ada3f2.svg"},194:function(t,e,o){t.exports=o.p+"img/design.e32714c.svg"},195:function(t,e,o){t.exports=o.p+"img/git.bb53410.svg"},196:function(t,e,o){t.exports=o.p+"img/javascript.3159087.svg"},197:function(t,e,o){t.exports=o.p+"img/jury.26bef70.svg"},198:function(t,e,o){t.exports=o.p+"img/problem_solving.a14fd53.svg"},199:function(t,e,o){t.exports=o.p+"img/responsive.6aaf19d.svg"},200:function(t,e,o){t.exports=o.p+"img/speaker.6d25203.svg"},201:function(t,e,o){t.exports=o.p+"img/vuejs.4e6f3ff.svg"},203:function(t,e,o){"use strict";var r=o(184);o.n(r).a},204:function(t,e,o){(e=o(15)(!1)).push([t.i,'.timeline-container .gb-vue-timeline-update__bullet{box-shadow:0 2px 5px 0 #18191a!important}.timeline-container .gb-vue-timeline-update__slot{margin-top:10px!important}.timeline-container .gb-base-badge{color:#fff;font-weight:500}.timeline-container .gb-vue-timeline-update__right{margin-bottom:20px;padding-bottom:0!important}.timeline-container .gb-vue-timeline-update__thumbnail{width:100%}.dark-mode .timeline-container .gb-vue-timeline-update__right{border-bottom:2px dashed #90cdf4}.dark-mode .timeline-container .gb-base-icon,.dark-mode .timeline-container .gb-vue-timeline-update__title{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.dark-mode .timeline-container .gb-vue-timeline-update__ago{color:#a9c7df!important}.dark-mode .timeline-container .gb-vue-timeline-update__thumbnail{border-color:#e2e8f0!important;box-shadow:0 1px 5px 0 #e2e8f0!important}.dark-mode .timeline-container .gb-vue-timeline-update__line{background:-webkit-gradient(linear,left top,left bottom,color-stop(50%,#90cdf4),to(rgba(49,61,79,0)))!important;background:linear-gradient(#90cdf4 50%,rgba(49,61,79,0))!important}.light-mode .timeline-container .gb-vue-timeline-update__right{border-bottom:2px dashed #2a4365}.light-mode .timeline-container .gb-base-icon,.light-mode .timeline-container .gb-vue-timeline-update__ago,.light-mode .timeline-container .gb-vue-timeline-update__title{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity))}.light-mode .timeline-container .gb-vue-timeline-update__ago{color:#2d3748!important}.light-mode .timeline-container .gb-vue-timeline-update__thumbnail{border-color:#2a4365!important;box-shadow:0 1px 5px 0 #2a4365!important}.light-mode .timeline-container .gb-vue-timeline-update__line{background:-webkit-gradient(linear,left top,left bottom,color-stop(50%,#2a4365),to(rgba(49,61,79,0)))!important;background:linear-gradient(#2a4365 50%,rgba(49,61,79,0))!important}.light-mode .timeline-container .gb-vue-timeline-update__description{color:#2a4365!important}.sepia-mode .timeline-container .gb-vue-timeline-update__right{border-bottom:2px dashed #d69e2e}.sepia-mode .timeline-container .gb-base-icon,.sepia-mode .timeline-container .gb-vue-timeline-update__title{--text-opacity:1;color:#744210;color:rgba(116,66,16,var(--text-opacity))}.sepia-mode .timeline-container .gb-vue-timeline-update__ago{color:#744210!important}.sepia-mode .timeline-container .gb-vue-timeline-update__line{background:-webkit-gradient(linear,left top,left bottom,color-stop(50%,#d69e2e),to(rgba(49,61,79,0)))!important;background:linear-gradient(#d69e2e 50%,rgba(49,61,79,0))!important}.sepia-mode .timeline-container .gb-vue-timeline-update__thumbnail{border-color:#d69e2e!important;box-shadow:0 1px 5px 0 #d69e2e!important}.sepia-mode .timeline-container .gb-vue-timeline-update__description{color:#9c4221!important}.tech-wrapper{display:-webkit-box;display:flex;font-size:.875rem;color:var(--text-copy-primary)}.tech-wrapper .tech{display:inline-block}.tech-wrapper .tech:after{content:"/";margin:0 10px}.tech-wrapper .tech:last-child:after{content:" "}.website-link{position:relative;text-decoration:none!important;padding:10px 30px;overflow:hidden;letter-spacing:5px;color:var(--green)!important;-webkit-transition:.2s;transition:.2s;display:inline-block;cursor:pointer;font-size:1.125rem;margin-top:1rem;margin-bottom:1rem;font-weight:600}.website-link:hover{color:#fff!important;background:var(--green)!important;-webkit-text-fill-color:initial!important;box-shadow:0 0 10px var(--green),0 0 20px var(--green),0 0 40px var(--green);-webkit-transition-delay:1s;transition-delay:1s;cursor:pointer}.website-link:hover span{cursor:pointer}.website-link:hover span:first-child{left:100%;-webkit-transition:1s;transition:1s}.website-link:hover span:nth-child(2){top:100%;-webkit-transition:1s;transition:1s;-webkit-transition-delay:.25s;transition-delay:.25s}.website-link:hover span:nth-child(3){right:100%;-webkit-transition:1s;transition:1s;-webkit-transition-delay:.5s;transition-delay:.5s}.website-link:hover span:nth-child(4){bottom:100%;-webkit-transition:1s;transition:1s;-webkit-transition-delay:.75s;transition-delay:.75s}.website-link span{position:absolute;display:block;cursor:pointer}.website-link span:first-child{top:0;left:-100%;width:100%;height:2px;background:-webkit-gradient(linear,left top,right top,from(transparent),to(var(--green)));background:linear-gradient(90deg,transparent,var(--green))}.website-link span:nth-child(2){top:-100%;right:0;width:2px;height:100%;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(var(--green)));background:linear-gradient(180deg,transparent,var(--green))}.website-link span:nth-child(3){bottom:0;right:-100%;width:100%;height:2px;background:-webkit-gradient(linear,right top,left top,from(transparent),to(var(--green)));background:linear-gradient(270deg,transparent,var(--green))}.website-link span:nth-child(4){bottom:-100%;left:0;width:2px;height:100%;background:-webkit-gradient(linear,left bottom,left top,from(transparent),to(var(--green)));background:linear-gradient(1turn,transparent,var(--green))}',""]),t.exports=e},210:function(t,e,o){var content=o(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("794edc7a",content,!0,{sourceMap:!1})},211:function(t,e,o){var content=o(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("2fe0ca04",content,!0,{sourceMap:!1})},212:function(t,e,o){var content=o(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("38efbcd4",content,!0,{sourceMap:!1})},213:function(t,e,o){var content=o(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("be2b471e",content,!0,{sourceMap:!1})},214:function(t,e,o){"use strict";var r=[{title:"TV Guide | lexpress",url:"https://tv.lexpress.mu/",role:"Front End developer",tech:["CSS Grid techniques","VueJS","Golang"],description:"TV Guide for all Mauritius channels at L'express Maurice",featured:!0,thumbnail:"tvguide.png",date:"2020-03-10",company:"LSL digital",color:"turquoise",icon:"code"},{title:"Retrospective 2019 | lexpress",url:"https://2019.lexpress.mu/",role:"Front End Lead",tech:["TailwindCSS","VueJS"],description:"A website that represents all events which have occured at L'express Maurice around Mauritius",featured:!0,thumbnail:"retro2019.png",date:"2019-12-20",company:"LSL digital",color:"orange",icon:"code"},{title:"LSL Digital website",url:"https://www.lsl.digital/",role:"Front End developer",tech:["VueJS","SASS","VueX"],description:"LSL Digital website overall background and mainly focused on their services & solutions",featured:!0,thumbnail:"lsldigital.png",date:"2019-09-02",company:"Open Source",color:"black",icon:"code"},{title:"Developer Conference 2019 website",url:"https://2019.mscc.mu/",role:"Voluntary Front End developer",tech:["CSS","VueJS","NuxtJS"],description:"Official website of the devcon 2019",featured:!0,thumbnail:"devcon2019.png",date:"2019-03-26",company:"LSL Digital",color:"purple",icon:"code"},{title:"Mauritius Elections 2019 | Lexpress",url:"https://elections2019.lexpress.mu/",role:"Designer | Front End dev",tech:["TailwindCSS","VueJS","GraphQL","Golang","Svelte"],description:"A website built for the general elections of Mauritius at L'express Maurice",featured:!0,thumbnail:"elections.png",date:"2019-06-12",company:"LSL Digital",color:"red",icon:"code"},{title:"Mauritius 50 years of independence | lexpress",url:"https://www.lexpress.mu/50ansMoris/",role:"Front End developer",tech:["CSS","VueJS","SVG Design"],description:"A website that shows history of Mauritius and also represents how Mauritius evolved from 1968 till 2018",featured:!0,thumbnail:"50ansMoris.png",date:"2018-03-12",company:"Open Source",color:"green",icon:"code"},{title:"Business Magazine website | La sentinelle",url:"https://www.businessmag.mu/",role:"UI developer",tech:["VueJS","Golang"],description:"An indispensable guide to the business world, Business Magazine website provides a window on all that's going on.",featured:!0,thumbnail:"businessmag.png",date:"2017-12-20",company:"La Sentinelle",color:"orange",icon:"code"},{title:"La sentinelle website",url:"https://www.lasentinelle.mu/",role:"Front End maintainer",tech:["CSS","Drupal"],description:"La Sentinelle main website",featured:!0,thumbnail:"lasentinelle.png",date:"2017-11-26",company:"La Sentinelle",color:"turquoise",icon:"code"},{title:"Lexpress.mu",url:"https://www.lexpress.mu",role:"Front End developer",tech:["CSS","GulpJS","Drupal","Docker"],description:"Most popular news website of Mauritius",featured:!0,thumbnail:"lexpressmu.png",date:"2017-06-26",company:"La Sentinelle",color:"blue",icon:"code"}],n={data:function(){return{projects:r}},methods:{getDate:function(t){return new Date(t)}}},l=(o(203),o(7)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.projects,(function(e,r){return o("vue-timeline-update",{key:r,staticClass:"timeline-container",attrs:{date:t.getDate(e.date),title:e.title,description:e.description,thumbnail:"/images/projects/"+e.thumbnail,category:e.role,icon:e.icon,color:e.color,animation:!0,"animation-duration":1500,"animation-container":e.role,"is-last":!0}},[o("div",{staticClass:"tech-wrapper"},t._l(e.tech,(function(e,r){return o("div",{key:r,staticClass:"tech"},[t._v(t._s(e))])})),0),t._v(" "),o("div",{staticClass:"sm:text-right text-center"},[o("a",{staticClass:"website-link sm:mr-8 mr-0",attrs:{href:e.url,target:"_blank"}},[o("span"),t._v(" "),o("span"),t._v(" "),o("span"),t._v(" "),o("span"),t._v("\n        Visit website →\n      ")])])])})),1)}),[],!1,null,null,null);e.a=component.exports},233:function(t,e,o){t.exports=o.p+"img/kushul_cartoon.d722e6e.jpg"},234:function(t,e,o){"use strict";var r=o(210);o.n(r).a},235:function(t,e,o){(e=o(15)(!1)).push([t.i,".main-image-wrapper[data-v-f79a81ec]{-webkit-animation:bounce 2s infinite;animation:bounce 2s infinite;grid-area:e;position:relative}.image-fade[data-v-f79a81ec]{width:30%}.works__pulse-bg[data-v-f79a81ec]{-webkit-animation:pulse 2s infinite;animation:pulse 2s infinite;width:150px;height:150px;position:absolute;border-radius:100%;opacity:.8;z-index:-1;--border-opacity:1;border:2px solid #38a169;border-color:rgba(56,161,105,var(--border-opacity))}.works__pulse-bg+.works__pulse-bg[data-v-f79a81ec]{width:140px;height:140px;-webkit-animation-delay:.3s;animation-delay:.3s}.dots[data-v-f79a81ec]{position:absolute;display:-webkit-box;display:flex;z-index:-1}.dots-bottom[data-v-f79a81ec],.dots-top[data-v-f79a81ec]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.dots-top[data-v-f79a81ec]{top:-30%}.dots-left-top[data-v-f79a81ec]{left:-25%;top:-10%;-webkit-transform:rotate(-320deg);transform:rotate(-320deg)}.dots-right-top[data-v-f79a81ec]{right:-25%;top:-10%;-webkit-transform:rotate(-40deg);transform:rotate(-40deg)}.dots-right-bottom[data-v-f79a81ec]{right:-25%;bottom:-10%;-webkit-transform:rotate(40deg);transform:rotate(40deg)}.dots-left-bottom[data-v-f79a81ec]{left:-25%;bottom:-10%;-webkit-transform:rotate(320deg);transform:rotate(320deg)}.dots-bottom[data-v-f79a81ec]{bottom:-30%}.dots-right[data-v-f79a81ec]{right:-15%}.dots-left[data-v-f79a81ec]{left:-15%}.dots__dot[data-v-f79a81ec]{width:5px;height:5px;margin:5px;display:inline-block;border-radius:99px;--bg-opacity:1;background-color:#38a169;background-color:rgba(56,161,105,var(--bg-opacity))}.dots__dot.vertical[data-v-f79a81ec]{-webkit-animation:moveInOutY .35s linear infinite;animation:moveInOutY .35s linear infinite}.dots__dot.horizontal[data-v-f79a81ec]{-webkit-animation:moveInOutX .35s linear infinite;animation:moveInOutX .35s linear infinite}@media (max-width:768px){.dots-left-top[data-v-f79a81ec]{left:-90%}.dots-right-top[data-v-f79a81ec]{right:-90%}.dots-left[data-v-f79a81ec]{left:-70%}.dots-right[data-v-f79a81ec]{right:-70%}.dots-left-bottom[data-v-f79a81ec]{left:-90%}.dots-right-bottom[data-v-f79a81ec]{right:-90%}.dots-top[data-v-f79a81ec]{top:-50%}.dots-bottom[data-v-f79a81ec]{bottom:-50%}}@media (max-width:640px){.works__pulse-bg[data-v-f79a81ec]{width:100px;height:100px}.works__pulse-bg+.works__pulse-bg[data-v-f79a81ec]{width:90px;height:90px}.dots__dot[data-v-f79a81ec]{width:2px;height:2px;margin:3px}.dots-left-top[data-v-f79a81ec]{left:-35%}.dots-right-top[data-v-f79a81ec]{right:-35%}.dots-left[data-v-f79a81ec]{left:-25%}.dots-right[data-v-f79a81ec]{right:-25%}.dots-left-bottom[data-v-f79a81ec]{left:-35%}.dots-right-bottom[data-v-f79a81ec]{right:-35%}.dots-top[data-v-f79a81ec]{top:-50%}.dots-bottom[data-v-f79a81ec]{bottom:-50%}}@media (max-width:450px){.dots-left-top[data-v-f79a81ec]{left:-70%}.dots-right-top[data-v-f79a81ec]{right:-70%}.dots-left[data-v-f79a81ec]{left:-70%}.dots-right[data-v-f79a81ec]{right:-70%}.dots-left-bottom[data-v-f79a81ec]{left:-70%}.dots-right-bottom[data-v-f79a81ec]{right:-70%}.dots-top[data-v-f79a81ec]{top:-50%}.dots-bottom[data-v-f79a81ec]{bottom:-50%}}@media (max-width:400px){.dots-left-top[data-v-f79a81ec]{left:-100%}.dots-right-top[data-v-f79a81ec]{right:-100%}.dots-left[data-v-f79a81ec]{left:-70%}.dots-right[data-v-f79a81ec]{right:-70%}.dots-left-bottom[data-v-f79a81ec]{left:-100%}.dots-right-bottom[data-v-f79a81ec]{right:-100%}.dots-top[data-v-f79a81ec]{top:-50%}.dots-bottom[data-v-f79a81ec]{bottom:-50%}}",""]),t.exports=e},236:function(t,e,o){t.exports=o.p+"img/kush.609d660.png"},237:function(t,e,o){"use strict";var r=o(211);o.n(r).a},238:function(t,e,o){(e=o(15)(!1)).push([t.i,".social-items[data-v-fbe0470a]{padding:0;list-style:none;display:-webkit-box;display:flex}.social-items li a[data-v-fbe0470a]{width:60px;height:60px;margin:0 20px;text-align:center;cursor:pointer;border-radius:50%;border:4px solid;-webkit-transition:all .5s ease;transition:all .5s ease;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.social-items li a[data-v-fbe0470a]:first-child{margin-left:0}.social-items li a:hover.facebook[data-v-fbe0470a]{border:5px solid #3b5998;box-shadow:0 0 15px #3b5998;-webkit-transition:all .5s ease;transition:all .5s ease}.social-items li a:hover.facebook svg[data-v-fbe0470a]{-webkit-transition:all .5s ease;transition:all .5s ease;fill:#3b5998}.social-items li a:hover.instagram[data-v-fbe0470a]{border:5px solid #bc2a8d;box-shadow:0 0 15px #bc2a8d;-webkit-transition:all .5s ease;transition:all .5s ease}.social-items li a:hover.instagram svg[data-v-fbe0470a]{-webkit-transition:all .5s ease;transition:all .5s ease;fill:#bc2a8d}.social-items li a:hover.twitter[data-v-fbe0470a]{border:5px solid #00aced;box-shadow:0 0 15px #00aced;-webkit-transition:all .5s ease;transition:all .5s ease}.social-items li a:hover.twitter svg[data-v-fbe0470a]{-webkit-transition:all .5s ease;transition:all .5s ease;fill:#00aced}.social-items li a:hover.email[data-v-fbe0470a]{border:5px solid #dd4b39;box-shadow:0 0 15px #dd4b39;-webkit-transition:all .5s ease;transition:all .5s ease}.social-items li a:hover.email svg[data-v-fbe0470a]{-webkit-transition:all .5s ease;transition:all .5s ease;fill:#dd4b39}.social-items li a:hover.linkedIn[data-v-fbe0470a]{border:5px solid #0073b1;box-shadow:0 0 15px #0073b1;-webkit-transition:all .5s ease;transition:all .5s ease}.social-items li a:hover.linkedIn svg[data-v-fbe0470a]{-webkit-transition:all .5s ease;transition:all .5s ease;fill:#0073b1}@media (max-width:1024px){.social-items[data-v-fbe0470a]{-webkit-box-pack:center;justify-content:center}}@media (max-width:480px){.social-media-container[data-v-fbe0470a]{margin:20px 0}.social-items[data-v-fbe0470a]{-webkit-box-pack:space-evenly;justify-content:space-evenly}.social-items li a[data-v-fbe0470a]{margin:0;width:40px;height:40px;border:2px solid}}",""]),t.exports=e},239:function(t,e,o){"use strict";var r=o(212);o.n(r).a},240:function(t,e,o){(e=o(15)(!1)).push([t.i,'.home-main-intro[data-v-fde8ab0a]{height:calc(100vh - 120px);overflow:hidden;display:grid;grid-template-columns:2fr 1fr;grid-gap:40px;grid-template-areas:"👨‍🦰 🍌"}.npx-wrapper[data-v-fde8ab0a]{font-family:var(--font-roboto)}.left-part-wrapper[data-v-fde8ab0a]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:center;justify-content:center;grid-area:👨‍🦰}.right-part-wrapper[data-v-fde8ab0a]{grid-area:🍌}.name-wrapper[data-v-fde8ab0a]{position:absolute;z-index:-1}.name-wrapper h1[data-v-fde8ab0a]{font-size:100px;letter-spacing:10px;font-weight:900;line-height:100px;font-family:var(--font-oswald)}.name-wrapper h1[data-v-fde8ab0a]:last-child{margin-left:50px}.profile-image-wrapper[data-v-fde8ab0a]{position:relative;z-index:10}.profile-image-wrapper .image-wrapper[data-v-fde8ab0a]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;-webkit-box-align:center;align-items:center}.profile-image-wrapper .image-wrapper img[data-v-fde8ab0a]{width:60%}.social-media-container[data-v-fde8ab0a]{margin:40px 0}.author-job h3[data-v-fde8ab0a]{position:relative;color:var(--green)}.author-job h3[data-v-fde8ab0a]:after{content:"";width:70px;height:2px;position:absolute;margin-left:20px;top:50%;background:var(--green)}@media (max-width:1400px){.home-main-intro[data-v-fde8ab0a]{grid-template-columns:1fr 1fr}.profile-image-wrapper .image-wrapper img[data-v-fde8ab0a]{width:50%}.name-wrapper[data-v-fde8ab0a]{padding:20px}.name-wrapper h1[data-v-fde8ab0a]{font-size:60px;line-height:70px}}@media (max-width:1024px){.home-main-intro[data-v-fde8ab0a]{grid-template-columns:1fr;grid-template-areas:"🍌" "👨‍🦰"}.right-part-wrapper[data-v-fde8ab0a]{text-align:center}.profile-image-wrapper .image-wrapper[data-v-fde8ab0a]{-webkit-box-pack:center;justify-content:center;padding-left:50px}}@media (max-width:600px){.home-main-intro[data-v-fde8ab0a]{grid-gap:0}.name-wrapper[data-v-fde8ab0a]{display:none}.profile-image-wrapper .image-wrapper[data-v-fde8ab0a]{padding-left:0}}@media (max-width:960px) and (orientation:landscape){.author-summary[data-v-fde8ab0a]{display:none}}',""]),t.exports=e},241:function(t,e,o){"use strict";var r=o(213);o.n(r).a},242:function(t,e,o){(e=o(15)(!1)).push([t.i,'.main-tagline-container[data-v-72bd567e]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:.5fr 1fr .5fr;grid-gap:35px;grid-template-areas:"a b c" "d e f" "h i j"}.tagline-wrapper[data-v-72bd567e]{position:relative;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;z-index:10}.text-fade[data-v-72bd567e]{position:absolute;top:50%;left:50%;text-shadow:#000 1px 0 5px;color:#fff;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.button[data-v-72bd567e]{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:.5rem 1.25rem;display:inline-block}.tagline-item[data-v-72bd567e]{border-radius:9999px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:relative;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}@media (min-width:640px){.main-tagline-container[data-v-72bd567e]{grid-gap:60px}}',""]),t.exports=e},244:function(t,e,o){"use strict";o.r(e);o(28);var r=o(2),n=o(21),l=(o(234),o(7)),d=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-image-wrapper relative flex items-center justify-center"},[r("img",{staticClass:"md:h-56 md:w-56 sm:w-40 sm:h-40 w-20 h-20 mx-auto rounded-full object-cover",attrs:{src:o(233),alt:""}}),t._v(" "),r("div",{staticClass:"works__pulse-bg"}),t._v(" "),r("div",{staticClass:"works__pulse-bg"}),t._v(" "),r("div",{staticClass:"dots dots-top"},t._l(6,(function(t){return r("div",{key:t,staticClass:"dots__dot vertical"})})),0),t._v(" "),r("div",{staticClass:"dots dots-bottom"},t._l(6,(function(t){return r("div",{key:t,staticClass:"dots__dot vertical"})})),0),t._v(" "),r("div",{staticClass:"dots dots-left-top"},t._l(16,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-right-top"},t._l(16,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-right"},t._l(10,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-left"},t._l(12,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-right-bottom"},t._l(16,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0),t._v(" "),r("div",{staticClass:"dots dots-left-bottom"},t._l(16,(function(t){return r("div",{key:t,staticClass:"dots__dot horizontal"})})),0)])}),[],!1,null,"f79a81ec",null).exports,c=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"left-part-wrapper"},[e("div",{staticClass:"profile-image-wrapper"},[e("div",{staticClass:"name-wrapper"},[e("h1",[this._v("Kushul")]),this._v(" "),e("h1",[this._v("Soomaree")])]),this._v(" "),e("div",{staticClass:"image-wrapper"},[e("img",{attrs:{src:o(236),alt:"Kushul Soomaree"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"author-job"},[e("h3",{staticClass:"text-base font-semibold"},[this._v("Software Engineer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"author-title"},[e("h4",{staticClass:"text-xl md:text-2xl lg:text-4xl leading-snug my-4"},[this._v("Based in Mauritius, I'm a Developer and graphic designer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"author-summary"},[e("p",{staticClass:"sm:text-lg text-base"},[this._v("\n        \" Design is everywhere. From the dress you're wearing to the smartphone you're holding, it's\n        design. \"\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"npx-wrapper mt-4"},[this._v("\n      Try\n      "),e("span",{staticClass:"py-1 px-2 text-copy-primary bg-background-secondary rounded cursor-move inline-block"},[this._v("npx kushul_soomaree")]),this._v(" on your terminal for a small resume.\n    ")])}],m=(o(237),{components:{SocialMedia:Object(l.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"social-media-wrapper"},[o("ul",{staticClass:"social-items"},[o("li",[o("a",{staticClass:"facebook",attrs:{href:"https://www.facebook.com/kushul.soomaree",target:"_blank"}},[o("svg",{staticClass:"h-4 w-4 sm:w-6 sm:h-6 fill-current",staticStyle:{"enable-background":"new 0 0 155.139 155.139"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 155.139 155.139","xml:space":"preserve"}},[o("g",[o("path",{attrs:{id:"f_1_",d:"M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184\n\t\tc0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452\n\t\tv20.341H37.29v27.585h23.814v70.761H89.584z"}})])])])]),t._v(" "),o("li",[o("a",{staticClass:"instagram",attrs:{href:"https://www.instagram.com/kushul_/",target:"_blank"}},[o("svg",{staticClass:"h-4 w-4 sm:w-6 sm:h-6 fill-current",attrs:{height:"511pt",viewBox:"0 0 511 511.9",width:"511pt",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"}}),t._v(" "),o("path",{attrs:{d:"m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"}}),t._v(" "),o("path",{attrs:{d:"m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"}})])])]),t._v(" "),o("li",[o("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/kushul_soomaree",target:"_blank"}},[o("svg",{staticClass:"h-4 w-4 sm:w-6 sm:h-6 fill-current",staticStyle:{"enable-background":"new 0 0 543.684 543.684"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"543.684px",height:"543.684px",viewBox:"0 0 543.684 543.684","xml:space":"preserve"}},[o("g",[o("g",[o("path",{attrs:{d:"M527.657,106.697c-2.681,0.783-5.361,1.512-8.041,2.191c-16.384,4.137-17.89-1.322-6.028-13.366\n\t\t\tc5.312-5.397,10.006-11.267,14.082-17.607c9.137-14.217,1.212-20.417-14.333-13.776c-5.545,2.369-11.182,4.517-16.897,6.432\n\t\t\tc-16.017,5.379-38.746-2.735-53.018-11.787c-18.018-11.426-38.495-17.136-61.438-17.136c-32.137,0-59.529,11.334-82.192,33.984\n\t\t\tc-22.656,22.662-33.99,50.062-33.99,82.191c0,4.394,0.251,8.855,0.747,13.378c0.814,7.362-11.585,12.699-28.317,10.336\n\t\t\tc-36.194-5.11-70.582-16.077-103.171-32.889c-32.32-16.671-60.845-37.65-85.57-62.938C37.672,73.624,21.687,74.665,17.274,90.98\n\t\t\tc-2.644,9.78-3.959,19.951-3.959,30.515c0,19.908,4.675,38.372,14.027,55.392c4.651,8.47,10.098,16.138,16.353,22.999\n\t\t\tc10.521,11.549,8.911,18.25-5.734,14.144c-14.639-4.106-25.367-10.202-25.367-9.804s0,0.722,0,0.722\n\t\t\tc0,28.048,8.807,52.693,26.432,73.911c10.857,13.072,23.47,23.17,37.834,30.282c15.147,7.503,22.203,11.688,13.733,12.784\n\t\t\tc-5.11,0.661-10.251,0.991-15.422,0.991c-3.5,0-7.172-0.159-11.003-0.483c-6.059-0.514-7.148,12.111,2.038,26.298\n\t\t\tc7.301,11.273,16.646,21.193,28.03,29.762c11.579,8.721,24.058,14.981,37.417,18.794c16.255,4.633,19.517,13.073,5.024,21.763\n\t\t\tc-35.863,21.519-75.551,32.277-119.058,32.277c-4.902,0-9.578-0.11-14.045-0.324c-7.754-0.373-2.552,6.456,12.417,14.296\n\t\t\tc46.775,24.499,97.43,36.738,151.972,36.738c41.237,0,79.964-6.529,116.176-19.596c36.199-13.066,67.136-30.576,92.791-52.516\n\t\t\tc25.655-21.94,47.779-47.173,66.365-75.711c18.581-28.537,32.424-58.33,41.543-89.376c9.106-31.053,13.666-62.167,13.666-93.342\n\t\t\tc0-2.809-0.024-5.331-0.067-7.552c-0.086-4.174,10.955-15.472,23.28-27.032c5.563-5.22,10.869-10.698,15.937-16.444\n\t\t\tC548.833,107.78,543.882,101.966,527.657,106.697z"}})])])])])]),t._v(" "),o("li",[o("a",{staticClass:"email",attrs:{href:"mailto: kushul.soomaree@gmail.com",target:"_blank"}},[o("svg",{staticClass:"h-4 w-4 sm:w-6 sm:h-6 fill-current",staticStyle:{"enable-background":"new 0 0 382.117 382.117"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 382.117 382.117","xml:space":"preserve"}},[o("path",{attrs:{d:"M336.764,45.945H45.354C20.346,45.945,0,65.484,0,89.5v203.117c0,24.016,20.346,43.555,45.354,43.555h291.41\n\tc25.008,0,45.353-19.539,45.353-43.555V89.5C382.117,65.484,361.772,45.945,336.764,45.945z M336.764,297.72H45.354\n\tc-3.676,0-6.9-2.384-6.9-5.103V116.359l131.797,111.27c2.702,2.282,6.138,3.538,9.676,3.538l22.259,0.001\n\tc3.536,0,6.974-1.257,9.677-3.539l131.803-111.274v176.264C343.664,295.336,340.439,297.72,336.764,297.72z M191.059,192.987\n\tL62.87,84.397h256.378L191.059,192.987z"}})])])]),t._v(" "),o("li",[o("a",{staticClass:"linkedIn",attrs:{href:"https://www.linkedin.com/in/kushul-soomaree-515502147/",target:"_blank"}},[o("svg",{staticClass:"h-4 w-4 sm:w-6 sm:h-6 fill-current",attrs:{id:"Bold","enable-background":"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"}}),t._v(" "),o("path",{attrs:{d:"m.396 7.977h4.976v16.023h-4.976z"}}),t._v(" "),o("path",{attrs:{d:"m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"}})])])])])])}),[],!1,null,"fbe0470a",null).exports}}),f=(o(239),Object(l.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home-main-intro container mx-auto"},[t._m(0),t._v(" "),o("div",{staticClass:"right-part-wrapper flex flex-col justify-center"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),o("div",{staticClass:"social-media-container"},[o("SocialMedia")],1)])])}),c,!1,null,"fde8ab0a",null).exports),v=o(214),h={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.params,t.store,t.error,t.payload,r=1,o.pageNumber&&(r=o.pageNumber),"",e.next=6,n.a.posts.browse({limit:n.c,page:r,include:"tags,authors",fields:n.b,filter:"featured: true"});case 6:return l=e.sent,e.abrupt("return",{indexPosts:l,indexPagination:l.meta.pagination});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{taglines:[{text:"Creative",image:"creative.svg",gridarea:"a",justify:"flex-end",align:"flex-end",color:"bg-red-500"},{text:"Problem solving",image:"problem_solving.svg",gridarea:"b",justify:"center",align:"flex-end",color:"bg-teal-500"},{text:"Design",image:"design.svg",gridarea:"c",justify:"flex-start",align:"flex-end",color:"bg-purple-500"},{text:"Git",image:"git.svg",gridarea:"d",justify:"flex-end",align:"center",color:"bg-indigo-500"},{text:"Responsive",image:"responsive.svg",gridarea:"f",justify:"flex-start",align:"center",color:"bg-pink-500"},{text:"Javascript",image:"javascript.svg",gridarea:"h",justify:"flex-end",align:"flex-start",color:"bg-yellow-600"},{text:"Vuejs",image:"vuejs.svg",gridarea:"i",justify:"center",align:"flex-start",color:"bg-green-500"},{text:"CSS",image:"css.svg",gridarea:"j",justify:"flex-start",align:"flex-start",color:"bg-orange-500"}]}},components:{PostList:o(185).a,MainImage:d,MainIntro:f,Timeline:v.a},methods:{findImage:function(t){if(t)return o(189)("./".concat(t))}}},x=(o(241),Object(l.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home-main-container"},[o("MainIntro"),t._v(" "),o("div",{staticClass:"bg-background-secondary pb-16"},[o("h1",{staticClass:"title"},[t._v("Skills & Expertise")]),t._v(" "),o("h2",{staticClass:"subtitle"},[t._v("A list of skills and technology i have been experienced.")]),t._v(" "),o("div",{staticClass:"main-tagline-container container mx-auto"},[t._l(t.taglines,(function(e,r){return o("div",{key:r,staticClass:"tagline-wrapper",style:{"grid-area":e.gridarea,"justify-content":e.justify,"align-items":e.align}},[o("div",{staticClass:"tagline-item md:w-32 md:h-32 sm:w-24 sm:h-24 w-16 h-16",class:e.color},[o("h2",{staticClass:"font-serif tracking-normal leading-none text-copy-primary md:text-xl sm:text-sm text-xs text-fade font-bold"},[t._v(t._s(e.text))]),t._v(" "),o("img",{staticClass:"md:w-20 sm:w-12 w-8",attrs:{src:t.findImage(e.image),alt:"creative"}})])])})),t._v(" "),o("Main-image")],2)]),t._v(" "),o("div",{staticClass:"container mx-auto"},[o("h1",{staticClass:"title"},[t._v("Projects")]),t._v(" "),o("h2",{staticClass:"subtitle"},[t._v("Some projects I help built")]),t._v(" "),o("Timeline")],1)],1)}),[],!1,null,"72bd567e",null));e.default=x.exports}}]);