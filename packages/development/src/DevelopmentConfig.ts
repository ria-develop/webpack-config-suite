import {Plugins, WebpackCliOptions} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export class DevelopmentConfig extends Plugins {
  protected get htmlWebpackPlugin(): HtmlWebpackPlugin {
    return new HtmlWebpackPlugin({template: './template.html'});
  }

  constructor(config: Configuration, env: unknown, argv: WebpackCliOptions) {
    super(config, env, argv);
    if (this.isDev) {
      config.devtool = 'eval';
      if (this.isHot || this.isLiveReload) {
        if (this.htmlWebpackPlugin) {
          config.plugins.push(this.htmlWebpackPlugin);
        }
      }
    }
  }
}
