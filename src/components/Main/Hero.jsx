import styled from 'styled-components';
import WelcomeBox from './WelcomeBox';
import caroneCars from '../../assets/images/hero/caroneCars.jpg';
import { FOOTER_CONTENTS } from '../../constants/FOOTER_CONTENTS';
import { HERO_CONTENTS } from '../../constants/HERO_CONTENTS';

const Hero = ({ size, link, company }) => {
  const textContent = link
    ? HERO_CONTENTS[company][link]
    : FOOTER_CONTENTS[company].subtitle;

  return (
    <S.Container $size={size}>
      <S.Text>{textContent}</S.Text>
      {company !== 'HOME' && (
        <S.WelcomeBoxWrapper>
          <WelcomeBox company={company} />
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
    height: ${({ $size }) => ($size === 'bg' ? '70rem' : '45rem')};
    background-image: url(${caroneCars});
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
      opacity: 0.4;
    }

    @media (max-width: 767px) {
      height: 28rem;

      &::after {
        top: 9.5rem;
        height: 28rem;
      }
    }
  `,

  Text: styled.h2`
    white-space: nowrap;
    text-shadow: 0px 2px 4px black;
    color: ${({ theme }) => theme.color.white};
    z-index: 1;
    ${({ theme }) => theme.font.FONT45B};

    @media (max-width: 767px) {
      text-align: center;
      white-space: normal;
      ${({ theme }) => theme.font.FONT28B}
    }
  `,

  WelcomeBoxWrapper: styled.div`
    position: absolute;
    bottom: 0;
    z-index: 1;
  `,
};
