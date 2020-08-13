<template>
    <div class="page--jobs">
        <div v-for="item in askItems" v-bind:key="item.title">
            {{ item.title }}
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    data() {
        return {}
    },
    computed : {
        ...mapGetters([
            'askItems',
        ]),
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>