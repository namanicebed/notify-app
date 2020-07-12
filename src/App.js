import 'react-native-gesture-handler';
import React, {useState, createContext, useEffect} from 'react';
import {AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './navigation/MainNavigator';
import AppStateContext from './AppStateContext';
import {Provider} from 'react-native-paper';

export default function App() {
  const [appState, setAppState] = useState(AppState.currentState);
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  // useEffect(() => {
  //   console.log(appState);
  // });

  const handleAppStateChange = (state) => {
    setAppState(state);
    // navigation.dispatch(StackActions.replace('Auth'));
  };

  return (
    <AppStateContext.Provider value={appState}>
      <Provider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </AppStateContext.Provider>
  );
}
