import { Outlet } from 'react-router';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';
import Hero from '../../components/Main/Hero';
import QnAButton from '../../components/Main/QnAButton';
import { useHeroAttribute } from '../../hooks/useHeroAttribute';

const Carone2 = () => {
  const { currentPath, heroSize } = useHeroAttribute();

  return (
    <S.PageContainer>
      <Gnb company="CARONE2" />
      <Hero size={heroSize} link={currentPath} company="CARONE" />
      <S.ContentSpacer>
        <Outlet />
      </S.ContentSpacer>
      <QnAButton />
      <S.BnBFooterContainer>
        <Bnb company="CARONE" />
        <Footer company="CARONE" />
      </S.BnBFooterContainer>
    </S.PageContainer>
  );
};

export default Carone2;

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
