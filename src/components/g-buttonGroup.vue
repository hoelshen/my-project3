<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>


<script>
export default {
    mounted(){
        // console.log(this.$el.children)
    }
}
</script>

<style lang='less'>
   .g-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .g-button{
            border-radius: 0;
        &:not(:first-child){
            border-left:none;
        }
        &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius:var(--border-radius);              
        }  
        &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius:var(--border-radius);
        }
        }
   }



</style>
