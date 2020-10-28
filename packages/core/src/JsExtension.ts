import {ExtensionsAwareConfig} from './ExtensionsAwareConfig';

export class JsExtension extends ExtensionsAwareConfig {
  protected get extensions(): string[] {
    return super.extensions.concat(['.js']);
  }
}
