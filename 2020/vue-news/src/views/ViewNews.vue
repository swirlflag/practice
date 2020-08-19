<template>
    <ListItem pageCategory="news" ></ListItem>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';

export default {
    components : {
        ListItem,
    },

    created() {
        bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_NEWS')
            .then(() => {
                console.log(1);
                // bus.$emit('end:spinner');
            })
            .catch((error) => {
                console.log(error)
            })
        ;
    },
}
</script>

<style scoped>

</style>