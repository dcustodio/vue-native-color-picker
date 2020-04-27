# vue-native-color-picker

Basic color picker that uses the native HTML element [input type color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color).

## Install
```
npm install vue-native-color-picker
```

## Use  

```
import InputColorPicker from 'vue-native-color-picker'

new Vue({
  components: {
    InputColorPicker
  },
  data: function() {
    return {
      color: "#79c120"
    };
  }
})

```

```
<InputColorPicker  v-model="color" />
```
