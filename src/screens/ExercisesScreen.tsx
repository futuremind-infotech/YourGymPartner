import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export function ExercisesScreen() {
  const exercises = [
    { id: 1, name: 'Bench Press', category: 'Chest', reps: '8-10' },
    { id: 2, name: 'Squats', category: 'Legs', reps: '10-12' },
    { id: 3, name: 'Deadlifts', category: 'Back', reps: '5-8' },
    { id: 4, name: 'Overhead Press', category: 'Shoulders', reps: '8-10' },
    { id: 5, name: 'Barbell Rows', category: 'Back', reps: '6-8' },
    { id: 6, name: 'Lat Pulldowns', category: 'Back', reps: '10-12' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Exercises</Text>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Exercise</Text>
      </TouchableOpacity>

      <View style={styles.exercisesList}>
        {exercises.map(exercise => (
          <View key={exercise.id} style={styles.exerciseCard}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{exercise.category}</Text>
            </View>
            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.reps}>Reps: {exercise.reps}</Text>
            </View>
          </View>
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
  exercisesList: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  exerciseCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  categoryBadge: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  exerciseInfo: {
    marginLeft: 0,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  reps: {
    fontSize: 13,
    color: '#999',
    marginTop: 5,
  },
});
