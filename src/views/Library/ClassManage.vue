<template>
  <div class="change_class_wrap">
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
          <el-breadcrumb-item>批量调班</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="search_form_box">
      <div class="search_steps">
        <div class="steps_box">
          <div class="steps_num">
            <div :class="['steps_nc', { steps_act: stepsAct > 0 }]">1</div>
            <span>选择班级</span>
          </div>
          <div class="steps_line"></div>
          <div class="steps_num">
            <div :class="['steps_nc', { steps_act: stepsAct > 1 }]">2</div>
            <span>执行检测</span>
          </div>
          <div class="steps_line"></div>
          <div class="steps_num">
            <div :class="['steps_nc', { steps_act: stepsAct > 2 }]">3</div>
            <span>导入完成</span>
          </div>
        </div>
      </div>
      <el-form ref="form" :model="formSearch" label-width="80px">
        <div class="steps_list">
          <div class="steps_li" v-if="stepsAct == 1">
            <div class="steps_li_dl">
              <img src="../../assets/images/icon_in.png" alt="" />
              <span style="width:0.8rem">选定班级</span>
              <ul class="steps_li_dd">
                <li v-for="item in checkedList" :key="item.Pid">
                  <div>
                    <span>{{item.Name}}</span>
                  </div>
                  <i class="el-icon-close"></i>
                </li>
              </ul>
            </div>
            <el-form-item label="学段：">
              <el-radio-group v-model="formSearch.level" @change="levleChange">
                <el-radio
                  v-for="item in levelList"
                  :key="item.Pid"
                  :label="item.Pid"
                  >{{ item.Name }}</el-radio
                >
              </el-radio-group>
            </el-form-item>
            <el-form-item label="选择年级：">
              <el-radio-group v-model="formSearch.grade" @change="gradeChange">
                <el-radio
                  v-for="item in gradeList"
                  :key="item.Pid"
                  :label="item.Pid"
                  >{{ item.Name }}</el-radio
                >
              </el-radio-group>
            </el-form-item>
            <el-form-item label="选择班级：">
              <!-- <el-checkbox
                :indeterminate="isIndeterminate"
                v-model="checkAll"
                @change="handleCheckAllChange"
                >全部</el-checkbox
              > -->
              <el-checkbox-group
                v-model="checkedCities"
                @change="handleCheckedCitiesChange"
              >
                <el-checkbox
                  v-for="item in classList"
                  :label="item.Pid"
                  :key="item.Pid"
                  @change="sbChange(item)"
                >
                  {{ item.Name }}
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
          <div class="steps_li" v-if="stepsAct == 1">
            <div class="steps_li_dl">
              <img src="../../assets/images/icon_out.png" alt="" />
              <span>待转入班级</span>
            </div>
            <div>
              <el-form-item label="学段：">
                <el-radio-group
                  v-model="formSearch.levelCheck"
                  @change="levleCheckChange"
                >
                  <el-radio
                    v-for="item in levelCheckList"
                    :key="item.Pid"
                    :label="item.Pid"
                    >{{ item.Name }}</el-radio
                  >
                </el-radio-group>
              </el-form-item>
              <el-form-item label="选择年级：">
                <el-radio-group
                  v-model="formSearch.gradeCheck"
                  @change="gradeCheckChange"
                >
                  <el-radio
                    v-for="item in gradeCheckList"
                    :key="item.Pid"
                    :label="item.Pid"
                    >{{ item.Name }}</el-radio
                  >
                </el-radio-group>
              </el-form-item>
              <el-form-item label="选择班级：">
                <el-radio-group
                  v-model="formSearch.classCheck"
                  @change="classCheckChange"
                >
                  <el-radio
                    v-for="item in classCheckList"
                    :key="item.Pid"
                    :label="item.Pid"
                    >{{ item.Name }}</el-radio
                  >
                </el-radio-group>
              </el-form-item>
            </div>
          </div>
          <div class="steps_li" v-if="stepsAct == 2">
            <div class="steps_li_dl">
              <img src="../../assets/images/icon_in.png" alt="" />
              <span>选定班级</span>
            </div>
            <ul class="steps_li_dd1">
              <li v-for="item in checkedList" :key="item.Pid">
                <div>
                  <span>{{item.Name}}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="steps_li" v-if="stepsAct == 2">
            <div class="steps_li_dl">
              <img src="../../assets/images/icon_out.png" alt="" />
              <span>待转入班级</span>
            </div>
            <ul class="steps_li_dd2">
              <li>
                <div>
                  <span>{{formSearch.classCheckName}}</span>
                </div>
              </li>
              <!-- <li v-for="item in cities" :key="item">
                <div>
                  <span>{{ form.resource1 }}{{ item }}</span>
                </div>
              </li> -->
            </ul>
          </div>
        </div>
      </el-form>
      <div class="tables_box" v-if="stepsAct == 2">
        <div class="search_title center_o_title">
          调班学生列表
        </div>
        <template>
          <el-table border :data="tableData" style="width: 100%">
            <el-table-column
              type="index"
              label="行数"
            ></el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="passport" label="账号"> </el-table-column>
            <el-table-column prop="passport" label="学籍号"> </el-table-column>
            <el-table-column prop="className" label="原班级"> </el-table-column>
            <el-table-column prop="classCheckName" label="现班级"> </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="steps_success" v-if="stepsAct == 3">
        <img src="../../assets/images/success_bg.png" alt="" />
        <h3>批量导入完成</h3>
        <p>成功导入数据：<span>{{tableData.length}}</span> 条，默认密码为：<span>登录账号后6位</span></p>
      </div>
      <div class="steps_btn" v-if="stepsAct == 1">
        <el-button type="primary" @click="goSubmit1">下一步</el-button>
        <el-button type="primary" class="resets" @click="goBack"
          >取消</el-button
        >
      </div>
      <div class="steps_btn" v-if="stepsAct == 2">
        <el-button type="primary" @click="goSubmit2">下一步</el-button>
        <el-button type="primary" class="resets resets1" @click="backSubmit1"
          >返回重新上传</el-button
        >
      </div>
      <div class="steps_btn" v-if="stepsAct == 3">
        <el-button type="primary" @click="goBack">完成</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Url from "@/assets/js/url.js";
export default {
  name: "batchteacher",
  data() {
    return {
      checkedList: [],
      checkAll: false,
      checkedCities: [],
      cities: ["一班", "二班", "三班", "四班"],
      isIndeterminate: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "初中",
        resource1: "七年级",
        desc: 3
      },
      stepsAct: 1,
      tableData: [],
      levelList: [],
      gradeList: [],
      classList: [],
      levelCheckList: [],
      gradeCheckList: [],
      classCheckList: [],
      formSearch: {
        level: "",
        grade: "",
        class: "",
        sectionName: "",
        gradeName: "",
        className: "",
        levelCheck: "",
        gradeCheck: "",
        classCheck: "",
        sectionCheckName: "",
        gradeCheckName: "",
        classCheckName: ""
      }
    };
  },
  created() {
    // aaa
  },
  mounted() {
    // aaa
    // this.getData()
    this.threeChange();
  },
  methods: {
    // 学段 年级 班级 三级联动
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
    levleCheckChange(val) {
      console.log(val);
      this.checkLevel(val);
    },
    gradeCheckChange(val) {
      console.log(val);
      this.checkGrade(val);
    },
    classCheckChange(val) {
      console.log(val);
      this.formSearch.classCheck = val;
      for (let i in this.classCheckList) {
        if (this.classCheckList[i].Pid == val) {
          this.formSearch.classCheckName = this.classCheckList[i].Name
        }
      }
    },
    checkLevel(value) {
      console.log(value);
      this.formSearch.levelCheck = value;
      this.gradeCheckList = [];
      this.classCheckList = [];
      this.formSearch.gradeCheck = "";
      this.formSearch.classCheck = "";
      this.levelCheckList.map(e => {
        if (value == e.Pid) {
          this.gradeCheckList = e.list;
          this.formSearch.sectionCheckName = e.Name
          return false;
        }
      });
      console.log(this.gradeCheckList);
      let gradeCheck = this.gradeCheckList[0].Pid;
      this.formSearch.gradeCheckName = this.gradeCheckList[0].Name;
      this.checkGrade(gradeCheck);
    },
    checkGrade(value) {
      console.log(value);
      this.formSearch.gradeCheck = value;
      this.classCheckList = [];
      this.formSearch.classCheck = "";
      this.gradeCheckList.map(e => {
        if (value == e.Pid) {
          this.classCheckList = e.list;
          this.formSearch.gradeCheckName = e.Name
          return false;
        }
      });
      console.log(this.classCheckList);
      if (this.classCheckList) {
        this.formSearch.classCheck = this.classCheckList[0].Pid;
        this.formSearch.classCheckName = this.classCheckList[0].Name;
      } else {
        this.formSearch.classCheck = "";
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
              let levelNum = that.levelList[0].Pid;
              this.choseLevel(levelNum);
              that.levelCheckList = levelArr;
              let levelCheckNum = that.levelCheckList[0].Pid;
              this.formSearch.sectionCheckName = that.levelCheckList[0].Name
              this.checkLevel(levelCheckNum);
            }
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    getData() {
      let that = this;
      // var param = {
      //   passport: page,
      // };
      // , {
      //     params: param
      // }
      that.$http
        .get(Url + "/aimw/student/getChangeClassInfo")
        .then(res => {
          let data = res.data.data;
          console.log(data);
          if (res.data.code == 0) {
            // if (data) {
            //   that.tableData = data;
            // }
          } else {
            that.$message.error(res.data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    handleCheckAllChange(val) {
      console.log(val);
      // this.checkedCities = val ? this.cities : [];
      // this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
      // this.checkedList = value
      let newchecked = []
      for (let i in value) {
        for (let j in this.checkedList) {
          if (this.checkedList[j].Pid == value[i]) {
            newchecked.push(this.checkedList[j])
          }
        }
      }
      this.checkedList = newchecked;
      console.log(this.checkedList)
      // let checkedCount = value.length;
      // this.checkAll = checkedCount === this.cities.length;
      // this.isIndeterminate =
      //   checkedCount > 0 && checkedCount < this.cities.length;
    },
    sbChange(val) {
      console.log(val)
      console.log(val.Pid)
      console.log(JSON.stringify(this.checkedList).indexOf(val.Pid))
      if (JSON.stringify(this.checkedList).indexOf(val.Pid) == -1) {
        this.checkedList.push(val)
      }
      console.log(this.checkedList)
    },
    renderHeader(h, { column, $index }) {
      return h("span", [
        h("span", {
          domProps: {
            innerHTML: "*"
          },
          style: {
            color: "#F56C6C",
            fontSize: "16px",
            marginRight: "3px"
          }
        }),
        h("span", column.label)
      ]);
    },
    goSubmit1() {
      let that = this;
      console.log(this.checkedList)
      console.log(this.formSearch)
      var classArr = []
      for (let i in this.checkedList) {
        classArr.push({
          class: this.checkedList[i].Pid
        })
      }
      let param = {
        class: this.formSearch.classCheck,
        className: this.formSearch.classCheckName,
        grade: this.formSearch.gradeCheck,
        gradeName: this.formSearch.gradeCheckName,
        section: this.formSearch.levelCheck,
        sectionName: this.formSearch.sectionCheckName,
        classIds: classArr
      }
      this.$http
        .get(Url + "/aimw/student/getChangeClassInfo", {
          params: param
        })
        .then(res => {
          let data = res.data;
          console.log(res)
          if (data.code == 0) {
            if (data.data) {
              this.stepsAct = 2;
              for (let i in data.data.changeClassInfo) {
                data.data.changeClassInfo[i].classCheckName = data.data.className
              }
              this.tableData = data.data.changeClassInfo
              console.log(this.tableData)
            }
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
      console.log(param)
    },
    goSubmit2() {
      let that = this
      var classArr = []
      for (let i in this.tableData) {
        classArr.push({
          name: this.tableData[i].name,
          passport: this.tableData[i].passport,
          class: this.tableData[i].class,
          className: this.tableData[i].className
        })
      }
      var param = {
        class: this.formSearch.classCheck,
        className: this.formSearch.classCheckName,
        grade: this.formSearch.gradeCheck,
        gradeName: this.formSearch.gradeCheckName,
        section: this.formSearch.levelCheck,
        sectionName: this.formSearch.sectionCheckName,
        changeClassInfo: classArr
      }
      console.log(param)
      that.$http
        .put(Url + "/aimw/student/changeClass", param)
        .then(res => {
          var data = res.data;
          if (data.code == 0) {
            console.log(data);
            this.stepsAct = 3;
          } else {
            this.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    backSubmit1() {
      this.stepsAct = 1;
    },
    goBack() {
      this.$router.push({
        path: "/library/class"
      });
    }
  }
};
</script>

<style lang="less">
.change_class_wrap {
  text-align: left;
  margin: 0 0.22rem 0.24rem;
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
  .search_form_box {
    background: #ffffff;
    box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
    border-radius: 0.04rem;
    padding: 0.2rem 0.24rem;
    .steps_success {
      text-align: center;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 1;
      img {
        width: 1.86rem;
        height: 1.66rem;
      }
      h3 {
        font-size: 0.2rem;
        color: #354b70;
        font-weight: 400;
        margin: 0;
      }
      p {
        font-size: 0.16rem;
        font-family: PingFang SC;
        color: #7786ac;
        margin: 0.22rem 0 0.47rem;
        span {
          color: #006cff;
        }
      }
    }
    .steps_btn {
      display: flex;
      justify-content: center;
      margin-bottom: 0.4rem;
      .el-input {
        height: 0.36rem;
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
        width: 1.08rem;
        border: 0.01rem solid #dcdfe6;
        padding: 0.09rem 0.27rem;
        font-size: 0.16rem;
        border-radius: 4px;
        background: linear-gradient(263deg, #00c2ff, #0075ff);
        box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
      }
      .el-button.resets {
        margin-left: 1.04rem;
        background: linear-gradient(261deg, #8fb1d7, #b8d5f5);
        box-shadow: 0px 2px 10px 0px rgba(171, 196, 227, 0.45);
      }
      .el-button.resets1 {
        width: 1.28rem;
        padding: 0.09rem 0rem;
        background: linear-gradient(263deg, #00c2ff, #0075ff);
        box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
      }
    }
    .steps_list {
      width: 9.74rem;
      margin: 0.52rem auto 0;
      padding-bottom: 0.06rem;
      .steps_li {
        width: 100%;
        // height: 1.38rem;
        // display: flex;
        margin-bottom: 0.32rem;
        .steps_li_dl {
          display: flex;
          align-items: center;
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #354b70;
          margin-bottom: 0.2rem;
          img {
            width: 0.26rem;
            height: 0.26rem;
            margin-right: 0.1rem;
          }
          .steps_li_dd {
            display: flex;
            align-items: center;
            flex: 1;
            flex-wrap: wrap;
            li {
              line-height: 1;
              padding: 0.01rem;
              border-radius: 0.02rem;
              margin: 0.1rem 0.16rem;
              background: linear-gradient(180deg, #0075ff 0%, #00c2ff 100%);
              display: flex;

              div {
                border-top-left-radius: 0.02rem;
                border-bottom-left-radius: 0.02rem;
                background: #ffffff;
                span {
                  display: block;
                  font-size: 0.16rem;
                  font-family: PingFang SC;
                  padding: 0.04rem 0.12rem;
                  font-weight: 400;
                  color: #006cff;
                  background: linear-gradient(
                    0deg,
                    rgba(196, 236, 255, 0.14) 0%,
                    rgba(151, 205, 255, 0.14) 100%
                  );
                }
              }
              i {
                border-top-right-radius: 0.02rem;
                border-bottom-right-radius: 0.02rem;
                width: 0.26rem;
                height: 0.26rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #ffffff;
              }
            }
          }
        }
        .steps_li_dd1 {
          display: flex;
          align-items: center;
          margin-left: 0.24rem;
          li {
            line-height: 1;
            padding: 0.01rem;
            border-radius: 0.02rem;
            margin: 0 0.16rem;
            background: linear-gradient(180deg, #0075ff 0%, #00c2ff 100%);
            display: flex;

            div {
              border-top-left-radius: 0.02rem;
              border-bottom-left-radius: 0.02rem;
              background: #ffffff;
              span {
                display: block;
                font-size: 0.16rem;
                font-family: PingFang SC;
                padding: 0.04rem 0.12rem;
                font-weight: 400;
                color: #006cff;
                background: linear-gradient(
                  0deg,
                  rgba(196, 236, 255, 0.14) 0%,
                  rgba(151, 205, 255, 0.14) 100%
                );
              }
            }
          }
        }
        .steps_li_dd2 {
          display: flex;
          align-items: center;

          margin-left: 0.24rem;
          li {
            line-height: 1;
            padding: 0.01rem;
            border-radius: 0.02rem;
            margin: 0 0.16rem;
            background: linear-gradient(-90deg, #aab0ff 0%, #7279ff 100%);
            display: flex;

            div {
              border-top-left-radius: 0.02rem;
              border-bottom-left-radius: 0.02rem;
              background: #ffffff;
              span {
                display: block;
                font-size: 0.16rem;
                font-family: PingFang SC;
                padding: 0.04rem 0.12rem;
                font-weight: 400;
                color: #7279ff;
                background: linear-gradient(
                  182deg,
                  rgba(196, 200, 255, 0.05),
                  rgba(114, 121, 255, 0.05)
                );
              }
            }
          }
        }
        .el-form-item {
          margin-bottom: 0.1rem;
          .el-form-item__label {
            line-height: 0.36rem;
            width: 1.2rem !important;
          }
          .el-form-item__content {
            line-height: 0.36rem;
            margin-left: 1.2rem !important;
            .el-radio, .el-radio__input{
              line-height: 0.36rem;
            }
          }
        }
        .steps_dt {
          width: 1.2rem;
          background: linear-gradient(
            182deg,
            rgba(114, 121, 255, 0.81),
            rgba(196, 200, 255, 0.81)
          );
          border-radius: 2px 0px 0px 2px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 0.68rem;
            height: 0.68rem;
          }
        }
        .steps_dt_right,
        .steps_dt_wrong {
          // height: 1.08rem;
          img {
            width: 0.55rem;
            height: 0.55rem;
          }
        }
        .steps_dt_right {
          background: linear-gradient(
            182deg,
            rgba(114, 121, 255, 0.81),
            rgba(196, 200, 255, 0.81)
          );
        }
        .steps_dt_wrong {
          background: linear-gradient(
            178deg,
            rgba(254, 95, 184, 0.8),
            rgba(255, 154, 229, 0.8)
          );
        }
        .steps_dd {
          flex: 1;
          border: 0.01rem solid #e1e9ff;
          background: linear-gradient(
            0deg,
            rgba(196, 236, 255, 0.1) 0%,
            rgba(151, 205, 255, 0.1) 100%
          );
          border-radius: 0px 2px 2px 0px;
          padding: 0.24rem 0.18rem 0.24rem 0.2rem;
          line-height: 1;
          font-family: Source Han Sans CN;
          font-weight: 400;
          h3 {
            line-height: 1;
            margin: 0;
            font-weight: 500;
            font-size: 0.2rem;
            color: #354b70;
          }
          p {
            font-size: 0.16rem;
            color: #7786ac;
            margin: 0.17rem 0 0.2rem;
          }
          a {
            font-size: 0.16rem;
            color: #4089ff;
          }
          .steps_upload {
            display: flex;
            align-items: center;
            img {
              width: 0.15rem;
              height: 0.15rem;
              margin-right: 0.02rem;
            }
            span {
              color: #909db4;
              margin-right: 0.08rem;
            }
            a.s_xcle {
              text-decoration: underline;
            }
          }
          .steps_num {
            font-size: 0.2rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #4089ff;
            margin-top: 0.24rem;
          }
          .steps_num_r {
            color: #fe5fb8;
          }
        }
      }
    }
    .search_steps {
      display: flex;
      justify-content: center;
      margin-top: 0.6rem;
      .steps_box {
        display: flex;
        .steps_num {
          font-family: Source Han Sans CN;
          font-weight: 400;
          .steps_nc {
            margin: 0 auto 0.04rem;
            text-align: center;
            line-height: 0.32rem;
            width: 0.32rem;
            height: 0.32rem;
            border-radius: 50%;
            font-size: 0.2rem;
            color: #ffffff;
            background: linear-gradient(0deg, #c4ecff 0%, #97cdff 100%);
          }
          .steps_act {
            background: linear-gradient(180deg, #0075ff 0%, #00c2ff 100%);
          }
          span {
            font-size: 0.16rem;
            color: #354b70;
          }
        }
        .steps_line {
          margin: 0.15rem -0.06rem 0;
          width: 3.58rem;
          height: 0.03rem;
          background: linear-gradient(0deg, #c4ecff 0%, #97cdff 100%);
        }
      }
    }
    // 表格
    .tables_box {
      width: 9.74rem;
      margin: 0 auto;
      // 公共带圈的标题
      .center_o_title {
        display: flex;
        align-items: center;
        font-size: 0.18rem;
        line-height: 1;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #354b70;
        margin-bottom: 0.2rem;
        padding-left: 0.38rem;
      }
      .center_o_title::after {
        top: -0.02rem;
        width: 0.25rem;
        height: 0.25rem;
        // background:#
        background-image: url(../../assets/images/teachingList.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      //性别样式
      .sex_li {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1;
        img {
          width: 0.14rem;
          height: 0.14rem;
          margin-right: 0.05rem;
        }
      }
      // 表格样式
      .el-table {
        margin-bottom: 0.56rem;
        margin-left: 0.38rem;
        .el-table--border,
        .el-table--group,
        .el-table--border:after,
        .el-table--group:after,
        .el-table:before {
          border-color: #e1e9ff;
        }
        .el-table--border::after,
        .el-table--group::after,
        .el-table::before {
          background: #e1e9ff;
        }
        th,
        tr,
        td {
          text-align: center;
          font-size: 16px;
          font-weight: 400;
          font-family: Source Han Sans CN;
        }
        td,
        th.is-leaf {
          border-color: #e1e9ff;
        }
        td {
          color: #7786ac;
        }
        thead {
          th,
          tr {
            background: linear-gradient(0deg, #c4ecff 0%, #97cdff 100%);
            color: #354b70;
          }
        }
        .el-button--text {
          font-size: 0.16rem;
          padding: 0.09rem 0.06rem;
        }
        .primary_g,
        .primary_r {
          width: 0.6rem;
          height: 0.24rem;
          line-height: 1;
          margin: 0 auto;
          background: linear-gradient(
            45deg,
            rgba(196, 236, 255, 1) 0%,
            rgba(151, 205, 255, 1) 100%
          );
          padding: 1px;
          border-radius: 0.02rem;
          .el-button--primary.is-plain,
          .el-button--danger.is-plain {
            width: 100%;
            height: 100%;
            padding: 0;
            border: 0;
            border-radius: 0.02rem;
            font-size: 0.16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
          }
          .el-button--primary.is-plain,
          .el-button--primary.is-plain:focus,
          .el-button--primary.is-plain:hover {
            color: #006cff;
          }
          .el-button--danger.is-plain,
          .el-button--danger.is-plain:focus,
          .el-button--danger.is-plain:hover {
            color: #ff8854;
          }
        }
        .primary_r {
          background: linear-gradient(
            45deg,
            rgba(253, 186, 133, 1) 0%,
            rgba(255, 126, 117, 1) 100%
          );
        }
      }
    }
  }
}
</style>
