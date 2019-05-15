module.exports = {
    title: 'MOILOG',
    description: 'mmmoilog',
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
        lastUpdated: 'Last Updated',
        search: true,
        nav: [{
            text: 'Home',
            link: '/'
        }],
        sidebar: [{
                title: 'WEB',
                collapsable: true,
                children: ['/web/bfcache']
            },
            {
                title: 'VUE',
                collapsable: true,
                children: ['/vue/vuepress', '/vue/vue-directive', '/vue/vue-issue']
            }, {
                title: 'javascript',
                collapsable: true,
                children: ['/javascript/this', '/javascript/lodash', '/javascript/bubble-capture', '/javascript/how-javascript-work']
            }, {
                title: 'webpack',
                collapsable: true,
                children: ['/webpack/npm']
            }
        ]
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