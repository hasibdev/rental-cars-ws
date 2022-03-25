<template>
  <div class="page">
    <page-header />
    <div class="page-contents">
      <line-chart-card />
      <line-chart-card
        :time-filters="['Week', 'Month']"
        title="Rentals"
      />
    </div>
  </div>
</template>

<script>
import LineChartCard from '~/components/dashboard/cards/LineChartCard.vue'
import pageHeader from '~/components/dashboard/PageHeader.vue'
export default {
  name: 'Dashboard',
  components: {
    pageHeader,
    LineChartCard,
  },
  layout: 'dashboard',
  middleware: 'auth',
}
</script>

<style lang="scss" scoped></style>
