import Vue from 'vue'
import Router from 'vue-router'

//路由的懒加载
const Home = ()=> import('@/components/Home')
const Menu = ()=> import('@/components/Menu')
const Admin = ()=> import('@/components/Admin')
const About = ()=> import('@/components/About')
const Login = ()=> import('@/components/Login')
const Register = ()=> import('@/components/Register')

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
