import React from 'react';
import { Text, View } from 'react-native';

function LoadingScreen() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Loading</Text>
    </View>
  );
}

export default LoadingScreen;
