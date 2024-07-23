import { createRouter,createWebHistory} from "vue-router";
import News from "@/pages/news.vue"
import About from "@/pages/about.vue"
import FirstPage from "@/pages/firstPage.vue"
import Detail from "@/pages/detail.vue"
 const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/news',
      component:News,
      children:[
        {
          name:'detailPage',
          path:'detail/:title/:content',
          component:Detail,
          //第一种写法，将路由收到的所有params参数，作为props传给路由组件
          // props:true
          //第二种写法，函数写法，作为props传给路由组件
          props(route){
            return route.params
            // return route.query
          }
          //第三种写法，对象写法，可以自己决定写什么
          // props:{
          //   a:100,
          //   b:200
          // }
        }
      ]
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/firstPage',
      component:FirstPage
    }
  ]
})
export default router