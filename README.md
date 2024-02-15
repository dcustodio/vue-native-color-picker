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
<script setup>
import { ref } from "vue";
import InputColorPicker from "./components/InputColorPicker.vue";

const color = ref("#0f4c81");
const handleInput = (e) => {
  console.log("You input", e.target.value);
};

const handleChange = (e) => {
  console.log("You picked", e.target.value);
};
</script>

```

## Use

```
<InputColorPicker v-model="color" />
```

or if you wish to handle the values externally:

```
<InputColorPicker v-model="color" @input="handleInput" @change="handleChange" />
```
