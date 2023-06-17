(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'body {\n    margin: 0;\n}\n\n#content {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n    justify-content: space-between; \n}\n\n.header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 2rem;\n    width: 100%;\n    background-color: darkgray;\n    border-bottom: 1px solid darkgray;\n}\n\n.restaurantname {\n    margin-bottom: 1rem;\n    font-size: 64px;\n}\n\nnav {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items:center; \n}\n\nbutton {\n    color: inherit;\n    cursor: pointer;\n    border-style: none;\n    outline: none;\n    font-size: 12px;\n    padding: 1rem;\n}\n\n.main {\n    max-width: 1000px;\n    padding: 4rem;\n    margin: 6rem 0;\n    font-size: 2rem;\n    background-color: darkgray;\n    border: 1px solid darkgray;\n}\n\n.home {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    animation: fadeIn 1.5s;\n}\n\n.welcome {\n    display: grid;\n    grid-template: 1fr 2fr / 3fr 2fr;\n    grid-template-areas: \n        "welcomeheader welcomeimage"\n        "description welcomeimage";\n}\n\nh2 {\n    font-size: 48px;\n}\n\n.welcomeheader {\n    grid-area: welcomeheader;\n}\n\n.welcomeimage {\n    grid-area: welcomeimage;\n}\n\n.description {\n    grid-area: description;\n} \n\np,\nli {\n    font-size: 24px;\n}\n\nfooter > p {\n    font-size: 12px;\n}\nsvg {\n    height: 26px;\n}\n\nul {\n    list-style: none;\n}\n\n.menugrid {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    margin: 0 auto;\n    grid-gap: 10px;\n}\n\n@media (min-width: 1600px) {\n    .menugrid {\n      grid-template-columns: repeat(2, 1fr);\n      grid-template-rows: repeat(3, 1fr);\n    }\n  }\n  \n  /* Media Query for 6x1 grid */\n  @media (min-width: 2000px) {\n    .menugrid {\n      grid-template-columns: repeat(3, 1fr);\n      grid-template-rows: repeat(2, 1fr);\n    }\n  }\n  \n\n.menuitem {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 300px;\n    padding: 4rem;\n}\n\n.menuitem > p {\n    margin: 0;\n    padding: 0.25rem;\n}\n\n.menuitem > img {\n    height: 200px;\n}\n\n\n\n.footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 1rem;\n    border-top: 1px solid darkgray;\n    background-color: darkgray;\n}',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=function(){const e=document.querySelector(".main"),n=function(){const e=document.createElement("div"),n=function(){const e=document.createElement("div"),n=document.createElement("h2"),t=document.createElement("p"),r=function(e,n){const t=document.createElement("img");return t.src="images/welcomesteak.jpg",t.alt="Welcome Steak",t}();return e.classList.add("welcome"),n.classList.add("welcomeheader"),r.classList.add("welcomeimage"),t.classList.add("description"),n.textContent="Welcome to Regent Steakhouse!",t.textContent="Regent Steakhouse is a top of the line steakhouse where we prepare steaks with only the finest cuts and the freshest ingredients. Aside from the food, our steakhouse is a great place to have some celebrations with your loved ones or have a business meeting. A unique selling point compared to other steakhouses is that we don't actually exist!",e.appendChild(n),e.appendChild(t),e.appendChild(r),e}(),t=function(){const e=document.createElement("div"),n=document.createElement("h2"),t=function(e){const n=document.createElement("ul");for(let t=0;t<e.length;t++){const r=document.createElement("li"),o=e[t];r.textContent=`${o.day}: ${o.hours}`,n.appendChild(r)}return n}(function(){const e=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],n=["11am-8pm","11am-8pm","11am-8pm","11am-8pm","10am-11pm","10am-11pm","11am-9pm"],t=[];for(let r=0;r<e.length;r++){const o={day:e[r],hours:n[r]};t.push(o)}return t}());return e.classList.add("openinghours"),n.classList.add("openinghoursh2"),n.textContent="Opening Hours",e.appendChild(n),e.appendChild(t),e}();return e.classList.add("home"),e.appendChild(n),e.appendChild(t),e}();e.innerHTML="",e.appendChild(n)};function g(e){const n=function(e,n){const t=document.createElement("img");return t.src=e,t.alt=n,t}(e.img,e.altdescription),t=document.createElement("p");t.classList.add("itemName"),t.textContent=e.itemname;const r=document.createElement("p");r.classList.add("price"),r.textContent=e.price;const o=document.createElement("div");return o.classList.add("menuitem"),o.appendChild(n),o.appendChild(t),o.appendChild(r),o}function C(e){const n=document.createElement("div");n.classList.add("menugrid");for(let t=0;t<e.length;t++){const r=g(e[t]);n.appendChild(r)}return n}const v=function(){const e=document.querySelector(".main"),n=function(){const e=[],n=["ribeye","filetmignon","beeftenderloin","tbonesteak","porterhouse","primerib"],t=["Ribeye","Filet Mignon","Beef Tenderloin","T-Bone Steak","Porterhouse","Prime Rib"],r=["Php 5000","Php 3820","Php 2200","Php 2100","Php 2350","Php 1900"];for(let o=0;o<n.length;o++){const a={img:`images/${n[o]}.jpg`,altdescription:n[o],itemname:t[o],price:r[o]};e.push(a)}return e}(),t=C(n);e.innerHTML="",C(n),e.appendChild(t)},y=(e,n,t)=>({svg:e,method:n,contactdetail:t});function x(e,n){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("viewBox","0 0 24 24");const r=document.createElementNS("http://www.w3.org/2000/svg","title");r.textContent=e;const o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("d",n),t.appendChild(r),t.appendChild(o),t}const w=function(){const e=document.querySelector(".main"),n=document.createElement("div"),t=function(){const e=function(){const e=[],n=function(){const e=[],n=["phone","at","map-marker"],t=["M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z","M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z","M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"];for(let r=0;r<n.length;r++){const o=x(n[r],t[r]);e.push(o)}return e}(),t=["Number","Email","Address"],r=["+63 917 420 2137","regentsteakhouse@fakeemail.com","98th floor, One Bonifacio High, Taguig, NCR, Philippines"];for(let o=0;o<n.length;o++){const a=n[o],i=y(a,t[o],r[o]);e.push(i)}return e}(),n=document.createElement("ul");n.classList.add("contactoptionslist");for(let t=0;t<e.length;t++){const r=e[t],o=document.createElement("li");o.classList.add("contactoptions");const a=document.createElement("span");a.textContent=r.method+": ";const i=document.createElement("span");i.textContent=r.contactdetail,o.appendChild(r.svg),o.appendChild(a),o.appendChild(i),n.appendChild(o)}return n}();e.innerHTML="",n.classList.add("contact"),e.appendChild(n),n.appendChild(t)};function b(){const e=function(){const e=document.createElement("header"),n=document.createElement("h1"),t=function(){const e=document.createElement("nav");return["Home","Menu","Contact"].forEach((n=>{const t=function(e){const n=document.createElement("button");return n.classList.add(e.toLowerCase()),n.classList.add("button"),n.textContent=e,n}(n);!function(e,n){e.addEventListener("click",n)}(t,function(e){switch(e){case"Home":return f;case"Menu":return v;case"Contact":return w;default:return null}}(n)),e.appendChild(t)})),e}();return e.classList.add("header"),n.classList.add("restaurantname"),n.textContent="Regent Steakhouse",e.appendChild(n),e.appendChild(t),e}(),n=function(){const e=document.createElement("footer"),n=document.createElement("p");return e.classList.add("footer"),n.textContent="Copyright © 2023 thephilosopher13",e.appendChild(n),e}(),t=function(){const e=document.createElement("main");return e.classList.add("main"),e}(),r=function(){const e=document.createElement("div");return e.setAttribute("id","content"),e}(),o=document.querySelector("body");r.appendChild(e),r.appendChild(t),r.appendChild(n),o.appendChild(r)}b(),f()})()})();