<template>
  <div>
    <Person ref="person" :persons = 'persons'></Person>
  </div>
</template>

<script lang="ts" setup name="App">
import { reactive } from 'vue';
import Person from './components/Person.vue'
import {type personInterface} from './Types'

let persons = reactive([
    {
        name:'张三',
    age:12,
    id:'3123',
    },
    {
        name:'李四',
    age:12,
    id:'3123',
    },
    {
        name:'王五',
    age:12,
    id:'3123',
    }
])
</script>

<style>

</style>