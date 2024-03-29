module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: [
    'jest'
  ],
  extends: [
    'eslint:recommended'
  ],
  globals: {
    Cypress: false,
    Event: true,
    MouseEvent: true,
    Shepherd: false,
    assert: false,
    cy: false,
    document: false,
    expect: false,
    require: false,
    window: false
  },
  env: {
    es6: true,
    mocha: true,
    node: true
  },
  rules: {
    'no-console': 'off'
  }
};
