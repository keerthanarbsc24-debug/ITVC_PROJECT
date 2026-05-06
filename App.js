import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DaysScreen from './src/DaysScreen';
import HomeScreen from './src/HomeScreen';
import AboutScreen from './src/AboutScreen';
import TaskDetailsScreen from './src/TaskDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Days" component={DaysScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
