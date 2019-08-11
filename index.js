const order = require('./order')

module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-space-before': 'never',
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': 'named-where-possible',
    'function-url-quotes': 'always',
    'keyframes-name-pattern': /^[a-z]+(?:-[a-z]+)*$/,
    'linebreaks': 'unix',
    'max-nesting-depth': [5, {
      ignore: [
        'blockless-at-rules',
      ],
    }],
    'media-feature-name-no-vendor-prefix': true,
    'media-query-list-comma-newline-before': 'never-multi-line',
    'no-empty-first-line': true,
    'property-no-vendor-prefix': true,
    'selector-attribute-quotes': 'always',
    'selector-max-id': 0,
    'selector-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'double',
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true,
    // Rules from stylelint-scss
    'scss/at-rule-no-unknown': true,
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/no-duplicate-dollar-variables': true,
    // Rules from stylelint-order
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        {
          type: 'at-rule',
          name: 'extend',
          hasBlock: false,
        },
        'declarations',
        'at-rules',
        'rules',
      ],
      {
        unspecified: 'bottom',
      },
    ],
    'order/properties-order': [
      order,
      {
        unspecified: 'bottomAlphabetical',
        emptyLineBeforeUnspecified: 'always',
      },
    ],
  },
}
