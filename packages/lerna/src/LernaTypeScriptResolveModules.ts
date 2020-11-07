import {ResolveModules} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';
import {getContext, resolve} from './Utils';

export class LernaTypeScriptResolveModules extends ResolveModules {
  protected get modules(): Configuration['resolve']['modules'] {
    return [resolve(getContext()), resolve(getContext(), './packages'), 'node_modules']; // TODO: get packages from @lerna/project
  }
}
