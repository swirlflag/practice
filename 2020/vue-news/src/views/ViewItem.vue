<template>
    <div class="page--item">
        <UserProfile v-bind:info="itemInfo">
            <div slot="username">
                {{ itemInfo.user }}
            </div>
            <template slot="time_ago">
                posted : {{ itemInfo.time_ago }}
            </template>

        </UserProfile>

        <section>
            <h2>
                {{ itemInfo.title }}
            </h2>
        </section>

        <section>
            <div v-html="itemInfo.content">

            </div>
        </section>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
    data() {
        return {
            itemId : this.$route.params.id
        }
    },
    components : {
        UserProfile
    },
    computed : {
        ...mapGetters([
            "itemInfo",
        ]),
    },
    created() {
        this.$store.dispatch('FETCH_ITEM', this.itemId);
    },
};
</script>

<style >
.user-container {
    display: flex;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time_ago {
    font-size: 0.7rem;
}
</style>