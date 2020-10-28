import {JsExtension} from '@webpack-config-suite/core';

export class JsxExtensions extends JsExtension {
  protected get extensions(): string[] {
    return super['extensions'].concat('.jsx');
  }
}
export default JsxExtensions;
