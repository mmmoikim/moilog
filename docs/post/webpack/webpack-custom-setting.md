---
date : 2019-06-24
---

# webpack custom setting

- 웹팩 설정

## install webpack & plugins

```bash
npm init
npm install webpack
npm install webpack-cli ## webpack4 cli
npm install webpack-dev-server ## dev-server
npm install webpack-merge ## for config file merget
npm install html-webpack-plugin ## html template
```

## setting build script package.json

```js
  "scripts": {
    "build-dev": "webpack --mode development",
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --open --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

## make directory

```bash
.
├─ webpackconfig
│  ├─ webpack.config.common.js
│  ├─ webpack.config.dev.js
│  ├─ webpack.config.prod.js
│  └─ index.html
├─ src
│  └─ index.js
├─ .gitignore
├─ webpack.config.js ## webpack config file
├─ package-lock.json
└─ package.json
```

## setting webpack config

- 개발서버, 빌드, 둘다 사용하는 config 나눠서 관리


### src/webpack.config.js
- 개발은 common + dev, 운영은 common + prod 컨피그 머지함.

```js
const merge = require('webpack-merge');
const common = require('./webpackconfig/webpack.config.common.js');
const dev = require('./webpackconfig//webpack.config.dev.js');
const prod = require('./webpackconfig//webpack.config.prod.js');

module.exports = (env, options) => {
    if (options.mode === 'development') {
        return merge(common, dev);
    }
    if (options.mode === 'production') {
        return merge(common, prod);
    }
}
```

### webpack.config.common.js
- HtmlWebpackPlugin : html 탬플렛 만들어서 빌드 하기 위해

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const APP_DIR = path.resolve(ROOT, 'src');
const BUILD_DIR = path.resolve(ROOT, 'dist');

module.exports = {
    entry: {
        app: [APP_DIR + '/index.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: BUILD_DIR
    },
    plugins: [
        //creation of HTML files to serve your webpack bundles
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ]
}
```

### index.html

- html-webpack-plugin을 써서 이 html template으로 빌드 할 꺼임.
- `template: path.resolve(__dirname, 'index.html')` 이 경로에 템플릿 만들어 놓음

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>hello</title>
</head>

<body>
    <div id="app"></div>
</body>

</html>
```

### webpack.config.prod.js

- 빌드 셋팅은 추후에 진행

```js
const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const APP_DIR = path.resolve(ROOT, 'src');
const BUILD_DIR = path.resolve(ROOT, 'dist');

module.exports = {
    mode: 'production'
}
```

### webpack.config.dev.js

- HotModuleReplacementPlugin : 소스 변경 시 바로 적용

```js
const webpack = require('webpack');

const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const APP_DIR = path.resolve(ROOT, 'src');
const BUILD_DIR = path.resolve(ROOT, 'dist');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        //By default this is localhost
        host: 'localhost',
        //Enable webpack's Hot Module Replacement
        hot: true,
        //Tell the server where to serve content from
        contentBase: BUILD_DIR,
        // This option allows you to whitelist services that are allowed to access the dev server.
        allowedHosts: ['host.com'],
        //When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses
        historyApiFallback: true,
        //Shows a full-screen overlay in the browser when there are compiler errors or warnings
        overlay: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
```

## src/index.js

- 엔트리

```js
function component() {
    var element = document.createElement('pre');
    element.innerHTML = 'HELLO !'
    return element;
}

document.body.appendChild(component());
```

## .gitigore

```bash
/node_modules
/dist
```

## build

```bash
npm run build
npm run dev
```

## alias setting
- 절대경로에 호칭 붙이기
- webpack.config
```js
module.exports = {
  resolve: {
    alias: {
      'Src': APP_DIR,
    },
    extensions: ['*', '.js', '.json']
  }
}

```
