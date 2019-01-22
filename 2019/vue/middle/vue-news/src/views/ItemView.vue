<template>
  <div>

    <section>

      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div>
          <router-link v-bind:to="`/user/${itemInfo.user}`">
            {{ itemInfo.user }}
          </router-link>
          <div>
            {{ itemInfo.time_ago }}
          </div>
        </div>
      </div>

      <h2>
        {{ itemInfo.title }}
      </h2>

    </section>



    <section>

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
}

</style>
