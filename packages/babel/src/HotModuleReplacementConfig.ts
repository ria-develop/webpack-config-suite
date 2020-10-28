import {AliasAwareConfig, WebpackCliOptions} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';

export class HotModuleReplacementConfig extends AliasAwareConfig {
  protected get alias(): Configuration['resolve']['alias'] {
    return this.isHot && {'react-dom': '@hot-loader/react-dom'};
  }

  constructor(config: Configuration, env: unknown, argv: WebpackCliOptions) {
    super(config, env, argv);
    if (this.isHot) {
      // why @see https://github.com/webpack/webpack-dev-server/issues/2758
      config.target = 'web';
    }
  }
}
