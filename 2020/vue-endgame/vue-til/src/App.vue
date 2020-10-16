<template>
	<div id="app">
        <AppHeader
        />
        <router-view></router-view>
	</div>
</template>

<script>

import AppHeader from '@/components/common/AppHeader.vue';

export default {
	name: 'app',
	components: {
        AppHeader,
	},
	created() {
	},
};
</script>

<style>

</style>
