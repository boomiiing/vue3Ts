<template>
  <div class="backG">
    <button @click="getLowWord">获取一条Low话</button>
    <ul>
      <li v-for="item in wordStore.lowWord" :key="item.id">{{ item.content }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="LowTalk">
import { useWordStore } from '@/store/word';
let wordStore = useWordStore()
wordStore.$subscribe((mutate,state)=>{
  console.log(mutate,state)
  localStorage.setItem('lowWord',JSON.stringify(state.lowWord))
})
function getLowWord(){
  wordStore.getAWord()
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
