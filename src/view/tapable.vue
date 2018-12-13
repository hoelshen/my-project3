<template>
    
</template>
<script>
import $ from 'jquery';
export default {
    data(){
        return{

        }
    },
    methods(){
        class SyncHook{
            constructor(){
                this.hooks = [];
            }
            
            //订阅事件
            tap(name,fn){
                this.hooks.push(fn);
            }

            //发布
            call(){
                this.hooks.forEach(hook =>{ hook(...arguments)})
            }
        }
    }
}
</script>
