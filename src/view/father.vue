<template>
    <div>
        <fuzujian :data1="value3"  :fatherByValue="fatherByValue"></fuzujian>
        <el-button  @click="clickButton" >父组件按钮</el-button>
        <p>12</p>
    </div>
</template>
<script>
import fuzujian from "../components/fuzujian";
export default {
    methods:{
        fatherByValue(childValue) {
            alert(childValue);
        },
        clickButton () {
            this.value3 = "父组件de值";
        },        
    },
    data(){
        return{
            value3:''
        }
    },
    components:{
        fuzujian
    }
}
</script>

