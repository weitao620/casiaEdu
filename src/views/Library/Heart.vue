<template>
  <div class="heart_wrap">
    <div class="com_title">
      <div class="c_titles">
        <div class="com_cir">
          <img src="../../assets/images/index_top.png" alt="" />
        </div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>心理档案</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="search_form_box">
      <div class="search_title center_o_title">
        查询
      </div>
      <el-form
        :inline="true"
        ref="formSearch"
        :model="formSearch"
        class="search_form"
      >
        <el-form-item label="姓名:" prop="name">
          <el-input
            v-model="formSearch.name"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="学籍号:" prop="passport">
          <el-input
            v-model="formSearch.passport"
            placeholder="请输入学籍号"
          ></el-input>
        </el-form-item>
        <el-form-item label="学段:" prop="level">
          <el-select
            v-model="formSearch.level"
            placeholder="全部"
            @change="choseLevel"
          >
            <el-option
              v-for="item in levelList"
              :key="item.Pid"
              :label="item.Name"
              :value="item.Pid"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年级:" prop="grade">
          <el-select
            v-model="formSearch.grade"
            placeholder="全部"
            @change="choseGrade"
          >
            <el-option
              v-for="item in gradeList"
              :key="item.Pid"
              :label="item.Name"
              :value="item.Pid"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级:" prop="class">
          <el-select v-model="formSearch.class" placeholder="全部">
            <el-option
              v-for="item in classList"
              :key="item.Pid"
              :label="item.Name"
              :value="item.Pid"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态:" prop="status">
          <el-select v-model="formSearch.status" placeholder="全部">
            <el-option label="不在籍" value="0"></el-option>
            <el-option label="在籍" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button
            type="primary"
            class="resets"
            @click="resetForm('formSearch')"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <div class="tables_box">
      <div class="search_title center_o_title">
        列表
      </div>
      <div class="el_btn_box">
        <div class="el_one" v-if="power2">
          <el-button class="el_btn_one" @click="someExport" type="primary">
            <!-- <img src="../../assets/images/yonghu.png" alt="" /> -->
            <i class="iconfont icon-icon-"></i>
            批量导出
          </el-button>
        </div>
        <!-- <div class="el_two">
          <el-button class="el_btn_two" @click="someDelete('所选')" type="primary">
            <i class="iconfont icon-shanchu1"></i>
            批量删除
          </el-button>
        </div> -->
      </div>
      <template>
        <el-table
          ref="multipleTables"
          border
          :data="tableData"
          style="width: 100%"
          @sort-change="sortChange"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection"> </el-table-column>
          <el-table-column type="index" label="序号" :index="indexMethod"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="passport" label="学籍号"> </el-table-column>
          <el-table-column prop="naturalization" label="状态">
             <!-- <template slot-scope="scope">
              {{ scope.row.naturalization == 1 ? '在籍' : '不在籍' }}
            </template> -->
          </el-table-column>
          <el-table-column prop="gradeName" label="年级"> </el-table-column>
          <el-table-column prop="className" label="班级"> </el-table-column>
          <el-table-column prop="evaluationTime" sortable label="测评次数">
            <template slot-scope="scope">
              {{ scope.row.evaluationTime }}
            </template>
          </el-table-column>
          <el-table-column prop="date" sortable label="最近一次测评时间">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span v-if="!power1">暂无权限</span>
              <el-button v-if="power1" @click="lookReview(scope.row)" type="text" size="small"
                >查看心理档案</el-button
              >
              <!-- <el-button type="text" @click="someDelete('当前')" size="small">删除</el-button> -->
            </template>
          </el-table-column>
        </el-table>
      </template>
      <div class="table_page">
        <div class="page_total">
          共 <span>{{ total }}</span> 条 , 第
          <span>{{ currentPage }}/{{ pageNum }}</span> 页
        </div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="limit"
          layout="prev, pager, next, sizes, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
    <!-- <div class="body_page" v-if="page.rowNum > 0">
      <el-pagination
        background
        :pager-count="5"
        :page-size="15"
        :current-page="page.page"
        :total="page.rowNum"
        @current-change="handleCurrentChange"
        layout="prev, pager, next, jumper"
      >
      </el-pagination>
    </div> -->
  </div>
</template>

<script>
import Url from "@/assets/js/url.js";
export default {
  name: "report",
  data() {
    return {
      power1: false,
      power2: false,
      levelList: [],
      gradeList: [],
      classList: [],
      checkList: [],
      tabActive: 1,
      limit: 10,
      total: 0,
      pageNum: 1,
      currentPage: 1,
      formSearch: {
        name: "",
        passport: "",
        level: "",
        grade: "",
        class: "",
        status: ""
      },
      tableData: []
    };
  },
  created() {
    // aaa
  },
  mounted() {
    // aaa
    this.auth()
  },
  methods: {
    indexMethod(index) {
      let that = this;
      return index + 1 + that.limit * (this.currentPage - 1);
    },
    auth() {
      let that = this;
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
            this.getList(this.currentPage);
            this.threeChange();
            this.powerData()
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    powerData() {
      let power = JSON.parse(localStorage.getItem("userAuth")).menuAuthID;
      console.log(power);
      this.power1 = power.includes(30101); // 心理档案--查看
      this.power2 = power.includes(30103); // 心理档案--批量导出
    },
    handleSelectionChange(val) {
      this.checkList = val;
    },
    // 学段 年级 班级 三级联动
    choseLevel(value) {
      console.log(value);
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
    },
    choseGrade(value) {
      console.log(value);
      this.classList = [];
      this.formSearch.class = "";
      this.gradeList.map(e => {
        if (value == e.Pid) {
          this.classList = e.list;
          return false;
        }
      });
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
              console.log(levelArr);
              that.levelList = levelArr;
            }
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    // 获取报告列表
    getList(page) {
      let that = this;
      let status = ''
      if (that.formSearch.status == '') {
        status = 2
      } else {
        status = that.formSearch.status
      }
      let param = {
        currentPage: page,
        pageSize: that.limit,
        name: that.formSearch.name,
        passport: that.formSearch.passport,
        section: that.formSearch.level,
        grade: that.formSearch.grade,
        class: that.formSearch.class,
        // classIds: [12501, 12502],
        naturalization: status,
        userAuth: localStorage.getItem('userAuth')
      };
      that.currentPage = page
      this.$http
        .get(Url + "/aimw/mentalFile/listMentalFilesInfo", {
          params: param
        })
        .then(res => {
          let data = res.data.data;
          if (res.data.code == 0) {
            if (data) {
              for (let i in data.results) {
                if (data.results[i].naturalization == 1) {
                  data.results[i].naturalization = '在籍'
                } else {
                  data.results[i].naturalization = '不在籍'
                }
              }
              that.tableData = data.results;
              that.total = data.count;
              that.pageNum = Math.ceil(data.count / that.limit)
            } else {
              that.tableData = [];
              that.total = 0;
              that.pageNum = 1
            }
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    // 批量导出
    someExport() {
      if (this.checkList.length == 0) {
        this.$message({
          type: "warning",
          message: "没有选择要导出的数据!"
        });
        return false;
      }
      console.log(this.checkList)
      this.download()
    },
    download() {
      const content = [...this.checkList];
      // list为要下载的数据，如果不是可以先进行数据处理
      // import('引入Export2Excel路径')
      import("@/excel/Export2Excel").then(excel => {
        const tHeader = ["学生姓名", "学籍号", "状态", "年级", "班级", "评测次数", "最近一次测评时间"];
        const filterVal = ["name", "passport", "naturalization", "gradeName", "className", "evaluationTime", "date"];
        console.log('formatJson')
        console.log(filterVal)
        const content = this.checkList
        console.log(content)
        // for (let i in content) {
        //   if (content[i].naturalization == 1) {
        //     content[i].naturalization = "在籍"
        //   } else if (content[i].naturalization == 0) {
        //     content[i].naturalization = "不在籍"
        //   }
        // }
        const data = this.formatJson(filterVal, content);
        excel.export_json_to_excel(tHeader, data, "批量导出的心理档案数据");
        setTimeout(() => {
          this.toggleSelection()
        }, 100);
      });
    },
    formatJson(filterVal, jsonData) {
      console.log('formatJson')
      console.log(filterVal)
      console.log(jsonData)
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    toggleSelection() {
      this.$refs.multipleTables.clearSelection();
    },
    // 批量删除
    someDelete() {
      if (this.checkList.length == 0) {
        this.$message({
          type: "warning",
          message: "没有选择要初始化密码的数据!"
        });
        return false;
      }
      var checkArr = [];
      for (let i in this.checkList) {
        checkArr.push({ reportId: this.checkList[i].reportId });
      }
      console.log(checkArr);
      this.$confirm(
        '<div class="confirm_box"><p>确定要删除所选数据？</p><p class="con_p2">删除后不可恢复</p></div>',
        "提示",
        {
          dangerouslyUseHTMLString: true,
          cancelButtonText: "取消",
          confirmButtonText: "确定"
        }
      )
        .then(() => {
          this.$http
            .delete(Url + "/aimw/report/deleteReports", {
              data: checkArr
            })
            .then(res => {
              var data = res.data;
              if (data.code == 0) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                this.getList(this.currentPage);
              } else {
                this.$message({
                  type: "error",
                  message: "删除失败!"
                });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      console.log("批量删除");
    },
    // 单个删除
    singleDelete(row) {
      console.log(row);
      this.$confirm(
        '<div class="confirm_box"><p>确定要删除当前数据？</p><p class="con_p2">删除后不可恢复</p></div>',
        "提示",
        {
          dangerouslyUseHTMLString: true,
          cancelButtonText: "取消",
          confirmButtonText: "确定"
        }
      )
        .then(() => {
          var checkArr = [{ reportId: row.reportId }];
          this.$http
            .delete(Url + "/aimw/report/deleteReports", {
              data: checkArr
            })
            .then(res => {
              var data = res.data;
              if (data.code == 0) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                this.getList(this.currentPage);
              } else {
                this.$message({
                  type: "error",
                  message: "删除失败!"
                });
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      console.log("单个删除");
    },
    lookReview(data) {
      console.log(data);
      this.$router.push({
        name: "review",
        params: { userID: data.passport }
      });
    },
    tabChange(type) {
      this.tabActive = type;
    },
    sortChange(e) {
      console.log(e);
    },
    handleSizeChange(val) {
      this.limit = val
      console.log(`每页 ${val} 条`);
      this.getList(1)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val
      this.getList(this.currentPage)
    },
    onSubmit() {
      console.log(this.formSearch);
      this.getList(1);
    },
    resetForm(formName) {
      console.log(this.$refs[formName].resetFields());
      this.$refs[formName].resetFields();
      this.getList(1)
    },
    libraryHome(e) {
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style lang="less">
.heart_wrap {
  text-align: left;
  margin: 0 0.22rem;
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
      // img {
      //   display: inline-block;
      //   width: 0.24rem;
      //   height: 0.24rem;
      //   margin-right: 0.06rem;
      // }
    }
    .tab_box {
      display: flex;
      justify-content: flex-end;
      box-shadow: 0px 2px 9px 0px rgba(0, 123, 255, 0.2);
      .tab_btns {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 0.8rem;
        height: 0.32rem;
        font-size: 0.16rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #7786ac;
        background: #ffffff;
        border-radius: 0px 0.04rem 0.04rem 0px;
        img {
          margin-right: 0.02rem;
          width: 0.15rem;
          height: 0.15rem;
        }
      }
      .tab_btns_l {
        border-radius: 0.04rem 0px 0px 0.04rem;
        img {
          width: 0.18rem;
          height: 0.17rem;
        }
      }
      .tab_act {
        color: #ffffff;
        background: linear-gradient(-90deg, #babfff 0%, #7279ff 100%);
      }
    }
  }
  .search_title {
    display: flex;
    align-items: center;
    font-size: 0.2rem;
    line-height: 1;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #354b70;
    img {
      width: 0.14rem;
      height: 0.14rem;
      margin-right: 0.1rem;
    }
  }
  // .tables_box {
  //   margin: 0.2rem 0;
  //   background: #ffffff;
  //   box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
  //   border-radius: 4px;
  //   padding: 0.2rem 0.24rem;
  //   .sex_li{
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     line-height: 1;
  //   }
  //   .el_btn_box {
  //     margin: 0.18rem 0;
  //     .el-button + .el-button {
  //       margin-left: 0.18rem;
  //       padding: 0.09rem 0.14rem;
  //     }
  //     .el_btn_one,
  //     .el_btn_two {
  //       font-size: 0.16rem;
  //       font-family: Source Han Sans CN;
  //       font-weight: 400;
  //       color: #ffffff;
  //       background: linear-gradient(263deg, #0075ff, #00c2ff);
  //       box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
  //       border-radius: 0.03rem;
  //       padding: 0.09rem 0.14rem;
  //       span {
  //         display: flex;
  //         justify-content: center;
  //         align-items: center;
  //         img {
  //           margin-right: 0.02rem;
  //         }
  //       }
  //     }
  //     .el_btn_two {
  //       background: #ffffff;
  //       border-image: linear-gradient(45deg, #0075ff, #00c2ff) 10 10;
  //       box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
  //       border-radius: 0.03rem;
  //       color: #006cff;
  //     }
  //   }
  //   .table_page {
  //     display: flex;
  //     font-family: Source Han Sans CN;
  //     font-weight: 400;
  //     font-size: 0.14rem;
  //     align-items: center;
  //     justify-content: flex-end;
  //     margin-bottom: 0.36rem;
  //     .page_total {
  //       font-size: 0.14rem;
  //       color: #828fb2;
  //       span {
  //         color: #006cff;
  //       }
  //     }
  //     .el-pager {
  //       .number {
  //         padding: 0 0.04rem;
  //         // width: 0.28rem;
  //         height: 0.28rem;
  //         line-height: 0.28rem;
  //         border: 0.01rem solid #e1e9ff;
  //         font-size: 0.14rem;
  //         color: #7786ac;
  //         min-width: 0.28rem;
  //         // background: linear-gradient(0deg, #C4ECFF 0%, #97CDFF 100%);
  //         background: #ecf5ff;
  //         margin: 0 0.03rem;
  //       }
  //       .number.active {
  //         color: #ffffff;
  //         background: linear-gradient(0deg, #0075ff, #00c2ff);
  //       }
  //     }
  //     .el-pagination {
  //       .btn-next,
  //       .btn-prev {
  //         background: center center no-repeat
  //           linear-gradient(0deg, #c4ecff 0%, #97cdff 100%);
  //         background-size: 100%;
  //         cursor: pointer;
  //         margin: 0;
  //         color: #85b4ff;
  //         min-width: 0.28rem;
  //         padding: 0;
  //         margin: 0 0.04rem;
  //       }
  //       .el-select .el-input .el-input__inner {
  //         color: #7786ac;
  //       }
  //     }
  //     .el-pagination button,
  //     .el-pagination span:not([class*="suffix"]) {
  //       display: inline-block;
  //       font-size: 0.14rem;
  //       min-width: 0.28rem;
  //       height: 0.28rem;
  //       line-height: 0.28rem;
  //     }
  //     .el-pagination__sizes {
  //       margin-right: 0.05rem;
  //       color: #7786ac;
  //     }
  //     .el-pagination__jump {
  //       margin: 0;
  //       color: #7786ac;
  //     }
  //     .el-pagination__editor.el-input .el-input__inner{
  //       color: #006cff;
  //     }
  //   }
  //   .el-table {
  //     margin-bottom: 0.56rem;
  //   }
  //   .el-table th,
  //   .el-table tr,
  //   .el-table td {
  //     text-align: center;
  //     font-size: 16px;
  //     font-weight: 400;
  //     font-family: Source Han Sans CN;
  //   }
  //   .el-table td,
  //   .el-table th.is-leaf {
  //     border-color: #e1e9ff;
  //   }
  //   .el-table thead th,
  //   .el-table thead tr {
  //     background: linear-gradient(0deg, #c4ecff 0%, #97cdff 100%);
  //     color: #354b70;
  //   }
  //   .el-table td {
  //     color: #7786ac;
  //   }
  //   .el-table--border,
  //   .el-table--group,
  //   .el-table--border:after,
  //   .el-table--group:after,
  //   .el-table:before {
  //     border-color: #e1e9ff;
  //   }
  //   .el-table--border::after,
  //   .el-table--group::after,
  //   .el-table::before {
  //     background: #e1e9ff;
  //   }
  //   .el-button--mini,
  //   .el-button--small {
  //     font-size: 0.16rem;
  //   }
  //   .el-button--primary.is-plain,
  //   .el-button--danger.is-plain {
  //     width: 0.56rem;
  //     height: 0.24rem;
  //     padding: 0;
  //     border: 0.01rem solid;
  //     opacity: 0.76;
  //     border-radius: 0.02rem;
  //     font-size: 0.16rem;
  //     font-family: Source Han Sans CN;
  //     font-weight: 400;
  //   }
  //   .el-button--primary.is-plain,
  //   .el-button--primary.is-plain:focus,
  //   .el-button--primary.is-plain:hover {
  //     border-image: linear-gradient(45deg, #0075ff, #00c2ff) 10 10;
  //     background: #ecf5ff;
  //     color: #006cff;
  //   }
  //   .el-button--danger.is-plain,
  //   .el-button--danger.is-plain:focus,
  //   .el-button--danger.is-plain:hover {
  //     border-image: linear-gradient(45deg, #fe5fb8, #ff83df) 10 10;
  //     background: #fef0f0;
  //     color: #fe5fb8;
  //   }
  // }
  // 表格
  .tables_box {
    margin: 0.2rem 0;
    background: #ffffff;
    box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
    border-radius: 0.04rem;
    padding: 0.2rem 0.24rem;
    // 表格上面的操作按钮
    .el_btn_box {
      margin: 0.18rem 0;
      display: flex;
      .el_one,
      .el_two {
        margin-right: 0.18rem;
        width: 1.16rem;
        height: 0.36rem;
        padding: 1px;
        background: linear-gradient(263deg, #00c2ff, #0075ff);
        border-radius: 0.04rem;
        overflow: hidden;
        box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
        // .el-button + .el-button {
        //   margin-left: 0.18rem;
        //   padding: 0.09rem 0.14rem;
        // }
        .el_btn_one,
        .el_btn_two {
          border: 0;
          font-size: 0.16rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
          background: linear-gradient(263deg, #00c2ff, #0075ff);
          border-radius: 0.04rem;
          padding: 0;
          width: 100%;
          height: 100%;
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 0.14rem;
              height: 0.14rem;
              margin-right: 0.02rem;
            }
          }
        }
        .el_btn_two {
          background: #ffffff;
          border-image: linear-gradient(45deg, #0075ff, #00c2ff) 10 10;
          box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
          border-radius: 0.03rem;
          color: #006cff;
          img {
            width: 0.18rem;
            height: 0.16rem;
          }
        }
      }
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
      .el-table__header,
      .el-table__body {
        // col {
        //   width: 2rem;
        // }
        col:nth-child(2) {
          width: 0.8rem;
        }
        col:nth-child(5),
        col:nth-child(6),
        col:nth-child(7) {
          width: 1.2rem;
        }
        col:nth-child(9) {
          width: 2.4rem;
        }
        col:nth-child(10) {
          width: 2.2rem;
        }
        col:nth-child(11) {
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
    // 底部分页
    .table_page {
      display: flex;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 0.14rem;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 0.36rem;
      .page_total {
        font-size: 0.14rem;
        color: #828fb2;
        span {
          color: #006cff;
        }
      }
      .el-pagination {
        .el-pager {
          .number {
            padding: 0 0.04rem;
            // width: 0.28rem;
            height: 0.28rem;
            line-height: 0.26rem;
            border: 0.01rem solid #e1e9ff;
            font-size: 0.14rem;
            color: #7786ac;
            min-width: 0.28rem;
            background: linear-gradient(
              0deg,
              rgba(196, 236, 255, 0.14) 0%,
              rgba(151, 205, 255, 0.14) 100%
            );
            margin: 0 0.03rem;
          }
          .number.active {
            color: #ffffff;
            background: linear-gradient(0deg, #0075ff, #00c2ff);
          }
        }
        .btn-next,
        .btn-prev {
          background: center center no-repeat
            linear-gradient(0deg, #c4ecff 0%, #97cdff 100%);
          background-size: 100%;
          cursor: pointer;
          margin: 0;
          color: #85b4ff;
          min-width: 0.28rem;
          padding: 0;
          margin: 0 0.04rem;
        }
        .el-select .el-input .el-input__inner {
          color: #7786ac;
        }
        button,
        span:not([class*="suffix"]) {
          display: inline-block;
          font-size: 0.14rem;
          min-width: 0.28rem;
          height: 0.28rem;
          line-height: 0.28rem;
        }
        .el-pagination__sizes {
          margin-right: 0.05rem;
          color: #7786ac;
        }
        .el-pagination__jump {
          margin: 0;
          color: #7786ac;
          .el-pagination__editor.el-input .el-input__inner {
            color: #006cff;
          }
        }
      }
    }
  }
  // 头部搜索项
  .search_form_box {
    background: #ffffff;
    box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
    border-radius: 0.04rem;
    padding: 0.2rem 0.24rem;
    .search_form {
      margin-top: 0.24rem;
    }
    // 查询、重置按钮
    .el-button {
      border: 0.01rem solid #dcdfe6;
      padding: 0.09rem 0.27rem;
      font-size: 0.16rem;
      border-radius: 0.04rem;
      background: linear-gradient(263deg, #00c2ff, #0075ff);
      box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
    }
    .el-button.resets {
      background: linear-gradient(261deg, #8fb1d7, #b8d5f5);
      box-shadow: 0px 2px 10px 0px rgba(171, 196, 227, 0.45);
    }
    // 搜索项
    .el-form--inline {
      .el-form-item {
        margin: 0 0 0.16rem 0.32rem;
        .el-form-item__label {
          padding-right: 0.1rem;
          font-size: 0.16rem;
          line-height: 0.36rem;
        }
        .el-form-item__content {
          width: 2.2rem;
          line-height: 0.36rem;
          font-size: 0.16rem;
          .el-input {
            font-size: 0.16rem;
            .el-input__icon {
              width: 0.25rem;
              line-height: 0.36rem;
              font-size: 0.16rem;
            }
            .el-input__inner {
              // width: 1.76rem;
              border: 0.01rem solid #dcdfe6;
              height: 0.36rem;
              line-height: 0.36rem;
              padding: 0 0.1rem;
            }
          }
          .el-select {
            width: 100%;
          }
        }
      }
      .el-form-item {
        margin-left: 0.22rem;
      }
      .el-form-item:first-child {
        margin-left: 0.22rem;
      }
      .el-form-item:last-child {
        margin-left: 0.22rem;
        .el-form-item__content {
          width: auto;
          .el-button + .el-button {
            margin-left: 0.18rem;
          }
        }
      }
    }
  }
}
</style>
