<template>
  <div>
    <h1>{{ detailInfo.query.title }}</h1>
    <p>{{ detailInfo.query.content }}</p>
  </div>
</template>
<script setup lang="ts" name="Detail">
import { useRoute } from 'vue-router';
let detailInfo = useRoute()
</script>
<style  scoped>

</style>
