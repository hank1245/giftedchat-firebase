import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

function ErrorScreen() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f1f3',
        position: 'relative',
      }}
    >
      <Image
        source={require('../../assets/error.png')}
        style={{ width: '100%', height: 500 }}
      />
      <View style={{ position: 'absolute', top: 100, left: 50 }}>
        <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: 10 }}>
          정보를 불러올 수 없습니다.
        </Text>
        <Text style={{ fontWeight: '700', fontSize: 17 }}>
          나중에 다시 시도해주세요.
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 200,
          justifyContent: 'center',
        }}
      ></View>
    </View>
  );
}

export default ErrorScreen;
