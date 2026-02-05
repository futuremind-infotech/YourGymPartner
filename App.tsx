import 'react-native-gesture-handler'; // ✅ MUST BE FIRST

import React from 'react';
import { Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// ✅ correct paths
import { HomeScreen } from './src/screens/HomeScreen';
import { WorkoutsScreen } from './src/screens/WorkoutsScreen';
import { ExercisesScreen } from './src/screens/ExercisesScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      <NavigationContainer>
        <Tab.Navigator
          id="main-tabs"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#FF9500',
            tabBarInactiveTintColor: '#D1D5DB',
            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              borderTopColor: '#E5E7EB',
              borderTopWidth: 1,
              paddingTop: 12,
              height: 70,
              paddingBottom: 12,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.06,
              shadowRadius: 4,
              elevation: 2,
            },
            tabBarLabelStyle: {
              fontSize: 11,
              fontWeight: '700',
              marginTop: 4,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: 24, color }}>🏠</Text>
              ),
            }}
          />

          <Tab.Screen
            name="Workouts"
            component={WorkoutsScreen}
            options={{
              tabBarLabel: 'Workouts',
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: 24, color }}>💪</Text>
              ),
            }}
          />

          <Tab.Screen
            name="Exercises"
            component={ExercisesScreen}
            options={{
              tabBarLabel: 'Exercises',
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: 24, color }}>🏋️</Text>
              ),
            }}
          />

          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: 24, color }}>👤</Text>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
