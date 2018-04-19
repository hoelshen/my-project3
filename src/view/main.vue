<template>
  <div id="app">
    <mainSkeleton v-if="!init"></mainSkeleton>
    <div v-else>
      <div class="body"></div>
    </div>
  </div>
</template>


<script>
    import mainSkeleton from './main.skeleton.vue'
    export default {
        name: 'app',
        data () {
            return {
                init: false
            }
        },
        mounted () {
        },
        components: {
           mainSkeleton
        }
    }

</script>
  