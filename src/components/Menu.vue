<template>
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<table class="table">
				<thead class="thead-default">
					<th>
						<td>尺寸</td>
						<td>价格</td>
						<td>加入</td>
					</th>
				</thead>
				<tbody v-for="item in getMenuItems" :key="item.name">
					<tr>
						<td><strong>{{item.name}}</strong></td>	
					</tr>
					<tr v-for="option in item.options" :key="item.size">
						<td>{{option.size}}</td>
						<td>{{option.price}}</td>
						<td>
							<button 
							class="btn btn-sm btn-outline-success"
							@click="addToBasket(item.name,option)"
							>
							+</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>


		<!-- 购物车 -->
		<div class="col-sm-12 col-md-4" v-show="baskets.length>0">
		      <table class="table" >
		        <thead class="thead-default">
		          <tr>
		            <th>数量</th>
		            <th>品种</th>
		            <th>价格</th>
		          </tr>
		        </thead>
		        <tbody v-for="basket in baskets" :key="basket.size">
		          <tr>
		            <td>
		              <button 
					  @click="decreaseFn(basket)"
		              class="btn btn-sm">-</button>

		              <span>{{basket.num}}</span>

		              <button 
					 @click="increaseFn(basket)"
		              class="btn btn-sm">+</button>
		            </td>
		            <td>{{basket.name}}{{basket.size}}寸</td>
		            <td>{{basket.price}}</td>
		          </tr>
		        </tbody>
		      </table>
		      <p>总价: </p>
		      <button class="btn btn-success btn-block">提交</button>
       </div>

	</div>
</template>
<script>
	export default{
		data(){
			return{
				  baskets:[//购物车中的商品
				  	// {
				  	// 	name:'榴莲pizza',
				  	// 	size:12,
				  	// 	num:1,
				  	// 	price:38
				  	// }
				  ],
				  getMenuItems:{
		          1: {
		            'name': '榴莲pizza',
		            'description': '这是喜欢吃榴莲朋友的最佳选择',
		            'options': [{
		              'size': 9,
		              'price': 38
		            }, {
		              'size': 12,
		              'price': 48
		            }]
		          },
		          2: {
		            'name': '芝士pizza',
		            'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
		            'options': [{
		              'size': 9,
		              'price': 58
		            }, {
		              'size': 12,
		              'price': 68
		            }]
		          },
		          3: {
		            'name': '夏威夷pizza',
		            'description': '众多人的默认选择',
		            'options': [{
		              'size': 9,
		              'price': 36
		            }, {
		              'size': 12,
		              'price': 46
		            }]
		          }
		        }
			}
		},
		methods:{
			//实现将商品加入到购物车中
			addToBasket(name,option){
				console.log()
				let basket={
					name,
					num:1,
				  	price:option.price,
				  	size:option.size
				}
				this.baskets.push(basket)
			},
			increaseFn(item){//vue中数据驱动视图，数据发生变化的时候，视图也会变化
				//对象是引用类型，是值的变化
				item.num++;
  				console.log(item)

			},
			decreaseFn(item){
				item.num--;
				if(item.num == 0){
					item.num =0
				}
				console.log(item)
			}
		},
		mounted(){

		}
	}
</script>
<style>
	
</style>