import {ResolveExtensions} from '@webpack-config-suite/core';

export class CssExtension extends ResolveExtensions {
  protected get extensions(): string[] {
    return ['.css'];
  }
}
