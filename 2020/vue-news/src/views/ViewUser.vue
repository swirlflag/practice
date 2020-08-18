<template>
    <div>
        <UserProfile v-bind:info="userInfo">
            <div slot="username">
                {{ userInfo.id }}
            </div>
            <template slot="time_ago">
                joined : {{ userInfo.created }}
            </template>
            <div slot="karma">
                {{ userInfo.karma }}
            </div>
        </UserProfile>
    </div>
</template>

<script>

import UserProfile from '../components/UserProfile.vue';

export default {
    data() {
        return {
            userName : this.$route.params.id,
        }
    },
    components : {
        UserProfile,
    },
    computed : {
        userInfo() {
            return this.$store.state.userItems
        },
    },
    created() {
        this.$store.dispatch('FETCH_USER' , this.userName);
    },
}
</script>

<style>

</style>