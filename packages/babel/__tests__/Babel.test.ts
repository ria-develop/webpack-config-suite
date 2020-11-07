import {WebpackCliOptions} from '../../core/src';
import {Configuration} from 'webpack';
import {BabelConfig, BabelReactConfig, HotModuleReplacementConfig} from '../src';
import {testProcessConfig} from '../../../jest';

describe.each([
  ['development', undefined, {}],
  ['development', undefined, {hot: true}]
])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given BabelConfig should match snapshot', () => {
      const config: Configuration = {mode};
      class MyBabelConfig extends BabelConfig {
        protected get numWorkers(): number {
          return 1;
        }
      }
      testProcessConfig(MyBabelConfig, config, env, argv);
      expect(config).toMatchSnapshot();
    });
    it('given BabelReactConfig should match snapshot', () => {
      const config: Configuration = {mode};
      class MyBabelReactConfig extends BabelReactConfig {
        protected get numWorkers(): number {
          return 1;
        }
      }
      testProcessConfig(MyBabelReactConfig, config, env, argv);
      expect(config).toMatchSnapshot();
    });
    it('given HotModuleReplacementConfig should match snapshot', () => {
      const config: Configuration = {mode};

      testProcessConfig(HotModuleReplacementConfig, config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
