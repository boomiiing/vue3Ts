<template>
    <div class="person">
        <h1>watch监听属性的第二种情况【ref】对象类型</h1>
        <h2>名称：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名称</button>
    <button @click="changeAge">加一</button>
    <button @click="changeAll">全部修改</button>
    </div>
</template>

<script setup  lang='ts' name="Person"> 
import {ref,watch} from 'vue';
 let person = ref({name:'张三',age:18})
function changeAge(){
    person.value.age +=1
}
function changeName(){
    person.value.name +='~'
}
function changeAll(){
    person.value = {name:'李四',age:22}
}
watch(person,(newValue,oldValue)=>{
    console.log(newValue,oldValue)
},{deep:true,immediate:true})
</script>
<style scoped >
.person{
    background-color: #ccc;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style> 