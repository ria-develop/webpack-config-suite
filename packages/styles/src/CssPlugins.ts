import ExtractCssPlugin from 'mini-css-extract-plugin';
import {MiniCssExtractPluginOptions, Plugins} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';

export class CssPlugins extends Plugins {
  protected get extractCssPluginOptions(): MiniCssExtractPluginOptions {
    return undefined;
  }

  protected get extractCssPlugin(): ExtractCssPlugin {
    return new ExtractCssPlugin(this.extractCssPluginOptions);
  }

  get plugins(): Configuration['plugins'] {
    return [this.extractCssPlugin];
  }
}
