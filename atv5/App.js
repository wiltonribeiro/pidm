import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SafeAreaProvider} from "react-native-safe-area-context";

import Home from "./components/Home";
import AlbumDetails from "./components/AlbumDetails";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Albums" options={{headerTitleAlign: "center"}} component={Home} />
    </MainStack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator options={{ mode: "modal" }}>
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />

          <MainStack.Screen name="AlbumDetails" options={{headerTitleAlign: "center"}}  component={AlbumDetails} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}