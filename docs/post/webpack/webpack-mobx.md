---
date : 2019-08-19
---

# webpack mobx setting

- https://velog.io/@velopert/MobX-3-%EC%8B%AC%ED%99%94%EC%A0%81%EC%9D%B8-%EC%82%AC%EC%9A%A9-%EB%B0%8F-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%B0%A9%EB%B2%95-tnjltay61n
``` bash
npm install mobx
npm install mobx-react
npm install mobx-react-devtools //버전문제있음 확인해야됨
npm install @babel/plugin-proposal-decorators
npm install @babel/plugin-syntax-dynamic-import
```

- .bablelrc 플러그인 추가
``` bash
{
  "plugins": [
    ["@babel/plugin-proposal-decorators", {
      "legacy": true
    }],
    ["@babel/plugin-proposal-class-properties", {
      "loose": true
    }]
  ]
}
```
