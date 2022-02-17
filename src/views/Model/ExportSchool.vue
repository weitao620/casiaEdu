<template>
  <div class="table-classs" ref="sprintSchoolPdf">
    <div class="table-style">
      <img class="group_01" src="../../assets/images/group/g_01s.png" alt="" />
      <p
        class="group_p_01"
        :style="{ 'font-size': schoolName.length > 12 ? '34px' : '40px' }"
      >
        {{ schoolName }}
      </p>
      <div class="group_tips">
        <img src="../../assets/images/group/tip_group.png" alt="" />
        <span>报告结果仅供参考，不作为学生选拨或诊断依据。</span>
      </div>
    </div>
    <div class="table-style group_02">
      <div class="gp2_top">
        <img
          style="width:132px;height:127px;"
          src="../../assets/images/group/g_021.png"
          alt=""
        />
        <span class="gp2_t_txt">整体概述</span>
        <span class="gp2_t_eng">Overall Overview</span>
      </div>
      <div class="gp2_main">
        <div class="gp2_li">
          <div class="gp2l_head">
            <img src="../../assets/images/group/g_022.png" alt="" />
            <span>测评对象</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_023.png" alt="" />
            <div class="gp2lb_txt">
              <span>{{ schoolName }}</span>
            </div>
          </div>
        </div>
        <div class="gp2_li">
          <div class="gp2l_head">
            <img
              src="../../assets/images/group/g_024.png"
              alt=""
              style="width:36px;height:37px"
            />
            <span>测评时间</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_025.png" alt="" />
            <div class="gp2lb_txt">
              <span>{{ time }}</span>
            </div>
          </div>
        </div>
        <div class="gp2_li">
          <div class="gp2l_head">
            <img
              src="../../assets/images/group/g_026.png"
              alt=""
              style="width:29px;height:32px"
            />
            <span>测评方式</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_027.png" alt="" />
            <div class="gp2lb_txt">
              <span>智能心理箱庭</span>
            </div>
          </div>
        </div>
        <div class="gp2_li">
          <div class="gp2l_head">
            <img
              src="../../assets/images/group/g_035.png"
              alt=""
              style="width:29px;height:32px"
            />
            <span>测评介绍</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_036.png" alt="" />
            <div class="gp2lb_txt">
              <span>心理沙盘是一种心理投射测验，智能心理沙盘通过运用视觉分析、视觉推理等人工智能技术实现自动化分析学生沙盘，以评估学生的抑郁、焦虑以及强迫的心理健康风险水平。</span>
            </div>
          </div>
        </div>
        <div class="gp2_li">
          <div class="gp2l_head">
            <img
              src="../../assets/images/group/g_028.png"
              alt=""
              style="width:35px;height:31px"
            />
            <span>测评结论</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_029.png" alt="" />
            <div class="gp2lb_txt">
              <span>本校设</span>
              <span class="wran_col0">{{ EvaResult.gradeNum }}</span>
              <span>个年级，共</span>
              <span class="wran_col0">{{ EvaResult.totalStudent }}</span>
              <span>名学生，实测</span>
              <span class="wran_col0">{{ EvaResult.evaStudent }}</span>
              <span>人。</span>
            </div>
          </div>
          <div class="gp2l_body" style="margin-top:10px;">
            <img src="../../assets/images/group/g_029.png" alt="" />
            <div class="gp2lb_txt">
              <span>本学期，共计开展测评</span>
              <span class="wran_col1">{{ EvaResult.evaNum }}</span>
              <span>次，人均测评</span>
              <span class="wran_col1">{{ EvaResult.evaNumPerct }}</span>
              <span>次。</span>
            </div>
          </div>
          <div class="gp2l_body" style="margin-top:10px;">
            <img src="../../assets/images/group/g_029.png" alt="" />
            <div class="gp2lb_txt">
              <span>系统发现，本校学生中共有</span>
              <span class="wran_col3">{{ EvaResult.riskNum }}</span>
              <span>人（</span>
              <span class="wran_col3">{{ EvaResult.riskPerct }}</span>
              <span>）存在风险，预警数据如下：</span>
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th">
                <div>学生类型</div>
                <div>实测学生数</div>
                <div>预警学生数</div>
                <div>风险类型</div>
                <div>风险学生数</div>
                <div>轻度风险<br>学生数</div>
                <div>中度风险<br>学生数</div>
                <div>重度风险<br>学生数</div>
              </li>
              <li class="gp_w_td" v-for="item in phaseList" :key="item.phaseName">
                <div>{{ item.phaseName }}</div>
                <div>{{ item.evaStudent }}</div>
                <div>{{ item.warnNum }}</div>
                <div>
                  <span>抑郁</span>
                  <span>焦虑</span>
                  <span>强迫</span>
                </div>
                <div>
                  <span>{{ item.depressionInfo.depressionNum }}</span>
                  <span>{{ item.anxietyInfo.anxietyNum }}</span>
                  <span>{{ item.forcedInfo.forcedNum }}</span>
                </div>
                <div>
                  <span>{{ item.depressionInfo.lightNum }}</span>
                  <span>{{ item.anxietyInfo.lightNum }}</span>
                  <span>{{ item.forcedInfo.lightNum }}</span>
                </div>
                <div>
                  <span>{{ item.depressionInfo.mediumNum }}</span>
                  <span>{{ item.anxietyInfo.mediumNum }}</span>
                  <span>{{ item.forcedInfo.mediumNum }}</span>
                </div>
                <div>
                  <span>{{ item.depressionInfo.severeNum }}</span>
                  <span>{{ item.anxietyInfo.severeNum }}</span>
                  <span>{{ item.forcedInfo.severeNum }}</span>
                </div>
              </li>
              <!-- <li class="gp_w_td" v-if="phaseList.length > 0">
                <div style="width:346px">
                  <span>合计</span>
                </div>
                <div style="width: 124px">
                  <span>{{ EvaResult.riskNum }}</span>
                </div>
                <div style="width: 170px">
                  <span>{{ EvaResult.lightNum }}</span>
                </div>
                <div style="width: 170px">
                  <span>{{ EvaResult.mediumNum }}</span>
                </div>
                <div style="width: 170px">
                  <span>{{ EvaResult.severeNum }}</span>
                </div>
              </li> -->
              <li class="gp_w_td" v-if="phaseList.length == 0">
                <div style="width:100%">
                  <span>暂无数据</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="gp2l_body">
            <img
              class="bt_tips"
              src="../../assets/images/group/bt_tips.png"
              alt=""
            />
            <div class="gp2lb_txt">
              <span>整体来看，本校筛查出抑郁风险学生</span>
              <span class="wran_col3">{{ DimRisk.depressionNum }}</span>
              <span>人（</span>
              <span class="wran_col3">{{ DimRisk.depressionPerct1 }}</span>
              <span>）；焦虑风险学生</span>
              <span class="wran_col3">{{ DimRisk.anxietyNum }}</span>
              <span>人（</span>
              <span class="wran_col3">{{ DimRisk.anxietyPerct1 }}</span>
              <span>）；强迫风险学生</span>
              <span class="wran_col3">{{ DimRisk.forcedNum }}</span>
              <span>人（</span>
              <span class="wran_col3">{{ DimRisk.forcedPerct1 }}</span>
              <span>）。各维度风险分布、年级风险分布见附表1、附表2。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 指导建议 -->
    <div class="table-style group_02 group_05">
      <div class="gp2_top">
        <img
          style="width:132px;height:153px;"
          src="../../assets/images/group/g_04.png"
          alt=""
        />
        <span class="gp2_t_txt">指导建议</span>
        <span class="gp2_t_eng">Guidance Recommendations</span>
      </div>
      <div class="gp5_box">
        <ul v-if="SuggestionStr">
          <li>
            <span class="gp5_index">1</span>
            <p v-html="SuggestionStr"></p>
          </li>
          <li>
            <span class="gp5_index">2</span>
            <p>针对预警学生，建议再次进行一对一评估，酌情安排个体咨询或团体辅导，若情况严重建议转介。</p>
          </li>
        </ul>
      </div>
      <div class="gp5_botm"></div>
      <div class="mb_tips">【注】 数据来源为{{ standard }}</div>
    </div>
    <div class="table-style group_02 group_03 group_06">
      <div class="gp2_top">
        <img
          style="width:132px;height:145px;"
          src="../../assets/images/group/g_05.png"
          alt=""
        />
        <span class="gp2_t_txt">附录</span>
        <span class="gp2_t_eng">Appendix</span>
      </div>
      <div class="gp2_main">
        <div class="gp2_li">
          <div class="gp2l_head">
            <img
              style="width:47px;height:32px;"
              src="../../assets/images/group/g_051.png"
              alt=""
            />
            <span>附表1：各维度风险分布表</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_023.png" alt="" />
            <div class="gp2lb_txt">
              <span>本校筛共记筛查出抑郁风险学生</span>
              <span class="wran_col1">{{ DimRisk.depressionNum }}</span>
              <span>人（</span>
              <span class="wran_col1">{{ DimRisk.depressionPerct1 }}</span>
              <span>）；焦虑风险学生</span>
              <span class="wran_col1">{{ DimRisk.anxietyNum }}</span>
              <span>人（</span>
              <span class="wran_col1">{{ DimRisk.anxietyPerct1 }}</span>
              <span>）；强迫风险学生</span>
              <span class="wran_col1">{{ DimRisk.forcedNum }}</span>
              <span>人（</span>
              <span class="wran_col1">{{ DimRisk.forcedPerct1 }}</span>
              <span>），具体风险分布如下：</span>
            </div>
          </div>
          <div class="gp_warn" style="margin-bottom:40px">
            <ul>
              <li class="gp_w_th" style="height:50px">
                <div>维度</div>
                <div>风险水平</div>
                <div>学生数</div>
                <div>百分比</div>
              </li>
              <li class="gp_w_td">
                <div style="line-height:183px">抑郁</div>
                <div>
                  <span class="wran_col3">重度</span>
                  <span class="wran_col2">中度</span>
                  <span class="wran_col1">轻度</span>
                  <span class="wran_col0">正常</span>
                </div>
                <div>
                  <span>{{ depressionInfo.severeNum }}</span>
                  <span>{{ depressionInfo.mediumNum }}</span>
                  <span>{{ depressionInfo.lightNum }}</span>
                  <span>{{ depressionInfo.normalNum }}</span>
                </div>
                <div>
                  <span>{{ depressionInfo.severePerct }}</span>
                  <span>{{ depressionInfo.mediumPerct }}</span>
                  <span>{{ depressionInfo.lightPerct }}</span>
                  <span>{{ depressionInfo.normalPerct }}</span>
                </div>
              </li>
              <li class="gp_w_td">
                <div style="line-height:183px">焦虑</div>
                <div>
                  <span class="wran_col3">重度</span>
                  <span class="wran_col2">中度</span>
                  <span class="wran_col1">轻度</span>
                  <span class="wran_col0">正常</span>
                </div>
                <div>
                  <span>{{ anxietyInfo.severeNum }}</span>
                  <span>{{ anxietyInfo.mediumNum }}</span>
                  <span>{{ anxietyInfo.lightNum }}</span>
                  <span>{{ anxietyInfo.normalNum }}</span>
                </div>
                <div>
                  <span>{{ anxietyInfo.severePerct }}</span>
                  <span>{{ anxietyInfo.mediumPerct }}</span>
                  <span>{{ anxietyInfo.lightPerct }}</span>
                  <span>{{ anxietyInfo.normalPerct }}</span>
                </div>
              </li>
              <li class="gp_w_td">
                <div style="line-height:183px">强迫</div>
                <div>
                  <span class="wran_col3">重度</span>
                  <span class="wran_col2">中度</span>
                  <span class="wran_col1">轻度</span>
                  <span class="wran_col0">正常</span>
                </div>
                <div>
                  <span>{{ forcedInfo.severeNum }}</span>
                  <span>{{ forcedInfo.mediumNum }}</span>
                  <span>{{ forcedInfo.lightNum }}</span>
                  <span>{{ forcedInfo.normalNum }}</span>
                </div>
                <div>
                  <span>{{ forcedInfo.severePerct }}</span>
                  <span>{{ forcedInfo.mediumPerct }}</span>
                  <span>{{ forcedInfo.lightPerct }}</span>
                  <span>{{ forcedInfo.normalPerct }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="gp2_li">
          <div class="gp2l_head">
            <img
              style="width:45px;height:41px;"
              src="../../assets/images/group/g_052.png"
              alt=""
            />
            <span>附表2：各年级风险分布表</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_025.png" alt="" />
            <div class="gp2lb_txt">
              <span
                >预警学生，是指根据系统检测，存在心理风险的学生。百分比由“年级预警学生数”除以“年级实际测评学生总数”得出。</span
              >
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th gp_w_th2">
                <div>学生年级</div>
                <div>
                  <p>预警学生</p>
                  <p><span>总数</span><span>百分比</span></p>
                </div>
                <div>
                  <p>抑郁风险</p>
                  <p><span>学生数</span><span>百分比</span></p>
                </div>
                <div>
                  <p>焦虑风险</p>
                  <p><span>学生数</span><span>百分比</span></p>
                </div>
                <div>
                  <p>强迫风险</p>
                  <p><span>学生数</span><span>百分比</span></p>
                </div>
              </li>
              <li
                :class="[
                  'gp_w_tr',
                  'gp_w_tr22',
                  gradeList.length > 0 ? 'gp_none' : 'gp_block'
                ]"
                style="justify-content:center;color:#848DA0;height:50px;line-height:50px"
              >
                暂无风险数据
              </li>
              <li
                :class="[
                  'gp_w_tr',
                  'gp_w_tr22',
                  gradeList.length > 0 ? 'gp_block' : 'gp_none'
                ]"
                v-for="(item, index) in gradeList"
                :key="index"
              >
                <div>{{ item.gradeName }}</div>
                <div>
                  <p>
                    <span>{{ item.riskNum }}</span>
                    <span>{{ item.riskPerct }}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>{{ item.depressionNum }}</span>
                    <span>{{ item.depressionPerct }}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>{{ item.anxietyNum }}</span>
                    <span>{{ item.anxietyPerct }}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>{{ item.forcedNum }}</span>
                    <span>{{ item.forcedPerct }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="table-style group_02 group_03 group_06"
      v-for="item in gradeList1"
      :key="item.id"
    >
      <div class="gp2_main gp2_main1 gp2_main2">
        <div class="gp2_li">
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th gp_w_th2">
                <div>学生年级</div>
                <div>
                  <p>预警学生</p>
                  <p><span>总数</span><span>百分比</span></p>
                </div>
                <div>
                  <p>抑郁风险</p>
                  <p><span>学生数</span><span>百分比</span></p>
                </div>
                <div>
                  <p>焦虑风险</p>
                  <p><span>学生数</span><span>百分比</span></p>
                </div>
                <div>
                  <p>强迫风险</p>
                  <p><span>学生数</span><span>百分比</span></p>
                </div>
              </li>
              <li
                class="gp_w_tr gp_w_tr22"
                v-for="(itemc, indexc) in item"
                :key="indexc"
              >
                <div>{{ itemc.gradeName }}</div>
                <div>
                  <p>
                    <span>{{ itemc.riskNum }}</span>
                    <span>{{ itemc.riskPerct }}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>{{ itemc.depressionNum }}</span>
                    <span>{{ itemc.depressionPerct }}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>{{ itemc.anxietyNum }}</span>
                    <span>{{ itemc.anxietyPerct }}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>{{ itemc.forcedNum }}</span>
                    <span>{{ itemc.forcedPerct }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import JSZip from "jszip";
import Url from "@/assets/js/url.js";
import htmlToZip from "@/common/utils/htmlToZip";
import echarts from "../../assets/js/echarts";
import { mapMutations } from "vuex";
var FileSaver = require("file-saver");
const transColor = [
  {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#BABFFF"
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
        color: "#4DFBFF"
      },
      {
        offset: 1,
        color: "#00CCFF"
      }
    ])
  }
];
export default {
  name: "ExportPdf",
  data() {
    return {
      schoolName: "",
      phaseList: [],
      time: "",
      DimRisk: {},
      depressionInfo: {},
      anxietyInfo: {},
      forcedInfo: {},
      standard: "",
      EvaResult: {},
      SuggestionStr: "",
      gradeList: [],
      gradeList1: [],

      rlen0: 0,
      rlen1: 0,
      // 数据
      class: [],
      zipFlag: false
    };
  },
  props: {
    gList: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    schoolPdfs() {
      return this.$store.state.schoolFlag;
    }
  },
  watch: {
    schoolPdfs: function(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
      if (newVal) {
        console.log('3333')
        this.loading = this.$loading({
          lock: true,
          text: "正在请求数据",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
        setTimeout(() => {
          this.exportMeeting("all");
          this.zipFlag = true;
        }, 2000);
      } else {
        console.log('2222')
        this.zipFlag = false;
      }
    }
  },
  beforeDestroy() {
    console.log("销毁了");
    // this.loading.close();
    this.setSchoolFlag(false);
  },
  mounted() {
    // console.log(this.gList)
  },
  methods: {
    ...mapMutations(["setSchoolFlag"]),
    perctInfo (data) {
      console.log(data)
      return Math.round(data.toFixed(4) * 10000) / 100
    },
    getMeetingAll() {
      let that = this;
      return new Promise((resolve, reject) => {
        this.$http
          .get(Url + "/aimw/report/exportSchoolReport")
          .then(res => {
            let data = res.data;
            if (data.code == 0) {
              setTimeout(() => {
                resolve(data.data);
                this.loading.setText("正在请求数据");
              }, 500);
            } else {
              that.$message.error(data.msg);
              this.loading.close();
              this.setSchoolFlag(false);
            }
          })
          .catch(res => {
            console.log(res);
            this.loading.close();
            this.setSchoolFlag(false);
          });
      });
    },
    async exportMeeting(type) {
      // type:'1' 选择导出 'all':导出所有
      try {
        this.allLoading = true;
        let selectedData = [];
        selectedData.push(await this.getMeetingAll());
        this.setSchoolFlag(false);
        this.loading.setText("正在拼命导出");
        const zip = new JSZip();
        const promises = [];
        this.isShowPdf = true;
        for (let i = 0; i < selectedData.length; i++) {
          // 解析数据
          console.log(selectedData[i]);
          // EvaResult
          this.schoolName = selectedData[i].schoolName;
          this.time = selectedData[i].time;
          selectedData[i].EvaResult.evaNumPerct = String(selectedData[i].EvaResult.evaNumPerct.toFixed(4))
          selectedData[i].EvaResult.riskPerct = this.perctInfo(selectedData[i].EvaResult.riskPerct) + "%";
          selectedData[i].depPerct1 = this.perctInfo(selectedData[i].depPerct) + "%";
          selectedData[i].anxietyPerct1 = this.perctInfo(selectedData[i].anxietyPerct) + "%";
          selectedData[i].forcedPerct1 = this.perctInfo(selectedData[i].forcedPerct) + "%";
          selectedData[i].DimRisk.depressionPerct1 = this.perctInfo(selectedData[i].DimRisk.depressionPerct) + "%";
          selectedData[i].DimRisk.depressionInfo.normalPerct = this.perctInfo(selectedData[i].DimRisk.depressionInfo.normalPerct) + "%";
          selectedData[i].DimRisk.depressionInfo.lightPerct = this.perctInfo(selectedData[i].DimRisk.depressionInfo.lightPerct) + "%";
          selectedData[i].DimRisk.depressionInfo.mediumPerct = this.perctInfo(selectedData[i].DimRisk.depressionInfo.mediumPerct) + "%";
          selectedData[i].DimRisk.depressionInfo.severePerct = this.perctInfo(selectedData[i].DimRisk.depressionInfo.severePerct) + "%";
          selectedData[i].DimRisk.anxietyPerct1 = this.perctInfo(selectedData[i].DimRisk.anxietyPerct) + "%";
          selectedData[i].DimRisk.anxietyInfo.normalPerct = this.perctInfo(selectedData[i].DimRisk.anxietyInfo.normalPerct) + "%";
          selectedData[i].DimRisk.anxietyInfo.lightPerct = this.perctInfo(selectedData[i].DimRisk.anxietyInfo.lightPerct) + "%";
          selectedData[i].DimRisk.anxietyInfo.mediumPerct = this.perctInfo(selectedData[i].DimRisk.anxietyInfo.mediumPerct) + "%";
          selectedData[i].DimRisk.anxietyInfo.severePerct = this.perctInfo(selectedData[i].DimRisk.anxietyInfo.severePerct) + "%";
          selectedData[i].DimRisk.forcedPerct1 = this.perctInfo(selectedData[i].DimRisk.forcedPerct) + "%";
          selectedData[i].DimRisk.forcedInfo.normalPerct = this.perctInfo(selectedData[i].DimRisk.forcedInfo.normalPerct) + "%";
          selectedData[i].DimRisk.forcedInfo.lightPerct = this.perctInfo(selectedData[i].DimRisk.forcedInfo.lightPerct) + "%";
          selectedData[i].DimRisk.forcedInfo.mediumPerct = this.perctInfo(selectedData[i].DimRisk.forcedInfo.mediumPerct) + "%";
          selectedData[i].DimRisk.forcedInfo.severePerct = this.perctInfo(selectedData[i].DimRisk.forcedInfo.severePerct) + "%";
          var sstr = '';
          sstr += '系统发现，本校'
          if (selectedData[i].DimRisk.depressionPerct <= selectedData[i].depPerct && selectedData[i].DimRisk.anxietyPerct <= selectedData[i].anxietyPerct && selectedData[i].DimRisk.forcedPerct <= selectedData[i].forcedPerct) {
            sstr += '抑郁风险占比<span style="color: #00a5ff;">' + selectedData[i].DimRisk.depressionPerct1 + '</span>，'
            sstr += '焦虑风险占比<span style="color: #00a5ff;">' + selectedData[i].DimRisk.anxietyPerct1 + '</span>，'
            sstr += '强迫风险占比<span style="color: #00a5ff;">' + selectedData[i].DimRisk.forcedPerct1 + '</span>，'
            sstr += '预警率均低于全国中小学生水平（<span style="color: #00a5ff;">抑郁' + selectedData[i].depPerct1 + '，焦虑' + selectedData[i].anxietyPerct1 + '，强迫' + selectedData[i].forcedPerct1 + '</span>），老师正常开展心理健康教育工作即可，如定期进行心理讲座、团体辅导等。'
          } else {
            if (selectedData[i].DimRisk.depressionPerct > selectedData[i].depPerct) {
              sstr += '抑郁风险占比<span style="color: #00a5ff;">' + selectedData[i].DimRisk.depressionPerct1 + '</span>，'
            }
            if (selectedData[i].DimRisk.anxietyPerct > selectedData[i].anxietyPerct) {
              sstr += '焦虑风险占比<span style="color: #00a5ff;">' + selectedData[i].DimRisk.anxietyPerct1 + '</span>，'
            }
            if (selectedData[i].DimRisk.forcedPerct > selectedData[i].forcedPerct) {
              sstr += '强迫风险占比<span style="color: #00a5ff;">' + selectedData[i].DimRisk.forcedPerct1 + '</span>，'
            }
            sstr += '预警率高于全国中小学生水平（<span style="color: #00a5ff;">'
            if (selectedData[i].DimRisk.depressionPerct > selectedData[i].depPerct) {
              sstr += '抑郁' + selectedData[i].depPerct1 + '，'
            }
            if (selectedData[i].DimRisk.anxietyPerct > selectedData[i].anxietyPerct) {
              sstr += '焦虑' + selectedData[i].anxietyPerct1 + '，'
            }
            if (selectedData[i].DimRisk.forcedPerct > selectedData[i].forcedPerct) {
              sstr += '强迫' + selectedData[i].forcedPerct1 + '，'
            }
            sstr = sstr.substring(0, sstr.lastIndexOf('，'));
            sstr += '</span>），建议老师定期组织'
            if (selectedData[i].DimRisk.depressionPerct > selectedData[i].depPerct) {
              sstr += '抑郁、'
            }
            if (selectedData[i].DimRisk.anxietyPerct > selectedData[i].anxietyPerct) {
              sstr += '焦虑、'
            }
            if (selectedData[i].DimRisk.forcedPerct > selectedData[i].forcedPerct) {
              sstr += '强迫、'
            }
            sstr = sstr.substring(0, sstr.lastIndexOf('、'));
            sstr += '相关的主题讲座，增加学生对'
            if (selectedData[i].DimRisk.depressionPerct > selectedData[i].depPerct) {
              sstr += '抑郁、'
            }
            if (selectedData[i].DimRisk.anxietyPerct > selectedData[i].anxietyPerct) {
              sstr += '焦虑、'
            }
            if (selectedData[i].DimRisk.forcedPerct > selectedData[i].forcedPerct) {
              sstr += '强迫、'
            }
            sstr = sstr.substring(0, sstr.lastIndexOf('、'));
            sstr += '的正确认识，掌握缓解'
            if (selectedData[i].DimRisk.depressionPerct > selectedData[i].depPerct) {
              sstr += '抑郁、'
            }
            if (selectedData[i].DimRisk.anxietyPerct > selectedData[i].anxietyPerct) {
              sstr += '焦虑、'
            }
            if (selectedData[i].DimRisk.forcedPerct > selectedData[i].forcedPerct) {
              sstr += '强迫、'
            }
            sstr = sstr.substring(0, sstr.lastIndexOf('、'));
            sstr += '科学方法。'
          }
          this.SuggestionStr = sstr

          this.EvaResult = selectedData[i].EvaResult
          this.DimRisk = selectedData[i].DimRisk
          this.standard = selectedData[i].standard
          this.depressionInfo = selectedData[i].DimRisk.depressionInfo
          this.anxietyInfo = selectedData[i].DimRisk.anxietyInfo
          this.forcedInfo = selectedData[i].DimRisk.forcedInfo
          this.phaseList = selectedData[i].EvaResult.phaseInfo
          let pList = selectedData[i].EvaResult.phaseInfo
          let gList = []
          for (let i in pList) {
            let info = pList[i].gradeInfo
            for (let j in info) {
              console.log(info[j])
              info[j].depressionPerct = this.perctInfo(info[j].depressionPerct) + "%";
              info[j].anxietyPerct = this.perctInfo(info[j].anxietyPerct) + "%";
              info[j].forcedPerct = this.perctInfo(info[j].forcedPerct) + "%";
              info[j].riskPerct = this.perctInfo(info[j].riskPerct) + "%";
              gList.push(info[j])
            }
          }
          let risk11 = []
          let risk12 = []
          if (this.rlen0 < 7) {
            risk11 = gList.slice(0, 6)
          } else {
            risk11 = gList.slice(0, 6)
            let rlen12 = Math.ceil((gList.length - 6) / 33);
            for (let j = 0; j < rlen12; j++) {
              risk12.push(gList.slice(6 + 33 * j, 6 + 33 * (Number(j) + 1)));
            }
          }
          this.gradeList = risk11
          this.gradeList1 = risk12
          // 等待每一个转为pdf
          console.log(htmlToZip)
          const p = await htmlToZip.getPdfs(
            this.$refs.sprintSchoolPdf,
            selectedData[i].schoolName
          );
          promises.push(p);
        }
        // this.loading.close();
        // 等到所有的promise执行完成依次压缩到zip中
        Promise.all(promises)
          .then(async pdfs => {
            console.log(pdfs);
            for (let i = 0; i < pdfs.length; i++) {
              const { PDF, name } = pdfs[i];
              // 如果只是导出一个pdf，则导出pdf格式
              if (pdfs.length === 1) {
                PDF.save(`${name}-${new Date().getTime()}.pdf`);
                setTimeout(() => {
                  this.loading.close();
                }, 1000);
                // this.loading.setText('正在请求数据')
              } else {
                // 否则添加到压缩包里面
                await zip.file(
                  `${name}-${new Date().getTime()}.pdf`,
                  PDF.output("blob")
                );
              }
            }
          })
          .finally(() => {
            setTimeout(() => {
              this.loading.close();
            }, 2000);
            // this.loading.setText('正在请求数据')
          });
      } catch (e) {
        setTimeout(() => {
          this.loading.close();
        }, 2000);
        // this.loading.setText('正在请求数据')
        throw new Error(e);
      }
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
      let timeN =
        y +
        "年" +
        m +
        "月" +
        d +
        "日 " +
        h +
        "时" +
        minute +
        "分" +
        second +
        "秒";
      return timeN;
    }
  }
};
</script>
<style lang="less" scoped>
.table-classs {
  display: grid;
  background-color: #fff;
  width: 1191px;
  box-sizing: border-box;
  // position: absolute;
  // top: 0;
  // left: 0;
  // z-index: -1;

  .name-style {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
.table-style {
  border-collapse: collapse;
  width: 1190.71px;
  height: 1684px;
  text-align: center;
  position: relative;
  td,
  th {
    padding: 10px;
    font-size: 15px;
    border: 1px solid black;
  }
  .td-bg {
    background: #ccc;
  }
}
.group_01 {
  width: 1190.71px;
  height: 1684px;
}
.group_p_01 {
  position: absolute;
  top: 510px;
  left: 364px;
  width: 570px;
  height: 74px;
  line-height: 74px;
  text-align: center;
  font-size: 40px;
  font-family: zihun100hao-fangfangxianfengti;
  font-weight: 600;
  color: #609bff;
}
.group_tips {
  position: absolute;
  margin: auto;
  bottom: 150px;
  left: 75px;
  right: 0;
  display: flex;
  justify-content: center;
  img {
    width: 22px;
    // height: 26px;
    margin-right: 10px;
  }
  span {
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ed6bb5;
    line-height: 27px;
  }
}
.group_02 {
  background: url(../../assets/images/group/g_02.png) no-repeat center;
  background-size: 100% 100%;
  .gp2_top {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 88px 0 45px 0;
    img {
      width: 132px;
      height: 127px;
    }
    .gp2_t_txt {
      font-size: 32px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #394b6d;
      margin: 0 14px;
    }
    .gp2_t_eng {
      font-size: 30px;
      font-family: Montserrat;
      font-weight: bold;
      color: #7986a9;
    }
  }
  .gp2_main {
    margin: 0 auto;
    width: 1060px;
    height: 1365px;
    padding: 44px 24px;
    background: #ffffff;
    box-shadow: 0px 13px 43px 0px rgba(76, 100, 132, 0.1);
    .gp2_li {
      margin-bottom: 18px;
      .gp2l_head {
        display: flex;
        align-items: center;
        img {
          width: 34px;
          height: 37px;
        }
        span {
          margin-left: 10px;
          font-size: 24px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #394b6d;
        }
      }
      .gp2l_body {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 18px;
        img {
          margin-top: 10px;
          margin-left: 25px;
          width: 4px;
          height: 18px;
          // background: linear-gradient(180deg, #babfff, #7279ff);
        }
        .bt_tips {
          width: 8px;
          height: 8px;
          margin-top: 15px;
        }
        .gp2lb_txt {
          line-height: 30px;
          margin-left: 15px;
          font-size: 20px;
          line-height: 38px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #394b6d;
          text-align: left;
          .wran_col0 {
            color: #5dc4f5 !important;
          }
          .wran_col1 {
            color: #6774f6 !important;
          }
          .wran_col2 {
            color: #ca7cf8 !important;
          }
          .wran_col3 {
            color: #ed6bb5 !important;
          }
        }
      }
    }
    .gp2_li:last-child {
      margin-bottom: 0;
    }
    .gp_warn {
      margin: 24px 30px 10px;
      ul {
        border: 1px solid #cfe1f9;
        li {
          display: flex;
          height: 68px;
          line-height: 68px;
          div {
            font-size: 18px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #607490;
            flex: 1;
            // width: 120px;
            border-right: 1px solid #cfe1f9;
            border-bottom: 1px solid #cfe1f9;
          }
          // div:nth-child(1),div:nth-child(4) {
          //   width: 111px;
          // }
          // div:nth-child(2),div:nth-child(3),div:nth-child(5) {
          //   width: 130px;
          // }
          div:last-child {
            border-right: 0;
          }
          .wran_col0 {
            color: #5dc4f5 !important;
          }
          .wran_col1 {
            color: #6774f6 !important;
          }
          .wran_col2 {
            color: #ca7cf8 !important;
          }
          .wran_col3 {
            color: #ed6bb5 !important;
          }
        }
        li:last-child {
          div {
            border-bottom: 0;
          }
        }
        li.gp_w_th {
          div {
            background: #f1f9fe;
          }
          div:nth-child(6), div:nth-child(7),  div:nth-child(8) {
            line-height: 28px;
            padding-top: 6px;
          }
        }
        li.gp_w_th1,
        li.gp_w_tr1 {
          div {
            padding: 0 6px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          div:nth-child(1) {
            flex: none;
            width: 90px;
          }
          div:nth-child(2) {
            flex: none;
            width: 130px;
          }
          // div:nth-child(3){
          //  flex: none;
          //   width: 220px;
          // }
          div:nth-child(3) {
            flex: none;
            width: 140px;
          }
          div:nth-child(6) {
            flex: none;
            width: 140px;
          }
        }
        li.gp_w_tr1 {
          div {
            font-size: 16px;
            line-height: 45px;
          }
        }
        li.gp_block {
          display: flex;
        }
        li.gp_none {
          display: none;
        }
        li.gp_w_tr {
          // height: 45px;
          height: 45px;
          line-height: 45px;
        }
        li.gp_w_tr2 {
          div {
            font-size: 14px;
          }
        }
        li.gp_w_td {
          height: auto;
          line-height: 135px;
          div {
            span {
              height: 45px;
              line-height: 45px;
              display: block;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #848da0;
              border-bottom: 1px solid #cfe1f9;
              font-size: 16px;
            }
            span:last-child {
              border-bottom: 0;
            }
          }
        }
      }
    }
  }
  .gp2_main1 {
    margin: 65px auto;
    height: 1554px;
  }
  .gp2_main2 {
    margin: 50px auto;
    height: 1584px;
  }
  .mb_tips {
    width: 1078px;
    margin: 20px auto;
    text-align: left;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(119, 134, 172, 0.6);
  }
}
.group_03 {
  background: linear-gradient(
    214deg,
    rgba(232, 220, 252, 0.3),
    rgba(252, 243, 254, 0.3)
  );
  .gp3_top {
    padding: 0 20px;
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #394b6d;
    text-align: left;
    margin-bottom: 34px;
    .wran_col0 {
      color: #5dc4f5 !important;
    }
    .wran_col1 {
      color: #6774f6 !important;
    }
    .wran_col2 {
      color: #ca7cf8 !important;
    }
    .wran_col3 {
      color: #ed6bb5 !important;
    }
  }
  .gp3_top1 {
    // display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 56px;
  }
  .gp2_main {
    padding: 30px 30px;
    .gp_tipz {
      font-size: 16px;
      padding: 0 20px;
      text-align: left;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(119, 134, 172, 0.6);
      line-height: 26px;
    }
    .gp_warn {
      margin: 24px 30px 10px;
      ul {
        border: 1px solid #cfe1f9;
        li {
          display: flex;
          height: 50px;
          line-height: 50px;
          div {
            font-size: 18px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #607490;
            flex: 1;
            border-right: 1px solid #cfe1f9;
            border-bottom: 1px solid #cfe1f9;
          }
          div:nth-child(5) {
            flex: 1;
          }
          div:last-child {
            border-right: 0;
          }
          .wran_col0 {
            color: #5dc4f5 !important;
          }
          .wran_col1 {
            color: #6774f6 !important;
          }
          .wran_col2 {
            color: #ca7cf8 !important;
          }
          .wran_col3 {
            color: #ed6bb5 !important;
          }
        }
        li:last-child {
          div {
            border-bottom: 0;
          }
        }
        li.gp_w_th {
          div {
            background: #f1f9fe;
          }
        }
        li.gp_w_th1,
        li.gp_w_tr1 {
          div {
            padding: 0 6px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          div:nth-child(1) {
            flex: none;
            width: 90px;
          }
          div:nth-child(2) {
            flex: none;
            width: 130px;
          }
          // div:nth-child(3){
          //  flex: none;
          //   width: 220px;
          // }
          div:nth-child(3) {
            flex: none;
            width: 140px;
          }
          div:nth-child(6) {
            flex: none;
            width: 140px;
          }
        }
        li.gp_w_tr1 {
          div {
            font-size: 16px;
            line-height: 45px;
          }
        }
        li.gp_block {
          display: flex;
        }
        li.gp_none {
          display: none;
        }
        li.gp_w_tr {
          // height: 45px;
          height: 45px;
          line-height: 45px;
        }
        li.gp_w_tr2 {
          div {
            font-size: 14px;
          }
        }
        li.gp_w_td {
          height: auto;
          line-height: 135px;
          div {
            span {
              height: 45px;
              line-height: 45px;
              display: block;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #848da0;
              border-bottom: 1px solid #cfe1f9;
              font-size: 16px;
            }
            span:last-child {
              border-bottom: 0;
            }
          }
        }
      }
    }
  }
}
.group_04 {
  .gp4_main {
    padding-top: 50px;
    margin-top: 62px;
    height: 1560px;
    .gp2_li {
      margin-bottom: 30px;
    }
  }
}
.group_05 {
  background: #ffffff;
  .gp5_box {
    width: 1060px;
    padding: 42px 40px 42px 28px;
    margin: 0 auto 0;
    background: linear-gradient(214deg, #effeff, #f3f6fe);
    ul {
      li {
        display: flex;
        align-items: flex-start;
        margin-bottom: 16px;
        .gp5_index {
          display: inline-block;
          margin-top: 6px;
          margin-right: 10px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #ffffff;
          width: 24px;
          height: 24px;
          background: linear-gradient(177deg, #5dbcf9, #82ebf8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        p {
          flex: 1;
          line-height: 36px;
          text-align: left;
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #394b6d;
          span {
            background: none;
            color: #00a5ff;
          }
        }
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }
  .gp5_botm {
    margin: auto;
    width: 1060px;
    height: 4px;
    background: linear-gradient(-90deg, #66e7fb 0%, #4db4eb 100%);
  }
}
.group_06 {
  background: none;
  border: 1px solid #ccc;
  .gp2_top {
    padding-bottom: 32px;
  }
  .gp2_main {
    padding-top: 0;
    padding: 0;
    box-shadow: none;
    background: transparent;
    label {
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #6774f6;
    }
    .gp_warn {
      margin: 24px 30px 10px;
      ul {
        border: 1px solid #cfe1f9;
        li {
          display: flex;
          height: 100px;
          line-height: 50px;
        }
        li.gp_w_th2, li.gp_w_tr22{
          div:first-child {
            line-height: 100px;
          }
          div {
            p:last-child{
              display: flex;
              justify-content: space-around;
              border-top: 1px solid #cfe1f9;
              span{
                flex: 1;
              }
              span:first-child{
                border-right: 1px solid #cfe1f9;
              }
            }
          }
        }
        li.gp_w_tr22{
          div:first-child {
            line-height: 45px;
          }
          div {
            p:last-child{
              border-top: 0px solid #cfe1f9;
            }
          }
        }
        li.gp_w_tr1 {
          div {
            font-size: 16px;
            line-height: 45px;
          }
        }
        li.gp_block {
          display: flex;
        }
        li.gp_none {
          display: none;
        }
        li.gp_w_tr {
          // height: 45px;
          height: 45px;
          line-height: 45px;
        }
        li.gp_w_tr2 {
          div {
            font-size: 14px;
          }
        }
        li.gp_w_td {
          height: auto;
          line-height: 135px;
          div {
            span {
              height: 45px;
              line-height: 45px;
              display: block;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #848da0;
              border-bottom: 1px solid #cfe1f9;
              font-size: 16px;
            }
            span:last-child {
              border-bottom: 0;
            }
          }
        }
      }
    }
  }
}
.gp2lb_chart {
  display: flex;
  justify-content: space-around;
  padding: 0 80px 0;
}
.myChartgBox {
  position: relative;
  margin: 20px auto 40px;
  .myChartgTips {
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    p {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #5e6c87;
    }
    p:last-child {
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #6774f6;
    }
  }
  .myChartgLab {
    display: flex;
    justify-content: center;
    .mcl_span {
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #7e87a1;
      margin: 0 14px;
      span {
        display: inline-block;
        width: 8px;
        height: 8px;
        background: linear-gradient(90deg, #babfff, #7279ff);
        border-radius: 50%;
        margin-right: 8px;
      }
    }
    .mcl_span1 {
      span {
        background: linear-gradient(91deg, #4dfbff, #00ccff);
      }
    }
  }
}
.myChartg {
  display: flex;
  justify-content: center;
  width: 202px;
  height: 202px;
  margin: 0 auto 2px;
}
.myCharts00 {
  display: flex;
  justify-content: center;
  width: 900px;
  height: 300px;
  margin: -40px auto 0;
}
.myCharts10 {
  display: flex;
  justify-content: center;
  width: 900px;
  height: 300px;
  margin: -40px auto 0;
}
.myCharts11 {
  display: flex;
  justify-content: center;
  width: 900px;
  height: 280px;
  margin: -40px auto 0;
}
.myChartgLab1 {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  .mcl_span {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #7e87a1;
    margin: 0 14px;
    span {
      display: inline-block;
      width: 8px;
      height: 8px;
      background: linear-gradient(2deg, #b9c3fa, #6d89f7);
      border-radius: 50%;
      margin-right: 8px;
    }
  }
  .mcl_span1 {
    span {
      background: linear-gradient(2deg, #ffc5f0, #ff77c3);
    }
  }
  .mcl_span2 {
    font-size: 20px;
    color: #394b6d;
  }
}
</style>
