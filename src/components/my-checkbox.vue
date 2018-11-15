<template >
    <!-- <input type="checkbox" 
            :checked="value" @change="$emit('balabala' , $event.target.checked)"> -->
    <select @change='emitChange($event.target.value)'>
        <template v-for='item in selectData'>
            <option :value='item.value'>{{ item.text }}</option>
        </template>
    </select>
</template>

<script>
export default {
        data(){
            return{
            }
        },
        props: {
            selectData:{
                type: Array
            }
        }, 
        methods:{
            emitChange(value){
                this.$emit('change', value);
            }
        },
        model: {
          prop: 'checked',
          event: 'balabala'
       },    
}
</script>
<style scoped>
</style>

