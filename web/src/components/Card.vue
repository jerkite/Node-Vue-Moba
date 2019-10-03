<template>
  <div>
    <div class="card bg-white  p-3 my-3">
      <div class="card-header  d-flex  pb-3 ">
        <i class="iconfont" :class="`icon-${icon}`"></i>
        <div class="flex xl px-1">{{title}}</div>
        <i class="iconfont icon-caidan "></i>
      </div>
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, require: true },
    icon: { type: String, require: true }
  }
}
</script>
<style scoped>
</style>