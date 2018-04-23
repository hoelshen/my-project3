<template >
		<div id="directive">
		  <p>directives</p>
			<p></p>
			<img v-my-lazy="img_url" />
			<my-Carousel :items="items" :init=0  v-on:change="change"></my-Carousel>  
			<router-link to="/directive/test4">Go to test4</router-link>
		</div>
</template >


<script>
export default {
	data(){
		return {
			img_url:"../../static/img/橘猫.jpg",
			items:[],
			init:1,

		}
	},
	methods:{
		change(val){
			console.log('carousel change to:' + val);
		}
	},
	directives:{
		'my-lazy':{
			inserted:function(el,binding){
				  var body = document.body;
     			  var offsetTop = el.offsetTop;
     			  var parent = el.offsetParent;
				
				while (parent && parent.tagName != 'body') {
					offsetTop += parent.offsetTop;
					parent = parent.offsetParent;
				}
				
				if (body.scrollTop + body.clientHeight > offsetTop && body.scrollTop < offsetTop) {
					el.src = binding.value;
				} else {
					// 若暂未出现，则监听 window 的 scroll 事件 
					var scrollFn = function () {
						// 出现在区域内才赋值src，并取消事件监听
						if (body.scrollTop + body.clientHeight > offsetTop && body.scrollTop < offsetTop) {
							el.src = binding.value;
							window.removeEventListener('scroll', scrollFn)
						}
					}
					window.addEventListener('scroll', scrollFn)
				}
			}
		}
	}
}
</script>



<style scoped>

</style>