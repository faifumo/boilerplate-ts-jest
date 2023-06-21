module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ['text-summary','json', 'html', 'cobertura', 'lcov'],
//   coverageThreshold: { 
//     // https://jestjs.io/docs/configuration#coveragethreshold-object
//     global: {
//       branches: 80,
//       functions: 80,
//       lines: 80,
//       statements: 80,
//     },
//   },
};