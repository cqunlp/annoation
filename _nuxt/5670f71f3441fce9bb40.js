(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{903:function(t,e,r){var map={"./af":734,"./af.js":734,"./ar":735,"./ar-dz":736,"./ar-dz.js":736,"./ar-kw":737,"./ar-kw.js":737,"./ar-ly":738,"./ar-ly.js":738,"./ar-ma":739,"./ar-ma.js":739,"./ar-sa":740,"./ar-sa.js":740,"./ar-tn":741,"./ar-tn.js":741,"./ar.js":735,"./az":742,"./az.js":742,"./be":743,"./be.js":743,"./bg":744,"./bg.js":744,"./bm":745,"./bm.js":745,"./bn":746,"./bn.js":746,"./bo":747,"./bo.js":747,"./br":748,"./br.js":748,"./bs":749,"./bs.js":749,"./ca":750,"./ca.js":750,"./cs":751,"./cs.js":751,"./cv":752,"./cv.js":752,"./cy":753,"./cy.js":753,"./da":754,"./da.js":754,"./de":755,"./de-at":756,"./de-at.js":756,"./de-ch":757,"./de-ch.js":757,"./de.js":755,"./dv":758,"./dv.js":758,"./el":759,"./el.js":759,"./en-SG":760,"./en-SG.js":760,"./en-au":761,"./en-au.js":761,"./en-ca":762,"./en-ca.js":762,"./en-gb":763,"./en-gb.js":763,"./en-ie":764,"./en-ie.js":764,"./en-il":765,"./en-il.js":765,"./en-nz":766,"./en-nz.js":766,"./eo":767,"./eo.js":767,"./es":768,"./es-do":769,"./es-do.js":769,"./es-us":770,"./es-us.js":770,"./es.js":768,"./et":771,"./et.js":771,"./eu":772,"./eu.js":772,"./fa":773,"./fa.js":773,"./fi":774,"./fi.js":774,"./fo":775,"./fo.js":775,"./fr":776,"./fr-ca":777,"./fr-ca.js":777,"./fr-ch":778,"./fr-ch.js":778,"./fr.js":776,"./fy":779,"./fy.js":779,"./ga":780,"./ga.js":780,"./gd":781,"./gd.js":781,"./gl":782,"./gl.js":782,"./gom-latn":783,"./gom-latn.js":783,"./gu":784,"./gu.js":784,"./he":785,"./he.js":785,"./hi":786,"./hi.js":786,"./hr":787,"./hr.js":787,"./hu":788,"./hu.js":788,"./hy-am":789,"./hy-am.js":789,"./id":790,"./id.js":790,"./is":791,"./is.js":791,"./it":792,"./it-ch":793,"./it-ch.js":793,"./it.js":792,"./ja":794,"./ja.js":794,"./jv":795,"./jv.js":795,"./ka":796,"./ka.js":796,"./kk":797,"./kk.js":797,"./km":798,"./km.js":798,"./kn":799,"./kn.js":799,"./ko":800,"./ko.js":800,"./ku":801,"./ku.js":801,"./ky":802,"./ky.js":802,"./lb":803,"./lb.js":803,"./lo":804,"./lo.js":804,"./lt":805,"./lt.js":805,"./lv":806,"./lv.js":806,"./me":807,"./me.js":807,"./mi":808,"./mi.js":808,"./mk":809,"./mk.js":809,"./ml":810,"./ml.js":810,"./mn":811,"./mn.js":811,"./mr":812,"./mr.js":812,"./ms":813,"./ms-my":814,"./ms-my.js":814,"./ms.js":813,"./mt":815,"./mt.js":815,"./my":816,"./my.js":816,"./nb":817,"./nb.js":817,"./ne":818,"./ne.js":818,"./nl":819,"./nl-be":820,"./nl-be.js":820,"./nl.js":819,"./nn":821,"./nn.js":821,"./pa-in":822,"./pa-in.js":822,"./pl":823,"./pl.js":823,"./pt":824,"./pt-br":825,"./pt-br.js":825,"./pt.js":824,"./ro":826,"./ro.js":826,"./ru":827,"./ru.js":827,"./sd":828,"./sd.js":828,"./se":829,"./se.js":829,"./si":830,"./si.js":830,"./sk":831,"./sk.js":831,"./sl":832,"./sl.js":832,"./sq":833,"./sq.js":833,"./sr":834,"./sr-cyrl":835,"./sr-cyrl.js":835,"./sr.js":834,"./ss":836,"./ss.js":836,"./sv":837,"./sv.js":837,"./sw":838,"./sw.js":838,"./ta":839,"./ta.js":839,"./te":840,"./te.js":840,"./tet":841,"./tet.js":841,"./tg":842,"./tg.js":842,"./th":843,"./th.js":843,"./tl-ph":844,"./tl-ph.js":844,"./tlh":845,"./tlh.js":845,"./tr":846,"./tr.js":846,"./tzl":847,"./tzl.js":847,"./tzm":848,"./tzm-latn":849,"./tzm-latn.js":849,"./tzm.js":848,"./ug-cn":850,"./ug-cn.js":850,"./uk":851,"./uk.js":851,"./ur":852,"./ur.js":852,"./uz":853,"./uz-latn":854,"./uz-latn.js":854,"./uz.js":853,"./vi":855,"./vi.js":855,"./x-pseudo":856,"./x-pseudo.js":856,"./yo":857,"./yo.js":857,"./zh-cn":858,"./zh-cn.js":858,"./zh-hk":859,"./zh-hk.js":859,"./zh-tw":860,"./zh-tw.js":860};function n(t){var e=j(t);return r(e)}function j(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=j,t.exports=n,n.id=903},915:function(t,e,r){"use strict";r.r(e);r(8),r(6),r(5),r(3),r(7),r(88);var n=r(36),j=r(1),c=r(18),o=r(861),l=o.c.reactiveProp,h={extends:o.a,mixins:[l],props:{chartData:{type:Object,default:function(){},required:!0}},data:function(){return{options:{maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.chartData,this.options)}},d=r(14),m=Object(d.a)(h,void 0,void 0,!1,null,null,null).exports,f=o.c.reactiveProp,v={extends:o.b,mixins:[f],props:{chartData:{type:Object,default:function(){},required:!0}},data:function(){return{options:{scales:{yAxes:[{barPercentage:.3}],xAxes:[{ticks:{beginAtZero:!0,min:0}}]},maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.chartData,this.options)}};function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(j.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={layout:"project",middleware:["check-auth","auth","check-admin"],components:{DoughnutChart:m,BarChart:Object(d.a)(v,void 0,void 0,!1,null,null,null).exports},computed:y({},Object(c.c)("statistics",["userStats","labelStats","progress"]),{},Object(c.e)("statistics",["stats"])),created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchStatistics({projectId:t.$route.params.id});case 2:case"end":return e.stop()}}),e)})))()},methods:y({},Object(c.b)("statistics",["fetchStatistics"])),validate:function(t){var e=t.params;return/^\d+$/.test(e.id)}},w=r(16),z=r.n(w),x=r(178),D=r(684),P=r(686),S=Object(d.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return this.stats?e("v-row",[e("v-col",{attrs:{cols:"12",lg:"4"}},[e("v-card",[e("doughnut-chart",{attrs:{"chart-data":this.progress}})],1)],1),this._v(" "),e("v-col",{attrs:{cols:"12",lg:"4"}},[e("v-card",[e("bar-chart",{attrs:{"chart-data":this.labelStats}})],1)],1),this._v(" "),e("v-col",{attrs:{cols:"12",lg:"4"}},[e("v-card",[e("bar-chart",{attrs:{"chart-data":this.userStats}})],1)],1)],1):this._e()}),[],!1,null,null,null);e.default=S.exports;z()(S,{VCard:x.a,VCol:D.a,VRow:P.a})}}]);