import {WebpackCliOptions} from '@webpack-config-suite/core';
import {Configuration, RuleSetRule, RuleSetUseItem} from 'webpack';
import {CssConfig, LessConfig} from '../src';
import path from 'path';
import {testProcessConfig} from '../../../jest';

const relativePaths = (item: RuleSetUseItem): RuleSetUseItem => {
  if (typeof item === 'object') {
    item.loader = path.relative(process.cwd(), item.loader).replace(/\\/g, '/');
  }
  return item;
};

const fixPaths = (rule: RuleSetRule): RuleSetRule => {
  if (Array.isArray(rule.use)) {
    return {...rule, use: rule.use.map(relativePaths)};
  }
  return rule;
};

describe.each([
  ['development', undefined, {}],
  ['development', undefined, {hot: true}],
  ['development', undefined, {liveReload: true}],
  ['production', undefined, {}]
])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('given CssConfig should match snapshot', () => {
      const config: Configuration = {mode};
      class MyCssConfig extends CssConfig {
        protected get numWorkers(): number {
          return 1;
        }
      }
      testProcessConfig(MyCssConfig, config, env, argv);
      config.module.rules = config.module.rules.map<RuleSetRule>(fixPaths);
      expect(config).toMatchSnapshot();
    });
    it('given LessConfig should match snapshot', () => {
      const config: Configuration = {mode};
      class MyLessConfig extends LessConfig {
        protected get numWorkers(): number {
          return 1;
        }
      }
      testProcessConfig(MyLessConfig, config, env, argv);
      config.module.rules = config.module.rules.map<RuleSetRule>(fixPaths);
      expect(config).toMatchSnapshot();
    });
  }
);
