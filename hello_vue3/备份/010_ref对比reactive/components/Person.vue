<template>
    <div class="person">
     <h1>一辆{{car.brand}}汽车的价格是{{car.prise}}万</h1>
     <button @click="changePrise">修改汽车价格</button>
     <button @click="changeBrand">修改汽车品牌</button>
     <button @click="changeCar">修改汽车</button>
     <hr>   
     <h2>{{ num }}</h2>
     <button @click="sum">加1</button>
    </div>
</template>

<script setup  lang='ts' name="Person"> 
import { reactive, ref } from 'vue';
let car = reactive({brand:'特斯拉',prise:24})
let num = ref(0)
function changePrise(){
    car.prise+=1
}
function changeBrand(){
    car.brand = '奥迪'
}
function changeCar(){
    // car={brand:'奔驰',prise:25} //错误写法，页面不更新
    // car=reactive({brand:'奔驰',prise:25})//错误写法，页面不更新
    car = Object.assign(car,{brand:'奔驰',prise:25})
}
function sum(){
    num.value+=1
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