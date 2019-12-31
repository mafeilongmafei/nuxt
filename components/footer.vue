<template>
  <div class="footer">
    <div class="left_footer">
      <div class="footer_title">
        <h2>摇号助手:成都</h2>
      </div>
      <div class="footer_nav clearFix">
        <ul>
          <li>热门楼盘</li>
          <li>即将销售</li>
          <li>即将摇号</li>
          <li>最新摇号</li>
          <li>摇号剩余</li>
          <li>房友讨论</li>
          <li>关于我们</li>
          <li>联系我们</li>
          <li>小程序</li>
        </ul>
      </div>
      <div class="link">
        <span>友情链接:</span>
        <ul class="clearFix">
          <li>欢聚堂</li>
          <li>成都摇号助手</li>
          <li>杭州摇号助手</li>
          <li>南京房小团</li>
        </ul>
      </div>
      <p>成都摇号助手科技有限公司 | 蜀ICP备19012138号-1 | Copyright©2019 yaohaoapp.com 版权所有</p>
    </div>
    <div class="right_footer">
      <img src="~/assets/images/w.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "footer"
};
</script>
<style lang="scss" scoped>
.footer {
  border-top: 1px solid #e6e6e6;
  padding: 45px 0;
  display: flex;
  .right_footer {
    width: 38%;
    img {
        float: right;
    }
  }
  .left_footer {
    width: 60%;
    .footer_title {
      font-size: 18px;
      color: #4a4a4a;
    }
    .footer_nav {
      width: 100%;
      color: #1a1a1a;
      font-size: 16px;
      ul {
        width: 100%;
        li {
          list-style: none;
          float: left;
          margin-right: 16px;
        }
      }
    }
    .link {
      width: 100%;
      font-size: 15px;
      display: flex;

      span {
        color: #666666;
      }
      ul {
        width: 90%;
        display: inline-block;
        li {
          list-style: none;
          float: left;
          margin-right: 16px;
          color: #3273dc;
        }
      }
    }
    p {
      color: #666;
    }
  }
}
</style>>
