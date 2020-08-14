<template>
    <div class="page--item">
        <p>{{ this.$store.state.itemList.title }}</p>
        <div>
            {{ this.$store.state.itemList.content }}
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            itemId : this.$route.params.id
        }
    },
    computed : {

    },
    created() {
        this.$store.dispatch('FETCH_ITEM', this.itemId);
    },
};
</script>

<style>

</style>