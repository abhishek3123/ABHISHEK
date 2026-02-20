import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { initThreeBackground, disposeThreeBackground } from '../utils/threeBackground.js';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = initThreeBackground(canvasRef.current);
    return () => {
      cleanup && cleanup();
      disposeThreeBackground();
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12"
        >
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Smart Civic Issue Reporting
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Report problems like road damage, street light outages, garbage overflow, water leakage, stray animals, and traffic signal issues. Upvote, discuss, and help your community resolve them faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/report" className="btn-primary">
              Report an Issue
            </a>
            <a href="/issues" className="btn-secondary">
              Browse Issues
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
