import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Greeting */}
        <View style={styles.greeting}>
          <Text style={styles.greetText}>Good morning</Text>
          <Text style={styles.name}>Anamika</Text>
        </View>

        {/* Membership Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>MEMBERSHIPS</Text>

          <View style={styles.membershipBox}>
            <Text style={styles.membershipTitle}>Yoga membership</Text>
            <Text style={styles.membershipSub}>2 month(s)</Text>

            <View style={styles.dateRow}>
              <Text>🟢 30 Jan, 2024</Text>
              <Text>🔴 30 Mar, 2024</Text>
            </View>

            <View style={styles.status}>
              <Text style={styles.statusText}>UPCOMING</Text>
            </View>
          </View>
        </View>

        {/* Mark Attendance */}
        <TouchableOpacity style={styles.attendanceBtn}>
          <Text style={styles.attendanceText}>📱  MARK ATTENDANCE</Text>
        </TouchableOpacity>

        {/* Grid Menu */}
        <View style={styles.card}>
          <View style={styles.grid}>
            {menuItems.map((item, index) => (
              <View key={index} style={styles.gridItem}>
                <Text style={styles.icon}>{item.icon}</Text>
                <Text style={styles.gridText}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Rewards */}
        <View style={styles.card}>
          <Text style={styles.rewardsTitle}>Rewards & Challenges</Text>

          <View style={styles.rewardsRow}>
            <View style={styles.rewardBox}>
              <Text style={styles.rewardIcon}>⭐</Text>
              <Text style={styles.rewardNumber}>2995</Text>
              <Text style={styles.rewardLabel}>Reward Points</Text>
            </View>

            <View style={styles.rewardBox}>
              <Text style={styles.rewardIcon}>🏆</Text>
              <Text style={styles.rewardNumber}>1</Text>
              <Text style={styles.rewardLabel}>Challenges</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------- DATA ---------- */

const menuItems = [
  { icon: '👕', label: 'Body Stats' },
  { icon: '📅', label: 'Classes' },
  { icon: '⏱️', label: 'Workout Time' },
  { icon: '📋', label: 'Logger' },
  { icon: '💳', label: 'Wallet' },
  { icon: '⭐', label: 'Feedback' },
  { icon: '📷', label: 'Photos' },
  { icon: '⏰', label: 'Book Slot' },
  { icon: '💰', label: 'Offers' },
];

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  greeting: {
    marginBottom: 12,
  },
  greetText: {
    color: '#888',
    fontSize: 14,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    textAlign: 'center',
    color: '#999',
    marginBottom: 10,
  },
  membershipBox: {
    alignItems: 'center',
  },
  membershipTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  membershipSub: {
    color: '#666',
    marginBottom: 10,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  status: {
    backgroundColor: '#3B5BDB',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    color: '#fff',
    fontWeight: '600',
  },
  attendanceBtn: {
    backgroundColor: '#4DB7F5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  attendanceText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 12,
  },
  icon: {
    fontSize: 34,
    marginBottom: 6,
  },
  gridText: {
    fontSize: 13,
    textAlign: 'center',
  },
  rewardsTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
  },
  rewardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rewardBox: {
    alignItems: 'center',
  },
  rewardIcon: {
    fontSize: 40,
    marginBottom: 6,
  },
  rewardNumber: {
    fontSize: 28,
    fontWeight: '800',
  },
  rewardLabel: {
    color: '#666',
  },
});
