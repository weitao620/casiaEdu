<template>
  <div class="add_teacher_wrap">
    <div class="com_title">
      <div class="c_titles">
        <div class="com_cir">
          <img src="../../assets/images/index_top.png" alt="" />
        </div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>基础设置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/library/teacher' }">教师管理</el-breadcrumb-item>
          <el-breadcrumb-item>教师信息详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="person_main">
      <div class="person_box">
        <div class="s_logo">
          <div class="school_logo">
            <div class="s_logo_bg">
              <img v-if="formMsg.headIcon != '' && formMsg.headIcon != 'data:image;base64,'" :src="formMsg.headIcon" alt="" />
              <img v-else :src="formMsg.gender == 1 ? require('../../assets/images/mo_man.png') : require('../../assets/images/mo_woman.png')" alt="" />
            </div>
          </div>
          <el-upload
            ref="imgTeacherUpload"
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
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload> -->
        </div>
        <el-form
          label-position="right"
          class="person_contain"
          label-width="1.4rem"
          :model="formMsg"
        >
          <div class="person_msg">
            <img src="../../assets/images/personMsg.png" alt="" />
            基础信息
          </div>
          <el-form-item required label="登录账号：">
            <el-input
              v-model="formMsg.passport"
              placeholder="请输入登录账号"
              :disabled="formMsg.passport == 'administrator'"
            ></el-input>
            <div style="width:4rem;height:0.36rem"></div>
            <div class="tip_left" v-show="passportFlag">
              <div class="tip_msg">
                <img src="../../assets/images/x.png" alt="" />
                请输入登录账号且不少于6位
              </div>
            </div>
          </el-form-item>
          <el-form-item required label="教师姓名：">
            <el-input
              v-model="formMsg.name"
              placeholder="请输入教师姓名"
            ></el-input>
            <div style="width:4rem;height:0.36rem"></div>
            <div class="tip_left" v-show="nameFlag">
              <div class="tip_msg">
                <img src="../../assets/images/x.png" alt="" />
                请输入教师姓名
              </div>
            </div>
          </el-form-item>
          <el-form-item label="登录密码：">
            <el-input
              type="password"
              v-model="formMsg.password"
              placeholder="默认为:登录账号后6位"
            ></el-input>
          </el-form-item>
          <!-- <el-form-item required label="教职工编号：">
            <el-input
              v-model="formMsg.number"
              placeholder="请输入教职工编号"
            ></el-input>
            <div style="width:4rem;height:0.36rem"></div>
            <div class="tip_left" v-show="numberFlag">
              <div class="tip_msg">
                <img src="../../assets/images/x.png" alt="" />
                请输入教职工编号
              </div>
            </div>
          </el-form-item> -->
          <el-form-item required label="教师性别：">
            <el-radio-group v-model="formMsg.gender">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="手机号码：">
            <el-input
              v-model="formMsg.phone"
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
              v-model="formMsg.email"
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
                v-model="formMsg.birthPlace"
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
              v-model="formMsg.remark"
              maxlength="200"
              show-word-limit
            >
            </el-input>
            <div style="width:4rem;height:0.36rem"></div>
          </el-form-item>
          <el-form-item class="sub_center" v-if="power1">
            <el-button type="primary" @click="onSubmit">保存</el-button>
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
      power1: false,
      diaLogForm: {
        file: "",
        imgBase64: ""
      },
      upUrl: "https://jsonplaceholder.typicode.com/posts/",
      upData: {},
      photo: 'https://static.waijiaoyi.com/wjy2017/aidaka/c307b2d0af151492b10a2604a1573ba1?x-oss-process=image/resize,m_fill,w_300,h_300',

      // ------
      // acountFlag: false,
      nameFlag: false,
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
      formMsg: {
        passport: "",
        oldPassport: "",
        name: "",
        password: "",
        gender: "",
        phone: "",
        email: "",
        birthPlace: "",
        headIcon: "",
        remark: ""
      },
      provinceData: "",
      cityData: "",
      areaData: "",
      typeData: ["公私", "私立"],
      name: "",
      remark: ""
    };
  },
  created() {
    // aaa
  },
  mounted() {
    this.passport = this.$route.params.userID;
    this.powerData()
    this.getUserInfo();
    this.initAddressFrom(areaJson);
    // aaa
  },
  methods: {
    powerData() {
      let power = JSON.parse(localStorage.getItem("userAuth")).menuAuthID;
      console.log(power);
      this.power1 = power.includes(40203); // 教师管理--账号状态修改
    },
    clearFiles () {
      this.$refs['imgTeacherUpload'].clearFiles();
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
        that.formMsg.headIcon = this.result;
      };
    },
    // // 上传LOGO
    // async upLoadingimg(e, a) {
    //   console.log(e)
    //   console.log(a)
    //   const isLt1M = e.size / 1024 / 5 < 1025;
    //   var test = e.name.substring(e.name.lastIndexOf(".") + 1);
    //   var arr = ["jpg", "jpeg", "png", "gif"];
    //   if (arr.indexOf(test) == -1) {
    //     this.$message.error("不支持" + test + "格式的图片");
    //     return;
    //   }
    //   if (!isLt1M) {
    //     this.$message.error("图片大小不能超过5M!");
    //   } else {
    //     console.log(111);
    //     this.uploadFa = false;
    //     this.loading = this.$loading({
    //       lock: true,
    //       text: "上传中",
    //       spinner: "el-icon-loading",
    //       background: "rgba(0, 0, 0, 0.7)"
    //     });
    //     // const { data: res } = await this.$http.get(Url + "/upload/sign");
    //     var res = {
    //       fileKey: '1',
    //       signature: '2',
    //       policy: '3',
    //       accessid: '4'
    //     }
    //     console.log(res);
    //     this.upData.key = res.fileKey;
    //     this.upData.Signature = res.signature;
    //     this.upData.policy = res.policy;
    //     this.upData.OSSAccessKeyId = res.accessid;
    //     // this.form.answer1image = res.fileKey;
    //     // var kk=res.host + "/" + this.form.answer1image;
    //     this.imgs = res.fileKey;

    //     // this.imgs.answer1ImageURL = "";
    //     // this.form.answer1ImageURL = kk;
    //     //   setTimeout(function(){
    //     //
    //     //   }, 300);
    //   }
    // },
    // imgSuccess(res, file) {
    //   // 图片上传成功
    //   console.log(res, file);
    //   setTimeout(() => {
    //     this.loading.close();
    //     this.formMsg.headIcon = "https://static.waijiaoyi.com/wjy2017/i2351ef5af5d2acf7f36e605292caa951.jpg"
    //   }, 2000);
    //   // this.$http
    //   //   .post(Url + "/stock/createstock", {
    //   //     filekey: this.imgs,
    //   //     projectid: 1
    //   //   })
    //   //   .then(res => {
    //   //     console.log(res);
    //   //     // this.getImgs();
    //   //   })
    //   //   .catch(res => {
    //   //     console.log(res);
    //   //   });
    // },
    // uploadError(res, file) {
    //   console.log(res)
    //   this.loading.close();
    //   this.$message.error("上传失败，请重新上传");
    // },
    // 初始化表单信息
    initAddressFrom(data) {
      console.log(data);
      this.provinceData = data;
      // this.provinceData.map(e => {
      //   if (this.formMsg.province == e.name) {
      //     this.cityData = e.cityList;
      //   }
      // });
      // this.cityData.map(e => {
      //   if (this.formMsg.city == e.name) {
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
      this.formMsg.city = "";
      this.formMsg.district = "";
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
      this.formMsg.district = "";
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
        .get(Url + "/aimw/user/getUserProfile", {
          params: {
            passport: that.passport
          }
        })
        .then(res => {
          console.log(res)
          var data = res.data;
          if (data.code == 0) {
            that.formMsg = {
              passport: data.data.passport,
              oldPassport: data.data.passport,
              name: data.data.name,
              password: data.data.password,
              gender: data.data.gender,
              phone: data.data.phone,
              email: data.data.email,
              birthPlace: data.data.birthPlace,
              headIcon: 'data:image;base64,' + data.data.headIcon,
              remark: data.data.remark
            }
          }
        })
        .catch(res => {
          console.log(res);
        });
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
    onSubmit() {
      let that = this;
      this.passportFlag = this.nameFlag = this.passwordFlag = this.phoneFlag = this.emailFlag = false;
      var regp = /^1[3456789]\d{9}$/;
      var rege = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.formMsg.passport == "" || this.formMsg.passport.length < 6) {
        this.passportFlag = true;
        return false;
      }
      if (this.formMsg.name == "") {
        this.nameFlag = true;
        return false;
      }
      if (this.formMsg.phone != "" && !regp.test(this.formMsg.phone)) {
        this.phoneFlag = true;
        return false;
      }
      if (this.formMsg.email != "" && !rege.test(this.formMsg.email)) {
        this.emailFlag = true;
        return false;
      }
      var param = {
        newPassport: this.formMsg.passport,
        passport: this.formMsg.oldPassport,
        name: this.formMsg.name,
        password: this.formMsg.password,
        gender: this.formMsg.gender,
        phone: this.formMsg.phone,
        email: this.formMsg.email,
        birthPlace: this.formMsg.birthPlace,
        headIcon: this.formMsg.headIcon.split('base64,')[1],
        remark: this.formMsg.remark
      }
      console.log(param);
      //  没有修改老师信息的接口
      that.$http
        .put(Url + "/aimw/teacher/updateUserInfo", param)
        .then(res => {
          var data = res.data;
          if (data.code == 0) {
            console.log(data);
            this.$router.push({
              path: "/library/teacher"
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
        path: "/library/teacher"
      });
    }
  }
};
</script>

<style lang="less">
.add_teacher_wrap {
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
        img{
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
          .el-input__suffix{
            right: 0.05rem;
          }
          .el-select__caret{
            font-size: 0.14rem;
          }
          .el-input__icon{
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
          line-height: 0.24rem;
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
        .el-radio__inner::after{
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
        .el-radio-group{
          height: 0.36rem;
          display: flex;
          align-items: center;
        }
        .el-textarea{
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
