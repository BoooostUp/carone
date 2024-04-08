import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';
import Hero from '../../components/Main/Hero';
import { useHeroSize } from '../../hooks/useHeroAttribute';

const Carone2 = () => {
  const { currentPath, heroSize } = useHeroSize();

  return (
    <div>
      <div>
        <Gnb company="CARONE2" />
        <Hero size={heroSize} link={currentPath} company="CARONE" />
        <Outlet />
        <Bnb company="CARONE" />
        <Footer company="CARONE" />
      </div>
    </div>
  );
};

export default Carone2;
