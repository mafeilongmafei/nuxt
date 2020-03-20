<template>
  <div class="container">
    <div class="header">
      <div class="top_search">
        <div class="logo">
          <img src="~assets/images/logo.png" alt />
          <span>成都</span>
        </div>
        <div class="right_search">
          <div class="search">
            <el-input v-model="input" placeholder="请输入内容" class="elInput"></el-input>
            <el-button type="primary" @click="ti">主要按钮</el-button>
            <div class="search_address">
              <img src="https://imgcdn.huanjutang.com/assert/img/15549550922386380.jpg" alt />
              <span>地图找房</span>
            </div>
          </div>
        </div>
      </div>
      <div class="top_center">
        <div class="top_center_top">
          <a href="/" style="color: #3273dc;
    cursor: pointer;">首页</a>

          <span style="color: #999;">> {{link}}</span>
        </div>
        <div class="top_center_bottom">
          <ul>
            <li>热门楼盘</li>
            <li>即将预售</li>
            <li>即将摇号</li>
            <li>最新摇号</li>
            <li>摇号剩余</li>
          </ul>
        </div>
      </div>
      <div class="top_bottom">
        <div class="top_bottom_header">
          <span>位置:</span>
          <span :class="isActive ? 'active' : 'point'" @click="()=>{this.isActive = true}">
            按区域
            <i class="el-icon-caret-top"></i>
          </span>
          <span :class="isActive ? 'point' : 'active'" @click="()=>{this.isActive = false}">
            按地铁
            <i class="el-icon-caret-top"></i>
          </span>
        </div>
        <div class="top_bottom_footer">
          <div class="border" v-if="isActive">
            <div class="list1 clearFix" v-if="data.obj.o1">
              <div class="list_title">
                <p>{{data.obj.o1.address}}</p>
              </div>
              <div class="chebox">
                <el-checkbox
                  :indeterminate="isIndeterminate"
                  v-model="checkAll1"
                  @change="(val)=>{handleCheckAllChange(val , 1)}"
                >全选</el-checkbox>
                <el-checkbox-group
                  v-model="checkedCities1"
                  @change="(val)=>{handleCheckedCitiesChange(val , 1)}"
                >
                  <el-checkbox
                    v-for="city in data.obj.o1.arr"
                    :label="city"
                    :key="city.id"
                  >{{city.name}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
            <div class="list1 clearFix" v-if="data.obj.o2">
              <div class="list_title">
                <p>{{data.obj.o2.address}}</p>
              </div>
              <div class="chebox">
                <el-checkbox
                  :indeterminate="isIndeterminate"
                  v-model="checkAll2"
                  @change="(val)=>{handleCheckAllChange(val , 2)}"
                >全选</el-checkbox>
                <el-checkbox-group
                  v-model="checkedCities2"
                  @change="(val)=>{handleCheckedCitiesChange(val , 2)}"
                >
                  <el-checkbox
                    v-for="city in data.obj.o2.arr"
                    :label="city"
                    :key="city.id"
                  >{{city.name}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
            <div class="list1 clearFix" v-if="data.obj.o3">
              <div class="list_title">
                <p>{{data.obj.o3.address}}</p>
              </div>
              <div class="chebox">
                <el-checkbox
                  :indeterminate="isIndeterminate"
                  v-model="checkAll3"
                  @change="(val)=>{handleCheckAllChange(val , 3)}"
                >全选</el-checkbox>
                <el-checkbox-group
                  v-model="checkedCities3"
                  @change="(val)=>{handleCheckedCitiesChange(val , 3)}"
                >
                  <el-checkbox
                    v-for="city in data.obj.o3.arr"
                    :label="city"
                    :key="city.id"
                  >{{city.name}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </div>

            <div class="list1 clearFix" v-if="obj.o4.arr.length">
              <div class="list_title">
                <p style="color: #999;">{{obj.o4.address}}:</p>
              </div>
              <div class="chebox" @click="(e)=>{removeElement(e)}">
                <el-button
                  type="primary"
                  plain
                  size="mini"
                  v-for="item in obj.o4.arr"
                  :key="item.id"
                >
                  {{item.name }}
                  <i class="el-icon-close"></i>
                </el-button>
              </div>
            </div>
            <div class="list1 clearFix" v-if="obj.o5.arr.length">
              <div class="list_title">
                <p style="color: #999;">{{obj.o5.address}}:</p>
              </div>
              <div class="chebox" @click="(e)=>{removeElement(e)}">
                <el-button
                  type="primary"
                  plain
                  size="mini"
                  v-for="item in obj.o5.arr"
                  :key="item.id"
                >
                  {{item.name }}
                  <i class="el-icon-close"></i>
                </el-button>
              </div>
            </div>
            <div class="list1 clearFix" v-if="obj.o6.arr.length">
              <div class="list_title">
                <p style="color: #999;">{{obj.o6.address}}:</p>
              </div>
              <div class="chebox" @click="(e)=>{removeElement(e)}">
                <el-button
                  type="primary"
                  plain
                  size="mini"
                  v-for="item in obj.o6.arr"
                  :key="item.id"
                >
                  {{item.name }}
                  <i class="el-icon-close"></i>
                </el-button>
              </div>
            </div>
          </div>
          <div class="metro" v-else>
            <div class="metroBorder">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="1号线" name="first">
                  <div
                    v-for="(metros , index) in metro"
                    :key="index"
                    :class="isEvenOrOddNumber(index + 1) ? 'tabContainer flex_end': 'tabContainer'"
                  >
                    <el-checkbox
                      v-for="(metro, index) in  metros"
                      :key="metro.id"
                      :label="metro"
                      @change="updateChange"
                    >
                      <div class="city">{{metro.name}}</div>
                      <div class="line"></div>
                    </el-checkbox>
                    <div
                      :class="metro[index+1] ? (isEvenOrOddNumber(index + 1)? 'zwSpanRight' :  'zwSpanLeft') : 'no'"
                    ></div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="2号线" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="3号线" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="4号线" name="fourth">定时任务补偿</el-tab-pane>
              </el-tabs>
            </div>
          </div>
          <div class="radio_price clearFix">
            <div class="list_title">
              <p>单价:</p>
            </div>
            <el-radio-group v-model="price" class="list_radio">
              <el-radio label="价格不限/m²"></el-radio>
              <el-radio label="7000——10000元/m²"></el-radio>
              <el-radio label="10000元-15000/m²"></el-radio>
              <el-radio label="15000——20000元/m²"></el-radio>
              <el-radio label="20000——25000元/m²"></el-radio>
              <el-radio label="25000以上元/m²"></el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
    </div>
    <div class="content" ref="container">
      <div class="shopCount">
        <span>为您找到 {{this.data && this.data.arr.length}}个楼盘</span>
      </div>

      <div class="shopList">
        <ul>
          <li v-for="(item , index) in data.arr" :key="index">
            <div class="imgContainer">
              <img :src="item.avatar" alt />
            </div>
            <div class="list_content">
              <div class="mainLeft">
                <div class="itemTitle">{{item.title}}</div>
                <div class="itemTextContent">
                  <div class="one">
                    <i class="el-icon-location"></i>
                    <span class="itemTextContent__location ellipsis ellipsis--1">{{item.addre}}</span>
                  </div>
                  <div class="three">
                    <i class="icon">
                      <img src="https://imgcdn.huanjutang.com/assert/img/15549742727601263.jpg" />
                    </i>
                    <span>{{item.haveSeen}}</span>
                  </div>
                  <div class="four">
                    <span class="main__type__per main__type__per--0">{{item.status ? "预售" : "报名结束"}}</span>
                  </div>
                </div>
              </div>
              <div class="mainRight">
                <span>{{item.price}}元/m²</span>
                <div>
                  <el-button type="primary" round plain>主要按钮</el-button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="fixQrCode" ref="tu">
        <img src="http://imgcdn.huanjutang.com/assets/img/20190626/5d132683ad811.jpeg" alt="扫一扫" />
        <p>小程序找房更轻松</p>
        <p>买房总是快人一步</p>
      </div>
    </div>
  </div>
</template>
<script>
import Search from "~/components/search.vue";
import { getlistData } from "~/server/api.js";
let timer;
export default {
  data() {
    return {
      //选择的页面
      link: "",
      metro: [],
      title: "", //seo的title
      content: "", //seo的content
      input: "",
      //地铁默认选中那个标签
      activeName: "first",
      //是否全部选中
      checkAll1: false,
      checkAll2: false,
      checkAll3: false,
      checkedCities1: [],
      checkedCities2: [],
      checkedCities3: [],
      //设置 indeterminate 状态，只负责样式控制
      isIndeterminate: false,
      price: null, //价格
      isActive: true, //是在城市和地铁之间切换
      obj: {
        o4: {
          address: "一圈层(中心城区)",
          arr: []
        },
        o5: {
          address: "二圈层(近郊)",
          arr: []
        },
        o6: {
          address: "三圈层",
          arr: []
        }
      } //筛选条件的数据
    };
  },
  created() {
    this.link = ( this.$route.params && this.$route.params.name)  || ""  ;
  },
  mounted() {
    this.setCodeClass();
    //测试地铁用的
    this.metro.push(this.data.metro);
    this.metro.push(this.data.metro2);
    this.metro.push(this.data.metro3);
  },
  async asyncData() {
    try {
      var data = await getlistData();
    } catch (error) {
      console.log(error);
    }
    return { data };
  },
  head() {
    return {
      title: this.data.title,
      meta: [
        {
          hid: "description",
          name: this.data.title,
          content: this.data.content
        }
      ]
    };
  },
  components: {
    Search,
  },
  methods: {
    //全选
    async handleCheckAllChange(val, num) {
      val
        ? (this["checkedCities" + num] = this.data.obj["o" + num].arr)
        : (this["checkedCities" + num] = []);
      await this.sendAjax();
    },
    //单个选中
    async handleCheckedCitiesChange(value, num) {
      let checkedCount = value.length;
      let targetLength = this.data.obj["o" + num].arr.length;
      let address = value[0].address;

      if (targetLength === checkedCount) {
        this.handleCheckAllChange(true, num);
        this["checkAll" + num] = true;
        this.switch(address, []);
        await this.sendAjax();
        return;
      }
      this.switch(address, value);
      await this.sendAjax();
    },
    //得到某个元素距离body的offsetTop
    getbodyOffsetTop(obj) {
      let top = 0;
      while (obj !== document.body) {
        top += obj.offsetTop;
        obj = obj.parentNode;
      }
      return top;
    },
    //点击删除某个节点
    removeElement(e) {
      let obj = e.currentTarget;
      let parentNode = obj.parentNode;
      parentNode.removeChild(obj);
    },
    //判断做 arr = xx
    switch(address, arr) {
      let o4Address = this.obj.o4.address;
      let o5Address = this.obj.o5.address;
      let o6Address = this.obj.o6.address;
      switch (address) {
        case o4Address:
          this.obj.o4.arr = arr;
          break;
        case o5Address:
          this.obj.o5.arr = arr;
          break;
        default:
          this.obj.o6.arr = arr;
          break;
      }
    },
    //根据条件发送ajax
    sendAjax() {
      //根据this.obj 发送数据
      clearInterval(timer);
      timer = setTimeout(() => {
        ///${Math.floor((Math.random() + 1) * 100)}
        this.$router.push({
          path: `/list`
        });
        this.allOrigin();
      }, 1000);
    },
    //筛选后条件初始化
    allOrigin() {
      this.checkedCities1 = [];
      this.checkedCities2 = [];
      this.checkedCities3 = [];
      this.obj.o4.arr = [];
      this.obj.o5.arr = [];
      this.obj.o6.arr = [];
      this.checkAll1 = false;
      this.checkAll2 = false;
      this.checkAll3 = false;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //判断是奇数还是偶数
    isEvenOrOddNumber(num) {
      if (num === 0) {
        return true;
      }
      if (num % 2 == 0) {
        return true;
      } else {
        return false;
      }
    },
    updateChange(value, e) {
      //得到数据后像数组push 就像是sendajax一样
      console.log(value);
    },
    setCodeClass() {
      let obj = this.$refs.container;
      let yard = this.$refs.tu;
      //2维码距离页面body的offsetTop
      let yardTop = this.getbodyOffsetTop(yard);
      window.addEventListener(
        "scroll",
        () => {
          let pageScrollY = window.scrollY;
          if (pageScrollY >= yardTop - 30) {
            yard.className = "fixed";
          } else {
            yard.className = "fixQrCode";
          }
        },
        true
      );
      //
    },
    ti() {
      history.pushState(null , "" , "http://localhost:3000/list/2")
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  .header {
    width: 100%;
    margin-top: 12px;
    .top_search {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
      }
      .right_search {
        width: 74%;
        height: 100%;
        .search {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          .elInput {
            width: 593px;
          }
          .search_address {
            width: 200px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
    .top_center {
      width: 100%;
      height: 126px;
      .top_center_top {
        width: 100%;
        height: 18px;
        padding-top: 26px;
        padding-bottom: 33px;
        line-height: 26px;
        font-size: 18px;
      }
      .top_center_bottom {
        width: 100%;
        height: 33px;
        font-size: 18px;
        color: #1a1a1a;
        ul {
          li {
            display: inline-block;
            margin-right: 25px;
          }
        }
      }
    }
    .top_bottom {
      width: 100%;
      // height: 280px;
      background-color: #fbfbfb;

      .top_bottom_header {
        font-size: 15px;
        color: #b3b3b3;
        padding: 13px;
        border-bottom: 1px solid #e6e6e6;
        .tab {
          height: 40px;
          position: relative;
          .line {
            position: absolute;
            height: 8px;
            background: #eaedf5;
          }
          .city {
            position: absolute;
          }
        }

        span:nth-child(1) {
          color: #4a4a72;
          font-weight: 500;
          margin-left: 23px;
        }
        span {
          margin-right: 25px;
          transition: all 0.5s;
          i {
            transform: rotate(180deg);
          }
        }
        .active {
          color: #2d8cf0;
          i {
            transform: rotate(0deg);
          }
        }
      }
      .top_bottom_footer {
        width: 100%;
        font-size: 14px;
        color: #666;
        .border {
          border-bottom: 1px solid #e6e6e6;
        }
        .list1 {
          width: 100%;
          height: 55px;
          font-size: 14px;
          color: #666;
          .list_title {
            width: 140px;
            float: left;
            height: 100%;
            padding-left: 36px;
          }
          .chebox {
            width: 1020px;
            height: 100%;
            float: right;
          }
          &:nth-child(1) {
            padding-top: 10px;
            height: 65px;
          }
        }
        .radio_price {
          width: 100%;
          height: 55px;
          line-height: 55px;
          .list_title {
            width: 120px;
            float: left;
            height: 100%;
            padding-left: 36px;
          }
          .list_radio {
            width: 1020px;
            height: 100%;
            float: right;
            line-height: 55px;
            .el-radio {
              margin-right: 10px;
            }
          }
        }
        .metroBorder {
          margin-left: 30px;
        }
      }
    }
  }
  .content {
    width: 100%;
    height: 100%;
    position: relative;
    .shopCount {
      width: 100%;
      padding-top: 23px;
      span {
        font-size: 24px;
        font-weight: 600;
      }
    }
    .shopList {
      width: 100%;
      ul {
        li {
          width: 80%;
          box-sizing: border-box;
          padding: 20px;
          display: flex;
          border-bottom: 1px solid #e6e6e6;
          .imgContainer {
            width: 210px;
            height: 130px;
            box-sizing: border-box;
            padding-right: 20px;

            img {
              width: 100%;
              height: 100%;
            }
          }
          .list_content {
            width: 740px;
            height: 130px;
            display: flex;
            justify-content: space-between;
            .mainLeft {
              width: 515px;
              height: 130px;
              .itemTitle {
                width: 100%;
                height: 25px;
                cursor: pointer;
                font-size: 22px;
                font-weight: 600;
                letter-spacing: 1px;
              }
              .itemTextContent {
                height: 105px;
                .one {
                  cursor: pointer;
                  margin-top: 10px;
                  font-size: 14px;
                  color: #9399a5;
                  display: flex;
                  align-items: center;
                }
                .three {
                  cursor: pointer;
                  font-size: 14px;
                  color: #999;
                  margin-top: 15px;
                  height: 20px;
                  position: relative;
                }
                .four {
                  margin-top: 19px;
                  display: flex;
                  .main__type__per--0 {
                    background: #eaf3fc;
                    color: #2d8cf0;
                  }
                }
              }
            }
            .mainRight {
              width: 205px;
              height: 130px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .span {
                font-size: 18px;
                color: #fa5741;
              }
            }
          }
          &:hover {
            box-shadow: 0px 1px 2px #000;
          }
        }
      }
    }
    .fixQrCode {
      width: 150px;
      height: 162px;
      position: absolute;
      right: 0;
      top: 88px;
      color: #999999;
      img {
        width: 80px;
        height: 80px;
      }
      p {
        font-size: 12px;
        color: #999;
        margin-bottom: 0;
      }
    }
    .fixed {
      width: 150px;
      height: 162px;
      position: fixed;
      z-index: 100;
      right: 354px;
      top: 47px;
      img {
        width: 80px;
        height: 80px;
      }
      p {
        font-size: 12px;
        color: #999;
        margin-bottom: 0;
      }
    }
  }
}
.el-checkbox-group {
  display: inline-block;
}
.el-button--primary.is-plain:focus,
.el-button--primary.is-plain:hover {
  background: #ecf5ff !important;
  border-color: #b3d8ff !important;

  color: #666 !important;
}
.el-button.is-plain:focus,
.el-button.is-plain:hover {
  color: #666 !important;

  background: #ecf5ff !important;
  border-color: #b3d8ff !important;
}
.el-icon-close:hover {
  width: 12px;
  height: 12px;
  color: #fff;
  background-color: #2d8cf0;
  border-radius: 50%;
  color: #fff !important;
  text-align: center;
  line-height: 12px;
}


.line {
  width: 70px;
  height: 8px;
  background-color: #eaedf5;
  border-radius: 3px;
  position: absolute;
  top: 3px;
  left: 25px;
}

.tabContainer {
  display: flex;
  height: 50px;
  position: relative;
  .el-checkbox {
    margin-right: 0px;
  }
  .el-checkbox {
    height: 40px;
    width: 67px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
.el-checkbox[data-v-21b3644e]:last-of-type {
  margin-left: 0px;
}
.zwSpanLeft {
  width: 60px;
  height: 58px;
  border-right: 8px solid #eaedf5;
  position: absolute;
  right: 0;
  top: 3.5px;
  border-radius: 10px;
}
.zwSpanRight {
  width: 65px;
  height: 60px;
  border-left: 8px solid #eaedf5;
  border-top: 8px solid #eaedf5;
  border-bottom: 8px solid #eaedf5;
  position: absolute;
  left: 0;
  top: 2px;
  border-radius: 10px;
}
.flex_end {
  display: flex;
  justify-content: flex-end;
}
.no {
  display: none;
}
.list1 .el-checkbox:nth-child(1){
  margin-right: 30px;

}
.point {
  cursor: pointer;
}
</style>