<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <i class="icon ion-md-create" ></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts.js';

export default {
    props: {
    postItem: {
        type: Object,
        required: true,
    },
    },
    data() {
        return {

        }
    },
    methods : {
        async deleteItem() {
            if(confirm('delete item')){
                const response = await deletePost(this.postItem._id);
                this.$emit('refresh');
            }
        },
    }
};
</script>

<style></style>
