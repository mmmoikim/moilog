---
date : 2019-06-27
---

# webpack react setting

## install npm module

```bash
npm install react
npm install react-dom
npm install react-router-dom
npm install @babel/preset-react
```

## add babel preset

```js
  {
      "presets": ["@babel/preset-env", "@babel/preset-react"],
      "plugins": ["@babel/plugin-syntax-dynamic-import"]
  }
```

## edit webpack config module

```js
{
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
}
```

## src/index.js
```js
import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div>
    <p>hello</p>
  </div>
);

render(<App />, document.getElementById('app'));

```

## react Router setting

- path.js
```js
import React from 'react';

const path = [
  {
    path: "/",
    exact: true,
    component: () => <h2>Home</h2>
  }, {
    path: "/users",
    component: () => <h2>users</h2>
  }, {
    path: "/about",
    component: () => <h2>about</h2>
  }, {
    path: "/will-match",
    component: () => <h2>will-match</h2>
  }
];

export default path;

```

### Menu.js

```js
import React from 'react';
import {Link} from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (<nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
        <li>
          <Link to="/will-match/">Will Match</Link>
        </li>
        <li>
          <Link to="/old-match/">Old Match, to be redirected</Link>
        </li>
        <li>
          <Link to="/nomatch/">nomatch</Link>
        </li>
      </ul>
    </nav>);
  }
}

export default Menu;

```

### RoutePage.js

```js
import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";

import path from "./path"

class RoutePage extends React.Component {
  render() {
    return (<Switch>
      {
        path.map((obj, index) => {\
          return <Route key={index} path={obj.path} exact={obj.exact} component={obj.component}/>
        })
      }
      <Redirect from="/old-match" to="/will-match"/>
      <Route component={NoMatch}/>
    </Switch>);
  }
}

function NoMatch() {
  return <h2>404</h2>;
}

export default RoutePage;
```

### App.js

```js
import React from 'react';
import Menu from "./Menu.js"
import RoutePage from "./RoutePage.js"
import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {
  render() {
    return (<div>
      <Router>
        <Menu/>
        <RoutePage/>
      </Router>
    </div>)
  }
}

export default App;

```
