import { MENU_ITEM } from "../interface";

/**
 * @description 将配置的菜单转换成系统需要的目录格式
 * @param files 配置的不同分类下的文档集合
 */
function handleMenus(files: MENU_ITEM[]){
    // files 不为数组直接返回
    if(!Array.isArray(files)){
        return []
    }
    return files.map( (item: MENU_ITEM) => {
        return {
            collapsed: item.collapsed === undefined, // 只要不是true 都是false
            collapsible: item.collapsed === undefined, // 只要不是true 都是false
            text: item.text,
            items: item.items
        };
    })
}

export default handleMenus
