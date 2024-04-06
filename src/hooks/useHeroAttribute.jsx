import { useLocation } from 'react-router-dom';

export function useHeroSize() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const currentPath = pathSegments[2];
  const heroSize = currentPath ? 'sm' : 'bg';

  return { currentPath, heroSize };
}
