<template >
		<div id="test1">
		  <p>test1</p>
		  <p>{{msg}}</p>
		  <input :class="classObj" type="radio" v-model="picked" value="1"> 
		  <input type="radio" v-model="picked" value="2">


		  <select :class="{active: isActive}" v-model="multiSelected" multiple>
				<option value="a">a</option>
				<option value="b">b</option>
				<option value="c">c</option>
		  </select>
		  
		  <div :style="{ marginTop: '5px', 'margin-bottom': '10px' , 'width':'100px', 'height':'100px', 'border':'1px solid red'}">
			<div :style="styleObj"></div>		
			<div :class="classList"></div> 
			<div :class="[classOne, 'classTwo']"></div>  <!-- // 可以用表达式来声明数组，直接使用字符串需要用单引号扩起来 -->
			<div :class="[classObj, 'classTwo']"></div> 	<!-- // 数组中包含对象 -->
			<div :class="[isActive ? classOne : 'classTwo']"></div> <!-- // 还可以使用三元表达式 -->
		  </div>
		
		</div>
</template >

<script>


export default {
	name:'myTest1',
	data(){
		return{
			msg:'213123',
			picked:'',
			multiSelected: [],
			isActive:true,
			classObj:{
				addRed:true
			},
			styleObj:{
				marginTop:'5px',
				'margin-bottom':'10px'
			}
		}

	}
}
</script>



<style scoped>
.active{
	width: 200px;
	height: 200px;
	border:1px solid  red

}
.addRed{
	border:1px solid red;
}
</style>




