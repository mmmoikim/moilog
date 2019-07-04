---
date : 2019-07-05
---

# visual studio code vue debugguing

1. 확장프로그램 'Debugger for Chrome' 설치
2. vue.config.js 파일셋팅

```js
    module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  }
}
```

3. launch.json 파일 셋팅

- 디버깅 탭 - 설정

```js
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "vuejs: chrome",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}/src",
      "breakOnLoad": true,
      "sourceMapPathOverrides": {
        "webpack:///./src/*": "${webRoot}/*"
      }
    }
  ]
}
```