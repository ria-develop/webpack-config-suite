import {ResolveExtensions} from '@webpack-config-suite/core';

export class TsExtension extends ResolveExtensions {
  protected get extensions(): string[] {
    return ['.ts'];
  }
}
