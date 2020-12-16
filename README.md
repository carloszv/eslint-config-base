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
    
Config prettier: `custom.d.ts`

    echo 'declare module "*.svg" {' >> custom.d.ts
    echo 'const content: any' >> custom.d.ts
    echo 'export default content' >> custom.d.ts
    echo '}' >> custom.d.ts

Config typescript: `tsconfig.json`

    echo '{ "extends": "@carloszv/eslint-config-base/tsconfig",' >> tsconfig.json
    echo ' "compilerOptions": {' >> tsconfig.json
    echo ' "jsx": "react",' >> tsconfig.json
    echo ' "baseUrl": "./src",' >> tsconfig.json
    echo ' "allowJs": true,' >> tsconfig.json
    echo ' "noFallthroughCasesInSwitch": true' >> tsconfig.json
    echo '},' >> tsconfig.json
    echo '"include": [ "custom.d.ts", "src" ],' >> tsconfig.json
    echo '"exclude": [ "node_modules" ] }' >> tsconfig.json
