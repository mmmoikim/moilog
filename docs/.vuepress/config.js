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
                children: ['/post/web/bfcache', '/post/web/atomic']
            },
            {
                title: 'VUE',
                collapsable: true,
                children: [
                    '/post/vue/vuepress',
                    '/post/vue/vue-directive',
                    '/post/vue/vue-issue',
                    '/post/vue/vue-lifecycle',
                    '/post/vue/vue-vs-debugging'
                ]
            }, {
                title: 'javascript',
                collapsable: true,
                children: [
                    '/post/javascript/this',
                    '/post/javascript/lodash',
                    '/post/javascript/bubble-capture'
                ]
            }, {
                title: 'how javascript work',
                collapsable: true,
                children: [
                    '/post/hjw/hjw-1-browser',
                    '/post/hjw/hjw-2-memory',
                    '/post/hjw/hjw-3-websocket',
                    '/post/hjw/hjw-4-wasm',
                    '/post/hjw/hjw-5-webworker',
                    '/post/hjw/hjw-6-webpush',
                    '/post/hjw/hjw-rendering',
                    '/post/hjw/hjw-references'
                ]
            }, {
                title: 'Etc',
                collapsable: true,
                children: [
                    '/post/etc/npm',
                    '/post/etc/markdown',
                    '/post/etc/links',
                    '/post/etc/webpack'
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
