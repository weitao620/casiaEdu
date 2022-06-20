import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)
console.log('process.env.BASE_URL')
console.log(process.env.BASE_URL)
export default new Router({
  // mode: 'history',
  mode: 'hash',
  // base: '/yataischool/',
  base: process.env.BASE_URL,
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // },
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/details',
      name: 'details',
      redirect: '/details/report',
      component: () => import('./views/Details.vue'),
      children: [
        // 教师版报告
        {
          path: '/details/reporttest',
          name: 'detailsreporttest',
          component: () => import('./views/Details/ReportTest.vue')
        },
        {
          path: '/details/report/:userID',
          name: 'detailsreport',
          component: () => import('./views/Details/Report.vue')
        },
        {
          path: '/details/review/:userID',
          name: 'detailsreview',
          component: () => import('./views/Details/Review.vue')
        }
      ]
    },
    {
      path: '/library',
      name: 'library',
      redirect: '/library/index',
      component: () => import('./views/Library.vue'),
      children: [
        // 主页--主页
        {
          path: '/library/index',
          name: 'index',
          component: () => import('./views/Library/Index.vue')
        },
        // 主页--个人中心
        {
          path: '/library/person',
          name: 'person',
          component: () => import('./views/Library/Person.vue')
        },
        // 评估报告
        {
          path: '/library/report',
          name: 'report',
          component: () => import('./views/Library/Report.vue')
        },
        // 心理档案
        {
          path: '/library/heart',
          name: 'heart',
          component: () => import('./views/Library/Heart.vue')
        },
        // 查看 心理档案
        {
          path: '/library/review/:userID',
          name: 'review',
          component: () => import('./views/Library/Review.vue')
        },
        // 学生管理
        {
          path: '/library/student',
          name: 'student',
          component: () => import('./views/Library/Student.vue')
        },
        // 基础设置--学校信息
        {
          path: '/library/school',
          name: 'school',
          component: () => import('./views/Library/School.vue')
        },
        // 基础设置--教师管理
        {
          path: '/library/teacher',
          name: 'teacher',
          component: () => import('./views/Library/Teacher.vue')
        },
        // 基础设置--教师管理--新增教师
        {
          path: '/library/addteacher',
          name: 'addteacher',
          component: () => import('./views/Library/AddTeacher.vue')
        },
        // 基础设置--教师管理--教师信息详情
        {
          path: '/library/detailteacher/:userID',
          name: 'detailteacher',
          component: () => import('./views/Library/DetailTeacher.vue')
        },
        // 基础设置--教师管理--批量新增教师
        {
          path: '/library/batchteacher',
          name: 'batchteacher',
          component: () => import('./views/Library/BatchTeacher.vue')
        },
        // 基础设置--班级管理
        {
          path: '/library/class',
          name: 'class',
          component: () => import('./views/Library/Class.vue')
        },
        // 基础设置--班级管理--新增学生
        {
          path: '/library/addstudent',
          name: 'addstudent',
          component: () => import('./views/Library/AddStudent.vue')
        },
        // 基础设置--班级管理--学生信息详情
        {
          path: '/library/detailstudent/:userID',
          name: 'detailstudent',
          component: () => import('./views/Library/DetailStudent.vue')
        },
        // 基础设置--班级管理--批量新增学生
        {
          path: '/library/batchstudent',
          name: 'batchstudent',
          component: () => import('./views/Library/BatchStudent.vue')
        },
        // 基础设置--班级管理--学生异动管理
        {
          path: '/library/changemanage',
          name: 'changemanage',
          component: () => import('./views/Library/ChangeManage.vue')
        },
        // 基础设置--班级管理--批量调班
        {
          path: '/library/classmanage',
          name: 'classmanage',
          component: () => import('./views/Library/ClassManage.vue')
        },
        // 基础设置--角色管理
        {
          path: '/library/role',
          name: 'role',
          component: () => import('./views/Library/Role.vue')
        },
        // 基础设置--角色管理--权限设置
        {
          path: '/library/power',
          name: 'power',
          component: () => import('./views/Library/Power.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '*',
      name: 'login',
      component: Login
    }
  ]
})
