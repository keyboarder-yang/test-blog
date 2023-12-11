import { useData } from 'vitepress'
import { unref } from 'vue'

export function useHomeBanner() {
    const aa = useData()
    console.log(aa, '--aa--')
    const { theme, description } = useData()
    const { siteTitle, subSiteTitle, inspiring } = unref(theme)

    return {
        title: siteTitle,
        subTitle: subSiteTitle,
        inspiring,
        description,
    }
}