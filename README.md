#**[MOILOG](https://mmmoikim.github.io/moilog/)** 

- 블로그

- 빌드

``` sh
npm run docs:build
```

- 개발빌드

``` sh
npm run docs:dev
```

- deploy

``` sh
deploy.sh
```

- sitemap 생성

``` sh
cd docs/.vuepress/dist
copy /Y /b NUL sitemap.xml
npm run docs:sitemap
```