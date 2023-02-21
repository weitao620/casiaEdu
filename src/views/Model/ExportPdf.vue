<template>
  <div class="table-class" ref="sprintSomePdf">
    <div class="table-style group_01">
      <img class="shui_bg" src="../../assets/images/model/shui.png" alt="" />
      <img class="gp_01_bg" src="../../assets/images/model/t_bg.png" alt="" />
      <div class="gp_01_box">
        <div class="gp_01_photo">
          <img src="../../assets/images/mo_man.png" v-if="gender == 1" alt="">
          <img src="../../assets/images/mo_woman.png" v-else alt="">
        </div>
        <div class="gp_01_msg">
          <ul>
            <li>
              <img
                class="dt_per1"
                src="../../assets/images/report/person1.png"
                alt=""
              />
              <span class="dt_blod">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
              <span>{{details.name}}</span>
            </li>
            <li>
              <img
                class="dt_per2"
                src="../../assets/images/report/person2.png"
                alt=""
              />
              <span class="dt_blod">入学年月：</span>
              <span>{{details.enterYear}}</span>
            </li>
            <li>
              <img
                class="dt_per3"
                src="../../assets/images/report/person3.png"
                alt=""
              />
              <span class="dt_blod">测试次数：</span>
              <span>第 {{details.evaluationTime}} 次</span>
            </li>
            <li>
              <img
                class="dt_per4"
                src="../../assets/images/report/person4.png"
                alt=""
              />
              <span class="dt_blod">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
              <div class="dtb_img" v-if="gender == 1">
                <img src="../../assets/images/man.png" alt=""> 男
              </div>
              <div class="dtb_img" v-else>
                <img src="../../assets/images/woman.png" alt=""> 女
              </div>
            </li>
            <li style="display:flex">
              <img
                class="dt_per5"
                src="../../assets/images/report/person3.png"
                alt=""
              />
              <span class="dt_blod">学&nbsp;&nbsp;籍&nbsp;号：</span>
              <span style="flex:1;word-break:break-all">{{details.passport}}</span>
            </li>
            <li>
              <img
                class="dt_per6"
                src="../../assets/images/report/person3.png"
                alt=""
              />
              <span class="dt_blod">测评时间：</span>
              <span>{{details.datetime}}</span>
            </li>
            <li>
              <img
                class="dt_per7"
                src="../../assets/images/report/person3.png"
                alt=""
              />
              <span class="dt_blod">出生日期：</span>
              <span>{{details.birth}}</span>
            </li>
            <li>
              <img
                class="dt_per8"
                src="../../assets/images/report/person3.png"
                alt=""
              />
              <span class="dt_blod">班&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级：</span>
              <span>{{ details.gradeName }} {{ details.className }}</span>
            </li>
            <li>
              <img
                class="dt_per8"
                src="../../assets/images/report/person3.png"
                alt=""
              />
              <span class="dt_blod">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;校：</span>
              <span>{{ details.schoolName }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="table-style group_02">
      <img class="shui_bg" src="../../assets/images/model/shui.png" alt="" />
      <div class="gp2_top" style="padding-top:96px;">
        <img style="width:132px;height:127px;" src="../../assets/images/model/m_001.png" alt="" />
        <span class="gp2_t_txt">导读</span>
        <span class="gp2_t_eng">Reading Guide</span>
      </div>
      <div class="gp2_box">
        <p>沙盘游戏，也被称为箱庭疗法，是指在治疗师的陪伴下，自由挑选沙具，在盛有细沙的特制箱子里进行自我表现的一种心理疗法。沙盘游戏的有效性已经得到国内外临床实践的广泛验证，对于丰富个体的情感体验、促进自我成长及人格完善具有显著的作用。</p>
        <p>基于投射、沙盘游戏理论，运用人工智能、三维仿真等多项技术，AI心世界实现了实物沙盘的电子化与智能化，为评估学生心理健康水平提供了重要参考依据，是心理教师咨询辅导工作中的智能助手。</p>
        <div class="gp2b_tips">
          <img src="../../assets/images/model/m_002.png" alt="">
          <span>报告结果仅供参考，不作为学生选拨或诊断依据。</span>
        </div>
      </div>
      <div class="gp2_top">
        <img style="width:130px;height:135px;" src="../../assets/images/model/m_010.png" alt="" />
        <span class="gp2_t_txt">作品解读</span>
        <span class="gp2_t_eng">Interpretation Of Works</span>
      </div>
      <div class="gp2_box">
        <p v-html="details.selfDiscription"></p>
        <p style="margin-bottom:0" v-html="details.satisfyArea"></p>
      </div>
    </div>
    <div class="table-style group_02">
      <img class="shui_bg" src="../../assets/images/model/shui.png" alt="" />
      <div class="gp2_top" style="padding-top:96px;">
        <img style="width:128px;height:117px;" src="../../assets/images/model/m_012.png" alt="" />
        <span class="gp2_t_txt">本次概况</span>
        <span class="gp2_t_eng">This Overview</span>
      </div>
      <div class="gp2_main">
        <div class="myChartBox">
          <div class="myChart" ref="myCharts01" id="myCharts01"></div>
          <div class="myChartTips">
            <p>{{ details.warningNum }}项</p>
            <p class="c_o_my_num c_red">
              需关注
            </p>
          </div>
        </div>
        <div class="gp2_li">
          <div class="gp2l_head">
            <img style="width:34px;height:37px;" src="../../assets/images/model/m_004.png" alt="" />
            <span>数据解读</span>
          </div>
        </div>
        <div class="gp2b_tips">
          <img src="../../assets/images/model/m_002.png" alt="" style="margin-left:48px;margin-right:12px;">
          <p>
            风险评估
          </p>
        </div>
        <div class="gp2Cbox" style="margin-left:82px" v-if="details.reportWarningInfo">
          <div style="font-size:20px;color: #394B6D;" v-if="details.warningList.length == 0">
            该生心理健康水平良好。
          </div>
          <div v-else>
            <div v-for="(item,index) in details.warningList" :key="item.id">
              <div
                class="dtmcl_du dtmcl_du2"
                v-if="item.old != '正常'"
              >
                <img :src="require('../../assets/images/report/icons'+index+'.png')" alt="" />
                <span v-html="item.new"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="gp2b_tips">
          <img style="width:26px;height:26px;" src="../../assets/images/model/m_005.png" alt="">
          <p>
            可信度：<span class="gp2bt_c">{{ details.confidenceLevel }}</span>
          </p>
        </div>
        <div class="dtmcl_txt">
          {{ details.confidence }}
        </div>
        <div class="gp2_li" style="margin-top:30px">
          <div class="gp2l_head">
            <img style="width:35px;height:31px;" src="../../assets/images/model/m_006.png" alt="" />
            <span>数据对比</span>
          </div>
        </div>
        <div class="gp_warn">
          <ul>
            <li class="gp_w_th">
              <div>指标</div>
              <div>本次结果</div>
              <div>上次结果</div>
              <div>个人平均参测结果</div>
            </li>
            <li class="gp_w_td">
              <div>
                <span>抑郁</span>
                <span>焦虑</span>
                <span>强迫</span>
              </div>
              <div v-if="details.reportWarningInfo">
                <span :class="[ 'gp_w_ll', { wran_col0: details.reportWarningInfo.depressionLevel == 0 }, { wran_col1: details.reportWarningInfo.depressionLevel == 1 }, { wran_col2: details.reportWarningInfo.depressionLevel == 2 }, { wran_col3: details.reportWarningInfo.depressionLevel == 3 }]">
                  <label>{{ details.reportWarningInfo.depressionLevelTxt }}</label>
                  <label>{{ details.reportWarningInfo.depressionScore }}</label>
                </span>
                <span :class="[ 'gp_w_ll', { wran_col0: details.reportWarningInfo.anxietyLevel == 0 }, { wran_col1: details.reportWarningInfo.anxietyLevel == 1 }, { wran_col2: details.reportWarningInfo.anxietyLevel == 2 }, { wran_col3: details.reportWarningInfo.anxietyLevel == 3 }]">
                  <label>{{ details.reportWarningInfo.anxietyLevelTxt }}</label>
                  <label>{{ details.reportWarningInfo.anxietyScore }}</label>
                </span>
                <span :class="[ 'gp_w_ll', { wran_col0: details.reportWarningInfo.forcedLevel == 0 }, { wran_col1: details.reportWarningInfo.forcedLevel == 1 }, { wran_col2: details.reportWarningInfo.forcedLevel == 2 }, { wran_col3: details.reportWarningInfo.forcedLevel == 3 }]">
                  <label>{{ details.reportWarningInfo.forcedLevelTxt }}</label>
                  <label>{{ details.reportWarningInfo.forcedScore }}</label>
                </span>
              </div>
              <div v-if="details.lastWarningInfo">
                <span v-if="details.lastWarningInfo.depressionLevel != -1" :class="[ 'gp_w_ll', { wran_col0: details.lastWarningInfo.depressionLevel == 0 }, { wran_col1: details.lastWarningInfo.depressionLevel == 1 }, { wran_col2: details.lastWarningInfo.depressionLevel == 2 }, { wran_col3: details.lastWarningInfo.depressionLevel == 3 }]">
                  <label>{{ details.lastWarningInfo.depressionLevelTxt }}</label>
                  <label>{{ details.lastWarningInfo.depressionScore }}</label>
                </span>
                <span v-else :class="[ 'gp_w_ll']">
                  <label>/</label>
                  <label>/</label>
                </span>
                <span v-if="details.lastWarningInfo.anxietyLevel != -1" :class="[ 'gp_w_ll', { wran_col0: details.lastWarningInfo.anxietyLevel == 0 }, { wran_col1: details.lastWarningInfo.anxietyLevel == 1 }, { wran_col2: details.lastWarningInfo.anxietyLevel == 2 }, { wran_col3: details.lastWarningInfo.anxietyLevel == 3 }]">
                  <label>{{ details.lastWarningInfo.anxietyLevelTxt }}</label>
                  <label>{{ details.lastWarningInfo.anxietyScore }}</label>
                </span>
                <span v-else :class="[ 'gp_w_ll']">
                  <label>/</label>
                  <label>/</label>
                </span>
                <span v-if="details.lastWarningInfo.forcedLevel != -1" :class="[ 'gp_w_ll', { wran_col0: details.lastWarningInfo.forcedLevel == 0 }, { wran_col1: details.lastWarningInfo.forcedLevel == 1 }, { wran_col2: details.lastWarningInfo.forcedLevel == 2 }, { wran_col3: details.lastWarningInfo.forcedLevel == 3 }]">
                  <label>{{ details.lastWarningInfo.forcedLevelTxt }}</label>
                  <label>{{ details.lastWarningInfo.forcedScore }}</label>
                </span>
                <span v-else :class="[ 'gp_w_ll']">
                  <label>/</label>
                  <label>/</label>
                </span>
              </div>
              <div v-if="details.warningAvgInfo">
                <span v-if="details.warningAvgInfo.depressionLevel != -1" :class="[ 'gp_w_ll', { wran_col0: details.warningAvgInfo.depressionLevel == 0 }, { wran_col1: details.warningAvgInfo.depressionLevel == 1 }, { wran_col2: details.warningAvgInfo.depressionLevel == 2 }, { wran_col3: details.warningAvgInfo.depressionLevel == 3 }]">
                  <label>{{ details.warningAvgInfo.depressionLevelTxt }}</label>
                  <label>{{ details.warningAvgInfo.depressionScore }}</label>
                </span>
                <span v-else :class="[ 'gp_w_ll']">
                  <label>/</label>
                  <label>/</label>
                </span>
                <span v-if="details.warningAvgInfo.anxietyLevel != -1" :class="[ 'gp_w_ll', { wran_col0: details.warningAvgInfo.anxietyLevel == 0 }, { wran_col1: details.warningAvgInfo.anxietyLevel == 1 }, { wran_col2: details.warningAvgInfo.anxietyLevel == 2 }, { wran_col3: details.warningAvgInfo.anxietyLevel == 3 }]">
                  <label>{{ details.warningAvgInfo.anxietyLevelTxt }}</label>
                  <label>{{ details.warningAvgInfo.anxietyScore }}</label>
                </span>
                <span v-else :class="[ 'gp_w_ll']">
                  <label>/</label>
                  <label>/</label>
                </span>
                <span v-if="details.warningAvgInfo.forcedLevel != -1" :class="[ 'gp_w_ll', { wran_col0: details.warningAvgInfo.forcedLevel == 0 }, { wran_col1: details.warningAvgInfo.forcedLevel == 1 }, { wran_col2: details.warningAvgInfo.forcedLevel == 2 }, { wran_col3: details.warningAvgInfo.forcedLevel == 3 }]">
                  <label>{{ details.warningAvgInfo.forcedLevelTxt }}</label>
                  <label>{{ details.warningAvgInfo.forcedScore }}</label>
                </span>
                <span v-else :class="[ 'gp_w_ll']">
                  <label>/</label>
                  <label>/</label>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="table-style group_02 group_03">
      <img class="shui_bg" src="../../assets/images/model/shui.png" alt="" />
      <div class="gp2_top gp3_top">
        <img style="width:132px;height:132px;" src="../../assets/images/model/m_007.png" alt="" />
        <span class="gp2_t_txt">维度分析</span>
        <span class="gp2_t_eng">Dimensional Analysis</span>
      </div>
      <div class="gp3_box" style="margin-bottom:46px;">
        <div class="dtms_box" v-if="details.sysList">
          <div class="dtmsb_tle" :style="{ background: details.sysList[0].bg }">
            <h3>{{ details.sysList[0].title }}</h3>
            <div class="dtt_res">
              <span>评估结果</span>
              <div class="dtt_img">
                <img
                  src="../../assets/images/report/grade_line2.png"
                  alt=""
                />
                <img
                  class="dttr_btn"
                  :style="{ left: details.sysList[0].gradep1 }"
                  src="../../assets/images/report/grade_btn.png"
                  alt=""
                />
                <span class="dttr_lv" :style="{ left: details.sysList[0].gradep1 }">{{
                  details.sysList[0].level
                }}</span>
              </div>
            </div>
          </div>
          <div class="dtmsb_tar">
            <div style="position:relative">
              <div class="top_top" v-if="details.sysList[0].subDim">
                <span class="tt_txt">{{details.sysList[0].subDim[0].name}}</span>
                <div class="demsb_tool">
                  <div class="demsb_score">学生得分：<span>{{ parseInt(details.sysList[0].subDim[0].score) }}</span></div>
                </div>
              </div>
              <div class="bottom_left" v-if="details.sysList[0].subDim">
                <span class="tt_txt">{{details.sysList[0].subDim[2].name}}</span>
                <div class="demsb_tool" style="margin-left:170px">
                  <div class="demsb_score">学生得分：<span>{{ parseInt(details.sysList[0].subDim[2].score) }}</span></div>
                </div>
              </div>
              <div class="bottom_right" v-if="details.sysList[0].subDim">
                <span class="tt_txt">{{details.sysList[0].subDim[1].name}}</span>
                <div class="demsb_tool1">
                  <div class="demsb_score">学生得分：<span>{{ parseInt(details.sysList[0].subDim[1].score) }}</span></div>
                </div>
              </div>
              <div
                id="myChartPiess11"
                class="myChartPiess11"
                ref="myChartPiess11"
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
            <div class="db_img" :style="{ color: details.sysList[0].txtColor }">
              <img
                v-if="details.sysList[0].imgType == 1"
                src="../../assets/images/report/sys1.png"
                alt=""
              />
              <img
                v-if="details.sysList[0].imgType == 2"
                src="../../assets/images/report/sys2.png"
                alt=""
              />
              <img
                v-if="details.sysList[0].imgType == 3"
                src="../../assets/images/report/sys3.png"
                alt=""
              />
              <img
                v-if="details.sysList[0].imgType == 4"
                src="../../assets/images/report/sys4.png"
                alt=""
              />
              测评结果分析
            </div>
            <p v-for="(items, keps) in details.sysList[0].list" :key="keps">
              <img
                v-if="details.sysList[0].imgType == 1"
                src="../../assets/images/report/icon0.png"
                alt=""
              />
              <img
                v-if="details.sysList[0].imgType == 2"
                src="../../assets/images/report/icon1.png"
                alt=""
              />
              <img
                v-if="details.sysList[0].imgType == 3"
                src="../../assets/images/report/icon6.png"
                alt=""
              />
              <img
                v-if="details.sysList[0].imgType == 4"
                src="../../assets/images/report/icon7.png"
                alt=""
              />
              {{ items }}
            </p>
          </div>
        </div>
      </div>
      <div class="gp3_box">
        <div class="dtms_box" v-if="details.sysList">
          <div class="dtmsb_tle" :style="{ background: details.sysList[1].bg }">
            <h3>{{ details.sysList[1].title }}</h3>
            <div class="dtt_res">
              <span>评估结果</span>
              <div class="dtt_img">
                <img
                  src="../../assets/images/report/grade_line2.png"
                  alt=""
                />
                <img
                  class="dttr_btn"
                  :style="{ left: details.sysList[1].gradep1 }"
                  src="../../assets/images/report/grade_btn.png"
                  alt=""
                />
                <span class="dttr_lv" :style="{ left: details.sysList[1].gradep1 }">{{
                  details.sysList[1].level
                }}</span>
              </div>
            </div>
          </div>
          <div class="dtmsb_tar">
            <div style="position:relative">
              <div class="top_top" v-if="details.sysList[1].subDim">
                <span class="tt_txt">{{details.sysList[1].subDim[0].name}}</span>
                <div class="demsb_tool">
                  <div class="demsb_score">学生得分：<span>{{ parseInt(details.sysList[1].subDim[0].score) }}</span></div>
                </div>
              </div>
              <div class="bottom_left" v-if="details.sysList[1].subDim">
                <span class="tt_txt">{{details.sysList[1].subDim[2].name}}</span>
                <div class="demsb_tool" style="margin-left:170px">
                  <div class="demsb_score">学生得分：<span>{{ parseInt(details.sysList[1].subDim[2].score) }}</span></div>
                </div>
              </div>
              <div class="bottom_right" v-if="details.sysList[1].subDim">
                <span class="tt_txt">{{details.sysList[1].subDim[1].name}}</span>
                <div class="demsb_tool1">
                  <div class="demsb_score">学生得分：<span>{{ parseInt(details.sysList[1].subDim[1].score) }}</span></div>
                </div>
              </div>
              <div
                id="myChartPiess22"
                class="myChartPiess22"
                ref="myChartPiess22"
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
            <div class="db_img" :style="{ color: details.sysList[1].txtColor }">
              <img
                v-if="details.sysList[1].imgType == 1"
                src="../../assets/images/report/sys1.png"
                alt=""
              />
              <img
                v-if="details.sysList[1].imgType == 2"
                src="../../assets/images/report/sys2.png"
                alt=""
              />
              <img
                v-if="details.sysList[1].imgType == 3"
                src="../../assets/images/report/sys3.png"
                alt=""
              />
              <img
                v-if="details.sysList[1].imgType == 4"
                src="../../assets/images/report/sys4.png"
                alt=""
              />
              测评结果分析
            </div>
            <p v-for="(items, keps) in details.sysList[1].list" :key="keps">
              <img
                v-if="details.sysList[1].imgType == 1"
                src="../../assets/images/report/icon0.png"
                alt=""
              />
              <img
                v-if="details.sysList[1].imgType == 2"
                src="../../assets/images/report/icon1.png"
                alt=""
              />
              <img
                v-if="details.sysList[1].imgType == 3"
                src="../../assets/images/report/icon6.png"
                alt=""
              />
              <img
                v-if="details.sysList[1].imgType == 4"
                src="../../assets/images/report/icon7.png"
                alt=""
              />
              {{ items }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="table-style  group_02 group_03 group_04">
      <img class="shui_bg" src="../../assets/images/model/shui.png" alt="" />
      <div class="gp3_box" style="margin-top:80px">
        <div class="dtms_box" v-if="details.sysList">
          <div class="dtmsb_tle" :style="{ background: details.sysList[2].bg }">
            <h3>{{ details.sysList[2].title }}</h3>
            <div class="dtt_res">
              <span>评估结果</span>
              <div class="dtt_img">
                <img
                  src="../../assets/images/report/grade_line2.png"
                  alt=""
                />
                <img
                  class="dttr_btn"
                  :style="{ left: details.sysList[2].gradep1 }"
                  src="../../assets/images/report/grade_btn.png"
                  alt=""
                />
                <span class="dttr_lv" :style="{ left: details.sysList[2].gradep1 }">{{
                  details.sysList[2].level
                }}</span>
              </div>
            </div>
          </div>
          <div class="dtmsb_tar">
            <div style="position:relative">
              <div class="top_top" v-if="details.sysList[2].subDim">
                <span class="tt_txt">{{details.sysList[2].subDim[0].name}}</span>
                <div class="demsb_tool">
                  <div class="demsb_score">学生得分：<span>{{ parseInt(details.sysList[2].subDim[0].score) }}</span></div>
                </div>
              </div>
              <div class="bottom_left" v-if="details.sysList[2].subDim">
                <span class="tt_txt">{{details.sysList[2].subDim[2].name}}</span>
                <div class="demsb_tool" style="margin-left:170px">
                  <div class="demsb_score">学生得分：<span>{{ parseInt(details.sysList[2].subDim[2].score) }}</span></div>
                </div>
              </div>
              <div class="bottom_right" v-if="details.sysList[2].subDim">
                <span class="tt_txt">{{details.sysList[2].subDim[1].name}}</span>
                <div class="demsb_tool1">
                  <div class="demsb_score">学生得分：<span>{{ parseInt(details.sysList[2].subDim[1].score) }}</span></div>
                </div>
              </div>
              <div
                id="myChartPiess33"
                class="myChartPiess33"
                ref="myChartPiess33"
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
            <div class="db_img" :style="{ color: details.sysList[2].txtColor }">
              <img
                v-if="details.sysList[2].imgType == 1"
                src="../../assets/images/report/sys1.png"
                alt=""
              />
              <img
                v-if="details.sysList[2].imgType == 2"
                src="../../assets/images/report/sys2.png"
                alt=""
              />
              <img
                v-if="details.sysList[2].imgType == 3"
                src="../../assets/images/report/sys3.png"
                alt=""
              />
              <img
                v-if="details.sysList[2].imgType == 4"
                src="../../assets/images/report/sys4.png"
                alt=""
              />
              测评结果分析
            </div>
            <p v-for="(items, keps) in details.sysList[2].list" :key="keps">
              <img
                v-if="details.sysList[2].imgType == 1"
                src="../../assets/images/report/icon0.png"
                alt=""
              />
              <img
                v-if="details.sysList[2].imgType == 2"
                src="../../assets/images/report/icon1.png"
                alt=""
              />
              <img
                v-if="details.sysList[2].imgType == 3"
                src="../../assets/images/report/icon6.png"
                alt=""
              />
              <img
                v-if="details.sysList[2].imgType == 4"
                src="../../assets/images/report/icon7.png"
                alt=""
              />
              {{ items }}
            </p>
          </div>
        </div>
      </div>
      <div class="gp2_top gp3_top">
        <img style="width:129px;height:146px;" src="../../assets/images/model/m_009.png" alt="" />
        <span class="gp2_t_txt">指导建议</span>
        <span class="gp2_t_eng">Guidance Recommendations</span>
      </div>
      <div class="guide_box">
        <div class="gb_main">
          <div class="dtmcl_tle">
            <img src="../../assets/images/report/guide_i.png" alt="" />
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
    <div class="table-style group_02 group_03 group_04 group_05">
      <img class="shui_bg" src="../../assets/images/model/shui.png" alt="" />
      <div class="gp2_top gp3_top">
        <img style="width:130px;height:135px;" src="../../assets/images/model/m_010.png" alt="" />
        <span class="gp2_t_txt">附录</span>
        <span class="gp2_t_eng">Appendix</span>
      </div>
      <div class="gp5_img_tle">
        <img src="../../assets/images/model/m_011.png" alt="">
        <span>图片回顾</span>
        <img src="../../assets/images/model/m_011.png" alt="">
      </div>
      <div class="gp5_img_ul">
        <div class="gp5_img_li" v-for="item in imgList" :key="item.name">
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="table-style group_02 group_03 group_04 group_05 group_06">
      <img class="shui_bg" src="../../assets/images/model/shui.png" alt="" />
      <div class="gp5_img_tle" style="margin-top:100px;">
        <img src="../../assets/images/model/m_011.png" alt="">
        <span>作品信息统计</span>
        <img src="../../assets/images/model/m_011.png" alt="">
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
      <div class="gp5_img_tle" style="margin-bottom:30px">
        <img src="../../assets/images/model/m_011.png" alt="">
        <span>沙具使用情况统计</span>
        <img src="../../assets/images/model/m_011.png" alt="">
      </div>
      <div class="dtmt_tle">
        <label></label>
        <span>沙具使用数量分布</span>
      </div>
      <div class="myChartZhus1" ref="myChartZhus1" id="myChartZhus1"></div>
      <div class="dtmt_tle" style="margin:40px auto 10px">
        <label></label>
        <span>沙具使用时长占比</span>
      </div>
      <div class="myChartRoses1" ref="myChartRoses1" id="myChartRoses1"></div>
    </div>
    <div class="table-style group_02 group_03 group_04 group_05 group_06 group_07">
      <img class="shui_bg" src="../../assets/images/model/shui.png" alt="" />
      <div class="gp5_img_tle" style="margin-top:40px;">
        <img src="../../assets/images/model/m_011.png" alt="">
        <span>沙具使用记录表</span>
        <img src="../../assets/images/model/m_011.png" alt="">
      </div>
      <div class="gp_warn gp7_box">
        <ul>
          <li class="gp_w_th">
            <div style="width:100px;flex:none;">序号</div>
            <div>沙具类别</div>
            <div>沙具</div>
            <div>使用时长(秒)</div>
            <div>是否删除沙具</div>
          </li>
          <li class="gp_w_td" v-for="(item, index) in sandInfo.slice(0,40)" :key="index">
            <div style="width:100px;flex:none;">
              <span :style="{'height': '36px','line-height': '36px'}">{{item.id}}</span>
            </div>
            <div>
              <span :style="{'height': '36px','line-height': '36px'}">{{item.type}}</span>
            </div>
            <div>
              <span :style="{'height': '36px','line-height': '36px'}">{{item.name}}</span>
            </div>
            <div>
              <span :style="{'height': '36px','line-height': '36px'}">{{item.time}}</span>
            </div>
            <div>
              <span :style="{'height': '36px','line-height': '36px'}">{{item.isDel}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-for="(item, index) in sandList" :key="index" class="table-style group_02 group_03 group_04 group_05 group_06 group_07">
      <img class="shui_bg" src="../../assets/images/model/shui.png" alt="" />
      <div class="gp_warn gp7_box">
        <ul>
          <li class="gp_w_td" v-for="itemc in item" :key="itemc.id">
            <div style="width:100px;flex:none;">
              <span :style="{'height': '36px','line-height': '36px'}">{{itemc.id}}</span>
            </div>
            <div>
              <span :style="{'height': '36px','line-height': '36px'}">{{itemc.type}}</span>
            </div>
            <div>
              <span :style="{'height': '36px','line-height': '36px'}">{{itemc.name}}</span>
            </div>
            <div>
              <span :style="{'height': '36px','line-height': '36px'}">{{itemc.time}}</span>
            </div>
            <div>
              <span :style="{'height': '36px','line-height': '36px'}">{{itemc.isDel}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import JSZip from "jszip";
import Url from "@/assets/js/url.js";
import htmlToZip from "@/common/utils/htmlToZip"
import echarts from "../../assets/js/echarts";
import { mapMutations } from "vuex";
var FileSaver = require('file-saver');
export default {
  name: "ExportPdf",
  data() {
    return {
      zipFlag: false,
      heNum: 37,
      myChartPiess11: "",
      myChartPiess22: "",
      myChartPiess33: "",
      myChartRoses1: "",
      myChartZhus1: "",
      gender: 1,
      myCharts01: "",
      details: {
      },
      reviewData: {},
      sandInfo: [],
      sandList: [],
      imgList: [],
      sandUseNumInfoName: [],
      sandUseNumInfoNum: []
    };
  },
  props: {
    iList: {
      type: Array,
      default: () => {}
    }
  },
  computed: {
    somePdfs () {
      return this.$store.state.somePdfFlag
    }
  },
  watch: {
    somePdfs: function(newVal, oldVal) {
      // console.log(newVal);
      // console.log(oldVal);
      if (newVal) {
        // console.log('显示要下载的页面')
        this.loading = this.$loading({
          lock: true,
          text: '正在请求数据 ( ' + 0 + ' / ' + this.iList.length + ' )',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.exportMeeting('all')
        this.zipFlag = true
      } else {
        // console.log('不显示')
        this.zipFlag = false
      }
    }
  },
  mounted() {
    // console.log(this.iList)
  },
  methods: {
    ...mapMutations(["setSomePdfFlag"]),
    getMeetingAll (id, count, len) {
      let that = this;
      // console.log(id)
      return new Promise((resolve, reject) => {
        this.getDetail(id)
        let param = {
          reportId: id
        }
        this.$http
          .get(Url + "/aimw/report/reportBirdView", {
            params: param
          })
          .then(res => {
            let data = res.data;
            if (data.code == 0) {
              this.details.birdView = data.data.birdView
              this.$http
                .get(Url + "/aimw/report/reportReviewImgs", {
                  params: param
                })
                .then(res1 => {
                  let data1 = res1.data;
                  if (data1.code == 0) {
                    that.imgList = [
                      {
                        name: "鸟瞰图",
                        img: "data:image;base64," + data.data.birdView
                      },
                      {
                        name: "西侧俯身45度视图",
                        img: "data:image;base64," + data1.data.workView.westView
                      },
                      {
                        name: "东侧俯身45度视图",
                        img: "data:image;base64," + data1.data.workView.eastView
                      },
                      {
                        name: "操作者视图",
                        img: "data:image;base64," + data1.data.workView.operatorView
                      }
                    ];
                    let allAjax = {
                      row: this.details,
                      rowr: this.reviewData,
                      rows: this.sandInfo,
                      row3: this.imgList,
                      row4: this.sandUseNumInfoName,
                      row5: this.sandUseNumInfoNum
                    }
                    setTimeout(() => {
                      resolve(allAjax)
                      this.loading.setText('正在请求数据 ( ' + count + ' / ' + len + ' )')
                    }, 500);
                  } else {
                    that.$message.error(data.msg);
                  }
                })
                .catch(res => {
                  console.log(res);
                });
            } else {
              that.$message.error(data.msg);
            }
          })
          .catch(res => {
            console.log(res);
          });
      })
    },
    async exportMeeting (type) {
      // type:'1' 选择导出 'all':导出所有
      try {
        this.allLoading = true
        let selectedData = []
        for (let i in this.iList) {
          selectedData.push(await this.getMeetingAll(this.iList[i].reportId, Number(i) + 1, this.iList.length))
        }
        console.log(selectedData)
        this.setSomePdfFlag(false)
        this.loading.setText('正在拼命导出')

        const zip = new JSZip()
        const promises = []
        this.isShowPdf = true

        for (let i = 0; i < selectedData.length; i++) {
          // console.log(selectedData[i])
          // console.log(selectedData[i].row.name)
          // 解析数据
          this.gender = this.iList[i].gender
          // selectedData[i].row.sysList[0].gradep = Number(selectedData[i].row.reportWarningInfo.depressionScore) * 82 + 42 + "px"
          // selectedData[i].row.sysList[1].gradep = Number(selectedData[i].row.reportWarningInfo.anxietyScore) * 82 + 42 + "px"
          // selectedData[i].row.sysList[2].gradep = Number(selectedData[i].row.reportWarningInfo.forcedScore) * 82 + 42 + "px"
          this.details = selectedData[i].row
          this.reviewData = selectedData[i].rowr
          this.reviewData = selectedData[i].rowr
          this.sandInfo = selectedData[i].rows
          for (let i in this.sandInfo) {
            this.sandInfo[i].id = Number(i) + 1
          }
          let list2 = []
          let sandLen2 = Math.ceil((this.sandInfo.length - 40) / 43)
          for (let j = 0; j < sandLen2; j++) {
            list2.push(this.sandInfo.slice(40 + 43 * j, 40 + 43 * (Number(j) + 1)))
          }
          this.sandList = list2
          this.imgList = selectedData[i].row3
          this.sandUseNumInfoName = selectedData[i].row4
          this.sandUseNumInfoNum = selectedData[i].row5
          this.initEchart();
          // 等待每一个转为pdf
          // console.log(htmlToZip)
          const p = await htmlToZip.getPdfs(this.$refs.sprintSomePdf, selectedData[i].row.name, selectedData[i].row.evaluationTime)
          promises.push(p)
        }
        // 等到所有的promise执行完成依次压缩到zip中
        Promise.all(promises).then(async (pdfs) => {
          console.log(pdfs)
          for (let i = 0; i < pdfs.length; i++) {
            const { PDF, name, count } = pdfs[i]
            // 如果只是导出一个pdf，则导出pdf格式
            if (pdfs.length === 1) {
              PDF.save(`${name}-第${count}次-${new Date().getTime()}.pdf`)
              setTimeout(() => {
                this.loading.close()
              }, 1000);
              // this.loading.setText('正在请求数据')
            } else {
              // 否则添加到压缩包里面
              await zip.file(`${name}-第${count}次-${new Date().getTime()}.pdf`, PDF.output('blob'))
            }
          }
          if (pdfs.length > 1) {
            await zip.generateAsync({ type: 'blob' }).then(content => {
              console.log(this.formTimes(new Date()))
              let nameZip = '评估报告 - ' + '共' + selectedData.length + '人 - ' + this.formTimes(new Date())
              FileSaver.saveAs(content, nameZip + '.zip')
            })
            setTimeout(() => {
              this.loading.close()
            }, 2000);
          }
          // this.loading.setText('正在请求数据')
        }).finally(() => {
          setTimeout(() => {
            this.loading.close()
          }, 2000);
          // this.loading.setText('正在请求数据')
        })
      } catch (e) {
        setTimeout(() => {
          this.loading.close()
        }, 2000);
        // this.loading.setText('正在请求数据')
        throw new Error(e)
      }
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
      let timeN = y + "年" + m + "月" + d + '日 ' + h + '时' + minute + '分' + second + '秒'
      return timeN;
    },
    getDetail(id) {
      let that = this;
      var param = {
        reportId: id
      };
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
            // that.myChartInit1();
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
            data.data.suggestion = data.data.suggestion.split("|||");
            let topArr = [];
            let duanArr = [];
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
            // console.log(depArr);
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
            // console.log(anxArr);
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
            // console.log(this.sysList);
            // console.log(data.data);
            that.details = that.justInfo(data.data);
            // console.log(that.details);
            // that.myChartInit();
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
    initEchart() {
      let that = this;
      this.myCharts01 = echarts.init(this.$refs.myCharts01);
      this.myCharts01.setOption({
        tooltip: {
          show: false
        },
        series: [
          {
            name: "需关注",
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
                value: that.details.warningNum,
                name: "需关注",
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#F5BEF6"
                      },
                      {
                        offset: 1,
                        color: "#F086B6"
                      }
                    ])
                  }
                }
              },
              {
                value: 3 - that.details.warningNum,
                name: "正常",
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#EFF7FE"
                      },
                      {
                        offset: 1,
                        color: "#EFF7FE"
                      }
                    ])
                  }
                }
              }
            ]
          }
        ]
      });
      setTimeout(() => {
        var theIndex = -1;
        // console.log(that.details.depressionSubDim)
        this.myChartRoses1 = echarts.init(this.$refs.myChartRoses1);
        // console.log(this.myChartRoses1);
        this.myChartRoses1.setOption({
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [
            {
              name: "面积模式",
              type: "pie",
              animation: false,
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
        this.myChartZhus1 = echarts.init(this.$refs.myChartZhus1);
        this.myChartZhus1.setOption({
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
            top: "30",
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
              animation: false,
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
        this.myChartPiess11 = echarts.init(
          document.getElementById("myChartPiess11")
        );
        this.myChartPiess11.setOption({
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
                  name: that.details.depressionSubDim[0].name,
                  max: 3,
                  axisLabel: { show: true }
                },
                {
                  name: that.details.depressionSubDim[1].name,
                  max: 3,
                  axisLabel: { show: false }
                },
                {
                  name: that.details.depressionSubDim[2].name,
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
              that.details.depressionSubDim[0].name,
              that.details.depressionSubDim[1].name,
              that.details.depressionSubDim[2].name
            ]
          },
          animation: false,
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
                    that.details.depressionSubDim[0].score,
                    that.details.depressionSubDim[1].score,
                    that.details.depressionSubDim[2].score
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
        this.myChartPiess22 = echarts.init(
          document.getElementById("myChartPiess22")
        );
        this.myChartPiess22.setOption({
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
                  name: that.details.anxietySubDim[0].name,
                  max: 3,
                  axisLabel: { show: true }
                },
                {
                  name: that.details.anxietySubDim[1].name,
                  max: 3,
                  axisLabel: { show: false }
                },
                {
                  name: that.details.anxietySubDim[2].name,
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
              that.details.anxietySubDim[0].name,
              that.details.anxietySubDim[1].name,
              that.details.anxietySubDim[2].name
            ]
          },
          animation: false,
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
                    that.details.anxietySubDim[0].score,
                    that.details.anxietySubDim[1].score,
                    that.details.anxietySubDim[2].score
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
        this.myChartPiess33 = echarts.init(
          document.getElementById("myChartPiess33")
        );
        // console.log(this.myChartPiess33);
        this.myChartPiess33.setOption({
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
                  name: that.details.forcedSubDim[0].name,
                  max: 3,
                  axisLabel: { show: true }
                },
                {
                  name: that.details.forcedSubDim[1].name,
                  max: 3,
                  axisLabel: { show: false }
                },
                {
                  name: that.details.forcedSubDim[2].name,
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
              that.details.forcedSubDim[0].name,
              that.details.forcedSubDim[1].name,
              that.details.forcedSubDim[2].name
            ]
          },
          animation: false,
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
                    that.details.forcedSubDim[0].score,
                    that.details.forcedSubDim[1].score,
                    that.details.forcedSubDim[2].score
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
    }
  }
};
</script>
<style lang="less" scoped>
.table-class {
  display: grid;
  background-color: #fff;
  width: 1191px;
  box-sizing: border-box;
  margin: 0 auto;
  transform: scale(0.8);
  transform-origin: 0 0;
}
.table-style {
  border-collapse: collapse;
  width: 1190.71px;
  height: 1684px;
  text-align: center;
  position: relative;
  .shui_bg{
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 800px;
    bottom: 0;
    width: 346px;
    height: 109px;
  }
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
  background: linear-gradient(214deg, rgba(232, 220, 252, 0.3), rgba(232, 220, 252, 0.3));
  .gp_01_bg{
    width: 1190.71px;
    height: 1684px;
  }
  .gp_01_box{
    position: absolute;
    top: 739px;
    left: 67px;
    width: 1058px;
    height: 360px;
    background: #FFFFFF;
    box-shadow: 0px 13px 54px 0px rgba(76, 100, 132, 0.19);
    border-radius: 10px;
    display: flex;
    padding: 20px;
    align-items: center;
    .gp_01_photo{
      margin-right: 21px;
      width: 106px;
      height: 106px;
      box-shadow: 0px 2px 16px 0px rgba(73, 149, 229, 0.27);
      border-radius: 50%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .gp_01_msg{
      width: 891px;
      height: 240px;
      ul{
        display: flex;
        height: 100%;
        flex-wrap: wrap;
        li{
          text-align: left;
          display: flex;
          align-items: center;
          span{
            font-size: 20px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #394B6D;
            flex: 1;
          }
          .dt_blod{
            flex: unset;
            width: 100px;
            font-weight: 500;
            text-align: right;
          }
          .dtb_img{
            display: flex;
            align-items: center;
            font-size: 20px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #394B6D;
            img{
              width: 18px;
              margin-right: 4px;
            }
          }
          .dt_per1{
            width: 19px;
            height: 20px;
            margin-right: 10px;
          }
          .dt_per2{
            width: 21px;
            height: 21px;
            margin-right: 8px;
          }
          .dt_per3{
            width: 20px;
            height: 16px;
            margin-right: 9px;
          }
          .dt_per4{
            width: 20px;
            height: 20px;
            margin-right: 9px;
          }
          .dt_per5{
            width: 20px;
            height: 17px;
            margin-right: 9px;
          }
          .dt_per6{
            width: 16px;
            height: 17px;
            margin-right: 13px;
          }
          .dt_per7{
            width: 19px;
            height: 20px;
            margin-right: 10px;
          }
          .dt_per8{
            width: 18px;
            height: 18px;
            margin-right: 11px;
          }
        }
        li:nth-child(3n+1){
          width: 260px;
        }
        li:nth-child(3n+2){
          width: 280px;
        }
        li:nth-child(3n+3){
          width: 340px;
        }
      }
    }
  }
}

.group_02 {
  background: linear-gradient(214deg, rgba(232, 220, 252, 0.3), rgba(252, 243, 254, 0.3));
  .gp2_top {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0 45px 0;
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
  .gp2Cbox{
    text-align: left;
    margin-left: 78px;
    margin-top: 16px;
    margin-bottom: 26px;
    .dtmcl_du {
      display: flex;
      align-items: center;
      padding: 0 0;
      img {
        width: 26px;
        height: 26px;
        margin-right:6px;
      }
      span {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #5b6c89;
        line-height: 1;
      }
      .dtmcl_tx {
        color: #00c0ff;
      }
    }
    .dtmcl_du2 {
      margin-bottom: 12px;
      img {
        width: 20px;
        height: 20px;
        margin-right: 6px;
      }
    }
  }
  .gp2_box{
    margin: 0 auto;
    width: 1060px;
    padding: 50px;
    text-align: left;
    background: #FFFFFF;
    box-shadow: 0px 13px 43px 0px rgba(76, 100, 132, 0.1);
    border-radius: 4px;
    p{
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #394B6D;
      line-height: 36px;
      text-indent: 40px;
      margin-bottom: 30px;
    }
    .gp2b_tips{
      display: flex;
      align-items: center;
      img{
        width: 22px;
        height: 26px;
        margin-right: 10px;
      }
      span{
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FF8682;
      }
    }
  }
  .gp2_main{
    margin: 0 auto;
    width: 1060px;
    background: #FFFFFF;
    box-shadow: 0px 13px 43px 0px rgba(76, 100, 132, 0.1);
    border-radius: 4px;
    padding: 20px 23px 30px;
    .myChartBox{
      position: relative;
      margin: 20px auto 40px;
      .myChartTips{
        position: absolute;
        top: 76px;
        left: 0;
        right: 0;
        p{
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #5E6C87;
        }
        p:last-child{
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #006CFF;
        }
        p.c_red{
          color: #FE5FB8;
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
    .gp2_li {
      margin-bottom: 38px;
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
    .gp2b_tips{
      display: flex;
      img{
        width: 22px;
        height: 26px;
        margin-left: 46px;
        margin-right: 10px;
      }
      p{
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #394B6D;
        line-height: 26px;
        span{
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ED6BB5;
        }
        label{
          font-size: 20px;
        }
        .gp2bt_c{
          color: #52BEF9;
        }
      }
    }
    .dtmcl_txt{
      text-align: left;
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #394B6D;
      margin-left: 82px;
      margin-top: 10px;
    }
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
          div:last-child{
            border-right: 0;
          }
          .wran_col0{
            color: #006CFF !important;
          }
          .wran_col1{
            color: #6671FF !important;
          }
          .wran_col2{
            color: #D674FF !important;
          }
          .wran_col3{
            color: #FF33A7 !important;
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
            .gp_w_ll{
              display: flex !important;
              label{
                flex: 1;
                font-size: 16px;
              }
              label:first-child{
                border-right: 1px solid #CFE1F9;
              }
            }
          }
        }
      }
    }
  }
}
.group_03{
  background: #F2FAFF;
  .gp3_top{
   padding-top: 71px;
  }
  .gp3_box{
    width: 1060px;
    min-height: 632px;
    margin: 0 auto;
    background: #FFFFFF;
    box-shadow: 0px 0px 65px 16px rgba(69, 85, 119, 0.11);
    border-radius: 4px;
    .dtms_box {
      padding-bottom: 10px;
      .dtmsb_tle {
        height: 180px;
        h3 {
          font-size: 22px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #FFFFFF;
          padding-top: 24px;
          padding-bottom: 9px;
          line-height: 1;
          margin: 0;
        }
        .dtt_res {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
          margin-top: 15px;
          .dtt_img {
            position: relative;
            display: flex;
            align-items: center;
            margin-left: 20px;
            span {
              font-size: 20px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #ffffff;
            }
            img {
              width: 824px;
              height: 70px;
            }
            .dttr_btn {
              width: 58px;
              height: 58px;
              position: absolute;
              margin: auto;
              margin-left: -30px;
              left: 0;
              top: 32px;
            }
            .dttr_lv {
              position: absolute;
              margin: auto;
              margin-left: -70px;
              left: 0;
              bottom: 0;
              top: 105px;
              width: 140px;
              height: 59px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 18px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #ffffff;
            }
          }
        }
      }

      .dtmsb_tar {
        width: 525px;
        height: 226px;
        margin: 20px auto 40px;
        position: relative;
        .top_top{
          position: absolute;
          margin: auto;
          left: 0;
          right: 0;
          top: 0px;
          .tt_txt{
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #354B70;
            line-height: 20px;
            display: block;
          }
        }
        .bottom_left{
          position: absolute;
          margin: auto;
          left: 40px;
          right: 0;
          bottom: 2px;
          margin-left: 240px;
          .tt_txt{
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #354B70;
            line-height: 20px;
            display: block;
          }
        }
        .bottom_right{
          position: absolute;
          margin: auto;
          left: 0;
          right: 40px;
          bottom: 2px;
          margin-right: 240px;
          .tt_txt{
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #354B70;
            line-height: 20px;
            display: block;
          }
        }
        .demsb_tool1{
          position:absolute;
          margin: auto;
          top: -6px;
          left: 0;
          right: 0;
          margin-right: 160px;
          width: 112px;
          height: 34px;
          background:url(../../assets/images/report/exmaple.png) no-repeat center;
          background-size:100% 100%;
          text-align: left;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          .demsb_score{
            font-size: 14px;
            padding-left: 14px;
            margin:0 auto;
            line-height: 20px;
            width: 110px;
            color: #7486AF;
            span{
              margin-left: -6px;
              color: #00C0FF;
            }
          }
          .demsb_score1{
            span{
              margin-left: -6px;
              color: #016CFF;
            }
          }
        }
        .demsb_tool{
          position:absolute;
          margin: auto;
          top: -6px;
          left: 0;
          right: 0;
          margin-left: 300px;
          width: 112px;
          height:34px;
          background:url(../../assets/images/report/exmaple2.png) no-repeat center;
          background-size:100% 100%;
          text-align: left;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          .demsb_score{
            font-size: 14px;
            padding-left: 22px;
            margin:0 auto;
            line-height: 20px;
            width: 110px;
            color: #7486AF;
            span{
              margin-left: -6px;
              color: #00C0FF;
            }
          }
          .demsb_score1{
            span{
              margin-left: -6px;
              color: #016CFF;
            }
          }
        }
        .myChartPiess11,
        .myChartPiess22,
        .myChartPiess33 {
          width: 525px;
          height: 226px;
        }
        ul {
          position: absolute;
          margin: auto;
          left: 0;
          right: 0;
          bottom: -32px;
          display: flex;
          justify-content: center;
          align-items: center;
          li {
            padding: 0 20px;
            display: flex;
            align-items: center;
            span {
              font-size: 16px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #7786ac;
            }
            span:first-child {
              margin-right: 6px;
              width: 8px;
              height: 8px;
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
        padding: 0 58px;
        margin-bottom: 20px;
        .db_img {
          display: flex;
          align-items: center;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #6671ff;
          margin-bottom: 10px;
          img {
            width: 28px;
            height: 28px;
            margin-right: 10px;
          }
        }
        p {
            text-align: left;
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 24px;
            margin-bottom: 10px;
            color: #354b70;
            display: flex;
            align-items: flex-start;
            img{
              width: 4px;
              height: 18px;
              margin-top: 3px;
              margin-right: 10px;
            }
            span {
              margin-top: 5px;
              margin-right: 10px;
              width: 4px;
              height: 16px;
              background: linear-gradient(179deg, #059dff 0%, #00c0ff 100%);
            }
          }
      }
    }
  }
  .gp2_main{
    padding: 44px 29px;
  }
}
.group_04{
  .guide_box {
    margin-bottom: 104px;
    .gb_main {
      width: 1060px;
      margin: 0 auto;
      border-radius: 4px;
      background: #ffffff;
      overflow: hidden;
      .dtmcl_tle {
        display: flex;
        align-items: center;
        height: 60px;
        background: linear-gradient(
          90deg,
          rgba(5, 157, 255, 0.7),
          rgba(49, 204, 255, 0.7)
        );
        font-size: 22px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        img {
          width: 30px;
          height: 29px;
          margin-right: 10px;
          margin-left: 24px;
        }
      }
      .gb_contain {
        text-align: left;
        padding: 20px 25px;
        p {
          padding: 16px 0;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #354b70;
          display: flex;
          align-items: flex-start;
          img{
            width: 4px;
            height: 18px;
            margin-top: 2px;
            margin-right:6px;
          }
        }
        ul {
          li {
            display: flex;
            line-height: 36px;
            span {
              margin-top: 10px;
              margin-right: 10px;
              text-align: center;
              line-height: 16px;
              width: 16px;
              height: 16px;
              background: linear-gradient(177deg, #1becff, #00c6ff);
              border-radius: 50%;
              font-size:12px;
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
.group_05{
  background: #ffffff;
  .gp5_img_tle{
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      margin: 0 30px;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #394B6D;
    }
    img{
      width: 22px;
      height: 8px;
    }
  }
  .gp5_img_ul{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;
    width: 1060px;
    margin-top: 44px;
    .gp5_img_li{
      width: 514px;
      height: 350px;
      border: 1px solid #CBEBFD;
      box-shadow: 0px 3px 13px 0px rgba(87, 139, 215, 0.1);
      border-radius: 4px;
      margin-bottom: 40px;
      img{
        width: 100%;
        display: block;
      }
      p{
        height: 60px;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #54617B;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
.group_06{
  background: #ffffff;
  .dtmt_tle{
    display: flex;
    justify-content: center;
    align-items: center;
    label{
      display: inline-block;
      width: 4px;
      height: 18px;
      background: linear-gradient(180deg, #2D76F6 0%, #53C0F9 100%);
      margin-right: 6px;
    }
    span{
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #394B6D;
    }
  }
  .myChartRoses1, .myChartZhus1{
    margin: 0 auto;
    width: 1060px;
    height: 400px;
  }
  .dtm_xls {
    margin: 44px auto 70px;
    width: 1060px;
    border: 1px solid #e1e9ff;
    .dtmx_li {
      display: flex;
      height: 42px;
      .dtmxl_head {
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        border-bottom: 1px solid #e1e9ff;
        border-right: 1px solid #e1e9ff;
        background: linear-gradient(
          0deg,
          rgba(196, 236, 255, 0.14) 0%,
          rgba(151, 205, 255, 0.14) 100%
        );
      }
      .dtmxl_body {
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 329px;
        border-bottom: 1px solid #e1e9ff;
        border-right: 1px solid #e1e9ff;
        span {
          color: #006cff;
        }
      }
      .dtmxl_body:last-child {
        border-right: 0;
      }
    }
    .dtmx_lis {
      height: 84px;
      .dtmxl_head {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        border-bottom: 0 !important;
        border-right: 1px solid #e1e9ff;
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
        border-right: 1px solid #e1e9ff;
        .dtmxl_dl {
          height: 42px;
          display: flex;
          .dtmxl_dt {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 135px;
            height: 42px;
            border-bottom: 1px solid #e1e9ff;
            border-right: 1px solid #e1e9ff;
            background: linear-gradient(
              0deg,
              rgba(196, 236, 255, 0.14) 0%,
              rgba(151, 205, 255, 0.14) 100%
            );
            font-size: 16px;
          }
          .dtmxl_dd {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 394px;
            border-bottom: 1px solid #e1e9ff;
            border-right: 1px solid #e1e9ff;
            font-size: 16px;
          }

          .dtmxl_dds {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 329px;
            border-bottom: 1px solid #e1e9ff;
            font-size: 16px;
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
}
.group_07{
  background: #ffffff;
  .gp_warn{
    margin: 30px 30px;
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
        div:last-child{
          border-right: 0;
        }
        .wran_col0{
          color: #006CFF !important;
        }
        .wran_col1{
          color: #6671FF !important;
        }
        .wran_col2{
          color: #D674FF !important;
        }
        .wran_col3{
          color: #FF33A7 !important;
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
          .gp_w_ll{
            display: flex !important;
            label{
              flex: 1;
              font-size: 16px;
            }
            label:first-child{
              border-right: 1px solid #CFE1F9;
            }
          }
        }
      }
    }
  }
  .gp7_box{
    width: 1060px;
    margin: 0 auto;
    margin-top: 40px;
    ul{
      li.gp_w_th{
        height: 42px;
        line-height: 42px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #394B6D;
      }
      li.gp_w_td{
        div{
          span{
            height: 37px;
            line-height: 37px;
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #7986A9;
          }
        }
      }
    }
  }
}
.gp2lb_chart{
  display: flex;
  justify-content: space-around;
  padding: 0 80px 0;

}

.myChart {
  display: flex;
  justify-content: center;
  width: 202px;
  height: 202px;
  margin: 0 auto 2px;
}
</style>
