import { useState } from 'react';
import styled from 'styled-components';
import lens from '../../assets/icons/lens.svg';

const Certificate = ({ image, title, showModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <S.Container>
      <S.CertificationImgContainer
        onClick={showModal}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <S.CertificationImg
          src={image}
          alt="certificate"
          $isHovered={isHovered}
          draggable="false"
        />
        <S.Lens src={lens} alt="lens" $isHovered={isHovered} />
      </S.CertificationImgContainer>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Certificate;
const S = {
  Container: styled.div`
    position: relative;
    /* width: 25rem; */
    width: 100%;
    height: auto;
    display: inline-block;
    cursor: pointer;
  `,

  CertificationImgContainer: styled.div`
    cursor: pointer;
  `,
  Lens: styled.img`
    width: 2rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${({ $isHovered }) => ($isHovered ? 'block' : 'none')};
  `,
  CertificationImg: styled.img`
    width: 100%;
    display: block;
    transition: filter 0.5s;
    filter: ${({ $isHovered }) =>
      $isHovered ? 'brightness(0.5)' : 'brightness(1)'};
  `,

  Title: styled.h2`
    padding: 1rem 0;
    ${({ theme }) => theme.font.FONT20};
    text-align: center;
  `,
};
