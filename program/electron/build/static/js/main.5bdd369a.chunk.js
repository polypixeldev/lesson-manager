(this.webpackJsonpprogram=this.webpackJsonpprogram||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(22),s=n.n(c),a=(n(28),n(2)),j=n(3),r=n(5),b=n(4),d=(n(29),n(6)),l=n(7),o=(n(9),n(0)),O=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsxs)("h2",{id:"Title",children:[this.props.type," Activity: "]}),Object(o.jsxs)("form",{id:"newStandard",children:[Object(o.jsx)("label",{for:"name",id:"name-label",children:"Activity Name:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"name",name:"name"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"id",id:"id-label",children:"Activity ID:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"id",name:"id"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"notes",id:"notes-label",children:"Activity Notes"}),Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{name:"notes",id:"notes"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",id:"submit"})]})]})}}]),n}(i.Component),h=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h2",{id:"Title",children:"Edit Activity: "}),Object(o.jsxs)("form",{id:"newStandard",children:[Object(o.jsx)("label",{for:"choose-activity",id:"choose-activity-label",children:"Choose an activity:"}),Object(o.jsx)("br",{}),Object(o.jsx)("select",{name:"choose-activity",id:"choose-activity"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"name",id:"name-label",children:"Activity Name:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"name",name:"name"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"id",id:"id-label",children:"Activity ID:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"id",name:"id"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"notes",id:"notes-label",children:"Activity Notes"}),Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{name:"notes",id:"notes"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",id:"submit"})]})]})}}]),n}(i.Component),u=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h2",{children:"Delete Activity:"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{for:"select-activity",id:"select-activity-label",children:"Select Activity:"}),Object(o.jsx)("br",{}),Object(o.jsx)("select",{id:"select-activity",name:"select-activity"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("label",{for:"delete-submit",id:"delete-submit-label",children:["Are you sure you want to delete this activity? It will be removed from it's associated unit - ",Object(o.jsx)("strong",{children:"this action is not reversible."})]}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",id:"delete-submit",name:"delete-submit"})]})]})}}]),n}(i.Component),x=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsxs)("nav",{id:"sub-nav",children:[Object(o.jsx)(d.c,{className:"sub-nav-link",to:"/activities/new",children:"New Activity"}),Object(o.jsx)(d.c,{className:"sub-nav-link",to:"/activities/list",children:"Activity List"}),Object(o.jsx)(d.c,{className:"sub-nav-link",to:"/activities/edit",children:"Edit Activity"}),Object(o.jsx)(d.c,{className:"sub-nav-link",to:"/activities/delete",children:"Delete Activity"})]}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/activities/new",component:O}),Object(o.jsx)(l.a,{path:"/activities/edit",component:h}),Object(o.jsx)(l.a,{path:"/activities/delete",component:u}),Object(o.jsxs)(l.a,{path:"/activities/list",children:[Object(o.jsx)("h2",{children:"Activity List"}),Object(o.jsx)("ul",{})]})]})]})}}]),n}(i.Component),m=n(16),p=n(13),v=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={desc:null,id:null},i.handleChange=i.handleChange.bind(Object(p.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(p.a)(i)),i}return Object(j.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.value,i=t.name;console.log(n),this.setState(Object(m.a)({},i,n))}},{key:"handleSubmit",value:function(e){console.log(this.state.desc),window.api.send("new-standard",[this.state.id,this.state.desc]),this.setState({desc:"",id:""}),e.preventDefault()}},{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h2",{id:"Title",children:"New Standard: "}),Object(o.jsxs)("form",{id:"newStandard",onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{for:"desc",id:"desc-label",children:"Standard Description:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"desc",name:"desc",value:this.state.desc,onChange:this.handleChange}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"id",id:"id-label",children:"Standard ID:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"id",name:"id",value:this.state.id,onChange:this.handleChange}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",id:"submit"})]})]})}}]),n}(i.Component),f=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={desc:null,id:null,selected:null},i.handleSubmit=i.handleSubmit.bind(Object(p.a)(i)),i.handleChange=i.handleChange.bind(Object(p.a)(i)),i}return Object(j.a)(n,[{key:"getStandards",value:function(){return Object.entries(this.props.dataObj[0]).map((function(e,t){return Object(o.jsx)("option",{value:e[0],children:e[0]})}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.value,i=t.name;console.log(n),this.setState(Object(m.a)({},i,n))}},{key:"handleSubmit",value:function(e){window.api.send("edit-standard",[this.state.selected,[this.state.desc,this.state.id]]),this.setState({desc:"",id:"",selected:""}),e.preventDefault()}},{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h2",{id:"Title",children:"Edit Standard: "}),Object(o.jsxs)("form",{id:"newStandard",onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{for:"choose-standard",id:"choose-standard-label",children:"Choose a standard:"}),Object(o.jsx)("br",{}),Object(o.jsx)("select",{name:"selected",id:"choose-standard",value:this.state.selected,onChange:this.handleChange,children:this.getStandards()}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"name",id:"name-label",children:"Standard Description:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"name",name:"desc",value:this.state.desc,onChange:this.handleChange}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"id",id:"id-label",children:"Standard ID:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"id",name:"id",value:this.state.id,onChange:this.handleChange}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",id:"submit"})]})]})}}]),n}(i.Component),y=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h2",{children:"Delete Standard:"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{for:"select-standard",id:"select-standard-label",children:"Select Standard:"}),Object(o.jsx)("br",{}),Object(o.jsx)("select",{id:"select-standard",name:"select-standard"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("label",{for:"delete-submit",id:"delete-submit-label",children:["Are you sure you want to delete this standrad? It will be removed from it's associated activities - ",Object(o.jsx)("strong",{children:"this action is not reversible."})]}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",id:"delete-submit",name:"delete-submit"})]})]})}}]),n}(i.Component),g=(n(36),function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:this.props.id}),Object(o.jsx)("td",{children:this.props.description})]})}}]),n}(i.Component)),k=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"list",value:function(){return Object.entries(this.props.dataObj[0]).map((function(e,t){return Object(o.jsx)(g,{id:e[0],description:e[1]})}))}},{key:"render",value:function(){return Object(o.jsxs)("main",{className:"table-responsive",children:[Object(o.jsx)("h2",{style:{marginTop:20},children:"Standard List: "}),Object(o.jsxs)("table",{className:"table table-striped table-dark table-sm",style:{marginTop:20},children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Standard ID"}),Object(o.jsx)("th",{children:"Standard Description"})]})}),Object(o.jsx)("tbody",{children:this.list()})]})]})}}]),n}(i.Component),S=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsxs)("nav",{id:"sub-nav",children:[Object(o.jsx)(d.c,{className:"sub-nav-link",to:"/standards/new",children:"New Standard"}),Object(o.jsx)(d.c,{className:"sub-nav-link",to:"/standards/list",children:"Standard List"}),Object(o.jsx)(d.c,{className:"sub-nav-link",to:"/standards/edit",children:"Edit Standard"}),Object(o.jsx)(d.c,{className:"sub-nav-link",to:"/standards/delete",children:"Delete Standard"})]}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/standards/new",component:v}),Object(o.jsx)(l.a,{path:"/standards/edit",children:Object(o.jsx)(f,{dataObj:this.props.dataObj})}),Object(o.jsx)(l.a,{path:"/standards/delete",component:y}),Object(o.jsx)(l.a,{exact:!0,path:"/standards/list",children:Object(o.jsx)(k,{dataObj:this.props.dataObj})})]})]})}}]),n}(i.Component),C=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h3",{id:"newTitle",children:"New Unit: "}),Object(o.jsxs)("form",{id:"new",children:[Object(o.jsx)("label",{for:"name",id:"name-label",children:"Unit Name:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"name",name:"name"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"id",id:"id-label",children:"Number of Weeks:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"id",name:"id"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",id:"submit"})]})]})}}]),n}(i.Component),w=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h2",{children:"Unit Report"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{for:"unit-choose",id:"unit-choose-label",children:"Choose a unit:"}),Object(o.jsx)("br",{}),Object(o.jsx)("select",{id:"unit-choose",name:"unit-choose"})]})]})}}]),n}(i.Component),N=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h2",{id:"Title",children:"Edit Unit: "}),Object(o.jsxs)("form",{id:"newStandard",children:[Object(o.jsx)("label",{for:"choose-activity",id:"choose-activity-label",children:"Choose a unit:"}),Object(o.jsx)("br",{}),Object(o.jsx)("select",{name:"choose-activity",id:"choose-activity"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"name",id:"name-label",children:"Unit Name:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"name",name:"name"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"id",id:"id-label",children:"Number of Weeks:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"id",name:"id"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",id:"submit"})]})]})}}]),n}(i.Component),A=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h2",{children:"Delete Unit:"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{for:"select-unit",id:"select-unit-label",children:"Select Unit:"}),Object(o.jsx)("br",{}),Object(o.jsx)("select",{id:"select-unit",name:"select-unit"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("label",{for:"delete-submit",id:"delete-submit-label",children:["Are you sure you want to delete this unit? All associated activities will be lost - ",Object(o.jsx)("strong",{children:"this action is not reversible."})]}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",id:"delete-submit",name:"delete-submit"})]})]})}}]),n}(i.Component),D=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsxs)("nav",{id:"sub-nav",children:[Object(o.jsx)(d.c,{className:"sub-nav-link",to:"/units/new",children:"New Unit"}),Object(o.jsx)(d.c,{className:"sub-nav-link",to:"/units/report",children:"Unit Report"}),Object(o.jsx)(d.c,{className:"sub-nav-link",to:"/units/edit",children:"Edit Unit"}),Object(o.jsx)(d.c,{className:"sub-nav-link",to:"/units/delete",children:"Delete Unit"})]}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/units/new",component:C}),Object(o.jsx)(l.a,{path:"/units/edit",component:N}),Object(o.jsx)(l.a,{path:"/units/report",component:w}),Object(o.jsx)(l.a,{path:"/units/delete",component:A}),Object(o.jsxs)(l.a,{exact:!0,path:"/units",children:[Object(o.jsx)("h2",{children:"Unit List"}),Object(o.jsx)("ul",{})]})]})]})}}]),n}(i.Component),U=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h2",{children:"Overview:"}),Object(o.jsx)("section",{id:"list"})]})}}]),n}(i.Component),L=n.p+"static/media/helpicon.827c58d3.png",T=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h2",{id:"get-started",children:"Get Started"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("p",{id:"starter-text",children:["Welcome to Lesson Manager. This easy-to-use program will help you to organize your lessons in an easy way, instead of giant spreadsheets. Start off by ",Object(o.jsx)(d.c,{to:"/standards/new",children:"creating standards"})," or ",Object(o.jsx)(d.c,{to:"/units/new",children:"creating a unit"}),". Once you've done that, it will be easy to create your activities, organize them by unit, and keep track of what standards you're covering. Happy teaching!"]})]})}}]),n}(i.Component),I=function(e){Object(r.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={dataObj:[{},{},{}]},i}return Object(j.a)(n,[{key:"componentDidMount",value:function(){console.log("h"),this.setState({dataObj:window.api.sendSync("data","")})}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("title",{children:"Lesson Manager v1.0.0"}),Object(o.jsxs)("header",{id:"main-nav",children:[Object(o.jsxs)(d.b,{to:"/",id:"title",children:[Object(o.jsx)("h1",{children:"Lesson Manager"}),Object(o.jsx)("p",{id:"v",children:"v1.0.0"})]}),Object(o.jsxs)("nav",{children:[Object(o.jsx)(d.c,{className:"navlink",to:"/standards/list",children:"Standards"}),Object(o.jsx)(d.c,{className:"navlink",to:"/activities/list",children:"Activities"}),Object(o.jsx)(d.c,{className:"navlink",to:"/units/report",children:"Units"}),Object(o.jsx)(d.c,{className:"navlink",to:"/help",children:Object(o.jsx)("img",{id:"helpicon",alt:"",src:L})})]})]}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/standards",children:Object(o.jsx)(S,{dataObj:this.state.dataObj})}),Object(o.jsx)(l.a,{path:"/activities",children:Object(o.jsx)(x,{dataObj:this.state.dataObj})}),Object(o.jsx)(l.a,{path:"/units",children:Object(o.jsx)(D,{dataObj:this.state.dataObj})}),Object(o.jsx)(l.a,{path:"/help",component:T}),Object(o.jsx)(l.a,{path:"/",children:Object(o.jsx)(U,{dataObj:this.state.dataObj})})]})]})}}]),n}(i.Component),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))};s.a.render(Object(o.jsxs)(d.a,{children:[Object(o.jsx)("title",{children:"Lesson Manager v1.0.0"}),Object(o.jsx)(I,{})]}),document.getElementById("root")),E()},9:function(e,t,n){}},[[37,1,2]]]);
//# sourceMappingURL=main.5bdd369a.chunk.js.map