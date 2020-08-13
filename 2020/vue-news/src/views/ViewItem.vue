<template>
    <div class="page--item">
        
    </div>
</template>

<script>


export default {
    data() {
        return {
            itemId : this.$route.params.id,
        }
    },
    computed : {
        itemData() {
            return this.$store.getters.itemList[this.itemId];
        },
    },
    created() {
        this.$store.dispatch('FETCH_ITEM', this.itemId);
    },
};
</script>

<style>

</style>