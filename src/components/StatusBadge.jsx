import React from 'react';

const map = {
  Pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  'In Progress': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Resolved: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
};

export default function StatusBadge({ status }) {
  return <span className={`badge ${map[status] || ''}`}>{status}</span>;
}
