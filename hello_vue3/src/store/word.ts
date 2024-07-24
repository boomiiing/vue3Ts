import { defineStore } from "pinia";
import { reactive } from "vue";
import { nanoid } from "nanoid";
import axios from 'axios';
//选项式
// export const useWordStore = defineStore('word',{
//   actions:{
//    async getAWord(){
//       let result = await axios.get('https://api.uomg.com/api/rand.qinghua')
//       let {data} = result
//      this.lowWord.unshift({ id:nanoid(),content:data.content})
//     }
//   },
//   state(){
//     return{
//       lowWord:JSON.parse(localStorage.getItem('lowWord') as string) || []
//     }
//   }
// })
//组合式
export const useWordStore = defineStore('word',()=>{
  const lowWord = reactive(JSON.parse(localStorage.getItem('lowWord') as string) || [])
   async function getAWord(){
      let result = await axios.get('https://api.uomg.com/api/rand.qinghua')
      let {data} = result
     lowWord.unshift({ id:nanoid(),content:data.content})
    }
  return {lowWord,getAWord}    
})