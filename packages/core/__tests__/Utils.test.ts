import {getLoader, is, processConfig} from '../src/Utils';
import {BaseConfig} from '../src';

describe('getLoader() test suite', () => {
  it('given options should return loader object', () => {
    expect(getLoader('my-loader', {myLoaderOption: true})).toEqual({
      loader: 'my-loader',
      options: {myLoaderOption: true}
    });
  });
  it('given no options should return loader string', () => {
    expect(getLoader('my-loader')).toEqual('my-loader');
  });
});

describe('is() test suite', () => {
  it('should return true', () => {
    class MyConfig extends BaseConfig {}
    expect(is(MyConfig, BaseConfig)).toEqual(true);
  });
  it('should return false', () => {
    class MyConfig {}
    expect(is(MyConfig, BaseConfig)).toEqual(false);
  });
});
describe('processConfig() test suite', () => {
  it('should process class based on BaseConfig and return composed configs', () => {
    class MyConfig extends BaseConfig {
      public get composed() {
        return [BaseConfig];
      }
    }

    expect(processConfig(MyConfig)).toEqual([BaseConfig]);
  });
  it('should process function which returns composed configs', () => {
    expect(processConfig(() => [BaseConfig])).toEqual([BaseConfig]);
  });
  it('should not process anything', () => {
    expect(processConfig(undefined)).toBeUndefined();
  });
});
