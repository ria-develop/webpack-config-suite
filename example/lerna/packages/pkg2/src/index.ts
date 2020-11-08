import * as p1 from '@webpack-config-suite/lerna-example-pkg1';

export function greeting(): string {
  return p1.greeting() + ' from @webpack-config-suite/lerna-example-pkg2';
}
