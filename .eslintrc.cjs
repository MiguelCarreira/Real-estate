module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": [2, "always"],
        "indent": ["error", 2],
        "object-curly-spacing": ["error", "always"],
        "no-extra-parens": "error",
        "max-len": ["error", { "code": 100 }],
        "no-multi-spaces": "error",
        "react/display-name": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off"
    }
}
