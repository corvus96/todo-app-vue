<template>
    <ul>
        <div v-if="todo.done" class="bg-green-300">
        <p>
        <input type="checkbox" id="checkbox" v-model="todo.done" >
        {{ todo.description }}  
        <button @click="$emit('remove', todo.id)">x</button>
        <button @click="$emit('edit', todo.id)">
        edit
        </button>
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