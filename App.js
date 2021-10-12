import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Goal from './screens/Goal';
import GoalDetails from './screens/GoalDetails';
import LoginScreen from './screens/Loginscreen';
import Profile from './screens/Profile';
import Progess from './screens/Progress';
import Rewards from './screens/Rewards';
import Steps from './screens/Steps';

const Stack=createStackNavigator();

function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="GoalDetails" ScreenOptions={{
            headerShown:false

        }}>
           <Stack.Screen name="GoalDetails" component={GoalDetails} />
           <Stack.Screen name="Goal" component={Goal} />
        </Stack.Navigator>
    </NavigationContainer>
  );
} 
  export default App;