import {TsxExtension, TypeScriptConfig} from './';

import {What} from '@webpack-config-suite/core';
import {HotModuleReplacementConfig} from '@webpack-config-suite/babel';

export class TypeScriptReactConfig extends TypeScriptConfig {
  public get composed(): What[] {
    return super.composed.concat([TsxExtension, this.isHot && HotModuleReplacementConfig]).filter(Boolean);
  }

  protected get test(): RegExp {
    return /\.tsx?/;
  }

  protected get useReact(): boolean {
    return true;
  }
}
