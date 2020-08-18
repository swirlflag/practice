<template>
    <div>
        <ul class="item-list">
            <li v-for="item in listItems" v-bind:key="item.title" class="post">
                <div class="points">
                    {{ item.points || 0}}
                </div>
                <div>
                    <p class="item-title">
                        <template v-if="item.domain">
                            <a v-bind:href="item.url" target="_blank">
                                {{ item.title }}
                            </a>
                        </template>
                        <template v-else>
                            <router-link v-bind:to="`/item/${item.id}`">
                                {{ item.title }}
                            </router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by

                        <template v-if="item.user">
                            <router-link v-bind:to="`user/${item.user}`" class="link-text">
                                {{ item.user }}
                            </router-link>
                        </template>
                        <template v-else>
                            <a v-bind:href="item.url" target="_blank">
                                {{ item.domain }}
                            </a>
                        </template>
                    </small>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
export default {
    props : ['pageCategory'],
    computed : {
        listItems() {
            return this.$store.getters[`${this.$route.name}Items`];
        },
    },
    created() {
        const actionName = `FETCH_${this.$route.name.toUpperCase()}`;
        this.$store.dispatch(actionName);
    },
}
</script>

<style scoped>
.item-list {
    margin: 0;
    padding: 0;
}
.post {
    display: flex;
    list-style: none;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.item-title {
    margin: 0;
}
.link-text {
    color: #828282;
}
</style>