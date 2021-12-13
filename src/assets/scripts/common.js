import * as FastClick from './fastclick'

// 爲 rem 配置初始字體大小
const screenWitdh = document.documentElement.clientWidth

document.documentElement.style.fontSize =
  (screenWitdh > 500 ? 100 : screenWitdh / 3.75) + 'px'

window.addEventListener('load', () => FastClick.attach(document.body), false)

document.documentElement.addEventListener(
  'touchmove',

  (event) => {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  },

  false
)
