---
date : 2019-08-26
---

# webpack react codesplit

## create src/withSplitting.js for HOC

```js
import React, { Component } from 'react';

const withSplitting = getComponent => {
  // 여기서 getComponent 는 () => import('./SplitMe') 의 형태로 함수가 전달되야합니다.
  class WithSplitting extends Component {
    state = {
      Splitted: null
    };

    constructor(props) {
      super(props);
      getComponent().then(({ default: Splitted }) => {
        this.setState({
          Splitted
        });
      });
    }

    render() {
      const { Splitted } = this.state;
      if (!Splitted) {
        return null;
      }
      return <Splitted {...this.props} />;
    }
  }

  return WithSplitting;
};

export const About = withSplitting(() => import('$Src/Container/About/About'));
export const User = withSplitting(() => import('$Src/Container/User/User'));
export const SuperMarket = withSplitting(() => import('$Src/Container/SuperMarket/SuperMarket'));
export const Profile = withSplitting(() => import('$Src/Container/Profile/Profile'));

```

- path.js
```js
import React from 'react';
import {About, User, SuperMarket, Profile} from './withSplitting';

const path = [
  {
    path: "/",
    exact: true,
    component: () => <h2>Home</h2>
  }, {
    path: "/user",
    component: User
  }, {
    path: "/about",
    component: About
  }, {
    path: "/will-match",
    component: () => <h2>will-match</h2>
  }, {
    path: "/superMarket",
    component: SuperMarket
  }, {
    path: "/profile",
    component: () => <Profile username="moi" name="김유경"/>
  }
];

export default path;
```

## references
- [리액트 프로젝트 코드 스플리팅 정복하기](https://velog.io/@velopert/react-code-splitting)
