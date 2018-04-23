 <template>
  <div id="app">
    <mainSkeleton v-if="!init"></mainSkeleton>
    <div v-else>
      <div class="body"></div>
    </div>
  </div>
</template>


<script>
    import mainSkeleton from './mainskeleton.vue'

        export default {
            name: 'app',
            data () {
                return {
                    init: false
                }
            },
            mounted () {
            //  这里模拟数据请求
                setTimeout(() => {
                    this.init = true
                }, 250)
            },
            components: {
               mainSkeleton
            }
        }
</script>