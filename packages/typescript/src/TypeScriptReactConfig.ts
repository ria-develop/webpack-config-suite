import {TypeScriptConfig, TsxExtension} from './';

import {BaseConfig} from '@webpack-config-suite/core';
import {HotModuleReplacementConfig} from '@webpack-config-suite/babel';

export class TypeScriptReactConfig extends TypeScriptConfig {
  public get composed(): typeof BaseConfig[] {
    return super['composed'].concat([TsxExtension, this.isHot && HotModuleReplacementConfig]).filter(Boolean);
  }

  protected get test(): RegExp {
    return /\.tsx?/;
  }

  protected get useReact(): boolean {
    return true;
  }
}
