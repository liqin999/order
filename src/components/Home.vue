<template>
  <div>
    <ul>
    	<li v-for="item in data1" :key="item.name">
    		名字: <span>{{item.name}}</span>;价格: <span>{{item.price}}</span>
    		<span
    		style="width: 60px;height: 20px;border: 1px solid #ddd;display: inline-block;text-align: center;cursor: pointer"
    		@click="addItem(item)"
    		>新增</span>
    	</li>
    </ul>

    <hr/>
    <h3>购物车：</h3>
	<ul>
		<li v-for="item,index in data2" :key="index">
			名字: <span>{{item.name}}</span>;
			数量: <span>
					 <span @click="decrease(item)">-</span>
			         {{item.num}}
			         <span @click="increase(item)">+</span>
		        </span>;
			价格: <span>{{item.price}}</span>
		</li>

	</ul>
	<div v-show="data2.length > 0">
		总价：{{total}}元
	</div>	

  </div>
</template>

<script>
export default {
  computed:{
  		//当数据是动态改变的时候，可以将此数据变成计算属性  数据影响视图的改变
  		total(){
  			let result = 0;
  			this.data2.forEach((item)=>{
  				result+=item.num*item.price
  			})
  			return result
  		}
  },
  data () {
    return {
     	data1:[
     		{
     			name:'1号杯子',
     			price:100
     		},{
                name:'2号杯子',
     			price:200
     		},{
     		    name:'3号杯子',
     			price:300
     		}
     	],
     	data2:[]
    }
  },
  methods:{
  	increase(item){//操作的是一个对象的形式。对象的简直对的唯一性质
  		item.num++
  	},
  	decrease(item){//对象是引用数据类型，当改变一个属性的值的时候，会同步更新数组的
  		item.num--
  	},
  	addItem(item){
  		var result = {
  			name:item.name,
  			num:1,
  			price:item.price
  		}
  		if(this.data2.length == 0){
  			this.data2.push(result)
  		}else{
  			let isHas =false;//是否存在
  			for(let i=0;i<this.data2.length;i++){
  				let temp = this.data2[i];
  				if(temp.name == item.name && temp.price == item.price){
  					temp.num++;
  					isHas = true
  				}
  			}
            
  			if(!isHas){
  				this.data2.push(result)
  			}

  			// let filerData = this.data2.filter((it)=>{
  			//   return it.name == item.name  &&  it.price == item.price
  		 //    })
  		 //    console.log(filerData)//vue数据驱动视图变化。 数组的filter

	  		// if(filerData && filerData.length > 0){
	  		// 		filerData[0].num++//找到每一项
	  		// }else{
	  		// 	this.data2.push(result)
	  		// }

  		}

  		//数组的过滤，重复的数量增加
  		



  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
