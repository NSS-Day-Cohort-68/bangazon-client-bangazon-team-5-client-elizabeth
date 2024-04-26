(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[813],{2276:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stores",function(){return t(5468)}])},2469:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),a=t(9008),o=t(7569);function i(e){var n=e.children;return(0,r.jsx)(o.O,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"Bangazon"})}),(0,r.jsx)("main",{className:"container",children:n})]})})}},1127:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),a=t(1664),o=t(1163),i=t(7294),s=t(7569);function c(){var e=(0,s.b)(),n=e.token,t=e.setToken,c=e.profile,l=(e.setProfile,(0,i.useRef)()),u=(0,i.useRef)(),f=(0,i.useState)(!1),d=f[0],h=f[1],v=(0,o.useRouter)();(0,i.useEffect)((function(){h(!!n)}),[n]);return(0,r.jsxs)("nav",{className:"navbar mb-3 is-warning px-5 is-fixed-top is-top",role:"navigation","aria-label":"main navigation",children:[(0,r.jsxs)("div",{className:"navbar-brand",children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("img",{src:"/images/logo.png",alt:"Logo",style:{width:"4rem",height:"4rem"},className:"relative"})}),(0,r.jsxs)("a",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",ref:l,onClick:function(){l.current.classList.toggle("is-active"),u.current.classList.toggle("is-active")},children:[(0,r.jsx)("span",{"aria-hidden":"true"}),(0,r.jsx)("span",{"aria-hidden":"true"}),(0,r.jsx)("span",{"aria-hidden":"true"})]})]}),(0,r.jsxs)("div",{className:"navbar-menu",ref:u,children:[(0,r.jsxs)("div",{className:"navbar-start",children:[(0,r.jsx)(a.default,{href:"/products",children:(0,r.jsx)("a",{className:"navbar-item",children:"Products"})}),(0,r.jsx)(a.default,{href:"/stores",children:(0,r.jsx)("a",{className:"navbar-item",children:"Stores"})})]}),(0,r.jsx)("div",{className:"navbar-end",children:d?(0,r.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[(0,r.jsx)("a",{className:"navbar-link",children:(0,r.jsx)("span",{className:"icon",children:(0,r.jsx)("i",{className:"fas fa-user-circle is-medium"})})}),(0,r.jsxs)("div",{className:"navbar-dropdown is-right",children:[(0,r.jsx)(a.default,{href:"/cart",children:(0,r.jsx)("a",{className:"navbar-item",children:"Cart"})}),(0,r.jsx)(a.default,{href:"/my-orders",children:(0,r.jsx)("a",{className:"navbar-item",children:"My Orders"})}),(0,r.jsx)(a.default,{href:"/payments",children:(0,r.jsx)("a",{className:"navbar-item",children:"Payment Methods"})}),(0,r.jsx)(a.default,{href:"/profile",children:(0,r.jsx)("a",{className:"navbar-item",children:"Profile"})}),c.store?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{href:"/stores/".concat(c.store.id),children:(0,r.jsx)("a",{className:"navbar-item",children:"View Your Store"})}),(0,r.jsx)(a.default,{href:"/products/new",children:(0,r.jsx)("a",{className:"navbar-item",children:"Add a new Product"})})]}):(0,r.jsx)(a.default,{href:"/stores/new",children:(0,r.jsx)("a",{className:"navbar-item",children:"Interested in selling?"})}),(0,r.jsx)("hr",{className:"navbar-divider"}),(0,r.jsx)("a",{className:"navbar-item",onClick:function(){localStorage.removeItem("token"),t(""),v.push("/login")},children:"Log out"})]})]}):(0,r.jsx)("div",{className:"navbar-item",children:(0,r.jsxs)("div",{className:"buttons",children:[(0,r.jsx)(a.default,{href:"/register",children:(0,r.jsx)("a",{className:"button is-primary",children:(0,r.jsx)("strong",{children:"Sign up"})})}),(0,r.jsx)(a.default,{href:"/login",children:(0,r.jsx)("a",{className:"button is-light",children:"Log in"})})]})})})]})]})}},706:function(e,n,t){"use strict";t.d(n,{p:function(){return o}});var r=t(5893),a=t(1664);function o(e){var n=e.store,t=e.width,o=void 0===t?"is-half":t;return(0,r.jsx)("div",{className:"column ".concat(o),children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("header",{className:"card-header",children:(0,r.jsx)("p",{className:"card-header-title",children:n.name})}),(0,r.jsxs)("div",{className:"card-content",children:[(0,r.jsxs)("p",{className:"content",children:["Owner: ",n.seller.first_name," ",n.seller.last_name]}),(0,r.jsx)("div",{className:"content",children:n.description})]}),(0,r.jsx)("footer",{className:"card-footer",children:(0,r.jsx)(a.default,{href:"stores/".concat(n.id),children:(0,r.jsx)("a",{className:"card-footer-item",children:"View Store"})})})]})})}},7569:function(e,n,t){"use strict";t.d(n,{O:function(){return f},b:function(){return d}});var r=t(5666),a=t.n(r),o=t(5893),i=t(7294),s=t(4799),c=t(1163);function l(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,a)}var u=(0,i.createContext)();function f(e){var n=e.children,t=(0,i.useState)({}),r=t[0],f=t[1],d=(0,i.useState)(""),h=d[0],v=d[1],m=(0,c.useRouter)();return(0,i.useEffect)((function(){v(localStorage.getItem("token"))}),[]),(0,i.useEffect)((function(){var e,n=(e=a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.et)();case 2:(n=e.sent)&&f(n);case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){l(o,r,a,i,s,"next",e)}function s(e){l(o,r,a,i,s,"throw",e)}i(void 0)}))});h?(localStorage.setItem("token",h),["/login","/register"].includes(m.pathname)||n()):f({})}),[h,m.pathname]),(0,o.jsx)(u.Provider,{value:{profile:r,token:h,setToken:v,setProfile:f},children:n})}function d(){return(0,i.useContext)(u)}},4799:function(e,n,t){"use strict";t.d(n,{x4:function(){return a},z2:function(){return o},et:function(){return i}});var r=t(8519);function a(e){return(0,r.D)("login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}function o(e){return(0,r.D)("register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}function i(){return(0,r.D)("profile",{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}})}},8519:function(e,n,t){"use strict";t.d(n,{D:function(){return s},G:function(){return c}});var r="https://goldfish-app-2wpc5.ondigitalocean.app",a=function(e){if(!e.ok)throw Error(e.status);return e},o=function(e){if(200!==e.status)throw Error(e.status);return e.json()},i=function(e){if("401"===e.message&&(window.location.href="/login"),"404"===e.message)throw Error(e.message)},s=function(e,n){return fetch("".concat(r,"/").concat(e),n).then(o).catch(i)},c=function(e,n){return fetch("".concat(r,"/").concat(e),n).then(a).catch(i)}},5959:function(e,n,t){"use strict";t.d(n,{r8:function(){return a},ce:function(){return o},QL:function(){return i},xW:function(){return s},Rw:function(){return c},Xl:function(){return l}});var r=t(8519);function a(){return(0,r.D)("stores",{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}})}function o(e){return(0,r.D)("stores/".concat(e),{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}})}function i(e){return(0,r.D)("stores",{method:"POST",headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"},body:JSON.stringify(e)})}function s(e){return(0,r.G)("stores/".concat(e.id),{method:"PUT",headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"},body:JSON.stringify(e)})}function c(e){return(0,r.G)("stores/".concat(e,"/favorite"),{method:"POST",headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"}})}function l(e){return(0,r.G)("stores/".concat(e,"/unfavorite"),{method:"DELETE",headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/json"}})}},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},i=t(6273),s=t(387),c=t(7190);var l={};function u(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=s.useRouter(),f=o.default.useMemo((function(){var n=r(i.resolveHref(a,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?i.resolveHref(a,e.as):o||t}}),[a,e.href,e.as]),d=f.href,h=f.as,v=e.children,m=e.replace,p=e.shallow,x=e.scroll,g=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var j=(n=o.default.Children.only(v))&&"object"===typeof n&&n.ref,b=r(c.useIntersection({rootMargin:"200px"}),2),y=b[0],N=b[1],w=o.default.useCallback((function(e){y(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,y]);o.default.useEffect((function(){var e=N&&t&&i.isLocalURL(d),n="undefined"!==typeof g?g:a&&a.locale,r=l[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(a,d,h,{locale:n})}),[h,d,N,g,t,a]);var k={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:c,scroll:s}))}(e,a,d,h,m,p,x,g)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var S="undefined"!==typeof g?g:a&&a.locale,E=a&&a.isLocaleDomain&&i.getDomainLocale(h,S,a&&a.locales,a&&a.domainLocales);k.href=E||i.addBasePath(i.addLocale(h,S,a&&a.defaultLocale))}return o.default.cloneElement(n,k)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,c=a.useRef(),l=r(a.useState(!1),2),u=l[0],f=l[1],d=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||u||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,i=r.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,u]);return a.useEffect((function(){if(!i&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=t(7294),o=t(9311),i="undefined"!==typeof IntersectionObserver;var s=new Map},5468:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),a=t(7294),o=t(2469),i=t(1127),s=t(706),c=t(5959);function l(){var e=(0,a.useState)([]),n=e[0],t=e[1];return(0,a.useEffect)((function(){(0,c.r8)().then((function(e){e&&t(e)}))}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"title",children:"Stores"}),(0,r.jsx)("div",{className:"columns is-multiline",children:n.map((function(e){return(0,r.jsx)(s.p,{store:e},e.id)}))})]})}l.getLayout=function(e){return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(i.Z,{}),e]})}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[774,888,179],(function(){return n=2276,e(e.s=n);var n}));var n=e.O();_N_E=n}]);