<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名称</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="getTel">电话</button>
    </div>
</template>
<script>
    export default{
        name:'Person',
        setup(){
            //setup的执行时机早于createBefore，因此在vue2中的data中可以读取setup中的属性，但setup中不可以读取data中的属性
            //vue3弱化了this的使用，在setup中this为undefined
            //此时的数据都不是响应式的
            let name='张三',
                age=23,
                tel='13888888888'
            function getTel(){
                alert(tel)
            }
            function changeName(){
                name='zhang_san'
            }
            function changeAge(){
                age+=1
            }

            return{
                name,age,tel,getTel,changeAge,changeName
            }
        }
    }
</script>
<style scoped>
.person{
    background-color: #ccc;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>