import {WebpackCliOptions} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';
import {TypeScriptConfig, TypeScriptReactConfig} from '../src';
import {TestCases} from '../../../jest/TestCases';

describe.each(TestCases)(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given TypeScriptConfig should match snapshot', () => {
      const config: Configuration = {mode};
      class MyTypeScriptConfig extends TypeScriptConfig {
        protected get numWorkers(): number {
          return 1;
        }
      }
      new MyTypeScriptConfig(config, env, argv).composed.forEach((Config) => new Config(config, env, argv));
      expect(config).toMatchSnapshot();
    });
    it('given TypeScriptReactConfig should match snapshot', () => {
      const config: Configuration = {mode};
      class MyTypeScriptReactConfig extends TypeScriptReactConfig {
        protected get numWorkers(): number {
          return 1;
        }
      }
      new MyTypeScriptReactConfig(config, env, argv).composed.forEach((Config) => new Config(config, env, argv));
      expect(config).toMatchSnapshot();
    });
  }
);
