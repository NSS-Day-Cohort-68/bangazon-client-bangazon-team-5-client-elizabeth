(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{3962:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return s(8812)}])},7312:function(e,i,s){"use strict";s.d(i,{I:function(){return c}});var r=s(5893),n=s(1664);function c(e){var i=e.product,s=e.removeProduct,c=e.isOwner,t=void 0!==c&&c,d=e.width,a=void 0===d?"is-one-quarter":d;return(0,r.jsx)("div",{className:"column ".concat(a),children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card-image",children:(0,r.jsx)("figure",{className:"image is-4by3",children:(0,r.jsx)("img",{src:i.image_path,alt:"Placeholder image"})})}),(0,r.jsx)("header",{className:"card-header",children:(0,r.jsx)("p",{className:"card-header-title",children:(0,r.jsx)(n.default,{href:"/products/".concat(i.id),children:(0,r.jsxs)("a",{children:[i.name," - $",i.price]})})})}),(0,r.jsx)("div",{className:"card-content",children:(0,r.jsx)("div",{className:"content",children:i.description})}),t?(0,r.jsxs)("footer",{className:"card-footer",children:[(0,r.jsx)(n.default,{href:"/products/".concat(i.id,"/edit"),children:(0,r.jsx)("a",{className:"card-footer-item",children:"Edit"})}),(0,r.jsx)("a",{onClick:function(){return s(i.id)},className:"card-footer-item",children:"Delete"})]}):(0,r.jsx)(r.Fragment,{})]})})}},706:function(e,i,s){"use strict";s.d(i,{p:function(){return c}});var r=s(5893),n=s(1664);function c(e){var i=e.store,s=e.width,c=void 0===s?"is-half":s;return(0,r.jsx)("div",{className:"column ".concat(c),children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("header",{className:"card-header",children:(0,r.jsx)("p",{className:"card-header-title",children:i.name})}),(0,r.jsxs)("div",{className:"card-content",children:[(0,r.jsxs)("p",{className:"content",children:["Owner: ",i.seller.first_name," ",i.seller.last_name]}),(0,r.jsx)("div",{className:"content",children:i.description})]}),(0,r.jsx)("footer",{className:"card-footer",children:(0,r.jsx)(n.default,{href:"stores/".concat(i.id),children:(0,r.jsx)("a",{className:"card-footer-item",children:"View Store"})})})]})})}},8812:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return h}});var r=s(5893),n=s(7294),c=s(3400),t=s(2469),d=s(1127),a=s(7312),l=s(706),o=s(7569),u=s(4799);function h(){var e,i,s,t,d=(0,o.b)(),h=d.profile,m=d.setProfile;return(0,n.useEffect)((function(){(0,u.et)().then((function(e){e&&m(e)}))}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.Z,{title:"Favorite Stores",width:"is-full",children:[(0,r.jsx)("div",{className:"columns is-multiline",children:null===(e=h.favorites)||void 0===e?void 0:e.map((function(e){return(0,r.jsx)(l.p,{store:e,width:"is-one-third"},e.id)}))}),(0,r.jsx)(r.Fragment,{})]}),(0,r.jsxs)(c.Z,{title:"Products you've recommended",width:"is-full",children:[(0,r.jsx)("div",{className:"columns is-multiline",children:null===(i=h.recommended_by)||void 0===i?void 0:i.map((function(e){return(0,r.jsx)(a.I,{product:e.product,width:"is-one-third"},e.product.id)}))}),(0,r.jsx)(r.Fragment,{})]}),(0,r.jsxs)(c.Z,{title:"Products recommended to you",width:"is-full",children:[(0,r.jsx)("div",{className:"columns is-multiline",children:null===(s=h.recommendations)||void 0===s?void 0:s.map((function(e){return(0,r.jsx)(a.I,{product:e.product,width:"is-one-third"},e.product.id)}))}),(0,r.jsx)(r.Fragment,{})]}),(0,r.jsxs)(c.Z,{title:"Products you've liked",width:"is-full",children:[(0,r.jsx)("div",{className:"columns is-multiline",children:null===(t=h.likes)||void 0===t?void 0:t.map((function(e){return(0,r.jsx)(a.I,{product:e,width:"is-one-third"},e.id)}))}),(0,r.jsx)(r.Fragment,{})]})]})}h.getLayout=function(e){return(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(d.Z,{}),(0,r.jsx)("section",{className:"container",children:e})]})}}},function(e){e.O(0,[824,774,888,179],(function(){return i=3962,e(e.s=i);var i}));var i=e.O();_N_E=i}]);