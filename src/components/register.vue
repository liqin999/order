<template>
	<div>
		<form @submit="onsubmit()">
			<div>
				<label>用户名:</label>
				<input type="text" v-model="email" name="">
			</div>
			<div>
				<label>密码:</label>
				<input type="text" v-model="pass" name="">
			</div>
			<div>
				<label>确认密码:</label>
				<input type="text" v-model="repass" name="">
			</div>
			<div>
				<input type="submit" value="登录" name="">
			</div>
		</form>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				email:'',
				pass:'',
			}
		},
		methods:{
			onsubmit(){
				let postData={
					email:this.email,
					pass:this.pass,
					repass:this.repass,
				}

				if(pass != repass){
					alert("两次密码输入不一致，请重新输入");
					return false;
				}else{
					this.$axios.post("/user.json",postData)
						   .then(res=>{
						   	console.log(res)
						   	this.$router.push({name:'loginLink'})
						   })
				}

				
			}
		},
		computed:{

		}
	}
</script>