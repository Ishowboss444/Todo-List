import pluginVue from "eslint-plugin-vue";

export default [
  { ignores: ["node_modules", "dist"] },

  ...pluginVue.configs["flat/recommended"],
  {
    rules: {
      // add custom rule overrides here later if needed
    },
  },
];
