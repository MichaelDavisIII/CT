module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "comma-dangle": [2,"never"],
        "no-console": 2,
        "no-debugger": 2,
        "no-unreachable": 2,
        "default-case": 2,
        "no-alert": 2,
        "no-eval": 2,
        "no-implied-eval": 2,
        "no-undef-init": 2,
        "no-undef": 2,
        "no-undefined": 2,
        "no-unused-vars": 2,
        "brace-style": [2,"1tbs",{"allowSingleLine":true}],
        "indent": 4,
        "no-nested-ternary": 2,
        "no-underscore-dangle": 2,
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "backtick"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
