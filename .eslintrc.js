module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true
	},
	extends: [
		"react-app",
		"airbnb",
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint"
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: ["react", "import", "jsx-a11y"],
	rules: {
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [".tsx"]
			}
		],
		"import/prefer-default-export": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-member-accessibility": "off",
		indent: [2, "tab", { SwitchCase: 1 }],
		"react/jsx-indent": [2, "tab"],
		"no-tabs": 0,
		"linebreak-style": 0,
		"global-require": 0,
		"eslint linebreak-style": [0, "error", "windows"]
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"]
		},
		"import/resolver": {
			typescript: {}
		}
	}
};
