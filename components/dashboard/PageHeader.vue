<template>
  <div class="header">
    <div class="header__left">
      <h2 class="header__title">Good Morning, Mazharul!</h2>
    </div>
    <div class="header__right">
      <button class="base-btn base-btn__dark">+ Add reservation</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-light-grey);
  padding: 0.25rem 1rem .75rem 1rem;

  &__title {
    font-size: 1.75rem;
    text-transform: capitalize;
    font-weight: 400;
    color: var(--color-heading);
    margin-bottom: 0;
  }
}
</style>
