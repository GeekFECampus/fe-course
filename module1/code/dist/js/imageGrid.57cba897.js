(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["imageGrid"],{"95be":function(t,n,e){"use strict";e("ec98")},ec98:function(t,n,e){},ecc8:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"grid-box"},[t._l(t.imgs,(function(n,i){return[i===t.current?e("div",{key:n,class:t.bigItem,on:{click:function(n){return t.toBig(i)}}},[e("img",{attrs:{src:n}})]):e("div",{key:n,on:{click:function(n){return t.toBig(i)}}},[e("img",{attrs:{src:n}})])]}))],2)},c=[],r={name:"ImageGrid",data:function(){for(var t=[],n=0;n<100;n++)t.push("https://picsum.photos/200/200?t=".concat(Math.random()));return{imgs:t,current:-1,bigItem:"big-item"}},mounted:function(){},methods:{toBig:function(t){this.current=t}}},o=r,s=(e("95be"),e("0c7c")),u=Object(s["a"])(o,i,c,!1,null,"83ee4e46",null);n["default"]=u.exports}}]);
//# sourceMappingURL=imageGrid.57cba897.js.map