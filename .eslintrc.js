module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
   
  parserOptions: {
    'ecmaVersion': 2016,
    'sourceType': 'module',
    'requireConfigFile': false,
  },
  env: {
    node: true
  },
  // 0 = off, 1 = warn, 2 = error
  rules: {
    // rules https://eslint.org/docs/rules/
    semi: 2,
    // we only want single quotes
    'quotes': ['error', 'single'],
    // we use 2 spaces to indent our code
    'indent': ['error', 2],
    // we want to avoid useless spaces
    'no-multi-spaces': ['error'],
  
    // we need to disable the rule base for all for this works in ts 
    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.16.1/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': ['error']
  },

  // Override rules for JS
  overrides: [
    {
        
      'files': ['**/*.js?(x)'],
      'rules': {
        '@typescript-eslint/no-var-requires': 'off',
      }
    },
  ]
};