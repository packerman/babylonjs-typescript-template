# babylonjs-typescript-template

1. [Babylon.js](https://www.babylonjs.com/)
1. [TypeScript](https://www.typescriptlang.org/)
1. [webpack](https://webpack.js.org/)

# Basic setup

[See also](https://doc.babylonjs.com/features/npm_support)

## Run commands

```bash
npm init -y
npm install --save-dev typescript
npx tsc --init
npm install --save babylonjs

```

## In tsconfig.json

```json
{
    "compilerOptions": {
        "lib": [
             "dom",
             "es2015.promise",
             "es5"
        ],
        "types": [
            "babylonjs"
        ],
        "outDir": "./dist",
        "noImplicitAny": true,
        "target": "es5",
        "checkJs": false,
        "allowJs": true
    }
}
```

## Add include and exclude to tsconfig.json

```json
"include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]

```

## Put webpack.config.js

```javascript
const path = require("path");

module.exports = {
    entry: {
        app: './src/main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    plugins: [

    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    mode: "development"
}
```

## Install packages

```bash
npm install --save-dev webpack
npm install --save-dev webpack-cli
npm install --save-dev ts-loader
```

## Create files index.html and src/main.ts

# Add webpack-dev-server

    * See [webpack-dev-server site](https://webpack.js.org/configuration/dev-server/)
    * and [github](https://github.com/webpack/webpack-dev-server)
    * Set contentBase https://webpack.js.org/configuration/dev-server/#devservercontentbase
    * Set publicPath https://webpack.js.org/configuration/dev-server/#devserverpublicpath-

## Run

```bash
npm install webpack-dev-server --save-dev
```

## Entry in webpack.config.js

```javascript
devServer: {
        port: 8080,
        publicPath: '/dist/'
    },
```

## Entry in package.json scripts

```json
"scripts": {
    "start:dev": "webpack-dev-server",
  }
```

## Install ESLint

 * npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
 * See https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md for configuration instruction
 * Set additional rules, like
    ```json
    rules: {
      "semi": ["error", "always"]
    },
    ```

## Notes

### For MacOS

If error
```sh
gyp: No Xcode or CLT version detected!
```

occurs see https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md
