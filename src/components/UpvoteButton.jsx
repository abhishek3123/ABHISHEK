import React from 'react';
import { motion } from 'framer-motion';
import { useIssuesStore } from '../stores/useIssuesStore.js';

export default function UpvoteButton({ issueId }) {
  const { upvotes, hasVoted, upvote } = useIssuesStore((s) => ({
    upvotes: s.getUpvotes(issueId),
    hasVoted: s.hasVoted(issueId),
    upvote: s.upvote
  }));

  return (
    <motion.button
      className={`btn ${hasVoted ? 'bg-brand-200 text-brand-800 dark:bg-brand-700 dark:text-white' : 'btn-secondary'}`}
      onClick={() => upvote(issueId)}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      👍 Upvote
      <span className="ml-2 rounded-md bg-black/5 dark:bg-white/10 px-2 py-1 text-xs">{upvotes}</span>
    </motion.button>
  );
}
