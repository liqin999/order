<template>
  <div id="app">
   <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header"
export default {
    data(){
        return {
          msg:'this is a data 数据'
        }
    },
    components:{Header},
    methods:{

    },
    mounted(){

    }


}
</script>

<style>

</style>
