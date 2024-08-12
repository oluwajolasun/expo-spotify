import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SideBar from './SideBar';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Album from '../screens/Album';
import WebMusicPlayer from './WebMusicPlayer';

const Stack = createNativeStackNavigator();

export default function WebHome() {
  return (
    <NavigationContainer>
      <View style={styles.mainContainer}>
        <View style={styles.mainContent}>
          <View style={styles.sidebarContainer}>
            <SideBar />
          </View>
          <View style={styles.homeContainer}>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="Album"
                component={Album}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="Search"
                component={Search}
                options={{
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          </View>
        </View>
        <View style={styles.playerContainer}>
          <WebMusicPlayer />
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    flex: 1
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row'
  },
  sidebarContainer: {
    flex: 1
  },

  homeContainer: {
    borderRadius: 8,
    flex: 4,
    margin: 8,
    marginLeft: 0,
    overflow: 'hidden' // Ensure child components respect the border radius
  },

  playerContainer: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: '13%'
  }
});
