module.exports = {
    "testMatch": [
        "**/*.steps.js",
        "**/*.test.js"
    ],
    "moduleNameMapper": {
        "#@/(.*)": "<rootDir>/$1",
        "#app": "<rootDir>/app.js",
        "#test_data": "<rootDir>/src/tests/resources/test_data/test_data.js",
        "#models": "<rootDir>/subpaths/models.js",
    }
};
