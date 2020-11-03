import {BaseConfig} from '@webpack-config-suite/core';
import {BabelConfig} from './BabelConfig';
import {HotModuleReplacementConfig, JsxExtension} from './';

export class BabelReactConfig extends BabelConfig {
  public get composed(): typeof BaseConfig[] {
    return super.composed.concat([JsxExtension, this.isHot && HotModuleReplacementConfig]).filter(Boolean);
  }

  protected get test(): RegExp | string {
    return /\.jsx?$/;
  }

  protected get useReact(): boolean {
    return true;
  }
}
