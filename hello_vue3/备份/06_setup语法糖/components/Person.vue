<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
    </div>
</template>

<script setup  lang='ts' name="Person">
    let name = '张三',age=23
</script>
<style scoped >
.person{
    background-color: #ccc;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>