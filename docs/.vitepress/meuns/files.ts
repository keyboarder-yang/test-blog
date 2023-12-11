import { MENU_ITEM } from '../interface';
const filesPrefixUrl: string = '/files/'

/**
 * @description 文章 的菜单
 */
const files: MENU_ITEM[] = [
    {
        text: 'javascript',
        items: [
            { text: '数据类型', link: `${filesPrefixUrl}/javascript/data-type` },
            { text: '原型', link: `${filesPrefixUrl}/javascript/prototype` },
            { text: '上下文', link: `${filesPrefixUrl}/javascript/context` },
            { text: 'this指向问题', link: `${filesPrefixUrl}/javascript/this` },
            { text: 'new关键字', link: `${filesPrefixUrl}/javascript/new` },
            { text: 'Apply、Bind、Call', link: `${filesPrefixUrl}/javascript/apply-bind-call` },
            { text: '闭包', link: `${filesPrefixUrl}/javascript/closure` },
            { text: '防抖和节流', link: `${filesPrefixUrl}/javascript/debounce-throttling` },
            { text: '异步编程', link: `${filesPrefixUrl}/javascript/async-program` },
            { text: '事件循环', link: `${filesPrefixUrl}/javascript/event-loop` },
            { text: '递归', link: `${filesPrefixUrl}/javascript/recursion` },
            { text: '数据拷贝', link: `${filesPrefixUrl}/javascript/clone` },
            { text: '正则', link: `${filesPrefixUrl}/javascript/regexp` },
            { text: '树遍历', link: `${filesPrefixUrl}/javascript/tree-traversal` },
        ],
    },
    {
        text: 'typescript',
        items: [
            { text: '介绍', link: `${filesPrefixUrl}/typescript/introduce` },
            { text: '基本类型', link: `${filesPrefixUrl}/typescript/basic-type` },
            { text: '接口', link: `${filesPrefixUrl}/typescript/interface` },
        ]
    },
    {
        text: 'css',
        items: [
            { text: 'BEM规范', link: `${filesPrefixUrl}/css/bem` },
            { text: '文本溢出显示问题', link: `${filesPrefixUrl}/css/text-flow` },
            { text: 'Grid布局', link: `${filesPrefixUrl}/css/grid` },
        ]
    },
    {
        text: 'vue',
        items: [
            { text: 'render函数', link: `${filesPrefixUrl}/vue/render` },
            { text: '插槽', link: `${filesPrefixUrl}/vue/slot` },
            { text: '数据持久化存储', link: `${filesPrefixUrl}/vue/state-persistence` },
            { text: '重绘和回流', link: `${filesPrefixUrl}/vue/repaint-reflow` },
            { text: 'scoped原理', link: `${filesPrefixUrl}/vue/scoped` },
        ]
    },
    {
        text: 'vue-source',
        items: []
    },
    {
        text: 'design-pattern',
        items: [
            { text: '设计模式', link: `${filesPrefixUrl}/design-pattern/index` },
            { text: '单例模式', link: `${filesPrefixUrl}/design-pattern/singleton` },
            { text: '工厂模式', link: `${filesPrefixUrl}/design-pattern/factory` },
            { text: '观察者模式', link: `${filesPrefixUrl}/design-pattern/observe` },
            { text: '策略模式', link: `${filesPrefixUrl}/design-pattern/strategy` },
        ]
    },
    {
        text: 'micro-front',
        items: [
            { text: '介绍', link: `${filesPrefixUrl}/micro-front/introduce` },
        ]
    },
    {
        text: 'dayjs',
        items: [
            { text: 'dayjs常用命令', link: `${filesPrefixUrl}/dayjs/common-command` }
        ]
    },
    {
        text: 'element',
        items: [
            { text: '时间选择器', link: `${filesPrefixUrl}/element/date-picker` }
        ]
    },
    {
        text: 'webgis',
        items: [
            { text: '入门', link: `${filesPrefixUrl}/webgis/index` }
        ]
    },
    {
        text: 'git',
        items: [
            { text: 'git介绍', link: `${filesPrefixUrl}/git/introduction` },
            { text: 'git常用命令', link: `${filesPrefixUrl}/git/instruction` }
        ]
    },
]

export default files