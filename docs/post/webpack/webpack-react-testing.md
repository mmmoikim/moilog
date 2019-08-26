---
date : 2019-08-20
---

#  webpack react testing

## install react testing library

```bash
npm install @testing-library/react
npm install jest
```

## package.json script 추가
```js
"scripts": {
  "jest-test": "jest -c jest.config.js --watch"
}
```

## create jest config file, src/jest.config.js

```js
module.export = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}'], // finds test
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    'jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each'
  ] // setupFiles before the tests are ran
};
```

## component test example

- Profile.js
```js
import React from 'react';

const Profile = ({ username, name }) => {
  return (
      <h1>Hi {username} {name}!</h1>
  );
};

export default Profile;
```

- Profile.test.js

```js
import React from 'react'
import {
  render,
  cleanup
} from '@testing-library/react'
import Profile from './Profile'

afterEach(cleanup)

describe('This will test MyComponent', () => {
  test('renders message', () => {
    const {getByText} = render( <Profile username="Alejandro" name="Roman" /> )

    // as suggested by Giorgio Polvara a more idiomatic way:
    expect(getByText('Hi Alejandro Roman!'))
  })
})
```

## references
- [Getting Started with React Testing Library](https://css-tricks.com/getting-started-with-react-testing-library/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [react-testing-library 를 사용하여 TDD 개발 흐름으로 투두리스트 만들기](https://velog.io/@velopert/tdd-with-react-testing-library)
