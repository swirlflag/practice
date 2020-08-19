<template>
    <ListItem pageCategory="ask"></ListItem>
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
        setTimeout(() => {
            this.$store.dispatch('FETCH_ASK')
                .then(() => {
                    bus.$emit('end:spinner');
                })
                .catch((error) => {
                    console.log(error)
                })
            ;
        },1000)

    }
};
</script>

<style scoped>

</style>