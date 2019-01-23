<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-decription">
          <router-link v-bind:to="`/user/${itemInfo.user}`">
            {{ itemInfo.user }}
          </router-link>
          <div class="time">
            {{ itemInfo.time_ago }}
          </div>
        </div>
      </div>
      <h2>
        {{ itemInfo.title }}
      </h2>
    </section>

    <section>
      <div v-html="itemInfo.content">
      </div>
    </section>

    <section>

    </section>

  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import axios from 'axios';

export default {

  computed : {
    // ...mapState(['item']),
    ...mapGetters({
      itemInfo : 'fetchedItem',
    }),
  },

  created(){
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },

};

</script>

<style scoped>

.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user{
  font-size: 2.5rem;
}
.user-decription{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}

</style>
