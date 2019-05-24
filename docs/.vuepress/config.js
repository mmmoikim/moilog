const path = require('path');

module.exports = {
    title: 'MOILOG',
    description: 'Hello! I\'m web developer. this is study blog.',
    base: '/moilog/',
    head: [
        ['meta', {
            name: 'google-site-verification',
            content: 'Np5Qu68ys0COB1T9fZ8rfxfrr_SLcHqzfmu9Q03K8YY'
        }]
    ],
    themeConfig: {
        logo: '/logo.png',
        repo: 'mmmoikim/moilog',
        editLinks: true,
        docsDir: 'docs',
        lastUpdated: 'Last Updated',
        search: true,
        nav: [{
            text: 'Home',
            link: '/'
        }, {
            text: 'Post',
            link: '/post/list.html'
        }],
        sidebar: [{
                title: 'WEB',
                collapsable: true,
                children: ['/post/web/bfcache']
            },
            {
                title: 'VUE',
                collapsable: true,
                children: [
                    '/post/vue/vuepress',
                    '/post/vue/vue-directive',
                    '/post/vue/vue-issue',
                    '/post/vue/vue-lifecycle'
                ]
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
                title: 'Etc',
                collapsable: true,
                children: [
                    '/post/etc/npm',
                    '/post/etc/markdown',
                    '/post/etc/links'
                ]
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
        '@vuepress/last-updated',
        '@vuepress/pagination',
        ['@vuepress/google-analytics', {
            'ga': 'UA-140809764-1'
        }],
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