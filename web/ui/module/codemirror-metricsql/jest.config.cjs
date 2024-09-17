/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  setupFiles: ['./setupJest.cjs'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    'lezer-metricsql': '<rootDir>/../../node_modules/@skbkontur-moira/lezer-metricsql/dist/index.cjs',
  },
  transformIgnorePatterns: ['<rootDir>/../../node_modules/(?!@skbkontur-moira/lezer-metriscql)/'],
};
