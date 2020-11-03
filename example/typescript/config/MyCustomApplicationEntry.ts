import {EntryObject} from '@webpack-config-suite/core';
import {Entry as WebpackEntry} from 'webpack';

export default class MyCustomApplicationEntry extends EntryObject {
  protected get sources(): string | [string, ...string[]] {
    return [`./src/index${(this.isHot && '.hot') || ''}.tsx`, './src/main.css'];
  }

  protected get dependOn(): string {
    return 'react-vendors';
  }

  protected get name(): string {
    return 'typescript-example';
  }

  protected get entry(): WebpackEntry {
    return Object.assign<WebpackEntry, WebpackEntry>(super.entry, {
      'react-vendors': {import: ['react', 'react-dom', 'prop-types']}
    });
  }
}
