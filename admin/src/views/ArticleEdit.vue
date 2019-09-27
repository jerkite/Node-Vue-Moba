<template>
  <div>
    <!-- 三元运算符判断是否是点击CategoryList中的编辑跳转过来的，如果是跳转过来的则id存在，为编辑分类，否则为新建分类 -->
    <h1>{{id ?"编辑":"新建"}}文章</h1>

    <el-form label-width="120px" @submit.native.prevent="save">
      <!-- 选择要加入子类的父类 -->
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>




<script>
import { VueEditor } from 'vue2-editor'
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      categories: [] //保存父类的数据
    }
  },
  methods: {
    async save() {
      //发送数据到服务器，并将数据保存到路由跳转/ rest/articles/list的页面中
      if (this.id) {
        const res = await this.$http.put('rest/articles/' + this.id, this.model)
      } else {
        const res = await this.$http.post('rest/articles', this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get('rest/article/' + this.id)
      this.model = res.data
    },
    async fetchCategories() {
      //获取数据为父类
      const res = await this.$http.get('rest/categories')
      this.categories = res.data
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData()
      formData.append('file', file)
      const res = await this.$http.post('upload',formData)
      Editor.insertEmbed(cursorLocation, 'image', res.data.url)
      resetUploader()
    }
  },
  components: {
    VueEditor
  },
  created() {
    this.fetchCategories()
    this.id && this.fetch()
  }
}
</script>


