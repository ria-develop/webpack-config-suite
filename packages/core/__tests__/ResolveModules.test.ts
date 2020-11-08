import {ResolveModules, WebpackCliOptions} from '../src';
import {Configuration} from 'webpack';
import {testProcessConfig} from '../jest';

describe.each([['development', undefined, {}]])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given ResolveModules should match snapshot', () => {
      const config: Configuration = {mode};

      testProcessConfig(ResolveModules, config, env, argv);
      expect(config).toMatchSnapshot();
      config.resolve.plugins = [() => true];
      testProcessConfig(ResolveModules, config, env, argv);
      expect(config).toMatchSnapshot();
    });
    it('given NoResolveModules should match snapshot', () => {
      const config: Configuration = {mode};

      class NoResolveModules extends ResolveModules {
        protected get modules(): Configuration['resolve']['modules'] {
          return undefined;
        }
      }

      testProcessConfig(NoResolveModules, config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
