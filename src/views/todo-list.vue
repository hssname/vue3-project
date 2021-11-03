<template>
    <div class="todo-list">
        <div>
            <label>新增待办</label>
            <input v-model="state.todo" @keyup.enter="handleAddTodo">
        </div>
    </div>
</template>

<script lang="ts">
    import { reactive, computed } from 'vue'
    import { useRouter } from 'vue-router'
    export default {
        name: "todo-list",
        // 在vue2中 data 在vue3中使用 reactive代替
        // setup相当于vue2.0的 beforeCreate和 created，是vue3新增的一个属性，所有的操作都在此属性中完成
        setup(props, context){
            // 通过reactive 可以初始化一个可响应的数据，与Vue2.0中的Vue.observer很相似
            const state = reactive({
                todoList:[{
                    id: 1,
                    done: false,
                    text: '吃饭'
                }],
                todo: ''
            })
            const handleAddTodo = () =>{
                if(!state.todo) {
                    alert('请输入待办事项')
                    return
                }
                state.todoList.push({
                    text: state.todo,
                    id: Date.now(),
                    done: false
                })
                state.todo = ''
            }

            // 在Vue3.0中，所有的数据和方法都通过在setup 中 return 出去，然后在template中使用
            return {
                state,
                handleAddTodo
            }
        }
    }
</script>

<style scoped>

</style>