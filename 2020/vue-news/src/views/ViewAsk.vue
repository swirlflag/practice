<template>
    <div class="page--jobs">
        <p v-for="item in askItems" v-bind:key="item.title">
            <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
            </router-link>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
        }
    },
    computed : {
        ...mapGetters([
            'askItems',
        ]),
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    },
};
</script>

<style>

</style>