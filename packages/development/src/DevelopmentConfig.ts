import {Plugins, WebpackCliOptions} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export class DevelopmentConfig extends Plugins {
  protected get htmlWebpackPlugin(): HtmlWebpackPlugin {
    return new HtmlWebpackPlugin({template: './template.html'});
  }

  protected get plugins(): Configuration['plugins'] {
    return [(this.isHot || this.isLiveReload) && this.htmlWebpackPlugin];
  }

  protected get devtool(): Configuration['devtool'] {
    return this.isDev ? 'eval' : false;
  }

  constructor(config: Configuration, env: unknown, argv: WebpackCliOptions) {
    super(config, env, argv);
    config.devtool = this.devtool;
  }
}
