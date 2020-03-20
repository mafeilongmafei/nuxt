<template>
  <div class="container">
    <div class="body">
      <div class="header">
        <div class="top">
          <div class="top_left">
            <img src="~assets/images/logo.png" alt />
            <span>成都</span>
          </div>
          <div class="top_right">
            <ul>
              <li>
                <nuxt-link :to="{path : '/'}">首页</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{name : 'list' , params : {name : '热门楼盘' , id : 1}}">热门楼盘</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{name : 'list' , params : {name : '即将销售' , id : 2}}">即将销售</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{name : 'list', params : {name : '即将摇号' , id : 3}}">即将摇号</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{name : 'list' , params : {name : '最新摇号' , id : 4}}">最新摇号</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{name : 'list' , params : {name : '摇号剩余' , id : 5}}">摇号剩余</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{name : 'list' , params : {name : '房友讨论' , id : 6}}">房友讨论</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{name : 'list'}">关于我们</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{path : '/list'}">联系我们</nuxt-link>
              </li>
              <li>小程序</li>
            </ul>
          </div>
        </div>
        <div class="nav">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="banner in banners" :key="banner.imgurl">
                <img :src="banner.imgurl" />
              </div>
            </div>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
        </div>
        <div class="search">
          <div class="search_content">
            <div class="top_search">
              <Search></Search>
              <div class="search_address">
                <img src="https://imgcdn.huanjutang.com/assert/img/15549550922386380.jpg" alt />
                <span>地图找房</span>
              </div>
            </div>

            <div class="hot_search">
              <span>热门搜索:</span>
              <ul>
                <li>
                  <a href="#">中德英伦世邦F区</a>
                </li>
                <li>
                  <a href="#">中德英伦世邦F区</a>
                </li>
                <li>
                  <a href="#">中德英伦世邦F区</a>
                </li>
                <li>
                  <a href="#">中德英伦世邦F区</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="content_header">
            <h2>热门楼盘</h2>
            <span>查看更多></span>
          </div>
          <ul>
            <li>
              <div class="content_img">
                <img
                  src="https://imgcdn.huanjutang.com/assets/img/20191205/5de860889d162.png?imageView2/0/w/600/format/jpg/interlace/1/q/100|imageslim"
                  alt
                />
                <span>
                  <i class="el-icon-view"></i> 12.4万人
                </span>
              </div>
              <div class="li_title">
                <span>成都鑫苑城</span>
                <span class="li_title_right">郫都区</span>
              </div>
              <div class="li_bottom">
                <span>暂无</span>
                <div class="li_bottom_right">
                  <img src="https://imgcdn.huanjutang.com/assert/img/15549742727601263.jpg" alt />
                  <span>546</span>
                </div>
              </div>
            </li>
            <li>
              <div class="content_img">
                <img
                  src="https://imgcdn.huanjutang.com/assets/img/20191205/5de860889d162.png?imageView2/0/w/600/format/jpg/interlace/1/q/100|imageslim"
                  alt
                />
                <span>
                  <i class="el-icon-view"></i> 12.4万人
                </span>
              </div>
              <div class="li_title">
                <span>成都鑫苑城</span>
                <span class="li_title_right">郫都区</span>
              </div>
              <div class="li_bottom">
                <span>暂无</span>
                <div class="li_bottom_right">
                  <img src="https://imgcdn.huanjutang.com/assert/img/15549742727601263.jpg" alt />
                  <span>546</span>
                </div>
              </div>
            </li>
            <li>
              <div class="content_img">
                <img
                  src="https://imgcdn.huanjutang.com/assets/img/20191205/5de860889d162.png?imageView2/0/w/600/format/jpg/interlace/1/q/100|imageslim"
                  alt
                />
                <span>
                  <i class="el-icon-view"></i> 12.4万人
                </span>
              </div>
              <div class="li_title">
                <span>成都鑫苑城</span>
                <span class="li_title_right">郫都区</span>
              </div>
              <div class="li_bottom">
                <span>暂无</span>
                <div class="li_bottom_right">
                  <img src="https://imgcdn.huanjutang.com/assert/img/15549742727601263.jpg" alt />
                  <span>546</span>
                </div>
              </div>
            </li>
            <li>
              <div class="content_img">
                <img
                  src="https://imgcdn.huanjutang.com/assets/img/20191205/5de860889d162.png?imageView2/0/w/600/format/jpg/interlace/1/q/100|imageslim"
                  alt
                />
                <span>
                  <i class="el-icon-view"></i> 12.4万人
                </span>
              </div>
              <div class="li_title">
                <span>成都鑫苑城</span>
                <span class="li_title_right">郫都区</span>
              </div>
              <div class="li_bottom">
                <span>暂无</span>
                <div class="li_bottom_right">
                  <img src="https://imgcdn.huanjutang.com/assert/img/15549742727601263.jpg" alt />
                  <span>546</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div class="content_header">
            <h2>热门楼盘</h2>
            <span>查看更多></span>
          </div>
          <ul>
            <li>
              <div class="content_img">
                <img
                  src="https://imgcdn.huanjutang.com/assets/img/20191205/5de860889d162.png?imageView2/0/w/600/format/jpg/interlace/1/q/100|imageslim"
                  alt
                />
                <span>
                  <i class="el-icon-view"></i> 12.4万人
                </span>
              </div>
              <div class="li_title">
                <span>成都鑫苑城</span>
                <span class="li_title_right">郫都区</span>
              </div>
              <div class="li_bottom">
                <span>暂无</span>
                <div class="li_bottom_right">
                  <img src="https://imgcdn.huanjutang.com/assert/img/15549742727601263.jpg" alt />
                  <span>546</span>
                </div>
              </div>
            </li>
            <li>
              <div class="content_img">
                <img
                  src="https://imgcdn.huanjutang.com/assets/img/20191205/5de860889d162.png?imageView2/0/w/600/format/jpg/interlace/1/q/100|imageslim"
                  alt
                />
                <span>
                  <i class="el-icon-view"></i> 12.4万人
                </span>
              </div>
              <div class="li_title">
                <span>成都鑫苑城</span>
                <span class="li_title_right">郫都区</span>
              </div>
              <div class="li_bottom">
                <span>暂无</span>
                <div class="li_bottom_right">
                  <img src="https://imgcdn.huanjutang.com/assert/img/15549742727601263.jpg" alt />
                  <span>546</span>
                </div>
              </div>
            </li>
            <li>
              <div class="content_img">
                <img
                  src="https://imgcdn.huanjutang.com/assets/img/20191205/5de860889d162.png?imageView2/0/w/600/format/jpg/interlace/1/q/100|imageslim"
                  alt
                />
                <span>
                  <i class="el-icon-view"></i> 12.4万人
                </span>
              </div>
              <div class="li_title">
                <span>成都鑫苑城</span>
                <span class="li_title_right">郫都区</span>
              </div>
              <div class="li_bottom">
                <span>暂无</span>
                <div class="li_bottom_right">
                  <img src="https://imgcdn.huanjutang.com/assert/img/15549742727601263.jpg" alt />
                  <span>546</span>
                </div>
              </div>
            </li>
            <li>
              <div class="content_img">
                <img
                  src="https://imgcdn.huanjutang.com/assets/img/20191205/5de860889d162.png?imageView2/0/w/600/format/jpg/interlace/1/q/100|imageslim"
                  alt
                />
                <span>
                  <i class="el-icon-view"></i> 12.4万人
                </span>
              </div>
              <div class="li_title">
                <span>成都鑫苑城</span>
                <span class="li_title_right">郫都区</span>
              </div>
              <div class="li_bottom">
                <span>暂无</span>
                <div class="li_bottom_right">
                  <img src="https://imgcdn.huanjutang.com/assert/img/15549742727601263.jpg" alt />
                  <span>546</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import Search from "~/components/search.vue";
import { getBannerList } from "~/server/api.js"
export default {
  data() {
    return {
      banners: [],
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        autoplay: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    Search,
  },
  async asyncData() {
   let res = await getBannerList()
   return {
     banners : res.arr
   }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 1209px;
  height: 100%;
  margin: 0 auto;
  // border: 1px solid red;
  .body {
    width: 100%;
    .header {
      .top {
        width: 100%;
        height: 67px;
        .top_left {
          width: 20%;
          height: 100%;
          float: left;
          display: flex;
          align-items: center;
          span {
            margin-left: 11px;
            color: #666666;
            font-size: 16px;
          }
        }
        .top_right {
          width: 80%;
          height: 100%;

          float: right;
          ul {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li {
              a {
                color: #4a4a4a;
                font-size: 15px;
              }

              &:hover a {
                color: #3273dc;
              }
            }
          }
        }
      }
      .nav {
        width: 100%;
        height: 484px;
        overflow: hidden;
      }
      .search {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .search_content {
          width: 960px;
          height: 100%;
          margin-left: 17px;

          .top_search {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 48px;
            .search_address {
              display: flex;
              justify-content: center;
              align-items: center;
              color: #3273dc;
              margin-left: 10px;
              span {
                margin-left: 3px;
              }
            }
          }
          .hot_search {
            width: 100%;
            height: 100%;
            margin-top: 23px;
            margin-left: 12px;

            ul {
              display: inline-block;

              li {
                display: inline-block;
                a {
                  color: #5d7fc3;
                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .content {
    width: 100%;
    // border: 1px solid #000;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 345px;
        display: inline-block;
        margin-bottom: 30px;
        &:nth-child(1) {
          margin-top: 30px;
        }
        .content_header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          h2 {
            font-size: 25px;
            color: #1a1a1a;
            font-weight: 500;
          }
          span {
            color: #839bcf;
            font-size: 17px;
          }
        }
        ul {
          li {
            width: 285px;
            margin-left: 16px;
            transition: 0.5s;
            overflow: hidden;

            .content_img {
              width: 100%;
              height: 192px;
              position: relative;
              img {
                width: 100%;
                height: 100%;
              }
              span {
                position: absolute;
                top: 90%;
                left: 0;
                color: #fff;
              }
            }
            .li_title {
              width: 95%;
              display: flex;
              justify-content: space-between;
              margin-top: 17px;
              padding: 0 2.5%;
              .li_title_right {
                color: #666;
              }
            }
            .li_bottom {
              width: 95%;
              display: flex;
              justify-content: space-between;
              margin-top: 17px;
              padding: 0 2.5%;
              span {
                color: red;
              }
              .li_bottom_right {
                color: #666;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                  margin-right: 3px;
                }
                span {
                  color: #666;
                }
              }
            }
            &:nth-child(1) {
              margin-left: 0;
            }
            &:hover {
              box-shadow: 2px 2px 4px rgba($color: #000000, $alpha: 0.5);
              .content_img {
                width: 100%;
                height: 192px;
                transform: scale(1.2);
                transition: 1s;
              }
            }
          }
        }
      }
    }
  }
}
</style>
