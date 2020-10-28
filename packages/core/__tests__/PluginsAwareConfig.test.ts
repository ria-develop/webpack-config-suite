import {PluginsAwareConfig, WebpackCliOptions} from '../src';
import {Configuration} from 'webpack';

describe.each([['development', undefined, {}]])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('should match snapshot', () => {
      const config: Configuration = {mode};

      class MyPluginsConfig extends PluginsAwareConfig {
        get plugins(): Configuration['plugins'] | undefined {
          return super['plugins'].concat([
            {
              name: 'MyPluginOne',
              apply() {
                return true;
              }
            }
          ]);
        }
      }

      class MyOtherPluginsConfig extends PluginsAwareConfig {
        get plugins(): Configuration['plugins'] | undefined {
          return super['plugins'].concat([
            {
              name: 'MyPluginTwo',
              apply() {
                return true;
              }
            }
          ]);
        }
      }

      new MyPluginsConfig(config, env, argv);
      new MyOtherPluginsConfig(config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
