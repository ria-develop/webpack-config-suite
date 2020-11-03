import {ModuleRules} from '../ModuleRules';
import {RuleSetUseItem} from 'webpack';
import * as os from 'os';

export class CacheThreadRule extends ModuleRules {
  protected get cacheLoader(): RuleSetUseItem {
    return {loader: 'cache-loader'};
  }

  protected get numWorkers(): number {
    return os.cpus().length - 1;
  }

  protected get threadLoader(): RuleSetUseItem {
    return {
      loader: 'thread-loader',
      options: {
        poolTimeout: this.isDev ? Infinity : 2000,
        workers: this.numWorkers
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
