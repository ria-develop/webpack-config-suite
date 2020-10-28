import {ObjectEntryConfig, WebpackCliOptions} from '../src';
import {Configuration} from 'webpack';
import {TestCases} from '../../../jest/TestCases';

describe.each(TestCases)(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given DefaultObjectEntryConfig should match snapshot', () => {
      const config: Configuration = {mode};

      class DefaultObjectEntryConfig extends ObjectEntryConfig {}
      new DefaultObjectEntryConfig(config, env, argv);
      expect(config).toMatchSnapshot();
    });

    it('given CustomEntryConfig should match snapshot', () => {
      const config: Configuration = {mode};

      class CustomEntryConfig extends ObjectEntryConfig {
        protected get sources(): string | [string, ...string[]] {
          return [`./src/index${(this.isHot && '.hot') || ''}.tsx`, './src/main.css'];
        }

        protected get name(): string {
          return 'app-name';
        }
      }
      new CustomEntryConfig(config, env, argv);
      expect(config).toMatchSnapshot();
    });

    it('given MultipleEntries should match snapshot', () => {
      const config: Configuration = {mode};

      class ApplicationEntry extends ObjectEntryConfig {
        protected get sources(): string | [string, ...string[]] {
          return [`./src/index${(this.isHot && '.hot') || ''}.tsx`, './src/main.css'];
        }

        protected get dependOn(): string {
          return 'react-vendors';
        }

        protected get name(): string {
          return 'app-name';
        }
      }

      class VendorsEntry extends ObjectEntryConfig {
        protected get sources(): string | [string, ...string[]] {
          return ['react', 'react-dom', 'prop-types'];
        }

        protected get name(): string {
          return 'react-vendors';
        }
      }

      new ApplicationEntry(config, env, argv);
      new VendorsEntry(config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
