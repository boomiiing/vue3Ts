import { onMounted, ref } from 'vue';
import axios from 'axios'

export default function(){
let dogs = ref(['https://images.dog.ceo/breeds/pembroke/n02113023_6826.jpg'])
async function getAnother(){
    try{
        let response = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
        dogs.value.push(response.data.message)
    }catch(error) {
        alert(error)
    }
}
onMounted(()=>{
  getAnother()
})
return {dogs,getAnother}
}