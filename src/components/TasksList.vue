<template>
    <ul>
        <input type="checkbox" id="checkbox" v-model="checked" >
        {{ todo.description }}

        <button @click="$emit('remove', todo.id)">
        X
        </button>
        <button @click="$emit('edit', todo.id)">
        edit
        </button>
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
            checked: false
        };
    },

    mounted () {

    },

    methods: {

    }
}
</script>