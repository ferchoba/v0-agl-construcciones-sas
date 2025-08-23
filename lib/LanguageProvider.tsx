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
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const messages = {
  es: esMessages,
  en: enMessages,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');

  useEffect(() => {
    // Load saved locale from localStorage
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
      setLocale(savedLocale);
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    
    // Update document language
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale;
    }
  };

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = messages[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to Spanish if key not found
        value = messages.es;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
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
