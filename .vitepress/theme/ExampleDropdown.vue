
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const menuRef = ref(null)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function handleClickOutside(event) {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

function handleEscape(event) {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div ref="menuRef" class="example-dropdown">
    <button
      class="example-button"
      type="button"
      :aria-expanded="isOpen"
      @click.stop="toggleMenu"
    >
      示例参考
      <span class="arrow" :class="{ rotated: isOpen }">⌄</span>
    </button>

    <div v-if="isOpen" class="example-menu">
      <a
        href="https://vitepress.yiov.top/"
        target="_blank"
        rel="noopener noreferrer"
        @click="isOpen = false"
      >
        VitePress 示例网站 ↗
      </a>

      <a
        href="https://jacksonling.cn"
        target="_blank"
        rel="noopener noreferrer"
        @click="isOpen = false"
      >
        Jacksonling 网站 ↗
      </a>
    </div>
  </div>
</template>

<style scoped>
.example-dropdown {
  position: relative;
  display: inline-block;
}

.example-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 20px;
  border: 1px solid #d1d5db;
  border-radius: 22px;
  background: #e5e7eb;
  color: #3f4654;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
}

.example-button:hover {
  background: #bfdbfe;
  color: #244a91;
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 8px 20px #3b82f640;
}

.arrow {
  transition: transform 0.2s ease;
}

.arrow.rotated {
  transform: rotate(180deg);
}

.example-menu {
  position: absolute;
  z-index: 100;
  top: calc(100% + 10px);
  left: 0;
  width: 230px;
  padding: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  box-shadow: 0 10px 30px #00000018;
}

.example-menu a {
  display: block;
  padding: 12px;
  border-radius: 8px;
  color: var(--vp-c-text-1);
  font-size: 14px;
  text-decoration: none;
  transition: background 0.2s ease;
}

.example-menu a:hover {
  background: #dbeafe;
  color: #244a91;
}
</style>
