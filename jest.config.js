module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      "^.+\\.css$": "jest-transform-stub",
     
    },
    "jest": {
      "reporters": ["default", "jest-sonar-reporter"]
    },
    coverageReporters: ['text-lcov'],
    testEnvironment: 'jsdom'
  
  };