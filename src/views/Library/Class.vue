<template>
  <div class="class_wrap">
    <!-- 顶部面包屑 -->
    <div class="com_title">
      <div class="c_titles">
        <div class="com_cir">
          <img src="../../assets/images/index_top.png" alt="" />
        </div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>基础设置</el-breadcrumb-item>
          <el-breadcrumb-item>班级管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <!-- 学生列表搜索 -->
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
        <el-form-item label="学号:" prop="passport">
          <el-input
            v-model="formSearch.passport"
            placeholder="请输入学号"
          ></el-input>
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
      <div
        :class="['pass_init', { pass_act: passInitAfter }]"
        v-show="passInit"
      >
        <img class="pass_icon" src="../../assets/images/index_top.png" alt="" />
        <div class="pass_txt">
          <p>密码初始化成功！</p>
          <p>初始密码为：<span>登录账号后6位</span></p>
        </div>
        <img class="pass_close" src="../../assets/images/yonghu.png" alt="" />
      </div>
      <div class="search_title center_o_title">
        列表
      </div>
      <div class="el_btn_box">
        <div class="el_btn_left">
          <span class="shu_line"></span>
          <span class="shu_year">{{ yearDetail.describe }}</span>
          <img
            v-if="power1"
            @click="openYear"
            src="../../assets/images/teachingList.png"
            alt=""
          />
        </div>
        <div class="el_btn_right">
          <div class="el_one" v-if="power3">
            <el-button class="el_btn_one" @click="batchStudent" type="primary">
              <i class="iconfont icon-jiahao"></i>
              批量新增
            </el-button>
          </div>
          <div class="el_two" v-if="power4">
            <el-button class="el_btn_two" @click="batchClass" type="primary">
              <i class="iconfont icon-shuaxin_2"></i>
              批量调班
            </el-button>
          </div>
          <div class="el_two" v-if="power5" style="width:1.48rem">
            <el-button class="el_btn_two" @click="batchChange" type="primary">
              <i class="iconfont icon-wode"></i>
              学生异动管理
            </el-button>
          </div>
          <div class="el_two" v-if="power6" style="width:1.00rem">
            <el-button class="el_btn_two" @click="batchRecovery" type="primary">
              <i class="iconfont icon-shanchu1"></i>
              回收站
            </el-button>
          </div>
        </div>
      </div>
      <div class="class_main">
        <div class="class_tree">
          <div class="el_two" v-if="power2 && authType == 2">
            <div class="el_two_s">
              <el-popover
                class="class_add_ul"
                placement="right"
                width="100"
                trigger="click"
              >
                <ul>
                  <li
                    v-for="item in classAdd"
                    v-bind:key="item.name"
                    @mouseover="selectStyle(item)"
                    :class="{ c_active: item.active }"
                    @mouseout="outStyle(item)"
                    @click="classAdds(item.name)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
                <el-button slot="reference" class="el_btn_two" type="primary">
                  <i class="iconfont icon-jiahao"></i>
                  新增班级
                  <!-- <img src="../../assets/images/yonghu.png" alt="" /> -->
                </el-button>
              </el-popover>
            </div>
          </div>
          <div :class="['tree_box', { mar00: !power2 || authType != 2 }]">
              <!-- default-expand-all -->
            <el-tree
              :data="treeData"
              :default-expanded-keys="expandsList"
              :default-checked-keys="checksList"
              node-key="Pid"
              ref="tree"
              highlight-current
              :props="defaultProps"
              @check="handleCheckChange"
              :render-content="renderContent"
            >
            </el-tree>
          </div>
        </div>
        <div class="class_student">
          <div class="no_data" v-if="classIds.length == 0 && formSearch.graduate == 0">
            <div class="no_b">
              <img src="../../assets/images/nothing.png" alt="" />
              <p>您未勾选班级，或您还没有班级，联系管理员创建第一个班级吧～</p>
            </div>
          </div>
          <div class="class_list" v-else>
            <div class="el_btn_box">
              <div class="el_btn_left">
                <img src="../../assets/images/deskmate.png" alt="" />
                <span class="shu_year">{{ checkName }}</span>
              </div>
              <div class="el_btn_right">
                <div class="el_one" v-if="power9 && formSearch.graduate == 0">
                  <el-button
                    class="el_btn_one"
                    @click="addStudent"
                    type="primary"
                  >
                    <i class="iconfont icon-jiahao"></i>
                    新增学生
                  </el-button>
                </div>
                <div class="el_two" v-if="power7 && formSearch.graduate == 0">
                  <el-button
                    class="el_btn_two"
                    @click="passWordInit"
                    type="primary"
                  >
                    <i class="iconfont icon-shuaxin1"></i>
                    密码初始化
                  </el-button>
                </div>
                <div class="el_two" v-if="power8 && formSearch.graduate == 0">
                  <el-button
                    class="el_btn_two"
                    @click="someDelete()"
                    type="primary"
                  >
                    <i class="iconfont icon-shanchu1"></i>
                    批量删除
                  </el-button>
                </div>
                <div class="el_one" v-if="power8 && formSearch.graduate == 1">
                  <el-button
                    class="el_btn_one"
                    @click="someDelete()"
                    type="primary"
                  >
                    <i class="iconfont icon-shanchu1"></i>
                    批量删除
                  </el-button>
                </div>
              </div>
            </div>
            <template>
              <el-table
                border
                :data="tableData"
                style="width: 100%"
                @sort-change="sortChange"
                @selection-change="checkboxChange"
              >
                <el-table-column type="selection"> </el-table-column>
                <el-table-column type="index" label="序号" :index="indexMethod">
                </el-table-column>
                <el-table-column prop="name" label="姓名"> </el-table-column>
                <el-table-column prop="gradeName" label="年级">
                </el-table-column>
                <el-table-column prop="className" label="班级">
                </el-table-column>
                <el-table-column prop="passport" label="账号">
                </el-table-column>
                <el-table-column prop="sex" label="性别">
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
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <span v-if="!power10 && !power11 && !power12"
                      >暂无权限</span
                    >
                    <el-button
                      @click="toDetail(scope.row)"
                      type="text"
                      size="small"
                      v-if="power10"
                      >查看详情</el-button
                    >
                    <el-button
                      type="text"
                      size="small"
                      @click="fixPass(scope.row.passport)"
                      v-if="power11  && formSearch.graduate == 0"
                      >密码修改</el-button
                    >
                    <el-button
                      type="text"
                      size="small"
                      @click="singleDelete(scope.row)"
                      v-if="power12"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </div>
        </div>
      </div>
      <div class="table_page" v-if="tableData.length > 0 && classIds.length != 0">
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
    <!-- 单个添加班级弹窗 -->
    <el-dialog
      class="fix_pass add_class_dia"
      :close-on-click-modal="false"
      :title="singleFlag ? '添加班级' : '批量添加班级'"
      :visible.sync="dialogAddClass"
    >
      <el-form :model="addClassForm">
        <el-form-item required label="学段:">
          <el-radio-group v-model="addClassForm.level" @change="levleChange">
            <el-radio
              v-for="item in levelList"
              :key="item.Pid"
              :label="item.Pid"
              >{{ item.Name }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item required label="年级:">
          <section class="address-select-list">
            <el-select
              class="adress-select"
              v-model="addClassForm.grade"
              placeholder="请选择年级"
              @change="gradeChange"
            >
              <el-option
                v-for="item in gradeList"
                :key="item.Pid"
                :label="item.Name"
                :value="item.Pid"
              ></el-option>
            </el-select>
          </section>
          <div class="tip_left" v-show="addClassOne">
            <div class="tip_msg" style="width:2rem">
              <img src="../../assets/images/x.png" alt="" />
              请选择年级
            </div>
          </div>
        </el-form-item>
        <el-form-item v-if="singleFlag" required label="班级:">
          <span>{{ addClassForm.className }}</span>
          <el-input
            class="small_class"
            v-model="addClassForm.classNew"
            onkeyup="value=value.replace(/^0/g,'').replace(/[^\d]/g,'')"
            placeholder="请输入班级序号"
          ></el-input>
          <span>班</span>
          <div class="tip_left" v-show="addLessonOne">
            <div class="tip_msg" style="width:2rem">
              <img src="../../assets/images/x.png" alt="" />
              请输入班级名称
            </div>
          </div>
        </el-form-item>
        <!-- <el-form-item v-if="singleFlag" label="班级简称:">
          <el-input
            v-model="addClassForm.mark"
            placeholder="请输入班级简称"
          ></el-input>
        </el-form-item> -->
        <el-form-item
          required
          v-if="!singleFlag"
          class="lab_12"
          label="班级起始序号:"
        >
          <el-input
            v-model="addClassForm.sort"
            placeholder="请输入班级起始序号"
          ></el-input>
          <div class="tip_left" v-show="addSortOne">
            <div class="tip_msg" style="width:2rem">
              <img src="../../assets/images/x.png" alt="" />
              请输入班级起始序号
            </div>
          </div>
        </el-form-item>
        <el-form-item required v-if="!singleFlag" label="班级数量:">
          <el-input
            v-model="addClassForm.number"
            placeholder="请输入班级数量"
          ></el-input>
          <div class="tip_left" v-show="addNumberOne">
            <div class="tip_msg" style="width:2rem">
              <img src="../../assets/images/x.png" alt="" />
              请输入班级数量
            </div>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddClass = false">取 消</el-button>
        <el-button
          type="primary"
          @click="singleFlag ? addClassSub() : addClassSomeSub()"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 回收站弹窗 -->
    <el-dialog
      class="fix_pass look_group"
      :close-on-click-modal="false"
      title="回收站"
      :visible.sync="dialogRecovery"
    >
      <div class="group_box">
        <div class="el_btn_box">
          学生范围：
          <section class="address-select-list">
            <el-select
              v-model="coveryForm.level"
              placeholder="全部"
              @change="choseLevel1"
            >
              <el-option
                v-for="item in levelList1"
                :key="item.Pid"
                :label="item.Name"
                :value="item.Pid"
              ></el-option>
            </el-select>
          </section>
          <section class="address-select-list">
            <el-select
              v-model="coveryForm.grade"
              placeholder="全部"
              @change="choseGrade1"
            >
              <el-option
                v-for="item in gradeList1"
                :key="item.Pid"
                :label="item.Name"
                :value="item.Pid"
              ></el-option>
            </el-select>
          </section>
          <section class="address-select-list">
            <el-select
              v-model="coveryForm.class"
              @change="choseClass1"
              placeholder="全部"
            >
              <el-option
                v-for="item in classList1"
                :key="item.Pid"
                :label="item.Name"
                :value="item.Pid"
              ></el-option>
            </el-select>
          </section>
        </div>
        <el-table
          border
          :data="recoveryData"
          style="width: 100%"
          @sort-change="sortChange"
          @selection-change="recoveryChange"
        >
          <el-table-column type="selection"> </el-table-column>
          <el-table-column type="index" label="序号" :index="indexMethod1">
          </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="passport" label="账号"> </el-table-column>
          <el-table-column prop="sectionName" label="学段"> </el-table-column>
          <el-table-column prop="gradeName" label="年级"> </el-table-column>
          <el-table-column prop="className" label="班级"> </el-table-column>
        </el-table>
        <div class="table_pages">
          <el-pagination
            @size-change="handleSizeChange1"
            @current-change="handleCurrentChange1"
            :current-page="currentPage1"
            :page-size="limit1"
            layout="prev, pager, next"
            :total="total1"
          >
          </el-pagination>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogRecovery = false">取 消</el-button>
        <el-button type="primary" @click="someRecovery">批量恢复</el-button>
      </div>
    </el-dialog>
    <!-- 密码修改弹窗 -->
    <el-dialog
      class="fix_pass"
      :close-on-click-modal="false"
      title="密码修改"
      :visible.sync="dialogFixPass"
    >
      <el-form :model="passForm">
        <el-form-item label="新密码:">
          <!--  @blur="newBlur" -->
          <el-input
            type="password"
            @input="newChange"
            @focus="newFcous"
            @blur="newBlur"
            v-model="passForm.newPass"
            placeholder="请输入新密码"
          ></el-input>
          <div class="tip_left" style="width:3.48rem" v-show="newPassFlag">
            <div class="tip_msg">
              <img v-if="newRight1" src="../../assets/images/ok.png" alt="" />
              <img v-else src="../../assets/images/x.png" alt="" />
              6-20个字符
            </div>
            <div class="tip_msg">
              <img v-if="newRight2" src="../../assets/images/ok.png" alt="" />
              <img v-else src="../../assets/images/x.png" alt="" />
              只能包含字母、数字组合以及标点符号（除空格）
            </div>
            <div class="tip_msg">
              <img v-if="newRight3" src="../../assets/images/ok.png" alt="" />
              <img v-else src="../../assets/images/x.png" alt="" />
              字母、数字和标点符合至少包含2种
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码:">
          <el-input
            type="password"
            @blur="twoBlur"
            v-model="passForm.twoPass"
            placeholder="请再次输入新密码"
          ></el-input>
          <div class="tip_left" v-show="twoPassFlag">
            <div class="tip_msg" style="width:2rem">
              <img src="../../assets/images/x.png" alt="" />
              您输入的密码与新密码不一致
            </div>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFixPass = false">取 消</el-button>
        <el-button type="primary" @click="passSubmit">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 设置学年 -->
    <el-dialog
      class="fix_pass add_class_dia set_year"
      :close-on-click-modal="false"
      title="学年详情"
      :visible.sync="yearFlag"
    >
      <el-form :model="yearForm">
        <div class="set_year_t">
          <span></span>
          {{ yearDetail.describe }}
        </div>
        <div class="set_year_d">
          <el-form-item
            class="time_data time_bg1"
            label="开始日期:"
            prop="startTime"
          >
            <el-date-picker
              v-model="yearForm.startTime"
              type="date"
              placeholder="选择开始日期"
              format="yyyy年MM月dd日"
              :editable="false"
              :clearable="false"
              @change="startTimeChange"
              disabled
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item
            class="time_data time_bg1"
            label="结束日期:"
            prop="endTime"
          >
            <el-date-picker
              v-model="yearForm.endTime"
              type="date"
              placeholder="选择结束日期"
              format="yyyy年MM月dd日"
              :editable="false"
              :clearable="false"
              @change="endTimeChange"
              disabled
            >
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="set_year_t" style="margin-top:0.1rem">
          <span></span>
          升学期
        </div>
        <div class="set_year_d">
          <el-form-item
            class="time_data time_bg1"
            label="升学期日期:"
            prop="endTime"
          >
            <el-date-picker
              v-model="yearForm.endTime"
              type="date"
              placeholder="选择日期"
              format="yyyy年MM月dd日"
              :editable="false"
              :clearable="false"
              disabled
            >
            </el-date-picker>
          </el-form-item>
        </div>
        <!-- <div class="set_year_t" style="margin-top:0.1rem">
          <span></span>
          第一学期设置
        </div>
        <div class="set_year_d">
          <el-form-item
            class="time_data time_bg1"
            label="起始日期:"
            prop="firstStartTime"
          >
            <el-date-picker
              v-model="yearForm.firstStartTime"
              type="date"
              placeholder="选择起始日期"
              format="yyyy年MM月dd日"
              :editable="false"
              :clearable="false"
              @change="firstStartTimeChange"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item class="time_data" label="截止日期:" prop="firstEndTime">
            <el-date-picker
              v-model="yearForm.firstEndTime"
              type="date"
              placeholder="选择截止日期"
              format="yyyy年MM月dd日"
              :editable="false"
              :clearable="false"
              @change="firstEndTimeChange"
            >
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="set_year_t" style="margin-top:0.1rem">
          <span></span>
          第二学期设置
        </div>
        <div class="set_year_d">
          <el-form-item
            class="time_data time_bg1"
            label="起始日期:"
            prop="secondStartTime"
          >
            <el-date-picker
              v-model="yearForm.secondStartTime"
              type="date"
              placeholder="选择起始日期"
              format="yyyy年MM月dd日"
              :editable="false"
              :clearable="false"
              @change="secondStartTimeChange"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item
            class="time_data"
            label="截止日期:"
            prop="secondEndTime"
          >
            <el-date-picker
              v-model="yearForm.secondEndTime"
              type="date"
              placeholder="选择截止日期"
              format="yyyy年MM月dd日"
              :editable="false"
              :clearable="false"
              @change="secondEndTimeChange"
            >
            </el-date-picker>
          </el-form-item>
        </div> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="yearFlag = false">关 闭</el-button>
        <!-- <el-button type="primary" @click="setYear">确 定</el-button> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Url from "@/assets/js/url.js";
export default {
  name: "report",
  data() {
    return {
      checkName: "在读",
      power1: false,
      power2: false,
      power3: false,
      power4: false,
      power5: false,
      power6: false,
      power7: false,
      power8: false,
      power9: false,
      power10: false,
      power11: false,
      power12: false,

      yearSet: 0,
      yearDetail: {},
      expandsList: [],
      checksList: [],
      yearFlag: false,
      dialogRecovery: false,
      singleFlag: false,
      addClassOne: false,
      addLessonOne: false,
      addSortOne: false,
      addNumberOne: false,
      dialogAddClass: false,
      yearForm: {
        startTime: "",
        endTime: "",
        firstStartTime: "",
        firstEndTime: "",
        secondStartTime: "",
        secondEndTime: ""
      },
      addClassForm: {
        level: "",
        grade: "",
        classNew: "",
        mark: "",
        sort: "",
        number: ""
      },
      classAdd: [
        {
          name: "单个新增",
          active: false
        },
        {
          name: "批量新增",
          active: false
        }
      ],
      list: [],
      defaultProps: {
        children: "list",
        label: "Name"
      },
      treeData: [],
      dialogFixPass: false,
      passInit: false,
      passInitAfter: false,
      tabActive: 1,
      limit: 10,
      limit1: 10,
      total: 0,
      total1: 0,
      pageNum: 1,
      pageNum1: 1,
      currentPage: 1,
      currentPage1: 1,
      passForm: {
        passport: "",
        newPass: "",
        twoPass: ""
      },
      newPassFlag: false,
      newRight1: false,
      newRight2: false,
      newRight3: false,
      twoPassFlag: false,
      formSearch: {
        name: "",
        passport: "",
        graduate: 0
      },
      classIds: [],
      tableData: [],
      checkList: [],
      recoveryData: [],
      checkListRe: [],
      levelList: [],
      gradeList: [],
      classList: [],
      coveryForm: {
        level: "",
        grade: "",
        class: ""
      },
      levelList1: [],
      gradeList1: [],
      classList1: []
    };
  },
  created() {
    // aaa
  },
  mounted() {
    // aaa
    let that = this;
    this.authType = localStorage.getItem("userType");
    this.powerData();
    this.getCheckedKeys();
    // 获取左侧班级树
    this.addChange();
    this.openYearInit();
  },
  methods: {
    indexMethod(index) {
      let that = this;
      return index + 1 + that.limit * (this.currentPage - 1);
    },
    indexMethod1(index) {
      let that = this;
      return index + 1 + that.limit1 * (this.currentPage1 - 1);
    },
    powerData() {
      let power = JSON.parse(localStorage.getItem("userAuth")).menuAuthID;
      console.log(power);
      this.power1 = power.includes(40301); // 班级管理--学年
      this.power2 = power.includes(40302); // 班级管理--新增班级
      this.power3 = power.includes(40303); // 班级管理--批量新增
      this.power4 = power.includes(40304); // 班级管理--批量调班
      this.power5 = power.includes(40305); // 班级管理--学生异动管理
      this.power6 = power.includes(40306); // 班级管理--回收站
      this.power7 = power.includes(40307); // 班级管理--密码初始化
      this.power8 = power.includes(40308); // 班级管理--批量删除
      this.power9 = power.includes(40309); // 班级管理--新增学生
      this.power10 = power.includes(40310); // 班级管理--查看
      this.power11 = power.includes(40311); // 班级管理--修改密码
      this.power12 = power.includes(40312); // 班级管理--删除
    },
    toDetail(data) {
      console.log(data);
      localStorage.setItem("studyDetail", JSON.stringify(data));
      this.$router.push({
        name: "detailstudent",
        params: { userID: data.passport }
      });
    },
    batchClass() {
      this.$router.push({
        name: "classmanage"
      });
    },
    batchChange() {
      this.$router.push({
        name: "changemanage"
      });
    },
    selectStyle(item) {
      var that = this;
      this.$nextTick(function() {
        this.classAdd.forEach(function(item) {
          that.$set(item, "active", false);
        });
        this.$set(item, "active", true);
      });
    },
    outStyle(item) {
      this.$set(item, "active", false);
    },
    // 渲染树
    renderContent(h, { node, data, store }) {
      // if (data.children) {
      //   return (
      //     <span class="custom-tree-node">
      //       <i class="iconfont icon-wenjian"></i>
      //       <span>{node.label}</span>
      //     </span>
      //   );
      // } else {
      //   return (
      //     <span class="custom-tree-node">
      //       <span>{node.label}</span>
      //     </span>
      //   );
      // }
      if (data.list) {
        if (data.Name == this.checkName) {
          return (
            <span
              class="custom-tree-node"
              style="width:100%;text-align:left"
              on-click={() => this.treeChecked(event, data, node)}
            >
              <span style="color: #737AFD">{node.label}</span>
            </span>
          );
        } else {
          return (
            <span
              class="custom-tree-node"
              style="width:100%;text-align:left"
              on-click={() => this.treeChecked(event, data, node)}
            >
              <span>{node.label}</span>
            </span>
          );
        }
      } else {
        if (data.Name == this.checkName) {
          return (
            <span
              class="custom-tree-node"
              style="width:100%;text-align:left"
              on-click={() => this.treeChecked(event, data, node)}
            >
              <span style="color: #737AFD">{node.label}</span>
            </span>
          );
        } else {
          return (
            <span
              class="custom-tree-node"
              style="width:100%;text-align:left"
              on-click={() => this.treeChecked(event, data, node)}
            >
              <span>{node.label}</span>
            </span>
          );
        }
      }
    },
    treeChecked(event, data, node) {
      console.log(123);
      console.log(data, node);
      if (data.Name == "已毕业") {
        this.checkName = data.Name;
        this.getClassIds(data);
        // this.getTree();
        // console.log("取消掉，恢复到全部");
        // this.checkName = "在读";
      } else {
        console.log("选中当前点击");
        this.checkName = data.Name;
        this.getClassIds(data);
      }
      event.stopPropagation();
    },
    // 选择班级
    handleCheckChange(data, checked, indeterminate) {
      // console.log(data);
      // console.log(checked.checkedKeys);
      // console.log(indeterminate);
      // console.log(this.checksList);
      this.checksList = checked.checkedKeys;
      // console.log(this.checksList.indexOf(data.Pid));
      // // if (this.checksList.indexOf(data.Pid) != -1) {
      // //   this.checksList.splice(this.checksList.indexOf(data.Pid), 1);
      // //   console.log(this.checksList);
      // // } else {
      // //   this.checksList.push(data.Pid);
      // //   let att = this.checksList.sort((a, b) => {
      // //     return a - b;
      // //   });
      // //   this.checksList = att;
      // //   console.log(this.checksList);
      // // }
      // console.log(this.checksList);
      this.getClass(1);
    },
    getCheckedKeys() {
      // console.log(this.$refs.tree.getCheckedKeys());
    },
    tabChange(type) {
      this.tabActive = type;
    },
    sortChange(e) {
      // console.log(e);
    },
    handleSizeChange(val) {
      console.log(this);
      this.limit = val;
      this.getClass(1);
    },
    handleCurrentChange(val) {
      console.log(this);
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getClass(val);
    },
    handleSizeChange1(val) {
      // this.limit1 = val;
      // this.getClass(1);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange1(val) {
      console.log(this);
      this.currentPage1 = val;
      this.getRecovery(val);
    },

    // 新增学生
    addStudent() {
      this.$router.push({
        name: "addstudent"
      });
    },
    // 批量新增学生
    batchStudent() {
      this.$router.push({
        name: "batchstudent"
      });
    },

    // 回收站批量恢复
    someRecovery() {
      let that = this;
      console.log(that.checkListRe);
      if (this.checkListRe.length == 0) {
        this.$message({
          type: "warning",
          message: "没有选择要恢复的数据!"
        });
        return false;
      }
      var checkArrRe = [];
      for (let i in this.checkListRe) {
        checkArrRe.push({ passport: this.checkListRe[i].passport });
      }
      let param = {
        passports: checkArrRe
      };
      // console.log(param);
      that.$http.put(Url + "/aimw/student/recoveryData", param).then(res => {
        // console.log(res);
        var data = res.data;
        if (data.code == 0) {
          that.$message({
            type: "success",
            message: "批量恢复成功!"
          });
          this.dialogRecovery = false;
          this.getRecovery(1);
          that.getClass(1);
        } else {
          that.$message.error(data.msg);
        }
      });
      this.dialogRecovery = false;
    },
    // 选择要操作的回收站数据
    recoveryChange(val) {
      this.checkListRe = val;
    },
    // 获取回收站数据
    getRecovery(page) {
      let that = this;
      var param = {
        currentPage: page,
        pageSize: that.limit1,
        section: that.coveryForm.level,
        grade: that.coveryForm.grade,
        class: that.coveryForm.class
        // name: that.formSearch.name,
        // passport: that.formSearch.passport,
        // classIds: that.classIds
      };
      that.currentPage1 = page;
      that.$http
        .get(Url + "/aimw/student/recycleBin", {
          params: param
        })
        .then(res => {
          let data = res.data.data;
          if (res.data.code == 0) {
            if (data) {
              that.recoveryData = data.results;
              that.total1 = data.count;
              that.pageNum1 = Math.ceil(data.count / that.limit1);
            } else {
              that.recoveryData = [];
              that.total1 = 0;
              that.pageNum1 = 1;
            }
            console.log(this);
          } else {
            that.$message.error(res.data.msg);
          }
        })
        .catch(res => {
          that.$message.error(res.data.msg);
        });
    },
    // 回收站
    batchRecovery() {
      this.dialogRecovery = true;
      this.coveryForm = {
        level: "",
        grade: "",
        class: ""
      };
      this.threeChange();
      console.log(this.currentPage1);
      this.getRecovery(this.currentPage1);
    },
    // 新增班级
    classAdds(name) {
      // console.log(name);
      this.addClassForm = {
        level: "",
        grade: "",
        classNew: "",
        mark: "",
        sort: "",
        number: ""
      };
      // console.log(name);
      this.threeChange();
      if (name.indexOf("单个") != -1) {
        this.dialogAddClass = true;
        this.singleFlag = true;
      }
      if (name.indexOf("批量") != -1) {
        this.dialogAddClass = true;
        this.singleFlag = false;
      }
    },
    // 批量新增班级
    addClassSomeSub() {
      console.log("批量新增班级");
      let that = this;
      this.addClassOne = this.addLessonOne = this.addSortOne = this.addNumberOne = false;
      if (this.addClassForm.grade == "") {
        this.addClassOne = true;
        return false;
      }
      if (this.addClassForm.sort == "") {
        this.addSortOne = true;
        return false;
      }
      if (this.addClassForm.number == "") {
        this.addNumberOne = true;
        return false;
      }
      if (Number(this.addClassForm.sort) + Number(this.addClassForm.number)>100 || Number(this.addClassForm.sort) + Number(this.addClassForm.number)< 1) {
        // this.addNumberOne = true;
        that.$message({
          type: "error",
          message: "班级起始序号与班级数量之和不能大于100！"
        });
        return false;
      }
      let arrNew = new Array(Number(that.addClassForm.number));
      let arrClass = [];
      // console.log(arrNew);
      var count = Number(that.addClassForm.sort);
      for (let i = 0; i < arrNew.length; i++) {
        // 对数组填充随机数
        arrNew[i] = Number(that.addClassForm.grade) + count;
        let objc = {
          section: that.addClassForm.level,
          grade: that.addClassForm.grade,
          authNum: Number(that.addClassForm.grade) + count,
          orgName: that.addClassForm.className + count + "班"
        };
        arrClass.push(objc);
        count++;
      }
      // console.log(arrNew);
      // console.log(arrClass);
      // // let param = {
      // //   section: that.addClassForm.level,
      // //   grade: that.addClassForm.grade,
      // //   sort: that.addClassForm.sort,
      // //   number: that.addClassForm.number
      // // };
      // // console.log(param)
      that.$http.post(Url + "/aimw/school/addClass", arrClass).then(res => {
        // console.log(res);
        var data = res.data;
        if (data.code == 0) {
          that.$message({
            type: "success",
            message: "新增班级成功!"
          });
          this.dialogAddClass = false;
          this.addChange();
        } else {
          that.$message.error(data.msg);
        }
      });
    },
    // 单个新增班级
    addClassSub() {
      let that = this;
      this.addClassOne = this.addLessonOne = false;
      if (this.addClassForm.grade == "") {
        this.addClassOne = true;
        return false;
      }
      if (this.addClassForm.classNew == "") {
        this.addLessonOne = true;
        return false;
      }
      if (this.addClassForm.classNew > 99 || this.addClassForm.classNew < 1) {
        // this.addLessonOne = true;
        that.$message({
          type: "error",
          message: "请填写1~99的班级序号！"
        });
        return false;
      }
      let param = [
        {
          section: that.addClassForm.level,
          grade: that.addClassForm.grade,
          authNum:
            Number(that.addClassForm.grade) +
            Number(that.addClassForm.classNew),
          orgName:
            that.addClassForm.className + that.addClassForm.classNew + "班"
        }
      ];
      // console.log(param);
      that.$http.post(Url + "/aimw/school/addClass", param).then(res => {
        // console.log(res);
        var data = res.data;
        if (data.code == 0) {
          that.$message({
            type: "success",
            message: "新增班级成功!"
          });
          this.dialogAddClass = false;
          this.addChange();
        } else {
          that.$message.error(data.msg);
        }
      });
    },
    // 保存--修改密码
    passSubmit() {
      let that = this;
      if (that.passForm.newPass == "") {
        this.newPassFlag = true;
        return false;
      }
      if (!(this.newRight1 && this.newRight2 && this.newRight3)) {
        this.newPassFlag = true;
        return false;
      }
      if (that.passForm.newPass != that.passForm.twoPass) {
        this.twoPassFlag = true;
        return false;
      }
      let param = {
        passport: that.passForm.passport,
        password: that.passForm.newPass
      };
      that.$http
        .put(Url + "/aimw/student/updateStudentPwd", param)
        .then(res => {
          // console.log(res);
          var data = res.data;
          if (data.code == 0) {
            that.$message({
              type: "success",
              message: "密码修改成功!"
            });
            that.dialogFixPass = false;
            that.getClass(that.currentPage);
          } else {
            that.$message({
              type: "error",
              message: "密码修改失败!"
            });
          }
        });
    },
    // 密码修改 -- 弹窗
    fixPass(passport) {
      this.passForm = {
        passport: passport,
        newPass: "",
        twoPass: ""
      };
      this.newRight1 = this.newRight2 = this.newRight3 = this.newPassFlag = this.twoPassFlag = false;
      this.twoPassFlag = false;
      this.dialogFixPass = true;
    },
    // 密码修改 -- 验证新密码
    newChange(value) {
      var reg = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,20}$/;
      var reg1 = value.length >= 6 && value.length <= 20;
      var reg2 = /^[A-Za-z0-9`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/.test(
        value
      );
      var reg3 = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{1,30}$/.test(
        value
      );
      if (!(reg1 && reg2 && reg3)) {
        if (!reg1) {
          this.newRight1 = false;
        } else {
          this.newRight1 = true;
        }
        if (!reg2) {
          this.newRight2 = false;
        } else {
          this.newRight2 = true;
        }
        if (!reg3) {
          this.newRight3 = false;
        } else {
          this.newRight3 = true;
        }
        this.newPassFlag = true;
        return false;
      } else {
        this.newRight1 = true;
        this.newRight2 = true;
        this.newRight3 = true;
        setTimeout(() => {
          this.newPassFlag = false;
        }, 100);
      }
    },
    // 密码修改 -- 新密码获得焦点时
    newFcous(val) {
      // console.log(val);
      this.newPassFlag = true;
      this.twoPassFlag = false;
    },
    // 密码修改 -- 新密码失去焦点时
    newBlur(val) {
      // console.log(val);
      var value = this.passForm.newPass;
      var reg1 = value.length >= 6 && value.length <= 20;
      var reg2 = /^[A-Za-z0-9`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/.test(
        value
      );
      var reg3 = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{1,30}$/.test(
        value
      );
      if (reg1 && reg2 && reg3) {
        this.newPassFlag = false;
      }
      if (
        this.passForm.newPass != this.passForm.twoPass &&
        this.passForm.twoPass != "" &&
        !this.newPassFlag
      ) {
        this.twoPassFlag = true;
      }
    },
    // 密码修改 -- 确认密码失去焦点
    twoBlur(val) {
      // console.log(val);
      if (!this.newPassFlag) {
        if (this.passForm.twoPass != this.passForm.newPass) {
          this.twoPassFlag = true;
        } else {
          this.twoPassFlag = false;
        }
      }
    },
    // 批量删除
    someDelete() {
      let that = this;
      console.log("批量删除");
      if (this.checkList.length == 0) {
        this.$message({
          type: "warning",
          message: "没有选择要删除的数据!"
        });
        return false;
      }
      var checkArr = [];
      for (let i in this.checkList) {
        checkArr.push({ passport: this.checkList[i].passport });
      }
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
            .delete(Url + "/aimw/student/deleteStudents", {
              data: checkArr
            })
            .then(res => {
              var data = res.data;
              if (data.code == 0) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                that.getClass(that.currentPage);
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
    },
    // 单个删除
    singleDelete(row) {
      let that = this;
      console.log("单个删除");
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
          var checkArr = [{ passport: row.passport }];
          this.$http
            .delete(Url + "/aimw/student/deleteStudents", {
              data: checkArr
            })
            .then(res => {
              var data = res.data;
              if (data.code == 0) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                that.getClass(that.currentPage);
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
    },
    // 选择要操作的学生数据
    checkboxChange(val) {
      this.checkList = val;
    },
    // 密码初始化
    passWordInit() {
      var that = this;
      if (this.checkList.length == 0) {
        this.$message({
          type: "warning",
          message: "没有选择要初始化密码的数据!"
        });
        return false;
      }
      var checkArr = [];
      for (let i in this.checkList) {
        checkArr.push({ passport: this.checkList[i].passport });
      }
      this.$confirm(
        '<div class="confirm_box"><p>确定要对所选数据进行密码初始化？</p><p class="con_p2">初始化后密码将更新为：<span>登录账号后6位</span></p></div>',
        "提示",
        {
          dangerouslyUseHTMLString: true,
          cancelButtonText: "取消",
          confirmButtonText: "确定"
        }
      )
        .then(() => {
          that.$http
            .put(Url + "/aimw/student/initUserPwd", checkArr)
            .then(res => {
              var data = res.data;
              if (data.code == 0) {
                this.$message({
                  type: "success",
                  message: "初始化密码成功!"
                });
                that.getClass(that.currentPage);
                // this.passInit = true;
                // setTimeout(() => {
                //   this.passInitAfter = true;
                // }, 100);
                // setTimeout(() => {
                //   this.passInit = false;
                //   this.passInitAfter = false;
                // }, 3000);
              } else {
                this.$message({
                  type: "error",
                  message: "初始化密码失败!"
                });
              }
            })
            .catch(res => {
              // console.log(res);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消初始化密码"
          });
        });
    },
    // // 保存学年设置
    // setYear() {
    //   let that = this;
    //   // console.log(that.yearForm);
    //   let param = that.yearForm;
    //   param.describe = this.yearSet - 1 + "-" + this.yearSet + "学年";
    //   this.$http
    //     .put(Url + "/aimw/school/updateSchoolYear", that.yearForm)
    //     .then(res => {
    //       let data = res.data.data;
    //       if (res.data.code == 0) {
    //         // if (data) {
    //         this.yearFlag = false;
    //         // console.log(data);
    //         that.$message.success("设置学年成功!");
    //         that.openYearInit();
    //         // }
    //       } else {
    //         that.$message.error(res.data.msg);
    //       }
    //     })
    //     .catch(res => {
    //       console.log(res);
    //     });
    // },
    startTimeChange(val) {
      this.yearForm.startTime = this.formTimes(val);
    },
    endTimeChange(val) {
      this.yearForm.endTime = this.formTimes(val);
      // this.yearSet = this.yearForm.endTime.split("-")[0];
    },
    firstStartTimeChange(val) {
      this.yearForm.firstStartTime = this.formTimes(val);
    },
    firstEndTimeChange(val) {
      this.yearForm.firstEndTime = this.formTimes(val);
    },
    secondStartTimeChange(val) {
      this.yearForm.secondStartTime = this.formTimes(val);
    },
    secondEndTimeChange(val) {
      this.yearForm.secondEndTime = this.formTimes(val);
    },
    formTimes(date) {
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
    },
    // 打开学年设置
    openYear() {
      let that = this;
      that.yearFlag = true;
      this.$http
        .get(Url + "/aimw/school/listSchoolYear")
        .then(res => {
          let data = res.data.data;
          if (res.data.code == 0) {
            if (data) {
              this.yearDetail = data;
              // this.yearSet = data.year;
              this.yearForm.startTime = data.startTime;
              this.yearForm.endTime = data.endTime;
              this.yearForm.firstStartTime = data.firstStartTime;
              this.yearForm.firstEndTime = data.firstEndTime;
              this.yearForm.secondStartTime = data.secondStartTime;
              this.yearForm.secondEndTime = data.secondEndTime;
            }
          } else {
            that.$message.error(res.data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    openYearInit() {
      let that = this;
      this.$http
        .get(Url + "/aimw/school/listSchoolYear")
        .then(res => {
          let data = res.data.data;
          if (res.data.code == 0) {
            if (data) {
              this.yearDetail = data;
              // this.yearSet = data.year;
              this.yearForm.startTime = data.startTime;
              this.yearForm.endTime = data.endTime;
              this.yearForm.firstStartTime = data.firstStartTime;
              this.yearForm.firstEndTime = data.firstEndTime;
              this.yearForm.secondStartTime = data.secondStartTime;
              this.yearForm.secondEndTime = data.secondEndTime;
            }
          } else {
            that.$message.error(res.data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    // 获取学生列表
    getClass(page) {
      let that = this;
      console.log(that.formSearch)
      console.log(that.checksList)
      let classArr = [];
      if (this.checksList.length == 1 && this.checksList[0] == 20000) {
        that.formSearch.graduate = 1
        this.$forceUpdate()
      } else {
        that.formSearch.graduate = 0
        this.$forceUpdate()
      }
      for (let i in this.checksList) {
        // console.log(this.checksList[i]);
        if (this.checksList[i] % 100 != 0) {
          classArr.push(this.checksList[i]);
        }
      }
      this.classIds = classArr;
      console.log(this.classIds);
      
      var param = {
        currentPage: page,
        pageSize: that.limit,
        name: that.formSearch.name,
        passport: that.formSearch.passport,
        graduate: that.formSearch.graduate,
        classIds: that.classIds
      };
      that.currentPage = page;
      that.$http
        .get(Url + "/aimw/student/listStudentsInfo", {
          params: param
        })
        .then(res => {
          // console.log(res.data.data);
          let data = res.data.data;
          if (res.data.code == 0) {
            if (data) {
              if (data.results) {
                that.tableData = data.results;
                that.total = data.count;
                that.pageNum = Math.ceil(data.count / that.limit);
              } else {
                if (data.count > 0) {
                  this.getClass(page - 1);
                } else {
                  that.tableData = [];
                  that.total = 0;
                  that.pageNum = 1;
                }
              }
            } else {
              that.tableData = [];
              that.total = 0;
              that.pageNum = 1;
            }
            console.log(this);
          } else {
            that.$message.error(res.data.msg);
          }
        })
        .catch(res => {
          console.log(res);
          // that.$message.error(res.data.msg);
        });
    },
    // 查询
    onSubmit() {
      // console.log(this.formSearch);
      this.getClass(1);
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.getClass(1);
    },
    getIdsList(data, idsList) {
      console.log(data);
      for (let item of data) {
        console.log(item);
        if (item.Mark === 1) {
          console.log(item);
          if (!item.list) {
            idsList.push(item.Pid);
          }
          if (item.list && item.list.length > 0) {
            console.log(item.list);
            this.getIdsList(item.list, idsList);
          }
        }
      }
    },
    getClassIds(data) {
      console.log(data);
      let that = this;
      that.checksList = []; // 获取哪几个班的班级数据
      let sArr = [];
      if (data.list && data.list.length != 0) {
        console.log(data);
        this.getIdsList(data.list, sArr);
      } else {
        sArr.push(data.Pid);
      }
      that.checksList = sArr;
      console.log(sArr);
      this.getClass(1);
    },
    // 获取左侧班级树
    addChange() {
      let that = this;
      this.addChangeFlag = true;
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
            if (data) {
              this.addChangeFlag = true;
              let schoolOrg = JSON.parse(data.data).schoolOrg;
              that.checksList = []; // 获取哪几个班的班级数据
              that.expandsList = []; // 左侧要选中班级的id
              let child0 = [];
              for (let j in schoolOrg) {
                if (schoolOrg[j].Mark == 1) {
                  child0.push(schoolOrg[j]);
                }
              }
              schoolOrg = child0; // 只剩下在读了
              for (let j in schoolOrg) {
                // 现在只有一个在读
                let list1 = schoolOrg[j].list;
                let child1 = [];
                for (let k in list1) {
                  if (list1[k].Mark == 1) {
                    child1.push(list1[k]);
                  }
                }
                schoolOrg[j].list = child1;
              }
              // 这时的数组里拿到了有权限的初中、高中没权限
              for (let j in schoolOrg) {
                for (let k in schoolOrg[j].list) {
                  let child2 = [];
                  for (let l in schoolOrg[j].list[k].list) {
                    if (schoolOrg[j].list[k].list[l].Mark == 1) {
                      child2.push(schoolOrg[j].list[k].list[l]);
                    }
                  }
                  schoolOrg[j].list[k].list = child2;
                }
              }
              for (let j in schoolOrg) {
                for (let k in schoolOrg[j].list) {
                  for (let l in schoolOrg[j].list[k].list) {
                    let child3 = [];
                    for (let m in schoolOrg[j].list[k].list[l].list) {
                      if (schoolOrg[j].list[k].list[l].list[m].Mark == 1) {
                        child3.push(schoolOrg[j].list[k].list[l].list[m]);
                      }
                    }
                    schoolOrg[j].list[k].list[l].list = child3;
                  }
                }
              }
              for (let i in schoolOrg) {
                // 在读 已毕业
                if (schoolOrg[i].Mark == 1) {
                  that.expandsList.push(schoolOrg[i].Pid);
                  // console.log(that.expandsList);
                  schoolOrg[i].disabled = true;
                  if (schoolOrg[i].list) {
                    // 学段
                    let child1 = schoolOrg[i].list;
                    let child11 = [];
                    for (let j in child1) {
                      if (child1[j].Mark == 1) {
                        child11.push(child1[j]);
                      }
                    }
                    child1 = child11;
                    // console.log(child1);
                    for (let j in child1) {
                      that.expandsList.push(child1[j].Pid);
                      if (child1[j].Mark == 1) {
                        // console.log(child1[j]);
                        child1[j].disabled = true;
                        if (child1[j].list) {
                          // 年级
                          let child2 = child1[j].list;
                          let child22 = [];
                          for (let j in child2) {
                            if (child2[j].Mark == 1) {
                              child22.push(child2[j]);
                            }
                          }
                          child2 = child22;
                          // console.log(child2);
                          for (let k in child2) {
                            // console.log(child2[k]);
                            if (child2[k].Mark == 1) {
                              // // that.checksList.push(child2[k].Pid);
                              // // child2[k].id = child2[k].Pid
                              // // child2[k].label = child2[k].Name
                              // child2[k].disabled = true;
                              if (child2[k].list) {
                                // child2[k].children = child2[k].list
                                // 班级
                                let child3 = child2[k].list;
                                let child33 = [];
                                for (let j in child3) {
                                  if (child3[j].Mark == 1) {
                                    child33.push(child3[j]);
                                  }
                                }
                                child3 = child33;
                                // console.log(child3);
                                for (let m in child3) {
                                  if (child3[m].Mark == 1) {
                                    that.checksList.push(child3[m].Pid);
                                  }
                                  // child3[m].id = child3[m].Pid
                                  // child3[m].label = child3[m].Name
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              // console.log(schoolOrg);
              // console.log(that.checksList);
              // console.log(that.expandsList);
              this.treeData = schoolOrg;
              // console.log(this.treeData);
              // 获取学生列表
              this.getClass(1);
            }
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    // 学段 年级 班级 三级联动
    choseLevel1(value) {
      // console.log(value);
      this.gradeList1 = [];
      this.classList1 = [];
      this.coveryForm.grade = "";
      this.coveryForm.class = "";
      this.levelList1.map(e => {
        if (value == e.Pid) {
          this.gradeList1 = e.list;
          return false;
        }
      });
      this.getRecovery(1);
    },
    choseGrade1(value) {
      // console.log(value);
      this.classList1 = [];
      this.coveryForm.class = "";
      this.gradeList1.map(e => {
        if (value == e.Pid) {
          this.classList1 = e.list;
          return false;
        }
      });

      this.getRecovery(1);
    },
    choseClass1(value) {
      this.getRecovery(1);
    },
    // 学段 年级 班级 三级联动
    levleChange(val) {
      // console.log(val);
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
      this.addClassForm.level = value;
      this.gradeList = [];
      this.classList = [];
      this.addClassForm.grade = "";
      this.addClassForm.class = "";
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
      this.addClassForm.grade = value;
      this.classList = [];
      this.addClassForm.class = "";
      this.gradeList.map(e => {
        if (value == e.Pid) {
          this.addClassForm.className = e.Name;
          this.classList = e.list;
          return false;
        }
      });
      console.log(this.classList);
      if (this.classList) {
        this.addClassForm.class = this.classList[0].Pid;
      } else {
        this.addClassForm.class = "";
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
              schoolOrg = child0; // 只剩下在读了
              for (let j in schoolOrg) {
                // 现在只有一个在读
                let list1 = schoolOrg[j].list;
                let child1 = [];
                for (let k in list1) {
                  if (list1[k].Mark == 1) {
                    child1.push(list1[k]);
                  }
                }
                schoolOrg[j].list = child1;
              }
              // 这时的数组里拿到了有权限的初中、高中没权限
              for (let j in schoolOrg) {
                for (let k in schoolOrg[j].list) {
                  let child2 = [];
                  for (let l in schoolOrg[j].list[k].list) {
                    if (schoolOrg[j].list[k].list[l].Mark == 1) {
                      child2.push(schoolOrg[j].list[k].list[l]);
                    }
                  }
                  schoolOrg[j].list[k].list = child2;
                }
              }
              for (let j in schoolOrg) {
                for (let k in schoolOrg[j].list) {
                  for (let l in schoolOrg[j].list[k].list) {
                    let child3 = [];
                    for (let m in schoolOrg[j].list[k].list[l].list) {
                      if (schoolOrg[j].list[k].list[l].list[m].Mark == 1) {
                        child3.push(schoolOrg[j].list[k].list[l].list[m]);
                      }
                    }
                    schoolOrg[j].list[k].list[l].list = child3;
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
              that.levelList1 = levelArr;
              console.log(that.levelList1);
              console.log(that.levelList);
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
    }
  }
};
</script>

<style lang="less">
.el-popper {
  padding: 0.08rem 0.12rem;
  padding: 0;
  min-width: 120px;
  cursor: pointer;
  ul {
    li {
      height: 0.3rem;
      line-height: 0.3rem;
      text-align: center;
    }
    .c_active {
      background: linear-gradient(
        0deg,
        rgba(196, 236, 255, 0.14) 0%,
        rgba(151, 205, 255, 0.14) 100%
      );
      color: #006cff;
    }
  }
}
.class_wrap {
  text-align: left;
  margin: 0 0.22rem;
  // 公共页面顶部标题
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
          width: 2.1rem;
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
              width: 2.1rem;
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
  // 表格
  .tables_box {
    margin: 0.2rem 0;
    background: #ffffff;
    box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
    border-radius: 0.04rem;
    padding: 0.2rem 0.24rem;
    position: relative;
    // 密码初始化提示框
    .pass_init {
      transition: width 0.4s ease-out, opacity 0.4s ease-in,
        visibility 0.4s ease-in;
      opacity: 0;
      visibility: 0;
      width: 0;
      height: 0.66rem;
      display: flex;
      position: absolute;
      right: 0.24rem;
      top: 0.24rem;
      background: #effeff;
      border: 1px solid;
      border-image: linear-gradient(185deg, #00eafe, #00b6f0) 10 10;
      box-shadow: 0px 3px 12px 0px rgba(155, 183, 161, 0.1);
      .pass_txt {
        margin-top: 0.12rem;
        p {
          font-size: 0.14rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #354b70;
          span {
            font-family: SourceHanSansCN-Regular;
            color: #006cff;
          }
        }
      }
      .pass_icon {
        width: 0.14rem;
        height: 0.14rem;
        margin: 0.16rem 0.04rem 0 0.08rem;
      }
      .pass_close {
        position: absolute;
        top: 0.12rem;
        right: 0.12rem;
        width: 0.1rem;
        height: 0.1rem;
      }
    }
    .pass_act {
      width: 3.16rem !important;
      opacity: 1 !important;
      visibility: 1 !important;
    }
    .el-switch__core {
      border-color: #ffffff;
      background: linear-gradient(-90deg, #d4e7ff 0%, #8fb1d7 100%);
    }
    .el-switch.is-checked .el-switch__core {
      background: linear-gradient(-90deg, #00b6f0, #00eafe);
    }
    // 表格上面的操作按钮
    .el_btn_box {
      margin: 0.18rem 0 0;
      padding-bottom: 0.18rem;
      margin-left: 0.16rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.01rem solid #e1e9ff;
      .el_btn_left {
        height: 0.24rem;
        line-height: 0.24rem;
        font-size: 0.18rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #7786ac;
        display: flex;
        align-items: center;
        // cursor: pointer;
        // span{
        //   cursor: pointer;
        // }
        .shu_line {
          display: block;
          width: 0.03rem;
          height: 0.2rem;
          background: linear-gradient(1deg, #2ebeff, #4091fd);
        }
        .shu_year {
          display: block;
          margin: 0 0.08rem;
        }
        img {
          cursor: pointer;
          width: 0.18rem;
          height: 0.18rem;
        }
      }
      .el_btn_right {
        display: flex;
        .el_one,
        .el_two {
          margin-left: 0.18rem;
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
    }
    .class_main {
      // display: flex;
      padding: 0;
      margin: 0 0 0 0.16rem;
      padding-left: 2.62rem;
      position: relative;
      .class_tree {
        margin-top: 0.16rem;
        width: 2.46rem;
        margin-right: 0.16rem;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        overflow-x: auto;
        .tree_box {
          width: 100%;
          position: absolute;
          margin: auto;
          left: 0;
          top: 0;
          bottom: 0;
          overflow: auto;
          // overflow-y: auto;
          border: 1px solid #e1e9ff;
          margin: 0.46rem 0 0;
          background: linear-gradient(
            0deg,
            rgba(196, 236, 255, 0.14) 0%,
            rgba(151, 205, 255, 0.14) 100%
          );
          border-radius: 0.04rem;
          padding: 0.1rem 0;
          .el-tree {
            background: transparent;
            padding: 0 0.1rem;
          }
          .custom-tree-node {
            img {
              width: 0.14rem;
              height: 0.12rem;
            }
          }
          .el-tree-node {
            white-space: nowrap;
            outline: 0;
            display: table;
            padding: 0 0.05rem 0 0;
          }
          .el-tree-node__content {
            height: 0.36rem;
            background: transparent !important;
            .custom-tree-node{
              cursor: pointer;
              span{
                cursor: pointer;
              }
            }
            
            .el-checkbox__inner::after {
              width: 3px !important;
              height: 7px !important;
            }
          }
          .el-tree-node__content:hover{
            background: transparent;
          }
        }
        .mar00 {
          margin: 0 0;
        }
        .el_two {
          position: absolute;
          top: 0;
          left: 0;
          margin-right: 0.18rem;
          width: 100%;
          height: 0.36rem;
          padding: 1px;
          background: linear-gradient(263deg, #00c2ff, #0075ff);
          border-radius: 0.04rem;
          overflow: hidden;
          .el_two_s {
            width: 100%;
            height: 100%;
            background: #ffffff;
            border-radius: 0.04rem;
          }
          .el_btn_one,
          .el_btn_two {
            border: 0;
            font-size: 0.16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #ffffff;
            // background: linear-gradient(263deg, #00c2ff, #0075ff);
            border-radius: 0.04rem;
            padding: 0;
            width: 100%;
            height: 100%;
            span {
              display: flex;
              justify-content: flex-start;
              padding: 0 0.13rem;
              align-items: center;
              img {
                width: 0.14rem;
                height: 0.14rem;
                margin: 0 0.04rem;
              }
            }
          }
          .el_btn_two {
            background: linear-gradient(
              0deg,
              rgba(196, 236, 255, 0.14) 0%,
              rgba(151, 205, 255, 0.14) 100%
            );
            // border-image: linear-gradient(45deg, #0075ff, #00c2ff) 10 10;
            // box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
            border-radius: 0.03rem;
            color: #006cff;
            img {
              width: 0.18rem;
              height: 0.16rem;
            }
          }
        }
      }
      .class_student {
        // flex: 1;
        border-left: 0.01rem solid #e1e9ff;
        .no_data {
          width: 100%;
          height: 6rem;
          // background:#fe5fb8;
          display: flex;
          justify-content: center;
          align-items: center;
          .no_b {
            text-align: center;
            img {
              width: 2.33rem;
              height: 1.72rem;
            }
            p {
              margin-top: 0.4rem;
              font-size: 0.16rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #7786ac;
            }
          }
        }
        .class_list {
          padding: 0.16rem 0 0 0.16rem;
          // 表格上面的操作按钮
          .el_btn_box {
            margin: 0;
            padding-bottom: 0.18rem;
            margin-left: 0.16rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 0;
            .el_btn_left {
              height: 0.24rem;
              line-height: 0.24rem;
              font-size: 0.18rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #7786ac;
              display: flex;
              align-items: center;
              .shu_line {
                display: block;
                width: 0.03rem;
                height: 0.2rem;
                background: linear-gradient(1deg, #2ebeff, #4091fd);
              }
              .shu_year {
                display: block;
                margin: 0 0.08rem;
              }
              img {
                width: 0.29rem;
                height: 0.22rem;
              }
            }
            .el_btn_right {
              display: flex;
              .el_one,
              .el_two {
                margin-left: 0.18rem;
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
      margin-bottom: 0.2rem;
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
        // padding: 0.09rem 0.06rem;
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
      .el-table-column--selection .cell {
        padding: 0;
      }
      .el-table__header,
      .el-table__body {
        col {
          width: 1.3rem;
        }
        col:nth-child(1) {
          width: 0.6rem;
        }
        col:nth-child(2),
        col:nth-child(7) {
          width: 0.8rem;
        }
        col:nth-child(8) {
          width: 2.4rem;
        }
        col:nth-child(9) {
          width: 0;
        }
      }
      // col[name='el-table_1_column_1']{
      //   width: 0.60rem;
      // }
      // col[name='el-table_1_column_2']{
      //   width: 0.80rem;
      // }
      // col[name='el-table_1_column_3']{
      //   width: 1.30rem;
      // }
      // col[name='el-table_1_column_4']{
      //   width: 1.30rem;
      // }
      // col[name='el-table_1_column_5']{
      //   width: 1.30rem;
      // }
      // col[name='el-table_1_column_6']{
      //   width: 1.30rem;
      // }
      // col[name='el-table_1_column_7']{
      //   width: 1.30rem;
      // }
      // col[name='el-table_1_column_8']{
      //   width: 0.80rem;
      // }
      // col[name='el-table_1_column_9']{
      //   width: 2.4rem;
      // }
    }
    // 底部分页
    .table_page {
      display: flex;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 0.14rem;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 0;
      margin-top: 0.18rem;
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
          height: 0.28rem;
          line-height: 0.28rem;
          color: #7786ac;
          font-size: 0.14rem;
        }
        .el-input--mini .el-input__icon {
          height: 0.28rem;
          line-height: 0.28rem;
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
            line-height: 0.28rem;
            height: 0.28rem;
          }
        }
      }
    }
  }
  // .el-message-box__header{
  //           padding: 0.14rem 0.2rem;
  //           background: linear-gradient(-90deg, #4196FF, #005ACB);
  //           .el-message-box__title{
  //               color: #ffffff;
  //               font-size: 0.18rem;
  //           }
  //           .el-message-box__headerbtn{
  //               .el-message-box__close{
  //                   color: #ffffff;
  //               }
  //           }
  //       }
  //       .el-message-box__btns{
  //           padding:0.05rem 0.15rem 0;
  //           width: 2.94rem;
  //           margin: 0 auto 0.14rem;
  //           .el-button{
  //               width: 1.12rem !important;
  //               height: 0.36rem !important;
  //               color: #ffffff !important;
  //               font-size: 0.16rem !important;
  //               margin-left: 0.4rem;
  //               background: linear-gradient(261deg, #8FB1D7, #B8D5F5);
  //               box-shadow: 0px 4px 20px 0px rgba(171, 196, 227, 0.45);
  //           }
  //           .el-button--primary{
  //               background: linear-gradient(263deg, #00C2FF, #0075FF);
  //               box-shadow: 0px 6px 36px 0px rgba(62, 150, 253, 0.19);
  //               border: none;
  //               margin-left: 0rem;
  //               float: left;
  //           }
  //       }
  //修改密码
  .fix_pass {
    display: flex;
    justify-content: center;
    align-items: center;
    /*左三角*/
    .tip_left  {
      width: 100% !important;
      position: relative;
      margin-top: 0.1rem;
      padding: 0.05rem 0.1rem;
      font-size: 0.14rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #7786ac;
      min-height: 0.34rem;
      line-height: 0.24rem;
      border: 0.01rem solid #e1e9ff;
      background-color: #fff;
      border-radius: 5px;
      -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }

    .tip_left::before,
      .tip_left::after  {
      content: "";
      display: block;
      border-width: 0.06rem;
      position: absolute;
      left: 0.12rem;
      top: -0.13rem;
      border-style: dashed solid solid dashed;
      border-color: transparent transparent #e1e9ff transparent;
      font-size: 0;
      line-height: 0;
    }

    .tip_left::after  {
      top: -0.11rem;
      border-color: transparent transparent #fff transparent;
    }
    .tip_msg {
      display: flex;
      align-items: center;
      width: 100% !important;
      font-size: 0.14rem;
      img {
        display: block;
        margin-right: 0.06rem;
      }
    }
    .el-dialog {
      width: 5.4rem;
      overflow: hidden;
      height: auto;
      margin: 0 auto !important;
      .el-dialog__header {
        padding: 0.14rem 0.2rem;
        background: linear-gradient(-90deg, #4196ff, #005acb);
        .el-dialog__title {
          display: block;
          line-height: 1;
          color: #ffffff;
          font-size: 0.18rem;
        }
        .el-dialog__headerbtn {
          top: 0.14rem;
          .el-icon-close {
            color: #ffffff;
          }
        }
      }
      .el-dialog__body {
        padding: 0.28rem 0.3rem 0.05rem 0.01rem;
        .el-form {
          .el-form-item {
            display: flex;
            margin-bottom: 0.18rem;
            .el-form-item__label {
              font-size: 0.16rem;
              line-height: 0.36rem;
              padding: 0;
              margin-right: 0.1rem;
              width: 0.98rem;
            }
            .el-form-item__content {
              flex: 1;
              line-height: 0.36rem;
              .el-input {
                font-size: 0.16rem;
                .el-input__inner {
                  height: 0.36rem;
                  line-height: 0.36rem;
                  padding: 0 0.15rem;
                }
              }
            }
            .el-input__icon {
              line-height: 0.36rem;
            }
          }
        }
      }
      .el-dialog__footer {
        padding: 0.05rem 0.15rem 0;
        width: 2.94rem;
        margin: 0 auto 0.24rem;
        display: flex;
        justify-content: center;
        .el-button {
          width: 1.12rem !important;
          height: 0.36rem !important;
          color: #ffffff !important;
          font-size: 0.16rem !important;
          padding: 0;
          margin-left: 0.4rem;
          background: linear-gradient(261deg, #8fb1d7, #b8d5f5);
          box-shadow: 0px 4px 20px 0px rgba(171, 196, 227, 0.45);
          border: 0;
        }
        .el-button--primary {
          background: linear-gradient(263deg, #00c2ff, #0075ff);
          box-shadow: 0px 6px 36px 0px rgba(62, 150, 253, 0.19);
          border: none;
          margin-left: 0rem;
          float: left;
        }
      }
    }
  }
  .look_group {
    .group_box {
      margin-top: 0.28rem;
      margin-bottom: 0rem;
      .el-table {
        height: 3.2rem;
        min-height: 4.64rem;
        // overflow: hidden;
        // overflow-y: auto;
      }
      .el_btn_box {
        justify-content: flex-start !important;
        align-items: center;
        .address-select-list {
          margin-right: 0.15rem;
          .el-select {
            .el-input__inner {
              height: 0.36rem;
              line-height: 0.36rem;
              font-size: 0.16rem;
            }
            .el-input__icon {
              line-height: 0.36rem;
            }
          }
        }
      }
      .el-transfer {
        font-size: 0.16rem;
        width: 100%;
        display: flex !important;
        align-items: center;
        justify-content: space-between;
        .el-transfer-panel {
          width: 3.09rem;
          border: 0.01rem solid #e1e9ff;
          background: linear-gradient(
            0deg,
            rgba(196, 236, 255, 0.14) 0%,
            rgba(151, 205, 255, 0.14) 100%
          );
          .el-transfer-panel__header {
            background: linear-gradient(263deg, #babfff, #7279ff);
            .el-checkbox__label {
              padding-left: 0.06rem !important;
            }
            .el-checkbox {
              line-height: 0.36rem;
              font-size: 0.16rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              .el-checkbox__label {
                font-size: 0.16rem !important;
                color: #ffffff !important;
                span {
                  color: #ffffff;
                }
              }
              .el-checkbox__input.is-focus .el-checkbox__inner {
                border-color: transparent !important;
              }
            }
          }
          .el-transfer-panel__body {
            .el-checkbox__label {
              padding-left: 0.24rem !important;
            }
          }
        }
        .el-transfer__buttons {
          padding: 0 0.14rem;
          width: 1.44rem;
          .el-transfer__button:first-child {
            margin-bottom: 0.16rem;
          }
          .el-transfer__button {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1.16rem;
            height: 0.36rem;
            line-height: 0.36rem;
            border-radius: 0.02rem;
            overflow: hidden;
            background: #ffffff;
            font-size: 0.16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #006cff;

            span {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              border: 0.01rem solid;
              border-image: linear-gradient(45deg, #0075ff, #00c2ff) 10 10;
              background: linear-gradient(
                0deg,
                rgba(196, 236, 255, 0.14) 0%,
                rgba(151, 205, 255, 0.14) 100%
              );
              span {
                display: inline-block;
                background: transparent;
                border: 0;
                width: auto;
                height: auto;
                margin: 0 0.02rem;
                font-size: 0.16rem;
              }
              .el-icon-arrow-left::before {
                content: "\E6EA";
              }
              .el-icon-arrow-right::before {
                content: "\E6E9";
              }
            }
          }
        }
      }
    }
    .el-dialog {
      width: 11.2rem;
      .el_btn_box {
        justify-content: flex-end;
        .el_one {
          margin-right: 0;
        }
      }
      .el-table {
        th {
          color: #354b70;
        }
        td {
          color: #7786ac;
        }
        th,
        td {
          font-family: Source Han Sans CN;
          font-weight: 400;
          text-align: center;
          height: 0.42rem !important;
        }
        .el-button--text {
          padding: 0;
          font-size: 0.16rem;
        }
      }
      .el-dialog__body {
        padding: 0 0.2rem !important;
      }
      .el-dialog__footer {
        width: auto;
        display: flex;
        justify-content: center;
        .el-button {
          margin-left: 1.08rem;
        }
        .el-button--primary {
          margin-left: 0;
        }
      }
    }
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
  }
  .add_class_dia {
    .el-dialog {
      width: 5.54rem;
      .el-select {
        width: 100%;
      }
      .small_class {
        display: inline-block !important;
        width: 1.45rem;
        margin: 0 0.06rem;
      }
      .el-form-item__label {
        width: 1.2rem !important;
      }
    }
  }
  .set_year {
    .el-dialog {
      width: 6.84rem;
      .set_year_t {
        display: flex;
        align-items: center;
        font-size: 0.18rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #006cff;
        line-height: 1;
        margin-bottom: 0.18rem;
        span {
          width: 0.03rem;
          height: 0.17rem;
          background: linear-gradient(0deg, #059dff 0%, #00c0ff 100%);
          margin-right: 0.1rem;
        }
      }
      .set_year_d {
        display: flex;
        align-items: center;
        .el-date-editor.el-input,
        .el-date-editor.el-input__inner {
          width: 1.86rem;
        }
        .time_bg1 {
          .el-input__inner {
            // background: linear-gradient(
            //   0deg,
            //   rgba(196, 236, 255, 0.14) 0%,
            //   rgba(151, 205, 255, 0.14) 100%
            // );
          }
          .el-input.is-disabled .el-input__inner {
            background-color: #f5f7fa !important;
            border-color: #e4e7ed;
            color: #7786ac !important;
            cursor: not-allowed;
          }
        }
      }
      .el-form-item__label {
        width: 1.04rem !important;
        color: #7786ac;
      }
      .el-input__inner {
        color: #354b70;
      }
      .el-dialog__body {
        padding: 0.28rem 0.3rem 0.05rem 0.3rem;
      }
    }
  }
  // 底部分页
  .table_pages {
    display: flex;
    font-family: Source Han Sans CN;
    font-weight: 400;
    font-size: 0.14rem;
    align-items: center;
    justify-content: flex-end;
    margin: 0.18rem 0 0.08rem;

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
</style>
