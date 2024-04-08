import { Outlet } from 'react-router';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';
import Hero from '../../components/Main/Hero';
import QnAButton from '../../components/Main/QnAButton';
import { useHeroSize } from '../../hooks/useHeroAttribute';

const Si = () => {
  const { currentPath, heroSize } = useHeroSize();

  return (
    <S.PageContainer>
      <Gnb company="SI" />
      <Hero size={heroSize} link={currentPath} company="SI" />
      <Outlet />
      <QnAButton />
      <S.BnBFooterContainer>
        <Bnb company="SI" />
        <Footer company="SI" />
      </S.BnBFooterContainer>
    </S.PageContainer>
  );
};

export default Si;

const S = {
  PageContainer: styled.div`
    position: relative;
    min-height: 100vh;
  `,

  BnBFooterContainer: styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
  `,
};
