import {TsExtension, TypeScriptPlugins} from './';

import {BaseConfig} from '@webpack-config-suite/core';
import {RuleSetUseItem} from 'webpack';
import {BabelConfig} from '@webpack-config-suite/babel';
import {Options as BabelPresetEnvOptions} from '@babel/preset-env';
import {PluginItem} from '@babel/core';
import {Options as StrictTsLoaderOptions} from 'ts-loader';

export type TsLoaderOptions = Partial<StrictTsLoaderOptions>;

export class TypeScriptConfig extends BabelConfig {
  static BABEL_PRESET_TYPESCRIPT = '@babel/preset-typescript';

  public get composed(): typeof BaseConfig[] {
    return [TsExtension, this.isSingleOrDevMode && TypeScriptPlugins].filter(Boolean);
  }

  //--------------------------------------------------------------------------------------------------------------------
  // Babel Typescript
  //--------------------------------------------------------------------------------------------------------------------

  protected get babelPresetTypescriptOptions(): BabelPresetEnvOptions | null {
    return null;
  }

  protected get babelPresetTypescript(): (string | BabelPresetEnvOptions | null)[] {
    return [TypeScriptConfig.BABEL_PRESET_TYPESCRIPT, this.babelPresetTypescriptOptions].filter(Boolean);
  }

  protected get babelPresets(): PluginItem[] | null {
    return super.babelPresets.concat([this.babelPresetTypescript]);
  }

  protected get test(): RegExp {
    return /\.ts/;
  }

  protected get tsLoaderOptions(): TsLoaderOptions {
    return {transpileOnly: true, happyPackMode: this.useThread};
  }

  protected get tsLoader(): RuleSetUseItem {
    return {loader: 'ts-loader', options: this.tsLoaderOptions};
  }

  protected get use(): RuleSetUseItem[] {
    return super.use.concat([this.tsLoader]);
  }
}
