import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FeedbackScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>⭐ Your Feedback</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 22 },
});
