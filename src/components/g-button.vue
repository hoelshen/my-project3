<template>
    <button v-on:click="say" class="gButton">Hi</button>  


</template>


<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        say(){
            console.log('hi')
        }
    },
    components:{
       
    }
}
</script>


<style>
    :root{
        --button-height:32px;
        --font-size:14px;
        --border-radius:4px;
        --color:#333;
        --border-color:#999;
        --border-color-hover:#666;
        --button-active-bg:#eee;
        --button-bg:white;
    }
    .gButton{
        font-size:var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border:1px solid var(--border-color);
    }
    .gButton:hover{
        border-color:var(--border-color-hover);

    }
    .gButton:active{
        background-color:var(--button-active-bg)
    }
</style>
