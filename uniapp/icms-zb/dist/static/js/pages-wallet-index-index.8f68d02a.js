(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wallet-index-index"],{"3a14":function(t,e,n){"use strict";n.r(e);var a=n("5dfd"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},"5dfd":function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=a(n("c964")),u=a(n("f3f3")),i=n("2f62"),d={data:function(){return{dataList:{userScore:{1:{balance:0},2:{balance:0}},userVip:{id:0,left_days:0,vip_status_lable:""}}}},onLoad:function(){this.loadData()},computed:(0,u.default)({},(0,i.mapState)(["app","user"])),methods:{loadData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/wallet/index/index",method:"get"});case 2:n=e.sent,200==n.code&&(t.dataList=n.data.dataList);case 4:case"end":return e.stop()}}),e)})))()}}};e.default=d},b698:function(t,e,n){"use strict";n.r(e);var a=n("cf0d"),r=n("3a14");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);var i,d=n("f0c5"),c=Object(d["a"])(r["default"],a["b"],a["c"],!1,null,"04859e75",null,!1,a["a"],i);e["default"]=c.exports},cf0d:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}))}}]);