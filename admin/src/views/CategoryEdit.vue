<template>
  <div>
    <!-- 三元运算符判断是否是点击CategoryList中的编辑跳转过来的，如果是跳转过来的则id存在，为编辑分类，否则为新建分类 -->
    <h1>{{id ?"编辑":"新建"}}分类</h1>

    <el-form label-width="120px" @submit.native.prevent="save">
      <!-- 选择要加入子类的父类 -->
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
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
      model: {},
      parents: [] //保存父类的数据
    }
  },
  methods: {
    async save() {
      //发送数据到服务器，并将数据保存到路由跳转/ rest/categories/list的页面中
      if (this.id) {
        const res = await this.$http.put('rest/categories/' + this.id, this.model)
      } else {
        const res = await this.$http.post('rest/categories', this.model)
      }
      this.$router.push('/categories/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get('rest/categories/' + this.id)
      this.model = res.data
    },
    async fetchParents() {
      //获取数据为父类
      const res = await this.$http.get('rest/categories')
      this.parents = res.data
    }
  },
  created() {
    this.fetchParents()
    this.id && this.fetch()
  }
}
</script>


