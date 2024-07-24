<template>
  <div class="backG">
    <h1>当前和为：{{ sum }}</h1>
    <h2>学校：{{ school }},地址：{{ address }}</h2>
    <div style="display: flex;justify-content: space-around;">
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
  </div>
</template>
<script setup lang="ts"  name="count">
import { ref,reactive} from 'vue'
import { useCountStore } from '@/store/count';
import {storeToRefs} from "pinia"
let countStore = useCountStore()
let {sum,school,address} = storeToRefs(countStore)
let num = ref(1)
function add(){
  // 第一种修改方式
  // countStore.sum+=num.value
  // 第二种修改方式
  // countStore.$patch({
  //   sum: countStore.sum+num.value
  // })
  // 第三种修改方式
  countStore.increment(num.value)
}
function minus(){
  sum.value-=num.value
}
</script>
<style  scoped>
.backG{
  background-color: orange;
  border-radius: 15px;
  box-shadow: 0 0 10px;
}
h1{
  text-align: center;
}
button{
  width: 50px;
}
</style>
