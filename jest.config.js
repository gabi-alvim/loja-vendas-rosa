module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      "^.+\\.css$": "jest-transform-stub",
    },
      // ...
    coverageReporters: ["lcov", "text"],
    testPathIgnorePatterns: [
      "./e2e",
    ],
    coverageDirectory: "./coverage",
    reporters: [
      "default",
      [
        "jest-sonar",
        {
          outputDirectory: "./coverage",
          outputName: "lcov.info",
        },
      ],

    ],
  };