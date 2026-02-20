import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StatusBadge from './StatusBadge.jsx';
import UpvoteButton from './UpvoteButton.jsx';

export default function IssueCard({ issue }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="card overflow-hidden"
    >
      {issue.photo && (
        <img
          src={issue.photo}
          alt={`${issue.type} in ${issue.location || 'unknown location'}`}
          className="h-40 w-full object-cover"
          loading="lazy"
        />
      )}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{issue.type}</h3>
          <StatusBadge status={issue.status} />
        </div>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{issue.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <UpvoteButton issueId={issue.id} />
          <Link to={`/issues/${issue.id}`} className="text-brand-600 hover:underline text-sm">
            View details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
