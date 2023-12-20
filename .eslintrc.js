module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['prettier', '@typescript-eslint/eslint-plugin'],
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'consistent-return': 0,
        'handle-callback-err': 1,
        'max-classes-per-file': 1,
        'no-catch-shadow': 2,
        'no-console': 1,
        'no-mixed-requires': 2,
        'no-param-reassign': 0,
        'no-restricted-syntax': [
            2,
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'no-underscore-dangle': 0,

        'import/no-default-export': 2,

        'import/no-extraneous-dependencies': [
            2,
            {
                devDependencies: ['**/test/**'],
                optionalDependencies: false,
            },
        ],

        'import/prefer-default-export': 0,

        'prettier/prettier': 2,

        '@typescript-eslint/naming-convention': [
            2,
            {
                selector: ['enum'],
                format: ['UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {
                selector: ['typeLike'],
                format: ['PascalCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
        ],
        '@typescript-eslint/no-shadow': [2],
    },
};
