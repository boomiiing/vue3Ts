<template>
    <div class="person">
        <h1>当水位大于80，或水温大与60，预警</h1>
        <h2>水位：{{ height }}</h2>
        <h2>水温：{{ temp }}</h2>
    <button @click="changeHeight">修改水位</button>
    <button @click="changeTemp">修改水温</button>
    </div>
</template>

<script setup  lang='ts' name="Person"> 
import {watch,ref, watchEffect} from 'vue';
 let height = ref(10)
 let temp = ref(10)

function changeHeight(){
    height.value +=10
}
function changeTemp(){
    temp.value +=10
}

// watch([height,temp],(value)=>{
//     let [cutHeight,cutTemp] = value
//     if(cutHeight>=80||cutTemp>=60){
//         console.log('完犊子')
//     }
// })

watchEffect(()=>{
    if(height.value>=80||temp.value>=60){
        console.log('完犊子')
    }
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