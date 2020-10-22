<template>
    <div>
        <div class="main list-container contents">
        <h1 class="page-header">Today I Learned</h1>

        <ul>
            <li v-for="item in postItems"
                :key="item._id"
            >

                <!-- {{ item }} -->

                <div class="post-title">
                    {{ item.title }}
                </div>
                <div class="post-contents">
                    {{ item.contents }}
                </div>
                <div class="post-time">
                    {{ item.createdAt }}
                </div>
            </li>
        </ul>

        </div>
    </div>
</template>

<script>
import { fetchPosts } from '@/api';

export default {

    data() {
        return {
            postItems : [],
        };
    },

    methods : {
        async fetchData() {
            const { data } = await fetchPosts();

            console.log(data.posts);

            this.postItems = data.posts;
        }
    },

    created() {
        this.fetchData();
    },

};

</script>

<style></style>
