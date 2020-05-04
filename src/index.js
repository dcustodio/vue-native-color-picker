import InputColorPicker from './components/InputColorPicker'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('v-input-colorpicker', InputColorPicker)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

InputColorPicker.install = install

export default InputColorPicker
