module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      "^.+\\.css$": "jest-transform-stub",
     
    },
    coverageReporters: ['text-lcov'],
    testEnvironment: 'jsdom'
  
  };