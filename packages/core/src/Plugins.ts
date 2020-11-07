import {BaseConfig} from './BaseConfig';
import {Configuration} from 'webpack';
import {WebpackCliOptions} from './index';

export class Plugins extends BaseConfig {
  protected get plugins(): Configuration['plugins'] {
    return [];
  }

  constructor(config: Configuration, env: unknown, argv: WebpackCliOptions) {
    super(config, env, argv);
    const plugins = (config.plugins ? config.plugins.concat(this.plugins) : this.plugins).filter(Boolean);
    if (plugins.length) {
      config.plugins = plugins;
    }
  }
}
