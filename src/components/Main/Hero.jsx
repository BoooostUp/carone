import styled from 'styled-components';
import WelcomeBox from './WelcomeBox';
import { FOOTER_CONTENTS } from '../../constants/FOOTER_CONTENTS';
import { HERO_CONTENTS } from '../../constants/HERO_CONTENTS';
import { HERO_IMAGES } from '../../constants/HERO_IMAGES';

const Hero = ({ size, link, company, isMain, page }) => {
  const textContent = link
    ? HERO_CONTENTS[company][link]
    : FOOTER_CONTENTS[company][page];

  return (
    <S.Container $size={size} $company={company} $page={page}>
      <S.Text>{textContent}</S.Text>
      {company !== 'HOME' && isMain === 2 && (
        <S.WelcomeBoxWrapper>
          <WelcomeBox company={company} isMain={isMain} />
        </S.WelcomeBoxWrapper>
      )}
    </S.Container>
  );
};

export default Hero;

const S = {
  Container: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* height: ${({ $size }) => ($size === 'bg' ? '90rem' : '45rem')}; */
    min-height: 100dvh;
    background-image: ${({ $company, $page }) =>
      `url(${HERO_IMAGES[$company][$page]})`};
    background-size: cover;
    background-position: center;
    z-index: 0;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.color.black};
      opacity: 0.7;
    }

    @media (max-width: 767px) {
      height: 100vh;
      height: 100dvh;
      min-height: 100svh;
      padding-bottom: max(0px, env(safe-area-inset-botton));
    }
  `,

  Text: styled.h2`
    text-shadow: 0px 2px 4px black;
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    z-index: 1;
    padding: 10rem;
    ${({ theme }) => theme.font.FONT45B};

    @media (max-width: 767px) {
      text-align: center;
      white-space: normal;
      ${({ theme }) => theme.font.FONT28B}
      padding: 1rem;
    }
  `,

  WelcomeBoxWrapper: styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 1;
  `,
};
