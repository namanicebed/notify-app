import 'react-native-gesture-handler';
import React, {useState, createContext, useEffect} from 'react';
import {AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './navigation/MainNavigator';

const AppStateContext = createContext('active');

export default function App() {
  const [appState, setAppState] = useState(AppState.currentState);
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  useEffect(() => {
    console.log(appState);
  });

  const handleAppStateChange = (state) => {
    setAppState(state);
  };

  return (
    <AppStateContext.Provider value={appState}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </AppStateContext.Provider>
  );
}
