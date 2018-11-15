<template>
    <div>
        <el-button @click="changeFather" >子组件按钮</el-button>  
        <zizujian :data2="data1" :fatherValue="fatherValue">这是孙子组件</zizujian>
    </div>
</template>
<script>
import zizujian from "./zizujian";
export default {
    data () {
        return {
            // value4: ""
        };
    },
    props: {
        data1: ""
    },
    methods: {
        changeFather() {
            this.$emit("fatherByValue", "这是传给父组件的值");
            this.data1 = "这是传给子组件的值";
        },
        fatherValue(childValue) {
            this.$emit("fatherByValue", childValue);
        }
    },
    watch: {
        // data1 (Val) {
        //     // alert("index组件传给父组件的值改变了" + Val);
        //     this.value4 = Val;
        //     this.$emit("fatherByValue", "这是传给父组件的值");
        // },
        // value4 (Val) {
        //     alert("父组件传给孙子组件的值改变了" + Val);
        // }
    },
    components: {
        zizujian
    }
};
</script>

