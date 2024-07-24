import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import axios from 'axios';
export const useWordStore = defineStore('word',{
  actions:{
   async getAWord(){
      let result = await axios.get('https://api.uomg.com/api/rand.qinghua')
      let {data} = result
     this.lowWord.unshift({ id:nanoid(),content:data.content})
    }
  },
  state(){
    return{
      lowWord:[
        {
          id:'1',
          content:'asdasdasdasd'
        },
        {
          id:'2',
          content:'撒大声地发生的地方'
        }
      ]
    }
  }
})