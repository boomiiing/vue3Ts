<template>
  <div>
    <button @click="getPersonInfo">获取Person的参数</button>
    <Person ref="person"></Person>

  </div>
</template>


<script lang="ts" setup name="App">
  import { ref } from 'vue';
import Person from './components/Person.vue'
  let person = ref()
  function getPersonInfo(){
    console.log(person.value.a,person.value.b,person.value.city)
  }

</script>

<style>

</style>