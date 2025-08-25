'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Import translation files
import esMessages from '../messages/es.json';
import enMessages from '../messages/en.json';

type Locale = 'es' | 'en';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tx: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const messages = {
  es: esMessages,
  en: enMessages,
};

export function LanguageProvider({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale ?? 'es');

  useEffect(() => {
    // If no initial locale provided (non [lang] routes), try localStorage as fallback
    if (!initialLocale) {
      const saved = (typeof window !== 'undefined' ? (localStorage.getItem('locale') as Locale) : undefined);
      if (saved === 'es' || saved === 'en') {
        setLocale(saved);
      }
    }
  }, [initialLocale]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  };

  // Translation accessors
  const tx = (key: string): any => {
    const keys = key.split('.');
    let value: any = messages[locale];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        value = messages.es;
        for (const fk of keys) {
          if (value && typeof value === 'object' && fk in value) {
            value = value[fk];
          } else {
            return undefined;
          }
        }
        break;
      }
    }
    return value;
  };

  const t = (key: string): string => {
    const value = tx(key);
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t, tx }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
