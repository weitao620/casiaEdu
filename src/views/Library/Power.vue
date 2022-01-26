<template>
  <div class="power_wrap">
    <div class="com_title">
      <div class="c_titles">
        <div class="com_cir">
          <img src="../../assets/images/index_top.png" alt="" />
        </div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>基础设置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/library/role' }"
            >角色管理</el-breadcrumb-item
          >
          <el-breadcrumb-item>权限设置</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="search_form_box">
      <div class="search_title center_o_title">
        查询
      </div>
      <div class="power_tabs">
        <div class="p_tab_box">
          <div
            :class="['p_tab_btn', powerActive == 1 ? 'p_tab_act' : '']"
            @click="powerTab(1)"
          >
            功能权限
          </div>
          <div
            :class="['p_tab_btn', powerActive == 2 ? 'p_tab_act' : '']"
            @click="powerTab(2)"
          >
            班级权限
          </div>
        </div>
      </div>
      <div class="power_main" v-if="powerActive == 1">
        <div class="p_main_tip">
          <div class="p_main_bor">
            <div class="pm_btips">?</div>
            <span
              >说明：当取消菜单权限时，菜单内的所有功能模块与功能权限将被设置为“未选中”。而当勾选某一功能模块或功能权限时，则该菜单权限同时向该角色开放。</span
            >
          </div>
        </div>
        <div class="p_main_list">
          <ul class="pm_list_head">
            <li>菜单权限</li>
            <li class="mlr_10">功能模块</li>
            <li>功能权限</li>
          </ul>
          <el-checkbox-group v-model="checkList" @change="powerChange">
            <ul
              :class="[
                'pm_list_body',
                { style2: !(index == 0 || index == menuAuth.length - 1) }
              ]"
              v-for="(item, index) in menuAuth"
              :key="item.Pid"
            >
              <li class="list_one_li">
                <el-checkbox
                  class="list_one"
                  :pid="item.Pid"
                  v-model="item.Mark"
                  :label="item.Pid"
                  >{{ item.Name }}</el-checkbox
                >
                <div class="list_one_box">
                  <div
                    class="list_two_box"
                    v-for="item1 in item.list"
                    :key="item1.Pid"
                    :label="item1.Pid"
                  >
                  <!-- :disabled="item1.Name ==''" -->
                    <div v-if="item1.Pid == 30100" class="list_two" :pid="item1.Pid" :label="item1.Pid">{{
                      item1.Name
                    }}</div>
                    <el-checkbox class="list_two" v-else :pid="item1.Pid" :label="item1.Pid">{{
                      item1.Name
                    }}</el-checkbox>
                    
                    <div class="list_two_li">
                      <div
                        class="list_thr_box"
                        v-for="item2 in item1.list"
                        :key="item2.Pid"
                        :label="item2.Pid"
                      >
                        <el-checkbox class="list_thr" :pid="item2.Pid" :label="item2.Pid">{{
                          item2.Name
                        }}</el-checkbox>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </el-checkbox-group>
          <div class="pm_btns">
            <el-button v-if="this.powerDetail.roleID != 'superAdministrator'" type="primary" @click="onSubmit">保存</el-button>
            <el-button v-else type="primary" style="background:#aaa" @click="onSubmit1">保存</el-button>
            <el-button type="primary" class="resets" @click="goBack"
              >取消</el-button
            >
          </div>
        </div>
      </div>
      <div class="power_main" v-if="powerActive == 2">
        <div class="pm_select">
          <span style="margin-right:0.1rem">班级类型:</span>
          <el-select v-model="classType" placeholder="全部">
            <el-option
              v-for="item in schoolAuth"
              :key="item.Pid"
              :label="item.Name"
              :value="item.Pid"
            ></el-option>
          </el-select>
        </div>
        <div class="p_class_list">
          <el-checkbox-group v-model="classList" @change="powerChange1">
            <div v-for="item in schoolAuth" :key="item.Pid">
              <div v-show="item.Pid == classType">
                <div v-for="item1 in item.list" :key="item1.Pid">
                  <div class="p_c_top">
                    学段：<el-checkbox :label="item1.Pid">{{item1.Name}}</el-checkbox>
                  </div>
                  <div class="pc_list">
                    <div v-for="item2 in item1.list" :key="item2.Pid">
                      <div class="pc_head">
                        <img src="../../assets/images/deskmate.png" alt="" /> {{item2.Name}} <el-checkbox :label="item2.Pid">{{item2.sb}}</el-checkbox>
                      </div>
                      <ul class="pc_body" v-if="item2.list">
                        <li v-for="item3 in item2.list" :key="item3.Pid">
                          <el-checkbox :label="item3.Pid">{{item3.Name}}</el-checkbox>
                        </li>
                      </ul>
                      <ul class="pc_body pc_body1" v-else>
                        <li >
                          本年级尚无班级信息
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-checkbox-group>
          <div class="pm_btns"><el-button v-if="this.powerDetail.roleID != 'superAdministrator'" type="primary" @click="onSubmit">保存</el-button>
            <el-button v-else type="primary" style="background:#aaa" @click="onSubmit1">保存</el-button>
            <el-button type="primary" class="resets" @click="goBack"
              >取消</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Url from "@/assets/js/url.js";
let justList = [];
let onlyList = [];
export default {
  name: "",
  data() {
    return {
      radios: "1",
      classType: 10000,
      powerActive: 1,
      checkList: [],
      classList: [],

      powerDetail: {},
      menuAuth: [],
      schoolAuth: []
    };
  },
  created() {
    // aaa
  },
  mounted() {
    // aaa
    let that = this;
    this.powerDetail = JSON.parse(localStorage.getItem("powerDetail"));
    this.getList();
  },
  beforeDestroy() {
    // localStorage.removeItem('powerDetailNew')
    // localStorage.removeItem('powerDetail')
  },
  methods: {
    getList() {
      let that = this;
      that.$http
        .get(Url + "/aimw/role/listAuthInfo", {
          params: {
            roleID: this.powerDetail.roleID
          }
        })
        .then(res => {
          console.log(res);
          var data = res.data;
          if (data.code == 0) {
            console.log(data.data.split('Pid":0'))
            data.data = data.data.split('Pid":0')[0] + 'Pid":30100' + data.data.split('Pid":0')[1]
            localStorage.setItem("powerDetailNew", data.data)
            console.log(data.data)
            let detail = JSON.parse(data.data)
            this.menuAuth = detail.menuAuth.function;
            this.schoolAuth = detail.schoolAuth.schoolOrg;
            console.log(this.menuAuth);
            for (let i in that.menuAuth) {
              if (that.menuAuth[i].Mark == 1) {
                that.checkList.push(that.menuAuth[i].Pid);
                let check1 = that.menuAuth[i].list;
                for (let j in check1) {
                  console.log(check1[j])
                  if (check1[j].Mark == 1) {
                    that.checkList.push(check1[j].Pid);
                    let check2 = check1[j].list;
                    for (let k in check2) {
                      if (check2[k].Mark == 1) {
                        that.checkList.push(check2[k].Pid);
                      }
                    }
                  }
                }
              }
            }
            justList = that.checkList;
            console.log(that.checkList);
            for (let i in that.schoolAuth) {
              if (that.schoolAuth[i].Mark == 1) {
                that.classList.push(that.schoolAuth[i].Pid);
                let check1 = that.schoolAuth[i].list;
                for (let j in check1) {
                  if (check1[j].Mark == 1) {
                    that.classList.push(check1[j].Pid);
                    let check2 = check1[j].list;
                    for (let k in check2) {
                      if (check2[k].Mark == 1) {
                        that.classList.push(check2[k].Pid);
                        let check3 = check2[k].list;
                        for (let o in check3) {
                          if (check3[o].Mark == 1) {
                            that.classList.push(check3[o].Pid);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            onlyList = that.classList;
            console.log(that.classList);
            console.log(that.schoolAuth);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    powerTab(value) {
      this.powerActive = value;
    },
    powerChange(value) {
      let that = this;
      let power = [];
      let list = JSON.parse(localStorage.getItem("powerDetailNew")).menuAuth.function;
      let org = justList;
      console.log(org)
      console.log(value)
      if (org.length > value.length) {
        setTimeout(() => {
          justList = power;
          let check = that.checkList;
          for (let k in check) {
            for (let i in list) {
              if (list[i].Pid === check[k]) {
                list[i].Marks = 1;
              }
              let lv1 = list[i].list;
              for (let j in lv1) {
                if (lv1[j].Pid === check[k]) {
                  lv1[j].Marks = 1;
                }
                let lv2 = lv1[j].list;
                for (let o in lv2) {
                  if (lv2[o].Pid === check[k]) {
                    lv2[o].Marks = 1;
                  }
                }
              }
            }
          }
          var checkNew = [];
          for (let i in list) {
            if (list[i].Marks == 1) {
              checkNew.push(list[i].Pid);
              let check1 = list[i].list;
              for (let j in check1) {
                if (check1[j].Marks == 1) {
                  checkNew.push(check1[j].Pid);
                  let check2 = check1[j].list;
                  for (let k in check2) {
                    if (check2[k].Marks == 1) {
                      checkNew.push(check2[k].Pid);
                    }
                  }
                }
                if (!check1[j].Marks) {
                  let check2 = check1[j].list;
                  for (let k in check2) {
                    that.$delete(check2[k], "Marks");
                  }
                }
              }
            }
            if (!list[i].Marks) {
              let check1 = list[i].list;
              for (let j in check1) {
                if (check1[j].Marks) {
                  that.$delete(check1[j], "Marks");
                }
                if (!check1[j].Marks) {
                  let check2 = check1[j].list;
                  for (let k in check2) {
                    if (check2[k].Marks) {
                      that.$delete(check2[k], "Marks");
                    }
                  }
                }
              }
            }
          }
          that.checkList = checkNew;
          console.log(that.checkList)
        }, 100);
      } else {
        for (let i in value) {
          console.log(value[i])
          if (value[i] % 10000 != 0) {
            power.push(Number(String(value[i]).substr(0, 1) + "0000"));
            if (value[i] % 100 != 0) {
              power.push(Number(String(value[i]).substr(0, 3) + "00"));
            }
          }
          power.push(value[i]);
        }
        that.checkList = Array.from(new Set(power)).sort(function(a, b) {
          return a - b;
        });
        power = Array.from(new Set(power)).sort(function(a, b) {
          return a - b;
        });
        console.log(that.checkList)
        setTimeout(() => {
          justList = power;
          let check = that.checkList;
          for (let k in check) {
            for (let i in list) {
              if (list[i].Pid === check[k]) {
                list[i].Marks = 1;
              }
              let lv1 = list[i].list;
              for (let j in lv1) {
                if (lv1[j].Pid === check[k]) {
                  lv1[j].Marks = 1;
                }
                let lv2 = lv1[j].list;
                for (let o in lv2) {
                  if (lv2[o].Pid === check[k]) {
                    lv2[o].Marks = 1;
                  }
                }
              }
            }
          }
        }, 100);
      }
    },
    powerChange1(value) {
      console.log(value);

      let that = this;
      let power = [];
      let list = JSON.parse(localStorage.getItem("powerDetailNew")).schoolAuth.schoolOrg;
      let org = onlyList;
      console.log("改变值:" + value)
      console.log("改变值:" + this.classList)
      console.log("原始值:" + org)

      if (org.length > value.length) {
        console.log('减少了')
        setTimeout(() => {
          onlyList = power;
          let check = that.classList;
          for (let k in check) {
            for (let i in list) {
              if (list[i].Pid === check[k]) {
                list[i].Marks = 1;
              }
              let lv1 = list[i].list;
              for (let j in lv1) {
                if (lv1[j].Pid === check[k]) {
                  lv1[j].Marks = 1;
                }
                let lv2 = lv1[j].list;
                for (let o in lv2) {
                  if (lv2[o].Pid === check[k]) {
                    lv2[o].Marks = 1;
                  }
                  let lv3 = lv2[o].list;
                  for (let n in lv3) {
                    if (lv3[n].Pid === check[k]) {
                      lv3[n].Marks = 1;
                    }
                  }
                }
              }
            }
          }
          console.log(list)
          var checkNew = [];
          for (let i in list) { // 10000
            if (list[i].Marks == 1) {
              checkNew.push(list[i].Pid);
              let check1 = list[i].list;
              for (let j in check1) { // 11000
                if (check1[j].Marks == 1) {
                  checkNew.push(check1[j].Pid);
                  let check2 = check1[j].list;
                  for (let k in check2) { // 11100
                    if (check2[k].Marks == 1) {
                      checkNew.push(check2[k].Pid);
                      let check3 = check2[k].list;
                      for (let n in check3) { // 11100
                        if (check3[n].Marks == 1) {
                          checkNew.push(check3[n].Pid);
                        }
                      }
                    }
                  }
                }
                if (!check1[j].Marks) {
                  let check2 = check1[j].list;
                  for (let k in check2) {
                    if (check2[k].Marks) {
                      that.$delete(check2[k], "Marks");
                    }
                    if (!check2[k].Marks) {
                      let check3 = check2[k].list;
                      for (let o in check3) {
                        if (check3[o].Marks) {
                          that.$delete(check3[o], "Marks");
                        }
                      }
                    }
                  }
                }
              }
            }
            if (!list[i].Marks) {
              let check1 = list[i].list;
              for (let j in check1) {
                if (check1[j].Marks) {
                  that.$delete(check1[j], "Marks");
                }
                if (!check1[j].Marks) {
                  let check2 = check1[j].list;
                  for (let k in check2) {
                    if (check2[k].Marks) {
                      that.$delete(check2[k], "Marks");
                    }
                    if (!check2[k].Marks) {
                      let check3 = check2[k].list;
                      for (let o in check3) {
                        if (check3[o].Marks) {
                          that.$delete(check3[o], "Marks");
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          that.classList = checkNew;
          console.log(that.classList)
        }, 100);
      } else {
        console.log('增加了')
        for (let i in value) {
          if (value[i] % 10000 != 0) {
            power.push(Number(String(value[i]).substr(0, 1) + "0000"));
            if (value[i] % 1000 != 0) {
              power.push(Number(String(value[i]).substr(0, 2) + "000"));
              if (value[i] % 100 != 0) {
                power.push(Number(String(value[i]).substr(0, 3) + "00"));
              }
            }
          }
          power.push(value[i]);
        }
        that.classList = Array.from(new Set(power)).sort(function(a, b) {
          return a - b;
        });
        power = Array.from(new Set(power)).sort(function(a, b) {
          return a - b;
        });
        console.log(that.classList)
        setTimeout(() => {
          onlyList = power;
          let check = that.classList;
          for (let k in check) {
            for (let i in list) {
              if (list[i].Pid === check[k]) {
                list[i].Marks = 1;
              }
              let lv1 = list[i].list;
              for (let j in lv1) {
                if (lv1[j].Pid === check[k]) {
                  lv1[j].Marks = 1;
                }
                let lv2 = lv1[j].list;
                for (let o in lv2) {
                  if (lv2[o].Pid === check[k]) {
                    lv2[o].Marks = 1;
                  }
                }
              }
            }
          }
        }, 100);
      }
    },
    onSubmit1() {
      this.$message.warning(this.powerDetail.roleName + "不允许进行修改！");
    },
    onSubmit() {
      let that = this;
      for (let i in that.checkList) {
        if (that.checkList[i] == 30100) {
          that.checkList.splice(i, 1);
        }
      }
      console.log(that.checkList)
      let powerIds = {
        menuAuthID: that.checkList,
        schoolAuthID: that.classList
      }
      var role = {
        roleID: that.powerDetail.roleID,
        roleAuthID: JSON.stringify(powerIds)
      };
      console.log(role)
      let param = role;
      that.$http
        .put(Url + "/aimw/role/updateAuthInfo", param)
        .then(res => {
          var data = res.data;
          if (data.code == 0) {
            console.log(data);
            this.getList();
            this.$message({
              type: "success",
              message: "权限修改成功!"
            });
          } else {
            this.$message.error(data.msg);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
    goBack() {
      this.$router.push({
        path: "/library/role"
      });
    }
  }
};
</script>

<style lang="less">
.power_wrap {
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
    margin-bottom: 0.22rem;
  }
  .power_tabs {
    margin: 0.14rem 0 0.23rem;
    .p_tab_box {
      width: 2.74rem;
      display: flex;
      align-items: center;
      justify-content: center;
      // padding: 0 0.28rem;
      border-bottom: 0.03rem solid rgba(225, 233, 255, 0.74);
      // background: #f00;
      .p_tab_btn {
        margin-bottom: -0.03rem;
        width: 1rem;
        line-height: 0.35rem;
        text-align: center;
        // background: linear-gradient(-5deg, #059DFF, #00C0FF);
        font-size: 0.18rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #6c85af;
        border-bottom: 0.03rem solid;
        border-image: linear-gradient(-5deg, transparent, transparent) 10 10;
      }
      .p_tab_btn:last-child {
        margin-left: 0.18rem;
      }
      .p_tab_act {
        color: #006cff;
        border-bottom: 0.03rem solid;
        border-image: linear-gradient(-5deg, #059dff, #00c0ff) 10 10;
      }
    }
  }
  .power_main {
    .p_main_tip {
      height: 0.52rem;
      padding: 1px;
      background: linear-gradient(185deg, #00eafe, #00b6f0);
      box-shadow: 0px 3px 12px 0px rgba(155, 183, 161, 0.1);
      border-radius: 0.02rem;
      overflow: hidden;
      .p_main_bor {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #effeff;
        border-radius: 0.02rem;
        .pm_btips {
          width: 0.18rem;
          height: 0.18rem;
          border-radius: 50%;
          background: linear-gradient(-90deg, #00eafe, #00b6f0);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.15rem;
          color: #ffffff;
          font-weight: 800;
          margin-right: 0.06rem;
          margin-left: 0.22rem;
        }
        img {
          width: 0.18rem;
          height: 0.18rem;
          margin-right: 0.06rem;
          margin-left: 0.22rem;
        }
        span {
          font-size: 0.16rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #354b70;
        }
      }
    }
    .p_main_list {
      margin: 0.27rem 0 0.25rem;
      .pm_btns {
        margin-top: 0.32rem;
        display: flex;
        justify-content: center;
        .el-button {
          border: 0.01rem solid #dcdfe6;
          padding: 0.09rem 0.27rem;
          font-size: 0.16rem;
          border-radius: 4px;
          background: linear-gradient(263deg, #00c2ff, #0075ff);
          box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
        }
        .el-button.resets {
          margin-left: 0.78rem;
          background: linear-gradient(261deg, #b8d5f5, #8fb1d7);
          box-shadow: 0px 2px 10px 0px rgba(171, 196, 227, 0.45);
        }
      }
      ul.pm_list_head {
        display: flex;
        justify-content: space-between;
        li {
          flex: 1;
          border: 0.01rem dashed #00c2ff;
          text-align: center;
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #006cff;
          background: linear-gradient(
            180deg,
            rgba(0, 117, 255, 0.05) 0%,
            rgba(0, 194, 255, 0.05) 100%
          );
          border-radius: 0.02rem;
          line-height: 0.5rem;
        }
        li.mlr_10 {
          margin: 0 0.1rem;
        }
      }
      ul.pm_list_body {
        display: flex;
        justify-content: space-between;
        margin-top: 0.1rem;

        li {
          flex: 1;
          border: 0.01rem dashed #00c2ff;
          text-align: center;
          font-size: 0.16rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #354b70;
          background: linear-gradient(
            180deg,
            rgba(0, 117, 255, 0.05) 0%,
            rgba(0, 194, 255, 0.05) 100%
          );
          border-radius: 0.02rem;
          line-height: 0.32rem;
          padding: 0.12rem 0;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          .el-checkbox {
            width: 100%;
            margin: 0;
            margin-left: 0.1rem;
            .el-checkbox__label {
              text-align: left;
              min-width: 1.2rem;
              font-size: 0.16rem !important;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #354b70;
            }
          }
          .pm_h20 {
            height: 0.2rem;
          }
        }
        li.mlr_10 {
          margin: 0 0.1rem;
        }
        .list_one_li {
          flex-wrap: nowrap;
          .el-checkbox__input {
            margin-left: 0.5rem;
          }
          .list_one {
            flex: 1;
            margin: 0;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .list_one_box {
            flex: 2;
            margin-left: 0.1rem;
            .list_two_box {
              display: flex;
              align-items: center;
              margin-bottom: 0.2rem;
              .list_two {
                flex: 1;
                margin: 0;
                margin-right: 0.1rem;
              }
              .list_two_li {
                flex: 1;
                .list_thr {
                  min-width: 1.2rem;
                }
              }
            }
            .list_two_box:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
      ul.style2 {
        li {
          display: flex;
          justify-content: space-between;
          line-height: 0.32rem;
          padding: 0.12rem 0;
          div {
            flex: 1;
            .el-checkbox {
              width: 100%;
              margin: 0;
              margin-left: 0.1rem;
              .el-checkbox__label {
                text-align: left;
                min-width: 1.2;
              }
            }
          }
          .style2_kong {
            margin: 0 0.1rem;
          }
        }
      }
    }
    .pm_select {
      font-size: 0.16rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #7786ac;
      .el-select {
        width: 4.1rem;
      }
      .el-input__inner {
        color: #354b70;
        font-size: 0.16rem;
        height: 0.36rem;
        line-height: 0.36rem;
      }
    }
    .p_class_list {
      .pm_btns {
        margin-top: 0.42rem;
        margin-bottom: 0.12rem;
        display: flex;
        justify-content: center;
        .el-button {
          border: 0.01rem solid #dcdfe6;
          padding: 0.09rem 0.27rem;
          font-size: 0.16rem;
          border-radius: 4px;
          background: linear-gradient(263deg, #00c2ff, #0075ff);
          box-shadow: 0px 3px 18px 0px rgba(62, 150, 253, 0.19);
        }
        .el-button.resets {
          margin-left: 0.78rem;
          background: linear-gradient(261deg, #b8d5f5, #8fb1d7);
          box-shadow: 0px 2px 10px 0px rgba(171, 196, 227, 0.45);
        }
      }
      .p_c_top {
        margin-top: 0.24rem;
        font-size: 0.16rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #7786ac;
        .el-radio__label {
          font-size: 0.16rem;
          color: #7786ac;
        }
      }
      .pc_list {
        margin-top: 0.2rem;
        .pc_head {
          margin-top: 0.2rem;
          width: 100%;
          border: 0.01rem dashed #00c2ff;
          text-align: center;
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #006cff;
          background: linear-gradient(
            180deg,
            rgba(0, 117, 255, 0.05) 0%,
            rgba(0, 194, 255, 0.05) 100%
          );
          border-radius: 0.02rem;
          line-height: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 0.28rem;
            height: 0.22rem;
            margin-right: 0.12rem;
          }
        }
        .pc_body {
          margin-top: 0.14rem;
          width: 100%;
          border: 0.01rem dashed #00c2ff;
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #006cff;
          background: linear-gradient(
            180deg,
            rgba(0, 117, 255, 0.05) 0%,
            rgba(0, 194, 255, 0.05) 100%
          );
          border-radius: 0.02rem;
          line-height: 0.5rem;
          display: flex;
          padding: 0.1rem 0.42rem;
          flex-wrap: wrap;
          li {
            width: 10%;
            text-align: center;
            .el-checkbox {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .el-checkbox__label {
              min-width: 0.48rem;
              text-align: left;
              font-size: 0.16rem !important;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #354b70;
              line-height: 0.52rem;
            }
          }
        }
        .pc_body1{
          li{
            width: 100%;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
