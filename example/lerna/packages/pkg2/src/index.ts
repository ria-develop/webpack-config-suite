import * as p1 from '@webpack-config-suite/lerna-example-pkg1';

export function fn4(): string {
  return p1.fn() + ' again s';
}
if (module.hot) {
  module.hot.accept('./packages/pkg1/src/foo.ts', function () {
    console.log('Accepting the updated @webpack-config-suite/lerna-example-pkg1 module!');
  });
}
