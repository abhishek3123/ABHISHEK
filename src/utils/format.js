export function timeAgo(ts) {
  const diff = Date.now() - ts;
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export const classNames = (...args) => args.filter(Boolean).join(' ');

export const id = () => (crypto?.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2));
