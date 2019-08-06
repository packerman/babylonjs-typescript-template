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

See [webpack-dev-server site](https://webpack.js.org/configuration/dev-server/)
and [github](https://github.com/webpack/webpack-dev-server)

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

# Add tslint

```
npm install tslint --save-dev
npx tslint --init
```

