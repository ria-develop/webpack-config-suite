import {CacheThreadRuleAwareConfig, WebpackCliOptions} from '../src';
import {Configuration} from 'webpack';

describe.each([
  ['development', undefined, {}],
  ['production', undefined, {}]
])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given CacheThreadRuleAwareConfig should match snapshot', () => {
      const config: Configuration = {mode};

      new CacheThreadRuleAwareConfig(config, env, argv);
      expect(config).toMatchSnapshot();
    });
    it('given CacheThreadRuleAwareConfig should match snapshot', () => {
      const config: Configuration = {mode};
      class MyRuleOptimizationAwareConfig extends CacheThreadRuleAwareConfig {
        protected get useCache(): boolean {
          return false;
        }

        protected get useThread(): boolean {
          return false;
        }
      }
      new MyRuleOptimizationAwareConfig(config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
