<template>
    <div class="mainbox">
        <div style="width:500px">
            <ul>
                <li v-for = '(item,index) in obj' :key="index">
                    <router-link to="/news/detail">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>
        <div style="width:500px">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts" name="News">
import {reactive} from "vue"
const obj = reactive([
    {
        title:'第一',
        content:'我是第一',
        link:''
    },
    {
        title:'第二',
        content:'我是第二'
    },
    {
        title:'第三',
        content:'我是第三'
    },
])
</script>
<style  scoped>
.mainbox{
    padding:30px;
    display: flex;
    height: 90%;
}
</style>
