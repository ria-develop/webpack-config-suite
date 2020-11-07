import {getLoader, LessLoaderOptions, What} from '@webpack-config-suite/core';
import {CssConfig, LessExtension} from './index';
import {RuleSetUseItem} from 'webpack';

export class LessConfig extends CssConfig {
  public get composed(): What[] {
    return [LessExtension];
  }

  protected get test(): RegExp | string {
    return /\.less/;
  }

  protected get lessLoaderOptions(): LessLoaderOptions {
    return null;
  }

  protected get lessLoader(): RuleSetUseItem {
    return getLoader('less-loader', this.lessLoaderOptions);
  }

  protected get use(): RuleSetUseItem[] {
    return super.use.concat(this.lessLoader);
  }
}
