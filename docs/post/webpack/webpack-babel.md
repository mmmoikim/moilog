---
date : 2019-06-26
---

# webpack babel setting

## install babel

```bash
npm install @babel/core
npm install @babel/plugin-syntax-dynamic-import
npm install @babel/polyfill
npm install @babel/preset-env
npm install babel-loader
```

- @babel/core : Babel compiler core.
- @babel/plugin-syntax-dynamic-import : Allow parsing of import()
- @babel/polyfill : This will emulate a full ES2015+ environment (no < Stage 4 proposals) and is intended to be used in an application rather than a library/tool.
- @babel/preset-env : allows you to use the latest JavaScript without needing to micromanage which syntax transforms
- babel-loader :  allows transpiling JavaScript files using Babel and webpack.

## create babellc file

```js
{
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-syntax-dynamic-import"]
}
```

## set webpack module

```js
{
        test: /\.js/,
        exclude: /(node_modules)/,
        use: [{
            loader: 'babel-loader'
        }]
    }
```
