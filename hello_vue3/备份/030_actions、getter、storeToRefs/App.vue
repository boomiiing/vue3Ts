<template>
    <div class="mainBox">
      <Count></Count>
      <LowTalk></LowTalk>
    </div>
</template>
<script setup lang="ts" name="App">
import Count from './compoents/count.vue';
import LowTalk from './compoents/lowTalk.vue';

</script>
<style  scoped>
.mainBox{
  display: flex;
  width: 500px;
  flex-direction: column;
}
</style>
