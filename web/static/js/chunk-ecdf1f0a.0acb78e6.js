(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ecdf1f0a"],{1779:function(t,a,e){t.exports=e.p+"static/img/mo_woman.2f55a35c.png"},"2fdb":function(t,a,e){"use strict";var s=e("5ca1"),r=e("d2c8"),o="includes";s(s.P+s.F*e("5147")(o),"String",{includes:function(t){return!!~r(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"33d7":function(t,a,e){},"48e3":function(t,a,e){t.exports=e.p+"static/img/mo_man.2a3be7d6.png"},5147:function(t,a,e){var s=e("2b4c")("match");t.exports=function(t){var a=/./;try{"/./"[t](a)}catch(e){try{return a[s]=!1,!"/./"[t](a)}catch(r){}}return!0}},"590c":function(t,a,e){"use strict";e("33d7")},6762:function(t,a,e){"use strict";var s=e("5ca1"),r=e("c366")(!0);s(s.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")("includes")},"7a25":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"add_teacher_wrap"},[s("div",{staticClass:"com_title"},[s("div",{staticClass:"c_titles"},[t._m(0),s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",[t._v("基础设置")]),s("el-breadcrumb-item",{attrs:{to:{path:"/library/teacher"}}},[t._v("教师管理")]),s("el-breadcrumb-item",[t._v("教师信息详情")])],1)],1)]),s("div",{staticClass:"person_main"},[s("div",{staticClass:"person_box"},[s("div",{staticClass:"s_logo"},[s("div",{staticClass:"school_logo"},[s("div",{staticClass:"s_logo_bg"},[""!=t.formMsg.headIcon&&"data:image;base64,"!=t.formMsg.headIcon?s("img",{attrs:{src:t.formMsg.headIcon,alt:""}}):s("img",{attrs:{src:1==t.formMsg.gender?e("48e3"):e("1779"),alt:""}})])]),s("el-upload",{ref:"imgTeacherUpload",staticClass:"upload-demo",attrs:{action:"","auto-upload":!1,limit:1,"show-file-list":!1,"on-change":t.imgBroadcastChange,accept:"image/jpg,image/png,image/jpeg"}},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.clearFiles}},[t._v("更换头像")])],1)],1),s("el-form",{staticClass:"person_contain",attrs:{"label-position":"right","label-width":"1.4rem",model:t.formMsg}},[s("div",{staticClass:"person_msg"},[s("img",{attrs:{src:e("7c3b"),alt:""}}),t._v("\n          基础信息\n        ")]),s("el-form-item",{attrs:{required:"",label:"登录账号："}},[s("el-input",{attrs:{placeholder:"请输入登录账号",disabled:"administrator"==t.formMsg.passport},model:{value:t.formMsg.passport,callback:function(a){t.$set(t.formMsg,"passport",a)},expression:"formMsg.passport"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.passportFlag,expression:"passportFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:e("32e5"),alt:""}}),t._v("\n              请输入登录账号且不少于6位\n            ")])])],1),s("el-form-item",{attrs:{required:"",label:"教师姓名："}},[s("el-input",{attrs:{placeholder:"请输入教师姓名"},model:{value:t.formMsg.name,callback:function(a){t.$set(t.formMsg,"name",a)},expression:"formMsg.name"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.nameFlag,expression:"nameFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:e("32e5"),alt:""}}),t._v("\n              请输入教师姓名\n            ")])])],1),s("el-form-item",{attrs:{label:"登录密码："}},[s("el-input",{attrs:{type:"password",placeholder:"默认为:登录账号后6位"},model:{value:t.formMsg.password,callback:function(a){t.$set(t.formMsg,"password",a)},expression:"formMsg.password"}})],1),s("el-form-item",{attrs:{required:"",label:"教师性别："}},[s("el-radio-group",{model:{value:t.formMsg.gender,callback:function(a){t.$set(t.formMsg,"gender",a)},expression:"formMsg.gender"}},[s("el-radio",{attrs:{label:1}},[t._v("男")]),s("el-radio",{attrs:{label:0}},[t._v("女")])],1)],1),s("el-form-item",{attrs:{label:"手机号码："}},[s("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:t.formMsg.phone,callback:function(a){t.$set(t.formMsg,"phone",a)},expression:"formMsg.phone"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.phoneFlag,expression:"phoneFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:e("32e5"),alt:""}}),t._v("\n              手机号格式有误\n            ")])])],1),s("el-form-item",{attrs:{label:"邮箱地址："}},[s("el-input",{attrs:{placeholder:"请输入邮箱地址"},model:{value:t.formMsg.email,callback:function(a){t.$set(t.formMsg,"email",a)},expression:"formMsg.email"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.emailFlag,expression:"emailFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:e("32e5"),alt:""}}),t._v("\n              邮箱格式有误\n            ")])])],1),s("div",{staticClass:"person_msg"},[s("img",{attrs:{src:e("7c3b"),alt:""}}),t._v("\n          辅助信息\n        ")]),s("el-form-item",{attrs:{label:"籍贯：",prop:"birthPlace"}},[s("section",{staticClass:"address-select-list"},[s("el-select",{staticClass:"adress-select",attrs:{placeholder:"请选择省"},model:{value:t.formMsg.birthPlace,callback:function(a){t.$set(t.formMsg,"birthPlace",a)},expression:"formMsg.birthPlace"}},t._l(t.provinceData,(function(t){return s("el-option",{key:t.name,attrs:{label:t.name,value:t.name}})})),1)],1),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}})]),s("el-form-item",{attrs:{label:"备注："}},[s("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容",maxlength:"200","show-word-limit":""},model:{value:t.formMsg.remark,callback:function(a){t.$set(t.formMsg,"remark",a)},expression:"formMsg.remark"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}})],1),t.power1?s("el-form-item",{staticClass:"sub_center"},[s("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")]),s("el-button",{staticClass:"resets",attrs:{type:"primary"},on:{click:t.goBack}},[t._v("取消")])],1):t._e()],1)],1)])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"com_cir"},[s("img",{attrs:{src:e("becf"),alt:""}})])}],o=(e("28a5"),e("7f7f"),e("6762"),e("2fdb"),e("e86e")),i=e("99b1"),l={name:"person",data:function(){return{power1:!1,diaLogForm:{file:"",imgBase64:""},upUrl:"https://jsonplaceholder.typicode.com/posts/",upData:{},photo:"https://static.waijiaoyi.com/wjy2017/aidaka/c307b2d0af151492b10a2604a1573ba1?x-oss-process=image/resize,m_fill,w_300,h_300",nameFlag:!1,passwordFlag:!1,numberFlag:!1,sexFlag:!1,phoneFlag:!1,emailFlag:!1,passportFlag:!1,oldPassFlag:!1,oldRight:!1,newPassFlag:!1,newRight1:!1,newRight2:!1,newRight3:!1,twoPassFlag:!1,formMsg:{passport:"",oldPassport:"",name:"",password:"",gender:"",phone:"",email:"",birthPlace:"",headIcon:"",remark:""},provinceData:"",cityData:"",areaData:"",typeData:["公私","私立"],name:"",remark:""}},created:function(){},mounted:function(){this.passport=this.$route.params.userID,this.powerData(),this.getUserInfo(),this.initAddressFrom(i)},methods:{powerData:function(){var t=JSON.parse(localStorage.getItem("userAuth")).menuAuthID;console.log(t),this.power1=t.includes(40203)},clearFiles:function(){this.$refs["imgTeacherUpload"].clearFiles()},imgBroadcastChange:function(t,a){if(console.log(t),console.log(a),t.size>512e3)return this.$message.error("上传的头像太大，建议500KB以下"),this.clearFiles(),!1;this.diaLogForm.file=t,this.uploadImgToBase64(t.raw),console.log(this.diaLogForm)},uploadImgToBase64:function(t){var a=this,e=new FileReader;e.readAsDataURL(t),e.onload=function(){a.diaLogForm.imgBase64=this.result,a.formMsg.headIcon=this.result}},initAddressFrom:function(t){console.log(t),this.provinceData=t},chooseProvince:function(t){var a=this;console.log(t),this.selectCityDisabled="香港特别行政区"==t,this.cityData=[],this.areaData=[],this.formMsg.city="",this.formMsg.district="",console.log(this.provinceData),this.provinceData.map((function(e){if(t==e.name)return a.cityData=e.city,!1}))},chooseCity:function(t){var a=this;console.log(t),console.log(this.cityData),this.formMsg.district="",this.cityData.map((function(e){if(t==e.name)return a.areaData=e.area,console.log(a.areaData),!1}))},getUserInfo:function(){var t=this;t.$http.get(o["a"]+"/aimw/user/getUserProfile",{params:{passport:t.passport}}).then((function(a){console.log(a);var e=a.data;0==e.code&&(t.formMsg={passport:e.data.passport,oldPassport:e.data.passport,name:e.data.name,password:e.data.password,gender:e.data.gender,phone:e.data.phone,email:e.data.email,birthPlace:e.data.birthPlace,headIcon:"data:image;base64,"+e.data.headIcon,remark:e.data.remark})})).catch((function(t){console.log(t)}))},userChange:function(t){""!=t&&(this.passportFlag=!1),console.log(t)},phoneChange:function(t){""!=t&&(this.phoneFlag=!1),console.log(t)},emailChange:function(t){""!=t&&(this.emailFlag=!1),console.log(t)},onSubmit:function(){var t=this,a=this;this.passportFlag=this.nameFlag=this.passwordFlag=this.phoneFlag=this.emailFlag=!1;var e=/^1[3456789]\d{9}$/,s=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;if(""==this.formMsg.passport||this.formMsg.passport.length<6)return this.passportFlag=!0,!1;if(""==this.formMsg.name)return this.nameFlag=!0,!1;if(""!=this.formMsg.phone&&!e.test(this.formMsg.phone))return this.phoneFlag=!0,!1;if(""!=this.formMsg.email&&!s.test(this.formMsg.email))return this.emailFlag=!0,!1;var r={newPassport:this.formMsg.passport,passport:this.formMsg.oldPassport,name:this.formMsg.name,password:this.formMsg.password,gender:this.formMsg.gender,phone:this.formMsg.phone,email:this.formMsg.email,birthPlace:this.formMsg.birthPlace,headIcon:this.formMsg.headIcon.split("base64,")[1],remark:this.formMsg.remark};console.log(r),a.$http.put(o["a"]+"/aimw/teacher/updateUserInfo",r).then((function(a){var e=a.data;0==e.code?(console.log(e),t.$router.push({path:"/library/teacher"})):t.$message.error(e.msg)})).catch((function(t){console.log(t)}))},goBack:function(){this.$router.push({path:"/library/teacher"})}}},n=l,c=(e("590c"),e("2877")),m=Object(c["a"])(n,s,r,!1,null,null,null);a["default"]=m.exports},d2c8:function(t,a,e){var s=e("aae3"),r=e("be13");t.exports=function(t,a,e){if(s(a))throw TypeError("String#"+e+" doesn't accept regex!");return String(r(t))}}}]);