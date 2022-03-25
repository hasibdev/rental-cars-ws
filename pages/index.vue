<template>
  <div>
    <HomeHero />
    <HomeAbout />
    <HomeCarsFilters />
    <HomeFeatures />
    <HomeContact />
  </div>
</template>

<script>
import HomeHero from '~/components/home/HomeHero'
import HomeAbout from '~/components/home/HomeAbout'
import HomeCarsFilters from '~/components/home/HomeCarsFilters'
import HomeFeatures from '~/components/home/HomeFeatures'
import HomeContact from '~/components/home/HomeContact'
export default {
  name: 'IndexPage',
  components: {
    HomeContact,
    HomeFeatures,
    HomeCarsFilters,
    HomeAbout,
    HomeHero,
  },
}
</script>
