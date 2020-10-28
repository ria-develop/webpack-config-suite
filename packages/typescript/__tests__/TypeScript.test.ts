import {WebpackCliOptions} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';
import {TypeScriptConfig, TypeScriptReactConfig} from '../src';
import {TestCases} from '../../../jest/TestCases';

describe.each(TestCases)(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given TypeScriptConfig should match snapshot', () => {
      const config: Configuration = {mode};

      new TypeScriptConfig(config, env, argv).composed.forEach((Config) => new Config(config, env, argv));
      expect(config).toMatchSnapshot();
    });
    it('given TypeScriptReactConfig should match snapshot', () => {
      const config: Configuration = {mode};

      new TypeScriptReactConfig(config, env, argv).composed.forEach((Config) => new Config(config, env, argv));
      expect(config).toMatchSnapshot();
    });
  }
);
