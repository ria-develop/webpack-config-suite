import {ObjectEntryConfig} from '@webpack-config-suite/core';
import {Entry} from 'webpack';

export default class MyCustomApplicationEntry extends ObjectEntryConfig {
  protected get sources(): string | [string, ...string[]] {
    return [`./src/index${(this.isHot && '.hot') || ''}.tsx`, './src/main.css'];
  }

  protected get dependOn(): string {
    return 'react-vendors';
  }

  protected get name(): string {
    return 'typescript-example';
  }

  protected get entry(): Entry {
    return Object.assign<Entry, Entry>(super.entry, {'react-vendors': {import: ['react', 'react-dom', 'prop-types']}});
  }
}
