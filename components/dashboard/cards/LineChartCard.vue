<template>
  <div class="chart">
    <div class="chart__header">
      <div class="chart__left">
        <h2 class="chart__header-title">{{ title }}</h2>
      </div>
      <div class="chart__right">
        <ul class="chart__header-filter">
          <li
            v-for="(timeFilter, idx) in timeFilters"
            :key="idx"
            class="chart__header-filter-item"
            :class="{ active: idx === activeFilterPeriod }"
            @click="setFilterPeriod(idx)"
          >
            {{ timeFilter }}
          </li>
        </ul>
      </div>
    </div>
    <div class="chart__contents">
      <div class="chart__filter-dropdown">
        <div class="chart__filter-dropdown-input">
          <b-select
            v-model="carFilter"
            :options="['All cars', 'BMW', 'Hero']"
            outline
          />
        </div>
      </div>
      <div class="chat__inner">
        <line-chart :chartdata="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '../charts/LineChart.vue'
export default {
  components: {
    LineChart,
  },
  props: {
    title: {
      type: String,
      default: 'Revenue',
    },
    timeFilters: {
      type: Array,
      default: () => ['Week', 'Month', 'Year'],
    },
  },
  data() {
    return {
      carFilter: '',
      activeFilterPeriod: 0,
      chartData: {
        labels: [
          '1.01.2022',
          '5.01.2022',
          '10.01.2022',
          '21.01.2022',
          '1.02.2022',
          '18.02.2022',
          '21.01.2022',
          '1.02.2022',
          '18.02.2022',
          '1.02.2022',
          '18.02.2022',
        ],
        datasets: [
          {
            data: [100, 200, 150, 200, 250, 80, 140, 90, 180, 210, 150, 166],
            borderColor: '#276EF1',
            fill: false,
            borderWidth: 2,
            label: 'Numbers',
            lineTension: 0,
          },
        ],
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
      },
    }
  },
  methods: {
    setFilterPeriod(index) {
      this.activeFilterPeriod = index
    },
  },
}
</script>

LineChart
<style lang="scss" scoped>
.chart {
  border: 1px solid var(--color-light-grey);
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 0 0 5px var(--color-light-grey);

  &__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 0.75rem;
    border-bottom: 1px solid var(--color-light-grey);
    margin-bottom: 0.75rem;

    &-title {
      font-size: 1.75rem;
      font-weight: 400;
      margin-bottom: 0;
      padding: 0.75rem 0;
      text-transform: capitalize;
    }

    &-filter {
      &-item {
        display: inline-flex;
        align-items: center;
        padding: 0.4rem 0.2rem;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        user-select: none;
        transition: border-color 0.3s ease;

        &:not(:last-child) {
          margin-right: 0.5rem;
        }
        &.active {
          border-color: var(--color-blue);
        }
      }
    }
  }
  &__filter-dropdown {
    &-input {
      width: 25%;
    }
  }

  &__contents {
    padding: 0.75rem;
  }
}
</style>
