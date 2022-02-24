<template>
  <div class="review_teacher_wrap" ref="bodys">
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
        <span>回到报告主页</span>
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
          <span>图片回顾</span>
        </div>
        <div
          :class="['r_t_tab', { r_t_tab_act2: topAct == 2 }]"
          @click="trendTab(2)"
        >
          <img src="../../assets/images/report/part5.png" alt="" />
          <span>作品信息统计</span>
        </div>
        <div
          :class="['r_t_tab', { r_t_tab_act2: topAct == 3 }]"
          @click="trendTab(3)"
        >
          <img src="../../assets/images/report/part6.png" alt="" />
          <span>沙具统计</span>
        </div>
        <div
          :class="['r_t_tab', { r_t_tab_act2: topAct == 4 }]"
          @click="trendTab(4)"
        >
          <img src="../../assets/images/report/part7.png" alt="" />
          <span>附录</span>
        </div>
      </div>
    </div>
    <div class="dt_header">
      <div class="dt_h_box">
        <span>数据更新时间：{{ details.reportTime }}</span>
        <div v-if="part44" class="dt_download" @click="personExport">下载报告</div>
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
    <div class="dt_mains">
      <div class="dtm_title" ref="parts1">
        图片回顾
      </div>
      <div class="dtm_img_sys">
        <el-carousel
          :interval="40000"
          arrow="always"
          type="card"
          height="4.08rem"
        >
          <el-carousel-item v-for="item in imgList" :key="item.name">
            <div class="dtm_img_box">
              <img
                class="dtmi_img"
                :src="item.img"
                alt=""
              />
              <div class="dtmi_txt">{{item.name}}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="dtm_title" ref="parts2">
        作品信息统计
      </div>
      <div class="dtm_xls" v-if="reviewData.workInfo">
        <div class="dtmx_li">
          <div class="dtmxl_head">作品名称</div>
          <div class="dtmxl_body">{{reviewData.workInfo.workName}}</div>
          <div class="dtmxl_head">自我像</div>
          <div class="dtmxl_body">{{reviewData.workInfo.representSand}}</div>
        </div>
        <div class="dtmx_li">
          <div class="dtmxl_head">最重要的沙具</div>
          <div class="dtmxl_body">{{reviewData.workInfo.importantSand}}</div>
          <div class="dtmxl_head">制作次数</div>
          <div class="dtmxl_body">第<span>{{reviewData.workInfo.time}}</span>次</div>
        </div>
        <div class="dtmx_li">
          <div class="dtmxl_head">满意程度</div>
          <div class="dtmxl_body"><span>{{reviewData.workInfo.satisfaction}}</span>分</div>
          <div class="dtmxl_head">制作用时</div>
          <div class="dtmxl_body">{{reviewData.workInfo.operationTime}}</div>
        </div>
        <div class="dtmx_li">
          <div class="dtmxl_head">作品场景</div>
          <div class="dtmxl_body">{{reviewData.workInfo.scene}}</div>
          <div class="dtmxl_head">沙具删除比例</div>
          <div class="dtmxl_body"><span>{{reviewData.workInfo.deleteScale}}</span>%</div>
        </div>

        <div class="dtmx_li dtmx_lis" v-if="reviewData.workInfo.themeInfo">
          <div class="dtmxl_head">主题统计</div>
          <div class="dtmxl_body">
            <div class="dtmxl_dl">
              <div class="dtmxl_dt">创伤主题</div>
              <div class="dtmxl_dd">{{reviewData.workInfo.themeInfo.traumaTheme}}</div>
              <div class="dtmxl_dds"><span>{{reviewData.workInfo.themeInfo.traumaNum}}</span>个</div>
            </div>
            <div class="dtmxl_dl">
              <div class="dtmxl_dt">治愈主题</div>
              <div class="dtmxl_dd">{{reviewData.workInfo.themeInfo.cureTheme != '' ? reviewData.workInfo.themeInfo.cureTheme : '/'}}</div>
              <div class="dtmxl_dds"><span>{{reviewData.workInfo.themeInfo.cureNum}}</span>个</div>
            </div>
          </div>
        </div>
      </div>
      <div class="dtm_title" ref="parts3">
        沙具统计
      </div>
      <div class="dtmt_tle">
        <img src="../../assets/images/report/dot.png" alt="" />
        <span>沙具使用数量分布</span>
        <img src="../../assets/images/report/dot.png" alt="" />
      </div>
      <div class="myChartZhu" ref="myChartZhu" id="myChartZhu"></div>
      <div class="dtmt_tle" style="margin:0.4rem auto 0.1rem">
        <img src="../../assets/images/report/dot.png" alt="" />
        <span>沙具使用时长占比</span>
        <img src="../../assets/images/report/dot.png" alt="" />
      </div>
      <div class="myChartRose" ref="myChartRose" id="myChartRose"></div>
      <div class="dtm_title" style="margin-top:0.2rem;" ref="parts4">
        附录
      </div>
      <template>
        <el-table border :data="actionInfo">
          <el-table-column prop="actionId" label="操作序号"> </el-table-column>
          <el-table-column prop="time" label="操作时间"> </el-table-column>
          <el-table-column prop="name" label="沙具名称"> </el-table-column>
          <el-table-column prop="type" label="沙具类别"> </el-table-column>
          <el-table-column prop="operation" label="操作内容">
          </el-table-column>
        </el-table>
      </template>
      <div class="table_page">
        <div class="page_total">
          共 <span>{{ total }}</span> 条 , 第
          <span>{{ currentPage }}/{{ pageNum }}</span> 页
        </div>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="limit"
          layout="prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
    <personReport v-if="getPersonFlag" :row="details" :rowr="reviewData" :rows="sandInfo" :row3="imgList" :row4="sandUseNumInfoName" :row5="sandUseNumInfoNum"></personReport>
  </div>
</template>

<script>
import personReport from "../Model/ModelReport.vue";
import { mapGetters, mapMutations } from "vuex";
import echarts from "../../assets/js/echarts";
import Url from "@/assets/js/url.js";
var fuluList = []
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
  components: {
    personReport
  },
  data() {
    return {
      part11: false,
      part22: false,
      part33: false,
      part44: false,
      limit: 30,
      total: 0,
      pageNum: 1,
      currentPage: 1,
      sandInfo: [],
      actionInfo: [],
      sandUseNumInfoName: [],
      sandUseNumInfoNum: [],
      details: {},
      reviewData: {},
      part0: "",
      part1: "",
      part2: "",
      part3: "",
      part4: "",
      scrollYs: 0,
      topAct: 1,
      topBack: false,
      tableData: [
        {
          id: 1,
          type: "植物类",
          name: "椰树",
          time: "785.08",
          delete: 1
        },
        {
          id: 1,
          type: "植物类",
          name: "椰树",
          time: "785.08",
          delete: 0
        },
        {
          id: 1,
          type: "植物类",
          name: "椰树",
          time: "785.08",
          delete: 1
        }
      ],
      myChart: "",
      myChartRose: "",
      myChartZhu: "",
      myChartPies1: "",
      myChartPies2: "",
      myChartPies3: "",
      myTxtFlag: false,
      imgList: [
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
  computed: {
    ...mapGetters(["getPersonFlag"]),
    bindmodel () {
      const { part11, part22, part33 } = this
      return {
        part11,
        part22,
        part33
      }
    }
  },
  watch: {
    bindmodel: {
      handler: function (newVal) {
        // console.log(newVal)
        this.part11 = newVal.part11;
        this.part22 = newVal.part22;
        this.part33 = newVal.part33;
        if (this.part11 && this.part22 && this.part33) {
          this.part11 = false;
          this.part22 = false;
          this.part33 = false;
          this.part44 = true;
        } else {
          // console.log('还补充下')
        }
      }
    }
  },
  mounted() {
    this.part0 = this.$refs.parts0.offsetTop;
    this.part1 = this.$refs.parts1.offsetTop;
    this.part2 = this.$refs.parts2.offsetTop;
    this.part3 = this.$refs.parts3.offsetTop;
    this.part4 = this.$refs.parts4.offsetTop;
    this.listenerFunction();
    // 报告数据
    this.reportId = this.$route.params.userID;
    this.getDetail(1);
    setTimeout(() => {
      this.myTxtFlag = true;
    }, 1100);
    window.addEventListener("resize", () => {
      setTimeout(() => {
        this.myTxtFlag = false;
        setTimeout(() => {
          this.myTxtFlag = true;
        }, 500);
        this.myChartRose.resize();
        this.myChartZhu.resize();
      }, 100);
    });
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.listenerFunction);
  },
  methods: {
    ...mapMutations(["setPersonFlag"]),
    pagination(pageNo, pageSize, array) {
      var offset = (pageNo - 1) * pageSize;
      return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.actionInfo = this.pagination(val, this.limit, fuluList)
      // this.getDetail(val)
    },
    personExport() {
      this.setPersonFlag(true)
      // console.log(this.reviewData)
      // console.log(this.sandInfo)
      // console.log(this.imgList)
      // console.log(this.sandUseNumInfoName)
      // console.log(this.sandUseNumInfoNum)
    },
    toHHmmss(data) {
      var s;
      var hours = parseInt((data % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = parseInt((data % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.round((data % (1000 * 60)) / 1000);
      // console.log(seconds)
      s = (hours < 10 ? ('0' + hours) : hours) + ':' + (minutes < 10 ? ('0' + minutes) : minutes) + ':' + (seconds < 10 ? ('0' + seconds) : seconds);
      return s;
    },
    // 获取报告详情
    getDetail(page) {
      let that = this;
      var param = {
        reportID: that.reportId
      };
      this.$http
        .get(Url + "/aimw/report/appendix", {
          params: param
        })
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            if (data.data.actionInfoRet == 'null') {
              data.data.actionInfoRet = '[]';
            }
            console.log(data.data.actionInfoRet)
            fuluList = JSON.parse(data.data.actionInfoRet);
            that.total = fuluList.length;
            that.actionInfo = this.pagination(1, this.limit, fuluList);
            that.pageNum = fuluList.length == 0 ? 1 : Math.ceil(fuluList.length / that.limit);
            if (data.data.sandInfoRet.sandInfo) {
              that.sandInfo = data.data.sandInfoRet.sandInfo;
            } else {
              that.sandInfo = [];
            }
            this.part11 = true;
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
            // console.log(oldWarning)
            // console.log(data.data.whatWarn)
            data.data.warningNum = data.data.whatWarn.length
            data.data.suggestion = data.data.suggestion.split('|||')
            let topArr = []
            let duanArr = []
            for (let i in data.data.suggestion) {
              if (data.data.suggestion[i].indexOf("针对") != -1) {
                data.data.suggestion[i] = data.data.suggestion[i].split("@@");
              }
            }
            // console.log(data.data.suggestion);

            let warningInfo = data.data.reportWarningInfo;
            let depressionColorStr = "";
            let depressionLevelStr = "";
            let depressionBgStr = "";
            let depressionImgStr = "";

            if (warningInfo.depressionLevel == 0) {
              depressionColorStr = "#006CFF";
              // depressionLevelStr = "低";
              depressionBgStr =
                "linear-gradient(90deg, rgba(5, 157, 255, 0.7), rgba(49, 204, 255, 0.7))";
              depressionImgStr = "1";
            } else if (warningInfo.depressionLevel == 1) {
              depressionColorStr = "#6671FF";
              // depressionLevelStr = "中";
              depressionBgStr =
                "linear-gradient(90deg, rgba(186, 191, 255, 0.78), rgba(114, 121, 255, 0.78))";
              depressionImgStr = "2";
            } else if (warningInfo.depressionLevel == 2) {
              depressionColorStr = "#D674FF";
              // depressionLevelStr = "高";
              depressionBgStr =
                "linear-gradient(0deg, rgba(214,116,255, 0.7), rgba(217,162,255, 0.7))";
              depressionImgStr = "3";
            } else if (warningInfo.depressionLevel == 3) {
              depressionColorStr = "#FE5FB8";
              // depressionLevelStr = "高";
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
              // anxietyLevelStr = "低";
              anxietyBgStr =
                "linear-gradient(90deg, rgba(5, 157, 255, 0.7), rgba(49, 204, 255, 0.7))";
              anxietyImgStr = "1";
            } else if (warningInfo.anxietyLevel == 1) {
              anxietyColorStr = "#6671FF";
              // anxietyLevelStr = "中";
              anxietyBgStr =
                "linear-gradient(90deg, rgba(186, 191, 255, 0.78), rgba(114, 121, 255, 0.78))";
              anxietyImgStr = "2";
            } else if (warningInfo.anxietyLevel == 2) {
              anxietyColorStr = "#D674FF";
              // anxietyLevelStr = "高";
              anxietyBgStr =
                "linear-gradient(0deg, rgba(214,116,255, 0.7), rgba(217,162,255, 0.7))";
              anxietyImgStr = "3";
            } else if (warningInfo.anxietyLevel == 3) {
              anxietyColorStr = "#FE5FB8";
              // anxietyLevelStr = "高";
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
              // forcedLevelStr = "低";
              forcedBgStr =
                "linear-gradient(90deg, rgba(5, 157, 255, 0.7), rgba(49, 204, 255, 0.7))";
              forcedImgStr = "1";
            } else if (warningInfo.forcedLevel == 1) {
              forcedColorStr = "#6671FF";
              // forcedLevelStr = "中";
              forcedBgStr =
                "linear-gradient(90deg, rgba(186, 191, 255, 0.78), rgba(114, 121, 255, 0.78))";
              forcedImgStr = "2";
            } else if (warningInfo.forcedLevel == 2) {
              forcedColorStr = "#D674FF";
              // forcedLevelStr = "高";
              forcedBgStr =
                "linear-gradient(0deg, rgba(214,116,255, 0.7), rgba(217,162,255, 0.7))";
              forcedImgStr = "3";
            } else if (warningInfo.forcedLevel == 3) {
              forcedColorStr = "#FE5FB8";
              // forcedLevelStr = "高";
              forcedBgStr =
                "linear-gradient(90deg, rgba(255, 119, 195, 0.8), rgba(255, 182, 236, 0.8))";
              forcedImgStr = "4";
            }
            if (data.data.depressionDim) {
              // data.data.depressionDim = data.data.depressionDim
              //   .split(/[(\r\n)\r\n]+/)
              //   .filter(function(s) {
              //     return s && s.trim();
              //   });
              data.data.depressionDim = data.data.depressionDim.split('@@')
              // console.log(data.data.depressionDim);
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
            // console.log(depArr);
            if (data.data.anxietyDim) {
              // data.data.anxietyDim = data.data.anxietyDim
              //   .split(/[(\r\n)\r\n]+/)
              //   .filter(function(s) {
              //     return s && s.trim();
              //   });
              data.data.anxietyDim = data.data.anxietyDim.split('@@')
              // console.log(data.data.anxietyDim);
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
            // console.log(anxArr);
            if (data.data.forcedDim) {
              // data.data.forcedDim = data.data.forcedDim
              //   .split(/[(\r\n)\r\n]+/)
              //   .filter(function(s) {
              //     return s && s.trim();
              //   });
              data.data.forcedDim = data.data.forcedDim.split('@@')
              // console.log(data.data.forcedDim);
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
            // console.log(forArr);
            this.sysList = [
              {
                title: "抑郁",
                grade: warningInfo.depressionScore,
                gradep: Number(warningInfo.depressionScore) * 10 + "%",
                level: warningInfo.depressionResult,
                txtColor: depressionColorStr,
                bg: depressionBgStr,
                imgType: depressionImgStr,
                list: depArr
              },
              {
                title: "焦虑",
                grade: warningInfo.anxietyScore,
                gradep: Number(warningInfo.anxietyScore) * 10 + "%",
                level: warningInfo.anxietyResult,
                txtColor: anxietyColorStr,
                bg: anxietyBgStr,
                imgType: anxietyImgStr,
                list: anxArr
              },
              {
                title: "强迫",
                grade: warningInfo.forcedScore,
                gradep: Number(warningInfo.forcedScore) * 10 + "%",
                level: warningInfo.forcedResult,
                txtColor: forcedColorStr,
                bg: forcedBgStr,
                imgType: forcedImgStr,
                list: forArr
              }
            ];
            data.data.sysList = this.sysList;
            // console.log(this.sysList);
            // console.log(data.data)
            that.details = that.justInfo(data.data);
            // console.log(that.details)
            // that.myChartInit();
            that.part33 = true
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
      this.$http
        .get(Url + "/aimw/report/reportReview", {
          params: param
        })
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            data.data.workInfo.operationTime = this.toHHmmss(data.data.workInfo.operationTime * 1000)
            that.reviewData = data.data
            that.imgList = [
              {
                name: '鸟瞰图',
                img: "data:image;base64," + data.data.workView.eastView
              },
              {
                name: '西侧俯身45度视图',
                img: "data:image;base64," + data.data.workView.eastView
              },
              {
                name: '东侧俯身45度视图',
                img: "data:image;base64," + data.data.workView.westView
              },
              {
                name: '操作者视图',
                img: "data:image;base64," + data.data.workView.operatorView
              }
            ]
            let nameArr = []
            let numArr = []
            for (let i in data.data.sandUseNumInfo) {
              nameArr.push(data.data.sandUseNumInfo[i].sandName)
              numArr.push(data.data.sandUseNumInfo[i].num)
            }
            that.sandUseNumInfoName = nameArr
            that.sandUseNumInfoNum = numArr
            // console.log(that.sandUseNumInfoName)
            // console.log(that.sandUseNumInfoNum)
            that.myChartInit();
            that.part22 = true
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
      if (type == 4) {
        window.scrollTo(0, this.part4 - 40);
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
      if (this.part3 < this.scrollYs && this.scrollYs < this.part4) {
        this.topAct = 4;
      }
    },
    toReview() {
      // console.log(1111);
      this.$router.push({
        name: "detailsreport",
        params: { userID: this.reportId }
      });
    },
    myChartInit() {
      var theIndex = -1;
      var clolor = [];
      var that = this;
      this.myChartRose = echarts.init(this.$refs.myChartRose);
      // console.log(this.myChartRose);
      this.myChartRose.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [30, "70%"],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              normal: {
                color: function(params) {
                  theIndex++;
                  var colorList = [
                    {
                      c1: "#97CDFF",
                      c2: "#C4ECFF"
                    },
                    {
                      c1: "#FFD356",
                      c2: "#FFEB8F"
                    },
                    {
                      c1: "#FE8986",
                      c2: "#FEAD7E"
                    },
                    {
                      c1: "#FC4FB0",
                      c2: "#FD76DA"
                    },
                    {
                      c1: "#5FF0F9",
                      c2: "#1BF6CA"
                    },
                    {
                      c1: "#00B6F0",
                      c2: "#00EAFE"
                    },
                    {
                      c1: "#7279FF",
                      c2: "#BABFFF"
                    },
                    {
                      c1: "#0075FF",
                      c2: "#00C2FF"
                    }
                  ];
                  var userIndex = theIndex % colorList.length;
                  return new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: colorList[userIndex].c1
                    },
                    {
                      offset: 1,
                      color: colorList[userIndex].c2
                    }
                  ]);
                }
              }
            },
            labelLine: {
              normal: {
                smooth: 0,
                length: 10,
                length2: 50
              }
            },
            data: [
              {
                value: that.reviewData.sandUseTimeInfo[0].num,
                name: that.reviewData.sandUseTimeInfo[0].sandTypeName,
                label: {
                  formatter: "{b} {a|{d}%}",
                  rich: {
                    a: {
                      color: "#79C2FF"
                    }
                  }
                }
              },
              {
                value: that.reviewData.sandUseTimeInfo[1].num,
                name: that.reviewData.sandUseTimeInfo[1].sandTypeName,
                label: {
                  formatter: "{b} {a|{d}%}",
                  rich: {
                    a: {
                      color: "#FBD356"
                    }
                  }
                }
              },
              {
                value: that.reviewData.sandUseTimeInfo[2].num,
                name: that.reviewData.sandUseTimeInfo[2].sandTypeName,
                label: {
                  formatter: "{b} {a|{d}%}",
                  rich: {
                    a: {
                      color: "#FF9E8C"
                    }
                  }
                }
              },
              {
                value: that.reviewData.sandUseTimeInfo[3].num,
                name: that.reviewData.sandUseTimeInfo[3].sandTypeName,
                label: {
                  formatter: "{b} {a|{d}%}",
                  rich: {
                    a: {
                      color: "#FE5FB8"
                    }
                  }
                }
              },
              {
                value: that.reviewData.sandUseTimeInfo[4].num,
                name: that.reviewData.sandUseTimeInfo[4].sandTypeName,
                label: {
                  formatter: "{b} {a|{d}%}",
                  rich: {
                    a: {
                      color: "#40E6F8"
                    }
                  }
                }
              },
              {
                value: that.reviewData.sandUseTimeInfo[5].num,
                name: that.reviewData.sandUseTimeInfo[5].sandTypeName,
                label: {
                  formatter: "{b} {a|{d}%}",
                  rich: {
                    a: {
                      color: "#00C0FF"
                    }
                  }
                }
              },
              {
                value: that.reviewData.sandUseTimeInfo[6].num,
                name: that.reviewData.sandUseTimeInfo[6].sandTypeName,
                label: {
                  formatter: "{b} {a|{d}%}",
                  rich: {
                    a: {
                      color: "#6671FF"
                    }
                  }
                }
              },
              {
                value: that.reviewData.sandUseTimeInfo[7].num,
                name: that.reviewData.sandUseTimeInfo[7].sandTypeName,
                label: {
                  formatter: "{b} {a|{d}%}",
                  rich: {
                    a: {
                      color: "#006CFF"
                    }
                  }
                }
              }
            ]
          }
        ]
      });
      this.myChartZhu = echarts.init(this.$refs.myChartZhu);
      this.myChartZhu.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },

        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: that.sandUseNumInfoName,
            axisTick: {
              show: false,
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "16",
            itemStyle: {
              normal: {
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
            },
            data: that.sandUseNumInfoNum
          }
        ]
      });
    }
  }
};
</script>

<style lang="less">
.review_teacher_wrap {
  padding-bottom: 0.02rem;
  background: #ffffff;
  // background: rgba(5, 157, 255, 0.05);
  .r_futi {
    position: absolute;
    left: 0.6rem;
    top: 9.36rem;
    z-index: 100;
    width: 1.6rem;
    background: #ffffff;
    box-shadow: 0px 13px 43px 0px rgba(70, 101, 135, 0.1);
    .r_t_tab {
      border: 1px solid #c7e0ff;
      // border-bottom: 0;
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
    // margin-top: -2.44rem;
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
      // width: 4.4rem;
      padding: 0 0.21rem;
      height: 0.42rem;
      display: flex;
      align-items: center;
      background: rgba(255, 227, 251, 0.12);
      border: 0.01rem solid #FFE7F7;
      box-shadow: 0px 0.13rem 0.43rem 0px rgba(238, 93, 87, 0.1);
      border-radius: 0.02rem;
      img{
        margin:0 0.05rem 0 0;
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
      top: 0.89rem;
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
    .dtmt_tle {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 0.22rem;
        height: 0.08rem;
      }
      span {
        margin: 0 0.1rem;
        font-size: 0.2rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #354b70;
      }
    }
    .myChartRose,
    .myChartZhu {
      margin: 0 auto;
      width: 12rem;
      height: 4rem;
    }
    .dtm_img_sys {
      height: 4.08rem;
      .el-carousel__container {
      }
      .el-carousel__item h3 {
        font-size: 0.22rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
        margin: 0;
      }
      .el-carousel__item {
        border-radius: 0.04rem;
        background-color: #ffffff;
        border: 0.01rem solid #c4ecff;
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
        .el-carousel__item--card{
          display: none;
        }
        .is-in-stage{
          display: block;
        }
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
      .dtm_img_box {
        height: 4.08rem;
        .dtmi_img {
          display: block;
          width: 6rem;
          height: 3.38rem;
        }
        .dtmi_txt {
          width: 100%;
          height: 0.7rem;
          line-height: 0.7rem;
          font-size: 0.2rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #51617d;
          // background: #ffffff;
        }
      }
    }
    .dtm_xls {
      width: 12rem;
      border: 0.01rem solid #e1e9ff;
      // height: 2.51rem;
      .dtmx_li {
        display: flex;

        height: 0.42rem;

        .dtmxl_head {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2.42rem;
          border-bottom: 0.01rem solid #e1e9ff;
          border-right: 0.01rem solid #e1e9ff;
          background: linear-gradient(
            0deg,
            rgba(196, 236, 255, 0.14) 0%,
            rgba(151, 205, 255, 0.14) 100%
          );
        }
        .dtmxl_body {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 3.57rem;
          border-bottom: 0.01rem solid #e1e9ff;
          border-right: 0.01rem solid #e1e9ff;
          span {
            color: #006cff;
          }
        }
        .dtmxl_body:last-child {
          border-right: 0;
        }
      }
      .dtmx_lis {
        height: 0.84rem;
        .dtmxl_head {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2.42rem;
          border-bottom: 0 !important;
          border-right: 0.01rem solid #e1e9ff;
          background: linear-gradient(
            0deg,
            rgba(196, 236, 255, 0.14) 0%,
            rgba(151, 205, 255, 0.14) 100%
          );
        }
        .dtmxl_body {
          display: block;
          flex: 1;
          border-bottom: 0 !important;
          border-right: 0.01rem solid #e1e9ff;
          .dtmxl_dl {
            height: 0.42rem;
            display: flex;

            .dtmxl_dt {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 1.52rem;
              height: 0.42rem;
              border-bottom: 0.01rem solid #e1e9ff;
              border-right: 0.01rem solid #e1e9ff;
              background: linear-gradient(
                0deg,
                rgba(196, 236, 255, 0.14) 0%,
                rgba(151, 205, 255, 0.14) 100%
              );
            }
            .dtmxl_dd {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 4.47rem;
              border-bottom: 0.01rem solid #e1e9ff;
              border-right: 0.01rem solid #e1e9ff;
            }

            .dtmxl_dds {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 3.57rem;
              border-bottom: 0.01rem solid #e1e9ff;
            }
          }
          .dtmxl_dl:last-child {
            .dtmxl_dt {
              border-bottom: 0 !important;
            }
            .dtmxl_dd {
              border-bottom: 0 !important;
            }
            .dtmxl_dds {
              border-bottom: 0 !important;
            }
          }
        }
        .dtmxl_body:last-child {
          border-right: 0;
        }
      }
    }
    // 表格样式
    .el-table {
      margin-bottom: 0.20rem;
      min-height: auto;
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
        height: 0.4rem !important;
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
          width: 1rem;
        }
        col:nth-child(2) {
          width: 2rem;
        }
        col:nth-child(5) {
          width: 2rem;
        }
        col:nth-child(6) {
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
      margin-bottom: 0.86rem;
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
        overflow: inherit !important;
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
            padding-top: 0.22rem;
            padding-bottom: 0.1rem;
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
                // align-items: center;
                justify-content: center;
              }
            }
          }
        }

        .dtmsb_tar {
          width: 3.1rem;
          height: 3.1rem;
          margin: 0 auto;
          position: relative;
          .myChartPies1,
          .myChartPies2,
          .myChartPies3 {
            width: 3.1rem;
            height: 3.1rem;
          }
          ul {
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            bottom: 0.16rem;
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
          // margin-top: 0.1rem;
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
            line-height: 0.28rem;
            color: #354b70;
            display: flex;
            align-items: flex-start;
            span {
              margin-top: 0.06rem;
              margin-right: 0.1rem;
              width: 0.04rem;
              height: 0.16rem;
              background: linear-gradient(179deg, #059dff 0%, #00c0ff 100%);
            }
          }
        }
      }
    }
  }
}
</style>
