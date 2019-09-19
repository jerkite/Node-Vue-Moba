<template>
  <div>
    <!-- 三元运算符判断是否是点击CategoryList中的编辑跳转过来的，如果是跳转过来的则id存在，为编辑分类，否则为新建分类 -->
    <h1>{{id ?"编辑":"新建"}}分类</h1>

    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
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
      model: {}
    }
  },
  methods: {
    async save() {
      //发送数据到服务器，并将数据保存到路由跳转/categories/list的页面中
      if (this.id) {
        const res = await this.$http.put('categories/' + this.id, this.model)
      } else {
        const res = await this.$http.post('categories', this.model)
      }
      this.$router.push('/categories/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get('categories/' + this.id)
      this.model = res.data
    }
  },
  created() {
    this.id && this.fetch()
  }
}
</script>


<style lang="scss" scoped>
</style>