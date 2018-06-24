<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input 
                type="email"
                class="form-control"
                v-model="email"
                >
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input 
                type="password"
                class="form-control"
                v-model="password"
                >
            </div>
            <button type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				email:'',
				password:'',
			}
		},
		methods:{
			onSubmit(){
				let postData={
					email:this.email,
					password:this.password
				}
				this.$axios.get("https://www.easy-mock.com/mock/5ae1a0ffe98e87389dadefb2/example/memulogin")
						   .then(res=>{
						   	console.log(res)
						   	if(res.status == 200){
						   		let data = res.data.data;
						   		if(data.email == postData.email && data.password == postData.password){	
							   			this.$router.push({
									   		name:'adminLink'
									   	})
						   		}else{
						   			alert("用户名或者密码不正确")
						   		}
						   	}
						   	
						   })
			}
		},
		computed:{

		}
	}
</script>