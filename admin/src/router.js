import Vue from "vue";
import Router from "vue-router";
import Login from './views/Login.vue'
import Main from "./views/Main.vue";
import CategoryEdit from "./views/CategoryEdit.vue";
import CategoryList from "./views/CategoryList.vue";

import ItemEdit from "./views/ItemEdit.vue";
import ItemList from "./views/ItemList.vue";

import HeroEdit from "./views/HeroEdit.vue";
import HeroList from "./views/HeroList.vue";

import ArticleEdit from "./views/ArticleEdit.vue";
import ArticleList from "./views/ArticleList.vue";

import AdEdit from "./views/AdEdit.vue";
import AdList from "./views/AdList.vue";


import AdminUrseEdit from "./views/AdminUrseEdit.vue";
import AdminUrseList from "./views/AdminUrseList.vue";



Vue.use(Router);

export default new Router({
  routes: [
    { path: "/login", name: "login", component: Login },
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

        //广告位路由
        { path: "/ads/create", component: AdEdit },
        { path: "/ads/edit/:id", component: AdEdit, props: true },
        { path: "/ads/list", component: AdList },

        //管理员路由
        { path: "/admin_urses/create", component: AdminUrseEdit },
        { path: "/admin_urses/edit/:id", component: AdminUrseEdit, props: true },
        { path: "/admin_urses/list", component: AdminUrseList },
      ]
    }
  ]
});
