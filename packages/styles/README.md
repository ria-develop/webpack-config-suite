# `@webpack-config-suite/styles`

The utility to create flexible and shareable webpack configurations for complex projects

## Usage

example TypeScript 

**webpack.config.ts**
```typescript
import {WebpackSetup} from '@webpack-config-suite/core';
import {CssConfig, LessConfig} from '@webpack-config-suite/styles';


export default WebpackSetup.newSetup()
  .use(CssConfig)
  .use(LessConfig)
  .newFactory();

```
