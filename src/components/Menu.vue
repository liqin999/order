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
		<div class="col-sm-12 col-md-4" >
			  <h2>购物车商品</h2>
		      <table class="table" v-show="baskets.length>0">
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
		      <div v-show="baskets.length>0">
		      	<p>总价: {{total}}元</p>
		        <button class="btn btn-success btn-block">提交</button>
		      </div>	
		      
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
		computed:{
			total(){//商品的总价是根据数量和单价的乘积的累加 如果一个值是有赖于另外的值的改变，从而动态改变的，首先考虑动态属性
				//循环进行赋值，元素进行循环赋值
				let result = 0;
				this.baskets.forEach((item,index)=>{
					result+=item.num * item.price
				})
				return result;

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

				//避免重复的添加的，相同的时候，仅仅让数量进行增加
				let tempAry = this.baskets.filter(item=>{
					return item.name == name && item.size == option.size
				})

				console.log(tempAry)
				if(tempAry.length >0){
					tempAry[0].num++
				}else{
					this.baskets.push(basket)
				}
				
			},
			increaseFn(item){//vue中数据驱动视图，数据发生变化的时候，视图也会变化
				//对象是引用类型，是值的变化
				item.num++;
  				console.log(item)

			},
			decreaseFn(item){
				 
				if(item.num > 1){
				    item.num--;
				}else{
					this.removeItem(item);
				}
				console.log(item)
			},
			removeItem(item){
				this.baskets.splice(this.baskets.indexOf(item),1)
			}
		},
		mounted(){

		}
	}
</script>
<style>
	
</style>