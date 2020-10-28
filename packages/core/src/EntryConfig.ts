import {BaseConfig} from './BaseConfig';
import {Configuration, Entry} from 'webpack';
import {WebpackCliOptions} from './index';

export class EntryConfig extends BaseConfig {
  protected get sources(): string | [string, ...string[]] {
    return './src';
  }

  protected get entry(): Entry {
    return this.sources;
  }

  constructor(config: Configuration, env: unknown, argv: WebpackCliOptions) {
    super(config, env, argv);
    const {entry} = this.config;
    this.config.entry =
      entry instanceof Object && this.entry instanceof Object ? ({...entry, ...this.entry} as Entry) : this.entry;
  }
}
