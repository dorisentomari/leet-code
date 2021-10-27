module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: '<rootDir>',
    coverageProvider: "v8",
    moduleFileExtensions: [ 'js' ],

    roots: [
        "<rootDir>"
    ],

    testMatch: [
        "**/?(*.)+(spec|__tests__).js"
    ],

    testPathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],

};
