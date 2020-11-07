import {WebpackCliOptions, What} from './index';

import {Configuration} from 'webpack';

export class BaseConfig {
  //workaround as long as issue opened https://github.com/microsoft/TypeScript/issues/37142
  public get composed(): What[] {
    return [];
  }

  env: unknown;
  argv: WebpackCliOptions;
  config: Configuration;

  constructor(config: Configuration = {}, env: unknown = undefined, argv: WebpackCliOptions = {}) {
    this.env = env;
    this.argv = argv;
    this.config = config;
  }

  protected get isDev(): boolean {
    return this.config.mode === 'development';
  }

  protected get isProd(): boolean {
    return this.config.mode === 'production';
  }

  protected get isSingleOrDevMode(): boolean {
    return !!this.argv.mode || this.isDev;
  }

  protected get isHot(): boolean {
    return this.isSingleOrDevMode && (this.argv.hot || this.argv.hotOnly);
  }

  protected get isLiveReload(): boolean {
    return this.argv.liveReload;
  }
}
