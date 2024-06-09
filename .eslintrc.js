module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        'prettier',
        'prettier/vue',
    ],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        "prefer-const": ["error", {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
    }]
    },
};
