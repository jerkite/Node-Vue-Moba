<template>
  <div>
    <h1>{{id ?"编辑":"新建"}}英雄</h1>

    <el-form label-width="120px" @submit.native.prevent="save">
      <!-- 选择要加入子类的父类 -->
      <el-tabs type="border-card">
        <el-tab-pane label="基本信息">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" :on-success="afterUpload">
              <img :src="model.avatar" v-if="model.avatar" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option v-for="item of categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate :max="9" v-model="model.scores.difficult" show-score style="margin-top:0.6rem;"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate :max="9" v-model="model.scores.skills" show-score style="margin-top:0.6rem;"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate :max="9" v-model="model.scores.attack" show-score style="margin-top:0.6rem;"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate :max="9" v-model="model.scores.survive" show-score style="margin-top:0.6rem;"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option v-for="item of items1" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option v-for="item of items2" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usage_tips"></el-input>
          </el-form-item>
          <el-form-item label="对战技巧">
            <el-input type="textarea" v-model="model.battal_tips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.team_tips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button size="small" @click="model.skills.push({})"><i class="el-icon-plus"></i>添加技能</el-button>
          <el-row type="flex" style="flex-wrap:wrap;">
            <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="头像">
                <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" :on-success="res => $set(item,'icon',res.url)">
                  <img :src="item.icon" v-if="item.icon" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="技能描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input v-model="item.tips" type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="model.skills.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!--  <el-tab-pane label="英雄关系">
          <el-button size="small" @click="model.partners.push({})"><i class="el-icon-plus"></i>添加最佳搭档</el-button>
          <el-row type="flex" style="flex-wrap:wrap;">
            <el-col :md="12" v-for="(item,i) in model.partners" :key="i">
              <el-form-item label="选择最佳搭档">
                <el-select v-model="item.hero">
                  <el-option  v-for="icon in item.hero" :key="icon._id" :label="icon.name" :value="icon._id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="model.partners.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane> -->
      </el-tabs>
      <el-form-item>
        <el-button type="primary" native-type="submit" style="margin-top:1.5rem">保存</el-button>
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
      /* partners:[{
        hero:'',
        description:'',
      }], */
      items1: [],
      items2: [],
      categories: [],
      model: {
        name: '',
        avatar: '',
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0
        }
      },
      parents: [] //保存父类的数据
    }
  },
  methods: {
    afterUpload(res) {
      /* this.$set(this.model, 'avatar', res.url) //vue的响应式问题，在后面要加入新的属性，需要使用vue給的方法this.$set() */
      this.model.avatar = res.url //在data中定义就不需要使用this.$set()
    },
    async save() {
      //发送数据到服务器，并将数据保存到路由跳转/ rest/items/list的页面中
      if (this.id) {
        const res = await this.$http.put('rest/heroes/' + this.id, this.model)
      } else {
        const res = await this.$http.post('rest/heroes', this.model)
      }
      this.$router.push('/heroes/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get('rest/heroes/' + this.id)
      this.model = Object.assign({}, this.model, res.data)
    },
    //获取英雄类型
    async fetchCatogory() {
      const res = await this.$http.get('rest/categories')
      this.categories = res.data
    },
    //获取顺风出装
    async fetchItem1() {
      const res = await this.$http.get('rest/items')
      this.items1 = res.data
    },
    //获取逆风出装
    async fetchItem2() {
      const res = await this.$http.get('rest/items')
      this.items2 = res.data
    },
    /*   async fetchPartnerstoHero() {
      const res = await this.$http.get('rest/heroes')
      this.partners.hero = res.data
    }, */
    async fetchParents() {
      //获取数据为父类
      const res = await this.$http.get('rest/heroes')
      this.parents = res.data
    }
  },
  created() {
    /*  this.fetchPartnerstoHero() */
    this.fetchItem1()
    this.fetchItem2()
    this.fetchCatogory()
    this.fetchParents()
    this.id && this.fetch()
  }
}
</script>

