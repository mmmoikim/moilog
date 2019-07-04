---
date : 2019-07-04
---

# webpack &  babel

## 웹팩

- 웹팩은 페이지 로딩 시 많은 스트립트를 가져오며 생기는 Http 병목현상을 해소하기 위해 js파일들을 번들링해 하나의 파일로 만든다.
- 하나의 번들파일의 용량이 커지며 화면 로딩이 늦어지는 것을 해소하기위해 코드 스플리팅을해 번들 파일d
- 웹팩은 모듈에서 필요한 함수들만 번들에 포함시킨다.
- 웹팩4는 토이앱을 kickstart하거나 할 때 config 파일을 모두 셋팅하는 복잡 함을 해소 시키기 위해 'zero configration'으로 시작 할 수 있다.

## 웹팩 4 시작하기

1. 프로젝트 폴더에 웹팩, 웹팩 cli install

```bash
npm i webpack --save-dev
npm i webpack-cli --save-dev
```

2. pakage.json에 스크립트 추가

```js
"scripts": {
  "build": "webpack"
}
```

3. `./src/index.js` 파일 만들기

4. 빌드하기

```bash
npm run build
```

5. dev, prod 모드 나누기

- prod 모드는 minifired 된다.

```js
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
```

6. 데브 모드 실행

```bash
npm run dev
```

## 바벨

- 바벨을 es6문법을 오래된 브라우저에서도 실행 가능하게 번역해준다.

## 바벨 시작하기

1. 프로젝트에 설치하기

```bash
npm i @babel/core babel-loader @babel/preset-env --save-dev
```

2. 루트 폴더에 .babelrc(바벨 컨피크 파일) 만들기

```js
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

3. 웹팩 빌드 시 바벨을 사용하기 위해 webpack.config.js(웹팩 컨피크 파일) 생성

- 웹팩 컨피그 파일 없이 스크립트로도 가능

```js
"scripts": {
    "dev": "webpack --mode development --module-bind js=babel-loader",
    "build": "webpack --mode production --module-bind js=babel-loader"
  }
```

1. webpack.config.js에 js파일 타켓으로 바벨 로더 설정

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```
