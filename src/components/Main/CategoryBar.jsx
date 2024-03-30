import { useState } from 'react';
import styled from 'styled-components';

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
    padding: 1.2rem 1rem;
    background-color: ${({ theme, $company, $isToggled }) =>
      $isToggled && theme.color[$company]};
    border-radius: 18px;
    cursor: pointer;
    color: ${({ theme, $isToggled }) => $isToggled && theme.color.white};
    ${({ theme, $isToggled }) =>
      $isToggled ? theme.font.FONT16SB : theme.font.FONT16}
  `,
};

const CategoryBar = ({ company, category, selectedButton }) => {
  const [toggleButton, setToggleButton] = useState(
    selectedButton || category[0],
  );

  const handleClick = (item) => {
    setToggleButton(item);
  };

  return (
    <S.Container>
      <S.CategoryContainer>
        {category.map((item) => (
          <S.Category
            key={item}
            $company={company}
            $isToggled={toggleButton === item}
            onClick={() => handleClick(item)}
          >
            {item}
          </S.Category>
        ))}
      </S.CategoryContainer>
    </S.Container>
  );
};

export default CategoryBar;
