import handleMenus from "./utils/handleMenus";
import {abouts, methods, files} from './meuns'

export default {
    abc: '123',
    base: '/blog',
    title: '@keyboarder-yang', // 浏览器的title
    description: '个人前端笔记', // 会渲染成<meta>标签，SEO用
    themeConfig: {
        inspiring: '学问之道无他，求其放心而已矣。',
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },
        outlineTitle: '文章目录',
        siteTitle: '@keyboarder-yang', // 网站标题
        subSiteTitle: '个人前端笔记', // 网站子标题（描述）
        logo: '/logo.png',
        nav: [
            {
                text: '文章笔记',
                link: '/files/index'
            },
            {
                text: '常用方法',
                link: '/methods/index'
            },
            {
                text: '关于',
                link: '/about/team'
            },
        ],
        sidebar: {
            '/files/': handleMenus(files),
            '/methods/': handleMenus(methods),
            '/about/': abouts
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/keyboarder-yang'},
        ],

        footer: {
            copyright: 'Copyright © 2022-07-02 keyboarder-yang'
        },
        search: {
            provider: 'local'
        },
    }
}
