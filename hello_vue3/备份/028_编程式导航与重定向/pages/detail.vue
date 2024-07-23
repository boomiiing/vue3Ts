<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>
<script setup lang="ts" name="Detail">
defineProps(['title','content'])
</script>
<style  scoped>

</style>
 