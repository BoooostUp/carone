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

  CellContainer: styled.section`
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    grid-template-rows: repeat(2, 2fr);
    justify-content: center;
    height: 100%;

    @media (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
  `,

  Cell: styled.div`
    position: relative;
    height: 100%;
    background-image: url(${({ $backgroundImage }) => $backgroundImage});
    background-size: cover;
    background-position: center;
    overflow: hidden;
  `,

  Index: styled.span`
    display: ${({ $show }) => ($show ? 'none' : 'flex')};
    position: absolute;
    bottom: 0px;
    right: 0px;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 20rem;
    height: 5rem;
    border-top-left-radius: 70px;
    opacity: 0.8;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.FONT18B}
  `,
};

const Root = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <S.Container>
      <S.Header />
      <S.CellContainer>
        {ROOT.CELLS.map(({ id, cellImg, indexColor, name }) => (
          <S.Cell
            key={id}
            $backgroundImage={cellImg}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            <S.Index
              $show={hovered === id}
              $backgroundColor={theme.color[indexColor]}
            >
              {name}
            </S.Index>
          </S.Cell>
        ))}
      </S.CellContainer>
    </S.Container>
  );
};

export default Root;
