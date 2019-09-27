<template>
  <div>
    <!-- 三元运算符判断是否是点击CategoryList中的编辑跳转过来的，如果是跳转过来的则id存在，为编辑分类，否则为新建分类 -->
    <h1>{{id ?"编辑":"新建"}}广告位</h1>

    <el-form label-width="120px" @submit.native.prevent="save">
      <!-- 选择要加入子类的父类 -->
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button size="small" @click="model.items.push({})"><i class="el-icon-plus"></i>添加广告</el-button>
        <el-row type="flex" style="flex-wrap:wrap;">
          <el-col :md="24" v-for="(item,i) in model.items" :key="i">
            <el-form-item label="跳转链接">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin-top:1rem;">
              <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" :on-success="res => $set(item,'image',res.url)">
                <img :src="item.image" v-if="item.image" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="model.items.splice(i,1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
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
      model: {
        item:[],
      }
    }
  },
  methods: {
    async save() {
      //发送数据到服务器，并将数据保存到路由跳转/ rest/categories/list的页面中
      if (this.id) {
        const res = await this.$http.put('rest/ads/' + this.id, this.model)
      } else {
        const res = await this.$http.post('rest/ads', this.model)
      }
      this.$router.push('/ads/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get('rest/ads/' + this.id)
      this.model = res.data
    }
  },
  created() {
    this.id && this.fetch()
  }
}
</script>

