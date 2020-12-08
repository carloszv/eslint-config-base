# eslint-config-base

Add this package

    yarn add -D @carloszv/eslint-config-base

Add peer dependencies

    npx install-peerdeps -D @carloszv/eslint-config-base

Config eslint: `.eslintrc.js` and `.eslintignore`,

    echo 'module.exports = { extends: "@carloszv/eslint-config-base" }' >> .eslintrc.js
    echo '.eslintrc.js' >> .eslintignore
    echo 'prettier.config.js' >> .eslintignore

Config prettier: `prettier.config.js`

    echo 'module.exports = require("@carloszv/eslint-config-base/prettier.config")' >> prettier.config.js

Config typescript: `tsconfig.json`

    echo '{ "extends": "@carloszv/eslint-config-base/tsconfig" }' >> tsconfig.json
