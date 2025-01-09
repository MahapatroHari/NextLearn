'use client'
import { ReactNode } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { PreferencesProvider } from './contexts/PreferencesContext';
import { AuthProvider } from './contexts/AuthContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <PreferencesProvider>
          {children}
        </PreferencesProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}