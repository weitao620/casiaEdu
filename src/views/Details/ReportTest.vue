<template>
  <div class="detail_teacher_wrap">
    <div class="top_back" @click="topBacks" v-show="scrollYs > part0">
      <img src="../../assets/images/report/to_top.png" alt="" />
    </div>
    <div
      :class="['r_futi', { r_futi_fix: scrollYs > part0 }]"
      v-show="scrollYs > part0"
    >
      <div
        class="r_t_tab"
        style="margin-bottom:0.12rem;box-shadow: 0px 13px 43px 0px rgba(70, 101, 135, 0.1);"
        @click="toReview"
      >
        <img src="../../assets/images/report/part0.png" alt="" />
        <span>查看箱庭作品</span>
      </div>
      <div style="box-shadow: 0px 13px 43px 0px rgba(70, 101, 135, 0.1);">
        <div
          :class="[
            'r_t_tab',
            { r_t_tab_act1: topAct == 1 },
            { r_t_b0: topAct == 2 }
          ]"
          @click="trendTab(1)"
        >
          <img src="../../assets/images/report/part1.png" alt="" />
          <span>总体概况</span>
        </div>
        <div
          :class="['r_t_tab', { r_t_tab_act2: topAct == 2 }]"
          @click="trendTab(2)"
        >
          <img src="../../assets/images/report/part2.png" alt="" />
          <span>维度分析</span>
        </div>
        <div
          :class="['r_t_tab', { r_t_tab_act2: topAct == 3 }]"
          @click="trendTab(3)"
        >
          <img src="../../assets/images/report/part3.png" alt="" />
          <span>指导建议</span>
        </div>
      </div>
    </div>
    <div class="dt_header">
      <div class="dt_h_box">
        <span>数据更新时间：{{ details.reportTime }}</span>
        <div class="dt_download" @click="downloadSprintTestReport">下载报告</div>
      </div>
    </div>
    <div class="dt_top_bg">
      <div class="dttb_tips">
        <img src="../../assets/images/report/tip_index.png" alt="">
        <span>报告结果仅供参考，不作为学生选拨或诊断依据。</span>
      </div>
      <div class="dttb_txt">
        <h1>导读</h1>
        <p>
          沙盘游戏，也被称为箱庭疗法，是指在治疗师的陪伴下，自由挑选沙具，在盛有细沙的特制箱子里进行自我表现的一种心理疗法。沙盘游戏的有效性已经得到国内外临床实践的广泛验证，对于丰富个体的情感体验、促进自我成长及人格完善具有显著的作用。
        </p>
        <p>
          基于投射、沙盘游戏理论，运用人工智能、三维仿真等多项技术，AI心世界实现了实物沙盘的电子化与智能化，为评估学生心理健康水平提供了重要参考依据，是心理教师咨询辅导工作中的智能助手。
        </p>
      </div>
      <img src="../../assets/images/report/teacherRbg.png" alt="" />
      <div class="dt_person" ref="parts0">
        <div class="dtp_photo">
          <img src="../../assets/images/report/human.png" alt="" />
        </div>
        <div class="dtp_main">
          <ul>
            <li style="width:2.4rem">
              <img
                class="dt_per1"
                src="../../assets/images/report/person1.png"
                alt=""
              />
              <span class="dt_blod">姓名：</span>
              <span>{{ details.name }}</span>
            </li>
            <li style="width:2.4rem">
              <img
                class="dt_per2"
                src="../../assets/images/report/person2.png"
                alt=""
              />
              <span class="dt_blod">学籍号：</span>
              <span>{{ details.passport }}</span>
            </li>
            <li style="width:3rem">
              <img
                class="dt_per3"
                src="../../assets/images/report/person3.png"
                alt=""
              />
              <span class="dt_blod">出生日期：</span>
              <span>{{ details.birth }}</span>
            </li>
            <li style="width:2.4rem">
              <img
                class="dt_per4"
                src="../../assets/images/report/person4.png"
                alt=""
              />
              <span class="dt_blod">入学年月：</span>
              <span>{{ details.enterYear }}</span>
            </li>
            <li style="width:6rem">
              <img
                class="dt_per5"
                src="../../assets/images/report/person5.png"
                alt=""
              />
              <span></span>
              <span>{{ details.schoolName }}</span>
            </li>
          </ul>
          <ul>
            <li style="width:2.4rem">
              <img
                class="dt_per6"
                src="../../assets/images/report/person6.png"
                alt=""
              />
              <span class="dt_blod"></span>
              <span>{{ details.gradeName }} {{ details.className }}</span>
            </li>
            <li style="width:2.4rem">
              <img
                class="dt_per7"
                src="../../assets/images/report/person7.png"
                alt=""
              />
              <span class="dt_blod">测评次数：</span>
              <span>第{{ details.evaluationTime }}次</span>
            </li>
            <li style="width:5.4rem">
              <img
                class="dt_per8"
                src="../../assets/images/report/person8.png"
                alt=""
              />
              <span class="dt_blod">测评时间：</span>
              <span>{{ details.datetime }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="dt_mains" ref="sprintReport">
      <div class="dtm_title" ref="parts1">
        总体概况
      </div>
      <div class="dtm_contain">
        <div class="dtmc_left">
          <div class="dtmcl_tle">
            <img src="../../assets/images/report/total1.png" alt="" />
            <span>总体评估概况</span>
          </div>
          <div class="dtmcl_chart">
            <div id="myChart" class="my_chart" ref="myChart"></div>
            <div class="c_o_my_txt" v-show="myTxtFlag">
              {{ details.warningNum }}项
            </div>
            <div
              :class="['c_o_my_num', { c_red: details.warningNum > 0 }]"
              v-show="myTxtFlag"
            >
              {{ details.warningNum > 0 ? "需关注" : "正常" }}
            </div>
          </div>
          <div class="dtmcl_du">
            <img src="../../assets/images/report/ke_du.png" alt="" />
            <span>可信度：</span>
            <span class="dtmcl_tx">{{ details.ConfidenceLevel }}</span>
          </div>
          <div class="dtmcl_txt">
            {{ details.confidence }}
          </div>
        </div>
        <div class="dtmc_right">
          <div class="dtmcl_tle">
            <span>指标</span>
            <span>本次结果</span>
            <span>上次结果</span>
            <span>个人平均参测结果</span>
          </div>
          <ul class="dtmcr_ul">
            <li>抑郁</li>
            <li v-if="details.reportWarningInfo">
              <div
                :class="[
                  { dr_li1: details.reportWarningInfo.depressionLevel == 2 },
                  { dr_li2: details.reportWarningInfo.depressionLevel == 1 },
                  { dr_li3: details.reportWarningInfo.depressionLevel == 0 }
                ]"
              >
                <div class="dr_bok">
                  <span>{{
                    details.reportWarningInfo.depressionLevelTxt
                  }}</span>
                </div>
              </div>
            </li>
            <li v-if="details.lastWarningInfo">
              <div
                :class="[
                  { dr_li1: details.lastWarningInfo.depressionLevel == 2 },
                  { dr_li2: details.lastWarningInfo.depressionLevel == 1 },
                  { dr_li3: details.lastWarningInfo.depressionLevel == 0 }
                ]"
              >
                <div class="dr_bok">
                  <span>{{ details.lastWarningInfo.depressionLevelTxt }}</span>
                </div>
              </div>
            </li>
            <li v-if="details.warningAvgInfo">
              <div
                :class="[
                  { dr_li1: details.warningAvgInfo.depressionLevel == 2 },
                  { dr_li2: details.warningAvgInfo.depressionLevel == 1 },
                  { dr_li3: details.warningAvgInfo.depressionLevel == 0 }
                ]"
              >
                <div class="dr_bok">
                  <span>{{ details.warningAvgInfo.depressionLevelTxt }}</span>
                </div>
              </div>
            </li>
          </ul>
          <ul class="dtmcr_ul">
            <li>焦虑</li>
            <li v-if="details.reportWarningInfo">
              <div
                :class="[
                  { dr_li1: details.reportWarningInfo.anxietyLevel == 2 },
                  { dr_li2: details.reportWarningInfo.anxietyLevel == 1 },
                  { dr_li3: details.reportWarningInfo.anxietyLevel == 0 }
                ]"
              >
                <div class="dr_bok">
                  <span>{{ details.reportWarningInfo.anxietyLevelTxt }}</span>
                </div>
              </div>
            </li>
            <li v-if="details.lastWarningInfo">
              <div
                :class="[
                  { dr_li1: details.lastWarningInfo.anxietyLevel == 2 },
                  { dr_li2: details.lastWarningInfo.anxietyLevel == 1 },
                  { dr_li3: details.lastWarningInfo.anxietyLevel == 0 }
                ]"
              >
                <div class="dr_bok">
                  <span>{{ details.lastWarningInfo.anxietyLevelTxt }}</span>
                </div>
              </div>
            </li>
            <li v-if="details.warningAvgInfo">
              <div
                :class="[
                  { dr_li1: details.warningAvgInfo.anxietyLevel == 2 },
                  { dr_li2: details.warningAvgInfo.anxietyLevel == 1 },
                  { dr_li3: details.warningAvgInfo.anxietyLevel == 0 }
                ]"
              >
                <div class="dr_bok">
                  <span>{{ details.warningAvgInfo.anxietyLevelTxt }}</span>
                </div>
              </div>
            </li>
          </ul>
          <ul class="dtmcr_ul">
            <li>强迫</li>
            <li v-if="details.reportWarningInfo">
              <div
                :class="[
                  { dr_li1: details.reportWarningInfo.forcedLevel == 2 },
                  { dr_li2: details.reportWarningInfo.forcedLevel == 1 },
                  { dr_li3: details.reportWarningInfo.forcedLevel == 0 }
                ]"
              >
                <div class="dr_bok">
                  <span>{{ details.reportWarningInfo.forcedLevelTxt }}</span>
                </div>
              </div>
            </li>
            <li v-if="details.lastWarningInfo">
              <div
                :class="[
                  { dr_li1: details.lastWarningInfo.forcedLevel == 2 },
                  { dr_li2: details.lastWarningInfo.forcedLevel == 1 },
                  { dr_li3: details.lastWarningInfo.forcedLevel == 0 }
                ]"
              >
                <div class="dr_bok">
                  <span>{{ details.lastWarningInfo.forcedLevelTxt }}</span>
                </div>
              </div>
            </li>
            <li v-if="details.warningAvgInfo">
              <div
                :class="[
                  { dr_li1: details.warningAvgInfo.forcedLevel == 2 },
                  { dr_li2: details.warningAvgInfo.forcedLevel == 1 },
                  { dr_li3: details.warningAvgInfo.forcedLevel == 0 }
                ]"
              >
                <div class="dr_bok">
                  <span>{{ details.warningAvgInfo.forcedLevelTxt }}</span>
                </div>
              </div>
            </li>
          </ul>
          <div class="dtmcr_bt">
            <div class="db_img">
              <img src="../../assets/images/report/jiedu.png" alt="" />数据解读
            </div>
            <p>{{ details.riskWarning }}</p>
          </div>
        </div>
      </div>
      <div class="dtm_title" ref="parts2">
        维度分析
      </div>

      <div class="dtm_sys">
        <el-carousel :interval="40000" arrow="always" type="card" height="7rem">
          <el-carousel-item v-for="(item, index) in sysList" :key="item.title">
            <div class="dtms_box">
              <div class="dtmsb_tle" :style="{ background: item.bg }">
                <h3>{{ item.title }}</h3>
                <div class="dtt_res">
                  <span>评估结果</span>
                  <div class="dtt_img">
                    <img
                      src="../../assets/images/report/grade_line.png"
                      alt=""
                    />
                    <img
                      class="dttr_btn"
                      :style="{ left: item.gradep }"
                      src="../../assets/images/report/grade_btn.png"
                      alt=""
                    />
                    <span class="dttr_lv" :style="{ left: item.gradep }">{{
                      item.level
                    }}</span>
                    <span
                      class="dttr_gd"
                      :style="{ left: item.gradep, color: item.txtColor }"
                      >{{ item.grade }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="dtmsb_tar">
                <div v-if="index == 0"  style="position:relative">
                  <div class="top_top" v-if="details.DepressionSubDim">
                    <span class="tt_txt">{{details.DepressionSubDim[2].name}}</span>
                    <div class="demsb_tool">
                      <div class="demsb_score">学生得分：<span>{{details.DepressionSubDim[2].score}}</span></div>
                      <div class="demsb_score demsb_score1">标准水平：<span>{{details.DepressionSubDim[2].thre}}</span></div>
                    </div>
                  </div>
                  <div class="bottom_left" v-if="details.DepressionSubDim">
                    <span class="tt_txt">{{details.DepressionSubDim[1].name}}</span>
                    <div class="demsb_tool" style="margin-left:1.7rem">
                      <div class="demsb_score">学生得分：<span>{{details.DepressionSubDim[1].score}}</span></div>
                      <div class="demsb_score demsb_score1">标准水平：<span>{{details.DepressionSubDim[1].thre}}</span></div>
                    </div>
                  </div>
                  <div class="bottom_right" v-if="details.DepressionSubDim">
                    <span class="tt_txt">{{details.DepressionSubDim[0].name}}</span>
                    <div class="demsb_tool1">
                      <div class="demsb_score">学生得分：<span>{{details.DepressionSubDim[0].score}}</span></div>
                      <div class="demsb_score demsb_score1">标准水平：<span>{{details.DepressionSubDim[0].thre}}</span></div>
                    </div>
                  </div>
                  <div
                    id="myChartPies1"
                    class="myChartPies1"
                    ref="myChartPies1"
                  ></div>
                </div>
                <div v-if="index == 1"  style="position:relative">
                  <div class="top_top" v-if="details.AnxietySubDim">
                    <span class="tt_txt">{{details.AnxietySubDim[2].name}}</span>
                    <div class="demsb_tool">
                      <div class="demsb_score">学生得分：<span>{{details.AnxietySubDim[2].score}}</span></div>
                      <div class="demsb_score demsb_score1">标准水平：<span>{{details.AnxietySubDim[2].thre}}</span></div>
                    </div>
                  </div>
                  <div class="bottom_left" v-if="details.AnxietySubDim">
                    <span class="tt_txt">{{details.AnxietySubDim[1].name}}</span>
                    <div class="demsb_tool" style="margin-left:1.7rem">
                      <div class="demsb_score">学生得分：<span>{{details.AnxietySubDim[1].score}}</span></div>
                      <div class="demsb_score demsb_score1">标准水平：<span>{{details.AnxietySubDim[1].thre}}</span></div>
                    </div>
                  </div>
                  <div class="bottom_right" v-if="details.AnxietySubDim">
                    <span class="tt_txt">{{details.AnxietySubDim[0].name}}</span>
                    <div class="demsb_tool1">
                      <div class="demsb_score">学生得分：<span>{{details.AnxietySubDim[0].score}}</span></div>
                      <div class="demsb_score demsb_score1">标准水平：<span>{{details.AnxietySubDim[0].thre}}</span></div>
                    </div>
                  </div>
                  <div
                    id="myChartPies2"
                    class="myChartPies2"
                    ref="myChartPies2"
                  ></div>
                </div>
                <div v-if="index == 2"  style="position:relative">
                  <div class="top_top" v-if="details.ForcedSubDim">
                    <span class="tt_txt">{{details.ForcedSubDim[2].name}}</span>
                    <div class="demsb_tool">
                      <div class="demsb_score">学生得分：<span>{{details.ForcedSubDim[2].score}}</span></div>
                      <div class="demsb_score demsb_score1">标准水平：<span>{{details.ForcedSubDim[2].thre}}</span></div>
                    </div>
                  </div>
                  <div class="bottom_left" v-if="details.ForcedSubDim">
                    <span class="tt_txt">{{details.ForcedSubDim[1].name}}</span>
                    <div class="demsb_tool" style="margin-left:1.7rem">
                      <div class="demsb_score">学生得分：<span>{{details.ForcedSubDim[1].score}}</span></div>
                      <div class="demsb_score demsb_score1">标准水平：<span>{{details.ForcedSubDim[1].thre}}</span></div>
                    </div>
                  </div>
                  <div class="bottom_right" v-if="details.ForcedSubDim">
                    <span class="tt_txt">{{details.ForcedSubDim[0].name}}</span>
                    <div class="demsb_tool1">
                      <div class="demsb_score">学生得分：<span>{{details.ForcedSubDim[0].score}}</span></div>
                      <div class="demsb_score demsb_score1">标准水平：<span>{{details.ForcedSubDim[0].thre}}</span></div>
                    </div>
                  </div>
                  <div
                    id="myChartPies3"
                    class="myChartPies3"
                    ref="myChartPies3"
                  ></div>
                </div>
                <ul>
                  <li>
                    <span></span>
                    <span>学生得分</span>
                  </li>
                  <li>
                    <span></span>
                    <span>标准水平</span>
                  </li>
                </ul>
              </div>
              <div class="dtmcr_bts">
                <div class="db_img" :style="{ color: item.txtColor }">
                  <img
                    v-if="item.imgType == 1"
                    src="../../assets/images/report/sys1.png"
                    alt=""
                  />
                  <img
                    v-if="item.imgType == 2"
                    src="../../assets/images/report/sys2.png"
                    alt=""
                  />
                  <img
                    v-if="item.imgType == 3"
                    src="../../assets/images/report/sys3.png"
                    alt=""
                  />
                  测评结果分析
                </div>
                <p v-for="(items, keps) in item.list" :key="keps">
                  <span></span>
                  {{ items }}
                </p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="dtm_title" ref="parts3">
        指导建议
      </div>
      <div class="guide_box">
        <div class="gb_main">
          <div class="dtmcl_tle">
            <img src="../../assets/images/report/guide_i.png" alt="" />
            <span>指导建议</span>
          </div>
          <div class="gb_contain">
            <p>{{details.suggestionTop}}</p>
            <ul>
              <li v-for="(item, index) in details.suggestionArr" :key="item">
                <span>{{index + 1}}</span>
                <p>
                  {{item}}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "../../assets/js/echarts";
import Url from "@/assets/js/url.js";
import { mapGetters } from "vuex";
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
        color: "#EDF7FF"
      },
      {
        offset: 1,
        color: "#EDF7FF"
      }
    ])
  }
];
export default {
  name: "",
  data() {
    return {
      details: {},
      reportId: "",
      part0: "",
      part1: "",
      part2: "",
      part3: "",
      scrollYs: 0,
      topAct: 1,
      topBack: false,
      myChart: "",
      myChartPies1: "",
      myChartPies2: "",
      myChartPies3: "",
      myTxtFlag: false,
      sysList: [
        // {
        //   title: "抑郁",
        //   grade: 8.3,
        //   gradep: "83%",
        //   level: "高",
        //   txtColor: "#006CFF",
        //   numColor1: "#6774F6",
        //   numColor2: "#00C0FF",
        //   numColor3: "#FF55B6",
        //   bg:
        //     "linear-gradient(90deg, rgba(5, 157, 255, 0.7), rgba(49, 204, 255, 0.7))",
        //   imgType: "1",
        //   list: [
        //     "该生可能情绪低落，会表现出忧愁、言语和动作明显减少、自我感觉不良，常常自卑、自责、自罪等。",
        //     "该生可能精力缺乏，会出现体力下降、学习效率下降、主动性降低、生活懒散等。",
        //     "该生可能情绪低落，会表现出忧愁、言语和动作明显减少、自我感觉不良，常常自卑、自责、自罪等。"
        //   ]
        // },
        // {
        //   title: "焦虑",
        //   grade: 2.3,
        //   gradep: "23%",
        //   level: "低",
        //   txtColor: "#6671FF",
        //   numColor1: "#6774F6",
        //   numColor2: "#00C0FF",
        //   numColor3: "#FF55B6",
        //   bg:
        //     "linear-gradient(90deg, rgba(186, 191, 255, 0.78), rgba(114, 121, 255, 0.78))",
        //   imgType: "2",
        //   list: [
        //     "该生可能情绪低落，会表现出忧愁、言语和动作明显减少、自我感觉不良，常常自卑、自责、自罪等。",
        //     "该生可能精力缺乏，会出现体力下降、学习效率下降、主动性降低、生活懒散等。"
        //   ]
        // },
        // {
        //   title: "强迫",
        //   grade: 6.2,
        //   gradep: "62%",
        //   level: "中",
        //   txtColor: "#FE5FB8",
        //   numColor1: "#6774F6",
        //   numColor2: "#00C0FF",
        //   numColor3: "##FF55B6",
        //   bg:
        //     "linear-gradient(90deg, rgba(255, 119, 195, 0.8), rgba(255, 182, 236, 0.8))",
        //   imgType: "3",
        //   list: [
        //     "该生可能情绪低落，会表现出忧愁、言语和动作明显减少、自我感觉不良，常常自卑、自责、自罪等。"
        //   ]
        // }
      ]
    };
  },
  mounted() {
    // 左边扶梯效果
    this.part0 = this.$refs.parts0.offsetTop;
    this.part1 = this.$refs.parts1.offsetTop;
    this.part2 = this.$refs.parts2.offsetTop;
    this.part3 = this.$refs.parts3.offsetTop;
    this.listenerFunction();
    // 报告数据
    this.reportId = localStorage.getItem("openReport");
    this.getDetail();

    window.addEventListener("resize", () => {
      setTimeout(() => {
        this.myTxtFlag = false;
        setTimeout(() => {
          this.myTxtFlag = true;
        }, 500);
        this.myChart.resize();
        this.myChartPies1.resize();
        this.myChartPies2.resize();
        this.myChartPies3.resize();
      }, 100);
    });
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.listenerFunction);
  },
  methods: {
    downloadSprintTestReport() {
      // console.log("开始下载PDF--A4")
      this.getPdfFromHtml(this.$refs.sprintReport, '团队报告')
    },
    // 获取报告详情
    getDetail() {
      let that = this;
      var param = {
        reportID: that.reportId
      };
      this.$http
        .get(Url + "/aimw/report/reportInfo", {
          params: param
        })
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            data.data.birth = data.data.birth.split(" ")[0];
            if (data.data.confidenceLevel == 1) {
              data.data.confidenceLevel = "可信";
            } else {
              data.data.confidenceLevel = "不可信";
            }
            data.data.suggestion = data.data.suggestion
              .split(/[(\r\n)\r\n]+/)
              .filter(function(s) {
                return s && s.trim();
              });
            data.data.suggestionTop = data.data.suggestion[0]
            // console.log(data.data.suggestionTop);
            let sArr = [];
            for (let i in data.data.suggestion) {
              if (i > 0) {
                let str = data.data.suggestion[i].split('.')[1]
                sArr.push(str)
              }
            }
            data.data.suggestionArr = sArr
            let warningInfo = data.data.reportWarningInfo
            let depressionColorStr = '';
            let depressionLevelStr = '';
            let depressionBgStr = '';
            let depressionImgStr = '';
            if (warningInfo.depressionLevel == 0) {
              depressionColorStr = "#00C0FF"
              depressionLevelStr = "低"
              depressionBgStr = "linear-gradient(90deg, rgba(5, 157, 255, 0.7), rgba(49, 204, 255, 0.7))"
              depressionImgStr = '1'
            } else if (warningInfo.depressionLevel == 1) {
              depressionColorStr = "#6774F6"
              depressionLevelStr = "中"
              depressionBgStr = "linear-gradient(90deg, rgba(186, 191, 255, 0.78), rgba(114, 121, 255, 0.78))"
              depressionImgStr = '2'
            } else if (warningInfo.depressionLevel == 2) {
              depressionColorStr = "#FF55B6"
              depressionLevelStr = "高"
              depressionBgStr = "linear-gradient(90deg, rgba(255, 119, 195, 0.8), rgba(255, 182, 236, 0.8))"
              depressionImgStr = '3'
            }
            let anxietyColorStr = '';
            let anxietyLevelStr = '';
            let anxietyBgStr = '';
            let anxietyImgStr = '';
            if (warningInfo.anxietyLevel == 0) {
              anxietyColorStr = "#00C0FF"
              anxietyLevelStr = "低"
              anxietyBgStr = "linear-gradient(90deg, rgba(5, 157, 255, 0.7), rgba(49, 204, 255, 0.7))"
              anxietyImgStr = '1'
            } else if (warningInfo.anxietyLevel == 1) {
              anxietyColorStr = "#6774F6"
              anxietyLevelStr = "中"
              anxietyBgStr = "linear-gradient(90deg, rgba(186, 191, 255, 0.78), rgba(114, 121, 255, 0.78))"
              anxietyImgStr = '2'
            } else if (warningInfo.anxietyLevel == 2) {
              anxietyColorStr = "#FF55B6"
              anxietyLevelStr = "高"
              anxietyBgStr = "linear-gradient(90deg, rgba(255, 119, 195, 0.8), rgba(255, 182, 236, 0.8))"
              anxietyImgStr = '3'
            }
            let forcedColorStr = '';
            let forcedLevelStr = '';
            let forcedBgStr = '';
            let forcedImgStr = '';
            if (warningInfo.forcedLevel == 0) {
              forcedColorStr = "#00C0FF"
              forcedLevelStr = "低"
              forcedBgStr = "linear-gradient(90deg, rgba(5, 157, 255, 0.7), rgba(49, 204, 255, 0.7))"
              forcedImgStr = '1'
            } else if (warningInfo.forcedLevel == 1) {
              forcedColorStr = "#6774F6"
              forcedLevelStr = "中"
              forcedBgStr = "linear-gradient(90deg, rgba(186, 191, 255, 0.78), rgba(114, 121, 255, 0.78))"
              forcedImgStr = '2'
            } else if (warningInfo.forcedLevel == 2) {
              forcedColorStr = "#FF55B6"
              forcedLevelStr = "高"
              forcedBgStr = "linear-gradient(90deg, rgba(255, 119, 195, 0.8), rgba(255, 182, 236, 0.8))"
              forcedImgStr = '3'
            }

            data.data.depressionDim = data.data.depressionDim
              .split(/[(\r\n)\r\n]+/)
              .filter(function(s) {
                return s && s.trim();
              });
            // console.log(data.data.depressionDim)
            let depArr = [];
            for (let i in data.data.depressionDim) {
              let str = ''
              if (data.data.depressionDim[i].indexOf('.') != -1) {
                str = data.data.depressionDim[i].split('.')[1]
              } else {
                str = data.data.depressionDim[i]
              }
              depArr.push(str)
            }
            // console.log(depArr)
            data.data.anxietyDim = data.data.anxietyDim
              .split(/[(\r\n)\r\n]+/)
              .filter(function(s) {
                return s && s.trim();
              });
            // console.log(data.data.anxietyDim)
            let anxArr = [];
            for (let i in data.data.anxietyDim) {
              let str = ''
              if (data.data.anxietyDim[i].indexOf('.') != -1) {
                str = data.data.anxietyDim[i].split('.')[1]
              } else {
                str = data.data.anxietyDim[i]
              }
              anxArr.push(str)
            }
            // console.log(anxArr)
            data.data.forcedDim = data.data.forcedDim
              .split(/[(\r\n)\r\n]+/)
              .filter(function(s) {
                return s && s.trim();
              });
            // console.log(data.data.forcedDim)
            let forArr = [];
            for (let i in data.data.forcedDim) {
              let str = ''
              if (data.data.forcedDim[i].indexOf('.') != -1) {
                str = data.data.forcedDim[i].split('.')[1]
              } else {
                str = data.data.forcedDim[i]
              }
              forArr.push(str)
            }
            // console.log(forArr)
            this.sysList = [
              {
                title: "抑郁",
                grade: warningInfo.depressionScore,
                gradep: Number(warningInfo.depressionScore) * 10 + "%",
                level: depressionLevelStr,
                txtColor: depressionColorStr,
                bg: depressionBgStr,
                imgType: depressionImgStr,
                list: depArr
              },
              {
                title: "焦虑",
                grade: warningInfo.anxietyScore,
                gradep: Number(warningInfo.anxietyScore) * 10 + "%",
                level: anxietyLevelStr,
                txtColor: anxietyColorStr,
                bg: anxietyBgStr,
                imgType: anxietyImgStr,
                list: anxArr
              },
              {
                title: "强迫",
                grade: warningInfo.forcedScore,
                gradep: Number(warningInfo.forcedScore) * 10 + "%",
                level: forcedLevelStr,
                txtColor: forcedColorStr,
                bg: forcedBgStr,
                imgType: forcedImgStr,
                list: forArr
              }
            ]
            // console.log(this.sysList)
            that.details = that.justInfo(data.data);
            that.myChartInit();
            setTimeout(() => {
              that.myTxtFlag = true;
            }, 500);
            // console.log(data);
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    // 数据处理
    justInfo(list) {
      // console.log(list);
      let data = list;
      // 本次
      if (data.reportWarningInfo.depressionLevel == 2) {
        data.reportWarningInfo.depressionLevelTxt = "高";
      } else if (data.reportWarningInfo.depressionLevel == 1) {
        data.reportWarningInfo.depressionLevelTxt = "中";
      } else {
        data.reportWarningInfo.depressionLevelTxt = "低";
      }
      if (data.reportWarningInfo.anxietyLevel == 2) {
        data.reportWarningInfo.anxietyLevelTxt = "高";
      } else if (data.reportWarningInfo.anxietyLevel == 1) {
        data.reportWarningInfo.anxietyLevelTxt = "中";
      } else {
        data.reportWarningInfo.anxietyLevelTxt = "低";
      }
      if (data.reportWarningInfo.forcedLevel == 2) {
        data.reportWarningInfo.forcedLevelTxt = "高";
      } else if (data.reportWarningInfo.forcedLevel == 1) {
        data.reportWarningInfo.forcedLevelTxt = "中";
      } else {
        data.reportWarningInfo.forcedLevelTxt = "低";
      }
      // 上次
      if (data.lastWarningInfo.depressionLevel == 2) {
        data.lastWarningInfo.depressionLevelTxt = "高";
      } else if (data.lastWarningInfo.depressionLevel == 1) {
        data.lastWarningInfo.depressionLevelTxt = "中";
      } else {
        data.lastWarningInfo.depressionLevelTxt = "低";
      }
      if (data.lastWarningInfo.anxietyLevel == 2) {
        data.lastWarningInfo.anxietyLevelTxt = "高";
      } else if (data.lastWarningInfo.anxietyLevel == 1) {
        data.lastWarningInfo.anxietyLevelTxt = "中";
      } else {
        data.lastWarningInfo.anxietyLevelTxt = "低";
      }
      if (data.lastWarningInfo.forcedLevel == 2) {
        data.lastWarningInfo.forcedLevelTxt = "高";
      } else if (data.lastWarningInfo.forcedLevel == 1) {
        data.lastWarningInfo.forcedLevelTxt = "中";
      } else {
        data.lastWarningInfo.forcedLevelTxt = "低";
      }
      // 平均
      if (data.warningAvgInfo.depressionLevel == 2) {
        data.warningAvgInfo.depressionLevelTxt = "高";
      } else if (data.warningAvgInfo.depressionLevel == 1) {
        data.warningAvgInfo.depressionLevelTxt = "中";
      } else {
        data.warningAvgInfo.depressionLevelTxt = "低";
      }
      if (data.warningAvgInfo.anxietyLevel == 2) {
        data.warningAvgInfo.anxietyLevelTxt = "高";
      } else if (data.warningAvgInfo.anxietyLevel == 1) {
        data.warningAvgInfo.anxietyLevelTxt = "中";
      } else {
        data.warningAvgInfo.anxietyLevelTxt = "低";
      }
      if (data.warningAvgInfo.forcedLevel == 2) {
        data.warningAvgInfo.forcedLevelTxt = "高";
      } else if (data.warningAvgInfo.forcedLevel == 1) {
        data.warningAvgInfo.forcedLevelTxt = "中";
      } else {
        data.warningAvgInfo.forcedLevelTxt = "低";
      }
      return data;
    },
    topBacks() {
      window.scrollTo(0, 0);
    },
    trendTab(type) {
      this.topAct = type;
      if (type == 1) {
        window.scrollTo(0, this.part1 - 40);
      }
      if (type == 2) {
        window.scrollTo(0, this.part2 - 40);
      }
      if (type == 3) {
        window.scrollTo(0, this.part3 - 40);
      }
    },
    listenerFunction(e) {
      document.addEventListener("scroll", this.handleScroll, true);
    },
    handleScroll() {
      this.scrollYs = window.pageYOffset;
      if (this.scrollYs < this.part0) {
        this.topAct = 1;
      }
      if (this.part0 < this.scrollYs && this.scrollYs < this.part1) {
        this.topAct = 1;
      }
      if (this.part1 < this.scrollYs && this.scrollYs < this.part2) {
        this.topAct = 2;
      }
      if (this.part2 < this.scrollYs && this.scrollYs < this.part3) {
        this.topAct = 3;
      }
    },
    toReview() {
      // console.log(1111);
      this.$router.push({
        name: "detailsreview",
        params: { userID: this.reportId }
      });
    },
    myChartInit() {
      let that = this;
      // 总体评估概况
      this.myChart = echarts.init(this.$refs.myChart);
      this.myChart.setOption({
        tooltip: {
          trigger: "item",
          axisPointer: {
            type: "shadow",
            shadowStyle: {
              width: "35px",
              color: "rgba(72, 117, 174, 0.25)"
            }
          },
          backgroundColor: "#ffffff",
          borderWidth: 0,
          textStyle: {
            color: "#5B6C89"
          },
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
        series: [
          {
            name: "",
            type: "pie",
            radius: ["60%", "80%"],
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
                formatter: "累计需关注频次\n{hr|{c}次}",
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
                value: that.details.warningNum,
                name: "需关注",
                itemStyle: {
                  normal: transColor[0]
                }
              },
              {
                value: 9 - that.details.warningNum,
                name: "正常",
                itemStyle: {
                  normal: transColor[2]
                }
              }
            ]
          }
        ]
      });

      setTimeout(() => {
        this.myChartPies1 = echarts.init(
          document.getElementById("myChartPies1")
        );
        this.myChartPies1.setOption({
          tooltip: {
            show: false,
            padding: 10,
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#fff",
            textStyle: {
              color: "#5B6C89"
            },
            extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);"
          },
          radar: [
            {
              indicator: [
                { name: that.details.DepressionSubDim[0].name, max: 10 },
                { name: that.details.DepressionSubDim[1].name, max: 10 },
                { name: that.details.DepressionSubDim[2].name, max: 10 }
              ],
              center: ["50%", "50%"],
              radius: "100%",
              startAngle: 210,
              splitNumber: 5,
              shape: "circle",
              name: {
                formatter: "",
                textStyle: {
                  color: "#354B70"
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
            data: [that.details.DepressionSubDim[0].name, that.details.DepressionSubDim[1].name, that.details.DepressionSubDim[2].name]
          },
          series: [
            {
              name: "",
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
                  value: [that.details.DepressionSubDim[0].thre, that.details.DepressionSubDim[1].thre, that.details.DepressionSubDim[2].thre],
                  name: "标准水平",
                  symbol: "circle",
                  symbolSize: 6,
                  areaStyle: {
                    opacity: 0.4,
                    color: {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(0, 117, 255, 0.9)"
                        },
                        {
                          offset: 1,
                          color: "rgba(0, 194, 255, 0.9)"
                        }
                      ],
                      globalCoord: false
                    }
                  },
                  lineStyle: {
                    width: 0
                  }
                },
                {
                  value: [that.details.DepressionSubDim[0].score, that.details.DepressionSubDim[1].score, that.details.DepressionSubDim[2].score],
                  name: "学生得分",
                  symbol: "circle",
                  symbolSize: 6,
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
                          color: "rgba(27, 236, 255, 0.9)"
                        },
                        {
                          offset: 1,
                          color: "rgba(0, 198, 255, 0.9)"
                        }
                      ],
                      globalCoord: false
                    }
                  },
                  lineStyle: {
                    width: 0
                  }
                }
              ]
            }
          ]
        });
        this.myChartPies2 = echarts.init(
          document.getElementById("myChartPies2")
        );
        // console.log(this.myChartPies2);
        this.myChartPies2.setOption({
          tooltip: {
            show: false,
            padding: 10,
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#fff",
            textStyle: {
              color: "#5B6C89"
            },
            extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);"
          },
          radar: [
            {
              indicator: [
                { name: that.details.AnxietySubDim[0].name, max: 10 },
                { name: that.details.AnxietySubDim[1].name, max: 10 },
                { name: that.details.AnxietySubDim[2].name, max: 10 }
              ],
              center: ["50%", "50%"],
              radius: "100%",
              startAngle: 210,
              splitNumber: 5,
              shape: "circle",
              name: {
                formatter: "",
                textStyle: {
                  color: "#354B70"
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
            data: [that.details.AnxietySubDim[0].name, that.details.AnxietySubDim[1].name, that.details.AnxietySubDim[2].name]
          },
          series: [
            {
              name: "",
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
                  value: [that.details.AnxietySubDim[0].thre, that.details.AnxietySubDim[1].thre, that.details.AnxietySubDim[2].thre],
                  name: "标准水平",
                  symbol: "circle",
                  symbolSize: 6,
                  areaStyle: {
                    opacity: 0.4,
                    color: {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(0, 117, 255, 0.9)"
                        },
                        {
                          offset: 1,
                          color: "rgba(0, 194, 255, 0.9)"
                        }
                      ],
                      globalCoord: false
                    }
                  },
                  lineStyle: {
                    width: 0
                  }
                },
                {
                  value: [that.details.AnxietySubDim[0].score, that.details.AnxietySubDim[1].score, that.details.AnxietySubDim[2].score],
                  name: "学生得分",
                  symbol: "circle",
                  symbolSize: 6,
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
                          color: "rgba(27, 236, 255, 0.9)"
                        },
                        {
                          offset: 1,
                          color: "rgba(0, 198, 255, 0.9)"
                        }
                      ],
                      globalCoord: false
                    }
                  },
                  lineStyle: {
                    width: 0
                  }
                }
              ]
            }
          ]
        });
        this.myChartPies3 = echarts.init(
          document.getElementById("myChartPies3")
        );
        // console.log(this.myChartPies3);
        this.myChartPies3.setOption({
          tooltip: {
            show: false,
            padding: 10,
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#fff",
            textStyle: {
              color: "#5B6C89"
            },
            extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);"
          },
          radar: [
            {
              indicator: [
                { name: that.details.ForcedSubDim[0].name, max: 10 },
                { name: that.details.ForcedSubDim[1].name, max: 10 },
                { name: that.details.ForcedSubDim[2].name, max: 10 }
              ],
              center: ["50%", "50%"],
              radius: "100%",
              startAngle: 210,
              splitNumber: 5,
              shape: "circle",
              name: {
                formatter: "",
                textStyle: {
                  color: "#354B70"
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
            data: [that.details.ForcedSubDim[0].name, that.details.ForcedSubDim[1].name, that.details.ForcedSubDim[2].name]
          },
          series: [
            {
              name: "",
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
                  value: [that.details.ForcedSubDim[0].thre, that.details.ForcedSubDim[1].thre, that.details.ForcedSubDim[2].thre],
                  name: "标准水平",
                  symbol: "circle",
                  symbolSize: 6,
                  areaStyle: {
                    opacity: 0.4,
                    color: {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(0, 117, 255, 0.9)"
                        },
                        {
                          offset: 1,
                          color: "rgba(0, 194, 255, 0.9)"
                        }
                      ],
                      globalCoord: false
                    }
                  },
                  lineStyle: {
                    width: 0
                  }
                },
                {
                  value: [that.details.ForcedSubDim[0].score, that.details.ForcedSubDim[1].score, that.details.ForcedSubDim[2].score],
                  name: "学生得分",
                  symbol: "circle",
                  symbolSize: 6,
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
                          color: "rgba(27, 236, 255, 0.9)"
                        },
                        {
                          offset: 1,
                          color: "rgba(0, 198, 255, 0.9)"
                        }
                      ],
                      globalCoord: false
                    }
                  },
                  lineStyle: {
                    width: 0
                  }
                }
              ]
            }
          ]
        });
      }, 500);
    }
  }
};
</script>

<style lang="less">
.detail_teacher_wrap {
  padding-bottom: 0.02rem;
  background: rgba(5, 157, 255, 0.05);
  .r_futi {
    position: absolute;
    left: 0.6rem;
    top: 9.36rem;
    z-index: 100;
    width: 1.6rem;
    .r_t_tab {
      border: 1px solid #c7e0ff;
      border-radius: 2px 2px 0px 0px;
      padding-top: 0.18rem;
      background: #f6fcff;
      img {
        display: block;
        width: 0.51rem;
        height: 0.51rem;
        margin: 0 auto;
      }
      span {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 0.2rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 1;
        padding: 0.13rem 0 0.18rem;
      }
    }
    .r_t_tab:last-child {
      border: 1px solid #c7e0ff;
      border-bottom: 1px solid #c7e0ff;
      border-top: 0;
      border-radius: 0px 0px 2px 2px;
    }
    .r_t_b0 {
      border-bottom: 0;
    }
    .r_t_tab_act1 {
      color: #006cff;
      border-color: #0090ff;
      background: rgba(255, 255, 255, 0.08);
    }
    .r_t_tab_act2 {
      color: #006cff;
      background: rgba(255, 255, 255, 0.08);
      border-top: 1px solid !important;
      border-color: #0090ff !important;
    }
  }
  .r_futi_fix {
    position: fixed;
    top: 1.9rem;
  }
  .dt_header {
    width: 100%;
    height: 0.6rem;
    background: #f7fbff;
    display: flex;
    justify-content: center;
    .dt_h_box {
      width: 12rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 0.16rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #0086ff;
      .dt_download {
        width: 1.1rem;
        height: 0.34rem;
        background: linear-gradient(263deg, #0075ff, #00c2ff);
        box-shadow: 0 0.03rem 0.18rem 0 rgba(62, 150, 253, 0.19);
        border-radius: 0.03rem;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.26rem;
      }
    }
  }
  .dt_top_bg {
    width: 100%;
    height: 5.9rem;
    position: relative;
    .dttb_tips{
      position: absolute;
      margin: auto;
      top: 0.25rem;
      left: 50%;
      margin-left: 0;
      padding: 0 0.21rem;
      height: 0.42rem;
      display: flex;
      align-items: center;
      background: rgba(255, 227, 251, 0.12);
      border: 0.01rem solid #FFE7F7;
      box-shadow: 0px 0.13rem 0.43rem 0px rgba(238, 93, 87, 0.1);
      border-radius: 0.02rem;
      img{
        margin:0 0.05rem 0 0.16rem;
        width: 0.19rem;
        height: 0.22rem;
      }
      span{
        font-size: 0.18rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFF7F6;
      }
    }
    .dttb_txt {
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.9);
      width: 8.97rem;
      text-align: left;
      position: absolute;
      margin: auto;
      top: 1.1rem;
      bottom: 0;
      right: 0;
      left: 0;
      h1 {
        font-size: 0.36rem;
        line-height: 1;
        margin: 0;
        padding: 0;
        margin-bottom: 0.28rem;
      }
      p {
        text-indent: 0.2rem;
        font-size: 0.2rem;
        line-height: 0.32rem;
        margin-bottom: 0.18rem;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
    .dt_person {
      position: absolute;
      margin: auto;
      top: 4.96rem;
      left: 0;
      right: 0;
      width: 12rem;
      height: 1.8rem;
      background: #ffffff;
      box-shadow: 0 0.13rem 0.43rem 0 rgba(70, 101, 135, 0.1);
      border-radius: 0.04rem;
      display: flex;
      align-items: center;
      .dtp_photo {
        width: 1.48rem;
        height: 1.48rem;
        margin-left: 0.2rem;
        margin-right: 0.1rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .dtp_main {
        flex: 1;
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            padding: 0.08rem 0;
            text-align: left;
            display: flex;
            align-items: center;
            img {
              margin-right: 0.08rem;
            }
            img.dt_per1 {
              width: 0.16rem;
              height: 0.17rem;
            }
            img.dt_per2 {
              width: 0.19rem;
              height: 0.16rem;
            }
            img.dt_per3 {
              width: 0.15rem;
              height: 0.16rem;
            }
            img.dt_per4 {
              width: 0.17rem;
              height: 0.17rem;
            }
            img.dt_per5 {
              width: 0.18rem;
              height: 0.18rem;
            }
            img.dt_per6 {
              width: 0.18rem;
              height: 0.18rem;
            }
            img.dt_per7 {
              width: 0.17rem;
              height: 0.14rem;
            }
            img.dt_per8 {
              width: 0.16rem;
              height: 0.17rem;
            }
            span {
              font-size: 0.16rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: #354b70;
            }
            .dt_blod {
              font-weight: 600;
            }
          }
        }
      }
    }
  }
  .dt_mains {
    width: 12rem;
    margin: 0 auto;
    padding-top: 0.86rem;

    .dtm_title {
      width: 1.88rem;
      height: 0.34rem;
      margin: 0.82rem auto 0.62rem;
      line-height: 0.34rem;
      text-align: center;
      font-size: 0.2rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      background: url("../../assets/images/report/title.png") no-repeat center;
      overflow: hidden;
      background-size: 100%;
    }
    .dtm_contain {
      display: flex;
      justify-content: space-between;
      text-align: left;
      position: relative;
      .dr_review {
        position: absolute;
        right: 0;
        top: -0.52rem;
        width: 1.26rem;
        line-height: 0.36rem;
        box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
        border-radius: 0.04rem;
        background: linear-gradient(0deg, #0075ff, #00c2ff);
        padding: 1px;
        overflow: hidden;
        .dr_bok {
          background: #ffffff;
          border-radius: 0.04rem;
        }
        span {
          text-align: center;
          display: block;
          border-radius: 0.04rem;
          height: 100%;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #006cff;
          line-height: 0.36rem;
          font-size: 0.16rem;
          background: rgba(5, 157, 255, 0.05);
        }
      }
      .dtmc_left {
        width: 3.62rem;
        border-radius: 0.04rem;
        background: #ffffff;
        overflow: hidden;
        .dtmcl_tle {
          display: flex;
          align-items: center;
          height: 0.6rem;
          background: linear-gradient(
            90deg,
            rgba(5, 157, 255, 0.7),
            rgba(49, 204, 255, 0.7)
          );
          font-size: 0.22rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
          img {
            width: 0.3rem;
            height: 0.3rem;
            margin-right: 0.1rem;
            margin-left: 0.24rem;
          }
        }
        .dtmcl_chart {
          position: relative;
          .my_chart {
            width: 1.9rem;
            height: 1.9rem;
            margin: 0 auto;
          }
          .c_o_my_txt {
            position: absolute;
            width: 2rem;
            text-align: center;
            height: 0.28rem;
            line-height: 0.28rem;
            font-size: 0.18rem;
            margin: auto;
            top: 0.72rem;
            left: 0;
            right: 0;
          }
          .c_o_my_num {
            position: absolute;
            width: 2rem;
            text-align: center;
            height: 0.28rem;
            line-height: 0.28rem;
            font-size: 0.22rem;
            font-weight: 500;
            margin: auto;
            top: 0.96rem;
            color: #00c0ff;
            left: 0;
            right: 0;
          }
          .c_red {
            color: #fe5fb8;
          }
        }
        .dtmcl_du {
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 0.26rem;
            height: 0.26rem;
            margin-right: 0.06rem;
          }
          span {
            font-size: 0.18rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: #5b6c89;
            line-height: 1;
          }
          .dtmcl_tx {
            color: #00c0ff;
          }
        }
        .dtmcl_txt {
          margin: 0.1rem auto 0.2rem;
          width: 3.2rem;
          font-size: 0.16rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #354b70;
          line-height: 0.3rem;
        }
      }
      .dtmc_right {
        width: 8.14rem;
        background: #ffffff;
        border-radius: 0.04rem;
        overflow: hidden;

        .dtmcl_tle {
          display: flex;
          align-items: center;
          height: 0.6rem;
          background: linear-gradient(
            90deg,
            rgba(186, 191, 255, 0.78),
            rgba(114, 121, 255, 0.78)
          );
          font-size: 0.22rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 0.1rem;
          span {
            text-align: center;
          }
          span:nth-child(1) {
            width: 1.66rem;
          }
          span:nth-child(2) {
            width: 1.84rem;
          }
          span:nth-child(3) {
            width: 1.84rem;
          }
          span:nth-child(4) {
            width: 2.8rem;
          }
        }
        .dtmcr_ul {
          display: flex;
          align-items: center;
          height: 0.6rem;
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #5b6c89;
          li {
            text-align: center;
            display: flex;
            justify-content: center;
            .dr_li1,
            .dr_li2,
            .dr_li3 {
              width: 0.88rem;
              line-height: 0.32rem;
              background: linear-gradient(0deg, #fe5fb8, #ff83df);
              border-radius: 0.16rem;
              padding: 1px;
              overflow: hidden;
              span {
                display: block;
                border-radius: 0.16rem;
                color: #fe5fb8;
                height: 100%;
                line-height: 0.32rem;
                font-size: 0.18rem;
                font-family: PingFang SC;
                font-weight: 400;
                background: linear-gradient(
                  94deg,
                  rgba(255, 119, 195, 0.12),
                  rgba(255, 160, 230, 0.12)
                );
              }
            }
            .dr_li2 {
              background: linear-gradient(0deg, #a6acff, #7279ff);
              span {
                color: #6671ff;
                background: linear-gradient(
                  94deg,
                  rgba(186, 191, 255, 0.12),
                  rgba(114, 121, 255, 0.12)
                );
              }
            }
            .dr_li3 {
              background: linear-gradient(0deg, #0075ff, #00c2ff);
              span {
                color: #006cff;
                background: linear-gradient(
                  94deg,
                  rgba(5, 157, 255, 0.05),
                  rgba(0, 192, 255, 0.05)
                );
              }
            }
            .dr_bok {
              background: #ffffff;
              border-radius: 0.16rem;
            }
          }
          li:nth-child(1) {
            width: 1.66rem;
          }
          li:nth-child(2) {
            width: 1.84rem;
          }
          li:nth-child(3) {
            width: 1.84rem;
          }
          li:nth-child(4) {
            width: 2.8rem;
          }
        }
        .dtmcr_bt {
          margin-top: 0.2rem;
          margin-bottom: 0.3rem;
          padding: 0 0.58rem;
          .db_img {
            display: flex;
            align-items: center;
            font-size: 0.18rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: #6671ff;
            margin-bottom: 0.1rem;
            img {
              width: 0.28rem;
              height: 0.28rem;
              margin-right: 0.08rem;
            }
          }
          p {
            font-size: 0.16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #354b70;
          }
        }
      }
    }
    .dtm_sys {
      height: 7rem;
      .el-carousel__container {
        min-height: 6.8rem;
        padding-bottom: 0.2rem;
      }
      .el-carousel__item h3 {
        font-size: 0.22rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
        margin: 0;
      }
      .el-carousel__item {
        background-color: #ffffff;
        .el-carousel__mask {
          background-color: rgba(70, 101, 135, 0.14);
        }
      }
      .is-active {
        background-color: #ffffff;
        .el-carousel__mask {
          background-color: #ffffff;
        }
      }
      .el-carousel__indicators--outside {
        display: none;
      }
      .el-carousel--horizontal {
        overflow: inherit;
      }
      .el-carousel__arrow {
        width: 0.68rem;
        height: 0.68rem;
        background: #ffffff;
        box-shadow: 0px 13px 43px 0px rgba(70, 101, 135, 0.14);
        border-radius: 50%;
        i {
          font-size: 0.26rem;
          color: #0075ff;
        }
      }
      .el-carousel__arrow--left {
        left: -0.9rem;
      }
      .el-carousel__arrow--right {
        right: -0.9rem;
      }
      .dtms_box {
        .dtmsb_tle {
          height: 1.5rem;
          h3 {
            font-size: 0.22rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #ffffff;
            padding-top: 0.21rem;
            padding-bottom: 0.13rem;
            line-height: 1;
          }
          .dtt_res {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 0.96rem;
            font-size: 0.2rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #ffffff;
            .dtt_img {
              position: relative;
              display: flex;
              align-items: center;
              margin-left: 0.2rem;
              span {
                font-size: 0.2rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #ffffff;
              }
              img {
                width: 4.18rem;
                height: 0.2rem;
              }
              .dttr_btn {
                width: 0.59rem;
                height: 0.59rem;
                position: absolute;
                margin: auto;
                margin-left: -0.3rem;
                left: 0;
                bottom: 0;
                top: 0;
              }
              .dttr_lv {
                position: absolute;
                margin: auto;
                margin-left: -0.3rem;
                left: 0;
                bottom: 0;
                top: 0.5rem;
                width: 0.59rem;
                height: 0.59rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.18rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #ffffff;
              }
              .dttr_gd {
                position: absolute;
                margin: auto;
                margin-left: -0.3rem;
                left: 0;
                bottom: 0;
                top: -0.58rem;
                width: 0.59rem;
                height: 0.5rem;
                background: url("../../assets/images/report/top_tips.png")
                  no-repeat center;
                background-size: 100%;
                font-size: 0.15rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                line-height: 0.34rem;
                color: #ff55b6;
                display: flex;
                justify-content: center;
              }
            }
          }
        }

        .dtmsb_tar {
          width: 5.25rem;
          height: 2.00rem;
          margin: 0.7rem auto 0.5rem;
          position: relative;
          .top_top{
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            top: -0.4rem;
            .tt_txt{
              font-size: 0.16rem;
              font-family: PingFang SC;
              font-weight: 400;
              color: #354B70;
              line-height: 0.2rem;
              display: block;
            }
          }
          .bottom_left{
            position: absolute;
            margin: auto;
            left: 0.2rem;
            right: 0;
            bottom: 0.34rem;
            margin-left: 2.4rem;
            .tt_txt{
              font-size: 0.16rem;
              font-family: PingFang SC;
              font-weight: 400;
              color: #354B70;
              line-height: 0.2rem;
              display: block;
            }
          }
          .bottom_right{
            position: absolute;
            margin: auto;
            left: 0;
            right: 0.2rem;
            bottom: 0.34rem;
            margin-right: 2.4rem;
            .tt_txt{
              font-size: 0.16rem;
              font-family: PingFang SC;
              font-weight: 400;
              color: #354B70;
              line-height: 0.2rem;
              display: block;
            }
          }
          .demsb_tool1{
            position:absolute;
            margin: auto;
            top: -0.16rem;
            left: 0;
            right: 0;
            margin-right: 1.7rem;
            width: 1.2rem;
            min-width: 90px;
            height:0.52rem;
            background:url(../../assets/images/report/exmaple.png) no-repeat center;
            background-size:100% 100%;
            text-align: left;
            display: flex;
            flex-wrap: wrap;

            .demsb_score{
              font-size: 0.14rem;
              padding-left: 0.08rem;
              line-height: 0.2rem;
              color: #7486AF;
              span{
                margin-left: -0.06rem;
                color: #00C0FF;
              }
            }
            .demsb_score1{
              span{
                margin-left: -0.06rem;
                color: #016CFF;
              }
            }
            .demsb_score:first-child{
              margin-top: 0.06rem;
            }
          }
          .demsb_tool{
            position:absolute;
            margin: auto;
            top: -0.16rem;
            left: 0;
            right: 0;
            margin-left: 3.0rem;
            width: 1.2rem;
            min-width: 90px;
            height:0.52rem;
            background:url(../../assets/images/report/exmaple2.png) no-repeat center;
            background-size:100% 100%;
            text-align: left;
            display: flex;
            flex-wrap: wrap;

            .demsb_score{
              font-size: 0.14rem;
              padding-left: 0.18rem;
              line-height: 0.2rem;
              color: #7486AF;
              span{
                margin-left: -0.06rem;
                color: #00C0FF;
              }
            }
            .demsb_score1{
              span{
                margin-left: -0.06rem;
                color: #016CFF;
              }
            }
            .demsb_score:first-child{
              margin-top: 0.06rem;
            }
          }
          .myChartPies1,
          .myChartPies2,
          .myChartPies3 {
            width: 5.25rem;
            height: 2.00rem;
          }
          ul {
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            bottom: -0.32rem;
            display: flex;
            justify-content: center;
            align-items: center;
            li {
              padding: 0 0.2rem;
              display: flex;
              align-items: center;
              span {
                font-size: 0.16rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #7786ac;
              }
              span:first-child {
                margin-right: 0.06rem;
                width: 0.08rem;
                height: 0.08rem;
                background: linear-gradient(174deg, #1becff 0%, #00c6ff 98%);
                border-radius: 50%;
              }
            }
            li:last-child {
              span:first-child {
                background: linear-gradient(
                  0deg,
                  rgba(0, 117, 255, 0.99),
                  rgba(0, 194, 255, 0.99)
                );
              }
            }
          }
        }
        .dtmcr_bts {
          padding: 0 0.58rem;
          margin-bottom: 0.2rem;
          .db_img {
            display: flex;
            align-items: center;
            font-size: 0.18rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: #6671ff;
            margin-bottom: 0.1rem;
            img {
              width: 0.28rem;
              height: 0.28rem;
              margin-right: 0.1rem;
            }
          }
          p {
            text-align: left;
            font-size: 0.16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 0.24rem;
            margin-bottom: 0.04rem;
            color: #354b70;
            display: flex;
            align-items: flex-start;
            span {
              margin-top: 0.05rem;
              margin-right: 0.1rem;
              width: 0.04rem;
              height: 0.16rem;
              background: linear-gradient(179deg, #059dff 0%, #00c0ff 100%);
            }
          }
        }
      }
    }
    .guide_box {
      margin-bottom: 1.04rem;
      .gb_main {
        width: 100%;
        border-radius: 0.04rem;
        background: #ffffff;
        overflow: hidden;
        .dtmcl_tle {
          display: flex;
          align-items: center;
          height: 0.6rem;
          background: linear-gradient(
            90deg,
            rgba(5, 157, 255, 0.7),
            rgba(49, 204, 255, 0.7)
          );
          font-size: 0.22rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
          img {
            width: 0.3rem;
            height: 0.25rem;
            margin-right: 0.1rem;
            margin-left: 0.24rem;
          }
        }
        .gb_contain {
          text-align: left;
          padding: 0.2rem 0.25rem;
          p {
            padding: 0.08rem 0;
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #354b70;
            span {
              color: #00c0ff;
            }
          }
          ul {
            li {
              display: flex;
              padding: 0.08rem 0;
              line-height: 0.24rem;
              span {
                margin-top: 0.04rem;
                margin-right: 0.1rem;
                text-align: center;
                line-height: 0.16rem;
                width: 0.16rem;
                height: 0.16rem;
                background: linear-gradient(177deg, #1becff, #00c6ff);
                border-radius: 50%;
                font-size: 0.12rem;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #ffffff;
              }
              p {
                padding: 0;
                flex: 1;
                display: flex;
                flex-wrap: wrap;
              }
            }
          }
        }
      }
    }
  }
}
</style>
