<template>
    <div class="person">
     <h1>一辆{{car.brand}}汽车的价格是{{car.prise}}万</h1>
     <button @click="changePrise">修改汽车价格</button>
     <ul>
        <li v-for="item in game" :key="item.id">{{ item.name }}</li>
     </ul>
      <button @click="changeGame">修改第一个</button>
    </div>
</template>

<script setup  lang='ts' name="Person"> 
import { ref } from 'vue';
let car = ref({brand:'特斯拉',prise:24})
let game = ref([{id:123,name:'英雄联盟'},
            {id:124,name:'双人成形'},
            {id:125,name:'黑神话'}])
function changePrise(){
    car.value.prise+=1
}
function changeGame(){
    game.value[0].name='王者荣耀'
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