'use client'
import { createContext, useContext, useState, ReactNode } from 'react';
import { Theme } from '@/app/lib/types';

// Define theme configurations
const lightTheme: Theme = {
  mode: 'light',
  colors: {
    background: '#f5f5f5',
    text: '#333333',
    primary: '#2c3e50'
  }
};

const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    background: '#1a1a1a',
    text: '#ffffff',
    primary: '#3498db'
  }
};

// Create context type
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme(prev => prev.mode === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ 
        background: theme.colors.background, 
        color: theme.colors.text,
        minHeight: '100vh',
        transition: 'all 0.3s ease'
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Create custom hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}