import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
// @ts-ignore
import Layout from '../layout/index.vue'
import './styles/index.scss'
export const BlogTheme: Theme = {
    ...DefaultTheme,
    Layout,
    enhanceApp({app}) {
        app.provide('$data', { a: 1 })
    }
}
export default BlogTheme