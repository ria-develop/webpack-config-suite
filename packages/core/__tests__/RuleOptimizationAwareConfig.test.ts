import {RuleOptimizationAwareConfig, WebpackCliOptions} from '../src';
import {Configuration} from 'webpack';

describe.each([
  ['development', undefined, {}],
  ['production', undefined, {}]
])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given RuleOptimizationAwareConfig should match snapshot', () => {
      const config: Configuration = {mode};

      new RuleOptimizationAwareConfig(config, env, argv);
      expect(config).toMatchSnapshot();
    });
    it('given RuleOptimizationAwareConfig should match snapshot', () => {
      const config: Configuration = {mode};
      class MyRuleOptimizationAwareConfig extends RuleOptimizationAwareConfig {
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
