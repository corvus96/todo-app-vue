<template>
    <div class="bg-white shadow-lg p-4">
        <slot> <div v-for="todo in todos":key="todo.id">{{todo.title}}</div> </slot>
    </div>
</template>

<script>
export default {
    props: {

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