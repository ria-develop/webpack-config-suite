import {Configuration} from 'webpack';
import {BaseConfig} from './BaseConfig';
import type {OptionsSchema as WebpackCliOptionsSchema} from '../types/webpack-cli';

export * from './BaseConfig';
export * from './AliasAwareConfig';
export * from './EntryConfig';
export * from './ExtensionsAwareConfig';
export * from './JsExtension';
export * from './WebpackSetup';
export * from './ObjectEntryConfig';
export * from './ResolveAwareConfig';
export * from './CacheThreadRuleAwareConfig';
export * from './RuleSetAwareConfig';
export * from './PluginsAwareConfig';
export * from './Utils';

export type {Options as StyleLoaderOptions} from '../types/style-loader';
export type {Options as PostCssLoaderOptions} from '../types/postcss-loader';
export type {PluginOptions as MiniCssExtractPluginOptions} from '../types/mini-css-extract-plugin';
export type {LoaderOptions as ExtractCssLoaderOptions} from '../types/mini-css-extract-loader';
export type {Options as LessLoaderOptions} from '../types/less-loader';
export type {Options as CssLoaderOptions} from '../types/css-loader';
export type {Options as CacheLoaderOptions} from '../types/cache-loader';
export type {Schema as BabelLoaderOptions} from '../types/babel-loader';

export type WebpackCliOptions = {liveReload?: boolean; hot?: boolean; hotOnly?: boolean} & WebpackCliOptionsSchema;

export type What = typeof BaseConfig | ConfigHandler | (typeof BaseConfig | ConfigHandler)[];
export type ConfigHandler = (config: Configuration, env: unknown, argv: WebpackCliOptions) => What[] | void;
