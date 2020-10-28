import {BaseConfig} from '@webpack-config-suite/core';
import {BabelConfig} from './BabelConfig';
import {JsxExtensions, HotModuleReplacementConfig} from './';

export class BabelReactConfig extends BabelConfig {
  public get composed(): typeof BaseConfig[] {
    return [JsxExtensions, this.isHot && HotModuleReplacementConfig].filter(Boolean);
  }

  protected get test(): RegExp | string {
    return /\.jsx?$/;
  }

  protected get useReact(): boolean {
    return true;
  }
}
