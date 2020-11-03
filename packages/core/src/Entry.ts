import {BaseConfig} from './BaseConfig';
import {Configuration, Entry as WebpackEntry} from 'webpack';
import {WebpackCliOptions} from './index';

export class Entry extends BaseConfig {
  protected get sources(): string | [string, ...string[]] {
    return './src';
  }

  protected get entry(): WebpackEntry {
    return this.sources;
  }

  constructor(config: Configuration, env: unknown, argv: WebpackCliOptions) {
    super(config, env, argv);
    const {entry} = this.config;
    this.config.entry =
      entry instanceof Object && this.entry instanceof Object
        ? ({...entry, ...this.entry} as WebpackEntry)
        : this.entry;
  }
}
