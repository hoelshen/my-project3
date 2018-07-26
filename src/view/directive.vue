<template >
		<div id="directive">
		  	<p>directives</p>
			<img v-my-lazy="img_url" />
			<myCarousel :items="items" :init=0 :dataNumber="dataNumber"></myCarousel> 
			<router-link to="/directive/test4">Go to test4</router-link>
			<div v-for="item in imageList" :key="item.id" class="imgStyle">
				<img class="imgStyleIndex" src="../../static/img/橘猫.jpg" alt="默认图" v-image="item.url">
			</div>
			<div :class="client"></div>
		</div>
</template >



<script>
import myCarousel  from './Carousel.vue'

export default {
	data(){
		return {
			screenWidth:document.body.clientWidth,
			img_url:"../../static/img/橘猫.jpg",
			items:[],
			init:1,
			dataNumber:1,
			imageList:[
                {	
					id:1,
                    url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-p10-plus.jpg"
                },
                {	
					id:2,
                    url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-watch2-pro-banner.jpg"
                },
                {	
					id:3,
                    url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/homepage/section4/home-s4-matebook-x.jpg"
                }
			],
			client:{
				clientHeight:"600px",
				clientWidth:"600px",
			}
		}
	},
	components:{
		myCarousel
	},
	methods:{

	},
	mounted(){
		const that = this;
        		
			//window.onresize = () =>{
			//return (()=>{
			//	window.screenWidth = document.body.clientWidth
			//	that.screenWidth = window.screenWidth
			//	})()
			//} 
		

		    // 动态设置背景图的高度为浏览器可视区域高度
    
			// 首先在Virtual DOM渲染数据时，设置下背景图的高度．
			console.log(document.documentElement.clientHeight)
			//this.clientHeight.height = `${document.documentElement.clientHeight}px`;
			// 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
			
			window.onresize = function temp() {
				that.clientHeight = `${document.documentElement.clientHeight}px`;
			};
	},
	watch:{
		screenWidth(val){
			if(!this.timer){
				this.screenWidth = val;
				this.timer = true ;
				let that = this ;
				setTimeout(()=>{
					that.timer = false
				}, 400)
			}
		}
	},
	directives:{
		'my-lazy':{
			inserted:function(el,binding){
					var body = document.body;
					var offsetTop = el.offsetTop;
					var parent = el.offsetParent;

					console.log(el);

				
					while (parent && parent.tagName != 'body') {
						offsetTop += parent.offsetTop;
						parent = parent.offsetParent;
						console.log(parent);
						console.log(offsetTop)
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
		},
		'image':{
			inserted:function(el,binding,VNode){
				console.log(VNode)
				console.log(el)
				console.log(binding.value)
				setTimeout(()=>el.setAttribute('src', binding.value), Math.random() * 1200)
			},
			unbind:function(){
				console.log('ok')
			}
		},
		'resize':{
			inserted:function(el,binding,VNode){
				//指令的绑定值，是一个function函数
				const callback = binding.value

				//延时执行函数的毫秒数
				const debounce = binding.arg || 200

				//禁止执行与事件关联的默认动作
				const options = binding.options || { passive: true }

				let debounceTimeout = null
				const onResize = () => {
					clearTimeout(debounceTimeout)
					debounceTimeout = setTimeout(callback, debounce, options)
				}

				//监听窗口缩放
				window.addEventListener('resize', onResize, options)

				//存储监听窗口缩放事件的参数，方便在unbind钩子函数中解除事件绑定的时候使用到
				el._onResize = {
					callback,
					options
				}

				if (!binding.modifiers || !binding.modifiers.quiet) {
					onResize()
				}

			},
			unbind:function(el,binding){
				const { callback, options } = el._onResize

				window.removeEventListener('resize', callback, options)
				delete el._onResize

			}





		}
	}
}
</script>

<style lang="less" scoped>
	:foor{
		font-size: 10px;
	}
	.imgStyle{
		width: 20rem;
		min-height: 20rem;
		margin: 0 auto;
		padding: 0;
	}
	.imgStyleIndex{
		max-width: 100%;
		max-height: 100%;
	}
	



</style>
