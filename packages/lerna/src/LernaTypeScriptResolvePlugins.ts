import {ResolvePlugins} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';
import {TsconfigPathsPlugin} from 'tsconfig-paths-webpack-plugin';
import {Options} from 'tsconfig-paths-webpack-plugin/lib/options';
import {findRootTsConfig} from './Utils';

export class LernaTypeScriptResolvePlugins extends ResolvePlugins {
  protected get configFile(): string {
    return findRootTsConfig();
  }

  protected get tsConfigPathsOptions(): Partial<Options> {
    return {configFile: this.configFile};
  }

  protected get plugins(): Configuration['resolve']['plugins'] {
    return [new TsconfigPathsPlugin(this.tsConfigPathsOptions)];
  }
}
