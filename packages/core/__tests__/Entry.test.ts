import {Entry, WebpackCliOptions} from '../src';
import {Configuration} from 'webpack';
import {TestCases} from '../../../jest/TestCases';

describe.each(TestCases)(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('should match snapshot', () => {
      const config: Configuration = {mode};

      class SomeConfig extends Entry {}
      new SomeConfig(config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
