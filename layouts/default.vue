<template>
   <div>
      <Header />
      <Nuxt />
      <Footer />

      <div id="page-overlay"></div>
   </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
export default {
   components: {
      Footer,
      Header,
   },
}
</script>

<style lang="scss">
#page-overlay.show {
   position: fixed;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   background: rgba(15, 15, 15, 0.63);
   z-index: 99;
}
</style>
