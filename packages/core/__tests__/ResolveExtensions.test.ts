import {JsExtension, ResolveExtensions, WebpackCliOptions} from '../src';
import {Configuration} from 'webpack';
import {testProcessConfig} from '../jest';

describe.each([['development', undefined, {}]])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given ResolveExtensions should match snapshot', () => {
      const config: Configuration = {mode};

      testProcessConfig(ResolveExtensions, config, env, argv);
      expect(config).toMatchSnapshot();
    });
    it('given JsExtension should match snapshot', () => {
      const config: Configuration = {mode};

      testProcessConfig(JsExtension, config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
