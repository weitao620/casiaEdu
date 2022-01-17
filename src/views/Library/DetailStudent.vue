<template>
  <div class="add_student_wrap">
    <div class="com_title">
      <div class="c_titles">
        <div class="com_cir">
          <img src="../../assets/images/index_top.png" alt="" />
        </div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>基础设置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/library/class' }"
            >班级管理</el-breadcrumb-item
          >
          <el-breadcrumb-item>学生详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="person_main">
      <div class="person_box">
        <div class="s_logo">
          <div class="school_logo">
            <div class="s_logo_bg">
              <img v-if="formSearch.headIcon != '' && formSearch.headIcon != 'data:image;base64,'" :src="formSearch.headIcon" alt="" />
              <img v-else :src="formSearch.gender == 0 ? require('../../assets/images/mo_woman.png') : require('../../assets/images/mo_man.png')" alt="" />
            </div>
          </div>
          <el-upload
            ref="imgStudentUpload"
            class="upload-demo"
            action=""
            :auto-upload="false"
            :limit="1"
            :show-file-list="false"
            :on-change="imgBroadcastChange"
            accept="image/jpg,image/png,image/jpeg"
          >
            <el-button size="small" @click="clearFiles" type="primary">更换头像</el-button>
          </el-upload>
          <!-- <el-upload
            class="upload-demo"
            :action="upUrl"
            :on-success="imgSuccess"
            :on-error="uploadError"
            :before-upload="upLoadingimg"
            :data="upData"
            :limit="1"
            :show-file-list="false"
          >
            <el-button size="small" type="primary">更换头像</el-button>
          </el-upload> -->
        </div>
        <el-form
          label-position="right"
          class="person_contain"
          label-width="1.4rem"
          :model="formSearch"
        >
          <div class="person_msg">
            <img src="../../assets/images/personMsg.png" alt="" />
            基础信息
          </div>
          <el-form-item required label="学段：">
            <el-radio-group v-model="formSearch.level" @change="levleChange">
              <el-radio
                v-for="item in levelList"
                :key="item.Pid"
                :label="item.Pid"
                >{{ item.Name }}</el-radio
              >
            </el-radio-group>
          </el-form-item>
          <el-form-item required label="年级：">
            <el-radio-group v-model="formSearch.grade" @change="gradeChange">
              <el-radio
                v-for="item in gradeList"
                :key="item.Pid"
                :label="item.Pid"
                >{{ item.Name }}</el-radio
              >
            </el-radio-group>
          </el-form-item>
          <el-form-item required label="班级：">
            <el-radio-group
              class="asc_flex"
              v-model="formSearch.class"
              @change="classChange"
            >
              <el-radio
                v-for="item in classList"
                :key="item.Pid"
                :label="item.Pid"
                >{{ item.Name }}</el-radio
              >
            </el-radio-group>
          </el-form-item>
          <el-form-item required label="学生姓名：">
            <el-input
              v-model="formSearch.name"
              placeholder="请输入学生姓名"
            ></el-input>
            <div style="width:4rem;height:0.36rem"></div>
            <div class="tip_left" v-show="nameFlag">
              <div class="tip_msg">
                <img src="../../assets/images/x.png" alt="" />
                请输入学生姓名
              </div>
            </div>
          </el-form-item>
          <el-form-item required label="性别：">
            <el-radio-group v-model="formSearch.gender">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item class="time_data time_bg1" label="出生日期：" required>
            <el-date-picker
              v-model="formSearch.birth"
              type="date"
              placeholder="请选择出生日期"
              format="yyyy年MM月dd日"
              :editable="false"
              :clearable="false"
            >
            </el-date-picker>
            <div style="width:4rem;height:0.36rem"></div>
            <div class="tip_left" v-show="birthFlag">
              <div class="tip_msg">
                <img src="../../assets/images/x.png" alt="" />
                请选择出生日期
              </div>
            </div>
          </el-form-item>
          <el-form-item class="time_data time_bg1" label="入学年月：" required>
            <el-date-picker
              v-model="formSearch.enterYear"
              type="month"
              placeholder="请选择入学年月"
              format="yyyy年MM月"
              :editable="false"
              :clearable="false"
            >
            </el-date-picker>
            <div style="width:4rem;height:0.36rem"></div>
            <div class="tip_left" v-show="enterYearFlag">
              <div class="tip_msg">
                <img src="../../assets/images/x.png" alt="" />
                请选择入学年月
              </div>
            </div>
          </el-form-item>
          <el-form-item required label="学籍号：">
            <el-input
              v-model="formSearch.passport"
              placeholder="请输入学籍号"
            ></el-input>
            <div style="width:4rem;height:0.36rem"></div>
            <div class="tip_left" v-show="passportFlag">
              <div class="tip_msg">
                <img src="../../assets/images/x.png" alt="" />
                请输入学籍号且不少于6位
              </div>
            </div>
          </el-form-item>
          <el-form-item label="账号：">
            <el-input
              v-model="formSearch.passport"
              placeholder="默认与学籍号一致"
              disabled
            ></el-input>
            <!-- <div style="width:4rem;height:0.36rem"></div>
            <div class="tip_left" v-show="acountFlag">
              <div class="tip_msg">
                <img src="../../assets/images/x.png" alt="" />
                请输入登录账号
              </div>
            </div> -->
          </el-form-item>
          <el-form-item label="登录密码：">
            <el-input
              type="password"
              v-model="formSearch.password"
              placeholder="默认为:登录账号后6位"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号码：">
            <el-input
              v-model="formSearch.phone"
              placeholder="请输入手机号码"
            ></el-input>
            <div style="width:4rem;height:0.36rem"></div>
            <div class="tip_left" v-show="phoneFlag">
              <div class="tip_msg">
                <img src="../../assets/images/x.png" alt="" />
                手机号格式有误
              </div>
            </div>
          </el-form-item>
          <el-form-item label="邮箱地址：">
            <el-input
              v-model="formSearch.email"
              placeholder="请输入邮箱地址"
            ></el-input>
            <div style="width:4rem;height:0.36rem"></div>
            <div class="tip_left" v-show="emailFlag">
              <div class="tip_msg">
                <img src="../../assets/images/x.png" alt="" />
                邮箱格式有误
              </div>
            </div>
          </el-form-item>
          <div class="person_msg">
            <img src="../../assets/images/personMsg.png" alt="" />
            辅助信息
          </div>
          <el-form-item label="籍贯：" prop="birthPlace">
            <section class="address-select-list">
              <el-select
                class="adress-select"
                v-model="formSearch.birthPlace"
                placeholder="请选择省"
              >
                <el-option
                  v-for="item in provinceData"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name"
                ></el-option>
              </el-select>
            </section>
            <div style="width:4rem;height:0.36rem"></div>
          </el-form-item>
          <el-form-item label="备注：">
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入内容"
              v-model="formSearch.remark"
              maxlength="200"
              show-word-limit
            >
            </el-input>
            <div style="width:4rem;height:0.36rem"></div>
          </el-form-item>
          <el-form-item class="sub_center">
            <el-button type="primary" @click="addSubmit">保存</el-button>
            <el-button type="primary" class="resets" @click="goBack"
              >取消</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Url from "@/assets/js/url.js";
import areaJson from "@/assets/js/area.json";
export default {
  name: "person",
  data() {
    return {
      diaLogForm: {
        file: "",
        imgBase64: ""
      },
      upUrl: "https://jsonplaceholder.typicode.com/posts/",
      upData: {},
      photo:
        "https://static.waijiaoyi.com/wjy2017/aidaka/c307b2d0af151492b10a2604a1573ba1?x-oss-process=image/resize,m_fill,w_300,h_300",

      // ------
      acountFlag: false,
      nameFlag: false,
      birthFlag: false,
      enterYearFlag: false,
      passwordFlag: false,
      numberFlag: false,
      sexFlag: false,
      phoneFlag: false,
      emailFlag: false,
      // --------
      passportFlag: false,
      oldPassFlag: false,
      oldRight: false,
      newPassFlag: false,
      newRight1: false,
      newRight2: false,
      newRight3: false,
      twoPassFlag: false,
      formSearch: {
        level: "",
        grade: "",
        class: "",
        sectionName: "",
        gradeName: "",
        className: "",
        name: "",
        gender: 1,
        birth: "",
        enterYear: "",
        passport: "",
        acount: "",
        password: "",
        phone: "",
        email: "",
        birthPlace: "",
        remark: "",
        headIcon: ""
      },
      provinceData: "",
      cityData: "",
      areaData: "",
      name: "",
      remark: "",
      levelList: [],
      gradeList: [],
      classList: []
    };
  },
  created() {
    // aaa
  },
  mounted() {
    this.passport = this.$route.params.userID;
    this.getUserInfo();
    this.initAddressFrom(areaJson);
    // aaa
  },
  methods: {
    clearFiles () {
      this.$refs['imgStudentUpload'].clearFiles();
    },
    // 图片选择后 保存在 diaLogForm.imgBroadcastList 对象中
    imgBroadcastChange(file, fileList) {
      console.log(file);
      console.log(fileList);
      if (file.size > 512000) {
        this.$message.error('上传的头像太大，建议500KB以下');
        this.clearFiles()
        return false
      }
      this.diaLogForm.file = file;
      this.uploadImgToBase64(file.raw);
      console.log(this.diaLogForm);
    },
    uploadImgToBase64(file) {
      let that = this;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        // 图片转base64完成后返回reader对象
        that.diaLogForm.imgBase64 = this.result;
        that.formSearch.headIcon = this.result;
      };
    },
    levleChange(val) {
      console.log(val);
      this.choseLevel(val);
    },
    gradeChange(val) {
      console.log(val);
      this.choseGrade(val);
    },
    classChange(val) {
      console.log(val);
      this.formSearch.class = val;
    },
    // 上传LOGO
    async upLoadingimg(e, a) {
      this.$message({
        type: "warning",
        message: "暂未开发!"
      });
      return false;
      // console.log(e)
      // console.log(a)
      // const isLt1M = e.size / 1024 / 5 < 1025;
      // var test = e.name.substring(e.name.lastIndexOf(".") + 1);
      // var arr = ["jpg", "jpeg", "png", "gif"];
      // if (arr.indexOf(test) == -1) {
      //   this.$message.error("不支持" + test + "格式的图片");
      //   return;
      // }
      // if (!isLt1M) {
      //   this.$message.error("图片大小不能超过5M!");
      // } else {
      //   console.log(111);
      //   this.uploadFa = false;
      //   this.loading = this.$loading({
      //     lock: true,
      //     text: "上传中",
      //     spinner: "el-icon-loading",
      //     background: "rgba(0, 0, 0, 0.7)"
      //   });
      //   // const { data: res } = await this.$http.get(Url + "/upload/sign");
      //   var res = {
      //     fileKey: '1',
      //     signature: '2',
      //     policy: '3',
      //     accessid: '4'
      //   }
      //   console.log(res);
      //   this.upData.key = res.fileKey;
      //   this.upData.Signature = res.signature;
      //   this.upData.policy = res.policy;
      //   this.upData.OSSAccessKeyId = res.accessid;
      //   // this.form.answer1image = res.fileKey;
      //   // var kk=res.host + "/" + this.form.answer1image;
      //   this.imgs = res.fileKey;

      //   // this.imgs.answer1ImageURL = "";
      //   // this.form.answer1ImageURL = kk;
      //   //   setTimeout(function(){
      //   //
      //   //   }, 300);
      // }
    },
    imgSuccess(res, file) {
      // 图片上传成功
      console.log(res, file);
      setTimeout(() => {
        this.loading.close();
        this.formSearch.headIcon =
          "https://static.waijiaoyi.com/wjy2017/i2351ef5af5d2acf7f36e605292caa951.jpg";
      }, 2000);
      // this.$http
      //   .post(Url + "/stock/createstock", {
      //     filekey: this.imgs,
      //     projectid: 1
      //   })
      //   .then(res => {
      //     console.log(res);
      //     // this.getImgs();
      //   })
      //   .catch(res => {
      //     console.log(res);
      //   });
    },
    uploadError(res, file) {
      console.log(res);
      this.loading.close();
      this.$message.error("上传失败，请重新上传");
    },
    // 初始化表单信息
    initAddressFrom(data) {
      console.log(data);
      this.provinceData = data;
      // this.provinceData.map(e => {
      //   if (this.formSearch.province == e.name) {
      //     this.cityData = e.cityList;
      //   }
      // });
      // this.cityData.map(e => {
      //   if (this.formSearch.city == e.name) {
      //     this.areaData = e.areaList;
      //   }
      // });
    },
    // 选择省
    chooseProvince(value) {
      console.log(value);
      if (value == "香港特别行政区") {
        this.selectCityDisabled = true;
      } else {
        this.selectCityDisabled = false;
      }
      this.cityData = [];
      this.areaData = [];
      this.formSearch.city = "";
      this.formSearch.district = "";
      console.log(this.provinceData);
      this.provinceData.map(e => {
        if (value == e.name) {
          this.cityData = e.city;
          return false;
        }
      });
    },
    // 选择市
    chooseCity(value) {
      console.log(value);
      console.log(this.cityData);
      this.formSearch.district = "";
      this.cityData.map(e => {
        if (value == e.name) {
          this.areaData = e.area;
          console.log(this.areaData);
          return false;
        }
      });
    },

    getUserInfo() {
      let that = this;
      that.$http
        .get(Url + "/aimw/student/getStudentProfile", {
          params: {
            passport: that.passport
          }
        })
        .then(res => {
          console.log(res)
          var data = res.data.data;
          if (res.data.code == 0) {
            that.formSearch = {
              level: data.section,
              grade: data.grade,
              class: data.class,
              sectionName: data.sectionName,
              gradeName: data.gradeName,
              className: data.className,
              name: data.name,
              gender: data.gender,
              birth: data.birth,
              enterYear: data.enterYear,
              passport: data.passport,
              acount: data.acount,
              password: data.password,
              phone: data.phone,
              email: data.email,
              birthPlace: data.birth_place,
              remark: data.remark,
              headIcon: 'data:image;base64,' + data.headIcon
            }
          }
          this.threeChange();
        })
        .catch(res => {
          console.log(res);
        });
      // var data = JSON.parse(localStorage.getItem("studyDetail"));
      // console.log(data);
      // that.formSearch = {
      //   level: data.section,
      //   grade: data.grade,
      //   class: data.class,
      //   sectionName: data.sectionName,
      //   gradeName: data.gradeName,
      //   className: data.className,
      //   name: data.name,
      //   gender: data.gender,
      //   birth: data.birth,
      //   enterYear: data.enterYear,
      //   passport: data.passport,
      //   acount: data.acount,
      //   password: data.password,
      //   phone: data.phone,
      //   email: data.email,
      //   birthPlace: data.birth_place,
      //   remark: data.remark,
      //   headIcon: 'data:image;base64,' + data.headIcon
      // };
    },
    userChange(val) {
      if (val != "") {
        this.passportFlag = false;
      }
      console.log(val);
    },
    phoneChange(val) {
      if (val != "") {
        this.phoneFlag = false;
      }
      console.log(val);
    },
    emailChange(val) {
      if (val != "") {
        this.emailFlag = false;
      }
      console.log(val);
    },
    addSubmit() {
      let that = this;
      console.log(this.levelList);
      this.acountFlag = this.nameFlag = this.passwordFlag = this.phoneFlag = this.emailFlag = this.birthFlag = this.enterYearFlag = false;
      var regp = /^1[3456789]\d{9}$/;
      var rege = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.formSearch.name == "") {
        this.nameFlag = true;
        return false;
      }
      if (this.formSearch.birth == "") {
        this.birthFlag = true;
        return false;
      }
      if (this.formSearch.enterYear == "") {
        this.enterYearFlag = true;
        return false;
      }
      if (this.formSearch.passport == "" || this.formSearch.passport.length < 6) {
        this.passportFlag = true;
        return false;
      }
      if (this.formSearch.phone != "" && !regp.test(this.formSearch.phone)) {
        this.phoneFlag = true;
        return false;
      }
      if (this.formSearch.email != "" && !rege.test(this.formSearch.email)) {
        this.emailFlag = true;
        return false;
      }

      for (let i in this.levelList) {
        if (this.levelList[i].Pid == this.formSearch.level) {
          this.formSearch.sectionName = this.levelList[i].Name;
        }
      }
      for (let i in this.gradeList) {
        if (this.gradeList[i].Pid == this.formSearch.grade) {
          this.formSearch.gradeName = this.gradeList[i].Name;
        }
      }
      for (let i in this.classList) {
        if (this.classList[i].Pid == this.formSearch.class) {
          this.formSearch.className = this.classList[i].Name;
        }
      }
      if (this.formSearch.password == "") {
        this.formSearch.password = this.formSearch.passport.substring(
          this.formSearch.passport.length - 6
        );
      }
      var param = {
        name: this.formSearch.name,
        passport: this.formSearch.passport,
        // acount: this.formSearch.acount,
        password: this.formSearch.password,
        gender: this.formSearch.gender,
        phone: this.formSearch.phone,
        email: this.formSearch.email,
        birth: this.formTimes(this.formSearch.birth),
        birthPlace: this.formSearch.birthPlace,
        headIcon: this.formSearch.headIcon.split('base64,')[1],
        sectionName: this.formSearch.sectionName,
        gradeName: this.formSearch.gradeName,
        className: this.formSearch.className,
        section: this.formSearch.level,
        grade: this.formSearch.grade,
        class: this.formSearch.class,
        enterYear: this.formTimes(this.formSearch.enterYear),
        remark: this.formSearch.remark
      };
      console.log(param);
      that.$http
        .put(Url + "/aimw/student/updateStudentInfo", param)
        .then(res => {
          var data = res.data;
          if (data.code == 0) {
            console.log(data);
            this.$message.success("修改成功");
            this.$router.push({
              path: "/library/class"
            });
          } else {
            this.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    goBack() {
      this.$router.push({
        path: "/library/class"
      });
    },
    // 学段 年级 班级 三级联动
    choseLevel(value) {
      console.log(value);
      this.formSearch.level = value;
      this.gradeList = [];
      this.classList = [];
      this.formSearch.grade = "";
      this.formSearch.class = "";
      this.levelList.map(e => {
        if (value == e.Pid) {
          this.gradeList = e.list;
          return false;
        }
      });
      console.log(this.gradeList);
      let gradeNum = this.gradeList[0].Pid;
      this.choseGrade(gradeNum);
    },
    choseGrade(value) {
      console.log(value);
      this.formSearch.grade = value;
      this.classList = [];
      this.formSearch.class = "";
      this.gradeList.map(e => {
        if (value == e.Pid) {
          this.classList = e.list;
          return false;
        }
      });
      console.log(this.classList);
      if (this.classList) {
        this.formSearch.class = this.classList[0].Pid;
      } else {
        this.formSearch.class = "";
      }
    },
    threeChange() {
      let that = this;
      var param = {
        passport: localStorage.getItem("passport")
      };
      this.$http
        .get(Url + "/aimw/school/listSchoolOrg", {
          params: param
        })
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            if (data.data) {
              console.log(JSON.parse(data.data).schoolOrg);
              let schoolOrg = JSON.parse(data.data).schoolOrg;
              let child0 = [];
              for (let j in schoolOrg) {
                if (schoolOrg[j].Mark == 1) {
                  child0.push(schoolOrg[j]);
                }
              }
              schoolOrg = child0 // 只剩下在读了
              for (let j in schoolOrg) {
                // 现在只有一个在读
                let list1 = schoolOrg[j].list
                let child1 = []
                for (let k in list1) {
                  if (list1[k].Mark == 1) {
                    child1.push(list1[k]);
                  }
                }
                schoolOrg[j].list = child1
              }
              // 这时的数组里拿到了有权限的初中、高中没权限
              for (let j in schoolOrg) {
                for (let k in schoolOrg[j].list) {
                  let child2 = []
                  for (let l in schoolOrg[j].list[k].list) {
                    if (schoolOrg[j].list[k].list[l].Mark == 1) {
                      child2.push(schoolOrg[j].list[k].list[l]);
                    }
                  }
                  schoolOrg[j].list[k].list = child2
                }
              }
              for (let j in schoolOrg) {
                for (let k in schoolOrg[j].list) {
                  for (let l in schoolOrg[j].list[k].list) {
                    let child3 = []
                    for (let m in schoolOrg[j].list[k].list[l].list) {
                      if (schoolOrg[j].list[k].list[l].list[m].Mark == 1) {
                        child3.push(schoolOrg[j].list[k].list[l].list[m]);
                      }
                    }
                    schoolOrg[j].list[k].list[l].list = child3
                  }
                }
              }
              let levelArr = [];
              schoolOrg.forEach((item, index) => {
                let orgin1 = item.list;
                orgin1.forEach((item1, index1) => {
                  levelArr.push(item1);
                });
              });
              console.log("levelArr");
              that.levelList = levelArr;
              this.levelList.map(e => {
                if (that.formSearch.level == e.Pid) {
                  this.gradeList = e.list;
                  return false;
                }
              });
              this.gradeList.map(e => {
                if (that.formSearch.grade == e.Pid) {
                  this.classList = e.list;
                  return false;
                }
              });
            }
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    formTimes(date) {
      console.log(date);
      if (typeof date == "object") {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var d = date.getDate();
        d = d < 10 ? "0" + d : d;
        var h = date.getHours();
        h = h < 10 ? "0" + h : h;
        var minute = date.getMinutes();
        minute = minute < 10 ? "0" + minute : minute;
        var second = date.getSeconds();
        second = second < 10 ? "0" + second : second;
        // + ' ' + h + ':' + minute + ':' + second
        return y + "-" + m + "-" + d;
      } else {
        return date;
      }
    }
  }
};
</script>

<style lang="less">
// .add_teacher_wrap {
//   text-align: left;
//   margin: 0 0.22rem;
//   // 头部标题
//   .com_title {
//     height: 0.24rem;
//     font-size: 0.2rem;
//     color: #354b70;
//     font-weight: 400;
//     display: flex;
//     align-items: center;
//     margin: 0.18rem 0;
//     .c_titles {
//       flex: 1;
//       display: flex;
//       font-size: 0.2rem;
//       align-items: center;
//     }
//   }
//   //主要内容区
//   .person_main {
//     background: #ffffff;
//     box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
//     border-radius: 4px;
//     padding: 0.26rem 0.4rem 0.4rem;
//     margin-bottom: 0.22rem;
//     .person_box {
//       width: 12.6rem;
//       margin: 0 auto;
//       padding-left: 3.7rem;
//       position: relative;
//       // 左边头像
//       .s_logo {
//         position: absolute;
//         left: 1.8rem;
//         top: 0;
//         width: 1.4rem;
//         .school_logo {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           margin: 0 auto 0.23rem;
//           width: 1.4rem;
//           height: 1.4rem;
//           background: #ffffff;
//           box-shadow: 0px 2px 16px 0px rgba(42, 150, 236, 0.27);
//           border-radius: 50%;
//           .s_logo_bg {
//             width: 0.96rem;
//             height: 0.96rem;
//             background: linear-gradient(0deg, #c4ecff, #97cdff);
//             border-radius: 50%;
//             overflow: hidden;
//             img {
//               width: 100%;
//               height: 100%;
//             }
//           }
//         }
//         .el-button {
//           display: block;
//           margin: 0 auto;
//           width: 1.4rem;
//           padding: 0.09rem 0.1rem;
//         }
//       }
//       /*左三角*/
//       .tip_left {
//         position: absolute;
//         left: 3.6rem;
//         top: 0;
//         padding: 0.05rem 0.1rem;
//         font-size: 0.14rem;
//         font-family: Source Han Sans CN;
//         font-weight: 400;
//         color: #7786ac;
//         min-height: 0.34rem;
//         line-height: 0.24rem;
//         border: 0.01rem solid #e1e9ff;
//         background-color: #fff;
//         border-radius: 5px;
//         -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
//         box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
//       }

//       .tip_left::before,
//         .tip_left::after  {
//         content: "";
//         display: block;
//         border-width: 0.06rem;
//         position: absolute;
//         left: -0.13rem;
//         top: 0.12rem;
//         border-style: dashed solid solid dashed;
//         border-color: transparent #e1e9ff transparent transparent;
//         font-size: 0;
//         line-height: 0;
//       }

//       .tip_left::after  {
//         left: -0.11rem;
//         border-color: transparent #fff transparent transparent;
//       }
//       .tip_msg {
//         font-size: 0.14rem;
//         img {
//           width: 0.12rem;
//           height: 0.12rem;
//         }
//       }
//       // 表单
//       .person_contain {
//         .person_msg {
//           width: 4.9rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 0.2rem;
//           font-family: Source Han Sans CN;
//           font-weight: 400;
//           color: #354b70;
//           margin: 0.2rem 0;
//           img {
//             width: 0.38rem;
//             height: 0.38rem;
//             margin-right: 0.07rem;
//           }
//         }
//         .address-select-list {
//           display: flex;
//           .el-select {
//             width: 100%;
//             margin-right: 0.1rem;
//           }
//           .el-select:last-child {
//             margin-right: 0;
//           }
//           .el-input__suffix {
//             right: 0.05rem;
//           }
//           .el-select__caret {
//             font-size: 0.14rem;
//           }
//           .el-input__icon {
//             width: 0.25rem;
//             line-height: 0.36rem;
//           }
//         }
//         .type-select-list {
//           .el-select {
//             width: 100%;
//           }
//         }
//         .el-radio {
//           line-height: 0.24rem;
//           display: flex;
//           align-items: center;
//         }
//         .el-radio__label {
//           font-size: 0.16rem;
//           font-family: Source Han Sans CN;
//           font-weight: 400;
//           color: #7786ac;
//         }
//         .el-radio__inner {
//           width: 0.2rem;
//           height: 0.2rem;
//         }
//         .el-radio__inner::after {
//           width: 0.08rem;
//           height: 0.08rem;
//         }
//         .el-textarea__inner {
//           font-size: 0.16rem;
//         }
//       }
//       .el-input {
//         height: 0.36rem;
//         width: 3.5rem;
//       }
//       .el-form-item__label {
//         font-size: 0.16rem;
//         line-height: 0.36rem;
//         font-family: Source Han Sans CN;
//         font-weight: 400;
//         color: #7786ac;
//         padding-right: 0;
//       }
//       .el-form-item__content {
//         line-height: 0.36rem;
//         display: flex;
//         .el-radio-group {
//           height: 0.36rem;
//           display: flex;
//           align-items: center;
//         }
//         .el-textarea {
//           width: 3.5rem;
//         }
//       }
//       .el-input__inner {
//         height: 0.36rem;
//         line-height: 0.36rem;
//         font-size: 0.16rem;
//         font-family: Source Han Sans CN;
//         font-weight: 400;
//         color: #354b70;
//       }
//       .el-input__inner:focus {
//         border-color: #39a1fe;
//       }
//       .el-button {
//         border: 0.01rem solid #dcdfe6;
//         padding: 0.09rem 0.27rem;
//         font-size: 0.16rem;
//         border-radius: 4px;
//         background: linear-gradient(263deg, #0075ff, #00c2ff);
//         box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
//       }
//       .el-button.resets {
//         margin-left: 0.38rem;
//         background: linear-gradient(261deg, #b8d5f5, #8fb1d7);
//         box-shadow: 0px 2px 10px 0px rgba(171, 196, 227, 0.45);
//       }
//     }
//   }
//   .sub_center {
//     width: 4.9rem;
//     display: flex;
//     justify-content: center;
//     .el-form-item__content {
//       margin-left: 0 !important;
//       text-align: center;
//     }
//   }
// }
.add_student_wrap {
  text-align: left;
  margin: 0 0.22rem;
  // 头部标题
  .com_title {
    height: 0.24rem;
    font-size: 0.2rem;
    color: #354b70;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin: 0.18rem 0;
    .c_titles {
      flex: 1;
      display: flex;
      font-size: 0.2rem;
      align-items: center;
    }
  }
  //主要内容区
  .person_main {
    background: #ffffff;
    box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
    border-radius: 4px;
    padding: 0.26rem 0.4rem 0.4rem;
    margin-bottom: 0.22rem;
    .person_box {
      width: 12.6rem;
      margin: 0 auto;
      padding-left: 3.7rem;
      position: relative;
      // 左边头像
      .s_logo {
        position: absolute;
        left: 1.8rem;
        top: 0;
        width: 1.4rem;
        .school_logo {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 0.23rem;
          width: 1.4rem;
          height: 1.4rem;
          background: #ffffff;
          box-shadow: 0px 2px 16px 0px rgba(42, 150, 236, 0.27);
          border-radius: 50%;
          .s_logo_bg {
            width: 1.4rem;
            height: 1.4rem;
            background: linear-gradient(0deg, #c4ecff, #97cdff);
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 1.46rem;
              height: 1.46rem;
            }
          }
        }
        .el-button {
          display: block;
          margin: 0 auto;
          width: 1.4rem;
          padding: 0.09rem 0.1rem;
        }
      }
      /*左三角*/
      .tip_left {
        position: absolute;
        left: 3.6rem;
        top: 0;
        padding: 0.05rem 0.1rem;
        font-size: 0.14rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #7786ac;
        min-height: 0.34rem;
        line-height: 0.24rem;
        border: 0.01rem solid #e1e9ff;
        background-color: #fff;
        border-radius: 5px;
        -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      }

      .tip_left::before,
        .tip_left::after  {
        content: "";
        display: block;
        border-width: 0.06rem;
        position: absolute;
        left: -0.13rem;
        top: 0.12rem;
        border-style: dashed solid solid dashed;
        border-color: transparent #e1e9ff transparent transparent;
        font-size: 0;
        line-height: 0;
      }

      .tip_left::after  {
        left: -0.11rem;
        border-color: transparent #fff transparent transparent;
      }
      .tip_msg {
        font-size: 0.14rem;
        img {
          width: 0.12rem;
          height: 0.12rem;
        }
      }
      // 表单
      .person_contain {
        .person_msg {
          width: 4.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.2rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #354b70;
          margin: 0.2rem 0;
          img {
            width: 0.38rem;
            height: 0.38rem;
            margin-right: 0.07rem;
          }
        }
        .address-select-list {
          display: flex;
          .el-select {
            width: 100%;
            margin-right: 0.1rem;
          }
          .el-select:last-child {
            margin-right: 0;
          }
          .el-input__suffix {
            right: 0.05rem;
          }
          .el-select__caret {
            font-size: 0.14rem;
          }
          .el-input__icon {
            width: 0.25rem;
            line-height: 0.36rem;
          }
        }
        .type-select-list {
          .el-select {
            width: 100%;
          }
        }
        .el-radio {
          line-height: 0.36rem;
          display: flex;
          align-items: center;
        }
        .el-radio__label {
          font-size: 0.16rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #7786ac;
        }
        .el-radio__inner {
          width: 0.2rem;
          height: 0.2rem;
        }
        .el-radio__inner::after {
          width: 0.08rem;
          height: 0.08rem;
        }
        .el-textarea__inner {
          font-size: 0.16rem;
        }
      }
      .el-input {
        height: 0.36rem;
        width: 3.5rem;
      }
      .el-form-item__label {
        font-size: 0.16rem;
        line-height: 0.36rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #7786ac;
        padding-right: 0;
      }
      .el-form-item__content {
        line-height: 0.36rem;
        display: flex;
        .el-radio-group {
          height: auto;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        .asc_flex {
          .el-radio {
            width: 1.1rem;
          }
        }
        .el-textarea {
          width: 3.5rem;
        }
      }
      .el-input__inner {
        height: 0.36rem;
        line-height: 0.36rem;
        font-size: 0.16rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #354b70;
      }
      .el-input__inner:focus {
        border-color: #39a1fe;
      }
      .el-button {
        border: 0.01rem solid #dcdfe6;
        padding: 0.09rem 0.27rem;
        font-size: 0.16rem;
        border-radius: 4px;
        background: linear-gradient(263deg, #0075ff, #00c2ff);
        box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
      }
      .el-button.resets {
        margin-left: 0.38rem;
        background: linear-gradient(261deg, #b8d5f5, #8fb1d7);
        box-shadow: 0px 2px 10px 0px rgba(171, 196, 227, 0.45);
      }
    }
  }
  .sub_center {
    width: 4.9rem;
    display: flex;
    justify-content: center;
    .el-form-item__content {
      margin-left: 0 !important;
      text-align: center;
    }
  }
}
</style>
