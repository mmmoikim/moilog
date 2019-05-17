const path = require('path');

module.exports = {
    title: 'MOILOG',
    description: 'Hello! I\'m web developer. this is study blog.',
    base: '/moilog/',
    head: [
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
        }]
    ],
    themeConfig: {
        repo: 'mmmoikim/moilog',
        editLinks: true,
        docsDir: 'docs',
        lastUpdated: true,
        search: true,
        nav: [{
            text: 'Home',
            link: '/'
        }],
        sidebar: [{
                title: 'WEB',
                collapsable: true,
                children: ['/post/web/bfcache']
            },
            {
                title: 'VUE',
                collapsable: true,
                children: ['/post/vue/vuepress', '/post/vue/vue-directive', '/post/vue/vue-issue']
            }, {
                title: 'javascript',
                collapsable: true,
                children: [
                    '/post/javascript/this',
                    '/post/javascript/lodash',
                    '/post/javascript/bubble-capture',
                    '/post/javascript/hjw-1-browser',
                    '/post/javascript/hjw-2-memory',
                    '/post/javascript/hjw-3-websocket',
                    '/post/javascript/hjw-4-wasm',
                    '/post/javascript/hjw-5-webworker',
                    '/post/javascript/hjw-rendering',
                    '/post/javascript/hjw-references'
                ]
            }, {
                title: 'Environment',
                collapsable: true,
                children: ['/post/environment/npm']
            }
        ]
    },
    configureWebpack() {
        return {
            resolve: {
                alias: {
                    '@assets': path.join(__dirname, '/../assets')
                }
            }
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        '@vuepress/pagination',
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor',
            headerTopOffset: 120
        }]
    ]
}