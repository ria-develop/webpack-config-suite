import {ExtensionsAwareConfig} from '@webpack-config-suite/core';

export class CssExtension extends ExtensionsAwareConfig {
  protected get extensions(): string[] {
    return ['.css'];
  }
}
