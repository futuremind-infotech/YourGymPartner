import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export function WorkoutsScreen() {
  const workouts = [
    { id: 1, name: 'Chest & Triceps', exercises: 6, duration: '60 min' },
    { id: 2, name: 'Back & Biceps', exercises: 5, duration: '55 min' },
    { id: 3, name: 'Legs & Glutes', exercises: 7, duration: '70 min' },
    { id: 4, name: 'Shoulders & Abs', exercises: 8, duration: '50 min' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Workouts</Text>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ New Workout</Text>
      </TouchableOpacity>

      <View style={styles.workoutsList}>
        {workouts.map(workout => (
          <TouchableOpacity key={workout.id} style={styles.workoutCard}>
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutName}>{workout.name}</Text>
              <Text style={styles.workoutDetails}>
                {workout.exercises} exercises • {workout.duration}
              </Text>
            </View>
            <View style={styles.arrow}>
              <Text style={styles.arrowText}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#0066cc',
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#00cc66',
    marginHorizontal: 15,
    marginVertical: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  workoutsList: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  workoutCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  workoutInfo: {
    flex: 1,
  },
  workoutName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  workoutDetails: {
    fontSize: 13,
    color: '#999',
    marginTop: 5,
  },
  arrow: {
    paddingLeft: 10,
  },
  arrowText: {
    fontSize: 24,
    color: '#ccc',
  },
});
