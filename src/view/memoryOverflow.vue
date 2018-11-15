<template>
   
<div id="app">
  <button
    v-if="showChoices"
    @click="hide"
  >Hide</button>
  <button
    v-if="!showChoices"
    @click="show"
  >Show</button>
  <div v-if="showChoices">
    <select id="choices-single-default"></select>
  </div>
</div>
</template>

<script>
 <link rel="stylesheet prefetch" href="https://joshuajohnson.co.uk/Choices/assets/styles/css/choices.min.css?version=3.0.3">
<script src="https://joshuajohnson.co.uk/Choices/assets/scripts/dist/choices.min.js?version=3.0.3"></script>

export default {
    
}
</script>
