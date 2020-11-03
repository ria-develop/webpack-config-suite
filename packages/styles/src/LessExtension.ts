import {ResolveExtensions} from '@webpack-config-suite/core';

export class LessExtension extends ResolveExtensions {
  protected get extensions(): string[] {
    return ['.less'];
  }
}
