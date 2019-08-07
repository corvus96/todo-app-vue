<template>
    <form class="w-auto">
  <div class="flex border-b border-b-2 border-teal-500 py-2 rounded-full">
    <input v-model="newTodo" @keyup.enter="addTodo" class="flex-shrink appearance-none bg-transparent border-none w-full text-gray-700 ml-3 mr-3 py-1 px-3 leading-tight" type="text" placeholder="Write your task" aria-label="Full name">
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white mr-2 py-1 px-2 rounded-full" type="button">
      Submit
    </button>
  </div>
<div v-for="todo in todos" :key="todo.id">{{todo.title}}</div>
</form>
</template>

<script>
export default {
    props: {
        
    },

    data () {
        return {
          newTodo: '',
          idForTodo: 1,
          todos: [
            {'id': 1,
            'title': 'papaa ',
            'completed': false,
            },
          ]
        };
    },

    mounted () {

    },

    methods: {
      addTodo(){
        this.todos.push({
          id: this.idForTodo,
          title: this.newTodo,
          completed: False,
        })
        this.newTodo='',
        this.idForTodo++
      }

    }
}
</script>