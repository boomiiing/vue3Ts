<template>
    <div class="person">
        <h1>Id:{{ person.id }}</h1>
        <h1>姓名:{{ person.name }}</h1>
        <h1>年龄:{{ person.age }}</h1>
        <ul v-for="(item,index) in persons" :key="index">
            <li v-for="(ele,indexs) in item" :key="indexs">{{ ele }}</li>
        </ul>
    </div>
</template>

<script lang='ts' setup  name="Person">
import { reactive,} from 'vue';
import {type personInterface} from '@/Types'
 
let person:personInterface = reactive({
    name:'张三',
    age:12,
    id:'3123',
})
let persons:Array<personInterface> = [
    {
        name:'张三',
    age:12,
    id:'3123',
    },
    {
        name:'李四',
    age:12,
    id:'3123',
    },
    {
        name:'王五',
    age:12,
    id:'3123',
    }
]
</script>
<style scoped >
.person{
    background-color: #ccc;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style> 