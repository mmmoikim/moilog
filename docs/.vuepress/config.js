const path = require('path');

module.exports = {
    title: 'MOILOG',
    description: 'Hello! I\'m web developer. this is study blog.',
    base: '/moilog/',
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
                title: 'Environment',
                collapsable: true,
                children: [
                    '/post/environment/npm',
                    '/post/environment/markdown'
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