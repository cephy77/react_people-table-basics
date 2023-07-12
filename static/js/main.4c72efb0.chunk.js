(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c(5),a=c(2),r=(c(18),c(19),c(20),c(6)),j=c.n(r),i=c(0),l=function(e){var t=e.to,c=e.title;return Object(i.jsx)(s.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:c})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(l,{to:"/",title:"Home"}),Object(i.jsx)(l,{to:"people",title:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(a.b,{})})})]})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=c(4),h=c(1),x=(c(22),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var u=function(e){var t=e.slug,c=e.sex,n=e.title;return Object(i.jsx)(s.b,{className:j()({"has-text-danger":"f"===c}),to:"/people/".concat(t),children:n})},p=function(e){var t=e.persons,c=Object(a.i)().slug;return t?Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var n=e.name,s=e.sex,a=e.born,r=e.died,l=e.motherName,o=e.fatherName,b=function(e){var c=t.find((function(t){return t.name===e}));return c?Object(i.jsx)(u,{slug:c.slug,sex:c.sex,title:c.name}):e};return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(u,{slug:e.slug,sex:s,title:n})}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:b(l||"-")}),Object(i.jsx)("td",{children:b(o||"-")})]},e.slug)}))})]}):Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:null===t?"":"There are no people on the server"})},m=function(){var e=Object(h.useState)(null),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(h.useState)(!1),a=Object(d.a)(s,2),r=a[0],j=a[1],l=Object(h.useState)(!1),o=Object(d.a)(l,2),b=o[0],u=o[1];return Object(h.useEffect)((function(){j(!0),O().then(n).catch((function(){return u(!0)})).finally((function(){return j(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[r&&Object(i.jsx)(x,{}),b?Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):Object(i.jsx)(p,{persons:c})]})})]})},f=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(s.a,{children:Object(i.jsx)(a.e,{children:Object(i.jsxs)(a.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(b,{})}),Object(i.jsx)(a.c,{path:"home",element:Object(i.jsx)(a.a,{to:"/",replace:!0})}),Object(i.jsx)(a.c,{path:"people",element:Object(i.jsx)(m,{})}),Object(i.jsx)(a.c,{path:"people/:slug",element:Object(i.jsx)(m,{})}),Object(i.jsx)(a.c,{path:"*",element:Object(i.jsx)(f,{})})]})})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.4c72efb0.chunk.js.map