<template>
  <div class="login_wrap">
    <div class="login">
      <div class="form_wrap">
        <img class="login_logo" src="./../assets/logo.png" alt="" />
        <div class="login_title"><span>AI</span>心世界后台管理系统</div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <div class="error_msg" v-if="errorMsg.length > 0">{{ errorMsg }}</div>
          <el-form-item label="" prop="usercount">
            <img class="login_uesr" src="../assets/images/yonghu.png" alt="" />
            <el-input
              @focus="clearError"
              v-model="ruleForm.usercount"
              placeholder="请输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <img class="login_pass" src="../assets/images/mima.png" alt="" />
            <el-input
              @focus="clearError"
              :type="swicthFlag ? 'text' : 'password'"
              @keyup.enter.native="submitForm('ruleForm')"
              v-model="ruleForm.password"
              placeholder="请输入密码"
            ></el-input>
            <div class="switchStyle">
              <el-switch
                active-text="123"
                inactive-text="***"
                v-model="swicthFlag"
              >
              </el-switch>
            </div>
          </el-form-item>
          <div class="reminds">
            <el-checkbox v-model="ruleForm.remember"
              >记住账号和密码</el-checkbox
            >
          </div>
          <el-form-item class="sub_btn">
            <el-button @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Url from "@/assets/js/url.js";
export default {
  inject: ["reload"],
  name: "login",
  data() {
    var checkName = (rule, value, callback) => {
      if (value == "") {
        return callback(new Error("账号不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      }
      callback();
    };
    var code = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      }
      callback();
    };

    return {
      errorMsg: "",
      ruleForm: {
        password: "",
        usercount: "",
        remember: false
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        usercount: [{ validator: checkName, trigger: "blur" }]
      },
      swicthFlag: false
    };
  },

  mounted() {
    console.log(this.data);
  },
  created() {
    let loginData = JSON.parse(localStorage.getItem("loginData"));
    console.log(loginData);
    if (loginData) {
      this.ruleForm = loginData;
    }
  },
  methods: {
    // 清空报错信息
    clearError() {
      this.errorMsg = "";
    },
    submitForm(formName) {
      console.log(this.$refs);
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          this.subLogin();
        } else {
          return false;
        }
      });
    },
    subLogin() {
      let that = this;
      let param = {
        passport: that.ruleForm.usercount,
        password: that.ruleForm.password,
        schoolId: 'aimw'
      };
      localStorage.setItem('passport', that.ruleForm.usercount)
      // if (that.ruleForm.usercount == 'weitao') {
      //   console.log("111weitao")
      //   localStorage.setItem("isLogin", true);
      //   if (that.ruleForm.remember) {
      //     localStorage.setItem("loginData", JSON.stringify(that.ruleForm));
      //   } else {
      //     localStorage.removeItem("loginData");
      //   }
      //   that.setUserName("系统管理员");
      //   that.$router.replace({
      //     path: "/parameters"
      //   });
      // } else
      if (that.ruleForm.usercount == 'admins') {
        console.log("222admins")
        localStorage.setItem("isLogin", true);
        if (that.ruleForm.remember) {
          localStorage.setItem("loginData", JSON.stringify(that.ruleForm));
        } else {
          localStorage.removeItem("loginData");
        }
        that.setUserName("系统管理员");
        that.$router.replace({
          path: "/library"
        });
      } else {
        console.log("333   administrator   casia1234")
        that.$http
          .post(Url + "/aimw/user/login", param)
          .then(res => {
            console.log(res);
            // console.log(JSON.parse(res.data.data.userAuth));
            var data = res.data;
            if (data.code == 0) {
              // localStorage.setItem("isLogin", true);
              let obja = {
                menuAuthID: []
              }
              if (data.data.userAuth == '') {
                data.data.userAuth = JSON.stringify(obja)
              } else {
                if (JSON.parse(data.data.userAuth).menuAuthID) {
                  
                } else {
                  let nOb = JSON.parse(data.data.userAuth)
                  nOb.menuAuthID = []
                  data.data.userAuth = JSON.stringify(nOb)
                }
              }
              localStorage.setItem("eduToken", data.data.token);
              localStorage.setItem("userAuth", data.data.userAuth);
              localStorage.setItem("userType", data.data.type);
              if (that.ruleForm.remember) {
                localStorage.setItem("loginData", JSON.stringify(that.ruleForm));
              } else {
                localStorage.removeItem("loginData");
              }
              that.getUserInfo();
            } else {
              that.errorMsg = data.msg;
            }
          })
          .catch(res => {
            console.log(res);
          });
      }
      // localStorage.setItem("isLogin", true);
      // if (that.ruleForm.remember) {
      //   localStorage.setItem("loginData", JSON.stringify(that.ruleForm));
      // } else {
      //   localStorage.removeItem("loginData");
      // }
      // that.setUserName("系统管理员");
      // that.$router.replace({
      //   path: "/parameters/home"
      // });
      // that.$router.replace({
      //   path: "/library/index"
      // });
    },
    getUserInfo() {
      let that = this;
      that.$http
        .get(Url + "/aimw/user/getUserProfile", {
          params: { passport: that.ruleForm.usercount }
        })
        .then(res => {
          console.log(res);
          var data = res.data;
          if (data.code == 0) {
            if (data.data.accountState == 2) {
              this.$alert(<span style='text-align:center;padding: 0.2rem 0.05rem;color: #333333 !important;font-size: 0.2rem; '>该账号处于禁用状态，请联系管理员！</span>, '提示', {
                confirmButtonText: '确定',
                callback: action => {}
              });
              return false
            }
            localStorage.setItem("isLogin", true);
            localStorage.setItem("userInfo", JSON.stringify(data.data));
            sessionStorage.setItem("userName", data.data.name);
            that.setUserName(data.data.name);
            // if (localStorage.getItem('passport') == 'weitao') {
            //   that.$router.replace({
            //     path: "/parameters/record"
            //   });
            // } else {
            that.$router.replace({
              path: "/library/index"
            });
            // }
          }
        })
        .catch(res => {
          console.log(res);
        });
    },

    ...mapMutations(["setUserName"])
  }
};
</script>
<style lang="less">
  .el-message-box__content {
    // padding: 0.3rem 0.15rem !important;
    color: #333333 !important;
    // text-align: center;
    p{
      line-height: 0.24rem;
      font-size: 0.2rem;
    }
  }
  .el-message-box__wrapper .el-message-box .el-message-box__btns{
    // display: flex;
    justify-content: center;
  }
</style>
<style lang="less">
.login_wrap {
  position: absolute;
  z-index: 9;
  height: 100%;
  min-width: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  min-height: 5.4rem;
  background: url("../assets/images/bj.png") no-repeat center center;
  background-size: cover;
  background-color: #4196ff;
  .el-form-item__content {
    line-height: 0.4rem;
    font-size: 0.14rem;
  }
  .el-form-item__error {
    font-size: 0.12rem;
    padding-top: 0.04rem;
  }
  .el-switch {
    font-size: 0.14rem;
    line-height: 0.2rem;
    height: 0.2rem;
  }
  .el-switch__label--left {
    margin-right: 0.1rem;
  }
  .el-switch__label,
  .el-switch__core {
    height: 0.2rem;
  }
  .el-switch__core {
    border: 0.01rem solid #dcdfe6;
  }
  .el-switch__label * {
    line-height: 0.21rem;
    font-size: 0.14rem;
  }
  .el-switch__core:after {
    top: 0.01rem;
    left: 0.01rem;
  }
  .el-switch.is-checked .el-switch__core::after {
    margin-left: -0.17rem;
  }
  .login {
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 11.62rem;
    height: 5.98rem;
    border-radius: 0.06rem;
    background: url(../assets/images/login_bg.png) no-repeat center center;
    background-size: cover;
    .form_wrap {
      width: 3.6rem;
      position: absolute;
      top: 0.88rem;
      right: 1.2rem;
      .demo-ruleForm {
        position: relative;
      }
      .error_msg {
        position: absolute;
        top: -0.17rem;
        line-height: 1;
        left: 0;
        color: #fe5fb8 !important;
        font-size: 0.14rem !important;
      }
      .login_logo {
        width: 0.68rem;
        height: 0.68rem;
        margin: 0 auto 0.22rem;
        display: block;
      }
      .login_title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.28rem;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #ffffff;
        line-height: 0.34rem;
        margin-bottom: 0.48rem;
        background: linear-gradient(-1deg, #2b87ed 0%, #00b0ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        span {
          display: inline-block;
          font-size: 0.32rem;
          font-family: Montserrat;
        }
      }
      .demo-ruleForm {
        .reminds {
          display: flex;
          // justify-content: left;
          // align-items: center;
          .el-checkbox__inner {
            width: 0.16rem;
            height: 0.16rem;
          }
          .el-checkbox__inner::after {
            top: 0.02rem;
            left: 0.05rem;
          }
        }
        .el-form-item {
          margin-bottom: 0.28rem;
        }
        .el-form-item__content {
          margin-left: 0 !important;
          position: relative;
          .switchStyle {
            display: flex;
            position: absolute;
            right: 0.13rem;
            top: 0.1rem;
            .el-switch__core {
              background: linear-gradient(261deg, #b8d5f5, #8fb1d7);
            }
            .is-checked .el-switch__core {
              border-color: #ffffff;
              background: linear-gradient(90deg, #00eafe, #00b6f0);
            }
            .el-switch__label {
              position: absolute;
              display: none;
              color: #fff;
            }
            .el-switch__label--left {
              z-index: 9;
              left: 0.06rem;
              line-height: 0.26rem;
              font-size: 0.14rem;
            }
            .el-switch__label--right {
              z-index: 9;
              left: -0.18rem;
              line-height: 0.2rem;
              font-size: 0.14rem;
            }
            .el-switch__label.is-active {
              display: block;
            }
            .el-switch .el-switch__core,
            .el-switch .el-switch__label {
              width: 0.46rem !important;
            }
            .el-switch__core:after {
              width: 0.16rem;
              height: 0.16rem;
            }
          }
          .login_uesr {
            position: absolute;
            width: 0.14rem;
            height: 0.14rem;
            left: 0.14rem;
            top: 0.13rem;
            z-index: 1;
          }
          .login_pass {
            position: absolute;
            width: 0.12rem;
            height: 0.14rem;
            left: 0.15rem;
            top: 0.14rem;
            z-index: 1;
          }
          .login_phone {
            position: absolute;
            width: 0.12rem;
            height: 0.15rem;
            left: 0.14rem;
            top: 0.13rem;
            z-index: 1;
          }
          .login_key {
            position: absolute;
            width: 0.12rem;
            height: 0.16rem;
            left: 0.14rem;
            top: 0.13rem;
            z-index: 1;
          }
          .code_wrap {
            position: absolute;
            right: 0;
            width: 1rem;
            height: 0.16rem;
            top: 50%;
            z-index: 3;
            text-align: center;
            line-height: 0.16rem;

            margin-top: -0.08rem;
            border-left: 0.01rem solid #d9e3e8;

            .code_txt1 {
              font-size: 0.12rem;
              color: #1bb7ff;
              cursor: pointer;
            }
          }
          .el-input {
            input:-internal-autofill-selected {
              background: rgba(255, 255, 251, 1) !important;
            }
          }
          .el-button--default {
            width: 100%;
            height: 0.4rem;
            background: linear-gradient(263deg, #0075ff, #00c2ff);
            box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
            border-radius: 0.02rem;
            border: none;
            color: #fff;
            padding: 0;
            line-height: 0.4rem;
            font-size: 0.16rem;
            font-weight: 400;
          }
          .el-button--default:hover {
            color: #fff;
            border-color: none;
            background: linear-gradient(263deg, #0075ff, #00c2ff);
          }
          .el-input__inner {
            height: 0.4rem;
            line-height: 0.14rem;
            padding: 0 0.7rem 0 0.4rem;
            background-color: rgba(255, 255, 255, 1);
            border-radius: 0.02rem;
            border: 0.01rem solid #e1e9ff;
            font-size: 0.14rem !important;
          }
          .code_inner .el-input__inner {
            padding-right: 1rem;
          }
          .el-input__inner:focus {
            border: 0.01rem solid #e1e9ff;
          }
          .el-input__inner:focus {
            border: 0.01rem solid #2aa1f6;
          }
        }
        .sub_btn {
          margin-top: 0.3rem;
        }
      }
    }
    .register {
      color: #1bb7ff;
      font-size: 0.12rem;
      text-align: center;
      padding-top: 0.1rem;
      cursor: pointer;
    }
    .form_zuce {
      top: 0.31rem;
      .login_logo {
        width: 0.77rem;
        height: 0.54rem;
      }
      .zuce_txt {
        color: #0a497f;
        text-align: center;
        font-size: 0.14rem;
        padding: 0.12rem 0 0.19rem;
      }
      .demo-ruleForm {
        .sub_btn {
          margin-top: 0;
        }
        .el-form-item__content {
          .el-input__inner {
            height: 0.4rem;
            padding: 0 0.15rem;
          }
        }
      }

      .register {
        padding-top: 0;
      }
    }
    .zuce_success {
      height: 3.7rem;
      .success_txt {
        text-align: center;
        padding: 0.8rem 0 0.76rem;
        font-size: 0.16rem;
        color: #0a497f;
        font-weight: bold;
      }
      .login_btn {
        height: 0.4rem;
        width: 100%;
        text-align: center;
        border-radius: 0.05rem;
        background: #1bb7ff;
        line-height: 0.4rem;
        color: #ffffff;
        font-size: 0.13rem;
        font-weight: 500;
        margin-bottom: 1.16rem;
        cursor: pointer;
      }
      .success_btm {
        height: 0.16rem;
        width: 2.7rem;
        position: absolute;
        bottom: 0.2rem;
        left: 50%;
        margin-left: -1.35rem;
        text-align: center;
        font-size: 0.12rem;
        color: #0a497f;
      }
    }
  }
}
</style>
