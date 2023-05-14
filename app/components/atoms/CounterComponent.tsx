import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/store/store';
import { increment, decrement } from "app/store/features/counter/counterSlice"
import { View, Text, Button } from 'react-native';

const CounterComponent = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Counter: {count}</Text>
      <Button title='Increment' onPress={() => dispatch(increment())} />
      <Button title='Decrement' onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default CounterComponent;
