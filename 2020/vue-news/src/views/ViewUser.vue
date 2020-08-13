<template>
    <div class="page--jobs">
        <p>name : {{ userInfo.id }}</p>
        <p>karma : {{ userInfo.karma }}</p>
        <p>created : {{ userInfo.created }}</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            userName : this.$route.params.id,
        }
    },
    computed : {
        userInfo() {
            return this.$store.state.userItems
        }
    },
    created() {        
        this.$store.dispatch('FETCH_USER' , this.userName);
    },
}
</script>

<style>
    
</style>