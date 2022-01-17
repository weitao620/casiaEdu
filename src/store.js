import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    groupFlag: false,
    personFlag: false,
    isToken: false,
    collapseFlag: false,
    somePdfFlag: false,
    gradesFlag: false
  },
  mutations: {
    setUserName(state, data) {
      state.userName = data;
    },
    setGroupFlag(state, data) {
      state.groupFlag = data;
    },
    setGradesFlag(state, data) {
      state.gradesFlag = data;
    },
    setPersonFlag(state, data) {
      state.personFlag = data;
    },
    setSomePdfFlag(state, data) {
      state.somePdfFlag = data;
    },
    setToken(state, data) {
      state.isToken = data;
    },
    setCollapseFlag(state, data) {
      state.collapseFlag = data;
    }
  },
  getters: {
    getUserName(state) {
      return state.userName;
    },
    getGroupFlag(state) {
      return state.groupFlag;
    },
    getGradesFlag(state) {
      return state.gradesFlag;
    },
    getPersonFlag(state) {
      return state.personFlag;
    },
    getSomePdfFlag(state) {
      return state.somePdfFlag;
    },
    getToken(state) {
      return state.isToken;
    },
    getCollapseFlag(state) {
      return state.collapseFlag;
    }
  },
  actions: {

  }
})
