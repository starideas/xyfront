(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-432d494e"],{"1c64":function(t,r,e){"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function a(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){s=!0,i=t},f:function(){try{c||null==e.return||e.return()}finally{if(s)throw i}}}}e.r(r),e("b0c0"),e("a4d3"),e("e01a"),e("d28b"),e("d3b7"),e("3ca3"),e("ddb0"),e("a630"),e("fb6a"),e("25f0");var o={watch:{$route:function(){this.name=this.$route.params.name;var t,r=a(this.$store.state.app.mainNav);try{for(r.s();!(t=r.n()).done;){var e=t.value;e.name==this.name&&(this.current=e)}}catch(t){r.e(t)}finally{r.f()}}},data:function(){return{name:0,current:{}}},created:function(){this.name=this.$route.params.name;var t,r=a(this.$store.state.app.mainNav);try{for(r.s();!(t=r.n()).done;){var e=t.value;e.name==this.name&&(this.current=e)}}catch(t){r.e(t)}finally{r.f()}},methods:{}},i=e("2877"),c=Object(i.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"wrap"},[e("xy-header"),e("div",{staticClass:"main p-t"},["iframe"==t.current.listsTpl?e("div",{staticStyle:{position:"absolute",top:"60px",bottom:"0",left:"0",right:"0"}},[e("iframe",{staticStyle:{border:"0",width:"100%",height:"100%"},attrs:{src:t.current.url}})]):t._e(),e("div",{staticClass:"container"},[e("el-card",{attrs:{shadow:"none"}},["page"==t.current.listsTpl?[e("div",{domProps:{innerHTML:t._s(t.current.content)}})]:t._e()],2)],1)]),e("xy-footer")],1)}),[],!1,null,"558e6cb4",null);r.default=c.exports},"4df4":function(t,r,e){"use strict";var n=e("0366"),a=e("7b0b"),o=e("9bdd"),i=e("e95a"),c=e("50c4"),s=e("8418"),u=e("35a1");t.exports=function(t,r,e){var l,f,d,h,v,p,m=a(t),y="function"==typeof this?this:Array,b=arguments.length,g=1<b?r:void 0,w=void 0!==g,A=u(m),S=0;if(w&&(g=n(g,2<b?e:void 0,2)),null==A||y==Array&&i(A))for(f=new y(l=c(m.length));S<l;S++)p=w?g(m[S],S):m[S],s(f,S,p);else for(v=(h=A.call(m)).next,f=new y;!(d=v.call(h)).done;S++)p=w?o(h,g,[d.value,S],!0):d.value,s(f,S,p);return f.length=S,f}},a630:function(t,r,e){var n=e("23e7"),a=e("4df4");n({target:"Array",stat:!0,forced:!e("1c7e")((function(t){Array.from(t)}))},{from:a})},b0c0:function(t,r,e){var n=e("83ab"),a=e("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/;!n||"name"in o||a(o,"name",{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},fb6a:function(t,r,e){"use strict";var n=e("23e7"),a=e("861d"),o=e("e8b5"),i=e("23cb"),c=e("50c4"),s=e("fc6a"),u=e("8418"),l=e("b622"),f=e("1dde"),d=e("ae40"),h=f("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),p=l("species"),m=[].slice,y=Math.max;n({target:"Array",proto:!0,forced:!h||!v},{slice:function(t,r){var e,n,l,f=s(this),d=c(f.length),h=i(t,d),v=i(void 0===r?d:r,d);if(o(f)&&(("function"==typeof(e=f.constructor)&&(e===Array||o(e.prototype))||a(e)&&null===(e=e[p]))&&(e=void 0),e===Array||void 0===e))return m.call(f,h,v);for(n=new(void 0===e?Array:e)(y(v-h,0)),l=0;h<v;h++,l++)h in f&&u(n,l,f[h]);return n.length=l,n}})}}]);