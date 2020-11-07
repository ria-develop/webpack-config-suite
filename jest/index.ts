import {processConfig, WebpackCliOptions, What} from '@webpack-config-suite/core';
import {Configuration} from 'webpack';

type TestCase = [Configuration['mode'], unknown, WebpackCliOptions];

export const TestCases: TestCase[] = [
  ['development', undefined, {mode: 'development'}],
  ['production', undefined, {mode: 'production'}],
  ['development', undefined, {liveReload: true, hot: true}],
  ['development', undefined, {liveReload: false, hot: false}],
  ['production', undefined, {liveReload: true, hot: true}]
];

export function testProcessConfig(
  Entity: What,
  config: Configuration,
  env: unknown = undefined,
  argv: WebpackCliOptions = {}
): void {
  const composed = processConfig(Entity, config, env, argv);
  if (composed) {
    composed.forEach((ComposedConfig) => testProcessConfig(ComposedConfig, config, env, argv));
  }
}
