(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2be5c305"],{1779:function(e,a,t){e.exports=t.p+"static/img/mo_woman.2f55a35c.png"},"3a3d":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"add_student_wrap"},[s("div",{staticClass:"com_title"},[s("div",{staticClass:"c_titles"},[e._m(0),s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",[e._v("基础设置")]),s("el-breadcrumb-item",{attrs:{to:{path:"/library/class"}}},[e._v("班级管理")]),s("el-breadcrumb-item",[e._v("学生详情")])],1)],1)]),s("div",{staticClass:"person_main"},[s("div",{staticClass:"person_box"},[s("div",{staticClass:"s_logo"},[s("div",{staticClass:"school_logo"},[s("div",{staticClass:"s_logo_bg"},[""!=e.formSearch.headIcon&&"data:image;base64,"!=e.formSearch.headIcon?s("img",{attrs:{src:e.formSearch.headIcon,alt:""}}):s("img",{attrs:{src:0==e.formSearch.gender?t("1779"):t("48e3"),alt:""}})])]),s("el-upload",{ref:"imgStudentUpload",staticClass:"upload-demo",attrs:{action:"","auto-upload":!1,limit:1,"show-file-list":!1,"on-change":e.imgBroadcastChange,accept:"image/jpg,image/png,image/jpeg"}},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.clearFiles}},[e._v("更换头像")])],1)],1),s("el-form",{staticClass:"person_contain",attrs:{"label-position":"right","label-width":"1.4rem",model:e.formSearch}},[s("div",{staticClass:"person_msg"},[s("img",{attrs:{src:t("7c3b"),alt:""}}),e._v("\n          基础信息\n        ")]),s("el-form-item",{attrs:{required:"",label:"学段："}},[s("el-radio-group",{on:{change:e.levleChange},model:{value:e.formSearch.level,callback:function(a){e.$set(e.formSearch,"level",a)},expression:"formSearch.level"}},e._l(e.levelList,(function(a){return s("el-radio",{key:a.Pid,attrs:{label:a.Pid}},[e._v(e._s(a.Name))])})),1)],1),s("el-form-item",{attrs:{required:"",label:"年级："}},[s("el-radio-group",{on:{change:e.gradeChange},model:{value:e.formSearch.grade,callback:function(a){e.$set(e.formSearch,"grade",a)},expression:"formSearch.grade"}},e._l(e.gradeList,(function(a){return s("el-radio",{key:a.Pid,attrs:{label:a.Pid}},[e._v(e._s(a.Name))])})),1)],1),s("el-form-item",{attrs:{required:"",label:"班级："}},[s("el-radio-group",{staticClass:"asc_flex",on:{change:e.classChange},model:{value:e.formSearch.class,callback:function(a){e.$set(e.formSearch,"class",a)},expression:"formSearch.class"}},e._l(e.classList,(function(a){return s("el-radio",{key:a.Pid,attrs:{label:a.Pid}},[e._v(e._s(a.Name))])})),1)],1),s("el-form-item",{attrs:{required:"",label:"学生姓名："}},[s("el-input",{attrs:{placeholder:"请输入学生姓名"},model:{value:e.formSearch.name,callback:function(a){e.$set(e.formSearch,"name",a)},expression:"formSearch.name"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.nameFlag,expression:"nameFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:t("32e5"),alt:""}}),e._v("\n              请输入学生姓名\n            ")])])],1),s("el-form-item",{attrs:{required:"",label:"性别："}},[s("el-radio-group",{model:{value:e.formSearch.gender,callback:function(a){e.$set(e.formSearch,"gender",a)},expression:"formSearch.gender"}},[s("el-radio",{attrs:{label:1}},[e._v("男")]),s("el-radio",{attrs:{label:0}},[e._v("女")])],1)],1),s("el-form-item",{staticClass:"time_data time_bg1",attrs:{label:"出生日期：",required:""}},[s("el-date-picker",{attrs:{type:"date",placeholder:"请选择出生日期",format:"yyyy年MM月dd日",editable:!1,clearable:!1},model:{value:e.formSearch.birth,callback:function(a){e.$set(e.formSearch,"birth",a)},expression:"formSearch.birth"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.birthFlag,expression:"birthFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:t("32e5"),alt:""}}),e._v("\n              请选择出生日期\n            ")])])],1),s("el-form-item",{staticClass:"time_data time_bg1",attrs:{label:"入学年月：",required:""}},[s("el-date-picker",{attrs:{type:"month",placeholder:"请选择入学年月",format:"yyyy年MM月",editable:!1,clearable:!1},model:{value:e.formSearch.enterYear,callback:function(a){e.$set(e.formSearch,"enterYear",a)},expression:"formSearch.enterYear"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.enterYearFlag,expression:"enterYearFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:t("32e5"),alt:""}}),e._v("\n              请选择入学年月\n            ")])])],1),s("el-form-item",{attrs:{required:"",label:"学籍号："}},[s("el-input",{attrs:{placeholder:"请输入学籍号"},model:{value:e.formSearch.passport,callback:function(a){e.$set(e.formSearch,"passport",a)},expression:"formSearch.passport"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.passportFlag,expression:"passportFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:t("32e5"),alt:""}}),e._v("\n              请输入学籍号且不少于6位\n            ")])])],1),s("el-form-item",{attrs:{label:"账号："}},[s("el-input",{attrs:{placeholder:"默认与学籍号一致",disabled:""},model:{value:e.formSearch.passport,callback:function(a){e.$set(e.formSearch,"passport",a)},expression:"formSearch.passport"}})],1),s("el-form-item",{attrs:{label:"登录密码："}},[s("el-input",{attrs:{type:"password",placeholder:"默认为:登录账号后6位"},model:{value:e.formSearch.password,callback:function(a){e.$set(e.formSearch,"password",a)},expression:"formSearch.password"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.passwordFlag,expression:"passwordFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:t("32e5"),alt:""}}),e._v("\n              登录密码至少6位\n            ")])])],1),s("el-form-item",{attrs:{label:"手机号码："}},[s("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.formSearch.phone,callback:function(a){e.$set(e.formSearch,"phone",a)},expression:"formSearch.phone"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.phoneFlag,expression:"phoneFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:t("32e5"),alt:""}}),e._v("\n              手机号格式有误\n            ")])])],1),s("el-form-item",{attrs:{label:"邮箱地址："}},[s("el-input",{attrs:{placeholder:"请输入邮箱地址"},model:{value:e.formSearch.email,callback:function(a){e.$set(e.formSearch,"email",a)},expression:"formSearch.email"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.emailFlag,expression:"emailFlag"}],staticClass:"tip_left"},[s("div",{staticClass:"tip_msg"},[s("img",{attrs:{src:t("32e5"),alt:""}}),e._v("\n              邮箱格式有误\n            ")])])],1),s("div",{staticClass:"person_msg"},[s("img",{attrs:{src:t("7c3b"),alt:""}}),e._v("\n          辅助信息\n        ")]),s("el-form-item",{attrs:{label:"籍贯：",prop:"birthPlace"}},[s("section",{staticClass:"address-select-list"},[s("el-select",{staticClass:"adress-select",attrs:{placeholder:"请选择省"},model:{value:e.formSearch.birthPlace,callback:function(a){e.$set(e.formSearch,"birthPlace",a)},expression:"formSearch.birthPlace"}},e._l(e.provinceData,(function(e){return s("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1)],1),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}})]),s("el-form-item",{attrs:{label:"备注："}},[s("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容",maxlength:"200","show-word-limit":""},model:{value:e.formSearch.remark,callback:function(a){e.$set(e.formSearch,"remark",a)},expression:"formSearch.remark"}}),s("div",{staticStyle:{width:"4rem",height:"0.36rem"}})],1),s("el-form-item",{staticClass:"sub_center"},[s("el-button",{attrs:{type:"primary"},on:{click:e.addSubmit}},[e._v("保存")]),s("el-button",{staticClass:"resets",attrs:{type:"primary"},on:{click:e.goBack}},[e._v("取消")])],1)],1)],1)])])},r=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"com_cir"},[s("img",{attrs:{src:t("becf"),alt:""}})])}],i=t("67bb"),o=t.n(i),l=t("5d58"),c=t.n(l);function n(e){return n="function"===typeof o.a&&"symbol"===typeof c.a?function(e){return typeof e}:function(e){return e&&"function"===typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":typeof e},n(e)}t("ac6a"),t("28a5"),t("7f7f"),t("96cf");var h=t("3b8d"),m=t("e86e"),d=t("99b1"),f={name:"person",data:function(){return{diaLogForm:{file:"",imgBase64:""},upUrl:"https://jsonplaceholder.typicode.com/posts/",upData:{},photo:"https://static.waijiaoyi.com/wjy2017/aidaka/c307b2d0af151492b10a2604a1573ba1?x-oss-process=image/resize,m_fill,w_300,h_300",acountFlag:!1,nameFlag:!1,birthFlag:!1,enterYearFlag:!1,passwordFlag:!1,numberFlag:!1,sexFlag:!1,phoneFlag:!1,emailFlag:!1,passportFlag:!1,oldPassFlag:!1,oldRight:!1,newPassFlag:!1,newRight1:!1,newRight2:!1,newRight3:!1,twoPassFlag:!1,formSearch:{level:"",grade:"",class:"",sectionName:"",gradeName:"",className:"",name:"",gender:1,birth:"",enterYear:"",passport:"",acount:"",password:"",phone:"",email:"",birthPlace:"",remark:"",headIcon:""},provinceData:"",cityData:"",areaData:"",name:"",remark:"",levelList:[],gradeList:[],classList:[]}},created:function(){},mounted:function(){this.passport=this.$route.params.userID,this.getUserInfo(),this.initAddressFrom(d)},methods:{clearFiles:function(){this.$refs["imgStudentUpload"].clearFiles()},imgBroadcastChange:function(e,a){if(console.log(e),console.log(a),e.size>512e3)return this.$message.error("上传的头像太大，建议500KB以下"),this.clearFiles(),!1;this.diaLogForm.file=e,this.uploadImgToBase64(e.raw),console.log(this.diaLogForm)},uploadImgToBase64:function(e){var a=this,t=new FileReader;t.readAsDataURL(e),t.onload=function(){a.diaLogForm.imgBase64=this.result,a.formSearch.headIcon=this.result}},levleChange:function(e){console.log(e),this.choseLevel(e)},gradeChange:function(e){console.log(e),this.choseGrade(e)},classChange:function(e){console.log(e),this.formSearch.class=e},upLoadingimg:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(a,t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$message({type:"warning",message:"暂未开发!"}),e.abrupt("return",!1);case 2:case"end":return e.stop()}}),e,this)})));function a(a,t){return e.apply(this,arguments)}return a}(),imgSuccess:function(e,a){var t=this;console.log(e,a),setTimeout((function(){t.loading.close(),t.formSearch.headIcon="https://static.waijiaoyi.com/wjy2017/i2351ef5af5d2acf7f36e605292caa951.jpg"}),2e3)},uploadError:function(e,a){console.log(e),this.loading.close(),this.$message.error("上传失败，请重新上传")},initAddressFrom:function(e){console.log(e),this.provinceData=e},chooseProvince:function(e){var a=this;console.log(e),this.selectCityDisabled="香港特别行政区"==e,this.cityData=[],this.areaData=[],this.formSearch.city="",this.formSearch.district="",console.log(this.provinceData),this.provinceData.map((function(t){if(e==t.name)return a.cityData=t.city,!1}))},chooseCity:function(e){var a=this;console.log(e),console.log(this.cityData),this.formSearch.district="",this.cityData.map((function(t){if(e==t.name)return a.areaData=t.area,console.log(a.areaData),!1}))},getUserInfo:function(){var e=this,a=this;a.$http.get(m["a"]+"/aimw/student/getStudentProfile",{params:{passport:a.passport}}).then((function(t){console.log(t);var s=t.data.data;0==t.data.code&&(a.formSearch={level:s.section,grade:s.grade,class:s.class,sectionName:s.sectionName,gradeName:s.gradeName,className:s.className,name:s.name,gender:s.gender,birth:s.birth,enterYear:s.enterYear,passport:s.passport,acount:s.acount,password:s.password,phone:s.phone,email:s.email,birthPlace:s.birth_place,remark:s.remark,headIcon:"data:image;base64,"+s.headIcon}),e.threeChange()})).catch((function(e){console.log(e)}))},userChange:function(e){""!=e&&(this.passportFlag=!1),console.log(e)},phoneChange:function(e){""!=e&&(this.phoneFlag=!1),console.log(e)},emailChange:function(e){""!=e&&(this.emailFlag=!1),console.log(e)},addSubmit:function(){var e=this,a=this;console.log(this.levelList),this.acountFlag=this.nameFlag=this.passwordFlag=this.phoneFlag=this.emailFlag=this.birthFlag=this.enterYearFlag=!1;var t=/^1[3456789]\d{9}$/,s=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;if(""==this.formSearch.name)return this.nameFlag=!0,!1;if(""==this.formSearch.birth)return this.birthFlag=!0,!1;if(""==this.formSearch.enterYear)return this.enterYearFlag=!0,!1;if(""==this.formSearch.passport||this.formSearch.passport.length<6)return this.passportFlag=!0,!1;if(this.formSearch.password.length>0&&this.formSearch.password.length<6)return this.passwordFlag=!0,!1;if(""!=this.formSearch.phone&&!t.test(this.formSearch.phone))return this.phoneFlag=!0,!1;if(""!=this.formSearch.email&&!s.test(this.formSearch.email))return this.emailFlag=!0,!1;for(var r in this.levelList)this.levelList[r].Pid==this.formSearch.level&&(this.formSearch.sectionName=this.levelList[r].Name);for(var i in this.gradeList)this.gradeList[i].Pid==this.formSearch.grade&&(this.formSearch.gradeName=this.gradeList[i].Name);for(var o in this.classList)this.classList[o].Pid==this.formSearch.class&&(this.formSearch.className=this.classList[o].Name);""==this.formSearch.password&&(this.formSearch.password=this.formSearch.passport.substring(this.formSearch.passport.length-6));var l={name:this.formSearch.name,passport:this.formSearch.passport,password:this.formSearch.password,gender:this.formSearch.gender,phone:this.formSearch.phone,email:this.formSearch.email,birth:this.formTimes(this.formSearch.birth),birthPlace:this.formSearch.birthPlace,headIcon:this.formSearch.headIcon.split("base64,")[1],sectionName:this.formSearch.sectionName,gradeName:this.formSearch.gradeName,className:this.formSearch.className,section:this.formSearch.level,grade:this.formSearch.grade,class:this.formSearch.class,enterYear:this.formTimes(this.formSearch.enterYear),remark:this.formSearch.remark};console.log(l),a.$http.put(m["a"]+"/aimw/student/updateStudentInfo",l).then((function(a){var t=a.data;0==t.code?(console.log(t),e.$message.success("修改成功"),e.$router.push({path:"/library/class"})):e.$message.error(t.msg)})).catch((function(e){console.log(e)}))},goBack:function(){this.$router.push({path:"/library/class"})},choseLevel:function(e){var a=this;console.log(e),this.formSearch.level=e,this.gradeList=[],this.classList=[],this.formSearch.grade="",this.formSearch.class="",this.levelList.map((function(t){if(e==t.Pid)return a.gradeList=t.list,!1})),console.log(this.gradeList);var t=this.gradeList[0].Pid;this.choseGrade(t)},choseGrade:function(e){var a=this;console.log(e),this.formSearch.grade=e,this.classList=[],this.formSearch.class="",this.gradeList.map((function(t){if(e==t.Pid)return a.classList=t.list,!1})),console.log(this.classList),this.classList?this.formSearch.class=this.classList[0].Pid:this.formSearch.class=""},threeChange:function(){var e=this,a=this,t={passport:localStorage.getItem("passport")};this.$http.get(m["a"]+"/aimw/school/listSchoolOrg",{params:t}).then((function(t){var s=t.data;if(0==s.code){if(s.data){console.log(JSON.parse(s.data).schoolOrg);var r=JSON.parse(s.data).schoolOrg,i=[];for(var o in r)1==r[o].Mark&&i.push(r[o]);for(var l in r=i,r){var c=r[l].list,n=[];for(var h in c)1==c[h].Mark&&n.push(c[h]);r[l].list=n}for(var m in r)for(var d in r[m].list){var f=[];for(var p in r[m].list[d].list)1==r[m].list[d].list[p].Mark&&f.push(r[m].list[d].list[p]);r[m].list[d].list=f}for(var g in r)for(var u in r[g].list)for(var v in r[g].list[u].list){var S=[];for(var b in r[g].list[u].list[v].list)1==r[g].list[u].list[v].list[b].Mark&&S.push(r[g].list[u].list[v].list[b]);r[g].list[u].list[v].list=S}var w=[];r.forEach((function(e,a){var t=e.list;t.forEach((function(e,a){w.push(e)}))})),console.log("levelArr"),a.levelList=w,e.levelList.map((function(t){if(a.formSearch.level==t.Pid)return e.gradeList=t.list,!1})),e.gradeList.map((function(t){if(a.formSearch.grade==t.Pid)return e.classList=t.list,!1}))}}else a.$message.error(s.msg)})).catch((function(e){console.log(e)}))},formTimes:function(e){if(console.log(e),"object"==n(e)){var a=e.getFullYear(),t=e.getMonth()+1;t=t<10?"0"+t:t;var s=e.getDate();s=s<10?"0"+s:s;var r=e.getHours();r=r<10?"0"+r:r;var i=e.getMinutes();i=i<10?"0"+i:i;var o=e.getSeconds();return o=o<10?"0"+o:o,a+"-"+t+"-"+s}return e}}},p=f,g=(t("6df2"),t("2877")),u=Object(g["a"])(p,s,r,!1,null,null,null);a["default"]=u.exports},"3e62":function(e,a,t){},"48e3":function(e,a,t){e.exports=t.p+"static/img/mo_man.2a3be7d6.png"},"5d58":function(e,a,t){e.exports=t("d8d6")},"67bb":function(e,a,t){e.exports=t("f921")},"6df2":function(e,a,t){"use strict";t("3e62")}}]);