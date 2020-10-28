import {PluginsAwareConfig} from '@webpack-config-suite/core/';
import {Configuration} from 'webpack';
import {ForkTsCheckerWebpackPlugin} from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin';
import {ForkTsCheckerWebpackPluginOptions} from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPluginOptions';

export class TypeScriptPlugins extends PluginsAwareConfig {
  protected get forkTsCheckerOptions(): ForkTsCheckerWebpackPluginOptions {
    return {
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        }
      },
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
        enabled: true
      }
    };
  }

  protected get forkTsChecker(): ForkTsCheckerWebpackPlugin {
    return new ForkTsCheckerWebpackPlugin(this.forkTsCheckerOptions);
  }

  get plugins(): Configuration['plugins'] | undefined {
    return (this.isDev && [this.forkTsChecker]) || undefined;
  }
}
