import {CacheThreadRule, WebpackCliOptions} from '../../src';
import {Configuration} from 'webpack';
import {testProcessConfig} from '../../jest';

describe.each([
  ['development', undefined, {}],
  ['production', undefined, {}]
])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given CacheThreadRule should match snapshot', () => {
      const config: Configuration = {mode};
      class MyCacheThreadRuleAwareConfig extends CacheThreadRule {
        protected get numWorkers(): number {
          return 1;
        }
      }
      testProcessConfig(MyCacheThreadRuleAwareConfig, config, env, argv);
      expect(config).toMatchSnapshot();
    });
    it('given CacheThreadRule should match snapshot', () => {
      const config: Configuration = {mode};
      class MyCacheThreadRuleAwareConfig extends CacheThreadRule {
        protected get numWorkers(): number {
          return 1;
        }
        protected get useCache(): boolean {
          return false;
        }

        protected get useThread(): boolean {
          return false;
        }
      }
      testProcessConfig(MyCacheThreadRuleAwareConfig, config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
