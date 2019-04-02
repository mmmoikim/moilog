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
            title: 'VUE',
            collapsable: true,
            children: [
                '/vue/'
            ]
        }, {
            title: 'WEBPACK',
            collapsable: true,
            children: [
                '/webpack/'
            ]
        }, {
            title: 'GIT',
            collapsable: true,
            children: [
                '/git/'
            ]
        }]
    }
}