<template>
  <div class="table-class" ref="sprintGroupPdf">
    <!-- <div class="table-style" @click="fuck"> -->
    <div class="table-style">
      <img class="group_01" src="../../assets/images/group/g_01.png" alt="" />
      <p class="group_p_01">北京市第二中学—高一年级</p>
    </div>
    <div class="table-style group_02">
      <div class="gp2_top">
        <img style="width:132px;height:127px;" src="../../assets/images/group/g_021.png" alt="" />
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
              <span>北京市第二中学 · 高（一）年级，共</span>
              <span class="gp2lb_num">4</span>
              <span>个班级</span>
              <span class="gp2lb_num">200</span>
              <span>名学生，实测</span>
              <span class="gp2lb_num">192</span>
              <span>名学生。</span>
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
              <span>2021学年 · 第一学期（2021.02—2021.07）</span>
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
              <span>智能心理箱庭，</span>
              <span class="gp3lb_num">39名(91%)</span>
              <span>学生的结果可信，</span>
              <span class="gp3lb_num">4名(9%)</span>
              <span>学生的测验结果无法确定，建议重做。</span>
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
              <span>本年级共计</span>
              <span class="gp4lb_num">10名（26%）</span>
              <span>学生存在风险</span>
              <span class="gp4lb_num">【注】</span>
              <span>，预警</span>
              <span class="gp4lb_num">32</span>
              <span>次。</span>
            </div>
          </div>
          <div class="myChartBox">
            <div class="myChart" ref="myChart01" id="myChart01"></div>
            <div class="myChartTips">
              <p>有风险</p>
              <p>26%</p>
            </div>
            <div class="myChartLab">
              <div class="mcl_span">
                <span></span>有风险
              </div>
              <div class="mcl_span mcl_span1">
                <span></span>无风险
              </div>
            </div>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_029.png" alt="" />
            <div class="gp2lb_txt">
              <span>系统发现，本年级存在抑郁风险学生 </span>
              <span class="gp4lb_num">7</span>
              <span>名，预警</span>
              <span class="gp4lb_num">15</span>
              <span>次；焦虑风险学生</span>
              <span class="gp4lb_num">4</span>
              <span>名，预警</span>
              <span class="gp4lb_num">12</span>
              <span>次；强迫风险学生</span>
              <span class="gp4lb_num">2</span>
              <span>名，预警</span>
              <span class="gp4lb_num">5</span>
              <span>次。</span>
            </div>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_029.png" alt="" />
            <div class="gp2lb_txt">
              <span>本年级男生实测</span>
              <span class="gp4lb_num">21</span>
              <span>人，</span>
              <span class="gp4lb_num">6名（29%）</span>
              <span>男生存在风险，</span>
              <span class="gp4lb_num">15名（71%）</span>
              <span>男生无风险；本年级女生实测</span>
              <span class="gp4lb_num">18</span>
              <span>人，</span>
              <span class="gp4lb_num">4名（22%）</span>
              <span>女生存在风险</span>
              <span class="gp4lb_num">14名（78%）</span>
              <span>女生无风险</span>
            </div>
          </div>
          <div class="gp2lb_chart">
            <div class="myChartBox">
              <div class="myChart" ref="myChart02" id="myChart02"></div>
              <div class="myChartTips">
                <p>有风险</p>
                <p>26%</p>
              </div>
              <div class="myChartLab">
                <div class="mcl_span">
                  <span></span>有风险
                </div>
                <div class="mcl_span mcl_span1">
                  <span></span>无风险
                </div>
              </div>
            </div>
            <div class="myChartBox">
              <div class="myChart" ref="myChart03" id="myChart03"></div>
              <div class="myChartTips">
                <p>有风险</p>
                <p>26%</p>
              </div>
              <div class="myChartLab">
                <div class="mcl_span">
                  <span></span>有风险
                </div>
                <div class="mcl_span mcl_span1">
                  <span></span>无风险
                </div>
              </div>
            </div>
          </div>
          <div class="mb_tips">【注】 风险预警人数或频次，均为剔除不可信数据后的风险人数或频次。</div>
        </div>
      </div>
    </div>
    <div class="table-style group_02 group_03">
      <div class="gp2_top">
        <img style="width:132px;height:132px;" src="../../assets/images/group/g_031.png" alt="" />
        <span class="gp2_t_txt">维度预警</span>
        <span class="gp2_t_eng">Dimension Alert</span>
      </div>
      <div class="gp2_main">
        <div class="gp3_top">
          本年级级学生中, 最高频出现的心理问题是<span>抑郁(7名, 18%)</span>, 其次是<span>焦虑(4名, 11%)</span>、<span>强迫(2名, 6%)</span>, 具体结果如下：
        </div>
        <div class="gp2_li">
          <div class="gp2l_head">
            <img style="width:28px;height:30px;" src="../../assets/images/group/g_032.png" alt="" />
            <span>抑郁风险</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_027.png" alt="" />
            <div class="gp2lb_txt">
              <span>抑郁风险一览</span>
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th">
                <div>维度</div>
                <div>风险水平</div>
                <div>人数</div>
                <div>百分比</div>
              </li>
              <li class="gp_w_td">
                <div>抑郁</div>
                <div>
                  <span>高</span>
                  <span>中</span>
                  <span>低</span>
                </div>
                <div>
                  <span class="wran_col">2</span>
                  <span class="wran_col">5</span>
                  <span>17</span>
                </div>
                <div>
                  <span class="wran_col">4.00%</span>
                  <span class="wran_col">10.00%</span>
                  <span>34.00%</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_027.png" alt="" />
            <div class="gp2lb_txt">
              <span>抑郁风险学生名单</span>
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div>预警类型</div>
                <div>可信度</div>
              </li>
              <li :class="['gp_w_tr', {'gp_w_tr2': listh < 40}]" :style="{ height: listh + 'px', 'line-height': (listh < 45 ? listh : '45') + 'px'}" v-for="(item, index) in listnum" :key="item">
                <div>{{index + 1}}</div>
                <div>张三</div>
                <div>20202012931</div>
                <div>高一(1)班</div>
                <div class="wran_col">抑郁高风险</div>
                <div>可信</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="table-style  group_02 group_03 group_04">
      <div class="gp2_main gp4_main">
        <div class="gp2_li">
          <div class="gp2l_head">
            <img style="width:33px;height:28px;" src="../../assets/images/group/g_033.png" alt="" />
            <span>焦虑风险</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_025.png" alt="" />
            <div class="gp2lb_txt">
              <span>焦虑风险一览</span>
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th">
                <div>维度</div>
                <div>风险水平</div>
                <div>人数</div>
                <div>百分比</div>
              </li>
              <li class="gp_w_td">
                <div>抑郁</div>
                <div>
                  <span>高</span>
                  <span>中</span>
                  <span>低</span>
                </div>
                <div>
                  <span class="wran_col1">2</span>
                  <span class="wran_col1">5</span>
                  <span>17</span>
                </div>
                <div>
                  <span class="wran_col1">4.00%</span>
                  <span class="wran_col1">10.00%</span>
                  <span>34.00%</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_025.png" alt="" />
            <div class="gp2lb_txt">
              <span>焦虑风险学生名单</span>
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div>预警类型</div>
                <div>可信度</div>
              </li>
              <li :class="['gp_w_tr', {'gp_w_tr2': listh1 < 40}]" :style="{ height: listh1 + 'px', 'line-height': (listh1 < 45 ? listh1 : '45') + 'px'}" v-for="(item, index) in listnum1" :key="item">
                <div>{{index + 1}}</div>
                <div>张三</div>
                <div>20202012931</div>
                <div>高一(1)班</div>
                <div class="wran_col1">抑郁高风险</div>
                <div>可信</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="gp2_li">
          <div class="gp2l_head">
            <img style="width:30px;height:29px;" src="../../assets/images/group/g_034.png" alt="" />
            <span>强迫风险</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_023.png" alt="" />
            <div class="gp2lb_txt">
              <span>强迫风险学生名单</span>
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th">
                <div>维度</div>
                <div>风险水平</div>
                <div>人数</div>
                <div>百分比</div>
              </li>
              <li class="gp_w_td">
                <div>抑郁</div>
                <div>
                  <span>高</span>
                  <span>中</span>
                  <span>低</span>
                </div>
                <div>
                  <span class="wran_col2">2</span>
                  <span class="wran_col2">5</span>
                  <span>17</span>
                </div>
                <div>
                  <span class="wran_col2">4.00%</span>
                  <span class="wran_col2">10.00%</span>
                  <span>34.00%</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_025.png" alt="" />
            <div class="gp2lb_txt">
              <span>焦虑风险学生名单</span>
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div>预警类型</div>
                <div>可信度</div>
              </li>
              <li :class="['gp_w_tr', {'gp_w_tr2': listh2 < 40}]" :style="{ height: listh2 + 'px', 'line-height': (listh2 < 45 ? listh2 : '45') + 'px'}" v-for="(item, index) in listnum2" :key="item">
                <div>{{index + 1}}</div>
                <div>张三</div>
                <div>20202012931</div>
                <div>高一(1)班</div>
                <div class="wran_col2">抑郁高风险</div>
                <div>可信</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="table-style group_02 group_05">
      <div class="gp2_top">
        <img style="width:132px;height:153px;" src="../../assets/images/group/g_04.png" alt="" />
        <span class="gp2_t_txt">指导建议</span>
        <span class="gp2_t_eng">Guidance Recommendations</span>
      </div>
      <div class="gp5_box">
        <ul>
          <li>
            <span class="gp5_index">1</span>
            <p>对比全校，本年级测评频次<span>较高</span>，说明本年级学生的心理健康状况得到了老师的重视，请继续保持。</p>
          </li>
          <li>
            <span class="gp5_index">2</span>
            <p>系统发现，本年级抑郁风险占比<span>18%</span>，预警率高于全国中小学生水平（抑郁11.03%）【注】，老师需多关注本年级学生抑郁情况。</p>
          </li>
          <li>
            <span class="gp5_index">3</span>
            <p>系统发现，本年级焦虑风险占比<span>11%</span>，预警率高于全国中小学生水平（焦虑9.93%）【注】，老师需多关注本年级学生焦虑情况。</p>
          </li>
          <li>
            <span class="gp5_index">4</span>
            <p>系统发现，本年级强迫风险占比<span>6%</span>，预警率低于全国中小学生水平（强迫10.20%）【注】，建议老师正常开展心理健康教育工作即可。</p>
          </li>
          <li>
            <span class="gp5_index">5</span>
            <p>针对预警学生，建议再次进行一对一评估，酌情安排个体咨询或团体辅导，若情况严重建议转介。</p>
          </li>
          <li>
            <span class="gp5_index">6</span>
            <p>针对测评结果不可信学生，建议通过AI心世界或其他测评方式，重新进行测评。</p>
          </li>
        </ul>
      </div>
      <div class="gp5_botm"></div>
      <div class="mb_tips">【注】 数据来源为《中国中小学生心理健康发展报告（2019）》</div>
    </div>
    <div class="table-style group_02 group_03 group_06">
      <div class="gp2_top">
        <img style="width:132px;height:145px;" src="../../assets/images/group/g_05.png" alt="" />
        <span class="gp2_t_txt">附录</span>
        <span class="gp2_t_eng">Appendix</span>
      </div>
      <div class="gp2_main">
        <div class="gp2_li">
          <div class="gp2l_head">
            <img style="width:47px;height:32px;" src="../../assets/images/group/g_051.png" alt="" />
            <span>预警学生名单</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_023.png" alt="" />
            <div class="gp2lb_txt">
              <span>预警学生，是指根据系统检测，存在心理风险的学生（<label>已剔除不可信数据</label>）。</span>
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div>预警类型</div>
                <div>可信度</div>
              </li>
              <li :class="['gp_w_tr', {'gp_w_tr2': listh3 < 40}]" :style="{ height: listh3 + 'px', 'line-height': (listh3 < 45 ? listh3 : '45') + 'px'}" v-for="(item, index) in listnum3" :key="item">
                <div>{{index + 1}}</div>
                <div>张三</div>
                <div>20202012931</div>
                <div>高一(1)班</div>
                <div class="wran_col2" style="flex:2">抑郁中风险、焦虑中风险</div>
                <div>可信</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="gp2_li">
          <div class="gp2l_head">
            <img style="width:45px;height:41px;" src="../../assets/images/group/g_052.png" alt="" />
            <span>不可信名单</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_025.png" alt="" />
            <div class="gp2lb_txt">
              <span>不可信，是指学生在智能沙盘的测验时间、沙具选择等方面存在异常，其测验结果不可信。</span>
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div>预警类型</div>
                <div>可信度</div>
              </li>
              <li :class="['gp_w_tr', {'gp_w_tr2': listh4 < 40}]" :style="{ height: listh4 + 'px', 'line-height': (listh4 < 45 ? listh4 : '45') + 'px'}" v-for="(item, index) in listnum4" :key="item">
                <div>{{index + 1}}</div>
                <div>张三</div>
                <div>20202012931</div>
                <div>高一(1)班</div>
                <div class="wran_col1">抑郁中风险、焦虑中风险</div>
                <div>可信</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import echarts from "../../assets/js/echarts";
import JSZip from "jszip";
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
      listnum: 10,
      listnum1: 10,
      listnum2: 10,
      listnum3: 10,
      listnum4: 10,
      listh: 45,
      listh1: 45,
      listh2: 45,
      listh3: 45,
      listh4: 45,
      myChart01: "",
      myChart02: "",
      myChart03: ""
    };
  },
  props: {
    row: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    this.loading = this.$loading({
      lock: true,
      text: "报告生成中",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    this.listh = 780 / this.listnum
    this.listh1 = 315 / this.listnum1
    this.listh2 = 315 / this.listnum2
    this.listh3 = 510 / this.listnum3
    this.listh4 = 510 / this.listnum4
    console.log(this.listh)
    console.log(this.listh3)
    console.log(this.listh4)
    this.initEchart();
    setTimeout(() => {
      this.$nextTick(() => {
        this.downloadSprintTestReport()
      })
    }, 100)
  },
  methods: {
    fuck() {
      this.downloadSprintTestReport()
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    initEchart() {
      this.myChart01 = echarts.init(this.$refs.myChart01);
      this.myChart01.setOption({
        tooltip: {
          show: false
        },
        series: [
          {
            name: "有风险",
            animation: false,
            type: "pie",
            clickable: false,
            radius: ["70%", "90%"],
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false, // 标签是否显示
                position: "center", // 标签显示位置
                formatter: "{a}\n" + '20' + "单",
                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 15,
                  fontWeight: "bolder"
                }
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 100 - 20,
                name: "无风险",
                itemStyle: {
                  normal: transColor[1]
                }
              },
              {
                value: 20,
                name: "有风险",
                itemStyle: {
                  normal: transColor[0]
                }
              }
            ]
          }
        ]
      });
      this.myChart02 = echarts.init(this.$refs.myChart02);
      this.myChart02.setOption({
        tooltip: {
          show: false
        },
        series: [
          {
            name: "有风险",
            animation: false,
            type: "pie",
            clickable: false,
            radius: ["70%", "90%"],
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false, // 标签是否显示
                position: "center", // 标签显示位置
                formatter: "{a}\n" + '20' + "单",
                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 15,
                  fontWeight: "bolder"
                }
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 100 - 20,
                name: "无风险",
                itemStyle: {
                  normal: transColor[1]
                }
              },
              {
                value: 20,
                name: "有风险",
                itemStyle: {
                  normal: transColor[0]
                }
              }
            ]
          }
        ]
      });
      this.myChart03 = echarts.init(this.$refs.myChart03);
      this.myChart03.setOption({
        tooltip: {
          show: false
        },
        series: [
          {
            name: "有风险",
            type: "pie",
            animation: false,
            clickable: false,
            radius: ["70%", "90%"],
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false, // 标签是否显示
                position: "center", // 标签显示位置
                formatter: "{a}\n" + '20' + "单",
                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 15,
                  fontWeight: "bolder"
                }
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 100 - 20,
                name: "无风险",
                itemStyle: {
                  normal: transColor[1]
                }
              },
              {
                value: 20,
                name: "有风险",
                itemStyle: {
                  normal: transColor[0]
                }
              }
            ]
          }
        ]
      });
    },
    downloadSprintTestReport() {
      console.log("开始下载PDF--A4");
      this.getPdfFromHtml(this.$refs.sprintGroupPdf, "团队报告");
      this.$nextTick(() => {
        this.setGroupFlag(false)
        console.log(this.$store)
      })
    },
    ...mapMutations(["setGroupFlag"])
  }
};
</script>
<style lang="less" scoped>
.table-class {
  display: grid;
  background-color: #fff;
  width: 1191px;
  box-sizing: border-box;
  transform: scale(0.8);
  transform-origin: 0 0;
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
  width: 100%;
  height: 100%;
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
      margin-bottom: 60px;
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
        margin-top: 20px;
        img {
          margin-top: 6px;
          margin-left: 25px;
          width: 4px;
          height: 18px;
          background: linear-gradient(180deg, #babfff, #7279ff);
        }
        .gp2lb_txt {
          line-height: 30px;
          margin-left: 15px;
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #394b6d;
          text-align: left;
          .gp2lb_num {
            color: #5983f7;
          }
          .gp3lb_num {
            color: #ED6BB5;
          }
          .gp4lb_num {
            color: #00A5FF;
          }
        }
      }
    }
    .gp2_li:last-child{
      margin-bottom: 0;
    }
  }
  .mb_tips{
    width: 1060px;
    margin: 34px auto;
    text-align: left;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(119, 134, 172, 0.6);
  }
}
.group_03{
  background: linear-gradient(214deg, rgba(232, 220, 252, 0.3), rgba(252, 243, 254, 0.3));
  .gp3_top{
    padding: 0 20px;
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #394B6D;
    text-align: left;
    margin-bottom: 34px;
  }
  .gp2_main{
    padding: 44px 29px;
    .gp_warn{
      margin: 24px 30px;
      ul{
        border: 1px solid #CFE1F9;
        li{
          display: flex;
          height: 50px;
          line-height: 50px;
          div{
            font-size: 18px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #607490;
            flex: 1;
            border-right: 1px solid #CFE1F9;
            border-bottom: 1px solid #CFE1F9;
          }
          div:nth-child(5){
            flex:2
          }
          div:last-child{
            border-right: 0;
          }
          .wran_col{
            color: #ED6BB5 !important;
          }
          .wran_col1{
            color: #296EF6 !important;
          }
          .wran_col2{
            color: #6774F6 !important;
          }
        }
        li:last-child{
          div{
            border-bottom: 0;
          }
        }
        li.gp_w_th{
          div{
            background: #F1F9FE;
          }
        }
        li.gp_w_tr{
          // height: 45px;
          max-height: 45px;
        }
        li.gp_w_tr2{
          div{
            font-size: 14px;
          }
        }
        li.gp_w_td{
          height: auto;
          line-height: 135px;
          div{
            span{
              height: 45px;
              line-height: 45px;
              display: block;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #848DA0;
              border-bottom: 1px solid #CFE1F9;
            }
            span:last-child{
              border-bottom: 0
            }
          }
        }
      }
    }
  }
}
.group_04{
  .gp4_main{
    padding-top: 32px;
    margin-top: 62px;
    height: 1560px;
    .gp2_li{
      margin-bottom: 30px;
    }
  }
}
.group_05{
  background: #ffffff;
  .gp5_box{
    width: 1060px;
    padding: 42px 40px 42px 28px;
    margin: 0 auto 0;
    background: linear-gradient(214deg, #EFFEFF, #F3F6FE);
    ul{
      li{
        display: flex;
        align-items: flex-start;
        margin-bottom: 16px;
        .gp5_index{
          display: inline-block;
          margin-top: 6px;
          margin-right: 10px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #FFFFFF;
          width: 24px;
          height: 24px;
          background: linear-gradient(177deg, #5DBCF9, #82EBF8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        p{
          flex: 1;
          line-height: 36px;
          text-align: left;
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #394B6D;
          span{
            background: none;
            color: #00A5FF;
          }
        }
      }
      li:last-child{
        margin-bottom: 0;
      }
    }
  }
  .gp5_botm{
    margin: auto;
    width: 1060px;
    height: 4px;
    background: linear-gradient(-90deg, #66E7FB 0%, #4DB4EB 100%);
  }
}
.group_06{
  background: none;
  .gp2_top{
    padding-bottom: 26px;
  }
  .gp2_main{
    padding-top: 0;
    box-shadow: none;
    background: transparent;
    label{
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #6774F6;
    }
  }
}
.gp2lb_chart{
  display: flex;
  justify-content: space-around;
  padding: 0 80px 0;

}
.myChartBox{
  position: relative;
  margin: 20px auto 40px;
  .myChartTips{
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    p{
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #5E6C87;
    }
    p:last-child{
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #6774F6;
    }
  }
  .myChartLab{
    display: flex;
    justify-content: center;
    .mcl_span{
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #7E87A1;
      margin: 0 14px;
      span{
        display: inline-block;
        width: 8px;
        height: 8px;
        background: linear-gradient(90deg, #BABFFF, #7279FF);
        border-radius: 50%;
        margin-right: 8px;
      }
    }
    .mcl_span1{
      span{
        background: linear-gradient(91deg, #4DFBFF, #00CCFF);
      }
    }
  }
}
.myChart {
  display: flex;
  justify-content: center;
  width: 202px;
  height: 202px;
  margin: 0 auto 2px;
}
</style>
