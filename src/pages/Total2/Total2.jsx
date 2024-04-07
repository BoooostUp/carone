import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';
import Hero from '../../components/Main/Hero';
import { useHeroSize } from '../../hooks/useHeroAttribute';
import QnAButton from '../../components/Main/QnAButton';

const Total2 = () => {
  const { currentPath, heroSize } = useHeroSize();

  return (
    <div>
      <Gnb company="TOTAL" />
      <Hero size={heroSize} link={currentPath} company="TOTAL" />
      <Outlet />
      <QnAButton />
      <Bnb company="TOTAL" />
      <Footer company="TOTAL" />
    </div>
  );
};

export default Total2;
