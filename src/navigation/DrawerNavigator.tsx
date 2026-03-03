import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
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

// custom drawer content component
function CustomDrawerContent(props: any) {
  const { navigation, state, descriptors, onLogout } = props;

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        icon={({ color, size }) => (
          <Ionicons name="log-out" size={size} color={color} />
        )}
        onPress={() => {
          navigation.closeDrawer();
          onLogout && onLogout();
        }}
      />
    </DrawerContentScrollView>
  );
}

type Props = {
  onLogout?: () => void;
};


export default function DrawerNavigator({ onLogout }: Props) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} onLogout={onLogout} />}
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