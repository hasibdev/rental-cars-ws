<template>
  <div>
    <Header />
    <Toolbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
import Toolbar from '~/components/Toolbar.vue'
export default {
  components: {
    Footer,
    Header,
    Toolbar,
  },
}
</script>

<style scoped></style>
