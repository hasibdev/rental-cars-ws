<template>
   <div class="row">
      <div class="col-6">
         <p class="base-color">Pick-up date</p>

         <div class="calender-wrapper">
            <DateRangePicker :dateRange="dateRange" :autoApply="true" :append-to-body="true">
               <template #ranges>
                  <span class="d-none"></span>
               </template>
            </DateRangePicker>
         </div>
      </div>
      <div class="col-6">
         <p class="base-color">Return date</p>

         <div class="calender-wrapper">
            <DateRangePicker :dateRange="dateRange" :autoApply="true" :append-to-body="true">
               <template #ranges>
                  <span class="d-none"></span>
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
            startDate: null,
            endDate: null
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
         this.$emit("toggle", value)
      },
   },
}
</script>

<style lang="scss">
.base-color {
   color: #ff5f00;
}

.daterangepicker {
   width: 100vw !important;
   left: 0 !important;
   transform: translate(0, 0) !important;
   padding: 30px 0;
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
</style>
