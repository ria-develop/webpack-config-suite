import * as React from 'react';
import {greeting} from '@webpack-config-suite/lerna-example-pkg1';
import {greeting as pkg2Greeting} from '@webpack-config-suite/lerna-example-pkg2';

const App = (): JSX.Element => (
  <div>
    <h1>{greeting()} from @webpack-config-suite/lerna-example-pkg1</h1>
    <h2>{pkg2Greeting()}</h2>
  </div>
);
export default App;
