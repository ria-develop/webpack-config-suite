import {BaseConfig} from './BaseConfig';
import {Configuration} from 'webpack';
import {WebpackCliOptions} from './index';

export class Plugins extends BaseConfig {
  get plugins(): Configuration['plugins'] | undefined {
    return [];
  }

  constructor(config: Configuration, env: unknown, argv: WebpackCliOptions) {
    super(config, env, argv);
    config.plugins = config.plugins ? config.plugins.concat(this.plugins) : this.plugins;
  }
}
