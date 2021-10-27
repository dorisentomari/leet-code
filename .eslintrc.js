module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 13
    },
    "rules": {
        "semi": ["warn", "always"],
        "indent": ["warn", 4],
        "no-unused-vars": "off",
    }
};
