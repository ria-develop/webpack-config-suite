# `@webpack-config-suite/babel`

The utility to create flexible and shareable webpack configurations for complex projects

## Usage

example TypeScript 

**webpack.config.ts**
```typescript
import {WebpackSetup} from '@webpack-config-suite/core';
import {BabelReactConfig} from '@webpack-config-suite/babel';

export default WebpackSetup.newSetup()
  .use(BabelReactConfig)
  .newFactory();

```
