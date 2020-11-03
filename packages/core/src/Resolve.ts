import {BaseConfig} from './BaseConfig';
import {Configuration} from 'webpack';
import {WebpackCliOptions} from './index';

export class Resolve extends BaseConfig {
  protected get resolve(): Configuration['resolve'] {
    return this.config.resolve || {};
  }

  constructor(config: Configuration, env: unknown, argv: WebpackCliOptions) {
    super(config, env, argv);
    this.config.resolve = this.resolve;
  }
}
