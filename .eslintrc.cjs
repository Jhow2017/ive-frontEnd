module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { varsIgnorePattern: '^React$' },
        ],
        '@typescript-eslint/no-explicit-any': 'off', // Desativa erro para `any`
        '@typescript-eslint/ban-ts-comment': 'warn', // Muda `on` para `warn`
        'react/no-unescaped-entities': 'off', // Ignora aspas não escapadas
        '@next/next/no-img-element': 'off', // Permite o uso de `<img>`
    },
};
