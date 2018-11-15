<template>
    <div>
        <input
        :value="value"
        @input="$emit('change', $event.target.value)"
      > {{ value }}
      <!-- <button @click="click"></button> -->
        <!-- <input
        :value="value"
        @input="handle()"
      >  -->
      
    </div>
</template>
<script>
export default {
        name:"aElement",
        data(){
            return{
            }
        },
        props: ["value"],
        model: {
            prop: 'value',
            event: 'change'
        },
        methods:{
            // click(){
            //     console.log('csc', this.value);
            //     this.$emit('change', this.value+2)
            // }
        }
}
</script>
<style>

</style>


