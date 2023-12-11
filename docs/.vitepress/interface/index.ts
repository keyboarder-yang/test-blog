export interface MENU_LIST_ITEM {
    text: string // 显示的文档名称
    link: string // 对应的md文档路径（docs为根）
}
export interface MENU_ITEM {
    category?: string // 当前分类的文件夹名称
    collapsed?: boolean
    collapsible?: boolean
    text: string
    link?: string
    items?: MENU_LIST_ITEM[] // 当前分类下的所有文章
}

export interface THEME_CONFIG {
    abc?: string
}