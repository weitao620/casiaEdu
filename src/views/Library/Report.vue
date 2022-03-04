<template>
  <div class="report_wrap">
    <div class="com_title">
      <div class="c_titles">
        <div class="com_cir">
          <img src="../../assets/images/index_top.png" alt="" />
        </div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>评估报告</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="tab_box" v-show="!power3">
        <div
          v-if="power1"
          :class="['tab_btns tab_btns_l', { tab_act: tabActive == 0 }]"
          @click="tabChange(0)"
        >
          <i class="iconfont icon-xuesheng"></i>
          学生
        </div>
        <div
          v-if="power2"
          :class="['tab_btns', { tab_act: tabActive == 1 }]"
          @click="tabChange(1)"
        >
          <i class="iconfont icon-wode"></i>
          游客
        </div>
      </div>
    </div>
    <div v-show="!power3">
      <div class="search_form_box">
        <div class="search_title center_o_title">
          查询
        </div>
        <el-form
          v-show="tabActive == 0"
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
          <el-form-item class="time_data" label="测评时间:" prop="time">
            <el-date-picker
              v-model="formSearch.time"
              type="daterange"
              ref="datePick1"
              :clearable="false"
              :picker-options="dateButton1"
              @change="changeTime1"
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
        <el-form
          v-show="tabActive == 1"
          :inline="true"
          ref="formSearchYou"
          :model="formSearchYou"
          class="search_form"
        >
          <el-form-item prop="name" label="昵称:">
            <el-input
              v-model="formSearchYou.name"
              placeholder="请输入昵称"
            ></el-input>
          </el-form-item>
          <el-form-item prop="passport" label="ID:">
            <el-input
              v-model="formSearchYou.passport"
              placeholder="请输入ID"
            ></el-input>
          </el-form-item>
          <el-form-item class="time_data" prop="time" label="测评时间:">
            <el-date-picker
              v-model="formSearchYou.time"
              type="daterange"
              ref="datePick2"
              :clearable="false"
              :picker-options="dateButton2"
              @change="changeTime2"
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item prop="warning" label="评估结果:">
            <el-select v-model="formSearchYou.warning" placeholder="全部">
              <el-option label="正常" value="0"></el-option>
              <el-option label="需关注" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmitYou">查询</el-button>
            <el-button
              type="primary"
              class="resets"
              @click="resetFormYou('formSearchYou')"
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
          <div class="el_one" v-if="tabActive == 0 && power14">
            <el-button class="el_btn_one" @click="someExport('all')" type="primary">
              <i class="iconfont icon-icon-"></i>
              批量导出
            </el-button>
          </div>
          <div class="el_two" v-if="tabActive == 0 && power16" style="width:1.48rem">
            <el-button class="el_btn_two" @click="groupExport" type="primary">
              <i class="iconfont icon-daochu"></i>
              导出团体报告
            </el-button>
          </div>
          <div class="el_two" v-if="tabActive == 0 && power15">
            <el-button
              class="el_btn_two"
              @click="someDelete('所选')"
              type="primary"
            >
              <i class="iconfont icon-shanchu1"></i>
              批量删除
            </el-button>
          </div>
          <div class="el_one" v-if="tabActive == 1 && power24">
            <el-button class="el_btn_one" @click="someExport('all')" type="primary">
              <i class="iconfont icon-icon-"></i>
              批量导出
            </el-button>
          </div>
          <div class="el_two" v-if="tabActive == 1 && power25">
            <el-button
              class="el_btn_two"
              @click="someDelete('所选')"
              type="primary"
            >
              <i class="iconfont icon-shanchu1"></i>
              批量删除
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
            <el-table-column type="index" label="序号" :index="indexMethod">
            </el-table-column>
            <el-table-column prop="name" v-if="tabActive == 0" label="姓名">
            </el-table-column>
            <el-table-column prop="passport" v-else label="ID">
            </el-table-column>
            <el-table-column
              prop="passport"
              v-if="tabActive == 0"
              label="学籍号"
            >
            </el-table-column>
            <el-table-column prop="name" v-else label="昵称"> </el-table-column>
            <el-table-column
              prop="evaluationTime"
              v-if="tabActive == 0"
              sortable
              label="测评次数"
            >
              <template slot-scope="scope">
                {{ scope.row.evaluationTime }}
              </template>
            </el-table-column>
            <el-table-column prop="gender" v-else label="性别">
              <template slot-scope="scope">
                <div class="sex_li">
                  <img
                    v-if="scope.row.gender == 1"
                    src="../../assets/images/man.png"
                    alt=""
                  />
                  <img v-else src="../../assets/images/woman.png" alt="" />
                  <div>{{ scope.row.gender == 1 ? "男" : "女" }}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="date" sortable label="测评时间">
            </el-table-column>
            <el-table-column prop="warning" label="评估结果">
              <template slot-scope="scope">
                <div class="primary_g" v-if="scope.row.warning == 0">
                  <el-button type="primary" plain size="small">正常</el-button>
                </div>
                <div class="primary_r" v-if="scope.row.warning == 1">
                  <el-button type="danger" plain size="small">需关注</el-button>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <span v-if="tabActive == 0&&!power11&&!power12&&!power13">暂无权限</span>
                <el-button @click="toDetail(scope.row)" v-if="tabActive == 0 && power11" type="text" size="small"
                  >查看</el-button
                >
                <el-button
                  type="text"
                  size="small"
                  @click="oneExport(scope.row)"
                  v-if="tabActive == 0 && power12"
                  >导出</el-button
                >
                <el-button
                  type="text"
                  size="small"
                  @click="singleDelete(scope.row)"
                  v-if="tabActive == 0 && power13"
                  >删除</el-button
                >
                <span v-if="tabActive == 1&&!power21&&!power22&&!power23">暂无权限</span>
                <el-button @click="toDetail(scope.row)" v-if="tabActive == 1 && power21" type="text" size="small"
                  >查看</el-button
                >
                <el-button
                  type="text"
                  size="small"
                  @click="oneExport(scope.row)"
                  v-if="tabActive == 1 && power22"
                  >导出</el-button
                >
                <el-button
                  type="text"
                  size="small"
                  @click="singleDelete(scope.row)"
                  v-if="tabActive == 1 && power23"
                  >删除</el-button
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
    <div class="power_no_wrap" v-show="!power1">
      <div class="power_no_center">
        <img src="../../assets/images/nothing.png" alt="" />
        <p>请联系管理员开放权限</p>
      </div>
    </div>

    <!-- 单个添加班级弹窗 -->
    <el-dialog
      class="fix_pass add_class_dia"
      :close-on-click-modal="false"
      title="选择团体"
      :visible.sync="dialogAddClass"
    >
      <el-form :model="addClassForm">
        <el-form-item required label="导出区间:">
          <el-radio-group v-model="addClassForm.aside" @change="asideChange">
              <el-radio :label="2">班级</el-radio>
              <el-radio :label="1">年级</el-radio>
              <el-radio v-if="schoolShow" :label="3">校级</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item v-if="!schoolFlag" label="学段:">
          <section class="address-select-list">
            <el-select
              class="adress-select"
              v-model="addClassForm.level"
              placeholder="请选择年级"
              @change="levleChange"
            >
              <el-option
                v-for="item in levelList1"
                :key="item.Pid"
                :label="item.Name"
                :value="item.Pid"
              ></el-option>
            </el-select>
          </section>
        </el-form-item>
        <el-form-item v-if="!schoolFlag" label="年级:">
          <section class="address-select-list">
            <el-select
              class="adress-select"
              v-model="addClassForm.grade"
              placeholder="请选择年级"
              @change="gradeChange"
            >
              <el-option
                v-for="item in gradeList1"
                :key="item.Pid"
                :label="item.Name"
                :value="item.Pid"
              ></el-option>
            </el-select>
          </section>
        </el-form-item>
        <el-form-item v-if="classFlag" label="班级:">
          <div>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <el-checkbox-group
              v-model="addClassForm.class"
              @change="handleclassChange"
            >
            <!-- @change="handleclassChange" -->
              <el-checkbox
                v-for="item in classList1"
                :label="item.Pid"
                :key="item.Pid"
                @change="sbChange(item)"
              >
                {{ item.Name }}
              </el-checkbox>
            </el-checkbox-group>
            <div class="tip_left" v-show="addClassOne">
              <div class="tip_msg">
                <img src="../../assets/images/x.png" alt="" />
                请选择班级
              </div>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddClass = false">取 消</el-button>
        <el-button type="primary" @click="groupSub()">确 定</el-button>
      </div>
    </el-dialog>
    <div style="height:0px;width:100%;overflow:hidden">
      <personReport
        v-if="getPersonFlag"
        :row="details"
        :rowr="reviewData"
        :rows="sandInfo"
        :row3="imgList"
        :row4="sandUseNumInfoName"
        :row5="sandUseNumInfoNum"
      ></personReport>
    </div>
    <!-- v-if="getSomePdfFlag" -->
    <!-- 批量导出 -->
    <div style="height:0px;width:100%;overflow:hidden">
      <someReport
        :iList="pdfList"
      ></someReport>
    </div>
    <!-- 团体报告 -->
      <!-- :iList="GroupList" -->
      <!-- @groupFlagChange1="groupFlagChange" -->
      <!-- 班级 -->
    <div style="height:0;width:100%;overflow:hidden">
      <groupReport
        :gList="groupList"
      ></groupReport>
    </div>
    <!-- 年级 -->
    <div class="grade" style="height:0;width:100%;overflow:hidden">
      <gradeReport
        :gList="groupList"
      ></gradeReport>
    </div>
    <!-- 校级 -->
    <div style="height:0;width:100%;overflow:hidden">
      <schoolReport
        :gList="groupList"
      ></schoolReport>
    </div>
  </div>
</template>

<script>
// import groupReport from "../Model/Test.vue";
import personReport from "../Model/ModelReport.vue";
import someReport from "../Model/ExportPdf.vue";
import groupReport from "../Model/ExportClass.vue";
import gradeReport from "../Model/ExportGrade.vue";
import schoolReport from "../Model/ExportSchool.vue";
import { mapGetters, mapMutations } from "vuex";
import Url from "@/assets/js/url.js";
export default {
  name: "report",
  components: {
    personReport,
    someReport,
    groupReport,
    gradeReport,
    schoolReport
  },
  data() {
    var that = this;
    return {
      dateButton1: {
        time1: '',
        shortcuts: [
          {
            text: "清空",
            onClick(picker) {
              console.log(1)
              that.time1 = ''
              that.formSearch.time = ''
              that.$refs.datePick1.handleClose();
              // picker.$emit('pick', ['', '']);
            }
          },
          {
            text: "确定",
            onClick() {
              that.$refs.datePick1.handleClose();
              // 通过$ref设置 点击确定时，关闭日期选择的弹窗
            }
          }
        ]
      },
      dateButton2: {
        time2: '',
        shortcuts: [
          {
            text: "清空",
            onClick() {
              console.log(2)
              that.time2 = ''
              that.formSearchYou.time = ''
              that.$refs.datePick2.handleClose();
            }
          },
          {
            text: "确定",
            onClick() {
              that.$refs.datePick2.handleClose();
              // 通过$ref设置 点击确定时，关闭日期选择的弹窗
            }
          }
        ]
      },
      schoolOrg1: [],
      checkAll: false,
      isIndeterminate: false,
      pdfList: [],
      groupList: {},
      genderList: [],
      power1: false,
      power11: false,
      power12: false,
      power13: false,
      power14: false,
      power15: false,
      power16: false,
      power2: false,
      power21: false,
      power22: false,
      power23: false,
      power24: false,
      power25: false,
      power3: true,

      checkedList: [],
      class: [],
      dialogAddClass: false,
      addClassOne: false,
      classFlag: false,
      schoolFlag: false,
      schoolShow: false,
      addClassForm: {
        aside: 2,
        level: "",
        grade: "",
        class: []
      },
      // groupFlag: true,
      groupData: {
        id: 1,
        meetingName: "111111",
        meetingTheme: "222222",
        meetingPlace: "333333",
        meetingLevel: "444444",
        host: "555555",
        recorder: "666666",
        ccleader: "777777",
        approverName: "888888",
        participant: "999999",
        remark: "101010",
        meetingStartTime: "121212",
        meetingEndTime: "131313",
        meetMatters: [
          {
            type: "141414",
            workItem: "151515",
            principalName: "161616",
            planEndtime: "171717",
            workPlan: "181818"
          },
          {
            type: "1414141",
            workItem: "1515152",
            principalName: "1616163",
            planEndtime: "1717174",
            workPlan: "1818185"
          },
          {
            type: "14141411",
            workItem: "15151522",
            principalName: "16161633",
            planEndtime: "17171744",
            workPlan: "18181855"
          }
        ]
      },
      levelList: [],
      gradeList: [],
      classList: [],
      levelList1: [],
      gradeList1: [],
      classList1: [],
      checkList: [],
      tabActive: 0,
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
        time: ""
      },
      formSearchYou: {
        name: "",
        passport: "",
        time: "",
        warning: ""
      },
      tableData: [],

      details: {},
      reviewData: {},
      sandInfo: [],
      imgList: [
        {
          name: "鸟瞰图",
          img: require('../../assets/images/report/t001.png')
        },
        {
          name: "西侧俯身45度视图",
          img: require('../../assets/images/report/t001.png')
        },
        {
          name: "东侧俯身45度视图",
          img: require('../../assets/images/report/t001.png')
        },
        {
          name: "操作者视图",
          img: require('../../assets/images/report/t001.png')
        }
      ],
      sandUseNumInfoName: [],
      sandUseNumInfoNum: [],
      part1: false,
      part2: false,
      part3: false,
      part4: false
    };
  },
  computed: {
    ...mapGetters(["getGroupFlag", "getPersonFlag", "getSomePdfFlag"]),
    bindmodel () {
      const { part1, part2, part3, part4 } = this
      return {
        part1,
        part2,
        part3,
        part4
      }
    }
  },
  watch: {
    bindmodel: {
      handler: function (newVal) {
        console.log(newVal)
        this.part1 = newVal.part1;
        this.part2 = newVal.part2;
        this.part3 = newVal.part3;
        this.part4 = newVal.part4;
        if (this.part1 && this.part2 && this.part3 && this.part4) {
          this.part1 = false;
          this.part2 = false;
          this.part3 = false;
          this.part4 = false
          this.personExport()
          this.loading.close()
        } else {
          console.log('还补充下')
          // this.loading.close()
          // this.loading = this.$loading({
          //   lock: true,
          //   text: "报告生成中",
          //   spinner: "el-icon-loading",
          //   background: "rgba(0, 0, 0, 0.7)"
          // });
        }
      }
    }
  },
  created() {
    // aaa
  },
  mounted() {
    // aaa
    this.auth()
    let roleId = JSON.parse(localStorage.getItem('userInfo')).roleId
    if (roleId == "superAdministrator") {
      this.schoolShow = true
    } else {
      this.schoolShow = false
    }
  },
  methods: {
    ...mapMutations(["setGroupFlag", "setGradesFlag", "setSchoolFlag", "setPersonFlag", "setSomePdfFlag"]),
    // 当日期改变时触发
    changeTime1(e) {
      console.log(e)
      // 保证在选择完时间后，日期弹出框不会消失
      if (e != '') {
        this.$refs.datePick1.focus();
      }
      this.time1 = e;
    },
    // 当日期改变时触发
    changeTime2(e) {
      console.log(e)
      // 保证在选择完时间后，日期弹出框不会消失
      if (e != '') {
        this.$refs.datePick2.focus();
      }
      this.time2 = e;
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
            this.powerData();
            console.log(this.$store);
            console.log(this.power1, this.power2);
            if (!this.power1 && !this.power2) {
              this.power3 = true;
            } else {
              this.power3 = false;
              this.threeChange();
              if (this.power1) {
                console.log(this.power1);
                this.tabChange(0);
              } else {
                console.log(this.power1);
                this.tabChange(1);
              }
            }
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    asideChange(val) {
      console.log(val)
      this.addClassForm = {
        aside: val,
        level: "",
        grade: "",
        class: ""
      }
      this.checkAll = false;
      this.isIndeterminate = false;
      this.checkedList = []
      if (val == 3) {
        this.classFlag = false
        this.schoolFlag = true
      } else {
        this.schoolFlag = false
        if (val == 2) {
          this.classFlag = true
        } else {
          this.classFlag = false
        }
        if (this.levelList1.length != 0) {
          this.addClassForm.level = this.levelList1[0].Pid
          this.levleChange(this.levelList1[0].Pid);
          this.addClassForm.grade = this.gradeList1[0].Pid
          this.gradeChange(this.gradeList1[0].Pid)
        }
      }
    },
    powerData() {
      let power = JSON.parse(localStorage.getItem("userAuth")).menuAuthID;
      console.log(power);
      this.power1 = power.includes(20100); // 学生
      this.power11 = power.includes(20101); // 学生-查看
      this.power12 = power.includes(20102); // 学生-导出
      this.power13 = power.includes(20103); // 学生-删除
      this.power14 = power.includes(20104); // 学生-批量导出
      this.power15 = power.includes(20105); // 学生-批量删除
      this.power16 = power.includes(20106); // 学生-导出团体报告
      this.power2 = power.includes(20200); // 游客
      this.power21 = power.includes(20201); // 游客-查看
      this.power22 = power.includes(20202); // 游客-导出
      this.power23 = power.includes(20203); // 游客-删除
      this.power24 = power.includes(20204); // 游客-批量导出
      this.power25 = power.includes(20205); // 游客-批量删除
    },
    indexMethod(index) {
      let that = this;
      return index + 1 + that.limit * (this.currentPage - 1);
    },
    handleCheckAllChange(val) {
      console.log(val)
      let classArr = []
      console.log(this.classList1)
      for (let i in this.classList1) {
        classArr.push(this.classList1[i].Pid)
      }
      this.addClassForm.class = val ? classArr : [];
      this.checkedList = val ? classArr : [];
      this.isIndeterminate = false;
      // if (this.class == classArr) {
      //   this.isIndeterminate = true;
      // } else {
      //   this.isIndeterminate = false;
      // }
    },
    handleclassChange(value) {
      console.log(value);
      console.log(this.checkedList)
      console.log(this.addClassForm)
      console.log(this.classList1)
      // let newchecked = [];
      // for (let i in value) {
      //   for (let j in this.classList1) {
      //     if (this.classList1[j].Pid == value[i]) {
      //       newchecked.push(this.classList1[j].Pid);
      //     }
      //   }
      // }
      this.checkedList = value;
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.classList1.length;
      // checkedCount > 0 && checkedCount < this.classList1.length;
      // checkedCount == this.classList1.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.classList1.length;
      console.log(this.checkedList);
    },
    sbChange(val) {
      console.log(val)
      console.log(this.checkedList)
      let index = -1
      if (JSON.stringify(this.checkedList).indexOf(val.Pid) == -1) {
        this.checkedList.push(val.Pid);
      } else {
        for (let i in this.checkedList) {
          if (this.checkedList[i] == val.Pid) {
            index = i
          }
        }
      }
      console.log(index)
      if (this.checkedList.length > 0 && index > -1) {
        this.checkedList.splice(index, 1)
      }
      console.log(this.checkedList);
      // let sttArr = []
      // for (let i in this.checkedList) {
      //   sttArr.push(this.checkedList[i])
      // }
      this.addClassForm.class = this.checkedList
      // this.checkAll = sttArr === this.classList1.length;
      // console.log(this.checkAll)
    },
    groupFlagChange(val) {
      console.log(val);
      this.groupFlag = val;
    },
    isService(val) {
      console.log(val);
      let routeData = this.$router.resolve({
        name: "detailsreport",
        params: { userID: val.reportId }
      });
      window.open(routeData.href, "_blank");
    },
    toDetail(data) {
      localStorage.setItem("openReport", data.reportId);
      localStorage.setItem('expGender', data.gender)
      console.log(data);
      this.isService(data);
    },
    handleSelectionChange(val) {
      this.checkList = val;
    },
    // 学段 年级 班级 三级联动
    levleChange(val) {
      console.log(val);
      this.choseLevel1(val);
    },
    gradeChange(val) {
      console.log(val);
      this.choseGrade1(val);
    },
    choseLevel1(value) {
      console.log(value);
      this.gradeList1 = [];
      this.classList1 = [];
      this.addClassForm.grade = "";
      this.addClassForm.class = "";
      this.levelList.map(e => {
        if (value == e.Pid) {
          this.gradeList1 = e.list;
          if (e.list.length > 0) {
            this.addClassForm.grade = e.list[0].Pid
            this.choseGrade1(e.list[0].Pid)
          }
          return false;
        }
      });
    },
    choseGrade1(value) {
      this.checkedList = []
      this.checkAll = false
      this.isIndeterminate = false
      console.log(value);
      this.classList1 = [];
      this.addClassForm.class = "";
      this.gradeList1.map(e => {
        if (value == e.Pid) {
          this.classList1 = e.list;
          return false;
        }
      });
      console.log(this.classList1);
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
              this.schoolOrg1 = JSON.parse(data.data).schoolOrg;
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
              console.log(schoolOrg)
              let levelArr = [];
              schoolOrg.forEach((item, index) => {
                let orgin1 = item.list;
                orgin1.forEach((item1, index1) => {
                  levelArr.push(item1);
                });
              });
              console.log(levelArr);
              that.levelList = levelArr;
              that.levelList1 = levelArr;
              if (that.levelList.length != 0) {
                that.addClassForm.level = that.levelList1[0].Pid;
                that.levleChange(that.levelList1[0].Pid);
              }
            }
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    // 获取报告列表  学生0 游客1
    getList(page) {
      let that = this;
      var param = {};
      let star = "";
      let end = "";
      this.currentPage = page;
      console.log(that.formSearch)
      if (that.tabActive == 0) {
        if (that.formSearch.time != "" && that.formSearch.time) {
          star =
            that.formTimes(that.formSearch.time[0]).replace(/-/g, "") +
            "000000";
          end =
            that.formTimes(that.formSearch.time[1]).replace(/-/g, "") +
            "235959";
        }
        param = {
          currentPage: page,
          pageSize: that.limit,
          type: that.tabActive,
          name: that.formSearch.name,
          passport: that.formSearch.passport,
          section: that.formSearch.level,
          grade: that.formSearch.grade,
          class: that.formSearch.class,
          startDate: star,
          endDate: end,
          userAuth: localStorage.getItem('userAuth')
        };
      } else {
        if (that.formSearchYou.time != "" && that.formSearchYou.time) {
          star =
            that.formTimes(that.formSearchYou.time[0]).replace(/-/g, "") +
            "000000";
          end =
            that.formTimes(that.formSearchYou.time[1]).replace(/-/g, "") +
            "235959";
        }
        let warns = "";
        if (that.formSearchYou.warning == "") {
          warns = 2;
        } else {
          warns = that.formSearchYou.warning;
        }
        param = {
          currentPage: page,
          pageSize: that.limit,
          type: that.tabActive,
          name: that.formSearchYou.name,
          passport: that.formSearchYou.passport,
          startDate: star,
          endDate: end,
          warning: warns,
          userAuth: localStorage.getItem('userAuth')
        };
      }

      this.$http
        .get(Url + "/aimw/report/listReports", {
          params: param
        })
        .then(res => {
          let data = res.data.data;
          if (res.data.code == 0) {
            if (data) {
              that.tableData = data.results;
              that.total = data.count;
              that.pageNum = Math.ceil(data.count / that.limit);
            } else {
              that.tableData = [];
              that.total = 0;
              that.pageNum = 1;
            }
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    personExport() {
      // this.loading = this.$loading({
      //   lock: true,
      //   text: "报告生成中",
      //   spinner: "el-icon-loading",
      //   background: "rgba(0, 0, 0, 0.7)"
      // });
      this.loading.close()
      this.setPersonFlag(true);
    },
    // 获取报告详情
    getfourImg(birdView, param) {
      let that = this;
      var parama = param
      this.$http
        .get(Url + "/aimw/report/reportReviewImgs", {
          params: parama
        })
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            that.imgList = [
              {
                name: "鸟瞰图",
                img: "data:image;base64," + birdView
              },
              {
                name: "西侧俯身45度视图",
                img: "data:image;base64," + data.data.workView.westView
              },
              {
                name: "东侧俯身45度视图",
                img: "data:image;base64," + data.data.workView.eastView
              },
              {
                name: "操作者视图",
                img: "data:image;base64," + data.data.workView.operatorView
              }
            ];
            this.part4 = true
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    getDetail(data) {
      let that = this;
      var param = {
        reportId: data.reportId
      };
      this.loading = this.$loading({
        lock: true,
        text: "报告生成中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      this.$http
        .get(Url + "/aimw/report/appendix", {
          params: param
        })
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            if (data.data.sandInfoRet.sandInfo) {
              that.sandInfo = data.data.sandInfoRet.sandInfo;
            } else {
              that.sandInfo = []
            }
            this.part1 = true
            setTimeout(() => {
              that.myTxtFlag = true;
            }, 500);
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
      this.$http
        .get(Url + "/aimw/report/reportReview", {
          params: param
        })
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            data.data.workInfo.operationTime = this.toHHmmss(data.data.workInfo.operationTime * 1000)
            that.reviewData = data.data;
            // that.imgList = [
            //   {
            //     name: "鸟瞰图",
            //     img:
            //       "data:image;base64," +
            //       data.data.workView.eastView
            //   },
            //   {
            //     name: "西侧俯身45度视图",
            //     img:
            //       "data:image;base64," +
            //       data.data.workView.eastView
            //   },
            //   {
            //     name: "东侧俯身45度视图",
            //     img:
            //       "data:image;base64," +
            //       data.data.workView.westView
            //   },
            //   {
            //     name: "操作者视图",
            //     img:
            //       "data:image;base64," +
            //       data.data.workView.operatorView
            //   }
            // ];
            let nameArr = [];
            let numArr = [];
            for (let i in data.data.sandUseNumInfo) {
              nameArr.push(data.data.sandUseNumInfo[i].sandName);
              numArr.push(data.data.sandUseNumInfo[i].num);
            }
            that.sandUseNumInfoName = nameArr;
            that.sandUseNumInfoNum = numArr;
            this.part2 = true
            setTimeout(() => {
              that.myTxtFlag = true;
            }, 500);
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
      this.$http
        .get(Url + "/aimw/report/reportBirdView", {
          params: param
        })
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            this.details.birdView = data.data.birdView
            this.getfourImg(data.data.birdView, param)
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
      this.$http
        .get(Url + "/aimw/report/reportInfo", {
          params: param
        })
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            data.data.birth = data.data.birth.split(" ")[0];
            // if (data.data.confidenceLevel == 1) {
            //   data.data.confidenceLevel = "较低";
            // } else if (data.data.confidenceLevel == 2) {
            //   data.data.confidenceLevel = "较高";
            // } else if (data.data.confidenceLevel == 3) {
            //   data.data.confidenceLevel = "高";
            // } else {
            //   data.data.confidenceLevel = "低";
            // }
            if (data.data.confidenceLevel == 1) {
              data.data.confidenceLevel = "可信";
            } else {
              data.data.confidenceLevel = "不可信";
            }
            if (data.data.selfDiscription.indexOf('“') != -1) {
              data.data.selfDiscription = data.data.selfDiscription.substring(0, data.data.selfDiscription.indexOf('“') + 1) + '<span style="color:#00C0FF">' + data.data.selfDiscription.substring(data.data.selfDiscription.indexOf('“') + 1, data.data.selfDiscription.indexOf('”')) + '</span>' + data.data.selfDiscription.substring(data.data.selfDiscription.indexOf('”'), data.data.selfDiscription.length)
            }

            if (data.data.depressionWarning.indexOf('正常') != -1) {
              data.data.depressionWarning = data.data.depressionWarning.substring(0, data.data.depressionWarning.indexOf('正常')) + '<span style="color:#006CFF">' + data.data.depressionWarning.substring(data.data.depressionWarning.indexOf('正常'), data.data.depressionWarning.indexOf('正常') + 2) + '</span>' + data.data.depressionWarning.substring(data.data.depressionWarning.indexOf('正常') + 2, data.data.depressionWarning.length)
            }
            if (data.data.depressionWarning.indexOf('轻度') != -1) {
              data.data.depressionWarning = data.data.depressionWarning.substring(0, data.data.depressionWarning.indexOf('轻度')) + '<span style="color:#6671FF">' + data.data.depressionWarning.substring(data.data.depressionWarning.indexOf('轻度'), data.data.depressionWarning.indexOf('轻度') + 2) + '</span>' + data.data.depressionWarning.substring(data.data.depressionWarning.indexOf('轻度') + 2, data.data.depressionWarning.length)
            }
            if (data.data.depressionWarning.indexOf('中度') != -1) {
              data.data.depressionWarning = data.data.depressionWarning.substring(0, data.data.depressionWarning.indexOf('中度')) + '<span style="color:#D674FF">' + data.data.depressionWarning.substring(data.data.depressionWarning.indexOf('中度'), data.data.depressionWarning.indexOf('中度') + 2) + '</span>' + data.data.depressionWarning.substring(data.data.depressionWarning.indexOf('中度') + 2, data.data.depressionWarning.length)
            }
            if (data.data.depressionWarning.indexOf('重度') != -1) {
              data.data.depressionWarning = data.data.depressionWarning.substring(0, data.data.depressionWarning.indexOf('重度')) + '<span style="color:#FE5FB8">' + data.data.depressionWarning.substring(data.data.depressionWarning.indexOf('重度'), data.data.depressionWarning.indexOf('重度') + 2) + '</span>' + data.data.depressionWarning.substring(data.data.depressionWarning.indexOf('重度') + 2, data.data.depressionWarning.length)
            }

            if (data.data.anxietyWarning.indexOf('正常') != -1) {
              data.data.anxietyWarning = data.data.anxietyWarning.substring(0, data.data.anxietyWarning.indexOf('正常')) + '<span style="color:#006CFF">' + data.data.anxietyWarning.substring(data.data.anxietyWarning.indexOf('正常'), data.data.anxietyWarning.indexOf('正常') + 2) + '</span>' + data.data.anxietyWarning.substring(data.data.anxietyWarning.indexOf('正常') + 2, data.data.anxietyWarning.length)
            }
            if (data.data.anxietyWarning.indexOf('轻度') != -1) {
              data.data.anxietyWarning = data.data.anxietyWarning.substring(0, data.data.anxietyWarning.indexOf('轻度')) + '<span style="color:#6671FF">' + data.data.anxietyWarning.substring(data.data.anxietyWarning.indexOf('轻度'), data.data.anxietyWarning.indexOf('轻度') + 2) + '</span>' + data.data.anxietyWarning.substring(data.data.anxietyWarning.indexOf('轻度') + 2, data.data.anxietyWarning.length)
            }
            if (data.data.anxietyWarning.indexOf('中度') != -1) {
              data.data.anxietyWarning = data.data.anxietyWarning.substring(0, data.data.anxietyWarning.indexOf('中度')) + '<span style="color:#D674FF">' + data.data.anxietyWarning.substring(data.data.anxietyWarning.indexOf('中度'), data.data.anxietyWarning.indexOf('中度') + 2) + '</span>' + data.data.anxietyWarning.substring(data.data.anxietyWarning.indexOf('中度') + 2, data.data.anxietyWarning.length)
            }
            if (data.data.anxietyWarning.indexOf('重度') != -1) {
              data.data.anxietyWarning = data.data.anxietyWarning.substring(0, data.data.anxietyWarning.indexOf('重度')) + '<span style="color:#FE5FB8">' + data.data.anxietyWarning.substring(data.data.anxietyWarning.indexOf('重度'), data.data.anxietyWarning.indexOf('重度') + 2) + '</span>' + data.data.anxietyWarning.substring(data.data.anxietyWarning.indexOf('重度') + 2, data.data.anxietyWarning.length)
            }

            if (data.data.forcedWarning.indexOf('正常') != -1) {
              data.data.forcedWarning = data.data.forcedWarning.substring(0, data.data.forcedWarning.indexOf('正常')) + '<span style="color:#006CFF">' + data.data.forcedWarning.substring(data.data.forcedWarning.indexOf('正常'), data.data.forcedWarning.indexOf('正常') + 2) + '</span>' + data.data.forcedWarning.substring(data.data.forcedWarning.indexOf('正常') + 2, data.data.forcedWarning.length)
            }
            if (data.data.forcedWarning.indexOf('轻度') != -1) {
              data.data.forcedWarning = data.data.forcedWarning.substring(0, data.data.forcedWarning.indexOf('轻度')) + '<span style="color:#6671FF">' + data.data.forcedWarning.substring(data.data.forcedWarning.indexOf('轻度'), data.data.forcedWarning.indexOf('轻度') + 2) + '</span>' + data.data.forcedWarning.substring(data.data.forcedWarning.indexOf('轻度') + 2, data.data.forcedWarning.length)
            }
            if (data.data.forcedWarning.indexOf('中度') != -1) {
              data.data.forcedWarning = data.data.forcedWarning.substring(0, data.data.forcedWarning.indexOf('中度')) + '<span style="color:#D674FF">' + data.data.forcedWarning.substring(data.data.forcedWarning.indexOf('中度'), data.data.forcedWarning.indexOf('中度') + 2) + '</span>' + data.data.forcedWarning.substring(data.data.forcedWarning.indexOf('中度') + 2, data.data.forcedWarning.length)
            }
            if (data.data.forcedWarning.indexOf('重度') != -1) {
              data.data.forcedWarning = data.data.forcedWarning.substring(0, data.data.forcedWarning.indexOf('重度')) + '<span style="color:#FE5FB8">' + data.data.forcedWarning.substring(data.data.forcedWarning.indexOf('重度'), data.data.forcedWarning.indexOf('重度') + 2) + '</span>' + data.data.forcedWarning.substring(data.data.forcedWarning.indexOf('重度') + 2, data.data.forcedWarning.length)
            }
            let oldWarning = [
              {
                id: 3,
                old: data.data.reportWarningInfo.depressionResult,
                score: data.data.reportWarningInfo.depressionScore,
                new: data.data.depressionWarning
              },
              {
                id: 4,
                old: data.data.reportWarningInfo.anxietyResult,
                score: data.data.reportWarningInfo.anxietyScore,
                new: data.data.anxietyWarning
              },
              {
                id: 5,
                old: data.data.reportWarningInfo.forcedResult,
                score: data.data.reportWarningInfo.forcedScore,
                new: data.data.forcedWarning
              }
            ];
            data.data.warningList = [];
            data.data.whatWarn = []
            for (let i in oldWarning) {
              if (oldWarning[i].old != "正常") {
                data.data.warningList.push(oldWarning[i]);
              }
              if (oldWarning[i].score > 2) {
                data.data.whatWarn.push(oldWarning[i]);
              }
            }
            console.log(oldWarning)
            console.log(data.data.whatWarn)
            data.data.warningNum = data.data.whatWarn.length
            data.data.suggestion = data.data.suggestion.split('|||')
            let topArr = []
            let duanArr = []
            for (let i in data.data.suggestion) {
              if (data.data.suggestion[i].indexOf('测验提示') == -1) {
                data.data.suggestion[i] = data.data.suggestion[i].split('@@')
              }
            }

            let warningInfo = data.data.reportWarningInfo;
            let depressionColorStr = "";
            let depressionLevelStr = "";
            let depressionBgStr = "";
            let depressionImgStr = "";

            if (warningInfo.depressionLevel == 0) {
              depressionColorStr = "#006CFF";
              depressionBgStr =
                "linear-gradient(90deg, rgba(5, 157, 255, 0.7), rgba(49, 204, 255, 0.7))";
              depressionImgStr = "1";
            } else if (warningInfo.depressionLevel == 1) {
              depressionColorStr = "#6671FF";
              depressionBgStr =
                "linear-gradient(90deg, rgba(186, 191, 255, 0.78), rgba(114, 121, 255, 0.78))";
              depressionImgStr = "2";
            } else if (warningInfo.depressionLevel == 2) {
              depressionColorStr = "#D674FF";
              depressionBgStr =
                "linear-gradient(0deg, rgba(214,116,255, 0.7), rgba(217,162,255, 0.7))";
              depressionImgStr = "3";
            } else if (warningInfo.depressionLevel == 3) {
              depressionColorStr = "#FE5FB8";
              depressionBgStr =
                "linear-gradient(90deg, rgba(255, 119, 195, 0.8), rgba(255, 182, 236, 0.8))";
              depressionImgStr = "4";
            }
            let anxietyColorStr = "";
            let anxietyLevelStr = "";
            let anxietyBgStr = "";
            let anxietyImgStr = "";
            if (warningInfo.anxietyLevel == 0) {
              anxietyColorStr = "#006CFF";
              anxietyBgStr =
                "linear-gradient(90deg, rgba(5, 157, 255, 0.7), rgba(49, 204, 255, 0.7))";
              anxietyImgStr = "1";
            } else if (warningInfo.anxietyLevel == 1) {
              anxietyColorStr = "#6671FF";
              anxietyBgStr =
                "linear-gradient(90deg, rgba(186, 191, 255, 0.78), rgba(114, 121, 255, 0.78))";
              anxietyImgStr = "2";
            } else if (warningInfo.anxietyLevel == 2) {
              anxietyColorStr = "#D674FF";
              anxietyBgStr =
                "linear-gradient(0deg, rgba(214,116,255, 0.7), rgba(217,162,255, 0.7))";
              anxietyImgStr = "3";
            } else if (warningInfo.anxietyLevel == 3) {
              anxietyColorStr = "#FE5FB8";
              anxietyBgStr =
                "linear-gradient(90deg, rgba(255, 119, 195, 0.8), rgba(255, 182, 236, 0.8))";
              anxietyImgStr = "4";
            }
            let forcedColorStr = "";
            let forcedLevelStr = "";
            let forcedBgStr = "";
            let forcedImgStr = "";
            if (warningInfo.forcedLevel == 0) {
              forcedColorStr = "#006CFF";
              forcedBgStr =
                "linear-gradient(90deg, rgba(5, 157, 255, 0.7), rgba(49, 204, 255, 0.7))";
              forcedImgStr = "1";
            } else if (warningInfo.forcedLevel == 1) {
              forcedColorStr = "#6671FF";
              forcedBgStr =
                "linear-gradient(90deg, rgba(186, 191, 255, 0.78), rgba(114, 121, 255, 0.78))";
              forcedImgStr = "2";
            } else if (warningInfo.forcedLevel == 2) {
              forcedColorStr = "#D674FF";
              forcedBgStr =
                "linear-gradient(0deg, rgba(214,116,255, 0.7), rgba(217,162,255, 0.7))";
              forcedImgStr = "3";
            } else if (warningInfo.forcedLevel == 3) {
              forcedColorStr = "#FE5FB8";
              forcedBgStr =
                "linear-gradient(90deg, rgba(255, 119, 195, 0.8), rgba(255, 182, 236, 0.8))";
              forcedImgStr = "4";
            }
            if (data.data.depressionDim) {
              data.data.depressionDim = data.data.depressionDim.split('@@')
            }
            let depArr = [];
            for (let i in data.data.depressionDim) {
              let str = "";
              if (data.data.depressionDim[i].indexOf(".") != -1) {
                str = data.data.depressionDim[i].split(".")[1];
              } else {
                str = data.data.depressionDim[i];
              }
              depArr.push(str);
            }
            if (data.data.anxietyDim) {
              data.data.anxietyDim = data.data.anxietyDim.split('@@')
            }
            let anxArr = [];
            for (let i in data.data.anxietyDim) {
              let str = "";
              if (data.data.anxietyDim[i].indexOf(".") != -1) {
                str = data.data.anxietyDim[i].split(".")[1];
              } else {
                str = data.data.anxietyDim[i];
              }
              anxArr.push(str);
            }
            if (data.data.forcedDim) {
              data.data.forcedDim = data.data.forcedDim.split('@@')
            }
            let forArr = [];
            for (let i in data.data.forcedDim) {
              let str = "";
              if (data.data.forcedDim[i].indexOf(".") != -1) {
                str = data.data.forcedDim[i].split(".")[1];
              } else {
                str = data.data.forcedDim[i];
              }
              forArr.push(str);
            }
            let sysList1 = [
              {
                title: "抑郁",
                grade: warningInfo.depressionScore,
                gradep: Number(warningInfo.depressionScore) * 0.44 + Number(warningInfo.depressionScore) * 0.01 + 0.24 + "rem",
                gradep1: Number(warningInfo.depressionScore) * 82 + 42 + "px",
                level: warningInfo.depressionResult,
                txtColor: depressionColorStr,
                bg: depressionBgStr,
                imgType: depressionImgStr,
                list: depArr,
                subDim: data.data.depressionSubDim
              },
              {
                title: "焦虑",
                grade: warningInfo.anxietyScore,
                gradep: Number(warningInfo.anxietyScore) * 0.44 + Number(warningInfo.anxietyScore) * 0.01 + 0.24 + "rem",
                gradep1: Number(warningInfo.anxietyScore) * 82 + 42 + "px",
                level: warningInfo.anxietyResult,
                txtColor: anxietyColorStr,
                bg: anxietyBgStr,
                imgType: anxietyImgStr,
                list: anxArr,
                subDim: data.data.anxietySubDim
              },
              {
                title: "强迫",
                grade: warningInfo.forcedScore,
                gradep: Number(warningInfo.forcedScore) * 0.44 + Number(warningInfo.forcedScore) * 0.01 + 0.24 + "rem",
                gradep1: Number(warningInfo.forcedScore) * 82 + 42 + "px",
                level: warningInfo.forcedResult,
                txtColor: forcedColorStr,
                bg: forcedBgStr,
                imgType: forcedImgStr,
                list: forArr,
                subDim: data.data.forcedSubDim
              }
            ];
            this.sysList = sysList1.sort(function(n, m) {
              if (m.grade < n.grade) return -1;
              else if (m.grade > n.grade) return 1;
              else return 0;
            });
            data.data.sysList = this.sysList;
            that.details = that.justInfo(data.data);
            this.part3 = true
            setTimeout(() => {
              that.myTxtFlag = true;
            }, 500);
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    toHHmmss(data) {
      var s;
      var hours = parseInt((data % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = parseInt((data % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.round((data % (1000 * 60)) / 1000);
      console.log(seconds)
      s = (hours < 10 ? ('0' + hours) : hours) + ':' + (minutes < 10 ? ('0' + minutes) : minutes) + ':' + (seconds < 10 ? ('0' + seconds) : seconds);
      return s;
    },
    // 数据处理
    justInfo(list) {
      console.log(list);
      let data = list;
      // 本次
      if (data.reportWarningInfo.depressionLevel == 0) {
        data.reportWarningInfo.depressionLevelTxt = "正常";
      } else if (data.reportWarningInfo.depressionLevel == 1) {
        data.reportWarningInfo.depressionLevelTxt = "轻度";
      } else if (data.reportWarningInfo.depressionLevel == 2) {
        data.reportWarningInfo.depressionLevelTxt = "中度";
      } else if (data.reportWarningInfo.depressionLevel == 3) {
        data.reportWarningInfo.depressionLevelTxt = "重度";
      }
      if (data.reportWarningInfo.anxietyLevel == 0) {
        data.reportWarningInfo.anxietyLevelTxt = "正常";
      } else if (data.reportWarningInfo.anxietyLevel == 1) {
        data.reportWarningInfo.anxietyLevelTxt = "轻度";
      } else if (data.reportWarningInfo.anxietyLevel == 2) {
        data.reportWarningInfo.anxietyLevelTxt = "中度";
      } else if (data.reportWarningInfo.anxietyLevel == 3) {
        data.reportWarningInfo.anxietyLevelTxt = "重度";
      }
      if (data.reportWarningInfo.forcedLevel == 0) {
        data.reportWarningInfo.forcedLevelTxt = "正常";
      } else if (data.reportWarningInfo.forcedLevel == 1) {
        data.reportWarningInfo.forcedLevelTxt = "轻度";
      } else if (data.reportWarningInfo.forcedLevel == 2) {
        data.reportWarningInfo.forcedLevelTxt = "中度";
      } else if (data.reportWarningInfo.forcedLevel == 3) {
        data.reportWarningInfo.forcedLevelTxt = "重度";
      }
      // 上次
      if (data.lastWarningInfo.depressionLevel == 0) {
        data.lastWarningInfo.depressionLevelTxt = "正常";
      } else if (data.lastWarningInfo.depressionLevel == 1) {
        data.lastWarningInfo.depressionLevelTxt = "轻度";
      } else if (data.lastWarningInfo.depressionLevel == 2) {
        data.lastWarningInfo.depressionLevelTxt = "中度";
      } else if (data.lastWarningInfo.depressionLevel == 3) {
        data.lastWarningInfo.depressionLevelTxt = "重度";
      }
      if (data.lastWarningInfo.anxietyLevel == 0) {
        data.lastWarningInfo.anxietyLevelTxt = "正常";
      } else if (data.lastWarningInfo.anxietyLevel == 1) {
        data.lastWarningInfo.anxietyLevelTxt = "轻度";
      } else if (data.lastWarningInfo.anxietyLevel == 2) {
        data.lastWarningInfo.anxietyLevelTxt = "中度";
      } else if (data.lastWarningInfo.anxietyLevel == 3) {
        data.lastWarningInfo.anxietyLevelTxt = "重度";
      }
      if (data.lastWarningInfo.forcedLevel == 0) {
        data.lastWarningInfo.forcedLevelTxt = "正常";
      } else if (data.lastWarningInfo.forcedLevel == 1) {
        data.lastWarningInfo.forcedLevelTxt = "轻度";
      } else if (data.lastWarningInfo.forcedLevel == 2) {
        data.lastWarningInfo.forcedLevelTxt = "中度";
      } else if (data.lastWarningInfo.forcedLevel == 3) {
        data.lastWarningInfo.forcedLevelTxt = "重度";
      }
      // 平均
      if (data.warningAvgInfo.depressionLevel == 0) {
        data.warningAvgInfo.depressionLevelTxt = "正常";
      } else if (data.warningAvgInfo.depressionLevel == 1) {
        data.warningAvgInfo.depressionLevelTxt = "轻度";
      } else if (data.warningAvgInfo.depressionLevel == 2) {
        data.warningAvgInfo.depressionLevelTxt = "中度";
      } else if (data.warningAvgInfo.depressionLevel == 3) {
        data.warningAvgInfo.depressionLevelTxt = "重度";
      }
      if (data.warningAvgInfo.anxietyLevel == 0) {
        data.warningAvgInfo.anxietyLevelTxt = "正常";
      } else if (data.warningAvgInfo.anxietyLevel == 1) {
        data.warningAvgInfo.anxietyLevelTxt = "轻度";
      } else if (data.warningAvgInfo.anxietyLevel == 2) {
        data.warningAvgInfo.anxietyLevelTxt = "中度";
      } else if (data.warningAvgInfo.anxietyLevel == 3) {
        data.warningAvgInfo.anxietyLevelTxt = "重度";
      }
      if (data.warningAvgInfo.forcedLevel == 0) {
        data.warningAvgInfo.forcedLevelTxt = "正常";
      } else if (data.warningAvgInfo.forcedLevel == 1) {
        data.warningAvgInfo.forcedLevelTxt = "轻度";
      } else if (data.warningAvgInfo.forcedLevel == 2) {
        data.warningAvgInfo.forcedLevelTxt = "中度";
      } else if (data.warningAvgInfo.forcedLevel == 3) {
        data.warningAvgInfo.forcedLevelTxt = "重度";
      }
      return data;
    },
    oneExport(data) {
      console.log(data);
      localStorage.setItem('expGender', data.gender)
      this.getDetail(data)
    },
    // 团体报告
    groupExport() {
      this.classFlag = true
      this.addClassForm = {
        aside: 2,
        level: "",
        grade: "",
        class: ""
      }
      this.checkAll = false;
      this.isIndeterminate = false;
      // this.$message({
      //   type: "warning",
      //   message: "导出团体报告--暂未开发"
      // });
      // return false;
      this.checkedList = []
      console.log(this.addClassForm)
      console.log(this.levelList1)
      console.log(this.gradeList1)
      if (this.levelList1.length != 0) {
        this.addClassForm.level = this.levelList1[0].Pid
        this.levleChange(this.levelList1[0].Pid);
        this.addClassForm.grade = this.gradeList1[0].Pid
        this.gradeChange(this.gradeList1[0].Pid)
        console.log(this.classList1)
      }
      this.dialogAddClass = true
    },
    groupSub() {
      let that = this;

      console.log(that.addClassForm.aside)
      if (that.addClassForm.aside == 3) {
        console.log("校级的团体报告")
        console.log(that.addClassForm)
        this.groupList = {
          aside: that.addClassForm.aside
          // level: that.addClassForm.level,
          // grade: 12400,
          // class: {
          //   gradeId: 12400,
          //   gradeName: "初一"
          // }
        }
        this.setSchoolFlag(true);
      } else if (that.addClassForm.aside == 1) {
        console.log("年级的团体报告")
        console.log(that.classList1)
        console.log(this.gradeList1)
        let gradeName = ''
        for (let i in this.gradeList1) {
          if (this.gradeList1[i].Pid == that.addClassForm.grade) {
            gradeName = this.gradeList1[i].Name
          }
        }
        let schoolOrg1 = this.schoolOrg1
        let shaa = []
        for (let j in schoolOrg1) {
          for (let k in schoolOrg1[j].list) {
            for (let l in schoolOrg1[j].list[k].list) {
              console.log(that.addClassForm.grade)
              console.log(schoolOrg1[j].list[k].list[l].Pid)
              if (schoolOrg1[j].list[k].list[l].Pid == that.addClassForm.grade) {
                shaa = schoolOrg1[j].list[k].list[l].list
              }
            }
          }
        }
        console.log(shaa)
        let flagJz = true
        for (let i in shaa) {
          if (shaa[i].Mark == 0) {
            flagJz = false
          }
        }
        console.log(flagJz)
        if (!flagJz) {
          this.$confirm("您没有" + gradeName + "年级的全部班级权限，无法导出该年级报告！", '提示', {
            confirmButtonText: '确定',
            showCancelButton: false,
            customClass: 'wf_exp',
            type: 'warning'
          }).then(() => {
            // this.$message({
            //   type: 'success',
            //   message: '删除成功!'
            // });
          }).catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            // });
          });
          return false
        }
        this.groupList = {
          aside: that.addClassForm.aside,
          level: that.addClassForm.level,
          grade: that.addClassForm.grade,
          class: {
            gradeId: that.addClassForm.grade,
            gradeName: gradeName
          }
        }
        console.log(this.groupList)
        this.setGradesFlag(true);
      } else if (that.addClassForm.aside == 2) {
        console.log("班级的团体报告")
        this.addClassOne = false;
        if (this.checkedList.length == 0) {
          // this.addClassOne = true;
          this.$message({
            type: "warning",
            message: "请勾选要导出的班级"
          });
          return false;
        }
        console.log(this.addClassForm.class)
        let classArrs = []
        for (let i in this.classList1) {
          for (let j in this.addClassForm.class) {
            if (this.classList1[i].Pid == this.addClassForm.class[j]) {
              classArrs.push({
                class: this.classList1[i].Pid,
                name: this.classList1[i].Name
              })
              // classArrs.push(this.classList1[i].Pid)
            }
          }
        }
        this.groupList = {
          aside: that.addClassForm.aside,
          level: that.addClassForm.level,
          grade: that.addClassForm.grade,
          class: classArrs
        }
        console.log(this.groupList)
        this.setGroupFlag(true);
      }
      this.dialogAddClass = false;
    },
    // exportMeeting
    // // 批量导出
    someExport() {
      console.log('批量导出')
      this.pdfList = []
      if (this.checkList.length == 0) {
        this.$message({
          type: "warning",
          message: "没有选择要导出的报告!"
        });
        return false;
      }
      var checkArr = [];
      var genderArr = [];
      console.log()
      for (let i in this.checkList) {
        checkArr.push({
          reportId: this.checkList[i].reportId,
          gender: this.checkList[i].gender
        });
      }
      console.log(checkArr);
      this.pdfList = checkArr
      this.setSomePdfFlag(true);
      // this.$message({
      //   type: "warning",
      //   message: "批量导出--暂未开发"
      //   // message: "没有选择要导出的数据!"
      // });
      // return false;
    },
    // 批量删除
    someDelete() {
      if (this.checkList.length == 0) {
        this.$message({
          type: "warning",
          message: "没有选择要删除的数据!"
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
    tabChange(type) {
      this.tabActive = type;
      this.$refs["formSearch"].resetFields();
      this.$refs["formSearchYou"].resetFields();
      this.getList(1);
    },
    sortChange(e) {
      console.log(e);
    },
    handleSizeChange(val) {
      this.limit = val;
      console.log(this.limit);
      this.getList(1);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getList(val);
    },
    onSubmit() {
      console.log(this.formSearch);
      this.getList(1);
    },
    onSubmitYou() {
      console.log(this.formSearchYou);
      this.getList(1);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.getList(1);
    },
    resetFormYou(formName) {
      this.$refs[formName].resetFields();
      this.getList(1);
    },
    libraryHome(e) {
      this.$router.push({ name: "login" });
    },
    formTimes(date) {
      console.log(date)
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var h = date.getHours();
      h = h < 10 ? "0" + h : h;
      var minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      var second = date.getSeconds();
      second = second < 10 ? "0" + second : second;
      // + ' ' + h + ':' + minute + ':' + second
      return y + "-" + m + "-" + d;
    }
  }
};
</script>

<style lang="less">
.wf_exp{
  .el-message-box__content{
    padding: 30px 15px 25px;
  }
}
.report_wrap {
  text-align: left;
  margin: 0 0.22rem;
  .add_class_dia{
    .el-checkbox__inner{
      width: 0.16rem;
      height: 0.16rem;
      .el-checkbox__inner::after{
        left: 0.04rem;
        top: 0.01rem;
      }
      .el-checkbox__inner::after{
        height: 0.08rem !important;
        width: 0.05rem !important;
      }
    }
    .el-checkbox__input{
      float: left;
      margin-top: 0.08rem;
    }
    .el-checkbox__label{
      font-size: 0.16rem !important;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 0.2rem;
      color: #606266 !important;
    }
    .el-form-item__content {
      width: 100%;
      line-height: 0.36rem;
      display: flex;
      .el-radio-group {
        height: auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }
      .address-select-list{
        width: 100%;
        .adress-select{
          width: 95%;
        }
      }
    }
    .el-radio__input{
      height: 0.2rem;
    }
    .el-radio {
      line-height: 0.36rem;
      display: flex;
      align-items: center;
    }
    .el-radio__label {
      font-size: 0.16rem !important;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 0.2rem;
      color: #606266;
    }
    .el-radio__inner {
      width: 0.2rem;
      height: 0.2rem;
    }
    .el-radio__inner::after {
      width: 0.08rem;
      height: 0.08rem;
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
  // 公共页面顶部标题：带学生/游客
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
        border-radius: 0 0.04rem 0.04rem 0;
        img {
          margin-right: 0.02rem;
          width: 0.15rem;
          height: 0.15rem;
        }
      }
      .tab_btns_l {
        border-radius: 0.04rem 0 0 0.04rem;
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
          width: 2.6rem;
        }
        col:nth-child(9) {
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
}
</style>
