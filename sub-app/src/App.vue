<template>
  <Bar :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import {data, options} from "./chartConfig.js";
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
ChartJS.register(zoomPlugin)

export default {
  name: 'App',
  computed: {
    options() {
      return options
    },
    data() {
      return data
    }
  },
  components: {
    Bar
  }
}
</script>
