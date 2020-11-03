import {Resolve} from './Resolve';
import {Configuration} from 'webpack';

export class ResolvePlugins extends Resolve {
  protected get plugins(): Configuration['resolve']['plugins'] {
    return [];
  }

  protected get resolve(): Configuration['resolve'] {
    const {plugins: currentPlugins} = super.resolve;
    const plugins = !currentPlugins ? this.plugins : [...currentPlugins, ...this.plugins]; // TODO: filter duplicates
    return {...super.resolve, ...(plugins ? {plugins} : {})};
  }
}
