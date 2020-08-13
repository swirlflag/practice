<template>
    <div class="page--jobs">
        <p v-for="item in jobsItems" v-bind:key="item.title">
            <a v-bind:href="item.url" target="_blank">
                {{ item.title }}
            </a>
            <small> {{ item.time_ago }} , {{ item.domain }}</small>
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
            'jobsItems'
        ]),
    },
    created() {
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style>

</style>