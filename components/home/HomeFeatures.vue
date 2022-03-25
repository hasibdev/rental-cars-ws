<i18n lang="yaml">
{
  'en':
    {
      'title': 'TAKING CARE OF EVERY CLIENT',
      'sub-title': 'Key Features',
      'text': 'We are all about our clients comfort and safety. Thats why we provide the best service you can imagine.',
    },
  'de':
    {
      'title': 'KUNDENZUFRIEDENHEIT IST UNSERE PRIORITÄT',
      'sub-title': 'Unsere Leistungen',
      'text': 'Uns ist der Komfort und die Sicherheit unserer Kunden wichtig. Deshalb bieten wir den besten Service, damit Sie sich wohlfühlen.',
    },
}
</i18n>
<template>
  <section id="features" class="feature-section">
    <div class="container">
      <SectionHeader
        :subtitle="$t('title')"
        :title="$t('sub-title')"
        :description="$t('text')"
        :description-width="90"
        text-left
      />
      <div class="row">
        <div v-for="item in items" :key="item.id" class="col-md-6 col-lg-3">
          <div class="feature-card">
            <div class="feature-card__icon">
              <img
                :src="require(`~/assets/images/icons/${item.icon}`)"
                alt="icon"
              />
            </div>
            <h6 class="feature-card__title">
              {{ getSelectedLang ? item.titleDe : item.title }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '~/components/common/SectionHeader.vue'
export default {
  name: 'Features',
  components: {
    SectionHeader,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          icon: '1.svg',
          title: '24-hour car delivery',
          titleDe: '24 Stunden Fahrzeuglieferung',
        },
        {
          id: 2,
          icon: '2.svg',
          title: '24/7 technical support',
          titleDe: '24/7 Kundenservice und Support',
        },
        {
          id: 3,
          icon: '3.svg',
          title: 'Fully comprehensive  with deductible',
          titleDe: 'Vollkasko mit Selbstbeteiligung',
        },
        {
          id: 4,
          icon: '4.svg',
          title: 'Liability insurance',
          titleDe: 'Haftpflicht-versicherung',
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
}
</script>

<style lang="scss" scoped>
.feature-section {
  margin-top: 1rem;
}

.feature-card {
  border: 1px solid var(--color-light-grey-2);
  border-radius: 5px;
  background-color: var(--color-white);
  height: 280px;
  box-shadow: 0px 2px 2px rgb(0 0 0 / 4%);
  padding: 2rem 1.5rem;
  overflow: hidden;

  @include responsive-max('md') {
    margin-bottom: 1.5rem;
  }

  &__icon {
    margin-bottom: 5.5rem;
    width: 45px;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  &__title {
    font-size: 1.1rem;
    line-height: 1.3;
    width: 50%;
  }
}

.m_top {
  margin-top: 5rem;
}
.content h6 {
  font-weight: normal;
  font-size: 1.125rem;
  color: #4f4444;
}
.content h1 {
  font-weight: bold;
  font-size: 3.75rem;
  color: var(--color-dark);
}
.content p {
  font-weight: 400;
  font-size: 1.125rem;
  color: var(--color-text);
  margin-top: 1rem;
}
.features_card {
  width: 100%;
  height: 14.688rem;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 0.25rem;
  padding: 2rem;
  border: 1px solid #f0f0f0;
}
.features_card h6 {
  margin-top: 5rem;
  width: 7.5rem;
}
@media (max-width: 768px) {
  .content h1 {
    font-size: 3rem;
  }
  .content p {
    font-size: 1.125rem;
  }
  .features_card {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .m_top {
    margin-top: 4rem;
  }
  .content h1 {
    font-size: 3rem;
  }
  .content p {
    font-size: 1.063rem;
  }
  .features_card {
    width: 90%;
    margin: 0.4rem auto;
  }
}
</style>
