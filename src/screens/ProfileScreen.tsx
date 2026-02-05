import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export function ProfileScreen() {
  const [editMode, setEditMode] = useState(false);

  const userStats = [
    { label: 'Workouts', value: '28', icon: '💪', color: '#FF6B9D' },
    { label: 'Exercises', value: '120', icon: '🏋️', color: '#00D4FF' },
    { label: 'Calories', value: '8.4K', icon: '🔥', color: '#8B5CF6' },
  ];

  const achievements = [
    { id: 1, name: 'First Step', description: 'Completed your first workout', icon: '🎯' },
    { id: 2, name: 'Week Warrior', description: '7 consecutive days', icon: '⭐' },
    { id: 3, name: 'Century', description: '100 exercises completed', icon: '💯' },
    { id: 4, name: 'Calorie King', description: '5000 calories burned', icon: '👑' },
  ];

  const settings = [
    { id: 1, title: 'Notifications', icon: '🔔' },
    { id: 2, title: 'Privacy Settings', icon: '🔒' },
    { id: 3, title: 'Help & Support', icon: '💬' },
    { id: 4, title: 'About App', icon: 'ℹ️' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      {/* Profile Header Card */}
      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <TouchableOpacity
            style={styles.editAvatarBtn}
            onPress={() => setEditMode(!editMode)}
          >
            <Text style={styles.editAvatarIcon}>✏️</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.userName}>Anamika</Text>
        <Text style={styles.userEmail}>anamika@gmail.com</Text>

        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Gold Member</Text>
          </View>
        </View>

        {/* Body Metrics */}
        <View style={styles.bodyMetrics}>
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Weight</Text>
            <Text style={styles.metricValue}>65</Text>
            <Text style={styles.metricUnit}>kg</Text>
          </View>
          <View style={styles.metricDivider} />
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Height</Text>
            <Text style={styles.metricValue}>170</Text>
            <Text style={styles.metricUnit}>cm</Text>
          </View>
          <View style={styles.metricDivider} />
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>BMI</Text>
            <Text style={styles.metricValue}>22.5</Text>
            <Text style={styles.metricUnit}>Normal</Text>
          </View>
        </View>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Your Progress</Text>
        <View style={styles.statsRow}>
          {userStats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View
                style={[
                  styles.statIconBox,
                  { backgroundColor: stat.color + '20' },
                ]}
              >
                <Text style={styles.statIcon}>{stat.icon}</Text>
              </View>
              <Text style={styles.statCardValue}>{stat.value}</Text>
              <Text style={styles.statCardLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementGrid}>
          {achievements.map((achievement) => (
            <View key={achievement.id} style={styles.achievementCard}>
              <View style={styles.achievementIcon}>
                <Text style={styles.achievementEmoji}>{achievement.icon}</Text>
              </View>
              <Text style={styles.achievementName}>{achievement.name}</Text>
              <Text style={styles.achievementDesc}>
                {achievement.description}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        {settings.map((setting) => (
          <TouchableOpacity key={setting.id} style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>{setting.icon}</Text>
              <Text style={styles.settingTitle}>{setting.title}</Text>
            </View>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => setEditMode(!editMode)}
        >
          <Text style={styles.primaryBtnText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dangerBtn}>
          <Text style={styles.dangerBtnText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>App Version 1.0.0</Text>
        <Text style={styles.footerCredit}>Made with 💖 for your fitness</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },

  profileCard: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },

  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFE5F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FF6B9D',
  },

  avatarText: {
    fontSize: 48,
  },

  editAvatarBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FF9500',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF9500',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  editAvatarIcon: {
    fontSize: 18,
  },

  userName: {
    color: '#1F2937',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 6,
  },

  userEmail: {
    color: '#9CA3AF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },

  badgeContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },

  badge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: '#FFE5F0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF6B9D',
  },

  badgeText: {
    color: '#FF6B9D',
    fontSize: 12,
    fontWeight: '700',
  },

  bodyMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    width: '100%',
  },

  metricItem: {
    flex: 1,
    alignItems: 'center',
  },

  metricLabel: {
    color: '#9CA3AF',
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  metricValue: {
    color: '#FF9500',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 2,
  },

  metricUnit: {
    color: '#6B7280',
    fontSize: 10,
    fontWeight: '600',
  },

  metricDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#F0F0F0',
  },

  statsSection: {
    marginHorizontal: 20,
    marginBottom: 28,
  },

  sectionTitle: {
    color: '#1F2937',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 14,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  statIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  statIcon: {
    fontSize: 22,
  },

  statCardValue: {
    color: '#FF9500',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },

  statCardLabel: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },

  section: {
    marginHorizontal: 20,
    marginBottom: 24,
  },

  achievementGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },

  achievementCard: {
    width: '48.5%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    minHeight: 160,
    justifyContent: 'center',
  },

  achievementIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#FFE5F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  achievementEmoji: {
    fontSize: 28,
  },

  achievementName: {
    color: '#1F2937',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 6,
    textAlign: 'center',
    lineHeight: 18,
  },

  achievementDesc: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 15,
  },

  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },

  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  settingIcon: {
    fontSize: 20,
    marginRight: 12,
  },

  settingTitle: {
    color: '#1F2937',
    fontSize: 14,
    fontWeight: '700',
  },

  settingArrow: {
    color: '#FF9500',
    fontSize: 20,
    fontWeight: '800',
  },

  buttonSection: {
    marginHorizontal: 20,
    marginBottom: 24,
    marginTop: 8,
  },

  primaryBtn: {
    backgroundColor: '#FFE5F0',
    borderWidth: 2,
    borderColor: '#FF6B9D',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#FF6B9D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },

  primaryBtnText: {
    color: '#FF6B9D',
    fontWeight: '800',
    fontSize: 15,
  },

  dangerBtn: {
    backgroundColor: '#FFF5E6',
    borderWidth: 2,
    borderColor: '#FF9500',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  dangerBtnText: {
    color: '#FF9500',
    fontWeight: '800',
    fontSize: 15,
  },

  footer: {
    alignItems: 'center',
    paddingVertical: 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },

  footerText: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
  },

  footerCredit: {
    color: '#9CA3AF',
    fontSize: 13,
    fontWeight: '700',
  },
});
