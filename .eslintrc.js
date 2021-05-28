module.exports = {
    parser: 'vue-eslint-parser',
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        // 'plugin:vue/vue3-recommended',
        // 'airbnb-base',
        'eslint:recommended',
        // 'plugin:@typescript-eslint/recommended', //typescript-eslint推荐规则
        // 'prettier/@typescript-eslint', //使得@typescript-eslint中的样式规范失效，遵循prettier中的样式规范
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    settings: {
        'import/parsers': {
            // 使用 TypeScript parser
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    // plugins: ['vue', '@typescript-eslint'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false
            }
        ]
    }
};
