<template>
    <div class="person">
        <h1>watch监听属性的第五种情况,数组</h1>
        <h2>名称：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>车子：{{ person.car.c1 }},{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名称</button>
    <button @click="changeAge">加一</button>
    <button @click="changeAll">全部修改</button>
    <button @click="changeC1">修改车1</button>
    <button @click="changeC2">修改车2</button>
    <button @click="changeCar">全部修改</button>
                                    
    </div>
</template>

<script setup  lang='ts' name="Person"> 
import {reactive,watch} from 'vue';
 let person = reactive({
    name:'张三',
    age:18,
    car:{
        c1:'小米',c2:'特斯拉'
    }})
function changeAge(){
    person.age +=1
}
function changeName(){
    person.name +='~'
}
function changeAll(){
    Object.assign(person, {name:'李四',age:22})
}
function changeC1(){
    person.car.c1='gtr'
}
function changeC2(){
    person.car.c2='保时捷'

}
function changeCar(){
    person.car={c1:'大众cc',c2:'劳斯莱斯'}
}
watch([()=>person.car.c1,()=>person.name],(newValue,oldValue)=>{
    console.log(newValue,oldValue)
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