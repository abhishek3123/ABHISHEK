import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import FAB from './components/FAB.jsx';
import Home from './pages/Home.jsx';
import Report from './pages/Report.jsx';
import Issues from './pages/Issues.jsx';
import IssueDetail from './pages/IssueDetail.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Toasts from './components/Toasts.jsx';

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } }
};

export default function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24"
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/issue/:id" element={<IssueDetail />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <FAB />
      <Toasts />
    </div>
  );
}
