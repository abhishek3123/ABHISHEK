import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      aria-label="Toggle dark mode"
      className="btn-secondary rounded-full p-2"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      {theme === 'dark' ? (
        <span aria-hidden="true">🌙</span>
      ) : (
        <span aria-hidden="true">☀️</span>
      )}
    </motion.button>
  );
}
