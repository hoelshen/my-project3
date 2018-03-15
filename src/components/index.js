import myBodyer  from '../components/myBodyer.vue';
import myHeader  from '../components/myHeader.vue';
import myFooter from '../components/myFooter.vue';
import myCarousel from '../components/myCarousel.vue';
import myA from '../view/myA.vue';
import myB from '../view/myB.vue';
import myC from '../view/myC.vue';



export  default{
    install(Vue,option){
        Vue.component(myHeader.name,myHeader)
        Vue.component(myFooter.name,myFooter)
        Vue.component(myBodyer.name,myBodyer)
        Vue.component(myCarousel.name,myCarousel)
        Vue.component(myA.name,myA)
        Vue.component(myB.name,myB)
        Vue.component(myC.name,myC)
        
        Vue.component('text-effect', {
            template: '<transition-group :css="false" class="fx" tag="div" mode="in-out" \
              @before-enter="beforeEnter" \
              @enter="enter" \
              @before-leave="beforeLeave" \
              @leave="leave"> \
              <slot></slot> \
            </transition-group>',
            methods: {
              beforeEnter: function (el) {
                const index = parseInt(el.dataset.index);
                // 第三方JS动画库，Velocity.js
                Velocity(el, { 
                 opacity: 0, 
                  translateY: index % 2 == 0 ? '-80%' : '80%',
                  rotateZ: 90
                });
              },
              enter: function (el, done) {
                const index = parseInt(el.dataset.index);
                Velocity(
                  el, 
                  { translateY: 0, opacity: 1, rotateZ: 0 }, 
                  { 
                    duration: 700, 
                    easing: 'easeOutElastic', 
                    delay: index * 80, 
                    complete: done // 动画完成后才执行下一过程
                  }
                )
              },
              beforeLeave: function (el) {
                // 将元素设置为绝对定位，不占原先的位置，避免就变化的元素挤到后面去
                el.style.position = 'absolute';
                var prev = el.previousSibling, left = 0;
                while (prev) {
                  left += prev.offsetWidth;
                  prev = prev.previousSibling;
                }
                el.style.left = left + 'px';
              },
              leave: function (el, done) {
                const index = parseInt(el.dataset.index);
                Velocity(
                  el, 
                  { translateY: index % 2 == 0 ? '80%' : '-80%', opacity: 0, rotateZ: index % 2 == 0 ? -25 : 25 }, 
                  { duration: 500, easing: 'easeOutExpo', delay: index * 80, complete: done }
                );
              }
            }
          })
        
    }
}




















