<template>
  <div style="height: 90vh;overflow: hidden;">
    <h2 class="title">vue 路由</h2>
    <div class="navigate">
      <Router-link to="/firstPage">首页</Router-link>
      <Router-link to="/news">新闻</Router-link>
      <Router-link to="/about">关于</Router-link>
    </div>
    <div class="main">
        <Router-view></Router-view>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import { ref } from 'vue';
import {RouterLink,RouterView} from 'vue-router'
</script>

<style scoped>
    .title{
      height: 100px;
      background-color: #ccc;
      text-align: center;
      line-height: 100px;
      border-radius: 15px;
    }
    .navigate{
      height: 100px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .navigate a{
      height: 50px;
      width: 100px;
      background-color:#27abe9;
      text-align: center;
      line-height: 50px;
      color:#fff;
      border-radius: 10px;
      text-decoration:none
    }
    .main{
      height: calc(100% - 300px);
      border:1px solid #000;
      border-radius: 15px;
    }
</style>