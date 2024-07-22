<template>
    <div class="person">
        <h1>当前数：{{ num }}</h1>
        <button @click="addOne">+1</button>
    </div>
</template>

<script lang='ts' setup  name="Person">
import { onBeforeUnmount, onUnmounted, onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';

let num = ref(1)
function addOne(){
    num.value+=1
}
onBeforeMount(()=>{
    console.log('挂载前')
})
onMounted(()=>{
    console.log('挂载后')
})
onBeforeUpdate(()=>{
    console.log('更新前')
})
onUpdated(()=>{
    console.log('更新后')
})
onUnmounted(()=>{
  console.log('卸载')
})
onBeforeUnmount(()=>{
  console.log('卸载前')
})
</script>
<style scoped >
.person{
    background-color: #ccc;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style> 