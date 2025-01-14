import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
      'no-console': 'warn', // Попередження при використанні `console.log`, `console.error` та інших методів консолі
      'no-unused-vars': 'warn', // Попередження при наявності не використаних змінних
      'react/prop-types': 'off', // Вимикаємо правило для перевірки типів пропсів (якщо не використовуєте PropTypes)
      'react/react-in-jsx-scope': 'off', // Вимикаємо правило для використання React в JSX, якщо не використовуєте стару версію React (до версії 17)
      eqeqeq: 'warn', // Попередження при використанні нестрогих порівнянь (наприклад, `==` замість `===`)
      'no-trailing-spaces': 'error', // Помилка при наявності пробілів в кінці рядка
      indent: ['error', 4], // Помилка при некоректних відступах, 2 пробіли
      semi: ['error', 'always'], // Вимога ставити крапку з комою в кінці рядків
      quotes: ['error', 'single'], // Вимога використовувати одинарні лапки
    },
  },
];
