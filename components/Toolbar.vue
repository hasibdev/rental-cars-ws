<template>
   <div id="Toolbar">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-5 text-white">search</div>
            <div class="col-5">
               <RangeCalender />
            </div>
            <div class="col-2 text-white">button</div>
         </div>
      </div>
   </div>
</template>

<script>
import RangeCalender from "@/components/RangeCalender.vue"
export default {
   components: {
      RangeCalender
   },
}
</script>

<style lang="scss" scoped>
#Toolbar {
   background-color: #191919;
   height: 160px;
   // color: white;
   .container,
   .row {
      height: 100%;
   }
}

// Classess
.base-color {
   color: #ff5f00;
   font-size: 0.875rem;
   font-weight: 500;
   line-height: 1.3;
}
</style>
