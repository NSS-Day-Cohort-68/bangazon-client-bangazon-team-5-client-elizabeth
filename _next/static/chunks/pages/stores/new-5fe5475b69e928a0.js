(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[167],{8411:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stores/new",function(){return n(3896)}])},900:function(e,t,n){"use strict";n.d(t,{II:function(){return o},Ph:function(){return a},gx:function(){return i}});var r=n(5893);function o(e){var t=e.id,n=e.type,o=void 0===n?"text":n,a=e.placeholder,i=void 0===a?"":a,c=e.refEl,s=void 0===c?void 0:c,l=e.label,u=void 0===l?void 0:l,d=e.onChangeEvent,f=e.addlClass,h=void 0===f?"":f,p=e.children;return(0,r.jsxs)("div",{className:"field ".concat(h),children:[u&&(0,r.jsx)("label",{className:"label",children:u}),(0,r.jsx)("div",{className:"control",children:(0,r.jsx)("input",{id:t,placeholder:i,className:"input",type:o,ref:s,onChange:d})}),p]})}function a(e){var t=e.id,n=e.refEl,o=e.options,a=e.title,i=e.label,c=e.addlClass,s=void 0===c?"":c;return(0,r.jsxs)("div",{className:"field is-expanded",children:[i?(0,r.jsx)("label",{className:"label",children:i}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("div",{className:"select ".concat(s," is-fullwidth"),children:(0,r.jsxs)("select",{id:t,ref:n,children:[(0,r.jsx)("option",{value:"0",children:a}),o.map((function(e){return(0,r.jsx)("option",{value:e.id,children:e.name},e.id)}))]})})]})}function i(e){var t=e.id,n=e.label,o=e.placeholder;return(0,r.jsxs)("div",{className:"field",children:[(0,r.jsx)("label",{className:"label",children:n}),(0,r.jsx)("div",{className:"control",children:(0,r.jsx)("textarea",{id:t,className:"textarea",placeholder:o})})]})}},8016:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),o=n(900),a=n(3400);function i(e){var t=e.nameEl,n=e.descriptionEl,i=e.saveEvent,c=e.title,s=e.router,l=e.children;return(0,r.jsxs)(a.Z,{title:c,children:[(0,r.jsxs)(r.Fragment,{children:[l,(0,r.jsx)(o.II,{id:"name",refEl:t,type:"text",placeholder:"Store Name"}),(0,r.jsx)("textarea",{placeholder:"Add a Description...",className:"textarea",ref:n})]}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{className:"card-footer-item",onClick:i,children:"Save"}),(0,r.jsx)("a",{className:"card-footer-item",onClick:function(){return s.back()},children:"Cancel"})]})]})}},5959:function(e,t,n){"use strict";n.d(t,{r8:function(){return o},ce:function(){return a},QL:function(){return i},xW:function(){return c},Rw:function(){return s},Xl:function(){return l}});var r=n(8519);function o(){return(0,r.D)("stores",{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}})}function a(e){return(0,r.D)("stores/".concat(e),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}})}function i(e){return(0,r.D)("stores",{method:"POST",headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"},body:JSON.stringify(e)})}function c(e){return(0,r.G)("stores/".concat(e.id),{method:"PUT",headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"},body:JSON.stringify(e)})}function s(e){return(0,r.G)("stores/".concat(e,"/favorite"),{method:"POST",headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"}})}function l(e){return(0,r.G)("stores/".concat(e,"/unfavorite"),{method:"DELETE",headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"}})}},3896:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),o=n(1163),a=n(7294),i=n(2469),c=n(1127),s=n(5959),l=n(7569),u=n(8016);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){var e=(0,l.b)(),t=e.setProfile,n=e.profile,i=(0,a.useRef)(),c=(0,a.useRef)(),f=(0,o.useRouter)();return(0,r.jsx)(u.Z,{nameEl:i,descriptionEl:c,saveEvent:function(){(0,s.QL)({name:i.current.value,description:c.current.value}).then((function(e){t(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}({},n,{store:e})),f.push("/stores/".concat(e.id))}))},router:f,title:"Create your store",children:(0,r.jsx)("p",{children:"Give your new store a name and description. Then add products on the next page"})})}f.getLayout=function(e){return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(c.Z,{}),e]})}}},function(e){e.O(0,[824,774,888,179],(function(){return t=8411,e(e.s=t);var t}));var t=e.O();_N_E=t}]);