module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true        
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "globals": {
        "__dirname": false,
        "process": false
    },
    "rules": {
        "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
        "indent": [
            "warn",
            4
        ],        
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};