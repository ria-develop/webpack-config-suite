import {
  BabelLoaderOptions as BabelLoaderOptionsFromSchema,
  BaseConfig,
  CacheThreadRule,
  getLoader,
  JsExtension
} from '@webpack-config-suite/core';
import {RuleSetUseItem} from 'webpack';
import {PluginItem} from '@babel/core';
import {Options as BabelPresetEnvOptions} from '@babel/preset-env';

import {TransformOptions} from 'babel__core';

export type BabelLoaderOptions = TransformOptions & BabelLoaderOptionsFromSchema;

export class BabelConfig extends CacheThreadRule {
  static BABEL_PRESET_ENV: '@babel/preset-env' = '@babel/preset-env';

  static BABEL_PRESET_REACT: '@babel/preset-react' = '@babel/preset-react';

  static BABEL_PLUGIN_HOT_LOADER: 'react-hot-loader/babel' = 'react-hot-loader/babel';

  public get composed(): typeof BaseConfig[] {
    return [JsExtension];
  }

  //--------------------------------------------------------------------------------------------------------------------
  // Preset Env
  //--------------------------------------------------------------------------------------------------------------------
  protected get useReact(): boolean {
    return false;
  }

  protected get babelPresetEnvOptions(): BabelPresetEnvOptions | null {
    return null;
  }

  protected get babelPresetEnv(): (string | BabelPresetEnvOptions | null)[] {
    return [BabelConfig.BABEL_PRESET_ENV, this.babelPresetEnvOptions].filter(Boolean);
  }

  //--------------------------------------------------------------------------------------------------------------------
  // Preset React
  //--------------------------------------------------------------------------------------------------------------------

  protected get babelPresetReactOptions(): unknown {
    return null;
  }

  protected get babelPresetReact(): unknown[] {
    return [BabelConfig.BABEL_PRESET_REACT, this.babelPresetReactOptions].filter(Boolean);
  }

  //--------------------------------------------------------------------------------------------------------------------
  // General
  //--------------------------------------------------------------------------------------------------------------------

  protected get test(): RegExp | string {
    return /\.js$/;
  }

  protected get babelPresets(): PluginItem[] | null {
    return [this.babelPresetEnv, this.useReact && this.babelPresetReact].filter(Boolean);
  }

  protected get babelPlugins(): PluginItem[] | null {
    return this.isHot && [BabelConfig.BABEL_PLUGIN_HOT_LOADER];
  }

  protected get babelLoaderOptions(): BabelLoaderOptions {
    return {presets: this.babelPresets, ...(this.babelPlugins && {plugins: this.babelPlugins})};
  }

  protected get babelLoader(): RuleSetUseItem {
    return getLoader('babel-loader', this.babelLoaderOptions);
  }

  protected get use(): RuleSetUseItem[] {
    return super.use.concat([this.babelLoader]);
  }
}
