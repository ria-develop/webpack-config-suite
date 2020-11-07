import {EntryObject} from '@webpack-config-suite/core';
import webpack from 'webpack';

export class MyLernaApplicationEntry extends EntryObject {
  protected get entry(): webpack.Entry {
    return {
      pkg1: './packages/pkg1/src/index.ts',
      pkg2: './packages/pkg2/src/index.ts',
      pkg3: './packages/pkg3/src/index.ts'
    };
  }
}
