# `@webpack-config-suite/typescript`

The utility to create flexible and shareable webpack configurations for complex projects

## Usage

example TypeScript 

**webpack.config.ts**
```typescript
import {WebpackSetup} from '@webpack-config-suite/core';
import {TypeScriptReactConfig} from '@webpack-config-suite/typescript';


export default WebpackSetup.newSetup()
  .use(TypeScriptReactConfig)
  .newFactory();

```
