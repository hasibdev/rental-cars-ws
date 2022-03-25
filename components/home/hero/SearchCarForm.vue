<i18n lang="yaml">
{
  'en':
    {
      'vehicle-class': 'Your vehicle class',
      'pick-location': 'Pick-up location',
      'pick-Date': 'Pick up Date',
      'return-Date': 'Return date',
      'req-btn': 'Request now',
      'select-location': 'Drop off and pick up service',
      'time': 'Time',
    },
  'de':
    {
      'vehicle-class': 'Ihre Fahrzeugklasse',
      'pick-location': 'Abholort',
      'pick-Date': 'Abholdatum',
      'return-Date': 'Rückgabedatum',
      'req-btn': 'Jetzt anfragen',
      'select-location': 'Bring- und Abholservice',
      'time': 'Zeit',
    },
}
</i18n>
<template>
   <div class="search-box">
      <b-select ref="vehicleType" v-model="requestForm.vehicleClass" :options="vehicleClasses" display-property="vehicle_name" value-property="vehicle_name" :placeholder="$t('vehicle-class')" required outline>
      </b-select>

      <!-- Pick Location -->
      <div class="mt-3">
         <label class="form__label">{{ $t('pick-location') }}</label>
         <b-select ref="location" v-model="requestForm.location" :options="locations" display-property="location_name" value-property="location_name" :placeholder="$t('pick-location')" required outline icon class="search-box__select">
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="var(--color-grey)" />
            </svg>
         </b-select>
      </div>

      <!-- Range Calender -->
      <div class="mt-3">
         <label class="form__label">Calender</label>
         <div>
            <RangeCalender />
         </div>
      </div>

      <!-- Pick date -->
      <div class="mt-3">
         <label class="form__label">{{ $t('pick-Date') }}</label>
         <div class="row">
            <div class="col-6">
               <div class="date__picker-innner">
                  <span class="date__picker-innner-icon">
                     <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9H4V11H6V9ZM10 9H8V11H10V9ZM14 9H12V11H14V9ZM16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V7H16V18Z" />
                     </svg>
                  </span>
                  <Datepicker v-model="requestForm.pickupDate" input-class="datepicker-input" typeable format="dd/MM/yyyy" :placeholder="$t('pick-Date')" :language="langLocale" @selected="highlightTo" />
               </div>
            </div>
            <div class="col-6">
               <b-select v-model="requestForm.pickupTime" :placeholder="$t('time')" :options="[
              '8:30',
              '9:00',
              '9:30',
              '10:00',
              '10:30',
              '11:00',
              '11:30',
              '12:00',
              '12:30',
              '13:00',
              '13:30',
              '14:00',
              '14:30',
              '15:00',
              '15:30',
              '16:00',
              '16:30',
              '17:00',
              '17:30',
              '18:00',
              '18:30',
            ]" outline />
            </div>
         </div>
      </div>

      <!-- Return date -->
      <div>
         <label class="form__label">{{ $t('return-Date') }}</label>
         <div class="row">
            <div class="col-6">
               <div class="date__picker-innner">
                  <span class="date__picker-innner-icon">
                     <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9H4V11H6V9ZM10 9H8V11H10V9ZM14 9H12V11H14V9ZM16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V7H16V18Z" />
                     </svg>
                  </span>
                  <Datepicker v-model="requestForm.dropDate" required input-class="datepicker-input" format="dd/MM/yyyy" :placeholder="$t('return-Date')" :language="langLocale" @selected="highlightTo" />
               </div>
            </div>
            <div class="col-6">
               <b-select v-model="requestForm.dropTime" :placeholder="$t('time')" :options="[
              '8:30',
              '9:00',
              '9:30',
              '10:00',
              '10:30',
              '11:00',
              '11:30',
              '12:00',
              '12:30',
              '13:00',
              '13:30',
              '14:00',
              '14:30',
              '15:00',
              '15:30',
              '16:00',
              '16:30',
              '17:00',
              '17:30',
              '18:00',
              '18:30',
            ]" outline />
            </div>
         </div>
      </div>

      <div class="d-grid mt-4">
         <button class="base-btn base-btn__dark request_btn" @click="requestToBook">
            {{ $t('req-btn') }}
         </button>
      </div>

      <ModalBooking v-if="isShowBookingFrom" :request-info="requestForm" @hideModal="hideBookingForm" />

      <ModelConfirm v-if="isSubmitedBookingForm" @hideModal="hideConfirmModal" />
   </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { en, de } from 'vuejs-datepicker/dist/locale'
import ModalBooking from '../../modals/ModalBooking.vue'
import ModelConfirm from '../../modals/ModelConfirm.vue'
import RangeCalender from '@/components/RangeCalender.vue'

export default {
   namd: 'SearchCarForm',
   components: { Datepicker, ModalBooking, ModelConfirm, RangeCalender },
   data() {
      return {
         en,
         de,
         isShowBookingFrom: false,
         isSubmitedBookingForm: false,
         error: false,
         requestForm: {
            vehicleClass: '',
            location: '',
            pickupDate: '',
            pickupTime: '',
            dropDate: '',
            dropTime: '',
            carImage: 'hero.png',
         },
         requestFormInit: {
            vehicleClass: '',
            location: '',
            pickupDate: '',
            pickupTime: '',
            dropDate: '',
            dropTime: '',
            carImage: 'hero.png',
         },
         vehicleClasses: [],
         locations: [],
      }
   },
   computed: {
      langLocale() {
         if (this.$i18n.locale === 'de') {
            return this.de
         }
         return this.en
      },
   },
   watch: {
      'requestForm.dropDate'(dropDate) {
         if (dropDate === this.requestForm.pickupDate) {
            this.error = 'Return date not same with pickup date'
            console.log(this.error)
         }
      },
   },
   async mounted() {
      await this.getVehicleClasses()
      await this.getLocations()
   },
   methods: {
      highlightTo(val) {
         console.log(val)
      },
      async getVehicleClasses() {
         try {
            const { vichiletype } = await this.$axios.$get(
               `api/get-vhehicle/${this.$i18n.locale}`
            )
            this.vehicleClasses = vichiletype
         } catch (error) { }
      },

      async getLocations() {
         try {
            const { lcoations } = await this.$axios.$get(
               `api/get-location/${this.$i18n.locale}`
            )
            this.locations = lcoations
         } catch (error) { }
      },

      requestToBook() {
         this.$refs.vehicleType.vlaidateForm()
         this.$refs.location.vlaidateForm()

         if (this.$refs.vehicleType.errorMessage) {
            return
         }

         if (this.$refs.location.errorMessage) {
            return
         }

         this.isShowBookingFrom = true
      },

      resetBookingForm() {
         Object.assign(this.requestForm, this.requestFormInit)
      },

      hideBookingForm(e) {
         this.isShowBookingFrom = false
         this.$refs.vehicleType.submitedForm()
         this.$refs.location.submitedForm()
         this.resetBookingForm()

         if (e.status) {
            this.isSubmitedBookingForm = true
            setTimeout(() => {
               this.isSubmitedBookingForm = false
            }, 3000)
         }
      },
      hideConfirmModal() {
         this.isSubmitedBookingForm = false
      },
   },
}
</script>

<style lang="scss" scoped>
.search-box {
   margin-top: 0.6rem;
   max-width: 500px;
   background-color: var(--color-white);
   border-radius: 0.25rem;
   padding: 2rem;
   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
   border: 1px solid var(--color-light-grey);
   margin-bottom: 1rem;
}

.form-select__inner {
   width: 100%;
   position: relative;
}

.form-select__inner .icon {
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   left: 10px;
}

.form__select-box {
   outline: none;
   width: 100%;
   border-radius: 4px;
}

select.form-select.form__select-box {
   border-color: #ccc !important;
   padding: 0.6rem 0.8rem;
   padding-right: 2rem;
}

.form__select-box--icon {
   padding-left: 2.2rem !important;
}

.icon {
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   left: 10px;
}

label {
   margin-bottom: 0.5rem;
   font-size: 0.875rem;
   color: #575757;
   margin-left: 0.2rem;
}

.search_location {
   position: absolute;
}

.request_btn {
   padding: 0.5rem;
}

.request_btn:hover {
   background-color: var(--color-primary);
}

.error__message {
   font-size: 0.875rem;
}

.form__label {
   text-transform: capitalize;
   font-weight: 500;
   color: var(--color-dark);
}

@media (max-width: 768px) {
   .date__picker {
      width: 100%;
   }
   .search-box {
      width: 100%;
      padding: 1rem;
      margin-top: 0rem;
   }
}
@media (max-width: 576px) {
   .date__picker {
      width: 100%;
   }
   .search-box {
      width: 100%;
      padding: 1rem;
      margin-top: 0rem;
   }
   .m_margin {
      margin-top: 1rem;
   }
}
</style>
