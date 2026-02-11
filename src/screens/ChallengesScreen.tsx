import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export default function ChallengesScreen() {
  const progress = 2;
  const total = 7;

  const radius = 85;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius;
  const progressStroke = (progress / total) * circumference;

  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      <Text style={styles.weekText}>7 days in a week</Text>

      {/* Progress Card */}
      <View style={styles.card}>
        <View style={styles.circleContainer}>
          <Svg width={200} height={200}>
            <Circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#EAEAEA"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <Circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#FF0000"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={`${progressStroke} ${circumference}`}
              rotation="-90"
              origin="100,100"
            />
          </Svg>

          <Text style={styles.centerText}>
            {progress} / {total}
          </Text>
        </View>

        <Text style={styles.endedText}>Challenge ended 4 years ago</Text>
      </View>

      {/* Top Scores */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Top scores</Text>

        <ProgressBar
          color="#7B61FF"
          label="People who have completed this challenge"
          value={0.65}
        />

        <ProgressBar
          color="#1DB954"
          label="People with 5 or less days remaining"
          value={0.45}
        />

        <ProgressBar
          color="#FF0000"
          label="People with 10 or more days remaining"
          value={0.8}
        />
      </View>
    </ScrollView>
  );
}

/* ---------- Progress Bar ---------- */

function ProgressBar({
  value,
  color,
  label,
}: {
  value: number;
  color: string;
  label: string;
}) {
  return (
    <View style={{ marginBottom: 18 }}>
      <View style={styles.progressBg}>
        <View
          style={[
            styles.progressFill,
            { width: `${value * 100}%`, backgroundColor: color },
          ]}
        />
      </View>
      <Text style={styles.progressLabel}>{label}</Text>
    </View>
  );
}

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
    padding: 16,
  },
  weekText: {
    fontSize: 16,
    marginBottom: 12,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    position: 'absolute',
    fontSize: 28,
    fontWeight: '700',
    color: '#FF0000',
  },
  endedText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
  },
  progressBg: {
    height: 12,
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 10,
  },
  progressLabel: {
    marginTop: 6,
    fontSize: 13,
    color: '#333',
  },
});
