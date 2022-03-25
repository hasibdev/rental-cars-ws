module.exports = {
   root: true,
   env: {
      browser: true,
      node: true,
   },
   parserOptions: {
      parser: '@babel/eslint-parser',
      requireConfigFile: false,
   },
   extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
   plugins: [],
   // add your custom rules here
   rules: {
      "vue/multi-word-component-names": "off",
      "no-console": "off",
      "vue/no-v-html": "off",
      "camelcase": "off",
      "vue/attributes-order": "off",
      "prefer-const": "off",
      "eqeqeq": "off",
      "vue/order-in-components": "off",
      "spaced-comment": "off",
      "vue/attribute-hyphenation": "off",
      "object-shorthand": "off",
      "vue/first-attribute-linebreak": "off",
   },
}
