import DefaultTheme from 'vitepress/theme'
import './style.css'
import { h, ref, onMounted } from 'vue'
import ExampleDropdown from './ExampleDropdown.vue'

const IntroAnimation = {
  setup() {
    const visible = ref(true)
    const leaving = ref(false)

    onMounted(() => {
      document.documentElement.classList.add('intro-running')

      window.setTimeout(() => {
        leaving.value = true
      }, 4000)

      window.setTimeout(() => {
        visible.value = false
        document.documentElement.classList.remove('intro-running')
      }, 5100)
    })

    return () => {
      if (!visible.value) return null

      return h('div', {
        class: [
          'personal-intro',
          leaving.value ? 'is-leaving' : ''
        ]
      }, [
        h('div', { class: 'personal-intro-inner' }, [
          h('svg', {
            class: 'personal-intro-line',
            viewBox: '0 0 760 100',
            preserveAspectRatio: 'none',
            'aria-hidden': 'true'
          }, [
            h('path', {
              d: 'M8 65 C35 35, 58 10, 95 25 S145 80, 190 60 C230 43, 245 15, 275 30 S300 85, 340 70 C385 52, 400 20, 445 35 S510 85, 555 60 C605 32, 650 20, 690 40 S730 58, 752 42',
              pathLength: 1
            })
          ]),
          h('h1', {
            class: 'personal-intro-title'
          }, 'ZZZ 的小站'),
          h('p', {
            class: 'personal-intro-subtitle'
          }, 'MY PERSONAL SPACE')
        ])
      ])
    }
  }
}

export default {
  extends: DefaultTheme,

    Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(IntroAnimation)
    })
  },

  enhanceApp({ app }) {
    app.component('ExampleDropdown', ExampleDropdown)
  }
}