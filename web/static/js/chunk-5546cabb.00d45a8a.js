(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5546cabb"],{1779:function(t,a,e){t.exports=e.p+"static/img/mo_woman.2f55a35c.png"},"48e3":function(t,a,e){t.exports=e.p+"static/img/mo_man.2a3be7d6.png"},"9e2c":function(t,a,e){},bb99:function(t,a,e){"use strict";e("9e2c")},bdba:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"add_teacher_wrap"},[s("div",{staticClass:"com_title"},[s("div",{staticClass:"c_titles"},[t._m(0),s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",[t._v("基础设置")]),s("el-breadcrumb-item",{attrs:{to:{path:"/library/teacher"}}},[t._v("教师管理")]),s("el-breadcrumb-item",[t._v("新增教师")])],1)],1)]),s("div",{staticClass:"person_main"},[s("div",{staticClass:"person_box"},[s("div",{staticClass:"s_logo"},[s("div",{staticClass:"school_logo"},[s("div",{staticClass:"s_logo_bg"},[t.formMsg.headIcon?s("img",{attrs:{src:t.formMsg.headIcon,alt:""}}):s("img",{attrs:{src:1==t.formMsg.gender?e("48e3"):e("1779"),alt:""}})])]),s("el-upload",{ref:"imgTeacherUpload",staticClass:"upload-demo",attrs:{action:"","auto-upload":!1,limit:1,"show-file-list":!1,"on-change":t.imgBroadcastChange,accept:"image/jpg,image/png,image/jpeg"}},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.clearFiles}},[t._v("更换头像")])],1)],1),s("el-form",{staticClass:"person_contain",attrs:{"label-position":"right","label-width":"1.4rem",model:t.formMsg}},[s("div",{staticClass:"person_msg"},[s("img",{attrs:{src:e("7c3b"),alt:""}}),t._v("\n          基础信息\n        ")]),s("el-form-item",{attrs:{required:"",label:"登录账号："}},[s("el-input",{attrs:{placeholder:"请输入登录账号"},model:{value:t.formMsg.passport,callback:function(a){t.$set(t.formMsg,"passport",a)},expression:"formMsg.passport"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.passportFlag,expression:"passportFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:e("32e5"),alt:""}}),t._v("\n              请输入登录账号且不少于6位\n            ")])])],1),s("el-form-item",{attrs:{required:"",label:"教师姓名："}},[s("el-input",{attrs:{placeholder:"请输入教师姓名"},model:{value:t.formMsg.name,callback:function(a){t.$set(t.formMsg,"name",a)},expression:"formMsg.name"}}),s("el-input",{staticClass:"dis_none"}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.nameFlag,expression:"nameFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:e("32e5"),alt:""}}),t._v("\n              请输入教师姓名\n            ")])])],1),s("el-form-item",{attrs:{label:"登录密码："}},[s("el-input",{staticClass:"dis_none",attrs:{type:"password"}}),s("el-input",{attrs:{type:"password",placeholder:"默认为:登录账号后6位"},model:{value:t.formMsg.password,callback:function(a){t.$set(t.formMsg,"password",a)},expression:"formMsg.password"}})],1),s("el-form-item",{attrs:{required:"",label:"教师性别："}},[s("el-radio-group",{model:{value:t.formMsg.gender,callback:function(a){t.$set(t.formMsg,"gender",a)},expression:"formMsg.gender"}},[s("el-radio",{attrs:{label:1}},[t._v("男")]),s("el-radio",{attrs:{label:0}},[t._v("女")])],1)],1),s("el-form-item",{attrs:{label:"手机号码："}},[s("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:t.formMsg.phone,callback:function(a){t.$set(t.formMsg,"phone",a)},expression:"formMsg.phone"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.phoneFlag,expression:"phoneFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:e("32e5"),alt:""}}),t._v("\n              手机号格式有误\n            ")])])],1),s("el-form-item",{attrs:{label:"邮箱地址："}},[s("el-input",{attrs:{placeholder:"请输入邮箱地址"},model:{value:t.formMsg.email,callback:function(a){t.$set(t.formMsg,"email",a)},expression:"formMsg.email"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.emailFlag,expression:"emailFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:e("32e5"),alt:""}}),t._v("\n              邮箱格式有误\n            ")])])],1),s("div",{staticClass:"person_msg"},[s("img",{attrs:{src:e("7c3b"),alt:""}}),t._v("\n          辅助信息\n        ")]),s("el-form-item",{attrs:{label:"籍贯：",prop:"birthPlace"}},[s("section",{staticClass:"address-select-list"},[s("el-select",{staticClass:"adress-select",attrs:{placeholder:"请选择省"},model:{value:t.formMsg.birthPlace,callback:function(a){t.$set(t.formMsg,"birthPlace",a)},expression:"formMsg.birthPlace"}},t._l(t.provinceData,(function(t){return s("el-option",{key:t.name,attrs:{label:t.name,value:t.name}})})),1)],1),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}})]),s("el-form-item",{attrs:{label:"备注："}},[s("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容",maxlength:"200","show-word-limit":""},model:{value:t.formMsg.remark,callback:function(a){t.$set(t.formMsg,"remark",a)},expression:"formMsg.remark"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}})],1),s("el-form-item",{staticClass:"sub_center"},[s("el-button",{attrs:{type:"primary"},on:{click:t.addSubmit}},[t._v("保存")]),s("el-button",{staticClass:"resets",attrs:{type:"primary"},on:{click:t.goBack}},[t._v("取消")])],1)],1)],1)])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"com_cir"},[s("img",{attrs:{src:e("becf"),alt:""}})])}],r=(e("28a5"),e("7f7f"),e("e86e")),o=e("99b1"),l={name:"person",data:function(){return{diaLogForm:{file:"",imgBase64:""},upUrl:"https://jsonplaceholder.typicode.com/posts/",upData:{},photo:"https://static.waijiaoyi.com/wjy2017/aidaka/c307b2d0af151492b10a2604a1573ba1?x-oss-process=image/resize,m_fill,w_300,h_300",nameFlag:!1,passwordFlag:!1,numberFlag:!1,sexFlag:!1,phoneFlag:!1,emailFlag:!1,passportFlag:!1,oldPassFlag:!1,oldRight:!1,newPassFlag:!1,newRight1:!1,newRight2:!1,newRight3:!1,twoPassFlag:!1,formMsg:{passport:"",name:"",password:"",gender:1,phone:"",email:"",birthPlace:"",headIcon:"",remark:""},provinceData:"",cityData:"",areaData:"",name:"",remark:""}},created:function(){},mounted:function(){var t=this;setTimeout((function(){t.formMsg.passport="",t.formMsg.name="",t.formMsg.password=""}),0),this.initAddressFrom(o)},methods:{clearFiles:function(){this.$refs["imgTeacherUpload"].clearFiles()},imgBroadcastChange:function(t,a){if(t.size>512e3)return this.$message.error("上传的头像太大，建议500KB以下"),this.clearFiles(),!1;this.diaLogForm.file=t,this.uploadImgToBase64(t.raw)},uploadImgToBase64:function(t){var a=this,e=new FileReader;e.readAsDataURL(t),e.onload=function(){a.diaLogForm.imgBase64=this.result,a.formMsg.headIcon=this.result}},initAddressFrom:function(t){this.provinceData=t},chooseProvince:function(t){var a=this;this.selectCityDisabled="香港特别行政区"==t,this.cityData=[],this.areaData=[],this.formMsg.city="",this.formMsg.district="",this.provinceData.map((function(e){if(t==e.name)return a.cityData=e.city,!1}))},chooseCity:function(t){var a=this;this.formMsg.district="",this.cityData.map((function(e){if(t==e.name)return a.areaData=e.area,!1}))},getUserInfo:function(){var t=this;t.$http.get(r["a"]+"/AIMW/user/getUserProfile").then((function(a){var e=a.data;0==e.code&&(t.formMsg.passport=e.data.passport,t.formMsg.phone=e.data.phone,t.formMsg.email=e.data.email,t.name=e.data.name,t.remark=e.data.remark,localStorage.setItem("userInfo",JSON.stringify(e.data)),sessionStorage.setItem("userName",e.data.name),t.setUserName(e.data.name))})).catch((function(t){console.log(t)}))},userChange:function(t){""!=t&&(this.passportFlag=!1)},phoneChange:function(t){""!=t&&(this.phoneFlag=!1)},emailChange:function(t){""!=t&&(this.emailFlag=!1)},addSubmit:function(){var t=this,a=this;this.passportFlag=this.nameFlag=this.passwordFlag=this.phoneFlag=this.emailFlag=!1;var e=/^1[3456789]\d{9}$/,s=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;return""==this.formMsg.passport||this.formMsg.passport.length<6?(this.passportFlag=!0,!1):""==this.formMsg.name?(this.nameFlag=!0,!1):""==this.formMsg.phone||e.test(this.formMsg.phone)?""==this.formMsg.email||s.test(this.formMsg.email)?(this.formMsg.headIcon=this.formMsg.headIcon.split("base64,")[1],void a.$http.post(r["a"]+"/aimw/teacher/addUser",this.formMsg).then((function(a){var e=a.data;0==e.code?t.$router.push({path:"/library/teacher"}):t.$message.error(e.msg)})).catch((function(t){console.log(t)}))):(this.emailFlag=!0,!1):(this.phoneFlag=!0,!1)},goBack:function(){this.$router.push({path:"/library/teacher"})}}},n=l,m=(e("bb99"),e("2877")),c=Object(m["a"])(n,s,i,!1,null,null,null);a["default"]=c.exports}}]);