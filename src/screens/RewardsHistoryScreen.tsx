import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RewardsHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🎁 Rewards History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 22 },
});
