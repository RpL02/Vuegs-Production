webpackJsonp([1],{"+i/H":function(t,e){},"1/oy":function(t,e){},"1uuo":function(t,e){},BfiB:function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("b-navbar",{attrs:{type:"dark",variant:"primary",toggleable:""}},[e("b-navbar-toggle",{attrs:{target:"nav_dropdown_collapse"}}),this._v(" "),e("b-collapse",{attrs:{"is-nav":"",id:"nav_dropdown_collapse"}},[e("b-navbar-nav",[e("b-link",{staticClass:"nav-link",attrs:{to:"/"}},[this._v("Bugs")]),this._v(" "),e("b-link",{staticClass:"nav-link",attrs:{to:"new"}},[this._v("NewBug")])],1)],1)],1),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},r,!1,function(t){a("l7sa")},null,null).exports,o=a("wmKo"),i=a.n(o),l=a("/ocq"),c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){a("1uuo")},"data-v-d8ec41bc",null).exports;var u=a("O4tu"),p=(a("Wk+B"),a("D8I6"),u.firebase.initializeApp({apiKey:"AIzaSyBKbH-4MPmY9MQcJEGOXmqN41ytqjCPBBI",authDomain:"tutoriales-e4830.firebaseapp.com",databaseURL:"https://tutoriales-e4830.firebaseio.com",projectId:"tutoriales-e4830",storageBucket:"tutoriales-e4830.appspot.com",messagingSenderId:"862321590019"})),v=p.firestore(),d=p.storage();v.settings({timestampsInSnapshots:!0});var _=v,g={name:"view-bug",data:function(){return{os:null,type:null,shortDescription:null,longDescription:null,priority:null,stepsToProduce:null,reproRate:null,variant:null,ticketId:null,bugImage:null}},beforeRouteEnter:function(t,e,a){_.collection("Bugs").where("ticketId","==",t.params.bug_id).get().then(function(t){t.forEach(function(t){a(function(e){e.os=t.data().os,e.type=t.data().type,e.variant=t.data().variant,e.shortDescription=t.data().shortDescription,e.longDescription=t.data().longDescription,e.priority=t.data().priority,e.stepsToProduce=t.data().stepToProduce,e.reproRate=t.data().reproRate,e.bugImage=t.data().bugImage,e.ticketId=t.data().ticketId})})})},methods:{updateBugStatus:function(t){var e=this;_.collection("Bugs").where("ticketId","==",this.$route.params.bug_id).get().then(function(a){a.forEach(function(a){a.ref.update({variant:t}).then(function(){e.$router.push("/")})})})}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container center space-top"},[a("h1",[t._v("MakerQuest")]),t._v(" "),"danger"==t.variant?a("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"},on:{click:function(e){t.updateBugStatus("success")}}},[t._v("\n\t\tFixedUp\n\t")]):t._e(),t._v(" "),"danger"==t.variant?a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.updateBugStatus("secondary")}}},[t._v("\n\t\tWait\n\t")]):t._e(),t._v(" "),"secondary"==t.variant?a("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:function(e){t.updateBugStatus("danger")}}},[t._v("\n\t\tBug\n\t")]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 elements-space"},[a("p",[a("strong",[t._v("OS: ")]),t._v(t._s(t.os))])]),t._v(" "),a("div",{staticClass:"col-4 elements-space"},[a("p",[a("strong",[t._v("Titulo")]),a("br"),t._v(t._s(t.shortDescription))])]),t._v(" "),a("div",{staticClass:"col-4 elements-space"},[a("p",[a("strong",[t._v("Bug: ")]),t._v(t._s(t.type))])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 elements-space"},[a("p",[a("strong",[t._v("Descripción")]),a("br"),t._v(t._s(t.longDescription))])]),t._v(" "),a("div",{staticClass:"col-6 elements-space"},[a("p",[a("strong",[t._v("Pasos para reproducir")]),a("br"),t._v(t._s(t.stepsToProduce))])]),t._v(" "),a("div",{staticClass:"col-6 elements-space"},[a("p",[a("strong",[t._v("Prioridad: ")]),t._v(t._s(t.priority))])]),t._v(" "),a("div",{staticClass:"col-6 elements-space"},[a("p",[a("strong",[t._v("ReproRate: ")]),t._v(t._s(t.reproRate))])]),t._v(" "),a("div",{staticClass:"col-6 elements-space center mx-auto"},[a("p",[a("strong",[t._v("Ticket: ")]),t._v(t._s(t.ticketId))])]),t._v(" "),a("div",{staticClass:"col-12"},[a("img",{attrs:{src:t.bugImage,alt:"blank_",width:"400px"}})])])])},staticRenderFns:[]};var f=a("VU/8")(g,m,!1,function(t){a("dM3g")},null,null).exports,h={name:"Bugs",data:function(){return{bugs:[],loading:!1,search:""}},firestore:function(){return{bugs:_.collection("Bugs").orderBy("variant")}},computed:{filteredBugs:function(){var t=this;return this.bugs.filter(function(e){return e.ticketId.match(t.search)||e.type.match(t.search)||e.shortDescription.match(t.search)})}},methods:{getBugStatusNumber:function(t){return this.bugs.filter(function(e){return e.variant==t}).length},updateBugStatus:function(t,e){_.collection("Bugs").where("ticketId","==",e).get().then(function(e){e.forEach(function(e){e.ref.update({variant:t}).then(function(){})})})}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container space-top"},[a("div",{staticClass:"form-inline"},[a("p",{staticClass:"left-space"},[a("strong",[t._v("Bugs: ")]),t._v(t._s(t.bugs.length)+" ")]),t._v(" "),a("p",{staticClass:"left-space"},[a("strong",[t._v("Asignados: ")]),t._v(t._s(t.getBugStatusNumber("info"))+" ")]),t._v(" "),a("p",{staticClass:"left-space"},[a("strong",[t._v("Corregidos: ")]),t._v(t._s(t.getBugStatusNumber("success"))+" ")]),t._v(" "),a("p",{staticClass:"left-space"},[a("strong",[t._v("Espera: ")]),t._v(t._s(t.getBugStatusNumber("secondary"))+" ")])]),t._v(" "),a("b-form-input",{attrs:{placeholder:"Search Bug: Type or TicketId"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),a("br"),t._v(" "),t._l(t.filteredBugs,function(e){return a("b-card-group",{key:e.ticketId,staticClass:"mb-3",attrs:{deck:"",bug:e}},[a("b-card",{staticClass:"text-center",attrs:{"bg-variant":e.variant,"text-variant":"white"}},[a("p",{staticClass:"card-text"},[a("strong",[t._v(t._s(e.shortDescription))])]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(e.longDescription))]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("p",[a("strong",[t._v("Prioridad: ")]),t._v(t._s(e.priority))])]),t._v(" "),a("div",{staticClass:"col"},[a("p",[a("strong",[t._v("Tipo: ")]),t._v(t._s(e.type))])]),t._v(" "),a("div",{staticClass:"col"},[a("p",[a("strong",[t._v("Ticket: ")]),t._v(t._s(e.ticketId))])])]),t._v(" "),a("router-link",{staticClass:"btn btn btn-outline-light btn-sm",attrs:{to:{name:"view-bug",params:{bug_id:e.ticketId}}}},[t._v("\n\t        \tRevisar\n\t        ")]),t._v(" "),a("button",{staticClass:"btn btn btn-outline-light btn-sm",attrs:{type:"button"},on:{click:function(a){t.updateBugStatus("success",e.ticketId)}}},[t._v("\n                Fixedup\n            ")]),t._v(" "),a("button",{staticClass:"btn btn btn-outline-light btn-sm",attrs:{type:"button"},on:{click:function(a){t.updateBugStatus("secondary",e.ticketId)}}},[t._v("\n            Wait\n            ")]),t._v(" "),a("button",{staticClass:"btn btn btn-outline-light btn-sm",attrs:{type:"button"},on:{click:function(a){t.updateBugStatus("info",e.ticketId)}}},[t._v("\n                Assigned\n            ")])],1)],1)})],2)},staticRenderFns:[]};var y=a("VU/8")(h,b,!1,function(t){a("+i/H")},null,null).exports,C={name:"FormBug",data:function(){return{value:0,os:null,type:null,priority:null,shortDescription:null,longDescription:null,stepsToProduce:null,reproRate:null,bugImage:null,imageUrl:"https://firebasestorage.googleapis.com/v0/b/kiteeducation-179216.appspot.com/o/bugs%2Fempty.png?alt=media&token=1c6d019d-232b-42da-98ea-98f7ec6bc9f5"}},methods:{handleFileUpload:function(){this.file=this.$refs.file.files[0];var t=d.ref("bugs/"+this.file.name).put(this.file),e=this;t.on("state_changed",function(t){e.value=t.bytesTransferred/t.totalBytes*100},function(t){},function(){t.snapshot.ref.getDownloadURL().then(function(t){e.imageUrl=t})})},saveBug:function(){_.collection("Bugs").add({os:this.os,type:this.type,shortDescription:this.shortDescription,bugImage:this.imageUrl,longDescription:this.longDescription,priority:this.priority,stepToProduce:this.stepsToProduce,reproRate:this.reproRate,variant:"danger",ticketId:Math.random().toString(36).substring(2,6)+Math.random().toString(36).substring(2,6)}),this.$router.push("/")}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container space-top"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.saveBug(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"shortDescription"}},[t._v("Titulo")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.shortDescription,expression:"shortDescription"}],staticClass:"form-control",attrs:{required:"true",type:"text",id:"shortDescription",placeholder:"Ingresa el nombre para tu bug"},domProps:{value:t.shortDescription},on:{input:function(e){e.target.composing||(t.shortDescription=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"os"}},[t._v("SistemaOperativo")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.os,expression:"os"}],staticClass:"form-control",attrs:{id:"os"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.os=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Android"}},[t._v("Android")]),t._v(" "),a("option",{attrs:{value:"iOS"}},[t._v("iOS")]),t._v(" "),a("option",{attrs:{value:"Editor"}},[t._v("Editor")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"type"}},[t._v("Tipo de Bug")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control",attrs:{required:"true",id:"type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.type=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Texto"}},[t._v("Texto")]),t._v(" "),a("option",{attrs:{value:"Grafico"}},[t._v("Grafico")]),t._v(" "),a("option",{attrs:{value:"Funcional"}},[t._v("Funcional")]),t._v(" "),a("option",{attrs:{value:"Gameplay"}},[t._v("Gameplay")])])]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"longDescription"}},[t._v("Descripcion")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.longDescription,expression:"longDescription"}],staticClass:"form-control",attrs:{id:"longDescription",rows:"3",placeholder:"Ingresa una descripción del bug"},domProps:{value:t.longDescription},on:{input:function(e){e.target.composing||(t.longDescription=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"priority"}},[t._v("Prioridad")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.priority,expression:"priority"}],staticClass:"form-control",attrs:{id:"priority"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.priority=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Minor"}},[t._v("Minor")]),t._v(" "),a("option",{attrs:{value:"Mayor"}},[t._v("Mayor")]),t._v(" "),a("option",{attrs:{value:"Critical"}},[t._v("Critical")]),t._v(" "),a("option",{attrs:{value:"Blocker"}},[t._v("Blocker")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"stepsToProduce"}},[t._v("Pasos para reproducir")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.stepsToProduce,expression:"stepsToProduce"}],staticClass:"form-control",attrs:{type:"text",id:"stepsToProduce",placeholder:"Ingresa los pasos para reproducir el bug"},domProps:{value:t.stepsToProduce},on:{input:function(e){e.target.composing||(t.stepsToProduce=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"reproRate"}},[t._v("ReproRate")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.reproRate,expression:"reproRate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"1/10",id:"reproRate"},domProps:{value:t.reproRate},on:{input:function(e){e.target.composing||(t.reproRate=e.target.value)}}})]),t._v(" "),a("div",[a("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(e){t.handleFileUpload()}}})]),t._v(" "),a("div",[a("b-progress",{staticClass:"mb-2",attrs:{value:t.value,variant:"success","show-progress":"",striped:"",animated:!0}})],1),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Enviar")])])])},staticRenderFns:[]};var B=a("VU/8")(C,k,!1,function(t){a("BfiB")},null,null).exports,w=a("e6fC");s.a.use(l.a),s.a.use(w.a);var D=new l.a({routes:[{path:"/",name:"Bugs",component:y},{path:"/new",name:"BugForm",component:B},{path:"/:bug_id",name:"view-bug",component:f}]});s.a.config.productionTip=!1,s.a.use(i.a),new s.a({el:"#app",router:D,components:{App:n},template:"<App/>"})},dM3g:function(t,e){},l7sa:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.58b33ae3cf677500258a.js.map