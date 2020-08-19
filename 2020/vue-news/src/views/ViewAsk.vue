<template>
    <ListItem pageCategory="ask"></ListItem>
</template>

<script>

import ListItem from '../components/ListItem.vue';

export default {
    components : {
        ListItem,
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
};
</script>

<style scoped>

</style>