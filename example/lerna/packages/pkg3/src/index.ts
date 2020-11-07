import * as p1 from '@webpack-config-suite/lerna-example-pkg1';
import * as p2 from '@webpack-config-suite/lerna-example-pkg2';

console.log(p1.fn());
console.log(p2.fn4());
if (module.hot) {
  module.hot.accept('@webpack-config-suite/lerna-example-pkg1', function () {
    console.log('Accepting the updated @webpack-config-suite/lerna-example-pkg1 module!');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    console.log(require('@webpack-config-suite/lerna-example-pkg1'));
  });
  module.hot.accept('@webpack-config-suite/lerna-example-pkg2', function () {
    console.log('Accepting the updated @webpack-config-suite/lerna-example-pkg2 module! ');
    console.log(p2.fn4());
  });
}
