import { Outlet } from 'react-router';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';
import Hero from '../../components/Main/Hero';
import QnAButton from '../../components/Main/QnAButton';
import { useHeroSize } from '../../hooks/useHeroAttribute';

const Total = () => {
  const { currentPath, heroSize } = useHeroSize();

  return (
    <S.PageContainer>
      <Gnb company="TOTAL" />
      <Hero size={heroSize} link={currentPath} company="TOTAL" />
      <Outlet />
      <QnAButton />
      <S.BnBFooterContainer>
        <Bnb company="TOTAL" />
        <Footer company="TOTAL" />
      </S.BnBFooterContainer>
    </S.PageContainer>
  );
};

export default Total;

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
