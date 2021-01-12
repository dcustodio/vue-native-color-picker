<template>
  <div id="app">
    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">Click me:</label>
      </div>
      <div class="field-body">
        <div class="control">
          <InputColorPicker v-model="color"/>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">Color:</label>
      </div>
      <div class="field-body">
        <div class="control">
          <input class="input" type="text" placeholder="color"
          v-model="color" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputColorPicker from './components/InputColorPicker'
export default {
  name: 'App',
  components: {
    InputColorPicker
  },
  data: function () {
    return {
      color: '#0f4c81'
    }
  }
}
</script>

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
