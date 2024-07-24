<template>
  <div class="backG">
    <button @click="getLowWord">获取一条Low话</button>
    <ul>
      <li v-for="item in wordStore.lowWord" :key="item.id">{{ item.content }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="LowTalk">
import axios from 'axios';
import { nanoid } from "nanoid";
import { useWordStore } from '@/store/word';
let wordStore = useWordStore()
async function getLowWord(){
  let result = await axios.get('https://api.uomg.com/api/rand.qinghua')
  let {data} = result
  console.log(data)
  lowWord.unshift({ id:nanoid(),content:data.content})
  console.log(lowWord)
}
</script>
<style  scoped>
.backG{
  background-color: rgb(21, 205, 221);
  border-radius: 15px;
  box-shadow: 0 0 10px;
  margin-top: 30px;
}
</style>
