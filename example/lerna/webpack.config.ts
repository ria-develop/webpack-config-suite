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
