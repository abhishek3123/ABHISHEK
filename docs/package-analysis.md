# Initial Package Analysis

## Features
- Smart civic issue reporting (form with Name, Phone/Email, Type, Description, Photo upload, Location, Urgency, Anonymous)
- Issue listing, filters, search, upvote system, comments (community discussion)
- Admin login, view complaints, status change (Pending/In Progress/Resolved), delete, analytics per category
- Dark mode toggle
- Toast notifications for status updates
- Smooth page transitions, scroll-triggered animations, parallax/3D hero
- Skeleton loaders, error/empty states
- LocalStorage persistence (mock data, no backend)

## Required Packages
Runtime dependencies:
- react ^18.2.0, react-dom ^18.2.0
- react-router-dom 6.28.1 (routing)
- tailwindcss ^3.4.3, autoprefixer ^10.4.16, postcss ^8.4.32 (styling)
- framer-motion ^10.18.0 (component transitions/micro-interactions)
- gsap ^3.12.2 (scroll-triggered animations)
- locomotive-scroll ^4.1.4 (smooth scrolling/parallax)
- react-spring ^9.7.2 (physics-based micro-interactions)
- three ^0.160.0 (3D hero background)
- zustand ^4.5.2 (state management)
- immer ^10.0.3 (immutable updates)
- classnames ^2.3.2 (conditional class helpers)
- recharts ^2.10.3 (analytics charts)
- react-hot-toast ^2.4.1 (toast notifications)

Dev dependencies:
- vite ^5.1.6
- @vitejs/plugin-react ^4.2.0

## Notes
- No backend; data is mocked and persisted in localStorage.
- Tailwind setup includes PostCSS config in ESM.
- Vite config validates JSX in .js files, optimizeDeps include, and explicit rollup input.
- Avoid @formkit/auto-animate per constraints; use Framer Motion/GSAP instead.
