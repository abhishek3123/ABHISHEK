import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="card overflow-hidden">
      <div className="skeleton h-40 w-full"></div>
      <div className="p-4 space-y-2">
        <div className="skeleton h-5 w-1/2"></div>
        <div className="skeleton h-4 w-3/4"></div>
        <div className="skeleton h-4 w-2/3"></div>
      </div>
    </div>
  );
}
