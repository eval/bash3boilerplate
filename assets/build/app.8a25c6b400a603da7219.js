!function(n){function c(t){if(e[t])return e[t].exports;var l=e[t]={i:t,l:!1,exports:{}};return n[t].call(l.exports,l,l.exports,c),l.l=!0,l.exports}var e={};c.m=n,c.c=e,c.i=function(n){return n},c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},c.p="/assets/build/",c(c.s=4)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(1);\n__webpack_require__(2);\n__webpack_require__(3);\n\n// check if HMR is enabled\nif (false) {\n  module.hot.accept('./main.js', function () {\n    require('./main.js');\n  });\n  module.hot.accept('./style.css', function () {\n    require('./style.css');\n  });\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9hc3NldHMvYXBwLmpzPzg0OTgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL21haW4uanMnKTtcbnJlcXVpcmUoJy4vc3R5bGUuY3NzJyk7XG5yZXF1aXJlKCcuL3N5bnRheC5jc3MnKTtcblxuLy8gY2hlY2sgaWYgSE1SIGlzIGVuYWJsZWRcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCcuL21haW4uanMnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmVxdWlyZSgnLi9tYWluLmpzJyk7XG4gIH0pO1xuICBtb2R1bGUuaG90LmFjY2VwdCgnLi9zdHlsZS5jc3MnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmVxdWlyZSgnLi9zdHlsZS5jc3MnKTtcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYXNzZXRzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==")},function(module,exports,__webpack_require__){"use strict";eval("\n\n// Backgrounds.\n// var backgrounds = [1,2,3,4,5,6]\nvar backgrounds = [1];\n\n// Highlighting.\nhljs.initHighlighting();\n\n// Storage.\nvar store = window.sessionStorage;\n\n// Background.\nvar background = store.getItem('background');\n\nif (!background) {\n  var i = Math.random() * backgrounds.length | 0;\n  background = backgrounds[i];\n  console.log('setting background to %s', background);\n  store.setItem('background', background);\n}\n\n// Body class for background.\nvar el = document.getElementById('header-overlay');\nel.style.backgroundImage = 'url(/assets/images/' + background + '.jpg)';\n\n// Attach class to #menu element depending on page offset.\ndocument.addEventListener('DOMContentLoaded', chooseMenuColor);\nwindow.onscroll = chooseMenuColor;\n\nfunction chooseMenuColor() {\n  var menuElement = document.getElementById('menu');\n  var menuTopOffset = 45;\n  Math.floor(window.innerHeight * .20) < window.pageYOffset + menuTopOffset ? menuElement.classList.remove('over-header') : menuElement.classList.add('over-header');\n}\n\nfunction $get(selector) {\n  return document.querySelector(selector);\n}\nfunction $all(selector) {\n  return Array.prototype.slice.call(document.querySelectorAll(selector));\n}\n\nvar container = $get('#menu-items');\n\n// if (location.pathname !== '/') {\n//   var li = document.createElement('li');\n//   li.innerHTML = '<a href=\"/\">&laquo; Home</a>';\n//   container.appendChild(li);\n// }\n\n$all('#content h2').forEach(function (el) {\n  var li = document.createElement('li');\n  li.innerHTML = '<a href=\"#' + el.id + '\">' + el.innerHTML + '</a>';\n  container.appendChild(li);\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9hc3NldHMvbWFpbi5qcz82Y2FmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLy8gQmFja2dyb3VuZHMuXG4vLyB2YXIgYmFja2dyb3VuZHMgPSBbMSwyLDMsNCw1LDZdXG52YXIgYmFja2dyb3VuZHMgPSBbMV07XG5cbi8vIEhpZ2hsaWdodGluZy5cbmhsanMuaW5pdEhpZ2hsaWdodGluZygpO1xuXG4vLyBTdG9yYWdlLlxudmFyIHN0b3JlID0gd2luZG93LnNlc3Npb25TdG9yYWdlO1xuXG4vLyBCYWNrZ3JvdW5kLlxudmFyIGJhY2tncm91bmQgPSBzdG9yZS5nZXRJdGVtKCdiYWNrZ3JvdW5kJyk7XG5cbmlmICghYmFja2dyb3VuZCkge1xuICB2YXIgaSA9IE1hdGgucmFuZG9tKCkgKiBiYWNrZ3JvdW5kcy5sZW5ndGggfCAwO1xuICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZHNbaV07XG4gIGNvbnNvbGUubG9nKCdzZXR0aW5nIGJhY2tncm91bmQgdG8gJXMnLCBiYWNrZ3JvdW5kKTtcbiAgc3RvcmUuc2V0SXRlbSgnYmFja2dyb3VuZCcsIGJhY2tncm91bmQpO1xufVxuXG4vLyBCb2R5IGNsYXNzIGZvciBiYWNrZ3JvdW5kLlxudmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1vdmVybGF5Jyk7XG5lbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC9hc3NldHMvaW1hZ2VzLycgKyBiYWNrZ3JvdW5kICsgJy5qcGcpJztcblxuLy8gQXR0YWNoIGNsYXNzIHRvICNtZW51IGVsZW1lbnQgZGVwZW5kaW5nIG9uIHBhZ2Ugb2Zmc2V0LlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNob29zZU1lbnVDb2xvcik7XG53aW5kb3cub25zY3JvbGwgPSBjaG9vc2VNZW51Q29sb3I7XG5cbmZ1bmN0aW9uIGNob29zZU1lbnVDb2xvcigpIHtcbiAgdmFyIG1lbnVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgdmFyIG1lbnVUb3BPZmZzZXQgPSA0NTtcbiAgTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJIZWlnaHQgKiAuMjApIDwgd2luZG93LnBhZ2VZT2Zmc2V0ICsgbWVudVRvcE9mZnNldCA/IG1lbnVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXItaGVhZGVyJykgOiBtZW51RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdmVyLWhlYWRlcicpO1xufVxuXG5mdW5jdGlvbiAkZ2V0KHNlbGVjdG9yKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cbmZ1bmN0aW9uICRhbGwoc2VsZWN0b3IpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cblxudmFyIGNvbnRhaW5lciA9ICRnZXQoJyNtZW51LWl0ZW1zJyk7XG5cbi8vIGlmIChsb2NhdGlvbi5wYXRobmFtZSAhPT0gJy8nKSB7XG4vLyAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4vLyAgIGxpLmlubmVySFRNTCA9ICc8YSBocmVmPVwiL1wiPiZsYXF1bzsgSG9tZTwvYT4nO1xuLy8gICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGkpO1xuLy8gfVxuXG4kYWxsKCcjY29udGVudCBoMicpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLmlubmVySFRNTCA9ICc8YSBocmVmPVwiIycgKyBlbC5pZCArICdcIj4nICsgZWwuaW5uZXJIVE1MICsgJzwvYT4nO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGkpO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYXNzZXRzL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9")},function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9hc3NldHMvc3R5bGUuY3NzPzFmNjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9hc3NldHMvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=")},function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9hc3NldHMvc3ludGF4LmNzcz81MThmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYXNzZXRzL3N5bnRheC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==")},function(n,c,e){n.exports=e(0)}]);