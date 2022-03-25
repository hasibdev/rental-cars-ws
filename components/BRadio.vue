<template>
  <div :class="inline ? 'b-radio__inline' : ''" class="b-radio">
    <label v-for="(option, idx) in options" :key="idx" class="b-radio__control">
      <input
        type="radio"
        :name="option.name"
        :value="option.label"
        @input="$emit('input', $event.target.value)"
      />
      {{ option.label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.b-radio__inline {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.b-radio__inline .b-radio__control:not(:last-child) {
  margin-right: 1rem;
  margin-bottom: 0;
}

.b-radio__control {
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}

.b-radio__control:not(:last-child) {
  margin-bottom: 1rem;
}

.b-radio__control:focus-within {
  color: var(--color-primary);
}

input[type='radio'] {
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--color-white);
  margin: 0;
  font: inherit;
  color: var(--color-text);
  width: 1.15em;
  height: 1.15em;
  border: 2px solid var(--color-text);
  border-radius: 50%;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}

input[type='radio']::before {
  content: '';
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--color-primary);
}

input[type='radio']:checked::before {
  transform: scale(1);
}

input[type='radio']:checked {
  border-color: var(--color-primary);
}
</style>
