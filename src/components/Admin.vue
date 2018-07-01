<template>
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<!-- new pizza -->
			<app-new-pizaa></app-new-pizaa>	
		</div>


		<div class="col-sm-12 col-md-4">
			<!-- 品种       展示 -->
		</div>
	</div>
</template>
<script>	
   import NewPizza from "./NewPizza"
	export default {
		data(){
			return {

			}
		},
		methods:{

		},
		components:{
			'app-new-pizaa' : NewPizza
		}
	}
</script>