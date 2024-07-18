<template>
    <div class="person">
        <h2>watch监听属性的第一种情况【ref】:{{num}}</h2>
    <button @click="changeNum">加一</button>
    </div>
</template>

<script setup  lang='ts' name="Person"> 
import {ref,watch} from 'vue';
    let num =ref(1)
   let stopWatch= watch(num,(newVal,oldVal)=>{
        console.log(newVal,oldVal)
        if(newVal>10){
            stopWatch()
        }
    })
   function changeNum(){
    num.value +=1
   }
</script>
<style scoped >
.person{
    background-color: #ccc;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style> 