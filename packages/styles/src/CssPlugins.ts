import ExtractCssPlugin from 'mini-css-extract-plugin';
import {PluginsAwareConfig, MiniCssExtractPluginOptions} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';

export class CssPlugins extends PluginsAwareConfig {
  protected get extractCssPluginOptions(): MiniCssExtractPluginOptions {
    return undefined;
  }

  protected get extractCssPlugin(): ExtractCssPlugin {
    return new ExtractCssPlugin(this.extractCssPluginOptions);
  }

  get plugins(): Configuration['plugins'] | undefined {
    return [this.extractCssPlugin];
  }
}
