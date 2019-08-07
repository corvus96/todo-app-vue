<template>
    <div id="app" class="bg-gray-100 h-screen">
        <TodoList/>
    </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import Task from './components/Task.vue'
import TasksList from './components/TasksList.vue'

export default {
    name: 'app',
    components: {
        TodoList,Task,TasksList
    }
}
</script>