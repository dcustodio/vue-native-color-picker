# vue-native-color-picker

Lightweight color picker that uses the native HTML element [input type color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color).

[![npm version](https://badge.fury.io/js/vue-native-color-picker.svg)](https://badge.fury.io/js/vue-native-color-picker)
![Deploy to github pages](https://github.com/dcustodio/vue-native-color-picker/workflows/Deploy%20to%20github%20pages/badge.svg)
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
or if you wish to handle the values externally:

```
<v-input-colorpicker  v-model="color" @input="handleInput" @change="handleChange" />
```