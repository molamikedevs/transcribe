'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import * as React from 'react';

function ClerkWithTheme({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <ClerkProvider
      appearance={{
        theme: isDark ? dark : undefined,
        variables: {
          colorPrimary: '#4E9DF5',
          colorBackground: isDark ? '#1D2128' : '#FFFFFF',
          colorForeground: isDark ? '#FAFAFA' : '#252525',
          colorMutedForeground: isDark ? '#A1A1AA' : '#8E8E8E',
          colorInputForeground: isDark ? '#FAFAFA' : '#252525',
          colorBorder: isDark ? 'rgba(255,255,255,0.10)' : '#EBEBEB',
          colorNeutral: isDark ? '#FFFFFF' : '#000000',
          borderRadius: '0.625rem',
          fontFamily: 'var(--font-geist-sans)',
        },
        elements: {
          cardBox: 'shadow-none border border-border',
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <ClerkWithTheme>{children}</ClerkWithTheme>
    </NextThemesProvider>
  );
}
