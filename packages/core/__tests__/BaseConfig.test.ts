import {BaseConfig, WebpackCliOptions} from '../src';
import {Configuration} from 'webpack';
import {TestCases} from '../jest';

describe.each(TestCases)(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('should match snapshot', () => {
      const subject = {mode};

      class SomeConfig extends BaseConfig {
        public get state() {
          const {isProd, isDev, isSingleOrDevMode, isLiveReload, isHot, composed} = this;
          return {isProd, isDev, isSingleOrDevMode, isLiveReload, isHot, composed};
        }
      }

      expect(new SomeConfig(subject, env, argv).state).toMatchSnapshot();
    });
  }
);
