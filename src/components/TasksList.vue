<template>
    <todo-card class="flex-auto mx-auto mt-1 w-full max-w-lg rounded">
    <ul>
        <div v-if="todo.done" class="bg-green-300 p-0">
        <p>
        <span class="flex justify-start">
        <input type="checkbox" id="checkbox" v-model="todo.done" >
        {{ todo.description }} 
        </span> 
        <span class="flex flex-row-reverse items-start">
        <button class="content-start"  @click="$emit('remove', todo.id)">x</button>
        <button class="content-start"  @click="$emit('edit', todo.id)">
        edit
        </button>
        </span>
        </p>     
        </div> 
        <div v-else class="bg-red-300">
            <p>
        <input type="checkbox" id="checkbox" v-model="todo.done" >
        {{ todo.description }}  
        <button @click="$emit('remove', todo.id)">x</button>
        <button @click="$emit('edit', todo.id)">
        edit
        </button>
        </p>  
         </div>      
    </ul>
    </todo-card>
</template>

<script>
export default {
    
    props: {
        todo: {
      type: Object,
      required: true
        }
    },

    data () {
        return {   
            
        };
    },

    mounted () {

    },

    methods: {
    }
}
</script>