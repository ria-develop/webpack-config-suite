import {findRootTsConfig, getContext, resolve} from '../src/Utils';
import * as path from 'path';

jest.mock('path');
afterEach(() => {
  jest.resetAllMocks();
});
describe('given getContext()', () => {
  it('should return current working directory', () => {
    expect(getContext()).toEqual(process.cwd());
  });
});

describe('given resolve()', () => {
  it('should call native resolve with given args', () => {
    resolve('a', 'b');
    expect(path.resolve).toHaveBeenNthCalledWith(1, 'a', 'b');
  });
});

describe('given findRootTsConfig()', () => {
  it('should call native resolve with given args', () => {
    expect(findRootTsConfig()).toEqual('tsconfig.json'); // fallback to root while no packages/tsconfig.json found
    expect(path.resolve).toHaveBeenNthCalledWith(1, getContext(), 'packages/tsconfig.json');
  });
});
