import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ReportIssue from './pages/ReportIssue.jsx';
import Issues from './pages/Issues.jsx';
import IssueDetail from './pages/IssueDetail.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import { useAuthStore } from './stores/useAuthStore.js';

function ProtectedRoute({ children }) {
  const isAuthed = useAuthStore((s) => s.isAuthed);
  return isAuthed ? children : <Navigate to="/admin/login" replace />;
}

export default function RoutesRoot() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report" element={<ReportIssue />} />
      <Route path="/issues" element={<Issues />} />
      <Route path="/issues/:id" element={<IssueDetail />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
