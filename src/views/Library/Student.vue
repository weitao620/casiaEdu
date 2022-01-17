<template>
  <div class="student_wrap">
    <div class="com_title">
      <div class="c_titles">
        <div class="com_cir">
          <img src="../../assets/images/index_top.png" alt="" />
        </div>
        学生管理
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
        <el-form-item label="学号:" prop="number">
          <el-input
            v-model="formSearch.number"
            placeholder="请输入学号"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别:" prop="sex">
          <el-select v-model="formSearch.sex" placeholder="全部">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
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
        <el-button class="el_btn_one" type="primary">
          <img src="../../assets/images/yonghu.png" alt="" />
          新增学生
        </el-button>
        <el-button class="el_btn_two" type="primary">
          <img src="../../assets/images/yonghu.png" alt="" />
          批量新增
        </el-button>
        <el-button class="el_btn_two" type="primary">
          <img src="../../assets/images/yonghu.png" alt="" />
          密码初始化
        </el-button>
        <el-button class="el_btn_two" type="primary">
          <img src="../../assets/images/yonghu.png" alt="" />
          批量删除
        </el-button>
      </div>
      <template>
        <el-table
          border
          :data="tableData"
          style="width: 100%"
          @sort-change="sortChange"
        >
          <el-table-column type="selection"> </el-table-column>
          <el-table-column prop="staffId" label="序号"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="number" label="学号"> </el-table-column>
          <el-table-column prop="sex" label="性别">
            <template slot-scope="scope">
              <div class="sex_li">
                <img src="../../assets/images/yonghu.png" alt="">
                <div>{{ scope.row.sex }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="age" label="年龄"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看详情</el-button
              >
              <el-button type="text" size="small">密码修改</el-button>
              <el-button type="text" size="small">删除</el-button>
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
export default {
  name: "report",
  data() {
    return {
      tabActive: 1,
      limit: 10,
      total: 0,
      pageNum: 1,
      currentPage: 1,
      formSearch: {
        name: "",
        number: "",
        sex: ""
      },
      tableData: []
    };
  },
  created() {
    // aaa
  },
  mounted() {
    // aaa
  },
  methods: {
    tabChange(type) {
      this.tabActive = type;
    },
    sortChange(e) {
      console.log(e);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    onSubmit() {
      console.log(this.formSearch);
    },
    resetForm(formName) {
      console.log(this.$refs[formName].resetFields());
      this.$refs[formName].resetFields();
    },
    libraryHome(e) {
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style lang="less">
.student_wrap {
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
    img{
      width: 0.14rem;
      height: 0.14rem;
      margin-right: 0.1rem;
    }
  }
  .tables_box {
    margin: 0.2rem 0;
    background: #ffffff;
    box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
    border-radius: 4px;
    padding: 0.2rem 0.24rem;
    .sex_li{
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
    }
    .el_btn_box {
      margin: 0.18rem 0;
      .el-button + .el-button {
        margin-left: 0.18rem;
        padding: 0.09rem 0.14rem;
      }
      .el_btn_one,
      .el_btn_two {
        font-size: 0.16rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        background: linear-gradient(263deg, #0075ff, #00c2ff);
        box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
        border-radius: 0.03rem;
        padding: 0.09rem 0.14rem;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
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
      }
    }
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
      .el-pager {
        .number {
          padding: 0 0.04rem;
          // width: 0.28rem;
          height: 0.28rem;
          line-height: 0.28rem;
          border: 0.01rem solid #e1e9ff;
          font-size: 0.14rem;
          color: #7786ac;
          min-width: 0.28rem;
          // background: linear-gradient(0deg, #C4ECFF 0%, #97CDFF 100%);
          background: #ecf5ff;
          margin: 0 0.03rem;
        }
        .number.active {
          color: #ffffff;
          background: linear-gradient(0deg, #0075ff, #00c2ff);
        }
      }
      .el-pagination {
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
      }
      .el-pagination button,
      .el-pagination span:not([class*="suffix"]) {
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
      }
      .el-pagination__editor.el-input .el-input__inner{
        color: #006cff;
      }
    }
    .el-table {
      margin-bottom: 0.56rem;
    }
    .el-table th,
    .el-table tr,
    .el-table td {
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      font-family: Source Han Sans CN;
    }
    .el-table td,
    .el-table th.is-leaf {
      border-color: #e1e9ff;
    }
    .el-table thead th,
    .el-table thead tr {
      background: linear-gradient(0deg, #c4ecff 0%, #97cdff 100%);
      color: #354b70;
    }
    .el-table td {
      color: #7786ac;
    }
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
    .el-button--mini,
    .el-button--small {
      font-size: 0.16rem;
    }
    .el-button--primary.is-plain,
    .el-button--danger.is-plain {
      width: 0.56rem;
      height: 0.24rem;
      padding: 0;
      border: 0.01rem solid;
      opacity: 0.76;
      border-radius: 0.02rem;
      font-size: 0.16rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
    }
    .el-button--primary.is-plain,
    .el-button--primary.is-plain:focus,
    .el-button--primary.is-plain:hover {
      border-image: linear-gradient(45deg, #0075ff, #00c2ff) 10 10;
      background: #ecf5ff;
      color: #006cff;
    }
    .el-button--danger.is-plain,
    .el-button--danger.is-plain:focus,
    .el-button--danger.is-plain:hover {
      border-image: linear-gradient(45deg, #fe5fb8, #ff83df) 10 10;
      background: #fef0f0;
      color: #fe5fb8;
    }
  }
  .search_form_box {
    background: #ffffff;
    box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
    border-radius: 4px;
    padding: 0.2rem 0.24rem;
    .el-form--inline .el-form-item {
      margin-left: 0.4rem;
      margin-right: 0;
    }
    .el-form--inline .el-form-item:first-child {
      margin-left: 0.22rem;
    }
    .el-form--inline .el-form-item:last-child {
      margin-left: 0.3rem;
      .el-form-item__content {
        width: auto;
        .el-button + .el-button {
          margin-left: 0.18rem;
        }
      }
    }
    .el-button {
      border: 0.01rem solid #dcdfe6;
      padding: 0.09rem 0.27rem;
      font-size: 0.16rem;
      border-radius: 4px;
      background: linear-gradient(263deg, #0075ff, #00c2ff);
      box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
    }
    .el-button.resets {
      background: linear-gradient(261deg, #b8d5f5, #8fb1d7);
      box-shadow: 0px 2px 10px 0px rgba(171, 196, 227, 0.45);
    }
    .el-form--inline .el-form-item__label {
      padding-right: 0.1rem;
      font-size: 0.16rem;
      line-height: 0.4rem;
    }
    .el-form-item__content {
      width: 2.1rem;
      line-height: 0.4rem;
      font-size: 0.16rem;
      .el-select {
        width: 100%;
      }
    }
    .el-input {
      font-size: 0.16rem;
    }
    .el-input__icon {
      width: 0.25rem;
      line-height: 0.4rem;
      font-size: 0.16rem;
    }
    .el-input__inner {
      border: 0.01rem solid #dcdfe6;
      height: 0.4rem;
      line-height: 0.4rem;
      padding: 0 0.15rem;
    }
    .el-form-item {
      margin-bottom: 0.16rem;
    }
    .search_form {
      margin-top: 0.24rem;
    }
  }
}
</style>
