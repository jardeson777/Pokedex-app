import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import Logo from '@/assets/logo.svg';

const Login: React.FC = () => {
  return (
    <ImageBackground source={require('@/assets/background.png')} style={{ width: '100%', height: '100%' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 52 }}>
        <Logo />
      </View>
    </ImageBackground>
  );
};

export default Login;
