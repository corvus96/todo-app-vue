<template>
    <ul>
    {{ todo.description }}
    <button @click="$emit('remove', todo.id)">
      X
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

        };
    },

    mounted () {

    },

    methods: {

    }
}
</script>