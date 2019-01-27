<template>
  <div>
    <h1>chart.js~~~</h1>
    <bar-chart></bar-chart>
    <br>
    <line-chart></line-chart>
  </div>
  
</template>

<script>

import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';

export default {
  
  components : {
    'bar-chart' : BarChart,
    'line-chart' : LineChart,
  },

};

</script>

<style>

</style>
