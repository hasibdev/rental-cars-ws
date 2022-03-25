<i18n lang="yaml">
{ 'en': { 'title': 'Legal' }, 'de': { 'title': 'Impressum' } }
</i18n>
<template>
  <div class="container">
    <page-header :title="$t('title')" />
    <div class="row">
      <div class="col-12">
        <div class="legal-page__header">
          <ul class="legal-page__contents">
            <li class="legal-page__header-item">Roadstars GmbH</li>
            <li class="legal-page__header-item">
              Kaiser-Friedrich-Straße 65 <br />
              10627 Berlin
            </li>
            <li class="legal-page__header-item">
              Tel.-Nr.: +49 173 6945581 <br />
              E-Mail: info@roadstars-cars.de
            </li>
            <li class="legal-page__header-item">USt-IdNr.: 27/495/50171</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/common/PageHeader.vue'
export default {
  name: 'Legal',
  components: {PageHeader},
  head: {
    title: 'RoadStar | Legal',
  },
}
</script>

<style scoped>
.legal-page__header {
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--color-light-grey);
}

.legal-page__contents {
  list-style: none;
  padding: 0;
}

.legal-page__header-item {
  margin-bottom: 0.75rem;
  color: var(--color-text);
}
</style>
