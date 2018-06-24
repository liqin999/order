<template>
  <div>
    <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a href="/" class="navbar-brand">Pizza点餐系统</a>
      <ul class="nav nav-pills navbar-nav">
        <li><router-link :to="{name:'homeLink'}" class="nav-link">主页</router-link></li>
        <li><router-link :to="{name:'menuLink'}" class="nav-link">菜单</router-link></li>
        <li><router-link :to="{name:'adminLink'}" class="nav-link">管理</router-link></li>
        <li><router-link :to="{name:'aboutLink'}" class="nav-link">关于我们</router-link></li>
      </ul>

      <ul class="nav navbar-nav fr">
        <li><router-link :to="{name:'loginLink'}" class="nav-link">登录</router-link></li>
        <li><router-link :to="{name:'registerLink'}" class="nav-link">注册</router-link></li>
      </ul>
    </nav>
  </header>
  
  </div>
  
</template>
<script>
  export default{
    // data(){
    //   return {
    //     homeLink:'/'
    //   }
    // }
    //导航完成之前获取数据导航完成之前获取数据

    //相对于适口额位置  页面中盒子的狂傲使用相对于适口的大小相对于 max-height:90vh  
    // div{width:90vw}

  }  

</script>
<style>
   .fl{
    float: left !important;
   }
   .fr{
    float: right !important;
   }
   .navbar-light{
    border-bottom: 1px solid #ddd;padding-bottom: 5px
   }
</style>
