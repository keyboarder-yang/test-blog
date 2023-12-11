import { MENU_ITEM } from "../interface";
const methodsPrefixUrl: string = '/methods/'
/**
 * @description 方法 的菜单
 */
const methods: MENU_ITEM[] = [
    {
        text: 'array',
        items: [
            { text: '数组去重', link: `${methodsPrefixUrl}/array/deduplication` },
            { text: '交集判断', link: `${methodsPrefixUrl}/array/has-intersection` },
            { text: '交集获取', link: `${methodsPrefixUrl}/array/get-intersection` },
            { text: '真值获取', link: `${methodsPrefixUrl}/array/get-truth` },
        ]
    },
    {
        text: 'object',
        items: [
            { text: '从对象中获取指定属性', link: `${methodsPrefixUrl}/object/get-data-from-object` },
            { text: '深克隆', link: `${methodsPrefixUrl}/object/deep-clone` },
            { text: '非空检测', link: `${methodsPrefixUrl}/object/is-empty` },
            { text: '含值检测', link: `${methodsPrefixUrl}/object/has-values-in` },
        ]
    },
    {
        text: 'tree',
        items: [
            { text: '树数据过滤', link: `${methodsPrefixUrl}/tree/tree-filter` },
            { text: '树数据遍历', link: `${methodsPrefixUrl}/tree/tree-traverse` },
        ]
    },
    {
        text: 'common',
        items: [
            { text: '保存为Json', link: `${methodsPrefixUrl}/common/save-as-json` },
            { text: '并发请求控制', link: `${methodsPrefixUrl}/common/concurrency-request` },
            { text: '二进制流下载', link: `${methodsPrefixUrl}/common/blob-download` },
            { text: '浮点数运算精度优化', link: `${methodsPrefixUrl}/common/operate` },
            { text: '获取uuid码', link: `${methodsPrefixUrl}/common/uuid` },
            { text: '瀑布流（定位方式）', link: `${methodsPrefixUrl}/common/waterfall` },
            { text: '数字签名', link: `${methodsPrefixUrl}/common/canvas-signature` },
            { text: '时间计数', link: `${methodsPrefixUrl}/common/time-count` },
        ]
    },
]

export default methods