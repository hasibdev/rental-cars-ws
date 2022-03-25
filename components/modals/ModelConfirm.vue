<i18n lang="yaml">
{
  'en':
    {
      'req_title': 'Request reservation',
      'text': 'Thank you for your request! <br /> The Roadstars staff will get back to <br /> you as soon as possible!'
    },
  'de':
    {
      'req_title': 'Reservierung anfragen',
      'text': 'Vielen Dank für Ihre Anfrage! <br /> Die Mitarbeiter von Roadstars werden sich so <br /> schnell wie möglich bei Ihnen melden!'
    },
}
</i18n>
<template>
  <div class="confirm__modal">
    <div class="confirm__modal-body">
      <div class="modal-content">
        <div class="d-flex justify-content-between align-items-center p-3">
          <h5 class="req_title">{{$t('req_title')}}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="hideModal"
          ></button>
        </div>
        <div class="modal-body text-center">
          <div class="check__icon">
            <svg
              width="93"
              height="93"
              viewBox="0 0 93 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M67.8435 25.947L37.2 56.5905L20.5065 39.9435L13.95 46.5L37.2 69.75L74.4 32.55L67.8435 25.947ZM46.5 0C20.832 0 0 20.832 0 46.5C0 72.168 20.832 93 46.5 93C72.168 93 93 72.168 93 46.5C93 20.832 72.168 0 46.5 0ZM46.5 83.7C25.947 83.7 9.3 67.053 9.3 46.5C9.3 25.947 25.947 9.3 46.5 9.3C67.053 9.3 83.7 25.947 83.7 46.5C83.7 67.053 67.053 83.7 46.5 83.7Z"
                fill="#f23e3d"
              />
            </svg>
          </div>
          <div>
            <p v-html="$t('text')" class="mb-5"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideModal() {
      this.$emit('hide-modal')
    },
  },
}
</script>

<style scoped>
.confirm__modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 999999999999999999;
}

.confirm__modal-body {
  width: 400px;
}

.check__icon {
  width: 60px;
  height: 60px;
  margin: 1rem auto;
  margin-top: 0;
}
.check__icon svg {
  width: 100%;
  height: 100%;
}
</style>
