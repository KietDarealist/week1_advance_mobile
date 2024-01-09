// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import HomeScreen from './screens/HomeScreen';
import PersonalInformation from './screens/PersonalInformation';
import {PaperProvider} from 'react-native-paper';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="PersonalInformation"
            options={{headerTitle: 'Personal Information'}}
            component={PersonalInformation}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerBackTitle: 'Back'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
