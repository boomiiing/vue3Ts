<template>
    <div class="person">
       姓： <input type="text" name="" id="" v-model="firstName">
       名： <input type="text" name="" id="" v-model="lastName">
        <h2>{{name}}</h2>
    <button @click="changeName">修改名称为Lee_hot</button>
    </div>
</template>

<script setup  lang='ts' name="Person"> 
import { reactive,ref,toRefs,toRef, computed } from 'vue';
let firstName = ref('')
let lastName = ref('')
// 只读计算属性
// let name = computed(()=>firstName.value + lastName.value)
   let name = computed({
    get(){
        return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'_'+lastName.value
    },
    set(val){
        // firstName.value=val.split('_')[0]
        // lastName.value=val.split('_')[1]
        const [str1,str2]=val.split('_')
        firstName.value = str1
        lastName.value = str2
    }
   })
   function changeName(){
    name.value='Lee_hot'
   }
</script>
<style scoped >
.person{
    background-color: #ccc;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style> 