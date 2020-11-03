import {ResolveExtensions} from '@webpack-config-suite/core';

export class TsxExtension extends ResolveExtensions {
  protected get extensions(): string[] {
    return ['.tsx'];
  }
}
