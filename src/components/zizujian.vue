<template>
    <el-button @click="changeFather" v-on:fatherValue="fatherValue">孙子组件按钮</el-button>
</template>
<script>
export default {
    props: {
        data2: ""
    },
    methods: {
        changeFather() {
            this.$emit("fatherValue", "这是孙子组件传给父组件的值");
        },
        fatherValue(childValue) {
            this.data2 = childValue;
        }
    },
    watch: {
        data2(Val) {
            alert("孙子组件接受:" + Val);
        }
    }
};
</script>
