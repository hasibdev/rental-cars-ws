<i18n lang="yaml">
{
  'en': { 'title': 'Premium car rental in Berlin' },
  'de': { 'title': 'Erstklassige Autovermietung in Berlin' },
}
</i18n>
<template>
  <section class="hero-section">
    <div class="container">
      <div class="row">
        <!--Booking Form-->
        <div class="col-lg-5 col-md-6">
          <SearchCarForm />
        </div>

        <div class="col-lg-7 col-md-6">
          <div class="hero__right">
            <h3 class="hero__right-title">{{ $t('title') }}</h3>
            <div class="hero__right-img">
              <img
                class="hero_img"
                src="~/assets/images/hero.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>


      <!--Brand Logo-->
      <div class="row">
        <div class="col-12">
          <BrandItem />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SearchCarForm from './hero/SearchCarForm'
import BrandItem from './hero/BrandItem'
export default {
  components: { BrandItem, SearchCarForm },
}
</script>

<style lang="scss" scoped>
.hero-section {
  padding: 4rem 0;

  @include responsive-max('sm') {
    padding: 3rem 0;
  }
}

.hero__right {
  text-align: center;

  &-title {
    font-weight: 600;
    text-transform: capitalize;
    font-size: 3rem;
    text-align: center;
    color: var(--color-heading);
    line-height: 1.1;
    margin-bottom: 2rem;
    width: 85%;
    margin-right: auto;
    margin-left: auto;

    @include responsive-max('md') {
      font-size: 2.5rem;
      width: 100%;
    }

    @include responsive-max('sm') {
      margin-top: 1rem;
    }
  }

  &-img {
    width: 70%;
    height: auto;
    margin: 0 auto;

    @include responsive-max('lg') {
      width: 100%;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
