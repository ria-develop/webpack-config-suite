# `@webpack-config-suite/lerna`

The utility to create flexible and shareable webpack configurations for complex projects

## Usage

example TypeScript 

**webpack.config.ts**
```typescript
import {WebpackSetup} from '@webpack-config-suite/core';
import {LernaTypeScriptReactConfig} from '@webpack-config-suite/lerna';


export default WebpackSetup.newSetup()
  .use(LernaTypeScriptReactConfig)
  .newFactory();

```
