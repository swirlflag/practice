<template>
    <canvas ref="barChart" id="myChart2" width="400" height="400"></canvas>
</template>

<script>

export default {
    props : ['propsdata'],
    mounted() {
        var myChart = new this.$_Chart(this.$refs.barChart, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: this.propsdata
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });    

        {myChart}
    }
}
</script>

<style>

</style>