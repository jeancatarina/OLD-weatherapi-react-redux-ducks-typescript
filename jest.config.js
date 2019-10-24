// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	clearMocks: true,
	coverageDirectory: "coverage",
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		}
	},
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.svg$": "jest-svg-transformer"
	 },
};
