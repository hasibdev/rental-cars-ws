<template>
   <div class="row">
      <div class="col-6">
         <p class="base-color mb-1">Pick-up date</p>

         <div class="calender-wrapper">
            <DateRangePicker v-model="dateRange" :dateRange="dateRange" :autoApply="true" :append-to-body="true" @toggle="toggle">
               <!-- Hiding left side range -->
               <template #ranges>
                  <span class="d-none"></span>
               </template>

               <!-- Input -->
               <template #input>
                  {{ $moment(dateRange.startDate).format('MMM DD') }}
               </template>
            </DateRangePicker>
         </div>
      </div>
      <div class="col-6">
         <p class="base-color mb-1">Return date</p>

         <div class="calender-wrapper">
            <DateRangePicker v-model="dateRange" :dateRange="dateRange" :autoApply="true" :append-to-body="true" @toggle="toggle">
               <!-- Hiding left side range -->
               <template #ranges>
                  <span class="d-none"></span>
               </template>

               <!-- Input -->
               <template #input>
                  {{ $moment(dateRange.endDate).format('MMM DD') }}
               </template>
            </DateRangePicker>
         </div>

      </div>
   </div>
</template>

<script>
import DateRangePicker from '@/components/daterange-picker/components/DateRangePicker.vue'
export default {
   components: { DateRangePicker },
   props: {
      opens: {
         type: String,
         default: "center",
      },
   },
   data() {
      return {
         dateRange: {
            startDate: new Date(),
            endDate: new Date()
         },
         dateLocalData: {
            direction: "ltr",
            applyLabel: "Submit",
            format: "dd/mm/yyyy",
         },
      }
   },
   methods: {
      toggle(value) {
         const overlayEl = document.querySelector('#page-overlay')

         if (value) {
            const toolbarEl = document.querySelector('#Toolbar')

            overlayEl.classList.add('show')

            const top = toolbarEl.offsetTop + toolbarEl.scrollHeight
            console.log(top)

            this.$nextTick(() => {
               const rangePickerEl = document.querySelector('.daterangepicker')
               rangePickerEl.style.top = `${top}px`
            })


            window.scroll({
               top: 70,
               left: 0,
               behavior: 'smooth'
            })
         } else {
            overlayEl.classList.remove('show')
         }
      },
   },
}
</script>

<style lang="scss">
$base-color: #ff5f00;
.base-color {
   color: $base-color;
}

.calender-wrapper {
   .vue-daterange-picker {
      .form-control.reportrange-text {
         background-color: transparent;
         border: 0;
         outline: 0;
         color: #fff;
         font-size: 22px;
         padding-left: 0;
         border-bottom: 2px solid #fff;
         border-radius: 0;
      }
   }
}

.daterangepicker {
   width: 100vw !important;
   left: 0 !important;
   transform: translate(0, 0) !important;
   padding: 30px 0;
   margin-top: 0;
   .calendars-container {
      width: 100%;
   }
   .drp-calendar {
      .calendar-table {
         table {
            thead {
               th {
                  &.month {
                     font-size: 1.5rem;
                     font-weight: 700;
                     line-height: 1.17;
                  }
               }
            }
            tbody {
               th {
                  padding: 0.4375rem;
                  display: table-cell;
                  font-size: 0.875rem;
                  font-weight: 500;
                  line-height: 1.3;
                  padding: 3.4% 0;
                  text-align: center;
                  text-transform: uppercase;
               }
               td {
                  padding: 0.6875rem 0;
                  font-size: 1.125rem;
                  font-weight: 500;
                  position: relative;
                  text-align: center;
                  vertical-align: middle;
                  &.start-date::after {
                     content: '';
                     position: absolute;
                     border-top: 0.625rem solid transparent;
                     border-bottom: 0.625rem solid transparent;

                     border-left: 0.625rem solid #191919;

                     left: 0;
                     top: 50%;
                     transform: translateY(-50%);
                  }
                  &.end-date::after {
                     content: '';
                     position: absolute;
                     border-top: 0.625rem solid transparent;
                     border-bottom: 0.625rem solid transparent;

                     border-right: 0.625rem solid #191919;

                     right: 0;
                     top: 50%;
                     transform: translateY(-50%);
                  }
                  &.in-range {
                     background-color: $base-color;
                     border-color: $base-color;
                     color: #fff;
                  }
               }
            }
         }
      }
   }

   // .daterangepicker .drp-calendar {
   //    max-width: initial;
   //    width: initial;
   // }
}

// Active color
.daterangepicker td.active,
.daterangepicker td.active:hover {
   background-color: $base-color;
   border-color: $base-color;
   color: #fff;
}

.daterangepicker td.end-date {
   border-radius: 0;
}
</style>
