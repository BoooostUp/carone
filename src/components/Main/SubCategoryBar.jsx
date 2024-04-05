import React, { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { SUBCATEGORY_CONTENTS } from '../../constants/SUBCATEGORY_CONTENTS';

const SubCategoryBar = ({ company }) => {
  const activeCategory = {
    1: true,
    2: false,
    3: false,
  };
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(activeCategory);

  const onClick = (index, buttonNumber) => {
    setSelected(index);
    // Make previous active button false and current active button true
    setActive({
      ...active,
      [buttonNumber]: true,
      [selected + 1]: false,
    });
  };
  return (
    <>
      <S.ButtonWrapper>
        <S.ButtonContainer
          variant={company}
          status={active[1]}
          onClick={() => onClick(0, 1)}
        >
          {SUBCATEGORY_CONTENTS[company][0]}
        </S.ButtonContainer>
        <S.ButtonContainer
          variant={company}
          status={active[2]}
          onClick={() => onClick(1, 2)}
        >
          {SUBCATEGORY_CONTENTS[company][1]}
        </S.ButtonContainer>
        <S.ButtonContainer
          variant={company}
          status={active[3]}
          onClick={() => onClick(2, 3)}
        >
          {SUBCATEGORY_CONTENTS[company][2]}
        </S.ButtonContainer>
      </S.ButtonWrapper>
      {selected === 0 ? (
        <div>Page1</div>
      ) : selected === 1 ? (
        <div>Page2</div>
      ) : (
        <div>Page3</div>
      )}
    </>
  );
};

export default SubCategoryBar;

const S = {
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
  `,

  ButtonContainer: styled.button`
    width: 100%;
    height: 5rem;
    object-fit: cover;
    border-bottom: 2px solid ${({ theme }) => theme.color.lightGray};
    ${({ theme }) => theme.font.FONT16};
    ${({ variant }) => buttonVariantMap[variant]}
  `,
};

const buttonVariantMap = {
  CARONE: css`
    ${({ status }) =>
      status &&
      css`
        color: ${({ theme }) => theme.color.CARONE};
        border-bottom: 2px solid ${({ theme }) => theme.color.CARONE};
      `}
    &:hover {
      color: ${({ theme }) => theme.color.CARONE};
      border-bottom: 2px solid ${({ theme }) => theme.color.CARONE};
    }
  `,
  SG: css`
    ${({ status }) =>
      status &&
      css`
        color: ${({ theme }) => theme.color.SG};
        border-bottom: 2px solid ${({ theme }) => theme.color.SG};
      `}
    &:hover {
      color: ${({ theme }) => theme.color.SG};
      border-bottom: 2px solid ${({ theme }) => theme.color.SG};
    }
  `,
};
