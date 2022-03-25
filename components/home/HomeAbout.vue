<i18n lang="yaml">
{
  'en':
    {
      'about': 'ABOUT US',
      'discover': 'Discover Roadstars',
      'text':
        'Versatile and individual, just like your needs - our selection of vehicles will get you from A to B in a flexible way.
        Roadstars Car Rental, based in Berlin-Charlottenburg, always offers the right vehicle for your occasion - when and how you want it.
        Whether small car, middle class or luxury class, we are always available to advise you on the choice of the right vehicle.',
    },
  'de':
    {
      'about': 'ÜBER UNS',
      'discover': 'Entdecken Sie Roadstars',
      'text':
        'Vielseitig und individuell, genau wie Ihre Bedürfnisse - unsere Auswahl an Fahrzeugen bringt Sie flexibel von A nach B. Die Roadstars Autovermietung mit
        Sitz in Berlin-Charlottenburg bietet Ihnen immer das richtige Fahrzeug für Ihren
        Anlass - wann und wie Sie es wünschen. Ob Kleinwagen, Mittelklasse oder Obere
        Mittelklasse, wir stehen Ihnen jederzeit beratend zur Seite, wenn es um die Wahl des richtigen Fahrzeugs geht.',
    },
}
</i18n>
<template>
  <div id="about" class="about-section">
    <div class="container">
      <SectionHeader
        :subtitle="$t('about')"
        :title="$t('discover')"
        :description="$t('text')"
        :description-width="60"
      />
      <div class="row">
        <div v-for="item in items" :key="item.id" class="col-md-4">
          <div class="about-item">
            <span class="icon">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 0C7.392 0 0 7.168 0 16C0 24.832 7.392 32 16.5 32C25.608 32 33 24.832 33 16C33 7.168 25.608 0 16.5 0ZM13.2 24L4.95 16L7.2765 13.744L13.2 19.472L25.7235 7.328L28.05 9.6L13.2 24Z"
                />
              </svg>
            </span>
            <h5 class="about-item__title">
              {{ getSelectedLang ? item.titleDe : item.title }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '~/components/common/SectionHeader.vue'
export default {
  name: 'About',
  components: {
    SectionHeader,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'No Schufa information',
          titleDe: 'Keine Schufa Auskunft',
        },
        {
          id: 2,

          title: 'Without credit card',
          titleDe: 'Ohne Kreditkarte',
        },
        {
          id: 3,

          title: 'From 21 years',
          titleDe: 'Ab 21 Jahren',
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
.about-section {
  margin-top: 3.5rem;
  background-color: var(--color-light-grey);
  padding: 2.6rem 0;
}

.about-item {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  margin-bottom: 0.75rem;

  @include responsive-max('sm') {
    justify-content: flex-start;
    padding-left: 2rem;
  }

  .icon {
    svg {
      fill: var(--color-dark);

      @include responsive-max('sm') {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  &__title {
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 0;

    @include responsive-max('sm') {
      font-size: 1.2rem;
    }
  }
}
</style>
