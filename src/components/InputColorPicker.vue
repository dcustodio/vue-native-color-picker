<template>
  <input
    class="icp__input"
    :style="styleObject"
    type="color"
    v-bind:value="value"
    @input="$_icp_handleInput"
    @change="$_icp_handleChange"
  />
</template>
<script>
export default {
  name: 'v-input-colorpicker',
  props: ['value'],
  data () {
    return {
      styleObject: {
        backgroundColor: this.value
      }
    }
  },
  methods: {
    $_icp_handleInput (e) {
      this.$emit('input', e.target.value)
    },
    $_icp_handleChange (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>
<style lang="css" scoped>
.icp__input {
  height: 25px;
  border-radius: 15px;
  width: 40px;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  padding: 0;
}

.icp__input::-webkit-color-swatch-wrapper {
  padding: 0;
}

.icp__input::-webkit-color-swatch {
  border: none;
  border-radius: 15px;
}

.icp__input::-moz-color-swatch {
  border: none;
  border-radius: 15px;
}
</style>
