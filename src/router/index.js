import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home";
import Index from "../views/Index";
import About from "@/components/about"
import Caidan from "@/components/caidan"
import Intro from "@/components/intro"
import Pagehead from "@/components/pagehead"
import Personal from "@/components/personal"
import Personnel from "@/components/personnel"
import Role from "@/components/role"
import Rules from "@/components/rules"
import Setting from "@/components/setting"
import Update from "@/components/update"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/caidan',
      name: 'caidan',
      component: Caidan
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/pagehead',
      name: 'pagehead',
      component: Pagehead
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/personnel',
      name: 'personnel',
      component: Personnel
    },
    {
      path: '/role',
      name: 'role',
      component: Role
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/update',
      name: 'update',
      component: Update
    }
  ]
})
