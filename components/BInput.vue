<template>
  <div class="b-input">
    <label v-if="label" class="b-input__label">{{ label }}</label>
    <input
      ref="childRef"
      :type="type"
      :value="value"
      :class="{ error: errorMessage }"
      v-bind="$attrs"
      v-on="$listeners"
      @input="handleChange($event.target.value)"
    />
    <p v-if="hints && errorMessage" class="b-input__error">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
const TYPES = [
  'text',
  'password',
  'email',
  'number',
  'url',
  'tel',
  'search',
  'color',
]

const includes = (types) => (type) => types.includes(type)
export default {
  name: 'BInput',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'update',
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        const isValid = includes(TYPES)(value)
        if (!isValid) {
          console.warn(`allowed types are ${TYPES}`)
        }
        return isValid
      },
    },
    min: {
      type: String,
      default: null,
    },
    max: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    hints: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      validate: false,
    }
  },
  computed: {
    errorMessage() {
      if (!this.validate) {
        return ''
      }

      if (this.required && !this.value) {
        return 'This field is required'
      }

      if (this.min && this.value.length < this.min) {
        return `This field must be at least ${this.min} characters`
      }

      if (this.max && this.value.length > this.max) {
        return `This field must less then ${this.max} characters`
      }

      return ''
    },
  },
  methods: {
    handleChange(ev) {
      this.$emit('update', ev)
      this.validate = true
    },

    vlaidateForm() {
      this.validate = true
    },

    resetForm() {
      this.validate = false
    },

    focus() {
      this.$refs.childRef.focus()
    },
  },
}
</script>

<style scoped>
.b-input {
  width: 100%;
  margin-bottom: 1rem;
}

.b-input__label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-transform: capitalize;
}

.b-input input {
  width: 100%;
  padding: 0.4rem 0.75rem;
  border: none;
  background-color: var(--color-light-grey);
  height: 45px;
  border-radius: 4px;
  color: var(--color-text);
  outline: 0;
  font-family: var(--font-primary);
  border: 1px solid transparent;
  font-weight: 500;
  transition: all 0.2s ease;
}

.b-input input:disabled {
  opacity: 0.5;
}

.b-input input::placeholder {
  color: var(--color-text);
  font-weight: 500;
  text-transform: capitalize;
  font-size: 1rem;
}

.b-input input:focus {
  border-color: transparent;
}

/* errors */
.b-input__error {
  color: var(--color-error);
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
}

.b-input input.error {
  border-color: var(--color-error);
  caret-color: var(--color-error);
  background-color: rgba(255, 82, 82, 0.18);
}

.error::placeholder {
  color: var(--color-error);
}
</style>
