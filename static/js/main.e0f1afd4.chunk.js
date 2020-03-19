(this.webpackJsonptodo3=this.webpackJsonptodo3||[]).push([[0],{164:function(t,e,n){},165:function(t,e,n){},166:function(t,e,n){},167:function(t,e,n){},168:function(t,e,n){},169:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=n(12),l=n(19),s=n(10),u=n(3),m=n(4),d=n(6),f=n(5),b=n(7),h=n(20),p=(n(29),n(30),function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(d.a)(this,Object(f.a)(e).call(this))).state={done:!1,important:!1},t}return Object(b.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.props,e=t.label,n="todo-list-item";return t.done&&(n+=" done"),t.important&&(n+=" important"),o.a.createElement("div",{className:n},o.a.createElement("span",{className:"todo-list-item-label",onClick:this.props.onToggleDone},e),o.a.createElement("button",{className:"button todo-delete-button btn btn-sm btn-outline-danger float-right",onClick:this.props.onDeleted},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{className:"button todo-important-button  btn btn-sm btn btn-warning float-right",onClick:this.props.onToggleImportant},o.a.createElement("i",{className:"fa fa-exclamation"})))}}]),e}(o.a.Component)),g=(n(164),function(t){var e=t.todos,n=t.filter,a=t.search,r=t.onDeleted,c=t.onToggleDone,i=t.onToggleImportant,l=e.filter((function(t){if("all"!==n){if("done"===n&&!t.done)return!1;if("active"===n&&t.done)return!1}return!(a&&!t.label.toLowerCase().includes(a))})).map((function(t){var e=t.id,n=Object(h.a)(t,["id"]);return o.a.createElement("li",{key:e,className:"list-group-item"},o.a.createElement(p,Object.assign({},n,{onDeleted:function(){return r(e)},onToggleDone:function(){return c(e)},onToggleImportant:function(){return i(e)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},l)}),v=(n(165),function(t){var e=t.done,n=t.moreToDo;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"My Todo List"),o.a.createElement("h2",null,e," done, ",n," more to do"))}),E=(n(166),function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(o)))).onButtonClick=function(t){"BUTTON"===t.target.tagName&&n.props.onButtonClick(t.target.innerHTML.toLowerCase())},n}return Object(b.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t="btn ";"all"===this.props.filter?t+="btn-info":t+="btn-outline-secondary";var e="btn ";"active"===this.props.filter?e+="btn-info":e+="btn-outline-secondary";var n="btn ";return"done"===this.props.filter?n+="btn-info":n+="btn-outline-secondary",o.a.createElement("div",{onClick:this.onButtonClick,className:"btn-group"},o.a.createElement("button",{type:"button",className:t},"All"),o.a.createElement("button",{type:"button",className:e},"Active"),o.a.createElement("button",{type:"button",className:n},"Done"))}}]),e}(a.Component)),O=function(t){return o.a.createElement("div",{className:"search-panel d-flex"},o.a.createElement("input",{onChange:t.onSearchChange,className:"form-control search-input",placeholder:"search todos..."}),o.a.createElement(E,{filter:t.filter,onButtonClick:t.onButtonClick}))},j=(n(167),function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(o)))).state={label:""},n.onLabelChange=function(t){n.setState({label:t.target.value})},n.onSubmit=function(t){t.preventDefault(),n.props.onAddItem(n.state.label),n.setState({label:""})},n}return Object(b.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{className:"add-item d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{className:"form-control add-item__input",id:"add-input",onChange:this.onLabelChange,placeholder:"new todo",value:this.state.label}),o.a.createElement("button",{className:"add-item__button btn btn-sm btn-outline-primary float-right"},o.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})))}}]),e}(o.a.Component)),C=(n(168),function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(d.a)(this,Object(f.a)(e).call(this))).deleteItem=function(e){t.setState((function(t){var n=t.todoData.findIndex((function(t){return t.id===e})),a=t.todoData.slice(0,n),o=t.todoData.slice(n+1);return{todoData:[].concat(Object(s.a)(a),Object(s.a)(o))}}))},t.addItem=function(e){t.setState((function(n){return{todoData:[].concat(Object(s.a)(n.todoData),[t.createItem(e)])}}))},t.changeProperty=function(e,n){var a=t.state.todoData,o=a.findIndex((function(t){return t.id===e})),r=a[o],c=Object(l.a)({},r,Object(i.a)({},n,!r[n]));return[].concat(Object(s.a)(a.slice(0,o)),[c],Object(s.a)(a.slice(o+1)))},t.onToggleImportant=function(e){t.setState((function(n){return{todoData:t.changeProperty(e,"important")}}))},t.onToggleDone=function(e){t.setState((function(n){return{todoData:t.changeProperty(e,"done")}}))},t.onButtonClick=function(e){var n="all";"active"===e?n="active":"done"===e&&(n="done"),t.setState({filter:n})},t.onSearchChange=function(e){t.setState({search:e.target.value})},t.maxId=100,t.state={todoData:[t.createItem("Drink Coffee"),t.createItem("Learn React"),t.createItem("Create awesome app")],filter:"all",search:""},t}return Object(b.a)(e,t),Object(m.a)(e,[{key:"createItem",value:function(t){return{important:!1,id:this.maxId++,label:t,done:!1}}},{key:"render",value:function(){var t=this.state.todoData.filter((function(t){return t.done})).length,e=this.state.todoData.length-t;return o.a.createElement("div",{className:"wrapper"},o.a.createElement(v,{done:t,moreToDo:e}),o.a.createElement(O,{filter:this.state.filter,onButtonClick:this.onButtonClick,onSearchChange:this.onSearchChange}),o.a.createElement(g,{todos:this.state.todoData,filter:this.state.filter,search:this.state.search,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(j,{onAddItem:this.addItem}))}}]),e}(o.a.Component));c.a.render(o.a.createElement(C,null),document.getElementById("root"))},25:function(t,e,n){t.exports=n(169)},29:function(t,e,n){}},[[25,1,2]]]);
//# sourceMappingURL=main.e0f1afd4.chunk.js.map