import {Plugins} from '@webpack-config-suite/core/';
import {Configuration} from 'webpack';
import {ForkTsCheckerWebpackPlugin} from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin';
import {ForkTsCheckerWebpackPluginOptions} from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPluginOptions';
import DeclarationBundlerPlugin from 'declaration-bundler-webpack-plugin';

export class TypeScriptPlugins extends Plugins {
  protected get eslint(): ForkTsCheckerWebpackPluginOptions['eslint'] {
    return {
      files: './src/**/*.{ts,tsx,js,jsx}',
      enabled: true
    };
  }

  protected get typescript(): ForkTsCheckerWebpackPluginOptions['typescript'] {
    return {
      diagnosticOptions: {
        semantic: true,
        syntactic: true
      }
    };
  }

  protected get forkTsCheckerOptions(): ForkTsCheckerWebpackPluginOptions {
    const {typescript, eslint} = this;
    return {
      ...((typescript && {typescript}) || {}),
      ...((eslint && {eslint}) || {})
    };
  }

  protected get forkTsChecker(): ForkTsCheckerWebpackPlugin {
    return this.isSingleOrDevMode && new ForkTsCheckerWebpackPlugin(this.forkTsCheckerOptions);
  }

  protected get declarationBundlerOptions(): {
    out?: string;
    moduleName?: string;
    mode?: string;
    excludedReferences?: string[];
  } {
    return {};
  }

  protected get declarationBundlerPlugins(): DeclarationBundlerPlugin[] {
    return [this.isSingleOrDevMode && new DeclarationBundlerPlugin(this.declarationBundlerOptions)].filter(Boolean);
  }

  get plugins(): Configuration['plugins'] {
    return [this.forkTsChecker, ...this.declarationBundlerPlugins];
  }
}
