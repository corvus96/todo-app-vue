<template>

   <todo-card class="h-2 rounded-lg bg-gray-400 container py-12 flex flex-row flex-wrap max-h-full mx-auto mt-4 w-11/12 max-w-lg">
                <div class="block mx-auto flex w-1/2 px-1 mx-1 font-medium text-xl">
                <p>
                    <input class="w-3"   type="checkbox" id="checkbox" v-model="todo.done" >
                    <div class="px-1 mx-1 font-medium text-xl">
                        <h1 v-if="todo.done" class="line-through" >  {{ todo.description }} </h1>
                        <h1 v-else>  {{ todo.description }} </h1>
                    </div>
                </p>
                </div>
                <div class=" container md flex w-1/2 justify-end ">
                    <i class=" mx-1 bg-red-600 rounded-full py-2 px-4 hover:bg-red-400 text-gray-800 font-semibold border border-green-900 rounded shadow" @click="$emit('remove', todo.id)">&#10006; </i>
                    <i class=" mx-1 bg-green-500 rounded-full py-2 px-4 hover:bg-green-300 text-gray-900 font-semibold border border-green-900 rounded shadow" @click="$emit('edit', todo.id)">&#9999;</i> 
                </div>

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
            checked: false
        };
    },

    mounted () {

    },

    methods: {

    }
}
</script>