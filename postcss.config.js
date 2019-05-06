let stylelint = require('stylelint')({
  config: {
    "extends": "stylelint-config-standard",
    "rules": {
      "color-hex-length": "long",
      "max-empty-lines": null,
    },
  },
});

module.exports = {
  map: {
    inline: true,
  },
  plugins: [
    stylelint,
    require('postcss-import')({
      plugins: [
        stylelint,
      ],
    }),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true,
      },
    }),
    require('postcss-reporter')({
      clearReportedMessages: true,
    }),
    require('autoprefixer')(),
    require('cssnano')(),
  ],
};
