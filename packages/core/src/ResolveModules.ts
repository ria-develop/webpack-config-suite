import {Resolve} from './Resolve';
import {Configuration} from 'webpack';

export class ResolveModules extends Resolve {
  protected get modules(): Configuration['resolve']['modules'] {
    return [];
  }

  protected get resolve(): Configuration['resolve'] {
    const {modules: currentModules} = super.resolve;
    const modules = !currentModules ? this.modules : [...currentModules, ...this.modules]; // TODO: filter duplicates
    return {...super.resolve, ...(modules ? {modules} : {})};
  }
}
