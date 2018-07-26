<template >
		<div id="directive">
		  	<p>directives</p>
			<img v-my-lazy="img_url" />
			<myCarousel :items="items" :init=0 :dataNumber="dataNumber"></myCarousel> 
			<router-link to="/directive/test4">Go to test4</router-link>
			<div v-for="item in imageList" :key="item">
				<img src="../../static/img/橘猫.jpg" alt="默认图" v-image="item.url">
			</div>
		</div>
</template >



<script>
import myCarousel  from './Carousel.vue'

export default {
	data(){
		return {
			img_url:"../../static/img/橘猫.jpg",
			items:[],
			init:1,
			dataNumber:1,
			imageList:[
                {
                    url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-p10-plus.jpg"
                },
                {
                    url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-watch2-pro-banner.jpg"
                },
                {
                    url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/homepage/section4/home-s4-matebook-x.jpg"
                }
			]
		}
	},
	components:{
		myCarousel
	},
	methods:{

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
			inserted:function(el,binding){
				setTimeout(()=>el.setAttribute('src', binding.value), Math.random() * 1200)
			}
		}
	}
}
</script>
