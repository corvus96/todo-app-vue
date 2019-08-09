<template>

   <todo-card class="h-0 rounded-lg bg-gray-400 container py-20 flex flex-col flex-wrap max-h-full mx-auto mt-4 w-11/12 max-w-lg">
    
        <div class="container flex">
            <p>
                <div class="flex w-1/2 px-1 mx-1 font-medium text-xl">
                    <div>
                        <input class="w-3"   type="checkbox" id="checkbox" v-model="checked" >
                    </div>
                    <div class="px-1 mx-1 font-medium text-xl">
                        <h1> {{ todo.description }} </h1>
                    </div>
                    
                </div>
                <div class="flex w-1/2 justify-end ">
                    <div>
                        <i class=" mx-1 bg-red-600 rounded-full py-2 px-4 hover:bg-red-400 text-gray-800 font-semibold border border-green-900 rounded shadow" @click="$emit('remove', todo.id)">&#10006; </i>
                    </div>
                    <div>
                        <i class=" mx-1 bg-green-500 rounded-full py-2 px-4 hover:bg-green-300 text-gray-900 font-semibold border border-green-900 rounded shadow" @click="$emit('edit', todo.id)">&#9999;</i> 
                    </div>
                </div>
            </p>
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