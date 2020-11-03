import {ResolveExtensions} from '../ResolveExtensions';

export class JsExtension extends ResolveExtensions {
  protected get extensions(): string[] {
    return ['.js'];
  }
}
