import { ref ,onMounted, computed} from 'vue';

export default function(){
let num = ref(1)
let bigSum = computed(()=>{
  return num.value*10
})
function addOne(){
    num.value+=1
}
onMounted(()=>{
  addOne()
})
return {num,addOne,bigSum}
}