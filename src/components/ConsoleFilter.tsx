"use client";

import { useEffect } from "react";

export default function ConsoleFilter() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV === 'development') {
      const originalWarn = console.warn;
      const originalError = console.error;

      console.warn = function(...args) {
        // Suppress the invalid attribute warning from XellarKit
        if (
          typeof args[0] === 'string' && 
          args[0].includes('Received `false` for a non-boolean attribute `invalid`')
        ) {
          return;
        }
        
        originalWarn.apply(console, args);
      };

      console.error = function(...args) {
        // Suppress the invalid attribute error from XellarKit
        if (
          typeof args[0] === 'string' && 
          args[0].includes('Received `false` for a non-boolean attribute `invalid`')
        ) {
          return;
        }
        
        originalError.apply(console, args);
      };

      // Cleanup function
      return () => {
        console.warn = originalWarn;
        console.error = originalError;
      };
    }
  }, []);

  return null; // This component doesn't render anything
}