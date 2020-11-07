import {TypeScriptPlugins} from '@webpack-config-suite/typescript';
import {ForkTsCheckerWebpackPluginOptions} from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPluginOptions';

export class LernaTypeScriptPlugins extends TypeScriptPlugins {
  protected get typescript(): ForkTsCheckerWebpackPluginOptions['typescript'] {
    if (typeof super.typescript === 'object') {
      super.typescript.configFile = 'packages/tsconfig.json';
    }
    return super.typescript;
  }

  protected get eslint(): ForkTsCheckerWebpackPluginOptions['eslint'] {
    return {
      files: './packages/**/src/*.{ts,tsx,js,jsx}',
      enabled: true
    };
  }
}
