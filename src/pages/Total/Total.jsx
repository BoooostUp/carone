import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';
import Gnb from '../../components/Header/Gnb';
import Bnb from '../../components/Main/BNB/Bnb';
import Hero from '../../components/Main/Hero';
import QnAButton from '../../components/Main/QnAButton';
import { useHeroAttribute } from '../../hooks/useHeroAttribute';

const Total = () => {
  const { currentPath, heroSize, isMain } = useHeroAttribute();

  const location = useLocation();
  const current = location.pathname;
  const parts = current.split('/');
  const selectedCategory = parts[parts.length - 1];

  return (
    <S.PageContainer>
      <Gnb company="TOTAL" />
      <Hero
        size={heroSize}
        link={currentPath}
        company="TOTAL"
        isMain={isMain}
        page={selectedCategory}
      />
      <S.ContentSpacer>
        <Outlet />
      </S.ContentSpacer>
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
