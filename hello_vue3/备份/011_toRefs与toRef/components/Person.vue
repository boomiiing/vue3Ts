<template>
    <div class="person">
     <h1>名称：{{ person.name }}</h1>
     <h2>年龄：{{ nl }}</h2>
     <h1>年龄：{{ person.age }}</h1>
     <button @click="changeName">修改名称</button>
     <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script setup  lang='ts' name="Person"> 
import { reactive,toRefs,toRef } from 'vue';
let person = reactive({
    name:'张三',
    age:18
})
let {name,age} = toRefs(person)
let nl = toRef(person,'age')
function changeName(){
    name.value +='~'
}
function changeAge(){
    age.value+=1
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