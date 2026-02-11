import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
} from 'react-native';

export default function AttendanceScreen() {
  const [showAverage, setShowAverage] = useState(false);

  const chartData = [
    { day: 'Sun', value: 5 },
    { day: 'Mon', value: 10 },
    { day: 'Tue', value: 520 },
    { day: 'Wed', value: 150 },
    { day: 'Thu', value: 130 },
    { day: 'Fri', value: 220 },
    { day: 'Sat', value: 8 },
  ];

  const maxValue = 600;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Journey Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Your journey so far</Text>

        <View style={styles.statsRow}>
          <View>
            <Text style={styles.blueText}>2 days</Text>
            <Text style={styles.subText}>Longest workout streak</Text>
          </View>

          <View>
            <Text style={styles.greenText}>55 minutes</Text>
            <Text style={styles.subText}>Avg workout session</Text>
          </View>
        </View>
      </View>

      {/* Chart Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Minutes spent on fitness</Text>

        <View style={styles.chart}>
          {chartData.map((item, index) => (
            <View key={index} style={styles.barWrapper}>
              <View
                style={[
                  styles.bar,
                  {
                    height: (item.value / maxValue) * 180,
                  },
                ]}
              />
              <Text style={styles.day}>{item.day}</Text>
            </View>
          ))}
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.toggleText}>Show average</Text>
          <Switch
            value={showAverage}
            onValueChange={setShowAverage}
            trackColor={{ true: '#8adbb4' }}
          />
        </View>
      </View>

      {/* Total Time Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total time spent on fitness</Text>

        <Text style={styles.bigBlue}>1217 <Text style={styles.unit}>minutes</Text></Text>
        <Text style={styles.or}>or</Text>
        <Text style={styles.bigBlue}>20 <Text style={styles.unit}>hours</Text></Text>
        <Text style={styles.or}>or</Text>
        <Text style={styles.bigBlue}>0 <Text style={styles.unit}>days</Text></Text>
      </View>

      {/* EXTRA SECTION – Workout Summary */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Workout summary</Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Workout days</Text>
          <Text style={styles.summaryValue}>18</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Missed days</Text>
          <Text style={styles.summaryValue}>5</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Consistency</Text>
          <Text style={styles.summaryValue}>Good 💪</Text>
        </View>
      </View>

      {/* Motivation */}
      <View style={styles.motivation}>
        <Text style={styles.motivationText}>
          Keep going! You're building a strong habit 🚀
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f1f2',
    padding: 12,
  },

  section: {
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  blueText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1e88e5',
  },

  greenText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2e7d32',
  },

  subText: {
    fontSize: 13,
    color: '#666',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 14,
  },

  chart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 200,
    marginBottom: 12,
  },

  barWrapper: {
    alignItems: 'center',
    width: '12%',
  },

  bar: {
    width: 14,
    backgroundColor: '#6fcf97',
    borderRadius: 6,
  },

  day: {
    fontSize: 12,
    marginTop: 6,
    color: '#666',
  },

  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  toggleText: {
    fontSize: 14,
    color: '#555',
  },

  bigBlue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1e88e5',
    textAlign: 'center',
  },

  unit: {
    fontSize: 16,
    color: '#999',
  },

  or: {
    textAlign: 'center',
    color: '#999',
    marginVertical: 4,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  summaryLabel: {
    fontSize: 14,
    color: '#555',
  },

  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
  },

  motivation: {
    backgroundColor: '#e8f5e9',
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
  },

  motivationText: {
    textAlign: 'center',
    color: '#2e7d32',
    fontWeight: '600',
  },
});
