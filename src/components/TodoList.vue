<template>
    <div class="container mx-auto  flex flex-col flex-wrap">
        <h1 class="font-hairline text-6xl text-center text-gray-500">Todo App</h1>
        <todo-card class=" np,nbg-gray-400 rounded-lg mx-auto mt-10 w-full max-w-lg">
            <todo-task @receive-task="newTodo"></todo-task>
        </todo-card>
     
        <ul 
        v-if="tasks.length">
		<todo-tasks-list	v-for="todo in tasks" :key="todo.id" :todo="todo" @remove="removeTodo" @edit="editTodo" /> 
		</ul>
       
    </div>
</template>

<script>
export default {
    props: {

    },

    data () {
        return {
            nextId: 0,
            tasks: [],
        };
    },

    mounted () {

    },

    methods: {
        newTodo(currentTask){
            console.log(currentTask)
            // Increment the id 
            let nextId = this.tasks.length + 1
			if (currentTask) {
				this.tasks.push({
					id: nextId,
                    description: currentTask,
                    done: false
                })
			}
            
        },
        removeTodo (idToRemove) {
			this.tasks = this.tasks.filter(todo => {
				return todo.id !== idToRemove
            })
        },
        editTodo(){
            console.log("I am here")
        }
    }
}
</script>