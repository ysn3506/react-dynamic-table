(this.webpackJsonpenglishcentral_case=this.webpackJsonpenglishcentral_case||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),c=n.n(a),l=n(17),s=n.n(l),r=n(2),o=n(18),d=n(19),u=n(22),b=n(21),j=[{id:1,position:"OFF",x:1,y:1},{id:2,position:"OFF",x:1,y:2},{id:3,position:"OFF",x:1,y:3},{id:4,position:"OFF",x:1,y:4},{id:5,position:"OFF",x:2,y:1},{id:6,position:"OFF",x:2,y:2},{id:7,position:"OFF",x:2,y:3},{id:8,position:"OFF",x:2,y:4},{id:9,position:"OFF",x:3,y:1},{id:10,position:"OFF",x:3,y:2},{id:11,position:"OFF",x:3,y:3},{id:12,position:"OFF",x:3,y:4},{id:13,position:"OFF",x:4,y:1},{id:14,position:"OFF",x:4,y:2},{id:15,position:"OFF",x:4,y:3},{id:16,position:"OFF",x:4,y:4}],O=(n(28),n(8)),h=n(7),m=(n(29),function(e){var t=e.rank;return Object(i.jsx)("div",{className:"label",children:Object(i.jsx)("div",{className:"position",children:t})})}),x=(n(30),function(e){var t=e.id,n=e.position,a=e.handleClick;Object(h.a)(e,["id","position","handleClick"]);return Object(i.jsx)("div",{id:t,className:"".concat("ON"===n?"on":""," switch-button"),onClick:a,children:n})}),p=(n(31),function(e){var t=e.cells,n=e.labels,a=e.handleClick;return Object(i.jsxs)("div",{className:"table",children:[Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)("div",{className:"row-label",children:n.map((function(e){var t=e.rank;return Object(i.jsx)(m,{rank:t},t)}))}),Object(i.jsx)("div",{className:"button-table",children:t.map((function(e){var t=e.id,n=Object(h.a)(e,["id"]);return Object(i.jsx)(x,Object(O.a)({id:t,handleClick:a},n),t)}))})]}),Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"column-label flex",children:n.map((function(e){var t=e.rank;return Object(i.jsx)(m,{className:"column-label",rank:t},t)}))})})]})}),f=(n(32),function(e){var t=e.label,n=Object(h.a)(e,["label"]);return Object(i.jsxs)("div",{className:"group",children:[Object(i.jsx)("input",Object(O.a)({className:"form-input"},n)),t?Object(i.jsx)("label",{className:"form-input-label",children:t}):null]})}),v=(n(33),function(e){var t=e.children,n=e.buttonClick,a=Object(h.a)(e,["children","buttonClick"]);return Object(i.jsx)("button",Object(O.a)(Object(O.a)({className:"custom-button",onClick:n},a),{},{children:t}))}),g=(n(34),function(e){var t=e.handleSubmit,n=e.changeState,a=e.toggleInput,c=e.toggle;return Object(i.jsxs)("div",{className:"manual-override",children:[Object(i.jsx)("h2",{children:"Manual Override"}),Object(i.jsx)("form",{onSubmit:t,children:Object(i.jsxs)("div",{className:"inline",children:[Object(i.jsxs)("div",{className:"x-y",children:[Object(i.jsx)(f,{id:"x",name:"x",type:"number",label:"X : ",maxLength:"1",size:"4",min:"1",max:"4"}),Object(i.jsx)(f,{id:"y",name:"y",type:"number",label:"Y : ",maxLength:"1",size:"4",min:"1",max:"4"})]}),Object(i.jsxs)("div",{className:"confirm",children:[Object(i.jsxs)("div",{className:"radio",children:[Object(i.jsx)("h3",{children:"Set to:"}),Object(i.jsx)(f,{className:"radio-button",name:"on",type:"radio",label:"ON",onChange:a,checked:!c}),Object(i.jsx)(f,{className:"radio-button",name:"off",type:"radio",label:"OFF",onChange:a,checked:c})]}),Object(i.jsx)("div",{children:Object(i.jsx)(v,{type:"submit",buttonClick:n,children:"Confirm"})})]})]})})]})}),F=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).handleClick=function(e){var t=i.state.cells,n=t.filter((function(t){return t.id===parseInt(e.target.id)}));"OFF"===n[0].position?n[0].position="ON":n[0].position="OFF",i.setState({cells:t})},i.resetTable=function(){var e=i.state.cells;e.forEach((function(e){e.position="OFF"})),i.setState({cells:e})},i.handleSubmit=function(e){e.preventDefault()},i.clearInput=function(e){e.target.form[0].value="",e.target.form[1].value="",i.setState({toggle:!1})},i.changeState=function(e){if(parseInt(e.target.form[0].value)>4||parseInt(e.target.form[1].value)>4||parseInt(e.target.form[0].value)<=0||parseInt(e.target.form[1].value)<=0||""===e.target.form[0].value||""===e.target.form[1].value)alert("Please enter compatible number with table size ");else{e.preventDefault();var t=i.state.cells,n=t.filter((function(t){return t.x===parseInt(e.target.form[0].value)&&t.y===parseInt(e.target.form[1].value)}));i.state.toggle?n[0].position="OFF":n[0].position="ON",i.setState({cells:t})}i.clearInput(e)},i.toggleInput=function(e){i.setState({toggle:!i.state.toggle})},i.state={cells:j,labels:[{rank:1},{rank:2},{rank:3},{rank:4}],toggle:!1},i}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.cells,n=e.labels;return Object(i.jsxs)("div",{className:"game-table",children:[Object(i.jsxs)("div",{className:"inline",children:[Object(i.jsx)(p,{labels:n,cells:t,handleClick:this.handleClick}),Object(i.jsx)(g,{className:"manual-override",handleSubmit:this.handleSubmit,changeState:this.changeState,toggleInput:this.toggleInput,toggle:this.state.toggle})]}),Object(i.jsx)("div",{className:"inline",children:Object(i.jsx)(v,{onClick:this.resetTable,children:"Reset"})})]})}}]),n}(c.a.Component);n(35);var N=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(r.c,{children:Object(i.jsx)(r.a,{exact:!0,path:"/",component:F})})})},k=(n(41),n(13));s.a.render(Object(i.jsx)(k.a,{children:Object(i.jsx)(N,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.1f7d37b3.chunk.js.map