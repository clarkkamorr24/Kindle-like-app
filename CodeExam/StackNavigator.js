import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import FirstBook from './screens/FirstBook';
import SecondBook from './screens/SecondBook';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name="BOOK READER"
        component={Home}
        options={{
          animationEnabled: 'none',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="FirstBook"
        component={FirstBook}
        options={{
          animationEnabled: 'none',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="SecondBook"
        component={SecondBook}
        options={{
          animationEnabled: 'none',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
