---
date : 2019-08-20
---

# webpack javascript testing

## install testing library
- https://scotch.io/tutorials/nodejs-tests-mocking-http-requests
```bash
npm install mocha
npm install nock
npm install chai
npm install fs
npm install axios
```

- package.json script 추가
```js
"scripts": {
  "test": "mocha"
}
```

## example
```js
const expect = require('chai').expect;
const nock = require('nock');
const response = require('./response');
const axios = require('axios');

describe('Get User tests', () => {

  let container;

  beforeEach(() => {
    nock('https://api.github.com')
      .get('/users/octocat')
      .reply(200, response);
  });

  it('Get a user by username', () => {
    let getUser = (username) => {
      return axios.get(`https://api.github.com/users/${username}`)
        .then(res => res.data)
        .catch(error => console.log(error));
    };

    return getUser('octocat')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        //Test result of name, company and location for the response
        expect(response.name).to.equal('The Octocat')
        expect(response.company).to.equal('GitHub')
        expect(response.location).to.equal('San Francisco')
      });
  });
});

```
