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