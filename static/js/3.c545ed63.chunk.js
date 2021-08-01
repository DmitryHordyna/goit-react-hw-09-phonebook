(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[3],{101:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return E}));var a=n(35),c=n(36),r=n(38),o=n(37),s=n(0),i=n(11),u=n(49),l=n(27),b=function(t){return t.phonebook.filter},h=function(t){return t.phonebook.items},j={getVisibleContacts:Object(l.a)([h,b],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),getFilter:b,getAllContacts:h,getLoading:function(t){return t.phonebook.loading},getTotalContactsCount:function(t){return h(t).length}},f=n(19),m=n.n(f),p=n(24),d=n(20),_=n.n(d),O=n(12),C=function(t,e){return function(n){var a={name:t,number:e};n(Object(O.b)()),_.a.post("/contacts",a).then((function(t){var e=t.data;return n(Object(O.c)(e))})).catch((function(t){return n(Object(O.a)(t.message))}))}},g=function(t){return function(e){e(Object(O.e)()),_.a.delete("/contacts/".concat(t)).then((function(){return e(Object(O.f)(t))})).catch((function(t){return e(Object(O.d)(t.message))}))}},x=function(){return function(){var t=Object(p.a)(m.a.mark((function t(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Object(O.h)()),_.a.get("/contacts").then((function(t){var n=t.data;return e(Object(O.i)(n))})).catch((function(t){return e(Object(O.g)(t.message))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=(n(94),n(1)),N=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;(0,t.props.onSubmit)(a,c),t.setState({name:a,number:c})},t.handleNameChange=function(e){var n=e.currentTarget;t.setState({name:n.value})},t.handleNumberChange=function(e){var n=e.currentTarget;t.setState({number:n.value})},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(v.jsxs)("label",{className:"label",children:["Name and Surname",Object(v.jsx)("input",{className:"input",type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleNameChange,placeholder:"\u261e Rebekka Lolita"})]}),Object(v.jsxs)("label",{className:"label",children:["Number",Object(v.jsx)("input",{className:"input",type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleNumberChange,placeholder:"+45 94 124 2434"})]}),Object(v.jsx)("button",{className:"button",children:"Add contacts"})]})}}]),n}(s.Component),k=Object(i.b)(null,(function(t){return{onSubmit:function(e,n){return t(C(e,n))}}}))(N),A=n(95),w=n.n(A),y=function(t){var e=t.total;return Object(v.jsx)("div",{children:Object(v.jsxs)("p",{className:w.a.message,children:["Hey! You had been saved : ",e," contacts. "]})})},L=Object(i.b)((function(t){return{total:j.getTotalContactsCount(t)}}))(y),S=n(96),T=n.n(S),z=function(t){var e=t.onChange,n=t.value;return Object(v.jsxs)("label",{className:T.a.label_filter,children:["Filter",Object(v.jsx)("input",{className:T.a.input_filter,value:n,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:e})]})},Z=Object(i.b)((function(t){return{value:t.phonebook.filter}}),(function(t){return{onChange:function(e){return t(O.j(e.target.value))}}}))(z),V=n(97),q=n.n(V),D=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(v.jsx)("ul",{className:q.a.contacts_list,children:e.map((function(t){var e=t.name,a=t.id,c=t.number;return Object(v.jsxs)("li",{className:q.a.contacts_item,children:[Object(v.jsx)("span",{className:q.a.span,children:"\u2606  "})," ",Object(v.jsxs)("p",{className:q.a.contacts_item_title,children:[e," : ",c]}),Object(v.jsx)("button",{className:q.a.contacts_item_button,type:"button",onClick:function(){return n(a)},children:"X"})]},a)}))})},F=Object(i.b)((function(t){return{contacts:j.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(g(e))}}}))(D),P=n(98),J=n.n(P),W=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.featchContacts()}},{key:"render",value:function(){return Object(v.jsx)(u.a,{children:Object(v.jsxs)("section",{className:J.a.Container,children:[Object(v.jsx)("h2",{className:J.a.contactsTitle,children:"Phonebook"}),Object(v.jsx)(k,{}),Object(v.jsxs)("article",{className:J.a.contactsArticle,children:[Object(v.jsx)("h2",{className:J.a.contactsTitle,children:"Contacts"}),Object(v.jsx)(L,{}),Object(v.jsx)(Z,{}),this.props.isLoading&&Object(v.jsx)("h1",{children:"Loading..."}),Object(v.jsx)(F,{})]})]})})}}]),n}(s.Component),E=Object(i.b)(null,(function(t){return{featchContacts:function(){return t(x())}}}))(W)},94:function(t,e,n){},95:function(t,e,n){t.exports={message:"Stats_message__2fa41"}},96:function(t,e,n){t.exports={label_filter:"Filter_label_filter__22WnZ",input_filter:"Filter_input_filter__cpY52"}},97:function(t,e,n){t.exports={contacts_list:"ContactsList_contacts_list__1TE1W",contacts_item:"ContactsList_contacts_item__1L2Gk",contacts_item_title:"ContactsList_contacts_item_title__Sii3C",contacts_item_button:"ContactsList_contacts_item_button__2q1-m",span:"ContactsList_span__124jI"}},98:function(t,e,n){t.exports={Container:"PhonebooksView_Container__Oztw-",contactsArticle:"PhonebooksView_contactsArticle__f6tcE",contactsTitle:"PhonebooksView_contactsTitle__3XWqx"}}}]);
//# sourceMappingURL=3.c545ed63.chunk.js.map