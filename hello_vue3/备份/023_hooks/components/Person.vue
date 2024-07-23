<template>
    <div class="person">
        <h1>当前数：{{ num }}</h1>
        <h2>称十倍：{{ bigSum }}</h2>
        <button @click="addOne">+1</button>
        <hr>
        <img v-for="(item,index) in dogs" :src="item" :key="index" alt="">
        <br>
        <button @click = "getAnother">再来一只小狗</button>
    </div>
</template>

<script lang='ts' setup  name="Person">
import useDog from '../hooks/useDog'
import useSum from '../hooks/useSum'

const {dogs,getAnother} = useDog()
const {num,bigSum,addOne} = useSum()
</script>
<style scoped >
.person{
    background-color: #ccc;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
img{
    height:200px;
    margin-right:15px
}
</style> 