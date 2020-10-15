import React from 'react';
import Routes from './src/routes';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

export default function App() {
  return (
    <Routes />
  );
}


