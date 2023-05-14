import CounterComponent from 'app/components/atoms/CounterComponent';
import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <CounterComponent />
    </View>
  );
};

export default DetailsScreen;
