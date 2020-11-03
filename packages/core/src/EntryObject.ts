import {Entry} from './Entry';
import {Entry as WebpackEntry} from 'webpack';

export class EntryObject extends Entry {
  protected get dependOn(): string | undefined {
    return undefined;
  }

  protected get name(): string {
    return 'main';
  }

  protected get entry(): WebpackEntry {
    return {[this.name]: this.dependOn ? {import: this.sources, dependOn: this.dependOn} : this.sources};
  }
}
