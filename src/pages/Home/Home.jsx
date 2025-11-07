import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';
import Hero from '../../components/Main/Hero';
import QnAButton from '../../components/Main/QnAButton';
import { useHeroAttribute } from '../../hooks/useHeroAttribute';

const Home = () => {
  const { currentPath, heroSize } = useHeroAttribute();

  const location = useLocation();
  const current = location.pathname;
  const parts = current.split('/');
  let selectedCategory = parts[parts.length - 1];

  if (selectedCategory === '') {
    selectedCategory = 'home';
  }

  return (
    <S.PageContainer>
      <Gnb company="HOME" />
      <Hero
        company="HOME"
        link={selectedCategory !== 'home' ? selectedCategory : undefined}
        page={selectedCategory}
      />
      <Bnb company="HOME" />
      <S.ContentSpacer>
        <Outlet />
      </S.ContentSpacer>
      <S.BnBFooterContainer>
        <Footer company="HOME" />
      </S.BnBFooterContainer>
    </S.PageContainer>
  );
};

export default Home;

const S = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
  `,

  ContentSpacer: styled.div`
    flex: 1;
  `,
  BnBFooterContainer: styled.div`
    width: 100%;
  `,
};
