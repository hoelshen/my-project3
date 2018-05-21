<template>
      <!-- <div class="block">
    <span class="demonstration">默认</span>
    {{value6}}
    <el-date-picker
      v-model="value6"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div> -->



   <div class="block">
    <!-- <el-date-picker
      v-model="value6"
      type="date"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      cleraable
      size=mini>
    </el-date-picker> -->

    <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      unlink-panels
      picker-options
      value-format="yyyy-MM-dd"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      default-value=new Date()
      cleraable
      size=large>
    </el-date-picker>
  </div>



</template>
<script>
    export default {
    data() {
      return {
        pickerOptions2: {
        
        },
        value6: '',
        value7: ''
      };
    },
    created(){
        console.log()
    },
    methods:{
        sjh(){
            console.log('ok')
            return 2018
        }
    }
  };
</script>
<style lang="less">
@import url("//unpkg.com/element-ui@2.3.8/lib/theme-chalk/index.css");
</style>

