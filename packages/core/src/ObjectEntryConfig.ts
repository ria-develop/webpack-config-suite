import {EntryConfig} from './EntryConfig';
import {Entry} from 'webpack';

export class ObjectEntryConfig extends EntryConfig {
  protected get dependOn(): string | undefined {
    return undefined;
  }

  protected get name(): string {
    return 'main';
  }

  protected get entry(): Entry {
    return {[this.name]: this.dependOn ? {import: this.sources, dependOn: this.dependOn} : this.sources};
  }
}
