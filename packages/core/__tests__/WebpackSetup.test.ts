import {Configuration} from 'webpack';
import {BaseConfig, WebpackCliOptions, WebpackSetup} from '../src';

class MyBaseConfig extends BaseConfig {
  get name() {
    return 'MyBaseConfig';
  }

  constructor(config: Configuration, env: unknown, argv: WebpackCliOptions) {
    super(config, env, argv);
    if (!config.name) {
      config.name = this.name;
    } else {
      config.name = `${config.name} ${this.name}`;
    }
  }
}

class MyConfig extends MyBaseConfig {
  get name() {
    return 'MyConfig';
  }

  get composed() {
    return [MyAnotherConfig];
  }
}

class MyAnotherConfig extends MyBaseConfig {
  get composed() {
    return undefined;
  }

  get name() {
    return 'MyAnotherConfig';
  }
}

describe.each([
  ['development', undefined, {}],
  ['production', undefined, {mode: 'production'}]
])(
  'given mode: "%s", env: "%j", argv: "%j"',
  (mode: Configuration['mode'], env: unknown, argv: WebpackCliOptions): void => {
    it('should match snapshot', () => {
      expect(
        WebpackSetup.newSetup()
          .use(MyConfig)
          .use(MyConfig) //should process it only once
          .use((config) => {
            config.name = `${config.name} MyConfigModifierFunction`;
            return [
              (config) => {
                config.name = `${config.name} MyConfigModifierNestedFunction`;
              }
            ];
          })
          .newFactory()(env, argv)
      ).toMatchSnapshot();
    });
  }
);

describe('given empty setup', () => {
  it('should match snapshot', () => {
    expect(WebpackSetup.newSetup().newFactory()(undefined, {})).toMatchSnapshot();
  });
});

describe('given multiple configs for use', () => {
  it('should match snapshot', () => {
    expect(WebpackSetup.newSetup().use([MyConfig, MyConfig]).newFactory()(undefined, {})).toMatchSnapshot();
  });
});
