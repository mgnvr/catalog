(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b92b05d"],{ab93:function(e,t,s){"use strict";var i=s("ca6e"),a=s.n(i);a.a},b3ad:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("AppHeader",{ref:"header"}),s("div",{staticClass:"video"},[s("img",{staticClass:"radio_logo hidden",attrs:{src:this.publicPath+"assets/logo.png",alt:"DriV3R",height:"36px"}}),s("div",{staticClass:"button maximize"}),s("video",{attrs:{id:"video",width:"100%",autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[s("source",{attrs:{src:this.publicPath+"assets/loop.mp4",type:"video/mp4"}})]),e._m(0)]),s("AppFooter")],1)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"audio"},[s("audio",{attrs:{src:"https://stream.nightride.fm/nightride.mp3"}})])}],n=s("a4ce"),o=s("f657"),r={name:"about",components:{AppHeader:n["a"],AppFooter:o["a"]},data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/catalog/"}},mounted:function(){audiojs.events.ready((function(){audiojs.createAll()}));var e=document.querySelector(".video"),t=document.querySelector(".radio_logo"),s=document.querySelector(".button");s.addEventListener("click",(function(){s.classList.contains("maximize")?(s.classList.remove("maximize"),s.classList.add("minimize"),t.classList.remove("hidden"),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()):(s.classList.remove("minimize"),s.classList.add("maximize"),t.classList.add("hidden"),document.exitFullscreen())}))}},c=r,u=(s("ab93"),s("2877")),l=Object(u["a"])(c,i,a,!1,null,null,null);t["default"]=l.exports},ca6e:function(e,t,s){}}]);
//# sourceMappingURL=chunk-2b92b05d.f3de38ca.js.map