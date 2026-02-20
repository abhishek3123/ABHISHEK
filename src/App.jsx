import React from 'react';
import { Toaster } from 'react-hot-toast';
import RoutesRoot from './routes.jsx';
import Navbar from './components/Navbar.jsx';
import ThemeProvider from './context/ThemeContext.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-[#0b0f18] dark:to-[#0b0f18]">
        <Navbar />
        <RoutesRoot />
        <Toaster position="top-right" toastOptions={{ className: 'rounded-xl shadow-xl' }} />
      </div>
    </ThemeProvider>
  );
}
