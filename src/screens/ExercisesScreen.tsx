import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export function ExercisesScreen() {
  const [selectedMuscle, setSelectedMuscle] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const exercises = [
    {
      id: 1,
      name: 'Push Ups',
      muscle: 'Chest',
      reps: '3 x 15',
      icon: '💪',
      difficulty: 'Intermediate',
      color: '#FF6B9D',
    },
    {
      id: 2,
      name: 'Pull Ups',
      muscle: 'Back',
      reps: '3 x 10',
      icon: '🔥',
      difficulty: 'Advanced',
      color: '#00D4FF',
    },
    {
      id: 3,
      name: 'Squats',
      muscle: 'Legs',
      reps: '4 x 12',
      icon: '⚡',
      difficulty: 'Hard',
      color: '#00F2FE',
    },
    {
      id: 4,
      name: 'Plank',
      muscle: 'Core',
      reps: '3 x 45 sec',
      icon: '🎯',
      difficulty: 'Intermediate',
      color: '#8B5CF6',
    },
    {
      id: 5,
      name: 'Bench Press',
      muscle: 'Chest',
      reps: '4 x 8',
      icon: '🏋️',
      difficulty: 'Advanced',
      color: '#FF6B9D',
    },
    {
      id: 6,
      name: 'Lat Pulldown',
      muscle: 'Back',
      reps: '3 x 12',
      icon: '🔥',
      difficulty: 'Intermediate',
      color: '#00D4FF',
    },
    {
      id: 7,
      name: 'Leg Press',
      muscle: 'Legs',
      reps: '3 x 10',
      icon: '⚡',
      difficulty: 'Hard',
      color: '#00F2FE',
    },
    {
      id: 8,
      name: 'Crunches',
      muscle: 'Core',
      reps: '3 x 20',
      icon: '🎯',
      difficulty: 'Beginner',
      color: '#8B5CF6',
    },
    {
      id: 9,
      name: 'Dips',
      muscle: 'Chest',
      reps: '3 x 12',
      icon: '💪',
      difficulty: 'Advanced',
      color: '#FF6B9D',
    },
    {
      id: 10,
      name: 'Rows',
      muscle: 'Back',
      reps: '4 x 8',
      icon: '🔥',
      difficulty: 'Advanced',
      color: '#00D4FF',
    },
  ];

  const muscles = ['All', 'Chest', 'Back', 'Legs', 'Core'];

  const filteredExercises = exercises.filter((exercise) => {
    const matchesMuscle =
      selectedMuscle === 'All' || exercise.muscle === selectedMuscle;
    const matchesSearch = exercise.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesMuscle && matchesSearch;
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Exercises</Text>
        <Text style={styles.subtitle}>Master your form and build strength</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search exercises..."
          placeholderTextColor="#7A85A1"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Muscle Group Filter */}
      <View style={styles.filterSection}>
        <Text style={styles.filterTitle}>Muscle Groups</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterScroll}
        >
          {muscles.map((muscle) => (
            <TouchableOpacity
              key={muscle}
              onPress={() => setSelectedMuscle(muscle)}
              style={[
                styles.filterBtn,
                selectedMuscle === muscle && styles.filterBtnActive,
              ]}
            >
              <Text
                style={[
                  styles.filterBtnText,
                  selectedMuscle === muscle && styles.filterBtnTextActive,
                ]}
              >
                {muscle}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Exercise Count */}
      <View style={styles.countSection}>
        <Text style={styles.countText}>
          {filteredExercises.length} exercise
          {filteredExercises.length !== 1 ? 's' : ''} found
        </Text>
      </View>

      {/* Exercises Grid */}
      <View style={styles.exerciseGrid}>
        {filteredExercises.map((exercise) => (
          <TouchableOpacity key={exercise.id} style={styles.exerciseCard}>
            {/* Top Bar with Color */}
            <View
              style={[
                styles.cardTop,
                { backgroundColor: exercise.color + '15' },
              ]}
            >
              <View
                style={[
                  styles.exerciseIcon,
                  { backgroundColor: exercise.color + '20' },
                ]}
              >
                <Text style={styles.icon}>{exercise.icon}</Text>
              </View>
              <View style={styles.difficulty}>
                <Text style={styles.difficultyText}>{exercise.difficulty}</Text>
              </View>
            </View>

            {/* Exercise Info */}
            <View style={styles.cardContent}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>

              <View style={styles.exerciseDetails}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>muscle</Text>
                  <Text style={styles.detailValue}>{exercise.muscle}</Text>
                </View>
                <View style={styles.detailSeparator} />
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>reps</Text>
                  <Text style={styles.detailValue}>{exercise.reps}</Text>
                </View>
              </View>

              {/* Action Button */}
              <TouchableOpacity
                style={[styles.actionBtn, { borderColor: exercise.color }]}
              >
                <Text style={[styles.actionBtnText, { color: exercise.color }]}>
                  View →
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Empty State */}
      {filteredExercises.length === 0 && (
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>🤔</Text>
          <Text style={styles.emptyText}>No exercises found</Text>
          <Text style={styles.emptySubtext}>Try adjusting your filters</Text>
        </View>
      )}

      {/* Footer Tip */}
      <View style={styles.tipBox}>
        <Text style={styles.tipIcon}>💡</Text>
        <Text style={styles.tipText}>
          Master as many exercises as you can for better workout variety
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

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 12,
    color: '#1F2937',
    fontSize: 14,
    fontWeight: '500',
  },

  filterSection: {
    marginBottom: 20,
  },

  filterTitle: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: '800',
    marginLeft: 20,
    marginBottom: 12,
  },

  filterScroll: {
    paddingHorizontal: 20,
  },

  filterBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
  },

  filterBtnActive: {
    backgroundColor: '#FFE5F0',
    borderColor: '#FF6B9D',
  },

  filterBtnText: {
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '700',
  },

  filterBtnTextActive: {
    color: '#FF6B9D',
  },

  countSection: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },

  countText: {
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '600',
  },

  exerciseGrid: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },

  exerciseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  exerciseIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 26,
  },

  difficulty: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#FFE5F0',
    borderRadius: 8,
  },

  difficultyText: {
    color: '#FF6B9D',
    fontSize: 11,
    fontWeight: '700',
  },

  cardContent: {
    paddingHorizontal: 16,
    paddingBottom: 14,
  },

  exerciseName: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 10,
  },

  exerciseDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
    marginBottom: 12,
  },

  detailItem: {
    flex: 1,
  },

  detailLabel: {
    color: '#9CA3AF',
    fontSize: 10,
    fontWeight: '700',
    marginBottom: 2,
    textTransform: 'uppercase',
  },

  detailValue: {
    color: '#1F2937',
    fontSize: 13,
    fontWeight: '700',
  },

  detailSeparator: {
    width: 1,
    height: 25,
    backgroundColor: '#F0F0F0',
  },

  actionBtn: {
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },

  actionBtnText: {
    fontWeight: '800',
    fontSize: 13,
  },

  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },

  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },

  emptyText: {
    color: '#1F2937',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },

  emptySubtext: {
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '600',
  },

  tipBox: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 40,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#FFF5E6',
    borderRadius: 14,
    borderLeftWidth: 3,
    borderLeftColor: '#FF9500',
  },

  tipIcon: {
    fontSize: 20,
    marginRight: 10,
  },

  tipText: {
    flex: 1,
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '600',
  },
});
