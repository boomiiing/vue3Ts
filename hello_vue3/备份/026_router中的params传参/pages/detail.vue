<template>
  <div>
    <h1>{{ params.title }}</h1>
    <p>{{ params.content }}</p>
  </div>
</template>
<script setup lang="ts" name="Detail">
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
let detailInfo = useRoute()
let {params} = toRefs(detailInfo)
</script>
<style  scoped>

</style>
