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
            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input 
                type="password"
                class="form-control"
                v-model="confirmPassword"
                >
            </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
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
				confirmPassword:'',
			}
		},
		methods:{
			onSubmit(){
				let postData={
					email:this.email,
					password:this.password,
					confirmPassword:this.confirmPassword,
				}

				if(this.password != this.confirmPassword){
					alert("两次密码输入不一致，请重新输入");
					return false;
				}else{
					this.$axios.get("https://www.easy-mock.com/mock/5ae1a0ffe98e87389dadefb2/example/memulogin",postData)
						   .then(res=>{
						   	console.log(res)
						   	if(res.status == 200){
						     	this.$router.push({name:'loginLink'})
						   	   }
						   })
				}

				
			}
		},
		computed:{

		}
	}
</script>