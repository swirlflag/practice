<template>
    <ListItem v-bind:items="this.$store.state.askList"></ListItem>
</template>

<script>
import ListMixin from '../mixins/ListMixin.js';

export default {

    mixins : [ ListMixin ], 
};
</script>

<style>

</style>