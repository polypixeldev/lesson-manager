(this.webpackJsonpprogram=this.webpackJsonpprogram||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n(22),c=n.n(s),a=(n(28),n(2)),j=n(3),r=n(13),b=n(5),d=n(4),l=(n(29),n(6)),o=n(7),O=(n(9),n(0)),h=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsxs)("h2",{id:"Title",children:[this.props.type," Activity: "]}),Object(O.jsxs)("form",{id:"newStandard",children:[Object(O.jsx)("label",{for:"name",id:"name-label",children:"Activity Name:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"name",name:"name"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{for:"id",id:"id-label",children:"Activity ID:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"id",name:"id"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{for:"notes",id:"notes-label",children:"Activity Notes"}),Object(O.jsx)("br",{}),Object(O.jsx)("textarea",{name:"notes",id:"notes"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",id:"submit"})]})]})}}]),n}(i.Component),u=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)("h2",{id:"Title",children:"Edit Activity: "}),Object(O.jsxs)("form",{id:"newStandard",children:[Object(O.jsx)("label",{for:"choose-activity",id:"choose-activity-label",children:"Choose an activity:"}),Object(O.jsx)("br",{}),Object(O.jsx)("select",{name:"choose-activity",id:"choose-activity"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{for:"name",id:"name-label",children:"Activity Name:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"name",name:"name"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{for:"id",id:"id-label",children:"Activity ID:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"id",name:"id"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{for:"notes",id:"notes-label",children:"Activity Notes"}),Object(O.jsx)("br",{}),Object(O.jsx)("textarea",{name:"notes",id:"notes"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",id:"submit"})]})]})}}]),n}(i.Component),x=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)("h2",{children:"Delete Activity:"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("label",{for:"select-activity",id:"select-activity-label",children:"Select Activity:"}),Object(O.jsx)("br",{}),Object(O.jsx)("select",{id:"select-activity",name:"select-activity"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{for:"delete-submit",id:"delete-submit-label",children:["Are you sure you want to delete this activity? It will be removed from it's associated unit - ",Object(O.jsx)("strong",{children:"this action is not reversible."})]}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",id:"delete-submit",name:"delete-submit"})]})]})}}]),n}(i.Component),p=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsxs)("nav",{id:"sub-nav",children:[Object(O.jsx)(l.c,{className:"sub-nav-link",to:"/activities/new",children:"New Activity"}),Object(O.jsx)(l.c,{className:"sub-nav-link",to:"/activities/list",children:"Activity List"}),Object(O.jsx)(l.c,{className:"sub-nav-link",to:"/activities/edit",children:"Edit Activity"}),Object(O.jsx)(l.c,{className:"sub-nav-link",to:"/activities/delete",children:"Delete Activity"})]}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/activities/new",component:h}),Object(O.jsx)(o.a,{path:"/activities/edit",component:u}),Object(O.jsx)(o.a,{path:"/activities/delete",component:x}),Object(O.jsxs)(o.a,{path:"/activities/list",children:[Object(O.jsx)("h2",{children:"Activity List"}),Object(O.jsx)("ul",{})]})]})]})}}]),n}(i.Component),m=n(16),v=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={desc:null,id:null},i.handleChange=i.handleChange.bind(Object(r.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(r.a)(i)),i}return Object(j.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.value,i=t.name;console.log(n),this.setState(Object(m.a)({},i,n))}},{key:"handleSubmit",value:function(e){console.log(this.state.desc),window.api.send("new-standard",[this.state.id,this.state.desc]),this.setState({desc:"",id:""}),e.preventDefault()}},{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)("h2",{id:"Title",children:"New Standard: "}),Object(O.jsxs)("form",{id:"newStandard",onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{for:"desc",id:"desc-label",children:"Standard Description:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"desc",name:"desc",value:this.state.desc,onChange:this.handleChange}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{for:"id",id:"id-label",children:"Standard ID:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"id",name:"id",value:this.state.id,onChange:this.handleChange}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",id:"submit"})]})]})}}]),n}(i.Component),f=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={desc:null,id:null,selected:null},i.handleSubmit=i.handleSubmit.bind(Object(r.a)(i)),i.handleChange=i.handleChange.bind(Object(r.a)(i)),i}return Object(j.a)(n,[{key:"getStandards",value:function(){return Object.entries(this.props.dataObj[0]).map((function(e,t){return Object(O.jsx)("option",{value:e[0],children:e[0]})}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.value,i=t.name;console.log(n),this.setState(Object(m.a)({},i,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),window.api.send("edit-standard",[this.state.selected,[this.state.desc,this.state.id]]),this.setState({desc:"",id:"",selected:""}),this.props.refreshData()}},{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)("h2",{id:"Title",children:"Edit Standard: "}),Object(O.jsxs)("form",{id:"newStandard",onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{for:"choose-standard",id:"choose-standard-label",children:"Choose a standard:"}),Object(O.jsx)("br",{}),Object(O.jsx)("select",{name:"selected",id:"choose-standard",value:this.state.selected,onChange:this.handleChange,children:this.getStandards()}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{for:"name",id:"name-label",children:"Standard Description:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"name",name:"desc",value:this.state.desc,onChange:this.handleChange}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{for:"id",id:"id-label",children:"Standard ID:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"id",name:"id",value:this.state.id,onChange:this.handleChange}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",id:"submit"})]})]})}}]),n}(i.Component),y=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)("h2",{children:"Delete Standard:"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("label",{for:"select-standard",id:"select-standard-label",children:"Select Standard:"}),Object(O.jsx)("br",{}),Object(O.jsx)("select",{id:"select-standard",name:"select-standard"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{for:"delete-submit",id:"delete-submit-label",children:["Are you sure you want to delete this standrad? It will be removed from it's associated activities - ",Object(O.jsx)("strong",{children:"this action is not reversible."})]}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",id:"delete-submit",name:"delete-submit"})]})]})}}]),n}(i.Component),g=(n(36),function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:this.props.id}),Object(O.jsx)("td",{children:this.props.description})]})}}]),n}(i.Component)),k=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"list",value:function(){return Object.entries(this.props.dataObj[0]).map((function(e,t){return Object(O.jsx)(g,{id:e[0],description:e[1]})}))}},{key:"render",value:function(){return Object(O.jsxs)("main",{className:"table-responsive",children:[Object(O.jsx)("h2",{style:{marginTop:20},children:"Standard List: "}),Object(O.jsxs)("table",{className:"table table-striped table-dark table-sm",style:{marginTop:20},children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Standard ID"}),Object(O.jsx)("th",{children:"Standard Description"})]})}),Object(O.jsx)("tbody",{children:this.list()})]})]})}}]),n}(i.Component),S=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsxs)("nav",{id:"sub-nav",children:[Object(O.jsx)(l.c,{className:"sub-nav-link",to:"/standards/new",children:"New Standard"}),Object(O.jsx)(l.c,{className:"sub-nav-link",to:"/standards/list",children:"Standard List"}),Object(O.jsx)(l.c,{className:"sub-nav-link",to:"/standards/edit",children:"Edit Standard"}),Object(O.jsx)(l.c,{className:"sub-nav-link",to:"/standards/delete",children:"Delete Standard"})]}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/standards/new",component:v}),Object(O.jsx)(o.a,{path:"/standards/edit",children:Object(O.jsx)(f,{dataObj:this.props.dataObj,refreshData:this.props.refreshData})}),Object(O.jsx)(o.a,{path:"/standards/delete",component:y}),Object(O.jsx)(o.a,{exact:!0,path:"/standards/list",children:Object(O.jsx)(k,{dataObj:this.props.dataObj})})]})]})}}]),n}(i.Component),C=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)("h3",{id:"newTitle",children:"New Unit: "}),Object(O.jsxs)("form",{id:"new",children:[Object(O.jsx)("label",{for:"name",id:"name-label",children:"Unit Name:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"name",name:"name"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{for:"id",id:"id-label",children:"Number of Weeks:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"id",name:"id"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",id:"submit"})]})]})}}]),n}(i.Component),w=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)("h2",{children:"Unit Report"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("label",{for:"unit-choose",id:"unit-choose-label",children:"Choose a unit:"}),Object(O.jsx)("br",{}),Object(O.jsx)("select",{id:"unit-choose",name:"unit-choose"})]})]})}}]),n}(i.Component),N=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)("h2",{id:"Title",children:"Edit Unit: "}),Object(O.jsxs)("form",{id:"newStandard",children:[Object(O.jsx)("label",{for:"choose-activity",id:"choose-activity-label",children:"Choose a unit:"}),Object(O.jsx)("br",{}),Object(O.jsx)("select",{name:"choose-activity",id:"choose-activity"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{for:"name",id:"name-label",children:"Unit Name:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"name",name:"name"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{for:"id",id:"id-label",children:"Number of Weeks:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",id:"id",name:"id"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",id:"submit"})]})]})}}]),n}(i.Component),D=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)("h2",{children:"Delete Unit:"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("label",{for:"select-unit",id:"select-unit-label",children:"Select Unit:"}),Object(O.jsx)("br",{}),Object(O.jsx)("select",{id:"select-unit",name:"select-unit"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{for:"delete-submit",id:"delete-submit-label",children:["Are you sure you want to delete this unit? All associated activities will be lost - ",Object(O.jsx)("strong",{children:"this action is not reversible."})]}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",id:"delete-submit",name:"delete-submit"})]})]})}}]),n}(i.Component),A=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsxs)("nav",{id:"sub-nav",children:[Object(O.jsx)(l.c,{className:"sub-nav-link",to:"/units/new",children:"New Unit"}),Object(O.jsx)(l.c,{className:"sub-nav-link",to:"/units/report",children:"Unit Report"}),Object(O.jsx)(l.c,{className:"sub-nav-link",to:"/units/edit",children:"Edit Unit"}),Object(O.jsx)(l.c,{className:"sub-nav-link",to:"/units/delete",children:"Delete Unit"})]}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/units/new",component:C}),Object(O.jsx)(o.a,{path:"/units/edit",component:N}),Object(O.jsx)(o.a,{path:"/units/report",component:w}),Object(O.jsx)(o.a,{path:"/units/delete",component:D}),Object(O.jsxs)(o.a,{exact:!0,path:"/units",children:[Object(O.jsx)("h2",{children:"Unit List"}),Object(O.jsx)("ul",{})]})]})]})}}]),n}(i.Component),U=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)("h2",{children:"Overview:"}),Object(O.jsx)("section",{id:"list"})]})}}]),n}(i.Component),L=n.p+"static/media/helpicon.827c58d3.png",T=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)("h2",{id:"get-started",children:"Get Started"}),Object(O.jsx)("hr",{}),Object(O.jsxs)("p",{id:"starter-text",children:["Welcome to Lesson Manager. This easy-to-use program will help you to organize your lessons in an easy way, instead of giant spreadsheets. Start off by ",Object(O.jsx)(l.c,{to:"/standards/new",children:"creating standards"})," or ",Object(O.jsx)(l.c,{to:"/units/new",children:"creating a unit"}),". Once you've done that, it will be easy to create your activities, organize them by unit, and keep track of what standards you're covering. Happy teaching!"]})]})}}]),n}(i.Component),I=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={dataObj:[{},{},{}]},i.refreshData=i.refreshData.bind(Object(r.a)(i)),i}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.refreshData()}},{key:"refreshData",value:function(){console.log("h"),this.setState({dataObj:window.api.sendSync("data","")})}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("title",{children:"Lesson Manager v1.0.0"}),Object(O.jsxs)("header",{id:"main-nav",children:[Object(O.jsxs)(l.b,{to:"/",id:"title",children:[Object(O.jsx)("h1",{children:"Lesson Manager"}),Object(O.jsx)("p",{id:"v",children:"v1.0.0"})]}),Object(O.jsxs)("nav",{children:[Object(O.jsx)(l.c,{className:"navlink",to:"/standards/list",children:"Standards"}),Object(O.jsx)(l.c,{className:"navlink",to:"/activities/list",children:"Activities"}),Object(O.jsx)(l.c,{className:"navlink",to:"/units/report",children:"Units"}),Object(O.jsx)(l.c,{className:"navlink",to:"/help",children:Object(O.jsx)("img",{id:"helpicon",alt:"",src:L})})]})]}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/standards",children:Object(O.jsx)(S,{dataObj:this.state.dataObj,refreshData:this.refreshData})}),Object(O.jsx)(o.a,{path:"/activities",children:Object(O.jsx)(p,{dataObj:this.state.dataObj})}),Object(O.jsx)(o.a,{path:"/units",children:Object(O.jsx)(A,{dataObj:this.state.dataObj})}),Object(O.jsx)(o.a,{path:"/help",component:T}),Object(O.jsx)(o.a,{path:"/",children:Object(O.jsx)(U,{dataObj:this.state.dataObj})})]})]})}}]),n}(i.Component),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};c.a.render(Object(O.jsxs)(l.a,{children:[Object(O.jsx)("title",{children:"Lesson Manager v1.0.0"}),Object(O.jsx)(I,{})]}),document.getElementById("root")),E()},9:function(e,t,n){}},[[37,1,2]]]);
//# sourceMappingURL=main.8a079578.chunk.js.map