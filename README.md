# vue-native-color-picker

Lightweight color picker that uses the native HTML element [input type color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color).

---

[Demo](https://dcustodio.github.io/vue-native-color-picker/)

## Install
```
npm install vue-native-color-picker
```

## Import 

Globally:

```
import InputColorPicker from "./vue-input-color-picker";
Vue.use(InputColorPicker);
```

Or locally:
```
import InputColorPicker from 'vue-native-color-picker'

new Vue({
  components: {
    "v-input-colorpicker": InputColorPicker
  },
  data: function() {
    return {
      color: "#79c120"
    };
  }
})

```

## Use

```
<v-input-colorpicker  v-model="color" />
```
