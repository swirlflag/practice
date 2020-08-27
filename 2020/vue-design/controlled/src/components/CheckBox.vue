<template>
    <input type="checkbox" v-bind:value="value" v-on:click="toggleCheckBox">
</template>

<script>
export default {
    props : {
        value : Boolean,
    },
    methods : {
        toggleCheckBox() {
            this.$emit('input' , !this.value);
        }
    }
}
</script>