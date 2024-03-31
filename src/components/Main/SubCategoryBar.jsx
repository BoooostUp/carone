import React, { useState } from 'react';
import styled from 'styled-components';

const SubCategoryBar = () => {
  const [selected, setSelected] = useState('1');

  const onClick = (index) => {
    setSelected(index);
  };
  return (
    <>
      <S.ButtonWrapper>
        <S.ButtonContainer onClick={() => onClick(0)}>
          이온정제유
        </S.ButtonContainer>
        <S.ButtonContainer onClick={() => onClick(1)}>
          재생연료유
        </S.ButtonContainer>
        <S.ButtonContainer onClick={() => onClick(2)}>
          재생연료유 공정
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
    &:hover {
      color: ${({ theme }) => theme.color.SG};
      border-bottom: 2px solid ${({ theme }) => theme.color.SG};
    }
  `,
};
