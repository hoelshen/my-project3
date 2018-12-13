<template>

    
</template>

<script>
import $ from 'jquery';
export default {
    data(){
        return{

        }
    },
    created(){
        const popup = window.open("127.0.0.1:8082");
        popup.postMessage("this is a message", "https://127.0.0.1:8002");


        window.addEventListener("message", receiveMessage, false);

        function receiveMessage(event){
            if(event.origin !== "https://127.0.0.1:8002") return;
            console.log(event);
            //event.source  是我们通过window.open打开的弹出页面popup
            //event.data是popup发送给当前页面的消息 "hi there yourself"
        }
    }
}
</script>

<style lang="less">
    
</style>
