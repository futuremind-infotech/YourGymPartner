import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const rewardsData = [
  { id: '1', title: 'Membership Renewal', date: '17 Jan, 2024', points: 100 },
  { id: '2', title: 'Membership Renewal', date: '01 Jan, 2024', points: 100 },
  { id: '3', title: 'Member Check-in', date: '26 Dec, 2023', points: 10 },
  { id: '4', title: 'Member Check-in', date: '02 Dec, 2023', points: 10 },
  { id: '5', title: 'Member Check-in', date: '02 Dec, 2023', points: 10 },
  {
    id: '6',
    title: 'Membership Renewal With Part Payment',
    date: '22 Nov, 2023',
    points: 30,
  },
  { id: '7', title: 'Membership Renewal', date: '22 Nov, 2023', points: 100 },
  {
    id: '8',
    title: 'Membership Renewal With Full Payment',
    date: '22 Nov, 2023',
    points: 50,
  },
  { id: '9', title: 'Membership Renewal', date: '22 Nov, 2023', points: 100 },
  { id: '10', title: 'Member Check-in', date: '21 Nov, 2023', points: 10 },
];

export default function RewardsHistoryScreen({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Ionicons name="add" size={26} color="#2e7d32" style={styles.icon} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      <Text style={styles.points}>+{item.points}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reward Points History</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* List */}
      <FlatList
        data={rewardsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },

  /* List Item */
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  date: {
    marginTop: 4,
    fontSize: 13,
    color: '#888',
  },
  points: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2e7d32',
  },

  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 56,
  },
});
