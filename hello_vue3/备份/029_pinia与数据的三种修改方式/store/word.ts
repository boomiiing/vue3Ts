import { defineStore } from "pinia";
export const useWordStore = defineStore('word',{
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