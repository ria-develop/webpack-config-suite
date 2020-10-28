import {WebpackCliOptions} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';
import {BabelConfig, BabelReactConfig, HotModuleReplacementConfig} from '../src';

describe.each([
  ['development', undefined, {}],
  ['development', undefined, {hot: true}]
])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given BabelConfig should match snapshot', () => {
      const config: Configuration = {mode};

      new BabelConfig(config, env, argv).composed.forEach((Config) => new Config(config, env, argv));
      expect(config).toMatchSnapshot();
    });
    it('given BabelReactConfig should match snapshot', () => {
      const config: Configuration = {mode};

      new BabelReactConfig(config, env, argv).composed.forEach((Config) => new Config(config, env, argv));
      expect(config).toMatchSnapshot();
    });
    it('given HotModuleReplacementConfig should match snapshot', () => {
      const config: Configuration = {mode};

      new HotModuleReplacementConfig(config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
