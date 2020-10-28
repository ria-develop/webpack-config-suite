import {Configuration} from 'webpack';
import {WebpackCliOptions} from '../packages/core/src';

type TestCase = [Configuration['mode'], unknown, WebpackCliOptions];

export const TestCases: TestCase[] = [
  ['development', undefined, {mode: 'development'}],
  ['production', undefined, {mode: 'production'}],
  ['development', undefined, {liveReload: true, hot: true}],
  ['development', undefined, {liveReload: false, hot: false}],
  ['production', undefined, {liveReload: true, hot: true}]
];
