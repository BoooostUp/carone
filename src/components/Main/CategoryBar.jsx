import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryBar = ({ company, category, selectedButton, currentPage }) => {
  const [toggleButton, setToggleButton] = useState(selectedButton);

  useEffect(() => {
    setToggleButton(selectedButton);
  }, [selectedButton]);

  const handleClick = (item) => {
    setToggleButton(item);
  };

  return (
    <S.Container>
      <S.CategoryContainer>
        {category.map((item) => (
          <Link
            key={item.menu}
            to={`/${company.toLowerCase()}/${currentPage}/${item.link}`}
          >
            <S.Category
              $company={company}
              $isToggled={toggleButton === item.link}
              onClick={() => handleClick(item.link)}
            >
              {item.menu}
            </S.Category>
          </Link>
        ))}
      </S.CategoryContainer>
    </S.Container>
  );
};

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
    white-space: nowrap;
    background-color: ${({ theme, $company, $isToggled }) =>
      $isToggled && theme.color[$company]};
    border-radius: 18px;
    cursor: pointer;
    color: ${({ theme, $isToggled }) => $isToggled && theme.color.white};
    ${({ theme, $isToggled }) =>
      $isToggled ? theme.font.FONT16SB : theme.font.FONT16}
  `,
};

export default CategoryBar;
