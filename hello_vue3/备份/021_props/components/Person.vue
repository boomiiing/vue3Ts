<template>
    <div class="person">
        <ul v-for="(item,index) in person.persons" :key="index">
            <li v-for="(ele,indexs) in item" :key="indexs">{{ ele }}</li>
        </ul>
    </div>
</template>

<script lang='ts' setup  name="Person">
import { defineProps, withDefaults} from 'vue';
import { type personInterface } from '../Types';
//只接受list
// let person = defineProps(['persons'])
//接受list + 限制类型
// let person = defineProps<{persons:Array<personInterface>}>()
//接受list + 限制类型 + 默认值
let person =  withDefaults(defineProps<{persons:Array<personInterface>}>(),{
    persons:() => [ {
        name:'ll',
        age:26,
        id:'08',
        },]
})

</script>
<style scoped >
.person{
    background-color: #ccc;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style> 