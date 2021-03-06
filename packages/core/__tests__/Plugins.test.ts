import {Plugins, WebpackCliOptions} from '../src';
import {Configuration} from 'webpack';
import {testProcessConfig} from '../jest';

describe.each([['development', undefined, {}]])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('should match snapshot', () => {
      const config: Configuration = {mode};

      class MyPluginsConfig extends Plugins {
        get plugins(): Configuration['plugins'] {
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

      class MyOtherPluginsConfig extends Plugins {
        get plugins(): Configuration['plugins'] {
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
      testProcessConfig(MyPluginsConfig, config, env, argv);
      testProcessConfig(MyOtherPluginsConfig, config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
