<i18n lang="yaml">
{
  'en':
    {
      'company': 'Company *',
      'ms': 'Mrs.',
      'mr': 'Mr.',
      'first-name': 'First name *',
      'last-name': 'Last name *',
      'date-birth': 'Date of Birth *',
      'place-birth': 'Place of birth *',
      'address': 'Address *',
      'city': 'City *',
      'zip': 'ZIP *',
      'country': 'Country *',
      'phone': 'Phone *',
      'email': 'Email *',
      'confirm_email': 'Confirm Email *',
      'id-no': 'ID No. *',
      'driving-license': 'Drivers license No. *',
      'message': 'Write your message here',
      'cancel': 'Cancel',
      'request': 'Request now',
    },
  'de':
    {
      'company': 'Firmenname *',
      'ms': 'Frau',
      'mr': 'Herr',
      'first-name': 'Vorname *',
      'last-name': 'Nachname *',
      'date-birth': 'Geburtsdatum *',
      'place-birth': 'Geburtsort *',
      'address': 'Adresse',
      'city': 'Stadt *',
      'zip': 'PLZ *',
      'country': 'Land *',
      'phone': 'Mobiltelefonnummer*',
      'email': 'E-mail *',
      'confirm_email': 'E-mail bestätigen *',
      'id-no': 'Ausweisnummer *',
      'driving-license': 'Führerscheinnummer *',
      'message': 'Nachricht',
      'cancel': 'Abbrechen',
      'request': 'Jetzt anfragen',
    },
}
</i18n>
<template>
  <form @submit.prevent="requestToBook">
    <b-input v-model="bookingForm.company_name" :placeholder="$t('company')" />
    <b-radio
      v-model="bookingForm.name_title"
      inline
      :options="[
        { label: 'Mr', name: 'maritialStatus' },
        { label: 'Mrs', name: 'maritialStatus' },
      ]"
    />
    <b-input v-model="bookingForm.first_name" :placeholder="$t('first-name')" />
    <b-input v-model="bookingForm.last_name" :placeholder="$t('last-name')" />
    <div class="inline-input__inner">
      <DatePicker
        v-model="bookingForm.date_of_birth"
        class="booking-date__picker date__picker"
        value-type="format"
        format="DD/MM/YYYY"
        :placeholder="$t('date-birth')"
      />
      <b-input
        v-model="bookingForm.place_of_birth"
        class="last-input"
        :placeholder="$t('place-birth')"
      />
    </div>
    <b-input v-model="bookingForm.address" :placeholder="$t('address')" />
    <div class="inline-input__inner">
      <b-input v-model="bookingForm.city" :placeholder="$t('city')" />
      <b-input
        v-model="bookingForm.zip"
        class="last-input"
        :placeholder="$t('zip')"
      />
    </div>
    <b-select
      v-model="bookingForm.country"
      :options="countries"
      display-property="country_name"
      value-property="id"
      :placeholder="$t('country')"
      required
    />
    <b-input v-model="bookingForm.phone" :placeholder="$t('phone')" />
    <b-input v-model="bookingForm.email" :placeholder="$t('email')" />
    <b-input v-model="bookingForm.id_no" :placeholder="$t('id-no')" />
    <b-input
      v-model="bookingForm.drivers_license_no"
      :placeholder="$t('driving-license')"
    />
    <b-textarea
      v-model="bookingForm.message"
      :placeholder="$t('message')"
      :height="150"
    />

    <div class="booking__form-acitons">
      <button class="base-btn base-btn__primary" @click="requestRejected">
        {{ $t('cancel') }}
      </button>
      <button class="base-btn base-btn__dark">
        {{ $t('request') }}
      </button>
    </div>
  </form>
</template>

<script>
import BInput from '../BInput.vue'
import BRadio from '../BRadio.vue'
import BSelect from '../BSelect.vue'
import BTextarea from '../BTextarea.vue'
export default {
  name: 'FormBooking',
  components: {
    BInput,
    BRadio,
    BSelect,
    BTextarea,
  },
  props: {
    searchData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      countries: [],
      bookingForm: {
        company_name: '',
        name_title: '',
        first_name: '',
        last_name: '',
        date_of_birth: '',
        place_of_birth: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        phone: '',
        email: '',
        confirm_email: '',
        id_no: '',
        drivers_license_no: '',
        message: '',
        vehicle_id: 2,
        location_id: 2,
        pickup_date: this.searchData.pickupDate,
        pickup_time: this.searchData.pickupTime,
        return_date: this.searchData.dropDate,
        return_time: this.searchData.dropTime,
      },
    }
  },
  async mounted() {
    await this.getCountries()
  },
  methods: {
    async requestToBook() {
      try {
        await this.$axios.$post('api/request-booking', this.bookingForm)
        this.$emit('submited', { status: true })
      } catch (error) {}
    },
    async getCountries() {
      try {
        const { countrys } = await this.$axios.$get(
          `api/get-countries/${this.$i18n.locale}`
        )
        this.countries = countrys
      } catch (error) {}
    },
    requestRejected() {
      this.$emit('submited', { status: false })
    },
  },
}
</script>

<style scoped>
.date__picker {
  margin-bottom: 1rem;
}

.inline-input__inner {
  display: flex;
  grid-gap: 1rem;
}

.booking__form-acitons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
}

@media (max-width: 576px) {
  .inline-input__inner {
    display: block;
  }

  .inline-input__inner .last-input {
    margin-bottom: 1rem;
  }
}
</style>
