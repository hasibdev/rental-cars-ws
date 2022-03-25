<i18n lang="yaml">
{
  'en':
    {
      'top-title': 'ONLY THE BEST CARS',
      'sub-title': 'Our Vehicle Fleet',
      'text': 'We provide our customers with the most incredible driving emotions. Thats why we have the best cars in our fleet.',
    },
  'de':
    {
      'top-title': 'NUR DIE BESTEN FAHRZEUGE',
      'sub-title': 'Unsere Fahrzeugflotte',
      'text': 'Wir bieten unseren Kunden die unglaublichsten Fahrgefühle. Deshalb haben wir auch die besten Autos in unserer Flotte.',
    },
}
</i18n>
<template>
  <section class="cars">
    <div class="container">
      <!-- header -->
      <SectionHeader
        :subtitle="$t('top-title')"
        :title="$t('sub-title')"
        :description="$t('text')"
      />

      <!-- filter navs -->
      <div id="cars" class="filter-nav">
        <!-- <button
          :class="{ active: currentFilter === 'all' }"
          class="filter-nav__btn"
          @click="setFilter('all')"
        >
          All
        </button> -->
        <button
          v-for="category in categories"
          :key="category.id"
          :class="{ active: currentFilter === category.categoryName }"
          class="filter-nav__btn"
          @click="setFilter(category.categoryName)"
        >
          {{ getSelectedLang ? category.labelDe : category.label }}
        </button>
      </div>

      <!-- car first row -->
      <transition-group class="filters row" name="filters">
        <template v-for="(car, idx) in filtersCars(currentFilter)">
          <div
            :key="car.id"
            class="filters__car-item"
            :class="idx < 3 ? 'col-sm-4' : 'col-sm-3'"
          >
            <div class="filters__car-content">
              <img
                :src="require(`~/assets/images/cars/${car.image}`)"
                alt="car img"
              />
              <div class="overlay">
                <div class="overlay__contents">
                  <h6 class="overlay__title">{{ car.name }}</h6>
                  <p class="overlay__desc">{{ car.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </transition-group>
    </div>
  </section>
</template>

<script>
import SectionHeader from '~/components/common/SectionHeader.vue'
export default {
  name: 'VehicleFleet',
  components: {
    SectionHeader,
  },
  data() {
    return {
      currentFilter: 'all',
      categories: [
        {
          id: 1,
          label: 'Small cars',
          labelDe: 'Kleinwagen',
          categoryName: 'small-cars',
        },
        {
          id: 22,
          label: 'Compact cars',
          labelDe: 'Kompaktklasse',
          categoryName: 'compact-cars',
        },
        {
          id: 34,
          label: 'SUV',
          labelDe: 'SUV',
          categoryName: 'suv',
        },
        {
          id: 84,
          label: 'Middle class',
          labelDe: 'Mittelklasse',
          categoryName: 'middle-class',
        },
        {
          id: 54,
          label: 'Upper class',
          labelDe: 'Oberklasse',
          categoryName: 'upper-class',
        },
      ],
      cars: [
        {
          id: 1,
          image: 'small-1.png',
          name: 'BMW',
          title: 'Small-cars',
          category: 'small-cars',
        },
        {
          id: 2,
          image: 'upper-1.png',
          title: 'X Toyota',
          subtitle: 'Upper-class',
          category: 'upper-class',
        },
        {
          id: 3,
          image: 'small-2.png',
          name: 'Ragns Toyota',
          title: 'Small-cars',
          category: 'small-cars',
        },
        {
          id: 4,
          image: 'middle-1.png',
          name: 'WW Ragns Toyota',
          title: 'middle-class',
          category: 'middle-class',
        },
        {
          id: 5,
          image: 'middle-2.png',
          name: 'WW Ragns Toyota',
          title: 'middle-class',
          category: 'middle-class',
        },
        {
          id: 6,
          image: 'middle-3.png',
          name: 'WW Ragns Toyota',
          title: 'middle-class',
          category: 'middle-class',
        },
        {
          id: 7,
          image: 'middle-4.png',
          name: 'WW Ragns Toyota',
          title: 'middle-class',
          category: 'middle-class',
        },
        {
          id: 8,
          image: 'middle-5.png',
          name: 'WW Ragns Toyota',
          title: 'middle-class',
          category: 'middle-class',
        },
        {
          id: 9,
          image: 'middle-6.png',
          name: 'WW Ragns Toyota',
          title: 'middle-class',
          category: 'middle-class',
        },
        {
          id: 10,
          image: 'compact-1.png',
          name: 'WW Ragns Toyota',
          title: 'Compact-cars',
          category: 'compact-cars',
        },
        {
          id: 11,
          image: 'compact-2.png',
          name: 'WW Ragns Toyota',
          title: 'Compact-cars',
          category: 'compact-cars',
        },
        {
          id: 12,
          image: 'compact-3.png',
          name: 'WW Ragns Toyota',
          title: 'Compact-cars',
          category: 'compact-cars',
        },
        {
          id: 13,
          image: 'compact-4.png',
          name: 'WW Ragns Toyota',
          title: 'Compact-cars',
          category: 'compact-cars',
        },
        {
          id: 14,
          image: 'compact-5.png',
          name: 'WW Ragns Toyota',
          title: 'Compact-cars',
          category: 'compact-cars',
        },
        {
          id: 15,
          image: 'middle-1.png',
          name: 'WW Ragns Toyota',
          title: 'Middle-class',
          category: 'middle-class',
        },
        {
          id: 16,
          image: 'suv-1.png',
          name: 'WW Ragns Toyota',
          title: 'suv',
          category: 'suv',
        },
      ],
    }
  },
  computed: {
    getSelectedLang() {
      const routePath = this.$route.path.match('de')
      return routePath
    },
  },
  methods: {
    setFilter(filter) {
      this.currentFilter = filter
    },
    filtersCars(category) {
      return category !== 'all'
        ? this.cars.filter((_) => _.category === category)
        : this.cars
    },
  },
}
</script>

<style lang="scss" scoped>
.cars {
  text-align: center;
  padding-top: 1.5rem;
}

.filter-nav {
  margin-bottom: 2rem;

  &__btn {
    border: none;
    outline: none;
    background-color: var(--color-light-grey);
    padding: 0.3rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    transition: background-color 0.3s ease-out;
    margin: 0.5rem;

    &:hover,
    &.active {
      background-color: var(--color-dark);
      color: var(--color-white);
    }
  }
}

/* filter css */
.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &-enter {
    transform: scale(0.5) translatey(-80px);
    opacity: 0;
  }
  &-leave-to {
    transform: translatey(30px);
    opacity: 0;
  }
  &-leave-active {
    position: absolute;
    z-index: -1;
  }

  &__car-item {
    transition: all 0.35s ease-in-out;
    overflow: hidden;
  }

  &__car-content {
    position: relative;
    cursor: pointer;
    height: 250px;
    overflow: hidden;
    margin-bottom: 1.5rem;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      background: linear-gradient(
        180deg,
        rgba(232, 232, 232, 0.2) 5%,
        rgba(0, 0, 0, 0.6) 76%
      );
      width: 100%;
      height: 100%;
      transition: opacity 0.5s ease;
      opacity: 0;
      display: flex;
      align-items: flex-end;

      &__contents {
        color: var(--color-white);
        text-align: left;
        padding: 0.75rem;
      }

      &__title {
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: 0.2rem;
      }
      &__desc {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0;
      }
    }

    &:hover {
      .overlay {
        opacity: 1;
      }
    }
  }
}
</style>
