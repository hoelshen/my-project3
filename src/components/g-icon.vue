<template>
     <svg v-if="icon" class="icon"><use :xlink:href="`#i-${icon}`"></use></svg> 
</template>

<script>
export default{
    name:'',
    props:{
        "icon":{},
    },
    data(){
        return{
            

        }
    }
}   

</script>


<style>

</style>
