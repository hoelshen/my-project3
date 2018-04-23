<template>
  <div id="app">

   <router-view></router-view>
  </div>
    <!-- <div class="main-skeleton">
      <w-skeleton height="80px"></w-skeleton>
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
    </div> -->
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
