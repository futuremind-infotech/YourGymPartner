import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Item = {
  title: string;
  subtitle: string;
  icon: string;
};

const feedbackItems: Item[] = [
  {
    title: 'Hygiene',
    subtitle: 'How clean is the studio?',
    icon: 'shield-checkmark',
  },
  {
    title: 'Trainers',
    subtitle: 'How good are the trainers?',
    icon: 'barbell',
  },
  {
    title: 'Equipment',
    subtitle: 'How good is the equipment?',
    icon: 'fitness',
  },
  {
    title: 'Value for money',
    subtitle: 'Is it worth the money?',
    icon: 'cash',
  },
];

export default function FeedbackScreen() {
  const [comments, setComments] = useState<{ [key: string]: string }>({});

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.header}>Your feedback</Text>

      {feedbackItems.map((item, index) => (
        <View key={index} style={styles.card}>
          {/* Header */}
          <View style={styles.row}>
            <Ionicons name={item.icon as any} size={28} color="#4DB7F5" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>

          {/* Stars */}
          <View style={styles.stars}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Ionicons key={i} name="star" size={22} color="#F6C343" />
            ))}
          </View>

          {/* Input */}
          <TextInput
            placeholder="Share your views"
            placeholderTextColor="#999"
            style={styles.input}
            value={comments[item.title]}
            onChangeText={(text) =>
              setComments({ ...comments, [item.title]: text })
            }
          />
        </View>
      ))}

      {/* Submit button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F7FB',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    color: '#666',
    fontSize: 13,
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#4DB7F5',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
