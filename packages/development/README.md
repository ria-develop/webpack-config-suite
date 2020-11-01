# `@webpack-config-suite/development`

The utility to create flexible and shareable webpack configurations for complex projects

## Usage

example TypeScript 

**webpack.config.ts**
```typescript
import {WebpackSetup} from '@webpack-config-suite/core';
import {DevelopmentConfig} from '@webpack-config-suite/development';

export default WebpackSetup.newSetup()
  .use(DevelopmentConfig)
  .newFactory();

```
