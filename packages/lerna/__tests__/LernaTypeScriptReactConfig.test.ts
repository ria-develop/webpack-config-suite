jest.mock('path', () => ({
  ...jest.requireActual('path'),
  resolve: jest.fn().mockImplementation((...pathSegments: string[]): string => {
    const resolved = jest.requireActual('path').resolve(...pathSegments);
    if (resolved.includes('src')) {
      return './src' + resolved.split('src')[1].replace(/\\/g, '/');
    }
    return resolved;
  })
}));
jest.mock('declaration-bundler-webpack-plugin');
jest.mock('tsconfig-paths-webpack-plugin');
jest.mock('../src/Utils', () => ({
  ...jest.requireActual('../src/Utils'),
  getContext: () => './',
  resolve: (...pathSegments: string[]) => pathSegments.join('/')
}));
import {WebpackCliOptions} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';
import {LernaTypeScriptReactConfig} from '../src';
import {TestCases, testProcessConfig} from '../../../jest';

describe.each(TestCases)(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given TypeScriptConfig should match snapshot', () => {
      const config: Configuration = {mode};

      class MyLernaTypeScriptReactConfig extends LernaTypeScriptReactConfig {
        protected get numWorkers(): number {
          return 1;
        }
      }

      testProcessConfig(MyLernaTypeScriptReactConfig, config, env, argv);
      expect(config).toMatchSnapshot();
    });
  }
);
