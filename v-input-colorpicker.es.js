(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".icp__input[data-v-781a8e64]{height:25px;border-radius:15px;width:40px;border:none;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;padding:0}.icp__input[data-v-781a8e64]::-webkit-color-swatch-wrapper{padding:0}.icp__input[data-v-781a8e64]::-webkit-color-swatch{border:none;border-radius:15px}.icp__input[data-v-781a8e64]::-moz-color-swatch{border:none;border-radius:15px}#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { useModel, withDirectives, openBlock, createElementBlock, vModelText, ref, createElementVNode, createVNode, createApp } from 'vue';

const p = function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(script) {
        const fetchOpts = {};
        if (script.integrity)
            fetchOpts.integrity = script.integrity;
        if (script.referrerpolicy)
            fetchOpts.referrerPolicy = script.referrerpolicy;
        if (script.crossorigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (script.crossorigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
};true&&p();

var InputColorPicker_vue_vue_type_style_index_0_scoped_true_lang = '';

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = {
  __name: 'InputColorPicker',
  props: {
    "modelValue": { default: "#FFFFFF", type: String },
    "modelModifiers": {},
  },
  emits: ["update:modelValue"],
  setup(__props) {

const color = useModel(__props, "modelValue");

return (_ctx, _cache) => {
  return withDirectives((openBlock(), createElementBlock("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((color).value = $event)),
    class: "icp__input",
    type: "color"
  }, null, 512)), [
    [vModelText, color.value]
  ])
}
}

};
var InputColorPicker = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-781a8e64"]]);

var App_vue_vue_type_style_index_0_lang = '';

const _hoisted_1 = { id: "app" };
const _hoisted_2 = { class: "field is-horizontal" };
const _hoisted_3 = /*#__PURE__*/createElementVNode("div", { class: "field-label" }, [
  /*#__PURE__*/createElementVNode("label", { class: "label" }, "Click me:")
], -1);
const _hoisted_4 = { class: "field-body" };
const _hoisted_5 = { class: "control" };
const _hoisted_6 = { class: "field is-horizontal" };
const _hoisted_7 = /*#__PURE__*/createElementVNode("div", { class: "field-label" }, [
  /*#__PURE__*/createElementVNode("label", { class: "label" }, "Color:")
], -1);
const _hoisted_8 = { class: "field-body" };
const _hoisted_9 = { class: "control" };


const _sfc_main = {
  __name: 'App',
  setup(__props) {

const color = ref("#0f4c81");
const handleInput = (e) => {
  console.log("You input", e.target.value);
};

const handleChange = (e) => {
  console.log("You picked", e.target.value);
};

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      _hoisted_3,
      createElementVNode("div", _hoisted_4, [
        createElementVNode("div", _hoisted_5, [
          createVNode(InputColorPicker, {
            modelValue: color.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((color).value = $event)),
            onInput: handleInput,
            onChange: handleChange
          }, null, 8, ["modelValue"])
        ])
      ])
    ]),
    createElementVNode("div", _hoisted_6, [
      _hoisted_7,
      createElementVNode("div", _hoisted_8, [
        createElementVNode("div", _hoisted_9, [
          withDirectives(createElementVNode("input", {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((color).value = $event)),
            class: "input",
            type: "text",
            placeholder: "color"
          }, null, 512), [
            [vModelText, color.value]
          ])
        ])
      ])
    ])
  ]))
}
}

};

createApp(_sfc_main).mount("#app");
