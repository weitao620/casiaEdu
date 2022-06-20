<template>
  <div class="detail_teacher_wrap">
    <div class="top_back" @click="topBacks" v-show="scrollYs > part0">
      <img src="../../assets/images/report/to_top.png" alt="" />
    </div>
    <div
      :class="['r_futi', { r_futi_fix: scrollYs > part0 }]"
      v-show="scrollYs > part0 && !reviewFlag"
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
            { r_t_tab_act1: topAct == 4 },
            { r_t_b0: topAct == 1 }
          ]"
          @click="trendTab(4)"
        >
          <img src="../../assets/images/report/part8.png" alt="" />
          <span>作品解读</span>
        </div>
        <div
          :class="['r_t_tab', { r_t_tab_act2: topAct == 1 }]"
          @click="trendTab(1)"
        >
          <img src="../../assets/images/report/part1.png" alt="" />
          <span>本次概况</span>
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
    <div
      :class="['r_futi', { r_futi_fix: scrollYs > part0 }]"
      v-show="scrollYs > part0 && reviewFlag"
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
          @click="trendTabs(1)"
        >
          <img src="../../assets/images/report/part1.png" alt="" />
          <span>图片回顾</span>
        </div>
        <div
          :class="['r_t_tab', { r_t_tab_act2: topAct == 2 }]"
          @click="trendTabs(2)"
        >
          <img src="../../assets/images/report/part5.png" alt="" />
          <span>作品信息统计</span>
        </div>
        <div
          :class="['r_t_tab', { r_t_tab_act2: topAct == 3 }]"
          @click="trendTabs(3)"
        >
          <img src="../../assets/images/report/part6.png" alt="" />
          <span>沙具统计</span>
        </div>
        <div
          :class="['r_t_tab', { r_t_tab_act2: topAct == 4 }]"
          @click="trendTabs(4)"
        >
          <img src="../../assets/images/report/part7.png" alt="" />
          <span>附录</span>
        </div>
      </div>
    </div>
    <div class="dt_header">
      <div class="dt_h_box">
        <span>数据更新时间：{{ details.reportTime }}</span>
        <div v-if="part44" class="dt_download" @click="personExport">
          下载报告
        </div>
      </div>
    </div>
    <div class="dt_top_bg">
      <div class="dttb_tips">
        <img src="../../assets/images/report/tip_index.png" alt="" />
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
            <li style="width:2.2rem">
              <img
                class="dt_per1"
                src="../../assets/images/report/person1.png"
                alt=""
              />
              <span class="dt_blod">姓名：</span>
              <span>{{ details.name }}</span>
            </li>
            <li style="width:2.6rem;display:flex">
              <img
                class="dt_per2"
                src="../../assets/images/report/person2.png"
                alt=""
              />
              <span class="dt_blod">学籍号：</span>
              <span style="flex:1;word-break:break-all;">{{
                details.passport
              }}</span>
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
            <li style="width:2.2rem">
              <img
                class="dt_per6"
                src="../../assets/images/report/person6.png"
                alt=""
              />
              <span class="dt_blod"></span>
              <span>{{ details.className }}</span>
            </li>
            <li style="width:2.6rem;display:flex">
              <img
                class="dt_per7"
                src="../../assets/images/report/person7.png"
                alt=""
              />
              <span class="dt_blod">测评次数：</span>
              <span style="flex:1;word-break:break-all;"
                >第{{ details.evaluationTime }}次</span
              >
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
    <div class="dt_mains" v-show="!reviewFlag">
      <div class="dtm_title" ref="parts4">
        作品解读
      </div>
      <div class="dtm_contain">
        <div class="dtmc_left">
          <div class="dtmcl_tle">
            <img
              src="../../assets/images/report/total2.png"
              style="width:0.35rem;height:0.34rem"
              alt=""
            />
            <span>箱庭鸟瞰图</span>
          </div>
          {{ details.birdView }}
          <div class="dtmcl_pic" v-if="details.birdView" @click="birdView">
            <img :src="'data:image;base64,' + details.birdView" alt="" />
          </div>
          <div class="dtmcl_pic" v-else>
            <img src="../../assets/images/report/t001.png" alt="" />
          </div>
        </div>
        <div class="dtmc_right1">
          <div class="dtmcl_tle">
            <img
              src="../../assets/images/report/total3.png"
              style="width:0.28rem;height:0.30rem"
              alt=""
            />
            <span>箱庭解析</span>
          </div>
          <div class="dtmcr_bts1">
            <p>
              <img src="../../assets/images/report/icon1.png" alt="" />
              <span v-html="details.selfDiscription"></span>
            </p>
            <p>
              <img src="../../assets/images/report/icon1.png" alt="" />
              <span v-html="details.satisfyArea"></span>
            </p>
          </div>
        </div>
      </div>
      <div class="dtm_title" ref="parts1">
        本次概况
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
            <div class="c_o_my_num c_red" v-show="myTxtFlag">
              需关注
            </div>
          </div>
          <div class="dtmcl_du">
            <img src="../../assets/images/report/ke_du.png" alt="" />
            <span>可信度：</span>
            <span class="dtmcl_tx">{{ details.confidenceLevel }}</span>
          </div>
          <div class="dtmcl_txt">
            {{ details.confidence }}
          </div>
          <div class="dtmcl_sys">
            <div class="dtmcl_du dtmcl_du1">
              <img src="../../assets/images/report/icon2.png" alt="" />
              <span>风险评估</span>
            </div>
            <div v-if="details.reportWarningInfo">
              <div
                style="padding: 0 0.24rem"
                v-if="details.warningList.length == 0"
              >
                该生心理健康水平良好。
              </div>
              <div v-else>
                <div
                  v-for="(item, index) in details.warningList"
                  :key="item.id"
                >
                  <div class="dtmcl_du dtmcl_du2" v-if="item.old != '正常'">
                    <img
                      :src="
                        require('../../assets/images/report/icons' +
                          index +
                          '.png')
                      "
                      alt=""
                    />
                    <span v-html="item.new"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dtmc_right">
          <div class="dtmcl_tle">
            <span>指标</span>
            <span>本次结果</span>
            <span>上次结果</span>
            <span>个人平均参测结果</span>
          </div>
          <div class="dtmcl_box">
            <ul class="dtmcr_ul">
              <li>抑郁</li>
              <li v-if="details.reportWarningInfo">
                <div class="dr_li11">
                  <img
                    v-if="details.reportWarningInfo.depressionLevel == 0"
                    src="../../assets/images/report/sys_btn1.png"
                    alt=""
                  />
                  <img
                    v-if="details.reportWarningInfo.depressionLevel == 1"
                    src="../../assets/images/report/sys_btn2.png"
                    alt=""
                  />
                  <img
                    v-if="details.reportWarningInfo.depressionLevel == 2"
                    src="../../assets/images/report/sys_btn3.png"
                    alt=""
                  />
                  <img
                    v-if="details.reportWarningInfo.depressionLevel == 3"
                    src="../../assets/images/report/sys_btn4.png"
                    alt=""
                  />
                </div>
                <span
                  :class="[
                    { dr_sp0: details.reportWarningInfo.depressionLevel == 0 },
                    { dr_sp1: details.reportWarningInfo.depressionLevel == 1 },
                    { dr_sp2: details.reportWarningInfo.depressionLevel == 2 },
                    { dr_sp3: details.reportWarningInfo.depressionLevel == 3 }
                  ]"
                  >{{ details.reportWarningInfo.depressionScore }}</span
                >
              </li>
              <li v-if="details.lastWarningInfo">
                <div class="dr_li11">
                  <img
                    v-if="details.lastWarningInfo.depressionLevel == 0"
                    src="../../assets/images/report/sys_btn1.png"
                    alt=""
                  />
                  <img
                    v-if="details.lastWarningInfo.depressionLevel == 1"
                    src="../../assets/images/report/sys_btn2.png"
                    alt=""
                  />
                  <img
                    v-if="details.lastWarningInfo.depressionLevel == 2"
                    src="../../assets/images/report/sys_btn3.png"
                    alt=""
                  />
                  <img
                    v-if="details.lastWarningInfo.depressionLevel == 3"
                    src="../../assets/images/report/sys_btn4.png"
                    alt=""
                  />
                </div>
                <span
                  v-if="details.lastWarningInfo.depressionLevel != -1"
                  :class="[
                    { dr_sp0: details.lastWarningInfo.depressionLevel == 0 },
                    { dr_sp1: details.lastWarningInfo.depressionLevel == 1 },
                    { dr_sp2: details.lastWarningInfo.depressionLevel == 2 },
                    { dr_sp3: details.lastWarningInfo.depressionLevel == 3 }
                  ]"
                  >{{ details.lastWarningInfo.depressionScore }}</span
                >
                <span v-else>/</span>
              </li>
              <li v-if="details.warningAvgInfo">
                <div class="dr_li11">
                  <img
                    v-if="details.warningAvgInfo.depressionLevel == 0"
                    src="../../assets/images/report/sys_btn1.png"
                    alt=""
                  />
                  <img
                    v-if="details.warningAvgInfo.depressionLevel == 1"
                    src="../../assets/images/report/sys_btn2.png"
                    alt=""
                  />
                  <img
                    v-if="details.warningAvgInfo.depressionLevel == 2"
                    src="../../assets/images/report/sys_btn3.png"
                    alt=""
                  />
                  <img
                    v-if="details.warningAvgInfo.depressionLevel == 3"
                    src="../../assets/images/report/sys_btn4.png"
                    alt=""
                  />
                </div>
                <span
                  v-if="details.warningAvgInfo.depressionLevel != -1"
                  :class="[
                    { dr_sp0: details.warningAvgInfo.depressionLevel == 0 },
                    { dr_sp1: details.warningAvgInfo.depressionLevel == 1 },
                    { dr_sp2: details.warningAvgInfo.depressionLevel == 2 },
                    { dr_sp3: details.warningAvgInfo.depressionLevel == 3 }
                  ]"
                  >{{ details.warningAvgInfo.depressionScore }}</span
                >
                <span v-else>/</span>
              </li>
            </ul>
            <ul class="dtmcr_ul">
              <li>焦虑</li>
              <li v-if="details.reportWarningInfo">
                <div class="dr_li11">
                  <img
                    v-if="details.reportWarningInfo.anxietyLevel == 0"
                    src="../../assets/images/report/sys_btn1.png"
                    alt=""
                  />
                  <img
                    v-if="details.reportWarningInfo.anxietyLevel == 1"
                    src="../../assets/images/report/sys_btn2.png"
                    alt=""
                  />
                  <img
                    v-if="details.reportWarningInfo.anxietyLevel == 2"
                    src="../../assets/images/report/sys_btn3.png"
                    alt=""
                  />
                  <img
                    v-if="details.reportWarningInfo.anxietyLevel == 3"
                    src="../../assets/images/report/sys_btn4.png"
                    alt=""
                  />
                </div>
                <span
                  :class="[
                    { dr_sp0: details.reportWarningInfo.anxietyLevel == 0 },
                    { dr_sp1: details.reportWarningInfo.anxietyLevel == 1 },
                    { dr_sp2: details.reportWarningInfo.anxietyLevel == 2 },
                    { dr_sp3: details.reportWarningInfo.anxietyLevel == 3 }
                  ]"
                  >{{ details.reportWarningInfo.anxietyScore }}</span
                >
              </li>
              <li v-if="details.lastWarningInfo">
                <div class="dr_li11">
                  <img
                    v-if="details.lastWarningInfo.anxietyLevel == 0"
                    src="../../assets/images/report/sys_btn1.png"
                    alt=""
                  />
                  <img
                    v-if="details.lastWarningInfo.anxietyLevel == 1"
                    src="../../assets/images/report/sys_btn2.png"
                    alt=""
                  />
                  <img
                    v-if="details.lastWarningInfo.anxietyLevel == 2"
                    src="../../assets/images/report/sys_btn3.png"
                    alt=""
                  />
                  <img
                    v-if="details.lastWarningInfo.anxietyLevel == 3"
                    src="../../assets/images/report/sys_btn4.png"
                    alt=""
                  />
                </div>
                <span
                  v-if="details.lastWarningInfo.anxietyLevel != -1"
                  :class="[
                    { dr_sp0: details.lastWarningInfo.anxietyLevel == 0 },
                    { dr_sp1: details.lastWarningInfo.anxietyLevel == 1 },
                    { dr_sp2: details.lastWarningInfo.anxietyLevel == 2 },
                    { dr_sp3: details.lastWarningInfo.anxietyLevel == 3 }
                  ]"
                  >{{ details.lastWarningInfo.anxietyScore }}</span
                >
                <span v-else>/</span>
              </li>
              <li v-if="details.warningAvgInfo">
                <div class="dr_li11">
                  <img
                    v-if="details.warningAvgInfo.anxietyLevel == 0"
                    src="../../assets/images/report/sys_btn1.png"
                    alt=""
                  />
                  <img
                    v-if="details.warningAvgInfo.anxietyLevel == 1"
                    src="../../assets/images/report/sys_btn2.png"
                    alt=""
                  />
                  <img
                    v-if="details.warningAvgInfo.anxietyLevel == 2"
                    src="../../assets/images/report/sys_btn3.png"
                    alt=""
                  />
                  <img
                    v-if="details.warningAvgInfo.anxietyLevel == 3"
                    src="../../assets/images/report/sys_btn4.png"
                    alt=""
                  />
                </div>
                <span
                  v-if="details.warningAvgInfo.anxietyLevel != -1"
                  :class="[
                    { dr_sp0: details.warningAvgInfo.anxietyLevel == 0 },
                    { dr_sp1: details.warningAvgInfo.anxietyLevel == 1 },
                    { dr_sp2: details.warningAvgInfo.anxietyLevel == 2 },
                    { dr_sp3: details.warningAvgInfo.anxietyLevel == 3 }
                  ]"
                  >{{ details.warningAvgInfo.anxietyScore }}</span
                >
                <span v-else>/</span>
              </li>
            </ul>
            <ul class="dtmcr_ul">
              <li>强迫</li>
              <li v-if="details.reportWarningInfo">
                <div class="dr_li11">
                  <img
                    v-if="details.reportWarningInfo.forcedLevel == 0"
                    src="../../assets/images/report/sys_btn1.png"
                    alt=""
                  />
                  <img
                    v-if="details.reportWarningInfo.forcedLevel == 1"
                    src="../../assets/images/report/sys_btn2.png"
                    alt=""
                  />
                  <img
                    v-if="details.reportWarningInfo.forcedLevel == 2"
                    src="../../assets/images/report/sys_btn3.png"
                    alt=""
                  />
                  <img
                    v-if="details.reportWarningInfo.forcedLevel == 3"
                    src="../../assets/images/report/sys_btn4.png"
                    alt=""
                  />
                </div>
                <span
                  :class="[
                    { dr_sp0: details.reportWarningInfo.forcedLevel == 0 },
                    { dr_sp1: details.reportWarningInfo.forcedLevel == 1 },
                    { dr_sp2: details.reportWarningInfo.forcedLevel == 2 },
                    { dr_sp3: details.reportWarningInfo.forcedLevel == 3 }
                  ]"
                  >{{ details.reportWarningInfo.forcedScore }}</span
                >
              </li>
              <li v-if="details.lastWarningInfo">
                <div class="dr_li11">
                  <img
                    v-if="details.lastWarningInfo.forcedLevel == 0"
                    src="../../assets/images/report/sys_btn1.png"
                    alt=""
                  />
                  <img
                    v-if="details.lastWarningInfo.forcedLevel == 1"
                    src="../../assets/images/report/sys_btn2.png"
                    alt=""
                  />
                  <img
                    v-if="details.lastWarningInfo.forcedLevel == 2"
                    src="../../assets/images/report/sys_btn3.png"
                    alt=""
                  />
                  <img
                    v-if="details.lastWarningInfo.forcedLevel == 3"
                    src="../../assets/images/report/sys_btn4.png"
                    alt=""
                  />
                </div>
                <span
                  v-if="details.lastWarningInfo.forcedLevel != -1"
                  :class="[
                    { dr_sp0: details.lastWarningInfo.forcedLevel == 0 },
                    { dr_sp1: details.lastWarningInfo.forcedLevel == 1 },
                    { dr_sp2: details.lastWarningInfo.forcedLevel == 2 },
                    { dr_sp3: details.lastWarningInfo.forcedLevel == 3 }
                  ]"
                  >{{ details.lastWarningInfo.forcedScore }}</span
                >
                <span v-else>/</span>
              </li>
              <li v-if="details.warningAvgInfo">
                <div class="dr_li11">
                  <img
                    v-if="details.warningAvgInfo.forcedLevel == 0"
                    src="../../assets/images/report/sys_btn1.png"
                    alt=""
                  />
                  <img
                    v-if="details.warningAvgInfo.forcedLevel == 1"
                    src="../../assets/images/report/sys_btn2.png"
                    alt=""
                  />
                  <img
                    v-if="details.warningAvgInfo.forcedLevel == 2"
                    src="../../assets/images/report/sys_btn3.png"
                    alt=""
                  />
                  <img
                    v-if="details.warningAvgInfo.forcedLevel == 3"
                    src="../../assets/images/report/sys_btn4.png"
                    alt=""
                  />
                </div>
                <span
                  v-if="details.warningAvgInfo.forcedLevel != -1"
                  :class="[
                    { dr_sp0: details.warningAvgInfo.forcedLevel == 0 },
                    { dr_sp1: details.warningAvgInfo.forcedLevel == 1 },
                    { dr_sp2: details.warningAvgInfo.forcedLevel == 2 },
                    { dr_sp3: details.warningAvgInfo.forcedLevel == 3 }
                  ]"
                  >{{ details.warningAvgInfo.forcedScore }}</span
                >
                <span v-else>/</span>
              </li>
            </ul>
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
                  <span style="font-size:0.18rem;margin-top:0.48rem"
                    >评估结果</span
                  >
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
                  </div>
                </div>
              </div>
              <div class="dtmsb_tar">
                <div v-if="index == 0" style="position:relative">
                  <div class="top_top" v-if="item.subDim">
                    <span class="tt_txt">{{ item.subDim[0].name }}</span>
                    <div class="demsb_tool">
                      <div class="demsb_score">
                        学生得分：<span>{{
                          parseInt(item.subDim[0].score)
                        }}</span>
                      </div>
                      <!-- <div class="demsb_score demsb_score1">
                        标准水平：<span>{{
                          item.subDim[2].thre
                        }}</span>
                      </div> -->
                    </div>
                  </div>
                  <div class="bottom_left" v-if="item.subDim">
                    <span class="tt_txt">{{ item.subDim[2].name }}</span>
                    <div class="demsb_tool" style="margin-left:1.6rem">
                      <div class="demsb_score">
                        学生得分：<span>{{
                          parseInt(item.subDim[2].score)
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="bottom_right" v-if="item.subDim">
                    <span class="tt_txt">{{ item.subDim[1].name }}</span>
                    <div class="demsb_tool1">
                      <div class="demsb_score">
                        学生得分：<span>{{
                          parseInt(item.subDim[1].score)
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    id="myChartPies1"
                    class="myChartPies1"
                    ref="myChartPies1"
                  ></div>
                </div>
                <div v-if="index == 1" style="position:relative">
                  <div class="top_top" v-if="item.subDim">
                    <span class="tt_txt">{{ item.subDim[0].name }}</span>
                    <div class="demsb_tool">
                      <div class="demsb_score">
                        学生得分：<span>{{
                          parseInt(item.subDim[0].score)
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="bottom_left" v-if="item.subDim">
                    <span class="tt_txt">{{ item.subDim[2].name }}</span>
                    <div class="demsb_tool" style="margin-left:1.6rem">
                      <div class="demsb_score">
                        学生得分：<span>{{
                          parseInt(item.subDim[2].score)
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="bottom_right" v-if="item.subDim">
                    <span class="tt_txt">{{ item.subDim[1].name }}</span>
                    <div class="demsb_tool1">
                      <div class="demsb_score">
                        学生得分：<span>{{
                          parseInt(item.subDim[1].score)
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    id="myChartPies2"
                    class="myChartPies2"
                    ref="myChartPies2"
                  ></div>
                </div>
                <div v-if="index == 2" style="position:relative">
                  <div class="top_top" v-if="item.subDim">
                    <span class="tt_txt">{{ item.subDim[0].name }}</span>
                    <div class="demsb_tool">
                      <div class="demsb_score">
                        学生得分：<span>{{
                          parseInt(item.subDim[0].score)
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="bottom_left" v-if="item.subDim">
                    <span class="tt_txt">{{ item.subDim[2].name }}</span>
                    <div class="demsb_tool" style="margin-left:1.6rem">
                      <div class="demsb_score">
                        学生得分：<span>{{
                          parseInt(item.subDim[2].score)
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="bottom_right" v-if="item.subDim">
                    <span class="tt_txt">{{ item.subDim[1].name }}</span>
                    <div class="demsb_tool1">
                      <div class="demsb_score">
                        学生得分：<span>{{
                          parseInt(item.subDim[1].score)
                        }}</span>
                      </div>
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
                  <img
                    v-if="item.imgType == 4"
                    src="../../assets/images/report/sys4.png"
                    alt=""
                  />
                  测评结果分析
                </div>
                <p v-for="(items, keps) in item.list" :key="keps">
                  <img
                    v-if="item.imgType == 1"
                    src="../../assets/images/report/icon0.png"
                    alt=""
                  />
                  <img
                    v-if="item.imgType == 2"
                    src="../../assets/images/report/icon1.png"
                    alt=""
                  />
                  <img
                    v-if="item.imgType == 3"
                    src="../../assets/images/report/icon6.png"
                    alt=""
                  />
                  <img
                    v-if="item.imgType == 4"
                    src="../../assets/images/report/icon7.png"
                    alt=""
                  />
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
            <img
              src="../../assets/images/report/guide_i.png"
              style="width:0.3rem;height:0.29rem"
              alt=""
            />
            <span>指导建议</span>
          </div>
          <div class="gb_contain">
            <div v-for="(item, index) in details.suggestion" :key="index">
              <p v-if="!Array.isArray(item)">
                <img src="../../assets/images/report/icon0.png" alt="" /><span
                  v-html="item"
                ></span>
              </p>
              <div v-if="Array.isArray(item)">
                <ul>
                  <li v-for="(items, indexs) in item" :key="indexs">
                    <span>{{ indexs + 1 }}</span>
                    <p>
                      {{ items }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dt_mains2" v-show="reviewFlag">
      <div class="dtm_title" ref="parts11">
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
              <img class="dtmi_img" :src="item.img" alt="" />
              <div class="dtmi_txt">{{ item.name }}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="dtm_title" ref="parts12">
        作品信息统计
      </div>
      <div class="dtm_xls" v-if="reviewData.workInfo">
        <div class="dtmx_li">
          <div class="dtmxl_head">作品名称</div>
          <div class="dtmxl_body">{{ reviewData.workInfo.workName }}</div>
          <div class="dtmxl_head">自我像</div>
          <div class="dtmxl_body">{{ reviewData.workInfo.representSand }}</div>
        </div>
        <div class="dtmx_li">
          <div class="dtmxl_head">最重要的沙具</div>
          <div class="dtmxl_body">{{ reviewData.workInfo.importantSand }}</div>
          <div class="dtmxl_head">制作次数</div>
          <div class="dtmxl_body">
            第<span>{{ reviewData.workInfo.time }}</span
            >次
          </div>
        </div>
        <div class="dtmx_li">
          <div class="dtmxl_head">满意程度</div>
          <div class="dtmxl_body">
            <span>{{ reviewData.workInfo.satisfaction }}</span
            >分
          </div>
          <div class="dtmxl_head">制作用时</div>
          <div class="dtmxl_body">{{ reviewData.workInfo.operationTime }}</div>
        </div>
        <div class="dtmx_li">
          <div class="dtmxl_head">作品场景</div>
          <div class="dtmxl_body">{{ reviewData.workInfo.scene }}</div>
          <div class="dtmxl_head">沙具删除比例</div>
          <div class="dtmxl_body">
            <span>{{ reviewData.workInfo.deleteScale }}</span
            >%
          </div>
        </div>

        <div class="dtmx_li dtmx_lis" v-if="reviewData.workInfo.themeInfo">
          <div class="dtmxl_head">主题统计</div>
          <div class="dtmxl_body">
            <div class="dtmxl_dl">
              <div class="dtmxl_dt">创伤主题</div>
              <div class="dtmxl_dd">
                {{ reviewData.workInfo.themeInfo.traumaTheme }}
              </div>
              <div class="dtmxl_dds">
                <span>{{ reviewData.workInfo.themeInfo.traumaNum }}</span
                >个
              </div>
            </div>
            <div class="dtmxl_dl">
              <div class="dtmxl_dt">治愈主题</div>
              <div class="dtmxl_dd">
                {{
                  reviewData.workInfo.themeInfo.cureTheme != ""
                    ? reviewData.workInfo.themeInfo.cureTheme
                    : "/"
                }}
              </div>
              <div class="dtmxl_dds">
                <span>{{ reviewData.workInfo.themeInfo.cureNum }}</span
                >个
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dtm_title" ref="parts13">
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
      <div class="dtm_title" style="margin-top:0.2rem;" ref="parts14">
        附录
      </div>
      <template>
        <el-table border :data="actionInfo">
          <el-table-column prop="action_idx" label="操作序号">
          </el-table-column>
          <el-table-column prop="action_time" label="操作时间">
          </el-table-column>
          <el-table-column prop="bodies_name" label="沙具名称">
          </el-table-column>
          <el-table-column prop="bodies_type" label="沙具类别">
          </el-table-column>
          <el-table-column prop="action_content" label="操作内容">
            <template slot-scope="scope">
              <span style="color:#006CFF">{{ scope.row.action_content }}</span>
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
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="limit"
          layout="prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
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
    <el-dialog
      class="fix_pass"
      :close-on-click-modal="false"
      title="箱庭鸟瞰图"
      :visible.sync="birdFlag"
    >
      <img
        class="dtmcl_click"
        v-if="details.birdView"
        :src="'data:image;base64,' + details.birdView"
        alt=""
      />
      <img
        class="dtmcl_click"
        v-else
        src="../../assets/images/report/t001.png"
        alt=""
      />
    </el-dialog>
  </div>
</template>

<script>
import personReport from "../Model/ModelReport.vue";
import { mapGetters, mapMutations } from "vuex";
import echarts from "../../assets/js/echarts";
import Url from "@/assets/js/url.js";
var fuluList = [];
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
      actionInfo: [],
      limit: 30,
      total: 0,
      pageNum: 1,
      currentPage: 1,
      reviewFlag: false,
      // 分割
      part11: false,
      part22: false,
      part33: false,
      part55: false,
      part44: false,
      birdFlag: false,
      reviewData: {},
      imgList: [
        {
          name: "鸟瞰图",
          img: require("../../assets/images/report/t001.png")
        },
        {
          name: "西侧俯身45度视图",
          img: require("../../assets/images/report/t001.png")
        },
        {
          name: "东侧俯身45度视图",
          img: require("../../assets/images/report/t001.png")
        },
        {
          name: "操作者视图",
          img: require("../../assets/images/report/t001.png")
        }
      ],
      sandUseNumInfoName: [],
      sandUseNumInfoNum: [],
      personData: {
        id: 1,
        meetingName: "",
        meetingTheme: "",
        meetingPlace: "",
        meetingLevel: "",
        host: "",
        recorder: "",
        ccleader: "",
        approverName: "",
        participant: "",
        remark: "",
        meetingStartTime: "",
        meetingEndTime: "",
        meetMatters: [
          {
            type: "",
            workItem: "",
            principalName: "",
            planEndtime: "",
            workPlan: ""
          }
        ]
      },
      details: {},
      reportId: "",
      part0: "",
      part1: "",
      part2: "",
      part3: "",
      part4: "",
      parta1: "",
      parta2: "",
      parta3: "",
      parta4: "",
      scrollYs: 0,
      topAct: 1,
      topBack: false,
      myChart: "",
      myChartPies1: "",
      myChartPies2: "",
      myChartPies3: "",
      myChartRose: "",
      myChartZhu: "",
      myTxtFlag: false,
      warningList: [],
      sysList: [],
      loading: null
    };
  },
  computed: {
    ...mapGetters(["getPersonFlag"]),
    bindmodel() {
      const { part11, part22, part33, part55 } = this;
      return {
        part11,
        part22,
        part33,
        part55
      };
    }
  },
  watch: {
    bindmodel: {
      handler: function(newVal) {
        console.log(newVal);
        this.part11 = newVal.part11;
        this.part22 = newVal.part22;
        this.part33 = newVal.part33;
        this.part55 = newVal.part55;
        if (this.part11 && this.part22 && this.part33) {
          this.part11 = false;
          this.part22 = false;
          this.part33 = false;
          this.loading.close();
        } else {
          if (this.part55) {
            this.part55 = false;
            this.part44 = true;
          }
          // console.log("还补充下");
        }
      }
    }
  },
  mounted() {
    // console.log(this.getPersonFlag);
    // 报告数据
    // console.log(this.$route);
    this.reportId = this.$route.params.userID;
    this.getDetail();
    setTimeout(() => {
      // this.topBacks()
    }, 100);
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
      return offset + pageSize >= array.length
        ? array.slice(offset, array.length)
        : array.slice(offset, offset + pageSize);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.actionInfo = this.pagination(val, this.limit, fuluList);
    },
    birdView() {
      this.birdFlag = true;
    },
    personExport() {
      this.setPersonFlag(true);
      // console.log(this.reviewData)
      // console.log(this.sandInfo);
      // console.log(this.imgList);
      // console.log(this.sandUseNumInfoName);
      // console.log(this.sandUseNumInfoNum);
    },
    toHHmmss(data) {
      var s;
      var hours = parseInt((data % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = parseInt((data % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.round((data % (1000 * 60)) / 1000);
      // console.log(seconds);
      s =
        (hours < 10 ? "0" + hours : hours) +
        ":" +
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds);
      return s;
    },

    // 获取报告详情
    getfourImg(birdView) {
      let that = this;
      var param = {
        reportId: that.reportId
      };
      this.$http
        .get(Url + "/aimw/report/reportReviewImgs", {
          params: param
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
            this.part55 = true;
          } else {
            that.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    getDetail() {
      let that = this;
      this.loading = this.$loading({
        lock: true,
        text: "报告生成中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      var param = {
        reportId: that.reportId
      };
      this.$http
        .get(Url + "/aimw/report/appendix", {
          params: param
        })
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            if (data.data.actionInfoRet == "null") {
              data.data.actionInfoRet = "[]";
            }
            console.log(data.data.actionInfoRet);
            fuluList = JSON.parse(data.data.actionInfoRet);
            that.total = fuluList.length;
            that.actionInfo = this.pagination(1, this.limit, fuluList);
            console.log(fuluList);
            that.pageNum =
              fuluList.length == 0
                ? 1
                : Math.ceil(fuluList.length / that.limit);
            if (data.data.sandInfoRet.sandInfo) {
              that.sandInfo = data.data.sandInfoRet.sandInfo;
            } else {
              that.sandInfo = [];
            }
            this.part11 = true;
            console.log(this.part11);
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
            data.data.workInfo.operationTime = this.toHHmmss(
              data.data.workInfo.operationTime * 1000
            );
            that.reviewData = data.data;
            let nameArr = [];
            let numArr = [];
            for (let i in data.data.sandUseNumInfo) {
              nameArr.push(data.data.sandUseNumInfo[i].sandName);
              numArr.push(data.data.sandUseNumInfo[i].num);
            }
            // console.log(that.reviewData)
            that.sandUseNumInfoName = nameArr;
            that.sandUseNumInfoNum = numArr;
            // console.log(that.sandUseNumInfoName);
            // console.log(that.sandUseNumInfoNum);
            that.myChartInit1();
            this.part22 = true;
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

            if (data.data.selfDiscription.indexOf("“") != -1) {
              data.data.selfDiscription =
                data.data.selfDiscription.substring(
                  0,
                  data.data.selfDiscription.indexOf("“") + 1
                ) +
                '<span style="color:#00C0FF">' +
                data.data.selfDiscription.substring(
                  data.data.selfDiscription.indexOf("“") + 1,
                  data.data.selfDiscription.indexOf("”")
                ) +
                "</span>" +
                data.data.selfDiscription.substring(
                  data.data.selfDiscription.indexOf("”"),
                  data.data.selfDiscription.length
                );
            }

            if (data.data.depressionWarning.indexOf("正常") != -1) {
              data.data.depressionWarning =
                data.data.depressionWarning.substring(
                  0,
                  data.data.depressionWarning.indexOf("正常")
                ) +
                '<span style="color:#006CFF">' +
                data.data.depressionWarning.substring(
                  data.data.depressionWarning.indexOf("正常"),
                  data.data.depressionWarning.indexOf("正常") + 2
                ) +
                "</span>" +
                data.data.depressionWarning.substring(
                  data.data.depressionWarning.indexOf("正常") + 2,
                  data.data.depressionWarning.length
                );
            }
            if (data.data.depressionWarning.indexOf("轻度") != -1) {
              data.data.depressionWarning =
                data.data.depressionWarning.substring(
                  0,
                  data.data.depressionWarning.indexOf("轻度")
                ) +
                '<span style="color:#6671FF">' +
                data.data.depressionWarning.substring(
                  data.data.depressionWarning.indexOf("轻度"),
                  data.data.depressionWarning.indexOf("轻度") + 2
                ) +
                "</span>" +
                data.data.depressionWarning.substring(
                  data.data.depressionWarning.indexOf("轻度") + 2,
                  data.data.depressionWarning.length
                );
            }
            if (data.data.depressionWarning.indexOf("中度") != -1) {
              data.data.depressionWarning =
                data.data.depressionWarning.substring(
                  0,
                  data.data.depressionWarning.indexOf("中度")
                ) +
                '<span style="color:#D674FF">' +
                data.data.depressionWarning.substring(
                  data.data.depressionWarning.indexOf("中度"),
                  data.data.depressionWarning.indexOf("中度") + 2
                ) +
                "</span>" +
                data.data.depressionWarning.substring(
                  data.data.depressionWarning.indexOf("中度") + 2,
                  data.data.depressionWarning.length
                );
            }
            if (data.data.depressionWarning.indexOf("重度") != -1) {
              data.data.depressionWarning =
                data.data.depressionWarning.substring(
                  0,
                  data.data.depressionWarning.indexOf("重度")
                ) +
                '<span style="color:#FE5FB8">' +
                data.data.depressionWarning.substring(
                  data.data.depressionWarning.indexOf("重度"),
                  data.data.depressionWarning.indexOf("重度") + 2
                ) +
                "</span>" +
                data.data.depressionWarning.substring(
                  data.data.depressionWarning.indexOf("重度") + 2,
                  data.data.depressionWarning.length
                );
            }

            if (data.data.anxietyWarning.indexOf("正常") != -1) {
              data.data.anxietyWarning =
                data.data.anxietyWarning.substring(
                  0,
                  data.data.anxietyWarning.indexOf("正常")
                ) +
                '<span style="color:#006CFF">' +
                data.data.anxietyWarning.substring(
                  data.data.anxietyWarning.indexOf("正常"),
                  data.data.anxietyWarning.indexOf("正常") + 2
                ) +
                "</span>" +
                data.data.anxietyWarning.substring(
                  data.data.anxietyWarning.indexOf("正常") + 2,
                  data.data.anxietyWarning.length
                );
            }
            if (data.data.anxietyWarning.indexOf("轻度") != -1) {
              data.data.anxietyWarning =
                data.data.anxietyWarning.substring(
                  0,
                  data.data.anxietyWarning.indexOf("轻度")
                ) +
                '<span style="color:#6671FF">' +
                data.data.anxietyWarning.substring(
                  data.data.anxietyWarning.indexOf("轻度"),
                  data.data.anxietyWarning.indexOf("轻度") + 2
                ) +
                "</span>" +
                data.data.anxietyWarning.substring(
                  data.data.anxietyWarning.indexOf("轻度") + 2,
                  data.data.anxietyWarning.length
                );
            }
            if (data.data.anxietyWarning.indexOf("中度") != -1) {
              data.data.anxietyWarning =
                data.data.anxietyWarning.substring(
                  0,
                  data.data.anxietyWarning.indexOf("中度")
                ) +
                '<span style="color:#D674FF">' +
                data.data.anxietyWarning.substring(
                  data.data.anxietyWarning.indexOf("中度"),
                  data.data.anxietyWarning.indexOf("中度") + 2
                ) +
                "</span>" +
                data.data.anxietyWarning.substring(
                  data.data.anxietyWarning.indexOf("中度") + 2,
                  data.data.anxietyWarning.length
                );
            }
            if (data.data.anxietyWarning.indexOf("重度") != -1) {
              data.data.anxietyWarning =
                data.data.anxietyWarning.substring(
                  0,
                  data.data.anxietyWarning.indexOf("重度")
                ) +
                '<span style="color:#FE5FB8">' +
                data.data.anxietyWarning.substring(
                  data.data.anxietyWarning.indexOf("重度"),
                  data.data.anxietyWarning.indexOf("重度") + 2
                ) +
                "</span>" +
                data.data.anxietyWarning.substring(
                  data.data.anxietyWarning.indexOf("重度") + 2,
                  data.data.anxietyWarning.length
                );
            }

            if (data.data.forcedWarning.indexOf("正常") != -1) {
              data.data.forcedWarning =
                data.data.forcedWarning.substring(
                  0,
                  data.data.forcedWarning.indexOf("正常")
                ) +
                '<span style="color:#006CFF">' +
                data.data.forcedWarning.substring(
                  data.data.forcedWarning.indexOf("正常"),
                  data.data.forcedWarning.indexOf("正常") + 2
                ) +
                "</span>" +
                data.data.forcedWarning.substring(
                  data.data.forcedWarning.indexOf("正常") + 2,
                  data.data.forcedWarning.length
                );
            }
            if (data.data.forcedWarning.indexOf("轻度") != -1) {
              data.data.forcedWarning =
                data.data.forcedWarning.substring(
                  0,
                  data.data.forcedWarning.indexOf("轻度")
                ) +
                '<span style="color:#6671FF">' +
                data.data.forcedWarning.substring(
                  data.data.forcedWarning.indexOf("轻度"),
                  data.data.forcedWarning.indexOf("轻度") + 2
                ) +
                "</span>" +
                data.data.forcedWarning.substring(
                  data.data.forcedWarning.indexOf("轻度") + 2,
                  data.data.forcedWarning.length
                );
            }
            if (data.data.forcedWarning.indexOf("中度") != -1) {
              data.data.forcedWarning =
                data.data.forcedWarning.substring(
                  0,
                  data.data.forcedWarning.indexOf("中度")
                ) +
                '<span style="color:#D674FF">' +
                data.data.forcedWarning.substring(
                  data.data.forcedWarning.indexOf("中度"),
                  data.data.forcedWarning.indexOf("中度") + 2
                ) +
                "</span>" +
                data.data.forcedWarning.substring(
                  data.data.forcedWarning.indexOf("中度") + 2,
                  data.data.forcedWarning.length
                );
            }
            if (data.data.forcedWarning.indexOf("重度") != -1) {
              data.data.forcedWarning =
                data.data.forcedWarning.substring(
                  0,
                  data.data.forcedWarning.indexOf("重度")
                ) +
                '<span style="color:#FE5FB8">' +
                data.data.forcedWarning.substring(
                  data.data.forcedWarning.indexOf("重度"),
                  data.data.forcedWarning.indexOf("重度") + 2
                ) +
                "</span>" +
                data.data.forcedWarning.substring(
                  data.data.forcedWarning.indexOf("重度") + 2,
                  data.data.forcedWarning.length
                );
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
            data.data.whatWarn = [];
            for (let i in oldWarning) {
              if (oldWarning[i].old != "正常") {
                data.data.warningList.push(oldWarning[i]);
              }
              if (oldWarning[i].score > 2) {
                data.data.whatWarn.push(oldWarning[i]);
              }
            }
            data.data.warningNum = data.data.whatWarn.length;
            data.data.suggestion = data.data.suggestion.split("|||");
            let topArr = [];
            let duanArr = [];
            for (let i in data.data.suggestion) {
              if (data.data.suggestion[i].indexOf("针对") != -1) {
                data.data.suggestion[i] = data.data.suggestion[i].split("@@");
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
              data.data.depressionDim = data.data.depressionDim.split("@@");
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
            console.log(depArr);
            if (data.data.anxietyDim) {
              data.data.anxietyDim = data.data.anxietyDim.split("@@");
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
            console.log(anxArr);
            if (data.data.forcedDim) {
              data.data.forcedDim = data.data.forcedDim.split("@@");
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
            let sysList1 = [
              {
                title: "抑郁",
                grade: warningInfo.depressionScore,
                gradep:
                  Number(warningInfo.depressionScore) * 0.44 +
                  Number(warningInfo.depressionScore) * 0.01 +
                  0.24 +
                  "rem",
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
                gradep:
                  Number(warningInfo.anxietyScore) * 0.44 +
                  Number(warningInfo.anxietyScore) * 0.01 +
                  0.24 +
                  "rem",
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
                gradep:
                  Number(warningInfo.forcedScore) * 0.44 +
                  Number(warningInfo.forcedScore) * 0.01 +
                  0.24 +
                  "rem",
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
            // console.log(this.sysList);
            // console.log(data.data);
            that.details = that.justInfo(data.data);
            that.getBird()
            that.myChartInit();
            this.part33 = true;
            setTimeout(() => {
              that.myTxtFlag = true;
              that.topBacks();
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
    getBird() {
      let that = this;
      var param = {
        reportId: that.reportId
      };
      this.$http
        .get(Url + "/aimw/report/reportBirdView", {
          params: param
        })
        .then(res => {
          let data = res.data;
          if (data.code == 0) {
            this.details.birdView = data.data.birdView;
            this.getfourImg(data.data.birdView);
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
      console.log("///");
      window.scrollTo(0, 0);
      setTimeout(() => {
        // 左边扶梯效果
        this.part0 = this.$refs.parts0.offsetTop;
        this.part4 = this.$refs.parts4.offsetTop;
        this.part1 = this.$refs.parts1.offsetTop;
        this.part2 = this.$refs.parts2.offsetTop;
        this.part3 = this.$refs.parts3.offsetTop;

        this.parta1 = this.$refs.parts11.offsetTop;
        this.parta2 = this.$refs.parts12.offsetTop;
        this.parta3 = this.$refs.parts13.offsetTop;
        this.parta4 = this.$refs.parts14.offsetTop;
        this.listenerFunction();
      }, 500);
    },
    trendTab(type) {
      this.topAct = type;
      if (type == 4) {
        window.scrollTo(0, this.part4 - 40);
      }
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
    trendTabs(type) {
      this.topAct = type;
      if (type == 1) {
        window.scrollTo(0, this.parta1 - 40);
      }
      if (type == 2) {
        window.scrollTo(0, this.parta2 - 40);
      }
      if (type == 3) {
        window.scrollTo(0, this.parta3 - 40);
      }
      if (type == 4) {
        window.scrollTo(0, this.parta4 - 40);
      }
    },
    listenerFunction(e) {
      document.addEventListener("scroll", this.handleScroll, true);
    },
    handleScroll() {
      this.scrollYs = window.pageYOffset;
      // console.log(this.reviewFlag)
      if (this.reviewFlag) {
        // console.log('11111')
        if (this.scrollYs < this.part0) {
          this.topAct = 1;
        }
        if (this.part0 < this.scrollYs && this.scrollYs < this.parta1) {
          this.topAct = 1;
        }
        if (this.parta1 < this.scrollYs && this.scrollYs < this.parta2) {
          this.topAct = 2;
        }
        if (this.parta2 < this.scrollYs && this.scrollYs < this.parta3) {
          this.topAct = 3;
        }
        if (this.parta3 < this.scrollYs && this.scrollYs < this.parta4) {
          this.topAct = 4;
        }
      } else {
        // console.log('2222')
        if (this.scrollYs < this.part0) {
          this.topAct = 4;
        }
        if (this.part0 < this.scrollYs && this.scrollYs < this.part4) {
          this.topAct = 4;
        }
        if (this.part4 < this.scrollYs && this.scrollYs < this.part1) {
          this.topAct = 1;
        }
        if (this.part1 < this.scrollYs && this.scrollYs < this.part2) {
          this.topAct = 2;
        }
        if (this.part2 < this.scrollYs && this.scrollYs < this.part3) {
          this.topAct = 3;
        }
      }
    },
    toReview() {
      // console.log(1111);
      this.reviewFlag = !this.reviewFlag;
      this.topBacks();
      // this.$router.push({
      //   name: "detailsreview",
      //   params: { userID: this.reportId }
      // });
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
              ':<span style="display:inline-block;font-weight:blod;margin-left:5px;font-size:14px;color:#7786AC">' +
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
                name: "预警",
                itemStyle: {
                  normal: transColor[0]
                }
              },
              {
                value: 3 - that.details.warningNum,
                name: "正常",
                itemStyle: {
                  normal: transColor[2]
                }
              }
            ]
          }
        ]
      });
      // console.log(that.sysList[0].subDim)
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
                {
                  name: that.sysList[0].subDim[0].name,
                  max: 3,
                  axisLabel: { show: true }
                },
                {
                  name: that.sysList[0].subDim[1].name,
                  max: 3,
                  axisLabel: { show: false }
                },
                {
                  name: that.sysList[0].subDim[2].name,
                  max: 3,
                  axisLabel: { show: false }
                }
              ],
              center: ["50%", "70%"],
              radius: "100%",
              splitNumber: 3,
              name: {
                formatter: "",
                textStyle: {
                  color: "#354B70"
                }
              },
              splitArea: {
                areaStyle: {
                  color: [
                    "rgba(251, 109, 183, 0.14)",
                    "rgba(155, 160, 255, 0.14)",
                    "rgba(5, 157, 255, 0.14)"
                  ].reverse()
                }
              },
              axisLine: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  color: [
                    "rgba(155, 160, 255, 1)",
                    "rgba(5, 157, 255, 1)",
                    "rgba(251, 109, 183, 1)"
                  ].reverse()
                }
              },
              axisLabel: {
                show: true,
                color: "#FFFFFF",
                fontSize: 20,
                height: 32,
                formatter: function(value, index) {
                  return "{yxStyle" + index + "|" + index + "}";
                },
                rich: {
                  yxStyle0: {
                    color: "#00C0FF",
                    fontSize: 12,
                    fontWeight: "bold",
                    padding: [-1, -12]
                  },
                  yxStyle1: {
                    color: "#006CFF",
                    fontSize: 12,
                    fontWeight: "bold",
                    padding: [-1, -10]
                  },
                  yxStyle2: {
                    color: "#6671FF",
                    fontSize: 12,
                    fontWeight: "bold",
                    padding: [-1, -12]
                  },
                  yxStyle3: {
                    color: "#FE5FB8",
                    fontSize: 12,
                    fontWeight: "bold",
                    padding: [-1, -12]
                  }
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
            data: [
              that.sysList[0].subDim[0].name,
              that.sysList[0].subDim[1].name,
              that.sysList[0].subDim[2].name
            ]
          },
          series: [
            {
              name: "",
              type: "radar",
              color: ["rgba(0,117,255,0.4)"],
              emphasis: {
                lineStyle: {
                  width: 2,
                  color: "rgba(0, 117, 255, 0.6)"
                }
              },
              data: [
                {
                  value: [
                    that.sysList[0].subDim[0].score,
                    that.sysList[0].subDim[1].score,
                    that.sysList[0].subDim[2].score
                  ],
                  name: "学生得分",
                  symbol: "circle",
                  symbolSize: 4,
                  areaStyle: {
                    opacity: 1,
                    color: {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(27, 236, 255, 0.67)"
                        },
                        {
                          offset: 1,
                          color: "rgba(0, 198, 255, 0.67)"
                        }
                      ],
                      globalCoord: false
                    }
                  },
                  lineStyle: {
                    width: 1
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
                {
                  name: that.sysList[1].subDim[0].name,
                  max: 3,
                  axisLabel: { show: true }
                },
                {
                  name: that.sysList[1].subDim[1].name,
                  max: 3,
                  axisLabel: { show: false }
                },
                {
                  name: that.sysList[1].subDim[2].name,
                  max: 3,
                  axisLabel: { show: false }
                }
              ],
              center: ["50%", "70%"],
              radius: "100%",
              splitNumber: 3,
              name: {
                formatter: "",
                textStyle: {
                  color: "#354B70"
                }
              },
              splitArea: {
                areaStyle: {
                  color: [
                    "rgba(251, 109, 183, 0.14)",
                    "rgba(155, 160, 255, 0.14)",
                    "rgba(5, 157, 255, 0.14)"
                  ].reverse()
                }
              },
              axisLine: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  color: [
                    "rgba(155, 160, 255, 1)",
                    "rgba(5, 157, 255, 1)",
                    "rgba(251, 109, 183, 1)"
                  ].reverse()
                }
              },
              axisLabel: {
                show: true,
                color: "#FFFFFF",
                fontSize: 20,
                height: 32,
                formatter: function(value, index) {
                  return "{yxStyle" + index + "|" + index + "}";
                },
                rich: {
                  yxStyle0: {
                    color: "#00C0FF",
                    fontSize: 12,
                    fontWeight: "bold",
                    padding: [-1, -12]
                  },
                  yxStyle1: {
                    color: "#006CFF",
                    fontSize: 12,
                    fontWeight: "bold",
                    padding: [-1, -10]
                  },
                  yxStyle2: {
                    color: "#6671FF",
                    fontSize: 12,
                    fontWeight: "bold",
                    padding: [-1, -12]
                  },
                  yxStyle3: {
                    color: "#FE5FB8",
                    fontSize: 12,
                    fontWeight: "bold",
                    padding: [-1, -12]
                  }
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
            data: [
              that.sysList[1].subDim[0].name,
              that.sysList[1].subDim[1].name,
              that.sysList[1].subDim[2].name
            ]
          },
          series: [
            {
              name: "",
              type: "radar",
              color: ["rgba(0,117,255,0.4)"],
              emphasis: {
                lineStyle: {
                  width: 2,
                  color: "rgba(0, 117, 255, 0.6)"
                }
              },
              data: [
                {
                  value: [
                    that.sysList[1].subDim[0].score,
                    that.sysList[1].subDim[1].score,
                    that.sysList[1].subDim[2].score
                  ],
                  name: "学生得分",
                  symbol: "circle",
                  symbolSize: 4,
                  areaStyle: {
                    opacity: 1,
                    color: {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(27, 236, 255, 0.67)"
                        },
                        {
                          offset: 1,
                          color: "rgba(0, 198, 255, 0.67)"
                        }
                      ],
                      globalCoord: false
                    }
                  },
                  lineStyle: {
                    width: 1
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
                {
                  name: that.sysList[2].subDim[0].name,
                  max: 3,
                  axisLabel: { show: true }
                },
                {
                  name: that.sysList[2].subDim[1].name,
                  max: 3,
                  axisLabel: { show: false }
                },
                {
                  name: that.sysList[2].subDim[2].name,
                  max: 3,
                  axisLabel: { show: false }
                }
              ],
              center: ["50%", "70%"],
              radius: "100%",
              splitNumber: 3,
              name: {
                formatter: "",
                textStyle: {
                  color: "#354B70"
                }
              },
              splitArea: {
                areaStyle: {
                  color: [
                    "rgba(251, 109, 183, 0.14)",
                    "rgba(155, 160, 255, 0.14)",
                    "rgba(5, 157, 255, 0.14)"
                  ].reverse()
                }
              },
              axisLine: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  color: [
                    "rgba(155, 160, 255, 1)",
                    "rgba(5, 157, 255, 1)",
                    "rgba(251, 109, 183, 1)"
                  ].reverse()
                }
              },
              axisLabel: {
                show: true,
                color: "#FFFFFF",
                fontSize: 20,
                height: 32,
                formatter: function(value, index) {
                  return "{yxStyle" + index + "|" + index + "}";
                },
                rich: {
                  yxStyle0: {
                    color: "#00C0FF",
                    fontSize: 12,
                    fontWeight: "bold",
                    padding: [-1, -12]
                  },
                  yxStyle1: {
                    color: "#006CFF",
                    fontSize: 12,
                    fontWeight: "bold",
                    padding: [-1, -10]
                  },
                  yxStyle2: {
                    color: "#6671FF",
                    fontSize: 12,
                    fontWeight: "bold",
                    padding: [-1, -12]
                  },
                  yxStyle3: {
                    color: "#FE5FB8",
                    fontSize: 12,
                    fontWeight: "bold",
                    padding: [-1, -12]
                  }
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
            data: [
              that.sysList[2].subDim[0].name,
              that.sysList[2].subDim[1].name,
              that.sysList[2].subDim[2].name
            ]
          },
          series: [
            {
              name: "",
              type: "radar",
              color: ["rgba(0,117,255,0.4)"],
              emphasis: {
                lineStyle: {
                  width: 2,
                  color: "rgba(0, 117, 255, 0.6)"
                }
              },
              data: [
                {
                  value: [
                    that.sysList[2].subDim[0].score,
                    that.sysList[2].subDim[1].score,
                    that.sysList[2].subDim[2].score
                  ],
                  name: "学生得分",
                  symbol: "circle",
                  symbolSize: 4,
                  areaStyle: {
                    opacity: 1,
                    color: {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(27, 236, 255, 0.67)"
                        },
                        {
                          offset: 1,
                          color: "rgba(0, 198, 255, 0.67)"
                        }
                      ],
                      globalCoord: false
                    }
                  },
                  lineStyle: {
                    width: 1
                  }
                }
              ]
            }
          ]
        });
      }, 500);
    },
    myChartInit1() {
      let that = this;
      var theIndex = -1;
      this.myChartRose = echarts.init(this.$refs.myChartRose);
      // console.log(this.myChartRose);
      this.myChartRose.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {d}%"
        },
        series: [
          {
            name: "沙具使用时长占比",
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
            type: "shadow"
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
            type: "value",
            minInterval: 1
          }
        ],
        series: [
          {
            name: "使用数量",
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
.detail_teacher_wrap {
  padding-bottom: 0.02rem;
  background: rgba(5, 157, 255, 0.05);
  .fix_pass {
    .el-dialog {
      width: auto;
      .el-dialog__body {
        width: 12rem;
        padding: 0.2rem;
        .dtmcl_click {
          display: block;
          width: 100%;
          height: auto;
        }
      }
    }
  }
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
    .dttb_tips {
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
      border: 0.01rem solid #ffe7f7;
      box-shadow: 0px 0.13rem 0.43rem 0px rgba(238, 93, 87, 0.1);
      border-radius: 0.02rem;
      img {
        margin: 0 0.05rem 0 0.16rem;
        width: 0.19rem;
        height: 0.22rem;
      }
      span {
        font-size: 0.18rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #fff7f6;
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
        width: 4rem;
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
        .dtmcl_pic {
          width: 3.58rem;
          height: 2.01rem;
          margin: 0.2rem auto 0.2rem;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            border-radius: 0.04rem;
          }
          .dtmcl_click {
            width: 0.8rem;
            height: 0.77rem;
            border-radius: 0rem;
            position: absolute;
            top: 0.92rem;
            left: 1.83rem;
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
          padding: 0 0.25rem;
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
        .dtmcl_du1 {
          margin-bottom: 0.12rem;
          img {
            width: 0.23rem;
            height: 0.25rem;
            margin-right: 0.06rem;
          }
        }
        .dtmcl_sys {
          margin-bottom: 0.3rem;
          .dtmcl_du2 {
            margin-bottom: 0.12rem;
            img {
              width: 0.2rem;
              height: 0.2rem;
              margin-right: 0.06rem;
            }
          }
        }
        .dtmcl_txt {
          margin: 0.1rem 0.24rem 0.14rem;
          font-size: 0.16rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #354b70;
          line-height: 0.3rem;
        }
      }
      .dtmc_right {
        width: 7.76rem;
        background: #ffffff;
        border-radius: 0.04rem;
        overflow: hidden;
        position: relative;
        .dtmcl_box {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          position: absolute;
          top: 0.6rem;
          bottom: 0;
          left: 0;
          right: 0;
          .dtmcr_ul {
            width: 100%;
          }
        }
        .dtmcl_tle {
          display: flex;
          align-items: center;
          height: 0.6rem;
          background: linear-gradient(
            90deg,
            rgba(114, 121, 255, 0.78),
            rgba(186, 191, 255, 0.78)
          );
          font-size: 0.22rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
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
            width: 2.4rem;
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
            align-items: center;
            .dr_sp0 {
              color: #006cff;
            }
            .dr_sp1 {
              color: #6671ff;
            }
            .dr_sp2 {
              color: #d674ff;
            }
            .dr_sp3 {
              color: #fe5fb8;
            }
            .dr_li11 {
              img {
                display: block;
                width: 0.9rem;
                height: 0.34rem;
                margin-right: 0.08rem;
              }
              span {
                display: block;
                border-radius: 0.16rem;
                color: #fe5fb8;
                height: 100%;
                line-height: 0.32rem;
                font-size: 0.18rem;
                font-family: PingFang SC;
                font-weight: 400;
              }
            }
            .dr_li0,
            .dr_li1,
            .dr_li2,
            .dr_li3 {
              width: 0.88rem;
              line-height: 0.32rem;
              margin-right: 0.08rem;
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
            width: 2.4rem;
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
      .dtmc_right1 {
        width: 7.76rem;
        background: #ffffff;
        border-radius: 0.04rem;
        overflow: hidden;

        .dtmcl_tle {
          display: flex;
          align-items: center;
          height: 0.6rem;
          background: linear-gradient(
            90deg,
            rgba(114, 121, 255, 0.78),
            rgba(186, 191, 255, 0.78)
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
        .dtmcr_bts1 {
          padding: 0.36rem 0.36rem 0;
          margin-bottom: 0.2rem;
          p {
            text-align: left;
            margin-bottom: 0.2rem;
            color: #5b6c89;
            display: flex;
            align-items: flex-start;
            img {
              width: 0.04rem;
              height: 0.18rem;
              margin-top: 0.04rem;
              margin-right: 0.1rem;
            }
            span {
              text-align: left;
              font-size: 0.16rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              line-height: 0.24rem;
            }
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
          height: 1.6rem;
          h3 {
            font-size: 0.22rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #ffffff;
            padding-top: 0.21rem;
            padding-bottom: 0.08rem;
            line-height: 1;
          }
          .dtt_res {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 0.96rem;
            font-size: 0.18rem;
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
                width: 4.55rem;
                height: auto;
              }
              .dttr_btn {
                width: 0.4rem;
                height: auto;
                position: absolute;
                margin: auto;
                margin-left: -0.2rem;
                left: 0;
                bottom: -0.13rem;
              }
              .dttr_lv {
                position: absolute;
                margin: auto;
                margin-left: -0.7rem;
                left: 0;
                bottom: 0;
                top: 0.88rem;
                width: 1.4rem;
                height: 0.59rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.14rem;
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
          margin: 0.2rem auto 0.5rem;
          position: relative;
          .top_top {
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            top: 0;
            .tt_txt {
              font-size: 0.16rem;
              font-family: PingFang SC;
              font-weight: 400;
              color: #354b70;
              line-height: 0.2rem;
              display: block;
            }
          }
          .bottom_left {
            position: absolute;
            margin: auto;
            left: 0.4rem;
            right: 0;
            bottom: 0.02rem;
            margin-left: 2.4rem;
            .tt_txt {
              font-size: 0.16rem;
              font-family: PingFang SC;
              font-weight: 400;
              color: #354b70;
              line-height: 0.2rem;
              display: block;
            }
          }
          .bottom_right {
            position: absolute;
            margin: auto;
            left: 0;
            right: 0.4rem;
            bottom: 0.02rem;
            margin-right: 2.4rem;
            .tt_txt {
              font-size: 0.16rem;
              font-family: PingFang SC;
              font-weight: 400;
              color: #354b70;
              line-height: 0.2rem;
              display: block;
            }
          }
          .demsb_tool1 {
            position: absolute;
            margin: auto;
            top: -0.06rem;
            left: 0;
            right: 0;
            margin-right: 1.6rem;
            width: 1.12rem;
            min-width: 76px;
            height: 0.34rem;
            background: url(../../assets/images/report/exmaple.png) no-repeat
              center;
            background-size: 100% 100%;
            text-align: left;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            .demsb_score {
              font-size: 0.14rem;
              padding-left: 0.16rem;
              line-height: 0.2rem;
              color: #7486af;
              display: flex;
              span {
                margin-left: -0.06rem;
                color: #00c0ff;
              }
            }
            .demsb_score1 {
              span {
                margin-left: -0.26rem;
                color: #016cff;
              }
            }
          }
          .demsb_tool {
            position: absolute;
            margin: auto;
            top: -0.06rem;
            left: 0;
            right: 0;
            margin-left: 3rem;
            width: 1.12rem;
            min-width: 76px;
            height: 0.34rem;
            background: url(../../assets/images/report/exmaple2.png) no-repeat
              center;
            background-size: 100% 100%;
            text-align: left;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            .demsb_score {
              font-size: 0.14rem;
              padding-left: 0.26rem;
              line-height: 0.2rem;
              color: #7486af;
              display: flex;
              span {
                margin-left: -0.06rem;
                color: #00c0ff;
              }
            }
            .demsb_score1 {
              span {
                margin-left: -0.26rem;
                color: #016cff;
              }
            }
          }
          .myChartPies1,
          .myChartPies2,
          .myChartPies3 {
            width: 5.25rem;
            height: 2.26rem;
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
          padding: 0 0.3rem;
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
            img {
              width: 0.04rem;
              height: 0.18rem;
              margin-top: 0.03rem;
              margin-right: 0.1rem;
            }
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
            padding: 0.16rem 0;
            font-size: 0.16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #354b70;
            display: flex;
            align-items: flex-start;
            img {
              width: 0.04rem;
              height: 0.18rem;
              margin-top: 0.02rem;
              margin-right: 0.06rem;
            }
          }
          ul {
            li {
              display: flex;
              line-height: 0.36rem;
              span {
                margin-top: 0.1rem;
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
  .dt_mains2 {
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
        .el-carousel__item--card {
          display: none;
        }
        .is-in-stage {
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
        }
      }
    }
    .dtm_xls {
      width: 12rem;
      border: 0.01rem solid #e1e9ff;
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
      margin-bottom: 0.2rem;
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
