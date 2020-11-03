import {BaseConfig} from './BaseConfig';
import {Configuration} from 'webpack';
import {WebpackCliOptions} from './index';

export class Module extends BaseConfig {
  protected get module(): Configuration['module'] {
    return this.config.module || {};
  }

  constructor(config: Configuration, env: unknown, argv: WebpackCliOptions) {
    super(config, env, argv);
    this.config.module = this.module;
  }
}
