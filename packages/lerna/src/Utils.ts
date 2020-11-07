import * as path from 'path';

export const getContext = (): string => {
  return process.cwd();
};

export const resolve = (...pathSegments: string[]): string => {
  return path.resolve(...pathSegments);
};

export const findRootTsConfig = (): string => {
  try {
    return require.resolve(path.resolve(getContext(), 'packages/tsconfig.json'));
  } catch (e) {
    return 'tsconfig.json';
  }
};
