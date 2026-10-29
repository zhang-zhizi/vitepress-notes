import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: "docs",
  base: '/vitepress-notes/',
  title: "我的项目",
  description: "A VitePress Site",
  theme: {
  extend: './theme/index.js'
},
head: [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/vitepress-notes/clover.svg'
    }
  ]
],

  themeConfig: {
    logo: 'light.svg',
    
    nav: [
      { text: '🏠 首页', link: '/' },
      {
        text: '📖 指南',
        items: [
          {
            text: '建议',
            items: [
              { text: '大学时间轴', link: '/guide/timeline' },
              { text: '关于AI', link: '/guide/about-ai' },
              { text: '视频推荐', link: '/guide/recommend'}
            ]
          },
          {
            text: '其他',
            items: [
              { text: '关于考研', link: '/guide/about-kaoyan'}
            ]
          }
        ]
      },
      {
        text: '📝 笔记',
        items: [
          { text: '打字', link: '/notes/type'},
          { text: 'markdown笔记', link: '/notes/markdown'}
        ],
      },
      { text: '🌿 生活', link: '/hobby' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '建议',
          items: [
            { text: '大学时间轴', link: '/guide/timeline' },
            { text: '关于AI', link: '/guide/about-ai' },
            { text: '视频推荐', link: '/guide/recommend'}
          ]
        },
        {
          text: '其他',
          items: [
            { text: '关于考研', link: '/guide/about-kaoyan'}
          ]
        }
      ],
      '/notes/': [
        { text: '打字', link: '/notes/type' },
        { text: 'markdown笔记', link: '/notes/markdown'}
      ],
      '/hobby/': [
        { text: '爱好', link: '/hobby' }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhang-zhizi' }
    ]
  }
})