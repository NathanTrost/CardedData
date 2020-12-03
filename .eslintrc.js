"use strict";

module.exports = {
  extends: ["react-app", "plugin:prettier/recommended"],

  plugins: ["jsx-a11y", "prettier"],

  rules: {
    "jsx-a11y/label-has-associated-control": "warn",
    "jsx-a11y/no-onchange": "warn",
    "jsx-a11y/href-no-hash": [0],
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-for": 0,
  },

  overrides: [
    {
      files: ["**/*.stories.js"],
      rules: { "import/no-anonymous-default-export": "off" },
    },
  ],
};
