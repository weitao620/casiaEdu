<template>
  <div class="adjust_wrap">
    <div class="adjust_box">
      <div class="adjust_left">
        <div class="adjl_top">
          <img src="../../assets/images/params/workList.png" alt="">
          作品列表
        </div>
        <ul class="adjl_ul">
          <li class="adjl_act">
            <div class="adjl_name">张三</div>
            <div class="adjl_time">2021-10-01 12:00</div>
            <div class="adjl_txt adjl_red">
              <span class="adt_red"></span>不一致
            </div>
            <div class="triang"></div>
          </li>
          <li>
            <div class="adjl_name">张三</div>
            <div class="adjl_time">2021-10-01 12:00</div>
            <div class="adjl_txt adjl_red">
              <span class="adt_red"></span>不一致
            </div>
            <div class="triang"></div>
          </li>
          <li>
            <div class="adjl_name">张三</div>
            <div class="adjl_time">2021-10-01 12:00</div>
            <div class="adjl_txt adjl_red">
              <span class="adt_red"></span>不一致
            </div>
            <div class="triang"></div>
          </li>
          <li>
            <div class="adjl_name">张三</div>
            <div class="adjl_time">2021-10-01 12:00</div>
            <div class="adjl_txt adjl_red">
              <span class="adt_red"></span>不一致
            </div>
            <div class="triang"></div>
          </li>
          <li>
            <div class="adjl_name">张三</div>
            <div class="adjl_time">2021-10-01 12:00</div>
            <div class="adjl_txt adjl_red">
              <span class="adt_red"></span>不一致
            </div>
            <div class="triang"></div>
          </li>
          <li>
            <div class="adjl_name">张三</div>
            <div class="adjl_time">2021-10-01 12:00</div>
            <div class="adjl_txt adjl_red">
              <span class="adt_red"></span>不一致
            </div>
            <div class="triang"></div>
          </li>
          <li>
            <div class="adjl_name">张三</div>
            <div class="adjl_time">2021-10-01 12:00</div>
            <div class="adjl_txt adjl_red">
              <span class="adt_red"></span>不一致
            </div>
            <div class="triang"></div>
          </li>
          <li>
            <div class="adjl_name">张三</div>
            <div class="adjl_time">2021-10-01 12:00</div>
            <div class="adjl_txt adjl_red">
              <span class="adt_red"></span>不一致
            </div>
            <div class="triang"></div>
          </li>
          <li>
            <div class="adjl_name">张三</div>
            <div class="adjl_time">2021-10-01 12:00</div>
            <div class="adjl_txt adjl_red">
              <span class="adt_red"></span>不一致
            </div>
            <div class="triang"></div>
          </li>
          <li>
            <div class="adjl_name">张三</div>
            <div class="adjl_time">2021-10-01 12:00</div>
            <div class="adjl_txt">
              <span class="adt_green"></span>一致
            </div>
            <div class="triang"></div>
          </li>
          <li>
            <div class="adjl_name">张三</div>
            <div class="adjl_time">2021-10-01 12:00</div>
            <div class="adjl_txt adjl_red">
              <span class="adt_red"></span>不一致
            </div>
            <div class="triang"></div>
          </li>
        </ul>
        <div class="adjl_btn" @click="resetChose">重新选择数据</div>
      </div>
      <div class="adjust_right">
        <div class="adr_box">
          <div class="adr_top">
            <div class="tab_box">
              <div
                :class="[
                  'tab_btns tab_btns_l tab_btns_c',
                  { tab_act: tabActive == 1 }
                ]"
                @click="tabChange(1)"
              >
                强迫
              </div>
              <div
                :class="[
                  'tab_btns tab_btns_z tab_btns_c',
                  { tab_act: tabActive == 2 }
                ]"
                @click="tabChange(2)"
              >
                抑郁
              </div>
              <div
                :class="[
                  'tab_btns tab_btns_c',
                  { tab_act: tabActive == 3 }
                ]"
                @click="tabChange(3)"
              >
                焦虑
              </div>
            </div>
            <div class="adrt_right">
              <div class="adrt_ing">
                运行中...
              </div>
              <div class="el_btn_box">
                <div class="el_two">
                  <el-button class="el_btn_two" @click="referen" type="primary">
                    恢复默认参数
                  </el-button>
                </div>
                <div class="el_one">
                  <el-button class="el_btn_one" @click="sysTotal" type="primary">
                    整体评估
                  </el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="adr_main">
            <div class="adr_left">
              <div class="adrr_top">
                <img src="../../assets/images/params/pgjg.png" alt="">
                评估结果
              </div>
              <div class="adrr_head">
                <span></span>
                指标分析
              </div>
              <ul class="adrl_ul">
                <li>
                  <div class="adrlu_head">
                    维度1：<span>选择困难</span>
                  </div>
                  <img @click="previewImg" src="../../assets/images/report/t001.png" alt="">
                  <el-popover
                    placement="top"
                    trigger="hover"
                    :close-delay='0'>
                    <div>
                      <div class="adrlu_txt">
                        指&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标： <span>沙具平均操作时长</span>
                      </div>
                      <div class="adrlu_txt">
                        平均用时： <span>00:56</span>
                      </div>
                      <div class="adrlu_txt">
                        用时最长： <span>老虎</span>
                      </div>
                      <div class="adrlu_txt">
                        用时最短： <span>机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁</span>
                      </div>
                    </div>
                    <div slot="reference">
                      <div class="adrlu_txt">
                        指&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标： <span>沙具平均操作时长</span>
                      </div>
                      <div class="adrlu_txt">
                        平均用时： <span>00:56</span>
                      </div>
                      <div class="adrlu_txt">
                        用时最长： <span>老虎</span>
                      </div>
                      <div class="adrlu_txt">
                        用时最短： <span>机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁</span>
                      </div>
                    </div>
                  </el-popover>
                </li>
                <li>
                  <div class="adrlu_head">
                    维度2：<span>制作刻板</span>
                  </div>
                  <img @click="previewImg" src="../../assets/images/report/t001.png" alt="">
                  <el-popover
                    placement="top"
                    trigger="hover"
                    :close-delay='0'>
                    <div>
                      <div class="adrlu_txt">
                        指&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标： <span>沙具平均操作时长</span>
                      </div>
                      <div class="adrlu_txt">
                        平均用时： <span>00:56</span>
                      </div>
                      <div class="adrlu_txt">
                        用时最长： <span>老虎</span>
                      </div>
                      <div class="adrlu_txt">
                        用时最短： <span>机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁</span>
                      </div>
                    </div>
                    <div slot="reference">
                      <div class="adrlu_txt">
                        指&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标： <span>沙具平均操作时长</span>
                      </div>
                      <div class="adrlu_txt">
                        平均用时： <span>00:56</span>
                      </div>
                      <div class="adrlu_txt">
                        用时最长： <span>老虎</span>
                      </div>
                      <div class="adrlu_txt">
                        用时最短： <span>机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁</span>
                      </div>
                    </div>
                  </el-popover>
                </li>
                <li>
                  <div class="adrlu_head">
                    维度3：<span>过渡控制</span>
                  </div>
                  <img @click="previewImg" src="../../assets/images/report/t001.png" alt="">
                  <el-popover
                    placement="top"
                    trigger="hover"
                    :close-delay='0'>
                    <div>
                      <div class="adrlu_txt">
                        指&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标： <span>沙具平均操作时长</span>
                      </div>
                      <div class="adrlu_txt">
                        平均用时： <span>00:56</span>
                      </div>
                      <div class="adrlu_txt">
                        用时最长： <span>老虎</span>
                      </div>
                      <div class="adrlu_txt">
                        用时最短： <span>机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁</span>
                      </div>
                    </div>
                    <div slot="reference">
                      <div class="adrlu_txt">
                        指&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标： <span>沙具平均操作时长</span>
                      </div>
                      <div class="adrlu_txt">
                        平均用时： <span>00:56</span>
                      </div>
                      <div class="adrlu_txt">
                        用时最长： <span>老虎</span>
                      </div>
                      <div class="adrlu_txt">
                        用时最短： <span>机器猫、柳树、石块、牡丹花、狮子、枫树、宝石、桥梁</span>
                      </div>
                    </div>
                  </el-popover>
                </li>
              </ul>
              <div class="adrr_head">
                <span></span>
                参数调节
              </div>
              <div class="adjust_param">
                <div class="adjp_left">
                  <div class="adjp_top">
                    <div class="adjp_tle">原参数结果</div>
                    <div class="adjp_sys">
                      <div>
                        <label>AI结果：</label><span>强迫</span>
                      </div>
                      <div>
                        <label>人工复核：</label><span>正常</span>
                      </div>
                    </div>
                  </div>
                  <div class="adjp_canvas">
                    <div class="top_top">
                      <span class="tt_txt">选择困难</span>
                    </div>
                    <div class="bottom_left">
                      <span class="tt_txt">过度控制</span>
                    </div>
                    <div class="bottom_right">
                      <span class="tt_txt">制作刻板</span>
                    </div>
                    <div
                      id="myChartPies1"
                      class="myChartPies1"
                      ref="myChartPies1"
                    ></div>
                    <ul class="chart_ul">
                      <li>
                        <span></span>
                        <span>统计结果</span>
                      </li>
                      <li>
                        <span></span>
                        <span>判断标准</span>
                      </li>
                    </ul>
                  </div>
                  
                </div>
                <div class="adjp_center">
                  <img src="../../assets/images/VS.png" alt="">
                </div>
                <div class="adjp_right">
                  <div class="adjp_top">
                    <div class="adjp_tle">更新后结果</div>
                    <div class="adjp_sys">
                      <div>
                        <label>AI结果：</label><span>强迫</span>
                      </div>
                      <div>
                        <label>人工复核：</label><span>正常</span>
                      </div>
                    </div>
                  </div>
                  <div class="adjp_canvas">
                    <div class="top_top">
                      <span class="tt_txt">选择困难</span>
                    </div>
                    <div class="bottom_left">
                      <span class="tt_txt">过度控制</span>
                    </div>
                    <div class="bottom_right">
                      <span class="tt_txt">制作刻板</span>
                    </div>
                    <div
                      id="myChartPies2"
                      class="myChartPies2"
                      ref="myChartPies2"
                    ></div>
                    <ul class="chart_ul">
                      <li>
                        <span></span>
                        <span>统计结果</span>
                      </li>
                      <li>
                        <span></span>
                        <span>判断标准</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="adr_right">
              <div class="adrr_top">
                <img src="../../assets/images/params/workList.png" alt="">
                参数配置
              </div>
              <div class="adrr_head">
                <span></span>
                指标分析
              </div>
              <el-radio-group v-model="tarIndex">
                <el-radio :label="1">默认配置</el-radio>
                <el-radio :label="2">高灵敏度</el-radio>
                <el-radio :label="3">中灵敏度</el-radio>
                <el-radio :label="4">低灵敏度</el-radio>
              </el-radio-group>
              <div class="adrr_head">
                <span></span>
                单项阈值调节（在建议区间内调整）
              </div>
              <div class="adrr_lli">
                <div class="adrrl_top">
                  选择困难：<span>{{value1}}</span>
                </div>
                <div class="adrrl_body">
                  <span>2</span>
                  <div class="adrrl_cent">
                    <el-slider :show-tooltip="false" :min="2" :max="6" :step="0.01" v-model="value1"></el-slider>
                  </div>
                  <span>6</span>
                </div>
              </div>
              <div class="adrr_lli">
                <div class="adrrl_top">
                  制作刻板：<span style="color:#00C6FF">{{value2}}</span>
                </div>
                <div class="adrrl_body">
                  <span>0</span>
                  <div class="adrrl_cent adrrl_cent2">
                    <el-slider :show-tooltip="false" :min="0" :max="10" :step="0.01" v-model="value2"></el-slider>
                  </div>
                  <span>10</span>
                </div>
              </div>
              <div class="adrr_lli">
                <div class="adrrl_top">
                  过度控制：<span style="color:#3BE360">{{value3}}</span>
                </div>
                <div class="adrrl_body">
                  <span>2</span>
                  <div class="adrrl_cent adrrl_cent3">
                    <el-slider :show-tooltip="false" :min="2" :max="4" :step="0.01" v-model="value3"></el-slider>
                  </div>
                  <span>4</span>
                </div>
              </div>
              <div class="adrr_head">
                <span></span>
                单项权重调节
              </div>
              <div class="adrr_lli">
                <div class="adrrl_top">
                  选择困难：<span>{{value11}}</span>
                </div>
                <div class="adrrl_body">
                  <!-- <span>0</span> -->
                  <div class="adrrl_cent">
                    <el-slider :show-tooltip="false" :min="0" :max="40" :step="0.01" v-model="value11"></el-slider>
                  </div>
                  <!-- <span>40</span> -->
                </div>
              </div>
              <div class="adrr_lli">
                <div class="adrrl_top">
                  制作刻板：<span style="color:#00C6FF">{{value22}}</span>
                </div>
                <div class="adrrl_body">
                  <!-- <span>0</span> -->
                  <div class="adrrl_cent adrrl_cent2">
                    <el-slider :show-tooltip="false" :min="0" :max="40" :step="0.01" v-model="value22"></el-slider>
                  </div>
                  <!-- <span>40</span> -->
                </div>
              </div>
              <div class="adrr_lli">
                <div class="adrrl_top">
                  过度控制：<span style="color:#3BE360">{{value33}}</span>
                </div>
                <div class="adrrl_body">
                  <!-- <span>0</span> -->
                  <div class="adrrl_cent adrrl_cent3">
                    <el-slider :show-tooltip="false" :min="0" :max="40" :step="0.01" v-model="value33"></el-slider>
                  </div>
                  <!-- <span>40</span> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="preview_img" v-if="preImgFlag" @click="preImgFlag = false">
      <img src="../../assets/images/report/t001.png" alt="">
    </div>
  </div>
</template>

<script>
import echarts from "../../assets/js/echarts";
import Url from "@/assets/js/url.js";
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
      myTxtFlag: false,
      myChartPies1: "",
      myChartPies2: "",
      preImgFlag: false,
      value1: 5,
      value2: 3,
      value3: 3,
      value11: 30,
      value22: 30,
      value33: 30,
      tabActive: 1,
      tarIndex: 1
    };
  },
  mounted() {
    this.getDetail()
    window.addEventListener("resize", () => {
      setTimeout(() => {
        this.myTxtFlag = false;
        setTimeout(() => {
          this.myTxtFlag = true;
        }, 500);
        this.myChartPies1.resize();
        this.myChartPies2.resize();
      }, 100);
    });
  },
  methods: {
    resetChose() {
      let that = this;
      this.$confirm(
        '<div class="confirm_box" style="padding-top:0.22rem"><p>您确定进行整体评估吗？</p></div>',
        "提示",
        {
          dangerouslyUseHTMLString: true,
          cancelButtonText: "取消",
          confirmButtonText: "确定"
        }
      )
        .then(() => {
          that.$message({
            type: "success",
            message: "评估成功!"
          });
          that.$router.push({
            name: "record"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "评估失败!"
          });
        });
    },
    sysTotal() {
      this.$confirm(
        '<div class="confirm_box" style="padding-top:0.22rem"><p>您确定进行整体评估吗？</p></div>',
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
            message: "评估成功!"
          });
          // var checkArr = [{ reportId: row.reportId }]
          // this.$http
          //   .delete(Url + "/aimw/report/deleteReports", {
          //     data: checkArr
          //   })
          //   .then(res => {
          //     var data = res.data;
          //     if (data.code == 0) {
          //       this.$message({
          //         type: "success",
          //         message: "删除成功!"
          //       });
          //       this.getList(this.currentPage)
          //     } else {
          //       this.$message({
          //         type: "error",
          //         message: "删除失败!"
          //       });
          //     }
          //   });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "评估失败!"
          });
        });
    },
    // 恢复默认参数
    referen() {
      this.$confirm(
        '<div class="confirm_box" style="padding-top:0.22rem"><p>您确定恢复默认参数吗？</p></div>',
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
            message: "恢复成功!"
          });
          // var checkArr = [{ reportId: row.reportId }]
          // this.$http
          //   .delete(Url + "/aimw/report/deleteReports", {
          //     data: checkArr
          //   })
          //   .then(res => {
          //     var data = res.data;
          //     if (data.code == 0) {
          //       this.$message({
          //         type: "success",
          //         message: "删除成功!"
          //       });
          //       this.getList(this.currentPage)
          //     } else {
          //       this.$message({
          //         type: "error",
          //         message: "删除失败!"
          //       });
          //     }
          //   });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "恢复失败!"
          });
        });
    },
    previewImg() {
      this.preImgFlag = true
    },
    tabChange(type) {
      this.tabActive = type;
    },
    // 获取报告详情
    getDetail() {
      let that = this;
      var param = {
        reportID: "61268702115871176879767579119"
      };
      this.$http
        .get(Url + "/aimw/report/reportInfo", {
          params: param
        })
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            data.data.birth = data.data.birth.split(" ")[0];
            // if (data.data.ConfidenceLevel == 1) {
            //   data.data.ConfidenceLevel = "较低";
            // } else if (data.data.ConfidenceLevel == 2) {
            //   data.data.ConfidenceLevel = "较高";
            // } else if (data.data.ConfidenceLevel == 3) {
            //   data.data.ConfidenceLevel = "高";
            // } else {
            //   data.data.ConfidenceLevel = "低";
            // }
            if (data.data.confidenceLevel == 1) {
              data.data.confidenceLevel = "可信";
            } else {
              data.data.confidenceLevel = "不可信";
            }
            // data.data.Confidence = 9
            // data.data.warningNum = 2
            // let str =
            //   '测验提示，该生<span class="color-blue">焦虑</span>水平偏高，建议心理教师：|||针对学生过度忧虑，可以鼓励学生多与知心朋友、同学交流，寻求人际支持和心理资源，减轻这种担心。@@针对学生惶恐不安，可以建议学生定期进行冥想、正念训练等，从而缓解相应症状。@@针对学生易激惹，可以建议学生尝试呼吸放松方法，在感到情绪控制不住的时候，做几次深呼吸，帮助学生缓解情绪。';
            // console.log(str)
            // str = str.replace(/\|\|\|/g, "@@")
            // console.log(str)
            // let arrt = str.split("@@")
            // console.log(arrt)
            // data.data.suggestion = str;
            data.data.suggestion = data.data.suggestion
              .split(/[(\r\n)\r\n]+/)
              .filter(function(s) {
                return s && s.trim();
              });
            data.data.suggestionTop = data.data.suggestion[0]
            console.log(data.data.suggestionTop);
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
            console.log(data.data.depressionDim)
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
            console.log(depArr)
            data.data.anxietyDim = data.data.anxietyDim
              .split(/[(\r\n)\r\n]+/)
              .filter(function(s) {
                return s && s.trim();
              });
            console.log(data.data.anxietyDim)
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
            console.log(anxArr)
            data.data.forcedDim = data.data.forcedDim
              .split(/[(\r\n)\r\n]+/)
              .filter(function(s) {
                return s && s.trim();
              });
            console.log(data.data.forcedDim)
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
            console.log(forArr)
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
            console.log(this.sysList)
            that.details = that.justInfo(data.data);
            that.myChartInit();
            setTimeout(() => {
              that.myTxtFlag = true;
            }, 500);
            console.log(data);
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
      console.log(list);
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
    renderToolTipTr() {
      var table = '';
      // var list = SwichMap[currSwichKey]['data']['parameter']['list'];
      var list = [
        {
          name: '孙伟伟啊',
          subName: '出现沙具对称的数量',
          color: "#f00",
          onj: "1234",
          hjk: '9009'
        },
        {
          name: '孙伟伟啊',
          subName: '出现沙具对称的数量',
          color: "#f00",
          onj: "1234",
          hjk: '9009'
        },
        {
          name: '孙伟伟啊',
          subName: '出现沙具对称的数量',
          color: "#f00",
          onj: "1234",
          hjk: '9009'
        }
      ]
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        table += '<tr>';
        table += '<td><span>' + this.formatETip(item['name']) + '</span></td>';
        table += '<td><span>' + this.formatETip(item['subName']) + '</span></td>';
        table += '<td><span style="' + item.color + '">' + item.onj + '</span></td>';
        table += '<td><span>≥' + item.hjk + '</span></td>';
        table += '</tr>';
      }
      return table;
    },
    formatETip(text) {
      var newText = text.replaceAll('、', '</br>');
      return newText;
    },
    myChartInit() {
      let that = this;
      setTimeout(() => {
        this.myChartPies1 = echarts.init(
          document.getElementById("myChartPies1")
        );
        this.myChartPies1.setOption({
          tooltip: {
            trigger: 'item',
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#fff",
            textStyle: {
              color: "#5B6C89"
            },
            borderColor: "#fff",
            extraCssText: "box-shadow:0px 6px 24px 0px rgba(55, 142, 218, 0.3);",
            formatter: function(e) {
              var table = '';
              table += '<div class="eTableWrp">';
              table += '<table class="eTable">';
              table += '<tr style="font-weight: 600">';
              table += '<td>评估特质</td>';
              table += '<td>沙盘表现</td>';
              table += '<td style="color:#2372EE;">客观统计</td>';
              table += '<td style="color:#2372EE;">参考阈值</td>';
              table += '</tr>';
              table += that.renderToolTipTr();
              table += '</table>';
              table += '</div>';
              return table;
            }
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
                // areaStyle: {
                //   color: ["#fff"]
                // }
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
            // left: "center",
            // bottom: "0",
            // icon: "circle",
            // itemWidth: 10,
            // itemHeight: 10,
            // itemGap: 40,
            // textStyle: {
            //   color: "#354B70"
            // },
            data: [that.details.DepressionSubDim[0].name, that.details.DepressionSubDim[1].name, that.details.DepressionSubDim[2].name]
          },
          series: [
            {
              name: "",
              type: "radar",
              color: ["rgba(64,143,249,0.4)", "rgba(113,253,255,0.4)"],
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
                          color: "rgba(63, 98, 255, 0.9)"
                        },
                        {
                          offset: 1,
                          color: "rgba(37, 138, 255, 0.9)"
                        }
                      ],
                      globalCoord: false
                    }
                  }
                  // lineStyle: {
                  //   width: 0
                  // }
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
                  }
                  // lineStyle: {
                  //   width: 0
                  // }
                }
              ]
            }
          ]
        });
        this.myChartPies2 = echarts.init(
          document.getElementById("myChartPies2")
        );
        this.myChartPies2.setOption({
          tooltip: {
            trigger: 'item',
            axisPointer: {
              type: "shadow"
            },
            backgroundColor: "#fff",
            textStyle: {
              color: "#5B6C89"
            },
            borderColor: "#fff",
            extraCssText: "box-shadow:0px 6px 24px 0px rgba(55, 142, 218, 0.3);",
            formatter: function(e) {
              var table = '';
              table += '<div class="eTableWrp">';
              table += '<table class="eTable">';
              table += '<tr style="font-weight: 600">';
              table += '<td>评估特质</td>';
              table += '<td>沙盘表现</td>';
              table += '<td style="color:#2372EE;">客观统计</td>';
              table += '<td style="color:#2372EE;">参考阈值</td>';
              table += '</tr>';
              table += that.renderToolTipTr();
              table += '</table>';
              table += '</div>';
              return table;
            }
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
              splitArea: {},
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
            data: [that.details.DepressionSubDim[0].name, that.details.DepressionSubDim[1].name, that.details.DepressionSubDim[2].name]
          },
          series: [
            {
              name: "",
              type: "radar",
              color: ["rgba(64,143,249,0.4)", "rgba(113,253,255,0.4)"],
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
                          color: "rgba(63, 98, 255, 0.9)"
                        },
                        {
                          offset: 1,
                          color: "rgba(37, 138, 255, 0.9)"
                        }
                      ],
                      globalCoord: false
                    }
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
  .el-popper{
    .adrlu_txt{
      font-size: 0.16rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #2372EE;
      padding: 0 0.1rem;
      margin-top: 0.15rem;
      text-align: left;
      line-height: 1;
      display: flex;

      span{
        flex: 1;
        max-width: 5rem;
        color: #354B70;
      }
    }
    .adrlu_txt:last-child{
      margin-bottom: 0.15rem;
    }
  }
  .adjust_wrap{
    background: #E1F1FE;
    position: absolute;
    top: 0.86rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
    overflow-y: auto;
    .preview_img{
      z-index: 100;
      position: absolute;
      top: 0.86rem;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.3);
      img{
        width: 76%;
        height: auto;
      }
    }
    // height: 100vh;
    .adjust_box{
      // position: absolute;
      // top: 1.06rem;
      // left: 0.2rem;
      // right: 0.2rem;
      // bottom: 0.2rem;
      position: relative;
      margin: 0.2rem;
      z-index: 1;
      .adjust_left{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 3.7rem;
        background: #ffffff;
        // overflow-x: auto;
        box-shadow: 0px 0.04rem 0.4rem 0px rgba(47, 65, 110, 0.08);
        border-radius: 0.04rem;
        padding: 0.2rem;
        padding-right: 0;
        z-index: 10;
        .adjl_top{
          display: flex;
          align-items: center;
          font-size: 0.2rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #354B70;
          img{
            width: 0.26rem;
            height: 0.33rem;
            margin-right: 0.1rem;
          }
        }
        .adjl_ul{
          margin: 0.16rem 0;
          li{
            font-size: 0.16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #7786AC;
            display: flex;
            align-items: center;
            justify-content: space-between;
            line-height: 0.36rem;
            // padding-right: 0.2rem;
            // background: #f0f;
            .triang{
              visibility: hidden;
              position: relative;
              top: 0rem;
              right: -0.11rem;
              width: 0;
              height: 0;
              border-top: 0.06rem solid transparent;
              border-left: 0.12rem solid #52BEF9;
              border-bottom: 0.06rem solid transparent;
            }
            .adjl_name{
              width: 0.8rem;
            }
            .adjl_time{
              width: 1.6rem;
            }
            .adjl_txt{
              color: #4EE770;
              display: flex;
              align-items: center;
              width: 0.68rem;
              span{
                margin-right: 0.06rem;
                display: inline-block;
                width: 0.08rem;
                height: 0.08rem;
                border-radius: 50%;
              }
              .adt_red{
                background: linear-gradient(0deg, #FF414E 0%, #FFB1C0 93%);
              }
              .adt_green{
                background: linear-gradient(0deg, #38E25D 0%, #A0FFB5 100%);
              }
            }
            .adjl_red{
              color: #FF384F;
            }
          }
          .adjl_act{
            background: linear-gradient(90deg, #429CF8, #52BEF9);
            border-radius: 0.04rem;
            color: #fff;
            position: relative;
            .triang{
              visibility: inherit;
              position: relative;
              top: 0rem;
              right: -0.11rem;
              width: 0;
              height: 0;
              border-top: 0.06rem solid transparent;
              border-left: 0.12rem solid #52BEF9;
              border-bottom: 0.06rem solid transparent;
            }
          }
        }
        .adjl_btn{
          margin: 0 auto;
          text-align: center;
          font-size: 0.16rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 0.36rem;
          width: 1.38rem;
          height: 0.36rem;
          background: linear-gradient(263deg, #216FED, #5BB0FF);
          box-shadow: 0px 0.03rem 0.18rem 0px rgba(62, 150, 253, 0.19);
          border-radius: 0.03rem;
        }
      }
      .adjust_right{
        // background: chocolate;
        position: relative;
        // height: 100%;
        // margin-left: 3.9rem;
        .adr_box{
          // height: 100%;
          padding-left: 3.9rem;
          position: relative;
          .adr_top{
            display: flex;
            justify-content: space-between;
            height: 0.68rem;
            background: #ffffff;
            align-items: center;
            margin-bottom: 0.2rem;
            box-shadow: 0px 0.04rem 0.4rem 0px rgba(47, 65, 110, 0.08);
            border-radius: 0.04rem;
            .tab_box {
              height: 0.32rem;
              display: flex;
              margin-left: 0.2rem;
              justify-content: flex-end;
              box-shadow: 0px 2px 9px 0px rgba(0, 123, 255, 0.2);
              border: 0.01rem solid #2372EE;
              border-radius: 0.05rem;
              overflow: hidden;
              .tab_btns {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 0.8rem;
                height: 0.3rem;
                font-size: 0.16rem;
                font-family: PingFang SC;
                font-weight: 400;
                color: #2372EE;
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
              .tab_btns_z{
                border-radius: 0;
                border-left: 0.01rem solid #2372EE;
                border-right: 0.01rem solid #2372EE;
              }
              .tab_act {
                color: #ffffff;
                background: linear-gradient(263deg, #5BB0FF, #216FED);
              }
            }
            .adrt_right{
              display: flex;
              align-items: center;
              justify-content: center;
              .adrt_ing{
                font-size: 0.16rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #00C6FF;
                margin-right: 0.6rem;
              }
              // 表格上面的操作按钮
              .el_btn_box {
                margin: 0.18rem 0;
                display: flex;
                .el_one,
                .el_two {
                  margin-right: 0.18rem;
                  // width: 1.16rem;
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
                    padding: 0;
                    border: 0;
                    font-size: 0.16rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #ffffff;
                    background: linear-gradient(263deg, #00c2ff, #0075ff);
                    border-radius: 0.04rem;
                    padding: 0 0.14rem;
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
          .adr_main{
            // position: absolute;
            // left: 0;
            // right: 0;
            // top: 0.88rem;
            // bottom: 0;
            position: relative;
            padding-right: 4.06rem;
            .adr_left{
              height: 100%;
              background: #ffffff;
              box-shadow: 0px 0.04rem 0.4rem 0px rgba(47, 65, 110, 0.08);
              border-radius: 0.04rem;
              padding: 0.2rem;
              // overflow: hidden;
              overflow-y: auto;
              .adrr_top{
                display: flex;
                align-items: center;
                font-size: 0.2rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #354B70;
                img{
                  width: 0.30rem;
                  height: 0.22rem;
                  margin-right: 0.06rem;
                }
              }
              .adrr_head{
                display: flex;
                align-items: center;
                font-size: 0.18rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #354B70;
                margin: 0.2rem 0;
                span{
                  display: block;
                  background: linear-gradient(0deg, #216FED 0%, #5BB0FF 100%);
                  margin-right: 0.1rem;
                  margin-left: 0.05rem;
                  width: 0.04rem;
                  height: 0.18rem;

                }
              }
              .adrl_ul{
                display: flex;
                justify-content: space-between;
                li{
                  width: 3.35rem;
                  border:0.01rem solid #DBEBF9;
                  padding:0 0.15rem 0.2rem;
                  img{
                    display: block;
                    width: 3.03rem;
                    height: 1.69rem;
                  }
                  .adrlu_head{
                    font-size: 0.18rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #2372EE;
                    text-align: left;
                    padding: 0.17rem 0 0.12rem;
                    line-height: 1;
                    span{
                      color: #354B70;
                    }
                  }
                  .adrlu_txt{
                    font-size: 0.16rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #2372EE;
                    margin-top: 0.15rem;
                    text-align: left;
                    line-height: 1;
                    display: flex;

                    span{
                      flex: 1;
                      color: #354B70;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                  }
                }
                li:nth-child(2){
                  margin:0 0.2rem;
                }
              }
              .adjust_param{
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 3.82rem;
                .eTableWrp{
                  // width: 4rem;
                  .eTable{
                    width: auto;
                    display: flex;
                    justify-content: space-between;
                    tr{
                      padding: 0.1rem 0;
                      height: 0.32rem;
                      td{
                        min-width: 1.2rem;
                      }
                    }
                  }
                  
                }
                .adjp_left{
                  width: 5rem;
                  padding: 0.16rem;
                  height: 100%;
                  border: 0.01rem solid #DBEBF9;
                  .adjp_top{
                    display: flex;
                    justify-content: space-between;
                    // align-items: center;
                    .adjp_tle{
                      font-size: 0.18rem;
                      font-family: Source Han Sans CN;
                      font-weight: 400;
                      color: #2372EE;
                    }
                    .adjp_sys{
                      font-size: 0.16rem;
                      font-family: Source Han Sans CN;
                      font-weight: 400;
                      color: #354B70;
                      label{
                        display: inline-block;
                        width: 1.2rem;
                        line-height: 0.26rem;
                        text-align: right;
                      }
                    }
                  }
                  .adjp_canvas{
                    width: 100%;
                    height: 2.85rem;
                    // position: relative;
                    padding: 0.3rem 0;
                    .myChartPies1{
                      position: static !important;
                      width: 100%;
                      height: 2.25rem;
                    }
                    .chart_ul{
                      position: relative;
                      margin: auto;
                      left: 0;
                      right: 0;
                      bottom: -0.1rem;
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
                          background: linear-gradient(174deg, #1BECFF 0%, #00C6FF 98%);
                          border-radius: 50%;
                        }
                      }
                      li:last-child {
                        span:first-child {
                          background: linear-gradient(0deg, #216FED 0%, #5BB0FF 100%);
                        }
                      }
                    }
                    .top_top{
                      position: absolute;
                      margin: auto;
                      left: 2.12rem;
                      width: 1.2rem;
                      bottom: 3.16rem;
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
                      bottom: 1.14rem;
                      left: 0.68rem;
                      width: 1.2rem;
                      margin-left: 0;
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
                      bottom: 1.14rem;
                      left: 3.5rem;
                      width: 1.2rem;
                      margin-left: 0;
                      .tt_txt{
                        font-size: 0.16rem;
                        font-family: PingFang SC;
                        font-weight: 400;
                        color: #354B70;
                        line-height: 0.2rem;
                        display: block;
                      }
                    }
                  }
                }
                .adjp_center{
                  width: 0.3rem;
                  height: 0.24rem;
                  img{
                    width: 100%;
                    height: 100%;
                  }
                }
                .adjp_right{
                  width: 5rem;
                  padding: 0.16rem;
                  height: 100%;
                  border: 0.01rem solid #DBEBF9;
                  .adjp_top{
                    display: flex;
                    justify-content: space-between;
                    // align-items: center;
                    .adjp_tle{
                      font-size: 0.18rem;
                      font-family: Source Han Sans CN;
                      font-weight: 400;
                      color: #2372EE;
                    }
                    .adjp_sys{
                      font-size: 0.16rem;
                      font-family: Source Han Sans CN;
                      font-weight: 400;
                      color: #354B70;
                      label{
                        display: inline-block;
                        width: 1.2rem;
                        line-height: 0.26rem;
                        text-align: right;
                      }
                    }
                  }
                  .adjp_canvas{
                    width: 100%;
                    height: 2.85rem;
                    // position: relative;
                    padding: 0.3rem 0;
                    .myChartPies2{
                      position: static !important;
                      width: 100%;
                      height: 2.25rem;
                    }
                    .chart_ul{
                      position: relative;
                      margin: auto;
                      left: 0;
                      right: 0;
                      bottom: -0.1rem;
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
                          background: linear-gradient(174deg, #1BECFF 0%, #00C6FF 98%);
                          border-radius: 50%;
                        }
                      }
                      li:last-child {
                        span:first-child {
                          background: linear-gradient(0deg, #216FED 0%, #5BB0FF 100%);
                        }
                      }
                    }
                    .top_top{
                      position: absolute;
                      margin: auto;
                      left: 7.42rem;
                      width: 1.2rem;
                      bottom: 3.16rem;
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
                      bottom: 1.14rem;
                      left: 6.08rem;
                      width: 1.2rem;
                      margin-left: 0;
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
                      bottom: 1.14rem;
                      left: 8.9rem;
                      width: 1.2rem;
                      margin-left: 0;
                      .tt_txt{
                        font-size: 0.16rem;
                        font-family: PingFang SC;
                        font-weight: 400;
                        color: #354B70;
                        line-height: 0.2rem;
                        display: block;
                      }
                    }
                  }
                }

              }
            }
            .adr_right{
              width: 3.86rem;
              background: #ffffff;
              position: absolute;
              height: 100%;
              top: 0;
              right: 0;
              box-shadow: 0px 0.04rem 0.4rem 0px rgba(47, 65, 110, 0.08);
              border-radius: 0.04rem;
              padding: 0.2rem;
              overflow: hidden;
              overflow-y: auto;
              .adrr_top{
                display: flex;
                align-items: center;
                font-size: 0.2rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #354B70;
                img{
                  width: 0.36rem;
                  height: 0.36rem;
                  margin-right: 0.06rem;
                }
              }
              .adrr_head{
                display: flex;
                align-items: center;
                font-size: 0.18rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #354B70;
                margin: 0.2rem 0;
                span{
                  display: block;
                  background: linear-gradient(0deg, #216FED 0%, #5BB0FF 100%);
                  margin-right: 0.1rem;
                  margin-left: 0.05rem;
                  width: 0.04rem;
                  height: 0.18rem;

                }
              }
              .adrr_lli{
                margin-bottom: 0.1rem;
                .adrrl_top{
                  display: flex;
                  align-items: center;
                  font-size: 0.16rem;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #7786AC;
                  span{
                    color: #2372EE;
                  }
                }
                .adrrl_body{
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  .adrrl_cent{
                    flex: 1;
                    margin: 0 0.1rem;
                    .el-slider__bar{
                      height: 0.08rem;
                      background: linear-gradient(90deg, #216FED, #5BB0FF);
                    }
                    .el-slider__button{
                      width: 0.2rem;
                      height: 0.2rem;
                      border: 0.04rem solid #ffffff;
                      background: linear-gradient(183deg, #429CF8 0%, #52BEF9 100%);
                      box-shadow: 0px 0.01rem 0.16rem 0px rgba(8, 88, 170, 0.24);
                    }
                  }
                  .adrrl_cent2{
                    .el-slider__bar{
                      background: linear-gradient(90deg, #1BECFF, #00C6FF);
                    }
                    .el-slider__button{
                      background: linear-gradient(11deg, #1BECFF 0%, #00C6FF 98%);
                    }
                  }
                  .adrrl_cent3{
                    .el-slider__bar{
                      background: linear-gradient(90deg, #38E25D, #A0FFB5);
                    }
                    .el-slider__button{
                      background: linear-gradient(186deg, #38E25D 0%, #A0FFB5 100%);
                    }
                  }
                  span{
                    font-size: 0.18rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #7786AC;
                  }
                }
              }
              .el-radio-group{
                margin-left: 0.2rem;
                .el-radio{
                  width: 100%;
                  text-align: left;
                  margin-bottom: 0.16rem;
                  font-size: 0.16rem;
                  font-family: Source Han Sans CN;
                  font-weight: 400;
                  color: #7786AC;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
