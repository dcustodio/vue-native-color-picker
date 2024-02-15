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
<template>
  <div id="app">
    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">Click me:</label>
      </div>
      <div class="field-body">
        <div class="control">
          <InputColorPicker
            v-model="color"
            @input="handleInput"
            @change="handleChange"
          />
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">Color:</label>
      </div>
      <div class="field-body">
        <div class="control">
          <input
            v-model="color"
            class="input"
            type="text"
            placeholder="color"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
