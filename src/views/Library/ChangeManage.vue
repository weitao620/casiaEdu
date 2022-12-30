<template>
  <div class="change_manage_wrap">
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
          <el-breadcrumb-item>学生异动管理</el-breadcrumb-item>
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
        <div class="c_reson">
          <div class="c_lable">
            异动原因:
          </div>
          <ul>
            <li
              v-for="item in resonList"
              :key="item.id"
              :class="item.check ? 'time_act' : ''"
              @click="resonTab(item)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="c_reson">
          <div class="c_lable">
            异动时段:
          </div>
          <ul>
            <li :class="timeAct == 1 ? 'time_act' : ''" @click="timeTab(1)">
              按学年
            </li>
            <li :class="timeAct == 2 ? 'time_act' : ''" @click="timeTab(2)">
              按日期
            </li>
            <el-form-item prop="time" v-if="timeAct == 1">
              <el-select v-model="formSearch.time" placeholder="全部">
                <el-option
                  v-for="item in sectionList"
                  :key="item.year"
                  :label="item.yearName"
                  :value="item.years"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="time_data" prop="time" v-if="timeAct == 2">
              <el-date-picker
                v-model="formSearch.time"
                type="daterange"
                ref="datePick3"
                :clearable="false"
                :picker-options="dateButton3"
                @change="changeTime3"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </el-form-item>
          </ul>
        </div>
        <el-form-item class="c_sig" label="学生姓名或账号:" prop="name">
          <el-input
            v-model="formSearch.name"
            placeholder="请输入学生姓名或账号"
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
      <div class="search_title center_o_title">
        列表
      </div>
      <div class="el_btn_box">
        <div class="el_one" style="width:0.86rem">
          <el-button class="el_btn_one" @click="threeChange" type="primary">
            <i class="iconfont icon-jiahao"></i>
            新增
          </el-button>
        </div>
        <div class="el_two" style="width:0.86rem">
          <el-button class="el_btn_two" @click="someExport" type="primary">
            <i class="iconfont icon-daochu"></i>
            导出
          </el-button>
        </div>
      </div>
      <template>
        <el-table
          ref="multipleTablea"
          border
          :data="tableData"
          style="width: 100%"
          @sort-change="sortChange"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection"> </el-table-column>
          <el-table-column type="index" label="序号"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="passport" label="账号"> </el-table-column>
          <el-table-column prop="passport" label="学籍号"> </el-table-column>
          <el-table-column prop="unusualInfos" label="异动原因">
          </el-table-column>
          <el-table-column prop="date" label="异动时间"> </el-table-column>
          <el-table-column prop="oldClassName" label="原班级">
          </el-table-column>
          <el-table-column prop="className" label="现班级"> </el-table-column>
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
    <!-- 新增校内异动 -->
    <el-dialog
      class="fix_pass add_class_dia"
      :close-on-click-modal="false"
      title="新增校内异动"
      :visible.sync="addChangeFlag"
    >
      <el-form :model="addChangeForm">
        <el-input
          placeholder="请输入学生账号或姓名"
          v-model="changeSear"
          @input="inputSear"
          class="change_sear"
        >
          <i
            slot="prefix"
            class="el-input__icon el-icon-search"
            @click="starSearch"
          ></i>
        </el-input>
        <div class="tree_close" v-if="addSearFlag" @click="addSearFlag = false">
          <i class="el-icon-close"></i>
        </div>
        <div class="tree_box" v-if="addSearFlag">
          <el-tree
            v-if="reloadTree"
            :data="treeData"
            default-expand-all
            :default-expanded-keys="expandsList"
            :default-checked-keys="checksList"
            node-key="Pid"
            ref="treeform"
            highlight-current
            :props="defaultProps"
            @check="handleCheckChange"
            :render-content="renderContent"
          >
          </el-tree>
        </div>
        <el-form-item class="chose_stats" required label="已选择学生:">
          <ul class="chose_s_ul">
            <li v-for="(item, index) in studyList" :key="item.Passport">
              {{ item.Name }}<span @click="studyDel(item, index)">X</span>
            </li>
          </ul>
        </el-form-item>
        <el-form-item required label="异动原因:">
          <section class="address-select-list">
            <el-select
              class="adress-select"
              v-model="addChangeForm.reason"
              placeholder="请选择异动原因"
              @change="reasonChange"
            >
              <el-option
                v-for="item in resonList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </section>
        </el-form-item>
        <div style="display:flex;">
          <el-form-item required label="在校状态:">
            <section class="address-select-list">
              <el-select
                :disabled="!statusFlag"
                class="adress-select"
                v-model="addChangeForm.status"
                placeholder="请选择在校状态"
                @change="statusChange"
              >
                <el-option label="在校" :value="1"></el-option>
                <el-option label="不在校" :value="0"></el-option>
              </el-select>
            </section>
          </el-form-item>
          <el-form-item required label="在籍状态:">
            <section class="address-select-list">
              <el-select
                :disabled="!studyFlag"
                class="adress-select"
                v-model="addChangeForm.study"
                placeholder="请选择在籍状态"
              >
                <el-option label="在籍" :value="1"></el-option>
                <el-option label="不在籍" :value="0"></el-option>
              </el-select>
            </section>
          </el-form-item>
        </div>
        <el-form-item required label="转入班级:" v-if="enterClassFlag">
          <section class="address-select-list">
            <el-select
              class="adress-select"
              v-model="addChangeForm.level"
              @change="levleChange"
              placeholder="请选择学段"
            >
              <el-option
                v-for="item in levelList"
                :key="item.Pid"
                :label="item.Name"
                :value="item.Pid"
              ></el-option>
            </el-select>
          </section>
        </el-form-item>
        <el-form-item class="just_nbn" label=" " v-if="enterClassFlag">
          <section class="address-select-list">
            <el-select
              class="adress-select"
              v-model="addChangeForm.grade"
              @change="gradeChange"
              placeholder="请选择年级"
            >
              <el-option
                v-for="item in gradeList"
                :key="item.Pid"
                :label="item.Name"
                :value="item.Pid"
              ></el-option>
            </el-select>
          </section>
          <section class="address-select-list">
            <el-select
              class="adress-select"
              v-model="addChangeForm.class"
              @change="classChange"
              placeholder="请选择班级"
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
      <div slot="footer" class="dialog-footer">
        <el-button @click="addChangeFlag = false">取 消</el-button>
        <el-button type="primary" @click="subChange">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Url from "@/assets/js/url.js";
export default {
  name: "report",
  data() {
    var that = this
    return {
      dateButton3: {
        time3: '',
        shortcuts: [
          {
            text: "清空",
            onClick(picker) {
              console.log(3)
              that.time3 = ''
              that.formSearch.time = ''
              that.$refs.datePick3.handleClose();
              // picker.$emit('pick', ['', '']);
            }
          },
          {
            text: "确定",
            onClick() {
              that.$refs.datePick3.handleClose();
              // 通过$ref设置 点击确定时，关闭日期选择的弹窗
            }
          }
        ]
      },
      reloadTree: false,
      statusFlag: true,
      studyFlag: true,
      enterClassFlag: true,
      treeData: [],
      expandsList: [],
      checksList: [],
      defaultProps: {
        children: "list",
        label: "Name"
      },
      addSearFlag: false,
      changeSear: "",
      addChangeForm: {
        reason: "",
        status: "",
        study: "",
        level: "",
        grade: "",
        class: "",
        sectionName: "",
        gradeName: "",
        className: ""
      },
      levelList: [],
      gradeList: [],
      classList: [],
      addChangeFlag: false,
      resonList: [
        {
          id: 0,
          name: "全部",
          check: true
        },
        {
          id: 1,
          name: "转班",
          check: true
        },
        {
          id: 2,
          name: "跳级",
          check: true
        },
        {
          id: 3,
          name: "留级",
          check: true
        },
        {
          id: 4,
          name: "转出",
          check: true
        },
        {
          id: 5,
          name: "休学",
          check: true
        },
        {
          id: 6,
          name: "退学",
          check: true
        },
        {
          id: 7,
          name: "出国",
          check: true
        },
        {
          id: 8,
          name: "复学",
          check: true
        },
        {
          id: 9,
          name: "其他",
          check: true
        }
      ],
      timeAct: 1,
      tabActive: 1,
      limit: 10,
      total: 0,
      pageNum: 1,
      currentPage: 1,
      formSearch: {
        name: "",
        grade: "",
        section: "",
        unusualInfo: "1,2,3,4,5,6,7,8,9",
        time: "",
        dateStart: "",
        dateEnd: ""
      },
      tableData: [],
      yearSet: 0,
      yearDetail: {},
      sectionList: [],
      checkList: [],
      studyList: [],
      oldClassName: ''
    };
  },
  created() {
    // aaa
  },
  mounted() {
    // aaa
    this.getList(this.currentPage);
    this.openYearInit();
  },
  methods: {
    // 当日期改变时触发
    changeTime3(e) {
      console.log(e)
      // 保证在选择完时间后，日期弹出框不会消失
      if (e != '') {
        this.$refs.datePick3.focus();
      }
      this.time3 = e;
    },
    studyDel(data, index) {
      console.log(data);
      this.studyList.splice(index, 1);
      this.reloadTree = false;
      setTimeout(() => {
        this.reloadTree = true;
      }, 0);
      // console.log(this.$refs.treeform)
      // console.log(this.$refs.treeform.getCheckedNodes());
      // this.append(data)
      // this.treeData = this.treeData
    },
    // 渲染树
    renderContent(h, { node, data, store }) {
      console.log(data);
      console.log(node);
      let that = this;
      if (data.list) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
          </span>
        );
      } else {
        console.log(
          JSON.stringify(that.studyList).indexOf(JSON.stringify(data))
        );
        console.log(
          JSON.stringify(that.studyList).indexOf(JSON.stringify(data)) != -1
        );
        return (
          <span class="custom-tree-node">
            <span>
              <el-checkbox
                checked={
                  JSON.stringify(that.studyList).indexOf(
                    JSON.stringify(data)
                  ) != -1
                }
                on-change={() => this.append(data, node)}
              ></el-checkbox>
            </span>
            <span>{node.label}</span>
          </span>
        );
      }
    },
    append(data, node) {
      let that = this;
      console.log(data);
      console.log(node.parent.data.Name);
      let params = {
        Name: data.Name,
        Passport: data.Passport
      };
      if (
        JSON.stringify(that.studyList).indexOf(JSON.stringify(params)) != -1
      ) {
        console.log("！！！");
        this.oldClassName = ''
        for (let i in that.studyList) {
          if (that.studyList[i].Passport == params.Passport) {
            that.studyList.splice(i, 1);
          }
        }
      } else {
        this.oldClassName = node.parent.data.Name
        console.log("???");
        that.studyList.push(params);
      }
      console.log(this.studyList);
      // const newChild = { id: Pid++, label: 'testtest', children: [] };
      // if (!data.children) {
      //   this.$set(data, 'children', []);
      // }
      // data.children.push(newChild);
    },

    remove(node, data) {
      // const parent = node.parent;
      // const children = parent.data.children || parent.data;
      // const index = children.findIndex(d => d.id === data.id);
      // children.splice(index, 1);
    },
    // renderContent(h, { node, data, store }) {
    //   if (data.children) {
    //     return (
    //       <span class="custom-tree-node">
    //         <i class="iconfont icon-wenjian"></i>
    //         <span>{node.label}</span>
    //       </span>
    //     );
    //   } else {
    //     return (
    //       <span class="custom-tree-node">
    //         <span>{node.label}</span>
    //       </span>
    //     );
    //   }
    // },
    // 选择班级
    handleCheckChange(data, checked, indeterminate) {
      console.log(data);
    },
    handleSelectionChange(val) {
      this.checkList = val;
    },
    openYearInit() {
      let that = this;
      this.$http
        .get(Url + "/aimw/student/listUnusualPeriod")
        .then(res => {
          let data = res.data.data;
          if (res.data.code == 0) {
            if (data) {
              this.yearDetail = data;
              // this.yearSet = data.year;
              console.log(this.yearDetail);
              let arr5 = []
              if (data && data.length > 0) {
                for (let i in data) {
                  data[i].year = data[i].describe.split('-')[0]
                  data[i].years = [data[i].startTime, data[i].endTime]
                  data[i].yearName = data[i].describe
                }
                arr5 = data
              }
              
              //   {
              //     year: data.year,
              //     years: [data.year - 1 + "-01-01", data.year + "-12-31"],
              //     yearName: data.year - 1 + "-" + data.year + "学年"
              //   },
              //   {
              //     year: data.year + 1,
              //     years: [data.year + "-01-01", data.year + 1 + "-12-31"],
              //     yearName: data.year + "-" + (data.year + 1) + "学年"
              //   },
              //   {
              //     year: data.year + 2,
              //     years: [data.year + 1 + "-01-01", data.year + 2 + "-12-31"],
              //     yearName: data.year + 1 + "-" + (data.year + 2) + "学年"
              //   },
              //   {
              //     year: data.year + 3,
              //     years: [data.year + 2 + "-01-01", data.year + 3 + "-12-31"],
              //     yearName: data.year + 2 + "-" + (data.year + 3) + "学年"
              //   },
              //   {
              //     year: data.year + 4,
              //     years: [data.year + 3 + "-01-01", data.year + 4 + "-12-31"],
              //     yearName: data.year + 3 + "-" + (data.year + 4) + "学年"
              //   },
              //   {
              //     year: data.year + 5,
              //     years: [data.year + 4 + "-01-01", data.year + 5 + "-12-31"],
              //     yearName: data.year + 4 + "-" + (data.year + 5) + "学年"
              //   }
              // ];
              console.log(arr5);
              this.sectionList = arr5;
            }
          } else {
            that.$message.error(res.data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    starSearch() {
      let that = this;
      console.log(this.changeSear);
      this.addSearFlag = true;
      this.reloadTree = true;
      var param = {
        searchData: this.changeSear
      };
      this.$http
        .get(Url + "/aimw/student/searchUnusualStudentsInfo", {
          params: param
        })
        .then(res => {
          let data = res.data.data;
          this.treeData = [];
          // if (this.changeSear == 1) {
          this.treeData = JSON.parse(data).studentOrg;
          // this.treeData.push({
          //   Pid: 17000,
          //   Name: "初中",
          //   list: [
          //     {
          //       Pid: 17100,
          //       Name: "初一",
          //       list: [
          //         {
          //           Pid: 17101,
          //           Name: "初一73班",
          //           list: [
          //             {
          //               Name: '未涛7',
          //               Passport: "15811321409"
          //             },
          //             {
          //               Name: '未涛78',
          //               Passport: "15811321408"
          //             }
          //           ]
          //         }
          //       ]
          //     }
          //   ]
          // })
          // } else {
          //   this.treeData = [{
          //     Pid: 11000,
          //     Name: "初中",
          //     list: [
          //       {
          //         Pid: 11100,
          //         Name: "初一",
          //         list: [
          //           {
          //             Pid: 11101,
          //             Name: "初一3班",
          //             list: [
          //               {
          //                 Name: '未涛',
          //                 Passport: "15811321409"
          //               },
          //               {
          //                 Name: '未涛8',
          //                 Passport: "15811321408"
          //               }
          //             ]
          //           }
          //         ]
          //       }
          //     ]
          //   }]
          // }
          console.log(this.treeData);
        });
    },
    inputSear(val) {
      console.log(val);
      this.changeSear = val;
    },
    subChange() {
      let that = this;
      console.log(this.studyList);
      console.log(this.addChangeForm);
      let passportArr = [];
      for (let i in this.studyList) {
        passportArr.push({
          passport: this.studyList[i].Passport
        });
      }
      if (passportArr.length == 0) {
        that.$message({
          type: "warning",
          message: "请选择异动的学生!"
        });
        return false
      }
      let params = {
        passports: passportArr,
        unusualInfo: this.addChangeForm.reason,
        naturalization: this.addChangeForm.study,
        inSchool: this.addChangeForm.status,
        sectionName: this.addChangeForm.sectionName,
        gradeName: this.addChangeForm.gradeName,
        className: this.addChangeForm.className,
        section: this.addChangeForm.level,
        grade: this.addChangeForm.grade,
        class: this.addChangeForm.class,
        oldClassName: this.oldClassName
      };
      console.log(params);
      that.$http
        .put(Url + "/aimw/student/updateUnusualStudentInfo", params)
        .then(res => {
          console.log(res);
          var data = res.data;
          if (data.code == 0) {
            that.$message({
              type: "success",
              message: "新增异动学生成功!"
            });
            this.addChangeFlag = false;
            this.getList(1);
          } else {
            that.$message({
              type: "error",
              message: "新增异动学生失败!"
            });
          }
        });
      // // this.addChangeFlag = false
    },
    reasonChange(val) {
      console.log(val);
      let that = this;

      // addChangeForm: {
      //   reason: '',
      //   status: '', 在校
      //   study: '', 在籍
      //   level: '', 学段id
      //   grade: '', 年级id
      //   class: '', 班级id
      //   sectionName: '', 学段Name
      //   gradeName: '', 年级Name
      //   className: '' 班级Name
      // },
      if (val == 1 || val == 2 || val == 3 || val == 8 || val == 9) {
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
        this.addChangeForm.reason = val;
        this.addChangeForm.status = 1;
        this.statusFlag = true;
        this.addChangeForm.study = 1;
        this.studyFlag = true;
        this.enterClassFlag = true;
      }
      if (val == 5) {
        this.addChangeForm.reason = val;
        this.addChangeForm.status = 0;
        this.statusFlag = false;
        this.addChangeForm.study = 1;
        this.studyFlag = true;
        this.addChangeForm.level = "";
        this.addChangeForm.grade = "";
        this.addChangeForm.class = "";
        this.addChangeForm.sectionName = "";
        this.addChangeForm.gradeName = "";
        this.addChangeForm.className = "";
        this.enterClassFlag = false;
      }
      if (val == 4 || val == 6 || val == 7) {
        this.addChangeForm.reason = val;
        this.addChangeForm.status = 0;
        this.statusFlag = false;
        this.addChangeForm.study = 0;
        this.studyFlag = false;
        this.addChangeForm.level = "";
        this.addChangeForm.grade = "";
        this.addChangeForm.class = "";
        this.addChangeForm.sectionName = "";
        this.addChangeForm.gradeName = "";
        this.addChangeForm.className = "";
        this.enterClassFlag = false;
      }
    },
    statusChange(val) {
      let that = this;
      if (val == 1) {
        this.enterClassFlag = true;
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
      if (val == 0) {
        this.addChangeForm.level = "";
        this.addChangeForm.grade = "";
        this.addChangeForm.class = "";
        this.addChangeForm.sectionName = "";
        this.addChangeForm.gradeName = "";
        this.addChangeForm.className = "";
        this.enterClassFlag = false;
      }
    },
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
      console.log(this.classList);
      this.addChangeForm.class = val;
      for (let i in this.classList) {
        if (this.classList[i].Pid == val) {
          this.addChangeForm.className = this.classList[i].Name;
        }
      }
    },
    choseLevel(value) {
      console.log(value);
      this.addChangeForm.level = value;
      this.gradeList = [];
      this.classList = [];
      this.addChangeForm.grade = "";
      this.addChangeForm.class = "";
      this.levelList.map(e => {
        if (value == e.Pid) {
          this.gradeList = e.list;
          this.addChangeForm.sectionName = e.Name;
          return false;
        }
      });
      console.log(this.gradeList);
      let gradeNum = this.gradeList[0].Pid;
      this.choseGrade(gradeNum);
    },
    choseGrade(value) {
      console.log(value);
      this.addChangeForm.grade = value;
      this.classList = [];
      this.addChangeForm.class = "";
      this.gradeList.map(e => {
        if (value == e.Pid) {
          this.classList = e.list;
          this.addChangeForm.gradeName = e.Name;
          return false;
        }
      });
      console.log(this.classList);
      if (this.classList) {
        this.addChangeForm.class = this.classList[0].Pid;
        this.addChangeForm.className = this.classList[0].Name;
      } else {
        this.addChangeForm.class = "";
      }
    },
    threeChange() {
      let that = this;
      this.addSearFlag = false;
      this.addChangeFlag = true;
      this.studyList = [];
      this.changeSear = "";
      this.statusFlag = true
      this.studyFlag = true
      this.enterClassFlag = true
      this.addChangeForm.reason = 1;
      this.addChangeForm.status = 1;
      this.addChangeForm.study = 1;
      this.treeData = [];
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
    },
    resonTab(data) {
      let that = this;
      console.log(data);
      if (data.id == 0) {
        if (data.check == true) {
          that.resonList.map(val => {
            val.check = false;
          });
        } else {
          that.resonList.map(val => {
            val.check = true;
          });
        }
      } else {
        that.resonList.map(val => {
          if (val.id == data.id) {
            val.check = !val.check;
          }
        });
      }
      console.log(that.resonList);
      that.$nextTick(() => {
        var newArr = [];
        var newArr1 = [];
        for (let i in that.resonList) {
          if (that.resonList[i].check == false && that.resonList[i].id != 0) {
            newArr.push(that.resonList[i].id);
          }
        }
        console.log(newArr);
        if (newArr.length > 0) {
          that.resonList[0].check = false;
        } else {
          that.resonList[0].check = true;
        }
        for (let i in that.resonList) {
          if (that.resonList[i].check == true) {
            newArr1.push(that.resonList[i].id);
          }
        }
        this.formSearch.unusualInfo = newArr1.join(",");
        console.log(this.formSearch);
      });
    },
    timeTab(data) {
      this.formSearch.time = [];
      this.timeAct = data;
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
      console.log(this.checkList);
      this.download();
    },
    download() {
      // list为要下载的数据，如果不是可以先进行数据处理
      // import('引入Export2Excel路径')
      import("@/excel/Export2Excel").then(excel => {
        const tHeader = [
          "学生姓名",
          "账号",
          "学籍号",
          "异动原因",
          "异动时间",
          "原班级",
          "现班级"
        ];
        const filterVal = [
          "name",
          "passport",
          "passport",
          "unusualInfos",
          "date",
          "oldClassName",
          "className"
        ];
        const content = this.checkList;
        console.log("formatJson");
        console.log(filterVal);
        console.log(content);
        for (let i in content) {
          if (content[i].warning == 1) {
            content[i].warning = "在籍";
          } else {
            content[i].warning = "不在籍";
          }
        }
        const data = this.formatJson(filterVal, content);
        excel.export_json_to_excel(tHeader, data, "异动学生名单");
        setTimeout(() => {
          this.toggleSelection();
        }, 100);
      });
    },
    formatJson(filterVal, jsonData) {
      console.log("formatJson");
      console.log(filterVal);
      console.log(jsonData);
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    toggleSelection() {
      this.$refs.multipleTablea.clearSelection();
    },
    // 批量删除
    someDelete(txt) {
      this.$message({
        type: "warning",
        message: "没有选择要删除的数据!"
      });
      this.$confirm(
        '<div class="confirm_box"><p>确定要删除' +
          txt +
          '数据？</p><p class="con_p2">删除后不可恢复</p></div>',
        "提示",
        {
          dangerouslyUseHTMLString: true,
          cancelButtonText: "取消",
          confirmButtonText: "确定"
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      // this.$notify({
      //   title: '自定义位置',
      //   message: '右上角弹出的消息'
      // });
      console.log("批量删除");
    },
    tabChange(type) {
      this.tabActive = type;
    },
    sortChange(e) {
      console.log(e);
    },
    handleSizeChange(val) {
      this.limit = val;
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
    resetForm(formName) {
      console.log(this.$refs[formName].resetFields());
      this.$refs[formName].resetFields();
      this.resonList.map(val => {
        val.check = true;
      });
      this.formSearch.unusualInfo = "1,2,3,4,5,6,7,8,9";
      this.getList(this.currentPage);
    },
    libraryHome(e) {
      this.$router.push({ name: "login" });
    },
    getList(page) {
      console.log(page);
      let star = "";
      let end = "";
      if (this.formSearch.time != "" && this.formSearch.time) {
        if (this.timeAct == 1) {
          star = this.formSearch.time[0];
          end = this.formSearch.time[1];
        } else {
          star = this.formTimes(this.formSearch.time[0]);
          end = this.formTimes(this.formSearch.time[1]);
        }
      }
      console.log(star);
      let that = this;
      console.log(that.formSearch.unusualInfo.split(","));
      var shaList = that.formSearch.unusualInfo.split(",");
      if (shaList[0] == 0) {
        shaList.splice(0, 1);
      }
      that.currentPage = page;
      console.log(shaList);
      var param = {
        currentPage: page,
        pageSize: that.limit,
        unusualInfo: shaList,
        searchData: that.formSearch.name,
        dateStart: star.replace(/-/g, ""),
        dateEnd: end.replace(/-/g, "")
      };
      console.log(param);
      that.$http
        .get(Url + "/aimw/student/listUnusualStudentsInfo", {
          params: param
        })
        .then(res => {
          let data = res.data.data;
          if (res.data.code == 0) {
            if (data) {
              for (let i in data.results) {
                let unusualstr = [];
                let unusualArr = data.results[i].unusualInfo;
                for (let k in unusualArr) {
                  for (let j in that.resonList) {
                    if (unusualArr[k] == that.resonList[j].id) {
                      unusualstr.push(that.resonList[j].name);
                    }
                  }
                }
                data.results[i].unusualInfos = unusualstr.join(",");
              }
              that.tableData = data.results;
              console.log(data);
              that.total = data.count;
              that.pageNum = Math.ceil(data.count / that.limit);
            } else {
              that.tableData = [];
              that.total = 0;
              that.pageNum = 1;
            }
          } else {
            that.$message.error(res.data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
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
    }
  }
};
</script>

<style lang="less">
.change_manage_wrap {
  text-align: left;
  margin: 0 0.22rem;
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
  }
  // 头部搜索项
  .search_form_box {
    background: #ffffff;
    box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
    border-radius: 0.04rem;
    padding: 0.2rem 0.24rem;
    .search_form {
      .c_sig {
        margin-left: 0 !important;
        .el-form-item__content {
          width: 3.35rem !important;
          .el-input__inner {
            width: 100% !important;
          }
        }
      }
      .c_reson {
        margin-top: 0.12rem;
        display: flex;
        font-size: 0.16rem;
        line-height: 0.36rem;
        .c_lable {
          color: #606266;
        }
        ul {
          display: flex;
          li {
            padding: 0 0.2rem;
            cursor: pointer;
          }
          .time_act {
            color: #006cff;
          }
        }
      }
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
          width: 1.69rem;
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
              width: 1.69rem;
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
      .time_data {
        // width: 3.35rem;
        .el-form-item__content {
          // width: 100% !important;
          .el-range-editor.el-input__inner{
            width: 3.35rem;
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
  .add_class_dia {
    .el-dialog {
      width: 7.74rem;
      .el-select {
        width: 100%;
      }
      .small_class {
        width: 1.45rem;
        margin: 0 0.06rem;
      }
      .el-dialog__body {
        padding: 0.28rem 0.3rem 0.05rem 0.1rem;
        .el-form-item {
          // align-items: center;
        }
      }
      .el-dialog__footer {
        padding: 0.05rem 0 0 !important;
        width: 3.32rem !important;
      }
      .el-form-item__label {
        width: 1.2rem !important;
      }
      .el-form-item__content {
        flex: none !important;
        width: 2.27rem;
      }
      .just_nbn {
        display: flex;
        .el-form-item__content {
          flex: 1 !important;
          display: flex;
          .address-select-list {
            width: 2.27rem;
            margin-right: 0.2rem;
          }
        }
      }
      .chose_stats {
        .el-form-item__content {
          flex: 1 !important;
          display: flex;
        }
        .chose_s_ul {
          display: flex;
          flex-wrap: wrap;
          li {
            margin-top: 0.05rem;
            margin-right: 0.2rem;
            position: relative;
            color: #3984fb;
            height: 0.26rem;
            display: flex;
            align-items: center;
            padding: 0 0.34rem 0 0.13rem;
            border: 0.01rem solid;
            border-image: linear-gradient(
                90deg,
                rgba(46, 190, 255, 1),
                rgba(64, 145, 253, 1)
              )
              10 10;
            span {
              position: absolute;
              top: -0.01rem;
              right: -0.01rem;
              width: 0.26rem;
              height: 0.26rem;
              background: linear-gradient(
                90deg,
                rgba(46, 190, 255, 1),
                rgba(64, 145, 253, 1)
              );
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ffffff;
              font-size: 0.14rem;
            }
          }
        }
      }
      .change_sear {
        padding-left: 0.2rem;
        margin-bottom: 0.28rem;
        .el-input__inner {
          padding-left: 10px;
          padding-right: 30px;
          height: 0.36rem;
          line-height: 0.36rem;
        }
        .el-input__icon {
          line-height: 0.36rem;
        }
        .el-input__prefix {
          left: initial;
          right: 5px;
          .el-input__icon {
            color: #354b70;
          }
        }
      }
      .tree_box {
        margin: -0.18rem auto 0.1rem;
        margin-left: 0.2rem;
        height: 1.72rem;
        overflow: hidden;
        overflow-y: auto;
        background: #ffffff;
        border: 1px solid #dcdfe6;
        padding: 0.1rem 0.04rem;
      }
      .tree_close {
        position: absolute;
        right: 0.4rem;
        top: 1.25rem;
        z-index: 1;
        // background: #f0f0f0;
        padding: 0.04rem 0.08rem;
      }
    }
  }
}
</style>
