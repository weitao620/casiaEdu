<template>
  <div class="record_wrap">
    <div class="com_title">
      <div class="c_titles">
        <div class="com_cir">
          <img src="../../assets/images/index_top.png" alt="" />
        </div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>{{resultFlag ? '数据复核' : '数据导入'}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="record_main" v-if="!resultFlag">
      <div class="record_left">
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
            <el-form-item class="time_data" prop="time" label="时间范围:">
              <el-date-picker
                v-model="formSearch.time"
                type="daterange"
                range-separator="~"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
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
          <div class="search_title center_o_title" style="positon:relative">
            列表
            <div class="el_btn_box el_btn_boa">
              <div class="el_one">
                <el-button
                  class="el_btn_one"
                  @click="getList(1)"
                  type="primary"
                >
                  <i class="iconfont icon-shuaxin1"></i>
                  刷新列表
                </el-button>
              </div>
            </div>
          </div>
          <div class="el_btn_box">
            <div class="el_one">
              <el-button class="el_btn_one" @click="joinCheck()" type="primary">
                <i class="iconfont icon-icon-"></i>
                加入人工复核
              </el-button>
            </div>
          </div>
          <template>
            <el-table
              border
              :data="tableData"
              @sort-change="sortChange"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection"> </el-table-column>
              <el-table-column prop="name" label="姓名"> </el-table-column>
              <el-table-column prop="name" label="班级"> </el-table-column>
              <el-table-column prop="passport" label="学籍号">
              </el-table-column>
              <el-table-column prop="date" label="完成时间"> </el-table-column>
              <el-table-column prop="name" label="操作用时"> </el-table-column>
              <el-table-column prop="warning" label="评估结果">
                <template slot-scope="scope">
                  <div class="primary_g" v-if="scope.row.warning == 0">
                    <el-button type="primary" plain size="small"
                      >正常</el-button
                    >
                  </div>
                  <div class="primary_r" v-if="scope.row.warning == 1">
                    <el-button type="danger" plain size="small"
                      >需关注</el-button
                    >
                  </div>
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
      </div>
      <div class="record_right">
        <div class="record_no" v-if="!checkFlag">
          <div>
            <img src="../../assets/images/params/nothing.png" alt="" />
            <p>尚未添加数据</p>
          </div>
        </div>
        <div v-else>
          <div class="record_top">
            <div class="record_num">
              共计<span>{{rightList.length}}</span>条
            </div>
            <div class="record_clear" @click="clearRight">清空</div>
          </div>
          <ul class="record_ul">
            <li v-for="(item, index) in rightList" :key="item.name">
              <div class="re_index">{{ index + 1 }}</div>
              <div class="re_name">{{ item.name }}</div>
              <div class="re_time">{{ item.date }}</div>
              <div class="re_tips">
                <span
                  :class="item.warning == 1 ? 'red_tip' : 'green_tip'"
                ></span>
                <span :class="item.warning == 1 ? 'red_col' : 'green_col'">{{
                  item.warning == 1 ? "需关注" : "正常"
                }}</span>
              </div>
              <img @click="clearSingle(item.reportId)" src="../../assets/images/params/remove.png" alt="" />
            </li>
          </ul>
          <div class="el_btn_box">
            <div class="el_one">
              <el-button class="el_btn_one" @click="starCheck()" type="primary">
                开始复查
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="record_main" style="padding:0" v-else>
      <div class="tables_box tables_box_s">
        <div class="el_btn_box">
          <div class="el_one">
            <el-button class="el_btn_one" @click="someDelete()" type="primary">
              <i class="iconfont icon-shanchu1"></i>
              批量删除
            </el-button>
          </div>
        </div>
        <template>
          <el-table
            border
            :data="tableData"
            @sort-change="sortChange1"
            @selection-change="handleSelectionChange1"
          >
            <el-table-column type="selection"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="name" label="班级"> </el-table-column>
            <el-table-column prop="passport" label="学籍号"> </el-table-column>
            <el-table-column prop="date" label="完成时间"> </el-table-column>
            <el-table-column prop="name" label="操作用时"> </el-table-column>
            <el-table-column prop="name" label="AI分析">
              <template slot-scope="scope">
                {{scope.row.warning == 0 || scope.row.warning == 1 ? "分析完成" : "分析失败"}}
              </template>
            </el-table-column>
            <el-table-column prop="warning" label="评估结果">
              <template slot-scope="scope">
                <div class="primary_g" v-if="scope.row.warning == 0">
                  <el-button type="primary" plain size="small"
                    >正常</el-button
                  >
                </div>
                <div class="primary_r" v-if="scope.row.warning == 1">
                  <el-button type="danger" plain size="small"
                    >需关注</el-button
                  >
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="人工复核">
              <template>
                /
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small"
                  >AI分析</el-button
                >
                <el-button type="text" size="small"
                  >人工复核</el-button
                >
                <el-button
                  type="text"
                  size="small"
                  >参数调节</el-button
                >
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
    </div>
  </div>
</template>

<script>
import Url from "@/assets/js/url.js";
export default {
  name: "",
  data() {
    return {
      resultFlag: false,
      tableData: [],
      checkList: [],
      checkList1: [],
      rightList: [],
      checkFlag: false,
      limit: 10,
      total: 40,
      pageNum: 4,
      currentPage: 1,
      formSearch: {
        time: ""
      }
    };
  },
  mounted() {
    this.getList(this.currentPage);
  },
  methods: {
    clearSingle(id) {
      for (let i in this.rightList) {
        if (this.rightList[i].reportId == id) {
          this.rightList.splice(i, 1)
        }
      }
      if (this.rightList.length == 0) {
        this.checkFlag = false
      }
    },
    clearRight() {
      this.rightList = []
      this.checkFlag = false
    },
    starCheck() {
      console.log(1234);
      this.resultFlag = true
    },
    joinCheck() {
      if (this.checkList.length == 0) {
        this.$message.warning("当前没有选择要复核的数据！");
        return false;
      }
      console.log(this.rightList);
      console.log(this.checkList);
      let arr = this.rightList.concat(this.checkList);
      var obj = {};
      arr = arr.reduce(function(item, next) {
        obj[next.reportId] ? "" : (obj[next.reportId] = true && item.push(next))
        return item;
      }, []);
      console.log(arr);
      this.rightList = Array.from(new Set(arr));
      this.checkFlag = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    sortChange(e) {
      console.log(e);
    },
    handleSelectionChange(val) {
      this.checkList = val;
    },
    sortChange1(e) {
      console.log(e);
    },
    handleSelectionChange1(val) {
      this.checkList1 = val;
    },
    // 获取报告列表  学生1 游客2
    getList(page) {
      let that = this;
      var param = {};
      let star = "";
      let end = "";
      if (that.formSearch.time != "") {
        star = that.formTimes(that.formSearch.time[0]);
        end = that.formTimes(that.formSearch.time[1]);
      }
      param = {
        currentPage: page,
        pageSize: that.limit,
        startDate: star,
        endDate: end,
        type: 1,
        classIds: [12501, 12502]
      };
      this.$http
        .get(Url + "/aimw/report/listReports", {
          params: param
        })
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            that.tableData = data.data;
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    onSubmit() {
      console.log(this.formSearch);
      this.getList(1);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 批量删除
    someDelete() {
      if (this.checkList1.length == 0) {
        this.$message({
          type: "warning",
          message: "没有选择要初始化密码的数据!"
        });
        return false;
      }
      var checkArr = [];
      for (let i in this.checkList1) {
        checkArr.push({ reportId: this.checkList1[i].reportId });
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
          // this.$http
          //   .delete(Url + "/aimw/report/deleteReports", {
          //     data: checkArr
          //   })
          //   .then(res => {
          //     var data = res.data;
          //     if (data.code == 0) {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          // this.getList(this.currentPage)
          //   } else {
          //     this.$message({
          //       type: "error",
          //       message: "删除失败!"
          //     });
          //   }
          // });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      console.log("批量删除");
    }
  }
};
</script>

<style lang="less">
.record_wrap {
  padding: 0 0.22rem 0.24rem;
  .record_main {
    padding-right: 5rem;
    position: relative;
    .record_left {
      width: 100%;
      // flex: 1;
      // width: 13rem;
    }
    .record_right {
      background: #ffffff;
      margin-left: 0.2rem;
      // margin-bottom: 0.2rem;
      width: 4.8rem;
      // padding: 0.2rem;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      // flex:1;
      .record_no {
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 2.5rem;
        p {
          line-height: 0.32rem;
        }
      }
      .record_ul {
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #333333;
          padding: 0.14rem 0.2rem;
          border-bottom: 0.01rem solid #eeeeee;
          text-align: center;
          .re_index {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            background: #eeee;
          }
          .re_name {
            width: 0.86rem;
          }
          .re_tips {
            width: 1.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .green_tip {
              width: 0.14rem;
              height: 0.14rem;
              border-radius: 50%;
              background: #006cff;
            }
            .red_tip {
              width: 0.14rem;
              height: 0.14rem;
              border-radius: 50%;
              background: #fe5fb8;
            }
            .green_col {
              margin-left: 0.08rem;
              color: #006cff;
            }
            .red_col {
              margin-left: 0.08rem;
              color: #fe5fb8;
            }
          }
          .re_time {
            width: 1.6rem;
          }
          img {
            width: 0.32rem;
            height: 0.32rem;
          }
        }
      }
      .record_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 0.42rem;
        padding: 0 0.2rem;
        border: 0.01rem solid rgba(145, 213, 255, 1);
        background: rgba(230, 247, 255, 1);
        border-radius: 0.04rem;
        .record_num {
          span {
            color: #0088ff;
          }
        }
        .record_clear {
          color: #0088ff;
        }
      }
      // 表格上面的操作按钮
      .el_btn_box {
        margin: 0.18rem 0;
        display: flex;
        justify-content: flex-end;
        .el_one {
          width: 100%;
          // margin-right: 0.18rem;
          // width: 1.16rem;
          height: 0.36rem;
          padding: 1px;
          padding: 0 0.14rem;
          background: linear-gradient(263deg, #00c2ff, #0075ff);
          border-radius: 0.04rem;
          overflow: hidden;
          box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
          // .el-button + .el-button {
          //   margin-left: 0.18rem;
          //   padding: 0.09rem 0.14rem;
          // }
          .el_btn_one {
            border: 0;
            font-size: 0.16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #ffffff;
            background: transparent;
            // background: linear-gradient(263deg, #00c2ff, #0075ff);
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
        }
      }
    }
  }
  // 公共带圈的标题
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
  // 公共页面顶部标题
  .com_title {
    height: 0.24rem;
    font-size: 0.2rem;
    color: #354b70;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin: 0.28rem 0 0.18rem;
    .c_titles {
      flex: 1;
      display: flex;
      font-size: 0.2rem;
      align-items: center;
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
      display: flex;
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
              // width: 1.69rem;
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
      .time_data {
        .el-input__inner {
          width: 2.9rem !important;
          padding-left: 0.2rem !important;
        }
        .el-form-item__content {
          width: 2.9rem;
        }
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
      justify-content: flex-end;
      .el_one,
      .el_two {
        // margin-right: 0.18rem;
        // width: 1.16rem;
        height: 0.36rem;
        padding: 1px;
        padding: 0 0.14rem;
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
          background: transparent;
          // background: linear-gradient(263deg, #00c2ff, #0075ff);
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
    .el_btn_boa {
      position: absolute;
      left: 0.86rem;
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
        col:nth-child(1) {
          width: 0.8rem;
        }
        col:nth-child(2) {
          width: 1rem;
        }
        col:nth-child(5) {
          width: 1.6rem;
        }
        col:nth-child(6) {
          width: 2.4rem;
        }
        col:nth-child(7) {
          width: 1.4rem;
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
  // 表格
  .tables_box_s {
    // 表格样式
    .el-table {
      .el-table__header,
      .el-table__body {
        // col {
        //   width: 2rem;
        // }
        col:nth-child(1) {
          width: 0.8rem;
        }
        col:nth-child(2) {
          width: 1.2rem;
        }
        col:nth-child(5) {
          width: 2.2rem;
        }
        col:nth-child(6) {
          width: 1.4rem;
        }
        col:nth-child(7) {
          width: 1.4rem;
        }
        col:nth-child(8) {
          width: 1.4rem;
        }
        col:nth-child(10) {
          width: 3rem;
        }
        col:nth-child(11) {
          width: 0;
        }
      }
    }
  }
}
</style>
