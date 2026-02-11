import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import BodyMetricsScreen from '../screens/BodyMetricsScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import RewardsHistoryScreen from '../screens/RewardsHistoryScreen';
import StatsScreen from '../screens/StatsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerPosition: 'right',
        headerTitle: '',

        headerLeft: () => (
          <SafeAreaView>
            <Text style={styles.logo}>OKFIT</Text>
          </SafeAreaView>
        ),

        headerRight: () => (
          <SafeAreaView>
            <TouchableOpacity
              onPress={() => {
                console.log('TOGGLE CLICKED'); // 🔍 test
                navigation.toggleDrawer();
              }}
              style={styles.menuBtn}
            >
              <Ionicons name="menu" size={26} color="#000" />
            </TouchableOpacity>
          </SafeAreaView>
        ),

        swipeEnabled: true,
        gestureEnabled: true,
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Your Stats" component={StatsScreen} />
      <Drawer.Screen name="Body Metrics" component={BodyMetricsScreen} />
      <Drawer.Screen name="Attendance" component={AttendanceScreen} />
      <Drawer.Screen name="My Challenges" component={ChallengesScreen} />
      <Drawer.Screen name="Your Feedback" component={FeedbackScreen} />
      <Drawer.Screen name="Rewards History" component={RewardsHistoryScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 8,
  },
  menuBtn: {
    padding: 12, // ✅ large touch area
    marginRight: 4,
  },
});
