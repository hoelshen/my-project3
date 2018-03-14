<template >
		<div id="editor">
		  <p>computed</p>
			<input type="password" v-model="password"><br>
			<input type="password" v-model="repeatPwd"><br>
	    <input type="phone" v-model="phone"><br>


			<button :class="[canSubmit ? 'active' : 'unactive']" @click="submit">提交</button><br>

			<input type="number" v-model="yuan" placehoder="请输入金额，单位为元" /><br>
			元: {{ yuan }}
			分: {{ cents }}
			<br>
			<input  type="number"  v-model="username"  :style="{'width':'100px', 'height':'100px', 'border':'1px solid red'}"/><br>
			
			<div>{{ msg }}</div>
			<div v-once>{{ msg }}</div>
			<div v-if="myDir" v-my-directive>{{ msg }}</div>
		</div>
</template >


<script>
export default {
	data(){
		return{
			username:'',
			password:'',
			repeatPwd:'',
			phone:'',
			cents:100,
			username:'',
			item:{
				name:'vue.js',
				version:'1.0'
			},
			msg:'changed',
			myDir:'true'
		}

	},
	computed:{
		canSubmit:function(){
			return this.username  && this.password  && this.repeatPwd && this.phone
		},
		yuan:{
			set:function(val){
				this.cents = parseInt(val *100);
			},
			get:function(val){
					return this.cents  / 100;
			}
		}
	},
	methods: {
			submit: function () {
				if (!this.canSubmit) {
					alert('信息不全')
					return;
				}
				alert('提交')
			}
		},
	watch:{
			username:{
				handler:function(val,oldVal){
				console.log(val);
				},
				immediate:true
			},
			item:{
				handler:function(val,oldVal){
					console.log(val);
				},
				deep:true
			}	
	},
	directives: {
		'my-directive':{
			    bind: function(el, binding, vnode, oldVnode) {
						console.log('bind');
					},
					inserted: function(el, binding, vnode, oldVnode) {
						console.log('inserted');
					},
					update: function(el, binding, vnode, oldVnode) {
						console.log('update');
					},
					componentUpdated: function(el, binding, vnode, oldVnode) {
						console.log('componentUpdated');
					},
					unbind: function(el, binding, vnode, oldVnode) {
						console.log('unbind');
					},
		}
	}
}
</script>



<style scoped>
.active{
	border:1px solid red;
	width:100px;
	height:100px;

}
.oldVal{
	border:1px solid red;
}
</style>