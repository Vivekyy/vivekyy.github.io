import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    'rules': {
      'quotes': [ 'error', 'single' ],
      'semi': [ 'error', 'always' ],
      'indent': [ 'error', 2 ],
      'no-multi-spaces': [ 'error' ],
      'array-bracket-spacing': [ 'error', 'always' ],
      'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxEOF': 0 } ],
      'no-extra-semi': [ 'error' ],
      'no-unused-vars': [ 'error', { 'argsIgnorePattern': '^_' } ],
      'no-undef': [ 'error' ],
      'no-mixed-spaces-and-tabs': [ 'error' ],
      'no-trailing-spaces': [ 'error' ],
      'lines-around-comment': [ 'error', { 'beforeBlockComment': true } ],
      'comma-style': [ 'error', 'last' ],
      'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
      'key-spacing': [ 'error', { 'beforeColon': false, 'afterColon': true } ],
      '@typescript-eslint/no-explicit-any': 'warn',
    }
  }
];

export default eslintConfig;
