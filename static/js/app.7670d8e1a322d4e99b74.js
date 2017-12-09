webpackJsonp([1],{"+skl":function(t,e){},"/fCf":function(t,e){},0:function(t,e){},"0bC1":function(t,e){},"0lre":function(t,e,s){"use strict";e.a={name:"o-header",props:["user"],data:function(){return{}},methods:{menuOnSelect:function(t){"signout"===t?this.$firebase.auth().signOut().then(function(){console.log("sign out")}).catch(function(t){console.log(t)}):this.$router.push({name:t,params:{user:this.user}})}}}},1:function(t,e){},"2rKX":function(t,e){},"3XlL":function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main-content"},[s("h1",[t._v("书单")]),t._v(" "),s("div",{staticStyle:{"text-align":"right",margin:"20px 0"}},[s("Button",{attrs:{type:"success"},on:{click:t.add}},[t._v("新增")])],1),t._v(" "),s("Table",{attrs:{columns:t.columns,data:t.list}}),t._v(" "),s("Modal",{attrs:{title:t.modalTitle,footerHide:!0},model:{value:t.shouldShowModal,callback:function(e){t.shouldShowModal=e},expression:"shouldShowModal"}},[s("Form",{attrs:{model:t.form,"label-width":80}},[s("FormItem",{attrs:{label:"书名"}},[s("Input",{attrs:{placeholder:"请输入书名"},model:{value:t.form.title,callback:function(e){t.form.title=e},expression:"form.title"}})],1),t._v(" "),s("FormItem",{attrs:{label:"作者"}},[s("Input",{attrs:{placeholder:"请输入作者姓名"},model:{value:t.form.author,callback:function(e){t.form.author=e},expression:"form.author"}})],1),t._v(" "),s("FormItem",{attrs:{label:"出版社"}},[s("Input",{attrs:{placeholder:"请输入出版社名称"},model:{value:t.form.publisher,callback:function(e){t.form.publisher=e},expression:"form.publisher"}})],1),t._v(" "),s("FormItem",{attrs:{label:"封面图"}},[s("Input",{attrs:{placeholder:"请输入封面图片链接"},model:{value:t.form.image,callback:function(e){t.form.image=e},expression:"form.image"}})],1),t._v(" "),s("FormItem",{attrs:{label:"描述"}},[s("Input",{attrs:{type:"textarea",placeholder:"请输入描述"},model:{value:t.form.desc,callback:function(e){t.form.desc=e},expression:"form.desc"}})],1),t._v(" "),s("FormItem",[s("Button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("保存")]),t._v(" "),s("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"}},[t._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};e.a=i},"5RNT":function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h1",[t._v("Octopus X Admin Portal")]),t._v(" "),s("Form",{ref:"form",attrs:{model:t.form,rules:t.ruleInline,inline:""}},[s("FormItem",{attrs:{prop:"email"}},[s("Input",{attrs:{type:"text",placeholder:"Email"},model:{value:t.form.email,callback:function(e){t.form.email=e},expression:"form.email"}},[s("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),t._v(" "),s("FormItem",{attrs:{prop:"password"}},[s("Input",{attrs:{type:"password",placeholder:"Password"},model:{value:t.form.password,callback:function(e){t.form.password=e},expression:"form.password"}},[s("Icon",{attrs:{slot:"prepend",type:"ios-locked-outline"},slot:"prepend"})],1)],1),t._v(" "),s("FormItem",[s("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit("form")}}},[t._v("登录")])],1)],1)],1)},staticRenderFns:[]};e.a=i},"5Xac":function(t,e,s){"use strict";var i=s("vQAX"),a=s("O8Yd"),o=s("VU/8")(i.a,a.a,function(t){s("0bC1")},"data-v-2d354b71",null);e.a=o.exports},"5XiC":function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Menu",{attrs:{mode:"horizontal",theme:"light","active-name":"1"},on:{"on-select":t.menuOnSelect}},[s("MenuItem",{attrs:{name:"ArticlesPage"}},[s("Icon",{attrs:{type:"ios-box"}}),t._v("\n    文章列表\n  ")],1),t._v(" "),s("MenuItem",{attrs:{name:"PapersPage"}},[s("Icon",{attrs:{type:"ios-box"}}),t._v("\n    试题列表\n  ")],1),t._v(" "),s("MenuItem",{attrs:{name:"BooksPage"}},[s("Icon",{attrs:{type:"ios-box"}}),t._v("\n    书单\n  ")],1),t._v(" "),s("MenuItem",{attrs:{name:"MoviesPage"}},[s("Icon",{attrs:{type:"ios-box"}}),t._v("\n    影库\n  ")],1),t._v(" "),s("MenuItem",{attrs:{name:"SpecialsPage"}},[s("Icon",{attrs:{type:"ios-box"}}),t._v("\n    特殊文章设置\n  ")],1),t._v(" "),s("MenuItem",{attrs:{name:"signout"}},[t._v("\n    "+t._s(t.user?"Sign Out":"Sign In")+"\n  ")])],1)},staticRenderFns:[]};e.a=i},"62vD":function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main-content"},[s("h1",[t._v("影库")]),t._v(" "),s("div",{staticStyle:{"text-align":"right",margin:"20px 0"}},[s("Button",{attrs:{type:"success"},on:{click:t.add}},[t._v("新增")])],1),t._v(" "),s("Table",{attrs:{columns:t.columns,data:t.list}}),t._v(" "),s("Modal",{attrs:{title:t.modalTitle,footerHide:!0},model:{value:t.shouldShowModal,callback:function(e){t.shouldShowModal=e},expression:"shouldShowModal"}},[s("Form",{attrs:{model:t.form,"label-width":80}},[s("FormItem",{attrs:{label:"片名"}},[s("Input",{attrs:{placeholder:"请输入片名"},model:{value:t.form.title,callback:function(e){t.form.title=e},expression:"form.title"}})],1),t._v(" "),s("FormItem",{attrs:{label:"导演"}},[s("Input",{attrs:{placeholder:"请输入导演姓名"},model:{value:t.form.director,callback:function(e){t.form.director=e},expression:"form.director"}})],1),t._v(" "),s("FormItem",{attrs:{label:"上映年份"}},[s("Input",{attrs:{placeholder:"请输入上映年份"},model:{value:t.form.year,callback:function(e){t.form.year=e},expression:"form.year"}})],1),t._v(" "),s("FormItem",{attrs:{label:"封面图"}},[s("Input",{attrs:{placeholder:"请输入封面图片链接"},model:{value:t.form.image,callback:function(e){t.form.image=e},expression:"form.image"}})],1),t._v(" "),s("FormItem",{attrs:{label:"描述"}},[s("Input",{attrs:{type:"textarea",placeholder:"请输入描述"},model:{value:t.form.desc,callback:function(e){t.form.desc=e},expression:"form.desc"}})],1),t._v(" "),s("FormItem",[s("Button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("保存")]),t._v(" "),s("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"}},[t._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};e.a=i},"6Ot8":function(t,e,s){"use strict";var i=s("x8rt"),a=s("3XlL"),o=s("VU/8")(i.a,a.a,function(t){s("AeFd")},"data-v-437dfeb2",null);e.a=o.exports},"6WZ6":function(t,e){},"7R4g":function(t,e,s){"use strict";var i=s("woOf"),a=s.n(i);e.a={name:"movies-page",data:function(){var t=this;return{form:{title:"",director:"",year:"",image:"",desc:"",id:""},shouldShowModal:!1,selectedIdx:null,modalTitle:"",columns:[{title:"标题",key:"title"},{title:"操作",key:"action",render:function(e,s){return e("div",[e("Button",{props:{type:"info",size:"small"},on:{click:function(){var e=t.list[s.index];t.form.title=e.title,t.form.director=e.director,t.form.year=e.year,t.form.image=e.image,t.form.desc=e.desc,t.form.id=e.id,t.modalTitle="编辑影片信息",t.selectedIdx=s.index,t.shouldShowModal=!0}}},"编辑"),e("Poptip",{props:{confirm:!0,title:"确认删除吗？","ok-text":"确认","cancel-text":"取消",width:"220"},on:{"on-ok":function(){t.$db.ref("/movies/"+t.list[s.index].id).remove(),t.list.splice(s.index,1)}}},[e("Button",{props:{type:"error",size:"small"}},"删除")])])}}],list:[]}},mounted:function(){var t=this;this.$route.params.user||this.$router.push("/"),this.$db.ref("movies").on("child_added",function(e){t.list.unshift(a()({},e.val(),{id:e.key()}))})},methods:{add:function(){this.form.title="",this.form.director="",this.form.year="",this.form.image="",this.form.desc="",this.form.id="",this.modalTitle="新增影片",this.shouldShowModal=!0},submit:function(){var t=this.form,e=t.title,s=t.director,i=t.year,a=t.image,o=t.desc,n={title:e,director:s,year:i,image:a,desc:o};t.id?(this.$db.ref("movies/"+this.form.id).update(n),this.list[this.selectedIdx].title=e,this.list[this.selectedIdx].director=s,this.list[this.selectedIdx].year=i,this.list[this.selectedIdx].image=a,this.list[this.selectedIdx].desc=o):this.$db.ref("movies").push(n),this.shouldShowModal=!1}}}},AeFd:function(t,e){},H4dq:function(t,e,s){"use strict";var i=s("woOf"),a=s.n(i),o=s("7+uW"),n=s("PJh5"),r=s.n(n),l=s("EFqf"),c=s.n(l);e.a={name:"articles-page",data:function(){var t=this;return{form:{title:"",image:"",content:"",createdAt:"",id:""},selectedIdx:null,shouldShowModal:!1,modalTitle:"",preview:"",columns:[{title:"发布时间",key:"createdAt"},{title:"标题",key:"title"},{title:"操作",key:"action",render:function(e,s){return e("div",[e("Button",{props:{type:"primary",size:"small"},on:{click:function(){t.list[s.index].isPinned?(t.$db.ref("/articles/"+t.list[s.index].id).update({isPinned:!1}),o.default.set(t.list[s.index],"isPinned",!1)):(t.$db.ref("/articles/"+t.list[s.index].id).update({isPinned:!0}),o.default.set(t.list[s.index],"isPinned",!0))}}},t.list[s.index].isPinned?"取消轮播":"设为轮播"),e("Button",{props:{type:"info",size:"small"},on:{click:function(){var e=t.list[s.index];t.form.title=e.title,t.form.image=e.image,t.form.content=e.content,t.form.id=e.id,t.selectedIdx=s.index,t.shouldShowModal=!0,t.modalTitle="编辑文章内容"}}},"编辑"),e("Poptip",{props:{confirm:!0,title:"确认删除吗？","ok-text":"确认","cancel-text":"取消",width:"220"},on:{"on-ok":function(){t.$db.ref("/articles/"+t.list[s.index].id).remove(),t.list.splice(s.index,1)}}},[e("Button",{props:{type:"error",size:"small"}},"删除")])])}}],list:[]}},computed:{content:function(){return this.form.content}},watch:{content:function(t){this.preview=c()(t)}},mounted:function(){var t=this;this.$route.params.user||this.$router.push("/"),this.$db.ref("articles").orderByChild("type").equalTo("normal").on("child_added",function(e){t.list.unshift(a()({},e.val(),{id:e.key()}))})},methods:{add:function(){this.form.title="",this.form.image="",this.form.content="",this.form.id="",this.shouldShowModal=!0,this.modalTitle="新增文章"},submit:function(){var t=this.form,e=t.title,s=t.content,i={title:e,content:s,image:t.image,type:"normal"};t.id?(this.$db.ref("articles/"+this.form.id).update(i),this.list[this.selectedIdx].title=e,this.list[this.selectedIdx].content=s):(i.createdAt=r()(new Date).format("YYYY-MM-DD hh:mm"),i.views=0,this.$db.ref("articles").push(i)),this.shouldShowModal=!1}}}},HJT2:function(t,e,s){"use strict";var i=s("5hVS"),a=s.n(i);e.a={name:"login-page",data:function(){return{form:{email:"",password:""},ruleInline:{email:[{required:!0,message:"Please enter email",trigger:"blur"}],password:[{required:!0,message:"Please enter password",trigger:"blur"},{type:"string",min:6,message:"Password should be at least 6 digits",trigger:"blur"}]}}},methods:{handleSubmit:function(){var t=this,e=this.form,s=e.email,i=e.password,o=this;this.$refs.form.validate(function(e){e?(t.$Message.success("Authorizing..."),a.a.auth().signInWithEmailAndPassword(s,i).catch(function(t){var e=t.message;o.$Message.error(e)})):t.$Message.error("Failed!")})}}}},"I+KM":function(t,e,s){"use strict";var i=s("7R4g"),a=s("62vD"),o=s("VU/8")(i.a,a.a,function(t){s("/fCf")},"data-v-76c68694",null);e.a=o.exports},M93x:function(t,e,s){"use strict";var i=s("ZWVH"),a=s("YPJp"),o=s("VU/8")(i.a,a.a,function(t){s("2rKX")},null,null);e.a=o.exports},MKvp:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h1",[t._v("特殊文章设置")]),t._v(" "),s("Form",{staticStyle:{width:"60%",margin:"0 auto"},attrs:{model:t.form,"label-width":80}},[s("FormItem",{attrs:{label:"招生简章"}},[s("Input",{attrs:{placeholder:"对应文章 id",disabled:!t.dataloaded},model:{value:t.form.enrollment,callback:function(e){t.form.enrollment=e},expression:"form.enrollment"}}),t._v(" "),s("Button",{attrs:{type:"ghost",disabled:!t.dataloaded||t.form.enrollment===t.current.enrollment},on:{click:function(e){t.update("enrollment")}}},[t._v("修改")])],1),t._v(" "),s("FormItem",{attrs:{label:"关于我们"}},[s("Input",{attrs:{placeholder:"对应文章 id",disabled:!t.dataloaded},model:{value:t.form.aboutus,callback:function(e){t.form.aboutus=e},expression:"form.aboutus"}}),t._v(" "),s("Button",{attrs:{type:"ghost",disabled:!t.dataloaded||t.form.aboutus===t.current.aboutus},on:{click:function(e){t.update("aboutus")}}},[t._v("修改")])],1)],1)],1)},staticRenderFns:[]};e.a=i},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a=s("M93x"),o=s("YaEn"),n=s("BTaQ"),r=s.n(n),l=s("5hVS"),c=s.n(l),d=s("ORbq"),u=s("Yk46"),m=s.n(u),h=s("+skl");s.n(h);i.default.use(d.a),i.default.use(m.a),i.default.use(r.a),i.default.config.productionTip=!0;var f={syncURL:"https://wd0683409965dkkmfn.wilddogio.com",authDomain:"wd0683409965dkkmfn.wilddog.com"};c.a.initializeApp(f),i.default.prototype.$db=c.a.sync(),new i.default({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}})},O8Yd:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main-content"},[s("h1",[t._v(t._s(t.pageTitle))]),t._v(" "),s("h3",[t._v(" Title ")]),t._v(" "),s("Input",{attrs:{placeholder:"Please input article title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),s("h3",[t._v(" Banner Image ")]),t._v(" "),s("Input",{attrs:{placeholder:"Please input banner image URL"},model:{value:t.imageURL,callback:function(e){t.imageURL=e},expression:"imageURL"}}),t._v(" "),s("h3",[t._v(" Abstract \n    "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.abstract.length>0,expression:"abstract.length > 0"}],staticClass:"ch-left"},[t._v(t._s(140-t.abstract.length+" characters left"))])]),t._v(" "),s("Input",{attrs:{maxlength:140,placeholder:"Please input abstract (<= 140 characters)"},model:{value:t.abstract,callback:function(e){t.abstract=e},expression:"abstract"}}),t._v(" "),s("div",{staticClass:"ckeditor"},[s("textarea",{attrs:{id:t.id},domProps:{value:t.value}})]),t._v(" "),s("Button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.publish}},[t._v("Publish")])],1)},staticRenderFns:[]};e.a=i},"TC/t":function(t,e,s){"use strict";var i=s("k1+U"),a=s("gkdV"),o=s("VU/8")(i.a,a.a,function(t){s("6WZ6"),s("lyee")},"data-v-1198c890",null);e.a=o.exports},ULHb:function(t,e){},YPJp:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("o-header",{attrs:{user:t.user}}),t._v(" "),s("router-view")],1)},staticRenderFns:[]};e.a=i},YaEn:function(t,e,s){"use strict";var i=s("7+uW"),a=s("/ocq"),o=s("idAo"),n=s("5Xac"),r=s("TC/t"),l=s("zvq/"),c=s("6Ot8"),d=s("I+KM"),u=s("lEOx");i.default.use(a.a),e.a=new a.a({routes:[{path:"/",name:"LoginPage",component:o.a},{path:"/pastpapers",name:"PapersPage",component:r.a},{path:"/articles",name:"ArticlesPage",component:l.a},{path:"/books",name:"BooksPage",component:c.a},{path:"/movies",name:"MoviesPage",component:d.a},{path:"/new-article",name:"NewArticlePage",component:n.a},{path:"/edit-article",name:"EditArticlePage",component:n.a},{path:"/specials",name:"SpecialsPage",component:u.a}]})},ZWVH:function(t,e,s){"use strict";var i=s("teIl"),a=s("5hVS"),o=s.n(a);e.a={name:"app",components:{OHeader:i.a},data:function(){return{user:null}},created:function(){var t=this,e=this;o.a.auth().onAuthStateChanged(function(s){t.user=s,s||"/"===e.$route.fullPath?e.$router.push({name:"ArticlesPage",params:{user:t.user}}):e.$router.push("/")})},methods:{signOut:function(){o.a.auth().signOut().then(function(){console.log("sign out")}).catch(function(t){console.log(t)})}}}},gkdV:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main-content"},[s("h1",[t._v("试题列表")]),t._v(" "),s("div",{staticStyle:{"text-align":"right",margin:"20px 0"}},[s("Button",{attrs:{type:"success"},on:{click:t.add}},[t._v("新增")])],1),t._v(" "),s("Table",{attrs:{columns:t.columns,data:t.list}}),t._v(" "),s("Modal",{attrs:{width:"100",styles:{top:"30px"},title:t.modalTitle,footerHide:!0},model:{value:t.shouldShowModal,callback:function(e){t.shouldShowModal=e},expression:"shouldShowModal"}},[s("div",{staticClass:"editor"},[s("Form",{staticClass:"form",attrs:{model:t.form,"label-width":80}},[s("FormItem",{attrs:{label:"标题"}},[s("Input",{attrs:{placeholder:"请输入标题"},model:{value:t.form.title,callback:function(e){t.form.title=e},expression:"form.title"}})],1),t._v(" "),s("FormItem",{attrs:{label:"配图"}},[s("Input",{attrs:{placeholder:"请输入配图链接"},model:{value:t.form.image,callback:function(e){t.form.image=e},expression:"form.image"}})],1),t._v(" "),s("FormItem",{attrs:{label:"内容"}},[s("Input",{attrs:{type:"textarea",rows:24,placeholder:"请输入内容"},model:{value:t.form.content,callback:function(e){t.form.content=e},expression:"form.content"}})],1),t._v(" "),s("FormItem",[s("Button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("保存")]),t._v(" "),s("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"}},[t._v("取消")])],1)],1),t._v(" "),s("section",{staticClass:"viewer",domProps:{innerHTML:t._s(t.preview)}})],1)])],1)},staticRenderFns:[]};e.a=i},idAo:function(t,e,s){"use strict";var i=s("HJT2"),a=s("5RNT"),o=s("VU/8")(i.a,a.a,function(t){s("ULHb")},"data-v-8b5ec334",null);e.a=o.exports},"k1+U":function(t,e,s){"use strict";var i=s("woOf"),a=s.n(i),o=s("7+uW"),n=s("PJh5"),r=s.n(n),l=s("EFqf"),c=s.n(l);e.a={name:"papers-page",data:function(){var t=this;return{form:{title:"",content:"",createdAt:"",id:""},selectedIdx:null,shouldShowModal:!1,modalTitle:"",columns:[{title:"发布时间",key:"createdAt"},{title:"标题",key:"title"},{title:"操作",key:"action",render:function(e,s){return e("div",[e("Button",{props:{type:"primary",size:"small"},on:{click:function(){t.list[s.index].isPinned?(t.$db.ref("/articles/"+t.list[s.index].id).update({isPinned:!1}),o.default.set(t.list[s.index],"isPinned",!1)):(t.$db.ref("/articles/"+t.list[s.index].id).update({isPinned:!0}),o.default.set(t.list[s.index],"isPinned",!0))}}},t.list[s.index].isPinned?"取消轮播":"设为轮播"),e("Button",{props:{type:"info",size:"small"},on:{click:function(){var e=t.list[s.index];t.form.title=e.title,t.form.image=e.image,t.form.content=e.content,t.form.id=e.id,t.selectedIdx=s.index,t.shouldShowModal=!0,t.modalTitle="编辑试题内容"}}},"编辑"),e("Poptip",{props:{confirm:!0,title:"确认删除吗？","ok-text":"确认","cancel-text":"取消",width:"220"},on:{"on-ok":function(){t.$db.ref("/articles/"+t.list[s.index].id).remove(),t.list.splice(s.index,1)}}},[e("Button",{props:{type:"error",size:"small"}},"删除")])])}}],list:[],preview:""}},computed:{content:function(){return this.form.content}},watch:{content:function(t){this.preview=c()(t)}},mounted:function(){var t=this;this.$route.params.user||this.$router.push("/"),this.$db.ref("articles").orderByChild("type").equalTo("paper").on("child_added",function(e){t.list.unshift(a()({},e.val(),{id:e.key()}))})},methods:{add:function(){this.form.title="",this.form.image="",this.form.content="",this.form.id="",this.shouldShowModal=!0,this.modalTitle="新增试题"},submit:function(){var t=this.form,e=t.title,s=t.content,i={title:e,content:s,image:t.image,type:"paper"};t.id?(this.$db.ref("articles/"+this.form.id).update(i),this.list[this.selectedIdx].title=e,this.list[this.selectedIdx].content=s):(i.createdAt=r()(new Date).format("YYYY-MM-DD hh:mm"),i.views=0,this.$db.ref("articles").push(i)),this.shouldShowModal=!1}}}},lEOx:function(t,e,s){"use strict";var i=s("pJcg"),a=s("MKvp"),o=s("VU/8")(i.a,a.a,function(t){s("oTCA")},"data-v-22b796aa",null);e.a=o.exports},lyee:function(t,e){},nYXt:function(t,e){},oTCA:function(t,e){},pJcg:function(t,e,s){"use strict";var i=s("woOf"),a=s.n(i),o=s("fZjL"),n=s.n(o);e.a={name:"specials-page",data:function(){return{form:{enrollment:"",aboutus:""},current:{}}},computed:{dataloaded:function(){return n()(this.current).length>0}},created:function(){var t=this;this.$db.ref("specials").once("value").then(function(e){t.form=a()({},t.form,e.val()||{}),t.current=a()({},t.current,e.val()||{enrollment:"",aboutus:""})})},mounted:function(){this.$route.params.user||this.$router.push("/")},methods:{update:function(t){this.current=a()({},this.form),this.$db.ref("/specials/"+t).set(this.form[t])}}}},teIl:function(t,e,s){"use strict";var i=s("0lre"),a=s("5XiC"),o=s("VU/8")(i.a,a.a,function(t){s("xEvo")},"data-v-0633847f",null);e.a=o.exports},uslO:function(t,e,s){function i(t){return s(a(t))}function a(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};i.keys=function(){return Object.keys(o)},i.resolve=a,t.exports=i,i.id="uslO"},vQAX:function(t,e,s){"use strict";e.a={name:"news-editor-page",props:{value:{type:String},id:{type:String,default:"editor"},height:{type:String,default:"500px"},toolbar:{type:Array,default:function(){return[["Undo","Redo"],["Bold","Italic","Strike"],["NumberedList","BulletedList"],["Cut","Copy","Paste"]]}},language:{type:String,default:"en"},extraplugins:{type:String,default:""}},data:function(){return{pageTitle:"New Article",title:"",imageURL:"",abstract:"",content:"",articleId:null,isPinned:!1}},created:function(){var t=this.$route.params.article;t&&(this.pageTitle="Edit Article",this.title=t.title,this.imageURL=t.imageURL,this.abstract=t.abstract,this.content=t.content,this.articleId=t.key,this.isPinned=t.isPinned||!1)},mounted:function(){var t=this;this.$route.params.user||this.$router.push("/");var e=this.id,s={language:this.language,height:this.height,extraPlugins:this.extraplugins,toolbarGroups:[{name:"document",groups:["mode","document","doctools"]},{name:"clipboard",groups:["clipboard","undo"]},{name:"editing",groups:["find","selection","spellchecker","editing"]},{name:"forms",groups:["forms"]},"/",{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi","paragraph"]},{name:"links",groups:["links"]},{name:"insert",groups:["insert"]},"/",{name:"styles",groups:["styles"]},{name:"colors",groups:["colors"]},{name:"tools",groups:["tools"]},{name:"others",groups:["others"]},{name:"about",groups:["about"]}],removeButtons:"Save,NewPage,Preview,Print,Templates,Paste,PasteText,PasteFromWord,Replace,SelectAll,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Find,Scayt,Subscript,Superscript,CopyFormatting,RemoveFormat,CreateDiv,BidiLtr,BidiRtl,Language,Anchor,Flash,Iframe,About"};window.CKEDITOR.replace(e,s),window.CKEDITOR.instances[e].setData(this.content||this.value),window.CKEDITOR.instances[e].on("change",function(){var s=window.CKEDITOR.instances[e].getData();s!==t.value&&t.$emit("input",s)})},destroyed:function(){var t=this.id;window.CKEDITOR.instances[t]&&window.CKEDITOR.instances[t].destroy()},methods:{publish:function(){var t=window.CKEDITOR.instances.editor.getData();if(""!==t&&""!==this.title){var e={".sv":"timestamp"};this.articleId?(this.$firebase.database().ref("news/"+this.articleId).update({title:this.title,imageURL:this.imageURL,abstract:this.abstract,content:t,updatedAt:e,isPinned:this.isPinned,order:!this.isPinned}),this.$Message.success("Article Updated")):(this.$firebase.database().ref("news").push().set({title:this.title,imageURL:this.imageURL,abstract:this.abstract,content:t,updatedAt:e,isPinned:!1,order:!0}),this.$Message.success("Article Published")),this.$router.push({name:"NewsPage",params:{user:this.$route.params.user}})}else this.$Notice.error({title:"Empty title or content.",desc:"Please enter a title or fill news content."})}}}},x8rt:function(t,e,s){"use strict";var i=s("woOf"),a=s.n(i);e.a={name:"books-page",data:function(){var t=this;return{form:{title:"",author:"",publisher:"",image:"",desc:"",id:""},selectedIdx:null,shouldShowModal:!1,modalTitle:"",columns:[{title:"标题",key:"title"},{title:"操作",key:"action",render:function(e,s){return e("div",[e("Button",{props:{type:"info",size:"small"},on:{click:function(){var e=t.list[s.index];t.form.title=e.title,t.form.author=e.author,t.form.publisher=e.publisher,t.form.image=e.image,t.form.desc=e.desc,t.form.id=e.id,t.selectedIdx=s.index,t.shouldShowModal=!0,t.modalTitle="编辑书籍信息"}}},"编辑"),e("Poptip",{props:{confirm:!0,title:"确认删除吗？","ok-text":"确认","cancel-text":"取消",width:"220"},on:{"on-ok":function(){t.$db.ref("/books/"+t.list[s.index].id).remove(),t.list.splice(s.index,1)}}},[e("Button",{props:{type:"error",size:"small"}},"删除")])])}}],list:[]}},mounted:function(){var t=this;this.$route.params.user||this.$router.push("/"),this.$db.ref("books").on("child_added",function(e){t.list.unshift(a()({},e.val(),{id:e.key()}))})},methods:{add:function(){this.form.title="",this.form.author="",this.form.publisher="",this.form.image="",this.form.desc="",this.form.id="",this.shouldShowModal=!0,this.modalTitle="新增书籍"},submit:function(){var t=this.form,e=t.title,s=t.publisher,i=t.author,a=t.image,o=t.desc,n={title:e,publisher:s,author:i,image:a,desc:o};t.id?(this.$db.ref("books/"+this.form.id).update(n),this.list[this.selectedIdx].title=e,this.list[this.selectedIdx].publisher=s,this.list[this.selectedIdx].author=i,this.list[this.selectedIdx].image=a,this.list[this.selectedIdx].desc=o):this.$db.ref("books").push(n),this.shouldShowModal=!1}}}},xEvo:function(t,e){},zE07:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main-content"},[s("h1",[t._v("文章列表")]),t._v(" "),s("div",{staticStyle:{"text-align":"right",margin:"20px 0"}},[s("Button",{attrs:{type:"success"},on:{click:t.add}},[t._v("新增")])],1),t._v(" "),s("Table",{attrs:{columns:t.columns,data:t.list}}),t._v(" "),s("Modal",{attrs:{width:"100",styles:{top:"30px"},title:t.modalTitle,footerHide:!0},model:{value:t.shouldShowModal,callback:function(e){t.shouldShowModal=e},expression:"shouldShowModal"}},[s("div",{staticClass:"editor"},[s("Form",{staticClass:"form",attrs:{model:t.form,"label-width":80}},[s("FormItem",{attrs:{label:"标题"}},[s("Input",{attrs:{placeholder:"请输入标题"},model:{value:t.form.title,callback:function(e){t.form.title=e},expression:"form.title"}})],1),t._v(" "),s("FormItem",{attrs:{label:"配图"}},[s("Input",{attrs:{placeholder:"请输入配图链接"},model:{value:t.form.image,callback:function(e){t.form.image=e},expression:"form.image"}})],1),t._v(" "),s("FormItem",{attrs:{label:"内容"}},[s("Input",{attrs:{type:"textarea",rows:24,placeholder:"请输入内容"},model:{value:t.form.content,callback:function(e){t.form.content=e},expression:"form.content"}})],1),t._v(" "),s("FormItem",[s("Button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("保存")]),t._v(" "),s("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"}},[t._v("取消")])],1)],1),t._v(" "),s("section",{staticClass:"viewer",domProps:{innerHTML:t._s(t.preview)}})],1)])],1)},staticRenderFns:[]};e.a=i},"zvq/":function(t,e,s){"use strict";var i=s("H4dq"),a=s("zE07"),o=s("VU/8")(i.a,a.a,function(t){s("nYXt")},"data-v-22d21d0e",null);e.a=o.exports}},["NHnr"]);