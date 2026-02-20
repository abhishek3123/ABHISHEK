import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import { useIssuesStore } from '../stores/useIssuesStore.js';
import IssueCard from '../components/IssueCard.jsx';
import SkeletonCard from '../components/SkeletonCard.jsx';
import { initScrollAnimations } from '../utils/useScrollAnimations.js';

export default function Home() {
  const { issues, loading } = useIssuesStore((s) => ({ issues: s.issues, loading: s.loading }));
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = initScrollAnimations(containerRef.current);
    return () => cleanup && cleanup();
  }, []);

  const trending = [...issues].sort((a, b) => b.upvotes - a.upvotes).slice(0, 3);

  return (
    <div ref={containerRef} data-scroll-section>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-display text-2xl font-bold"
        >
          Trending Issues
        </motion.h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading
            ? [1, 2, 3].map((i) => <SkeletonCard key={i} />)
            : trending.map((issue) => <IssueCard key={issue.id} issue={issue} />)}
        </div>
      </section>
    </div>
  );
}
