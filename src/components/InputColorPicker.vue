<script setup>
const color = defineModel({ default: "#FFFFFF", type: String });
</script>
<template>
  <input v-model="color" class="icp__input" type="color" />
</template>

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
