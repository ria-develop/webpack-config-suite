import {ExtensionsAwareConfig} from '@webpack-config-suite/core';

export class LessExtension extends ExtensionsAwareConfig {
  protected get extensions(): string[] {
    return ['.less'];
  }
}
