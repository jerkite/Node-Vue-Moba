<template>
  <div>
    <!-- 三元运算符判断是否是点击CategoryList中的编辑跳转过来的，如果是跳转过来的则id存在，为编辑分类，否则为新建分类 -->
    <h1>{{id ?"编辑":"新建"}}管理员</h1>

    <el-form label-width="120px" @submit.native.prevent="save">
      <!-- 选择要加入子类的父类 -->
      <el-form-item label="用户名">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>




<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      parents: [] //保存父类的数据
    }
  },
  methods: {
    async save() {
      //发送数据到服务器，并将数据保存到路由跳转/ rest/admin_urses/list的页面中
      if (this.id) {
        const res = await this.$http.put('rest/admin_urses/' + this.id, this.model)
      } else {
        const res = await this.$http.post('rest/admin_urses', this.model)
      }
      this.$router.push('/admin_urses/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get('rest/admin_urses/' + this.id)
      this.model = res.data
    },
  },
  created() {
    this.id && this.fetch()
  }
}
</script>


<style lang="scss" scoped>
</style>