(function(t){function e(e){for(var a,i,l=e[0],o=e[1],c=e[2],d=0,u=[];d<l.length;d++)i=l[d],r[i]&&u.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);h&&h(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==r[l]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},r={app:0},n=[];function l(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2b92b05d":"f3de38ca","chunk-2d22d746":"afbdfbf2"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s={"chunk-2b92b05d":1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=new Promise((function(e,s){for(var a="css/"+({}[t]||t)+"."+{"chunk-2b92b05d":"7ae67e23","chunk-2d22d746":"31d6cfe0"}[t]+".css",r=o.p+a,n=document.getElementsByTagName("link"),l=0;l<n.length;l++){var c=n[l],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===r))return e()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){c=u[l],d=c.getAttribute("data-href");if(d===a||d===r)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||r,n=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete i[t],h.parentNode.removeChild(h),s(n)},h.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){i[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=n);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=l(t),c=function(e){d.onerror=d.onload=null,clearTimeout(u);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,n=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");n.type=a,n.request=i,s[1](n)}r[t]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/catalog/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var h=d;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("14c6"),s("08c1"),s("4842"),s("d9fc");var a=s("2b0e"),i=s("2138"),r=(s("1941"),s("8c4f")),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("AppHeader"),s("div",[s("div",{staticClass:"container container-select"},[s("div",{directives:[{name:"show",rawName:"v-show",value:"мои"!==t.selectedPlatform,expression:"selectedPlatform !== 'мои'"}],staticClass:"select-container"},[s("div",{staticClass:"select-genre-container"},[s("vs-select",{directives:[{name:"show",rawName:"v-show",value:"htc"==t.selectedPlatform,expression:"selectedPlatform == 'htc'"}],staticClass:"select-genre",attrs:{label:"Выбрать жанр"},model:{value:t.selectedGenre,callback:function(e){t.selectedGenre=e},expression:"selectedGenre"}},[s("vs-option",{attrs:{label:"все",value:"все"}},[t._v(" все ")]),t._l(t.htcGenres,(function(e,a){return s("vs-option",{key:a,attrs:{label:e,value:e}},[t._v("\n              "+t._s(e)+"\n            ")])}))],2),s("vs-select",{directives:[{name:"show",rawName:"v-show",value:"oq2"==t.selectedPlatform,expression:"selectedPlatform == 'oq2'"}],staticClass:"select-genre",attrs:{label:"Выбрать жанр"},model:{value:t.selectedGenre,callback:function(e){t.selectedGenre=e},expression:"selectedGenre"}},[s("vs-option",{attrs:{label:"все",value:"все"}},[t._v(" все ")]),t._l(t.oq2Genres,(function(e,a){return s("vs-option",{key:a,attrs:{label:e,value:e}},[t._v("\n              "+t._s(e)+"\n            ")])}))],2),s("vs-select",{directives:[{name:"show",rawName:"v-show",value:"psvr"==t.selectedPlatform,expression:"selectedPlatform == 'psvr'"}],staticClass:"select-genre",attrs:{label:"Выбрать жанр"},model:{value:t.selectedGenre,callback:function(e){t.selectedGenre=e},expression:"selectedGenre"}},[s("vs-option",{attrs:{label:"все",value:"все"}},[t._v(" все ")]),t._l(t.psvrGenres,(function(e,a){return s("vs-option",{key:a,attrs:{label:e,value:e}},[t._v("\n              "+t._s(e)+"\n            ")])}))],2),s("vs-select",{directives:[{name:"show",rawName:"v-show",value:"ps5"==t.selectedPlatform,expression:"selectedPlatform == 'ps5'"}],staticClass:"select-genre",attrs:{label:"Выбрать жанр"},model:{value:t.selectedGenre,callback:function(e){t.selectedGenre=e},expression:"selectedGenre"}},[s("vs-option",{attrs:{label:"все",value:"все"}},[t._v(" все ")]),t._l(t.ps5Genres,(function(e,a){return s("vs-option",{key:a,attrs:{label:e,value:e}},[t._v("\n              "+t._s(e)+"\n            ")])}))],2),s("vs-select",{staticClass:"select-genre",attrs:{label:"Сортировка"},model:{value:t.selectedSort,callback:function(e){t.selectedSort=e},expression:"selectedSort"}},[s("vs-option",{attrs:{label:"по умолчанию",value:"default"}},[t._v("\n              по умолчанию\n            ")]),s("vs-option",{attrs:{label:"по названию (а-я)",value:"ascending"}},[t._v(" по названию (а-я) ")]),s("vs-option",{attrs:{label:"по названию (я-а)",value:"descending"}},[t._v(" по названию (я-а) ")]),s("vs-option",{attrs:{label:"по жанру",value:"bygenre"}},[t._v(" по жанру ")]),s("vs-option",{attrs:{label:"по тегу",value:"bytag"}},[t._v(" по тегу ")])],1)],1),s("div",{staticClass:"select-item select-item--checkbox"},[s("vs-checkbox",{attrs:{"label-before":""},on:{click:t.setChild},model:{value:t.isChild,callback:function(e){t.isChild=e},expression:"isChild"}},[t._v("\n            Для детей\n          ")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"htc"==t.selectedPlatform||"oq2"==t.selectedPlatform||"psvr"==t.selectedPlatform,expression:"selectedPlatform == 'htc' || selectedPlatform == 'oq2' || selectedPlatform == 'psvr'"}],staticClass:"select-item select-item--checkbox"},[s("vs-checkbox",{attrs:{"label-before":""},on:{click:t.setVeryChild},model:{value:t.isVeryChild,callback:function(e){t.isVeryChild=e},expression:"isVeryChild"}},[t._v("\n            Для самых маленьких\n          ")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"ps5"==t.selectedPlatform,expression:"selectedPlatform == 'ps5'"}],staticClass:"select-item select-item--checkbox"},[s("vs-checkbox",{attrs:{"label-before":""},model:{value:t.isLocalMultiplayer,callback:function(e){t.isLocalMultiplayer=e},expression:"isLocalMultiplayer"}},[t._v("\n            На двоих\n          ")])],1)]),s("div",{ref:"containerInput",staticClass:"container-input show",class:{"container-input-only":"мои"==t.selectedPlatform}},[s("vs-input",{staticClass:"search-input",attrs:{placeholder:"Поиск игры...",type:"text",autocomplete:"off"},on:{input:t.closeSearchGame,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.clearSearch.apply(null,arguments)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),s("div",{ref:"closeSearch",staticClass:"search-button",on:{click:t.clearSearch}},[s("div",{staticClass:"search-icon"})])],1)])]),s("section",[s("back-to-top",{attrs:{visibleoffset:"500"}},[s("img",{attrs:{src:this.publicPath+"assets/up.svg",alt:"Наверх",width:"15px",height:"15px",title:"Наверх"}})]),s("div",{staticClass:"container"},[s("vk-tabs",{attrs:{align:"justify"},nativeOn:{click:function(e){return t.changePlatform(e)}}},[s("vk-tabs-item",{attrs:{title:"PCVR"}},[0!==t.showGamesByHTC.length?s("div",{staticClass:"wrapper"},t._l(t.showGamesByHTC,(function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",style:{"background-image":"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), url("+e.thumbnail+")"},attrs:{tag:"div",to:{name:"Id",params:{id:e.id}},title:"Перейти к игре"}},[s("div",{staticClass:"card__header"},[s("button",{staticClass:"like",class:{liked:t.wishlistIds.includes(e.id)},attrs:{title:"Добавить в избранное / Удалить из избранного"},on:{click:function(s){return s.stopPropagation(),t.putLike(s,e.id)}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z",fill:"#fff"}})])])]),t._o(s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}}),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-genre card-tag",domProps:{textContent:t._s(e.tag)}})])]),0,e.id)])],1)})),0):0==t.showGamesByHTC.length&&0==t.search.length?s("div",{staticClass:"wrapper--empty"},[s("img",{attrs:{src:this.publicPath+"assets/loading.svg",alt:"Загрузка...",width:"150"}})]):s("div",{staticClass:"wrapper--empty"},[s("img",{staticClass:"empty-loupe",attrs:{src:this.publicPath+"assets/loupe.png",alt:"Лупа",width:"150",height:"150"}}),s("p",{staticClass:"empty-start"},[t._v("По вашему запросу ничего не найдено")]),s("p",[t._v("Есть и другие игры, тоже интересные")])])]),s("vk-tabs-item",{attrs:{title:"OQ2"}},[0!==t.showGamesByOQ2.length?s("div",{staticClass:"wrapper"},t._l(t.showGamesByOQ2,(function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",style:{"background-image":"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), url("+e.thumbnail+")"},attrs:{tag:"div",to:{name:"Id",params:{id:e.id}},title:"Перейти к игре"}},[s("div",{staticClass:"card__header"},[s("button",{staticClass:"like",class:{liked:t.wishlistIds.includes(e.id)},attrs:{title:"Добавить в избранное / Удалить из избранного"},on:{click:function(s){return s.stopPropagation(),t.putLike(s,e.id)}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z",fill:"#fff"}})])])]),t._o(s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}}),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-genre card-tag",domProps:{textContent:t._s(e.tag)}})])]),1,e.id)])],1)})),0):0==t.showGamesByOQ2.length&&0==t.search.length?s("div",{staticClass:"wrapper--empty"},[s("img",{attrs:{src:this.publicPath+"assets/loading.svg",alt:"Загрузка...",width:"150"}})]):s("div",{staticClass:"wrapper--empty"},[s("img",{staticClass:"empty-loupe",attrs:{src:this.publicPath+"assets/loupe.png",alt:"Лупа",width:"150",height:"150"}}),s("p",{staticClass:"empty-start"},[t._v("По вашему запросу ничего не найдено")]),s("p",[t._v("Есть и другие игры, тоже интересные")])])]),s("vk-tabs-item",{attrs:{title:"PSVR"}},[0!==t.showGamesByPSVR.length?s("div",{staticClass:"wrapper"},t._l(t.showGamesByPSVR,(function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",style:{"background-image":"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), url("+e.thumbnail+")"},attrs:{tag:"div",to:{name:"Id",params:{id:e.id}},title:"Перейти к игре"}},[s("div",{staticClass:"card__header"},[s("button",{staticClass:"like",class:{liked:t.wishlistIds.includes(e.id)},attrs:{title:"Добавить в избранное / Удалить из избранного"},on:{click:function(s){return s.stopPropagation(),t.putLike(s,e.id)}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z",fill:"#fff"}})])])]),t._o(s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}}),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-genre card-tag",domProps:{textContent:t._s(e.tag)}})])]),2,e.id)])],1)})),0):s("div",{staticClass:"wrapper--empty"},[s("img",{staticClass:"empty-loupe",attrs:{src:this.publicPath+"assets/loupe.png",alt:"Лупа",width:"150",height:"150"}}),s("p",{staticClass:"empty-start"},[t._v("По вашему запросу ничего не найдено")]),s("p",[t._v("Есть и другие игры, тоже интересные")])])]),s("vk-tabs-item",{attrs:{title:"PS5"}},[0!==t.showGamesByPS5.length?s("div",{staticClass:"wrapper"},t._l(t.showGamesByPS5,(function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",style:{"background-image":"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), url("+e.thumbnail+")"},attrs:{tag:"div",to:{name:"Id",params:{id:e.id}},title:"Перейти к игре"}},[s("div",{staticClass:"card__header"},[s("button",{staticClass:"like",class:{liked:t.wishlistIds.includes(e.id)},attrs:{title:"Добавить в избранное / Удалить из избранного"},on:{click:function(s){return s.stopPropagation(),t.putLike(s,e.id)}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z",fill:"#fff"}})])])]),t._o(s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}}),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-genre card-tag",domProps:{textContent:t._s(e.tag)}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isLocalMultiplayer,expression:"game.isLocalMultiplayer"}],staticClass:"card-genre card-genre-coop"},[t._v("\n                      на двоих\n                    ")])])]),3,e.id)])],1)})),0):s("div",{staticClass:"wrapper--empty"},[s("img",{staticClass:"empty-loupe",attrs:{src:this.publicPath+"assets/loupe.png",alt:"Лупа",width:"150",height:"150"}}),s("p",{staticClass:"empty-start"},[t._v("По вашему запросу ничего не найдено")]),s("p",[t._v("Есть и другие игры, тоже интересные")])])]),s("vk-tabs-item",{attrs:{title:"МОИ"}},[t.isEmpty?s("div",{staticClass:"wrapper wrapper--empty"},[s("img",{staticClass:"empty-heart",attrs:{src:this.publicPath+"assets/heart.png",alt:"Сердце",width:"150",height:"150"}}),s("p",{staticClass:"empty-start"},[t._v("Список избранного пуст")]),s("p",{staticClass:"empty-offer"},[t._v("Начните добавлять любимые игры, чтобы не потерять их")])]):t.isEmpty||0!=t.showLikedGames.length?s("div",{staticClass:"wrapper"},t._l(t.showLikedGames,(function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",style:{"background-image":"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), url("+e.thumbnail+")"},attrs:{tag:"div",to:{name:"Id",params:{id:e.id}},title:"Перейти к игре"}},[s("div",{staticClass:"card__header"},[s("button",{staticClass:"like",class:{liked:t.wishlistIds.includes(e.id)},attrs:{title:"Добавить в избранное / Удалить из избранного"},on:{click:function(s){return s.stopPropagation(),t.putLike(s,e.id)}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z",fill:"#fff"}})])])]),t._o(s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}}),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-genre card-tag",domProps:{textContent:t._s(e.tag)}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isLocalMultiplayer,expression:"game.isLocalMultiplayer"}],staticClass:"card-genre card-genre-coop"},[t._v("\n                      на двоих\n                    ")])])]),4,e.id)])],1)})),0):s("div",{staticClass:"wrapper--empty"},[s("img",{staticClass:"empty-loupe",attrs:{src:this.publicPath+"assets/loupe.png",alt:"Лупа",width:"150",height:"150"}}),s("p",{staticClass:"empty-start"},[t._v("По вашему запросу ничего не найдено")]),s("p",[t._v("Есть и другие игры, тоже интересные")])])])],1)],1)],1),s("AppFooter")],1)},l=[],o=(s("6762"),s("2fdb"),s("a481"),s("386d"),s("a4ce")),c=s("f657"),d={name:"home",components:{AppHeader:o["a"],AppFooter:c["a"]},data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/catalog/",search:"",category:"",genre:"все",games:[],htcGenres:["симулятор","шутер","экшн","музыкальная","хоррор","спорт","квест","файтинг","песочница","стратегия","головоломка","аттракцион","приключение","творчество","многопользовательская"],oq2Genres:["симулятор","аркада","экшн","шутер","хоррор","гонка","спорт","квест","файтинг","песочница","стратегия","приключение","аттракцион","творчество","музыкальная"],psvrGenres:["симулятор","экшн","аркада","гонка","хоррор","квест","песочница","аттракцион","приключение","многопользовательская"],ps5Genres:["экшн","шутер","аркада","гонка","спорт","файтинг","песочница","симулятор","стратегия","приключение","интерактивное кино","многопользовательская"],isOpened:!1,selectedGenre:"все",selectedPlatform:"htc",selectedSort:"default",isChild:!1,isVeryChild:!1,isLocalMultiplayer:!1,end:!1,wishlistIds:[],gameId:null}},methods:{putLike:function(t,e){this.gameId=e,this.liked=!this.liked,this.liked&&navigator.vibrate(100)},closeSearchGame:function(){""==this.search?this.$refs.closeSearch.classList.remove("active"):this.$refs.closeSearch.classList.add("active")},setChild:function(){this.isVeryChild=!1},setVeryChild:function(){this.isChild=!1},clearSearch:function(){this.search="",this.$refs.closeSearch.classList.remove("active")},changePlatform:function(t){"a"===t.target.tagName.toLowerCase()&&(this.selectedPlatform=t.target.text.replace(/\s.*/,"").toLowerCase(),this.selectedGenre="все")},clearids:function(){this.$store.commit("clearLikedGames"),this.wishlistIds=this.$store.state.wishlistIds}},watch:{search:function(t){this.search=this.search.toLocaleLowerCase()}},mounted:function(){this.$store.dispatch("loadGames"),0==this.$store.state.wishlistIds.length&&(this.isEmpty=!this.isEmpty),this.wishlistIds=this.$store.state.wishlistIds;var t=this,e=new Shake({threshold:15});function s(){t.clearids()}e.start(),window.addEventListener("shake",s,!1)},created:function(){},computed:{liked:{get:function(){return this.$store.state.wishlistIds.includes(this.gameId)},set:function(t){this.$store.commit(t?"addGame":"removeGame",this.gameId)}},showGames:function(){return this.$store.getters.showGames(this.search,this.selectedPlatform,this.selectedGenre,this.isChild,this.isVeryChild,this.selectedSort)},showGamesByHTC:function(){return this.$store.getters.showHTCGames(this.search,this.selectedGenre,this.isChild,this.isVeryChild,this.selectedSort)},showGamesByOQ2:function(){return this.$store.getters.showOQ2Games(this.search,this.selectedGenre,this.isChild,this.isVeryChild,this.selectedSort)},showGamesByPSVR:function(){return this.$store.getters.showPSVRGames(this.search,this.selectedGenre,this.isChild,this.isVeryChild,this.selectedSort)},showGamesByPS5:function(){return this.$store.getters.showPS5Games(this.search,this.selectedGenre,this.isChild,this.isLocalMultiplayer,this.selectedSort)},showLikedGames:function(){return this.$store.getters.wishlist(this.search)},isEmpty:{get:function(){return!this.$store.state.wishlistIds.length},set:function(t){console.log(t)}},showActivePlatformGenres:function(){return this.$store.getters.showGenres(this.selectedPlatform)}}},u=d,h=s("2877"),p=Object(h["a"])(u,n,l,!1,null,null,null),m=p.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("AppHeader"),s("section",[s("div",{staticClass:"container"},[s("ButtonHome"),s("div",{staticClass:"container-game"},[s("div",{staticClass:"game-info"},[s("h1",{staticClass:"game-title"},[t._v(t._s(t.game.title))]),s("p",{staticClass:"game-text"},[s("span",{staticClass:"game-genre"},[t._v("Об игре: ")]),t._v(t._s(t.game.description))]),s("p",[s("span",{staticClass:"game-genre"},[t._v("Жанр: ")]),t._v(t._s(t.game.genre))]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.game.isLocalMultiplayer,expression:"game.isLocalMultiplayer"}]},[s("b",[t._v("*")]),t._v(" Доступен локальный кооператив (игра на одном телевизоре)")]),s("p",{staticClass:"game-tag"},[s("span",{staticClass:"game-genre"},[t._v("Тег: ")]),s("span",{staticClass:"card-genre"},[t._v(t._s(t.game.tag))])])])]),s("div",{staticClass:"gallery-swiper"},[s("div",{staticClass:"swiper main-swiper"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:t.game.image1,alt:t.game.title}})]),s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:t.game.image2,alt:t.game.title}})]),s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:t.game.image3,alt:t.game.title}})]),s("div",{staticClass:"swiper-slide swiper-slide-youtube",on:{click:function(e){return t.playVideo()}}},[s("youtube",{ref:"youtube",attrs:{"video-id":t.getId(),"player-vars":t.playerVars}})],1)])]),s("div",{staticClass:"swiper thumbs",attrs:{thumbsSlider:""}},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:t.game.image1,alt:t.game.title}})]),s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:t.game.image2,alt:t.game.title}})]),s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:t.game.image3,alt:t.game.title}})]),s("div",{staticClass:"swiper-slide swiper-slide-video"},[s("div",{staticClass:"swiper-video-thumb"}),s("img",{attrs:{src:t.game.image1,alt:t.game.title}})])])]),s("div",{staticClass:"swiper-button-prev"}),s("div",{staticClass:"swiper-button-next"})]),s("h2",[t._v("Похожие игры")]),s("div",{staticClass:"wrapper"},t._l(t.showSimilarGames,(function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"card",style:{"background-image":"linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), url("+e.thumbnail+")"},attrs:{tag:"div",to:{name:"Id",params:{id:e.id}},title:"Перейти к игре"},nativeOn:{click:function(s){return t.changeGame(e)}}},[s("div",{staticClass:"card__header"},[s("button",{staticClass:"like",class:{liked:t.wishlistIds.includes(e.id)},attrs:{title:"Добавить в избранное / Удалить из избранного"},on:{click:function(s){return s.stopPropagation(),t.putLike(s,e.id)}}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z",fill:"#fff"}})])])]),t._o(s("div",{staticClass:"card-desc"},[s("h3",{staticClass:"game-title",domProps:{textContent:t._s(e.title)}}),s("p",{staticClass:"game-desc",domProps:{textContent:t._s(e.description)}}),s("div",{staticClass:"card__footer"},[s("div",{staticClass:"card-genre",domProps:{textContent:t._s(e.genre)}}),s("div",{staticClass:"card-genre card-tag",domProps:{textContent:t._s(e.tag)}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isLocalMultiplayer,expression:"game.isLocalMultiplayer"}],staticClass:"card-genre card-genre-coop"},[t._v("\n                  на двоих\n                ")])])]),0,e.id)])],1)})),0)],1)]),s("AppFooter")],1)},v=[],f=(s("7514"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"link link--home",attrs:{tag:"a",to:"/",title:"Вернуться на главную"}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10.0001 19V14H14.0001V19C14.0001 19.55 14.4501 20 15.0001 20H18.0001C18.5501 20 19.0001 19.55 19.0001 19V12H20.7001C21.1601 12 21.3801 11.43 21.0301 11.13L12.6701 3.59997C12.2901 3.25997 11.7101 3.25997 11.3301 3.59997L2.9701 11.13C2.6301 11.43 2.8401 12 3.3001 12H5.0001V19C5.0001 19.55 5.4501 20 6.0001 20H9.0001C9.5501 20 10.0001 19.55 10.0001 19Z",fill:"#4d1523"}})])])}),C=[],w=(s("7f7f"),{name:"ButtonHome",data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/catalog/"}},computed:{currentRouteName:function(){return this.$route.name}}}),b=w,_=Object(h["a"])(b,f,C,!1,null,null,null),y=_.exports,k={components:{AppHeader:o["a"],AppFooter:c["a"],ButtonHome:y},data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/catalog/",game:"",wishlistIds:[],gameId:null,playerVars:{controls:1}}},methods:{putLike:function(t,e){this.gameId=e,this.liked=!this.liked,this.liked&&navigator.vibrate(100)},changeGame:function(t){this.game=t},playVideo:function(){this.player.playing?this.player.stopVideo():this.player.playVideo()},getId:function(){return this.$youtube.getIdFromUrl(this.game.video)}},mounted:function(){this.$store.dispatch("loadGames"),this.wishlistIds=this.$store.state.wishlistIds;var t=new Swiper(".thumbs",{loop:!0,spaceBetween:8,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0}),e=new Swiper(".main-swiper",{pagination:{el:".swiper-pagination",type:"bullets"},direction:"horizontal",loop:!0,spaceBetween:8,grabCursor:!0,breakpoints:{},keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:t}});e.on("slideChange",(function(t){}))},created:function(){var t=this;this.game=this.$store.state.games.find((function(e){return e.id==t.$route.params.id}))},computed:{showSimilarGames:function(){return this.$store.getters.showSimilarGamesByPlatform(this.game.id,this.game.category,this.game.tag)},liked:{get:function(){return this.$store.state.wishlistIds.includes(this.gameId)},set:function(t){this.$store.commit(t?"addGame":"removeGame",this.gameId)}},player:function(){return this.$refs.youtube.player}},beforeRouteEnter:function(t,e,s){s((function(t){t._backRoute=e.path}))}},P=k,x=Object(h["a"])(P,g,v,!1,null,null,null),G=x.exports;a["default"].use(r["a"]);var L=new r["a"]({base:"/catalog/",routes:[{path:"/",name:"home",component:m},{path:"/about",name:"about",component:function(){return s.e("chunk-2d22d746").then(s.bind(null,"f820"))}},{path:"/radio",name:"radio",component:function(){return s.e("chunk-2b92b05d").then(s.bind(null,"b3ad"))}},{path:"/game/:id",name:"Id",component:G,props:!0},{path:"*",redirect:"/"}],scrollBehavior:function(t,e,s){return s||{x:0,y:0}}}),S=s("bc3a"),I=s.n(S),$=s("a7fe"),V=s.n($),B=(s("55dd"),s("2f62")),E=s("0e44");a["default"].use(B["a"]);var O=function(){return{wishlistIds:[]}},M=new B["a"].Store({namespaced:!0,state:{games:[],wishlistIds:[],search:""},plugins:[Object(E["a"])()],getters:{showGenres:function(t){return function(e){var s=t.games.filter((function(t){return t.category==e})),a=s.reduce((function(t,e){var s=e.genre;return t.includes(s)||t.push(s),t}),[]);return a}},showHTCGames:function(t){return function(e,s,a,i,r){var n=t.games.filter((function(t){return"htc"==t.category&&("все"==s||t.genre===s)&&(!a||t.isChild)&&(!i||t.isVeryChild)&&(0==e.length||t.title.toLowerCase().includes(e)||t.genre.includes(e)||t.tag.includes(e))})),l=[];return l="ascending"==r?n.sort((function(t,e){return t.title.localeCompare(e.title)})):"descending"==r?n.sort((function(t,e){return e.title.localeCompare(t.title)})):"bygenre"==r?n.sort((function(t,e){return t.genre.localeCompare(e.genre)})):"bytag"==r?n.sort((function(t,e){return t.tag.localeCompare(e.tag)})):n,l}},showOQ2Games:function(t){return function(e,s,a,i,r){var n=t.games.filter((function(t){return"oq2"==t.category&&("все"==s||t.genre===s)&&(!a||t.isChild)&&(!i||t.isVeryChild)&&(0==e.length||t.title.toLowerCase().includes(e)||t.genre.includes(e)||t.tag.includes(e))})),l=[];return l="ascending"==r?n.sort((function(t,e){return t.title.localeCompare(e.title)})):"descending"==r?n.sort((function(t,e){return e.title.localeCompare(t.title)})):"bygenre"==r?n.sort((function(t,e){return t.genre.localeCompare(e.genre)})):"bytag"==r?n.sort((function(t,e){return t.tag.localeCompare(e.tag)})):n,l}},showPSVRGames:function(t){return function(e,s,a,i,r){var n=t.games.filter((function(t){return"psvr"==t.category&&("все"==s||t.genre===s)&&(!a||t.isChild)&&(!i||t.isVeryChild)&&(0==e.length||t.title.toLowerCase().includes(e)||t.genre.includes(e)||t.tag.includes(e))})),l=[];return l="ascending"==r?n.sort((function(t,e){return t.title.localeCompare(e.title)})):"descending"==r?n.sort((function(t,e){return e.title.localeCompare(t.title)})):"bygenre"==r?n.sort((function(t,e){return t.genre.localeCompare(e.genre)})):"bytag"==r?n.sort((function(t,e){return t.tag.localeCompare(e.tag)})):n,l}},showPS5Games:function(t){return function(e,s,a,i,r){var n=t.games.filter((function(t){return"ps5"==t.category&&("все"==s||t.genre===s)&&(!a||t.isChild)&&(!i||t.isLocalMultiplayer)&&(0==e.length||t.title.toLowerCase().includes(e)||t.genre.includes(e)||t.tag.includes(e))})),l=[];return l="ascending"==r?n.sort((function(t,e){return t.title.localeCompare(e.title)})):"descending"==r?n.sort((function(t,e){return e.title.localeCompare(t.title)})):"bygenre"==r?n.sort((function(t,e){return t.genre.localeCompare(e.genre)})):"bytag"==r?n.sort((function(t,e){return t.tag.localeCompare(e.tag)})):n,l}},showLikedGames:function(t){return function(e){return t.wishlist.filter((function(t){return t.title.toLowerCase().includes(e)}))}},wishlist:function(t){return function(e){return t.games.filter((function(s){return t.wishlistIds.includes(s.id)&&s.title.toLowerCase().includes(e)||t.wishlistIds.includes(s.id)&&s.genre.includes(e)||t.wishlistIds.includes(s.id)&&s.tag.includes(e)}))}},showSimilarGamesByPlatform:function(t){return function(e,s,a){return t.games.filter((function(t){return t.id!==e&&t.category===s&&t.tag==a&&void 0!==t.tag}))}},getGameById:function(t){return function(e){return t.games.find((function(t){return t.id===e}))}},showBackgrounds:function(t){return function(e){return"все"===e?t.backgrounds:t.backgrounds.filter((function(t){return t.theme===e}))}}},actions:{loadGames:function(t){var e=t.commit;I.a.get("games.json").then((function(t){return t.data.games})).then((function(t){e("SET_GAMES",t)}))}},mutations:{SET_GAMES:function(t,e){t.games=e},SET_BACKGROUNDS:function(t,e){t.backgrounds=e},addGame:function(t,e){t.wishlistIds.includes(e)||t.wishlistIds.push(e)},removeGame:function(t,e){var s=t.wishlistIds.indexOf(e);-1!==s&&t.wishlistIds.splice(s,1)},clearLikedGames:function(t){Object.assign(t,O())}}}),N=s("6afc"),j=s("574d"),H=s.n(j),A=(s("04f2"),s("e0ec")),T=s.n(A),R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("keep-alive",{attrs:{include:"home"}},[s("router-view",{staticClass:"app"})],1)],1)},D=[],q=(s("034f"),{}),Z=Object(h["a"])(q,R,D,!1,null,null,null),F=Z.exports;a["default"].config.productionTip=!1,a["default"].use(V.a,I.a),a["default"].use(N["a"]),a["default"].use(H.a),a["default"].use(T.a),a["default"].component("VkTabs",i["a"]),a["default"].component("VkTabsItem",i["b"]),new a["default"]({router:L,store:M,render:function(t){return t(F)}}).$mount("#app")},"64a9":function(t,e,s){},a4ce:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"container container-header"},["home"!==t.currentRouteName?s("div",{staticClass:"logo"},[s("router-link",{attrs:{tag:"a",to:"/",title:"Вернуться на главную"}},[s("img",{attrs:{src:this.publicPath+"assets/logo.png",alt:"",width:"140px",height:"auto"}})])],1):s("div",{staticClass:"logo"},[s("img",{attrs:{src:this.publicPath+"assets/logo.png",alt:"",width:"140px",height:"auto"}})]),s("div",{staticClass:"header-items"},[s("p",{staticClass:"header-item"},[s("img",{staticClass:"header-icon",attrs:{src:this.publicPath+"assets/pin.svg",alt:"",width:"20px",height:"20px"}}),s("span",{staticClass:"header-extra-info"},[t._v("Мы находимся: ")]),t._v('\n        Ленина, 83 | ТРК "Континент", 3 этаж\n      ')]),s("p",{staticClass:"header-item"},[s("img",{staticClass:"header-icon",attrs:{src:this.publicPath+"assets/time.svg",alt:"",width:"20px",height:"20px"}}),s("span",{staticClass:"header-extra-info"},[t._v("Мы работаем: ежедневно ")]),t._v("\n        с 10:00 до 21:00\n      ")])]),s("div",{staticClass:"header-info"},[s("a",{staticClass:"link header-tel",attrs:{href:"tel: +79000939392",title:"Позвонить нам"}},[t._v("+7 (900) 093-93-92")]),s("a",{staticClass:"link header-vk",attrs:{href:"https://vk.com/mgnvr",target:"_blank",title:"Мы ВКонтакте"}},[t._v("Вк\n      ")]),s("a",{staticClass:"link header-vk",attrs:{href:"https://t.me/+z1_HLSna-YVjZmJi",target:"_blank",title:"Мы в Телеграм"}},[t._v("Тг\n      ")]),"about"!==t.currentRouteName?s("router-link",{staticClass:"link",attrs:{tag:"a",to:"/about",title:"О нас"}},[t._v("О\n        нас")]):s("span",{staticClass:"about-not-link"},[t._v("О нас")])],1)])])}],r=(s("7f7f"),{name:"AppHeader",data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/catalog/"}},computed:{currentRouteName:function(){return this.$route.name}}}),n=r,l=s("2877"),o=Object(l["a"])(n,a,i,!1,null,null,null);e["a"]=o.exports},f657:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"container container-footer"},[s("div",{staticClass:"links"},[s("a",{staticClass:"link",attrs:{href:"tel: +79000939392",title:"Позвонить нам"}},[t._v("+7 (900) 093-93-92")]),s("a",{staticClass:"link",attrs:{href:"https://vk.com/mgnvr",target:"_blank",title:"Мы ВКонтакте"}},[t._v("Вк\n      ")]),s("a",{staticClass:"link",attrs:{href:"https://t.me/+z1_HLSna-YVjZmJi",target:"_blank",title:"Мы в Телеграм"}},[t._v("Тг\n      ")]),"about"!==t.currentRouteName?s("router-link",{staticClass:"link",attrs:{tag:"a",to:"/about",title:"О нас"}},[t._v("О\n        нас")]):s("span",{staticClass:"about-not-link"},[t._v("О нас")])],1),s("div",{staticClass:"copyright"},[s("div",{staticClass:"developer"},[t._v("\n        Дизайн и разработка\n        "),s("a",{staticClass:"dev",attrs:{href:"https://sergeyprimirenkov.github.io",target:"_blank"}},[s("img",{attrs:{src:this.publicPath+"assets/logo-ps.svg",alt:"Сергей Примиренков"}})])]),t._v("\n      © Driv3r, 2017 - "+t._s((new Date).getFullYear())+" | По всем вопросам обращаться по телефону или в\n      группу ВКонтакте "),"radio"!==t.currentRouteName?s("router-link",{staticStyle:{cursor:"pointer"},attrs:{tag:"span",to:"/radio"}},[t._v("| Послушать радио")]):t._e()],1)])])}],r=(s("7f7f"),{name:"AppFooter",data:function(){return{sitename:"Driv3r - Каталог игр",publicPath:"/catalog/"}},computed:{currentRouteName:function(){return this.$route.name}}}),n=r,l=s("2877"),o=Object(l["a"])(n,a,i,!1,null,null,null);e["a"]=o.exports}});
//# sourceMappingURL=app.a6470d30.js.map