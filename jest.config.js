module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['bisect_ppx/src/runtime/bucklescript/jest.js'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/__tests__/support/'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/__tests__/'],
};
