/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Navigation from './src/navigation/navigation';
import {Provider} from 'react-redux';
import store from './src/store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;

//tengo que aplicar una validacion para el search
//tambien tengo que resolver como  verificar la conexion de red
