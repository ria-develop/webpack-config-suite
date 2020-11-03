import {ResolveExtensions} from '@webpack-config-suite/core';

export class JsxExtension extends ResolveExtensions {
  protected get extensions(): string[] {
    return ['.jsx'];
  }
}
