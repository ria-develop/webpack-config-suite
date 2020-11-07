import {BaseConfig, WebpackCliOptions} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';
import {getContext} from './Utils';

export class LernaOutput extends BaseConfig {
  protected get filename(): Configuration['output']['filename'] {
    return `./packages/[name]/lib/index${(this.isProd && '.min') || ''}.js`;
  }

  constructor(config: Configuration = {}, env: unknown = undefined, argv: WebpackCliOptions = {}) {
    super(config, env, argv);
    // TODO: core::Output.ts
    config.output = {
      path: getContext(),
      filename: this.filename
    };
  }
}
