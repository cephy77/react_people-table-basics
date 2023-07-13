(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(5),s=c(2),r=(c(18),c(19),c(20),c(6)),i=c.n(r),l=c(0),j=function(e){var t=e.to,c=e.title;return Object(l.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:c})},o=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(j,{to:"/",title:"Home"}),Object(l.jsx)(j,{to:"people",title:"People"})]})})}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(s.b,{})})})]})},b=function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})},d=c(4),h=c(1),u=(c(22),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})});function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var O=function(e){var t=e.slug,c=e.sex,n=e.title;return Object(l.jsx)(a.b,{className:i()({"has-text-danger":"f"===c}),to:"/people/".concat(t),children:n})},p=function(e,t){var c=t.find((function(t){return t.name===e}));return c?Object(l.jsx)(O,{slug:c.slug,sex:c.sex,title:c.name}):e},m=function(e){var t=e.persons,c=Object(s.i)().slug;return 0===(null===t||void 0===t?void 0:t.length)?Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}):Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:["Name","Sex","Born","Died","Mother","Father"].map((function(e){return Object(l.jsx)("th",{children:e})}))})}),Object(l.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){var n=e.name,a=e.sex,s=e.born,r=e.died,j=e.motherName,o=e.fatherName;return Object(l.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":e.slug===c}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(O,{slug:e.slug,sex:a,title:n})}),Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:s}),Object(l.jsx)("td",{children:r}),Object(l.jsx)("td",{children:p(j||"-",t)}),Object(l.jsx)("td",{children:p(o||"-",t)})]},e.slug)}))})]})},f=function(){var e=Object(h.useState)(null),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(h.useState)(!1),s=Object(d.a)(a,2),r=s[0],i=s[1],j=Object(h.useState)(!1),o=Object(d.a)(j,2),b=o[0],O=o[1];return Object(h.useEffect)((function(){i(!0),x().then(n).catch((function(e){console.error(e.message),O(!0)})).finally((function(){return i(!1)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[r&&Object(l.jsx)(u,{}),b?Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):c&&Object(l.jsx)(m,{persons:c})]})})]})},v=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(s.e,{children:Object(l.jsxs)(s.c,{path:"/",element:Object(l.jsx)(o,{}),children:[Object(l.jsx)(s.c,{index:!0,element:Object(l.jsx)(b,{})}),Object(l.jsx)(s.c,{path:"home",element:Object(l.jsx)(s.a,{to:"/",replace:!0})}),Object(l.jsx)(s.c,{path:"people",element:Object(l.jsx)(f,{})}),Object(l.jsx)(s.c,{path:"people/:slug",element:Object(l.jsx)(f,{})}),Object(l.jsx)(s.c,{path:"*",element:Object(l.jsx)(v,{})})]})})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.4dd740af.chunk.js.map