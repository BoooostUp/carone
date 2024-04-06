import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';
import Hero from '../../components/Main/Hero';
import { useHeroSize } from '../../hooks/useHeroAttribute';

const Si = () => {
  const { currentPath, heroSize } = useHeroSize();

  return (
    <div>
      <Gnb company="SI" />
      <Hero size={heroSize} link={currentPath} company="SI" />
      <Outlet />
      <Bnb company="SI" />
      <Footer company="SI" />
    </div>
  );
};

export default Si;
