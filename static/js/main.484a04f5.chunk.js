(this["webpackJsonpwallpaper-filter"]=this["webpackJsonpwallpaper-filter"]||[]).push([[0],{201:function(t,e,n){},213:function(t,e){},215:function(t,e){},225:function(t,e){},227:function(t,e){},254:function(t,e){},255:function(t,e){},260:function(t,e){},262:function(t,e){},269:function(t,e){},288:function(t,e){},314:function(t,e,n){"use strict";n.r(e);n(201);var i,r,a,c,o,l,s,d,u,b,j,h,f,p,O,g,x,v,w,m,k,y,C,z=n(0),N=n.n(z),F=n(36),P=n.n(F),R=n(32),I=n(17),E=n(355),S=n(18),W=n(361),L=n(188),B=n(189),M=n(2),A=function(){var t=Object(z.useRef)(null);return Object(M.jsxs)("div",{className:D.container,children:[Object(M.jsx)("div",{className:D.iconContainer,children:Object(M.jsx)(B.a,{className:D.icon})}),Object(M.jsx)("div",{ref:t,className:D.img,draggable:!0,onDragOver:function(t){return t.preventDefault()},onDrop:function(e){e.preventDefault();var n=e.dataTransfer.files;if(n&&n[0]){var i=new FileReader;i.onloadend=function(){t.current.style.backgroundImage="url(".concat(i.result,")")},i.readAsDataURL(n[0])}}})]})},D={container:Object(S.a)(i||(i=Object(I.a)(["\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t"]))),img:Object(S.a)(r||(r=Object(I.a)(["\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-size: cover;\n\t\tbackground-position: center;\n\t"]))),iconContainer:Object(S.a)(a||(a=Object(I.a)(["\n\t\tposition: absolute;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twidth: 15vw;\n\t\theight: 15vw;\n\t\tbackground-color: rgba(0, 0, 0, 0.1);\n\t\tborder-radius: 50%;\n\t\tbackdrop-filter: blur(10px);\n\t"]))),icon:Object(S.a)(c||(c=Object(I.a)(["\n\t\tposition: absolute;\n\t\tfont-size: 10vw;\n\t\tcolor: #696969;\n\t"])))},T=n(4),V=n(12),H=n(5),U=n(184),G=n(19),J=n(183),Y=n.n(J),$=Object(R.b)({key:"filter-list-state",default:[]}),_=Object(R.c)({key:"filter-list-zero-z-index-state",get:function(t){return(0,t.get)($).map((function(t){return{uid:t.uid,width:t.width,height:t.height,blur:t.blur,borderRadius:t.borderRadius,color:t.color,zIndex:0}}))}}),q=function(t){var e=Object(R.d)($),n=Object(H.a)(e,2),i=n[0],r=n[1];return{filterProps:i.find((function(e){return e.uid===t})),setFilterProps:function(e){var n=i.filter((function(e){return e.uid!==t}));1===e.zIndex&&(n=n.map((function(t){return Object(V.a)(Object(V.a)({},t),{},{zIndex:0})}))),r([].concat(Object(G.a)(n),[e]))}}},K=function(t){var e=t.screenRef,n=Object(R.e)($);return Object(M.jsx)(M.Fragment,{children:n.map((function(t){return Object(M.jsx)(Q,{filterId:t.uid,screenRef:e},t.uid)}))})},Q=function(t){var e=t.filterId,n=t.screenRef,i=q(e),r=i.filterProps,a=i.setFilterProps,c=r,o=Object(U.a)({skipOnMount:!0}),l=o.ref,s=o.width,d=o.height,u=Object(z.useState)(!1),b=Object(H.a)(u,2),j=b[0],h=b[1],f=Object(z.useState)(!1),p=Object(H.a)(f,2),O=p[0],g=p[1],x=Object(z.useRef)(!1),v=Object(z.useCallback)((function(t,e){var n=Math.min(window.innerWidth,t),i=Math.min(window.innerHeight,e);a(Object(V.a)(Object(V.a)({},c),{},{width:n,height:i}))}),[c,a]);Object(z.useEffect)((function(){s&&d&&x.current&&(h(!0),v(s,d))}),[d,s]),Object(z.useEffect)((function(){var t=function(){v(c.width,c.height)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[c,v]),Object(z.useEffect)((function(){l.current.style.width=c.width+"px",l.current.style.height=c.height+"px"}),[c]);return Object(M.jsxs)(E.a.div,{className:X.container,drag:!j,dragPropagation:!0,dragConstraints:n,dragMomentum:!1,onClick:function(){a(Object(V.a)(Object(V.a)({},c),{},{zIndex:1}))},onDoubleClick:function(){l.current.style.width=c.width+"px",l.current.style.height=c.height+"px",g(!1),h(!1),x.current=!1},children:[Object(M.jsx)("div",{className:X.filter(c)}),Object(M.jsx)("div",{ref:l,className:Object(S.b)(X.helper(c),Object(T.a)({},X.resizeGuaider,O)),onMouseEnter:function(){return g(!0)},onMouseLeave:function(){return!j&&g(!1)},onMouseUp:function(){h(!1),x.current=!1},onMouseDown:function(){return x.current=!0}})]})},X={container:Object(S.a)(o||(o=Object(I.a)(["\n\t\tposition: absolute;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t"]))),filter:function(t){return Object(S.a)(l||(l=Object(I.a)(["\n\t\tposition: relative;\n\t\twidth: ","px;\n\t\theight: ","px;\n\t\tbackground-color: rgba(",", ",", ",", ",");\n\t\tbackdrop-filter: blur(","px);\n\t\tborder-radius: ","px;\n\t\tz-index: ",";\n\t"])),t.width,t.height,t.color.r,t.color.g,t.color.b,t.color.a,t.blur,t.borderRadius,t.zIndex)},helper:function(t){return Object(S.a)(s||(s=Object(I.a)(["\n\t\tposition: absolute;\n\t\twidth: ","px;\n\t\theight: ","px;\n\t\tz-index: ",";\n\t"])),t.width,t.height,t.zIndex)},resizeGuaider:Object(S.a)(d||(d=Object(I.a)(["\n\t\tborder: 2px solid red;\n\t\tbox-sizing: content-box;\n\t\tresize: both;\n\t\toverflow: hidden;\n\t"])))},Z=n(127),tt=n(187),et=n.n(tt),nt=n(363),it=n(364),rt=n(360),at=n(358),ct=function(t){var e=t.label,n=t.unit,i=t.currentValue,r=t.range,a=t.setFilterProps,c=t.disabled,o=void 0!==c&&c,l=Object(H.a)(r,2),s=l[0],d=l[1],u=Object(z.useState)(i),b=Object(H.a)(u,2),j=b[0],h=b[1];Object(z.useEffect)((function(){h(i)}),[i]);return Object(M.jsxs)("div",{className:ot.container,children:[Object(M.jsx)(rt.a,{variant:"caption",gutterBottom:!0,sx:{color:o?"#7A7A7A":"#B7B7B7"},children:e}),Object(M.jsx)("div",{className:ot.sliderContainer,children:Object(M.jsx)(at.a,{"aria-label":e,size:"small",value:j,valueLabelDisplay:"auto",min:s,max:d,marks:[{value:s,label:"".concat(s).concat(n)},{value:d,label:"".concat(d).concat(n)}],disabled:o,onChange:function(t,e){h(e),a(e)}})})]})},ot={container:Object(S.a)(u||(u=Object(I.a)(["\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t"]))),sliderContainer:Object(S.a)(b||(b=Object(I.a)(["\n\t\twidth: 100%;\n\t\tpadding-left: 10px;\n\t\tpadding-right: 10px;\n\t"]))),text:Object(S.a)(j||(j=Object(I.a)(["\n\t\tcolor: #b7b7b7;\n\t"])))},lt=n(356),st=n(362),dt=function(t){var e,n=t.label,i=t.unit,r=t.currentValue,a=t.range,c=t.setFilterProps,o=t.disabled,l=void 0!==o&&o,s=Object(H.a)(a,2),d=s[0],u=s[1],b=Object(z.useState)(r),j=Object(H.a)(b,2),h=j[0],f=j[1],p=Object(z.useRef)(null);return Object(z.useEffect)((function(){f(r)}),[r]),Object(M.jsx)(lt.a,{inputRef:p,label:n,variant:"standard",type:"number",fullWidth:!0,value:h,disabled:l,InputLabelProps:{shrink:!0},InputProps:{endAdornment:Object(M.jsx)(st.a,{position:"start",sx:{marginLeft:1},children:i}),inputProps:{min:d,max:u},style:{textAlign:"right"}},helperText:null===p||void 0===p||null===(e=p.current)||void 0===e?void 0:e.validationMessage,onChange:function(t){var e=parseInt(t.target.value,10);f(e),d<=e&&e<=u&&c(e)}})},ut=function(){var t=Object(R.f)($),e=Object(R.e)(_),n={activeFilter:Object(R.e)($).find((function(t){return 1===t.zIndex}))}.activeFilter,i=q(n?n.uid:"").setFilterProps,r=function(t){var e=Object(R.d)($),n=Object(H.a)(e,2),i=n[0],r=n[1];return{deleteFitler:function(){var e,n=i.filter((function(e){return e.uid!==t}));n.length>0&&(e=n[n.length-1],n=n.filter((function(t){return t.uid!==e.uid}))),r(e?[].concat(Object(G.a)(n),[Object(V.a)(Object(V.a)({},e),{},{zIndex:1})]):[])}}}(n?n.uid:"").deleteFitler,a=Object(z.useState)([window.innerWidth,window.innerHeight]),c=Object(H.a)(a,2),o=c[0],l=c[1],s=Object(z.useState)(!0),d=Object(H.a)(s,2),u=d[0],b=d[1],j=Object(z.useRef)(!0),h=n?Math.floor(Math.min(n.width,n.height)/2):100;Object(z.useEffect)((function(){var t=function(){return l([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),Object(z.useEffect)((function(){var t=setInterval((function(){j.current=!0}),100);return function(){return clearInterval(t)}}),[]);var f=function(t){n&&i(Object(V.a)(Object(V.a)({},n),{},{width:t}))},p=function(t){n&&i(Object(V.a)(Object(V.a)({},n),{},{height:t}))};return Object(M.jsx)("div",{className:Object(S.b)(bt.screen,Object(T.a)({},bt.activeScreen,u)),onClick:function(){return b(!0)},children:Object(M.jsxs)("div",{className:bt.container,children:[Object(M.jsx)("div",{className:Object(S.b)(Object(T.a)({},bt.closeButton,u)),onClick:function(t){t.stopPropagation(),b(!1)},children:Object(M.jsx)("div",{className:Object(S.b)(Object(T.a)({},bt.close,u))})}),Object(M.jsxs)("div",{className:Object(S.b)(bt.controller,Object(T.a)({},bt.activeController,u)),children:[Object(M.jsxs)("div",{className:bt.btnContainer,children:[Object(M.jsx)(nt.a,{variant:"outlined",onClick:function(){var n={uid:Y.a.generate(10),width:500,height:500,blur:10,borderRadius:0,color:{r:255,g:255,b:255,a:.2},zIndex:1};t([].concat(Object(G.a)(e),[n]))},children:"Add"}),Object(M.jsx)(nt.a,{variant:"outlined",color:"secondary",onClick:function(){r()},disabled:!n,children:"Delete"})]}),Object(M.jsxs)("div",{className:bt.inputContainer,children:[Object(M.jsx)(dt,{label:"Width",unit:"px",currentValue:n?n.width:500,range:[10,o[0]],setFilterProps:f,disabled:!n}),Object(M.jsx)(nt.a,{variant:"outlined",disabled:!n,sx:{height:30,mt:2},onClick:function(){return f(window.innerWidth)},children:"Fill"})]}),Object(M.jsxs)("div",{className:bt.inputContainer,children:[Object(M.jsx)(dt,{label:"Height",unit:"px",currentValue:n?n.height:500,range:[10,o[1]],setFilterProps:p,disabled:!n}),Object(M.jsx)(nt.a,{variant:"outlined",disabled:!n,sx:{height:30,mt:2},onClick:function(){return p(window.innerHeight)},children:"Fill"})]}),Object(M.jsx)("div",{className:bt.inputContainer,children:Object(M.jsx)(ct,{label:"Corner Roundness",unit:"px",currentValue:n?n.borderRadius:0,range:[0,h],setFilterProps:function(t){n&&i(Object(V.a)(Object(V.a)({},n),{},{borderRadius:t}))},disabled:!n})}),Object(M.jsx)("div",{className:bt.inputContainer,children:Object(M.jsx)(ct,{label:"Blur",unit:"px",currentValue:n?n.blur:10,range:[0,100],setFilterProps:function(t){n&&i(Object(V.a)(Object(V.a)({},n),{},{blur:t}))},disabled:!n})}),n?Object(M.jsx)(Z.a,{color:n.color,onChange:function(t){n&&j.current&&(i(Object(V.a)(Object(V.a)({},n),{},{color:t})),j.current=!1)}}):Object(M.jsx)(Z.a,{}),Object(M.jsx)("div",{className:bt.linkButtonContainer,children:Object(M.jsx)("a",{href:"https://github.com/nemutas/app-wallpaper-filter",target:"_blank",rel:"noreferrer",children:Object(M.jsx)(it.a,{"aria-label":"git hub",color:"default",size:"large",children:Object(M.jsx)(et.a,{sx:{width:40,height:40}})})})})]})]})})},bt={screen:Object(S.a)(h||(h=Object(I.a)(["\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\theight: 100%;\n\t\twidth: 30px;\n\t\topacity: 0;\n\t\ttransition: 0.5s;\n\t\tz-index: 10;\n\n\t\t&:hover {\n\t\t\topacity: 1;\n\t\t\tbackground-color: rgba(0, 0, 0, 0.6);\n\t\t\tcursor: pointer;\n\t\t}\n\t"]))),activeScreen:Object(S.a)(f||(f=Object(I.a)(["\n\t\twidth: 400px;\n\t\topacity: 1;\n\t\tbackground-color: rgba(0, 0, 0, 0.6);\n\n\t\t&:hover {\n\t\t\tcursor: auto;\n\t\t}\n\t"]))),container:Object(S.a)(p||(p=Object(I.a)(["\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t"]))),closeButton:Object(S.a)(O||(O=Object(I.a)(["\n\t\tposition: absolute;\n\t\ttop: 10px;\n\t\tright: 10px;\n\t\twidth: 50px;\n\t\theight: 50px;\n\t\tborder-radius: 50%;\n\t\tpadding: 8px;\n\t\tcursor: pointer;\n\t\ttransition: background-color 0.3s;\n\n\t\t&:hover {\n\t\t\tbackground-color: rgba(255, 255, 255, 0.2);\n\t\t}\n\t"]))),close:Object(S.a)(g||(g=Object(I.a)(["\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\n\t\t&::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 2px;\n\t\t\tbackground-color: white;\n\t\t\ttransform: rotate(45deg);\n\t\t}\n\t\t&::after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 2px;\n\t\t\tbackground-color: white;\n\t\t\ttransform: rotate(-45deg);\n\t\t}\n\t"]))),controller:Object(S.a)(x||(x=Object(I.a)(["\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\twidth: 100%;\n\t\theight: calc(100% - 70px);\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tgrid-gap: 30px;\n\t\tpadding: 0 20px 20px 20px;\n\t\topacity: 0;\n\t\ttransform: translateY(100%);\n\t\ttransition: transform 1s, opacity 0.5s;\n\t"]))),activeController:Object(S.a)(v||(v=Object(I.a)(["\n\t\ttransform: translateY(0);\n\t\topacity: 1;\n\t"]))),btnContainer:Object(S.a)(w||(w=Object(I.a)(["\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-gap: 10px;\n\t"]))),inputContainer:Object(S.a)(m||(m=Object(I.a)(["\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\theight: 80px;\n\t\tdisplay: flex;\n\t\tgrid-gap: 10px;\n\t"]))),linkButtonContainer:Object(S.a)(k||(k=Object(I.a)(["\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\twidth: 100%;\n\t\tpadding: 10px;\n\t\tdisplay: flex;\n\t"])))},jt=function(){var t=Object(z.useRef)(null);return Object(M.jsx)(W.a,{theme:ht,children:Object(M.jsxs)(E.a.div,{ref:t,className:ft.container,children:[Object(M.jsx)(A,{}),Object(M.jsx)(K,{screenRef:t}),Object(M.jsx)(ut,{})]})})},ht=Object(L.a)({palette:{mode:"dark"}}),ft={container:Object(S.a)(y||(y=Object(I.a)(["\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\theight: 100vh;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\toverflow: hidden;\n\t\tbackground: linear-gradient(45deg, #354458 50%, #29aba4 50%);\n\n\t\t&::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tclip-path: polygon(0 0, 100% 0, 100% 30%, 0 70%);\n\t\t\tbackground: linear-gradient(-80deg, #e9e0d6 60%, #3a9ad9 60%);\n\t\t}\n\t"]))),text:Object(S.a)(C||(C=Object(I.a)(["\n\t\tcolor: white;\n\t\tfont-size: 5rem;\n\t"])))},pt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,365)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),r(t),a(t),c(t)}))},Ot=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function gt(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}P.a.render(Object(M.jsx)(N.a.StrictMode,{children:Object(M.jsx)(R.a,{children:Object(M.jsx)(jt,{})})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/app-wallpaper-filter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/app-wallpaper-filter","/service-worker.js");Ot?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):gt(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):gt(e,t)}))}}(),pt()}},[[314,1,2]]]);
//# sourceMappingURL=main.484a04f5.chunk.js.map