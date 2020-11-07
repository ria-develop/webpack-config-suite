import {Entry, WebpackCliOptions} from '../src';
import {Configuration} from 'webpack';
import {TestCases, testProcessConfig} from '../jest';

describe.each(TestCases)(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('should match snapshot', () => {
      const config: Configuration = {mode};
      class SomeConfig extends Entry {
        protected get sources(): string | [string, ...string[]] {
          if (this.isHot) {
            return 'src/prod';
          } else if (this.isDev) {
            return 'src/dev';
          } else if (this.isProd) {
            return 'src/prod';
          } else {
            return 'src/index';
          }
        }
      }
      testProcessConfig(SomeConfig, config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
