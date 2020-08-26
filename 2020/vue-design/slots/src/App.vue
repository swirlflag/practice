<template>
  <div>
    <ul>
      <!-- <item>아이템 1</item>
      <item>아이템 2</item>
      <item>아이템 3</item>
      <item>아이템 4</item>
      <item>아이템 5</item> -->
      

      <item v-for="(item,idx) in items" v-bind:key="idx" v-bind:item="item"></item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
  data() {
      return {
          items : [
              "아이템1",
              "아이템2",
              "아이템3",
              "아이템4",
              "아이템d5",
          ],
      };
  },
}
</script>