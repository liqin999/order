<template>
	<div>
		<form @submit.prevent="onsubmit()">
			<div>
				<label>用户名:</label>
				<input type="text" v-model="email" name="">
			</div>
			<div>
				<label>密码:</label>
				<input type="text" v-model="pass" name="">
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
					pass:this.pass
				}
				this.$axios.get("https://www.easy-mock.com/mock/5ae1a0ffe98e87389dadefb2/example/getlogin")
						   .then(res=>{
						   	console.log(res)
						   	// this.$router.push({
						   	// 	name:'adminLink'
						   	// })
						   })
			}
		},
		computed:{

		}
	}
</script>