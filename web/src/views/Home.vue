<template>
  <div class="home">
    <swiper :options="swiperOption" >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/variables';

.pagination-home {
  .swiper-pagination-bullet{
    opacity: 1;
    background-color: map-get($colors, 'white');
    border-radius: 0.1538rem;
    &.swiper-pagination-bullet-active {
      background-color: map-get($colors, 'info');
    }
  }
}
</style>
