<template>
    <div id="app" class="bg-black-100  h-screen">
        <TodoList/>
    </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
    name: 'app',
    components: {
        TodoList
    }
}
</script>