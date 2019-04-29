module.exports = {
    title: 'MOILOG',
    description: 'mmmoilog',
    base: '/moilog/',
    themeConfig: {
        repo: 'mmmoikim/moilog',
        editLinks: true,
        docsDir: 'docs',
        lastUpdated: 'Last Updated',
        search: false,
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
                children: ['/javascript/this', '/javascript/lodash', '/javascript/bubble-capture']
            }, {
                title: 'webpack',
                collapsable: true,
                children: ['/webpack/npm']
            }
        ]
    }
}