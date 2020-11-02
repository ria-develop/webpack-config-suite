export default {
  coverageProvider: 'v8',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  },
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  collectCoverageFrom: ['src/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
  projects: ['<rootDir>/packages/*/jest.config.ts'],
  coverageDirectory: '<rootDir>/coverage/'
};
