module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    "collectCoverage": true,
    transform: {
        '.+\\.ts$': 'ts-jest',
    }
}