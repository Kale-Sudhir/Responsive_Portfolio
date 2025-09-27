import { lazy } from 'react';

// Lazy load components for better performance
export const LazyProjects = lazy(() => import('./Projects'));
export const LazyExperience = lazy(() => import('./Experience'));
export const LazyForm = lazy(() => import('./Form'));
export const LazyFooter = lazy(() => import('./Footer'));

// Main component is kept non-lazy since it's above the fold
export { default as Main } from './Main';
export { default as Header } from './Header';
