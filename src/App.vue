<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<style lang="less">
  @import "./assets/css/base.less";
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>

<script>
import { mapMutations, mapGetters } from "vuex";
import Url from "@/assets/js/url.js";
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      headShow: false,
      isRouterAlive: true
    };
  },

  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    auth() {
      let that = this;
      console.log(this.$route.name)
      if (this.$route.name == 'login') {
        return false
      }
      let param = {
        passport: JSON.parse(localStorage.getItem('userInfo')).passport,
        password: JSON.parse(localStorage.getItem('userInfo')).password
      }
      that.$http
        .post(Url + "/aimw/user/login", param)
        .then(res => {
          var data = res.data;
          if (data.code == 0) {
            let obja = {
              menuAuthID: []
            }
            if (data.data.userAuth == '') {
              data.data.userAuth = JSON.stringify(obja)
            } else {
              if (JSON.parse(data.data.userAuth).menuAuthID) {
                console.log('11')
              } else {
                let nOb = JSON.parse(data.data.userAuth)
                nOb.menuAuthID = []
                data.data.userAuth = JSON.stringify(nOb)
              }
            }
            localStorage.setItem("userAuth", data.data.userAuth);
            localStorage.setItem("userType", data.data.type);
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    ...mapMutations(["setUserName"])
  },
  mounted() {
    console.log("单页面数据刷新")
    // console.log(this.$router)
    var user = sessionStorage.getItem("userName");
    if (user) {
      this.setUserName(user);
    }
    this.auth()
  },
  computed: {
    ...mapGetters(["getUserName"])
  }
};
</script>
