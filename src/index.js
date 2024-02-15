import InputColorPicker from "./components/InputColorPicker.vue";

export default {
  install: (app) => {
    app.component("InputColorpicker", InputColorPicker);
  },
};

export { InputColorPicker };
