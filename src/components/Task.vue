<template>
    <div>
    <input v-model="currentTask" 
    @keydown.enter="onSubmit" 
    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" 
    type="text" placeholder="Write your task here">
     <button @click="onSubmit" > 
         Submit
        </button>
    </div>
</template>

<script>
export default {
    props: {

    },

    data () {
        return {
            currentTask: ''
        };
    },

    mounted () {

    },
// Here I pass the input value to parent component that is Todolist
    methods: {
        // Onsubmit is active when the user press enter
        onSubmit(){
            this.$emit('receive-task',this.currentTask)
            this.currentTask=null
        }
    }
}
</script>