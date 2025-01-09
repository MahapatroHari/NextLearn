'use client'
import styles from './Header.module.scss';
import { useTheme } from '@/app/contexts/ThemeContext';
import { useAuth } from '@/app/contexts/AuthContext';
import { usePreferences } from '@/app/contexts/PreferencesContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { preferences, updatePreferences } = usePreferences();

  return (
    <header className={styles.header} style={{ background: theme.colors.primary }}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>User Directory</h1>
          <p>Browse through our user database</p>
        </div>
        
        <div className={styles.right}>
          <button onClick={toggleTheme}>
            {theme.mode === 'light' ? '🌙' : '☀️'}
          </button>
          
          <select
            value={preferences.layout}
            onChange={(e) => updatePreferences({ layout: e.target.value as 'grid' | 'list' })}
          >
            <option value="grid">Grid</option>
            <option value="list">List</option>
          </select>

          {user ? (
            <div className={styles.user}>
              <span>Welcome, {user.name}</span>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <button onClick={() => {}}>Login</button>
          )}
        </div>
      </div>
    </header>
  );
}