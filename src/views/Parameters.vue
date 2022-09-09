<template>
  <div class="paraments_wrap">
    <div class="params_box">
      <div class="param_top">
        <img
          class="param_logo"
          src="../assets/images/params/logo2.png"
          alt=""
        />
      </div>
      <el-menu
        :default-active="activeUrl"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="record">沙盘数据</el-menu-item>
        <el-menu-item index="adjustment">参数调整</el-menu-item>
      </el-menu>
      <div class="lib_head_right">
        <img
          class="lib_user_pto"
          src="../assets/images/head_photo.png"
          alt=""
        />
        <el-dropdown trigger="click" @command="headCommand">
          <span class="el-dropdown-link">
            <span class="lib_user">{{ getUserName }}</span
            ><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">
              <img src="../assets/images/yonghu.png" alt="" />
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Url from "@/assets/js/url.js";
export default {
  name: "parameters",
  data() {
    return {
      isCollapse: false,
      activeUrl: 'record'
    };
  },
  created () {
    console.log("aaaa")
    console.log(this.$route);
    this.getPaths()
  },
  mounted () {
    console.log("aaaa")
  },
  methods: {
    getPaths() {
      this.activeUrl = this.$route.name;
      console.log(this.activeUrl)
    },
    handleSelect(e, key) {
      console.log('==========:' + e, key);
      this.activeIndex = e;
      this.activeUrl = e;
      this.$router.push({ path: "/parameters/" + e });
    },
    collapse() {
      this.isCollapse = !this.isCollapse;
      // this.setCollapseFlag(this.isCollapse);
    },
    headCommand(command) {
      console.log(command);
      if (command == "logout") {
        this.logout();
      }
    },
    logout() {
      let param = {
        passport: localStorage.getItem('passport')
      }
      this.$http.post(Url + "/aimw/user/logout", param).then(res => {
        console.log(res);
        localStorage.removeItem("isLoginNew");
        localStorage.removeItem("userInfo");
        localStorage.removeItem("userAuth");
        localStorage.removeItem("passport");
        localStorage.removeItem("userType");
        this.$router.replace({
          path: "/login"
        });
      });
    }
  },
  computed: {
    ...mapGetters(["getUserName"])
  },
  watch: {
    $route: "getPaths"
  }
};
</script>

<style lang="less">
  // body{
  //   background: #E1F1FE;
  // }
.paraments_wrap{
  background: #E1F1FE;
  .params_box{
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.86rem;
    background: linear-gradient(90deg, #216FED, #2E9BFF);
    box-shadow: 0px 3px 27px 0px rgba(66, 79, 128, 0.11);
    .param_top{
      padding: 0 0.2rem;
      img{
        display: block;
        width: 3.92rem;
        height: 0.4rem;
      }
    }
    .el-menu-demo{
      flex: 1;
      background: transparent;
      border: 0;
      padding-left: 1.6rem;
      .el-menu-item{
        height: 0.86rem;
        line-height: 0.86rem;
        margin: 0 0.46rem;
        font-size: 0.22rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
        background: transparent;
      }
      .el-menu-item.is-active{
        background: transparent;
        color: rgba(255, 255, 255, 1);
        border-bottom: 0.05rem solid #216FED;
        border-image: linear-gradient(90deg, #1BECFF 0%, #00C6FF 98%) 20 20;
      }
    }
    .lib_head_right {
      height: 0.72rem;
      margin: 0 0.24rem;
      display: flex;
      align-items: center;
      .lib_user_pto {
        width: 0.36rem;
        height: 0.36rem;
        background: #ccc;
        border-radius: 50%;
      }
      .lib_user {
        line-height: 0.68rem;
        height: 0.68rem;
        padding: 0 0.1rem;
        font-size: 0.16rem;
        font-weight: 400;
        font-family: Source Han Sans CN;
        color: #FFFFFF;
      }
      .el-icon--right{
        color: #ffffff;
      }
      .lib_drap {
        width: 0.12rem;
        height: 0.07rem;
      }
    }
  }
}
</style>
