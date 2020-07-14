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

  const handleAppStateChange = (state) => {
    setAppState(state);
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
