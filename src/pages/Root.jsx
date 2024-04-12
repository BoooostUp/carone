import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/icons/Logo.svg';
import RecruitButton from '../components/RecruitButton';
import { ROOT } from '../constants/ROOT';
import theme from '../styles/theme';

const Root = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <S.Container>
      <S.Header>
        <S.Logo src={logo} />
        <RecruitButton />
      </S.Header>
      <S.CellWrapper>
        {ROOT.CELLS.map(
          ({ id, cellImg, indexColor, name, description, link }) => (
            <Link to={link} key={id}>
              <S.Cell
                $isHovered={hovered === id}
                $backgroundImage={cellImg}
                $backgroundColor={theme.color[indexColor]}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
              >
                <S.CompanyWrapper $isHovered={hovered === id}>
                  <S.CompanyName>{name}</S.CompanyName>
                  <S.CompanyInfo>{description}</S.CompanyInfo>
                </S.CompanyWrapper>
                <S.Index
                  $isHovered={hovered === id}
                  $backgroundColor={theme.color[indexColor]}
                >
                  <S.IndexText $isHovered={hovered === id}>{name}</S.IndexText>
                </S.Index>
              </S.Cell>
            </Link>
          ),
        )}
      </S.CellWrapper>
    </S.Container>
  );
};

export default Root;

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
    padding: 2rem;
    z-index: 2;

    @media (max-width: 767px) {
      padding: 1rem;
    }
  `,

  Logo: styled.img`
    width: 10rem;
  `,

  CellWrapper: styled.section`
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    grid-template-rows: repeat(2, 2fr);
    justify-content: center;
    height: 100%;

    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
  `,

  Cell: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${({ $backgroundImage }) => $backgroundImage});
    overflow: hidden;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.3;
      display: ${({ $isHovered }) => ($isHovered ? 'block' : 'none')};
      background-color: ${({ $backgroundColor }) => $backgroundColor};
    }
  `,

  CompanyWrapper: styled.div`
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%);
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 100%;
    height: 100%;
    display: ${({ $isHovered }) => ($isHovered ? 'flex' : 'none')};
    color: ${({ theme }) => theme.color.white};
  `,

  CompanyName: styled.h2`
    white-space: nowrap;
    text-shadow: 0px 2px 4px black;
    ${({ theme }) => theme.font.FONT36B}

    @media (max-width: 767px) {
      ${({ theme }) => theme.font.FONT20B}
    }
  `,

  CompanyInfo: styled.p`
    white-space: pre-wrap;
    text-shadow: 0px 2px 4px black;
    ${({ theme }) => theme.font.FONT18B}

    @media (max-width: 767px) {
      ${({ theme }) => theme.font.FONT12SB}
    }
  `,

  Index: styled.span`
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
      display: ${({ $isHovered }) => ($isHovered ? 'none' : 'block')};
      background-color: ${({ $backgroundColor }) => $backgroundColor};
    }

    @media (max-width: 767px) {
      width: 12rem;
      height: 4rem;
    }
  `,

  IndexText: styled.h2`
    height: 100%;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    display: ${({ $isHovered }) => ($isHovered ? 'none' : 'flex')};
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT24B}

    @media (max-width: 767px) {
      ${({ theme }) => theme.font.FONT14B}
    }
  `,
};
