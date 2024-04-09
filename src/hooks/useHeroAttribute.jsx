import { useLocation } from 'react-router-dom';

export const useHeroAttribute = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const currentPath = pathSegments[2];
  const heroSize = currentPath ? 'sm' : 'bg';
  const isMain = pathSegments.length;

  return { currentPath, heroSize, isMain };
};
