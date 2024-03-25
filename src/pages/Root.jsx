import { useState } from 'react';
import styled from 'styled-components';
import { ROOT } from '../constants/ROOT';
import theme from '../styles/theme';

const S = {
  Container: styled.div`
    position: relative;
    height: 100vh;
  `,

  Header: styled.header`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    z-index: 2;
  `,

  CellWrapper: styled.section`
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    grid-template-rows: repeat(2, 2fr);
    justify-content: center;
    height: 100%;

    /* @media (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3, 1fr);
    } */
  `,

  Cell: styled.div`
    position: relative;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${({ $backgroundImage }) => $backgroundImage});
    cursor: pointer;

    &:hover::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ $backgroundColor }) => $backgroundColor};
      opacity: 0.3;
    }
  `,

  CompanyWrapper: styled.div`
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%);
    display: ${({ $show }) => ($show ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.color.white};
  `,

  CompanyName: styled.h2`
    ${({ theme }) => theme.font.FONT36B}
    text-shadow: 0px 2px 4px black;
  `,

  CompanyInfo: styled.p`
    white-space: pre-wrap;
    ${({ theme }) => theme.font.FONT18B}
    text-shadow: 0px 2px 4px black;
  `,

  Index: styled.span`
    display: ${({ $show }) => ($show ? 'none' : 'inline')};
    position: absolute;
    bottom: 0;
    right: 0;
    width: 23rem;
    height: 7rem;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.8;
      border-top-left-radius: 70px;
      z-index: -1;
      background-color: ${({ $backgroundColor }) => $backgroundColor};
    }
  `,

  IndexText: styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT20B}
  `,
};

const Root = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <S.Container>
      <S.Header>로고</S.Header>
      <S.CellWrapper>
        {ROOT.CELLS.map(({ id, cellImg, indexColor, name, description }) => (
          <S.Cell
            key={id}
            $backgroundImage={cellImg}
            $backgroundColor={theme.color[indexColor]}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            <S.CompanyWrapper $show={hovered === id}>
              <S.CompanyName>{name}</S.CompanyName>
              <S.CompanyInfo>{description}</S.CompanyInfo>
            </S.CompanyWrapper>
            <S.Index
              $show={hovered === id}
              $backgroundColor={theme.color[indexColor]}
            >
              <S.IndexText>{name}</S.IndexText>
            </S.Index>
          </S.Cell>
        ))}
      </S.CellWrapper>
    </S.Container>
  );
};

export default Root;
