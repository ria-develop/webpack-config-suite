import {Configuration} from 'webpack';
import {BaseConfig} from './BaseConfig';

export * from './BaseConfig';
export * from './Entry';
export * from './EntryObject';
export * from './ModuleRules';
export * from './Plugins';
export * from './Resolve';
export * from './ResolveAlias';
export * from './ResolveExtensions';
export * from './ResolvePlugins';
export * from './Utils';
export * from './WebpackSetup';
export * from './impl/CacheThreadRule';
export * from './impl/JsExtension';

export type {LoaderOptions as ExtractCssLoaderOptions} from '../types/mini-css-extract-loader';
export type {Options as CacheLoaderOptions} from '../types/cache-loader';
export type {Options as CssLoaderOptions} from '../types/css-loader';
export type {Options as LessLoaderOptions} from '../types/less-loader';
export type {Options as PostCssLoaderOptions} from '../types/postcss-loader';
export type {Options as StyleLoaderOptions} from '../types/style-loader';
export type {PluginOptions as MiniCssExtractPluginOptions} from '../types/mini-css-extract-plugin';
export type {Schema as BabelLoaderOptions} from '../types/babel-loader';

export type WebpackCliOptions = {
  mode?: Configuration['mode'];
  liveReload?: boolean;
  hot?: boolean;
  hotOnly?: boolean;
  [key: string]: any;
};

export type What = typeof BaseConfig | ConfigHandler | (typeof BaseConfig | ConfigHandler)[];
export type ConfigHandler = (config: Configuration, env: unknown, argv: WebpackCliOptions) => What[] | void;
