import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import About from '@/components/About'
import Login from '@/components/login'
import Register from '@/components/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
  		if(savedPosition){
  			return savedPosition
  		}else{
  			return {x:0,y:0}
  		}	
  },
  routes: [
    {
      path: '/',
      name: 'homeLink',
      component: Home
    },
     {
      path: '/Menu',
      name: 'menuLink',
      component: Menu
    },
     {
      path: '/Admin',
      name: 'adminLink',
      component: Admin
    },
    {
      path: '/About',
      name: 'aboutLink',
      component: About
    },
     {
      path: '/Login',
       name: 'loginLink',
      component: Login
    },
    {
      path: '/Register',
      name: 'registerLink',
      component: Register
    },
    {
    	path:'*',//空连接的匹配形式
    	component:Home
    }
  ]
})
