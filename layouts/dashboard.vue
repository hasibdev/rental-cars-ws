<template>
  <div class="layout__default">
    <div class="nav__sidebar">
      <nav-sidebar />
    </div>
    <div class="main__container">
      <div class="page__container">
        <div class="scrollbar">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavSidebar from '~/components/dashboard/NavSidebar.vue'
export default {
  components: {
    NavSidebar,
  },
  setup() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.layout__default {
  width: 100%;
  max-width: 100%;
  background-color: var(--color-dark);
  height: 100vh;
  overflow: hidden;
  display: flex;
}

.main__container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.page__container {
  height: calc(100vh - 2rem);
  width: calc(100% - 1rem);
  background-color: var(--color-white);
  border-radius: 1rem;
  padding: .5rem 0;
  overflow: hidden;
}

.page__inner {
  overflow: hidden;
  padding: 0;
}

// nav sidebar
.nav__sidebar {
  max-width: 4rem;
}

.main__container {
  width: calc(100% - 4rem);
}
</style>
