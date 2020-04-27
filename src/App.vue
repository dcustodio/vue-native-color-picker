<template>
  <div id="app">

    <InputColorPicker  v-model="color"/>
    {{ color }}
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
      color: '#79c120'
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
