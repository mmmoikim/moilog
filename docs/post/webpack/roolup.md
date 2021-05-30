---
date : 2021-04-04
---

# rollup

- 소프트웨어는 예상치 못한 인터렉션을 제거하고, 문제의 복잡도를 줄이기 위해서 작은 단위로 나눌수록 좋다.
- es6의 모듈 시스템은 최신 브라우저에서만 구현 되고 node.js에서는 안됨, 롤업은 새로운 모듈 시스템으로 코드를 작성 한 후 commonjs나 amd, iife-style script로 내보낼 수 있다.
- es모듈의 트리쉐이킹을 사용 할 수 있음

```jsx
// import the entire utils object with CommonJS
const utils = require( './utils' );

// import the ajax function with an ES6 import statement
import { ajax } from './utils';

```

- 플러그 인을 사용하면 기존 commonjs 모듈을 가져 올 수 있다
- 웹팩5에서 commonjs 일부만 트리쉐이킹 된다
- 처음 es6가 없었을 때, amd, commonjs와 같은 모듈개념이 나오고 파일을 합치기 위해 번들러가 나오게 됨, es6가 나오면서 바벨이 두둥등장, es모듈을 commonjs로 트랜스파일하면서 표준이 된 es모듈 또한 이미 나와있는 모듈로 대체하게 됨
- Webpack1은 CommonJS 문법으로 정의된 모듈을 번들링 해주는 도구였다
- Webpack2 부터는 ES 모듈을 지원하여 ES 모듈도 번들링 할 수 있도록 바뀌었다.
- Webpack은  ES 모듈의 기본값 가져오기 코드를 만나면 별도의 함수를 통해서 다시 한번 감싼 객체를 사용한다.
- 트리 쉐이킹되는 ES6 모듈을 만들어 내려면 개발할 때도 웹팩을 사용하는 도구는 사용할 수 없다는 것이다.
- 라이브러리 사용자가 라이브러리를 사용할 때는 ES6 모듈이 아닌 형태다. 더 이상 ES6 모듈이 아니므로 트리 쉐이킹이 가능하지 않다
- 롤업으로 번들할 경우 모든 ES6 모듈이 하나의 파일로 번들된다. 그러나 라이브러리 사용자가 웹팩을 사용해서 트리 쉐이킹을 시도했을 때 사이드 이펙트로 인하여 트리 쉐이킹이 잘 되지 않는다.

- Parcel : commonjs esmodule 둘다 트리쉐이킹 됨
- preact: 로더 없이 jsx가 순수자바스크립트로 변환됨, es6모듈 형태 유지

[https://webpack.js.org/guides/tree-shaking/](https://webpack.js.org/guides/tree-shaking/)
[https://rollupjs.org/guide/en/](https://rollupjs.org/guide/en/)

[https://betterprogramming.pub/the-battle-of-bundlers-6333a4e3eda9](https://betterprogramming.pub/the-battle-of-bundlers-6333a4e3eda9)

[https://medium.com/@craigmiller160/how-to-fully-optimize-webpack-4-tree-shaking-405e1c76038](https://medium.com/@craigmiller160/how-to-fully-optimize-webpack-4-tree-shaking-405e1c76038)

[https://huns.me/development/2265](https://huns.me/development/2265)

[https://ui.toast.com/weekly-pick/ko_20190418](https://ui.toast.com/weekly-pick/ko_20190418)

[https://ui.toast.com/weekly-pick/ko_20190829](https://ui.toast.com/weekly-pick/ko_20190829)