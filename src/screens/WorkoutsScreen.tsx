import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export function WorkoutsScreen() {
  const [activeWorkout, setActiveWorkout] = useState(null);

  const workouts = [
    {
      id: 1,
      name: 'Chest & Triceps',
      exercises: 6,
      duration: '60 min',
      icon: '💪',
      color: '#FF6B9D',
      difficulty: 'Intermediate',
      calories: '320 kcal',
    },
    {
      id: 2,
      name: 'Back & Biceps',
      exercises: 5,
      duration: '55 min',
      icon: '🔥',
      color: '#00D4FF',
      difficulty: 'Advanced',
      calories: '290 kcal',
    },
    {
      id: 3,
      name: 'Legs & Glutes',
      exercises: 7,
      duration: '70 min',
      icon: '⚡',
      color: '#00F2FE',
      difficulty: 'Hard',
      calories: '380 kcal',
    },
    {
      id: 4,
      name: 'Cardio Blast',
      exercises: 4,
      duration: '45 min',
      icon: '🏃',
      color: '#8B5CF6',
      difficulty: 'Intermediate',
      calories: '350 kcal',
    },
    {
      id: 5,
      name: 'Core & Abs',
      exercises: 5,
      duration: '40 min',
      icon: '🎯',
      color: '#EC4899',
      difficulty: 'Beginner',
      calories: '180 kcal',
    },
    {
      id: 6,
      name: 'Full Body',
      exercises: 8,
      duration: '75 min',
      icon: '🌟',
      color: '#06B6D4',
      difficulty: 'Advanced',
      calories: '420 kcal',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>My Workouts</Text>
        <Text style={styles.subtitle}>
          {workouts.length} programs available
        </Text>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{workouts.length}</Text>
          <Text style={styles.statLabel}>Programs</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>420</Text>
          <Text style={styles.statLabel}>Max Calories</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>75</Text>
          <Text style={styles.statLabel}>Max Min</Text>
        </View>
      </View>

      {/* Workout Cards */}
      <View style={styles.workoutsList}>
        {workouts.map((workout) => (
          <TouchableOpacity
            key={workout.id}
            onPress={() =>
              setActiveWorkout(
                activeWorkout === workout.id ? null : workout.id
              )
            }
            style={[
              styles.card,
              activeWorkout === workout.id && styles.cardActive,
            ]}
          >
            {/* Card Header */}
            <View style={styles.cardHeader}>
              <View style={[styles.iconBadge, { backgroundColor: workout.color + '20' }]}>
                <Text style={styles.icon}>{workout.icon}</Text>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.name}>{workout.name}</Text>
                <Text style={styles.difficulty}>{workout.difficulty}</Text>
              </View>
              <Text style={styles.caloriesLabel}>{workout.calories}</Text>
            </View>

            {/* Card Details */}
            <View style={styles.cardDetails}>
              <View style={styles.detailItem}>
                <Text style={styles.detailIcon}>🏋️</Text>
                <View>
                  <Text style={styles.detailLabel}>Exercises</Text>
                  <Text style={styles.detailValue}>{workout.exercises}</Text>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.detailItem}>
                <Text style={styles.detailIcon}>⏱️</Text>
                <View>
                  <Text style={styles.detailLabel}>Duration</Text>
                  <Text style={styles.detailValue}>{workout.duration}</Text>
                </View>
              </View>
            </View>

            {/* Start Button */}
            {activeWorkout === workout.id && (
              <TouchableOpacity
                style={[styles.startBtn, { borderColor: workout.color }]}
              >
                <Text style={[styles.startBtnText, { color: workout.color }]}>
                  Start Workout →
                </Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          💡 Tip: Choose a workout based on your energy level
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },

  greeting: {
    color: '#1F2937',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 6,
  },

  subtitle: {
    color: '#9CA3AF',
    fontSize: 14,
    fontWeight: '500',
  },

  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 24,
  },

  statBox: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderWidth: 0,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  statValue: {
    color: '#FF9500',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },

  statLabel: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '600',
  },

  workoutsList: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  cardActive: {
    borderColor: '#FF6B9D',
    backgroundColor: '#FFFFFF',
    shadowColor: '#FF6B9D',
    shadowOpacity: 0.15,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  iconBadge: {
    width: 56,
    height: 56,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  icon: {
    fontSize: 28,
  },

  cardInfo: {
    flex: 1,
  },

  name: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },

  difficulty: {
    color: '#FF9500',
    fontSize: 11,
    fontWeight: '700',
  },

  caloriesLabel: {
    color: '#FF6B9D',
    fontSize: 13,
    fontWeight: '800',
  },

  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
    marginBottom: 14,
  },

  detailItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  detailIcon: {
    fontSize: 18,
    marginRight: 8,
  },

  detailLabel: {
    color: '#9CA3AF',
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 2,
  },

  detailValue: {
    color: '#1F2937',
    fontSize: 14,
    fontWeight: '700',
  },

  divider: {
    width: 1,
    height: 30,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 12,
  },

  startBtn: {
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },

  startBtnText: {
    fontWeight: '800',
    fontSize: 14,
  },

  footer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
    backgroundColor: '#FFF5E6',
    borderRadius: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#FF9500',
    marginHorizontal: 20,
  },

  footerText: {
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '600',
  },
});
