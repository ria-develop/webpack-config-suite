import {ResolveAwareConfig} from './ResolveAwareConfig';
import {Configuration} from 'webpack';

export class ExtensionsAwareConfig extends ResolveAwareConfig {
  protected get extensions(): Configuration['resolve']['extensions'] {
    return [];
  }

  protected get resolve(): Configuration['resolve'] {
    const {extensions = []} = super.resolve;
    super.resolve.extensions = extensions.concat(this.extensions);
    return super.resolve;
  }
}
