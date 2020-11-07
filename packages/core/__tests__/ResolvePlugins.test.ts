import {ResolvePlugins, WebpackCliOptions} from '../src';
import {Configuration} from 'webpack';
import {testProcessConfig} from '../jest';

describe.each([['development', undefined, {}]])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given ResolvePlugins should match snapshot', () => {
      const config: Configuration = {mode};

      new ResolvePlugins(config, env, argv);
      expect(config).toMatchSnapshot();
      config.resolve.plugins = [() => true];
      testProcessConfig(ResolvePlugins, config, env, argv);
      expect(config).toMatchSnapshot();
    });
    it('given NoResolvePlugins should match snapshot', () => {
      const config: Configuration = {mode};

      class NoResolvePlugins extends ResolvePlugins {
        protected get plugins(): Configuration['resolve']['plugins'] {
          return undefined;
        }
      }

      testProcessConfig(NoResolvePlugins, config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
