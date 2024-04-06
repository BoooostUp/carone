import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';
import Hero from '../../components/Main/Hero';
import { useHeroSize } from '../../hooks/useHeroAttribute';

const Home = () => {
  const { currentPath, heroSize } = useHeroSize();

  return (
    <>
      <Gnb company="HOME" />
      <Hero size={heroSize} link={currentPath} company="HOME" />
      <Outlet />
      <Bnb company="HOME" />
      <Footer company="HOME" />
    </>
  );
};

export default Home;
