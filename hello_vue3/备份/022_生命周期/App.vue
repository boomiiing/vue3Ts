<template>
  <div>
    <Person v-if="isShow"></Person>
  </div>
</template>

<script lang="ts" setup name="App">
import { ref } from 'vue';
import Person from './components/Person.vue'
let isShow = ref(true)

</script>

<style>

</style>