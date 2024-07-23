<template>
    <div class="mainbox">
        <div style="width:500px">
            <ul>
                <li v-for = '(item,index) in obj' :key="index">
                    <!-- 第一种写法 -->
                    <!-- <router-link :to="`/news/detail/${item.title}/${item.content}`">{{ item.title }}</router-link> -->
                     <!-- 第二种写法 -->
                      <button @click="getDetail(item)">详情</button>
                    <router-link :to="{
                        // path:'/news/detail',
                        name:'detailPage',
                        params:{
                            title:item.title,
                            content:item.content,
                        }
                    }">{{ item.title }}</router-link>
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
import { useRouter } from "vue-router";
const router = useRouter()
interface detailInfo{
    title:string,
    content:string
}
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
function getDetail(item:detailInfo){
    router.push({
                        name:'detailPage',
                        params:{
                            title:item.title,
                            content:item.content,
                        }
                    }
                    )
}
</script>
<style  scoped>
.mainbox{
    padding:30px;
    display: flex;
    height: 90%;
}
</style>
