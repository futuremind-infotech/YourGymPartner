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

export function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState('Popular');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Good Morning 👋</Text>
            <Text style={styles.date}>Sunday, Nov 23</Text>
          </View>
          <View style={styles.userAvatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
        </View>
      </View>

      {/* Premium Stats Card */}
      <View style={styles.statsCard}>
        {/* Top Section - Title */}
        <View style={styles.statsHeader}>
          <Text style={styles.statsTitle}>Today's Summary</Text>
          <View style={styles.statsDateBadge}>
            <Text style={styles.statsDateBadgeText}>Nov 23</Text>
          </View>
        </View>

        {/* Main Stats Content */}
        <View style={styles.statsContent}>
          <View style={styles.statItem}>
            <View style={styles.statIconBox}>
              <Text style={styles.statIconEmoji}>👟</Text>
            </View>
            <Text style={styles.statLabel}>Steps</Text>
            <Text style={styles.statValue}>568</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '56%' }]} />
            </View>
            <Text style={styles.progressText}>of 1000</Text>
          </View>

          <View style={styles.statItem}>
            <View style={styles.statIconBox}>
              <Text style={styles.statIconEmoji}>⏱️</Text>
            </View>
            <Text style={styles.statLabel}>Time</Text>
            <Text style={styles.statValue}>45</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '75%' }]} />
            </View>
            <Text style={styles.progressText}>of 60 min</Text>
          </View>

          <View style={styles.statItem}>
            <View style={styles.statIconBox}>
              <Text style={styles.statIconEmoji}>🔥</Text>
            </View>
            <Text style={styles.statLabel}>Calories</Text>
            <Text style={styles.statValue}>380</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '64%' }]} />
            </View>
            <Text style={styles.progressText}>of 600 cal</Text>
          </View>
        </View>

        {/* Bottom Section - Action */}
        <TouchableOpacity style={styles.detailsBtn}>
          <Text style={styles.detailsIcon}>📊</Text>
          <Text style={styles.detailsText}>View Detailed Report</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs Section */}
      <View style={styles.tabsSection}>
        <Text style={styles.sectionTitle}>Workout Plans</Text>
        <View style={styles.tabsContainer}>
          {['Popular', 'Trending', 'Custom'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setSelectedTab(tab)}
              style={[styles.tab, selectedTab === tab && styles.tabActive]}
            >
              <Text style={[styles.tabText, selectedTab === tab && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Workout Cards Grid */}
      <View style={styles.workoutGrid}>
        <View
          style={[styles.workoutCard, { backgroundColor: '#FFB84D' }]}
        >
          <View style={styles.workoutIcon}>🔥</View>
          <Text style={styles.workoutTitle}>Weight Loss</Text>
          <Text style={styles.workoutDescription}>Full Body</Text>
          <Text style={styles.workoutTime}>10-15 min</Text>
          <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.startBtnText}>Start</Text>
          </TouchableOpacity>
        </View>

        <View
          style={[styles.workoutCard, { backgroundColor: '#FF9ECE' }]}
        >
          <View style={styles.workoutIcon}>💪</View>
          <Text style={styles.workoutTitle}>Build Muscle</Text>
          <Text style={styles.workoutDescription}>Strength</Text>
          <Text style={styles.workoutTime}>15-20 min</Text>
          <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.startBtnText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.workoutGrid}>
        <View
          style={[styles.workoutCard, { backgroundColor: '#20B2A9' }]}
        >
          <View style={styles.workoutIcon}>⚡</View>
          <Text style={styles.workoutTitle}>HIIT Training</Text>
          <Text style={styles.workoutDescription}>Cardio</Text>
          <Text style={styles.workoutTime}>20-25 min</Text>
          <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.startBtnText}>Start</Text>
          </TouchableOpacity>
        </View>

        <View
          style={[styles.workoutCard, { backgroundColor: '#C084FC' }]}
        >
          <View style={styles.workoutIcon}>🧘</View>
          <Text style={styles.workoutTitle}>Flexibility</Text>
          <Text style={styles.workoutDescription}>Stretching</Text>
          <Text style={styles.workoutTime}>10-12 min</Text>
          <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.startBtnText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Activity */}
      <Text style={[styles.sectionTitle, { marginTop: 28 }]}>
        Recent Activity
      </Text>

      <View style={styles.activityCards}>
        <View style={styles.activityCard}>
          <View style={styles.activityLeft}>
            <View style={[styles.activityBadge, { backgroundColor: '#FF6B6B20' }]}>
              <Text style={styles.activityIcon}>🏃</Text>
            </View>
            <View>
              <Text style={styles.activityName}>Morning Run</Text>
              <Text style={styles.activityTime}>10:30 AM • 5.2 km</Text>
            </View>
          </View>
          <Text style={styles.activityCalories}>245 kcal</Text>
        </View>

        <View style={styles.activityCard}>
          <View style={styles.activityLeft}>
            <View style={[styles.activityBadge, { backgroundColor: '#667EEA20' }]}>
              <Text style={styles.activityIcon}>🏋️</Text>
            </View>
            <View>
              <Text style={styles.activityName}>Strength Training</Text>
              <Text style={styles.activityTime}>2:15 PM • 35 min</Text>
            </View>
          </View>
          <Text style={styles.activityCalories}>320 kcal</Text>
        </View>
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
    paddingBottom: 16,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  greeting: {
    color: '#1F2937',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 4,
  },

  date: {
    color: '#9CA3AF',
    fontSize: 14,
    fontWeight: '500',
  },

  userAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FFE5F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FF6B9D',
  },

  avatarText: {
    fontSize: 24,
  },

  statsCard: {
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 24,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 4,
    borderLeftColor: '#FF9500',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },

  statsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  statsTitle: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: '800',
  },

  statsDateBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#FFE5CC',
    borderRadius: 8,
  },

  statsDateBadgeText: {
    color: '#FF9500',
    fontSize: 11,
    fontWeight: '700',
  },

  statsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 18,
  },

  statItem: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
  },

  statLabel: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  statIconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFE5CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  statIconEmoji: {
    fontSize: 24,
  },

  statValue: {
    color: '#FF9500',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },

  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    marginBottom: 6,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#FF9500',
    borderRadius: 2,
  },

  progressText: {
    color: '#9CA3AF',
    fontSize: 10,
    fontWeight: '600',
  },

  detailsBtn: {
    backgroundColor: '#FFE5CC',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1.5,
    borderColor: '#FF9500',
  },

  detailsIcon: {
    fontSize: 16,
  },

  detailsText: {
    color: '#FF9500',
    fontWeight: '800',
    fontSize: 13,
  },

  tabsSection: {
    paddingHorizontal: 20,
    marginTop: 8,
    marginBottom: 20,
  },

  sectionTitle: {
    color: '#1F2937',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 14,
  },

  tabsContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },

  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    marginRight: 10,
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#3F3F47',
  },

  tabActive: {
    backgroundColor: '#FFE5F0',
    borderColor: '#FF6B9D',
  },

  tabText: {
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '600',
  },

  tabTextActive: {
    color: '#FFFFFF',
  },

  workoutGrid: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 16,
    marginBottom: 16,
  },

  workoutCard: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },

  workoutIcon: {
    fontSize: 32,
    marginBottom: 12,
  },

  workoutTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },

  workoutDescription: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 12,
  },

  workoutTime: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 11,
    fontWeight: '500',
    marginBottom: 16,
  },

  startBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },

  startBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },

  activityCards: {
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 40,
  },

  activityCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  activityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  activityBadge: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  activityIcon: {
    fontSize: 24,
  },

  activityName: {
    color: '#1F2937',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },

  activityTime: {
    color: '#9CA3AF',
    fontSize: 12,
    fontWeight: '500',
  },

  activityCalories: {
    color: '#FF9500',
    fontSize: 14,
    fontWeight: '800',
  },
});
