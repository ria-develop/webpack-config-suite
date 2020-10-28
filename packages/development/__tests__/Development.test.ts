import {WebpackCliOptions} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';
import {DevelopmentConfig} from '../src';
import HtmlWebpackPlugin from 'html-webpack-plugin';

describe.each([
  ['development', undefined, {}],
  ['development', undefined, {hot: true}],
  ['development', undefined, {liveReload: true}],
  ['production', undefined]
])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given DevelopmentConfig should match snapshot', () => {
      const config: Configuration = {mode};

      new DevelopmentConfig(config, env, argv).composed.forEach((Config) => new Config(config, env, argv));
      expect(config).toMatchSnapshot();
    });
  }
);

describe('given MyDevelopmentConfig should match snapshot', () => {
  it('should should match snapshot', () => {
    const config: Configuration = {mode: 'development'};

    class MyDevelopmentConfig extends DevelopmentConfig {
      protected get htmlWebpackPlugin(): HtmlWebpackPlugin {
        return undefined;
      }
    }

    new MyDevelopmentConfig(config, undefined, {hot: true});
    expect(config).toMatchSnapshot();
  });
});
