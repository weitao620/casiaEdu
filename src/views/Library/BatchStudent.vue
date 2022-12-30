<template>
  <div class="batch_wrap">
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
          <el-breadcrumb-item>批量新增</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="search_form_box">
      <div class="search_steps">
        <div class="steps_box">
          <div class="steps_num">
            <div :class="['steps_nc', { steps_act: stepsAct > 0 }]">1</div>
            <span>上传文件</span>
          </div>
          <div class="steps_line"></div>
          <div class="steps_num">
            <div :class="['steps_nc', { steps_act: stepsAct > 1 }]">2</div>
            <span>执行导入</span>
          </div>
          <div class="steps_line"></div>
          <div class="steps_num">
            <div :class="['steps_nc', { steps_act: stepsAct > 2 }]">3</div>
            <span>导入完成</span>
          </div>
        </div>
      </div>
      <div class="steps_list">
        <div v-if="stepsAct == 1">
          <div class="steps_tip">
            <div class="tip_txt">
              <img src="../../assets/images/index_top.png" alt="" />
              注：新增学生归属为当前学年下的年级、班级。
            </div>
          </div>
          <el-form label-position="right" :model="formSearch">
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
            <el-form-item label="年级：">
              <el-radio-group v-model="formSearch.grade" @change="gradeChange">
                <el-radio
                  v-for="item in gradeList"
                  :key="item.Pid"
                  :label="item.Pid"
                  >{{ item.Name }}</el-radio
                >
              </el-radio-group>
            </el-form-item>
            <el-form-item label="班级：" class="mt_10">
              <section class="address-select-list">
                <el-select
                  class="adress-select"
                  v-model="formSearch.class"
                  placeholder="请选择班级"
                  @change="classChange"
                >
                  <el-option
                    v-for="item in classList"
                    :key="item.Pid"
                    :label="item.Name"
                    :value="item.Pid"
                  ></el-option>
                </el-select>
              </section>
            </el-form-item>
          </el-form>
        </div>
        <div class="steps_li" v-if="stepsAct == 1">
          <div class="steps_dt">
            <img src="../../assets/images/batch_bg.png" alt="" />
          </div>
          <div class="steps_dd">
            <h3>填写新增学生列表文件</h3>
            <p>
              请按照数据模板的格式准备导入数据，模板中的表头名称不可更改，表头行不能删除
            </p>
            <a href="javascript:;" @click="tplDown">下载模版</a>
          </div>
        </div>
        <div class="steps_li" v-if="stepsAct == 1">
          <div class="steps_dt">
            <img src="../../assets/images/upload_bg.png" alt="" />
          </div>
          <div class="steps_dd">
            <h3>上传填好的新增学生列表文件</h3>
            <p>文件后缀名必须为 .xls或 .xlsx（即Excel格式）</p>

            <div class="steps_upload">
              <div class="steps_upload">
                <img src="../../assets/images/module_bg.png" alt="" />
                <div style="line-height:0.24rem" v-if="exlName != ''">
                  <a class="s_xcle" href="javascript:;">{{ exlName }}</a>
                  <span>({{ exlSize }}KB)</span>
                  <a href="javascript:;" @click="deleteExl">删除</a>
                </div>
                <input
                  v-if="exlName == ''"
                  type="button"
                  value="上传填好的表格"
                  id="fileImport"
                  v-on:click="clickLoad"
                  style="border:0;background:transparent;color:#4089ff;font-size:0.16rem"
                />
                <input
                  v-if="exlName == ''"
                  type="file"
                  id="files"
                  ref="refFiles"
                  style="display: none !important"
                  v-on:change="fileLoad"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="steps_li" v-if="stepsAct == 2">
          <div class="steps_dt steps_dt_right">
            <img src="../../assets/images/right_bg.png" alt="" />
          </div>
          <div class="steps_dd">
            <h3>本次可导入数量</h3>
            <div class="steps_num">{{ visibleList.length }}条</div>
          </div>
        </div>
        <div class="steps_li" v-if="stepsAct == 2">
          <div class="steps_dt steps_dt_wrong">
            <img src="../../assets/images/wrong_bg.png" alt="" />
          </div>
          <div class="steps_dd">
            <h3>本次不可导入数量</h3>
            <div class="steps_num steps_num_r">
              {{ unVisibleList.length }}条
            </div>
          </div>
        </div>
      </div>
      <div class="steps_success" v-if="stepsAct == 3">
        <img src="../../assets/images/success_bg.png" alt="" />
        <h3>批量导入完成</h3>
        <p>
          成功导入数据：<span>{{ visibleList.length }}</span>
          条，默认密码：<span>登录账号后6位</span>
        </p>
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
      <div class="tables_box" v-if="stepsAct == 2">
        <div class="search_title center_o_title">
          不可导入学生列表
        </div>
        <template>
          <el-table border :data="unVisibleList" style="width: 100%">
            <el-table-column
              prop="name"
              :render-header="renderHeader"
              label="姓名"
            >
            </el-table-column>
            <el-table-column
              prop="passport"
              :render-header="renderHeader"
              label="学籍号"
            >
            </el-table-column>
            <el-table-column
              prop="gender"
              label="性别"
              :render-header="renderHeader"
            >
              <template slot-scope="scope">
                <div class="sex_li">
                  <img
                    v-if="scope.row.gender == '男'"
                    src="../../assets/images/man.png"
                    alt=""
                  />
                  <img
                    v-if="scope.row.gender == '女'"
                    src="../../assets/images/woman.png"
                    alt=""
                  />
                  <div>{{ scope.row.gender }}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="birth"
              :render-header="renderHeader"
              label="出生日期"
            >
            </el-table-column>
            <el-table-column
              prop="enterYear"
              :render-header="renderHeader"
              label="入学年月"
            >
            </el-table-column>
            <el-table-column prop="phone" label="手机号"> </el-table-column>
            <el-table-column prop="email" label="邮箱"> </el-table-column>
            <el-table-column prop="mark" label="错误提示">
              <template slot-scope="scope">
                <div class="sex_li" v-for="item in scope.row.mark" :key="item">
                  <div style="color:#FE5FB8;padding:0.04rem 0;">{{ item }}</div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </template>
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
      formSearch: {
        level: "",
        grade: "",
        class: "",
        sectionName: "",
        gradeName: "",
        className: ""
      },
      exlName: "",
      exlSize: "",
      exlJson: [],
      visibleList: [],
      unVisibleList: [],
      uuids: "",
      tplUrl: "",
      stepsAct: 1,
      tableData: [],
      levelList: [],
      gradeList: [],
      classList: []
    };
  },
  mounted() {
    this.downloadTpl();
    this.threeChange();
  },
  methods: {
    levleChange(val) {
      // console.log(val);
      this.choseLevel(val);
    },
    gradeChange(val) {
      // console.log(val);
      this.choseGrade(val);
    },
    classChange(val) {
      // console.log(val);
      this.formSearch.class = val;
    },
    // 学段 年级 班级 三级联动
    choseLevel(value) {
      // console.log(value);
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
      // console.log(this.gradeList);
      let gradeNum = this.gradeList[0].Pid;
      this.choseGrade(gradeNum);
    },
    choseGrade(value) {
      // console.log(value);
      this.formSearch.grade = value;
      this.classList = [];
      this.formSearch.class = "";
      this.gradeList.map(e => {
        if (value == e.Pid) {
          this.classList = e.list;
          return false;
        }
      });
      // console.log(this.classList);
      if (this.classList) {
        // this.formSearch.class = this.classList[0].Pid;
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
              // console.log(JSON.parse(data.data).schoolOrg);
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
              that.levelList = levelArr;
              // console.log(that.levelList);
              let levelNum = that.levelList[0].Pid;
              this.choseLevel(levelNum);
            }
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    deleteExl() {
      this.exlName = "";
      this.exlSize = "";
      this.exlJson = [];
    },
    clickLoad() {
      // 下面三种方法实现效果一样
      // 方法一: 原生html
      // document.getElementById('files').click();
      // 方法二: jquery实现
      // $("#files").click();
      // 方法三: Vue实现
      // console.log("点了吗");
      this.$refs.refFiles.dispatchEvent(new MouseEvent("click"));
    },
    fileLoad(e) {
      // console.log(e);
      let that = this;
      // 获取读取的文件File对象 下面两种方法实现效果一样
      // 方法一:原生html获取
      // const selectedFile = document.getElementById('files').files[0];
      // 方法二:Vue实现
      // console.log("点了");
      const selectedFile = this.$refs.refFiles.files[0];
      console.log(this.$refs.refFiles.files[0]);
      var name = selectedFile.name; // 选中文件的文件名
      var size = selectedFile.size; // 选中文件的大小
      // console.log("文件名:" + name + "大小:" + size);
      this.exlName = name;
      this.exlSize = Math.round(size / 1000);
      var rABS = false; // 是否将文件读取为二进制字符串
      var f = selectedFile;
      var reader = new FileReader();
      // if (!FileReader.prototype.readAsBinaryString) {
      FileReader.prototype.readAsBinaryString = function(f) {
        var binary = "";
        var rABS = false; // 是否将文件读取为二进制字符串
        var pt = this;
        var wb; // 读取完成的数据
        var outdata;
        var reader = new FileReader();
        reader.onload = function(e) {
          var bytes = new Uint8Array(reader.result);
          var length = bytes.byteLength;
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          var XLSX = require("xlsx");
          if (rABS) {
            wb = XLSX.read(btoa(fixdata(binary)), {
              // 手动转化
              type: "base64"
            });
          } else {
            wb = XLSX.read(binary, {
              type: "binary"
            });
          }
          // console.log(wb.Sheets[wb.SheetNames[0]]);
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); // outdata就是你想要的东西
          console.log(outdata);
          let str = [
            "请严格按照说明填写内容。模板内容不可做任何改动。带*和红色字体为必填项。结尾不要添加空列。",
            "__EMPTY",
            "__EMPTY_1",
            "__EMPTY_2",
            "__EMPTY_3",
            "__EMPTY_4",
            "__EMPTY_5",
            "__EMPTY_6"
          ];
          let listNew = [];
          outdata.map(item => {
            var obj = item;
            if (obj.__rowNum__ > 1) {
              var objs = {
                name: "",
                passport: "",
                gender: "",
                birth: "",
                enterYear: "",
                phone: "",
                email: "",
                row: obj.__rowNum__
              };
              for (let key in obj) {
                if (key == str[0]) {
                  objs.id = obj[key];
                }
                if (key == str[1]) {
                  objs.name = obj[key];
                }
                if (key == str[2]) {
                  objs.gender = obj[key];
                }
                if (key == str[3]) {
                  objs.birth = obj[key];
                }
                if (key == str[4]) {
                  objs.passport = String(obj[key]).replace(/\s+/g, '');
                }
                if (key == str[5]) {
                  objs.enterYear = obj[key];
                }
                if (key == str[6]) {
                  objs.phone = obj[key];
                }
                if (key == str[7]) {
                  objs.email = obj[key];
                }
                // console.log(objs);
              }
              if (
                objs.name == "" &&
                objs.gender == "" &&
                objs.birth == "" &&
                objs.passport == "" &&
                objs.enterYear == "" &&
                objs.phone == "" &&
                objs.email == ""
              ) {
              } else {
                listNew.push(objs);
              }
            }
            console.log(listNew);
            var regp = /^1[3456789]\d{9}$/;
            var rege = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            for (let i in listNew) {
              listNew[i].mark = [];
              if (listNew[i].name == "") {
                listNew[i].mark.push("姓名为必填项！");
              }
              if (listNew[i].gender == "") {
                listNew[i].mark.push("性别为必填项！");
              }
              if (listNew[i].birth == "") {
                listNew[i].mark.push("出生日期为必填项！");
              } else if (
                listNew[i].birth != "" &&
                (listNew[i].birth.indexOf("年") == -1 ||
                  listNew[i].birth.indexOf("月") == -1 ||
                  listNew[i].birth.indexOf("日") == -1)
              ) {
                listNew[i].mark.push(
                  "出生日期格式有误！（例：2000年01月01日）"
                );
              }
              if (listNew[i].passport == "") {
                listNew[i].mark.push("学籍号为必填项！");
              } else if (
                listNew[i].passport != "" &&
                listNew[i].passport.length < 6
              ) {
                listNew[i].mark.push("学籍号不得少于6位！");
              }
              if (listNew[i].enterYear == "") {
                listNew[i].mark.push("入学年月为必填项！");
              } else if (
                listNew[i].enterYear != "" &&
                (listNew[i].enterYear.indexOf("年") == -1 ||
                  listNew[i].enterYear.indexOf("月") == -1)
              ) {
                listNew[i].mark.push("入学年月格式有误！（例：2000年01月）");
              }
              if (listNew[i].phone != "" && !regp.test(listNew[i].phone)) {
                listNew[i].mark.push("手机号格式有误！");
              }
              if (listNew[i].email != "" && !rege.test(listNew[i].email)) {
                listNew[i].mark.push("邮箱格式有误！");
              }
            }
          });
          // console.log(listNew);
          for (let i in listNew) {
            listNew[i].mark = [...new Set(listNew[i].mark)]
          }
          that.exlJson = listNew;
        };
        reader.readAsArrayBuffer(f);
      };
      if (rABS) {
        reader.readAsArrayBuffer(f);
      } else {
        reader.readAsBinaryString(f);
      }
    },
    updataExcel() {
      // console.log("上传Excel表格");
    },
    downloadTpl() {
      let that = this;
      that.$http
        .get(Url + "/aimw/addStudents/downloadTpl")
        .then(res => {
          // console.log(res);
          var data = res.data;
          // console.log(data);
          if (data.code == 0) {
            that.tplUrl = "data:image;base64," + data.data.fileData;
            that.fileName = data.data.fileName;
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    tplDown() {
      this.downloadFileByBase64(this.tplUrl, this.fileName);
    },
    dataURLtoBlob(dataurl) {
      var arr = dataurl.split(",");
      var mime = arr[0].match(/:(.*?);/)[1];
      var bstr = atob(arr[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },
    downloadFile(url, name = "学生导入模板") {
      var a = document.createElement("a");
      a.setAttribute("href", url);
      a.setAttribute("download", name);
      a.setAttribute("target", "_blank");
      let clickEvent = document.createEvent("MouseEvents");
      clickEvent.initEvent("click", true, true);
      a.dispatchEvent(clickEvent);
    },

    downloadFileByBase64(base64, name) {
      var myBlob = this.dataURLtoBlob(base64);
      var myUrl = URL.createObjectURL(myBlob);
      this.downloadFile(myUrl, name);
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
      console.log(this.formSearch)
      if (this.formSearch.class == "" && that.classList.length == 0) {
        this.$message.error("该学段和年级下尚未创建班级，请重新选择或者去创建对应的班级！");
        return false;
      }
      if (this.formSearch.class == "" && that.classList.length != 0) {
        this.$message.error("请选择导入的学段、年级、班级！");
        return false;
      }
      if (this.exlName == "") {
        this.$message.error("请先上传填好的文件！");
        return false;
      }
      // console.log(this.generateUUID());
      this.uuids = this.generateUUID();
      let useList = [];
      let unUseList = [];
      // console.log(that.exlJson);
      for (let i in that.exlJson) {
        if (that.exlJson[i].mark.length == 0) {
          useList.push(that.exlJson[i]);
        } else {
          unUseList.push(that.exlJson[i]);
        }
      }
      this.visibleList = useList;
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
      // console.log(this.formSearch);
      for (let i in unUseList) {
        unUseList[i].level = this.formSearch.sectionName;
        unUseList[i].grade = this.formSearch.gradeName;
        unUseList[i].class = this.formSearch.className;
      }
      this.unVisibleList = unUseList;
      // console.log(this.visibleList);
      // console.log(this.unVisibleList);
      this.stepsAct = 2;
    },
    generateUUID() {
      var d = new Date().getTime();
      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); // use high-precision timer if available
      }
      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function(c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
      return uuid;
    },
    goSubmit2() {
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
      for (let i in this.visibleList) {
        this.visibleList[i].sectionName = this.formSearch.sectionName;
        this.visibleList[i].gradeName = this.formSearch.gradeName;
        this.visibleList[i].className = this.formSearch.className;
        this.visibleList[i].section = this.formSearch.level;
        this.visibleList[i].grade = this.formSearch.grade;
        this.visibleList[i].class = this.formSearch.class;
      }
      // console.log(this.visibleList);
      let visArr = [];
      for (let i in this.visibleList) {
        let genderStr = "";
        if (this.visibleList[i].gender == "男") {
          genderStr = "1";
        } else if (this.visibleList[i].gender == "女") {
          genderStr = "0";
        }
        this.visibleList[i].passport = String(this.visibleList[i].passport)
        let enterStr = this.visibleList[i].enterYear.replace("年", ",").replace("月", ",").replace("日", "")
        let enterArr = enterStr.split(',')
        for (let i in enterArr) {
          if (enterArr[i] == '') {
            enterArr[i] = '01'
          }
          if (enterArr[i] < 13) {
            if (enterArr[i] < 10 && enterArr[i].indexOf('0') == -1) {
              enterArr[i] = "0" + enterArr[i]
            }
          }
        }
        let enterYear = enterArr.join("")
        let birthStr = this.visibleList[i].birth.replace("年", ",").replace("月", ",").replace("日", "")
        let birthArr = birthStr.split(',')
        for (let i in birthArr) {
          if (birthArr[i] < 13) {
            if (birthArr[i] < 10 && birthArr[i].indexOf('0') == -1) {
              birthArr[i] = "0" + birthArr[i]
            }
          }
        }
        let birth = birthArr.join("")
        let visObj = {
          name: this.visibleList[i].name,
          passport: this.visibleList[i].passport,
          password: this.visibleList[i].passport.substring(
            this.visibleList[i].passport.length - 6
          ),
          gender: genderStr,
          birth: birth,
          enterYear: enterYear,
          phone: this.visibleList[i].phone,
          email: this.visibleList[i].email,
          sectionName: this.visibleList[i].sectionName,
          section: this.visibleList[i].section,
          gradeName: this.visibleList[i].gradeName,
          grade: this.visibleList[i].grade,
          className: this.visibleList[i].className,
          class: this.visibleList[i].class
        };
        visArr.push(visObj);
      }
      console.log(visArr);
      this.$http
        .post(Url + "/aimw/addStudents/importData", visArr)
        .then(res => {
          // console.log(res.data);
          var data = res.data;
          if (data.code == 0) {
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
.batch_wrap {
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
      width: 8.9rem;
      margin: 0.52rem auto 0;
      padding-bottom: 0.1rem;
      .el-form {
        padding: 0.14rem 0 0.24rem;
        .mt_10 {
          margin-top: 0.1rem;
        }
        .el-form-item__label {
          line-height: 0.36rem;
        }
        .el-form-item__content {
          line-height: 0.36rem;
        }
        .el-select {
          width: 4.1rem;
        }
        .el-select .el-input__inner {
          height: 0.36rem;
          line-height: 0.36rem;
        }
      }
      .el-form-item {
        margin: 0;
      }
      .steps_tip {
        display: inline-block;
        height: 0.45rem;
        line-height: 0.45rem;
        font-size: 0.14rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #354b70;
        padding: 1px;
        background: linear-gradient(185deg, #00eafe, #00b6f0);
        box-shadow: 0px 3px 12px 0px rgba(155, 183, 161, 0.1);
        border-radius: 0.02rem;
        .tip_txt {
          border-radius: 0.02rem;
          height: 100%;
          padding: 0 0.3rem 0 0.1rem;
          background: #effeff;
          display: flex;
          align-items: center;
          img {
            margin-right: 0.04rem;
            width: 0.14rem;
            height: 0.14rem;
          }
        }
      }
      .steps_li {
        width: 100%;
        // height: 1.38rem;
        display: flex;
        margin-bottom: 0.32rem;
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
      width: 11.8rem;
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
      }
      .center_o_title::after {
        top: -0.02rem;
        width: 0.18rem;
        height: 0.22rem;
        background-image: url(../../assets/images/report/tip_index.png);
        background-size: 100% 100%;
        // background:#
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
        .el-table__header,
        .el-table__body {
          col:nth-child(1) {
            width: 1rem;
          }
          col:nth-child(3) {
            width: 0.8rem;
          }
          col:nth-child(4) {
            width: 1.6rem;
          }
          col:nth-child(8) {
            width: 2rem;
          }
          col:nth-child(9) {
            width: 0;
          }
        }
      }
    }
  }
}
</style>
