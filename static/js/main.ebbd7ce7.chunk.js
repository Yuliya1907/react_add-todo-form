(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),s=a(7),c=a(6),o=a(1),l=a(9),d=a.n(l),u=a(0),m=function(e){var t=e.user;return Object(u.jsx)("a",{href:"mailto:".concat(t.email),className:"UserInfo",children:t.name})},j=function(e){var t=e.todo,a=t.id,n=t.completed,i=t.title,r=t.user;return Object(u.jsxs)("article",{"data-id":a,className:d()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:i}),r&&Object(u.jsx)(m,{user:r})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=(a(15),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),O=function(e){return h.find((function(t){return t.id===e}))||null},f=function(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(c.a)(t))+1},p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:O(e.userId)})})),x=function(){var e=Object(o.useState)(p),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(r.a)(i,2),l=s[0],d=s[1],m=Object(o.useState)(0),j=Object(r.a)(m,2),x=j[0],v=j[1],y=Object(o.useState)(!1),I=Object(r.a)(y,2),S=I[0],N=I[1],g=Object(o.useState)(!1),C=Object(r.a)(g,2),_=C[0],k=C[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),l||N(!0),x||k(!0),l&&x){var t={id:f(a),title:l,userId:x,completed:!1,user:O(x)};n((function(e){return[].concat(Object(c.a)(e),[t])})),d(""),v(0)}},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"textId",children:"Title:"}),Object(u.jsx)("input",{type:"text",id:"textId","data-cy":"titleInput",name:"Enter a title",placeholder:"Enter a title",value:l,onChange:function(e){N(!1),d(e.target.value)}}),S&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"usertId",children:"User:"}),Object(u.jsxs)("select",{"data-cy":"userSelect",id:"usertId",name:"user",value:x,onChange:function(e){k(!1),v(Number(e.target.value))},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),_&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(b,{todos:a})]})};i.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ebbd7ce7.chunk.js.map