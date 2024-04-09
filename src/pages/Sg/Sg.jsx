import { Outlet } from 'react-router';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';
import Hero from '../../components/Main/Hero';
import QnAButton from '../../components/Main/QnAButton';
import { useHeroAttribute } from '../../hooks/useHeroAttribute';

const Sg = () => {
  const { currentPath, heroSize, isMain } = useHeroAttribute();

  return (
    <S.PageContainer>
      <Gnb company="SG" />
      <Hero size={heroSize} link={currentPath} company="SG" isMain={isMain} />
      <S.ContentSpacer>
        <Outlet />
      </S.ContentSpacer>
      <QnAButton />
      <S.BnBFooterContainer>
        <Bnb company="SG" />
        <Footer company="SG" />
      </S.BnBFooterContainer>
    </S.PageContainer>
  );
};

export default Sg;

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
