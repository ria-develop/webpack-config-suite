import {Configuration} from 'webpack';
import {WebpackCliOptions, What} from './index';
import {processConfig} from './Utils';

export class WebpackSetup {
  private configsRegistry: {[key: string]: What[]} = {};

  use(what: What, when?: string): WebpackSetup {
    const configs = Array.isArray(what) ? what : [what];
    configs.forEach((Config) => {
      if (!this.configsRegistry[when]) {
        this.configsRegistry[when] = [];
      }
      this.configsRegistry[when] = this.configsRegistry[when].concat([Config]);
    });
    return this;
  }

  private init(configs: What[], env: unknown, argv: WebpackCliOptions, mode: Configuration['mode']): Configuration {
    const configuration = {mode};
    const processed = new Set();

    function processSingleConfig(Config) {
      const composed: What[] = processConfig(Config, configuration, env, argv);
      processed.add(Config);
      return composed;
    }

    function process(configs) {
      (configs || []).forEach((Config) => {
        if (processed.has(Config)) {
          return;
        }
        process(processSingleConfig(Config));
      });
    }

    process(configs);
    return configuration;
  }

  static newSetup(): WebpackSetup {
    return new WebpackSetup();
  }

  newFactory(): (env: unknown, argv: WebpackCliOptions) => Configuration[] | Configuration {
    return (env: unknown, argv: WebpackCliOptions) => {
      return ['production', 'development']
        .filter((mode: Configuration['mode']) => !argv.mode || argv.mode === mode)
        .map((mode: Configuration['mode']) => {
          const configsRegistry = this.configsRegistry;
          return this.init(
            (configsRegistry[typeof undefined] || []).concat(configsRegistry[mode] || []),
            env,
            argv,
            mode
          );
        });
    };
  }
}
