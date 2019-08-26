---
date : 2019-08-05
---

# webpack style loader

## css loader

- style-loader : Adds CSS to the DOM by injecting a style tag, It's recommended to combine style-loader with the css-loader
- css-loader : The css-loader interprets import and url() like import/require() and will resolve them.

```js
{
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: '[path][name]__[local]--[hash:base64:5]', //모듈화 했을때 네이밍
          context: APP_DIR,
        }
      }
    }
  ]
}
```

## postcss setting
- postcss-preset-env : lets you convert modern CSS into something most browsers can understand

```bash
npm install postcss-loader
npm install postcss-preset-env
```

```js
{
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: "css-loader",
      options: {
        importLoaders: 1, //The option importLoaders allows you to configure how many loaders before css-loader should be applied to @imported resources.
        modules: {
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
          context: APP_DIR,
        }
      }
    },
    'postcss-loader'
  ]
}
```

- create postcs.config.js file

```js
module.exports = ({ file, options, env }) => ({
   plugins: {
     'postcss-preset-env': {}
   }
})
```
