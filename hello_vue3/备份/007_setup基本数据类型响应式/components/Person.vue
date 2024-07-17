<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名称</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script setup  lang='ts' name="Person">
    import { ref } from 'vue';
    let name = ref('张三'),
        age = ref(23)
    function changeName(){
        name.value='zhang_san'
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