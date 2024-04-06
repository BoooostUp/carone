import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';
import Hero from '../../components/Main/Hero';
import { useHeroSize } from '../../hooks/useHeroAttribute';

const Sg = () => {
  const { currentPath, heroSize } = useHeroSize();

  return (
    <div>
      <Gnb company="SG" />
      <Hero size={heroSize} link={currentPath} company="SG" />
      <Outlet />
      <Bnb company="SG" />
      <Footer company="SG" />
    </div>
  );
};

export default Sg;
