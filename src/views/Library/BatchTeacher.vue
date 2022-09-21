<template>
  <div class="batch_wrap">
    <div class="com_title">
      <div class="c_titles">
        <div class="com_cir">
          <img src="../../assets/images/index_top.png" alt="" />
        </div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>基础设置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/library/teacher' }"
            >教师管理</el-breadcrumb-item
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
        <div class="steps_li" v-if="stepsAct == 1">
          <div class="steps_dt">
            <img src="../../assets/images/batch_bg.png" alt="" />
          </div>
          <div class="steps_dd">
            <h3>填写导入成员的信息</h3>
            <p>
              请按照数据模版的格式准备导入数据，模版中的表头名称不可更改，表头行不能删除
            </p>
            <!-- <a :href="tplUrl">下载模版</a> -->
            <a href="javascript:;" @click="tplDown">下载模版</a>
          </div>
        </div>
        <div class="steps_li" v-if="stepsAct == 1">
          <div class="steps_dt">
            <img src="../../assets/images/upload_bg.png" alt="" />
          </div>
          <div class="steps_dd">
            <h3>上传填好的成员信息表</h3>
            <p>文件后缀名必须为 .xls或 .xlsx（即Excel格式）</p>

            <div class="steps_upload">
              <div class="steps_upload">
                <img src="../../assets/images/module_bg.png" alt="" />
                <div style="line-height:0.24rem" v-if="exlName != ''">
                  <a class="s_xcle" href="javascript:;">{{exlName}}</a>
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
                  ref="refFilet"
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
          成功导入数据：<span>{{visibleList.length}}</span> 条，默认密码：<span>登录账号后6位</span>
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
          不可导入成员列表
        </div>
        <template>
          <el-table border :data="unVisibleList" style="width: 100%">
            <el-table-column
              prop="row"
              label="行数"
            ></el-table-column>
            <el-table-column
              prop="name"
              :render-header="renderHeader"
              label="姓名"
            >
            </el-table-column>
            <el-table-column
              prop="gender"
              :render-header="renderHeader"
              label="性别"
            >
            </el-table-column>
            <el-table-column
              prop="passport"
              :render-header="renderHeader"
              label="登录账号"
            >
            </el-table-column>
            <el-table-column prop="phone" label="手机号"> </el-table-column>
            <el-table-column prop="email" label="邮箱"> </el-table-column>
            <el-table-column prop="mark" label="错误提示">
              <template slot-scope="scope">
                <div class="sex_li" v-for="item in scope.row.mark" :key="item">
                  <div style="color:#FE5FB8">{{ item }}</div>
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
      exlName: "",
      exlSize: "",
      exlJson: [],
      visibleList: [],
      unVisibleList: [],
      uuids: "",
      tplUrl: "",
      stepsAct: 1,
      tableData: []
    };
  },
  mounted() {
    this.downloadTpl();
  },
  methods: {
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
      console.log("点了吗");
      this.$refs.refFilet.dispatchEvent(new MouseEvent("click"));
    },
    fileLoad(e) {
      console.log(e);
      let that = this;
      // 获取读取的文件File对象 下面两种方法实现效果一样
      // 方法一:原生html获取
      // const selectedFile = document.getElementById('files').files[0];
      // 方法二:Vue实现
      console.log("点了");
      const selectedFile = this.$refs.refFilet.files[0];
      console.log(this.$refs.refFilet.files[0]);
      var name = selectedFile.name; // 选中文件的文件名
      var size = selectedFile.size; // 选中文件的大小
      console.log("文件名:" + name + "大小:" + size);
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
          console.log(wb.Sheets[wb.SheetNames[0]]);
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); // outdata就是你想要的东西
          console.log(outdata);
          let str = [
            "带*和红色字体为必填项。结尾不要添加空列。",
            "__EMPTY",
            "__EMPTY_1",
            "__EMPTY_2",
            "__EMPTY_3",
            "__EMPTY_4"
          ];
          let listNew = [];
          outdata.map(item => {
            var obj = item;
            console.log(obj.__rowNum__);
            if (obj.__rowNum__ > 1) {
              var objs = {
                name: "",
                passport: "",
                gender: "",
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
                  objs.passport = obj[key].replace(/\s+/g, '');
                }
                if (key == str[4]) {
                  objs.phone = obj[key];
                }
                if (key == str[5]) {
                  objs.email = obj[key];
                }
              }
              if (
                objs.name == "" &&
                objs.gender == "" &&
                objs.passport == "" &&
                objs.phone == "" &&
                objs.email == ""
              ) {
              } else {
                listNew.push(objs);
              }
            }
            console.log(listNew)
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
              if (listNew[i].passport == "") {
                listNew[i].mark.push("登录账号为必填项！");
              } else if (listNew[i].passport != "" && String(listNew[i].passport).length < 6) {
                listNew[i].mark.push("登录账号不得少于6位！");
              }
              if (listNew[i].phone != "" && !regp.test(listNew[i].phone)) {
                listNew[i].mark.push("手机号格式有误！");
              }
              if (listNew[i].email != "" && !rege.test(listNew[i].email)) {
                listNew[i].mark.push("邮箱格式有误！");
              }
            }
          });
          console.log(listNew);
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
      console.log("上传Excel表格");
    },
    downloadTpl() {
      let that = this;
      that.$http
        .get(Url + "/aimw/addTeachers/downloadTpl")
        .then(res => {
          console.log(res);
          var data = res.data;
          console.log(data);
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
    downloadFile(url, name = "教师导入模板") {
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
      if (this.exlName == '') {
        this.$message.error('请先上传填好的文件！');
        return false
      }
      console.log(this.generateUUID());
      this.uuids = this.generateUUID();
      let useList = [];
      let unUseList = [];
      for (let i in that.exlJson) {
        if (that.exlJson[i].mark.length == 0) {
          useList.push(that.exlJson[i]);
        } else {
          unUseList.push(that.exlJson[i]);
        }
      }
      this.visibleList = useList;
      this.unVisibleList = unUseList;
      console.log(this.visibleList);
      console.log(this.unVisibleList);
      this.stepsAct = 2;
      // var param = {
      //   taskID: this.uuids,
      //   filePath: that.tplUrl
      // };
      // this.stepsAct = 2;
      // that.$http
      //   .post(Url + "/aimw/addTeachers/addData", param)
      //   .then(res => {
      //     console.log(res.data);
      //     // console.log(JSON.parse(res.data.data.userAuth));
      //     var data = res.data;
      //     if (data.code == 0) {
      //       this.stepsAct = 2;
      //     } else {
      //       that.errorMsg = data.msg;
      //     }
      //   })
      //   .catch(res => {
      //     console.log(res);
      //   });
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
      var param = {
        taskID: this.uuids
      };
      console.log(this.visibleList)
      let visArr = []
      for (let i in this.visibleList) {
        let genstr = ''
        if (this.visibleList[i].gender == '男') {
          genstr = 1
        } else if (this.visibleList[i].gender == '女') {
          genstr = 0
        }
        let passportInt = String(this.visibleList[i].passport)
        let passwordStr = passportInt.substring(passportInt.length - 6)
        console.log(passwordStr)
        let vObj = {
          passport: this.visibleList[i].passport,
          password: passwordStr,
          name: this.visibleList[i].name,
          gender: genstr,
          phone: this.visibleList[i].phone,
          email: this.visibleList[i].email
        }
        visArr.push(vObj)
      }
      // this.stepsAct = 3;
      console.log(visArr)
      this.$http
        .post(Url + "/aimw/addTeachers/importData", visArr)
        .then(res => {
          console.log(res.data);
          // console.log(JSON.parse(res.data.data.userAuth));
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
      // var param = {
      //   taskID: this.uuids
      // };
      // this.$http
      //   .delete(Url + "/aimw/addTeachers/cancelImport", {
      //     data: param
      //   })
      //   .then(res => {
      //     var data = res.data;
      //     if (data.code == 0) {
      //       this.$message({
      //         type: "success",
      //         message: "取消上传成功!"
      //       });
      //     } else {
      //       this.$message({
      //         type: "error",
      //         message: "取消上传失败!"
      //       });
      //     }
      //   });
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
        // text-align: left;
        align-items: center;
        line-height: 0.24rem;
        margin: 0.08rem 0;
        img {
          width: 0.14rem;
          height: 0.14rem;
          margin-right: 0.05rem;
        }
      }
      // 表格样式
      .el-table {
        margin-bottom: 0.56rem;
        min-height: 0;
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
        .el-table__header,
        .el-table__body {
          col:nth-child(1) {
            width: 0.8rem;
          }
          col:nth-child(2) {
            width: 1.2rem;
          }
          col:nth-child(7) {
            width: 2rem;
          }
          col:nth-child(8) {
            width: 0;
          }
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
