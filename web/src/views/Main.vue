<template>
  <div>
    <div class="topbar bg-black">
      <div class="topbar-items  py-1 px-2 d-flex ai-center">
        <img src="../assets/logo.png" width=30px>
        <div class="text-white ml-1 flex">
          王者荣耀
          <div class="xxs text-gery ">
            团队成就更多
          </div>
        </div>
        <button type="button" class=" btn bg-primary ">立即下载</button>
      </div>
    </div>
    <div class="nav nav-increase bg-primary  jc-around text-white pt-2 pb-1 lg">
      <div class="nav-items active">
        <router-link class="nav-link" tag='div' to='/home'>首页</router-link>
      </div>
      <div class="nav-items ">
        <router-link class="nav-link" tag='div' to='/'>攻略中心</router-link>
      </div>
      <div class="nav-items ">
        <router-link class="nav-link" tag='div' to='/'>赛事中心</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>
