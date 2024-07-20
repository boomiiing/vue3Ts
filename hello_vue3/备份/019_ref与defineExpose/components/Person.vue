<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="city">北京</h2>
        <h2>西安</h2>
    <button @click="getH2">获取dom</button>
    </div>
</template>

<script lang='ts' setup  name="Person"> 
import {watch,ref, watchEffect} from 'vue';

let city = ref()
let b = ref(1)
let a = ref(2)

function getH2(){
    console.log(city.value)
}
  defineExpose({a,b,city})
</script>
<style scoped >
.person{
    background-color: #ccc;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style> 