<template>
  <div class="timeLine">
    <div class="time_top">
      <div
        v-for="(item , index) in obj.arr"
        :key="index"
        :class="{padding : index + 1 !==1 , content : true ,defaultContent : !item.isactive }"
      >
        <div class="info">
          <p>{{item.date}}</p>
          <p>预售</p>
        </div>
        <div class="trigon"></div>
      </div>
    </div>
    <div class="border clearFix">
      <div 
      :class="!item.isactive ? 'defaultBorderContent' : 'border_content'" 
      v-for="(item , index) in obj.countArr" :key="index">
        <div class="circle"></div>
        <div class="line"></div>
      </div>
    </div>
    <div class="time_top bottom">
      <div
        v-for="(item , index) in obj.arr2"
        :key="index"
        :class="!item.isactive ? 'content padding defaultContent' : 'content padding' "
      >
        <div class="info">
          <p>{{item.date}}</p>
          <p>预售</p>
        </div>
        <div class="trigon trigon_bottom"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "timeLine",
  data() {
    return {
      obj: {
        arr: [
          {
            name: "邱丽",
            date: "1974.02.06",
            isactive: true
          },
          {
            name: "叶丽",
            date: "2009.12.05",
            isactive: false
          },
          {
            name: "罗超",
            date: "2001.06.23",
            isactive: false
          },
          {
            name: "汤强",
            date: "1976.12.20",
            isactive: false
          }
        ],
        arr2: [
          {
            name: "戴平",
            date: "2007.04.21",
            isactive: false
          },
          {
            name: "杜平",
            date: "1976.10.01",
            isactive: false
          },
          {
            name: "沈秀英",
            date: "2018.10.05",
            isactive: false
          }
        ],
        countArr: [
          {
            name: "邱丽",
            date: "1974.02.06",
            isactive: true
          },
          {
            name: "戴平",
            date: "2007.04.21",
            isactive: false
          },
          {
            name: "叶丽",
            date: "2009.12.05",
            isactive: false
          },
          {
            name: "罗超",
            date: "2001.06.23",
            isactive: false
          },
          {
            name: "杜平",
            date: "1976.10.01",
            isactive: false
          },
          {
            name: "沈秀英",
            date: "2018.10.05",
            isactive: false
          },
          {
            name: "汤强",
            date: "1976.12.20",
            isactive: false
          }
        ]
      }
    };
  },
  methods: {
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
    }
  }
};
</script>
<style lang="scss" scoped>
.timeLine {
  width: 710px;
  height: 175px;
  border: 1px solid #000;
  margin: 0 auto;

  .time_top {
    height: 66px;
    .content {
      width: 100px;
      height: 100%;
      background-color: #f1f8ff;
      position: relative;
      display: inline-block;

      .info {
        height: 44px;
        text-align: center;
        color: #2d8cf0;
        font-size: 16px;
      }
      .trigon {
        width: 0;
        height: 0;
        border: 10px solid #f1f8ff;
        border-left-color: transparent;
        border-bottom-color: transparent;
        border-right-color: transparent;
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -10px;
      }
      .trigon_bottom {
        top: -20px;
        transform: rotate(-180deg);
      }
    }
    .defaultContent {
      @extend .content;
      background-color: #f7f7f7;

      .info {
        height: 44px;
        text-align: center;
        color: #999;
        font-size: 16px;
      }
      .trigon {
        width: 0;
        height: 0;
        border: 10px solid #f7f7f7;
        border-left-color: transparent;
        border-bottom-color: transparent;
        border-right-color: transparent;
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -10px;
      }
    }
  }
  .border {
    width: 100%;
    height: 24px;
    margin: 7px 0;

    .border_content {
      width: 100px;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      float: left;
      .circle {
        width: 17px;
        height: 17px;
        border: 4.15px solid #2d8cf0;
        border-radius: 50%;
        position: absolute;
      }
      .line {
        width: 100%;
        height: 2px;
        background-color: #2d8cf0;
        position: absolute;
        left: 50%;
        top: 70%;
      }
    }
    .defaultBorderContent {
      @extend .border_content;
      .circle {
        width: 17px;
        height: 17px;
        border: 4.15px solid #ddd;
        border-radius: 50%;
        position: absolute;
      }
      .line {
        width: 100%;
        border: 2px dashed #ddd;
        background-color: transparent;
        position: absolute;
        left: 50%;
        top: 70%;
      }
    }
    div:last-child {
      .line {
        display: none;
      }
    }
  }
}
.bottom {
  width: 100%;
  justify-content: space-around !important;
}
.padding {
  margin-left: 100px;
}
</style>