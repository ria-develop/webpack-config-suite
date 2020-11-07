/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
import {RuleSetUseItem} from 'webpack';
import {BaseConfig, What} from './index';

export function getLoader(loader: string, options?: unknown): RuleSetUseItem {
  if (options) {
    return {loader, options};
  }
  return loader;
}

export function is(instance: any, of: any): boolean {
  return ((instance && instance.prototype) || instance) instanceof of;
}

export function processConfig(Entity: any, ...args): What[] {
  if (is(Entity, BaseConfig)) {
    return new Entity(...args).composed;
  } else if (is(Entity, Function)) {
    return Entity(...args);
  }
  return undefined;
}
