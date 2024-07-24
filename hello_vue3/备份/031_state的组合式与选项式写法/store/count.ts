import { defineStore } from "pinia";
export const useCountStore = defineStore('count',{
  actions:{
    increment(value:number){
      this.sum+=value
    }
  },
  state(){
    return {
      sum:8,
      school:'西安电子科技大学',
      address:'曲江'
    }
  },
  getters:{
    bigSum(state){
      return state.sum * 10
    }
  }
})