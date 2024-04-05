import React, { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { SUBCATEGORY_CONTENTS } from '../../constants/SUBCATEGORY_CONTENTS';

const activeCategory = {
  1: false,
  2: false,
  3: false,
};

const SubCategoryBar = ({ company }) => {
  const [selected, setSelected] = useState('0');
  const [active, setActive] = useState(activeCategory);

  const onClick = (index, buttonNumber) => {
    setSelected(index);
    setActive({
      ...activeCategory,
      [buttonNumber]: true,
    });
  };
  return (
    <>
      <S.ButtonWrapper>
        <S.ButtonContainer status={active[1]} onClick={() => onClick(0, 1)}>
          {SUBCATEGORY_CONTENTS[company][0]}
        </S.ButtonContainer>
        <S.ButtonContainer status={active[2]} onClick={() => onClick(1, 2)}>
          {SUBCATEGORY_CONTENTS[company][1]}
        </S.ButtonContainer>
        <S.ButtonContainer status={active[3]} onClick={() => onClick(2, 3)}>
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
    &:hover {
      color: ${({ theme }) => theme.color.SG};
      border-bottom: 2px solid ${({ theme }) => theme.color.SG};
    }

    ${({ status }) =>
      status &&
      css`
        color: ${({ theme }) => theme.color.SG};
        border-bottom: 2px solid ${({ theme }) => theme.color.SG};
      `}
  `,
};
