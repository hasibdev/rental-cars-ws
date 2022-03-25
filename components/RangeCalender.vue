<template>
   <div class="row">
      <div class="col-6">
         <p class="base-color">Pick-up date!</p>

         <div>
            <DateRangePicker :dateRange="dateRange" />
         </div>
      </div>
      <div class="col-6">
         <p class="base-color">Return date</p>

         <div>
            <DateRangePicker :dateRange="dateRange" />
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

<style lang="scss" scoped>
</style>
