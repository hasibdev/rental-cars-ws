<i18n lang="yaml">
{
  'en': { 'item1': 'Legal', 'item2': 'Privacy' },
  'de': { 'item1': 'Impressum', 'item2': 'Datenschutz' },
}
</i18n>
<template>
  <div class="p-5 mt-5" style="background-color: #dbdbdb">
    <div class="container text-center">
      <div class="d-flex justify-content-center align-items-center gap-5">
        <NuxtLink :to="localePath('legal')"
          ><a class="footer-item" href="">{{ $t('item1') }}</a></NuxtLink
        >
        <NuxtLink :to="localePath('privacy')"
          ><a class="footer-item" href="">{{ $t('item2') }}</a></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.footer-item {
  color: var(--color-dark);
  font-size: 1rem;
  font-weight: 500;
  text-decoration: underline;
}
.copywrite {
  font-size: 0.875rem;
  font-weight: 500;
  color: #726e6f;
}
</style>
