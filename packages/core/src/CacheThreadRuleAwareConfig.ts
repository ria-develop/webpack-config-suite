import {RuleSetAwareConfig} from './RuleSetAwareConfig';
import {RuleSetUseItem} from 'webpack';
import * as os from 'os';

export class CacheThreadRuleAwareConfig extends RuleSetAwareConfig {
  protected get cacheLoader(): RuleSetUseItem {
    return {loader: 'cache-loader'};
  }

  protected get threadLoader(): RuleSetUseItem {
    return {
      loader: 'thread-loader',
      options: {
        poolTimeout: this.isDev ? Infinity : 2000,
        workers: os.cpus().length - 1
      }
    };
  }

  protected get useCache(): boolean {
    return true;
  }

  protected get useThread(): boolean {
    return true;
  }

  protected get use(): RuleSetUseItem[] {
    return super.use.concat([this.useCache && this.cacheLoader, this.useThread && this.threadLoader]).filter(Boolean);
  }
}
