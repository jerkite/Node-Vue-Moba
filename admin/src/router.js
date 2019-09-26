import Vue from "vue";
import Router from "vue-router";
// import Home from './views/Home.vue'
import Main from "./views/Main.vue";
import CategoryEdit from "./views/CategoryEdit.vue";
import CategoryList from "./views/CategoryList.vue";

import ItemEdit from "./views/ItemEdit.vue";
import ItemList from "./views/ItemList.vue";

import HeroEdit from "./views/HeroEdit.vue";
import HeroList from "./views/HeroList.vue";

import ArticleEdit from "./views/ArticleEdit.vue";
import ArticleList from "./views/ArticleList.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
      children: [

        //分类路由
        { path: "/categories/create", component: CategoryEdit },
        { path: "/categories/edit/:id", component: CategoryEdit, props: true },
        { path: "/categories/list", component: CategoryList },

        //物品路由
        { path: "/items/create", component: ItemEdit },
        { path: "/items/edit/:id", component: ItemEdit, props: true },
        { path: "/items/list", component: ItemList },

        //英雄路由
        { path: "/heroes/create", component: HeroEdit },
        { path: "/heroes/edit/:id", component: HeroEdit, props: true },
        { path: "/heroes/list", component: HeroList },

        //文章路由
        { path: "/articles/create", component: ArticleEdit },
        { path: "/articles/edit/:id", component: ArticleEdit, props: true },
        { path: "/articles/list", component: ArticleList },
      ]
    }
  ]
});
