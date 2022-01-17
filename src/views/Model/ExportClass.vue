<template>
  <div class="table-class" ref="sprintGroupPdf">
    <div class="table-style">
      <img class="group_01" src="../../assets/images/group/g_01.png" alt="" />
      <p class="group_p_01" :style="{'font-size': schoolName.length > 7 ? '32px' : '40px'}">{{ schoolName }} — {{ className }}</p>
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
              <span>{{ schoolName }} · {{ className }}学生</span>
              <!-- ，共</span>
              <span class="wran_col1">4</span>
              <span>个班级</span>
              <span class="wran_col1">200</span>
              <span>名学生，实测</span>
              <span class="wran_col1">192</span>
              <span>名学生。</span> -->
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
              <span>智能心理沙盘</span>
              <!-- <span class="gp3lb_num">39名(91%)</span>
              <span>学生的结果可信，</span>
              <span class="gp3lb_num">4名(9%)</span>
              <span>学生的测验结果无法确定，建议重做。</span> -->
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
              <span>本班共</span>
              <span class="wran_col0">{{ EvaResult.totalStudent }}</span>
              <span>名学生，实测</span>
              <span class="wran_col0">{{ EvaResult.evaStudent }}</span>
              <span>人。</span>
              <span>其中</span>
              <span class="wran_col0"
                >{{ EvaResult.confidenceNum }}人({{
                  EvaResult.confidencePerct
                }})</span
              >
              <span>的测评结果可信，</span>
              <span class="wran_col0"
                >{{ EvaResult.unconfidenceNum }}人({{
                  EvaResult.unconfidencePerct
                }})</span
              >
              <span>的测评结果无法确定，建议重新测试。</span>
            </div>
          </div>
          <div class="gp2l_body">
            <img
              class="bt_tips"
              src="../../assets/images/group/bt_tips.png"
              alt=""
            />
            <div class="gp2lb_txt">
              <span
                >特别说明：本报告中后期的统计数值均以可信测试数据为分析依据。</span
              >
            </div>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_029.png" alt="" />
            <div class="gp2lb_txt">
              <span
                >汇总每名学生的最近一次可信测评结果，系统发现，本班学生中有</span
              >
              <span class="wran_col1"
                >{{ EvaResult.riskNum }}人({{ EvaResult.riskPerct }})</span
              >
              <span>存在风险。</span>
            </div>
          </div>
          <div class="myChartBox">
            <div class="myChart" ref="myChart01" id="myChart01"></div>
            <div class="myChartTips">
              <p>有风险</p>
              <p>{{ EvaResult.riskPerct }}</p>
            </div>
            <div class="myChartLab">
              <div class="mcl_span"><span></span>有风险</div>
              <div class="mcl_span mcl_span1"><span></span>无风险</div>
            </div>
          </div>
          <div class="gp2l_body">
            <div class="gp2lb_txt">
              <span style="padding-left:10px">其中：</span>
            </div>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_029.png" alt="" />
            <div class="gp2lb_txt">
              <span>男生实测</span>
              <span class="wran_col0">{{ EvaResult.evaMale }}</span>
              <span>人，</span>
              <span class="wran_col1"
                >{{ EvaResult.riskMaleNum }}名({{
                  EvaResult.riskMalePerct
                }})</span
              >
              <span>男生存在风险，</span>
              <span class="wran_col0"
                >{{ EvaResult.unriskMaleNum }}名({{
                  EvaResult.unriskMalePerct
                }})</span
              >
              <span>男生无风险；</span>
            </div>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_029.png" alt="" />
            <div class="gp2lb_txt">
              <span>女生实测</span>
              <span class="wran_col0">{{ EvaResult.evaFemale }}</span>
              <span>人，</span>
              <span class="wran_col1"
                >{{ EvaResult.riskFemaleNum }}名({{
                  EvaResult.riskFemalePerct
                }})</span
              >
              <span>女生存在风险，</span>
              <span class="wran_col0"
                >{{ EvaResult.unriskFemaleNum }}名({{
                  EvaResult.unriskFemalePerct
                }})</span
              >
              <span>女生无风险；</span>
            </div>
          </div>
          <div class="gp2lb_chart">
            <div class="myChartBox">
              <div class="myChart" ref="myChart02" id="myChart02"></div>
              <div class="myChartTips">
                <p>男有风险</p>
                <p>{{ EvaResult.riskMalePerct }}</p>
              </div>
              <div class="myChartLab">
                <div class="mcl_span"><span></span>男有风险</div>
                <div class="mcl_span mcl_span1"><span></span>男无风险</div>
              </div>
            </div>
            <div class="myChartBox">
              <div class="myChart" ref="myChart03" id="myChart03"></div>
              <div class="myChartTips">
                <p>女有风险</p>
                <p>{{ EvaResult.riskFemalePerct }}</p>
              </div>
              <div class="myChartLab">
                <div class="mcl_span"><span></span>女有风险</div>
                <div class="mcl_span mcl_span1"><span></span>女无风险</div>
              </div>
            </div>
          </div>
          <!-- <div class="mb_tips">【注】 风险预警人数或频次，均为剔除不可信数据后的风险人数或频次。</div> -->
        </div>
      </div>
    </div>
    <div class="table-style group_02">
      <div class="gp2_main" style="height:1554px;margin:65px auto;">
        <div class="gp2_li">
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_029.png" alt="" />
            <div class="gp2lb_txt">
              <span>经测评，本班存在：</span>
            </div>
          </div>
          <div class="gp2l_body" v-for="item in systemList" :key="item.id">
            <img
              class="bt_tips"
              src="../../assets/images/group/dot2.png"
              alt=""
            />
            <div class="gp2lb_txt">
              <span>{{item.name}}风险学生</span>
              <span class="wran_col0">{{item.num}}</span>
              <span>名（男生</span>
              <span class="wran_col1"
                >{{item.male}}</span
              >
              <span>人，女生</span>
              <span class="wran_col3"
                >{{item.female}}</span
              >
              <span>人）； </span>
            </div>
          </div>
          <div class="myChartLab1">
            <div class="mcl_span"><span></span>男</div>
            <div class="mcl_span mcl_span1"><span></span>女</div>
          </div>
          <div class="myChart00" ref="myChart00" id="myChart00"></div>
        </div>
      </div>
    </div>
    <div class="table-style group_02 group_03">
      <div class="gp2_top">
        <img
          style="width:132px;height:132px;"
          src="../../assets/images/group/g_031.png"
          alt=""
        />
        <span class="gp2_t_txt">维度预警</span>
        <span class="gp2_t_eng">Dimension Alert</span>
      </div>
      <div class="gp2_main">
        <div class="gp3_top gp3_top1" v-if="DimRisk.perctTxt" v-html="DimRisk.perctTxt">
        </div>
        <div class="gp2_li">
          <div class="gp2l_head">
            <img
              style="width:28px;height:30px;"
              src="../../assets/images/group/g_032.png"
              alt=""
            />
            <span>{{systemList[0].name}}风险</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_027.png" alt="" />
            <div class="gp2lb_txt">
              <span>{{systemList[0].name}}风险一览</span>
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
                <div style="line-height:183px">{{systemList[0].name}}</div>
                <div>
                  <span class="wran_col3">重度</span>
                  <span class="wran_col2">中度</span>
                  <span class="wran_col1">轻度</span>
                  <span class="wran_col0">正常</span>
                </div>
                <div>
                  <span>{{systemList[0].info.severeNum}}</span>
                  <span>{{systemList[0].info.mediumNum}}</span>
                  <span>{{systemList[0].info.lightNum}}</span>
                  <span>{{systemList[0].info.normalNum}}</span>
                </div>
                <div>
                  <span>{{systemList[0].info.severePerct1}}</span>
                  <span>{{systemList[0].info.mediumPerct1}}</span>
                  <span>{{systemList[0].info.lightPerct1}}</span>
                  <span>{{systemList[0].info.normalPerct1}}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_027.png" alt="" />
            <div class="gp2lb_txt">
              <span>{{systemList[0].name}}风险学生名单</span>
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th gp_w_th1">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div>预警类型</div>
                <div>测试日期</div>
              </li>
              <li
                :class="['gp_w_tr', 'gp_w_tr1',systemList[0].list.length > 0 ? 'gp_none' : 'gp_block']"
                style="justify-content:center;color:#848DA0;height:50px;line-height:50px"
              >
                无{{systemList[0].name}}风险学生
              </li>
              <li
                :class="['gp_w_tr', 'gp_w_tr1',systemList[0].list.length > 0 ? 'gp_block' : 'gp_none']"
                v-for="item in systemList[0].list"
                :key="item.id"
              >
                <div>{{ item.id}}</div>
                <div>{{ item.name }}</div>
                <div>{{ item.passport }}</div>
                <div>{{ item.className }}</div>
                <div :class="[item.level == '轻度' ? 'wran_col1' : '', item.level == '中度' ? 'wran_col2' : '',item.level == '重度' ? 'wran_col3' : '']">{{ item.level }}{{systemList[0].name}}</div>
                <div>{{ item.datetime }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="table-style group_02 group_03"
      v-for="item in systemList[0].list1"
      :key="item.id"
    >
      <div class="gp2_main gp2_main1">
        <div class="gp2_li">
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th gp_w_th1">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div>预警类型</div>
                <div>测试日期</div>
              </li>
              <li
                class="gp_w_tr gp_w_tr1"
                v-for="itemc in item"
                :key="itemc.id"
              >
                <div>{{ itemc.id}}</div>
                <div>{{ itemc.name }}</div>
                <div>{{ itemc.passport }}</div>
                <div>{{ itemc.className }}</div>
                <div :class="[itemc.level == '轻度' ? 'wran_col1' : '', itemc.level == '中度' ? 'wran_col2' : '',itemc.level == '重度' ? 'wran_col3' : '']">{{ itemc.level }}{{systemList[0].name}}</div>
                <div>{{ itemc.datetime }}</div>
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
            <img
              style="width:33px;height:28px;"
              src="../../assets/images/group/g_033.png"
              alt=""
            />
            <span>{{systemList[1].name}}风险</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_025.png" alt="" />
            <div class="gp2lb_txt">
              <span>{{systemList[1].name}}风险一览</span>
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
                <div style="line-height:183px">{{systemList[1].name}}</div>
                <div>
                  <span class="wran_col3">重度</span>
                  <span class="wran_col2">中度</span>
                  <span class="wran_col1">轻度</span>
                  <span class="wran_col0">正常</span>
                </div>
                <div>
                  <span>{{systemList[1].info.severeNum}}</span>
                  <span>{{systemList[1].info.mediumNum}}</span>
                  <span>{{systemList[1].info.lightNum}}</span>
                  <span>{{systemList[1].info.normalNum}}</span>
                </div>
                <div>
                  <span>{{systemList[1].info.severePerct1}}</span>
                  <span>{{systemList[1].info.mediumPerct1}}</span>
                  <span>{{systemList[1].info.lightPerct1}}</span>
                  <span>{{systemList[1].info.normalPerct1}}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_025.png" alt="" />
            <div class="gp2lb_txt">
              <span>{{systemList[1].name}}风险学生名单</span>
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th gp_w_th1">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div>预警类型</div>
                <div>测试日期</div>
              </li>
              <li
                :class="['gp_w_tr', 'gp_w_tr1',systemList[1].list.length > 0 ? 'gp_none' : 'gp_block']"
                style="justify-content:center;color:#848DA0;height:50px;line-height:50px"
              >
                无{{systemList[1].name}}风险学生
              </li>
              <li
                :class="['gp_w_tr', 'gp_w_tr1',systemList[1].list.length > 0 ? 'gp_block' : 'gp_none']"
                v-for="item in systemList[1].list"
                :key="item.id"
              >
                <div>{{ item.id}}</div>
                <div>{{ item.name }}</div>
                <div>{{ item.passport }}</div>
                <div>{{ item.className }}</div>
                <div :class="[item.level == '轻度' ? 'wran_col1' : '', item.level == '中度' ? 'wran_col2' : '',item.level == '重度' ? 'wran_col3' : '']">{{ item.level }}{{systemList[1].name}}</div>
                <div>{{ item.datetime }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="table-style group_02 group_03"
      v-for="item in systemList[1].list1"
      :key="item.id"
    >
      <div class="gp2_main gp2_main1">
        <div class="gp2_li">
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th gp_w_th1">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div>预警类型</div>
                <div>测试日期</div>
              </li>
              <li
                class="gp_w_tr gp_w_tr1"
                v-for="itemc in item"
                :key="itemc.id"
              >
                <div>{{ itemc.id}}</div>
                <div>{{ itemc.name }}</div>
                <div>{{ itemc.passport }}</div>
                <div>{{ itemc.className }}</div>
                <div :class="[itemc.level == '轻度' ? 'wran_col1' : '', itemc.level == '中度' ? 'wran_col2' : '',itemc.level == '重度' ? 'wran_col3' : '']">{{ itemc.level }}{{systemList[1].name}}</div>
                <div>{{ itemc.datetime }}</div>
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
            <img
              style="width:30px;height:29px;"
              src="../../assets/images/group/g_034.png"
              alt=""
            />
            <span>{{systemList[2].name}}风险</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_023.png" alt="" />
            <div class="gp2lb_txt">
              <span>{{systemList[2].name}}风险学生名单</span>
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
                <div style="line-height:183px">{{systemList[2].name}}</div>
                <div>
                  <span class="wran_col3">重度</span>
                  <span class="wran_col2">中度</span>
                  <span class="wran_col1">轻度</span>
                  <span class="wran_col0">正常</span>
                </div>
                <div>
                  <span>{{systemList[2].info.severeNum}}</span>
                  <span>{{systemList[2].info.mediumNum}}</span>
                  <span>{{systemList[2].info.lightNum}}</span>
                  <span>{{systemList[2].info.normalNum}}</span>
                </div>
                <div>
                  <span>{{systemList[2].info.severePerct1}}</span>
                  <span>{{systemList[2].info.mediumPerct1}}</span>
                  <span>{{systemList[2].info.lightPerct1}}</span>
                  <span>{{systemList[2].info.normalPerct1}}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_025.png" alt="" />
            <div class="gp2lb_txt">
              <span>{{systemList[2].name}}风险学生名单</span>
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th gp_w_th1">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div>预警类型</div>
                <div>测试日期</div>
              </li>
              <li
                :class="['gp_w_tr', 'gp_w_tr1',systemList[2].list.length > 0 ? 'gp_none' : 'gp_block']"
                style="justify-content:center;color:#848DA0;height:50px;line-height:50px"
              >
                无{{systemList[2].name}}风险学生
              </li>
              <li
                :class="['gp_w_tr', 'gp_w_tr1',systemList[2].list.length > 0 ? 'gp_block' : 'gp_none']"
                v-for="item in systemList[2].list"
                :key="item.id"
              >
                <div>{{ item.id}}</div>
                <div>{{ item.name }}</div>
                <div>{{ item.passport }}</div>
                <div>{{ item.className }}</div>
                <div :class="[item.level == '轻度' ? 'wran_col1' : '', item.level == '中度' ? 'wran_col2' : '',item.level == '重度' ? 'wran_col3' : '']">{{ item.level }}{{systemList[2].name}}</div>
                <div>{{ item.datetime }}</div>
              </li>
            </ul>
          </div>
          <p class="gp_tipz" v-if="systemList[2].list1.length == 0">
            【注】 数据来源为《 中国中小学生心理健康发展报告(2019) 》
          </p>
        </div>
      </div>
    </div>
    <div
      class="table-style group_02 group_03"
      v-for="(item, index) in systemList[2].list1"
      :key="item.id"
    >
      <div class="gp2_main gp2_main1">
        <div class="gp2_li">
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th gp_w_th1">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div>预警类型</div>
                <div>测试日期</div>
              </li>
              <li
                class="gp_w_tr gp_w_tr1"
                v-for="itemc in item"
                :key="itemc.id"
              >
                <div>{{ itemc.id}}</div>
                <div>{{ itemc.name }}</div>
                <div>{{ itemc.passport }}</div>
                <div>{{ itemc.className }}</div>
                <div :class="[itemc.level == '轻度' ? 'wran_col1' : '', itemc.level == '中度' ? 'wran_col2' : '',itemc.level == '重度' ? 'wran_col3' : '']">{{ itemc.level }}{{systemList[2].name}}</div>
                <div>{{ itemc.datetime }}</div>
              </li>
            </ul>
          </div>
          <p class="gp_tipz" v-if="index == systemList[2].list1.length - 1">
            【注】 数据来源为《 中国中小学生心理健康发展报告(2019) 》
          </p>
        </div>
      </div>
    </div>
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
        <ul>
          <li>
            <span class="gp5_index">1</span>
            <p v-html="Suggestion.evaPerct1"></p>
          </li>
          <li>
            <span class="gp5_index">2</span>
            <p v-html="systemList[0].sugger"></p>
          </li>
          <li>
            <span class="gp5_index">3</span>
            <p v-html="systemList[1].sugger"></p>
          </li>
          <li>
            <span class="gp5_index">4</span>
            <p v-html="systemList[2].sugger"></p>
          </li>
          <li>
            <span class="gp5_index">5</span>
            <p>
              针对预警学生，建议再次进行一对一评估，酌情安排个体咨询或团体辅导，若情况严重建议转介。
            </p>
          </li>
          <!-- <li>
            <span class="gp5_index">6</span>
            <p>
              针对测评结果不可信学生，建议通过AI心世界或其他测评方式，重新进行测评。
            </p>
          </li> -->
        </ul>
      </div>
      <div class="gp5_botm"></div>
      <div class="mb_tips">
        【注】 数据来源为{{Suggestion.standard}}
      </div>
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
            <span>预警学生名单</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_023.png" alt="" />
            <div class="gp2lb_txt">
              <span
                >预警学生，是指根据系统检测，存在心理风险的学生（<label>已剔除不可信数据</label>）。</span
              >
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th gp_w_th1">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div style="flex:2">预警类型</div>
                <div>测试日期</div>
              </li>
              <li
                :class="['gp_w_tr', 'gp_w_tr1',RiskList.length > 0 ? 'gp_none' : 'gp_block']"
                style="justify-content:center;color:#848DA0;height:50px;line-height:50px"
              >
                无预警风险学生
              </li>
              <li
                :class="['gp_w_tr', 'gp_w_tr1',RiskList.length > 0 ? 'gp_block' : 'gp_none']"
                v-for="item in RiskList"
                :key="item.id"
              >
                <div>{{ item.id }}</div>
                <div>{{ item.name }}</div>
                <div>{{ item.passport }}</div>
                <div>{{ item.className }}</div>
                <div style="flex:2" v-html="item.level1"></div>
                <div>{{ item.datetime }}</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="gp2_li" v-if="rlen0 < 22">
          <div class="gp2l_head">
            <img
              style="width:45px;height:41px;"
              src="../../assets/images/group/g_052.png"
              alt=""
            />
            <span>不可信名单</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_025.png" alt="" />
            <div class="gp2lb_txt">
              <span
                >不可信，是指学生在智能沙盘的测验时间、沙具选择等方面存在异常，其测验结果不可信。</span
              >
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th gp_w_th1">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div style="flex:2">预警类型</div>
                <div>测试日期</div>
              </li>
              <li
                :class="['gp_w_tr', 'gp_w_tr1',UnconfidenceList.length > 0 ? 'gp_none' : 'gp_block']"
                style="justify-content:center;color:#848DA0;height:50px;line-height:50px"
              >
                无不可信报告
              </li>
              <li
                :class="['gp_w_tr', 'gp_w_tr1',UnconfidenceList.length > 0 ? 'gp_block' : 'gp_none']"
                v-for="item in UnconfidenceList"
                :key="item.id"
              >
                <div>{{ item.id }}</div>
                <div>{{ item.name }}</div>
                <div>{{ item.passport }}</div>
                <div>{{ item.className }}</div>
                <div style="flex:2" v-html="item.level2"></div>
                <div>{{ item.datetime }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="table-style group_02 group_03 group_06"
      v-for="item in RiskList1"
      :key="item.id"
    >
      <div class="gp2_main gp2_main1 gp2_main2">
        <div class="gp2_li">
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th gp_w_th1">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div>预警类型</div>
                <div>测试日期</div>
              </li>
              <li
                class="gp_w_tr gp_w_tr1"
                v-for="itemc in item"
                :key="itemc.id"
              >
                <div>{{ itemc.id }}</div>
                <div>{{ itemc.name }}</div>
                <div>{{ itemc.passport }}</div>
                <div>{{ itemc.className }}</div>
                <div style="flex:2" v-html="itemc.level1"></div>
                <div>{{ itemc.datetime }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="table-style group_02 group_03 group_06"  v-if="rlen0 > 21">
      <div class="gp2_main gp2_main1">
        <div class="gp2_li">
          <div class="gp2l_head">
            <img
              style="width:45px;height:41px;"
              src="../../assets/images/group/g_052.png"
              alt=""
            />
            <span>不可信名单</span>
          </div>
          <div class="gp2l_body">
            <img src="../../assets/images/group/g_025.png" alt="" />
            <div class="gp2lb_txt">
              <span
                >不可信，是指学生在智能沙盘的测验时间、沙具选择等方面存在异常，其测验结果不可信。</span
              >
            </div>
          </div>
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th gp_w_th1">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div style="flex:2">预警类型</div>
                <div>测试日期</div>
              </li>
              <li
                :class="['gp_w_tr', 'gp_w_tr1',UnconfidenceList.length > 0 ? 'gp_none' : 'gp_block']"
                style="justify-content:center;color:#848DA0;height:50px;line-height:50px"
              >
                无不可信报告
              </li>
              <li
                :class="['gp_w_tr', 'gp_w_tr1',UnconfidenceList.length > 0 ? 'gp_block' : 'gp_none']"
                v-for="item in UnconfidenceList"
                :key="item.id"
              >
                <div>{{ item.id }}</div>
                <div>{{ item.name }}</div>
                <div>{{ item.passport }}</div>
                <div>{{ item.className }}</div>
                <div style="flex:2" v-html="item.level2"></div>
                <div>{{ item.datetime }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="table-style group_02 group_03 group_06"
      v-for="item in UnconfidenceList1"
      :key="item.id"
    >
      <div class="gp2_main gp2_main1 gp2_main2">
        <div class="gp2_li">
          <div class="gp_warn">
            <ul>
              <li class="gp_w_th gp_w_th1">
                <div>序号</div>
                <div>姓名</div>
                <div>学籍号</div>
                <div>班级</div>
                <div>预警类型</div>
                <div>测试日期</div>
              </li>
              <li
                class="gp_w_tr gp_w_tr1"
                v-for="itemc in item"
                :key="itemc.id"
              >
                <div>{{ itemc.id }}</div>
                <div>{{ itemc.name }}</div>
                <div>{{ itemc.passport }}</div>
                <div>{{ itemc.className }}</div>
                <div style="flex:2" v-html="itemc.level2"></div>
                <div>{{ itemc.datetime }}</div>
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
      rlen0: 0,
      rlen1: 0,
      DimRisk: {},
      systemList: [
        {
          id: 1,
          name: "",
          num: "",
          perct: "",
          male: "",
          female: "",
          perct1: "",
          list: [],
          list1: [],
          info: {
            severeNum: "",
            severePerct: "",
            severePerct1: "",
            mediumNum: "",
            mediumPerct: "",
            mediumPerct1: "",
            lightNum: "",
            lightPerct: "",
            lightPerct1: "",
            normalNum: "",
            normalPerct: "",
            normalPerct1: ""
          }
        },
        {
          id: 2,
          name: "",
          num: "",
          perct: "",
          male: "",
          female: "",
          perct1: "",
          list: [],
          list1: [],
          info: {
            severeNum: "",
            severePerct: "",
            severePerct1: "",
            mediumNum: "",
            mediumPerct: "",
            mediumPerct1: "",
            lightNum: "",
            lightPerct: "",
            lightPerct1: "",
            normalNum: "",
            normalPerct: "",
            normalPerct1: ""
          }
        },
        {
          id: 3,
          name: "",
          num: "",
          perct: "",
          male: "",
          female: "",
          perct1: "",
          list: [],
          list1: [],
          info: {
            severeNum: "",
            severePerct: "",
            severePerct1: "",
            mediumNum: "",
            mediumPerct: "",
            mediumPerct1: "",
            lightNum: "",
            lightPerct: "",
            lightPerct1: "",
            normalNum: "",
            normalPerct: "",
            normalPerct1: ""
          }
        }
      ],
      EvaResult: {},
      RiskList: [],
      RiskList1: [],
      Suggestion: {},
      UnconfidenceList: [],
      UnconfidenceList1: [],
      className: "",
      schoolName: "",
      time: "",
      // 数据
      class: [],
      listnum: [
        {
          id: 1,
          name: 1
        },
        {
          id: 2,
          name: 2
        },
        {
          id: 3,
          name: 3
        },
        {
          id: 4,
          name: 4
        },
        {
          id: 5,
          name: 5
        },
        {
          id: 6,
          name: 6
        },
        {
          id: 7,
          name: 7
        },
        {
          id: 8,
          name: 8
        },
        {
          id: 9,
          name: 9
        },
        {
          id: 10,
          name: 10
        },
        {
          id: 11,
          name: 11
        },
        {
          id: 12,
          name: 12
        },
        {
          id: 13,
          name: 13
        },
        {
          id: 14,
          name: 14
        },
        {
          id: 15,
          name: 15
        },
        {
          id: 16,
          name: 16
        },
        {
          id: 17,
          name: 17
        },
        {
          id: 18,
          name: 18
        },
        {
          id: 19,
          name: 19
        },
        {
          id: 20,
          name: 20
        },
        {
          id: 21,
          name: 21
        },
        {
          id: 22,
          name: 22
        },
        {
          id: 23,
          name: 23
        },
        {
          id: 24,
          name: 24
        },
        {
          id: 25,
          name: 25
        },
        {
          id: 26,
          name: 26
        },
        {
          id: 27,
          name: 27
        },
        {
          id: 28,
          name: 28
        },
        {
          id: 29,
          name: 29
        },
        {
          id: 30,
          name: 30
        },
        {
          id: 31,
          name: 31
        },
        {
          id: 32,
          name: 32
        },
        {
          id: 33,
          name: 33
        },
        {
          id: 34,
          name: 34
        },
        {
          id: 35,
          name: 35
        },
        {
          id: 36,
          name: 36
        },
        {
          id: 37,
          name: 37
        },
        {
          id: 38,
          name: 38
        },
        {
          id: 39,
          name: 39
        },
        {
          id: 40,
          name: 40
        },
        {
          id: 41,
          name: 41
        },
        {
          id: 42,
          name: 42
        },
        {
          id: 43,
          name: 43
        },
        {
          id: 44,
          name: 44
        },
        {
          id: 45,
          name: 45
        },
        {
          id: 46,
          name: 46
        },
        {
          id: 47,
          name: 47
        },
        {
          id: 48,
          name: 48
        },
        {
          id: 49,
          name: 49
        },
        {
          id: 50,
          name: 50
        }
      ],
      sandList1: [],
      listnum1: 3,
      listnum2: 3,
      listnum3: 10,
      listnum4: 10,
      listh: 45,
      listh1: 45,
      listh2: 45,
      listh3: 45,
      listh4: 45,
      myChart00: "",
      myChart01: "",
      myChart02: "",
      myChart03: "",
      // ----
      infoClass: [],
      zipFlag: false,
      heNum: 37,
      myChartPiess11: "",
      myChartPiess22: "",
      myChartPiess33: "",
      myChartRoses1: "",
      myChartZhus1: "",
      gender: 1,
      myCharts01: "",
      details: {},
      reviewData: {},
      sandInfo: [],
      sandList: [],
      imgList: [],
      sandUseNumInfoName: [],
      sandUseNumInfoNum: []
    };
  },
  props: {
    gList: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    groupPdfs() {
      return this.$store.state.groupFlag;
    }
  },
  watch: {
    groupPdfs: function(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
      if (newVal) {
        console.log('1111')
        let len = 0;
        if (this.gList.aside == 1) {
          len = 1;
        } else {
          len = this.gList.class.length;
        }
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
    this.setGroupFlag(false);
  },
  mounted() {
    // console.log(this.gList)
    let list1 = [];
    let listLen1 = Math.ceil((this.listnum.length - 16) / 31);
    for (let j = 0; j < listLen1; j++) {
      list1.push(this.listnum.slice(16 + 31 * j, 16 + 31 * (Number(j) + 1)));
    }
    this.sandList1 = list1;
    console.log(this.sandList1);
    this.listh = 780 / this.listnum;
    this.listh1 = 315 / this.listnum1;
    this.listh2 = 315 / this.listnum2;
    this.listh3 = 510 / this.listnum3;
    this.listh4 = 510 / this.listnum4;
    console.log(this.listh);
    console.log(this.listh3);
    console.log(this.listh4);
  },
  methods: {
    ...mapMutations(["setGroupFlag"]),
    perctInfo (data) {
      return Math.round(data.toFixed(4) * 10000) / 100
    },
    getMeetingAll(ids) {
      let that = this;
      console.log(ids);
      let classes = []
      for (let i in ids) {
        classes.push(ids[i].class)
      }
      console.log(classes)
      return new Promise((resolve, reject) => {
        let param = {
          classIds: classes
        };
        console.log(param);
        this.$http
          .get(Url + "/aimw/report/exportClassReport", { params: param })
          .then(res => {
            let data = res.data;
            if (data.code == 0) {
              setTimeout(() => {
                // if (data.data.classesReports) {
                //   for (let m in data.data.classesReports) {
                //     for (let n in ids) {
                //       if (data.data.classesReports[m].className != ids[n].name) {
                //         data.data.classesReports.push({
                //           className: ids[n].name
                //         })
                //       }
                //     }
                //   }
                // } else {
                //   data.data.classesReports = []
                //   for (let n in ids) {
                //     data.data.classesReports.push({
                //       className: ids[n].name
                //     })
                //   }
                // }
                resolve(data.data.classesReports);
                this.loading.setText("正在请求数据");
              }, 500);
            } else {
              that.$message.error(data.msg);
              this.loading.close();
              this.setGroupFlag(false);
            }
          })
          .catch(res => {
            console.log(res);
            this.loading.close();
            this.setGroupFlag(false);
          });
      });
    },
    async exportMeeting(type) {
      // type:'1' 选择导出 'all':导出所有
      try {
        this.allLoading = true;
        let selectedData = [];

        if (this.gList.aside == 1) {
          selectedData.push(
            await this.getMeetingAll(
              this.gList.class[0].id,
              1,
              1,
              this.gList.class[0].name
            )
          );
        } else {
          // for (let i in this.gList.class) {
          selectedData = await this.getMeetingAll(this.gList.class);
          // }
        }
        console.log(selectedData);
        if (selectedData) {
          console.log(selectedData)
        } else {
          selectedData = []
        }
        this.infoClass = []
        this.setGroupFlag(false);
        console.log(this.gList.class)
        console.log(selectedData)
        this.loading.setText("正在拼命导出");

        const zip = new JSZip();
        const promises = [];
        this.isShowPdf = true;
        for (let i = 0; i < selectedData.length; i++) {
          // 解析数据
          console.log(selectedData[i]);
          if (selectedData[i].EvaResult.evaStudent == 0) {
            // this.loading.close();
            this.infoClass.push(selectedData[i].className)
            setTimeout(() => {
              // this.$notify.info({
              //   title: '消息',
              //   message: selectedData[i].className + '没有具体报告数据，无法导出！'
              // });
              this.$message.error(selectedData[i].className + '没有具体报告数据，无法导出！')
            }, 500 * i);
            console.log('没数据的报告')
          } else {
            // EvaResult
            // 不可信结果百分比
            selectedData[i].EvaResult.unconfidencePerct = this.perctInfo(1 - selectedData[i].EvaResult.confidencePerct.toFixed(4)) + "%";
            // 可信度百分比
            selectedData[i].EvaResult.confidencePerct = this.perctInfo(selectedData[i].EvaResult.confidencePerct) + "%";
            // 存在风险百分比
            selectedData[i].EvaResult.riskPerct1 = this.perctInfo(selectedData[i].EvaResult.riskPerct)
            selectedData[i].EvaResult.riskPerct2 = this.perctInfo(1 - selectedData[i].EvaResult.riskPerct.toFixed(4))
            // 存在风险百分比
            selectedData[i].EvaResult.riskPerct = this.perctInfo(selectedData[i].EvaResult.riskPerct) + "%";
            // 存在风险男生百分比
            selectedData[i].EvaResult.riskMalePerct1 = this.perctInfo(selectedData[i].EvaResult.riskMalePerct)
            // 无风险男生百分比
            selectedData[i].EvaResult.unriskMalePerct1 = this.perctInfo(1 - selectedData[i].EvaResult.riskMalePerct.toFixed(4))

            // 无风险男生百分比
            selectedData[i].EvaResult.unriskMalePerct = this.perctInfo(1 - selectedData[i].EvaResult.riskMalePerct.toFixed(4)) + "%";
            // 存在风险男生百分比
            selectedData[i].EvaResult.riskMalePerct = this.perctInfo(selectedData[i].EvaResult.riskMalePerct) + "%";

            // 存在风险女生百分比
            selectedData[i].EvaResult.riskFemalePerct1 = this.perctInfo(selectedData[i].EvaResult.riskFemalePerct)
            // 无风险女生百分比
            selectedData[i].EvaResult.unriskFemalePerct1 = this.perctInfo(1 - selectedData[i].EvaResult.riskFemalePerct.toFixed(4))

            // 无风险女生百分比
            selectedData[i].EvaResult.unriskFemalePerct = this.perctInfo(1 - selectedData[i].EvaResult.riskFemalePerct.toFixed(4)) + "%";
            // 存在风险女生百分比
            selectedData[i].EvaResult.riskFemalePerct = this.perctInfo(selectedData[i].EvaResult.riskFemalePerct) + "%";
            // selectedData[i].DimRisk.depressionList = [
            //   {
            //     id: 100,
            //     name: 1
            //   },
            //   {
            //     id: 200,
            //     name: 2
            //   },
            //   {
            //     id: 300,
            //     name: 3
            //   },
            //   {
            //     id: 400,
            //     name: 4
            //   },
            //   {
            //     id: 500,
            //     name: 5
            //   },
            //   {
            //     id: 600,
            //     name: 6
            //   },
            //   {
            //     id: 700,
            //     name: 7
            //   },
            //   {
            //     id: 800,
            //     name: 8
            //   },
            //   {
            //     id: 900,
            //     name: 9
            //   },
            //   {
            //     id: 10,
            //     name: 10
            //   },
            //   {
            //     id: 11,
            //     name: 11
            //   },
            //   {
            //     id: 12,
            //     name: 12
            //   },
            //   {
            //     id: 13,
            //     name: 13
            //   },
            //   {
            //     id: 14,
            //     name: 14
            //   },
            //   {
            //     id: 15,
            //     name: 15
            //   },
            //   {
            //     id: 16,
            //     name: 16
            //   },
            //   {
            //     id: 17,
            //     name: 17
            //   },
            //   {
            //     id: 18,
            //     name: 18
            //   },
            //   {
            //     id: 19,
            //     name: 19
            //   },
            //   {
            //     id: 20,
            //     name: 20
            //   },
            //   {
            //     id: 21,
            //     name: 21
            //   },
            //   {
            //     id: 22,
            //     name: 22
            //   },
            //   {
            //     id: 23,
            //     name: 23
            //   },
            //   {
            //     id: 24,
            //     name: 24
            //   },
            //   {
            //     id: 25,
            //     name: 25
            //   },
            //   {
            //     id: 26,
            //     name: 26
            //   },
            //   {
            //     id: 27,
            //     name: 27
            //   },
            //   {
            //     id: 28,
            //     name: 28
            //   },
            //   {
            //     id: 29,
            //     name: 29
            //   },
            //   {
            //     id: 30,
            //     name: 30
            //   },
            //   {
            //     id: 31,
            //     name: 31
            //   },
            //   {
            //     id: 32,
            //     name: 32
            //   },
            //   {
            //     id: 33,
            //     name: 33
            //   },
            //   {
            //     id: 34,
            //     name: 34
            //   },
            //   {
            //     id: 35,
            //     name: 35
            //   },
            //   {
            //     id: 36,
            //     name: 36
            //   },
            //   {
            //     id: 37,
            //     name: 37
            //   },
            //   {
            //     id: 38,
            //     name: 38
            //   },
            //   {
            //     id: 39,
            //     name: 39
            //   },
            //   {
            //     id: 40,
            //     name: 40
            //   },
            //   {
            //     id: 41,
            //     name: 41
            //   },
            //   {
            //     id: 42,
            //     name: 42
            //   },
            //   {
            //     id: 43,
            //     name: 43
            //   },
            //   {
            //     id: 44,
            //     name: 44
            //   },
            //   {
            //     id: 45,
            //     name: 45
            //   },
            //   {
            //     id: 46,
            //     name: 46
            //   },
            //   {
            //     id: 47,
            //     name: 47
            //   },
            //   {
            //     id: 48,
            //     name: 48
            //   },
            //   {
            //     id: 49,
            //     name: 49
            //   },
            //   {
            //     id: 50,
            //     name: 50
            //   }
            // ]
            let list0 = []
            if (selectedData[i].DimRisk.depressionList) {
              list0 = selectedData[i].DimRisk.depressionList
            } else {
              list0 = []
            }
            for (let i in list0) {
              list0[i].id = Number(i) + 1
              list0[i].datetime = list0[i].datetime.split(' ')[0]
              if (list0[i].depressionLevel == 0 || list0[i].depressionLevel == 1) {
                list0[i].level = '/'
              } else if (list0[i].depressionLevel == 2 || list0[i].depressionLevel == 3) {
                list0[i].level = '轻度'
              } else if (list0[i].depressionLevel == 4 || list0[i].depressionLevel == 5) {
                list0[i].level = '中度'
              } else if (list0[i].depressionLevel == 6) {
                list0[i].level = '重度'
              }
            }
            console.log(list0)
            let list01 = list0.slice(0, 16)
            console.log(list01)
            let list02 = []
            let len01 = Math.ceil((list0.length - 16) / 31);
            for (let j = 0; j < len01; j++) {
              list02.push(list0.slice(16 + 31 * j, 16 + 31 * (Number(j) + 1)));
            }
            console.log(list02)
            // selectedData[i].DimRisk.anxietyList = [
            //   {
            //     id: 100,
            //     name: 1
            //   },
            //   {
            //     id: 101,
            //     name: 1
            //   },
            //   {
            //     id: 102,
            //     name: 1
            //   },
            //   {
            //     id: 103,
            //     name: 1
            //   },
            //   {
            //     id: 104,
            //     name: 1
            //   },
            //   {
            //     id: 105,
            //     name: 1
            //   },
            //   {
            //     id: 106,
            //     name: 1
            //   },
            //   {
            //     id: 107,
            //     name: 1
            //   },
            //   {
            //     id: 108,
            //     name: 1
            //   },
            //   {
            //     id: 2,
            //     name: 2
            //   },
            //   {
            //     id: 3,
            //     name: 3
            //   },
            //   {
            //     id: 4,
            //     name: 4
            //   },
            //   {
            //     id: 5,
            //     name: 5
            //   },
            //   {
            //     id: 6,
            //     name: 6
            //   },
            //   {
            //     id: 7,
            //     name: 7
            //   },
            //   {
            //     id: 8,
            //     name: 8
            //   },
            //   {
            //     id: 9,
            //     name: 9
            //   },
            //   {
            //     id: 10,
            //     name: 10
            //   },
            //   {
            //     id: 11,
            //     name: 11
            //   },
            //   {
            //     id: 12,
            //     name: 12
            //   },
            //   {
            //     id: 13,
            //     name: 13
            //   },
            //   {
            //     id: 14,
            //     name: 14
            //   },
            //   {
            //     id: 15,
            //     name: 15
            //   },
            //   {
            //     id: 16,
            //     name: 16
            //   },
            //   {
            //     id: 17,
            //     name: 17
            //   },
            //   {
            //     id: 18,
            //     name: 18
            //   },
            //   {
            //     id: 19,
            //     name: 19
            //   },
            //   {
            //     id: 20,
            //     name: 20
            //   },
            //   {
            //     id: 21,
            //     name: 21
            //   },
            //   {
            //     id: 22,
            //     name: 22
            //   },
            //   {
            //     id: 23,
            //     name: 23
            //   },
            //   {
            //     id: 24,
            //     name: 24
            //   },
            //   {
            //     id: 25,
            //     name: 25
            //   },
            //   {
            //     id: 26,
            //     name: 26
            //   },
            //   {
            //     id: 27,
            //     name: 27
            //   },
            //   {
            //     id: 28,
            //     name: 28
            //   },
            //   {
            //     id: 29,
            //     name: 29
            //   },
            //   {
            //     id: 30,
            //     name: 30
            //   },
            //   {
            //     id: 31,
            //     name: 31
            //   },
            //   {
            //     id: 32,
            //     name: 32
            //   },
            //   {
            //     id: 33,
            //     name: 33
            //   },
            //   {
            //     id: 34,
            //     name: 34
            //   },
            //   {
            //     id: 35,
            //     name: 35
            //   },
            //   {
            //     id: 36,
            //     name: 36
            //   },
            //   {
            //     id: 37,
            //     name: 37
            //   },
            //   {
            //     id: 38,
            //     name: 38
            //   },
            //   {
            //     id: 39,
            //     name: 39
            //   },
            //   {
            //     id: 40,
            //     name: 40
            //   },
            //   {
            //     id: 41,
            //     name: 41
            //   },
            //   {
            //     id: 42,
            //     name: 42
            //   },
            //   {
            //     id: 43,
            //     name: 43
            //   },
            //   {
            //     id: 44,
            //     name: 44
            //   },
            //   {
            //     id: 45,
            //     name: 45
            //   },
            //   {
            //     id: 46,
            //     name: 46
            //   },
            //   {
            //     id: 47,
            //     name: 47
            //   },
            //   {
            //     id: 48,
            //     name: 48
            //   },
            //   {
            //     id: 49,
            //     name: 49
            //   },
            //   {
            //     id: 50,
            //     name: 50
            //   }
            // ]
            let list1 = []
            if (selectedData[i].DimRisk.anxietyList) {
              list1 = selectedData[i].DimRisk.anxietyList
            } else {
              list1 = []
            }
            for (let i in list1) {
              list1[i].id = Number(i) + 1
              list1[i].datetime = list1[i].datetime.split(' ')[0]
              if (list1[i].anxietyLevel == 0 || list1[i].anxietyLevel == 1) {
                list1[i].level = '/'
              } else if (list1[i].anxietyLevel == 2 || list1[i].anxietyLevel == 3) {
                list1[i].level = '轻度'
              } else if (list1[i].anxietyLevel == 4 || list1[i].anxietyLevel == 5) {
                list1[i].level = '中度'
              } else if (list1[i].anxietyLevel == 6) {
                list1[i].level = '重度'
              }
            }
            console.log(list1)
            let list11 = list1.slice(0, 22)
            console.log(list11)
            let list12 = []
            let len11 = Math.ceil((list1.length - 22) / 31);
            for (let j = 0; j < len11; j++) {
              list12.push(list1.slice(22 + 31 * j, 22 + 31 * (Number(j) + 1)));
            }
            console.log(list12)
            // selectedData[i].DimRisk.forcedList = [
            //   {
            //     id: 1,
            //     name: 1
            //   },
            //   {
            //     id: 2,
            //     name: 2
            //   },
            //   {
            //     id: 3,
            //     name: 3
            //   },
            //   {
            //     id: 4,
            //     name: 4
            //   },
            //   {
            //     id: 5,
            //     name: 5
            //   },
            //   {
            //     id: 6,
            //     name: 6
            //   },
            //   {
            //     id: 7,
            //     name: 7
            //   },
            //   {
            //     id: 8,
            //     name: 8
            //   },
            //   {
            //     id: 9,
            //     name: 9
            //   },
            //   {
            //     id: 10,
            //     name: 10
            //   },
            //   {
            //     id: 11,
            //     name: 11
            //   },
            //   {
            //     id: 12,
            //     name: 12
            //   },
            //   {
            //     id: 13,
            //     name: 13
            //   },
            //   {
            //     id: 14,
            //     name: 14
            //   },
            //   {
            //     id: 15,
            //     name: 15
            //   },
            //   {
            //     id: 16,
            //     name: 16
            //   },
            //   {
            //     id: 17,
            //     name: 17
            //   },
            //   {
            //     id: 18,
            //     name: 18
            //   },
            //   {
            //     id: 19,
            //     name: 19
            //   },
            //   {
            //     id: 20,
            //     name: 20
            //   },
            //   {
            //     id: 21,
            //     name: 21
            //   },
            //   {
            //     id: 22,
            //     name: 22
            //   },
            //   {
            //     id: 23,
            //     name: 23
            //   },
            //   {
            //     id: 24,
            //     name: 24
            //   },
            //   {
            //     id: 25,
            //     name: 25
            //   },
            //   {
            //     id: 26,
            //     name: 26
            //   },
            //   {
            //     id: 27,
            //     name: 27
            //   },
            //   {
            //     id: 28,
            //     name: 28
            //   },
            //   {
            //     id: 29,
            //     name: 29
            //   },
            //   {
            //     id: 30,
            //     name: 30
            //   },
            //   {
            //     id: 31,
            //     name: 31
            //   },
            //   {
            //     id: 32,
            //     name: 32
            //   },
            //   {
            //     id: 33,
            //     name: 33
            //   },
            //   {
            //     id: 34,
            //     name: 34
            //   },
            //   {
            //     id: 35,
            //     name: 35
            //   },
            //   {
            //     id: 36,
            //     name: 36
            //   },
            //   {
            //     id: 37,
            //     name: 37
            //   },
            //   {
            //     id: 38,
            //     name: 38
            //   },
            //   {
            //     id: 39,
            //     name: 39
            //   },
            //   {
            //     id: 40,
            //     name: 40
            //   },
            //   {
            //     id: 41,
            //     name: 41
            //   },
            //   {
            //     id: 42,
            //     name: 42
            //   },
            //   {
            //     id: 43,
            //     name: 43
            //   },
            //   {
            //     id: 44,
            //     name: 44
            //   },
            //   {
            //     id: 45,
            //     name: 45
            //   },
            //   {
            //     id: 46,
            //     name: 46
            //   },
            //   {
            //     id: 47,
            //     name: 47
            //   },
            //   {
            //     id: 48,
            //     name: 48
            //   },
            //   {
            //     id: 49,
            //     name: 49
            //   },
            //   {
            //     id: 50,
            //     name: 50
            //   }
            // ]
            let list2 = []
            if (selectedData[i].DimRisk.forcedList) {
              list2 = selectedData[i].DimRisk.forcedList
            } else {
              list2 = []
            }
            for (let i in list2) {
              list2[i].id = Number(i) + 1
              list2[i].datetime = list2[i].datetime.split(' ')[0]
              if (list2[i].forcedLevel == 0 || list2[i].forcedLevel == 1) {
                list2[i].level = '/'
              } else if (list2[i].forcedLevel == 2 || list2[i].forcedLevel == 3) {
                list2[i].level = '轻度'
              } else if (list2[i].forcedLevel == 4 || list2[i].forcedLevel == 5) {
                list2[i].level = '中度'
              } else if (list2[i].forcedLevel == 6) {
                list2[i].level = '重度'
              }
            }
            console.log(list2)
            let list21 = list2.slice(0, 22)
            console.log(list21)
            let list22 = []
            let len21 = Math.ceil((list2.length - 22) / 31);
            for (let j = 0; j < len21; j++) {
              list22.push(list2.slice(22 + 31 * j, 22 + 31 * (Number(j) + 1)));
            }
            console.log(list22)
            // DimRisk
            let suggerDep = ''
            if (selectedData[i].DimRisk.depressionPerct > selectedData[i].Suggestion.depPerct) {
              suggerDep = '系统发现，本班抑郁风险占比<span style="color: #00a5ff;">' + this.perctInfo(selectedData[i].DimRisk.depressionPerct) + '%</span>，预警率高于全国中小学生水平（抑郁' + this.perctInfo(selectedData[i].Suggestion.depPerct) + '%）【注】，老师需多关注本班学生抑郁情况。'
            } else {
              suggerDep = '系统发现，本班抑郁风险占比<span style="color: #00a5ff;">' + this.perctInfo(selectedData[i].DimRisk.depressionPerct) + '%</span>，预警率低于（等于）全国中小学生水平（抑郁' + this.perctInfo(selectedData[i].Suggestion.depPerct) + '%）【注】，建议老师正常开展心理健康教育工作即可。'
            }
            let suggerAnx = ''
            if (selectedData[i].DimRisk.anxietyPerct > selectedData[i].Suggestion.anxietyPerct) {
              suggerAnx = '系统发现，本班焦虑风险占比<span style="color: #00a5ff;">' + this.perctInfo(selectedData[i].DimRisk.anxietyPerct) + '%</span>，预警率高于全国中小学生水平（焦虑' + this.perctInfo(selectedData[i].Suggestion.anxietyPerct) + '%）【注】，老师需多关注本班学生焦虑情况。'
            } else {
              suggerAnx = '系统发现，本班焦虑风险占比<span style="color: #00a5ff;">' + this.perctInfo(selectedData[i].DimRisk.anxietyPerct) + '%</span>，预警率低于（等于）全国中小学生水平（焦虑' + this.perctInfo(selectedData[i].Suggestion.anxietyPerct) + '%）【注】，建议老师正常开展心理健康教育工作即可。'
            }
            let suggerFor = ''
            if (selectedData[i].DimRisk.forcedPerct > selectedData[i].Suggestion.forcedPerct) {
              suggerFor = '系统发现，本班强迫风险占比<span style="color: #00a5ff;">' + this.perctInfo(selectedData[i].DimRisk.forcedPerct) + '%</span>，预警率高于全国中小学生水平（强迫' + this.perctInfo(selectedData[i].Suggestion.forcedPerct) + '%）【注】，老师需多关注本班学生强迫情况。'
            } else {
              suggerFor = '系统发现，本班强迫风险占比<span style="color: #00a5ff;">' + this.perctInfo(selectedData[i].DimRisk.forcedPerct) + '%</span>，预警率低于（等于）全国中小学生水平（强迫' + this.perctInfo(selectedData[i].Suggestion.forcedPerct) + '%）【注】，建议老师正常开展心理健康教育工作即可。'
            }
            let perctList = [
              {
                id: 1,
                name: "抑郁",
                num: selectedData[i].DimRisk.depressionNum,
                perct: selectedData[i].DimRisk.depressionPerct,
                male: selectedData[i].EvaResult.maleDepNum,
                female: selectedData[i].EvaResult.femaleDepNum,
                // perct: 0.12,
                perct1: this.perctInfo(selectedData[i].DimRisk.depressionPerct) + "%",
                list: list01,
                list1: list02,
                info: {
                  severeNum: selectedData[i].DimRisk.depressionInfo.severeNum,
                  severePerct: selectedData[i].DimRisk.depressionInfo.severePerct,
                  severePerct1: this.perctInfo(selectedData[i].DimRisk.depressionInfo.severePerct) + "%",
                  mediumNum: selectedData[i].DimRisk.depressionInfo.mediumNum,
                  mediumPerct: selectedData[i].DimRisk.depressionInfo.mediumPerct,
                  mediumPerct1: this.perctInfo(selectedData[i].DimRisk.depressionInfo.mediumPerct) + "%",
                  lightNum: selectedData[i].DimRisk.depressionInfo.lightNum,
                  lightPerct: selectedData[i].DimRisk.depressionInfo.lightPerct,
                  lightPerct1: this.perctInfo(selectedData[i].DimRisk.depressionInfo.lightPerct) + "%",
                  normalNum: selectedData[i].DimRisk.depressionInfo.normalNum,
                  normalPerct: selectedData[i].DimRisk.depressionInfo.normalPerct,
                  normalPerct1: this.perctInfo(selectedData[i].DimRisk.depressionInfo.normalPerct) + "%"
                },
                sugger: suggerDep
              },
              {
                id: 2,
                name: "焦虑",
                num: selectedData[i].DimRisk.anxietyNum,
                perct: selectedData[i].DimRisk.anxietyPerct,
                male: selectedData[i].EvaResult.maleAnxNum,
                female: selectedData[i].EvaResult.femaleAnxNum,
                // perct: 0,
                perct1: this.perctInfo(selectedData[i].DimRisk.anxietyPerct) + "%",
                list: list11,
                list1: list12,
                info: {
                  severeNum: selectedData[i].DimRisk.anxietyInfo.severeNum,
                  severePerct: selectedData[i].DimRisk.anxietyInfo.severePerct,
                  severePerct1: this.perctInfo(selectedData[i].DimRisk.anxietyInfo.severePerct) + "%",
                  mediumNum: selectedData[i].DimRisk.anxietyInfo.mediumNum,
                  mediumPerct: selectedData[i].DimRisk.anxietyInfo.mediumPerct,
                  mediumPerct1: this.perctInfo(selectedData[i].DimRisk.anxietyInfo.mediumPerct) + "%",
                  lightNum: selectedData[i].DimRisk.anxietyInfo.lightNum,
                  lightPerct: selectedData[i].DimRisk.anxietyInfo.lightPerct,
                  lightPerct1: this.perctInfo(selectedData[i].DimRisk.anxietyInfo.lightPerct) + "%",
                  normalNum: selectedData[i].DimRisk.anxietyInfo.normalNum,
                  normalPerct: selectedData[i].DimRisk.anxietyInfo.normalPerct,
                  normalPerct1: this.perctInfo(selectedData[i].DimRisk.anxietyInfo.normalPerct) + "%"
                },
                sugger: suggerAnx
              },
              {
                id: 3,
                name: "强迫",
                num: selectedData[i].DimRisk.forcedNum,
                perct: selectedData[i].DimRisk.forcedPerct,
                male: selectedData[i].EvaResult.maleForNum,
                female: selectedData[i].EvaResult.femaleForNum,
                // perct: 0.32,
                perct1: this.perctInfo(selectedData[i].DimRisk.forcedPerct) + "%",
                list: list21,
                list1: list22,
                info: {
                  severeNum: selectedData[i].DimRisk.forcedInfo.severeNum,
                  severePerct: selectedData[i].DimRisk.forcedInfo.severePerct,
                  severePerct1: this.perctInfo(selectedData[i].DimRisk.forcedInfo.severePerct) + "%",
                  mediumNum: selectedData[i].DimRisk.forcedInfo.mediumNum,
                  mediumPerct: selectedData[i].DimRisk.forcedInfo.mediumPerct,
                  mediumPerct1: this.perctInfo(selectedData[i].DimRisk.forcedInfo.mediumPerct) + "%",
                  lightNum: selectedData[i].DimRisk.forcedInfo.lightNum,
                  lightPerct: selectedData[i].DimRisk.forcedInfo.lightPerct,
                  lightPerct1: this.perctInfo(selectedData[i].DimRisk.forcedInfo.lightPerct) + "%",
                  normalNum: selectedData[i].DimRisk.forcedInfo.normalNum,
                  normalPerct: selectedData[i].DimRisk.forcedInfo.normalPerct,
                  normalPerct1: this.perctInfo(selectedData[i].DimRisk.forcedInfo.normalPerct) + "%"
                },
                sugger: suggerFor
              }
            ];
            perctList.sort(function(n, m) {
              if (m.perct < n.perct) return -1;
              else if (m.perct > n.perct) return 1;
              else return 0;
            });
            console.log(perctList);
            if (
              perctList[0].perct == 0 &&
              perctList[1].perct == 0 &&
              perctList[2].perct == 0
            ) {
              selectedData[i].DimRisk.perctTxt =
                '本班级学生的沙盘测评中，未检测出 <span style="color: #ED6BB5">' +
                perctList[0].name +
                '</span>、' +
                '<span style="color: #ED6BB5">' +
                perctList[1].name +
                "</span>、" +
                '<span style="color: #ED6BB5">' +
                perctList[2].name +
                "</span>风险的学生, 具体结果如下：";
            } else {
              if (perctList[0].perct == 0) {
                selectedData[i].DimRisk.perctTxt =
                '本班级学生的沙盘测评中，未检测出 <span style="color: #ED6BB5">' +
                perctList[0].name +
                '</span>、' +
                '<span style="color: #ED6BB5">' +
                perctList[1].name +
                "</span>、" +
                '<span style="color: #ED6BB5">' +
                perctList[2].name +
                "</span>风险的学生, 具体结果如下：";
              } else {
                if (perctList[1].perct == 0) {
                  selectedData[i].DimRisk.perctTxt =
                  '本班级学生中，最高频次的心理问题是 <span style="color: #ED6BB5">' +
                  perctList[0].name +
                  '(' +
                  perctList[0].num +
                  '名,' +
                  perctList[0].perct1 +
                  ')</span>,无 <span style="color: #ED6BB5">' +
                  perctList[1].name +
                  '</span>、<span style="color: #ED6BB5">' +
                  perctList[2].name +
                  '</span>风险学生, 具体结果如下：';
                } else {
                  if (perctList[2].perct == 0) {
                    selectedData[i].DimRisk.perctTxt =
                    '本班级学生中，最高频次的心理问题是 <span style="color: #ED6BB5">' +
                    perctList[0].name +
                    '(' +
                    perctList[0].num +
                    '名,' +
                    perctList[0].perct1 +
                    ')</span>,其次是<span style="color: #ED6BB5">' +
                    perctList[1].name +
                    '(' +
                    perctList[1].num +
                    '名,' +
                    perctList[1].perct1 +
                    ')</span>，' +
                    '无<span style="color: #ED6BB5">' +
                    perctList[2].name +
                    '</span>风险学生, 具体结果如下：';
                  } else {
                    selectedData[i].DimRisk.perctTxt =
                    '本班级学生中，最高频次的心理问题是 <span style="color: #ED6BB5">' +
                    perctList[0].name +
                    '(' +
                    perctList[0].num +
                    '名,' +
                    perctList[0].perct1 +
                    ')</span>,其次是<span style="color: #ED6BB5">' +
                    perctList[1].name +
                    '(' +
                    perctList[1].num +
                    '名,' +
                    perctList[1].perct1 +
                    ')</span>，<span style="color: #ED6BB5">' +
                    perctList[2].name +
                    '(' +
                    perctList[2].num +
                    '名,' +
                    perctList[2].perct1 +
                    ')</span>, 具体结果如下：';
                  }
                }
              }
              // if (perctList[1].perct == 0) {
              //   selectedData[i].DimRisk.perctTxt =
              //   '本班级学生中,最高频出现的心理问题是 <span style="color: #ED6BB5">' +
              //     perctList[0].name +
              //     '(' +
              //     perctList[0].num +
              //     '名,' +
              //     perctList[0].perct1 +
              //     ')</span>,' +
              //     '其次是<span style="' +
              //     (perctList[1].perct == 0 ? 'color: #5DC4F5' : 'color: #ED6BB5') +
              //     '">' +
              //     perctList[1].name +
              //     '(' +
              //     perctList[1].num +
              //     '名,' +
              //     perctList[1].perct1 +
              //     ')</span>、' +
              //     '<span style="' +
              //     (perctList[2].perct == 0 ? 'color: #5DC4F5' : 'color: #ED6BB5') +
              //     '">' +
              //     perctList[2].name +
              //     '(' +
              //     perctList[2].num +
              //     '名, ' +
              //     perctList[2].perct1 +
              //     ')</span>, 具体结果如下：';
              // }
            }
            this.systemList = perctList
            // suggestion
            // 本班测评人数占比
            if (selectedData[i].Suggestion.evaPerct > 0.5) {
              selectedData[i].Suggestion.evaPerct1 = '本班测评人数占比<span style="color: #00a5ff;">较高(为' + this.perctInfo(selectedData[i].Suggestion.evaPerct) + '%)</span>，可以看出本班学生心理健康状况得到了老师的重视，请继续保持。'
            } else {
              selectedData[i].Suggestion.evaPerct1 = '本班测评人数占比<span style="color: #00a5ff;">较低(为' + this.perctInfo(selectedData[i].Suggestion.evaPerct) + '%)</span>，老师可多多组织本班学生参加AI心世界测评。'
            }
            // 全国中小学生抑郁报警率
            selectedData[i].Suggestion.depPerct1 = this.perctInfo(selectedData[i].Suggestion.depPerct) + "%";
            // 全国中小学生焦虑报警率
            selectedData[i].Suggestion.anxietyPerct1 = this.perctInfo(selectedData[i].Suggestion.anxietyPerct) + "%";
            // 全国中小学生强迫报警率
            selectedData[i].Suggestion.forcedPerct1 = this.perctInfo(selectedData[i].Suggestion.forcedPerct) + "%";

            this.DimRisk = selectedData[i].DimRisk;
            this.EvaResult = selectedData[i].EvaResult;
            this.Suggestion = selectedData[i].Suggestion;
            // 预警学生
            // if (selectedData[i].RiskList) {
            //   this.RiskList = selectedData[i].RiskList;
            // } else {
            //   this.RiskList = [];
            // }
            // this.rlen0 = selectedData[i].RiskList.length
            // console.log(this.rlen0)
            // this.rlen1 = selectedData[i].UnconfidenceList.length
            // console.log(this.rlen1)
            let risk1 = []
            if (selectedData[i].RiskList) {
              risk1 = selectedData[i].RiskList
              // risk1 = [
              //   {
              //     id: 1,
              //     name: 1
              //   },
              //   {
              //     id: 2,
              //     name: 2
              //   },
              //   {
              //     id: 3,
              //     name: 3
              //   },
              //   {
              //     id: 4,
              //     name: 4
              //   },
              //   {
              //     id: 5,
              //     name: 5
              //   },
              //   {
              //     id: 6,
              //     name: 6
              //   },
              //   {
              //     id: 7,
              //     name: 7
              //   },
              //   {
              //     id: 8,
              //     name: 8
              //   },
              //   {
              //     id: 9,
              //     name: 9
              //   },
              //   {
              //     id: 10,
              //     name: 10
              //   },
              //   {
              //     id: 11,
              //     name: 11
              //   },
              //   {
              //     id: 12,
              //     name: 12
              //   },
              //   {
              //     id: 13,
              //     name: 13
              //   },
              //   {
              //     id: 14,
              //     name: 14
              //   }
              //   ,
              //   {
              //     id: 15,
              //     name: 15
              //   },
              //   {
              //     id: 16,
              //     name: 16
              //   },
              //   {
              //     id: 17,
              //     name: 17
              //   },
              //   {
              //     id: 18,
              //     name: 18
              //   },
              //   {
              //     id: 19,
              //     name: 19
              //   },
              //   {
              //     id: 20,
              //     name: 20
              //   },
              //   {
              //     id: 21,
              //     name: 21
              //   },
              //   {
              //     id: 22,
              //     name: 22
              //   }
              //   ,
              //   {
              //     id: 23,
              //     name: 23
              //   },
              //   {
              //     id: 24,
              //     name: 24
              //   },
              //   {
              //     id: 25,
              //     name: 25
              //   },
              //   {
              //     id: 26,
              //     name: 26
              //   },
              //   {
              //     id: 27,
              //     name: 27
              //   },
              //   {
              //     id: 28,
              //     name: 28
              //   },
              //   {
              //     id: 29,
              //     name: 29
              //   },
              //   {
              //     id: 30,
              //     name: 30
              //   },
              //   {
              //     id: 31,
              //     name: 31
              //   },
              //   {
              //     id: 32,
              //     name: 32
              //   },
              //   {
              //     id: 33,
              //     name: 33
              //   },
              //   {
              //     id: 34,
              //     name: 34
              //   },
              //   {
              //     id: 35,
              //     name: 35
              //   },
              //   {
              //     id: 36,
              //     name: 36
              //   },
              //   {
              //     id: 37,
              //     name: 37
              //   },
              //   {
              //     id: 38,
              //     name: 38
              //   },
              //   {
              //     id: 39,
              //     name: 39
              //   },
              //   {
              //     id: 40,
              //     name: 40
              //   },
              //   {
              //     id: 41,
              //     name: 41
              //   },
              //   {
              //     id: 42,
              //     name: 42
              //   },
              //   {
              //     id: 43,
              //     name: 43
              //   },
              //   {
              //     id: 44,
              //     name: 44
              //   },
              //   {
              //     id: 45,
              //     name: 45
              //   },
              //   {
              //     id: 46,
              //     name: 46
              //   },
              //   {
              //     id: 47,
              //     name: 47
              //   },
              //   {
              //     id: 48,
              //     name: 48
              //   },
              //   {
              //     id: 49,
              //     name: 49
              //   },
              //   {
              //     id: 50,
              //     name: 50
              //   },
              //   {
              //     id: 146,
              //     name: 46
              //   },
              //   {
              //     id: 147,
              //     name: 47
              //   },
              //   {
              //     id: 148,
              //     name: 48
              //   },
              //   {
              //     id: 149,
              //     name: 49
              //   },
              //   {
              //     id: 150,
              //     name: 50
              //   },
              //   {
              //     id: 1501,
              //     name: 50
              //   },
              //   {
              //     id: 1502,
              //     name: 50
              //   },
              //   {
              //     id: 1503,
              //     name: 50
              //   },
              //   {
              //     id: 1504,
              //     name: 50
              //   },
              //   {
              //     id: 1505,
              //     name: 50
              //   },
              //   {
              //     id: 1506,
              //     name: 50
              //   },
              //   {
              //     id: 1507,
              //     name: 50
              //   },
              //   {
              //     id: 1508,
              //     name: 50
              //   },
              //   {
              //     id: 1509,
              //     name: 50
              //   },
              //   {
              //     id: 15010,
              //     name: 50
              //   },
              //   {
              //     id: 15011,
              //     name: 50
              //   }
              // ]
            } else {
              risk1 = []
            }
            console.log(risk1)
            for (let i in risk1) {
              let riskLevel1 = []
              risk1[i].id = Number(i) + 1
              risk1[i].datetime = risk1[i].datetime.split(' ')[0]
              if (risk1[i].depressionLevel == 2 || risk1[i].depressionLevel == 3) {
                riskLevel1.push(
                  {
                    txt: '<span style="color:#6774f6">轻度抑郁</span>',
                    level: risk1[i].depressionLevel
                  }
                )
              } else if (risk1[i].depressionLevel == 4 || risk1[i].depressionLevel == 5) {
                riskLevel1.push(
                  {
                    txt: '<span style="color:#ca7cf8">中度抑郁</span>',
                    level: risk1[i].depressionLevel
                  }
                )
              } else if (risk1[i].depressionLevel == 6) {
                riskLevel1.push(
                  {
                    txt: '<span style="color:#ed6bb5">重度抑郁</span>',
                    level: risk1[i].depressionLevel
                  }
                )
              }
              if (risk1[i].anxietyLevel == 2 || risk1[i].anxietyLevel == 3) {
                riskLevel1.push(
                  {
                    txt: '<span style="color:#6774f6">轻度焦虑</span>',
                    level: risk1[i].anxietyLevel
                  }
                )
              } else if (risk1[i].anxietyLevel == 4 || risk1[i].anxietyLevel == 5) {
                riskLevel1.push(
                  {
                    txt: '<span style="color:#ca7cf8">中度焦虑</span>',
                    level: risk1[i].anxietyLevel
                  }
                )
              } else if (risk1[i].anxietyLevel == 6) {
                riskLevel1.push(
                  {
                    txt: '<span style="color:#ed6bb5">重度焦虑</span>',
                    level: risk1[i].anxietyLevel
                  }
                )
              }
              if (risk1[i].forcedLevel == 2 || risk1[i].forcedLevel == 3) {
                riskLevel1.push(
                  {
                    txt: '<span style="color:#6774f6">轻度强迫</span>',
                    level: risk1[i].forcedLevel
                  }
                )
              } else if (risk1[i].forcedLevel == 4 || risk1[i].forcedLevel == 5) {
                riskLevel1.push(
                  {
                    txt: '<span style="color:#ca7cf8">中度强迫</span>',
                    level: risk1[i].forcedLevel
                  }
                )
              } else if (risk1[i].forcedLevel == 6) {
                riskLevel1.push(
                  {
                    txt: '<span style="color:#ed6bb5">重度强迫</span>',
                    level: risk1[i].forcedLevel
                  }
                )
              }
              riskLevel1 = riskLevel1.sort(function(n, m) {
                if (m.level < n.level) return -1;
                else if (m.level > n.level) return 1;
                else return 0;
              });
              let riskStr1 = []
              for (let i in riskLevel1) {
                riskStr1.push(riskLevel1[i].txt)
              }

              risk1[i].level1 = riskStr1.join("、")
            }
            console.log(risk1)

            let risk2 = []
            if (selectedData[i].UnconfidenceList) {
              risk2 = selectedData[i].UnconfidenceList
            } else {
              risk2 = []
            }
            console.log(risk2)
            for (let i in risk2) {
              let riskLevel2 = []
              risk2[i].id = Number(i) + 1
              risk2[i].datetime = risk2[i].datetime.split(' ')[0]
              if (risk2[i].Warning == 0) {
                riskLevel2.push(
                  {
                    txt: '<span>/</span>',
                    level: risk2[i].depressionLevel
                  }
                )
              }
              if (risk2[i].depressionLevel == 2 || risk2[i].depressionLevel == 3) {
                riskLevel2.push(
                  {
                    txt: '<span style="color:#6774f6">轻度抑郁</span>',
                    level: risk2[i].depressionLevel
                  }
                )
              } else if (risk2[i].depressionLevel == 4 || risk2[i].depressionLevel == 5) {
                riskLevel2.push(
                  {
                    txt: '<span style="color:#ca7cf8">中度抑郁</span>',
                    level: risk2[i].depressionLevel
                  }
                )
              } else if (risk2[i].depressionLevel == 6) {
                riskLevel2.push(
                  {
                    txt: '<span style="color:#ed6bb5">重度抑郁</span>',
                    level: risk2[i].depressionLevel
                  }
                )
              }
              if (risk2[i].anxietyLevel == 2 || risk2[i].anxietyLevel == 3) {
                riskLevel2.push(
                  {
                    txt: '<span style="color:#6774f6">轻度焦虑</span>',
                    level: risk2[i].anxietyLevel
                  }
                )
              } else if (risk2[i].anxietyLevel == 4 || risk2[i].anxietyLevel == 5) {
                riskLevel2.push(
                  {
                    txt: '<span style="color:#ca7cf8">中度焦虑</span>',
                    level: risk2[i].anxietyLevel
                  }
                )
              } else if (risk2[i].anxietyLevel == 6) {
                riskLevel2.push(
                  {
                    txt: '<span style="color:#ed6bb5">重度焦虑</span>',
                    level: risk2[i].anxietyLevel
                  }
                )
              }
              if (risk2[i].forcedLevel == 2 || risk2[i].forcedLevel == 3) {
                riskLevel2.push(
                  {
                    txt: '<span style="color:#6774f6">轻度强迫</span>',
                    level: risk2[i].forcedLevel
                  }
                )
              } else if (risk2[i].forcedLevel == 4 || risk2[i].forcedLevel == 5) {
                riskLevel2.push(
                  {
                    txt: '<span style="color:#ca7cf8">中度强迫</span>',
                    level: risk2[i].forcedLevel
                  }
                )
              } else if (risk2[i].forcedLevel == 6) {
                riskLevel2.push(
                  {
                    txt: '<span style="color:#ed6bb5">重度强迫</span>',
                    level: risk2[i].forcedLevel
                  }
                )
              }
              riskLevel2 = riskLevel2.sort(function(n, m) {
                if (m.level < n.level) return -1;
                else if (m.level > n.level) return 1;
                else return 0;
              });
              let riskStr2 = []
              for (let i in riskLevel2) {
                riskStr2.push(riskLevel2[i].txt)
              }

              risk2[i].level2 = riskStr2.join("、")
            }
            console.log(risk2)
            this.rlen0 = risk1.length
            console.log(this.rlen0)
            this.rlen1 = risk2.length
            console.log(this.rlen1)
            let risk11 = []
            let risk12 = []
            if (this.rlen0 < 22) {
              risk11 = risk1.slice(0, 21)
            } else {
              risk11 = risk1.slice(0, 27)
              let rlen12 = Math.ceil((risk1.length - 27) / 34);
              for (let j = 0; j < rlen12; j++) {
                risk12.push(risk1.slice(27 + 34 * j, 27 + 34 * (Number(j) + 1)));
              }
            }
            console.log(risk11)
            console.log(risk12)
            this.RiskList = risk11
            this.RiskList1 = risk12
            let risk21 = []
            let risk22 = []
            // let risk21 = risk2.slice(0, 21)
            if (this.rlen0 < 22) {
              risk21 = risk2.slice(0, 22 - this.rlen0)
              let rlen22 = Math.ceil((risk2.length - (22 - this.rlen0)) / 34);
              for (let j = 0; j < rlen22; j++) {
                risk22.push(risk2.slice((22 - this.rlen0) + 34 * j, (22 - this.rlen0) + 34 * (Number(j) + 1)));
              }
            } else {
              risk21 = risk2.slice(0, 31)
              let rlen22 = Math.ceil((risk2.length - 31) / 34);
              for (let j = 0; j < rlen22; j++) {
                risk22.push(risk2.slice(31 + 34 * j, 31 + 34 * (Number(j) + 1)));
              }
            }
            console.log(risk21)
            console.log(risk22)
            this.UnconfidenceList = risk21
            this.UnconfidenceList1 = risk22

            // if (selectedData[i].UnconfidenceList) {
            //   this.UnconfidenceList = selectedData[i].UnconfidenceList;
            // } else {
            //   this.UnconfidenceList = [];
            // }
            this.className = selectedData[i].className;
            this.schoolName = selectedData[i].schoolName;
            this.time = selectedData[i].time;
            console.log(selectedData[i]);
            this.initEchart();
            // 等待每一个转为pdf
            console.log(htmlToZip)
            const p = await htmlToZip.getPdfs(
              this.$refs.sprintGroupPdf,
              selectedData[i].schoolName + '-' + selectedData[i].className
            );
            promises.push(p);
          }
        }
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
            if (pdfs.length > 1) {
              await zip.generateAsync({ type: "blob" }).then(content => {
                let nameZip =
                  "团体报告 - " +
                  "共" +
                  selectedData.length +
                  "个班（其中 " +
                  this.infoClass.join('、') +
                  "无报告数据） - " +
                  this.formTimes(new Date());
                FileSaver.saveAs(content, nameZip + ".zip");
              });
              setTimeout(() => {
                this.loading.close();
              }, 2000);
            }
            // this.loading.setText('正在请求数据')
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
    initEchart() {
      this.myChart00 = echarts.init(this.$refs.myChart00);
      this.myChart00.setOption({
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
            data: [this.systemList[0].name, this.systemList[1].name, this.systemList[2].name],
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
            name: "男生",
            type: "bar",
            barWidth: "30",
            animation: false,
            stack: 'Ad',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#B9C3FA"
                  },
                  {
                    offset: 1,
                    color: "#6D89F7"
                  }
                ])
              }
            },
            data: [this.systemList[0].male, this.systemList[1].male, this.systemList[2].male]
          },
          {
            name: "女生",
            type: "bar",
            barWidth: "30",
            animation: false,
            stack: 'Ad',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#FFC5F0"
                  },
                  {
                    offset: 1,
                    color: "#FF77C3"
                  }
                ])
              }
            },
            data: [this.systemList[0].female, this.systemList[1].female, this.systemList[2].female]
          }
        ]
      });
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
                formatter: "{a}\n" + "20" + "单",
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
                value: this.EvaResult.riskPerct2,
                name: "无风险",
                itemStyle: {
                  normal: transColor[1]
                }
              },
              {
                value: this.EvaResult.riskPerct1,
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
                formatter: "{a}\n" + "20" + "单",
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
                value: this.EvaResult.unriskMalePerct1,
                name: "无风险",
                itemStyle: {
                  normal: transColor[1]
                }
              },
              {
                value: this.EvaResult.riskMalePerct1,
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
                formatter: "{a}\n" + "20" + "单",
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
                value: this.EvaResult.unriskFemalePerct1,
                name: "无风险",
                itemStyle: {
                  normal: transColor[1]
                }
              },
              {
                value: this.EvaResult.riskFemalePerct1,
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
.table-class {
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
  left: 0;
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
      margin-bottom: 44px;
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
          // background: linear-gradient(180deg, #babfff, #7279ff);
        }
        .bt_tips {
          width: 8px;
          height: 8px;
          margin-top: 11px;
        }
        .gp2lb_txt {
          line-height: 30px;
          margin-left: 15px;
          font-size: 20px;
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
  }
  .gp2_main1 {
    margin: 65px auto;
    height: 1554px;
  }
  .gp2_main2{
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
  .gp3_top1{
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
          div:nth-child(4) {
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
    box-shadow: none;
    background: transparent;
    label {
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #6774f6;
    }
  }
}
.gp2lb_chart {
  display: flex;
  justify-content: space-around;
  padding: 0 80px 0;
}
.myChartBox {
  position: relative;
  margin: 20px auto 40px;
  .myChartTips {
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
  .myChartLab {
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
.myChart {
  display: flex;
  justify-content: center;
  width: 202px;
  height: 202px;
  margin: 0 auto 2px;
}
.myChart00 {
  display: flex;
  justify-content: center;
  width: 750px;
  height: 300px;
  margin: -40px auto 0;
}
.myChartLab1 {
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
      background: linear-gradient(2deg, #B9C3FA, #6D89F7);
      border-radius: 50%;
      margin-right: 8px;
    }
  }
  .mcl_span1 {
    span {
      background: linear-gradient(2deg, #FFC5F0, #FF77C3);
    }
  }
}
</style>
