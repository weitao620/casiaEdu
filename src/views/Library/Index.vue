<template>
  <div class="index_wrap">
    <div class="com_title">
      <div class="com_cir">
        <img src="../../assets/images/index_top.png" alt="" />
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>主页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="index_main" v-show="power1">
      <div class="index_main_top">
        <div class="top_left">
          <div class="left_wel">
            <div class="welcome">
              <div class="w_txt1">欢迎回来！</div>
              <div class="w_txt2">AI心世界&nbsp;&nbsp;AI Mental World</div>
            </div>
            <div class="person" v-if="detail.name">
              <img
                v-if="detail.headIcon != ''"
                class="per_photo"
                :src="'data:image;base64,' + detail.headIcon"
                alt=""
              />
              <img
                class="per_photo per_photo1"
                v-if="detail.headIcon == '' && detail.gender == 1"
                src="../../assets/images/mo_man.png"
                alt=""
              />
              <img
                class="per_photo per_photo1"
                v-if="detail.headIcon == '' && detail.gender == 0"
                src="../../assets/images/mo_woman.png"
                alt=""
              />

              <div class="per_msg">
                <div class="per_msg_t">{{ detail.name }}</div>
                <div class="per_msg_b">{{ detail.roleName }}</div>
              </div>
              <div class="per_msg">
                <div class="per_msg_t">上次登陆时间</div>
                <div class="per_msg_b montserrat">
                  {{ detail.lastLoginTime }}
                </div>
              </div>
              <div class="per_center" @click="toPerson" v-if="power11">
                个人中心 →
              </div>
            </div>
          </div>
          <div class="left_survey">
            <div class="center_o_title">
              评估概况
            </div>
            <img
              src="../../assets/images/test.jpg"
              id="bg_img"
              style="display:none"
            />
            <div class="survey_box">
              <div class="sur_left">
                <div class="stxt1">本月</div>
                <div class="stxt2">
                  <span>{{ detail.monthHealthNum }}</span
                  >人为心理健康状态
                </div>
                <div class="stxt3">
                  <span
                    :class="[
                      'stxt_r',
                      { stxt_g: detail.changePerct.indexOf('-') != -1 }
                    ]"
                    >{{ detail.changePerct }}</span
                  >
                  <!-- <img src="../../assets/images/rightTop.png" alt="" /> -->
                  <i
                    class="el-icon-bottom-right stxt_g"
                    v-if="detail.changePerct.indexOf('-') != -1"
                  ></i>
                  <i class="el-icon-top-right stxt_r" v-else></i>
                  相较于上月
                </div>
                <div class="per_more" @click="toReport">了解更多 →</div>
              </div>
              <div class="sur_right" id="myChartGauge" ref="myChartGauge"></div>
            </div>
          </div>
          <div class="center_o">
            <div class="center_o_title">
              预警频次统计
              <el-tooltip
                class="item"
                effect="dark"
                content="频次：即所有学生在游戏操作中出现的报警的次数，每出现一种记为一次。"
                placement="right"
              >
                <img  class="c_o_tip c_o_tip1" src="../../assets/images/what_icon.jpg" alt="">
              </el-tooltip>
            </div>
            <div id="myChart" ref="myChart"></div>
            <div class="center_pie">
              <div class="c_pie_li">
                <span class="c_pie_th c_th0"></span>
                焦虑
              </div>
              <div class="c_pie_li">
                <span class="c_pie_th c_th1"></span>
                抑郁
              </div>
              <div class="c_pie_li">
                <span class="c_pie_th c_th2"></span>
                强迫
              </div>
            </div>
            <div class="c_o_my_txt" v-show="myTxtFlag">累计预警频次</div>
            <div class="c_o_my_num" v-show="myTxtFlag">
              {{ detail.warningStatistics.allWarningNum }}
            </div>
          </div>
        </div>
        <div class="top_right">
          <div class="right_total">
            <div class="total_t">
              <div class="total_txt">
                <div class="t_txt1">
                  {{ detail.participationNum }}<span>人</span>
                </div>
                <div class="t_txt2">参与学生</div>
              </div>
              <img src="../../assets/images/car2.png" alt="" />
            </div>
            <div class="total_o">
              <div class="total_txt">
                <div class="t_txt1">
                  {{ detail.evaluationCount }}<span>次</span>
                </div>
                <div class="t_txt2">累计评测</div>
              </div>
              <img src="../../assets/images/car1.png" alt="" />
            </div>
            <div class="total_f">
              <div class="total_txt">
                <div class="t_txt1">{{ detail.warningNum }}<span>次</span></div>
                <div class="t_txt2">风险预警</div>
              </div>
              <img src="../../assets/images/car3.png" alt="" />
            </div>
          </div>
          <div class="right_trend">
            <div class="center_o_title">
              整体趋势
            </div>
            <div class="tab_box">
              <div
                :class="['tab_btns tab_btns_l', { tab_act: tabActive == 1 }]"
                @click="tabChange(1)"
              >
                本周
              </div>
              <div
                :class="[
                  'tab_btns tab_btns_z tab_btns_c',
                  { tab_act: tabActive == 2 }
                ]"
                @click="tabChange(2)"
              >
                本月
              </div>
              <div
                :class="['tab_btns', { tab_act: tabActive == 3 }]"
                @click="tabChange(3)"
              >
                半年
              </div>
            </div>
            <div class="myChartLine" id="myChartLine" ref="myChartLine"></div>
            <div class="center_pie">
              <div class="c_pie_li">
                <span class="c_pie_th c_th0"></span>
                测评人数
              </div>
              <div class="c_pie_li">
                <span class="c_pie_th c_th1"></span>
                预警人数
              </div>
            </div>
          </div>
          <div class="right_tow">
            <div class="center_t" style="flex:1">
              <div class="center_o_title">
                预警类型分布
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="百分比计算方式：出现某项预警类型的人数/学生总人数=结果"
                  placement="right"
                >
                  <img  class="c_o_tip c_o_tip1" src="../../assets/images/what_icon.jpg" alt="">
                </el-tooltip>
              </div>
              <div id="myChartPie" ref="myChartPie"></div>
              <!-- 不确定返回的是带百分号还是不带百分号的值，缺失 -->
              <div class="center_pie">
                <div class="c_pie_li">
                  <span class="c_pie_th c_th0"></span>
                  焦虑
                  <span class="c_pie_td clo0">{{
                    parseInt(detail.warningStatistics.anxietyPerct * 100) + "%"
                  }}</span>
                </div>
                <div class="c_pie_li">
                  <span class="c_pie_th c_th1"></span>
                  抑郁
                  <span class="c_pie_td clo1">{{
                    parseInt(detail.warningStatistics.depressionPerct * 100) +
                      "%"
                  }}</span>
                </div>
                <div class="c_pie_li">
                  <span class="c_pie_th c_th2"></span>
                  强迫
                  <span class="c_pie_td clo2">{{
                    parseInt(detail.warningStatistics.forcePerct * 100) + "%"
                  }}</span>
                </div>
              </div>
            </div>
            <div class="center_f" style="flex:1">
              <div class="center_o_title">
                预警指标分析
              </div>
              <div id="myChartZero" ref="myChartZero"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="index_main_center"></div>
      <div class="index_main_bottom">
        <div class="bottom_o">
          <div class="center_o_title">
            最新评估
          </div>
          <div class="b_o_tab">
            <div class="tab_box">
              <div
                :class="['tab_btns tab_btns_l', { tab_act: tabFlag == 0 }]"
                @click="tabFalgChange(0)"
              >
                学生
              </div>
              <div
                :class="['tab_btns', { tab_act: tabFlag == 1 }]"
                @click="tabFalgChange(1)"
              >
                游客
              </div>
            </div>
            <div class="b_o_more" v-if="power6" @click="toReport">
              查看更多&gt;
            </div>
          </div>
          <template>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="photo" v-if="tabFlag == 0" label="头像">
                <template slot-scope="scope">
                  <div class="sex_li_head" v-if="scope.row.headIcon == ''">
                    <img
                      style="width:0.48rem;height:0.48rem"
                      v-if="scope.row.gender == 1"
                      src="../../assets/images/mo_man.png"
                      alt=""
                    />
                    <img v-else style="width:0.48rem;height:0.48rem" src="../../assets/images/mo_woman.png" alt="" />
                  </div>
                  <div class="sex_li_head" v-else>
                    <img
                      style="width:0.48rem;height:0.48rem;border-radius:50%;overflow: hidden;"
                      :src="'data:image;base64,' + scope.row.headIcon"
                      alt=""
                    />
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                v-else
                prop="passport"
                label="ID"
              ></el-table-column>
              <el-table-column prop="name" v-if="tabFlag == 0" label="姓名">
              </el-table-column>
              <el-table-column prop="name" v-else label="昵称">
              </el-table-column>
              <el-table-column prop="gender" label="性别">
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
              <el-table-column
                prop="passport"
                v-if="tabFlag == 0"
                label="学籍号"
              >
              </el-table-column>
              <el-table-column
                prop="evaluationTime"
                v-if="tabFlag == 0"
                label="次数"
              >
              </el-table-column>
              <el-table-column
                prop="date"
                v-if="tabFlag == 0"
                sortable
                label="日期"
              >
              </el-table-column>
              <el-table-column prop="date" v-else sortable label="测评时间">
              </el-table-column>
              <el-table-column prop="warning" label="评估结果">
                <template slot-scope="scope">
                  <div class="primary_r" v-if="scope.row.warning == 1">
                    <el-button type="danger" plain size="small"
                      >需关注</el-button
                    >
                  </div>
                  <div class="primary_g" v-else>
                    <el-button type="primary" plain size="small"
                      >正常</el-button
                    >
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <span v-if="tabFlag == 0 && !power2">暂无权限</span>
                  <el-button
                    @click="toDetail(scope.row)"
                    v-if="tabFlag == 0 && power2"
                    type="text"
                    size="small"
                    >查看</el-button
                  >
                  <span v-if="tabFlag == 1 && !power3">暂无权限</span>
                  <el-button
                    @click="toDetail(scope.row)"
                    v-if="tabFlag == 1 && power3"
                    type="text"
                    size="small"
                    >查看</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
      </div>
    </div>
    <div class="power_no_wrap" v-show="!power1">
      <div class="power_no_center">
        <img src="../../assets/images/nothing.png" alt="" />
        <p>请联系管理员开放权限</p>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "../../assets/js/echarts";
import Url from "@/assets/js/url.js";
import { mapGetters } from "vuex";
const colors = ["rgb(196, 200, 255)", "rgb(0, 117, 255)", "rgb(252, 79, 176)"];
const itemStyle1 = {
  opacity: 0.8,
  shadowBlur: 10,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "rgba(0, 0, 0, 0.1)",
  borderColor: "rgba(0, 194, 255,0.4)",
  borderWidth: "1",
  color: "rgba(0, 194, 255, 0.2)"
};
const itemStyle2 = {
  opacity: 0.8,
  shadowBlur: 10,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "rgba(0, 0, 0, 0.1)",
  borderColor: "rgba(253, 103, 202, 0.36)",
  borderWidth: "1",
  color: "rgba(253, 103, 202, 0.26)"
};
const transColor = [
  {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#FC4FB0"
      },
      {
        offset: 1,
        color: "#FF9CE5"
      }
    ])
  },
  {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#C4C8FF"
      },
      {
        offset: 1,
        color: "#7279FF"
      }
    ])
  },
  {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#00C2FF"
      },
      {
        offset: 1,
        color: "#0075FF"
      }
    ])
  }
];
var value = 0; // 值，0~1之间
var startAngle = 200; // 开始角度
var endAngle = -20; // 结束角度
var splitCount = 40; // 刻度数量
var pointerAngle = (startAngle - endAngle) * (1 - value) + endAngle; // 当前指针（值）角度
export default {
  name: "index",
  data() {
    return {
      power1: false,
      power11: false,
      power2: false,
      power3: false,
      power4: false,
      power5: false,
      power6: false,
      days: 7,
      listT1: [],
      listT2: [],
      listT3: [],
      detail: {
        changePerct: "",
        evaluationCount: "",
        headIcon: "",
        lastLoginTime: "",
        monthHealthNum: "",
        name: "",
        gender: "1",
        participationNum: "",
        roleName: "",
        warningFemale: "",
        warningMale: [],
        warningNum: "",
        warningStatistics: {
          allWarningNum: "",
          anxietyNum: "",
          anxietyPerct: "",
          depressionNum: "",
          depressionPerct: "",
          forceNum: "",
          forcePerct: ""
        }
      },
      myTxtFlag: false,
      tabFlag: 0,
      tabActive: 1,
      myChartZero: "",
      myChartPie: "",
      myChart: "",
      tableData: []
    };
  },
  created() {
    // aaa
  },
  mounted() {
    let that = this;
    this.auth()
    console.log(Url)
  },
  methods: {
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
            that.powerData();
            if (this.power1) {
              if (this.power4 || this.power5) {
                this.power6 = true;
              } else {
                this.power6 = false;
              }
              that.tabChange(1);
              that.tabFalgChange(0);

              this.$http
                .get(Url + "/aimw/index", {
                  params: {
                    passport: JSON.parse(localStorage.getItem("userInfo")).passport,
                    userAuth: localStorage.getItem("userAuth")
                  }
                })
                .then(res => {
                  console.log(res.data.data);
                  if (res.data.code == 0) {
                    that.detail = res.data.data;
                    let male = that.detail.warningMale;
                    let maleArr = [];
                    for (let i in male) {
                      let age = male[i].age;
                      let num = male[i].num;
                      let arro = [age, num, num];
                      maleArr.push(arro);
                    }
                    that.detail.warningMale = maleArr;
                    let female = that.detail.warningFemale;
                    let femaleArr = [];
                    for (let i in female) {
                      let age = female[i].age;
                      let num = female[i].num;
                      let arro = [age, num, num];
                      femaleArr.push(arro);
                    }
                    that.detail.warningFemale = femaleArr;
                    that.detail.changePerct = Math.round(that.detail.changePerct * 10000) / 100 + "%";
                    value = Number(that.detail.monthHealthPerct.toFixed(2));
                    pointerAngle = (startAngle - endAngle) * (1 - value) + endAngle;
                    this.getUserInfo();
                    this.draw();
                    setTimeout(() => {
                      this.myTxtFlag = true;
                    }, 500);
                  }
                })
                .catch(res => {
                  // localStorage.removeItem("isLogin");
                  // localStorage.removeItem("userInfo");
                  // localStorage.removeItem("userAuth");
                  // localStorage.removeItem("passport");
                  // localStorage.removeItem("userType");
                  // this.$router.replace({
                  //   path: "/login"
                  // });
                });
              window.addEventListener("resize", () => {
                setTimeout(() => {
                  this.myTxtFlag = false;
                  setTimeout(() => {
                    this.myTxtFlag = true;
                  }, 500);
                  this.myChart.resize();
                  this.myChartPie.resize();
                  this.myChartZero.resize();
                  this.myChartGauge.resize();
                  this.myChartLine.resize();
                }, 100);
              });
            }
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    // 获取个人中心信息
    getUserInfo() {
      let that = this;
      that.$http
        .get(Url + "/aimw/user/getUserProfile", {
          params: {
            passport: JSON.parse(localStorage.getItem("userInfo")).passport
          }
        })
        .then(res => {
          console.log(res);
          var data = res.data;
          if (data.code == 0) {
            that.detail.gender = data.data.gender;
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    powerData() {
      let power = JSON.parse(localStorage.getItem("userAuth")).menuAuthID;
      console.log(power);
      this.power1 = power.includes(10100); // 系统主页
      if (!power.includes(10200)) {
        // 个人中心
        this.power11 = false;
      } else {
        this.power11 = true;
      }
      this.power2 = power.includes(10101); // 学生查看
      this.power3 = power.includes(10102); // 游客查看
      this.power4 = power.includes(20100); // 学生
      this.power5 = power.includes(20200); // 游客
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
      console.log(data);
      this.isService(data);
    },
    handleClick() {
      this.$message({
        type: "warning",
        message: "暂未开发"
      });
    },
    toPerson() {
      this.$router.push({
        name: "person"
      });
    },
    toReport() {
      this.$router.push("/library/report");
    },
    tabFalgChange(type) {
      let that = this;
      this.tabFlag = type;
      console.log(type);
      this.$http
        .get(Url + "/aimw/index/listLatestReports", {
          params: {
            passport: JSON.parse(localStorage.getItem("userInfo")).passport,
            userType: type,
            userAuth: localStorage.getItem("userAuth")
          }
        })
        .then(res => {
          let data = res.data.data;
          that.tableData = data;
          this.$http
            .get(Url + "/aimw/index/listLatestReportsUserIcon", {
              params: {
                passport: JSON.parse(localStorage.getItem("userInfo")).passport,
                userType: type,
                userAuth: localStorage.getItem("userAuth")
              }
            })
            .then(res1 => {
              let data1 = res1.data.data;
              for (let i in data1) {
                for (let j in that.tableData) {
                  if (data1[i].passport == that.tableData[j].passport) {
                    that.tableData[j].headIcon = data1[i].headIcon
                  }
                }
              }
              // that.tableData = data;
              console.log(that.tableData);
              console.log(data1);
            });
          console.log(data);
        });
    },
    tabChange(type) {
      var that = this;
      that.tabActive = type;
      console.log(that.tabActive);
      if (type == 1) {
        that.days = 7;
      } else if (type == 2) {
        that.days = 30;
      } else if (type == 3) {
        that.days = 180;
      }
      this.$http
        .get(Url + "/aimw/index/trend", {
          params: {
            days: that.days,
            userAuth: localStorage.getItem("userAuth")
          }
        })
        .then(res => {
          let list = res.data.data.reverse();
          console.log(list);
          let listA1 = [];
          let listA2 = [];
          let listA3 = [];
          for (let i in list) {
            listA1.push(list[i].date.split(" ")[0]);
            listA2.push(list[i].evaluateNum);
            listA3.push(list[i].warningNUM);
          }
          that.listT1 = listA1;
          that.listT2 = listA2;
          that.listT3 = listA3;
          this.draw1();
        });
    },
    draw1() {
      let that = this;
      var datax = that.listT1;
      var datas1 = that.listT2;
      var datas2 = that.listT3;

      // 实例化echarts对象
      this.myChartLine = echarts.init(this.$refs.myChartLine);
      // 绘制条形图
      this.myChartLine.setOption({
        color: ["#0075FF", "#FD67CA"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line"
            // lineStyle: {
            //   color: "#fff",
            //   width: 0,
            //   type: "solid"
            // }
          },
          backgroundColor: "#fff",
          textStyle: {
            color: "#5B6C89"
          },
          extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
          formatter: function(obj) {
            // var value = obj.value;
            // console.log(obj);
            return (
              '<div style="border-bottom: 1px solid rgba(255,255,255,.3);font-weight: 600; font-size: 14px;padding-bottom: 0px;margin-bottom: 7px">' +
              obj[0].name +
              "</div>" +
              '<span style="display:inline-block;width:0.08rem;height:0.08rem;background: linear-gradient(0deg, #0075FF 0%, #00C2FF 100%);border-radius: 50%;margin-right:0.04rem"></span>' +
              "测评人数" +
              "：<span style='color:#006CFF'>" +
              obj[0].value +
              "</span><br>" +
              '<span style="display:inline-block;width:0.08rem;height:0.08rem;background: linear-gradient(-90deg, #FE5FB8, #FF83DF);border-radius: 50%;margin-right:0.04rem"></span>' +
              "预警人数" +
              "：<span style='color:#FE5FB8'>" +
              obj[1].value +
              "</span>"
            );
          }
        },
        grid: {
          left: "20",
          top: "40",
          right: "34",
          bottom: "0%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#7786AC",
            showMaxLabel: true
          },
          data: datax
        },
        yAxis: {
          type: "value",
          // max: Number(that.detail.evaluationCount),
          // min: 5,
          // splitNumber: Math.ceil(Number(that.detail.evaluationCount) / 10),
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: "#DEE7FF"
            }
          },
          axisLabel: {
            color: "#7786AC"
          },
          axisTick: {
            show: false
          },
          minInterval: 1
        },
        series: [
          {
            name: "测评人数",
            type: "line",
            smooth: true,
            itemStyle: {
              color: "#0075FF"
            },
            lineStyle: {
              color: "#0075FF"
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0.5,
                    color: "rgba(124, 192, 255, 1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(83, 184, 255, 0)"
                  }
                ])
              }
            },
            data: datas1
          },
          {
            name: "预警人数",
            type: "line",
            smooth: true,
            itemStyle: {
              color: "#FD67CA"
            },
            lineStyle: {
              color: "#FD67CA"
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0.5,
                    color: "rgba(253, 103, 202, 0.26)"
                  },
                  {
                    offset: 1,
                    color: "rgba(233, 232, 232, 0)"
                  }
                ])
              }
            },
            data: datas2
          }
        ]
      });
    },
    draw() {
      let that = this;
      // 实例化echarts对象
      this.myChartGauge = echarts.init(this.$refs.myChartGauge);
      // 绘制条形图
      this.myChartGauge.setOption({
        series: [
          {
            type: "gauge",
            radius: "90%",
            startAngle: pointerAngle,
            endAngle: endAngle,
            splitNumber: 1,
            axisLine: {
              show: false,
              lineStyle: {
                width: 3,
                opacity: 0
              }
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 6,
              itemStyle: {
                borderColor: "transparent",
                borderWidth: 3
              }
            },
            title: { show: false },
            detail: {
              show: true,
              valueAnimation: true,
              fontSize: 24,
              color: "#006CFF",
              offsetCenter: [0, "30%"],
              formatter: function(value) {
                return Math.round(value.toFixed(4) * 10000) / 100 + "%";
              }
            },
            splitLine: { show: false },
            axisTick: {
              length: 16,
              splitNumber: Math.ceil((1 - value) * splitCount),
              lineStyle: {
                color: "#E6EDFF",
                width: 1.5
              }
            },
            axisLabel: { show: false },
            pointer: { show: true },
            itemStyle: {},
            data: [
              {
                value: value,
                name: "评估",
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#4BC8FF" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#1661FF" // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            ]
          },
          {
            type: "gauge",
            radius: "90%",
            startAngle: startAngle,
            endAngle: pointerAngle,
            splitNumber: 1,
            axisLine: {
              show: false,
              lineStyle: {
                width: 1.5,
                opacity: 0
              }
            },
            title: { show: false },
            detail: { show: false },
            splitLine: { show: false },
            axisTick: {
              length: 16,
              splitNumber: Math.ceil(value * splitCount),
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#4BC8FF"
                    },
                    {
                      offset: 1,
                      color: "#1661FF"
                    }
                  ],
                  globalCoord: false
                },
                width: 1.5
              }
            },
            axisLabel: { show: false },
            pointer: { show: false },
            itemStyle: {},
            data: [
              {
                value: value,
                name: "评估"
              }
            ]
          },
          {
            type: "gauge",
            radius: "96%",
            startAngle: pointerAngle,
            endAngle: pointerAngle,
            splitNumber: 1,
            axisLine: {
              show: false,
              lineStyle: {
                width: 1.5,
                opacity: 0
              }
            },
            title: { show: false },
            detail: { show: false },
            splitLine: { show: false },
            axisTick: {
              length: 22,
              splitNumber: 1,
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#4BC8FF"
                    },
                    {
                      offset: 1,
                      color: "#1661FF"
                    }
                  ],
                  globalCoord: false
                },
                width: 1.5
              }
            },
            axisLabel: { show: false },
            pointer: { show: false },
            itemStyle: {},
            data: [
              {
                value: value,
                name: "评估"
              }
            ]
          }
        ]
      });

      // 实例化echarts对象
      this.myChart = echarts.init(this.$refs.myChart);

      // 绘制条形图
      this.myChart.setOption({
        // title: {
        //   text: "893",
        //   left: "center",
        //   top: "52%",
        //   textStyle: {
        //     color: "#006CFF",
        //     fontSize: 20,
        //     align: "center",
        //     fontWeight: 400
        //   }
        // },
        // graphic: {
        //   type: "text",
        //   left: "center",
        //   top: "42%",
        //   style: {
        //     text: "11",
        //     textAlign: "center",
        //     fill: "#5B6C89",
        //     fontSize: 18,
        //     fontWeight: 400,
        //     color: "#fff"
        //   }
        // },
        tooltip: {
          trigger: "item",
          axisPointer: {
            type: "shadow",
            shadowStyle: {
              // 阴影指示器样式设置
              width: "35px", // 阴影大小
              color: "rgba(72, 117, 174, 0.25)" // 阴影颜色
            }
          },
          backgroundColor: "#ffffff",
          borderWidth: 0,
          textStyle: {
            color: "#5B6C89"
          },
          // extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
          formatter: function(params) {
            // console.log("eeessss");
            // console.log(params);
            var result =
              '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background: linear-gradient(174deg, ' +
              params.color.colorStops[0].color +
              "," +
              params.color.colorStops[1].color +
              '");></span>' +
              '<span style="color:#7786AC">' +
              params.name +
              "</span>" +
              ':<span style="display:inline-block;font-weight:blod;margin-left:5px;font-size:14px;color:' +
              params.color.colorStops[1].color +
              '">' +
              params.value +
              "</span>";
            return result;
          }
        },
        // legend: {
        //   left: "center",
        //   bottom: "0",
        //   icon: "circle",
        //   itemWidth: 8,
        //   itemHeight: 8,
        //   itemGap: 40,
        //   textStyle: {
        //     fontSize: 14,
        //     color: "#354B70"
        //   },
        //   data: ["焦虑", "抑郁", "强迫"]
        // },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "14"
                },
                color: "#5B6C89",
                formatter: "累计预警频次\n{hr|{c}次}",
                rich: {
                  hr: {
                    color: "#51A7FF",
                    padding: [0, 0, 6, 0]
                  }
                }
              }
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: that.detail.warningStatistics.anxietyNum,
                name: "焦虑",
                itemStyle: {
                  normal: transColor[2]
                }
              },
              {
                value: that.detail.warningStatistics.depressionNum,
                name: "抑郁",
                itemStyle: {
                  normal: transColor[0]
                }
              },
              {
                value: that.detail.warningStatistics.forceNum,
                name: "强迫",
                itemStyle: {
                  normal: transColor[1]
                }
              }
            ]
          }
        ]
      });

      // 实例化echarts对象
      this.myChartPie = echarts.init(this.$refs.myChartPie);
      // 绘制条形图
      this.myChartPie.setOption({
        tooltip: {
          padding: 10,
          axisPointer: {
            type: "shadow"
          },
          backgroundColor: "#fff",
          textStyle: {
            color: "#5B6C89"
          },
          extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);",
          formatter: function(obj) {
            var value = obj.value;
            return (
              '<div style="border-bottom: 1px solid rgba(255,255,255,.3);font-weight: 600; font-size: 14px;padding-bottom: 0px;margin-bottom: 7px">' +
              obj.seriesName +
              "</div>" +
              '<span style="display:inline-block;width:0.08rem;height:0.08rem;background: linear-gradient(0deg, #0075FF 0%, #00C2FF 100%);border-radius: 50%;margin-right:0.04rem"></span>' +
              "焦虑" +
              "：<span style='color:#006CFF'>" +
              (parseInt(value[0] * 100) + "%") +
              "</span><br>" +
              '<span style="display:inline-block;width:0.08rem;height:0.08rem;background: linear-gradient(-90deg, #FE5FB8, #FF83DF);border-radius: 50%;margin-right:0.04rem"></span>' +
              "抑郁" +
              "：<span style='color:#FE5FB8'>" +
              (parseInt(value[1] * 100) + "%") +
              "</span><br>" +
              '<span style="display:inline-block;width:0.08rem;height:0.08rem;background: linear-gradient(90deg, #C4C8FF, #7279FF);border-radius: 50%;margin-right:0.04rem"></span>' +
              "强迫" +
              "：<span style='color:#676EFF'>" +
              (parseInt(value[2] * 100) + "%") +
              "</span><br>"
            );
          }
        },
        radar: [
          {
            indicator: [
              { name: "焦虑", max: 1 },
              { name: "抑郁", max: 1 },
              { name: "强迫", max: 1 }
            ],
            center: ["50%", "50%"],
            radius: "65%",
            startAngle: 210,
            splitNumber: 5,
            shape: "circle",
            name: {
              formatter: "{value}",
              textStyle: {
                color: "#72ACD1"
              }
            },
            splitArea: {
              areaStyle: {
                color: ["#fff"]
              }
            },
            axisLine: {
              lineStyle: {
                color: "#DEE7FF"
              }
            },
            splitLine: {
              lineStyle: {
                color: "#DEE7FF"
              }
            }
          }
        ],
        legend: {
          left: "center",
          bottom: "0",
          icon: "circle",
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 40,
          textStyle: {
            color: "#354B70"
          },
          data: ["焦虑", "抑郁", "强迫"]
        },
        series: [
          {
            name: "预警类型分布",
            type: "radar",
            color: ["rgba(0,117,255,0.1)"],
            emphasis: {
              lineStyle: {
                width: 2,
                color: "rgba(0, 117, 255, 0.6)"
              }
            },
            data: [
              {
                value: [
                  that.detail.warningStatistics.anxietyPerct,
                  that.detail.warningStatistics.depressionPerct,
                  that.detail.warningStatistics.forcePerct
                  // 1,
                  // 0.5,
                  // 0.8
                ],
                name: "分析",
                symbol: "circle",
                symbolSize: 3,
                itemStyle: {
                  normal: {
                    borderColor: "#4BC8FF",
                    borderWidth: 1
                  }
                },
                // label: {
                //   show: true,
                //   formatter: function(params) {
                //     return parseInt((params.value * 100) / 10) + "%";
                //   }
                // },
                areaStyle: {
                  opacity: 0.6,
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#4BC8FF"
                      },
                      {
                        offset: 1,
                        color: "#1661FF"
                      }
                    ],
                    globalCoord: false
                  }
                },
                lineStyle: {
                  width: 3
                }
              }
            ]
          }
        ]
      });

      // 实例化echarts对象
      this.myChartZero = echarts.init(this.$refs.myChartZero);
      var intervals = Math.ceil(that.detail.evaluationCount);
      console.log(that.detail.evaluationCount);
      console.log(intervals);
      // 绘制条形图
      this.myChartZero.setOption({
        color: ["#dd4444", "#fec42c", "#80F1BE"],
        legend: {
          top: 0,
          data: ["男生", "女生"],
          textStyle: {
            color: "#354B70",
            fontSize: 16
          },
          left: "center",
          icon: "circle",
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 40
        },
        grid: {
          left: "10%",
          right: 12,
          top: "18%",
          bottom: "22"
        },
        tooltip: {
          padding: 0,
          axisPointer: {
            type: "shadow"
          },
          backgroundColor: "#fff",
          textStyle: {
            color: "#5B6C89"
          },
          extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
          formatter: function(obj) {
            var value = obj.value;
            return (
              '<div style="padding:0.1rem 0.14rem;">' +
              '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
              obj.seriesName +
              "</div>" +
              "年龄" +
              "：" +
              value[0] +
              "<br>" +
              "人数" +
              "：" +
              value[1] +
              "<br>" +
              "</div>"
            );
          }
        },
        xAxis: {
          type: "value",
          name: "年龄",
          nameGap: 16,
          // max: 31,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: ["rgba(119, 134, 172, 1)"]
          }
        },
        yAxis: {
          type: "value",
          nameLocation: "end",
          // min: 0,
          // interval: 20,
          // max: intervals,
          nameGap: 20,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(222, 231, 255, 1)"
            }
          },
          axisLabel: {
            color: ["rgba(119, 134, 172, 1)"]
          }
        },
        visualMap: [
          {
            left: "right",
            top: "10%",
            dimension: 2,
            min: 0,
            max: 850,
            itemWidth: 30,
            itemHeight: 120,
            precision: 0.1,
            textGap: 30,
            textStyle: {
              color: "#fff"
            },
            inRange: {
              symbolSize: [10, 70]
            },
            outOfRange: {
              symbolSize: [10, 70],
              color: ["rgba(255,255,255,.2)"]
            },
            controller: {
              inRange: {
                color: ["tan"]
              },
              outOfRange: {
                color: ["#444"]
              }
            },
            show: false
          }
        ],
        series: [
          {
            name: "男生",
            type: "scatter",
            itemStyle: itemStyle1,
            data: that.detail.warningMale
          },
          {
            name: "女生",
            type: "scatter",
            itemStyle: itemStyle2,
            data: that.detail.warningFemale
          }
        ]
      });
    },
    libraryHome(e) {
      this.$router.push({ name: "login" });
    }
  },
  computed: {
    ...mapGetters(["getCollapseFlag", "getUserName"])
  },
  watch: {
    getCollapseFlag: function(oldVal, newVal) {
      console.log(oldVal);
      console.log(newVal);
      // setTimeout(() => {
      this.myChart.resize();
      this.myChartPie.resize();
      this.myChartZero.resize();
      this.myChartGauge.resize();
      this.myChartLine.resize();
      // }, 0);
    }
  }
};
</script>

<style lang="less">
.index_wrap {
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
  }
  #myChart,
  #myChartPie,
  #myChartZero {
    width: 100%;
    height: 2.54rem;
  }
  .index_main {
    .index_main_top {
      display: flex;
      .top_left {
        flex: 1;
        // width: 5.1rem;
        .center_o,
        .center_t,
        .center_f {
          flex: 1;
          // width: 5.1rem;
          height: 3.22rem;
          background: #ffffff;
          padding: 0 0.24rem 0.28rem 0.24rem;
          box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
          border-radius: 4px;
        }
        .center_o {
          margin-top: 0.2rem;
          position: relative;
          .center_pie {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            bottom: 0.28rem;
            z-index: 11;
            .c_pie_li {
              padding: 0 0.26rem;
              font-size: 0.14rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #354b70;
              display: flex;
              align-items: center;
              .c_pie_th {
                display: inline-block;
                width: 0.08rem;
                height: 0.08rem;
                margin-right: 0.04rem;
                border-radius: 50%;
              }
              .c_th0 {
                background: linear-gradient(0deg, #0075ff 0%, #00c2ff 100%);
              }
              .c_th1 {
                background: linear-gradient(-90deg, #fe5fb8, #ff83df);
              }
              .c_th2 {
                background: linear-gradient(90deg, #c4c8ff, #7279ff);
              }
              .c_pie_td {
                display: inline-block;
                font-size: 0.14rem;
                font-family: Montserrat-Regular;
                font-weight: 400;
                margin-left: 0.04rem;
              }
            }
          }
          .c_o_my_txt {
            position: absolute;
            width: 2rem;
            text-align: center;
            height: 0.28rem;
            line-height: 0.28rem;
            font-size: 0.18rem;
            margin: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
          .c_o_my_num {
            position: absolute;
            width: 2rem;
            text-align: center;
            height: 0.28rem;
            line-height: 0.28rem;
            font-size: 0.2rem;
            font-weight: 500;
            margin: auto;
            top: 0.56rem;
            color: #006cff;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }
        .center_t {
          margin: 0 0.2rem;
          width: 5.09rem;
          position: relative;
          // background: rgb(161, 110, 121);
          .center_pie {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            bottom: 0.28rem;
            z-index: 11;
            .c_pie_li {
              padding: 0 0.26rem;
              font-size: 0.14rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #354b70;
              display: flex;
              align-items: center;
              .c_pie_th {
                display: inline-block;
                width: 0.08rem;
                height: 0.08rem;
                margin-right: 0.04rem;
                border-radius: 50%;
              }
              .c_th0 {
                background: linear-gradient(0deg, #0075ff 0%, #00c2ff 100%);
              }
              .c_th1 {
                background: linear-gradient(-90deg, #fe5fb8, #ff83df);
              }
              .c_th2 {
                background: linear-gradient(90deg, #c4c8ff, #7279ff);
              }
              .c_pie_td {
                display: inline-block;
                font-size: 0.14rem;
                font-family: Montserrat-Regular;
                font-weight: 400;
                margin-left: 0.04rem;
              }
            }
          }
        }
        .center_f {
          width: 5.09rem;
          // background: rgb(52, 14, 61);
        }
        .left_wel {
          height: 2.48rem;
          // background: #f0f;
          margin-bottom: 0.2rem;
          background: #ffffff;
          box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
          border-radius: 4px;
          .welcome {
            height: 1.17rem;
            background: url("../../assets/images/welcome.png") no-repeat center;
            background-size: 100% 1.17rem;
            line-height: 1;
            padding-left: 0.24rem;
            .w_txt1 {
              font-size: 0.2rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #006cff;
              padding: 0.32rem 0 0.16rem;
            }
            .w_txt2 {
              font-size: 0.18rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(0, 108, 255, 0.8);
            }
          }
          .person {
            display: flex;
            align-items: center;
            position: relative;
            height: 1.31rem;
            padding: 0 0.1rem 0 0.16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            .per_photo {
              width: 0.94rem;
              height: 0.94rem;
              margin-right: 0.08rem;
              border-radius: 50%;
              border: 0.04rem solid #ffffff;
              box-shadow: 0 0.02rem 0.16rem 0 rgba(42, 150, 236, 0.27);
              // border-radius: 50%;
            }
            .per_photo1 {
              border: 0;
            }
            .per_msg {
              line-height: 1;
              margin-right: 0.24rem;
              .per_msg_t {
                padding-bottom: 0.3rem;
                font-size: 0.2rem;
                color: #354b70;
              }
              .per_msg_b {
                min-height: 0.18rem;
                font-size: 0.18rem;
                color: #7786ac;
              }
            }
            .per_center {
              width: 1.02rem;
              height: 0.36rem;
              background: linear-gradient(263deg, #0075ff, #00c2ff);
              box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
              border-radius: 3px;
              font-size: 0.16rem;
              color: #ffffff;
              text-align: center;
              line-height: 0.36rem;
              position: absolute;
              top: 0.24rem;
              right: 0.24rem;
            }
          }
        }
        .left_survey {
          height: 2.84rem;
          background: #ffffff;
          box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
          border-radius: 4px;
          padding: 0 0.24rem 0.28rem 0.24rem;
          .survey_box {
            display: flex;
            position: relative;
            .sur_left {
              line-height: 1;
              flex: 1;
              .stxt1 {
                margin-top: 0.36rem;
                font-size: 0.18rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #354b70;
              }
              .stxt2 {
                margin-top: 0.16rem;
                font-size: 0.16rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #7786ac;
                span {
                  font-size: 0.36rem;
                  font-family: Microsoft YaHei;
                  font-weight: bold;
                  color: #006cff;
                }
              }
              .stxt3 {
                margin-top: 0.29rem;
                font-size: 0.16rem;
                font-family: MicrosoftYaHei;
                font-weight: 400;
                color: #354b70;
                span {
                  font-size: 0.2rem;
                  font-family: Montserrat;
                  font-weight: 500;
                  color: #03e2f1;
                }
                .stxt_r {
                  color: #fe5fb8;
                }
                .stxt_g {
                  color: #03e2f1;
                }
                i.stxt_r {
                  font-size: 0.2rem;
                }
                i.stxt_g {
                  font-size: 0.2rem;
                }
                img {
                  width: 0.14rem;
                  height: 0.14rem;
                  margin: 0 0.11rem 0 0.08rem;
                }
              }
              .per_more {
                margin-top: 0.32rem;
                width: 1.02rem;
                height: 0.36rem;
                background: linear-gradient(263deg, #0075ff, #00c2ff);
                box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
                border-radius: 3px;
                font-size: 0.16rem;
                color: #ffffff;
                text-align: center;
                line-height: 0.36rem;
              }
            }
            .sur_right {
              width: 2.44rem;
              height: 2.44rem;
              position: absolute;
              right: -0.2rem;
            }
          }
        }
      }
      .top_right {
        flex: 2;
        margin-left: 0.2rem;
        .right_tow {
          display: flex;
          margin-top: 0.2rem;
          .center_o,
          .center_t,
          .center_f {
            flex: 1;
            width: 5.1rem;
            height: 3.22rem;
            background: #ffffff;
            padding: 0 0.24rem 0.28rem 0.24rem;
            box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
            border-radius: 4px;
          }
          .center_o {
            margin-top: 0.2rem;
          }
          .center_t {
            margin-right: 0.2rem;
            width: 5.09rem;
            position: relative;
            // background: rgb(161, 110, 121);
            .center_pie {
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              margin: auto;
              left: 0;
              right: 0;
              bottom: 0.28rem;
              z-index: 11;
              .c_pie_li {
                padding: 0 0.26rem;
                font-size: 0.14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #354b70;
                display: flex;
                align-items: center;
                .c_pie_th {
                  display: inline-block;
                  width: 0.08rem;
                  height: 0.08rem;
                  margin-right: 0.04rem;
                  border-radius: 50%;
                }
                .c_th0 {
                  background: linear-gradient(0deg, #0075ff 0%, #00c2ff 100%);
                }
                .c_th1 {
                  background: linear-gradient(-90deg, #fe5fb8, #ff83df);
                }
                .c_th2 {
                  background: linear-gradient(90deg, #c4c8ff, #7279ff);
                }
                .c_pie_td {
                  display: inline-block;
                  font-size: 0.14rem;
                  font-family: Montserrat-Regular;
                  font-weight: 400;
                  margin-left: 0.04rem;
                }
              }
            }
          }
          .center_f {
            width: 5.09rem;
            // background: rgb(52, 14, 61);
          }
        }
        .right_total {
          height: 1.44rem;
          // background: chocolate;
          margin-bottom: 0.2rem;
          display: flex;
          justify-content: space-between;
          .total_o,
          .total_t,
          .total_f {
            flex: 1;
            // width: 3.33rem;
            height: 100%;
            border-radius: 4px;
            font-size: 0.18rem;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img {
              margin-right: 0.34rem;
            }
            .total_txt {
              line-height: 1;
              margin-left: 0.4rem;
              .t_txt1 {
                font-size: 0.36rem;
                font-family: Montserrat;
                font-weight: bold;
                color: #ffffff;
                margin-bottom: 0.16rem;
                span {
                  font-size: 0.16rem;
                }
              }
              .t_txt2 {
                font-size: 0.18rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #ffffff;
              }
            }
          }
          .total_o {
            margin: 0 0.2rem;
            background: linear-gradient(-90deg, #fe5fb8 0%, #ff8ee2 67%);
            box-shadow: 0px 4px 10px 0px rgba(254, 96, 186, 0.39);
            img {
              width: 0.72rem;
              height: 0.52rem;
            }
          }
          .total_t {
            // margin: 0 0.2rem;
            background: linear-gradient(90deg, #4bc9ff 0%, #3270f3 100%);
            box-shadow: 0px 4px 10px 0px rgba(67, 173, 251, 0.39);
            img {
              width: 0.73rem;
              height: 0.48rem;
            }
          }
          .total_f {
            background: linear-gradient(90deg, #9da3f8 0%, #333cf2 100%);
            box-shadow: 0px 4px 10px 0px rgba(118, 158, 233, 0.36);
            img {
              width: 0.73rem;
              height: 0.48rem;
            }
          }
        }
        .right_trend {
          height: 3.88rem;
          background: #ffffff;
          box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
          border-radius: 4px;
          padding: 0 0.24rem 0.28rem 0.24rem;
          position: relative;
          .center_pie {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            top: 0.75rem;
            z-index: 11;
            .c_pie_li {
              padding: 0 0.26rem;
              font-size: 0.14rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #354b70;
              display: flex;
              align-items: center;
              .c_pie_th {
                display: inline-block;
                width: 0.08rem;
                height: 0.08rem;
                margin-right: 0.04rem;
                border-radius: 50%;
              }
              .c_th0 {
                background: linear-gradient(0deg, #0075ff 0%, #00c2ff 100%);
              }
              .c_th1 {
                background: linear-gradient(-90deg, #fe5fb8, #ff83df);
              }
              .c_th2 {
                background: linear-gradient(90deg, #c4c8ff, #7279ff);
              }
              .c_pie_td {
                display: inline-block;
                font-size: 0.14rem;
                font-family: Montserrat-Regular;
                font-weight: 400;
                margin-left: 0.04rem;
              }
            }
          }
          .myChartLine {
            width: 100%;
            height: 2.94rem;
            margin-bottom: 0.26rem;
            overflow: hidden;
          }
          .tab_box {
            display: flex;
            justify-content: flex-end;
            width: 2.04rem;
            border-radius: 0.04rem;
            float: right;
            box-shadow: 0px 2px 9px 0px rgba(0, 123, 255, 0.2);
            .tab_btns {
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 0.68rem;
              height: 0.28rem;
              font-size: 0.16rem;
              font-family: PingFang SC;
              font-weight: 400;
              color: #7786ac;
              background: rgba(236, 247, 255, 0.8);
              border-radius: 0px 0.04rem 0.04rem 0px;
            }
            .tab_btns_l {
              border-radius: 0.04rem 0px 0px 0.04rem;
            }
            .tab_btns_z {
              border-left: 0.01rem solid #87b9db;
              border-right: 0.01rem solid #87b9db;
              border-radius: 0 0 0 0;
            }
            .tab_act {
              color: #ffffff;
              background: linear-gradient(90deg, #0075ff 0%, #00c2ff 100%);
            }
          }
        }
      }
    }
    .center_o_title {
      font-size: 0.2rem;
      line-height: 1;
      padding: 0.2rem 0 0;
      color: #354b70;
      font-weight: 400;
      display: flex;
      align-items: center;
      position: relative;
      padding-left: 0.24rem;
      .c_o_tip {
        display: inline-block;
        text-align: center;
        font-size: 0.16rem;
        color: #ffffff;
        font-weight: 600;
        line-height: 0.18rem;
        margin-left: 0.07rem;
        width: 0.18rem;
        height: 0.18rem;
        border-radius: 50%;
        background: linear-gradient(
          176deg,
          rgba(0, 117, 255, 0.75),
          rgba(0, 194, 255, 0.75)
        );
      }
      .c_o_tip1 {
        background: transparent;
      }
    }
    .center_o_title::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0.22rem;
      width: 0.14rem;
      height: 0.14rem;
      background-image: url(../../assets/images/ti.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    // .index_main_center {
    //   // display: flex;
    //   // justify-content: space-between;
    //   // margin: 0.2rem 0;
    // }
    .index_main_bottom {
      margin-bottom: 0.2rem;
      .bottom_o {
        padding: 0 0.24rem 0.28rem 0.24rem;
        min-height: 4.5rem;
        background: #ffffff;
        box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
        border-radius: 4px;
        .el-table--border::after,
        .el-table--group::after,
        .el-table::before {
          height: 0;
        }
        .b_o_tab {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: Source Han Sans CN;
          font-weight: 400;
          .b_o_more {
            font-size: 0.16rem;
            color: #009aff;
          }
          .tab_box {
            margin: 0.18rem 0 0.15rem;
            display: flex;
            justify-content: flex-end;
            box-shadow: 0px 2px 9px 0px rgba(0, 123, 255, 0.2);
            .tab_btns {
              cursor: pointer;
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
            }
            .tab_btns_l {
              border-radius: 0.04rem 0px 0px 0.04rem;
            }
            .tab_btns_c {
              border-right: 0.01rem solid #87b9db;
            }
            .tab_act {
              color: #ffffff;
              background: linear-gradient(90deg, #0075ff 0%, #00c2ff 100%);
            }
          }
        }
        margin: 0.2rem 0;
        background: #ffffff;
        box-shadow: 0px 4px 40px 0px rgba(47, 65, 110, 0.08);
        border-radius: 4px;
        padding: 0.2rem 0.24rem;
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
        .sex_li_head {
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 1;
          img {
            width: 0.4rem;
            height: 0.4rem;
          }
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
        .el-table {
          margin-bottom: 0rem;
          .el-table__header-wrapper {
            height: 0.42rem;
          }
          th.is-leaf {
            padding: 0.04rem 0;
          }
          td {
            height: 0.56rem;
            padding: 0;
          }
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
          border: 0;
        }
        .el-table thead th,
        .el-table thead tr {
          // background: linear-gradient(0deg, #c4ecff 0%, #97cdff 100%);
          // background: rgba(236, 247, 255, 0.8);
          color: #354b70;
        }
        .el-table__header,
        .el-table__body {
          col:nth-child(6) {
            width: 2.4rem;
          }
          col:nth-child(3) {
            width: 1.2rem;
          }
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
