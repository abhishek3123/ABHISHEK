import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-slate-900/30 border-b border-slate-200/60 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 shadow-xl"></div>
          <span className="font-display text-lg font-bold">CivicWatch</span>
        </Link>

        <nav className="flex items-center gap-3">
          {[
            { to: '/', label: 'Home' },
            { to: '/report', label: 'Report Issue' },
            { to: '/issues', label: 'Browse Issues' },
            { to: '/admin', label: 'Admin' }
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-xl'
                    : 'hover:bg-white/70 dark:hover:bg-white/10'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  );
}
