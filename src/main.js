import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import _ from 'lodash'
import qs from 'qs'
// import 'lib-flexible/flexible'

import $ from 'jquery'
import { is } from 'core-js/core/object';
import './assets/fonts/iconfont.css'
import htmlToPdf from "@/common/utils/htmlToPdf"

Vue.use(htmlToPdf)
Vue.prototype.JQ = $

Vue.use(Element);

var kkload = new Vue();
var load = null;
axios.defaults.withCredentials = true;
axios.interceptors.request.use(
  res => {
    console.log(res)
    console.log(res.url.indexOf("/user/login"))
    if (res.url.indexOf("/user/login") === -1) {
      console.log(localStorage.getItem('eduToken'))
      res.headers['Authorization'] = localStorage.getItem('eduToken');
      console.log("加鉴权")
    } else {
      console.log("不需要鉴权")
    }
    
    // // 只针对get方式进行序列化
    // if (res.url.indexOf("/report/exportClassReport") != -1) {
    //   if (res.method === 'get') {
    //     console.log(res.paramsSerializer)
    //     res.paramsSerializer = function(params) {
    //       console.log(params)
    //       return qs.stringify(params, { arrayFormat: 'repeat' })
    //     }
    //   }
    // }
    if (res.url.indexOf("/user/getUserProfile") != -1 || res.url.indexOf("/index/listLatestReportsUserIcon") != -1 || res.url.indexOf("/report/exportGradeReport") != -1 || res.url.indexOf("/report/exportClassReport") != -1 || res.url.indexOf("/report/reportReviewImgs") != -1 || res.url.indexOf("/report/reportBirdView") != -1 || res.url.indexOf("/report/appendix") != -1 || res.url.indexOf("/report/reportReview") != -1 || res.url.indexOf("/report/reportInfo") != -1) {
      console.log('request不管？')
    } else {
      console.log('request管')
      // res.hesders = { "Content-Type": "application/x-www-form-urlencoded" }
      load = kkload.$loading({
        lock: true,
        text: '数据加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        load.close();
      }, 10000)
    }
    return res;
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  res => {
    console.log(load)
    console.log('response')
    if (load) {
      console.log('load')
      load.close();
      console.log('request管')
    }
    // 当接口返回code：2时，代表登录失效
    if (res.data.code == 2) {
      // Element.MessageBox.alert(res.data.msg, '提示', {
      //   confirmButtonText: '确定',
      //   callback: () => {
      router.replace({ path: "/login" });
      localStorage.removeItem("isLogin");
      localStorage.removeItem("eduToken");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userAuth");
      localStorage.removeItem("passport");
      localStorage.removeItem("userType");
      //     return false;
      //   }
      // });
      return;
    }
    if (res.data.code == 90000) {
      Element.MessageBox.alert(res.data.msg, '提示', {
        confirmButtonText: '确定',
        callback: () => {
          router.replace({ path: "/login" });
        }
      });
      return;
    }
    // if (res.data.msg && res.data.msg != "ok") {
    //   Element.MessageBox.alert(res.data.msg, '提示', {
    //     confirmButtonText: '确定',
    //     callback: () => {
    //     }
    //   });
    //   return;
    // }
    return res;
  },
  error => {
    console.log('error')
    load.close();
    return Promise.reject(error.response.data)
  }
)

router.beforeEach((to, from, next) => {
  console.log(from)
  console.log(to)
  var isLogin = localStorage.getItem('isLogin');
  var passport = localStorage.getItem('passport');
  var open = localStorage.getItem('openReport');
  var userType = localStorage.getItem('userType');
  console.log(isLogin)
  console.log(passport)
  console.log(userType)
  if (isLogin) {
    console.log('----111')
    console.log(to.name)
    if (to.name == 'login') {
      if (userType == 2) {
        console.log(111)
        next()
      } else {
        console.log(2222)
        // if (open && open != '') {
        //   console.log(open)
        //   next({ path: '/details' })
        // } else {
        console.log("open")
        next({ path: '/library' })
        // }
      }
    } else {
      next()
    }
  } else {
    console.log('----444')
    if (to.name !== 'login') {
      next({ path: '/login' })
    } else {
      next()
    }
  }
  // console.log(!isLogin)
  // if (passport == 'weitao') {
  //   if (to.name === 'login' && !isLogin) {
  //     console.log("-----1")
  //     next()
  //   } else {
  //     if (isLogin) {
  //       console.log('-----2')
  //       if (to.name == 'login') {
  //         console.log('-----3')
  //         next({ path: '/library/index' })
  //       } else {
  //         console.log('-----4')
  //         next()
  //       }
  //     } else {
  //       console.log('-----5')
  //       next({ path: '/login' })
  //     }
  //   }
  //   return false;
  // }
  // if (to.name === 'login' && !isLogin) {
  //   console.log("=====1")
  //   next()
  // } else {
  //   if (isLogin) {
  //     console.log('"=====2')
  //     if (to.name == 'login') {
  //       console.log('"=====3')
  //       next({ path: '/library/index' })
  //     } else {
  //       next()
  //     }
  //   } else {
  //     console.log('"=====5')
  //     next({ path: '/login' })
  //   }
  // }
})
router.afterEach(() => {
  window.scrollTo(0, 0);
})

Vue.prototype.$http = axios
Vue.prototype._ = _
Vue.prototype.$qs = qs
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
