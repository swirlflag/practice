<template>
    <div class="page--jobs">
        <div v-for="job in jobsItems" v-bind:key="job.title">
            {{ job.title }}
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