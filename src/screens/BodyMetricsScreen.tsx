import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

export default function BodyMetricsScreen() {
  const { width } = useWindowDimensions();
  const isSmallDevice = width < 360;

  const metrics = [
    { label: 'Weight', value: '78.50', unit: 'kg' },
    { label: 'Bone Mass', value: '3', unit: 'kg' },
    { label: 'Body Age', value: '27', unit: '' },
    { label: 'Protein', value: '17.60', unit: '' },
    { label: 'Fat Free Weight', value: '60.60', unit: 'kg' },
    { label: 'Skeletal Muscle', value: '44', unit: '%' },
    { label: 'Muscle Mass', value: '57.60', unit: 'kg' },
    { label: 'Subcutaneous Fat', value: '20.40', unit: '%' },
    { label: 'BMI', value: '24.20', unit: '' },
    { label: 'Visceral Fat', value: '7', unit: '%' },
    { label: 'BMR', value: '1679.80', unit: '' },
    { label: 'Body Water', value: '55.80', unit: '%' },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.grid}>
        {metrics.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.label}>{item.label}</Text>

            <Text
              style={[
                styles.value,
                { fontSize: isSmallDevice ? 22 : 26 },
              ]}
            >
              {item.value}
              {item.unit && (
                <Text style={styles.unit}> {item.unit}</Text>
              )}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f1f2',
  },

  content: {
    padding: 10,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginBottom: 12,
    alignItems: 'center',

    // Android
    elevation: 2,

    // iOS
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  label: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },

  value: {
    fontWeight: '700',
    color: '#000',
  },

  unit: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});
