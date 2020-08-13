<template>
    <div class="page--news">
        <div v-for="news in newsItems" v-bind:key="news.title">
            {{ news.title }}
        </div>
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
            'newsItems',
        ])
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>