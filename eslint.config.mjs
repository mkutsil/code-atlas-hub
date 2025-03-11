import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        settings: {
            react: {
                version: 'detect' // Automatically detects the React version
            }
        },
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
            'react/react-in-jsx-scope': 'off', // Disable unnecessary import rule
            'react/jsx-indent': [2, 4],
            'indent': [2, 4],
            'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
            'quotes': ['error', 'single', { 'avoidEscape': true }] // Enforce single quotes
        },
    }
];