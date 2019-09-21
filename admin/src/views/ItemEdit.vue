<template>
  <div>
    <h1>{{id ?"编辑":"新建"}}分类</h1>

    <el-form label-width="120px" @submit.native.prevent="save">
      <!-- 选择要加入子类的父类 -->
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-input v-model="model.icon"></el-input>
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
      //发送数据到服务器，并将数据保存到路由跳转/ rest/items/list的页面中
      if (this.id) {
        const res = await this.$http.put('rest/items/' + this.id, this.model)
      } else {
        const res = await this.$http.post('rest/items', this.model)
      }
      this.$router.push('/items/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get('rest/items/' + this.id)
      this.model = res.data
    },
    async fetchParents() {
      //获取数据为父类
      const res = await this.$http.get('rest/items')
      this.parents = res.data
    }
  },
  created() {
    this.fetchParents()
    this.id && this.fetch()
  }
}
</script>


<style lang="scss" scoped>
</style>