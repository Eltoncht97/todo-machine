(this["webpackJsonptodo-machine"]=this["webpackJsonptodo-machine"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n(4),r=n.n(c),a=(n(12),n(6)),s=n(2),l=function(e,t){var n=Object(o.useState)(!0),c=Object(s.a)(n,2),r=c[0],a=c[1],l=Object(o.useState)(!1),u=Object(s.a)(l,2),i=u[0],d=u[1],j=Object(o.useState)(t),b=Object(s.a)(j,2),O=b[0],m=b[1];Object(o.useEffect)((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),m(n),a(!1)}catch(i){d(i)}}),1e3)}));return{item:O,saveItem:function(t){try{localStorage.setItem(e,JSON.stringify(t)),m(t)}catch(i){d(i)}},loading:r,error:i}},u=n(0),i=Object(o.createContext)(),d=function(e){var t=l("TODOS_V1",[]),n=t.item,c=t.saveItem,r=t.loading,d=t.error,j=Object(o.useState)(""),b=Object(s.a)(j,2),O=b[0],m=b[1],h=Object(o.useState)(!1),f=Object(s.a)(h,2),x=f[0],p=f[1],T=n.filter((function(e){return!!e.completed})).length,v=n.length,g=[];g=!O.length>0?n:n.filter((function(e){return e.text.toLowerCase().includes(O.toLowerCase())}));return Object(u.jsx)(i.Provider,{value:{loading:r,error:d,searchValue:O,setSearchValue:m,completedTodos:T,totalTodos:v,searchedTodos:g,addTodo:function(e){var t=Object(a.a)(n);t.push({completed:!1,text:e}),c(t)},completeTodos:function(e){var t=n.findIndex((function(t){return t.text===e}));console.log(t);var o=Object(a.a)(n);o[t].completed=!0,c(o)},deleteTodos:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(a.a)(n);o.splice(t,1),c(o)},openModal:x,setOpenModal:p},children:e.children})},j=(n(14),function(e){return Object(u.jsxs)("li",{className:"TodoItem",children:[Object(u.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u221a"}),Object(u.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(u.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:"X"})]})}),b=(n(15),function(){var e=Object(o.useContext)(i),t=e.totalTodos,n=e.completedTodos;return Object(u.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOs"]})}),O=(n(16),function(e){return Object(u.jsx)("section",{children:Object(u.jsx)("ul",{children:e.children})})}),m=(n(17),function(){var e=Object(o.useContext)(i),t=e.searchValue,n=e.setSearchValue;return Object(u.jsx)("input",{type:"text",className:"TodoSearch",placeholder:"Cebolla",name:"searchValue",value:t,onChange:function(e){n(e.target.value),console.log(t)}})}),h=(n(18),function(){var e=Object(o.useContext)(i),t=e.openModal,n=e.setOpenModal;return Object(u.jsx)("button",{className:t?"CreateTodoButton CreateTodoButton-active":"CreateTodoButton",onClick:function(){n((function(e){return!e}))},children:"+"})}),f=(n(19),function(e){var t=e.children;return r.a.createPortal(Object(u.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}),x=(n(20),function(){var e=Object(o.useContext)(i),t=e.addTodo,n=e.setOpenModal,c=Object(o.useState)(""),r=Object(s.a)(c,2),a=r[0],l=r[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a),n((function(e){return!e}))},children:[Object(u.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(u.jsx)("textarea",{placeholder:"Cortar la ceebolla para el almuerzo",value:a,onChange:function(e){l(e.target.value)}}),Object(u.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(u.jsx)("button",{className:"TodoForm-button TodoForm-button-cancel",type:"button",onClick:function(){l(""),n((function(e){return!e}))},children:"Cancelar"}),Object(u.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})}),p=function(){var e=Object(o.useContext)(i),t=e.error,n=e.loading,c=e.searchedTodos,r=e.completeTodos,a=e.deleteTodos,s=e.openModal;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(m,{}),Object(u.jsxs)(O,{children:[t&&Object(u.jsx)("p",{children:"Desesperate, hubo un error..."}),n&&Object(u.jsx)("p",{children:"Estamos cargando, no te desesperes..."}),!n&&!c.length&&Object(u.jsx)("p",{children:"Crea tu primer TODO"}),c.map((function(e){return Object(u.jsx)(j,{text:e.text,completed:e.completed,onComplete:function(){return r(e.text)},onDelete:function(){return a(e.text)}},e.text)}))]}),s&&Object(u.jsx)(f,{children:Object(u.jsx)(x,{})}),Object(u.jsx)(h,{})]})};n(21);var T=function(){return Object(u.jsx)(d,{children:Object(u.jsx)(p,{})})};r.a.render(Object(u.jsx)(T,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.8dd9c1eb.chunk.js.map