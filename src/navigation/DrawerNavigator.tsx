import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import StatsScreen from '../screens/StatsScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import BodyMetricsScreen from '../screens/BodyMetricsScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import RewardsHistoryScreen from '../screens/RewardsHistoryScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerPosition: 'right',
        headerTitle: 'OKFIT',
        headerLeft: () => null,

        headerRight: () => (
          <TouchableOpacity
            style={styles.menuBtn}
            onPress={() => navigation.openDrawer()} // mobile-safe
          >
            <Ionicons name="menu" size={26} color="#000" />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Stats" component={StatsScreen} />
      <Drawer.Screen name="Attendance" component={AttendanceScreen} />
      <Drawer.Screen name="Body Metrics" component={BodyMetricsScreen} />
      <Drawer.Screen name="Challenges" component={ChallengesScreen} />
      <Drawer.Screen name="Feedback" component={FeedbackScreen} />
      <Drawer.Screen name="Rewards" component={RewardsHistoryScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menuBtn: {
    padding: 12,
    marginRight: 6,
  },
});
