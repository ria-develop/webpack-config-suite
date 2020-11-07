import {TsExtension, TsLoaderOptions, TsxExtension, TypeScriptReactConfig} from '@webpack-config-suite/typescript';
import {JsExtension, What} from '@webpack-config-suite/core';
import {LernaTypeScriptResolvePlugins} from './LernaTypeScriptResolvePlugins';
import {HotModuleReplacementConfig} from '@webpack-config-suite/babel';
import {LernaTypeScriptPlugins} from './LernaTypeScriptPlugins';
import {LernaTypeScriptResolveModules} from './LernaTypeScriptResolveModules';
import {LernaOutput} from './LernaOutput';

export class LernaTypeScriptReactConfig extends TypeScriptReactConfig {
  protected get useThread(): boolean {
    return false;
  }

  public get composed(): What[] {
    return [
      LernaTypeScriptResolvePlugins,
      LernaTypeScriptResolveModules,
      JsExtension,
      TsExtension,
      TsxExtension,
      HotModuleReplacementConfig,
      LernaTypeScriptPlugins,
      LernaOutput
    ].filter(Boolean);
  }

  protected get tsLoaderOptions(): TsLoaderOptions {
    return {...super.tsLoaderOptions, projectReferences: true};
  }
}
