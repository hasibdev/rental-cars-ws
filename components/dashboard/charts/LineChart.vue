<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  // eslint-disable-next-line vue/require-prop-types
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartdata, this.options)
  },
}
</script>
