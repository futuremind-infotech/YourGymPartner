import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function StatsScreen() {
  const [activity] = useState('Moderate activity (4-5 Days/Week)');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* BMI CARD */}
      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialCommunityIcons name="weight-lifter" size={36} color="#2ecc71" />
          <View>
            <Text style={styles.cardTitle}>BMI</Text>
            <Text style={styles.subText}>as on 03 Oct, 2021</Text>
          </View>
        </View>

        <Text style={styles.greenValue}>24.20</Text>
        <Text style={styles.hint}>Ideal BMI range is 18.5 - 25</Text>
      </View>

      {/* BMR CARD */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Ionicons name="flame" size={36} color="#27ae60" />
          <View>
            <Text style={styles.cardTitle}>BMR</Text>
            <Text style={styles.subText}>as on 03 Oct, 2021</Text>
          </View>
        </View>

        <Text style={styles.blackValue}>1679.80</Text>
        <Text style={styles.hint}>BMR depends on your age and gender</Text>
      </View>

      {/* CALORIES CARD */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Ionicons name="calculator" size={34} color="#27ae60" />
          <View>
            <Text style={styles.cardTitle}>Recommended calorie intake</Text>
            <Text style={styles.subText}>Calculated from your BMR</Text>
          </View>
        </View>

        <Text style={styles.label}>Select activity level</Text>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>{activity}</Text>
          <Ionicons name="chevron-down" size={18} color="#555" />
        </View>

        <Text style={styles.blackValue}>2603.69</Text>
        <Text style={styles.unit}>cal/day</Text>

        <Text style={styles.source}>Source: checkyourhealth.org</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f1f2',
    padding: 14,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  subText: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },

  greenValue: {
    fontSize: 42,
    fontWeight: '700',
    color: '#2ecc71',
    textAlign: 'center',
    marginVertical: 14,
  },

  blackValue: {
    fontSize: 42,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 18,
  },

  hint: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
  },

  label: {
    marginTop: 16,
    fontSize: 13,
    color: '#555',
  },

  dropdown: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dropdownText: {
    fontSize: 14,
    color: '#000',
  },

  unit: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
    marginTop: -6,
  },

  source: {
    textAlign: 'center',
    fontSize: 11,
    color: '#888',
    marginTop: 12,
  },
});
