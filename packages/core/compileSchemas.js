const {compileFromFile} = require('json-schema-to-typescript');
const fs = require('fs').promises;

(async () => {
  const schemas = [
    'babel-loader/lib/schema.json',
    'cache-loader/dist/options.json',
    'css-loader/dist/options.json',
    'less-loader/dist/options.json',
    'style-loader/dist/options.json',
    'postcss-loader/dist/options.json',
    'mini-css-extract-plugin/dist/loader-options.json',
    'mini-css-extract-plugin/dist/plugin-options.json'
    // 'webpack-cli/bin/config/optionsSchema.json'
    //'webpack/schemas/WebpackOptions.json'
  ];

  await fs.mkdir('./types');

  const getName = (schema) => {
    if (schema === 'mini-css-extract-plugin/dist/loader-options.json') {
      return 'mini-css-extract-loader';
    }

    return schema.split('/').shift();
  };

  await Promise.all(
    schemas.map(async (schema) => {
      const name = getName(schema);
      try {
        const ts = await compileFromFile(require.resolve(schema));
        await fs.writeFile(`./types/${name}.d.ts`, name === 'webpack' ? ts.replace(/\.\.\//g, 'webpack/') : ts);
      } catch (err) {
        console.error(err);
      }
    })
  );
})();
