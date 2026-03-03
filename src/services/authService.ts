import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = 'gym_app_users';
const CURRENT_USER_KEY = 'gym_app_current_user';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // In production, hash this!
}

export interface AuthResult {
  success: boolean;
  message: string;
  user?: User;
}

// Initialize with a demo user for testing
const DEMO_USER: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123',
};

export const authService = {
  /**
   * Initialize users database with demo user on first run
   */
  async initializeUsers() {
    try {
      const existing = await AsyncStorage.getItem(USERS_KEY);
      if (!existing) {
        const users = [DEMO_USER];
        await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
      }
    } catch (error) {
      console.error('Error initializing users:', error);
    }
  },

  /**
   * Register a new user
   */
  async signUp(name: string, email: string, password: string): Promise<AuthResult> {
    try {
      const usersJson = await AsyncStorage.getItem(USERS_KEY);
      const users: User[] = usersJson ? JSON.parse(usersJson) : [];

      // Check if user already exists
      if (users.some((u) => u.email === email)) {
        return { success: false, message: 'Email already registered' };
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        password, // In production, hash this!
      };

      users.push(newUser);
      await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));

      return { success: true, message: 'Account created successfully', user: newUser };
    } catch (error) {
      return { success: false, message: 'Sign up failed' };
    }
  },

  /**
   * Login user with email and password
   */
  async login(email: string, password: string): Promise<AuthResult> {
    try {
      const usersJson = await AsyncStorage.getItem(USERS_KEY);
      const users: User[] = usersJson ? JSON.parse(usersJson) : [];

      // Find user by email
      const user = users.find((u) => u.email === email);

      if (!user) {
        return { success: false, message: 'Account not found' };
      }

      // Check password
      if (user.password !== password) {
        return { success: false, message: 'Invalid password' };
      }

      // Save current user
      await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

      return { success: true, message: 'Login successful', user };
    } catch (error) {
      return { success: false, message: 'Login failed' };
    }
  },

  /**
   * Get current logged-in user
   */
  async getCurrentUser(): Promise<User | null> {
    try {
      const userJson = await AsyncStorage.getItem(CURRENT_USER_KEY);
      return userJson ? JSON.parse(userJson) : null;
    } catch (error) {
      return null;
    }
  },

  /**
   * Logout current user
   */
  async logout(): Promise<void> {
    try {
      await AsyncStorage.removeItem(CURRENT_USER_KEY);
    } catch (error) {
      console.error('Logout error:', error);
    }
  },
};
