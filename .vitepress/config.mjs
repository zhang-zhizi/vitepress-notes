import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

export default defineConfig({
  srcDir: "docs",
  base: '/vitepress-notes/',
  title: "我的项目",
  description: "A VitePress Site",

  themeConfig: {
    logo: 'light.svg',
    nav: [
      {
        text: '家',
        items: [
          { text: '首页', link: '/' },
          { text: 'markdown示例', link: '/markdown-examples' }
        ]
      },
      { text: '示例', link: '/markdown-examples' },
      {text: '我的爱好', link: '/hobby'}
    ],
    sidebar: generateSidebar({
      documentRootPath: "/",
      collapseDepth: 2,
      useTitleFromFrontmatter: true,
      collapsible: true,
    }),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhang-zhizi' }
    ]
  }
})