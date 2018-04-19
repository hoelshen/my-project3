<template>
  <div class="main-skeleton">
    <w-skeleton height="80px">123</w-skeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <w-skeleton height="300px"></w-skeleton>
        </div>
        <w-skeleton height="45px"></w-skeleton>
      </div>
      <div class="skeleton-bottom">
        <w-skeleton height="45px"></w-skeleton>
      </div>
    </div>
  </div>
</template>


<script>
    import  wSkeleton  from 'VvUI'

    export default {
        name: 'main.skeleton',
        data () {
            return {
                init: false
            }
        },
        components: {
           wSkeleton
        }
    }

</script>
  