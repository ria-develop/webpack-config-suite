import {WebpackCliOptions} from './index';
import {Configuration, RuleSetRule, RuleSetUseItem} from 'webpack';
import {Module} from './Module';

export class ModuleRules extends Module {
  protected get test(): RegExp | string {
    return undefined;
  }

  protected get use(): RuleSetUseItem[] {
    return [];
  }

  protected get rule(): RuleSetRule {
    return {test: this.test, exclude: /node_modules/, use: this.use};
  }

  constructor(config: Configuration, env: unknown, argv: WebpackCliOptions) {
    super(config, env, argv);
    const {rules = []} = this.module;
    rules.push(this.rule);
    this.module.rules = rules;
  }
}
