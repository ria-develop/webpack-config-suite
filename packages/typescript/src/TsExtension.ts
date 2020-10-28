import {ExtensionsAwareConfig} from '@webpack-config-suite/core';

export class TsExtension extends ExtensionsAwareConfig {
  protected get extensions(): string[] {
    return ['.ts'];
  }
}
