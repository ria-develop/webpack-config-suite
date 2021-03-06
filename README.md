[![Build Status](https://travis-ci.org/ria-develop/webpack-config-suite.svg?branch=master)](https://travis-ci.org/ria-develop/webpack-config-suite)
[![Coverage Status](https://coveralls.io/repos/github/ria-develop/webpack-config-suite/badge.svg?branch=master)](https://coveralls.io/github/ria-develop/webpack-config-suite?branch=master)
# `webpack-config-suite`
## What is this?
The utility to create flexible and shareable webpack configurations for complex projects

## Requirements
### Webpack >= 5

## Usage

example TypeScript 

**webpack.config.ts**
```typescript
import {WebpackSetup} from '@webpack-config-suite/core';
import {DevelopmentConfig} from '@webpack-config-suite/development';
import {CssConfig, LessConfig} from '@webpack-config-suite/styles';
import {BabelReactConfig} from '@webpack-config-suite/babel';
import {TypeScriptReactConfig} from '@webpack-config-suite/typescript';

import MyCustomApplicationEntry from './config/MyCustomApplicationEntry';

export default WebpackSetup.newSetup()
  .use(MyCustomApplicationEntry)
  .use(CssConfig)
  .use(LessConfig)
  .use(BabelReactConfig)
  .use(TypeScriptReactConfig)
  .use(DevelopmentConfig)
  .newFactory();

```
### Lerna project where enabled project references


**webpack.config.ts**
```typescript
import {WebpackSetup} from '@webpack-config-suite/core';
import {DevelopmentConfig} from '@webpack-config-suite/development';
import {CssConfig, LessConfig} from '@webpack-config-suite/styles';
import {LernaTypeScriptReactConfig} from '@webpack-config-suite/lerna';

import {MyLernaApplicationEntry} from './config/MyLernaApplicationEntry';

export default WebpackSetup.newSetup()
  .use(MyLernaApplicationEntry)
  .use(CssConfig)
  .use(LessConfig)
  .use(LernaTypeScriptReactConfig)
  .use(DevelopmentConfig)
  .newFactory();
```

### Run Typescript project example

```shell script
git clone https://github.com/ria-develop/webpack-config-suite.git && cd webpack-config-suite && yarn && yarn example:typescript
```

### Run Lerna + Typescript project example

```shell script
git clone https://github.com/ria-develop/webpack-config-suite.git && cd webpack-config-suite && yarn && yarn example:lerna
```

### Alternatives
If you don't fill comfortable with a pure object oriented Javascript/Typescript
you may find alternatives here
* https://github.com/namics/webpack-config-plugins.git
* https://github.com/symfony/webpack-encore
