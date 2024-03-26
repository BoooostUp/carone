import { useState } from 'react';
import styled from 'styled-components';
import { LNB_CONTENTS } from '../../constants/LNB_CONTENTS';

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    padding: 1rem 0;
  `,
  CategoryContainer: styled.div`
    display: flex;
    gap: 5rem;
  `,
  Category: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14rem;
    padding: 1.5rem 1rem;
    background-color: ${({ theme }) => theme.color.ce};
    border-radius: 15px;
    cursor: pointer;

    ${({ theme }) => theme.font.FONT16SB}
  `,
};

const CategoryBar = ({ company }) => {
  return (
    <S.Container>
      <S.CategoryContainer>
        {LNB_CONTENTS.OUR_COMPANY.map((item, idx) => (
          <S.Category key={item}>{item}</S.Category>
        ))}
      </S.CategoryContainer>
    </S.Container>
  );
};

export default CategoryBar;
