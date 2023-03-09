module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      "^.+\\.css$": "jest-transform-stub",
     
    },
    testEnvironment: 'jsdom'
  
  };