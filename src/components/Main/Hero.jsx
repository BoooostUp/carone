import styled from 'styled-components';
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
    </S.Container>
  );
};

export default Hero;

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${({ $size }) => ($size === 'bg' ? '86.8rem' : '54rem')};
    background-image: url(${caroneCars});
    background-size: cover;
    background-position: center;
    object-fit: cover;
    @media (max-width: 767px) {
      height: 28rem;
    }
  `,

  Text: styled.h2`
    white-space: nowrap;
    text-shadow: 0px 2px 4px black;
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT60B};

    @media (max-width: 767px) {
      text-align: center;
      white-space: normal;
      ${({ theme }) => theme.font.FONT28B}
    }
  `,
};
