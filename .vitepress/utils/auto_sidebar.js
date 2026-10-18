import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// mjs必须手动定义 __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * 自动扫描文件夹生成侧边栏
 * @param {string} dir 目录名，比如 physics
 * @returns 侧边栏数组
 */
export function getSidebarItems(dir) {
  const items = []
  const fullPath = path.resolve(__dirname, '../../', dir)
  if (!fs.existsSync(fullPath)) return items

  const files = fs.readdirSync(fullPath)
  files.forEach(file => {
    // 只处理 .md，排除 index.md
    if (file.endsWith('.md') && file !== 'index.md') {
      const name = file.replace('.md', '')
      items.push({
        text: name,
        link: `/${dir}/${name}`
      })
    }
  })
  return items
}