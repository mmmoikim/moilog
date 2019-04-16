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
                children: ['/vue/vue-instance-properties', '/vue/vuepress']
            }, {
                title: 'javascript',
                collapsable: true,
                children: ['/javascript/this']
            }, {
                title: 'GIT',
                collapsable: true,
                children: ['/']
            }
        ]
    }
}