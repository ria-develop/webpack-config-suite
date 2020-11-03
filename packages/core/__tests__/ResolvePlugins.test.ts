import {ResolvePlugins, WebpackCliOptions} from '../src';
import {Configuration} from 'webpack';

describe.each([['development', undefined, {}]])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given ResolvePlugins should match snapshot', () => {
      const config: Configuration = {mode};

      new ResolvePlugins(config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
