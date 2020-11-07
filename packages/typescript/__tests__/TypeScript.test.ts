import {WebpackCliOptions} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';
import {TypeScriptConfig, TypeScriptPlugins, TypeScriptReactConfig} from '../src';
import {TestCases, testProcessConfig} from '../../../jest';
import {ForkTsCheckerWebpackPluginOptions} from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPluginOptions';

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

      testProcessConfig(MyTypeScriptConfig, config, env, argv);
      expect(config).toMatchSnapshot();
    });

    it('given TypeScriptReactConfig should match snapshot', () => {
      const config: Configuration = {mode};

      class MyTypeScriptReactConfig extends TypeScriptReactConfig {
        protected get numWorkers(): number {
          return 1;
        }
      }

      testProcessConfig(MyTypeScriptReactConfig, config, env, argv);
      expect(config).toMatchSnapshot();
    });

    it('given MyTypeScriptPlugins should match snapshot', () => {
      const config: Configuration = {mode};

      class MyTypeScriptPlugins extends TypeScriptPlugins {
        protected get eslint(): ForkTsCheckerWebpackPluginOptions['eslint'] {
          return undefined;
        }

        protected get typescript(): ForkTsCheckerWebpackPluginOptions['typescript'] {
          return undefined;
        }
      }

      testProcessConfig(MyTypeScriptPlugins, config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
