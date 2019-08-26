---
date : 2019-06-25
---

# webpack Plugins

## clean-webpack-plugin

- clean the /dist folder before each build

``` js
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

    plugins: [
        new CleanWebpackPlugin()
    ]
```

## references
- [Output Management](https://webpack.js.org/guides/output-management/)
