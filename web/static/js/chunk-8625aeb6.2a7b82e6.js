(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8625aeb6"],{"2fdb":function(o,t,e){"use strict";var a=e("5ca1"),s=e("d2c8"),i="includes";a(a.P+a.F*e("5147")(i),"String",{includes:function(o){return!!~s(this,o,i).indexOf(o,arguments.length>1?arguments[1]:void 0)}})},5147:function(o,t,e){var a=e("2b4c")("match");o.exports=function(o){var t=/./;try{"/./"[o](t)}catch(e){try{return t[a]=!1,!"/./"[o](t)}catch(s){}}return!0}},6762:function(o,t,e){"use strict";var a=e("5ca1"),s=e("c366")(!0);a(a.P,"Array",{includes:function(o){return s(this,o,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")("includes")},"70d9":function(o,t,e){"use strict";e("9296")},9296:function(o,t,e){},d2c8:function(o,t,e){var a=e("aae3"),s=e("be13");o.exports=function(o,t,e){if(a(t))throw TypeError("String#"+e+" doesn't accept regex!");return String(s(o))}},dc53:function(o,t,e){"use strict";e.r(t);var a=function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("div",{staticClass:"school_wrap"},[a("div",{staticClass:"com_title"},[a("div",{staticClass:"c_titles"},[o._m(0),a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[o._v("基础设置")]),a("el-breadcrumb-item",[o._v("学校信息")])],1)],1)]),a("div",{staticClass:"person_main"},[a("div",{staticClass:"person_box"},[a("div",{staticClass:"s_logo"},[a("div",{staticClass:"school_logo"},[a("div",{staticClass:"s_logo_bg"},[o.formSchool.headIcon?a("img",{attrs:{src:o.formSchool.headIcon,alt:""}}):a("img",{attrs:{src:e("cf05"),alt:""}})])]),a("el-upload",{ref:"imgSchoolUpload",staticClass:"upload-demo",attrs:{action:"","auto-upload":!1,limit:1,"show-file-list":!1,"on-change":o.imgBroadcastChange,accept:"image/jpg,image/png,image/jpeg"}},[o.power2?a("el-button",{attrs:{size:"small",type:"primary"},on:{click:o.clearFiles}},[o._v("更换LOGO")]):o._e()],1)],1),a("el-form",{staticClass:"person_contain",attrs:{"label-position":"right","label-width":"0.98rem",model:o.formSchool}},[a("div",{staticClass:"person_msg"},[a("img",{attrs:{src:e("7c3b"),alt:""}}),o._v("\n          学校信息\n        ")]),a("el-form-item",{attrs:{label:"学校名称："}},[a("el-input",{attrs:{placeholder:"请输入学校名称"},on:{input:o.userChange},model:{value:o.formSchool.name,callback:function(t){o.$set(o.formSchool,"name",t)},expression:"formSchool.name"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:o.passportFlag,expression:"passportFlag"}],staticClass:"tip_left"},[a("div",{staticClass:"tip_msg",staticStyle:{width:"0.88rem"}},[a("img",{attrs:{src:e("32e5"),alt:""}}),o._v("\n              请输入学校名称\n            ")])])],1),a("el-form-item",{attrs:{label:"学校官网："}},[a("el-input",{attrs:{placeholder:"请输入学校官网"},on:{input:o.phoneChange},model:{value:o.formSchool.website,callback:function(t){o.$set(o.formSchool,"website",t)},expression:"formSchool.website"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:o.phoneFlag,expression:"phoneFlag"}],staticClass:"tip_left"},[a("div",{staticClass:"tip_msg",staticStyle:{width:"1.44rem"}},[a("img",{attrs:{src:e("32e5"),alt:""}}),o._v("\n              请输入学校官网\n            ")])])],1),a("el-form-item",{attrs:{label:"所在地区："}},[a("section",{staticClass:"address-select-list"},[a("el-select",{staticClass:"adress-select",attrs:{placeholder:"请选择省"},on:{change:o.chooseProvince},model:{value:o.formSchool.region,callback:function(t){o.$set(o.formSchool,"region",t)},expression:"formSchool.region"}},o._l(o.provinceData,(function(o){return a("el-option",{key:o.name,attrs:{label:o.name,value:o.name}})})),1),a("el-select",{staticClass:"adress-select",attrs:{placeholder:"请选择市"},on:{change:o.chooseCity},model:{value:o.formSchool.city,callback:function(t){o.$set(o.formSchool,"city",t)},expression:"formSchool.city"}},o._l(o.cityData,(function(o){return a("el-option",{key:o.name,attrs:{label:o.name,value:o.name}})})),1),a("el-select",{staticClass:"adress-select",attrs:{placeholder:"请选择区"},model:{value:o.formSchool.district,callback:function(t){o.$set(o.formSchool,"district",t)},expression:"formSchool.district"}},o._l(o.areaData,(function(o){return a("el-option",{key:o,attrs:{label:o,value:o}})})),1)],1)]),a("el-form-item",{attrs:{label:"学校类型："}},[a("section",{staticClass:"type-select-list"},[a("el-select",{staticClass:"type-select",attrs:{placeholder:"请选择学校类型"},model:{value:o.formSchool.type,callback:function(t){o.$set(o.formSchool,"type",t)},expression:"formSchool.type"}},o._l(o.typeData,(function(o){return a("el-option",{key:o.typeDescribe,attrs:{label:o.typeDescribe,value:o.typeId}})})),1)],1)]),o.power1?a("el-form-item",{staticClass:"sub_center"},[a("el-button",{attrs:{type:"primary"},on:{click:o.onSubmit}},[o._v("保存")]),a("el-button",{staticClass:"resets",attrs:{type:"primary"},on:{click:o.goBack}},[o._v("取消")])],1):o._e()],1)],1)])])},s=[function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("div",{staticClass:"com_cir"},[a("img",{attrs:{src:e("becf"),alt:""}})])}],i=(e("28a5"),e("7f7f"),e("6762"),e("2fdb"),e("e86e")),l=e("99b1"),c={name:"person",data:function(){return{power1:!1,power2:!1,diaLogForm:{file:"",imgBase64:""},id:"",passportFlag:!1,phoneFlag:!1,emailFlag:!1,oldPassFlag:!1,oldRight:!1,newPassFlag:!1,newRight1:!1,newRight2:!1,newRight3:!1,twoPassFlag:!1,formSchool:{name:"",website:"",headIcon:"",region:"",city:"",district:"",type:""},provinceData:"",cityData:"",areaData:"",typeData:[],name:"",remark:""}},created:function(){},mounted:function(){this.powerData(),this.getSchoolInfo(),this.initAddressFrom(l)},methods:{powerData:function(){var o=JSON.parse(localStorage.getItem("userAuth")).menuAuthID;console.log(o),this.power1=o.includes(40101),this.power2=o.includes(40102)},clearFiles:function(){this.$refs["imgSchoolUpload"].clearFiles()},imgBroadcastChange:function(o,t){if(console.log(o),console.log(t),o.size>512e3)return this.$message.error("上传的头像太大，建议500KB以下"),this.clearFiles(),!1;this.diaLogForm.file=o,this.uploadImgToBase64(o.raw),console.log(this.diaLogForm)},uploadImgToBase64:function(o){var t=this,e=new FileReader;e.readAsDataURL(o),e.onload=function(){t.diaLogForm.imgBase64=this.result,t.formSchool.headIcon=this.result}},initAddressFrom:function(o){console.log(o),this.provinceData=o},chooseProvince:function(o){var t=this;console.log(o),this.selectCityDisabled="香港特别行政区"==o,this.cityData=[],this.areaData=[],this.formSchool.city="",this.formSchool.district="",console.log(this.provinceData),this.provinceData.map((function(e){if(o==e.name)return t.cityData=e.city,!1}))},chooseCity:function(o){var t=this;console.log(o),console.log(this.cityData),this.formSchool.district="",this.cityData.map((function(e){if(o==e.name)return t.areaData=e.area,console.log(t.areaData),!1}))},getSchoolInfo:function(){var o=this;o.$http.get(i["a"]+"/aimw/school/listSchoolInfo").then((function(t){console.log(t);var e=t.data.data;if(console.log(t.data.data),0==t.data.code){o.id=e.id,o.formSchool.name=e.name;var a=e.region.split("-");o.formSchool.region=a[0],o.chooseProvince(a[0]),o.formSchool.city=a[1],o.chooseCity(a[1]),o.formSchool.district=a[2],o.formSchool.type=e.type,o.formSchool.website=e.website,o.formSchool.headIcon="data:image;base64,"+e.headIcon,console.log(o.formSchool)}})).catch((function(o){console.log(o)})),o.$http.get(i["a"]+"/aimw/school/listSchoolType").then((function(t){var e=t.data.data;0==t.data.code&&(o.typeData=e)})).catch((function(o){console.log(o)}))},twoChange:function(o){o!=this.formSchool.oldPass?this.twoPassFlag=!0:this.twoPassFlag=!1},newChange:function(o){var t=this;console.log(o),console.log(o.indexOf("123456")),console.log(o.indexOf("123456wt")),console.log(o.indexOf("123456wt...")),-1!=o.indexOf("123456")?this.newRight1=!0:this.newRight1=!1,-1!=o.indexOf("123456wt")?this.newRight2=!0:this.newRight2=!1,-1!=o.indexOf("123456wt...")?(this.newRight3=!0,setTimeout((function(){t.newPassFlag=!1}),1e3)):(this.newRight3=!1,setTimeout((function(){t.newPassFlag=!0}),100))},newFcous:function(o){console.log(o),this.newPassFlag=!0},neBlur:function(o){console.log(o),this.newPassFlag=!1},oldChange:function(o){console.log(o),this.formSchool.oldPass=o,"123456"==o?(this.oldPassFlag=!0,this.oldRight=!0):"123456"==o&&""!=o||(this.oldPassFlag=!0,this.oldRight=!1)},userChange:function(o){""!=o&&(this.passportFlag=!1),console.log(o)},phoneChange:function(o){""!=o&&(this.phoneFlag=!1),console.log(o)},emailChange:function(o){""!=o&&(this.emailFlag=!1),console.log(o)},onSubmit:function(){var o=this,t=this;console.log(this.formSchool);var e={name:this.formSchool.name,website:this.formSchool.website,region:this.formSchool.region+"-"+this.formSchool.city+"-"+this.formSchool.district,headIcon:this.formSchool.headIcon.split("base64,")[1],schoolType:this.formSchool.type};""==t.id?t.$http.post(i["a"]+"/aimw/school/addSchoolInfo",e).then((function(t){var e=t.data;0==e.code?(console.log(e),o.getSchoolInfo()):o.$message.error(e.msg)})).catch((function(o){console.log(o)})):t.$http.put(i["a"]+"/aimw/school/updateSchoolInfo",e).then((function(t){var e=t.data;0==e.code?(console.log(e),o.$message.success("修改成功！"),o.getSchoolInfo()):o.$message.error(e.msg)})).catch((function(o){console.log(o)}))},goBack:function(){this.$router.push({path:"/library/index"})}}},n=c,r=(e("70d9"),e("2877")),h=Object(r["a"])(n,a,s,!1,null,null,null);t["default"]=h.exports}}]);