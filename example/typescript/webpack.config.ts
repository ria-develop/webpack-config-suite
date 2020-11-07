import {WebpackSetup} from '@webpack-config-suite/core';
import {DevelopmentConfig} from '@webpack-config-suite/development';
import {CssConfig, LessConfig} from '@webpack-config-suite/styles';
import {BabelReactConfig} from '@webpack-config-suite/babel';
import {TypeScriptReactConfig} from '@webpack-config-suite/typescript';

import {MyCustomApplicationEntry} from './config/MyCustomApplicationEntry';

export default WebpackSetup.newSetup()
  .use(MyCustomApplicationEntry)
  .use(CssConfig)
  .use(LessConfig)
  .use(BabelReactConfig)
  .use(TypeScriptReactConfig)
  .use(DevelopmentConfig)
  .newFactory();
