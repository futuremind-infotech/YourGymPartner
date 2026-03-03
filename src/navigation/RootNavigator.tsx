import React, { useEffect, useRef, useContext, useState } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, ActivityIndicator } from 'react-native';

import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { authService, User } from '../services/authService';
import { AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const navigationRef = useRef<NavigationContainerRef>(null);
  const [initialized, setInitialized] = useState(false);
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const init = async () => {
      await authService.initializeUsers();
      const currentUser = await authService.getCurrentUser();
      if (currentUser) {
        // start in main app
        navigationRef.current?.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
      }
      setInitialized(true);
    };

    init();
  }, []);

  const handleAuthSuccess = (user: User) => {
    setUser(user);
    navigationRef.current?.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  const handleLogout = async () => {
    await authService.logout();
    setUser(null);
    navigationRef.current?.reset({
      index: 0,
      routes: [{ name: 'Auth' }],
    });
  };

  if (!initialized) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#3B5BDB" />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group key="auth" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth">
            {() => (
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login">
                  {(props) => (
                    <LoginScreen {...props} onAuthSuccess={handleAuthSuccess} />
                  )}
                </Stack.Screen>
                <Stack.Screen name="Sign Up">
                  {(props) => (
                    <SignUpScreen {...props} onAuthSuccess={handleAuthSuccess} />
                  )}
                </Stack.Screen>
              </Stack.Navigator>
            )}
          </Stack.Screen>
        </Stack.Group>
        <Stack.Group key="main">
          <Stack.Screen name="Main">
            {() => <DrawerNavigator onLogout={handleLogout} />}
          </Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
