<i18n lang="yaml">
{
  'en':
    {
      'reservation': 'Request reservation',
      'summary': 'Summary',
      'location': 'Pick up location',
      'time': 'Pick-up time',
      'drop-time': 'Drop-off time',
      'vehicle-class': 'Your vehicle class',
      'title': 'Personal Details',
    },
  'de':
    {
      'reservation': 'Reservierung anfragen',
      'summary': 'Zusammenfassung',
      'location': 'Abholort',
      'time': 'Abholzeit',
      'drop-time': 'Rückgabezeit',
      'vehicle-class': 'Ihre Fahrzeugklasse',
      'title': 'Persönliche Daten',
    },
}
</i18n>
<template>
  <div class="base__modal">
    <div class="base__modal-body">
      <div class="base__modal-contents">
        <!-- modal header -->
        <div class="booking-modal__header">
          <h3 class="booking-modal__title">{{ $t('reservation') }}</h3>
          <button class="booking-modal__close-btn base-btn" @click="CloseModal">
            <span class="icon">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 2.05625L18.885 0L10.5 8.15208L2.115 0L0 2.05625L8.385 10.2083L0 18.3604L2.115 20.4167L10.5 12.2646L18.885 20.4167L21 18.3604L12.615 10.2083L21 2.05625Z"
                  fill="black"
                />
              </svg>
            </span>
          </button>
        </div>

        <div class="summary">
          <h3 class="booking-modal__sub-title">{{ $t('summary') }}</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="summary__item">
                <div class="summary__item-icon">
                  <svg
                    width="14"
                    height="20"
                    viewBox="0 0 14 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z"
                    />
                  </svg>
                </div>
                <div class="summary__item-content">
                  <h5 class="summary__item-title">Pick up location</h5>
                  <p class="summary__item-content">
                    {{ requestInfo.location }}
                  </p>
                </div>
              </div>
              <div class="summary__item">
                <div class="summary__item-icon">
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9H4V11H6V9ZM10 9H8V11H10V9ZM14 9H12V11H14V9ZM16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V7H16V18Z"
                    />
                  </svg>
                </div>
                <div class="summary__item-content">
                  <h5 class="summary__item-title">Pick-up time</h5>
                  <p class="summary__item-content">
                    {{
                      `${requestInfo.pickupDate} at ${requestInfo.pickupTime}`
                    }}
                  </p>
                </div>
              </div>
              <div class="summary__item">
                <div class="summary__item-icon">
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9H4V11H6V9ZM10 9H8V11H10V9ZM14 9H12V11H14V9ZM16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V7H16V18Z"
                    />
                  </svg>
                </div>
                <div class="summary__item-content">
                  <h5 class="summary__item-title">Return time</h5>
                  <p class="summary__item-content">
                    {{ `${requestInfo.dropDate} at ${requestInfo.dropTime}` }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="summary-vehicle">
                <div class="summary-vehicle__content">
                  <h6 class="summary__item-title">{{ $t('vehicle-class') }}</h6>
                  <p class="summary__item-content">
                    {{ requestInfo.vehicleClass }}
                  </p>
                </div>
                <div class="summary-vehicle__img">
                  <img
                    :src="require(`~/assets/images/${requestInfo.carImage}`)"
                    alt="car Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--body part-->
        <div class="booking-form">
          <h3 class="booking-modal__sub-title">{{ $t('title') }}</h3>
          <FormBooking :search-data="requestInfo" @submited="CloseModal" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import FormBooking from '../forms/FormBooking.vue'

export default {
  name: 'ModalBooking',
  components: { FormBooking },
  props: {
    requestInfo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    name() {
      return this.data
    }
  },
  methods: {
    CloseModal(e) {
      this.$emit('hideModal', e)
    },
  },
}
</script>

<style lang="scss" scoped>
.base__modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  user-select: none;

  &-body {
    max-width: 668px;
    width: 95%;
    background-color: var(--color-white);
    border-radius: 10px;
    overflow: hidden;
  }

  &-contents {
    padding: 1.7rem;
    max-height: calc(100vh - 5rem);
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0.25rem;
    }
  }
}

.booking-modal {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  &__close-btn .icon svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  &__title {
    font-weight: 600;
    font-size: 2rem;
    text-transform: capitalize;
    line-height: 1.1;
    color: var(--color-heading);

    @include responsive-max('sm') {
      font-size: 1.5rem;
    }
  }

  &__sub-title {
    font-weight: 600;
    font-size: 1.3rem;
    color: var(--color-heading);
    text-transform: capitalize;
    margin-bottom: 1.5rem;
  }
}

.summary {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-light-grey);
  padding-bottom: 0.5rem;

  &__item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  &__item-icon {
    margin-right: 1rem;
  }

  &__item-icon svg {
    width: 1.4rem;
    height: 1.4rem;
    fill: var(--color-text);
  }

  &__item-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-primary);
    text-transform: capitalize;
    margin-bottom: 0.2rem;
  }

  &-vehicle__img img {
    width: 100%;
    height: auto;
  }
}
</style>
