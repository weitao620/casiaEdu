<template>
  <div class="person_wrap">
    <div class="com_title">
      <div class="c_titles">
        <div class="com_cir">
          <img src="../../assets/images/index_top.png" alt="" />
        </div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>主页</el-breadcrumb-item>
          <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="person_main">
      <div class="person_box">
        <div class="person_top">
          <img class="per_photo" v-if="headIcon != ''" :src="'data:image;base64,' + headIcon" alt="" />
          <img class="per_photo per_photo1" v-if="headIcon == '' && gender == 1" src="../../assets/images/mo_man.png" alt="" />
          <img class="per_photo per_photo1" v-if="headIcon == '' && gender == 0" src="../../assets/images/mo_woman.png" alt="" />
          <div class="per_msg">
            <div class="per_msg_t">{{ name }}</div>
            <div class="per_msg_b">{{ remark }}</div>
          </div>
        </div>
        <el-form
          label-position="right"
          class="person_contain"
          label-width="0.98rem"
          :model="formPerson"
        >
          <div>
            <div class="person_msg">
              <img src="../../assets/images/personMsg.png" alt="" />
              个人资料
            </div>
            <el-form-item label="登录账号：">
              <el-input
                @input="userChange"
                v-model="formPerson.passport"
                placeholder="请输入账号"
                disabled
              ></el-input>
              <!-- <div style="width:4rem;height:0.36rem"></div>
              <div class="tip_left" v-show="passportFlag">
                <div class="tip_msg">
                  <img src="../../assets/images/x.png" alt="" />
                  <span>请输入账号</span>
                </div>
              </div> -->
            </el-form-item>
            <el-form-item label="手机号：">
              <el-input
                @input="phoneChange"
                v-model="formPerson.phone"
                placeholder="请输入手机号码"
              ></el-input>
              <div style="width:4rem;height:0.36rem"></div>
              <div class="tip_left" v-show="phoneFlag">
                <div class="tip_msg">
                  <img src="../../assets/images/x.png" alt="" />
                  请输入正确的手机号
                </div>
              </div>
            </el-form-item>
            <el-form-item label="邮箱：">
              <el-input
                @input="emailChange"
                v-model="formPerson.email"
                placeholder="请输入邮箱"
              ></el-input>
              <el-input class="dis_none"></el-input>
              <div style="width:4rem;height:0.36rem"></div>
              <div class="tip_left" v-show="emailFlag">
                <div class="tip_msg">
                  <img src="../../assets/images/x.png" alt="" />
                  输入邮箱地址有误
                </div>
              </div>
            </el-form-item>
          </div>
          <div>
            <div class="person_msg">
              <img src="../../assets/images/personPass.png" alt="" />
              修改密码
            </div>
            <el-form-item label="原密码：">
              <el-input type="password" class="dis_none"></el-input>
              <el-input
                type="password"
                @change="oldChange"
                v-model="formPerson.oldPass"
                placeholder="请输入原密码"
              ></el-input>
              <div style="width:4rem;height:0.36rem"></div>
              <div class="tip_left" v-show="oldPassFlag">
                <div class="tip_msg">
                  <img v-if="oldRight" src="../../assets/images/ok.png" alt="" />
                  <img v-else src="../../assets/images/x.png" alt="" />
                  {{ oldRight ? "密码校验成功" : "输入密码有误" }}
                </div>
              </div>
            </el-form-item>
            <el-form-item label="新密码：">
              <el-input
                type="password"
                @input="newChange"
                @focus="newFcous"
                @blur="newBlur"
                v-model="formPerson.newPass"
                placeholder="请输入新密码"
              ></el-input>
              <div style="width:4rem;height:0.36rem"></div>
              <div class="tip_left" v-show="newPassFlag">
                <div class="tip_msg">
                  <img v-if="newRight1" src="../../assets/images/ok.png" alt="" />
                  <img v-else src="../../assets/images/x.png" alt="" />
                  6-20个字符
                </div>
                <div class="tip_msg">
                  <img v-if="newRight2" src="../../assets/images/ok.png" alt="" />
                  <img v-else src="../../assets/images/x.png" alt="" />
                  只能包含字母、数字组合以及标点符号（除空格）
                </div>
                <div class="tip_msg">
                  <img v-if="newRight3" src="../../assets/images/ok.png" alt="" />
                  <img v-else src="../../assets/images/x.png" alt="" />
                  字母、数字和标点符合至少包含2种
                </div>
              </div>
            </el-form-item>
            <el-form-item label="确认密码：">
              <el-input
                type="password"
                @input="twoChange"
                @blur="twoChange"
                v-model="formPerson.twoPass"
                placeholder="请再次输入新密码"
              ></el-input>
              <div style="width:4rem;height:0.36rem"></div>
              <div class="tip_left" v-show="twoPassFlag">
                <div class="tip_msg">
                  <img src="../../assets/images/x.png" alt="" />
                  您输入的密码与新密码不一致
                </div>
              </div>
            </el-form-item>
          </div>
          <el-form-item class="sub_center" v-if="power3">
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
import { mapGetters, mapMutations } from "vuex";
import Url from "@/assets/js/url.js";
export default {
  name: "person",
  data() {
    return {
      power1: false,
      power2: false,
      power3: false,
      passportFlag: false,
      phoneFlag: false,
      emailFlag: false,
      oldPassFlag: false,
      oldRight: false,
      newPassFlag: false,
      newRight1: false,
      newRight2: false,
      newRight3: false,
      twoPassFlag: false,
      password: "1",
      formPerson: {
        passport: "",
        phone: "",
        email: "",
        oldPass: "",
        newPass: "",
        twoPass: ""
      },
      gender: "",
      headIcon: "",
      name: "",
      remark: ""
    };
  },
  created() {
    // aaa
  },
  mounted() {
    this.powerData()
    this.getUserInfo();
    // aaa
  },
  methods: {
    ...mapMutations(["setUserName"]),
    powerData() {
      let power = JSON.parse(localStorage.getItem("userAuth")).menuAuthID;
      // this.power1 = power.includes(10100); // 个人资料
      // this.power2 = power.includes(10200); // 密码修改
      if (power.includes(10201)) { //  编辑
        this.power3 = true;
      } else {
        this.power3 = false;
      }
    },
    // 获取个人中心信息
    getUserInfo() {
      let that = this;
      that.$http
        .get(Url + "/aimw/user/getUserProfile", {
          params: {
            passport: localStorage.getItem("passport")
          }
        })
        .then(res => {
          console.log(res)
          var data = res.data;
          if (data.code == 0) {
            that.headIcon = data.data.headIcon;
            that.gender = data.data.gender;
            that.name = data.data.name;
            that.remark = data.data.remark;
            that.formPerson.passport = data.data.passport;
            that.formPerson.phone = data.data.phone;
            that.formPerson.email = data.data.email;
            that.password = data.data.password;
            localStorage.setItem("userInfo", JSON.stringify(data.data));
            sessionStorage.setItem("userName", data.data.name);
            that.setUserName(data.data.name);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    // 取消--回到主页
    goBack() {
      this.$router.push({
        path: "/library/index"
      });
    },
    // 提交个人信息
    onSubmit() {
      let that = this;
      // that.phoneFlag = that.emailFlag = that.newPassFlag = that.oldPassFlag = this.twoPassFlag = false
      console.log(this.formPerson);
      var regp = /^1[3456789]\d{9}$/;
      var rege = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.formPerson.passport == "") {
        console.log(1)
        this.passportFlag = true;
        return false;
      }
      if (this.formPerson.phone != "" && !regp.test(this.formPerson.phone)) {
        this.phoneFlag = true;
        console.log(3)
        return false;
      }
      if (this.formPerson.email != "" && !rege.test(this.formPerson.email)) {
        this.emailFlag = true;
        console.log(5)
        return false;
      }
      // if (!this.oldRight) {
      //   this.oldPassFlag = true;
      //   console.log(55)
      //   return false;
      // }
      if (!((that.formPerson.oldPass != "" && that.formPerson.newPass != "" && that.formPerson.twoPass != "" && (that.oldRight || !that.oldPassFlag) && that.oldRight && !that.newPassFlag && !that.twoPassFlag) || (that.formPerson.oldPass == "" && that.formPerson.newPass == "" && that.formPerson.twoPass == ""))) {
        console.log(6)
        if (that.formPerson.oldPass == "") {
          console.log(7)
          that.oldPassFlag = true;
          that.newPassFlag = false;
          that.twoPassFlag = false;
          return false;
        }
        if (that.oldRight && that.formPerson.newPass == "") {
          console.log(8)
          that.newPassFlag = true;
          return false;
        }
        if (that.formPerson.newPass == "") {
          console.log(9)
          that.oldPassFlag = true;
          return false;
        }
        return false;
      }
      let param = {
        passport: that.formPerson.passport,
        phone: that.formPerson.phone,
        email: that.formPerson.email,
        password: that.formPerson.oldPass,
        newPassword: that.formPerson.newPass
      };
      console.log(param)
      that.$http
        .put(Url + "/aimw/user/updateUserProfile", param)
        .then(res => {
          console.log(res);
          let data = res.data;
          if (data.code == 0) {
            that.oldPassFlag = false;
            that.oldRight = false;
            localStorage.setItem("passport", that.formPerson.passport);
            // that.getUserInfo();
            if (param.newPassword != '') {
              that.$message.success('修改成功，请重新登录');
              localStorage.clear()
              that.$router.replace({
                path: "/login"
              });
            } else {
              that.$message.success('更新成功');
            }
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    // // 退出登录
    // logout() {
    //   let param = {
    //     passport: localStorage.getItem('passport')
    //   }
    //   this.$http.post(Url + "/aimw/user/logout", param).then(res => {
    //     console.log(res);
    //     localStorage.removeItem("isLogin");
    //     localStorage.removeItem("eduToken");
    //     localStorage.removeItem("userInfo");
    //     localStorage.removeItem("userAuth");
    //     localStorage.removeItem("passport");
    //     localStorage.removeItem("userType");
    //     localStorage.removeItem("openReport")
    //     this.$router.replace({
    //       path: "/login"
    //     });
    //   });
    // },
    twoChange(val) {
      console.log(val);
      if (!this.newPassFlag) {
        if (this.formPerson.twoPass != this.formPerson.newPass) {
          this.twoPassFlag = true;
        } else {
          this.twoPassFlag = false;
        }
      }
    },
    newChange(value) {
      var reg = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,20}$/;
      var reg1 = value.length >= 6 && value.length <= 20;
      // eslint-disable-next-line no-useless-escape
      var reg2 = /^[A-Za-z0-9`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/.test(
        value
      );
      var reg3 = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{1,30}$/.test(
        value
      );
      console.log("-------------:" + reg1);
      console.log("reg1:" + reg1);
      console.log("reg2:" + reg2);
      console.log("reg3:" + reg3);
      console.log("reg:" + reg.test(value));
      if (!(reg1 && reg2 && reg3)) {
        if (!reg1) {
          this.newRight1 = false;
        } else {
          this.newRight1 = true;
        }
        if (!reg2) {
          this.newRight2 = false;
        } else {
          this.newRight2 = true;
        }
        if (!reg3) {
          this.newRight3 = false;
        } else {
          this.newRight3 = true;
        }
        this.newPassFlag = true;
        return false;
      } else {
        this.newRight1 = true;
        this.newRight2 = true;
        this.newRight3 = true;
        setTimeout(() => {
          this.newPassFlag = false;
        }, 100);
      }
    },
    newFcous(val) {
      console.log(val);
      this.newPassFlag = true;
      this.twoPassFlag = false;
    },
    newBlur(val) {
      console.log(val);
      var value = this.formPerson.newPass;
      var reg1 = value.length >= 6 && value.length <= 20;
      // eslint-disable-next-line no-useless-escape
      var reg2 = /^[A-Za-z0-9`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/.test(
        value
      );
      var reg3 = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{1,30}$/.test(
        value
      );
      if (reg1 && reg2 && reg3) {
        this.newPassFlag = false;
      }
      if (
        this.formPerson.newPass != this.formPerson.twoPass &&
        !this.newPassFlag
      ) {
        this.twoPassFlag = true;
      }
    },
    oldChange(val) {
      console.log(val);
      console.log(this.password)
      console.log(val == this.password)
      this.formPerson.oldPass = val;
      if (val == this.password) {
        this.oldPassFlag = true;
        this.oldRight = true;
      } else if (val != this.password || val == "") {
        this.oldPassFlag = true;
        this.oldRight = false;
      }
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
    }
  },
  computed: {
    ...mapGetters(["getUserName"])
  }
};
</script>

<style lang="less">
.person_wrap {
  text-align: left;
  margin: 0 0.22rem;
  .sub_center {
    width: 4.9rem;
    display: flex;
    justify-content: center;
    .el-form-item__content {
      margin-left: 0 !important;
      text-align: center;
    }
  }
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
  .person_main {
    background: #ffffff;
    box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
    border-radius: 4px;
    padding: 0.26rem 0.4rem 0.4rem;
    .person_box {
      width: 12.9rem;
      margin: 0 auto;
      padding-left: 4rem;
      /*左三角*/
      .tip_left  {
        position: absolute;
        left: 4.1rem;
        top: 0;
        padding: 0.05rem 0.1rem;
        font-size: 0.14rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #7786ac;
        // min-width: 1.5rem;
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
        display: flex;
        justify-content: left;
        align-items: center;
        img {
          width: 0.12rem;
          height: 0.12rem;
          margin-right: 0.04rem;
        }
      }
      .person_contain {
        .person_msg {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.2rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #354b70;
          margin: 0.2rem 0;
          padding-right: 4rem;
          img {
            width: 0.38rem;
            height: 0.38rem;
            margin-right: 0.07rem;
          }
        }
      }
      .el-input {
        height: 0.36rem;
        width: 3.92rem;
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
    .person_top {
      display: flex;
      align-items: center;
      position: relative;
      font-family: Source Han Sans CN;
      font-weight: 400;
      width: 4.9rem;
      height: 1.17rem;
      padding: 0 0.1rem 0 0.16rem;
      background: url("../../assets/images/welcome.png") no-repeat center;
      background-size: 100% 1.17rem;
      // border-radius: 4px 4px 0px 0px;
      .per_photo {
        width: 0.94rem;
        height: 0.94rem;
        margin-right: 0.08rem;
        border-radius: 50%;
        border:0.04rem solid #ffffff;
        box-shadow: 0 0.02rem 0.16rem 0 rgba(42, 150, 236, 0.27);
      }
      .per_photo1{
        border:0;
      }
      .per_msg {
        line-height: 1;
        margin-right: 0.24rem;
        color: #006cff;
        font-weight: 400;
        .per_msg_t {
          padding-bottom: 0.3rem;
          font-size: 0.2rem;
        }
        .per_msg_b {
          font-size: 0.18rem;
        }
      }
    }
  }
}
</style>
