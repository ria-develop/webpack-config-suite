export {TestCases} from '../../../jest';
import {processConfig, WebpackCliOptions, What} from '../src';
import {Configuration} from 'webpack';

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
