import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Routes from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
