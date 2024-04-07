import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';
import Hero from '../../components/Main/Hero';
import QnAButton from '../../components/Main/QnAButton';
import { useHeroSize } from '../../hooks/useHeroAttribute';

const Ce = () => {
  const { currentPath, heroSize } = useHeroSize();

  return (
    <div>
      <Gnb company="CE" />
      <Hero size={heroSize} link={currentPath} company="CE" />
      <Outlet />
      <QnAButton />
      <Bnb company="CE" />
      <Footer company="CE" />
    </div>
  );
};

export default Ce;
