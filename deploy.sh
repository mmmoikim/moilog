#!/usr/bin/env sh

# abort on errors

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

copy /Y /b NUL sitemap.xml
npm run docs:sitemap

git init
git config --local user.name "mmmoikim"
git config --local user.email "mmmoikim@gmail.com"

git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

git push -f https://github.com/mmmoikim/moilog.git master:gh-pages
