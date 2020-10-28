import {ExtensionsAwareConfig} from '@webpack-config-suite/core';

export class TsxExtension extends ExtensionsAwareConfig {
  protected get extensions(): string[] {
    return ['.tsx'];
  }
}
