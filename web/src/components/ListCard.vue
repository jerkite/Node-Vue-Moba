<template>
  <div>
    <m-card :icon="icon" :title="title">
      <div class="nav jc-between mt-3">
        <div class="nav-items" :class="{ active: active===i}" 
        v-for="(item,i) in categories" :key="i"
        @click="$refs.list.swiper.slideTo(i)">
          <div class="nav-link">{{item.name}}</div>
        </div>
      </div>
      <div >
        <swiper ref="list" @slide-change="()=> active = $refs.list.swiper.realIndex"> 
          <swiper-slide  v-for="(category,i) in categories" :key="i">
            <slot name="items" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>
  </div>

</template>


<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>



<style scoped>
</style>