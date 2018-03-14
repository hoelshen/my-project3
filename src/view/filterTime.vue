<template id="manage">
    <div>
        <p>filterTime</p>
        <p>   {{ date | moment('YYYY-MM-DD HH:mm:ss') }}   </p>
        <p>   {{ date | moment('YYYY-MM-DD HH:mm:ss') }}</p>
        <p> {{ date | moment("from", new Date('1987-11-04')) }} </p>
        <p> {{ date | moment("add", "7 days") }}</p>
        <p> {{ [ dateStr, "MM.DD.YYYY" ] | moment("YYYY-MM-DD HH:mm:ss") }} </p>
        {{ list | map(player => player.score) | sum  }}
        {{ list | max(player => player.score) | get('score') }}
        {{ [1,2,3] | map(function (n){ return n * 2; }) }}


        <transition name="fade">
            <p v-if="display">Vue.js</p>
        </transition>


        <!-- <transition-group tag="ul" name="fade">
             <li v-for="item in items" :key="item">{{ item }}</li>
        </transition-group> -->


        <!-- // <text-effect> -->
        <!-- //     <span v-for="(t, index) in message.split('')"  -->
                 <!-- :data-index="index" -->
                 <!-- :key="Math.random()">{{ t }}</span> -->
         <!-- </text-effect> -->
    </div>
</template>


<script>
export default {
    data(){
        return{
            date:20180309,
            dateStr:20180309,
            list: [{
                name: 'James, LeBron',
                score: 38
            },{
                name: 'Irving, Kyrie',
                score: 43
            },{
                name: 'Jefferson, Richard',
                score: 11
            }],
            display:true,
            items:[{
                num:1,
                age:12
            },{
                num:2,
                age:13
            },{
                num:3,
                age:14
            }],
            message: 'vue.js'
        }
    }
}
</script>


<style scoped>
.fade-enter-active, .fade-leave-active{
    transition:opacity  .5s
}
.fade-enter,  .fade-leave-to{
    opacity:0
}
.fade-move {
  transition: transform 1s;
}
</style>

