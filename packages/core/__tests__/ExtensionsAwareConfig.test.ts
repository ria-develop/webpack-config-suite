import {JsExtension, WebpackCliOptions} from '../src';
import {Configuration} from 'webpack';

describe.each([['development', undefined, {}]])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('should match snapshot', () => {
      const config: Configuration = {mode};

      new JsExtension(config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
