import {Resolve} from './Resolve';
import {Configuration, ResolveOptions} from 'webpack';

export class ResolveExtensions extends Resolve {
  protected get extensions(): ResolveOptions['extensions'] {
    return [];
  }

  protected get resolve(): Configuration['resolve'] {
    const {extensions = []} = super.resolve;
    super.resolve.extensions = extensions.concat(this.extensions);
    return super.resolve;
  }
}
