<template>
    <input
        class="icp__input"
            v-bind:style="styleObject"
            type="color"
            @input="handleInput"
        />
</template>
<style lang="css">

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
<script>
export default {
  prop: ['value'],
  data () {
    return {
      styleObject: {
        backgroundColor: this.value
      }
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
