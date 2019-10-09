<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../assets/images/8daa3e2de015c88c3c8ea34e75a163e2.jpeg" class="w-100">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/5bd399890e0ddca258ada7793cacb747.jpeg" class="w-100">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/43602c464b708c10b6280186aaa607d1.jpeg" class="w-100">
      </swiper-slide>
      <div class="swiper-pagination  pagination-home text-right pb-1 " slot="pagination">
      </div>
    </swiper>
    <div class="nav-icon bg-white mt-2 d-flex flex-wrap text-gery 
      ms text-center pt-3">
      <div class="nav-items">
        <i class="sprite sprite-news"></i>
        <div>爆料站</div>
      </div>
      <div class="nav-items">
        <i class="sprite sprite-story"></i>
        <div>故事站</div>
      </div>
      <div class="nav-items">
        <i class="sprite sprite-shop"></i>
        <div>周边商城</div>
      </div>
      <div class="nav-items">
        <i class="sprite sprite-tiyan"></i>
        <div>体验服</div>
      </div>
      <div class="nav-items">
        <i class="sprite sprite-new"></i>
        <div>新人专区</div>
      </div>
      <div class="nav-items">
        <i class="sprite sprite-extended"></i>
        <div>荣耀·传承</div>
      </div>
      <div class="nav-items">
        <i class="sprite sprite-community"></i>
        <div>同人社区</div>
      </div>
      <div class="nav-items">
        <i class="sprite sprite-campsite"></i>
        <div>王者营地</div>
      </div>
      <div class="nav-items">
        <i class="sprite sprite-public"></i>
        <div>公众号</div>
      </div>
      <div class="nav-items">
        <i class="sprite sprite-edition"></i>
        <div>版本介绍</div>
      </div>
    </div>
    <div class="nav-footer bg-light py-1 text-center text-dark-l ms">
      <i class="sprite sprite-arrowhead">
      </i>收起
    </div>

    <m-list-card icon="yijianchuda" title="新闻咨询" :categories="NewCats">
      <template #items="{category}">
        <div class="pt-3 d-flex" v-for="(news,i) in category.newsList" :key="i">
          <span class="text-info px-1">[{{news.categoryName}}]</span>
          <span>|</span>
          <span class="lg flex px-1 text-ellipsis">{{news.title}}</span>
          <span class="sm text-gery">{{news.createdAt | date}}</span>
        </div>
      </template>
    </m-list-card>
    <m-card icon="card-hero" title="英雄列表"></m-card>
    <m-card icon="icon-video" title="精彩视频"></m-card>
    <m-card icon="strategy" title="图文攻略"></m-card>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters:{
    date(val){
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      NewCats: [],
    }
  },
  methods:{
    async fetchNewCats(){
      const res = await this.$http.get('news/list')
      this.NewCats=res.data
    }
  },
  created(){
    this.fetchNewCats()
  },
}
</script>
<style lang="scss">
@import '../assets/scss/variables';

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    background-color: map-get($colors, 'white');
    border-radius: 0.1538rem;
    &.swiper-pagination-bullet-active {
      background-color: map-get($colors, 'info');
    }
  }
}
.nav-icon {
  .nav-items {
    width: 25%;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-right: 1px solid #999;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
.nav-footer {
  border-top: 0.0769rem solid map-get($colors, 'light-l');
  border-bottom: 0.0769rem solid map-get($colors, 'light-l');
}
.card-header {
  border-bottom: 0.0769rem solid map-get($colors, 'light-l');
}
</style>
