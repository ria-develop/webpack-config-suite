import {ResolveAwareConfig} from './ResolveAwareConfig';
import {Configuration} from 'webpack';

export class AliasAwareConfig extends ResolveAwareConfig {
  protected get alias(): Configuration['resolve']['alias'] {
    return {};
  }

  protected get resolve(): Configuration['resolve'] {
    const {alias: currentAlias} = super.resolve;
    const alias = !currentAlias ? this.alias : {...currentAlias, ...this.alias};
    return {...super.resolve, ...(alias ? {alias} : {})};
  }
}
