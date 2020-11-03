import {ResolveAlias} from '../src';
import {Configuration} from 'webpack';

describe('given ResolveAlias', () => {
  const mode: Configuration['mode'] = 'development',
    env = undefined,
    argv = {};
  it('should create alias"', () => {
    const alias = {some: 'alias'};

    class AliasAwareConfigDefault extends ResolveAlias {
      protected get alias(): Configuration['resolve']['alias'] {
        return Object.assign(super['alias'], alias);
      }
    }

    const config = {mode};
    new AliasAwareConfigDefault(config, env, argv);
    expect(config).toEqual({mode, resolve: {alias}});
  });

  it('should add alias"', () => {
    const alias = {some: 'alias'};
    const existing = {another: 'alias'};

    class AliasAwareConfigDefault extends ResolveAlias {
      protected get alias(): Configuration['resolve']['alias'] {
        return alias;
      }
    }

    const config = {mode, resolve: {alias: existing}};
    new AliasAwareConfigDefault(config, env, argv);
    expect(config).toEqual({mode, resolve: {alias: {...existing, ...alias}}});
  });

  it('should provide empty alias"', () => {
    class AliasAwareConfigDefault extends ResolveAlias {
      protected get alias(): Configuration['resolve']['alias'] {
        return undefined;
      }
    }

    const config = {mode, resolve: {}};
    new AliasAwareConfigDefault(config, env, argv);
    expect(config).toEqual({mode, resolve: {}});
  });
});
