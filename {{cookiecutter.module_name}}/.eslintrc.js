module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'lines-between-class-members': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 0,
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-return-await': 'warn',
    'arrow-body-style': 0,
    'prefer-template': 0,
    'import/no-extraneous-dependencies': 'off',
    'spaced-comment': 'off',
    'default-case': 'off',
    'no-unused-vars': 'warn',
    'no-shadow': 0,
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-no-constructed-context-values': 0,
    'react/jsx-filename-extension': 'off',
    'consistent-return': 0,
    'no-plusplus': 'off',
    'camelcase': 0,
    'func-names': 'off',
    'no-else-return': 'warn',
    'no-undef': 'off',
    'no-promise-executor-return': 0,
    'array-callback-return': 'warn',
    'no-lonely-if': 'off',
    'radix': 0,
    'import/newline-after-import': 0,
    'no-param-reassign': 'off',
    'prefer-arrow-callback': 0,
    'react/jsx-curly-brace-presence': 'warn',
    'default-param-last': 0,
    'no-console': 'warn',
    'react/function-component-definition': 0,
    'prefer-destructuring': 'warn',
    'no-var': 0,
    'vars-on-top': 0,
    'jsx-a11y/alt-text': 'off',
    'object-shorthand': 'off',
    'react/jsx-no-useless-fragment': 0,
    'react/require-default-props': 'off',
    'no-redeclare': 0,
    'no-continue': 'warn',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/destructuring-assignment': 'off',
    'prefer-const': 0,
    'react/button-has-type': 'warn',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'react/no-array-index-key': 0,
    'react/no-unused-prop-types': 0,
    'no-restricted-syntax': 'warn',
    'import/no-useless-path-segments': 0,
    'import/no-mutable-exports': 0,
    'prefer-object-spread': 0,
    'no-unreachable': 'warn',
    'react/prop-types': 'off',
    'no-useless-constructor': 'off',
    'global-require': 'warn',
    'no-empty-interface': 'off',
    'no-empty': 'warn',
    'no-lone-blocks': 'warn',
    'dot-notation': 'warn',
    'no-empty-function': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'no-underscore-dangle': 'warn',
    'import/no-dynamic-require': 'warn',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-tag-spacing': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    'no-process-exit': 'error',
    'react/jsx-curly-newline': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'prettier/prettier': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/sort-comp': 'off',
    'no-bitwise': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/iframe-has-title': 'warn',
    'guard-for-in': 'warn',
    'no-nested-ternary': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'react/jsx-wrap-multilines': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/no-unstable-nested-components': 'warn'
  },
};
